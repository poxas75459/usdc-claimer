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
    "3YJVEW4MxAfoUCVb5wLfrbgLGCb5WwjTePq3hWimEasAW2SYsR6XEciSWZB5aynRZ53QKbyF92eDhEdoimsB6jVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ck42RwuMnGvroftgPKu2ArEVmuKyFu8eCnykQBPFRV34Lv5DvGN9ygbhnqi7LtU3UkN6McqdBw8d6AGDdUhnt57",
  "key1": "5xfgPGRXPqEMPkqtTDHczkaSVmgtQk4iLYYuL6uVYAXRtE76VfpXtYjtqKWwM9RpMUsiY7SEWsHRKR5UP8kWZcQT",
  "key2": "47ihtgsGMedvJEUSgsue8SKvXCPbfJ17UB9UiH9HxGBDGHWcdXzbYBL3QCBDQJHvC4tTLxwLkTBM2XonaEVGnxgt",
  "key3": "dznxZHaRQRqrBHWVkwrTG5psSjvSrpdd3WbsxU9wCnP8q7MqPSxCTMR3TUz3GiTD27TPPMBcJrmAAzcahJWaDy9",
  "key4": "5QDkRH8jb2DtF65f8pazTAnd97Cuf2pkzih78iMBb2vEWrKsHq1A56Y2ky7zr4zkjk7e5UDbXWekz5vt84q2rxAh",
  "key5": "4YBV2YMM1YAKmyLedpoTUdYanMGmNHoFRU5ssC2tfTU9m2jKDo39sjFrNC1cbEp8fUjXGg3ejPdmWcagxzULvSgf",
  "key6": "5rzT9rbcEsgpyHhhDxSWX1YtJWJVmYVnwQrpbsvniVQRgHLzMexS4U5hEoFBGb1RJysHVUTxExxiJXtpHUpycXNA",
  "key7": "4rRzUsbRsE1ma79Lfa7KQwWbNQxjpPEvo1ukW73MaDCcLbnhSBB9uSswztGE3RCqqdpQuqaf1w1wh4AgwaKVKY8T",
  "key8": "5Je8PKJkvoDRmTj35cb6g1Kd8XnTKDpKZvn8nqnk3q1X7SquE54pd7BzSCFPYrPVJeEN94861W8Sj4wtEQm3WuTu",
  "key9": "BgSSh6aFacLabZr8YV9mYwFTQw8ma1ngM6NTVE3CfobKXZqPaF7sHciFqcQHkGcty239rLTdfDWt1AuYW261gQk",
  "key10": "2XsW85x26DT2FtfQLCoH3jF1kWMZLuhDCoKpdNXwxQSJDWogyR2quSiKDtGFDmsEY9JLLuhTcEih3V7ZYNDASaFT",
  "key11": "7tuRHw8zN4gm8XcUmEMQqqN2ft15brs5BkYH5xD5UYCBfpAHmywjni22mFNTsbvkBhNfptam9s7nMvQDayKbvii",
  "key12": "4tGv6PJjNormN66KQpMJfpP6kQjbfiyFVUWxmTaFP1PQm5AyX6UrnCi76A8RgPjSaPLo97nbKKjy91vDPxeQJxDQ",
  "key13": "55d7bcEAV9zYa4VZuVnHN8fdJWBJ1J7wDr41Gr9FEaN5dWNzafsNZFqCysTa2VNXgsT78d92EABKrqJTdsGbNNLT",
  "key14": "3iQNNZMmv1SvCL4cF3ntjvS1mHjJRAPTD6SbVJ19aikszFTG8gMd5CFzyLMvCTJjNjUKHe7A8i2ZhaAFNpU31J83",
  "key15": "HGoTZF9NUhJ9dvPeda4qrkSTsqkcP3ceVtP18DBZZ69aTVzPN5Phn9vYMsrXzEvk9C9jzYf4NYMkkwQVA5mDf83",
  "key16": "24u79YEmYBErAAjBQQ6bgAXeeDex1CvhdSF5x7V9brydui8ekPWmsHgqiJAGKF8uUdjzd1Pjpey7EvR3fZEnFmiH",
  "key17": "5RgD4cQZRJ7FNqxtJZYv6tYooqVDgx8AtgVRr61cS5zbWwwojKoABytgPLYjhweykpAjfxgXNBtomzjFdSsadhrJ",
  "key18": "4ex2Qok9j2FE2YHCxtm9kXP62WPVhbyiWSLyL8ukGaApHWimbPxeRZAJGnwe5nXGtD8Ey1m4JGgmhopsCHYP9pZi",
  "key19": "yWheYwmcNUq9opZ3WE9vKvnCmnKVH8ayaWowpo3YhYJE4vmqL6irNuM7MmFXNTbfQuwnkh1DCeB7AGX2ATaU1s5",
  "key20": "EuazzAYwipZ3XAzAwDECtwzxyBrTcUqEvi7x3tSgeed6v1qL35T5c76fD4Rrq8bYVQmwwHdBgPfPfTakpBDbDZA",
  "key21": "g6gLFqH2Qi3JB3bdSqSYV8HaADQymbSKtRpu48LaYmMGHT9gmJX4PtWi5FSqgD1QCtV1MRQYdiLeyNmTjWfXMZj",
  "key22": "2bLyrwCksMQsWD1eLNsKAf9qpy6TNBFtvvzbj7NmWWXdC2AxhVBXjEnwcNHHQTiKai1ZegsUtDQSUdatqctjgkXa",
  "key23": "3KHU7YHrYpHHX8AGnPxQNRYFdMYooREyGUd6DtKSJQw61k2FDjvG9WUbPhBCBpYLw194jsb6tPLwLrZ31GAhWuwr",
  "key24": "5TepXh9YsFckYiv5qzxbjzyrKpsborYWQbFJKFcsGLTUntEAMSDubEdk5bJqB2rj2FkSCukjXxvxSAib4zvHXsWF",
  "key25": "5qUFwamNwQtfzGAAA74gCp99erAqu8w4MBiup9L6eBUnTxqNYFQfdjU4q5UfvzZkpPYLEKUnBVJGqSmibNdGkB8U",
  "key26": "5zrGkaRdG3UsaGKzHXAcrBvvpsrTDW97uNkzrtE63s77wjoJfKkue1JLPnadBsvbu4qZTusVAxKeFugK1rRQtJLS",
  "key27": "4MeYfsF65jyWyKTsCkkRA6cs4S3AmW9zL78ictYqztGsPXSwe8HKH9kZxFARsUhnrqgq8Xyx6PTRaQc4kPFL2c23",
  "key28": "4TNA6GMoyN4VN5cSvR4UXZwfmG2W2TXAMFPpkpRu2fEQD4QL7v8LAH5qbGsC2z952Ne7dAT5c3FmWA5C6EKbiNin",
  "key29": "3uMyMmm29Jp5Lf7Ex5ARSXLEPBHinc6mLu6gehwyP87Uzh3RzBK8d6mRuDFymWJmAfoe9apM6hgwgjeAoPLhfwY2",
  "key30": "5TEWmcnJcGaz5FSjVzhQ1rGcSVsxgSDQEiZrjDVE5h1mHGerRzXgo1LUwxpabFjVLa8gpCTchVxkC6HZFT4piFGP",
  "key31": "4FnDCJXma26JjgP4BSmEjuBTSQXfgjdXj2QYAoVf4dZH3pdGgvgoLggL9tkYy4wYNi4Qc8mxR2T1tj3qe7nXyEXZ",
  "key32": "3kWkQqVdCAfTRcy8dEYgzPUFzcQ7JgaH64wu8AJ6v9e5YFXquhyxGSFoj9SBGE393wdnSnNriNBx6cVHxPGjVrgC",
  "key33": "hBxyxtoNqTzCDkMJL7aqy3vsam5yzxHSTihro3FnsozhhHJ554jwsq3XUg98dRkw211jD5oHLqYSJi6Af8P4MRX",
  "key34": "4EdE5aKxjBYRvoC27Zw6YCSNrDjpWuiWCWeMj8xPV9WV8eCHqyqSdhD9f1mWheodrN1pGQKNsZi3K5waSpiEUQpc",
  "key35": "4h58rHFYryCmwZ37z5QRSfxwf6SPHbtZ3ifxTYnsKE5qzQBY1aBrrvreagCgbRNua5tg5frTgLauP2eh1vVCoNVt",
  "key36": "2GkPjEDNJSukG7uCNmpWqxtoN9HDj6aDgego4i5PLTxc5yb3sPQqpyqe3KyBmiM1q7Hp91bBRDacJGDR8add2bZv",
  "key37": "3PVfk3W1MDkzksiDWrWjZSi8iqMcPQ3PyvbAUMqbRWsWYq17rPiauvCWwcNmyoPPZN4vEToSVUPPJycC3NqLfBoK",
  "key38": "5GQ2qjK2pbA3Y2Rz7LZ7EwL64iQBJHzVM5m5LEodPBGc8cxYaDsRUcgKtsE9yWMyebZMuxj3w9rxviFPx6vxPSsw",
  "key39": "5a9sBviTiW7tsADrfJMtYjD8fHnGddem2UPC2qgzGrKpS5XCvzaoQvjkFp4sD1mjzxhDas2SQtFDX58xs4KFKzZA",
  "key40": "31MmDBPj3MpRD8HtFtXudAzuGcFa3FMuKzXwhuKxabJ9ZCg9hEN1Q2ToCSYuCvUa8EnS2secwnSKwysMpWJKwYCf",
  "key41": "58bvN57MbQAbNmyve2UvBxRcF7Jxm4ohtpjiTvW3vRb9stLXG1mWWNz4VTwFq8y3vFdo1nZcMf6Q8BMZSHCRFCVJ",
  "key42": "2TfL1mf13qwvDzi68MSHhLUaK2yM2WLmFnmMqeKX7MeEB9Yui1o8oAMrna7iS8wK2pN1zcgD6cBuBoPjC5GJrQXL",
  "key43": "45U4CDaYsqmBQxj8Bw8Z3H25qcXhgthDthqqnfXmRUKdR4c1axdEwRrnutc7cdZtMXnPDmbtfcYCuRaLAJHb8uCq",
  "key44": "gFAsbDiv3tPooZNc5w9GqUZJmYoTifFUz3Tfr7LUNigQv8mqMUui8TGkxxiU7rLUf7y8FJDuDbdaSQ7iowjoKTA",
  "key45": "5h4GpqyspQkQFDiFJuavwh4s2ep8BFGU9b869XBLvg6jVBqt6xwRQY7JA9ymhwvBkFvW8nrsctcRjogkW3hD47am"
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
