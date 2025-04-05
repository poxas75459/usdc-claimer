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
    "9QPPJWPnNTp1K2m9mXc6UYhDKwX6w3qRvpPBkCGQoVoBe9SMpcgSe88VGGixHZ8RY5Hf7w77V4nBmgg9Gez3bKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nmh1jrRQBhKw29VvxVzmoLwMRoZ19VyveHicgBjVzYF2zjiJ3kqHwiXs4EHWK54HrgcVERMkjcmFQxpei89GYTY",
  "key1": "bxBHNkN3Pgs3vPgMhyP7rj6iorukZmSSmyfuHxbSqb3nxNMN1L8Mvxa6nJqwD5vonB4PKN2oE3JuXru5azCpvRy",
  "key2": "3thmLYhMk2STu7CAz8qir8Sk5v6Ta35VNBuZE2Mye69NGbdaBDxn5arGLkZknhXgyJHtLmdayqduahKqF2XDztvV",
  "key3": "35gASjXLQkgaFCG13BbiddxjZJXBnpGSZi1Bp6CH8n9vtPXVxCdosy4ULzZRLnDCdoqMtsYjLrS6WdDbbBmh8usj",
  "key4": "YkmgWmpZRv2gqnSNuRUD6Lj9LJvKuG9uEP1fWwsBucyJd7A95BKMqj2w1Ah8TGXSsbsFruYAQJNQPq72qfoseVp",
  "key5": "uKhyssubeqGUcF6YaXw1R4bYeYFTrVxW5gNQqy9XUGEAdXn5NLjEteodK6hmkTF5peZDLqSiiqeAE4bt2sse8Pp",
  "key6": "3PmcdMYVVJv32xRtFJYEM73oH4GCvjcv1YLxj63XkeGaHcbDCKKSfNsrU1go5V32RRinUU8qnsrrzuS4JB3qvb51",
  "key7": "538fMR2r7cKQy9tdvskwFPLK5vshNHWii8KyZ8DnL1tCL38zVgwpVM47s9yrDcYBVKkkDkA6LVx4kEuixyDx6ESU",
  "key8": "5sQXQMUQH8yNqTPbBk8J7iEJwE4ombb2wm9Qs6fMJZcPwFu7XN9zXXYGEWsVDmWREBXpKWbohzNBHCwZWjdx7Kyi",
  "key9": "3kAPpZa1kda73QSS3XSm7iT8up5fvRR4v5qmW3AEq8YxmCFwxWP462iuB31g7d4n794H7gsQCXQ52UKtz24v9WLU",
  "key10": "48HZ3dcFrjN95nFAzx1TJgrXYWNgdhSBGyWUQpDfQcfF5hmAxxATrDBE4HE8LmFg2T3gmZtHAaez9kEYsBfVWgoo",
  "key11": "5PRxU5naAUYdgS1t8Y7F95YhYpk5hCYnF4WhPGqMjCFytryTZvyxQ9QJqNXrPDRBswZAu729sid7gvo7daotSxp3",
  "key12": "4REx8dBYv4Ltz3NyZwdp3SQxD8SRALmXqAe2dvEXk2JuHVNeqroVR8d5h6mY5WYGy39QG1vSXUAYMRk4GJf4Lnpx",
  "key13": "2ErSSpUn5wxwK9MBVwvBcVfkBw7SbBewzwPp5zHiQKbtC3qZ7HTqX2DNTEWQbm8XG8UQb2rZR1aFWASTHmsL4v82",
  "key14": "5cY82vNCfC6qSSykUixJo2mwr8vZxQffae5BQF6PbrZBvX54fc2CVp9tj8wZW1DT1igY3zVnMNALWaTrKY15kGzn",
  "key15": "2v6mxiDh73r2o81ifCLE9fwRQFm8fpN6dwK5rphS3gP14B9nJQWKHTeUhFEgcq84y3LY5MxTSmnr8Qn6aJCsaFQq",
  "key16": "F72KGwioqz2vkWBuzBM6xWUTWCxL2qVF2vrEXNiuKQDUhgV7zCrtzEMhPAYHHnGEP4DP3rRLUT4sD3nb6Cfc21s",
  "key17": "3PK1XyuRnQZzQo69ST15D2vFELGFdsoDvGKAACeADqcRHGtxEiuZoJNCcL4BiprBKMcGQWRFPcCGXP1q4B8fP1cR",
  "key18": "4JWqnfnSrPbhR4UMKSz8JTfade62ePuTUDXDui3nZGAMrkNqn8hr8Rn6EAT8RPwLvHLzdBR2DQqKFZdbYYc6efjE",
  "key19": "2xvxtGB2ZcZxeGsUKdPrpxsbSa2yw7R2xGfFT8jayn41VvfAUVcqeDGW7duWBoDQySDZML8WzLTbhghX7AEmoZXG",
  "key20": "2HNZcmhtfK487p7NMxHfK1TjKRQGPMTQXo7NatNuiMrDCq6UbarADiH6F36jVoTDaabddtSoFPea3FW5tAWZ6j5t",
  "key21": "5YGfrPLEnbbx4GRQbjiZtGbAkE4jvLZyzbcEmiKLuCneHKdUr4FyNuY6cXVN5DN3Q6gZyj3bU5naQca9qXuUZvDT",
  "key22": "2QgmodGRRcQ1fGRbpmuyB9NzUT5p76SRzEBrwdVQoDNoKqNY64iRSacpGUPGdor1kHgr1QWq9dmqqDjh5BD1D7hp",
  "key23": "3yAkvCBEnzxNqL93GjtG21AjWWkELwJFiquFTEKKiQMDcf4MtX8dRyzeb5HJ4SKoyXXmYMq9RSVazjnuKz6kQn63",
  "key24": "3JwvGzoP1VWK8MFcss4tkkmuJJugBEvvtTidYHA1h8KbZQp1DfNjcjnWbKS33EUsxchvqrpsk8LmZ859zm9Cu1HG",
  "key25": "4adxg46nQ62isuyiBPwesafgSVUX11uzKa8gStF5evii2RjNBUw5aFdKcvfczF9Fa5dBZThDw7SMzKL7PjJAieA2",
  "key26": "61gpJa3M8kNzSXMoJYkyTLNHXogfXD4FTNLHrCtkqoeEngdZYaqdKUWAzuPZHcWod1u1QbfvaatvquBj7uXenhxu",
  "key27": "2LL7r6Jsp4rkNiEo5kUtMVvj7rMNzwX1fS3JExu8fMkXfVkecwKybxCNWwhhAzhgjiJCmKEQZkghJ7Rg1mHUjZNz",
  "key28": "2LCssoN3S6c8s9MwYua2bRcJ97iRpZbv7gxigWViFULzXGtTJ7XhQsBr6CMRwDpy6TkSC1ZkDEYm2ZQt4j5Sw4bY",
  "key29": "4Shye77ic9YcyinWyTWH7yNjMshCpknnbcnnMzr2RVpsZBW9iMAFjnePfjbCnEW5zXKuRDLNCf1RbfgJZtsk2PYK",
  "key30": "22aMPRxHQ3fRiCXZMZDRb8Hror3WK5KcJxXubi4F59zVKbEqaDND2pLzCNpKJPQ1KMtHB4YebKB9ZqrDrRgtKDoj",
  "key31": "2rrr1w83AkKq3RayvDKD5Uh8mxDueZUwdC5sLAPSCiwqfNrLNAtLwuQ7raXSup7j7jw89Pp4MDBzrypDWHbsbkco"
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
