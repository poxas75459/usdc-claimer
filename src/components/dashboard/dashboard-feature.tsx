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
    "5QpqAH15U5ctH8ejQ6Bm6HbsycMQg5imA2ftVwDEG24JrY85vPhdpb1Pwe2EqtD5BBPgnZuc993Hx2PM982joXuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23at2J2bzHZovmR9KUL87zgNGPuR7nRvyeZyRjr7uhvhXz9GLQV9VuoFKLzCvVxCtMm6HRjEnD7JxEcmB2W9uUJ5",
  "key1": "svvMWCyoGFdAD52bD8WNjJ1fbvEeXHonNvLQYQJtE3cePbHvXmVeWppCWaTrq5EqRSW4kX215aiXRA8aqgWLvxb",
  "key2": "3KZirUCZN9jR3gJDUnZT5bfEqVFvYQ1wY8D4sc8zegagktN9ehHTVRziKnQf6o9VQrUt9qLYjUEptnjvNgSkGEnm",
  "key3": "2NewkZnpwxq4D7Ww3TwPR9Fmw8PZRsJKtsx5bzASKXAwSPXjZfeimrPrLXhe8XfNjzsNiybwAv6qnacSBvAgSTd4",
  "key4": "29Xo91kDH6mgy798BSGMKqYEh2yMhpnRbs6NEeKghQ474uhhZaryZ3auckj6a5XqiqnpPM56RHuDzX2VS9VK5kvs",
  "key5": "2U3vSwVXWB7EwT82gup2beNd4JuwexfudvrfNSX9sBdQCw9Fy8RAZGeCPqp8ezU3hSUoLmZEn3rxMBXaYvYdpjsP",
  "key6": "5eBjgjhWF8QboUbMn8YydV24MuMxZAFRZ6s9xCFZry99PdghC6AQaf5v88gg7aJggcv2FGPCs7PB5g5x4sn4UVno",
  "key7": "48pke5ymf5hy2dMUczZ3WWA4RSv8AMoP4jkKpsTAaHLjvtSPpVVyBWTPExFnLmvkJ7kAh8iNVvXugPR4DaEqrkp1",
  "key8": "5r9rhW4y7uNUKMf63otomXpMZeCHVeuPuw4y3LUkpyhwXZ1J5Nm3oyQAX6C6ugBofAp2JXfuq4WwLatpSTrD7gn2",
  "key9": "2oFtgkebYm2vGitiQEeTJgzNWRP7TUDcqXF7hXaSQqEV7vkt6RkN8MVPdnY7aARkWDYLtN9kZR9yQEs9835bBLKU",
  "key10": "3xA7kyHNpNnb1RwqBTrvBsChUY34vySuG1j5pxZpwqQTFWsufWvXQ4tuaHaf4shusmTJRxgXeTk9WgVGBCyVZU6s",
  "key11": "3veYcdUWD12xDatANRh8QgAjeurQ54d784P4ZXwrdWD1gFeixu1QGTTAHQzm8tDMRHfxudc6HbUHV8BzNe1TFxTY",
  "key12": "3GcU5RbFn999RU2EfKsHtiq3Yi4qtFdx1Hfdd8D8ytivem2UD4bZofA5uo3K83TSJ7q1PJNxhutyHDRVnUDcF4eR",
  "key13": "4LGJc6PDeqH9pKxui9H4FFAdWH6KDH16uYLscrdFUcVN6kVyqjU3RnErjchy44e5jQhfAEuEMZaMLNpDyh4U6mf4",
  "key14": "3aKqQehyiJhXUbHjWBEEFW8MfPQFaQdZQ2GRbqcmVStQhMmqumD13d6rC37iBCqXapvnwVVnXprsp5T5Tgn8EPaD",
  "key15": "2479XfzuPJbbz7kC6okZf1nuaf17JanzQUSqwkD6VX7eR44zmBRSRkLNV8FF1asxBVcwj8SonhpW2M2rLHPN3Cmz",
  "key16": "5BVGM6bJgq9hYJGi8uA6e8ntcEWoaEW2DBszY7LWGg2dzmu97bnEaUdgy9BPjpHg7Xc47JiEkCzkCy4rZmHFDQc3",
  "key17": "63ACpS9NT9ZcBUpMPqi7YAuiBmSK9SZhc71HTPvLHx9cztn8c57c4ZdvBbddGfihmca5n6wb9ghLBiW4cHcofFRs",
  "key18": "3Hsc2mPzb7k2mHkMkSfsCi6gq9TysXpH7UuX5TixJJ7Gebu34c9x5LiuXKENvSSHkLMZjarDXLG8Fcn6YExhCfBU",
  "key19": "3LscQ8dxk6XGrvHM4VLC9pkxhf85kwWwXmyZx7uDU4aw8WMryrGZmZtAzJgXReMFe49pyELZzrHUtxV7gh6fnnYJ",
  "key20": "5ZHXTTyuQdq4gMhFLYpjtiv3DKC6y3kEr2YPQAsrXpNdKGviTewmVwjZtY2Ruub1xtmh37XHZuu1sbsE7FWGDDBr",
  "key21": "2UUdu3hw5fTPbcurrjD8128j7VADpdfZhmcCN4fBSzKTFpB2xStxXtowwfmzkCFbueAprTEZWfpgVak2Gw5DrVXL",
  "key22": "5q5Bj9yhCdyFpotGcVM3p2pmBLuCotUBXcSquMEMpXgFyG3mka7g1EBbsNwc5Rdhu8tK5TxhaU9B8SzX2nJvQ7FP",
  "key23": "5qEYpmhKjq9VgDw6r8KDJFuGqPLoUuW2QGRtC4LBpgZ5UZao9c42kFtoUsn5Q9fFM76XgdvEyYhKV1A9vMgeFx5U",
  "key24": "4Tiqpo2uL8cMchwWjkQuiB5mNVPqVE6u1v1Ws5Z1uLM8Mkxt8Z5DLj8WYKWV4MxAZvpwXkKD3RPVBLa7UPXSeddF",
  "key25": "43XnXFQkf1ErM94ntKSmngVehgWc19PtnAZs38RcsPLiKEUQ2EDiv1YhKP6L3aavXduJVfDaXVZXrxixsvWNXeBw",
  "key26": "4s9FXgnUcoc129ii3v9zLoK6wVGv96VJB7iEBP56TrMaW8aJybc5pkGdTNwAWQ9PMB9njokMc1bAFi9UZmuSXZW6",
  "key27": "5CW4aF9z4v4kDuJnmRtc5utTbvKMecfp36ooGNrawGEPeUhZBGyJHf1VLbHYH7dCAyuNhqBTgfbexShhWHub8VXb",
  "key28": "4yvb3REnwgezhgZMUE15CBr4uC5Qe7jcASFzuDSBzyLZ5gHzqjVbMYG31gp5hmoksJ97ymggpH3DM4C7zw2Ug6WJ",
  "key29": "3NNhWhzQdpU93nhdqQuwWTFVpMVqwrwbUWWvZfiZ1gfF44xZhgBKKiFSbCF5UKcZ7wV52TrvQ7bn8JZ4LLEAzJ1k",
  "key30": "vQM1KzbdemcrbVUYhZssP6Zjt4hAZKDX95ZL3RjWENCfdXRrNueXukqCsKHnUvZPrSXgtEC3YvPRR4evAX5Lu3m",
  "key31": "5Zz3aEMS25PKwmSBpctbckgofQDGy1BAf277VEVA9r7ZGdjFSy87kxXPWN8eqbPCUXRjzCpRnyx1vufR7q9ZTEaq",
  "key32": "qLxLRXsNfEtVfZGSUGUCxrHiTyAErUY7nDm27C2PLMw1tpazUCaQD4heBMKoy3ng5Cn7m4BXjhKtfsQpnfUFB1g",
  "key33": "SLbBiJJ4NKpDR6pFkHZ6Evy5xwMmX7WsDThWSXiT14oGJMzWrD8Cut8MAufHwkRTuW3u4W9DLc3hteZgoYbu8Yg",
  "key34": "4iydSz4kXqFU4rtPnovLR7Hw7xkm61vPe6hEz5h1h7SZJZa8Dj2B6ygU2QT6MVSDh8TNuPBoMFAod7fASvAujcBE",
  "key35": "4Jga3gKfHF87C7XN2doxUGUiEHkvX8H6hXwbrBb5gpY4c4cjgwuzP83FBwE9q1MhhzaqxBzqkFm6uu1NvC5KTXCU",
  "key36": "3tUxKLUcJj7qEePfBizFsFae5kMYHDz4oaah17dgPust7ekRxsCGoYmVa7SNM3yz3usFzcx9LE15yMKtSbpWPFhw",
  "key37": "5hJnymiSNXaQdW33aST8CoXNRX1rnG2T9C9UYzTRdwggvHJxfgGWqU1XMCZwyNpeiunfaAK5EeSGWUTz2rfnPohz",
  "key38": "SwsPvUMwjZiUaG484jU4gTCLyeF3e3Jc5p2YHzw5xwr5NMdVSqFLey2K8AqDhGoibEuJgKWLKiU5qjefyHTo6LL",
  "key39": "2xfsxa9Wq8qHAUQZEmeqHtjrHxKM6Y3rRfzXLFidHf4DVpiorFzpL5FxJe4WgcCWziPAQb8j8XBHFHPBL7v8MNSK",
  "key40": "F5Z3GEeSUGRQR5Mtvidt6kq7sh3gm23f1sHgdQyfsQe7cMcGUbG1Jrdah7zqoPgKxmNxRx2wwCWweAzYp5yx3JC",
  "key41": "5aWfHbWcgTtu3sWwXALJ9E81MDB9XZ7GNAoYyMAg1x9TeF1wyF7BTALffJbvuBHd1r9D7fFUFTK5UsULUtb1RBMk",
  "key42": "2GZdLUj256RNPXbyEPDtDbN97yN9HykLVgFBwhWD2jLX1dSFZTE6ih61u4ZsAaHeMta9NNVFPkrzVyZdDPrJdeFj",
  "key43": "YPerWaCC5LtEK3Y58kbQZR3XCaV8wsJdeSfZdKCTkk3nZgS3HbP4icuVjsrk7HmbzYJVzvNF8jTxry8cYVg7nWB",
  "key44": "29FPTEMvn8VrTHw9t71QQsHJzCWHZRup6PGgETRwu1aZo1asec3uFYf6JH9G2w3kFVt98NMWYwQBiddaHVz7PYop",
  "key45": "5v5gXfJkMkrN8Xenz9QfR12gRz6pkZwNd7ndeSWZpEDVACaFXrbRpFGeE6cKZfRxz8r6n7Y9YeCSrwGuqiZbkBwY",
  "key46": "3SHRhZRj3CAPP7nDEybwMDocEXzBoizMhLuPzqLvf8TVGKv92yem4XASvG45Fqkh179N6hj6L6LGbvGMrsPGt7s9",
  "key47": "49P7AktKwGCfW2ucmaimQSMydnwBkLRwGxhnzgFda1KMYL67JpGFMNapWCBQykw7tQYZ4xTppMGXvJhh66qwrof1"
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
