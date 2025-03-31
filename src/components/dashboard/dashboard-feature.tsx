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
    "DPEwHF6jswZvEVgi7KEdvn3RKM7QsaaXfaJb9xKTWxo4SosC9wxrbmEuCkGMsPCEisXpqLRzkwd3PZGayWnpiP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cAVDWkYSk92mwTWMarxy74oyVMCUCTQJPuJRuJjF1Sum5zfT6FnosWecpkC368edwTZ2R2jD1XcsU7ooCeXPBCx",
  "key1": "CSQZkjMGW5gQs1nYVm5HbRpWmv9dqy9nwoSNQqoLeLbMnoetguxaupjnhQwXRH3DVoeCPex9zRQYegDFeyNZ3aF",
  "key2": "4gipTqKGB9hLwQ6nTB6ZqJwJvvpxGqdxc2AFt5BD39brEpHcTpLpkXGuKwzz9x5UvGVGQRVCiJd9zvH485NP4rxp",
  "key3": "5YPzE1rHMCW9hxgnrBy3cEhzzuovJ3tniyp2L46KM4BUKwuAJx7Y8uztgJWXae2PAoeX6kULwoHmTrXutV4xQ9k4",
  "key4": "3LXqExkKE484D6FGgToZaTheP4kj9zqKgi7RfsDnW1PK6VgSa9cXg85aJa3SAYCrvpmxvFYSic18ftAqKc3chg5t",
  "key5": "4PgT1eURZNGEebomvqHZbizGa7kao9nvkrm1PYVfwHK5a8yjVAMX74JLubLiu7kYbDTEFRK4hiMg7zHchPSx8eCE",
  "key6": "TzMbhKGsdHdPazzWeADC1Yoo74CpnHRUVSXj8zuzMwhs7goQi4tiJALjwvpagwRYZXxFiPWVp9YLtQ17EHu2NYS",
  "key7": "4QCrArTgRVVbSGUu4CRysgpLywLYRSWuNskq9Asc3Tz5Mfr6Nxt8KXoQ3cF3zusgCnLqZ2GtiQQ5iu7HpinQx2TJ",
  "key8": "Ux3sRcTGoKWp5QDsX6Msd6Y7jigYUbvZJtUtBNqyJfswL3xKWorxgvLtQt13mrhnSraoBVKDDywqaD2AVTp9GDR",
  "key9": "5WeyBgzTgfLNLcmRJqissooPqYGHrqmGpZ6TXNsFCavQ3Hsdeaxe5d8yTaSpai7FisJsiyJJHFrUzpv6MV6YNwrq",
  "key10": "3RS6jCUGGtP1iWVJTPDeEVjvpFfDCdGUvavS4JuXxiyTuirZq4zzP4tJfwGKiWWPwHrKaFFExERixpEdoVfzGr8P",
  "key11": "58aUUo1aryqLHuTqCDvWFZrHmGc8tpw6r4w7XYDvWq5ztcotkZCZBZihegVTgVjQ6es9YGnnZd7odZDPdaX8Q2B6",
  "key12": "42ZhtGXcK4N4xeptAP6k3Xxo46CyADazpqf82HgeVDPt7bZnSXCbanxn8bAmPyJTyEsLxVGtRZEVDfqpRUeT4TiG",
  "key13": "446VZ9gAciYt4sw7WzPRvEMYYuxACW9f15TSucsQdRyHkikbqGmh6vNz4pk8J49cJDJS18fZ7BhZQEf7LZf8mvt7",
  "key14": "3F5UvgWpnraomzbz2gE1dY9GfrAY8PVsVfLNPHpSZBHquNhVDa2Jav35eSNAfZZ4EeLQ6rpGKEDFTsq4rJvK7sSd",
  "key15": "4JHK6CyfncxvCAS67hLoMmFLL47hx2zN6o3GWqBnsLUEjaGvZ6hRZjXdrK4hLVcKyKixAv3N43PosPGawAiaF5Yu",
  "key16": "CgvCq8MzFjWkKEaf8uGM1Rx7nq16wcta7faerxuJAZfJCxUWGVa4PeK794wbKBM3aNFk7h2ANiThcZ1PL7e5ns1",
  "key17": "2ceYzduCC3sKA6cuQEuS2oPEZvzuHgfyM3xEv94Vegvvb3fAsbvJiEUhPhucaxRus5FPpQVDtRzWf6t673ZFAXDG",
  "key18": "QA1C4eXpQsCgAe5QnEVWyDvMeJ4wMiSwwLsdZJZJbWUrJtTVJBdAzqQGXEBDCWHkmsHdXH8LvuakV89uMPCE8U5",
  "key19": "enh48ii3fhnRUtSdggg62ZHSA6NPN2a39K5dLaiDHA9y59YYqYac5Yr1xHwycizDhFkVoGecigyzEiqD3gzaV6R",
  "key20": "26BcqZFtmQ6qKCHXmmRCxmNwu3585zqwvCpw4edmfSndTLhtM5QyysZnm2L867NkHqq9SKAjW3KEvngCBa6wL6AJ",
  "key21": "4bhoSUVHAB6sXNSJy6UWjwTzrNYcEjECXNX6fEZdfsy3ECVitqY3mfvmN6nZFd5Yyvhyw5AjWoyw4ETHkcZdArA6",
  "key22": "3RVzQQWeq4hoJSxDMtehunaWGwtkFyVGAicpCCPxTwhBtaBfPqptcMJAuznLfQaE6Dkm7sTFQWb5ibcinsfRbtyg",
  "key23": "V2Z8LJsgjJxQwdPkoZ9tTu2aNpip3fhhBKHGhqv2gisPS1ycSULEZ4N2WqxhPpQ9cndT6FABKGjrVFo2JAtze5y",
  "key24": "3HfxXrcSjB7wH2vZwr4QysneiHXSGovKBBNczMtz1PtaFKiEsnanESrE3Z9722XNWowELfPKoraWTBhygyGcMgZs",
  "key25": "5FEiooKgEPsjHiiY6ciba2DPRgDiwTrUwM21uUSLor5mPp7tZ3PKZkZeZ8ENYhqDbn3AmpwGi184tD1w7igxjmR1",
  "key26": "44XWm5Bzjk2LcAXsfvZ9axQ89GCpvDETHVgzdek7k2Jysxpc3JFGJQfHgVB57Ak8xw6hgjhhWxjHAhQiMLCx2vA6",
  "key27": "4y9HgqA9sGQEo1UErywyTuqZFqUJd2xkmxUTVu67jr5KgY9bdKE1gagfmKQXZ6mqvjtJP4NmsrxSonvwbdv5yvt5",
  "key28": "2MFgkapoyydEsrhDHTrmCw35AQ2Cm7C3SY5jxSXsMidMCdXNTAZ2yRqJPJocpmMh2mu26RWrTsFFLp46v8AKukdf",
  "key29": "4LqTram3HqKGVVQVoBbMbTJMT6mRvjVCzVVD5KQBcTo9FCqSv3qJtwn6Rdh3fEpWKMpvidBnDEfg4G73cLhsqfg3",
  "key30": "4XWiWp9x3VC6ZXrp4NQLJ2zoiVJCPfSMnaGTU7FCbzeZ3ACjDM1yzcTwZTqLEqWmpt3NANoimzb5AubASUhP92ca",
  "key31": "5SADv7AyZcYwa3ZRzRyepkx6UK3WikpHTTTFgxGXsALHP5YNWq2tkPdM3XVVVwhPxeCEacfDAyNbZmL4t17Z6k4e",
  "key32": "5p2gLRYgnBJhpDCQQAGKPzDdEE1HLmTjXknbH1gmk3RZA3h87Rx3hryqbtzAFxs1UYA8GS466pHd8MEQGz8UbMj9",
  "key33": "4nYQ5Jssk5dYjZRcVvW9Cs5riumK32AaJi1ZVFHxhhtsEDuNsyMqG8Z5a8kdDPEhmDnVhKfJRh5rpWeJ68vqjQjF",
  "key34": "52mTweEri96iEnKAqJuHSEHEs8Yk2hMbeKQqwnCijEjNMsp1jt4pmTvpJJGYrU7f2nprtiSYt8gc6Ct3p93GpoLa",
  "key35": "51GiA4DZLqPH53YsP5qwXWHKEPQ1fEpi3Yh9xANaUea8rVXrBzjtTZk7he5zagZmHQerfEtvtAMs9VySSkhgwXCK",
  "key36": "4Bj8E9nGF3mcNXTXjyRhGW1BCBHyAHx1qgtq2Jiovq6N3EKedwH75YczapZp9mk2QM3tMK24Ue5fQ5rdtMWYzn9y",
  "key37": "35yQaBqP2B3z2gzAmzUt6KDTPKC9VvkoA6x2BKADtagEyhPHMVT2V7rmpFaKcewQb81E2rtjSN7hhYnb9X2yWvLL"
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
