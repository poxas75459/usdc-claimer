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
    "2Qwf47yTuohmUkabu4RJXKbTgxw8QkXfUJjoBEL153PfzqKNXjEAZaUSrwb2hWmi32xZmNuVWkKq1BGWSiG2Xy8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YPdcSonwfyC2PvW8KcFMT2wmAFJXe4HYQWpgQwM2GpUqR2AsuUUxme9TnsVCx9fqH89rkUwDMgfWvaaWVMxM4Kr",
  "key1": "pwbiXWTnjXX3RRbkg5P5ixhEcBMuV3VRfGci3i84ZKoTh1CZpe6VtzdTSAeqKnV7fx4oKHHXumzv98xJrjHnv2Q",
  "key2": "4HCfRwJRFATZ7Pcz2Acydjqth8s4UaCzrt15PRKHxWMYBd2GKHTLTpwmTjuPS2yH4dhLDQ2uo7zg6UkyCm4FNdkx",
  "key3": "2L2a96VpUBYSE1E1WSLZsow8H5WVzmJKGca59FFMZSJCkgBFqwrAtS5MbWAdiWPNae2pz7YzeLJWao3efbZ19A1U",
  "key4": "ZAELMoUdz5AmY2jaGtwoitzrRyRGRvoC4UGtNXMFTjL2VmTTaoWUd6Vvqz8HNB6CQQJ3cTmj4NXykjmyXJT9MQi",
  "key5": "2gjCCxZmzWQQvD7funZkT4sJhYUcYtXGYFXgKtj9TqoGY4azf4YVYUgWtTJJy4rRNsKZaVLKcU4thZ4weiAsxsnY",
  "key6": "53B7bjQ2WPEEJHBkKHm991HrxuPLVbLXDLZA8fSPDdckyBhF1NvnUyjpDkvCjxA4XGgqoHEqhPvqzEf2PMznAex8",
  "key7": "5fRMxwzsN9QLpkdintyCw38mNzxMWdx8Xu1u7R1SDpJN4UbqBEyiNpfLBxhU6F9pLGxibELUyjfrnpLpQX6NnLsx",
  "key8": "5fbKZ1wDHBXzXotrEXhJRZv9F8y2FrmmJkNvoMYyzKMz8xT8HDQMWPKKW8NZVvQ1kos7QwSuXZRstZ9H2DitDJcA",
  "key9": "2b5X3McBufo1ZhuGUtiHLw2qQBt34L7gD2MrenHYDgSQr9Rvzhf3WCff4G77Uqhz5JfoCQkWa3HbKWPsXcNdnUiM",
  "key10": "5DJbFpukchiFKFv73qbUrwPkTj3nWbiPGscJoKp3t3sH6m3azjn6F9iXuUr31eeMhvZwTGRsxPUE3W2C8pzGFAbD",
  "key11": "3fqjebKCcA7WqYvHcsYaFAXyLf41XTcxqUn5piJfJs3V58BPNgVEAc37ZNmy2q56kWSdSjbJjM1AzHffcvywPkWb",
  "key12": "3LsXusp7pKP19AY6vXApfTyt5dcF5WScyBqmWnRredYUBB2kWEXV3VtgneRXQ7yadBWq3c3ye4UhiPPRoQ2Eswgy",
  "key13": "Dkgh9uNSRhjgAosrnGGH9vtDEHfvgiGcsAP6imvwLnwJJkfX4mBg9ygkBywD1LK74yU3WGFE4TB36Fr4Ukq8tX2",
  "key14": "2zBacwX1wKXa4KyhHrQtcKUkpVPefZ4X1UH5kW8vRPR9R4dNu17UNWA1NcLidcaBkAgDTcnbKTB7fJXjeTmgbisT",
  "key15": "2EQvYehRCVUUC3cRBhfyPgrLFkphn5DA1fKoF9UqLZcaD3aJeuBaVKMR18a7WefeLvBJqVpP2iXF2pfGYfhBA7Qy",
  "key16": "2xVgmwDA876kvKdXLabCBUor8Hdc5k2o8atCpiB3uznCxhhrCMYyhybNRVnmn9NTxmXd6DXHc7GEDUmyvb54yLE2",
  "key17": "3VjE47KgjrQS4os8j6wTZsXmTDSyaxyN89eFb5xApS69iVd988c3ihh5B3SeJWJ2wmnsP8VXwZuNvUVKtyLRBikF",
  "key18": "32ZLCXrcPJa4gVbvwzpUqJpwHPi4gaRg9yLMU3dFCyZCPRzfGkYTtXFXeYC1Rbr2DtqnK3AP72Cq6ttUWqyFohjW",
  "key19": "2Pum6V45UJtPDiE8wW5FaL5PV5jG3Fe9k2Knatms6RTXucU7iSXE9bdXSyu6qy13vWntVcfmVp2jNXTKoiiohUUZ",
  "key20": "3XUMYuBMkE2outzfpU5F5C6FuvsXATMNi6TwzBs4EVh39WDfJsxDiDaUNQ5Yy3MG9RZbS19fLvTQFqJ3Xpdp9spw",
  "key21": "5NDR4EtuAREsgxHHGVG78TmAYdKhv6atSY4k3TFYcafs5xFdzmA4n8Gjdo1EXX2WLnxbNApgv6Wh2M6fZdTEikFo",
  "key22": "482GmUynrVSmc52hByPKBJmYphheXT2v5QEzHGWWgEFUwoU1QGStDoAb4UDKVcg8ADCDh8V1X98h1612uyEfnGH5",
  "key23": "32PBmaRvyMcXUqx6aBxEY46h2X9MWwH7VJmXBh4j4ZASBHw3ZbxQiuEYiW1LesfNc73gzER7UX6seb7h3Hg8iYwM",
  "key24": "3VX9xPWAgws1H1k5zNUHcWxhWyzmZ6q5oqXdmAFoy2nrLMcmCcAAyG9XjJq1pLM6Re1Qre1f8XZcvm8CrxyyWYZn",
  "key25": "TnDkdQ48MUnyyBmR8JHvaepgF1vci3UPdPDwUEH8iasRXDpNuhigA1B3epCEAJJ3UAbq51WCzNqDkAF5JVnRNFi",
  "key26": "2bBBGT4Tar38FSXM2tXaHtcVuEd8x16xMAVRZqen9JaBNQHHroHLCKhi4otQx28LUZmEL1AotgYXeztGzdKCaAxr",
  "key27": "37JaywW21Pav8mLuinC9kLaUQoiywbZAU6h8ApCPj5979kAyh9dZ41foVmqZPEV6BvQHqS2Zp5ZyxdMP4SZQj6GK",
  "key28": "Vo2KD7cfjfCJ4M9oX8Yvj7M4iRcpXnURY1nzPDMusxpvDaSJCXJ5GFdwGGirEfKSumx7ij8nt1Nni1dkiZLYN3k",
  "key29": "3qdUFNuFKiCZSfvQp2qbyCYrtR6VTMF7oDFA1d9t57KcqsQt2DeV3YFjb3USYvkgVGTaLpAzSpagr51MaDajdUcP",
  "key30": "4APzHkCHke3jsifBbB3CD37AQ5KsqJdaJstp9gZgoytckQNt3VtgF4cxRK6tVMt1teUU3NXxe2pqH4zhYKbimfcq",
  "key31": "27Z9v5aJH479i7DqmpbaDqqzZpBXiezsL3yEF6WcuZLWp52vUnFfGKS5FiqdpdTA8v5PMp8oBZf1wRQbEWt4qP75",
  "key32": "2ANeN9DVbJJTxomU645JiRJN2gQPAJJXdLrH7Sn2DWtS7qZrpfYnqWwHyYuNKT8WSjecqcKqLnMi5cbH9rPJRUsT",
  "key33": "5t5rke37WEgMhsGS2YVvrwTeBHQnvhFS2fpEmAeKakMJtLMd5TavfWRXPG4dXJoWXtNKeJ5NF7z5yVeGorJcNmY6",
  "key34": "4ZUkKyCuLQdVipQwtLSSxiTiponTwGo5LrfKLKS8jNnu4cSX73hC52eaAJLe71UapGsQQRZopJE7uXyrX61nWY5a",
  "key35": "gWmLg9kp9cLr9grPQrddXS45JdKdJpVKm31oyc4xDoNuRgDqZVXXK2upVRkAURkgPmeJD6xGMp5BSSmYR384suk"
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
