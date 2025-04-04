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
    "4hj2YGaHJe9GMpHjG4Pk2HhVz2Xi4tFGtmZYZJNaBBERQKW9ZMN7MQiMKvTGpfXQX2rqXbkjZkipyhDpGjVty53M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ujpVpx5cXGYmUu43wy4BPzUw67ZTQHWa5Wk9LHA7GFpC7GYLW8mry6CKQfJ9zsUirBd89viDy8jANB7hJZq2YTB",
  "key1": "4gXc7k5nAQWgo9Hq4d9XPms3bi1nReJypfdHtCCp6RaHjbqsvw1p7DvL57NZUeoCYUg1ZRinQZ4XbBoky1bEVoDu",
  "key2": "234eHkD2YEc3Z9tkcRUVGbM41heGDVivQU1Gs4dDHnfPJyUgSdHPuPcFXMFESkVR17n2GoxbuNH9AGPhJLSHnabw",
  "key3": "4GSMoYmiU815SHyowQzwmgpzJ11VndoeAspeqw3t6JjCFiWxZmMXHK77ibJus9yhP4cZbfySGTnE4aBLoPKMftTw",
  "key4": "y4rzELkVts9Wz2AcevcJ72c3bApCu8nozteAgKjjJbuKTfTNBDGGRehJ2xAvGkzwzk8mAQY7mtiM5rrLMwmrpuX",
  "key5": "5UfstSnHF7d326RNR95nVTD8zjVw9G7jCN7Aa5vViWbZpe7t8w2uogNKGYmzKXuG3zVqWP1vFT5Q16mQbSiQtRoB",
  "key6": "4CA7KxX1pVsxLUjZ9PQZqM62rUPa7JUGSqbc1ZswHgswakeiHuakMKNvoCZnR1wUC4o9eRwZbH7xD71tiRnB3KuX",
  "key7": "59Qzv51pTZNk2PMAkm86iQfmDKGJWp3GGGFWyhVfnsTnpjq97XvMv5QoXqLn761BfWPywnwZnxnjEwe7fYG2ESBN",
  "key8": "67hV9wb9DPv17eMFnK37x4azaZYV2rjN3vHQVeZ9wwqjokkAPiWaCvcMLtAkbbCmewEShbfK5H3LXEwQbiRDEFkE",
  "key9": "4T4grdSgERoxVhXUL87eWh5YqYrZN9e5XWuGS7GDADNpM7nHTYjsX6NSkp9gEC98RAprQ4jGLSATRWGLVvbYRFcW",
  "key10": "5RmyRXKXT7xJdtN9Fn2eYWwZ2Ch7HwttMTfUheM63vR3XrStyzcP7s6xjvyDjY6EbvKA6aUpUKfZ1krXrgWnduPn",
  "key11": "2Uchih2HXhgPj7coPUS2JSe9datZLfPCw6EaFkMBJiB4WEYsxHMvG4trYzejP8izqpAu6C46PbkepSLqBAPK7jab",
  "key12": "3ACGVjyNkAoJa3fcnCGHcWgpN6cwcs96EF2rkqsxYKvXy5xHHj2qLJt8BQFJW86f26epBnc6eLxYPWxfZqcBHwva",
  "key13": "4FjFqeJzyTmxPQKXNDmjfb8fXpdTa5tsVQpjSYo7M2SyuYmUtn4Zwk4ibrsgFFEmjcR151jy7L4g28rPBiwV7sHs",
  "key14": "2cxz9n17DWSoY78BevuJdPHtymkuPvdauS7ZZKBP3AH4eRokEh3GPtKwRQsMQ6CCDQ8XDyVe183LcAocXY7gThaF",
  "key15": "RDo1VMWffgUuL9bKfMjeUDNoqkxLhMX1tsEBm8kWtCvo8ZNMF5WhEWvA4525Pi9Aw7ULxP99JNsWU6ZYCfAGegf",
  "key16": "5PKBRpJZu53FCZNHYYSi5t15MVvsMLeVcSEKMr5dyatwqapZgGj5qDqsCD9VfKPx9Jxi9Fdr6ic7nSfiVrKUXSLi",
  "key17": "5tSuqDm8EAinJggfRGSKSZJ6Ff7ayTPMrQ7wYPmHbE8oYY5SCPTXtVYiMfsoUt94x3QaiVQDnLKCcpxRhagrNSV4",
  "key18": "4M6v1i7JQL4nFrSAKRP4dx1JUJ1ZxDhJXGQyirMkJbw3eoJeypgazK5Zvf5oJeMHWsMqHW7QPZjxF6PuX4YXdVLm",
  "key19": "4UsUrXvK4Jgu9msLJ91LX2ycCL3hdf8PXM7PpmnmqQejTRLJqEU5yxR6a26gs8YFV2ynSYjAaitYwMpGpikoE62K",
  "key20": "5ipLjuNYeYKjUPYt1CUyDWyC1D71yRWTtP2TAQJkGnt6kFaRNm5VYmRxnfHdECKqENtBfpXHp9mHaGbkHLkLps2P",
  "key21": "5CthGvzigxhsbjYTGyugQ6qZ3RZqNoLZNV1vsZhH5ykb95yCchYtDZUNg8cTsMTErdpsqDnndK5FX6iMjhUfJcFg",
  "key22": "2YW3vL9dpU9M51YU8GWvCRet6aTMMhmCebNQGhKM3bAuncWB3cksFLvAqMW1ML9J41SteQbxgjBoxm5vxi23r2co",
  "key23": "5rX46n7WFNg1CLXMtH7YiY1bQkWa4upqiqVT22k8PVQr4PyqvqJUXtnEhhm3gHER3EcWkKWShrJ2r4Jo5GJxhifh",
  "key24": "cBX1bMEw4P3pdzQeyXBURECNjK8MwVpFctsXtmKUnUpdvBe7crF7wBXCaRks8xw2nHJ7QjYpWENbh24qCwzpBv5",
  "key25": "3LPn3McxR4J2hQtzR9q2xaWXQ7HtFBEQhGAEXo2Lgrr6wykgDvanXh1UE6WCqCyGaMW3t8YSaaTEeXL68GJzjH35",
  "key26": "3u6B4bDbffznXb89uQsxQxhHwWv7kDeQ5rpE41t7u3XVsj6XXvvzrCWn7iUJoughmP3ni7LB5DhtmPuwDce1Doro",
  "key27": "Vdi1UWjueFuRy1anzYP18j417Pwx6k1dBwU9E3oJWTK5KRwPSUrqWKHKypbSQFyVHxAgKj7USZ7EKiQwc78XKJL"
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
