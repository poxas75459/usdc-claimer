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
    "KpEkNCQi6vF8dPdxPF1y9gaLwvHH1nSq6NYrxDi4JbCFYbVUNtaJBZkEKuboLYLHPkuWnoxb4wosypkww6Gb4AC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VcegKEmBo6K6VjGebyoEVC5RD2q5owFaUXd5RzMiTwDSZmNDSMwZ7krWt7wdBpW2uY2wudxP6tGhxkgwYssX17q",
  "key1": "2AGP46WGpNUhnyLiFtQJVkcre5enQEjexxuzT9yrA1ZcusXMLPkVXbdAdB2fLkCtxBgLmQEtFPqdDojTesHnJspi",
  "key2": "8kc92ajsHNVhT81k61L8cRwSKWeTdUsvJkgFoVHj2KXG64yVnhHQYadpLATqRrE5T5s5hpmheVJ7Y5JCE3CC8o8",
  "key3": "4YVqaNmmMLenipNqw8GwvQxAvAtEjBXMDkCPE8Exxfa6eckMzT2h3mzSAcVh6gLoHdyE8JEe4VB4FaqHWYy4yedn",
  "key4": "1HDdDqxEJ5evqRvVLRvqxvVH6wTk22wBYSfVSRRdK7K9khxaD3rjtXQgfXiYCouWQmn5ySprxvpzcEC5EqQwPpK",
  "key5": "27t3XW91dpBWdu4o4cPmNERXVUT5sjQsza1AywNPyhn4BuDXRCYgsHixaRPcsizF4dVW7VxZTJoDK8TCnG3yvV1X",
  "key6": "75or3KsjWNWWQ4ePC9tUYsBcJDzqtZtxpugPPsr1v3Ys3MoVAAwGPhNQT6i7gr1hXzcR9tggKACL8rtPQp4XPJL",
  "key7": "3xp1T48S2b1Gkt4qPV1h9vDVqXZCWv8sYrNw92y2mJ1dZgjgTP2YrSshAVXP1vaiApXx8hdDmUm8YwXx3fwXZgCA",
  "key8": "xVv59EWqqeLzoTeRMFUmHBjH4Y7vZqLgF9NHSP1FeB2xJsxyPKp9Tvwb46N7BjHUXM6o5tP4DV69cMPQoTfz6bx",
  "key9": "4QSGkrbBSMXFY3Q2c8dQgGjonPLZLRbC6H15F3omXdSYKvB5AV3rkR6QouF79fmXkhhcb6dG4Z9HnTTJMXBa33pe",
  "key10": "5L3zYankXCCZu1x4HB22AtSEoJWvtVPV3go8CGnS2aDPwbkv679zjvTah5dY6R22VvyvWufa6Y98Z4c3RJgQ4mjL",
  "key11": "QA1ALhk4Amc6Regpfxh3PuonN9VmTQoRyMHVgRamn1azgf3V6rjV3L7KYSc2XBbRA48Tsbz7vYsNxujGwqz3hx1",
  "key12": "pvSYu31nHQUv1ZuVwGrtM9ugMbNe9LRdmVsYc5zW12urPW5Tor8MEjPMcWQrJjkuXo5K25Zim9FkNezni4eYFVo",
  "key13": "5GjgUqtCQTxMNYDWP3CjJYffc7tXZFgqhXXciLTdVALFQAzmczqVayM4rRZfRiEMTCWMZgkPJaSvGsyKbUn7Hhx7",
  "key14": "rKwZzmiYbfWkzpL4Ps7SvLWxXU9ALGA3M2P2kMhhXCRZsytiQQwjrAQXjge31PAj8PkSd3MkQHUnbsYWArvmhXS",
  "key15": "3LjamwsEKpzHc5KD3dSuV1tfZmKz4ZH7CPVhPyaGTKUUW1B1VT5EWYEyrixKqEN3y7iZFLmxZ39xBjFQ3D5XBjVt",
  "key16": "2D6B8CfpV3C459C8bgLSFYLXFdcDteSqJUUqxQtXfmAi1hvDAxJUWVZnk9r6iFRMXV34oi1EBL3QTq7DEGcTvUs3",
  "key17": "4L3SDMc7pjms4H6MwDMwNdN8XLS57yfWukxqKpf5ZPbMpGKT3kiZdjDXQk6hVXZfqGRpTMzPPf9qKf5rjsYqj5ME",
  "key18": "3tgBTGumtwFX26nf67sRs39qMZfBL6MbFhZTKBizkGfNGbV6ZvaqToj3EtgGMs8iGE9sfdPKksnqZegUa75UAAA4",
  "key19": "3okK1pzn3NkZsYRQMK7kBbD2EDRBBinPJzqiq2YXkfWttGy7uALx5iKWggMLyeCJJu2pJs6UqeG5DZxR1phNeYvf",
  "key20": "2BzrwtAf2ofXg2Jh1Rdd59mtGHLC1iYMNAkVBfGHeb7kbN7VU2fDSfVqkb14CtH4M4kBegZcX9m6bzEsJytpccEK",
  "key21": "5bd8zeFWhA5Jq4ixebZEGsG9H1uGAAYvVBAisaKkGytfx8rXQ19L23ZASD3dnCapS5Qb4TLjtqoxDXVKYg1pqvrT",
  "key22": "3964sWRyStrFFHUoF2J1iRxHRVyjgfeFetdKSnjp1HnH7yTty3wxw8v8x9uGPvfvZKd2neWXVHMwHXb8epR5wozR",
  "key23": "3JdJ8oAXuxqubueE4YZTQU6Sh3EmoxoREwgi52yrf9VNntDAigj1DrUpvqHNEo3oCSR2dw3UzjK3b4x7vitrvUd4",
  "key24": "28frUD4JdGAmpDmPa9DWebhismrV5zNnmPrLr9MzkzCsuFLV4qGKTVpgUrcAwKap7Cu83n1mdhRuenpoaMQj2Kq1",
  "key25": "5AUFa2LNGKhTGhFEn92PseFWnZyQXPYoQGZRfqoq9c31nGrXNLwT2uiiVmKp67EXiEv3E4qixcNmqHmHvnypE1wU",
  "key26": "4RuD6DctKN21aTobxxfNoiFSHtWxb6fps1m828cBW8d22fhTXL5XgFY1SH1FU9Dy2xKFVEQFVWjYbRWzAUtQ1LbM",
  "key27": "3LzcMTgEbs6n6HBBpr22rothjLrobSdTsGpNnWJNzc47UEpLnPea1NXMwXqzgmG4chgEkyrJeLJJY7g6SV4MGSQc",
  "key28": "4fZDEhLidhNBVsYBQugLhSrAqhRUZTejhYivwPauosE6E7azqxnwRcWiYAZSd6m6ZMwuk6MKsYxnmeRCg8U8HD7U",
  "key29": "2DYqbvP6XxVsLVABFQ9R94L3icr69Vr1Y14yUjRyc3QqkPyW2ihyr2G8bjQAaxXCw9qRxXyVMCNQJt84eDpX7orq",
  "key30": "5vtBLefpHZR4emXJVV9XagVRw9M9UZAaxjhLnbctbS7ey7h6piUaBcQduDeAa3tnrs94wKG2pv1JhFJnjBnbxvFM",
  "key31": "4V3BuXXYyadPZm5NBvF4N6dV7eNo3rWy5pfhhqQYcabKiXMu7Nki8iMWt9LVKS4SoGU2TPpU8LdEUHmhMhLRBjnz",
  "key32": "57DUSZ6r4FokVjfpMy4h6pmLUbdQ5qgKsy8t4R5382FLz6gmmQH1WEBhdA4hohs1NRx9KLPhijCeSDLMq2vXUryh",
  "key33": "2NokoLGkpCHyqeTFxfneREtbCZ3X2ggFtWTGNffChfdKbsfcyKMU25qWmVR8HQ6BWNsxym8ZU9b8DaqFxt7ffdpg",
  "key34": "3iPfWPBepDiC3wyBYCZFWxk9gd6WMADDuZpuBmHN6LpcvTKxpwyoe9pxey4iyUJEmiZwK6bDnrB462zwYdzs2p7R",
  "key35": "SMBHBoKsk8tnJDTuxY3RGdVqik7RB65Q3UgT6nn8hKPL5VJE67WS9wiuuAWpZgfYuwSUHKfsW2gcGCGVEfmmsMy",
  "key36": "2m1J6VS9HNt2dUPU9FmGZoFFw32Tey6KVZxD54QXXvcoJUjNBZViy9yyVtZ82Fv7F2y9jGrofu8xyTd21n7pdLQ5",
  "key37": "3UCxqKg37d6xemJykvxQQ795CDtS2LbRgf8FZFb2fxfu2V6vXjT8bYJLjsnwbvX7yLJEuoF4BNEsSCjj9ks1X2c9",
  "key38": "53kUor8myfSPhQrk59ZcFy9QVmBLERAwPigwpW4anfVPyaiZ7xaAyMnMNdjEeDBD8wzrvTYiAxrRLcXYKxspaCqm",
  "key39": "3yJcezWSxh65mZVeSWFQRm1fr6nvuJsdXazEvghRn5n2zitd5FDUice6ceC2Hy1c5kZX1xmfnJR4beFWKdyxmQU4",
  "key40": "2XfXtvvt2o9fLLWxjyWV6WEHXWfnvpf1rG51BGgbNiHrZvnJ4f8yaRWZJNv2hFfxjQ1VacWp6r8xXggLnL2A3AQP",
  "key41": "ySw3nkwEioS9mTZBahDo4RWXxBrkScu2egmtgrfb2DRBQdj39JoqXdt2fuYbii4cQCrD5f7TeJdd6cvoMB2ckMk",
  "key42": "4rz3LZMqvMcvWRqe5j8n3TP8YMfCQgqcm6fzvspfsmoPReoWoYbVkJeseEKK9iDqEd3H2Mc7ENDS35eaC3h5rn7F",
  "key43": "42JVoxnjPo5DWow4JbWi5wfZfNtFS2e8iKX1f7VJJeuedKpL1Why7PChNKK3PtLYdWS9YatnagtuE3oLnj2Qxruh",
  "key44": "2yUfWf7Uz3fN4rLH3kDcQ2VNpC6EUnxfyiNBta9BtVMLY5iYZAn6vNEu1bZTEwZ8deXPAjENPJ1mPadMeD51dqQb",
  "key45": "2SfmKwkg23Zd9B9383woaCbDMsVLi6KcJVwq51GvGMEu95q5149sGouv52HGbDfCk7sCYsnJQ77oCq6cMez6u5Zj",
  "key46": "4NABaYQZNXUtkxREEexsXG8zipWJv8EwWHPssiL78a3VjxD6ks5PsgESjiJSuE61TVVKJFjNMYQGKtcg7diopwYG",
  "key47": "5ijjbBqK5w8qrwXukmheCMffzfx8DMRpP4bUUmNrRys25Qx8p7Mz2Z4M6QbNbatspcG5SmD34hcHZoDHZDdPfhYM"
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
