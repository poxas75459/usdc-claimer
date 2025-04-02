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
    "9UfnSdh57gw7RTkYDw7r4B5npGbA1aJuNotfw5zQdEcNZmmdTFaEvacv3akUnAeFuKHcNTPyEXf44PvfzujYrMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3byrWrDbBWtcm3fCqT1KuyxBKGEAzrxTzjEXeHHBnarjKo7SkwV7wQnwYMVTQYK821R5CUnZKEjypjemqzVAB7oi",
  "key1": "3W6KJhZCM4KBJAxZmz6CRLfueb2DKVorsGQC1Dtx9kiyU1UKQXW85dhbq74tX6iGbpRHK7eeGYppAvVkPLjmYDk2",
  "key2": "4TnkQAKxfaeT6jhQzAFv84kgdtgRTTpt1ADUJZ1CqpCfxk5jAm2xKRXi5Mq85Chf9N5RSUu8vG9xBaqfHY17kYiT",
  "key3": "mDQWyvS2gkXjU1wLnLgLcuJktZ8RQAdymhaiidLxFgVNigUAt91XsNLXjvbC9ZC5zhekwTwJVY2rL4NRw5cAQBb",
  "key4": "4iJVDeqnbi37W5hwQHZ38VY8z1uQhNj8y4GppUwQKTt11N4Rb493rLfz5pUh1GbpZfvhfSsv4LyUCnKLYFUseWpY",
  "key5": "3XSXXnxxPfqZcTa9bkGZwEbXLs7auwYAZGzAR2GJnyspuTk3YNTT84GJZGZp4QQv2hQVYxPtukD29RHYzaA9PbNp",
  "key6": "QrtU7DodB8gDSQEt2Qz4BcZaPPKHkkKRYTTzskgdXxd7vNaV1Uea1t72aqoG9ZUAMRoBoBbEdopsYQy363jpzL6",
  "key7": "5fu76CDJgUvv71iap26rtGCYbpTCKFiQDRu18g95aFCTzyDPbfK3HdTSUPR46DvVALoXAfaT6Pa4YLvEy9i5yc3t",
  "key8": "4A9M1QWBWmYhpqSzRWtphzsG4xnmmThhhB5hfmn3yhQysQp73xJjtkd9iyZdKS7rhyM3d2jEfBMJgaFHWx2k9Mwt",
  "key9": "2VkE9qPTALvQGDuh2DWgwstpae5WrBkTnJ97BvTU5Hd2AKk8ELTa787LBQ1zDWaNAGVX3cYLJdUgHouUPHP5ZKp9",
  "key10": "5NY8Av2EwR4VwLkqVLRivaCQstVdTz9se3yeWfToE9cAMDuRc6H9eRRtD2pG7TRceoF6kLe8RBJG2bpi88jVdFQC",
  "key11": "4CfnWxZSXBYo2uR1ufceMfjQANAfLJfyi47MSUfMQEJd85FqJ2nNXDJMyehHWtT5cRLfgRRsWE2AoTKUFpBPv7F6",
  "key12": "4Ki4zuH4MpKHTxUTPSbettXtS9agPMbCDQuvEQvAbzxTjdFc2k1KaqGM4LstQ5UYMM2A2iy3xqQeQEdau5xWw25S",
  "key13": "5YrfrXuMBrCq7SqwVZSUhrxqEfjQymVq7CnvGG9eJ4ZT24DSPKvqkhu2VKF2mEdGHw2gahkYqAyLfLqaySnb4Hbh",
  "key14": "RXh4mnPhKhr6NEuMPiVoXJ3e5GNrisfd6iF5tbFgEJKAcoeWJjvJUqgyvXVEzZkuDGQGWHxT7EPFxrD8sZfgUgL",
  "key15": "2eQWkwiegHi44Rx7T9RMEh9RGtAmhcmsoLKDzbA2CBZwEWyerLJmtMe1gStXX47mBZrUzEnYdSLD1LDc686kAH6t",
  "key16": "3rWGReMWhuRWHz2gbACuLA78KoNZBbVCbMoLwQQJJCiNGvoQvWkj2wpeAWwmTrgxWGy8uaGVphHxV5mbsJpjNzds",
  "key17": "9uP1Lz6b79M1MS1ZRx7WCZDcBzXDVRqAzsCfsPJ4QttPGTb3CHTevVRrPzvM2wbPa5W6hUNJwyTjEFquyT5vWne",
  "key18": "42bvByyMc8a7u1D52eN1hhpU1sp8f19JE43LZKyZ41h1SvE7K6AvhVKm39zyAgnnBgtQK5EvFitKj5qwA7wZUZ9E",
  "key19": "5fsT83h3gQjBpapwgcmKvyjT3noEhazWKSwJ1gwnQAobmRNdKpwQuUcaswLFrhWrzSXgBKSFtJhiTfSNjy2hXX5F",
  "key20": "5mKisPEpLqNsrPvRnXbnSNpBDNVN7s6hYykM1pka5vNf4UagTeNA2Y7Gu36MGg3Exc9V5i9t7kiYZ7FuS1w9rdG3",
  "key21": "5foCawLDtiLfmAEyaW2Kp4YLhQR33n9LZ7PXaskXbM4FezEJhPtre8kbZMMK5FEViHM8PDkXgE3pHMRZP1aE4tJm",
  "key22": "5KEeq2zgWSCGX2NyfCcqyaHEaF36R3oUNskko3cPtDu6UWBPtuGZ4UcXK2D3jJaDQd1Go1QutK4M2Nu4afkwqnwu",
  "key23": "5MTuYGmhrJK7ADQkJxHzfKKK733G9SZoJSsoKUpfuMTJkHyHhjQiGJ1KC72D356J7rFnQEPQAQFxYzp2Dcb1EZuB",
  "key24": "5BkUm2Asnwr7kDBRyVPeEaN5XYn4Es83JqxD92ximrPyBBA1vnPvXnHn596UidukTw8scKZGysQChLpGxEZmugMK"
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
