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
    "3sXBap6QCdYKGQySbakoc6jpCQbKi1Xj5r2XdQL7P9Du889BtfsU3HBYqJghUkyrdsVPpvFQpnzG93NKcZsbcQwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LaXHLDU3Ug7zbF6FsM2k8rRZWTzLWzCDU7bY7JgtfhHrbvt4X1KEN4eecx1hNdUCKLkT9fZNtsA7QsrMwSoLnM",
  "key1": "67RbbXknYgHDFbWP6KnaBAWKXzm3nyPf3WQGohLbDQUPUw9kmZBEKKhyPK2GuaD6GwX1wTgQEwjB2QoRpy6D7bj2",
  "key2": "5kHeMamoHxEKpFzfa4UFfcdXdkYHRfe1G95w9fJJ6bvEtKjHW4ESG1xtbKbHMSDt1Ck8gk9kTURUjn1Yua6DhJPg",
  "key3": "3BGg3fnfYPZMptSUCdSbNz3A3cptwUy1z723ab9vKPiVUnv8FRbpgRPSMj3d6ktUuFwiaevG5TzTy8FBWghFEftG",
  "key4": "49sXqaEZHHqZeBqGnbPFZLjR18xQ5Qz1RiYv8P7KNjW4SXTt1LThoG7eSk9kqdJ9Hn6zjwENSBB9gFQRQfqzcdmV",
  "key5": "qxCQAhA5XrZE7o2YcRnQyyQBMRGC6M6j2sQYMeaS33Y5NmLXStddoj4crTM8Nt8kfpAU7dP9wVcFWt5vAC7DNy5",
  "key6": "3a2E6cXEa8kwZhytnNtuBDbgTbd2CJD6D4yqpV436E8bpRcyW4dAsmf3CKT7n6Toqk2cugj4xT6ztWCggCpvnV3K",
  "key7": "25LV7ao6agfdvKDf2jcLsJx4ZrUTUNGh14VBChhpSAoT46nVuDw4uv5HfiNGz8RS3YH7wAeqyoZMo4CmzbFNUA8n",
  "key8": "3E999QxzhKQFU7uHUt5c86u9iesZcteX8kYapeHNUfb4ixqWzSu8EBTFVvoiJtRoS8A6Yo2rZ6xknG6mMTbcxxXh",
  "key9": "5W3UfQuVdExeWWAudqnXvgTFqKug67wKDVy42bwPzHP121FTi1Mfb8jgqxaWsFmGEEuVtEagMXbN5AxrcbTSeXtK",
  "key10": "5cazMUwTpsrwAmRkGyiyW8nqRnh7LNyzauaW68qrf13KSCozhAnD5RyVVH9kwbCo4FHY5fLBqZ9Vrp4MvGqvHLrr",
  "key11": "3aPJ6YLugkcCcnJoP7ZqYokPFPcH2Z1pBpXvN78c9gV47AKTESCGgZnYaUtxmUkgv2Zt1pAF1xjmM4fpLeJFvRqD",
  "key12": "3GQH7jT4PLtWqJgyKfSqAcFKRJk1FqszdcGEsib9uE5j81FUsrRN6GwkpfXM8fFj2iSJwXGM4YsUaddRzVwjwGfu",
  "key13": "55SYs4GK5A8aBhepTgwfVZ1tE7eZf64vA4rAJ1UPFdTdWTgLj8j46J82L9EjJtr5UVNuwUbY62rxAq4LFU9EPaua",
  "key14": "43Bis4tzo98hE9Q6uknroYqcXNorqEuY9vaUxzyuG4Lf5MxBJFEbpdJJmkY1sE6RFwYq4GAjB5euRzvZx8Kjy6NU",
  "key15": "5JZoNyipj7PZCkKPcrnkvyQ2ZmaCPqzSKDG2qV9Csy1HRt4dmk1bs7nB1QkuBTqCwTGLfP87UTX17X2X92uPWMyx",
  "key16": "3zPGDGAikaKPHJ2wkGNA3N9J9SQvfGZbW8UyMXcQb5eUDByP6S9yyQTnzzCM9RY4uC1sWSrSxr7Ys8oCVsmpD5Z",
  "key17": "266N16LUmRXfP6fZ1E7BijVzLNRVHCemx28VeGZsdwRC53xhvNzrNyudTKGF8FXrnTsaZkjTnzSGNcFUjtHXkZhw",
  "key18": "316HT8MyHSJ4KeM914GSbqSkB93GRbtYsLVpZWPJRVoQfwJuijx8HzGo8b9i6Xx9ucHTdimKBW6WfunqC7oU7w4A",
  "key19": "ShYDtektaiC77cLhRpaCdb65QiDGpycjLXtJ1u2hJFAgNkGi94cjNt6JX7dwv1gXVPYZA9qSEETeYm3XuCvmkCr",
  "key20": "5TxgoMT1kP3QHakTZv3PK124AXRqvrMcCUg5tg2QG8CG8e1HwnJc6jnvivNjSksmrtW6idwG1MJFz6iXVqFHWnKx",
  "key21": "2V5d9VHZidgcbG3H2kQK5NqU1RGFf4JRLDoAfUq1UwFcAy1mJAgQCH8WutMKEDB46ehJaccB6AnWZuoLpXRHXCNu",
  "key22": "2G5x1GDgXpqrdq6LM8z1ypG8wc5qFNNKRddBUNVG7YMmGKUZTxumFEshqWiaigKcx5ctVdjSiF59Ysu7LF6Nwm4V",
  "key23": "QQuwpYLVi2XwuB951sKxEcHxu37Zyr3EwjW4LQ4sMibuTUMQ48P26yMQSTuRAXmNBduMyQAG4N5gfWxqrogswwG",
  "key24": "5nDp3XuF4CRuxeAPwf8MEPKBrbNbMpiFT8itqwh62tkE7F3xBHCJ8mrxLBs7niEV8iKybP34vR8AmgvxCWCWEbp2",
  "key25": "7SCv7r3soeuj7T3XVmQTnt3Pk2Mojeze6bd7aEiUurc7Bz6EaZC6reWgV7WLjwhbWxL35k4CVH4Yi2RACrT5EmU",
  "key26": "3jTwbYpcnoZfKTQfAcYdAqGgYreeRVFhPgTJHK9fheqRYtAbTnnpmTUqmWohKDf9KuXzftJQPYXdyb3YQDiLLXdE",
  "key27": "3H9hXmLdf7S9bRmM77Ax3ZbLzrY7Y9ZbDr4VREk8tSvBAX8j197wZD25SazfAD7MykVvU1auishBkMReEXecoHAK",
  "key28": "2snHncqz6wv8JS5nNqVXNeJCTEZCmM2z6XFZ4wgW5aGXm6KfqUYjgH39T5kCYz4NZ5hX3Cqi6Rb6LbfMwCEbsaPo",
  "key29": "3AfvFmvZrFMoKj9iQJVRfwKwzJ3ZbbZVRpDMVoTw8WpiNw4sMAeZGSHWrjuvTc2MsV1YqCh9Yv2RADZy7fC1LEps",
  "key30": "53J89zSwpPQ9oqccodQngjmnjxi62tGuVdGKrbcqZURFJyXEd3NdksanEcGDpkvFjYfZVtd7FJnpxtHbUVVoS3rL",
  "key31": "5wajACjrG2kJarHLSG8XtucG8NwtpVEFNRPRvPvaGrZLp39kZph6X38ZxpS6knLuM7SBhrrzpG5Te957heXGBmEE",
  "key32": "oJstKSJEq9X7hWbbsjHok15DRh5pkSiEzfciECb2cXMYk7X8qSBXAxQGFduQ3MngQTypcvJrsL5d6TF6NtiY3hb",
  "key33": "za4DMvi15SSS8YJh7as4LSRjnoq8LSQe9h81Lg5oJAro3H5s5gL4CZ7Dyjr8v72yEzcogX3o1GpeT8ytaWo8GFu",
  "key34": "3gSVT69BmCnAYTEYG21G65HFMZFVJSCsdCnnLDEiN5TWMqX1hxKX5nvubLDiKUyofBnH1pJq7JmwGaSfYUqQ2Vw6",
  "key35": "2y1EisfE4s6Jr9v9KD6UuBMMczz5LhF1CfM5B4YG44iUekNrSkDW7vKUgKjwUwHMJvBMi3Z1pq2ytF4QKaj7jG95",
  "key36": "2m8QsHG2Zeinn9hQaEjmYLZur2LB8BSL47ZwhCNaL6wQbGTrncpz465rkEbywSF7A76fDcPPatCxRC5uJqTxGzQg",
  "key37": "37PDPKGaxdX5JE6XMBM4mTfLLU2UT5iGpZKbXpBsnRTMY24xEkNpL14dDUuUjF6dFRLkz7eG3pYqsBdCTXFwMjiG",
  "key38": "2eaxQFiVrXnRs1HwKaJinW2QBrL4VKHKMNuffv3FF8Y9rmcRreo1TAkVqfEK2KFPuJX9vh9Dz9vHHVZKwbfjGtjq",
  "key39": "4XXs56DaMBP3VuwWQLeZngihuPExJr9JKWRGFJhXsnrqjjEdZG6pDs4dpj4DBHPrcdfFgoDUvW5fiqXcrv6MuXsC",
  "key40": "45wqXxpEWen9QvMj3jyJqgizpei6oncudzqZGvPirf7MuA5Zbx93BHx2EBNLPXcoLqAFurYZHymwcmZp9WjSPnd",
  "key41": "4CdbMh8zAxSxoDw8uiYvwryQbydahNaouwmRZ6PEZbo9kwkbNwsEdPkE3hMVQMZ7VULXNx3Jq6kELU5KoQwnaXkb",
  "key42": "579scPLi6fjKq8nwgCLMn4mLsbwcC1JTdydwurXnapfKcXEG7SVcbowyzSB7V44tHnNAVoHomW6HK8F9uwHk3t8R",
  "key43": "5tKovjm9Ud8KWegr8h1Str8CeV8NhsN219sSia9ZAhwzhV6S7kJrrC6544D7bYUFV4JwnoQa8pPbGkspcBzjMQFb",
  "key44": "3ZfWvFWCMaoscUaq9PYCJDVgbqEopjYVZQ7LFvGriQw7WfynpzJqx7D18DW1NRa1Dd6gfWGDB7tEsni8n1GuKHQT",
  "key45": "574Ccf4PqCS8tBPHfqnycxcd9TynDwqq796X5cw85MLVo2W3NSUU1RRcyacR15ZXiveD5RzXuNbiUGvAjSgKNH9f",
  "key46": "2GEM8yVm2YtdeXgRQ3uCaWbowDrwpbS2EA3CDa661xeD8VdwmY3dwPFeP7gBgSo3dtwWWyodoXygsJ2qCTwqjH7J",
  "key47": "62HC6hSh33u6sNbUgiLAAHkKRkRuB6TsR7M7EfNQLLRWTvxtU9otL4oQwZz7wkm3bv8XenQoCnwhEqzuNUDd99bK",
  "key48": "3W59gMdeugFB6TCFjaVd4j78KoKvP1UjL7Kvu7KDc6ESqzTSKubCz8aDWHZdfZe4oEAuvCNhFzdUuLsXMsW6Xwes"
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
