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
    "4Kngb9gC1dqKVhbwuWnEdzJAMi1kRpjzvvnqKWL7cB13TYL5oDR7oJBHw1zWbirX3jHbiog5XUTcpCnsupwHaHRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47rFgxGtYJzZjSKb45nenQwPmwVbYuuVrSpxzqf1i7fUFb2Y7qy62XaK9Pn49Mk36pgMiqSUb1YZVDUPeUkadCBD",
  "key1": "5EM9NyMf8eHRnT4Dz1D35d7VZUhGx4dsDaCjw8aL5K88cs34EJE7UMdMxFktkN9Fzq5CtFFpDsoW7wDbZkQeMeWD",
  "key2": "3WGMZYWETWYxrjwyEyrz7fRqW2SJeyYvBUAAta4vVHiZtgLEHZhJfwmQ2UTuFNFuHsMaMToLSD32rz2LjE1vcU1b",
  "key3": "2Xpj43kr3yi4FaTiCMv6WUC66RCaHm3s6hDBCESiQi3nA1BZrocWYoZnfG9zyETnATVwXj66NJj71Cc1W1E6FuDo",
  "key4": "3GCGsnLHaqwEUdCELFJZcLZFDh7g4ZoAZg2JiFTTrZoEc1zZN6xEtwjyCn7VtbfUZWjNaZnS1JrB5iLN9zhoiq8M",
  "key5": "5AgS1zTaz9SBQMVfy4gDgfy3mLRoH98qLfyhtpc1KUu6vsatELCX5P61vxbyqzm1ohtvJi5GSBEgiKu6F4T5jCQW",
  "key6": "5xHSpWL1uc3fZmxQKJxCLwN5AWNdinTHa84LBMyaSkdRFMj4jsT3XT9aoaF9umaGmhtDWnw8bs81aPJB6Jf4WshJ",
  "key7": "ukVaEDuV4ChkJ1kiz3n7rjAj55qA7Xhc2x1dWgcUZbwiy1Afim43FGQ9c1DFUXeySgKMGeaVm8wz3xQgqL32D3s",
  "key8": "5BWaxqxVA1L6MBVroUSXzHGWiWpzh9XLTCFa6CPxL1M6nbhzibpk6nKCgmnPxPuEvP63PMf5pCdFQKTPFvdsvnQb",
  "key9": "GXVYnVu2cLMETKVrbyWmZRSjAmG5BSsCyfaZxsiT9jGsPgsSKf95iWTbZTxzcHQ8wtc6QFc5U3SFe7PLvJ3Ge8q",
  "key10": "2pBsvtNqUN1tSrwYkTEJ9jC3YhMJcTsTsjUGz8QHGkZeYKEkHScwYR7ra37V1W7iiXrX4xQ6WS3uyaACdKxvKRQY",
  "key11": "3NW5vFYjDuNFXw3eJKzvprERWz8DaeniWiy3uCgBp8PjtjHk1AiaiEgsCgKcnhpHxXnGvmvNfZSuPrdEGhVEBH4P",
  "key12": "39iQneWmQqL2exjoTUqX8uAtPRJZG7NX14SEG4xMzdgfMEWMHu619V3rD28Yt2fwDKkjybrZFzx85cBQv7Qg4uQd",
  "key13": "4VZ777jYEDjpX7UTHi3Uegi5NeASbihKZFyNVovwoqyo2gyDV7yJCZAtyQZHVMyeE9zH5HqJD1Yu6b97GKWa3z36",
  "key14": "1YK45mcgdGgQHfGjJL7StqofjSRE7kFNPFW4aGDdyKTJKPXQHjW3Rav4B3v5aaNH7FmfHbTcAbeEeLheKGvGbm",
  "key15": "4jJsJU9GH8Ufo1dW1k3KwZLSTnkSPpdRjRicDawXxp98AJHRrVajwewCaMkQMoNJVGtP8R6YuVeWtAe8zHiTW2BG",
  "key16": "4RRGVc5xNuU3T2jsDTRAWWRab2brKrHwgdTcF7pPQN8WTCHeTtu9ZaMZTzrvLsHKQwYCARym9cjDeZc6FuLRn1qV",
  "key17": "4TqDCKU9TtLeESucEUURZhcD5csUHM1XRTQnRK4cejaSYKq1MZF4UZ1SMzjU4RNrPW1SFtMjVCpJZ6LZMhMiCnFP",
  "key18": "Pv8nxRNVrFohMc9vFv8wD4PnjgQczjnxhNRW57Q1eXPXgtW2VQ67q3kFbK4XmSarT6TWH5K4oMHziTJZaeBsT6W",
  "key19": "Cdn1hkKytc8Uv8cgZo6hGKG7w7GVYQe8MuZhbDvC4ry6grmNQqvad9SLbXJ5P9fHgZL2MBUZ29E7BVsvASimcLZ",
  "key20": "66S9x3YUr2hAVH6ug8HQYFGhEdddaamqBPPHDmC5oiLMBbwcsiCwd4rYPrknwEtkGYiDdiinaqMinmNouP6pLpR4",
  "key21": "2VRynzSSjbZSBAvBKMn5Kq8haiaBUiWmvvNLDvc5rgGVCK2S1CS2paVzdi8wrMGDqVi5SvWsgTevU8BWufh9mYzf",
  "key22": "7NNWqUBHQ2GSFmwMGzhREnJpp1SQGj5JZrghCL3UMVz9Yw8XheuSH3eHHg7SMFgq9F7ahwVCasNTJUeN8QxAbC3",
  "key23": "Us9acaJmNKaNH3umkU3Rg7Q14GqpHT63nezzQivjV343mG4fMgmGB1xVEhegPvbkGhzU3Lb47mrLtPfkgGSqGwE",
  "key24": "3HvWuCu1Zi16p7G58UVS8hAZrQNPaY1vNhSdTTbwAv11gPDx7aqKJXKoSfrH5FKyYvRBb2LwchVhtBxnqZNn1LD6",
  "key25": "2jC7Y9Bpm4oPoMhfjM5d1bd1PRjrrdjJRwYLbGooymFxPJ3uAL4NAmmrjf8txTACNu3R9eRvEAhPVNJohff3pJgy",
  "key26": "4SNzxHQTJ8miLoENFjDpsW5WQYzaodq4meCUN7fqHyhB3dEg697U6quoERjF8V6y2bjcyH84YCaA1NaZEpxGfAiX",
  "key27": "55ypXbVm3CJk2RhG8k97gBrWxs1HXEm5SxbvNY2pKm9rJy4e3A6YkMMajBHSHEPmxiMHSnsAgwvBVaf64F2oqjdR",
  "key28": "4V8GKDptZ5fidbiZZm5w9iEU2gvv14nSF1x58Go5GtXvesKyxpBXK4rfzUk8uAPMpgQ3vTKpQ7KDCv2itpVBh3Gd",
  "key29": "6zvRgfC7aoFmZ6W74yj3nyuihGvWsZtKs5KTtAP4U1gFUCNZprffN84ZBw1297XEP1rkQ4D9kKH4MSZL5fXSXd1",
  "key30": "6yzS4ZR1PGDm2TaDp8Y1Kzshf5UNJUzW3VWk9EK2fHcayg92rtVZwy9CGgBL7BUhVLNnXRNHVDZ5dkZeFjtJhqt",
  "key31": "2yj4C4m6nq6F2iffPhw8qZaqpvGFuGTkDGFmsMjmHyzViQDfHy8gWshzHunEKUUw2VDakMkHZV156iiLpMqbMgni",
  "key32": "2G6SWvdLnrzLfubcYaBxC6HgBLo9DfQE6NQ69wVVM46cM2qnMVp7ysXihbzEgSrHCZ3qSc9GmL5PVf8FZfqmYRan",
  "key33": "3YGQA6STjkoHQeL3EfdzPZJ3trEKaBgpDguqh4yyeWw7RujtEEEZs3UD8MGxfmkxUbfcbwiDHvwVqCBu11qDYcBY",
  "key34": "58A8XoTpaUnR67ry6ovpS5uypZ6UXgSvEojFWs7FGVAeTq7WkPHGq5NGbkMF9tTEUboFZQdAKHwtSE2fTZcbHkrh",
  "key35": "22zeab78sZxuVZePmCGoM6TkaFdMmTiCTjo4RUvDShsZoWj74bWdKpKEmVjcr9ia6f6rDCwAnZ1nZwAS135Pe3Qv"
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
