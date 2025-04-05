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
    "2iJ9PYYN7SNo4moPquFcycJbWGRvnFHTL9ePvPbGFnQKzAVFtnUgJgfBpkgYPV3KeJHntvj2DWYt2iLbji1TxQF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5okhGsexKGxymfqhYHkKQ7yjSJtCKyoXMedPrkYEDkzuHfUWqbfT21v56oDicaRCLeJrXKsE8vZEqytDJftx6ydn",
  "key1": "2oPheLjXngaR3fapSz7BaWCjGN5VPV7fLDi5J4jcZYvT2gQVLm6nmdP95A6czh79N2QwV7dGEwWxrPaVffdiWoos",
  "key2": "4ySTdhfvY667DVdT1VoKLFykE7Dyngz8goXRJNViAVAfcty6TEuScUaoH2anRq8rfCm36TKVy9CtNJiUL41E84PK",
  "key3": "66FgLKTE7UmLfawfg8CWsoSxs7XmfuAwSozt2M24NtNsTdfNM6G5a21o8vE2k15T4Ex6hqMV9Kv5zPfo5vpnN9Rf",
  "key4": "4jYbxkwBXvv2nHrod6cXaWXz4FmGrQpmA4yGTfk3FZUYysnogHsjYmZYxgxT2hbDrTW7j8jjiasNndT8xYPFgoo6",
  "key5": "5QnKAYc1mfZ3qZhQyyQSuGtA9AJkAgD7i7E7v8ja7iHCtJwzfaXcfBejsdm8w6jipXRdmjMuMCsDoiGmuxNQmYU7",
  "key6": "2NJMUmKGEXrpDr6Je6Psy4iJ5f7qyEJVsCn27gYYe4cGFqiqN4jF4SToJ2mZn5fwEsjMkufPCuMoDvZ6Tfs4HMaf",
  "key7": "hk36HofzhCFixpN1ak461P7fPC5GWXjBFqqruez55jLugfxy1WLmYsE9PqZxeummqwTDYbRYEbi3MVyHHkbp35a",
  "key8": "wihLBvRxVhREAiMFuswxjzMyjwAHuefqxYpiE6xP3oZofMQ5pZsfRbyKmHTQiTwgatbB4BBdF7anCgqF2gGquNn",
  "key9": "5GwX2YkabrFBqw5CPF3x2qSDBdiskvSTZWhHrMwNk616Lzxtz6WH6iMyZZCtqMY2GjywWAq32AuR8ALe7QfndKue",
  "key10": "2m2W1PDy5y7a9JffJJzQnxPjhhPpVtc4mTEyVSJuwerQTX1Cj6QVmsRituuGms2LXtsDg4DDQUdDY5hotRh1o3uB",
  "key11": "2D1f34wK8uFnwC2htBd2w1FwbUDsfNZXSNe5Vyfw2aYBjd2Agv9tsoSHCDWGxcTn3irD1HqcpvQjbvvHhJPJqs2Q",
  "key12": "55fbWtwxw5FqfczidS1kpKyKhqiW1SEuDAUGR87ZoC97K8kwKCVWsqNYJSPwiwMo6phAbhrxk6kpwbwFJQmJ84fg",
  "key13": "2fcNgfAnwM6qcLueN7DdM8QMTcQDwjvrvm83jGeAt53U4YvZv3mEGDoe7Py8FjYmkHGDvc4H5m5Qdywmd8xwLMCA",
  "key14": "29LxhZ4dk9BLiSAynMjRPWQmJMmecD7omLzQf42C33wWQnXpa8FQiasiapHvQy87KdZx5vqgVPXAvKvUvuGoDjLq",
  "key15": "dgtByku57FW5fetDbnLURMyubAYnbQMxSD2L4umvFCZtpf74PzCPra3Je3Zdbi31o3gDWWfPYjjSnZfBt23JJtC",
  "key16": "3rHZHiPovhSdHyvFsqR51SKWTEfiZuFT4byHJzwrKcoJAesppmbBhcZMYV1G5wEunMSeSrcSWjSYK36awSEPBmGK",
  "key17": "5Yf4SaBbbS5Xcu9hVBuaTE1q8zpxQMaNmtSHKc8k8EaXsFPYrsHYQ4XgcnheCgC8oGm9MMfR75CohNzH2E9AwfbY",
  "key18": "5YykuH3FEqqMjd4s8GjRTNWpdh33dxg9eE6PDifHAtihwZKQoentH4XBczUxv3fW4Y4bSQgV6wXtKrBffcDQv6zT",
  "key19": "AXg9ssyf5ijh6mEcTArA6a6CChZvGU7X4eb64kXQhP3Br3vdtXuLUx6TyYKd2Vg2NVMna9TuWvLt61njA8LStM4",
  "key20": "2qm4HMBiGAvxuVNTKuaRE5qMsNhpjygVgPeUguy41K9qrHbNJk1awww64gGKdmL7evnJBwpD1WbDESNnbMeqa8W9",
  "key21": "4FRPV63Fc9Z6ZM5kjzvGo4uZGYtj1WW6EgsJTj8hFxBTipkUFDCQKYD8684SaqZTnKwuCSuLoKGGQte3jyv5s7Fh",
  "key22": "24tDvExZmY4JSYgApQmYoeUabDyJ6RQHsXnYcyEuhjzm3rBiMDGGMqabmgTnAFLLzwTYrWYdLS62hkbpeVmHZqPC",
  "key23": "2nakftNFy6noKFeQMS4A8jKo2UrcgsyJtMxBDgAM2WoqQWd9kM1YXUrBFvEKUbVW6suPdMf1bGfH3WtNzDPyGzif",
  "key24": "4qmVV6rth1hQ4kstf57UeXBZULWVR8RLeTmbmfafgQngbFfn14aWnjUUEvJ7aq1v8nbFNHUzeMfLroE7PmKNw5D2",
  "key25": "2BrEcuUVRuHvvhnLf9sYbTaXur8TJpYA76i5MJS9FVFt6y7r4cJt2o62iNZgYB6ZggcNF9692hT8T8YtztmbpRxj",
  "key26": "5a3xFYq6mmMLXcTfMW9vJmtGxhevSEKL6xio4xfHFXm2DBH1Zg3JSfrFnRxjEcJf4xAR1Yt1adYt322uL5AomnGU",
  "key27": "tNRXaZQxSVoUAdjvS2BrsNXy8qmtTV4N7qdTWLHKG8rx2btTwQT7Wpe5cJ3eSXRCX35fb2Qa7vZMhU7e6bbEADw",
  "key28": "2GrS9UWgtmkVmvjPKBVeV2BfzBcqiQE89Mr5fokWA6o28yahCjT78Gc32aBX81RVyz97ud75v3xoL4PYQVQ8T5qE",
  "key29": "4kv2kEm9PCBhLRbbLwwStnVTmMhZnwA5HcrhpwWwfSGbk8VWX6bhtzZBno3bEitLCLW7iHBGsch91KM9VU5aC1eE",
  "key30": "5MvcyTf1WXhzMa1xwRg5XuXeyrCD5GChGKNHuNSPuMHHBsLur6UyvPEtrGme3tDBUkGhA5oRaP9BDJXWpTQmd9hX",
  "key31": "5VbqBidxHDyfeCpUcrDsQxFUmWL462VGgiddSKY3ESA7jYfYEWq8vXngo2cm4eATRkDEjnDaQ3jJXu1gnpDR35Qy",
  "key32": "5dJTRoEHiEGuJfnwR7jqYYtqgCD2HyB7osS2ymdXmBjxXuVCg2RmQ5bPm5Mz5uLamXvGHEDgLUaWiETL1Gscz5Rs",
  "key33": "5bNkznzxVpdAQyfSYo25yRWDsVz6jgH51C9kgHyLYMe3JR3j5mxkXGYL7fQNfKTqi8NoQBpvgvhfPkckpT58SjHC",
  "key34": "345JsxKB6iVnniDEaJ71WjFH8k7g9PTpYUuwew5opGkaqEvQzrzU7ivUJvVYc8f62eLR44GWxgFkaAGPXPHEq2Mm",
  "key35": "4wiEUm8Rhwq6C2pB5yX1WYW6H6YKGpPAiQN6BMVDEK4tUQmdUyXM1DCxuPuyVAkT6GUm8PKdzPJCDdcd6Wu18eqi",
  "key36": "3UgDANQ19fa5beqXpkiY9U8tGin81dD7cfvinkVVDT3mqvFpLwypKjGWo5fe5xJ2Ht3tvnKCCK5WprzN4RJUsQN3",
  "key37": "42MdDa93RFur7uPCQfAnv9LvwoPcmjD9mja86dM7FFMkwjgofdSYExek96DUaFCdzjsZXNHMCgBZNx4Gbb11gnGu",
  "key38": "2pxomkcBPLUpevVJ5n6kSnp11ydUxG4LmqyaPApQPxqQoDCNq2FhqzyrbaiyKnuPueu9wxQ57gqf7ezgBBHVBLsR",
  "key39": "JPEgEkAUz8YHG1bTwkGoeKHQvqvwhovvzdfUZAV2CCj2rrENRLs4g1hgEx4eBsDUZQsDLx3xKUNsXFdP6XmEoTK"
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
