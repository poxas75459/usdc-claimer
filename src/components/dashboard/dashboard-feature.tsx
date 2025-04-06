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
    "2Ab8MNxUAqbM8DBK41uTMJw1ShgabtkQGh524Sfz1ytV9Rdi4cAjwA8EN5PZav6Vht5oWq3QiwsctGj5iPp4m2ft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LwHtt4NusoSc51MJWnKNmAmSHGqQEHS8qbZXbQdqtmZS1Hbxu7Y61iMiRREpHYXBJ5hjcgicmgFLM8sFDJXuFjW",
  "key1": "2F9dZYiM3hNmFrPN7qPR9SebUpj8LF7iuEEdgtHMGjTpXjYPr2PSFLoZvmEYe5A4H6qic9iv954CuVPuzvMn3BLj",
  "key2": "34ddJFWXFPGHwBASZB5QLBcohhWPgPcfUuXxYdg6EgnHgfDMGWPvtn73c3JpbSAn53zMNkeXRACxxAuLvy7HfjED",
  "key3": "3KM8iPt4mtKYDmTK8bQ6HfeXba7xhRLQnwEaTiHXwYYfNqjFmFeFQ6C54c7UoXMuUFXDrtR3cqjUwqe45ZS26JUh",
  "key4": "3ustKUdUJVx3o1i3axKjkBrePvLeYAWic2n8bYLqJN6THpLaCDJEYsKjZjovbvsjpP3SgFxXH22wdqMfSKfCN9Ss",
  "key5": "yaBF3NeYwcsyUgDC2rtHawjmvW5px3zLg9uvWVAhaUDhLtQJU9nhFP4YcgSYfKuFsn4mzDRydBNTnmVAid1qv2Q",
  "key6": "STaKgRcyouNKFC6ZzxavwLTwDZouz7DhkuamhAD83jyBgLcjCqn2eURhP12kL97CU9VstGuZy4g2qqAhvPUL6H2",
  "key7": "3Ry4tJ49RxM5P3JBWsAqsBBoMBzoivscmxmaEEK1zJZm8kGFwj9uJN778GgmpZFh5n4RDvP3rou4TNzHRX1z4KQ1",
  "key8": "56XcWMABEpv9A3qTPf1rYZoFeXNxWrfcaukfauu4bbmPiBWbqiSdjZ9ayjuBdJNWmC2toLhgNVJ54EchibcASQBk",
  "key9": "3Y6j92Y8xVswwG1Uew8JzHpXvfhzzNDMkdh1CFgvEXWHcPgbXX3cFE43kvhVRqyFFBLPN1FXQuZ6kEztLjLhHpY6",
  "key10": "56sd65ZST8iX8nXmZ8aBAQe9UTmNk2b6HGZwofRHqwf2NcLzW68aJQwy7WryPFyrPw7P3yX8mFnYShhsWUi7PKwb",
  "key11": "beubC4SWZ6izsNTikZoqU8MQNfdccM5juJnyxccDAkhTw5gGbLFoCAaCssuqaaXxtjseoXHijcGGymoJZzvZDKE",
  "key12": "3wQw5h1Jvzz1SFwQy3Np9jMSne3RtrvwKZHg6xeKCSg9X8d2FbPCUYsRyBzkiijkunmrqo4MTWkXXsL8Y4XM3WXu",
  "key13": "2KKPuTpXuBFtXLHqnGNYTfHyfFNmribQvyyfTyXvX6JXUvv7f1hNsEitqW9VSTf6HSEhvEjgHQ21aGr7144o952J",
  "key14": "5ubsh7StaqTrvCuRHRwnXDDzciYtY7KbUKvDHzF1kxpR4cNxZ8i1o7qmjG3GVWahWkCjyo3KkJmdpF8wbMPsLBsP",
  "key15": "3xQLjMAkHbokDxCzCZ1SW5oU6Fm31udT4SDjvbE6tCho7KmkDw8PgQRPmFRnf6vUU9MzN1uwbnn596YevWEvEAmb",
  "key16": "4ATVHm19YakMELxAqdRVgzbhw9dyCFyizvBSDZN1tpDgWbYUKbjGTZWVXbBkRTJzJRK76KUuMFsBXt4ZMX4gT9nG",
  "key17": "5UjbiXgNvDmBkDX66gn9V9Ro7MtsrRSY6tpikC7hbJpZEu3SFYGQiBVcA8i2HbtQmUFTgJVWwAH9QByfAMGMv5Jx",
  "key18": "5txUFmVzz1b2bTskmhapkarVpDGNQwnDZoBtmPtvrchHUm6JBa4VivfKLXYVjPfNBthvb2eswzyYp3tMJ3rcheXt",
  "key19": "4FLxZw8uMAwz5vQaWbLtgBsp9apqBmBWRaxE1xz4QetRFaGDKfaegisQJxbkBKkZVsj7iFmN8axAophEf5xBrchJ",
  "key20": "5NrapMR6zL5afKMCF5Ri2fQmxrJfcNMK4rdHg6V8UudgcYZDxcpCbEVvxC7QqVjNiV5uoBh43bPuX21bYZYtkrGG",
  "key21": "4wjycQ2NJEF6F7AKeZJgz4Y9YHXXuwDX4Mm6giU28CxdLm8K5Dn5X4tzuoZL2V3XM1nkMbHMH9gzL6JSMxYEMqmN",
  "key22": "3dNmsng6P9LhMTRfEe6TTFVsJUewMQU1AFgbMXJ5omtnYyHCn6Y72caCeANmbwTVYsp6CJcHUnyDGQ3jp85FGZTK",
  "key23": "3rKQfVHvfFDDBLss1VtMZhdDfsD8qiBXP91WbGY784RE5HqwN9nhva8LdDjR1nN8nVVX4TDtkni3nMsiR1WKdq3b",
  "key24": "37Q1JoEe8TT86kRqLF8n6robM8GYPX3L3yxBM8qT7sUvN6AhSqZE3jzWHJHQM2aguTfBKQM676H2euMRARf8bkm8",
  "key25": "5NerivV3GArNWNVkCgdoTcXSBQLYFg4ySXcMAQoQAjcPjZX36wvye6g8gMxkznPCBphj6Cr6cN2hEZ5bkn35FT3p",
  "key26": "EZhqUK2zHwja6HzzhUP49n6nsGrNpnEEPxrkujYVWZJhPaJKSPLTkafCXEKegPDV3fzEPQKHQ3dU21bHwNifyKq",
  "key27": "2x1CFUn4UiA4wh87remdYcXJUdExLcXgWkHMYo7RQhJ8utoZdF4zQjcc2aHe5XBE4zU4hLCmToTB6JXFXo1S4QLA"
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
