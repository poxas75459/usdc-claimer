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
    "2CZJp2ryVCFC4h3DkLqDp9UrK4JAtwGFHWjZpk4Y3BKMQRBd4ATiJeWsDvYLsXvkocPYmxwVLam2fDhsBnYZdo5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XPk4DgBggkwBsUHhui9npTdtiGemTyZSReJmrJ63e6AN2MzU9YGvyjS8RF5AFy2p7she1k2Ddjz1jHybPPP8Tpi",
  "key1": "3MzpRiv5Rz8r9pcHD85iHYu7UJawZn8hyuQAijpJTnzLRZHHmqzcoE7EzxDijio9gtCfYpNrUF55D3yrFiw8g3nF",
  "key2": "5KyQRXQDAdAotW4PqBpFBxk5EGAbPZYbQiFhYdwKLpPWTAZfbiszeoFGpxbvXbHtnoN3hSp8mjJMc4iMqGXBTWzt",
  "key3": "2R8bZ5UztJ6GxJ6Avve9fukf162JSakvdDb8Pny4x7zAChThaQZAcC8oaEP7BXXFW5AJusbaK6fZnqU7Vb7XKRZ7",
  "key4": "34onaSjY2GtuyLYTRQ424EV2GTpF8LcaLaJNxqZpDpbtqGUPCXXAysujCdEtSSBuKYX6KYbAuSMb4CHwmPP62RAd",
  "key5": "33As552FJ11XqdQKvVi4V7Z6RewDefHRSkzCfkBU4td3X7b5D7XP7W5RJMJF4FHu5BFNGgBrHNELLNRwX65Zjkyd",
  "key6": "5J1a3K3Mzxp5yj7abRqbVUBFfAj7v7txRjyfpnPHuY6wb7rKUBAW39fYAisNHffQKLhE3pYYYHTUfMSxHyMv2aE3",
  "key7": "252pTq4KVaPAXsWuwzpLm9ULMiShesqiB5Y8V4Kp2MKCCoEijNQsWtk3ZZb6AstA7QbZNCXvmd3p1eb5RPAvMBcf",
  "key8": "2CeJomaaLLXaHH4i3HPvT2p4cYXK92oZN7rWWraC3cQ4PMvJ24So6aRjxZd3XkMYiDqK8nDgEv2hpozxvGDh89U4",
  "key9": "2WfN2KFTzLR7pt1mqbfy18MQpMknRFPmnHa8TuNibBuU5G1QZmvrdXkwhptRte66JvCAFEMPwZrpTA3725No5VjF",
  "key10": "5Nk3JJPZdCeNabdoa8SDXqxTCCZRmYp7Pk89mmXjq5B15ABKhHAiHbabWJDUiSZ6emsrKvMCdMcaU5h3v1BB9VgK",
  "key11": "2tuxwL8hZr8CvjuVE2aSjFpLD3ghvyQt8USahLEYdnRREMPEJ21W5Wnpq23BhTFu98ybsMDfBYYcS8rYfwqfxSwK",
  "key12": "3w2QAvyA38hQjKKet4MiA2nQQbLVnDWSyyyFFSAgnvyegwSsNwSX4ghidDxsY3CfHSmHJugferX7p3PvJLt9WPK4",
  "key13": "3dAHw1mXWXoECy9qdszvvieCf8qcY8SAJA6De1aoqY4QKACR2Et3C78SZH1BvMeDRFFr7zLsFtA1Uco6ZfWFMrMx",
  "key14": "35XJJfdeAnyPzMSKU5rkjxm8M8ELVFMbL525yUjyQLhaRG4fZFTUPG1nZnRnbhpuk9VnUycu99nVYiF9LGbGjZaR",
  "key15": "2PdNN4xzQjhGDmCNrT7EhTJbArQNdii26BpoZys1Hm6Bcxuo984CaPRW41Re6AJq2H3Bm1LzGPCyTPywNSoeoFsf",
  "key16": "498fKw69v4fNE2ZKKn23YEUYZaB1ajBY7FtXod8gomtnvsznnqqArhfuj3RPohX2skWsE5gSMrKP5AAUst4ZQGc3",
  "key17": "5qHGF5tq9GPymfewLRA6jh1mDaZdqozgKEoyZ3DuWCVUxzxpLH2PAm71f4gJ9uK5RGZPpfT72cGYxZJgyBjNHaoi",
  "key18": "3q4eDy5MdgNVB2n78iFovYUAn1GBvtJ2c3YaPeJpFFTVFStxGewQDSw9x9cA2duCiW9rXbhjmcF1wVZ8X324h7j3",
  "key19": "4BsQTmZyPWUXKrLimGiBgNG8bXhgqjXBY12h35tQHjbB3UPgRNuRpHTMQipZJWRNTYcBi7UQCCXr6eBsP7RLBnn9",
  "key20": "2VS5UXVVUkMSuSgWAm3REzJWEVVPGaqhUywcrjBtJqEo8beKvgUhnWQDdxsFTRqmEKAVzMrRP21d2weRjXykf7yc",
  "key21": "33NTJCEncEmDfLpsrytAmxEagK2rsyxQxCq1hoivX4nz3mWCNjTmS8zRPk49PG8ezAeRQGKux5CUnoCkQd47Xwdg",
  "key22": "4TRNrqDuycnsQTNKF8MeQaSnes96wbqaKhuRuGXZxeC4eUTbNsb1XXTrQFgY1bLmf3USR2hxF2bCdwvMqLFKYviA",
  "key23": "42QPD9f1QhxeuB3i96awXiMHenxECNUfp8pQJDbUMweczy2vrxQNuNTdCoHfLJ34Ee9kDg2A37ufgfPGYjc18iZJ",
  "key24": "3vw9NAwrSRdxg7TuaJfcwgvf7LYCCRkNahXaLQQnub98PnLsdFgWUoFdBWNoEaG6ayXVskMnWdqe76YuJsDRa4Lz",
  "key25": "3XPnWsA9oWrJnqbDEjSDvdSnKv3BSYAku56wsSqTCjJ4RYK8V7Z2nYxYLFtPQkCB8VupjFYf693KmvWxgfpUvP6r",
  "key26": "2fNJFBM4hdu6gtXyYnned5LdfeXWHsRA83fjwUHxQ7vRCCiXtwqfpJyaPghKCJ5b926s1K1xSEswPToDUVn6EniK",
  "key27": "4RPPjtwCDwZ59PJ5dZfVCHBKsatd7bsx5ZoMqwyix72ATJRYRC631gGh3WsXtGDXGaEZrwWq7231m7U7JtsjmjZb",
  "key28": "4HjJdiUbmfVSt6mhrLswovn5o8b9ad5KRNTNWjTKtajV8Ycd8TNddsdBWncaeAFpQvWqcBff4GVVxn5vLox5z7nf",
  "key29": "5j8HKfDEGYoL3G8tph4899yUGbLh15dEqon6eMFMibHfVv9tZrS3MABZ9iBD2k5UNdcduTaTybvo5UPwq4jMLLih",
  "key30": "5bBBrBaT9sAgzaUAx88JKuqFWRo48tYWUXKBKNuEabm1PdTDr4USTwby9AywdE7jUfKEuGNToQudAroxjWdnMALd",
  "key31": "31Ufaub9NxeETbjJXt3QC9KK41BNfCn873Y2rfjAn8TCi7bPPSmdiTGX5F63p3FFMSfPFjMtGRZMxZb8xCF6hVZF",
  "key32": "3dg8AdSXLvDxpUepDMMq1cZo5KyQUQN2RbHhnXkqrM83coa8Ei2ypqxzvGPxSUyy3dTJF86BuDXyDqg8JyhkiQ8r",
  "key33": "3MPG4Ww2Meq7HZ7ij4WMHWD46gt4tfB4tzJQhLNALWBNhEqcAdEcwKkPx1AXxfvbXdcLU5AsPo78JauQ7qfKaAwE",
  "key34": "3pHS1aEJ6FYQ9j81StuuuLAbNxF2LyFHY6rV5RxKjnabQP7Gdeo9pEjWiParTfCV1UeKNUwnseNTFuVoXQKZBQNv",
  "key35": "3xgSdyjtyYoKMscfbQ8M8LwBm3G7SM9rAAzJ8sWj7HQN2nfk8oY474uRraeTWix26kLoGGoppPmneqTbLwdG8xkZ",
  "key36": "3DLi7MvUf4irFVARa8h3rjvb8115gV1yRm122F4BhrVmJX2DcAMkaV4f6aod2E1LwKnMwJmauZxEKZJHTTzE6FtF",
  "key37": "49amCPB4ErV2byoaxrMyyB2ywuTcGhUgXfCXperxqVKh2L2TtVxyvtHe3aCemY1RYUv8wAUt1i3EFkAyhLYDSXu9",
  "key38": "3hXKFRCrVrki9CS9PP7qThStDiaF5i9yQjxv5TgSbWV3j1pD9gpiTcgsyeTMZH4zZ2CL4adoqBPshLEKjRAVVB7R",
  "key39": "3nM2TSwbRsD2S297fusVKv5afg56kymzCL3uwiQFGNhGEG5ZEmxeZNuLKf1rGFsCKrs3SFXeooLGXhK1JmfcMGpq",
  "key40": "4fWCGieuXSwx5cQYuXWXVJYitm8oeBTaAxFLd6B6VhjiFjf6JZWoKvxJwWepusUrJqtMyZnWMRd4JytLCtFfQucc",
  "key41": "2AKNRvhsKW6wLFGsocp4iYLyg1g6mcNk6LRNK9Q8BXHCA2dZ42wmv52VLQDCAAWqDzQgNmES1L9mSEYXRZTA7FP7",
  "key42": "2YsbMUmP8h45AyA9Qm5C26N949KT2KVoePNkdnvMHaP3BfG34mPT57a8LdwCkBDf5PKcJXFFQ5s4WmcEXL1K2z3J",
  "key43": "3JHgDHz7FscaqaEbz9hbVS7fc9EPjth5VuP1DB4zkCuXtXQfvtiRn4qR8CrjcBtsA3X3QFUdLh2m86uq4KA35Uc6",
  "key44": "5ujnB5FofV1Dn32JvXkkKmHiX4pUzAyLFYHvPt8A7xkAdw2q1TS4wvNmxh1eZkjVxsaAJS9v6eJLimqqVStTbinK",
  "key45": "5FUeMPhRw4HF3BJSVUWnbmBS7oztd9vHLRJz95aev3qzRzKMwT8L51vwxyffoAPj2ard8n8fZx5Q8pzn7rkyLDbj",
  "key46": "22iS5sDPBsQQW9Cr57CUzghwYkm5zwWufkfXww5T61P2uZaovUreCUNogJeH9AVHbnkiEc8zEvCSbJWgRtVVa7TK",
  "key47": "3GdtZe5aoFBErEYbH6Xo1TMzWdL2xuGPEk9merkgcgwKLUJEWDvkiXqr24J946jsh8Pkh7E1P6gLtpyPzi1pADwi"
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
