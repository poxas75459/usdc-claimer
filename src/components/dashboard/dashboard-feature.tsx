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
    "5Xobym8tvJPoxWSmiEQquSyLwRgxWX13pj1QZGrLtPQhD3jqBYZa4z3yHmHUG2tuKibzNDcAHPFYgDh7QogDK1Hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "373d2urNYo3bUCKqxbFvmmAcXkhu6NQP6nB1WFmSCRhbXe5uL9EaGTDn6iHK1SD33DQBrJrtyxAFhY9s4WoYWuqx",
  "key1": "3ihccfBWrv1aiC3mYP2r9A48s4iDwUQDgSQG9P51H2VCZ8KYqJRmDVsCaDak52qL93QyZTDn3g6zZMeifVwoj5vQ",
  "key2": "2hxGZ9Lit3bFZ2EKp88vMyh3md8rCeRdLuUyE1Tdw8PC2j17dD3BQ1ghiC1fKhdZgwfsaSpHraqx4vSa1DL4CG1J",
  "key3": "t1bVzYqsvjbZ7phmyQvJ8JPKKiCDjYsH3T7GS4eoXh3wPQe8R5yRWyRckcenpMqNsvKnWB8EiY8S11TP7YBHc9W",
  "key4": "3tJ2tyZKSgYtu8gzwDff5nKvrPRcYR1ntyZmGaWvyneoQTh6m8Vpcoe2o5vE75PF95RuWpXbN3RtTVuCXX4eso5M",
  "key5": "4Wf4GpYg2bmLiR8PtPaBBtBUkcTeqt8an3aSeJ998i1DewfUzBRdttVoj1cMfbwAPR8cDxhnE8CpqAod6pifLx4X",
  "key6": "5f6Z1FAyxarqVisJ7sjFyWpjspFNfYnv2RGA45qQgavn4yM61qj3GgxgECP1iETyidJRFLjKq5MjCKHXL2A54KvN",
  "key7": "5DRdNpqkUVHbV6yvHyvfSzxiChcLnr45fG3ygQEGKhgkFLeP4kpCtcGYRx2qrhvEQyrsa4rNj4rBXKS2wCu1vMmc",
  "key8": "46fdnX5LmLsKUk7yXzyTmN5tLAvNE5RFLfzE1xc1rKNgZSXgK6S5Kh7EaW8C4hDRPBo27PWK6gMufCkaHzQK6yce",
  "key9": "4cdo9QTAdmcs38cixYYvR7YzbBMaAh43MAPpjgjgifxT5abqs3wXFHASG3CcmNq46ht79S5bdVXdQaJZhXrnzi5H",
  "key10": "5kyecA2WKyCnhC2AGPgNjcuaNEfCHBRgX6A84LSGjDgPsUgQEStSxm38pFnw4qZTJYYFadmTuaAN4aZNnyMjbazo",
  "key11": "26XcXeN3cvqsuPVSMEMtfz4pXgyxbpX17M4k12y6Ug3X5ezojdzEJ9f5nRKoVYV38DJKHZ8NgT6QwfZQdEtWSQ1A",
  "key12": "4crjZ4rd7bkrtcq8GGkoXWb1bwccdJT2G6A2WkRMTExFJpKvAnrCnJNKgYrXYtiJpWPzxUxFsQmNxnMEFXuP2Few",
  "key13": "e1woBoEzgR93ayBAJG7QN6zb7rtjgoQQif8u19ZdUxEUSTLVrxm4FmvzFUjWFcGaiP5k7zWKuX8HnTj3YV1k7jZ",
  "key14": "2EsHwT9LDAZ2AixbiBCi3AvdSaC6enMJFdi1yZSc4dX8NUwebKy1toEb8eHcYo1qHNuRVsNmuCty7NdFZnDbghfC",
  "key15": "2H2FTzH3Vo1qhD2vaQ43u3C23V1BGBR8maUVHkAUPysCVuyTmamuUoPhAWJkwZAaR5SZivX7oeXV6j7Hor3sLw6i",
  "key16": "2xrjgGxRPLWrztRFMgWFn2iQKX9bLRvsN7LJuBkSXwehxk9CNN6vft3fKUXtHcve5WbEmhZEsKKLkKVyJgdMUAZ6",
  "key17": "3Xi3rJQcBxAPzLiL54zjWyqTkp2CRLGvWzjhK8kTATMqenYGtYnkNqhDdrmvdigT4c9RfQQhmei1usz6CNE6veZ9",
  "key18": "3RPEX8mZJPb6jRaS2DwYo2BnBHQCAQ7wMQeZ9XKZkbgBQsK8QBp38qTUuHoB1vg7JkEcda2Tcav1B5ABXUAsJ2Mv",
  "key19": "4TzEzzLWmwJfgz6wTMXKkd94p4j3Ss78GWRqvvj6dgVwBc1p3Ch6Zhw52X1PwFZGfpHkaLznbzhc1y2FwS2vnkTh",
  "key20": "5L6RcbtzhqTZYPffic2LKAgUSkAncFWGuiPvyxiHLdxAg4c2DbNWSvySiPuKc9qDDkGT2tu5UWXso7xtFY4EXY1R",
  "key21": "4Af3puf794hPUcCrxZa5292NkGcPzjox873qXYjAXaWfbK73Yb6A8E7qt8E6YoUXtseFDXX9MsYuxpRtBuH3N9hA",
  "key22": "5DgwtjiZhzQNVTk39dHtA9L3naTskzTqNX4PKSR3LzEMLZhSHJPpjuShS65CWf2yks6TwQaQgZBkUi3zCr47kv9x",
  "key23": "2ayPu2TWi5cVA3NXDUMo4PfFWmGHj89iY6SUi2WPv5uF5ipJ7veqCJiHdTzz7VTWbS9KmPa8kF4WwCHqYyi6kTCh",
  "key24": "4xAsLBdaCm3Gerkvhc2FMaqhhontibpWUPNgtW7AgKiuEedk5q1JBFihHRcDW6A6dZd2p9LUsPKYM41AwrN634yT",
  "key25": "Nizkw4ANJ7A6cioLAXTZCEbZkixCcUHU2eZG4P918zbZn4D2MdQFKXhvLWgyanBSqg7CNDRzWHFMvhu9GyrS3DU",
  "key26": "4ETwnLpcmm5Y5t7FgPhiwDyUF9r4yTfqkKqXjy8nYKyQjcuB8V4wyRHnDLrKuosc1jNKXvTxQEiMHXotVYu3pW2i",
  "key27": "3FSiDGdPo3CEavg2Y8SEhk2mxbt9BzDPf9YwXqWvFTpnWabff9PKaeZMsHqxYyYu7i7Bx2NZs7oNXh2evag8SdAR",
  "key28": "2X8hgAoojGHq2ATERNpgGDfKT2dfFTvWXRYZg84ZVP2kJcmKnYJM5ThEEtG6ZJmCZ4uNurtJFccHhQGNzc7bU8BD",
  "key29": "3PA7TpbkQn3f8beZdG1135pm5fGFr19CwGT2XwWWUoTyeB4ZjwmFdRz984TBHdCnfRLtC1byFQA3pfWMmDbFJ5ze",
  "key30": "34jbohvYivrpbQvQ7X42LC9nbjAppKZA22GuEMKiiE26WqBLABgLKSDM6Apt2rUhFfCszggCfE3gv84s1qZUoTPY",
  "key31": "5xppddBGAJoAfbTZsg3nbWt2rdug7rdyCtaRr9DfpL5T9Kfz1ctLpRRtthLyBtkMnyTN295U9wXKcybRCi4N5UJ7",
  "key32": "34i1GhHGGyKQtwRQqYU94muvBEnQ4pERXXjoacEhP4fiCkF36Eu2VKQbjNgipxk5B4vhX79f4wxZbh8QVR1dtr3e",
  "key33": "t5LDQRWPJBEziEunNY7A44cELkaMG3kLdr1365o1y2WG4Ydy6bzaLUKktKmJdCqgS1HdkxU4amWcagdEHnyd89i",
  "key34": "55wnC4uRzXob39Bo1hTfRoYG2grXojCmysjNY46RoWeTCyVwWzjs8p5BWmrGgqWjSLULeC7nRu4wn2gdFDmVU1a4",
  "key35": "4rvHs4TLNXjZu5SRcuW64UwcDiiK1TKEVWXEQsCiHfCr59JmsL2Xc35B5oLo2MgRAnsg4LhVLAwvr79stMjhszWM",
  "key36": "4DmFGU1xteoJqmfKsLmkJAXT5n4tsd2DprV9BrU1w1RiGDxFivjXaYs2RLVys7WDvTnBuZZmZZpfRTNnfDFq1Af5",
  "key37": "LCRfCkit5o9uMRzAZUG8qj6XuzBG3ez4X3GGd96nMnHjZVc7vxCDsMKxUpMNrRwMkbreUzfv56KiG2L1txTwGRE",
  "key38": "3ahWs7PBVRnP4KZTBy5Bd6ekBNT2tSeU2VKwFgjQ2aswVNn5T7P3WXBT3exGdQtEF8UmdQMPRMisFzUfVPSwsWQU",
  "key39": "2qcgaic85FawU9qZ3sfSD4a4qiGVh5PhDZxMnev7T5942kX5DgficeSWGHTFoG1e1dCHdFFrgJnTRctiYTLU7bwC",
  "key40": "4Vo1RAjggfPaH5VcePUUKANUBs2zqxRFnnFDXy7qgrzJxKg8tGDoVg3iJrCGri3jNeUAU64zGa9nFCAaHef7K72Q",
  "key41": "2JfeAsg6YeN2Yoop6cyiLwnui7JYY2ijcD5mkFqi8mPryjdQxe9wgcJvThbNEeb1RYm3zK1tJpczpWiGzSRT5krd"
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
