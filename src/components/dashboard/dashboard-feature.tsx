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
    "4Bh68Q4iEEVWNkL6tqCZGQveYPy3w3RX67wvMAVdrGHw16yApauL2FmpWEtsB79pppPtjNeK4vaxFQUBKaLFNdfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sgw3SQtWidSv3uRZTU8BePQRPibQi7tfMHTxaVq8cwpGy897tYdV1pCQRzyf3mMDg8ibzYWBariSVDVzEb4yyyS",
  "key1": "4tk3SS92n28CuPscpt6shFtUKFHsdGLwqGH9upDzwbBbvjh9EuTC9T121gjKdDHpx7bXj6jUvUxp8ppAvNKxheJq",
  "key2": "G3HeNV8tUDWwJ1mZ3zrjy3RyQWpGguazfF79obMEDnmmvascxhHhrVbqypzmF6d33Rd631Di5x3TTBtkgYwpBmp",
  "key3": "3WdJbbo4MFQo2Gofh3r7hckQK7Mo4Ro75tDZLhmT5ipQQ3QjyRdQA9geX1ja8Vf1M9fByoK8QZgD2YeY1Fd3GcYh",
  "key4": "2FQY6TMJ3eZH6qRgJscvTFMQeLgDQKtHW3tk5HogHuoW7B1M8aS3e9xbcqqJMxzCZkNUri4E1rHhH1PnynoqE3re",
  "key5": "488DKcLECMs6RXHAPepi2WTrZnQ4Zfubke1i3yHYTAn4ZBZVCs8JBLry6yvtWHTXW12hvfrb5z13oM9Q6Q3tHmLo",
  "key6": "2dr1eHw7fvtbYteoJxykQe8b8US3AZTAamJpD5R5LTNZAhgfPk4SRVBpG92ai1omV6ThdpLWE1RC4i25xnQZwhBM",
  "key7": "4qqK2Z9TuT9JwLNYaRdJLX6bhE3ShBzA92WgPqStDZokBANr1cgSdxCXec68YRXarZWpksBFxa4gxfX2kKWCBYuA",
  "key8": "2mYyBfgtiNZUXfCMawzbN4KZWz1iamxmRj9BoqiybZThsqcgvFJH5Ur5DCsWPsFNUox4HgU4cvzZ4rhezUX3ttDm",
  "key9": "2hryCQent9GE84i7sFag2rWeBQB8Pe6F6txVFuinauPpnSHv9ijf5NczYedHm9gYqYpYJHFzdUwvDiEHe4SBnZuL",
  "key10": "4aDsiNePrmv6B7NMnKHeW7VujodkrgEvK5BUBzernnRgQFHazbkWDUiTQjQc7R9o636Tre9uWxWjFtpYbrmW2cno",
  "key11": "3dvc4uedue8naAyNyqUyCmiCnwiUJm3BAefK4WmKKMHUjehGU5e3wNWi3niw9mNaRVrr8iKUHd2BYn4dyfU81uxf",
  "key12": "2KLELe8RAJcvAu4NxHHtkxJqSz8cyqfpFhrRV5xz4H2AxHZbjnb3cfeSoYbuoiy5z4wxQoks26yXzXnzJtFRRAYT",
  "key13": "2u5daxH6xXaxDB9Wo9pPtNQkZC3gNS4pm8y7uufX8y2pvdLyuqmhabRn65aYZ9sbA6NPnpaHtTuFzdoTgiqbY6af",
  "key14": "ToJE1SNa556jZV9sp3QQDnRpc718TQFMW29wvAXDdHQgt9WXLoqDwaR4rwrBuEYu9JBJHGj7ACYPYfcLPY13Gww",
  "key15": "2F5FrXaQxiND3QFN8ipKsa87jBkbcqot6fesowDXnn2AVq84dooD39Wp7Hi3bwXuyTYkvkRo5LnQARzDDF14J8QH",
  "key16": "2nZamd1udzuYVhdjVNuxZVZWFw715SSoANpJKy7iuyc81xszzTjZdukZHAk5FabJWsqLycKrxrtLdeq9z3ndKmuC",
  "key17": "5bQXLtQz2fmzuA28Hp1HHYGbeXy43VFCM9zeXojctRf3ZcwposCM9mLGdeqnLKm8RA4k8Tsou7g3UrixEZHyUb9L",
  "key18": "XBW5ubsKwRLcC5bKC6bKtZbM1SePr2bWyeVR1jtwqeNZN4Aa816D6sPrHczeaajzw8yvdPLHT2Ngqj77Qu5krfc",
  "key19": "4YqK2Rjp4KPb1tnppBdg1thTxnRLP2Bnymf48wRz2s4nByA3z7h4Q4g6DUsx4KMg3oaxC3dqW54y3nHwz2N4yMU1",
  "key20": "3NJicDqTv4cGMuwRsPo5vNvTFfjfTyesCy48JDkgXghfLCBdLRBwuuEHD7GEG6DJPeQKnNb7c643nZ9GAuUJRqb2",
  "key21": "4SzHSRGokHWtYxdj5isSMGdDZhWCyFsYKxgX2JKNnjtqbnVfbjtGAfJxV9J9oAii8dufp75Vygop5Qv9kAX62CRE",
  "key22": "5ZEJayPatkUpqh4V2AJNPhx3XtJwtpF5EenkvPR5zHmTJBmoX2bcnkrusmea2daQK8dnmLytmPpmuhsHgsZYUZ9a",
  "key23": "5WAMPNHzuXgnXjgr2V5xqB6FmM15WEjqoyf6sxkrfCjVKCj69WuRAwEDj37Fz4JMEPLTvYs7PcB2eEPkZmM1YFKo",
  "key24": "4juDgchLmCt1dWmAZAAi9SCREEkeqjGAwZrRJ8siNnXQMnL55e2JqdVHbhprTvW7v88PodS62SfNkQrasJnip9sq",
  "key25": "2xZfAoUfuiJizCnJdYYtJh5D2N3ALf5FUAJZk7fZQdgNwG2ub5gcRvwcXbQ7RoiC12X6LkbXWYquMpyEdPTdKjba",
  "key26": "3PoUWx1ffMpQwvWvxF2WqwhB4pmyDhYJfPNtcicWzEXM8TBj2DtHRxHwh18aqYBVx8sYHLPtaMeGuY5RfM16a3cp"
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
