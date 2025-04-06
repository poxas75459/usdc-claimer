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
    "3M2SzovwPNQRpix8xgSH3aTUDz48DWQ8xrD5gWjtTU9zaNSxVU2J9gPe1BYVi8uxQBMuUAQuwKN3bYewc18ff9F6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54JokApZU4wgH5ej9GJ32xd24sBfUc1TSFapFgThxorjRK8zkw4J3hyQ4L4gusz3pHXsw9r3xkiL3XjaSpcy4Bfx",
  "key1": "wsEpAwfL96gtWFibG9tHJGLK7B3RCCuCEmYsbfJBawXhKuk5eXfnDnV7HzPFTVEKvejytg9SJDeGj8mWAvSz5VN",
  "key2": "3W22pFZoaZ3nTa5SYi5KLpLmkxzVy2nQuLTodSneuGkKtYLXimNbesKmzjJbmYizmp8DEadsvwUy1SgyBRGR98R8",
  "key3": "4sYs51vzuhDzQBBSXwX8cUh33AnGjozdGi2DZxmPnKdvTLnKeoGmsmpQAQg2yUMfo8NeorCRFnhCwU5KWMLEGJXF",
  "key4": "5CswVyqoxu4CVSGk25HHf3q3c98YrWFnhUSAE3umhode2aUGGpHUpNUJF91k7mHBaDAwGSPoF6C4oVHCBJ2o6TVt",
  "key5": "2rUkZdJgMSUjLiA7rKhKEreKf6C5qphoa5PqgmWxEo3UKrUg9b867oXRPRn2473F8VND2u6rsMrYEiZoy8FQjEgk",
  "key6": "23a1YVXuSzijBfijsuVCPKmQLWRY3brDLKJ7HMMc3cWoXEhXBdRdB7Xsor4v2y6EKV2TRoS3CU75ySwryDhGkBs8",
  "key7": "G61on3AbjTwDmzWdUE35vtYoamVjYUvmtZBqx2VM3tyGNRWohXmnf54FXEuc4YdLbPmN1qKr4AsGkropZYiTT1S",
  "key8": "2JBWGkJeKgyhE8Jakq5pV8SBFLaP41HcLWejyy26EpYtVtgqpaHeBpEHSWj6FGQgncvV8LtSDsPJZ6MAvDK4xfjw",
  "key9": "2j6TGdiD5tRrssjqzkaNGZJxWtMryGxrgb7ugpJQ8nAfrjUMqYDHz6i8fh7pMwWMVCeUirA1NY9wcVJPqXHQhfnc",
  "key10": "5aZVjLAxZrFz9rkNPBoNcom28hyz6GQ2S6Z3H9HQmp9Wy9KqLLDB4GaAHwrPH2K3fMXjKJ4vgUXnGK7JtqR1xY8F",
  "key11": "s9XHDRdJ86oVPJtczpVwaWn26JHHR3rEeCQk2xp4tYoHVBJkrbrwEEus2RsmaAAPcJNdfV12zC9y4YhDANegVRU",
  "key12": "65RUnUYLZJf73iM85dp8n7YVEH3F8GeV5CVXTq8ortXQEgXBPgceBq3waDueYyas8Z7byAUfkV2BKwikJ7zUPTQ3",
  "key13": "45nu27AzjRXbMHLY3zL174ZKafvitoJxeM8eFF56gHutEXo6mLdtMievip7zRC49GKpEjzrpL1vG4WCjfj2SM3WA",
  "key14": "5HtTiH3Q6L25dvbBwiNTPyAPEHXe7oB3M3EYxV7i5NRP8uWEZARJt5Lgob3icqpfWmX4mpYzG3cWMvPfu6UGFG7i",
  "key15": "2gYjbE6GGkA8mx1ZqVNyPLtrDdPZACmmfvQ1MpiaYhaP9MpUBnnfmyoXwkdVxygeJRjQNc9ayi4xT3BodS6FxLts",
  "key16": "5dDzMi9qtecVVXrMmPA1w9DjkrgP7MWgkW8LT53P4kfgFPGmMXp1JfL5mVw4VPVjtM4MW2tHBfqTNo2K15NXw3kH",
  "key17": "4WCbFXu2DNbCKtMhzXFuiBdjrA4tFGV98rx7FiHF2DZPBvwKwssF5TPxExyJPT4Kfc9D4RxxGtmjpUeJyo3wdgLb",
  "key18": "551LC11MMNDoZGotRa3XfLy676q1uNG7EYZEJgtB3YvbUvaFPTgzpTUk8Q6FcrYGTtdbaoWXJPfvFZYBHc2vXZob",
  "key19": "g6oUvB8jhcSwr9ebdCAViZiYXKQWsdETjhrDvcBY8qrJo7MFgf6TQtqYTcrECbP48BBi5LSj8ShZV39AVrTKh2Q",
  "key20": "3ToaZsH8BXNqiayJ4empo7aiMgtR9RPfh7fVqwfM4Ho2uZWoQfNEBPSHRofiiSbXuWviCgarR7KwQGiZJJLFCmGd",
  "key21": "5eSJoyBx8PWAxoDs13WkqM2Ze2jSoV2qZL488b8gPvtirA6jckNDAEgymkNNparWJpjVFBMPdK6x7v9FWPcoZA8U",
  "key22": "5xDzpv6EGihr83BHD9k2WX28shGR6kuHEaAND4m47YVvBhttnevaNwAEDfxkDFvupoHC2EKTide3kjBZsRNd6DEr",
  "key23": "2aKZgUKuaM8RyPPeZwRwzVzDaL5JW4msc3GCJ3izkdqXRS8tQFuP3o5NisqafpmG2MHL6cyX4v4tDQE4eq3soQvJ",
  "key24": "H7hhEP4ocXXrMHqVY6zY7pV9MVXcyHMyogDq2wDTWvoDUzu67ChBpRTir9jgSBi2hTXnhNtadQpNtZAXMhFPBpn",
  "key25": "2KH75euU5reL9krBP8Myex4AAig9fPhSoezny3PYJJ4MDgs3EJ6BnT2aAhX9HnS7CRctbQot7WsUiuJz25bfYPz8",
  "key26": "53i9GQ33Ft4RiQHsX1jP7Ur71QMjvvkvQMwMt2rymmuZ2JwbZYVmorSkw42GTUfpL5F41BB2kmKJMdAMEXSKFTtn",
  "key27": "5tKpauRqHvjsunzFAcr9odXTDkqKRcVjRfkjB8V94mLJ1S2VRQ2YfQSrj5Ac5S5xYVfXyT38geqSQQtfNyRE9zVs",
  "key28": "435AghDGLrp8UsmwNqhZXoXr9oWRWMrnuXKEfwcH6hTCUY8Z7jFWBgBXs9ayvXhQY1AugitLxKURUcTjSNrQjBUz",
  "key29": "5m4FUdysWpMtjCrScprFRPDt36wNfuVb2Wn8AQqEZAPAs5VMF4t2CnYYuS5fqayVwBbz2sbD5KuCjE4P6tWx5mNp",
  "key30": "5TY2rBdmWLhLVk8rTYohi3ivJnobhUWapkXdQ5twDVjiPDknS1vqfq1wSwzLXgenqCBTFnnoRLHyhrGV8KE2tuG1",
  "key31": "ymaAWTFWjAcFv3y4uFuTcE3AkFV4hMqyqhBz2nvcEn3v3VkFiuNRVPQUgHTjCLMJrP86qaW3wquahsh3Ug9DnrA",
  "key32": "3yuRMuis7SWbCtwqmy2m6VPHntMH8Q2BEzC8czY4cgGsaGUzQikkiotsDf4fjeeB3ExHa5Jk5rtogL2He9NHMdcm",
  "key33": "2mj5PvmRftoX4t36TBhQBBgrsCY7euPZknMuQJwUuPibdPRTN9pvGGykPr377Gjn2TaqPUtzpWEiCSNtkZbn1bHY",
  "key34": "2ijRQNNVJJMdNFmKH1FzTsTEVyeefxuxTvK3t9f5pEUv3J9QWuMzWPqpPAEheJqwdhAjMSqjEHDvWiKvrseMkF53",
  "key35": "4sVEv5NZRjqkBQKMBBTc2L5RSHMSUfQALwdM3PYkhz2JX2Y8tPkzr8u2rFJkYvoEHCD7C1Z3JBHeh6chappoEQrt",
  "key36": "rdHcDKvubPfc4teADM4kp1YVmWfBfrUoGdkq28B4bkdaDvMf3T4E1bRM97r3P5gU8C5dy7TKb2E1KtTJQX8d5d6",
  "key37": "4u2eRCJycxqaVBMHpWTvicTwktP8kg2BCCVFd6yMLf1MBGJswzyEA3eo2sKCM8TxavLGhcyJ1NSqwTVpZUjsVM75",
  "key38": "3FFAAkoQ5D59UL5H6GYvX5VfHaNNLfQzZx8W4RjAW8pAeC42uwapxU4j6gdMQEJNMiZ3pVcQZvh8NxrLLXV16D9Y"
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
