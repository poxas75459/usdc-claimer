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
    "264fnLzfMVwvAUvy7FomNzmtCKYDsvL1sSik4MQzpaRiR3M45jExYBW8z6UGMoN5KJPKYCatyeMR93F6qbVsL9ut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XJYUbXKQUutMAFLZWCMPrPjdgrwQoR7bZPsyttDnjAsx6pNsevxDHxM135T5X69PRh82jXnHxrSakpmypUJrTwv",
  "key1": "5Ytpsw1Su55LLBnrvpDK7aKvmNjLbcpBaueMGzTLsYr3eR5qWt7hzGPD9hcHBaj4D6eJFdj2Kd4RPP3KXvcGGvQc",
  "key2": "5RBfW2nRTvoC2BghYiMtdEs7ci8Q8h6VgCYCHk5MDz52DCEoYQUoNTMWKMNh63ygYy7eEujGHUn8gYniYgLFpRUy",
  "key3": "59YmBsoNw8FzuWejKoFYN9UuHuLgaND87aCvmwXXqnMVEDDwf88A3peyDMrdyrsZiubNe1WyRdpJSAQfXzJumsvZ",
  "key4": "VV5n5m6ryZ5YHuKVbduVauD7FiAZwJvX7TG37yMewW97nQDgfu2EBSDcc5rdELQ8ucXgSPqM2xDg4qXk15gDkkP",
  "key5": "42AbDgEKQeSgPNwTzNLQ5c2PLexPvVVN2zrXgaavEekD4Wppr62Tfd6XybY3jHEWxhYpd57FZmoKjxYqfqh7NXuK",
  "key6": "5mSUoRk6UR9nxG1ckMryU4M9n8Hi8jiy9twUxqFarP9NQhe6JLeEurxiH9VrcP5Yoz6vZzMThWsBdgSnkK3GYEJf",
  "key7": "4J2zLSNnKw3kgtbmJkqFibzEXHUBYopEwqemE39VKji23UdKB4BJ8vu3QCfMXaxueZ97gDmUDbV1KqbfjrkyWse",
  "key8": "3vDWgbAawNn3nnggxPxivdEBSENZVuuewDKkVXZXr78ZF8xW87BQdDZP9xafX82A4VfD3LTKX41jy4kdpRXa4fZB",
  "key9": "7KXgxp22A2tgqReR7iYxCvgEP3LdKkoM5qjFtth9JsjBkPKZhvrQQoYdzGNPcJstvgfUNNRq38yzuvPTBT3wcDv",
  "key10": "4YAMeK2bYV5hR6tYMPbxUceQL7UF3R5R1dNSduHDBcvirH6FB7Ga4jiBc4PBwSFu5M4Ty8NJSa74Y6q5Wo7Y2Gsd",
  "key11": "57LrhBDXebH31xPLVmSTqFY6dT6MXVfqSc4NgccWstceTswAGcYgMBajpHDnt9Dk2kycncxKBmaDTQGqBhmAHhif",
  "key12": "2KWiMb6GFJmTXG1xo1ZCCbi5YBygGWcCjwZH8zKJEUc215w9SZaQy8fLvoSe1kbBrbH4y1nro6vRJoaXmKbW74wN",
  "key13": "3yJ4RDH47MyHEgZxLwGp1Euvjs3hn2WrxzsPv4uRcq8vTFrSJAxUffvDhjrdFkp5ENnQL9gk4ciwHyqap6Ci8F1b",
  "key14": "9CzCcQEkNDsv1F8wt9wP9ZbzdykcBN4aWHnCYCqjV8dWuZKWEhNmMTKtxXZGs4YYuvgioFvmx7HTAfeeW42WKyF",
  "key15": "4be1FpvYshi8rCpbTA8kvYtg5xjYszFSwufMMeWsxidUijo9eHTLL8wT6SAe1o9zVc9vBkLML2WUiomoVZF1rFmb",
  "key16": "4M1wA5H78EYvjE5VESKp6rYS3PrrELwhh7DFSDPivZzWCvwEoJF3a38AwDK5rAkPfWQWzNiF65dm8TkKesgRfdoR",
  "key17": "4xqM9E1QeDJJeTVbGe1yufVBqaucCgUFoW74KhWqWHUiBufuQi8fBQfLCqfm2FfUNMmRE2pTLYxeuA8pr87qV9gY",
  "key18": "5FEfd8HopE5BGnUdjCk6iHvB3gGKeunLhfgLZSZBghGrc8Tx1UFX95m11p2JskCk7ictLUbL7UDisJgzJnMgxWAo",
  "key19": "LcoDrHdMMVDBKmvSj9FxECyY6h6w4HG8yd4yJMw7KrgyjBeB24Q4qUZrvwjCKZpFLwD4DJefWHrDtdUp1WQnsAR",
  "key20": "26gzypWR91ovhfy45qEbu3A1HdmWepu13Bo2rzrmpbbmAWypt754EfDy1ahmPwkuDo3DbvQgfH5x3s6cXwBGr7pe",
  "key21": "61yiTuYvRzCPQSzrcEkKSe4DwqF8EeT76QwUQpSsSyYWKyfB9xm6UY465ASVu4SL66EdssEVkwp4ftoWz5qvWzZ1",
  "key22": "4CGuUojJVWHQZVkaYU9RUA3dcGZbbiiTW28f3ZkuTp6KXLwfoWPGAihAJPoXFjvMLn5hgM96WWzDmzkVD8BVRmnz",
  "key23": "62JUwJZ9J1aX3JuEd6vn9TwU8fDoHFQQUrrLccrVgypGdmugXuMh8onwsh7vTzac3srJeePLBGeyrrAx8iv9xT2o",
  "key24": "3kqkarLBDq3V33PA5cFJWx4djdJKoYTD9NyKx2LsNt1fJnKiRGQgNuZD9JPjrXw3Tm6c5eqXEDU7X11aX2oBuuiL",
  "key25": "44Gooqk9zUSEBjGvubwVgbxpsQTAtaWuUGaNJ1ijqjCVJtLzn3cirL7MKiFUQdhyZAz7Y7jnSyyLMcBeN4BdQNB8",
  "key26": "5jhgXtnS47BDUrk71SdFyWw7k9rZYxFkYFMQjDShhQSyrTV9NAHrNYUZyDrbHgb6n5coGK6CaZsbpUrGxJoNwWqJ",
  "key27": "4Ru4X5dQfHHut5wTC8GK3RCYAqEVtTmNiXNG3v9JwHQvFkWmfKkXHj2YDhVRgqGYxHjFU1iz2gcdiccBG3gpnDTN",
  "key28": "5XH2cLqS6AeD6WcyjMj9RpMwQpBNpMBFzQeGgZM9FX1pW27wAiWrpZk4TQsgJ6L3daH2rbKW5H7GEGUN9i9tYVx1",
  "key29": "4eBb3eHDurPP5yCbNcavnxTBbhcnC7eiWKTjopAPhksL4NeLTgAHeeUjQwtKmEx46XnEphhgrreGgVKTeEfBjm1L",
  "key30": "P1vEXvaK2ZRSBuZHHVaZpc6piQs57fNb9dkj8jFgh8Kgnc8Zz1zdTVRbicxmi2SAjZBodX3vXGRRECJo6A3UwkK",
  "key31": "cDiVVdsY3ewsV1aCauUhwjgWvUXXCwNpYAm3pT9PRy84WjBdvunkfRZuoUfJzrkr1N1nY6MEtrYrApt8umHmzUb",
  "key32": "KekZmUaYGt8mm4e2VDoLoYAFXHSMS37fz9s3xAZvW1n5q3W6ozbaaTy3RzUfWA3PzBjN8hAFG4fovWJmqr5fTi4",
  "key33": "3YPxmHAy8KQhs2AEvqhkHU9bjHAwcKmRDw54EXKQiGpJS9qj7Z2CXGYHAj7VqJeyZ8DvsXH4NrZz1zgDXk6X5qJr",
  "key34": "5ysyHJSB2psRqW5MUyx4bDSV1wZzcsbFPufhaH4hzZvC9cYB419LYnQhBykfQmjvbsG3VtZwZBpW3Mmpv1cTWiCn",
  "key35": "5cZKZAQvVE4Us2bWRWtqS34ZGUccgQEG1JbACHCwWkRZYESPNUs5pSNnB8EuzbEq4fnTXceFU4a7qUUPRcJCkMmv",
  "key36": "4L82RTE6BXVAx485wFGDh6a9gUurwsAeaiHZSesp511K8GgvBXwLpjYCAbpr7uuSVtAGRkNSLw2qLrkagZXrgtgR",
  "key37": "4YmoifGCtTp3bzEd9UBtxHUgdxw7eRqS1A8SJfjyTYkdDCUibTp1JkLFxmBpc7QLfrGFuAP5xjfxfWVpurJXdVgW",
  "key38": "5HxcNqqDwkAYv2Qdwfq9mqVe23DsFyESaY6YqXjfp3vTsLSwGRkVYZMcFTGdgsp2L2QrknkaMbfyz1HG6G5Bt8eR",
  "key39": "51E6LUSJ1kSXY9VvsNRSCPsT3QFSvG6RoYL3SWz2k82KU8mruimJ6F1fUaET4dKFDWSj9rbYX2PFsTptNu7Nc9g1",
  "key40": "4u5RZhYJbys47BvLSyc6XGPtxF3fPDdv3df8B3Eb2WirGT1cG8rnD66mCAKpNt3tAc2ohQNf61hyQKbypADpa9EX",
  "key41": "5eoEMzqhB74YoFpcH266TB98X2wbFHf3tQfvz2qGcFUEtDp6k9ioge74zVc8K48RxrKbo98YBRa1p7LrGRXDyfy9",
  "key42": "wYXNuTJVrLnetSw5ZNGt7gu9rdtj4odz3RsopANvXbmtdxnPNkkUAqRJonckWMW6cRA585SRzvp7m5tBKy96qvH",
  "key43": "3nNG4DZDbyhsZoPSMupjE8kvtetvkcoGUbD9pKgfDRs6syX2kSk3kNsQoYcUZmLbW8fBEun1N1F9yGgTBCScTNpm",
  "key44": "52g9wP8m3myJM6NucaaDuTB9R43MTLMH8iCS4kh9LN5hzBjQPLwb43eeD2NLhna7tmXHXyn9w47Bz5EanEAou4YC",
  "key45": "4bc8jvcbfrjgoAddZtoQqZNA4fCdMhzYgXi5ibGGEAbCSkY7NGyZTiKpZ366sUAbpYyuPxoTvp1523i4hZkDfZgR"
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
