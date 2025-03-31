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
    "5XD91ngaVqdHhdibk9rhFNJa8KXn5U61tBf98j82p4LAsXopPVsmXGHnZdLLFoVAWV4Gec11zN6JMhda4Fx2zwKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQh9oxH6KWNVAKUmY8UpV8pkfsY6XvSyNcRqTbmDTUR5bijwtv1PqJq8NZsB6MXVU1VfJ8wJASgnBFVsT8Sz4tT",
  "key1": "49gvhVngBfZQEnGAToHsTZzeCCmaYwAd32e1FHBC72zZU5Xicq49XGeH4WUS8qs7xR87RreVjXvZ1dBDzvScCF73",
  "key2": "3UT19qSTeHs1z2fWb8wa4pAmxet5eSrgL3NUvvab8tQQXyMiMWBjy8YjJmKYhMKBwd33AkLB94SLHoQd1nQN6Qkz",
  "key3": "4gt8TdVhKNkoUKhoLHEX18gyzWXvZx1BMWyrPkmcUTppJMTeyjPiZRx6eWDuU9mpbAjYJZ9PJLwjpBtcUP6X7aKM",
  "key4": "2EDdiwv4Y9gW2gxBcbarsMkJtMHHqDMkaenjrKZrJEX4u5vmfzoQJUzHwDaRmJqbHPKJbRUpkp5GPxWi6jNwdFkp",
  "key5": "2RjR6sb22quM9exyijqp2qJ6BU2qoDqwP3sRDC4LDHQ7BeNfcHm3mF3Rbvo2TWwZTPCysBmzimEWKosFedHHeA2s",
  "key6": "3sr8z5aEiL4ScTzVSi1s4BvWJSZ3PfNs9yMQaMwC2Yn8QDcXCM2oaiH3urJDQGYMPqSNbzGaJWwPnPPGKGCQP5da",
  "key7": "3Gw7UBYdRrW98E5Z5ZLxbDTHSMjCUjhypgpvuzLj9zMEcLV1qBTr5HwtNaTUFJUWNqXphHELBD5HDH9eaMmDjZae",
  "key8": "MbDAXZ7HS93Wo6gjsitWEHToLWqDJ6gx892ErvWBLX5wSqURfcYkYtHuLA6etBuGyCEtVfvpM9JBziTGcixHKCv",
  "key9": "2YSyacxPebVBX6sYAxxZJ8Sd1wfMGijk2ZXc9TFpqGSTTR6AgKxos8ogB9mnjwWnHpWHzfuKz5mjZJzqypWHk9gb",
  "key10": "3r8ijNnZmwVAUTuxAaUgvpZ9GtFHnTzuk2NBtusRmzuozQTnvDMrYWns7gyeXw8R5dMqCggg6qyjyG9KNfN2BFpK",
  "key11": "5sMWSFCDxFHzDxybPStt3yDEstSPUNkGziXbAAoK8Xuw8SgNVNXq2GsGJH19uHN1GgniFfY5g6r2g6ggHHB2iSXB",
  "key12": "42nYH4gBTPFXFZnhT3MNA7gd5nKZf6gYwCaDfV8M321YpSi7J2347Q641Z1UNeap5YpvBKERjjkATTEDfe6meVcR",
  "key13": "51TGJBFEoDxZXuCzAAtATw52aS8V2qp75HZn8vW2xRWU2kWnsEQuH1h4UkeNqdWj5qhCHAXz99aJSDHWmRQvGYGo",
  "key14": "2AMa9mPcTTDv5wnumtML3XDfssy3tLVsj1bChM6S3DGFiGwKABqgwx5RXdg7Me5jjgBMWgK99Y8Mt2kVrbQajGdX",
  "key15": "ZDiVz6p5XGpQMWzSSQCG6Y6wTnQ1qTBcz3h4tEUXHE8kVY1rXroGK96aNn1wK9nnDsUErENktQSMwtxLAkwRSSm",
  "key16": "4c1Q48MbFc1gpbMDN6wBbKQMEJtXJWVDq8Ey1wZscryyaJP863MbzsDhUigKGURZQtMrYzFFYqUDZqWeLfLiNaeW",
  "key17": "hJB16xjsR5Ho2xP1xpWcFJ1JbBAAj6PZBBPVK6kWouuzMdC8HFsyHYGfmVXaLNgEH8vSwvUs6ceuAy64YTuDYe9",
  "key18": "5CLPWcp9QnwbnV3jKjpt15FHHotqx1ghMYdaJVXop2nzA4X3LHNeEJptFqF7b3DrfsL3hKJoa7cSVVCBwRjQcB8Q",
  "key19": "65VCvMgmjhgEXcN62LUVVNQM8FZY2xceEkMQBUvSLYfaw5NinDPJBUnkQFSDWADHhRvr5ZDCokhAdv2z88gsV45j",
  "key20": "ga2fEU6WKkFNbjAGowQapveG1z8z8v3yH6mxbEHaHdjuk67Cj5aubW44jVTGoavRMa7D93bivCidvQFeeKqaVti",
  "key21": "pJcUy7WvboRhKPxSeMSjbRJcdp4knX7g267mPLPrptXf56uD6JHDXj3tb4YZn5o36si8G1DxsF4Dxt5NAPHNsJL",
  "key22": "2XeiWpFXKSp5mKb2rXbU5ZQFXVcgbUfUJsjDNtVsT4gvdQXStjnmKcG8BQ8f7m8bEy7zzofEAJDWsvaVJ7ix25tc",
  "key23": "47UZQZvquUwsfh4dXxxztjRtvJYqXZUyC8GeYkrF9jZ4J1tQf7DbHx4PKssc8DJYqwDguH7PrDCWS5UxDqCPfHKh",
  "key24": "42ukHyiKSuBNrHTHmAWRp2XtXTLWW8gSC6YG4nNdEPRnFdJAB98wqpZiXAN7BHdYwrKDLubNfcFbXGdD4orwRcdW",
  "key25": "3MrFkTjHmdy6cXQ1nM7Z1x7p7vHZvka7VgyPmTJwCg6MBArzhoJW3K69r7Bjz5woTVmx34koGrJ25eVPMcV253j8",
  "key26": "joHHhqmzNFAgkihZCAfeHFuAE5Rfo5sYR1YpmjwxsDzH2r1bWPs6kk9XrSE8DbwRGyWTo9ZpLkGs4KTpbQYchAe",
  "key27": "2FLHYeFAj6U8MJjmVgQJerbYwa9LBY5WwhpEZAy8eMrSjvxEFGSJRXcSHmiMobrbTaXV1Eg5wWPbMxdhnUWCjqyw",
  "key28": "5tAZhivMLHykJZxDQDA9ExSwREdiNYd7KvzUryvnU19DVQDEhaj1t2bqskQE8Xa7fPfZNwoYnnv3Jjc8wvNDBENe",
  "key29": "3jJYT853MaVtfkXnVjknzs2LGgx3NcvEifUbHjctoeLYuVuay5nd8Fram9cnGA6bZu4t3v97J5vWPb8aUP3qU6hS",
  "key30": "3iGnLp5ZqAmqr3NS8SAVP38kGQLPohcXw5Wk5Ub4uQiofda4WTcNE8d6csyTMpx5AkWT3VRyn4fLZ7zNkeVpQgkB",
  "key31": "3XsSLrhJwb3Erjzc3yJdndXT88dFzjmyWrd4YaqJuHiz5nSbrCzyt8XfYxvCbotQ1jtb64KZPzS8ZWtSQ8KZWKtv"
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
