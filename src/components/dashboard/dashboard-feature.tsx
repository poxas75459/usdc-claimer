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
    "3xYJoh52DPAXVKF6DeSCsAxM82W74fAj8TETcWk3XAzAaPoQf7YGQAGHXtDZ3uPYHUFumb1fb7L8oXk4a48HyLGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24QTBZa6BpVbMvNYtTqBFwfHXMgfB9BMigdLU8GKvvRHDVeAPaRu2BKXAiMnnJqpDn1HhCL4yHC6e4iZgGGEiSMR",
  "key1": "5nJYExpHktC2vns75YDj28SLp32MBhX9TAVaWGgbcRH7w9CqSgwAX5YqWJCBYh9KoyPzUy3VFA1mPbBCrC1RD36",
  "key2": "4L66Gcwh8Xuau3PejevUGAPBUyxDAktsjkgBFuAy43GLYXCpMfBwG4NQMPGsE4o6oKhbwPSskx8awhrEGjtPc197",
  "key3": "5qbJYrG8BJu19ghAi9A9qhVq7nv2DZSL6NeoZeAtjotT71Zh5Sn7fEAsmBsYV7zgMuqwu76NKbTQqrfnor6B6icJ",
  "key4": "ah7jvJwZk7RCrtqbPrpJa7GvUqPuZpqLPvWi5W9a27yZNPqya7gXdbbhMBKbKYhrJHdXDiUbtABXxc2xG8zm7tV",
  "key5": "umyzTWWRBc79VWdYRwT3N4Tgn6KWDEn6VvqnXEYAW4ADSUPnrMJ1s2nKxhQfBRgwThxoppVQ2zZqscbHrMfeTpZ",
  "key6": "4vyL3SbD2Cf9GG7JPi5wJkEHcLgbzi2QPftoD5ByypyYRYoitFHxLgqBekx96LxjgeJjCBLyUNfyxKtBTnnKqNRB",
  "key7": "czdRY9jYcuLRAPiU7RQDkqYfgocx5uZpNvrKEecetZYRiyR2FdeZpewHDLFVFhyjF6nLGwr2NU1WrSQeL2TRScU",
  "key8": "34C4odhRzSpCLJo1ifPoKmXmk5Jr94p3vWb3cuLUC2nrFo3vPZhJA1iQVjs9DdESUM8o414tTR7UGkfBvFBToqSe",
  "key9": "5Tpi9GfZyMZmrBAZk5P8PTeAsx5ruMMjVY2Jmit2fPic7G2PJfEoMnRxbfjFYmBps2fHAavVu34SxDbPUY59QWqn",
  "key10": "5wV5Lsi9nyzDFGKAgPTZAnH1EUGfCibF9c9EA3hQqBMT68DWHMbogLMrAwMNMigT2R21yn4yUxe3Pe5UStPyt67M",
  "key11": "2dMyZR8Fz1T2oPSub4Y3LMtMVRjFXpmV4xzNAyBmMZ2yeik2LdC4VeFSSvPKg6pAAF2uTBnLGsi3M7KjB16a4AH6",
  "key12": "2yK43LmQ97Y6gRQU3zoXywJfo7VJWittd6MDYpBDudoH9CyWCxm8aBKB13ThTqo4YnoEdLqQ9CszHY5sbyXv4ZoU",
  "key13": "4UbcRCpiAvZnjxMk3Dqcnz5eKbVCUVVd3Sf5T37gJUjDVXwX8LkdKspbgzkCHQhMtsVNFdfJZwCS5pdt6HnFX3sA",
  "key14": "3RzHAZBDugc6j9D4YfWakjxF5SCvcHHFNe1bjQiCjugRMrP1rDWiUP8DfnxoazZQCoJ5R3ku4ykK5VMZWHAwdc9d",
  "key15": "2rkMhdSLhgzSbBsx7xhycucfsUgTbLbzrUWtYpkZxcHjxmQdApe79Z59j9k8DMWExirjGzMZ28DnAPxUXUqacT8V",
  "key16": "5xrBuaBjNaJpmcmrHtuA7r3Q8NhCYHVGFayQWv5J742oD8D8J9cjaEU4ikSrVCk91z21tYpoCSVk4DTMmKqVJLGj",
  "key17": "52UbmWLXbPsMPiAhh7xeKQ6yYztZbUf6xHRppGg88hzCSwZBeYhg3ERFDKBP4ubgQ9PFEeUDykupYieKDjZuqQrx",
  "key18": "5t94rJdFwXdotiuuSpVyHVk6QLKJo3eBcnBLQeR7fNfoLz3fzhpskR8zGZzNpDyW6qh9dcDKQGm2cTvk97N77yy3",
  "key19": "5JcYGYiGAqjnNWzv6wcKvnQ2c1eQrDUntAkpEgo67wYjfEmeKmefXQeGLoS1xJ5rAfu8GRWPkRs25BnfSivEgGVj",
  "key20": "hCep85pFiKrgMYSmxHVN2VVscWV1MpWnA7F3jMUaKboW3EoeJjZXHkmv7JgKuMbYLAXxc1NLxRd2qARk3PGa9Qx",
  "key21": "3k7muxfnGTSGyv2fJxyrXDy8JodH81J1XuHTHSsFDMpmkf7fY7eVY9KZuEi1ajzMumK72E8NCmJJJbKzYH51Bw8L",
  "key22": "3phNgnuPsRGTeNvm4isiBCQhpxvWq8M1YiJugDpvZhwT7vTm6uSYLHy1HprqDnPCt15QmtQSBHF41FbWPYM1Xq2H",
  "key23": "45EWYk4YuSKi6zbBNL3yTTi8UqnqhusLRG8xuik24FjeGjd3tuhxPj6QisYeQrb5rCjCo5Pth3z7Nuhd5qN1bhZr",
  "key24": "2sEe4YDTJjcxNav3wzxW7e4sExojqjoeSaxxc5JYxkkwpD5gzrTFuH6ZZCJgdwTGKGNqgXJ27fphkPBJmYicYQdc",
  "key25": "cQTzkenEz8HsEmiejDHhiug9ncxD2sowmAywvwg7uWuTub5HjrMpLqBD5CPSxuDwtYE3hvq7cqqEfMH7wUxauZB"
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
