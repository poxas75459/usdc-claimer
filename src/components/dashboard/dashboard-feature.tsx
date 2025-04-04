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
    "2MLJsqpQGPcJWcTLFNZ11LFeA9c6mcYSYjgpVBa2d4KdYe1myfFSbTW3gL1FXrHCfzjA9DBV7hVgAHhszvEqGqVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WkNr23dvwi8M4dL95TPA9PGDwZJrD8UohtSLpsqLKa7qyp1goebLdXJnyHYPVChg7ZTppXhTCTAqfAttGpAhor7",
  "key1": "4nHob1e56x9apodgCeRv4f7mRn2sRip4tFpfPhmwDeZ4PUMpL4KywG3Q3ZTvMEcQGjXg7myVS8GL4DyH66mUrYr8",
  "key2": "3Dtrxh8ZA5VxgandqAvahPGaz9Y6xb4cY3Jz1nyZtz5F5rGnfS68B5gMVYhZZUxdP52GpjCoWa5DsLC79yirUevy",
  "key3": "47hnpDovcUPQX89SvcTndYrJtx1NuRti8m3npYiqu3EPwqXW8TRwBAA2Wws5zcxo5JUMYayhd8if1Y9vR4Nh6ZpH",
  "key4": "4udwbka9DGET688Hg7etkMLhapX8vaez1csvMVemmpBNyaFdG5KwJuqmyraH9LZmvRxG3Ksj4m3Y8ujcJgv7GTMN",
  "key5": "3ZBXJ1oAuSuefK6Yqxgsgv3n5undRZNmeRmu6sueZGQgzF5T5ZzMoqRinUGnEh9jYrG6twe6YxWkizswzeZmdMBW",
  "key6": "kn5yZm8S4J7iwhf1M1kADvCs8bBaR2maG7M7MwtJmtWFFVP2W1eVyq9fq1EwzLKp9EtWd6TrreBuRcHecs8DxnM",
  "key7": "52NHhf7fhLMpMsdxYe9rdqj1AnrpEGeNT8qiSmWroA3yFYgLeL4HLFBsAcRzS88Gzx6oQHqf2pibMUP74tqnsJ8r",
  "key8": "5puuAFVNsrUNjTAWXe9ForLHFY6vH2EZxUrDWcP1ZoZFLxZ9JHC7i3gFtx8mdPfFJXTSMzKgEWe4hyngZvwxGCna",
  "key9": "19J9RgQxLvn4rqxPWixzFTmVAaNSa3EGgRh1EecWFfhcahsVceHg5burKYevuS5XRN6AuoZ9WvE93YQQK2waTXw",
  "key10": "5CuokFxEmZMrbKMko94kdRpxD3z1eqrAET2Ge92WzoGRrkQ2eLCPbFRfpAhn6K9PeEezXJ6LXeiZsoKC7PiWqKie",
  "key11": "2PtXazoLGKMg6wRmnYrAckR2LDpEq8zJ3dTLpt3uwo2f8FiSp6ws29YRDJKcKhfvbYjM1M1AqNKaVpYH6JvpPoK",
  "key12": "5b5DXyRbEEDM3kWTJNZTbXNWTWQyVYCwTLQ8sSgyaGHQhJwTX15PSZEQHzpmCZRDZ6iExaZq9vJZK83QbBsW7eht",
  "key13": "SHDWDTs2UNyDtuTfeLNBXheQYWKprxM6r2djgCf625wBSJ8B7UzswtzWDy3GTdXw5dT3ft3u726SfJnnxBsp8aw",
  "key14": "BmBksL4jqVS9tKZ8Tjtqa3B5jQE6KHXann9nRFXhdurepBQbLzg1FY66U5SDV9HiLkQmmWqmPf8J9mtBaVxKHgE",
  "key15": "3QyMtoP5jmbmFNEMYQJiH2xgz1qpuCndddW1R7iWwhjEJXWht7NDUCqSpPqEnUHFEGJYKqcMk9kZCmcH8VKF8tse",
  "key16": "36gemM42oHrRZtyDYR64zYy4DdL2ehNcXnx1qJfsmDBtZrSETJAwQcRGfsCVaGqzGSh5PJcmJq4R82crDmhtLoBb",
  "key17": "3ZKCjdYAW5wxQoQNMVqA2vpHL87ERpsUgLgP1mtef8S7focxUUDH7rJYTTTvDUS1tkQqDQPuUpNXBonmjypNzcGz",
  "key18": "3wciTAWRfBsJshF238sZN7Jq4hCQv7CJaZDBgbRrA1i7P7bHhw47Hov7fLwcAuTc9s7N9qE2Li79RhqT2Wgh3rL5",
  "key19": "3jngwXmuR6VwbN56G7vmQKQdLkxaXzF9k1cdYcfzFEgJ3pHvjHav1GbNjKvTJLPcDEh8BW1kFKCNG9B8eikpZU6r",
  "key20": "NRDFQk5UoboaU2TENrY4iT5k6o3Ks2DnaLtoo1HN6uTi1jnDgFgy7umXEwws5UvRVduwRU2uCtZqAKcyMjn7pD9",
  "key21": "3XpsELgcUwhrHAhYqoMGQM5jBqbYPigZ5qxrBXdmAJVZVDJfeM8Qp8RqBgmMMWFFMggzDwc3TnESKHm59zNfhJ7V",
  "key22": "gRESqT4UFNRLMYY1ki23p5oF6oK3vYDjdT3zeJu7ovgZKBSFGfGLgCEhBvKsAKdPFfuPMM6gtPkhdnqNqUbbnzh",
  "key23": "4hEnjKdmigTEkPBxM5FfLMpx5N277tgvKD5HJazmhhD1UigZTfP6gJyHL3wPucrkWD7AUcVAogXwRDYktRDVCojr",
  "key24": "3gXrgeQu4hLn3Ya89HvPLwaoh5xMU4RFT1mGMSsyVEPnLw8To3uerru4HQm6Xfef2oVx62kfeKtfWtkKb8mBWFAj",
  "key25": "3hTcvTY5T7yPY4fKvbMipE4vBJHPGJUpCrXMbdFbcVcJt9WuHfYKDcACrRy1e2GxdskQqm6NKAnFWxsm6gLNiXQa"
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
