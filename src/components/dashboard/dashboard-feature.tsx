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
    "3kTBdhvn3KMg67eQhMmJzMMqd8NwHLz63kv5Fgvc9YKqze1TZZbGpdQvihM1bjxfJpgMwZLPUYWXjhkgWdaK6BDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cgregPHsQZxZBb5ASAgrfQbR9rECXkXuQ77EwyGk649uKC431P1LhzJG3AVcGp5oGHryWngTSQ2T1AYiJrHcEnC",
  "key1": "51EhJvJBzTSVLLCCpTGrpJDqn1YhLV5gCft9QWePENSWSB8mvhBcNPUxE8wXVs2REHx1KLbxcvs3gWG9EM5rzk2n",
  "key2": "4gXdm8CnwxVA4fRAHbXeNyzXGqLbg2A4JU3wQDix31hGog7BHbhExEpYWsd6qGmgLTEFkJMBZyqVTDmCBHDeQx1p",
  "key3": "4K3x4JwF3uN9HdjxHRTob6acBVE7nJaG7k45NKe13LpvcNX7a6JQb1yp3iQRBGVWzcFYr7RRkxQV6Jh2ZVoykBus",
  "key4": "3MmQ1jW4NJpTc7BjWzpriJcKnRcs3XWd128ndYZbBRbKMpqzhBodUFZ3BPfPzU332xkTcDmeZKGSXrfsVN2wBjMN",
  "key5": "2qtxFPk2YCprkeu3wnWAdfZB3z3hrEv61MvW2WEc11kRAP1zvhim6LsGs765Zuk256JJKFUKMpNEHgiWRT28aRNz",
  "key6": "6533dvYQqNeVKbT8AD4DcCxfv6RTZoTNFodopemvz8LnQ9m43nTgS9LT3CHm4oYUHiGSa1rh9YpDXFi45dwkUG6e",
  "key7": "34dfgs6ku2MVfGecpeX599uUcUoaK1sgdUa63mR2av7Qi7SxpbNVsz9aure7fwFJcew4xDt4zQV8xUoXy418Ro9h",
  "key8": "3esRGL4sn9fSbG9s2xFvHtfYvnuuipQuK1HAB1kd6PvFfBah7WLB4KNYc4eRzAcbqL8SAYfYAUZnB5C8bhM7NNqA",
  "key9": "24psbE7Ss9D4d6CrJGCUbR3Ztra7BxjEdX65QG6E7YAy6gd9t1AqxmWr1i8ESaayL6qspjCDtZFxFHSLrTXPW5GR",
  "key10": "22uy9yHs1dvKn8xRW5WVPF5BUn9m4H5ChZFFx9ZcJXbtpSGbtwRczkzytbxLDSieqQ9S5EBcY6hDR43cYYgBQbuc",
  "key11": "3bj2dHGJnJJnevHStLY6nSLmqmziNLsHGPopP4p1p33jpBFymqX7D8W6t69ZqJnU3a3hoqpUV8r58VCffZPfHJT4",
  "key12": "VrZ2DTZYBAAK6dvB1E26q3nrg84oho8Qtkykyz6L2xxv6fsjcgRDQ6up2tbkyPibam6hQzSJQTqvNdfmtr9gNMR",
  "key13": "33tjuAAdLvsqb9wy9BMFuDS3exSqNq2SAX3KunXVsqA88GeZYtyv1TgwcNhaGmAaeVSx2x4AC41uNLBrMMw7sHnV",
  "key14": "2Q8qLucsYM3s26en4nrZt9cUjmQR1V76hWDwTpte55GzsPWe24HN6DPr4Uab1ExuEgSPtKSXcnPdFVNCkUMJovvg",
  "key15": "AHYKxzTbbKvLDrwksmnBBzeQhWTxCwGhf61MX3TsqXcVqyUGTdj5PqTbDSGRcBX3nJQwwLRKHPVAHMPjd8QQNNs",
  "key16": "7PFQXiPUd8vCYacuX3c7k382p81A149TtQiBqMKzZxH1iN3qc3HDJjsKVo7dqchtLRXuPAnj9Cg1cUchPQzB59q",
  "key17": "58XpiNpSkingJNQaofno6aKLRUWfg7LHeeC95fkSvayWCiPYoyyakoN4Sc6ookhKZzgMmqgpV9bD6JnAsXbgJwcD",
  "key18": "63GfMKDjBLqV7zVmoAyJcxEAmM8yLaxfTX5C8iPFdnb2yxzfAAhPB2uXiefEF2U6wpcqDc6ctkAvDvWF6zpWjHFb",
  "key19": "5cdjngUiXgZ29MzD7cTThPrqY8V4YWXaRFQs3HBv7BVUpdtRHJ16TNhAfjcbqYxijeDuu3KiVeoz6p5iLfq6jNHy",
  "key20": "Q1izJvkTpm9jb3ohyeXzqgjLrjrsmQpudZvtdDh9iEiuzQFvcsQF8hTe7M8zbvWbxv6n5EfNnyNU4hPL9Pw2BZG",
  "key21": "QpZXz5ftHtk9UgK5jENCg5nqFtjswEproS6aU4kkYiXsczh2ytjNYXQgorjLEaEBJikETSN9hhT8qf7HddzPMNs",
  "key22": "2nmiDAKmmZdhnySHCjJrThnP9HNgkT2LxTjVHN9RocBMfhQPfyGdYTnK9k2Cewv2Z8bYsXygiuPW94NZmLoPKSzH",
  "key23": "4iYgvxV5VnS1GcgGBsw1eb2kxJTQ3utenXqrzGQp6QvUhQRCtSNFX8wti6DTfchpb1frxivcMbJ9UK7yut79fc9g",
  "key24": "5adMwjuAy2dgEBZyXU8GPAL1n8YSA85cjL7RgpvsQtXFcg8Hy1kXpnVYbR1aJvVgXVrkgzYENvBhVLJZRjwNmRVj",
  "key25": "25N8A6C2Q8ftDtwipuogrRwazEyJh9niXUv8cTELifLcACCUtprqGJVCryLxnoZ5LdhXKQmUkBjeYAihG9eDvUHL",
  "key26": "4WG3nyPEpzKpPN9gw774zFBy436HeRSZFrwQTNBxZL4ikQ4P7nuFcBFZSZRQDwJ1FWo9KesLmzFhi8Nxe7ESGtm5",
  "key27": "4dC3fQBraF2ETBVPMYQkdE24X5Q7b9tb2GQY1mpcSLJ3cw8oeJJB6v86NLtGE9d2P5jviPu5QQobvnU98U1TJj3X",
  "key28": "5FcuoUFwW2ippJ2YM3RB5ju4vCZCXH4WByZY5yBmt4wKjnpT53DYkvLSnBgUSgh1ZMBgu1xcQqdq3bkzrRKaq4rX"
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
