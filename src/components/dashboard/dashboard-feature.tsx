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
    "4vCVvvAiDFD3e8ZaqPbfsZ4xPxkw6jMBtDL7LX1unT5Ueat4zny4ZgBY3ixWEBdN9TEL1aceLTGH89ceBHMxnT4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31htJJn98stpbVeL5ZQsrBUGedeTgeoBDUpyiHXC7r9SsBX9PF5PAhu36RvAZevdeXY4VwtXYnwGJTNyLUycp1GM",
  "key1": "R17VQ6CwRF3vQFrex4mA4sUAfPVHb6dULvbYVpmgJiX4rrcrJLLtYkyu8odx3Qj51MRTbmFP7CdY2UH4LJ6KHk7",
  "key2": "2CpdXxoS9NwmGBvGr3bVfnZfDu4eSwoW5JyYDWya8kTPg9ev2SPE9fC9CeFMfyisBgWxxppcLnpUsMUgkxQeKDeH",
  "key3": "563bxH6T7NuRwHUGi8HNguV1NWmyJMPCiSuCCpJs4Cj2QSQWr6D3Z7z1fH7VzLeRGzhTFgWNzKnKJbfXoKsqWSwP",
  "key4": "cKfB3qTo92yRgygbgQPEXRXZcXV7PefgZtgFpavibu3mmvv1d9JR56ptqVPR6XcdN6TyZpVHag5g8bCDZC6PH23",
  "key5": "5d1WLouGNT5jza4a7dex1zfZWHmmnHD9T5VvocVA2f598JU4sgBAXwrS4n6ZroDZa7tx6g7mwVD8LmSs4N689ss6",
  "key6": "w5Y27RL5AZib2gEei4u7RdzM3UbYyUhfjUaZJTFbvt1ENAoVYrkhRDefcDU8ZiJ4AJdMcULR9UfReh5TFSX6txB",
  "key7": "5L26LveqDhJuj7aWbPuvUc75mNS2MTnniTkUWCMGkX3isCZ1E19XR4LuNY7fBbfA6tCLLLLqwWCxDPb4DoRELvUm",
  "key8": "3e2aZhUmTqM3oT1CLXxdabD38KCGRyW1hN94FzESzhQKgaYGcX4BWBa8dLVckwbom79HvVPNYrfLKnyJrxzUHnjZ",
  "key9": "q4jR5tei1maHRPiUGwaQdZb11osPiq2zenDahPPzDCieGJXnGAPs4f2XAygfC443xW5bQ8B8dVRpREgmqeYZF7c",
  "key10": "3torK7eWgzGBGzRAwmJVt5WoQRY6Cwg2VwSAU8gGVWojAh3r2CLnc7Z3VgYh8ogi4die77EBgEdan6cHXTU3NFTL",
  "key11": "NfYx7Fz43YqzCUS4SqYG1uC519DKLQc8Hd97yaQCh1ripKuYTg25orWZxDBgGku9cwaWw9Xb4UKxNjXuFcvbct3",
  "key12": "5ar1h8hh8SKK4cXATxEN3mZ5UREdsK5NWdNKUGnV1SsY4RRfujHaTL8Si2X9Bk2V6gi2N87Eqmw4cRe3Bo7VavWg",
  "key13": "4AzNvqWaoFVBimUoV9o9LEQ1UGrP6T5PHWw2Skegai35s2Q8kPnDoJKmz916wvZr48JbFDbLntfaGoMrzVhq5EtH",
  "key14": "4XU9S1xdHkYDnuDx3Duz9feCT8XcJD6sHmuug5j5LH6kWrLedFyqpAYWunE9eXADoCvN2asPCuS39kSVAnM6v7mE",
  "key15": "enMBNNvM9biEECr3mgWTiGp7h4mRKYe8wXqo2jDPLkiy8WRnPSmPsvoDVNZxafnYqmiV3d7JAhsJzZyDujLg1KS",
  "key16": "TCe9QzRgddrTp7YowZbjXW9un1xnLeqrivi7RquPfW4MHv9QsBsmEKZjJ3SxqXFNcABb41AQdw6nyWvsVQ1tSiE",
  "key17": "3QgZvJx27D6zsu3LLZGAXgXLGbmyJ6mPYHLKicFzinQ7kpuKfJ5NwhUY3SBZ22VBSPUzVZfvRLSP9KsKbAgFoKoG",
  "key18": "MGwUHNkozGpcz7SvHnL68g65yX5qWYkmVmcyoKRbk5JdnoHiftMnG8Kk1GzcR6FSwJXnbEJQZacb1XWn7ebd84J",
  "key19": "3buaWvbaihrFaXdEgxbzVEETgeLkBpbfHmV99BEQPVEcE6thNUyep67zm9zJYxMwxZbByqRox4MLrPHZSgqjzEwF",
  "key20": "358iFAgTTmN7w57u7rGkN5kz2XLmW8TvavJA3UjvX5VQ3tYBy7537nk4NbFGuFZYEBYow4ChUoUAimpoSps9oKU1",
  "key21": "3yXnEa5ni3SBvoSDA7LtBpoKpvg3WngKNPXb6X1XzXWRQ1FYerkApv2dqCSTaKPG1M2BQaeh1mX5D7rfmhZX9pUx",
  "key22": "4BNjpNN7Pv5mDHWjANsCoR3x2EpAKCcbZc5ZGfj2aipj92jz8BSXNsbCetAkP6P25QaR4D6v6KUGv6f22UwTeFnV",
  "key23": "UGdTWT4NakBqDiRSm5qLjRJ4qU5vCY6iY8mTBjSLcmoNuuKVuXCn9E5LHCPqqQxE2sZgRXCT9BoA4WZscjTVwco",
  "key24": "bxv82a4rA8c7YbpwSnrYasNDbRzCTRZmzs3L26wbzvvKZM64p8butJzKwuBu6Bcb1QBjCuiUftZn2fZzsKxQytf"
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
