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
    "4YC5dW2oivc8X8geth8N8BLP9rSLd6GSvH9eGHdyTdz9f8HFtb1vXAB84YrZpgcuV2FBBrvRMKLfPE2aJEGz9FUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vFfjQmLfcbbLAWCwDHarhfxVL73uDg953GM6knam5ehFZv4wPXzuyaxi5F1j6GzBPbSpNb91creDyGETFiXwD8w",
  "key1": "2iTWa9U4X1x8jRWSVaRu7WZFzbzyGxZGdHLMmFvaUtFGVxMziuAqVbpxf34JWitS9786Cf3GCddrf7HT3zLaTfFp",
  "key2": "3CLYDHZ8tThn1AjtBKWrzmfsxztupFtHXcbrc5czusVePGB4QtV5LMfsBYeMvCLBnt2Wm6QP5QSFCjaGZKpzJRG",
  "key3": "2nWFtNE1pmpmDAyGvXsYibKEPtqQQEiawN5wEVtqXweYmHDVkugUPXeSXHoA9uHo1Y912X78BcMgGWoGbrcwQy26",
  "key4": "2Z7T5NvbYM56qDvf62v5MXqHistTHB5gD2QivN8PaA7V8U3gpwmw1M3gAfgtZJ4KGF1HMM6aHKfw67YhjZNuDkAk",
  "key5": "2Kvt56V1QAtNPMiN5CbuokV5SpZKwgKcfEmQxRbgVHABdEyA5NdsSYY1QLxS3sWG5eUjT6K1jyP4wvii8PHCaSej",
  "key6": "4BzuL5shLgUo8sBMaQfWQG9iacviYSriaWizKMqcoNYppvcL6EqhnH6cZyNfKpQ6QyLv8a1F8u4DduQeJQHTzCDK",
  "key7": "4ZSvZAtUPabbPrmaxzWEtTZmwWaXrxdvw47bNCHDsFS3oADuaxKx1a8WjhSKZFeRdMMvUW3mogbF7zVL3brLar7d",
  "key8": "DqgsgR5JGUWSFXWxPkTamGmmH5W9Wwd8D5rFcCUmkJGxF3GwTJNGMfrH7JMboFaYuu44nrjdy5qbazZjst2H75o",
  "key9": "2p8oq7KeKiyzL7v2q1z8MpuBCiqCq23JFribS5wRRcB4rzV3FAJvCzFw6pCLx2AkwCaqpc111dRohuuJLvEEY9gL",
  "key10": "5gJrJzRBkHGohjZQCmZ6YKPGCZRXRacyWvLwZTQL9wjKgHhtVdeKefKWc5FWKavVackjQLL5tkcqCQTHABDNeV8H",
  "key11": "528GtszBLR1Psyww1QzcMKWMrQQZtraqNvR1EWYBQKk262cnqkGPbm3XCoMEVcf5yAfekv6LTKjD6huUmgv6cvH9",
  "key12": "63ZjWCP7NySsd8pddnxBRDuBpC7JJWdwdv9b9DaARxsf3SHXYJmAcJUBXs33YEc9RDky23g1CFdDNTtNnfheCkqk",
  "key13": "3obmGcFVG9XevuFXKovKprhLyg79jH4dpKcr78uNuL1qgD3cR9LvEbmTRUYvriq3DtnZ84doTKNT82x5HVbzKrys",
  "key14": "3nVdpmqSMNuDKhETKkQiXhBMgVgKvCcKDGdx54HTyRsuPXWToWnaVxAWGiLvoScbYNYZSQcjRAdvdwuqL31a3sVp",
  "key15": "Xc77svDeQxGa4iaG3fuq11TzpRi2Pdd8NgTy6GNpbLxBncdpt1LtDgrXpHctUCfCQqNo41J3btRZJ9ewYye8P9M",
  "key16": "5m75jNfscqQyRtKACPX4jTJjgpCbBTvDDYt4EBue9yxsCkh9GESFwt64xa8DeEW3HMzw4FsaSsUL5BJNSA72F9LW",
  "key17": "qh4hdF7RUaCRAXerFE6o46LjYaFa4yQwthpPuRtdpUNGjD8LBAD7rkJZkQdLPUqWNaLcfR8iURgMrbTvxqRrukZ",
  "key18": "2cvyrtNiCWApZDGBPNtNh5fAd7h9QAKJYpXQeWGsNzxQm2BinQDhXtZ2fJt5XEmsTzs8yGuAzzq22JTAGBd2MVjo",
  "key19": "2LEfqU4Tzf3QfcVTRavyXjUMLDqBpc69r3qQq1c7p7yjBLpxC9gt6NHboFGQBpPmregXkih1kRBujwbExJwT86Pu",
  "key20": "4LYJzz138x8n2DWaKF2ossWpvawnYAX2A1CRZuP5SLNr4gZ7zPivfTYmrkN5Mk7RNgyQdwLih21zibvMQcsJA1Z8",
  "key21": "51fU5jVGcxNdvNr5whb8epvBgoZrZ7QAB6Xq15XhHYJeehHf3DfBWqLi76s6zTx7pfL9rChrDWb6YPkjt1jpwQu3",
  "key22": "3RrXKtt4ubBNCA51JSZYfNQExHK59mcwAFwHLEZFDvxbdCz3ZAsDgAdjZzisrYgn7rLck9DGgJpK1ZwQkevj1Qgu",
  "key23": "4rFEfdCS97K9CunRzhTaK2MqCEbG1KStj2r9aEiemBEFTRqiJro7NAEPHuP4htMf63Fe4NF1JzRdV99CtxRb17gA",
  "key24": "684Mw4txQiJ7aewtNjfwPKkDXL3mscNAKuQSb2yBCbwdEh8xWYaJP7MPpimd7V59RBa6zMADeUNm5ch3iVCBYso",
  "key25": "62SXXixvE756GyygN6apevHuaSrtq5idPDTmv6U9SGuBjNPmWJk3cvq9x2ZQqKjGto77Drk1QnPpELmH4GfJRL7S",
  "key26": "PhC1ChZeckGWUSrh7bfZoHYJkRX924FAFbYyq9um6DFgk42qP5YD8u6F3Kwjh1Z2GFxthwDQjB6AhZzoK3uGAaq",
  "key27": "4GZcfTPZ4GahpxKmigyrmRs9eqifCawCi8zfh94gdYvAytXPUJyzYeXb7mJaJYpVxXvoHmhpaDqqb1ykppJyUFrs",
  "key28": "3bScGzBwYPXDHY967PmdaaDAru4yCxsf3cSVQ64a7FMxywC9BHyjLyD7y7RQNtJvauN9S2tXhBQzD9xFoS9Tjcjy",
  "key29": "3gJmaKGAThN9fi7xAVQZ4MXqiJ1GjgSPBCJGDAornZ33caL814HzjzaWNE9VViNh2711oq4gLVN5mQNSQmN4Yfa",
  "key30": "2BXVbCpSxqpz43GQ9uSAV1FnMet2k9nJ7JbybznAZxKNgYfft9a93VDnNmd2GcCzL7RVeqJ7b2uytQTZbyRrXV18",
  "key31": "3gXFHBUQUkbrDgVxQigWSmhKrJWL1jAdfGGE8tJ3q3sJxUBqfPcDeaNTm73kdM8z4UDjZGgYTZJgTEpd2DqaQw22",
  "key32": "4j2upZwuuGaTj7friMNhLpWo33D21Lq1ARiguLMV8xAn3t4Ygw4Q16FyyXzhiKmNxgseQfvNp3QobAspzGb7Ft6U",
  "key33": "5WsiacRWs6Fya8KArTXEBzwAiE8LYwEbWTXESozwNXxR7xxjuuKY3LXb1YKjdZsp9kKmj7BqZLtcPwepUi9Rjrd9",
  "key34": "4vByJ9V16M4auDCAgzy6asJD6FzavVFgSwB7UgCdJCqBjafvtcBauqA6PppdLfiB1oY6Rtv3siPvBS8ZUBihLyB4",
  "key35": "2CWrPb7kwpKt3tiApbd8V7693L1cZuGrjaejdakbm1DVxhc3eULNUSfo9b9nSkhwr1FLG5L8TFBCYEG3sYCamgiT",
  "key36": "6zbYWBiWohaR2L6NcSgKbCcrh2Efa8Ywdej22fFfypXSHx5hLemnzcaK6b5fAaRe7hn1DnDgHz9TKk1wVsHSq43",
  "key37": "4rxpKpBwqDdySQQ9Gw6AXzENS1MXFLM7FUvkPthYCRYp3eZk2hMick3KnbojbLantxyXA9bJRqDLToKBeGZjjpEd",
  "key38": "5sYUT8j5dEaw7KigJasTix21T6rAmPxCHkiRh7qcqMV5HUctknygP6jrQ2iYWMSs2rcb9KAPXcwsZfxwwv9FH3Hx"
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
