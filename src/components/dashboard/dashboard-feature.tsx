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
    "45unRWhQkQaiCcDxcJw5PXUHbUmWhQ5wquVLRMUYeGuR8pv522LMFtHoJEog94ie5bwQjHPQpQP1CT8TUsH644zG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X5thrKY9YU3FnpsgEqxwTx5jXpyd1ytJXwmUzX9yQTK34H7NrvXj9L9oYShTyEGNYy5DyTdop3kFeDY14xCquFd",
  "key1": "4ppPoeLbU1bRXcxpVg1ioeZjDpShNZHyUb9W4bMV4Tsh4iNjiW1U8zvmDsYn2qgwRtQbrscY6fuT1AwRxqTReS91",
  "key2": "EXcKgWTmjvnCGgBauYHdJge2p7hJAJox2ysitF4E9GERD9m7PNNQwWF3zCgQ7HmGf8YSDYM57H6QaxP5Kk1W7tB",
  "key3": "4fRCz9qNPM4HuZo4hCb5rJWiwpqAefs1ArAfdvSXg98eN9fBmmoNcTM2aJVaAWpVrtBPaPCJFvjuzt4uZnv8kDvx",
  "key4": "3Rxcc9Qg3v5yodTeJ1TGvyqogWSz2SZiu5en2Z4BrHVX14uLHQcVNuZkg6BxTLj1GrubiZzjj1wYpeAgXtSP7yTQ",
  "key5": "3Ds8bA8j3SmnQwf5MR7XoWYDP7xSoAhUgKzF3siJn2zraJq8Z7hokk2oyWcPxMokVWHGTmd3wGbw1EKc93z5ySEG",
  "key6": "5Px1zLr5o6WK3DtcxczYdvqfwyR3ZYPfgrxLjLh9nUjFZj19zT3tbTjEotaJa8dbYgfmf24yTrtg8nUGe1hrEGKy",
  "key7": "435jD15HZCyx8uPTLsqioyj3FX5Uyitdo6BQ2u6uDdpi9bYk4H4g1PXzQau4KPgL2QDcHHiATge1w9dsu827rKHs",
  "key8": "27bJXcaLgs9JEUstSUC9gQGpSKi7jMvtpjkwTpPwSYxg8awjQkeZNXV2qDFVLDqWUAbc718nw4cf2EPurJpCWw1w",
  "key9": "48GHi4qyNQtq7TA6ZS8E9bbpK4Avy3FaRHn6RnnjRUgGoJ9CkpoQCSwHatvp65eFVwAwehNnUdK9oU1Vh54AXrXr",
  "key10": "4hg277pm6bT1NdyBJrhVbkeJTvwyBU96gP8ad8ED55a9pvae712Decy5LgTBau4CtiUvsHaDNAYs7moa3XEezmC",
  "key11": "V435nC1XgHyorysWFSdKNQ8zei4gAhvochWPCZ2pFo2wt2fyd1qP6wwTmdhnNDXepqRdGYaDLZtJ4wLi65WZFoN",
  "key12": "2DYUVpnK34FDW1A2LM9Z7cgkXwEJ6uebywCdBPuZzz3iPPBRn7bvBLwfkxSjXLKWVzJ8yJ8hNfGivsHEdTvGSkPc",
  "key13": "39YLa1pEAxxYaaj4qJDPWpjMbjwXsPJPT1RQyNZodPZYu2mLboXR1Pb61HvzrpQncvQzrouke9HwEVyKaQrvDQMZ",
  "key14": "31z36Cmjq9zyAHaephuDdtJ547MCHkCsrQrxjAMh6FEnrdHkq5U79ozabUmEXu4yhM3EHYZ2pSrrKfuNFemS9tNW",
  "key15": "5Bt42mz2JrMmFRyxYuHj6PFTxHKap2c5USbY9U6pwAzPQb1qmY8dEM5N564GmmYaEsBsX19w28SbeWvNQSLjwsQ3",
  "key16": "4FJyT1pLWK1AgP7U3NSkbURhKsv1v5ibX8Hqv9WjZAH2szJPCeuKjCX77sWc31G6bK4XECsyVP6K8jqNYzndb4Ki",
  "key17": "jJjXcz6BtMBtfkFcnW7Kwe13PkgiTnu3adNpeByt7wBavGdXZkstr2BaL6Z5qrLgHy9qRuKa72fFSJPJt6AhzdY",
  "key18": "2egKuHRXyse2kwX4Jas2kxFXLFX487fL9e8cVzuPcvfzyKQCiPiVRvPD72YxPih9GyMPfCwCQN1prT1NR7LPm9tW",
  "key19": "3E9cUHmJaJjJwCV9k47toNPDjEHXiXshzD8qNsRZq5YDtW1Yf5hyMN3arVUTqx6BBk2KYYUzLq92cjfThfCKYxbw",
  "key20": "spQQW7Q51fEmbHWVBet6AHxgF7MkXfTBWuiNM6SK2SErtCc2YXVjLXC8xcLNZJD6cvLTDJr4N8g7CKmWsBJoemy",
  "key21": "2f5cDS5U4iYLDuvUvNCCuFR1rufkZkPYEgUVVJU7168CmsL6Q5DhRym59q56yYss1Zn9m9aUtpw5fjjVaxxEvKpu",
  "key22": "WTVAWzi1HVU7oG13gEUiit9c4S8eyf6gKtBwAjTsMk4Px33dgghhPRfGqtR8mKWT4C9bnVaSUPF78yq39fAqeWg",
  "key23": "4vamPkacQKcXB1EwniQMcEykR2UvVaTGgXckvcvP9xUN5JFZuwuc4PUodbwzapg2HrEJSLfskNfqGDWuHjiPHzeN",
  "key24": "8yvh8eSdzZ9wx5jXgUQY8KgAN2i1vetTthRbgAwkyFZJ4JWN5TsnkMsWUCL9ciA5zR6y7mtG75y1yMKvEyff38v",
  "key25": "aYDfNCdXHMQ7SPyRofH3NSVo8QMdURgAJdrNp8ngHjVfsNbtFrcAiuhjEbnfUmGzRiNYjNoWDYLwDfZnXLxtQFy",
  "key26": "2ojTLzv28vmDiqRacJ4Mv6U3iZiio9jTHaFW9aMVq84vf6Cavri4RinHA91mJChUurEc7gQzbSxafjZ6gD2DnYjo",
  "key27": "uXqyxYVH3c8QqXXUXu3AtcBiYtsg6Qnh14Rp7GTNVkrttpJr2JefmCAeT6MyZXFUHzqxsPL77PsSX57KMPSSzDX",
  "key28": "3YdKpHaRko5vrG4TD4Xzjzt8LshvniSihqfetnBcH2zZXd3ktSa9XfGUBqRTJQMtLmy9AZyUXFELAgbwVQzGM1XA",
  "key29": "5hy3pDYKdpqfo47fKjnp8mJESKc95e7kshfKQov4jYG494Mde5w5Mx5gg5vchaTG2wYdiMVX3uQwBbjDLdGraucr",
  "key30": "2dSqbPstzzKXGBZp1YrdNHNgX3KLFmx417iLALP89BQiZWvDD1isojMUhANCGsACrPuqbNGzXVvKeya3MAJRY5CF",
  "key31": "d4mQBc5GQNH5eVegCWLCWGRd9UZSHgDh9ytjcKpn2FuBShfD4BgG1rKUbxdzRhL15PTDYSZwZWsCGe8ZiJ4D3av",
  "key32": "WqUVXsPPtpYKp3gCEnQmA1ToTQyi4Lck661BjjwGYo6CHHis478TivbkosTzYanhnFF3bcXEynnoHsFaVmsSiuA",
  "key33": "2rt8cxcub7eiMQTzbRQDnkiaR6taSM1SkKgLhZphiBrds95foUzUPhZQU8yDWykUqydHvhgcSqHzths5JF5Ra4dc",
  "key34": "5SA6QSmjbXirzzeNzTYMHTKi74gsH7YVvSVYmSqC4ZZsaoF2xZeUPhTHP9e61Lki5sjTxwaVkKPbA266QNqJbFpk",
  "key35": "5hTJ27zU7mcACkiSeVVZSUBGJT1yb4QTx6aXefqotUgkqs3JWRsbuUsjgA3p7eTooRvL3KzXE4d9EdCuhUT2eoYm",
  "key36": "5zqGTgF7HJ9DBrqvUG6zAxHS69gawdEFQUrPdoosFyjRMzjXXpPkZVBoXB8xU5sNAmGKyHVgBYXPzuqWNN8PwLHM",
  "key37": "WehKjznPovDukMF3Gtj6Wb9QCRX2h6j5VKRAMxyN2na7LHBjto3jiz7poiMbTCLrjmfFMzuysuK6sfbfTdcXAoj",
  "key38": "23xPw9bnfZ8emCGqbJYCguxY7dqUPCzUnsRKyYHcXXxtND92SgDwKRb9iUgBM6ozH35S65GcJXn4qNpuokSxjFiu"
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
