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
    "eQc1U3J6uxJ3F4ibH8d4bjqbdgpyeqWLC8ysuXPtTVj4sjGWca9Bpc25DHpy3hAtPU9sQeYhrpxtJBdahYaEDYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nrim9qgTLYqAhqNZsyHg7uX4GiE7CPWghn6mgcTJQZZHdzcYVyLwhvXXTqQzBRtMJX6zBNUWS86wzhM3MzL2GTY",
  "key1": "2N5eVJ2f6HjZiHMUFwTmogC1vPGY4eYUJdXUHTd2eK1fcKqvnTA9Ru9LpjjCxDzFviBanitjzmh7S9ksxh2sZKpF",
  "key2": "uEbNbM4gaZg6wUbap5u5aatSP1kjXjnfZVtxYnTWHzs2YGvgjWJnkwH8zeGWqWhkoeSYrLmwTf5GutMbMTf7fMH",
  "key3": "oKXRnnK7hyYL3pP9rAwUF6KxvPQAgXBHnpWyYjmXM8UNXf5xoMskpfXJEdtHehuz1VDpEci8tbM9KbuPvr128nR",
  "key4": "VTJamqy9CPD95JTeh88czBfA3hzbraDnkGEA67KV2btoGwhbMs3kCtzx6fCcb1d2DXCkXDauaL35WmbiJUWRtzM",
  "key5": "RJpDZsibtTaRqnH2LjpVyTxeyimyJhWX96thoRA8Ry8ccQKzyfz1B8XtTqfjtuqsYZ8rKZUQd1juesdgV68i6hE",
  "key6": "4fncmfNgFLEEKX8gTtGs5wyJCMMRfjVXEU5X3z5CDSWoHk2dmKhiE152zW4DgSsFdY6QAQD6XeHUwRbD5pniuK3m",
  "key7": "59JF1sLu8GS5fdLRZZBxqPj1UZXsZEFh5Hnrrwtgde8RgvCGxbSE3tTiV56yzuCbZY9v6ZVTku6QsL7Ruy6ngJXQ",
  "key8": "4CrgFchwGDrtnXLZQxZZxZ2pUagTvPiyTbjDFBvLb2vna5jQUTJzhpkTgbnhvtp3vyYApzwQMHWDJVx2QRwBJWfz",
  "key9": "2BG5MP3jzaveumsqHJBnRBfqwSR9YCoc8bbSYLr5UCb6kv1Mxuy5CFauMwKpSQrGyZG3qMALzDEqQcHBA3nZoGkE",
  "key10": "cB1XTS1an4i5xq1artRTawsCeyqjdHURVExP2TuzonKBkeLAHmVKFDZ9pMrfSgrHbV9Reta3BMj8NLdD4EMxpiy",
  "key11": "FCbgU9UnDbvCmTCKmGWRWf7nUFTMxWigVEoaWCaRUsVyQhNShAUBsqycG1638Djp7e6b2Z2Aey7iBog2AMPyVph",
  "key12": "4wKQCKjZaeCF6q2sbthnZTvvpfh5KDnjM9ua4qfv6rUyXURUYUa2utGFHAq55Y6mzxkfyzHbwQhGbh8PKYgMF77b",
  "key13": "HWCVhKKG8gXvQgGRWso53ymjn8kCXFhzrhZxLCKDadZHmmKzMv6o3oFR7w7kYFSijwvqa4tCuuNZemyAStqYTt6",
  "key14": "4aqPQMLnKkhvYLFVGYsJ2rh9JSdY6KxabHh5bMSCebgs9mzojuioye9Wg7LafcPgP6PgWB9czBTGhdZQdBwWqfqh",
  "key15": "4UDBNqY6nAV14L36ggk4g3K3JS2itX2tsTq33XtcVTidpbytwSVJBqscjtsWoYT4xx9EKo9pMb76mirKuedBPBHH",
  "key16": "5HoAY5V4Grg4zXXwfhsHqx6B6epz8joPB8g2Wmx7rErNX6T9rUnywPh4T9uvYYaUowBsRFzmYzNjjFLA6HnKMe54",
  "key17": "5WWGZRbm8Av7ypW3SgzuHKJ9aXoHMFCvzATo9B4YrPAuhpYbKAXNSuSRhb2aTudGZvdtP2FdkuVhKRhp5mh1xSt9",
  "key18": "5YqoHWoVfvGd6dd8xeFUfGGrSzVF8kLtQm3sDPXAHJFfzVUiyVv8uaHgMapeAYyq8nkX42sYL4AxFKZdck4ViWLv",
  "key19": "2NAiHDKW5NASrv4t4boLMbqkYvd9yGncyZR6xKVLqYGmtkX9a8X3iRiaQ51raLMeVVwiLDZt2gL2DCSRCekKbbxx",
  "key20": "s2GBRnrBHckz5LrMgyVMnF8bQknJYsXim5mUw31CUqtQpcrtV8cH51iLVaTt13iFHtqF1LgGCVjJw3yH51tZoBT",
  "key21": "5eQ6ev8Bx6dZ3MbWzVv9qwRZUyypTjCzvjg3qsXsUVK6J936RqiiyJkmew5aWDYgungypgRkd3N2zEdzxcT5x8V8",
  "key22": "2jCXnT31vMeikuaxeZrbWjmBo4rF2K4PTGL6hrBrh5ArveGNZp7XzpuB6uYapd2uonuTsMZSZzuyRs6sYYHfgSEz",
  "key23": "4ixGDtbeA7C4HqJprwQt3VR4dvcA8zQFehgtv3ad2ERsN33dEVMWtfynYRMsKj1eqdE7w6vo2LxrmcZudvqTvp3R",
  "key24": "3EEv8LmnNYAaAfSAXGbUv9yfmC48b58GBh7wAKvY7Q9JKtEC7o8Dr6crDdaX1QUyudzkCEtcuy7eb6pj3bv3ShdM"
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
