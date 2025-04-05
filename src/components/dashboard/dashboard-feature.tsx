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
    "sdcmqjcnEY45ZigBLBpzYDV6VsqK6bG8fE8KgNhVeSJQe6jjkxch49HqmKe5P9x4kSn9cMU9AKQpvhpN2HYGfQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mq3gzH1RoY8RneFFHRzgzLumNKx5KmzYwsFrtswZP42FHnCqWDLTjLCpDRA5XfwHfi75g6RKVjWC16BhwusmaQ1",
  "key1": "5Csvnqyqmjpca4sXbaKNdoqNJqfsbx1fWNpbivGyPwaLAMPkrhxP5Sx6pEonKhpqNAu8vDnVRoTCmqsbk34vq7nG",
  "key2": "5jL5T1frSPPQubXG6rZYAaVS6ZauojhnUPSXCjYZpYWRdhb7GmK77MgW8n6twQbQTExzqBzydQ2n87iTdLFmipe",
  "key3": "2Y5tNsrJxLVt6gy1ymZ8PaUo7YbgxfLymzYoStqJKhqz1Ha7FMPu4j9MQurXZgFzznhgefSfH98U5484FiWoXi2R",
  "key4": "65q4qA56n7RKezqmDd3BTEKTV3JejjB1QQTgzN5PRKnKB28X5nW65AMiTLJcpJDhTsxWAzKajDStX53RnyeWqnFm",
  "key5": "4sh1wVSZY1iRvefKiHyxcbjCGvWKGu889ZvrnutJazFDUL5reJ27dihmj8WUe1Mjh3A5uth8VwX3cQ5hqFtimUB2",
  "key6": "4CWqb5TtcAqxcMCTLQpRQYyLWSYAsNUe1eSYADuoGFd4wMPKBPZH2e5wRZ8GV4XaSZ9uyct5A17G6WSnZEyjG8JQ",
  "key7": "WKtarKbwocHbrUbk5pmkYX2afGRZaQHQTvwBS4mQzpVx3DEGg7rQE2diFoM5wj6oRFsUsH4eVfPPVGdDiq64mEF",
  "key8": "3gPhRhGoGheiqrXmEzFEJ6CvLcL3zJBKcqdauVKsHbfbNAaiWbXDcbVX6gZ7WG4mLJmdVLjMr5GYTmvyid2qwiqF",
  "key9": "uEHGyzCGxKucdHnSufFKi9FsZNG3cfzELbdy1zuMEtcLx7G3Z15rSAmVmsYQ8ajaV2wxGg4PTccKvKyHtBasWWV",
  "key10": "5tZTTEc72t8dEZvxQ96F1YZSjfQUdEtPds2gunEbzxpJi99Xydphxrw5U3HkkUeg37KXs4hytyJMSA9pjT9LwKNe",
  "key11": "7LM2xGz7ewSUAPEn2KYKbM9H3hTAZRAvb2Li1GvvpXXYViHWWYFnV2gLQ5fLnPWAdLbp1bzRaqhc41qb5iPXNzS",
  "key12": "5eKB1S2Cb9DSz9UqGr7kJSLPSVFNFrrLt9j3Ebpo5fQUqR7Wn2HPAjzSFWG9K7y4CqKLyQ16YkTDtjudEQdrGvCY",
  "key13": "3nd5z4HVsdZqicXFWf5TpzVXPNsCtVz5xX4cXxsx3KRpoFG9YrwtYwoT3PXGXf3hDi8uA2pKaUW185qSGZC3wnWb",
  "key14": "2TrvMR6254XcUvbxdFdJYSnjRcjyKPcqdG7N3BY7t9rBM22bwDkwp5M9hSXn5o31ipxrvo5N6SJvUdYWJVw7Z7E3",
  "key15": "312JPGVzBeyiTeVJmA3NSNZSJBnRPYPyc1ejA7Pqt85c3uZHoQYXgVSTbpTgPKczn6acNSKoP8EcWZjVyeCskj5u",
  "key16": "5iWEto7dfD8ypjqLgib2Luh7LLgzBv7qigf4aPmBU7JVGxdbCSMpsdejS2E2HjfZihuEtGU7vGQgWHzAGn5oTvaz",
  "key17": "3dc4XPxAkP2zPhwasoFj79McRckm3veYGZgab75i7mmBDLHDmapQ1ib9CsiY3xjCziZYjF9RLSqJHjeEkiaUnyji",
  "key18": "3RrZRmVZJLHwr6zNR4oqfyrrrngQ2R86CDcGjhtCTqyXgMtzUAGvCNRvdoiL1hA8WCXvpfME15JA6S4nPWzjmGQV",
  "key19": "xJjxtdkfw8tWecPCYfSUFkySPtBuYnwUPQ8TAXbQKBinJtAF5cZxjU7yfCxZwuSXe5UfTgyVznZEmNQUESsb9Xm",
  "key20": "aUkXJue4p3bEZN1QBHskEE6FnnvT98WKxXKdTJnyok24f3CNj1uHU6WZS4GMwSBxojjzS9oShqFxeuQr2hN8wAJ",
  "key21": "5E62HRcCK3xgjL4rBGgVaAysayQB37Yx9C4JHzE2DXJbx239YpTG3if65BQqJs8wnuvGMJTeo6fEmquB1XKeEBCY",
  "key22": "54u5nXGVuNxoYf4k5LKBmKWDEZR2gwgLupznoTDKJQXea6TrRhfhVohSPBzK3jKzpU8Hzjh3E4GoY3aR2qatWtAg",
  "key23": "57gJmt2EuMA6eYbmZ2G8fN8vmrbmGmxqYFpbnwao47LSfujVM2PQMQazwSm846j4RX1njNswGKkbsH1553jcJNxT",
  "key24": "6oDdzHgHPmceVSdct1u9gGS1ToDQG2tFUkt8p6QjQPN1qaLshEnUKVJHgNj5HxxtpY1MhUGU1iCqReripehaK68",
  "key25": "2KQLbogJusTrkvHj4ru3esSkvjFqRB4EWssaUbpj4bdCUa5emVVVbcTkhuRDDrViaMsnSWmd266QNdbWXufwLy3R",
  "key26": "5QHVbrKU4SbZonBqnqffekS7XjyV4udyyh5mXcJaXezuXDTzuRcq7nMqhezMA33Y2C17v6G1ksUa2RSNU9kZRTDo",
  "key27": "UX4KD4ejg1QATibxM8chdH3SBSqvxmuKeLphRB248hX8PUcHbR5rF54HitgSQCsRW1yGfXrtqamJ27oWZ2hYoks",
  "key28": "2Ec8QVFGZUEbJcXvfzDso5iapiFb6So19p81xYoweWuMxaJWHFJuryrBtoayWz5Vf3zdkxut99VUqYtW6HrgFy7T",
  "key29": "QeyudPdYd1msCZ8yBuYdcP2nM4TdXVhP4kKZvfVr71GH4fA29DzUR4Q5iUrTL6wRnT11dTRqYrXPHzxeF8ry5nE",
  "key30": "5RSA9oQkgSsrQsmFicQZp7bztJBYKveSpuR56TaUTyrdCFKbQiKc6TYVpcGPMm5E1UiuYLbTB4G5JDa2iMRm4arc",
  "key31": "22dAs4xWNJDTwRdbJk2kyZxuioWK2ekDDqj58cdMioVH2c8hMhFjz7fBDEMBgPqxPxRujCmRgePUCbUa65Gnn7tg"
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
