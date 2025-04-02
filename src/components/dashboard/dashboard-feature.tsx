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
    "3ty1uCxng9vQrDXu4X5qMUU74UUcpEnKFvGGh9QqJZqabDW9b19xNRMgAHmZCn259yG2LPMhrPquD1ByLa2LouJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RwDSvD7VSJp3RvrfXw9p18SCxywCCkMNaCdDyWUukNM19Y4MXfCg1UPDmJ5TjqaethdHaNA37USw7hzscRe1ojq",
  "key1": "3n8XBxAbCd5oYysers9y42aa9JeFZfkrzpk6hjcawTVtAu4Yo3DgHaiMymPYAf2Lcdq9PGw1ZKSatLsMQzxczbeR",
  "key2": "61t9tt43hwLSv8J6t5Wq81MKKaJk33vkJUmG9m2M2Emcgxedi5D7rxCLeDNnMmcL8KjmsJoF3BjPX48NYfCDXdGQ",
  "key3": "2feGZXx4rXFUAkFJBL2QkTP442nrVEQxw7KukNjRaWZt6T5Z2HzRSdhLaTkmXK3MFMDi2xHqL6QYQ8aLUa1twp2g",
  "key4": "guAfagEEG55BYEtpBi6DwJjmCRBiaPWfEZD7rjMEnZjPycytcBmDRDRSPvNcd1Hbg4iaYgRE5bibDaKUUGGv6gN",
  "key5": "3FDaYNM63SUUd8tM652VW9k3bZ5QGzvRf1ZEgWBGJ8zqDJdtiF6ZkoxUuLffPbDayCFAsuJuFSsu1TCKBc7jbba4",
  "key6": "4XK5259vCtMnXmoA5HkRvhZhmY7MYLuoBjWKUk3fN9TgCvTVTQDEGeuYVCgVDKjxpnYwBTqfP5KiTqHq5d8yngLG",
  "key7": "44L8rbawFCzMtSFv1waLFGhCcLacoYc33WsxrUV4Y1N6ANpyPRcyn5odfEG1s2QBCFoqYDyzLzJFTDgdyjqUyFGZ",
  "key8": "5n52KvHrTKsCPuyorAGsseBRu2KdWS5zor37XxpsQ3nohKUTPAr3unHH79PgNpfD7RBybMCuLbakn2KdFJaKvTDC",
  "key9": "2pa8triybZr5iFk1nj4b7V79K5wy3FKC9ifTSxTo1sfQpJZfpHuTxJmQrtfK6M4Tvr9gvhTyiijB2yMVKBk13oFv",
  "key10": "H28d3TmQgvYMBwkcbtomZqWG4RKJkxUHi3dgdGrfpuWqKNniE429FevuXPBPm9c7mDfbY6cQfAd4rg7P3qV46RN",
  "key11": "5DG3ZpstJL9ztQdaE3CQZAyJzEDu2BygqhdfpVnVvVZ6fRupTmVK5utJ49joubMGHvEZb4Y6Q5LKHx9142eU7eSE",
  "key12": "3yhE7mvTJYYBBzWRvT9T2mHGd5zV2moAfT3NFmQtWNDnxPxgYgtJ61BwdH51R5P3wWpNBkTqync9y1tuHEsUWxA1",
  "key13": "44mEf64DnA1DHYuwpiUyujLnyknnPU9XfNYE2nw4mp7pL2NFxmDPChdu1Y6TPyvp8chDKZKV2d685VD4dNXfe91P",
  "key14": "5SKJ4XvPzvMsj5dQJuriFyoPr5nuCYn6o7LeoWxZZpjviDEf3ATeRgqBPXUTq3mMbEBBUGUsMZ9XnCjSxzbfzpwQ",
  "key15": "58AowzLFdU3Jngfwd9HjGkKE2dvmnxtqv5oiCuQihqbeGCgtrmbNPcxoe6rCXiNxQ9T2hyz1i6aGT6vxM95qVS6M",
  "key16": "5TKMWFK9x6YQacQ51aaUBCLk6x49zzL2bVrVjFP53DE3uz4bqz5UpZpKSELXmcX6nAWLX2XqNEa9A7A6KATAwCkU",
  "key17": "4uHzuJiz6BXHdTuxRVye2CiP3yAqmsGQ5B4im8ghMxBa4ZTNuXAsbYQaSMMfp5fBWvSWZhTyzqvzY3jpC4nWmvJu",
  "key18": "2GEeuA4mePiMT57U8XgPXeTzwKSMiix9mX5Bo7JDG6s9QeJ3F1fmZLspta1tvc39BaCFbimiJ9QW4xgG39ZDTSzi",
  "key19": "4hpAYiavZ7QDCV1mAY9h56DtccTM5rJ5T3bXxdExQHujgsHgvy4WN6RUtj112Hotc6aY61UbWD4aXbPUZU7uQKko",
  "key20": "5q3UxmCpUhEg3P2sqy61DqEE2KYKcFXLSReKMuNBiMFzPLbVKUvdPv5NMrVmGzXJ6J5ZLmCqyy8Go6m511NCBXbM",
  "key21": "24YmifEj8SAUVXCTt77m3gpNaw1N6N9keaUV3MtXW2R6NWFyqqJMKAiaVmSnWZ4WCccT1xVqkQhMbXhGWJvr12AR",
  "key22": "2GuK7c5VnU9E9iYidHG1x5P2DwcG9eNTwaG3b59SpkkzojUgqt6ZAGLMrYS2WyGdhttEphBP2FGTdHFvaAMyvr3G",
  "key23": "2UPiKgTeAiPKgG6dk5vZAEYz6gGoAE95Z9VwdsBSaYLtGRkcxKyhXjbfaZcahMyBzbGFwsFCrDBcEX82rN7yvYht",
  "key24": "2qXeJTVgUUMtZ5ZZFfXsnr7Uzghuc7zVFJR3BrpZ12Ub6bybz2d4eT5zjA9ixiz5Ar1U5WfNFbWqqNzCKrgGzY6s",
  "key25": "2xxx8wpzfvbwwYD2DXjKXT54Mo4HgfFAzvPGwcGSFBiKPkPnvevHwiFDFX1CJFHFvRSyjhLC3kSetRWCCe69wgN2",
  "key26": "4MDhSj9rdnVuM29xceKhN89x4SwAgqDyUdrcNThP74R1rJiJ4gNA8B6wEGuqVFbN5LsBhjgXCeMCwgrHyspz7edc",
  "key27": "3brWm5AQMyaVryckpu6nkFFeYg2zzafN7uNTQcvXieXSFTGYPxNscRVGtXob4WiBJQnjqB1hknFh6HBWcUnWikkD",
  "key28": "3QtABDv629DW2fSL6YJY2rpMcANTAYz2SiGTcZxKBkVFqf3X8pV61b4Z5tF7V2gKHEDrRokcw63J6f6CvaEks5nd",
  "key29": "VLVoHuquDCTKpU7EmphP7tCKn2sLxWintyLwZ6E69RJgv4xY6AAGsnAkPnCFY4CvnfYYCPDz9btatCDvbbnQBwd",
  "key30": "4F3utBBZ8h78EzbbGt9ycJ8ByFGo4q3hayRGoeqdByPM9Qbg22v5mJTriLooVqQ1mdZJo3KCNAa8s6h1UPGuSCaF",
  "key31": "4SSzYVivAksvPSZL7quNt7wpnfoJdVCngtcbRjCYbkdimuykb6UYcnoTY2dAw11mf4Yv1WdZJYYEfcRhmkEmj65f",
  "key32": "3G2qFtSRjkMKRWvvxCBcTSWNwT8964MShKTcPuitML8bafD2dChSFXMhdRWzM9sBk9AN1hKX5WFghhX6YdDnaMR8",
  "key33": "3xzBJJKiqFLaoLJaHCxNzQt5vaeMoM3pPkquZc6XuKmdJgskZ7cj7znPVKYwX8RvoaJpMKuRGYuHRdr7X2ZNCbR4",
  "key34": "4XZRqvUsFN1R9bWLtstEL8V9d4uHJ1joXR6WUSrfm8xfjwehHffGCVS9XymM8ZHi4YHRKcLEmx6BLpZMTfWqKv3k",
  "key35": "5cncDdE1qjoVp9eJnT9ZzWYjh9b4qgaiFADLuK5nau8PZNmxWJgqjSvUYy3TZuhAQD2xPianpAaa6XjGdHbho81W",
  "key36": "4ycWg2tDh4DXn8omTax4X3zPKoNA9pf5XZig5btYAhWwH1uU9Egkys26q27X62hcwnQUn59Vcc4GUXK9jG9DES7u",
  "key37": "41EPbdJeVvqYPf2M4DoDRCzzMJKF4Dba9CJrcqM4vGheLofniYmAnmeG6JLFMAuCP4eTjeH46mMwKfyLkFnKhQ38",
  "key38": "2b1fxSRsaiokUDDfqCQZgcRK5rMB9tJTrWpsWRkfD9yiCdozE5JcSZQ6V7drcpdj7bB5ZDJLReueecdnJsix1Pcs",
  "key39": "56VGjnCS6ko1vMGcTbJorBwqXZrJq3SuUicAdFj8tNiN8vBJNSNZdR92XsfMRerd3nxuoLQbC7HkCJukyLVJRJSE",
  "key40": "418jRLhJkDhuCrkeaoqwukz6sihEsk3LwctLs44bRwrHnauZkLptSTEXWZk8uw2HngKjyvJDysRLzhDKGFuTwZ6P",
  "key41": "4vsRxibzRAdU1GfwQ95papCSRbNuuD3ft6BpiKDvXxq1cVqqZXmjDFCSYCxkCYeup3NRSPkWicFCCQCmSumRG8qu",
  "key42": "4BmFg8piuSwm8TqGA9pQkqbDV4WrS6HF2BE6W9DuMr5inmb8h8bP6RTXctwJZNusSnY7Z4TKSZrtMJTBUxrDVmcF",
  "key43": "2tcsP38AqN9iimzkQhPN4TXC4WwDf89hA5teB4im4TiKLnJxmiAFqwn49x2XJyETudSxCr2K89npG4pBjRvQ6wUN",
  "key44": "2bAtpfuyjG9pN6awx6jFUbsmj9Zk5oMqanfEnXQVxb1JuRM4i1S4Digy34wrFihpcUdr8aDSeH5yAuEMHN5dGhSS",
  "key45": "43ceSXcDBBhmzNvJQCe8ERqtVJCpnPYciQEGdbgJYwDnXbShLANgVD5GVjFcnXbqkyM3ekcc6zqM7vJ26dtQAh6o",
  "key46": "58DWZ46CbP9k8SBBJWhn12oUfZzrgWdcTRYGnFuGuWPBfzpRBK5543qtoCmYaaTd2hvExvKpVbrFFuuTMK6XFS21",
  "key47": "5HKibwjKdabrwevZkRNvUWKah4aUWFbvDRVYotkCetQ2MSXHRiymRouZSqpQsH8pooP4mgtGpBy9ftPq5PS1hfPU"
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
