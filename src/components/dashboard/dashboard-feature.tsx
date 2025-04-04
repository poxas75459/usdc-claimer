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
    "4RuuaJ4Xsq393YkWKndmzbWN4VW7ktKSHpsGPS2pX72qNmcdenYoT1tzg79ruP3gydWt6sVzvqruMSUKiC6u6kzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EbzNnWbJBKtzSG4PPKdZJJAyKQ6XFBQrNrCtXFaJwca5f2ZuetJcAxjNLMb5bnnZcUCCcNEDa9o7hZgJ6rpjQsj",
  "key1": "3Dt6YVzaHz6FrtSL5rQWkToTgMBYhLfFpQahhW2tB5R1jCTrhVkkXzogDA6yMU4tDVmygQCnmV7QCDw8ubTXr7ez",
  "key2": "5o1NDfV4yHZbhYosqvW9QBuMGgP1EVC3mpoMWqLfz9Z4J6SB9dw6uRN2PPpdZLKGtV9d1KVJzk7HjUB9Xh6hgQgs",
  "key3": "3QZVcupPLzJkd7uk8nrxsxrSvdVwxBZoGbkRim6QLLpmkaCVWbcYwKq7Dp6iGkm8npRhUS16gWYqKTy2HmjTn5Lk",
  "key4": "2x161fvLpwNo4xKcQ9gz4PxrtfNhaxvwFwKKTBQN2Vfwhy5WXGUc3PR52AqGdAKTYu4GAc8R1DZd3gZFyJpwFSLg",
  "key5": "CE2NWZ9YySGVprv6jb85qqYcTEKmy1ekvMKBhSoeFh9SeRMX7xodfyEphopngnA6LfWvmLJL46gUwH5cnxrN96e",
  "key6": "4uKRcvwyL5uUuDRji96upawovbAZvgAQXbwQePijV7C5U1r8hm6xBHiDPzQgFSJVDfbU6jQ3rPVdTUaopgJ1QPRS",
  "key7": "426UMX4e63WdpKRtErigbTofHxH4bKSdhxh2vd9V3apFUERrjR8fnXZhQtXbuacH5io6ohXpiQApUS21cc3K2uHU",
  "key8": "4M5prFuUE25cZPM4YCaeDfii14pkT5ymj82eU4GdjP22wprYQyoR7X8GgcZi26ZNoUdvZfb2UCEKrwT148dPLHVK",
  "key9": "2xfaaksYH9DEdYoczFK9bHkhPUebpgkQvfoEHNM8MPC7zqiP6mK7PjBtvP8uJG4wXEw2RAFDAkA7b7n5E2yGcZya",
  "key10": "4aZpDEBJa5uv5o5GeQ61xGY8GHLHUVTKFTXxJGh7PgriPdeH7ZjCtLz6HH6E6k1pcLAPVspjUBG96T7RNeEYjkuN",
  "key11": "4BsgFiQWWWFEga4QhSXhMMRkzZnuZ7gkvRy4QgTYfUxBpB5XfoKvhZryxg9byQ9qb9VHQUdeH6iPWZZbBECamv4F",
  "key12": "VQAxzju4sg5AHPfmnMmVoKJZjmJ8AMboTAQEpfGjUAGMknmvj2WGVD2tPKiFNeAQCWygSN2xTRmGNfxGTkVFHG9",
  "key13": "4KWjk6PivAw2Dfw5x3CAF6evg9QJKM698mvoDqTpTRj9uTA4FoKnxf12rNDuycpKKcoEja76WrgJ6APt2sMcLV9o",
  "key14": "kXZPUvFbgR6awPvJBgtvjLEKJaBoyztzEDxCa3JHAAXFGTxz7DB4efw3ZAKBtg47GapS7MpmSFeqop5zCh9jnJH",
  "key15": "3FL3H9NC3KvJMAehgEzgwUa4cYixHMXswFPVW9PBVCHWz5PD5c33WQUWz2SKwuaZcZPYRnSiBiH6Qj1dN4BaKD3q",
  "key16": "i4a2mrQxepW6wvtEryfaSVZmLAemSqMwpVLdvL2BueH5EDZWMFoMjvQefa1b43woeyLxhA7bLWBczrAwfuatVbK",
  "key17": "3AdUEgpriTrRpcWXZCkv2wEqYFbYCrLwxRAB2z3eRf2zQhobuKGzEVtmf81NTfHt3xgKbMUXEy8SWg8ArwmHUfMi",
  "key18": "34BhVv3h1Te5BEX4mYo1Krxp8fYxfs7cC3XVJG5xUf2HtgwbAZ48mUkdEMu7m6WMKeJc2SpAZVswF4Xu7sj4Rp6c",
  "key19": "1AUsB4cxDDrfwo8RrPyXzbKKKi72zzwfq4z5gFkMjd8tZsnJnxHZZVjuumxmhos6c3GjYSuJrLXnn8v9kRexNb8",
  "key20": "3DtiCn4Ctj7nTyTdEt54G4oAcJ48pb1KHKYxXkSJ8n1Ehcxs6CNJKoTqZ5qf7DUkZmW8WQ83ZJfw7GBFWfRu82R4",
  "key21": "2xt9hNf4fMuMHQ53geoJgYGDgMnZ6fu8m6sdmuGGK4gPGqEtCuzXnnDRp5x5cwmuSQWp9u6gqL7Qcdn8Zrsb6afu",
  "key22": "2zENEqvJRMe8LP1ZZeg2dJoFqpTgjHhrKKrBhn7HuLzHZHoYhc1EtcJzsBTr9EarfMMdZTLujk7wZ3tDht9x5ByD",
  "key23": "3GVkmpEoVAKS9oyGfosHwypsqNNR1XE7wp6VnaCdy3jvBf2EC9yLQ4no5uTsYuP1FcKGKXAiNcYVfasdEaZQpGDG",
  "key24": "5t5hPxmejrrxUAECajkrYAkSTLf3jGoLou64FZwMNp76YtnQE17reUXRdQa8NUkcLUaERob8ecppS9TGg5Gq3QF1",
  "key25": "49TB4KyJ8o1TveCgGJn38yzcvU9ZUgCVF9Q1v7hnhhJVuwDYEP4c9c6U5qU5EvQWVWSd2HSdDyvcCS2dmkMWcCwh",
  "key26": "4UjECnWYisyMfw5toVe4J9up184VGunsvzpMfMqjxxiTHGNxM9FPdxr1GkNpNQZbxwhScr5taGXVb9jLtoijFvqE",
  "key27": "p1KCKiEGS2tMWoRhiCvgnAs5zesVz7CYeatJZbgZ8C6bgSDtN5E2SEbNF9P5AbF2rgnFWXMajR24PCWmwdkiQf5",
  "key28": "38JJyDTPkTa6BVYG4cZsTCZSnkx8pR73Kcd6N9EUvvJgR7dbiV4QXBUBxsd18D9iRfFVbBcVzUYGgTk2GR1WjojN",
  "key29": "5xoa23mW6AjopWQKNdPzAX8KJfq7FWJxfuYwMbVmQM8AExbMbaEetaajMU3HDZBiSUpJUZWDkwtuZTJLt6dnWU1",
  "key30": "2BuyqfRRi2P9hWuoo6dovoYe6JzaxYvrm61GkabYXFr7ujWqBUDvEz36iKwiTyAJJ5qpRmHUdW53rJrGE6hJgrux",
  "key31": "ymPyq6awnPn99BkDgf8eV5JuXGyLCRmgtoY8v3KmYXcW8Xhfura7p9usmFPmjPZyErLkVNeVXBUh5kHk1VerMNk",
  "key32": "2hdfDSxdGXUDZutLFiQb7fVDhcCLTkszPjfrUJExjJXxikQv1Q7tFMSmFDYuAEaSkiMB7aLpoDT9q7Td9UqABLso",
  "key33": "3fSpCVdfZ7ccam57GUH8KtHLVuK3WFD4ZnEEbyCBjeL9Xh9geuk4qmuEPTaTbGN9EUg4Wie8PMdVzBpP9bU6YQHL",
  "key34": "35e5qVAn5gGysfZ8fr7qZFvrazcmniBTMNCxVbCcxR7hPoAMck87Wy89jYbFkUMnsmHeHdRVgX68LNaTfibp2DuW",
  "key35": "3JFHcQt5tCc7ebCfN9nEguW2iRGVFUBtqyerEecF6v4nQLZ4NxN2sXBfDJozjV5WHQfayMc1sme9zokX4qEZ6PCv",
  "key36": "2uZMRXaErrWw1pvKAmpcECCYoqj2zgYT17ZrhXZWA8ymMFxePP1hnEgcsN69xseEhzHZFiQ6NWR7VX7dCfFWEKDy",
  "key37": "3R3GU7WmDADov3Yg4R26bSN6PcGphKLKEfpMZMpmenGmgj4EDSAgY9rqwLdXxiJePunsr8UGBGn1UyDFoFZ8M3Et",
  "key38": "4fGthEZ15kTFaqmUhSj7HdCQWjAmXAPM4jz8VtNM4BpthTsWGkRNFGSjMdtQ1jrdsjTWnC1dVkMHhmzNiiS1FLYJ",
  "key39": "9n5FGeY2dB3hjrzUGPBonk2QMeXP3KpNCgbcLey6Ek8bLatgPXn2okSxBER7njjxddYuJhbm4jdUuWeMPajuRj3"
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
