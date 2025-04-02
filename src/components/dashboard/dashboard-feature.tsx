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
    "fygUxRwrj8UFsZMfa3d7XsnVL5DDgihjJ2RbeVe5gku82unXfbwhUYtvJuu8pkXpZSzixNacsjdU22Lj48UjEiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hwUpHavoffLeBQWb1se6dVzWcdzyBWV6d2xAvgyZShEDHSrLgqS4i3Z5Bp33iHqiyAvaLhG7icBNgQEZwWS6wuD",
  "key1": "2LEb3Z2RET9Gz8aCsaZeUiM5M83iBBePLBrNHnMS7KvmEWdGNPh9EB9uzCEdHhtG8ssHzi311VQueeU45FbLhmzm",
  "key2": "2pCutDdqDAUMFqKb6CnTm4Wud2Tm7BtpiskECmuhoP5Ck1aCrXiYRTZfmiyL3nYuiWAU8HmeX1ektdGZB2fuR8M7",
  "key3": "27YN5WVjuv5CZEwNcFfn7o6m8Z4bECp2KF743oj772ovGgfYSfRkRbLPp2ptkr1SNdSFoE9ABXKByvBm4ctoUPVS",
  "key4": "45nxvjLALc14gtuFWa6BCgJoajE7hViAyUSAy7HA2TpTCAUuAGHLX7hjH6L8HZV85uyzdbLxi3WEJrdKNspTGxNL",
  "key5": "4r5k1quWCZsgjkuL5WArTD6LWsnz9KDeUW7UFvRdiwJWv3wWnfL7Dq3xLhi9Y4HVaDT3KbqTEaMD8F7Ufw2jqpT5",
  "key6": "3VYVS7mDnsCsvirkyW1p8WfkGi6QdJcStZwLZNMjDrLJnoUWWZs55eNL7oPt34YW8Uj1hJDsApqDtbeWVrqhz5j9",
  "key7": "64DPGGX4UC7kLen2JBqaP8xhMHqU82MGFm7SWRZJa6j8PK1BwVY7b8jGLiMMXbWYUNaCys2xDJEqRXKJBHSKVmyw",
  "key8": "kgqXfqYaao48bVtP3KXAPkykowTokCFoBXFjnqpaYLNu6y39J5NYdBec89CBZc5D3xJ6xRF11numvK732GDsmQv",
  "key9": "Jf4VaEGxpRXcucwwLqVjkJdpXzqFk2euTsTfxjiNP1Fg1B6pVeKKgdbLbXxR62bGscxYTdQRGPf5eeMUWMUXs8o",
  "key10": "4ViN1N6TuB2EJE3ZVrzKtpdozGyrzPEEG1gCHgLgfnBsdAx7hZ1ihVwpSRqjihNaEYCUzeJ4mDcGfP4BHuuYS5Jt",
  "key11": "4wPsmqBhNJPiWGahCyKGuqBAKHr91becTkaKeXVUjdYS9dHd7WpDc6zB8oHzaEVdvsZgg67e6HgTwruejzYkDJjt",
  "key12": "4G5xprdP93jUvsZcgcBzGC2KjDvjCTwqHi6xHbdQcVHJ3rQwXsnCB78qpoGrRNiw48EKRwyingmnD6WB1bCwjQgx",
  "key13": "32u6ghuU9iHe1LothWtyMsBwAtHeRDCFpTfWef8arMVci4Bvo5eSaYodvyLZs1CiDirjGvm2AH3RTd7CLPD8QrRe",
  "key14": "3s3b23swHQNh5UDS18ask1EhUDF29PEA6Tmqa7pHBr7f3wnyN8DsYYqrZVtx3cNb5DMtDGB4BmQYei1gUabtbjDc",
  "key15": "4kwbhcVGbXnhA1HjfZ9ZBvuRzynTHkirFM5qQzWfSzfLNgQJjkL2nbhSRdmXwgy8GH3DD3moseYFzoXVfZUg7LXn",
  "key16": "3Xx3V1eoXzomqy47KUfhCXbxsUhtCUYqX6zkzvwTLnjy5osnabrnREMWuGyS9ELiVENazx7ge8bo2Ce4QbhUjLXq",
  "key17": "34kVeZzcCUhHT9J3yrwS1Pdh1TSLYwp3s6DswVWfUnp6HxYa2NFWFL88NwsyesUfuq5kvz25Gd99s1iLSnP63jf3",
  "key18": "26yqcScEPhjLyuFGqTiBMUgjoAwD6TSWkHsBUmfy9moasTy1fUzTEfYp3kEF1wsb9XahNGsPTjwS59Bg71EWcofV",
  "key19": "39AQdgkQGVHiw71hwzbpHRrwKxX4qBDjpZCpicbanG8xVjdA6YV4hLbhNU1Pck66VihN7nRMLNPrwtbEBqV4aidy",
  "key20": "5RxdwWco5HtLSTZN1VMtd9G1KVPXsofoaa96JvojmWDBGogGdMEXfFdrNtciJui22kuhpWpugDuVpAeK5wP6h1AF",
  "key21": "j9N7LxoLEcWAyHwMmzQfw2vzojuPw28i5THs8hFFwkXcRC2RdkXkoftxczKCWAC3Exw3r3HdtZGJDtz4bkvBCoE",
  "key22": "4e35iRkJnYj94Xti7gCMFd9BBEGHejBRtugthCHdzJQRBmi6xe95L8VdBqJKQd8uQyMDQS96VnZFHe2zGbRGJa5S",
  "key23": "4SrqHFyESCGv6JC8EsH7aq3rfBRrfGBwCkmueLUPG4ZyH84K1gAsWM5p4QGXSSB9eGfSKxGYEVj4UcTbfWARfMZL",
  "key24": "5frQmWFLrkFLGLTNwiVvyaM3652Aa84w8SG8pDFm3jdRBmSV3f7rfYRswc66iNTJqmyUXcnF3X8K7JupQYSNFmpY",
  "key25": "2KyL9bAwQa8kEmiKd6pcRgG16zPEgWkroBBKDcoQtKqBStfGisCvUgk9UgDg4vFuBSMhJqrsABCN5JjHLyN3J4eT",
  "key26": "5o849CD4uLhXiYUyhPPsrq41Zr4NnFSDiaRC3zYVy2ntuTA4pJkreJkzFifkqZJcnqT2SwknVAk77coo8JvbiJvN",
  "key27": "32L8QwuiCZiUeKdp64BT5y81VMap11RCiZKdfzmYhmbruX81JG8kg6ezPPWzMYxQKGp7AK7MkuHkqvDnMJDDuwD",
  "key28": "4gxaRYiUGwyNZNhDAw3zEwvNHzRCk115TdVpt2hX7gruMLGQdT3K3sE5ARnCXHgzba7SMmJAP6tqeWVHM8VpQmjD",
  "key29": "4CRRsAEyJgwHfB6HjKAFoA2RVPcPtBiRSs7xqX9TYpsEPJsVD1oSsy3CTNA63p1KFfX7YMmJ8Bs5AoVuRSQTFGyd",
  "key30": "3Fn2mjopGfPKrLTooPrit6FsxbJ5ZkGFaHbBs6y97DvNd1vR68iY3GdqVkLM5NwmXuYyDnHbqLkrLpeb47Ubt67x",
  "key31": "91k493Mi9jGu8No9co9caFG9KJgua5nWN8wF6kgYbGkuNJ5E3oFx7PseAPvUBW5ih1EP9ToV7Nn3PSn7vdeUTJF",
  "key32": "64kMDNfLmK9yBXANEBE8NaRispvPcFbWqwwWuc2C4KCuKs268L6WEgLkoaEFis6eVLPA615uMtsc2Tc3nKRhJdMP",
  "key33": "5sq2uHncepFSULmueyuBwhWt9huAy1Y4vCL98ifevmCw5tsjLFqvX5H2dTaqhjEUiSWt4PWU4ge6xg3FZ49KvUhe",
  "key34": "8ucXWednDrYMzzmALAMYAde5AdBvVGg6p1ayrmDxDJ4JbCnRPk1vU9ZxGcCYdAhAXFz21n1PVbrZGvJbxLLGrVt",
  "key35": "5jwcB6Zb6Ym9PU5UMczaN9bsHQBcuhYjkLvCwWbnkDGFJcFKAvQxkupNhf9ozrgh1UA3TP7FwsD8Cb7X6bdK9vBG",
  "key36": "3dYoGyNvjHKMCCMqsV1XYZXz6Qi82XdoSXTGk7rJc7c4rXt7qBzLwBqG7qDSq1Z7mqesKFErQSxawVv6VT41GXsS",
  "key37": "46srY3z4V2s89QwrF7gRcBbTJ5ToCYgKX5TRMP6gXP2Ms4VaeE6QLr6AmFbQFE7GiPtxL6MLwzETKwCHZ3FUYpZW",
  "key38": "3GuEHdzJ4xmyQSD5Lu67x3csd8p78NDhhQCrDyD9QF9MzCR1Z8opMpY2FyJ1RsbHhz7rV3cgWTFdJmyr2oMarNer",
  "key39": "2wSC4HXNWBps7gfpwXuRMnmkviPwsKMHmFTQQHfDnzNotKMiwunzu5aCSHrzjkWsP1AgrZ5zP2wuNizWcFyq68kw",
  "key40": "3PTy24imednkXxMMpoeNPwqqNbF7kKkPAXbkKm9at5hFLJfnUvzprqb452Z2f68YsKhvBkhY7YY5QXmhtH7v4pLC",
  "key41": "4L5rst2ZyepBiYHyZM5QUB2QEKQ6pxv57hPXsMQr2jziRMHqXKeYc5kYH13Py8S1yLjxdWV89XEi9VjxQa92PRC5"
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
