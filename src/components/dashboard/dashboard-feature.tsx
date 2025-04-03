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
    "x3RzyHCMoaBaQhuAGXk5ZyJQv2Z3ckzX5pXtVefV3VyVXeXUeAYgVBsADzX4wPEhXgfN4pq4A4VqMDzW1tvrx1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jbrwHYaBrQrKu74pyvv945kErvxwyYppaHDvexqtZU8jimGzZuiDEvBWd8fWG3dCQjphVUZb3ByqN5bPUEoutAk",
  "key1": "42hQhED4jBG5kPguLjhqhc1g5wctDARMtKE4hVQPfJ6EbSFoAdzFCb2jy9p4hSMvB6xppsQCB9NewwPUWi2s4V7T",
  "key2": "fivokUgT1Ms1MuVirUhQeD7vCNeoMvCgDMMQ614bPYRiwzJe7WqkyBu81BkoAUayn5LKcokDW46QZV78gBkxEta",
  "key3": "3LEcbkQQdUGjsJ1atmaSreXWrBCKSBsC9qMoZuSsDu2ABSQ3rzHzX1L2wpwHYTzyznktyB8KKZk7hVCVb7nLWD7m",
  "key4": "62Tk9Coko5UA1YcBjeXeswt8UzT7h2ktSjj5H4LS3SW9aKyMP5DwzTjspHywafapu3pjY1UiytbNVGReR6vhQPcW",
  "key5": "5YmaSs7BiqoCmraveyUjkuyZgAgN4PCV1B1evkLH77jxReQettSB1mJjo7jcYNHSb3okejEqXbma8Hb68WroLNa7",
  "key6": "rLzLU8g5JiuXe2HUSYWJeT1Li8FJ1m8U8LzjBdVGmTHikWMUeg6sQjEg2T7RDppGfUq2sXVZway2AsW1oEstw64",
  "key7": "3UVt3HKNXNZQwGinBDamyEp29Jm3135DqB9rLNBsW3Zg2k2VsMNGvUiTQzwgs1fWVQ1KHqBYaMNCr6xKuCRUcU1W",
  "key8": "5FdmN1VBxVj3biZKNag2a9snJKe9VrHmzUbcCSoa8ZUdvdAvkdNCMDFfN33zhfYWqQV3ovkukqBrGyoi7rmgx6NS",
  "key9": "2niDEr8iZPCKDCAxBEMJWX8HkoXktzhHdkKApYXig39QzxZFmJe1R5AsJgRj3pMa4VNwdMUHs7yp3k6LhaDto1A",
  "key10": "2khGh7THULFpqTabgDtq8qukser3DcLs1fwLN1JX3PWXD3tsjaZ5b4a1e5vi5RKhGWuhcANqPWPFF8kLreYLUqm8",
  "key11": "4S9ysQANUbwQP3ndTo4G1hPCGcsjYHgweFTF5KAKWZLK7a7V6Huk3wHDsxdHFgosjvcnwrJJu23S6t4VzFBeQBak",
  "key12": "4TQWRhhn5wuMLjYv9KXS3so5QoJ39s6mh9gKU8ndePCCcNcLrPaord2hrq7NWVNfg2seFX7jktk6uRECU5TfJ5qY",
  "key13": "5jLVPfKnMHHu4wzF5SwFBZBYg1x6BfWZq6cvETYjo6twtWm5PWydqfDuQaTxBbNVbVvv635aF2LxddrSeTEJdAck",
  "key14": "4HtN8V55oxTAeQz9uohqRH6HXC7fQRbo1p8WmMiQnWrtCE2GKhhCDvKCWsR7qUG8HXhoJRp5wriLgs4EhFEW7v9F",
  "key15": "9us8fARzfZYwonEv8onVTQHt5B1o21pyTHBZMVdyBXyhFv7JVoH7Ez6DCy8X5RbJzos4Gw3Rqcqt3XFSMFAx83x",
  "key16": "5G9umN4Tpm18dLRNRUPn5CUFxtg4nwjBRzveunHuMA9zaFJCAnu1Rd1r87qgWwGKjUb7XGkVDzvE2kNCoCajZreu",
  "key17": "2KZfo86faj3vnn8RSZzjSjTU1MrMSPbw9vWj1jwhCUwZqDEW7hm7XxgChCSqVSmTeNujC5BCC13XCgASxAUVfHof",
  "key18": "WCGncynh7HuK9XxQvK5rDpMt5YWzHf9CXqrSebqjvjvas3aNoQBPZRGT4L7QY9AM3aS9R6W9Jfu4NH7NCtKK83M",
  "key19": "4jm3DzVRLVLDkmqcUFGYrHKUPx4bUVn5P94ief7GiGMdoEQe3y376hNs2PoRQeNqkoLBTf4pUFkq6zdK6LCZ1dm3",
  "key20": "4jcWX42FXLCjEpJXvUDw9J3JJd5nHrqwr7XZYWixvcoDh7EzidbY8wWfnT3jBtiSvLoZkBffzedStyJ5QoGHRuhZ",
  "key21": "5koDCu45oRDFwDBaTqVVZiNuRwytj1SeUwW5bK6fM7wbmourAFepXuU6gzQv7cdA3dMkdavC4VBQmmdGswmSWPKB",
  "key22": "25uBELEKmiVp2EnJiZxah5Ro9ADdFJJtuaqBJfMReiPzYDg4Z18h4Nga4ePb9DWEguujGet6k4p15hVd4abtRJyi",
  "key23": "3c9h6tAUNUTcdEqYwCTjaBgLGhz5SMQy1Wpy9AdfpAQUmE91TH6Sr54gHGs97UzJqgzkGwJPPa2xQK2yFtgdfj5B",
  "key24": "5eCxhssg3AxCBoYQmiCKMSd966kkrkxaywibwiPLdkzFiumspoNn6LBECxyz8ojn9GfZjHHuLYDGz6GZnwjtNd9e",
  "key25": "58sZjybLHD2z3i4z6qL3jXLeG821HrTZZ3oxTKGVvktGSDxpuMZcPx4Egf1gLe6jRWXWazYo5QMdKV2f3SaLA3Nn",
  "key26": "Lvy8urSWe7T2aSTosfTAVC963EhxNhKgzzGCbFF1vcvE2ujKyszK5NTb818fRv4Y34otZzpSxYmeoX6WvihdwGS",
  "key27": "4atZCN22YXoLSnLZi7zuhwdBqZ6MkP76gKWwsWeX5gJzMBV1jrjX1zBTv3BYPRaGunTz68mo2EJ8yJZFedLuMcDX",
  "key28": "2n1pnmWfWoMQV8ep3WCtTmABY1u1ByZuJ5Sk42YLjDdyWkwT2SHToo2LgTrqWxcRwwCeSRZnNXWrnM8Lax42W6wg",
  "key29": "ne4uhpDQE78EBXuAgfe5fv1DkK1rLfnc63Q8fNy2Umf8HfH5tXUZLtF6DSAnAZvq9yCJ8aceELBuBGtYc3goNSK",
  "key30": "5QwXC2juGUjPbzsfKQGWxue2mhBiozwVzAMC76ozF6xF5yTFmNJy9wZewqyoGGYhdfx8oWgaAQiHoMUtNCMJrrk5",
  "key31": "2M1Z51DMR7pfkbS7vaLWrqrfgRQZSncecSh6JueezuHKUQRZJ5kpPRqJF4chxP798NatLKRYajviLakeb3zasgrd",
  "key32": "2rbvrdMaFJWioXrjSUoeF3VthBjvvpKvdtmydN23KDHKLXxFE9M8i6LjYHrQc5HMnzNAdoLKQ5ggFej4An1HNrBq",
  "key33": "3rtkxS3LZBUrJXbTJFFXBQucFNqE2VMn3dVYyQpGk2BTKojrbyoPWocaMJMqDaTcqMuaoXkzoedMtKf2TAqfQYDF",
  "key34": "2hYKEQmw9gFoQfjygXjbbToqzUVEmPc7hx2zs9S9d5jAX2oihkJHEjN5EoSGUcXVh6Ev5cLLzwLXJmJNQ9pev8pZ",
  "key35": "5JoyJ2KMZnsUzGJvv6cxFNM2MUqstRrPhtL4VLmSu9LA3TVbAdFsNz3gEC5Cv6NcUDpiuBuNCTczNVq2ykhn5xJM",
  "key36": "26kaagvaxMyGtFUznHC693zfSFRBHz2AQ1bECdKeScXybgxcyNf984iAsw31uFnn1a7bawrJqgZCLZukt85vkW3H",
  "key37": "4uztH87e273LRWSkPJauDvLrV3k6mpYkzac9S7roxdN9Xd9szLGxhr9kyYGfhBGzJHKWxMc1Pphro3nAA4H33DAX",
  "key38": "4chYPZJkj4viSttxnkdhUckTJRCG4vUu9Pdd44cxw4TWEBrNw8ZjqT5ufLxJzZMQFrMghN3s35s1xVsZGbk3PEzq",
  "key39": "5dPqN6gNPojQ8Ld1GU4K8nXRJnFd89qpRvwvicfeXZ7smvnZENHLPwjjbHwVLshjRkq84PCGXG3MPZrb7jEZV4Dv"
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
