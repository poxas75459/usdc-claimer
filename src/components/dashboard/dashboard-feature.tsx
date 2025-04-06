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
    "5FrbioLREveGYGgedeySZxAMmQTL9yjEwXFLTup1xMA4FEMe494NMM1v7q6awWUBxuefhYB4DQYRXf2XLBfew1Ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24NukrQHzyvtybRL5TKJCf84etWaTkqAexckcy9SsPoQuD9bPcKZw3cDFwbWo3tJj2cYhua3XcSV1jfCsaRXyz17",
  "key1": "2CUUdx5eoHJqojCaHc21sV7xAbMVkKAN3gtpemm5Rpsy2H9rQETbZX6cFrnwUy3Jz2wy5X9zxVwNh7dyL2s5DNUv",
  "key2": "2BtHddV3homoEX9X3FEKy7QSSmKvsdTBX47AErYQFYRsxXyYhJAV69E3VSpWnerZCso5Bgx3eU9eZdxGFFNH179z",
  "key3": "kTaWYCPhNcG4gMBeRmk4cFRDAS49y6TzHf1dHizw5Eaj6NxtML3hbjGyuzsNP3YMoytn9nVYobZjMzg5YxnK5SW",
  "key4": "VQMHf127SJ1h72vWNAYsjAQHzzMf6EXYfxDywuiGFhwLteSjKcnhraCxtKShZxdhBBZpQKuazTkQBoitSPVhYvo",
  "key5": "59JH9e8yXRix3wPNAfKqB8erfCMx3WFjAPHAKwWEitqksNJLSfmqFXZ6VRLHKUafXrpizdqoNRV7UxGXZk3LALjE",
  "key6": "67hoXGiHYLMQ8yDs53A4Qg9KYEec4FPjE2SDqQn8W6DksZGrafiu2a1sC8WLGKqBBbDJDH4FfQgJfHQzcf4gQaUN",
  "key7": "5cGtK9PeqR7xBFPguufvYGHZCEBn2JYYu6Lb43nuVS6A83Ynr6tG2iB1YVMpfFYvWZKNgLaP6MPX6TVkDToU9upk",
  "key8": "2eYozL8A1S458LxmAZVEKqiuGGh6fqfjMMHQ8JwAxsn1TCTp5mqWJeUwML4JHgJFhWnEtN7625mLYBEH5FgKp4C7",
  "key9": "2rZnHWdqSCU9NkBVhv8aD52PgTUNjXh2XwnWDTTXDcvJp9f64s1Qgo1JgzSim2LLZVAk5b531eJy23da51SZmgZC",
  "key10": "5sCdePBFYJYFU3oRpdHWWr8vRewRRrR6W8QyoSBUAtvu7jXEivjN7FrauFXUNJhJq6Q2xR4uTBP2uKpBU1VPeQpt",
  "key11": "3AEv15skc4zC5dFyjieLH4CQ4E3bM6E22WHkCQVo5UbYCY6aP2qvcMrNFz2aqWiwPefmEo1nJwbfyA6du1qSyvke",
  "key12": "ZbAwctgTR38p5K1LpZ5zgzRGDkJQtYAnHZvGARCAjQengvmbNSLNfvF8arHfgA3u2JmLAbF7bmjbHWEeqa8AfvD",
  "key13": "2ubvR9VwqZ2mqN5bziT7VU9sy7bCnGHza3qQPbpQXHAcQ8i218gfeJruHNZvDi5aCLZFvw6sJ2EUWdu4uohjWckW",
  "key14": "cj3oVckYCBWiXVnNxUtunziropwKAfB5HkzHubzwZ3Lh9JZoGEnwNvV77hzhzgYA2GAKQpHRKZUobi6QZMxKUt2",
  "key15": "FjDdrMdrWtAoxo3QKK4xuFajonQpKg7WWdRiSnpVypmqqxEPd7orTp1WPNtChWYttzJ4DedyH5VHKtQLTz9Jp3e",
  "key16": "3DCRxunzFv1UiMC37bspPHLeuobi1Xmz8LshU46nceeW3JBm8BZjsvWg6GLSAiMvNfBb6hbtsgdmjtteFxAqtsvg",
  "key17": "3UcRUCUnqxzRrAKYaTUAWr8KBxpw8juv7m2gfx31n9PSQXAxpcMmKAKHfDgW9zuXFq3Hm8pYXN4jrRrxtRR4dxZh",
  "key18": "3HP3UdgAN2ATmmyrFasK4HPz1vKksvSo2HdfxezkBZKpbf2yaRC6GM8UozaZ1uMjZcTT1qLiz3bSK9UYakLiYN5q",
  "key19": "2t3utEwniTiR2xjg6T1YpR6ZwtXY6tx6E6ZvTfquo2X94sPsNG4VrwZ11oq5SLqpgTLnovEJkCyt99owsjZWaoFB",
  "key20": "4gzj1eibELoMQUxrAPUrcZEhfodxcRP9NichV8fBp95bV84k3bauUswkHWEwdoG3hQmEWehfHu42RHMN6NcrxeLb",
  "key21": "JtWPgD7PFruJ18T9X3PD9UBHwRzac2yaaUhvLLtPMRm6iY4SVSjNS62Hfwkm8ujGKbrpFAxk3Y4WRQUZhWoCvTF",
  "key22": "5Y1pAjscMKT2J1w17AYJcb89arhZCJxAJs1uge9NtkVEKiu8j3EBHaf9ZAXGrpfMvBksddCZVJuEYMSZJZ9y2dCj",
  "key23": "4W1dzdhYMA39zpSYgqPy6VfPxakVpgNMo6ZB3ejQf4EjraGSTzB82H9JWNoMDmzJSoe5XeEmsnZyCQnrf75urSeZ",
  "key24": "57Y69qJw5CM3C19CpqhaiCoeXgMDo9EWpxfE3ac7grgCvtevFYBhocvGtu2saSaHpSaRc4S4sCQxV9AUWWAxRkqB",
  "key25": "2dsZfxRPHEyztDeuBF1e13T3Lp8Kp6qWjfsaQHmNyuPi8XjPEdynMUASQKvyGyGwH4k9Dc5BRgP4RYGo6Bo5jBGR",
  "key26": "61tybwn5cKH9eKYEYcXq4jJhj4LV7aLR6WXP9ie35Xb1CdQPLSzv9dvTUmXfCq4n3XcedMNyBUrHnigLvW9wkhVv",
  "key27": "2PxYnseZ36eZWf5TYqHabb5ExwTn5RxVW8QqMrL2DP5Fdf3zyZdiLUBZn5B25AXAuuy3CCmMRzq8NiV1bZ2EpArf",
  "key28": "2vfzowXwDqS7n2PQWTWnFTrqbw19tNdfwoGxRcjABhqepJX6gQWQoNiB8SWdnnD2wLn2Pt1XNTL4MWAZ7mi6PUF7",
  "key29": "Kt8NP2tbBrXhjtyjakRxCNQzQBALCgoQvq6wZaXyAyz8PCgQMHf9fSbipKRFW7NXCViVduzW8K8SvUstUzZ1ht4",
  "key30": "5zwaAwkD3dtAoqFu8JhXJRvKdMigZdKHrQJDvH8EjxeYp2HMrt9CBJeDG8GEfVaa4ZVZmq3gXajnk9tJK34faMzA",
  "key31": "AtDYJa2ub1aFgNkPKWDyhJ6GEkQh7L71BP6Mbvnv9AyQeGKDh4fGQrxDrLt84dS2TSVWHug2cd1MgAy7e7bGAoc",
  "key32": "3fA5NzugCD7wUZyrfNSfNBmHmRJfmoGY7Zm6w97As1LX1rsKiBGmt13NGbPRXpmRjxUMPpVEyyBNosLfPU8r2wY2",
  "key33": "4soBwsrbuq9iApwmxTfx7ipwUiMePNXasfTUkKFEqgF6Z9M4LtZHXLqw2YacPZ3jBsvFoqERzwTyXQPaRPM5L1Eg",
  "key34": "v965QhU8mSpDcpjs1mZgoqP18kd6pSDQ6AYQGmcuFx34wc7H2Lbe5THY13WoX7YvZndr1F2NWdZwR1ntLw7KGns",
  "key35": "5Hcs2FJLR2mRZNz2s9fYSB8Pn7ASiP83rWgx4xRjSxwDumZYRV6cige3sAzaQhA7A6FuKbWdFTzMrZnCFD637KU6",
  "key36": "5NvSnqLDasEMLB39w9HJLsFBhRGuz9DjzZ8qcsochJCYUkEgiGHHFc3ey4CoCehGT4S3hSnQakyYXXqrkSUzdYrK",
  "key37": "X7PxWuW6Y2mofWPcFrF9dPrnrqKHbUawZMjVHZcmpXLYDXEcbYazygZi8kPLNbt1WD8cWoCUr8gLy9JCqiatrL8",
  "key38": "2nx77928ytLCFkHimkWkEc9YMmLaMh56dm9n1txP5msWoft6ARZ5n9p6t5gJ56CzonhnUiQpNcJaFiP4eVd1kGf3",
  "key39": "37FufLr4J4SxY5ngj8bUXv4y37u1vqwEsHayetb2tZf18tfkHUgwUMgJdEUtrDsycyF1xmw8mNVdZKToH85W3XiQ",
  "key40": "9a1HFDfJ3gsjrKACoqEitpjV9eXCAj4T6AMMKYQMsTsV2P7mnyESNzDbGdxvkqPR9d5HVU1AEUJur7dLGJqdrRg",
  "key41": "2Sv2WGzsXJi2ExoMVQ3NYYChAMvNMWLagE6JjGtT8JjimWvKCjjMcW67dntg9AZovDSgH4Y98s5nvs5bGc1eTjJD",
  "key42": "5TwgBQcpxd431FvoLgJbdozUerxPYtvStoxWyLYgVyFqPYLvDEUctBYbkQu7Bn4k9H4rbKP2NXKAddRgcUL9ZBmj",
  "key43": "3TR3LAHVcZJL2Ys9G1Yh6dd6PLtRZQkDFHzW1oAQbeDy92fusPqzma6jpo8Wwa4rHZjsHUhEcvVA2s1bW1QjxBN"
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
