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
    "28LoYXeUhehYcc9oksN83PCYGYwAjMeVxJMaaYkGmq4SAccbadsJbehej5GMymLu3mU5LTSjkqCXoY5hNq4DGPoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tj3ffm7HWSWkFfWTChdhbLJrr4A8YKBMcFhrMjyg3d5pDUaT9q6NPYrMUEdHQNf2fSPZtAHAH6Z896P6VHYWmaJ",
  "key1": "2wNWoFeWrBQKc1gbLvPTmnD2SafwmbuCNL1kADJYAEGc28LxCx4fQVoJhRjqzfgYiQuCEBHUumYjaK6DTM8y9VqE",
  "key2": "PKFaW8xsoPWLiGxfMkPBepy2ezU7oBXawRZSzczWpAV8XcSPCrVcmg38ck8EuouU1c1f4Y1qyoJzC6wir1uMJaT",
  "key3": "2ratzZuExhxt9YChy9219m3FN6oFttH9PgiGJMF8sKTBQXVJpAEHmJLAFfbRtB5Q16ALy78L7comYDK2XHyGk4Tj",
  "key4": "5qvbBF3Rp6gaAAG8k7hpLegGBFCHNzwrnywBjY2kGAmAHS9FTmvFkgYbP1QACQchJ3hVpdEHrhHHhm1zwezv14zj",
  "key5": "3rCk13AU6hfbCjxshVyvNpedLjKydVSed4aSqHuogiArkTZAZLxc7vHc45qKMPu2eoAz3Mko6CHgU35gu4KcwLqF",
  "key6": "2nKjSHjE44bfDqXyAQvQVXHL3q5gtHizuVPp61aXHtPCCwKUbmNtVohGXNZqTNYo9yp1wYEd3HAChJw6iDmEjeqA",
  "key7": "615DGFBT4i3nQV8XXWyrgcD3QwKGi1r5VKqB9SbJrefqiRLHTuE2NDRoCZDvzz2BU4u5Z3vj2SszzxHdZm9zqc8S",
  "key8": "zveitaob3tAZukpEai5wfYPv4EDSZTUKUL17YgtGCKSySQvfXGoaUkqnvwytbfvfLHH56ABQm1gqraqeiNxvUTu",
  "key9": "2hbjvN8tGJdsq94L6SQZ59ED7ha53QKp4L5oEYhVQjTMFHVunjZjbTQaiqemzf2QvG4zRaASfwWb8L1DjUbBpqPV",
  "key10": "3J3kAfbRLpcGJo8P8aMEhSvi1PpZqddr4qbBdPRWs5U6wJwhtNMgcGeeAHoabLS1xDKAKVedVyGJCV682aQHv9nC",
  "key11": "63y4dFz3LcKCbh1j6bcbw6JAaHczMthAhZ5sjhkgy5WoCGWiTN1aLFjx9GnAG5ZaznsCRikNkXUWxYZe8ERUbTBg",
  "key12": "45FfHKBxKkhrh8hz6kUvy292kMm4d1VP1KzTzBvYYkmPSkUMA2dab8ar9btjfJpYpJyjG7dwLYgh5D8ZsEWj3s7Z",
  "key13": "2o86zKFaQJRTjLe586k6wncFNyzrzQx917qwYzBZEzgu911Tt4p2DFRDWCeApZo9XFUPfAJ2y22rmQCZNfSExqS7",
  "key14": "4ja2rLqBN1PJLciiU4P1EEjzy5msttiDfGXzjVS17ZFVR3QFkQWqoqg1REurUWNAiKx3prY2Cjjs6vQrcah2fo1q",
  "key15": "3q2UB9UN88Fm7TBqKyNGVAkS72tAPgQ46PgCwh6WbBgPvF7eYCwiuStTQBU3BvW9P9ZncSmg3ucEKzHQAdWASFBa",
  "key16": "5NKcXrUfzw9nYuiCHJQ9abZgnTpg4zBiNcGv8Hdpew5vM3QSY3miXTcngg1kAychPuhN7LYZtSUfDgzFmdEnUsek",
  "key17": "4nmtRcjMRUw5rCamqi2CUKEFXKiZoYqEpHGu9kmtecHYJSzgZwMamiiw3au1VPe1AXRyXKxmps1BfvT7s7wahXzh",
  "key18": "33tbkfdRXnRfgz1z39zVFjsAYrizcHLQf7hdzYhTyAS5Ux4rfxuw95SwB2VAq9QEk6FBf25T8DS3q8qr6F95KjQX",
  "key19": "2xMisGUdA2doeQAYh4neD65RJnMxCjUTP3ydyDAh9k3Qx9ptWytVqR2fPwr3HVpS6rUBGDUkXS8y8Z6PBUEbMHHn",
  "key20": "344NxHwnyTCQviAQgPU5frNiM7xNQhXwqz2SexFBsBQ4kdDRnAC2ftn5aGPkRw2UhCmJ1JHtHWPg4cVcyS82HYxb",
  "key21": "2X4L19tTi3Dkpz96yVyRtbL6QKQKzsBx8tVuUHiXCWicKgf3SAt2ZKnDv2Uikywa4t8jVLz6rZJWqStua5sP88yq",
  "key22": "3sQwiAddDAZMyf8zMZgDgCsDf7odh8rYJwnFAWtynwnB3CSUZ6idHkzp9bxuPHoX6BuLFxqzSE1ds1Jn4cmaMrZL",
  "key23": "2F7UrHvRufZshtbk7rURNYDA5XqS619owHHk9hP1z6jbnHFiqymasM5tzgH3tHHgzmqqyW4ud4sc3cEy8exLHB7g",
  "key24": "45KMi5BB2BQVCcuQx6SawzW9XPHE51tzYFzeGeh7PAtUkKZQNDBxywEBf1TTKqNAeHpaHSxJNRwLKoTDETWrxzss"
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
