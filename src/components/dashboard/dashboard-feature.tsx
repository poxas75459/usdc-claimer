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
    "5tiCQTfCq9ocFs4MX5tVt7PsY5ssQZYLW8vDUhc1eCj4MT8mvpkSHY2RUhi8WWFsSXb6AXB4Nzb4TH4NZpk5AnG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tukCNxJvH1RvT4LvtSori7jjNuFLdu2q2QMxKD74hKuj188khhai43H2iyjFHq5neGvZB6wKWqamuFnRThoD6rk",
  "key1": "4qDD3mjpdSCQxF7NAsVgp51mU1Xcv6ghs7ixznmbak7NG9GZLb9Jnor4T63jDesw2KoFJkZpkC22gPFepBLkb8Ri",
  "key2": "2UVY8mzJ6TGswXNG5mdgJSLgbgbjHuNyKaz4DMK1RZQsFeXLXwpphUWNdsHd83Y2NhH6cGzMb1vfC72Ex8X9xnhq",
  "key3": "5rBnKRMBWoxmqHChFUxYneJT6cnxss2o9ZRR4fEv31XBFg69e6Zzu7Tofsz5Dg8VQHMXSgs8PdUKpVuH1jtfZT11",
  "key4": "4hsxrNo67DpokcyQ5mTTdP5hWjQyXMSByWwgUETW2qEDw4ihyuNazhCjbMe4EmnsJqGUxSNbdVbMbzLtYFYb1Kub",
  "key5": "2wFimaWLLDByjjmDcqmSba84PNDTSD9aRe8BNFChXUik5d57kyvVkcmWKHRonKERsvY86Paehb4N1pemkB2BLYP2",
  "key6": "4DainFW6eqGTCNcU4dwFnL4EWgWMEDPdGmndjowwNEuqLDLxWU6yfoBa5Qp7vrtXq7uKWVJURHu3yHDYc3KqFmTB",
  "key7": "5sLM75vnTBv52JdSK8nJer1VDy9pwz9ZTKT9VEYB6tr9A6LsUhdCaFfvJu6YNehbGcQ9rkoMwkW9ZDJz1PZP5dNA",
  "key8": "2E8LAqiDSv9Gsfbcj6yjxJBXWS3cZ1RGPmBmz9Nmmi1H6DPLNwAMpH5LbTr2ixRLUorKbEefCXhgFtqxnSMt21ds",
  "key9": "Ze7pqjzxqsoZ4B7rN9k83b2h9SREkkEzL1U5DgYC5zdWw28AeEAtGFsKAYhseFmkSGJHzCKxNfcDWWdJCdYGyd5",
  "key10": "5XbKuNQAet5KnAM9i6T2aGkpGYTyrmz1m5SwoL3VBEP49mwBGTWrZrVmzL18rV2sAEB5vab7DA4EEX67WUc5kgt9",
  "key11": "bKteLFa9Vj1suimZWT41xCnHTJXmL3emV9F3vXUibnyTHZcTqjfKCwVvBBBuk6wf6FUT4JARGjRsdVNMZH7oZWg",
  "key12": "2Cft4ozyzsFZEfmdrpaBsciKDyiYLfqbjiWdWJUiF3WCfhiExLrCo7dRYyEdghrgX2QEmgAUpr6eHiF1Z8spF8ED",
  "key13": "31gR2P45NCKbGZxnUrhaqkt8EUK9phWF89gRkjzPzu9LWEAdhNhE5fWCiaPqwzLVtMCwsENpb7wg38MawrHumNCv",
  "key14": "36F8RhByXXgPM47iquxZtTwrbBpFUesskzqTbkHq9U4uVzdfSsB76WatjH9eMxWoiQZKqgKWnC9TTAcnYMDxeAJ9",
  "key15": "QAJVzNQcaTaqrvF54DgUyxh7FmJqjTA3BG3qWRh3d93XH2nUzE7KFq3Cfgb6r8RNR6F2CTcCWjaK6M8E5wT4Npz",
  "key16": "4fQUWeVhkQki4izCDPmrasAve2rM7h5Cs79XovopH3f36TML7Z9eiHWa9eNwWL1yRxbCutZ7BVXXSVwARQjDRb7Z",
  "key17": "5fKTHAUoCVBo5rx6DUL5KcvudF6CB14i1ZzpezfASMBFeP13VuNoNz59nLJ319jLomUFoMUoZ5MmBFgFkiWHay97",
  "key18": "2Xt2renV2N8hC9sNAUhRJhbzCcSqv9hFAWwfG6mKNuxYMzvzDd7BmMwRWRwACVh7AvGanzutG9vLGX33pYgbwYwB",
  "key19": "2uC89ds5jVo1wxp4N9Vqw4KMPQCg2scebJUWxHeGrXKeDZSBPvr4YnoP6KtZcfEtt1w7RsRPggkaU1eMGy4svFns",
  "key20": "3SwMdNST1Sd8TTbP6yNkbjGfimMXz8dTNPags18y4zTzje4qHdyNenGNjWgtvpZT4BCnn8B5UrFsGwN8cqVfAcG4",
  "key21": "22TfzgnMPHLgqqAEyvCwS2rq891cE3o4PKwxaJJaxZVMvaEU5kyt1Y2PEaQtWnDVEfp7azYpTqqteUkDW9CsXeuL",
  "key22": "NkQh3EmnkBbzjhMoN655UX2pd4t5RMdxGcz8dv9ZikeG42d2v4W4wtVbGgEDYt7fAHRDJNWAcE57QKACGXZQnGE",
  "key23": "5ZhMpHvFcaRVN2hth9EdesMUNVajkM3pjGV6zQM1KavY2sH3BQnwWGWhUi2Xv1d3JXQAbc1ktDMr1a1fJHHTYrVn",
  "key24": "2yeEfno37swRstCesjxoF9xNva7ZdHu67UJ22g4CsRf2598jCaozCrvqw3bkpZsz7iLRt3ysrpLddREeyimmh1EE",
  "key25": "7bijAXPCwJ8NzCmZzV3LQ8hTZEuXQjoE9pr5mwdpSoJGMMSGECY1UCh2aQtuyfs5vWcb11JvohmGwwKf3AmMfye",
  "key26": "vFEcqV4b8EXQuQbU269zyo3ikGzZkXZukd57vkYsrpbdQANogwTA4isfx5JkEn7WfyBm2D7Sbqaw3Bs8i9NESN6",
  "key27": "3dxUPC533Mv1Xtw2nv7cBU1MjCCF8ogjfrJ8mDy6xL371w83jWxBgZJKVDKrndsBR8EsbM8yD3aiXzqQ2aFXemK5",
  "key28": "4bwDw9LnVPYA8eVbSs2TFdS1DW3GP4mjUoR4T55mvrkuquG3EZ8iYuphiR5LeVKtzR5RKPa2whEA85bc1AscgaUQ",
  "key29": "23G2Yd9a196Vy39Q36dUKmEEa2rk3R5cZJ9aftcwet5vTb5HyH4EBfnh5ju4Y63bg9zgvxxtVt3PAYresX3q4RTq",
  "key30": "33FvVvCj2fAyYJG55UFbNhmkY5FYdHyjiL2VSvnvkT8vhduVt82SK9fSE5dusD7tWWTYGrYznVU4yBcVSLhcfMya",
  "key31": "5tjtccQgdsbJAhJ8TXFYJ14UAMXxZ3bMvUUNLGdYZF5FjQjx98JF8DjLcXG9dKmE2riseCK9iCSdV8YfvwDvLKbF",
  "key32": "bHe8bej6Kybjwd5no4WuEFA14kwaEbNCYj45jBe3x21ZR3qfG22CLZxCcBL4n6UQe8eExWrjQLhPyUbZmmLe6Pz",
  "key33": "8Zv229veJPY5K7GCismx1fpSYyKiMDtcubXS9qntKqk1xNhe69mhGQPYKBepJqnKvNoXYTB5L9vbH1rG8ikoBgb",
  "key34": "4tzXYQoQNna8SLbjBhNcvH5UKdcEgYpqBHjBN74HD6NPm8EdvjgsXXuqmBtim14AwzVN9FaGDzikaq83FCmZqxFZ",
  "key35": "4gej4zTr7aXZMoWwRBTayVHhRpwt1FwAWyC5fBt6uZJEHXYDSdAszEVvJkjwbrFKMUGodvvuGsXE4g4DJSijVYyg",
  "key36": "syZTVFQb5iXpg9mW6A7CuAUUj2pfSUakJCrYEXtFqmDhvqQnBNKhwzosuSgkjs5hJ273czWyR2XYjKisMD6oSsb",
  "key37": "pQW8UdtMMwYHUs2QqNJcdYeaHz3Apk2u676xF5Zia1CBmZR4NuJW6Lq68MZKajcrcJDEBM4BJ6L122t4atFgzvQ",
  "key38": "5AaDBCPrZWpNwAb3mhMKxtJnYW6gftWszm1DHZQ1iZDU9WRmUhCUUWQ28DYFRbvZZrz7VZWyCUaTwnxXhsQ2aY1N",
  "key39": "D4GLQaednEdS3UakZ5bM5JJCzPjhcNU9hHVPk8D54hiBNnzRPbDGGPWUvxAAus6fQGLyyhTj4yMYeW9ZRGfcM7t",
  "key40": "2YudayN1Wt3KEUn1mWp3Ftv98ZrUkjHPy5aCShzvyQjRJ1onauZ4NN1yAjq4PhXZkCBPWXaKiUVTkx7W8STVxjP5",
  "key41": "3VtJSk6MahMNZDcxfsdjW8n95vJdhbA9SHUZ49hvyzThfgZhSDs6kP5ux9QCdeC8dmTT9wj8j5z7yrXERvpquE74"
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
