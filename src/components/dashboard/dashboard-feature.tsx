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
    "sVqEEQbd4FzoaQY2zbxkrL8LLbKJ8TZcJXBEf5k2iWThmF5xBbfFrHyFV9RgpiyN1sPBmpK5Md5MTgd1MiE8q5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g44fqskbyrcCHbE34EhFVwx38HGFRChm4XweK6k4PKSASrSrNyojbpLwsDMgQDkb62EhvZ8VxigcUkuiXeJKcS2",
  "key1": "4ehU43DH8KppXojczyfC5PKF4xk6SaPqZ37eJGkK582vLY3S5tGveVVYdRLo1JP8MRKYEdfG41XmNhoXVRXnfrYt",
  "key2": "KvA12dmwgWsjHadFgUoPJWdfE8QpeFHpnKibp4x9npHWwxETL4MxW7ZtLr5axzw7vWkh9k6vwkL2aVHTLxrgqFZ",
  "key3": "42qywAnD5cBbY74wSdne2ExhZEW7i46rwbUJLAnPRrqzLCWExchN7wqtePyaqbMJWBB7DNQrwNGJGLAT5y9E7hoP",
  "key4": "icVxTijJLPXsaxEL5EwwcmUwtmEWJWnyues6eR3pK4tXDgHwN291MDajr97PHL5RmnZcJgJGsEJgtggRF2DEaMA",
  "key5": "3bLUQX8LCKRuH4wX55kZ2BPv8eT4uGJkKuZoVG8Bhduxm1bSXuN1YHNRfpgh3kumCBg6PAtrKPPdX6fqujZpBYs9",
  "key6": "4g8aRNRipiJZ4pBwwCRdWpMiPjyogbETribxXD4MfUtUHwdJSWWYgGVaXvuUhHmRG4znN31dFCjYmpz4UaqH7vQY",
  "key7": "54bGxc7cosVFyxrJHxMxcZaYQfuPV5AWjZq2YFeGKMCGjnMxZoj9hndthFpJca1yLTzcA7qh429gjJ9VC65vjQcg",
  "key8": "4QbZt7vHZwxFscNwTiuzZGFHaf8xc8DHKcC7hGMy9QJhBvuwXHA4qbXw8kYeTpDApqcVmZAaYeqcKELBYGeg9Bjs",
  "key9": "HqzwDgkhQdL2DvNkqLSB4RRU66tNuD73Ytd29ys2a7YondnC2Eg5ZjW3TDG81m7WQK2e3HRD3kwHtUAGXo8DCyv",
  "key10": "2sqZ7GZ4aBU9v4k8VUd7Vwxq6Ti1Z1qy49X4o6FQ2FnsUbA4s5pwxeHUWB5mBBoPmYcFyChJybWWR5xSHaUPzL1j",
  "key11": "23QPekWWRSTLki9vYMpudMgEByZdf2jvaUUKiCJwsbjkzqaDQTAhH537umfizjNKoSaSN9eFP7KavHr6TAMD175L",
  "key12": "3bgQ9aTU7EYt8C4oQu3Dk6hdeZryLg5f9QAG1c3MAX8CTY5AeHZd1XCeeqGjr53MT8NQXFd5NRNQKGpMcV9z2at2",
  "key13": "59r7eUhzJseFR4QSWpLjtgBNRfKSYwPKnavDwvqaodA9SxiJ5NqXS6EzQBgzaYDWJf8uGxrLpVtqttr4VtThibGS",
  "key14": "4Gn4638RhcA7NsGAmF3e1tMCFQZbdww19QPAxwXFK8xe9QWqVwAeV2feepmj2R5XCy6ESeMzE44YhvZYVTV5WNS6",
  "key15": "4hXLZ79vUGnCpS7fNGkvib4fweAVk64fWxCeuj5GbQyXirsdTJFa61iP91T81LXvBwHt2bE9qAwXbPdjdTmDCHhP",
  "key16": "51i8L5PfeqTqpeY2dChjBTANNepJPMGeZe7S18mHbhUyvTXec6bzQrP5xzowVySyxxVnRc5if4Fc6tMMhKpRhPsR",
  "key17": "4oNr2ChLLcjgiqvcnEY9NqQgjFzFyo3vjqd7bfsjX8LMeEwbah8Rhk4pmuBZr6bePFmQnRcEqqb9Z3zyqR7BGeEh",
  "key18": "3bKmKFKTbpBatsMUg2nJ51972VAyM89SXwtg2t9oxiu3Roe75SmDqurHm2X79Z9uxkYP6SUWgvvDaWj4uQYzUjmK",
  "key19": "2tgyhnFztbuxHW6hcytiPWMTme4viVFNaf6FVh4Shc5wSwtHvNTHqnm4FaAXTruGf8r8zTpcxsmbJnP7aCBbgPJm",
  "key20": "3hJhWo7HA2mu3SdaEnmq8cTHXdJCUYv5ecpXSX4FtPvpN3HzWdLBiqB4YmYbntvSgQAhTKi6u4vZwRoPry8eoU6N",
  "key21": "5GhLyZqTaYqZERxrTAUK4Kh4Us8E6UZR94NPEs3izh6DWefV4hix8brQqL4sCpt7beqejyhZKb1Ti7EHPx3WKRnz",
  "key22": "5tRGGYzQr5vhhaX8TgPTFyM6hxRAnnhaE9ACS6yu5b34RfjgMUiC5CWF1RQuo3XvoP5gQre62Bw3zY6fJ2at5jpQ",
  "key23": "2etJ8AngTw3zbR2AtAcRX6xMtBrH5w6i5a6qwJxE8i491sMX4crL7YwXLULU3tgoGzCUkpULpGfUGJWtgyiF9CUv",
  "key24": "2CuieLiF9C6razByPT3EbqmHtM1v79aXvgMYJbVNWEn2BxwyDGxf9vMDBHMyCNSdnPBWkR6Z5fDaCkQWDhgzUx8a",
  "key25": "2xdB63KXvXDnhr6UQovP1A4yQYijWPSTDGXL5na3xMQmQPcFzyB33gdP9UAEtN1fvbDGErtUG1m9oeVNWRMsPQpz",
  "key26": "3YCheiWFUWYPxWNL9QNQPeH4CbmgkP3CgGJQSQVAGLP222SgE1WtogVopRDGtVmcd1oZuA7hJCoYRXrfuEbcAtpn",
  "key27": "35yaGFFHZoQjSDHQt3ZQxWmPW9v1v4EAjBKAhQ2vxa5LbKN1gBwCsqBV1HFxNqkiuEjBtfMJo3ukLxJQWXs2WMbA",
  "key28": "3KTuKms4WoaaghgiX5oQxPWAmG317xxmbqXMESgihW3MVYi2hoMdTi2xBWkScW5ihqPEc62CQdRJXFcNtBndPxrW",
  "key29": "2KsYjkdii4pRM7JJLt4sigyFydBmQQ5qZjok6Bj6VFY9yWEPE3gCUTEQS7n2DytP9DXekEVeuxh7eEkc5bem85DT",
  "key30": "7bWDRjpoQyMgh49RYPkRLE38X23SbwpXnZPzq2WU1ZURywfsoYKY5kXxvkSFoCYpouh3QpbFtnyC9mFupSura7v",
  "key31": "67cnXzQHN3PAUGgUtnB8Fga5dPZ1oeZxSJsubC7r3c7TSSkHD43gDt7T8gegRXvQgcEDBw2TJnKPAK2XciNQH6Dd",
  "key32": "5fFrbWtnfhAeFGDKZ2hxSXJmz8j3mJQCBox5jufjXmrjbLafYcBL9Xsqq6uwiBxDcYeNH7qfao72Gct1vMABSB3F",
  "key33": "5bMmudcuWTZE86R15GKWbJHfPYW8EVULYVkzY5zMzsZ1sM6j7P2zt9Rzsyo4bRnA9GBUHL6jZNX5CR11XrfJhdkC",
  "key34": "38F5d7awh2hqdyoRGQ7HM3rcSjsCHwCfR2RfaiEAJaoq7MzYnXnSUCfZmcgxAXAneNUVJYGZDRnqmLy7P6onxfWJ",
  "key35": "sucJw85jNLr7iUEBQ32oKPyr4NjxCWtwMdNnKt5FjpuQWec3tVMxdWzAET3TsvN9ceoktFuUwSHUqTu26TgDpdc",
  "key36": "5PzsqJJpCBGkR6HXcoepfr8zbZsb4Sm6wWCSZ2d1PNGjs6rjtc7JHAFAuzHX2qHMeJvD8bB4eHjGB8huz2F3jn6d",
  "key37": "2cToQ3Hu7RN2H5jTKceQyNkTNQUP3UqmPNfqdRmRR9mg3NEKEhVrUAXxkp6y7JL2MM16Lsk54DSyK5fpNiskQ5zk",
  "key38": "166pnE749r9S9FCPFCRjvCUNjRLTpFvUJ1pZsX3iEv7ef7HWqz3rWX8FgFE9uUHh2VyjXou6RXLjG9mQ6bzmoc3"
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
