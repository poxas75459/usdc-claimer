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
    "5uME8FqYnJ9WFVp8vCTisNWxwJaXiSxXfzzgaMn5nAxjTw2mvvUZ2vPJnT3gL7iLKqJCQU1wSQJe9Tn9AMDAeAiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25DpediE9KZb3jMw3wFBoKEZ2MofkY2oSGt9zaJDaBHVsPGy1AEY5MQ98B4JgVx5fwPtQVUcwo1fhQqMbqgDauSc",
  "key1": "dRjawccTH9qRjSg3FP66kYFGfPNrYui3zt4WdvcvX5DsuWj6HTyf4pZk9D2Hpwq4o9MVEgbjwnMwHdoWMyCb2tS",
  "key2": "KXSZ5VLF2cG2wSMytvrs8vRYP9eb3xohaVRWMLznV4ZNdZzMaWCQkFVujcAXkw9TdYahR66j3B139Rd9ixkkyLz",
  "key3": "3AK33d7aiC82DJtYqGzVKuzWJovc3HZpdBc9qhm4pJjLTB631z7ZT6HJ8EoE4euDcrdEm1m9jqCadgC8BWmejQwr",
  "key4": "3AxXyz7c5fXCN3H9aVJ9Vke4jaEjazoPrxuhiW4sfFmrYmFCQQFTMfuWt68i8tzjJsiGYcRNsV6gi2xDHdtj7UNB",
  "key5": "2C9bzKbzSyvzuoFzguGTTQev5UaonkAq5vGwRDvK8EfhvGaNJKR84KNa1va1a4HWEg5eDqFuY5VbfXg8VZvEEu89",
  "key6": "4bdcwy8pMrxCcJwUwfKawFd2iqJhbkqsJ4XUesYYueKPR7maQommuXwGY1cU7HJiuyUaYAhmME6qPmfZcwNi7rRi",
  "key7": "dNN8CyDxmMjuDVRLN3ynYpqtxdEh5Qn1HH2TgcyUQAid6wgydTm39kkMsWpqN7Y5JALjaWJcfroyRj8ReFABHyP",
  "key8": "27GgUi4zdKerEaDjNmdma7QzBiXnjC4XwkJaD9cU9cFVmtmi7SwnD1te4CB92DrgrhURMCUVTio4vpVyx6RNqLux",
  "key9": "37Y79Qvd962iUqbvfc1EmDZ6rjYDxuFw6Qi4XCyTFvpsDKy9jYRXdwoWRKz7T8WAnXTxNcXrdMqW67PevFQXixZm",
  "key10": "66Rusw9AdWgmTDKFpKUkroYQBxeVmma9aGUDhYGYozssFDtTT8Tz7nGut9u4VF5Yxn33KbavyD6EFNGfGYz7R8ft",
  "key11": "26mvbrkXPavSsE6aqgq8GSp7PUUdDZ4LxzyCPa7mar1vvaZxdAFxg3JawWd7zbhWEJQBZjzuAH7PFdCE2U9he33p",
  "key12": "3WahzErwYKb5dtsFNNJEdMJ45kv5wKTVnd7bPSB8P8BZe2LFgXta8p5n9eToYwTWVYwMFJeFPXQaPZQEdbma1Lsx",
  "key13": "2GEadDRGzR35XgyQ41D36eyXigLhgTCJzKmmSj5vrw6gPeGNqFGEvX9McSWWWkykTQ2uEv7RMVKpsZqRXcEZ4Nnu",
  "key14": "4cLX99rTaqQtU3RBhwRRtqo3wrVSbxmnBnXy4eqg4r7s7SGeWfqhBYRPkht3LArf4VemAMx3KP1xBqYFPL2tHzxc",
  "key15": "EqF1hqTJv1zQGrfSQv3AZ1GUNgyxpfpoYYXgrD163nCec1xooCQAQBpGYAg8gqNkMecQfZBdVj8m7rqpnDkX8C1",
  "key16": "5FXHFxyUeAsS94TQuF8N1v7tr4o64gdTBi676eNLASXgW1b7TCuq3KdjsGnNkoeNxXbbEmhMBuxvpakW13732CVA",
  "key17": "37Jt2ZLXzrYghnk1VR8MFiyPKRDi9i32aFKEm3pKSy9GLSM5CgVZrrxjHa8ocGEWTg3DJ2HDZUjL12Uh4EnBpYAF",
  "key18": "4UzPdDiMDXvzHzPaSD52sbYtDeTWD34zSTteK8Qi7V7ziTMurVHV2axUdfrVBTn1VjCxADi8yA2cVEY7ppSvnmhp",
  "key19": "3a9CATPyvvWhArfUKzAYemVi6q9yQrQ5NGaZEooGoZL5rm46CsaHjDhqCS1pHqZ7VHGsgTA3f32NBzhH8V3nJTJ7",
  "key20": "wobkkKCYkAtbyeMzEne2B6ahArhNe9DFLEnfryxkTzJdZ4g4ydcgzVBuA4BDkEjDSwmq6fbKgtaXo1XZNenfjio",
  "key21": "3NFX7KZ5WNfHr81JQVjXjBjUt9pxsFeGynK8fMivjTJqkwk8HCCi91RgMECmgtUJf2sMbWVm6tNYm889KevB1mB6",
  "key22": "x4qQ2xNXpeLsh8jHrNhUUejYRUspG25x72bogi9RtZCHCxtinErjTHi9X78ZXKn1Xo7Ep4CmQ4unSoG5K1iXHAe",
  "key23": "43gzSBLNE3mRjUCkuTfhhwf5PXdhPqqTowVczyyW2zXbP3KzJhe9JAYB9kJL3CFsm3HhPP5vftGmGQBfYyz4QvUN",
  "key24": "5YcYND3Cr4KpYMmZCE3B1YKZb18Ce6xtfEYrn5XjbrxBFuLJ7sSBseFZPjR27LZkLoiF9MKCEx9J4n5y5w2a4UyT",
  "key25": "iXjtsHvbUwPAYbrC4ojphb9AfaMRGzHRPYWryHBtL7vnTzLaAVYcAUvLymqquGM9ttpVddbBkwfE6tqX5nJbfyi",
  "key26": "5wqS4NpDdXdwysvifJ4bavzD1so8rj1Lfwg3VamdDTaqDvvSkmRQNqKsnKjQRoZmpayTMTr86XCcMHWQPJ8qXWxC",
  "key27": "3PFHZzK3wdZ4N75MX6pAruhC1X4YdksFUSfDMYoEUztrVrJnYNWdMovoysRtYwvjeoxgtE2gXq5dsjjN5JobMi9W",
  "key28": "3MkN6PWD4FwhMAdM78tSF67BxNofAQqi9EiBMrN9HU9KbBFPBahDeaiLMs1iYqwW3ncvD7etYAyQPXJNKzLR3vtT",
  "key29": "2NjK7vdTj21QdYbeaRrV2gpvTcubw8vBZtnWieWxdwpQmQ5fs6wHrRK4tdwSAL7dM7YTXDnNfZ484fPHEy7NHssD",
  "key30": "4abGnYGvoeL8YAkpCyDr91R6qhh39A7L4kKu5c9XnPbKkuLiZLfqgYsBcV2wLbrJnBBAnH3HdSMG8jKxf83wbTt4",
  "key31": "4sHW71C9BQ2CcMMAkmqnkzpoJxSECGQ1trZjAHRB3wrYpdYPnxdknhFj45HitpL8tPDQsb3gcEnUgxQHNkXkMaeZ",
  "key32": "4yiKWxwpE6wGno3aVmaTouHVHR7xgmf3jXfam9Erb2HT33VWzmPB2B6cJ2QaDTi7jY67QT5Lf72t8ANsv34i5QuV",
  "key33": "UdkMUS79dSHcL5FsZmBgGoMhgJUFEPgdsb9q7YaMCpwoMfhVLN2w3jcSsYLPwRB1XQudUuF255XPk4Y3SonzfPL"
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
