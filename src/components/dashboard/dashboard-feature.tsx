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
    "4WFyMthZeEBgZJvXYPqxhL3SVckYSNFVMzprMe4GbDVfKeLpTkNoWrsNVx68QLfUkiwNyjVk2b4N1493Y4PUNxAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U1iN935DZ8F3N2aK2VFTPQywRJqzgxdrNQpFDSE2MvNL9xXHiBQU8y5hbKpfi8k3HfcC3tBQvAvBnezimfgP7AL",
  "key1": "3Q8T71axdbLnUPRrLkZeDwPwGVegNf7SrRdBXkge39HCwymyyJgfUz7sgqSGgwzaHa2dw1K833CVUibRxtxctSqY",
  "key2": "4XwLY2Gbqh944ccTHL4m4qgYH6hxL2AkbHNa7muQAnApCQKZnLPt5HfaT7T5ux9uetxUJ5uwSQhGpzpThaa2QEaW",
  "key3": "39zYYr9QtCN8pveqEsij5zu27mdeNEso2Fe3AKKftf19SzDXv4Pbz16QfqcWDjFxf23bN2LSvwbNJS1wheimTWcc",
  "key4": "jKx1Qa9zS4wotu1TW97uK5G1DyGNE2yxfoPjJ5kNqkLbLd1v9nPJvKPE8S7GdkeokD51n4AUJXHRE1fvgfzL6Kx",
  "key5": "3dJbDCcZrx6gxLWaGAevinCV6WSFifyuhYREFGxJNAz9mCA4gjHgcz14hLkgQ8zVpACetNNc7j984JtPtWP7W1D3",
  "key6": "3jo1FTZivXuUPA1rLknpeyB7qQvmLs2KNo4qTra7VNKRvWFh43E8sCvfTcHg7QB1bgdmWsSCkUqH7XkD8c7knhx8",
  "key7": "2FQm4MC71K7ZvErA9mKpNNesTXTkwGy7k6UubZ3SXobyoyZSJQtSj3s63FNXWJ1RKqwWYTb1KLGQisNQiFvYqVKe",
  "key8": "2ajiFjxhfA8jVeCnHGpcxycbAo5ApD9rF73tCUDQj8CAhFBpChCv3eXz1VovvRGejcAYAzyCxgLmUvNicf33J7eU",
  "key9": "1wGfe9S3G3y32t2VQFTatZCTYmgeN5iDxSdX2gE3Ky5gv7689cDmabVDBZrrdS6Hubud4f6xJ8HrcQzTLFUtNNH",
  "key10": "4o6NeiohVyU1ErbTCxZZUc2hrh6FR3nbXsof78LvfWFzzsJH6qnMBm8mfuYfj7aGBhhbi5ivMK1FS6YUtasbcrBH",
  "key11": "32tCjdSXnCa54bENzBuhJSAgC5yDBnTVg34cJku4Xc7CFsEx6UZX9BqhadLsP7dnvmovHUrqnyHZGpc2wJZ2TL4T",
  "key12": "5sMUPe5UqkZe3UZVxEWtkN1RXuAiXqMgCx1hnwj6ZgPKLEy4FdiBww9MoU4YEp4JnMeNZRfw7L91ryBY9UvaggqC",
  "key13": "46wZLDz6bgoHsrxWckQumLmtoNhoQHDjkginq9nmaRi2EmomCn7V81zvhJwEfeBzxzzbecrxg8GsdtuU54XquAGN",
  "key14": "38qtHTpwAoB12te7NEroyky2FXP1Bb5KGstBRebKJfeqMoJjULcxbXy4tYuPhDP3uWVWq6RRy5y6zZmdLVsoCD5o",
  "key15": "4DgwooMEmsHZBKc2FCecxnxzWMDqJWZ7soMKjrdhYJaamgiQWCtvenmsKrFV6aF5iCy1cYhCifyRevAj2UDkJw9P",
  "key16": "4h6LyNQdGkLC7iVsbxCqw42AqKkrNvKFKV7JerAXjAX3K1oyEkkF3Nv4z4EQvjcnCU9Bz7kk1DCBusS8QStntZgc",
  "key17": "5FBJcchr6gb8A85MWyy9UU6eseTP433oEbaAEyFMN3QQBvaovXTou9hEuPdQgnCUXNtj7zVZBNcDGJSEb1H6WZsg",
  "key18": "3PTZw2wgmXkhXMtRxfGgXv5oCFbYDqEdAGUmsKQwdCBv8V8aXW7rgP61eGf66zRp7kCBs1fxcias8XLBmpCaszAx",
  "key19": "55BFwTHecVftmUce7qJcsN5RGbf48PF7CiYuVwS9S5GmeZ3iqGQWpNiAyoYQMn8jLEPCE2virXkBEnX9Gs7DTSAB",
  "key20": "3wQ9BWVcwhbvzu7znvBLJpuQbxGwZjhrKjGPjbamkJYDRV7uzQ4iRxLiWzu5dB22Di7EcnHWXk8Di4x8QzktsTbm",
  "key21": "4Pu7VEiXhvQP833KqyZGVrPXBZSJHBy8TJ1yFeDcqQ7FggnmCXJoXscxzp1NazaQ6fi9HpMumkQbpuUJe9DxVApn",
  "key22": "aE3qniEAEuYPUVTVFKhGJ2taZVFJbaBbu5KSbzJURxChbF7SBzWAX8wL91Rcv3t3BWJTij4m1amXHKt6PQpPoUP",
  "key23": "KhJ8ZyUnz9Y91zRznU9A6xKnVm6WNG8jnvyijitVqLs6a8ncbeFTxmrVPH2x8ZAe9xkA1MKzNF1ioJMgLc61FMm",
  "key24": "YT2XPHxB29FYQJ2oFYWGCbMoGMarSTfutc1JXV9Gab8JXDFHRcstDxn5VSRWFGDex8GFrbNnfsjQNF5g3GAQP3q",
  "key25": "Sfu5euHdDcejqYzojKuTJFuADYrXXCsvtusnj7xBvzxThmCZKJkBHZziKbzspRQECUXvp6savNHEX4DYrU9tLcw",
  "key26": "2B2o1LtFh2FerJywXb5oEKFmAXDFCyktWmc8NkbzHDYEfroykqwyRTopuyy4QyVLYqJygSQhjwzyUfNC5EnuaDYN",
  "key27": "3ZngCVpdgtLYQyRnGLap2WB32nDBDVNbxrjiW7NndXv7e3UriNv3Fm7XjNFNmHPy23c1CxAnusaqUM14XNJtXubY",
  "key28": "4VHyi5LBb8QRPnxUMt447kd7QLGq9oMtQJ2wyCQ1q7DAJcssNeizBXib67rKcfsNEbvRED6rr2fd4pQGudnG2xVq",
  "key29": "54MDkJSRhj2WZdrNxPVZEpXhNAgHzQfFkBP5iWeu2hY6dmbj6QgwaVJegMTg5nq21mVEBjpuHt1Yk51mC19VGNAU",
  "key30": "2dQu8EfNFqCDUy7hLKyumGG98HjvxsNCb7qwgrarCGNBtt7gJEycrH7dcjANDVHK7guiinDYmjg2xTXH6n23Hruo",
  "key31": "5QXESXvzjW8Vb1MxZCivCN5B98WVW4GdyJwcRmnjJHrz2ojxRccYw4WXgvHTqf1JFYEf6qQCaMABbAXdJhwtvvTh",
  "key32": "2AiKrVxqzynXDZnricpXaHM1EfqnVJWC4K4tBABxqJ39dxCuwZ3mDkET77ztse6esdMwPL7aes4TxmVngZ9wTEhZ",
  "key33": "3cvkN4NqBL6nWtjXZse61UVk62rAFppCw8fwvUmJKFTCMamkVMkmoaNjHWx9CjTLQDp18aJLeqUyM6uWDF2hSCjt",
  "key34": "22mUq8echEu21dcEDTu66ieYGwB75qmLB5GYKPAkjhJf8hwYHW9TzjfL1BjaEUDxHzh4MkkDAHGn7S5cLerrn413",
  "key35": "65FeAKh21KHmPG6EamD7pfyXdhxkGV63mSdunmT1sXrZuYBKkbAjdE9zUnhArmBWY2bitgqU1SqGNcawJfLuS5L",
  "key36": "2XpUWuACVW4WUVxHJbHUsu6jz9hGu1nF8U55SZncB2hda2xatz3o456KqL4bMioDi1DTH8jrpVZXZ3mRGAQ2X2mn",
  "key37": "usk24jZ9TziLvXBoX66Yinjc9skSBksjTM25yJ7K1GQe3qKhtQsmcDVNa2Yva1Nrt6NwcSceMC5eBnv9PhPW5sp",
  "key38": "2sVbmh8Jxzjq4bwjc5vYesDBZgzceYpTJWxxiUETupvGcYvkdvgRfwr84jY9WUG8q4wjg5zCcKNnnqo8VEmG5C4Q"
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
