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
    "51pKZWp1TXaB5AW8GrLBZQ91SriGAoHRJVj1MwJk21Xh9Zzetdft4JFLNgeHZrRvGAmmvdDqVs6ZtfZtK7L4o1eD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S4y9dScBZD6wmeVHvgc598sJD1sNygRFf2GEGDJG9HgkunKf4xR2GSkiB7nZr6koFwwtP47c2Ge172JVJghS2Du",
  "key1": "3NnrYUYk1kwAne5DaXD6NJyE6XVQngpsLZeB5FYok3prFR3RiaCiGUwyimAio8aYQvYVi3nZznzaHG4oN7ZiFSmc",
  "key2": "44tqTRr8tZ9gdQyQLW6ekA31RGuUBdEqajgrZcbeYjWym2L5rEm7eJ6RDL1237Z2TUbRsPubyur6NaBMSrKa4mfD",
  "key3": "58E3GdkvT7LGkxnDPdCSYnEsUJXXb8cJumKDRw55hDMFHHtNp4pxYBvVa9bzpsvFm5AAyhGZvk3hJA6jQRas9bK7",
  "key4": "2A7nZiedkHxdGPLhZ86f9csqJq4t2N1TczUAVjKUGJwfsJwjwrewtUEqrK1WLY1bHcCQ1W5CL1RBcYHTebSavAEu",
  "key5": "2ydun3kw2RrG4PgjQdAHFYZVQ33X78NnoBc2vBMfzGQyuXvh1dZ1EVjsHeeuhXr9ouYKrumXsQHjKPN6kK1PyLWt",
  "key6": "3bqVoXVHAcywusuyQ1Y5T3eCmFqcigt2HDVdTfGpRiwR7S6h6Nm2J4eEHTpYcnNFEq3efnfiLr2c9qtsaFXCXQLB",
  "key7": "XnrwexYQdrb643teotXzpxZJuHooU1zDR5hqGpVTpw6u9oPUUfTAn4DD2mjSrBEqAoY3XbXwEieUGze5fq5ySoD",
  "key8": "3kc9pa5AaAg3cv6noP8PDqqwCe47HTQLBJekxHBB9xZUCQ9bQ7TKNetVtK9aRKpWh1ZtuoaaNLLBgKQmfHKYxBJ6",
  "key9": "2FfSr1yMMKpuNMXdzmxd6kszxkUQJ1M3yrBc6ytcq3WH75b9f8GtNqArgGV3WJZc3k8i3hXjfZXjFb2bYKgrfyZM",
  "key10": "3v4MyyJpTGMW7f1VeisbDcoEvci52Li1JCqCTC2YL6cSHAkWqimKxbnWrRm4KJnrp3httMYeFQyCaiYJjWFy2hJy",
  "key11": "5KVxYeAMDcrekxYJvq1Mbbb4ca8XRBYSSGipjLb2E2io35be5TByUVsXp6zcTCr52S3VmSeFuufcMdzCLuG7Y4EB",
  "key12": "2wih9PBKqz5aGfDNwVTJpJLUxezf33YXkNQ5TnY8RQ1BGY9aAxy7xLqLvrAyo7TBDZXQymMwe7dwPQGLgKsszHTa",
  "key13": "2LWj38YTZE3iR8NL7GwMeE3ofJGBsdpQHcmeE5CJaX95gehEDD9Sycjcf5C9js3jAH7LgpDfQxP7bXN5Hbo4VVRf",
  "key14": "gNTjhN1LYwREZ4K4hYqsVFDmxjgzncXgoTCD1b4MgeUctiDi3AukuuJxoaBJ1Y16PDWAfUKvFfcw3JsQtsMWXvD",
  "key15": "vB717E6mXLSM1LfEkXE2NRaWXH1a1G57dbWQxFScgUxgSd9AYZPPHad3SnPxHa5eXvHAV83qUD3YTtEYkHYYwTb",
  "key16": "3TAjd6DLVg1BRRrDBWboZt6W3PKBJ4VbVRFecg1dWRnsLUdEv9pocWLSat6yVqM3PHLWTzhAZSerYPQ7SFQabTmy",
  "key17": "mNaRU21bQYPNM4qGge6WCXe2EvQBHB87dTgFH7WbByH1A6uvFGrjijBUWLZhQYC7JvRyKmca9W38j1vFVhHyBbv",
  "key18": "2aN753Lg6tJSqksPnNAyo4Sy1cManH1vnAfpKCyJnuCbyyp4hW4o6NK51wnnsrnqC9qvpEem4E1tpEwPvwCwbYAG",
  "key19": "356jFFDtGMLFnZsbnwxeiJ87PQfCYMiEuPzd3ozR1iyXKr5QJWLw1L48kyJJEPGcAfRR1mXBSEUw3RfJhpmR6DcH",
  "key20": "3kNbMWjDwSgToECHtejSaGop454iLmz4BnzuVRQEMcYf2DbKViVfGbLYwNh9c8aVd5cUZqVrAmxuh5fDkeYh93C4",
  "key21": "4Jt7NNwXmpkRePQaw1M3LqaREBhdqfuSr8kChix2dpQga4ZtPGv1arnQYU8NfN2nHmZ73aCpvBdA8t2KNGEXhqvb",
  "key22": "GjkrUNcHDvKfx92cwLgdEA4stxKLZRAwmwVNwfLcxtu4XeS5hHRzoAm2WtDuFfcU7vYULFnKrmZNtSRYVJEE1cx",
  "key23": "4CKwnwJgVUwQmTU8qxH8o136bXyjDTRb1C95BH53PAZem4ymBJjkyBpMMBSb7vgzj9LdfezkcG8iLoTfuLCjwhM7",
  "key24": "3TF48GFg6J4VBzPNx9AcJzFyf4qqVJXffJvt8bdtqRRMxferhyedKjJsqMnsXQqHY8QwBoZqq5JQt9YjnyjdqvgX",
  "key25": "5CDWKoCUdHPBNfyXMXiXrK758Zt7r5pQZ7khpgNRxt9JG3BHYK6uL2FfPkgQy7VCRzzyzzarAZrnFe2JCrS4qEhN",
  "key26": "4nDMYyrpNeZyHizixor3q8wRKDsZhohjZjLagLuzwJW6KXeznFuXCj8PEVNQY94ymUU8mUS8RpAV8T9zkVdUHziA",
  "key27": "7q9CGuWk8R2tCntrYf48Eac4uQhEchsTcoJTj7wSXCq4MYDar1Kz5pdQryL9HZDV4VWL3Bnp8PFSxKWVGQ19tFY",
  "key28": "4HKSTVK1uUQtJMjrki6ZRvXBYfQYJutZ4zKo1YjnnkGej1X4z8zR5qBMFKnxuyCajozmkDtRU932tkb8jWy5Cw94",
  "key29": "2ny8aVz2pVHDeoXt9kkZUKJrkyjcrdTHs9GgnFHGBPtsGiy3kXa1mWWTTZ335eGTobDAgSufNtd8fbM5mw8EdYbn",
  "key30": "4yemN2NuT6DJktwvZXXkP4BnuHFvizk4Jhp4PHhqYpVeVMBP2MqQsLKQRWAY3LrCLvAinjwEvBtm2KuLjvNWPQgL",
  "key31": "Y5PFFwsZ5juTrM3i7wyWvJtarnxMVWVP1rHMgJdSsdwutQuQd7aGM88vRuSJgxM5USUPsFF7xZr9qkTGkVdKeVx",
  "key32": "26TJ7rvuRJjW83gMuFP6boEpzPjQiRNQJmh8P2qbcjU1zTrqQBRGJdpvuuJxJkLqDEAML959H77i6fMqXcLmeVvZ"
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
