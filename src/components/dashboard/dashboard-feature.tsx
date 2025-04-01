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
    "2yiiZaUFbo1BmWEwWaneCyQkGy3S1MLmGVnq9uECxDB25N2f93tu7LW8zNMbmbbze3Lsk2r8LBPv8we2RtMdcA5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oc4pyFMCo6qyWHYrWazQCH4qw4sa3fQVEpK4G7op9Pe9Tb79Rq6UMPd2GBB9xmVz98eU9pGVTcMiagV2ZFi4ri7",
  "key1": "2ktkuR2oMzXpVeJtpMdozFy7cDdKUmrvWjfPd1bjdW48ue7UHyTKn4EfdvVvDJcaFgnSDP4YLkPdRQpAke9No6UX",
  "key2": "5PcutjwKMeYC9WLcGCDE93NQeVXe3k3Yg5Ffou3XxfbqCsoLNLN51dE2aCmS2XAc8eTZTUCMYp9w2bECSzh46NV4",
  "key3": "4hLnyyF3xmpeisj3rssTZbMXjqUb3BzrxdDaEnVTZBHmrTQ5UB5KxSBqp4dZnhHgc1ToCjL5a3rfpynhJnW6ZEUH",
  "key4": "3QHY9zmY4579LSHK3jhuKqppPMCWavTrbNFvCLNx7Y5JTPGJiHf6vfSPhmEH7Swzu5D5rREXhE5YsLFQ1tLqXv4w",
  "key5": "R1WzfJLrACKb17whhLjujySxFatCb66W7tMWMAakeubgsLbkseDMWy9nhL7RoN6ota4uZxEGWS4nWHsEkyXHCdq",
  "key6": "3pLzYsBagX8XCDpzykUPX2TvADyat5yR8WeWFGgEZeYV3cC1CHhGH8EKcrJVAdcWXHE9XcSaRe1LcLMdMG51WsWQ",
  "key7": "3MhCqgqRrm7WiwaURcZRnstv4MZUeB57LzQuV6oq8wZXaN6SnMvwVhuPjARKwprkVfFtpyJNAoEuAWiNNcU92Suz",
  "key8": "2CdKw5nVi6VXmRzUhindqGC83xjZtyeUZrvnHNCsG4gc873Cdu7p9REMxmzq1hCK6hPM7ZRPRMJGsWNrme6E8LmU",
  "key9": "2mUvz5iUXPSdPapCECmxVDmiHteCybVAeKubuFg9UbCu4f6KW9UQjdjUUQj73umkaCYS4nAprfCFRmDU8qFmiLPT",
  "key10": "5vn8LKVZvMxhGUc7FKBP1YcJzCDnQuQKQZAcPavhcR2A75PaJLM2zdsCNUJ27sgawbcCX4PQBPs7gYELk17KY6cB",
  "key11": "2usX1oHo8AGXykaVo3Evfx48N7E3rrDY67t9fzyXYazda29dLmefcokrSxm24sj1HcyDfvRj7pFrtFewS3LdBQRy",
  "key12": "3di5pewEoZ6KBQhF9Xw1Ep4woKQjnNVGxGQLdR4CVoU2RViQpSvwTizaKpwnbZKxK2vtMQp6wLXddtdfjJYetnQQ",
  "key13": "3MBSsmzc6usTkNEKyxqaF6yZzv4PfKVq8ahZnvKJC1vi41ed7PLujndUkVWZjiB1mCfZoAqgmj6iaj62A9uWhw7b",
  "key14": "5bW4VNP7bFX68dDAFqBJFP2AUyAGeLiifVqiYwAdMfCc8q5GVsXiKvSJY9hysJwRk8ZpxNta8bwUj8vegEM2HbJ",
  "key15": "3J1hmnvCoR3KVy831yivYGcxYRQggmZxNodtG7buyiuNAnqr9Tnr9PZTdBDaaGchtqgV7gyNGecSx2LRM5krU3FA",
  "key16": "2h6GTjWNumoz88988UMeGZL1K9dcvZJLceoY3krL5aRDoNpWtNNzd4rfEU1EdX6W9A9nz57eECY5RP6f6W2WKp4T",
  "key17": "4hT1jgJ3ozqxtC9rzh9729shkLdUcSnMUGMdETzQ6PoUDp2XXmqyoKgWbg8G1wAWNLfwpqogn8zHey3Q1yph5DSs",
  "key18": "3och96AuS5TT8YyXCXchsPwRKt8PoFGKu5ZgM7sQvWNtCWq4F4j58xiDDw1p61GNRigZXN7WnX2CE1D2zegtnSs1",
  "key19": "47r1xD84rWUeGsBDYtEZxJ42gYWx1zaHVh7Q2MUoTRw4WiUcuzaErh9EqVke7Zb4CHotF1BdaMZuDeHt8v3XPbg8",
  "key20": "MtQEqifKvZcAW1sPZ1nLyk2jP19LJeNoeioMfCgUFcKSZsWmGzyjVVSec49bG48vPytYJ1M631ECzXiivSuQMpA",
  "key21": "4rEQUBjZNxwa91XqCV5nSZ1TuZTckb25S5B2b95SVx4YXm6cH7b2LBohhPLXPptBrNdRPJhrPdYY9atqgWDoHrrx",
  "key22": "4NPuhWPxNox5Pqfj3EX6C4Z9LrZfQ2pmvB8nggfzB7EErrB24ekiUjLAnbFrWG7GzHZVSZ7aRuPJJHRRJTuKo4Le",
  "key23": "4pq6K2Gj7sDL2E5Q6CkJQDz2KHXE86zDBSadpFjnJgtyoirQn3y7WNKgBRzLRow3wgcbTSnyqzGDiF4egJVcftp",
  "key24": "4bj4A8Ed1H7V8YmRwhuF7Zz8J8iJ7boff4uMU2Pe8WG8JtYmNvEUQLbU7LU9aUm1pqvi7nStYUwBu6MMXSrXFBQa",
  "key25": "3V8LLUDmLab9P1vHn3ds3nwafEEm5Ywhdx2NznVLEgBxNghvV7x6dH12SJoqcNNjKs8jqDtLuJCzBUAdcDVgmjpw",
  "key26": "3BKon6V719mvAC6uqSwdcEdAGKxCe9sNS6ji3xrb6jaFfNi1cLSr6GJXuo3u1XjRU5dUwBaNHzRHSh1x5eZFMYge",
  "key27": "4TBBfVQJ8HUWxiZAJ8rMVQdwKwj5TMtHcMiv4CvjaWJtrYzQTyqf4RQRjAc7XDK9TybTRqw1CFG3pcFaJp3AxMBR",
  "key28": "2vAShkHLcN3gB8m7uoefVnWEUiZhdrtPcUMp1CRttrjw8oyyCGcKr81dBcVg1Uzf6JXkQ5kCLu9EWZYNjAf1ZLEa",
  "key29": "hidnMAWzw3bhtfLCpJ3egkZ2QZ83RgPHP5HwY8kP1gFKm1KLrujEQwK1QhP5ZEpdnVYnMd3KzATT3qcva4qHU2L",
  "key30": "3mw3BVdHgz8XYbApapRA5d94ePiZS7crkAE1oA27pK4G4h9ut4hWTnXu9xgpAVpfPaAPdcwaGzD1ZDtXurxEfEpo",
  "key31": "43njgS7GZtwHDpdzYjZ6gJiBwcAC7j4XNjn7aXZjrVQjydpe8Smv7dpw4hxXb29ffKf9D87X4PMHjEPeAxYvFFLC",
  "key32": "64fyp9AiAoJiwKPhFRhHVaz6x3yCuigPiZaL36yruGrFkwqiaowtGRRXcF7uKJbDajuCJ93N9MCEB7pCAf2B26z3",
  "key33": "3a9mbpNdKcJmi8HmJEz4Q6NXfFj7CqDB2TnqSNXYBn7z1YRnLywChdRWy8TxvEfoEpfaC9qts3sR23bYSZWn8S62",
  "key34": "5FGax9VKcbHonALyHTNdqkFtsbaMEGhx7o9Ebb51pTiwGWHY79YsS9xKqJMvjGwTFvQTP55Vfsu9L6y5fG5P2ojY",
  "key35": "cV9go3j6WruA9GUVb3CXVm3C8asgGrkQTccsQBKbF9HyWUu2uFgz8pLcjSr21isk8LxpysNfcpbJdLgeFnpXLmG",
  "key36": "2e5kVthZSfv61XXYNjVRg1PjseXn64euLKTX7y2cSqj8qpzTjxsFcJLikUu1NtZ6nZXjbMdz1KeWuKyxYG6xDH8L",
  "key37": "saLSra8b13Vjts6o9AHs2x3BuRG62UrYgGyPZTswfwfgm3CaRU2WLDbuXNYAdZ4PG79631iVuV7MscXyqfhbWz7"
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
