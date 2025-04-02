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
    "4zMkZ2R6p8XsMTfqW8288pV61NE2Ya4dCz2Gt3wF7C6KdP5CsRCd7RujQgV5R1sVQWA7zZgAAbD6vAejxezfGD5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v1rhg3zFFeRiDXsBgQH2NZnxjEcpaFXXsDsETRcqRguMZzVcCmxxLBDALUX2vNhgKQtKHPBBPpWidRGrcDnUQ1h",
  "key1": "2T96ySZR3mnvpx3ZvuTqbEPvUeqV9Zn1RU7aLa8CCyM9H1HEzReRNdiSEiM1Kz3phHZJuyPt6VFMDrpT8RMJox96",
  "key2": "2cCsPcmiNY3pgsukNZrojMz2q5aeUJ2ni6pq7MyogN1jbCtcQdeLoBHkSjT3u38VkcUD4n2rAbjCLtnRJKjoB6fy",
  "key3": "dJWQgMyfsEgL6ZwewYjPrE9ZE8FGc18vP7c5W9yk8CM9UbdJxRtq1smV3dEMHjnDEhREdmATxqpggayhyYc5SJD",
  "key4": "2bMMos8R3MdsXHRLX3k8evJKvtoTs5xMM2JbM2uhKA1ZgVRu7Z68NuqrTcQhRXket88qY5zSUYZffqHJ4ubjPK7C",
  "key5": "4PXmH2WbqBCGjv4vbA2Mk8MxMVS4sLkZHWnvAS3GLrZrhgb682PMkFxPmhRK1d321Ba2XTqCxyRwoYDw2SYZgfMV",
  "key6": "3VF6UAn2mK2j5E1gPeWzrpce8qLM4QLTfNgVW5aJn1uFbXdCvponE41cGXCNyEEg1fZcHFcm9yj3WXWveQpSNJkv",
  "key7": "2k8F1MZqu7Z19yNhRuHZUthwmAkvoR6sByMBQfUWPCxWuzE5f9tJvGTXG2TZe8Vyjgax9g9SYkKoJy3xLFt3NJAe",
  "key8": "4ysTwvzsEwXhPykFN4vWGFkzRkJabWiBVYWpfmWs1osEmGoaRNVfU2ZvDY7SYTHt6HqxUbk2mDbZg6f7BtUdVTXR",
  "key9": "4rUbsjnTkd5ZcaZsZmfGkrtqYbsXgT6Qy8LL7rCAFtLADSL66rsFpFnHCLNtbmVhhLJwRUr2NuXoos4jtY7N4q26",
  "key10": "2wFkbNoM3EZ2Eg1xXCa2Rt16SUwXVgkpXHsP483QLC1EGjTXKEtsSCqfmBTPjREsSic4ad9c3gySzBjek3fF6oQT",
  "key11": "4L2mPBNrTu2t9vwM9AKDU2iKQbj5NG15pohS56NPu3xMfnvZzfb681Pt6zvYWBCs1is69V43PLjLPREhuaoJNsK3",
  "key12": "4Xh5hRbNRD7zBcNktYRFG2q9dkpGu5rDX35itPUX5WyPikyE8m2LuTtMzMPox3yhbPZSQ5pvEyLaeoyMTJCkG1h8",
  "key13": "2vsydmf55DE3VvxCSwekFKnh5gjtV2yVnbmeDuTChoFPY5phvB7FMPHjCAHgTVVev9HjpgVzzhHgRnLEz5Lc9ksC",
  "key14": "2LhEdJWySCRnvbBjfemCyg1eAenTvrHWsk3zFeMnaHZhPJGS9n4Mj1fLFeDBnuBpxekqp1pXnhgd5MHsLVYhRvHe",
  "key15": "2dufEDdqHEcHFavpniQ7FQE44HEJfrqPAszPwQNJaM21BK3uonM4vYiCgNccegXR1CcKEw6nSyDeXwyoQ7vXHtap",
  "key16": "592u8Wx4bJidsgEt8sp1JKSNmEC2ETeZyYWPp8Cj9vYqCYKWgvouwhuJgXvH6fURBt2v38fVmTqTDXc9foQq4DWZ",
  "key17": "JHEPGm8LnsJPqDttrA34dJ1iz8T8wBpYehHZavPnx2mSZkrjpGZHR3hUM6JvPZf5tXCUqSfmD9dG3nzBkipHCTn",
  "key18": "2Y7vpAGT3o1RxC3tfs1W43QhBDpuu9paEzppDEoYovfggSV9sMAZwyZS6gyYcBxWBCgKB6smf8EdEPruJjuNMZ3G",
  "key19": "hrSNEfNMrMYneM4PLBRGJ6xHhgQ6iMnUdYAPxe7rrzhbRjm4izwbQbB48C6QbgaHr17BnjEPu1sdgkPbrsj8o7T",
  "key20": "5dqZagvCAc9GJcXSZ5ATA9DMxLJi7PDdTs7SYUTio6txLZ5WYU23YK8taqHGJechT9aAESsdvq6QAayj1j6NfszD",
  "key21": "34m3p9eb5XNJsNmJn2bbhV5TLnApewgP9HMcVr8fGbicM7yWUsyMXXo76wkUm63inAzBnsXYidp8DqUfWVsfyjHn",
  "key22": "2FU3we2eLVws7S3x4kAQA8Js4dPSpZxDzhHHWEpwy8SuukguSixuyrxvzXn1qBzqvBCUEWz7dQHc5RvgVXjgN4NS",
  "key23": "3h2vAswgdsvjWTK92KKuZYt89gxWfEgdNPoC11es9inZ4bgNfUxgp1ff8kMTGA4hUa9J5HTB3Una29iAHTFqT14x",
  "key24": "5XqZp3nYkwd2kQWGsyhPTwTbBSgwgo1NadqsbA9yZoJ6iEMaugCUQBT15qeUQuSWVqRNTy3ubULRm9E2GjVjfxUX",
  "key25": "4svTiwrPQ74TpJzKBnDe5Gf7WB96vqVaMQjtKjruHEKRgxeTqnuHqZu3RQ8BE7KrRU3PbJMpst5ZcL4iVZBxotXg",
  "key26": "2vrbTAr3TnjUiNB7dybgFrcUdGgZpJ7dKUgtgUDWDGvR8SjJ2aKLkxV9utcSiEyj2JN5EKNkGpERHinwACxcCwrD",
  "key27": "bmDAX6XyWnabpoqFyBNseCNxYCPtHhSTnqngYaxEWt2rBjVDcvzUUrKt5oHiwnCK5DN49dP7srBaqQG8Fd3SfuJ",
  "key28": "2hEbFLCdte367GJ7DUdJEPdfcfdxEhZSKbgTpfBJPYBtVNEHjMbceJ8V5g1NCV4fN8jKsPi6WPA9TFM4M4N8XQzw",
  "key29": "5YRZro63KwcxabCcFGES68AypuLi5naQXRhyvXDWzrXcDompfmcJ8UT4cxA3JX7Lh248mMNtbRt9VUK4bnsWzoqk",
  "key30": "2abdobm9pBsMBNcMKxhhq5zDd2xm3FewiLEt8XQ98BagK9ajFp5QGpuHVa91AP8aeQHLS9ZvYhijmcs17KAEJ6N4",
  "key31": "5iwU9jiQrEyZZ6qt2KXWFZ6hs4Yapm5jD9Yu33TsbGUbeDhFYRn7MpqbkBwMEow192sMoCb7DY3VigDqM6dxSKjw",
  "key32": "4YpgW2uXj2MYrHqdp9CswH8bypQozmAmhX94whTU6VQ9oZRrpvY6gWXAu2Yt1nTdpMC9zS3zBnJfkzndtuWGZrJu",
  "key33": "os2TyPqLQcVrzZFRFFo1hUY3HQe6ECoEkUkDVLMLiHsTv3mXzykJLv5FA4htUxYLuTk2eSSdgx8FecJzyBefMDF",
  "key34": "2YEFJAFAkTKxGPJqgPfJhDkX88rVD5KMKYw1zK132ery5yhYJ2SY1MLYGqwDZXNSy65Ws2T1V2rTjrqqKR7aupj1"
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
