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
    "sY7q17nPmqMqNwgfZSEaQc8zH7gW9h37k6nVgWh23wJEpTshhaHhDkCnP3HVuNw3oFNwaKZRDgznapNQfLS51kX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SwpKGoYB5B5kMdi6KPRPwRM2n3GxgFaRDzxP1tUEDVToRJJ6cQ28fuLbm22LzRxQJAryS91AhJAZXx98FqKxCAm",
  "key1": "2bGxMr4rM7Me9n5kReEMqtg9zNW85AycorWCgkxPkGeKYuX3hA56UcSHZ14VTDYTxKqJxsVB95dFyXGEVUVdV7Er",
  "key2": "52WUi9gQyTXocEjbFXZzbKdqYrBN2oksMhSCwGFW3JXrqnoUtHEwVHTu5vHk3CoQbVTQTkjUJ9xh8jy3f6miSSit",
  "key3": "45QEUza79VnrHWxzDKZ22HBzG91yHD4RyF3XSQ5HWTzSwCy5MGvgJ1q9n5WvuyRWp9oEb5yHYq1znjgbCQCQCNDr",
  "key4": "3j8dYRge57bYLF1B8t3adJGGimZwoPfDJXvuuokhNEqne4JQaQZyKHvF4x8s2U7rcWBBmjGDnULYcC7HvJshmxo9",
  "key5": "2fvQYLVfE4sjxn1rxFf13PehjsfMBdoNeduLQzwt2ZUZwiEdEMNCLxcZEiJgMVu7Fuh9kSXD8vcc56si95W4mheE",
  "key6": "3AYfpHMXuVuKy6sdnnSEgkJAnme9RZ3Spzaa4fnnte1RYGVHfj3H52kdKAErBaT1ru5pPgs3aCYb4qsVDRLZaZbt",
  "key7": "xX188Df7o6ee23CvvR6UhCxKs1Dta1i3frTcTnypMpR2KAGuSZJr4x8zaxCzMF3MXkJ6Q5hCSBnzfBwNawCBWmQ",
  "key8": "5L7KQioEWj4UW4pvPspMKJHTTPHSzkRfC52uSppfn6Asx8qPabEMWP5jaD8pxJYXdFBBdP2H3398x8rejik7obmP",
  "key9": "obFd6xqD7vAot87AQaVgFUZdgjCboJNsMk64pR8WDHfP6YS5f6P2ZhW8BqYj4YkWisRVSkY9hP5qyEuin9Tw4AF",
  "key10": "hoEKSaUG5gfTzdEMZBjeCTBd2rzzqXrT2D2xTWPoEbBs98vj6XbVnrgDPRGDMEE6H4JearkXZ5PoVXWupt8Kw1X",
  "key11": "Dw7s5uuXdFmkW4d7H3PT8fYmJ33mJXhHJiaKRXgQRKrby7qQvT3CUrQwdK2s3jfhTpYdxqugTorakxT49UqrJfm",
  "key12": "4cmySnr68ghEVGLbUtm3Yn6sMjyzRjEgAZzLqLJPJZSB74JSpuvo5kcmXaCn6dkURbXcypPPrXTp3k4nHDuwDiqt",
  "key13": "HKyEtLTDqiLT19z6J6GZz43rpKfkGbPrrjkzQYdEFmimM9kUgjzY1AC4b12tZt5VFwZ5VcA9TEc9281CHLMfdZ8",
  "key14": "76q63oeQYWotsu8ysHtniFfAGQEjb2yFoUYp2JrXq9K6ceEiLiSgZmsZcbfww3JTAkDoYZXeLLcqCsVsGouVQVA",
  "key15": "4393v7iH8Dr1Ezq2dnYzg5WsR1M8LMzfDk2Azw6ybvjCVNXSZfqd6g1unT6LGbo2Nw8b9VG5mgaZ2W7432Z23vYu",
  "key16": "QXikkiUQ2EKcUZSnPDsLUTSRiv7JT6JCjF6uc1FYKKb5YeeeHqKJcncTbUaXSUk2mtwWea2n1ZQ7zJEzgDE2dcQ",
  "key17": "4jYYfYrBzELitMzjYSAjKHGKxqn2QHdzuADuKrUUS1rpUu5KHWBSffhKTY7ZEXVyV6hQBmVmGBVAhEFyBXz2EUyx",
  "key18": "9MfwU1csAHc5Xrqj2drKwXQWpcJJXJA7KAkQRpjvfzy8swKirgddWTHY5df1YGdixAKvutpYYJs7LzNW7jQXNQd",
  "key19": "4rargVJfRLfGAdLRpXNweoQLEfVwDFx9tZrgZJwQU5t15vDRH1pd4fjhtjGW47PtdU69d9qRpMLkwTgS2xpvLi8x",
  "key20": "34xjzKmLWapHh4rcodE6aLj7dPgcg7iuuLBpC6he46gYHiaTEnpyWWU5k1KYtob5vaDYeYcVJqnEUoaCKrzEoaQB",
  "key21": "5JsZM8hk9ULq3UDGX7cm9Xcyx4CKXHiY9oXqgpe1QxjYBS5UN56NNpEH4Z3bhb7KfqvfVAJNfJTvPPvwkwvXqxmK",
  "key22": "61rNBXMGsEijMqTZNdDNiQZoNiQdL9rGMYjUhTGC5J1mM2io9TWUEZFohefDcszGiWrxYQWk8oH432BsSr34XouE",
  "key23": "3ADzZhRJFxNNJgwPQ7nswQScyyrRvW1zWuQZ2g1n744iihVkcj1RzP6PoACVcN1y2gwTYrFpHvWCowvRkiA7cexx",
  "key24": "3eDiAW5ZRdNSsQJxMwJR8QdoJMRJg9PZkpVsddAT93C17H2wyDNLkFmLxeEaEK7fFnTq7C75d3AZo2fgAQUN1oNN",
  "key25": "5CQhjV3To4zsiaWPVmXuxEwkfu8BZkXfjZfDurZxDFhENuRfX5qdQiSLhHFjyWD2BCdeWQaSx78SS4cLc5W7ccnc",
  "key26": "QFZQM1gzzrqXroYZEEesEr5UftbakAecyKBGNstD1zA23REhfBrmAJtojr1oSanwjH4aphxv5jCE4oxUD9k9qAe",
  "key27": "5Emg4BxAfEtSLYdrq7A7zJUMNoYhFfTrnYmtDmsCpV5wr7ygKbMKxJpSBTwNjGfxjLMzhZKbC6rfnns7qmkBE25U",
  "key28": "34rCmKZndkAEunGCGeVpgNEjRmShKW2DVXHPdLTKUYY3B3aaMQz2S8Cz3VL2SFwEWQj3nzX2CxEYxm1kLv6dsLwf",
  "key29": "3zXVAtZiYjYCZEaQPmARt7yyvRbMATexdeHrggnUmnVS1wTciiVn3b4AvvKU1Trph2h33oDP2S6UsaSxPAv855bE",
  "key30": "45o7DDqfPVRCSFew3iyTcaRKZU6GvYuaK8gzi2BCDoPpFuEtXNCUapUX1chqDQSrQNqKR7LqFaJe6KXaRrdS195y",
  "key31": "2bBTJnnJrZmsgEQ3HkhQeBEJCg6bApFg1Qr5sJ561YYx3esHHZkE1i1pWXDekDUBKUGXRezd84huiZFTfs9X9AZy",
  "key32": "2vLj2G24EAWefzHqZmPMBeGtStsSY4Ym1r964VvqAGZSrwP2B1iVT5jSPEstkxJm6MoRoq5Xegrq53my8c8exFNd",
  "key33": "4dBdNKwLUDpWAvLdUyhGhm3wEt5SV2kQdHSEHL9Jo3FuzxCwKkriAy4txQy9aHscN17Tt1dGF7QzJYjY7FcKv1td",
  "key34": "3JAbUTHzbUEnEZnsZCsw4c1o5FhtSdApDMe9pPjMj8TQ5UbWHZC5mwJmrvBf7rvv6StUdvQaGHwGhsoC181X7vD1",
  "key35": "4471PzV8AbCmEXtaBib4nprzoVDpWSmt6kAC14p9juL9CnQ6tj61Nqf6gDKUeEB8j7JT7qWvtWjJW1RJEhx9zRYt",
  "key36": "2S5a8y5KG4TvaSoUnuhxjvraPYhWqQdH79ZwrUeZnyudQdsKvdDpCduu7G5qPoAoSs82i9hsw4PrueAdXjfmd69b",
  "key37": "5hiGF6sYHo7SqASmatk46W4NLrVbW9poAHAXVBhjCCLr7JjHNSawhsBivQVUzpUsYWkZJ1PpwZH88MpdFhTozjPU",
  "key38": "YWFWHwMFkgWEi2DnBybJkzvtFyvL8uQHUcaEXDV9PTuS7U7fdVL6wh4Y6j4W5jmXVtXq9eF7rfTsBMe9aFX8Atj",
  "key39": "52DVWuWT9C4wJRWozKYXVkXW6RJqrLb8bYPJfNniDnhDf15LaC9bJdK4X6a85da9bNRsj9XfvL9daJmZzUUaPwCf",
  "key40": "5wrvSqyJHzFT5Mn2JPS2uh4xxtefLRRdNCNhLT5BqQnmxLxXVqicuJUecdvVKUPP4xoXVez7Dynw2Fd3nFyLwiP7",
  "key41": "5YmCQSwY85hnrF2T29mVbghbBFqvFcduXLdK7ZdQ6onzAMaFYNNaiCfKG919R82nsnndc8iH4zBAxcZZn8uuSmaH"
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
