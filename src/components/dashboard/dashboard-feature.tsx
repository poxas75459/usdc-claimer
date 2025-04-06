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
    "61UKUpkWGKhUKTS2c3zPvh6gRzX9k36FPwAKxmVi5SqCA2siKJoyjTSGbTi5HfssmeujzLogdBK77mEuijSdbKtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CJyz1Cd3azS8HExnYesUdJ927a9LupEyRUofwURy4CS7cA7jwXoRHtdyVfkKDYQrHK8va7wSKKPHMwfNyATLncC",
  "key1": "qNSnh5uHisudByJgbLHATTRX4FveYF1gDrfv9uMd5nHGcfY5SoZFShfzfqxUR8SBPmqJoS4ZjDmXaR1eQNragdp",
  "key2": "5QkUJHajXjwoeevuCJaTgaEviLLvVkvCYHCkDT2c8Sn593icbzX4JLoS9aoU8PM79R3hnU1oDQ9X2HNeBT1Xdse7",
  "key3": "3JonV4VVXCCko4JKFhusdmS3jhKtVgE3z46dqQtvy4pKAgCteymNNGBaee2uCVW2wgkN31B2DirYKXQD12mbzRDg",
  "key4": "3kqtsz7fkqyfiGkqJQDhH8mNeYLQ1KtqK8kSN96JH2fp9JgYpx2eZuia31vjKCfGHYPdqbGmP1U8CPfaLemMW6e3",
  "key5": "64NV2jgBXFGFjkGjmZBMHCdo4dehyiTZbVybMy53HExGbBB2ZCRdXVB4BHbqivLkp6vxBogH64qUfbD8XZtLJ6jn",
  "key6": "4quEr3Z7TRfHCMh7e9EFyG99y6jPxvD95V8dAT6iwNSfZfs2K5JbgVzsTzzsh3gSGkKBoD4jgh84fKWV8n9je8A5",
  "key7": "2gtwtXnekZEqHsGvwgzZY46ebjGoSJ9PqQPucdpAVMsWboALZefLcRKyJkK4zs3e3d9pvz8h8nYgT8XYMEuKz1pK",
  "key8": "5Vvz7b2CxTSYMU4hpBRNi43RHa3wWw8XPb3wXf5fGuEFuZM8fu9RCJJzjgNf7jevSYnV2MKs4SW5J7kDJ61Fk8Hc",
  "key9": "3jjwYd6yutbLQqUCA6YzmrYsg4juJB3HBh6rr8G1Rx1rfCdHMYaf4p6XepzN7ZzqAn3mZu2Txruv1UWH5AEFZVCf",
  "key10": "EBuNZjEry9JwnaHEmtFmwomy2ShiWTow8fLf33Fig9VDWXjxyXQFYK7ksXSRjrWzfXni511JVvxHG4WTfLpmKMp",
  "key11": "UJWJdazLR6bnkJdi9Ve9PKButzCXfUGJzHmsPqMYsUCuGetpX1dVUK6X7CnopHk9JrdRAnMFsW8DS1DWFkNwnv7",
  "key12": "4HWCZdNoBA14e5D9WB1HQ1qKCjPYSF6hJ8XAqkM9TwHJVSzhR4bqbn18UWdY3ofL3LCEt1E2BegZowb6ozysVQRa",
  "key13": "4iH2Yctan86gDAtvTQcnKZKvCDUVfeQxpwVWPjzHvyxWBBHRLtsQeEw4zc2BYgEfwbo3CKScjGMmjRjKK48FS8ua",
  "key14": "ERPHhWyiX31ez3mbx4zWZxnHeFUcDaVyHpy8LJkGCt9M9ACYkHTvBy4t1f3NEGj6MnwgyuRXdSzDiXLHiKXsLq2",
  "key15": "4aurVCgpqVTKfH3gFefagaMzwG3q1t9abNS2rkrQa3qYjYAxVM1Yt3ThFM3qFG71CdrJYTe43pirzQWJLC8kXjsv",
  "key16": "4BM5WiFU9pWojBu8BmPtnNW75QYbB7TNGE6hRc4EXH1qVcC4NRMCuG6G3hH4AX27PkToT5sYDLJwfEYhbvZEEhMA",
  "key17": "424Cmki5YFYR5nVZB8hZ1VtQSNvdJcoum765fnxwWGL83XXwXsCPGNh2ViXfzvrDkTJ35LaHsB9rTdeurYDpwyLG",
  "key18": "4vNekmGVvZG75ajy4Tm5nHGLLD1VYLUTmjSxsh6KdYumrJwTVrLin9dgUh7K1aCxKvwbX6tqG1onxooep9338DWa",
  "key19": "4hPXWQsMyZuhixa4TzdGYYqkY4EZzfNea5qh1FJpBYzECa7SMaCnK5CAvabieaAn1N9ERMRPCcB6jQumYFp7tfqF",
  "key20": "2zkXm9z1uXXxPe6QWBqt27KJNypAQiqmLKz8dugapnAGdD29S7jVRVy4vTbFvDgcbftTJfMuCk5LT9zW1N1LLfRC",
  "key21": "3NuEsqFyQZD4wDCPUdKG1RpMJvqcWkjoZQLGp6H7wWtLjH9nfCFttbQzj53WyLwBmu6Ho6qLPAA6gVKQqgzFUnYX",
  "key22": "5zj913zVpqMMiBFDF2j5Le94T2ssKLFnjyiBEGa4KGwHrKtx8XxEbussNyU6TArmMYPeEg2AGeFC2KGH4LwNfJPS",
  "key23": "5GjQ99RTuUWHKLd4aDpD267RXxexYjHLdKSk7U26oq7d8evf3H7jn3zA6AcdE7FZS4SYAJgSFuEY9uqA16Xx447m",
  "key24": "5HKbrTvrZqm3UaqGUQCXKGxw8n8ZvivUcNDSQLLBhgpsb4whh3MNVdMvn9hiXGXtCbMBkLoqTR5TDR2fgBcidv86",
  "key25": "HBuovDDUPMsWwZMwmKqSYCprr7kmzyAghkVKEBYYEq5sW6LRVArVXQ25LCzfaD6nXPKg5R7aiAqmruebuYgmxJP",
  "key26": "52o3ugFHogXWLq7xveyh2ULoJrPvVWi1Ct7fd7U9T88JGZxoe8U7e56HHKaW7aWDGM65tK57oJNPVgsV7v13G68V"
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
