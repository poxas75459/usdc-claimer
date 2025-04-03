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
    "2kZsGBei4icnoBJf6GoiWiqfvdZ7F6hy4Mzw8nEsjxGopEQu29G8HsAzp8AYCe672V2BF84aJkXtoo5qCgGFn98Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21NPKEJjYHy5xzSfWEV3snd1nWdW4urvxbLjCttki1NcWtZvdLBFXKoPwv4D4gib9Sjj7wKBzY7yvSY1AUHr2Wpv",
  "key1": "3icmUFMavMJr9hkoePXcwCx6qeFkPUUdzoZKwL5XwKKYhV8DM7omKANe8tWWQ35pRdz1eELMuEQ4JPVwVAv5teXF",
  "key2": "5KguysoGCKcAPkgzmDunuFQj1PCgAVfGUQT754W9oVH2Sds5jiNPN1iL8b3wp95R8hoMVG59wsYf9oJNeB3bb3zC",
  "key3": "BPQFutpUMz3iegrr54jpS3cPdkJStbLoMWaWzkuSK1eq4K7JrDaxxzofuJk2hKXC4s2j1zGec5hBPowiXqJR4Rm",
  "key4": "5Mz2Y7TaNaPiX9qJbFbny6mi3oqXR5YQSwqgQukikE5vugkyVd8S2Jy7BUP1DkagJhLfh9Ev5gmdoGVDN9LkRRqZ",
  "key5": "n948yiJ6tg8XjBWxj5iUQmhFduKd8UFNefLau9w8iTmQyzHYMq9yNRRggrNtWmazxHonD5dzE8eQRSQ3vuVHy6H",
  "key6": "5yPKBn7jH75bqmJmYNf6ZttXSmYrA1Hz4X3cKAXhxCJ1hYo7FqbxcyADmme2d4KoLTK5znZv19veonDDuBKn2jT8",
  "key7": "2hLDP2VKNnCXPDMtRtrJW8HwV6KosRcdV92UL5PCx8RP338sqUWdExdMSRpqBM9cTRbnV95gyuHMNCGp3N45nmvw",
  "key8": "5tpNbYqV5MbpptL9wnHfvuHpPaTZDhsff7C3ziYYVMiax8rh1dmcqhg9rMHTbzSALkjV15b4X6EWEF8QUYP6jB7H",
  "key9": "3omJnfNLnGpWVWAouXe8uncYT271NKe3irT3a7eN9e9pqCCsLYfrsMcqRtyiyS7hufaMhhD4aBxvE1FQCJGsB13H",
  "key10": "deiA3h8LKWre11Qhfq1N58sbXCz1ofYnk18k9uWZoGTTXEQeAkyDjwyB5omVra2m6Xy51jbBFkRQMJwH967DRPX",
  "key11": "2VUJUtkUHCNYHdfxBNEtREo9At6wYrYpTF9b3M3PMaFScdgLaSNvN5cPCi5rsdDk63oBfXS3yrL1poCjcPLh1Zey",
  "key12": "3LRVz5aadNddx3oLVDfHHsh69muWkBxx4vybbGyKmrywM3Z1WLVnEsyZrXKYzHB5KjfFvzD8qXN6T6DwS2CoZSVi",
  "key13": "47NV5khCQu87CuwHJXS97LAsbt2uYj2dEYNA9LDUBHTHLkbnQxe8muGANuNzjLJP84wHshZwaoTunsNJzZbzfkxU",
  "key14": "4bvhmZAAZ8SyozdVdVw5t8jzKAvkWLkApvgg9c7rXbTuaMbP4HaaxMF5Wiyx2aySz9TJ6EyZhfGUZ6qGsypk97Wp",
  "key15": "3tTCDLsvZaRGaHPYmfAUjrCtguxWjcjjiDdDVXSF4eiUDevB4xW9NCcECjeVDK7PMednf9WS2RCDAgir6HMugGKV",
  "key16": "5TBgWJCLY7E83SZ1QXxw2jmZqmmrZPCL9s3Rx1FCPKTmoomdQZLo5ZJ1wY7Giioa3gmEQPFVGGBmtGMJURAe7qde",
  "key17": "5DjjMCHPMDvfBeBp3LcjpdgQUthChErKkMn3sw7H3SLBtgYVnK5PojctoUsN5XHerH89YksaBf8v7U3JCEmXnHTA",
  "key18": "2vxDDMXAxsAdJ2r39xCnrFeodxHRRT3Cpb8NFTC9ebPP5H1964jEq2NAg9QeRwg9E8gR7hq8Gsb8HAy4f9TCmvTB",
  "key19": "DqhqsTSt4Pqq218Arc1nmngHLrssaMz8Q2yuqAKj4dTmhwsc3UDybWD2DRfN58pvdUHXDqv1yTmnU8EgJafde59",
  "key20": "626J98ysTC2HSNBhHNKyrNtdEQ1UJUhhc5Jo9gVJ3n228Jux3QhM1AhwetAMrv9QHZwUESr7Ht9EKRTNChQ9Eq1D",
  "key21": "2vvpi9BQCb68tRkioFZCMo7cvHvJiEd2LDGKkuKV1tyeziz1otzPBKhQdfKrhC8hddkTHD3PjB2sJSzTWrfWuKCW",
  "key22": "298o3CFLq7CyfBp6sWZCsAuAehwgEqumN868X1HBwke912yKDnXbj9gURYtHiDF44Vxuw2d6tqG6q2yKkVZbLMyU",
  "key23": "3a6ExRosn6pKAFFohoCMZMNebCEoDpqq2JNNgTt7vMEabW7UB3AvEbKgepoHoDnLDSSCh4kqVNRQWo47QjjJAWtZ",
  "key24": "5GbUrozgsCzsh19PqETJCM95b6GfXmyRgvkGtwW1kpfCrz1yJjyhhmaJF5AinCLbQJu78Y84z27UNaJnvHNBb2h5",
  "key25": "2McZNGPktyZ4kyiAeHWqYPorJ5g6CM1yKv4Accw9nHAVextVsq8uHBxixtSzmHgwykHpiLxb5Qb1mmhwPWUiCNrv",
  "key26": "2FYJmHkfnTNih2BCiypahm2Ubh3dENxTHAPfHcqx8z2MEgxqeYdogVbUKby6o5q1NAseEREKhEx3PGUub21VjMAV",
  "key27": "a6sS2HrXudF6piwgE9aL5gTh5ugvnwcMbBxAxPLgf6pauFSwqjM9XF2v5rFf4RXL12Zi9c7AqaktMrWiZah7hTr",
  "key28": "4eDp5a7yGgvXKxQPxGBwSz622k37x5uNy8xfQQWJ6LzPnS1vhWbvQuWVsBvpCZLrC6cxP3Quci3AHiLbufnffJLe",
  "key29": "yksjPkciL7hKHgwNS238hYscxVX55oyQrLMjZVZKHQPNATd9BVZdEA68wR33ug32CrZ4ZAgMcTXo8Kn4Qq4ZNwV"
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
