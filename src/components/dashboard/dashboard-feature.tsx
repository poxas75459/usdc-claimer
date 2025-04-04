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
    "nijV6mUazoHr9NLFFVD6CUzS7oRh6NpkHjP64JUpCXrqjW9wR15gTjiFL2kWaEfRYVvr8A4VysAnNjwU75CjihL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44xtXKsQB2mRLrVjFANC1Njv7FHUrgJCDDhyV61ZKyGh38N3UDY4kcTTcUTgDzpSAfsADY1kgGSLGNTupPHByHoQ",
  "key1": "2zM1zV1cHswn79zcc8YdDp2H9eszQBjkCzczTHeWYnCiWryRkhmxZZqVzxUuYrfVWXxJZxCb4iLdPZUzuxPcsJzb",
  "key2": "5UJmAMTESxUREcm2mMAAmxZcSppodJkUhn4GgXvL9B1tGSoZotAwF2jKKR3fFvQREumVcL6KZT2Ak7ye54MceCQM",
  "key3": "SwTzAqbfM41Fyq6xnWfA3BXfZPq6QTR3TTuwvu8q7sY2KRjUb3JQFr8pmHfM9L4aYuDdwTox5Q1tDaGgv94N4Ug",
  "key4": "4UgW6QPwnrASYyACToaqx9Sd9JUBNj5ugCb6tywr8Xj4HPhdzF3vL6DwmH3Vxo1CpiKd2r8ahuTtQG1MjbSbBbfL",
  "key5": "4eE2JxUiiHMW844eiGjKXirBGTUsN2gDdD1rNjgfJWPWWj6164HhZYYgoSc6qdm7tPQfAFYhvmaxM4jnFXcw6qps",
  "key6": "UaD6fAfuAFfKQe8LmySn9mFXYVvvMW5DtVZjKAL6BLG25cpBRDdGpvEUCukAN6htUjAsqGhAa5KMQZceiXQxps2",
  "key7": "3y8Qb1weNvS4JNrgDeodCjfT7smL8WXHQ7D2zK3X1w3RQaWJEReTDFscgL18h4Xd6MFwe6QdurupFYSYfKdfb7gF",
  "key8": "47UxafGFQGeoqh91Xqv1kUXkfUj1s5Lq5tdBF6eFfcqYnvyeKxS86D5fsbJAbWAtLV6rjDAJo5yL9n3nbeyDApas",
  "key9": "2mfBxQVTtpV6ZQivNwodq1m571Z9ZCZkGawZ1KtUhQLg74unVChfsPYXuSH5tecsr3agPSE2jTkkBhC8dCFw1RSC",
  "key10": "fFZLt6FavuJtT9spU1Np388Afivhs5WSLj8uce7H94WrKkEDU2FSUzhVjntHYBXGy1gLbMiRu74d18Z5miJ9aZo",
  "key11": "aoaUdsTPjwQtwxsrkLMaHLgQ9xipLfxErnhFyWhiiHX9qXF3vyXYfxi7dVy2sh28wqmKoM1tp3pUPGR8df9V3WC",
  "key12": "5n4dz4n5iCMTuvmQsYzFwEhds9C15MRdEzNYxzBMcp6c8ofuUfe6m2mkRWH49ar8Pyd6SoViEtSNwKWVAJcNr5oY",
  "key13": "aPwW2ncVhLQCL1t8xkyCqr7xUCQx2SWYcRcLDesxMsXN5LKdebeKu7oBDctqERhabRj8rMzSUAVhNJknDBBGQ3R",
  "key14": "3eC1VLdDnXJVR5BRczFXxJ4Sr4Hz7wwf3H1tjbo3x8KZ8dbkLNYNkffVoLL2b8AV9JyW1RUvfjGTVmNuzUc8w2AQ",
  "key15": "59gnVCi77xC3gwLGZnbzjWwmGuTmgdixi7Bd84R2osCqpLvAz4pPPkreaB7BHfZK36NZsEjd5myqd8ghLuwVE2CK",
  "key16": "53utvK7tMNf3YURjRxv3PkS3CjxNVrvc6Xqf5TRtg2BWcQGqQ6Zj9TmeYrAmfkPDMnAbwpBLJVkPiSbiwBi3tkif",
  "key17": "22KyTMptjsU8MNWa1g3Xe5wHTN6yFk7iGqiimjrVXAUsvzvmj3sRijaQ4wzEXjKFJWY1EnZ8edoBGXjrNNagNxwz",
  "key18": "2oAXwgCV9KCo2qU6SGzSeciqcPGzUYHS5JUCaecbQyuiZYPf7QbdEZJY5PvqgFgRGihsq4RW4dgg6cz6DweJtRWq",
  "key19": "QUNh7ivfipHMjbTChhqW6anhsCB6qKHRiwt9ZhJC2MYi8icGD1ghwzB1tg5CmAeA2RWbiZHJPV8hENFcy2hF8To",
  "key20": "2eKsVp9n6ARAZs6wTXtaK9jwntMpUuSUjUzrqNHXoM7EznbdCjAuAaDmDwpH85GPM33xVa7iun5Brumnrqfrs3Dc",
  "key21": "4oudP2gsPFbkjGpK9GyobYoRF2M9NM91CLbCtrv6V7ffsBMgK7iW8DmoUvfYdfCEoHEwFDL3vGR1uqYqiV52MTny",
  "key22": "34RTAYmkuNbT6XN1svS7jZP9arD8hUZVf5LYPLM7vgDpxq5VgH8C7FNkaQG8ZdeL5BDuKu8rJFC6PvY1LE8JokrB",
  "key23": "BF6iokDBdcChPqD415KPtXRY4mjFXVPPV8zPRhAzVwRiSwvLxaLXEC6B3CUGnqvXx1eA8y87RxRp7LhYsFmEY7G",
  "key24": "6771Byoh7iXS7hXqRNHMEq6zrsaAG6tECVfzjMs8cpqM3ibaNfopVDPtgJKESiZCRTuHSLpWcPdCRU272XPfPX5A",
  "key25": "4GMSs4Q4NoYpzX2cQJrHYGNb8oM7iWUxyQT14aRuJt9zejNmrErafFjenGc1RqhM9D9Q3fqitPxRNcVpzaxEMz2o",
  "key26": "3nJfKuE42tYM7rVVThfSJireRuin2w3ysujWTBkjCgRYccXkK3QSuQionn3gEaZocVEnmFJpNvfv7ZQRqBM95fK9",
  "key27": "28JzVoWe379nZ9zgqPjhoZN274tRhxNP4e5uLn4kbNLAXQQkPmmyZX4aVLvfomdJvKWM4q7sfAfc3rsu5rrxcuGW",
  "key28": "5JSKgPSVkAAD4zuQ9W5xA4kQE3onyGhsUxQ13eC9EWKaCvksAqkkz3s1tu2un44LEAvM9d4WdkHE1J7FaALAhybV",
  "key29": "4XJaMsa9qahufZ4uRdjcEmp2PjH9y88bUfB77jQjwonryq469QW7tUh1rTLSqLzLJumCLDDNTVo3oBPVfGMSFLJu",
  "key30": "4rT4qCgQkeCN3SVhRWnEJbTsh4bnfk4CXcWkcrA4RjiwtZpJBiKmgPHEtbvSB5154aEeqZyW6sGWij8URLwxbosM",
  "key31": "4WjcwtzM3N12S4sL6tsgqKxcsR59SyFhmQE7rSkwEZrrLG8c3sxkvnK6xyo9cmUf21427mJh5aEaW3x9xayQA1Af",
  "key32": "cWHUVWiUYEGT62T6kuajxnDw7dmPTZ2oZQW54dqvCxzENbyQzfADEUGQjUi2JdD6zXhSkwdmggbtbDwnKkyxeQR",
  "key33": "3fRPeEuUdkpNZg9qTPKr1DgEcmWfYW1abMvLkQXFPrm3XEXd2XjWZpPTzAJ4KXidwxgs7vtk1YKA9vAUjfzjAkab",
  "key34": "5igZYkMHbX3urN2CeM55HWknxRjhAamoar7VKNmWdXApveYEjR3uXr9xqvv5NjiKS4raWVncTH8iUk7u4fZUA4B1",
  "key35": "5uXTeuZu4BrnxnXgZRV9euoRsrYDAwfg1Lc3KqFwK7xBgpqKC5i5zXSPwQMftJPfrEhjCGdRyHDGaGohpft9dPkQ",
  "key36": "41MWVW6zDDNdiJr1CgAjPbD7CWob2WWqid4EMDEEf8RNZAqEGS3tT7aaPhCtyPMRyBmE65Qpqi5NWzvh63jM5HwV",
  "key37": "4w49mFZtfbUEYDpKRWMfP2CqeDDJAzHNBePrm1S3bZ4WEV6T1KUuBjG4rUanqhXUCRFQuFenFsxmJGPmNapuG6tV",
  "key38": "xo1DsaMFSQ7pgWFQFyY7LqeJt1HqqqtKtDs3ou789opCpCcTw6SWP6WrjinEBV4y9tp3MCHKi3wYa9BTb26CBvP",
  "key39": "4UNczr4xmqsRbTZuoxoj88fjki4BdfLJhfcDfWeYp7sYxXjhZpxDRZ8A9AyHWgJh5n3RMEbeMVUtybpwgvqM96wz",
  "key40": "6HJU5jshsF2XLUMqcwRvK1cRkEy5ssLxtVpXKoXQUnqbyQ5GkmT9muLFHM9vRfiS2J9DZMjvJHdri78Wt6m7WMM",
  "key41": "3FwFF9edLX5jnWTYzwXbHm9zm12c6W9TEj7nCvoLvkuAV3TyQE7L2H6m73jXiUSMcY1zLa6P18XJ4DgwVa1DbYJ9",
  "key42": "Z8mXvbuQraTRK1v5JyiExfur3kSAKUWooGt59tmUZj2RJqnqif3XjpskcvjpsRDWD8bEAzD6cKSxCLWNDYkhp4J",
  "key43": "61iYMoBGsCcGPS9BzULfHxct8jZwTZUEWobYokZWc4JLnUFngaSHrXvXpoaT6PytsQK3uLirpXCRUBgf7ZrcymLF",
  "key44": "2ZyZ8noVMbtgHe8H18oqq6xpccaaLxPXGv46Bx8dUGCXCuh6WYcJjojXR824U3WdGpkUyJWkTJoc83biiEFqbcb7"
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
