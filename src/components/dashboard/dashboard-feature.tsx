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
    "5PhY3Nhyqhq71EBCdffe3re4v4aatfZJ1N3cLJAfG8qw179CtFPbFZuBaL1vjdK59ammJaazVcAc9AZTw3gPERL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5PxSGaM6kV5VxCwangrrjEyTTd2bYDha1CJcHkC61VU28HtKN9AcGsJDMSMhEfRfvgsGsKY1fdecHZDtRyAbbA",
  "key1": "2xz8EQYbcrGxHBJa8u5VwRSLjGocojuM2LdhyLacDdYvzxUENkXJrv7jKhh8sNV7rk9xMmjDDtrMrZh1E5qkdCFR",
  "key2": "3AZTwLk7aBUHpvwoPXSvpNAxWTJSJs2sRAyagvg4hMtdiA6nKr454V7MbK1Au6Vrm6rw8iUPA7o7z6eaDyXX5EWt",
  "key3": "2aqNJovYVX17dsWapsMsjgxEe4n7X6LfN2vR84EVVJ8hnc6YpJFWyBt4n5ixRQhQQvXrVGxcuKKJnbA5wrXFNAmP",
  "key4": "5FVASK5cKtU4PaeHKmjuxX14qarop9yuR8uNn5utUbVgCLP7mfW5H2EaK7iiZduCcLWdxDHzTJwL11GttZPQRTLq",
  "key5": "3FDvv1tDptRERSzC5UDKhfbwbDveQFQQfSzSiR7zKjeL9CHyuWyxT7XGCBpwQjbrQ69eFNtKTkWLpmhzcjExDSKa",
  "key6": "4uWjQCSd9w2DFmSgUHcQc3fV8N574ZzhUDuya5W7j8DBSj8NEaMe9uRJXBpHPwV5Bje1CFYpZZWpch3m3PWQnQJb",
  "key7": "8nkS58Mamw174zSxugJouhVqxxAuMMBRoP7na8zBnJeLLNS4FoXTAytBUBT5ucCokUPffGMyDckXzStCA6S8rRE",
  "key8": "2hKN8jvQxxmsX76wx4CuMeaBSKZJRtsKJ5GnGEBqPARF3d5TN9Z9wAN9r9df26zZajATXjgdntU5hzk3pf9xJzVY",
  "key9": "2hfAP5W8B9Ch66wWdAVNsH7ELZKREB1b97rwAnCCXwVvt94C2DqT8g627wS4ee856twuz1ijBrXHU1T3XsobwGFT",
  "key10": "2UQxM5D3uLFT2UmK7do9RmzdMus5PD6s1uFVTa979zB8NxMsoScGCXnYvV66xYLti2npoFxvZp6Fa1FggEW5mmDu",
  "key11": "59be4PnrwvMeEwBEGa9p8KzkSi4LHQitz5TKAwvT7qgTw215zyLafLyisoomcKuSkBwfymFEoee2QUHfbczPR1LW",
  "key12": "3CBTC1oEtvw3HdkGwXL6aXt39ZSF7odxutjiw5V5ZAFa7k2SLZSr8S78auo2mnBAnwZAvkKgqMZuj91RQLjBEqSZ",
  "key13": "3z35sWJhdkSTQBHz2o1KQav1zNCSEN3CqoZUesjVV8qW4rA5StrqEAnF8ea77XCDzM61GmHTGRZ8JaxkSR52tyMj",
  "key14": "41BrJpmYhKc6yW3SS26G5fkvinJPEB9L9SkFsfy9hKaPGXYBZD3Y1R5fW5TDoNP6xSfZonDGstphYQwQn69W9ZQo",
  "key15": "WjxsH4gzFzERMir4jPtrbH5S37j68RsFMnmPpMih59VidR5TNy9BwBycG4kaS1nEEzraWGwJB3vPUgc9YbFouM1",
  "key16": "39K9qRzrqxiiCuf4pd6XqMtgJp3feXHJx9Tccv2aiUMmmtBn3rthXbLu2w4jPagHR8S8Wdjk2vrJ51BgqjR1CvQk",
  "key17": "3GrAwm6GZttFYeRH5VC4uMznn2aAFeYMrgzbm5xFcxHdNHb9t4qcUk3LybRCVTDQcj2ZHwwjfmNPbK98bmUcmujT",
  "key18": "4P9DnmQmbkTtXVmWhpsMLCkbgJm9AZsRRTY2DdzPGxGQMEXvKqoYVJu2pQ7wTgEN2hF6xGxB3aCM7n3mbERzSpfe",
  "key19": "32fjHALECAbR5iwQbBYc59qmKnoPUr2k6zNuMU3MKzA9A8Ha13JBLLpQ76kAh6MBkpnPcXDBPdadx8yAnsApBs9G",
  "key20": "4sEMk9jNbp6Gwsz2Ek5CHjnuo1nozqps8LeGNFhQuNyFGb4kbZAy5vJ8JEQoMUApWQEzXfo1rHUSZ8QeV1g6aYUi",
  "key21": "5P2YLu5PYDQghjKNvCrPoVAg1qEXCkEAaiuMJEWkJC65zFzMXEE6WMWfBT3CxcQtKDJs82VntrHFtj12esB1YEUf",
  "key22": "3ziDgV7jbEd7VdJTCxGf21awKxJ6RaEZYNppvW4Nrbo21rgNxoqRfj1EbLy9CNYmm8F4vTPQyEW8N1xJb76goLhP",
  "key23": "kuNqm5k9GdiD2wRLM6yKfaWgB4yKoXFxG1L5VDXnZavbNVfxZoUsfhqXsBZLRpHkCKRYcpKEXAEQDh5hvASnwAp",
  "key24": "yhFcm16LGCh3JMUrFmbYzFXJx6aSinaKLATuPvN7kFYr2RLajCLLnjWY8qzZfAtAAs7H1MCzs8U1gN7NVztu7Bv",
  "key25": "26PyaBEsfs2PxfVCB3DBmnH3GtV8D86K9zYTv7iNsU3RyMrL2Jr67p9TZvNbotDsX25PzBSicjRHAsyqWrgDTbNk",
  "key26": "51DkGgQ7d5i83QxUNtK6NY9b4JWpyCPjiwUD6styLLJwCzvuD5dH84AG4VZKQ71dYWYmk6aFHdP36B1x7F3VABX1",
  "key27": "3CfYtJN359A2EHhh3PSeMB6pqHakjiBQAqJZp1UTipa5zVt36Gmb5pMEDbZyHkP7umQAKCqE9RnPHa4kUuH6rjLT",
  "key28": "4wPwRwg1yUyYQzP5bEN5kMh9dWaR6Frn9m4WuXjjpTqrL7PgYfBRcLPjsVnrDoKRL1xdRtPxgdkb99EqjZp9Yc1k",
  "key29": "3uc74AYeVYbHB35x8WdZzsuHzBNjz5eLXBSNuJafTxRvTLhmAvHvzwTVpR3VXtmuJbeTp7LtMUW2rFMRDQJaC11W",
  "key30": "5upDVUun7SmGsaC98gAxbsi1eFCgQdTjUSsdU9ub2rFSDeipeKxfRCFuyhgBU4BAmgMBbAok4Q2FtA4QbZuhK3F9",
  "key31": "3pmGSpQe24KhgXwr1FN8b7JG2KJ9cGoj5cWDJWnUpEbrJfxbukpvdAkoyMJ6Z7yEyNNnqeGDqh1BvrMnBYk6AFbi",
  "key32": "5cNByA3wXhi2KCSZvGjpPZkMmF3eKSq3GteAf55ZzmoKpvbSinx3esH4hmtCX5TANyy6XnrWsiVvqw6d4V1zxJpX",
  "key33": "3K1uCFSPgFMBhE2xiiVNHseZqFVwTAvJ9YNRovzc7CTLze3CmjC18W9sEWUCN3JhVNcC9zL7MjQk6osYbRGBcwBD",
  "key34": "4EWNZBv1Zqjx8Ug7Uo6jZ4LognYUTB9TboAoC7Ni2FPMWEiBrHWUs3exqHi5d3A6pgWyE6rEfvkuX1sfzDArLW9v",
  "key35": "61ztVBJWLwCY3zmWJt3jkoD9sHRy4iR9y5Dub4ejVj1cUhBRvpyw8qt8j9ue9fzYgwSwpMY94AA8rTxWKq66rpmk",
  "key36": "2nFbtVEyKgA7h7RK2BWD17dMDGbt6i6FY376of4PaVxDZMNLPe29qkAaFY4YPUp41nS4FUBVChDJj9QPLFQAxUN6",
  "key37": "2Z18iLe5WvtVXpvUwHgmfuPYvuDZn9Gp7FMNAgwuMo3AETYetnM4EYgFvsQcJdmUAbfjJxNg9aztNBNwXYd1exyC",
  "key38": "21UGRPUvmuCMf1qm7up4iHdxU1FvLGymKWi2GdzhyC7EZ1ack3fZ1oEwy4rmz4LjAXR7znBorqrfyKk76zzVC2rL",
  "key39": "s5XQNRxNF4QFN1rbg2JzuYeRo4DpzMggqiKy77ugvZRXrT1Qh6Z8o1jBtkFvJSkETZMuwZkzfF1PM6JBvzxM5WQ",
  "key40": "52A7QJpWcKVxhiRtfJkzHTX3oxuqdgBVoqf2K8qjSC9KXa8MAo9powLbR3zoP58WzieqDxcBknZsZvebQD6voVUb",
  "key41": "4kDEk2Lu3QD7mJ8d9MetjMRW7jw3BDDL4x64Hv5d2ak9oCgG1Feex6VwjEfkfSaz2KLCzFuQeC71pPkf35nD5C76",
  "key42": "3ctBzgEAzXdeWS4QAakaBm6dpJ6XDEBuPe5eMzMWE6J6T5RGVDE3R3j3zeHjvsFxnHC5dgeV3HWvQxzYjjHgA4D1"
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
