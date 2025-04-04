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
    "3FLD1R1uDP5iRX4pXM3ca3nsHeUQfMjHKzpiZ35qtqHq4EZHssA6SxzT4DULjKK1SMVrRNSPqXLS3q557La2ymob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zohDCfXnhYheSvBjkJyLcPfwNz2gd1yQWWaj6nY9GU72rjoitv9eTVtABG6B9N5SRxNZuCwks4ofDTBFN8ionyK",
  "key1": "3Axy3xREJnc6wVZLNV8DLHQn8ziMjPRyY4cLwEJspJpKavTzQWqJdSJ49xuZqRsvz6byVDuM4x7AxLD3cCTeghhq",
  "key2": "2bamzFWr9UDoH9FZvktgMdjV7mWBQHbEisxj69psQvYo9TBLu9jmrnzvDzP9JfLywKtBAYwRpZM86xtbfQgmiqVo",
  "key3": "txCq4teqRhrpAPCJffXaDfBSpDoBJZqpNdAja5CCrHcE3eXUyUFxvSJPFuHM4hcf4CJWdFPY7pPtMtoc5oVcdiz",
  "key4": "4P5dPRHJSPhXX9tWrLkJM6jUh4bwQv44xUUrYA8r8js4GQNSqsVDAFmsPCTAobnBPC6xMjR964uGsTJ2hZac7uzL",
  "key5": "5aWL7oYd9Fg1pGk5JkVfFzw2yFAu6Q6YpV8BwZBT2oUMufzdYmGEMs1VL81ccNproctjCHpMRDLi8Jbm1A6ZcDgZ",
  "key6": "vXANsnMFUKYFd9AS5PSWQJP71nT3QZkoQtoVwgR6nPVn35zFmY1nMw63iPR8YDyYuUrYXuK6bzdcdYwsCq6aC67",
  "key7": "zGQZsZ6jyYXk6sxpSmadwvmKQ2rGxuJCkd3EzdobXsqFGSDV4Lf56S6qAHFfVZBSVepAchcMuKo2hQw2yE1AbVx",
  "key8": "Zy7htVhTx8vjBsevoMyJQyccUouCAdKiK2YViE4ipeNvNtwqHmpQfKDCrECQE35LuD1Mp66HGgrRprMMHjA2pTD",
  "key9": "2TxztCM7UCkMtxXhkc9UbfNnieJKq2y56XUeHXazvu1g3NhRPwcuLoafYRPHvDHuytuVwidPAeVXkuNkLoq8kzWD",
  "key10": "5S6N8TwHQDswcyGXzruKDFbgPSzG9aajdgwwm2t1kqaMLa9y6KpjgNWa7tL1s5PTDNdvYKdWEJfFQEFU9eGncJWo",
  "key11": "2Naj5YPbk3zWhNF91T59M9TFkHr8hU3VsBiEPm7XrkqPsLw8JHbz4nRRAsbbT2VZP4tUL9jYsB8TZLZjrEYM1BjT",
  "key12": "4DFNnw5GUbYk8cxeuMTa89ZjtMCi45HpcH4pXyh6H9VtsJeDg9kEq5SnJg9kVFBwZc6HzqvmVLwvQCHpM6CTEFp7",
  "key13": "3KXr9rt8oy1shQUrVhuguLL7WCo1oxxC8dY5EtpkLJBMdhm3hL7ziPG5NNA4DwLA8AeJDjnXiqovyH1ehLoDrAo3",
  "key14": "28aX5E6h5nawco8YNPmqxRkHKFkDUsK6r5Vhnyxa4qFwCHEz7eDY2A45PnZgWMoQKzjTF5i5cpKqwpnt8gEjzfcq",
  "key15": "3FoQE4tRt6QAmu7UH4WVbBAmS8kgKWvr89Jvsv8kxzB7HXMWh7neDGZUT3Jub9KFDq7ZZaQXd4x3SoTXz7RaUknA",
  "key16": "5FpLyVu3RCuTBs4VHpNVDyqtx4h3Zi7vhEuz7fXsxFpTey6j1yD7Pc76VG53um12Hx4PgDdQ6Rq2jM7WNqdQUAGT",
  "key17": "58cqGLPeuuyiwXgtbFouA6cRJPLcU8nxkqG9R4kguDhSSFKB7RzrAYFRL1WvmhmaCL3a4TmnGnP5xdN5fvjepfux",
  "key18": "5QRqBj8JBSwki9uVasDfhwAo5WMJeJy1MNDmpD2cipV2qCQdF6dYZANgRxjZb1Gz1XjkHnH8vfadapAQYXubimrs",
  "key19": "aiFdYsfHSVc7nWD6VkpvC6pka4dnEhdkztCoBQd9j1Aep7kpYZwtvMdmQURMPDhL7aVeFnusBzDrJEiUo2GWbjd",
  "key20": "MnoA6zmsjznQU4BiqwnTDaSEu9yTFsfamiDdDzRdY7PxADWeRbNDHXbUNWiNdkcwH5ZRkFn3mJSJPFLyiUSqzA1",
  "key21": "3gmwfdYbRkRtYwffX2afB8nzFLsiYNy5aTCtFjgeugPWJKZUxEgqSzMhY7TBCCoxEftSajQFNhEBREwmLbgJoe3R",
  "key22": "5mrn6JDdHuFUGsK1JXdBMnS5kqhrZ4V9Hnc6xqZckVDHbzc38Ga2egH5xttCa5LiCaeRJdvMgSpH4mraUmtqRhr6",
  "key23": "VdSmJu4KHDuT5Bw3w8xVAa6ohhoSE87mTzdLzy1jetJeupLPN5VSFcASRATMFQrt629neW8YDTzGV2pEHvna5DS",
  "key24": "5eCFQY5YW9gekvkbowEdyNBxRb3N28rk4kiUchWQm3S7QFXUcLQ4Jk2tz7pJ6QVuZrx9tZZeUMz7mvFxTcVMokje",
  "key25": "3vUgJ1F7CuugmfeF2EVR7HtwKuGejynaYvwancgCVwdWqmqa9ZKuCVBv9NF5uKixUfwTNBCiTdQbY66Ktpnur71a",
  "key26": "3Bnaj1ixnBpyDLJGT9PdeQDymLU7GJz5desRqUnpBxJ67UhmfpaUcUrKwJmPYan8bMb2gqA82UEiMAhPgkG1UU2T",
  "key27": "pgFharAHSR2Pi6wTyx7r5TfoiFqTc9zf7qCHTYQUFnfeWMth7SkkHGcGt53HeJhnxG9ft3rU28BZLDX3Z6HFQgR",
  "key28": "42aNwvxAjviHZQaTcuDvhknHJGRz5xvh4Vidfp2GGjxU9TQtBK4ZZQJAhpCihRCm4rLddqEWBpftdULqxcbhpvkj",
  "key29": "2sbziThiffa4RDZy32Cn517SqgSnjfAGjULMgoboruit8xAJmp9KGyGQ3TZW3Rjg6vBG1fGiC2kuRwijPsLGTJD4",
  "key30": "5zTea1zniJ1vpQX45A6kGbgVvpNZRj8UcswaRviKmAyK5WaXcjUBUUbqiNq13GS7dWfzUCj3azuMV2wWqDP27KLq",
  "key31": "6CiCKL5ztXBhjCRuiB7MqEUQiMpivgkPx8vmVWz9whiemo4qrHUdJqr8i89feYVfFQTkHjvvXzM9HA98e3X44jA",
  "key32": "4wKkaQ3B5BpjC6LCzHmtP4Yk5Gbpfhr1dHCfZHDVk7VHFLa1NY6fhdntT2X2GRAeP3mxvyeYce3HcK6uQV2BTMXz"
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
