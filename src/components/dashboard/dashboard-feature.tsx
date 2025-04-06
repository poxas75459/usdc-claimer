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
    "qecQofeXGcVVvt5LGaxHSKjYx2P9rz9HweJs2anXo8oH9eTsWuLkx3FUjRwV9u6mS7YEd9d2xRxskevTtFb6TUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Cz54HdeaZ2zjLNJKoKGAABuRpiSv7VY4i3oiAdLh2uKfkhbj39px1uyQGqxJEnjogisezLdfBe7GpEy6BbHRbc",
  "key1": "24UimB3SpfA24hbWSJAUad8SgR9CYYBX1bcHjCjEQZfAHFLaV3UJvxq1BG8w1db2oy4QMSKifjU2zHnRjEW95caS",
  "key2": "2x5sqdfomYjCUjz7CCba6GDYts23oUgHcWZDU7pp7KdxcAt8mcgfMbH98CvpAYskwNURabZCkBEiEaqYxdQr2ehT",
  "key3": "67Sb38DAivR6cCYopDGS1sZqmLnY6Yt6u3dekMjtr4DFifzDtC9jnLaafB7UpJcLUhy7cwGFzptyHFMvHe8FcWJ1",
  "key4": "5mB547jbzJxzRnXS8uYD5XWEU8TfbB9U4epgUnwx7wd92cGQT6VxQyAC997cydZnAa1Kfa2zM54cZdYk1rHZp9rJ",
  "key5": "3PVBJV885AxYAkCq8xeB9ucZZ6joKJZEX7QRHeCvLUU8o4h7iFNiV8a85tMib5QTUVDMFFXmGmbVUHha5Dc5UL7g",
  "key6": "2UmHNfatg8d2dg4iyjkh8S5jdSMGFMr6ZiSpFRjNp4nUFF9bQrpByhG4YoquxaMUCUhaf8yDTYJrQ2tYadcpSgov",
  "key7": "ARJ9Z6jDLGq7PAa9zScJcw4ZiEaHk1rKtrf63eBa9zmZsaoDNU7JuFcxM1tXanN7WEpQRD4hE13WChikWtfX3rP",
  "key8": "3LSSyxXN7rUqzktfkky4k2ezEggzarzNNVotzNGfnEfwGVrkDFsGe5wCWpSHDVC11aJHf8bQxdq4juDKc4zxfCEz",
  "key9": "5ZFJxLWpw968z2Mko4oWNSTS2Te6kN8CD8St7JNwueEYP8pf5FrqBfBoWkCzNDD9R8g5tPBYYEkxjyX9VRpoStHm",
  "key10": "2D9aCH9wA7kvyPmH4vwN92VU9wJm9DSbDMgo51s8yyCtdYYsmsxGtEPL5oWFFwvAhu1yaChHjRdsVcxPwo3YKov4",
  "key11": "3uvNrQjcFhUsiEh51hEVAXym7kQxhPCHz3Z4QKrhUzqCpkgQkqsVQszfWaW8pULBMYvVadxbKDRd8g3DKWtsd4MX",
  "key12": "3bx4STVkguE6LGC9BeJk33kFhkL4Ab9PXGKN5mHtTh3WFbTYVCHtepiHxVKbiaVhJ9u8nFdxTjDduTgSiYtX9DFk",
  "key13": "42hQfJrbSHBw3egfmviCTS5SNQsJaPAHkSygCZKLuQJcL3NdcBfswQb4SvUacbjPVjzsibiGJcPbz64eGSNYnKde",
  "key14": "4bwU1XLVeKFBeVsetB4HapqT2FVbamvnhTM2DVqc1hz8MVmFqMN689ktDoK7coTVG1gpd2TUKSL1JgqZPPdJp6uy",
  "key15": "3jfZQrRj5MoPWZjmsYPohBx2D5KspLjHxyhnc3C1999Qw8z9pRKQExZLf6zu3wjPybdAJnAMB5TaP6qcgFitj5ZC",
  "key16": "4Zsy2PLRWqA2APWzwLTsHZygZnuhHL81FrWwxruyBpZ5VV6fTRp17XqAxxnsN97bq7DX73UcPEqdHAChzadCgcnh",
  "key17": "34sQ26FJYQUyFAQ88Yspj616L9yQkNrv3JYN6PyEGmUjonm9vRpYCukGLUdVMoUnbKwxVSjjx6djHkxkPuT1arji",
  "key18": "2rbyUcjCr9ZtNqgUs9LyiZveAQJEJSyysmdXg7uKyM3yAWGjzvF6cR67MXF9jDrC4NNKrbmC2QionWznzcc3NZhx",
  "key19": "5UXDLPyh238Kq8PwQ1g8c7p6a7YW2AQEeQP8qcEVQppvhgutfwVVc6qmnMsxWaf8exno82XVBpNmUepGbfWzdUKb",
  "key20": "5evcbdTdJAUqaiJN9YbhHeWFAsELKVHrMkreP41Upoa4avYq2HVasi3EBR6zAB2y2sMPL6jVkFDspDZy2Pg9kc6z",
  "key21": "3vSJmtZo5AXnwKLQnvK9fxk5AXRN43P68MNE66TrsL5LJiDpEUE1rLENDwESzMnLMdtSzAcPBudsRZuaWBev15xe",
  "key22": "4FSEGzTBksLaKy6LXqWJkAVGRobKYUEq4fLYFembTnsZK8qPtrX1BCDsrewNi9UViSHzCwiwvzyjtg72oyM8GZvG",
  "key23": "58mu6bHEfEdRZzr8STnxw4ANft2EpKdMxS8SR7SwrSLxZHVLEwDancheV2x36XtLvM9SP47HmTgVaiecy2LMXfTK",
  "key24": "5takYSYYs5cjfFsU9gHrx9es3jjYUuyt8xZWoDFSmT9xJ5rStdnwCY7us8BB6mnC5dQrg27vfhXHco8jQzwL7azf",
  "key25": "2pBT7m2NXGCVgTb2Jy4pAWegRfvWwBj6qRWf1S9X91d2E3zYcLJdCYVaCSVjkZBAN7zm8wBSC8dUSCqjoB1PGQWj",
  "key26": "38ZNt7uL5k9hioKDWP5RCqNFtp9VjPKWY29GuZjb4M3TKMH8iNhWiuDJVWvNAignWhTbAGDPLhncH748w6tRi71H",
  "key27": "2QMho6L1X9JWA5FZhtwKHmNNXspSDaaWVU9HqBz6b8wn7pgs3iVSJjfnbqop3PeQ3kTMmkyojdR3BYhgaw2Jmtq3",
  "key28": "5kh7a8dB45sYjWpRdUKXeKUeKz4vGRdZmp9ahPk7V1u2JBR34374hFRAiZ9Ue4ccV5ezwVrssdByVKesU8nMvc8q",
  "key29": "5naXrgmmsGocYj6ykGCNncnrjtuxKZujBcZ8v66j2gcqkeaTduHYuuitpkCvoGydcyFp2DD68m2u7csQhuQV7aRk",
  "key30": "2DVgEJ3JyzuLRiu24Ujo2KzczzFkCNfRXQGuj98iStwEx5XZC2SFVTJ1uVjgR9K3m2uLADFpZQEHgrAP7dso2nE",
  "key31": "4pkjEdGCePThbzSa9wSgLgN7Hpmydro9SmLMHvHiNUyUM9tjKqx2PnswcNRNMkRCqMJ2BCvgA8LoMDpMnDU8oRJz",
  "key32": "D3zk9BUY1vsaExoKVa3b3nPATZF9539tVD1V2K2PZaEWzWdeQz72YVTSKYhdBW5RTGU9uVMFp1sBgGjwBXCEDXf",
  "key33": "3UoJ4V4ja5cvpmym38ASnsqUvJRjBc8v1kepbijjQmZGf93fuiK8zWE6B7uSSFZrHUgjMXQUhMgjyB4qEWw6bswM",
  "key34": "5VvaJoVZq4uxTDi6VZR4dhFZJFu5ddw8qGZ4AqBjc6869ryrwfUkZQR2DT2M46oHtVXhTLKbMvKr7QH4Li4RYmr1",
  "key35": "2Ae8WPuZkeedWsBiBXq856c5G4ovCXMQoAWQpz9bcRjLYfePXPmX53ByvZ6qAUx4S8zNfPHa4c27dhYkCMyr1Mcd",
  "key36": "4f6tGmyB1hiinD6WnF2xD1yRUutfz9UCNHTAvqVtFeafA9d6wRSKZibc3phUX4kNkji2fbzSCYtuaqwDyZC3upRX",
  "key37": "4sBA8sj1K5ziJ3TiT5JiCd1mdxVWmCcstKdaQoKFWcACRYkGKHGqsf96LYMPC2egBu2fQLy94oz9NL414tDWKS4w"
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
