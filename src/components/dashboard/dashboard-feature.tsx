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
    "5jfvGj2SySYYNjTDahe5YVrJXLKA9zDZAVksUXLs7zcdNS8x938vg4V4uBY7hH2WEUQR17YVY5g4nAjYgLPauHPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nQ8B9hLFGQ52SNfo3RVqkkPvKDbAo2wn9t943rep9jAZHtJiYgtkeDFL75yaAuuMUUkVUPfoSz7Ds4u7vbghzE3",
  "key1": "5zx17mNgiX8PSsnpxJA6jfjgB8QTwNCa3V1LkdnGezchQHFWBzHNJs2P9JENYBEXqT9TXTuLUqR7oBN26rd9Hvtb",
  "key2": "22pQCQvEDwadFom9M9TnwxzXTzemQo8WoBvA5tKSVdDbcqHPaAy1FR3RMxMcxte2AQ7Z47WJevMiLJthWdW8QhQb",
  "key3": "42V9i8aGhwLmTKMw8BB6UZQ4sArp5CcS9B79AAen5BTo5EmitRiAFSZf33XjygGrnUXwKy3HCui4ACQ3eTvAJK3F",
  "key4": "59JJuEsACsr2E7yYNQCEKPdhDcWfU3H3YtNxzbL5gKvt3PzL8RJATJ5JC51njtoc5CZHDVAeNDiwSQApSCHccCZ",
  "key5": "iqTR6SpmqG6tEmFAcYa9hyZLpnkwNqvZyFVnzFqFSe5sgYPpoHDp9rS778t3EpE9r6VdV3GSzagHQocebpnhppg",
  "key6": "2cAdiU94CKLzGw1sh2nY852PeuyBy4q9qJhvKjorTjAnVCJupSFFrsbFtxp9sNqCZAn8avbhREFVU5EjMPP8e8iw",
  "key7": "3LNaGaUqHJXtyciMUxt2KPm7dDwvuXWcfZX1UWvk5CGgvLg9wkEmFBuosikK7bNP6mjfM49dpqp1krcTpQ9P6F6L",
  "key8": "MnWy2oqrELHK6ueabTN7FgiUztxPF2q4tbnccarK6x4HyKjHksmuPVGDYcYauQJhaKk5pqeTBuZHZx1NqXhtznZ",
  "key9": "5i2MjxaRqRPiXtURrBbbcWNXjVfRBs7XouzGSohdNRJ5EoPC8o6az7nMubSr1UtYZ8WRoxbvJckB4Fzb3VniJxfq",
  "key10": "52ARLD4Cb92uMC7eqXdtZALam5nGMjNurePeCmxFB1K41zrhJ9c21xrH1ZfAi5LtTeqFy5MxX4q6Y82EyWokusLc",
  "key11": "4danS73YMKt3DTVmS6akKNd66nbcZJAv15TjjzpZnfoNnqJSB75PZ2S5zvYqGcbeWAkpUVeGeSKMQniy6KWgN2p2",
  "key12": "37H9ndryVGR1ZMVX5khN8zwZZX17QkZpgDJyoxEpkZie9ui4E1Xmdt7xy7RZvK99uWpJCr3UordK94pNcs8WNKac",
  "key13": "yDpxPPzg7ZRsevz1i1RrVTebggVcrUgZub68tT57iSHRBLG3bRu6pWzCA6MAX3JWQGP43vuKk8AC6cZpe5Xf9pZ",
  "key14": "jPSsELhdvdgE3NMBgsnSqEWzcTUSZMS1zniki1Vaor5KVwgicqW89Xaef3Csx5qBFstKJ7DQnRWsSf4qKVQGWoX",
  "key15": "3Sn32FAkXqeYfv8nwK462neNLP6dsNxxr5iy4NjGqGMHCM2YfJX32DymLqFp7Hfw2ueJzC4fZhgMzKkmbK1a3RMv",
  "key16": "3eY3qLHKLbF261h3iLygFT4zEfSUNVo5wdBamwJXy393xBckCNHPV8r3Sw1dLRnrUkrTDoP2aNn3pE76xT9T2pks",
  "key17": "5WnLtGKYXfswvEgLXqDNPd3FwX44reLMAf52RKDTjm592QtJfyjGPnDe9vWSJTKESyHkjN5Q5FcoTNWTdEmUNTmk",
  "key18": "3VaCuyfKpBhQ4vAfhbgFPQVEdVi4L1LvGhbNXKRftgP687kQBKov8AiFdU2eCbtuYEc4PmsCJbAiRcq44FMHEuo2",
  "key19": "5kgDNp8q96535ERu3AMGgnaieYA9B6cNT4Xz9fP7Vf9PKdSL7jr8ZgYF1bNGkXy41yPkUm8eABp9ty1QWnosTuVM",
  "key20": "5ttCzJnX2x3hw9GMoL4EKTsmAB4mHnAQ5T4xnV1ZWSKJEBfKvXZM27AXXF2dqYXnatQZkbsaoQheyZfzeLu2oGSf",
  "key21": "zPqtKXgur56fvoV1vizG1GNmBwemXxK9hE5uLWHBjseMED92bYs9JXtPSUY6wsFH4aG4SuaYTv2JzaPW6Bs4FuH",
  "key22": "3yseyg1rr82Z4bCxmkxgfME2hTAirCL1cZEJhY8ZGXUZYx2eZZZHtqF6GiKJ2adrtDTiHCPgJ8yg39jRCWbnwVaR",
  "key23": "3xQAfHLsp2iHvDtDSm5sRSkvvtJCuUR9BedM7UBLW3qfjwhFmaxmP66aVXkwGt9dkp1oWcAqqSnwVhjLLbcGB5Kk",
  "key24": "2GSJUWKGX8t9RPz3EdRVasQWLAPC9Ra4Dbze1ejbZL7dMi3odQ7uezWrH1TxmCrcXhdpa5fr3xnnGFdL5ngiMtzE",
  "key25": "5PegHSncMVx1nwbJ6GdHMF2XLbLsHzyD8DQ3SEfmeyeAL2Xmy8pufjSLDsRt8HseGMzZuhPgGcdASrDQpxkZ43Mo",
  "key26": "oxGUdjBjJJGVccaL2rVvB4cArRaAJzA27cMtRFUkVMtGvBcm8zFVAkM3zUboQmAhfwtPJCBSpJ4fUmw9kSmKjK2"
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
