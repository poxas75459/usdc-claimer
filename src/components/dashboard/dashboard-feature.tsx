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
    "5vmScKyqYErCg2aGJoVJvCUsNNLtnsPiA1R9SUvwGtKeg9t41WdiUdq35xwBhCimm6CBBJHrsnqgaqKSmPbpEpKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x5TR3F6raJxcjWWSu8iemU6Cs4zmrR5MCKPnxWNPtSMY6kYRD5m34nxkCETmSafzfXQ7neWwaszttXymVFcHg9z",
  "key1": "2E17hhMd6TFncZEegDZ4qWz548uUZb1RktT58i9bbKKjGip8kX1HyvwLQeM2tnVaLfG3btjbrx1fvtUn2dPz2HLo",
  "key2": "Z49QENCQJh6X6zzzJrnUc1yFqmPKUw7u6VFFoLu8ro2WFwx8RsUdSRDMFYho1C9LYrMYNLK3f9G7cdprRPmZA4a",
  "key3": "5MuypMrM7qBu8KcneJCwJSZcYRGKmxzZXxq51hhkNoig53oi5F91RhpnN37GRiYT3JtnGEYPcJWT23h43N7m78wp",
  "key4": "3JwqEkyoHYf8iDSQBZsJq4KbB7MvFqLxe65Zbg7syN5eDETtw5ThuR4XwARgxaQUw4o4hVhje3FK2ZQsrJPv6cdU",
  "key5": "4j9TFbWVHAm98Pn5GBn7iyT8Zb1qVEhbYeJPDFrC56y9AgATPXXsWcREoUQKg7HStQh6jTLH6z9z6QEhq47WrZb3",
  "key6": "3XKREPraiGHkRUGcaL4qkzAB7dqTPCGV6dcDtMk24CzUKi3CroZrMrgcLni6NQRWtixrEedXVeBZctukWuFv5Js9",
  "key7": "4c7xwjHKJ4nbZCWehYPoxqXwQKm3vfskBWPU3ZzngEm287jKq3kVQRaaFpZchyZATJ65VjUMPXNf4Cvu6AhzZ5hC",
  "key8": "oZyhqxB5F6AzH6cbqE1vzmqPHVA1PTLBwRhEXER753hF5ct2Zx1Kx3hPkrQRWpnYbMgw1ivVDhHbLBgbituuzmP",
  "key9": "2p9dtifPq1UFLd1a1nKuk7fGppzihowGDMfhpFfwPux4YwxykzzdrJfcEak9q4zbAfEny8HqRVcMs9ajvt5n1Nai",
  "key10": "43TgYckmQPw6JoxzHPuw3NGE6AH8sBubNSbESwNJy7ny4aZrryrCQsEkoy9QEQcP4PJ1YvhCQUwHoY11nvaPVwdf",
  "key11": "2te67EnzEpY7xco7GtRHowhAgDkZXe1KRRF7aFZveb3SWJEabRbWuEZhA1NjxNGMrdFSNXs9nno9hRKLKL8LdH8N",
  "key12": "2FA4n1j6GcLe9JQ38V8yfAExvi3o4pS8DhYdqWtfy2ALrURaXcDov9GRrHYvuJfd2ovHYtdCyU9JExzRwG17ZwuE",
  "key13": "4zztTACpiGStABKHvxAWZtgrcQVA4HaZU8D9Lb6vYwPqNJ3CzNeuxUYyX5CrV7K8aNZs1nHKzDa1VEDGrUAvg5DN",
  "key14": "5snLNJfkzhfX7i4UCL7ttdk1TT27Wg8ozSLD42YYJvjYDeBevkrMoPEWfR3w1pqYDSDQQCT9K3r8rW9Nk4FVAeo8",
  "key15": "4dgddADgKJpUk9ShjzYgQCTB1K9zP5fkfRS5BybEgWthw6jNvaJCATLKKukTJHrVxvNjqdGwDXFN5JuhGr9F9S4K",
  "key16": "5fRg4kdE8QxEF9pZWZ4chJgrmvQHJGAn7eAGzzNYjLfwebeaWBgmPjeh2tL2jkWQYm6z82QeZagfhz34viZmCxyU",
  "key17": "2yrqPskHVyR9Sv8aeLFkBp81dveHfGk6bg1B5HCekxYX1hup19DKBgQL4fm2dAdNNkaS3sfEkcwq3JLL45DHu2rY",
  "key18": "37BJh7RNTWU4VCcLAd7MTm1x3Q69JDqNPoDSaayApKUXEEa4xi4b1EZmF4ashM2dzF7gBBbGGxobtzaUKnnBPayS",
  "key19": "5MHKkxWDfqYBsTFiKpayHgZnicfcYB28tCJxHe5iWkLSk7k9a4sijkqkzj7LxZAU4f4kXvMo3Hr69gNGBXt3iHFj",
  "key20": "3KUpGeJfTC3dxx1XCNKY15FxeTAaPT3ymcvwZtjcp3yUr8LQa6HcLgUJi44Cfyc2KSRvt59o8pq3wWLQLnGiLwMK",
  "key21": "5Ns5WP5R9jCaeeUrcD9pkPuXeSxoJ2hKAcmh7X4WdVJuPUC6GN82n94QCyWUAia9DKzCMmLVq59B8DhB6mtL1HQ",
  "key22": "MuaMAXsajWzp7BKoV2jmdu9YprkBpGEzEtoJuu2BNSdPdXEYRPox2JbiwxzaEMLsV2auWW1PSVtZtA5mGSqxq7J",
  "key23": "3e7A6Vy3YeopasUmFuNE3JjvELanq3keP9wup88YWZFUB1JEvrcaSZEDVpRco9CVWcUDwRJUNvBGJhio6GMeE3WC",
  "key24": "4mpAW5iJP7A5UwYBQfpjiCSSjvXd1otNzYv8hL2gvR1jQfhGfZNJHG6UfaVeVTEJJBC785wN7HyG21L5djuJd18z",
  "key25": "5id1XhFFakngc4sMYygqTBNszdnmDbeKnJiBVWQvedfL8qaooi15gr9DYLpgorf1SS96kTSzDM6BYuNSFW5U4X5f",
  "key26": "uFkYRYGSXphZTTuEqBEjSGVihJjrmmGbDAeoyi1jbgsetQRcbyLv76KxYRgvdX6DPS4t6VfVQEZXDaWkiviXETn",
  "key27": "3TuP3RvvYjqzK36K8D1yqV2jJYBVwCCtKtBCAtw6SoZBw3rP4a3kNMpJ7Srdx97m76PcMJmHL1yETu4seRZvqqxa",
  "key28": "3mFCeYkxVeCxASRT8cvpj7ggmjbnDdKaYHUJK63Edmu5meskwnjvFd5GUJw4SYMZ8n22PKEGSC6wq5rX6Nod83Hm",
  "key29": "4ZCUCrk9nQSwifrZK3V6swHECWTxcbEDhrDycK8SFhnH4KooXUsQkP9zYAR5mRyr1cyhQyECcsr3N1BiWucBvYe2",
  "key30": "4zZBBtc5CEyskM4MzgBMnT7Vea5VzG2Yfqij48mZf82jVpTWuWR7axb8EauGFeSq3zDRzw14YUxabMYzM35WXt2f"
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
