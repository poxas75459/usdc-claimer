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
    "oZmUurz17SYzmj38HkiS7N27u7cWeMzgivM91bsAkDuvs6dYcMDc9mafk2FDGKKYpXFN5S1M5Eau7EjpX9b7BKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPM7gWfLhkVvmEJo8sqy9zHMquKnt53CEg3bj8KDgQPPNVTbC2SpbE3zRo8Tgc1oZoPdusEkpH7e9bGNnfu2T3d",
  "key1": "24Trhwnj3P719QnqhAgVfqoZ2wrnjWB6REPDTr79WEfE27wa3EUg4ioXfzhNQkog9VY7BayhC7NVh61FiyqknKD2",
  "key2": "3PopQaNWjFqCf52wAmW3Px27FcG6EBrt4vLVT5UA1PvJGH2YRvZ4h3LWGKPdCqU3DKKGLks9Kk17JUTcVUth495G",
  "key3": "66mYf6wNa2WGHZBkCZWPrYsA6PdJhoS8HmQMCme5wvHGhoFNSkAQjApZQGU17YBNDJqin5MHCCCDk4gnbGn72YSE",
  "key4": "aujTSnepUb5Qw3hVaw8KiCUusSeWeEnsbZneAQPBMTZLms9KsxrT1ZkXhduYLYiCzMuPx3s7rnaAvxESqPKQFqL",
  "key5": "3U2qZbsFt3v7CPB8kgxAh17fWjqF4q8GmR8PXY6cZA2w2MzAvagA6oauYhzrZJ1d1cHkWnacVeqHaTUEUR4vUbdv",
  "key6": "4Q1FJ9rjj8x1aFe54tnwTKL4FPQQZJ6LfLBMQffSvyzmk1fa3EhN6PcSJqX3kpALBhPeNUUvpHkRR8XsCFwY74br",
  "key7": "TpTtVws3EZTs4xEX6XEE81EvRjH83KS1L283mtCRsq7okyTeoZzEdqxf8K96hgqfvy95bD5aAyQFkF5jM7CrNMS",
  "key8": "E2Fi1LRmwcVxBitpxYto96P6Wrqg79zf7sWAgGP123dj1Kds5H1wrh17sha1yjeF3Sx7bQ4T6gfydFRxQLeX1ZX",
  "key9": "4r5hvjWAR7N9oU3b6J4NGxe9iD9pMHkZ2ksPMA7QTkj2KwXtPuSpKL3Hk9WM2BrtLZPLuqx6h9sGH7pD55LEDiyS",
  "key10": "4ZL67xPprxuruBupXc1HqpjhCC47XcD96tZhfhfBmTMWFJL3cKxuhBKgvRfGABRG6stn9iSiTsKsyrR4EdeZxZz5",
  "key11": "3yQxw2r7k8Uyb8fPEWU4mQHAo8qpyHGmEdv7YMLTU2DTdRtQ8ixefC7Xy7YrPWfDehiF3p7Eu43TtAJPRm9pVQr9",
  "key12": "2gpoSpherjvRkLkLZUC37Xy2dzejJSZCot6qyYRvT2P4Rqig4uPmzmvr3VR3rie7kr1qWNiRSxggJPdgPNem7f71",
  "key13": "4Y5gwX2NZF2MdFQwwmn3yWqRKigT75aJ8iQBK1MMKD6eoe49q3ZLfjCjfQ9g3rzEitsXLw7dbj9Dc8tLNt81dTpP",
  "key14": "3Wui8YQNXPV43iUj26C359AGZkBjrYbXq5UbUY3gGN5HorGdoDe2MQoD4LGznV79ki8Z4itafRYhKnM77Liy9xmj",
  "key15": "44vJ8FM5YqhA6WhGEgPddDhGjUsrH8TFEJ7sV8TyqHA5db7mr1QpVXvgCkdDHuypMwvbwq61dHgdkEieoHh9EGv2",
  "key16": "5v1HCfFNWXUZFpgb4LfHBb8bKafRYjuuEEvjvnhu9pkWNPYxnBgydZv9J2xC6XPUH1VjXjjR7yCjHJoHjntCHCuf",
  "key17": "5qwZbC96GuAsTdJ9sHN9D7XPYvNb33DGjvDVedhwZ83Hzj6bat35tdWqBPGmgkdWenK1phU9Cf17ZrhYXTedaKqo",
  "key18": "5QGhRqbyLXfcELxruFdGBMXcZnmJzGcZ53PS9wNNmJRSYB4VwPbrdksEbxoCgYMDzNeDFVGBp1sLN65dRZafaXpR",
  "key19": "4WhAgKErA3MU4KvKdcbWWhZXGNYJsN74MoPqB7cCbbzbwEb4UwrfDioyRdTqK7DYcaLf6a31A6rGgGtanXMraHSZ",
  "key20": "56TgTerxR7ZNjTYC9FfbEMMCqLMTTXZWo3XX3qSNEt4ZGgsTNZq28Ra7cFmyXJhfuFeneiSMR89Qz2H9LdY93NQA",
  "key21": "23T349RuVYDcwnNY5dRn1soTnqsE3K4kQbonukYd4EpaPWj5BEn2awQDh3FRrxJn8dU3CBc1dgrMBUwb9jPwX5qE",
  "key22": "3mPJ41XLsr6KZEUhhyw15ahoG6P7Js8fnManXXZCNMCmtyLggXw72ivGwDu985YjXmGZ6UHZGW9jgkp6auXP7RAC",
  "key23": "467ngW6EmfanUUfS9JiWXaQdsZpno9JzwTcHgZT8YMeM3AsVZwnoKESPP2HDdwJuhrKhMb7Kq5oAer54qYZxDT8U",
  "key24": "5niedCxd5mrj27eR2sQ4xr6UojuSCuNL2MNTgnXNw14AipufFtRgSRohWfCRWqFNbK2RQvWvx8DUsWTzzoFLDD26",
  "key25": "49uVsthQh4KJV8kLyHztnxTMnW6doVn9GUT3uNH25tdYq8sLkb8obLn37hmvjwEPfHc41zZciE5Rsc9uyErEdk9n",
  "key26": "2vTT8Z6LqzKgut1KzoKUhnVBVLGYc1FhvwmGqHfvCJrQ6gDcE9NMwWnnMmYMSHApUwB2hTxN2WGztUHKrNP8Y6yB",
  "key27": "GH5JtAum22ypmiKAQJ7KW9mvFSDPCcMTPzj6ARPYiaxmC25sAKDhJmVtTxBGa9N1T1M18AvaHd3jiRpmKq8MUDV",
  "key28": "5gqCExZTqsRuoGPBAKPEdCEAUTCQcZ4cMejc84p4fdPfM37qXJH4weYzcHjeMKNesDNrW1nmgoU9MBYufVorMFHR",
  "key29": "4bZrh5a6dotsbNZytEwwKqncamKSE8mqiMbTcVQmMtLArGWU9wjhfhn86bWxJj3ML9ZEedXPz6puxKnj2ZBEtS4E",
  "key30": "4kcbzLKLNo58yr3SfeyCYiA6pTt5UMmrn3d1NzKSKVEDRVefP18qiZGUE1fJbUWb7bJedTxCVUcJ11QuQNgxpYMY",
  "key31": "2UnqymcEXUfjrgddbT8epvuW6JfjQQwYr35tdCWvnwcx1MTujiJjDEMaM1tZiqUr9qccderpzXaMiVrgAE95n4Ma",
  "key32": "2C6zV4abG4QhRax6Yvscpz2vKUJtGXx7sGZgLLJLMrcJ92YhfQQymrHXg2Cxcxjw43tKX5adCmRaY3eksL4kbeZj",
  "key33": "3BM4HNAbYywQveVSkuvEtFoyTUbpivbMAEGCv9YyVNFyiMWPgYyNwZWG1tpuZ697iAYNjjQa8Dmhx3baNRh6xKHn",
  "key34": "K3ZCR5QLDoJbGPY46d9f3bMqVzPU12fNSkdbsJ7WPReiK41jzcVJLV7wAX1n6cDzKvQSYW2WapTdzHzz9tu2R6Q",
  "key35": "2yH3je4dBhm11U4Wp168v7ot6Tus9EvAHvENYrFpuNNdAJDZPpzpkt6nP8AqX4trG35tgeurut71n6WV5ktGqDZp",
  "key36": "5rAnXfHRTzNbyCC3aTXDtEhDCLEmre9pCsNZwQ295HbGZCd72oVgXpzP7YWXVNKpsusjHtZJVaprVGh871Peuazx",
  "key37": "3PJoJUoT8fQCWUJEACyAFGZ1kBV4QbNYX9sMRCGjQsJT6VzcUEBxj3gUBwYsM7t8HcodtrqaTuCHEipwKwYVw6fn",
  "key38": "2LE5ANjbKXFmyFVUqYA4RmhaMobzi4QvY2SBpa1Vt53LojYd9mvtJFuFiJNXoDPCYq8xPp5rNfFJinQNQeP4kodB",
  "key39": "2HnEqAMM8RQ1SFDh9DPtMYaGBuRy58FR5QQnbn1xFnJpRGnp5MqCmTgRp8JyY7CZdKSwEKLLTsCFdUDNn93r6uJj",
  "key40": "3rzF6ExEt6zxLMJqw8xpiH5CYrTh5iw7Mhk55bGBvDZcvnejXrtn6cgmoXmVayLQkXkZj4ua3YHHsBB2n7YxDARZ",
  "key41": "5bNDbqnYXVE5LBNhJc2s6bdHbFndB2w4VnDf48DxKRhz57bi36wHpWYm9nwCYU3YfA6u6HKR2gaSL7TT6Kij8GTe"
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
