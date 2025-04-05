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
    "2VdrunsYT88jKdYQpF23LcojwqCcAcaF2ygGogEy6miABYjm6o6z7G3hKMkZf7ak5FnQ9ZtAsc3gNXv9MmyzfyMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xd2j9EUVLDPkS1PyP3cr8cS6yMtP6bb9HAaUNtEMPU4xEqpNfZpmHoCahUu1HR2AMeueCLJ1z5AJZ5MCB2C1JVa",
  "key1": "2YT3VjYoq1XPybZA3c5UeaDAjNygji9YVmvkKKdYzSw85HxLkS2SU7GFnQKvL5hV6z5t7uRD5V1qn3nJGxrYHG7P",
  "key2": "FtAL82ne22u91WsZfdhNYQLmniFWeWhZcUEU17NWwLsZvWpk3CeHrf6M3kyt7E5Wdgzp6GPLQeaLN5zJoN5Tv7q",
  "key3": "4d4uDtWNwVC95fdW9Br6CDxuPEZqFKy9arM21Kfyb46XBRW6iwqVxmDScLLAf5VQnBZkc5VzAMSdKbmZS7VTB7yy",
  "key4": "2KxbfYeqKKdDFHFSLGxvM1Bo1wNvsKmRhi1qNopBXgQhXwdbqMBUo7KcoZS1Uf5DDGNstcs2SgcU7stMDd92iziS",
  "key5": "5b8QJveXPG1NJ1cABswUSmiuPEDXVE7zXGiwkwrGUWn5avourGmokuKWN7jzfDmDXb4oeYTY7YszUrUx39DJ1W5Z",
  "key6": "4AHJn1V9vqNumGpSRoYAGaJg87d8Lcu8pP7uCfScQZcsxksmLRPy16rMkLBYAk5SjV4x8givA78gGkoMLtxCtjVN",
  "key7": "4iXW5cgNZi4sKNURbbT6ewUurJJaWiJKsGgCxMYXLUbteCnwy4PS7UHkKQgsrBFMzyk1w1heQkGG4BGxPcwFpvwZ",
  "key8": "558KG1iegYqJTsCbV8vohKgCTVHnXt7JXwF9fAFjzMpS9bXFP2p6VvwqGkVs4PjYq4LBHQBADjSamoAGQhW9Vief",
  "key9": "2CKjZQipMFbyrZwWNWX2rzAeffTyfnycfRDrxwdYCYJFvZEdRGdBWuV3d12GhwpXM9j4GrUJSxZv2RTt7ZmZv1KN",
  "key10": "3GKJxoNikuWsBcsYDpg38BrTndUGMFfdfZ6mJbs35CPXDRam3L36mcb7wBtZiyeBZzcwXQaxiowbRJMhY7vKyUQq",
  "key11": "ZJrNnDreukBUfQWXppT6JVNYwfrifiRDTkrrz9SyUmph33ZtXbiWDfHM6SK7Debk9sPYEdLhbfj2PGu8sN4dXZD",
  "key12": "5zW7QQu6776mWkYDiWcEXMuvcSb1feckTv26p1h4Ty2A6FWK28zEV7fFN6wA6kx779jMAtFzytZ9R1yv8JktwB5n",
  "key13": "J5zmGq8MGGrz1gkLqb4jWqyH8kMAyWvBABdVDKCi2LmUotRY5buVWoa9hddTK2TpY5GVBkeC5xb1XtHNH6Qj2Ub",
  "key14": "mk43826ETbx1jnt1fPmtq6UWURiZPzCWCiuHJSdgQ1aom3Ch3puaMifi8YBiGHsriVssK2E4LezgzYtecKxsHVN",
  "key15": "4XJBS9LV9d2TvnewAFyPXXbkqT1Hz1bmkySmLYxxq4ZeB8iPh8ruUt3An4VYYuDmWRGXxpUAYVJnxRuYi8cb4hLe",
  "key16": "66PWvT6Z2i4VCE9BYfywv94cNTTrcfKcJ8QtS3BJcZG4AnDKS9D7GTCEKXyEk62jMSCAhuytnPTmWfcmGGFjNN8Y",
  "key17": "GXsPV7KhpMW5GYWPxhFZ12iPv9syAxtP812MFq6kdZWpNBxWAEk7LGXjEC9ZhhqUDQtUZnZR8P2aMa6TSUaKUTZ",
  "key18": "4TYsV7YwUaJjra3vYavRnTQ945NHBuU9FyG4t26rGRwDbvXY37ZyTbYzhXWfqhVZtmjfG2uXmqmajxTKJ1qXQM25",
  "key19": "2CZ5CR7jx8snjpuLxw17nTcNdE3ZTScyxsGZCstersfZ65YcWEUug3p5Vjt1k7UJhMreYNJ5i8f7XmPeERq9y9M6",
  "key20": "FmWY3wu59RGRiuzyNp8ZVg6ahUEjhsVQRejAUzri7fcFjM1P3K6mK4hJBq21uFnRriEnoUXGunPj57uj7GEDfHx",
  "key21": "2Y7ekimfkY4SNdAKKJTdJQcWTNUWKwj5AtkqCy7rpr63joqLjpwtXX3cFS6FmXDPJuQg7Ck9XkXzJ6CwTXFi5vhj",
  "key22": "5HK7UhEYyP3yBV4eLQBygipyYxKWbRed96qm95ZgQEnDCaLywKLojre1zkeGQYh2hQEp8gBE9m6y8jet1yoWd8W6",
  "key23": "28QpzLBqM3K3mBj5cUQ9YjqjMVc819Yv4ePgZU4nq238RThEKEJ5SVG971qfyj5KCqQiE4qxjbXWBeVmqXTPYdgE",
  "key24": "pM4sAirw49M6WkuKRWTnMjUFLwvf7jNsSZJWRosmQaq2ockNWLPyhbxFPqHCWJ4ovg6M2ftNdU4idt7QNSN6JUT",
  "key25": "3WsU5QEBXyqp52pQM2qa1Ywt28Ukc7FKi69FfZ1YRWjzeEYQRst6wf9wDsa6mdFosGVJQhjS8oJoD34Qig2oGw8X",
  "key26": "4uHqZQ2REN4ovaz5MFr6H4cXRQ2kjw9aThByEkZsVgdnjhv7AXvLTHAGh1MJ3RiaCwjwB7a4EgqAvpRFvPJBaDp9",
  "key27": "2k2Nn4jMVRTdwNJifkFmMGTL7imaaHQH2Xzuv9XMqZePAGB9yXvWjo8Q1hZ5vms6rTvGRQgetye3H39NYpz1ykmv",
  "key28": "AK6vjBxWAd7QZPP2cZJ5YzXG1okUR82bwWuzfFRRZKfnXKSzVAZMbe68sLRZ9QfRpzL4WjREjXwjehydag2pHjK",
  "key29": "4bd1Ji1VgK53DH9NTrztb9P1CjPwqnBCiwtT7fhiGXG3KCqzfLnsQb6sDaZKk2KqV4aokxyjqcDJH23SHU1HgJEH",
  "key30": "4Dy5nfHnyBoDeLxib9JVcfeoWcMGnW4UBBPUr5fnda2Sbnqzhum8L2gAS9QZxaTnZm6vD9BvMDiY9rhdo8aNQ8Mn",
  "key31": "5BFAKL3VX28Uw3QGatkvywJQiykuqPviUUc9XYsXY4RZBgrEmHTH5E71D2eGoPjSKFvncK2CRTjbVtS757oJEZc2",
  "key32": "5eSQ48eze9Knvzm2JGsZJ8ZtFcvhWCUGD6DzZpDzyspcmTiEfuYV8h7paVzNorMDByVk3kHZhbtJHeCpPj6Q7Y1e",
  "key33": "2X8xMCnQ2AxJXPfXEFoofshJgsigNWbpkUJgF2K9GgNHWz6Hzk3tV7nnv648rvEmjpwQtcnYRj2huj2q7R5GWsmb",
  "key34": "3YULJs6Fu45Ain4XmVHR1gt2GB9h3saQoQp9cYSKCAuqdzPptMZB4VSsT7WLiRzYHZ7GLMAKaCnEBmbbioesk2iK"
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
