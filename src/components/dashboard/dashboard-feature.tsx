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
    "BfDUchskpNk24i3zEUtjH7LrK69ymS1FDpPvF65i2B1Ryt3mm8697XPYs9hVQHetBZ1SKVx5r8ViMxEVKTZCo1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TE7nWFstZyG2kNdmjhSvnWewLHitZGWoGZGeYpdsPmERMRggYa6pw8rwTywb8GbDeQdurdAgVJwTvk1NZk1TWK",
  "key1": "3Wb1yyvbdwPfLNepgqgsYCwp1XeBdBQP88EC3CkpY5mn7Zz9PbrSXa7WRJt7Jq6LRojPdkJWj7D1kHG3PZmpnCmH",
  "key2": "58juLg6cer3nUsTJYxaPyi8oHL1KF6FJfe6xVAnXXnu9WvQCiXxnbRdP4o299X74bK29nJ4RJsgk22XzWj8PnSXb",
  "key3": "fYuqoE9p2dw2KxgMb2bBeoE5UbxGQ8M79v3fB27aCVu4FCQ9zRWaR5B7aXE9hXMqFV7qpRYv66gYRCJvQ8WAoip",
  "key4": "26JxrGr8EEhV9eBuXAQraxW1TgsCkgGnoMQ2YuzUSV67XZNm47QdcCJGCNfzZ2Nsey4pLZ6CyDTNw44qCfphMqTc",
  "key5": "tu19iKbid6HUdrwY6EzmqdQkSJt6pYdLuc9XG8s9PDoWZQg7C9Utjh4pyiPnTwQGmKZFRWGSBdvAH8vTLwEQitj",
  "key6": "SPAV1aYaEZEemed1H359e91UaKetXEZKXv16EssJuF3MByHjC5XhLNNZ7sMVqTGLxrSSNkKmSjr1aZBNe6GGyt6",
  "key7": "UojzahK2d8L379NUEPeYWXZDStjd8gnsf2uK66sbem99dfUgUhMxWeU5evWZrnkE8DgqAa6e6ifP6znwYexjH6A",
  "key8": "3toDidcGDhMf5jRWTRpi5B7h9snBHxRXTQHBtowbERE937at3aGR7FejtpinnnoyVc7LjAbJ3J7y74X51TRjnCMG",
  "key9": "2CSk3jpFGNU6KuPYeD2vcD6YaN9HEQbJBttb87AEjRHPAtoz9mXgxgcYpAan9u8nhys2r8LTt7RXy6JxNaCs137D",
  "key10": "4bzvHSFzLbSwGfY18A1Wk2zzxWEi3dMvVBQeCSUPesWbV3kYKZjBD7WE932u5yb9yMWWjSfKmMoXTiPf6zNTPuLL",
  "key11": "2rSafsjp1JDVnyyWN8GGAGcRHTYojkJNcoUgsXCskVsSMpRxzBM541sRiEkwxkjPZ1xBzRYjYvjiPzbL4QjZft8F",
  "key12": "22dst8wLENoejBPNaUBmvbva3pDfU36TTRM6sitLGep7zmUnS94KJ51uiLmd426mPqyprVFjWhok3YQjk9tB8BDc",
  "key13": "3H3LDrmna5ftJ78WWMAjTsnzDgTQoCGwG4mfQ5YSM5fnRto58mTSwT8uAUo9bZ4t7L4QcbhsA7cetJfcMVeCdgW3",
  "key14": "2iX6N91NJu8qYwnz3DtiP9Dmxuc1URbqsdbAyCSCzsFGo2F1KTMRNn6pCdz5rqtDw6bpPpk8Psm5KFG1ifTtyBFM",
  "key15": "66BSr6urJ7QVwZro5kxeEzR454uMXcCFdKbGibgyDrZW8qUUPrbiod4oEo33S49LNgCP2dMfUxbrQ74UpqXZBgbm",
  "key16": "2gb1F9H9Nc3mpAbVkiBdhbY3uGj4JKcoH95gcaDiav6yV5RntZZcouDQ4xdNyJpcvFvhvCgNdLAxFNwxFwYVJ7A2",
  "key17": "3sVw9WRnJNuYxgRXxTKuqTF9oJNBNCf449TE8NomFPwCfXaxgp6k5diew9RwF8rtuuFFi3MvVSdxW2RFi1TvkoWu",
  "key18": "56WGgX2RSxxoE4EX7jLx88Qtn2Wn1xDMi4v7vXsHuL919qW5i53ZJtXAZBojB9tTfKfu7opADdwT9CYkh5fGJj8Y",
  "key19": "2Ri6FmqPqjHHWVV5SiAXQpTk6trgrhFqu4wFGGCdgV6AJRp7KM4Eb5fEjqYtGQRBF4U32M9f4DivDXAWdVau1qLK",
  "key20": "UbhR2FDC3JfUn4VTFYeeWey8t5gkwsDnKbNc3FeV5XCjWdFinKJpUDnKX4yeAAeMo3RqsY9YJdrgG4ZhTdP7FR4",
  "key21": "3MxCevVcqC3kdmmzmocKY8EaqYdPaijo34R3LqMYUp5KCbMXyKFNNxiQz4qdpqtoFtxNLhhhf678u7XK2cUaLt38",
  "key22": "2f94tBhuPPM1CCTV7JHZkyzkEmPxS4SgnUzP4Af5rtnKo1uZjiG8ogKdLx7fcrXVFpsef8qGJE3ABbJqeF9BRBvU",
  "key23": "342kTQC9LqiRXymMmTyabzTP8W1zYbqxuC6YfFKVBfWy5ock39ab1TpxpCAAJb1LZ1dfiih2yNVHs58kzo6F6TxH",
  "key24": "2S3JeiESKD6djf4K55SGzRe49TgcT5EAWoU1mdz2o4Pqc2JrcAy9weWkzpgbZuHBwTFvB5ncPxgaUzt5NcgaDpJS",
  "key25": "3sQSEJdB2tidz9yzHeVAafomwJjXvAcgBMSQzKJAqgzKoSna8mCGNsfL9eX4rQj8PMRu9SNHnoFtihnSego84aWQ",
  "key26": "4uzgXPyfWYqPzEF8C3aTPDw4A52LmFqutH5ZuXnnwt9xzbcWRUK6kKUKTNmeL51tkDkwx9KeMgfWdqzVB7oc732o",
  "key27": "UmCosijdArUWfP5pDiGUqgJuN6sKZwD5hyrpeWSxyjekMfUSY7Ar1VX91aMsuy81fbjCbvQ8A9iqHPeEuAtUatC",
  "key28": "5VTS9d4DZBCgToWDQuNuT5wc3Yg8HiZa6DSwyn4iidxuQ7ANLrK4E7yS5GjG84MewGgNyQPiK4SxofrPMu4QCLU",
  "key29": "2WnMxjHDJNuMUe49yaq6FJKA8WbT7hbVZpt4ye8tfcZ6aNAYv5FTJSQ46sV4VqzzPSuUptzha62mjoWNGqkPnRiN",
  "key30": "4P8jsG5xQ6Z7PXtcqU1sG6tMr3YtTqRxM8kc9h3FXLDJPeFza497ejkm1pSrPLsYYGEUzQ6NbsHhRkv37CsqG5ME",
  "key31": "3wHTzdhZ3aHEGVkpYzhTXnus17nSXHzTUwFvxo9EudEZeAswFSBEaMUHZJoNLiyE3zBkML3yi4VqeJXdFrTMK5Ws",
  "key32": "4k9G9Xn4BVCosz1fvP3zfUijeziXXRgZ13hwLcqkhwddMUxtnJhrGfLzJmecmEecmVrfpTsQibW81t23VPioRGY7",
  "key33": "5pHHHsGxkunrarzdW648QA8brUYz8GkSEZGBxZRiykBRqS4pMMTFfiGqVG6wJ3ovbPzknj2ESLGJdFKTzVzhjsVQ",
  "key34": "4z5ffpNPubpj4h5ZbGpDnob3atoHcBHanUmNTwdEM6geR14WjJC2bVkx1m2beaEU6Yfqj7oawLHToiCxEAGG9YXs",
  "key35": "5DRcAwPZKBDwT9gGFsTJ3EHEiwqMyq21VdiFkjj3LGEYgcZ3FxfFnPHV5CS6XNiGFStfT9ASjfxaF9PX7MEBejdQ",
  "key36": "4cmFap7YxTGrgcrHzvu7Wx4428fKJd5XJkUFHuzbS5em1LMbA8g8nh4DesuzYLXuWf9S5RtVSr17NEkgmXd5k7LE",
  "key37": "PViRURzF1q4qUv5q37MySAygN3zMMUjzWnppuiFvEYaQ8HKxwtd9LMrjcwRoYDN4ppPZnnpdnwzQR6dH576ox4z",
  "key38": "3UJHpQLvrPnaMnygACrXjUXQCGmAZ6j2qvzHsbdi3CWp5Z5ac2usRuiEhNrB5Dus4SZutJFifYPbkykTCDH172ZJ",
  "key39": "wHfe2trHE7sCk1QK9EQxXGCdQC3zR2EhcsGfbaFjiThD6EacHzt5JAs2ZBNJDSAjntUi4gLD3u3MmrfUR4UgUpW",
  "key40": "4CGHLfiQhhAgdKiCs4AzLp7S8kc8GfNJoEsxaoJayFw1ydqUmg6m5so6SiYAV71odekToWQZ5nnbKUd19uhT6jFR",
  "key41": "MHcjDKcrhbbQ8bmVp1rXE2to54tQLkR8H8xZi17VA6My5rMTELru928y2EaKbxbRnue9fAa9psbro2nGbUr6cu4",
  "key42": "3jLy9qnFtaZhx15R2RzzMhgj2bB4hEj3mo3BJUThCa5uLbmfLF6tPB6tCAr2Xm954UFYcgqVsudBmMEoZ5LaSd7V",
  "key43": "4gzSHyLr1XkmSRV1wDxmXbzMcLx6zYK3EfyHq6L4Te7oBn5u7ue191MxZ3joDGEkheziDar5vX5MDia5mx2CtxqK",
  "key44": "sChbGxNBuAaLoPNzAcCHDt75xPf3zmrX8eAeuMzKUg4SqZ71uFzhKQw9cNZLPbcDGjnRdanpDmzmNnQithACqTW",
  "key45": "26k1uyPoTfv44yBNeXrkVpvmaMs7Hoxgb5WJLQuj36b35fQcfc87fPHDR3hEoYHRU8WRhBmj9di4SSTDQFFYmemE",
  "key46": "5Csq9AfvVVzvErphLUYL9wWqqqxLX3aDKm3e6vKcZ1zLWspzVHd1GYbsreHCsNWq5e1BZuJioZ4eL9GXBN3tVXjw",
  "key47": "4dzphHFybDkAJ2BasYqf8ZuYGncin1kNgqhrk25BtUj289nD8TrGqeXCtz7hPETCb7r2zDQ2ZVeW8F5V3QDcb25a"
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
