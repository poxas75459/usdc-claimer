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
    "5zTYaP8STipjKNNgWg9oNhXSjrumJFr6HZkuudewn5wnbLuUAY3q4NmtidY6piSrEKHVPEZdeRioroDtBuXQ2Ubc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c5ggyjLAxDDQZHVeT4hrjsY2c6GLERfDoq77QEDxfxnKzt5eShrxWAjC3h3nh8bLN6v4wfne6AqKyPEyJw4wSQ3",
  "key1": "5ZZ8n4TgrGmqPcrDzzoaAVhNJD9RD5FKSPk19ELNNViZ15Jk3XPqUs4YY36GvXwC6D1aaTDCXG1fhgv6njThTeRR",
  "key2": "D8nDsJrRrk8xjqS4QTQ9X7F8g6vxbaU2WzcfmTDSxNwdmerWPUxxTUeFTMLV4EfCR1RnvgsdKFjxDBps7LLtGWe",
  "key3": "2qJeZ1Zwdz4M4UTkXFSTUaMaJdnedfAG14nqKMm5MSWgyMKCAwjqFyPnAS1W3kohUr1HeqwedkjAMBCNEHS4zBz5",
  "key4": "5cAzbjjqJMrBbxHhsg8W5rF2peCTjnAHfY9yiS99VXQ88sSSAaUzCW9a9vDuKwaeRBSsuddM6JZDMUJJSUzYhCet",
  "key5": "5YbiSLJkx45KDo5Hz77HhB82TjARK4yUNbjUHLXBy8KtR8dY1ajdn71FVGs7TeJqm6nfzAZYbZCQvitNwYBLViNr",
  "key6": "5jfkYyTPV7w9YTLmwFgCcv2CCf1p3JJ9jJeNJ92q4x1wYNyoRzo4woXePTqXNnLpoUrcDhxoUKL4sQ2dezqhsp4E",
  "key7": "prhBNVPfdN9AcAzViZYCsHPFBvs8J17tPsSJ21jeoucNHcY2zEZ2JqrNPohq7W96bu7Mwq6RSnw8gcvWy7cCQBV",
  "key8": "4k8RB13xAQcY7Zm3G823WYwbF9VcPvjzxTTTmu4JGqRSQsidhK2iUaXmU1aE4n1famK2dN5fX2rw6uHgFVSko9yV",
  "key9": "5PyuD162Rq7zsKsEZ8t2eV5Br1BYDNbd5fSFAtYMvK41Nf6w3mNj6yFknbfei5YAB6YDBHgEq31nN14RuFNt4ecg",
  "key10": "4grF533vCaS2PZQ3QQsvjgYst4FEroX1C4Ux7Cxg215QmDAiZdiDy5yLcrqVGvLzM8V6c2EZD4KJL86Y1tuQpu3C",
  "key11": "gpLr81KG2cJdWCPjVAKasrK5ZG6eBnLYKhCi3b1da1unv7Sj9evTjQfov2JnfFuNbe5eCZhwJ5qQmV2MndzNUCh",
  "key12": "3r1tSGBNHDbfxKmv84iQfBjEpNeNLeo3NpqCK5ATU79MipJkYts72mu8QcaNP7PzZ2oSmsb2vvWUF5XS5n8vKeAy",
  "key13": "4VSoqb7Xj46Q1qzv1bgTNM7Z8VsvphgxHDi1mh3pwASukdADsbVZZtsgqna7eVVbY3M86he8VsuB7ZfshtUaU1oT",
  "key14": "5TQSipsi3dUDXcsCW3fooS9msN5Np55yMFLnqSGUd9KLFtGw6cHWRsjzzAt6d8HVA42fTm8pF44q1EM7hnFcqkpB",
  "key15": "BFC3aoC7ksR11dB3ZeW7a7xqr6WdsCj9q55TPNc83SWbPBxtVfVvYj7CbeYKitWuxmH8ji8oJEu1URhveNcmaAN",
  "key16": "3SSSTt4dvmQSPy8fcYyncVUtK9c2Y65JBZzMynXGw9n2qWeT3VZYMzzCtzAr5xgPf8xitwfkPSXR6RXKoXZrZpEg",
  "key17": "4fE8aresKeH9q5kvsJBBEdC19PkM9qWcd5scmSFEtBTJqNVY5XmtwiZs1E2CWFzStPG59xpUpMtHGwZdefbs5ex8",
  "key18": "5QByee2sNJ5ieYV1jtx4CXu5bpg6TdPnMnQsTEMkYVchQx6dCNRkpvZ7j929v74ZwdzULTh5JtJmTMawqUX54SNd",
  "key19": "54RdRMHwqVt8yv5WEWHMZy6Vry2WrgKRXPFaWoe7d1veQf1GvpmKoe4MGNSr2ppV9ntuaZE6kvLHZ35PwV2jvZ8C",
  "key20": "2MsEtFMHXzBQQg4f31oTetSrHqwpuyfTQEYr2rtGKUsHpBvPhnBGdMnkzpc3j2w184coTvgsNAa2pme7nZH9Hyk4",
  "key21": "3qzJimA7E218WbqCkM2USSaNAZAst3tDBzyUg9MvQxUGdN4jAyevaorRWE8EZvSRxMEiD4DVSKYQ9Svo1vSdsDDp",
  "key22": "29Xg5rttnJgQASadjSubzogiu4rprdMpTMMhfjQ56Gm5rcR3Xcp61oWGtU3DxhvhH3Q4WbFP7WuY6cU8UKQSaD1u",
  "key23": "3yD6cnLFUkfxGNjdhhFvoSpodQkbaTdZCVwGmiysCs3nheSGVqqTM5mWoQEv4dAGZXGYdmcy4eccA1iqQDUH9t8C",
  "key24": "8UNQ3rv9PafvNcTTc2rKPgkiqud6rCFLhaak7bAZphBphbw3K3Tej96xti5hDQhAVKBeyDVLUkKwvVoLEpTV1vD",
  "key25": "37ktWZZVp2kEgG8ZPySRVXXQVzs9ZzdHrphoS2gBmUeu4q2XdSJVGQeCnru1XXEpWHpN6hh4t9UzW78Fxi3Q2ZR2",
  "key26": "Gktd3RsUCdCseXhZG1vwK4SqQFG2m9FyQVAUhMQ84tKNzxMnsEjPVP6A88WjnKFNV2gkk5c9qcpdRXUDwp4LJHn",
  "key27": "J4FscgCvanj56eUjvjRxT7MQcHP6LuWmvwPf72wyWznJtr9Sh7reM4DGWrCwfPLzDrrGebPoR6WBL77EcFyWVJr",
  "key28": "5dZ4BRaoGjs8WwASULxwgCBHJ64JJ4uefG9ow861iZyieccBHGiV6eyz2AdDkwH3g1YWJ1rujkfd1c2ipzeK8KV6",
  "key29": "2Qtww3h1ZWeP4gpQAxeENxPSLev3QkCaDYZSvPxRpRFbYeeoftH7vCLJFjex9DCw72hYzN2JDVa54voqtFXiPs8o",
  "key30": "49Xuq7VThQdZDmamyYJ8sbWVbxPdXdvor1cjE5Ubd7Q2eWD64uoUdf9ikbxBsPybBQCF8rQbGGyx4wqZ5k1KYAvu",
  "key31": "5rc7SCGsbRt9Ku1jVSnSJ2JfdHGWzT5zksVTPKgbQ88aRZ4b8PQvtsKiVaCR6qPNohqZKHxeq8c1xzcfb89b8jQ1",
  "key32": "2WeMT7LKe6SzFPtmUt8Vh4bEsbNDMHqE1Bpd7WRRoZPWmTX13ktZD3Kdefsahyk6dGJkPoijHBXWEv3ymZn65Unx",
  "key33": "3YCU4ECDSnTr8rAWYRXwzeRVwZG2eNfGWDogmp3m3z1iacaGaKud87gx1ZitqC8oUifVBu7czjchVCs5A7Ngr2r9",
  "key34": "3Ljsn927f8oLcHaavLTWMYLVPjyCxLscsXRVz5zMGxzNi4e5bP3mvUEF2uJfA5NrntN7GG1BoZoVGELPngpTgh7A",
  "key35": "5UTv8skSw9g1tM3FxPpRxm49tArneQCZCK6cgUpabFMTfFbqWLeGtee1j6bjNj1dR64NUtDpbGtd7nQz928U7snT",
  "key36": "guWDq4Cc9nkMwpvZKkUkEdUksYLvmpDPgcj1Q3ajmTWdbYqCv8EqECDjLpUnskmTQaNZARzBRiVz5LpATexHJsT",
  "key37": "5ZvFWA8MZq2zkY2k2LpYoGk7akYhHG39MHeow4K65FKfmygeXApoHtjwn6URGCYJq9bM79hggRux5uxx2RaNY7PW",
  "key38": "4Kx2zpiEfkU7rhBVQ4nieP17ak9zo6eGrNX5MrLX9jejEBQvzdr5WwimvGfXrxzHLYoe2PXZRjNzw1F55MU7TJA6",
  "key39": "5wGswLntwCGUw1txTRvJS2cynGLwUA2fgrArzox73sGJxm4GznVg5XvPxH5YnyXi9AiAxnriZ8mdWNK8KQsmuvCV",
  "key40": "5eMyAPD1z7NwBHZiA5VmqkGkxutQ5R6LqTq1hpLgpkTkeQDYmbpbWWcYcewsM25hLwacWYgk2rdj5sxVUgcA33nb",
  "key41": "3P5ypbpkEbMXzrsceBT2ryaeDNUXnTpq9UystrJpooqBAevKonL4iAFCfy66ugygzaibVq9QtYb8UG8KZF2h5Epd",
  "key42": "jWhFf56QhaB5LAtMc65DBGg9ggAmbjDQhSgHhoPNUkF4oTLpTNKFDRCYsjyQ1zBnABpsUNQASEZUUoP8VseHvro",
  "key43": "3X9ypyssQraLoTwGz65vVuV92jmreuXoZ5QwcCEbSiJqEKBwUCGur3usrwCPYYHAbLNiUNx6ptaC1wffSWXnVFBY",
  "key44": "3dMhiaBYngkJyZ4GzJnLJd8CQYQvsbT9acFk4nvjL8Ue4W6Uyo9YjuYfntnAB7zzk4q3dC2YUVNXRjofZETTeVVU",
  "key45": "QjyFUpzvKurugrVBW2bTfXaPRnkcwpU6jvRL2pKCRT9TZHCmxRRThXKTrAjBK3Ea62LmXDsyF4xi11Wonxx8GSJ",
  "key46": "vAR24nrkeJSRGv4oU7Cz3QncWeBnZAVErLXpBMAvotDRZFTuuGsyeS5bDWCRuoCR42H3Ax5FzyK7cqAprEDgPJL"
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
