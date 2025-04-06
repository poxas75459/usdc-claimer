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
    "EPi2uHDSyTQTfpghSyDgfe4wBjMyhPNpDhzS2RpXmW64yzRq4a8oD7RX1cVHRWRP8kaA5YHKNozgxwovd6SXt7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ipeNZXGNonsT2HoKbzaVApX4iAVLPPp7xqKcGb1mtrNPBUAezWE64mfwodoHEpgeLYK7kCbW52gp2Ptpu8AhFoq",
  "key1": "3zbE3ghVSpCdonhDSg9V5WavjNDQaMS9v9u2n94NhNjeXBZJ6WvcNMgUQPCeqeYGo7pYHZpuFELurRKwnVvmG8C7",
  "key2": "sc3r1QP8cVoqgaV34Eq7KPHS3sndZ8RvjEH7kBSNZsokfqjHf75A6v5oar511ZJrACeB9vaNQXEej7A8UrGUM9j",
  "key3": "R9kusVTm1tZz7krkNha8hg2h43sqDnUVU8xywVsq95PCke2RLC3MoKfpfSVAPFWasXgQFSfwJBCebNk2HA6BAea",
  "key4": "3Kyt9EMKbR4PkK7ncjredBiMhP2YZdzemE12nWYB6FNAKsWbUzaqRUZprZKbBC1yjzWs335Z7F7qGrLyTvvaSqNK",
  "key5": "4AFjox76TWFrrqCA5jxrdg4kgWCDB5HMFsN5iEMbmC7AR95gNPZYvqtCBf1L3aVRjoPPKFceDD4g27furQkX7Jqu",
  "key6": "Ft48Gz82ULsghVRbX2G7ncWQeCVWxJHjhsk6JueR62sq6t26LxRLxsCDzJy7BLVZDopDQkStXU85RgbFjGj2mdV",
  "key7": "vUjGR6ARLEjyduD2a65Maersir8sqJ1FD5KkZCKu9S2Qwbb1pj149dyiVMX3xDxWxHoq5ziKGyKxptRPdDD5zP5",
  "key8": "2TYpFgSiNvmcxJ5DFotscbLCUC2DTrRe7fdn6981WrrGfuC61h3mvQRdUTvb7kuYf9Ck87DYHj6TjymZyYADP3J2",
  "key9": "rNY66LXp7tbLgjxtTbBbW8UQWdz2LbJk6DyLxaRvednBxApVGuq6LAQbNpqtE4rgKfnHML5VTtetxq8zq7GPahQ",
  "key10": "54YgmKQ1cPFXEZ5kxArYgVsdbLr2AQCBWPfU2e7hWzn9umbGGB4Trqw6uDFjVFtYDoF3KWS5mMUd7JPmFM5W7DX3",
  "key11": "4H9XjGeBKtHzAVBseX3GVQ56nkWTLXVT5yP8quQmNRbxRKapPozrUiJKtYgLNoW1ekx1MDV94SaQN4rk5CABKBjE",
  "key12": "32YG7pJr8jS9hQutQKmd5A43cuLvPTdbC2bJTC7yD4CiQdwY9NtLaq7pSK7Gseohi8Tbcs9fBLALjyPrBadZjoEn",
  "key13": "23iCbuYDVm3BV1o1y2zfEStjdQmm3bwVSNgCXz31LicpfcGAX7CpqbLTT8Bxg5BDk28NGH43HbRXWdoAEcGThUjc",
  "key14": "2SMktwzrWDtUUfmModT78eYwqp4fb8dQUSCqVheoRNX5rjwdUZ4BhLk1MG7d7K3YNCfEBcM4nznmyuGaEfiCkJRs",
  "key15": "2u4qtFdTTgWXtQ5ugSThaTrByzrfGRMiKsVVU7DzvgJy6SPGLYEDTn8oSShwEUgi1c81G6QGtVmm9SK8XohKnykb",
  "key16": "WiESh9WNwLrBdVs3dWJNJ4zbCP8ST5pMQLQxt73NF4unDCb9nbrmVHqkELUTdsfJkZi12X1yftHU7CXnLyJ594F",
  "key17": "41XEpaqEmRbHDKTWT8VJSrfBRpSEpuecsNQaMD2GAWfWSgmfszPSA9EmNDdV46FfsLp5aBXcX1XPnwiLNopPj3yf",
  "key18": "dWdDE4wd5z52oBB5XZNhLMeKus7oKRtfdzXU5wDkdS2wy2RDG7yQrWjDKY5iKAEbm9jXWe6tN9uVRVTgb6iRZh6",
  "key19": "4pm4qpkoygVvKLR6jia9wMpr4hB68rsrXXQWcmRnScC21Efhs4MyaQTCswcVZhva4HLuXcmNRmyJqajEVh9q3B6b",
  "key20": "5TU6JY9n9VaSm7uhyFd1fdNZmWYjwFhgURNQLwhveUQdzQLGAcwDi3tHPajvGQ8ydBaM83cCpRjcSpLKbJtFLxS5",
  "key21": "5zNaaFrQSXCQz724eWx47AADy8VKWMKnuNQgyKR6nj8QGGMN5qJNXr3k9zBSRurXSbKG2zCvAgHGxiepT36xePfg",
  "key22": "4jfhWbH5q7Uq4GudLXxEGBkZ1rjgm8gSdCYtnNH9rE6DB68G18XMz2fChMaF2QLS2ABa1pgBnNd4srJUGwav85NL",
  "key23": "4TgB6Jt1dKT7tEnQGpBpaAaBSnyxsRdJ3CcS1uQn5FUYHFhhNDZLFjJUdG4vtFDQo4oShJMbwwBbDeSMXTKt5iV7",
  "key24": "5GZdTN9NnoAdkEsTPLnE2R9xdSwxRfswqzwjA7Zzi2TGhcWYV9Ga4oY3N5Sh55yDPEX7HsvE95dPWrG9iTRgyjXG",
  "key25": "2yu3PpLaxdZnpsYV1dezcDieic58a67Lz5G3tRZY1QLHcxtUGHvTKsq3kfuK81XavLHFaVZpPYFgQzKHBWK6cmzm",
  "key26": "2hX14PX7KaBb3ukVKGqfBPvVCGvwSJKANgaERwGnjdeLk7parquLSJhBsGJs2exdQJ3DeWwCMg67d89BgsnEqAHN",
  "key27": "24Ui1Y5EqwGeiYPrz1iegMyEM8tpyQE7UFTy8EJ1UxSkPb2BzXp8XVsE1eRWRgzJF9oYHYC7BjTuQUar4LHiNAtQ",
  "key28": "3pzX78oFmoDhvZjmNS3XjExi4s1pWRTZ8MEuyWdWTMaxYQPT4TdegwHDLZKnJkGSfrpZN2cbPukz6sbzqQ2zWsPw",
  "key29": "56MSvhzaaXFdnHWkzqFwV7PDw6vD5eow7bJczjYuCWdFMFKntJRj892BXgN7vxFyd1sMwf4H23PSqsSQiDH15JBA",
  "key30": "4PQANCpx9iiv5aWt7NT1WgG6G54wXEBrkPDhGf3uDFqEAX7gaBDze61ZZCnuAeYb4mfGLn447nznSEbSexzAieap",
  "key31": "2BBkXcXE8ydATpyH9oqDCg9jDRT1ZF9PZZo1BRzFwdbsHDivWhDABkRbdB3j933NtNrYPWz2Jj1HR4jBCkNPghnF"
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
