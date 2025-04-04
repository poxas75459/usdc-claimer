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
    "34dQywBQAsdBee45FZWbe8JRbrRYRVcL7d7T4xYRJda9PZ6SiMtfvR6t8Mt7snqasZZpXWxhZjodfzRRaxEVFDZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xq3tvj16DzEBdUd8oDcq7J66VExrUA6zZXbgeN5DUaKfVWh2x54MFo4NejWaeNNtvUXdNtBNK7aTH5CNyLvXSqp",
  "key1": "ZFv4BiVYVkmEVNNzwZctPuRzA7exroDSawhy2iTZ5SihaVLQZx1f4uUFQ3kNgnTZcL6Jj8E1STJTvp5RGcpBTKX",
  "key2": "4m6igeiZ8BvsdAKZv5L3MTzna4uEjZp5R57WsaXVhwYuSD6kywzzHTtH2QK7svNK8DTGrutk8YQkUitMDtdP3J5D",
  "key3": "2UwLbjqjPZBzZamStMxVUvsiKCPVS4y2kKznKG2vk27tFpzdkhDuaTyJ8GGqAMUcKikrKsHhEN3zxqcXh428Uqw2",
  "key4": "q5TJ74xNZRLhtZ5sjnC67x1TDHZvwRDZCDQpwM964Vid51hLyGTXcwzMLHASF6Pytuyy94SySwNmLpfotYd39Fs",
  "key5": "3NMCkDpMqVj56xvjYtG6Kn4nQAn4L76GiQQX9nYn6auwo75ikWKpSZWAQ2CNhHG7b1SXGjcX26HRE4Y58raNhhfK",
  "key6": "N64gTukK1YqVVB9h1vU4JJmuBs65GeiTzS4eudYNPfpgE2PKA6ZfxA8U48UJseDv9PcP9Kk59iSYMW4ZvnUR9rx",
  "key7": "4SfugLVUPCZpzSrzuHyNZZW1hWpPtHyz35cuSNDsuFFGHqFoomkLmwQMHjf48cXxFnXs6BPY6T7zoYKcUemaKHnP",
  "key8": "2CGobu229cWsmbnwaVB5Qu5WLpCscANGnMdDNmTuNeperhjdKvGvc2UutxtK4zgD3mVPEWgd8tAwkKbb3NNg1zNM",
  "key9": "42yYNDyEYxG3Acm3HkN5ZzaXJuqEHk6YY2kP8rRQNjXLCfrXNPp1dphxH2MmgFewQxR8N6qq83xURr98MvVt4Riv",
  "key10": "2B5oQ31HWE4vPf3GiNHLFysAJmTqWMMbzgBWwTEkZrpjJCfeQBBt3crZVFndF3ruwxex5BRRQPEJazRCrMhPadNk",
  "key11": "WPtmo4THDWCBoMpiYwnp59JeU5S2evboZq1uzoomVZHqTbG69ScxiB7s5XQLmDLNJved7jfHogFUjwHTKEV6n4K",
  "key12": "452NE1Re7Mc85beBFaP9aUqm7UhVN7E7XR9ejE6To8JavzA1NEttrmcDGDtEwHFGviFF2uJXtfx2r7bHf3dTR5wN",
  "key13": "4Vr8iCEtUCW4GMmJ98TL8MuSxPkiS8oMQ4JWbcagdzbappgzGeA5ZR3WPXp2YRNuxdqCjg9Eb9JfnCVRw8rrob5S",
  "key14": "2DA6MGPqxSvhrbCuywP7uAG7MskVfnmv6xqmmMEq6XGgAtCpn4S5D6T56kEjmZnjV4zv1FduL4JSWCHETDxiLK9G",
  "key15": "2EPU8HrsNTXmxi8ddsRGxtY9CxNCdpXLz1xUjQsUBr9FbHwa8mzhY753RMdjWe93d1nhioU2kDsZj9Fsn6RqtHzf",
  "key16": "27q9tb6i6nphm49aaqr6gyusYDcGZgzRsYn8S28a3qEWUMAY4Vhy5pFakZCkpM9SJ4xMRC9y1hciyasQhpY9y7Vd",
  "key17": "5uuKTZyawFqji1e6mJxPwAR4sadgjY58seni6aUM5hwEkjcrKGyqDQDbRPB3zLytgmn53CDTgSEoFQ9LPzPsuh42",
  "key18": "t2xQ5uYnoz89YDakhnTsr78KiMFKjjG8Z6PfL2yJdyZtTwVmM4uN22zQ5DAkjjkrnhAHtkzxYdRi1n3HsJPU6zT",
  "key19": "374BLGYKPerHQQ25NfXvjXMVztpo3vfc5w9XXRGZNCwS1fiWmcy9a2GWzjxeTXzjPCjaw8kYnaKxJdT6QjXJSbsN",
  "key20": "32CqjMZZdphBiuVnLFZCNTF2mHRKxJYtsX3zMBDzEzR5RutxdvuYxbhuGfZ84GM9oxCyKrdkk4DKobjc9rbVp4ta",
  "key21": "3AR9pW7VTBkFdzyDbTBTHnEvkrmmC1R3xrcEZr8BVkzqRi8oGQ7uZmNgkwScXz3MyKdXkHimm9EoVC5nLbSkdDaE",
  "key22": "5FXD1he1TZ3PupNbaDcm4JULK3vMjyd7jUURvyLGhLHy8WbCxUdUSby7e6PUzRQMGjs6WpAJF6RhZMhTSLq9HDMo",
  "key23": "5ip83AQR4UV4uJS5NYQQd4qnyzGUkzqNLKxbSkofCF7o7T5mJqVERqzk8d4M39h437Hq9rRuj7UdNzUshgEPzaVZ",
  "key24": "2tghgXwcUCKnNnznyb2L94wrHHrsSbvXsr4QvCbgXKnifmRPGUyxHnBbWhUGPqzNcQa3aMJxWBzVVENy2XTGaEVF",
  "key25": "5Xvh4gLSRXcMEeBPQpBoqrMe4E93DQ4Wy5gRhCgMiU1KPbwaeKLytRWDiZUYnaUz6M7K7DnHZB95iL3F6fGWAwe3",
  "key26": "2P49Fc61WAJ6o7mgm5sNV3YfxKZ4zz9h822Gjxc9sGk5g5eXK8gLGUHLmdarYLbVSRxpqTqt31GD5a68UXqpYGQ2",
  "key27": "28i4zCiG31Mi17qYzPjqz3zSsoTQMCRiJJc8HWACXy4o2g6AZZES7Xb8E1QrmaKcydp2aXmz2q8ztnb3FpZGQp5D",
  "key28": "52kjrhf8h1NwnsAGBt46n5PBKNAuCQaMxVhv9q1ygLNhVq3soRowUYudsYWznZLGbeo4KXZyLJ8m52DNgLaVDnSe",
  "key29": "3n98KXF9JYb5FLPDmnLJs9D64mKkxYwvz1y12wmwwgQiZD46iCH4LaMPXziBFz4aoridppdZhsdQLnG4BzMx7tmw",
  "key30": "4qD7RzwMzTTDLPSRUJdJRLVZLBAU5F4vKDGMGtu6p5nHRYcD7sGpf6bJuDpggXoZAzv9XqKbRrMCkU25UQnKcJYS",
  "key31": "5AXsXyhACz1Ln3Fn59TuMRyRdjdhiRPRLQxDHvhpwcZuyvaFStGFP7YskL1gfhVZsaKWJQyvQ5UrA6mpw7amBf6m",
  "key32": "3u6PsAEUc7QiR94cetaTF8orDMdN2S6f6uYAA2YKgLxPKBPBxrNfGjexryCxptj2eahda3oPi9PFnGSYK8JtxKWm",
  "key33": "3Jjv986xM9ttEDr7Lsoxf6beqTLBHxdQDLvwdHZpwoEVYni918tH4FKgSSEuiNQCWXYccNdh1mWTh1r8SEemNJMj"
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
