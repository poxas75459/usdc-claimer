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
    "WibG2chnTxM84pdLb8oJSkNe4twcJRTuDxnW586k62uVs6ZhAnnsAA52jq7iPbB21iK1hx66rJD5e5eMLQkbSvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WV45K7mGYMgztomxLfebd9SbsrExRQPGqhh1KSsH6QECPRH3j8GiCZHeMAzK5r3VP263QHCkTi8r1iQ1u2LkF6d",
  "key1": "2QuEc1sgfivH45yzu94uMzoA1DVT7MtE7DnLyPe5veyDZJpVZG3RNgRSgwafZyGQeo5Xoajm5AEkSaJZqrrVJ47R",
  "key2": "3pY3qQg8AN4tNowGrCaaJiriR9HmZus9wLdq2NoRzNQ54XuwRUFRGaNk9ufhMhPwG1nki6BgeLPLwNkbJkggsomb",
  "key3": "5yWi8dVHh6L4Tcvw3WeJjxVffosRegpWLb9AvJhJQGphj6amYwXnmZ4vicLhB7G4xZmDUzG8vYtQi9tznXGvC5qr",
  "key4": "3hrHFFDPhLuDH6K6zwBDcagLwidHtGzXUF5UeUtoXFsSF1jzFKpLgzBgawBnzuRYGs3fshUfo5FXfKhwkhzkS7yK",
  "key5": "GwCTKMckT5cZ64VpXx3ywJafoZ29eabVFKbXg15j5YiFPKrBs9ES8WJMnKEAm1tL2kFk3rkMk3roPMH2nqTZc9n",
  "key6": "3ShQ4zSbaHrMQnGhbweJggRAQXb8MCZzsSs3u67axEyhyr2osNrfDPjJYABzCcGbtjJt7XvXU4aAxmgPQQCscaAe",
  "key7": "2kh8XevDX2PbZZJVC7iWJsJk5NaiNQPVEqaW8uHiP6kghNFt1WT5FBVRBgaCtCF64U4B5DYZNEsNETfLLruE8MQD",
  "key8": "2HFcrGyFcPXfKMcRVuuPHJjthBBN5N1WJDRkhWKbNQF7AFN7sUdqUHAKRZhkoqmjteci5MTrLFMzBpsEgUJJDN4s",
  "key9": "66c3DS5h4RB649iYJB2uJDP4i6Vkj9izm1oVRuAXSt2xdHpgvPuqKhhZmaTJ7cnMm4MxmnnwDqF1t8LzZyQGdoqh",
  "key10": "2nL96pC2ueNwzw3SrHHhibcuxgVuCSgsacU4ucJrMVfCVkmjTwar3B5Q4Ss7JcChmDYMcG44MGjEDgN7b5euRNSt",
  "key11": "2RJPqf6yLR1JMPnTsb3REEo2hC8sjxbgeg6E14uQnTEJUEDEbUtHWAEF5xASeKxzpNVtuTyf6A1XiE1sBzYPfWsK",
  "key12": "5caADKQo7usx7y3Nf9Gtcz1M3kiJutTKVpTBAKAjGJqd15o6w13P94GCqMJ9N29BpYsemzd6J4u1oenJ9R4XFjxo",
  "key13": "77oS8HwRrvaMYNch5r1yVyayALk8dbjLSX9pJNs4BDyvg8fYjxhYb7T4u9tXuT18uvwZNoeEQo5K5C61HocPYfD",
  "key14": "31SwyVX5Br4Rkrh4V8bhJNLBDnavzNaqV3JFEXnQMeb24SQgMFvFuH27GfFgDQV8pFo38mzYGmH1bBwrbi1hmF9s",
  "key15": "3dddCUVB5q1SDCQH5m16xYMeJFY7f6Ld4iuenbKChK5P26BKJnEGcqMwdF5u8WqAAWYan1Lk8bCDibJV3esHE6wA",
  "key16": "5gFMbsJCkBCbrg64C7tkTj7q7SwH4VX5xJV7xUFWoz2YsTJR8MRVTPK6uUocrCDGPnBdz65rSSZ2ktpQv386EEwA",
  "key17": "34G4pPkQbnArENasGA7s3YzurM9fo2DwBACN9ZqUY7r3wMABF7kLfG7YSFmZTrnhYGpXd4KtEX5rqxjwXYziKfCX",
  "key18": "5dokttHP4Zj9T8iumb4MPTWz9gPN2tSxTnte9Lh5vpg7eR1DhmnG7m6jEmCtzjjwHye35LKpjNHV7iVfFEa8jEaw",
  "key19": "3WPzuYabPMywwhQwdXhR3L75Mr8fPnzFhBi5aPDj25Azqx6nLFDBpSKnozPa8vm4NSpoYmjDd2EPV1Z9ho2EnRd",
  "key20": "4FvFdHnaQBB6LDmEsQcW9vmMufA8c4JbyUtvthbCANqPsfiRY4fRaYZbaKC9Wzo7SkudHjfU4T5onnYumqsDNT1S",
  "key21": "3cwdkU3DL9t5SEUj1VEbvJEAyC5ZVyHouXHQGb9xQ4UAjzw3ddijbUuE9RTyHnLkgoeEBJeMNqjEoz3sswEUQYMG",
  "key22": "4pMFWCZ4fBDFWN7rT21SxcfzabKtAxBuKVftbdPwhT6BDq1SBZW4P3pcwjUstzxfgSTvHZ6Yf7K8DkVWELC8ksDU",
  "key23": "5jzQuFqvRWbryvG4ywNGd7VQLCRQd3Yb3dKLLXJ5GmxVsXYMb1C7koCvaKu1a5D8iae7PuDDy7QqyCX5tvDutvLM",
  "key24": "3Ye1EU5BaYFeBQpQg7EcqzohvwKEiJGxMYYDC2VD9xfjTWpFjFAyf8DZY78UToHQVjUAzR1Ydx56t94zWXfziV9w",
  "key25": "2VKqa9e6d8nnx7zqttVsBebxftqe8GeHS1WwQCH2ci26NWtgfyzTbG8XUpDdvRdRSuCA4ENqU73CcNmmuypnZwxT",
  "key26": "uL1N3CWg1nPTPoF8NUh8y4f2Kdob6LYmmLyLcoMUKmGnoCAAMPQQYT3TyHULv8CgzMfjhZ5dpogfqD5sZvAM7tZ",
  "key27": "4aUFzYB1pBZ6oSSMSKHxtFKVYK3FsXcH2mv5z37q6duuzomZpKCxY8Kqmb7N4aQ5Kcrmn16H9WTuksaLUGz1JacA",
  "key28": "328eZeJHZu6TzjpLornjYpDASifYvTmP2QKZoGmthgztqNWZn1h91vx58fA3BW6Tvr3SNMQX57G74HBK2cV7XsLC",
  "key29": "5sW8bRyStCRrdANv1QA5XCDMcTPYNANDNiqPXV9PQht1C1Y6gUgd8KxuYLdUDJUvxrcymrW8Bq6BmRt1h3BCNbLZ",
  "key30": "Ads5JuKQU2XcAs76Fxmbn8XLiei4CiMNNV15AXt9B5SCnFQdKLcS8Bx1rc11ocpFfquvKkZzYXJ565vKnXmdqeV",
  "key31": "3whowBVnGFaQu2x3ymvQmWsVgKnimVKS6GS7UkJJQwa5JXJVsMfPCQQxzuQy88iDgxbvm7eoKZsxSEy9GkS3BrwQ",
  "key32": "2KrnUMVMamzJDyCgBg3ctV6S9bXLSHxuxQmCcVmWmV5FpbCar8vc3JPbjvzkDu2txJDrFRyRYJt35yYQCtGu3dXw",
  "key33": "3DTHq6xkxvViotra7f9VmgToBuFa1JtfSXboxEBiGM5m6zD4drgb3hTkoYxgKTTFr28KBtg1JbmkG8jzPdofjxdA",
  "key34": "5nohVJwBStXesHrfDRoQF5x2nLwusMYjt3jGkoM5hwGPHpNo2dWKpoRFe5zggjWFatHeTKeiMyVXXoDQDPoaktsB",
  "key35": "3EDVgNt115UYnkHgkJMHxCyBMQKWwz9jtaCBrZn6vJqWtbGXx7yA78oacUNA8JqYzd4Yq1NwNDUhHtBwJqGEZ2cB",
  "key36": "9n2YCTGB6j6TERfhvrWFtUS2wmwa1Uhoeqr4jaVwoDjL6SnkXzTn6NqSBcpph3oZi3ebwa1mzCi6bBBxByWKQb8",
  "key37": "4aSW5ErvTXnAopRRqxx4dxKw3jfa8c2MS2uUkSdfMgo5e52VpsHfHj2mh9ErrJdfrJ5JbgF8EsSYUjH9edti3mhw",
  "key38": "53KvCqVWNArQFr52rUpCVUQnvLcgFSd17phNoFyoqMGUCYaqeLhNM4G7bcJ9vuzaWpWbr48bHVfm3Hn6p1kmTR1n",
  "key39": "2T1gn4QGJcsdzbUm8zKnn2bAyXWgkC72iwf444pDwkigwEXR58DJEC5gw8GczygDz2RwFAuFw6ZGPBCu3yLgAHmy",
  "key40": "5vBpA9VsJvgR3NSt43yGY6Ua3n8kT4p5rSE9bgenSDa3P9aDTVoL2KKVHspLUcjFHLtxpTkAkahvNnBVzCyGFot9",
  "key41": "koN5Bmm3rVGSFvTbjJf4wuTe3U1V7wQ3ewhHMMDY1bGQDxCECEQK9SvQzhMXCGQFAVwNLRxqnAfFPm5Bb5ku7kR",
  "key42": "4okDEiukhxeaXpjxMENY1V9LzkVL4rJHk5VC7fZ9Zirk1Thrdn4JXbRwVXY4ubrdZ9bcQhRJyFjGRTch1518C65Z"
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
