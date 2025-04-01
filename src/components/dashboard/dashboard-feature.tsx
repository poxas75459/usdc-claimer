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
    "5Jre89iWShSnsZcYSQcdWANfdKBmjW8XhYyc1c3VtnNgPUAkqFHZLsqvEdrphjpJ8FgKwGDPuPhpgv3mEeYyEGTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ywtt29hRb2zcf6sqWXFmSiCE6qZUZZwe3ocWhab65NA5zehvZVXwgWCKRzzUvaEJyacAmj5fJHsBRYcsf4DM3S5",
  "key1": "4T4wFgEA2Kt4AG34a6ESnMEF4qqAN3AQqrzaWRmMkHAaR67EzgSNNPp79NnTdu9qdfMsw2C2Mq2s7n61SSkSJmyK",
  "key2": "2FhHvtaRL8Z2GrCyiVAfF3mASGVAt7cpCi2GtDTtAAa89fqmsLGJ9z5dnHUYLHnLPorYYWUJMutooBkLYLvNWEq",
  "key3": "WyjEi2ZhVA6cE5prHTCEm56vmbPBW8nXKsJgwwFDzPhacX4bG5KJR8LVfMGwPAGByDQVr7FhNBbcUYsH5vH97p1",
  "key4": "3HxrdeT94HHCDRT2SnkFBqWN1eVq3rWQTe4m9L6MZBftqyNixuEmqLmp2AXCuSi23buoruh9FpMk9fTDRZwGeu7G",
  "key5": "4bHR7k4kJPsoEXmkqFZf4Lj8RCqnGJUG13qpmYAZbZtNok8cUXDjKGbnqZsyLVBQy1YMX7SoLf4zkUQykgNWycDs",
  "key6": "4MpUokJ2XaqSaGTeERd2ZvWzMaH2VroMfCSRNcDU754g9hQAAXgD6zMiQgJxp8ysirMapbooZGJ8C15Zgiy6DuCf",
  "key7": "4Q8zNWM7sttz7qJnLMo7EMDPyTNLU4pX1UVkHUMtAqJsj3NNbdzNB9maaPt4bf23UvJGYhyFUVCy4zkPhjf9sCxB",
  "key8": "4XeqAoPHhqRjXkfFofoFjH2Uey4yeKA1Dw7hLo1DuWtQAcyVKLtuxrHijGLCy8RVWFW6apUa284k6ksFTAhym7uz",
  "key9": "4C4XVsX6p5LLUwy3Vz43XxcZo8PTczVby5faWeuSP3aLsvKZk33bLjFbKFhpvHrJweKZmKixoZGXzjwdX72d7wkf",
  "key10": "RTuMYiBx3pAovm5QA8msUeiTNsnvhFP4YTeJEJA8ZP8RcNHaNezwT74C2iwwLDMPRKwv7bDW9VQsGXHZM6a3HJC",
  "key11": "8oGuYvc5oipT5D8gpQrtFjjXGL3qT4eMspbgVAFDzaVRGygaY1EnpJEJCDXCA6Wm4XyT2SiyPDggtn1bgoTkiTJ",
  "key12": "5EaQ8WjT2jxUpY9R6Aqm9UNvMLYZDrmyFEfeWpdxAL3v8VPQicXV9oZT39ZWnK3ddW9YkF3g7pFxh4SNnA5RHS6z",
  "key13": "5YL6uL8BRrMv97nPAY5qbZZzHUbvKp3nZQeF7EJCvXe3qemrFL1Vo2UcUHYDf3GSNkbpiAH9BY75vG3ZLGPYNxU9",
  "key14": "3A6dTY3vSWwabbK22oTy8LmpCfge6PZddFFMvMVLPhi9pEXiGVhn2toDwtUbvD2di7TJUKNtHwcXyWyR8RDrU7jj",
  "key15": "3wzUJbcHVMibGoWfzZpBxwBdmVaYYj83KeFd8JjaxjNpYan6v1NAcM3M9npTn3CYkh3etkwPW2JCgxfr9xMiYh3Q",
  "key16": "5tNyugnF8TvD3EERD4NJ2M28s69G5MTgKYDx2U9mda4beo8iSD8vX6V8oX4KsvXWmPrEsuX4QphJz9K7niFrcfiX",
  "key17": "5vea1jExJLkVK1bwZTdKkDgU5vKyBeM1XLjJHVpSNki2zHicF3dvQsBLskv5iwB63C4HmKAkEsEPcReyFrtBepy3",
  "key18": "2bYNEPHRKFhgzujC2JdMt97MJj4rbQREqn4BH2HzoG1brRURmkKJvSuw1DqgNQm53bHGS2axoBN8xKLPPankZ8MW",
  "key19": "xCm49SYojmjrJW4r1WR6ufTCdX7uK4vrdZ2uDcueFcZEo5NA9ecgqkuee9ZzjkqLzseQRxmJZsCmbyGA8QpSaAU",
  "key20": "35KEeArxf9GFDpTKZSiRYjjew8ykU19zKpRRzj9vKEdUnMcpyAF5xFTcksEF5fa7n5Rs2MxD3sPoBxg3x2RAkhsJ",
  "key21": "qtvQEwpkNTNw3jki7h5wrtVwcYY5zdj4Huc5NiuvyJGSq8zmKxNUwneLNcjadxbWi8QGWJCCYseq7a76GxnMCgr",
  "key22": "2ber4LJhs5c15iAXCfrVjx3pQfewiyzSsmc3A8bjGAJAFLvhMSSZDj5kmmdAaFkfbX3zvDV32nYwtD25y9gUjUfJ",
  "key23": "2eFxhc7ZmMaLYbeW3HUN5g8F4aTrJFYFX6EEjiyxjRtAAzFUKtTzfeo7rFHqvuRrHFTTcvYdfd3LtWDDALR3yfmQ",
  "key24": "2XTu9V8xY9jQzRPg4H4D3JP1GFkf5RPFdXZjNtpUbnko5itxoy6tvdPoVscSK4sn1SQNiafF4Dar6yMTMTToRD1X",
  "key25": "3JbhqCPwu8BiuYuQXbXg7Lw1Y5Cj6Bt4APB9cYB2qEMVNJN75sZJG9gAfZLyfikxLgMrUZszN6cSq78ZgTB9Cpbu",
  "key26": "3GgRRJiUU6s5MAyCkus3F5mDiUtDd5u8Li39NmxkkXMeLasSLsPPfeahQBfTu6cRkvW5Fo1h13fBeVt5TuoHqU6",
  "key27": "F438DHt72TPwseDSQanuWSeSUbGsj8uckVjv1GFucczyqvTTeEdyZ4Dsjnd1JCbeRsQwpoESj63Kro5Zwuwvrmh",
  "key28": "55MLbTnyBcRFYNUr7xTVBKg2a423kDVQ368edvYWsPmQEAj2PMUxCY57wz2unrtBB3U7duxD4gBRFHseve8wKpAh",
  "key29": "3zgSnFtNojdkGWchu2RJvqKZ1QppCEPkAFM5jGiENiKEd4G6vBY5vZaq2QE3HsDxYPLrHkPhWt9JVVPq3eHPLhqu",
  "key30": "FuK3jp1AXMeD2GNzHSAHB3zReM4CLvPpyM52PYY9LnVQMcthNmpY7otPLaHY9RwU7f5LUXCbccNtPgWCzMF2oWU",
  "key31": "3L2eLAZ5ji14WPFKLkKrCSKdwzee3DarftkGMWNmqa1PXddTE3LX2v5rjwLF6orqt1PJHFacMpwuoY8d42KNPsMU",
  "key32": "3r2K6EgJckh2ZRsCrjMG2kgQrfsB6JydCesafu9XtVuRPpffv5Zif5AArTPXtSmN8gmPuLDeToPp1YhnJrbj18jW",
  "key33": "4hY9CddcjDfGYULwvWommEfLHVdUqeDNzLbcG73i9mRg35aKRQHnAPrpFppgfLpjQPV9YyyPCUdPBtoQMauo2dje",
  "key34": "3M2AbiVjsP43Y1cNFQ8ZCbQGY8HrZfjapgZfBZuK7LyWTsVkef4jmBfK7o33ng3csUnZhnSe5FVJhFYGV8Fo8bcQ",
  "key35": "b8K9PP3UUKH7sCphYSw4GQQax4mmns1XbERcgNLGDS3dnZFCGPjynUX3QgrD2LF72MmSnRDdjqKsv4FvJqauVKK",
  "key36": "2d74zpqraKHZqmBHyWE2UzgKuD1cyVaoHqeiDQXBz79pkQzZ4AhRsqEZ63yxpJkEJppDsJRPFPmvCHrcpshWdet5",
  "key37": "4d7NarQpUpussEBEohWQ8rpbBDcA7GGMjKhN2cPsuAQnd8tSUW6gSEW9pw1HthkMzaRK3wk1KSgA7uQ2gb4g8XgC",
  "key38": "4WrKfiqUNGvDhCHHR4YzNofL5nZBfSxpV9XcaYRMq9m6urF9JUvKSkybGUThbB6YXJek31sVRTfdmdaCk2oV6jWZ",
  "key39": "64GaWDcmydAgy4u9KBEWeTDPEqT7LaaGY9LJAQfVUmkkxiPCG2bsCR4C8C6pFdoVAkDS7xYtdr8QyYjj1qg2GGV5",
  "key40": "YxsFF7pvJytXTNcEGi4fszA2gWDZiaukB4JnRwrGAtydjUu4YCiPrNwTD2R9JjZCQfNhGqp7ZqqtaQHPwZ75Xuq",
  "key41": "m9PauDJWzuYXFedvzGw8J7zpo81cRnoixrq7t21vc59TULnqj3JerPLrcHNDXDHXEmzuXsz8RhyQWG1mJGHv5Fx",
  "key42": "3Wg1uQ2RatE4DRspqaQNrewUt8jna73anVBGPwSYSgdteUu9DrtLKYhKnfdvNbpuiACp36pKmb1TWYcpwxZ3r7si",
  "key43": "tXe7wdPTh8oje7RWPfxuMnQ7UQM9hAuSTzbWYCCMgv1qKHwBbTYcu6qJPVcWj94gXKDtoDGnmipHXuiWnbJMW2P",
  "key44": "54ohh3iPMNBMyJyUUHi8Sx4t74tRwnJX5nQJn2iDkVCaMtbv1kVqZEGVh5RwUuXdBB9zMgf5UK6YXJwvACZh4QBy",
  "key45": "4Y6u2rdgAB1ke8NNBYDkNjxZqCi77GjTaNYBrYDRjQsWrTzF74BjffBrzvu5WHNpeg6wc13qK6sZ5oAHMzowBSaa"
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
