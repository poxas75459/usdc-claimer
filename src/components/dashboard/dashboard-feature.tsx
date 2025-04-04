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
    "SxPgqsWcUMuuaLxhtDfkBzmUH4SYb94gu9GP4cjzh83Sg1tHNxUWFcZbZhYwFTmWFoeunuZmETL1KavnB4HToyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SVyZYbeez7Nht4BfXzzLtNPYcskBMpd5Psmm41QFETd5cc6cGRrZLwwdpi4f859Sg6M6iQkuzd3PXdRovsbR8ny",
  "key1": "4RXqLY2vuVQxUSs2mbrepuiWp6BvTT3waw9WEZMUSCxvwKvLuu6NTKiHQBZcYcD6AApqCTuYdqs3hW6EEeNpSCHy",
  "key2": "3ecJL8RLndNuTKQ9DWMZzZ8St1X65pdPMzuSk6V6b4HhoyxMkArb86PhWHv3XeJbuPuFQcBUZQcWGikenSTqhh6E",
  "key3": "2cTPPLrCybnUP2Rwefgc58oDfxuEVn2oUifNHk2Tyfm37PqrnQnAuiRM5dmpQRX8BDhmsdZtARw6h7yFdxKfsHYd",
  "key4": "PBiDDuoKyABjc1t2JfEZ6YzPZEtqHWdYM4jHxVN69nN3koGe9Gvy7k3F25TVteHUVgdiQtzW1XEnwU1e6ACA22m",
  "key5": "2nGwkJ51ViXaPJV5LsbWbpDgsK8JW7HntfXTfPDTmJdKXAbxDKi6Fc9wF78VopVeXgwGtY1kgZC9PCcmzYy3PGXS",
  "key6": "4cWgZhS4XbsWzxrLhGUVCi8iS3K5vnmijSVLxxEfSaqgMBxfr2CQLXfqorqG3TYANXUMFAdmPWambM31QtJL9Y4v",
  "key7": "46GfrCvUZV4sXjHkf3vQyA7nbWQhZFaVXHN5oXtVvbNmDugWdf7dbejJFtS3F9hTXW49jTJr6zTE9v6vhyQLjsPt",
  "key8": "5fDfADoNMd9Q9dWE7RCw1BQ13YZK8V5BWu19yQHWqa69hqYgYkXudkbTv6JAZijtyimRetPrd59cnW1SjzUD1prg",
  "key9": "mC4Xgy6Uz6eGppbs92E4k3878Snbqr6rmbeHe3FQGbLqut3dFcdjSGyHNUMcwbNRG1Fs67JhJZD1hHzCHS1r7Hr",
  "key10": "4JGrjvneF4YiauBGkAuhr9Xxjjuzrjp3dPuY2yJet9JgzmccGSH5geCVeGDFxQBCAm8TYUCHCMQzBW816zZCiM6Q",
  "key11": "3D8yowv6qfjUEMcqkrQppvDARjqrge4rJRPMUsjdCu2jkR64pLq8u7K86o1CEqQv1ywvL5vEhDz4YP6wy8kifKCx",
  "key12": "2MnCiHEtzYVqU23SetrVMWxxECHo6yGa1CLNPyHS3TVRCM7qHEhnd7nSF4m2A5cf8pBxEeKZECUtenKs945rhfu5",
  "key13": "231MSgvMZho5nrhrDXHtvVGJcY2DACgxdg5WLnqWwTqWnxAh2irLRTy4FG46WJ6W67XapdaHXdNk64YxwmS1jLiN",
  "key14": "4zMB7po49x1Xt56s9M4GxoScoATqG8JufJ4VnveGVVpzXJt5ehcqmYNh8CvsaMmErUnXFLTGhp8YTLWmvYtM7Jvk",
  "key15": "epgdQ1cC7Awan9aArWn2SPeGfgnkkerEtUQ11w3EERNtzEiQ83CoNRcYamHDXTWQ3zksEYeXDV7Qb73VLg1wYDb",
  "key16": "qt3rqNEdVXUjFf8WjgaAChVmjjZ6jntnSR1RXsCPyh21CdxbR59srYxbQBokuLd6buTqcy6WR9KK1ZZD6apJTCc",
  "key17": "3FXAFkB8Fbn4N7BRqgWM57pkNSFVMufQRx6p19ZJHN4eaDoh6CUYf2mfLzVH8a26tTqX4KDRA5hzBbGPurDwqDQt",
  "key18": "DcpZofJWQX2eBzVS27DaNikrJyz24HyGpZXrhT8Avhe4ispatR5dKnK5CDLTczwLFixNmQ7wMS17pcdNYbJHNo8",
  "key19": "5ppme3EPqtoS7VXHPaenREm5QbmFRHG7waDX7qwzULThAf19CTTpG9b1DftyPkyaM1vq5U7qTmqub4R8LtFgNLWL",
  "key20": "3uQFFkXNfhQnkC2TCJQKpWEwn7UQanpNDo6kedFgDU3AjL59gnPVbrPja8Fqm3UHz6kfKeja9fvWZikKeX3KPyKf",
  "key21": "4z5zF99mkJ4Z1WUpeSQ3sQuiAYkzc9D9Z2R7BqSwiQeMAAQuDUFGKxN4hCHPaKv5NrJysqY3Uf7MZvEyngTHTHFs",
  "key22": "5fzNVN4eFZGeUdWwMvWoQV6C94qxzrz5F97VTeXq6qDbLBoW8XdfpR4N5A2WxpKoSiCh8CfUthTv6gppj2mQt2me",
  "key23": "4qKcnV9trjecHP3c9SouAq7dVq1BkdS8p3PLePexWta9Z6sGjMRyyWMDGofdxn1j7aXvBxvBL6w845D4ejfTaW2C",
  "key24": "4jGA6r6S9wQjfpPJMb6wkbbyG9GJ4vZozMxhUBnT5psfywf4SAtALenxnVM6nESUXKaLPpqN5tLwNqczGijSWN7c",
  "key25": "4GeCXyajdRRE1cEkgZza4vwsbNBgn1oKvn6dbYkC52T9tKSQMKvoZUhX1QiM8xbTnywegBfjhrcxAvXa5uoN8FtA",
  "key26": "2JbKnwWcngzCqpMe8oAu7SCrwLKe2tNTUdQiMKe6KpigVbc41f969TZj63SwKLPSfLmA7sTgksMNSvrfcnc3LaHK",
  "key27": "Dx7yX4hrLLRp8vcpeqoXr6M8zfcZtwX95TVM7GpfvG3s7nhHUSwAe5C31vvFSVt7G6BGKmri2rD8ishW7FGuHXL",
  "key28": "4Dnb56XgUYa3PE6CkRzmXC167M5nqK8cxrPvDioJAWMXj4ybkMVqi4EwhRXmYBu5wEcGv4t9ZEDdFvsYXxnVj2qk",
  "key29": "4nVioBxMDHnXtpdqLX7CqmHLhUmFPBjYTg74Lii41HcpKjunEdt5e2yZmtTqwSFgPj2hG78JD3fGypg4qJm9TTnA",
  "key30": "9maqGA6arxWFdqpKqDHw3vr4SQ2Lukzo3srpWHwg3TErUPnNTG1L27RdEgCz8tdDRCS9TiC3mm9zh6A7qmdw8qh",
  "key31": "5Eyv2UAC7cA8Zu3yBkM32dokGZUnf8FyBjjCz3hhuYc8kEJj6cd6BWiLj7pcK2oUMaK6LoEpSo8w7oVdRuST4ZUu",
  "key32": "5kCw7UtDK8bgsxnwGr5rPxzszZwNDgfBUc12JhvHfj8Y1JgGxYGu3YpDDHN1SaKynaYR18RqwXpbJRgv8h1peJJk",
  "key33": "48pgzXMNAUcZ29RB5BAG7HTiE5GNDcUnQvB4qjQG7LD18yMVq6b2mZsE9wXQ4wmNq4k1FK8tiU4pwxQXaS6YhBKd",
  "key34": "2mY4AiBsVXP7SpsgAeDFkAnfwx9istC5sna6xqsd7SqGkguEYpFN2BCSTYekr7reA7r7S5BkP53PZyFtuzmq3Dof",
  "key35": "47kMsLTJmchaBcMNQP4kaYJnWZzfhvZ3xqQBNuKSLhc2Mr9zteie5Rbgyp2DhFt5f8McChfaD1WEEzY9SLSa6Ftx",
  "key36": "2Eb7UuHt6L2XtsyfsL2qEiHgYTdSmEeTcMVLRxFGZiaP59wtSQVx482KSJS4WKKje6NeHMrKcry2jySGGonuHnwP",
  "key37": "4ctg8EepsB4jH2pESifqoTdsjy1jHiJJizfjq6WXngBCXDUEkTz7fGfjTzdunSvK7ij2fmNNywJpEvNeK1D9AZfv",
  "key38": "33L5FrfzRWod9YZACb6tBQAqniUY2YCDd9UCpuitcriswAWMHZrm1WcfGL1ArTdKGc44LnphkLS2DkWNHBXfeYnc",
  "key39": "4R32Y4X17aQCfsQA8DgtTNLX6usep4gZmyyovZtLK8yGrLMbiJokid2ztqSTartwsZDrDFDULfKirRdzCbpTKma4",
  "key40": "jw77pHNTPmteFXm75gB6oMEQ5YY7oFvRhi2ji3LFyDVXT9qAeHh4AsSBMUXjnN3zQEo4nMukVhpPpC1aBq1fyCe",
  "key41": "5pxzEVuQWpxgBJvD5csH2C8m6QeA51W4e8jevda88KxbKptUaj3jxTa68CGxTtjuu5Ct2HCcVdHYJQ1t2MQNTDQ4",
  "key42": "bd93Ud4tjKNdhxztYcLMAr1P1nBjWcNswejHkYJR38ru9szDbvVMAKACBvLpW3khx524vH9uJcgMs11YXBAedKR"
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
