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
    "e96Sftu6ysUvHdDDjQLxnD3a8jwaDvFXfg6y665SwmGCevnKSKjWBtBpreAnkZY8oo23E8VRrFwKKbFrtmJDLWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iVCz1Fz14rQh3tCBVXvTbowpm8PTj8M4WsKu73VaCAojN6vUiCe4rgMreEtzPstxXBAXuhZd9XTixLt5rgmKaT5",
  "key1": "2jXRHKLX2Bwm1Z8nnbnx2B9LyCoGcBkEoctFieRM7Qf32qikUD1S1q6GSuSuCxLFepH7jVSYjUFepBkAetyb5XKp",
  "key2": "q9UVeeqTgdnFcG12VPexqexnAJCv3ynqPceTBqeyd7XnBTgErt7DJhaUVMdLB29QA59KcXufHxZYanxE3eMf89z",
  "key3": "5qPgQSqv87hs92NjVPdcZXBAZTuzrinnXxLNNXXPj2kpoMRXPh2vQcuKeYyz6YmiwVjfGeqDgicX8fdk2p1vRkm2",
  "key4": "5e6GaaBudWsiUvZwF5uxwvTRemD3anFNLsZMsmN1LHRkSZpHwKowZBXXgCdtUP1sUuZ9a2qrrBsQpt4zGheJYFxt",
  "key5": "2EjfLz7HobWNuMGx7aGqVaDEAdrrRsrQf9Xss4QUXdv9jCTuuTwj8xsnEDYjh4vL3gtDtaa3AE2TRMsAMa1Q5PMp",
  "key6": "3vEWSTEgCGD3tdcQ2LeQhrYuhYtgQhnv4jBYW6YwWqx7Q5cfbZwMLmt9KMdXKJzPsnP7uiBgKvmHQvzD8rnGH972",
  "key7": "sNTxkTzewr6cMYF9UbNVbbj2LHDNy7QUQrXshi9Z3VwURkqURgMbWsvaZ6xgBAMj6YDGP24dyMRPQ67vujkgXUc",
  "key8": "3orTg5muES6o3oj5zVyK2jZo7ABe4mRHJfpL6BB72T9fMjivD1hsBtdTSjckTXgHntt25MKGzXtwh135AUprrgXZ",
  "key9": "4sbALkHSKSVLoLNkfiYxEXAKbcih4pXrUGtCgBhigiXF8TSQCYUtdd1yyRrokXng8TVePKGkS8N1s5ct5cLUVSmp",
  "key10": "53BTQepGqbTS4Dzay2U9uoVz13u6mN3BQe7oKVpLcvy8VSbWQ233eQjsjGRBnBuQWYgS4pW2SvEmKdCEukQwGUa9",
  "key11": "2x7apFFCz16x7fd626WPJEBVByBoUPTUi79b2mQTMLsRWstohXCqawa3aXM4vse3E3MoVA1gr5k82XZeE5mCq18d",
  "key12": "3TWvAya4KKvsJe4kyUtJyFt7gE7vgMJPh6gpQQJMndpDAsdt14iDJZWo8YGDDQ7JAzJHywqYJNSDvDKZGnvc4btR",
  "key13": "5QLwnQ3FtxeCXXZHRQAzcdmXjPNZexHBdyDR4rMMBhA2CVt9y4UVnaMabz2MkT62TUJTQd5AscyCfNLcumTZzTsp",
  "key14": "3qJV7i5c2XSeg72hZt7EfYJJ2wW7it6YHEvNbh2XtdfPwSUNyftozSegPtYEwutBMTawAhj8JCmoA1HAKia1i3yA",
  "key15": "3yTsF7ZoUvJcifT9xbC6iFGFCBH49Y3nGHXWXCWrM885FggWpV2pe85Djb58Va2VrC86Wo9F7AE3U5rCGqK5hmG4",
  "key16": "4Hj4q4NxRPuV7FMGpimYu8fx9XwTmVqGNs1HToB8FNouW75ANUa22ekqptSpQfh92szv1RwBeWxJ1ttdNC8yErBp",
  "key17": "2K2iPWiKR8xEcKZhgd53JnL2xnpC5XfhbznJXLQ9TeYLZnvE2pdx1AbWEaejDzbSEwRv61xZLFcxuYa2D44YjcQC",
  "key18": "2gbyrxhyPgVSL8xAvUYBiZgc3nmPGegCTZD9yHjLfQMqeDq3NDab6NvPKhrTzxbhb6Hnq4kLV5XCy412qMY1Gqih",
  "key19": "24W99PYRERcHTgpnSedBiyH12uTHV1iSMPGtGuYejSRLAGLphvti6uFhf2RHe3A1ysvLtKxv6CeoABjZwB3BaXRQ",
  "key20": "5fP6o6RGaB5QJTjiJdwtsNkc7k36CrptuJDg1QtixKq6VjKFhzjEV5VySutcNtzJMgnqwdg3fDojKjceeTxyHgSx",
  "key21": "ihC9mh6okF6xRm8z4PEbHDMTjWbkZ1CaLxzNrQ2pK2S8vU3q2zK6oaPCx4qYWfpT7r99g5cPpdhTDe3464sM4JR",
  "key22": "4ceexiX5qXHfQMNtQVDTRdHNkBEP7b9eQf9pJCB1TXjKhFpB7HXQThouARi5zRMR8RjsCY2K2TKSxMzqEPLX2mzM",
  "key23": "4vE1MYdKYJMk2caenV1rBiCwxMoWK8rtHBsu8htTPeuPFkmJwjZ49hGjVZcPjjxizWxDcKYTF29pJGj9gtJp7EeL",
  "key24": "3m8gpYdu9UbfhA5ba3J95KsUutPD8TC1uFz6tPhfgqyLd7TNXUZhkbnPj7abtibfCYFN3q6SZ3oq8aEGkLE3qCzv",
  "key25": "3pP1iLngtrf9NAWCTXUiFyfSWKzjEyLJWbyWVf5LxsYb5tQWXJ77hJfW8by3E1Ky2aBfCPwdqRecjn58P4HCJNeq",
  "key26": "TMXttesAUmPkvtv8gNzcXaDqiESCZiwJadmvrDYkuMZsh7TgrRfcPGTsxZUuBaCF4w3ytrgGp4sZn9pR68doYya",
  "key27": "QiVqyQA4UeHTtZ7T4fdE5yo1pk5zbxdXNotZ7HN9p5HdVXMpNgHQQENUWHqQSPMz6YiHET8AJiqDJz1FePSGdAi",
  "key28": "5w7pZwD8vg2LtEddAdMKcH2xoGnNDdgx6qex4qwHTEs7drRhwSkpkmYsJ3JsXM9NvhNSEN3txyWVL75EPJvwjPsd",
  "key29": "4yWWxXECpsHFbTRRvRgwMdkc2kTsE4Nq54CbpVSj1wAeHChQx3ifkymJjJz3vZADJpZwJ5EnVF9mXdHKYPNJ2Ljz",
  "key30": "3zThK3TBrb1m74QtZUDbjf729NJ5Ed4tqxebbh6mKJA9sJbBRtc1z9Y3ukBc5rrj4YCNu6HvCNaxVxLPXoFrDLXu",
  "key31": "4DZee2TpBzoi3KEiFsmVe8FhHt1hYwMXs1rFJ4XWpLGGoEsPYR9AnsgnHXz2qbVbiGYjBgaZ49hZHsQroK4aR1q7",
  "key32": "Emv4udx4uPDGV5JyF2YYtnf345AaycSLYwHEVsfjJfcwc476pwL5ZZzXV5Fq5MrLRaKjHEqX329oGSnGtEh1TXt",
  "key33": "2Af1qgKrypw89shDm3Mpa5QrgM2tc6Be635r9DZr8QGTmgGbv6u3eEbRZ6ou8XeWjj8WZtgDmwztTsuXLSCzBwij"
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
