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
    "2hLhCwds5pYc4DrpctiATzBg7jDaurdwMyeMXUDF1Co8hSU9iQFnoD1n8ViR1Rgs31euM1KJqDt93DWbWnMwSdMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52FhvajPBsWaVGevx2XiQEJgucHssecDqy8XAsF9PSNhFsk3reZ8iEp4xbKM7isaeM3nF7GJpiMntMtVuQiBThjE",
  "key1": "3hAkFZ7G8W5d7wG2qYsZUnWWZjsbuFPkbHpY6SRU1eZpKGkJJXKUnhJ37U8dd2aGYVqUuqLkHAELqyXW7b6oiXdr",
  "key2": "4UVv8jAFPhceaeYb7S73S7GYr2TrTfXTdZixDd2zDUTNx1aadbgsN2LhuDDeCTrRqGzbudRWMjzgebt4oxmqMr1d",
  "key3": "3beiHS1ERCrWXQEtFTSTkQBuTBRLs4mGBRYaPzmanfMsWLHDLG87pk9kBQkpJxRFygy11dAk2CtvPWKkSbkqBHT5",
  "key4": "2XFDoMrF2q2zSKYXG6ac34nfvYzU5gVSXw98cifeuKenf6j87oGa3ZPiU71FFiUzEfapaKC7GoeW3PQHJkrM3Lxo",
  "key5": "5imNvgD9PMeK5txUwTaynR57N2PixF4VchNbGejuGjGa7o5p9xPXZ9nvvtUxB1Na8XeEVEtYYFMEN5fyaxpeDv6x",
  "key6": "yuHkXBkJQF5fNyeQhZbw5jqjPhmqWKame7FoExPsnU7uvCRufHiSMFjXGgCdH4yp1EYuJCh4btnTnKaoKFJzvsG",
  "key7": "54UbdGXGkv97SqqvSGB5o3B2vYHrtrCqWL46hvQprHf7WegRHkXDjN2vkAsHdaYtLraDcDXdFq6kGSdLrExm4b1C",
  "key8": "KCrH6nTYXz77ThXpuEpyPbRr2dVk5j6bu1sgNTAd4kf24NBEo8gkkU3FaS6TDPLpbPFi4qJEg5zXbC3BzvHtRzB",
  "key9": "2qKtYju7evX3n6aaKhgUdhs4RmKKNRGqorNziBKnn24SGnHavj3Rcm1YLGbCXS3RVE3deGUeqVxuUHGTTuCPYJrz",
  "key10": "3eS5dCGkQfxvP2KRQu9paapWtzA8bLkDWGLHaLDphRaGeWY76WB1VKeGFuoB89mDmzDkKKmeD27fRDUP67DDfXn",
  "key11": "5Dh138oDam2TAZPM8RBJiBU7VcvcdHLQQ4TthoXNq1TVoDtjL2Hb5nx9h5o34K76RueKweMYajjEVhCzhzvxdLh6",
  "key12": "4sDgYFHD9MenT1vU53X9urtEMhv7Wp8Yj6aeKwaR7RUHznuNowyZNqT1o12r74Fg23rwVFiCHvFPWFG2Axj9fwR9",
  "key13": "2Yra82x2hrAvyuF77szSV5dzjck5oSC3kE9JQh7DD1TKV46Z5zAtfA5NJFhRYsnvn7Gnx7dNJZkeT7zLiGNfZJqp",
  "key14": "2gQWshzPjczh2jCWZstZSfgogSUqhk51L5NtXNkU48oJy871V5s75eVfPfCjiXVHMELwkPWL2WuEGaAaqEiGbW4N",
  "key15": "5f1r2DoDoW2SeAyqRCY5bJu6FtsbGimftYRDP2hD7YuFPaqhT6CjbaAzxqiKj55FpGCM9XQP7GVXfaoBTjztyRtf",
  "key16": "3eTfEfvdxShJWYJmFwCm62DzPSKYHKXaZrTUSrRk8wwMoYh7D7mynTfafMFcD5m9wBEuT1ba6bg5EDhyPAmgBxDs",
  "key17": "x7hDEW7c2cCtKL67MYwopbSDofviAEiuf2okBbvhvn5ZC5x7u5ewzn8eY2nXfmR58qVSSqrH6MTbY8mXvuEQdMF",
  "key18": "2MrBzatdfV5eTakQdnDgkpHKWAnx5Adfi2Se4hEDAECa9NLb2DdAbGuM72Cxq2V1CA5hXaCQB5rnD3tJQsGe8Wk6",
  "key19": "4XiQi7R5GwDGUzaE6kvewNU7EydPLP1hX4PzimUmxmj3cXVWNaRnmPgVufCxg2U5ZaXqeN8Boj7snquCTg3aKZRv",
  "key20": "56UgJqZDjpcoeF9mExw5XqLzVXLPA5A2muWhjXaUrkgmNvfsXm3gEasnGKL8bcEp7BAcCK5bB9co8NNEZ3Jhroy9",
  "key21": "5FJpqEwmpQ41KLAA9D2tSCRRriHaJdmFr3xqUqzZqz3EAWZSZNwFocyvaQkwuBR3od7RnU4EUAMJa3xGjYZD2vis",
  "key22": "4DrydxUeV9v755RuCbGZpgktQKKsz8Kz7hP3VVLFfJx9gzE9JLorGsR2G1sKawk6nX48gR4tWcxb7GbAQuvfQTWQ",
  "key23": "45d1VjA6ujhy9iiJ3hTTZMDzTjra5ipRrw9wW6P7MUBmvKoi3ESJZyxz4bZ62mLuku9USYTqBF8noSVyWK7GD2SH",
  "key24": "2XGpWhFdDXFSaDBou3WzRGd7eai8VJdUp2b5dynAvd8NLuBFiGaj5VUxmXP62sFQQbjdXXVAAfEEycTWMqzaAE61",
  "key25": "4ZAMiHgZMRp4o777GpmXUmjpFrhX7m8cVk1RhLJsyzTVr7DYFKghDoEAidTRzzGhwdivrWtsrL1TnkfrkC3Ttjee",
  "key26": "41FfUNrCpnaKcLBHApSM21WKqHXHTv76vYMSBVmvYACZBmetCMw6R96q9SZL1xqYYM7BUaiy1QNG68Znx2AYZC47",
  "key27": "4o7C8Bu4CZWeu6amiicevWzpUQzPkUTHJXrZDMCg9dkC7vZRYnQJCAMMCxCGthsABo3uFnzthVwRKZVmTsFupFxA",
  "key28": "4TnsK1AM8Pzb8cXGLGxeCp4CxDz5WXJMXyabPJxiR5SW8W1aF6KQ18xaaZDFU8dmmSnH89UqUhqn7Mp9GYvDBKGL",
  "key29": "2uK8XNYWHmfJk4YEudcQAmt51VThzwBarrZeGJy9244KaZybDZngoGeFUtsTCw9K8oRQdAop9jQmua9Z54xmK7ij",
  "key30": "34q1bTUpyDf87y8ZESCaJjn2AFNKX7KtPQUFEsbua6rUA2dPw3Y3XiexAhQuZ96dkrSRhRyozPBTXxKvQ2KJ833J",
  "key31": "4zgFzUp6McEHojaPUdPZUimd74UvJNahEtE42mskFMvivbcpcmfzMS9UwAeXWJt4ioXcGLoit6Yr6i9L83Gt27Jx",
  "key32": "5jeY8Vj3zEZyCc4nnAoafd8CatKZs3s5ZvRghEf8kTeFnDGryaYDZnqesdP8sqaGnycMt4sgPTh5QAC6FbDzwNcY",
  "key33": "2xTFiLisoQFb9QxUzdype7xEcdJH4LXCVyMvWvdzovKT6JWQjC4nSWinVfSDPWGsWJTXqG74FEdaPu54JZebJcdq",
  "key34": "kyr8C8wSyeCyFAnvqLqvHtXJF8voRFef62WL9avhishb5hKYB8LBGFs3tvydYFax2YVu8RRhMJcTU12sgdEMhe2",
  "key35": "3D1sLcn3Ysv3hCbVX4UNKQvx1jNLssx8BuXVrWT3AGhoDXihFvbPDzRDhgWEL8k5yuX1xSuo4TdxwHnTpJMkXMo7",
  "key36": "3YjbbsoU2qCMJredjNUSgP52AQcsBeWiHakYoNuEPb7G2Mwjc8E3FC5rtbpWSd6TTzvg29NeVzT62WKP33ZNfytu",
  "key37": "5WK8G3m6doPGZPfpqzEK5rDwrD88LC7kzLuk56YAGPVBJ4WsjpHtNS8avjTYkvPe7xhyXjyF1PpNPRy5fqA5uq14",
  "key38": "2xL2rDE6jP6uW8xqBtLhShREWK2Hv3EJsDKdTcaGj1jWsMq6RMTPRvZXmd2SJU7KdckVqEJLK7CNQEYdBzjYc38S",
  "key39": "QwmLAjED1BcPrNFwhGn8zDEgqn3bMrixznEHNE3vJ79H86yrSpZCSF32Y5gzukvf1eZDydVYDtUUZpRWkeq1fC4",
  "key40": "WCyt6YjJj7h2pp7EZ2XzdhMigxehxibCZmZtHw9ZjZ4ahALWs5NadJmajqt1RQaa8fww8SGtNKx917GGJUKnTu5",
  "key41": "32vsbUJHWxnakabYULgfwTvcSeUT4tXoTmLwVZYZBExXjpnSGyEcnksFhVCW2a2J18Tf4Wkq8UZoY4KbUqmPYVr8",
  "key42": "3Cb6yww56QCYpLjaFHS4FuCGT37iJQxKmpmxQ4HFin69jWhAhBrDydBWfjS4a9MUydTpLecp238z314LKQLj39G5",
  "key43": "5mkDguNxmc3Ui7Zy7Qm12TnmAgCyLWG4S6CopjqCSEA1uwkYR2okoU7RZQQFcpQqRKM4HEP4Wp4ikN1KNmpgVhbS",
  "key44": "dMY8Vcusk6xc5nvbDdwKUVG5NkAMRaxVpLJakMxvZpq2L9K8hqEBEiikJjgEU7PsNmgKEh2WPURVa8hAyiTz8Dj",
  "key45": "4Lf1sZCuHa1Rdx2yDZDq7u4yQBNWRadHiz8LauvqhQrov4jbzcW45nHxdkeQkxgnxR2q9JVx66XwFYsjzmiVWwp8",
  "key46": "3LJKs5bZQ8oZqxHFhoN5EC16hdtYLKYkVrAzJ2nhRQMfRTkMaXjcg54j341q7cXDMXm2uF1q7J1GBVCwwU56s2Q2",
  "key47": "52ty9wsuJstksFhxE6HHGdKytLJMSXBv7cAxtecze98zFCGo71S9M3fTbns5EocEozWDanCWJuNEEWg4Q4Qsh84k"
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
