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
    "3e4YLVAFyxGhH3kymtfaBfdU9vmoUp3BAFpGeGawGoSYeJLyZmxgHvPCEPXHWHD16JnPxVrumA676xQBd7NJQVt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XdhwJTqP3jNmeAQCQmAcMTe6BUE9Fo2enbrS3orxysvVeg9fiD7LiDTZQ6HpPwjTzCJKP1yFdYCWPYaL1FoDGhk",
  "key1": "626LzXNVGUoWf3UDBum6Tc7MVqfnvhKnfdeHkS6ez9WrzocrDG12E88pc78j1bhPW3c1yi2DLSGiEU9wsuWV9pRo",
  "key2": "58csXjT47eUqTCvYc59ZJZn4gy3YxwicpdjGWhPs2XjpuFPHmgJ3qBUwga4G2Jz9RaNLN4mQS7DRM5d3wbscVgmk",
  "key3": "4KiLsHvN23eF7GHZKZLpDfPsfvJbc3d7TrfJWXNCTNEk7NMy2xBkoXc1C8Dn8iVmfw7fU5cwRiP6WpZxynjHSc5a",
  "key4": "k5pRfLJXqVWxCV7yjD6LzFYqZCHqfmH9WHm5KGZaFAYPDbGTCLVATDPSsPNbjzzARL3vKph3prMBXV2225Uku9A",
  "key5": "5AXkfcDnpWw1faLzCjkYBx9koLuk6tnJygKtS73Hr6W68kFDGqPKF8Ajzyiq7Yc8Sbt4WLAUJ2yfqUHGQP2ZE6Bu",
  "key6": "gT7uFbznkzmuqSP28mi188ZLZwJKgB241Wpou7T5z4LCqvWRCUtgkq2yL8Hcc1gmtJv8jwEoMnW7JwXvAvskufA",
  "key7": "5nkjxepLYmrxfYp1eDFzg53W2v3DaaahBvXZiQsjifnXqkNtx3sZyWEHa2MKmkDinC2QLyDB3BoXQyTttwhjP7TM",
  "key8": "4fKtoyuMkfVA8h823NtR4Vj5rTaL5E5KEoN9RGUjFR6JT1bjx75TyjHCEMbycV4vzUwGPctSwVatdbbQKnXs2ZAv",
  "key9": "5GNRmo1kFbtWmZhtXdH1VcoJ3ivwb8BDfUtCnMnJUN3T1z2KEg5Q8RQhstPVKckJw9KxPfSetP1dhp5Vyo81dca6",
  "key10": "2u2hpTXmxTwVDNN31wd1wDhhEqLJyHs64ZxnUYpMdR9TfU2WDm3GrAUwg4KRb49SBgaBvYmwM4NaeZDi7kncgLjX",
  "key11": "5JJRYiLEcGFepXrj4aycujP4PztH847oTHGPpsbGra2HLAyWGQa2zXEPoBY7mRjSQY2ERix3MC51hghVtyLGYsf1",
  "key12": "3UEqDSs6YqhfYbQNYsPtPhYhLBi5wmJ2hHX3Pe9CvSSFcZ87zGbP6DAg73dqqamN3wmF6XMgY3M4Q8vUjUfo93NZ",
  "key13": "61nG2z66LUTP68f7XfR1B1kQxvxSVm4JWqvdWgH1k2qukULSsxS8gx9Tq1JEvUukk578jStBzg758HaNNo75HKZV",
  "key14": "31QmEvmJW21eDCypH9g84pydg5T6xuABzVQsSoXPCj8aUZZnfhhU4BbYE7uJMQoVbyvbURpexun1Gdxa1eQVY4uA",
  "key15": "vGJgU3p1FbBwBczqNjFmYztdrQPApfWYsE3zf2pNqiAQ9hp54pcx4jayiUQW5zDr2E2wpN6EadX5yiN9w1kJU3U",
  "key16": "53xzeJB2pBF5zmgWCEGKSFzrpPjVbAYfaaWJ4RNjPGrxoirqVuUeKEQKr4wU7gmaYBuPM6ckuGAuMFHB1zu15ifq",
  "key17": "47p45XFiCV3UfhR3S27vFpkvMk2CgBn4ySDCL4JGTptPSUGv1kJnEeS995bnVyKQk3SWGkoVQBhb8dPg22wMCm77",
  "key18": "498U6HW3zVK5rztYSFhwgKxHfs2nqkGpLkSPjvBX1ymp7RHynh2oyVN4zyn3YK2zy6tAQvZ13qMYJWAXBbsuDuFS",
  "key19": "ZVUefduVMd1UsdzEaGcwusMH61HUzHoPAytP7KU1ocNnEokKs2hN75ZVD9ppCHi6gwamFJuqW5fui7sfKRgF5Wq",
  "key20": "5bBtDb15JZP7HEbXG3D8wgWo2rgXjEhpCRgRAg4xQrJtZ39A3ct3CVGNuMTiTFKaXCg4pK61hFHh1kWkwwzSVAou",
  "key21": "643pDsLEocrwcx1ZwzKd6DJFWLNtwE3Rd2THkKj2UCJjCNGSJvqfiX43nH3ig6jhpPgcJG4Yi4CCCN8eG6i2EvYH",
  "key22": "gFqdHGLgi5h5znYRTzuPa2hgMAhKCzzLpvYSj1zPe4tLtHMgCGnPN434FoCoBurBk7ejAqWQfRw6vd2zBzfjJBM",
  "key23": "5kJTT5MXsdX13TNLPv6tM2x4wfV4JY3KFyfDKtN1iRGpvZT6EYYyCi73PTCWiujT7ucYcPt8H5C8PH8tS8Xnyqxr",
  "key24": "3D3Z3qVxZkih87MRSmJiZaNt8TgCqq5CtwPwNFKqbotNAVHhYSQhSaGkTkx5uQPgvD2rG2HyC8HqYGEjDN6rUmPE",
  "key25": "5Mny9HyPenztApbzCEYpKQdryg62M2xXazWaS4oN5BK9gvvRSSP2RSmnSuCptEGQn8wXokemD2EfFAq7J1G6Ezku",
  "key26": "5yqRQ7LpNuqmpAbMWvCBrW5sigi7j9m7pudN6wTM6xb1oGfiq4gF8yD2NZ2WV8Pu47r1FoHYDSgEoLTMpWQuwPgj",
  "key27": "54aAGe9xJ5yHQXoWk3ADWuYaM6hfU91uFbsrRyjUESHR8BFo1RHf419ozUGHBd3rkDt2wGy3aGjM5F59TvqhYDnr",
  "key28": "4WeTT8wgYY6tNytNzAU9NbschbTFHCV32jcH77nD9WCJHsZQTsqiy2Sw9mQjSVysdQLzzffZ7MUTHkgFougoLW8R",
  "key29": "5N2huRH2wZRJ1onm2A4A17JCLgnD2YhdMmsUQu9JeNwspxxLZL8Ee28qa7VGaf8H3tp4drmr9Mc697xk1DtP6Ff6",
  "key30": "5yNe5EFsMCBDvB6tyFbUY4bVhSRctQzvbUAXKYy5q287savrN1HLRT3LqPvYDc2Gw7Gw1zLocFFVMxCKVEY7vX16",
  "key31": "4mc1pZYe7LtJjTHaFexLabWHkUSX9ZHaACNHqkCa7BnCWfxAvxW2NA2NUCQYhYWUePVSeQWvCjSXfRRJN5awPWdp",
  "key32": "5vce9CBwQWnDRQutk1uoGjLrWmUZQq4X6REQrrRRytoBJQbgbc97Xq5jGicVB6TwjqvTfKahYhkCTT384nUooBah",
  "key33": "2tAPmKyeJq4rWQYu4kukQQmpAmWyDq4ods9UGHWQDjQ8Wf9CvLzKcBc4ZYAC5iXM6uD3vdKsLJ16eP5aw7wZ5BxN",
  "key34": "YHfffgcCtc9LmUbKv8vEtPTywumkwmehqRWpTCdECMTtgh9FmB5oWACbde9fsZaiR2hXZu37U4ry7ipEtQoufCH",
  "key35": "5cMDFtojUQ55hasEg5SYekarUtHfzCC1dspjC6N9EtzGDKQohnjHqquNGxn9EcSwgCEiYJ7PwwV5g8LbBnfCVbho",
  "key36": "5WgrLsmhtfQXnZuzPdjy9wFzNqtbkHf2BWfckBhzaJxokem1nyvSSpXS9RxmqgAfhSrDRZTqWbd9o8YX4MtcFpGE",
  "key37": "53LCfUB5ieBJfja5Dsx82G4hXdn1MJ8bmF5R1pzqxSKpPejJxcovzKXugvoewexFesfuRriJnGbNtjHRcRZofTRc",
  "key38": "5wznwfoT1TrdENHuZBXhhQDeWW7tAYKzUu7wBkVsNK5hbqhDWBM8tfVJCTgNwKaq9DHyEkcD5w1CGxdAnmvnKXxr"
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
