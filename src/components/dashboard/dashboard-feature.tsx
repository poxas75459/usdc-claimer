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
    "32LgtQvYXM92oXuaEUgm2vGW6fFXx6MDHFDcDL3waGvCnucvhobXxC1DBeJbHok1uV7awEdJtShaMynngG66eX4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UE6JfJjDEfaXUcJrEX1RACNKuY2mF2NkcwrpvWDAWG2Za5f216k1a6WETmcKp8NhXpHb9VHpQPr1ywYWERdhsWq",
  "key1": "hy9MS4cmbFEpcpKDQFzKY5efG9nvWAKyBVfsg1aRybduvmsf8D4BSVeQT3N6eAWTSm8SfKjA4228vLSzbCCuo4v",
  "key2": "xY9SWSa7cyhHPjyd3HFuLy8tvgL53dXghwnxczuGPZRC8ttsMxQ2QM6qAFFhrkoEkSW6J4rPp9sa8hoGmqGS47U",
  "key3": "5etX3JWQeAWKoLPpPw9bsw7kT3SniUDVc517cYpMRyeqZF9qntZnCnVLUK7SUUP4GFQXrT7sFf2PsQJj4DdVvjBG",
  "key4": "4mkuXcbccL8UED3CJnQdXbJPmeHBUHZkZTiqpjh7NUEKx2WoYuK2YAYtJf4yN8T1tYYKYcS56nJBbw9X1D2zdDVo",
  "key5": "hHaXUWKFDf2qmnPPesmRRytK4TNq2gsw83y8NYu1PXg4YB8Qh8trizmi62Mfpt1Zp51j4HTtEfiC2oDLaJFymPL",
  "key6": "2vZeXWu3mHrcXiWUFfr4i5gj7t9tMtEwGG2R8M2gSt2bWq1pWSJ3tFMAqwgnU65G4HoRKdJ99aa8Ew1Y7LzAF2R3",
  "key7": "4eQ45bZkceKcpTTdoJ3hJ5yrka1CM3BzXdpxJf9ztf1sQTikHR4XB5LESLmT8F6ut4L9pCkUDqqs6RikNRWoJHcs",
  "key8": "pjqExjmLHtttqZsXftjATaXRTuLDpWWXnPwPTNdq4LwiWzf871c96q1t4ELBSygjamWvndzxdTcUt5sYS3pJ8vP",
  "key9": "51MYtzMgrZktL7jorseG74shtbFgYPp1YjKwi7CBe4dbaMWq5tnsMLPtSXcKxGydiX5F8S1CzFMbdfRwUo8hsvFv",
  "key10": "4F4TySvQfsTUFXJEECZfRyHAUHXQCKQ3RWWussSE6eHiSA9iXL1ZPk6Jkxp2SXBDHfVUT9LTD1S5QPbYaEFEadi1",
  "key11": "MEre13GWPgoQESbKjFfAgLdnFpjeDN8Gov9PEg1g6Yy8shyeQW8hKNfwQEnpmQgTJwvzXZUtnk4gEQFmTHmdpja",
  "key12": "5JXV15XjnPQWruPPnjuxmaEJzTscQ3YKYnXG2EdYAi2gdAX1u5ahjFqxgKQ485CKmefUi6kg5f753RhTmTxuLBny",
  "key13": "5sYRiQWDjmxDapU8497EHZxPYhSNos2xAs582EYj2jAnh3YaGQuuTTdc9sc6vkBVVdRjQgegxnFkbnciZQgpmXkz",
  "key14": "5225RH7CaJPQC5dBU4JrouFEBeHCtTanRXNCkXgYeDuVnA9u5gsndnLJtKNCxrEgrZgyoz3EuckAr2rJBuoGDybH",
  "key15": "41egZcR2WMmFW15eayjdFRuyQS2Jrn2KnuYjNAPUh5A4rNnwQqRWygzFyR81EGiLsNimq9Zv7AyxLNeeMs8pxnhT",
  "key16": "2G5oJJ6yc4EQ3UBDcM6MrdfzuHHbPMGCsQyQst4qo9jXBehAd43VfjHw4MPa3CyPQz2iZ5sjMdm537iwY78QcvQQ",
  "key17": "3LCePqLTnUny76Wce34HdfQPBErnn2F68yNC8xEHSvKXw9fvJrCy65dCoNGZvLFRwbc31eQPxWVaDVqrPYcdXeZ3",
  "key18": "5VUNgT9YguVuQNbWqZvzxYa27tCF99pXtMmDRFnUK7u7XucF7Um3Doi2as8Pq4goU5Lwhr8DfM7Hf9oK3H7JUQq3",
  "key19": "4gwjLig28z9KKpuvZy52CFRwtkcLFwZB1bm2dfFxaZUDvJDTTYM3A2qWy5QGXBs2xCQRNi98Qeio13CXZSPWzAJr",
  "key20": "snaU1MitdkNeiT9FFzgWvpEULAdg5Kkm1idCJE84xkmVwtsh5crwkrwXTkLxwAuxYRCiewsX2vSPWQfoigQ2TXG",
  "key21": "4HprLepsUQRkuse6iKmE291YyEq6LgV2QJZynDVgbFxCuajJDrRDTvjAopksVxZYPXEKd41CPJQDpGUVVoiRFBS6",
  "key22": "3m7dkcwwnKAtP23NxEWfhZtWpH1EyEuWf5LTYxKpJUyT6hygsd8hsUQa94Ldu4UqZ6CTeocV4DUG91sMHgx1rX13",
  "key23": "5uqLpe3nudPq8i3gwn8Cnm8nJtMzM8co9sLSFx7tgJqNmuYdTdAVdJAJRuoFZomv99xVucT1ucXuf2DR7RPpzozh",
  "key24": "2Ga4DCn4N54xgS9iytvZtR2Xf6PNUTw9b6RNuBbgd4KyjjyjPuEQESrWrJCsbSeT8iA6xcdhYfbHLvSQ7izGPbzc",
  "key25": "4n12Hp1NiGXwowyB3FyzgmX4sv4fRy1V8fesf1SXuhLYsq8mtF5hoFUgBjy4JC9VyRFx6L62qCm484DBdDwZUdLj",
  "key26": "27CAiXSQxbkjhi7exqtKjHLsfyxepHuCRBVD3tc46YWQ1ymwWhUapPp84NLDUuztmBULfD4RkbM1c8bZSN3g4oP3",
  "key27": "3uLD12bF8ox2hWrkKmksJYh9o8jeN5JwoagVp8Mo2DRJCiQpAx75q83ZU2ZXCQHqTbGKsPtLoGXgBqkGjbEFwveE",
  "key28": "3Xs2inYGpKBq3ZakGCAW5eR6NZQh1F6zadds9UKH12Ae2WuV3s5VLF1bg8QCCD1NFFLzMypfpyCRBxaQwy4YXkfS",
  "key29": "2UMDNSDmSGZa3hBVtDqN2t5kGUCxqidZGS2JwfxVwxrPTHH3Tg4ry1EHyqCPREGUAEpcgaeyMW7v7Q9iQfkNvuFU",
  "key30": "46aMoC6HHPAZBjqGqqpRcVgWceGTB6aCWmp7fsuPfM5xk9SNFh8mqRgGR9dcUpbop31B3Qu8Ak78K85uDWCPQERQ",
  "key31": "2fPnrcri3LUB1jYRZPRg13Vk469Uvr6x1WJi41g8xAVeKUsrezz5q1S61M8rnaB2AgGK2oeSg2mU2NXAZSv6TVSA",
  "key32": "2xBqj77jmbwvP5L5TRMenp4vVt5Gos2cwjhxCF3apxXa676R4M1BewE7zGAuvZG7bD6mtAbxeEBpQxiHKCz9nLw8",
  "key33": "5W5GvzUwXiV4HXdsFWVDR85z2UWSmPm4PHVjD8qgovYiLA7tRywWSPGMoVntxkvaeerR5CG3GTLuAQK72EuKZeH4",
  "key34": "3RwqGRXAWddTciFiDSTXE2JV7RRpHZgToqyBQmpdVy7FZpigAAj9woYT157dpeyYYc17NmFr6t7pF3WiA1cxKXUs",
  "key35": "2Tx1Xb37BMk9UXmnzLkXujnU4hqL1z6bf2P91eFTB9Wu6VZonH3G4choubzv2QyGE21pFDNMARvfSxZA6bAbSv6",
  "key36": "5QwesV4vw84SFTB1JNusyhRej8QxKS7H8coAr8QqYDozZEVw5TQ13miipCZmhaDKWkaPxfa5t6rk9KN9ZynFz2R5",
  "key37": "3fhbjz9ffJNSnNqKeCZdprqJ2EBbLq6Bg359GANjfvQ18QFCcV8x6G3UN8czV7qyPJN2eYeTyoSNB8aixkDJjLJe",
  "key38": "4zfsGaxQaKsD8NRvoaiwaXgzzRcfrEcEzvNhyDEbG8JQWbV6BBuXjMW7UP2zxbFspfMcAn73heniLqdV6NFLWCGw",
  "key39": "5s1hcocakhhqTysJvbC3j1xq8jnQn3TY1Ae6sy8DTSFdRr4WpHxDGmMAAugQ8J8s46AEuYt7WibYb6WL91N2wGk1",
  "key40": "3rszQXKvLG5M4pP53cfzjrPUEH3AQfBBWL9NeLzs1xsYX56QLd5JUkGfSFtHjpSxRiwaQGagnQfnd6ZyY2BH987A",
  "key41": "67PLjg7E2cPuP3YGE4DNuwUoy6Y7FAn2BraNzZMo8EeVd4DiemFfnHuM1Xw49ViUvK4cAZNHanGbbXUGvTeesZuJ",
  "key42": "3KYn5q6okSjJtFqJhrS6biJVnmPMejeyZP1Ux5MRGTfo3BdbRZwTgrK4QBYcAnELXYdWufaRmiCBcmDMJEnF6Uy2"
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
