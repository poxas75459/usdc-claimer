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
    "4euLF2en79YxqefHWmDjiqaagSDW5jyL9GTSxq8pvdP4F3PNCKqygBzN1kQFs3joeTEH5XjvDk8Y77173VBUsuhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abLkVmAF5M2DgE9yu6WDivu4tSZVZ31e4kWDkKBRo58YHk1G6tKKrmX1crkHXMDCWW8tZ6Ab9fMCWCF4XBCjJVV",
  "key1": "5J66bvLTVn7W9s1n4XP9j7YvzicwEMZVQvaaSkhAsetGmNtuUA1ZZv8eAL4tNoKD5tUU85FCVCqWF1zndbJoKmmF",
  "key2": "kneoRtTtTQEuLKaPRNFxge9Mesr4rGPpTtwxkFLEmrN5X8AwxGeSxNPvba2crsr2SYbrw9CxRMJL2pJctYRFEgb",
  "key3": "3hpRr9Yx4Xxh2xEQhYJ6WkJ7zAKUWAbZb6RWCYVEnh9wFr8RxcuRbWmW5fg9742oCEaii28Jr7UCXj2f4RBQk3gG",
  "key4": "4ttxhBpyFo5HP9wEGTrPhttgNBxq1s81gEsLZ2C2hBcDbCXjrR9L28hJRpCTuTPxARV3NcovgZxXnA1jeeaXMUZr",
  "key5": "2eCmRoQx1Kge2njr2LWwU3rQ44ZzKddoBXFFLfeoX45Wd8wXHCFXEY5RDtXe2uk4ir1qkgqhSEcX8fghfATXwcAU",
  "key6": "4htcyM5dD7y1vo4KAS3wFUmwa6mgWt6L8w4oSuc8dBetBXN71FcTX8eg6otAWC3nM2GPpreBEzXZHX6ethqo7ZaY",
  "key7": "5mDLHBRZHg9fwKvGTPJ8rGW9x4LEyviDSLViKBLxno5R2GWc8zRz2Leo32B4pHxe9QgyivdLy9Q2gx25wJjj8XHT",
  "key8": "WryZPB7pUbpartmUrN2Wkena9cXFAKJNiS84cqW8FbLYwLzYEgffkn7uwCGH3mc9hyvP3HHSZgh77CwQKXzsqRC",
  "key9": "5txdXcyKeNMNCWehbJPLyD4ZUAXaWUBGTHAwrwTkJ4yjVZJGkQGL22J5RiBS3KnQUuzLF7Jsz47uQTvMNucbofxf",
  "key10": "8pwoX6isVsxYLRWtgX1chchs6VTWuFbs8ER1QGLbXUckWPtnJECdisPj8QmvLj5LLcVUmiJfE1bpA8TkHTpBG7M",
  "key11": "gCvR7fLzD4BChUiuR881fvL8NX4SUanzjZPvTPPJVjL8HE4PbG5fdbTW3quSievz1by4Wd1ngi1B7fuVyQ1Xi5d",
  "key12": "62iKY57ZYqAqnp2ZTqLys6AufozVw2q1bXqgijuikY4wuFebQpdpRrjoLshr5S1Ajg9UtM981Ljjv2BnNALd36GE",
  "key13": "64TSQYC8CWiYm6Z5cKgJtEXFeeuBgDYR2pzgmn1hrJ1z8QEnFJfJke5LtY7JLm3KDbVKVWJvXSYPzS9t4eeE6t84",
  "key14": "NHwRcX64k1Z1iVGijVjexDC44J4ohqhsQRbGmYZ1rY2faRHGUmyfGns4PPkmWAMc5GB34Rrm4SbJLtkum8c8EUK",
  "key15": "4JKcJwudszeF5AUXQpyUs1VNXMK6k4M7AcU8Gnkd6zHUpd1wC5UaQoHSRwYvm9y1nUwNtPkUBatNpCBPYvXc3MQd",
  "key16": "5KmdueGkVMfnSDBZVdNcaWgwPMXhHdBY4yqjH77jqY6UaRSJRsVbmGAmuQWie9on9NMqF5Rswsmo31UKnq7KFbjz",
  "key17": "LtmCuq93cBBw2NtqTQxz75vASfNjEtYWtC5GPZoHgPzs4xtVyUQWxJBtA5WkYzFZHv9teTpSG1ChqT18Zm5GMgg",
  "key18": "4uE5ZVi1Rh4zhBFeCk9X7WgT6NExederREKnukjykZUJroFbYZQGxRVLi14jf3oqExLxRWYWZahv9mVTCmpHy7HB",
  "key19": "3herofgAF8suxonUNwFbPAGDWZ9ZMtsdrgFcQoVmJwNJkVDAQQUV69J8YpcDywapwpHLErRTagiZ2mTrTProb1jz",
  "key20": "4EUE6bVArzpCfqJxUj2Qwou3ECNY858dmZBDp9srpurB3JqTY8t7y7dcCqnEKrrr1fAV2jw3Gs1HBpuvWB5TtyaH",
  "key21": "4wtdxGisZtBXCXHauybVLY9DApyvG7vzPdQghQaevAgFXfBbj7uFHGZBHio3EaeUzue6a9wvCpYa1uj5ByzRLVpu",
  "key22": "R1WJdJTKsXashp7GTNb3QbjkvMNWwNAL3sn7h4UiDHWpQJYvfrn8nw4JoepcL6ff5CQV6ps6Qxj3kSYGcfB99n9",
  "key23": "Ee5dnymnUye3GxwP1uwwabCRnSSaz6CmFZST46DXMoVh8Nbi8wyZAKPxhRyp7Frg5mAnaVccCMvWzqvFkYrk2K8",
  "key24": "34y9Zwgzkn4LWGniNqn35V2dXNVWRtAdnGbxJnaAXbu5FRMLByQTX7sSV8wE2r4pZ7X3Cr1t77F3G7HvGsthd41S",
  "key25": "3iZjsnSjadUHxJ35u1Dn5XWyAir9J86hdkVsg6dnB1qvebxeQcSaUBJsv5ECf2pKVmw965w2qv4335YFeZjWaMjn",
  "key26": "5iGzgKHivU6krz97rDkLq7j8GMfi3C5ZArVh2Cht6KznRW3ceERK6cdQGPcP8hr4ZpVLGnvBLST268vAkeviL9S3",
  "key27": "4MsRcPcTJJyHQk8Q2YEybJVbiDYQebZLsqsRbQVXPFSX5pnVfkCjP2wbvYwuscgqfqjcCYgXhm9FoTyiK6sDiTvC",
  "key28": "NehMGyeM4ogqyy8jarvJRnLhBtqZHq4WeqijEQRy94dwWDcE7E35CuwLuEhUkNut3aV1ErhoE8qyWFgsndvvq3X",
  "key29": "2znNjmqqHLRdjpo4gPdzKJi7AzN8j3zhkiAbSWk4vHFGmdAaFQ4kJbd4kdHaABHBYnCbaS7H8sxVByk6toHhkCM7",
  "key30": "4CJ8JRfGnqa7YzEe3ESoZCu4rfTuiFnk6fyj6WG6oEJg1UPjuyDhSzHBz8mY8CUcRDCg1G13Qggywx8Dkon1ceEr",
  "key31": "j6qDM5G5LuxxNfeLVyNJH88F2SvohZU1TDcRiKJUDneYbxYLQs2qAExhLFPKePwe2QBWXiyzdnMLnrY3Rb7NjsC",
  "key32": "5jh99dhhiMA6p3E5yhETBPwTcpAvr2kngTfnLXzmwBfYULGTd32KY9aWrW5KCJNvGxKhxHimLjEC55q66Rcp3hPt",
  "key33": "4YpVvuWWuMVH3DhJrJ94rdKmmd2TZJ3jbzQEbWJpHs4iVTKw8Y1ESWrQigY67CKq6LGFFT4Br3P5VmVqghncYwcG",
  "key34": "2GmyrTtfujHoVpQ7JbRweMDjX5QAXnfWXB8xn2rsZqQeXr8rJEZvWrLvghMYqh4L8vQQS7hYWFdoipMPRbshuUGx",
  "key35": "5pDL2y6eM2YKy8csjwvsHvuwWxrb3mVvqx3maznKEji1346qXAbTrAUgqMfNMEsf5E1Z4dJ4hgX6YSGXefmCX5RZ",
  "key36": "gPrZGzRX5cFyUUFk8PbBed195g9ScziNTjPQAQWGdtcgdFKdJfjWjhgheDJuDtRf94oZFP2e3HuZ2quJX3HrmXs",
  "key37": "3boPpZx4495bg6aG97KhkowU8yy9znxzCLajeGwrhFyqkrcQW5dsaTf3DmHcESxTqNFcGbygBCMbXvQitoxbZohk",
  "key38": "2uaAa2qX2ih2ayirfLVnxRLBfBVuAfYCFUd3mgVNuJx1jbV3Wc2dtEAwbH4MG9KYqkAWoyJpX422PqgwYYEMJ4yu",
  "key39": "3S4rDVTxrykrYVpSchzSpduzbTEkEDqR7N9Jdeqy9FcVAHVJczk5H2EwsrargLHd944h4g6brjgDtccjCHshwm1H"
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
