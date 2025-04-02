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
    "4tgoxs8hndzbbLMHL4YFAwsb1cw3S5awUxYdjbp1N7D9hquN3vaGMjTF9ZmVsfC73HZKvrmJVuoeGPQFcGRS8qiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uJrnEyWdCkdy3j8vgfuDRPFfViwunqVgBXzgPqwWxkeWGELZFcrhMk4cWDd7xf4rsEoa1DjzHjpuS5KJieJYFWv",
  "key1": "5q7VPLBFXVx3BRbsaNjmQJfFPkFBDuJ7PB7JMB64UNBWc8xCHP7QaGs1b8fKr5dqsapQ7QNrx2BABzVEW6ZAdhg6",
  "key2": "4kePvfWZGki2QpHtLnJMECRzvj8xUGX9v7Lv9jsa8YmiR5vPvYfBJvJY6Y8Z5mZ3jMHwJtfZZSseYKPVnak4RYj",
  "key3": "DvGJg6YMfMoU1jMLQCB6hbus9WhxXJMnviQxjZvZprGYmQGbE1j1GwBVnicBQJDcRjUquDgbgwjcBBzMXh7vKXP",
  "key4": "5rAmX5hES3gVRMTMszE926Zgnp8C91ycqSHkEugTux38BuKMZ2g5ABFHGC13Ppk4jiM6t8QwaVBtmpxzEt2EwZC1",
  "key5": "2GbVhPfuF4rq6MNx9pDjMThX8KtuPR7tDf2WmVqM6L6aVtbPx4idxA27JvhZfPc43CZFzQ3ejE5JCc9qWbz2ZbuW",
  "key6": "5mghXjTZaM2PW4f3jWxpxbZmx74ApBSB27QbUokejNf7EbPe4m9vXDviGn3YZ2B9uZGbMzwCUXqtdFnG3zBp2t4q",
  "key7": "3DWgNgVRDJ89AssK8q5gnSJNXEzFWSUwGLyMCi6SE1EQAiJKYcGwAgwLC8J8i5vQK4YRAJico1Zpn2KFpt7fVugG",
  "key8": "5XxJVCb4h2qV7cwTUd54XYYzwAmLCxYXpHWAQ5GNz1p46UnkYCWub6WxthvnyG2TwHadThmjgGJ9EyDUuyBjiQGr",
  "key9": "2P5jya2PaPafwrdACteY8FS2SRakdYZxLYaem45DofQvDXkKcuVWkPku3gtmDzauQ2dRQb6wEoA5WXnn7i655xsm",
  "key10": "5LiG9FV7z8Zf5dvMbru3x4DxFjTt18nqgjWo8raVbiA8BgVpxH5M197c73WDm6MisbuhCjAWvYcq9N99UehkmGoy",
  "key11": "4abAXyTGppk9QgvPFHW1RpsubZwgeMkrMiK6qtZJvEvvRu3kfs8xpccKD3yEsrcc9uA91tDnZusN156EtZ4Gq36o",
  "key12": "5xysu4vpdx2gAw3JqQcFwPiZ15TJSNXjUTHoG1t4bJESgfLq2FsmEcbWE44bDnoWghLZBGgihDoMpYy6f4RMet1y",
  "key13": "58fcBnpLet619xpd8kbXyLyD5KWyiKHxU54F5cJVfstDhijUnkxjH7x5XJXUF4zLn4SCQoznCto45oU1bExUvTW5",
  "key14": "61VF2XS2PSNYP5JgViFuFXsgEcrJfSpaVSnZnhw6PwwkLf5sdogt7CePJ8jyjchnDJjiP3TfLqZcr8ujAd7m6Da6",
  "key15": "5b8JZZAvN4XPm6jFLyqFu4y8cup2aEfwmx31MDWu1yNB69u9r5Wcm2Dqvo3yYFXu7TyRDspxqWE89sY9TRD6CszM",
  "key16": "2BX9cYaBty1itay7qAmFpBGbPYvWuB2eDT3awH7hsY9wFi8iERyvsdrMQbWZ6KaKAporjNdocwJf6ibpPzqQHnaL",
  "key17": "2s1ZbHcnULVQbtTyvf11j6MAMMpcni76WMZ2a8yTFncEWzvmFKALSTD31zs7PXD6RiSSoShZgWy6RnTX4vM3zGgg",
  "key18": "5qm2GWaS6iKZ3TYNUo3NpsPWwSn4vL1CzBU3j8QqXFru28WVmewPoaRLgo1tFG5TWzxk1ympcLATxbkoZZCza5VA",
  "key19": "4gMxy6PhHJqcZJjSMtimEC39kYS3sf5RymDbP4XUoo3xaSTnkr54GYwDPVHxGUUbgwLJwAMh5oKfN5yya6X8bEA5",
  "key20": "65XjDRL5A8qfRBuCJyn7kwNrbhxztqgXB7UuS6LRcb9Hqg32pFY1NrpZ57T67DJJBpa1YNGNjWd3KFi6njx6RYhs",
  "key21": "62V3wEuX36SdcDkM7yTaXbTTQpcQKNYXaZshU4MTnwP3rhByLuuu6LKSQYR1nVykV86qUduq4y1bamYMY1smVtPE",
  "key22": "5vNiyMpri4J1dwuL5roThgd7MHWcURNf9WFEDWotVnxQeYdws3T8aeSe5hbm38FpSAYf4WzJcriaiPCAkS9qnDYh",
  "key23": "28y2B3jjyFCZjmfBNSge6un6CLMu5QkQgkWPZj8dJzyvCMmoJsvHJRyNYrGVSHWNsxyju2Ux71AK4ctu71FqvbL3",
  "key24": "4WV4FbHJ6Y48AArC2n4azFNDdvYbVeruadDMQevKvWxq2efeaYadXs9Z6iCQPqGT18hDTMtYCTq2PMgt2z1ogGPi",
  "key25": "2cGuvRZUzEirsDAJ8SpWLVDgSXycXMvw7sw6wbjw2CMNgtz6AWGLBchdUSXobZA2gSz2vKUYfFQ8WeyY18Zto14G",
  "key26": "28CgxWu2S8X64fKLQhFwh1aai9jC7a67CbA7YaWuP5aPiAwGyLbsPgT5FEFYqhHHEUVgjpzCv9HRny5TYJMxZiui",
  "key27": "4rkxmuCk9y8kmCeRzGpQz4veX4MthghfMWiuMQeWx49W8X2W5ao9SBJUu5WyQ8sRk62LwnwBCJkfo6RRuKMuHacd",
  "key28": "24zgQgVoXzdazWL3w2CVKiV7xVjo2i77BeBGN1PMJ3ut6pBCqrCG2DJNntvpXDkZEry9SWs7cH1xduAtKxsWdymY",
  "key29": "3oLD4Sr9fhvfuNXK2JEeoSLgccGFhAmADtxq1gXLYmvz6x1uwUzL263cb8Z7BwnnWKyfrVubtP7cGBxSvkrQFr7s",
  "key30": "5ToMxpLSAHgrph8UpbbbouY7wvAn7g5Vr52zj2epUDBLRitmb6gbmaZgyy3bPmBccuKMTz7CuyYW5TNkETHS9pxM",
  "key31": "4LUMyATSDPUmSkmJ9KvSw2FfX3r8zKyAztxCCTht5iUuZ9nsHryLU2bCeS8VRrssx4TLTGShH3p6ri8ePpmGqRKu",
  "key32": "5PsPjdmrdL34xvj68zHiytPJCeEmbgxSmgZUZaRJBVcEsdGxskkDCT1WDJYm3JA1669DakoYXsQmAu3MJo6e38Bb",
  "key33": "5zBsmExmVvtzEdHRBZxayDKB9qt7EQt9TsfDULWw5hYS3LP6RcoLmyCQJNm8UCdokJRg2RgGFwpy2p8LEYKZiMEr",
  "key34": "3G9Peeq1e3LwgDujxY8yzx1x29486GtcdawoSfvEpwz47wjhUaxJcxmxUXPc1R1oKi4csJZeSCLGUbn9GBgzrrAo",
  "key35": "23Ep8sW3sLFnS7TrkEaRTA1a4JHyua7JysczyizmN3DGqYh2pTf5casg83uZ8mv3X4yD5tbdGYjdsNNBWDxGSLmT",
  "key36": "5ZQL4WQ8ZhR5CqZWvXn8mV2uryerZ2QFp7zJyig8usF5v3UP149PZ8kDFBmws8hDRUPpkY18U6xe1C8Scejwy5RG",
  "key37": "5sMcsCpHHmghr8wVtCpS6nvkoWWvnotonSr1G7XwGFQsTitBQ8XtuzBcVz9Nn1xoabw5uQC4edkia6B2R2oyTcZz",
  "key38": "2FY9AY2KXphhgi7djTZKp2k65a7bD8rKer9XkAvtpMkP2aPBM4eqQsieMyzyyncNyyXnZwtzNn2KP7CAMe6waqtV",
  "key39": "VPvMWGq3sXYHx81DfvdskVDiizcct5jsNgb3GuxYamJzwWg7xvtkF1R4PR3mmouQCXt4P1YKDWNAp6TKsuvTk7X",
  "key40": "3kMpmycbaN2Ngz2PNjpqQV14shq9uMNPr757UeuKN86CmfEsC1A9M9hBa163tfNawt6XsM6Dw881g7UmG1gS4sR2"
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
