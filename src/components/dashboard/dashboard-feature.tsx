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
    "9bJdhAASwZEAjFRQDwwxFzDJePo5wc6dq6FX17Zs2X8UXWnzLaPMkuzVQFNhPQkCX7pQn7ppEDrJpHZJVNPCaPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ifLHL2rxdWKcLJehZpLp4NN7129C4xEvAhaq5HA5f8TQ9BZJ7x53AcGkzmU5bShpDKs9Kw9NHCnt62DyZjU19aC",
  "key1": "2FGVm7aihSCkSzEbwLZ2Y2F7y1uv2EsJkofN5YZscGahmcymBqYTRdjVpCjSHvsMe6oKUcVtXczNSs5rdt9WFCxf",
  "key2": "5JbVdvA1QQP7SxganuqQG5fo9QSzqXjmMPhaPhBxj9TJBxy8eJGVwyq6FpZLkQXebukEh6SnYq7NmmSHxdsnB3CA",
  "key3": "64gcgJtghqbyRH9wgnYK56fxu35YVoZcetruVCUQs3GainfyEy8eT69BEgjgnxay9MG987fjAJrZo7E8tgF4Pm53",
  "key4": "3uiZmKQSdUJWpPsfRLbF8hThRV3n3EDWaFQUm9svPQu4giMWp7jsjG9fgnj5oGjnKFkaVSTx9Zw1YChjU2kdNE5W",
  "key5": "5v8EeBsdtTwzvDLMkiRk7AyY2jScuzQNzuRMBJVebLEUHAudq4VdaUz8mzxFr4gWPLfyB8aY48FwvjN75pveEPCE",
  "key6": "2WZEASyv4SKrRGZPNkHu3zoNhF2wbZvZqcYwm215R7fX9ZzaKVd9Sji6kZAJ8UuUtK9zLzCi9T2x8vqjg2KUC7Kb",
  "key7": "47jinqJ22vFkD3A57CKsWtsCBsErbawoYsZaLwDPVCgh9ydwxe6RHtVQN3wDiumMin6tYfuTdXKbifGvXeCvJjBB",
  "key8": "5TA4P8Hnwp6mdYcr9JfWufF7zAcU54HsrepVau2RMCpYSumsEcumkjbznakRchr75GaJX5QpYhkzZbqHGNXyhUzM",
  "key9": "2QNAryRxfhmwXFgA6Djxt74KqEu1mABfkd2E4hePwsx5jk8HwCCrdNw2htgL2deBYxKwZXUGYo3DQTxEZe65JN38",
  "key10": "2pQ1H1BJAEFNeBgeJsTewq86mzDU9CpbDG7H6m8Ehd6qbCUJmhtRRTxhGfqkoYzSbHNA2APNttU1nCXWGG8pkTGH",
  "key11": "mHAEZA3S336QWuPG4rgNFn5vgTp3fxenntuLvwp5nYLfXJc6jVeww7VQMCHR8GQuGeZzQPUKiK9CvxnNvBqfyNw",
  "key12": "4nMU1ynP3V4nwTr8ewrDneWF3kdLtFqucruVHZWjvmoYJdqrnPrpnYUuoSAAkwxePQUzHDnk4ufkiAaU36XaFas8",
  "key13": "4XTvMX7uEZugpUsEXtfrWwdT4ZaDULa7G4HXRpE3FqwL5gXhcW9QzUWCEpZcJyYyy7ca1X5TdvFpf5B6DFHnXzxb",
  "key14": "3NkaP3q6HC8vnaGctUAE9SNJt3tpHHQ8oyZxr3a6Kqvb8uxh6PfxtLwMk85xYYmb8K13KvrP4z5FDb5CnYN637qf",
  "key15": "2ehUfGjPX8yRhcSxUcCYjEAtVJnt8GXNa3fyGtdCa8PpBmj4A5fwz9Rchb73bjPxAzgXD5DWQVbZ2cshPT43ntyN",
  "key16": "2YKRs252ABY6WbtQC8xesN5nYmLTBd8DtCuZYBdtAgRmtXY1ht8uxopBobQUb1rrJgobkg9JPcE6S2M6f486kLrC",
  "key17": "3rpFtoN7dJrAkYDu3VMqLu3ZNoABvY18jimYG2wXTMwQif1FWENqAHyEWsNNieugRGmcgmnxLxcNTiW9u5fk8Rit",
  "key18": "3cvPCbi5Aqw7tnTJWYZzxXMorYpbDfKEas2YmkWPUGibK7yhqPuNG6aHgvv8V5eWfGmev5fAS2PiWxNmTXfJR5b9",
  "key19": "2hstqa1QLASDfmYXco127JNg9FgCgKETK2mnEFTapSVCZED9WmtvzYxkUhBu4U3gf1EJmpEoKirjnJwAHoiGJEu9",
  "key20": "2DJDzGShv71sdHmFophHREXHYAH7ag8r4r46cb6RhMwDeXyxYQbpGQA7P37rWW56ACgKdFqqFreWxJ9nCcVFv3bc",
  "key21": "2UdSonQBv1B3vK8dLwPzQGdd1NQdS1EHUQJ8yCnX5n4Z1ZEsa2foY2MrEmPKNnQ4ATqoDXVQBVJHpGsc8ch7iXq9",
  "key22": "3sCJ83wVtxUVybVq7qXDVo6byS3Q5GKB7AAjNFiJtPdBQiqXqnueY1Zpu7HmuHzQP28XiSiCGAWQ2Ae4n5DHDgh5",
  "key23": "2biuF3Eb2fKL7NcUncn3HNfuuHDmijwY49mFR37uBSkS2h4hsDwTdTY2Hscc3z7VBoYEULkfJKvvKgSJCq9uKC1v",
  "key24": "5swmuHDsNTjazb98qHLiWuS391Sp5taAyqL2XBTL4WVudPpLfTgp7UUJffnZRqfE7JbLtLZmK6wNrSjBovrE4RBv",
  "key25": "2bzmN6jULfxeGuKGDuKpjAbhgnHrYrgVnjPicDBw7B2MhjuRkXiER7EyJRPyUZPsWcTJkbSeysjLnH44FzF1SWAK",
  "key26": "pzXnaiSWceEuKk4kqXmc8dZoDGqU5ijWQKmLqt1YTogN1nmm6in7DrYNee2owG896SHgHqQqsmRpHh6a5TUxWbm",
  "key27": "3VpJUwt7k6nmHdXfrrFAzk5T6scHQU7sN784DbLPEk8KqZvrbPZjwvGrHDQCMctYNtBdW9GVjTeLXYxLJceBPRyz",
  "key28": "3URNsRCHBCqwAUinnrXX8RfS5CMW3xXfaH8LgumoLXr8YJGYnRgXVK3qHJKJLT6vvc2e2PA38cbeoLtPoebG5c5p",
  "key29": "qqXe6qsUn62yJbv3ArZCxP2YZe3LUbeifxpkKScV8Su9kGnb96tCQmmKJBgb3heBDwng4fzWY9TUsDB7XzjYvyd",
  "key30": "4ba4rGBiFC5WKQg83HQRidF8AXxazykJf4ifWa9QX3vYnkaeBUWnwHT2HUKLaP3VEypeFLntmFhFoehaFLUZPcvp",
  "key31": "4JJ5guxyDsfDcjbGT7g4Xt4GwMKgTq3GgRKkAMDVLrw5TAsbZSC3oeptNaXLhY6YxRdwHAYbh1StAiDk1rsySXza",
  "key32": "RNnpPkJEkdTaRYDovbncUPjQFwuEsFdegREV2YyoH9e2SF3e6hUy1qmAdiL2PrAYR63eeRXS8ZXzjrMCNxgEQvF",
  "key33": "ayPWJqooGQBhC864rqnPQXn8y2MqVGdiTrh4UN9UZwkXewe21H5NcgmCT3W6mTKwnHfxLWJ8mWqaCQ6rfSKySJh",
  "key34": "65jvMA5JyuikG12D12cZ8pxNFpFKbzfou6EHSs7HozGx8ha5zjsSBqQBM9JR7NLcdKsJY2icCaFfTaptqTX15AhA",
  "key35": "7t8QE9ENg5GtqJtKs6Q1kvdetktNcACvnKJCSwZAgA8Lw7NM5trBQ4YYWR6ZzUG7Qb8f9fMkYMZfVaR3cjgLAvy",
  "key36": "5PVYFZ1FpmLEYCyLA9FC8jnLBettcXGuuJdB86KrUoHEyyQRey5B29J5VzZxiB2UWsrBExdpX8JR95NEV1zZE8HN",
  "key37": "aDWGSsJg4HbAbX2cx6qPb58FmfdfWDumDo99FbVfW8be6ywSgNaQmKWbsESXZf7BLeFyF5B5offeqRYMr1qBs4T"
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
