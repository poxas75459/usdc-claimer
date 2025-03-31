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
    "c2gSpssiEZy6m6ipPVZMsUrSV9vWvyYXAW8SCdzuKZQWrsnaedvCevasGmvvBHhtZRJWN7cRdp3oec3Ahn4sDbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29dMzogUVWWsYwfgkbLQSh8CaaPyvFzbqqxd4Jvm1Gkvx4Ne2HLd48F295LPaeRYKknKPWTV5ovWyKjvSLT4Kco5",
  "key1": "yNNopCCAjZdnt9peRvbQvcLYFYzoBFSSDTfSQmisyoLgrCsFs23n8YAi7MAWSZaXJtRm3LY5w7vn3q4wQPctWer",
  "key2": "5UpPUG9mJVGBBi2d4N1JsZ79pDdpj9Anh9TRQ6gE6eVCqRV4MRtGKggkMehc546GTFnotPzJZHEr16QxV8sivK9R",
  "key3": "3SeA8tqHXh7qRhxbSn7VigRyk6EvudW1h7ifJYHKGpemgpnA9pW2evE96ey2x2fjTTbeJxrVoKy42mWhtmvSBVBY",
  "key4": "vj7voshkm6sxEAEcCbHxKKMoDuzxeUH77QtzM25MUyNjTQ6vdTWxm3KDqgq7G8UPNnKX7rKmj3TeGVdFdwwxt2w",
  "key5": "3FQBZFr2RWzG7UyiFP1Nx2aeKEmcRms7cjEcNqNGLRmnCQF93PC6PPje5rrzL16HHNfu2rER8dYSQzpGPBMuvNpZ",
  "key6": "5NNuF8NjutPvQNZQ7ZsZsx5QPYctyMJtTqeokBqjxW4nsgk9i5PGvSg2namXqpJe1BEWzeMieYaBBTwKwqgzfky7",
  "key7": "AeqT2wSNUqdS6dy6jvABTiqjgxa3jVncUx5oM1XNibxJS56zz3cPJQYX7HEsWvfcan2SseDa4HxwhEo4b9vetmQ",
  "key8": "2GP9vzjwYGDQRb6RRH65TQTNUy3B6qM288Y4tWHZdctM6DqX68hxWcsCveiyF8WYv8t7p2s8rqmKFCfYWger2Hw2",
  "key9": "5J8Pv7SPGg9uHGZbLX9HTi5SJTPymxhgjiKxFjwUDWUW4wcQ4CSjQC6qGT2ief8KoSRdFiiDXiXp6WR4j4XBk5qA",
  "key10": "2rqbYikEHDDa8SGKmQJMDCPVwSAxbBY9oZM8qbTp3cGHCaD5jJpgaUnTtKSZqVv9omMjk8zMbLvgx2X5breammiz",
  "key11": "3eb4UmWeCSNn3y8Gwm1aenS3X3vjPJ14Hf9XYdkvvToGCLUfBtyW1m65fkHciD1nVWuydND3ivrH8chxQYriFBXA",
  "key12": "2mpcxyaR7tBh6KuV8GUN9SRYeaPhi1nSFN3aDKa7fciRdyxp8dDANwbdLZ6Y9A8PBzj4vyvBCAuYSHvBhrLBzLrw",
  "key13": "33sTS7CYLYauoEq49c2ZVE4xDSdix4CY7VBa2p3KRPtiU2HwVPYsieJFD7RLUgod4hGyeb7jqD8ALZaDN1wfduBr",
  "key14": "4PAtJnDg56FQzZ99cQAEnZmpifSg1rubVGwpYtADGSkEcmaC9veP8ZVfoWJmDyZEcvZwbhZeueCpi3LsJsimWxyd",
  "key15": "TQfvDgK4ezVFXMaczcf56ZQx5RghxEJkfrZV6yKxbea1Th7d19NsipHwaFLpncmB765EACkbxN6aBeDAN31wQnM",
  "key16": "36K1iAyv8EetYq8kRnhsiX9EBYcJukiL3vAjM8ABtaF9RdHTySJ4sNRJmhhCTzhEqEzoSdiR7pWxrQPbcpGvD9eR",
  "key17": "2tNYN6waHSiNyYerTW2XVSsZX84nyUDp18expUBfdKbsYhqMUKEoQDUwx68f2sbV8jBUuYkb5qs6sRSPeEe8CS6t",
  "key18": "3TpTYGVBDZ131bQtP2QAq4N4W4C9bLFEzcLqtRNLHBJbgMfqtaQQt5TyMDfACCZcDJosowqWRZzi5z1bBLEw4LQk",
  "key19": "3j6UHHSoPNTbUxktwL7KvMBLM44BvbuTt8Y7zWv4w31iRCq4SaQzJrM9XW4EqqAcvW8Zpwku8sf79mJzLQJTAccr",
  "key20": "4HfEaTLwhAMtzgygTD53pCqGc4PKFjMcZcnEjhogWDSLRiuqM41oavNFGM9jPEVvidpbuY2v6sKTVPHCDVzTgnWc",
  "key21": "3ctjybXrw33HPeuCSm6nrftVfPv2Qmovs4YMBivk5j59xynyvQTGDahM6roESHWjbCDNBEWvgRrnZqzBxiQXNoqk",
  "key22": "4soqz55TpcP85MV8eJdoUx8fZ5egc7onaYFSgLVWgomth8La4ogNLSz9vwJvRu2cvkSGyizhHJhe5KRfWziGs9QY",
  "key23": "5BMU63ZMAgiVoA4cLBfr2StcimNvJb6iKHnRVYnamrpq2dZRSfpRCGn2BhBkb2AwYsxAHCJN9KNcYLU6akhnHGuT",
  "key24": "4gt53CENyd5nysG5Kq8gacd429nkfw8RE1YNMLhGN2SAz2LG33mRbYJ6jB3nLyyooRS42c82mRqvUV6rdY4bDw7n",
  "key25": "55f34uaCow8btnVvWh3APsyhR3KRLXftM1461FSHvTFqxAcqzGAFkZnZPn1PKsvfeaHrtCrZwBtSUn8f2SPv5oWM"
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
