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
    "ALx32qCWRRLs263Q89qUZHEC8QZZ2pmLGEAEoaNGa5LAErih5oqGCPUr2oDaGnY4vp4WoVJhzF8bNiRHkbre5xQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fGESbi3GHn6MWL9LnFYrefbQC49x1VnzFe7of7uKoLK44LtrQToPrGVEQN71Y4ZnhW6HQdbTt211odCGZpZrd6C",
  "key1": "4hcqH7vNnUrVqioQZMDm2zSbddGnv1692KngfVkLNCUmzjutGNmqZmrqJPmQFx8nrAGVaajQFts7YzSm6FNKhiP4",
  "key2": "2HxUQjqNaSDa3WdrPLmAU8XUGavADsVr6vtSjB2wHoB1t6GSSAgd9XMeoNriJ7F8ckBwWg5uW7kTpwRDFEB6VHVh",
  "key3": "3S5idszkCWFwmwCpp8k16EjQJrYu5ASHU4t4WKp9PXhSuZegVNzSWE7VAeunqRSzgfyTEjRt3MLqj4yBNuoQa8NC",
  "key4": "4cpXJz7Cd9jzWXtZdqPaST6mbto2eGSYDTf59fDTWkyMpCRC2jusNUcx7ZE1P5o39DeF81GDT9ZNtPmZTwsZXawJ",
  "key5": "2XpKA9is6TBLK8EwbN5iL5VEgeWctU42uteutrn7QvXpVXwRvhtxzhNKhZue5uitK48UWgsryCtjzvsGC69nKfPk",
  "key6": "4pg7Nv2MLdpngtYVgW9CkxA3q6CCySSM7TDejCvao5KTQ3mz43M3dG9AcFmzP8CRpnyEcM2hGwZVkYc8xKE3cjfb",
  "key7": "55WQzvNtcdMiByT5JJJ91f69HbewwPMJysaWF2LyKET6NcZ8NXadZRUoiNZLippfz3MF9m4hMGBXg2BU6ruwkZfG",
  "key8": "59Yog5rwQJvRhf5UczaTHsV1zGYAef1BZiBtdhngJcHJoZ8EsdEZmuhJozWytBLt55xr8KwHiBLNF5HNQWCLcLHA",
  "key9": "5tXTvVVw2uJqbF3v1LXnxNESqisQSYtF4NjtSAR5KzXqoeXvWfLV6NrxCpnAeFsdcbZyyjcP5VapHuXawyJn2fWp",
  "key10": "2oS35v48XhTPWfwAgPPWKmjEzazXbkWozbpcQ5ceT1X8WvZwPLH5a7UWYztJRfD5D4Pbh45VG1DwjmnQcnCCciKF",
  "key11": "3o6WqYoFJif9cpsbuvS22egYdGx1bLdRLzRvevTXQbgRJ6gExVxQ1bMWt4V48Mc24LagUN3dp8pZh7uwi1rk1iNA",
  "key12": "5RpQVosLqi9zJb38AJHrxmgzVW3YzYoK8DHf6ThMfPziMPVsYteuctsyBkjGBr1TqNbvPB6LGyAzwcDHcef4JF6x",
  "key13": "3A3GnagKqyhz4wpEcGfLTZQsYWetku7PoU4UsU5uVqX5Vad2tb7ksd7RkR44TKFjbwKQaaLwq9UYnK3eSaCa71Y",
  "key14": "2yPLoYtoqrCuKUUbwTaVP1BrKPBD3AfgkBT8snE5Q8AybM3pxS1AzZQijLCbmpxDSvmFvK1PtXYyTLUqok6VosQv",
  "key15": "2yJwffkUEZTbuBagjqgnEcCe3ggdd3mf6FFfkQuDWjjxhCN9B2Ws9KPnH354GBcwpFDPJQavADqmrFBwobHUSNTh",
  "key16": "hHYmVFy7EPQXmcyX8QXqF2waATRC8XrcMrvzCduBm47YqDybf1p3tUh4aj8sguuJDygYVskNMDNvE9BiqkZeS3N",
  "key17": "xCHSXtFyVRdrGw22SMJGcG8tab6AgSkkbWLds5TCzqrvhQaF53yMWHa6wkXSEtNAP1MugKiu8YLgzdrcQkkBakh",
  "key18": "4APnrj3W36entiD5ZbuQxfxS2Mn3QeRRKMzFGWw5EXaEZnJ4gQrfbCYqkqVx2xhDcGf8bWGFugFUqXJycEbpX1Vw",
  "key19": "57B94quBkn39pwEgfQUsxXwTpXqt5cVc4yiFSCQPRAf6TeV4FSi5JsfepcMGSnXa2ehuyDvF3ekpYmt7wU9gbs3a",
  "key20": "52rgFuWzUAh6SkcJCcXD4DbQhEPMYzU8yaGbg8kBGoSCFKMUJVmfQLmd811RFJLsU1FfFc6DqnAbgrq5ScVy8yz8",
  "key21": "hAqfQDwa9MmUo4mMwPwKTi9ZQp3qs2y9Mwd6CxQU5mi2BEAFhgcpZWDDSn2EnSeBUtHyApafSxNsDcc23SpAVLk",
  "key22": "bmHZEsB4HJiPPjZfT8daa9hdaTrKUMN3VdvRLKZkWyP8yRz2ZPV4TkD9SxUNRXxPLiKoriuHisX6W5XSEgp2WY8",
  "key23": "3ZNgomzGu8GzvhrD7Ajfcay9ANeXQqVegM15fpno8QKXhaT9xsqWcNWFCZzPoazLjS5HJFxeGcXieeQwkWdEfGZK",
  "key24": "2j4HTzSCRMpHL467isvGuDLybHmWES5vD1YoFGp44XPMRj2KKLarWdpT2CYQjjWqLhGX4tcKBUsgWy8My415ZgBx",
  "key25": "fNaio1ivVTCVUZG54otTev8BGaVYjJY55aUPoQ8Wr4ZJigBrjtaBZvRFFRSvwHM7AeRStfFqrVtdaR2Zj4zffVU",
  "key26": "62gMMELPrj9ZxUR3vjMKfwRnTuv2RivRCSf8ZFogNcRczRq3MfJxHhdaEHQckGdkknVdUmCviNM6eLV5yAHAegM8",
  "key27": "225u3oDZC4EG3ERtcxDeSqHk4ZJRXv1P6wLs2SERYrVGWkib7HNCAc8rwK5Aqy7TPCVGQMDsW11rGF5VWkN5HnH6",
  "key28": "2BJ9NrczTYzmGbmUjRYMH9NUeBHWyHPM6aLRvLZEXygv38BtKJh2VCKnXzFkhCvJfswrqypVDBjg8U9AhovM5Ufm",
  "key29": "3PfPcrndvYyFfVxpJ6AiZMVRSyjuo5uQTwU9K4jDbNwLXL2G31dJ7gubzcfXga8cXK9HJHDQ8TqMGWmFfb53zYDm",
  "key30": "4WCmfwMAzP3RV8xUPMhAbyuNseNu1VM7CYGAZ3HpGouyki3UQsAMVYhfBzfnwHYwPnkkso7ai7QEisC9jHKzXkeA",
  "key31": "EQxFoqMk6j7QTQCZgFnsK23jB4BYoy7NMAPaherbhz6PLcTL7wcBKa39vwmzc3vF9UWeheHdE7Ypt8cFavHfTCN",
  "key32": "4GQnHFoQiA1KYcUAFVuXzvaHKaphxw2KLawSRVmadUL6XiELgEzjSnZ2BLin9qetTkypX9aSuD7x9k4RfweBRCEv",
  "key33": "25tkmpjUgvXN7HA6Qs8UeMsi1rubDDyYtgBbaNETfXeVyrW5FTY1GnusyhZoXQH4jxTHUJNojWF4vSbaYF94TJkm",
  "key34": "4FKtNQHoC4SrTNyd4EAnmkB55A4Lf6vtnbNiJegQ3spxQpX7yc6yZNFHbhVWzXefUuZCxoaFigHp8wMMzc2NejVn",
  "key35": "5YRt2sikeBxsJhYURYn9Fp1z2uhiVPmW79KsNixEoKRpD8LAK9hcYX2uVsZfHaxznLdxPByG1a8FAVhkHagmLLgF",
  "key36": "2NXrHMC2pxSm3e4vX19YamTkw4kgavDrvwaUoww1dEqtzC31pzapSrmACEy4HTUjxagsBL8UtsxQCCvbUMawh4Jw",
  "key37": "2cN4KmUHCED1yB7mKBpbUnYLyMYujGEVgZjoL2kb2ML7f2vSdBfMqBP8gRkP6wY9Mczc1rrxWoAJNyqFeGfbgE5M",
  "key38": "58HdV1L9hi7oDwAJQ4QkkNL1JcpgVteLY5kLZtcxb4cAJrVjg4e9VdfiAAx51mg1MbsHESqRYU1LQtoWjfmDMnvY",
  "key39": "5o1byR9vMypsXkPPzbt3A2tjuciA6wBRzZcdRYboMjY4CbkhWT3iJakEs4hzeqWhuqrzvccxbPH4HoV3eCrNMVXz",
  "key40": "ik7Z5NnkLiUaBbXyqCo8G9hmzewDBUawxj5JQRwHcN54qao6WjcrpQBD8sAgK1avwU3vrUTz1A2s99FYBN86AZn",
  "key41": "5szSN4KkS5QSxPMHyiW7tsS4q7wahm5JsMVQGdDHGhY3d4uxhqpcrSryjfZNPmWX8cujLCqFGoqnquG8Wgp1pJB6",
  "key42": "47JLmJmJhiTxAKfTHfnrL3b2pG6ADXFW1FizGSxALtf46QVSqvn5q8cvRL4uwNTakVCg4ZMihUxh9X6HcZwe4txv",
  "key43": "3ub4cE1MCE6o6CQiuoAc71nXbBNVkEraqkFvH2oy666gd6NJQRhfxNsvzrzqRcCor8CNeWHnJF6RgHjHam1vHmzq",
  "key44": "2Wr9rYD4jh9KKqcbyRjjZ6CyEECTruRcMadmRqcUfUvbBmwYekaNLzTPvVpTGveqZyP1Wb6619ZyM2tQri2jGxN1"
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
