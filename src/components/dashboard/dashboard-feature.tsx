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
    "xGyJEig1BCP6pCxsRewJeKn5uqruKcfdqyRb3RpKB6tTPzdJDsrNvcsWaNdRAywYqDEXsYvX28iFoZfgFvtvfNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GWDtKMDv93BVyyz9x234xjBbWNMQeShYU2ze57zp4fWCFVpfNqnmZxYRfQmeSsE84mZJKdRXZKESAw5k9puaXab",
  "key1": "3UyKD2duZ84j8cLXCDzWgzdVQ316ErZTtUpxhLNnCp5W7cB1ZM1YSWHU7fmor5FfLfvXSgUo9zRUGGdmbHZMWrdj",
  "key2": "4U6rZ6vxezKQmxdJbKqSEjraCZtknzJbX4fdkFjUcdFciF5kVUFR5ZMKoqw1rWNf1gvhcvSZgg7GVkJSG4rmX5v9",
  "key3": "5untA1hviSXEN7krRXg3HYRmxDAu4TKLaJWkGNshNcBMXKKoLoVBBnLQ6JhaxerGvUzu9PQREjmTgjtZFLRZ28M",
  "key4": "heNriPdNzj1gLWZXgztnUeh2mRo46KehJ9uj2L82omxu4wtCHc6PxMGMnS4KHUmLSSWyoTHwAr6J9kE4Fo2fef2",
  "key5": "28WL4c3MgPXe2jqakFFchbXKBxM5fQZZhc5RXnZLnn84ruZaDoWEvLGMKPPfXAfEgJhxBkvgVL7VmVKTD6jmzi78",
  "key6": "2HnbvPrfsbxsTX9AEQXYnsH5eMr36oe4E8MYXJMK2ESktVuzvgCWyNYBSW3JbeWGyL4bYMLSLpnWkPi1SeM5YqS4",
  "key7": "zg4ierBsqRmwoB1d54ugrDQU9ZZD9jMdsbVy7oCoGcWgMSPWeoJ33t99y1yVL2xaWtpjdNeQgUmGLzUc1eNvUgM",
  "key8": "52QwfbHxVQaRkCRCwXD8RbKuadDd6SHHYyskGPeKxbvX42MyRs2ukHxGmRVK4YVnHGyRewmPNse5yBVUmdBaprn5",
  "key9": "BWoiZ9ncFGSfhrjWLrcZXwqWKErbcjyhDpKqM7gNJhun1eK8mT4xMMmZCJHtBnLibeYQwyPFuB5NLp7sHRNAuxj",
  "key10": "qxz3i9bYih9Dd6LheTCuV6rUMWc3MiNvNfq3PbsKk7SnHs5KoSgHQ7oKj8QkJfF7euNqEnfj887r9QfSwd8tyrf",
  "key11": "QXaWfD8WBKvagEZVUoQagS2DSQbuzuWtBk1cvyCTjRFjonEuroBeZnYQZumE1Xe4AFe4bXuDhuxGPzcBsUtbC5Q",
  "key12": "2BVQQxZBrq9arS8o23gCsYzTCQ22D37kb34WpEft8RUbyiDFaxg98uGYbGiVPCuVRfNSNxsMdbJGgAQ14LDjpEBh",
  "key13": "4SoH29cwsbCweeSRjfXS7oEArFEcHoY8dGi9xSmH9ge2a9Zuz9W1YdtT91u5UzvNtmGf2H1UkiL8Zkm96k3UxXtZ",
  "key14": "44pp8AiAZMokPAF5ToPL3u9aXwYPEa9mEkm9BXsuTMSUtGrVkDwRRN2W8zwsA8ryAasWt8C2sPa8BAW936uNypmp",
  "key15": "5tsvL6ppCLWw32HseraKLx34TbhtTrt1mfciyv5uEko7cAFp16YhvVckySYdn12qEpg3uJoLT1rT3ZWWzombjuiZ",
  "key16": "2RjQkDiEwXHTmjiZDFrtLPb9VsCxYDZmLtcwRrG1qWcexfCc7yMRRmjY2P4o4cpRMmrHpMNdWmTwPAJ9FYi1ePtw",
  "key17": "4RhWUbKUfm7PWMyxeZHDkhTbZfapGMSif8fxHksYDY3JuFeUQmL4SWAqG1w51AShYw5y3sCgcaXoAPTohTr95fyD",
  "key18": "37QFZQ228shpivfVvqYG9aDNCZ2Xhrgfek4pKSxT2ag3Xhr8oMJZTZ65LYA4hvHMtJ5hr8S4iE7xYJCKDL2zMaNh",
  "key19": "5YZKCfNn3wiAQKReR3xRxXKQ2eARR8h6sZcr3meUGUpf3kY6ZdkY1AA4ESkp4csqtgUoGUUovPxTeA2yFD9pzTx4",
  "key20": "t9QTKbxP7AojhanNh8ByveYRWuFbbXL3wNPWJuMMypuQ3JyHzyLz8KN4DZdcy9p5U1wcLqjWAWXLYUV8FPsVuBK",
  "key21": "2KG9nGhd4HCwqUEvuy6F7GiqdmuEPNHrj6oP3JZ1yYE9h5bvaNXG2frdfVawQVwVeyAgFi1Ao3q9rBFKBsezZcbz",
  "key22": "syqnk5jg8hrqzCqt2aLb3hmi916wB3Soc8TdjjsgqsdXuwgqGGkezWmATCx2wK8fo87nVUdQsy29JzFf1FhixCJ",
  "key23": "N3WeJzEqxEQNZCo3DoWoqQiV9juLJbDTC239X9xRL4on263HaDDJa8RVsrtCBe3NBQ1RnC6JF2Yz9eR6KWqgBKT",
  "key24": "28H73ARsayQfJuRTPN2PzubSZCB6og2Ws3gqochHTiRzKAXEufZSWobSprgyb4AoyMZ3b9rfT1vdRhrUgpTcCm54",
  "key25": "wC2iqofu3vz6rHzy1BEWCf6KdkxeedPaJ67Dsoa4RcRM6iCPZ1jdFSPZ27dMMF9US6jqXprYvS3mqtCvRVf7H6M",
  "key26": "3p5anhoHnaEVXXLshsb5qiDyPGpeRVUpnx289YJVz5GaZ2h4mcH8oXFt1AYBHx5Gfis9Txjtxs35LMUCWipoS7N7",
  "key27": "5tYXCD6A42qkmzeyLKzWoGoVk9Z8Y88kXpPk2ZfUjXkue9EczzEV8CjQzYfebTfHN4huuoHvYeeD5VQGfZ9UNYuR",
  "key28": "3kcKHpboRkPBi5aaAnT4KpL1T5Vg9m92buvvNZErSC9zapiPhQJeXvLx27MgExHWP4kD7KA1VqcjtyWgMFKT3qKf",
  "key29": "5dy7eEwKDGVFgz2sFY3SNF5dLLFQLPSKAzAmz3wYV9D37LvFE8bRVuQMP93d9vN5Q397xzpx7FfrD6qGQd3j5HxB",
  "key30": "3MMyuxsDurXTBzT5ZpqKX8RqXBxnYZHRcPQuGHU8epqUG1S4FTWjxfgPTP2JpacM8b8aqEPFBLKgaN2HfRiQyTGc",
  "key31": "oWV7cgB4byTSReLNLsvp43C4mc1BSLfkQikm8in2TWqoUX2PfKX5eSLtN2gEmuE8jq7fBASTR1cdyymUY53xQHS",
  "key32": "61ZykyeFUMtRKeWfHNU9JrHzuBryLy8ajuv3zUi3tGif7kPCtdK1nEjxQ74aevEJPdBMvjdToeyrPezKUkC5jGV1",
  "key33": "3h261X3K7hKVjDs3niZrUjWUKEqLv4NxuJs36z1GcPpib3YkjNgow5YZQmCNvfwFFHo4zd7NdtAPPCj5vYBAYbtx",
  "key34": "Yur1qwtwCsmNWrnJGhjC6JDAzjDJ7YK43U6uQQPr3PgHiYXDKFoi1orfjTV63BBRG5i7DFBRfa9oA6ECTvvfpbp"
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
