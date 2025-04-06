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
    "3e8T2EkqPc6ovRXb86qsWWdpr4wmuqQm5ZsWwg2ZAgsBwtKvM6WEdasmpNd8SQHFBehQD93ksK2gDN3jpgYYTYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G82EsMUSrqrAdREtdEeLa7eNDEYXV5KG1PrnkAAF4Y8wnCwRcSme8eoKhEXG7DAqX3nPfYFwkBcg2CywJscKWU3",
  "key1": "3WDbHgpqnnYP8N2XwY7tRy6FiPgYxg2NYHhWrTC1b8LeGqtB9KUuWPwyZV3WrQFT3yCxvto9QDP5imbqTAfMJsxk",
  "key2": "28Pujq3541Rz6rFVV4eWYBpFRFHEPkoewWFnJQA9SDa1rPW4e3gLjJfZfZBFvkfcYFLnCE8LCnkLSwUU5QYip7h3",
  "key3": "4AAE5RJiTqeZfxoTW2h7DGhkC9pDdWs1pJhHYSXzxzoHeEXz4VwJAZwTEP9LyFw9dxFUYxiwJehUCY4rsgNogAAW",
  "key4": "4qA95bdnQeg7wQXLafq3NSUiYBJpefvxakfHxZ3TtQ1ghXNkdNEhtwBUtpHJe93MgbCWNzy6qbgsg4VS9TYFRhqB",
  "key5": "21qdPW8WJQtgNEVmZzZpDW4eVXdC5n6oNfbHa5k2A4fm7UcXz9qDrLnHCzdzipGRUpQXPyz1Y8YAmNNqXNqR2Kgu",
  "key6": "5ChJEpgaKqb9WkWzA8AcWV6uhrkQSryvqdANrxyFFjQMauSX1QHL7y7B9Jv5sTbSwaCEzFCGUPKWD2MumZo2nNNM",
  "key7": "LChC26njrkQ2Y5nLKhcBfesAdNbMSLq3WYb23qHp7tL8YRkt961JYTK8JBpLkmEa6Q5tve3s58ioKcU9hjebMXr",
  "key8": "3NY9zEcLCR4SYEYsZ5NxKk65fUNSbMsztzhBx9RQZakuTMuQRgnn1bWZCGMYfQaF3W7TPdYXAmEcjpqRm66x6Y9P",
  "key9": "57U51Gck5ZoxHBagG4rDw8tVeQv53MGynhjFi5ABX6mQTzSe3XaZQryrjNpDnc4j5B2KA4wAjsYHqKGww4x93kaS",
  "key10": "5S7LDhtjVF2FLvEBRz9JuSrs9kfG5LCP3NRQ6z38b51Ds2U35B4Tw4ZbRFpTVHeyYnwRTe1oQVXmH4RJDfMrZoxZ",
  "key11": "2AAqYYi6wJiVHxxp1LJDwdffgxwXcGEtfkNDESsweXXjakfRyZMnveBNoVnk73QaowSbCnrSibjymSZGeMGz6oTJ",
  "key12": "4LSfcARQkbuWGkaSy1sWcAfcrredu2vSSc1hGkKTpqCxVHZ7cGfELbVSoYoDufHs8K6DhNdEqEBGMkt6554Jy13h",
  "key13": "5ALfYYFzs5SqkPEthxAMGonMGU6JtvUhdnGg82LD4FeCq8sPvGj1guzTsJmKM33fpk6YgekdoALBgDbNyLUpACa6",
  "key14": "3w61J2T8cyPG3CN6u5pmt5YrGAMzdmyQ2pcjufnbzeg5mQZZgpAkUgX8fE8fyo7rgNrmukNSCC6HmyWJDsvEs3SB",
  "key15": "5d6kntLiDBtPrY8n6UxpubcSTEsUe4YAwwrP4BvDKsKxvYdsc1NSHJpaDyMKMzF6dHR4TXMefDfhNjJqWbHFdWiv",
  "key16": "3PYX2S5MZe177torb2Us4UFfrrZPSUow22nQrUYUM3B4CarpdjMZpSVNYFhHd61ngYYZg2YL6Eh6CRkfVYEG6DdH",
  "key17": "5pP63eAQpFUk9Bs9t8xaQLhP8LkTziQJBbvEh1Z3sMrFj6VtpFK2qfD4bYcd7b8QmBwKvQp9xcr6HEzzu8ozV22y",
  "key18": "ggdzZTWr7iVwe3Mp4RYYEKCFMgUYKBXXZ8cMDdEpt9prq4oUBY6zvw2BzkRan1W42Me7CWn7822MqE2arR5eTJd",
  "key19": "4pfYqMGEwomqxc9Ngyb7WQ1h3pJFcsgbJCoJHsDhpgHypYMo1QxYktGWrQasFgnjWzeu6QKp5skAPjyVy1UD6Q9x",
  "key20": "2iCMFVRJPCCQ6d3dFW4qT5Y5huxRvbXsKjMsE4gJfLZ5euXsCP34uj2koLpp4LDJAKHLY1c6sbUZSaPmm9J1mUed",
  "key21": "228QCRsgZZPhXkpJY1rHcq7mSSZPPZEEAMcWjRCTghVob5qVSsYWYWtnBwbTuPYbbi5MaxNDYtdvifnaaHvXLB8z",
  "key22": "2mS2AhwjyxwU15hYEWXF7ZjB8xrJAQKvYXkQuwZkuXRxrYAYaCriAeFzXB7qrDMybammBN3Y6b4AHV5dRiUtEeTd",
  "key23": "ztzQBuMgz7Yaxrkz3NtcacW2J68X325dhj4YUTTNJiyNXTgCv6GqZ2iECv1oS16WGQrYaiogtFCHGXPW12YoXsM",
  "key24": "aXTzfHdL92wEVZc82pyKwypTLwvzWmf3bxYrXbRNnPsomV2iJZjxty3TLS2gLfHAWKjC5XHiNMM5rCN7RYXJLAD",
  "key25": "53TvPqiYuVeVuwVRZhz6XgLSvu7QDjkBy6D1opr41hFoitP1nSrkZh4ytxTerx9xRp9xZRXGgLZaa36K1QA63PLo",
  "key26": "2jeDFL7nB6pNqWTU7pvfsBmqcVjEWzD2FhH63msisPuTuaEqLCxBUcodMj6uBB9mpWv994RQJuukfkHXYATBoBHf",
  "key27": "3ZubwxXETQ7DSkpRp5nzkpaq5vnCkSsqisr4E5eG3nT967AxnHcc3VNqCvczpVt4kqzEmPfaVjqi7JJEQGmMMEpv",
  "key28": "5qukAND3qErJ4Q7ZvUdNszVFgdATYgsfSDd3oPzFWxvJ2q2YXgpvMz1SHgtgbTaCF4FvfC283pCbM29kM3L88Chk",
  "key29": "5Yh9pxcpDYm4zF1omgDRfFvVWB1Lf1qd9yEsyQ7MV8zSx3bfz5u9rcmKUmmmSpgWYbah3zZMKe5822bu1eH9Y7wd",
  "key30": "4T3jiReiBA3mTUKqHkTugC1zNp1Up82tcm1xNXX8FVVdYNBxKRaKD7cTRaDhj5GDpaxc1Ype2aYDedWWLqTq6KCM",
  "key31": "26zppfGspDCEdvYgvDXFn2WM3V4EBEiLE8qAsJC2UnB99cMz6qZfP7QcT61G6rdUxVk4xGDvgwvNcivLR1ygHyvq",
  "key32": "2WZsvmpdwDrZ8dyKC2vnqdAn4cvnS7GgykoQBLFE64xDQmGz7unLrNKv5AmBkpW15TMU6KFEMpkTVycuBwrFwTqo",
  "key33": "5iD8EmXcjh6vJpX78TXLjwUfxF9i2N7VxqZRtMbb2UwdZneFVZuPeVdGCtDiPU7LjmP9GsNCKVN4Ei168sSMKG1M",
  "key34": "4JWWcLEkp6D6njDzTE9DG7yaPm1fEk5Muzxwoc1uAjXxLmiR8w3HntXQrjygdpxngwaadDYNMfyG6szX6uB92qMx",
  "key35": "4zRaJjJj68L9Tg7vkn9A5sKjyPK9jueoo3Y69rUbfD89vwSwiWMPt1uFLpSWeT6iYghAipV6pwqscHSQPjvSQYes",
  "key36": "432Se4K6c6E4q81pqsWBNYs74snd9J855kAbhRTWJgPPNnjQEae86UareKzmVDihCb2ZJse1kGhJ25xKQdxCfGV5",
  "key37": "vMMA8CBu8FWZzXyxeSGJkK6SPNL9sJUxSLDJ3aPcBihnU6iCdBVJAWuxoxapDj23NKKgY4cJaWkRBVT1SykPTwD",
  "key38": "5mVRXbJb1s4U7peTYA5UFrYRd9YBtTvFudRon23DDT6p1NViSs9Kap9aNnEtjNuQYsYx7Zxe8nZQyoQcqPFoBDaF",
  "key39": "4xQCZ8xopnXo6bUauTGLjfesp4pue4RJyBP8RXAq6vznuJoxcVUt8sLVmNTGiyiPRoPGvvapWje2eQXJCo9c7FMk",
  "key40": "2NDo8r93V1Wsq41pH9bsZYZJa9w7crM9Xd19ULTDJuHbvU4KY7eWy4sHZaBzjAAw3XdaP8axbiGtsLtHZSzu9UD2",
  "key41": "4vTZLkxC5my9CYJcTtKCQGmiMwphcnyq74ok2x9u5dtGL84M8BwJHxWE45W6xae88BgseN4TEySNpJRqyFtxAi7m",
  "key42": "5qHLcMTdpiVrfLtiU8SNS6irkHWBgaJxLw8eZ6GCrk786cYxvt7wDbcWMJ3WDwLfmMHayLfocEPmUpLdz6tmAJEy",
  "key43": "bfPnHoY9xqWixZJALWcmj1jwtHX4195UBectV16aTEzdxYVMe917mhso1mccuUJDUq5JQSpERQ8SxE5W6AYRGrJ"
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
