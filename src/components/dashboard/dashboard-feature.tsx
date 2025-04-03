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
    "hjLG75taRexu5u679F4UcRB2eA5Ep98PNcGyccYZjRudRRufLhwzc567kX7YMvXY2c4bFpwcnRSEmoqsMyh2Gkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38n44Eq2kr1oRnawMVa9PSdR7vMzC3KKa4wymX1Gf68xcdEiKFY5bXMZdRkVhiNmgEzmdGTVLqbTHNYzD4dcA9xb",
  "key1": "a58PiwfDByoJXLzY8A5Us7iZXXFV8ivZx3nM9uUKCnvdLM9rX3q6KPQ3a8W9MKGgcnG7sGU8nLwMnLYs6sBPKyG",
  "key2": "31yHrnXgLYKwZrMvrDmADm5KXtUSrYJ9Qaya8RiGaUANDcXCFiEjC3i2iuhQHuuVyGdr4fVSTFn6LXfVFWy6m2sU",
  "key3": "2HbK61NihWA2dC7HTFECkjcyf2mAE4TuQFfAT3wPV28bYjwXHjcB88Qyz3sE1So7nCdcVBymkTNrL8uqrrsUuwx8",
  "key4": "zUsUeYcAPEjbteTW8bNjsdQFJFswEat3iMbiwTUYpFF9A29ySUfPKzj2qR4WbE2BPRiqLEvX2U2ZuKTYNyABKHc",
  "key5": "1bTVmBshE1ecsdmt51BpuAxEn448xZ76VRvYqk9tGHZUdDknGXggA46jt9SeTbr7CxwmfTfatGaRe42hDMejwWm",
  "key6": "3enNpZMLNEjAFe7bvB7tm3jqX4PHV15JjKkNxgWzaq1EhyBkN7uL8bjehEtfsFKo8j81XMYFkzmiieWwAt8NQ4D4",
  "key7": "5XeyqdxhBZuJqAQVg1zbh5uRhVXauh98ERnpQ6U4fgM79pGeXqKGG8z21CoAPnc6ZvKR2KMXwLRUUbX2BEdaKEwK",
  "key8": "YwxKURXiNCHB8MncqmJKQK1W1ow9aCrq8t3Wmk8H3TUN7UCzDWyyfNAVwYWfVdiJ4uwYnJgi2oHeH6BCkhopNfJ",
  "key9": "5DqJPDhNA1raQRpW2vgG9trwTzz27iBz7xFEXWGt3wWYqM3Fr4Qz5NpWvkbmw8Lg4BagY56ZtMWMdYUdvkHB3f8n",
  "key10": "5ebzsky5wbQgkEwrbqpqiLcCxdPN3DyPWhLKStWKXqqD6uikmYbCpFD34jsSSNYt8woUvkLR9pz7jhmqwX2UpFau",
  "key11": "5MEAq3QkEed4pxFcmrzMwQCn86zXMUBGkuvL2ahL28tr9Zw9Bscx6LGmV3zhgxgtk3ma3FW6Cj6ribZDi1ydUMNj",
  "key12": "3BWPY3AJxSHySAiLwsPU488WSzzkueM3FKDdpadA9nZ7Zb4jfCcat8KNP32k6JBHgS2UJfvp7MXt3szf765TZWCn",
  "key13": "GHobqCa3Pn4V9WyLyvZUyaNK1Zscb9cAN3PmLT9fv5yxtX7EhdvqGfZrhDqYjfy63X553JJBgQ22UyxEtiJz3WN",
  "key14": "2sG7WPqRvt5tDTDyiTsTP8BHGwrdWBCwPgw466wsVMvJR913QpJpSy7J1qDVag5kD85djc7ByocPGhZUyKtJ354u",
  "key15": "32pZ4N3kbWqw8LgzK56y52zxfeMsGKEiqtxAtVfJcXzrtQdxwiMa9Swfp5Jjhy1WQewRcC8wYeaKZRnfm55KQ5Pd",
  "key16": "3GEKTRFoZfbQRVGpFxKJDRb35gY4sv6SzTD7H7VigYNzysJFbbbC9pMRvsBnuhVHBiTyryDEGbGrNiU8sPddstBg",
  "key17": "3dxXnJXyarYRaMkaHPJye8NLqKxXnwZ6Fo4h57NoF1QyuwCZjXzGK57AjASKKUDMufJJFmyae3Q3R9YQKYZfmpqR",
  "key18": "2ATww4tZbn3R2DhSAq3YrTtAiJfxvMrCVLG1AfkfSA6QM5Xr3cHfK5Ckjrx9ShzCw8ZdwwkYjmvqm6sRHFyFs2u9",
  "key19": "3DRawdUdG9fZ8pcuMP6PTZ8LZzM91j3JeSS7WZVaEJpuLKvYQperDkrzx8npxyPcZVCgTEmaLrpCer1dpX3diU3C",
  "key20": "3vp4iuxbQY8ziQWB6vocfebWa5kxp3cyfbozwy5op6tSyXCQRZ72akyCkUKMu6fnVGF43axDQreuVgAtgZUFsW9M",
  "key21": "44NM4NC9zAaCgz2JCwGqj3RgJgLfbUJEKswkfoL9AyXTyUTx8o3PQ9bdmZ16MgVzBiBMN8NrGuJw7Pbgz8XPhpNj",
  "key22": "35A6YBPapXDCdGgvfMc77Lc4wdcqUGWLAe4JqtAquNjkENPZUGrXHwfacjMgZSueS3Y1KgvW6L96p1Tmmyr8jnXu",
  "key23": "2GGrsHf5DZfXSZiE99QVWH9DFSJc3LPUoybhJoRgvjhvDaJGjqm522iPa5k9FktyrhjPi2SUbhxCJypt6YjjRHpc",
  "key24": "4UR8kiXMNAbwt8Zfd7EfTAZVMpUMtfMqbWuGFEJ6Q7PaX7FynsWYNMnZpXrKLjNSVeo6QqknjT3WH7ermRGXcDEf",
  "key25": "4HjjJXjmby9fBEDfuPJpUNpNH3g7hz3ehaTqTi5EUzQ6VKRCBm8asnZNndtPJvqMtC2Sc3fVkG6g5Tx6RNyAMMiu",
  "key26": "4EwMzE72nAasS5oq6Fr3WMAN4jPNhkmggx5jYZD2UrDU2iQTDJZWWekXhY1oJfKhUNHCm9u6Qv99UZRahNNPSyfQ",
  "key27": "4Bd1KDZHaHK2BFuFivUB9i8XkKuqMS1FrvrgYxMrYBwMkRXXvLrPgmQD9ZUZQX428SHG1eAHTBqEMMoLFtM8UYPy",
  "key28": "2n7LaFQnRgZN7uhGAt41ghqXkGuUmGJ8ccQT3z3nigbt2YF7WU3cM9Xo4viEsVsmrW1TMNGzRHJKmQR9d1M3qY4Y",
  "key29": "3N7VHZr4eznbydi7x6f9aaKGkkpzwTVnKrwS4HXxPgXvi2CLi3vs5UfAKf4EU6wmDhrJpbaAXwyYnL22EYT1hQUj",
  "key30": "5KHGg22xBHcnuZnHwRfy1mvqmQMrSQyyirCEUZ54KpJn84mVt6Cb94dTAwLx9FgNYkESVeLnmAA9utTcgZFtRgrb",
  "key31": "4pDrH4Y7kjBC95UZGgQBhrMqTuXUvLPeYcRzLhNxGvWDucbezpiuacMnPHKLb8b6SGpsw2y39Kr3DW1KuHW856NR",
  "key32": "4NVUM4jHjkKvrgCDeQ3o1T8m1X5tRUR1Rdgj5RigEB6UbJ1FV3SSiSkn8VJXSCvv1a1hR3aUhYjuHUdEdPt65i7c",
  "key33": "2wzNEXS1fjh48r3FG2nSP5vtsUPnekdi8LYK47raYa3TPQ5VMU7qUbCmjpZNzKgrqmoRfoo52Jp8WZuDUFSpuXGa",
  "key34": "QSgwoGFu6iE3PKkg6JPnNZWqjECkRBbtjxUTSdFBwSwKUAZ1aHnwywpsjTq3pUfFXRZNhrNF5v5m6JjjcE9Txqc",
  "key35": "4kpwCsfQHsDssr8Kayz4GGKL4XBoKJFnznQFizWC7rtAkCyHvmUp4LMKPFKQcKmtwzURPtKe3d33BYdYRXxEHJo7",
  "key36": "kEJwowLk1PCnDrCPQpNJYdZr7VbvUDRiTSsrR7Y5DaXLVcqAdBmQpd7gK6YY4doJAB1967CEh4g1Tjx8HJcvh3u",
  "key37": "4kj8GKteVVC4zkM3eg7bQHEqjU4J6PKCzoQPojk6D2UbbBZC6WPEhf6MfwUCepgkap6ykVM7d25vzQV1bkbeq2zV",
  "key38": "bq7QHMNekkbsbXYCe6LhFqhdEjT8aRxoMJvk4uKrX85fd6FT7tujNpNZyRYkXmHUrWpiiZzp3yG9TgTWUuqFEyW",
  "key39": "ukJPRbL2we9Ss5ZEdd88qxrkNr3jBYD7D3Azbqzg5RpPLxunzEqThhBRXNUd4rbka4DRBqJ3VEc1NoCjKa5Npvi"
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
