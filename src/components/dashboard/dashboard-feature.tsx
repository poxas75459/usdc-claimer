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
    "4GDw8doFj12ZfimRsTBeFKuEA4m3H3gNDSWBoVU5wsr2oVmi6JSXaafWzeuAgBDZmEFfhMwbA6jE6FLjNbhgcY73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CWky8CiBqVZPF7oyS9pefwKZWvoRUxvzubMxZnSig8EM1tYZ6jtckxkMg3PwNbT1xK4MUESjq78bhHR8QKZvbhB",
  "key1": "7vGkejwKDjsPXxrLJtoArx96r4QQPvaqxKt6nbG6w2wJkb4281iwGjW4EXmpvJDVvYrcGtfEnzo4NnM4iWT2iS7",
  "key2": "2tN8i5sH9giKCLtJGndarupLdyZW7XisucQ35WhJMKKXyYNgHmEzp93eyD9naeKWj7ZiJBSvabB4T4fPEzBt5Bun",
  "key3": "4hYRQP9jPPPeTyrwBjjMgFHFBGR1skhmEZEa9xXFmd6C258LKnbH6Vy8P22NPCLKguH5nCDxsUngBKjV9KxUFcE8",
  "key4": "2pYjTiB1SdUDeXoMy6saxxCshfhBq7e1JPqGj8ZHpeBicRcRyeJ5G3bfCXb44iaCA1UJUtmzeC3tMHaJRP9LsbhB",
  "key5": "24PBemYPNYJfLjGngbvJ5FuaRTozKWdomgvfRBoq1VbGY1hoiV2GzW19e4CkAYedxw3qVb2moMDd7ZCFtMLZroyz",
  "key6": "4zxQPdrJVaZpHAPuJ2u3cypbAsuZN3JGVM5BYsecVSrUNuHNBDjahUVtdg2L9KL7ucCsxXmUArdE1zUFicfEnBmE",
  "key7": "427Wzpet4E1EhyTzu35H6xdNq31rT16xjoQBZn1SJ28cF8uuH2hBJMpD7vkTJf6G2JfDi7UH4d61zs7VqPUTmp3k",
  "key8": "4nW4erMv4QoZvA37jGZkfpBQn3LiQC1SgieebHfJUuQHxpHEwHVnb4pFdHZ5CoKsHKWLsTVyRRdQNVYX4FaCC9vb",
  "key9": "2fhoWCif8EPfgS8HydRzmJGzbrNe1MpKW1cwCp1imxsp7FXW1AqghrNXUYq8YVwQYkhJr9jkbcG6umD8ATcBueGZ",
  "key10": "xEkpQshQsuq5Mt58KS8AkK4u9oPoEYKwPkRyadWboEb3aNMrJM3NXNv7hXvCoktujTBWuNV6NQs7fHiXceqBCLu",
  "key11": "4MUTDvoCGFa3j5t53MrqnFCWgJwSoZGjrUFjvJnGEHq4YMC1reJyPKW6JTo9UnvvibnSRmpHQ2xS3ooSPtuyfMZu",
  "key12": "61P6NekRRKBddYYyS1cdtjZbzLMTSwdvcWnJdY8tdfJnRYdSimMbM4gQtZuwcGXqgCkrjJzNZaRhM57orhGzhXwF",
  "key13": "9W6vzpEm5aedKo4Nbq4sSVEWgRWuTDZ5NLDF9qBrY2GN1HAXZutTXeGCgFUk3LfL9d9EYkKs51hbuaXSQa39fDE",
  "key14": "3d6bKST2cYaAemM7Nj59QMKGTN64T1ZmzmM1VDynfQWGhh9VHaUJy4mCwMTssYBhqp8pBBzyfF3JcLwRFENyzTvq",
  "key15": "4srLSEL8NyaTiuFGoJ279dKxGa2Xk6cE5Djxd6Vnv7DLhnCrbqA4R7xDCzmPBUkWKFEe6DqsrtpLtGbKFLVGgoFj",
  "key16": "5P1rPpXKx5jVA3THCn5dQzXyyxCwjrRS8UELmUudx697AkhmazcowDVNcqURHkk55na3pkUqjLhkoQ37Zku3h6Eg",
  "key17": "KWzFo3s6gxx6hhmxLTh2K2vnwX1hYrgDz2cfRa8KFxqmFuALt3DprhCig4Vk4QkSLyWdFeYrmWzP6dsjEGo7jjY",
  "key18": "2zSgGbiXxrizrNfVZzt138o7uVk9Yduupz3CxTR2ZxBBwAkUhUG9k5uYx6WCs6Pk47dZKUPLtyRStNnWCWhYHaf1",
  "key19": "35NrM3DsD7DMJEmaZqdpC7ttgwyFfbY1q5C2BaXyYXdTXjbjgf6RyCZJZoEGqts76YdvkfEYmPsg5oei5ujtW17W",
  "key20": "4Qgo79ExPiHNwWcVLB7SZTkbapqanQVGdE5YW9DahNGAriG8JmBUEou7UbTvCw73FwNUT4bD7288BTfE18MFVVrB",
  "key21": "4thmcugpBevEufgDcmieiELY6hqjqWewDKUprJq2kXSXVA14ynswkzWfVXSHu2BqjhycsihF5GPBzAJci7Fe6cKP",
  "key22": "XrxzztVzHjdKsjH2RghYFxNQymsiCzFNGYUtsv2j6byg91dp5tiydSou9NcbL3UcjN4w4DKPkWcV8F8aWnFhtPf",
  "key23": "2QoEeFGRvTgX3Q3JrpyETt5CMKrokDHWYMwhJRKqxRKJnwbqn3dzH1hqhtwkE3mH1zEEDVwrJkjLkAdxEa4NiAdx",
  "key24": "43uZR54U42mbsgaX8PhE4cjKgJmjvxhFNLjQyjE7eeSTr63ePYWGzAGkLCQhU3mJWx46k4wXVAb76Rj9NkiP5E9u",
  "key25": "yxwM9QiXzVq5YPW9on5vL5XPfzdr2cjuR5UrwiEzLxSyJT22ZiELRdUXADMW9diM9RxZJubL5Z1kXvKCMQSrwgg",
  "key26": "xZ1cZJCiRiqFpPvHCyXi12RRwrmoeSzjyFrG6mbBNnhe6zJMBqCngv9TMkPDaknp3jcWpPNG6GmjbUkjiLEhHaL",
  "key27": "3FHes2h4tJ8UNPu1UTTxDH7nrCb3NS29hhSrNCqE3aqPqUthReaesdFbUeMUNasVxNgupRQmqJg4Btgm88W1jkQd",
  "key28": "2pxyd12pKVqgFPizHKJ1DDW7CEj6SZpXHFwPxU2ELKjQHqi25wJGrVrqw6GnpTxRuCE1p2JvsVM1im1dRC36ifkW",
  "key29": "4aweiYbUpLJaoig7CLa3rkjCYLGP3ud9nM53jKDw8kC4hHUFjtQUiCgJGoXaSp9vrKrSLZvRRg5ZCbB5ftuS6ziQ"
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
