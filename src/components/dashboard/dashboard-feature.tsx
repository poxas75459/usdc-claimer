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
    "3qDAZpFQnwUfo9XZ12teeew3ZaZGp5Wh8UoLCseh9Z7wJRX4dueDZKfMu1vdYNhiGfy6anWRT5NTc1vJyenwTHGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51LdY8jTfrMasv82b13PZ7osNMQeMXBTRyfmFLw3D74Ycbs4cCBmzYbpLzuSQGZRqBbb4wVpmgsAwQpZCvNA2WCQ",
  "key1": "5BmhbDoq7NTyApdyGv9fXYCu5T4mub6Suww6ShcF2Lwv3ZrEDZk9BTFuEdYhB3mKNG6JdCsbUWjFMr6N11tiKj5M",
  "key2": "2wBbQjE258LqdBrW1qwygDRXTAoe6ZkybQkPu5Mr2H2vE45LnZfz8NvdcbQi94JrgUfZJsfeFwjCMUchp3cDCFuw",
  "key3": "4gLmiaYHWkSmAvJ7gt3AJjh9WTWY76WGkC6F6xTzSjBHFm8D74aoufLiU8CPcSoQJVjPerGhaBCHf2B8bVKoYSFY",
  "key4": "4GqE4itDGEbt7xJwhWVbwDehFRnSAkBiHVWa3uU7ZthJBAV5QB55mzTTkEqodt8bGznBNZR8P9hhSTirZSpfHPSC",
  "key5": "pgGJvt3NhhGkJtAVURZjwkQ9KyXVcZBZwepsVcmaSmKAKmvr8ytUcqkBUSYtj6W7zcVVj6ojiePnfmUAyEaAzBh",
  "key6": "4zBbrNd2dXWX75gYFHLMHeTSqNRn5CA5iyYcZamcgFjhj47s2ieScxP3zcVgRhBKPNPq8Xb3Gw7GjW81t7mDFPFR",
  "key7": "7M2MYXkok9WLHhno3UQYVqyvQEzhfTAcpdVXt3PHKPSRSL5NexBc4eAPPQSJsDPBAKqHF7DL2LqXpxiENgodZNS",
  "key8": "4J28cKu43wVedfW9uLX1F1S3pQHyKuwkTGPtwa1aQxFZyzQCR6VQXzusX5kxSobLSkEtQSwKsBjYhN6bM5NF2sPK",
  "key9": "6Ng8cb36BaZJMf367e7qkDJ4FK5JT1proAq875b9WtGRuJXCATjbm3vdiLT9uBTwG9B2oLypXnCLAUbsaZ5Yts8",
  "key10": "jQt2S6WoS6SaWEZkSWwPn6bTZpD3QEw3butCbkzLzTgdSU3DJfYwoHgUsyNrGeXvTEfvzP5e9KKGpGfTzv3F68S",
  "key11": "5PSAkCKvAwm3U45SrJV3HjfZti5mhkZSsrhdoKRboMkhmygA6reLNagRbU1wv49yuSXbM1XoPueaNgyADpoREtEu",
  "key12": "2DTbsHCvm5arDYapJnbeEZhbV7Bv4riegGvvbidBBueXuJzLhqZnmZuWwqKbSkk4SLH3o7uV8p2YMmHCHUq4bNqJ",
  "key13": "5Sz4f5ZwFxGsaaKgdzRi7KcXkpdcQ9h8QV3PYaeksnBsvifWJBXCW7TvsCGR2VWT8enRtC7rr7uqGTSFznN7iCRD",
  "key14": "61pxbFvdLo8VhRzcF368P6gCJrCk69c2xWW3nPAFxB1ja7qdAJEMwKsDzQPEyDRVy3uWpWMmL5L59BdEJEYaxtPm",
  "key15": "y4JDy5AFaNSCM6mC8AYEWxFuvxFcUNrEdXzhVwK157xTN68YFh9dcmgcezJ7aSDLX6jG2Tdg7ZGa6kqTGQQxwt5",
  "key16": "2L77A3AokLaTJHG8D1cW7c3owdMxTd127YkA28kFTeSdpnht8hVgUqMXnbUT9YXmy95NmWVsBxUu488QYAa8rGpz",
  "key17": "3AJM3wgDS89AnLXXjB5BsouKVEivGzEZPi2CrrBa1otCeD6msce2aSxbTs65Ch73kFdaCkHQVeAy9Vw9AmbQizdK",
  "key18": "5Rt5nGiMGCNgFZ6FKgDUEFTZPGqQdv23u49Z9Bf8mx9n2S3B1GaifjvvJimUYmh8MwdxA73q3gyYA1oXL1LsMk2o",
  "key19": "cDBZtNNd2AzGVKxPtp9v4vNtL43ifhvDU8KsvbfQfVCo2Bbe2rz6DxhTDWJfgMAkjfytqcsD5DfaBu2CuHkxKtQ",
  "key20": "ui8VuGAwuWGXQSzgiSm4y2KzQ4iWquTnmsgfjwMRkjkpWnwP9q33QJURZxThrCDo12gaGkTDx2ioYoexjtQ9pf7",
  "key21": "37CMBdR6mhCr7yPJrfCxHpJLxTy2BkPYnkDftp1srx2xSncAq5kfqc7VqmxgJHXBLGbxPBuurEH8aGBZ4HtoWpxf",
  "key22": "65NLyBgJJxAcMC8tppwQVtmvXAY1aoyU6ELhYJXVGSUnC26N9qUSVdkUb61yQUCkLVZBFPstHu9E3M56Vfq5Arc6",
  "key23": "2JPHiGexuXXR8k6Yafdi47sDsufQCgVixvuViez2M3ALVF4hHZyTpjDjcsSAgiMfu7W7juBTZvQJXAoAGDeSxp65",
  "key24": "5GBfw34tdsGsirq5oSBnY7jJ5HDeAt4T3MSiBbV79efWB9o6v1GWXMWyPE9skRK8UevryFfkZjqy8M9JpSm2B9zE",
  "key25": "fenSazEVvrvEXwUyzD7yLLU3999RBG8SoFfjoZZp8kUAb5pLkARvmW7EapygfjANGEY49hAd7FbxJHg5cFYYswo",
  "key26": "HL6UB8K1jWNw25d3N7Wm1t2rkVynPkWfuUkQndP8riAuYjZTz75r3k6Ex3fPP9PEd154vtcdN4YKNGyDxLR6eoF",
  "key27": "3LpNQLuhhdEvkYoH6ughtbN7qSLprGpozhgYqsFYcZvmjHm4fLE9ebLxPeSfz5FFmd269dCQVqP3WKdhgS5NtnLa",
  "key28": "5NYxcDwtMbFHDuQYtPjoxFascUqVoFEsuWwpC4ykpgV3DMzMkDuBb9zrHCirsJLuXB58oCbXBLRTAuqpwubjSk76",
  "key29": "3fbDhJoLR4o6EjBYAj9xAPZJuNQjdwBzv8p7BVoJCdEoamf9f4kLGXgLGZk4qTtNHoAW33vzUYT7AXCyaGNXHQtg",
  "key30": "492QbSgi7eChhB1D5fcy3CJ2TYR6LN8vk1Y99nipmdRRpckLrdH6Lc2UKmJZSdo6UBKa7ghcrCU2tVrgwnqCd2Kb",
  "key31": "4QLK48J6bAuMpeDhcBGJrnLK7usyxTivRc51YVq5u7TfqnKwJikMvzKPtXE2SiMU6kAjt6Ebaik6W2kYFpHgh4m2"
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
