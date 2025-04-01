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
    "3NipKzSDqVVZ9byfXiDvPHrvVHWdTv52Sfb5rmKKNJxY81ujWmpxmEpsDjdiZwGTRkgnyQcMc7fQJpCLS3M33ZCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oEc7wQDHubrpJSgzT7HzQVj1QxngZKHZ6xs7yAWXmnFhiHqAm246nq98hkh7G9g8HWwUYZyb4EAokdEad6xTJCs",
  "key1": "4WkieJKortSmaC2u4v17PrB3ZVQuVxnvUWtcBvFXBsX2pNtScuhzr8HgLyNfYz33LYTWx16vXypVuNwLdGrysvM3",
  "key2": "5SFrRwXnZBF4EUJ7AmqUGs2vb6nzUL9SQeJJzSbegM6fjwrELqHjmkwqZTFyUdtagaDvsEsH3zSejdNNyHaQqbLA",
  "key3": "378B2kp23oykLQv67BZzECcsocfEqhZn6EhK9Pm7tWbmNYXQZo9seRHF3sdNoWjUQLYd2dZuGMjQJ7NNdAacLPJT",
  "key4": "nZye55cxKrNjC3oaJLgqZRsQjQbJa57S7Jf8vFJkbmkXfwnQBsZiK9URZyjtwxBDN8BgG7Eo8W8nH1xpwwBBmFb",
  "key5": "5hC1TxVqtkWzbyyJy5NJgGzYMFLcX3xZ7hsuF4Kpr81dEdpxXdDDrS1Ke6nvev5wVyvPFKFejfqxDgVzD6d23jgg",
  "key6": "kuQxNLgfoZrmERLVsAKAADAxSAMWV5ft1iaFH35KWbuWrTaPHNswP2PyYNKics3T3p21RdeXVBoaDSFkyYmz3km",
  "key7": "ZSbGdRm3GEhRFewBojm4cC7yeWnZDbEe1ht3HdkKWBvwDz779kbd3DUfWsVHAfRumiCuuVYRMCouqone18fTtQ7",
  "key8": "5uyqh1eQtfM3dP8ncmYriUnBAgJuuYy5zBzoG7EbFBf51cdCjnorP9TWRbR15tT76iddt7n9U2XyL3xXaHoBUiLD",
  "key9": "4n63i5vaEnqgcdVtEpEQtQiMTGVaPB4ZnWnhhYyPJ8Jn2GzgxqeyibeZ1hchpzZFYD5hPerPRjDRWn6KFxy8c46G",
  "key10": "4giHw5Ycwb28XXMbfFLVYnsbPBYN6hP4mEDNsgpXVM3M3sqhxJL4DwmEqicoSgSRetoM3YSpr1Nvhnozj5EqtDTQ",
  "key11": "55rjZadVJQjZHryKXuJRKGvNf7wy6pmE8rpAVvyHZeGsUSKMJ3omMeC9QftqFkMMdLUrfguoyxsJhtJB5KWGUFqP",
  "key12": "662BtoUpJngxsmdV5oSUAawwDYbUVYUjVrsoNURoQ5w1UcNRaWo5LhrTKdqaKtoheZ5NrpYHjDchbCRTpiUQRrEY",
  "key13": "2ejJTiLZtmHe7Do6pLzwo4erBKxLLVPgR7vS5bRsgUGfAjtwU3PCu4kH3NBFvU3gKNgZ1DruJjUj9byRtDZhQT8N",
  "key14": "GDUdARzQ1JhLmVLCj1PbuSfS8X2EPCo8jT6XRsX8ctcgRXgKQnLFKGei1nT35Z1s2mihL55HAdTq8ZbSVbs8b2s",
  "key15": "5XpqphFFDgnQffgHLEwuH3LhdwohxnNpVfkfqSA1XFdVGwzdsfzwjPsptF6scibuvy7r9kNxSRpKEeWXCXcaxi81",
  "key16": "261kNGVFJqNiGDVXuPkSHf7LzsoTSDRwZX6K1q4J8f4aezxybou2brNPi1Qw2kzoXVdKJMvatzXrrcNx1bCcUu56",
  "key17": "3mfQ9zLNzLGdTf8RxMKhs7Wsv5YnC8V731NyCCYF2engfgYAZoQzuT5zwkYaVahnouECS7CiZaEc1tmBTfAWfRZw",
  "key18": "54ZjpyoZRherYKz5c2o9VuZSSW5pHNQaceUEtFabNKLtVauH13LsS5yCkGkhHJVipm7fxXtYSusBKeeExeqQdLfb",
  "key19": "3MVCJ1m3kkSW1Ny3X8zsqXgYwYcuj4sAFi4htJXoUHEFzP7HJ1xNNPnmgGQGguf5cmumerrC5HYiDQrPNYA5hBr9",
  "key20": "55Gu4VSj59Wi6CtGm8xr4AdhEycwbBY5agXVkZF3c7aBv1Ch1ViGt43xnGUs1873GoiPSg6CJRz7X3M4b8g6jEZP",
  "key21": "3cX9nKPZ71esAhM2PBhfKfQviAqocDEFWJby6gYQACqQRCCAwBBUuLkohBZ9LUDEtQ6ZJ4Pk7hAzqkTEtBUA9Lrc",
  "key22": "4HxRMjLAdcwjr7L883YuNgVXnt1kMCeUA7GPGDsigPh3UNQj2qqzR7qnhBei1fc3cymkEjRtZDnWsuuZ8GzS91pd",
  "key23": "3DMwsGQ2auPKGhH7rsGtBdqEsGSbuE7VEZVYNBGvb7BsqEVLTcMo3uDcDVpzztXYKDdVGAjFRc96JLUnFmR2LrXk",
  "key24": "27zpa8b3HEEF9ZJbbcKXmipBDXU5o6quUip8p98geZdCSLcgUtsGZfNUGDXhWxQwUX4PczWeCVAuDxxkLckwsBn6",
  "key25": "2C5m4x1QGY6Zv8zvCZKDATKjkAu4fNMTyH9ToANdYo8KNjqLkn9Y4LzWunDGsQnpBmKBNv4vp9CFs5W8hrxJH2c6",
  "key26": "GPFPvwW6KM9gfR8oXsFohYX2mQ197aymPVqKLB8VotTYfDEfemuW73CT3GCj7cjKsWb2UdXACL9EyaF6Ypo8VGN",
  "key27": "22yiZhBtnTzwE3FFatNhJjaLiBpA3RZ8wGSjUnDpfqWa8f99p66Hhsn3J4ysJSxeEX9hYYk96RfX8nHaXAtS1Cpy",
  "key28": "3G471sSfBZy5A8CfuE6NPLmYH1uctBMUdqFhXpS48CNqYJgD61VTcFfrVyAFSHcabLsrhDdqCk9nwFHioMqhdr3e",
  "key29": "52SZJJjb6dDRAUBDETUek2zQLF5HwUGxuUyvpMpv2xC8Vqe1dwNwa9UaYQv5NTr2Rr8tZsLE3y5uK15N3iQmaNLk",
  "key30": "5yJtLpWVPQKhx8m5w914tAb8re5CibsWzZyZz5MD3PDyUCyscuWVSDedTCYa1tcFpfFpQgSv6qbU8jyspbwVGEFD",
  "key31": "4xeTx3gwmrAapfbJTuqf6rxkd3AV7LRrDPEzDXH6tKSxahQ3nJkghibr4uCgjKL6mTDNejJ5XmNHTN9nP5iMNqkz",
  "key32": "5x9Tb2PVe1Cs6if8KdvLAR53a99mUVjQB4hxgPWRnHmBwhhmzbEZRq6VsbcySPHJUWQ3LcEfacUD9MuNUYqkt7wm",
  "key33": "2CWdRHx1fU7sn7n9ynDaFn56Z1wRgfJYajA8r5uieaw5uZaf1XwdAMHWExEig6V2keP4qdzTUhecvxa1RPKrZx9g",
  "key34": "5G7HcV2ZfMDwghNNTEd6eqWGeGcnFoTaT857RowNsqW4xjjcCNsSdW9xdtrUJHdFAeAj8wixrWz4ANDPU3G9E6Pm",
  "key35": "59RLgmwVbLa3Jcq5QFSbWfXTmVH5vwcvBhpGZJ6Jm38PDTUT2ZTjAHm4R1LreEwuoEopyAmQ7QxVWqua9W5wbqA2",
  "key36": "3wvdViuirBfrcKnZCrSvd885io6h5QmsUTCREEGMmejzDd4orPRGA6x9kEywwnMgRWFHSxBqT3RYHCuBgoe9wRDT",
  "key37": "oNcVL9cxx5b2keophhkzeze19bkPf57jCq2z14u2R5UG42nWJoekxS3K2jE3XwKqasGaB4vKVLWUZsidrJ1HETM",
  "key38": "3zd1HFmKdaqoMLPtLNMSn3MrsMcyKMCTvcvoNWBHFghA184hmdpxDvjv7ZjMpyatPbK7SXtMwDDxqn48XxYycKjA",
  "key39": "4Kn6LM25wPyCST6Ydsvh2x7WdrSNhsF36xBxfzJrce5zF9KXFRREwuPDfoJgU7TfHFtyB2iYWmRRsjJNsnRXyX5s",
  "key40": "35w7bunZV8xa2eJvuGakaqGUKZACHCMz62amBAprw4gkUT1oW3wVF1nZrCM6gykHRuEtJZEBdQzxyXr1cWxB5iDR"
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
