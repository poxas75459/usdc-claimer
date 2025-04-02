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
    "2LHYPPk6Q8z8Xo85AFabXE2L6GDfhtCGivW29151QyRyPiFWY34RqUtPSki6YxZE1wuUmnVdvBo3CQBY1YrSp35i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xs2WVizdpgcctTRwpkqKbTtLPBL9i9DCqCZzVSY6uRW6SQXp77jSgFEuazrXA4xRVsCfCoSvEc1ZoCBPn4NLSND",
  "key1": "4DV3Nw1kJbEYaX665QdzKhqXLd2xN8jVEakdKegfFvY1wG6CJE4Cd6fK589pqZTwbfK8Fq9yWwHqJRaDbQ2T9mhQ",
  "key2": "3WqmVmf6rqiADiR1rNkz7AiDQtE9yWAN3KXdcrQLBXsnhcRGjzgSmJNb4EMC8VfZaoLZ1mfHqL1xnWz2XgYMPDzr",
  "key3": "2xqCUfBd2y9jBv3KrRP6zXHfcPTXgsz85nGQ4aNq5qSuWDPFK1qEsNYHTwpvvy5ChiUCBTiegC9F9p9syqjNYovf",
  "key4": "3fnYZ8QdnJFPnFTrsormP6ezyYvF1wPxRAXjcJ6s4pXvtngkg2nkHLCFh74vvdabW1RpPmJD7rGS5Hr59NCHV9eU",
  "key5": "AmLa1cNTFypp71tbxhuKMr9n5VVqzToS666Y4Dn6dogBPVXLCTfhpjyFJeMjrjPWnUhymKxXhb7e1NsMogbYNpX",
  "key6": "3qYqv4QmBvux23uQP9e2QUXmtZMQ2QtvQ9KgXiZZQJ56a2cQMWFmFxKonNmw1tFECFnt3vuExkoKNrF9xmkWpBvs",
  "key7": "42VZ5kyHdk1tzCLUpLx9maHymd1jP1Bftxc6yyAJjdAt6YP8EbvFjjoBatK1cHhp7G4KiZQY59HHCgLysaaEgvdg",
  "key8": "xSmu4FdebicE9KnUbSZRofZ9uX2xFTXJDZivZhZbsjwJfuivq9FVtQqAgDGUiW3nF9iuVm8nVqzxDdwztNcvBso",
  "key9": "4mKjzhxbq3DEkiW6SexrAtHo6v5kGXhS45MyhjXUtRzgFv8nzgZ98HvjtBd1qhC8KV3y3xvkyf8QrqGbwSKhaenz",
  "key10": "3FAtaQqsjFxbuZkqmrk3is1cHSubBbeRTA2yk6cAocH6j2y71qPsjZPi2B5dkdE5vGXZXVR7gTUhngNLL4HA7qw",
  "key11": "5AF6haKjf92CFpQX6zr6p5VtzZrUJEcz56BNyJ8SGBV3FfFj4PsqfYnMeikr1Z1tBdP5Lo2bP7oKd9zZig6CqcFm",
  "key12": "2xdYNA9wYC3JBfpRVKfabL7oT48xYZn3z62uiqLU2gpu7eNPA5VHupfG78ut5G2bTcQtjoAK9Hdk7AyvwS7rH4ss",
  "key13": "gG2dmUpjNTh8SdWXK1x3Hk1WgvwwgTQJ9nZ18cYfywvvj83cUqwo8ZfJBmJpsSXXdD6eASCdu2pnCvP4EDprYJT",
  "key14": "2y1LrCCBpz4orSJbTZ8VCeXxE6bN1jLirJnd58CTAqXXqxQnUwoiEfLRHrg3qBPMFj5zxEqqoxrjhf2GdBvoPvv9",
  "key15": "2WUtbiyo9T2oHMWVedbyp3ZUS3Smv1Q3JTbmrg1BVpp1iXki1dWkC7DZ4hVjGCURKV8EV9j4qyLPeGrSGr7VGUSC",
  "key16": "TH3idc69qRrv9BEbCmN8xyyyEgSu2QdMMwsBySs9HbV64oDUsfLGUgaibQavBQyMYWfE1Bi2TjYoq6Jyi5AKedq",
  "key17": "4zWgXHa8g6H82ZpsyGHyMKeRGmqheJj2tc9vD49LW8Vcggeh22XkowkjtHW1jebPJBPRGYptCESXfAZrkMA829aa",
  "key18": "5Ees3fhNvrXpizT9UnMNYB1CZ5dXxDziybaNtbu5wZQQE9TXXozuxDpfcqPYnEq7aHpMuU4qrTcP8xGd58nQBjzx",
  "key19": "55TZ6NUv8Xfc2kbrDD1rP9V8od667JRRrUMzt8LPRQqCVTSGUNEZp7ugx9nFv8tEgUtG9UYzUPxsoy8dAJ7Mhoyo",
  "key20": "3N8hdqnu2o59i4TXz7iXwUbyiPpRmvrJhXa6kbjVX3S8GFinFC8WGCAzizcJivZvzv6r5ufbqZ9iBGncVHgJ8vdP",
  "key21": "3MAQ4Sc6YJMDHiDT8CZipAoBYjcYhLU35MzJ85LNH8vu4MgDVW2Fr7NrqD3o4KQpS6MVHv1b3CTKJ522JrQHEHqp",
  "key22": "3cJm4E9HfGV1p7ZugMwJbMdFjk7ks8hVMmxU6AQgPJnkRLhfstci3Pqa6j4pnyw3zK9jEYy6XpwMPU2b1pcEhr4H",
  "key23": "avx9h41ePXFgWS63y9dPnWroNWyDA84SYeUHe2gUKo7sJvGbLDLfc75w7txosaqKwf9HXYBt1L38v5Y8s4ce7ke",
  "key24": "2FExo7zNZCcHCdhmp3vXiisLGXyvnoMQu6RXhsPsVfoxghx4KUqT1ZFkx8DCY7sB6We8NEMQTDgHM9GEjJLB7fqu"
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
