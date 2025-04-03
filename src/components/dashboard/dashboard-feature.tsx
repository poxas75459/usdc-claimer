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
    "63Cn5zLb8XNk2P6MSqzYxxMHuPrVJB1oriUSYyAWHcfZkdD52NdiZKXSCrdoD5obsijReCRxv3CnfpbTooAA2fvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oAsfTZXMF3CbjxoenUqijPPUMrH4VwB8qpD6KQ9tN9Mf9Kv14EREw6ZmF2SPrwxsxDN7nS93oUUWq1C2eXaNySK",
  "key1": "2qmfnEA5VPbRKqmcAMSHf8JRLwdAqBkAvRmTfNXGR9JPiLWa75zP4Q1qzCeXbyG9KQ4MnyKsjg2YjifyVTGNUNwF",
  "key2": "2M5BKhUS6u4jyB28yyG3Uc4LzFopaw8PktUVtgiS2pz34Lr4iLBk2uPaZgqxCs9FQCC1DtViyADwgHvjyrdcivAF",
  "key3": "XiVMiq4TvCSqsgygjG7CR7qd194cQTfxAtmpHUxMzXNZAxz2TbD5ZJ2sV2SmePBX1zf5MLDoXg5GQe1N7FnMRXF",
  "key4": "qQKegSiU1DqyFndeKfyHnGJdQZGEwpZh5xC3c4HW27cnBgNF9D8HJUwgCmsx8e7VaJGiVLMozwJvQye2BRhXNKw",
  "key5": "3Z9pJ1qsqMDXzkAGo9sZjgnxwrmL39wPHnWAyiMZQuNuNR1pZNr19ZYtVK1c86Ho4BvWBH4CvnEtvH6dvsoV7erc",
  "key6": "3Y1WJUaeeBBh73yaNgGHoLspm3FVj3HnZJYfMFCG4CLy1rsekkxHEeMHMbePzdqZVY74pg4jcUMXtQuUSLUb79uD",
  "key7": "5XFuViTjYFU6zY6ECqqri4vfqe7a7B8Aqayp9YYxTeHuj3ww2R8AAy58BbAA8kB9ca1oW3vcjEeQ7xnRGMrWJoHY",
  "key8": "9KFC5rN4anAmcTWTaDmaxSH3FdKcZRFhMfX2FRktm7nfZ69VNNpHgrFUWYUJvRSk5g5PrJYAP52h9X8dYiM3tP6",
  "key9": "5dvXXE1oygSxnyAQwykxXWnyYzix7QvM2ro6JpAs171gQ3s7wtsvEYJSPePkFveo2rxGG1vLz117iSHT8CX8F6ih",
  "key10": "Tc4gVbDwyJ1E91Vma38byZjuhZzYMNKwbRa9SDKPUnoU67p2M1zRjJz1d5oy4aVVavYcXyWZt8nw7hyqA78csRh",
  "key11": "JPcu3LN1hyBzkgQszQ18faoqzp3haAirQQsyoP6iXra5v5LhkgSTuYbTWSB3Zy6Es4Ravhs6azGLqRMkAvDq5ti",
  "key12": "phnsWBovTCQYemPvt2kBcep6QZvFcAoTuBQz8hgsJWFamLVuAtUFQZHUR8C2XjpBkVxDM3TFPqU1xNYZXcsAkXV",
  "key13": "3GoaL35y5Y44ETCDyZ9tE2qakjwSWHbC8T3UgNfd8AogsxDrVTKDSbtfwh12LoQ9B9ZsFhAARPKigbLtApMnUMYd",
  "key14": "3uw2pTxWPx1GkTYAQsXXpEHNT9Z8wAWodYedyq6YhWEdBrVuqGsuQZjHjsPyLitMtFyrRGifoDMLBb76hMQskHEs",
  "key15": "2M9STyWdqZBBa5ZBiv9y84ZGmSmaXziakTavLJFm7DAQEwFL2qtTjBfDDSNeJJvqRBCjzuX9LSVgx8UaJqFCXsrn",
  "key16": "5ZtpAWwEW6e4wL9Xd4HJDUq9mbYMgw5kL9VpUaCrnbSJ3JszzZfyrHAH4g9poq6cUG2iSQqhPswVKnm1buScAhmK",
  "key17": "5BKLq6kM2pgWVpuy8MGhhKiFcCcfrTKfAVtwzfXpcwe6RyxALNmq1qQrjC4wGCbERifEiDvheCMiuyxHV3jX3hn2",
  "key18": "65zxaE4L2Eo8TkXf8Te8MX3JtzDNALcpKaEGDSUM2LRyKfegvwHMEhVmct1RwAym5jgAiD7LqVcBihFqsxpSJ6KN",
  "key19": "2W2mJwnr9XXMLwrpcD4ujWgB8dMKbDwg3sk1bS7HCoQNqaZMHK6eCQs32Thod4PcKxP9nWFaQpi5sTt1WRScAjTK",
  "key20": "4E1roRu8L1ywnKHq6C9c72jAYrMPC2GcGKCUC1q9EBERwiYsMtK4ufQx7y9ubRi2GbwAkEFQ6AGm1KYUK1vdFgA8",
  "key21": "29gq4jQNbCZKWxWmBkNjUzSoBZ8nyNw2LTsGg8LRyS3YiudgJ4YB33G96WjL6HgpXBYP18aVwHqFpgUb7pYmJfJ9",
  "key22": "4zNCo1SkdzeoDYDRxJY41B6EVTvQG6HjckwDSuR4eneMfEzcQfCrjzQzs1UkiVZ7Bst1wJgz7dKpL3ex9tNN4UL4",
  "key23": "4XbaWeA9y4VNC9tUHEidciB94V3T5VoQ9AmLQ6tFYCXgMw263NEc29scDaUZ4Gcq9WPoRseaL6t7MuNbyBC3BviA",
  "key24": "yJKVxwuW5E9nPRuN9v6L8s3vwMkzbaM96trpy1WP1BBbMFALpPyiDUbgDSyHKC1SVfvxbYVBdKhtcM9ArP965Pj",
  "key25": "5HXg19qPU4r68ADabXUhb9otDRiD13sV3g7uMzStmbezrUHCP85uBcPf13fkZUxHdybuoz6BGiPkAM9znqmRo7vo",
  "key26": "BBWryXvyqBWfB7GAgUTvT7A462PRN5Jnd9Jc4cSV9A2h3QdiMKf4waEKoZPc2Rv3UjSiU2qXqmwZrrQHa4VuYKJ",
  "key27": "46HmEyRTyzjCK29DAig2CJqTsPKxFGBQS4MKD16Jb4kxPApyPm6xLpRsD2YHQCEaSqsXDsUf7aEx3bkkZkyGTcyn",
  "key28": "4YE3BZx6fPrWYjJ7YFsRAzoSvn6NofkS9FdwGvS3LheFgWMuSytc28tPpgtXyat6d5UccFHLsA89TeDejCNdYs8o",
  "key29": "2eqjFVZYUbPPM9Rjg2z9gMii7LGwoCZgxFpsaFJuW2Qoamv7FNPLgNq69DNcCrsBMxjaWfUTbNHT34WX8NPY3HR8",
  "key30": "2NUkKzcP8iJ5hZ3TFxs5kUhPeN1AUPsMCgRsQbvFmr73xUkAaXzPUuRHAepq9mNuh3uKXMK8BRtTLyvDxTDSiCFr",
  "key31": "23mBkkhPLaFNerxvaAHnUabRQadTbzBMCMz98vr3nopqGffM25wdxFEKCwnsoEeM7DFp97Y4cNmb13DeY1HsAvSf",
  "key32": "28cen7667xajH3nFN8sSsNu2n3wzXJg4VCrnsvHz7uRXb23Yrdyf99tvRCuDrMXxXZN5EyqqPKgZ1Jib1y2BZ4rj",
  "key33": "4sRV3fTLUMZPbE7BGYgQzqNCdShaZxipUi8MQ82zc6hwgu3QNcfTMrDNHQw9DNu6cuJK5KwfUijn31KtTmw1CHjn",
  "key34": "vb837YAmw1rWg9HqpybvYavWB9rA34QMzYehuKdjESbeskArU7oY1WVYRqVgXmkNPpGJgiv4uz6bdS33osYMQDz",
  "key35": "3AViy3BAag5qYPL6tfitv3mFQLF8PHReCE18J7zuVhCgLtSaMvXXYLABTciEUcojQnywQUm7XzVqU2LTVH1F33su",
  "key36": "3YeQS5wSsTaNDmKD6kYsjEB1qvvTXoi4pqzMGCJRUZUjBMQNWSEudMnCGpNo142vXbafssMJVqRuk8KYG6i4mcKT",
  "key37": "5JUiyPtTMALHDSqLcKNTXajwMUAfAWZjnEeCjh14h1nNzAU3HqKtCBSc6bVNg3cVFofjM2nsoFHZzcTb4CjH9w3c",
  "key38": "22pJ72ZfnvrfU3DP5KeMAnB5Zq8QqE5KZuCLXYu52twArhGx1FmpoWEyaxdN6aX9kPQb8VoDdDfbyEmkCGxrCrd3",
  "key39": "4T3JwLjGjyA56h9CE9LrUHaN6wFiUtL4CGUEMibi2VXmoPvkfeQqcS3C1ED5seGs2tqt6mdZ4nNZ8Wa3BnqVhYiX",
  "key40": "5NLF1ratqSZotTm5khF6uPc6g8o7xRS1ojLaqiKHKuyxrDSCjHVPB2q5yHDYzhzuiJbytAuSA2cgR5skYQEPNKfa",
  "key41": "2Se7gMday3jcY1R2yXvchz3RqAx3kqie8t43uQLJ699kdwcae3SDMZEB3SLS2ZSZeC7ctF6jsQtiGfJr19MBBq1V",
  "key42": "51iEvRWZZTCzp29T6wAj74Ubnf9r6ky3dTZFC89hVvQw8V5rFQq5qvJYaUtNFUh38CFNzoQkxzu51vckAqU7KEqY",
  "key43": "NoL4nMRb34yUAqiewxcSN1xwAknhRsM95anE21CkDp2TLX112hFh1i3XiQX1FBvJ2UgkU2JeKgnoTqce9gsKoxS",
  "key44": "4iNBwpLBcLpUMrTGos9ztbQq7S7Ucnq5vZFgxA6UfHxvpkayZdgHkKXMMYFDUfqmzab7og6zqfRo7bKmDFU2EZw1",
  "key45": "2frmAwto9qgfqkdKVDRNm8MsPv5CWBTLjRfe4FU4aMft5MJq5QuQfQ8mfU7QYpeEkCgo7W2xyswxgNXRXiAr8S7W",
  "key46": "2Y37EpotJ7DUQXso5ivomHSfpfyBc26t1HPitjH5r2yaiQM5kLweqC6fpJYes4Y2qdrdWnd9T68akgDx22d7V77o",
  "key47": "pmBuiXxfQqdoCasrpYj5fWWCXq9tKNXcEif7hsPeEL1YUyEdX5kh1Mp7ncirjTC737uySMCuebkUqjNgXVFuYwD"
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
