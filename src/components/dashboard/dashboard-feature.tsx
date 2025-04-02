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
    "4G5YW6Y73zngRJ5XxmSmSFsM6Uf4s242QAGfWx3UnJoQR42jPu6bkSFBMQhXM2m3Tk7FkkXhK4Q9r8zbRFsP7B59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vezi6jKEvX69iU8rJogBgx1FMdXrVvoQe5UCF15evgkVFniQYeLPMQwnVTxmHTnNKKoB2vMrHTC2nrmVZd2kYGF",
  "key1": "5BqQegbWcQST3nEpd6w7gwfv1bQbwqXrwsrLKhQymg7T3hAA1TfHTLgbynL4SMi16WpZ5dVDzZw6bs6D2r4m7aBX",
  "key2": "4a14RXDyNT3CmKrDXqVSTHYNSc2CkkhsY5b4L6QbZch2zWtVovAq7yWFu82C1SjK9pcUcZvcrnbRBKbQ9pYenn62",
  "key3": "5HTyaM4dqBwxHVoZzf4yV6Dpqg3YGtCdryBak5m9yjgR1fg4zq4MRErhngFujQ5fJzgpCsVRNsdnNpH3izSaGSJQ",
  "key4": "4kEjyxiBpsfRWTbZSXzP7pDWD8U7tZFuemt7iuPvGTHZr21GiCf49oEXEEav69ncg1qbEd4DmtxHz84KfRBXadfe",
  "key5": "3nACpvb9JFd44QSTmKMGBF9VCvjscDUomANzpkvrRMGNeNpBvDiAhj5dUq2w1we4FmuwyjsFLL9BEpdNSuBU2mq3",
  "key6": "5hQmA5G6oHJmpEYhB8AC1PM5Bs3Su6LtuXzJQfcU1VBjmMpCcXhBtmd5PsUHymmDaPx9DARq982yZGusx3yz1Lz4",
  "key7": "FP6BrUy4PxdfhtqmsFy3hKC8QntHrwDzYiZiQHYbppCuf7zYetZwqgyNeQH9uwfsf1u7qtuGobVEG7rk7VnHZhc",
  "key8": "snApiKz9RxpCVby8gpLZCtfDkrohXXwJs6aKA8tjh61ctGnzWSu5Sbt7N3Jw2rb8CGn97nmPevNWBpAYENfGGzZ",
  "key9": "47EJS5hXgSWKQQvaWVrHPMhRJ2GLADdnPnt1zMUqoJg8NuKh9132vo4kXx6LZtMKJDjcRb4HHYyUfjqWwFtRdEFc",
  "key10": "5MJKcbJWm9xZoTL61936UKpEPxXcFPsm4rJm1qscLgfB9kCvxGgW9BuF4c41yR9qVbvGs5ph12nDihKPdnBa8DLh",
  "key11": "1esLHESCEn9CMatJFMxZrVX9Zs6qDvAGnfUXCKe1dEQHtqKGncVfKQBDKUnJBN4Vy6m3pBvQEvjxp8wNJ918Yr2",
  "key12": "s9yPp3UyJuAFPgZojbHG7RU7Adyqj2gzJoKh6kyFq6r5P2ubgPNvHQkRFseTuWtxd85KDrTsZdQwSFM8Nbj1Bph",
  "key13": "2p2kuMmhPxvfzTVmNbYKuj1tq6sZSWHBpAQuZamFrGXy3quKmWRk8e5qq7rgnL2aU2EHtSiPbeq2EYQk8oCxZU9P",
  "key14": "yoGAoGQwFu9ysyqksgcLKzi9FBtTYDLJ1E2XVNhoLG5e5S5CytAkJUbhar2GppKEE4hKhBXnPifEx56MxvHCBFw",
  "key15": "2gcovYacZH49s7j53NJdsmx6T9veTBi756P4scr3NP9PgG8LF9PLUR5WzrhgyHV83k9RZsAoAQqcg3tjV2PVPxPV",
  "key16": "ZUMkrUaPYTKkhi7RLYoi3oNHqXLuxa51bhtDbQZLNthLx7KDb3pKuef91CVZ32ei7voPGU1JizWy9gpStD4WXUw",
  "key17": "5u6SfMUMv5bKBz4CGkNQ55GG7RpfBH4tLuNYiMTbjgUAn43NPa1XpzD2GjzwBiJpYsHdN9kFfJ5S23PJ1UDofGgk",
  "key18": "jKERZTYW3gUbSzvKQUHqQhBVVfHA2pnnMvRL72khc2jNXP9djZquX8UM2oHDTqQdF7Bu1UNsRAVPuJbTnXFDUng",
  "key19": "pCdqYae67fb4XfHDbyuVDz2jfMz8ja9H97qDUS2tr6CyFH4SLzGnyCHyYnTDTGMfZoGp4CgpyghovaKA7eTFAh5",
  "key20": "5D9RahuyU7U2cf7ALtGJydTrKMv2zsY8DeF3MCDutVJMnuDHth2TmeC8tyV1tahXorB6gevksMmyNBn6Cn2eENJr",
  "key21": "3ZsGKYaGnbay4v9jYRhwniHvtkxkjafuxUQEFKeEW75aEEbDixv8faAVoAvYemEvKu2s9NRbMQbPBx2g1hnsW3Ca",
  "key22": "4kM2wg2W9Vk3XzrmeKEq4ZQfnTGdZS9uQm4tptNvqQVEoz4D9MAaRfQu8AfT9txTJ6FGy628uVqKXhyeZcrgAmEs",
  "key23": "2tjxMw5CfaSFhNgYWRNTmXZGhzm4vvCP2EYBSUyyWRkV8nEAkuVKkSd3nAMpH4EVtxNkfemZ8LkcP1x8iJofimvc",
  "key24": "3vMe2drHcRA4Djr7ZCXDjEdzr2T39bG7y95YLTF278yhC3XWLcrsGRHs9b6sQUR3BLPpzxdP3AP2sTM2kM8PBMz9",
  "key25": "4CJXRikFrcrwrKfbergqUEQUgWHwKSvq9AytYxieLKfJRyUfVqqH9AuxJ3tAA8LiRieMqajBR3Sb6hS7Qab7ZTUX",
  "key26": "5iGNNAmcwQ41Rq7XUYioNL6MhEP4fa8e7afTbrsbx1WmSXQK4KWSYgQBSnNVAj54TPjPJgNBzSkPttuaKe7VGEkW",
  "key27": "2g6nxaPSpQ1QydcBFcM37NuGDbWvhxEemmik8YJmfeNeQmHthU8Kno4itWTvmHnYPqL9bhhkheKXJ8m3HKEaQ2M3",
  "key28": "5H3RAd4ZdxWR94wuMFZbieTsy1mrAdVXT1LtVLEScrCaboMd7vRmFnCNMWnTfhpsMh13fmUcE1yQMSHPusHZQN5",
  "key29": "5ieTLSjJEXB6ja5MnYfxiKWKUFhweSiJgQkMeN1wyNg7xBuL8ruAtCsH82L3wduFcvLdYoX3hp9bHKxyZRf7kKe9",
  "key30": "5vW1UuLdcBcsRBpbhuEbtGEWThfNExziTfPqYPHJaHZZrcMp4hLszQnpXc3nTVFZEprY9oSGFHfRKz29qvtBJJbD"
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
