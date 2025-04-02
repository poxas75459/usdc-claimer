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
    "5zH9Y6vFF1fuxVBHGChP4RNiP5k54ekDPqisVghrgC1wvTEUXn2s8V6PTEJXjGN6E3jpimYaokgJqcFb4R1HQN7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EuNW7yYE3SBYdiLDdTKcuS9NTBBKskhzXf8Mm13uwi1Tmvas8hutmYJ9Kjxq7dP3sqnYgVtETR8p1QvFh8sRomN",
  "key1": "dCUHRG2TeNXNMCYWV12uVvyXAP3K8qqKerk2PHjiW1x8FD34vSStSz4CVuyf4LpeJjb2K52tRXPdcQJgf2giyWq",
  "key2": "64NShck924TsbHFWf3ggt7uFWcAnBBSy6DSYz4GEsewd7v7AZcQv7onx6qhxRFD4Y73NHkvXoGDmgzMyVQ4W1FG1",
  "key3": "63Fevf75DP8KxcGyfi7W7ffXhHx9ihA4Bf2GwbyBjkUrS579qb9E4ryvJbhr9srW4WJLNecBRX3L4mcs3Rq7mWB9",
  "key4": "5xNNqLWCM6WAr4BzSFQh81kN9qobBXd7DdJz81sUkqr2R4QZzBgcArVKGmnSSj38pyFWrXRuNrWMmdbNhuiMs1rW",
  "key5": "4CupeVDCFnuepCZXg3cQ9pugkpzHFQDbx368bTEtAsaSkbP9LELPDFUTjRcGwqdyRrGNvTEbTfTzk1GrdQCt3VKS",
  "key6": "283xDF8hEkbne3Womkw66ohZn4s9ujz8kHpJEyBgcrwGVv1WsjFy2YVNtNgqCc547yycgg9idMK5sRAL6tusd29g",
  "key7": "2hGjK9Q3ypMcaBLRaK447JrvXj93sdWfB6ogCALQ3eZnnh8ixcVxfsbY7hEHHkGXMX3FFcLPHQpWUhnwSicequvS",
  "key8": "5dMihCuyn8kZRe9dYdZ99edp56rER6txqBHJ8DzoBPzjPr3JLQBuyyx7Z1WskDUrKeXehErP1paqmv9T32XWhZci",
  "key9": "27nD9uGwTQrg74wnH4PQpqe3wo4F3aRWXiDZyDWvPqLrKkP2rrxbhpwbvxEK4V5vNK8kTuPAB5oMPjBDEghbyYgx",
  "key10": "3gUJ6UPP79V86aptJtAQQ2SVMNUteujDVT3aDzruhFJYH4Uj3onFjh3jjoiaCGz2LDDPbvcg6TNQ3oJUwNFqWhbC",
  "key11": "GJqHTRc34gEqouKaNoUqAVKCuMiwWp9zj6faqK1ZHRV5R3F1JkaiTcrnYcFoKgYbuiqDLTFu1tVrR9PuVEMCL11",
  "key12": "NxBXifo2ygf26v5nEV2URpihYsSMXDumNwc6buL3xqP5WiK7jpDaEbAy4URZdw3c8sdc2WsCFYgjQXZahFq8Vup",
  "key13": "aVcvNRQxLNn9oaPWCyE9CWWN5sxaJi8uMYd84TigKVrXw3sSJcjFf7pwjSvpFXTgeyQpzeK8dtqCAiFMhB4qY69",
  "key14": "63tmwt9zbPBXFycaL4gyQfD1ZKsLtob7KaEGSEYAXiutALiWbCFcmb9BqAt865xJodJ2raEtfa66hwYosh7x4EbE",
  "key15": "4TeVcfjkVo6J63fwfsRXJ4u9t12LzK1KeELPwuLcNNXEuoUxXQPJcB69BN63td62MdK2LZnHR7s6KoCN84hYTMTN",
  "key16": "5QBCKL6EzDKtQJmeyyKthDfyPa1Hdz27u7Aoqaaf5jJoymypWWqFDrxhbf8qPGwRohvgG4v8uo33GzzoVuBkpK7L",
  "key17": "2oGhfaNhjyhruZwe2fsVTUUTyX7foixfTJ2CfMBBBofXiC4Jt7SqXaDrJB6pYrn3CBbdEQMngCf3CbqV1m3ZNXKQ",
  "key18": "iDiwLNaKH94Ve8YJVkazGEGNWiLGevyWxCUXruFfQRkzcotYrnp24ay6ZCKEdoiKRjS4QMjvU3d6Me2bnD8i8EU",
  "key19": "2iqzqeZSE6tK7LB3QGE5eDxDwhDYf8TEFYLCaMWYGVHvLcgDFyyibgicYWRNSDVPyXH2bYTRiRrL7LEVfVrWY6mF",
  "key20": "VFxLTArB98MGcXiq5RtK8Mz3Ma6LZEauHX2NoSVmJpQ3Y7YgyoetPwHfDPvmJxAXfJn2G8JwmCvhCnx15P9RVk9",
  "key21": "4KpNrD14YSzUx4w7TxvReJDSS6DAZQ5SNmjyW8yu3NTiTwnvzV4sghaJXEGVEJP22nnW8GsQd5ZE4KHY4Hhfo2bo",
  "key22": "32JNV4T3g7ra4FCMGu9p5J61bnHGfJa9Y58Sxihw4PA6ZjQk7K2BDhXnXyZhXYGNWLNoea8NrzPXa9YQDgSsddF5",
  "key23": "3MFpqsQ4ujh6sJ8WHeu4ZALSDBzYJNCsudznNJwiV7Bm4r9ZwosYRgaHZed7idM3DJBS9HYyLDr7ksXpsUPwNYnC",
  "key24": "4UQBMiiTu3mc8Gbb1QCxHHKRoquagH4zL8GrRqz7tC2JjEs9dxXknAk52cDJh5Ak54KzfFrs8F7bBEDtHWmKCDeN",
  "key25": "2K5W7CxWFs8oF6SW8B93xSUegj4L4kjRVSxxbqe2Bcsy3B4buQmwfyKDfiKXpLooBTGLBKJLgZAe8U92ivMkG9Y6",
  "key26": "5tDkJwiFoVRwGYUg8ZTQpTCnhzpomf4GZqBhLC3fbAwmCYm9g98qqooxCV6Daf8if3d1HnALctyEKX5XVbQvwJZW",
  "key27": "524zB7g9ARHiNdaQpJVnLzwF3mFv5Roc9ToBgNaCCA4vqyJFzUBp2NekaJA93gMHq1AbbUhuAx5GvQzpPerDsxVR",
  "key28": "2hXB6WFHCh4cxymTE49TAk41WRLL4BtpamWvcPDoZKfmxF5SrcdqFBZSP8WKDFyXQnEZaQBnJrwA9VDh6MwcUk7j",
  "key29": "MXd7hugGzc7uSXCY7ctcr9TYtAeFusstmEGPKGx2c7Ufp4btXkG72FGAF4EsfbfXqpQ6pcwCE2wzPULLr1okHfp",
  "key30": "2equZtsqRWursMfqK6KGEBWB9J66mLrqjy94prXLF5fzoWfjr6D3KKmH8cgb7EjAQPxFevGVandRng5SmBDoQo9b",
  "key31": "5FpRGUVKXoZ2rN8GxUx78nJgX7b74bdmJve3kRPjXppLgqoUpTPWNPyMnoe8dGezuBctyWU3FJNFVaYjMeGRny4E",
  "key32": "4jPN3zdctnPY12C6C97oSDHd5nfeVbGN363uLnreyZfvAwfk512r1wiadNKVZxTwmqyip1PYRdh2mwwgaXxLiNtx",
  "key33": "5bjkKC13wWYmtqsx1jfhaYS1NtjYfuKWuHQpu2rhdvQHjh9vqHC9MkExv8KmoMRdiwtyCrdXYhku7gpEVR9UvM8R",
  "key34": "2CVaFRyXjRrXs1HEFoEYzvwyFwQLi67B5P8zPoxjnvkjZjJgcUkoSN2oAiw8XZ8GXE5JsZAeRg6FrTE1jkYYEBny",
  "key35": "41TF6uza1QeNKHJB11fCh27xEGmfiXTi5t4yjKAa1iTFS8oNeHMEDajkuhhT2B95js1vpyYAwnUyQMroX87VomBS",
  "key36": "2413K4joTLyQHBp9Rg8c4TaWfAP2EQGufEa34RwbrCKq5xJTEzHewQ7jF73AcNvRpi57rT4VKJS4HdsCunVXnyFJ",
  "key37": "2UPiPMxu5mRnpNQ8nRVumY6PAEPp1rb74uTwvJLuXdi7tiaCLhVZSj4b5VCbzBNayMx6fBjHkttwhcic6KsC2vNr"
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
