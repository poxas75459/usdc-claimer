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
    "5qRWiMFujN6iYvnqgbDze1sSu2W5gxbRhMQT6XNoun93JvrZ1p2t9FETMghNdQ4CWpLS8LFCAdC9wzfWT2TMB5pX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uwqwkTpAo5df4xet3hiS8ZgXJkTQya6zPZ7rtTCbymnfPoVAkhiGLMqHM8qhY8nbPyoxiWhBpT44FuUwP1JBMwr",
  "key1": "UUnUj3VWTdk1qbkeuxmPnPoUoYboK7Gb2vmNbYAgiWuQBWmLHou9iduBMPAeqsijL1dELYwtXdJhUjauKk7jESd",
  "key2": "5WxCdLGiWb67koGJuKNhGD63J72s3WjdbPWdtk8nUR2TJQxRN8LP16oNQJyUCpDbbdBJovgSk8ShvyKJS47sgYWW",
  "key3": "XQDaRqMP6xgKK8kANKyafU2KNYKV5XnGnJkdPg5HcwuwbhuJ5UfMmFZYgdHi6RjdGJELjnFg1cxCPmjCVzMhPAM",
  "key4": "3cJJb4FMF7VjdJgcHKWxqBWbdaMeu5wSTEgAJ3W1Pd6e6yP3q3PVtvRoRDFVnRVDDEE8TPn5QzhGvpNTYHArYffK",
  "key5": "4AekYrdSz5271Kdjpb91giMaGY7swx5E2RDEPczZRR9Ac3M2JWzuBw8ntAVibeZ9hLwDrem1cnjeK4PrZRvRzG4N",
  "key6": "3dvr8d45D4pAAZ6PnWJGeU2EodcTpbVdk7AxUMS491SrSqnCmbHH9DLm4rbTHR3C5SGPsvX9FzoiD9n73NUo4nG7",
  "key7": "ru4UAjxAzc3QAgBi2YG9uSnwad6hFVoTSJD99qus8vexjej7GNYoRZNMtV1f4FDv8mB7qwQbgkTxtsxW1uWVuiv",
  "key8": "622KaAuYUbHPrAf12ZiT56TQAyMqEjuJo1NBLzo8aAvPbWTp9o33x2SkBYVqabrRAZLJuF5tqLmn5Eo8SodWWhoy",
  "key9": "2DP5qAADdJued6og7KXeogub9N6TbiQYcsZifKts9SLySKQZ2AxU7MrofUHt2xjkepTZA8AfyXZBiArJtuTSFxWV",
  "key10": "5wPH5gB1ZoRqEivFXSEcqXzNJq4cX2YxYPxhzPmjGBgDtTS8KnjYcxxVduyAMeTcMJ8AUfZnvDxKoZ93BcANBtbQ",
  "key11": "4WPt615XCy8tybfX173WiWENPu44GrF2U1u6BHoC6BQbfvFzpryTqYBHTzU7JLtHrzP2zE8X5zDV2p5qPVeEgMRb",
  "key12": "4DodEP9c4GCaxvSjw19ZMtVKjQ6ut9hPWcoYY8zjF26H8eCsKU61YSihdpZ8FrpZhobjbHEgXcYu5N1W8FSFz5Fz",
  "key13": "4yR5aUWPgsLVwqqhfiaMjEFXM3oBYb82cmH1QtNWSkCpdXfbuyMBKiK6k4zvvuZiiXJWwVaWKEXUPf15MnGGweC8",
  "key14": "2t4sxwdFF5Ea712yjBp4QRpNEFsRzigekhKSpYPo6u2MBXoDD6QwE4cfkgT4YN52tpGfFPWApMt5GUhzjQcYjww2",
  "key15": "2EebFXELy9paeDj1gnwD1h4eGatXWsGzrKko7cmXzbJoof1KHY7frPPKcQQBoLzML66wtVKTXMACqwL7Yje8PMfp",
  "key16": "3W4uoHPtBzC74XVoohqxPUvpE46hsH5P7j2fB4apzGDNMfkoU8nsYPoFXHqC3c9fM7jw55wHndi3Byk8sKxDt5Mo",
  "key17": "i4fekJXBPseQUYFbVUGi6epCTTppXj9ZwHWakv7HFjxzcP8FVBn3CJuNeu49rMphg5hkv7HMUzrTXHPm9KcUrZC",
  "key18": "6HLM18AaLQaHXaLVJzQuJ4osm3KPkDuf4q5VGFVeisA5V4h5tNCGwZn4EPyo48S7zs3UBbuFcLErN9wEubp9YBD",
  "key19": "4A6q5bXaZLrDMRhYRMMyzS8ASzC3GzdNwZjtEGfzZYZUyegBGTuB9QCuT1e2BfHVuTL8SrfrpdAjSUWdrchKANhD",
  "key20": "4GSRNdqLq9yoQ2CX6S8KxHPYA78VfTNMacC4i3jEUDjwZwR1oRtxYaCHPjjqmeCRAXPqsxEUUPVhSTFXVKtrdSQK",
  "key21": "59pUhNfAYPWqJrrr25CGQ8Mdwfejv9C5UnV2N2DoJa51ioVbK5ookk7aC9bcY2TAceM2YAeN3N2wQqarhdb4b2Mg",
  "key22": "2QfNDtuwApCZZtWo3PymRtk8PVto1zLoJAmTMY7q2B19wQ2x2BzjhpcaafeFmx83rmGPHxC6fJX8peePWunCA7Rq",
  "key23": "623UWh4Kf65WKrVrFFbT9vGgsKYq48rqAeP6fytaypS7ieXfHm3PG7XeNoXdRoQMvoQsA3VpZv8LynyaRjn3YvMG",
  "key24": "3bHGiCG5bDiohNmb16YLY74742HrBCw3UyD2PxCNcMnn7eNQbnsS7QiRUFYquEq4xxpJ48qmzqLQbsYLtw15TyHQ",
  "key25": "zTrmdbFSsAn9snRKjSVmi9gLbycETkdKNiY29yb8hGzwpSRXePAxpvxaWkRYUTktiVbb68xAGVimVFjEPyG9WEd",
  "key26": "5Q2ftnVsmJCzyM6eKoh8shwDX937FDgVos2eWdNi446Z9fnqTLV52WMUkTNJNR5nWtZuVRfkdTJ56DiuC2HwewaM",
  "key27": "4eTHn5sQ2GH3HjmpdNrTtSx3xibMrcZtTELP6jD5RheZi19zp1kLsgdZtxoCnnyRqKp8WseQXVvTVKzPhXqoHwn5",
  "key28": "3sjxwUHHKvF9PTJtXEdtRUXrjPdavpnyrt2xXTCQFmvd7dGCJBy6zqgSZZiRWLPmeXMdKocc6zJEg25yVGikTCqN",
  "key29": "Ya1z7cdcZvTA4NkMF62GXmfhpEAQDB1GHsw8VgPCdKCXgfjYdqL4QxyBXD9fFH6MrSsP8xCTSBonhXiy6rzLCLW",
  "key30": "5Enyy7EMu94Dd8qWSHdLrxFV9gEoZqT8bJbCoBHvWgyztUzEdU1ZMyRF3widSLgd6bpBuFCSuewtcJhe5XWW2p4p"
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
