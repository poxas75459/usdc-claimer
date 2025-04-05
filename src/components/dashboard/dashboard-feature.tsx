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
    "2FLckTBtQaRtGxW9qRARiKmLZKk6mn8zw9Vj5taM88QUTMahPCQ2K8PsA1ZVVm2DSnNf9GUqLKgN7hkX4whdP7fk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M3ZF4hLZpjMRBDy2fvQ2aZ84ACra92vCJu8MxwYcgrxsGP6x7zMY1jX7A2egnm2NZxUcen5zPM4REvRDvmEuRQK",
  "key1": "A1aSb1cRsKoXYwUcy6X6vNQVmZ2UTR7JTptJtNfizDpcSHeFWyevUbQNxvVs6DbonjvHehy8JYLknApv9nqB2VQ",
  "key2": "4sPUfrm9azMrmy5ZfgpyzYudJUg6TjoeoYWmJ3KxyiLkYrjRpXm2z8mzWNfdRKBoAAw2YcvZ9WUYnctRZEA2odJW",
  "key3": "4rGimD4wYUQHwRFu5Lf7L4VU1uBbi88shaSP5ERtVYbeUKYosNcjaJ3o4h867fyT7JZeBv4HzhwGQ5wS1ciDbrUF",
  "key4": "28QWb2iPtUn2jcc61XYyU4BV5kpK4K2iijnFpG3PrE67ScMc588wmi8d5XhzBXcgfYr8bWbjhDoEAGGwvgDFs7eH",
  "key5": "4TMAwjLkpwTzKH8Da1kWxejCt4h9yLBG5NySkBRJZwEB7ngwrkKh82Ez5QDLjnwLsQVqhJvRhi5trqiTYXDyHFpC",
  "key6": "2zAnLcmJqtKGfDDSXTMSqibYq7rPKweuzobqmKdLXYcTRPT3ui3sC4PHB8ZewRyirA9VbvebxfT5i7YZogXs8ZHN",
  "key7": "3jvRr1XjKp6Ts9iTaSu6ki6HqSPzR6zDGqVNcxuHMfBc6rdwbh7HcRmyP9smWJffCPR3n3G8ZpESZxt9EQmsn6Jx",
  "key8": "5Q5yooFp32bBMs5xgcVquCR4KQykz7jvaC47Syf7MmXPbz4BhmDv4D4GZvLFrcEtcMwNMp29fbxvE6SZ5ta1jhTA",
  "key9": "2UWohaqCCPQWz7AU8sUmyCsiWorFXXXRrFMpiLyDKPzVWkQYfZ6wYfNH9FkN6QCRuCk4MXJ318TizdurjWQYP7BW",
  "key10": "4tcrBAnGK12R6rRrgY8WWM2bxkCvbgh4WFYLDzutUTQQshPvrYMxnkXY1EpigkZmVbFRjzQQFCBaStJQSEg7eeNB",
  "key11": "334Jte1JJfsoNTw49HHrrG58RyoLaVUHc5UvYLFieihVHcRUjZNDZzHMA8vBmJMWdkq3pvFoGmyaqWEatQnP2crc",
  "key12": "5zFwWA8hCVhzXEzYQDaNx8WGxqd4hgBYqwhpPvAPuKtdPf8vHmdiTQhWgHE6bMC8NNX5yaRhZJvWsa1YVUVkdu8i",
  "key13": "3pjzwqtHdUnb2bLp8emCToVb9N11URur2FRrKYDPRr4p9oSrUrnLV6w43nRhK27Y6o5F3ktApswP6ygywKMp1oZH",
  "key14": "4GGj4CgSnNPx5j9xKqWKZUPaKJ3n6gYsLcYd1AwPHfHCd68B8L77gY8aiYRfdFvAkw6Gwk6ezbCzjfAk4ufDtrVf",
  "key15": "5ySY5Gspo8EYZRv1gSwyyCrXUHc5D7sAp2kfzeD7nYoYekFuYT35S1LfGMKPLyJzoLLQzSMGD1ZaKX3qQ9h7wAey",
  "key16": "4cD9BSkboJPg9CLditT2GjjVeXrWsmwHe2jqZH9a414jtuNJNT3Cjye151qyYSV2px8aJQ4mHgzrrfKsJyYsRypL",
  "key17": "31XpSWdWSmHm88667aqyefjFC74c94DTjvjcTUspDuwriLrt6gqN51SihjXkeCoz4g5y2jQGS3CmH5FYrrLkh5nV",
  "key18": "4xBgxNgWztFoGgoxbjRFNufvoMYwswafcU1Enj3NVYpkP6rhv5D4DvJmjh71SnN3mmDHiSnVHiBhwMSsWsGBDyaJ",
  "key19": "s23KK7ThDmD6Neak2v6jYQcnEqYwYeLCeAXvZpGzMjz6EipR131PokxjBLDxypUBDYmXHnwWTs6Hgg4o4hXJYUy",
  "key20": "4KbV8MwUX33yUyibhZtkcrGToRorzYBkrS7nD4fYJ7DUBSobM1Lbtmn2sEsiMYRpBFrsVYGpDyemQS8M6L7EBovc",
  "key21": "pMb1GaFEBECQ79fFzWpxeNzqKp191H8i7noEEdt9NbzyisrWS9BW5pXnQjzURKbQkCRTgjj5cmp1FnXnBqCKJeq",
  "key22": "2pw4hySNoDdMVPfrDtQ8Fp4AQU2XqWhcbQEf6cL4BprSDg951DfvVh9YYPi8ZGve29XwqDxEbmadMDRnKMEe78nC",
  "key23": "4andenW4Rsma6XDThE5fxu4j22nVgVoXXytNeXVzz4ta4GoHBQaufZZbvcbzYo4gpGQvHQA7427DM4Qtmy3Ls9XA",
  "key24": "2AjY8UEe2jBFzxJkReYKavEU5B8LqUNUjvt1GA2pjoihs2WjJJihbUoQNqNoCT97BzEvNMYSFzjFUKknS6RCijth",
  "key25": "2YdipxMPUQxs1rfXWkPi1HnYZhTvLkkKuii1w4ym3jLbLzDmFjzFHx8UF8qsjEX9GwwDMNGqgUgVT8EmGa4kFt9t",
  "key26": "2BiCMm9n8akYiayNPg2873VyBChPJiUU1jVBUmbWDQPct7xY4QDc8yZ713o6A7NnAhvF8sMcfADuCk9R4Gjvnn4N",
  "key27": "fVnHuT4njJA1itFv4cjA7UP5ywqTPkrjzrV4gXVsWuEHicqtdYHH6cfRs3wn78TQ6WuSSqfxmtv6hLXgtHD65Cr",
  "key28": "33NRcw8GVMPyfHkD37Df8cGvowmbpmNcqQZdjheaaJcJffc9FQ6t7QGQnm2EeQ1YYPeDJF2weB8NaE57bE6boMwv",
  "key29": "5URMZ7PLWYdyGK51qgNNAKqLv738xc1FLbSk2Bnq3WBZsH5auKdfZGPwtetz9ksnBFXxooauXT4shuXXp9jWDeuL",
  "key30": "38THyseLRRpjMBBXU6qmiTAe1QHooyNPgLHb4bvk4m8sZEUxKemwtEpUhkHs6kYChbDC8CKU5rstAWU3YvEiRHzn",
  "key31": "4NWdoVLic4C2vUjhNyEWTnd36uNTHaMyCXMoCv4ikj5mQEPb9pb3d8rsoQ58xL3oJXY6661kw2a5AscrXy3ViHod"
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
