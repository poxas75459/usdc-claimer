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
    "3D4y6mTMEBkdjXMXgk2pbax6Rb8Koc4kMLUSRF6m8CoyZcPFYUek1yWSpPhMEVaT1WYmMWH7pwgeWd835ZMnfhwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RdVMbGLzboBxc1gW5KfWuFRC4QYFe5ZKdGpDzoJpmXkXfGhAMw8PLFe52wmhN5Lngw2ZkwUF3JZx7peEBgHMhyk",
  "key1": "3gNEq7jyXmzHtFBmUR2X5JAvD2H3XwE7hNn9vKP6L2oQmuRK6UwCU7xXcXfYt84T9tsk6HZjysf31Ya5ovYExUrX",
  "key2": "3W7FZmkbJbHKGvUukUffc7WJE95ndyqiuzj3ZtRLbtd73xp1ikoQF7Y39ymD4aNmoK3iKGxaxZawdumDFUWBFkdw",
  "key3": "2Rjx9q372DXew2A5ZGnJY1uB4LatQzQXoREQg9xmkQjqtnjoHT3oismyuTNs4LRJkPNhwN7EzoeamvzBLsFq9Tt2",
  "key4": "3htvkaCm9Ze5P5Fpxqvy9JGPjCd2JAPuZFVfXzYD5WuieLZR1Lq1EsYBQU19uJGR9D6mg4q7wVB3KoG6RJgjGvFq",
  "key5": "3TVK5W9nJgkdyEV6EwqQLdQsMD4EmGSqQnQ6BGn5ffSCLUpjkVX63tKdM3qZhoSPDSJAYGbqXcJUXezEDyZAGQ5k",
  "key6": "5VtLfGAhoiCGVgfdwELLyvpapLdhL8FqxA9VUwsXqRf9jcN2gJ3d7c7FGCtLb4ftNo2zEmCpk3EJyx1KZyKEuioU",
  "key7": "2RBfyx8vCw7et2UhwXZeU8TVDwsFHTJVNiVuYNSsaZjYLJJJR8xFm4VEn1WXdT5yApGANr9pNWNQJqAJNH2WBktr",
  "key8": "63NZsQYho6znHW9FdTsT5fzRXeTfUZEzLPiiZHufbMeFLj8ayjdiSywR2hT1FBiFsdvoZcpGAa3sD1a7b6CSmLg8",
  "key9": "646UzLjF9hwsVMhU9TEbcbF8DJCxCuhFU8NDtgh7DDoo9MjwxmdBkoYrXhSP9BMkmC6v2wKucv1hCfgbTKcQtN1u",
  "key10": "5W7gepGhHSHMmPmRV8CqHYrR5cbwDXk7FUYeRqBEfhzjuhE6dh9Cib4yivQAzvXUfGXMWXYax46J5fMrzwqqB7FZ",
  "key11": "52BBXxuokx9gMFLUYxRqcZkySD24M5PtMF49UKQHYra67Nbvw363726dj9axWJmishhxwiT5FFd5BbXnjfxpqsC7",
  "key12": "MpWGz5q5cfpBArW5aSrGekn8TYX89fYG5Pmb25xw9cH2aZNjcYDmqhDXfMFKoxPiYYoRvBwiEbHBFrZBUvCQMxQ",
  "key13": "3fo4K6zSa9pKGDdTRZtFfZT3KA4TMAtyfQSo8sSottEpqviFpxUCjpLuThXzGQJwKqSecoHG2F9oe9rMHuwrVbBx",
  "key14": "3MasK2WtiWqDy5CSw5Vz1hZGQutSiFCgyTRC3xVrDbas3gz5Jo2CzKxoy6rPfJ4A1hXQp4J5ki4MdfzxBnVi3FG7",
  "key15": "3wcepfJwXqZUuYpwpbnpJYwescCwYsnDCqRH4wtnGfyGPgGXXnHUkZ6wKdTQc1XepaRhakcV1WjiZo6TojLs7qNr",
  "key16": "5VqqxnmpsrnmoCAHP8rLAYXCQeKorX8FXbAU4xV1yQDyb359KT3jCKcMLdZgjKwZGJz4oKqvBPVQj8xg8UFNLQC6",
  "key17": "5RLjsruAnH93hPuioU4ZWzisd5ZUrCTfXQWw3xpUvjXiFayD6yugGqv5PQeWT3mpXRHg9pAjCmBicSH3yG4eBhC1",
  "key18": "46hU7rpiuqU7GXq72aaLYQaKbP6LD5D32wTqmH5jP3fpkP3eHGho1EiFVp9Qsk96V8Ft5UjcuXJmfg92R5pQ6s1Z",
  "key19": "3Gg4xgHnM8apXdejmNX8nNNsmpekdZxLH85a9TmhRoi47ixXTPNyq7GWf523CQSmX8E1a2n5JF5RDDKgT3MWLjtS",
  "key20": "3FK5GMu4iw7dszmJE1DnbBgEsUtuP72e5vRCJYfkfzaaGVEJbacNmXRAjw7YMDN7RFBKFWafJGm5pDxyJjWXc8df",
  "key21": "BH5KWZkZEt3rVgnxXdVrDhAD5C7eN7WVFUxTAtCabSu2Dwb9YQ8rXp4Mfkn1GBZ5zQhTnhwM76kpXwavzCAUr2J",
  "key22": "4L3NYTyLWz3ssoQ7BJj7pKithn2HgFecT1MJ386UjV4nocT9h9T4q5Kp8fqqUzzd2cgSaa5g6hFpvLwkRygtV8hL",
  "key23": "YMMfaFnpwe572m257pjJiphmm5Dth1hBSCaHZAXwiXMPhPH8FPk4qewDx8wJfSBEZZQCNeBfx5gh8D7uiJq9cRS",
  "key24": "5nrPeerFGcBiGkSrSTTo6opv4hugSjTDQ4tnXZ3pooX6wA2YbBoGVKQuhjwtLmnVtUWjVypoGLws8n5XcH3C3fQc",
  "key25": "52DGGKHCWymQAUxXW6B4kjoHFG4voDiC64cvRDHPVfjJ4nFwvuALbRy9onHm8vnyawwgbcsvFYdd9rWYv1EXp1nc"
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
