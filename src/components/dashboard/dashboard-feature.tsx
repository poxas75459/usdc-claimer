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
    "5QPX7LpS9pUucPjVt8zb2srT75SJSDCqR4gux3tuwYmL2xZVXg8eUPu7huEfoys22txk9tMMnZ6A9cbhfLaCvKca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZHJbVxfPQ7VsP3XxV54RVmwtqx9c2jCxGUjKzLAr1aSzzqVTW5gALLwriswpYwfusTxWk8XTYhehomVpWUJh7c4",
  "key1": "5Z2kygJnbwSs4urfuB8mbGDexz3KRw2CdPVcRGbCob6MyKNY39ZdRB7Hws8USZc59eKc1TPTrfkqpA1fjRdqk7R9",
  "key2": "2wm6eSRv8KZsJwm3V5badj7yNGbxL6yiLoq7MiNRsqLrpU488aJhDAFrBKeskiJsn7a1HbtZhCngkCgmrKX2AMDF",
  "key3": "swwM3fXQuZRFwZwqeFL6kHJoMF9zKUNQ9Cg5AZuCPUWsEshGs6mxB8T7CTZDGqLAiY7QCQgDG5yNFs2yo6N8a94",
  "key4": "ebg1W3cGa1tTc5pC5ut1F4Z2A58Q2RUtx6QfAxUrbnGLjahZT6iLZSvM8ec64NVV7Cos5LLi2FDKghHLP4xohwp",
  "key5": "2GhDVJnfoxdXhcWiGLptr4wrEuuUXsi54kHMKZUmrW1X57bYYMDj6uQcy8kjrgqTX3enQ5pYc61xgHwLAW4kx42i",
  "key6": "3CvPCa26n8k7fPskG3CeAxSYwuzjiQK2C8oCnJoCMbre9URojmRfcHL4dhFbVNKdQTVpZcDgQTi5FTjR33YH5zfN",
  "key7": "3XQUHMLGT4ifwfbaZbcK8GvfZaag68WJAwtKUNLeGR2G2sfMtzBJ7EeZKSCsBgJpLfHk7TrarbpWdaYUWEuEXgaS",
  "key8": "3CEkC2wabJ9trWvkdLHZT6jSD7WoGbAdaogtSkMC3bSNhAxTkWvHmSf9DC5ETyErwwCNxzjTZvoiaVJiZUad2V5R",
  "key9": "5ahEgNHyHtCzR2NpcC7vp3MMhHmJ1BGN4qiVVWguYz9mDg78Fwtk8yFrhUdiAL94HvRmf4MGcdhAnnDCsejtdVoD",
  "key10": "5XT2SqoZwHdhRvbXCpcqzPQiqfRWhVegWRTS27m6VDcAo1Kbvdq29kPvcUZ4eEp3kwzR7jEnetCLWEXNi2Pe3oja",
  "key11": "wnsvJDAR1BoPQzuqLqEXcKxdwrgqznkkCbM7nJVGQWcLaaH3jUkMn8y82qRcGLtTv9aWPCajFpGN7jgkwefifqb",
  "key12": "5BnfFJjzxDddHwqWdJpbEgnkz6Z6WskonLypJbngTV769eifvwcr2ghNT918YNj9MS3H4jeQAJZV8jvPqhkrATQM",
  "key13": "4A9iKfw91URc3X3M18BL1xRWZgQWrbbWsgPAzHUsTTkqLoLDyF2Zt6a6ueE8Uke3H67iRaQnZ6Rwtouc6JGX9nws",
  "key14": "63QrLHktmVuxYv78GZRj7pGrZFDzaNo5TnKa39ca3uXquTyrJLSe91tVrh1qdoJmGjP4oN6EH53DgybgCQvH2Dcw",
  "key15": "2HAvqvNuYZ2MACkzLUwASyTVz9sEntrxJ5KuVpqVz2vNJnVwfpiCj4zTAQsVQzUpM9SfH86R5eMchTUWboTX2Hnz",
  "key16": "6oSNYfPCK2fm92AjGd6iWmYERJrSVSZgCenzTaP2GTQDp8GHTdGqqYEopNP6bm8oEBYBU1KdvX5Mpic1X3JjFH5",
  "key17": "43QRwiqpBpHMENE4AjEreV58jfp68oypQ3nSoTspXazRYeZBK71NvAjzjie6wbKKzmLdaaCt3AvpuiYtkQpJXavk",
  "key18": "2HWvprYb2XFqaE4CoBbG9YsaWxEvo8UgVvsWJXb6sWFewNhEUCRRDfjjYs3dXW8h8Z1jRCmS1oMzFD52WhU4ZzH4",
  "key19": "2DLndLCAAdMEQ7gZW1gZUshvgp5Lq7j8UGPskzRBw2ERAbBVmMhUotFpAfdnt5Q3sZ5vETmE89YNJL3fvtCTR6Wt",
  "key20": "rnR7Rqm5Y3cWotxRsBcQQ1tuNVqe2RPtVKfnQj3JBjdBp7DLrNtxkNZBqD976Ly7hKMBWA86UF4vaVJU7p2rEUb",
  "key21": "4nqc216Sy3ScBsVV6FTk1azEm2eNmwTnKzMf3XqgY2ed741ESM48pLWpM8SRQJ4NfXurSsdjkdRXp6XFSo7xBn9v",
  "key22": "4wPjuRdyrfavAaMoJK4gqA31Vg4T3vvq3SoiwVdhBX5VgNBYj58J6JDFsRkMoAv6w3p1hJxcRkXXDMz9f3M6sVPS",
  "key23": "K5KLx527cs9S3hLSuE7yq9SYghJ63M6hpH8jZrrSFRhbrPtmTmXHH7BgW9aJyGYyBkH5qWwEzqV85wu9JFpPd6X",
  "key24": "2kXVkScRaAjiBusDaQD9hm6h82U7ztHvNHNZ7fnNUkataGZuKkqodNP9FyuYf7pZgypwb9hi26XNt3TnbiiYW5Hy",
  "key25": "3f9uaYGixJtfw6pd1mjdv1EUGnN9UqJxx2rwnPNj2JDjvSKU4j57X8YB92wZ2HeqmY7kojwRcM67PjuTg1EzPGj9",
  "key26": "53G9STh3TcuiVHHLei7ayey1tMUTQwwfcXg8UzZyrE6fW3rqedUhwgckKeXSQNwWg1erGB8vAuvikd3D812CBdpc",
  "key27": "65c4bbAGBprhQpJtNjKbyL2sf4gjqgNAPcQn6VJssKgQ85d2Te2b2BwW7rz92BL4jcevVp2uUuAtXFF13aY5ur9h",
  "key28": "5111gLjP6wxyiDwYCJr9xNYwMPVBVQNwTtUtSbNkYv94LUx49JjMLu8XwRrs6FLAiguXHSMymV9RcYzQgpu46vWp",
  "key29": "648o6McavgFLnEuH4mnbZKWHRwpqkm3XM8X7Sonn1hiEEZSg97gYtBwXgEgzgZMbYYgmPbq6WzRAKbCiEF5GjXg",
  "key30": "3CR1sHFUmtvfhK4f1Avninx87i72fU473sjyHvpVanaVHdacWPew1S2YoMHwCpVV3kkcr2Qyrh8Z1JKC43xd8Wi9",
  "key31": "2krwpsDUVSUQN8EkeomPQmNg1SuawB5PRUDCYpvK6NF2uQmQQmagUvcfpYCNCtdppadFTyauCtBCkzcU1kqtQmGD",
  "key32": "65NBLt39kF7kqpZ7srrLMvY8NPy8tskxCZw2G1zwXrFC16RcGPrXCWJtWgwJssUrteDJazmctt4hb6DDdWV7vfde",
  "key33": "X4kguKDhJfjnCzGiC22KJiNi2FJ5xCJZiVfzFrdyntEmJxYHxyteD2bN1TFPof1VkJxL1iqbf8uEPe5jyAW4FBk",
  "key34": "3KpY3icQ44VB5NfG1vudKxphxibiZi6JaS7ANKCzvPXgGVZcwqEXF9rGpQmGPtfZ7nt4JLE9oAg4jm7DHZKPJGiD",
  "key35": "s4VeiwPCcY2rR7wnW6n5xivKwUc5LtVg8u8x1xA6pGA8hpmHLfBusAA5DXBUEiVxCgsezXMDu6iMEs2umKjyuyj",
  "key36": "5iQGLncTLqgqUJ7vDEshPysSxvDz8xhb4H4KBt2HnczX69ddaGAYA4LBKGAkQxvB6SQ66WymBLdqYvtwNYewEkt5",
  "key37": "3bpgXZbhyJZmu446xBM6Krid5xjcs28npRNuyoVfz24GezMomXrU73jFCMPzYfokc8ktepbPVUULKQ4cyun45VZr",
  "key38": "5PRH1YsRVZ6cqiuEoYeeEE8G1GpcJFkpqzKz4tHFdgfj5gpJSvtdQnwRrAFoudiNjdff6BjNMb1Wi4h6XvCmSAyz",
  "key39": "5xBbeBTsbpoWbUT4mCX9G7AFaqXhPLwcWtRzVaCAVVBrpap77Wo4aE4xRenQZgN36gXRDKmgqzzs4t17SLmgEF3g",
  "key40": "fqq638x5bznLM8sVXRzWoDSDaV3bdawkgSkGuUjLiymSn9GYj2r5Hkqwa92AVJDtz91qPUseSPh9GquMsRKUfRn",
  "key41": "3v9NAchxYesf6q7xZMYQsNBYtTptUgn8fdgtmdrp3c2MR5LzD6hwW2TmBWEKVsnd6J23vpKaX8UoVzTvFArwXb85"
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
