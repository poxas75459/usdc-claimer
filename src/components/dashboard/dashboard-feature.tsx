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
    "2TN2P9bxrxppTU9oYGSugGwpfReeWs2roPnqSYeyH1FUSPqEGBmazrcjvBgPA9fH9WWyc9wTNjVJck6vxjk6pWdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gKVVotEnb5hvWAmS6GvaTQ8YEqJhQcmKX64eQfz4StfVPZ2NSaDDSsqJ7YNcFUou2mSYRk1sXrEyWWkm8DaUumE",
  "key1": "bWpEHgdRJ4d455cRJzjHZPjvXCHbWemVVmnsv7ZvUpwaCJW5tWvoJAAQ2HbpWobUQmNzRCqeDsM2ZuMMauV7G6d",
  "key2": "3HWt9NXBqdm6EYXr2PETUn6DTEwYoNpQ8rZnv3SYqEzNU68jP8uSmGU31oLxjxKkvaagEMbtEGt56TSMTmmdza8c",
  "key3": "4cwGee1twZekfzfzZVKGBUvkTDkR4iF5XXGYP7hwFjR1sysuXvp3LYPZyUX4NU3Lo68ibWYor3xdRQ3fRWvXerfJ",
  "key4": "2uL7nvAfhxio7KaGeZDrHTMTQjNfJEV49Q2myGxW81EuTRrLU14VWpkFJkjcmNfTD83mgy2FmHkigfNTuZavxFJN",
  "key5": "gy3NY2LtRYWJf7o7emLx5uuvax4PpZBSLUDpc4Uh3SkzEWdQQKvpUqT3c5qWaVPjAKjdG9aPmahJqSvXmqP94By",
  "key6": "5MJGQAPHBgHmcsjjp8nHpwsCRzcvtn2sr25wdj9Ge7b9Mxr3HuJw4aSV48g9rmKTt9XyaM9197J9T9rhn4NZu82h",
  "key7": "rkykFMFkDAJWmv8BMggRh4CQKPN2paYwRZC7moEUhvZPeNko7MkFPqXLsV2XYQ8tpKQkbis9ZL6VDeDAUwLGZZt",
  "key8": "4HioevXo9mG9kqao2qyLbQFEQ842REfU2sA6jgmnKnENcRug5SfhPxAjXkaP2zBeztxtC6j53FkrKKu2CuaanCUE",
  "key9": "4KGNooDBWQ8Qer1DhLve2DLswhR1nDzfmRkETbUxYY2S5EBGcHzem4hTYFbMJMLDYwiDgrxq3HD1EDaDrDeXn9gU",
  "key10": "2SBn399eURhkJTTzW2KSoabQviyFW53oJZ4t6mUQbheorNAjtgAr24z28gCt3NJe3GC56svUMoTH2tZqoJb3Y1mm",
  "key11": "ExhStHVswuJx4qS5oZBcLouiAHU7g96zHqvrCD69c3apcBrhUY1fY8Wsg8YXxPyTLSNnSSeYa7b1pUVBGiBvBTR",
  "key12": "2Ef6jZ13rSwLkeKV4rvmTfzJUZJVXPcdSj9xSc4WtGP2KaoWLZS25kivPcfb9WnDtQP4FA7zaCnGE6s67tsT4YxD",
  "key13": "2GUjn3q2owFY3cykidf6CVhhfqGGNY2dpmm4JFy1Vwtfvhd6YovJdawjeKRjobM7JUc7KpMGXJnZxTUwNGqadiwe",
  "key14": "3S39RiN3vehTh5sbW6z78ayYPJnykab5vfVZTZAYjNy1xfUusVxuNKYVKCdaEMPYf62EhmRdG85tK6CeLNKrUQtS",
  "key15": "2Piixf9ZXz49o31wnhBHGJkRFdgzsjBj929NZ8JG3vAvAaoZiXnEBJEJ8GHMYnDK88RbkfuVF9mwSxs8rikaY7kY",
  "key16": "cGaG1JziGe5sBFRRxbEAekcNwNPq2wKQPdiAMgZuzd8cfF62CKfMHFDygbtXMQ8TYNwmakthR2BCAc7mp9dzMoY",
  "key17": "328ceFxUNA6Pafh8bR7VH6QjkvWvuPffCSAg2QAh3y5LruBUTCMjQYmZcJA7jGB1f25hmubsDXD3jPLH4txbu5hE",
  "key18": "2Jjk58UvRHgxGbqT9uBKvHmx1YS82zm8uiPNCmA1bHVDGUbqHHwYu14D8AQgmto8zAYwbCKWqr8UGuVo4gDFp65p",
  "key19": "3jBReUC45edsnKv3UqJLFoxG8eQzeLJUL2EMnQx52BA6qgvSZC2iyP4W8bfikXTeeUuGPcGNqWbYR9rXHG6w5sUK",
  "key20": "3JVzH1ZgHg7bDpcpBUCA5N4jtXnvb5xwhWyTYSsR5peX2rc7RYHajZcJW1vdujPEhNjFVwU6dVmx4vRFVMmucvUL",
  "key21": "5cHD4n1UjrQWhrMDH7uLTpQyZD7Aq5FLXjcqGrhfDFgCZaGHmxEW5VWoHpf7LoHn993YTeaRPfK67xAmjnsaPYXL",
  "key22": "4jFTthRu16KXmS6KsPhVyvmFP4b8SN2aVJDrHnUQ9wdCabEVmfbTugDT2WdpjYcbvzN2PjrcpzvVpKacTurUNKXP",
  "key23": "4R6r5x4WAdqNDvBfAip8isfGP72Pe9b9a3cVHRPyz3mTAALK8bBM7jypjqCxWF8SDCLB99RZcBdGQ6z2Yn7x8Uxa",
  "key24": "2WRYptiLTmQTgZ44W9KgrhAvuWHZYChG4tnUuaUdhZwdFxdm2AaBPXkGdSN1ndSUqapp7dwETAvEQ9guZfA84GUg",
  "key25": "2bsTiAJvdNV4E4FetPxjxs7kdfwpTaDDLtG6SzBJZngpY5mB3rki8nS5AWJvW3jtkvjNnor8mkyWAM8vLD4emMzF",
  "key26": "32VMBaGSS8x5vGDTgenLxVge9hYHbUtrMXgB5HqRDqajSrDVPUURbKmEHeyC9HVAadbDvPLBWU5ffGK6x6P6ZTZf",
  "key27": "459AUXPffDyQ9aB8vBvR6GjghuAqK5Nf3pnND8fGFezXCuZ7c7BE5gwuADkYpfygvQyH3vhv75VSKN9kS2bkEweJ",
  "key28": "7VadSqNEpfoUJd9KvCfXAg2F9PMXW3SQVaCuhWuD2LEUP9bmzBi5Jw9TB5aD5z95NGJzhhvSWvwfwwK6rhbktF6",
  "key29": "5nB1dpMGyTK6vsCztFHz7Qr5qHSvN6ha66hBVfnSf3eMpoymEpzAD19mrEPC84ZhhyPwousNJbFy9zkShbfLi7Yv",
  "key30": "4pfWKy4KovASC5efqhTHcpTTjWXQzV1PMzEFUtscVQmarxYiHEF1jVQ3uVAatQfKqPiCjW6XovzMkKSAJ7tLAfGB",
  "key31": "67H5fSg6xEBa2UoCeLw3hpiqPvJswt7TtbgB1nGPCYJkqZUZaWhYX138HQuvebXWwZgEmNbMFN2bqYYLh31y9qiG",
  "key32": "2mnvR4K4fmZrCa7nGHcLPdYB9HhGEh93V9YdBtW3ZpqW82C4T5CHK6e6aPcAYNevLfHquy1i5AwRMX4K53CqLWhH",
  "key33": "JGibNBT8umfSkjZvidiFiotHmnTNtLkXkNNJUG4wYkQRLDWWu9up3XyGJ1gHY6D6cjLfoZWrbFhAxsnY5wrt7wR",
  "key34": "2adiErBTgFXPuUskj2YC6FA8iyi6Kib3q8vHPDN5wrG517aAq2xFsWASjtFmgzpc3BRg2ruqcgZ8qrT1UAY6ny7u",
  "key35": "33kRZzKx6nFUdWA6sZD1xpZnwt68rYxQCfQmxwDkC6eYA7cQLCYSEQxNsvRnBBs8RkD4N59G57TSVkMx26PXsxKi"
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
