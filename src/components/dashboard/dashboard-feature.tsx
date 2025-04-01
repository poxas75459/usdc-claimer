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
    "X97ai2HyLh2ySz1sueeWAa19dsSNthvAFwbUxMhQHQWFg6F1TfHC2cs32A2T1b749HdSNbxmMDV4r3NFcEQxQG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iKzHExLVEE3FWnz2bCubAd5hpGKt5rHAoEwZYwBBa5KthmPp7HreAvPJ8NWgbgWredqynvNbsETm4PHwkQsfq4S",
  "key1": "5Ns8Kzpx47WmYjcc2tYSUUiW4TqCgwVAKtx9UK2yob7PdwD4isJbCzU7wx1XezP943KqKG5xt374eJt3x91gkqsm",
  "key2": "45Dz2DpML6uW3hGudVXpyF1xzn8mBtZgzy3PcWCLGuq4ABJKzHip6XiAXMbixEbwu3ttTC43G1Th4E6h6icF1ZzP",
  "key3": "52c9j5AQhVPtWXz4JKtXHgAhMZVsT9Sg4TfpbTP1YxKRWt7XbcqeRzGDWSoLNcoafHRtRDrpAbLxTSWe7umaUXww",
  "key4": "jBa9JNJRRy5kKmg9NcyfBHqhx4Q8HMxXKQ8HkTuNvt4MpKWLd1qxqfgeXyiK9y8hht3mzwhRBaQ7tj8uNAqdwEE",
  "key5": "2epyT2YRPMQPiBzZp1heaa95ifzD8Q66o5bmSFKPYrYDp8Hdt1AExSnw7ZNPgeJbTKHP2GwEC6NcLRf3hYWHyv8P",
  "key6": "2up1D3xkqAT3gCYzKvtJsT4CpBKSUNsjRAd9cTtazeprhR6WTgn37nQ7NrLt4eoSkwqB9CXQMnGnYSzZzB8AACwJ",
  "key7": "3M8yKv8kDBrTknJzzGscZnMeVq6ptk9NhVGCL4NkbHAukPdTJ7kjvZCeD8K6QNkN4rLXtjnuqBQmoUbcoSf49QwY",
  "key8": "5chobxEUBhyptkzu1qLkFzj8gBGWRAAfAfBUEwkhkPesSsvboqivvkS5JCSPtGry4BtLyVwGBLxGmeYdd9gksURY",
  "key9": "2oymNFrJNiPsTjmUMq9DCwLPoNYYvRcuXtV1gD4VifLcqYJGSjXC8ibDPNnzExroXiyeRU62fcvYvf56hgPxWAf3",
  "key10": "xbzMhYqFh3RL7J3yh8SYbYzsAJU7RmHE6vvZPjWgsDbVrUkfyg18NJ8b9oMvkojh45mDDpeTUdMYuhpfhB14Yz8",
  "key11": "4WAEjQzyY2eQWJEAZ6wyLmnHagiaYk79Pu7pBy7PeJoGSizn4bYt8ew4v8cuv5M9S6uaLyrdrLBr2RsxxKsMPg5o",
  "key12": "2q3PKV2u53J3BKnnGyQJrGXcS8W8FK9JFCQ4cMuALLsc9RGEU5SDVDiy5ni6mb7ANTwKk15PWko8iwgvaveTYaTr",
  "key13": "2NAePyP1YmBoDpDFXgEVAKzfcwYpLiodgejBTie8HD6HTBJNPBGs1e7uAesdcPN34J5c3LZWzrgVhps5NQRM75CG",
  "key14": "3ZtfGXmJiWRA2rDgyCf6gV1QgMFnbN5wqvNUnDZ1QVNTWJyMEpcPbsxPHQhyAmt3BMWCZfQpr3DCAaGZYug441vr",
  "key15": "36YSxQ2eE6LjCa6ikH8i6Z9r9jFzhKqHZviYjCHQMH13dZQWkLK1cmMwqZfyh95Zv1XPrZmSgme61BaurD44Jsz4",
  "key16": "4qAzRvoHnhZBSiVq9tcL9TV79315sEmARF8hAxqqQcLbxzesvrQE8TNjvwm3osqtVkHFFtej3exkT1Mxi7jeRzks",
  "key17": "3juPmSCk4CeL7osmUYWaPiZcEhVrwq9jmDeUXboHQ759wTp7p6fCDsWD1tmv7hUZCyamYopvLwS3ErjsyEJ4HkcV",
  "key18": "jet2torgbsy24EpEWGyTqey2b39UvtBm7V8W2WEATqX4516MNAdcxFpaxfthVQaE9dCMwRtkNmk9SRvYg7zskSr",
  "key19": "NQgXU2Wwuinb59E2JDRFPFmDw1UjuWzHNSawyy4RD8kdTCJXzrQe2xsiCzrQ9eKdcFGJ7CAPiSn3sb5m4W9gVaG",
  "key20": "57SqA4UdDscQsN2YeMeBMoDjXo6A8TwJYNqGH8KpCENRYf2Q8veZQsHqCvExArNVFFahy76dZBt2gt4QcnXaVS4W",
  "key21": "3AbTBZC4ovQ43x1sm5ChPfaqdVSurL9bFWAM9ydhEUHd5fxBBgXnzKxk1a5W4wEfQqdXX5q3ySyhG3h3vhrgVWzV",
  "key22": "3s22FkG9FVGdmv6FfRCF5mEfG8KQMUB5SFNVh4TMsjwz5iL49wnRnZGB3hND7kQPrJJM5Mv8wh6GBV6YtvrYVSqi",
  "key23": "65KbCF73pFWmnQxVzdkYt56EEk4hzcSX9fa9Ma1xkYtoK3HPqYK5uX2Rze1E8PKSx5L97e2Jb2duxVbWTgM2UaQu",
  "key24": "42PpzFJLerxy6oBwVBGgAdEbntuVUbL2U5xGNsN5VFS3Sp5vStb9t2wjGdG1bpEDPx9fVM45UjnFVgneqUo558xr",
  "key25": "5HFTs5QUbPck7ByTNYyRmXuvVAYx5C52gxCNtTDzxVdmzpgPFa5ZyESuMgTMNNDv5hDm6Mo4M1mSpFDB7ui52NmH",
  "key26": "4ssSBa8MzhSYRbsiww9sE2BxEadjVCtYEtJn188yqgU85DMk21GMWvWn5hWhy3sN9PFtbYm6sHWx6fZ5XM24bBY1",
  "key27": "4PoCLdbheiAApB8XTottMKHhdcxdQ4HRTfbX8VJDGc1EMmc1W5M2MD5xzXGZz1NA71ipLXX1XVh6GhQTyZvpwcWT",
  "key28": "Z2K6KZTjnjAr6jHfYo8fgmZ4uSFoYSJRDUdRvcTZdZ5hyvvzAqxFA2msfGSR7vmxEdvj4FQe9oqgcRru69UQRtN",
  "key29": "2rNhMMgQbtHXa8WcY4UznmYb79dt4ACYhoihVyv5svGX4bCyajDqvFpercYvV58WFESVQVFTqDrBR8qhVuiQ9JDM",
  "key30": "36AMBZUJ6XQ5V4gYdegA4eJmcbCtzBV1pd1rzUssEP7pL984hd6HkpkPErynPwM47JfajpapcEC8j5ZzDnXBsh8H",
  "key31": "51cjsYKBhKBw74HQ2Gz79FvDqsBj6rHs42Kge4WqimjCgx9AmcqwzC9wG592SGG6Ykd5hogRgbdVia83yddCPg8U",
  "key32": "2dxjd61EizHKEpxXYBBdiPKUtfbkPH4QVd9M9iwKVqfEkZvHJDfmNebgxxwxJKYopm3dTT5FAfAHDeiTzgieox4C",
  "key33": "31hYjbCstkS82BQWNEJUcGDQxryuAX2e3VRdsWr41a6JyPM6LVw8cLgsCZjmXSEUBfrMMFynH7pU8H9o4gBCGd7G",
  "key34": "FnXXZkTnr3tUAWaLmMLFaRL9sbgEMBzbk7TNSHWU95oPPmHVBQEoZFbqn8ic9cBNJ6afdBkDDtorHheEsPZEUhj",
  "key35": "4nGbxsHjWCi3Q868GLGRBx5ZdpehSWMpm95awF4w969E7NHWtceTiq4QGTiDFzNJjEgDTKEfvRGqARayme9QPYsj",
  "key36": "2BFFjFvGEHaruifzALxCctyVZYsRXXTAswTKBLc26xp5VBY7iPh6upbt4VrCpFhTamjzRwTfzSBi6wG6E53Q4jmM",
  "key37": "wRYkzgqK6VeByEn1dcj6YGxtQuDw5kGJR39xYPMyamvVkUdLEAhrLtr8AZAwDGVKif2mMvDRqGrXcpFrvALQUCY"
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
