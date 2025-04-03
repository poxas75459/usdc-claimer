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
    "5g5zbwC3JPps4aiCu4qB63qN9Gvgxcf1YaEJsdMqPzmgzHud1BojihiKdxsZ8efQAqqJnKfdjwmnw8W35boY7SE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nD1iG7w6uHZrMRyy5HPBHJLqoyHhaBxrgyKQk9WZrzgQaTBXLtUXg8EoZytgpj25x3xFcVpkxPzxSHeQ89ek1XD",
  "key1": "4JQUsmiMFEASxWWoqFzoVXpPtiLm8B6xTV6bKP5iQ6HLN2Vfo7GKMYo2bgnmm3Qw15egRsrYe2sLn31iphnonk8F",
  "key2": "2rUgbNgqbmttWjyd3Zo9Tfc7faAQeDGDkmfsebyF1fpRhoqtCpcZKVtReKeB3QiScXmRWbM42Gs38W1kAq3ACVAG",
  "key3": "5qAHhHYP8ZtmYAz3CDeGgZVAnMok3iESBa1X2gWSn4U3JU3pGf87sRoB2sveUmA37p7xamxRAmyYhUrL7X3U8ypG",
  "key4": "4CVXi9ia7io9nfytypD93hNFhMBooHHtRhvCmDejrvHpxCxEqGzAQeBQa3PA88Pma8kj9VA42bHWb46S67k1BErs",
  "key5": "41W3CsDFwAmQuNFg5K6WVvF59GM1cQWfYM2i6RmcGB8JQnuKwZLGF79jyDVdCdwauEQBztRvs9L7yypcadfAWcFa",
  "key6": "4zJJAAo5pKDc1H1PY16S4JGEhFUqvXtydcoRMwNJeNDiwGhKsUEeiJuPcxUn69M5pMbcjixZhzerq5uNvcpVz5kB",
  "key7": "5erfhPMRDW7WztSME22xzzosWyQjjzSPoyH2jiHiy5zpmXgPEZ5V5zEpmxBVK9SGHBYMrxsAQCRhitLDrF9V2BLS",
  "key8": "CEYvwbjT8hhsgwg2HCXfzkwVZadgFVsDHHCS3ahz9gwkHYSwwqNJjshHuj8dEDy6Q3yZ3FoJTLWKJrQWqx2zrqE",
  "key9": "4JHsuLZfrtc8GRs3hhcxiA9EQYAkqc4C66Sa46vA298M7iLkreSk3LHHAfvBV69tNx5K7iM2i8bsmVagbg6FXrDh",
  "key10": "2FzqjC9aBZB8PsYC4RTrXPHaBALq9q5ug5Z8JEDaBfNHBoLJ38paZJf6PkvGRcKPHij36UDQJNJRvTNx3kNnD1ZW",
  "key11": "5m4GyfWuQsuZ5Z1u8qqbuRM7Wk29CQn94w6dcsTpaGW3QZ2Z2LD6ax7QkPr8Brpbb9fT4wPh8uQUUzQUyNHpGaCo",
  "key12": "4MFd3Qxz2VJTHHqvexKx3crGaQDo8yPGbvLZnGZxjSqMNL46DuCZYxAjVqF6gvmoXiyiDLYYskvKm7wieu3wbJtR",
  "key13": "v3e9ZkfdwiQCFvXWAhhmUHwyx5XKt15oW5oVMAmEGyXEC8RFTGjzKahRtpCnp4NgZFdxtji6Bk7bAHNhtkWVm79",
  "key14": "555dUmkMdwUUQDs7eeudA5m6LKSXnqEWvbVgMfnuaPtCfXkTtqgM1mdZjik8c2HjCrfHAg9DpKQ9YzDXHHjv2s7N",
  "key15": "bXbq8Ter2gucz42Gx3S8mvbabRrnzE7xPSgcT2sAH1L8HG1Hb3qyZHpUzk4XQsj6iUDgVrPewiAAhdc7NXgNmMD",
  "key16": "3BQdNY4TdtHmR9AVgCxAZedPbqFpHTQwDYQgtfJVqyoMzmepKJZNDVQGkmXWM8sbaBE28tqVGwxJcbJ3VWwvzbHy",
  "key17": "4RWzHWgmyRpWuftNpJXyQgcYzcjfkBBHGUdAaCGntQoH3DdA4sWtMr3snMu4TC2brupfowaSyozHwATVDHNRZwXY",
  "key18": "5kMPLRMSfr3p1o1s1KVGJ2Kc8BNrddjcoNv8cZ2gje5rbNRGPqg68w7pVyaoYGrDSz2TQm6de2d7EZUbqZipXtYy",
  "key19": "4k6yVTHBLQEGpyx6HRULaycQwccGuwKsASKht7jpDBTVwpPQrrATV5S6msTnJpQzzAjzJ8qTd2CqCHH9o2gqwRQs",
  "key20": "3pgAYRHJ5dRV77ezSRKcpdyD1vCjjQhgWY5DQ8TbMTuqjaqukvqoYiiZDYaTbfnLXjPX1Ra7o6wESwg6LqbtRJnL",
  "key21": "3pM3zPFuCUkvC2jh9498a7T5QvXrkrw8Hfv2FThY6TGapdwjh4sF93rM6XodptsBhXpVU1UiJ7TYfkUQxC93Dc5s",
  "key22": "3U2r6cKLUTFKKyK5V8QcmooVavMgcNCwqq9fyVCSTUmepvCpwpNAfqoaWt7QhPDJkAJyFSj9iGGvP1eCSLs622v7",
  "key23": "42DYqvGzLCZJE5HGpgC99mfY5grmKAKRdJPom7BMkg9poa2MPdYm84VFt5g4x6bwrVLgNT5VQaygTMK2QnqP89iB",
  "key24": "3fthj8j4BC554DvioEbnREbem5SfEp3JSnRw9cqHJXg188uFJ8zFZMSb17J7yBBLo8uBLN7eNnhySCjpKhsV5MYv",
  "key25": "55vVgHm8Gpz5nBMikdTMbasfhBNjBQXPNZgj7DksgTUdPB89BZfrdkkc1drJGK3qYfrYXPoJyhSg7oTzMWfsp5TU",
  "key26": "2dN9jaBMLxmNLDjbqmWz2RaBRnQyQkBmBVSjoXnnmKjNb1K2svxVVVo7E2fRwB8PD2dWazsiAtEqmsxe3QWLZ1kG",
  "key27": "3CRtNpjmkjP5eNsGA6YxUdhVoG8Yh64wn1wfbayiaSDHHRhZgoeY5XNbLNTNgKbrQkMGhz2ZUVmspbx6PhzNPqkn"
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
