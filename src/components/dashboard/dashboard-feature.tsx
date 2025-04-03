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
    "8oQKpH2CNsfJcMGsdBpuc3xXkCdB4PmKxAt8KGSGJnUVuzRoQpoS4LqWhVtrswdDkUsDwC8SzHwzMVsC1sGeGHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pps56YYL5F4Cj7rdASZqM6vDy5Q1ZXMfvwUaGzRiYe6ejNeiQvxjW1FQr57SrkhZ13QgViWjiLPkoh65jPrY9so",
  "key1": "4gyYfQ5CY3JCQ8GYJPZyXwi9KwvXAcoZAHSsiZAendNsWi3QevAx7F5i8w5iqSArJD6pKNoMCa76bYnZuggLJvMc",
  "key2": "QX6KjaDqUw9R5ku6ezyVS1nm8gjqYQVg95QZX3wyQwL5Mtwy7YEvxnR48ePRXotFSgRq9ofoj46yX46nNeyhK1w",
  "key3": "2bXzbo1knnttMFxj5wJ7LQF34FsxQp6kYMGXovMqZAQ23Ns39NTfhbNEsxHkt88G8UCgHmsd2fWYXprjUFqYLzpY",
  "key4": "4zoqxrfzNqeCXFUfYk5vkKivApRcz2QF2gjjPcnahDjtgVqjFVoLfRZovpxC9CEibPWXdk5ykBjjkTjW33Lz9WRB",
  "key5": "kAbiDR8pFysfsJWRTkm8QNNNMQa4tbHBE2NRLctDrDiDieNXmW4rpbZEuZ6pnfkJtjyYA3tEdukyn8igwYtgSz7",
  "key6": "2sykk1GYuJoCxPRckonksheu6vNmwDZ2Yr5hwLEjsVJbpBoru1mWpzXLNhYC3Du8CuTnBx4wpiqUzVmRfxFwDorw",
  "key7": "2CZmy7urXkZNuzgMGNiUpsRHjp2ujgUMtSn6qyciYMQ5fVrLvPoMEXzZw6R56D3x8jaZiDtkxhPVZPhq5ZAscMZj",
  "key8": "55uvjFFgvr35DE12HxGvQWXEoXMXEJctQXn2yCUuiF5oWZVJaM2ZrwQDBmh84TBaADcgu2wxTkeRfkoEu1aSA7EP",
  "key9": "8QvEEfP9QkRrjog5a87aaw8jBYX1oHgzFaw5nXpyVbtU59pGb1TN4YPZKyXwwncoaUnnp43xGN4ShQZRdzSY9Tt",
  "key10": "57XzMX5NNvy9xeFUQFqe8fwAb7C8VQ8Wswtzw95cLpHPkxpyEzkkAEeQiJC7BXi8ULWHtSJyMEycBbcAMN6ZvhmP",
  "key11": "3dufTm4ap9fNSeB3uR6DxbfsqyuqZd7YPbTEpw1PagMWvioTqsnsVShrjzPA3XXZPcTfsA3pLaB4y4nEfyMTATH8",
  "key12": "21ZKnBNdGxwH1Q2gsJjAycMmeHf1htKev5ZqMnQJyMkxHgB6HMkory8wyGu2zJJwipJfDMKgeg2rvu4fAF8fCcJh",
  "key13": "41CGjNAikUG3wZZTQpoXK1ZyLCpaN1JUw8risoANY9aoyCUBqV6Jo1ik5bZr8hn56nJodFX25tDj6vXfYpxafT87",
  "key14": "3maxN7Qjz35siJnx2V6MrovU5Umo7PMWa7Ko6HyCpLFcdaU51GkJtAzU9fCUkScwYjh22VUfkNv9cBdspyspKUSQ",
  "key15": "5CyBfgrrXmkteoQZbugkXVYnoQ2zgFekrJForffVc9gjzoXwYFAHeTfd3pzhSymKEyPtYsQUcvqZ9pwVLQDfTRoG",
  "key16": "5Bys1GJYWxiGvNciSkoD3QGVk18E8AeqrDiFg8wJn5ADRMdqXsHuMv6EQGcpPBaaGhb6AHzYbC1rkZEKunjuusWX",
  "key17": "33UDmBTS6bPraryeVVFKsAgJHeLYkLcSer8a758sCYwt4KWJCa1L9NCZgyRZDHRSkCMQi9bL3ZEXq6EZpAXvYRyQ",
  "key18": "ekRhxrXjAifYwfwYzDCYteUEJkcddthLHm1JExgg4meaVELa1eQkf35Yx4ttF6XK7WfXoU5faDrw9qVKVmzH59J",
  "key19": "41tbBDqjbwZ7Q4g6JFPx2WYo9E3rs3KpXvnE8eSxBJenffx4zww4wq2syeTRSTWU841Ui3wchjgNBRpKGzFmQDxN",
  "key20": "2dqh3khyKp368yzFZrziNUatTTC5DJLnuL2rUv6cPukowR8gaf7TXQkVNaSbWL81G8JJPfiz6Pw1opp2YEa4jji6",
  "key21": "7Ybvh3Mxxc2VZtgdrcW5G2CMusSLa7NoweoTrKU3gdLwnu2FtpvjpcPuQ2xUAPZHFwqGgjcPy1qT94TtkGwipUm",
  "key22": "5q3ao9hp4uDDfTfNA93J5SdSjwXMyJLN77Zoz4SaXWV8znUmEXoeLMJQWa9KYAKZkjfC2x1fjGC4KhrX9oaToZv5",
  "key23": "amjZiSbieusAd1bU45JjNGyV1QF1RoMsinYmmdgzYje9Gh8BfnqAduVMcVASgfYrPU83xZ9CUKdZGNJhm9TwHDQ",
  "key24": "5i5NxUShEwfVHpdxY6mPFwTBPoG8nsqvqYTNiGdNwnfzHFxUHfUxikiGcJUqUJRXzY7haD1jgBsWsunyt5Sp56UU"
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
