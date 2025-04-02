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
    "2PneeZcrp7vKvvaaVwNE429dPpr8quVTDDsGiJuNBfnsQm7txfsfwiCtwwb4e6y4rNNsM8rTghYsnBk7vBon4gtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x6JHSDficbYfy3gpQSM6d1gRM7FLnGA9k4rSnYwyDFGN1ZiWZn1LkTbNqhzKXpSFvPfn7XFM2sz7xRYmCLMHLvZ",
  "key1": "73KCHzr2ssLZxa56EbYUyE3sA2E4MVBdG8RVbv9P5VvxmPjBfQYHkSV1TdKKmoRd6LRMpDM11RWDXM1Xdtyu8rW",
  "key2": "bfKTspSe6CurwjzVTs4fpsfvYRZnG1SMvtFXnNnfSzr4aQMCVzeqaVJVWVU3GTCrk9zLqMLrpBxyE7fvccXXyyp",
  "key3": "4YwcRobpErCDm2uWQagjoRsUm1ekvfhcHSDNSidnjQsuQMiTdoUJiupsKVf6UjjeycPwnC31Q9uLSNHzwaYUdFPD",
  "key4": "M9bfefxPxm6FvS9B6gZUzsBNAzQo6fbJxxcpW1v9BFFH4tbdFBq6oVjBTkAF2dDaQSGMfnwx6C94LWSssnM5oYG",
  "key5": "5nHFFQDWAtgMBLpyvuxRUxAEtMX8zcynh4e2MCS2MrP3L12ksX4bF47UmdXPtF3gMQ2wcQ8AF72aoXJsevdcFHz",
  "key6": "3tkadZuuJV9zQhWvZz8GUkTmGThZ9PXtwxhWErfLPeMQtLbaiDBSUMPn6BCLdSmqeR7A3Jvksegis49arFs1gvvk",
  "key7": "3NkApR3Yh5gQL7tDUJEyEUhJQEZNVz9GkErKVJRFAvD7DKNo4kXunkGCpRCRoQKSCNR6uDBXLs1Eyt6Ay4s6pRGB",
  "key8": "3gFN46knnwwqZtbvnMcoQUzKb6ZxVJgWw3pKiqiHykb1m6ihVvoyHgUbEWbGE4SnDLmjdnggykaDZ52zybhpFLv3",
  "key9": "4XEGPVkAwZTNpEmvvfimJSRJr98kMaEBkNdJTptT2Aih3AS1WzokkFct2Ku4554w8b4JqPipvVPskDGa29f7awRx",
  "key10": "2sC7xKeRNTuTU84sE6KcayizQe5f2WWTojfEnxPGftrndgiP6zzA1titL57MuBLoP3beQtKXFL73Exjz5vohjrcY",
  "key11": "U837QGmYeCZVCGVFkBFat4XvRWFaNbxrr1wVcK9BMwrnBXqQ8JNM3hf6c2sTFwDXaGwoPhJW8tKKJjqqFcnaP1d",
  "key12": "5Q27uB9dhYCPXPDJsLJh5npoPSBs9vsa2gHrvE7Pc3SxvmYfcXRi7EAwtbrZ3nJU76nxyKPpEanUaZRQkb8oW9CH",
  "key13": "2DwkZ6rvh5Xi7uS1oyywTFuJERS5HEQKYX3dXHfYJB1etVQAtqvfkPcSf14RYCZEA1T13TC2J84MWCC911Dbvjdj",
  "key14": "4Px3fFXPqPeYZYSqMkm2y8UB7neP8TNBTb7ovZ3UZMGQZg4KB44N25t6ES1Rg8sgVjUBaUtz1Mtm5H9MSdrLvvHv",
  "key15": "4oGKVYGrjbsSfL54KBXjJGSq8i3aPKgvtyScthvfbjxDrp2LNZ6zgrjV1WXWPYyeDfMRkxVuXtDLQmXtGeYvrQbs",
  "key16": "5VFP3ECdvrhCgJPftv6UbxWjaz49WajYx9qTSaqzpV8KJidR4aE9miTRuEKnapEnG7vkcGx4fkvVmgRjyP7iS3yb",
  "key17": "4izkiUw2bTDKninbdofxV8FwMGqcVAmVUTmpVauBeJioREo2mPHz9g7g5cJpC4CZ1znqY8Wi5WmM7RDysn8H1nb3",
  "key18": "267bQ6MMqiSwXe53ySKGkFbzELWaGKSzr1sB8YJLtMuSABhRe4bpnTB2ck8oGNgfNvctysp4c7ZCb8fCq7dbpWQf",
  "key19": "4tJGE58WRdZcWQT5Zo3fcZLEJVfPCR13cdnBnQhEeHUVUaqCL271Kfhz7ykLJXJfwsCskPZsfD11up5SNi54JJGc",
  "key20": "4p21ST3S6J7zCiHQ5DczFHyDbzd1egBA8GmD1ocsA1Zz61aPHSa5nGeE2ChViv7HsSS9vwpUyA7FEZnkFxAL87WB",
  "key21": "5jBoSeDRxKUBYotQVZnT6iirh7hmD93aQNvWK6757GCHijKyBaDJiE7kqDzyyUcjHaGLf1xjbf9bdJkuGAf72juG",
  "key22": "3ji6cGRAdZDkob44gGSz2BuvMfdzEVdxfca1RZwPHp7p9JeyvKCGDbU277YH1CwHbsMPkqnUvA2495NirAm6Cfeh",
  "key23": "39NTq4nMKzsQC5dfvPEcCZZGML46oZSiJ3JC7EtDwUWWSWdoXabNv8iNGhr5brp6Xss8ggcseAj29xaauYg766GB",
  "key24": "4yT3eEuha3ZYcqcKU1HbXLaZBaXz3jSbicczpqP5anscAiM2yPw5HGyVBoPeHmQt125KwpyEWWJeFYDBRT5vxwUH",
  "key25": "5VtZg8cE7AEKp3d7YoJo4UzMwX45vK8ejYpUdfQumQRqKyV9EtSok5BXisT4em3zhFW4DVBn9KzxCwaQkRqypkEu",
  "key26": "4VkL3Tp5vPTdedB6Pig9RouYJjWaxdpKFmEFYXjb3XyKMAgMDYxZNYcczrCB7cc9EUcF14EE3kVFfY9wjHGVk5R8",
  "key27": "4bUD8XybsG7MfqcvFGM918gfX5L4LHYHjbts4xPCKZoRES3GnLVjhk8eyYQcNt6dvhAeweHyyiyUg3pa91rtPpDA",
  "key28": "2kzNeMKsp4GPGvkQRs8HVbctbxmVU8gCHbydXXKdoTXDjrpsFgeKjSHAnpKcv23sKZXbrZeCaA5QKxiHJJYDZASF",
  "key29": "FRoo7XvJqQdXb7CaRnct38P7RzeGu3JEfcKbgmaU1p3vuFcRvZRGMZVLQSRYi48DBv7RjSgUobUJ15W24NcB23v",
  "key30": "2Z4BXZpTj6Ft9aLf5T2KzAtdJGq5TMWAR9Hqc63L1CuyVwg589VKMxSUdPi5KaT6q3hLLStj8CtP4G1ewSYFFdkw",
  "key31": "5cBX817dVWi4QXJYCT6pYoJ5D9rWUrJWaH18VgKBK48xfUbW6dLUHaPHYJCsTNgELatEz5Eht3x6drhydu8zRLsr",
  "key32": "2PvLzWvJxTwpPebULbin3xWKEkxqNfRLYmkrcKATkbw62UzZURN8AJLjyt1ikkmk1xgR5Yrd3fFz25uJvZi28qTT",
  "key33": "3BhnZBzVWa9yHVwVZNjZt8TmbCkLugpnjk2VMB6Kif3bcQgfnVX6UxK345acH4X8rHuF589MdPBNUEteTE8unHHU",
  "key34": "5pawEXizmxwVMGSQZP83coerJVxu6a1pmHWQTdUtzsYNcaGA68xPcqG4ux5F8x9MyaLsXekChYbvjD1nBwY6444k",
  "key35": "fHLwXeW46JJQ6nMVmBi6mo1CUMLtkT9nWHZ8FctonXxbkQtzo4f3KCGEHWz8DJtk8GzzqvjnNQuW6NY3B8LoJ6w",
  "key36": "5PyRjYGV7QGrzJLYuSWb32EEnVhuadcx5xsZFhziDrJCgtGBQeoUnaj71F7xd1VSVazeKyqJQ8MbYcCTs7mUjthC"
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
