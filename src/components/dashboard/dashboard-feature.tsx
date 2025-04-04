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
    "okA4HVHYhEq1hLHVz8bRPvP4CdzWBiiXVs6HFCgNv9WHKvKZ6ZGhrQAmT65fKDAFPKaoxuy95aQUe4iGCpr9PVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QcTfHeUjHXX9UGT5CkaHHiBNv7rtxoajt84JWidS9xEwzftcLkxhetTwdaeG2XFzwHXH2gR2fRQbSVFQD9Zt1WV",
  "key1": "4KMTCJ7K7HyQK81gKyvPY2GHcKvuu2SyzPb4UdDHT5qYHofKfRGyxPuX9JXvZ9RfFUV5XXC7os1Ci3mLNxJLJtvF",
  "key2": "3H5pxFWrg9R4deQnT2k8aQGoHBDZXERYd9KoczQCGgsbRs8pv6xPxFFLK21drtppDr74488SCVMQCZN1V4nPvLrG",
  "key3": "5gBEcaxtMpRdUp4cDeCfTKC1zicZJPAdeNFSfR6TPUY7UX1UXYq1zwvWCerHcmWxKr6YevN1qA6reNhUFRi4tR59",
  "key4": "4gvjAeQVao8wPaxYRUvN3stsUGJFfCSUv372a4bGvRZn3usgyQSCiW9WY9A3vzomkyVuXFvQHNNA6P2raCSmcDt5",
  "key5": "qBo3Li3i8Krp33y439qUwuR2YSAdEjcrRopMKwqbaKmsiiH42DQm9abEvYqnTm9w4JmzV4tkEQRwqT9D7d21csk",
  "key6": "2TcCDuMV26YvJKqxWLY3gR2iGfkHz387Ff49PSdhHj2rEDasfY8AG94mbXFiFoVS5ZiMkDHKVhngfivCfUKFETii",
  "key7": "58rY42fp7L8vHnLRK2EJwtJKA7c8iKJXCZpGh2Yj1ThJZHHPRGhRR1uPPMYzjBJyk6weUT5bee3y7GRAEzgAQsLR",
  "key8": "3xxMRVLTN41MN6Euh2TFdFw6gctdgv7iPvCRfyJbCDFgzsugGeN5yBxtCBzH8NE6vqbT24LQcV8A8jaqACdaHdX1",
  "key9": "2PDdTgZ28WskyuGF3e7uzD4FdnJdjcYhaJadFCjJ8LA6wyeeWL6oUoKrLHQe14c4Fh9A3NYtY3E64Hn3HwFbTjEa",
  "key10": "5umHZY4UYTbaQvA2k4od9abD51Ac9tvupgNBzCnMWYhYpCmVPDGg7Jct644T3TbK1JbZn2kHpXET6yotBnzd9kwm",
  "key11": "5sxLbWP8vpF5RSuMNmq6JdcYnMgJ89CqrgWwf3p39xmTznusFjxLRjq8UxiZ6B4yEPT6seJL7yaEs3Vtr9DoXdGA",
  "key12": "5HC7nwbas7btfMwyi9vBFVbhHzbvw2z1J456qrNwGRuKQz3gztZVHouXjUtMfysTZh81P9dPre15qLawiaeGanGT",
  "key13": "3DNhZDeKHnW41xn3FkBs5gXEtuREqznzmsibwjjErj39jqzZHvsJZARwe23Q2yDsj4eu1fr1aWaYuCGLy8U9pe24",
  "key14": "4PtSvHsdP1vJxLP8GQ6cZpn8TrokjwmH9Cj3LhkrAiA9dVFe5bEkW3ZhjCTh6C8V8F76kJRs8K8wCyQ6jsJcBqpZ",
  "key15": "23xsxQHvkopma4BHAVnwB9tg9oH4zZc7ePdQa53HGjD87qLDjro8hUAB5QoQwCwMGA35gXcxJBfyTPebQqxDnwFy",
  "key16": "2fFabuSLynW39LwPJwqwxDkz8Yp6KKCq6mPxVnorJzdpjZkyzg2NdrbL5tLajJ5KLxe61D1CsmCoftr6FWgGhv1p",
  "key17": "5crDvScmX9bugNT62jNfrS7EPuLSnfwb1LLy7QYMGMMydVKQYWz5mHKqGTcSnpQdPFUrLd2z5Meg8QehgEy5bQok",
  "key18": "2Wbj5nSbZVbYb1NZUCJ6u1ZAeRY7oQRLsnnLTPnEAJzGKbx74ZKyboTq2zAQYQz9zWvPod7LeBpA8TUw4xXoXp2T",
  "key19": "3qe1pWvLuDPQ7FaoZR2zNwWZUBwHTmyc526VRPcVS4Q82Uh4jcaVXxVSF1nSmFH6UQM3XTdwmqWFeehqZZRmiDwN",
  "key20": "2GqDFyy6EF2yiMikjrG1VeYaBx316XppjFmYqoXNZywnPJZTWx29LPb9WxFfFY2kbnsTSCgs6BhUbNqxHzjkTjVE",
  "key21": "wj2BUcGyZkDCg7UJaev7jqBdBZGNisiAwm8WGNPBb9kvR8LuvXG8WD9nHnctjsBJ2tAgDiSmRjQPLgsqHP9h3vb",
  "key22": "2CrN9mYBGCMcxhecbRMpT95LwLkEfB6VrgDG6X4oNDFQqVDeX7JUFtoQdeFEWaJiB78sWcjRXpxUzLQdXvyAMkG6",
  "key23": "3btPrAnAmiDCNyH8zJcVmHgWsS2NM2gfKZQEo3MYcZD9JwmeFBe6BiFUbbd77kqLuh6gVFMZNf7623tvzUWZZLG6",
  "key24": "5HXDGUWb5e4qcVPp7m1tAsdLQnVyBFFSJXYGaUFTANN3914Ps9hu68Hr4o6kZBjL2J46PAoJnkj6HFs1pRvpVimh",
  "key25": "3QUrJZwau8Z3JLpzfDras5UBEPKyRgQhpSXeZKMayyJWry5ciXbFFS5rq1YiRKBoE8jCKtbSmYswvzfnQKA7wVSs",
  "key26": "4yf8MnfCWnBLdzYyZMANadUppdReFQfvULNV1MAXA89Vof4KgxoiFcsZxzqEi5zWYcHLf1jYgpLvUErz7q1aT1bT",
  "key27": "ZfwtqKN4Yjyqy2fEBo7xKSE6UmG5pARxckjd9t9XTaPZwZSDjZSF3VtjAVt38aumpVUPxkTLd2ELyeBTxMnV7yN",
  "key28": "671F9hNyq9fyyiN3gGPcq1A6UpKZiZL69HwqWyJBLyuvhqTuiNo6Kvx7745YqHajJvvBezerijzSkBXNfoGL1WRx",
  "key29": "2fmjKM12VwF22UU5Q14ouxwgcA8wd86orkhCSGLgiBZSgyojU3qwojHC59yMk9nZJny9xoQ3Hy2GKySUPFzCzXnV",
  "key30": "4qZsQBwexAJaFSLwnb4Gx2hvKFgfTE3YMw3kpzdwmgBXRcofzMH9QBaNiq362gM42hVCZiJQPT4CPK7V2k8sEZw8",
  "key31": "5BubhZZ96oyCmKLcqg2o8wxb81kbr59biLQjNjq5fyun6P1V526F7UU6fq3K2PVJzWUdK7bBJDazQ87uQRY1VsDF",
  "key32": "5aUGbsgxfihaBauzob3UKwrfd1Mk5CwKfGUQF8gcAGnUn4gDJHCA9pesDTx6eijWDF8SAFi4K7e1N9fa1NmQPg26",
  "key33": "4cVkhNerb6PQtYcDypLF5ZWm4syp7WmWSECG2VFfTfT9Q73KS5GZZMbdoAa99B5ipsXDtUB3vT7NNPxTucNfcafe",
  "key34": "51mAM36fqDFSMTqU3V1Qi4dmpF6Cb6TTKMPFurVEkCtkkZQ5TBGVwJPkJU6QgWZGgfhntnt4JcTdNGhp3p6C88tU",
  "key35": "2QgX2GFjnNSGr5qzNcXJLsMzqefkb5eqqmpPzTqVDexTgYYBBXBEAAqpRbGWaKMif8y8LDCGjq6hmrY3x3HxhnS"
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
