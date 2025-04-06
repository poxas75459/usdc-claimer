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
    "5kB3nmMiE4B9PgLQpx1dQfyuaEMk3fcyk5xpSQ55JJbPq4gmTuX7gmAimAFE2mRpr58bGkY3mgArv6JHW3S2QiT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y7truCuzzEvLyhrq2ciwhknDYDX3QZtdKSVRiFYcXUvXbTnLmCAxtsoiBCMUY7irjEC9QPnnfdqyReoPTU6Cd6d",
  "key1": "61gbKw4qgFT76QtruvD1riTJpAYYgQfhDgSVStpLW3u8mRuvaM9avwP4ZtFRxxAh1FTtQ4wikqK8dmuBaTYVRcr4",
  "key2": "YWpER3RukLAFFs6vHRX2CvzuoDPrmyFz9xVDLjrD54pYMh5Wa7oxNsGKFYVtTZePPJyd711gjCFaPHHhMzBqw1q",
  "key3": "4u8cChXwpJd9FBjQsKSq36ku7gUKZe3quxuSaTSDhB9FPnFa9yi6mHi4KJpMRnb2EPkrVxcRyvJ3cA4HUk5bBnx5",
  "key4": "4zMuuWiDvZvbf5iwuYdhq5JEjQEgJhUepTrTVDC51wmGmxKqeJY1SKKanbCRtU2bze8CCjWqhKgWKQuqibFxZADQ",
  "key5": "2Hsqxrhvr5Mjt9xzauXr4HVPFeBX6UQdgrgqsrTnqMDs4EtQrstf5RsS4jBbfDJcWX1ZZPPtZhLePNuWhfN46qLC",
  "key6": "4ZNnRKeuest8ZWyrJyRPMKj7tykhN6ESiXksXF4dAg8nQph1B53zyF8zxLtB8bHonRdFBArHciBpByA6LFPSHNCZ",
  "key7": "4jVANUKSREPBXvnsnHFiF7XqVM3kVzUeTScWG3noLiG5ukpMxU8KBoWMPpoLqPxqtKMVTFW83ufbSJNmA9juUr9P",
  "key8": "3DNtUG9bcCYZYVPUqK4s5KewkBQKGvvUJSchyYBUzY6xt3YP1UUWcL1KryM3g3zPYTxaJ4ep3t7npTK86mR2A69W",
  "key9": "5XM8qJZsYysYyLxTFLwCHyscnqGRDrbhUHuTK8JwFiSeAaxZuCgZCk9uKpr4tVsXDfPuRWfBFR7nr8DQRqSe8ctE",
  "key10": "4Vx2z3Yy8JhpTGpzMhfpbuNDgVfeFJD3JpMfthwYd6DeFmkJzsseryoMhbVD289PtZiy1pi6PUWfFjCJNoJjFU1B",
  "key11": "4iR5eYWPNjDEqJthrkVr7aogMatnN5Ur7r9kF62Y9cys6gTCHvCTxGR7DqayriqAzJBBYCYehphwEGwj6oaPgLyi",
  "key12": "5WS8rLSQifx1z31Vp3d3mLtdG1GjVkz39xCmBS6hKuEfH1sdJHpaJdGc2aZcSMaED7tGmMZYz41d1KnTnZA5ettB",
  "key13": "2gVWayoiNArY7Vjo2o8a8zyLTw5edzHQTVwW5XSGWGp8ryMsuYeVukkqVzJEq9zD5nuBkDv3BsXcArwYYumg7Zk8",
  "key14": "39Uf13UK7va7U4gT5CdWXcaGjjRGRE7gew8cWAqqsch6QjHazFcNhEoj9k1FH3NKvACfkYrLcN9P6MamPHiRgCcn",
  "key15": "V1DJ4gVTLs9z3ZF3Rdu3Se7Sbb9YGcrwgQGYYVRFWggds86i1S3AeTxNLkDuocyS4c9FgRjby1eHBdy5DLyQ9s9",
  "key16": "4Lkzb1iRKehWfcaZbydNEbGndYPQ5CZczSWpwpqVHVXcaL1nmFd9PXM82TDroWaGXZMDP4z9TBQR5Ypr4AcjfiHM",
  "key17": "2LWZ1yE6nYvE2EbexUB8srixq5LU1p1439Zm9GMk5EvmFnvaT4oqj6eiy1rknwoMs5kigLvPvjYqSpGg1LU2L2ND",
  "key18": "5gvWovgSNVd6cMEBMfeAVFfnkdNvDSv1jhhG7UNhVqNDEJsmrmWKv4N6oFiCgAcsUwpEZXCDBXdekUfS95aoyNm3",
  "key19": "63GhsMZytK35WnDcnH3PqmK5jfsbHtpiDTUosiYJHvBevJwV7jsMtTPq91VuAzbNvcBJqstUk59pv9EWFjPxvkQH",
  "key20": "3sHJMwZJvwL55Gh3H11ZN4n85Qjteo7Bufj6uqqdDgNG79a9MouVdba1toyNMWpmNQqDqChMmFUA6bxFzCJUUP63",
  "key21": "4CCTyXdjw7GVPrArogYqgNcDE72y4Gjsz657yqj7sFzMUag6BJWZKotewMdpK8mjf1LMAPgwU1YhUqDWALg4fkpY",
  "key22": "3pzvRgFSXwRF5kHEUcKpduYo41oyGtbM2TiJRZxaPoKE8J78rhKyFA8djDoTJWbrXyFzRynf5wRQe8uJgr6YyHPS",
  "key23": "5wSK89kTa7XkyiXJ9Q7zp66PsaSCXwY2nD2nKSm1ag6SFvN7VMt2SFjmfcJZaZwiQQkKmQQtev5N6CFWEy22Xr3H",
  "key24": "2eBpLbvCnSGCF2JJNAuhe1VEF178T7L9du3HXJuuCF249gjdGiM6dojHkEYYaSmfMxKE7drBdRpDakwXuRWkuAHK",
  "key25": "42CioAKRrdp2nMmzedLf9EiE5iaN2rgQHzBNQBqkLfsHGfTXGwEWa1TK1GbNPoC42o4pHbcHWkqnkYbhqHevUBz4",
  "key26": "2oUMiZHJxP1DBUZ4SQ8vjXskuybnLbxu5vNUYQUhrmC7or5NTfZvACC6ngC6LxLJLjuqCoHRV2yVMtawTAs6k8Mc",
  "key27": "5ZeMv8LGJCBwcRtKzYnhkJwPTbN4NgjUNURMkm6hUSqKZYCJd5vqiVZPwtFUhHFuZZALYYGXzczAuFCj54dnGr6H",
  "key28": "3PEBy3AUwWyfNGzA2hGQaE6YTWmufZgUnnKsBVbhe3fngojRcrhSsawmUsqYqQhBcXJzs67CN4RTHUHjcaHrWEt6",
  "key29": "2yprHEJ7K6X5QZwLvbSZNtCryApRCWqnjf1czZCmWUKhzTTNddN2twH56N8NMURmqHhU1ibgJGC6irPE4VjJGTjp"
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
