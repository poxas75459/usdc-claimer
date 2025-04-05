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
    "5ZD1jUAwqsURMrZiT2MmZRuuAxQNsJzvDvWhviLMrp8uQ4h9FsYoQvEZdQ7oD2owdqNrr2NQkVsgxVyKgghuDPRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZVdp5nB46X7dq46d83vVDeCXmSE3K2Hx1Qag2c5q7xQ9puJdTrYQdcaHAEQm6KGLNEuuJb6NfFuh9CkEDw1SsuU",
  "key1": "4nGgd6Ety4A3jYQHNbW5YiwBH1f6dtsthDTiyptaR18Qph9prjQkj9cdaJSf3ai4xMWsCe7VLbctVDu6Jr9cdRo9",
  "key2": "3QTvT68svGxheMD9c8n7BKw6UW5cBjPT9QyUAynhnVGxf6GG68Fjs2MEW4LeAH7LqvodFBUA6645tjTBQSF9TZPB",
  "key3": "P3je2WZcsbKt3Ybbx2xCR27nV5t4Zwc14jqpSrVSh5WpHP1865GB6uqMoMcmcjra4Npke196Tq5dV4N96SEyaov",
  "key4": "4gDJFN3Z2JDeVW2WxxcACSJXNsona24Hg7ZvULCbX5ZpeCPSgKyFTdap8DuE914kqufYg7wEkRhgLj4Uz2q31hPy",
  "key5": "49P5pfGk5CrdSsvUV9qXYcKmnXjNGNtw4QTvYPdrad2fhUHm6oGjhXfqJpbshD4Le55QaCgicZeMLGYYksUz3HMz",
  "key6": "5Qdm45FQd4WqcRGwgiKC6mANPAExBsHbRS7wpwphRBTQWe7eXJohkYFQoh6mmtoV4XngyLUsBMLzYZDcFwWLVxiz",
  "key7": "3GgmAybjtBNHaF5nFQk7jzzNj6vN9G5fsDEJt5Ew8HqiAhs8YY7n9JqG3UHVrwsETxmo8CYHvcciZXotaFkHwMLi",
  "key8": "4nCcRYT3LQRLBu7X3tEp8RbHLHHJxqm2PJSZYm4VyrNNMJgAgSMotzFNHwD9aZB2T64e62DP9WDELB9QPnaZ6uo1",
  "key9": "2MS3cEdTaEGZDmP3hqKQ5Y3nGtoS9snEhKJzYULZyYMG8FtHxUWbDS6msdvHi9DNze7g4Uys33dTsdkxYTzxvumt",
  "key10": "62LeLRDF6Z2tyaSuZxjCR2uEnug5wryWEqoJxRyJGVR4JJ4pGicBfiYRSUCQC8QNqtiUiJCLoA2ELTECMDbiNyzC",
  "key11": "4EsFV71g9LcNJniY1rrNcFa8kbQ2iJXoKnCL9ppFNLAfcqFpdpbuaDVqAcan4ARNKcC56gVc5G6HBEJvyt7RqAgt",
  "key12": "66Lkfi1yGVCtsyE1vz7KDmHcprTdHHMJAeASifppp36Jg3qxwCuYNHE1L8tt34ryTQZPtLuZvH8XcyxZrTsK7naD",
  "key13": "8VvaZgu2izQevm2k6iJWNkSHY1u9uh9b2N9Frf1NVe6ojz2rsNY1Zv6k4U4P6Xvvh1KW1XqWvHndAwhhqxguyuf",
  "key14": "64Y7m5G3JbmLu1trxTaf3JKyJ8CpaeeujpoZRajZqTczkkpitxH1ZmWoDzxAxMTEjh6yDYjGy8nDknGkfLb7of52",
  "key15": "34SyvpUMTgGMmApgFrb2ZHhET2VepigGedSLNSASyGxPBLfaCmCcGYuFZjcYPg6ZiHffJCu5FwMKvg4f1sQV5p93",
  "key16": "62y1xBoKZMb3TwzrNcF65AnCMS26hr3VWurQn2oHbK6iuravnCubMa1yfYVpenRdvpGNuYCyK3p96mw1SfmWKYp9",
  "key17": "2ynCRYzfB8jf9DMNppMpXGMqz6tVv9Cc8e1y4VpXfqLzekNvMdwS3QUs9Cy6HKC35imLu1HLLT4jRjyNCsahfxLP",
  "key18": "TmswEpvmg67DQ4wxUFSuyhhBnV1iJYsppzwTExWTWuCZDrpWfxNqU9Jgog9ZLzDnXfQvxMdpTRtc3xFyETiVJbo",
  "key19": "4yKEs5pkkH2nPDf8TCwEXAm1L5EzfKrJewvhHJcKoa9HFdwsjso2WhMdiFKbEgYM3s6VDNzsb37bjRE8cqa7NZnn",
  "key20": "3HPFn5KuaCEXVk2cpqPH9DuPRyrKEJrTVQgyD935LZtNx8g1nEAh6yKBME9keeN4LSV7W8Zvo7vu1iXPpFr2QXJB",
  "key21": "H3wRN5w831NJSSZsX93aric5wJFtaRuw1BKLavvyNzSoi3EuKBsBWXX3kaztZp1phLzkqbsm15WCAfsQXm9fVRh",
  "key22": "26spStcUQtKXWomRJHMLvCopYwV1Sbt8xmBETFC3UJN1utgDdwyZvUB3o3rq4bz1wGxsL2GGLX7YGLEXM7QyH6o6",
  "key23": "2wxYZv9TURwx4E1mWDPf4259Z7N1mv66pm17samLFku8G2nz9wN6hd8dKJMZoR7GRywZenPkGwxpvHHNSYdApPU4",
  "key24": "3z4auGJC8NB1vmNA3jhUeh2dKKSrMAg5qZm7mYwmKEwb8A4vMjUiJ7MNvq44thp7W1ppCqcHK8JWPgPRBpuYgznH",
  "key25": "4c5DUXYaQBXekZ5saRdsUWhArhuRfJokK4xhLLcPDCGZSMiBjkec5srcomze4dPrc5YQHigRRGy3omR29EtKUqZd",
  "key26": "T6hwX3hJmNNknTWdbEdHhSCkcBBbVZSvFpMFUzEjVtS3RdFwH9J5GXPAfgsnUFadqzKnps5hGhW697iPrMtFZyF",
  "key27": "dgNz1osCif3ERL2MG6jZm7pf7VA7jbGkspAHxBZ2Zn7T3Bv8dpeDN3KZYDhGGSYkim6eK5hzfXqhDbHGfyLeFt1",
  "key28": "2XJby4L93SXbz31462XNuhnVPVaHiWTYu2EL4QA32zoF974ub7K89gynuQ3jKLeL6FogkfSkWPwmxW2DBKN2FW15"
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
