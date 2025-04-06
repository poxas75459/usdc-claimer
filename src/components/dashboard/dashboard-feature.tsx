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
    "34L9JfZn43ZXTUXduCBUuttUqofuX4hnPsEwbfcAwFsRAzUE3FPxen4bwSmNMkCwF6c2vGK93f1C9Mjk6RPRpK2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wh7guk2yza6RXdh8ZwrRpxREjGJLwt4BVQHiC2U4NysKyFLZKmr2f3oy8YSLfnLmW1jvVN4t2txmScVdzxD8qNM",
  "key1": "U7p4BQY14rTELSpvzE9BdjtvYKSuJbbrs2WzKwrdoa7CySee32aPb3rxFGkV8wyZhuYWsFtXZrJShzCQQQ8mX6C",
  "key2": "4erucEYf6KxHd6F7KRyXQbyn8ePf8N1weTZrJap47Lgw8joQ4xd2mYgiAQusQnT7APm4ZMo2hW9HRECa7w7xSd9L",
  "key3": "5YiE7vaTg3Bp6fHQPnnznhtDFFgc9eXtKdhCiiwfM6pieMTjmvv6X9mcW42UootJ6aPfpLco6bH86Ewcr1BLib3V",
  "key4": "3zRsr1XXvZfJXxBtiNRu6MKKtSVrbU78jVTTjxDBP6tsMueKWaGpK1Um8bmn8j5mBnvD7dJXx36jrY8aMzngmMbL",
  "key5": "3wqxpPNC2CChf3aooqfGUn9ZbBhDCiVosHNE2Cdwt1MBKcH7iii8Zo9y3NiDjyRgZKcwbAPKbegF6rE5nizMz7TU",
  "key6": "CHeQayRXAdBJZtdv2381u8mEfQkFBSfpC7JV8Yv9Mgq2mdm9uDHrNHd6D2twagXAhB6fo5f4aRAaRUkKBmRihY7",
  "key7": "2kMQeJJfkXAYNtN5YpTSVAcQChcue6Ae1jrvhcFG88op7G55SRmktDZkvPH6aMD5PXgHBSduaWNiw34uMUXJ4fPj",
  "key8": "26ZHosRmiprGYX71NdAtXnMhKzX5tCk6bSpMyGidAmhHFYrhtYtwRdJtseEAwsnZk98btqbyvYeMg8NmMvMmuCqj",
  "key9": "4CnKtapTrgD4Kirzx2S7nSoAT4G9WUXVKyhbA4e2rVNtBcSDWnCcP6ugU5PJeHw4v8uuRkkpJzbhTKPJEdsB1xFQ",
  "key10": "3VqFuWPqbAkjqHFP7nwC8LNgWqJJDBRd1H1scd3BKXzqyweJeaxW135UYYr6z5qnLDBzKVNPUrXVhFvACFPPWDtz",
  "key11": "HgHjiVaDtA1YFWwHBRq7Yfusdqnn8hXqnqAZYZ3RtTRgSkVume542WwBadex7avtpbNwGn3w1QKY6caVVhWzhvj",
  "key12": "2dE9RZNxyNGBGmgVG6wUxcha2rEqN56ZZ9G5YBYkgnninBCYUek6HQbFHvJHTkpBoEYtuvfjqFgNF9bVV6XupfoE",
  "key13": "PpfQQtcvvJwf5CisQGir5DuQnEAhS3LKgoA9mMmW1NWJzQYAxzEwsDJmwV2aVeaXfQxEESYbcdmBNFQQux4RD28",
  "key14": "5pyzHHDaKnme6BPn8WgGczNQdNbgSTCAnwSyJfviMv79W4LHtb9hoQsf4mSCG6mjkQhMxxZ6jMfLe5QkodLsiwMX",
  "key15": "2pkKPd8HpFpYT95r7bNy4YLasitwaWHmN7qE5Zz3AzDKVcRaqBJSvpGJy3CbgAc353g6iJJ339Wem1aeXWhn9x1Y",
  "key16": "HkoAQaYb4E1DS6sCzvGvTZMHTNBZQiSAu4KQLTy7xjX6z6N48HwbAwiCZA5TnHyWUY5qSofWHNy838EAMgUJsxv",
  "key17": "YaAcWHR3aL4CBQzQ6aDshc3oZFUR5Fw5zCZNsfYfZBBSkAqnMGxSHUg6488AnBNNzBJuD4cfwXVnqbgF36D3XwV",
  "key18": "5Uv9kw4ntzQNiURopyA1NVnuueobgm69AHZMTuUpH1KibQHMJqpbDefUVzTZ3byqpGN9RG2MDdR3BazbXX388XZm",
  "key19": "2xZD3RXUS8C3aNGtPejcStsFxgqKUc5GSt6kTBRSFuSLubQq6pk4E6hZZMJq16bwamNRVXA8GdC8qrrrkXgCDWUR",
  "key20": "2Gqf8RDWtreRMVKBHdPgb8o8m8BS9PFy1n4jufuDMRF92Tf2vL9WpzQfZV7ixY5KW88Z6Wcf3KrdKdYwnwaV9u2D",
  "key21": "vfnACDEtXKcWk1JJBTRdvcWNNk1ed9DmAfC2RD81kUg7fKck1jAEjM2cD9bMNKEp1C6bHjgXDMqsndAZ4oWsjJL",
  "key22": "D5dpceVEihckzP4a3SuBd3Fu6fFZNaaqbAxqWvEWTnnVYtFDBkWwT3twE3GFgz72zQZVrcALdFMp9zETskGDf1G",
  "key23": "4VfQfNMs1npAKVju5DsT68cYL4RXXS54kKTEHJz214EsjxK8dJUucGsALhp9jhPLqEoKonT4NQresadE2EC6CVBK",
  "key24": "4K6hnbs2KX5LvXWo2DqPb2QNtEU1xEFdvKCcp3p55UtWgrShD15fZvrJnmbtbNNaCYsg23atU4ecvp3LFGvwSQkW",
  "key25": "4bTDCiyNFkxfb1j44jJfdpnDihvsjR3U6TDQYpFZ3BckbH4P1e8oFBwamQHuKyW3Pd4J1vXr5hKte2spCrotZhbg",
  "key26": "7ud6XD8eKGcLrCBVUCyowrPNpuZtzt6vyZGZQyATrmEH7ZbBHjmfeSTWQLwd3cp3SSnvVkAXdzBStwNhbMB7iuQ",
  "key27": "3yizsZ6UeJjdEHt4XGhJnZ2gowETDM6dmiUXHXhZFZYcNSCJf8YgPjFmHnuXjDyYAXbGcJRfaFoEuoUv4x9U6H9S",
  "key28": "4jvAesTSGqYvCrm73ryxhyY9cTLPqQSs6XbGFh5mvrAyR3nZxnjyYENZN74AuaFQETGp9eyuq6cb8jHbPqZM9iah",
  "key29": "ToFsZX7cJ6YLCCvtGSRi11hN8HjFaLSnEDsNcMUZDzVCX5JMc2z2Q7vWF9szPTDAmqjy4g5fvM5P4mVJ5EXpA5z",
  "key30": "5SNXiD7WWFybFdH3sdAGT5Zwg4aybmTvRxvj68gnRAUHeXDwo8VrijpCKd1z5zZnbRcVsHS6NZyyTtRN6eZ7kRFM",
  "key31": "8vDA47AqQnjXAdbktZSqD287fM79tw9MLEXvDTCRzLLRvK9vnzinj8oxpvTYj6tBhWaoVmgyTsvVmH5TSJano4A",
  "key32": "369JaXkqGJ922mxveBzfbB2VLZbMsNkSQLRgVtUDaHTAiyJUc2eh87K7Tp3yL8K3eUeDHVX12CaG8mjLt9FqeLee",
  "key33": "4tht61RfwFy4taaivgaFgCHVozj8AeF2uprXCdhK8UXpnhRMGU2CmtZk7AET8JzQaHYHy2grBLnHNaqg9iqeEoze",
  "key34": "5KYTzCkxV3b2b2GCcwpFFnTXxLpeVQc3McKgbt4sYLrcFWQTzN6tTfQUoWo7CjFbRQVgu29P1W2Jawnv91ofETRM",
  "key35": "DJNBseeh9n69xthg7L6JXSgvgZW7aKE9LVFrMgfwikaF9p6A7psk655hbEgLDPg1Z9EZN5cpE5S9UT49tTvkvh6",
  "key36": "tihMLEEop8pV8XeCoFUwyFS4QTcueWdJ6YXeVPwvjsN6Wngxg2AeBH8YmoxUDMwujGvETnZgQeBYrKmVYzQKtsY",
  "key37": "2vapWPFHQrm279Kxdi8uu8nC8z6M2mZMY8LCMYAMQ4NiRkRJac3v6DzfJzdJn8imEn3rx6NvX5fFobicHByuR5im"
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
