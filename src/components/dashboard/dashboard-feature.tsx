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
    "44X6bwATHArn8JgoFYrDSTTLtGftv3poYRbbYPPkGBXsTibo9WGoVxvMZ5PNUfu13yz1WxnRNi4DGSEQ4S6mtRh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56JKDDheYJr3AB9Pj6XHuADB7o3LbkyqsmnT7cs922u9A4KztVAp9t6PFnFEqWnMvS7eRhwvXrutbeJVFzmWps38",
  "key1": "48vbMGPu67KrbdqSyHWb3u1E2HeFVHMJsJbTr8fF9BuPBHeJQd5ogeC4uxxJByViALgDgG2G2iYmzvsy4piAwZeD",
  "key2": "41asVyQRaf8e2HfS16rWiLUxBzaH6z3iqT6tJ9bw663xSHq8gcp7B1W4r12nt6Bm4wjTVguTvg4TXZDj9A6VY9ce",
  "key3": "4sjAmRAu5eZGGviB7Z8vR9QUEVGF85Yrxr7fn1hHej47gh4MtgYM5m9zFbGZacpQftuWXN6PqBMaHgMq26pxLmHY",
  "key4": "29q1qDioZbKPEko84cR42s98UxtF9PCT3nsQ5QUq1QgwNcgMri7fy8GH5HCKje4i2xqKcLsGW9dLKqLP6ZYwWMf8",
  "key5": "3sRoAb6aVTHBcfkz1Dynx7Kk2XQi2q2V7MmRpH1VpN9zPt5W4MmZJBgEVowUMj517SjyrZFLrd1UKZBGBGdiV2JN",
  "key6": "66qvnsMKpNaNWSPs4zPvPJqTwewcJ2nkpggUi5QLxNGQ89WkG49qC1KpbFxK4jjzZfwCD5tysZkAK193Q5YdNGLe",
  "key7": "28W1pgZyFwTaXrgpBbXvrVZ6JnqKGwEi1pDoA6hfd2MVACrfKtE7rUN6Z36RXVadPYRyTYZH5ZHoRBwmwjVdzeEo",
  "key8": "5tXixvyovu5BaJfQoqFtxC25Qa6GrXZ8Nogcy1hafRRmR88BjTdg9pS9qvPA4F86bDp2UhL531BnxWJqiJMGLsiH",
  "key9": "3u8uE31aUhFzsTdKPitxNy27c851zEp6hQyaHHjZRDgXc2iE7Dg8LvauvB6uSBscNUJNHddgh5VjeZYsPutbT5nU",
  "key10": "3h3PALwtJc5A5KvDHoLB9qXPpm97TuSc6wkvgREqt4f3ZnaV2w74gTZn585pJRKVBTLeqrWnsd7pJ91isaj3miER",
  "key11": "arf7Kuc5zaEXR6MzRD4KeHcEZyYhzs11xqQcsDPW9Kp4V97BUCC7pcU3CbLsrPXPydsNeXVwE2TNNAdXh4Z7CRW",
  "key12": "x9xHYzmEzfWfTgWTGUMt8Aib1zWbzPHsWdT2q5kggZNYXVKYKtqwpKLybmYA2Qv9PSAQFQN8kVLkVFzCnjCFbvt",
  "key13": "3cpkXhzkBDgnSGXpmp789E2DBC7ADCqjFNULnkEgDdosyAn4vk7ogUA9azBK89eVg4FNsxsoPX9L3icFUvQhcovt",
  "key14": "4vKUYFgjzgtLSi3EG9Kca7ZoJXTzoG4sqcj3BR4WfsyoYTxwrAwmaDtBnqkJeTn4qsGsrsp8wk7cPAcxWNmyVVSf",
  "key15": "5F8BtYKGevFzJmHefmgA9nQTx9aDFKKxXbTxUTrZz44UKatkZdcvhwxmaq2gzxfARwRbY6SXhtpfkCESpNmLjYq7",
  "key16": "Pwr7XFUmBf8LKFChfBi1nYq8nbLkdFXpMybenVbaxJpbiFWW3dacgrpicYz2vge4WZXyxwYr9MrecccV3wdrpdi",
  "key17": "RWm6YsgWbKbtsrfYqMx5rDyFkDbdfJct41HXVVR7GE2tw9eJXEn31SDhjJVsTr3DJCxxWBhUjRS4BUTNRz9skPJ",
  "key18": "3oL8B98tiCKUWDxGC1Anu4xFyw1kV29k71rk1xWiHLkA6rheyoJAwtWWabQ1miXq1NigVrXwVPajoiGnGSWTS5mu",
  "key19": "4zZaw3F5NcR5Q1Bg1SVsTznt71bWHWRWRtVHYerodQGvtcuiRyFyMbMo1K3MeMrAtJGQAGoXzpvZDqScGUww8mop",
  "key20": "43fssfLcsPexaz6EW1fC4ztYAGDo8pLovZ8BYwX1X6Vn5mnmRDS56ZDUGTYAjQcKEx1qUiSUxbixP53tGQK4uQZW",
  "key21": "5UaF6bzzGs2bz24EvoFD13HEr3ycuorEaVcTqhoht94wSJ4iEQdyTKg4Ld4u2w5cNoj29SdFy1sfkF7s8FR9BTig",
  "key22": "4WfajNX7ugDAJrtH7yJF5nKtkGeMm2iEqPFFucgha8R8eAwT9F8s172Nnj894dugEMByCUkoGJwzGTDxLP3EbTDv",
  "key23": "2BxKXq3wBtnTTi7eCu4V7x5ba2TTsLtbHcsxwsfnVxhz2JdoNC4Nreqh7TGLjxzrhFZDMsGJdtcY5s9sLteCzxZ3",
  "key24": "35wF5TwFDSHT29Mc8xvP1zPHfHvnkVSjdsgBDgrJEcjLMqac2YZVEbR88d3J4m7i97qodUexjj5HDmn9p9x9CLDZ",
  "key25": "3mebowSBAV96D2jtYqHo32fwW4SiT6a9YRopZN6h3rDzEM4PmZViWrjC129VW79mD5jTyuvDd4QYoUKq31Coq9d4",
  "key26": "K8zMJBphBu2hcYGa9D4Yt7WJDLjLwBomjkCRUFizqrdwE2JSrCbnG6RArS3cTmJSjADfpi3YZDHHmqxWNbBV3r2",
  "key27": "5nCgu6TFnRRAEtpu4GqZwpZvVJuzsTGh4gDZBmqWvgBtQnq11WGXC9HyeLiKCrJtCFmpUxqcqE7d3CheV22aWSBP",
  "key28": "3z5yZMb6QDoxL2THT5xWWYCmJwJCmbFcZQoVCHD7ztWJ7Vu9BgtFaMUnA8unZUrduVLT7aLfdQvW4UhM4xmWcK8Y",
  "key29": "nf5ZDh1XmwXNQJXFRyfcs5kPWKdgHT8fqqZFmFZqyRWQtnFWqsPyghbD9RxGqCpnJCtTM99Ti2VbCepUbpwK3iL",
  "key30": "4fbubC7MkvgLSRMuwZ2igrosBXC9NJGYSSr3pB1wnHvfWCJXwVpLXsET5aPhKRpoBisCm4VCG14c6WRuzrXzhKEJ",
  "key31": "vqqLNLQYMwirnEoj9baCMSSgx3Kuuntz7iX15NwKmKk9ZbWuuDHUJj3GtRMa2MWaH5dNpNFRh84boMZECj8CXJp",
  "key32": "3HuZNcmNwXu6oeKkiCHmsUaYQgy6zpxeFcWPbrHBgDWetoHKfXo7X1e6ySdLSGEQzNZUPRypQqY9iwdPdE6UUGAi",
  "key33": "2G5TxvUBtp7Gg72teseSahDA1WhVqZnHzoYNu6CYrfgUfM2PLyxh9dY7qLMFVKxNQL6gcoUiWh2U997nsf4D3Jek",
  "key34": "5zd7oDc2y7xiRindxXYHbHxgeXzB61uDrtSQ3w9mGZvUUeSFWZETN5fehg8PnDKKXiF3jL65FB8JAjKKSDmGzFA6",
  "key35": "WE2jyay1JMnqtUWHojXZRCL3XHbKACMjrpQ7S66VJFEvWWU3Wazz2gJ1sLdKzpfiBUQWsUy4juP9TsF2TRHiT59",
  "key36": "4x8hmKdt1Hat4up6sy1xPcBTjQrw1qqvJ7jLMdAHejaxFQgNxo5dpkeww5ofQfTszByAkeW4ixeqBWUS4FuPthab"
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
