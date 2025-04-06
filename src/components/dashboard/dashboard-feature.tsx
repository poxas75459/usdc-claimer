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
    "2w5dqmesMnVW3XAd9P3aUSxVb6Ykxia6NqFaUcZsG8BRt1e3FZzqRyUNCFvbz5HaWuPbAhEmR7v4obdF4D7SWh1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CvVEU5Z1gUL3tmVT2jgV5r9pMNLNNMCtvZfRopzC7E1x5Q1hJsACU6azrJwXomC82tT6a39VLMrB3kraFWTc8jo",
  "key1": "5hQXuEyVK3XcHDfb6fh5Epw6U2jPPqawQmrvoxqDMvNyqyGE4qqWrJpxiStAjsi6sWSSFmV3cmh9D5HeMUjrb3Kj",
  "key2": "5aKVGzJGnKFx9vaqAV7Y4KfLPrWUH65dHorsTwu7KrfdDCakXWk87fuzVdeY4VCYK5B47R7Kn6gQMXDpXY1owDMe",
  "key3": "3xoDtJ58MngfBt4G2fN6KrPndXqWPM6nrXkeBB2zjApX99EjVcVh9Sg6oSUDtBPkFBT7H3i7QrYniaNbDbKGJiXs",
  "key4": "5XhafKyJ8ub77KxNN2vBh6qiWfoVX3eGVpWWyZgYMnX3kxXN8m3qn1LGhKKgBipuand2bXvAoCQu5B8eFUAgXNfF",
  "key5": "TMe6h4k41sVraVXUmFqjYJqdABi882Tb6Gdgx6HXu3a8PFTW1bXiJRUvWbofWoAgRCCyM9mUXnevFgTPYkaCxjc",
  "key6": "3pmu6ekc6j7TriWd1DKSfjFhxtuoUJW2HhbXfMoTE8MfucyQexqbovkD3uJA2JJgNYerVpHL466E8uLfUD25zE2N",
  "key7": "5gCarHaMgCydZvgZEv8c56kjNrdGtdciDgqCDRwpU7XLabjhctL1bkjxNybndwhjCbsWZ2hbYs59XYCoqABwUtX1",
  "key8": "3JAmcR5BR9W6LMrtNC3RNRMm437EmttoDUivHXvhsTJpiK4WcF6ypdLXK8ebupWNjEqGbXPGtNjTZp7NUdQpgg2h",
  "key9": "Yi7QEqYRSc6D13yS1aRfRDyvyxeLba5vM5jEhmL3j3hLtnHkQjU8JqJpVyD6M3tpJcRrcvNGVw6RWeFwhVNnPRX",
  "key10": "2CYAqxu22qdn5hJo8jqxfwqt7cufuKs6cXwbDopDukPwGLjw6Uj7bSKHMzyD88Bz8xY98YgRZPXwBvVPeR4UsinH",
  "key11": "2Nbp6b5MeieYo3UBJEeiQopqFfJWaiYTYcn2X6hPjTKz66eKe91Jpa73Pwfd7ykxPb6zo7LZaCFTvGL8pMJarg87",
  "key12": "9yahsSXuJLTbvkYep8YfZWbkMWqEoW2aLj6HjMkqsgZZxjJYNE38HJ2hhkytsfCsoLMwTbe775iD9gFJZJixr6P",
  "key13": "215Xcz7Qz8wiVWnYb2LSgxABQfha6QrUyPX7VX2qp2mCDHiLK5wVyo4zUF76bCzKEeoLECvQqq41rGRf9bHMQF8W",
  "key14": "5nssiDvgTbrnoz5PazHSKt9sgRAy86JpAAVcuaqzCJ7pZqPWiaWLCKCK556qnddUgLBVfDHS83AeNk6QLhwTB36s",
  "key15": "z2TgQJWwEWnzbsFHGXX946Mf58Xno5N3K8gYGzUH521RzaVf5w6HTp49fBNa3xAXTwaqmydTepTaUdNutNfunc3",
  "key16": "5t95trd69snE7WHUjaCrTCQ7j9qQ2MmfmsmCiyhT8w21QK5BGhFWHQCpEsx13PuxXPxqFM37TWSsWqS9xsTzMu2f",
  "key17": "33xuqGeQjbJJdMjrHJrpk7fsqkEYbFVhPHEK3bteB72hkAz3fFtXo7AG52rhzyDjX6RMVh4EZtBKGXKSvEkYvQTZ",
  "key18": "3YbfTm82MsALVXQRiMGPBuGAfAuiBoLfWZ8m52iaFfui31sY7rsR84jSF3amWn9qvPKpA8yc1UtZPtJBHfBJQH9a",
  "key19": "5fm1kdwXF8S25HDNGo1MQZQJixx6kjRPinWEzKxvxfwYvUdSHPyp89jL6DAgtycU2gAHkESVUtX38JKZcVuiLCnF",
  "key20": "27jdQthfZcKTW8MwmajQce5iD1CJK8uyFmUSTykFG2JEyR8d4wSHaxfbQMrE6EKqysPWvH3boVk7GCj1X6211DGp",
  "key21": "3o7oCjhgLB1FSA6ik5YTpExYYXnYnkxeGxxqNF7ZgqLXPMS2x9qEPLU5QgiCeUC55Pp8Jfg98zGVaPt5cLnH1BQX",
  "key22": "22Hqo3wsdr58iBh5382x7q8AAGARr2WRmgg8JN2dSohaBfSrThJuYNdSFYbj9RJe11XPxtEqLZcCJQ5g12jdrJxa",
  "key23": "3y2jw4FVkAvBfjPDENCvDw4A1D1MRTnTsxL54imvbRo3PS2e68fX4bF2sYC5unYwoYEd11vHfhdnJJ7wm1Sbko1z",
  "key24": "4sGHPzNQYKdsCnPhxbqooPGc8nfcJLQdJiQhfUjNqpjB5xCbxPeebyk4V1JBkAqNcWzUB3Bd3qGNzDNPdx3r2GNb",
  "key25": "PffvCaVVdob5x8i8PC2G39t1zzTHPqrhaHYSgkyFoLSUfV5hyGKSfUFxQfCNkxSTUUpcU8XV2NsfX8pDMLA9Aoz",
  "key26": "XfWRYFbHRXdrnPR4eGJwxUwcZRLCsQvYBGrHUuUwpmkCMrTtZrNRksMurA6A6Z2kvNz2W9C6PZKpzRf9dXc5jHC"
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
