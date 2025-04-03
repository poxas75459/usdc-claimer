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
    "2jJrdywRDqBZrheFmCcorhZP4XZkJ3YVyESHcuGkyUUG4uLC9LByo31ZDiymCZH6WhMxATYZYQDgM4GLuwN4tZMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y5FaHwg5NmGjJEaAjzZDXQktUpn23gwKs1Y8RGSFXZg2kQf8CvSgUHn6RnddSFPfivMMaBNWXMuvogoGBFq6Bvb",
  "key1": "5tRShFNwUiK5RjTuTdGoKLucgii5qk4FkpHGNh4e4FaqxZHMsvziUx57HYVZoZXxEKa5QiM6zcy5GTiZhqUxETt1",
  "key2": "149MKU5kPtqE1J5ymZjC9A2AbQYJovYTRvFatg317RPY5huas3ofEBR7MvXpbbjBh38doJHVBQfTBEQywqXG3Sp",
  "key3": "cBUo7rAScSPQHdrPeiwcGjr8cYZexWZjWx9CttWaJdYS7rY17v8atm9G3ha2oy9E42DwQSLJyPcemhDvK2oRyyW",
  "key4": "2qqq5SXZM5iw8AjzrtfAy5SYhexZJ3hqHaBWuj8RS93JDs3Zr2pgDzDLZfxb2X2Phdhm8mqRZzn2WBVd7bV6qR9x",
  "key5": "2dR6Xxr9Gi398g7todpEG5uQFY9xdYcT3CnfDP5EvomHDE8NhrLH5FjanjnQQ6yynAbHx9ERj7yNUAhKQaNHYKqU",
  "key6": "2cwhdAT2AqAWtCa7ytLJDH7nxLjBgLmDWBu1UYVU7kFaLHZL5rhn2o3iPommxtzXa2XxBkD23yBmZokeDQRTYeMZ",
  "key7": "4Yet8vCcnBBxUv3krg8vy2RYP3hcdLQWmFgHDUgFDipBT2wXAzF6hHDA2AWS3SM5zu5pzhYtoSWLxyRyuW2n7XSU",
  "key8": "2VM9CjQgA7k8zjT6ZygqZm1ChcujF4vnqsXFmRBy86iUFWwqHaLtKrQHNaM3w9XJi1XZABrisSrqtBBuq8kJtebi",
  "key9": "5dN4pNMqM2ibudzVbgq8824DkyeBxxymjzWYVoyuxk4Q9pMdaNYSdBHsd9duiGHp7sFV3dvZ7LjLFDUFXNvdWDmc",
  "key10": "5mAc1YAVxrT8A3Vr6ymhZgM4YGuZVRQamiPQE3nk77Fk8Rwbq4U2z1toTUVuJGpbBUJMDcrB9kv7qRDDF4PYskgS",
  "key11": "3cQyQVyVZNJ3Uy22AMo1uHc6QDPs9JKLTwtY654xYbEubarwW7RfGm9Ty23k7YNByNLaFHTRucZdk4tTy115b4Fe",
  "key12": "2c6xWiUWNdinTjL94eojAKEhEGHbgsZDmMaagW6ov9sEE1QFTajnU7D1QR3y8GgG6xR12p6PkzVjGFZxQAXpjrWT",
  "key13": "4Vcna4Jp2mmHCEVdgqAgNDZHZNYTKj5Rh9mKfuTGV1THEm1CTNhYxViVdcNAcX91j7xpbTBEybBfEdGJJFhZU6j",
  "key14": "3jjXinF5GdNQ8TfHFUvJESq5vnqBpjDxfJiD2CK6fESda6LAKWbr7HtUbazQaDqAiqHNWk1rGc2X1SDFVAebHwMN",
  "key15": "4zi5DxXw3ncXemBjMJSMsFtuutEr97PAMC6J8kCPenq8aKrF6xTd6EUYZXEFcify3aEMpwFmEfwL2HdVRBkvufEQ",
  "key16": "SvLKVfmxgMkhTPmoQLTnUVzbBHegaJt5fUgznAXE4nPC4P6LQEPPoVRLtz3te17tTJaUQG4BX7QcN2cv43aqJcN",
  "key17": "3g33rTTQjk9ER3joTk6Rf5GiofBTuitw64vFMxyoCMWmLqAjF4PiXfPxWsGdTaqbSUfkimTeHR4LSSJxSPy4Ri9S",
  "key18": "cNvxKmrZvHwnBQfVS5tHJhuzVkaidhJAb6yGWWNRiFmwAz3WopvJpULACcgZPvCTr24PFwujx3WB4tpxxPxAQp5",
  "key19": "6x6zz5qqN5281xezVWbTqpGguSX4cwgUxqiuYMnWfazDJ4afZDYtKmq9DVhSTmXTecD3PtWavwy9n8ySeFf3M4E",
  "key20": "43R9qNoeo5Kkd4Pm2KCDc7cyJa63PdmvQqH93VTWEe3SxykKwnQv6z3Xps4KPvZVuEgbmsP3ZaoMRW8hJzFT876K",
  "key21": "4qvWwKXgiKmPaAGaA1y5hHcCmqbvNnHFqntYfLz6hqnBnMgki5Te8j8yLUpWFrqwqDvSWe5VC3siopG8m1bB5Mdo",
  "key22": "5QMtZzxWyK6omo8jQPKbu4h1BJpWMh4x9gxNAPAQbXqqMbpLbzsn9yg89fArN3cLZgybmqxojUpsQpSngd64wwAJ",
  "key23": "5NBVqbbPE4xfjUpgWmJSpoDgGPciATHiSh3X6NicYtEkdBagsM7vcWjLqqzd8xdjfdFiian9AkCzMgbMEK3PB97U",
  "key24": "5RSy1aXqQnJLsJP5Hf5nWcii37c3QyT5m7GcRFCkDp8gGkeqCr1Sy4EQQr1CkL8hS3JcT1Zsey2QttwB4keGm7Nj",
  "key25": "2JrzcZu7cQuCa5ba4irR6mH7opNaJAHYENAFT21PXfid1BMycP4jHYZMFmJquZWetzoQX1iChikBFpTygegEzieU",
  "key26": "3UNiMv5szCMz2HKHwJbCSpheeNNDHTiede8gHxofitY14Xjsg9qotMFhtzbQuTevzj8JK9z7WfTo5j5NpYURY2Zb",
  "key27": "gNK5bpYzrmWi8bWkmy3YFXPmu3ght4z55Sa1gqsF4vvBXj7FLvjmAu62PjTgepVVQ6HpuxTn2RCpNSi2iX2Esdz",
  "key28": "5hnpeN19zUH59rZYN7PuwdKaUFpATc49YcEnRuMPt54C7FaFHEpa3hJgmpRMDyrz3inn8J4EgMeK3i3Qb1jWqy6z",
  "key29": "XEWmnnzccz8FF6iqK6S5ohfSVCViRBATAPXwCizjV4KUgDYaz7Gid1dkaigos7rEDDzXrvaVhpPppWdPa8hi5qW",
  "key30": "34mTXtic8SMtga5MHDYnBnH3EbMo2Lzf5Pom5BdJtg7niZzXx29xiBvxLKUuUeUfXc86aouL7cLJqTcm9bvEAGyi",
  "key31": "shvtLzXiVwXpW9sfzjiQaTnxmLF7hyuxN5MEbL9bYqnvwKxZnUBh6bhj2AaQq67aRSSGqPFcscDxUFh3fANLH4k",
  "key32": "5XyzhHyvRVFuiw2tGLUHyxr3VrKcRJwpAygxT3kXAt7SiExyva5gMPBqJ9sdYFdzwSNNhzAFJgDtoDb24mJ1TseU",
  "key33": "3aGDhbkuuk93Fc6sjikGS7gq7X7TDtfsokKTxRmHt7QQkH4sb4YaBoa3fqS38opPnkTdkBE82xA3Piqv9LcwYg2K",
  "key34": "YXD9A6FbDZCWKw1Z1K2jDdK5aBEEmXQMB8veMYCpb1eoe2G7uD1nWJsg1SX3MBcukE9Cvhy3n4LrifHj54hjUBT",
  "key35": "z6PSFKgP56u6qir7eubrBNaQqsD4d5AXTWTkKuZGPhN7cgaxStUp57HuG1eNow2GL3bSP1qQaESnDdLQbvjxFPm",
  "key36": "2CGy66Mjr8VfiU16CFrLwdi66S9fy3Nmvd8pM9QC9Rbjyz27Ki3nWAz5AxhXnw4SqXNCy5TGtqkQqLKgYwyfSyGb",
  "key37": "RrFpsjhyJVZaCKsAdWzbjVEsRSsRRAJv7xuUVtzKt9HK3tKbxNnGXmYdTHnuCMo8QWwQVfxNhB7ZopUy7q6twGR",
  "key38": "2CSTvbwo6q4RsKnExy7iDNVxC6QPc5uHLL7niF2mtdXctNDR3jXjpUqbkjEwJ7L3NUneRVFQFjxsbifFDnxpUsxp",
  "key39": "2StUZnnPBRFuLdXaMR5hHjrFdcMUNQEr4hQLPhvMGQBRz1beYi2AxY1Xv9cfSNzFUoHMpNToDs6ocNuvDAuq1wBu",
  "key40": "5u7mnnbrMM4Rm5676BWQGvPjTiRCdsgftc44Xg9Evp6zF9bqRrU2adGDV7XkBoHoM8LxYM6F46FhmicMtaKJ8aXi",
  "key41": "2Jp4rgfconJcfoFnAdv2gNFTCLNDkthdFqaPfMXanrXikfQYUyg2dvBhnBNywvTQVLYahNUFrLkeLobP8UTxnwEY",
  "key42": "4FJJPabXfwWECgi6q1V7VA5T9XvFeysh54q3qF9GJMNbyd8LXaNU14ZxaT83Uhcb56Y1BM5mF2PgwwjDK7J77s11",
  "key43": "qs5JCpakJEoQQexc4Np9LyihV9zbwcuHKLNu1WRQtt1UgLJ2ER3NHNTiyXMAmGxbonQkqRoNa6iFbDDa6hfYSiv"
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
