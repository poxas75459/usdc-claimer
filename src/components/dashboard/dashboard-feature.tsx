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
    "PnZmw8w9K4p86mJUc94QQUjPsi4Nc9oKQWoc4nNAmLkKLRjdu4NTRwkUSXCnEDVArZ2zijzacz3YkxdaPcgUJfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nzLgZTh5q5DN3ZAJvm2AUJQtDfV7zhFRWqeVGLEghCAjwmoqrnPU6e292SR6RyEk3Cu7hv9k2VDahDSYFpPbbxw",
  "key1": "4XomBXeHCCxf7oqLQ1aTiPhc5L2xt6xh2oiw3VAND6DE2tnfETcqaGYexBZBrx9qpQsqjtVHmTXHXjLXTPXHMbdn",
  "key2": "47jMwkjsHcDnosfacvtAihoiW8Cwuo39NgtSSnLWhEM4wbsbRLqPkpNENbXReEdDApZE515RNDKonx8rTSqiPpWw",
  "key3": "2dH6Ta7PW5TFfnnTdBC7ZLZnyFMZ5NHya1KixUxFWvoLrJs8mVzszXi9UgpiT5rKXWFhkSaDfQyZMFxLBSWyKwKi",
  "key4": "5ZJ7J8zysNhyZ3VW63opHXc9kjymmQPW4p5jkyLX4qPoLjnHXKe1dW8RsTrZ6mNmAVaZChNug8vtoZxxjrYNL4E3",
  "key5": "2mG8DohtxF63LQYhwxEC1FZ6ZToQek29czzzdMRjz1uEukV6o6wNNyBFHMv7K2GWMPV8xf6FFruEEopbmcvH9kvo",
  "key6": "3DzWHYRVk3XXjGkUPhS5PJCTHnVrNDtYLpQh6ssdAHeiufmksQtuR9jFvH8py2SCV5VdnsPLkNKCRepSKsj6TYsz",
  "key7": "5hCet6srSvRSiJMFGh9qeMP43Zu9arU5AFLvmzKSR5Sb7ntBnjXYBCXXZMcmktpUuu5wzNbFR1vuWtFaQqWT5G76",
  "key8": "PBH4ao979TWTej5DnuiFxiMkFwSmrFAgs5viSvPSQ2V9uRrXn7Nio1dZtSD4WBYkai2EB41m7dZEWecpXZxRjXC",
  "key9": "4WzEVcErbYyWZQKQRB3e1eFqyM9QE62Y7L7KnPURzoR55CDxTuJvnwmGY5fRTubDrr66nMpkU7qgUzJxq3gh6vnD",
  "key10": "54cbkPHfvXZKS5r2Mo8WZzxa6xCqAryYHemePM6Vj6MoWqKZvDUkQJAdbmzdMUmfmEN2jWpCesD9iSeBMMWozTSt",
  "key11": "4QxFYqdDeKrrMppVqbkbZJ9uRecf38rT4z2SCEAxP1UHLNwL8i8ZmCpmD5aFJE6DMSKMWFRF4FUWTs7mmaP5Eo7E",
  "key12": "3YMFKzMM3U9H9o5cdEUGZkprC5RK1RjghcNHev91if9MLnh9XaPwaEomAZwiNyc9u4uPr4nwYU5uQv3QFuVskq62",
  "key13": "5bXsxbgRyj6y6hmVM9aW6cb8XSWkeDztA6QGbGz8E8ChDaCGPobmZekr9cNB5cRFHCSLFKdqG95A388uLa13FRWx",
  "key14": "zcWHKbzp6PpNqeBi1s3qGpeo8t4Lc8JVzpLzjV52r9y4yXXRiY714x6hKupUJP4fKUF4wtvaTYtuMEn7mvA8rF5",
  "key15": "3PwJvzCxxdENpUqeRCBfQitJTT3FJwEhX1SeXYWS9Q34pc9ckaqM2NvPJokXS8VKFxMMzAo3vw1Sre9mKE6RYMwz",
  "key16": "xiLf3q1CkNHC8vAijqDLnCnxhVd93T4nYPirmrTiN3nZyUva6abWN7e2r38RqPEAptZDFJVpPq3Z5bcuLmnji4P",
  "key17": "65XxExtDy4SofxK4z3VNiUaJpPA9C5Lge6ca2Fzy4Er3rnq3gQm52qNyiEQvZgCbsGL2s8pGjaVyJkeUL4aDGY5",
  "key18": "2PXF3bMGKe3qWBicpBvtXeunQY8g7g92TL6WHqnWtHmw6cHKPP6nXuKCD8XRrpCjxL9Xg8CXZ8X68GXq1ezazY8s",
  "key19": "5ZkJ5dgJGhrE8EiSyKGfbi2NbU72kXmFzmo5Ljwi1QYxrkrAhPSQCSzag5wvhJTh6M1h3Sj4i79koXWpnK4q9brw",
  "key20": "4WKdYdpoFWukdutVGyP1vcjRxKEyTy78tfDAvfyy6uk62SnRPNZTYticCd56HW7svuEoSqJCTNWYncB8LzVZK5Qm",
  "key21": "5qwbx6TMpeRRywSEFjLU2ALk3wAzpNuSAvHLAoUcu8CiqFzpEQmB5Et1CyBC45KFaPnde3AbU23s8TDRE9nDups",
  "key22": "4fsomURxXoxTuxhqWSDMSq8TsTK9ajgp5bXfXTvcwE5f2pEaoYeuXiwYeB5megX9xgiJvct9GbgvrTJcEQnkdqGJ",
  "key23": "3eyxTyR5nxDyMTW6pmpbUE59VRU8n7W1RPvNrkCyw5yRB3TAYLwq2nB8R8iN9YQqDSFRbstYjgCpCBQLnb8MzUUz",
  "key24": "QgKFDTvMa5n7EfivUxM1TP6qeTaACEuZpDSvBFrM8XsyeJtkdt1HDStrTEiuwiW46ZFNvaStUXRLtrkRGr2x4LP",
  "key25": "MbqLaaNfJQLi8WRGx7zcPe3KVYSk2d2FfWvzcGVqWJk5WTrtE68cGBJdaT4ZQAh1dRCTqcjNcwAUay4eshBuBNY",
  "key26": "9zjQnKxqZmsveUbhdfhZJ3SKXrxBNySz9yVPJpdnrCHB9TVHPJNYz6GNCnPXU4G7yiyv51mgbJvhCKaJkxrjJPa",
  "key27": "2ANZojmk2Y7aUiH471yapiRV6Q98C3oFwqm6JUm7T77Af6QLfNcY3dioJpdwyKt29LMVAbETRLmA55mXkJiW7Q4T",
  "key28": "5P8hdpwfRpsWM9G1dDsFFVJCCtVYKxFEoXyFMKsb5wiRMb3rq1c2wCCWj3GKmLM1FvqHyRqMM58XYmAJ52JX1y33",
  "key29": "5nXzAGJG5EwsH8QMGSHPksN4Z5GwoTEzXMqvozaW7kPmb3spozuzj23jh3kjJRj74LRm4SE1ZAhdAsd1F98UJGF4",
  "key30": "23YH5LnPbqJXsEWppqSUKrCMAzbrMD4hrt3x1aZFFg5XNZRBaJ2zSAdrUbsxGwtLECp7ZPXMwxoVHrJA5BryAc68",
  "key31": "5e2tF47A3CUbSkwbPte2pFsyVjmVYdNgGLjTfXP3isjvpisZLDXSaUuQso2cBVDTA1Y3r61DEU76yUZvmH8hRvnP",
  "key32": "29aCzcUDNZ9YM8RvrF9iGwbzSSdz8esmFNQDhzAgkrjH4XmxKTHEvG8XzTNoDfoaZsJ7FQUDQGoe7bvBiHg2okjd",
  "key33": "5HiP4iKHTPALqnFNJXWbMbia2RNHX41DRaYRZBYCLSEVFqirRPLUWuQhDPr2BZZ4oBSgT7orLJpYZcXs2fs9vcLn",
  "key34": "2eieNgDAASEE5gkSqS3NGzhDzmNefiD5wCbd3en61M8z28UFAhFP9CFNRs9h2xKpHT9W5H42cPA5dj8YJKcTPgbw",
  "key35": "34cnBx1EKk39jcyn4r3Ts8mu2HUr2skNRJEkC8RULaijau2Dw8JZ9qnqAysB1AeqpvUkdreEcKBAokPpBHayPoAN",
  "key36": "5TVCSzsPcJaUHrYFoRNT9g1Rqa2xS3Qs7HFt3vJ6v9vsANTT6ttiUJLe7QzE7wkWwNGXHdZpy4Ahq9xQvqN51EaY",
  "key37": "2a8prdrtiJSYCRhQHjGj9sAaA3c1U2WjEFADRXDWBo7bTzGbmJawhQeyvBZo78erq9W66ZSo4GJ4Eh9mqSF66Cuk",
  "key38": "5T2a5Jm34FFByhQDgMdD9FztMMXhKfy5LwsP6zR4i1kTjQPrJqTYXXsMDiSkANrLR7Hqk3jzfc661h2rfp4kMR8F",
  "key39": "5XT97QcCsoSQJ2NwKZmvzHU3LQQz2cr8rnCFeAF2z3DkMUg22VLA66itT6wRSE8zw3wLa3aPvLfa16Z1YzxAZGV4",
  "key40": "5zjEx8zJNihsQ4eeeHETWuNLCZTK8ytVJfp7h27N7MdKL3GVHJ9iuMxbJj9CdwCN7bMgECYfGnc85VGj2gBkTPNV",
  "key41": "4KEJYLtRQzPAgFiBeRcuHhrjLT47ZXNivgGkierxf6W4uWQqMUeBgtHJNi4UB7GrrYkoSrUctt5GigqwtvWPni8L"
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
