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
    "BL4wVWLjQwtTJRFhfxkmR6AmZYG3Yukv1CdRvrit8cdRzTYpQuK5irMQ2oeQCnpbEDL6cEFaZiFfEbfYrYw8ytW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WYegQHpYanm1MEiH2QkoU8K5v33fhB7EGCuMtS8VLKAXkRiARomHYqiSUm71FSVCfW3bv3XhxDyMhbMQvuZApmG",
  "key1": "57CLhFszVcEEkre7c1RFQbGWyQa8R7tuvcj5UtE1DRf98QTFXaovgHaWReugA5LDCr2DaDt9ZFCZHG6iPfzgPFvH",
  "key2": "2XXJ7vgUVYay6wZHwjTy95ssGCNdtxzeHSfzxwwYFim35grkmkSifq67XHFjkhAw6tPLk9jSka3Y2tfDxFq3XEUQ",
  "key3": "4VrcZYV129CbQQThNNC7i1m6a6ShvgZGvkASDpBpYY8Jpc9zRkCX55X5jCBadWTnsRTammaVFRpDjbz9YegsRcWM",
  "key4": "3FagxUBRsYZEozME4iVe3WwtAQTE9buLhnzsMHdvXHihshny7pyeQxsU1oHQBzZLsRwWq6aWtSJTz4QbG8eWxExv",
  "key5": "58szeqDQLWhrCgjSka2PB3Zgb2ASRm29qurEg1iQp5yaPmW1SZeycmsfUg5JzKRUdkFmTPiaWT5EqrYxBcHxQsyG",
  "key6": "3mzHZcLrtHdZznUaS2broVrZLEU2vguKK5SFjct7b7VMMDB5sQMYeN65B4FGrAfmHEgTwSnEUzK68mnmFL3uZp8s",
  "key7": "oTS6q5iY8Mkqo6G612dR8Uw4JWLhicJg6WjYs9Mw5kSFKQL6v9mFwCcNCZbJmerCQ4zGCnEyDeEgvweZPT5d66W",
  "key8": "2zeEizbtzswMraTSPd5WmVRM2RAhcPqcnSTWL87dxM1wfHWPsu9YPLeu7jz5XBqQWtNQ1SdkVHd9QUPsHqQPMw9D",
  "key9": "4cVeLU7SA2yzq54u7kedDFvewfgjqRCYbjK3J2ntbiPhoZGxUZbsYRZWCwaF5kfppG6h1tuheeWCvT5ML7mkqguH",
  "key10": "4Kga2WoBN2geUiWsMoD2xFCBjMm75jiJU42nqrsJnHE69XT2Fao78KEoRaHJ63FAWpotxZK5uHxeommpL4gTHurr",
  "key11": "TjWqhvyTM5Pd4hv9J2amh1awhfE7Y6cGfjArhkpY6CvGHGfYUbvxyoihAFRV8ArnCA7jigo2K2bT8A2opUiKSd4",
  "key12": "4gHWUnUH9DR8H2wvNDGPdAbBQumghNY8hSZGD4RwFZYUkuDTPfj16HKXmwa4hCDoAFRxHHqk1KrHGzHAD2Hfxw7X",
  "key13": "2DRjt2cH2mE5AXj8jza1PmTLUZPs2dFqCDcC765Uhugr2SES1gHkeByjDcsUvsMdHzW11UgB6bDtoiTbETW3tgNk",
  "key14": "3D9r28wkWpe5Soow2RUsuCvXKcUnD3vJmaYzKJedYk9nnMd5uzpTXHEbWNL4g2ekCPKqvNTXg4qdDXYKJG63LY4",
  "key15": "5TX1tUvreo15kJsL236f6kTX7Bvm4XUPocHzLmyUSNB4nYLsq67XsH1sUMsc5a5SjGAAZmALrnXWy7pyk7Rq71sr",
  "key16": "3Wuq5AA6xmeE8PH8itkdKsF23KS9wqNEvAxBm4SkKni2QJ6LNkXMEhJ8suHeZUZXMTpAGVx7UVtMcyGVV3ydeQfs",
  "key17": "4ZkRsg2E9PzYt7hdymeiW5jaeJa2dw27D3TozNtP9JnMfwq88PhezuqoVuGQs2wcRrU55m2YAiTbroR841xXbVPU",
  "key18": "5fAbMqJXu3KkydvcADVVMYn8rTNd33X4NSVcKyd9C5UX3pL7GNw925xqyY3Q2p7EQni3pSqTw3y7b7nuuAH5uRjd",
  "key19": "5FPxJCpR61H2Pvz9pM834mJP56YszE3BR1z4bcFNxh5enaSCn67irppevN66No5szHqvh5aw3QLELVNo3XRTc29d",
  "key20": "3bGxwQCTXcz1j7wNZTc3jWCyWxQWLpxj5T9YMxaJ9T7Y4xUURNZFKey1EbAma6LrKBMNE5ByC6VMuDbCBEQfa52N",
  "key21": "TKxWJFKk1cLm6q82XadqviUwNK9UzkhcQP7NuTmjoYjMnkvZifefVLb5ZFA9z7sKMyBnDNjwRfXwNLAghuS5r7L",
  "key22": "2xkzNsGaZ14HfdQaBU3fwprK4SceLPz9q5yWZfhPKkDicYsqHgi3tuecwz8b56KZ3Ybo7VY54wfwTX8D9hiKSu7G",
  "key23": "Se66KqZVmqPZVT9U3tdn1pYQxYQ4zkkLpjQTjsxUoBVGfhnLrb2Xy12CVRDbbK3vuEajimN7pamSampnAMcbjU5",
  "key24": "5aWCco6UjcFZgbvCuQd7J2LYjs4aC5WoqEH4th8B8JN8YBhZTyQ4PZyUD9eAMd8g1abZydNdnNE31jwgGDQor7Zw",
  "key25": "5rw8kodcs891kjXkAVzZuGymm6iXuZTKULhgg1sx1dSYxgGnYKW39VzRDFEXXYH59T3kwN5zLf4NQHYPAUjHAEq",
  "key26": "5KfgRBqA4FY4wEFuFFzw7USENuoRyDKjjezMeXw5QUCRmNy2WSpZrt1A6PuwjgzLU72LVQjQn2xZH5MCQLWAijcW",
  "key27": "2yBeRAwvEe2q9wd854ZfE6T8fju2E5SjNAAeXu5RFMfTyib72sxWwQPRdLxAQZAnbgzGcF14m2XFPvTKPTyuUZdz",
  "key28": "QvVucMDf3nUR8oUAikD5wYQTN8eaXb3uUdRLLUUwXvb7Vp2gRiRFLuXRX6WzvLMZFFHD3KkV8g5Ua3MCrKroKCJ",
  "key29": "45FzZmiiJsZzqbumteZC4z4Ggqc2Kt7eKFng2qYcKQVuxLAGsncCE94zXVeksV66gKhTVk8tCrBtzrearA5kUSTf",
  "key30": "4SkckDT9LkxiCkFWRMUfLsjF4Ajr6wiE9Fdcd6eaWE8YZT7TWzPMA75rC7MeFm7CN7yq1S5JicZN55uaXZ73qYhj",
  "key31": "3dGS4gx6ZCJrtGPMzb9mkrkiJpLK8nVoioXHTWF12sRrTCqAVTK5HfmKrGyZPEBf25bdb6kYjCvadc88ff9ojVJ3",
  "key32": "58WqULwWHL3oB1enTR8xFRbGFpm1TtEKx48cEGkJF26dcEUSoiQF6B5jWgHs4oivp7srEKXLjD4WM3i8SFSmVqH9",
  "key33": "3kNkVf8bbiBXFppQJqddxkiK1MztHgdNx7pgdRreSfDs4oydbcsq9ZezX3pX5srH8bJ4zUm1PzNtKp7AZQhVKLwG",
  "key34": "2tbv2jownXoFsN4WNYvD4kAzZRqUPvbgfrnMZvMdVPHgjzjRG7FzHbUPEcL4JXJ1uep6dgfQGLgUjBRy3xpPz4aM",
  "key35": "2gbjG1ikQd2GJofEW87SdLmdgevL7hjHjhDYkVP2mqZT9QkebG3VLEher2apkC4kDFZPR22U8nNdLW1RfSTjXJmZ",
  "key36": "2UQqtnFte3p1MstEdzi8yLhsG7m8qQxkvFzYUc1PwP9fUr3F6ehNXEeqtsGopwcq1DXmemhgR54mgbKYk78jZGTo",
  "key37": "3U1Y6ugdr4EQEfN7cSXRv36y8cdP6fzMVa3WNHKToeB6sqMiZUvb9rLELKrvAgNYKKMmGC5HZieY5fzuuUN3UvWu",
  "key38": "4jAQoN1ZVfoaesu9capWPxSYkw3kdnm7ktUa5ToH9H3BzzimhjpGYXurMqsKQ6sASZDuKte3adxhMsPYdimBPeZA"
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
