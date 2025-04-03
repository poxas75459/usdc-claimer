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
    "5Yi4YfjLzCcNpsvrUjRuAbrEi8Wfe6559Gw84ncryQD79ErveE7JPdgi21YFKiPPohAXYaZxfR24GPtLVrU4QVzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rZ1Ckb32zz7G9xRfK2KriZt7f9Bbs4FXV6SabnBvK3bu9CRiUSZqotFMHGt2VXR5go7GKt33QjLd5ws2nBaWohB",
  "key1": "2NF3HEBfqvTL5f32mou1zn9b6ZV5j9mHuVQiJsBwjQEPMDspEGL7k4HQTbV1ea28LPkcyGcKAEqx7fB4svHsC9zB",
  "key2": "4gPnsL2bGk1i1j9VW2crionNQ3g1v6wKTrEWzA6mmuxtqfzFs4qGot6wS5sVgVLnKxCH4dCN5rgLaKZMKamEtHLh",
  "key3": "5RFPLx7EvoBkVLcqbcRhrP2txV7StS1GxjcF6YHij5mGpttPhw4TXNbHaPHA2nxs6f5hzoDTg8xEaMYJTcpHTvDe",
  "key4": "5HJrz97nMGp2wkLx6Dj2UQN5MFCUFYnrdYMPgpsapeUhJdw84MewZBmr3w9qVeWJwmFi7KEbZTRZqUpm5HasnqX8",
  "key5": "3D1DarpmsQpWZ2qzjMjP2eF4hLZMmAtABtgUrQwMMbFKNQX8k7NF7GBBqvDCU4CNPPrmGcie1xfqWitz3yXHH4Es",
  "key6": "LT3CLwDAfCLCYfgh3V613rH4PXkiTDoLG9DuvkejvDRgfNW9vCadPbKTFEqdrQrADDobSFiDkAKrWQwQuFi3RaX",
  "key7": "4AjYkg5UocZYR1SWAP4o9x3XH1LJC8MvBPUxHpiACjU67fuXXGYZ6kduZuGNNAhJUDxCQF2skXAcmz95Z5uqre4h",
  "key8": "4sFzESD9MDger1pMKsa7ZM2cgSfMBGPrErpCrYHDyxp8V6hBT4NDMRUK5tKooAQ2wkGfLv5CFrn27YoaaKZv3CJC",
  "key9": "2Wj8ExbrPfnhfu6i5mof1BDcViLLcrDbkLerWNCioLSy6sSgARaM5VryHZ8LhCz9ibcotyWdUNDubuzjsMZPugCA",
  "key10": "5G3SSjtcWmoTWad6nHqEqQzAaNh5E8twcLH7LmmqD6H8jfpFetPY23gvYsez7jcDTE3suQ3wNvKMGUzYSuKnk8hg",
  "key11": "LqYdothbtXuP1D2pyik8PVZpVo16hD8y6W6smD5ngovQSQLpPr3ngYoD7L1M9XtsMYstNT7Xm2VAzBj68iB8L9C",
  "key12": "3pKxWCDEV4p4JUhntEBVwEQtKx5e9cnwymAgC8h6f8NG7tDMeUJNsBYHAcXsSZNUR9xSU9PhZ8BwUNTF9GZAA3nP",
  "key13": "43G2EBFjro1wFqfX8RGr3vmBXABPjVfNe8VThSZZ3zFpZ6rqwXPj2Gek8MA5PYpz1DxDdzo2Ra5mWifNs4oaWDYw",
  "key14": "2Zuv2EXRw5v5rhob6M73HZVrfEL9Hq5LiQe1rSU58E3NBGJQaG9kshaaeCv4Ge8ep5KfLU5af72JiNFjKhpk2qDa",
  "key15": "3VKtHnscZe3o9cpd4EiRadHRU4d2rv7Z6pb3dZdadpuuvF7kXEJTDLoGDm4SajmfxLTkckQ8NJKNQiZdnwNMkBqm",
  "key16": "46LjACm9EeZUkhqzm8bRfF8Xka8TtRyhaK9FJzEvVAz595T9HqWphcBNvi11sxSUS4iM7n4eaqt4dPsinQcPKiS8",
  "key17": "28iWViVFjHEfGZehLqdaWuUkxYrS941FCmGANkfPR67bwhenSZT9aVSWuYuWeksBBxtenA2wTrDSuL2QEr9yz6ai",
  "key18": "TiYE1JQEoyUgvqbZh8oD9aWN3XUdoDDz1UEGc6kr7cKoPwPKX7LWwdLwKRpyj6vLtwVpGL2nFu8rTnuDZjduUAr",
  "key19": "4q5NrRy6Yb8vCEUaXk6sHLpUyFejcTA5xAYdeyFKLEdQL9UQcFncz3vZ6cpNdicmhPKMYt5Z58FeUXgbs3MGJ59n",
  "key20": "4KUjRJ689xt43q8Gc6reuKSk2rR3oPcFrwL7bFijPqxdMJeG8jTTUaoH18FkehJuEkUSU2o3CqpE1pSXqQjaxrnz",
  "key21": "AeHusxJkQG9Dn865cWViBEa7fGE2aQqWpLihJ643dU5M5Ss4qFqGuovcQpWYJNEXfQQbjwWrCiFr1DQ1kjeSgWR",
  "key22": "4NyzDirQqtEkhCnYvd6KFkwfUgE6UTC6SBBa6ykC7oLxoGQdrUZcD2aB5J7vgYBnGZfd5DcQir8tcrF2JD7ZvM1c",
  "key23": "5AB1sn2K9FwvJkc8thbp4GiDgJXSt9fBR54Jo7VH328YmwNcNgJncaF3H9hAH5CeUXoSU7HGCmHE2PqS3wZ5J3PX",
  "key24": "bcFmHgbckd9N2v6Gu3cFftLGR8f5JmtPnyYMwLXzmdYVw4ayqKX4Aur5bSqAv3oxj4UZk6ztFqNR3KdMUoyNefv",
  "key25": "46xMKQCdXueyhw6ygaefCEWNcf5o8CETtMHa5msSdc6GbfWnNLzpzu66Bwj2hW3BTyWySUqqvi887m9mUzeL8w9B",
  "key26": "iEXgsn8rb5zeca85UsiR56Z72cFo8NnxuqLojk3JkfqLzDZXGmAhqC1XZdybGJH3NRftARoyKZ5yY5Phdv7GzEn",
  "key27": "38qKUzEBmrerY9wSn5GpRQgcM8k4pK6qy2S5ZM6rNWvk9WcuNkzwPQAA8vCWSrRmsfQ7w7u3k712f4iNuRWNiKKz",
  "key28": "3pvzAjY5sUifGTTt3aMUstc9mSxnrWYsHWVbwTtv7i95ihd66ujyCJ6XtXPjFRNW3qc8qFE3FRoyBoWKK6ZCLQFQ",
  "key29": "4vJnFuH1vdbdLFLEwqdrtkxKSA7izDH4cMDnXga3ahkAcbvYHfyKDFWomMiepSs611WftUN9VgSEzmJiagiRscX1",
  "key30": "3qcBFcmhc5DdtwrjDzbaxFUJfoQQpAbJaKsrgATuAoc261wHFVz1wfNR33qVc4KbVCxuR9n6k5rJ7NwHSBCsiw8H",
  "key31": "3eVmNeiURRKhipr4sJt6ssxnydNk3Racwh1LhLWKchSxn3wQvKEg8yAjNNu9JCRc1NbGbQGcTPLxoF8zDUdXjuNx",
  "key32": "5fjsXFivB3c7beGVGWG9hfeivAWiNTJUqhJ7aKjxJYDYvTavwa8q3r6GtqYVcfAXDUQRXKAq89ovVMhvnXcPnM4V",
  "key33": "3kQaDaB8hyF67kDm1nKF7ZNaFKWxkMehrmozE9of17FLWqREaP4wWzgMChtmsBLjpSXRH35L9hAmmgeN96hCBCnn",
  "key34": "2Ze8RNQ7aVpvYBpR3AP7Bqcii3DLSFCXwATndwjuMoLf1t3Ai6sdj5x4UxEWTuuJ3zQsTpiWrotPn7x5DhscCZR4",
  "key35": "3CKaBzV7MVQzjG2Xw8Xb6FPq4we273nmBSn6HwizwGncFMsq94Z1D4zLRiBPwA3WsdLmiGmWaAKKhSKhqC5zaeyk",
  "key36": "2HRE6t3r746cyMDVcVR3CB2Z5KGBHZETq7NE8tZnNyjgpAcczMib4h2HBttH44bMp5hWeqGHNJMa6d1wxdFn4Jkc",
  "key37": "5FvkqNWXnn6WLLuCUHMpzdik7mF5k5jDNnqqP4b25db2qLK1MjkxKJ6oNZzbBSskzmtE8fVB9E6PQKY9hQ8G4fHt",
  "key38": "3NRR8N6E5WSJkxyveMrVoXnRnQVkGHn3y1UDYcZU9gCqdKL5GUSeXz7FG49tahQcx361BSAtudUb6Cx9oi7f8vje",
  "key39": "M232xtgkQtrvCBXoTFjSFRbbBrU3zHGvys6jZvPygzrRvWkRidwcV7Bcsk6QiHtKhArj2ZYYuRcvAw2BKD2JezN",
  "key40": "5ZNQGD3YehTvttHw3NKq4Bjca9J3tGMCifozzNNYCoWYFRfaHCGYysgzNPwNdHi3u88PMMCiWUhcD6gKuV6hVoXP",
  "key41": "4zKykh55Fgxth5vi2rsXsLHXso91s2DbBqYZeQCKEw83k3czwAdmCHkkvxJSe3zpbFsT93o4nK3m13V4F1sPqb9U",
  "key42": "21itHEHZ7MXMw3YVsg3haLF851YypVjHuKEjtXBzprT41pM53fjz4HM8bCcQeW7hjsfYRVbuZ5xkmcideJyAtZwF",
  "key43": "4KxpCQtKqyd6LmDTZJ55Ehujnqxys7v5Ex3LffHaR4zujYsiEZuc2NKAwjaFqpMsAjsGhnZb3VYBwiuEf7w1q6kp",
  "key44": "bzkw1qUGxnHx3ADadfXH2pfknsMNBTjdWrFvwVg58QWU7fy7nrS71PZmB34ARKJvryZYjWWy8aXheh8jjSbfLHg",
  "key45": "5dnVVhS44Y6KtayreCFdu9YZG8stLCL2H2sJvY5nG2AyzcEoGz7MH9U4KsBobrU5LggSkBLB3saHJ8t6cwNCxGsg",
  "key46": "2BWpRjS2JT6c4ArDoMu86rVeVYXqcbVyoubfYJpSGD3GVm69FBoAynf8ZS6vbeJZnecY8vh1UR4N9sFbLLJFZkPp"
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
