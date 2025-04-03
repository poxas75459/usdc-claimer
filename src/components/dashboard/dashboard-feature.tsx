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
    "2GJDtueyxGrvVuobURbjG27v6GaUqgmzZLjo9LehQS959sdAmKRY8ZDZXtrqie6WbKTB5kbUD1JhEdUuVBDANH7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o9c88CP5V1GC1RQzA7q8uujvUc9Azww8aKZaUKCPNrUkA6uMRZfHUSNDMtG5kKmPQQbWkTisaDDkT51cEZBQfga",
  "key1": "5bbbP1JPqPkfNpDf3CUJodmXPTA8j3yw6N7cypvyPCBuh4ADXXKXr873HRfyQ2FzVb3njGCpPDMh8ANj3W7P8xSV",
  "key2": "3aF3ZzHutm5vZeas1fjckkNh3RJgyXBUrPkSvZkZQzxWRuqrMPVzghRo5fPczdWqziqnFF9LHQSc4GPw9sCf1Bez",
  "key3": "xAFRh218raSDxKDngYpd8wdWQh5UFMj4YoLr9vQyVzN6Zq7PeY1bMmFcjEWjaV74YxywehkT3W1PormzyAYRWhm",
  "key4": "4qKo9a9MxYSCJwZucxvPihd2T9eoZSGNKWFkWYHU7Pi2FnJGgHbq7iWffuywsPCpfwA9FVdvEMR3emiWRksHGvCT",
  "key5": "2zrzSzpNsKvHrJyiEZq3vie3xyuNhKmTRc2tgDEm7SG9gg5WSnLgPoMi2imr1jqNEph9Ymt46THjZASgz6WkvSCB",
  "key6": "5LRbpww1iE9BTbm3HMY3svphQNivjkqUFZZa6vyicTLUBVJEtr2RhmbJ5hFFb36Ah2RyAfbq6doHB8wjidnVKsJy",
  "key7": "2LybQrvVVkSMCm35VeoJCu6nEbAWyAsYorXsd8rdK8egEkuq1tNar5s2QQ7PEU6xNJs1qc8W2q4jJ9bDLwSohR72",
  "key8": "34uru8vvMCoYjrgUARuf3fxzMiTEwa1eEF4pNjyc5mMYsfHKWTw4dnt25gUAp14nAzV12dWJgcoywjoCjSer6Wzc",
  "key9": "4DQjothdeeBwkwigAf8faFSWgmvEGvAor1P1dW3mJa5v9JpiUByMUkV6zCdyjmeqbFRt31Yk7Lm3bAUyY2Ad4MNq",
  "key10": "2Sx9jBPD7MCk98yuQmAbe8zYnQhCBM39YAVQ8k57CeLG8qKVMfUbahQTq2QjsiiWQhrXUW4MBxg7H91NCcXZsVj5",
  "key11": "rypHU5t6VvpTXT1wrY5dCwYvDo6YjuPMtKLFqQ2JsoT9Ljsnj1ptsL8EwTfLdyVrBCofTcRbg5qQBMR46faowL5",
  "key12": "4pZDQJNVeNhwTPsEH8H9jkP9t47kZ8cxa37EYrp11kqpU9zQYYbJAXorGQ5fTKDHeXEpUPUDcZ5E8EtmUHvp7q4d",
  "key13": "4CqGj2ieeH3XfhLjQUf8iVfZpdHJKa2tNn17prWR5QWtXwiqoKtX2QKMKo5xqfhjDTNYzDxfdoPM9KtgoveuJKon",
  "key14": "bSSibEgWTCYmnsg6JyWgZqbYNHjrtQvFv9TEvtH7eAoLXbaxu9gCSySEMm92QePpiHG5suEtfrjP4JrhkzEWwoE",
  "key15": "4iW3wq2LVYgKs3Y5wzmrfiUdmBRPo5ox71C5u9tVEBGQvdGZsL2RWYVvK3X9tj5CZs3qd5QRCsZJBVMLTnXaZUyE",
  "key16": "121ZPBXPfgiK6Cs72AsZmpeNqTYLcprTRwMqgMYFgBhyHVTdcxgQsUbPkq9vzEXPH2Uqtjgv2jQWP2RR67zzGvxo",
  "key17": "3upjvrRUchurJ3WsHV9xhkLNW4S7ash6FbsCiqFm7RC6j1LWyis25X6SpxKAjygnaqLrHfPvBwYrMWFTy8yRWGSG",
  "key18": "48JQ2jwQeFca3jsoUB1TknSLgiwRUFa3au7CKLmwh8SbqPnsrNgBPt8hjd6iwrtNwsK9Y5oNvuQS3E8NVmetDePd",
  "key19": "47jvsUVNx842FzgxtRS9xZ7XN64Qu9rkwxL1wbJCqMJe9tvgicZv1AVatWAS2mMDEZQt9SxD57g7yhBvCWB5Hep6",
  "key20": "4Gw8yAGU3uMZbucLjKG3NfEbyVvdRYd9Vg3KaCoPdAveoxjwrYgxLzbwHjZQFsbz6J8By9ormckKzKndYwWnJwRx",
  "key21": "5rAnSRFbZCiBvzWCx23F95BDn4Wn1nAEXoqJ56jtZt1aLgjtAAuMdh92Kcxeq5ULdcD38JGLKRVmy2KNjKePXYUe",
  "key22": "3j2Xs6oxLdXoDgL2CZsRQijNWPHmxh7iVLWppC4Zufy9tkszrJpeBqc9iTcu1b3HRv5WUmwncM5yezQgXUNbMn4Q",
  "key23": "38oeu8QXWjJMaJHtHJnQpwu3oTj7y5qrWguyuaPZr1DUHJEAuB66sW3q6wM2i6bst4Agpif7CVveuRYLsw8Zko8C",
  "key24": "52EZn2dBcfgb4ZgFDTPVuFDoeQH2rZmphbn4MexsaDVgNZfUPMNDRzwv2quBKqyAeW22ajftgF1joy9VvGA3HCGe",
  "key25": "3F32HWYdhvbBidUaQSY6rjCKrLgriC2sKTHMCzpDnZWGVfzZURcr7YS9dqiueWBiVvRM9EBbZ2Lw7Gi6RJL7m6bi",
  "key26": "3pnsAuzcnBPeykewcLzU5cJSV5JAn9xPPrR5Jat1nrN3Xd7oZvdzbcziCwwC7Zj3Tso8BLUWCKYFSb7fs8Fg8aXA",
  "key27": "5hEdZBbh6PeyWUgLwGCJmbfMoXVJh57vSZzmtfnDb4D9Mni7Y6X8JNpdMs5JKRQDjhQ34tvKzhNpLJ5BLk2bWd5v",
  "key28": "k7bdcf92kY3oStvr5RT6mgxn1XEFRRg5xpPtYMeSVZTMjLm1g2YTg1QU6rbFNjemM2aaFHZjNgP9jJyPgvqUmmV",
  "key29": "3i5HH4EsW5uBomCvczjhEtA1a7sJKtWZ2jTC3UNAKqUTqC5v3zPYY6RC1phmzLS5wH7DeNkqN8EbWGkLQKwvFvQo",
  "key30": "3LFUXbK2aP4ibCDYm4Qcx8jB6oQy5uLrRSeqR2Kq3p4ejqPnHzBtY4diTxBaka8G4JUAEhJm2TTesRc9U8NiJU22",
  "key31": "4sAAigV7s6TUuXc1nPiNMEsuFHVrZzjWjyBg2Fv4fxxzns1ZkgcEV6KNjp954BPSnAjWvUzLiVcdNSghAtJidwHC",
  "key32": "5LNycyQz6yi9rAdFjctVcWTxjZmdtxa9NsJ9VVH8iHXZHcoqsiTifzdsenfZWmbDXYymFH2QGWc4WWF353ox6tC5",
  "key33": "2i2SfyAdqaTaqCeEYzF7YghCfaJuTKiCbvuW16wkpPMHccDWgiNWsqJoryUWfA4vyAURBFekp4ndj8X54YWt6d9T",
  "key34": "39AQztsY71kfGt3HpXzFSdLx2BPgXGQ7Um37755WHv5VagADAyARzisjtB4zP711tYrEjGy8LLxLTKo2Cv3SWALK",
  "key35": "9rtMkhG7RSzZtAsk232SkhGauD5CTceykzkXum5xrjQ4zVBougTrsJ6WyUz5tAVczFx4iTerudwtjQ21QNmaEyu",
  "key36": "AphvzLBdu4hXKNsmUC9Fa2PBhEkiyExpVi6WgyHXbkAoMJg1jdvtmNUhoHN757DFH2hJM8CHJPHNW9oAGcZEASJ",
  "key37": "61RgyxgrfZUQHZFpCpub63NRhQzkLz2pPXSwboCifja5Skzm84ZUCrWMcC9R1zqhfSks2DtXMjMF3xuvEAYjqLQQ",
  "key38": "4YWzvkbFrLXc6dvPq1KnoxJrUopv74YbgEcj8XWX3KPf86dnHhk79m5xCHu5mCJwvxv3Aq2aPKBhZv4qiddr4n4X",
  "key39": "4kX7VbeS4NYBjo2CPg7GMUs1BGoSxxzLCNqTNzeXabug3cxX9gZTbkKDM1mhEZnaeuKgGB5W1N6Gp7K9KEoRvMKw",
  "key40": "FyPYFwNHxxUQdbMtumT813aCMYBkh3PmhrQGqMTtiUTHooL5LzChT3Qd3b6ZWvj6gUghNooxPzYPrJeYqWganVa",
  "key41": "5cEFf3bdzhkgLowssLy4KYPzMQb4bgWH6Bn6a75NiyNjG4f8bBcb2a4qKsN2H11PxkxW7ZNnxvLfVNpE8HBsGYWY",
  "key42": "2QYXxghgi35Y6Uff8BP2yDteXYJCGL6VDp1YodEbCz8NCwfS8pVFVwvXePdHVShg9n9ShrAGyj3wjcX5DwaZ1ftD"
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
