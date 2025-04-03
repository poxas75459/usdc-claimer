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
    "2zm6Tv3APEXq5poykcWwJCxVSPzQ7wu1MjLHra9FXE6C6TCHtwNbufheGmn7DMjmqpEbCy54qPLkmyAfhpVaxpRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qWnvc52nzHTiu9JFC5KKGwBKQh7TBjyhRjAfMpYDWvCzecZS6EPG7Y88NTbuRESCZK86sgVLcQknKQwmFfAZm8j",
  "key1": "3fKMzLsnn4oT2W37L19E7znFjy4jboVCzb2nf4yRWmE5o97qPihKZAiYH8Qxfxd7zWvqWAStkjninTdKyUDTrLz6",
  "key2": "2g1ZTHs1bR3SDLSPzVXT5Hp5xqrmHMrrqFA6yTPhQzuBYBtkSCq5Z7amRKpEozGKYqjW7krtaB8c8XsSazqoqWPc",
  "key3": "Pg5TUpTabvY13xAEJhf7djZtKApzzw5Jc5akvwQSHXM3bE7ZgdZ5dEcETrhqzA7BNQKzTtLiYygeCDKwugXua7P",
  "key4": "4MDej1y4M2hiCuoMQPYf2DBK6cFBdbEkaoQJQQJkV8ddDBfuyD8K6wNCAeXc1k1gZeLtd5WncUYk7whME9EF2niy",
  "key5": "3ctzvwncuWEC9FXmmjMYVTgjxGxijoANYw2ohRkZoomGhoSd8jeRzW4mC9AMqMsuPrF7AZ5vzLhujW995oXxa9Pd",
  "key6": "3AKhzqJXHFFAEkPGL1gmP3YuPRbqAWKdAMj7tymj7fdxBLxtFm76poJkJzNwFEZe2yz6BhNv7yHDBfA172CeTZcQ",
  "key7": "VEbqEHxooNWgYBiUp9rjCQcj8kAztMWZpBHoa9SEyvsLUYQ14Fwa3TYmhbSu1pPcpTgnzAyuPyrRK6EZzFN4Enu",
  "key8": "4zRPzqEuoNXGe4txqeRBn7AjC46UQQFMEPLzmh4xzeaR6Pqz9dTAXiomH5LZjx17yweSqeQ9UuhtK3HxqYCgXUMb",
  "key9": "2mr4NnGe7v4AWVAzbfLxvAAAQBBvPyyXSJMthhaQfa6kCwuyAGunKr4P3zHa34hPvaCrUZYf6VREK7XgR2hJZJaP",
  "key10": "5mTfF6iAkbNEVKx3jskjSDgsskqdLByreXPdsttEiyCF5Rhx3dBcuGKy4gjyzT22YaQEARJdCVa81WvXJSzpaQLz",
  "key11": "MoV6nC6KGpvtZgLpJ6joHhfZcztziUVPw9AG1eEpSFBdYCFbV4jtHgYajG12BoVqpf36zRzm6XAj6UycVg6zMz2",
  "key12": "3tkYtdWtCiydvgbPLJeM4X3GZVNFR8jhcK3XbnuMkDztZJXXCWFGRtzMaFk8v9Pmd5vn6PRJsdLwP2SwEea52TF",
  "key13": "3aGpB1djJCPTofVDYnfSRWGdfPUArK7xTPZ9Mts7ppspSVf3qAACgQZAV1hPQKD9wYpGh9Jjn8PQ7k9nqvhjRESS",
  "key14": "5TuPXurUuaAZsRkKan75CTQVU3DmCUgUNTZaWMfrHyGXxeBLsjzHDVmzwnbc7pvDtAWJgL2a5E1HbVePQSQptbk3",
  "key15": "2ShCoQNW9DYjVEkJf76XcAShKm2x6WLdm9Vwyue5hL7jyi7TLoEGGmXvKLYkPxGqnYcAwarbQ9B51bMRaHCCuVPQ",
  "key16": "3SEBWTBUgcRim5JgH6QmCtW5YUdhs1cK7742ekuWxKfqAZawfB521nyMuHEjh2sD5bviMD4LgftvUrzfAHjVZcTH",
  "key17": "k138Uge1QWHdscQz74ag83HzHk5kEBBB1cD2Wjn35n3fGTMhbiXHfL3V2yWkr8xyyxrVzG2dmQTMUtmLVsPAqjT",
  "key18": "2gUX4iGZ4vtMjoyKVzzT7D6aL242aDVsUj7FKBu9UKj5j8q9NQYSpuVqKCaLKBi3wpJzkFjBkSyRkQBQZYS2L77c",
  "key19": "2KiDGbVWzk8xM9Z41mqy55oQjd18bfjQ8fZ3baHjyh4G2hcsHv6PG3UnhaPEq37MbeFgiK9itDBCtPiSbYAzSpce",
  "key20": "SA6PWQiUDXU2ic2BYtuqCuckQ3pjcnTUF2nyZWSn1Su1tvorFZbLk19oVRsUivjVdPjij7jqtmFVVBPHUAHxHEU",
  "key21": "2XxfkKPdT3Z4SkRurqULHQ1Z5PL4DKuK6oCjAfBbLJr6itESZ8fnZL7aewbvBMeEELaMqvJT7tA2yWn1u6tVvfyo",
  "key22": "2TRvLXweSoRVHPZCtCxS1wqgjP4djC5LzoUMbYxctxv5WLY5m1SukNwHD55zcLHWwx3oZBiAbDv1YGNgcQmxrxMC",
  "key23": "3NAbaMgmt5CWcUXosqP9mSx3S1bLQ8yJCZCM3GsibsuwzFKac52ak6RLqg5yf7oRt3eHksefzV9RBaiGMtqMk9ZK",
  "key24": "5xM9yyA1zh8kN8Pwmhme7aixXb33dkePaQPY5pr2hBuh5iqNKm42cJVxpfUV8m3eRUQBLLFNheueHkoGLy3gCDwK",
  "key25": "4P2wdSx1Cme79FkBTpky3U7qXL8GjFoGEyBgHwqNtmTzLVTF45SpgmEGh1JKi2CHYcd3bYVRskSeKsqLfc2FrGuT",
  "key26": "2o7yki2QjknKF4XtpuNVFe99AwWaVJM5zfYdBUs4aKy9EAN9ocyMeNXoSPjjW9Z9P46EbhSefrDkrEfT6BDWN6bb",
  "key27": "3YYDbkmFoVMywqFYbGt59k1cdEXbwNDLnZhwQ57dVatAiSapzvwWqJjty6SQkSYseXNkF9oKsbeyRfa6ykxeHrxH",
  "key28": "2xSiXjnKXAkHnPKPzBwcybYkAXDfT6YZHjCodBqKZB4cx7XZ6EvCT2TMWpmEzfiCieEwjHkn7CHDpSK8NYWXEUKe"
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
