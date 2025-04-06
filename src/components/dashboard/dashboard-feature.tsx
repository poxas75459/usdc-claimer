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
    "vCBZLgWP5rg5Qoay7GU8KaByogu6SrN3eEN47ZnGWjJ37QEGsxhMpYp7eCq9rqqDmWPSepTZpDFR8JKiF1vC2Gb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kBBUCu92qnGJswZ4vLK4BSXRLrxXdJx7xANu6ZDWVtJ57ErudSHp969AhSEcA6p1N1KimrS8g6sXtJkRzRHLfwc",
  "key1": "JHHds23bycghL4TjFcBmfBsXfp47RHR3FUuBWrD2XX5i8mzP8TrfJHRy3bPbwR5Fg8hgaQV7dqkxB243mBWHz59",
  "key2": "5AUQ47p5tfQAaJpXwZfNdBdR6Fu8vT8WAPT9SpDMAgnwQBV4gY54aKZGpHaqp1cjEbdzDwZwQaBRVWmXCEdEzBHP",
  "key3": "223xjjTSuWzmbD7PfLcMb9PqF9AtxRnb34NMDMyQaUxNpJuQYzK4gJnfEDs28ayx62wCAnamj4cmhzCyPQPY9d4E",
  "key4": "rNBkRGs8HbQ32QndMYVY9wWUMsmsqPXGTgERk1FrA6k47gXYfy36rDwo7PrSyKAsQaCchXhiTdL2YAhCpjELF4C",
  "key5": "5mGLStBx8tYXZXXbn8HqEUyqRjYc1Htb9F1UzTrrgi41Qt4ngdTpvVSxQT1F6oVgXLQqXfVGiuYPreTK9ue5tG7t",
  "key6": "4s3UN28vbZna7wCb9AeUSWx22g5PwpkgfKKXJYuHThYz654KpjroFRfJRGxkA4NFkwaVrs6XtzNZu4B8JA7ME7ce",
  "key7": "2jcXKiW25hBd71ZUz5VN6wrXgGkFg2y3FswmYe1WJ6ejUkjvgqpXimUfVVaFP3UYVx4i5uTHBc2LSHuKWi8ejwJS",
  "key8": "2LZm4ZpUfbADj9iWf6bUMW8KRHZo6qe1c5mbYCa5dBvtk1NKUvV698Urw8YMS9njU3fX1qoEjbswKzf1bcbSUoaW",
  "key9": "3FpmxL9ggTvhiKMwpMjpmBKYEJbkvuJxy16Ucx8ErZupNvCDfZaqqEmJDfLHXpQfocXLjCX7RpDhFqNrwohEqW65",
  "key10": "61W4ii6RpLSVE1sLu7iWKXtXUJ2v4gP5PrVw9aeXZGXTa3qwzXps41FjFEpQY8aTmRq6BEwWaVLQXx3iQgcrME4z",
  "key11": "5azxzYPESH9mPyAJvkAg9y7qHYV6hRi3Z6fA32PvMAUruvZBVomh4BJz8YYsfj2tsjohzoX3HQkoBZ4Ct6nspgZz",
  "key12": "3rwQ7hLz8q1fYhYdh4KiXY9EJdnafLxLHccPgZKvggSi5o2cx4rRaYE5UsMNwJktBEkW2LH8JZ2erM1JGhX8B4GP",
  "key13": "2fiQRkSHsygzUV5QQh7QRfNXH2Y51LMJTncp7bgWBWTTZuWG3erjB4reNvTYTy27RthMrZWygBHsQUphAUYVCApL",
  "key14": "5b8UkvNufhKyJB6nR4Rz5yTPnM4r2sxwyJPoHcZ2wiz2rSygvo5vz8sV1frQsbDe6wuPe4EDkffaTrup7A9AqCSc",
  "key15": "hztZkdQ8UVpaUMFbrsMDg6XZXR7deaGwi2vxGKec58JxsMxGnhGogTRUtPtCJpdwWRrWuGKUnGskqAHvBAtx753",
  "key16": "3baMWqCPUbwUFubA2nh6L8j3wv4Wqz86s21n1Z6beRkVkcWtv3KxjLzgzQgeLFx3mZ6KWhw9neM8e9VzLWAnjB2k",
  "key17": "5gsb4kGwrYLYwv8i62s2XnbYTGsJQeSz6NVvooG4qX7o2TGkbQ67Myki1uWvkFSgWgV3xEFvqK1aLraygaAzYYPm",
  "key18": "UgnqViuZehHLoqviuvjuC9mnMvR8nMZbKEdJSZxLcVvYr53BtBe3desr1b2QgegiEcdpZQWRtxMsLtjbd2BzYLu",
  "key19": "4o4tGqM1h4mRu49iVV5w1nryw2sjNhzGA5B1zb9UavWVrfvBbyfvYwFMhPBifeqr3J8GQ6fVkodX14xSRFLLtanR",
  "key20": "xPCmR8dZ9VQF5iS4vwJnKMrQNs99dKfkxyd5HwY7XGtw58grALpyhAsjYsdctwDdyjYp9cduCe9xV46ocwewC4D",
  "key21": "zqPkYEzsvBeJoVHfJd9raSvmAh7XcvE52YPWiA1Af1snF2trT23cCDkRE72twjWJg4CyB7zmawyHYFimqiTWgin",
  "key22": "5pQMjtNLBanX6jdAttgg5oLyxYgBAutM462JTzdTCqRi8ziUAueujC7mHJuxVMhHkYZiXQgqiYjPAxmQezEWGasb",
  "key23": "4FydRBmvc31uLJL6L7H4ixVvGy9EFSwRcTrRvR8xK9TVTo7N6oeb8krfbczmHssZqjonVjksxpJkEZxLmWtQapXS",
  "key24": "3S3NMk2sgFHD7FjWHeH8zHN9THnAKVFkwQ6b6Y5uzANdUATyyvELmPKxD5ynidKW2caxEUf25zQ6s15K7WJMLYiW",
  "key25": "3U3orDYqCFLd4SnUUDMs88hAXS5pGy1Bxwjybm5Z4LhCudeeacdLYXTJG98927yeGpnAi3qeGcTjDLTEHer47hyL",
  "key26": "66TEUAuoR2CD2BQ2fzC6ySbhiuG4obN2scTXbh1XQUUsUm4Xemam9yBS95sFbxk2mX8vqTxFYmDwx3KTntZK8nz6",
  "key27": "3dd6g4wYsyjQP6Xufn8s1qXANrXUnrzUZ9UcPQoNPSpuufqDQvivpLkAMwVm5Paf7Ba6BvYD4jXBtFpHZYBpeGKa",
  "key28": "3YczkNieivSkYyP1cwGB2qGsTgfNG9xSviBCoKy5kAM15PJxfHVJ3PLs41YaAdKHwQ2QvP1AtBWxMEtteYAACx3m",
  "key29": "61fv9jTCwhScT3rq8zgTK31USj6ESyYgGrDX7f8WKyF7dXKjt7kDG2mxnXS76Sxdm25z5zyKejcGHVfQiJ9hi68E",
  "key30": "3XC35XYXEPYU76XpJ3azAAudeeHvgi49XWNwZgfkEVLk4bwkwhNbsSwJoCkBeajbiRf8vyWTxLPFBuJ6YHVbSdWN",
  "key31": "67EZ4PzzhrzRYxRwc3cZVY54BUKzbx1PRQKNwck3KW2zjUb9hNns6AadVkxmAnPnCosxuwaYhBnvS5eZvGHeQe1g"
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
