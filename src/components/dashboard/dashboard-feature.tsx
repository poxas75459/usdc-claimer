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
    "5V9MFBQKEYt1gfVVQbZhuYuqPfBBYU2CseoyREySQenZriJMQUCm5GijV6uHva256Eo5eRhc3SNawbqVXox88u7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XMSGEH6teoKGurMrr6fNnfzatN7UXvnwjkzgjhCSSyZcZTWFdQ8B9bg3T4tDCZBzCXfSdP3pMenjBhBN5h7Mb2c",
  "key1": "4cBrT97z6P2pKazT4w3AY9Yn8xiJTdDgj4CwZmbruHmfMT5FcR7KnYfsZ7BTLEaLcLKB2uwyLQNgnHo3Zm3dz3vV",
  "key2": "3HJ8tEsfiLaGaqXMMW9G6RrcLZ2KS2HqQQq64yKUiB4xDYpSLJzGnNJj8DwiScRumesofmMk5gFbQyUBu6zB3Cqw",
  "key3": "4qjYCt9JfTYXrhwGQKTS8VAk7tGYHVSBHC93hyugdfMDUbhk1oMiigNuEUgn7fe3X8EesUWZZK3TkbR9ZUDULEt5",
  "key4": "DzUYbzs3RjGJaPejSEYZoBZcgajpqo1scKAXnWXvgUmErxeKmUjCpzx2ymKY2NTceHuetTS4euq5rKEhKcEQT22",
  "key5": "5uhazNZzQZJJLRAKea4HZgc6ztY922kSPcEnkh8qZzbtYxrUsjcK4N3vTrHgz2RxL8DVoHpgA7w5wf9V2Fco2hEb",
  "key6": "3DzgYxDGSjzZep3GbeGx3MxWVE1dsLHBdPF6YL2tTK6i5drxW8rjqsktY6XqxD59Tmt5XDiV6utcDDcSvzrwKk4b",
  "key7": "21kbjLSJZXBuB9Bf9L9N49jqDiEmvDgmxTjvk7d9hSLFJsakmHcSn39E1woctqgTi9VkwPPVtP8y758BmyRXCQir",
  "key8": "4TRUvsBbAGVANsPiQibNXFWkcXhQdXPqwjwkWyVWw15S9cPSgzMAuD7RRnX8x3WeC5bQTsw4vYQSbXM3AwApZF1P",
  "key9": "5GuRTKeV3qLVvhfZmZv1JLyLywjW9fyPWA1Q4y5LcJoABcFFkGbrpkfhtS6LnZw2Qk3ovcqpc3i3UZ3Y6uJncuGW",
  "key10": "5wHHmwyLgVEXYTHDBCXTALGPLHtcx8cGJBRPZRx7ExjXoBGyBop86NFfY2PJnsARkW7tp9o7HShnK87Jf3j8ZXfK",
  "key11": "2ZmGxJD3FK2mxE8g1Lc2GfSwu8SdWHmExWkMfNknnm3t3bGRXUi4TkTeopdf1DaK5T1hyPYsd5uyrLwGgBYih8cx",
  "key12": "3B4vz94avYt9swXnZ3AcShWu5FEeYw4rse9bRwF7LE2w3sFtSKWHa3SWE1b84a1jAcpYQyJKx5oYbpgBd7kFmnEd",
  "key13": "219Sf5ywU3dhYssqVUfJkGdMa8QT53DXkEthqvVnvT5PVY6wrAajwRTtuggFzPY9uzJs3m8qAynBu1b9jckYAgyf",
  "key14": "4FdonRSyLDQzKtfup1b55iVB2F6UhSPrqsR9CPxe4P4CaQcntCyJkMczfiJEDr4Ga2rD8HKXmYHWrXUiTzHDSqKU",
  "key15": "2pPcBsLT3QegueY3LzDEDhNKTzQeYQiKeKY5k34iRCMrYHA9JWfvXnqcFHtSY23R3Xe6HmKu1kdv8jECdUXfgWjB",
  "key16": "27VYn4GLR7Ym5p7G4J7eoM2gNsJccRFXhF52TEyowSZUs3Z9HZrp9yMq5HQtdht3uBFgCyZJRQ2Q91BUahRWmVgC",
  "key17": "1uF8LqNg8LCkQ4i9PYwTU5K4Qd3TpPWGQPUBVk8TdgQh4TH9TgJkoW9vVKhwPFz4sL3RH1cgJ9quWaTfAgzSDe",
  "key18": "4sJpHh4p1KCfhKp21vof5PR9V9X3M9h8ZVuPzCGwmJgoYHduiqFb69advtb3KxRmZ5UWe8jL9VyZAZ2d4r5WjBk",
  "key19": "5V7hLPXj46tYgGY2s2VSuyTvfKNrMBQDnxW5jtBbyUgccS6HVgv2x1473zMgEBkVrkvPoRzvFSytXXUcKj4osipg",
  "key20": "iYnwDuZn9s7BYXc5c3VSGkWoJHvQwu6F1riCfRPGouKKoA7vFA8oMxsDBNARv4EM1KUXpqn1c2ejAFz7zMAzDkU",
  "key21": "3JqJ4EQRuuyka9NH5bWsu2E8SPS6Xm9hsQP1JBVdSHN2cZjpnQ6vryJepVtZeZg7rF3iNG7y5Qjig1rv9KJuxuDd",
  "key22": "58fkyYDdKVCmX1Quy4xxctVk64wsn3PTzqKABwD2PhCygGDsdtyiwJ5g7rcqFrf2oUDkLLhSa2dN2pNzbGsA69WC",
  "key23": "4h3vqhqCg9u8GDocEmDkhzqc1aSvSJaeZHo9SDVmVj9xo8NRX3tPRtBHzcyUjTqrMGKD3thkWB6wQLhsAcLN4KYU",
  "key24": "hPkHLM7mHa31GdWkgHjdK17ZZdw7JPtkYSfXAFKY1LxpC2vBLRBMSSpReBXo9niSK9z3NYbHx5sBAKfBPKBdu8k",
  "key25": "3EQcGx8w9gitBhytHd19prPxDmWqqLZh4i6fe5H3B1bg9HAjzCUTJMeVsDB3JMS1PCVfUiH1LYkvsp37k4Btj4fb",
  "key26": "GYtaBkV67SmxXw8Lqb6MMDxWTqaCxU1RyFf7LMmi5PxLqz4LWhn1rCcXU62PM6xGdbJRifvJD4kB5tAd3nDZAYL",
  "key27": "62aWc6cgACE1xzhxsCZb1FKF58J1919e3yrZu8V9R79PdNtp2qkXqMmpqn3yWcMcDV7LBBc15syXnCCxN9zaFpMT",
  "key28": "5CsnmQyQ8ukvz4NtQpUMbsgh6SdXJ9FsozwznnpJTvgZABrGFkJ7vq857FuL7btqPJAJZX9bwxrYWHKFywMgkMg4",
  "key29": "4Ku8uSjGhp3nGKsAhc95UTdKeP4H7GP6kcybtxjC77Vmin75LoyZFKRsqvnyKo54eLdszk9BHCYgXoXosJiugj9u",
  "key30": "51FKmTA1nQp9zzs9uoRKEP3W6mWVzT7tp3saniEGzAh1cQbB86Ywcinoj8TFuaqiPXoAZ3P9urgj1NCbfyk5pzbi",
  "key31": "4xUaHsyDqrnUE6pXUeiWnCyYSMe7uyjWsE2YFwoqMhTcoKx9Qznc9JTSuVr7uEpZNYfvgrqYgYFT6y9q8WLaLBxy",
  "key32": "55YtrGJe25zreM7Vji5dTQraxx1Lu9Ms3noSwWhUcH6Z9xKVq2AXvqwfW8urzNwmT7JrP2CUktAFHuYbxRN237Z7",
  "key33": "64B3RMp8ZtYiAz4mPoEQcjtcBmNkAmuZvD8yzp5fBoYvXuXnXRBMXMCjVi7VcSux6CUXmPPVHv6cDmZHfmdUb4Q5",
  "key34": "4sc7iV7r3retzcHfTkdDFJU2LqJCKD7WUypcXJePNYdZLpi69F4VmPPEUBKpyCHdsRopCMehiqfySngzDxYYRjPW"
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
