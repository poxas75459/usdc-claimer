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
    "31KRvpQQyBCwuk1zQtJHrG8cjMjC8TS994rUV2vq9Mh5ZRHWMm33R2r61vTATifwehYMpwRXeEQKe8zCaGyMycvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dem3cGjW5tNhQL1EVMQ74x1uTzJG8xbj9pmDEYEia8Ru6ars1Cq8MDMSDGCqGdvtZMLmm9soAToKH6v4hjfp4PX",
  "key1": "8bAYgtfDJQdzK9j8hF8C3hxi1U9TohNDTg8X6EN3d6aXT6ccGEXfU1rpqUjn6DFQsjYG8Wh9aHZTVt9Kr7fYcxJ",
  "key2": "2GNKJTaV8LjppK8DLKCyv3sXQ7zXqfDSfdEwyB9fwYg9hALRzbeTuC1kW4KuzybbzZw6sATWumxxJvkPt1yCSPZh",
  "key3": "5sxPcL4nQn1cw68R3HML2fNDF1LELYDG7eADHK6hNJ5dnA92bqyQeieHDfGn7mqvTYSGbx6LwzaRjuKYGV4EnydF",
  "key4": "461JQbTDhL5NZQqj6WThyPFwoAPpetjH3XWrBpwuYSSLe5mvsW56NwR7uDoE2YD7QX8PBPDf4449BVBxjArR45vU",
  "key5": "4qvwCRcTUV3T4FxXc6ACi4Y3yjvJXYKHFN8xv46xgVA6imRX6Wp4nVstydS6hcvndmXgo7HXYYM8XjfRZLZ7pqus",
  "key6": "3NRp1WKAw5sZZnkjnWqUQuEdtjPuXxQWM7cJoiYhvjQMGJvAsf7LH3YnnC6nQyWsn24fQGizHcArutJokHDJz2Vo",
  "key7": "63HCRgoN7m2KA3uqLnFvVazjpfCs7J2Gb5WwP5NV36VnateheRw2GbzxiH4WbrriPWDqhD8bDPL1WfARMs69n45",
  "key8": "4BbDR5W3XmYQpKrhzYqbmvA43Bzbi8fd1Y2D1hCmPxhTxzso592SaDu55MeV5Uzv1QzxPidsp9aXzJgLU7sncZJ",
  "key9": "HvxLYQWje6ZrsGroYyB1agzMBa61Zi1BcmumfiLjKGHGhwrduKXR2eBehmnbi8bPn6fKntj5JSWi2d3eUNjgJAC",
  "key10": "T8CEXSXzfkoH9od1ekYdWAFhwxgV1CHmzrx6aitoYSHgen5aHMxWygh1ryCxZUu5KD5LayPHqaRQTFVrBkS8s8x",
  "key11": "43ecgNaJLR4bBFVcFtbyKHjPX2vQRHSxyddopriiF2xxaEXCSHEAqF1GL17yNzxgutuLAxPevpAU9dbZNt9MDd3R",
  "key12": "6uQNr8faKrurvzQo2pYLQ7J2iU326y176cxhHieXRK4TKSU3MZVqwjv8HTAXyxE7TH9ubtzeQCYSfPJYzrr4uzU",
  "key13": "3e2kuZsrbForipCr5BdEZL9HgnJFyttAuV4Dg3LT9ULEGiF1DKNHYxFktDzXeSYKnSftqonKxrXBP7EDxpCZAUMN",
  "key14": "3GVVtY5GDV9Zoo7Qz4Kr4p81Rpfje1wgCVhNqcArTqbys3PCmiLFFxwNogzLQ8Shz7N36QT3SE1jQvDs3TP1jZbr",
  "key15": "zxXTYxV9gB7bRMQBa7pRKXL7CkyJqinuUZHQn1enL5xyaLPqncZwL781QhZcf9YqNcqeS1SL6pPrmgDAQqX12L8",
  "key16": "3qWfjgKYw6FVttDssYGe7xHFbn4b3s9zJxHcPMjBdVPAWWC9WsR9Ea9f1hciX1Zvny1VF6XAyht2YgWkBfaoXFPi",
  "key17": "3Ymvbeh6ffvxpX7YJr7bsxbhQtJ28CWwfHGqAQbPc1JD5JrvBfer7FMzRoxxhXuERZ974vNunZ54pwjxDH8ibWV4",
  "key18": "3CMVWgfb15Z6py77cseDdg2chLoRYC2Ytf5BL5vcP4k7fHBZ3ByVq4LaLAm3TehBesHhddL54hYG6Suu2BYsCQ8v",
  "key19": "4qksqvnea7bjHHTvvRwgKAP2QTKQ1uK4c2ca3KXV9ACRgxAtiL3jGSAU2t5zGkCBPRUgTcmemBZP76ffH6zVn3BH",
  "key20": "2CeeTrBZfhDZcmmCGvSZxaHgBEZE5ekpGr87pLrE6xQbCgA2WpcrWiHvCjbWJ2qMqDYs6qt1P6zGoe5cvWqHy3BJ",
  "key21": "4MwRJMJMGZagmGetRWP5zP3JPeiEbjnsDCCo2zaqpeSBik9z7wzTe168vGhYo6T1xCSyxADKsGXRD7st5Tf9L5na",
  "key22": "3cSCnT318smtXU1E4mjXUBToDJyJevej9h6tDj4hgmT22pnkL3iQhJguMyqL8WZPRyPzPwoZP1Pan7ZLmF32qJeG",
  "key23": "2ZndCC7utufcq9DAhaxL78KptyxMwTgEN7NWkBzvcKtFWYfUvLQas9agbx4CgLCikw6MmHkAsSDgm6rLc7rQEmr1",
  "key24": "5yU5tU53aKpZPG65CpaXhxqJvCVm1Seo7SXZR49LEoy7fSKGinuUzHZ7qMuJYAVNpHEZWK2VZHUEnAQeRmDn6cBT",
  "key25": "2QoPLFXuxWpx5DHGR7khJdd2gMTCLH1vSt7ob1VmQ3TdmBgtyZCs2ae6F3HUw4gWDyB2uusWJC7vzCNRo8nuGRAe",
  "key26": "TgD1WQSodAxPYeVSA2YBaF7tpu4cnXcyxdhwDBD1m7t7LPZQmzMNnJvmWQVjTNqk51QBkbzNCiG2XwyzkoUxEQQ",
  "key27": "4sx3nEx7riYhUKJEkPxyQs3BTER596Dt2mPafxjPQ78Y3iZiMYVdTNK1YNu2vCt2os3fuugyDAUJKgL9XDKfxqb1",
  "key28": "4HYCRhe3FU6HeYYQMFWmgKVjCi8J3aNYUqPZbqyFwewBXKWW2Vzrak21JAk9eushbX2whh5PkDHTyfEo6HiDCJ8w",
  "key29": "aPVWJVNh2N48s9UYx7SpxxtYQJcwa5ZaK8XfwFnpd1G4dWbYjYKFTSbogQfZiDbntuKjUPiF3vQYFfVjzMUbnx6",
  "key30": "4SsS4ZpFYiknRjbpP5nKv2o4igKMgH6gks6Prq3hK7UVE7fF9pNoh75p4hKNnz1VEdFPTfxpL7ouxZLKiAa5HgUp",
  "key31": "3hgNCgmpUQxeK5QARKF48eUGwgZbWsLRnEgXZU6X9jpYxrdZMiV3mv5Uf1BW4354cYGQVzpXAk1JpX15fx64tThS",
  "key32": "66HKB7PZdEUmura8sBEV5d3WuTBnp7qVNUqfiEF2XgPcXH1A9HMTMiYAJpHKbEiAfBfQpKcnd7YE4dJjsGwSj6R5",
  "key33": "3gcqxy95nQaVwDRD5CeYdRE3GDYsuMwiHzVbgFJZaumBes5NZDoymJEo9kjLKSf7H7c9qB8Sw66xAGEoMAYmLP7p",
  "key34": "4doXuk1pjuDhfQqyuLJdxk14LoyH9bi4tfgMSa4uScfoW2JTn7eEjdCLQMrAUSGcZTzpp4sYC9xvQHc4hKmuk8tA",
  "key35": "3Pxp6JkKXhBDF4xMHJQ1ThcSB8wPd1GSbgiow7Syt4oX5Nu4Fzrjrgx6479WkcVZF6RyXi3NDcJYkvC1k72Pwyn8",
  "key36": "2C4fGxkCXrDX3anJLreH8hGpgKfDevjQwRYo81K38gHeKFPfBvZ9y1NZNegS7aSL7qAFPdZhYySQ9S1ymaKB2N7",
  "key37": "poQJ8p3DDT92kmFYoezPn6t4dkbzhGbH2ZN3bieQpaXynSgfBy1GE6SPGyKpraBZtaMT45EbQn4eUc3UgDaVWWa"
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
