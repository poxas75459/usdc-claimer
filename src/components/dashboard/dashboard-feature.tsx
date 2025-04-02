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
    "3m5cHgjeHyzA1tsmJ3LCsZoM5LgjxqDpWYpjAaQVYXyvAgeetT3pqtMBX4iob3HwKrC3T2KCWsmeNPjNuJ8te5vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EgykhnkJwSSsWYcmseVwBPiNC4pVx6KbajzJyvaAMM7izzwiZQiqZ3zAWC5Ut1NmvGwQtUpppocFEFFCXdbbtuT",
  "key1": "4AZhoyotBNgTTBvaueEmqQoxgk4Q38YiKdXwMxJSKetHTERDx6DhzaRMwh7voagaSRA5FZjURoFeFoePy3vg9HKt",
  "key2": "61rhrsKwuCqtf1mbXWYM8EomhBxhk6pL4fF6Qb7wZGgmUcKNmaUnGRu7y67fJbq2S8HhbGfTaDqAhFCoPrL5AGLg",
  "key3": "3KdgsEUKb6mjuhA7rHrJX1Y8vWq4YXCADE1eDVDbYbu65iCa5kvBnMoiEi81o8apsUXnZag7uRciqJCpfTBNaWtR",
  "key4": "2491wgUPwTuGE2nW4J1ABAmYcq8p9ciKp4g16Mbn45xfkxBPJGMSpmWa6Ri9kP1W2rdVhZk67i3oQ1h27S5Gx324",
  "key5": "3Hd3pZYoUuo4zyFhmGgnvBtaP6E6AdfnCQTP4jAXMcagvaeYHBWGLebvgvdz2hA5MVQ2zTLX3rzDRThNfJ3BXaiA",
  "key6": "5MdCkJ2wHvoREVAsyC7V2x928oNmtjX49y4SH4q3aCUwXWfeoUtcy7oKy4wo55wzWiSvqR9GMVZTPJMsUwcFbYwS",
  "key7": "3zkFTz5JSsHiihmDuQGuzKyPJnV1cRuP5v1V9oCs1b7wp1DHtBsqhE4bSdtdbdDvyLgaavXw81b7MyapwZBHjnHU",
  "key8": "3yLLwt11tGKbUSQnYDmJB75Px1JSaRM7iWrJURjv6TvJTSA16UjYaxx5HT8ugzXCVawtEFeDQFdQoAvGFNXmx7ti",
  "key9": "2of33wgNPrzhwL4gcFwwaMjpPteF6hu6NietBTEvxHHLjypbmE8QwSpcrEuRq5t1UbRmJH85ppp1Us9H4ZSmBFFU",
  "key10": "wJpWGDHvJBwMAzhaQ5pYjQRnwDGWJT2gHT8ZnGsxKcbAKeYEpsN4GbtU3V8MGLRvmpK1Rn4vGZvaH6yb3CY1fsD",
  "key11": "498v6cMSkLfTdPpfgnPg46dkKHn9ziMMeG6rtAzopkyCdKxk6L2nVUV2KJMdPv2M3QrwLSyKFFnMTNyDHv4Kjy4x",
  "key12": "19fqugtzbAYj3e3LzMQw1dVCNRYgHR3xGQ6PxH2hh2KjxA9XUTNVKNz6PEwwLLHKFa6CxcD4HxDs3Lqp8Nqu4Yx",
  "key13": "3GpdQkyRDnqjrHyDzv3KbgVjsZBdM8kTk9HDTgLm19pJo5tRdunuXHKnuCXDeufGjSUcuiyFKfUbEbSqD4ucyYF7",
  "key14": "ivrbRMp6w4EX4BiJZB2dCFVnYaSuiE31awpDLCJSxHzSb1cvrbje7X6Z3EyKnicJCQJyP1xRN9nyfbmF1JSxRCm",
  "key15": "5UaNdkwU14VyMAbFv6h5hjAFYTuf2edJnp1nhEHJWYPUsBNu8r95ExG38bbvFvgha58ozJ2iKH8AiLo14cHJxTVw",
  "key16": "3rsbN4fAWjwykGaQ8tnHNKJ5UuCFMYNtgG2stBYRQoXV73t1neithqCfuEFq3Ucen6Bbvzq7zArkkq8jvzPdd9C8",
  "key17": "WmKBgjYHx3GT9FrWAQhZtkG8bqAGnUKMEJKCSGdG4ds7m4skz7evTuueb8CrsXtptADZCHuGrz9VMbnGjGy6nuQ",
  "key18": "2hKJSgmGjXxXNHDc3tr7E7SD5G1ptP6oYEvMoRcB6ypYbn8b3xQyrv5PjydHzmvkQjGwxnVGzzQNdKwDKCj6kMXL",
  "key19": "4pxsxELHPj93BMvmvotSUB57ArBRNh1w5YNQ3FAW7Biii94NdhX8Dwr4JQAh15aPjXchnbcg7Ae5ugDPNskiJb3k",
  "key20": "VUKYZZJkcPhfcsEUgooNbnjqFkC4DAbyh3pJN4iYQ5xeuo88TtENiQpWD7x11yk44Q1JHUTSmiSxGvKcJyFeFA5",
  "key21": "5T5LhJQwvJt7pFVpmCjfyfhi6Y6qvKDkrsBjcdHQ7AMrDey1c5HeRJfNk2Fq8ZJDi8WXemvAACoQ3uB3igwTvzAr",
  "key22": "2uXBfj4MKx177owBUs5mEJLq1WaCtvUs3b6VZzfjrLY2fsvQzqrhfT4unwadjP2qJw9pC4WuVfziZEVcfUJVGfAr",
  "key23": "4unScbngmHJoGdEoh5MGhQYYDkREUYf8zzDjLqq8iTNAE4PC9q9PpzrSg5cWrYuwxugobGBkPRjUJazP5onm4mCz",
  "key24": "UQVieo1Ccwgijgirn58YQhUxNhTcKihiv8FCSfbsXUi5o3JxncmaKC6NnKNRs46UvPseXgKdG4o8iuk3Axeimu1",
  "key25": "5AFXbkvjNdkh5r4k7QhgnuEJhVY6vq8LhLpqsRXyzkoDBS4gkgi8Beuc43rs42A4yQ133rUG7MCQT4w1ZoUpfKxV",
  "key26": "9ZmsanJtvZxrJmFQ66fnhnLYdADDgDfiW3U2A4Ubf4iaAoESRVMFj9XeA2QEnXkAyPHVLsD6gnH15kHjC1UVStQ",
  "key27": "4pMGPFifW1KjH1Y5QjA1yQmNjkDsBa5N1yQGMoJfinQUwKsARfw1B64SeruuVTiijvsaUbo1tgBJ5W2cXXEm8k4G",
  "key28": "5WFSB9tD8HkcfV9PZY5qiQvWr1AiCTD7VFffyGAF2dVUUyYiKcrTT6kAg9i9tD9aNWiFM5WKf8xcia5a65Beav1R",
  "key29": "5nLhbsGbckXkiUH3TqnUFfwZ1UPzM2RiLkzaHcAUYkB7aNH1TFeUEJPy6ynVBsYUzPv95hiSirHSXpDLe85UvxHY",
  "key30": "5pXU1zmAvBKETBLbestqoRTuYD46jfXK6T2v6Aum1JC4D7NvomjSSdd9ZMhfhTLjstT9aYX7njcDhqRE7JfAtL2g",
  "key31": "doQmAxJtSSYQx1mRHkBeqowS9sbNvB4Ca3E2uUyBUxCtd7iZKqcynF16cazfvUXz85LwuWnktqNjyi4yHshZ9Bk",
  "key32": "3bfWaZVSiBeGgTB71sW8x8vuNx3XF6KkFecvXU9ci4cKzzeyA8y5bjzT4zC1fEZWpufk5RreTQyGZU2Po2WzmwXk",
  "key33": "5zwHi7vEj5BjAXJbbLNHFAixxUhK29nEmd3zXQTvggrQkmc9enUFXCSaHjJeqWfUUJafv9Kp9wTcMMjguQ6dDrWc",
  "key34": "2kcjBGMeYo8GoHAR5hMBatEBUMdEZzkGKvWEPDv49JH5CJh8CEZJavZLkHi82zndNE9yJZQ8u1g2D6Aqtp4zdvDS",
  "key35": "5ih6Ww37jS21SUNm39yQui2ys1y37jyqRMgWRcf1fQqHHFqrrNqvijLne4iLhYjkrRy1L7uP4EWtwg5VKLH9KT6K",
  "key36": "2MJwX8pMkciBP6Yb33BEH4AJtLHs4iuYtMDZ6i3Hvr9DZgwpPZDoVqPAx2utW9ycP2jL2RapNfk86jThCG4UUUho",
  "key37": "3EBYehgmTrG1YLvRtQzJMJA9r6UG46Nfm7dMb2CZtTcFYsAAyfKtKRbfKgLcx6cGSmEJPgY1Dx2y4J3jf5c8nk6e",
  "key38": "5qaUaE7PE5trSrASjgHLkRbJqb5LRQ777JSEvfswAHRtAiNwD7ieFg6rooDziFdGnvJ4tiBAnwuy9jFCfsXMAmgq",
  "key39": "fBdcb48QD8oH7h8nHb37uWfm1vbpe7wtnfPRpPkzKZ9qhQUto6TdKgJ9aV9wCJvkHZ3mq4WUwJjsZU7AwQ7Z9cb",
  "key40": "LPaLpzooDoBkjciHG84Y9s3Ga7NhiSbTZSZPiX5nm2q2dkwi9neFZneAuAbWhkGDpHHbS7SjrMZzXh9ivdw5W7q"
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
