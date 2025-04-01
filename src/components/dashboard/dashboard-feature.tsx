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
    "BJhZJMuLxmECb9ZDp4mP87gx4tBV7Mby4NEFjuEBJYtnNbWpdhnw5e1ZdUm17zLKmjV8ruysgVnxuJvF9symQRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZuiybHg89rtW27y1jMRhBXDgZStihAVhyjneudqRn8nmsp59FX65oVtF7noASBjoufwJALG9VJUjgF7dkG3S4x",
  "key1": "yEBAe4f6Ciqne5mz6oh5uR8v3Cy4HrSfzcwMGksrzizwQBAeFniUiDqnM6AMTms9nFjDoLwJUBc34eLr4Nw7CBe",
  "key2": "2Wmv9HbqNN4jy5D3wwe4inUKLUHkongY2zRn2kXbX6qD99gz8BX4EFULnp4g9pRu58VcyB42zJFACvnp6x4EzTeB",
  "key3": "5U8VE447sTJ86WuJtoyDD2ZjZ2NeBKrgyhaJatQkCQ6p3ZeTvmb5BsgUSL34ucF1yY88tGQfAaRfqa2BoB6HbN9V",
  "key4": "7bPLBE5WWFULVqxbi8xxbujCm2vfxdRLbbKk6SitTUqWS3X64zW2n9qi4fizkZrmR4x1W9mRZDY7tWMg6n2tLBQ",
  "key5": "2HGwoYGQ8JE7AiTkYs5y1LjAZgja5egemeqP7rDZiR737mQrWRaGzMkkE6soFcTrFS8kXZyk8GaQagKSe4LVSGvx",
  "key6": "5hLegNXdVS867Y2aiSUAZnAyogN4RWb726jtFi9p9JjxVU7EF2s6Qdk769tcqXeAN6YxdFVLU8CZ4ai5dk6qgy76",
  "key7": "4WDP8YJxuqQDLPyqGPw8Qj5QSF9PR4bxEpyhAtb9nmQ8PSooj5xx5rqfJ956wZbnnjv6tfs2Pf8K5ZDN9ANvKC3e",
  "key8": "3Xv72qxMc2CVjGpJT1bEWdfe9CPRP1nLe2sfX3UgxiHyUZzzQUWZLsa7horM4XkyJMRTqM4QaK8frTxsBoSLfRLW",
  "key9": "5878kj8ngt9TPpNuqKX2aoT3YBVw8tmEQUasFreu2bMkY2ZDiuzYHvYTS6QUezCC7P5QuQM5CiaHwN6z5WWFwbe7",
  "key10": "2fPmiqdcTHAx2E4vE11nKb2c1uvWo29hLWQbFdffJLHckzFqDVpcqq42n4kWbEfhJCNsqjUorzSNT9NcGepNWTXp",
  "key11": "4xaCJvZzMQfgTV6j8qEehpMv1UrSNB6aFVM3fw3fnX9xdVxkKAy4aHPwzDWv1FXnCmyRupGjssnm5w6YWgQC5ZWL",
  "key12": "2k4PxrmJRercwxuMwx6wKUKU6igMWnDujwKHuw1TKNFJEEfzh95N1JxBPrgVjPdNArCUYVLiuY2XPY1BjomyGixZ",
  "key13": "V4osAcHBqvEUPy9EBCCtjz8TArZ8MTSsnHFvChWnhw12FiuXX1Eni1R6BqsZwpuDsESyCwQo4BwRzYFRjzu4fjp",
  "key14": "3z9Rqk2RiB3YYc4jfTuN9hq3EJ3Uitk8bAGwfn8kLmrtHsJdzZeBuHpF28YJUyGqPdcZPq31mFLimTFLmsT48RQw",
  "key15": "4QUYHMYRJABP7KfXwVKsaW4gqo8QnyfSyfeJ8wj3vdXGRZzw6SqeFbFnL3dN6aywGHpvG3ztuwjTt7Y2jnQ34wAa",
  "key16": "3AgePVvPRnpWXnMg1oXZ4ujY2XgLko62YgRWaMCVpFx86VuuoWsMP24pWpnYcywMKkrU8r7NWjcgoxAQA1TijiRA",
  "key17": "3U7p5rA3w7rwQKAA8YwkTfQYa282cBaGiSP4G8NTF2p1pvkn9t8Ew2Ru6QAdJEBKAuo7xTEMNSGHez6XVvK7XBfa",
  "key18": "2K9ns8iKiFNyiUwjZJ7cNRAB3fXrNCKJzBcDADZRH1CCyCMThniiA4ixbcCEwbqWT3Nz8twNy8bRC13ZdyNpEmri",
  "key19": "4XJD7ho8V8zCtCe4QCbuRo5Qy8mSR3VTirjvAtg3hkQP9MXR8KQvEbrFWjL5vC9rmCMFjPaxH6D2uNY8YvNMCHZX",
  "key20": "628pHH7c7YpvRU9zg5NBMcMjs2yA8BvMbqUrgTXs3P5E7DmaAz2GgV9giTtgUBMZcui9DD34L9vqgBFB9bDfDBBF",
  "key21": "4NkGGvb15MaGMFwVdUn7SrEZCHKdGQQpCET7g8NUfYMNLMH1Q9xFDqjsBqCqSPsZr9RxfvhTCsRWnGzVHEJtDBMm",
  "key22": "xFrNV8qUwLfQjWNSdhpNHniYNoQgNx2P24YQTcaWyScj6oAjubLpYN8fd8fWybGTVur9EhduQknU2pVqoiDnqT7",
  "key23": "2zRBTZBMJmvftF1cYc1nXf3JmvabLSQsyGa67kUnZu6K6ZQYK6Nnihn5XeehgPtJue9y3bUeyvxW4bqoH8vojTVi",
  "key24": "4T4ediSxXwDVWAzdx3fwcffpqqheCuzL6Ems9GCSTiHZ971N2LtQ1VKfruj7EEt41AiLDsJ5Zca2CBJcCSDzZEic",
  "key25": "5N1mF5CW9a9cQC3VBrwCBVc1HPm1NUAxyMqc3b343WpR4EpzohgJZEcdgi9ZkFxysqq4FnzDAaUP84HbPEEZhGmB",
  "key26": "2pGkwUyBsCANKx1eb5T7g4u2tuKxReunLKWGnMieFjmS6Z5xxoCBcxpU9m3gCMWHHVwg1hf7UFE1FNRo87veHxW4",
  "key27": "2VmPr8H5G8hmHenzDUpRuUUsv3XERPxihePpymDCLkW4AHM5jmqLhQMZ5zxXbQxWDrXKj159zTLKLYHn5Xqs72rs",
  "key28": "3wxsXq5xUMmBqJxyU7AQrpFbHhUm6mQdcQ4ekK15KwXS2JQfzMeKpe9V5gLgwbBox7hfsrNaRAJyCsJnXNFifDKr",
  "key29": "3p6B2tJcSqJ33h9gSdrg1s8vYfEmJgVhea1DDEaQ6gP3KPghuSGvUUELKngyWekxxYb99A25MtN2qT95QAu5yPJe",
  "key30": "uJ7tVVzqAzvUpbyUwKHJA6ndvcZShzipLqMeGU3ATBbtx7ztQqYhybJeg7mWi9Sk7U5j6nJGqzc4Wq87iZM48Tm",
  "key31": "3MEGrQVYEqWnsdTeLkVfeTgvjaw3wmJAsrHAAeby8k7cTb6tPUd2N9bKTRhxqVtZJWeeZ8Z5V5Mq8oavhZNA7DNe",
  "key32": "4HmgRHnsPCmYxG3uUVEe3nxxZYYcUnjaP8zfZghFZd5JuFujBXEPYpqhJH3jBEM6TscogHryFRZAGyj8y8dq8dbX",
  "key33": "3fhA4jBgXrHfBoVgTHGaVbHzNh53NwkJvC8yudafjDzcT4Na8BeEppRBFkuKTXxHS3dz7ptiWLSkkPmsPzQQoHbf",
  "key34": "2dkYsswifNUsxJDmtuqapc7NmsbyJPzDrAwkTaQi3YNfPmZP151KdHgDEbkRzW3wiFGh3gFJWwWamWf7dbmP3H2T",
  "key35": "5gE2vsA74ffhb8uZfe3wd96PC4wfNP1qHfPeNRzPx3mZCGDWoS1nvgTxJ6B7gRSHPwYQ9rJPgD7SPsKGGccL8GeP",
  "key36": "a1s6EKw9hT3xvW7pMGiybLqE1TYBuoECqiQZ757zvs4j8EHGewwWEffRSa5g4XL3Hw2edNDg9gBdbPDyGSYiVdf",
  "key37": "2Fc24sDmkV7NUqseR7Grk6ZPAZVEsWRnhAUxHBwDEakYr98G7hHk9Z9EuHvKVLLhJzAdn364TX5RLwWmk68oiXMH",
  "key38": "2jTzcbKraw32kHKxUdyX6pMTYWApCN9HZCGY69jLcChszonzg6hiSgK1okQWu3m2ej3JLFzmMenuBhx7WYiHQjZk",
  "key39": "5WNHB7EHh2y966TWqD4r6hjTNvtG4RofXGfNwpMZoNLxmeWnzeHLF6SRnVzCLdLx1WmrCjZ8Vjy8FtsrYwtrdnq5",
  "key40": "rVBBdY5ZBBgWQVSPiXbyBET5gL6EW6wjmxPY9g3FS5mUcr2Ly9bmWq9tq53NW2ABs4bXcF84gfCV52N112ztJyA",
  "key41": "Lh5uWmTRqLVGG2EX6kYKvzGJD7HJ7xakpyTTXR9nZDsFxUbyCPziYkySpzmitwbUBqtVaXVXvJhU1yCyyd4CrfC",
  "key42": "4JK8V7qAXhvLxSGoYNMFQQbp2o9Hc5UwLaptKNZVTeE6BGgdA5fVurxwPhhpHAUNjt3VCSsmf6Lcy9CF2Vd6NyrS",
  "key43": "2qYo8PvSkCybP8sCiVGqPzvGdgdCAzdxWvMnPN27LMMNxEAdQwrt5nqjSWktVoX4ArbhyshcrvFzyeBR8qUv2YnK",
  "key44": "6ZbiVwP26kUsVGY6mbU5MjtZRBqLMY9B7CcibuLuM55YXa4XQmUK2XwR4ZJvdwGHTv9nD2hY3W9MSfojNFRwCw3",
  "key45": "qAFLEFJmCWSMbKsV8cmcLzJ36vqn76GqHjxNtbvuwJzx7Cox7g25tjkr62idRxpAwyhC5L5gCQU2cAj7BouTVZ9",
  "key46": "3XwsPjewKpB9DRXrUcNTzgnRUfVfpDeGBHpuxbWbCxAQ1eosGJHaGp1a9xPgVjK4du8mygwsG4kGM3xUveAtUJHk"
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
