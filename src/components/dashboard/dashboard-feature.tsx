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
    "4f5tnRDkhf1uAyx7h99UyQoMjZKxmfLZX1Fg8WdCaojUkYz2ZGVXGWNYTmqBBDGQZVKTSZcr2aUFiD1BDk1HwESE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dFUperYsGwZqiPNM8R5KjK6qvGxRYx48P5UBbisc8UiY1yhCRoaCpuUumq7QSFdbd3kfgvEyFq2fUwz4hPriFdQ",
  "key1": "26mor6QuRCyVunYUcvAxbJcgyue2DheSj3Wgv5zKWkZGR4vPYh53rwqHdFQyyASd9ks9MmZUKWFuyu2yAVCyjdeu",
  "key2": "khnMe5VuYoKqRLuuUoUJTRCqbGTTUnyHP7rehZFcnWPDV1drsS7NWTeFZ21w93zkUxAFTPypyuNnLF3b5DKGDCs",
  "key3": "4qx2MWY8ythK1C7SME2fUV6KPThj77CvoXesZFw2GW1Vpo7NfDCjk9qwcDWB3ieNA2d8op5qZkFVtinmvnMEpSMf",
  "key4": "4TvoWAbeuhKPNww7tf9BoZX3dWXZfMqyraBZbTgHatoBicLXkEDh95Y64ieTh5AsMDYrv9JaUGEgQcBvCCsYyf5e",
  "key5": "5PoPBgKkxmCHkrAM9cS2h34mFUBxsQhrPri69i8hbFLAsgym2QsPXDS6yXxXHMhAwopsDwvJfhso1XJfZvc7U3Xp",
  "key6": "5NX4f2a1t4xfweB86CHfcD1kybwkQXRpgH3ysGHaky2MsNFgZiU4cPHggrbzvaSmkt6aHDyFUZqEpiopfAkBRqQq",
  "key7": "4nySkoTRZTZgU9zyfchEUVBA94WBKK2yiwR9UGNZ9XSjYbSv39eT7DV6Xn14wTyEwp9H2nky8ECEG2QNUYZjFeVu",
  "key8": "4Vs9ozSCYU6PDQedUYX94ii94SMCvxbRMY1jbsjfSc33soJjZ22mw5sanrwZ88ycMGvjguYgmxXRzTGZk56aG8cR",
  "key9": "2AQqPzdLADFccj2YHBU2JmUvQoxPRAD2eZzsr8SuH1T1Vr9YPG5b6Q3Wo2pUPTjSkRPGugs5FivGcyBtbG3SNVWE",
  "key10": "3GWBr2FNjXZTfuQTwZjrisnUDKaa2CeFpzPrPUdKSsYhEoELBGUATLWeyr1BNLYqbqdDnnrXSsFoRwKZB3Fjw4cX",
  "key11": "4pjVfwebQtc5vW7Vo72Tr3PSyisiJZ4Xwcx54v32R8xvY6FaXGqDWm3wJ4ZSu2h1xcAkXp8F5JV1oc1KvbHpgUxu",
  "key12": "33ohpMi1YcskRZvvpCVpR2JuJdc4gYzXfvMdXzahFR78iq5vzwJFxwQcco6sXKK7Y8WhMZC9bftPjbF6RgThvC8r",
  "key13": "2nDU2gxipgtkL5SdFsuoMmMLJBFzAJJUGFiuuCbbKjvVP3CdCcUnp51yLgfWWmHyjkhSF2ncRtDCT1FLzCG4xGqA",
  "key14": "4oifLdHdmYvCRRuHntiNjqTwYtkVsbjav82XtmxpRLGEvn48XXuLBWauZuqL4hxtEVxnDejAooPffrHniNrdTJw6",
  "key15": "mecBW2N53hwmmqX7o8DRjEupQojAgWzxHLsPuwPbh3TPHipTk1PMXV9LiR8LYarukzmfrjFDfcVMQWsftJXnQPN",
  "key16": "5XTrQSbw4TqaamE1rMmomfNXvqgHjiyujXoDrtBxtevatJnExvuYPt6WBnHNW2aWFtrswP8iBJVBnhYEG52GYXrG",
  "key17": "67kyMaBLjSiGKEs3Rd6L2oB9uMTRjxckimejjWwJVSDFxDnfu9WL4wAzTQ8QYfcEMrD34jBcJSC6r3CmJWcHupbr",
  "key18": "3VWaqkvYBj337sW7Q1vTtfs5QPLdmw4Vfr39APDrK6kMFTpZmZ1AhEjHBFrqzEPbWp2oXsKw6KMbQEizNfrpGuZ8",
  "key19": "3XwCnXqRbinKohmneNNjmQ9XmqZX4LEDcEM8K6EzCVAM8mEmMuvEv9KyzX5GbrZ3kioPkHhRTYXQKtdR5WtfsuJE",
  "key20": "2DD9kPQZPJVuvNaSUC4H8jcqS3SwW4QeHY25Bu7KYQyukcxTBNE64H176KqeQux4jBXLwdBR139vrLGHR7ccY9Xn",
  "key21": "5rmhRU6DLBBoFiWBW9j4BmuKJpbRVgRYpxpGesGWi8iGNWTuyCSDvyoC28LUsW1odzXSvZqHYLEvgDfP4jMd3PhD",
  "key22": "2P1Wvf9D9rBYMpcxxKQddRJGG1SUFg4jp3fjMRtH4uBFKwJaN7didPr5TBBVZD65jcP6vMmkcfTub68xuyninBWV",
  "key23": "XXknJQTTFabEdz8JABziQEbv8CgrZzSCxYJDKQb3p5xQJMegHM8tvXbUDKqucE3xzxvvVse18EZbekER6Nsi5wi",
  "key24": "2FwjPbtmH9R6LXWicC22rERemj99PBnxb1RWPm3TN43L8F8Yxy3WvXUVX3HWKH2tTeQ5xrgAh3NTzqYDutgAYaGY",
  "key25": "2Bnf86hqsDQvt3NDBMcRpRsCgUU4j6rnkNTbMGfhuNWocC45U377onq7ocy5N3D18Nte9gGALaosJ3fKwkU34MNE",
  "key26": "S1kPqbsM1k3WKWc4MT5ai4KQnUx2FEGq8dXzkb7m1PnT5PEBZGJzZryYbxCAKBh8s4kKgmVLYmJiGtNVcw7UHtP",
  "key27": "5W265zmi2e37RRbT6CzeqonvyU966KJY44dzZvnpAX2NmEnqueesAD8TPQ7CjoVK1GRaJzA3fKN75peSGc4squHt",
  "key28": "4FrDoHuhBS7gXnJpMdHRtXs5s9fkxywDWKb2GuukjtChuxAb8VH8gPB39jr3BnDePk3uUiEfz15N2egSQCc5EASW",
  "key29": "24mgqyuB3LtTQcuEgKStZf2qFLpFKCC2zSA4LpLaGcaMWo1YKYp6YBTVzjmskxMyPkyDQjk8yMxaYNZV6XLFohyp",
  "key30": "2W1DocYLHJoWmuaFtK7NAJK4kFHQu4VdCTg84mF9kLbWdzktmVLahgNXTvFsbk3ERGqeuLU3KZhfGA9iFxwKhTo",
  "key31": "26yw6VFPVzZ1dMwapDdeLXwYmdynq1H3LhQCTaMDJjoAwqU3Pi7mHdp2UREFqwrB38DFQ6A3o2NBLKd2kw9gpLo5",
  "key32": "2L1pRFGH2jK5t63SF32MEyAKB9aWxeP98mTw4sXdrUgEniRcApYEjbNHaXpkRcFo9wmpZY3ge9jFvf4cVLL4f92U",
  "key33": "2uBqFnxFZz3sy6BDEonj8ijfZe4KocqRiXJomURBtNzoE2Ni1L2NgMPkVu8cMw7qA5z5noPcZvCd5z322YuNqAs5",
  "key34": "Q5VhQtZS5X8aA9sWGLXwygd55Xx8CDhF2f1kH9TP6Q3pSKuTgTEifx9Z4Xzd1jw3U3bTZiKzVvsuVw67Nd1AbWt",
  "key35": "48VAenWcsEJPoLvxmJ8dzeMEQZ4buU5H2aRiyWQyQQ3HDFmbQBSGZTYBtiVeHNKg1oYb4hNkbdVcpPRKX5isgyCa",
  "key36": "2NZnkkne3Hv91b3SYfjQ2R3WRhca28ro8yzzkexafdnzYckZtoksoZxi3ZnGPgbBg9ioXhU1xcR74u7k4pYh8K2M",
  "key37": "2jFAmX9pP1JkLo2TGicTo8K5p8YuTiiYWuCRJm4n7c5g6BHeGtnkQoSzvynqceqxdkTrwfd4MpbQR47FErCy3mfu",
  "key38": "3M1KPyiEWMTr9Sz5XcMyC8ghu8Ty4hr6Hvtws1ZJdYK7g1y7W9q1A1M1XPt2zToozKGfLQa1S7N7dqUnevxX32oA",
  "key39": "2anGdAET63VqACJD3hgFDWtKYkJ9Fcwn9mWSt3ubztp3dJ6dUHkWA5i1uUNEncDwv4rfy3iUMwKFk6x5vmiXRdZA",
  "key40": "3jCYwmWXSVXFvonrBvzpcpQt1fGntTzL5iBa1uYBSiscBCs1V7UqwAUGVdEAWXReK8Yvwb6ZcXoStEKu52EmjD4K",
  "key41": "4qhAtDsKEhJKShVtNEuntexwd6Q7VqCovEfN1GGjXsaNEsBRpz7s6kL1saQ2jSjfQB3w4nsL8ApHgbUxREMFewWx",
  "key42": "2qNrPNGfuyTehkLhCTXp3kykf3ZytHY4W5nw7F4Z9KV25i6p1GPPiR43ka4Zmt5EYPDgP3JRMu8bwc3gjFQ6uFW8",
  "key43": "2aS1ptEefcCyRAgZ2neJ8FQSYnkk6bLWYSSrthV4tRUTu6HRiSeNZbiHGtkjzeoEpUF1xmrRE7wgbqJTLMi8Fi2m"
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
