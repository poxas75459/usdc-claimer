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
    "2Jnw6P1JoqN6E8SBQVpH4gRgr8A3Mcr5zdN5CMH5VHnENogN8iAPBfwfCGRPuXXtGrnALV6oDYDzdZV7xZX58KdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ks5ewEwY9zeEwQxQXV2JYnxdQArDLCW2UQzkaLsnXiHgX9xnzWdHVwFKiYkD52TVJqYjeABwPiCsj4MUHwsQbCZ",
  "key1": "3QdfmUS392B1vowyH8NKgwb6afQYQMnbTSe2DPXePJSUktNLa7V5cb2yksNtZV22DQ7AU3o2YoNYR1U9QoFjspDj",
  "key2": "qSZ78K6AdpmYiBBgiA78euXAnAyeQqBPich8yLB29pBCRU8GX23ZS6jeV4B8TkZsdAXQrLFXpdPJJSYLMtgQZrM",
  "key3": "4QXic9wNhumErmchHupxiCmRepf6njgK2VhYrXDiTeaZxbQNdAJqCrLUaWpizbdQ5XFdPxLNGz36fet5jKxsZLx4",
  "key4": "41QAR9CjkawNtsb6BdpPZLCQ7kNhXnXsDt5onehcER2crExYwpP1JTPZLYscZt4Pktu8RHpeFynmN5GVPeSdZeih",
  "key5": "3MZaiHYMfdE7Vr781McMRdsyBT5kLyJuWYdyp23bebqxAKKm8DfaWVFP8w1GZaJgNs647RpKjkn6diwCL6gPJdkk",
  "key6": "3oVU8Rtks9MswaPq4Z4v71cG9YsLfNiAEreXSZwmh95tXtRLGJave2z4hGw6DZ9NN69Sib1JZLJxhcKDcNQbEZTk",
  "key7": "PxxxUq3tLf8MMjjCNEEmqoJNMnb453669nuk1CX5ffk1umQcyvjjXPqzwD8uCQB25ndEWyMkSt9V3KRtTjTr6YS",
  "key8": "Jpnc3BVTc3k4pxjBF3opsJUYA7YqqnxoJeqRBc8kzeJEyoqQqSMoSGMyYohSseShrJZy1x7xsJKHnMvTKPa35mH",
  "key9": "2FfQk2ywLUFdA9DnfacdDyLZDsaiVKiHuk127VgKzZXccJXAhtuPn8p3SE3g4SHECbHNLnhLEpGrgCTaf1V7PRVP",
  "key10": "36XtzCFtno6pD8ejVg1KKvv134URJG3Un6heSh6iNGBq3UwvZgXQoF9w9NgBCzYoQR17vpxZbVf7x1MgE8xJNd8z",
  "key11": "23qTrmJj3P2GFYDFy8ipeMWSsC6ZMePWNWcNGPDHsPHm7pmLa5dxcWgLXLeQnG72ZbV8h6dHdGoZcTs7U3ZcJeq5",
  "key12": "2DrWje7vp2dXJfjftxhCApnpF2Y7AQz1SG139wPFpYkWWn5xedVCPgept6i7SFaHXjtcuHdazFLY7zvtZRUvzwaX",
  "key13": "4hDKG2f6F2BT8CGYxNKbsTdTQFCr5kaNQLukXsSCnTr9jMhYkTqwdx5ac6YusSpuuZ9YTznv9TJfkKtq7DC6GFss",
  "key14": "2mLesYBwU85cQucdsgXSvt1BpjtjzGRVvBmK4dFgGWWFwhMp3vJ751wGzmqwVpE5nfEh8SbJLGGsHAeXibH7tdsF",
  "key15": "3cJKeJzCho7VqAKfFZjb8rWn2WPpqVWUP6mcxHS3ES1dvbAbeXagpBX6iNcEmVjyovRcXsKNb6wz6NwYA6VMciV3",
  "key16": "4KAQJCNPTWaSxB3cCH3K6SvTHPVWoBWnyXWquu83R5LWPjvBGWX7dNCKhpXkhNakGD7fDKzJYMV6uzJUnv6r57dJ",
  "key17": "2JVeoBhj3x5itwtDcVGUeNU726LvE6mCLJEuuqZzorthhCenCZQ6DHC53G1i5E457BHYv3DYEt4PFhQjNGjFMnvJ",
  "key18": "fYnWuNviUp8E4tS6TP6jQ1mCMRWroXaHQHimBcnAvSNCnCCvMpx4GSiRE72ovtx6PRm91ncFBamVDMoEub3gWW5",
  "key19": "4UdGo9xD2kAAid4TFKPaqstX4qMhq5ZEN4HqGjcAv5Y9WRkfRLBFB1UkP4zhWbfaCDHPgdGfPgzwDXDdWaxduR5u",
  "key20": "2vjrmi9umi6SSn1zWzaizERDAy9EAxcqruioLSKZM3hTiSfg2Q21yTSJywzq1nFszR9RReSBkW8kMwV1XRJhPiER",
  "key21": "fQWJgPKpoPdqXp9bPREggJQ7zL48p92S1HQAt5L9EAz2wLnHBRm3ELFxsuvjZZzMiK58DiLQk6tdeRRbEsA5SkV",
  "key22": "5PSGsDTVcdBPJa1VH7nKaza1NaBy7nQ8uGzJEN278cBSGDZEZGKhqXEK3iq1k8NviFrttxikHtboGN3cDuewP9ui",
  "key23": "3gp8wVoTfuy67ZLfS9UnGxWdzwBVxHks1SeSa7kwYEX7dUoB3mxGvswYnUuL9tJ72ieKAyUVHcEq8aRT5oUHjfvL",
  "key24": "3QsxfNSfbRiTC3MnasmNcCLrXzC8ntw3h86tGy9bBeyxHEVoGQ29a1YoNpU6oxMXgoRRvVH4xLjMHvHHYZZJbqnK",
  "key25": "59Ap9XYWrqqjs5Bf9RXiiRYVuDT2RQP4qFLVjc9NkugLxonLVD6ZfcXfzgBUTBYLhPvY9CQykhGQmYVyPxSstdAV",
  "key26": "36rJP2pNyDbA6YWoNe6ugAyre5x7S86c9yENSJDjFGMHD6vLuiqdjdKDd5NedBRXaeGhG9A4fSd2q2C1xtzvMrkU",
  "key27": "4kRHbRRLHMR1YMtMdF7y1HYnGQ7g6geRc4ZKKEhksfFwqisBFkWWFU85ku7sKV9zzdqWR7sPeGpkpyEyCffpbYcb"
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
