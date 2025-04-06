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
    "fEYuhFt4Cov4hPqADYQwhsDocbAXDpB6w3wxpAKK2Dg1PuuChDwKtWD1mEZqwQ5gJJMtczwsc1NKtr75vJfb8o2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YAcLnAssp2HLu5iKGiJWpzTBiJw6cNoBPUs4W9KswsrH33GJBkodu7tYiT7DiHhvTXD1HEo13hWFBq8WErkPwEe",
  "key1": "2cyjfcMSmXpa86ViQFUpSBwCNb76rtRkUPWXgndpcE8Pirnx4g33A1jhUR3ZUdD4svc7fnoSbc1UnFwUTfrUkkAG",
  "key2": "3Xyhw36PfaduqYHYBxW6EEoa52RBAoSPKgHARf9wSjhsHvRyiihL9qqo9DbU7cv6jv4XEuQMYGEYTsyC2GeNXhvB",
  "key3": "3zktEMWfLw5LrSvVDt3yNrbi5AtrmDkZHmVyeUhZiXADfcJ2HSnnUVTTjdLZiH3as3qXUwcivvELfCp1d2eGHDzU",
  "key4": "5bJsdSo1sWCDqTLVVahawbVWVTeJKKn4qSTJ9Sw869GwCNmTJ9UYZZBVBLXSc1Zo79mPjo4SpJ6i8YF9aGdr6Jmd",
  "key5": "5L2vy3hxq5XUPnTe9HeBUFXy8YMU8eim5safZVjcQRsKWibRg6GHzv6xeDcPHxXpcm68XXWiFywZCBvj8bEW5Lda",
  "key6": "2vsZU9yqW37nCCihMTEF9ETcMvfiPYTKnAGSihDhrCYNR8oPFcUaHectsTrHYwiKTcRySz34vNgw2RJiW3vTEJNT",
  "key7": "5puApfLgdYHFkoanrR1bWNiXdNUcwLvwQYkifr9Po4F76k3RfASNBV5wNvtwkqj2uiHUJUqoW7tkZSf81GfJcYaE",
  "key8": "4YdEgiasgx3wiBE2AnW374J4xVKZmjuSatJMyJkwXMLrorD9EYkWMhgy6MBCscrm8DzR4nK9TzjxyEyrpY7Y3MPr",
  "key9": "2KodXaHaTuNuwTtaq1UeM1VhhfaAFzCymXPBRypRvMnfRXo49A7JiH4jZZt4D3hkxk2w9XY6J2pGQDQ7r9cMLARt",
  "key10": "2RQdchpc41VECdLSysfamZzYHm1EeZ6eXmFDrg7nH28iRbjLYp1f7WvjF3UCasuBjFqpK4gFLgRvqzKXX3jhdcPP",
  "key11": "KMmfmATMjYKrU3JPCdtPWo44A2QeHk11Bj1yFnkNt522KDX3m2aWnNvuSc8xADjJm2ps6UiqzALLiHs34y1NtdH",
  "key12": "n7FpRd2AYwQ1oAdH2zG9QCmkKb3f8Nez7JeDMomajeZpUGRMAtsAgxGis6AraFmR6P7pXZLM7rw2oroLZdoN8UU",
  "key13": "5B3mjo2mXFwRW3gGf1jXk3Q2SMVSoYeXrWNZQV8eRGf6CUc9LEKauYhvxGUveRSE6krybC63CihF3JqSzV4oTX48",
  "key14": "25iWhHRJgGJ2EA6XbXNPX4A5A8hEeoUhJHUmFu2sbzABC97KpJ3vZoHWya4VZj6m5BBH72bNrS1n8FNocXYMtdiV",
  "key15": "3SM3Z2W1EuN68XxkvUcvyeR675XmnkV6R8KHbPgpctbm15N6WWuA1re9XveBSnrc3ikzTmEDY7JhnUUsKgBmwrLJ",
  "key16": "5h7QyyaQqgn5HiQfhGgmVBX8S79NPmjCXqwqd8hhzQc9qvXGZnQpWT2XMakZs17T9EXMm31oyo5dpLRMyUTjPKvR",
  "key17": "48Lmj7PBRGZbzjo8TwEAMRBS7RqknhdBKRNnxRfpQy7uAL11GpJp6Hi4syeaYEcdZuU5tjw3ig5QaB3UhofXp4B",
  "key18": "2aKFSJp6HBN5xvoTboJDCRKoBHCe5RZWSwQY4LSEztFL3PYuo88e44XSzAF2bS7TBctEqJubM5X7xoCfuciepZrq",
  "key19": "65c7Qo2ABKA55pxKoKWn8DDMVS12pHr1CbHHC4qxT5YufcsdGvNJpDPc6aGqM7qcVKfaruyUtVhi1am6395Suef4",
  "key20": "vWkEQ9AgtH5BDBqZeUukX85eSsjdskCBjtvoEaRbabbf7mbrA3bQU5oxxyNesYV7nr2vQbZEEwpfiz2P89deU26",
  "key21": "9S9aMnbfDhvvH4P4ZZGiyKnzxXJMDqBaYffqZtYMhHW9GgdxFJQUGzyz3qxRME3q8Rd4MndAf4yqAoisbYvrRRe",
  "key22": "5Lf3hWL4FZyLFxaURQuYJKxiQW5gx3bzsCUBpBz5yocVp4WdVhp2LG5DhBd2ER9nYuJxye5QT1uGEqugaodPpRLq",
  "key23": "54QVNcX5LrFKbD6BDf75GtFDA2dYTxEquzejdqzhAM51j6ui9Kw23T5DXSPzfwJwRqvQRMUQLZseycPVT11mreYi",
  "key24": "ZqNgjcciSsxo97APFQduLDRWaW7ahEi6hp1WzdmZFzhp2MLr1ueyy7sy2aU6bwRMgvoqs8Ff6f2apFgePxu7pab",
  "key25": "5vNBDsa9K2tFQGSVR9nsuVVQQqJbdDD7wEwBjUmL1CmJqyzs4dBcDTzNumYDQUzCuX7x9Dc5L5yrHLd6UHNAtHkf",
  "key26": "3u142VmRVuFUsFZkqV8MNNodGd7u8uv3Ymy8CRp32A3hUW26Pci63U9UBzz6MsYG4sDbJdx6zTzoxM8Luj5xgzwz",
  "key27": "63KS2Ud6r5HuQaXvDxgLi7N1ESn2U4ubE7VuqHa3QbXsA6BRChjguRHY7Az91EycVcVS3QoGkarCgbZRTSZmAG4q",
  "key28": "4u6wsM35CbhSZfU15QhFoA37WP7hcWPF7uaZrQkEdq41WxKrb7d3W44DDPCh2hb7pF32dVd6RPtzxiA7AneU61Nh"
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
