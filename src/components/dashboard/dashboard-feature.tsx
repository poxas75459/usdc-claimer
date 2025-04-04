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
    "3sjDwopDUazEQ9Q52wKu3vGDdBunZJW3nNi837L6CvcmbPeRQk5txabn77kANTKDWUs44gNhk4pMC6KNfoPj4wVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZUPR6ZPNFVJnVtFtXhffBqstaWtnrbmWjVRzYS34CCyHfSZaGvubFhSN7JcCEUcL2ueMrAEt5uyxcY5E4YGuGxJ",
  "key1": "4rH1Cfd1doBCJfGgXdigCyw4LkLQv4WCpCRPLQU3WJ1Tr8BzXLdEva2asSvazAYGN1hNar8gtveTWbwdu9RCwT9G",
  "key2": "2WabSYbp68hANkZUGSrptT33EWcSz5qtyi8YAExM4y3dn5iN1v3PQoi8KzY8aARjLJqGEJ96FTfkYFRj1FMwkzkT",
  "key3": "55A6UbFbTnKxSSwruJtkUw5tpyHmwAhEwj4TZkRwxGGEvMHeATnFf2KyvgYZ8sBKxGTwPbb1X7Qot1zsy9LoTUvZ",
  "key4": "3EBQNqoNatN8StHLqa6WnC6FoLZ4BmPAVtcMCEwN5EgPmyeCU4jdoHoCM9SC9n6sox24aWAKr8h522pJGNSZ5b9R",
  "key5": "HdH7KpcGzhhhvuFDJE33Chy3SVD4vF2BQm5fHodzs9P5JKwwj61X5sADVxGzaJT74YXFek9PZaZT8FWro3HqnjM",
  "key6": "YS3FgW9z1XHMV1q27ZNzZQtF5rKrnSaQvkHFoeeLFirqdpBaXG9DPu6HfAh84eWoUj7yg7pwSukfsXcaV3zCywT",
  "key7": "4YdT36ycH4YfCMXTxtUpjfWiMw4YPRFB5JE7yLFRhGF59GLMixtX4XTgpx9hv6EaNN2vc9EFE5YS5LBZECtajbNb",
  "key8": "2P8i3im2jS6MkdhEvKz9rERn4MzcxaJVgPMCaiCPRFTcouqcCtiB3fgJfDz2h1dxrf2zXorZDg39pzZi2gskLyLT",
  "key9": "5UJP8LqRfAAgKdbXiYf2iD4kAWSUDgY8sBVyQY2dtiGkZpYoEJW4y7eWGFY3vWBY4dGVZNyQQLihgFqp2gbJ9D3",
  "key10": "4mPGJfwrp7cY314xkP5rWRjBLHgrDVxqvEix9C1vTtVjnYLBuJ8uhWzEVuTozucuXRhSdu5ZwpnQC4N1wBxURT7v",
  "key11": "5uEGX294FgQ5tu66VC62fcqNUj4WvwitLzghGu4TPpWtFQDju3YMVQvRJmBhTHm52L369xq9KXNfmVLbp1cYJToQ",
  "key12": "3HXFyJejt4AB2bfgyG23mYEwhkaZSqvvJJF9SWvXyd9kqFwAN44ydyL8fJNUXuA6227mZZj2Ae5DogtVKarA2QBU",
  "key13": "2pChMSqhZvxcnQYtu8Pz9w3mP6MPg6NFreTsjxEijATpqgeDMVqknJA2A9yb9k1CxaskmfdBcyb8egT8JWtiC3hs",
  "key14": "ySwj1949xZkzNJnhneJ3U9gCZ35RK4o6nUWDRCjPVUezh3Z2sL7wnG514djbhia2jSDwafKgjzet7KZdEPJVt8i",
  "key15": "4ZwzrbGnSXs11qE96FuBRR5sVrYP3AStUhH4P1rapGKRuyTmeUAfkjuLsuf1mRfUrhV9gXxVu5GGG2Z6mE6skbki",
  "key16": "5gFm3RfFFvL9GzEvKcvEauQccB2zyvjatSxwbJz2XQzmgc247PygcoNRcFzDRwEt4aGA9gWgKGEN3CmnDZPKHUMB",
  "key17": "3RgXVD4UvYk76HE8JSdGCWFM2RbgRSswWyZ1hG9dy13SeAZBwHPVtFunDAV7wGkAcUv3r4c5kdtdysyZYS2VD6Zk",
  "key18": "5pSEutzQKDbsJeMpwvPRqeeo9uMUUw2nLs28NKnVCTtRZn5PBiFyipdTarmX7HBELeg7iq9M2Hhqy4V6k5sipadk",
  "key19": "YhHgnDAHbAGuBAJRXpg6cbggWCQQ2HfUkyxNZF1Avku5ZTWcR2DT9BgY5z3htZd1MVgv6PeVFVEDy3hqMTN2xEF",
  "key20": "2q4htmMDnyYtcfkb6UzRUN212iJ7N1RG2Jog3EytdEHBa33hBRaJ8rrW9dejFTM3rwF9BuhFbSFbcUVP5bksEyru",
  "key21": "5gKGQ3Z1Mgai1rjoGMe16RJx29vfYRQPdvb3h38Zswoqjmb6rYNfoVMT1vFDrKmmaZgvguXkAhFQUpcGnws1JopX",
  "key22": "3VGY6DvSTSsjYCAFYG1mASJBQVo47MgVdAhKwgMqb2PkBDBqZJGGkNTKCV5Mv9NP5G1gfLjFCMu39bh3s7q49v2a",
  "key23": "5FJ62CAs8PAg3ztAgnbsn9BRFUG6nu1inLDdraLRCB117QR13t8wjDSn77XPizvMhNL71Kk5eF6LN8s7k4KgjhtQ",
  "key24": "4ZRUUGcRxJcTuxE9VDiS8pz1949yDeMdEfSehDJMY9ZeLhyoZy2cJDWmx38LfcypZQqFtnv4RchvuxWrAtPwtMZu",
  "key25": "5g2Fba7vD6N17rqkZZeb6cfBwhehpecLK4kmBfZpi2w2u3ZwjRUqzJxBmBcb6upexz1DyZr99BJ2UwEhNhpoke12",
  "key26": "nAdk9gUsgieuXxUw9rdiHCPyzFGffasZ6qCQyu3vdezgkr81fcgheyHF8EhYxnYCraGRLv1K6uDr7woa29S7qZ5",
  "key27": "QFs3YxvXhpBwcRSF3zVSuMquugfENMrAW4iZNmXvFx4tAHfP1cEi7Kfch9sgE8DQ5cUHLUdUT4A3BmEoiZyY5wF",
  "key28": "4PAErXm6WomytHXrxXKdjLL6eZvA6UjWktNjz8rGHVGWb4qcKBartp9AXAQ13MhgKq4wcV6GuCA4sUKaSNPKNPz8",
  "key29": "4b3JxKXo2RgzgEeroRMg2frfxGpbKQYuyRoWmA32V1E7XCprLh8wbEMZFASbFruqwP9uwwoc127oDrDB4Wht4jSy",
  "key30": "2rbthXtPzMWmFG9y54HR2sAWHk8Xind46TEu2CBuFFvp7wjAsZgEY3PMEScCgWctLDfWXuY4ww4qSXKXosX1ZxN7",
  "key31": "4SZqUXzpDGa5iAKr4QaCUrGpZfv5yef3Kbek7j2YwyYSB2SKfcsCfySsNyEdJMzpSgX9vW9cAdKqua2nJAaSe88R"
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
