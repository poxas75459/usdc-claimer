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
    "2qAyaLf7AFmFimh9KEK63tcgGNMQXUocrXB85eGv3M5oeg4Dm9nihEs3Yyy44axasTyEi72d1CfM1o2dzxW2ZeSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Zy1tvwkfC4CAqtCLkZaXNefyqZ3QhpJJXGMJs8oRN8fuud4eqRdXQPizAiowpeu3BRHPQdFDsUqfgJvRBAG2qB",
  "key1": "2GxcAPgMfCZHmJJNtBarq9M4SqMrJ44sAXvCQUTU5qFm6C7bg5rDEWbRLUpR2GeoQZ3sftqmW5rwdQeXs5xs91Bc",
  "key2": "MRDJKRGEP1cgcwJdvBqkVrrQbjhhJNmhYJkQjgbMq8pq1EPoMJHzyTdMShhpnJMArDmzvUZ7UWFtJvYmfVp2NMf",
  "key3": "5zB4Z651HPWwKXVwBA1jQH8CGXDmS5o2s3QqtUzeDu7Xatk1z3HKYPbZ519JAwFS5GTvjK41TBQvNiCf3jp4HDyH",
  "key4": "3xUBDK2FfBZ5wfecsgWQej7hFLbqkSUqktD8Ht6YzY3CuA2bW9fsDSN6NjaYK1oF6GrXDpWeFeMNpcaHoSqRf3jx",
  "key5": "63VRAmn64or7LZ9bWnSXX4HQVFstpwo3dW8fce5sDzXSGdCGfEBiTmn85pdAck5yNJGJSyBr3vhpBB78mxd7paoG",
  "key6": "3rixwGaeQociWe1aZJqhsfPRArc6UnM1XKFfGYRgsyPj4vZpGRnJ8ZMWZ8NRWbznt2qAVrE1UcAT6gTB4xYDCRJA",
  "key7": "3mDNg7KdfKyjU8k9WpzcFiQWqJVBEj4iVMFVBqwZ9A71ZUF1BdhzhaqZYvnLyhRuqRv8LNbUm5VkSbCbp4PQHia3",
  "key8": "3JNtKJx65RDzu4NL6bFTjkfmYAcP3oscmTaiYxKDfbd9h8CZwZt7gDN7mPy3NXfuyDVWLEPrXKB8kbL8yYcM8pVh",
  "key9": "4KvbvB9d2tczvMYnSAtThTg529JE8ExV8NcVnwFW6qNWYjR669teH6qRdFekWFNMUBDqqXgLV4W9fZh5iVURHx4f",
  "key10": "5hk7fUH3cuxkWMphRedDCL31y6H8x4J6BvF372PJbtXB2PriQ7jmMRLSKQe1UPDzVdt1TSktpKisFmP7JguUJZSk",
  "key11": "mDd1TSHqoXFG6bXQmoRcgHKwCfVtTaNnigssrxEozKba4zSsvVNL89838tnh6mG1UznKYT8zfhNSFCEXbBxV8yo",
  "key12": "5jraUuuEJigWnoGohQQ1xAmo98fHsTabpc1G1fbEPuL5Ri2reikrfbbp5Nf3QTczbN8nTQ11yp6HNVLWL9tfGaNe",
  "key13": "MKd75MbxGoYKHhbgn3pwWE7rRACUaVPnmyPNRJTPNtk9r7v7eJho92dof4U85fVjzC1ptVkfUxRcaDtGbh1c3PA",
  "key14": "5vKPTuyPnd4axTo2uYjp9oTtqfdngKMwGqtzrxXZbE5XpfDDBFiaX5eZsxUVibEQyfuEm4Seonjsemf6G9XvAS1M",
  "key15": "wuGhCTwBPANjDVU8GscwxsXmmFyF2xeYRJAShjBmRUvobM7fYgdkbd2NBZy6zWTrHhLqEQkZ1oxF17XLr66uF5f",
  "key16": "5pKrgEEsMctyeTvsNSHjdTxUPKBdUzgg3LKkWVZHDKfwJK6Z8Y7LUSaNpMdM6vPikZZWFdmdiAz679v5cfJniMDR",
  "key17": "5yQrSJ1LAqXsrP6vgtbDdMAPon9Q92meaA2VFTtBPyM4TUEnEJLc6PGWhkGozbStdJjuhVKCHHAd6BMkMxtxCh3y",
  "key18": "Sm4DFfPp9vgaoU68yAfQEAM8CBmiRecSxQWTb8SHcgHBNB28B7LNJtJBMbXMfSgHue2JRpVjH6YFatzkQ7MZtDY",
  "key19": "36bx6aGHDUqBnoY7QB6CSL4kPMvmtbCrSjkZE1fNxZ58ZEqCkF31J2y6bLRLHUXASiyng3ESt4CeNKVcesmQ72NV",
  "key20": "4GkHaPaim35QjapGrZm2ctmT5Gdk5BEgpt5zGTYFBq9pkaavdFhQxPTUHyQqZ2hL8R3NuxdGeFjca53QSCP5xxZ3",
  "key21": "zErw8kWRWTfH6gsZNkZjguJmoDgNK5DigMBpk7YJ2QM5vqnJxvvG8XCRB2TUYmfdVv8Xg7kbxrXZBd4ogMu6QNh",
  "key22": "7zEqoAarphEMpX4TTV1QcCZUzvxJmBJ5Bd9jyhEjzQNxEyRDYbAbycdQce6BwJHNvbch73cco5fd7mcvAxeKpLE",
  "key23": "7yrsa35L6ZTyu2t3ba6zJkPBnCbpbr9spKgdomdNhxmKgGDnatcKRcKNS3hion7s6Hg3GY3k9wv8CRYvqrUKXvy",
  "key24": "5ruDBJQB99n8kysxsHMeUVByREc5mCjtj5Y73BinuRmS4jEsgmzP6mosDus5Nf13zfEb9Pum47zPNwZTfHHXHKar",
  "key25": "2v2jCD8S2KiiTwvGxBKqzE7QHUjZPBTQwHTdHTLKps4zN6wDxetGAcU8XUExQQjbkXzxfWoC7RvK2vEnwcV7bH8z",
  "key26": "35ZY2vE1uZJih6HT6zmYQW7sAPk7P8miwviFnBtLFMyyBKa5KpYCX9A7d8CZtZgbHTrjnSxLPWoKhMdg689Z5UJa",
  "key27": "3fwaDvhEjhEEhzCG7eBtWoPa3v5tctNShHXPzZE31wBhgck4CRfz9JJhtZJ3zxY1jJXzxc8A2qVvDcsjroSmEt7v",
  "key28": "a8ZBDDmbU1oNatsDeGC8PoxP5ESBKJ2Yn8LwXMFMEtW9eD1FcvrVSCiPS4MoR8pEb98gPZzaeTwbRdv4933KzBk",
  "key29": "33PKY5Q7CGSWoXJvaaRy2zHMMEN5eUwxmwcBaXVMFQ8sArqMWEkoMxzXyX2PaDsSDVRUAEahZbVk7EqB4bf4cLND",
  "key30": "5Yc596vbMP7a1JZPaUCxYtRGK5vSZG1qPQHiJLYodxjsQFYpaENDr1UL5tuUNjNb1vCNsdDaHKXvGtZjvxaVmoH5",
  "key31": "3EVnJGcwUr92ZJLmoUZ5RCyjiPCEkZaJbFQ9WNDBAncfphiaMM1AR7XmA79XCfsdt4mcu5sFU52hjG2VFZbDcWxV",
  "key32": "N4rjMzC1u7SACvLfXCkKjvep4FoSzTTT9ZyfLxqFBcULwbhPMF1wbfHxcdvwccVoZXhwp39UVPfiQ7Jf6EFisRz"
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
