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
    "5Yo4ebFsyw877GdFNw44XJxcc2PjMW8sEfgQ5NiYp1rMKD4LLRKEfj5p51RJm2qaGsQugx3eCzREas5Ey1xgy194"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66gUtq2WmY5AFENDrMxQpAiu3MWU9wEj6XGCwByhahc8JZgixLszpmeskWnPdv7FC7xQikQez7V6XabLSM4UQU3s",
  "key1": "5kSKstqXHcpkUqLjZjYro8AMMEq8ysPtmtiaXCqsV9FMnuhaFo3KeXpZkFH4Ez5m2Rc97UWL6CNr1o4yViYSsJdC",
  "key2": "5HkzmdjMP1UxyPRt1Ce4iXzK5DHzU4n4hv8yd26ysAUKSgYJ2TsMow6iXhBQgyFtaSuqYNv8s41BmiE6HWhMt1eX",
  "key3": "GmxaE4c9Qa2ZE78yi6wHhvPifRf2z3Y6p687NhjAcYCeNdxMxYV2rfZdZhCriKQSLgogZq54hZza1NaUzxhm9FR",
  "key4": "2Zi1qJLPHWeKNuUrubS3zDjGCGpxwkc14rdt43RUGNPeCGe56BXycQntCXCLcDyRcXT48JFGn3K7XcTzFysuD9jB",
  "key5": "3ZRbupAu6vxr2jzbUN7ixWqtfQffx8wAJ7EKeCjh8UaXa56ZmxzUkD8fSdZZz9nS6xbs5p1zPpn4eYTHX559fRA",
  "key6": "4Dxaty4wo4q8Pk5EniDmfKfZr776mEFrWLVfS8DxzfjgewvFdh1EHWYDt9gAYHFnm82gmYNLonwp8f8DUkmUfHH3",
  "key7": "4VarhV5G3oBkqitZygTYhQMEaMWPNUFNwMkwJFjzWJoTv7t9Sv9g5SCtjh2CoAsuzpYXM3zEw4QtrAFiVs71TSiB",
  "key8": "474FYuYRkVNcs9EhMg2CfPey2Pv6cfYGfWTFzkQoYLQxn3ThhEbqkhXpCDN7TM67tntCQNhGcmW3Y65r9q3A3KUA",
  "key9": "2F5TKZUYVV5mXRjjPsDmb3w5MqUq6s9PuqXQTUQ7ukTryJhAdKcHsBwATamhjVeE6kF1J9gMgpMs9GcQdYBMqV5z",
  "key10": "3uL9uQxoh1U94BvtdAdLt9dfcx5cS6zjgTVSRg8R6DNRpVeQF2DBF1tnyFSbQyAYMX8ZHAELKZjx989QRhrsfBR4",
  "key11": "67brG33jCwoPzygBvqG4D8SEfXWtdhicG9WYtUnqULH5xRgXuv8Q4SNL62eoU3dnxXDccwrnFmYVmXvXksLCxSNM",
  "key12": "3hatBHoS8GsMbHpdC6XqFJqt5QyEPtS91VnFmzPiY8CVijGFw3fN6wWDDdtmn7vmPLa17r8GHGg1vkWvtnh5medr",
  "key13": "28i7cBiPAHVCbRYH7YLfwpE9gNJAxdYZQwWThcW6YypziMNsrfHoySKc67vbZA3qp8kkSmhLVWXbyVqeqkqFaV1K",
  "key14": "5eYmcCQkcwND2LfYpS2d2ND4zj3Jm7Ekww2DMo6mB9tN8qwewCz14XBZ5kFVFgnhobL7htFK5Hus5tSwigzfto6Y",
  "key15": "54JM6h254Fr3acujiKTSmx5kzxfgKqNWaRfxRfn7dVNZBAiuSZffNLQV5W7RvekYgXsE3Zcn6SAwYYd4ifquF7B2",
  "key16": "JbDeibkNzDFtbomuadLS7V6m9WodvPD7riV43qUH2w5idhmmHYmGNRewoGycmKjYeqbu6C6CLsSynSZbqYKHq1a",
  "key17": "2nKZNx1Zbqk8tKaYp8LgvbMVRc31qCiHJTNXNyYSgEJpdFjvg7sCWNCWYVmnApcazpqLZ1UdeNmnFk9jnXNfhYv",
  "key18": "2fvZkaMxdvcyKugQrDYbp9VbEja9oZ7XLkCC71437C6jpJh5KxzHqr1pdE81X9GtHJ5MDBmvaQ1tKGtAFyA5WxrH",
  "key19": "2dbnUYJoNCr2FbqzhGWZXPsYqTMzcpYLVAoUwRRwvuMScKfYxXMUywJUTEToZjYZoqdRa7zKDPLy1ywaMHVC6jdC",
  "key20": "3cjt9sviHxtPGWFDu8y3B1hEWTPsJzwCuqVSW1De7Q34yYDp2iDURe4NJLq9JGov7DBcJjDMM3M31GQQwb7jjPMT",
  "key21": "37A6beWVSK884DmzpHp16jG5joYjhinRW262AFkqXYbNNvGBKjCMzFh5Rx3M3SH2YW147PfhX5LQ1ZHJzCkhrazu",
  "key22": "57kAfBXfRo7L6yKzMsq2n3CPLHqbDw2abiqFUjrbxDEFoz5aKNR5Vg5tKuytuxjPqgQma43qeeTJniYz25VSHCVG",
  "key23": "3L81vdsL7iugk9rrj8vqyMfNaWqsryLpBEordakHTsRjB1VEvayGzW4MFn9UStdYATmFB6YSFbNpiAMp5wHUTHsj",
  "key24": "2n98LRVD9TuvtokszYJCfRwt3rnYn9i95W34eznb2RVL8jJbpGpZKf7GdyJMGJTZpMnqDdfnZLg845Rs6RpuVsA9",
  "key25": "4Av9qLGfyFTBFSbocChbXtJX3WQA8PJnFfE9FFNtBF8D8a7ExeynvJ1kUpC4Q3ydck6HJXtNEean5V4xVStWCa3s",
  "key26": "PUkNdUYigg9e4Zi4zNWxVWnPbXXc4ygCYYERCG4Av8azgymJ51jZdnpzYyrdXpx52udXDjcTsicGVB2WsRgMB6U",
  "key27": "3sXoYTbteUyvviZ5zREmxRti1qfS5m8oKVzupqXRzChbHVTDCGU96vbNXr7uxprJeLU3j8ajH71CnhctVHeuwUGB",
  "key28": "61ix4WX8sfEJLyrJZF4aj5NFZatuP9E4YV4TmdTokcSy8oUZw3895PExDnAoZHjwPW871AoUahFBuidX5RP5Ks3U",
  "key29": "3b7KGCmznaasu6MzyVFkm49TPzoJf8WzG12FCxnCGSqCjshQSNnFVp9zSmNpfN1DFvVR5GV8zCCeWmT5w253TTHf",
  "key30": "S6wxtdHBmED1qwinm29YJVB7JScAVJPU3mqzLMGSwXoRXgLfseZMrEnMMjZVyRknim7LVxLNCAkjotPWQ4fWkqp",
  "key31": "3fLNd7EdHjnhZLPdrLCuU1NqMkTUksNijK6mycDJjwzhtrYTTQbzbifka54BUGknFQjwrKyRdA3WvEQ3KmcVoK5d",
  "key32": "5JmhkjxzVZQgP5wuADbtjQtgANNK1EFNpLwmWyw2MTeVBBUQsBPKeJgwbY4D4cH5fvxnRWtjQBERVScWjzbGh2LJ",
  "key33": "2BM5PpFHpRpZewsFTkeGVHcCtYcJizaaZQGThJC3agauD1TH8TCNcPCcu2cvNeJzMpWH71Po165hf8E6RNrAJ2eG",
  "key34": "4VHkjcgEfqz5w56YXsRJ6EjCTU2n5xJqS8gmTmhSt4zZMD8Xq3Rxz5kb2UqEoZMEe3geo3XriXboEoDFRGYMKtCd",
  "key35": "2pmgpt1kEUVfkYYET4sibM6sHEf6qZUnvp2qbkqjdZtvNHPvY9gtpWSHP1t8XaTeJLuv9SxkF5BSsZG3GJ1LCwrZ",
  "key36": "amoQiGWmBm3tDsu6mb3eH4MbDXwovbiUGfJFwUum7eKxqMYuLBT1DV87htrxkoi8jyceh4dyyEduhRJrhPoRMAN",
  "key37": "2ufCSYBk9Hqaz143tAvtSvKWjrPx212gzsWXdmEE5txvZSt6oRSo8yaMukFAvcVakv3rDXAaXM936Zszektv6NbA",
  "key38": "25GGtrvxEuWsGiroudCGskoZWgTcNzHfjCqgwawwn5KWz7vZXkyAoAgmtfZbi1GqkrquHoKZBoAApXvCdoYcmqMx",
  "key39": "5pkUBczs4kdxfuygCWsEqp3XekbRJicHbinTEHRSinMAUdRch65fU2q5ZJLsLsvcfgnkggiccAS1WtpNkPkhRxqN",
  "key40": "4veB7jjmeD9VtssjTfoCRwKFqAjNai5ctBo15Y1XsnUTZfsK9AdqijXjQvsY77cdndYG9kXtd7EhSNgzh74uBwGu",
  "key41": "ycBNHsFbWNuyKXSE4SAdMnVeNM7Cy8WQEtBfMJTtsG156dyRYFJB5rFhzPEGNS8NWLHcf5MJz8UCG9zk7YDhfuU",
  "key42": "294KsTWeCSBDqg2WjGGDLnmjV29Pgb3DbqjimcwoRZkzyDZQWvzpPKYPinGNo3K7ek4caGYzTmdpxtpZMBh4znyp",
  "key43": "5z8QLckxTrMaMU52k59xwhn775bGA2RQsMEhB9XcLfeYDDNwgQig4NamnwKAGTEunW9v1dErBmwwHtNptAHKsmSK",
  "key44": "62i4Ejfw5ygYJRQ6E3odn6Xa9dmmBoamvcdTMg39PQSrsK9CxLPrg5S5gtufLxnxuGN2prBvnzSCVvsV2scSUTNf",
  "key45": "2wVKNdLARckX4fA3ThB35B9mSrGDS81T8DBE6DrbTp8uvtKP4Gh5YSVjHnCUPk735zTCp4PxDtTY9zd2hMt5dG6T"
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
