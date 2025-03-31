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
    "45Q1NR68ipNczrva6q84SBuaA54zXsnqfwZyVhXbpq1i56uzspt322p4Dcr7QQ9PT3o6rLVtmYLySQsw2WosW8xS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iD2rv1C6aFKzsa6NBz29PYALjSvmoNtVEUEkFYEWicaihFUrLYvAkMczmhsLeCW6cHa5MMAhXpcrPdpsNeMQxTf",
  "key1": "3DyHykexDKWf8JwbXdcVf3kTvFV2qmn7FvvNF9nzzwrTxhNq1VwwzutKQZgvzxnM54BuUDdjJfwkRwm7P6DQViFS",
  "key2": "4qhEqoxeV1PHoakoZv2N6TSmEFZk8LAVdoLWG3kVVeciKLCadZfASQvEcGtgdeGNe3KqLucCRykS544f3gBFMLvi",
  "key3": "4YzxaVYLNUUJ45ETpNp1c6YuXeD8mx99dQRvCAGRj72HF8BXaJhR9zATknsCxv154RPKJcrmDEbuJhFbGMKcbbTz",
  "key4": "GWYePe8nojoaaMB9jfMSNdtLcTmzGq8Zw8YwQCdfFYGusXF8R4zJYAiMEzHonHM8QzeDhoF2wAkWd9LA5nMbA3z",
  "key5": "3X58f3ZDpGwYmi6wL4ts4QkBZYWX9m7sYQsd2NbC9f3HeuSVa3vHWsL4P82ZF7ek8EJfBVza5EQL8QQFCzZReV3Z",
  "key6": "3QfjZ9JxQSvAXwZ1dmCUqDBVgHi2xrM8Npa7VLYRMQQ4vbchttLxhdMZTd3dtEH332HGpxuqLMM3PynPNcUwLMSq",
  "key7": "y1M5V5xCWkDbkn1utfzLudcVAC6Cb1Vfk6VPmQBHNAKFqg1MhZZx6QffYUS53PZVrxmXJUzTWmK6zkwX6KAStY6",
  "key8": "4AYrvFh5P8s3bUcgF2KNKzpmZ3UpxHbMDJaBnsZmHtGK1VFSGVCoKvC5pL26Ky8GVWgatuXg6TJfSGHW2vS17ci",
  "key9": "4iv7UnrWFPU7nK7sKN3C7QaqgSLgzNUbLyrvqz1dE6ev7rUZErVMG3inFWhQJci4YevKyTsM84RbSXJgHTEHnDyc",
  "key10": "3SNV7PRq7QmpuHWFSHm7XEfpewrLbRgKu5NbQUWq4FUmZRxBWNRBThJSwazMYKJfRxdRhfS4dyjRdxEthYiGV325",
  "key11": "5Chh6d5B6WTiVTzwXpaeV3CoML7Lc8wFdC7a1C8c5DRWFTVhEK86EwhEKF28RaWVZc5pFr4zYzWFMcYeZYuHePSN",
  "key12": "2hWj8xToQ1Csu2LoybPQCZmrb9iw17yjXzMJNkcp1qa5GkpGN1Um23rPKTmt9fBjg4geYjRpxjXKULMh1pomDdng",
  "key13": "5kgfu5esPWyQaz9VTiXe4Pi4mG4769yf8p5mwSJ4X8uVtcaNExwh6g8eiDBjZC1G58FcDvy4jtNk2WfSMUVPnSjj",
  "key14": "3BCVr4Q6ZR6N2GWvX8MJZt1NpRan6n6hRWsiXXgg7yL1oSU3UhJauTba9D1gedZMdXG41z6bETVKUHGwxUaTMBoD",
  "key15": "FwUTBaq3j7PDRpcQYebNYjrkZwJ7Q2PfeCEpBiTbC4RCH7HWZPFpQPBD4Dc1nMHy9ekQcTgt71KR7nqyzasvMQC",
  "key16": "4fSFq337EpZ5SbusNWg75mvKetzUyVkSEYZEmvV6sFvnPEp9sWwPMjmzJ7MQuCJ5znrX8T1ss39cKVEELmoudJre",
  "key17": "1qJUnpUj4xC7SYtbXv3cuHMieg2Py3kw9uBUFD9WdCWMBB5Zcr2A67NgABeZxfkZ5yrqWnem2rWZzGPqa3sftrm",
  "key18": "rZh1uFAyGJWTLVph4Yv1LswJ7KL51U3ERACugzoBtNRu5sQaK2Puj49dLgY7nrA8oNUKLGhRpZWsdXaLduuHRpz",
  "key19": "2roVDaWU8kXW1qrpn1eWncg8vGRgCkQWf3KSjp5MaQye52dgA6GTobFowDTFpm19i7cBa9R9uWBeEQvnsbnazydf",
  "key20": "41vkwAo52yjJUnNrpkS4cz3z6m31vEgCqFrwKptggSwWJqQGtJ9d7AUuvKfr9RePmE8CMhqoXDwAPmMgHE3nJN2t",
  "key21": "4ssNRKvRSGT8eA4qyKNjSvrvXMkhitgx3AA8v6KavXcR6evNBqwZc25zfdTzDxLCrczFR7CaXmb6u1fuM4ru86ey",
  "key22": "2FddqspKrNQmiDiYqgyTQYNsMAwd5rwR2YYQiodyFLGUQdzuUamrXMTVdamEL6LAg5CTQnE6K6U6zfAXyvjUki87",
  "key23": "5XQp9N5GuaDReXpJAGUTgsfgF7BaCCx2Lz8NffgbM6KL48RFzg6SusK3YKSsUgf2GwL5Exa27q9SxfxiE5DqtNrr",
  "key24": "3Zn338EeUfUvtpncHhrmmaxN2B8fB1PKJaDMHdS8duy446gUkhHU6Xwji81iBmoQEL8nUdrBRQ2GZrtHawwFeFN8",
  "key25": "4GPyWJAqKavWiwDjnvPCYbXgQrkJiuQ2aHb6HdS2KzpZh49QNpDHwYJR1rq2RgbkjMgkLnKrRwZVFUqNgrue8ViK",
  "key26": "3LRhwqdJXWyEx9eh9bzXURcTdxV1Uk6ysTrKdxZysW66NJZex6znD2bZ51FNyJtzv8XickWyN3TCZEGFvuGEopv2",
  "key27": "5xHGbe9DfstLPk5EiKzCxEEsLD8NymnWxV6EmsJKeYzgCYkb7YDkoyu3Py1PhPny5NFzYEHGQjPAhvpDqinVn1Es",
  "key28": "3dtetYGqaBhqSVfpnbtqYEvqhfn4A5iGjiwF3aWR4DN4imiotV2ykNyvLUs8CR5A9ZrwcDoyn8AmDPpeozMiPwgH",
  "key29": "WdpTi1PcnGxXKgDSNV7ZEeESogm3oRsmpom9m9R6JJeWgZ63Y8eck77sz85yDPTNqr14rJi63LRTisGjqChXCzs",
  "key30": "4tpB9PCCkWV3HxVKguRDYegyRNtWigqx4CvofKwggQeeFDJm7vBKmimmeWm3A67o2zNEsaZogH1yhB6yMm6rD3RL",
  "key31": "2v2JprkckNWZbQ3548bwuMBraSLF5whHVqcVEKaV7XuPkDygCH7m7A1Cidp2SiEYGzPZXzpkPqgvB5TcKso9zART",
  "key32": "28g266oPa1LqZYK62QwSgyPHH1wFFf2m4E7R2zMSgFCgrfcUnrwGLAFuADCoHcmcEjgmgrDq2JrYDfEAkaqfktd3",
  "key33": "4dwqkiLwAGo12EJBXDicC4CBfrj1s81PiNjBsdp6AK1fexwJqH9sD38TJuEE68Epki5Fv9F5hbPKda9PvuBtS1No",
  "key34": "4apNdVqSSrp3nR4wehqEkEMt4yyqaJorvTxf1sqCJUsCZvMedypQ8gB1prUs2FSu2YLonJZNuHQiiCRghXP9wbTx",
  "key35": "5e577aTByzumm1ZQmVkbyw6FscF57vyX9FvWKu1jwiNoDUdqp6RdQXsJccMwFggdkFFa1yewywfR2MHZSgz1WcA7",
  "key36": "4JrS99HousoNHCzgz8sGTSobX2x4gLQuK6D85QRztNSaR5a2BjVyKKg12q5J1eFFLsD9QJ6sy3DYcbSwrBDtGzt6",
  "key37": "5Z7542WWTbyweV2ntjX83LwYKCugDMvAPF7758dt4c18BmLprUAyZTK6wzQjQp4fU6M8TCMHw7TV2DVsUbzAqTmL",
  "key38": "59NutL2NQ7AgLR4KWLacUgX1aUa4TPJNe6DwvRuhbBAvsdcrqGhoeKWAF68e8DXeUrRsXqG1wm7prFVaFxdnZcZU",
  "key39": "D971cExopdzEz4wJmcCmqWVvA3MEE98H1oXEe3feKxNDNWwsYmXGR5CxgXW8CvKiTfGU5AL88GN7KRj9XEST2La"
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
