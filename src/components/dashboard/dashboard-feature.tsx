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
    "2i1yUxZf3gDHWgy1mf966BZzpxyvXN5GFwHDVoa75Y3GdbGzmYKsB8nNGPWYDYqy7x2LSqVKBSVQzvEkbEx1n8xY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mhWW8semJjFzeuHGSTPjB6owbeVcEASBS9SaBH3NneFGmxj3YLLmc4wFb4izkiV8cGu9BM4wYwvecCC3ajbtZUz",
  "key1": "4ng2J94izwrVxLvDr23zFo7MszCuShjBCGQPCPLxMcQJFgFgKRnLyXfxJzcfmg8KjdicBppJCQvVGL48gXQrwisP",
  "key2": "eZQw7HRZ7MzeffPsXfWg1YuA3WgwqE4C3fmb2uLrQyPKWHdLYFt6SuJf56p57enbyqRswXJX1esfqqy76eCqEWV",
  "key3": "3QM4J1sHNoeGzWhGRTi3dQ93Nc68Q1xFqeeoyVVeuHhExHjXKKXb7eqLNbbbyhUfSWnuhvWc8hR7ftq4pPLrmRqt",
  "key4": "2BQhMdxBfdWncjGfGJgE1rVindmrtWYujhjC9aHkuF5wE3gvtizJvFGfLH1Ji6TkNbsJU5LH2NXyhhr1ebxk3f1A",
  "key5": "4c69cBuu6ZR4SPWjtVuZMvX8Pm9SBghAU4KYfFG7fnbqVhV9KASfaNxahKaeoUuEuNwNmzUV9LXCG8g6HscwHVbc",
  "key6": "2BW9387Js7X4XPM1vbM9MuR6sFoPsNxQtSCBeset2cUrGBSpvctfXD4z48TNPLebyAsJQZsSwjgy9HSohUshqd8h",
  "key7": "2T3CVJ7nbA5mpvuvG8xxR7uSbpGQQS5JTx1fBqujYpiwWL1ti7rBbD9T66PLzA3nCitQ9VobtPy1ervzn87Kyazg",
  "key8": "3Kv5sQRfMVWry3iCKGzCnkg9NRDC4RAHjuhTxgdgq6fWTZwgLwYrpNRJaynxuqj8FTCLwEp2yheW1uB3mweFuCZf",
  "key9": "4FFZkppFCR52TdvcWu5XY1ZuLc8ZjcLNkfYpCf9dFCFwFqKG9syXKuQtbrFyoXgHH2eonb5t7cxA58yTRbp6Cd5m",
  "key10": "2QbELrjXr6AwdJsVd8fKbSv1a6jxnbXfV8CUAWZmZLw3pgohZnY98S65xkMw782hJoPYjCPfyZpqET4X9tAgbGms",
  "key11": "2nBNDEqRE7rwUSHZ9Cq1LPE9ZKvF6FER8fRDvwPttcEvEqqnEew6rQAnfkT1qCbNNgmX3Peu7koPwBVi9A8RmHGk",
  "key12": "2zyiQ7YqnVLJbDPjosgwgqAUnjNyijS55umTwYgeCegbZRzhARiMCtg7sUGZjf86vHVrTfRhnuZ1q5R486yQhkni",
  "key13": "2MJPnaDXGjcFCSjBgQ4SsLh8uAbZsptWMxjP2XcBqzh2nL9s2vAExU2NrsruotBzyPssac4chqTYPjdZTuT2ETPV",
  "key14": "33brQqVtYRxoxTb2VAjoQHWDK8kp8TndDSeNcJYbwJgsgmYxW5nU6h3ZJxTKsPxR7pGE1RQMZb5AH3MVEBGMiTdR",
  "key15": "2YAc7FWQVJgtLQjpjeMNRRZNyKE6EUqF1ZwLs5hYBwbebdoYVBuiNSN7r52V9wbLzEiGJoKkyNzdFg5tvenVgAwB",
  "key16": "49UaNbZVxuV5Es4civhGT3Xd4LawFBPHu1z6fBaUQ6AppwT3mUt3o8cqNpUJoUQbsCnZ6E6Njx4drPbeLvtRLYk4",
  "key17": "2Jbnew8edSDfcCt3uTdR3D6VsuYUjf1Guxp9jeMfRqMtWcE949LoqwssvdbLKPy4NwsuErhgMAgeYjrGD2j4k4sh",
  "key18": "WM3kJUfitA9ehEhntXRSXBDn2tR2ikovCwT77qXSJaP6LbA13dGxZR1E91E9KWJ2G5upemXQdrW4mAvSQwQNQmP",
  "key19": "3vkxzBQv1HDwWwrNYmxQRWBWz3iqMxbqoKv8i1vvJZQBmQjGz9Ky641dVgAZDC95Vfn5C3wf3UtBqZcVszhRjp74",
  "key20": "43EmbH6MaCrBp4z9qH2CdZsB9uQy39hEVz86BBmFY24kcUvBBbzHW9tNTeWZoWsssByzRsUA6tYj4XD2Qc3BmB8",
  "key21": "4pjhx9N77DBzw8D7pqiczLwokAGvcv728NmHsjuYwLfs78Yc5c9NkTLCvEnzMQsKwCZJ3La6YXZDzEwUXRx6VuDR",
  "key22": "2pbKA7XUakuYWjbioaY2WSYCWjKYM7pdfAkWQiRTqVu5QSHqVismNnwF7ft6v7n65HTmdxW7uSvtPAwmVzhfiLqq",
  "key23": "h1J5HWn9NyBYSfdFRXdKZ3VTdGe3dktwEw3tBj3w71Pi5GWdiyZguK32gcoVehcY2LYBp3tRjJVH4URj8PfT7cp",
  "key24": "4dhBMcFyajd7NECptC4Cx3bFGSCgXQU5oi8K8vXqCpjfPhQCn76MJhipKs5CKV4qcetuFsZaMhQXUpFSosAQR5cz",
  "key25": "2p4nTMqNxswaorFeGFJFLX9uoDiqo1k2YJ1uc9DdB5LKcvBsyonSArJha4j8xgsF2eyvoQS8ckvkbVb37fiEotM3",
  "key26": "qY7LWtaNJY2WfTiciHeh8EjyZjrCAotpHAomKmRufcrztpRMt3tpXzZ5PWhc34AjdJSnG7fZfD8uQwPPBTeWKmh",
  "key27": "5yWVdMprPQEbB1Yhmwcgcq5QEwnx2SCwadEZw9jGFkjdAhG1B6GCWLKDHdQJc3eN8pcmmk5kD6RYYopg3CZoZ5bD",
  "key28": "3pGyPqcXWG1HMQmehuVMUU5Nc4Vdr5z3EhTU4xbhCFWzPX5oPDwTz3ACUCBmvvqPYE7FHDn5F8xcoVFKhU3gLN8S"
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
