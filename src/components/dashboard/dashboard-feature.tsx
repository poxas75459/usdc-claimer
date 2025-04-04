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
    "uv478TVdnAxkYFJ3Tnjnc7A9qqzSxTUv31t8sdRJVHkNqzwKywZpN5zPYiCak8t2ANEdh4bDindtYEe3sfLofzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uWAJeUEw46QrAURRJ1i4DzkZJUgfopQcQQH7FdtjAsmkBXDPdpjJem2RMocbwJfX7KSSWTZkwYU8vTLSnbDvHxT",
  "key1": "31LGf1j6HPYTu4i5zT6SEhwLhazK8qRythpD6NQT6TUoSHcd1UUFnCLCm3Le8BtXRytrV4ZC4ME1kPRz6VWmHYBy",
  "key2": "5RpxgxXA3WHZEKXTio4fhch6Naz4dmWGYnX5uD7T5VXqJNQ3K5ZKzKHJSz4pFTEPxcabFdSLmRCocP5ZxYWUKaHV",
  "key3": "9MMWVhLTgeT8VyCeV73yeSADgxovDGcEwAxZjTYK4XzLUtRotwqTZnGmR3wMBXZCpxH4BZsNxhNiQ25W1t16gxh",
  "key4": "4xAWTFzE9J41LRZcW5zVj4ZoeJ1CPTGsHah1z6g72poNcZEFYGQEaAf9QFv8aTE7gkg57RTnyZqRn9rTb9CJdhJr",
  "key5": "5dao5AU84YHoHNhoT4YpbcSgWB4amchmZ9a9c1zQWrqbNvieLTmQDs8t2wz9z5mqJQY83ShWMYkQ9KKmLc6PRLCH",
  "key6": "4e62QvYWLAcDKQcUsofSfZNupmBNC2o7U89GtPNCWqqDCvwmWGV27ZkEZg8sdR3E859ihLjMjKpj4CdE97DXYsMd",
  "key7": "2XqA7QziieMzvmDWwRhuyWT7Lq9eLLkbdXEmHGF16Qk8g4Tiq7BpbMXqMLjjAkB1U9WKBesVeXiJ2SuiuMWvUAAR",
  "key8": "2cHXT2Hp9EFXDrFCkK91w33npzJWgafC2EYGZpAQcXRc73646g7453M1i1rmpoFuFJNu35KH3KUc48TB9zR6Juum",
  "key9": "4HjnkBMdf6896aMVNG8UVoZAVyFbDDa28ztzSh4mGYw3NiZBm4KQwzGtQVxPZxyNUaWZanb37B6pHbR9ng1Kgm9N",
  "key10": "5iMdk8qNLzWMrj3nnDVw3dTj5eRU5ZMWvrDV4bBs2V9W9RJdjRkspamvonn43QtbdCoD7hMRSzWCMFprmGqyjRkr",
  "key11": "2hm24KdKsDCYxBUCRd56xhEW4YWR4D7dApbQGgJX6dRt5RyNjPA6kehenS3UmxvQ9uoX68k1Nny8LdZ7aeEdhJLN",
  "key12": "25Su6wteKwhfMGJ4tPFttftQaxH6PYasn6jYpvCEABKfd5oVpWY19ME9NiDkk85nGFGtrk88jMjVpuoC6uKJVAby",
  "key13": "5CT9QBgcc4mQiE74prcapzJotRpqnYB3vRgLkRAx4jRWSXr1ULpHJL4FH7ZpSmKrsyyctQVLeqFMTisjknW4UsyZ",
  "key14": "3NiwvAYQDukEoTx2PcTM6AeSAbQ3J5vNcwkAKuLS5AA76pmKx38edbzYKVeNagXwUC7zdD3puG9JiLtojRqGFdpH",
  "key15": "5J6aKu1nHoG66XhaRq2U1pgo8pHknpA3CYzeA1hyxhv8MVTiVhQQze4DgHqoyEyqba6qu6xxjwuEzzkphpF8dUVo",
  "key16": "3M2gkDGRZW3brW7nW8uxtE3qNxB2pcB5mUraLZ9UdHW7Hnc68SpbYeYb6pZ7xgwvBosRBottjartVTE2911HTUeK",
  "key17": "3fPtsbRbabi1tCpCfqKzrukxC3AgcQXwux2448rp9Q17rG6xt37XnTg7C2VByUXqFSmV8uruoNFT1QvD4NqUbwJK",
  "key18": "3BtwBB3H8wvk7kiY8MhfnyhuDsqygJ3YstRbk6xrV28hoiCdPmY8yWZaaZmkUHnxUDgyrBz6HKH55sUYzjM24Yfd",
  "key19": "2n1jzqn3GPjuTzaRCtdm1TvhgrUQ727dj7RU1qy6osWpvf2ZK8AknT1kZ2STJUSz31s1pJBTiFLcYb6Grc2ioD4a",
  "key20": "NndSQskud6hQ61r7FBM2smDu465k42Js89jwVb83VQGEyYCYxEcKg5nd6dyfu8bcUS9eToMVuyQmZ3pf1wNuEpz",
  "key21": "2jdtGGxAQpkiQNaLWXNnUcRRuuHg7CDwvM2TvTyti6VaLqLU1VK93TymxzP3htazML3ZzMVBeiK8jHYjPh8fqiRw",
  "key22": "oVXp4ZHuLKn6qrZxJv2oAjV48dRGvqrPoExsTQKCsJ4LmHULc93vmD2Gcfo3GVjhdr6fFBkrjgXoTeBhAwCxeGk",
  "key23": "2WdbjEMWRrSidg2UfjaK4DzCtYmi2Ps7zNiDDqf1iY1pv2KVuQk6wr7wKdnnxiEo5HcqXRiy9WBpUhDqMGeBATUF",
  "key24": "3yNaLxBJZTsXkKF1bUFQXtciScGVgY6BTBrC1iiv5Vn7vTwE71qcdpNWyQjScS5cxQHMx3Hp2a6q6sej7p41z5H9"
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
