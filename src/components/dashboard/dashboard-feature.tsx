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
    "4FQpbkaZR7GRXba8TNqyAsmPi6HUiXaxobwbWHMbhPaRnf9cLvdqgvvwtdqW9CzAuJHGsWTidaTWo7dhU8cAGYG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LrEvj7tLsoZxNecnkyWYtPux1XY9cyaW45jVExQqSSdEcJbqsZFUmHYG7HmWYfWt9xZRnJeJxGMDjCXmqBrEZft",
  "key1": "2L4s5o7JJXcRLpf1BSuYKTLtrQ1xPzQQUih59WHHyRq2YV5K5q9mb374EWozKZoxnW1n9WXiimnKmhw5HZZQ71VJ",
  "key2": "pJUk1Xvrt26hLeNxYYAV7Xvjzg73PmRXJhY1j8pd5feZytxPi638Ubj21ZKq4qZusLnCULPzWJX2UCUmXbhzxp7",
  "key3": "2NZCTjhnLBZhVxyUviTmemmS3FrDBXstbqhNVZ63FiFiQE99aPgc9tMHvoizTHDDz7aNS8KyMHLcheR9qZmKXCwb",
  "key4": "56pGVkRdNQHyTrRsA9HWSSEepNRxbgMCryWiwXwmkNUUnmcykd3GEihaKNqdhxLi9G3KiMWH8oA1CSH4mTgD78gs",
  "key5": "23V1JdqyRbcbtA4RKT8Fozczm1ZcQKb1WmExnwypw8Jhhm5GRSZ5T9tCoFNX1onMXbab9dYwTUo4hp8wFNuWA6hj",
  "key6": "2UD5MbKK9FeoF2ADDko7YF6NxVeEi7CVAJehMHXzcVZEp7WuXtWAyoFaX4FQy778DMBce7pL2BPBh4jC2eUtHhur",
  "key7": "5pcCuot1s7TUfZxXtRAjsdS9NUgKZFwqf7qbwVb2amV85Guh16PTsvMS5dHPvNv2cvcqhrkKHBb1GXDJTizZKGG8",
  "key8": "5ricCQhMtVT69HRCyvmr1GtySph1HxBfGSGVaMmGJjdqRLuH8xBT7Fo2r6F7tASYx8e5rqPNd4oBzeSMDBhquim7",
  "key9": "ZqTUvyHh9DZbSjZ5jdtmGaH49oF3aMCa7CfJuwnk1kjF4wWcq8Locy7zjfj9jNjngcAAnJ54dMN1yrD1N93rQzQ",
  "key10": "58bAQLW4MqTPXrVY9b77VNnHAv7foaqi7QHKKG4V9mBTWJhDe52MC7KjXYffyKkvyX9KY3rkoPMT6Vy1ECgQBAYE",
  "key11": "2ZznEsueGFqArJvcsTLjQXnb6HYkjRTvDtmsVndSvSQ7KivqsEZs2YcQmLuLcFJv6umPQzNMrguwsDtj4fDK1bBF",
  "key12": "4u5Q4otQrvodFE14r5GXPUwqwTDyP2cHwkxMxKsGpY5PjZePaLGnDiGQ1G5wc2Fcym1oZmtfnhDX916y2PFUcxEZ",
  "key13": "2CpiCqTkusjPgkv9ugNFhi87VnWtUaqDx1Z121nbYkDdjydetr94afCdVfPwYUYUSgJSHZq5NbgbJyTu5uqQhneB",
  "key14": "gTKF4adu2EsnsT3mbwkzs7xNUpj84tqePqSyEP2iMLg1dtC7mTA42fQaTiDRXtFGefFiF1H8r5UYq97xubLgbm6",
  "key15": "vMqfAKjLpf2CTa6NtioCYwxNSaAp4or82u9NTmBS1c3qfTF8Ck18TZhGzBtXHwmBvMft8C7p1LyPYTUiK2A8Py8",
  "key16": "Gt59ZNUohShyi2uQ59Wdgu45nrtAqarBR8DNUhGqFa5mDN1hbkSGVtYbRaUuTb3m8nM9dETwpofFgXbq3oYB58D",
  "key17": "45pcMy45vfYTxVaPjxVeDxSVUg3hw1n1NxabvvYGXZMzQvvfvJfR3xqUvj39SqR1ARUtYcacaGs9uV5PYoFVbYn3",
  "key18": "3AFARrvC3jUqtcn4csLVbxmr71fvC93tFceFAt5ABMsJfAqGvRwc9RHzCueChfP7yfu5jQ5gmVuftW2iRhiEGtGR",
  "key19": "5fa5z1coSztRrvZEjPSDCgW92n1cE5c5KoMTGF4GLVb1FXg1qZWUS4MMpv6vDoFZwwY4kbXosRiKs2RYJUJdwNwf",
  "key20": "5cf2w8rKqmu8SKnVTB8P95AzdaZMybZA9Y1SohCnfEjPnFD2WeB5djeg4Z5uiX2PvtUxZKJLwnwhwjUe8dP4GESU",
  "key21": "4c4DJr5bfRWorPwtBQ4HiGZqpVqpBwKsj5RKvYoS8rNm3D4YyER7D57NsPSA5AVfvf2qT7ePGPs6NecQgDZYVdRe",
  "key22": "JkekkSKdPCCDum5U2LWU28TJqrFxNnV3skS9R373m99QgxcVKhHGe1BxL3HDRUp2hAn6M4HqwMMFKEn3iAMJ8Dg",
  "key23": "AN1Wm6J286soRQz7NbGC45PMVL5SU51CLVsD4sdyzspU1GB8PSoKqgRya9j9wdv9HXcHDH2G4qUw5X7qtc93ewE",
  "key24": "3DGbcLyxDrc3cKgwbqoJooQQEwrouHHwn5dEEM8qoANpCP2NiwhSqUsJo9Jj77oTbhxdQ8GcDnrtof2BpF54b1na",
  "key25": "61xsbvCzFwYypxx7VTBgPJG9mxZmGGZtc1ezofmQeuPD1LxiiGpaBJaAWmKz8T4JD8axjJM1WNwhm1TduzHmpgsC",
  "key26": "5Y7mn4y95kAX3cSgHWXri3cisPFFw3F931aeryvgCgQGjt347faHHjMzXyNiMBvb7Q51PaYB6mmUfscUVdjnMgJH",
  "key27": "WBRxdtBs9Q1NwfTKe7UHJzyMebnKjbf8iLB6kLCg7yftrWPhs4X6jAmZEk5K7KPmqZXqrNuybdavYpCwt5kAXdi",
  "key28": "vVT7AuFEngu1rPZef7wAT7yuKyvUxjRxFM5esKERPDpiYvHipBQ18JrqCwtyD4u82WAY5VDtPa8P5P6xyRYn3Fv",
  "key29": "3cBAQmhSgWEZL5zGxMh5Jmepvb3BSSyp5pTHMwf3VehqPw5mDEFeAJr7js1GjxPm5kGezeUDGaiqi5SgxYsDXpBm",
  "key30": "4kdtpfFfWw3nYzpuidwGdgpa9N4yZz1WpHjUN8AT59dRYvVySxxs1zhZ14Hu15oBKtPTAoXdhg4jZZFBgfebAxrL",
  "key31": "3BW8UNFmBTpSdnwuUPN4BPUd4DtvQdDP5DoXJ5o4DuThoZ1HDRKDM9PGdZxJXFvpcJXwda3dsK6JTu6hg87quST"
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
