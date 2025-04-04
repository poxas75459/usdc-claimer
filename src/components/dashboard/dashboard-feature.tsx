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
    "3EojhDvfk3Lc4CCp3isbi6xeCrdjy5np33nuGWoycdXCookJ35BDYyoqMmbJbZtGBbXa13dwRxgHMrdhLv3j588Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UUnC6JmiwG9wXd99cmbs2iJuVeByNXXKFJ9XSGHzTP2hpKpVwnyevChQVCNmMCGcJudjr35baCQVzoBZg3tGBrD",
  "key1": "4aBPwTjJQwtYtMkbboT6vDF9NPSNkP9SL8gMzvZbW6T366ECjHkKi3AVHA6aC8XwTgfuLD6kBLfhnFj1xvxm8DZP",
  "key2": "279KB2h6ZzuQvFreqpQxLjKnfh6nEeZecfYD5aG9krmocWL7GSQp1x3XFsLyHAqWJVx7SNtFavKAMD2pyJY5E3RC",
  "key3": "3Qgq5W8qoNHYkeWoLTesK2sEuT8GF9hws1dD7JqN2xczuVWSz32xc4fCVjnXHACio89zCHvsLLQY1z5AzFZUL9yQ",
  "key4": "4nAvNriQCXuBmhEHZR15fwJaGHW8sKiAB6zoFJM3GGCQhrfdjKxDeezsyGBmm1ffQcNYFAwnDWGzW4Hxuptajuit",
  "key5": "KUREvGuCNCXseC2DE6F2DaHT72oD6C8x9BCxApA74g9r4863hGHtJMLjPSXgnzrkG5Gi5ivvCizKLXWsrt4ux2w",
  "key6": "35t5w3TjoUhzQDs8P7FD2NU42YXiqoa5LmPUe4oztheA6RTHb5MpxqCZocRCzmVqniwfrGZeF45hzoLV3QmY1Xz7",
  "key7": "3VuCFJUtzqCh8P8qCcuJBipepgVobrpogboP2d4HUA8Jhk1PqrXbjEzrtYhmTRGiSxfQDUWKKb5uKsmhGtuox3GV",
  "key8": "37F8FNAJBkKTvGkxw67LNo6tPjRK7EZm7wvk9eC1styUTZhuuCPGGtD71Pk39CZ2FddDdpf9JurhEbVwCY7BxQde",
  "key9": "4EhRdT2UBS7iGaPA5aNJv26qVWiDNj6z9nbEi7gmRnZo73zJhBiHhYsa3vd1LhrVVD7HRqye4vQ2NchXtHGhA6qC",
  "key10": "4YK4Rr2b9a8mco4BWK63s7DCmSDitQjZQuRC3NB3dnKmDPQyTgGujktGjHyJEHUe7hEZKRdUKmVbxMgVZ3cwCs6f",
  "key11": "rpSoWcCFbT78Jm9FdqJgZrr36E7WkKmo4EEatj3fF2GSxgu5Ap5qxoZ9TfqnU6MV2U5rAqwi7CqaLy44T8gRDWt",
  "key12": "5m413SkA8NzbfZEJbEPdCX3XCfmwDWx5zCQjrtxEaXsmP4JZQ8ZucFscwFymS36rZxgLASVgn4r72HmKg5jpdohu",
  "key13": "2Pt3q25JMkveczd6YfNKq69qs591tziWFtaxJsQVz28KyjYC2AVL43sqPu7mJ9G7jBDSjdctWHLHM6vcM7YxK79o",
  "key14": "4Trk2iCD1YoQp7LUGXexCS1LDmTkzi5Srh5DDVFhqYqr9NMJwc1fjJHt1ziKMZTg6nohxeRPrFb7Bs8YXkryvMvR",
  "key15": "5ciRgmxD7SY7HmdFw9LNDvDaeXth1NGTE4BgWKpLBGifqGAdtsebiitdUVkpVoNJNKJEoKP3vjTRiMpdwFuN3pfK",
  "key16": "pjHi5XNF6pzqfrY52B3pHj2fXuQeWdxdrX5FUhDFpNLXcPD42Q51oJrs5SehQXmYc1oSneyz9cL4JNrKQLM9BQG",
  "key17": "xzTTsxyjvc76sPga4jcQWjJsE7f7XKnePX7XWCxF7jCbzx6siYvvcFioV3KtQ3brZoouXo2t9wS1t3GTwLovTF2",
  "key18": "66Cek3xJZ2jJLd16qJULKG5Rfzk8wfhHmzF7izPtARVhr3EAGXDs99dgT4gv5mFxiD9BKCbrd4ddePqcZjrKKcZP",
  "key19": "2sfXWcG966ybRzZ2umLJmqamZ6auy6c2P2TYf3vExXbiJevUJVQjAb1eMXrwhrFPcUpXAXKiF3ao36mY3KbN3DDx",
  "key20": "5o8GAd2fFzbDFUokcu77vnHwSEnmG7nnBSiyw2dYkCxZ1uAWYtEhjgpEfEjrLbW7bpSQLRfVDmLtYNBeDsY3ZKsQ",
  "key21": "5Y43KZYQBU5zFenFFagaXgJjpv628X85DvLuteAcC1PcJpU4oNpxCnbuW3AbEWNsZEP71iGriVJcnAsLak7ZcNUB",
  "key22": "2AVNCKtTsWHcdMm213LJkBCB7QsGtSzJoeapshs2PMgbCdDuWEHcLFjJJnvBXihxCBRBepsgq9XUwTrgBpKRyerE",
  "key23": "3mWvYmFWPLPPLFjXA5hUGFhPc24WU3nS7dEfXYkQd5CSdRMDVPfcP7fsTf2GN4uQGSoDnFPMsYvSd6hKNdToCqZq",
  "key24": "3dVYbA1rsxRfeNMbVApaBsyexjA5gMeznZSVPM466X4HGq1maL71BfgdtFTpCUB7Zp1sYXcEP72YCg3wNPWbuRTs",
  "key25": "26djd697CAEVDayJSD9onAtwFhHMasPZpZa2r7tmynjY35LBQaxGqs2DDm3xRDii92dyZ2tGTxeVhmfBbrG5aU47",
  "key26": "C5BcnTa4q679FBp91ofVFYvcBkvZ8mtAd9EA8ZQSWb8VhH71Xd31RmCF3U7uSQZQKRmytYmk4PYTmufdMNgz8Si",
  "key27": "4gCWiKvXmoqZQ9C58CbzMippxuGqLmaahgvZGPHhbzwWFE2SXj6ZFDGCQ6Me5L4k8SGtLesD6Ka9HpP6Z6totnSX",
  "key28": "49Soc1VkKqA7sjc7zxzimBRCHhbBVoJxRti27TD66iutapmYBcCC7jiFoTEV3wxgYHZGfaMVqMG7aagM2TvndMSZ",
  "key29": "4jd1o6VCkAUeC3P21NGTzp662Co3WrdS3gL3PVnrrqns6QRKQXVm4Te6hwVa6Y7zbxjK8T5WbKqkXw1MsFVtWchm",
  "key30": "23FsDiwJhshnneg9TS1YX69wy8k4x2mVj2NrkuVE3k22AvDcnbdEGyVR9Hc2ATPEqWdfFWAzpxr3Hk91fhYUgP7e",
  "key31": "5U8FmVr6V2CR6tvTVTgAX2UgT9F8Jk4ZXBA99MCuSuxpHHhSyqvm6BSA87kQsQbqdvCeqzoXTr1YeD1cGUMRLav6",
  "key32": "2puBJshxipKrNZoSjbFiWoSDzX6a6xNC8nUsyWseBJn3sebRw4ARCKiptYEUoRAS6tmS2GUWfkTyGhZQ4HEvxQKn",
  "key33": "2M3RaR4Dk5Q6WtM1Nc4adPcbsSyv6dt321srD75bHPLwhvK7rdtVu6ehDoUdSmbPdkfZyojC94baPvNJfh729c3D",
  "key34": "5CQDC4vbpxHCYbqM6JLYHpRQfxAJ2thPfcfaD2PqhZYYu18CJkVTiM5nyLZCF1sZbDSEEYLLZyjJGnkBQ9Uu6mfR",
  "key35": "4E6EodFE8N2AndLBvvtw5M1hEgkfXGa8xBBgPEkrBBgrKogfBhhxq24eoH5MB5PcX5C97z7wn7h8YJKbkr7rbWX",
  "key36": "6RM9VriCY428fzuEaTN1YNqe29Y22mTeAXrmoZLiHsjZv35V5GtUa6T1jwFTMvdKxvmxe4AWkuXd82XwDquvmnQ",
  "key37": "4SCVNDf87ypjEzWQ4wpSUQdBrBdfvMTpPSwLo2UbbBjT7SEQdwVWREusT59mxZBL2LcWCMNNrDBKzu6SQPzfHc6z",
  "key38": "4AdFzHEScbJjVNk1KXE7cMkTQTatH9K7GB9AJPDgBAYEt2vAbeBbxD6fsmap6iddj9Zp6Qkp4uhBD9UKVFwgBKXe",
  "key39": "32QfK4shjiMgNMN15Vy5qcmTsxhNweNfYGb1m1qTtyE8JLaXqwdUX2xsU3feLGRhTMdfhvB6cZXU2R88yZ5sMr3D",
  "key40": "txSHx1bN2Cyu41TVqhsHnBHTMDUP9vGykCYCvGWQ5nRPZEnMvrd7c9q7Rc5iy1UinJ1HRCoVp35PpNyoqHZ91C9",
  "key41": "4vNGap7F9YHhfmJijQNfSajUd7dcfFtYJnsfmNKFcyUj7uXpzd9pRYvNecryoueo5ctX2m698zqJ4vYwVoWLANSP",
  "key42": "4Zsg1BKUmJWGkKPMuLLyGsdcy3mzssEfXv6t3VR95FTnmcDutds2C2pA7jNgLgwJQJi1jSTRKUDiubTEZhdqy6ay",
  "key43": "honjvB6djY2QY5f9HqXXFBqVqG22ZsFLBJwRjQ22EnbxYTn8eak4zxtnWY1AbgqZmQd8s6qk24nAptZ5uack1Cr"
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
