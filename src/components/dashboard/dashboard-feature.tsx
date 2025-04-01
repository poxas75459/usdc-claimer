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
    "5jDrmsdG3R2TECgRhB9WVLMQHwo8SKn2tWpXS3EwHYTUgwWZFks7jkViyb23ccWBvRKN8rxsWghfdS4NW1o4pyT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QjaT2bnaG9ZdYXcuMgc8QjqCPCHuMpmNzuVZ8jQG2U5rvbH15QCV9vQiWbPXfX4THuTUCD2qsVpRKz7QXq9fCbn",
  "key1": "5pH1B6oGiwZVbS8zsK6DaPrrevuAz2erNY2514fLNVsXXrcWNgr1SGGUzruzs6BawxEbcy3hQTYX7NgeTdh9iv6m",
  "key2": "5oDeYc1Cm19YbwTSv2GT9KwpJu13YdjnqVQMPLbRdoLJdryQpbDw1ktXQhJdf1FKXJ7NKhGVGuWk2nevG7CvMbtU",
  "key3": "3qMfXrEx5zwkV1XUVgi1WRzTXKy85i1NgTVquexYKarivFNFdSSj4exU1LtXhmZTv5VAuQAoxXeVU4WmFANv5niQ",
  "key4": "MNUo21TVhDiENpdM4nuyvRcsKb6KP7voLhQ6HvczivTxCgQiigQTCUY27Y23Yg8uuHY5JhwFbjxjsQ5GZeNuYgq",
  "key5": "2pctvbGPdMYYPxEeiCp7bCHDuSm2ceqcEGnEX4MsnvKC2CSoR1FfNvNzrZkWZ2AjCCpjL6cWhkQuAvRkaSLnR3vj",
  "key6": "4hjELS69cGpDethRMV1dqXrb6vHEehyrsaFRFEEVGq3oThzYbCk3X8MGVtvCnx6x1VKt2UTurctVuKFfJ9DGzexf",
  "key7": "4EYShH5E4fRCVUKefymbwXBPjWc3d2F1KQ5hBCNawQYxgvBHwce4mefaBZ8zpMrGaVoFwKCwtdSQfc3nW4GPnvgh",
  "key8": "38Hra4DWqrWQPJ5KmLceWoGCdWgLDXpnBVGiCU8UFqmPDrygJ4eYN2VNNv4ARKgez3EytBGyZM3NXQ3aPKW2sZaK",
  "key9": "2MGb52ZFtNcSFuEX17aWZbJd72sWwQFZDQSxSVKbV7Y8zGCZ4uZEEVh69NVzkgA4v1V3fzDsFh8KsHQyk3gSnBFw",
  "key10": "3v5Lfgb9QJejiiBfpjb4H4sGD2VfB7T6YeM4U4BmmBKebs7GqporzWSm5B17E94R21a9xojFqcPWB4bdDsHQMgPK",
  "key11": "4vh7a6QZWQP5YMty23nqysP5BGahYhamdPXx5JzUTdf7AL8NVvimKBUDaNnq7uhRJ19QVt4KKHjZzzbxPPw19WkC",
  "key12": "2yN2821g7E2wscJeWiLjSpthji3Lw4wgkvFGr45pkWVwmaXNWiDQaojaAYqkG7goLkXT8tNQ8E5Zgs28xUxYmhQt",
  "key13": "2kM87C6CPidywdB69vLXcJJk8cxkKpSqVgZm4TwwECL8E5QRAqjdMrdixBzYjvyy5fvoFBZXL47N7EE1cb19zbrb",
  "key14": "8ycah5XGLrcUU2PBJG4GxuLTzSg1MqKXrSa4czFoshmrmo6n2gP9C9f8TqaK8RLQp92o112svqG8mTkaH91vYr5",
  "key15": "4wYH6Wg9TqJohwfQMHFUhwn9RMkEdgL7bxvpT9bRbtwHLWAHYHXsr4k4cmhomRJTwiwEaRfjZK5CYcgjajqaCgms",
  "key16": "2NxLTKWmwizFVixFN3fpU4KEwoTetEiDTGwSmADdUzmgedjNW5KwTSUGPgx9QNiRG7BVmUVntu2TtVE7WufZQwoJ",
  "key17": "5vEurBsH5LtAyQdvSrpsuBhAw38TEkVspkSPC6mBEu8eBBPW7f4jZEswEDyPzEiA1w5mgFiGbe9Y78WibGXLncda",
  "key18": "2EhdezMv3QvE93WUPYKqeiqfSpzY2xdbsJrH9ADB22k1SAzWzBoxko97xFL7VP4bZuu4Yi5f7RJW7sUcWww3NXwF",
  "key19": "3G4K6vVLYVx8YjWeHW7z9rgzSWKNtcQRXRxjiud2QZH8ZpKzcggTmmGpsZh8GK95YdSp5nFmmwwa1roAPUHWZ1Sj",
  "key20": "2UqV2hFW28ErmxpYfMcSSF6ZNdnR3AgNFnrruHKDKEzbSPBLqmHsdb7xwSr63G7mpDs9zWfUfmHtE1mb78qRc5g6",
  "key21": "4QEjRQJD5HnhvrKKRUjikJQRVJyWm8jSkomhNcAt62gqzQUBED1uHgkSHn6Vfmg9Dwfnv2gYZ5zwwPwjB5zR82XT",
  "key22": "4vUYDdD6TERG1xyjm7EKXJDJ1DU29EwKBEHuHGQys5LPPn1qz7Z2q117Ta6VKAsRkg6Dtd9GrJFVKf84rP5QVsY1",
  "key23": "APFC1fNoo83Dxvfw2n7MuN3uD8JC79vihYGq72LYwzcGnFJYA4KAxf4jGYDb7iZQ2exEhhLh3uJiYCasE7goTDR",
  "key24": "VDhuxDLAfdU72S1iWtLCaMrvDTFkm5fJ1AbSeycBGwEve7JDyrgtjjjRcwU5ysebEC5V1dJFVbUuywhLrt3DfMv",
  "key25": "3bM9xWeJxBZ5pLwoX8LT6cFvhGE3Q2BdaQqVSEiUzuobnLuJEJRHop6S3Xdrs8keuDtcxaqgsjopwvaBWV7Havjv",
  "key26": "2uEeyr3X38e6ToXzUGddMRqhvakAJj5PkBSSg8Xyp2x5tWBtpBRdhWYERUPXCFfaQH6E9zR4L4LKVoxRUVKzhXLs",
  "key27": "wuyXyrdoPncUH28kZfMP5tXfdpE3JJ9Uk2Em9TWxJpyfaor3XU8h5XWuGktNLHF4FD8vbsXxzfbXXHLmPUan3qc",
  "key28": "2eRKHYBP83E6eNY5citR2D8dAswqKrVXQ4f1kPyhdKjSmek9qc7gHc9UoDjZpZqugLuZpYWddXmBujyX1mTsS2Cn",
  "key29": "3t6ePug765xFPG3qoe9RNVaWt9K2i2c7cgVMK7reSQnBwyr2B31L5VVxc2N8vvbniDSH7bNBTGmHqicPUEC5PrbM",
  "key30": "kYVswJvy5n1YtTc8pc6viui266uZ995vepwjudnSXtGbmx9ML6HBvFL7WPTdn3TGZHjGY7tVv1Gc9rkNfu3bdrw",
  "key31": "4jCeq1jSygJpajUzKUg7M7PaFyMFwxiDb3wULxcPWbWUj2Sbce8q4VR3v1d7tTCQnm667DvkE6qtPb6yCeZsu54B",
  "key32": "5DJedcJjn32ZgfGXUAGXy4bM9tbcqpMBiA4vbzje9C62YHghAdDVoQ1SU7sUV3u1DYnmWw2viPBuY2ZpFKq112NC",
  "key33": "454J6ahFm9GcjgCP2cAEue5kEcL3DdTdMbiyuqr1UwJPUmuhvsL1ASWoshshZoUKSDZUYRGx1rsq6H5ne4jvjk5f",
  "key34": "YgzqHdPiFq9NZw9GKEHQb9wL8DukiFB5os2wPs6E1vB76x6CwdM47jMgCztqD2oxwpx6vjufJU5BPHv2h6BBjyj",
  "key35": "n1EMUUmMaSUS2GMFrKvvj3cSan8KnncgnsosEYgkDVuyGNGPgJC556j3PE9whKnVcSZhaxkU5WxutCFiNSyEsWL",
  "key36": "5uMozLQXBYqs99zfXuvyYGQCH4JGzdUJ3Lk3jM2r6o9yk3EmqqNRoaVi7urbF35owW36RZgxTKeLeCACKZAGcRjS",
  "key37": "cgEuhoFyXDFvtrWYGB1JU4s4ZBNqFEu5ssY35XbbefTqbceNeXJEgCghnza6oaf13fqDhcGjmwFEYCVE4zrswoY",
  "key38": "SdjS2F8oYSktk256B45nyYHLEWkt4VNaHjrLyrLh6CXcPvzc7bepiVX4MFFhRQFPyYt11cCoyZwgZ5wni5JWfMz",
  "key39": "5wu7zpczvu3hbyXeKquGC2GNrrxMY89u4Z95pXeXw1hVgMap3YFqqdVi9AWDMqBe5ZkF3dVcnaUNVN37u6DGe5rj",
  "key40": "YERpnF5yd7P3PPS6HSSJmHEQEaAS6HDTnJMr7zJJLCycAeWT9yx78f1eP1rpC3wDmjqwGF6w7Ru72gmQ15HfAN3",
  "key41": "28zSYTqQPXmepLMq4yfAa4s6v6ePNED6PN1P8v1M78Ntv9oSmfLFABttftugEhHEA28jXf6TCwU1bRkPZJF5JXgm"
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
