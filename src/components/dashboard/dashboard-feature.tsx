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
    "4bD5AoKSJHqWmQicsEMPGyEwi2w3hB38A6C9K17FGz5KZephwXCtoKmpjqUhqW4MZin8prQkeTWtWundw913ib2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QrMRNbRQ7MxBcek35jQBiijapjAC3rZt9FkTvceTAmTUzNu3eZ54ksTf3C6hd1Au8JEiN1jjq3FAFFGzS5b7qjj",
  "key1": "4fjDiD1VD1sgkq3h9ztLfMniFb3yLcNExh8bKhr3U2C2EkMMWEricVNC9wmVuSWw2mkxVLpE2qzWzhw5J721CymR",
  "key2": "42tqyffTPZMZ71aou9Gf3yp6BNNrHo35j7cxk6YKjWodE22Tu7NiqKgEweMbtvK3c1bq6YyGxLR9bQTSFKW9bgh",
  "key3": "4Sk3S1t9wsbxFpd5Cbijd41CX49aqEhYtoLKgABD6cWZtbdBNJQHcJvRNEF9R7o4MUurJA2WRTph4evA85Aphp3A",
  "key4": "4pKqrXDCXzHqUcvcCDbidnXEX9qRc1AHddPBoRVPkD8xQf4kGC3TQ1dYuvDVSqNMCfwEWY1BZD8SvAw4c4VqyjvY",
  "key5": "3jo5PqUd1Q7qNnDKi8UMd8tSSdynAWqar2yJN3X8aWkypMuFapktM7Cv8xZiAMjwdNZ2zL4aNsSNxDp9PE1Z2YJZ",
  "key6": "4FuzzUsmBGyeMUeVtGNYV5f9HdRbc5crJfBb2VSTb7JTrTERwdmmTuhyvJtSfUszrRMr4H63GccURF5zpxjmKPR1",
  "key7": "3wMP5kYqYSbVW9J9aeZvVJNHMh9Nxfx9Vg36fmCFdnoe4gDZE5ipP5Gx3wYBT8AkUuPD85ktG8YWeYWP8jSpMnRo",
  "key8": "5CjDqAoqPMpBAyC4NEJRjJPk5bzSKjgSueFSCDk4Y2UQuUnkNg7XtvBr5Q2Hnr6BY16obDwsHn4z2mpYDo8bYX5p",
  "key9": "5ptTinX11b6nruLk5LQTH48kZakqmcWBBqKA4nsKF8jnvrJ1y9saYSNjZDbW8dhoRw28gcMbLtoSrTsVT8vPTPMH",
  "key10": "4Z1SDpQEC3U5oGvRBAH6HPAS97qVyvqoFZKVwLp8Vkmh932ukRCPZAuYs7N6r6bZ84CJ8si4H7qkPoWY4Aqei4wP",
  "key11": "3j1AerC4xUp5EDq2xqb4GKU1cq5kgeKTniKrihkAqMPaCFmpezgq8u8F35mf7TnupF4rMKWRXYByBu7my1X1bhmW",
  "key12": "4snRnVVNMRGZ1ZTkpbMGaA3W7AwYQ1vExp7QcZzLYVUXt4RXwdupRDmxsnWsCt78VXaryAJ476K8NPeFJbMn8Wwq",
  "key13": "4Zka6uy74F8C4qw9dYYeHjkUNVcyAduwZx1bPVSCKwZD7H5fr4Xe2UNFrtNVVj8iEKwcpyti3LBWcoHTcuoninTQ",
  "key14": "37B88ooKsUCvNympUDSTdtcXSjbf4sJ6p4LMET298p5DPoNcgAz9NewtFRB5TYgJ9DD56xRsMf1KvMUXbywKgnD2",
  "key15": "2CqRnF64gmzoAEPkQZ8i5U7x2ucA2FwXrBL2wgPvmEFDW9MEPDED9RZHSBoQWSpDe5HJU96TH5cMXWZ2d26MDAzz",
  "key16": "4fWJzUmiZHxSiSyUJxzYrzWQtjofARhdmj67pQxoPN6kX28vPJRHP6VRVhkKRfz7QPL968wR8RNGwK6yeju7zxuB",
  "key17": "Z7b5uB8mt8cVLfz3ptWrDWboMGNyZJRvLpbw8Bz1DuvncVQ1UBnoGXRYYrXhQDahS5ZWvP2vWs1ZSnECdGka8rT",
  "key18": "44n5gAqoSE2YRXy8kJoiJvMB4KtcAsTdWf1VKyKsuayJBd8yx9dqvAWJzEdzDfCMdmTUyHbsaKrHDFkyEWQZkwmo",
  "key19": "2q6oL4g5BW4mnCNfon7hA7jvCwYdYLWi56AzQMZKMzN9QSs4HfJUvESLRhqh3UkbfvwiMdyTHkDrxyFvnh6r2BUm",
  "key20": "3HJafppwNKDVzvaYKrsJXks15w1bCrEq3gbHuGfdqnmBVFdBMoDNCZuU5EebLR3kyf7bfv2MnttdZVof8W5eNDeQ",
  "key21": "4UwVEpDF6JPVw7CU9283sxEdELgjp3tM1wCPWuPim4ACeDNAAwnkyoEH9jCEGMhVqLzzrn6mGofLULvK19kHcoj9",
  "key22": "jyZMYwiBhV4xxeT8xDKMWndm65cXttYdz6dBaaRB996nX5SGJAGpuGrW8mG519a2oEzWzUHENmZEzAEp4HUnakF",
  "key23": "4EJHyTETQVRdmn6oRm3fEvFkm7DCxipfq1sY1YDLHZaX36uHeNtgLvUM6BCSK8hw5f5UpVhJet7jmYgUuqNajCyN",
  "key24": "54Y9JJGCJhWTDNMjAskYGLm8mnaS5PbR5GUUJ6tKYARYtkqNDoUHW2YTNfKzHb25YXyiHq1MyXLsb8bp9jqZPkT7",
  "key25": "4JpaNa9KCsvEKQP2anEwNAJ3RgFaX47mppAgwLaFYfEMm81JUy9JkctnVmHJUVJ1tVtR3LSvvWG86GhdzqmJik73",
  "key26": "5Zp9reMP3TvHV2ckcYq29b8rU7AKswEdr57EizEmYM9Tw8QVk7rzr53jJfyzPmccmx8FNHKMhV4inrf7ZQDN43Mk",
  "key27": "4MJ3wuxRXH9uNPYtMsnmfe7aft5CDWBi8zxSorGBoLRXnSLJQeUfes47SrdPHQ6x8XJfua4dexri1CLJGbB9eGuh",
  "key28": "57mtGwgd23uvEfhdDDKoBhdnxAynG4awG1WYpXSuo1pmMmfXsbX1CAwoB8teLeeAMGfesGY2ZCgCFemCudwjq5sX",
  "key29": "5WyciwRPvVSm6un8BvCpMWrNjWsKvYH5PTa4GPpo19AHhU26um4KWtpc6tbPEjvS8UnpwCSBYSH9eJDLLceWU78e",
  "key30": "4PRT229L46bT8EjuDkcp4PqcV6HATjdUSj2zyjNyUgu5tF9oTMstyyEQCpN4K1qxQwMgcJrJiZRgWHutRw1QN6eT",
  "key31": "45YTzJA8GLBA9QT2vrPQiFcMQmYEBvwJDRJM6LD9Z1q1D7Zrrh65UMr1QePGCtW3K2Fn7ZVJxQMUfqdQd4bdE8uU",
  "key32": "63CCabeLcduTQ8AXjuy4PWa3Pz8n7Eju9LXsUnf17LB1FaZ15qhyPjnozL3DwRTNc27wrWL6aSJJgFMXCFHAgiEJ",
  "key33": "UxiPA5VPrwvgMNx8WRde4FvZLt9hGFB9je2HbdFVTjYur3d8CMehzXdoMS4Dwhp6fDJSJB53rJj492sZ2zHVZ6N",
  "key34": "3eSkUhXewRBVPTV6eDRHiJUoS5QvfTbEB3kXGLot6JQZWy3cLKZxY2VdMravZYrjKHifV8peVcBQUCMsWSwJaBN3",
  "key35": "5LgqkGDFeeyB2EidKgKM3r4bn7DHRd9HM88MozCw1zxCRnGnhZijoBRAwvGRbEgdDHgWW55k33gaAgitwESgtEWK"
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
