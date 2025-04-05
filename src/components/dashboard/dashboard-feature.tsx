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
    "4K7Ppbopj5V91ezpU9PMyk9es6LAdMXm8Y3huADsPaMyXz2qnuiLoKvhFHzNjEdYU9x1ucL7mzWiEUpsFiSCL1og"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GRcht4YqCi3S7AFpkb6towQDdzY4ibjXTgrHZxjP34nBgYQ1nwieQTcCSepq2arkkXTeWkfSjK3FKboyb9hB4jL",
  "key1": "5antbec9wKSvWe8DebmtNhvdZkb5VRz49BLGwrQxGDXk84tbKNt2gsanhbvzAAgjQ3rhs6fuUZb4wGF7XrziwT4s",
  "key2": "4uafHt9T74xyLBueKfaAyX9Qev2e3YEoBqP6nDEsz25fLeCpJ8JmGcsB9J9NjVPkhHLhdC8DWJ2T7dkbwrm1HGwb",
  "key3": "2C93BGQov1PdUD5Xs1ipfLovHfFAEdxnVKYrGDrpKyPoiDGDcMRh2mxMDkMeBfi7xfUDdHHRGEcAcs2JZUYAut4y",
  "key4": "5n6SgwEPaH2cyME3nMBNQRMPhvPm8Ea5GLxzL7xDgC8ZGYffu61PBoj5UYA8L4jzeaq3ua5tCA3ikxBXDGqdLPDg",
  "key5": "J148sdRa5vscrikjprkLk5z9H5yXyKSr3xGMbbv7GZLPqmpzVhx7DDFTsDujtmS7eFb716LFmxXHGMT2gmAf4us",
  "key6": "QjboGtFVvv5McdqrVaL3Nkqrk85xtMt8WJqNEgE1LZwt1P6vNPj6Qf5bsjaKCX3gncvYVre2KPG6DbivhPLE17w",
  "key7": "5yuGxRHbkQVDZakbBRcdRKLomq8EGojb8eCEpUHYjkFVi4whKRq81WkvogDFxEXbqM5w7tKumFhhErgMvJeL1KcV",
  "key8": "RpREwvwduWVGg5hwgYattW5JYsoTfc3RWuKedhx2q7cCtDW4mbcRmomrFJPeVRQCzet3tAcPmG7aKU4Jmt3qUbV",
  "key9": "aXjio8dBPtYcrLcc8rT8EiaHtzx5WotHoNrSjb5jQKNVtsJ2HMrYFfUAAxUoQUVJvEGAsuowxz2YpArd3tTStu1",
  "key10": "2Kz4YwLfpWZiCu9izn7KRrH9sQqt6PzhiADh7R2QNoX6PpPo5eiTZ5T4zTcp1Mjca2PywRMhJtu4S1KUbVTatskL",
  "key11": "2ssa7mhj27iX8P6ftUJCK1pEqYF9YWUz6f86sTrUvbaNRTSVzhcnsgLV39446QP58MhJQiQjRka6wPnQ7wT3kETx",
  "key12": "28ikNTHHMS1syQ8eZTd8SB2tLvkjV87bM6mG7koPyUZLgaaBaqYjRTTwpdFwX6fb3FFUtQVvMJhxWFfP7r8Fjhye",
  "key13": "49fYR3dBrUzSZUXTLxEtRRNrwBvHtC5fdwz2aa9sSJxQZVrdZwkwXHrfGAaWLh8GA1CJj19Xgegi2sTa2y36fTKP",
  "key14": "5G5wBmwbErnQJrziJd1Z1si8NPxJ362giRTKMFynRbAhv8AevS2eMocf2QuF5pyUdBsD34gcDsgjwtZ5W269Efnw",
  "key15": "2Dcq2K3pS6okB8yXEyLxVDWFzKZaf893U7LTPYmN3pmHDn9rq8vEyXZYx3T2pbonAoNkYnMnJLXc6EKFkXN6e2bN",
  "key16": "3mWNkCH2WaNvLtnGNMbqu5J27SDnx5YMGNwtguQ7zaZQoTmN7toJyLj5tqXhH8DnSWvcmbBTcB6siZEZJ2gjDkJu",
  "key17": "t8drv4GimxBpJ4DZpmZVt6mG8ccyD5hR21o8EZmtJ2bwZeQdDwgisNN4Jhf1QGgxPGHhfoQzVXacREHpqN2kgJk",
  "key18": "2woNgcALHg6iS1xNttu4STXQe3CXXPBa6yaSAcC4V8eCiB2KuNQKwKJKU5pHAsAShSg2vTQU2jPcheit5ZtrQhiP",
  "key19": "3pgnTRxXQr15MoKF2q7nzpHszLCY1uemeQDatuEeBbNeSzp3E421WVpjNE8YFoVZ58grBQFNeJZeYei3ZAwdhY8K",
  "key20": "3D2Yd3rR3GF1KpbswouA7FpHBXgtz7Ni2TByrcNsCpr2zoVcjD3WSEvJM6wt5qzsovuiZZKbCALJRmdmQqks1DNx",
  "key21": "MVRALJ27MRzznkdp89RkddwW4A2thQeWJkyEc9GtVutgcMuBmRV64UACfYHotNboBPuVr4L5C3oJivVzCbz3EoF",
  "key22": "5TJgTry2dfgfZAJsaafsnjNr5i6tjKQcNM9urpZeSmLP1j8EAbgJbiDAZPtFHWroKfHfa44xffBDAts4i4RMYqhi",
  "key23": "g1eJUaaZhhDvtUvA5fsHKeY95q6YR3QNg1HSPVSS83XU6QTDearNWxoh6jXgcSm8K28tm9auYDpVcNX5g6dJpnd",
  "key24": "55Xg4GaLs8U1XjYMX7vwgEB5AZFUrUsruqzqv5mwq5nSLx3gtsL95WhoSZnkkfhz38c7JyC4cp8ix8vUvKxnABjm",
  "key25": "3ofQx9zz92Z2yK2uqfrRRuz8cRHaZfwNExwsTKdr1aAsoASoxgbQzU2wBTWtCNky1DbhkB9tSj7FjiYZPBd1dVVN",
  "key26": "hj6CNENm8BTZe6Utumahg6VWJgY7X31SxogC9DG3HiTuZdcd9XMp86NnzQJXzPtg3S6VG4BxjGnReVkUXqJVF7x",
  "key27": "2hcNnTUpWn2SETCeYFr5yzYNpovdmKob6sinsrCC4FKHZdaWgoDuXcS4C28EYEcCqSoZwbPHhrtT7f6i5BKyYQTY",
  "key28": "3qRjsyHTciHK4DiNvtwEw5i92SorZrWZuaAyc8yhFvdzXZxdcTShnsWdB3T4pky22VrAtUaAwjQKDReM6wiYPrqz",
  "key29": "2s1aUkaV2GPmZVJaRn4eYSTfj6JoCxTX4iHyzALzmhxDpf9CoB6bGPJH6vU2TjvK466aFM7QjyxYAYaeUrX2vPMj",
  "key30": "4xPpiNf7jzpyGgGQkWQZoTTS2qSKR4TGnaULb6g6pbzFRVWtVJ4dnLfx6WZUe77a8unYhsEBNmbCNRN3nDT9DbGj",
  "key31": "2mbX756KXwr844mxUxFkURhrxyVj8eznUhpLPcyCT6mRQyczK6VPsVhujWMnwXHLjwJ9HJpFFWa8vBgoMUicGTCJ",
  "key32": "53WLR2uRbyZ8BYwFC6u9V7tbxFBNTHUfX8NqxjQ6reghWH7n9tW1ioVKkw1KCTZqCoF16TLi5Tw1x3DqyhR6k3Fd",
  "key33": "2jP65MaZs9CQtoahW1qatcz5ad5RqG1PnUfziioDgwrbhDk8JYsn8dBy3QuWQZavqqzQSdNbGtTagqbwpXoy6PJP",
  "key34": "3LCQyYdXozWyRebYMg4ageH6sZ59qAUaxETnAz8JXXXEfWz9xtZWrKNABLUUHBUForyj1TQ4QvBo9ga4UCH27tk4",
  "key35": "3vUte9NC495i5ooNpFkHjBCqFXBAe2zrNwA81S4b5eeEMHiFGEat3pdJch85rFeGE46WS6njfZGPjJJGasKaEcpW",
  "key36": "55REtSTf1sx4HQRDAhqB6bqZMzGbRPcL9VJYcSCC9i8WsHy2yPSrV3QLhipEFGtSmBr2F3TmyANeoeWyQGVEtQu4",
  "key37": "5onH6Wm6HQT2cxnRkkoTPGRsYPLEJPZG2KTFaxrgKVHD142ZtGusN96J6oeyuF4t6ZaG1rjtmCJztfNgbMFdPfPe",
  "key38": "3NLMu9uqz6MPVeFztmGBBZT3EV2xtwEbbMCCXG1T2SukcsHBkEmsp2We23Rzb8wimrKHhGJ6PbeNM2aT4FdCiYAe",
  "key39": "3kwrp1nqdj41weHiMxZegNojyfgrmpzyMJzxUiFEvobY1XWEUv5vLMnQDEUZv3b1sjeEa1mU9amand1r3cCRRdK1",
  "key40": "3VWNwFPEqREy7Z3qeFB4di1U1mVuz4GqAy5wWvSULB47sB96vKJ62JzeYxChQedwMHVZEdw7oFBjxEBcfcKFoz1z",
  "key41": "3sKWoqhsboG15dYGZ5oXjo9DRt4kUokpZRMrobuCH4ea9JgKRbznjnuvFFKKtbPgfu4e4Q1PYMReqzQSWJX3vdQu",
  "key42": "5TSdQGCJ9rVA3cjq8uQGwGJ27vciYPxJ1DRnVimdQrzcndevwXVTJN3iFo5D1iqHd5wmWQmyqyeuTF9SzLjpCcAe",
  "key43": "2VfJ67e5tZ8mp4JwJwDreeRjFRVMpVhnKWg2hyDQ5AXaafKXdgT3AZAsgKVtP9ofRhbJVp6WoiKaFXRpvbFjACXR",
  "key44": "5dsatstSuJ8gQ37gZptg9pUStZAN5wiy2opZH6xFn7rpXbZC9tKc2LQhHJySZd2od6RA6DWFkHdq8vzAh1pdvD88"
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
