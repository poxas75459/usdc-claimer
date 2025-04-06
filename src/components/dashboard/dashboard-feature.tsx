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
    "4EK3uKkqN3m3BQUdJsLZzCxtnq58Q2JRahJNLHLHTCGrrFQBx2WWP5nwMu5NEmgL6bsVM9BLWt2RBrVWCxgKf1i8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SibPJqbJsSRUzWRxChcNL7tbrkvSQFH21Jco1sSjBFkKmM1WrpJD6x6d5w9PK98xwseyMhVL1CWPuaj24t5zad6",
  "key1": "46xypPcA9M2mP1aDMX9RFm6Kry6QRVtpraUTVpmnWBMpvK2tWpjjfh9Qyog6rTH5wThh8F6Ko1aEFp4ckPQ1VhPK",
  "key2": "3vX8Q9CZKxePtynDMaXr6szB4o599fNpdXwGuuRWyiptvsoW1rdUPrThYhuXBDiu4Ejjto5Dr8NPuULxnzddV94E",
  "key3": "zGoWnNj8Um9N1yuzi6QrSyXjcqkmpJ2qcwvW9npUAQiKobh4MBeiYQVd3aSReLy6wK8Cmud2FRDfkxE4Yo2c5HM",
  "key4": "2FiXpYD3E9eCP4wXDiQAi5SsYfcjQmenrWPhxJfEccw7nrWrfMVDyE5Cfa3vgxSnaHTXFQEgM26zezQPkDBw9XPx",
  "key5": "5m3CcS9nVgUvMBUtrfUY1hpy9AbzFSfXT8cTGSfMxLWyL4mKXoXD53SnkPjxYVqFXFLcLLKjB1YPKaM5yx1D2GY5",
  "key6": "ZfZPUSAh8f9Q9hU1c9uZebHaGjaqtpAAzsrQ8dTpQgRU4Rw2yYqCExFYY65fk1Pr6Po8tAdxYEikT6VPVuJ2iH1",
  "key7": "2QNknVfNkrhQ3ttboEj66opvsXyspG7VGUnFHJ2kpfxjHVG7LG143ooy5mMFfayjqtRcjjeEU5Cky4FDkAHz1pT5",
  "key8": "4FGDp8k7Sk5VjnPw8owC1hiskCYq2GGuYQkrWgXGuoMZUPERTL7C86DtdNZyizLGARBmHJSJDrpDDdsGnBSPnRu6",
  "key9": "66cabpbSjUkcr8hFixnaHAY7h5RNqtmXj1Li43wc7NuiwhDe3UNbETJGbcKpjJoyfEtZJ4SsxZw3Xw2SMtKiD6C8",
  "key10": "5Bae5juahnzJwa9Xdzq6UST1bK8XUA7ma7mWs1DE2RmFo564ZVeJU4bd99c7qAa2DUZvbdFsJSyqyFV3EzQ3W7dL",
  "key11": "5EQWd9jPe5mXam966LwvXP7ErU5msn1qT5Wk18wFZB56s4b47MVpeLbnZrQjt31hcCZyjJ5fCRQpkyorfC35MfDu",
  "key12": "Dvb1BvbidehKoXHBX2rQhHaZEdCpgJ68JqxXwKKRcM1x7eWXX9Xn7DhYdxTUXT3cuqu2Tw7XiUiRMeoV8DtAytR",
  "key13": "5xKvDc84NE27rLWmfYvRV8fpkBtV1mBCqGkhMBnpQT5YheK8LyB8DUz6omMKnLTt3FMpA3XezkwENL6jr1whbsNm",
  "key14": "3RCBfgdRrbZ4HKK3D6XowbhtBNDdkr1TUH8CBzJe13E8tjGdSJdWc9ZrmNsoqU4RwvjzpasCS8Y8g6YHdU74WrBR",
  "key15": "4bWQf3g8eRW57so7AQeaunyQgRFxttuoENN2ysADWeSEoX8mCKkVdYEMZNFKmrtFxkEUYH85AT5j7AoaiS5iNER9",
  "key16": "52YkUtou7wQNCZJRXveWVeAjK42p32co8y8EbEtGhhMkZeQAPjMZr2Pq6Q5t5LN2RrDivjhefBrorSud7dof2W35",
  "key17": "3fDV5yT8dC1HW1TC96wRq7xpExfiQ2pUQLxn9cZMWBp1ZjnydgDc2tSuFcP8DC7RwDWUEtAqoTEQBtp35mh17Jdg",
  "key18": "4Qbs7RZC9mk9xyjefAGJTrZRaX6B6WN8ZJyjDFRtWMn1FhAjEWgGMVMX9wA8VqRABdLB3pvKJUrKjPTwbB9GpqZK",
  "key19": "5tJeVqDNaXAhS4UPgMyL7ZM6jxNzGr1vF8gqKWbMmxzZ3Fa6yxJod6V6Xqd8ktbo5gPqyTbrtAqEzxrd5TVS4Cjc",
  "key20": "657V17axPfP6yb28CNUMAwZXrs76D6TMSRKPeWi47NSQCBfACg6LAZ9LLEXzyeKNpKEhYNUpdryzViKsukEgvTq8",
  "key21": "5PqWq56bA6VuDvKmGRn1dJzqnL9xyPrxxiCjxExc484AaVHL2Mqucfou3eKm5qWEnMcJTMCzgmTndZt5MBKeprLk",
  "key22": "5WNxsdSLYzuY2KpaTPbLp7E7GSXAMDz1yBBXeeLGweTEr5JDnp6zex44L3uod5LzbR2qCw7HbMa9k5Pdxm2siATj",
  "key23": "5HP5G8UbT4WP6pMASENGYsV5i6otRkB6XnyzKXbuK72U8R96w7pVaby85uehe1rTXt3M4Jm6vZxwuGoVbTM32CMH",
  "key24": "3HCGiBdpPonKdg2pntEohLwJWxv57jwU6vJ13uDD6NwSRop7w9EWd1oCofQa462jwx3Zikp8wkwve5Lu2knXcWmL",
  "key25": "43JWAVVHknN6pRHrTPaqWkZ5PVsczZTaUjbE9rsn5TND7Umxq4LpWWna2wKMNRoCeWa8gqmqF5CYYHbzCjsY6Qcm",
  "key26": "36c3aDyQG9PwALjypjEpD1s8GbNRTDWKnYzh7qXXr4oxj94cn1N58vGwjtJghSpn1cSZiWvxzVam5UeaacDaAhnN",
  "key27": "54ZM2na4QMV6Es7wNgyMW6WDoPgWLJUoVjXRXyYVJ3B9QN7xVZ6waMruuJEXmorASA7XGhEKxAK1c2AttUjbXf5v",
  "key28": "cu6oepGh2R7AQ951QRp1pTvZ1d19MT5eMbV2AUt52e9g7zDJZFw1rqFsu3TZ7b52YLyU4zYEzoq9TG6jCx52ive",
  "key29": "zwLaSvpF5Pex9P7pTqmNqab9A3ZT8Vxg5ekcnPmnDjH7AopWbcFhPvckrzbkvBARZPAGwxJCaxykRQ5WteKRmmo",
  "key30": "cEDy9gnSsGeMq3VJfmSajNZpNKVM7hwKAYUU4k2m7Mjk5MG5XijqFde3A1ZXQN4yDAWWkofX5RhBy6AEbpVEzxK",
  "key31": "3EisoikmszXwB4s4SQxFjnXoi9Y8DxDcZfnzZdFjLwPzVe6n4HipT19gL4SgL6j13PRJoTvyoWViqXFsVz2cz5yT",
  "key32": "33iR2Wq3N3XW2VyLsjYp1PnrKyrXuJ3BZpkbzjfw2aCQGfPA15L1L7s3cXfiuKGToSVpcuEBku6QBHvHLg4y5Hrb",
  "key33": "2u7Lm21EZZSZCWMceNwXb6XchGKND66m9xfcwKn8jS5qA5k57qhfgrH77fCNWEDv28Qth8addEqhyPDMxDxW8mq9",
  "key34": "VgLYQaRbdnoDa12saZjdRPPWr7r7Yq2WxTBdQSGtG2dyVYTkvJjt7gTnZWFjudUUQWHcjkoYUnZYRaDKtNxhmoa",
  "key35": "Qv3etRuNFzrTa7f2G1y1YR9MnV7E9xiSjwmmpZ6pmuyaLF1tBhU2aeHZfjQx8CfrxbQQBdQk5geZPWDH6ZuWgVt",
  "key36": "3VtyMsVjNY8nznEQwVCoj7kBeequwZj6CjPYXSc7BzUxBbLRsfzPtGUME9sgrXXy3hUyunLUtTETrDLWgVgdztkF",
  "key37": "4eG52MgWfWPaPzvJEz19vwq1gRGqyxndwSEBH41B9YdaiCojivrDDZyi4ctATaYCzx5EDPQJCkNwdREKzU263Bv9"
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
