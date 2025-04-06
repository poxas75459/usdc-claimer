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
    "5fQpsy3c1Jc2aB9HDiP9dRgrTotXKDnpJpLEPzwDhPcuXeSRAG9kbA8tNixcZ3QxAP4ER9KTaDHtt73AMawJZghi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qkDvxdH8kikfwQjkdynfzjboMYsXotkQCViEiA6Wgcet2zyHfp9Dto4sZq5hjd6vSKMVkJEdVkyARyN9bWvEDb3",
  "key1": "3RnqyWC932GVGb46oWGS25N4W62E9CsVrYQudbR4UUzp1d9d7mmNtaSFRTNUuGu3w59dboD6A2We3MDtHA4qBhQw",
  "key2": "3hGc3HrffvjAwyFkFg7CgPYeNcKHtxDwBb1VMLMrRvXa7JNgApruPouQ3ietNWAWvcrwS55B5i23i8NrQE79TcpH",
  "key3": "5xS8WQ75mWwE9RyXNd4MSHS5hkJafCMPbrm91Dc1LygN6NX518MKJdzafmkqKnpMRQg41YeGYs7D77CeaWH3wcRy",
  "key4": "3opARgZEhAZ54Z8AiKkAAnRmhVSxihqVbUFixrLGF8TJHYL39BFQcmAXrvttppQbS5vP7QaZiF5SNPjc8btLV9hC",
  "key5": "3Nx89zAnzyJg2BjrBvfGRpRqCeuYFV2XmUkkwN4ZdQcbWmxmYb2SQ7Y5Qkjr8VXk4CQKtArNSZKimMo9cW5VMgFG",
  "key6": "9Hmo5YgyTbgAo5PaWqZ6etLVojbkege3m5DaiAFVd76YiYckvjq4KaHqJBS8XH8HoPUeZaTfpLadEvn111G33sV",
  "key7": "5Bn6thMQRMZmdGhUitLZiJPcU9xgHvv6SciYY4bqkwWCRRJniUsBrQVTojdjycf6ozt9D5Xj2fEyqZgdEtu3iWCF",
  "key8": "EQk2MwAWyxQ6KGwsSRmYEbYxrGMTTNfjt7qSo9AANkHhqsbGxBr6msu98fN8Bvpq9gWX9WxWuFoayHyzRuWyJMJ",
  "key9": "2nQYhe7c9FUa6tgoAsUuzwDyo25nfuZfvPoDNAQ2EWTK98mQvi6Zgn9saGUHm2tYSt8rDyJFtjqbXvqm4Wr46Du",
  "key10": "4Y8KyYJm6sAGqbe93ZQ4hdGWRp55Ldz8f2nApZHyJTpMhRBtbWaPHXMNi1XSPx4QcNi8m1Y4mh2tkdDoGFpLFKV1",
  "key11": "Yo5yhuX6gTBuHW17ijVUE6yLo5etyvr8kUCeR7ALNqVCiogkkLdSpzMvbLKX7Mw4mtcRyr9LLUqRukQ5z8DtLLE",
  "key12": "3aYpHzXxCf2cUZV1rcbqViirbtCr8y7Fp7cL8jKJfKhGsnNT9nYBbuqM6bXhsBVioMYaa1PbjEG1ibKoHWyrkdBi",
  "key13": "2jpcVRvYN25WGAwH98jCxdCbxqBB22r7btDFPUyyeCSocwWkTi7qMirBn2QLwSF85qYCdsHt3VubizC5gD8dam6y",
  "key14": "29S9zBJjPSJscB33Dm4A7NMREUMSJ1U4oEaMTZrBZdwZ7SLEqAh42Q5HGbvMhMoXbiYnwbH9J4x3YFE1fALSStEU",
  "key15": "5eb8JJZmkLjFnU57FpgvmvKLG34FurdfFwPdEvAksDTzwwdZASrPyp6ZVoyDdHCr3NgRvgbmn81qMqyfdWctgPrf",
  "key16": "4UR15xoL9fqLcJYzYjbYUUjQzJx41WeUCo2Pe5K7GfAaw3jdQ8d7pHs35XESockFZ9PCVVhFgT1LUDAPyCSJfzUJ",
  "key17": "oAi2X556aT343c2PyU2xrpzjTqetkkveTkFVbH8GvwrQPbKoCdqzjwkzkByCBnjrv3GBChzuE9yXtLwzapjEWzd",
  "key18": "3jSGETBzxc579zX3MXEZXgP7Z1o9qumDpkQm65xxq84jKzaCF9deJQdqRhfs2S7Yqm3CQNwDSg38Ka2T3qP9TfrW",
  "key19": "3WQn9pqTj3Ws6FeuraZTmsqPpoiVmb7dWXo9NvnpY3oxoEHFvoz8jCn1AtybXoaVFGCYy1UmtwBRYa36oeHweExt",
  "key20": "5NAnYc2YguJ7NCbF5rHYgrw5eaBuAzkbj8uDXQrNKg7Bs4wy6xayGP18F4obR7zSJgePPEDeqEk6NMV7tWgwXvPb",
  "key21": "C4amiPPa924xAwj9Xu7eVdy1bn2Ah14uv3Bz9YqkY9c1SMMcJdY2vWHxwmkrpFWWN4XuGJYshzVuxARU9bXsdPd",
  "key22": "9mrBE1jP5AvXVH28qGEfFLS2K1fhAQnaWh4X6kc6jK63Y8e1wKjmhtEDjGS2YScgE4DfjcjAUctRnDFSoNV29Hz",
  "key23": "4TteeAgZEd116oqZgNfLi46Qt17maZZzmShruejgZS6EkLaJ4H5r52fAZipqWRApuZHqeT9myNrqJog8sgBMmV6N",
  "key24": "48VAy6NKUT172govkSNsaSQsyqCEjo5RsCDaYTfnJLwFRF83VkT2XWe28ZNNZLEpodKAWZTvLGRhc3n9B7JiXvii",
  "key25": "4hDDD8ML4LAfzfYc18zabm5EB2AkVr35dhnVmHfjaUJbXVa9XNiKyYhhrZRTqoCH3XkkfwjnJZb5vrxVRwqHBmcf",
  "key26": "26DEQJ9hfo6ntdpiVNXoPujoffk8eD7di13tg32qLA32EGro3pPrsntnJTdD7L3LeZ8RkSVG6bvet65hoU53b4D5",
  "key27": "CgFBCHyXVaeLsbbksoXYf3kkmUgs63K4uCxfJmsQodkqBksoJG1uSDZ1TmYa8Vk9RGftBjsC74Gj6wsxKqYc7gn",
  "key28": "2n6t76FN1sMRuY3eNzr1UpSYit5csMrMzdPdiFi9mprUn3uWcorQNK6NNzfh3Hq81u9z6gTQ8Fmn7UjPndZv8Y7G",
  "key29": "3KcYAupdTznRqZmLHWLEp4pQmsE3r9sneULX6M3mooc7oRuvPFrdWwSh5SZhxnb3bJYbrM4mEMJhfzUAa7BdxZ9k",
  "key30": "5hmC3oxFQiEeZa213qwSkjXNp8QJ5hLMXpkQU7CRF1eqSjuN8u172NqDdvv1XGD9HYrEGzXyHq6ay95k2akPdWDE",
  "key31": "EDPcdbCaKTEppihyHkGFsBs8LtRbJMrVpEe3W4x2pbXtUzShXDHCVscDdsj7r1trsr8CTw3eBp78GSAXEREWgxB",
  "key32": "5Jq3FwYx5q4DkjxGVYGfT9gd1iNfCeaXSAhqKXYuVzxM1hY9Qj4VbBRYLjoHZGiB9g2S9BeeTX9VZmdzxUdQr551",
  "key33": "joyAjB4sKrg4bx4ntWjFP13SnisAbb9tAMJT7AakhcrCiGSUYvWbos5JcND47TSzJuB2nNmWs6vp5QNBXeusV1Y",
  "key34": "3pSXwedeHYShfbWYmDPdSeLFzbvPRdRKPuLSdRf9Vft2XeQbX5d8hWho42Rret27YUQutFwECaJRvoQ3vZRRWzPt"
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
