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
    "2qdUSXNbkm61m7D9oWjxN7Mi9bT21iYa7vkabxTqXuxAAcqYvhF8ybhF15BtPjBxs3AU98TRefb7MZwppgSgkhtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eim8Zu5Y2Z75jkQFs8ibgtWKiV8Xvz17nwbbod45zFumesJJDQzWjiVs2nVeU1YJZXa5GgkkwZzXkFHiBDLyEF6",
  "key1": "4eR3nN6TN7h9SczgxR5cHDNVDuUucz822D855BZHEFcoogs5gqvPRcWauVhNk2tcUEFP5eK3i9cyLHZuxp4uV1Zs",
  "key2": "Wpi5D4Y2dNGK7EJ6ZVAixWvKxSQBU3SSWrGDA85HMTWubL188kXXmj8xdtNGnuiyKpzY6deT1nRhM1LKNm2X1k7",
  "key3": "2kjuLSvkBUqLshxnT8NSfFNaWoWG6tKwSnLKykpnZL1YekUcyTagSp9yEgk7DmufGHqEzrqjGxrjWGZtuCqyCQrf",
  "key4": "3zUK487VsLZdQj6Rgpgnsjp79k28xPjHyG7DEqXhWUSbXWqRjKHyavfEJjEYDAK6BtriJhTwmVPDqfAB6A2M9E8m",
  "key5": "LEDoC3rZBHmtNxgfnFpvbBxaXa1B4ehneEJwZwd64EWR4yopUxDeGtyFcD3tzDwggAxmzbVgm4azURMVhGHFncD",
  "key6": "4nuhUnyGqWKnHUfQKwXTzKx2bGgkbBtvGszyryY37rUzRL28KJM9oyYMhpz9SqjpdquAKbY1DiSU44ZG9ZbknaaC",
  "key7": "4QMFXduaA3DG3mjRT8DZh8i9ZoFzFHUaahDCpguWVSjbAxEcaQqXTX44VrsFW9ro7nYj9Ehv6Y6pJ1YKyzPQZnQR",
  "key8": "4PBWyTvLUYxFUQ8rUjEvZrxL9VmTV1jbjzxKAF9GRrMjFFEehvvHGLVHsXoniSBsbwRhCkyLAT5Mh25obq2k9jut",
  "key9": "26YhkJu5CKCSdfjU2ARSSh5WJGP2o6zFu7M8c8ZLHAGNUJXx4gw1fWKfwqv8wo23r2BHPoiVJVsVXiaKBL9bN5bp",
  "key10": "4d126trgSHtnaLod5M3Yy5dKPiuUq7GotLNUa61feuHY3eWc13MwEmo812FsYpXdaT8NfqVZQd2REtenwGewEN3j",
  "key11": "CbsHE1oX2MM5mY5BSDPEft4iNz2joLJnnDQFtyhAU34wumXTHoD7KBwiC3gTqeJovviPLhAoqDDeE476Q2Ep2GX",
  "key12": "mHgV67yrmcQ1Q3CXEHRTDXgUna4fKu7WBFHFq1L2Kq6EHtYai343W1YdqigpDNV26MDpzGVxbUFLo6p6fEe3EvF",
  "key13": "DWnXm43VEpXaiFu3PAyUh9yWQ3WNjsRvsfA97qDsJMZdoGQniLveTK2n7gqWaoeYsdHw1xBnVnzDAvqLRWiHxXZ",
  "key14": "2L8d2aWoq3VXRRcsTixYPTahDENtjnycFwPG1ei3RYDjx9bYuJeiPvZjkFm4y2G1QL6dbEy4er6Xd2i9D1By8w3t",
  "key15": "5PgftuUXS8Fv8Tbs9ojegGi27yQfHa2oLf7KTwHQdoZun5WiGTq3mPbByn7jpfdU28L4MvP4opz7de2V8rFPe7fA",
  "key16": "3JiaxzB2iFMAY5jW2YZaSNTcD57vbN3q1fcApiBcjQKzn5yDauqE5GqphsvqomYH8CaV7zTjDGwLgW7fnWj5GADg",
  "key17": "3U1WyHam5HffPQwntkJN1G7mKBojabTdwd8rvM6pPDKkDnrz8vj5BB4w3kKbSu6WFNR3H7Wmz9XJ7vQrH2oJQtw1",
  "key18": "5dNJFfpQung7buDKYCWb59XW1uRy5qdY4rAdGymCXqGvPxWJxVAwDPtMPzTTWYn5qV3vk2cSBsszi4fUqLR2Lsgs",
  "key19": "2hZz7juLjADSPriA3rbzxcAi3ZLaFH3DriKbNpyo2DawyPmcpWV8y77Kc3PKqw4HhQKtYBq6FfrLcax58pJdfCqm",
  "key20": "49pf7hNA1JR8sSL98U7YtZCPfZsACz7aFFHp5PbtWXWz99SNb4E6Fqz2HypFZsnC6tXPdKZn4chYzvNdN5F3DCL2",
  "key21": "gXUGHrwD2j4D8D6aG1LXAm9Y6UiyeSUhkqzQXeXRcFQWvzEMGJ1CQwbV4H92dciuWoXah9cii4BtSNA8kki7Rcf",
  "key22": "3STf344DBXdZCJwPmfKF6RVcEgTJBo6d3DZpEvXwP68kJr5gkiBsyLMn2CVoXxF14dm3z86iV2JJLaxoYr4yqHB8",
  "key23": "3hbLE7ffECvDSE6hfsiYRMTwX4CaU9o7wDR5Ezc6MPL9seA3mSeikCHHhGgqiZT4t5BhET321y5SW9WcipNiBqJZ",
  "key24": "3EdrmRrmmoiDmypZA4GBMsh3XGeaeEzegtHfUaUCCu6CbPYhMDrwjFZChjthRAbffU5WLeTf3CVZsqaf7kGT3A9N",
  "key25": "38U9kWtjv7PhbrGnomPVWnzVDe7fXL8LU6ecaExPCKYsK3PQ1YaJKjvUqif9r8pyx2KX39pxwL3so7gXnamJvvnt",
  "key26": "45c2pGmRVvEF9niYRAbSXBjg9cZUf4QVfwgr3L4Dtobw5vb2cUKdSeZLuLWo224nRhZe3CWrMqsAM6GC67QJZHnj",
  "key27": "3gmg5QrLaXqYVimFNDd4LF6Bdric8wLj1y47CMJy2p1x5RmLcS9ZF6S3yU8Tcx2UBZfJmHHfTHb5C9cTSGXYBwe1",
  "key28": "2aQ13SqNndB3xVkNUBHdboqukGBxvbp2PhEjaW5seqPNTSaf1WeNcLwKZ2r1zGAt3ubc9Ay7jn53o8qTjz8v8Mfg"
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
