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
    "5rcDicExaWMgw2UxvTEzks4zSBnTUx27w56W3swRc3mk8jG4LPrrouJaVLsfYptaSNJD178sLweeVm5XFNAQxDU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z8RZ1dToD7CwBaKqRekgrs64ygYqS2LucThKcdj9F88VCxZYyLjL48Q14XTusdxGaoYsiP4obqAoXynA7hJ4Erp",
  "key1": "2SGJhe2rKhrakZGrsMVQY2Yca7NSNDzdbt8FMknAErgJtnH4fDTXgjbqD2BELkn3fB9yo2ssZyNStugJSXb9ZZNN",
  "key2": "4tHqq1sMWesefhz1scP9H52LJwrFK42Dwitpv2zKYvcbQheQa1UxWAWoGkiPLhvk3DT5o6ZVLHX6LFUDsbE7wutb",
  "key3": "3jXdqMPcq3Q7LSx6vinrY1iHDyDLvJqN88d1tTaPRGycwDeFificX5Vc339Uxe52jkjmUC6QM7X6gbCS2qH3Zq2x",
  "key4": "4MTcLE8QaPtGWA22xzrrwuqiJMEYHekuWYLHby34Uhkgapg2sy8hL9b3jsiekKWcs6wz43E2xWQpZGmuCPKmFN2S",
  "key5": "5UXFfuU5sNX5NkiiZGippW7ZiLRdyFUsvStWBN9nskRook1B72P6CPTzpwFSqLzs4U21ab5AvRdfj1K8UHc14bPJ",
  "key6": "253J1sHBhVmZ3QULfcHrSDBZf8CegTdsvgybmg7bhyL7teELuGsSsaxcaE9F2fPjvSaQpwVy5wWrSFyE1kQmv9Hs",
  "key7": "igmLj6rLWfwLN5TaQxe9gkqEe7UihGfzXKzvKzVTXX8aCCsmQJA5uxpoj6H9mDMw5YhUTgTvC2hwrHB19pC5bdg",
  "key8": "5ZSVxtJ4zuadnpZJBFWCXBTsySW9grN9KD6jdHqzjKoKTJ8eWomqZWk5zWbb7jLNprMNwdLYnrMJnGBif5V3Y7Zp",
  "key9": "4mxqvZh21bSiVTdkP6C8GDY1zLq5uiLmSLKaNfpLe4eZJHnXvDQWDJ3SBMVt2W2SpXKdg7sMyzS19YTr5uxry8VH",
  "key10": "AeyfvDHLx5U34F7aKZhxZxmGPEZxWQ4U2j5E56Y6zLZ9WEt2G5nyd968UKcRpchfRri2UK7i8mjTk5ruWshAeCu",
  "key11": "2mp3PvavQPAZAyxSLRfJZJ7iVdvFwhSkcZ8TLJkLyPRYf1Wv7qNnq3W2Y8XE3vzstKBH8ztEWjCQbQKxcNd4GZig",
  "key12": "5CrSpXhNizNeTT6tEjuMVK8DLwhygtLpKpWJXYiUoxWSC1JqcyRjgaZ4RqMmjsWQd3YwGzaxMg3oNk6JTWyd1Lbf",
  "key13": "5g8HW4uLAkxJ2C3wVF4Z1eRLjuxxQAViJbTdZjh47DTmZVfiWaNEZj9YdCuFCdsUt63P6thDQ3kAg3eNAxJpzp5z",
  "key14": "SBgrhNvcUyLrDykCWPZqeUDTZKxFVxsxrEAPiGAt37gQBuCCngwQMViQdJi4u54c6MKefTkMGW4cEMUymp2BJx3",
  "key15": "21MsCeawHVDpz7EcsZ6WCjFeatFY7BUP3GWhMxJU8n8sLgFUvjFQtbbMLC4hQKHgCigUCGn6AymTYjvcApPYoaok",
  "key16": "2CTywMqM5tX2gHfN8HZiDLD5G7XSCr432XXaZz5yGfWNS5DRGxBhn283qvpEKgr6vBus7nR21psV2BGbVG7Uxmc1",
  "key17": "562Wxi5AYJnk8VrYty5jMdSNCsLNW5cnvd7UhYbyjpA7ELJQn16K9WYWbFgC4H5DEbYcjXcTVEgZtRBfCAT8uAja",
  "key18": "2giXka6RvGDZiNd1gzpHuoRsqdU3G8kQKihFPAsQMAA1g8dZx9vxJkG1EZeVbnYKvFR83zFpeookAWtjxWXTNwFV",
  "key19": "5c9wqUZrv2F2KnPBQLy2stvopdzVJ2Bsoi2XRb2V6MTavC5trK4HEu2uazbFVTnyuVmKXAmQzYH2aiT5YgEvFL5q",
  "key20": "3i5hnQ9e5YgmASogBbKEpVPbp6UWSsuzhAE2s3yMEatqa3R5uVxcL8YEUVrSb1CeJM9U2SX5J2hEZe3m54ZX6e4W",
  "key21": "4F8qQY2cr19c5rSe9BCpEHmTrmAEmNmmoiX7YanN14N3t64rtmnFuPceDDbPJy6VxhUoNfp9xDektBSahivJGyrH",
  "key22": "2GKddZHe3ZGE4DzaKTFz39NbpuHdGoaDiMr7oi6gZQMzqkqCd9XZcZmoBnibMjJv3wVBWodRCp7bwLibBV6pXpjY",
  "key23": "26jP5HGPLPRJSwfkLuqaBkQcJqWkjhYqVn5oH2x6htpT2GzA1V8AB1S8ZmY3vEuZg4NAw5YYWiLmuKDT3F6e9tR2",
  "key24": "5YSroZBTkNU9KhY2Kd8gZkF3RQAijqoo1zK8jHng2jAY48hAmiTWmfKQPnxR7zFQwhSGdiEixPSbv7QvrVDfVwqt",
  "key25": "3MkSY1tkLuiR1cNtTMgNishzXyQ8tKiBvaHLnVRhMFkKB8iMQmFqZc7dMHKNci1WJeybUzSvk3mLQds6DsuFxhQM",
  "key26": "4nrB1dL4t3DbnGhMGkTY7wyojuoBypQXsK6t4QMKXSdoLmTtUQib96CLf49UihhrArZv1hixcc3CDHLmgXh1XmBd",
  "key27": "EfpJHYJRyELfjN4hNgHs34nf774gAzbYbZPLNC5pxc5L5AzS1VsZ89ThCDzhjSkVDmJR7dKjrSTuhWDidjGw7Cm",
  "key28": "Za5bE2JscRi5BAwBPyxY6g4mEc8XSDiE9Su6Ph3s375FAbtV3U584iou3zCRxKTdzs8PAfugEJ232nafrdkPdii",
  "key29": "y9Pf9NjddgJExRp7MD4mfxi95gD1BWxdNbrviQTehGBeTP4CCevuqA6ekvWZNfX3UUztRqoGPpJt7h3NUafowPK",
  "key30": "WoyL8oUchV4g6KMAKUsREE4jyoiNsjCTBPdMWE7uTnaW7xdixAsPqoxtYyWdE9eRq6qcFnaQHDncgPtx5wPzs5n",
  "key31": "5fCMmTmqn9wKUiDzLnaJttZn9WACKacWUBNgmZJhRLfDbj3kZedtrVUJtTFrm9YBYG35zB3HxHeQEfKCCWj4sHDN",
  "key32": "2ooZ4rMmCQsddK1LCwMWJ1PiucRSqVKQTvcfpiULVe3Cfz9x5RACw5brGCnNrbxhW8LtNvkmZixwentNZBxh9MdV",
  "key33": "5BjWYfxzPwhT37Aq9cZB8zCihXqFzY8QAApRAVmzgRWV3dYRK4smMLdM6K9U8n5Le3fsKVgWhgmYXbV6J1cBFmXs",
  "key34": "5pSJKkXcsSQetE4eAZWnuPsNfjibqLJS3SWi9RiKt8qjq3aPA7F8tu7bMVnnyuzVSe7D7J9qzraHRC9xG12crDww",
  "key35": "5DKeVSPkWmPur1UxNMey324Nn5RNt8kPb5E5DS6KuiRKX5x38bxmbq2XBZLdGL3NspMPqCRtqcVD8YCrRoCZFz77",
  "key36": "D7rQ9wfACMHzrVbw6eaBfV3oWHhMnsoytLcLtq6HN1c9B2QHdDYJPxmS5Yei9n355XNtfQ3DGDV5m5HcRAdgvPZ",
  "key37": "3ux6nPaqXwPfVvsM43PdybXwe6GpaujD9E7x9j6zfHPoFxA97ZZwGmFT4BroiurdrW3HJ13VtbYyw69D7jhhXuvE"
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
