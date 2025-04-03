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
    "4nw2pqFgyeYxP4TA5oQ6y98VjesyrAzayuJuTNmH6ycxX3XLH4Zm2fuJ5WBPfJ9DJtZSwum776YHaZULa2ieWT47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s37RkPiqZXNWTNjNAzsp55Xk5d7T9UYBf7oPdRvchPbgBmFozzabyHJohyKwTr2dWhxgrFDsdJTgNQWPtsP9A9K",
  "key1": "45mNb2cPUg858pvW42kn9YRE9yXCthoGaM8HatY54WeuTu4YfD4iKpLVuJx6J1u5UefZ9X7nnWCnpWJ9CNYbhRA1",
  "key2": "5tr3emz6RDD25Ammayzh78oZGJv8SrwBcgQx64sw3xrXUdUE4v6FQ1TrBoKc53w3KsB3EkmRYRwySqhqLSdVrxhQ",
  "key3": "4cuPM6hrX4VZ3rpZd9KgEzedNXuXhTQn4MWwApGS8XbyL3mdMLEq11oyXQ5zsYaCS2cm2sadE8hNPLjZGKCzoP9d",
  "key4": "YdmYvZwZyd9HkFpPApMKzaMTk1JBNddNjVYw2Z16pTKfReuoH81wS4SY9Wu65qwP2ENSkLFiQvCYvLMt5HsDYfL",
  "key5": "t8MmDe44Z9RgmowKAaE1xyKrqBdu9ykBFBvntq72t9kgCiPeqAvQ41Cz3ZL2AMDFkPEMjj2xsqGsNZ27T7sTTMM",
  "key6": "RaLZGTQFfXuv9xGE5DBwoSFJNuv1LvgfbWVvVZv5H9uE56sqZue8hagrUsysyE3xzgwBvDzBFLQ58F1GeS9ATwA",
  "key7": "4zGb5cccDCL5gC7ZLYNp7Bu3Ydhjf8FrrgfKYiFS2j9QaYJ5qFvw8p7hZ1oq7mCnR4Vi2RzuzhVzA81btgyR9PgC",
  "key8": "2mxzDTZRN4WCdPTRU6dgp1QpgX6N8kQ4PpC83sJ3T6Wd8t9xVUTfZEFjZRehZ4nicGKpTH9TwTxnXidDxdJfVhTK",
  "key9": "tJCxecZHsLm36KyuRmyxdopFzVf7Qfd8JCWs5egkQGRg7QUEawLcShMufWp1zEhVHrD8pMzweZabiG8ijbBy89f",
  "key10": "Byc5mVUU4j7PgcXQcSuqHgQnCaVT193BMA1uk6UU2Mvju6mfeb3vCQbEfyFwXTpJUVwSYj6xbng8HzGCJsgPdTC",
  "key11": "5FzTT24LH2nc4RRQbUcUWTnz1jZQZCY7T4zn88CBbgha7YeyA36cMbwyfUCup5Tn6BpwWkTq3KSxUGb67oPNg9Gq",
  "key12": "4HBmZ1BsXR6vBorqV7f1BiSYW8bnDsgZGfGtMfWDUmmtMWcP9th2opytUU6g2VMaacdiNjMoqSoPTKTqc8VP9NvU",
  "key13": "5e1kEG1KQ93N4DB9nvfB7idBA4apKqA2ojdxN5XQ1UQAyArfoZsTKXnULxCKADGToSrqjaXdL1m9CdfbSaAxW58j",
  "key14": "HJKq7Na7JfEcLVESL6PoA1rbccsHzPAWxiXSfde5JKT5hH1Eb4MZTrRJ6VGdtFUZLF7no7En9YyAEXNHBJygGJV",
  "key15": "4Lh84zR8Qeu9NGNzK8SDBdo6NhHouY2dtn1zohe9RJQz9uTX6vXCupLLACmQrPJFT3KWPwsDYzqSADot5Pvp94ZL",
  "key16": "FEiWs3YPpj56V84hc8p79J1zMM6CpnxR18feZLLNpEBr8A1qr7HD1T39uMhpR83QD8waDwWxxaMRHeiYyEhkLgz",
  "key17": "5AYxRp34jBgCbjHg4MVCAB4xsrV1LKwLdbfyZQK81mZUpXeteCQShqqNbxgGv4Lszu1MzGbpSgeKLmThpzqFvca8",
  "key18": "hQKMemBaSJepdc8a1XZKU1sNvjdcZopK6fJCaCngyiURrzw9wLhHSt3LVCwVUCa1VScJrHk18sexCw7sEoz2ks1",
  "key19": "4a2kU4psrg4EmeghuHJRY9YRfitZiUrDz2WmAEPrPYT8uThjRiBH4McdRAgvxXTr5XzXw8ArjjZtg7HjF1G8fSgf",
  "key20": "5aVefxUTX3bDVdenTJrXVmwecW31dBuUdse5xUuqdduy8vTr2rcMeBkvyGGuTrdMGP4wao8z1YKdZkTN7gV3RKJF",
  "key21": "2o2eSP8XZJmo41oHwcGw4TaEZH4YkGsoF8YrJqCS5wZSkpVxKPkro5MzMHdGhC99fipBuf25KSbAAFd3ftqUtsQ8",
  "key22": "4yyBCd3xS5s6dj7ada5jYMCsWapvJEYj2WYoKgH2Ev3C92zUWMF8a56XTCaDNktzDzdFocYQ46papCSf4uKmHNJU",
  "key23": "RVZVcRu5Lp5NB9fUr1oJti9zPjgbBuCySqY2uNcdPBEtoYF4QzodeGU3jHU9nkGMbto6fYtXqAE1vogKxkohZNF",
  "key24": "4JG5m4soYhCcn7dMGaz3S1Gy3YVaBfwrF6iGzzSwrEmAXgvY1S1LGLWMBVBmGJcXr5BXy8XnivrKTH9uUHKrnLsd",
  "key25": "2EKRcPxhTLFm1CgQHYtPWJoanyjGFVi8jhaLAioj3tX9eqzQydAYJvx6dHCxzXYJMB5RGrHLnYGksxKRPqpuAchA",
  "key26": "5qjPK8fQYPLwCJiAj1WL4kxXftBeQAaqnBGCKWJEoFucJf1YcisgPKAtPBiKzPdo6u2UiTntNrNwBDX8DHxueFtt",
  "key27": "62dHt3epEZVtvUaoU6bRW5FPWRrKyswDPh3DfojiV3vfhzr7DqZzvdnTrDG6FXDwCggK3irgSUvDpySmpq7JbKFw",
  "key28": "5P48ViQMVzmEcvsKKtZUXwn4i5mwQ31fnUhum7iDEPuYdr43i3jTeR2dSGVqdxuVs6ef1SWrgQz7gagiJx1iPFGq",
  "key29": "56YYJMRHCVoZ2SzV9HoGeyqTbLEKQeALm1XQC2vuTrk2ewies1Dkdp9NeQRzCBSg3vS3k2QFuR4r46vgzMzyuBpT",
  "key30": "3dkU8i3coQBJmFANDcqJAX3JG83b9rEs5musfQR4X7YEyzQHASm2YyvQjGPx9SKy7UoqvqEan5RrEFWfcn6mYezv",
  "key31": "femtNxcjSeUPjBDEr7qRfFDGZgM85kQaA82vFLCxBR54JcQBJCvCZsS9p4ktrBat2f9dhqMfvM2pjYfCoHkuaGP",
  "key32": "pyhyavEK69Sy58mV9jS7onAYJu77qftmzhxpybdg7x5ZZDEtg61Fm3xsh6hTjDWiqQ6ckkBZQFfjCCepjhYnLQ9",
  "key33": "fdaqCTx6rVpsuLgnh9CvBALNNPLZZBM8ffd76m6VJfp14QQYQLEKgCUEwvMH4b3mNgmi7GpbgohNWV4j8Gk9To6",
  "key34": "3r1EAvWgpmtgEj1F9nbcwia4s2oKbahJYuJV5LRpFMj2nRygRmGj5uBD2dXoKiaRpF1R3ULu7DZBwtcEMiFQ8Y83",
  "key35": "3RY67cCvuhUQPrHBw5zTfebqqApi4MncLED5XLmDC41t8mdkjpt2Lk1NgeFjXm9PSBXM8W4TwqtCQiHu3gvdPrwd",
  "key36": "5fi9gRqKWoUnVKPrkMbZfWrKvNM21BLZpoCLXQgPiQpVzPphUSPq428caufezJoyTh1MUPAA8pK3hdTmdZrxwQDE",
  "key37": "23QKyvGGqBwh6mLUxNJ4LrswMho1hY4qZvCPkzbNfJ1M61T2LRTWxiHCSFiZigtDweiaPFhHnq23igsuZXjxY73a",
  "key38": "3my6xpSJrGWXMkzWWRtseZhByjEXfvWqGodTFtm3x8KTjGxmXTqLZqj3PR3a94Y3yaXpCsPjC2dZyj65vuyy8B1q",
  "key39": "5TfwNiCMreoaiqpyGXLj6z4VQYNNWWsURKd4pqvWpuenjtA6hNSr5RbREWqoEi8sePDsBzyRSwf9FYyL99Y17sqa",
  "key40": "32uEH1w3vZTkZt1NBwdmVhoanwWEHVnWxqDwtc9GBYLiuXzMNV64Lce8oE8nQwViTb69wksVAjyecQFE7maXETkG",
  "key41": "53hnCnMPaBYR3Y4k1Bjp9dTyjQMHR3epzLypahwqbFtooFTTHtRz1SUGzEXydn6fGsJHGNujhUpq8TQysepZd7SC",
  "key42": "4Sbkmsp7CimQav9XS1Psct1LoRaYYvncBbY9ZtMwihNLkvWi2MTKYGH1dgXoGUPbtnV6Q4Rk5yccn82dF1GLi4x5",
  "key43": "2kvgprNh8KaLPq4rySJ6mmSFRud7qd6pEZKT2ZXkayRXbGRWMDpx4cyKnRYvxqJtDDGdZFfBZG68WpUaXwyH9Wtx",
  "key44": "36auWLYKhgvqF6Bc14tfMiVXoJ9tSg6yGfebpXZ1ZSK1KgRnYaQh5ApF3ZGwPeYSq4dSE6qe5x4AxmMiAvQdqCcy",
  "key45": "3Ryj7v3xZwsbvDPSLFtnFo2ZH7kT5ibRxCV8ThhmCGfLPqnNRoRPiZEeBZSxaMF3AU89YZXCf6hhV2Jz6Jrh7UZ7",
  "key46": "4spKQiHEhMFzLeHx3RFJkxNZa3CYyQvuiMgXveSPgX8xCTpJYLQwBXED15Tzy2JNfxvVfJWBJEjEDRY4hzpZdtYu",
  "key47": "LHWyV87mHghNEufcdCneFkJLNzCTcHRkuWXg6oiPTbahRy4CkY8AfNN5Y8gq5mu9aUQBFvga9TkoMtVRhrDu58c",
  "key48": "5f2Zu54NbFKgu4uFYWKMwz1sDTMmQwS13csgBhtERRsCV4gjUeBfMuonykFp6n3BcrVbJpLGUYvWFr9it6UFaUDm",
  "key49": "2M2FKokjUx4Pw9pwE6aRKgbJYDFJca3WErwPNb8mFs4zR1PgMsXmcgM65XywQMxf7ShnqmhbjhYxQHweyxKXwpmX"
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
