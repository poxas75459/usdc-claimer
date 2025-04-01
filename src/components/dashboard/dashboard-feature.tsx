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
    "5EUP3oRyrcotQsPYA6PWNfVxRpUkw4pYeZEgV3gvcm8S7DT5RicjCjdcTdDpUNkqeCTT6RLa8T7wcuSnRXe6YPeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23EEY1amTm44J55Gy4e47B5T3zDWptXBGV9Jd51qADm4JG3ecarezskzpyjEVXJUK83Q3FwTvHgP6wk3UFpnfpV9",
  "key1": "4kQtj3XUnW6JquwBm7p3RM9k8ywzq7zRC56QnQssRhJbPhMKQfcFrYqqdWLnS8nrBvdLHaqJRxPDoJUrLpHiHQzJ",
  "key2": "mVNE3hyhCfsTq4UsshYuR4uZuMKQGh3DeoHwKFQMSw4T89Ug5yQ2JNGzf4eQ8iBW2k2G4tRmrDnHwh8kwwcL5vc",
  "key3": "5ekSJ3znkuM1YUteXPQ2biWLiPbQPTJQfUwEihX38KB9i411HjnnTh2KDhYH3b472YX2tegQxx7fyfXkcmSfM5h3",
  "key4": "3rUnfwWSJtBHAYG3bergqRVwMoxrP9m4AHPzA8CYYqQPHYMGpBHWyFBkKXqzagFb2fF7anhcazJ966BAPqf3azUz",
  "key5": "28VSk448YBMBgPugvEajnPwm73gghWuMa7oScZmxJ2DehZrDuB9NqP9EArM6acmiYQ5WADiq9YoCVzZJF7a22fwi",
  "key6": "24EM68mBe5eFzJo5NSFfyiz59hYLuoxJLRPBHcS9iUna3UcMWtJa7jpeQZKwHvnWP737dHHjTP23oPHBYNdNDguV",
  "key7": "2ATLMhW5xciy4TNXTFh3n9X83KtjadnVJtLA1cnd7UCuEMdA7nCoJXbGrUXC8dzQyzk3zFy3Ei49GEmKfGBKFuth",
  "key8": "2PoC3sgDCUAjCUBBMqwsdL9e9vM6NqYvoKQ6NGcq8cTi5GbtDygdbLwAcnS5cvmsCyBDsUxQq77NvxxFWysLdWgF",
  "key9": "2TYBuCba45x3b6psM6iJvbpxMxNjEPVWwE8BdZyvm4YZAvPzcmFPiQ7RWuPyfMQG3ubFKMrCyTVTWuLFAmZmLZeN",
  "key10": "5Hd73FDcYPA2KK46864CuzNf5fNYrsUBQWCVxpfJ3qbV2eikUwVQ3k88g2Ax856Jj2sgaxiGiGJswJjLXkTaxb2V",
  "key11": "5xeuXSCYbKp2QhP9g239M3PaBmDUtW2utPmbW5tQ3epiuAJHjD8heCRWZsrg9iK1nZvCaxkG6F8HPxboTJ86NeSG",
  "key12": "5nEgTGaEiTBygjf4A4m5QPWNoko4FNavPobvM2yit6vQ8QsPb42XEN3h1FvxH48gpy7o671nVLbHc36NnHwJ8bMr",
  "key13": "4GBbHvvecCxrDj91wbPadwCmiLKcijX7axm8Mjdkk9nSjQ8ayKvLHpxSH5SfvpMAgaRJa4hNznasTz19KFJ663uG",
  "key14": "66gziEbYbsD8yu1JUcRP4TwKNqAezRWnwuo8vAmmffR4sML9tjAq8zRZ3HdCK5Hdojbd6iK5vnwRTzrW6ya7smDo",
  "key15": "2jiLMEkJAWVeemfMU6jUagjmuKpwqq9bDz4gsFV3kaz94C4hcd3ziw4C9EZ7GXwaQ1xS6HHtwj9kQyQanuW3sycN",
  "key16": "fvCULBHTdHRm3U8dPNma8QtuDdFJ1bz8dJCKQAfMtoJhy27NzMccwxXxBQDQFCwYoXAYdNcjShRtMo7SgYAVamK",
  "key17": "3GQuoNG3V3UkTqYkyVaTjZd72oZKZ4gNJSg7KXGZaTByLU3HR8ZnBsQQNKdF6SXrRZvMo2gBkWAsM9f27gwicrQw",
  "key18": "mqNBZpHbF6ti7xKg3SyQHyDCFU9imhxHBMVdkBuEb1rvacgcL7mjh5fmnjFHVuL96VfjQDrTyVvnJ8GWJWPc2rY",
  "key19": "4eqTAFr8kjhuC8Fffw7DhquAjCqtKHXo3YpYaxWiJfQfE2AgM7PD6jDu2njJTbhniC21C7itA2iJ4D77drgMaACr",
  "key20": "536jSCuY8U2zrRHVbQVcGd2snN1LTq3WD6gQV754ccJPPDJZvQ7FwjVZXQ3RuMAme6BfEx8C8GTVNcdbU33NkDt1",
  "key21": "6R4FpnoMv8AwLCXn6sbDjBjRxpKZ1BrLyNinps8yYDfWZ39rTHMSpTvrtpq826or9aGSQqjJVofPvnDkciHqY5i",
  "key22": "3qnNoioT4LdJJ6iyA8rCQiV4WCeZdCJkuQ9CCqV36yCgpPbC6hvSMYFH1z3HqPUg2FiXwMua66Fre4P9watJoWwn",
  "key23": "2CSxXEm8qksgvyAyyTh7Y8He9VwgVfnGRjVecXitBp4VHWttajQ4x2ucaEgoTNDDZDagAgnmLKn3aGB5wCCcuXpD",
  "key24": "5Q1UGntqgEPcmghLivcdSTxW48bwXSEfj4drkEZPFQhHfSVVDzMTTXungs3YyfeghZuqWJg1tW9epqFL28ZNbjUD",
  "key25": "4Vycpn26vpYj9n1Q2EcYiWWxa9rQmCbmhk2aed1fVg5CLf4EK3R7wJugEX9yDTJbNTxtRwG8ioXSKxmW7aKDjx1V",
  "key26": "z7Ad6bCpErVKgoQuzqkutrbgUPVHLuRMCwPQyweTo9eLZfjXfNnMvkLQb8DeJsVmUJ5LvfnjdzEkzuAgDQqPnfF",
  "key27": "4qEmWUGK5fhZridXYDnYmSmaTeFPeB1sNEWyEFAsQmcw9aLtueFAu4uYYTqqDbh9XtvEyShDGqUvHc2bMXtTWApB",
  "key28": "5BZDpoVFAAXAjWcviggtJgBpUuTXXfjgc8tGMzXCUa132jfHAnkkCqpttWTtUeKWzFaJhtVY5XjyVor1mTFYKAgM",
  "key29": "Mv7Gr3BhHLoUYgSgqCZweewmZ8jNCgafxYdcPBWuLY2iEW1w4vmipZEunMUM5616yuzXxmB2WiA7QBrNLsUpAsy",
  "key30": "XBS6VUafWbZ5JdpLq97FGene6Tb9WgN5KuH9eQ2tKTXv8xgyChdg1rGZPa3y3B5JFSYajb5uaNSv2D8SXzGn1Mu",
  "key31": "oRSiuu9wRMdWd94CAUeoeXoR53qy59xZ4tXS2hWZTNNQvqMGQgsiCGuyupEQHntPYJxb1pGJbpWz86bzWPmUvHg",
  "key32": "4frKfowkYVwu2JeSVG5Srti3Rxhdz6N7gow7ffTFBgUXdhLUczATx4LJwTAJ3rRXHE9DtwC3FYrFejfEUA8Ugq8M",
  "key33": "49LZ6bxEZn1M6WfVLCeb5zJEmU8AdBoXJPcrohF1t8YMicLiDtSBiob2AS9nnjznQGv5ZyUhgoLrzuHxntkUBwwS",
  "key34": "2YY8Dc6bpGPeqVQgC6iCejdGSno9GERHp48A9BW5Y1DLTaLsoNqEf4cN7ioNJ3wEuLLdNxERshAFQTG12QVyiKTB",
  "key35": "2H7AqwkhQNVd5jiZidofimgu7xQuTmGHc34Smkvf5EVx67GcwQ9CHHbBQCfcjKsxpagMSMJEd3cqLm2nMKNE35h6",
  "key36": "3ZpJcwjZv1Nst8tds1kMwGQtHhCboULCJUpwG9weYbGiWgQR4Y8i8unHCVT1uD2EK7h3u44Xv73fgViDTS2s8tv4",
  "key37": "5ecwaQBdeKfM9uyaP8e9EVVRpNCiTwmx2W428TrZS8h5o5cYFzG42hrPq3XuvJfaH4SHJPfAvW4c72G8b7iagMf1",
  "key38": "2hbDpVDPheegBykB1ZMiosdESXhkwNQsKbsqgGURyfeMxT4kR7EadkCRBmRftFmZQSfTAnEUkzRTnXtjhizY5R4Y",
  "key39": "3fa7hSsxDWpPyoWT3eVaJbJ7fppQBKwVjcuPeczn5P6MGKPSjzxv9XcCyeYJFCq9aCb49KxViVMQmY6BQz9EQw7c",
  "key40": "3AhRHFkqSLV2hgJBNWUEcZe98kwyQ5aqehVPH1Sg7dJ7c4JEKesB9R3KAg5mQioyx7UuR6DRqrHka6ZEe9U69sTq",
  "key41": "2ui1756jrgb58TKiGacGh85oHsPtuB1NnvijjrG6dwe99vRiSP8HJXkRaX6vL6TZUky1wx9AzxsYTLjMLbJ7eEUp"
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
