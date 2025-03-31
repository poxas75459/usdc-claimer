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
    "4w8EjgST8Kh9RAZyZgYCuz4himLbk9duJC2iZYoxvNziw1v8uDCqSfQFx8wZoxWK8TNBeQm1JCQme4kr6C1ZVPLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35nu9SPbgxDSWBqrxzpgwDGK4KJYKJF7jfaAtTAKbDguqNY1yrSwZVibCsBegbDe9ZEqcuvCNKbZNLoxGmDBM7JM",
  "key1": "58PL6k34D6GGRirmG1DMCyMut7mGAkDjf6WkTYdyWwFCGVVXZXEXdBwf9En6a51naDPY37CiCo8rkPoNUzrgYbad",
  "key2": "5bbqrPAmrER6jeSzHAPrUHnYx2Btiw8c9pJEudzxXbkXf39pruVRCeFchFN62t2KMoC3LMHVe3Fa7XygP5icSTxg",
  "key3": "4KjRhvuv4Q6Josr3F9nBaZgj1ejZwchTVETuFWbz5mCopy9MBh63UMMvtH4gFd4Fk8wrqN7qixWSdSDcX7Vuts5e",
  "key4": "512qFb4MVP6UFZWn4n5MmSxvUtYudS5ocMTscKw3EBLThLxbntuqjtms5zEy7g3JGTWuj1yr84bt6HLnpLNjXYLr",
  "key5": "4fGKjmFk5N3hwGYBdmtduHgVi3bsvjbAs78UvpPom7EQTH5L5aLjYEh8iYFicjVa54CWkZcgpQoMLeXJBQFxSguF",
  "key6": "4DWuBusJePHK6Dq1ZRvxDhbBWw1qnZ4SfdEbA11AKcwmuAaqMH4qPVD57g9N9aPqeGhpKV8dTs2VsjUYZCF168TQ",
  "key7": "4knW1xZWa87EnYZRvQ1t56Y17P627t8qMQ2Hgx6NLFFV1bx3GJMeBx8naLZGjPvmiyrys2dU7cBKmWtznLHVcra8",
  "key8": "5mM8tyGfFRkbn1dnis5atT1bQKhESWWnMgfbJhPazxWLFxHMJjULzacPofsW8m8Us1dgKeirPAu3XCM821juokzY",
  "key9": "2qqLfpvWCkS5KYmt61FH27x1d7gCoHhNfsYqK9aU9KB1TrKVbug79puj8GC1MJwPHgyzisyP7gHwqHjTuKxCYahH",
  "key10": "2winzcEc8N96R8xdFF93mrhRZJYCmnH2iv87qcvbEDsKTE2w7PjJn3ZVfC1LSeuivaJg8DiNg6ikk3FHHzpSfgEC",
  "key11": "2GaQ4QacGae8GGgYwuFBZSBwpF1oxdBst4BHfQfTfYBn4c6Kbt8EjgTCkGogRfqUKkeLHTCCyS11hz8P9j5epjbD",
  "key12": "4iiD5b7pRzw5WdnM7Ym51RiDt4b1zT37LPkaeKmRZEAJuEeqW5ibfipy9ndfxfQVxXkyEjRXX9zkstHgLLK5tjr9",
  "key13": "5brxRPvSdrBQrCXB9P3VuFHUdFtLrLuduJyXbiuaTZhznfHafspcuVKb7BjtAoBNaxnD712uqGqqBgkqma8g4P88",
  "key14": "wvp7xpgaQtNJ58TeDZsh74YT9cdVYA1zgYCqN3p4uxhP7sPS5oQDgsmHgoKfLnX3WWfwfry4cYDVJKbnfere5Hd",
  "key15": "3w5scJWWKCFrX8tzWD2idRykjA236fU15CkBRoVnBhv1GGHcHiWkaZ3knPYo5t1nmF2Xpd4VBp3Piw5jqDgi5g2J",
  "key16": "2Fz4mXsjyPZRiWfNPajHYETbGxYya7PFnqt5Cupf1UJF4AXUuAxTAtqGfcv9hzhFsE128PiofnNNTqX2KcjnXAgU",
  "key17": "4ZoGR3JCkpBm9EsQBQQoSmwBCMpEoy31zCWig7jzRi3k7qeqRJw1hYuRKZK16H3LHyMxhVWYhZrHMJUfMokCPXcV",
  "key18": "38Sz6c88cFZx5YszyzPmc5LQgKrz3SbM94RzoD6H4BrQFzQv11prGmWV9Dv7an8CXDjRtwtmyZ97za6d5BRYm2ux",
  "key19": "3fZmB6ygE79AHEFYihUyTW1brFZH9Gks3btgKL5dAATmmZ8fCWgGKcZKWfkKJF46QVMW8iF5L5fkfsMK8xEwbRG3",
  "key20": "31n4ohuogdVKDSyRy1a4bC17csisFQjx6XmsZzmbQ4i11uaPgXEsi9G8asV5HMBfqQpLQ3fQYJRAZTpHapSMmqEX",
  "key21": "53hXwZTNn6dkwy4Rt7heHhMdw7wLMaMQJBxmLDHdhX7uEwoAgVacYdCYH7JTj85kgb78bk4i14S6j7nuS2Fav9S6",
  "key22": "5DBUboMD2whiC7omZCBApnpHhKYKjvBkbeac7J6papEnhWqHaxXqD6zcVVjmwLgsG3uZMuvuBAwKVA4WeCcZK8GJ",
  "key23": "4hbe2M91t3vVPa5H6w7QKc9MooM94XCqXZtestK8GFQn9SEz9eJPm3CMYNp76GdrkuDTEX16PoFnKvqu3uuEfthB",
  "key24": "4fst3fLDbaoP4Uu6oZkBBf9UprqB8cvxdSPS48n9phJrtFp8enSCEF2fSARa1GT7gt4GrhCctEMY8Nw6GfcxNxLW",
  "key25": "62zpWHx5rBBLTZ6rmorxiYneRMxv1dBoWkzAP9fkBq3Xa4AxZMyWwWGPoqetZYScqeAnn2jGSZuF68u7bFoX1PU1",
  "key26": "56fXbGju2SEoY72tWh4AxyQZrzvfWs2nQP7G417ZABeSo2bAb1k43KQmDDkaPDnvMLETWvCE6xGdL1WY2Dgv6aK3",
  "key27": "3EVBnr8er18pecWicmWWHnt5F85gaqmYwjy7KVutVofhzTctxq8XzDvdbDnRa3XyWAnANjo81uhxMP3h61wsz5Vo",
  "key28": "5QCpQ1Ezr9ZCwPAriWZtMSB3n9Z3XucJWmxERnjDpGUC8xgmW46NesJhYjYGR77Jog5V8GsdpELLc6jCWQUZjQLJ",
  "key29": "WwTZsf66yEEBgJxAzg63B1aysCf72qWXmmZmz6Q1kRqHMCiRMniuuiH5iZySurR52eZHyrLnEv4Y8rsFrNfubck",
  "key30": "3aemVdrK7bHyQVCYXaX11F8yU7k4GC3ie3ysJSDNA9vwbfCmGfX1JXTeLUKuAvVimVfJLg5VZkGHx9iLV3smFajR",
  "key31": "24y5RJocveF15oWzeMjBqUDKxDDU2UzUGNhXozbiRmB95hgACGFoGUHzv6uC6UPYXmkDhaWjrAcQXS1dYcbzMERC",
  "key32": "4xbmogG6TCAzrexmY59nNT7HNQ3xSgamuyzuikstGrN4p4L8C1ARJXiGqQc64Xm44h8qcZCTKARVtnKwjFc4nmwh",
  "key33": "4z8r4MURTCRNTToyoyxYQPw3xwkofdaxowKWbvUu35hosHe8h9xn2y3PsT8uPLAkHTvCNDFEgbj38jcrHUfcmQps",
  "key34": "3QcLuWmYz1oun9MZUMMjaVeYQ2Ein5inZ44L5w81cKeGnzGT12rwDxwPkm2wkWsrAQ6zrqecPHfuChJJMV2wB64K",
  "key35": "61Zh78QZp4gXsJvUfKjpVx7KFD7jiBLAM5oqb5i9U2RbZZjGgCSfos94DhKc3ysH5zPpXHxpZSMKJVh5qrMomPSk",
  "key36": "5nsvad8LjCHZchQdg7bKhtUfjjwvKURbWFiJwoeCzGb6bTUvQav8YZH61DeXgS1Aj3Pms1rJy41MyoaiTqGWbhDq",
  "key37": "4aWCRsBLgrokj4fwcWQEu9QCh3SxZNaB8wW1j6Ph9YHgDknXQ7sHkTSxCWV1jXhoBu8psD4TUACMqbbHdHjh4Y4j",
  "key38": "4mvrooroVBStEoLeiFXGLsp68iAizvkMJPum7kpynHmRR5SgXr8t91NhdyG3gbSHBBeqMmTeFBnrsmPogAsTFc35",
  "key39": "kEDyrVedQqmV5QoqemS5ndbybCsRQHAkJtdDjWUtPcXtTLV5hekHnJdGQsMg8cADsefRSqxjcfbUBXkQGFowA4Y",
  "key40": "2eHHo9tsXjuUJn6TWupzTV8nmiXF6HtKkAehfu14AwFCu1D795JVEPGY5nkmNimSYE3C38DSyycXufxyydX8LUfo",
  "key41": "3s3qr3wcqVuhdEhtz61ZCMiBeAdUUqRjquU5AFP5nWuYc1PfuHwauZMuLwg9czNtGxSpp6v3zRgpYX5FN93hou5r",
  "key42": "4YgHfm1RZSxNNxPEUF6tiUbaVrjbdQidKN4BA3f4ugt1faPvnkXiuPW4m2Si2zQwj3joQdUNfCiP1ZLj1UaevU46",
  "key43": "44qWPa7Jju9sUMpJUQxQX2NudNRei3X5WwgvCPpBzJuFvBbvhkNNooo5ZJsxFm2cQJmSjapRLKYca3u787Zcuw7W"
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
