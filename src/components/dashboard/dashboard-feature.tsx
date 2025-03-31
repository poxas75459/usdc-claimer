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
    "23JEjEa6paq3CdAnjHhRStMe82u5QRVGWBcD7J9ktjFSHYZ6gWgD14WtW9B6cib6KkusuqS678KJoheUDpHTDsjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45jvnrk64Rnf5qH6XB58MC8v41KiR7LvEnYPHEXZDzXroN4A1UaA6rU84Bwqkz9xtavbvC6Rgcn6prnKvi2yATx",
  "key1": "KBWkzfmzK3ZVpYRdShmaGC9RjB9AYQ7LjrR5q5hEPQXKvawLnj2GGFtFTdaQJC8famJCrHK1hou1YLX3FAoGkff",
  "key2": "JmPwiZRaeHRjdBAePHktKPGMnMeBWygWEC7Mi7oipE5Rz2QEgYy4gRhvHPXiKya2g7YJAA9gVPeSU9h8YEQrr3G",
  "key3": "4pBmVtBjNfkQgzyFbZFPgfNDAtzhd4ezAMZtimspXcuECQVjGtjKhb3ziG8WVPkbr847z8pRpFKgYArRQSLMpQzr",
  "key4": "3TPQbA22Wqmx26NAJsKUZQQB5n9v9WWbFdJRbXWEU9ABTcMNVcVR64gdNTTdy7S17gR22qecAarZ5AuewKUPot3b",
  "key5": "256agsYcP7CdyCx7D88nJ9Su4jWhBHcWGegDgx7qwTScghRYNtBFrWe1UDhZkCFChVX5tPsobCgUkjeKyH5QpZAZ",
  "key6": "2AWVL3td5Ck72GnnEphPC2Dxzx1YySrzmqTpbeBc5QywGyRhmXAdkhz5jMKHzRKgso4JkLX7QGWrTiNAwn3sunFz",
  "key7": "2jXnbEirucjLSDr3GFAcHWME5u5DiwKerzHVfXUaLf98UxkBJEHWyyctYMhsVD6S8MmK7MWEHTrLhCnhwo8hXYGv",
  "key8": "3WzVyeqpjHuzfez9E5pRgN6upM33QzEb1igvPLGJvwxAgVpZ5PtEwzWXPT3yk9VNvUEKkSXRZQJe7LCtSmo8AyoX",
  "key9": "4kr75CUiE28gn7PLrEgP7unQAphoE2KxUhutno2Gji1CXxnqYAQfKLe3C7NydnnyPQRjUxYkUZ7w6RxXJVoLL5rJ",
  "key10": "2ryrk5ZhGptq3gDRd6PFBAdWojtGCaWt3LhUMPy4YV4LobL4tAFHDL8WwsNymaf8zvXzytnmZ8ExVUYQSNwW5BaG",
  "key11": "64pNbHp8vfsQeE5zNhKnAB3sEtu2AjLsUeYQT8e1zQN6syxnf4FkBg34stutwqLF3p3qFtY4BJmEZBjfHHgwfVMh",
  "key12": "2xYMi7m2RjmakY6gYs9s4W5qHPxRe4UeRgSv4pFDejsV8RPf4reeQTxhUfotX6Y9cGxRuY2eCTNmUxccLZbpVwBY",
  "key13": "5VSnMzMV8kHAdHJD2BCdhoVyuthj6ptt1Mc2F5mvYXx6h2eieXpJ2ggAAvP4MmzPETrAdsomAj4A7GPkLWdLhwJ1",
  "key14": "2b6mZkAr2U9ZFCtg6RkWmfcTCqhi5jsnHJvArVoHGSNxMJARvEGuvWzRj9ShmXXn43sCSYaU5zAmacbPXA39gZ9G",
  "key15": "39yyZjjrL9qJ6SWxTWUqonST1rzTYgAawSUorKUndBWyAtc32VzYGvDXy9oi5mvb2Ki4UccTzcUoYPJZqyj9Vaab",
  "key16": "4m1LDTTm9Pnu4auTsnGQsNHgkj8GKW2pGig21EJtq274CpUHVvjK6N3tVJjTtzmCWKTkgFKzC4adr5oYuXSrVvkr",
  "key17": "3uWfJphTc47UNv6dK812xDzUcg5GTkAL38mz5goVDHyV68PqQvBWQcEPxXhWHb4Fdi2jw5o3B1w74gopuCDgb3MK",
  "key18": "2xAz2jhA8ugfmZB7qDKFzq291h1uqGbhr1QpBQJ3zYk63VQCf9MRR1ksC2pHYHwkdaJpyXRHLVRRGoS1ACq2Bc38",
  "key19": "5b2BFSGfUDyVfpPB4weN9EqpCFtg41bwuLbp39adcwqnXRg7C27iECsvrhU5MNoDw1ZNSSxC6ebr8Xph4gaibAQe",
  "key20": "39GNnWBuVe7bpZ7Tuyi9MKZjKfT3GRF9c3dtvmZoEosA9vRPyB66AMnJyneDejNK7DHjYkmtoeznoWFQKr3Jr2jB",
  "key21": "4SLKVYRrwwApxwfTP9nPBS2gJKSwKcPdmZSNoh1KgntwcmHLmKE6mVGvFG3hNgLzWH4tx3JKPjNFZ3hk7Q9MMET6",
  "key22": "41xB5nHEHSNd3vevhkCFg4S3dujnPQAekGhgdFnm9KHsc2DFxhBQjkdrQQVmZAuYcWyr3ZYRAsQj2URpLDAES6Y9",
  "key23": "3aySDzoY6KKDdhZnMBf6AZZP4qu3Wzp96uVWejQsMRAbs2Xrv9rMb175W8VAWsspf8xqWvsxNGgACLYjVpF2tGw4",
  "key24": "45CnYMvWtbJzSHtXcQH9vCtcEhGSZ1u9NeQjdVqv7TzW5KKyoVQdPmxmcrAebh7fxC5w6w9uVCr1J9zpPx2i8C4k",
  "key25": "5n6LqgHxkGXShkgBUdk5GmnLBbzrhxVNBdPBHmkryVAUvp25xFGJArTFAaFCzcMUb4APAxYgTXoLUBGQXFWaTkhZ",
  "key26": "35n6Qh3yh2NahmsFhLgYLJAsuYLYur5gqjVs4APzWKAuxjgxSUSbPeqpj31nUKfW4GBSgnjJt5Yt1uMkxmnnsco7",
  "key27": "3hxT2Wsbxugg4STC9ZjFMAaaZFajNqdzX7EJthKvaqvPUupH89w4dZJgKE9XZszX78XaRFx3zJfkuBdMJdUogVJ6",
  "key28": "3QAayBs3XU28pvLGknH8empgpiK1bcbxsk4MzhG6tGH1QyrCwscvXbrva5hK6HaKnzmp5nCRhFaSD3Rjy3tZkxH8",
  "key29": "57LCHPrRHztoA1KmaoHdN529udTpQQfSo5JEoiFkz4MQruauNYcKMLkcB8Ewa7wGVu4ncx8uGUHkiECHAQqou1xM",
  "key30": "3T1Dkyy9Av2KbRUHcYRjvWG1BqCM1w19ZhZBXNQDqgsgqe6RkFAepA9ZCDZ5k4neg5zbauNvz8jqk3kwq1eaKxg7",
  "key31": "ehC614xsxGvMZ526gvhgWfMP62TdFFoQA2erF1L6dvjqQb2HHqfk9ZChy5FHRzx8EaMqt9MxE9tBJadRuDF7RPb",
  "key32": "2c4jKzrPVr9yNx9f9kemUNfaabNHVKwjUmLPd63Cam4sXtdjJBaB9kF7mL4ZC563ZG2KjWmGt5v8y4A5D2ZPZ5Aj",
  "key33": "2dLbUs2QBQ961Hov9pxJ6ZK1oCzw6FkHF48mCzCUim67P9ixBJo9XWbCm3E7XGE7nx6aaysKJqJHF5VyyJtFftt1",
  "key34": "38VQsddkybzyDeXtoRtdz2S1MSMfkeaeo53rrm8T5dqTJCZVcsHvNyEypBa7xKhFeut5AbBg14AKuZzwZH8NdiGT",
  "key35": "58wiSQuRQ5VsETU2VkLyLsHkDGS1AG5eaU3gvTtPUV6mhXT3NT4rhwH9c5Ua3r5VjQpaftwoFiz9x4w7Phc6yf1q",
  "key36": "3TjzEnXzSvFRCd2qPWtUjY88CmRFe3yGxi55SaG15mUQpE5XyNUA1nz7uRDMPpvDdyEAUSCZvBFHD4TqHsYqV8cU",
  "key37": "5Z9dwvkJXhb8G4V8gKhuDBnHj2XSC5XhuX7TCAEpf5aFwnuVhrrmdnY1Rny6EJ4YXKcbmSfBQD6hQRaUDDBLFGyu",
  "key38": "4ed1Y7Ct6pyci2qUD3HGjPWujv8mDsATnttf5tMtTUTK2fC9ca8y3sQvgxfNYns89wEEDddnEdK2GUZUHMADPYZX",
  "key39": "62i4pA6emPAcCrTCB1NjHPLhR4Xw9fny4JtvDDhoFd9avkNNawrRDYXfUjdWtKibNyuWGKqe7Pt2M2ZZpJf6RJnL",
  "key40": "4c9ytkMFj3WAGMk8fUuhnBnpSHda1bYpuxquVTVvgXNnUdtZ6fJA6UiPvv9B5XdzzX8Moy9RbKPN1wY9iBdPPzhi",
  "key41": "ydVhfT5EMUw11M3ryr2QsmF6SJ4rEGgvsWnNmFn84KWkT1kYE4qTsKd1CxJbwY58gDgbwVeW5EyjkKZYd7DrBZW",
  "key42": "5FrnMtvojmvaguw6tRrWGLVntDr3g4d3BCS1gtnT6bSh1capfzu3X4RguBanQ3BdtoeRy7kbYfJH81n4B3ox7hur",
  "key43": "3iPMfAAv2qsps4pwZG1rmYXjnggQ6g5amjjgU1cd6baSbyM2JpfuvaaJYzbmLGP54U8raB2X8VuXEM2LbnK4kNoQ"
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
