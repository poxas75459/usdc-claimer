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
    "8phqY53pp7kRUeRwAP3Rhe8xi2NR65q2w1s8mm7sVW7MfR9dh5ZPW178DhETH1bjb32yTv8vGkqJjedGJhAXSGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pbAsSPkcub3st4xjxWaKSApqSR4gwaMzFt6Viav3jGBTzLiLyYWYJBbzxq34DqNkDLSiCQUEuS1Mh1Z5scJMdAW",
  "key1": "RwtPCdWRjvVJz7AtrvaRpfqCDyu5UpHkQDDUqFFVGBgvTo81YuvRaa63psXcAarw67qULrDJZEHvaVK9hb422db",
  "key2": "pUVdBUXaZar8CmrtvXVpgKx48my9v5rid6JQznGWjuE6Gc4Dt295By7qKiu6SDnTfHujpd84Sy7UuRz61Fea4ax",
  "key3": "kZck9gHKeYZTwhWu91BreUsCQnuwfmhjwosnkMTNoYhCL5oGYhL8vBJ3vLCp7XFQsKZzPGGiXkJFzgawSbmkafr",
  "key4": "4vgcgotQmdRzvLmdtreyjX2hyXyqtwyTsjMXKdXa3f4nQxURyWNrKVBT4X3v33sCziwQdmjnTrxCuB5jzva9yY5Y",
  "key5": "3Q9gNXa2VWjy19nrd8tzFfyhZy27ibYP81CKwC16foeskzF6XMowECifcKuibBoBNdwGm7LDcdUKHayr6no7HXaT",
  "key6": "3DbJ7V5XDbwgz6SG69TN15HWtpS2g5MicXxa8zVxh7GadQ3LzDACAzYMvKcQs2iPRabULPSVbJjuZmiF318bLtjE",
  "key7": "5EWcEBM6ZbYufPgZGD3VRwA92EF7byShX4nHvDKRLxZuVmUWchoXMtwRc8J6iUGCfr5RYVuVHCHt5nPTmi3z6QtK",
  "key8": "5WkLEtpTRNvVcxkxRJuwAdwwYwKiRSm7M6mP8jT1MdHAfQyXPLcWNit74j15hGZcpaGUQ8tfKyMEMNZycqTr77Nk",
  "key9": "2Qp2p1qcEnQPsn5joYr1RkJ4aBboKdW6pNnjsSm7gBm5uNVQjpUpjiT53MDENePH5WMFM2T4gtjbHAdNmEh2sQvi",
  "key10": "2f8TpeuWqV2s7ojXTtpB225vyVm7HFyWZbSGMifoMZtgz8PVC5mUrug7cNW6rnYV7QCLbejVoDHtZttLeqqvQ81n",
  "key11": "2jbMsbSTcmNneZGG3TusXcd193gUme3owR5DXu4hw5CCkEJ4Cuj6ysexCSNDdYueYcJVUDzLJ3AqVTnpfpAk3WVU",
  "key12": "5djDvLtzJT4Z4EwMQLqPwVrkvkYPuDxGDP2D5qFmz8Bhfhe5wcTx3G4quCYjB9SgYEJs5mbkpAro5xN1Z6kmN9DK",
  "key13": "UYyApXyKZekqDJJNV7hzFrnPQitUJHQypXqpay13RhD9p2mVNhS1siCyAR31dHzzrXtr8wa6UNxJmew88VbaXWr",
  "key14": "3ExKdCp3a9re99orQayWQ4R57FyfezLQhFKewfruA4fdyhxFjZoYKfCpsxYYByH1aW2xK5iTS33WRa9D5Tthibf8",
  "key15": "4pi4Xy3Fpracw89RWiUKvHWY3NqFWpwkZP1zpByzZ7jFVcJ7bUctoBehWFRAqkwkjMMD1QDB9yYDg6tnTnDmQfAb",
  "key16": "5L9DpKBdqPfL355fHnzLyFRFsTQcdU4ZPg77BBekBA5ekKcgSjKGGR8ZtUv8rH3w6U2XbpE9FSp82a4JW69hh8uJ",
  "key17": "51EMkfP5W5VMTcmRbvBV3p961Kd2HVkAFJUa5DWEfcYALWMxwy7pc9h3UuymA3g6eeiQpoStvwa1RgJ51haG1E6s",
  "key18": "2rAdg4aS5TJXH8wQtMJMuGYGkvpWbf7iUfJ75o6ZaHEHJ4ZVxpmUK5Y7LmyBD58CvJHbnzJhhgGXEMC2krFGzouG",
  "key19": "4ZzqhmAQBSpEWnkwgfCBQQn91hhGyjnxhuHXmwiPDVpmwPH8ddaHTJdXQPvrd14f8ztRKJnvc6fpBgTFVVR4Tphq",
  "key20": "5Gyr8ssaDMoKCzuW5G84e5cihLp3j98kvmcfqKXgPZ6oBggc5dsWWK6LphGbdiW57jFdx83hBBdCkaBLNDmcaL2G",
  "key21": "65bqAT6N3QCEHnt36RWY9BzyrsncZmqcsHgo8yEv8v1QNiUi6PkqGiSRgNuz38iLjuQTsoHgyyFmDRPc9BR4M7FD",
  "key22": "3X2sEQTEmVJRyn8G8AEbsXL4aoVZgqmt443yvJd5gjQFVNC6C8kipGKcKJVKwaWsiTXFxTcmMVxVHSTtCq6umoXh",
  "key23": "3hPxHwskbbETKQTCzkJXDeCrGp1v3q16ViE7Wr4LcSG2sDP5TLY2xeGQCjHxfktNTjY7sXf6WKUdaVbUxEjDJP1p",
  "key24": "2NXFbFTEMJoC2eT1X3DrdxNNDqrQeGtTpJsPcWrD1fPqqB3BHo48YFAFGzSZEewbPH3bTr5MYmPrfe8LJJFLqyX3",
  "key25": "5AckuEBcdT4qUt7o7Cqv9BN7c8dGoMT9E54QU4cjH9FVfgdUxACtr46yKe4tJwitNr3Y4hG2GJ19NuKQCbJtxrYA",
  "key26": "5TWS1gm7TqaWAyoKGojmwWCGed3nj72nkkoukU2YwqgqBMmUtk4s3h9r2qpcrZhN8VnFms633xc9DRJYrvhU93fB",
  "key27": "5c6fdnfU3Gy2mJCakheFk6FAhAh8nhR9o8H56X5ke9aK3YVgEfDGspqX7MoJCSZpmw3i3iWmJDZubhZN6ML3x1jG",
  "key28": "3HdJpiLPmWu1Doj9v7ZXMfXS3qyRCPJzjyB5iZbPXtKzrPVktcfqXTjYeEbzBxWGhUcLS39BSwMSqq1nKGaBZ5oA",
  "key29": "5BjDVXifRE8RTZG9qyRmBVw5w54B9DETxkmUb3vG65hxLS1QkJ6fHqdpcAU9aFesePBtULpxiStLYfz2JbJPSEpg",
  "key30": "2QXqyS653j64aHjxioSZAgrMh66x66PjGzrNk1y3NNhAztQfhcmwVvQwhZeo5Lhq4s2ZcqtjunN65YDJtgRrnbri",
  "key31": "3cZ6Jyphe1w6VXyroP9v1JhEgNtix6SSzR8ixaC3QD5C823qimggoeT2YiFfwD2o48U1vE9Vub19mAjsfuSs1sRF",
  "key32": "vjECmcFrAWEvNzEAUpE6D5MoDX9vV1xpVMTEMMnCScow3gehNfDyXEkwbyJAoU2ThT8TVB274VnPTd47Jj8P3Vz",
  "key33": "HTmG5qC61u5nzQ4mvPogDN7wy8Dn7ryFrDp4P4dkexrxnApH5oyJxpu8MqfFkLgXtTr5Pi7ZVHD1aXEQTYTAhuF",
  "key34": "2xAsdnkgJdU1kBRemwVVPVqsDxa1GoS5Z6CkzTE3ryVSrrFNviPLmm6WaHSJraF44PxiB1gQX7HjZvyJG26UeDfi",
  "key35": "ndm7TUWX3uNMoLAgdUYaAnHAtnudeWnctQkegeWuGX3rGqhrjLQsHPKBqRmSRA3W8mYLa7uDsSSqTg8cYiD4FZJ",
  "key36": "2PhkKAiK6b2RH5tJDMBEqEckJVwPEGtVKGHwNPyPXJBbL673jRiuf7hLQti1NyaZFsye3iSoMB7BBrb5mP9vWAbc",
  "key37": "5eQHvR1w4XpdHaJGjSW9J4u2hUnkUXhVt2nNGvfhaKxsF1mneG1RJ4qa2F4KsV4NeohxK2Qbt4PCVuvpziTbp2ak",
  "key38": "5fmP7Hyn922fNYe3v9TvRc4ss2478HPHUKYjkcWjaWVKJX7SUSxQF1C2pF88yz9nGt6SRJn1Qa9w1AZqMCLgm9zE",
  "key39": "4fdCxmne5VajVJ49YuDWQrFybvTizHd7j1DfRjhkvkeDF2n14CxVtuR528RUZ6DRUmwmU4B8G9c9t2Xdb8dG8QEv",
  "key40": "DZgQA9rLNpDQEDX5mLYc49hefUj7J4szn97Xekbv2Gh2CkVxNsXgJdnCXGaUosBELGuXJLUTQTzHXThpscDdMLQ",
  "key41": "24mZ5WnwQjwweCZvy3xW5zW94Mk3rEt599b8GmPUXb5DF4e1PfLSMPAhoao72xMRm1ybUUupz2YzuwQ834ugjNsK",
  "key42": "3eh93yq13QksJ98fecmypgJDaZmNhg2LzY1oAs1M9z6fEFUt2pK5ZBbbnUkcrxfJZ8cMYh4yYeBFTiQX96axek3p",
  "key43": "h2HEmph1BzKr2LLX7qwc2CJPrJf2GAZLGavAJbbvKWcyu1B4RpUcZYLtKW2VqH5rrnzFW2U33XJPu7XwHSJRWZc"
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
