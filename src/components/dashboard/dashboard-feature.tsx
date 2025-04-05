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
    "5yUM39Z8YwyG8F5svDJmDkH3tzSmA2cU6cKeNkvTkYoZyn6HhJyUhXdgqMpcVMRf1Qza5UUEwEKKSgyZ5xqta4YT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fH2w6zrKH5yE6YvmJa3qSjciLsoiQw5hU43AZQYKfcZCF4EaTERCcoVRZGgSGm7N7ERnASQFA6hiGbSnBSfetsh",
  "key1": "3hXRAWR8VyEy2yFL3tugYCKe5HNuzXoMMrYafAnqu7ZkK8YtedW3tbVakc7MhqZRE2rHLkjAPzuY8YXVSSRv4ip5",
  "key2": "VsQzWG67njf91DHrASfkEDR9ecmgaEqcBiVTKzyWgRgGCShNDgvjtk1r5dBopqgoKsU8wCc5qc7TWgzWvZ9FUCr",
  "key3": "eL6NX8KPWq7ufPzG5zNnqK6yXvkDbt4eLd1nDBPyYHLBEPN8WCR6ZMDGnEhGw1Q6tSJtCm3NXzkxSq1PECiuFPb",
  "key4": "Y3KeSdcG2jbih8ieyGkcGLnaUyqstGreJdbQSSSspxNWaSuyoUk77Fc1x2wRydnxhrUQGzwcwc95WPE56wQ6nRT",
  "key5": "3aXTm9yTYt6QSxdwxHnzfPhDCza46XaucYaiQH7AHZUMC1FekSmpKrEij15CCnUUvYEPrnYCgdJKW2ZQEPbAhDjx",
  "key6": "zKJEZvjTQghU1DoqYXqHJ3rsLbi48TktSDAHkLrRELyAhRcjhMqVPzz1C6fikgJmzTTPheeNqM59UjyYD3xMT8r",
  "key7": "5tKgZzNwzPH7RfUxUeUMc87fDU43KA5YVJmnDnK4NoCnwsoWCbVxVyWUDDBWdz878dnm7NjpeZ2XxdQ5LPy6UrbD",
  "key8": "2My7we6mpSJkxJysa5852dWDiP54tVwvs9wX66sL1yDzehKWsdz5Ncas61h8Kyxvfeh2Qvngre2AjHZBs5chui7c",
  "key9": "5gRdVb8Wm5GNzCQFYxepdh8B19fK1kdx7sZXwkBe8dYE2BYfyC1pMWUAAqUTmSTdsFiC6e1DbCiE5Qoe5TAUFVKe",
  "key10": "4jFaxFiWwBds42VUmFFuza35jriUR8pNqi7MgVErxoj24d3aQijryaqWQ1W6nG6bUUaKxeXM86DY82k9YCvNjxPU",
  "key11": "38TKVmfRZePEieyVkcbRLuzHGvUgzgDRTb8Q9FJhiLsp5VC2TJrYTxB4bbf5k4EdFQPqxVJhcK9bpiEg5mRTehrt",
  "key12": "4BtucWMDZf9v4QQiYLEpy9ceD17Rx1VSYprghcnBnBqB6hz8Z4GqYpmVKjTYLxrR1ph2BDud4qJhiTpRexmSDAxw",
  "key13": "yYgmLXDk5F7834vR34bZDo2t35GkW2hTeYa4VKTimBJUWWT4NngpoKVgUy1U9pHipaD7hbukXaqeGUeNeam9Tn2",
  "key14": "5hjFRkBqLLrZfuGHmHh5e9U98g1WN68GSYwojTXK8Xsu1rJz9afA28V88YdtquKMaA7oSphYgaHre8McVPdH93Pr",
  "key15": "5U6Rs9ExMF3qiGAG6Q263wEthjF49k5hicAF6itU2DbQYmKqVqUdJBD2FqAgMwfQj7J9iixC7kUZ7GqC8ojBMqmo",
  "key16": "5XxgghLA4pZhLyKzNY8Ao6qsuA4G5irdudZzdn2X9kvw6TeyFAoM2xwBDpbaZvSjPRkYoCWenzgALr25hvaYgxJ1",
  "key17": "2A12e8S5m1oLjh2jxr8ZvrdDvY9JVJmZGYr9m6WqMo5Wi4cx3vTnuhKfg4dmxkQs3UM6v8ZKPUSdFny1BPpwgweL",
  "key18": "4xQJ7TFCSLieND36Xa67zTJXwmgJ3r5duf5be7gfcCz4QwWnUuxXcbxAHJEgseyPnLTCJrhXsvXPaJPuzuMhPVsu",
  "key19": "5cy9XRJ6YGXdoGp7X6QFkcVDBqzA72fa2YFEx58VUtBv1oTQZUJRyq8Z6e43dBwdDoQcoLqBqzXohRkQNQwFpLVj",
  "key20": "2sMCwbxZU2upUZxtLms8L6uHYNvfTw37pXs25EA9mi5AocK6ursttKjXiXFSXPy2XxZ7Dtuyj2Db2JBFQysQeryE",
  "key21": "3nmiFYG5nuFUGxYWfo9Vy6h6sZgDeXTa8ovfk2pHJWTbR5XNHDZ81d36Tn26CmiAw46G8GaXhqQex5GvD5gXzM2y",
  "key22": "2MYRNhDffF4usA2uHruEgtSNK84Yy9FRPLd6FV8ushrGvbYQWZ7wAkHGPEiqt7LBVvqV7hLxR4ZYusDCJ3K3DpqP",
  "key23": "3JhS9Ppu5PwNZi5QHDKfr7B1yi5npULKEGZTW9znJ2HnqEio3SZd6mJSgt17YkLk4gCPQzJMy3rijVhsKc7dgoZo",
  "key24": "4HcfqP7UVCeqdvsKMgG47M2nR4QaBFjjYXGs9v7SKQ5PoZaHwUoCAfwZEc2C3wLJHAqxrDd2byzSVTPze433EsJZ",
  "key25": "4SrGkezrLBvmLkwMcHcXniDAVP6GzvNDan3ng9SpAndscvK7TNjTB44j2mjppvwP9Kx3w2Mysm4mGXs9zWcMq6iF",
  "key26": "3SzDvqdT9kkMoGD3UCZxBx3u1HE6ju2TNGYgE9mL2TQqDSv7kJJCH9TNU7GBAc6RyB8vKySbJvDmP7672eLmxJct",
  "key27": "5UFFygE4k1FqqjtjmUZE9SRkpFc5adj4gqKtdtHnQp2fVeBd8DtqoLDGhceXcqy5EakD8NDywDq3NgweoysFvDAk",
  "key28": "47NFxZudbCvvXVCopYZX3yTbnNwCzV45WYv2uFgXjM3wSSUKzKTb15Js79jQ7HJuCjz8ZN3jozvq5zFam7zxgHt4",
  "key29": "5H2igVuSMjMEmXjSY98kQ58tncrErwQ924Upxo4b46gfqzfQyEvP3ATkbg3k16Lose66doV5yrXE6dg19XZvqgEG",
  "key30": "Wj3zKjg4Ad5H9XcwVF3D5UF81e7hYQ7WiTeot7rDisDRV8Chf5jD1uchyn4wPC2tt6wnqNP688TivxV2UBuiSZx",
  "key31": "65zpizYPG3vKFPFCuxwRci6tiyJ21Avh6kjjBA7zXzNMYi8mKkFgv1YP7jMWSn52GPfPyzSKHQPfjNUgeQqh5TdX",
  "key32": "5oqP4qfNugyZQy8g3Q6XQ1wwMCMMSxf86VM4hHvNqRLWSVoSQLoquXEKNvZvo3QX9QF9DvhkNHZCh1unLzGqWwD9",
  "key33": "Z7x3pQ3ghrNcWW2FjUcHo8XZbH9Msy5EZTh5csrr3189JM8imtJf1WdKKkAEpmvJnWTKTDMkpscwzQ27v7j9Ptj",
  "key34": "2yormwCRok5fCy8J3WyHTpq3XVcKXs1qSMKigEmFN9hS3wJPjL5LbyBKstnqebaMHB93nynNhGZbaxAvRBRmYhAC",
  "key35": "7vbCaaeRC9DbiwxtpzFAAkjPKBhz7LYBDR315mReFCY4bBjz8iMVSKWN8FHre5UpdSLTVG2EpnL8s7wuNnpjAVk"
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
