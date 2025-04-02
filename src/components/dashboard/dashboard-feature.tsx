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
    "3h3hsDWVYm5ToVng5bGjnYF1Hg1gJmnChJ897K9MKGf47rLQ8mfhTeEvfRk1Jo9n7LiE9Ph3cnBxdmt68ShDERS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d6PtGFvH5Bo5jsH8ZMnQ1x7B58s88LcLBKGtshaPcCMQYMBw7KJJJM1fNHE6yDx96qXG5iZBN98eCyTJaRTRpKT",
  "key1": "4GiaBh1rZd5g7S5pucak7w7cWpPNqop8N2ZkR4d51APhxMJk2iE7cmK3U91woqFTpQNhcvXNYhYGYY2kp9RT8AuR",
  "key2": "41GaPrpyChaG8ru1Uz8kLVqjLX9DSAeauiySEao98feNv47R5tQJwkkrBFTTuv8buknUaDXyQe5SJ2z5HtY3o9rn",
  "key3": "3gvqqyCw6jTaabn4E5NbXJdpDvcR8RDMXe1V42khWMTBWUAy9BpguXzwTUuYZGsprPAJSM5FottVg2kRCSTRaUsC",
  "key4": "2pZgBPxj6jcfRryPhNK5pgezUVUCvvCre4GgvZLDXfoK3BqSqUJ5tnAg3aFbKfGdFJE6EifBYg9pY4FSoLLpJogy",
  "key5": "4k4WZjSPgtLavwvXbNvKLfsbKxMfgZfd4o5xymAb6WQC4h36YP3D9FSFgTwmA66hdyJaFadWmwL5iFniPuYTJoCz",
  "key6": "2z6KLLZgVeSfNZDZhPu1FWChnAFpoWJE2encNKxMiNKQtfXipMiaXP6fXFdgbEhnXe2XHWq5oPMLQsKYc9kSgf5B",
  "key7": "3qMSRuoQ8zAwwixfXioBzvhPsV86Z8MQnibgRJij5yUXp9fHFg9wz3FjvYtR8xcAyx25UmMRFVxWpLEjCqwLtpZR",
  "key8": "dG44CopcZXrdb26KPHMNfB7MKrNfKztDRr7nvLBh2pQcmnFWxLJvPJXTYHskAAy3yWJcsAaswyVEbhzHA3RZ8rq",
  "key9": "37xgj1SCGAfCKFPWYHXBRjjF5czfiafLjM9M7uDd63W9SzBnsnxW7Rp31T5LFtCnLKeJNbzbvsEHruFuxAQWgDGe",
  "key10": "4qh3BZbPCimqcrEXJ7GKdCrav1CS7qXKwAbZvTxWRoX4jjnEyynRgk4yUZqiq3sdUCPbK8ViisyLKYNAZSsActvr",
  "key11": "NrPPp9rSyMe9WkjehZZniBRkWpFt8963iXbZBkuEqMe7incz1Ft4LwuT7tZNrg34Q5skeSrRcVhAJBVvS1rxGnV",
  "key12": "4e3gFxVwvtUQZyNY3XdbCP7DbwiuFi7C8RVPQNii9CCnMf1u1JyBQMcotNfcUNtZmBnsjKui46R3VAPHTxe88WqY",
  "key13": "5deMc5a1fjSuF3q5BTHuQWcADWNq9zvviXZj2idgQ37rYaxr4BkGhKDtGFwtRSnTm388o6j2BMdLiovPR2mxYJYH",
  "key14": "rKr1DdR4tHKiHgHcoASh6fiv5wKk3cATVew4uY1LvC1Ts2gu3GP1pXVyKVTycKYLRkhGJx9zHBarZFNM48qTY5U",
  "key15": "63sNoJ5QEeJ9ioDpopak5niPEtSxdbMqbhvTvqbjc5bPa1PfzPpAHiz82beCbcd4nWFcpj4UzSjeLm17QNHF3vaZ",
  "key16": "3ihpmwY2diSUyFZ3cgeFb9MgmgDvv8e5VZ6WLm47Q7yCBXrGPYseYE9WTm4DiG6VxiotR5qk7PtnQ4XS6x1HB5Ba",
  "key17": "42ZTKEDG7iyJuK2ALH3gE3pjk3jW4uRTK2xJazdGwn4aFa67Pm6MujCjgAfKsm8xPFjuztLpfEXqdPk1fXtkG2Jh",
  "key18": "4s6kD3qVsJEFzoyG9DU3Yrf29siHUKmBrC6ZMxfAwXbLh8bqW3WGJvm3RBGttk4odxDtWp2vaUvsnxkf6CbGyaxZ",
  "key19": "2i5z8qHnT5euuiKca93SC5brcLG8fP3SN5VzL2wJCLfEKmKskJj3htpmqdKE4QHWSZSgHeN5pJ3thLDP9LucQqpD",
  "key20": "3wjx8Lnnz9ytFnPhkX4KYajQGbAiwUDXF1zjUYMrwrE3MBLacbJwYT3VyxddEcUAoFejDT59LffT3kG61F8m5m78",
  "key21": "41pnbKbjwbr66Uo8eY1d4ScjWQ13zqK2eMnYdSR1RxFJcsbFJL53CpWAny5QcGKRhW9PA7kcLCkq23nvq4TgdpBz",
  "key22": "2EimSnm6BvHN7we4pispysbc3hnxjp2JY5pd8puGSLSRKTXEZ2fuAieRdj5hvZT3KmbdFC7X7dCYeVEMV7iLByzy",
  "key23": "4GmcWLGj92wWg7iZPSnqRSCufAVcfGzCNb2k8Rr3y6pvPXvRwVM9mWda9j3CBEBkqLQF5fR3sYHJAAHTB9XSTEje",
  "key24": "2L2HgR8UESy6n9K2F1PttYm8uwaRpPcKR6syUADXFnQYPxkCWXJhEGagC1mBWr7jZMqvAxDXqbHxdQYZDja9uoR5",
  "key25": "4qF15MUXGkXMJ1ZsuYhebT5fUyPqpY9S4CjAxaZPoYt7B81NodiMEbtKVGYKoPSoEwoKQ3SgUUcLjxSpMRZrqxQL",
  "key26": "59wrmAFULCXNJfbEiMk77cVXgB1xfKj2skJiSQ1LWAPScNuSX21324EU4jYFW5fABKBBRNSHcXD1m6xd5LkBkXB6",
  "key27": "491YD77jatw8yURx6jAWXNBP2UfXzAw2HmHd8Xxn13K1dkNvNAzd7AxdakKvXE9u1GuHJ4uqCdbo5KDyPTyKjei4",
  "key28": "rBuvv7rXZoaL1V5FSUc2n1q4qED1e87Ag4LDArxj7iynjDwQULqBcrAiPGcsp7UJR7SQRJWW1coMetbcUTEzqQk",
  "key29": "2J4Y1EXcCHSRHvrZHAnQk3KgtRTwi7ZF6fgQvZLde4WbhzsmGk3oFXZXsCwgE4ogajwcpU8FTf3cFRScY7LVHjQa",
  "key30": "5Cvj8DChwjUECPxAmRuNWfi2quA1fetFQ5BTEvkqbPrTPZZecAaPVJzEVgqfEVuxwwJ8NQms6G61evqSaXF1J1qU",
  "key31": "3vUZiCurMR6ZA9jfSbekmR7ixMk2AcFYTFubsLujtXo5iYeiW3er2ZRE6563FtUGCXyuauGJSGNDofvzjjAJdD1n",
  "key32": "5pL8doVV9vNwDZ6MpGc9W7bAWmRwpfTT4xhbE1GcyqyzfVLnWFgQchF1VSc91nz9LaHF6HoMjFstMiTZo2nkfz7D",
  "key33": "4YqE844n5yf6RhnC6cG2RUjd8QSX17qTyvbFQKPkhMDd2pMwYCZJz58FvTZTbJLtkPWbG5LdaJrPCT3nZAJv8yLq",
  "key34": "35f8hvy37Qmi9Y8rG5UHJh2o5QgQsoSq4oYrPQQUieWXPiJe6Abhzzkhri2ow1ECEB4sJ26VKE2RGEMG5ki6MVJa",
  "key35": "2aJ2zJpjfbi3RZhq2jUvnkzg1hS9THk7HxBWNVkKW13C9vtGWB6bGqVUQGWY9pjxKmVUwx3ESfHv88uo2qkNmFhy",
  "key36": "4kCMwWowvqcRGUAioRsRTAdMr9iQ1fBkrP2uuseSJDpLaU1TZ1wCx5kzEGon7vUSm9NS6feSCPA8BvGorPtYKAmp",
  "key37": "3q1LAbzfcQ2vA713tkEQL5NVUKDpXVKo4CQ2K7FTLiVAgopz4oH8fbPbqAYsh1W1w52iWLmuC87hrt86xmfyzW8h",
  "key38": "24wGhKTgJUcoYDVouf7eCcbMLqHVDmvVuZcbGsHg3Tzm91KipvUmutQ54dE5PXL5rk5TDdS2FzT5eyWSztanceTN",
  "key39": "qpJS7xUC5JCFKtmLUUZNBngWXpF4EsLBGDASvADphUCZYNJGP5KqZks6wNjbPN6YRqaGo5EbyXAk48GJVG2RAeA",
  "key40": "cZ9TYTDCEE7uAqFTL8sYPvMsGuwZ73B1yNwaXsu1BG3ePQi7GZCvis334T9LLuoeU5GNaUsczxWw7ex2YPHVKx3",
  "key41": "52PBeENBeqvN4BBqvD2ATuY3Fx6PFQHPdEbr3mKaiDfff3Y5qo5BkhLsGReQpdY8WbMo1sin2MbNJrX6Aegfkayf",
  "key42": "5zWqPYokkaRMRv1mt8ruWPPsoXmsTdZo6Cn9t8MCKqHDdjrFUKgiLp61EhmMUtDXSUhovFWPRY6hY7zxXAzW8CFE",
  "key43": "4pESQvaymSSFbgzU9WwGekzjt3TBEqwfDLkQwMq4NpaBCT35Sq9DKqv93GS3Unesmkeavf4dtucNJEjGwLqwkFgC",
  "key44": "3MhK8vSSGPPrc7gsnN4CRJw3h4CQx6DZq7VcxnAssrXZxyECbxyJaJJL6aQ6LbivMrqgsnLvcbkM48y6SBagZ2fD",
  "key45": "3ytE4wrVLBb5yonzdFfffPN2AqzdhvbsNg4FpK2X4mDzA75mXADW4ecad8UNu8MieMj3K4rrFa4nKBYzdoytjGBP",
  "key46": "4zf9j3KdWZwiGBSwSgg7rZDCxYtJas4WeR4VTXWo6oNqEUpU8a7VftfDjhqXeyz5kCumiVPhodRHZF2c92jMxuL7",
  "key47": "2JnvCRxD1wPmMjkqsVJ9KyBSUotUsi917AUp16XfHkszGYcGWXntMM91yG7t3wWe8YsjKqCrghDz3WwrJK2td5Rh"
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
