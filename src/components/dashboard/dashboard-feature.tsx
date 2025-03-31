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
    "47gQtofqxR3Ea3pew4S5xKXoogCV6vezrNWcyLz5HG2pbigRbW95CvoiXc8bdYYWXY87sBEDgyLLXpwxq893Z8Ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RuZiykKd3cBaQhUa7aPsZLQENbt2sBhjaQpum51NSsrVk2SBnt2AVPArorDcRkU39BWW6J8bfTD6mk5SzEbSdM",
  "key1": "39Y6G1QbQ1wZ62muY3yzxzPwQQYiJmFXbS9GxoFpH5AvJYwFEo5AaJsFRt6xz6okaiBKF44smcsTRBeqM9SSKjGq",
  "key2": "5ngA2fkdTjfteRwqesaNWjpaMTE3fuc9aGxcVqYEPMFLuMW7fAjQBwR9zfzPGKReyUT8khmJBMMHZKafbyATvRLu",
  "key3": "2Ha1X6y9FmFjgPi6oaSickN3wBVGJeAp7Fah1GsYbNJZxudgNn1KXjaGdTDxTh1hzr96dNXKZ9VGkJZ7McGt69Gp",
  "key4": "HRCn31KdJ1jWQxGJwdKgg7771tPiecVjd8tfYw7xUgB2v2Tt2qQad8bMMBk3z3djkWJSBGeDfAFvDDo8CMaFLb6",
  "key5": "4CLhFkubBKWHpj9w1LorSE7kLnvPYv5XyU4MXYH39D1i7RxQ9qu2Ebp5RBncobTNMNE1UXbUyn2n64b3JHwqba15",
  "key6": "2mL9jd1JG4baL1AKHNsyuR8nUxHWs6UWx5p8VCiE4KKC4NoNR4LPACY7LhXupgz76M6zrTu1saP2eFs2WdpH7kPn",
  "key7": "5azrKR1d8JyyBvk1fzk9H5qnBKMp9XHTy1JZ2ASY7oGrvyYtDcescwqRLQXPLtoiJVdsvPNLwLjg6p35YS3WXSJg",
  "key8": "jFWTTMAypuhAzWBJX3AU2uzSijLrg7pSFqhtPAByzkV47KHt5VR3xF6QsSoc6KccMRzvQ8Y9gigE4vwfWmFDwBy",
  "key9": "47XmAUqeQVhmM4r3fECAiKFgam1ifMq7oi6Zn3Y84U5Zabi1mGQKfaZetEDEjwwAva3WppXQuk2FwsL1zwg4g8Fq",
  "key10": "5BEJLVVN18tTJHSnj3iMfHKie6ZF27XbMpULBDukuj3RemodKuLnaQwEJzuZnbLQKyiHrx5XDDgCvPxqxQVjoHTy",
  "key11": "2rpYu54vw2WNdRcAUFuyyM4yvB8sTNWWq7pBAKEfwkA5viTLDeun3grDZz8xFVdLpxaiGWKNLewBR5TqppFC6Bw6",
  "key12": "2StfUmDg2fuGjaTsQD2WmNVe5xh7cEPEKMn4dE7hEKANA5xe2ymFeZVoVzAYdeDNPBtG2kTckiPzzVXyJeTU6sTe",
  "key13": "3ssmeuHu7nR8YBfc4wSWymnyzZPe3pWWhtvobCeJscHgka2ov4rDcWLryhGnvKQGGwnfwpGasm4CHByUm1e8z1S",
  "key14": "28XUsMgmqzuuEdwL4WcVBGZmerqNaY7yGqcuQjw5DVhQA9fHk53mtDDiG21x7y5BJQuL9xqXgo1xsXafwdTsMVN5",
  "key15": "4jU5c5chqEpT26uaVLTbaoTPwWHtPwscRPFNfRk9jJ5FRvUa4n6r4JbUs8aPesrZUhsP4E6SJZnptQVsiZJW7rP",
  "key16": "4nvkKP5uymuZx7vNi5T3XDc8GozrG4PBCo66v2WnFZr9dv2ApPK1g8y8ftzPrtfo9mpaNooVJ5NPh7E5ub7zAL7L",
  "key17": "4NuAh86KKtiBwqoSEnYB8MBXYkbiiWicBbKpfXJMoucPR94tV6UVKijhiMjMrDA9GYf76ZW5NUaDPSFUDjsJsdzb",
  "key18": "2Lv5uHxRnH37kcmroFCUXSH5JR26LTqb4kf4t61mnSAkGzfuXgr2ggbJxZzzRRzd4UDHuupvX3Ut8WWYqb5wesLs",
  "key19": "BrMFn7j1HJAJvZtcfxrLYMDH1f5vExQaBRdmxToMnooapkt1ESZziFw48TPTH8ZkNyiqY7KRtEQC1SjgCAMRPTy",
  "key20": "2wxWSxWsZjdchPkZKQUYzcLdYdWmywvpheDYGBUJkrq5hPnq279sH71TsdNxpbWVdN17LhBvpeY4jmd1k7vJYZtg",
  "key21": "N4ARc9GUvHjqrptp6yFFYRzpnaJpzSRFTk6NCMZA7zQ7QaF5oFfvhWQnh27F5Tij7uJBbxY3pbEdSPPGSMj4n8P",
  "key22": "5M345VF8DDzjrYiCAk6g3gabHLK36wLcSQAKHyw2iwABvvn3cusPb1Jk5sduWvNSt67LpZYvQYmRJjk8vYBfopq2",
  "key23": "5QP54neuHJP4yJERoxBaXzqFYCVEkATVZGgZj6wVR6ELYKsh67oAsjfE9mtG2nMDPVPfe5LzesUCMykdkVo2EnjD",
  "key24": "5BVNQa1BYDprW3GtsGjSVwqhasmoowhwYUXde3SGAnM726HWE24fFNCr8wyc2yQ7UhCmfpD4LHnL1amq27uzwvPh",
  "key25": "45ThiPHEKF1bSUaSn3mGz8gkRKMiFNPKvqvy1HR6jmNrG6YL9CbYvFuimZSxxR9JfacbUB9k4QL4qs1vymHf7v4p",
  "key26": "48JZb5YmbqmJUSYmLtfGLvtGu3KwKPEX5qaxrLmZgSgWtucagyrzqfcv11aJaepEScSW9wpfS2h129LeN1gkhNNd",
  "key27": "xURGbFzoNf6k7QWpdQEk3i3yViDExZVtjkvo8ZyJAWbqXFmxSFt9hL7KHrXiME4wU8rTpBFBqvPD1bYSJSptb9R",
  "key28": "4uxapSo5nMj1GKprBbYkZumJQV5ppbK7pxb2dVeozHV7WUKSN2Us6FCXdFw6et3XdFetaYczjcV4VhRG3eJxJh6U",
  "key29": "2EadjSVv6NXRS2y9CmzjwpBk28gKTkw43JA294DEQyQCTvvNwKTAwenBrjr2fJDiEsnsn6dE3S9nex8GZ4mxurpn",
  "key30": "Cyqy3u2Q1KUYj5pmG3wWfGyVjv8mHUxUwZX7YydfugYWFKVuZZBrHCUPH3jkgGrRZJJswFZo6fTL92oPTxcg8QK",
  "key31": "5NVeqq3iw8AJSH9Qc7rLW6rVBXcPSZTfcV7SHQALRGjqrzCNGag5qGYPDLqweG1iAP16nVBCziVJqWMgkGmygVGo",
  "key32": "41GQPQ1yyRmiWCi1iGXJsPJjgLUMga67b1911X1PjadLKHSAFizyEopCePN8ZdcRg1qhw3H8Y6jyeqXVA41ya8C1",
  "key33": "3zf56im4SJwds3oxwSn1k4dLadaoJpQwguTdi7znKcS7xoZQMAvGN2z8UsFzqdxCpT1bR5iMixyLPtpvhV9NRcUJ",
  "key34": "2aFjsftw7YxaiAxx23m3nzX4WPYbYC77yQHnFkDEjsZvLeRJtbRcDCJRqZJLt3yborNDjEofXbfErVKaiq4SZZDT",
  "key35": "2zZYm4VBN9F3TQnBUkp7tBwrsxsFqkPgLpHDN41wDqP94gnDutkBoMskVTCZnATM9qeruZa38w2mtajWQoWAArTv"
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
