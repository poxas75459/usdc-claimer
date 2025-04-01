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
    "UXp7xvf3g7jT3KanhUYXMdAPnzPPMFoASn6YcucYgswezumbEugTeuErjm6a4F5mhxfaw4rGD4c9CjeXdwRZVjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ynDgTnVQAjLuTs1U7VbjpiMi3z5YJtmwDVsgS1MhrBTGszPhTjpoucDjBwC5c4Svs5azHdsG3FVa8ZTo49NnYDv",
  "key1": "4YuCTdPG7UJB4MDGkkXv2mpF1QhE4NxFX774WFp1t7WmpYTWM61o63JGYxHedwZbJWw5BqGmqf2fsEESfyLAibAT",
  "key2": "29PVKDbqYLvNc9h6nEY3qbju1ZwzbTmFCpGq61PidSMC9HqheqRZbNEuH37TRdcHhQFYyqYFvLQ7gZpQApfwwLsq",
  "key3": "4vm7AgE1PTPk7mPnsV2FzMWZvQxBNvhhy3qK8cLJXcL5dy2CTnUecKXu68F8tYkCfSqdbXeQRxGALAgqAcxv8m3W",
  "key4": "2zwvZ4DffYkAxdbrP1pmnV7LPqByAxupyKkrHKjUeF29zmEFQ8qE1yojacdHKeK7hjAFBGN6Am9vPK3s9ZmbtGQa",
  "key5": "2SARoEKr318x2kRA9mCyrfJk8e7rZUwKKdqtZ77ZqnP6RaL9EQzQp5MVe6zhAsoJpnw6f4wBm35S6xqWSmpcrDp3",
  "key6": "21uVSC9EtQw1HotPVxoujbdwee8Y9XLQGZExxMkMd6XvtQYQssPL8pa3tA43ihhDy5tcPXgiAztJYdd9JXzNwysH",
  "key7": "3EWYYDrhZDsxdiX5WRGunAoibbo7EeZusND3weCYYrmQAZPtZtDUPKbYSVGahLAwrGLYEjwXPAzEmDZi76jJbjyj",
  "key8": "4FWywDzKJbuRPWYEb6woyrN1XgFmCVegB9nfMH1fKx9ftarke52RTKnNTvjFYX5eLQatc5c1zDyrG9adfFs5akMo",
  "key9": "5DyJcuHThhgaWtZMoH4txZHFqhWD3KZVKHXuDrqkpWHykuZAHwGCfRJVE5CvZKMrkTFCU1BkNLDxVxsotHHZJ8PF",
  "key10": "44ViMuM9ymLASxLPVBfwViAhW6LmctsiJn3UZHvSrdXV7ygMXh9n7nCkr7uzrDnCbA22yAThaEFg9DZMYiHZZJ3r",
  "key11": "4zV6CZbYG8U6uMy5bAHM85mzpDj4gVaiP66qdfUkexasJCYimXoSn38mTbQLbv9H9wWu1dKZqrCs4qjk4yKq4FA7",
  "key12": "3jYwPvd6bEiw2YgYHinzkyBCSs1oesfEqGBxhWgeZgTdC5icKBG3Vt75uKC4fLu91VSedfzfrABU8w93gfkYiLLr",
  "key13": "5v718J9j6tWzVNcwovSJd49is8ipra7vf2xnSdia1zZ8ZXU9gqW3vwga6cFBwRpd1zyYCXKZamxQG4RNM94Ddeva",
  "key14": "2esYxU7GiAKwdP42F7ZMUNyVC9qfuHjnaKCwMpeJqyjgzyyXCwzUYTeHMbPEXPRSroV9ySVQPMfYuDaC2iwxDDF4",
  "key15": "2LAUL3uSwQM9ZWrCJe7jAN7xBiTCN6sEYHmpmzndVHtjNkGqC72hdaQWuySaDPnarbM7SPScEWn5htY32Je1NDTB",
  "key16": "38WX32GuhYroo8ePcs2PuG1jBCkBWifAsTLQ2DNb8zn3SDk5WSxhK7A6mri89dvfFc3NCvgBBdrPBi4BSHioG7a4",
  "key17": "39XL6AGw1mJ5pYYhwr2SJpZ3axq2ZNPTfYZKb1JWs1WbEpLTAK2jA3UEkrBKDbfdrri91UVoLikzSobaknynf1ZZ",
  "key18": "4cStanut98UesKwzJLd9sMVGsNbXu8y5526zXspUnaadHW2NwGSUbMGzXG9iYYvuGeMRhU7J7MhNHa3jYwDYcHoH",
  "key19": "31UQjMGpTNhfJhoVSYzTBb8xm6eWMA13fJKYLg7C2axxP3AxYBHGJmwNoMWWNeLvrAjGLdDjnE8byuscwmnfZe9X",
  "key20": "3NMY6Vbgv3NKBmjUf9XBUqRhmKUQWva14TP31u5UusV5VVPwzqX2iDzhUeGAVVd68B5vXNB3SWHvubC6fpiv7gKm",
  "key21": "4N8S2NgvKLx7z6KzEN2s2PXvVaLqf6qyY3zPSMCHe7YJZbbty5cex7qCByCV2s9VqXSAooznpqD7BizAramPJ5zS",
  "key22": "3sS1MAA2BUSYweyFGJnX7nRaXXYpxSmYSxbXYfR7mrA2cuPc5QBF9YdGS69ZRPjEiCD3NPrckVvASWwsDhFvXu2r",
  "key23": "e3H4gAtk9NQiDaQSUuU1oanGdD2M6i84jDkeGrfjS9yY55vGHeHAQeEXcS8okYh8QR3UHR3xwXENbfFfJMdMczT",
  "key24": "3k5n8A48Q1vhJUp7cB5w7c6KmaK7kuyqDbxPeFQN5X8gL4ZvHpZBXhZ7xwQHBEAyW7p6RapqFxMYVMtULJB234Tc",
  "key25": "45gsdsVKv3TyLwcYSTaBRqfpVfH9Q9q4RMy9BPjZfUJC6S8R5hUtnusAyd2FBhdScA5MwBdnc5iVJMvESo1BxsWr"
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
