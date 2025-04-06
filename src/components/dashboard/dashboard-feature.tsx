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
    "2htbzJ1aprn6DCMFXaDPskptU8CdbsmD648pRHeP9UPCByr2c3ZuddnaE6F1aVKVRUGBEv3YjGFtRUALta5hNR4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ZxAj3fmXmUssb71yXgiFAbPv85uRzwcyRELfVhehEtdeSs6SNBK1vdWX5Qg5ZixNCC8GX294ZmymDvdvT45y8v",
  "key1": "2De8GwnzGq7bn1yvQxsmuZdKNbpSkjy2X8qtp5P5crcFcZpA9qSWg8hRV6C1iigB9mJPwAUoafTsdwv8DY7ft7ad",
  "key2": "CMks9GnN6rLg6q88YTbaxy2oRyfqrxPqgkmtnqWQgxtWB6zXvaopJTqCD4xtS7RrtK5qyeGeKrw4Wo5B1XKdDgy",
  "key3": "FgFrPRKz6jxmb1Mx9qc3LrKodgJZby7hNxcSVSYCrDcL8Z8XJdnsMW7qh5tzmSXC579Uj1xYDQvhYyA5UEQkoFu",
  "key4": "3nBsMx4KLsE47nE6BFaAcnoe6JZAN9ekfoeQjiM5Fq7xYgZU4riQivsaj7GuS7epTy8BYH7oWbjXrWFw9sYonCgs",
  "key5": "jF15cPv8rEa8qQDALuP12fg2pHk37BnhzvixvR1hResxJ35tEBmQNjkDDdwgs8MDXEjmKECZYZoYjJdaoCkTijC",
  "key6": "35wsZxTe1YzK4pj6R4eJxEpy9g6zX9ufNFdpAZWiKYTRrrxEPMif6UgUaSSkrV1nieoUSF3pjeJp3HpMQEzyk2qj",
  "key7": "59EbizoKDJx5NNQmPNqH9vSRcD4kvjY2i3FqquSAuYY7KrCvcnbenwr4bvBmxEsQUirQXfnFwe8Aq5b9WMxTenrk",
  "key8": "3pkgb9NohQ8kee3sNvBHshAYTL4pDgbbE6ShUyQGktbpz54BgBmN7dSpTNuvQMAU9DQbjherCKywxPwpQvWJFqYK",
  "key9": "PhneCijHa7PCHZLChzU335oKqEq7Hz487tK9syXVrSHzKtipTHPYmtb9aZaXyiRhYrcobTK8c5HyMAAM1vvWL5G",
  "key10": "2nvNZK3UPtD7J5hq6qGDqTBtfjGGfGZR5SSjPv758WZMUZENGics7WkAK1c47dMTx65ghYbGF2JXmbV7Zw1W2XAL",
  "key11": "gbpxX3hvYX7rW2xuMQzgW47jtKXV2ouGeAqSAoTJsok65MPZaxHURLPQP9vQ9Mk6QnxHxi4wyr6b6CZdzNBP7z1",
  "key12": "hDCxxwiTEhs5d1JjSDXh7pcg1tr9yBRjnktqKEaYxRsoTSDzoFzrtQBkdnPJKY9wmi9jmCXrVgTkRezajtETAeZ",
  "key13": "2hv832xM9PSVV8Df3VMnDqYghq7mEyghKXbptHUiUEyCYiaCCsXHE6ChZ6wousWbAtZH7Tm92YgG8owSdzGy3P81",
  "key14": "3LittQF5Vw6T5ZDyw4S8GXPzngpEt2P92uYSxDs4sRF5ASCZCy5duHeKebWg62tSstFtEGEVg3FqZHCNJyiBScV6",
  "key15": "KsnnYUYVDNwR9mCrtk3K6Zj1mgUnYcQM6kxdiuKjg1N7j1AwWsdcaCZqr7QyvZgWmVo9BBhjoJS3vJZcJhhocAk",
  "key16": "4rZgeHZiekvPRGQNaMPVnvk5AX2brknhuK61Rf5XdzWjtxsS2nU2QHSnyz252uAM1sSuS8zMAEJtrodnikEUYBw9",
  "key17": "3V9ntmrhMWeTju1gqQENoH9i6q1NpfWxjskSqL7t2ZbWgSQJXjdmvwLgQXJkBUYMi5vFrc7twyXZmrdboaUqmSe3",
  "key18": "37YpggcXyQK66XEAJDxcfAKnBTEa8uJBHAAAuqFb3LBmLJ6TZo6R523ivNVsPW9ciiFwESb16fWaUvfpY3MB782t",
  "key19": "5Gdvej4KHZiwnkCFrarLi7J4fy3TeN32K13cH4bHjGcQ7sFbRfGkQY8FBeV6ZE1WEYwVM9UFCJWNmq8kXGiBT5Hf",
  "key20": "5xnYgu3i4V3QUhcWe7UYUWfZK3wiuT5pCyHWd6wVwHZSjVHKisZa6zttTTvqKH7yf36VkrRboTLANr8VFbe9k8qr",
  "key21": "2CFwryYsDmudVkQ3y7MjZM6uyU3ohzEPe49QbpiGjCx5g7BHSEpcxFX8KfAcAYRr8A4ohsBSUtQe5Rrnstf6keDB",
  "key22": "47Jp5e7gFT3LeN6J2oLiPGEdRkPAqxhFGG1RFJQ3ioPHmoZVj7WCayXnHUX7kMRvQovRDsrGSxCqZLQyJ6Q7S1QT",
  "key23": "4VXaEwdTbcFpN6vvCbge7RL6shTGaBuPhxdwVsfpGpyjFkTjqeTUUX7pa82mWp2KZLwK6sbMKx4ji34YZQ2YbS9K",
  "key24": "2AbSKk9hr48Kh7AQmfLwJRLJXZo3BEb8nGoKmQWq6tKU2CTBHt6H5i7ea9QpAX7MMi6qgyguLB8Rd7ZiJ3D9hgNm",
  "key25": "tJAg185sU8mRzc6AqDsRyixx9RXTo65ooQrWVyTobANttX1efq7Kd8n3KvaP31ijwuYBekG7hqUMe5BDSwvUpbr",
  "key26": "RFKGwKvMzBriS5WcwGDicu9M4N1Rzr8Sc78Ec3jSXmwVUbyfqWihZweRVkDseb4zDT229kxGRojTmaqFVcTCcS1",
  "key27": "5aKoBX5kSKSAg4tohirFAtGtubY3HBt3NRZHW75tb38S92kDtVXyFtWHSxpcHJPWx5jNPS3svap2DeWHhZZkNRcD"
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
