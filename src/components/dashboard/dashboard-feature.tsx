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
    "5SKHpskDeMCf5miYiJnCwuv5tkM4oUYWGJLxYjui9A3ZyaUhmf91QjaeLgvBqqrdERjcc3Uj6A1sByeGUwtQB63r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6RdV92f2tdvtUx9G3nYzELL8HTV6eVsg3XNf6NcUmQNviFrSVkQSe3yydYmBBars6YLmQMvCgFcoJE761zqvpt",
  "key1": "2Upc9wyaK8guGsZBnPQWyNp8SvqYfRRt64XScGfYCAWy4XeR5q8oNg867hjRWcB2rQYBibhyxtxJsuPeimGUxnhM",
  "key2": "33WeiY8nMpDwtWftfYKy7LHPzWsG1rDKAi28DXgRNXKVLuSrfU8QX1XBauXPW8VDLN9QSLugpVhJJefTrM1tprxQ",
  "key3": "2Z5vSoR2R7XfNmCpGdLYT7kPRep6qz6F4XA4UsTxRB1JG1thzCAVKwSV2wnCFiLQuAcLZ8sjXBhHsAQ2PvKp4Scg",
  "key4": "2DbLPhjUAjuaNLTKTm9TZ1zdHqV9sCQmhEXXrqCPjtJk2NfuSQaxWD8Yp2aAudwkYdw1AAKm5UFqhYDKqYA2CJyt",
  "key5": "3qwA5gY8Vm5FhgQWxzCZEokTWwGJz9gn6358znyyb4AzNiappit7KLPmYLZd9mHRpa4LuRtsEE6LnUavDKfE36Kp",
  "key6": "4YmjCxr65E72tXjoHafHU9D8u4XuQJP7SxhixaoJSWRXSp6BGjSSJoYrBxP93Se8V9hhAQgT9mM3DH6QVtunFcDn",
  "key7": "5tdDmGezd6zf9gENGUusBCy1hGyMum8dfrXeAfAUGhyMvChdBEw6C4jt4itEPEVe9yFNXEPLPffLwCiMG3fZ6LuH",
  "key8": "3CkgigwBkUZGarhAAH8mWmBQB35veXzQCJbSDCyximVgJhPsnVpfPuC8ZaqaEozEW28Zox5RzhqZbVdEjFb426MG",
  "key9": "3K1nwkutWchy8DLpJtRTK6HMF8rEZtbMiENdvzfnP2wVGdPh262dHVP6FTgHVhF6CQ2oUTkpNeXB3bLvTSCovEc1",
  "key10": "3NbR23xPNeFyTbuurFdoLrWAphTn1ShTe1DmohoHYxZSgP26KSeE3iiht1vMvYGxEXCB2KXyeKw6Lnp89xRvX8Xe",
  "key11": "2T2tmm4R43RYgM2jS8RXfFxPacdWtXZJhgT3tj6z9joHSCDYmtnAaub9MSAgHEcVHdnCKBuLXo79oXxx6L5hBu8Y",
  "key12": "5myVxtEusUaQP2xzhA16GSufQSHLyY81TS5mXvJMFk1hSEjg15ZyyWT1ZVN4feQT6NPvjYEtDN1nnmv2CNCWCmLF",
  "key13": "3UWJUe9e23ch3JVvupSJtwPsUiKXdnaV9xFBQCBJPf1V5QTAW1NkEmemtEeTyfSk47zpJXTSFTMUvS3RZn3iFFeJ",
  "key14": "b5cNWg34xGU3HPUTBGCE8hPvnuE6tQGwFaCJdG4MnLuxKt31m2L6ZRwcW6zGuaa3SjGz2ne5wP4hA16TMaPUEvX",
  "key15": "3geK3DQMgUUNkn5dRzyBEgr56UvTFmor1KcX6hM33hxRwLXAy8mpXcDexZvo6JGdtkSRaUa841jtHtFQZXWgapT6",
  "key16": "5t7idzeHEW6hiETeQFmN3NKFekC1tQokDQdbk3JuPakVWw6HHk9z95sWuHjrJvioszudE1PknxtftmgK6jGNfa6Z",
  "key17": "2rXvmfpZSDuEEAyEx2hzEVRJqnfZ4FueHdBy36p4Vy6ZCTcrEZPCSVwdquucQxPs74iatZQJ5Jd8Mktyu4wobKyx",
  "key18": "2upLGpbTSvedTSarqWo9knSquxkGVBCM7q6GhghmVn3PMBBGRZkgPjuXBLXe35Ud2axv4S9bTtLdasunxhvZpsZW",
  "key19": "7X12X2UVxBqtPqYwidMPyKB2ZnxNP5RUkG39A9XSkuoBd3TTa86jGRtWDhpZvxXumYYaMFHqCu2NHKMkSh4BKrk",
  "key20": "5qsD9nv4pMkzKiZh6suCDCoPkKedhdScyZ6wHCzj3PsmcjCoTo2LUZ1rYJxjxrhqqeXV2k6uQJxi2giESNmbaCCi",
  "key21": "2b8fhjKSUJd867uzfZ9U7UFi9wKeFaKWpqJhZn1Ypd2dG236JFSA3MTq4gyWh8uT3Z1QoTFAQefSTPkbSr8pvCi6",
  "key22": "5z3EM7FTQH4PvAg2B2dFQfjs8mFq932xh8MQgPzGkyjSXfVgZBxm2RUVdGSomnW2B4XJ6MgGZHcGbUXgr23qcBff",
  "key23": "s3itU52rM5qG9ZQVH4ThRiiDLmdZB2ejDvFQ6spQjQCdv2fRiC8daPKNzjNkx5nb5w9Dh65GD3e2qMsRe9pPCaE",
  "key24": "42StCNcFjJhngDNf91dQpeVeJFC2HK7m9W6UvziYJdSTDM4R4e21Ag44SieSEnPnfCQHet2ujiepdcLzxVMRcrqa",
  "key25": "5K5LpvvACAreV3D2T5UUtq9NDpHPSeFsmo9fXNiksyYQbWrBgqy3a7MmAxSmMUqRV1Z9xcr8EEM5nKWBYy3YvohW",
  "key26": "22JdSomw68wBnTjupQVEVcyfxanLg2RpRdqrKhWC2MsxDsHo6qHa9KVUhoWap7sUQo4rmCqdYDahs68MkqcENkdR",
  "key27": "4CoqEBPUaCsMn3KKWirtp54hWugo98di7SoHz1TVWC3gHjBBYQuoVstS8eWroh5gHMC8kMgfXUXueegMX9vue8nu",
  "key28": "4uGszDNkvdsY8rcfMu6PpN8XbSsMwXYeL2RFwtN5gxtDax4JRJEo8syZ4hK6Hfggx7jRN189SpzZ8t6fJTeLZC59",
  "key29": "4UDyHxWnhBq8pnpCTPA7iirZB1d6dzv4vNnjkZSc36ifpqufjDwzGkYwjxvFBFeH5b6u11kvzjimwcHAVrmVFhX4",
  "key30": "RE3smjbZULhQEcYXYtK8aBhMeLs9X7RgFDtn7QFZJW7rT9wjyiBFnNaXw7KZS7xkQmMARuxAPdKNBsqgCJTTFeg",
  "key31": "gMALmkmkZEGEce2rp6nAxTyq9H9Jqi5mb87Butb5sTBcFTRumehYrRxJdwQdTnxVhsD9rKsQBNKWaQeWo9RyJeu",
  "key32": "5m26oTebheKFgS7izCghf7EzgteBWQFbGyoWWNgfTaDZwM3WF3NbNbPCjT41PErt6NEQLxLJA6CHPwdM2sC66Ybx",
  "key33": "hVLB3TTGbHhQsNHH9tAUNm2UVwCbh3NP5nk72pgokYwmxeGc7fKLoyqLs8EUGjgbzsbWURXYbnw5gRKNGYz3Gq2",
  "key34": "5Xcwe3KmaV45KreNPwx9oAccRNq3KsyCiuf6CS8DuTJU7vu8MpAqcxodB1Rbi3iVEvoKS1ZR6dTDeys7TE1enZAA",
  "key35": "5QecB9wdQatYpdcmNk8NrDC9ZtHaSJ5QX43w4FDZUCRztwaxntsdRxWBTEh1AckjvUuiu8F7cQiPgEZZ1sCkdEQ1",
  "key36": "5ccoioULnMALpDJ2YK97en6TfdhQHeauu6Q5buMZtm9sYn2WWHqiQt94GwWb8XBB7jVrtebhF5aJPFeifEdW4pZ2",
  "key37": "24FL8RakmtDV8a7PaU28t4QejZDRZAWQ6SsPESSk8Us8NXkTy3TveR7HVTbRmauvRChyH9aobWJwEhJ3n1WwUMKt",
  "key38": "ZvAvMUdyyzV4yxLVhRobujCxQpRK9vvz6YGokpB4ULxusmdY1GDtCpamWu7fv68aRPdVpbUhGQrw8jGKSSinBjs",
  "key39": "3oEAnoe5ZGayvYUAiSpgx36B42QCEuzq8bNrZCeCenWe2VxjxfimeNShSmd9fix1yapSfpXFwGJw6NzsQ2bH21Js",
  "key40": "2Ggbv6Sxp4u4U7zhB4fVcCRnuMkuqc7LUF2iY6LsKchDvahM1SyH9W5ACDK6QGuQdTWPW3ZZKyHpDwHvTzLCFJKJ"
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
