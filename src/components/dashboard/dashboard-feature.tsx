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
    "4pTd9e2qM6pWsKg4yeNEy3KKY8XTgBo5DwKdxELBAhvHBKQvefbh3mY7GQCCsXewoVQWoNouS3XLYge6HZSvFnzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RRdtMYBf5Bgpf5vqd8ekYmGsaNAjx31XGuFpmhokLWvF8hafwrrj6PXCZ4yrEAUDpkSwZifLDt9Pww3KHj86nrp",
  "key1": "5FGnjTqgeFkdBPohwHaFGiFYxv7wh7wV3L4kRvzuL2XvAq2tNmPi6aP1Apk6Qto63bRwf1G45L4MtUSE7r4ZWjRB",
  "key2": "4cUwMDtMs6jgWrW4XwNb9bgddRb9gwxXhYVTXdJAyg8ketg7VJYtH9Jgg7pUy3mfJj7L38BomdiGYQMkoHVCon9V",
  "key3": "SWuGX9zFnQkh9U15JAH12tB7V6buHQXmEp5yhKBnL7qJ2xXRSU52PzERsLLNsaYdL1MU2Ndfgix1K7xgWJjPD7W",
  "key4": "vHuKYXPy6LkB8PsGEMNPLME8FazmKM5rQoqpesAV1SSZvr8oLLXj5EYNHQYesYpq5phgzps3MTAYR66uf7SUnbB",
  "key5": "8yuKoUryrtmzWa97Kdwz8RRmtiv621Ta1hyi7HAtpCEc799CAusRkRbybEpWdR7hNCNuNfZtE75iu2QqA1aDsQj",
  "key6": "2Nu1bMym7Vp1N3kkBb9P8Y3ty8L1NL2VEyTnMStF9uB2fzFZKbnUYnjrQwpJuodxoymBqA2y6bYodDtiwzUTXxYn",
  "key7": "2bNhwL6zQiqRciAE7B63wC7XHRjWuCBnrFivZTmKeBdPbsyrQWuPrfmG1qTaUGcuuwzqQsYwisJogLYCKv1ayXhy",
  "key8": "3toiEJLgd5MFDrVzKQVcAFcCbvaGMP3EAg6vDhKdydtbKCTzrqMbmbGybSZoPyfYvNTPpFY1wvVcdaYsWEpURS5a",
  "key9": "4nCz5VaHE9DAdgGBeu4WJdSSN8aH25HmQw6zuZx4z6s9uiBcYEm1pUVdVBZNThrojgGwssooPYYxVm2274Z8Ca9J",
  "key10": "4vSGFrDDyo2ZkR5AJWUVNXZvHn4uwzRcdBUYUoCwdR2a7UowK7nDZBZxqB9XDEELr2akdEB5vFxo74dyLfrCr9K5",
  "key11": "4i1jw3UzgdztDpmCpqjVjMyqDUrGsBp1tYu45SxDF3GsdoPJDeyJmD2SR8zfVHR36t9s4JD3kmxEaEtSuvQw8zrb",
  "key12": "3V2RP1ivHuj26omVkRykZChdXQ5nZiny58yYgAUa8QzjgTEy4A8QhP5ZT9g7o8iC9kqmdT1MBppSuFCk1vShUdTC",
  "key13": "mxf7xjbmGhAPKko2TjdWfRLgKc2ZyMSPKPRqTTgGqiWkycbniorqwbSm5eFUbtVGeBgKSfrJFPj7hfXnukvSjZJ",
  "key14": "34PKwQS2HqTwuVyJvp9WDNWd6re8PLcJBpgdq5NQZmaW5tvfQz1X5VozZBgehzvZGQXFy8fSWvaJHA4q6M9ELv5k",
  "key15": "4xnRa3XEzEjZrMxP8bJXXtQjPtMPfqB2hWGxsiZHdsbb9Rz3LKuoEApNR3pmpkTsBd3pEAVxJB9DrWzzz71EQ79d",
  "key16": "MZvZXhMoFSkcv1fZvFU834SAnW5APZWJmKuBgJkpz3wjuyABWZfsSzdVNKgin6uYqSymHPoAxhhMdCYmPcjfJxm",
  "key17": "jLHkRqXy8ya5Nt8q3NqBE7tezNTNS43462mP6JTgRoNqKmKiNyGNWNjdMyVuqzR7JtiG275Rs2QLnQrUuSKZHgi",
  "key18": "c4HUS1XFJqRAnAC5Zo4RQT7scgQpyBHP5ahWJYgJD1HtQNZVWyRSbPy5Fe8KRm781oY48m9T8xEpiZafzrea7de",
  "key19": "2QAwPkqguhw232n7286fNM9SqTp1LKv2FgL8CZCJ8LvokoLDsgnyqmnb5aJhQPE4QEPWCdnLxY82UxPW7Z7TP6by",
  "key20": "4kWt55eqqjv74RYerDsuc9rJoAjn1jMJM4yRqAAZWwjxBrSb9J7RgpzLqM4iq75jSUVgtdpLnprsWsvg28tkRq6h",
  "key21": "4fo1QK4tZUvAyLYGpAzbnZDuqmChVGUWF87LXGmDoYgVJWGQD8uZvqDi8k2C5QCU2PfDZ3cNJXnNpJ6DXsd3whA7",
  "key22": "2wYzFychBWAamRsLVgPCccMsfYvg9MTNfDWRc7KT2T75LSPARRyTcMfgXs757u6M1jjo2u9Uib2X1nFXn9ZL1suo",
  "key23": "3qkBAB3D8HjEuZ9NxhCBxRiJDXRKERck8N1HaAf6i7iYhvzKG6iEyjhr4FhczZ17UX7RGBcLW4Y4FqRhDMT9Fw1d",
  "key24": "47nXEuvtLSV2QxAdVNaXnrBZW1ArV2WnyMJ6gmcfyVRaeocvruLqTrYVb157eW42SMArWK6y9Jm8XQRC71uFSwQg",
  "key25": "3seg2xY3UnSdrPV4R7EG8Mh2KYX2d92K8LSnHGwq3B3mssQ5Yfj7Y4jnmcEEjQmNq4FBAMqNn5eBUZ2SwkxGzwQx",
  "key26": "2zPiJTWtGLEsrFaTNy79AP7RekrBnPfoMPfbsXe4PL48RbGET2W9rbgjDJJYp81J3qnpc5UAEzE9AeAdMf6footi",
  "key27": "3iEY3eoPdDdLDGdV7NTwNy9EBFrK7Bqm72tehTXm8rSG7qaj6rPLG9j7S1bvg7P61VeF7Go1pLiZJVXvt3vs9Miu",
  "key28": "3t6mC3JAx5wDya8HRfV8ts2i8naoR24dDQ3n3zhzUDkbMkxKsA7KL5JRW83d22fumwJigFyv61rBDYazeerzkEKZ",
  "key29": "5nVhm8atqHZtzU6271vx7FeahkAxayitnYwzLEq3tfxXnGs4DQN8kLeq4cSzoHwwyME5jFst1Y4UPXw5DdT5DEAj",
  "key30": "59jnxn8qWm7DT2mesz7oXC7he23KnbMBDST2M1chvoux4BYmCxawKQPSbWE4CJPnKxpmZWFhRoYf2UBRgBZ7RMdf",
  "key31": "3UMy2sv74v3Ybu9ja9SFAjgcu9xsrgNrbuiSnehYaN7Lsg4XKCcbyjBRLLDcPNo2SgXBHxUim5M8bxHgfkCtR32m",
  "key32": "5iDLiuQVccxw9qXXf2iLHgEoqreP71VdTKSfodMroH571mVfFNVMN5cyaBTw4x4pqFyss2o98Ed8r9JUucwxXxyw",
  "key33": "uowU75dTQEnNgVsrrQJZcTiDH7mZPjv263mpLM2rah6cbaDmzNXPsEzZY2vdcdyF4pQ8EVVXasYDXB1SF1w4Y7i",
  "key34": "5nYWK7NEPN19Yjrnsk6sG2ubjNdzPs4teDyHSg9nmPzsngK9sdiyiAS5kCsUsueuNFQAoykqbJ3VomjEG2AtsymN",
  "key35": "4WXUCiPXP3bFqGkiv7km3JfaXbaLhABmkEp8VKbNu82c6ddi9ABk3a96Vt5JDcmARLh2Ct5JaRGfn5xwcsyemtF1",
  "key36": "3M6Hjg5o5tXmYRJeBVY8RrAoFcrdG4SbN5txrLBALtC5ab84DGGM8d6MxqCybanP66k6MGY24Y8m1bWjukyvgWou",
  "key37": "3GjHCJPiqEgeKLRzwDy2WF5wdtKDbm6a26RAJfLeHJJwV9rqcmGZtT9GKuNUsVEhtXAQkcGcsbXDkhccJj6HHRqe",
  "key38": "3RM3Fnsbfq6bRrW9mk8rUHHTTkqXebsqfbkGqXzGXhbCPAMzxoEWNLUo5apMRZWfczrJ7w5KyzFJbztW1KFwYAG3",
  "key39": "3ZhHQcjk7a9CBMG3YpAPpAifLF8ZzNMCKLkZbzKxgrimFE7huKKNXK2pzGUs9sNW6yMkmtjFQMyqSEh4r6EanAh6"
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
