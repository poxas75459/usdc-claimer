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
    "HL9FmJR6aVVQFTS1Q2p6Qnsa13A3VJiCfgu53GC7fBx6uQoD9DRjEbdvJDhcEFMi8iHYpsEAPPDiKW5nvjNwApC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RoB6YRMC6NU7dqzZ6pgXbBSciiQUCAx3B1ceqfFGXBQtWLKaUr8msXcZ3ueffJJqEb6VXLn4v5s6LFR1iiN86pr",
  "key1": "FAuQXpig9eDipNkJUpHMVBgAJmqaa1yY54U2TQ8RirzMxuzUiSgAy1eQEqsaaFWpBdjhgZ8mKZGooEstPQETA4x",
  "key2": "4ishx5EBkBwky6TfKr91gQBbvgRm4kQTnAGQ3qVccUq3PWevCTUPmTahby2fFBdPaMctB7UuCoyYSXoRSqXEhFKX",
  "key3": "15Db5mfuNykPYbKK57tMe6SvRxixw6GKi4VbdiV2qmpcCdQTSrKKkNaXPFdcoi7dMh6dZpPqKb6HNEjfgh2b6Bo",
  "key4": "5Kt1LGskGLgZ29yFpX8DNQPuLU91o9qcjiJCCJSpdLPFtsyhzrQdQZR8Ti9hPX7dwiaiFMxFuNF5AbSkoetvnEqe",
  "key5": "2P6c6ZJ7dgqKxQof2KALGUrXwFhX53orPg6nazZEsdSviuXFop57jVwMYZey55ScLfCZ4scAWx3QQ2G6WHoNuZqX",
  "key6": "5gMChy269Rn8sgaaTFMmNAaknUE74X31Y6naPzyfcEGzKpwnccxUjMUFhXkAT5gW8bad38JuyTiXgrZU92CLMAQV",
  "key7": "5z1TizKB6yGpRyg5dbKbJXYsRhtB519hCWWuB4hjjZJ43YLjGhgsVdRoWAwMFzFUSLF3tp3uG7sHrQGZCr4A6K7y",
  "key8": "2SAsRV4RndL6Hrok7dx2Vxc2zYhB8TgG75cf7wT1NZCUoaEnL93oh2B1z251JJCRPf8aQAzCXM2yBjhmybHi5SFP",
  "key9": "2msregZsT6c2GZzqKsYgvzM91aCsP4dF2M2La5WqXb8uv6vMB7E1zjNE2mvBTJpMhT8N4W8f44Zc7gsEJZLdvmk3",
  "key10": "53deKwWKhUmtT8jyJgfvViHbP7mmCzrTHKKDqdWEAWMFrXzC9nBLhWJKfsxsuqJn1Rb1tFaNzy2YWEjTmWZXxJnn",
  "key11": "5LD8V4hEZMf1rc4gXSce3NihLjzHLS6BdK3P3AzK7QqhucTgpmUzwLu87Fpo7j69xxJvjzmTpVf9YL7aPJ84uEpv",
  "key12": "Uu4BV1XJNBDMJBgYv5o5TCuTwsvAuHxuLvbcGZbgzgdksRHSTMUmCQBkFjR9azBDGSiA6eP1rs4dYeEpJtQLsoC",
  "key13": "3CtzWe3gqgmZmBBQA9dgxg2z5cWyHZRazuYpQdEVKCXfJDitJSCvwbYvhr7vypmyxjd9Yb5K3G4SuzewZo6CqjjM",
  "key14": "5JzbEYo4XppVu1uJBJrfeWAdwKQ1sQmnHm3AHKSJ7oiP7ZwhJ7LnXbzkpRPGDKzytiqAb7jNoccTzuPGh29rKhpd",
  "key15": "3ipKbiVSjWtLVDuNvpK664uFdMyaGzqBaqCrWzokVJjM7vyYDvSEZtz4oEdZ2Xh1cUsfZzAFXLkHmgxDRocjbMRD",
  "key16": "2CpwN8vac1PJwScMx1YrVuWGXwwmuvTySUC4qpvNNmLkQgz8XuWk3BypQ37fNsgFCpqt2PsSwhHX3B68tQFmanxt",
  "key17": "5mMK6sGxLFcDgFZhpGK3YUCihDwmdvTBSbX8Jx52fHsXeymPNBzpcUDb91DWHuhvReyMSEH25oCTMXBY8p3N4jDn",
  "key18": "23wLXRMyLvLvkTspHAbjXgowfc7cawupabUfK2SFPxAUjfqo1Y4t37CqvFieqadhM1gQMaFRQSM4698iUGTTT4nF",
  "key19": "5f1PNGmcNAw1eC28SmtnZTrbs15unPtKY5XZYgGJXPygKzPhauYo2iBPKBFrD2m8JtCenaaX4gRe546zzkjoCDjA",
  "key20": "5wkHz81yS6QcjPj8e5gEJJavE4FS6PgmaLutn2PcauKXtf1mQq4Kq1TVHombgFLT5wSkrGUjvkW4j6DnP4r5Xjjq",
  "key21": "vpKfET1BwREVrrf4Sq6EY8ck2Q1gx1JToTZHTwjE6BGQ9W65ZAe2hbWkMs5L4LB9T2ZUkE7ubr5dJsFh3ZqSNhy",
  "key22": "36hUaVCjgFmiR7iGNxi3bvQNxvFKRxawMyzD2bTeo49FYJRhYu3UHHDLGhgZkbVdAi1EDrnCZZ8XqJ7BAfT7N1Vn",
  "key23": "59X5XrtsoVZNW19FxqXcaFce65cVMZQrNxJ9stXcR4Juf5eafBTZcJJrpkjP8xkTY9kWagNJBwCGxyve4HiPgEqe",
  "key24": "35pjyx4tNCfyhG57UPu76Y4Cj6pHG7tRUDHTw6jgnoQ2rUz8yobBBjF5pczZWuJ7o2ccjvU6ZUxDfhvTZoebLq6Y",
  "key25": "VJ48cDp9h2AbQDcWrWks59J33yt6GUVUSZDEKXt2yVPZ2W8hDs9woQb9LQDjS3aQH7Vu7yJ4ygf1xvKdDSY2p53",
  "key26": "5opNWWgUf5p4BkSfun3orpGirhZiwHuWRMyb2PcZPYeLvATGJ8gQMsc5drLwuztyf9dGs3MytdiVuKdwRxhBAWvY",
  "key27": "4g8aaKYfi91j5q3B5MsdgefQtEF7JwRVtcvXitpAtZZYB5Hhp4y94dXJRYj7vrHVXz7Ud8PKuxfNVpuYgwpiAobK",
  "key28": "42QLi61GaUsUMRfwkdmBtFCtd914QYmLGp2qrb175R61rYzqXDvcBKB2yernxpb7ZFy9gzHvFPShgMJmmABhUkSb",
  "key29": "5L3mzPjivzvggJjK1iV8fDUfefDX5VEQ4gR6SHdkjoyroMPKKHeu2q3tRDdadKdfuJgpfH3ubQFojAwd4gJJmjXT",
  "key30": "5NfTd8qYqJ1qUd1nxQQGFtQJn18q7CqnEagE41H6pTo19pnUF8Tm8x3ue2mmdar8YZQ2XrumjLjrjF1KNPMix5gu",
  "key31": "67YWwEtcWDKRFiWiTxjHXjbtuJQnQdmPpn8JsxX6qakiMtYp77N8ujBFwu8g4KtDrU2PVDVkCityZrAvzaJ1fzfb",
  "key32": "5rayahWSSe8jFjxS8r9aYsJdT8yiuMnN6Ei2wtJbCjgvsAtNoN9BYVaUsTQ1jTdyf1Pj7TBTVs3CGDGj4LJHqvnY",
  "key33": "58JzBAQHAdexmLPKPX7Mwg2EDKsFHAbnGVC4X7721XrD9pLB8u7oorezaA81qvCdnT3WoQkFyD7zzWX9PZphi2PT",
  "key34": "2GLvvnDuxuqnenSuPEpfFH2EtDTm6CpLuE5mJCLnbFcVnDUoF7NQM5xKprqoEEKEA5oM5wv83GxyPCFtwCjKksGG"
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
