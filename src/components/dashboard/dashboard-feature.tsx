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
    "tJejvkUuAqGSyzpQNamSek7SY4sNdFM3F72Dr8tFFefnJQtDke5WoExYFqbF6KKExZViEgDLLa3AV9MyQZQCDgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ruup7HEe9cvzZEFWxL4h2DMprehreWX3L9iWstR2fv13re6u2GDNLVD82exVR4CZhAKevaxNbhrtEnowqDUUegB",
  "key1": "3u3EvjUKxNPH3yD18XqyCjBtvhQakD5qSBnti7hYLnaPnTpfWiSBvbT1C1ZxACJ5SFFauCgXJFAykGqf1UQ5ptUu",
  "key2": "5GqqkoqEHdYUHQ5XYDBQmNMpGXap1ndfnMqPaeFL6SPvUpLZ2zhqjLXDLt6mU4Sj1b94pd4hpbb2brZGqWVx2c8Q",
  "key3": "siPt8qiQE5E8Szqvsb1KJFQWTjAxA4qNU4snZzSJqjBd6R5ZV8nGNdUz6d3gAQdY6vLTV5o1GB5fDWR55Mbuyin",
  "key4": "3tbz6HvcKXcAHH8sNuYwat2PbV2J5VeRF1kBuDeNoL6wm5LEjKfUa3FV9ZaLBZCPiUkpPjFzUHDD5d6ctSfoXL1P",
  "key5": "4aRZYPH738SD3V9LeDEzku9y95NmqAE5tvB3bMfsPqrDVSB3MTtGrq7hS2DCVNMExwgKCU9sJLBzjtQz7Z6tCeaX",
  "key6": "5Wakc5qXP38HcyTgzDUrnG6YzyGB9aUkc3pKfs18UnKYr3EHKpANyGqZtNZdhYXeWesyGvVQxrZwTK2RKc7MccWv",
  "key7": "3guCP2gzXoi3AvB55r2DYi2HFX3utSdsELoJEuUzqw7YYpwSTHjf3oP6iiuUx7KzFzw33CaadTTFM3s26Bc9kJWb",
  "key8": "3w1wNuHZXtBhB21WioZJrTuoPA5cCU9t5FborPFEBJNPEgfuAbwnFi1xMUW2C4zYy2PFSpDXJ4HzJCj43TXuYuKg",
  "key9": "3uRwSLBSLFKAi9UtQ7AbRHshB1Bg1c1RJJK9e11PPQPbk93kznuXRjksAmBooxaL5oFzdyyoSGtDkre1s355NjM9",
  "key10": "4yxLdv3MYUcvZWeap4CDef7tW1Mp6E8NgvF923mw99s6LWC7JoMrM3yPzDAoUVgjPWthZULLmxFLMu8bfhMpUwKE",
  "key11": "3hxyW6bAi9vgdQFHqLfqcqryLS78gmgUamibDEMKk5MtEJBnpY96AQL3bfKtv8mEA645cch2eFaESRyqtBeW5xWc",
  "key12": "3DQqWEgcaesrmThf22maEr5GEx8sVWTfASUCZ6YD1A41yghwdeFD4tMa93vgG55ptbEJbP3AegTHGueEnYeFjzdE",
  "key13": "4KgiKSMoSHHpyLU1ASxA4n1eTjYERFgsdaDv4XaixX4QEQztCUCPk2tgDKBi62sze9Z9n2UVUyhGHh4LBKgA1GjN",
  "key14": "2iRFeh1HzDEt3fYxDRe6ZCvyLfN7pSGkJW1YWrWYZZk7v5vMcZBhdNT9MrcoSGPSqQ7hJ3d5vhdKjQy1LKLMgSKb",
  "key15": "3p5xYJhR5R3jzoStmZ7Gj21vc9oXew9W93fWL4ut2cvrYroz2kjGEEsR1p8BnWkR4NeerkwKG8aEjSeQckuQpmEi",
  "key16": "2pnhKvoPeMp3AahDour4Nw5HEJm41ytdcrpKFLoZaFzqTiTLVfjGamukfdeaAJhm3HJmGCbTq9Pcg3shcS1t89zT",
  "key17": "3hCd9RRcnjq7y5RNUqftu2yHVyjN595SfRQeAJ2vr1gyr5DvRL1kPBERnhBUZvVw915m9mrtJRL43zETx57Fz7x5",
  "key18": "3hiCDsCxdbSAbY9WPDXUmds9XsLH3rq3C9TpYC1BNDbWXHe4VENSLnJbgukc99ForGcG6FCwawMNtfzxEc9WVRsW",
  "key19": "4TonUwVrLykcsuKa4n5BX4swBFpnvZD4HgpHPxYPtkH2osEFBQZiqxwxxcRwh8hqCdLrRef5FHetKvwG1EiiPLJR",
  "key20": "2P1Tc4ipBRaQFVmrPbJra88K71DDqsX61sjfec9DQQdkRWAySJxPfJmBxFQr7NPHbcYiUnENRcCuTuiKdxWmydMu",
  "key21": "5DdsUdEobZmzqpFSpmLjSFNL1syqdp4i23qDyzTRDmeujbLodAA28yjMk6QuHT1eJMTbr1yr8f5XDBCc2zjr9ibk",
  "key22": "2v3oj4FzwzTMoK4JVMEwFzUXBXVhqrUJmSLPAg5FANWoLhuUeXrXGhECX2uGUGsbNmn1U3789CsAGgNoejqrEmMK",
  "key23": "2gRTduoouBncbN1NtBAqDEp6r9jxkFp7oyu1DmVKKrWxErHRVaAs5EKurVq61G7NxMvZiehPvaJPVePpk6rCH9DB",
  "key24": "5sV8kr4L8CPqEkXFMNt1BBvvvcpk7MSWWdCWabSjS8fxX8dKQRkLzXYyKS9tabkEwGTUiMkJBDEXdymhZTJgFZmt",
  "key25": "3ySxpnUXxMmKbkbNC6Kiig6QA72KmLfcfGDvdgUk6jVXFvA2SbLzbiL6q1ueZ49RYssjZExWJp4hGDHY5KLQz6zH",
  "key26": "3TQmEeXaD9vq6jA5kNp7zaVksRjBJipjtaGjxgtKgLUZxwDX1RQUK41P47amFCsGxrkanKFWuovHEyGh2a7QroA4",
  "key27": "5CXMmjSJZ7vFvwZZ6zDdpeAisp6Qk6HVjmdXryJvC7WkahrHY8wwzCpEqM3WKyHwZDZ99pBcwTeZYfxaX87tMZgC",
  "key28": "4B5HyqbSDXazZC9Pe3JbAunZ2AVp6L83UHGqBydF7ZRXiBneKgjirXDeuqx1VD3mPPYCN4ahYS7sfvDSXe6m6zJ5",
  "key29": "5j37j1q6mMWjaPS8dRniHXoVoDgDLpKEFMSJkmD63dqjgg2R7NxLcZDkgCaawmS2JWGVqmkm27fuMLtMjGgdPzxC",
  "key30": "5XdKA9QpAyfmaFqfmXS9sp48RziCWNWfkK7hhLBdmquZstk4QHDn9ieV1oCzXyCFX8x5oSG8WyqWtP5X6LD3Uoh6",
  "key31": "4hqMVMW3z7nBZik84zduHtLctWnjXbaKqoEX3yrJYagAfrRRrzrGpLSPwDhEGWaeqsAyNc4PieUapWLW1bhryu63",
  "key32": "4nqpZXwDZptyMUQpCyo4N7GMMsRCrEWTeGaCyh5shL8oxjfUqC3k6Y2fss7rBArZky7PupfxLou7vUVLYpMeYH1e",
  "key33": "3SBxZKcnuRevAepJzpA8ptYNyPM21uaJRxtsDzoBZWD3QbtTVYJHoimxUuCxGhNXUwcPJzRRSGMBuoEwUS69tshU",
  "key34": "3dbMVx4AeBTkiPfWrdtQXU5Vstt7zY6HyvEfkRKKYUdzM3GZ6YLqTXhHL16dM6Tpd7JR1kzYLTbN2K2QvphookSz",
  "key35": "2hSLVcZC3oVGaxpfYGctVqDyqgphGmFZNKTbpQV7mwWSjg5huy2tvEJKvBkvmMdqqjKMPZAQePnENTbGwgkT8HEA",
  "key36": "36h8vnu6AF18uNMkTr2RKo5WXsE9xmxeLQZRzrJnSL31C7qGa46NXqKgA9f3VKVtswj9pmFjVsZynvpMcYL9Fv9R",
  "key37": "axmyvUquHyuf7YPKvtB3AT2bzghtocoZaHkuYzQZ6RQLYAj6BUWP4uc2g5ZpbLNkjniW3LQ8CSCSJP9ntDFDSzj",
  "key38": "58WsaTs8F7MUSgTGHafRQkazgC8ZC8mnem85W4eJgUe5PhxFMkJg2WedjkqcL1ftbM8yJM3x1zgihBuoPj9Q7DaX"
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
