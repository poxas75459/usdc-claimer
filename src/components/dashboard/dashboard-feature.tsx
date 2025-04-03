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
    "3QEx4BfHeRiZ2bwQ4V6UfCDKAoPm5is7nws6GDJvwER8d6deBPqqMqqVGsau1GJdFtoWfc3EK3eXkZkz8xzRr1gc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LykxwsSvHhCH8XZx1brjCmSdqp2pN74zYGoSPbPjiP5sT6K756gnfZunWDKzELw2CVovjVJ6QfpfuBQsxvgAxW7",
  "key1": "5Q2b42NBrhFXUyVdnUdUgRYvgkDtk9TmScoVm1LP5zGjrUZTg8XSqS6YdnBz8qnZTRUu8jJ17JmyYkQur1ruqFYN",
  "key2": "z4cBn2LcQyokTE69yhiq7nnCVwUd844XGpeyG91ToZmdY9cuL4ViANhorHK1HhnvLbuJkkPCMh1zsGYkuzcLA11",
  "key3": "TCjpxN7DeVtL5KCKzubvb87uGJxN7B2bd1M2M5ozzF72kRb7roddwxB11iH3Tf2XGU3sa7Lzg1JbXdczYBCpDMJ",
  "key4": "5apCbreL6eT3hdgjUnQoD54VEL7HtNuaayVhoiuuut4rDgWjkjGUjnmeqQ1ZXXEsPVyf14BoAMympcJrWPK2X9fu",
  "key5": "3RiYnvGLREEjhpRo9xW5SmZHd7ZTkbxsBkXsrUWUewrc38mTsjqHxUDEQDg2b5rFth3TZ9f1p27PXxdZPxxkusL1",
  "key6": "3TexY9M6tvMzDaiz3T112hvr33SKMKFSbjkWjDzb2175qmTngL1VLiay7LG3F4xVhXNFvrd5BEBf4GaCnFpccsv1",
  "key7": "5CqwFbT9WCeeYBvHWkSW7RnKffsejo39FBRGLGgnTKeTa6U11sPR23YtWNPagXbvqeZ5qbJ2Fg954NTY7jn5h85E",
  "key8": "4ABrrRyLCaXKWCK3wK57DkHkEgyaBzHFbAZrLZV2yeR6nXH7Ed4m8qXqg2iG8BHmjuafHgwQRoujZQ7Qahjv4Cta",
  "key9": "2Xsr7EYRtE2hgSyqNBY181XKz6HErcoA1goy8mtk95mJwQtS1BYixFLxzXQ9iEUvCHryWdu2kydLPVoC9PzeSrow",
  "key10": "3BhEaRb9nvgPBbzX8zvgpt6z9e73GTX7V9moTigiuvPqKo7p35mbXuwW45XDv6kLkFCrv7jiwGguxxw3Sksbo6ta",
  "key11": "54aHE1aQUq8HWUDYRZruigDs81Ea6eoCBCDTvYS6bMHZSo9W1rrA71jwGD6sXKGh36bnoNtvrXPjT3xZ2XTWxAoQ",
  "key12": "62GPV86fPi2h9xwiu3kEB5Ym75qgJwjatQr37DR6cfBdY5XpZrfWqD3LJh24zFE6d4LydR3hGrpmiosGHGojJBYA",
  "key13": "3xvC2PVuNvPr2aektJCRsQQtWxBn9HLic2xaeusEjjDbRBtxAy6dZgL5RoeBGn2KSZJ8gL8pPQZGoAsbfzbE7G7s",
  "key14": "48hekbCQizS4YSYssPsGYt9pSJnG6j2yUg3nPDHjbJuYCztBoi9kRxJADJyYCEkh15WzVzDzT1mxk5STx3EbtJkV",
  "key15": "2R7KN2PDkZb8KMHXKd3GUWhoohunWjyr5RSHzaQzwvqThY9NFwUBcabBjGmJYCxC8D2BrADAoSLEHws66QLxjQ15",
  "key16": "E4a9HrDYX13335ogiZD2AcgvxaSpxLQfwRPLztfvJJXpkEJmGNAfz9DptKmw4r4ifgoRxWHeCT3yxc3Qujnb6XF",
  "key17": "4tJY7PXxTGUXJVmgwAL9762y3juVZZFnKnTjPhsxGPJR652MfYi3fZb2i5knvKa25dKWrc52KjTQnLowyuxpPawG",
  "key18": "sb4SXzsiUNJc5hDhjUwf9umvXrYcnk5rhtTdt6VLXqtwCXCWKMNKXawEH5bK3w5T4BTve6eMCsPieD8qTqJD3bt",
  "key19": "3UtdK4MJPu3wFyb2jNY7SaACjvaze7431q9SAZucCZMCqmJjwkMjxTBZ2xgk95DcqAPsX2JDGSuGL4cjdbFqi5oy",
  "key20": "4Yy6H1NTuUoiEuxEjxpCAu4k23bA8RzV53TqWcAhQpT1wCuqqDQTZUBVeuj4B9hMAPZ5GS1ru6WLkjkEpVmzBKKB",
  "key21": "9dQ81vx2HVQQ7qcHpQgayd4SFF3VJuQzkCiigy7KH1R2BTAWKrdpyKdtZxgtCa5qezyy6yBQSaqVUbddk66FMY5",
  "key22": "48s3egPCSC5AUCrVrFstxsSLyh9PR5XmKw9gsnR21W49mKMb2pCGXR7paJMTUKbuWxwd18sWUkCdbcPYkSJ9fyaN",
  "key23": "4Lv5h71NEgmkHuGZ43u25SesiyAH37RJfq4TAyGkXBDTPjFZPPpjZiFaP9gCTgC3YNgDJEiHP33Z1QhLCrPdBB3h",
  "key24": "2HhPJWXZezvx6UNmm5JgoGU1MrHN6DVHpQZQhdhZp3uxK3L2Ue4UPHbRWTMguqnVZtssYCCRqYqya3fbQXNMiUAK",
  "key25": "51B43yzH284WgLZEfacE6QEKSHiYHSnoRkGBsGyFVCxiG9ZB6swQ5ib78jMFx8pcnNsC5LJQrx6CZ15GTCqrChDa",
  "key26": "64vZ7Ej8c7ucozxVNqtkpwCvY1Wk7efLfrg8BJEhExTdK5LZGkLN9xyzv8KdgYTMpxcn4LSqYis8WMKpCMapF1Cv"
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
