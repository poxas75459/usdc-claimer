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
    "2f2QvLcRubXHU1wsmYJu7kZAByrHP5ujcJAaw4zkKPnnBww7bGGi7LGor4wJXyszPNvnyWbzftnU5s9hP5i63xFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "364qFVdhVPieFEBoiF7vKygYxZ2JU34ztEdmu7h7CaKdXxDAY4dB3eWQrzot3LMCNQL29TzRaWez84XxfHiXMCaF",
  "key1": "279iWrhoFr73LoTW15HMc2rsgXGZ84qqz88cRrRb3gDnYbgvM4G4nUqcZywMJvuYtN1A4cLT2rGBBpCZ5u8LPB7V",
  "key2": "2AZGbpqFMXXzW2ftwHJTEGdiRZQgvwtmPkMQxJEpLrk1RJNJGmFAs6a8v25cbXFXWNsXCXFdEMQbX6VM9yZAf3EF",
  "key3": "4daApGUEXSpf1npfnbrjt6VMSEa81o5tdbP84YQCU9Z7EXdHwPrAKhCmJtU59jdQHasE55jCzoEqbmPEDTXZtqD1",
  "key4": "4pc8LkCse8qKmhfPQ7xu3d4VecSXny7Nobkcj7UTp6QdmtpMpogMV9D98TZ855sFsGY6asasi4r2TBsYLKKeBvwG",
  "key5": "2SR2ajdBBfF6CN2AwBYyhwDgzEmW3cdX2S8bjB1etBWBmSEYKgXa9KRh3jjBdXngGbH8pxtK4Xzk4HnwW1XWXJso",
  "key6": "2pi7uvJuMfvMKqaA6kqcaTrTEXeGLseTwbhnuhbRKw2or1sU3CeC83VRqQnzsrGrcUrL76bopnNchNUqAzFYH8cw",
  "key7": "YguuQ2QcNQcx1gWvfm6NCAUdqLxZSdUvEbikBL5PyUq65ztgRzgRapLVFGpMLQXQQmrJJxjx2Zjs1EX3W9ne2H9",
  "key8": "527b32YdmHUKsJhHcio9hXtpEL7k4hoHczuFdyF34JosWCyzfwaM7N1m634E8oV8oHRqoS9j2u71eHc6f9vFPwXi",
  "key9": "4HDoTQnCEboKamhNUSuSUMdf5EZ775271j2f5q3EJ1sU3hdMRetLBQjq94TcLmszkYEZFZFFBGoUsZNAHXT5XFFP",
  "key10": "4bnKohPsmWuhbYmzv6QeuSGL15smhJLSEPjpKz18W3bePS5LAQ75qiuaBxvRPDXmtosYZbyf31GxsqcQ3CQ1m5k5",
  "key11": "8mhxDneZr9W148QgRwhakYX5er4GNP3bfsmCA5fVqSts83mQeWf1JwbMNBP6myk254uTRDoPZtrSENTJnAKki7o",
  "key12": "mKZo9VsDXKNDUo4CvXvaiATTR2SFSbTKuT9EE99ttMRiqgAbo4STz75gjvwr3zbEJnBGwHVf94xgPRDA2fVaKif",
  "key13": "4LsAPVTfb6E1YVbFPfu9wbrt7CZc3Qd9YXrmE5RRRYYci6RuyPNMN5DVccnn393rZ9kjGSBX3GrZ5CV9vaCS6VU8",
  "key14": "4uueXC7GqZhq94notU6QYzREgLVH4nngKx7wTpH8PpQwkjwJvMbgCcXDWy5cHZML4BsEVuwAAQemvyXZRHLraKrU",
  "key15": "4WamGEnawcKKuWzJRCfHvABij5AMrjh4TZU1cT4CmBTZsp7nyHhefytK4AbUihztKjAY3jmPNGf6sAUHF7VEx87R",
  "key16": "4q1Jy72ys5BnqM1JxiFxhn5o4bwNcNaxrQbud4NtCXUQRKwJr1R25Qv91br66ZMoq5xb2xeNDgrccsmoPZg6gJ9e",
  "key17": "4Cyev7xNMewu5CcTyHXcc8NY18ZkEZ7uT8A7C9WcEdJ5fKVvsfWyDAxmcoYGREmSY76QT8HvFzX8FUi89r3qXECU",
  "key18": "4ecsZkQeviD6Hmd5D2eyq3sAdPv5eLwATXm2y8dn9Vaiyo7V3FqvyiVaMD9G9Yk8usJEC51TUZswKniQ6aXDAuvY",
  "key19": "3PdoAsvRnaUxnVkt9eusRTJ1eSiuPE6C8hbCskJ9pZMYYYgFaxKt6RUdU3y71Brws3powZ1sdzcsDejd8LWTMwec",
  "key20": "KU8R4FkJwCgiRnkJXsN7sKwiYjYxkDMAp9APUepNf7EtteoqoFZ5ozdfmxdAEztwYkzM2krAXLThNZP8c6KrYde",
  "key21": "3dgxNdi2zkjhkRD7M4y6xiHBo9LziAtS4Ln56KStww6MEqXsY7psLTv23QEtDkRVvF94TNdSmWWGnJJatvjeQQJp",
  "key22": "3QH3PQF9QuHC3V9GcTmxko9Vmk1EKMEZfS8hu2Ne6P2Hi1bcwtC3fRRM3AgrLqAVsonKaH4qE2hLfiLs6TN5HfXv",
  "key23": "3WSdM7jzsQ3wiyPpCbFu4Vqz3zNZhr7uLubrVoVcSmvWyND6cpQdzSwciqAmiEL7f9qVi6j7h1oG5u8HgEwpssbA",
  "key24": "2tXSJa7kvbcqXAS3Z8cfP5pYJuBMzdTukLq4J1nomnXAALbhtxbrBrnztqBWUka1DpMis7duKfN8JjMjayvKkgL3",
  "key25": "2b1ToteEEJKe9UMAeuHm1jBAS2TeHeJPSqF6iBGkDAPGC3LuCzDMg6a6CYmY171LZUGeNcvRT9rawEP2G73oBUeb",
  "key26": "5mdqK9Vi1zBAFB7JtjiVi4QNgHncimXateC4kRY8rqT8TDPeT9pjTnWgHQW6zbBKmcjuL2gaVwuo7R6fZKXCnfG",
  "key27": "28ReNMo4AXpEgwhAmhJ9Wnn8DF1nD2rZbapUwZ8ARcAspb6eLJ6AnrmL7JFXXait54G4oY4dJN9pfwvyhaCuo5tR",
  "key28": "5a1K55xVYXkZtyxRbMDieNQgADWajtHoLBQy9JC8gbpV9TkeygWWM9BaCqFZArHWnFmSSLDZkd34r6PZfJJAVJXh",
  "key29": "arbiiZBgawZz5zyyZhS6GBU1sRZjLS8aBcgv56kQ9fZuESDt57rCdd1SV94D2E5YEtu3YyzLziomkAKE9hCkmdD",
  "key30": "24T9S6XAPqk3LeVoor4Lke45kTvH82eLe4isbepScUFt5sZi5wztYz6efAWgxFxUokwaKz91p2zMfTg6Wd6o6wnD",
  "key31": "4uTEHX4RbiN4kxiuaXYJVLcz2YEUBjqAHsSbUrdGU7FHEhCGq4PDMWcmFwLFyx6x7jWQhQKRWG3maYwWTCC39b7Z",
  "key32": "4tBsm9j32bcKLDGFmML8MnDEgkFYYXy48ECDUSv8dxmQH7i8mzmpzYyndc3shM9RyHuqBw3w157PRsvNkN3ZPVRH",
  "key33": "3JTxxhzqVrbMeeT3z98rSDaYdmmLDdyZ2SAmbJKs29BHkCfKjKxsLBqR2CjV2yXVyp68Eb85R6Cs9cyEvSXJP17n",
  "key34": "j3q7XgbZqfy24HLD3BdddgBDXqZ3awxJqZFVddzNJz5o39T7v2gd4M1HBVGSSNmh6rsjy8HMA4AmEzNeoSv8HWH",
  "key35": "1DqSME62k1JqxqUF7zSiCfUkqsZ8RVk88NZTUdA4Ceiu76WwBQi8PAo3or2VUBuUG7xLiZtZ8pToJemr3hrqAXw",
  "key36": "2K8zTsb8mhxDRtcGts5PVRj6HgySArooeYZpfdHKtPeuzUHtsco1UM7Ch9Ec1p3tUTApvhuZWiXaVutAzdDj4hEg"
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
