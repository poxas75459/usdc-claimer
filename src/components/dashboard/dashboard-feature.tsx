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
    "47wuGACM4ZkkBWGvHJtvyD8fpdi6AHKh9oamt85djX2yGN7ayP1QVutW9yYBUKZaA7oCBAUAJoe9YFe4Mtbx73B6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nh9ajvaA61TkWUnw7ESSh1PsobH1Y8xX8ZkLG84gfve9rumt9gB9oWNhECkeMoiwTrATK35uGNhqV7XTT4Gt2QM",
  "key1": "3x7bhg9jDWgbACKqDBiSfKSTyvqrzEZNC2qe8aanCbre2B3u5u8viqQrun4VomSzPMyzoG5WLKBrdP9B5DUFFLZc",
  "key2": "3RPvWZJfMmwyXLFFZpCCjYCq2tcm2ttuJ2qHyKpYwxcCc8Jfq9Eqdrdtmzv52iy5T8ziKcW4CPVjKJrJFEf4tN4D",
  "key3": "4CQngy4Mnw7PqBHdzzK1SETkiYRbQfDDwJPQyoXtekvPxL6RHDoqnmfiNe5Ta47eV5rERoqay8m6yvH8J7RxiLnS",
  "key4": "54udrsJQpXjFoAQLurBB9545aee9P6TR5pJQ4z4H9gshECBMMXvaPRLsofd9rUUqPX3gb5RaHM6txW7GuQXcySDz",
  "key5": "4TvzVCUez9mbfCz2oAMWvz7AA13geEF5smSVpydDJJJ46LsBz5wwsS5Nu5emaQJfyNQc6vB6BLdgG5zWNRuUq8j4",
  "key6": "EvpwJpRhmBeQnPpaPq5VXHT6WGaHxYnLafrAxK3fxYdDupf1SANhmZDU6i5JBZqxHD12nuzJ1cZMr5CXqWu9rfc",
  "key7": "mgsdudAT3pMgFxoaYDMJ7aRxFUbs1qi8RMS6BEpQ2WQa78GKD2yRCzUEL4TTvwTK2CXAHW9TVB1WbqfA9suCDVn",
  "key8": "447fhKaqG3Zx6svNbRyPZseXU5rUu6AguWHAiVQ6L3KNKKLGeQ2Hni6s3xP8enZpFZy4NNA2K6zr5ZtLw7GxAXmv",
  "key9": "2SXCfPKxH2Bp8kK8j3crm1WNDjU7G7sCNx5FmFDfsB7uD7554FSCmCs5yQ8QzfZ669QzX8Bae9njCCj6mwWN7a3n",
  "key10": "21kPGwFA9hHUeryjK7rJMapZ7i1ZeNGwZzBUjb4iipZGG8xQ6kbYqZLjCTKRKeJeFetGnxzcjmhkTQpgikUUp2Kp",
  "key11": "2rgEdKYmhDaYXhwxRtDZkMDqRbYr3arkdpxYHGZwEGc1qgrRtGWZUh5wG9ruQDs4nqwa9MoyaQjo6mvZMgu4371T",
  "key12": "5Ljbot6grtaYmrLJgutnbbSMycPd2vaYNerkLQDmx1YMY92c3rsfZqZ5uMxjMoN1RF5XnAhQ6cLzSXN1Q2rfJdAp",
  "key13": "yPAvhLEhiHuppFhUSCfZsTK3ZEkrd3LVNqDjejy4HBYW8xTiRWAGL3T4GBGDqRAU8B9wZUyRRdzanBPcL2tszFs",
  "key14": "4Lmz9tFhVdCZDaz8wVxivAQk9C3MZziF4K9QZUHrwoRChpW7ZkwRbHGggeLxzXux9vBE1wQbp5umDPZGkspNj2h7",
  "key15": "4AbU9bdMUDPRPWbL6pok2mGyHtattW8G9cA8HpLt7gov5GTakkk5pMegBeCTA64zD8umm1qL3b4MWJoGRMb1aEbo",
  "key16": "4X5m5NNmxpTb977vPEoy5y4gddTRfM5kWpch8Hi2eWHW6s7wsvJEqRPEkHM7f5VhyB42vBMwKoZLJxABB4zAwmA9",
  "key17": "mmvNcBdWmL26UBv6gkNDWrgQrtobYQMGnkKKvUSLbPQYYFJckoQ5K1hfhZ23JDvcgPEQdkpRAxP2A6TtdqbqXni",
  "key18": "3iUGB63jfBLunBzHDYQB2iiMTVXyBa85KvemwkSL7y5UDYgkwytB9iUpgitYAGFaY3rp1GoUQCR1ZeEN4MNr6k6V",
  "key19": "31EB9Ra2Xod4kEju7qJCPgLRe2o4eyePDzb1eLtvyGHbPeLGgpDxyRRdRhACG5Wso9qytBGcZB6GCu4chxBdPtms",
  "key20": "2bu714FvWUsjpy9EkweW955wBvPLdYUvdemk5wa5fiddGUDbKs1WC6DezePmWdmddFBTSVdYjMBgeh5KWCzPWpDF",
  "key21": "31PtLX9PVptQzTYjvXag1eUcbkxgE94N5wgvYjuwRhWvHtytXcT4to4v2V2MyyNufzrBTBM4FVNM3HfeaievDTkK",
  "key22": "zbPkxZ5QMV5cvYjGWBguXwHMCikcsgjndGHuHRoLjitk9Uau3qFUsAVADALodoK64w9wAqrZ9FfBcvEqv9zgCsL",
  "key23": "5kVYWWJPYiyLqvTn1jJbm7bird1Gj7PctPmqQMGfgPU9EDnsPpTei149BfR8vKCXECXooGNNU2YdzMK7WbVHgGDX",
  "key24": "2gsddUcPSrcto67Ro6Qohz9LKgZCnJ2zFnbp75FbrjcG76vEi4UYT1nnvRpsmu8oQ1NYc6sH7BFAsWAeThdTwAXB",
  "key25": "3j6qzfhq1CHTL2Axm3AKVZjWgfzVBRqx75GSKgbpWSevj2YnstYvVThmLufx6LgCGisSi1kYFHGprbfpCW64j1ys",
  "key26": "4ph343KvkdJnWx3dVwzpGd5DqQwaJJfWPvsEuiuoYnAGaAcb5i5WtCvZ3mXHWHD2nBH57ift7vozBxXVFV8q2QDL",
  "key27": "5i1tgHaqJiqEeHt2534FeTGwZGTAmc8XKw5RJ9NPs1BJ1UjmUJfcb3B5LU2z97gywXBiiHKLVfY9EfF1hVBVH22J",
  "key28": "2cVZviXpQcqDrbNDEFTEG6auVEteNRNpTAzyGjnPbRE7oJmbqvZjmgyiXU4AwwzcRoPtMk8ygu23B38Wfa6dh2rr",
  "key29": "4tugRxaPviLqwqdapU5J47iPzpTGCuFxDP7qhT2y2qgZbN5Rt2F6rKEUuJBbdwFhk6eexjJtgoGqKjthPeKjkptC",
  "key30": "2PWxd31JmHdZooaoxYHS8ATQsiWEw1Me5U4AUfWSYEgxVtysSHK5UAy4XYqcgPdqiNwFGqnyxYHg2KzRA2ekwAbQ",
  "key31": "mFMP4735bRsgCJ1RGiYuNzSMEgLYtRA4H8aaWCooWKZFKh2ergx6CXW1N9czM2XA4petrhpGFYFWMrKKMKV7aFu",
  "key32": "2dWDGCgWWqM7D4djaL5CBpnzSvNsByWJ2Kd7bfLTs4yF3gQbLJJMmBcMqMs6o6LXFczA7Zw9zjfjmmvVXNobHrEL",
  "key33": "REj71xjMf9rDfo12UNE8e6BAzAr6u7sAoZ3oYSBEYUfhcTyGiv53m1Rpr6gjuj7KJpeSHjEGooFTXj2Sw4HJBLJ",
  "key34": "VrSHHaoBz3WPkTmecKHcFJtaYmoWkMvUS89SWngHr97Kyn8yqQENXiHiPqeNTqxW13oN2W5tUB2NhZGUNQDkKGU",
  "key35": "6598nHG4iGrK2DTd13iY1z7npE8Kj3uj8q9in1FYHV6sWYS4DqQWSeJHfzbWcwiri1NxCi9stmbEeWMWJbERvRST",
  "key36": "61cy7eEgvLFHb41vD213BKyELLneBUF2rExeZ9L1cgYgXHdFiHXLS2gWjHWBuEjSSPREewsmdC5GJ1LhJGJ5ozru",
  "key37": "62C9KZu93X6pXbXuJ3GjoLFDRp3CvZAAZpJK8EuSgwhiAgWCFqfmjkgBW4s5kfU5S8GxkpVzLVFYsJBhyioXtxMQ",
  "key38": "5P5QX15LeccPcpm4hKhbAwKStZSf1F9fUShrWq2fVA4boyUULSi1MVPLhBjtnbJN5UMgB1NYbYBUw7Hn8LF9Sfh8",
  "key39": "5vDuDdrGMEUxosXHHmiUeozjs7dLsDi5qxDszoYA5HdpiLnN6FDsMZRRQnJ3Vaj12rcyKu3948joNX9qtx1LDz5t",
  "key40": "SJeP4CtRoKApNRwcSPaFAAiUhhXCcFenWcb8LmVzAtQ5xhzKLYKoPH8Kuv9CeWMk26SaDWV1V1WHPFZSAPRRpj4"
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
