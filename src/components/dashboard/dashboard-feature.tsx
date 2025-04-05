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
    "36HunCVrH3M2TcjG4JtepoxNHzuEHm1XKxx2Xm9P75hgic4GcD6MjVGNCwnEiad7ktBD1kATFnMkcisToHTfj7dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31rTRyq3gW4yH2yS5Eu2JdCR15PML9coeXGr88UzNh8rKP1g97a7SgdKo1YmDvNRsxMMy8QmyvLNdyrjWH8J3hRG",
  "key1": "3j5LLnTjaw9XrLzhn4Uyh5fMKthpUAMqQNLGD9BKX4mzUos3s3tDU8GL5WkAai1AzEoCC1JHL5DpCi5niYbkQGLF",
  "key2": "5yXT6hqN47hgWCgqJb19C8yVG3ZkiDWzDKAdxuCFgQ44J9qYtngh8oerASCekHnRFpjKtAC77pD7KP8QWMM6muwE",
  "key3": "3buGUmP6dU8FqJm1ob94fSDeRBgkt9WFJpcjxxhi5miwgifja5w6JcD1BCmrVt4V1kfSBv9HQ9pyy8XJbHDM4uvF",
  "key4": "buVXeEiP5hGXZJvakV2cevSa97idLwBgufd5VDDQxqfMpLkZgZu2WBVHiHssDRBBB1jnFwiZfSjhSMEnwmpgr2e",
  "key5": "4YMeAiortAEUYncjedjA35PPMdwY2b9LkhQyHPWEfQdMKGJYaiQs38mhGmUb8tPBzhKZEZgphQxgnATY2iw13puZ",
  "key6": "6497VpAe3XZnqr3ka9KD5V6C5m3W9fj8t3TNvRnJ7PBiUpyrRGAdSv2JKk1oeAgNiKU6oEV7XD1mXAkVzsn4RABh",
  "key7": "4iJtk8AXhTWLb3X2cURrtvxGUA5ZZkdoGVXEfQBqbFJQCWGcvFc22MTdqEyRM59E4xk6x1BVKNo5RcqamFqqRLW5",
  "key8": "5JTo8HDeEDgUmVu7jUeSBEXXEDttzitHAeqEhMBtS7j7NqD42rwvK4b3ZNPXtnAcWAzKbmSiCsh3WjYddgqYMfys",
  "key9": "yMhFvKoUv6V5mqgtzH1cPSiaahYccuhLJFKS3HTyQ8G2wdsgkRuwJuxUdkLKK6YSZA2Cm9UTrhANud6CmGc8Mv9",
  "key10": "2anrEic9a9PCkQK5E8j91dbvGnisS3MxCGbMxgFsRvHa18BGNXFZ5aNmcSNCepU9nH9udN8H992yRgdKYFoH8qNU",
  "key11": "2zyua1HYgdvXg3hRRreSdc4YZ3SK6gxC57VcUVvXqQ6m8TPGjjFYbpTbtqjxQ2pxkshGNnf2ERrmgx75VkS7yccm",
  "key12": "keHFxYVETJLbhsdUErhRJWH7ZZ664CzfNTmnPhP5atsA95fq4azu57XvkMz2x7V3TRc7eYFAhW27x1dgwsLUnsz",
  "key13": "3gvHro7FdgAMVt5zHP9aFYpjz1HMB36zbhiTyD8iwJsMZXA8K5ZP3Gw7Ssdp1xe265FifBY2Vex8jNKgqES7GYim",
  "key14": "5yLMgdwbpcL7rj31raz4Jj4thMneD3p2BAf3wscMJSVKc6QQmaoNgG5NqsGB2btXhWL4Jq6wX1KG27kfYY5GKhTy",
  "key15": "XVHTMfyBY5WdgFMsGh49LFyDWhGtC32DwmWZS64D2H4X9uhyUVPxqmTUG52BkvSD2g5YFLvQUfqvVFoShuFeKUa",
  "key16": "2SVSDGzsLUQTtZMzToMdb2DmN7QrpN3UeRBEvkoY3qyszqevbW7KeTnajPYtLgV4T982niUr6NpEGodKz3jE7xrY",
  "key17": "4HQxDPQW9SjtW3ghLi5MjHhXnWDL5oZygqTXjLQHha89QUTRWJstXMBYcVdShckPNHjMbk6SgLPxsznJ19deiqDg",
  "key18": "2ots3tmgygoHFdpj5fZmNXzZQcSRBHoxnxsK2og2dCJjBuKo4q1iuHkkVJ4dAZNXk9w841F8YXdGpvgeFNaaAJeC",
  "key19": "GDebu9yFADvSLxoC5sgPR9cgbK7CyM8VimaNFrCsiHnzfDLSkT6buVWe5T58Rjhv9hwiJSy2CNjL2fV9rrUgkWn",
  "key20": "5Y5cgXP3PgJdgeue3hvV6vw6Ff9Cbb5BMDyDSJ2gkNsemxec1kQnywR7SXoPU4GXUonLnYrMxBUwL8essvxe4qHh",
  "key21": "UKaa7gMbJse4tikSm9VtczSqEPdjpRMNo3V9vxRi9Q7LWskHeK9drJTVhcRt88vzsGUZekyEqfyUenq9uphzfDx",
  "key22": "AEtTRuCtX7gCpNBEzHkwpVbCXhgua6u6gj6JRh6LpAAiZnbe5pVy7HZs4om7j7ZeWHyxCWNshtye9LYtEefnhb6",
  "key23": "2WWCm4BWSzFcBEYsjzxXQDaGKzaczmvBgE9LmAF9A34rCo6joc5LHjGL9Ft2YjkAs6KnfS9tdSrPUMkWuVeizYSm",
  "key24": "41YzXumyCymo5qcMA6NY3aSG5YXRdyirZsNm3q67Qdk3jkybqNGE9GcsooVABMyodYztts8ZS49Ep9wpUrKzascQ",
  "key25": "ShQnATGvgVSHN9ZGtfUHaR6SthZepc8SxivWzf1ixqZTU3BncPQq956iP9BAYXRgSXV9umYTor9PgciQv194vUG",
  "key26": "4Jr9aYQKRp9KPFQ4SoM9e7qp4K54RprYqE8r2FZH7MwGgt3fSn7Ydp2JcBjNKmQ245Eq3TN8vPPbiaQDeAEfNcsS",
  "key27": "2Xmxo3Pbh2MkMas3d3jYDrhmYZtFtHMiwYjGNttxNqiVZny9fUzZXLSJrZMvjR9j9zquxEjWc379JyEVKHRRSWrK",
  "key28": "51HsU2jMMZBUswYovfZttoRXFzX7V19EJphhdh89tTkqsvuNeCk12ZoAXEzHm4oRw5Vo2WkPhRf3C5XWfU2MyAh5",
  "key29": "4yKTBMpZq6tp1eimswLpJS73VtqGSmoXVKPCF5EhCfPetM4zYXeTNZDfwsVkTAX4s63wt1pC1ZkSFWZuXJc2CbCX",
  "key30": "DAY4DSXSbY8AkGNwphWj1Zv3ptcntmorzg3sRPkttU5EscSJoszYbdBeGFVLhKLjSow5ojzeJxy9rL3CatJivsE",
  "key31": "5sfVFYa2p2MXZx2yL95TFN6v4KGFgLJxcZ3jHxw8UGxYAS2j1kgsCu1S2Paf8n4RVu6cqybKD4aL7tXo9NdgEXbq",
  "key32": "4vonnK2MwW7XTrQ9jvnqMucxFCdepjNYRTGGYYf8g1ybJwR4ALZQwaJEbPgXoxPGQgVLGSiovRmFNrYBPAngh2pq",
  "key33": "5VzZj3hCJDnuvUTGw2hYgNQcE5tVYaKDGYs3Bp6Jix2SKynVvu5uY5ttWmj3p9NBj8iuFE6bhChY5QsgJsokv9d2",
  "key34": "3ng5xoC3MKZkm2c8xsnbVZDW8AxmR3u19cKYjB2FHpbKRQ8iTscwwi8Gzw5T23hNh72bjiZgd7USJ4KgQWqK4x4k",
  "key35": "4L2eXjSMXhvKXndzjBX7kN4mhRVazg3K1tC677ft8MSfkpaaTUyEFfRrdGcZWA9oL8TjKVZVLmspc3BnYRnraJ62",
  "key36": "4S7oVdxMBmT8WHzSGriAoLt97VhjNDDMyKeotxCsFxsFM91a51WKkQRqNGb81V3JdsapEHj9SitBm1H68eQbqXBm",
  "key37": "v82roG3zQpgeVUN8AiCuDd9AwFj99hjjhz3rYW9f48hChuKpjavKtVM3oLmBYJ8RvvVZ49P3yoJ2CK2iw1Kowuy",
  "key38": "5SWZqNaFjThFRuK6aF2VES4xKbEq1CCRvBpu4QNy33egtXnLbYpqCYJX7XtoW5qPBtwbgJGEVPiPC2F2aS7QP6mv",
  "key39": "4dhJS2XQFkuetAede2X1MaRcbVhovaKbS4qoNkdkD9abDvTMAJj51NqU14yBZcxDZwS3GTC3RG3AMhC2EU9W5h87",
  "key40": "2mvQmJTUy3q97jv5xQMK2FcWjkx4DoUwZ83wchjEkkpUvyeDMCJ7aYxe6r9cvntzVEd7sBJHotGcTeGtAiUvprw4",
  "key41": "RHgi64A6A9nZswope7i4oTbSqzSExtktQR7KyU5suwu94HtNE4Tg6faQyAPuAjDzKHMNVojhRE3tGPWTViaTtUm",
  "key42": "37DH2D69s9aYtSCn5rcHBGPLimwDqw2bmtJRQsBUNYqQvH99rBmxwcjxEjPZYB9mvgyVjfWtxQmeTfaSbeJ35JL1",
  "key43": "RQBVpAGYYc38Ae6UQU1kFZgoV19TbMaBT4d7ogXM7vpsKm4hdyJxybKDYy4wqcGhFjtBoAhdqegSN9ZDZhH224x",
  "key44": "2Y4J8sH2huENJULk2Tsg9HqGwnAihuGv667xRg4RXmWkRgcXMZcbuKkLMoz7m5jB7dxUCcS3zHTYUytdYEGoq8z3",
  "key45": "7J2Arhnd9nKChMKPfTVrcDBjb9S9BhyZdVmkZZ2wTM8UyzqhxuzafPpDw1qpctduP3vDPEs64Y37n29s5zHAmG7",
  "key46": "55eDh26gbSFoi1iJZryQicAWygJ8EGk5Hj2rqJTTHL8dtq2x2PwKwjeWZ6D7JaQpyiaLWTaxyj67kuDMzuHkiLM3"
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
