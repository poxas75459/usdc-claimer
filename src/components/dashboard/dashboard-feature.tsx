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
    "42QeCAzJKUfrcst2jBawTzqkeRwNj261qr5AphscBoZuk6C3est4ugFkz7oL6h58kyQvJqZGdBmEQcmymHZAnupk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N6gM659ygr3zXkxL3dWVvWjuPijXQA34VBrcdRqYvmPHaAqa42um8AFHPgvpvarXv258EwANbb5X9FV5A1vzLEJ",
  "key1": "4kbMpDvuS8TvnduNcejzMuaB1kz12HHpo9SyM63xFzx6CjJdNX5FAhmQvraQDg7MNzsvNqkWNc66bvNnhshujeXP",
  "key2": "5GcBwBbqETneWCvq8H799r4QQX9wTjjUiY1LqtQQ8owAH5JJQRg9cU974Ndc1aVi9Rij1nCCBHCjXAaZoY9eFwPL",
  "key3": "2iTUudxEh29VeXBtfvV3SnR6ibXjsFifLHVmRj159n8EESjadLCk7dvMTCXLGyCo8TGLFUnspoVXTm8bbUYhBm82",
  "key4": "2sHrhxFeTY72Eo7RcwCnrj5w8RzNEk8hkDr8xLgipv4isAeheSxR9TjRtE4zq7bGFu5nNzkvAfkvwiEQXUuksU3v",
  "key5": "46gzzoqnpeBqTKrDT9jMjpSRr7PCUGgTZEiof9EhGZxyBT9pAk9j7k1v3kRYVuDBGW53n1UDvt3iGEv8BGEJQs7f",
  "key6": "4dYufdm16jnUpzAyuJJuvJ8jTYKm4zKqDJj49T2Z9e8DQEs8E7HUbVQpeeoGNPHY3fFiqoTpmBPoHqoE5v2RfsZr",
  "key7": "obgrxUuuJY3KZDQMJLwP6jznoVMXwQhSQEzB8GJ5rLYmKL56RfernbHh891UB4gEoNkZ2A5ML8oPZHY2x2JdWQS",
  "key8": "5U98MTFeyLBQPgTJfw5pmYvvzRcncaXZjEAwA4cS4KeCn5AuPitxqE2FD8LHojY7pJ4miTJ8i8AeCDt4vzDQA3G1",
  "key9": "3bMyvVHCJm1NHnitepGbb78tn9uxa8NkZdg5XtqE897sYNmdrfRRBHr72yFhF9rMRxjqFMWwebpidZT1panLP5YC",
  "key10": "4bxCEvdFdAxorzziEfhkL8JCTbJVVcjbyBX5dC9Hrf9UVoUradJztqYaTSqiL7WpUTBQiWPa12g9oFFb5W2LazNT",
  "key11": "28ZdCDX6iNaLn8qW8mxqyPAKEvFPG8aceSvV1YbdjbH2FMTH93BM9MQmTmv4az8fPNjQkn48FGUukXgrjYaRfGPB",
  "key12": "27LoMnECz2NvNGcWTiRe3TkChFPYACqw1jtVqnhPH8TU2nRxupVabyP4EF7GQj4pfoKjyNS9uN8CRoE6KMCzcMJE",
  "key13": "3cp26awDq1GSHYeQud5x15EA6KzX5zv4dacpZxzipiiP1WNu3421q39pgQ4YjHndF8Cs6J5DB7JKwxYJkJAe76pM",
  "key14": "4S6PnxhyLXyRUhHnmrbFxof8bfiE12kqqjiXuRM3YUYN3dzy39rJv8ZKixZYzeLxFBJ3zzaoAn6kCHwztn2JuzYX",
  "key15": "4GxvvMU93vfwkhCEvSzu6KWupRmfj7RAkaUHhV9LqccrZKYnJzwnzorCkr8SWdFWN4gVRdHXzpWepvWMfK9u9R51",
  "key16": "4ukrF4Lvn8QKVvr8g5MTiqnTiNiQYjSodk81tqppJyjXAj4F5W3CCMEMHZ3FafbLm8yf5FSFQhezo5STHHjDsQWt",
  "key17": "3cN7dttFpovWLpxNeHjg99rrRaiPh43Af562thDAq8x3EL3gKcSpohMmpJd9qXc9wbBy2n8met6vkGf3zcDTebPy",
  "key18": "5EUpLg9ET9dMC9X9gvCZZE3PK9vQ9ejnnDQfzuBp1HHAU7zyoQvWLHw1L1XNS4KTuVsJhAms9kQ2Bn9gsV3dray6",
  "key19": "3nznRBF4atTo4PNuTRQDCEKvGxddAwtWN2AeHNDHoKn3KcLxfT4BeLS1M6X8GCsVuk5DbVp4tLQyAgR6JYXh1TAh",
  "key20": "2NdUKwfg4Cd7wF4THpq8wDhzoqyxNog3fMzYZ2BLX9cm6RYK6jBpKFE2mtRXaeMwcrKfkEbVohnrsAC8tizmGwXS",
  "key21": "3NExaQLBQrfZiEpZhx5MGUwNMJqDSuXXVNoSKCCdvLGbbausJsYyFU7cZ3pR2Rr5FzLd49u6kaCvMEYUGU7efUFX",
  "key22": "4TAYJNbJun6eyXxavionPvFNPNnihwyFuEg7REc19py2hxD2GzfRcc2MTedq2UnmvJeCgg69if1oQmowDXonSvA2",
  "key23": "5UQL37LRKx51XqWVbiknzJ9NuxARYkid5KRGoxTpQjtPRC5wfM7FYC2BKMSvvijwSVyDWhTsUZpWRmBiZaWQMMMR",
  "key24": "iJwfEUVTYxhk2fs5SteWCan1M5hKEk4AWdu9pp7J59KHZLHGvF5jY2jkNZ2k3j2vgmwGcq9Ys5ZxRA5gTgGYBEZ",
  "key25": "312Dfc3vYnhqiqQhRDF82WmF22A8qzN6wk9wd6f54V7kDJaKuqhL724T6jJkqjuXrLXGcqKEpgGUutQk1D6aCd4h",
  "key26": "FwDT8M6apJGzPWqEH2WANu6PpgJ83o9cM9TWeCd6sLgtn1z6RXzFiWyzHD92oAQtZsDoLbmHFwxBzAxPUuT7S1L",
  "key27": "5ioJcNXaXBWFqkndXLhKqGXJXW16i8HsdipTp8e8GPSNXbirGH96jNEsqDqRC7DPoffEnhk5qWygYbfoHtgRnZo9",
  "key28": "4m1CaG6QQyMHsx21irsd5c3gMaZwnqu2Qbkg86Ykwpc54HtxReWrBBLUHjfKEVSLGVSfYUcZ6QLvPoNHHBqHoutm",
  "key29": "5jDred8HvS4QHHhRKUgYWwiYk6zFiBwL9XgM3YZ5Fu8Uy94KBfajVzhnGubPRBtzryjiTQeaPZVAYGzrQRUgc6d3"
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
