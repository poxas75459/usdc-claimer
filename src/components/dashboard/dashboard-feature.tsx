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
    "3zWvcvRpFoGPenDZpdimN6fvB6CGRMfaZqHzwUE6t8jJSGJBQR8W8tP6LqUBLkgbHtoNyqP5FQRxLqPNgyo7oEsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dnnqRE51WjdJkCw38CeeqoGSu7kRX2mT8nvrCwccm9VFAPWzFYpVdx1bmZtmyy6DPFRNSDSFrxoRubg1oDfLanp",
  "key1": "zYQnskZ3GJkP4eFdgbE1bT3V9h17NFDjhVRi3xGeQLkmvQvAywykTB3dXazVtcRzXqRvp4FCqzyDPpS5x5yqFu2",
  "key2": "481U5jFKuUPu3PbPNHbUUjfMwKrDucSDGEn89CUnbwn4WVttwa4DyngpZdkaZNG6BuwoMPS1r3Ffec8HQZpU4BPd",
  "key3": "xejpRKScnoRUy9WP7ZNmSzbAYj2SK6DL9x25oSK8xo7bHqvBufu6U7rxp4FTVLmEoLugtTh3H2mUAScdeUVCGHC",
  "key4": "2XNM8HZX21TtPQQkDt135Asc6pCmL6HgWb8L8Zw7Cuf8VVw62EQ2UDoS3pJ1MEdZvSjDWAj74htVwqYVMYJALav2",
  "key5": "3kF3kgPahUbzrGoFJM7Rw2hKWxnzswS6x4FSuch1mg1kwq9A4V4bxWmBgvz4JGtx85BbuVMPnD3dpWRMDqSjJVUU",
  "key6": "2gG6JYHBYZmA8AsRTy5AZek3G6KkYTWWhkrx19FtGzVivLRfmCCGPqppD99VWuU85Q3twA133ACUhjqa16YDQeo",
  "key7": "59vctwMxgf5tDETaM7qWNbdnubSh9GXk611PZrb6fj8A15X1Zufre7LnNLGzTV2LkKtx93U7dDDuiwT7U7Hkj9Lo",
  "key8": "3rUcgJSgF63FGiNL2UaRW18r7ajfDuPaBq9XsXg5bE9wdeXKy4K78t9SbsFBTnspYaNnqU54YKZVKMqYDrfYZ29e",
  "key9": "uNxGPqRiqJU6CmHBbiewEE92Mpjsmq1BeueJeNAfn5ssd3r7YPm9qJht2VtvBEDcetfkP7PE2kJkoZzxLLWNxDE",
  "key10": "4D33y4EYJVeKEBfQo4wSJq8MwcVSuTWWaH2kQZA5CFdHRDY4opuEAQJTzKfqCvHdJuhyW5XL3EawsyYDknGAUHR4",
  "key11": "4DMLdWrjwRHMzntU2cDVkp3t93xMCWiVpMQuyEyLaj8JjR8rziqYnv5QjCSKQM9Z2k3T35LCMkEun9aFbWD86ERj",
  "key12": "4qkNyWeYP59PMxDELgmkZVPv8biDoa2D9QEshq3worTyMp6hTEMnnzY5cK7xxSsG13DFfwKJWtfnNtx6Ugmzwcmk",
  "key13": "5thqGjgS68jARvgggvxQ8iWwx4wc84Gwx4xx5R83Vka7hkwPmaVV47EK5XxtmEmnR5sJXVYW48jbqNyVxyTzmrju",
  "key14": "2fYPjRPF3TBCz8G9HvSDKrQKJfCDpTzeasMgVj3r7gkcfweMcKGozGowdRcb9XCX2WxRWzmQGPzRWcQDdXpqgNKU",
  "key15": "5atZDYpeL9meizXTgCtCYjbVJgjkZ1CQqdhyCV5rFXYEUvKDBJpU4PF9SrL3NasrikEkT7X9SGPEhXFP1JgYNRNd",
  "key16": "5aauFdLdGhLCRbGAhFEkEgQ7LnNrx35zRTDsk7yNJ9x976vfw9Qeu2HG3xM2HKGQL8wDtwVm4wAaiSKqy9HwTP1V",
  "key17": "4BsWjHBxLbES7NtL6P2NxYHy66n3wDHMjjES5mijw14tGAKAP9TuvKTrExFc5wAzo5zRPWqrr8aT6fPZecdmUJYu",
  "key18": "5j4U2bUEvfxjzs7ANQSpYdPzyMWnLJhP1xTxyJ8w7QMeP3ejTuG6nDR6pb6gFjA82fZo8dvUfEN2GhiFagmzskdo",
  "key19": "3PrK6XTRbUuze3G28PXgzWQ8a8uCncYDfyexgxtmRyiJSGHFYQKDVu6ci1KrG48Pmde8pmRpyxJiFJViJTFsfZKp",
  "key20": "4iiKtRS9ph8JDDDYek7AyM2VUSRzHz8aBpkfM1X7Ecfd4mUPDeRSpxfPwSTbgsJgDkkzdJkbJnTkGnN7JnDd1o8z",
  "key21": "38dbTbNDakiiuConQj8URshu3pnzgi7kS9Ct88UDmhu94ptnfL7mzprUQK7Pe9RYXn21Ydf43bHRq3FhVxhbejmQ",
  "key22": "5RnNuxbsAUbhY8oZnN6kKJYB3qD3GruJGm4VmiP8NxXtsh2A8YjHyPYymiJs1B2hxrz1mWxPRRmKt4f6ufT1Puug",
  "key23": "65uaJuG64dNttTr8V7MA4TjbjgW5S9nxiXbESLDiMBynN6nmQFn4R55KAUuFwG5zgDdRAC6aN6kzSfugeMe977j7",
  "key24": "54gA2yrjWG4TYopfd7eTVWzRXLSQESoCAsHgTvjhFPBWW1rw4fh2h3riiHem38fsDvEKe26iGo9ym2X3WoKmxyoi",
  "key25": "2AGmL5U1ko7exzLE46ymDajr39giQXyHJ5kiPBZh3AC5ApYggztS4pWE7U6PQjhSejkc9jZ8hU3DgZ1Ry4ssreA9",
  "key26": "4ZPeNrUTESjcG7xR2ABVk69PuKjPRMjiUu3hUuMnyPA3WGifd76gvXBXgWjW17kpE8DzqyZsnMCfougNVt5WHpm",
  "key27": "xnX6nrv1ztdoNTP2dD26sDBMH2FPWUxGWC4pQVAdPCDm3RasfzVkcKxkz3BLRMQGMQXKUyVYdjW7YS4i6ZRAcWV",
  "key28": "3zb1BJ4uDsNFYERmMtRG7PDBErvDaPL8i5cLEWfGKrk8HBrtNAxDUhJGD8TyvwahhA7LkQdtsaRymxVFuK2xyeEE",
  "key29": "4Nu2PFth8xxgKSo9gLRe23AWFAFEkLinXhAstCpMzPziZfJNd76xNNc4QkmNGMkJZbHctSsbXSZSwXSn9tSgMDq7",
  "key30": "29NzUFu7FWhwcT5gRMazvcgo9EHa9dbkchdUZzSBAdV2bsEbyDabyfGba4RJxeEo5JsjKaQrMJpM1SUDXQETPXSL",
  "key31": "2oHsjbnKPUh38QABfNKi9tmHTdtAUTs9uHitq9jLxZynRiMEyuvAfunA7eBXkoM29h1Y9WoB2xbcV6snyCkQhzDv",
  "key32": "2daJePQyfNRvd6iGtpAyiKhYoJ5KutvhXijSSmBJHpPgKrSm2raAKGBFviyikA5c177jdzuqmgfyaReqMFcagiYg",
  "key33": "2idaktwdtvHqn8Gion1kaCbaz7koYj2LcfcqYWEdvgnM5WA4MyWhvzacXWBP6mAvUaekz1hNRzjvkEGFG9C5C68w",
  "key34": "3kctcu581mw5aUF867XNVmhMe4gyoHtB4R77wToXudonKnhohhy3BpcmFgv3nLqomK7SbceFKNKiuEAs513tXpny",
  "key35": "43yBEGiH9AcSevte3jokuXhkd5ecyayQyo17v73xHdqSZu4yMjQEsEsUuqB9Qa1vKJ4EtxHoPLD2G3wRnxg2j2FF",
  "key36": "55FbTbmQgzdN3Jru1LxFG8ZVMK3skWSV3CG9UgJGxLhR9S1gBB7zSrkXEJ8NseA6xC1TB6WkAahAJkxKLy2UU54i",
  "key37": "2P5bFtu9rnciXWA8EdSVi4ahXZkza2MGTwLLpUpzD4QSkzZF3EPijMG8uKNUkvxGCAjZis7wtqqgYViZViR6Muy8",
  "key38": "64VptskEcUrCVXiRdoiM7e38Dv7p2TfM2n3mdPLdFK211cXvidvEtXYKXQopBYE8ThxvDudhJqXrWPfURWYr5xh1",
  "key39": "3v26msG4BDMZtMH9DaNW7kjNRu1QHaZ5k7L8XN8gjHuWTmb1r2FLHjC6dGvLWFCgrUsScrMFx3ppNnV7d9VpEWYD",
  "key40": "2kPxS1XWxSpLinSiaMym9b9p6GRuMbMBqKKgPu67kf2bSedbU9WWofVMywoAJ7qMhEr7Xvq19Ni8ufAURUeAzjaX"
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
