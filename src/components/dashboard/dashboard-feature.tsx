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
    "gbaR9KL3eF9gAM3ruwRjAcMtBczucFo3mh9YkC86FnsJ6KWpgojSbxk2kzvyrx2citLGEF9FTMZs2mSxLwCpjH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iTog19JcU6obiigNvTGzqpELinfrn4QyhK67jLUtMgZyXXQLSAeP9GqrgXUjaLXv5HYzKCMySGWrNdaeykNYHaq",
  "key1": "3fRinrgf8ipBvPQMF7kD9Eq8ZxdtyoZbJKzYu8z6EZDCjfvnBk2fUvRogutL5o1KGS2uMkx3Y4LzEMa9ZzurcYd3",
  "key2": "3WRWwKoHfdcHoMxfjFVkz57fDttVh2MCmBWg85f7n939FbKjBV2FjVUKjG81hyGAp2GMtZirWtmCq6Qo22cC7JYs",
  "key3": "4nkM7pJ6EcTqQedegcpksRPcjVkxthScWMkTEuepsAKomQoXETTAHJS41aEaZvgJBDttceD7TkPBKvKgL57FCoVC",
  "key4": "3orhDtzBZRXSSi3UL1uXLi2DtRPPvrdXAxS7QYESVoGY9tYCwqpnHuf4bQktCHQMHNgRynWVTjrswxjERDaGu38J",
  "key5": "3rL2BhL5EpZideiGrFtRvb5ugBcWErkcwfu3BSvEyZF3rDk78MwdzmNFYurErweQu6bEEKqvGBXy2zKbKpEesRBn",
  "key6": "5dnoxfAsynKwna9SCZn4s5sXReoJxdVtmZG7ts7bqbTcABHiYeythRM2ext4MbnGBCyQaZ23G5H3C4vbExEnRtNv",
  "key7": "3W3PeyjZrPBxfWY646h7pET8DndD3H5hoEQqs9dLyL4KrXAh7o7wbKy6moocR6D5fSzMtRigCPerBkQ3GWynUq3s",
  "key8": "2mWaXQ1N897dfR8XmWckrHkAi4zMj5fUMRZS6KmEr8kUciswqSYsWorMEC8MptfURPuSpUYHn9DxUan57ZUmzqWM",
  "key9": "nTS2CU8hEBukY1Ywcr7XaP6JpZvk3Y8W2poFPdB28TuHrV8n4cDXYD84oWirydgCLF1K4DG6YL7DsyDuNv3CDPh",
  "key10": "3XnuHKGeXrSdsyfxfqM5bsWW1jd7nJp9xHBGFNgt4sCG6cj27TpmF5NLXCvsrhtZY1VBq8dhqV2SnL6Yo55JR253",
  "key11": "2RDvpSd523XPn8aresnPUFzYN2XAgJprS2NvJzAU6NWzzDjT15rwsB2WUt8iYjKC4cXYnMSNG9wJyUjVjeMfNAhZ",
  "key12": "3iAdYQXZvKitLUqrSfKYvP3oyENqqPPZunazDEDyZ2r3Qiy4WABwAycZ241Lro99P5TRcQyn15xg18RPYhTZCUxv",
  "key13": "4dhEVkGdD9kSuqbFSeskubkVHNB4PhRRCdvnd8RtL34JpWav4qiaSeXy1rpmkWRKMLF7k6j46aiReifWigNND4gA",
  "key14": "3icsB3AaxYF7WWhmav6nU69sdkk5WPqGJRkgB9btthZcYaNrLKzxDmUGSBiuxZZX6zkSrHyyB1a7zcVgn6kRqf5h",
  "key15": "4wgra9CiCx8ECxK3G59pNKbDCVdFYxB5VDn89o7t5Eei95iHYTVmheujqkCSuLBfGQAQwoaz5pJ89seRjc82THKE",
  "key16": "4Eq92WGPf7Yhtaw1DdjjePb5fPrKrVBtMqLjMrHMQU44ZJ9V3czP4XmHGJE7eKJfjBi9YjpSmkGX634gh91JhSXu",
  "key17": "2cVE7hsCzcN7cekJ3xQ9hZQoeBVCfUDt1PTbCPd54wxkWgyw7xVfpwhzdW7qNnMPfw8mdnMh3XtaDz1wH9YnucPp",
  "key18": "2MWzEF2rgkwKTwkdwiSQcdNmJ2tCihzqZHVDT7VQcSCSHcQmDDaGeM9KGPBPEYZY1cBTbKxhBf67DgCL7d65MPmR",
  "key19": "iS3fXxNxEqRzFpwHiYJS5YRmt55icRNFfmYutmoKadR6xM7uDR5FGSEMb9GRpim9VihCbimwc2KR4Qb5aR3td5t",
  "key20": "3YtYA6AGbSkiz5fLZxH2Pewsq6JEW8teVxBAXZ6PSy2jYU9jNmu9DoWQMPCToLdC1w1TQWFPmhgn9jNnS6raBcv2",
  "key21": "2Kp1K2soHjvG2H8N5LeuSvyUb66DoQDFSbzyQYgA7XVit3C5JWcXVTu8hGqNPm1NqRu8wfVWkAeDiFN19KqrqfLQ",
  "key22": "3Nxvnq9LPFN9Xx9X6957B9yUxto5mYZE6FeeArZEBfqYoA3fcgzrHjuj9CF39z5o8vsjtej2RxYg1o2zFTAb64zV",
  "key23": "n3eujydnpxPZ2Lc4MvDJRz1XXoTdbxqsG1gdTaSHx77YnwUseDPbresoTsUXL3WqxGwnZx8EW5bf2xWY4Qi8vA3",
  "key24": "3JkigsNY9W9oqNbJDhpJH7PCKTUrTdxYHB3RbG1f96KjWqrx5VLB5pZETv3ViZa5EwYEB3mZcuSwM2L1dVjqqjC3",
  "key25": "2DhoqyP2DyB5UUdLBgZ6zGmVN3qUN5yE9f1LyFQSoqHcQVTCzhumcpT4gjYnFH7H7NLh2aZb7f8P9RPmRnzp8z4j",
  "key26": "vyUnsybkvBT9ZoSUUTMDzgWH3DRiV9QAgHmt9s1BeNa6j2ScZ6atKTzYubwgQRsXyc3qtskAyG7Wow4tRDfyA1E",
  "key27": "SYdQa5hnawA1498YwvWioDkqEoCxxYRxFB7Ncbhtx7uRHyA2noiCuZ34nHy7ugoPTfgVbrdCR28tNRcEH6Rawhm",
  "key28": "4EpvERGUPK4f3yuEdN2TDvaZBqrUandnL2bLb9FDmAL4SxQu1TMiQQ9cyaSkNeL4ze8Fu7FJo5zr5fu1NuPXGu7C",
  "key29": "5KsNAnTYhdZptoy4KEPzfwCwn96KwaYqiR6wky4Zc3wy2x1eMwy6S8CLZPHXoA9xvS9LgEAiNoKj22Bc8vkLDs8d",
  "key30": "29GdM5L4fpJKZ8Qo9e97EQPV8qH3U1X7Diz4kpbqJvx4Z56jNHcuDLTxgVXVAKgj8Ee9xMRe7yP7mKxHeYjN2JY5",
  "key31": "wGDERSVe4m7tLzkTmMVEr874QhgHfny5XGq2bT4fNYdAkRZ9ByUVBU2mGd1JBF7jhhy1s1TZd2vPKXhJAE8K5gH",
  "key32": "rqUJxQudW4cG38fqtDbCVPp2S3bFH6LKpJWWFu3Me1RDfr8x8WZ1ZyCao8fMwbyMxfQHbVj1WgoXs9jTMrFopzc",
  "key33": "deMfeNgT5qYSCKLS1aPkE8SmNi5TQWDBK89AjZN3pdGRcN1DvCQM4VW1MwTTZRiUCnYqcMvdnZNqaWXCpEiwsrm",
  "key34": "2U1rRv9EKSTN7a162PLVaoYsNBTkYSXo9dzxqNhgidfdzJyUyvG26GjuoD23Kd3M1okh59MKkJNCkVXDj46KaHmq",
  "key35": "4Bhk3zbgVrGUGuGDgbonn8CeiH4z6NgoNGGWFs76HKMxmMeQynKvM2ycwfC3JPYzF2JdjmXQKHDFigGgaVmsfyWP",
  "key36": "3eLHwppLyMPbYFs47dWmfXTJYgeNoiMCSzEJPWaSHPKscE3iKZHzWDYcbwBGBbYjDskXYXZSQJNh1jaXEpaYt8Lu",
  "key37": "m6U2dhoZssRbyqYshKQQZTRW8WGMcdFsL4jeVdEP3EBcU7SXbddqnHFiUbbyEURNSePxpYo7MRGWDPSpiujqxWD"
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
