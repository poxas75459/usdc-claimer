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
    "3zX11Zq12HPSbD2q1ALDJyV9wc99W8izmjgEvHJ1DtAv2EZSuTxUq12N9i8htXDR5qfRiKxrR8oJM87sVjjFdFrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UvXzpRSx8aJxPt2bbAqXFHhkEaYt6nd2PKCG5WNqQaHqYCYVJJJSy4HeuNHonj15r9QsuVWqtbW8Zs4edXSFgYu",
  "key1": "5FtjMVcw1ke9Hcvp4PkZ4iZeUQP5rknmfW8P7EDcUECLihotbmdy5zeBHJrGTp9WA7mXTJYpg4GxZ5CtwMCtpHVL",
  "key2": "14Pxiz7TyZJ5Hvi7HmWkBj5K9burcgnQN2U4zMzc5iQS3sLKoeKW2tZwbFhyEUbKMejdCSa5yvHWA1iMg79bRpK",
  "key3": "5TmEWwoGeFYboEdjHh8MGKNcDoNt8GcBwasoymBfv8qWewam2Jo2pNZPcx8yxo8cVN3tjc9nufvZ24ZZkQE6UjXr",
  "key4": "3FiBsokzgDBqPPgECrnox5MS1UengAdFwaHDxyiAh5BhmuGda2YrBzsqkaMEeQD3QfaU4fx3WoPHtfNtpSQc16V9",
  "key5": "5ttjKWrMWy3SJVXcP7mbv7cYJLxTSat9BR5UAj4cb64TNC6AMdVkqpc5GMosDRzocUvEdPWyUYvJKH7DrkKhsiFB",
  "key6": "NdgDjRuckcZxqDo2FRNTeSAwXRh2UPZySCBH83rdH2T6HeZ3oLGkb6v78Xr74HnB1pHcDASH4LDuPacdZpQwQ2n",
  "key7": "YH6nCDJq4o7bVLNvAQ9rboqoqwFr5VLSSFDfBZQkWPu3MTxk6U4NyTSEGoERg2gqd8UfW5ewmnJmH5n2R84G2ep",
  "key8": "2xAkPAygbrY9URk6SbJRf2sJ79pjCpNcyTsaf77T4WTqrXhYPuyLiE5HmifigTjP4opdQuuzbufU3JLBwqPsumb5",
  "key9": "C5NSd9knmymhLRH53y3GxpFANinBNHmvVkiouHaEdXR2G9BMWAtZqLJJabt16zoy7CuKaqrJv7qXdwnLuNVMvsc",
  "key10": "3JDPGE7HrGTa1c8gCBQWRiLQW6dEP5E5u3jwZaeEspfwHHMj3pPb7p5QPPwP9UjuNC7HpLzPRLVmcudPY7k7tDPe",
  "key11": "2GJ5BexVpUypZg4fEcXVEpDEZ6aP7JzcJHySCuMHWQPVj2612B2hVwF2wx8dha2pcVest7bED2mHr2mueeZZ4epk",
  "key12": "48oCAHTAjAqAeNUVU4ec7zpJ7jwZRZhjJ4JcT86pU5pGBS7ToJ21Hk39a4qgpVYvWiUFsvewrcTndJurY8ipqtcL",
  "key13": "5zF55qVoX9E8aUWSGe7Vn2up925viyU34PUpMUDiT29K41wRCNDxU8uT4XC5YCTVd9EpukGfv1RA6xhgxgNxsFyN",
  "key14": "5NLxUMRwsQ72vTpnJhStA3W8PhGcNvR7WE6VwjFc1CKAeor9VuKw5UKBBpgGQN73Q2ppwT5CfwAdUEjREuisn2n4",
  "key15": "2HP1UXFc1rBhWa6Gu3hkMtutVUzd43Yvfkn42iG2dbPgsE7i2YAVfuKEgfXq7bvA4pheYBz2wpgxR2YAdzRTDGWZ",
  "key16": "dXiHXYRVfAqwgeMjLDoGBGF538HWAb8TGVinCeUApD4JbRHCvEgZnK22fySRkDNw9tAnN2qYFWQeA3sex22WT8C",
  "key17": "5CX6wEza2UXYYoTBp4BXJ1UwcyEbkAkGjaGk9mycocxQPayULKU53im1Jm1K39EpS3AGccte2vbS4h252fPpMZAA",
  "key18": "2oE8z2jqKNQkAfNb2Wx6oz7eSSepJteRpHZK58yy2BbFZyyxiz4LqhwiRdmTdT1A2k4uY3F8naFj7Jn67SLz7Wam",
  "key19": "5s6TErGSHxFE1o8CH7kEh518EvwK6o5HSZyCr14EQBwhZftTp1MHGxRoenQWCHCos8moJWfruNTrSeBD6BkhVCk8",
  "key20": "4Cf7gfywPhirb5CZLPMqZvCu92q2k5ThVPX96hfVUPbAL33t4X6Pukj3zMXTkvfp9TANH6VLw184hrJzdUkWDbZh",
  "key21": "3rH8b4xBi29ZAwWw3XW2wPfvx8W3QnRnrCnLmch8FvV1bB3xr9VyfBYikinsGybiGgG6o1kSe3VEaXrZYiCWt32o",
  "key22": "2nvGEMz8pYj87K4EqUhdiwZhpDX3KqrX1kSFmd3cy9SPB9TT1Yd93ncfuYgbcuAyLz3fVUPMEf2KgAokBBvdkmcY",
  "key23": "676nDfdkS3E1fhm1MDNePJmHX7TMonFtpAt7Yhb2SbZkruZ6rHygp7mbxKuZ73Bsvq8Ci35JcK79NMZ1vp4tD2Q7",
  "key24": "PgWyiyb93bXUfQrk5ciwbTWhDPkGprL5X4CqGiJYdz9MW7ZR8117sfuWgvnbatD1dWW9YhWct4VsAHZk1LXe8Gr",
  "key25": "3V5hF41DWxMZMotPqUoN1ZAsXkfJ39rZ5RQvaoa8PHvSUWUfpLsvakattBZso2sRs5RcXExgqdMvrPyJtDRdfHMR",
  "key26": "25tU1YazrD2jDk8RbdH7NdrCGxsGF21NvejdjNoAKjj4QX9nzPPLYkSvQ3ELAfWjHu5hytyRMgU5ycFNu21U7b8p",
  "key27": "3Ewz4AABp5FncfPY5JdP5eihyegHP5twup3GmCRzSfgATsoXBc9UidA3jzyUsAtqnacQjZyCABcHHUzAPLv3fGVk",
  "key28": "47YQMJ5e7S8yimBnnmnF8PyAVXbubGDBKLmuHqkvM3c76sejxZqNmmotu39tjfMAAvnTfaHX1rCXaYJeHvLc1AvJ",
  "key29": "mcjructsFTkKPC2637f5yCgXi3cDiz1bMSvArETeS2vaP2jYrohY59asfbXr1pUeLYfpZC7VqT2xDpZWgZRpcsG",
  "key30": "2g5iqWgFxcfgJC21wdrqozj3Y3M5nJ2qariGdDti345FZb1K2MyyzzRM5DFsT93zrAnyE3BZ7BBAez18VYi5MZLt",
  "key31": "5WzFsmCP2LwPDNFab7tUimDBcG6pJGtmBL2UjQr96eBkuouUbSQJVV3QGCzE4oucPPogpBJBZeyfWJxm48f4yoUq",
  "key32": "WxEgUyGBLyV3QYxsX9taPiPACmoBbwUAGmytJKGHqqpTmc9xyMv7NwiHY57243kZc8rivZRwB7eRHviX4h1akBs",
  "key33": "4bo6dKinoYmebcEu4vFvUy4YP5pYYvymL8jkkShf8kyZPYSDvjnQdu3kUH5smBq91jgH1NNK8DJbpE27AQnsaFsX",
  "key34": "22kpkAKWAffxQPcPFSFBNVEyVWr4PUhYxVPVFDuvycTDbbHJhVSdjY75iZa1DaYYXFZ82kSV6RoBva8cVmXMNHBW",
  "key35": "Hw6kXgKQyhwdeaXXDMGxahM64b1hNCrEUgqrTyefDbhcKeoEs9jXkctFj1xku5fHZdzJQDA112iy9ZNKP4Nb4tS",
  "key36": "4L73ih1U8H2QMmvLVsTko1eAp2bkp4me8P6JjuipZdAQx77STkLrRUYxTFW4dg1oauqt55bXmYwJrQkNcoeocQAs",
  "key37": "2q7jbgLBZrP7ncB5kV4JJdznuuXfM8wq64V7rHR95pVu6tGPYU6rc1186WH7Y1hUGTJLhyV1DyMzC49CnknUfonb",
  "key38": "4wwAK7jCTBSDVdMGsWdCAhxcsQXDHhEKndB56oEBampG3T4CYVeu4gwi9dxPGZxyivM8fTGeyqVeeaUMRN2rUMbA",
  "key39": "5mvMVaZYFvvWxLHu6G41NTpNNmUg3iTFUBKh3XhZPQHgeBnwfXhJMshHdE8dpjcYc3HbfvjLvRhmu86jhKupZo7Q",
  "key40": "3q6iL3QYccf1wgyi98r78pdQRdL3AmNFHmdhQX1ydYT3GTREnhBMfJp6QuqMSDZvFnuJVR8TLpXCc1b6FLHFEWCa",
  "key41": "CZ4CgEiTu6HCMbr2RHeZrE2N8cqo6KwSo73bFF8JR2UZMz7NRvZXohz6XbsCukvbqWk3Udx1nZxnUpdqHDHaGcF",
  "key42": "tv4WZxWxNCFrA64Jk78f1FZUaqH7HJKqzuu2fjhY8pDR3LhMEF1vhx7rZPYq2DdjhfSrmfSFjkcJT82S2d6TebL",
  "key43": "3ZEQXoXAY11gmeMzUyWqZyCZsBsS9tMnAQoqcr3SJUFKvfNg6VAu9YdECEBJr6x3EMhKUQvFy2KHJDfHsZ49GJLm",
  "key44": "3bAwar1siwETMcaFs1A6mSrBvYRkUTMxEuEQ84VBn2YWoYoBxSgU9UZaxcCc7u1QoxzoFSWV7t1twjhKFGuJMgj9",
  "key45": "52X7WtChCGqk1PanS2medhgU6Yqy1uS7pgJi4G5hCj8JSsfFfMjTZsWKiQ2mjAUzPisHVsMBfnKFYnPQjn1cwKcN",
  "key46": "MhNjVvUbXnbx8fNLdo5Pbd6DUTLX9EfG815LGnSqiceKGZCnkzCcACmRTGZJ8jdXhe2txAu1KN7naKNd6czC2Z5",
  "key47": "5Y6d2ZEGiWVDno9hscuzCQHSQjFQYYkizrf1s22uPtZvkRRvdQh4P5fNB89yX1M5pE2AZGWgPAd6hqW1KeycVmEk",
  "key48": "HVT2BrWdRK9spwe8gSJDjbCUEKTwWZjvkUUa1iCY7uKMsDwzpZLbXpeTm56kUbZJs4q2mvnrN98GZbPuVZLhn6h",
  "key49": "3cyC4Gf27pxuQi5kq8K6umaPmuoe6n9Q34UWvUtz7Q3PkjccSFPodZmhuDMFkWfVzpot889R1tMb51wsLYofc5D4"
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
