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
    "4AF3m27g6HwPW36fxekoVzfnjhfq1m2s5gMS7UZRMQs7JL3oomYDgGhSzTMsr2X339qCijs7b3MspZVNc3jUsATH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ZwHiBaY1miw1YwtiuZGwstfYjAx2W5VpHzLUwvNPr6WevtYEhbKRU5vPqtkYSerMs3QwUgMQavHZj71TjFXzU2",
  "key1": "31hvSeccwXzmzQgMGWhC2CSVF9Nz7rzjMWJYcLTiUkWEYKA3k2bEs1MDHJQu7h74iZ2aKDwgsAkC5Pjyjv32LQCp",
  "key2": "j598aW2tKbtRzoHbRHyPgNwt7BVGcDc3bXQtnBX5YNBnaHkvfK3bE3qhqEeY81ZaLeWxk3iAE2QcMRtCtoxRuNj",
  "key3": "5MiTohepNnmfj8CG6u34bVqSwQfNQi9G7nQpGkGoRHS1xAqfw8qgdJAexxqmNcwuHx4fokHeGN9j9JYChM871txG",
  "key4": "hSYDuvufKND2R2NJbh7XJcCSm7HngUn3JSUdqRxTxGM8zBtHmMioFqwA86qh6hm728YqETda2GeHxPoemyJV7g3",
  "key5": "2ZsiBxMELteXRwsrid8prV1PQDXpNEAErvDj8wqsHwsyKKWB1ZpZM2iAeiLnkUhnjqEUS3J8qFCsS4gM9i5Asbc9",
  "key6": "3DJ7PvGnmNfXWCJ7UnYP15mFqzJxWH111QPY5vtHnsgNyYk76yrHrVBtA4Go4acRvek9i7Fu3b7mNJvdYvaP4bfY",
  "key7": "2vu9wz6L6afgQDBq2Bd1zgMZ6ALPoABCWbS9SVhdnR34okKdAEynZBuDgBdR5f39XJ2imhYSaWV8bQaBPLAut19y",
  "key8": "4Y2Ukwr9rf3Em1ExgCevUUQwc9J97ewJzLFuRA2stjTS8PvKxsoUcuQabydYZFuawu85PrzbtXN6ucgyFjpXSsYY",
  "key9": "5WKL8HGThETXpMwnhhMVraU2nEBk8PsHV1Th2JENytK1g6oDJUvAV3EZ22zBVXPcgji21RfkPPx6rXnRZ4B9bSrR",
  "key10": "4CJ8tgk9nQc25Xo2AYMbAAqajg2CoFpSoN9EvSnubW5Fvoz6iwWBSCFZfgqrfyniEv1Seq4iEAFJFkX1PcxSizh6",
  "key11": "4CcsbtN3gJftskSsfBjm8hwGGChn4REwLrEfszWKQqXpw8KMdv3rpVvsYbnBXcAbw57hrWSRc5LSau8pqDZb8i1U",
  "key12": "5MXqqfsft7xnQdwhET2VAbUWewzcCYHQs81QG8zDLuShSJhHMK9G4Ft74CMQDWv9oKgY8kZbdQPohC4bmrn3ArxV",
  "key13": "3uHNqXVfZ4g7UwqDsjSoeNfXdEQFf12uYK1YcMytuw71KRNFkvMyWLBVfeBxekB5MsvReC4hHTDDGK5JZFoXRYKa",
  "key14": "5LkRFh25frkGqMTu9Lfap7cDjT2aTb821tmfMLp9S8edQchrV9LiHVN2giU1a9edjCbRghPWSretSAbF3Wt7EPKZ",
  "key15": "57Ay23yZDqDHgqvbpJeNTBu9ZuvnFHW38Ba3nK9HTKZeWfd6FfnYiVMnicdesn13UAakzbcpYbq6rWGfVJbwHcXD",
  "key16": "5CznTu6aak1EnakL7cXypk9FY7eeRyRpHwpc5pb34WoVKwf33AYxUcVUTT5Sq31vsbrkiJU1qRoBqs7VSXjCSUCe",
  "key17": "3JA3PjwLMeoFz7Sa2th4U8yUM9ByAz2MGjxhZb2NP4sK9kk3gYbZWeXyUf4DuBT61MriESdTCFLoMVmeQp21i3QU",
  "key18": "3gUVJsNuXUuHQ5jaXBbsZ5Mnc2v6T26yMxnypZUyMrTYKNeqrjK57otUCvfXPAMWgz4mxZq2pPK3xqNv5P2dRs48",
  "key19": "3jWZW4vMGJkxTVHjXjYt51Sq2NrFtzufHH8QsVRPmAH9BuYfuP7W6XFmWQvTT97sWz4Vs2Hm13NYaDLr7P9UAYtF",
  "key20": "ziUHfk1AZFfiTYTrrA4eBHC83gzxegx6j6a3XZTbY2MeN4NQPsH3yV5xfwzpDD86f2jKVJ7uCxswn7ia6se4hqX",
  "key21": "4ofsy6CdX2aTN1HWcvwJg8JVnePCLTVKYZoemvJCEHxT27sfZ14oMrBb9MSPL5GPMkb3YVz1NuiLTURX9qcUc282",
  "key22": "YYpLCrAvLEvGGRDRWq47WLLokLBrXwe55EGL1JUn7LPb2MDp8R8q47rxZ3X1L72YSgP2pdaE5hWowxTpjSQ4FC5",
  "key23": "2R5VbyHRHgV8EB6b6D2i39rrc4SWUAAbEfKGf1obfcUNiNPTAEQM7BdfpkXXYw5gqzCqWkFTnDAutRVZzvSctBqT",
  "key24": "4Loy2Keb4JSkGZkriYKXpozAQ2BjttwWqZFagZxiBwsLdtLBpozvveKcadHhsbKJ7K9UScs1Rk57SD75nZdDaVKE",
  "key25": "5p89AvswReQGwKRhYRLquKNvosbZrqJHrGY6AxSJS4U25mKiTM8dxfNxk488igdPqQuAHHDHsKvfvsN3sQJZyizk",
  "key26": "5BrWc6EWmuZcQhkA5FxVyepDdJYLwdZJ1NadNqJo2xvyjvgSEQMb4HeqJbNqgXRoRBeve83LVZaq3BwhZ4xnPDab",
  "key27": "dVfqnGjFo3DsBw3uM9Pq28VicEdDqJDX5H58E9Fd8XyUJpqDR3UCSv4Qd8y1AasKZxjzYT6u6BicZUg9b4L2mm3",
  "key28": "62FxSPWas8itMTFBEJG3VJpThYTSmkptFrdwLCE72MQp9xpaoSdDhUnA6Ew6UCuAmw4bRjPB3aevz6Y5qzUTB5UX",
  "key29": "3p7KHzuZbiHaWJEpsmU4Pm4w3ybUYTz1D86so8dwE8TfLnsJJNXWQEDVxxahF5gFPYGTDVUTkLeMXZWFUfkQfHXn",
  "key30": "2AHeGFNCUe8Mo5JGHTR7viaPVWkFo8fMKeaN29doAo2m88MwqmiHYrvEMwTJ1Qgw2S6NaZsgVVmQZSHJAr1XqZgr",
  "key31": "Z3NpukGjEpWmRVD7wh9BJmSQqAU9ZQdoreEQGaLowCp1U2m1a46zygPL4rTSzbA5qJfDeA63FbzZi5hzwGgbohM"
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
