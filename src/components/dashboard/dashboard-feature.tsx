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
    "2WdkKDcKu6yECDGy7dxGzVyi6W9WbkJLzjdDub3PM66xacyRg7m5JhUvL9zoSDkmdQAiSr4Zh9d9g8BtdHNghKNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kpb86zHq329oZqocdYWdvENnm2HyFDjvXJdDh1inFkjjF3xrYKwYWmV3bBKZfyi3z7ma9gAnVwuNQGsXb5xAceA",
  "key1": "571QeTB9G9Tv6KkKkpQAZ734UhRBVai8Hv2fwDAYoCqWFeeBrppsDhUbNfFEuZ6ithiS9jZAHEChK7oJu8NYJQvG",
  "key2": "3P9hGYh8DKncuocMWjgraL5UqXoxcfWqWmA4Gbt6g8B3MCAdP7FggEzoTE9xJy7fpuuTkR86STmpF11hEknCZ9Ba",
  "key3": "3gEkVhHm1TNeX5yog4eFof55SpX4guchqtxYD8c5GLr8hoKQyH7JoSbS1Ub6UyBsNyrXYVhdH3Dqd85HbxpbaY4e",
  "key4": "41qsfu7jHSW1df8QaaLuSps8BDdKSA2F87xwY8d2n6PeuWih5YsK14AWd75D1dWJAH73L4jh5ipvbY76upgYxn5K",
  "key5": "ZraTW25JeiVdwN5zS8qDUmXWaPma71MHPQcuCXhyD5sgdqS5Xgv17XUq15AV5zhm13aChYdhMAWrUzPToyBGzpU",
  "key6": "37CmKz6kNnN8aTRrLo3Byedo6UKcdgoqEGLviELUogJE4q6gRgXrEFvvYo1ohpP9Nc8w3b9hLPLoU6CzHD3tMQWf",
  "key7": "2fhhnVgLQPcvHwbnw81FXEMKfNN4hJsQaeytYCMTNJ362d31F8d8c16roczs5YQAhUVNwxpnsdKJ2NxR2guQEpE3",
  "key8": "4YCMKjNWZSQRPJ2ngSfYeDXsDWyRYwkdUcM3th3NnTFRBwmE751Tm7wooY7aiRJkVzyERqX78CQr21eREsbzA9Pt",
  "key9": "2XDbBZPoGcy14vBWHc8DYBFgTPVS2GbNJnjSpwSNJ9h4mzm1bKyVfhGWhAi2RRtPPu2jo1YAvLB5rJ5r6VEfT3yt",
  "key10": "pT3o6BPQg86mm7UUjd78oKBSGVQ2XpaHJfLiQWc5VRs7D9SXnb38xgpnkDegRYVddFnLK5om3Vw5PXcnP7TNF8i",
  "key11": "55ovQYoHhiJ3p3EmQ54x81uTN2tcpKJgAY831Zpu89Wcmf6LZta5gcasSfjhc8mTfB5M5ZAhYpdBaWo9kPDgVQ34",
  "key12": "5kmDLWVNkuUePVX3Cz2Y9vx12KCR2YTuUxtyL8wv5qPRuo4GrDt78q6pCxidReba2csspKdFAD1xHqDaw6seQKXV",
  "key13": "37ekC9maQvHVNV2LS34fvsvkR7VYMUn3in3ZyrkKSDzRmTP3GyoUqDJtavqfJFMwuduA1mAvwNZLJqThrUZrekkz",
  "key14": "2qcorEuPgGZn5CYt5mHMoKxtyBrLAMHTG14bCMXtyABAw9wmrxRg2L2f2JyDXqAUpMyHqeoVuV768HpT4phJyEUn",
  "key15": "4so4Tf2bbh6q9Eycs9EubZZyaXJhUG5hBMk4jhHLA2RjWJ8xcW6wWHjCsUz7MG2tpmZF9uoYa9cKcPKNubHyzZp6",
  "key16": "2xyRQjUodMzVuhh7du6NJzdMfpVUV2M6o2ZH6Efi7XUKeAKhtQZcwFenoAPgkrYLWzNR8xwV47Dv7L1jXeFrvVAc",
  "key17": "4JqHX6xRihZSMc13XL3tzB8zKdtY1RUBe4ihxSzwiEdnRZiH23yMeTbrg2ughv1dQBfwcjM8eJGPqHscTHpeJZGY",
  "key18": "5DbBapvNCAts4Y1Y4sjW1tVbuz84d8QkuazYpSvt5EHVLVTFQwd3KYD4pmncdB1oS8e5pDzS6gwWX8z3eSb5uUYV",
  "key19": "naQUtAdf6wMrLqZfE7P39qre4tbQCGnWL8LZh4a3mstPbRfyiTT5ffBgruduqbHMtdhhcdk5dVRckuSngjjBCBv",
  "key20": "3q4tK6PXYkCHqhVQ44r4TECzm27N4XjeVuSABmmB1UnDfsYJxXXdQMnftv9gUBhCeoexj576rKsyUSKM7bM1w8kw",
  "key21": "2HgoqyWkG5snuNYDYx6i4c25A7dCAmDycS1Lh1w3G65VZcAyCjooegQ54P2fmTwbLuFUdCX7CNofgehZW6hU1KjM",
  "key22": "4Qs5HJ5LGa9k5kdbkJ4qbWeBaWgrmbt4qRKC6mbf6XCPtjVNXRAxydmsKtS3CQWdSH9YVy6mUrWSdaGDC37cuafS",
  "key23": "D4ASaRSCYSHHtvBQP9YjYdbLFK3oMePNoEZubXUiYMBtemDNGW96vSGysVXJqgcHv66UePedUT8gAUwWMWqJeSK",
  "key24": "FzF83PgmRfSuiqwdCLaQRLQGVQK84NND9mLK2Um1uZ4owtBDAED6FxigFXuHFrotmmgLYZBxvH4TiFpis3UEj9a",
  "key25": "yoGFL5ekZdXGXMvR6HNvijTrxWtB2qQ1JEiqa1TRGoBSPN81LrPotkiZCPGx5Ycv6nJL6UZwdG5Pv3XKxpoLsAT"
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
