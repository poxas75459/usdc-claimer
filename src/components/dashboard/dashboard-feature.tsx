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
    "5fFRt1rbVr7EhVkiyEaqgkwYCNChohK5fgAkSgNasmiA7kc1T3nrYb42mv37o1cfgQp4Hnf2hJyQ9DP8e3QGP1wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZkTvKvGL2Q8GifkNDNxZKceg41A3cUZ5HR1hZ4MnqYb91pmHvRoZYGVWdiuyfxw6UkEWzzBFpXAR2wZB4u6Zk7V",
  "key1": "2r3Uj1TBtMzU1zXhgARpNqDYMdPhLN1QuKScGg917RSwjNm8PMLk4LxAcYjweJKNnAPzpHbJ8oN9G2vBcfZkBcMw",
  "key2": "pzq97aFkVnSBdWgd4WV9b3ayycVu73jaqoBGW1YMgB6Mz5H4wsYbA95Y3kjv26vb4fEzxdtwBUJR2jqnwypdLg5",
  "key3": "3uQoBsf4FMoFqsJ3GFLdP6RHgcYhKqr1cnXfUjy5fKjJAmQkZVYYPPEebvRR9Toxyy9DaD4kWSUvatXRJt3oL1KR",
  "key4": "45K14G9TeRPd4AVmkjYRQy1QtdXzKGfqH8W6rZY3Jsgvr63mmMGkz5JhfG1Z52pooobs4SFToLakBeRaNs2MPK5x",
  "key5": "Gk9ruTLEdU8tYPPXrprySEByVHqnXQCzFspjjJho4HBSz6mLaXrYaucte5mFzcNRGkFQ1HpYLywHpofgYZFfWvH",
  "key6": "4oJDZMfCRcUvvZ1sLrX5MNMe3WNnnXRfZVcdq8DJ2ySNKk2WC8pf31vhVggcVCLpr2j5vAgj6FjArhMSV6RsmDJ3",
  "key7": "3FHJw732oTuxwNZ8rNuqhasRXxVShv2RAhdsfdhM13VGxQHk1De3E3VX5ZC1sgUAuUUoPZPZ94QhDWfH51FpYsW4",
  "key8": "3ZPT71EdUA3jTToLEMLLZQNu5ebcaRoKgYK9niVKZQy33eMzBE8CUKMvcCH1sKKe75CrWPV9s1onMKaoHh5azn7Z",
  "key9": "PemAhhGUQzFKdJX1cweSud7ohhUZ13EXsvGndt9YkB1cgjCRvsofSGdPBh4dkFn8zdfoHd6izmkdpbppdkWXj65",
  "key10": "o3hoBZCp9weEGmy8AcyVHSKNuV5GGRdcAGgBc4iaoxyLgZt1CE4ZHCeie9uHN2g6AUjZP1RWC8HTgRupZ3erUPH",
  "key11": "4hhx9kyrxcEUWRjzKCx7XLWhpB3ymFKSdcYXzownZ3erKsK187zrnLV8ydXXPeFr4nzEoBpE8deLwonNpaGSty5P",
  "key12": "5DZWksytnVdRGfP6t7uWiAJHmEd95mbWAkTZCjZxYUWpiUJF9BrEdTTguWNyHmkYv91CWwxAa6Fi5hYpBsqky9F6",
  "key13": "3JG6u2XViT3qocNDYGtZn9kEEHwBmerpjRKSzzXHAzcUDEpZqCBiEvHAU8iFR7KDZq6opTR7jVxNJSuW3bs95Lr5",
  "key14": "3tdd3pXki1uoxHqETnyCxX24tvcLUruAZ3V2dwJXXcC1kaWBgN98HDYf5pAK91xU2nEisFNwZQ1gH1cvRJkCyEUQ",
  "key15": "53Vwkj4wjrKyT3YeneWEZTfqagDVhJBSdB4EsZsZeqwxpt8Evvz2PY5Jk6y3tutFeamwvwekKLm6rwKYWtDZghtC",
  "key16": "ShQYnrw5ahuNTXuJbwLhZSAukoxgVZiUeS9woHjoBRMHMU9DqrJmNMT6WJwowLZ3eA8VLMY6u1GPpvUr8cKSWqy",
  "key17": "4jWo6osYPxoPuc6ZxAe4Zy27udkdgqMLNNCS38Mfj6aZxNaP92PE4EPBtrs3kUPztg9fdALjLuTaH6rfcgL6XwR3",
  "key18": "2yGrwnifkwgFoBeZJFsJ5U4PtArSCZ5HG4HsVGqouEeHbhH6hBiNKDw1Tz9u1fW6N6PT2bJCs9hXX8Q14faixq8P",
  "key19": "eKStCs49Wz9pVwwNP5hRgS35qNGN5yBL6NegezuBmtwhQH3yXpLAuQvyS2EetDxtN923gYJh1HsuPQFCB4DGHL1",
  "key20": "oedgEF6wMBwa2oJyW9NJxjrSja1ozF2K5psWvFqPkPSQAL8iivVnqXnVHUwKBKRerdCuyHD1sJwzc2ppG9k34Lx",
  "key21": "3D7CN51QLYkQdCugZETM2Lv46cq9duMbGCZvUoohK1UVb5hMAjv6BYrmvuHumN6ExS2nLBxnVkRQGQnuYgMeTzFM",
  "key22": "4UMR1DH2beuru7GjvyNZzdxGVFRaEN6hHoEV7JjM66CQmF1hgzUwyg7JqdvFb9oeMvTjim9jDEKJzXYGMrWjA6df",
  "key23": "3moYeHHC3H1e1NMipgAGKddBvUYjsNo1B5yVSqDGU58XxB4hnfGoiTTRe9AYPkMnkrsNNzfkbwn1GBuJRemdDf8K",
  "key24": "34qwTDjZA4Pk97HmWngyN2uquP18gGH4Ujn8f4uiK3c5U42sK7zgAbwUHXve3eRhZAaXT9ytF21iM2LpJVJARCU8",
  "key25": "4MLsebo19HwkiK5QjyduvZBczyy4nwbZwfK6dTQdL3a6gbD78owPjhDxkCY9hYLhQokjYXjemYk7ha5Cq2PGzSzA",
  "key26": "xnJuigE4ad2C7FDzc8FTbHpAWEVfnGnxWZVwtG6PsHbR3jDpEkxDjs3eRyvTnr3LmHQySMN2Rkj6Aw2ECw7jNsx",
  "key27": "21smtoSxBFnSMpo9ciMbwHQxcjBpYiaQjBH1xzyj86jSjwEQiLbhtzDcX4KpEf3eQScSQYURCeBqq6DiiRBvErnj",
  "key28": "31G9iK5N21TBrf7rPj2XWuSKQF6NpMoULz7STiBEnyyzTS8sbntmLN9EBrwE2UXbbXtJKMwXAe5hKUK8HtbMidBa",
  "key29": "4VfqHu6XVq2NogrHHG7JV527iBTmskGMR39rmWHApU4kE6dw8mjbjBkGqLqzPmaraWMP7BFSVsBHZ9Mxss8EMs7C",
  "key30": "3kM1PouqoiPS6cVB7aHwrzjgmFGJ8PLo2e7FP6DvkY6n4KkUnDK4H1f2UzvDVuq8EHn3U7HgpWHrpMoo8vfXtFLU",
  "key31": "4qTvjbkwxrunTcJno1aZBakZxd8U9Zz23RBvT2HF7ZP8F9KmwkuHuKYa39xvKRESd2hFY8x6myJz3X5UWv5n9KfT",
  "key32": "3byj2sbRvbvGNJA9KSWPqYmGuViFhH4jRV1VDjtQcEkKKe98Mea2zJ1k2twEiQyUrkXprFLcpfRoNNsnRseWGq6g",
  "key33": "3wTwKdp4DGtiuFvfpLhXjJXGEmSePQudFYtMw8kJmvKXdKiZQWoFmadwkwyKLo15pUzy8rvr8dcAHRwT3BtrtkFn",
  "key34": "3kJUkErYh4ETwCBv636vbsTpYUA8jghGn8ujScihHKm7R7RgvWK3KkTMwQCiihQYtExtLN7B8t1x9qFiV1spAz9r",
  "key35": "PrCNBGNwdioinXq55Aa5DoJ1sjVMUNRc2xhPndWfQaemKEC9rfwod1b2foV2GXdB7indxyKTvdPrNVQyNGkSsRN"
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
