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
    "43Zxv1qszHTLf3qQd49jfvv85hbQYXt4bQ6ERpD6LpAZuxLdEyyXcytS7WWLRCyk6kzdMSpU2FnDzrMbu7KXftDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44uyuYedwm981c5Pt2uwSK5iMMQKdt25Df2Wqnf79XTEnaMZUAhYQdHWvJjsXji12iRkopUUGYLq6U59pJ3m2UtJ",
  "key1": "5xr4Gg782xS4jJYgd8mWMkWffmCE7tRxL9EkiGjCAp3YX5Yf9ZTQQRwmgH989vTXUycsGKUNFSR3KpRdBvzpv1SQ",
  "key2": "4Ezyjwh4xn3ernRUGAqT4gVZsN1GtYs9g6yQRfiejoZ9T7jvkJUwiVwau9Q9ujPGtBDxeBNq182Bi2SzU3Muqkmx",
  "key3": "5gVgaXYBsk2GYUz4ap94DXqjJAxwJtXHoeYG6T5QFnsMVrzwYQ1ArXGaTNj9g869zrMZmSTtoXGQa9nTFFvaxPcb",
  "key4": "2umfZR5yZ1ay5GPiKeGP3FUSHZ29XehdETx9x3NNx5aBiCjAucs9f7zj1MxU2qTZyYr9iF5b1RA5jZ6LKCPxMLr3",
  "key5": "4ticF5SKxbUedDLo9K2YK9B2iTF6kjigKesDVWeMXWjhGdteD9E6op4wsN5dWFom1cbpn52pgbQ9sLyfoeb3uRdx",
  "key6": "5qgQJTXzoSAuTGdvhtj9qGp3kG4MpJakY2v77DGCUarBWNwVM7mV1eurm234BXUJ1RJxexFSC4kkiFMh8asJYwb6",
  "key7": "2Bid216uCAnQAg3FoG3BSE9LDoSJf9y45MYVnu7Ket49JhScMJqEmSKiFhgCK8c4sD9asjgurzh6tm7RFwHTUbwh",
  "key8": "v56u7pwjbsAtPWEo8sJLg9A6FwrYg6zNwaNKq9NbWacV1mrNFrGUBaz6A4VpHUvJ3k4UUN7YJhRcVLX5JcPUL8v",
  "key9": "3VdwTJSJh5iL1YgygncRJLMyWG6GvHaxyVZeWBn8HCCuv5grfFc6bX2Q3XpnVDjUuPNJBnXLay6yMRdj9SC8Aykp",
  "key10": "3xBLdCLxXpQQ4jvFftpSwbat43h8BX3tsESAkiWv3pDYgf6HRr3F3Tvam2ZgQ3dyrRzTa9etRbwU62Gv5z85jUhF",
  "key11": "4GMRVKWm8khdsvf6rUaGFLXuWSj5U94DgkDAqnCNhRRsPC5o9nvNRC54PyFjvHV2wZMV8QiBQkV8sxJwLkmt4RP8",
  "key12": "2o42PbKCXW4sdAGFjDfLqEgV1Cc6bccfyM6xrjxT75PzvGkYuYmWVBHMGz7g7EzZsTm37DJxrxEMwhvk5wbJpEEx",
  "key13": "3RCewhjoe76pdNEnvvwUuFQpBeNdC2E3ay4PXQ7PaMGxWi8HYyVpHdNQSsmZ8SVtXDcG82ioRYAUVckTp4ytoHHL",
  "key14": "UvDieUA8qdyh3J7kRUnptzBhRJThhfKvsvvDHyF7kFbaDDm2qUkx2zQBDyCUpdjreGptbievxSzGejtjLH12CFP",
  "key15": "2KZmuSiUqkAThxjheCcNv82kwUodj279LiuVZ4itHqVZLzFLiv9L8wEj4KLe924MQqB6oaKAoCacJuRCXLJq2uiS",
  "key16": "5RU9nG5USsy2frWSoz2zthMXNpPRW1s8PBLmLZiqbcoQVncY9JHP5FCBgPSjLqNGW92jAocu1XmZFVFiWpSchHGe",
  "key17": "nv9iEpLgavZurFqwkb3wuRiuQYJVwmZyw69PZbzAHrK322w72CFLNpCUiEQF8VgoLoW4NAwwVqgSzdsA72wj7Uo",
  "key18": "3u3PPJg1pUYADkRiyimYFJwpqi9Ne4fKvbvgi2nLJ4d9njrQueD9KujYj1unJmqqD22UFX7fAoh72s2zpeNwxck5",
  "key19": "2ftMf8X8ZTuiaXMJ9ge4wXSbtZJyYzhPTymg4L6Dv3WUcnmXUXGcw72qxEhucCq12i4e2JTLxe4aXdxxkf8DCg77",
  "key20": "3kCD3JyUKnizCMvwUVNCf85cw7txW3WLcxra51kChfY5TVEDDxEi8vf9aUdHTNMPjtxrLoUKtk6dQq8YXmqtyYRT",
  "key21": "4wRez25jTHM7xX9eUdV5SgJSP8kFMjXnKfnHQKHKRcFXtzmuApkKmXKKYPb2RVeyoFBzjmG1pqEiKcESTMh5kNuy",
  "key22": "5fq3mdk11jFxjRXwZKxtopkNLhjWgSz7kr4bqs329dwMjf232bjXf7qioutRgzj5YxEGqREGFyYZeyccLoiu5vi5",
  "key23": "5uEsWNanNmMDZemNuzqFzFfmCZKBceEU2NVUrPrXgnypgsjBiibKiXMk6JtyRVVvkHCkaDxmCTNiBtuxxWCfbNMw",
  "key24": "2EbdRGXW1EBdAB4pUWpLWx5UZYFhQg7ooBJ1PXwjrNjKJbWMBzzRUBDEk1S42bq2ZR82FjBK38q8LD1XVsqujmC7",
  "key25": "4q5JeDeLVLV9uJjUdnNjvigTeca9mBBvS8BuCrmGGAdALrZhauWQkuwbH2PQ16c7PhUu5eTf7yrhEQjeqw8VwvVy",
  "key26": "BQD9Zmv5CE9n4JFtRFUHq32vGxZ3rBLSPJEm88ohb724GexwQKH6myqVsZXxaDfLjW3gcvkUfcryCKcFF1xTaeX",
  "key27": "4Re3H5AQbexWEJnd3ep5XLY1T1Z5XjkyoJ1xBKxQ4yDr7BGv41dhxgot5kLjjNsc4PscPqQSegZudbv7jSXVZoNJ",
  "key28": "4uXzK5bQ82dqpvv3kRNjJcYyk4VfSAg2hpucM8WbPGBDD4JHk789aZx5e4H2zhPGdgU7te1W59ATfr6fTLFfX1DU",
  "key29": "3WDSsMSrfNRaSuQr5ahD28XjTWzkhUq4NtUFmucqp4LYBDK2tS5iqTbJPdCo5oxfoAnZGBCtRyFyag5sv2JxUJP3",
  "key30": "3ZRhioKaqqds7jSKkGxrRVEJGP1JK7GLCS1sRkXcDWWixDb97FN2DvjYjM8cySPS8yepDq8wTfRNnSxVMuEi2eQ",
  "key31": "3NQM5qPMTccF7ze8787kLzvwcBZSVvmKocsm5jyjVjRHNtAj3u6SZi7gXHVyf1HVqnnzPJKEsPaagyLLCTbiLNCr",
  "key32": "Bd6pR7D1rwnbyvXo3wFednrVkWwBiAMAfioZt4XD7XhnSE9gPQQDdReCLcWWCY7M4MDcVf6mLi2cVZsj6CuhrDZ",
  "key33": "5e9jHunmMbMMQdiK1vijSTZWZMy7MhRc76VxBBJiBp7TdKhuSuYEcKsXnohbyVzMnGseRSuh49geVZrvsCNUK1KQ",
  "key34": "2p8Mrqz72UFJKhYs8mVFapqyFfchRb3ND7SwQJivCJN6w6YajRVxBSKiBBTJ6niiocz1nVFDckDRE7W7fr7ELwv1",
  "key35": "65g1evFuz9HfwTKskJvmtyhsLyWLg2Aj9q6zbjdoQB9ByPb24HokSatGX1SFhZ9fHxzUhu3PrEupqCr1vJkfEjPN",
  "key36": "5Yfcpmt9izHkuTizHQ6CY82iUo3mGhYvE9P2GYZ6zV91uDJb82YV8413FqDr1RNrXb2YcCBHTLFTwi1hrwEEqGaM",
  "key37": "5EEBy9WNdo2P2jRGtdSKVH19qpbBMfXEQPe5ibiS7u33BQS9kiC5sQMcmVmURkAtH952HjoBXjpcrgfdAMXmwuEv"
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
