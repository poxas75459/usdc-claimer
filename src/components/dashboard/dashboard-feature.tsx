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
    "3JQBcYhu2tLd7bG3mZaQYKhqcntXGsc4NtvdVYNYD2JFrV27AqcrByFSZLrk2FaT8CpCyKzJ4fJJhF3pVB9idJ6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ke8MaDj836Q1Jr3jft393riMCikqPPTE4rrDJaL4cL4323jh5QREuNo4E9Y3GVdA11hYJ6L2uAHqqtJxnwKubam",
  "key1": "kf7p2LhMKmcLCeXRvXUuLipR6uMSDL9cP7c9FVakrs2A9tZBMHAp1Mcjs8oyQXpy2aX9UZnNAtaRzE8fG7qCbGp",
  "key2": "97kYZCihkteLPPE2knXWaiCzRVztcEDb6ddM6w4eb22CzLKeEeKzaHGJakbGVZctetuFoXsMaUvubwEKe8LdDoX",
  "key3": "3ypEpHxnaBKaVpcuDi5rRP6NXaKEWZZhC7iUhWkLhNiGWm8RaefnozgzdkJ7tkfgKQJFGDQ7V2Tsf8ttEdiXw2Pg",
  "key4": "54e2fJKcvg6tGyMSqeBWGnqHzeeanZTJxMVhWTSfZMv9suaY3T3KTWRJ4umkaUGAxWTbybAPphR5rxhzUWNP3swh",
  "key5": "5SbmBxUAe1dsmx2CY2AtcghvGJz4tp7TMTJ3PDj9hTYLeSx3C9VLLgJ7u7dr1gzZfp9DjFqjiydnX13dUC9E1qQc",
  "key6": "5AZt3XrPRBgnFEc1kE5XkXWp32JiCA2jHkyDKYC7baHkUCRFdu5SqZBkyZo2pHRRT3XVg4jHd3d8VbNKoLpuJWU8",
  "key7": "4hEdYMjgwKviyydz1nEqQfkjpWhuNMmwQwEpqZhyM3jJtb77ma8M6CdGrwTnaBdkvVJrckdoMXzzXsy3uHsQFV4L",
  "key8": "dVCLtM74wEHhZWWuYFXyitm9tZqCGD8AD5snAkP4tGeX5XskU1HHyyw3s4ybVP77Tfm4jiBPABxYkwjQeafEEvH",
  "key9": "64wP7VTceqwSM5x8jKmbfnGGFuci4pFKyaLP6PERqBEbmGsLWDniSA6zK527yDdqrB76wkmgihM6DZso4iF4NaRJ",
  "key10": "3rjZsjDWVvvJGuMYuixCSZwx4L6QGLjAE6NkTr1YUBcx6z9EMYDRXBfS37TQgBTyGtu8i4diQ3xhN7qtagvqdxt1",
  "key11": "2nJtm3TNg3ZDVYPQNHxdHQRRmiRFCjroVD8eZAoXqqhzqu6bGY1mqqi1gB3sGveViTWvRppPDWs2qvp9Hh15MZnp",
  "key12": "3hkx78Qvu1HDW3gJAZtn1KxvBRLuxKpLWcJ8Z6UqpuZnm4oBPgsfPGSivkpafm6wkoTTqqaN5KPDBNXFRqi6ZAKT",
  "key13": "z9CTt5p7tPMw2Wnz6dScjL2zFEan6K54E5eJRbQG2JVC3H26SSwzGsVf3FTakJr5s4oKAG9eu4oTVcsAx1tL2nr",
  "key14": "3Y3JRdPiNEvwRiwNx3HDRVcuJ34LgBRg4t9smBdXhi2GpX8Bx4HeSi6t9kLPqzT5FsRJYhrN8KiKEWGWJ3kxYWcN",
  "key15": "Y2qio47FVNo8zpQadEuSvkuPnqWxYDbcU4ikRhSFdmuJrwsqydqp6avAv2qx3xfCjrd15j1qjjsDPPNGdWbRcmy",
  "key16": "3MfR7pkmGa1XzjH7jve5hoLhBYZWnYe8rCMAHkYLtaLUt62gLZRD85aqeSGcG15HyPsdTWghF8uoyvNYXdpdDU2y",
  "key17": "2fQWrye1JqWLAs9a2J2XM5uoP7p5JQYPNxgaiedJet8xa7t5EWL5cwA9AErZEKzEj9SWummczvYBKpRQ4Kkbtjrp",
  "key18": "4jNfD4fawURDFfDbKiRD29gb6zycWor9fP7rsJHCgXNxWBz4rbkbR2Uut2br6BvYaedzg514EVvFHraHED5zY2X2",
  "key19": "4XZB3mRTNaqUFjLj7yZcw5wCtbbjYwA8GPjDeehAZ7m99acXU93t7o8912RuemthtuzYNsDMdfcksrWK9snvJ2BR",
  "key20": "DYASoEPnLw7YWxTVK65XLEGWvsqW2ZN77S1NyFhuD8sec6URLmhNqFhFM7vz4LcrZngTXFmMVfemf29x5jAj9gX",
  "key21": "3QBP2qhUUVQoxfsX2JV9LCGtL1NNasq17nKLEJe2hEJp3EPNaLdHZUPtaRfvwe48BKg7xPhdt5Ay8wxv3mG6PzUy",
  "key22": "4NFXJ4PhVEa5cvts4PmYTQ13KEzTRNGef1vd7q26igAq3sXLA3oGFJXTH2x2YDQHPvmrWxpKG2mjU2BkGWHyfmWV",
  "key23": "3jrUf7mT78kdkKyv8bXsNYJRMER4tBnVAQ8eWFfh9wZCUWubeHUTQ579FmUPoUkJ9mkMsUQqkB68h5yWiN6RUHvm",
  "key24": "3srwzcLiSrgZtSZDwCxuLpwuqjBKuy2STTrAtogUdK6DLDoDyaPjGgD44HXggs7V1vEnQ2vXUjsDpPZYwTj6Ye5s",
  "key25": "5orN9K1KfKhfStsspCiXJWcw1iYsDkcp45cLhm8MEFS1gKZ4sbwM4z3Aj2eAEdjAcoEUBMZoBHPhj2K2eKNVe4zn",
  "key26": "3VXEwNwiyUYcu2Ldb1ZCVbhTijtJegobd7rGV4XFYAJoZckk1642WTLapG7iSXo2uHmpMCNMioHELYHb2R5zG4cD",
  "key27": "2BnmMegtRFYcDVbQ114dHHtaJ8XsBhyjrJhUeU2MR1RCyPEoscTgD4KM71XdWsb2oyKF3Jt82tfhe8XBPckGKev4",
  "key28": "2kr9bGJSUvy6NQU5JpUx34omGfYRj6HqWV4Gy58AUMbngRkHR7Rw6BuPwZxrNnxjc8Zev84L2aa1F9TX7E7spGVi",
  "key29": "2GYPQABb3rcNoaYrwvmBsMtdEmZrrd5oLrUFYMnaNk8LJ7n4mSPaNWMJoLJMXJgjZzNnXisxfLCPUBTytZx7Bgou",
  "key30": "3iFX5mJgwJSqXV3qq6qrmvXLeMPPsMebCoyVdQnT7P1uAXfJTuuPtE5TpMM2AWF9thnvJz2WLjfMFsft3vyBe2hH",
  "key31": "5k5zPUM6XJ28zq2DxiLYsamtt5R6YobuMoYXF2x3NUBRj9AiD7nkitu27z6Xo8myqbLwWWUP9GTxzraVYq3p3xKR",
  "key32": "41gRwvKHq7YzSMrSmHoXNbqwy7cHeDjzFn9pfkvjYELjEqL7fGSfzaSSNvMJp1DUnYecAhrNysEnHZctxbHPKyh4",
  "key33": "3TnLFZFkgcd1W4aU7J5AeVjuTjDCzgNtEhwgXePsLbpaZUjYJD3N31DhY4L2We6o4KcCdhrQExs8gjjGTzbQxAav",
  "key34": "CGT7cC43zmHjL5kvsuXpwv1fjbGUK9tDPM9KPhC9xR8utw91k5bDQk52iL6o4Ut1P5dJiMcL4zejvygSskxFDtQ",
  "key35": "4R4eych93Qfn1h19gtbX1mtsKJnNqtg9HAQtNqa4N4zDFG1z2CxMvnKdvJyu1re4SftiapYC8JrJQjvmdHktrcuq",
  "key36": "3NjQR9GQXR7SKHZKQ38ZJYNDEictQVUFs6TVuU7z7g8Xh83Si8n43WYraVFMDprt8PUGwqsBm54wLqGLAT5757CM",
  "key37": "2sodoTqEL5zqrdbLRPWaGSK3fTH2e4XYAE85sjonm2W6SGU9WDxSZ3dXt6YuXLkwt2iFJUu6dU9TjkBEakiC26WK",
  "key38": "3vS18A33YQQLpkq6NiCxtnqiW9kQu6mejMKttd6ULanjPX8vcWV78Dqb2xwQEcSmXs5aB39mAt1y2s5gG66XKs3w",
  "key39": "4h485r6Ar98hf5kisJfEpTVu27Yfj4wHdiHP14vohz6688uHz9hPftE62CEdSPFCs2bKeuJtkf9RghTR9rnXhdMs",
  "key40": "hQdD3pGWndEVTusZwq5GkgLeecwyADccacxm19x295qiWkR5WQC4S3o76LRHDWrKDcVrZS2pm6tm6hhEDCDoeK3",
  "key41": "3jfo36ihmcCgqzhkPdyDhVj3Xdeo8EL1aPjJfqopLz6P4GVsL6YtCxHdcNREPiUamsoFatQHoeVDnvqjFpYbSsEF"
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
