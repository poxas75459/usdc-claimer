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
    "2Wvk3B6LDVJ1TQgfitEuZ84UPey3EngLqe8nnY77iEQpKYhReJEx341ysAW7QC8ABCFqZk7vdVo68pMs71JwHpts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4snJUQQoCnfccphgLKtDeGnCgHKDqzMjEioXCiDyoAHa7QaiZgpU5C9zLzGRXNHrXmKLGXAvRwbRcS5v7cZqFXUL",
  "key1": "2q3xw8x3978xyUoEtFrwmSGURQjfMwefzJ3wGqdcGPnfeidPofsSnFDWk2MfbQ1WvgfoLvWz2X1yJYkGfpqFwrNC",
  "key2": "3PHBC3UZKDGeKNUGSKxLWojod5fUTB8yHLGvSaT9iM8Uezq975GJTEmhTWHnCDntGuyVkLHNa8gUAwmQLGx69ezC",
  "key3": "3eyjWSxvZDjb7tW8yFuasyfQdYowGjFqBnDqtKGzC93tBmPQF7aaiVQF3FpNQeUyp93w3u5eN7HtSGSKneWJ18mF",
  "key4": "2vA1NACSNMRkSnTTYmPAC7LBReH4o2YaefC1Z6qUcNJbfSE64wuPRqPqrp8LwLRAQJXLNCQQi5ukCoT8YCPrKJHQ",
  "key5": "63Kzrhnbfctcq3CnozvM6vZA172bWEXEQZWsdkwUgzSnvGqwwcctn6RyJPTmbbBocMSRdnXwMQXBSFcKQrEyVr4p",
  "key6": "ahuzYKdQw7RCPPSfKQAwDEV2iebxaCVn5xv4x8zEwr379KeQ7dE77toUdxW9W4gCH8SoSFeoeee8Cowjx1pgup9",
  "key7": "4gxxh3Qc6e4ir3isQhXbHQHi3bPH1ebaJUq377hcSGS2T2Rp3h3NvWyUJY3DS8Py7xYHBqpcf58ji3pnzaUjvJF6",
  "key8": "3jUSfXKNyZgmQmK5sjRU2FMX9FEAZedn7H7RqZ5f7r6NtWKaEjg2yBgyjKJ4AAJCPw3YiGhP8xBtRh5NAXEMdJFS",
  "key9": "4FwUSSWeWi1G3hSLHSKotLXHujapknSkk9Hg2aiQnTj5jG1PX9sDxyWVBzgNW7uNmWeacA1YSCTVgpAyGUui5TNi",
  "key10": "86bojECfnPmLab1dUEFCAFH9ehignY27zwZDuxAFWq4MsWrVCjYsmUCE3Uo9ySXLhXHbiwh2ywZygNqz3AgGmhD",
  "key11": "44DMciZn2VPpUJKSZmfdY749LM5Ev2TzHE5RD68WHk56BikTXw38bTJGSGrNEg1xehVD7x1mbNJ3Rbq748Q3uCtS",
  "key12": "4gnrXfRkovPAZ5fG6RDRgVDtQTjB9Hw2x6WJXMdYFMnKh27jxvNbLJwfhpNFLLsd3GduoKdDvGnHd9UxXy7nKAv1",
  "key13": "5VQz9gfQiFr7TxgGQjh63tF9kTCJwARLiA1Z6HoHP6QDx21cH6LePU4FuVGWeu1JWphetEatM5Em39xARKs233b",
  "key14": "2bgzoWpPpEr5CD5Bbwa5wRLDwJpm5DTBVDPohMEvV8ppXtRQnSePjQSFTh5qEsDe4VTrkFAxdw9Zx9HiXUJ3zrpK",
  "key15": "cj1LaiMd6ugHhSgokwfFNxsm2U9WXbMf9epvGWrww2DensLUC9hphDkG6QxA2cu5CSRYPC6KCj1YTnsvQCgBFk6",
  "key16": "6jBcC3pcGtB4a75NJ76CTmFWU658PZpez4cSia7Z9cADz8avdGZK1xpYQG1SHCC6hAswV83ajP2qx3PpnjjJn1b",
  "key17": "oUJTQJBnCsXSyeSjUWrsf9XEPcoQmuiktE9bcpo8JoDspUbACRUcKKXr8pJb5R4zSYX5fcPe8QA6EJBzRCGiuC5",
  "key18": "3tuGU1ti2YQPSdjN2c47XDHEVWtPpKLBbS72mGpzXYFP5HwxFfjxjanhcsf4PDYpPWFQ4PCk78zAdh9Z7WCkjcGs",
  "key19": "3APTHve8nYU8M8WgaNVBrnKtkR9ULTP9xHEDi2j2to4G3Kxh4CANwHGGZiinykqnFYM5SLwzEKeLSbj2ZFxdi4Sy",
  "key20": "67NgYf4Cw1Ru8qAQ5G1ffeRzjGWGiMpzRkk8CW8x5r8rqqRq3ebhrbxJMrff5pnzHaisSM7utuUJYwzkgLQQMTTY",
  "key21": "3f1x8K7jh9UCu5erj3JdLKgVbknnbKHL67tjMxm38wVrYzKEmcUXiHqytwA1fqorgjXZ4bR7Bih5YMsVXtP4b1fp",
  "key22": "2HRYG8bjWCQxGfkR9ukEULeko49BCg2R42tCUN83vtLpa8kCPw9wMvxjTXBxLVf1icNJoD66bFKZ7uYZJ51L7iLK",
  "key23": "4LPpsDkKQ5fWHLT3UCNEgGjj4odfpaFcu3bb6VPwD8i7F7w18zADujxS8VphmQYimMr1C9dvzBgKQ4vBbDJzQiFn",
  "key24": "N3CqvuxJbK8uvzTrgUrQtiVvFhGpKx3tfL8gjXJbFErH9bLh1hYM3DRrz8q9ipmzCyE6ov4ZYwi9JAw3WqGaahC"
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
