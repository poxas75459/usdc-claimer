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
    "4Sfwug4De5KaAPCXrsyMiwYpM3fCzfS9RpiZrs8Jd4yy83AmpQKSeBdkovC39GcvEfHfXe9MdNiF85WaEZupit2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dL7dVgy2MYmeA9wnGLTPZjyvgmmsgz4HJRgoJs3w4JwTdQf6aEtqCLZv46VazRY7FkUXntCHWLugvFzL3CFovSZ",
  "key1": "4CjkPEQckkrvqSR2FXpkpm4PtkfSduimxE8EGHofsVwgQRR6navHRspqD2pW4kxEfMm6ZFM7nGVEqYc5Gvh6ki8o",
  "key2": "35xmbiomzqoBcHfiLhR7cRanbM6MdgKoFzX9F3daGg5JLCK8wUwLxJwJPSWt7u61YnUNyyhn1gtH1UPLeRMCKqBM",
  "key3": "2JybaGvA39bam1pHbqyxjFyfHcuoqCpkDNWhryHejbF9xApFU9BtuGi16vQJLqewYkZ481wxraZRsoDCucGogAhc",
  "key4": "4bzT6aPKFvqnxbFifCYZtJNLCPnR7rQvpbRP59SQsq6rQUGoyh72qJr29Fygq8tiUkmiaCsZzpYP8dxFytd99Awf",
  "key5": "3Nzmos7XUiNSPXP7MEu1NaK6bymZutwA3tsAEwoCaMD2X6Lf1QBKzjdUba58vKjGBn6LLMqUoKpdPun1aHyB71Cv",
  "key6": "4pYzQtMCxMSgRGrEapi2UUSjfFw5fWohwj8KEzbvcNJYhqkz6i5yemYkiBSnAiFnqp2kfHsHNbvKMcS7W9yiraRu",
  "key7": "4ALKzAmZyq22H5iRFs6wDAQmU31y317ErU6cjS88GM4RsNa4symmFb66nhJyyQjdu8nTu3WcMXRrhe8WYXFD61jN",
  "key8": "55rYa84CaEAiAokTG3AucD7n7mENuDqUFMHSc4nTSYKUR4DmYysAWovCAbWwf16a3qWMpMdAEiJPrbXkXcq1jUhY",
  "key9": "2r27YVhPtp36jc8T3QGcVcDqLnXCbsH8yR1yD2B7qEYbyojbzrQJvmsGGhtkPXfGZtcYkj6MoLzzQQtpcbLppWgY",
  "key10": "MNzSJkCguPxUnUn3EHK18MeZDY5bvFTYQjz33QuAUo8c5SLyMbeEVLoWWSiMPFkPxyaedsRCA2XEiV572sTyrCZ",
  "key11": "37FQujNS4Lxppbf25YiAvn8pVMNqUuKm8pGzzdobxMMfFMZNTpEwzGvhF4xxa8uPVXpRxWLLDzJsoJKE2v5g75yC",
  "key12": "2pMi5L3BZeYg9RVy8SmBRYk34QfNCJ9MKPNVkaZViumHBA3WyAVgBgpxUHwoAPYcHku7H2hoGe4QWHmRxUyMs8JD",
  "key13": "3C9v2YRueVUtrNotXm4rp9JazKvikwc1xoVUHBzLWb25AeaEDvKiqe87XqQPzb2wnZWBhkiTKi7pK8eMGP7ZEoZr",
  "key14": "5xTCaaqeP92eSx4eZZp2kfQAwZEWsGPGaJERUPR1VU8SY9xm3Lbetm76SBer3ndLZtRxHPQKi7vZ1yKa8XPWUZMy",
  "key15": "5GRCVUftVsUJVbKHDttmE7aFpp4iWywx9BALjBPX4aXmLGPcEozRxmS9Srb4HgbUqZrnTgHR7yjpgDjPGzTnMjLB",
  "key16": "5Uz676CKLW8nZmWmNCESrqmBvnjGNuXfmCGwJkp7XESrq2vBDxTTaXLUTSQ5n9FpVQmckCfDUgftGHXCRbXirWRx",
  "key17": "5XckAVdaog8mcC6t4bRL7tcooG764TsfzyKeEGKTeawepR1qRB1zf7kNvdMsiwM6m3EAhS5jBUoVA4aEtVQU69Bq",
  "key18": "5GzwcNsi3dBBrnLBR6HAaadPfabvb9Y6p7yWeaR5gsSzjYo5teYfsThhRjzWdKFcjmgHduVHEBvgxDJQ2BGAH917",
  "key19": "5pPm9YUpkn9ANx6NnQVRiLbwWJktu2xMXne1ckdBvbjW9SVcLs1BUJvHQFdaeKpRo6sStuf6b2EmqCUbMSZ4BtiB",
  "key20": "58J4wmxsbrtXMHmTyQ3XdDJgsQcprDF756xaFRxCb7yCH6zBTAydoPbkVzSyArUupjeEnpkroHoJgas4o7npdJHK",
  "key21": "5TLDUxKeewQNRkTxFX4TPLBYhoPpQobMFuRvMsguKFw8nuEEtrEEMQ22byjCwJDG5pSvVUagw3HZCtzRHKbDCWcB",
  "key22": "5QxpGucjMaXsv6Urx2rPNvTX3yzRvAirz2FzYdLCeDmo4wRcUG3BejtfaNJQJRETdYuDLioae6mU6pDym6Wvymbi",
  "key23": "2qwejgoEL8JT3ZRycLgtVdiJHBrBPceMzZVxxdFenUnCmFHnSMjbfSUx3Zuqq7KmFCwTfygiNUFXSupkp56Ybvsd",
  "key24": "44NWxbA49427PS5hmjDpwSMmqkYfiQ8iCQTGjn4mybFcgWPAbW8bcgURQLbGXXkqTd8GXo8qZYFidi9hiBaGpUzS",
  "key25": "5wryc6pwMjF21j91XmXAQ5JzqoZSj6MiTGVH127jcRU9BpAHNcSo9vj9dgJ6ZsWptDKzU1UQbTX1xAqZtciGiBPr",
  "key26": "3A5G2T8QP3dN497gRQx8A6hVt7eVeed7DfVdQTZKf7Vx7VbxmVNdedGdChXLXt7Qyxf7Jrg3ahUVbNrYpeCk77sC",
  "key27": "uRTJzZd9xame2ezof6MvNvBkWwLXXo1zPHeRjgx33BS7c5tYW2bM842wCVtCHCN3S1ayhy2dMusTzDj9pv6WzqF",
  "key28": "2vgiva4cEyTwZQFZF9R8HAmqucP2oKRZaepifCbMBY1yWT55nmUtEtGFTfUR8mZpqpo7jhnZuof9nb5KuavDFaCN",
  "key29": "5yqvReq55vi8chvJez3GDyM7Ryzae5uNXNnfeq6sEYJ4QKAss49GNsQZ27iQV8j8WeKj5gyK2S4Cfj6GFJSVh7Xq",
  "key30": "2a2D9JWAttdR9aePGdHGACkfZiX5SjyiBy7fJ2cEsHmSwe5R7m8bWxqFLyfun6oxsghijagpm3tULerUNQ5YTmQU",
  "key31": "5byfYNZGAWaHTuWmoDD2tJc4Ki2czoXMfBVRsSnTv4cT9Sggr4yd78eS2sBrZR6N4AhArtJLpRkFgx7aVG83yDti",
  "key32": "CDkmbkKifC5xYtezReejcD4wepEXnRTj3pP3E3FoHQyQfpZatKKijhhizcd7ZsCmgo4qwX2SYPnZ27tEnsjU3Pi",
  "key33": "2NsnL159qrSbCKFm3CTzqJfMT5X84E815tNvurRc2vqYcMBfHCu1J24djaYZKYWCtZ93LuNKRH76QYMkMYFUUfcb",
  "key34": "5byUJegBm4k7LSg1Tq1ZAfXd3bpPNMLiMrjW2kSp1nFp7YFoxCA9iJ55AupSTiZY74n4Jo2EvsTY4feGWbmAK7uL",
  "key35": "4FBmV8PNFjUecD7VFNXGnmrsmUWxNxgFg8k2iYELC7STdhsmcVkRAQfsz5uDtNWAQGYhmk4TAqiyHNcMr6ongo7g",
  "key36": "5XdZUNfwBy2rm9RaCW8H5M9445BrCCNrdSPVGcRdiPTMyjKYKgBZYXWGEnoL9VcnLEzuyGPhT1AXburoBrXJ9Kdm",
  "key37": "4mPcmFTLXRreqTX1PBuEJ7QxitzbEraN7EiL3MjXsnNSHWVKGC62t5WKJPJbnn4mhrRQFkwD7fV9SPryejXpdVSh",
  "key38": "VdY2noZP2FyqaWqCudiV885VGMboxmWeAF23yzc5bdyne2NRWHU6dzcdr9scmrjjJvsindNazffZCi2ndj3tSEZ",
  "key39": "hRYrQTkQAPL6KMEedu9wdCnr23eieYRzfmoF6fjrbdvKmwx97Gixas7G4R4U8AihZw3gt7xrmVkdWP9bEZnJjcW",
  "key40": "4Ce59mVxwUxbeviwnbmPmXKxrCwajbmfEyL5LM3nort9sU9uovGLXagzEhj3ChrjsmatxYScnYfUbMHYSserF62A",
  "key41": "2TX73TVCsB1kNAHj9Frn4Vkbm78mtMeHLBHDW1HqEG6Cr2du6euhPNCEVhBc2pdamd3pnkjKcbwRc8vAg4mXjNkF",
  "key42": "nUphwdz9SDPcQoeDziVDsMFRpGhMmhx6s51phcibyUx8KToHba7fJWgntzDjktZ8JxHMwTeygDoFx6KMTbd1DgN",
  "key43": "2fiFj967MvftwJ4aWuTdhEax4bMYSKLTwf2118WxKKnorRGTwH7pVRAkx6GLDynRPjAofFRY1xyrgnXZPiX5X2iU",
  "key44": "3X3HatuH9jus33o6rLHNxpUrNpjHRanNNhaBa5gCzz8Tvtubg5bvy8NWjeiyGtf7rBsQhNdYVYVrX5tPKnSAPeWr",
  "key45": "2hQsJWQrf1ecHYxfMw7vhQCefgnnKPeUQSR29VD5jAF9YAm9i4XkcJmDwtoVePTWGwBet2HLgPW5CSaibSwzJsY4",
  "key46": "qAUjrLZSKJmKnv9vYNHqJZDyRgp1SfkJoqhaFbu8Wm5gvDymeVhQGa4DoohxCt4nJKYF3fNhCc4buaSJbqifTbh",
  "key47": "2BQRXvmSbFrNQf95Q1t9FrASeJ5QDV4F7M59AkujHGgoeWGL7syQ4cENcBUCXgedwmuJ7qUR842k8ESmtV7XD4z"
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
