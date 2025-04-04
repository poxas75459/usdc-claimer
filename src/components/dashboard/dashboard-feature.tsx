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
    "2QvntqMC4tkKMKcMHQQ3qRsNQqcFsbthEzQK3Z4h7pzUUCztArxSkEGgMg77GW2kjJDFYrNcGEB1yWEY16eo8PYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uagy1av1obvEhQ2c7yCv86hAUtBdpXiuZANGcGwGGCs9Spc7esREFxXDQD5j1UZaoiuPS3hrbJQ2zHpErTYdMiN",
  "key1": "4xQjF6XjsGbiCsg4wYu6i4J7Sx5nqtLY6LKhTbnrkA1Y6bTKoxNRB11HEq2bgEYd59PS5jmB6EDyQ5Yej4Gkm9qb",
  "key2": "3M6AtpTK55q1N4rfshNnS3JzTVbNv6kfcKWnULJfUczvUWaocPzRLjFxY5FgUiZHafxTRZ2ZHY9maUutZyQSLYBY",
  "key3": "4m5nrkTeKeSZ3X7YN8W48BjiwMkdEV57GZjCUhFqNusL7HvXkPMaZEtksMkCTTqzmkJjE1UCVndSABXUyTVMjtCY",
  "key4": "4GLjtFgQ84zAAFMpeMaoJaVfqBdf3t1drScqCGCBcTuNAri9A1DUTJAMc2vLWWMLvTfMLYwnBSeZnwnLjqWHyd7m",
  "key5": "3rxiL8muPASSqsoKQ4w8WbgLVeeGZCzMKP1CTdnjdfZzAdKQncpPJVdTsWoqTRfuQKZkoz2r2BhjVHHotkMBHHTX",
  "key6": "5Qh72qx9x4sGUfapupcXNtZcFXvV1PewEdEWTFmoXcDigipC4s5m2K9fCWg9ZeP55raVPAVk4924Y7FzPJdx6VJn",
  "key7": "4fHt2i47PwWWK4vnJjL6LRh8UnoD6KuYp4S94wkKS72kCUUcpkVtzPiWxdbigWYQtdcWuVsvHs13Rc4GUrx63qsy",
  "key8": "51oZBmhpHe4pSZYJsYNqB36j1aUFTV4nKSbWAbjg8ZoZYipcNGfXLqsx8cXm4zp3gq6UUQGPEDPVgnD9P4UDVfxn",
  "key9": "5G5CgFKWb8KzBvNL6XAb1rztLPnPhUJVCCRu3McaNJh3UZmvf3wJRKi14ptiidkByT64UDG3XZuV53zFu9tNuvrM",
  "key10": "3brfV3zSzRduQSKUra8GWYx5cjJgji67Jd7TSqTD7vZZbVHqSGqfVG5fiQ764LRNMKLKqcNKoHqakt3jdmLtjrp2",
  "key11": "2uXAyiHNRkwFkB3GBKNhdwcXwJZTRYeFw3g3CDeMh3S9t6m936BaRi3RYWXrCHCdpMM8EC2UNgUreDoZsKzuXN91",
  "key12": "sHNPbE8NkytDBbdHhhLarMBUBm78p8tFNMMugwHeR5Kmysc7hXfyZB3yCPFppNYC29i1TBkqEjdoPvGnWyVkQY4",
  "key13": "3CXmCKti5aiX7zm8TdVmSibjKEBV4DmtoGZUCh4MraA2Bz22SQd9m4VfUbxYss7a5TRPdS91YpYMjm5h8Sr4bTw8",
  "key14": "Sy689TqR4jG5hcCUfuowurBTQTTSjypoyKHd2TCfQGcy8KWJarBDVS4BGfYqEd8deNkSmuaQ4g3Q3LG8Vf9SUX3",
  "key15": "3djzZ94XF5AcTDJjxRLAEDKuMkjEiEbNFdRQqZFMttuiniqLDQ5x3dSeBPwNLzJ7MCQm8Wh9cRC7e1NfnUUXxnGE",
  "key16": "4Ge98cTS3gAabhan3tNLUWBYkMQNSZH9iFKcvo7bTjeb9DbLgRQVxNbrnLaYCXkdauRCJZwS3Y1HSVCuvfUFSnTU",
  "key17": "3vhrwRhQanj63SQk512rcqyoeK7mGyFkFSr1RB3imtytSd18x4WeyqNQ82ypu9yqkC5UYLDztNkP8ZA7r5vYjiE8",
  "key18": "AjPx2sQjjvAZGgRy2j5EtSs4ViGpLX8tqMs4PSz7Y7FaHPSGqKDdq55rDy29ZdhZQvS1KzS3rEZvJ9XYG5kHy8P",
  "key19": "3ev8bSBGbmLRnCUb8XEPQRnX2GADyxk6oaKmL6QziCSgue6Dq9FTZCguzoHqfHt7EjM8gY34ye4SaaqiRbYtBFqT",
  "key20": "2S3skwxroNoroQpVT9sXiwXnEGFuTxT1xhvQh9H7a9uwqpBjEeh7M1EkDpEaQJi6Kws2R7B8KWWzrX9mAk2FGXzT",
  "key21": "5a1bDe6tyzseiT45ZpycLWzF9ZnYJSJzFCL25P5jJfsXLxBrie3i3qFPViYYuYAH6sMJwu5WbkVehwUUTNX1Pvw4",
  "key22": "66MWAKcWvY67WGJ9FSMFV1WKrtCjYkB8eGyJvaqKSDYPgMVSkMksgEZf13RF3mxvWGGMS8fKER8wc5GdQmzpe1dp",
  "key23": "4hrxyNe9X2p8XGzhrDcRwJnjJxoZegMDrX3VR1iTTr3YW1GECych9hhFnxtcL18nJWEctP1HnQoGGce4KDk7uiQe",
  "key24": "T4uyujfvLkfPNswSko5VFfAUQafqMvtjUMvS4S6Tq5swknKhzSEo9nvcBxcHPnEw9gTNq9gGdMh7aoPuz1QJysR",
  "key25": "3r9o4frJ9URWZCmndbB6XVoSqhFrawZw76JT1DEaDbHKcQMrXs6YEz6wrcuCnSdC5orKxYJdQQwmqm19qTKSMjwa",
  "key26": "3jfJu5Tsx6ndCEZFQv1tjrEVGmsdWeVfH2rNTSbG1uRFYYufH1mDtoBaj22wpwxgRpLAJZuKgYYPZP3CBBk1tq9p",
  "key27": "U9m1DerMzGEpMkuAevrZoaWWTUzH9Cicnjd8jJrmWDiGAboJqRLLPMVrFKzWHus3HcCzwemXrAZQsYrUeEMfVvF",
  "key28": "3Xe9hgsNSoB2dbLAZ2JQSBpJinYJpurx3KzcURwkSV52MtcU3rhyjfZpHpqeVHwBHVPXYnoK8RbYLtkzTzoSjNBB",
  "key29": "45FqkhiznM5W8Y4WXw1TGdhkwDBHXS6hmWYx38EWEyh3jhXeLKkEq6oZCjnVRZjtYii6cSaJBYq4vaK9pL2Nc3Ej",
  "key30": "3toBoFghKQZbcBzx1yfrnSewHAqFpQoX1tmVQessaRsv3YKfvptFU19yQt9HuG1jnc7pUgC9LxkE6oaMYvrBBxqJ",
  "key31": "5mCYiUQNJmBNLHrJ2g8iLUEE8ukAqjUrpNLNQfYv48ShSmFmt74a5GgduqV9MnRobR9mykU9gRL2YTxyrqWtmAut",
  "key32": "2T92PdgV5mdaAbAJQ8YB5SRBLkqapSLDywcMnp3272sDjrHGrJRbkBzG8WJSfrnvgN7krz83Epn5pga6kCAn63wt",
  "key33": "gKnHizP4SCEijg1U39EJjZVfkKZb98Ba4cCTpDLVR96gMDk3kxBbx79pdGNcE2eRhA1gsd8qfhGBJJcKRwsmbaZ",
  "key34": "SsYAeQAuTEgvD3eBmZ62Z1wukd3GAmSDN1PfG86Vxio7G7RVHEgbvm2TDXwWUd1ZHZ7XeqsYKuzpQ4pp5oA2M1t",
  "key35": "rE3W5QyenbXq2HUxkk5VfkEj9Jis3CKLDg7PkxLyrp7jbXUc7FtXPJyEn8eZsfMp3Fu164AN2Y2r7i39tDhpa9C",
  "key36": "iYhGfcuVdySAmUub3yL9f9YNvVPDygHWFg6tpBpCrLSGxJsNFMkiTRzagUd4oiAjCyYLdUokJBZMWDJxCZ8Q7qp",
  "key37": "3Us2mBq9tqievYZZvrbmAGDGbxxEUpuZ7i2otU7ERcTrWZ1qeBzqwSXWMyMtGS8hjoEz2T7xyF1XXtbsQnwYYmii",
  "key38": "3Ev2PPWsHvxzAKqamxqeCK83VJGNU43f8A4rSkqh3WCSE2cU6p1HC3wXwsGsMapx8vwA38gXT7Pw2FqJpBCwF47n",
  "key39": "2nizd2yFHqYxCZhaFZ6Mc4wF5kv8PV9KiDkqCggYqvmgRZM5ZPNCk4EJkuExzFHvyPeLYP3VFxJkrBCvUHndcvSg",
  "key40": "4NkF1iZNk4ivne1UyTjgwjnXEgkSnsanMeZfhs8GJ6QoPmbNMXXnYkF3SZYafNstW7KNUJKq2usRusn1abxiESU5",
  "key41": "3KKCQgaAKfUtiSTEi7Wan5FSosX6yaBqDosNr2bD74qgcvwAbbwEfB2981zgJuVPuxNWBa9gp6tdBkAMzy2AAK67"
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
