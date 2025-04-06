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
    "5BSgq4Y7dfUmaUNDbV2p8LFQUhPN4Pxx1asQFvsUjypGStBrS1oouK2yuyCbmTwuBie3J57U6Qedqp7kff8dT5pR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fyZZezwYgEgHfPASaUve59DqynBixCKjGhbnH57h6BbP611sugakdip5WyUtKh1YqFTT3hvLzXnqaeBk35Sb3Qw",
  "key1": "4BvAvK2SFcnULbgfgvK2HFX8Y8TP6BAfKYHEAaikaei4tNgf5EsG2KfSxDBSaHMFpSegjEudFvLEwuKnx5T35fTg",
  "key2": "3aBqc6an3KUW2gGr7YrTuN2aAEgqNpPfuB9Ct51wFJxAxzQVL19rYM2RVNyJjV76hiLpJ8wBou37X96W6TcvUQo2",
  "key3": "48zuMMGq4UkLhN7BrNHA3q3JtWSmzep3MXRaLdzFzUuRkSk3xWMKMpCRGTdnuH9u4VZm9XMBsw6WQ7db1C38CjY9",
  "key4": "3texHvMUAx2uFV869eYsY13LtiMHUVqPhUTVBfaHcpbcPFuQjfu5ynxsSc48E7xx7o6fxYim1uhPfBPsvQFuSaws",
  "key5": "Lq3b2XERFMHmDAebch7dkvZPBw6cKWFikCa6PpyWCSd7RbBRCrXZqM5y4hf1fhMbKsgB6uLJr6CaVQ68jXaQavh",
  "key6": "4G5cmdHZLGuF9dpJiYe46c7NpU82PpWAshXMnwudnNUBJriXa98Bo8Vx2qKEfaYmnDPGhovp2zTfqEcpigJXQ2dv",
  "key7": "4RQ4PC9EqqhwG44DXGr1A5LWvWPmrq9jTsqnpLBZJe7v5henrXbHgU7s4VQAnAahoTxvUhFa7k2HnydqqhaLg2Vk",
  "key8": "2YLLzB6dBuMhknQNVuzNP1PKnkLH8pkPHh5eraEiphvw2gyryT5snzddjWRRaiUN7kAhuWSKbeuz8NHCouVDcMHn",
  "key9": "2p7iTv4s5kyZJuboh4P6tAF1fGbd8XgY48DHU5aUBQw2TLYQ3qYKwHzk12RtKwhQiNsSaQNnLvKg3GrnDjSPe59C",
  "key10": "3wUBLwvHMkHvFCpVQZdNjuvC49iadkgbgABCenDgq4HRMoTizJBx6QQq3CN2BAJYvHWXBjujwPRQ2zdTDoMSQT2z",
  "key11": "2H2HaQK8VXpVhks768AaCuAvvQPSmQrRjEpNu6exZs7WkpTPgFrKwxeiv52vgfH4bXPUsBZHBSHsotpQqxYW5RS4",
  "key12": "1GZuEdobNcH4Zw8TLm8m45pbx7rH5JsqLCDvH3kNf8r7Nb24U1awnP2avbKGVD33rGKQgzsSJVexboFwDcZE3Qx",
  "key13": "5xT3EvW2PsCQGZa8m2VZ5h3nJW822fxhS7AKEHrgmkDq4BGjc78iYa4wRuRDtWUMByRxKxCNJ8M2HUSQPsDZthiR",
  "key14": "9jmv7v4cZzy8fUkQWCXMdUd6P9XQqi2ntEKHNCgacS4cD4BY4qfnKbnis7hYu2Yz1WJ6XZbMYtmPhgCkjNRQ99j",
  "key15": "3rbb589w8bq4LAteP3eP44Ttc86Rci8nfdJMrWCoZWkE1hhZ3dex7Yq3V1wn7PnbXSJ9EyJFMugcsLs2XMuDREks",
  "key16": "56EzP15JRPGvqvhvJ6czLHFu4NsHkWkvViwBhzfP1WSc8s6hGrXX6EKmxqiSKofyVzPMZ4ZPsFASrDJZ9CdGr8vw",
  "key17": "4Zab1Nnzr9VGySpX1qFMH1Fh4ha6ey44RrRyGvYK29tKLHRaHUqSMeA6utQzP3rsiVRqNfEGD6cCiTcvJPHhTTAe",
  "key18": "Fzg3s25ZJ6EJLZ1caBPtXiqQDr49yrdnCxPW8dU9wDaughNB1aFDtWNYHMdQZ8LjJQtbDAkHX5tuFMRBAkK6agk",
  "key19": "44yAtF3jvWrPGR8j9s9uk3YgNNvPAvhoGjfdkRDFEaLN5dmV3LiFzr6FxpAg6cARoWATjvT5o97g9aqkG5uAyehs",
  "key20": "oe5XDdTRR5VccBVLp85SLnNBVHxLH9TWHN1HwDqqyCreTqUDdezF1BbG8Cfo8eFfNY6kq77DbQPRsC5R1NRWY7o",
  "key21": "5HVdqbUsiy2aV3EX24nCE6uyTPEaGsE9rweYPttydJUxz5wj7bkZE3vwZNpsN92reooC4YfyKwwE5AhHBiLidXra",
  "key22": "4DrggWdyFE3eTiFp46xCPzUnGAnTG3oMokXZ4hHeRchMUxufkQqRe2Az8jmDmzHsnfQSWU8dLnTD1tLapfe6kvvX",
  "key23": "eKjaZsHxrCCrqTcSgCbjsG4N7gbPzhasZJugGqAFVznvhTJgdkVE3Y9GNdwrUWfZk4ynweDipu1fozBF7eypXTL",
  "key24": "2JFHvJnct73pmg4xo8CLGZpsWuHERULguR9aUXiCZFoN8WynYHz1YQrnLCWcswMQCh8GYvQkHEgjqmTXcHKTkBGv",
  "key25": "354Gr15yrZGEmyJvcZ7mYAhuhesshUHddPemcP2tmqiaBMeni5ssvzSf23B4YspB5LmTij2ytfdfMxZiz3vkGSiD",
  "key26": "2QUfFvYXVXaQ6Ps57pGNpp1AwxVHpcyVSLo8GYhRGeFCkiiZsdoYDnm9KyRhjTHH8fpwfHWh4Mn61z4JyRtMvhiP",
  "key27": "2WuYwpAm7kC5uhV5TcpKiWffdgwMz45UJQ7yGJ3nBnsKfcVQYMWn4uZGPJyXHuekvwSZgTR6qzkrSUh8XD5Zk72d",
  "key28": "5ETEyLoAdpr5SBGv5cLuK6tZQq7Ba1tWdg5fic8pcfbijP1Foe9Qtedt4J4yoJUrMcd5MNPtKrC7EirDS4f2WD95",
  "key29": "5P65kKhhXiyMV51adpnoFMMKXyRDvhVaLC8C7Uqcw8ZMkEc8xXta9o3BG2WFRpWLDEVs1jdgZ3FQCQXbaL41EaR4",
  "key30": "eWfaQRN9u8nYAYDYsU2nsf3s8VbxMoghDDAAFBL1DwKspBBeUAD6uAmJefikraj3estMxPDx987oADoFie4ykAc",
  "key31": "3VNifiphCfLtHGRueZsJWzRMtLLJfjsNBDkQaz7xp6wmjggP7iyfQRXv66U2W9XgNRJYQ5Fwpb2tDQPwQen1Ho5m",
  "key32": "eVe7eNVQjPx2kJFcqA9XwTz3jTGHnRGLb4sPNEaNzJ1koYNFRCgahupa5vo74CbhWjRipgWXPfnHBWkAiV9YoJN",
  "key33": "4VfDsM5LQdiKPLmcc3p57EtrMqSywVBNj13QcKcjTf8hwrRQ3T4RS2BvS5AsHX4pUAYvE3WgkMTEXdWuCgXfEVyi",
  "key34": "46CygPeT6dyVh2brH2YUgFdDkkNtAto1wXnN5UHfXmo6QjVfw6vDGygQDuzSkqBTSDxUFzLtUPgQRtobMT7SvJgv",
  "key35": "2GmhwYYiHBGt9TXr9M4vVxUzoS6k37AyTUp4HSNA4CxiqvaCsWsLFrQHt6cjUnAJ534hqWd8YAHLoKFAKCrQ2JP4",
  "key36": "64SP7YgVPT4LPzGsURXob6W4iTzstSZhdkQR1uvaM44JKXXYg1a61e7HnF6ErMvEuraGGrpZAmd1ytrz5PoghMZi",
  "key37": "2oke87V4kVodRPLDP6cntNQdvfJ7P3ubHdqKG6qRWibqZmcdBoVXpk6JcdSVhGq3y7RXB9yTNxDeWiDRM3mgfLZW",
  "key38": "sBZTs1nHamcreYkbjv1uE1FUSWioLyFNYGf49mRcLQb2T5qWNunHqhSH9bnjXB9ckGsUuC5txNKvgsFnjKRHfxX",
  "key39": "5kGDQHW5HRGxeLEewHHyHwYk6so2fpLZ8FfhZHsmpZKmgQgt5oWHxo7jLyQw4J5bxKDk9PTRs4UZukgzCzogahz6",
  "key40": "5Dt7V1STT9a9b31rkGkjU8EWmNmuSZMD3k38GtEhBKgfdkMTX1yVeBQn2gPzs7VUYcX49DWYfXrMSyWW8w64iMZ5",
  "key41": "3hyqFRTopqLZJbUAcBY3g15t5suDBypfBjeWAQQTFQN54C9B4UyjEwbMUFGxSrVLZYRXwA4An3EAFGra1ePQ4XoS",
  "key42": "3zTZcW69DB1PKLiCSE1YaSFC1B7g17pwYZVXTRoYVN5EvAGukW7Y94uvavhhEPBCScknEFJuAYEBZMjGXRmm4kZX",
  "key43": "3sgd2q69FsFXYkFER6mLk5LZ4zyEtAnKtb367ykzNUrzp2SzXoxFNZ8mz9oU2Mu7exUs4JpMHVKR4MdHfUvDZsr1"
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
