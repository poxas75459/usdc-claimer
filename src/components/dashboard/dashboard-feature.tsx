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
    "8MfCB3YtXJfyaECoWjNw7vVFkwy1TzMkS3HuGroAaCZoSveofpXvbj6NLm8dQew5JYQmFYezebZ3ptpbFsocfF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KkoT9NsqvSVESn974EMaii77N3a4XjA4meEoB67earh6Q79JorUk4rkBGkdZwVgcVNXhpdyfP5JfF7E7WHdW3mK",
  "key1": "5x8ZsMVk6nQZV6CXWYhcpbS9ZeUcYdFBtq6VR5oYMoY3F51PSZ9ZvwTKQfYqEQ6RCPRRYesqepiGtYYYNP7B79Uy",
  "key2": "3UbefkuF8MXU26NKUoLfATNzCLoWtkuReuFyEFf9Wevk85BHqPD1dQyDqNsbNSk8nKcgTok4Hevb3gh8vUtB2Ugv",
  "key3": "4n8k2haJ6aFL3vsjyYCUSm97EPUkvsRuFjbztykRMBdp8Kq4EwS1BbAFzBJmWry4w129qXQvsPyd98Y2UpzVm2wb",
  "key4": "5qvXHuwLaQHDVikkFDnMkfqu42zEaUc3ZRmCMjZjLEyoasHV2eAmnzb1PNU1TRmTreqjb4zJUzgrg8KHkLmvHtd5",
  "key5": "44JujgT3wKYYtRALDQWDwyqWvFU4ZE6xj5u6vLmwFJvrKSSjLzxJ4xx29BQ37YPX7KrV58D4fbsKxee6X7XJPds6",
  "key6": "2o9UPAGynbDFyzKVn7a7C9b3QeFTGz3WYM1p3YzVzmz9j7YT8ovrgsuKU8EJBYgZPipqHjmH8NyAZ8kc7CNig64M",
  "key7": "21KDSeAd8ZeipRTVUyKT27HQ6Rj74ZvS6vEQpzDhKUPgWB1nYTeAnCKSD2HJTV6grKDKR17sRQxGqb7d5NC9bg9P",
  "key8": "xYuq7Hngs5vp3yF8gb5rWxftmzXkLMCdoEfUb1Rmq9B4y5VarcQpmLN1cF49zCm1EGEP3Fw4rQsqKekgqiJfAFC",
  "key9": "2bdGHrNcX8otNs8d99pTAtHoCFEDQNkmqejBtuGGqQH1CsFEyH6JMDMY1oPw59JePAHhMZmSJeAyuJxsYQm6ABuK",
  "key10": "4XpLuV21vUYYx29HxDeYGJDn7SfGqVRsrDTZJeFcaJFNrJ1An6YWsxiXe61QofKcxzUEztK1qCC1F8d4ZGSX5fxT",
  "key11": "4D2rLEXoueh16RBN8amgiYbTts3XRLfiSjtjiT1ZNA9kbbVn3tm1aRDVgnLucbmwZmhZfShEmDNATU1YbJAjjHou",
  "key12": "3vjr6k3qnwreA1wsvdkCKnB664uHzJhbUghhq6kWqDsjAkHkq1krx1fAfaHBSEzpbA8PmDH8HgTvwqpKBM71XCdu",
  "key13": "FdEGHvfShihxc4jBWmhcUGyvuogcNBvrb3QUUTzkEsm3iggbFuvFh5Sb4KETNVCkcWP4Mi3ZMq2gpc5rDYbb6gc",
  "key14": "4ZX9wZ6kXnouRXskWBQAJLzkEDoX21VX2BHjER4dMcQhcqvH3emYsrfnAiz1PEWbvtvmt9xCkx82V4buVRsP88vN",
  "key15": "5GWW61QAJUypgBPhTXJkbDyAPAn4nixyRKPLmRwhoqXtgh7NWyPhSx6NaFDfr1ukGHL3NyKBhAoaiUvAC9fkPdPW",
  "key16": "3YUqDmywUu75c5YkifN39k6wCgJbjE2oSq1AnourknKnTSDKaSmk1dS6k6q2vz8BaotybYSy8ph4VNpUqLrLrsk9",
  "key17": "3TRbsHB3f5iLXiEiUuhCXrQavSk6cpibAZCitmdCoGwN4NveWBenAG2XBUHWzDEvW3zwUx2GAFGKATfiF59CqymJ",
  "key18": "4aAK7gNwyVjFbwdsKB9gwaUtDY4MKgXQZDAXdywJdNP3oXMBnmKpLQgnjWbfhAAS3bPBVRELM4VcY4QHN949T3e4",
  "key19": "3gpJsRckrdVt94hUowMrfVpj8AcGpzgpcHr9XKjdAasNE4F3PT3aagqA2pTWLJFkre6zkfX1sf4NHf9xZYz3ELmX",
  "key20": "5DdCRKfj41As8nJV9A7YddRhcrNjqzSPnRfCcyMUw8RTXUN4vz8zi6Jx7yZSuhgBCjXKFbBRDkxmQxvA9hbtLp8B",
  "key21": "3UfoYzui888m5eF63DCExm6A5vZt9xYuUWwcG3vAif9SjyucM4wNcTF26wA8T37a7UiHpZXNWaEqvcP7QkFS8z1R",
  "key22": "2o6NScHxvqg5UXpdsmcoGcbWNnaRbBjvdMZ56eU714MUDjtacNJ9dNC1stvK3ReUFEdqU9SuDnJ7vokkBDH7695o",
  "key23": "2f1osEzuCQSez65Fpnq9pdCFFtp2PCpyrrEEF6H1ioczA7id6d8TH59JrTN6zDPVN3C944LX33E2whp9rogqsvzr",
  "key24": "2jFGvgXCo2RBibgzXDSk51VcDDc8dwjiZpJoNZ8Haz3PKEhX61JVMeEAFyojp53eCs4gpfYyHHXAx3RrFwdqjrHF",
  "key25": "4RYVQ25ZX2noKDj5XTPms95UzpBJmgKk33tXnLbNDwEegspke7t4FBBCFVcgtUpXY7orrPC28xNgjVvnp7rkPf4r",
  "key26": "4JYH2F529GG8uEehBaZ5LcuHc3z4ZUh4Hpp2Mhg2U9gogcxxwMfVkyKZ4RbTJ45Mc78zvuW4i7Fs9wRYUCuCdUTb",
  "key27": "2924NFrikmhKwEzLieYTWpvE5tFdLjAcHhXiPwyx1dYRCAGBq2sdJR7K6RYUjg2NAKo227J1WxjxQzyqjgsVpKmw",
  "key28": "5UK7HN8w9GmVRJfQ6NZnSSLwacU8X9oYKHkBmBxDoaPoghBRUNmYrAjNjMb6yW8fnpPSkso3SGF9Gq3wxiQnvd3K",
  "key29": "3QvonAbBFWGznT62r27hBya4JAPh1HfKxKo6o3jmV6VnjFTEXc28mzvFAPG1iAwau3dJtrMNCg3TQFq3r7LFX8w",
  "key30": "2zw9oyW9vHcm2sgt7QHsrfMPJGTNayFbjcMQGfNtX1Zj6kZGjaVEwsWopQCLA4swNoYQ3myeJtEHAX2t1bc9bCAC",
  "key31": "3MDNjfVvyFyN7PixJKm5QMZVEZ1gBKzYk5BvjkD1cwhhXVAcLt2FqwA6tcosRGKvSFshmX8mPtWMUaB4JrHwvkUm",
  "key32": "5mWVRFnkdtZZqabkLKNQHHBPxkHLJddi2JHYa1c6LogRY2D5MapGbgMTShqgahhh5uCyuegkEHYhb4vCSHSdv6YH",
  "key33": "2zmc9U676JYXFTcsQHXZASjSZd5bRgY7d8zc7F6jHfgKX3xVdAqpVJG8T6F5Q8vvPaaBJ8LDMLbWA2N8j3MFevM6",
  "key34": "2QBgPKQPAv4q1VHoTX6X438gsjXTyWUoA8EEQCT5c2BiiB3MDSKMbNrB55NTBdSL47xnRjPqWi23FNXLHEsegnLY",
  "key35": "7ZZ23gt2TQ66GSMQk7H2gLnV1yfqPTAVyYz6RVVxJ5Vscwo6oxfCbA26DDRJASZpAuAaPSLpDgfmA1Wnpve18hi",
  "key36": "3Z86arBNjpuADLkoYbegE3G4Lt6bHjiwYCj5Y8hAJh4XLoayAgZTX1BWtiwMEfTxVxAn9XxVackpekWAj5Yqk9tt",
  "key37": "3G7MCFM3RapzbLeS17HPEhXkKygMjxC7QLJWz8oCztuyr1BFS8Q4YbW86tXQYtYBnjLm2zErFq3VNGSTeKtobH8k",
  "key38": "2adNBZVN7Uif4NomCFeQ1CjkfPwCkY84rKwo8DNjSQFuJPHJHhYG67iQSNuU7Q3L9jNxcHtHfCALfVAZMfZZjRjL",
  "key39": "JQNnX14G56a8NWULf66uJS4zmy7w4tdJnrDCjp9ES9kZ2iCM439BRckqY9o5zUF74gguSVGvS4jwrcQpoUARRzC",
  "key40": "bf8zimzjTW9XKef5E6oAg75qvSNscr1i5y6ccpRdqVwHDKVEr2C2HJUw5u6QThYTUrbc2p1EGoYRmK4yq9UFSRT",
  "key41": "4ZLZqXA5HKMFzJqWLVnCAp9AhPUgc5qfusvbqwzLyqhG9pGa44Mvqi5WdNFCeLNXR3XcS7Ar75EpbRRxLFdNJVDR"
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
