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
    "356cCmh5Uo4N37dJqKowukuFjK4frXZandFg8ZRaXTXCvtu8EP9CrbwHfKXtRNRTFz6B7srapmXJ6k3PVVzE2z5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6221Sskv7uM9vieDkAKe1uwDdjmunGRzvwDSsMf4XVNit4sjnjfcX68V89xnSGMdVDyqf4P7TWsoTdkhALaBxW3m",
  "key1": "4xcD7GeEHQAgJx9qbjeQxyMyiPEDNRyr32vHLZdUino9sfNugDyZjBXEdQrDHgevym7injpU25EoPX58H5RF19WS",
  "key2": "3vPYmTzYsSGoNpj8D4oeKkwvv61u8qrw8rLWvQEztZRQosjYfUspRAjUGhx5W1bNasxwU9tXtw1cfjajF8EDh8kS",
  "key3": "4646XexecdvYzqUcoykfTmowp1PAoXKFXCNHLdL5xVLswgeoZpVAPtX1X57FxC7RaF5NZrqLVGp4Q7TmcnoMbrdY",
  "key4": "feeg42gM8RdDdNyqUczpVAGwCud9ZEi4PUDknau7bJvUrgirs4XKPzQ3mZ9kPHPJvuLwuywpLqAFXvB58iRk5gF",
  "key5": "5CiBuFHeeHtNuPr9euq4bovdAYjetvA3iopJi7r9Dzxvtm6GjPaUg3EWkAEjD2m3Y7MSHgYqVq4xoojRP8st2WcU",
  "key6": "5Sna6YF3pEALXZ9N9SAHRUjtX5Y8oMvMqmg8Q3CddwDPkTa67J7c6gZkeDrW9WMhurnEut8V8FL9S5WqvSHPUxmS",
  "key7": "427cXhyzSzWSkahg1oGqr35pf9J7ikQMiJk8QbcVdnWdzuq1fkuQnnxGnwJ1N5gxbSBvbGfMhegKrsAf3UArhbQf",
  "key8": "Ltr7PV9yHJh6ag8tPCRgF9cum95P3eaNnQGVGPL5VUeVKeWySxbFov8U15eR7V8tYfYbBgRWYBZom8ZrugdNELz",
  "key9": "2aVtxxVhymPkUDp7zHy7K3qihCBwn4P7z6DE62DYnRZgojawzbFUgmQrURZkcdVjBdHFR1zk1Ey6DsspQ4nkdWM7",
  "key10": "5vkoQjCQUzifT4WfBc8gybP4GdWEzGe1ZQyBR3qAPKMddDPnJRiKW4Us7Aj3k8XiXHQqWZyzHJ5imrX3iY7i7Z4F",
  "key11": "5WzrSCoBXN8ixhSx2NvDvP5zspqSqU5HddVUxYMA33zkWAfNYCu32JmpJFn1xpJfLjKKCqLYetEDoVxAuQuB2y7d",
  "key12": "2U4ranwDFmG2u5YvbWxLn5GbAhAZXjEL4vCGbfmzeaRGYjZpMjbq933e1BWE92hYUkdWLHqnw5hahLvbG4atMLTb",
  "key13": "2ci53Km617Uog1wohfTTs5MuCEvD5UCqPYMYo1DEzBAwb3Q5tknpkARVhcRgnee6e5DV8jorXVabeoym8SV5Rfjv",
  "key14": "3b2ycJVukbZMsvRt8CyeeuBhGCQMqotuypg7zRFHSc4jkfMNAWpNa4vUG8bhj3LHr8eE28SKqnBAQMEmMdCCueUX",
  "key15": "c93KDyVkrW4fq4BdqxBkch7a8e2UrjYh4xi5kExaNFRSThThB8vShMf9cUWqv5otxYQmydXeanmme1Qh37rqLcU",
  "key16": "98XcgaC6qqSC4zhnUbi1iRpyL4QTNCDeZ5X96o8zpgBdcEXRsgTmjvP26fgWNaXZFfB3ze9Bf9YpvbRW3J5rJvq",
  "key17": "5vY23q7sm4NGwZGnxvLa8s4LTUrRXusH79L45jvEF2SP2PZB9TByweL9vhsqKKBizx5DTFuAPiCLgfeP8ivp1WmK",
  "key18": "38k7SsCTRQ92qzbVMmgbAE7Zy5YTszTG6vDTn978k1mfEwzUjfed9WgBZH1yLapV5K7Y8c2ZYWbvHUUt851oxU24",
  "key19": "2v2TwAXNSdnrBAqCfkmR6XgLEMyexcMBmniCmqfxE9NorbepvhKHB44KHp95bNVWrVX662PK7dwPY7aj8QSExwhm",
  "key20": "229i6tLDQtXhkeVzhxhrPQ4p9uX8qAK9ycfdZx31M6SQPwN1mA5ARMp1kWi4zsNg42L4FbzLutCisWxa7eRt7Rd2",
  "key21": "NxmTX6dCtDvCCv8ruL3TTgiu7tZbdM7JdzRG8xBsH4JMqWHRwSw2M1hEQTZM36xSGCjiEwUbrC73yomece4pVV1",
  "key22": "2oPsed2EAFG6Dob3ptNLresN9isek44YntG5ygJQiiEaeP1mYcG8aNEw99aytK33XRfoHW9r7vjAyFKsfd5ZFRzA",
  "key23": "4hk7VF5BE1kY6c2Mi5Q5epf6bee5zXj2ph4yfgFG4Bgsov43WbRwZiEdxMGphVXRfihKSfcmGgFdCNqmBdh4W2cC",
  "key24": "3TQHNpfhVqNmoZBDnjgN9K7bbLFz32iATXHAspSiEbLrb7x8jBq9rZBqERxDBbJaWaFV9YFFtCczpBUEf2oKD78C",
  "key25": "2xNM57jhrE4AixtRCtKgnGUidPMEbMtjDmHEJZDZDPqBfnuRV7zxkcfDpwDnqqmNvR5aCmstpGKB9ghokqDocEB7",
  "key26": "2jxRH3SHpCyEXELnS5xmJucQCcupD4wG6EFFFK6FRtgaP5ev8atwkkjsECkX7FM856w1CHU9VzjX1NRjkWFmTyHs",
  "key27": "3z2f5jGxkkxQ2G7QSFwwyyDW7YEiyXm3kFEPB42zmAPSw99UuEtp3c56vGcbjM8yhR6Xv8sQkV9qbMJo6HAi3dia",
  "key28": "42nGZQQZx3boeVAiAussXAobX2hd7P5wMXsffp21WbXtJ9az4NgoBBC6tsiiBrBhtrZWtnNwoVJzbLNWfXPygP17",
  "key29": "482HjXnjY1PjanTj8eS3fkn2wMcD12dyCrwJnvXiKnBr36xb4pb9Gr63qzT1tdNhsFdpBDQzCXCema5A8pTuvrzi",
  "key30": "yPj7pFp5yZwVtw8k6rVGLQJntaxUZDr82bTvwPfyx6u7Gyh8E6v9KS47FuRWNVUZMaMNV3B8ATbrPfCCENuEbB7",
  "key31": "5stuVYwgQemEQdPNjrPZpUZuv8TR7a7kgfnSP4LvC8xZSDJryGjHm5WNbZFZ6Y1Vt7qwqVkSQnh8QmD2dyMcLEis",
  "key32": "4sjsmXgDf7MPbL4KeNZrRehAz5Ho6rYBDozeAtz7bj2v5D9Y9Q57XYzRdHymXemhqGBngFstgiwGThZ276KNQUAi",
  "key33": "29a3QH42b534y7sxV3cciSZBVju12PwAhD7odD9heH8tvDEp1v7B7Nqmeqs8HH2ECXjeoYPgvRBWnMcexZKfvdTn",
  "key34": "4TC237FMhG7Ypfz4wocssfonuE7ZZvpLVwbLKeMqNkuueNTQNVpWjxYwW68niHETJMU3BjGRB4ZdY14Vsib5B8MR",
  "key35": "5D9DUM6E3TE9UFPJdaPkZ3oNeTQEyxT9wfd3TuhCdTJ9KbdX8NXMcKKASSccU8gF9uYjUvohbHwazKxtDrhMKvM7",
  "key36": "4JYM3jsS9SxQN5bVVDswQ92gYXH27mMYwZKw35XU7PCCEcp2AvXQTYHLyBdnvRJCsBiQWZxGQxkiLqgH3hGPKeLm",
  "key37": "2mXYUYeF1jmMjzeqeLr9UEf66X9Xa1AGAHZ9EBvoWu6YfbbyVAppvq96k7AdC5rc495RZ3d9X1ga3kQAttXXTBC7",
  "key38": "3ySVZhsvayN6J3UaNjyU33tof7oMYyKEZti8G2V5gtE7KEcKcmYcjKhTJRB3FmtQvmKEZbusGMgiWeq8WthcX4X6",
  "key39": "3qV3Lp4bwyhDZs8vuzS7mz1DVNSz4GZy4fheNcyXenc6CiUZJ7YY9WtWect9Hd28MPrcq2p8ULgTWuqG5FaKL7hp",
  "key40": "avojyNrWXCcE94rqYDdv718ukoMJ4NzFijD7zvbQeRLybn2VTqoEKLFoBr8gtexxnPPUproxNzupHibXGrAbrKy",
  "key41": "5VxEejx8hV9HEUnLcgohqywq6qrLXowbn6oFvX5UQ32WxqXFLeU5VsGAkR6miHmpz8H2c5op4SGviBQ5j2bWsrkm",
  "key42": "ANr4cTnYvWGd9XiTx21W8A4YqsAmST521CUXWWuhzZavXYPdiCpKiA7HQ8Cxgx4GB9GoqPYspDAYGHadkEjFYx1",
  "key43": "25EwTJ4DUcgwGpEhC89mM9D8pV95uu7V9f7r4pCGSozEfmMofeaURKbG6e6LVYdBkp9AK59ujzn9UwphE4dMpF1w",
  "key44": "rjAKhWwGuWREEWe2E6GyDtv7wSGsBTpW6qYBHLfmhXp6eyBz6cZvb7UvtTHQMRxD4Yx7xW9kC4us9UvEHz6TVhn",
  "key45": "4wSmXNjSHyrb2cr9P3KBeV7PdgwvhFNa4xbB3WhXSHm8dhjqGdwFNPe2AKPL2CGLjBAsveFu9H16RNBoJGRfPZ2F"
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
