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
    "4QJmmpP5S91wdSMC9SR3765kgQfW9CaQLjVc7SBvvxksiWmCwGmpXbqMbt8jRMz1kXckfWqDRw9U1Cb6Y3pwKrKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gjL8ux88UoT4JmnJdAhDNhPEbqswQU1QW5iACVXn3TGhZXVvnQ3RGLr27BWMSThPJ7vqHwHrh3BFNxbkZrR6a9b",
  "key1": "61Rg8NQQgAAYeqFnZ67aK9JvuZeTRxQskUx6tKCsDCPVwVf6SBH14U7XNvqSnxQMtHs97nsNrxaEAJ2BDECgVQhj",
  "key2": "EQD4kGqwxXrKvmm6njhQo3wAY5WCdTVmDGrnKuhmFxvB1y2KpNpdcnkzwmW5MkwQCKUnttV3vgE5LvKdDuMtjYA",
  "key3": "5vkzgEGU2YBQ7fewjEvTB25wHUejdemZTGC3d5bqTG2NTyaL4nwTA4uD527Xe2yHfkxWorjBApxjMDFZZJSsdsde",
  "key4": "4qwETjU7w3uMEWRCmn4iFW3Rf3JKCeEu6P7mPHtcUffHkWfMH6yAdrbtAKYLMUAP6WnXPzrn3p6FAkaPyipYsD1u",
  "key5": "5eMKGQRyM4AEj226SXM4M5gT4aB9kkvkeDRRigCsLceP3DGa64se2XZ3eVRxMcYKr9JnsXEdyUsxqS3xpgF7jZnr",
  "key6": "4Pq2TJVdSrQRRqgx5RNwQXHtV5ukaYz6mHrNaCX1ZYreSZingax6wLcBMifx2BCFs3mkpZgc9MtVMxWRSoFzGjAs",
  "key7": "57U59CsV1WhjVab6debTBkz68SQpPWjcJ1JmxK1b79ef3u6YgLgKAKifaW3Kpfp9bLPvLPBzxGw37Co8ZoUs9Y8S",
  "key8": "zs6BF5g2oeyTSHbYtaKJh7nF8GyFQNUBPBCFjbu2M5EJLGAWLegSV9arckpLMj356NukXZnZTAyzqMGw6Un5LQm",
  "key9": "3aSzNpeARTwgs131ikFiqmhkr6pQxLzeqsaQX6BdkDMydcCSACoaUwZyfXDcXpZiWJDRk8pdAGuTAnbvgS1G1TfS",
  "key10": "2oxGRtqrvBnCTLpethXaRhW6sBn7MiZGhuQVbB92dUhi7yx1UFmSZ8vAoDf34GB1BRpzoKuqJatLYpVUC9LwWb2q",
  "key11": "26XEWdjX5DVebZjmJBSh24zz4RrEhPrVgeG6LT1b5Zyz9Jady158ecqDhpRH1vs7zRChkKrWdFfAdSfpnziYthTB",
  "key12": "3MEAsUr2jgpD8r3cNxf6tg31WACckqA13SoqPyqok61SM6RgH7bo13rg33ovEXJZLaaSYZxuk8cVbeYspbvqKvw5",
  "key13": "uVNnu1naZtGvgkKuBt3hqts6ESBmG49Eo5rJBTg2ymFbF5E3otq4hH8WA8MRCoyj78cemgnmMJBa1pk3W9q4jDB",
  "key14": "2UhDNvCdrQc4VGcLCabNti1bJiN42novMeewQtSsSw8XyKaWGC53MzVnpzyCSm3ppbiAGHP4cBxUt9Ak1p56Kvvk",
  "key15": "3NiGbeCvyWQ15aPZ4QwcfLw5q1Z2mNkcL9NFySMoeTk8AfStU6LAZdojs3d8pmFLkpAoH1o9JgPRfEfoEx3pNpYW",
  "key16": "MqXLdQJQXR31w1VSRiLL9WAjf66exfB8pq7bKh64YomLfj3ZM1dGrDNPWBB21QLM6Drzhq2Q9M27bNa32e5jR5y",
  "key17": "3e4d21VdeRq7o35Cf6WwM5xN38nfV4HA3f8uWynQgEqfoEjWuMknzbwsmtow3PMfhRYqMvXbENy5g3VTU3VknLdS",
  "key18": "5Na4HoRwLNd893Awbacfnxmk1DFPw9c5g6UoDEaDAti1i2KanpfoPnXmAiQ7AKPmgEQRs1tpZAPrzvQV5sMiaLhc",
  "key19": "5Aex576uMxd3cQt8Cvfk8MVQGAAoyxk7hqaZYzJ9RDcCko1RFTuLYBn1XPTBupxUKhrnfqDT75HHE2hXVDJeEG61",
  "key20": "3M9PYyEebfQTfUUfuiqJBfZ2nW7v87FqXJqM5qtSjCSs3gUabnXLjxJUtcutkFBqrtPSji1CCTcAYha6cERwmv8B",
  "key21": "4vA56LrnJX3JrpAbCFo1qE53YYLMuZK87nNqYT2he5ZAv2xUC3ZvRh8KvAQvNKcsiKLkCEL29rQoPgC7LBTGdJvs",
  "key22": "EPSJDd7afZK5P3ENwTP4EKuvz1cinKzWLXW7NFUEa9tMkb4vU8t4U7Lt7DPzvjuehyH35aqfwpCRkDSvBZCMcVQ",
  "key23": "4DaPZo6a3VYfc3NW9gE9m5uTVVybKuF5UwxpEJtfh8utsNKdw5Gd7trRGMeeaDscrJMgtuR4vj3h4ecV7KemBrx4",
  "key24": "pqtLRqVE1VzHz4Pz8Ap2z27vPGK4ZwdgXQjUx1Pvfm6T3ztEn9BBTYQh33dv8XdEib6kfssAonLKTQhKMPKrPBk",
  "key25": "eT4Ew2zfHceRNhU4XTPRJGBCQyeHs9vHG5NQKwV3KG5bXJGK6AEDJfe9x1cVRW1X7meyMz74Mbsx7j71XgFcxi5",
  "key26": "53zwSwktjeLki5SXQEDE4dxbQGqMhVuTAwnnEzzqnhdCUZHdtNa9eCkZRH2f7ZCQcwQxgpqexbT7je9zrMLAYomM",
  "key27": "5cJqnRNRrhtQM2huUk3XNTbhVrcKet8UG4gU9DxTsyRg7u1bPqUGo1nMCxJzWjpsdMDuA5ioXBbafkzVgvqM1Lm8",
  "key28": "4kFm4Yo1hXmdZeU71wSNaB4LvDjMCg8Eoer4HBAwwzZ81vu24YRHMh47TtpZA4XbN61w2CU4Jxn1X2SEF5txCWhj",
  "key29": "4bgGMg7YwwArHYyCEa96jJuD5saGxcZsbDrx96tcwu8WqyU88fh7PRv8nyGqRfyPJ33a95e9JsaM4QPrKc68fCgX",
  "key30": "42K7xinpDdWndcY5j8oGWq5UADkhB6Z5FBCjFsp5JbGB4VTKj299gckagkyynG3vmSMmX6SbW71gdrWnWQ8LU2qk",
  "key31": "4akNnKwcAUU89z7EVMyEeGqcdGrk3GSB2pJN9Y2iUdJjNeA93mTHSUkWEBLWJNoYtcrLKFJT2fno84M31ZeiedTj",
  "key32": "3JNNsL2ADeU6UBb5umndtrsyobHhzyqdmQzoeVNNWQ8fWZtkBSY8XJabTiANE8H9J6TwUVrayPtK7fZShHzoPSs6",
  "key33": "5BTbdS4qPMqYdDpuXCjmy1cSndKNZE1h9n6FFotnStkxQcGdGuSs7gaSXVremfm84dv13w4EKyFZFn4reJamXBnq",
  "key34": "3j8aJKrUuPHFETZUfKhEu9N52usS7f1uPaZstNE9YA62ZbmaLnbmJabcijBP7uNK8gabep1A5WtM7tdA4e8tntd5",
  "key35": "4myjf4abqFuxsWatLfFe8C3PF2DkoCHqWG1NocKLJm7vHbsx15ik5BFum9EaNuM3HRyjHBqbm15ZKks8JaLP987r",
  "key36": "3fxTF4ZXZk8MqxHNzivo2eEgCF33wrTrC4neFQz49dFgudtpFynSTJGqZ4sPKgn7cKYrCCFYouBY8ConXpreCtjE",
  "key37": "qAtSzZ45V3p1rwYoqCjMB7kzDTV4QMiFNUD71i1g8ncXVGDpS8JDuHJNbLQ7pWojsFHawgJJayzYiepi6s8AUKs",
  "key38": "3aKZbkheUuqfNsdS6v34iRjAS9mr1CWE58dh92ctPA5pueGUc7UY1XB7tutTMuP4GKGWEKQZBTxMCzXDN5JDnGMz",
  "key39": "4Sngjn9wqrj2inbieXA5rXoEjSPbTZfy8b4u37FTjyBiaTg1rHHYKQ2t61pxDezE1DfzqyoetsTsMtgJZw5nSayb"
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
