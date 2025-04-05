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
    "5czQHVw1yGE7fiNmouuR1iYVkvmvHCFxfAKK4aDwoTgGa7hsUJCfb9b9ExKqbLDqdgvjYhZdzyiMpaqqpatuw2JU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QtpZFXg8P3vPhpA2nCubiqf7JGKPMhBaqR7CKT7GZcgZ6mWBvu2T9kvtyf7QQwg3A4o1x9BxuqwiggFSu2hzt8a",
  "key1": "Fd5W3HqWWZHgZMKjqHSXHxSpc5QSiP9mze7Ub1uoSFbJz8zNLCGrzkvbYzsKoRxsSwUowJwCyr7ihkwNviC8Xrg",
  "key2": "cfur2XjJPhv7jMckVGvFyKuNniaixq32G6pbK4Lk6pKLWwzYcXwSvAN5KxNSRG47mN1icXntNz5BavMT88FjNTC",
  "key3": "2YtPLoEMHrUBnFPYYU8VsiGT8AxwCzBnG1ysBnbsb4xSjy4LPCCbDgweFwisAvxGGucT6BpiHwqjN2UZqN1tpZ3T",
  "key4": "4ixE2igBNz3sYyjcCVjjuTc1nmz67z9Ny11tsBYmgNJcBSWyhxfTp29abrMrdnfGyhKSa3Kt9ejZhNdyE8y4jW4a",
  "key5": "EzG2rxm5YPgkGKmZfJ1vvqY4TTVmLtHPLqFvKg9g7oeR2ek8d5SrjNTftVfH3BsCd2U1BWgopacRLeXyc7gV9Rh",
  "key6": "3zsLdnk9SNsX1Fo1x5mFqab1FpR8XETnsXMNioiW6WNVzQVdZNcUYKaZnh23Cxq9FmCnBSYfoDkfXC9N2P4rC1PH",
  "key7": "2hD6QX1eAuyTYeAfHYvRfLpreVGYCpremfrVAJowhZCStP6DEtLnBZTK538H79VKtvhjdytpxUNWNox623or4gkv",
  "key8": "3wDmsYb93n14fZYJtdFSXFzMCSe7brw3cidEd9isFmSsMS9jyKLEBKjm8TxF9CVqBKFmWGohtZPTGu7wjXE6JWGF",
  "key9": "5L34FmMDpwQTQnQb4Tc77PM4Rhr4NAJmmP6bpBeth1UXuxCotq8JKbCCwKdUZcaK4yjoUT5VG3fxK6DCHrcFjfvW",
  "key10": "5DHv7iffH8XzEruSZkg8thVAvjy43fmGZTGVXztrMWBxVBS5BfLh2314amwryjAF1zhBQnNLPx467XegZ56Tg4H",
  "key11": "5gQzo5SyLm32xGRxqB5CyWDraa5pUNNRxBC4jgJBYpDWQtGAaFzrSk96vSnbznuYQcH41KStMHFv63vWMreXDW5X",
  "key12": "3WCPa3MGxFJBymUDDWs7BBNnYZ7fhhjymj1F7YRbiXQuvzt3PwYLv1kZj3cxp5qQbM74jDyK7QCACeZ7gyN2mWPY",
  "key13": "3zg26DYi3vzJffjfe8VuUSH3gFGqc67ZebX6sYU9Xa7PTfai4z4ZJsEhhhtH6kEXoaDrv2jFCXzXiB4Uc1dspiD6",
  "key14": "2SZpKHQt8X6qngHwriYjMfhNMMrSvDWrBVwVUDpnbBT9Rp6LKPCaREGpmyWc4PHzyYRsLgRmRtXg43MeDeKDLR5n",
  "key15": "3beV2jucRPhYBea4LydLu4A1mJgmSyJfRFvKUf7wRmYM7n5pHbELhyzqwwNGeo1eygVC7mqnoECZVvMBbqF2FdxB",
  "key16": "qTEzYJ4FB3G5DRgT3xMKwDGub9vyNJE9H2b2j5kEVXX5etVkBSdfbL6hzgiaMbY4vzGNcGr1vaMg3LjP9zgTwHK",
  "key17": "537DybijxESbiEaa2h4aFzvFG3sjziisyWwSyp5dR6QoY8KuqkWAreNUEB6HxGb4UcpxED3ECENChVP6Kh8CTHr5",
  "key18": "3n1ojviQcrJ3ebNp38yVTgLZpUuxtsdQc3U6Aswx9zeWfMUjNkXEhcn7v6Kx2f3RnPooP8sbgNwBBRCpvuP6TUGK",
  "key19": "tawFiJhHtKKMwBvyY2n6pLpSJKXMXTvyYpZVRv1xeRZNGqouwUQhzWErVMDHSuFx9hiHTZzPviyUpiimVCvFKy8",
  "key20": "hw6RtpFgqBZrugi3c22GDbFwyQ7ZTGSo5Q7Gnpi1ZnZGT8X3hSED8r5Pwsct2uCs1Cg7QavbZsTwRvTrGfu7QX6",
  "key21": "5AyevE4ueVhviJWVunG7geRKxT4fychTTkAS12sFEH1g6vjMmjwgotQGh188G1ScP3abupNVcySLoe64HWHda2Y7",
  "key22": "2FsJnNmpp8hvu8ZvjfJJCwpvJjjM1A6q86TBqjtLcCKnNBeHwnvbVaXNXgCxkCmrH4E8i2y123xZSdQsswjbYS3s",
  "key23": "3wQZCM1AJ82HHwFZx8NhUcUmg1JXQRXBxyN2R6Rnomt9mnQ2BdoMKm9k7UcuKdoGgJhRMPMKk63QwEuGPbKAzGSp",
  "key24": "5tm1yZoRkkwnTfS3ewvZnzDP3sEHRX116WDi5gard15ikWcNe2SMeuJbMhgR7FK7VSXUjkpjjsu3m46u1CTEGfsW",
  "key25": "2xyTRZD74gu3kxqnaKAFETVM8gW5vvFuXuMJiU8N7dyzxERPQXax7Wo5SCyLz77PHuswzbEnp1doVvWcdoPsNBuT",
  "key26": "UxYuKu9Lp7TZKw7vsxhaQh7UGb629uGKLTSZ63Y398MTdHViGWsmNUzQ53AYcZWfhgB4Gf2Kgtdxnxvq4SMhbzH",
  "key27": "4vuKKQmP17gqqySqRG8Ph9Pv8BV2TEpR9wKvo5PYq9MTwm9NxTgaFrp3kE2qAxkhPkzq7hfwzw26p7NN2MnoH6Ti",
  "key28": "3tur3jHzj3gcasURaV6RkQ5mrqiRbViGGDws3CZDBWBrkrRefNrq8a4kJiUfvxJVaK2xeCB5c61UCAdmM5h61JgC",
  "key29": "2muRt6kvpo5bikb1n4Sb5BJS56EU4h2XKEHMopXhoWZ36KWj58UddtUizWELKFMNjZgaMBw1e8bHNEMowrRZn4CD",
  "key30": "5Kfqt1hfCH8umGDJiP2ALDpWhErniQy9oJyew9DaXEBm8jcvDvAa2Yx7Zab5uAm43Eq6wnWJUamzQvdYg8ChjgpW",
  "key31": "2jcd5r9sy3nnnyb2HidShKexgQTnt7NL1d89raExJZ7XZREkPRhrPcga2sKnijka48qNGDi9D5ELZWDunbENmvPm",
  "key32": "DHz2Pcdeum6PZH7sihegLiD9T2AprcjWauk1p9aHw88RERU4vKmuHdpmdADhb7n1ahxqJbTRJJyivYjedSR8xuL",
  "key33": "36f4Dvfaq6CQZ9qFmMXvTzyiWB7bvFBKh3JfAHBGEAUYz8h8gka1b19LXruGUVrdGrCznqp5BkPgEPb9fxL8JD59"
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
