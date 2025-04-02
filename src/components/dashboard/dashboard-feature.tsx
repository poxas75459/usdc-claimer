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
    "3VqtnzksJZs9Jz58FtHG7Kmryfd8wv9nkgeFesdwzj9h7nx3YBhk4DxrFUFrxky8xeegmKkca6ppFxQtFEb4eZKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DoJXLmsgFFMeckDEbUB5SKfnTkCeczgkeERBvgrdC3GDtNKBWuKjAhhUnE6hG9eCof2NR5Pt5jrgoLfGw8gDQcg",
  "key1": "4UuXktdUMuHSWBrmTGios8BtpL6LT7E6Z46bJueMYkDkvadf6fQhszc4z5mgFM2VGwYwMBwsUrAPNJn5WcgUC8pX",
  "key2": "WpfHz5xqUfmqhnnSRBES2mo5Y7DR9CqjHDMh8cNY5i2sacZLNJ2Jsqx3tP13uYo315kiXfcXiBs1J3hkRr5WSAv",
  "key3": "3q58y3xoV2ppgFHyNYhAZtfwyu512sqPjZBMhU5GnkPXpuyXwYVKRUCkBGseEh8V1N897zSSKfuCj3G3ctpsgLNi",
  "key4": "a7JApu5cRxNRm6B4i4kox4Wt2RgQUMg5yWKcuRGZQPmgJm18WsDfUbuMX8GyeizrJADDJ4sMMowr8cm1WSi62dB",
  "key5": "2NyyZRwMToBJXk9EjxiA6FNCJpTkHkpttWQm9S3d4CGr9wYTjhFhGvNzye1sviT3kwnxeAQSDwUADUFYNFZSiq3H",
  "key6": "22wrstefyidrbKC6g8dUL5tAPFCUBi9HeNznUPgy7DhQTmkn8n2t8zjHDWtmKmroRHGhjvstvhZGfR8QDXRKAeyD",
  "key7": "4RHjy6hwrDneMuZj9iFghSpW49ybQz3kWUvL8sCkH3dvaHkw2QjsVeDoLaq2w3FwHUez39bkvoc1sB8A58WpbJNz",
  "key8": "5Q8yeZmtDTMQADMTbpo92eHjAkTrxHEjQARyZgEj9HUVaS5zvbdWBYTUQr6EuDv2vSxNbiGE9o2Tt9v7YSBrmBzn",
  "key9": "5xGnsHvEbJa1md6WBjMKRd8Ti31CQFCE5mWxEy6J3F4aLMYKBFYuA7RXKAyVnfe4YAiFPwtP2kbBgVkRiKxLtaub",
  "key10": "AKu2Bf9PGbQaPbZGn99wXD1w2aHuXo2bwK8WKJxUAeArZACoifk6XUcXvT7mvGAYxiLc9JkcwF1nxFrqDbzdEoq",
  "key11": "2YQVmkk9QZ7EZxP44VAEPbKRsjzZkdCXXxfNqhMPrA4TqdxgJu4Rw5KujHahND9FqAfcGCh251bcwgxgeMtbwk1C",
  "key12": "Xkv8pqgzXt5GbdJP4wz5hNbsDa7ePt315nWZQHg8qGcT67gZn7XxvD8kJ2qhet6KEE9qRXBr43uMrr1ph86phGJ",
  "key13": "dyr4bcXvDqpcZn9FEJf88qWKbYA6fJcUyuWicuKZprTdpvHaGCoWm3KpJ1kziAjsSgHEjtyUhWXZNcvR6a4JBQy",
  "key14": "zyNBDChWtjkcxhbY2sDk8jrkpGzLqhXHmAbJDScbzDpS92zfpiB5PzKkEdEehF8nVyyhJiQ5GDFXffwvmAu9jJk",
  "key15": "3trNfuwrDZT6E1EaAhdBJZCsFuoHfw26J8HjooW9jHq8Rq3DdQiop9J4xrWiEsJrmaQHd4nno3U8rVmivhqeosdY",
  "key16": "58rs3aH9nwD79r6xLzUb6RaqgshbpLNDGBK8Z7xffQnkJGTz9x36Ch7ZakQjNwWmDQPrvi6zZ1uEZDpsHgQH8V3f",
  "key17": "4YXe9PqcCN2eoM3z2SjQKgDhZCqNJ9jZ6EfcntwXBBagzTaCdb6tBvxEp6XjbiTPTjgomhJT67mQ6svxYHDjijHY",
  "key18": "62kbEEsmpPTguAymR1zedCCpyURkuTjcuidypgw8K98CiZefV3FFu1gi5r6atnRBtosQ5uaUNzJSAVuKqLknq3BK",
  "key19": "3E8r82v5t3WyjDvzNt47UUrz651MxB7iaENCd2178tEWu3BV9JMXCSjwKGqQAa1xGZdaUKCjcWZRr2D9bPgWdMv7",
  "key20": "45MwLee3AfYCwkDvdDWnsj5M4WEvTf42hE7z8CAHVwf4t5UBD1WgFiPhyVNRN6tUkBeupidTiJLuRpLbQ7P6GV1p",
  "key21": "RBhT1tYFWMA9cWhEaHNSQbVBMJyfDD9tGyuVnZzqAUXLNnP5JSM6L4HduVkQftCBo1aS3wBsWRiRbhL9Rq25uTL",
  "key22": "5VhPKg5GCJSKKXfgYHCnzRmw3unt1y3gCg19qbs9tEUHFuiU1L28fDoSPiWMBsmVCUJFtPFwgiCA4bQb9Zz4L6Xw",
  "key23": "3aYsAJY2hN6umqYAEiGxtp1EhXDau7yD8R8qVxAuyvAjbdSYi2uNLqz3CSHggypRqKD8DywTnxycwykUYxXwQ5HC",
  "key24": "5CgD4ja2sGjcuFbGwnBoygdHJQZ1hmuS1oKKYo34yGYCeNmh6QnpeinzLMipmii6izsZqUhuWJ49ynHynxv9sqxZ",
  "key25": "56k3Jzt7zA3jxqWccddiUY3GGqLnSq9KVjJxCHfgjg2wmV4moW5QJ3AZNqXWUB8wroAUR5ARSw85pUr8n4FS2ipW",
  "key26": "3zYagdWVHK8XPe8wtsUk1hfWxGmzboeEFb2EaaF1LCRxe8ffqxbCf1e9BJGeNpeA5ciXv6Lxq4ijBX4Ntu1ghhkD",
  "key27": "Gx85aM9MSpkKgnVGdEHy5uL9AM5Zgwn8EuTWewhujgbRRnZ5VZX9wZKYfKko4wHy8tjzzW6dXoG6uNuaFkgnFGx",
  "key28": "3Vc2ayUtENMMuPqFrvybEtmxBW1sdKqAtkd6cjX2Vx9axJq4r8bv1LzjCiX6NSGrcipAUGYbBwpq3wt9eXw6BEAE",
  "key29": "CyY4zjzX2Xx2KXxvPGxGEbist2CFU7kb1QdSPSNNAoHsusby4LRPCaZpy3Fpg7yUVjGbqqZhj46HL5kv8tQCVn3"
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
