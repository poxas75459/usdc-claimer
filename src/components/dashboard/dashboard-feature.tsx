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
    "5g7YV1bpE2yCThLvXbuYDyhfNExCfd9GvXKdo2D2iyQKH5pZUmoaPPNVT2XUzwp7hGpJYyc3eVRSUEqpcoQEoM1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E73hpCjeCgN9FE7pCNeUvYU8ZoqoYigjQnxRS1kqzLioKnkLZR53gMHXFJTNF1X1EtN6XrxwU2icdMRMNvAUN4L",
  "key1": "4wucp3SmFhoxJBifwSaMDqfoArxyUVUkbozHhMFngqiRJ2Vx1gbgEhf6ZMiR9ATkDUmvSktRkhCBHykocmfwKWtg",
  "key2": "5HmWbSN32Y8B6mMN89BAxwtdndFqi5kam4wA6e2ndSUgN2Vanb6k8pDnB1pdVYSmNfsPe8XewubZ4rBgRDoNV33B",
  "key3": "4uaTyog3vboFaHXTDG46jaqmL2PgN4pm233TfWMZozWQbRYwpdvnP5RbHtTDS32JdHmuvxqyDuabZ5uWSpJ87snY",
  "key4": "5C9eY42ToEdRFvNHze7JcSArLWo2619dcc1989K3vkfcp76skkif4CHf4wbp941QriMwQ5WQr13NHdy63WBWCMrq",
  "key5": "5GH6LbKD9Z3HPjppvX3dmtfAvnfT6QoNYpNU6MP7H1ivrs7TJeSgBRAYWQwkh9f2mEZszgHpHbjEoJEd58T5ozqB",
  "key6": "4bX7tzGeDbU1bfumenArYz1yutBLgX4tUNTuBAn6xiga3vmVJmfAbGhZdcoe43KELWgRJLJDgFetn5nXmvvKQtSQ",
  "key7": "5Wk4wE5AbxUg9QHBNmqvjB6zMCwfSDupXZoJWzLuCEj7AdTgS5pGcWSckzYzFQAYMmGLinv82SG4YdDDPzR3kMoE",
  "key8": "4GdRmpzU6UUTe1gyjDKRiELHVEt1MANTvnTpXP94MyXWRgNyQAtWQVUxqd65igECvaRNYgheXwQ1r84z4aTqSeHx",
  "key9": "2J2RGKFqE6VjsKLRVGJiK3G9iATq2j89XUq9ujf2NyEZwoqwYT6C3FeTap3UXdfmBH563PUjfhohjfNrxnGFSEqj",
  "key10": "3fqWyUYGRTGHhKQ75P5h4nzEwmGBtoeN5XxVMhL6CLHEFVSC9nwrDzexQXDyiVUPphMnNDp8KPWyEMMDquF1EgG5",
  "key11": "2Gq5thhqu7GMBmDZ1TK5VYojuhjFyqbcp1rB7S8Zw7mBJaPYKjqfm2shT9Ppacme54uC5UKQVwEP9ZTew8NTMunM",
  "key12": "5XbHRkURhMu9hiKyuQqoAs81oaWuxZ3Uq2DhNBKTQJZy3y6ECwVJAdqGQKTr1sVNGDK9EQvbVkGp3USpBcgggFr5",
  "key13": "62hgY9GeLwa68MbCWQhYstaqEyxsRws34Yq7beGPRFxEx1rRQCAQcWzPYUvnQCJ5g5YRxwkfkLVTAwH6Du5RhjdB",
  "key14": "2uwsBy2pXRudjnoSiNhx1FpSq2zMMD4XoHGXSGM1WDy5PdoutMSuSnxh34Xf5p7yqxPgF4gLUtuJfuwkVsR4EEqj",
  "key15": "ZVkrTA9DCMEiK3MTQY4cTr8DTm4rRsZmcj4GQJjrz71DqeSRCkX3phwZhdV3Lp7aJ7556rc9YhXdTJCR8k9Ear6",
  "key16": "28bAEuy3HugVWcqMtEBviyS48o9jYJWWV45ViiEM68spJsqSkRnPcks6z5vRYv9NPHdjbEybmKq8gcJ7rLidq8EA",
  "key17": "9DzhUja6XNdPsJVMthrS3N9r5EQFnFru4mUyZ3xwMvn7wd1GU1hvxuvCYQn3ifLNLjsQKu7HWtim6E1NfkzmLbB",
  "key18": "poXtopW5FUJZhXVxjYtWFuACPERhLamx5tqkZAzCkahiPcaPJ3ep5325tqha8mdTTh3n7usXaugmHNj37tjaC5k",
  "key19": "2Czcp9k69cccgVCxzie7Umu2mDsyFfAC7ncjhZezZjjkeH7csLHbFYGAUnDzQM6HDxQv1f24rFFpEW6Uz7vccGtK",
  "key20": "5YjFc1nRUHBAEjgT9aC2KVYwu6MeSXPQmyD2Kh1Qc338aheBobKi9phmPekwdiQEY36miJHvt5WadheZErHrDiaM",
  "key21": "2BiVL2KABmTHAPJCxFdBFAaophU83BiSJpLCCF5RpJAwim2Gk57ZmrKwJGFXMVdFGCLSgFLkHtD1gWz7vGfpv1J1",
  "key22": "3bLnHDwXhEnXBmkjWbHwznxkWD9rwhGpWyeXo4PxU3zxZcr6VqzHppox9hVqCtFPmfmpH1oTkkT6rmBqoKZA3XQn",
  "key23": "3EETmySwpGeLBo7Q6cnJwC33QFEW4xWZQ2HKQiLH7MK96KrwDbC9E8vw7xtg8hwhFNDRMEN4BNYvfBtNrgc8Huus",
  "key24": "49tUTxpwMiPdGa2vyCkXHk7YJeu486WhQmxryCPpQ9EixkZk18u8R7zetxW4WNcyZHKXfkNgYTnnCpFaYoQ6A3iN",
  "key25": "5XBvCgxrb13Y2kkWimzTpNpsrm2BqijoAiN27yigcnSubmTQxDbev8WXDmgHwtHyjHqvovVePW68a7iUKdMwPHyq",
  "key26": "5xeiGE2woDthHvAYaFUMh3QnJE1gQ5rtXw12wy9cpWag11UxFmnXdbkFwFYjNdsi88XrRzM6gfHUu2xD2wAHQsJf",
  "key27": "5qQhkdA9sBbAwMMBKqjwS7sBa7oRTzb1KUxVFdrTi5rFDboWVBDM5YNpSwySYsuAzEBMN4aebJhCAnErXYAVAddA",
  "key28": "3jEyod2XvqZmakHaJCA4pxtNH5S8qwoyadSFW3sBtoHm4D9r71MPHQjVBvqqYoaE5gr4uvzPohrXWmUF7oh8Yj7v",
  "key29": "3AwEvkd7u2Yiac6PtfYbBGth3vLrEf8KNgDD8Na2xXdsfyrck8L62CBg5jZNz8RD6ygQe4iNFBnitDDCgqjxpay9",
  "key30": "49G4aXqeW25z9XwYw8PUdYC7vRfX5V33Gso6pYt8sBDUQ9ERsSzbpfDeksdVgSXDAU7tgSevZUzwm3SqiRfqLPDN",
  "key31": "2ynLjMuRNsZZDknEBBMhF5aYv3uUUpAJGMdaTWzysdP291AVVcSC3tCB3gXJ1MZmVvZRQBua8mayhH4eCJuDi7tj",
  "key32": "38tJKu4CHDhVBVaRTvFrQsWhfXyABsbfbP3mdDP9k6JbiZhdVLDWf8Ls9HznNY14bJMmYAgCXoJjH462HfoaT19s",
  "key33": "41wDvASXr96Q91cN7w9vv4QCETDc9cAPhhnocgp9HL91EvEZgZvjMhSPJpBTFBM9tsPncyBJxdC5oZ2GsJvn5gk5",
  "key34": "ffBGFpag1iJxfiqrBZYP4nkq8ZDsddPXG8f1osjD9abbLEgMRoTfJbj4LVFJRPmqtF4SexJX85rbLLGxQfCX5H5",
  "key35": "4M4Gs1znYDX46Km8PvqnFzUXhWZvauW8dTPteaTp4rULNpdeAZVKpUgHnta1cAYh8tz826Bhcpn54K3hJnu2PqHT",
  "key36": "3aTnGpDj8LMS1DaJ4sy97cXLVYuuT1QxnKU4XFWHmFWAso43qTCVtwM7uJw8fmkEiA46XAnBM7ht8jvLMfwVqJ1r",
  "key37": "39vZ2SXs3VR9JNQYY3FMLqEEJfLFFLx9tQkPqNp3ThwXaPUSuQaDmSf1gQDR3w5kw7dZtPRrvWoVbDYjpG7t2CHB",
  "key38": "3kXecegpseDwn4bFq6xKxhsV1k7eBRjtoPdsAr69Y4x8aLJjc3UFJUfn7YYxTZRcZMg9aD3bZWfenr3g5XpYWtxr",
  "key39": "2xpWjnrRVa1ygAM7X63bQ3gF5xpBTwFgd4GCcetrEyBVg42WgG5cPhPSDwB1qev4j4W6G27mWnPTWiicawxKh3hN",
  "key40": "2PM5K9tSUYfe3sNdJnM2PuctBV5mGsfkkkYXjGiLKbhsP9X2xiPg7sCRBjFPayapXtZsNTggK8Vc6gFbBFbjgh4X",
  "key41": "Pt3s4cRXVCB2yy9L2bp6c1qTMjoz54W32ouZRoyRUdwepBSnK1Ww3CsUwhZSRMck19GYMDZeEvMwccNCwigxhhQ",
  "key42": "4saz5RhFUktjXHQMHUbGjF4q5U1MDQQ3o942k1pKuDYpDZSrMgZiM7GrpiPCDU7ERRRjFKcDHK5sWJBmbahzbqrP",
  "key43": "24k1f1AtBYTtsU73HbgLximsETVwinBTMLc8Ldvx4QNo8Bi9FAUxfQtM3gxH5r84CmqTzvVsWXeT5dqxp4xKgmzQ",
  "key44": "PkWZA3RNqJLkQcG1VwEKdvK15ThFL5j5wTied951PQg5D3gUE9DQexkso9EMMheM61C12gbFMExvXnQ4q5u6uJC",
  "key45": "5TWSiEqKnCKFxSjLcf6qN3jvwQdnYxMCiHF3SAR1xuDqnWEe8D7x344LuJgoU5f1VCGPdqkynh9fhFX4gZETxHEa",
  "key46": "3hWhoUWtZGWQ3uqegLiULnsGq9D4u4RuqteXwAg4xcdkAcQdSQ1dVmW1EXmqBHyqqLjpUCN7ewWMStFuYYnscwg8",
  "key47": "aEcp13KBpLyG7GD43pyyLgp6Mme7AqPpZoa8cJ4Y8JoDqxCSF5SWLZphpvwKA585wj2vFCjfA9AtW98a5kWqqhk"
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
