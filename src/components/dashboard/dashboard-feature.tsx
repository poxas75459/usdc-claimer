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
    "4kKZZoTjNnSJhmRh2zNp6ZPHix9JrksCDBi6qchEf6Xo9turDJWSEL4nt7mwV58ou17fTqvZaDVFzHdvPatAGn9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A5F8snPh5unpWupwzQ8KJnm2mc2THiY1KNWwuqPPhggKMh8PFnVGorKtSkR9wMioGx12pWcZEHREcbMXk4ubJcv",
  "key1": "4ZreS95WdcF5UZ8u7jU1rWtqLPoYwawTjZE9q1oLh8gcpUiYyCufLuLqqHYeX3safLjZNv4nWKfipzqnknxxHXps",
  "key2": "QFbzuVBh6LPnL2Xsu6VDXs9UF3JhFm7NmQWrjgbk4WVPKoscSj9zDztjmQRRgPahdGbUpjFdYk8vLyDjrADLr1t",
  "key3": "XQh5zjEB63eBSJFjbUZgpBbr816G9yr5MXreUDJuRgg93vHDnhGF5VmkpcmuETZun1LbXmetgYGVw5C2NvwQnz4",
  "key4": "5YvhBBAybfbtNrpTJKFF7HMy3xRfMUREScV6SQ6qwX2Uq6kypq67WXudu3N11PYwcJqCQ9DWMEn9F7nFFLxNRhR6",
  "key5": "3kvM9pc5gUpNvuzNn9aHx1LTYGM4gm2ui37jLbYu9UtXyDjapHzgSyL36VL6CrMR8BuTtPGLo5Lt6knjhnoFGo5U",
  "key6": "3YdMcZ71XTHHe3RqgcAEneKxAxgzUUBg4aKjHNMHphy4vyXGAaLwDxBmbKTNgpKinYpjH1YZ8Jwx1wRSQ3PLHLCw",
  "key7": "f94CoSdjxZaZkWUQjPpVV12DkWrTHwH6KHsexFXgJkNjHpPDtQeoKweCpZogTpBqACYcWZYrKuiWHnj4N4Tjktn",
  "key8": "2UecydaVsLvrjibw316VnHJsMiy9e4gG4WwoVMEARxpZqoz2nDYLHCsQUvbuE2xFafVF8v3tFy98DfBvBNG8toWX",
  "key9": "42MiQzq4TjMjxh1pg9HBEN26vNDTsVRbg5kvgkh5dB3xsCc1hKjZeFawNXU8jq344LEckQ5g7CjYFJScmBXz3LJd",
  "key10": "4974B5k9y5GdxxBEKjqgdjyPqaB79wDFCbS2jTmGNYkdSRZCWJCZeEUhNwb7VTbzLQ8YvMEVpczRhbBqoCDuTEuY",
  "key11": "5cNKBuNragbnxWu1EKxoR1ExEvU8TZusnr7knkcUQHyqj5RYU5WSzXbDcu9f1uCtQ514MZFnQoW4jsB7nyT7U1op",
  "key12": "2Z43M5eprUq2Kou6aTXUaAFx6RazwEinuPGEGJiigzT3eBUdBJssJ9kNKmxVoBPxkeE4RxM4XXvKrCsDMrz1W9oP",
  "key13": "5vWn9beUiLNgGKuq7Lrw3Kw9KhgaCCtehWdiq65EjpLXRB284xwD5xrmfrNx3HuQVb1GSzV38Zfweup37D9ANapc",
  "key14": "2mus47wmymnffkwKyPhzfaBkxbpT6j6ZRTCGYDzo7vYgyi6eVama9Z12JyiHVigUTdYsb8Eq3DR6FSzbVmtfPasd",
  "key15": "2r2c2kQCHwMYWaGKP2RNwXAycR8kAAFi8QkstaBeBurjZCq2zVy2vvyAjBf8QD3rVrtMHpk388gepXiSHb2miMs4",
  "key16": "5ZjmsGdJ3C55c6Cgh7ThCkfSsV1JdtKPxXDcc8wbJuf8NVSuBu9c1UZuwxS635nfvzMBs7qucH5CgmYifsGQTaNv",
  "key17": "33oZSP7FA9RZaNe7g1sPJ7jSQkkikUeEWccwAYCVCagMJEK7qtFCqtY2oQYoDGL3DqrnBpVY6cmaL7bE9HSCkmB8",
  "key18": "5nx7WeBVSVJAywSg5H1mBTMjDCfGEEFqqibwYR38RE9FUe1XyubxQ4RHnhW5eDKk8M4UfJJR3RT89zdiW12gEEed",
  "key19": "2MeoK8DSvnNu2A5kC7fKUi4yB2kXVGLQbUkpAvkbN6eV7fCeHY4nkPL3sujc96ZwHScJLXH8Ka2p8JX8tCV1CsyX",
  "key20": "632NkporLGu8LgYjRwd5J2FspoRaH2sCPSDvzn5ZPym8pbNg4zzZE7v6vTgYSB4NK9Pozdwdt93myehvjEBNo5gH",
  "key21": "4231KxUqQed178QYSTtHMTb3ehNvyPvYgfxJNKkcs6Hj6aLqfJ5Ajgb3kBfu9pbghPkiZjtPKCsVvABM8yM7sgry",
  "key22": "M5DqH5jsKiLQZ5AbddP1QbYBdRxUZnjAPksUTcZqjWjABiL9Lionyz9LfsrGWw8nrU8hSA7rV53kepj4gRmX447",
  "key23": "ipaWUnBEyxYpHfbZfGHkhRB8oxsgRa1CRpxyU24AZHDDYL11kWQuphMYAgqYxPe3gRjxrkRH1LeAGk54QWAcmQn",
  "key24": "5XYVWXY26FvR9F2qhmEPtWi3PH4tAHsafu5pJNr6w2pGmmCZq558M5Me4o9D2f3k4Hi8ejtJNAFnLdiyN87YcrEP",
  "key25": "3iJaAVBGdH4hMfTK6UChp3bjU18wqEz11byNwVhXCheUaxrqmCA6KsYZy1A8dVCyJT4w5vzXxoUor1eck4tGdNXw",
  "key26": "5gjtJavEaxnSDHibV4BuTCy65ZXnAthD7shdWje1PbLKhKF8v97fjmpt1pVKsNcDhjhZGeg9TzbUDzibjYN4L1eH",
  "key27": "2QK5ZZq7YCDF8YbaSbw7wqdKLBgFW6kFBxhancLoF9VyDRFKVhxjzw71uj2e7kGD5iQn5jLinDkZAjs3vxwVqUwq",
  "key28": "5gGHYPPN6Q1c8jYnHLEgRR8f1CnBobUeZ5AnoQTbrbSXWto8dE5pGPeggztvsvSjw1jqfnCyiAaeQeXf6BNY3yRV",
  "key29": "4ZRAnAGxaJeq5X1s3M3vk5EwDhg9ZwDZ7zQMbWqYiP5jk33pRq2uzUYS299SeGquaEjy6wQ1eQvNrvRrpxtJ3Msz",
  "key30": "5qE4NvyBNa8CS7349d2qS8XjzGcTCoHWEUuKoD22gLpHeaDRkt83iC8fk6wC51zzGTiejKpRH4CnYzmWcT4dnLJu"
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
