/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3H1CkHmGUJNaGfobdoUUMs3XKH8KJDYmQyxo6DwjbLxechRGZ2Yq7oThVU4iVmkW4qLhuxs4XrvXBnEE5jHC83MK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NNfwNYZaY2exbbnM7hs7zobXNdza1Lj7d9p6sac2hFp5kLjHsr35zgVSFeqkR6VXpQpixpzmNJAJAra93nokceg",
  "key1": "4fUZpFjcTuFobeHzEy4v5A3vE5r5JtXgPoQvu4WRppC9evFMTfrRjtZuu29mMfkG3QYddy1f9BAWWTTkqR3Z6QdC",
  "key2": "Dvr1gFJQSUrSyeF9ERjJ2UV8syNYbAS8R71UekMepM6XDbQJ9rJ8fSkYktyW5TVnxiVroWuZuxgKV75oeHzfeX8",
  "key3": "4etUisPg8iEDWAsUeht5W9m1NrJ92nRwLe4YaP4EWQG3ZGXGeqzhdSBT1sptPasVsKgsZVFykVwVoM8Q24tDm7iR",
  "key4": "48wnXkjsMyerKwxXmk43k9SzPrJyjzDbh4ENWGdHX4dpsdCJvfDqQUuXTqLki1v3DeMrqNWNb8LgN8RKniPKS1s4",
  "key5": "pWBbp41TKEC2C4aojo3zyF1ttphzqx6hkt128kRoGLvpJC3PyJz8cX8TEjqRXoBAiS9iJLGRQncXnPUJL2TYYNE",
  "key6": "4YJDU2NpaHQ21VzLFuP6qDW2Tt1ob3nqvc7fLb74f6SFVTRMo2SvqaWsWprtKGg5AtdwavwMkGquHSz5Xk97WJb9",
  "key7": "5oUbsTfoDHbf35GwypcttgGA4Aja7c7L3oyosD7QgzUmA8m76gtSzKiBwFYwbVGRG2ueoZGXrEk63fVMmpoYXDyG",
  "key8": "3YzfBHjzEGrth5JKkEbVzD6z9XmDtGAw9B8ghtzqhoXihf1QfhkCTJ97BX13ChRCqd3aJeNerWocvNois5cPK6Pf",
  "key9": "3GzXVgfumiEeYiCJYhJQociqMu5UKX78LPdEfUoWfpNkV8Wy6ovWnbVU9yVkH5sjCmJHK6GJ25Jwcb6ep5gJ93J8",
  "key10": "4XaFuhjGCUKLB16Z7o8evaWpkt6dR5LM1gL8L5n7cwYBNXdGGmbV7bxdsaV4SATKgsNCuEsChNY5n7orGZmkx9Kj",
  "key11": "2Db9QDB99E9iHK3ikr59dFpejZszc5WJSvxLAFEbTGspCAnHx4MYgcdgnEPGTdAEJyKqPZnvpq5PNLBLhDaDACoJ",
  "key12": "21EXARVBnzD7p6VesrqDhESNcWoUwm8ry1MZHnZZcinpfvSHQM1tQY5mswZSqKDANwrprMPPy2v9sk9pyTkjibU8",
  "key13": "5tqKirbtz5tnG7hEYpC1Na9CicLKCNSUYoYv9mMqMLGGwPS5iHe2qBPZXBdU561V2Vr4nLXBXApEGux9bZZLs7vZ",
  "key14": "UAkg6zWUicVYPkFT1UT9CeCHcgtmCvfcAGb95iLsSzfjrTjXEkLjuFdwJKoWtxwNxqVJtFPMC6uCNWPPruYD4uo",
  "key15": "428YVggWX9rU9kz6xR6S22LKAPyxzuH8jVy7n7UwFQ2rs4U7M4caKSHitvmvnzUvVRgtXowSHqpKS1BWyQDJ9zbD",
  "key16": "227ng65bwzrEtHyaUvy6xwWWodJBXK9QQ3LiGoLisHethmgpcNSkCh2Shu7w7NWxLGgyY3yHsvWBHcK6QaFziLvw",
  "key17": "4Y6gQ39piZ9CbwgzRpDF8oqRWxE9ZZ3ax68g51scKsLyvfwqTXHPNzMNSbXYiZ7yvao2ErwTDmJ1dHBoWcgA745R",
  "key18": "4PTLzgZAJ2ssxpVrpksoQPF8pguBucLSNYh9m3VFLbzyD4CQZ6i5jyE8YiK3QuRk8NUQAN5F9eJNMhfvugWVSqwa",
  "key19": "5fjg6bPbUAyFQeJaLHXwrcB7Yg1MxEWkJaXKXbPcYoLdaT6GoMLrFJchDNz8xduNKoUKLhqbtxecV4vRLDH2kj6a",
  "key20": "2TjLZTK2fNsVaenGGr6poQ4ag1QukgG2EuNP6uK3h2uMHahfsdaSYRUtzZqdyPneN4uoFKyVNFXSDCCsiBtFNVZd",
  "key21": "5U4GJ7ANvtxbEPcEcPpPVD2woQNDUdZArDS32hcT9u2N91LuRCwxChMdcSNqEh8LJuAvkLm55Y7EJ8u6gMTsdALQ",
  "key22": "2KJPCozYigy8FwX24qTk53AAFmEaGwZjhfiHW8UrZ6Um8mdWrsGSQP96zVgZvv19kKc5RzhJQkLo438zzsUrFcoc",
  "key23": "2fPdersvF4nHcx9GdGrwxQinozZK434CaCpMKipboUZ4mqAwuCSFsxSYKJ7rgocnqk6h5eJ9JMB1KokNZUZJVGSd",
  "key24": "3B46aFC6um8MBsaqDg4Sj5PikXQWc82YA6WfKvJMi21U1PRJ5ajKQTJqva3ocxUmRpK4YDmSW3sNuHA4aQQAqAQf",
  "key25": "43YKyqxe73qSmqq2FcFUGRUAgqi4Tt4WknJgMupUEHTyF9q5H57C6Xr8hxphNyZpBBxUXoXLjRYCCrivwkLBSFBm",
  "key26": "2fJRWJSfrBQ1cqrRt9sXNS2UokxWLB2beqhqPXAj3C19EjpLaZutKKW4Q4p4tpZ12wyDMTy18ByJatoqUcD3X39U",
  "key27": "3Uf1QTuNf1wef9AtwwCF8M8MTSB5oEamvy6LJ4Q6uSS9VZj9h8FiXgtzAg9Sp5VayVnLiw7HLV6HUvTVV7Y6v9Qa",
  "key28": "2WgeSLhHfkiPYGXTQqhKVQa8znFAZguLEPgCbPud3C47nerfwWeof74QvM3pwvTBAEopj7ToZjLmvjS2X7QjKVvn",
  "key29": "488W6gcSaAFnTG4tc2e9LqysnUDupTvG74br9SRiZsk2ttTAoJioTfFNisbPj1scxn88GqwCUs6h7kGfSnwTJQLU",
  "key30": "65Fk71Ve2q7MFrRQe54fFxSSXwRNt8rQyeSo7EdChUoCa5FM3BqV3izNiyqLZh4pzfwgcdh1FaCuwhr81Dfjs6b4",
  "key31": "5aB3Mi5Mst9WKaqQxneALBTHhVcyzuemh8FSzN5nC34R3wsdqzqpNVnefbGWEH39pv9fdXoXnu4As82LKfxCKbaG",
  "key32": "35cVUSFWWqjBvTuMxc6UMoENYH9Yu37kakYpsP6iaraib8PGHLZz1RCs8y4GY2pBAQXVDfm67JSVbNTqhciJ5ciC",
  "key33": "43y8RwUm3s5sDs25E3TQ9bA9dcxNwC6vHQbmhvETgTP8VcZypCMLBLLAisuMpbqJ2tsKkKbN2zWWnnajU8ugmFXb",
  "key34": "2riHDZ7EPyAUdAD8mtUcWjg1nqFzmANsHApqyw7FxTxtQQNU2vHD9Mn6CZ5fkZYzEmYnd5QjmTsrXHQLZbyopqpT",
  "key35": "4edQM5Nx3unrACN79ssHi5w1sCi8yMZ1b56EArsUYEL9AUnDHGsXWS3uDFLjKCXZbdYApzTrV18k3tLiASTmyaQC",
  "key36": "GpWCNrYDBWURMoTZXyx4ZehNb2cejD2LSwEQsJwJW7jPWtUcQqq6CYbJpeZajx6g2yK66z9eomzxa2HqoNGyYtd",
  "key37": "46tPLemug2C9wtXYDnMmpUALEaXaMf8c6SFdJ4iFpMBBZuNQTNiaq1GgyAMGpPNGgZ7fZEBSuVgUmcaSaYxFfRYT",
  "key38": "5sjRp15WBRDGEjZGx3JvG8NPxHRv9BBAJuLfMe6uixAfsLk7iKiyra1bXSQukVmb7Zx8Lb3gYnSr9q79jozhd4R9",
  "key39": "cgyiJZLC4ei9UdXGMSxe7Up9Nn4shN3rmiDMfjft9CGiirw61GsCde9RNpewMSQu8jBpigcLQoeZQemRMoBmpRN",
  "key40": "2Z2YR8GLq4ENT2twn676iFntP1MZRnELdW8qkzrEiZ557CXyajSUhck3tW6dsRdnJYbdXQbLvXAWQk3C8KZ3JCNR",
  "key41": "5GpSi7D5byvGcEuJfRHcD9FTvwXzLiwCEzkSSJ3HSSmy7MVWgYrDeqYqP6ftdFNcimT3Bh2hvhnGsq9wGFYWs1HN",
  "key42": "3pNVXAqEu6K55Phonxz4YrVbEkpVoZewVyzLNpWeULiCLLkHUQ1p2651zJiAmcmgXzgH7Ah6n3fz7PVBRVDvNyky"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
