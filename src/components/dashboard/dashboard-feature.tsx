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
    "3CzTmBSsmfJ3GmM4dtqZdbqSanZ4jfCH4LTmMfxwsewoou1DWGv3jcsD14YorEbjvzur14adxsz7W9YfXEn4FNz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WQthj5xVifzQT97HuANYe62eQyy7BjzfxSc5bzmcJ7UPZGba2Fhc8911Sq4mNVgDR5zGUW4PQXweebmMzUtgs7d",
  "key1": "48S3iaDQneYxNMCLzrwxmbAmGkqE79L2Jigar7fpdrdQUNfjSzRHF9eykAGiJ3WhXmpnUBmwonujPZPPxaf4mzDs",
  "key2": "ht5g5mForbkob3STGD2GULumB5Gci62ephgqWADiszTPXQMiX5RXAf8aPpyxJyaMQT9qTvJrygWLEyYncXBW3dK",
  "key3": "3Wq5XfVPDaU1MA8ZxtcsrGdgqr3ki5fLjwyAukAYFr4FLUSk8293LpBP9uKfHMdR7p1Lnnd6friSz1usjYacFyQF",
  "key4": "3NBBUZUx5J5j4Uh28VXfvN3CfqsFkt9tk7vnRTRdnu4vS5ksN3cfW9XJrW4weM6Czc3fy9jGzBzNS2zX9mTY2z2g",
  "key5": "4bgh4kyGSSnBiyrEmKPmXF4PiYPtfAh5EcSwkE7AV4Aaz9i3R9KqhrYADAtNSwfKvTW45wZydn3smwxxRzMpxegq",
  "key6": "4WzrBh2tthCDjz8WUe7Zz49uXuTDa5rJY6cKeFLodKK7TArtk38N4x4mkRFJSFu8sdRNLzEfdX2dgEqhnF8J7zZJ",
  "key7": "5ysD4Aoz8AuZ96dEgXZNwbdMzaUwKSXV4UcJ4WJYnSRM84QsWjCgz8K91m8P2pa6HmdpnWgQFYuVNxhECQPLf895",
  "key8": "2QZyYPfRYoa16YkaTrvu5ud69XnxP9wNKKXkX8ZfXK9octPT3D5fA1nQDJ27zyXLCJU6k3nNENT5BqHqFi9BdhEX",
  "key9": "64Ehn7SmHyxjKetw4xgXdhHFgBX8hvjRZx4PW1pJ9BymYtrS1TFUk9CXA5QD3ehiueCTKqqwo8WJbuRT4hUZygG3",
  "key10": "58DPWywbk3iAxsJUwxWjUhzTPXXd6ZchLzcD28b3ZtbjJh8hzZV3mQEC5NkJoG4QaFjx82Dy7ubNUX9ov4emN9gS",
  "key11": "3DzicQHYkBiw255x5BscoLa2jc6vhZN8D7hBMNb5LPNEkMo8wDzCDgSS247iVdpNgdccXtBzVmCDcdNhznvH1tL6",
  "key12": "4uB4cZ9bnTC3AQHTDhGjX7zqukRQ4TSsZAjpGiFFahzNBzeJHYUFWrhi29F1HhgWdEVyRivNP9rN7fbL5aNajPku",
  "key13": "5ypgSXNMDjT3TPP55pXhxeRyy5MnmTtKDdKHje8dFEiBXYiCDcGZ7yKkK6AB18qwmLLJECPvQFBAjbrFjKQVrS4p",
  "key14": "2vce1yDfARsf6HACdUeakcQF3R3hb5oN2v77tjiBA2YVD8jeghMwDQ8cvYHVT6ExHiFbrCTQCA87z3mW9qpUhHdq",
  "key15": "p9Jyucfmqtd3HEjwVNogMDgagYTkbppaLCt2vQDhGma7anAp6Lg3n3vuVvYMMeNLZ6jFmFfdMq16HXf7QhoHqRK",
  "key16": "4M46rqicaN4EWi77JaFzq3FkAWh98aKrLAr2BTZZe3jArPCiiZWnb8qQicnRw1G7KPWLNXfTb87eX35Boz2mxJE4",
  "key17": "2PmpYdkgETUWBuMEUxxHJNAjpV1f2NGZnbk6yWtS789r9wHLEvbetraVBX5dx3K6rHUKwTHERL2Ds9iS8VhpaFCW",
  "key18": "P8QkcYsneDoern3hUmEY16wkk7Y2Ke5FTWF55M1g14zizWVNw2URhCKoZdxyJ6etN866qoUokeWUjHHcs2zbB9b",
  "key19": "3kjaEtsYy67ktYDNZqazHWkhC6GRoa7i9e1uqthochtGEpaT47VC4PDgK9JmE42WQtKdxGzxPxEpdguRjmG2KwJY",
  "key20": "2uchTksQ8YcztwaN317vMVFDEa2Jto5crQekWuCCo9AiY3RCDw6vSkKKg2v8Hvmpx8CxBj6mhNdcQEh1uQr7pT62",
  "key21": "4cfTi5dq6nS56Bvv4Gc1RYL7romJ5KKB7C9h49TDFDgUmSY6PYFbeosCCt3gWT1MpBsxVaDkxEDzKySrYGR42mz9",
  "key22": "2ENEYAiG9SGL9NsWpMxGkZJRrPUSidK8w3qnjNAUyC34gWtppePhBbaRZuYPvKYu8DJsNDarRAnXQQE6H9WMZV7K",
  "key23": "5haAssTWsVFVjktqDDA4jUCiLssGiM8S54YK7msqvSrLb5UaygucQWqDcUc9ZCLa7TdThiK9RcVAXKpAuUXMHpSa",
  "key24": "4AZMjgS8fiHkEEEFoHGUJQcquogGwwo3MESAUvFQWtgHXsYyc88LsYeBw74TPjCw9Jt33moENyiR8pJMh25FSYS4",
  "key25": "5ZeCRvUjhX81Ru2mSXH7TU7JWtBz7jHkQmXa1RVBT4NQxwNavWhhQq6pxX8hPZxUZoa5nPTSGBYfBZs6RrK4QPkS",
  "key26": "4Z3vR7nMUZQaHnvZ67oLEemfKAzNKAa8dtd4HRE1CiBFBEHq6Qn5NgbrqCbP7hVG6ek35X7og2KEUid9BRq5Zk4H",
  "key27": "4j7nH3dgwcLsMPt3hzN8yurFu1X5AY6XukHqJV2zfRP591d8tHLqKkbg7Zno8ZFzLsN9UrPPLtctJDpuFJ8yWUQZ",
  "key28": "4KxdrreaGP6YjZNB3WRajwfANmeLFutAzEECUmAiQEz8HzJvVMfXW5KBfGrJL4qtnNVorLpWukJbigYQqmnUydjj",
  "key29": "5Q8KUhPW8qFZRkJEwsWfRx1uQoJYpWApVEDArPnFXyiobEGFUAiSBwhVhm3sVQxb1Rhb7JWg45fRv55ArqtUFLXU",
  "key30": "3vemNSixeS1dQADwiU3JTZgypfgvMSBWV7KcGVFv8njMfMntQyCzjXnTcfrdehicZUqrwWimreuh6AWJpVaF5myE",
  "key31": "5jWc4161WFJ9FH5AjBCa44RmkDqXjASG5zdLWV6gYRJjyN2TphytYaFEY4ddoNnDCTWDqz7BSRnMTbiFApZGJtQi",
  "key32": "4GZ7NzGpXaN9egHtoEcqNdiXiVD5aM4v9BjTqFPwgGoZwd8gFy3UzHHrvk2aLibdu1UJLdeL1JtofYQbkG86kr3X",
  "key33": "3hof3xUjy5hr7vpjFX7oYGD69TfhnK6HQUu3FSJM1UfuNXKNqx4vAx8tJD5GS2rfom8KRxr8yHWzTxidtXux5gXN",
  "key34": "5EB9UU8kDZBbhsxUjcuQDfv1qP48KHzgdVvwpHrHy2Xj3aKkzA9BMMHsar3nkjKzc4X9BWicQqiuX5ZCrFG7LkUV",
  "key35": "3oKbBa3T1wyJMkxosnmYgLLvGr6ANn4iN6EGvrXD3XCHz6Su3kS7t6jo9PJuNtDPcfuWuow9up8ZUE8JhnkBdwu",
  "key36": "4EvEcDmhC2zyX7NWPMn3Pk7HPQk85HVCYvwxXiSMpwqgUpkLpwc2QNQNW7kKvvxxjkoGQcgAh93ikNqY1TwCSHrq",
  "key37": "471624v1cxQ3UnKSy6tKUa4gy9baw87ntaTMRNMhQYxEHZvSen97m1dtoWEjzZv5X5uiMsY3sfb1aoX7W2GR8qv",
  "key38": "4BRx27DQnTM6tqnDi6z23w1VUykKNgnKPzp3DVFCVoTQZ6ac4BRjTZovRHGnBpothXLZp5z4nEYYpbecoqDhKhCQ",
  "key39": "2T25Hv5s921dd8LY4WrxpXmuGCSq1f8C7B8jNdy87w5PBdxVuGRLKQCBD6AMFv4vKMqTnHPwfivYL1vosxRhfXmT",
  "key40": "3rWoJPdkUQsDhyAy9ruYX925V4E3PP1Yc3H2DUwxZBzPasb4vhfonNnfLsgYGD5GvJxnPQvNgX3PiKwahnjrVdmZ",
  "key41": "4XFJMuC5fH63H4FaSQ5KKk87quXSPGyjRove6Sv1gD4NVJw5kED6dyRfAq1Hzo4FkVCRWvwus3jBxHNRarbCno23",
  "key42": "2tR97RdnaoYeLTXwHwgNYr77gMRPebTEYPwmPU4GtRRKkSh74d4BN7RPjumqjRG62SNtfgpew3DkWpGLafMiTA78",
  "key43": "USGebcws4vi66fbkmrJL22U4dYYs2XRKNKVauyDaXufBrmWECQfFNW5SJCVxNYEizYofRE6UoQgK1zLi1b7X6GB",
  "key44": "54wBt8smQD8ujyJxXysRJ8H3NpDrUWG3QkTonZZkFSA2fmR3S4yexhF34wpmRUqdV9z9XetTDwaKtSQmLdfwUoUV",
  "key45": "53BXJnxih1LLLCU5o2dqscRWCRvEdaEYkjvFo8taa8w6a357RiFHsdXCrc5hN3zGGQ6tkkSZNPLcki2uapEP3bv1",
  "key46": "tEB6nRB2k1UmvkTMosg1FxTf3GHZagn8xLfwPj8ZE69q2a1bE2NEX6GQ7wjgghMCcEN5N61z4QYqm7gZtYvDrp5"
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
