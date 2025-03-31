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
    "5UDfuZR7gfLfWPpcezJydJPqzwwZ2inwgwkxKZETFVoGVccX57MvadjWoT6SjgbQFeQcLiotTq4GZdRiTgdTNRtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2roD2pDfkJdjo9AUWEz4ajFtNWWnAfpmUdXafGp5qsid2rz5CuRYgSWrP4fsVhQkGR2ejcVbUedg4VefPJxKj5zi",
  "key1": "3QULb5uPDs9p9GGsetqHnzPQSdHj7crgstfbKTmSFtTfz5T1A4CN9KoQLjMV6mzkrX1vW7ZyBFq5RZpKQov4jp5K",
  "key2": "4bWDdYiRq4EYqqcNK5otAYcRFqKvxUCJvQSBwRbLHjk13Li4ghdFz7tNJk8UXuByKRcY7NL2nXhE6rJnJcFwv2j1",
  "key3": "wcNvtiEUd6dVdx8QSvv52EX8i9ASRLU39H84yQyUxYpipQebpu866mUdn6XWHE8crei3zNekhh4TGWYHVjA1bHU",
  "key4": "4P8b9r4RC3xd36gScbQjUsw9rHhoCM8LyUnDrXD1YsPhkWWCJrPB57whWgXwCLogmWqXLFqM5Dk23vgnEuwoQ712",
  "key5": "5n9Lb9HnzcgQaMAvu74ccfqsFkZgt5xhJxqHo6QKFzusWNRL1opTckZoNtRTvHZeNaTwjAJjSY6a3FLaTpw3zNqz",
  "key6": "4acbezXUP2CYSmCTjMkdX9mzW1sg7hqdyDCCg1FDsn6i2vM2sp9vBYUZ7s44hJTerd4GYpQA7MDK6ZXnsT3AJUJH",
  "key7": "2x5KMdjFL7fBdDD7VfhQH6UUFWNtmpfTYvPsDZ9wXpYQN8jmZazDXLw5yqfWo9XDz7fcwTdFQPgqPFZZQabkwsDD",
  "key8": "3weTBCyBhCh8f41o3HbAzwAxg7fdZ6FesdXjoC7M5TXZyGBB2VfGfHwf5Sjs1m3Uibu5jUPYdf9F57SwC11wmGSf",
  "key9": "5V5mQt2vr5CLBxw322UDNJYdh8DnMqvWoDZMiXhFY8gvj29VDLLWaXqgPniSBFPyJRoPzkRxm1hTQ1KH4ycQjbJJ",
  "key10": "4raPjczfGkhjN11PdVJhkXrTT6gy8bAvFafTgcwLVVBUgMrtcXSKmiaxiQKszREwEG29qVP4SpTEJtSYKk721STd",
  "key11": "63hK3WSFhN6ES4L9rQgWbXfWnVnTR5wMuE4xQM4AGteRCCxZYnLGB6u2QKPgiEPUcSGjbwtTjHrzEbs4sMsNqBmL",
  "key12": "2z2QKMnU7TDpjf6agm8LC59tEshMDqaCuGgbz3KNTwZ59paQPRCWb6HoeKvedbTRLoQdHu8fizhXdmS99KtG8y3p",
  "key13": "hc1bWQvh8nN83UxdfCZm2A5Ck94RCgEwjcxyiUp3KxZSigEWhtHBv7yu9kHaBipZ6C67uVtQZNsjBExHePVu4zj",
  "key14": "2gfLjZxtt7bd7zpngnPFfNWoacc1CwtYwE7TNmBZVyjqDSvzw5ZfWNT2aXDcUCtmUfbQcoM94H6b5Tvj39bSSfiS",
  "key15": "4ZQ4txdfW7oY3sR7BMFjrG1URYxpHHM4ia6KpqWY3NJDq681i8B6ps3SsTNaCzccfy8LUnqyTBuZudkzdPXn9dcB",
  "key16": "2xrhTYJRgw3nDSTeSsihfSKR6F69XrbTqMi9Jxo9S86aN3nUoJTgMn9gepUHjLnLkcFPxn8fNN6mvHtu3ZQKuCZK",
  "key17": "5bYB5rnAw11idChKKbPwwdU3jctQHwRZgbYfK8u4DgfWYnsuqLxghLuWjrX7uJdq5GVcuRKmpcMu4SbSrisxPZ5e",
  "key18": "5DJwGM8HMZY1C4XSvqVQV8yPxgdb5CrzvMEcjZx5rdGWVC78v1xGHZEh9dvUxd1hM4ouzMmrZsd9qQYXCdcUbunH",
  "key19": "4V98s8WGCjwLC2CCtHuUFTf8voFFZLdhUyKji3xWaWq9TuTfHQPx7PGQeQDEEQNemzd9wDJsLxwgxGdA6dRqxuNi",
  "key20": "43p7ZS24A3KME4nxnTVcfHHxx5YRK4phMEaqdbP1rDVKTJ2ugwt2kYyrA4mnz9AwxE1ujqfPbwoQKGK5FFRHcNUE",
  "key21": "24yQzdaQRjibth3FwjZTHVdZzhEHnzUcfVWBUc2ozEa2x6pjS49qJ93KH5uzRkNxdMypk1VUf4dpcRJXB5FPDkEw",
  "key22": "4cTWkJqxuHVxuuQ97HCucF4MRXTorxvzmpHAjwiHXE6R6RTE2WmfFSjUJWJKYFJhkmszAGFywBojJj8gzy1mbx7q",
  "key23": "4tw8MB9ZAxPibWW3w4Hwe1XDpbCp1BGVeLLTUK4njy4LmJEuLmq7u2CbuW4iVaQbosE2fi7VgVzCceepmqRE9Jja",
  "key24": "56bErpyMyX19Ha1vX5RG9zjwN4K2DXYFufpGqTSdaLmCGCqBQzzBBS7JtM9gZYB5n9uoXDEsX3BUQy8rwk9PfrWu",
  "key25": "6S3h9pY15yHfjpHk8SSZopHrTYutB6p9qDLuvENfPgZYzESvadsJeWPYVoBpejAmUVM269b75cpLPtV9n8Aspe4",
  "key26": "4cXo5ApyFEXnjJoCR9jfeeGFudZFWUj4ijuvzGHx9FqEuuhEUmqs8EdZtnMtF5uYgKyHJtpRKS9fARZtuTXPfGJr",
  "key27": "jrDEKVUaoTZ5rxbY9eF76Gkth8AUK14yFLvnYX2XDBtkVUmZac11pgGbwm6UP1EizZnXL7tAwj8SLTMVS6VazE8",
  "key28": "5VDRa66Us2fCs3FV5b2r8nZyT93yn77hZY2MX7bP7gkCVvjoWxCjZ4s587ZfEC3uqFizYxLBhqsDSFaLv2RZE9Qa",
  "key29": "FebxAFRiDW6FcHXGSN5NDuwGEpSke1bM91mgreZorpKbG7wWawbm7L1naJ7ENaufq1e8rZgmgjJLRd4vrK54AJ1",
  "key30": "435DHXBNiRQmboNBSwc7gcBFMCtDyJMqbBobi9Xmbb56J76cUceYKm2CmjRtmoiTo7VWXqJsE3b8BqFQpCZR95Cu",
  "key31": "28Ada2H6ofMJPmJB8KEpF7HgFuAgiAyiK2CJ1gHXYpHuNUpayTFjSzXkmNQAtGCdJ6hZ9SNy5onLVWDhYGUHGfbR",
  "key32": "2Yy3DNVoqRmWHekQ6VdR9xGVDUNPWhj7NT1DMbbvrSxuiPgdLaD4MrUTp9hSMNCd57kkQtqkw5ioD9iovF89gcrk",
  "key33": "49ninSzDe9YNJuB5HCN5AW6BPD9acBMxvBpeZsy8poouXsx2BkW67WNVzTRmx6gdCZq9Zc44Tu9pUR7ZF3LCokVb"
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
