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
    "3MaDNak7Qs2hTPTeYnnRjXQ9NzUuyJumx397VGgSuKs5ycxvULThDpaeNVLJj44md7XcJqLdgJTwovmN9K7LKy6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AjEasPTQBB8qcwC3H7yhPDJ6ET7NnaNiCzkdTAb59X77kuULmoy9T9S7tFhNvaDcU12NcviXtDnpE5Xs11EUhot",
  "key1": "4QNqxAVvKbxnDoPcUUvnfooLMwgLhuDpFRTpoKUk8GFfgL2k3DNhAsJHzqtyWYEqNR6z7UuTfckmyZHzMoPFE5BM",
  "key2": "2TTxPYDvGxpzsfW3Gq76gfV1Ddo6yS8knNwupjA6YPHDhoWMBiBMcTeJVSEd7QZywGhQo2RYccd852qrgjvdogNv",
  "key3": "4ruvPZLRzU6LHVPQrGMs7XyaTLUhhAKFohmvprbrQYCJsNRJpCwhbnYK7NrUqgw9TQYGs3gdbzeBhbL2mziNhbiQ",
  "key4": "9LNDfaEbdMuyywEuAha2pwLCrmFAdcscV5sT3qCXsKYzdoVbBG8LTo1pRx88MoVxKNu77UmZzmtjnK94njfUcbS",
  "key5": "42aWYLnY37Nt4AJdtzmhGtjqvDpx6NbrtSNprxGmia3m8iRGp8TzjQH6hb9DRqqqjXkAU8U5hiQqcbNqs9PuRxSr",
  "key6": "3M8REabGCGgvBk1HCWdrBRqhCGRKSFct4tczk31yD6dhoncuWiwWjUsi54LEuuJimC1arRrW2RxCrGNFYBJpB4SW",
  "key7": "2SYeU6qMimzPcT6sskM5AX8MP18FMw26dZ33w7U7yAR2Y9fRSy7V9sPcf4Z3k9kEX3qmG91qhw5JQMbENo9yZLoM",
  "key8": "3R8akXZSy3ejqk1hTvwBoAMuyUWfRJPvs7V9izCYpk1CjWd8ZPFMMmkSqkMU5ez24GpyVqGDayV8MPNirDNNuAKH",
  "key9": "Tsos6PjrQytY3xEZks3ANqJSKD7BfYZVNsDnhoSnnQuierKfjtk4m7pQTQoczUxysR1MVov7QW2SZvXpSkRAciW",
  "key10": "3bu4y74bhaHPCFfGpSQ9obdNaaAabAucpuEokyHFuf4cfKm9dn4pG3vYAFiLUL7P6F2H91gygT1t6uKVdL99yVz",
  "key11": "56oMPDGm7o9JvDDaqVjbchtmU6JEMkc1BFy64BpMr2sEfP86L5k7orXqLiCbLtsJD2YpAoudcfVNWidJpMDoizzb",
  "key12": "4xPinPner5QqhZn2SjpHZbiHMzT9uVyh8FSauF1WCC8aAGZfv4m4dcJbHb4CE6BbsCpLDPPrE1tfLEy2i3rokWuK",
  "key13": "4i4xE8Wfb34v4V4EqJc7oAzJgjobTNgfkHzmUxP3TKTLmCYGhCuv3hmt2wQEbxUGqe4epww88dxfSSF5SqGVnCFd",
  "key14": "4UnZEwgdt7rEadkQVL4qFVhAjDtLumSoB2eabrTYrmTouVgwkGxgXGEn77ToGnno1D1wKvgaHJSKqvbsiwNx5QoX",
  "key15": "5zmrPpFKFSxKzQdECyHrw3FPWED5YsaLQeVWpt1tTSfzT6VaBN99ouMi52EUbRh4EtdQSvJfA5726DkB9MQ95AF2",
  "key16": "2jmBhjsujr1yYMowvrY7qY25ndYysHTmAekoYK1rfYQzULz97Kxnbt4Tnb1vhUhgwom8mn8P6SXbK48kzbwSSTot",
  "key17": "2pgrK2wBMtXiVmAMRRaufPmY35dMrPVRch8wmAjq2L3CaCundgsuZEEo63hwntMd67Q46TTQA5962NfvmJfAjwXA",
  "key18": "3XbPzkw3U7W2yNrVHL41ko4Q2f1sLxKzaQtShxFwcGQXUfXuzGFs5Xoaisv23vy6XCxP9dzaVhVVmVoKC5jq6Cxn",
  "key19": "msRgwdWTXscp8c5w5nsVar9neHLCBkXSD8y6PPJQjiPUMAv5RY1bSMbDcgjACPEUqVctBerDEj8615vbQnnm4bh",
  "key20": "5dZvsS3kX31c1cth7hiaWpLoKT9LguhpDUar6GzZQ4nfamCV9TB7hSZmsuFUy6TdiptUC4WMYksnzaeGJzVvjSLV",
  "key21": "5NEpQ55gbqrELLdELBaGQrbvHUcHfqTjwnomK5cGJRJ1vihq4xRSSPLJ3d446WMBjFNGYzR4ASqnYUhBVj2Q3fKN",
  "key22": "3LKXknHoA18axDarYaRv8hQdLBu1Hpc4ggE52VNgLDpUZxaexD9kVAeR2uEXD8so1Xi96j2M8FynMJT8f89ExPY7",
  "key23": "4rFf9m7NPxqtr5ySB6pfGhPqFg7qrCt1zkEv12cBCuz72u66tw6HKLDPFjfcSTEFe6FnTrg5VV9K5QSboz2V8fjR",
  "key24": "2rR6zo7z5r1wa5oEFmr7mvM5g6crqy5Ww8SvMKFNcoACskHAB569ptKxBgZVzihRjUGd5jxq7k7ZiFzBUjgyUJ5b",
  "key25": "5aaduJEUMFv6K5dM5bhGczfeJNeTpY3qve2p35akRJ9ADA6bYQgubPF2PESzz2psrMjWs2WnHiQjPn4zi9y7CrRQ",
  "key26": "4ZEKn3b7DETKJph2v4sHcYDUhhCf88FaHL8dExxcLM4XTksXTU7LCM72pNGXazUk37szydrz9M7fzwdoHXsbGPEG",
  "key27": "5GRPWU53RqgrnGFs537ULWJkBKmyKUmZhL6BqegAG9tefv6R4UfbXmpujmDDzzQqtdBNtpgzAfDY5Ws8SuQuGvrG",
  "key28": "5hxz8XSTCXpmUPWQBEXSoAJwSEquMEYFdCB3x7RzV6BjPknWAo62yFkwd5e1pK4MFVRaoZhfWbrHeDXP1BesL66P",
  "key29": "5hjhb7J2tHe1WbUap9XY3VbXD7CKJpZDB4jJocBNbG8QQdtRCSUEAPhjaqpMWccFdxn16pxxAHeACffVvTcxgwCo",
  "key30": "2hXAL2Dsmz4kLamgF3afXULH3TGdenDQNGbp6LQkPJjszqTC1XHunj9MoU8PXN11DikxoGKTZeqMF9Gc57yfQNSa",
  "key31": "xo2TZVwnSqAV92GQfQVkHPUSZeFJu2FgoT3fNddinoWjXAHp2bNNGYeMmqUXUtJ3N9fZKQHLif9wjVMesQxZSoR",
  "key32": "Tmde6ACbNaXynfwXKgrHp8cfNNqcnBwKNEA2jR3EoCvGHhDwghRxNQdSygAJTNQJXqnCGHv947oYMfXSjGKf4td",
  "key33": "3jQMssDziUJ4fbtKuFPAgmhs8dJe3gcGbMEb8XzZhTWiT7vXF2Bek3jbyEwKNqugiMJF2dd5m5dv4XJREJhVrwYN",
  "key34": "2Nbpq3FMLje8EwZ2EQLUvcBo7Gpwg1an4zMmVbkqYemfmsHdKwbnHAjyRiJJkkUVSmQjcnERtncRRFMr3CXBzU6n",
  "key35": "2BXGSmy9MDehhrYbXq2G6wW7NvFw7VCKYfFNeZSiqU75adVkxLdWLj84iQEg9vRHX77UV69ngVtaHwFq2uRRZcBW",
  "key36": "2bsECVPh1uiV4kc4vr7t1ZBCaJfy2cr5ESnGv7m3VrwURGC3fCNwDQssQqhBrzxFia5vkG3TDJ78CZvMBeJGt3r4",
  "key37": "3NGbBWfgdP8sqK4E1F3T87PSG4nbf7gS41PQcZJTjhw949g5d7F7E4xpjfadDGPYUARcriwPkdm5rrsGeCaCVuSp",
  "key38": "24NRUg6MR76RPWGFfk3ooYULGRggaTzCaMMW19WhkfK8csX33j3NNrh23gKAfaJRQobNtoYv5Prq3eDqbxgjBpRi"
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
