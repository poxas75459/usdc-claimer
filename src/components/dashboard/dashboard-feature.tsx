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
    "3oYgfb8tEPtRcLYSy2m2wWG47FzAyY3hFfLduUZCCWSD8GQVGPm4P5BLBKY2Ubr9jpv7s1uiJkSiDWSYq8vwu4DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wzVSUdAYJzaWS6kbzDM9zLuXAiKoG21ExNWFBFpbu7FgE2zSmSuXVi5FLCbUUgZ8hHiiD2UU8Qr9NWRQ8bP8U9",
  "key1": "3TwKR7d52ZCsjjudD6rzwLSaQm9JGauvk2Qy1ZgYpm3F8YAeNP4yyzd5HScpsmD9qQMRQMbuYmZVaVV78Hpb5N2B",
  "key2": "62vsSvkkRpqQbXgnAs4LReoxZTHexy8RMmkLbxwRZcMRJALs4Ne1yokFLcRFNUboLjH6L6BsTcMsDqU4PRSFbwGM",
  "key3": "4V4s2k6GCGoajfttDnuNNbXdG4453xL5qpWj6idiwTCAo5RUTHZYBdVaU2hkzt72WDdb7xyFr6GQnL8E1uzfRuVz",
  "key4": "jQRYhL31xdeYxmsL4Du9HNmMWd6FbeXnxWk4s1D97fKiXJTLeojXVgYXabwJaj51QxV5RnHJmpxztpGKHab3Lme",
  "key5": "5zu2TpiKroyCUPrMNQaDAykf5rmA3xXnQUvsFbCHyQ6tuXs2YChmnv9xLNFeko1APtkq48s7LqePAk9SNFQGJW5K",
  "key6": "3a2Wd742pYF1dsRhzjfC7mGKijsB72fAnJfPap8zfFAXMvA5CZDL6mt461v3kfzqL82yPZiW5tMvA5frZ4kWAeDZ",
  "key7": "2xMWoXCJMuFmMfJLrRVcoXWCRoNX9YXJNYGRgUHZcoijLeegLiZLVu9tCvJaA5E2TPEjZuiKptRxLRJmNrwpY5PK",
  "key8": "2bkDRvLSMwSe14YtzyCxLqmToJxdWuvmWy72J7Lc9U6itoWv16y6qEkjzrxZhMn8L9HySDjTBBwGL8QdkbBanwxw",
  "key9": "2TAq3WKSZPjkCfwMWgWQipZginnLdcRzo8grxxuJ8CYHoQKu6ia5MkcvMyPQnvjnx8DyQgf38mHn1k89AzFvdqGk",
  "key10": "5H8pG5d433eswGiPHmmTXWNmQ5PjxiE5Uj5zpXad9VFW3EP2f7qsugUYFCZei9Y9sVaepzNVkRkzAT5dYQWFJXXR",
  "key11": "5Z9Q8YeH64Dt9U9tipyqSxkzFBGvu2SUC1FsZ1HgbcJWCxi4nFS1AuYMF7GtRR9QUUHs4CjPdEDDHmpJZmU4gpc5",
  "key12": "sBtW2iroYubNT1fhnEkkAkUcU5P2aHVeZZ6nbw93a9kDJhisns5ggdJFR8VD469dSHSn75bCvN1XLm1fwPLAt9y",
  "key13": "3RemSNdBJF3g5gyH2nomWu8gdUQDTwRy784rJRYZoynmpFxJfJAZiCwT23DTQmPybKx4afB8LbFMPqmzPWic8n78",
  "key14": "2NyMzuGijGe1HtuNzbzkaNueSpVeNFq48SJJP5E2TkGU6pPVwe7cZog5z2sYLRBPfiBVwkipNUjV15hLzjB1MvuD",
  "key15": "mkNTh7pVuRimKiCTdUjYdoDnN8VBR4vW2zDorTXxQ9NjsEuZU7AysVmLoegfspjwecWWJaLc1Hz77QVqBtXaG3G",
  "key16": "67DmRsdvFVsxAKGbkwP8PFdnJLB9cdBpMvaqcjvhqiQdxpS1i3bq6nfUTQXTszD9JRgSZnSZSTtGrwuQs2uk2cVq",
  "key17": "4avG9WvhHr9WvmXUspifKyyDzWwXds5zAoSFeyKHetVpoyiKRmJHVHXHPdDVj4dweHRb7wK6iteoMVHrRqJyUM62",
  "key18": "2kBxf5Fh3vP6hTKLLkVeu1uStPsa26RtuhLrNe8kq4pV5hCgDR4hkR5Sa9ScKVH3RHgyby3NirfPDq2QmnLkLdYu",
  "key19": "aFYGyJ6CZyFw38ycohFLUKAvM6vHYQ1Vp25vEhiKHtwGHZPwAS7B1aWQiwHEbh1Wngb6iCtvmpZzoq8QVAFgTX1",
  "key20": "54phFsVV2Mu5dPBXZjfMjpQKouoR4ca3dW7ap5aU2xtwUGnEKz7HbEX5CWCBUXw3oLTkazB8vr85Ww6haGNck4Wt",
  "key21": "QifbxPJSwWcXpK7PnJxfBiCwpdzpUu9yZiV6H1WvYUEYmHQUQqVXEQUqft5NQTg5HKRwxbSaTzud2co5TxwYUXb",
  "key22": "5jZGXDEj5qPMZVAXb8qQvEEY6G3Ck4mbX4RjGpazXU1C1vRAWQcWDuMxG8buPTfnj6hGJtmUT75VKpBG1c4vrrrq",
  "key23": "4gJ1wPui4bRMhbMcWp5nJDkwsEkaqj4gWZqsDtnGdQKbeumteCjwpHiRsB4Q2mwqXbQwWmyaitwYXBHRkpGvVLoK",
  "key24": "6JLLr71i3hoxrsLY5Y7rwKFBiU7bgL6fERJDvfPcgdLXzXfMBjVShUwLAUWyQVqacpARoMUTvLXWHciBsdtoL7R",
  "key25": "n1YC1RBJX8ZqYebuBRVpVU91sKguUZGv58H4yrBfAVtMyGv3dAyUzgTrWrT2dtWEYAGePEAaBGXayw1bTSwWFD2",
  "key26": "2hZnePw36pywzgcGh3WsbJJQYEAgJJttgDLksvHmyQBpwC2tXc4g3dVAYxJ1r2jQxBMapTQmLEcxkmFGW6aLYU9W",
  "key27": "4Gh2UNMYQmgMRrdzZTfsxArRDeez1sWhdAKmyGYEmQAWQaQT5sTyo3B7xo5aygCnwqtcAvjEgB58PUcFd4jnMgA8",
  "key28": "YtyHs8cxaRZUCHir6mtFujS2XMjdzRhvnNX68GjxRa1c3dsM6rLqV7EmHEzNW1HhqhiKF2V2EGCpc3qdq8hhRtV"
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
