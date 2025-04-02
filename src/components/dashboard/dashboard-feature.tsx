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
    "67Scb5ZfKgAxrpdykqSGyoNjGPgeMRxKoYnP91C54xnWPx48z4vrXmhVmrbxKiG8YW324XtveePRborLKHjTdHEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wVod5wptiavgHyvbMDucyqfCkLAayLQHn5cpen1DdNUhVc4NApmYRZJogJzPrNvfX7oMK5RrXpzkd2WAUNfTkRo",
  "key1": "4ZECeEG6B6noUQK8c2qVub7ywYFF1N7WRWnnfpNqkHGbPPvYXmBWe4x1BEptc6QPA6pXcw4gAhRXvCPVRyP5oDES",
  "key2": "2f6cWD8t264Qa5AiJSGqyEvMynXmrVJ2SkVJXswae6TuuDvPbisZhn5nVug7nGTeJLgzXufT1raavvZQ9qSTkHDD",
  "key3": "4mEjSQSbjbXt7gmwzXSt2YXFtrxcnPNKniepAJKPXngPBC8s4bp8dwHpvE44TTdtsfKqCyA96jX2HygRRiypUkE3",
  "key4": "4dxqzLJC9JHZqcAbYK3JyCdr6M36XHaqG2DsGSk93D3YYs29otRJmXd2ZHQQgemJF84c5L6YmUdHRwT5BFzjtjof",
  "key5": "pGRJ1csfvb7ziCheDypq35MVAha8HjDmR2v6HvkDfk8sGM3sn29XP9eF3gvhaN4on4X14XeoVU4H5W6dTAnwQUQ",
  "key6": "65x48svBLGBLZZWYWakyJvzpcWbbGP3vbKFQ4Bkd7ex1tWcQSr2PxxsF4odNrBq1RX6hyA1jN3JCRQvrr8hrapQ3",
  "key7": "PFg9nZdGHCisTqGU2wwqA5wMmwrbAxZYHuAr7vRJ5v4EyBZWx5w8TDHCxDcjjTVkjSnfC4D7gCUF4SQqLnMYwvp",
  "key8": "qPdBsB53KHSJUDvyfoWdMz8dN2NrAsR6UorNKZsJrBqCYuJff7YJaR9b7tSsPMsii1piwE6GQfh4uPiEaxGMo9n",
  "key9": "2SLvHZ7o9PTc3kEc6UY6Zn17tpscDAqxrbRTZZBVJA3qfFZ8HPQ472zm6uAWh2DpRehbwSzorZBz3DJozTynFkjq",
  "key10": "4c9qsKmchP8uZeU8BmR1vsUkcWxCv8gdLJrsowXiwZADJWfZCnsXJMjgsxM5sKSMG1ZizGDLF7GLKrZ1WGPRFPay",
  "key11": "2LU3PkJVSzktjyCt869y8TQQSgGJocibuVpf1VgkuqWukPQNiY9kgPVs45FAqMF4aGe5N9Dsx8DKZMu5V4DStCiP",
  "key12": "31yh7YuueXm4FrnJb8BQ7yw294BKj98DcAvJPX3LXFjGwZcHWevxD8HbCuYC9QmP1N69uPpU1Jxx3rh8KAiKNmzd",
  "key13": "4XP6b3RuvNvqZSq7k8wy7e1p1xQJ9PfPZuHfPSvFSTB6prqSTn3pSDoqAP2bppbNhnry59PNGdnJyPv31mv3hS1q",
  "key14": "25YYu1GWA1XHr99GvtX6oHKti98jV4jT4Gp5MYi3wgrtCZsZVCkFwxYfRxVbeBB1jP9ZUkezWWvrtf9MgHi6Tdx6",
  "key15": "3hFkk7eNiWcdsHfqTT6KmcCTKzUpYqypYntDnYjhWP2xuPWqDYMeUTc4HZPCW4TjwUP2PeSN8GMnMNKUSrzAB377",
  "key16": "3rzpys3yoqYXY3x3q5WHgrVvXreDgYJu3A4Nun5r5beuh6UGQAyoD73xsXXvHiUqxqrYmXzF2urDwDZUYDryTrFd",
  "key17": "5XAUFwmkW98bLgi5rBHAboCT5mkcaWSD2h1HGLQq3c6NVH5iGWkziD21gUv6BMyYCTaPQvBibvMoWgNUhpNDujQW",
  "key18": "448hEJhmPWrogqadhk6Te5rYJ6vJ5yfpY8LJM6rK3EVzQe1AVwy97BGmTUPjJgfWFZxXpVofiTy2rBwhsDj2jj3d",
  "key19": "33mdC4A1747vzQR7e5jgEqS5N4KTGpPCvG9VzzwGPMpc6g1jLphhP5uiysNvpLTAWRBsHpJXhDmmCJmtxutTzmwb",
  "key20": "5QyWAYdVCgp7MLoW179Z36LGtZg6JZHm1K2xcdTG4qZcuok2j1SZpfsXKvdmCbvLjRY4KLaYcndaSHNw9J7u6JyU",
  "key21": "5XZJ2QwUPTgzPrmMdL38wXjz3iVGFEsk2VEPvjFnpfga5BCt9wtvmsxiV5QXZkTUbskZxhkoXqbY6Z2S3NwLjVw4",
  "key22": "45nfSTMcCY5m5migrGqn342syitPVZwgXr94u6rtfL9XC1knSQJfBfR8nZjAPaKk6mp77kJntBDN7pq2CL37MXv8",
  "key23": "5V7WAThCx95yVhV9EUC6gdCribkCTrjAeD7YHTEaPGtWrRtbUqphRjXQK93SoT4EGyRLcE1uSVjjEfgZw16KrAPd",
  "key24": "3vpxqfj78TiGuX8wZRfrhASHGNum1hWggZk2ij52hrae1tU4f8hZdtPET7cZhbgsbVha2p8ehYMEzBcjyMLjD5dX",
  "key25": "jhJy6SazdFZoEcELKY9KdfJda6AwsmgzXQ55dhUfZpVahMjFeNVaAcpxAJaVjBiXbP7gbPXijHogTPomAu1YXDp",
  "key26": "34FkSaoK6U7biN4bTcb447KWZcrna37T8k983FM6zfYx5aCi5qRgZscSWGy6aYwg6At5NGbvEqhAVkKMnhHTk8af",
  "key27": "tBMiQKA3tcNXSegMWSWLaYD6FFTh7FhMtViU8V52bMJv6KaMqDRty57Ym6zqbgFYejZEwFPGB1yz1XCTuyxY7Q1",
  "key28": "2V6byMZ4RXLxf7AKF1PXbQRj4YrJXNhARqYyQQttZvZg8VhjS83iCv7U6TMPFr4L5aqYAWg9QVYRY81vVuW6bcvo",
  "key29": "3ukVF1ppDDEsaS6EsLLHdU7PDp5X7d7CvnxCcyzfNKGQnv5AUXaY4FS1ysDRQLrnMY9ysnCZaXLuXbxnzpeNEyHp",
  "key30": "3vtZrPs7LaJxBVwyH2H4kELWTr7x89tf1JH9GvwBhqmwEdqcAgASA9mazeqKoAJere3hKebryzkWbVZuD7gVcrPZ",
  "key31": "gtednxaENPmEL3p3vaFzBR335bF1MxeR2TQMDdwhTSMgxxkr3qfmkmXf6ZRnqDp7XSYPbbWiPVK45QAcFrsccPE",
  "key32": "67Hj3k8wX2pwaHWmgaRwq1LUvTg3d5hMKXqL8YdgG97QjtBEXS88m7ifJf4D6Qhqfv8vrijb5iTeJ3DZWDbBfYif",
  "key33": "5cgyktBkvpLZEZeQsUAm6WCX1JUN6gQpSWbowqNMXga64XmqEpF51MRnFqKKGkGKq7oyYFmMEdLvnS7kqWZEDqdY",
  "key34": "23iMTeuj2nRs99ZwN21rRn5iYfMotE2u6VNuBZNqtPM6Ge8DAkDbEKY3PYNAcq5YStZ8Uyhu11iGvrj2snQjtWdK",
  "key35": "655KsZrDffH97r6HEkWEfN9LxQaB6Xwt1UauxXCXZWF5vfq3J6q9R2iW8tU9nqQQxxpbeteNto7SqF9Wu2QpmXK4",
  "key36": "4AcUCKXW7jpr3a1RCo6shX2ZYLLTiYzZ7Ctc9XiMzkME1J6vQmwvDTzRtGyWqvBVksNLrPTfxwZr5pAdWcdVYbUG",
  "key37": "3qKK1Y2TqxtbHDRVPD8C7Cm43pUvUhmK9GPYcf81YJx7CkSRynxd1hjksKJNgHQNXRP8exaA83XzycszgZKfzpuQ",
  "key38": "Xgw3XpQPTWNR8Rxg8p6Ns5FpaCzq3L4ZZWU5cpCvDTBEZL7Q6rw9LP88RTNDA9AuXvtdtCFUGGyb6u4sqxefVqr",
  "key39": "3dUezG9KJsWEkExBivjC6pZ2SMXUZLKPfuPNHzakY44hEJ8p8cXmCmpYvXP7Q85uBksawPAWbwcB4eJpuVhZbWox",
  "key40": "4zBnY7sfDsfR7RufRkm6YLcZ1hczUxNi7MNg9mpovk1LTPWGzEuYrHr8ZUTcnCG3sT7PSEvrSg7nk9aEEspXV73",
  "key41": "5mMJyrda7VhRw6UqXEP16PdomzSoiathHADSDKXmXKbofZHZV7gvnQsXXBJQB7p72v6WygCkV3ZxnYkGX4eD4vZb",
  "key42": "4N3LxYvVbJxJPTtsFR64FbxPDi2GPYvMRbRGoopRsXZo4ab2y86zmncUBq8T9hmjBFFBVfmL7pgYGKGfckb1X1mE"
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
