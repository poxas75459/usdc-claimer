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
    "5VH4MyZTNubkdtNwjYVsEVZgFJTGZ7hEfFa9YuS9U22EAukNoNB8CtbWxWDJ5RSSoFSjAg1Rec37im1cZyTaevX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YgAH5vLoLQWdBhPozgzzxNirfUQXWT4Vdz43L3prnzUDvyyQipQxkhsDkvXVxkbL7vH22huny2tCVTHH851jPM7",
  "key1": "2MNbwA5kf4qZgEnbNqZtUY4B7FTGGK6U5BzFQkWQhfJHNBCkf7xV39RnJSCBVeiWwqDomKfKFkkdsz7eAUJ4rGXo",
  "key2": "4eXEry4v1SqG1oEFMMAnoybBoucA4Bk9in25LTyNh9GtHwwCXQV4Nd4tq6fpjgDTMa2hwSaFkv7PZySopSRNbP8g",
  "key3": "2PpHzjRiwhMYr9Dhv9RecAhx7ThATJ5YGEM3j9Di6D1ucDf5avmsVbSWss5HpTVyqeUfJtMn8qMVwUXenAp9rMpw",
  "key4": "3FHu7wWKnun4rMjPwNFhcezf69Gn5r1m64QiQaGhH5LCQrTbJXFdTB7eb5TeNZNmaZiSANcR96YksuDx8VFVzVuM",
  "key5": "3emyfgXTgVkmXLWQjTCfmdWykFkd3rLb9aRyXf4FAZA5LFgEXJTqjLBCtQxFUunRpefBRBboFPtbxJxABgBM8DqC",
  "key6": "3dsHwhT4EnBLVR9om2qEDiSiYdoLpFjYD634UTxVSLGUzvuxd86Xt5sQFVd72BfcsUxXVGc7PpAQWuoBwHNTucA2",
  "key7": "2bmjgeXHhzia6YdDEBgwVkVdZs91QooGGZSqeYa5j2U8kMN4rEteWtJUKG588RNmQbZkGh1oBEwLHzkmRhq2kkX4",
  "key8": "U8z6G5Xokypn2hPrAG46arf2zEqZ6UT6FafN2VCkUfd6SRk8Fn1E5nDYEKLiDxJnB9scGytsTGHxYVCyVN7UtwF",
  "key9": "VnnYRbh8zD966Q9iHwZtuKvD1R3ZkTn6SPQVd88JRxEbxvVoTnzuHeHPBBW3zTmuw5SxqnhKsqQ1sdTqWTVXmJ9",
  "key10": "5hFcdPfs13gS7bLjfKGA3iffMbiQhaWEMMkMZpxu2nKQPTcZHTN4nY5KULGmnGC4qgDXTALSAHwV8TdeU6Wfaa33",
  "key11": "3GpEJmehQao65h4BRVdzGEmG1omVEHrngVsyigQNNR3gTZF2DyHtKmEFGuvmRXrow19AS5tmXkPg9anYLCBm1AFP",
  "key12": "2tDmQ4cMPARct8gyHHXdvHFUmx3yXJc9eQsn1QfLwJbPsXfBgt3TUWXVjawzq8P13LDHZdbufmQqCymJmqQ441Uw",
  "key13": "3MGMWDvujHs1Yx9vt2PCEryms1ntANHcN5HJ6CM75fa42TJ8EYMTsc68MGogg8q5GPjeicvNd8vi6YAbkbdp4DP7",
  "key14": "51nFMDWZqYbCzkhJpwSZ92tuUT6py6aKUbFHUYLXbq9Pwzjch4CFdkThCZms3b3JQsFAckF6f5cVZzyLFsk5ydpU",
  "key15": "48xJudvDPnLqjA5ngMVe5MSLva5nTqzTBGzHocgPiMGd55PBXrLvqB3c6Jm8WUzqZAPpKkogmhuTcc7VqyayBbj2",
  "key16": "RSEuJuxHAVyKiJPuAyYYw5o1SSJUnFYU4emqTB7iS4r4XgnYwwx58edLsMS4LP6Qwp9WDc2kBhVaESBjpXFPZU9",
  "key17": "29d7R7uBj7aVnPqodMJDjXPabmweLj6xHZbrXfWQ91gJnSvQtThpLBVHSnQgLwRSw6XF3PitTWDcVmzDjpcpVtAu",
  "key18": "67Yy2t1cYcPf4nrsgapVdGg3c9b5mRAJH2h1817Axx8F2VXr33Y1HNVFCRWeWXhPsdAdAiNdS4W7Gcjsb3UUe4VD",
  "key19": "676wYin5SKCeKUNzN6UGEFanRf34eovZMSQLXMx7B8ubTqVwSxXLSxes5ooeVCgfyA5Yaj7ZJpf6Lm3UxC5ij8jD",
  "key20": "2aqR9cktSiXK4bySXvN1WaijR6CaDC8KTHmNkCdfneo9UTPjZNYfhKqe7TucgdTNjypjCL9uSK12oaYW59BUNMea",
  "key21": "3NFb1GMcgqEsXGV5TaBZDHGZq97DK6dSpWgyE4hYhrPTxPs1tkVTWkRjPtTaxq3VYvAH9H4W5KQze14HYUQihS6E",
  "key22": "5LkMHQ7oBwSGAWS6jV31bt3geEpiKorazQy4RiiBCtZee399SLxJ8mByFhAjZrhWKj7wRdAG1RPrLRSsXiGaQJMr",
  "key23": "23KFJsRNNA53qWF8DkV7ZPDVkMTF3VwKiLacd38iu8mDgj2ggnju7GExSwnvdy1B211wfujCcZkB69fP4kuwLfTo",
  "key24": "qD6ogPMVkDVeQB28SkCEECNceZ68ZVJo1PNsUvoRNWEUPdRnAHJFMu6Bo7UDZAtRjNnEEf3bJzsjbBstEce9gUN",
  "key25": "5g34ZH9xZqTpfwNQLC7n3BdFH4mgBNbgogzaRgaJeZMVf6M4d1jELDUVr8YK4SoqaLncZjhXycduAX1tgjnqLm25",
  "key26": "41PGAhjR8y7V8FFhB5pizeXcqgNVg81DR3bCPEud1Q5RQ7x3UQDUaumYCK44XMtTDCWvd4Unuzfzj1TxnQjXX7sd",
  "key27": "5LujXma2HvmzbE5j4B3A1D8ZJfJJ17zPvmk1tkfUwWxn12MfE2qhrgB4y3qCoMhanbuK4DJYWVE3YoVTEz21NQXu",
  "key28": "KrT7uSSVcPBFVeDj91WujvajkDaR8BXqmtvnv1FkCLiqGbRZkJFaFV9K9tP3FNDYzKXF8mJs6TVMVXbdNyZgQES",
  "key29": "5WAJze7k99JZfteohgrHzviRH2stiDN8Wjfc6CRVZ8G9nKMPJrb5SqmKp5rXjCyzgjpq4bJAArwM7eL8kMDDgkPz",
  "key30": "4AbKanUGoRLJoMxUz2ip2kpXmaWhGCGV7YBFRyDVF5Bw6VwFRsWCoBJ5mc6MyV2AdrybrHwvMHtc4vDv7sTZFQXK",
  "key31": "ye6QsveuiVhfJ4EwpY4id9o3H6K3ZY2BMwjL98PdUQygsFeL8NQB2mMhyZcdY3Sji39xXBLtU2qkz1oR99zWiVM",
  "key32": "4NKRbmQ6PB39dV6Ky5z8sqDy4RXLxWBj2bwutyqqXJ71oqhWnMNEmQEeKjRY9bvQRWxMCRUjjvuKDhDaxdTpAcdV",
  "key33": "b879QCqCt8iquzgcjdmGJc82mECZJF9CeZ6nLiPPkcmA2L7XKfaQR77DBgdVmKWwH7FLkkJ92Ehs4VXz29jT9KA",
  "key34": "2wdqzgTKhrE3q3FeFvFCLyJki9KLcqN1uPe3c8kg8bFzgrDPde1b5TfmHFg2QRRX5eriKatxjMmsBU4uvCqMdtiE",
  "key35": "3izC3XgzfZWwVMv2QbLeb6b3DLhLAnYZDgyNP8HW7A6cHtVawZ3TMsevBptE3V374zDRaYzpXaW669gznoFzMzjb",
  "key36": "4CvNA4mUAAYiRS6ZLZeyU3xirygK1qm5G7eNQJ6R3BaS1kkTNEyJ44htQZhfUjK3n5ZdT3K8Pac4ZdpTYGZxKXfb",
  "key37": "5GPeKrzvhVJyTcKupY6rTmwe5PeZ8cH2zbZHFf2gedXjnyQCzUELmuy8PVLYgajvyFcT7XmDdh2MoBsSHhY3AQ9h",
  "key38": "oKPTyVkaBfLVv6zr2AfZT7iuahZF8DMNrdKXFnLvh9yRVkdhzVDd5kMz9AUTCGMP3ed1aRcKAG7aMoBQfbaHXZT",
  "key39": "4C78A99CvAEjMrcZeLicAH8XqmjzUxCLKF6JDD1W7cuiudVyZEJRLmc98bz1PjcdYpwHLkDzbjvgGWX6HniR3ozR",
  "key40": "4XyVnf3NNSQ8TTMecxf9zqGw5RbZz8ivUCt3SVyo1a24XGwRA8WjbHLsBC6Rwf5NoTYWrPqnxKAFxJTqnCGFfsfh",
  "key41": "34WeP3TQjfx5mS71x2URARPx1sdvAMxkY5XVu1d1QC2DnpTVgnbEqEgePke139ymWC8V6djVH1KmBi7rd5UWD3NB",
  "key42": "4MgZipG9v18r9wfssXrKWbfijsGtpLQXNNxTiQWSAMMFzm37ZUhpigASXVwTc71fd55jY1TZGQ7NjcyJYF2ZsobT",
  "key43": "24hStWxQbhY585W5e11BXLpD1DZUZwumLVoDeEKHyEqhKkvizQVNJn4BHFEEFpGN5LcDjjza4C6dBCAzEZesGUDA",
  "key44": "63PVN6snKLTWmnzf3RvTk171G2hNP1o5fXwAVgFyya3mZRtu4VqtGh7NiTLrQr1CSB2fdjrcBKg3Bj6kJxsP4eKP",
  "key45": "2R41EuzHrff6nHfjxU1mqXkckoVcShJqRGZcFHVNZXCr15M4nz1hCPJbTDGAhneBqnvLA3er246SoQcLhbCsZ4NJ"
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
