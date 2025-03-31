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
    "smXQvkHm6WTNN9bcRbTEbYk7zAcj9p8tZpWRo8TQP42DcR2VK5nLKd7P4JjNA4UCuFGGsSFVVAVYsK4JyjG5X7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LrjC4D26BUbRYRNE1Pb2nEkdThEfAqQ64d7gKKLQ7wzvmcpScgKe5UiwwWyY9fcQ8xWZb8Zg7U3sfzMCE5YzUAb",
  "key1": "5KEkA45A63ih6Nq8eUCoVQgYPL8ypQaYeVu7tTafDDB8SQJMFQ2aHTTP68YcgqQ22xy41RH9DGzyD9AD8GKUK8CW",
  "key2": "VVFXHQSmeWcW3UJ9ttgZHQv3JCg1cGxseL4GZYvWejVJyzeAG2bjrs89BYBNxCjdt4oZYqQTG14T2uWj5LAqEG8",
  "key3": "5nJZCA2qWCb9uztQSDbqEefoNUZ1gFVsBaPoUtwgLbdNEhVpDxp7t3orxN12QExWE66Zuge7EcaMSSFhCdoFT67v",
  "key4": "2JQ9UXhVeED34e6jKMS4Gtty5SpxFx3kY42dhXKdvLPfzNEWjruCpCjzifpkwbYjKfPNAzBBHJd5ikFJBbPH8KHv",
  "key5": "3g5XBQPNcSwGzeQGoeQWSFKAE3bSFdhW3MghN6aRM7AoVpgf48VbSFZ6fQkJDByzDzg763DVxLQarA9yqLhewmtJ",
  "key6": "2aJRFnq9GLKQcwq2tepYBzPf5yxQfbEw69uRQhZy3H5Pv1DY399q8kEepvw5nNcxoeAnfByAG2B44yQ1WJ9Jwj4D",
  "key7": "52sGt4uFG44nsiasZx8hBzBcQGfihNQyBGvamvaZH8M5rpZkUzyfwZPTHGiGtEGVVgEVL3xHhJ5daoyvkfpePJJU",
  "key8": "5KrTbbafXwxVMf97TMRVusfZfdN61hZnjmqixBdoGq12j4WHREearTtyY8W48JPQ6HBL6M5LUa953hTiLHm7gnKG",
  "key9": "3Do2fuKTci34f6GGFHxafaK3d2veYNKadHPaWtj6cQfSKinpPfi9aRTb8z8dAUqD5s6wAGfW47YFmbUk486uTysL",
  "key10": "5veZ3AukexJ9jjDm7r9AxzG6idmpBxJfTNcrhSkyLjiaLGXZxeENEADHhWTMSYSH35cxazzoY4Pgay9qz6mAkJKg",
  "key11": "5e8pt4VMdptAzRBrKwXxmUgNn7icVVgM4vzGwoe6anMQDkk4Vbiu7AhVrGWPx1DBACQbhNHYN5z7VyiGfExPDTeK",
  "key12": "4WMtib2pdZoSGoR4cTfekv5LSMQGuwL54cX1Y9x6xuySWJvxgY1bt1VDSaVs7a4mscdo6s3F94mJXB1FQ2rkr9u",
  "key13": "rwMPECDUXk1gcAC5zfdcJnW3fNVh1tV4dSv7rQ5rnz4Nm9sHZ45D21MAD8XqWiv9d1nM7XAkrct87CsDJERdxxi",
  "key14": "293L33KNFq2BQs6aDTmDjB6UA55X2R35cuixnyrUaMUVNy42DqeTM7bTRkeoHScL3vs18C46AZi4HvJAjfNiq9w4",
  "key15": "5ALvvFKqHRaT3w63vivQTSH4ndHsHzCpyANHKcdPqwBZ69vsYMq7xx7CkXrgeTCZbMMjnjSZUFYLQaVSUyEepeuV",
  "key16": "4Qg7ju17j95dNpe8amGtYAsu4LtiefCPrLNFngpkXVohrgJnDhRvq9Bq9xEyrsmbA8ncQrj6po4ngG4VgQELxuRP",
  "key17": "35aqnGpwiV3wUVRQGCVeKRi5jJgP674B1NZQ6zJHgW4U15kG22hdG5oktBwLEYLAYWNQ9EENVxY7bgSQjFtE4Yy2",
  "key18": "3mYt2ToNsKbrJa6EpqoYvZzaYX4uXggaTEJ8PnxptxJfqfjuxFEetp11MJez3uSjFyDKMK7FVyr7DhMhxa31gTZf",
  "key19": "2HUpzViPxTsDjG4Zx2sAfwtUUKRNjFbVvT82MCz2XsqCzexgGSosqgVN6vBK2WRr4gt7kHnkSeqmTJ2ZUa5WLG2X",
  "key20": "5Cck7RXCAxH7uC3LC7oAJssNuXVB7wSxChoA6LLRFuTtLUvQtU42EmopYyp9vCKyLL8o7touoRYwDmSBRH3ciiKa",
  "key21": "2DsaLiygQJhE1C14gv69unWguik5DBZNET4ufCeXUdyVpd9YToZ6m1x3zx7G3KBVLdPCE9zyWTDcrkdXTrGrAnwJ",
  "key22": "haSD5ukrygtXoFG26f3RfPgb39rRb2MvQPhVG99ikt1HYj7bZAxE1bDnvvDdn9R1BJjJsdh3DLMBXCrqGonta8h",
  "key23": "3z1yd8NzQ5eiY5fKVG2cUBQ94AQDZYAVA7qWgD8ydH916a8disXaZ45u9XeSXEhqh9Ygs6g146MG9AY96Js2cnqC",
  "key24": "3Fe9cr7qvu99HifoX3pFLTJMdyaTGPG3ghXSSqvVoJ5sH1z9QVjup8H3Bz52i6TxUb2oRqvQwHFM5PH52Y7AcWZ1",
  "key25": "3MH4HkozEeYMihVCAhYEKnSsN7bRMpf4vx3NgiKzDFmcvCwKd2gY7xq7Sf8EPE4Y8SkF3XCbVXaUvE7T4xcb9scP",
  "key26": "4tzsjKVY1yez6LuRUT1qxToiXocZiqVek9446MJvK5jHJjLjxPfXZTEKRApUD8aXzw91WpFBTXKZB4AN2n8dn6Q2",
  "key27": "66ZmQ6QV6oHPxtad5ZMSeSinHuB7Kuyv7YHp4eqrMT3rXtN2j8K9N9fKsYrAUWuq3QJQZYRCGEkEW7gfJ2ZaYAj2",
  "key28": "2QjSvgNra1vury9YdWn8JqwWaMYBXv1Vtx4zE8CQ2jKq7xA7dFM4UVikKEHqxWZnSA1RMUWdUjagSHpxn8TNYqzo",
  "key29": "2oku5sdyejbsfTkyDmxNT2FoufogiLzrDhC7RKJpTdMZeShBhHt9tTPK6RbhQQig8RjWeGkTcmnyvXH1Vh8Ju851",
  "key30": "55Y7jRdgCJyqrttdiYkQwaTvtLpez8wN9zdnG5GuXndnL8stuVQbkoruaNzjbJdytFekvXmdRUgMZo8h4xXcvNeH",
  "key31": "5uQmkdWSVo4FtMo7SoHo1jDrt3g6QLAmZHY8vx64WRQRkBZqGy9c8Ds9fXjMUaRj7Lckbg2zE4mA7NqDPXNuHUUA",
  "key32": "LXxDmDReNs3NStJTDjyE6nSfGNHsYH9fpcfAJ1e4vyLPfmdBsFPFCRTnXgEUk6nR65jQ1mgKby1kDwybPGzjPqx",
  "key33": "4jrtaYtzp68xkYHjpZ5nsvWc5A1DC4YPAXsfy9vRqkXSPhNSM4uiNvsF8o6s3NLtoUcin1uxby3qRxLxxPcTKrG6",
  "key34": "4JKZMBXzrUAmdvEg19f1Q3txtH3V9cnx4LZU6ueL8S54twZK1DfWfs71x4c81FzDryr7tsQLpountYAR4k6VSyos",
  "key35": "42W33iFC4MWFhm97kkRPAWQyjSKhDF4GTAKidBoBnLyvurVGPWRo4wLKYWEEjuQkxzCKrxWmxRThGvKRA3jhAwMB",
  "key36": "4WhjVikYDgxCuAsn8pQJBXdhxT5w9qeT8zLneyhuf6T6pycCX1x3Brv1ggDPYWVXiQGDWvZ8miUo13HBzXZ2auom",
  "key37": "55dGw8PeUN72YjWypwBmEFGFWJKt5vGRLjRe2WauGis2RouXxsfphkZkiqNuKbgLuiVnaJ6Roqq6fapUqWJXg3sB",
  "key38": "gS5HnnA8RPgUV8g9wU2Q2JfWrLEpKGxSGRJAEERW4HbjivMyaddXgmUuH2yXzPrjCqwKV2QpncPeumJJYUoohbP",
  "key39": "tkzdio2Lui4UYuoZWUhRXRRGJGM8gHbPC8C8vrN1qf2mULEuTfx2naiCBu7zKd7ZjwtGsaDAkGzxptXyWqcoYgd",
  "key40": "5TFxkJUpLHs9An8SWL9jH4oakMAZ55vC8yfHrWin7YvsNjedPEqtysecoLBuPefHdd4VLARva5skMr2JvLDxZQ2F",
  "key41": "2YwGgUnChAEXtKuPaYXJM9pgsYARRRHjvqUmTnFGHtpZxuYgjLLQesYNt1hwFdFrNXpk6kZSMFHcpGR577A9aFGx",
  "key42": "3Fw5ndqP53ZGdvpdBndT2y4nGVabUiXufp4PgeuWcvYdm2Tii1NCXq62s2BJV9vauhTEfguwhmkXxPgv1aoUh6D9",
  "key43": "35v4iK1pXT9xkYcVuym627GTvxDNgo895cz4Lr4U7X1F8w8vbpnjKPSqJXXHEr5sXaXKWFre8wsr391wiCz59SDa",
  "key44": "AdPbaWhK4HaKrYXU3THDrRFf3r4hiHoxCvpAQW5eiZQ1nQpuGBwLv7gdF9tk4PABX6SFQ4uJRVETPzfpdjq1V1Q",
  "key45": "1E81j3v59G9psu6ommQ5tk2zGvG7MsEZTvXSz1ATrut4eupGsV5XZs2sdMcaLrPiyog51RTmYzQcSSAJr5n9wEW",
  "key46": "3Ef88X3YTPVXSmaZNxDSviFDqwdLYiFdYtTVTi42y4QiRKtBSCkRBxBtJutcMAq8taB5Mbtk7NrHZctiTZ9GeNzU"
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
