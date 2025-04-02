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
    "3PtqehJXuRq2vrkQJuZsxanbAvQyDdjdEnpJzWQ4u8NaqrWJ4SQ2h15qXHNwTQbPNnP83dvEnmdV47ys8VkF6asN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ssUHzWUfXyRcNoSnQ9QdY6U2pYFhoNczmLuBR4XqTbCqXbtSekzzNXSigWWp7kioUFVB7xTbGVK75P7usZrorDA",
  "key1": "2P8HSuAhLYigqezEsSuhCibv4Cnfg69zxdRWVXDzfa2VSfVkAeAgDjAG9Ze3tQvronAz1BTJUYDrBLpYR5TeYbr3",
  "key2": "3FnfDgPdqMmwFpx3RJS6kJAY5iPWzgqcBZTkre4LxiY9tYS7YD2gBP9ELddDHn3ZAQwD7i3ZA9V6s3YD65jk3HBT",
  "key3": "2b1Ui79Yu6LD2JHc9GtHftKR41ALpPpPLHYZ6gFwfr2KGaruYdVmBn53k51gZ9PFGcDpCMrL3KVmBc7QFs4HAzu2",
  "key4": "3rRTDCJMX8r6F3KK46QAtmDJ57XXz4qoeNmAtqDpiTSUHq6m5H73XgzEhGdfLCWWxF5igc9LkPT27eT6PxLJAiy5",
  "key5": "3c41TigM1H89MmLeyNt7bixfFsfkeLQg8Kdm5xcgmz5qN4aE8UYxFmSzFaiUifCSrm895zB7UmkmvWAKE7NMSxor",
  "key6": "5rKGKHNe6a3SFBC8YkbWR5PG3jtneaDd1QpteBci21H35kfa3YyAvDVqmjwV8B3TMEsrQvJmyidyB9pBaoxh7Jts",
  "key7": "2AA3Mr6R1MVwCf76qeFTqam163jPhxFQkN9rgErk83eZXdexhsZkaGs6sit1CbMETLmyyhXX7Pn7zHi6JohLqvpw",
  "key8": "2tzaaqrVb791RLd9AVFLPUepqQcA44Nse91TsaPjbchATVn1v9HaFptd6Aq7PSrBXburb8Xb759X7MBV4JsNLrjW",
  "key9": "5xXtYywrZhLv4aaZNndDr6Y33DZ2VLGoAZMkcWrwjTEZvfDnwhpyCbZVdZzj29G4kmFQSvRTiiGNo3XX5A1dZAPD",
  "key10": "5P1M5i4wPpVdZFs2wiVXJbSKoNPDcfV71XGsVFEra4LKDySHgLmxToErQY7N5GYGvBV2u6r3w868xz6PCQU5L6h",
  "key11": "51xYGG1HHpsWZuPFLAN9ny6CqiyWK8Q9YarTU3bDZdHM4jispx8wW9h9AD6ZMPTB3wF39zpXY4S5pkfDurppZaRa",
  "key12": "2kjpo521rbfmw6gNTebBAHj1sEXAEtNvk2uQE83CEKMNmq6BQ4414CdjvZALMxSBSwbeEPDZP6FmuPYZ1UQqYSGT",
  "key13": "5mFp1MozTGcdpBmtasnKiCqMAP48m5Zf6xGh61EsuW2Jj2vTyik2VgBVr1L6L2QA2oAGjT1PT4si9uMKdLGsLJcW",
  "key14": "253qTctCr3LVjhUJUoBqECTJKTHE7oujGJZ1BVHj9EtxRs94WBpgY2Yxt5CFtEjT9vUephCdMWi8mSX83U5gUQv5",
  "key15": "3MU4GduMa9LYzQM7e3Q94GgkRh6wu1qgTq78VRoyFW2EmdfndKKxDBm8usPvCeqCh2hYWC98yg5DHhrJ3YH7VtG",
  "key16": "4cfJLmvXZSXf8d7fhX64DsmGpNLGyhakdYgMSY3bZE3WdKf12Jqzf8PwvfAAimAqMmAY9oEiSyp17QHV7oaEUcFL",
  "key17": "5vRNDHJso5S717rne3izCVjBYZvJqazN3LpRmPdihpgCdLR2ysWvxQSLiTKyLoQ8H6X1DLZrQDpriFLs6UCZVUyr",
  "key18": "3bSnmnjQpXphMi8TcFHvyUUGoxMZQW8StD6WtMRbicKbwesJSGgd1jjpdfaPuu8DpZfotCrc8qquVXDmkz5k7fH5",
  "key19": "TM6iKLry5dYEbDeWrXJfJESkM6ctZtPE8rFzGnHjHUsEyiaXD6mSfSQ5w5oFJJhrTeibRdUVXmFNF8W86TZ4gGE",
  "key20": "QE5V4dgvGbYjnDyLWGNu86sP9bRzdvadX8kYSF2L26SukZ12VJqX8cyUV2nyD7EnAtfkmNangj2QMFLcPbu24Ew",
  "key21": "2eiQPSsfwTVgdGUjfRHkNYZ2qehnrnDejkN2zLVLgyGksp9izdoc4SuigC8As1tBxTUUFy6mydLuueLkHwRawrW",
  "key22": "2FZsEfGRZhFuyj8yDQo7zmAj33QdLUx3cxnSUhDs4NDwzjcpp81jSxcH31gExjLxf6izkNTnm8zZMTrWSjfg6EoS",
  "key23": "5bWbRuafvvC6TXSJTfDea8wdYUxbf85qsQ3yjrT2us15RPFFajrw2641CGz89JDqQuTjq7nuRrawyhdQbbcjc5dH",
  "key24": "jJbK2SXS9WHUjzeiFRbwceM6uyx12sXdBhDswaBScU3GLXJJErWvHMb2jdEogEXfwTGKirnzpia8Sm7ic2Ri4Gu",
  "key25": "5cUP2zZxf9yMNqsGJhEVTQmPGJXHUAFyCCfjdkpZCqQL8Re6WHBhL1i32rjZNkdpDt1rtsgotp294vqvDsgZh5v9",
  "key26": "2GvvLycdyUaPhyheTpHD6qyR7TTKjWJ4dGhr2hmutL6Vk5miMGyGmuUwkW3LPrwBmrvCgqoChbwG31gkcjYoTxw1",
  "key27": "4oTdUTc7h7r8abnXwhGf43evaxGFym1LkRReCQNGHmur3ktCEdNfcPAaQSEamXVG7EfVcy1TH1z27VSkQKjRbS7E",
  "key28": "29ATWc8VYUoZwif1kA5hv4dHGv4vpY37ihMjzPKNUVC7gDvEx4uA7AWpdZFhgGUZCXZ7a7SnZCwXhh3eVb8UJnEk",
  "key29": "2ERQM63RhGRPx2uXuHNiiMBfGfLaTMBZpkiPb4dKjX2ceTM7A6vHuxn3fCPScgUQFZwtBbD1xJ62BeaNh8Jrjcs8",
  "key30": "2Fm8cUc4BWmgKXmQHCyaMPUpdeFmP4AqoSffKN5vDgZPVkmij6HmMizLfJiKinahgUUundQnARi6F2yR95ZGX3nJ",
  "key31": "2Wvhc4gvUQuzQAqaaqFVkqBBRKaakTA9oDj6b4LV5FSZLZiVpig5G4PcZ8FoeCq1ByYq53V5P9SixQMBj2eLNmDj",
  "key32": "51wQFh6TXw4zVWZBJZZXeLjprxC2WaiBywFFFTwDcHyZiZxLyWzPUaXaukiZ9fU9CkY4Leb8xt6niBmBAzCDfL33",
  "key33": "2DGV2QMtsGNKhtyTavKDwfoL1Dq29XNhkGYS7gVigYCQk7wzVY4bciH86h8wVoZoNLhD5YQzBevW5p6zpdqPEwmw",
  "key34": "33WhoyhRM7MQStmB3yPiBxHQXnAfKwJqprLtXLGyY3yMH3kamdTQGyKTMs6iGWaojtZwh7jGTa5YUiGNabHvuyEb",
  "key35": "2Ex7jTVHyAeHvw9DBFjS5RjVzZvhAjV59XMnBMs91i8T6LKBHhEtSzmV8n65FipE6bKWRrEcDnCPe4mYKjshqbUU",
  "key36": "5Ly5gD9KDHKPq8PdpwnWWwHPffAX9Pyikb3YN4b8h6FyCKtRLjWLC7rFdHRNdUs5whrKBnv4wcsFNMF4TgbUYjrh",
  "key37": "3GFDqQEqCL8oXTdU2og6Tuv6LNZ7ryiLrSt6NLjmAJi73LWLjtBCEaM7cwFWF1GnBreGLYZW8ZrEPWnjfRmwjJv9",
  "key38": "4xedp5fUFiF76iSBAa9DQKHbx2v5NGuyc28uPufNuuamWgrC1ep9DQQJx2vEy35Bw4K9J4MNLSy51WCPJVqWkvmB",
  "key39": "3ecGsKvHaedZ39S31GHCPyR2MaWz5TzkrZTrhUcYL9xE98jGKdpgwc69ag3F4ucPSAFamxfnG1TwqKLEus1S4hNp",
  "key40": "nepGnEwZEnC68ke1MBu6xEfXRZmZnwyM6mCvXqkqmWod2KRLpZ5PQc3DvYiV33VfGMUU9ApQHcR3SAp77HYWhLE",
  "key41": "2r7qZMedspGQXKE9jQT3MhyFUMabipgQF8UXu9BYFviyd99Wkw4xHcseexFcHgBp681UMwrP7uVTbvWd48k5nTsM",
  "key42": "48QeBP1BgqCbKePJ2rPTtAhEudW5q6wJPsh8v26kbdW9sZ42J7zhoXbePPAhQNTZvYBo4qxPrw2cmDWZZ5AowLaL",
  "key43": "5nnDrgm1tqaxaeMbq4yyFccT8BPMkhwQXFzG1Kng9vGAUYW39YXkhwBA4vBMG6YYa38CXnJ8NPk18b539F9xcyjv",
  "key44": "3KkUkZHLDWezH2QERrJFXdV2viq1fjchifnA83NKmoiavKd8jAttExEq8EAyc7HJWyzptfodhNZtMFcWuFbkg3oU",
  "key45": "2o7qj5wEyjt9RwqdjM9TAhrn8QEFcw265BDKP8gRvB2unXpVnGqxfMCPV7D62WrB2Yr29sXjhiDqT2Lo72a7xjqN",
  "key46": "4VPNo6fgCuKM8XcoSuh4aKyQpz2sW1RhWfMsujrJGo7K8kK3wyikVnaZnCnzbr6dQdq1hVKxYf1k8xSLisNQggUY",
  "key47": "31ea2XtCmv6GZSvK37jFQxPNMhQSJFQbfMzj9NhHBW3EYZvzVKc7ttytshPqpjGG7GYP1YgmJHXuRbGRxvZ62LQj",
  "key48": "4kSCRitGFjrLzSjs8aGKgAWsokT2h8U51bSCFTGDSVNsHWrkGCAizFkTbEjJ1kzqDspG13dGmgWvsdzFoJf6UxqL",
  "key49": "54RnXWNzMNY4pErL9cCSgXwhw7MfyHmtiZ7De5cmmyQpUyo2M9B9SpMNVhc4P9PJnhRrnBVuWYFW5CBLhamxEqMd"
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
