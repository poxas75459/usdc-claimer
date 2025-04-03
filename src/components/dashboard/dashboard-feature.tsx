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
    "4eDzuMg77jfNs6NjN7RhGhFiTwCjQCV5LaFy4CWpw5SShC1uAvvVDrPygsEBKRdERyZtv9sVjTifcivjNUNBk5x2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5na1yKYm7awqCcykbN39L4uGAxyAofF4kSz7wqECjkdt2BDRhYAvqMiY55wsH8DS4Co3kgbiXHoLABWGQKNhASWo",
  "key1": "373ifwPK6BKPkep2b5mbcveoA9xheAoTFq5gxJnxrgkcvftVYmRpD2CA2MYw7QoCwvG2uX4VXLwWw4BURpRRGHSU",
  "key2": "3rbug3HjUSgbsVgoHbqPLMT8Mk9Roi538DnnSzoF2nz1uaSF7vi2UseUKkECJ7kqJsBLqVDsgrGgx66SBrS6Gjq1",
  "key3": "5tpMUGfUeVVGxrzMCtnt49Yiu3czHg8YvNYq2MAtM3UmmtpmcY4ESLtEFR4NWHu9GhCZYrRAT1gpZnrUTBaMV8A2",
  "key4": "4Ts1ks5mYRjm1RM3XJMNwpkdtaHqCnUSjfqVuafCJhyJKLqqqKaU5S9ZYxW93UbRf3JtsYAExM2qqpAW215n8ZN4",
  "key5": "Fi127yHkmXERoxhmhzVVq1E7CC5tBiPm7mDBppbHGgaAQbW8AM8v4fLWJxXSRRVVSZwNHLBcNxfrdzyNz6kgbpn",
  "key6": "2TnevyWEG4yhkaeVHBaSvMxrwPGFP3eLpCCDLmKN4fzJ8aKPetnqSj2Fv2yHNiJjkk5CWsySrB7kv3cP4bCXyg2q",
  "key7": "ehe7QzdF9nrH1JnH6QFh3CqyJHjfHDvWgBUCtePKeMZUVecDicC8MWeQWqbQfjV2913ZWtaXSBMirRD4wSML7sQ",
  "key8": "3UsU3Xh5dGr7JJHH9hDPcRq83mPNnsyR9AzAeZqoMzvNUmHSio3BvaTrouAT6rZKR2xJVz2kY9fLpR8J1w6AvJxb",
  "key9": "2judd2Ffb6HnPGqBWgyrp5kfkthChDxDbbjbPRTt9GKvYqCVx9AD9HK59LNX5GcJTuRFzKUPD7p2FkkxVDfwkkMM",
  "key10": "3NLKy2nRrqRmh7XkECPtjetKoHBt9KV5Hos3iLQN8JwbVPoxw3d8exygTSEwubusn8fdhwq86qJG4FPhG5kxn9y2",
  "key11": "3kjrT1BevndzqWUYC7D1Acwc5UqQ3zgZz2X2A1nYRP8AtREpsaUb4LxPnHxxen8Vzd43HkUGYEPUVGavzbsE2SEm",
  "key12": "5tzSFmJqiLbYiQH47QonnLqGNiWTULEctJXnBJMojgmLQDbamQ9jAeu3ovuVMh5PwYJJfi6ZRN9qCm2xgyrPH2VQ",
  "key13": "mwVWn7EMrjSuo51fJVGPG4zCwbqSYkjFpct12BbkmFpwKNGjPETdzojAhNkacP4CwPARFfQWsQrpmKpTomoK9Hb",
  "key14": "3GKjspF17runyqBgsdLDmjBdfYQ7KbYzcjL4tHM6REvbWiJ8kJ4WDbazg2SFV7QYVnAkyfVKBkF5NH6FPU3sQtk2",
  "key15": "DYfF65d7YajMtXryyjKf9sjQ8HGtfWk1WdpfGZhRBtPJVekG39HsFm13Zcg1A1W3sibiUK7jWdsLTSNha5r3g3P",
  "key16": "3y2z5vv4YRD2GhRdY7q3gnS8ZcMGwmDjJ2fwjQz2X6UbNEX1GMyn7krDfZghrJhMrrLrVAZ8aNa9yKYsrpizYF4x",
  "key17": "9sbf5V6NNkGGzuB95jjtbtY2osr1hzk2QnHS7jJDyo3skP5umf2nmVeR2Yy87gBZTgPddDAYVZ3mVR9RfL9x6WU",
  "key18": "EYQ6XL7CXt3fxqJYVj5QJwzPjcZzQyHjnHcg7ikytXySBcrwAKUVR3TjXHh6WpYqevnqu3BgZ4URN7VmM6VjJ9i",
  "key19": "2w5dSMHtH2txbH2KA5kipdd8PttJSd7fJnD2Q4e4M8Z15dGdXLBpszeJt8E33C9vzLsTzfTUiyijuRCcQoiigWpH",
  "key20": "5NjPxcNBh6aDhZGj6XRHD8FAPfmAUhvryAjbMyezK1vwC694Mbh82ZW4UCDkHxz51E3cKn25wR6DMydEwEuw1Sdy",
  "key21": "APHLxwLchpHbZEpRTue1dpGAd4xnaP7VjeAM6T6qTW2bQjUWN5HsVofnfPEKg5pTxFYH2bUWMVjz7hcraBEJMc8",
  "key22": "51FdDVozLfUacefWHCVUm1cBpkGm8qPh8D4SaTh9yBnGo87Sy3g91gnRKHnLFAPVUUhU4dsS3WYS8QswhdFBogU5",
  "key23": "wdBbomorS5H8n1w3hdRdt6qUY2YmZefJoEikpkCG1VWvZtGcbEXeZuU6sVPuyWGKL2FefrULPQre6Y9YFaoFtKZ",
  "key24": "2iWWwTGLoZZTQUZNRjAXDgUCtW68gtxqLwc8uCvoqN4zHYitaVCuEQdCeBh13MXkUQ7GbnbEQooXfJcSNHkkvsDf",
  "key25": "3HWbprJbMc2yHfAd53a1jMgmCnUwW8orbs9VMMwsXMnCbSWptTXGSxBDDmT37LaK577mfTVUAfWHNs3JRjkPjziS",
  "key26": "3HgH7JRCrpDvcmnmCEqrdLSoDN33Uea9h2SuxYZTk3ARSYYoDcWQSo4dCMC1MjPgay684THt6bsYfv5gWHrUz8x8",
  "key27": "4aVCJQcqcZWK8nPcVWQPfy7kKWoxpp2k1MUePFeUvBzBBk2tfUiTBCQaZeenxzUkpmqCb9XkTMkx3HCA1hvMPiiP",
  "key28": "4i63zkwEWR75dAcxBSMXVtR6ZUGFmxWkHjATPAqYajPoGPZoHdW7xe6e4JYthBXce4Rp7E2LwhuhmR7eXYtv1gX8",
  "key29": "3hc1K8qWLN9HzXVVKr9Sa9EAc8xCSufVVtBnuXBWygGevMaD3JhLc3jP7kcnfFnPcMcuCy5krvH79tissJaEoVWA",
  "key30": "4jrjz79kFN2nMc5mmUQsovqgcVpSbRtDCVfQWgvz5AqpPwZtUua1fXGRPAhHaGjj3BzWSKGKGi3SNetkr3s74vE6",
  "key31": "3YxQh8aHDWMv9Sd81q5LpEa8Qj4fsL4FCvQvFcfRDKsmBa2pkBL1jfLxdeZWQzYkrB5dwo3AHCM4hMz1vyfrPUa",
  "key32": "5fpkWN9NS9GnFupj9DeasMJ83BdnV5wPWKbitqHXYp1sZ7PbRsZbSJbDMRoQ53uTd5AovebYR5FdHyMFhhguJaKc",
  "key33": "5ap3YYXJAUcArUuVDN8TrkXFFFYcUMo31kDJZV7pKQT6x52Zc9Ys4uQ4acwhnaBiSxVZWiTrwjDQkiekgE77LVkj",
  "key34": "23BLTBqMHKcJPBzhEPkP7NV7YAChqPcFGKW1XNt7GbHRwVsgogjEzy1LiaChhv5GEZe96fqAe37ygogU3n7dCFDJ",
  "key35": "QdYnxGpEebwCz6RAmK3YjgbzF7q4UhfFW1oimY9zBpqwhFFXoqrpYQt48rpPMftbHpUTjq4FSmNztsyZFX9Mtf1",
  "key36": "5S4gVwY9TyT41bmcKsdLZKF9yJ4X9tuBEH7YwMw4yinv8VQVHm9JKFN2AUTxZ1kTEagxbXv2BAqpHCf2zz3Rxz6w"
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
