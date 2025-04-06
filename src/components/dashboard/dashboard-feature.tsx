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
    "5wpXyjV2bjx1mPn2whXCaqTMkzhJ3bBgzrJYavwAeFtnQqktVqhYcA3j8dToMkeQJ6R6Mk6RQ7hj1oHe7cp7H6TD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "noiZKBYRrRmNnhqkXw2b3WGigmzgyPysf7KjAm9zLkD7MHG3AJaZax8kFRCiXTMikntz5EJASwpgFUdbHYzzGnA",
  "key1": "38t1XtPJ5BfPGFKzWQF8gFvTArYFYfJ6QNtYMt6YWpPyFj6jTbeS3HtANSzPdgbgqgXML2xstuNarPhZYBTybg4r",
  "key2": "63qngtYVznmYyC2ukMKHX4QLJVmStQBggzWbS5EiTrN5mfXtKbDzZDPkR1M4wV3MxYbkkr2pD75QQB2tVCUnEMKm",
  "key3": "314vokixhMDAAqSgQUPcyH8y31UEEVMyWUxwjRzEpAwpxZs2th9ZbxxR3gZaC3dP8m7cRQm3iiLNiyGf8KoGjRvG",
  "key4": "fAYjfL3jUVerYHjRpSsYincmH6qcESLJn1YKESCKAHnoxuRvgG63C8iEAyNSLztj6uWUvaaETafWRWoHt8qTmo9",
  "key5": "4UpqF5RXfFVFGnw9Q1jSTpo9mgYd6aVMnY4u2nPyfqwns696fD4ESYXqr74zk8Fg2d5k1YvJAXJErpiC1Rvsa8Qa",
  "key6": "EHvwFBSDdg32eqHSt2FaDvAek2RQ8sisfbJTpJNZN573SDFEbYxrzAncDWLnXRQcKU15EAU5CFSFNGarohZTtKe",
  "key7": "4Jun8eVP1y9DakpEvK6odyNMqBmiTQtRk3vhWKXBRi6uem2wH23iHvSZSPzK5eNP5rSdCCNHgmFFpgnoHP28bXnw",
  "key8": "24sL7Z131pFVPcJZjvEwLiCZY12PizLar9n16vwoF4tvrzRTYLnoXqMeJyRP2iKrhTTgWmy8QCffTcTV9rnz3uQG",
  "key9": "29RSsvsyvCBX1FCoteHEFxpdgKfGqTFbfRHTYyib41ckoUar1Zdp32MuFJLe5n5L1NQ2bnufNnZp1VMBBvwZyi8Y",
  "key10": "62N8XzS6pQeQgzhUkdUoLwSf8ecaZFvoedURyEnxFMSG2c3C3WGDUjLdTp2KsVXfKFPutpd2oPwb4VHR5ZL2qgxe",
  "key11": "339v5g3PqXXaHRmnqnHcGBmPJKBzP5q3PASPh45eqQnPgAvxSt82uae9vrYxUhpBRm8ZPwD2366yUg4KtLjXVFtD",
  "key12": "3djYSAWxNu9XyKoMRD4smrGDAFyxQfvWT6usmAzbdJupWv39ogxd7NRVnUw7gMksWLaintn7kJtCBCBKmnCc6gZa",
  "key13": "3a7JzBKSPx5bTCadwKK1tPbCFJM3ysqowBgSZdtrwq8k65biki3t4U26hnCfqqNjHyGuRo8yznjVLAWSRTqjw1vi",
  "key14": "33a1mANWfZXPxU25UGhJmWqXyEeTiyJqVoXCmTYgKCu4ZWQmRZpRCy8ecjuWfbiNAngZ49Nmngg5EUMRDw3v5wrt",
  "key15": "n126uXFFSHtb64YprfiXrugrNzwcjPn94mEUq5XH1ZWKJVP6LTbGT1EkSQJVTfWLLj3YSuL93bGRUN6tsb7RyKy",
  "key16": "5dPRBbRSELp4ihMTWLY2TnLM3tuNnDT9qNFAKwzJBSRHXSs3V1gZLiTsoUYKUrtnmt5za84E5Q78dwxiZ8CxAD4Z",
  "key17": "bjEjyavEmtnt8JmQG3NFojoYvvUpQTCefvqGyjQADhHHiNMqgyXSaxiGBz932bVJ7HkDRnk5osDVqnCF1pNUyzX",
  "key18": "3prwFA6srPj61btEoE4FjaG53pEDUqMHEcUqcbso1PtZ5PypF3ozqBWMLkeVe3i2BZJx7FyND7Zw3wqesqSLNjy6",
  "key19": "52Hwi2Y27E5QucD5JcD8YbP3VbYi3hWzwedPQd3dQ2a4JWMXkAKkduPyDjJDNfPKSgWtZyoiHmniwSyquCDZuFaG",
  "key20": "31yqvmxTTkEkp5QZ7g1xwwXnqYezbfMJdRUVSLzAWh3aPxALKd45zX7EMhQqftU3jEiujNa5sxuQqcpyvvyQKy9H",
  "key21": "26GVsxbUuMDEktNekLeGkouLuoEMhVCZ8JuZWG5i64j4rncEjoyYidGSrPMa5HNWKFf7yZNUmQaxLPKHWJVAjMQM",
  "key22": "2Ca9KBPepkwMahmBFVyrw8teHhsgiGPV95V6PFxzEGLky6T8om9JSeaA9nrmYhCDHMqiQYkHDccc2grV55vHMqZP",
  "key23": "X29dmsAvMyzsAn3LJ4NwyuUbeRhF3nHF9caedqBdE5CYT6VLNQnQYAQdKJEaoW6xamRqyrB9wT2zBanqP98FEHC",
  "key24": "5ksuUPozPVPwcbHyUHzR6vZh7TmhTSLgT9DjRCd8HzceJF22cYpyEU6bjpq1ZyXTekr4RYTNz8yAiJKCzQptpMXg",
  "key25": "4hazrAmaEM1QkZXgynvaAVKcwjJyk5d8j17qSjdyEmNL6jBkB1Ch3ibEXnGVPGpA3gRAZapoTHg4b3JrK1f5AHwg",
  "key26": "3SdU3xUvP898wCJ7Y4PWLmNR3DG9kBB6m4TESXPvgguNXhZ6nKxyEXTbLUmZKnvrWbNsYvrd1iBukSkrp6gBvtnK",
  "key27": "3J8Z8Z6RNQX28tcLZ6JduHuGWazZDts4ZqPNM8ZJgjzjifZEmU4qt6tk1EhqxBGbZQvrUhT9s1saKQwRkqcJmW96",
  "key28": "4qRaARjUtNhrtB5sCVWrRhtPFm4twjv18wTV78JuqXF8eVfzKxAt6N55cnBc2XEh3XPiibH2TKrM2YweM9EQj49Z",
  "key29": "47NJV5XDCkYPPLoDbK6s9FdXhdx6Lt1yG3utEkXpMRGyesxwqTk8mD7ZZykh61qucCcUUeG7413EaeBj8QSVyMPd",
  "key30": "5g1B55GCdTfg14aPbSmz3QqnoiErrUKPfYZtoN3T1zsobXu9znjGfJUaFPnLwweb96jbD5t84A19eSrE1npseKnx",
  "key31": "4yxhpuByywqDrGAH8HYCFzM5R8qEn9KXBj2qwE4CQ6N3CBP4JWGfdR34uUrmifai6BzwQAwJFMyC7htdKsyZxSMa",
  "key32": "53bptSSWPqzZM9WCuLRgAejRE6ET8ombHhQyJYZTN3X3DrYBGPP9se9JqkGijB3wV4Eut4serMWS4eDruaiXisHf",
  "key33": "5znbhLrpks7z3FSimTY1FMpT9Vo9LJzP7ZTuJK7xt97Tj759MvFXG5MsrEweDf8LtJr9Gxif3Fp36vne1yAzwhiN",
  "key34": "ywXkd8pHF5Umoe4TFfHwS2Ca9nq2eQpvFiopCytiotTAE1s4EYEJEkoK6zgdhDoeJ6CzJdmEgKyrdjXpRJYHA6V",
  "key35": "5H4tu4zkrsAKqzHtm9QrgWnmMT9tMGMkpbEtiXFLexNQ2vWT9n4hQxbUVzSHy5ii1zCKTrzKf1nXHUco87Uv1VQS",
  "key36": "53Mr7ufK3ZiGpw8gDALYbzCJu79CLNjEvjUCW7XLE95udyiCWibdioryt9kRB1cZVkJWXTh8q1X5pZ8EGYqBXPmc",
  "key37": "mP9SSQKbAH7Fchkb5nQEg5T4P7C3f6tDQUfG4sHJ4UNeyVyQKE97eVJXcpc25b5bWpLo4keSz7WrAi27grup2rf",
  "key38": "3cRWnJ7KgVYoFyKu1uY9GC9KdAXT9aCWJ4h3xuKWsff45j6K8cjCtyusNgrojBqCfLH43kKKM5RMwe2JUGzB5Ez8",
  "key39": "tKnLrMPBzfz2jRDYtMGw5VaVXhqGAgb3YYjuGCH64zCtgzt9Jec79fSbtWU6k3uzxmrAAuy7aTDzSZZT2R8EncS",
  "key40": "5cJ7LVvS6AzD3cnwYK98b2uDdCwqNoMg6K3snLXCd3qDzvSdUMicN3eSt6mUfahgmFPsWJvvNFYBANJENP6vgtgg",
  "key41": "8QYekV7eGDKBtfxdifHeWwzzka4vDc9A9JvhYV8wJiqiaMu7XsPYWakHAQnMh9a5ho77vwvmAN2h5yvB2LvvWYC"
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
