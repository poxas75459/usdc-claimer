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
    "3SqBCmAc99wVXwFP1SPuGKdQ2UiuFurwyBRq1zN3pRGsAfRoSCzDAXos32r6tCmDs8oh49iWE2RXAihX7WjGNpt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JqsfJ6UMomjdUBTkxXcgoawW7FHaZoLyu8z8SRjeL4vDfCVwvmzgw3ZDB7beedVVnaiEfxDVRwogcmN1YJccdAr",
  "key1": "z52onHvj7H9hCAtzW2F18ooAyPR6jiUDZCARGWgXzECGczo6B8SnH74STq4PX3UefyqqPkKmpR5MPgqeRUYDMrQ",
  "key2": "VXy2skuqQcCDpdQ6c3SkDwpZNPpXBQnPtaJvKyjjj1VbwX23SvL3gMfyJVq4TG867pKPxGH6AUXzoeueA7gijdP",
  "key3": "5sAiqvogQdwtEusz6x63f9gTCa3sKAQQHnQ74uyxpjuiBouGaP6op5yt7uyAQNZBS29FkMyyTzKYYP9yWAmJsfcd",
  "key4": "639RcoYmeqeDTrm694fmbXEwv1yTu4FtP9RQVvQ3daTGjotBQaJca6X3DPjSa624suy1ZG9BoiX8bqeVPNH2aez",
  "key5": "2DRAy563RhGdGxu6oe7y6L8VZ5fm7M4NVppWvJHfVnK9ZXFmkx74YhFecnx6hJMthLVRu4aBJkvcrNFzQDE1bdHu",
  "key6": "3GqszEstdzd2oESzKCJGhDbzE6oFD6gLuCkBbWEGY9zDLhUwW9nFUYYvAmn7bNoaH88acZVsrS6g5FAe4hzwbrpJ",
  "key7": "3nqRX6A3N1uKQ4hCWUDMuY5YRqzKmENR2TXrDj1JKYDcfhuqhjw77TJD4GPaQYUxjkHthzj5M2uYaANhzJSvd2zE",
  "key8": "wnP6wK8dNpwqG6GVdHRBPXsEUfmAQb2M78gU5dpszi1wZ4pN3pRyCmPVXJcm6oCfMJXVgBpFw2mWkPz572RaNGi",
  "key9": "64biFkzf438aGj1sM6E6M67WuNJ8GsNvGLW4rKTpPQzMn8Mzpsx6FRCYZzGmSpaPzTkDncSydtC8wC4UFbLHXk4U",
  "key10": "FJSWUVpHHN9qYuWD19xyDmVH37wWhYta31CW4zx9ANv14wk6htEDFquva4eUFwqXJP5sno6c39z2SuEHpHHy2zM",
  "key11": "2CoLLMZ8mHrXWzZytezzsdtiwmnmPNvpy8FFta6EGANjqavC5Pp1ae5Q3f1GkwutS3jD2BnokLagnieUsfzJ7Dd7",
  "key12": "56yKNaG9pSiHiMZL6zG7v8KLZwMfxigJiDxhsyvY13qUDxL2SN5Jb6pDBdpF5m6Nn2VfEfaPCYveniECK6nVMQRt",
  "key13": "55HjcPKQJNeZDHvvuEfbsNjaBkcYRrnxp5SLEWJi1P4dYGfDCJZcHopeoBejvkrxcqV9w2qewfCCsG5rdFANSSZ8",
  "key14": "C167oXHnpYHLKVFMPDbBZ23ULJyruAptntRqpwAaHMYaNZMrxTDXqpNXaWLPXgabG2X5WRtMHCgBZqttpW5FCfw",
  "key15": "4vUh35AWHJcdjWQHSRemk1CHH9DS1esqxTjaTJCnLUoBb8fwdxPVaw7uZR9kopjAik9d3LuaedWnxz1oUKGWA9yu",
  "key16": "468Q3jP6EbHcMtXiq1PW5Ru48LBh6q6N93uzR8ZvVbw7V8Q9Vj37AxDfnAEcLDpt7mGGSvJAbViz1vTVbX47XP3R",
  "key17": "RYhq7rQBbwT2fX7sgm7Gxantc4WzuY1AniuBPJmGwcoKgsfX2raGSMySwZFqMTxGhogLkk2YEbqVZpPYpgpUxvi",
  "key18": "5cGm5hYMeXV9dyqCnpzGzoN5UnMSfBcHctiue4qZLjb2sntdDcAyU5MkcDusgxdvvcEUJAViYsAi5hhWNTDuyBjH",
  "key19": "py6kMSvJqmrQiRDMWzkmyrSTWCQJS5UnFQf23xYeFFammmDqZyqN58gaXd8EDiuxCHMRpVJA57uofGrXwm9ULum",
  "key20": "4zAyFEVaanLtTGeD3F5LPJ6mT3Z84A6wSbsPGUv5waeYuWtdSBhvf7QE9zmZU3edNVpS1DvZUhXM2hqVMF112Z4B",
  "key21": "Z3wX1cMU6fTHNrfzMNg2NXH9SFNTBBCyF9oZARCdPT8iCFjG7r6Wv5ztpAdBNgP6JY54mgmdJ4uuiN56QWw95ah",
  "key22": "2wx6Zwz3YyCUJQy5y7K3t1S7miSXCbpPJipRaW9yv2ekiFFcD5VasGf7zDHmiwCDN6ifWZkDJb1poiyGXnHhK3xu",
  "key23": "2HfEZLovY95f8RsnqGYeK5TsC2ikLmYYXGBiQx3zWkqEkWpbfobpuUisVpEr1yipCv8boCtAoPLgqMeVPRn3Sgjc",
  "key24": "3wkK2YPR3g21kZmBoULyoungw9atk5frv2nqTNqzME5eX3RPwGpdD81BZYA2xUKi4nFNh14RAeHgP2bFWmvqCEnR",
  "key25": "5zr6xS2nX6VbVMZ1o8ZEgF8CJHDweuNzMjkq3TJiXPYdAd7AhzSAqMUyk1CHy8EEYsQYcgy9VtZWHH2N5ZLujJ16",
  "key26": "4tqWY32G7Ms5eh3LKxb1XkqvR7wix8fmfY1TCU8YXP27UjguTe4ED8LVaESazTXPe26PKTAHcd96uUYyvmNsC1wr",
  "key27": "4dYPHfKhggJeqVrafZrMWyTNneyJWbMz5t99VtzqKue8xTCTt1ijnzQjCtL51Q79wh3RhmaF6UviF25rxV2UBFYe",
  "key28": "3YsqN45pNyWqn2XxMQmFUQQwLM8ZVZyMTx9qJKhfYYUkmGzm6mF8h4bam4kGb9RkqZUY5oWBK6iZsFSyuu3N6B7y",
  "key29": "3rcStP6dDTxaw3BHURMGsaRCF147JpmEVsK3T4SNWq5Pz7pu5vTzP6eGDvi2MMJaMQP1JszGNxoxQw7iQu1RmCpW",
  "key30": "2vfMnmxa7KkSjf6FhvvQ3zaQvk2gtccWHQV4p9uuAfELv7fDFxhEAFTqkbdvQxBaVi9XNrywyeSbnHGaxiXCszVC",
  "key31": "47Wn4ZFBcRuBtzHoQEFH9Cd1tPuxoBi7KSWGcqWi5oaxUeFBHBoMQmi27Yr3YrMpEF6nzkqFCDw8KMYTZQHvABaS",
  "key32": "2ysgiQCXXhVC5fRjAXZgVJJTLeFash6s5V5dLUq9p8uVfEZjC7peehgzyc9Z5GWDZRvqttg8VV84Rb3LW444BxVT",
  "key33": "SwNb4fjRYzWzLdq8FSQS3yuLQqZaRsxTPDfUqiQdvgF4Wp7vHkEZYbwZ9Ea9MHQdVioPPhHRhz32W7kqNjFu3RF"
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
