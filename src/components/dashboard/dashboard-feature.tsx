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
    "49w73iK1smPWTmJKmMkVefKaf9raTJTg7UCerUs8XGvc34UyHs6UsTocZxCRvG9qJuKEnkqD5M3VGud5TF8ffHiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmbDVqiix4PrGw12SFNGsA6pvWeswrqd5AhQeS6jkierYUtDNQMpQHxFmjxmsBUPwpZHqFUsRz4dKopyQLTJesQ",
  "key1": "sNuvmfkv6UBVvaQ2MULMBYftWkQ5rWTjnqBbgELdJfdsxGYJtVnZpkSpmjXGVxdajrJvQh7VDQEzDW1kwSTb7Bi",
  "key2": "umKo4MsSMQLLcwzQZoSDCFNKoHDATRhvDYpVZgjwqowyrByoWHDHsX3Ey5mMXtgNKgkU4Q65W6pD7HPdHnAjMcS",
  "key3": "5x4cBNChAr7RZ7ZZtmyTK11cKYZ1ug4Fj5MQ5Has7c7qnkHrk1HyJPKPCe2mPgHfiRfd4RHMBQhP1iUKKXxb27Er",
  "key4": "2zL1KyFfBcpgJaPLJzmAYDYt7Q4WPKfKyafeijMBCPdUyLe2EnEyiZqbnmZhA3somhcASGEbcQeEsFnTbbKkXjgr",
  "key5": "3z3XPe1gcsZTCQDEyAQ64UC51qjZST7Ne4QigbNX4mHemdL5Sd7CTqnaHVxGi4bo1CtwhXkro89wGA5pxmC2uLwd",
  "key6": "3Va97R5AiZBPpGxKQkRz1KLe5uzvBgoxR89ttktUZVs7URkwbEfGuPJ9qZkxMEZntTuUycJDZncqDiDEB15BxTCQ",
  "key7": "4ckZK4SdhkbU2KXDQdkQ8g6HtA4dSsQwqCjrfwHNTkQFWAsbAFmVEwnfP3JEJGFuwAt4p3DPenxsdYn6zhwSv7jv",
  "key8": "4Kp1K7J24xQNUXqpi9fNxNA4qfA1gRaKD888nYFbC22KvwAjej3UXvC1Eg4NcgnrEZV3jEm4oZX8TxQ2wV4tEfPj",
  "key9": "jELbgdkMCQRMLiFRyJeBrNmra9BC2ixFx1eXoHNuJhFnVaL1ghjq5czFrUxNATH947nuft5H9Ks4sG488DKCiNs",
  "key10": "42mAyQUg4WLfFCsMG6r69c4B8i4RUvraM5MQ9tCGZRzFo1dUcgUwZP7ro8nqj58QAnirCH4nRa4wXumoUsyYijmc",
  "key11": "N8g76hcnDqYPWNjD9t7XBuqxNXppaHuVH7hEpkAdLJaPfJXjgz2yVCcSuae66XGLRk8T8zXaswzpTznVA6S6A4p",
  "key12": "iLMKR9FQVeXfZY1HASBpH66dULPBKKqqyY6vgRqHWeS1Qbi4zLxRmcU2JFmksbg3EyxXXReUAiCuG7Jd1V9u393",
  "key13": "5UbHPZnjFQy34smKaQUmr4ghPy8EnwZDRdgBA7kFJa5CXCYSv4UWLLb7L7NAuFGCQRQ2mnYPaG6DVbHYm2jNYRrG",
  "key14": "nKaJnRWMWaHrxQEQhjfeQd2doDPCV5SV4tAd5jTG8mRYVqn5nN4uwT9HC1FB4E1ires8KBgAew6xPdXWwFPZFQk",
  "key15": "35TThvsfo4cU3EqPeEqhivtAoJ98V5T2c1SpYWxPb64Dbm4Z8zTnvHNFLMtbPUiktovtL5qD2PakvDXgRmhQwThA",
  "key16": "3zLAytNvm7M9hyyTBYqYQtJqM48kLCcLm6LzTao4BQqiofYHtbWeRuVtyW7bxt2vXT6yLwkbTwfzjuZ759CDDHeq",
  "key17": "4Siod8HvYXugLmrLCo9qG3oVLQ4YySfPdVuTjufvxHWEhiWct3aNBLZNYoK6HyeeX5P1D6o3nj5uiu9dWgGadiWM",
  "key18": "4Fg4pwUKjrA3wtvkYsAdhCjX2pN9Gj5gV98HVsiHRYXNhZtcVCyfthcqCkHG7YLgpSSam7yeHvT4rLqC5DGLSnkp",
  "key19": "CrBiUKGCR6u6ij2eRfei3rUso5YxtXu2Psh7oCMybWM5bQtFrEoXPiX2sJFvKkiH9b7JvjJeSS93MDDeUV5NJYh",
  "key20": "hYDo5gcetJVWPwHYwg9TAbDdntEm1juTuGppJ4H2wfCT1zA2MML7xjy1gpurUGCTMEgHjuCWYDEB9UX7cejJ9m1",
  "key21": "4dvGDaZHbhT3BKyLjhCXKUdstiopJ3bFMKyDK4AtYZE5UvUALfK4LkfjGMxt5hUqVuvWcxMkvUNEvprR47faGeUD",
  "key22": "64eEnBhtY5e4BBQBaKFxBD7F54o2434uxCm7PnAE7pimsGBYVbWhLC4t7SfoR9gvHGcGL9hLQnXZfvz529nUxPVT",
  "key23": "596caUfRWyLvx3pZ6ne4YCyNNA2tgHbXFhXnRWuUuAunqNnqtcy9TqEPUHPNzqmCzV59R5Tpaiwj1YVfxkDBBHt5",
  "key24": "js5nEVbU163LgjeqX5FmUtH7VgNqwKiK6AYxC1xWBA47rfK4LYW3iDE6NcVXbkfVAvfyB3mZeXFyShjkQ6qibgP"
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
