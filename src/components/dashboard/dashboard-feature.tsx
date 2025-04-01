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
    "4opAPVyxz22PFiwv5TSYDPzroEf1CUo58gW4EGXyQvm3jeBQ6QBQ3ULEyvLr9ZfwWMcAPHmwik2YtBVnQ4MSx99q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41hFSf2XgJkjpinxVds2Ge9ohXt1dmWBJeiARe9NY9pmp7kgRkvLiHC62X38b54zSFNLcZTnfbbwrkhRmNLGhx1q",
  "key1": "NxBcLMTi9wPX4Kojo4wBjBAMmowYEtPaWVp6rm3HjpMxKNYYvVRBYwckAZPitkwarHAqsBrWW1i8a6vXjyZfv3Y",
  "key2": "31BBjqqSn56fwC44rjb3PEX34LTbQZNS4xvLNFhsiiR9L8XQQSb6GgEnoz8eYZJBSXtXyaL9CaDcPgdKxkV95TLr",
  "key3": "3jENF5aLMht82S6UMut3xofhGYeu3RNA1WDzyxRat6oFPWk1UHZKK9JegTHafkoq4m5uhPKBgRMFE2zgtLp5YRSt",
  "key4": "3mUJGDPASrBCzu2UZoF6UBgZ68xATDxowqmLDyMBBWuqBxNMjU3dxSPSttWeFXFrsdh47n65Rmjhx5sUd3bRkUzb",
  "key5": "35sPQdViRbafcD8u5uS5pyy2eHgUUWXq1HbNoavSeRNJWPAGXpqnYKK3qojpWGwmuXx84Sq4WBvzVY8biyaxLjci",
  "key6": "5sBDD7Gg7WcMLJNg9iSqxm5pRF8aeh8U27Pzs9Qc8fgvhFNAnBqHafSLoJvUA9S5qrUESue3PBq1HEaZ8Hfi4Ket",
  "key7": "66Xsf9HtAtTvpixq4pFx3Ddsm9U3tNjiiaRouPuCgQXaPFywZuFAXacAgbnYFTTddo6d2J1HdDuEyEyDpYRtpnoe",
  "key8": "3fGjE1nXvTSW6Dbxy4KzxjcxktmGexPbfDAf8jeDcangCrzK9XN2eKrESMhAJWWvG3xBy5SJBufgMR3itchkh98F",
  "key9": "xY1b2xAhwsmtmtHsguPS9efumCZq1owfR6ZEzejjK6PsDSaJd43QWwmRwmy2PZJwAFPb2ZMkfqPSqSDZ3C7jEuP",
  "key10": "58zNL98YZpqP5bV3dKjw4pCPhfHMqFjQY68EYXkZb1QJiN7j8JqPF3tKJcsiTugYEbT7pKdN3v3Y7B7HdMNUY8sw",
  "key11": "TuqoxyLUmNdHmQFbmrCyQvK1yT53jQo9tY7bxTbXQVQzeexsPoFMako8QSqaD6o7GNRSfiL5pTYhWpP5v5g3Zse",
  "key12": "3LSF6R1vZ98YcWXZgW8E9oFvBCY9AZY8rj2bsGffpmJnQiLtM3MHMqRnLBiUJk4x7qW59oE5HnuBMLrEb2uZFunY",
  "key13": "3m8BJnqmhyv2rt2P9j7YTQcijH8NfiH2s9xLYEhnNsK2hPG9AZrjuWQNXEpri9RCEpChg7HMkmWz7YzDKffHbiSx",
  "key14": "5S4ZYkWYoZ8ysuWSx1DYNMYhuSbFnbqsKzN7HoDmLfdV5ihZ5SrpmszeMSYsvzRqVvvNamkNohsf3iCP7KBvnsjn",
  "key15": "2yxptDAfARxhMogDtLZx4yqpkKKRhPq8D2c6p3PaPiLdCmS2VqGGxw3BRasXXKNtFJ19zC7S18wawsJWwujbn5LK",
  "key16": "mg9BtedoRmJPpPugdmH59E31FoZ9MakypWzTcEhJRTCZXo3h7qhRJHbWtNGuSEzc5tg4rRdCfbDZyxZRpWoJa4T",
  "key17": "3J9zAy6evoCcMKVyMpguFMDsNqvj6KNZojo4gRHtKTPehhPkgi9iRdPnfzv8w3fg3wJ1v83KnTYTKYx8cfd85LSm",
  "key18": "2xqMu7XWP3BpWGJBkHP6wowwEvNRv2oQRrHKQWDUXYxinopz6dovi18BUu3DefotJ5uAsKRDm4KddR2V4Jjt93Zs",
  "key19": "YMhCpYUsdjS7kpfkPyKF3g767CsZZpa3CA4wP42R4CrwWKQynNHytB3b2xxTiisvWV4kZFwbfRTEZJp6PAz16D1",
  "key20": "5HwmvxobMQXrhUmdBThVQuGifXtMXWSe7UNg2772zKzR3rb7tq2GUaz61EAanvherKW8FJfx1EoyybUUXeJok62k",
  "key21": "2C7E3JsdoxMoiADfJ47Y6FWnAoQzrjtBhXSCPPbABCnyu8jwVoLrfxmYm5oxSeh8QzmzA7ybyedpj9M8pCzq2rLk",
  "key22": "25RZjStYXChSxw1XYh2kHzj62JjbtmUDvU2qLbw133r21qrcUEPvaNp2DgC9DjuyTqerAqCKuAomdcKs8E2EqvBD",
  "key23": "5LQd3DPa3owtFqtYh4itDhJ49wsfgumFtZPMtaUzgurYQStPYejkx5Eow1xZMTDSXnDfpq9ufq2HFHiU2kRKVgo4",
  "key24": "4RaAniYPbAiQUQtp3TLr4oLL9KCordQ4Qo7VbKTpkLoGoC5UQPxhRq4fUKBJaRpKz9KV8XJk45T2rGv8yK43rekf",
  "key25": "3tSkHBEQtYsBvYT388WaG4PnXqfznAPK1PohzTo2BZDpycSTRyd43omprXtcwK3sGUnTHmwpfqwTgu8Q3nLiijTn",
  "key26": "4zL7U7n9mUn6f3c3DP9ZUWCFQKgkyZ25zondz2BMHVPUkq8HLZgLP5Bcbp7dqc2dpfj3FQGFLVEuMVDFEYQPdfcg",
  "key27": "2Lj5umLVgwbSsaxiKEau9xe68z8sDwFPfMNyky4YV8smVZyrYzEoo8fn99tBppNZsdeU3sHauvM2jQrpoTuW1AnW",
  "key28": "3y1DK2mdKcWxSYMe5WMfLQLYCPHizLcF2c41mksKDQxMJWNWd6bXxFR7FJgWMQBdGP8w9VPf51JerpxVjnDHDLex",
  "key29": "CHbTbY5s4qXbqnRxdLMAHDZmLKtst9uXrVuvAspW4RFXs9NGKiGYV3LJjgCxn1toP56sHGUvoLKNzpTK9Er14Ps",
  "key30": "3KovjMWoP3gFhNs14FQ7jQULbPG2AaiebL78U7rcnRTsmW3XuBS8BMVDSF82wJxi3xc6gHCScqVG18c6aFbSKd5J",
  "key31": "5542maDAVepd2BvPu7a7uSbz7R8j35xJ36TtDNb1PwRycy2mxdcPnZrLQcVXXJZsYyu1MfFnYXaSksHqheEvtXAT",
  "key32": "2QNHe5oknjWCAnAk6JeiVrVn6SPMFCACG3zgFrY5KWYHxrEtH8xD5zchp2C4pG7SEfDNS3XAuXZiTgpH6AZiajoF",
  "key33": "V5YrXx3Tccj9izk71Bh3qmB2qdP2z9fi3M7DTFYpZH8oHJX4FW4ikgsChpnxqpb9xDgmJBSEtpj6sLNmeAaAGi7",
  "key34": "LmyLqByqSLRMg4jSWaaQqqgdHWZMQsvzrh8fL3LTnVYssJchVBNbHRXd9457QvNdqEVMRBWH4U6g7otk6xqJeLj",
  "key35": "2nSVLRRSP6grF6SHFSJ7wUZt3E3k7z6paH7JfGx7Y3edtQzeD75DmieruxE5LRTwsHWAwaUUk87fzWddDzXrhPp7",
  "key36": "3L4wdCzjWcFcZypcvpxngz5up3TMwfngANurJJrNhHSzLviPoKYyWCuhaZyPbJNkevUsMYvKLYE746KS3Dh3m6gb",
  "key37": "u2G7RRLTAd7hEdtTiZnK8SscEwKb9wYFbrEYQfFSeecMFCTrDzewVyeTKuYfRK85riLGyq53jBkd4S3EzgAP1oD",
  "key38": "4BnYi1Bm14fLmLmNEiXFQMy1BBZ5zkw8j7ECwyjMsFFPnwV9B8nuJi1dbDEbQup4CfZvnwZRmHHztKgkMc9C5bg1",
  "key39": "2WRA6DBxe63Vb4jv5FdNjS4Zg9dxsNUAywTtF6cZn2rR1NGzyr12i5KyZWdLphW6t88NoVeAbNyUQhZgASJpYLG1",
  "key40": "USXzUjW4FUvSnzePX7ngRwYtH4A7iHcgsHSZxBEWazcRD7izJvJKneywwdB3W9nqTtfE6A6oeywwZqbDMRQsz4h",
  "key41": "2WKyRCr1WYs8pbvr2hcXneYnRem9bW2ZfxVbRs8EbU9cnErnYvU7fBg1f8ELhwFEAJ7LGjgjLETiHmKcYNpoGKgo",
  "key42": "5rjio9cpKEMfuxx9Eu9FCuMtBzknyXher4wecy5Poi6SCSgxTNv8eryNJrUSRetVW5NGN42sb6RnPDiHWvVqrahs",
  "key43": "xJ8mr3LgEpnUVanUm1mxy3kcJcXoCrQVphutuZF88CY9B4dSeEzWwB6tPES8bHfgb5RxcCUToX1bEgkMrHkfyJq"
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
