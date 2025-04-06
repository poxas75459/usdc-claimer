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
    "2CqhJcaqw6bsBYoUznUfvtzpAuMWnmsHdNgyUe47oFG6EEhxh6UxJd32ZqUXDMtnz3L2vJYpKvUgxyvVn4Z9g44c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26TVHeErKmfFXpoGiqjiFrGuDmb1p9UCq9eeCxzJJpWr8fWCkU9yTZccg513zsNHYf5xDyT5xhQMKutUe2A7WdYr",
  "key1": "fUb5ri24xUADekAf7HP2uoKxhEnCVqATmB1QbtRRadSYtpP9rE7vPHEMNDSeu5wGjC7QdBWHQyRAtZbLsXwut8V",
  "key2": "mxHjcnQsyFGRwo7jVBCwoN5R6Y2UKjHT1LC2kbcUZMRTs4Yta9bH1eGbZX1sjJtBub8vDaSJc2hH3JC22pJHsVk",
  "key3": "4GbFqKgPpbGbCCxkC9vCxJ8gf2Z1vqj82atzPZoLtFR5Sk7gaxNPRNQ8wa6zvSfebiL7Zb7xvWCEJ1NYeiA2iSAd",
  "key4": "Xz4gHZJfxMZKzJHxDQkcnSmvZiSu4xvQ7AXLZS5BBUAKfQWTmJjxoHdDZ3s1ZkPR1pYRsnNWW1XgnJFgcjPeGjS",
  "key5": "3FKSJM5UkjMvf5eArWmPGMnTgzzShJSCsCtYwvzQqm4AxSFWf9RFB5kbBMbQxSxBRnvnYvfFD7NrNkdAWucYwMbb",
  "key6": "4ATuStehs23rAz1XegTQQsC2FkWC3yVQnrKmDYwvGNsgPfL6FJVgvsdsFbCSUsJximEGLZZ9Wx8ivVLGeddMBhAv",
  "key7": "5PZqr8fnt749wAzqU77Nyg1YzNUTBvJxY8J4LYBYmtuNtNpkmhh3BaeSSNqBDNzhS2Ng5TKjKn8NsKFQQwwx9soA",
  "key8": "8VPdWAA4btGeaPvFbnGsZNdFvNBJpP6wsmTsYuN7GoJemEBhcN4SZgTnUCHaumGLyHHaxVMN2BvbDLGEA288Gyq",
  "key9": "3mEDCYkHMg9a5fW9Hbojmxzx4kX8mjRpriJWYhyc8wz74pJSAuqQjJgS2xbi7aJFN4HbccSvYtgptfL6q4rPJx6n",
  "key10": "3AYmLn1Gw6dwkvfHNmLRqwphERckVvkFziUrhZwmMBuF3LxXZxHcUTVd8mLVDh67pZs75FxhipDD2jAA8QMvLMh5",
  "key11": "4rx8irm27wSd8p1DgQcEVyPZbYbbnGYi7mqb9M2arosV1epQ775FQd58rKAd5gzQ5mX8GjK2oyAMDXomaoSdMStX",
  "key12": "5ujKHY8zemaGCyWU1seEmUgpv8w5cpMEAuvacX3UFCt8TyzWQnm8EeadvocHGq9Cw5Nht4F3pdvBXR7hQu9mxRHR",
  "key13": "4UVAVS9XYATE8KA8tYXgSrdQUT6MeCVBazt2EuTaL2XG1xRnhK55MFyqmesxhfddqD8rC7CoZ4H6uTH2yfgUkWFs",
  "key14": "45zkf2SXLpzkJP1Rqozkef2gHNaNzAuqRcmBFFT5gYEP4ch28ZgvJdeW461DkRUs1r9Uk469fHH4jXBox8PjYYci",
  "key15": "417HiDVrAHRpQk6fC8U3VuoP4hH2rzF4dL39EMrwjrie6RoM2NBcddgkr2j5WPZq2DfCAvZNAH4CVa4MtfL38rSP",
  "key16": "4XsZt1bEnzv3bTnLgdM6kUJkQSiEVYw71F1bAJmkbYNVi6DMyEpVfJjU2AXpbekQoDUvuL9qqNUTo3wm35skhjQF",
  "key17": "2b4n911gLuLZKvJYEzXh4uUW2rKsGEWFaS6dpHpwMcJV91E2vGNP4U3EFy29MA7pFrdVCHTtWuppSEDfahon2kzv",
  "key18": "5PP5KdbuV6gKw6PyYXQBVevVTMfs28bYuQsxgpa7XHULK2shD9AfKd5BfeGCdR6Y2AzKiK4TYLaLFok8mzXkeQMY",
  "key19": "5bDys7h7nfCCTwiUw8FqyHdw5ziJc3GvT2DsA2W4uskHp3FA3rf1rZh54Y9zrzWntB5Ajn726iUKHQKhXWDw2H4i",
  "key20": "3hkRj1DvF4nGC2BFRkjCb4pYzmbt8NfUDJwURCJ3fRyAUthpX7khufpSaTMMGTCHoGFTcEZ9Z48pynVe1w2c7jEf",
  "key21": "3NuhtZfLevBkzjDaWGDkUELXq1w71o9bhEk7zJFCoHEV5JhSARho2UsjQ2Mzaygjr1gC74Mc4XkcMFkTcRhxKhPT",
  "key22": "2yCn7fv7B2vTaYGVrqgXL4rcGHxAhko3Av2YN2xE7vQxLoXNLGKndZrojS4tFY26H2tG5QHgz2XDnfKNTpnxBkHX",
  "key23": "xrwKwfonPo8VJoxPZkFv1XdKLUJvPZLw4v6JUC7Thb6UDFhqnWs6kuMkJdNvaDm5aAwcAp8agbfexdoC2VX3Mx3",
  "key24": "5rbgHEgFWKT6KGqLp4V8KgR1yvAndPjXvtsNXtxpM2GGdnB5sYumqnqKjZH2xFCdRoBuizs6yvoxKokznz5n8z9q",
  "key25": "5K9EAQz6HepkyP1edcxatUb54BMn8FCj8W7LsK96mZKCETd6kjPSheATpHpGLQxPpR4cL9CJ1Woz5nXL7xQYjKQP",
  "key26": "3DjBu8u3fJaLkVhQTRUP9Kf6jsv3L4BBTbkdTk1gywGaNgrYuXUbe6dmUCXTUimRExWHzWwNSzkiyJXtMSg14xBC",
  "key27": "SvpW5Pmf73o5v3Z4nQeyvpfeMsYKmcSbXFzvgNqC8RPLwCSAzcA1DiXVebxermm1ApEnaqxD2RSZ3e1EFUjtvKv",
  "key28": "2JSGHqwML2p9Pa7xWaQKumkDNa6KhxawFb8Gjgn6rEzVrP65YozEkajbBfbHCB7WdGu5jKmjSEXapjK9vmgxh2v3",
  "key29": "26Qzk7icZdxxkAwcaDDFsfUAK8oCGeeqsFMKv2D8jTdNiivD33VAkmhfxiBGh644qRJ1xrZeqdTFBHqYrjU2mhJd",
  "key30": "2nG5td1R6fqTPSuGtfdzDJTpcbyheTqARe3TAqVo1AeNVpQco3Ao2V3gt4CbCAaF7yU6HQhK5wrMGiSzqrqr7a3n"
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
