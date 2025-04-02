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
    "56pxXSaDrfCPhFfYDEVARqrSsKJ5hLCbEuxwLgDC881MvPRY5DaYA2H4kxxL897siTc7xx9gQfuFBcVpPEbrjjma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ASmtnabmDdmbq2DnUezVZfPqN1mYyUDjfxpKWzySEWYxkxAGSvqJMDJR4BQzMQSqugY9viEChcVsn6TqS7eD3XM",
  "key1": "3mzgMBanZTCGwQcpRKzMBPFyPWCj83QDgV8ZELzzf5x9ed5K3TEfZUJWuJpLRzu5N5JFjjeKS8A5LsZet4wqj5G3",
  "key2": "27RruAWzq7JCVDgDymh2vYH47cgsuoDNkM3KGHWMDpTzsTaxSCZkev2BZT2WCZFmZeSdZTdMgUHVZ9a7zVo5z9EB",
  "key3": "EvTuWtTwgk1qAqYri385MnwFUV16m8DP7XebBBV9UJaU4nnKe7XKujMegSfz1wDWHVPLK5ZHag99qmDjBh8ZAC6",
  "key4": "Zzg6SRJepP3gtSixWuUeWwuBuG392N1gbMvByw597JovdS9Pad2isbytZS8sSR6UNX718xsS1rtGfUb2TEw2sNn",
  "key5": "ptte4h2qRaSB7a52TbrDm4Vt6LXFtC8VScu6VunRbjRJCRsegxvycF8FAzNz8JFk9n2KEDU54jfHRqzPZiq7pyt",
  "key6": "3AAwdFNueXDfStc8cxC2TUgH3sJyTXd7h7rfyAAsgEB3okGgoZ274pUvvrKTGPRMmyHk1G55vuLJNwBEfhUngv3G",
  "key7": "CrgLgdF4gWdw3yER3cuPuPVh3sHZRPzAosFL8qH7CQRihp8NSfEVsdvEGbhHw7yKUFy8ygSuYwryEaYTsjHw1RR",
  "key8": "3GYztGEAJALKUTWVEcm8vU3zTkM28Nb4dzayUbT1gdGQjzSj6FN1kFFv7hrNBUx2phS2kz931tThD5tdLXJcDEqG",
  "key9": "5XiPvNLatbaDN8jakom5MpGtNfKFv234kj7GuPhA3KUWPZGaQZZruM7pVfFBL97gQGwUkg2FzZKMkFfjog63Qv8A",
  "key10": "2UxY3eNL4AUrJQCc1oNj3pt9edKjT7ZcWUSJeL7fTq8E1Mf74ftpWTD272BjZT4SJLg7PPkfpx93pbqd5Q859s6y",
  "key11": "5Xzh7yzcXh75Pdj7cNSJ1HurV1ejVTCqZW7Vxs5EL11fdfAbLumJqVmHxud9tzL3JopXY5yvJfrmN7exT9aQHAAc",
  "key12": "2BsuhK4qEaXFSzMUnzKptW9gD3eEeyTcgi2ih7zGYDYwn7v72i3msXjGw38BBonxif8W9zD9aJUYhQ7BjAvNNGtw",
  "key13": "2ToBNmSyPdP4RfvFVZbXU2pyZ6PAUdKHSszLuiA3NrciMWaFKds8xt49jaPBZyy42T3d4EjMWoBmc9YQXmKZTK17",
  "key14": "E1oBFX1UxVYH1wRjG9X5axMiFh6uP75bE2TrsAhAgYa7aEhadp8QZAFYbthAVzeD3DMQfh9DPyGTT6Ckxy4E4tu",
  "key15": "2orFZnSkWtGoBhggmDRmi4uaK4zsVTGqorNL2X6sTR6AzgieX6M7Y5bsFpVJfQweN9HDL7gW4vCQCsHpKVqcUEiy",
  "key16": "2DHcpgAwLJADBfEAd3FLpdJYwVUMjfpPNHbhAx9kU5YMAQogFz9AwtGvB5GCQJQZL2mPwKuSbs6fhVy2CFCYy6xk",
  "key17": "52tH96DZ6wrGShVvYJdBeqZGPrJpFqp3uakYRXGoE4hkGANh7m5SPNaGEdVZaMreoMNjC3JmWaXrr8wUvpbP1KUy",
  "key18": "RLT3V7ECj8vZheEmw3mTAyxcXpJ8xMTWv73SFjkympun3eudM6i1Ymt2jYkAEtshrVC2dEAH4C49RifW98cw9XP",
  "key19": "3rQtqZGn3cbHbza4Xo6qecotyuJjBTVfwiUgDNz5KeaKVLP5ZRWL3rhtFxgAguHjXvEsiJ4AkYFdYLnSvgxq8YFA",
  "key20": "4UuMgC1Y1nE9brnJZF6DaMbX6QjWC2povkC14L9zhMssDa4d88j4L1MrgkEaK47VNeyLy69h5egNKJaN8bKzDNuw",
  "key21": "4jqCsxQvLrLFEbe264cePnkx8q7FuZqH7JkMgjEaCuo2ZNwR2fjSBf7wn8KYtD8k3tttkjuida1ppdDT7ZXBURds",
  "key22": "3dANP59Na8iV3dvS2t5Pb8VYmRNQctfsSwqW8DUJzgcewDz4PVqDGErpKZeUCvNvRrqyNupC3GS77ZByvKeF3QVy",
  "key23": "3CSXGHL8E1v1RRnD7KQDQJMKfZXZqGbnUivCNZSXgMEcikxx56Sek68EMNeRQo59SeuLDRY5FGv4Fe2yaAUESoSA",
  "key24": "5xwHZ49vvvTiFG4LApq3mdn6sJbbqKyJQHs9QrprokCcySJFzdEByD73N9or7uszy3KQzwf1g2rXHUi6beKtuDx2",
  "key25": "4xRQ8hE7mazZzvCN2QYXEsKcuehyapbZiWhRC8Ko2ZStojKF1PbsdZnJCtn7cvRma9XYFMc7X8M5VX1gysLEXaYS",
  "key26": "5XxsmUiLubFNuYncK7XV46s66Td3KBuZKB5Dd74Ck2wmkEYkJueg6qhg3iDppUUAiKjgT2GS7zGrTSCxvVc664iY",
  "key27": "4jQcpuLXxpG84ESrXxHZvxDKYJfz1Jkv9rz9yc2iPJLZomEbMxoQpBGHvDvj4iU5gEfhWcsfuLKBpgZ5HCQK6DSx",
  "key28": "3eeV7z9TixcnWENmHFLPGY6DK6n8vHnf8QxnzQxPDpysAG9sXhfnqBnvtaGSu3NJUMuMECaprSddskcDc7KvSNZk",
  "key29": "5vZ8Nwo3BWBbR22KY14Vp2Eu1zXZEk4H1x7EDVXTKgCaKEDT1DKHGf5yY7Joaww3PbDhCs1rncf7MsBwWSHa4nSW",
  "key30": "2YyFKT56hbRGWKNeTpc3m5GrYWP71kFEW6Po4Rb6m6QkPP3E4fU7ueBunf6Amct2ceFR1U7Nypb6X4GnucToUbKv",
  "key31": "4dZ4MR7ksZ68rBsUJZBgt4CtiDfGZuJJW6oXKyhw6wbipfiNKLT5toCMkkY27c73XgsNdSnSPjkMx9jj8wiN5Aro",
  "key32": "3ZtgxWec4yBUf9N3DbBcELnAdiSafMW1Gfs5Mqx2SgW3fRYs1ViKbdpppXUxobPJqSLiG9adPsSuf5UVt2w4p8kX",
  "key33": "2PaWWDLEs1BP2ELonmmejjj8bGtuEvq59Us9wWVroYJshL5eSrngBgXARmtoSCvCnnkNLCEZMeefWd1bwZvTjPQu",
  "key34": "5LbjskKixi3MgAm4kbhHNRm1c6eyCic4wvtn5DNXhNppE4t7bMZ7tf746oq87FKCPtaDCuqzRiLMX5c2afBTpm3R",
  "key35": "3sBYrm7cwPgHpCDYmubyf2zEoZy6MEJfzDUjtb9m6N3XaZZNufGgLwgmjJ6ddifWFb5jhR3Fz4t6iPc1wrxURqA5",
  "key36": "65LBUnQBvweYF98PJ7rpRQbc3PDJr9hDdMECTAMhnmAAgppHFfCM4rGBG6a7hweCuxyjjgtuNTsDyp6s4aNxWo9v",
  "key37": "37HqcEGERNPFaTKDFwHCwmN2tLJvnPEXPqEF34KJjHJAfPLWpKbfFyKYDJyTSSdANyhX84kEdcZsQVkoWhQ6FHA8",
  "key38": "2R2DaHBoAkLJbbFP86aJhwZAQJ57qgNELvvcLdKejge2YcjrUYqGyX36EWUBPN8wFpxw8dqXmrBEK1CPXDGMi9tH",
  "key39": "4PmDi68WnCjpvKcS5x5yNGEPHwPzYKPtZoFp3ZPh9V68Wm4zrXDSWMubEET34h1oFPL59fTb3sBs2GzW9i6oJgwg",
  "key40": "4Z4AXYWdyKxca3q1hc6pBSUd93Gx4FkkjQHo43VAQVYnnA92q81Cs9UAL18E7Zjk9z8XaEFqW2n82BDPpDYwV6yX",
  "key41": "2YRRkN2ydNrREXDAEhRFMm5U4ExiMYGit4m55q5eF2G6xhxbEUg8CD9HdKSxzEBc4mrBAsFEVSdhhCQEZBLSysft",
  "key42": "2x1y9thFZFiUnUgH33nXEBefhqDpNJpeUBmHpFzUQ4QsgpXGAxGApZ7C8K8XKphPoLdWSvbPShP5V49S7FwUouHb",
  "key43": "2uB42vF7tc2iLoiSvL7CF7Bnu7pznXWVsLK3o99CRsppq7Hd85T56NV3BuMnrfUuKeHASh4mg5HRhqaVFVoo7hsY",
  "key44": "3PEJmHAQjah39gMfjMyjUnuTTizpiSZUK7cSKvxaq6DgvzhGB7BWYK5tkPBwEj75VT3j4BGyP5qPy4viGWSaWBb"
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
