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
    "4fjmS4w8CMbbt7qHdS9Fp1pR3MMos2eMqMQVB27GiYDLPXWFfEPHYM9mNtjSbv6bnHMrP9Z6dpuH85W15uk9EHgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AN2rkbVpTjmM1xpcqAqMS2xAqt8j7FxyEpR3jMZimz2ZbF3w2YcErd8w9CDD1i8M5gwJWroB23t8cNiamNXNte9",
  "key1": "61391X3X8JJViiEAMsKGJ4Q6SEzM4B4pWSsjHMEJTJe1UcdPZrHGc5d4FKX4X78ny63Gon6bX2khmdGeXq4q57ij",
  "key2": "21ZED32J4MNLSugrTwihg7WVsXMeikgB4rKcLTPPwkmPWqSBxgcSLitDnzF86sbBADgMLgCxEubwLCA7DzNFdbSq",
  "key3": "4Q7JNr7bHip7584aFWLiijDfjjjkgW7jK6HowUi3gma9kX2pdtXQ2BvgvGQCKf57DK3SqPkCpQae15fc6YBCeM4x",
  "key4": "63QbiP5VfeoeTZ2Du4Fzs9q2V4t8Vi5uJon6vFUb947NUZtv1D7HbUVYYNhjMjMwzZhRib6VwBxCwiJukfo53tW7",
  "key5": "4XE8NB7yW55PFZzrr2a3ZMGjCogcya9uYtj9VUMzqhAydsBMuSCekCAc1wMwnexaodk9rCU3eydKvbq7NhpNFV7J",
  "key6": "peSLVwPKZAQoQD48GuUosWCbMwKZuXuZGcrNxyaCqHmBNc5R6SKLa41C8BL5QAqsumrinpEd4aBpkWkrbSNUuqL",
  "key7": "4uHdbYpwGTcmR97ctRiVvNX1AmPDpzv96n7WYJG2UN47krymmnnDDCz4ca48p5z2AcfEGa4LmwYi2WzU3MEYun6w",
  "key8": "3FaVJTWKziX6srLjsYiPMwH58FoXgVveWKnC4wWdkmMNzTymWracBf19KYxgXyFg4XLgWS4HWUh6u8uVeQQfWKwd",
  "key9": "67ajyDtchxrncyy5rwJsrdy3ysfkZKt4pjsRxEMg8Wi2MTvZ1DqKVM7mYFpseghA52aZ6p4m5o2E6HekAWbKEU9g",
  "key10": "63eEYzEnSjaZjwo5EVSBLNayX1DEop68kJ4WjD7wehxVMXDYTJq5sVFR3XgVd8MtirN5kisaVdRiQDUHpBm4n6vx",
  "key11": "fk7uejce4jQFGcrwSSgLChSJcmsQi4rWdhsMsp9prtd2SfoAS2EYRBzknL91HhKzAbSR6pq7cj5WhXUKVWzg46Q",
  "key12": "2nwMFizGykenVkK1YWoP8TzwL8GAk1fdeVrFWT6zu1C8B9aDmpEVwXm99wUBv7SFLqYSCvtNJzA6KKHkHX2DUU72",
  "key13": "3B7dp18ujco3hJg5uqAq6WhzALtGMDDp2oPLoHSpv6ZGgUkrPUXtnbR7NQkw7jaZdksLfUjpW4WP5TkCwmtpDQUQ",
  "key14": "4ExJxw57XW7aJJBuGJ6HQJGmunuywTvEZSzVk2sFxUBLuUfVZqMcYwxS4kvLEWXk4qSdw9k9Dagm2MVMSfe8CiBk",
  "key15": "5WfoP6tBAN5sDg3meq6CCN17PXT62sRYiJp37v5Yn2wmD6emrM3nBiDsWNABAbmxkkMHD2RxVMZViC3GAHVkbNah",
  "key16": "4CsdXcxzPVFxYAY2CcyWmKU1a47e5JRQLeBxzuN5b1qyAP6KwGnQt8unaYYDCLq5JgTWd7yKiiDWc7xM3yG5gxVH",
  "key17": "8MsWRLe3ecN8eNUodgvq3Vr3fn7ffzhuLPUzh2YWaPN7pXW2gZzvWNi5KG8N7b1tBYY6X2rLggPbRhr9DqKqwra",
  "key18": "54MxSqKpbQVzS9qYyDDLhwWNqPftpi1Lg4KE1xQR5NGjo2HChggTkzWobBmxCia2QwAsEAchJ9mNhfy2VWoU8Hfx",
  "key19": "akQd1bUKeQY5Zj7MFTjX4mkSaoEiu5sP4yzUFrmvaLk1hiEJwdSzdaf5bYp3oMSRS7y8DBXtKZKmHU6V6oUMprm",
  "key20": "4ASCsUsHmKoVudUPZqBackWfapM1QUwMiGNLqdE4Q7bs9gR6wP42N1t2M3Mn3o745RvTaM89wyx2Gat4ZbweWn2B",
  "key21": "5B3SCPGg4EBBuX73tgbKMPphrwrMaGXQtpp4ABPT2fY1J6SZVfb59MfYEVs2UgrRYA2B8aPKvWuwV5rfsWC5jWw8",
  "key22": "3tfXuz96hLkw7pVJS85api6mtrQEoMJZpRdzFZdB3uiARyyrdij7HmsaLptydws7FyYDpxrmj5WvNFmfwnpLua2C",
  "key23": "54ZfUneZUiw9P7KhXpvnHjaDVdFDy5AEBJyEg9wFCYz9DPq2gdKmzxPijsFyG8672AtW8y5Y8TiBumg7JzhagANR",
  "key24": "25Njfdonm1fX3YxdMJX5r54G1XyFsm6A7wB4wXx8LXJpsF616xuY6vDk4fdwxhC76oXUoPdXp14s3HuTxJvuwJUw",
  "key25": "4WETtL1Grtq5ZZwajrWp3QbUrNnxM34eAWCJWhzHbFeFXZRd9MeFTAZJWoUSAhUomaCwdK8YoqBrhgcFEiruAhqK",
  "key26": "oLTUdnxZKfLtUacTQ8uAcqGwAPSZPawcNVZ33LUEaVvyJnKzzYenTJPTdZCDLPbZRvqFKryvxBogyMe56wTYma5",
  "key27": "3jqnnVq4SerZdApyzWTmtgwLET2RSzz9Pgj27EsxXZVMuymLCML9XFASXpXbKiY7vfoAUaAZUucjfMzH9fHzi7zv",
  "key28": "612RpQNA5MPST9hnUdwMiDP9d6AwhuE5Nq3d4UFTLNNKY4ih1FPPP5TPc7ZoMm73jyB835peRsXRFQwE9wuFde5d",
  "key29": "2ycBSzBhbR9yjNMhd8tgTa9XXo2BxyYmgBUDzHRmZ7iugYt3r8CASkTz1frmPiyrWEN82NZ6D7WMaZGWRexMPu1z",
  "key30": "EkTVooP7R3wzauqKPnwihndf6VyPyKnnMYR1AoergBahojpRM5V25ZPoj1m9S68Dvp69RtwwNZHnhFADDqgAzvB",
  "key31": "4drMqWGt6SM87Upeqo6WSun3jUJ6LgB98Jn4niXJGcgdv5fQiHih4uFjeR8TDFjbMnvGbLhawyvJvzSie1uw6rEL",
  "key32": "4U77HXi6ZisWh9tDVhW1AasFMURmAhGwxRCwVhtoiVpJq5JBDpMStS2fq5sfNkfNPor5VpPFwJ1zcF4QNaPoi4jg",
  "key33": "3RfzLZk5JCnK6imS3WRwcWj8LKbiUMoMiyWugogk9sc2x2jMSuGfDPBMskJHsjqpnbk1UQut4rxLb3uSPypuJBRw",
  "key34": "4LxbVaKNfu29hL6j97mKqpV2ngWQ4FMXYebs16HjfQv6tJBcTk4gj5XedMEiCra3DFEqUUKCH2FMxFezCw8vmruz",
  "key35": "2XDdWrAKuzdEMuzvfKoPKZZpUN4kgFtNYu4a78xp7nrevjNypSwiMJiMiz87WfT4P4qXRt8E3hqordv5LmS1pWRz",
  "key36": "3r79ijxVrf5GQ1obsig9ZbUPPbnDUiDBruG9z8QV3M2dmyW5nRvbesQJqk53f7E2mBGm978FBwP1eQREZAUc64UF",
  "key37": "371HxXqPHnDcUqmqt2HNvL4J3NSfKEChZBVDVma6AsLpwnd9N5qgQ81EuYQkiQqr6TGMsooj2L4tKZgaYky9DEeu",
  "key38": "2QJif6gSzV1gYTi5m29QcEZXPaRhqZhbfDLUf5n5g6nSyCckCD6hqf3HM5nrJLhJPB5DGfF5Bgq2jf5rsWkbVxiW",
  "key39": "5hdg2kVQaRrNJmbHGFgkjmxm5efyRqYvLu8cowWpXsytYuq3S6GntCbJVMSNyTJ8EmHqcSrFTE2q8XbKyHaY56rT",
  "key40": "2S7YCN4d9FeMnkBXr9sax8HpXrLrkmkgz18WPcquDXuJYqfWV7SKV7AmLBBUvtLGqohiY6qTPWMbSQKU364mh3bQ",
  "key41": "L1KkZNSeYHvrA1YeUp2Y8CcGAUVAKFMw66BSXeTbCt6qKRKRL81PaXJYy5LMxBC1TQTpAwSnzdFm3SgqZEBd9KD",
  "key42": "PXGPzK5kjbJ4iMWKNoEV9bLhSpTv1xH2REgYRDFGpWBWEVvq3jgW3BDnD3CujZxc6miuw86gbJZecL5FYNYhKRP",
  "key43": "XCBusjhcdSVbyXKpjr6rYhFJ5wvt6HxELcM5Qt9puyaJVUcFwZQVWodLPiwwpdq6To1dvKrWSJEvvSY895HLD93",
  "key44": "2T8uAjDivytHxeb2xu1JUPvxqkAfRP1nVHAQ7tPAygZLKo65hdsjyHfDeN9gbaeZHp1UxaXgfXArQFeUFgSVak5R",
  "key45": "444JVjXMSsti91xLzoz3rdTRGwm2hDzfFcVwQmkri8pNeZFVV8M1sm4A8bUxw1PgRshs7cyF4ydur1ZVBHU18mCf",
  "key46": "iY43CcGW1c7xuZbBoYccSDP1kPdrzWPwvpM33JEvMc4T871FckRGL2Q8WcdtPPoW3ZV6HyAqeak9nzCrbAd9tTD",
  "key47": "3y9UAB5tFATT7t1fKh1ZyA4ei7NZshsMEFYktGyawyFSJ7KXMTujRBLCj7oJzGHWt3te4vJm4Ny1AMLSyxpQvvQC",
  "key48": "2WNfcqQA3jsMbx9SCiX2GCQCGxgDic3tim5msP3hVjwsFp9FD4fhEAsrHPtVpvsceFu1PRZHKmvxoX9zNQhLT2Bn",
  "key49": "2qNUoSwSMQSmZqvcsQbnGwkywZncKDkzvBvccqqqq8uzm9H5zQiYwhM2gtTMwo9d6dAiAy2uE3Sx2Ypb3u4dpr9h"
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
