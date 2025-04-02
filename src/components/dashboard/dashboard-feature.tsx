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
    "2L7ZHT2zTfPjitVecLxMVTGQod22KY6pvfugspMM1mZehQBoqy7ECxUB939gQSwsNnhX5XMY1bZLEkBtM9vSbSYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fqVghkoBbEvwpQVAu8kFdqLgZ8SKiyvh2dusCwaWDghs7L4JUECP5AHY1mkn2bQxKuCFLsW4hRuLpwbNqfoUhFz",
  "key1": "BaSxQLxfnswZrt7dGSyeLWbsUrBbwUkJw7thSYurrF8DweeWb2tm6Tnm3zKstrHgMwPdBw7drpwojHRRBwo8Lhe",
  "key2": "2UKYHrUGwhd3PqUyMsT8r4ZGjkw4Bc778vaZeyB1r5SyYfBw85EaiecVSDaPb6xb1dbPUXsuU4tXs2pAeD3giuRS",
  "key3": "CDiiVhrn1fpe9spztQSYaGdULF6yc6pqBQW7b87eDECwRv6Z7MDuAw1hDx8KzCxvavHxiSTHaZftwuquvNmjUtS",
  "key4": "3bqpFEUAgMAE5bwCPgVsi3j6PxWwPjFAPChBfPU2Me2WM6tPprUBtboKbokhDREkmzqzWFxnn734ASaBtd66WedH",
  "key5": "5Mpf745EC6NLvwjDLhP6pRZzr6VWZpT8hyHmGqfftgnynpXoHNoquhuxwTXKWxyT5wHYCCgH7J7DwRcUa9fTtSRS",
  "key6": "4JVyKNKdQMf1fLQC353N69L6DjKiq4WA71NRQoCrdHig6dvuBrXmN1MYmPkKrNy5igH259G8SyRCKqHi2tR6MV7V",
  "key7": "5EDD5zor95DnBM69TaFsc9BwXmr8grXdCRmAFJLekepihEJmG38vHEz7XQMLQKrB8dJg3gVrbbEw59YsS2KmqkNt",
  "key8": "26pns4wzgnzRUx9qGJWChVJj8ThUZ4Xob3pY79LaMNtSYUMUM7izPPKMYgqyJAJPGDGW5fAFnvDbD9e36k9nvVY3",
  "key9": "7WgU7Uopd5mqaG4Vzz26MPrCuxgGQowX9X8rsbjTNp5TGuFi8RwNAkTo9YMzTrfyJAaH2KDpNqsjhz4mdxsXpKb",
  "key10": "3JdiyGsL2NNP6G1ZxSD6kh7nN9qov9xZxVFaqYeGA7XEWspzFKvmcup6VQNrjcZVNKY9xroMFNE84kB74Qt5xQzB",
  "key11": "3S8oqH5idMVgpy2ogBDssr6zGYNY8NFDE4CG9FvtVs8dtpTjD6nq1q9cC7C5WZQCrBpvmKLULDHmQ11KoGZp9GYz",
  "key12": "3eHDboxX2qugWkDrqUQQPRenTJjc4Y1cFxScg7pqU45hUGFWXbHaXprEH9fJN4rcxJYMcTywW6NQf3LfovfggrPn",
  "key13": "4C3L7NSdZ5a7nTrLjAGBzZpZp89bekUYuo6676EKBoJdJfr9kVT4yH8cQQjESEvKcHAeR4oD7yWRMU7qHP5xFyDz",
  "key14": "HYhQ1yUv97VDH47mL3XP4tbMUG96r43w4SpcbApp7ngNUUETCtiHhtMAHfkQB4BEzJpFN2ZVQZhxYbuVaTSERHm",
  "key15": "3bt6vSBF1eciVz438AaPvQ5aVjjKTpTiLx5EUPbYaYSfSGrMb4Z5mCbmPLvnJPh2DAj6xeit82yfHUpikJf9qFmS",
  "key16": "5ACHL6Zgkrt3WxeB1iCuCKP4gV5zkNVh18x7ptvFjLqiu24pNXSNYwnyu7t3NGziTfTLbPzRA9VU1XtHiABtctPZ",
  "key17": "5QhyyN6KzgPMmXqMUSBM1BPRfKUoTRUVn3cXi6JE2PEh6u7r1TnzbtEaGtUA4vTzkayZd8fJ8EX2MacsEtXv1JMF",
  "key18": "5QfdDjMqBrGXsGf3S6WadcmPpaPdaBarjdKSZeWD2PeKcFs61z27qv8Pvgd4yGKqDYU3qazMr9R2B8fS6GT8wXSe",
  "key19": "2MTHAa657BFrBCtjP37TRAc2awQJ1u1fFKHWXcCXgfTVCzEMzfwwLK82wcJigV13XNow5dHmZhAb9YzXkwj2X1MS",
  "key20": "15iez6EhVLdsucwifAZMXefENKGy8hBQitwWDtaBG2hLG82GD7sXruKCzA9LGcVY5FfjE53gnRPY9z9nZto3ZjJ",
  "key21": "4SdK6rU3aZoAmBXnnBSiuWFu5ZerjNfqqPGuHu5oWTAMg8w4sEFr7RCtEWmDUTi5oyqLjUGeP9mxZtyaTqbt8k8R",
  "key22": "5bZmfGX8hV2HR1Nar5ihUoTBr4Ve6wXkDuREpxwPvaRHhDjFVCUXoSh7K3SNxgsBjmFm73SL4Y9dpYYuyb4PrX8V",
  "key23": "5Tf7TLTge6b9qRJxSXcP8wC9wAAVTxf2YdxTxoxETb49pqGsixgzaDx7W9hSqHPG2Ff39uYS2nFVTUKxASJTLzSU",
  "key24": "xW7M364wMzvjRVnawHgP9n8efmtjBHXr2r58orKraQQDMwGtcPGsCo4xyfKFZzsdpbL1q6DbPDoDnPCBpTimdjL",
  "key25": "2XRohAJi4Wmo2vNGCnPpTfkQ2zvjt22uC5zBSvpFA5N1Madi56HXqyVFN88JW7jinq57fmqqzVNYpfZu1GwxENjU",
  "key26": "4cQYfVUtKnVQFXLuZq3n5Qfcski219kPRmv8tVcu2PjKUe2iTTYvFGUBPZzCxiRtHiMRgV5Rp8KtuEjNehN1pmX5",
  "key27": "2jRSEBx6knGoDZ9xA4TYUCJTLqsgHmydJBW8vkRH9zCWZhxzrf89Gx92iLEAT1pKUj1K6kSbi8aYdMA9QzKFrJQz",
  "key28": "2eGY3qWpfY1yBEHRWEjMPjfY4PFzM9QWvoUupyTxHSs67ZgQAL7nGuv5HREFzNEJ6qGCetFJQmVyccNG6PCxWMFX",
  "key29": "4ujaUubpCJLxKTNBd3bvVDaEiCSQSEVBvPPnbKXhc4LVGZrcCCZounCLVREPRjo75dvHw4ZnQVPwFFsxRkii5o7u",
  "key30": "3bxswrTUXohZDHgpkHPb5dwhcuqVq7ifSU2yAuzdgrc8EfZys7sVaUeDHrDwhUf6QGByV9JJo7MGRsFs8MP95941",
  "key31": "32B4WiN5vCwwCGs54gx7JBsxRncYK5aJACp5kYxm9iVRZCVdPdB9YJmLLyuFvbUGdHPYDLndnSN6h714EgzMsyRX",
  "key32": "kwHbeoNZ5bCSpSKkkV5v81geyAQtNkuxgPVWf46WqZDntryAkutHCrZEqvNRFuKd6xDHF4CsYJQERnRxjWxzk8M",
  "key33": "3FUXAtkGmifcsbqXJRQZSwZyUUa8Y5uiGmf6Gfo5MZDSvMtSaKSBguDfUTwr68Mo2toA3UJLyoyirrVU5uebw7an",
  "key34": "2GAVEJM9vfEaPHWVWARS8sFMtXF89iN7V4yNmHM1ZrQN8gBiaoBRFVF8A3NHMDuQdAetHoBnMPqzYYVrwSCjApd7",
  "key35": "2dn6BjTUA4128vUKnzHouxDXQnkStEviRFxydQpxoQPXH1z1p12gpSyyMyuGz8kow9KyBi8MNc36ZcSwWD5hGjC5"
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
