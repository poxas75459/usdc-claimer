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
    "4JmxJKrJsuoAPBs1K1XBaV6k5diVgwUwxmJ7B7QodiSoyEACuRURuKNQXN4CQ7xwfEpEyq5byxXmJcMyZc72CcxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ytnDSZsKoo7PESdzLgTPtQqErLeHgNiDVhn6d4i7Nsvgnp7RhsDU6LcZLvuQhDaaFYiAsoKRzHpLX3zjcLE7RPQ",
  "key1": "2mwuRDB6cBo2JNwXwo64deA1U4iciCyc5iyRA2gKtuWH6NCX7pi96y8o71KiZfKRXrqEEdLbYgFPm82KJ49eZz3c",
  "key2": "3TSAffs1dT8kmVDidBrz25q3z5aGNsRhmp1nNszFobQgwAbp51UGb7McRXR5evJCif2qs9Eto9fNCxjgXfwTi2GR",
  "key3": "21REZJXsifEqwWrtHr1GBFrJhQ4rsotqUzjfdjByYRwegZLbSSZk1xBW1UM64yK22GDYVV3YPDN3k1Y8pC8xd8Yc",
  "key4": "4NZziYLyqp6xpdtE5vE3LwZRVnu5nNmgtoZtkP8L8QG28gok947MKoh6qxdHcwKNkKk9kmnDkc5KvoT226AfQ65E",
  "key5": "uWZPPzF5VZe4qgQcdwFkzVgGx4kXKabcoFn2eZHA3E6RNKVRhbGp2upAF8zXT3zL5pBPvQZctmfkRtuqKnc5ubT",
  "key6": "5AaeBcCTKGDCGThKyjLMakk7x6ydboFcT1J1BK9mHHMfHJ8xoc2o4ZTghVzasf8CKKFca7tDkRbJj2KCjYdL23Cu",
  "key7": "DP8DyKszUY7rrneNmoabwySJZxy5hL77YVrKoFmKVFx94uzTmzVXxtQrKd4DAqvEpWhnhSoz6Mgp14jDqzAzmHR",
  "key8": "3EUfhJG4nXAfSBo7x31m24AH5gt2uSK6R7Jeefa4DAtKQAhYZ2X9wdzLDD8jWLZjjmziPDAbciBcHSwNqQv9nbJs",
  "key9": "3XGk86vNDUtZff1hgACuCGgRa1hNottXsVjCF4cvCLmAmjc2BQjTGq121PiHMqAMLSYWpkdRi1MFas3HyUqmKsDP",
  "key10": "3hFpm96ALj5vmD7CjUwpJUk4pxKERDyjTREmpaSGsNaeEWnqicwpW9Gznzqrv5HX7M9oJhidTV9BS8cbbhC1Nk7f",
  "key11": "xepPaGXiMnFygdywLd7eKCdvAPkHtPypurxXZQrzuBimPkwgUBzTAAzjyNivZTMctcRaxwQoiUYAQa12yKTUxQB",
  "key12": "5WTUKcYm9GgrgRwztnbSNLuzMXLGPEkTm4W34HL4uZWGdcty48DpTVykU475R3tiaci2ysFBWXNNDt7K6dD4qAy9",
  "key13": "CxLfXFvQ5b3CKyGv1XZVZTrcTjJT72rnbUdDRuaHboG9hdh1ofFedSshwrVBJXWMyN19VTVV82HxwSGhimtML9N",
  "key14": "2B9kbQYxrAbaLB2e4aY6nZpVa531YQx8brRuJWd6JirWuykaTwPmJ9XdH5fYANZSamf2VQnvrRUzCDL7GQqhGgmU",
  "key15": "B8doq3sGfFbvNzPyaGno1csc9y5cyXhB9VrGKHa2dNCgGJuabG6AfHGqwFQ9fUZEybjHdwB7kWvHTPe1ZxVGHWm",
  "key16": "3YWYFGvKxwBFs1FPEEkbQicF495XthqSmdJkeNyEX4qDNf5RkqDfdzCFyQSdaD6QMVBESzP2HrxPwhNtasPJPDgn",
  "key17": "2coW1fU9wqoAixsMxG4diWHrMfUvUQHYeG1kUBwQpPLVA3LUU5uusyiWGJBtYfWd9TmAFXW4i5kD1JVjpnnjyxok",
  "key18": "4Qcn9dCybqQJtjotLoxEJbPHTv7EZrj2EVTkFZxJ27UWbCdvxZDZSmCQNxN9FkZLKbg5ANRiVHaSDDTkeV3YTYsb",
  "key19": "5EzCg1gVSky85jTX1z4vTF2kLADy296PHxMCNe75BJXqc1NdCSVXxcFBxr85dhiCutTkSb9eyP4KcAL6R83yiTb7",
  "key20": "39YPAQ71iuwMVoJYysmPeUE5tW7Qn2uwF4F1aECgsrpVzqHjousgWMAVmAsbHS8ZpmgqHBoYc7jhUevG4KUhwexy",
  "key21": "x1NWanL41G2PoA3TBmzF2YRSFqyJ5L17pdUYbBTdFNdNjhqZkepa2YtyqX4rt3qAduqpi7eQLDt8AwhPheQTuMg",
  "key22": "3NfJ8xXAt3Jxn5hUsX5mEqp6rcXAXH8UZSE9Bwm4aKq8sDHVyvycHnYLu8U8LwGmb7MY1cHuZHnW41PtLMcQMQr8",
  "key23": "2YHnAeHfS87cynEXt8F2cKMsB3EJkVuHmV6MbAtrfbXBKQczfYFCUDULAXnudpXzc7Vx3uj6fsiGtgw5AnZtAJfD",
  "key24": "4kVkpSHbw3ta9i6H43s1bQNvuSzWTQWNBB6YqUwvo9ae8rYxTQrP6W7NjZDuDE4evmSgtx4eALN8Lo6MwWQoZAAi",
  "key25": "517xhuawt6Bqke58yrU95scmxXmFG9YfVBt8acVQUqGMeaeaMhQuXrBTt3isX2i15GwaMSahpbEXVhEbGFUut6Nb",
  "key26": "4F5kbsqGC8JkZYC6qLze1TJM7fitkqqqct3F2rNpkjp1gAvFcJMqm6amAd4qUQfkFnLcCiwQAQHjffJ3WNacjZc7",
  "key27": "29qGG79sSpxfnoAuS8W8ApyLKdM3KA8aYX2YgdogooiLAU6edmxoBmwCkKRGH3NqDmGRndjZyd8WDzVjo3TP475K",
  "key28": "4aDbSLbu6VVCp6ppJhGRW24egu4uuKu5zCGc9XxCZMoEgcWzbbWBggoK6JVHRC32M6TedAwdLPCVpoSC1DaA3dHo",
  "key29": "3X5zjzVfvdjaFoz25168wsbDRvet2gFig5Q5fiL6328BaK63QoGetFXGmhv1zt9uAZvgi3LcLSwqPmsJuEao9ZzC",
  "key30": "271XBNV5pSp2royRsDVR8d6TRnTZLpoVSQw81G9UtUQ7EFa58ujadDsWtCbsC8dhu3WmWX5W3CyUBzBVJZcmC2qv",
  "key31": "4ozuEUFd7o2RPsdKVMvqLSHcmSMiZgxy8b1BW8Fzmrz58rY2Qf6hHBsXrEag4X1UQ2qrJr4gzGoAJgTopCi7ESLR",
  "key32": "5T1HMvk3fUAh6d6yYP3bwRd3e4HUd59oVvzEWGebaNCx6qQgVCcDxc9kWdrR6gWqpmEJsDb87FMfFpU3NZVPyshS",
  "key33": "5W8RtNCRxGpSPqyYdQTcqTnpvzoCcKQfFKGrmJH499J8k3fKfqcBhun4xpD1SopnjUPd5634CpN13mU6QuitJwkP",
  "key34": "4HRBQ2MwGi49xf3YgXnGCQ7A1was8kD71CCtKr4uq9PF6RYQeiZhPNKAYd6y6KRWRLSpffh8Q3g33LPg5F9XeHJb"
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
