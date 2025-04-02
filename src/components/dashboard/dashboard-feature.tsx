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
    "3WmptfTbRQNeL9NgyfVqkKBHdEwyZQWQtGit1cUZ7XfBaro26H3ab39iPTCf4kbzMTdhNEarScmj97etU79mLna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxDv1iFAkpq1gMxchSdEjFXe2t9xyeMxd3u9Ds7Bn3eWXt9AovVtdfqp4gGRXhc5vZB3qUicEmd9vzmBA3aL4Au",
  "key1": "u4LEUSb48UJJy5zpoNrFhkfRFhYBkgwvqb7J52XckR5ndcmdkXwi68Uyx1a4VQLqZmeKDgkQfkHdeoknwLXJ4fV",
  "key2": "3gx2dbRLAi5G6MyiZ4UnaQW6AWG3auK8nRBY1sdANq8JPyVbBzrLbzCnu6wbu3uFpfFkGoaHL2gnVrRARRD8D3tJ",
  "key3": "7ZqXGJYhjX5gZVqvss5FBb2RGTKMhMpsEusFDt427bmfpLsDGQ4VUV9hDn1pzxWAMggmFKZGku4Ug7mAv76ajSK",
  "key4": "DyrYGhZVRaShGyzQeNbShXKGLZaW2MYKy9ZEhF3D7GQFoTp6wCNwD6tsrfuBqdFGzHf4XNRUNv5deg8mMykVxGX",
  "key5": "2CokZTSW5khDER5GaaFwTY5yB8NkSgCKivQJdFizaxdx2HX3fFkKGfEzPwf4KdSkQK3i3ZDB8dA4NBtFvXYyjsbh",
  "key6": "4zYNp1y8oxKsZnpruo3FMtUoZJ9gLVYj6nsd8hxTK2UfxKZP94gFPATCv2qnuTNDGcUwpz5qwncqgMWreHwL3U8C",
  "key7": "2XjKmGyf6FUmtKLYdYsYL4qutm7RwiehHYUei4WpseyxV5ZrBs82vKeCMNBrPDUjsfhPvKJyjH5Ry3jzaCkuQkiF",
  "key8": "493EWVJuZrEm1cP2ZVkCA4hBZBadHJ2Cqf5mPgJbrz1NHh2zqF6ByF65Ko4y2yNiA7hCA1UKTBrkNGvkjVsxBPmq",
  "key9": "5vs2j7zg1KLkejsSjtv6cMn59EvVp8qPwgKGbADoiEU2C9f3eTy3gjG5Q3S64Ad2edf68CBWfVMrwFcCyr3TPU8V",
  "key10": "54DHapGLCKKFVGTft75jF7MRNLbxqwu7i45Sb3YK9YYDGw8g4gobLVuuHFNQwqPTrUgX76noALM1H3Q51GmJ6tNV",
  "key11": "wVRvXmSmNNgZmqxqaXKR32MpPBs5obxVxJoQSXdfnrJ9upPihanierK7ZdHYZqN5Aya6wKGMB6Hi36zPUR8MXqf",
  "key12": "5dr9QehWKj5uAqUscoqVV9ReG4R2Lx6ewsYNdYNBZZ4eCNvdfbj2adKcYc5P5rwFcJckisZd3cYZsfG85MttZ9GV",
  "key13": "3jkTxybo2MG3wM9KHyeJRsm98GgqbWVmRejZsmGZ7MAHW9E3qzKRkfK2bnomSbU9MD46x5i88Gz7kpwGEZoKqoiP",
  "key14": "4csLjrdu31Hr7wrZCiQRaQxHJetf3pZrXvSpbzid77QuxgViBzr29iPAUniMkyVZfPYAJSXgGv24Vs5qqbLPHZAh",
  "key15": "2WYUHChASh9pGFEExfFkNd4ywxBYaoQndSyzb7Wr8bnbUu8vUWgMGoBZXHekKBnDbvXuiFm9R1n97wtd9Az1SMsh",
  "key16": "5wGECaoRUtMEM9L9ZjHq6gnmW9XD9nQXxiS1x3QGWB3AY9HKjZEufTgiafCRowLwmbZoRNp9LxCNyw2HyuSovz3N",
  "key17": "2kHKQ2ejaBoFje93Tv6L9tgGHsYBzPf8bfNQ3331Y3Fq1Y6frUpYSmmh7FFEJHXiLXSUb3UFaKzGCCRhiu6yTok2",
  "key18": "swXH6cHU17iH3XJvwvkQPi2ZNGeQZu39PvADZFpFtumAzubDkQNX1kKxHb83WssJ9nrToXxXr4qWGgvZmpPFpDP",
  "key19": "2MV2vALCw49XXaP6XNUfotyt3C29CaDMsL6LT4akRQFuqAmJMpjjcZ3xJ893Tfmdpm7XuzPrhhwZ8JECQMq39neR",
  "key20": "3iXjtjVC4PwdM8MQWMcMybs81FKNxtyujADc2VL8prWqdtQGUTV8zEN8FJRjXQ9MiQEUi4hPWmRtgo97HkceNzja",
  "key21": "4cgGBPraYZPUjZeZ3VhQ8Ydc6B469zLq2umEg4HYeioGtP3u1gFDENfYe3GQ3qtCLnEhqGu9zR6LiKSjKWPfvgUv",
  "key22": "44a1NV6XryR6iiCy7uN6FNdN7U9FidfS9yJtxMwiN6a74vuh31QsmVQmXKipr9NXCLesBbmVDMpJc36YJF9qkz6M",
  "key23": "65cYpgaW6JhhLu4VcsXVAsWiMT1pGBUfQLtKcLjuCk1A5F57wyq8EYPwVPmYeNvcUjjcQ7nVBDeyfwQB2QfFBFAk",
  "key24": "56wq7GT4utZkLwRnfQfrJZKsm6XEoxNPe9xpLiCbDxq63jPAxFoiyFhYW1SgapRy8eoEe71ShF2zxsiJfHSmxFW3",
  "key25": "49yV4ad5r3rjgSvbjnG1vBJZx4fh4dpVcq2YnSduE8ZfKp8kUBD82aDZRgLB7KocAUBoy9akFcXV4SjpuXAi621H",
  "key26": "fqxSnPKs4mABLmZnUy6UKTiEHjmAMQMBFjEhT2v4gRyVJmaHc3KtHrmeXdrVvhL4QgwwyAQ41vqPW15cZAPcyBq",
  "key27": "4jnpUKmaJCVe5Mj1JAirAmEeMJV8GSXd32DKkhcjFaJF5otUZXCjxJEgF71ZyFnv2FJWzxDorsKbhDm9ptCVnDBD",
  "key28": "4ZcVUJWimrB5z5xzCe4KW4sBbmXn2CTcZZBgbw3fygshJN2fMGZRvXyvWnS45nAq6mKBdih6SMpDghmGkJTgSJDq",
  "key29": "MjH4KUUup2L8GpRrQMsQdKcrUYJ2LHUaSRyCkghZ67nmHstsoiQ8APGEZjU8LXRdGdV2SX4XNHoVXG9aQYZ41ze",
  "key30": "3PuVGGgMxrQZ3U9knokpC1f73yaie7aGMQuTZLzTm2RR7JruThFaqH4FJarADYWmVvG3hAa9GuXwEAwhp3wgT8gM"
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
