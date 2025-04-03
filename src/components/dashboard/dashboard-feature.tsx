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
    "EobmgD8pRaorhsCR4GnhQ3QPuZpNbYLJ2Ypj9eoqaTCwMjrKVFSpVuoinzmkLMdg1HZ8nAThurqsox8wQL9ybXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GfbxZJHUmJh81cy1pcUSmbzu727Kh6PDwn5S35k68dHD4u5HJeggCy9t1CkpzETiK7mqZTD7hFZtMiAitLqAkcg",
  "key1": "5n5MKk2U411EjxbtkEfQhEs7zkyxpxoEhqpGencdxFLZJzsYpAArbb3H3kC8861qKYVjyEPtzECenA9rBBFT8aRS",
  "key2": "62bC4MwarPdQVdsceuhFmW86gHf1sZPENChywCFhRJMd7YgeXB2VxGB8JptVENRfCA8WcyVUGKt4WZaxjfo2RaGf",
  "key3": "4cmFhSjhYN5MAB7Yq3vnD8ySgUEa2HPBpx1dX1AAszzz35UZNaVDkdDN8LCxFq782Gb2mhZbvQbYwkF7ouyKnDsf",
  "key4": "2zYpVmYPegUtGbai3Js5nsWqwaLbVoKTqogCANq1hQ5MQVXEPiHxEuiV5SFzc94BQBkz636VvcGFC82phLufx7eF",
  "key5": "23weBsEhs8zYZXo1npjz5Qug3yv9irLBDqdqNeaUcFDMxxda5s3CorRYwHe1QPh1K9Weyhg4Qg93UpdhjU3HRafn",
  "key6": "2RWD7Zq3kt2uiGxpS9UCxHE6vxECeau9DathCyHsZb7fhsYEyXaZ6K4MxzRVWsouf4HgAaYZQ17Pk3Dw74JUz5qN",
  "key7": "4fxwLfDQ7tp7m756vzv4TSBzNTdTVZxeYccAotWrb68KhPr1CHdB6J4h1MRxVEQkSMH2K6ovagJGrE3yejB3GKry",
  "key8": "thb9ULo1tbF3KRzsR7T6VtsTVoyMgB5CknTZB8trNAFtZgHomNwWJaREJpU9ccTZK9or7kVkbw4rFQ474gTGGmz",
  "key9": "4BAbQfZe7RadzSUUwgSJUyq9HxBtkHDKdAPn5qWiMpv2riMSsppWR7Gz79PkFYP4w3SZUxrhAfWNv5BkZ7Y3hHpz",
  "key10": "cDTmrYdLky51UyudHZbau3LDe5tm4mwCQYg5SBMYNtCaD2LJ8t4T1CiZbK87BXUjwnXEZALvvf8gYrVyTt1eN1N",
  "key11": "3bseLkRAsjBhMT5AXPaLLTLE6Awc3GZtmB8dmtAfos2w7DpLLP32sxyUa17rWHBU8RXK1BFC8tFFZTZfMdTBYcuD",
  "key12": "62mFmE3q6dM4YrgQsRYpQWPsXFCiv2rzG42FkDNiLu2QYmxLhHaMi4D5tXpS47dH5Tq4qnrADoVsvGbgtcSGqLHP",
  "key13": "2T34oYowbj6SpeLBAgXfR8cyCs9HfGsgJG46QqjLKy87KFr9B2tLuaP1ETcdt9JdQfhrkHYzWQe1kZGDQdfH8tC5",
  "key14": "uzns9L6kz8Bdnw1XY6hkzdFEtafUAQ7yH9VPQpLPbDTY9dgzY2Nbgpc2HdxTJoNofwFysoLXuPyFyeZmT1v7KFk",
  "key15": "J8j8hS87JfD9VaBhxbCvpja5ABotZpaUGo5gV4tBiLRhNGPWYy2TqQu72FGhT6LhWgxpRJ68VMR5BLYsZdQ9hof",
  "key16": "2hMgJ8eDjwtLUSKk6nY8ZWXwoySFDfYrHtuagueD5hBCiXZtd8AEDd8skhdobdhQfWtxR4ap9ZfzReuvHUnwCTb",
  "key17": "2ct2gYzfswV6K54eKGbWhig9kYHi1TpYp1vAQoiCtVmL6fqoCApfZVp3MG1KBKajDpLkBZXc6HQ25wcniSaee4SF",
  "key18": "Xi59GujTHcwEpGRmpzF4R8mBbXB9isJeJgL2NjsFzZHaHdsE6FefPRoGN6f7ShwWuDoef4PbcAzRQbYQY1MBjXs",
  "key19": "4TSwLjscBgvfyQ9u12dBQ2LCBb1ofUP1kfEa64f7ziaCb4CmBEdzPZyPt6VhpNrh1ANtzucgzr6Egep6xKMyX1eu",
  "key20": "5WrptN3M9row7YE8ajo9Bpnz2k8oQyKRKhMZf4HWKykucdjzwmvqgF3xsZAmjnZ6o8aEiyNS3hvsoht6vjcRxx3U",
  "key21": "2Znb23t9HLxPFtfHVsKK4raTEKSQPb2zUA1djyc8WgPByEbrP3GMKv7nZGb2RmBjYABEJU4d3DrPFJTMeF8bQpZ3",
  "key22": "3qr9JrQxGRo3beafpaBZYa67spvBQsvFV3RQz1PddrKe3o4CbKhh9kbLYDa363MC5N4n7XvxXh3FZrRAZFpuvj4c",
  "key23": "4cAChfRihSnHTzGtrBW9U1bi4Kjw1xDH66LKsxq1EXXQFkRT6M1b6xahB7FACczR6vJzovMXQLzRPhUuiCEKn3Cm",
  "key24": "A8yqddyPgC8mL6vS2LXxaU5PvPB1VZy8NwrrvQdaowBZFHnz9znpq2F5arRkGBW6MLk4DVLCsmNx2qKAKugJXE6",
  "key25": "5NJSXE3LJe6BQznoTa76frdvwmC69FwJtTknjJzwH9okFYq2bS2NMdqXP78px5DndB7vCeuzPoCQQM7g7NrY4fep",
  "key26": "4RXFFwMB2XtrwpFvc2Lu7SuHFbG6GqTKAWgDmP3a1puXE37Eq6apFvT1c2rHu9aYvHsRHbFVegWJfAdTc8YjN5TD",
  "key27": "65D1yp3MiDKQYQnmm2yrHMk5AmEhBktX7PAC4wqxGNVxcir4UXzBJf4JKDPSfd6fbMS6AeePD3WEpHvTAUw8PAcC",
  "key28": "j8RxREkZxsURJ4y8VdpqMBntbZF2LGinECWwLNhefKu2zNJJtrNQsZA49znVfDwjDefPFuwjnHE7D5dESJzNecc",
  "key29": "3T7dFq1ohsZ15xSjcpLzKzAWHLXrQWeueUB1tiksuHcmuFuuhPoB32gobbYDGPYKN95uuXisT9156VYkdxj8zEqF",
  "key30": "52PWNyDw7MuN3RWeCrPiACMGayGoymPne7aBs72ucjqxH1hYxrS3dBqcEHxfKE6C8DrFFsKkwNGu6wZP7HDCQg1q",
  "key31": "3hAknV3SfhNemyyofv8bnPARnjdVjiY63TN7t8cs55s45g82ZgMqaFHxqAcKSW7M3pza8q5LBSSEdvKfHHSsfM6A"
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
