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
    "5nZNDCWRT22qZenh8LSRcPR29xUYnjrhSFG5yp8UnncBvYLxtV2iey5YRVWvXFfz6SCwE6GvbfGtphxNhxvnbYse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gpz7zJHgfn4tVwcA4mQbkv4YHxF7QCTtdaE5iDrHcU9XCNtaw8byqLtupqmBrwYd37hRbue7oKHAySY5BTYPvDb",
  "key1": "3oKnwGynSkwSffMScTb6RzfEgnAMvhy9dax2Gwr7nSLvFfHtBzCbhUhRP9aFsFoW7ijboTwzoJRj1jaz3an8CyJN",
  "key2": "5ukze3SWp14zzDiJrryzYa6wMs788DZeDHGyddnCFouHFi12gFs2CNxhSt1aB15fTwasW8tb615z8zVhHRdQVCSu",
  "key3": "46cYT8cAXU5XM2rfXsfgUqBrjSkDV89UR9Bo5SNc5Jjs1RkZx83tfbeWk7NJCkrxqRomdAQ3LPnb6Kim3xgAbMqL",
  "key4": "2MkUoTrUVmqtfYJ7SQ3F1VMsydvnSrc1jdXZvYWecWpYriUjQzKxrpvYEMUhKGBTsJNrXnfw34c4kEiZGHQYWoic",
  "key5": "4aUEdEgzcjsKLZJPwANte9Ka1XkLhfr3rW5xo858tkuMdMsbJgSTvzEQaP5PxrSimDW3p3yca82cC6GBYgf1XHpW",
  "key6": "2YzmWGX94Xpp3U9SsPhejL2UjDLw5rLxFYR4gsd2tRWs3Xta2ZLQmLYiCp7w4Z1bcaHtRbyjVXLvbhdFHP6tsbAE",
  "key7": "427gp5KVTxTAop9TPYR4wCj3FSEtYsn1brH2YsSbhLpDtbuZbPbJGBof4h6J4dJekhj6YCP4qt1TD3Ah3SLR1rUH",
  "key8": "2zois5fHK6yRq4mT3nLeeCmgxKwe2eh5w6pDEXAKKFUm4WevKcZuJqTZBj6LKZcd3ua12Z9Ftb3Ym5wJ162JdGJz",
  "key9": "5sNf42yiDYPEqLymVsZLYYxPEkuJ3RVPbHUQzTkBpPkhnwoZY6BvWLfHt3UE17hiQ8F1szGhrmtxEfC5tcXWsodg",
  "key10": "4aqrdGzxGGJhMT7riMCHPxyhYwivRGsitT82NWtNnT5NqsX32CfB7wfKWoA8P9szWbkSY8jL66v3Pr89Koff5KjG",
  "key11": "3ZWvPRX3VYgeaf8kk3qYjqeXqdXgS1Nr2E88yWwzTpVAfKzYUgC5w45nuGX5eEK1uTKyio3VeEvU7ovp5cTrgbnA",
  "key12": "5DJE5p8TzkF8LCi6VczzK7XSiqMXXBRMfZXufcd8vHXafux6BQT1QhenYqfBAqTACyfWWoHzTr9J4ebp4XpaA2TP",
  "key13": "2E4CWjqGWxheD9gJkAhZcJbopVW4XeKVdWmu2UyzErCXRtzY2SLGuF6LxbAcJDqxzke5QjtjozAEiGRWaiJiwtBM",
  "key14": "4goyVJ6rz1oX8EePuAoNTVEH8AP9JTRiAeZGwM87z7uDduGj7CLHboKxLRPvMjAo16fqfFCtvB6yRETQaKDssPNr",
  "key15": "5ZMqUTx8yFNsewfjJDiHqFgjAN76cBweGwWiMq28uLWWrYYqk6wGMjeST8v4pgJ3S1kabeiZ9kbYaTjYsrQnrQet",
  "key16": "vHULhsy2W4AbFyxMvuEHYykSVRQuH9WTBQhtXZBCKDk99rh3dmx8LRksJLRXVWmfWv92y4SfNNQiL3HKPT2KTUE",
  "key17": "21kBgtuNjGFnqv5e1pNNjKXEKuhPDmmh7eBVTqq5vNw1dTGRuJBue1uGEBXYoRedXBy9tgYJWi1YKaN2q6GkfqyV",
  "key18": "5nD2eZYcpKc6EeTAvaKmMzWhcjbN4143rUdHRMSVy9yWCLL4Y8ShWphYb8KPE13woiGg4HwZcbLdmwoxrtMkHRUz",
  "key19": "2x5xjh1LDcxYiza7Kd7K5Rtf54MjrBLuRoq6gkSHVeLDhGMQd3YBMsbW4vv51zKBSgePAkevHgSnehy5nQWkmWVX",
  "key20": "2MtNvwd6Ud8xii2FA7E2cgTxSqV9mubVCYQK3nv7LMcC2JJ9LYBw8fPQ3vRGodBfX1Bj3KQPGhxdMdn3DFw8zYZo",
  "key21": "2zkPyP7yaisrx45e264xQVtodHiDDh8hnVzWRqSKMuHk16afjcMeSCB6uWfRczVQA2wT6Nahp95mXFqWcFiitRcR",
  "key22": "5DqL7bBcAWCEozdjsNhagUMarVLwiM74joRyxPdL8HNsQPxpMMxo6HUPRZoVTSm2f7AE2hiSV2vCCgejYXazZqq2",
  "key23": "4wKiAzTSvx6fAKKLpvAvQ3fNoJzYYLGFaY8GRM2uZVYJgyJev77uDp5qLSaWSCsyahJCuJuVmXeb848NvcG7dBGx",
  "key24": "pdADRaxGggK5uSGBecMLMLNp6Mi834yTsYCReQYSrxVZKgi2uRtthkmN6kp67uCdRxShQTspppFBx3J9cMmfxGR",
  "key25": "57GwzoKUsXiptuJnUZt5KnYbMESVRa4Fcyi5JiReXa1rL2v4YvYRCCa6jKiH8NubmUHNQHd7iA16p3zCF7So1qRV",
  "key26": "dJfSAwq9rCp5iA7AghaptdasVxyvvtoreZMZNzoKGZa9eAqAZmDxkLgFXqqb9isyxW5f6toPePewDvrBMVex6JD",
  "key27": "2gzPxr9rRMrhvPuDndXBP1gTMa9Km75TVp7mcUTHciw8PuZagEJaoZ6aT9mTAWUC9kcYVKdcYta7TtvaLXu1qKUo",
  "key28": "384eDNfDqyQEoppKEVckzg4PTrpuZ4mGghq1yPAp5QSUdocVw7oYsU174s7TvnFxNoP2gxEyMzrhY939f44uqNtN",
  "key29": "5FZ8CPqYfcqgTvSMQG2qwJetSbM7JdPfDX2p6QicMwtYQyeThNAJj5pjVBjPHGj59AoNmx2w2M1f18CWiNeufyDY",
  "key30": "2wxtW4xeQkc1EQ69vYpmZjwMk4ygjgG8qZori7uRyXH1H4LmfY35dSKsvyDfUsSgGD2eJenvArvnxpFsj2XPRsnC",
  "key31": "2z5pPsBgtKCfEeiRmXdgCrNxdvksMDkMX1JGy912tMS4bviTPNKWsLos8ikukyNwfiCSi5H8mxva2TGcSme6bKFF",
  "key32": "2ZkzYsbxFudsCjaibCvsWZERtd5Bkk1nKYKkw2zvW1obEYZH2nCFKHvgL5DVNpQvTRcGBpYkwpSujmXwTeP5yMK7",
  "key33": "5N4BuqnbSXMxw6NPtirPFR4h127Wcom4pVGVLghFtTHwFVx3o5FTcuQDHBj28XWCqsBD6czbt8Pv45qDVNKkSwyM",
  "key34": "4f9PyyoHsz8F3A5w5nKzTPVdGgrJG3LMCt4vSpBseSCYi7aMiGxbTxJSHT1QEB9JgbUW8af8n2GfNSG5qwwhLqoy",
  "key35": "3aYsany21RQtoZt4XBZWYqb9DybSu1j3QM7sXTUgvktXDo8M75gTCAPKTep2J6uZciPAsLKf41A6toPgkchEBoD",
  "key36": "46tcdUCTuLKpygx1EV5dXi7gbmZo99TpWADKjcAkQS21NeiZzHr1QvRzUnKNP4sXvTzJvxSJLNqk5LwE2b7AQbnC",
  "key37": "VUdkck7ajyDtCsCz8MMwqMwFXJBokKubm9ZqoFPTHiXR7cwMs8EA87hbWzQyxrPVZ4cq5ocRutmCLtEXgUVUMh1"
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
