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
    "XHysZh1tgN6wBZnjXNy6V5KKixckBhHhva54FhmG9pnfWKr7Xtd4o2yKPEm4fs3iAGwgJW2XGZ21cVXYDA75yko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gKfgfho6dVBWf9UPZxpRZfi5wgnz7TsmJdXkADzFdVJY9kfB7mBx3pbyJHm4wwLoiBjiZWMjCEpzbgaeCAdrG7P",
  "key1": "MDmQRiabk6YfwgTyP6SV1Y1azDupgeMABfUYPbCwpSrVuSPEocnKGyps9DaEoR6gQ3w9eWHStK218exXv3qzB1a",
  "key2": "mefN1jPoby1crk2N293uGfZ1i7dbAghwXSd4moPaqj23cZG96B6mAWoHW2DuA7RyWxS3a6ybnPhY1PAwzBTZLDs",
  "key3": "3vaZCCnqA8PyRUyGCXrKyPNkRpMSNuVEtdHiK6EV9uDBnJhiTrpfM1TceubzL2AmUEwhDyMUa5EdVFuQJcoB4rDM",
  "key4": "5C5DJ2LQwJswB9ZRVQ5iwzwFqa94okXp2YxMZKWwbPbnsT38EZ2z2CvxLBFeHEkCcMXw3G1bZ9Mdjb8u2MvAhJJ7",
  "key5": "2U8DwMg7WKfUiJBn4BBRmFK8HEfHH7dtbJe4ey5EDgEi4Fs8FXnKsmm2Vx5n9nYS4HBpdHMSxftqTyGERTW89xno",
  "key6": "5yB6rdq4UnUbK4HYEtGN4YTE8s1a6pJipUfUgnmgA2Y6NZVsw3zEFvwfME4aymUWmMYwdrJ3hg4Amad6RLreoLa9",
  "key7": "5t599yeRVRfYqpssaPhN9xRYN596tL7KYzyqt7jSuXhRJnhrD4DT6yEd5wRw6nGUJyYuky34FqxzTwJjuSmBrVDw",
  "key8": "5SaHNzL23fhvyrVcEWFfSr1UWpyEtTnpSgevZZg8yQWe64CRsoPTaYUwM7qzaskPa7nyn1AVL4JnxdYy1W8qzsME",
  "key9": "4WV6TPtfjG9bGqLaPDWgfUTeEC2iRE3KGaXoJ8BPGDUE3ZXbWSC2owqpjhF3vMW4fwcMGRbNCyxBh74mVr1XnnCR",
  "key10": "241bxsLV591NdQpD75KwiXA42ntGYWBUShAhwVv4xsMbqPPJrJxjLRRo5byytL4KuW5Pai1VqCDV2gBdBNATHNVc",
  "key11": "4zwJNZxmhf5oztzYWpY8PhuBqeHFLYaF6DHmSxnA1kbTuHhucw7MiQBjEBdvp5ZR47mkwsF8KJAa4aGeAhtssHrQ",
  "key12": "x2X6J6uYZhiypmJuvGCkhrozK7Zjo9Xf8WvYe1WBaAn54vi8wfL8BkPSv75n5RVcEg48F8LtG6g6TPK9LjLESJB",
  "key13": "4v55xboWvKUC6EYomRfdKoGbmCmRzBNSL9UVXN6NTRnbh7nPTqdvNSHJukJFeAott2aHDeQ35NxeAwKdDAKt9JuV",
  "key14": "3BMhMTR8KTjz9nmhEh6hoUG9R12m1PRdByEwMihsssFJWGUippu5pjA7Bmt52gAXHiMuRnPcpvBjNeQcE29bvPb3",
  "key15": "2LwkKGuSBrVNoWHTc6okAHpnpwAFP37p5sV3W55UH3UkTJ2EftQCukoHbiunBY685EB7Ed8UoYuAwGtE9VVj2G4n",
  "key16": "3wnFUPrtoXgNjv2j2G2fJu1s3pnMXaTyM5JboiayGvSdWaDihUHx3zbywHuXEBcgCQxdSpNrSWR9KEqhdDf5TaK9",
  "key17": "5aUqZdWWTivQYgHpeX7FRGPqbEqM9dViY6yenwhauYb87SMZu3FhUEDeJ99CqPJySU6VYUdoHoQV4nevokDvbuc7",
  "key18": "2VH87csega73UPYpW11m9yYzjr6tbbSeRKP3BgULTihC2ESvHtLyu5EKL6v7xJowsRQHaEBXL5k2ie8mzTYUQqv9",
  "key19": "tjQxPeJouBLu8bF7z8MPNbvqi7zbhTMzgFpPZYAKH2W352o5i6B6fVyrv5SE92KuMxw4DmLAC5JvddsX8BabeQH",
  "key20": "3VhpYQp3VN9wQvyQE9yBQH5avGgHrZHCS7mDwye1buHHQy7PeyeLAvGTHFEdb6Cjub4kxnNMJHrZEfCheAPx3Ezc",
  "key21": "4bvz83jPBimWu6iuqQp7XQdGnsj76z37uErbnNcu5ps6Za3o5D5NYmoh5gaYp84iw567W2ZYYHcycEWxkLN9UUJR",
  "key22": "5Kyf2CfWRSkgFR527m3D6EVdJPe7eS1Zsq3tf3AXYuPFUF5Gd1RxSzngDA9WUKq53rXkRoX9YLSEXPfBKTjZT2MD",
  "key23": "jWz71RLYAHVRzYPNQ86BbLQVHGKUfD25fUe5VizwjfkLLAT9VPyp88NsQpEWLYve9CLtzeppJFoKLSw9A7ki9xB",
  "key24": "3PgjzCdEJdr3D1w9P22oW6px7sgkey5HQf7nQMNbXWPrTy8psWozCmLRftrdZw3qDXcw4CrrZrovH2sGhizx1VCQ",
  "key25": "5QEcxjbMXY8mkHo8CuTgF478HwSdrbdnRmt1Dg6UdHEAKeUwGyo6zC1cdUixqPzKC5iSNK5pzGSp4MJnRjdfnowL",
  "key26": "462VoiDxeTLn8UN6M1wWfC8fL1w8cpNMrw7WpK8JBs83RBwfPL6dgNrwU9ttfdqjWBqh75PqzSriDrwAwi21Webh",
  "key27": "uiy6WdoWQUXgP9BUe8JLZkbfGTuYYsYjQpGQE3mzBB5i6QCUhdrEsUp2MwbNyp9APdR9qsi3Bvp2ZrZiUFfymyp",
  "key28": "5cMgGTCHsBARycwM9nHbTZ9EsNDwQ1zV9QWGvKUTrq4bfRwJazQAU7JXLBKNfHJ2xEmndJtX7Ht2e2WkEt4njVyG",
  "key29": "R8dBgi4ES1gsfWCsqniMdaR5o3tCmcd4qrh4pdHrvQk33DmfauM7aF9qEUiH4AiwVejB1vmPQiqacLS4e7Hy4iC",
  "key30": "4BKGGBDCtBZj3gAwpg6akQRGEw1AFQLqnVpafQYzf7k5RnSfncPUgdLpa4wsPKrRmKk2s7jK51WDCembMjjxjZYH",
  "key31": "4E1epsG7VNXoU8JpFz2pRDJaHtLUdizCWBxL5gwGz7TTvt3EK5UnHg4z4w1q5WC2Qr8HzgYdDAadG8rydyxPZrWg",
  "key32": "51dui9FEYcBeDNUHzRq55Pr2i5yatoXBFzu6mbeVHRb6AprXBZ6rCmzMrW1id2oCWyZYEEEBsrU1jQrLKVE5zTVG",
  "key33": "4NceFpkUiJj5gF3RVoJUYpCCqUEvQz6mxEXunvUya8wLwT7T1Dmx7MfQwZQ8PuwpqVEsigyiJAN8JYb33WkX81zF",
  "key34": "5hS41YaqbELMoZ7eoi3fHpXjRPJ3gnMHiLdf7qiXV1yw4tpxME34BwdrojNz5SatvH8KA8e7xeK96yvtYcm6uYRK",
  "key35": "zJBJ7goZwad3mzpA2nH1dXexMbJG8iFDYQT6sgww9dY5BmEfmP5bSZxRPeeFdRhacQatDgQAyEQBMVh2pEZHCFn",
  "key36": "4LUn6iHgNjDZhe13AD2JNy3cVxX7VqDEyvFAg7g9xswvivJHbgf6dZgXSX4QYvwq5Z4tbux7fHifJtVjoDMfMpqz",
  "key37": "4x31XqBLRmGQWf4xMsWssmCkeatZuktKSmJYU3QLkDQvjyMpTqKn666d76R94hpHQWV3b82dYNRoFYjvdYxfAiFp",
  "key38": "25jDJNXsmBPpdMizU4fCZep6ioNFjJ9g2HSjwsRECtvHqBQhHpnU3jBxsV4Qyvz5fbWWdhzYcS2BLWEChcJRcTyu",
  "key39": "2AyK8sxcAYQZJ8nqLVEaHHcTzkmiBubH9LgiKwUZFTP6YRkKw27dKwmkKk1xM4B7BJVVQu93F56aWkitEAa927HS",
  "key40": "4dMVUfsgVRTqPEceVhNiAt4ovTU4dKpqpBQN2rbW6bZskeGTiMs5SKfh8TUJCtNcLWx2MEK2y2CZpYtVxBHn71Md",
  "key41": "3CAQzWBuRLsjeBHwP87dXd9YoKfi1vJetWw1wQCiFXSQtZpRik6WhSqZLHGmh1HH3qgdW5b1ucktgD142XZ2dPjk",
  "key42": "3LdXm9DpUbjNxFPgys2hrgrB667Zhsr184uPvBNwEo3nfrmNmtWhkJwn6jX5vwLZMJWHzoXC23XUQttooReEfF2N",
  "key43": "Awq6j2qbW1D1nMdoVSSAofdB2CTpiy6TKXhxgZFbcYNjtW6aYa7F5YLeyb6Sqfo9nKDsx1adWSDNin1eybdQ1v1"
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
