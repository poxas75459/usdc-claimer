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
    "2quFFVGcpHmwPCtvwzD2zGt3gJV3TXR8N3tUhC8RyCwzsUZQdsiDQWArdY1pD8KkQNKvTLTP74K4ib4p1FEfJqxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aCM4N6HpSgPYQQcQ1suyzpJxiFzDZ4h4JVJutDE4F65ApfdvCRG7wPWTr8F6kHisbKvmonUHJT5pYMKPeE7GeqL",
  "key1": "5TfHh5EdaqXTzQD5GEZcEPGDCEtdzYQszq7V4Pm7dp7ungD246Vj8VQKZWCGMMzGpuuCEdgcoUDgo2UGyLzaCJs2",
  "key2": "2wzjuN3Yfnzq8CFgpxuugEEvLMQFZGNqRH4kzdais6Y4cdg6tpGwCn5QB1FKggBte38HVih4jgWMAUxtiawo2PDA",
  "key3": "5ah2Et42FAHLQNNvUpsbWg28KDEQdgBDZebfsJKfpd8j8aA6aDudJMPwnYDvxx6UAjnanNpp8j1JKfe7p2HKRb7G",
  "key4": "6idhA7G54aaxt3ceLdBxfX38vFTJgpCk5MKaWoffLqYfTQHSFzAykgsGjADsbDoGUtyfSXpAH4MBv8ppn9kaiHz",
  "key5": "5MYZyNdRdKdedfy7LqWGuW2JtNebiBpwNEha1fP2oWqrGT9RhhcUipUGF8uGTY4RSdZx8XqTg68aek61SKWRghJ7",
  "key6": "3zshxWwG5dPhmS52z5TQDTuw1YYvrxvRBH8PFjXU3aYXya2Z6CmH8o2wWvUCMdzMEEpVJVzBusPpAYhRdtxwxZqc",
  "key7": "3wV8NpyK6eRP42SsHeKVyLtMKKgDQiBpfjC8a5gM7h2Qfbhr8TWe7aMw4u1S3XCXL8kjsiY9JWLFnxPEFvbyRCP2",
  "key8": "5FZbjwNqJVCgmoD7TShU8Vu7CyZV9noBneWGKf3iGGsqQnQBwUatFa6B5STMgyWvFrbQYBSAcrp8Ls6eCAvRrmrH",
  "key9": "3z5huJ8nhT6Vbw2GnoV9DWWw18fDBguHnMt4JtFxFCDVqViZ4YvdeTuMuvuRsf9Eu2GwDqPa6NsrQhxoKizD4DXi",
  "key10": "NP3nNz2c7nNghbC6ouDHfLydYpre7jjDXRdGxawwkj9AzSDJMUK3xihcVoWn8GCjV3wh762WSnVUrJt22E6qhWV",
  "key11": "4Zu4SVfZJgN85k1mPAG2j7S751Aozovze2ESQNmmsr1VsFu6WjjkdernjTVE3tXRfsmTEo4tYW93xv2mnzgX4ACZ",
  "key12": "5AVh6DxVnvmDKtN8HWSfYTSDpwFZPLnvGcDfBX8mGw3tveS972GmSjtqZXdpscsT5wptWEUCpqd8PBqchA6hd7Np",
  "key13": "2SasAcBCEtHgPF4bhJLbckXBz8tFGrkMddA33jm9FfcPTVrp85M3oXFtjNMCe4xoqJzfjcJHTKw3UHV8FQ8Depx2",
  "key14": "4Ks4e8NfEAMVq2Rs9UcviuB9Ct8tjG5QiY8tCbXxccDed1WzCFjwCQbHPdhuR4H3aNhjVpuQCDvwwJ5TJd4GtQTv",
  "key15": "33GYZ3BBdyzLsu7UEAuZwB1Bw59ChRRZhMrixiVCesnHFMutAu7ZF1NNGV7JyaGmp4zPbJUeWBY2cyUEhD9e2fvg",
  "key16": "2DTqU97YzDyF7RQCDR6xsbjUD7cmbTkiyjjhBdoeoYQcQRAofUFz5nePQNenENamjmwiYTDE5yRa36tos4znqNq4",
  "key17": "59mdvMQmi1ZakmdqYX5jBekcEVFWK5B4ZHorFRpGqSfnqc2wvSPGf7ZzWSmAmr8c6e8q6PowqY7yzudiNWBgFLFq",
  "key18": "5iySnc3zMLEKZPf3WkZbPLkSEZugcrJ272cTdGJ7q77kog9LmoDw1UE3wivsaV5oM2uWAPv9mTyG1HXhCZsVPmgv",
  "key19": "bivYQufkL9PfD9GXnjVKHR7wiyJRtPqD7PKXUzTiiGEJwHTtLUPsvst2z6rskX5PMAg7c5vr6hoNJ8hhsKtHnmW",
  "key20": "vacopdZioSUPjbdAjAK9gruvZ28PKcEkY6KqfHcezFBg7LfWtmrrG5LXJkk6sCvbw2ikmZQ9EN9fehc7Swh9HQf",
  "key21": "2Vd4ET4texQESiw9duJ4wUYqo75NLA9Q2ysHAEqkFFYU75AP2hCfXHkmkrHrs6AqoL5hCT6v2LQ699p4X5FerGAZ",
  "key22": "px3MUwYCcbHYzv1JRvzESgWLAqTfLBsGGwTfzert4SJT7BfrL5VYHrNgzoTVRWspoS3LCxKasXZvGpmm7cdHpVJ",
  "key23": "5MQUNDygcGvHKvojLmnYozg9oUqEFwBzGMXtr8Jy2vyt2c9v1oANwiejGHxBi2tuQLS2Rp9Fkq9ULFWR4VkkqrGE",
  "key24": "tqvUag9R4waGQ66kTEs7fS3ubYChNwectvMc89NadJH24TwEBfJRZ9RXAvegSdtFSeNS5QEubcmuZuA42bGgvNj",
  "key25": "4wkXmuHsj3ottZBXUUmxwc2Um32iCF8y8Dcw5uLK5f8cX3j7FABcCUbhWxS814PeBmV1qRbk628DaQHUPxxUQKxP",
  "key26": "2shH3DM2X1CZVNe8duG4aDM6jbFgeSJbDYdBCUGRYwZ3TonDvJoqJkA67SvWjY1ptoQh9VQRAtrj3yvhJhhriELF",
  "key27": "dE4JNSxFJFutbnhmzprCTmG6aMLtwS5g57GQXVDBht8jsJoNuqhfRnkhjD6ji4y8DbT45wWkyLATW1FhXeC2gi8",
  "key28": "R1nHyNUT6f9ThY2ToySgsqWU5Cj6qSEPaWBy79sRD1UkooB3aei3UUv6F7P5ZghzwsJhN9R8nytT7tVB6jQtTVu",
  "key29": "45LXEovWExutoNWZopQX4zFTr4HsgLkfvkJq2uss1gT6At1XfgbQLzxuJxxeAao6F8WRVBSvcBc515URCRyhKowg",
  "key30": "5w2a7HZKRDmhw1c7Mg77jYTXhRhYKuKBNZ4xsbdzY57HhW194pNiwv86FCfJg7wp1poNbKdDffrPkpv23bomoNrc",
  "key31": "5beXuSK55fmb2NcuRFZUkwPAFdRbvdeifx5QUWePC6ZGJc2UyDg9QazK7nHYPNu6KbeGmoUGYcy5B1B1in2AVeos",
  "key32": "5TP2P4tjs3ax5mSyxuqymYiBRKh7Sfew8TtRxACHwtCp4FC963FWX4Ci44Y5yNGRYxV5Wc3Y6Q54MVX1V45CUXyp",
  "key33": "2Lot5ARzSxAZgjU3BXpTC6TL4anm6HQbDWL86iNjuZsdaoZRyd65x1kQw6FTyMmZ4aeFKdJRJFoLoWwLBNaKzjNQ",
  "key34": "sR7655c64kk7rXBfktMmP76mPdLVWpkX3f2hQezCpG7s6Fw8YYACfX6yA4RYuJuY8ysEhJnCe7Z4uXDNtSuHKeo",
  "key35": "3cHJuAUTuZiwCGr3Hhxu5DtZeg3qGgzGcZKe7YzGtWx2DKtSPjnCvqcyYasqgYAgQ5sGjRuvukcmiYvA1nfUon1V",
  "key36": "29TbyzC6X2kD61Ggeuc5d8FC9PafffRRAcrqRF9je592mNx44jf8LUGHDGbAqiE3QYsnmRMd7XPbNfmtgiDUtJ2L",
  "key37": "53sqgvXKnhU2nJADgRPERvT9rHdMm2UvNhMSEQePqT2ABbHhBstfC5NBULyWx5AP3rYBx17iFYg156FznHD24vCc",
  "key38": "5V1DqKKwC884aSASgfhuQAShB2UAALczku9PD6yxYs1ztURyi9bN76sS7KEaQHCkEboSPWxsQECy2HmZz5X6RHRw",
  "key39": "4CniX6Ae6pZj92rt2kzUVXQnATTEUdukduGrYy4APPcnbytoW7PtUvyuR5PLVVtATpNZGVzPBhwPEK4o28Vdauou",
  "key40": "3qMGDHSki1wxmqhQPMfkWfkDTRxzLsgG5cnypUf8bvaHUiXwCtPUJaFVEp1ykgiqzREorHkzbV4XMaErm9mRz9aR",
  "key41": "59Qfx8wFZdhEMubVV4FkRCwG74cHVjRCbHvFiRwebtKgVcevq92AbZJ9BZs3xsvULpMNkRVNh3mSGx5xpLTPFRst",
  "key42": "g1HnM2hQPHtzyje5mtoTqQQ5B7ohFuHq84QZfy7pxDbAnG4Q6hg6ZoN87BCpwFDHiAGUkki3grWvXUA8Wj8ekEQ",
  "key43": "CiSSfdKJ1Bj74vG9ZwQJoHmChBkWYdAFxqLz1KegUavf8CpkpXHYsVgswm1aEcZJkNqtV9X8tzgg297TBZJifPD",
  "key44": "xqK1iT6abSPZnAtGsnpd9NpJtmXa3JX4QP71AeAY6K2Amu5mi4nrdstG7udip9kn3iNsFeBYJzWsBsYGRVN1BZK",
  "key45": "4ZCkaPtxcQQKuA484sAFYGUgpoyTXHBA7r6xPZtyJ199fZu6mvV34KCgAJBLjYKsgVkXRZA2uQaedA93rsDYJBbr"
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
