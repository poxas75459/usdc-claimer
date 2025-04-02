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
    "2UoKq1FoNr4tdDtcJsNoMvQm6Mmg3ZCaf5hSR21uQ3Sh2ZJRh9J4S8oc9VAzVM9kDN4dRC9DWQp2JK43Un2mGfbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wPJ47wyAGdmXmxPabQWukXDP1dR1pm3GTk9cfWkcrzMKcFq8zMjVq1rtJZot9ZpYbJDwM93cT7L22bMTxEvLRDw",
  "key1": "3rqCe5mDp7tTdJmqVW9xUzxN69o2GMw747e4v4CP4iqGPUo52PAjBTSyjG4qokVbYjfL8t5zg3Fi3kDb2uCCLYnt",
  "key2": "5p3ZBNJcHfmACWkLYhMuBPCBPQgYzmeQ3x8VCeTLg55soSkngR3g3Qp61FqThtBm7vy2CwFdEmzjEA9njPUceiML",
  "key3": "3cZ7MScvQgrjfg26AsQwJtxyhQkZL7zqssZncNhvXmDvGv9PczXnnnuAUD6cBxrUdyomvdXiKtbZJUyiHNF9Heus",
  "key4": "5PtKZQM1QnjyuvW9GnwUGLtqBpa4XFvqxME2xi6ruAJ1wbtZN9PLfx2qhkJcpbZm975hTGGkdAnpnE3nvsrFjKGY",
  "key5": "ALWZhq9UBtXfAEi14GuJzuiL5uhmVsiZq8nQbo2XnE3xkKXscdHcrwACPK7LRs8BDaPJaJGvAFEGMcGZqa5At7i",
  "key6": "563kRqs4U2F93D75FBXykcYDqHBJbcrBG36aR4KGXam8L3MT7rbeEZTi7M9NvZHfqVDy7qe5Jht9kiRBjqdTUyrL",
  "key7": "4PSVii6vhhViDRPBXPWGGwy6UaN4ypcAtwhtYgXqCeqQzFUjWEonKqQxBN9iYVFXYL87ZffF1DeAXNXtbdHY31Gk",
  "key8": "4yixicDAGmXzXfmLV8Gd82hpou8prPXgCLQWUXKMrVxrNGG66ZCsA84ZU6oqRvLqnKufJG4xPk4eE5rUZowMauDj",
  "key9": "5yGCeJgXcCjuSSWuthCTNZi5d98qxYg55HD9AZuFHVy2ymLm3BZwCQ8cKTfggk7xrBzJc8T5q4z1GmdHkYzNq7BP",
  "key10": "SpDEEueUvmhonYSGp7xRAxvJ5EmkiiC762Dhpt9C3j8rstCKPuopKrnxxvAQKpdn9XyEtyzXvs4KBdhH36rXoqn",
  "key11": "n7UtMJnUv4NJdApujde5Smby58ko8QpjBfbLNDgsxvKdedTcJsJX7Wx5Zcwu45qKhsrBph9AHuZKYwrBMEhz5PM",
  "key12": "4GapE83fRrUe6Bv11wmj8KctS3FCJ7fy9kUDiNWKPBfVgc4pbVNYcjaS4nS6NLf79pwD8uXiZz1BfRTgNTmmPERS",
  "key13": "8mnL9wxJLjjZ7yiL5xjYUE5Bs8h8co42t5GdDqvkVuyMuSoW6UC3CdyMBwZBNg9VVnMozqYn4EchyBuBTGmJQeB",
  "key14": "4Do1S7xX7nrSxUkszjx3Aup86Zcim1BdncqJGvfQobp39pA6QpCzomFG2pLGyXzxCTeWx3hfUQWXRZhgb1qSN5bU",
  "key15": "5QLYDWjTN7v3b6KmuLDr5SPgrXsJaKXTpUWGvPxFcoWng61fGj2X2LGxeuTxEMBvMJSjPXVLAQvmWDcrBxoXsV5o",
  "key16": "3RVpicdJKBgbxFdRWAURHuqLF95ExzSitxpzRAQj4waJWM6eX5vevNku6GgJpYWnwjgFACxGyheUvqYC8t8xXRx6",
  "key17": "3P6iEjDwQsMvHovKQcupSboeXRWzMmbihWhapHZD12ffjPgVRM3u6yRS3UyrafxZbKkWrPFxBUY16UbF2tEXbaQP",
  "key18": "4BZ3wDWs9YCkcnoqtuDpgaX7PNsxNzbYWG33E5fWzF71d7pN7KNptu5dH6NHoJu9EGa82nLV7P32LtqYKMKXmM2d",
  "key19": "48MQfYLXbB4tQdcT3xu6D1iuS3NmV65mFxaTNQNtedUBgLMkDm6FwvNr4dDw8GpsQU9iDSUgjieAyhyTNvryRgcX",
  "key20": "b4gM6W33YPpqTWLeLbPBMxSsNAiMAZW4Te6MrFouSM76mkrWMcBLoJmL8SDc9fZ9gUdZmxwHPix7oVtg2wH76bQ",
  "key21": "sf5SWJ8dt6i2Y9pkLHnq8n89o58a59RAu26mwh1qKPsYRGPkCKbXt7UjKDMepCU4nk7sespNpjEhKkXcr3Gh4q3",
  "key22": "3BzhLUx9MyYPFnXjBfMckzmrwXrWn1Te3QfoDZNj5y4cygrJQNzPHztMS9Ab24G5HGwYQ7xr2NsTYVw2rm4DqXzA",
  "key23": "3pU9YjmEcEyCfYpefMd5NJCSLxTv7ZLD6fctgojz6zF5yM6qkp6BStqtCWRgj7Xt2Mx2TUJFuYRaFweAbZdpLtie",
  "key24": "Zx6M5VKh1tyoCzdHhzf8bsrAg2onH1PPGo7hhuBb91TGPV2gdJ5cxNYiJ1LW8Lt1B7ZVDxqFGY3J6s2LPbmj2aM",
  "key25": "4LNBkx73w98sku47dyMjbNEcsYBoLU4cxMa1Hd97ntWF4JC6JHLYGKoqmkdPS58vp9KijkykaxW3SLcjiZdijEWk",
  "key26": "371LUoatVbwtT7xSveEjUiXwUBvgNabDXatrKj7C5u2WP24EQ8MPUaPtv46EcJnthEokQ1cNRtedDgEK9nPWebWr",
  "key27": "4p7HAVRjSp45svTgjkBgDKm3W9kiebGyB4waSGXzSUT9LSx7LztmDBdpDkdQa1K3aaEoA7vRTz33HreZxw5suzAi",
  "key28": "5NZzw8F36Zti1A1tMFC1wiah3NEid82RHqGPKwgZkg8NmbhDrnx2ux2kQJp5LiEgz9fvC853bvFoJgYcm66TVJ79",
  "key29": "BtqtidAg3ViYckFcq2iAaxUZS2FBBZGYbof4FC1sUSqW7Uf6NAvNzojdp7QCbJVskCMKGRk9tM4yfnKaGSNQYiu",
  "key30": "2WvAGGZcZ2XnrwXiRn7RrnK9jawBBgc4E26VEh4C6B8qQRYhAvxnTgUw1iu5hyppcHgwSTd3WGaTwcntM8gcWYMa",
  "key31": "2cqfaCft3kZ42ZBXZA8zXRhv94bgE9iDi4LF8QopgkZEe4iN2xt2Y35xQhWSvd53cFxN5y1n6tJVpxbqXy68zKXp",
  "key32": "77rmGvjWTYsC4HfhhCXijquLpTzEiaxCPnPWuTUM7aMxCDpoAztKP79yRuc7xJHtQ9iQ4Ja96V1HpXUJS8aNwhd",
  "key33": "3AZimaQ2bSTfYUgCuy2FEe1nPhBWpdJpFpSmMYjfoEFtWTGRVvMJ6dEGAXquWTGdjRbLQMgV99yst2DBnr3fWprj",
  "key34": "5vEkorJuBc4x3z7HnALzDnYuXsKqJrDAGXbQJCmiEVzb5SJJEUhdGWKjNbdDtw2o6m2e3mxFewkLHBVqmNcfj8VL",
  "key35": "5T8WvthmSWu2FVxtybDg4iYEfmuJqX1EwKj3ZFzkvCHfWs8kUxWAESy4trBZseNwEJRv975csouBLRw8SHAK6E4A"
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
