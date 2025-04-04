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
    "6VEQRfN76NcJnEKYZ6c1ZoGAyZmSB6zYF6drmrFheqfmWgAG9iYqExsFmTE5BLmgUptKYus3sTuHXBw5Shwr2hQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o5AyycrejP16ieT2Rot6DGKxxSzCKqLf9DahXFFyQ9eZ9i9CJmii2uStfoLhDZoEB4sP53Dn1FRCEuhkg3MRf9B",
  "key1": "5y7LJT3UdEYTQBowZrGB2stBdMAukfsx6HbLNyYZrE8SYrn5immjXgCV86m8tH5YPphDDcb7eBmtxdrFZ3KyCtbR",
  "key2": "4tDxJQatkxvimanWgnCDx55yAHzEkcoGyXV5akiJ2jiGrxu6SwawPg1N8TyfFsdfTSkztxt72krCvN7JLQAPoaCB",
  "key3": "fA6vyDjjYy4eWYgJaM6EVG5TnmNcwdYUau53Zus9CARCi174ucV4TiQXa14pAAvnbZ6eY6aAYe5okeJ74xo5avx",
  "key4": "39BrhdpCr7ady19TvvoDF2dUisEzUNuTjFZpoFdVx1X657BSoGj765b7NX7cHmHbp3QMFqv8PkTiR1mAXu93tJnF",
  "key5": "2GCapn8Cy4SZqpA7NVjcuMwW2dMmNmDsF8n72ZwNAXGR2SVvNV3FjftGRNYy1kLoTMt5HYddcXoQ3BKoAiBBMCVg",
  "key6": "5Gq7SzV74Mgesf4qqovk53TXgaBKSTzUCbgsZ7Dr3DHWYv7zjf1vqXBTMQufizFJTxcFgez4AnZADQe6AYnJnUdN",
  "key7": "4YY2iDJmdf2PmdBQgdDXPpvzMhPjx6DSj6u8GsAA2V8CLsdNaiAUutXYJLqmcTPZRRAHYW88vEGet3AdCUrqVJfo",
  "key8": "67j13TL9suHggeNpx1seSnu6nnU5vJJFhCeyw7cny7YjsZXnxPkuxHvtZufzMfoLHBRuNfHRoGAx2pL1HmBH8ktk",
  "key9": "3KhTh6pm9AduAtgxuuJb7xq1J6S1f8MteDAfy67csFBBnM6u6NywAxv4szRkuTnGHoerbXEyts9hb8zHFuJe9pLC",
  "key10": "4XuCbEhW7RK1RjCD5qdMBo23GgH8PrNwgXQdEuvTHVJiZczbJ7J6ayxPyojCsFwHdJQH7FC96SYTJ4kRLvT7Bbgj",
  "key11": "2RWp1ztkFMe3hechnhXrV1uaRY4iM3s3ZNSsinRkbMFyJe2uAvZr6stfo2XCU8pLBAb96pD5BDTrpzMtgGCyivxx",
  "key12": "4CLg9XBdbZ29w8y24dVQ3bHsVgzNCrGj2bUwFBvh7n3JoL8TMgqdzVB5pitJynmCjLwZY2jLk6mLqq7QF9s2q8KZ",
  "key13": "5kAopfedidfriE7udWQrLdAnXiG1LAh5P6G1RnR7pdTXkjQCA3DrjdGmuQxRj6STchY4o8ZdwxEji1pinrFKDcPF",
  "key14": "epTtnxv7fZjedARBYy3s5WvF4fuEZoGbHBfNnRNhExSWBw7Mpegoy6mQ9VUXeL1pCYA7yziSDZrzLy2tADphTqZ",
  "key15": "3A3KLn6FFKasysdqyTvw7waiNvAKuGURLTcZ9RVkn6c64pErR19eGhuBqxBr1nD1EetGRC3Rpr7ZW6h77MJkh2KC",
  "key16": "2hcCfxtSDnwfmvZh2bQK6CqZa44cRLYYnhQpPdsJWAP57ezYEDCB7oYxzn9DTvwyfzcnrBDG8YDqcFAn3gfFgSCo",
  "key17": "26G3PFcxsc66VqgFaQP2dD6GyCYomhZSUgSWRxgbYYih85uVZc34jvF9mwUHrjnyxjDSF5asPiUNJKeWGC6MSkxR",
  "key18": "5WULHh41k7jUx6aNEgSVk3K3reeE5pAsDpUMYwaCAUvA6u8P3BKTGHX6TC4xT4fVBqk6JfHAGBjVBhH8b67gzzkZ",
  "key19": "4gQg7KNXFiXo6jWHtRZNr4mGzigfKX2THvshEsa6JfcdrHusjt27BzAxuwARFfLAjr2wqNNm6RQLfvHhWxQn1t4N",
  "key20": "2F7LickBQurKH632BjrBiPtYNN4nnMbqyzig9fEfYZUJyvWAFtLaJjPdhePNFzbS6Sceqfd9sga6izNmN1w7mZky",
  "key21": "5qU6cQw9ufVxt8Xj1Sj8fzX5Xyztniy2mj3MbJxXnNqXyFT9Qi99t3yr2G6svoCH3tSBrdPSPoqS7J8JkSD2dzkG",
  "key22": "2UeJwmbZBfdzCD7zp5Uj7fdcrKAQ7GtBfFiQUBDQ2xCtBSRu7RTjQRJm9wSwkLDssYK3gYXKSHedMLarCGbCCYWk",
  "key23": "3273pMUY79ucwYebHX8emhzaaZTJ1KxgFJMm8khezb3KtULqd8n9XuRjQp8EXLwEaDQGgqYy1uhtGzgzhdFeqvbS",
  "key24": "53P28vHqMFwWPJCiyKyqWBNjLQFsHKMaofxvsqgFi1tn2eyecMTeEN7V4anWCk1neHtRWs7MU7N8sgjQAHkRchus",
  "key25": "oBYbdjApmHtTaiHv4oGmaYh48UQ4jSPs9Mgh1JnF9b2CUswZrde1k3J8HKsRsvodygfsw5u6rmc6tuXfFugnm3c",
  "key26": "Rdx6ECdYjZ4jLFGizveCtQcRX1rjZ8MF9gTXxp2NosvbPTX7FQqYRWXVrX6969NnaXesdsAG9Pf4GWfcQhxy8UZ",
  "key27": "kybweeA2ZhVV9DVzmkwx5nNHs7jqAuyXzeHzYC2zC5kCH5BYka4JQL8JkQ1dtWVCMDNhNPpteGL5m5fd1ZLRUTb",
  "key28": "4Zfn2rNU6PcoARyPMVYPBCmvBYjXZM8GJRcqwXqoUYDEU1qAADYWWz3DfbjMnWGoXQjAhSZQvbjznodjXx8htvwW",
  "key29": "318Qyqu2kyAv52gevruTaaieEJxqBwmA5h136o8mYHkphXuDQwrHSCrW2BBbskkyEUA3E2kFbTeEVpDaLPFHEDbo",
  "key30": "38qjddu5g221Xce6Wa3E6NQWVh75LphJjAU7CGGfgthWwLbXywVuFvkNc85wzK7vdC5u7mXjStWogyXf5uQL8Awp",
  "key31": "4WbCgEWaHMw1XFz5nGa8aRYAP9KLCUXQqx5e2j8p7SknQ7gniQ4zMMNcjGgC3RAHLU5xbcymekiPaKoHV6J8Bs1q",
  "key32": "5V9iHb9K8hGYjKSZ8inch2Za3sKJL31MTJGMBa274EY9h95BtRjgnweR2vjtYbPKzdcm17uQ2DTELaZUeA7e7jRM",
  "key33": "4AFSCL58Vyjp5MhyT1mJeAQVKLRNwNCaCuxCPCwQVJyw2vDgQgx579PuPyQU9GNVxdRXR1XjuzWziyVSNyFJnQoP",
  "key34": "d7sHBjk7tpmyHLq1hRNxHgsWVaCJvkbJduxnemPs4KtSYaZZNzoTXX7EvSqxqYVgSBsmR4AyuqLMwiLPoxBC2kX",
  "key35": "3Pg3RSqhWJczBEqSFxio7Xky6Cgk5Vik4sPB6M9yHZe5XkZqWMJeVvAGfwZ4UJzw9ufh99HTMBYFaYJoY1ioM8Ln",
  "key36": "7GDc9aog1wTXwdorLNvVfyn3WyxTEDbvNyYcY9SGTHpu2Wy9bjMA6KkszXw4jejWCTrrcTPoXkErKcfNBCq8A4k",
  "key37": "qS57Sf32sR9VpmKkUXMDc3SpkWzE5UJGc63cwmNvFv26WAxWUcsCYPoPDgzu2BQ8wkkHAbLZDF3fFsJby5kKjtR",
  "key38": "G3oWj6T5CmFAHsBAfy6VYNjZyYxEueqWQzZAfFbAjvdN19XvjAbt1zA1a3ZbGnBLYGvV9Yaa6cRgMQF5jk98r3M",
  "key39": "5bjkb3SuakZRQBaZbgxohm7ThAJ6cvRVCbmnJvFtdDw2rEFQZPC35V55uiVoeMtV3B4fvfznnjVYMAqWn5q4En6R",
  "key40": "4276aPMkUMkrprVyJna4RG6ojsQz7VBeobYLHSUe82VsL8GiKhTBosmMekgxsCrS1kAeGFhQkM6nmYXVj4Uv5BfP",
  "key41": "49BJHNkUFtEjL9CAWnp4tqykon7sfp7r8HCLC9ANF4ugRraDC35rMx3AF1tWEZPgq7d7r85XSJyKSSVVymhiQs4g",
  "key42": "4r7WwtyVjmnhJt3EU4yB7dHp8Px6ppCga7jkKsBDQfCDRyHQApz96ZosWUeZhdSkwMU6gUDsh2L4dv3NjDJaDAJJ",
  "key43": "2mHAMNCQivL19m6hRpg4Qfs7LoqywUQkJyVubf7dJrTGkP9WuJ713eNcCovFr88pCfQjhEhYcC9QCNvQbAuXJnUR",
  "key44": "4qppqkiDmRepu5D7iQAbjkFpLkDwxMpxNXhQ8eXKWkG6Jmb8wZiA5HZMDmhTLj32vo3mec331nGtjyJnxCb6nDiL",
  "key45": "ch1NwQMr6zsLd5t8q7EDagn5opYkFjGLqkip6Uq4xHoUjfLaAs7qzPvaUijkUqxguFtn2A41pxfwHAupnmWzonv",
  "key46": "44SjZNuzbmsM4PKFAdqnXmMCMMaDuVgwPGGX3uqXfaithNre6tb6jLugR3SveDMDfTBiF537wsQCBbNjkYX1Cvji",
  "key47": "QkFuMxodeFrSqCTKQ9rvaQWCMK5E6ZD3ApDujFPLpTQfvyPzQjmt99qhFj1tudTKQHZRWCeL3RD9LkjzjPfn4o2",
  "key48": "5XAn647RCKAwu7GyU5eTQ5vVXeDAFeUCGddqb7UWmqpedYuwnTszhBhY25TnmiUD8axK92wNPCPgEpgCRFnxaMmU"
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
