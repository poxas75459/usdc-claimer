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
    "4fFPEaV88P4n7aecwbkHQQ4jqxHAh7LPVv8ZQyCEjdiap1abfkx9vwagSNDhcfgeMd3EniXFqDh4iCBZno9SuXEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65YJWEgpFKmQstSiWRBfm3R4ZtGUF4WFSHyD6ZNWyfriJQFnWGiKTvow3tyyDYfe9n9zq7fNnssUwPt78TXME2St",
  "key1": "5Fp9t8QhewZf3ob4L5cX98yraxxz9rPvbJMY9UtbcVwmQEJNSWpSiCwf3zBHfXS2pzWcVoUJ7zMU1noAMjWFmnw",
  "key2": "4pXas1arMWpZ8726GoJJHM3eFtGEfnVi78sR1UYQDsNhC6145J2frYGFCu4r3uZY4wJUYBAvVwNu2AcfRxrigQQA",
  "key3": "YkJLuo1kEMmFKhwPkgbJfwG7RDZG7mVKHUcTgMuiHxj6kT7VHX8wT5vp64RPXAwuTScJXVkfsfAXZWmT5q1LtwG",
  "key4": "4LeDYKs2UoBNTUNVENGKaHWHFW8yhkHTnDuTa7PewT9dEDFrwPJRwFrZMjRpHvPTyK3CroaXD4eK1xmg1KkHEDzd",
  "key5": "3oeoeu4sWCzff2w3im5AtHizjH4K7NXcdNS8khNijvBGLHZpow8ZRAFt1iUwTqnKcDzf14rrVsvYWhFkcajYJmdU",
  "key6": "4ESZnrdAPbGw9HmfY5jhHorifzAJLabsKvzYc32kGXKF8g9EyLeZiUykTHhswbcU4Y7sz2gRDHYLYwAUx6jjh6uP",
  "key7": "3EtpMKV7MsmQ1RTvwpMNYB1QD2Lze8gj79znrc61T2oN13Rn7jpKPWGTpiRg1kwuRAWxbWSVmHwnLosfXjYCHb2U",
  "key8": "315ziH88p87LKRvfuesdc7XTQNd4xqTNaePsR2BxbqngSGsWTLF6tAVHnXLvtj6PtvPQjD7Gbg4jiLxdwdZGaMzw",
  "key9": "21ekkv26xEY71PCQFu8VSkJCKbmTsZn97vJv39yyQVdBvNKxxtiN9psReBjonVW9eSooB1Xs37rnDCFaaqLFSxz8",
  "key10": "4YLZjAEiuo3Zefv2cW49KinAVTqxQd3nzZUYYCXoyeBDK6Dm6ng11E1gLHqRKCGXMKTRQNkY6xkEGSqLcvunraq1",
  "key11": "h6HYto7XX93M8YAMwBAVAbQUJ7oNFBxtBW44vY2bvAHihKNruRibHb6bdMHnWfbusPQUWCa6m3A9xR4vRvSHZPk",
  "key12": "5FRKUgHfmzKChjEhVHMaCwv1UWmd9sNuUSto9Sp5nJVWTPDeUayo9kxSgapzUNC1z7y9r3jjJ4UeWaawVWzqgiAb",
  "key13": "2AvX3hPicyf7qM2hYpHabXv18ZrHGnoieEU18XLzxb48xNBd5okKC5dKZzY94nusMSCrhbkxJdoNE2MjTQ2WtBM2",
  "key14": "51u3HgzCyAP2A5hEjuUrej5DYau1tx4vX5Vbk7Do5sge8CAExNsJUXszYereE651SP1gU1GxzQYo5WXRWgmo8tEK",
  "key15": "3ZprHFoqvm751VumiX6XAKCmQpyDKfnAu9dTmEnXha2ikpoR7JxwXMNT2EhyHxCkeHToh4m2kkdm2Wm78r4tAQiR",
  "key16": "3GS4s2oZoP2QYUTgVQaBevevjBarxUaJ38ppvhWHt4StSJTWJikna3Zu9Byot1YNPPjHFBhFpcoQSvD2cTiS7Hqr",
  "key17": "3iAo8AXSWP8JqSxunpo53JpRrYZ6kYT7SmWKiZm3bNxm789jtLFjmqMcT7D6TmVEZfDmaxVH8JrXBJ6WNVE7teyc",
  "key18": "5B8oiYG91sX43EwzGDyYARuMDtmT3AUr6gER7ta6sqpnsyvcw8QeioEo86jUH2w5X2V1Hx1Vyr3VsKZG8koVzbta",
  "key19": "49Be6h8CCyJRfMKpZvj4ymDcDLDpbAXyDbW51qwzGduBtxA9yjt2FKUzhgN72FiSnD2HWzkB46dpUmsE9Xqrahqq",
  "key20": "5LyRXyvJaeQDuKsc9YebGQRDJgKr9kukWrj3McfeC2hiETLA2jxJfbv5QLbi6ohhyDGz38sjhyJuaPZ69EED1HLq",
  "key21": "EZscvYBnFx9uLCMF3Lmt9KnsFMPXb2i3cryLTh7s81o31M7bZ33ZJ9MTyTmbjwFza4SimmqbEjBUiDpESXxWDfL",
  "key22": "2ZjfVs7Ezn9T1UmaA3AhU6PgZguF5DmQSLwZc43XinjZKRbFojJi4cCJK4zgyyBonfjqhMPaB4Pc4sL4q64xWofy",
  "key23": "5Jx1xqQGVS5QU96DH6YL6QfC7wFFb2H1dvvLJEcZ6ZVAeuDWG3Usm6TK4dGQQDePNHFZzLeF6sAwU5eTN8w2B8BK",
  "key24": "3pYJVsUDatuLhGQrB3g9ut1oon3KTvfhZiikYGobytdiCREyWgFkfJzCUbeguYoBbUCzhWCJCq6fd3mLy1vXibYf",
  "key25": "5Lau2LwEhnLBkuGGFi3R6eR26px6DHP34MDuS2EoZ1hnYmf89BtuHFyTQPTzjucrdRLK4YoC6mHkzCzFHv3MJXeW",
  "key26": "4GiwxiueCz8y2RuCNtBcqnnpxq6MV4oaXAPCpayhNUvdGnhgujWaVqTEtGgaMWRhM5dRtU6a3XqqQLMCCe79dvrg",
  "key27": "4W9vP4jwshyu9c547muRrZcCCUsg2XPr92yj33w6gKnwPwQAuAqM7hdhHnPgWpPGmGBjaQfWsRvcqf7xxhnRuYxP",
  "key28": "3Rps4iihHKKXNHDd34VcYPCkNvVE4jkqWA3W3F33Yo77AA1cj9e6WLnpN9VQat35pmRVxM9FH8HmVc6ZHM2Fwbyv",
  "key29": "iD396fCiUWWM4efzVAzL6cH1x4heaKbdZFnYz5YHiCoYVKbnkKatWN4yFXzTpwGAw1YdJuxwQhKHuiLG1ePJ4T6",
  "key30": "2bAhubLe4etrwBdx49B7SsegYknV18kXwgqvnLgeoa6wPhKVpTt9J8i93qbSbr25gKMeq8RwQbRmpM431tA8kZHw",
  "key31": "37AABuup9R2Ph9Zd8M2E7nRYzsgRFKWS8qzWDdF1wyESSGUWyzqDk5GwTWNWSrKe2Gw8NrrXGP8J6s1oZsHqJdTf",
  "key32": "fUjKrZLZqM1wKKJcxFifqGvMxjDWuzvph6ynpvt5WhptbWARfncjSGGMqHSgkXpA5aZuFapFwF9PMRsa1aqNx4p",
  "key33": "3Thy4CK5yDhQn4cqragQ9SncSgUQoQJTCpYzqyXmLsB63ZQZf3H3ggRvHwkdr7UMaVKtZPAHDVheoqVkKqAA2Kvz",
  "key34": "7jChG7WAMUqvLxGhGFGnMAhqBMFmWzGi6EJ7KA3U3Q6ywExFFCeeXt7ernmXprkhf4wbmBGnDgAUtRZDe2EkqdW"
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
