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
    "2VE8FGYvgQ1341PE7yfqcTdiyvXkcBqxy7x8kUcswvMqfcu1dQ14P8EDr4Kmx2V2BMgzH4DRkpEndPPUXuT2m518"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xJjyR7eUJEf9eQhUcFrGEgFPiSFnScvERwPkKCYG9vvEJFkmceeDdjJPBXVPL5H4XXtQuLg4WsH6Rj6ZFSTeiyB",
  "key1": "26ecssUxSFuDyHHMtZNYTj5MezXFQr1RBR5wUqLbUCBDadC6QWNHgSWEPZNXpEBf65JvT2CQwDF8PuykCfAy4N21",
  "key2": "2fmUGt9yJg5acC22UTw7qn7p57FH8QsXzo4qW26aGFyHr78z4ADLM4an471ciYvurcqvLL9vCDtJ11pTjfxCVv1M",
  "key3": "DgP4oxmezf8acGWUoJuvXjqbsoA98FACpom38WnYvCiyz1xavLhWh7Gr7aR4M47p61Cc7wGQ2J8mM5G8ef2oWmV",
  "key4": "FYKveGKBKKbHSs1wHoSBDQSgn9s9xt7QWLMgDEBRFqsLa4B3xx3DAXztyik3RVjHgcHcgTxj7ntfVDyoc4JxMxf",
  "key5": "3W7NCTNkVdxiRZmkhyH9XtJT728zX8FESLKgtScvuzYvK1Ww4t7jp4BLPmbswA3As6rTPvw1NmupvMfABAdmpPra",
  "key6": "3C9o9BYWdiGxghy2vtXXgTbZpPELJ61VtfYGZYUfTqxGftbjcGYCcwerdAKWjeTbvvX9ZBMTbFvj5EDgxYhRtjUM",
  "key7": "28itkPEpdCtjXSMV9zEmW5qNqointEcspnkZ4enYgNYuEc7KJFk8UiafbfYUVyuJaJKzswxPYNbYJ8DyvrPNv4W2",
  "key8": "5HQxa3DwUQBFn2tiv37T8LWJFPMnNHMFpL5DiKmbTEpbmWJZbSF8gyCfXX3S1eWkyw1H5cCd2an24XhJoFdFz9Ad",
  "key9": "3rZ39Lpp5EMCoaCRdrH9eqYf7MCZzJqMc24sGUnX9FW3vRiQDkc14BpUBaLiuTyysqGzuqdLiKUV9AjG7cQWxPMk",
  "key10": "65rmFqLSTX96qgFXeD1GzxjAnYJX9HrqWWPGGqGswTmscKSVCYLwLd7XcrY1V8wFGkBpq9BBezvhMa5itPrLFhHH",
  "key11": "3mAB7Pucm1d2ahp23cw35VmyQFzaeR2SagKAMaobqe4rt2G84tcF4LJanRUgfpHm4D6tqjy5q9bDZzqnt22Ro1ru",
  "key12": "3RxETF9rGwFEJoiFxqEELaWUmX7tf6cXQj24Xy1t8u3YKUxNj92Xnvy8Ag6GbTgVuEvvSuXFZUavrduYXJ1DjcHs",
  "key13": "2rkvsoi7j2rKynmynvbp7frHiryVJfyZgwPEa6tAnTAv9Ti8KJNzXtGfJ7T2KQFCtBQ3Q4iDuE6fxMhCKRqpzo4w",
  "key14": "3XBWUeMK7A9CD3hohp9Rf4NZJgNoA5MbcEpwGndBQV9T3vNmMEgU5KDzyXdGLdNE57byihW6VizBw4N8K2ZKFfng",
  "key15": "3HFrH6STTYLQz4CKLdS2L2XeEHvb6fSG42EqwZhWqawAZ6fnJPjuqit2ebTKzb5oh6qSjqjXZWNBQHT6wuVoaNzL",
  "key16": "3pQms9hXJp9MVJ1ysKdGEutDFMArYcM3ZJUnQrnYDrkcuNQgLDTHgbji7dj2mfxCrRKes3SYs87Coegmx7KXHiEx",
  "key17": "3hnyESnJaymQqAREAzDMNb5CifjFPciNg24RxGfxahrpCr9pV6LA4tjAmreA9LEz9ZzCgxLDBw8SD48qtHKuBnBM",
  "key18": "37pZwZWw1V7GwmDvhgAVfRpjJWwN7xGYhtn3QdUM9waToEcfat97DB2BhEYg2Fmp8o1oTKHRnMGufxTSxAevjGw6",
  "key19": "2TPsHFbFRA9LTM4yj4aJjHDz1mhynntkqhJ3rJsFkQ5joHLHfLz3XrTqFbi8KKe4xBV25vAqHNay6qZwJ3PjZPxN",
  "key20": "5aFFceANEDCH3ypRhVoNy16o5gXruaBSZVoMU2co5HG1b249M7tziAj1My9sSgUwGBHnk9Zxn2siPxzVjSFnWUnu",
  "key21": "MMAs3ZZcGFobTfE4X68PXv9FLvEGhghi3sXLn4ARPqwmZym2XuoRGjNxAHULkDQJBBcERe3hPzrZXjyKtesQRoo",
  "key22": "2vyfQGyZULakJKJ2YVBm3NkzeQaBEKBDHh21as1dApRZ9ed4snJRPAXGjKxaNqsKravdzZJ9e6Vx4zUypKASvKt5",
  "key23": "4m8UmM6uSfBXPnXKPq2rqwsjmr6Gs3cMPtz3fxrAbcA2rGA3fRCxcsiE7WKc4U5AzGZCbCZctuQKPCfXmWYWP5Xh",
  "key24": "2gwKU9e4mKXSar2qqzXTypoFZruvCQPdPW9CfjCNB5foKtcUbuMRKhejKesyMomYiqf6mLTZ6RgevKJgWkZuXJWS",
  "key25": "3KPcBhyJj2HprVMeNrRnEyTudQ7zpaAjQ3TxRgL8HfWSXohfEEhZQmWFRW7EkD5AQhJHVXZ8tciN2zmgPyDd9cCW",
  "key26": "4VLtgSHavAY5U4A49AgRzNkNWixDRTezZVtMnDpHJumUzxz8pHvh8PhpbhD1JjJQfyjvk23C2BnMP11Guk8swsFQ",
  "key27": "3Fftn2K9VZXSc4a8CYiFo4xHginior1XHnTnLEb9k9G9AoLxTMEJtZwwahsafnZyqfsgFrzb3d5AUzu3Zc8VP6hd",
  "key28": "44nNdzdkhvBv8myfRtJH9Cic1NuE6fCrWofiQN744N4wBm3A1UXRqyLXDeUBmjr2KLcHe24LaCsKL7JJbPQWNYZJ",
  "key29": "2fpnmZYFs4hNNoj2qvQnLFCjAQGuZ5QKFX6ckgeXLbvpKk75EPfmd6DBQf2QKS1ZAvjC39ixuNfKyuYp1Q8p9EKu",
  "key30": "2dLw21RYNxabDw9Dq4NKQBPFahL6DVr4xYtt82wXMHa5V8iAUMS3eGURHZTJDmpc2ZL9fZRGhgNVt3h2kh8wboww",
  "key31": "51rhtNRANpqr4T2J9599WGMEDfQbzMSVv6BuS8TAT7v8B1yAqqcwCjXYUyUL7nk8HKabYXkMYg8KYfDgMZoCPYD9",
  "key32": "2tffgVt2G5W7W1E3XpKkjkba7erQD92Fgf9nT45kiB3wUxXnE5735bBZkcbEv1vmWFMcyXKHCHmpvBNBsSHXgmai",
  "key33": "5B9uSGCzPuu432rqKFyJ14wdyt2uT6yS6HQocJYkMn3Tkzt84cwtjtWggh49g5TLKydXmXAXJ3n9wKomPUvuBEeJ",
  "key34": "5Q9ZTboRxmU3RvDE3p52EQETKRncYdz5MNjJTQhwcDoiNgAwRqf8zxavv4YrNwPG7mXoUjHgL7VZg5oEPnPENqeG",
  "key35": "3GCs3eceoZkygAGJHRQpLyKocBmqN3CpfqNZUDcHJbrLTVRF8FE7HracMXW2LLBYequ9kmiwqRfjAvktyuS443Xu"
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
