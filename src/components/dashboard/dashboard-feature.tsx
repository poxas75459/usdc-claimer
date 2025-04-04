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
    "38ScgXo4btN7HEUHB4vP6xndqc63PiNBsuKfj1uWZmSkH6g9ULmNZ3EecBUZksKTBMDyMzA1nrJbsVk87zUbNo8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Tr6JDhYiTh2TuL7o8KhUriksRVqL4VJXDHCvK4nEE2tafXMKAq6SmVEBzytKk6AV7BkvvF58auW7VqfcU9pnFW",
  "key1": "4vSiVFbGiMMa8aS8RYwrU6i4bSw6w7Ztnw8Gy6JsrDRyq14SJxUACgV6GH7hTj8EiCAc2n9BWBCxG7S68EADZHMa",
  "key2": "S1UgrVR9QPdyYRVwJyVERRcnHwuDFz7vtrXK2yL2Pn6pDxH8nU9wpPtFJw3NsoHYX7VXCnSydfHNGcr9EyX37eV",
  "key3": "5HUon3G4YGjCi5mNqbdpNxok46q68vCSepwSzKKDRHiFUECJJeEp436JsVQ6KU4b2QYWAoPCXSC38XQD3SjDkgnL",
  "key4": "34nHXpzD1KnJRMk6p8Z7S2sDqB1C4k3hQXwCviAvhVrKVo6DzcVidzpjCBLbYuYxZM86FEW4tDmo42uzP6cz3CSP",
  "key5": "KVVb6rEpi7RnXAdJVXSC4PxD1z4H1AExjKEUPxFp8eU6m8jseseFpP3wcNKzb3B3Q5DuAap8BoZbLYryMRRW3Zn",
  "key6": "2qmkUFKJKjvTb577jf7nvBNGBbArjiyVMF4tnu8pHpHEwXd7GoMaSFyFJS4Umg6PN2R3Z6SdRLv6Rr6bViPiyE5b",
  "key7": "2yzPb5KYobxP3crHwH9Qdr6Yad39XMirjaudMCphq51Hp9mH5L9RvkVMgEBt9jDNLaYvGvBpVShmKaDKVbqNZK7X",
  "key8": "3PAa3183f1DNCFufbxyqKAENMgtQzagdEvRET8B4ZooqPUEBGwZVLtiSEnYhtKYf9x3gGVvrrfWQ6mc1D8U5VVPZ",
  "key9": "4b7guvQ3GDCQxrTVd2sJa9pqjoTJXDQN8kxg4zqg2Fba1k3ch6ViepouwQDVJ8jvxFk9AhEScsSZsUP9cNz29wru",
  "key10": "YQd2arGcL8zFMKr4fpEzjVB4F53DnnT4ZayDCN8BpMDTBEXwKA7KBz2ZGTp3wagJvxuu4kRsx2us8x4JwNXs6K5",
  "key11": "1ToEpYD4TENVyri6HNzP1vLVB3PJgCtwGiKYD5dabN6uyEnf9ztES7vKHSqAGvU69FyLGMXMFNurwVjtmsp76AH",
  "key12": "66ywfux42JSutx6s3J1ZDWbuk2sCAXxjDJVDZ5AQ8NRa6DpoB2M3Nz7pGQ5gDsyySkiKFAoUVu28tKzck2i5PJTA",
  "key13": "NYXfwgA8jazDDoBFYWDk8D9cvTY1E9DSiNgnmGMPJmH8MCuVCyss1SZG8zVZxhqbU7Sq7Gd8NxRCyPZsUD9phvt",
  "key14": "2uQi2kAi751QULu8PHzsTNxTBUWbF55Fox3fh6afyAoCLRbPEh4iEs6CA11QjziB9R8XrA7cDitRhfS5iKBVvKhz",
  "key15": "2cG7PwqU2HFzLRRzoEtBLJe33aA1Yg9jwFEK52NUMHuSnBPyNQZup2fYGkyGRXEajfeTfx2kpZoeWKBYDJFbBoiU",
  "key16": "287Nec2tihBfbAuw9gQDh89YAivhkoKvuLPfqd29ZEQiVaQHeNS7gypWkCy7e8sFfwdndUTFUKqNt4vKW6YEhjmj",
  "key17": "4At46XA7dX81AKVgqtAkXfqKYr2FUbVrNKDazM9QLLuqqbWP9kwH4c3YWRSDAb17nNN5qC5XpkaGC377XZjV5Tb4",
  "key18": "3ndopR6oEAdPwkPHTZ63jVmxtFv2iJ14C7xsKeHCBhqFyY83Mh6HhRgW7paqotUyi59DWqPKTPsSf9UdenkNpu94",
  "key19": "VmYiJKzWirHojtU7UbMuo4hX4sggYWfb99SrSqbB5vgwGYfggGqoFQA3HUoc3fbc8aTq98YDEGh78CFFjCv87Lp",
  "key20": "3Z3nP4Z4aYXi6JerQEkU7WT1aZdHwEkcPh87kLvqgikr11ZnfFQHthYXC5uyav1GKVuC9DVC799gkaZu759CiDE8",
  "key21": "2hFD8ye2WMfpZy8cwHSejidk8JNH4fMfjQ4rLBKFGHSP2usUMtgqvE7f8YJDpxgBvS5yGYzoRV2Vw9WyKq7M3Grk",
  "key22": "3JsKA1SHXRVFTwiUg2BAgqGjXv9LnDm11iG6buRjMj7BtDTLQjd3t52DbC8zCAb4HQpwHsQRBntnTPiBEHmGkoJQ",
  "key23": "2mQShSsE7vaiLY1mfyguwcJ6hNY3dS7uvZLiewRv9Tbq3XyzxLXHLm2dPU93KHLipmZboyKZsZvqaU8VWfPVHQpc",
  "key24": "GRwzvyetYdiQbo2esTvC1eGiDZue6LBqXcbguEr2tMAHMMRymy58iztzyzmULxRmZcx8STvjEsaC1QXqAFf6fHy",
  "key25": "5D2xb1T9TmdZgbDfdiwGiFAWaSWWGBcRSJJ6JgtAjnF72yhnpRap5xGfgkjBRG2cnmJJPkNfXteWWn7cXNoy7t4",
  "key26": "38DnTeb9jrRHXvaSrhBCHZgkAQ3CFZnnBvQKRVZo9kUreUDVAZ8T5Zfc7T5MSS21F5aYfwEyGogmAEY5azRL5VAP",
  "key27": "4f7qbGmYuRag8M6q9jH9a1DR1hwfR9hV52Lo813MBuJWyW9dd5FYb9xtJoWEGzZdNP2phC2LXvrPYTqUkF4ab5tP",
  "key28": "4mhxvE6QAPLF1q1Ea7D16eUjTF5CJZok4EfzgJ27bkj5xsN2ihBzKNz9VVi1QqXTAtQh2jwCnPMJyKUxFtvfeaEB",
  "key29": "4m4uEMCEehAQyM3KiikNxzBHYpr9uB65e7THpJNWCWSsLFiXaKaMz2yZ72eSs9pAuLAXoaGQBghdHrdsd8vBvAUY",
  "key30": "2yft9c3yLSgDEsWkpeYKTqM5PH7xVhDFoFqBkFgM8z482zv89VubVPkDUCLvC3GS4KQwkDN3kfH5JZjVCe3yKskQ",
  "key31": "48BXL5Z5wwyopszhnrc8wRzn9ThWfrU8ErDEoSwrht5w6GLu3fZUUEJv78UDmezKm8fsArDcYLGAVuz4SySLQLS5",
  "key32": "4CxdWqVnTUzkGqmw3ZA5KCfgQtxTBGyTXm81jqNeeCqD8KesYC6UwwpD6K3fUH5gg5oEEDVf5jcRwqEGDv7wQ98z",
  "key33": "43B1nBHg64HC93zioQXqejycCEDWFh7W2nN4CBDsVja3VjmsofY3BA9xiiqgFsTf3o3C1WMzNntDNeBGnjr5FRJf",
  "key34": "R8ckqy7JJAbhqu64HoacheBF8siH6n37sadgrp7hFzPBVu6tAdVtQunoyNTcYUJnVKsCd9nUS42xWk6Grj9DMhn",
  "key35": "4u3tKUuwvsHfZbvuVprB9k1Qn2z2m8VMDETDJSzC9yoRpLmaGyzDHftnZaJgQVhxZiTuJjVaniKpWv1NmyYhKibn",
  "key36": "27MqKY34FLqu6LemzDpYtHmsJ8P3yKLQHHnFc2XgqRegEqRfxWnZBLk7higwcF5rRxFg6Moo9TVoMx34ZDhsS2wq",
  "key37": "cDc9owqG2NuhsKo9sURc8zJnwcF3UXpL55wLBBDkYQNpjuVZ4yQb9R8vhG6hhjY6VduaFbR4gFniuBWFPoNhLff",
  "key38": "3F9J5eP9cz8vGBFsXjCCUWC3xUjT2HhfPLUdCzSPvqtdDvhcHXSQLAZedX9ii3ywrfsxRUvP5g5d7e5CFA6K1tN6",
  "key39": "dLPPT7TCUm9isePrtr8Cr1SWqCjfxuHPn9kWXzpwAb3x5MNYWcBMLFvKzKzrXaZ1J5N6uwYsiTNGNjvx1mSjAWK",
  "key40": "4vnwoNqj9cAGuARvW7GFbvXNwrV4gyQQonxKMRgeeJNFF434kv8daZyFMMPqHQmDT2CkpCXGTce9YnfB2cywnGGB",
  "key41": "33Z3TZdT6p5PpHBhLEhDaxsvqojKQ7MvzF9d5aGhTP1chUx9nj9yQdoMq4TEMFpCYeUhQiB5h4pfxhjKyLxeNvZe",
  "key42": "3fZt7pUdwDHahjGKke5coJCFy9LCXPx6p3oZsmkA2vcpaSZbsBUzK5V3XZmQHLWjyJ8ZPXUQosjaRYV5qZiaEFoe",
  "key43": "4QAy1ELfiFWVEdYpda1roTJQLfha4J31L3erZiRVSDi4jsPQR5FHv5VMcFoWYM2y5hD8RYd1gx8JWmXSiMEwXF3i",
  "key44": "2EPJUgwrJm9NBa7rsu29cSxvrrSurfqzEW8VVKYgTUq8K1xFAz7Yn6iZNWSTn6BXc3aFUcEmB1MZ7rkc6hyx6yK",
  "key45": "2W5kP5Jt2xgkCHn3Ny3H8uATBxwFsSYbBjjC8kUrUSS2WxJ5JCDp7zrYhe42AcjCZSoS5mDwbQrWCTXQ8139ftgM",
  "key46": "3j84sUq1r9wX87Y4B7ZFk87tbvvy3Mz19joErVbwBuSoBBZrCA7wbPDFQpx1Lk1yr46zvZuBcwQWpLkVUQQWPxPa"
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
