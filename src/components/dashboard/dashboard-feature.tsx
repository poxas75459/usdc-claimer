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
    "4aBDpdeehHmoLKj9jpU5ZNqDGgTBT9hB6AmqTtzuCydrtUJ7M41ir1UgZTres9jcrEwKeXrwzS9Qv5QFoU4jYips"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bGkKaoZYRM8pr4f5ubu3zfnpxCFwhu5nwAHDo6iBtEZxVLj1yvVQ2hZtbHsw1fZf64jDM7TkGD48tT5F2WZukRu",
  "key1": "rvEcuyNFTseDo4bVxbTtKEyKxCUoxaq6wxYsCbA2eMzfTPCkcnJaVBqaGmbfM9UkhXJLjfP55ixEr79tDhMDhvs",
  "key2": "5caH7axKrrqsVFbxzAYh4jeCGb6vKMceF45kdAZqv22KuNHTLNh4wp5QzR363zyHCEsmnEHcRQonixwQB8eg23PG",
  "key3": "mKQhU13qaNZQzNcmvDCBF7tpz2Udxj1Y8EEsRuRLe3kMxLzBxaaRpuNmvghspvxv9UKvtHt274De2BkiJrEzpo4",
  "key4": "5NPY9WBk91nR396fJoYrh9aBE49DBksNDW8TzMMui9vkvHQnzvfKc9uYNiK5HGmrnzX7qhd5ThqpfQa2NvdqHUqC",
  "key5": "2hFaeWPiWZjgPSjFHFnxxCGdsxJEXxbKL6GhMLED6oXgrLFbUfypQMdqePb3RtniMpC3M4TamhQ5hJYAD8TaZp6S",
  "key6": "2LGTCNVgKmj3Kx2b57nQtXdQtpAKxqp6WyNErFKHoHSdmavYdJ5CQPnYMqZ5eprYQ8batcHLpVhPtAAkohC7D7Pt",
  "key7": "2uydSNwqbd4mWjunj4nvPamB4CFDxmA8psbaNrfjUBGzNHvqkJ1nYQaL6ixznF5mhJFSCZqPLsbuPNUUtykvsFVk",
  "key8": "vyqNuxJxb8NNWg6YP6uFuVZWHGiReNsuaNgyZ4oFMzg5uB4qbMM9bcNEpid9Tkbgh98rA3tvsWuwt45gTZYq4tK",
  "key9": "3vawDEQNHzt1p1s8A9wi3ouQx1doQ2z64pHPVE3GsiauYKWwLGhysuDn7FQyXVqL1a44dLQ6Na5TFiviKzSjQUav",
  "key10": "nivZY6LQE2ugAxbcva72ynSLu5ApinXPvVtKGtLnvi9ZKWYMUhrnU3qfV3vTPEJBLBBqHWrZnEAP3gTxgZqWaQf",
  "key11": "4vw45sMqb8ihWWTKsuU7nFtUB4f6xfyUTnuATByDziN9zYpF44fERkbxMGVxfcWQKggpu1sCCsVKyyhEJ4dzu9Ce",
  "key12": "DFRt3ipUE6iyxpBany7zV1jnCcZ3NQ1EYcxJnZ9AC7mcXoS2LUUSVHyc612dFJZKRyTXz8Zw48SEnpKChSnH1ye",
  "key13": "27tdeH1NZaprBftU8A9SKvQREqHLxnFeHJYeyV5RwNSwAtZddMaou4B9AqYd8izHuRuxYH2cZtzJDWz19v5UrYT7",
  "key14": "58bobBrWZFNFqRj6HBrHeiAi9CuMahHYwDU55nxdpmshAT8ntdZjkeapu2tJdrb4hfvdP7UeSPku1f6iGviTFxoP",
  "key15": "vcBb7nSYAkAkjE6fpvzYCMD2ijhKsycrdBib3b6V5qjxXCs8X6ngSRssBXNMeDmVsL86bE5wkRJSpdQ67YMdTdS",
  "key16": "47cggrrjd1sjRu2HSPFArYJwhWAkH2qMmpUZzisJRvmqx2LUZGzEmVcvo6qbCQyMgGUPgBzkA9kntN1U3x7vkBZJ",
  "key17": "3z7KT91Gyz8BCXuxch7rDsfLbUTFkSEa5Vs5dT1yyND59zEoEYYk7shLsSP93burRFnGbQDw6MLymFjRdNR2Khdg",
  "key18": "2u7RhaFrmjAwargFAgtrvLzN9eNugoCzox6hYJNYStZtV6in8cLTvrKVKCKLJ6YFmEPXqTaaidmq96xLa8FVjjRA",
  "key19": "4yUuhDjxa4Mbx1VwaS9t5LuunfsyMJ4KaAkncCPJcGH8QXaHisdGF7Sm7ZuEjYwoWdgiXbotmRC2hm2D1oJ12r27",
  "key20": "5QWVuKP2Rck7qLKh22tcHmCPVcavgqq7bPNwfvAmqhw61YYDiYuqHJff2oAQCJa5L5Bk6CxUTiQBij5Gh33XcJrV",
  "key21": "5FzzRzdV3uhXDQVagqLLiE4ACBVXWo3h4MWtCX7rTYxjPZueWrmn5hmQn3vjaBir1wdt1BgwA4nt23ruMgq9gTUe",
  "key22": "42m5LWdWc4Ghqp5HtPN4cWhFF8q5hfMc3VG2SK4bEzbQ1svN2rYwZzDLN7i7JQQXPWHctpcBxZ1mc7q9uNpBVL1G",
  "key23": "wFzVHq8AgDfM6NaoyZPnq95tmRMsfT6Uig5VzxW5aEoGZpXWgpcnTrwvADhwXEWEDikgtUx1FffQUxm7zYRpfgq",
  "key24": "4vkJcWkETB9ck67eSajt8wNzt1L1UnNVezD38ZKuzXrX7HopRoo5bCFkkUW5RvQTLXuFzes8qfnqxQd9Ssv4GWrx",
  "key25": "5jcb4NuL8MpkKmCLYvcjgFApfQkvdEYkxo64bkcUnHcqmwygyfKxAiDrQihNcssSyXNYRk79CSWJZLFd3yGB6DMU",
  "key26": "4RJq2L7Q1ypvmhMqUKzoJUfZBDnEprVk3YBoJaego9NoxXU1m7FTFWfYQYdMMGpF6HZBkhqSCi1KsUxLSHDm3rYi",
  "key27": "3Srik33pa8PVxbgQPUm2iFqF5EbFZensvbkA4XbokgycUgzbX7TrMVouigm2TNZXGdndhQ33c8AYJEr9gRszqD1d",
  "key28": "5dmW3NmjcvJCaYmVAZqC6QoXSgvFmjoqbZ1VeBVRsPFdn4Cpqb42Nd2iUwhbUSVs19NaXyuPXFw4gfYsMrzo2ycB",
  "key29": "3F39vCdYXvbsc61MvsP721qDeV3hR5UAUr3MstWN29LeK61hciVwqhrZStCa2hhwpJWDdLVmzApFp48gZoUCLp3t",
  "key30": "2touLCu9b8sMngvKuBQDrBFRJHFxgwrD2iJrHtP68xnZ7iEYFJkWfCMgz6PLXCSpQHKkQGJNMNEKbyWiGxmn5kPz",
  "key31": "3coZvNshVTHt1jDd9iwinfjw7sX3AUzxcY3Dgu7mfbHuqGRnnVn86BGx46owDL6P5suVYFBjmRU1nUCv4deouhSa",
  "key32": "iSZHoPT1hsqZKVTet2kjBszwW1zEJ8mBYvvn8LFPAnUJ8CCgXXD9g6rhGW2vtG3Pv9PuHgZLqwDvMmXjxHUaBS7",
  "key33": "Gud5tBk2UczDeZ8BBbJmT8UMsCJD5P1yR9X4L56ZD3fKn7Xa86WpHXq4Zqhupw569dTGe6yvCx4cWUrMnWMYTa8"
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
