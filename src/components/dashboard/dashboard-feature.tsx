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
    "T5ygTyM6cQnGVw747rUFsycgPQzHuZ51qyYeA1ZfL2ro4AsNs5avEKmMXSjb2AeJCFeBqodfwhbEtQr6btT6PFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49FPDRDorNU4UCpCkftNXbKRynm37teS17yuuAtL4ZpnBLT9SADxm8ckewF8P7TUaB9aDF2hpcetFc9acwJADUm4",
  "key1": "3vLsf7cdoroYLLW8A3gvBcjHK6LAfheDg3tCP2hodFUbYX9pxLD1fzEd7ainDgCacQCAz3JdFZTDx2ZZWFu3eALQ",
  "key2": "5jtpS6WDx4fqL3Zp5MaLiySP429GEeo5WCV9t58Q6ZuMy1dv9JpN4mkKmFwVYsRxAvsy4yNdEgLNcUAqeqhEuEsQ",
  "key3": "5GZCfYKgxPesaXAybyE2sfEaA8KjGDaHLfos79TW9riS1knont9hcs8qnErbLp7DG3Sm471SFd72z9ZHrNMoJ6ry",
  "key4": "5Q9QCvDHdAyoGP1yg5MFd8RUYJwTFhaFBh7yt2wu8mW7nguXnrc9PpEFPePrGv4KJqgPHgcGWVNCAXw2Eh2XC2cV",
  "key5": "2NWdM6br714L924B5RwbE7pSVjHBTy4SwtLNU8h8dJuhvMtTVpS797U9n4hU9Bj5DkRznm1565xGrKhtRqhgQ6cF",
  "key6": "3MWjkV4EJGfiufWRAFF51jvfLJcNNFSkvRGbruByD5ZJWcbiNrgNByzG3yxF7jZBQprMjm9xbjeon6t4sbGXGgL7",
  "key7": "4EpWBBmo5YftVcfr3BWucutL1Qt4et3cKBP44TXGRdZ8ApXwnxWbE5CGfqcFkffoMTCC1Hw4rLyMang5C2pNuaMG",
  "key8": "1vmttuctXnL3dBq175o4ce85KJoXVHAcJuhrFatWHvChhZ1e6sMuncYgA7rHFtSD8AUw79ftcMFTrEGgpJMYQga",
  "key9": "4oTkZpBvCmENhpm5Cr5Ww8bKptXXmtrQKnFbTzyRCxQs5LhkbfQ3oF6TWDdh4X8LTXavkRSH79Kp29MSPmzfbqhY",
  "key10": "4siLSbbYj9i6cx1mNeoQTwU8UHYMy5rrnxMkZWJn1nFtbhEtJ9uG5GRmQ4DufMzHmqx7okLcztXF5KhbQk1QTvtd",
  "key11": "3EZ93wRns1zBU93HhnuqSMRUaZ69D9TUVs221eAGv5SXSzBqstuSwfDc4Ggv7C1oF1kgZjrzE6nXDWuDsVJfRprK",
  "key12": "3ANfGXY9VRJXEPbY5YrT2J1MNWayW35SkA6pm4eMPqNqpfkUkF5k4fWLY5d1LVEeGGegunJr1HSyPB73nmrmPFgJ",
  "key13": "5FtwhLAFkTB8KUsWeyC7qgZzyoLfXBAGzRp1TW2zfgaUBnauANj5mCSYxWPC6kWK9sMwmoZGRhEumfuX1pgtUzLm",
  "key14": "2Ycfi6y5f5tZMtyR4pKUPZeDPDcK2oxj3sZNF2Yas8yCv5YMDeEWRsKduVeNBBsDKsBeceJFZzi8EhwRKwEDUCh7",
  "key15": "2SqeTRpgZSfG8AbZHwyrs6GuP31Ao2MPpTYWVzNMg4yvUEmeZAxpmLHnUSceneZQ3vW9vPsD3YQQgJ1EAEuWuGLS",
  "key16": "653zMPdHsagN56XNjfUqxqfejHob8sh64qouySZPanruUkDRcdqXAq7PuQYgVUFJE6bm5pxQpNCo93e6UGCyZZV2",
  "key17": "2TqsdBiZr9RYNJLHnsYawf82Yqfi9wcHKCp1VcxYrN9VfSb3dnvZ7yTxAoeWdUW3GWAcEa3CUwioS6APFYXksJqd",
  "key18": "47uvAkdomUEgYbxWV3GYQB1628JAouhjHNMgenTfqPsjBJuXiy1svKSi8gPpv9sdZmzgCGr4et6fPwB4DetoYbMF",
  "key19": "FgBdaP94Gdyf62em9zSS2ZpE9SWQ8Pa2RUKuKimmvaCK47Kvk9KjCsyYCEBNBgV9HN6HbrBbFz55tHFnwuUiQQH",
  "key20": "29137mMsZ9aZRrxBccsdTVP5cDrvPRHvDXyCyMUGW5ZTNHJiNZ6BJTjB1eZcxB3z26FZLWjezuHGpPXT7XbkVvsf",
  "key21": "61rNUnnQkRYcnXmHfCKXXEDxFtVpmbPGd2FAQgSFKnnmWMqos5onQGEaJHk6wyvxRFQxsnFbjJxWYCdqByJWgex",
  "key22": "5nfsyx8gPzuSXzuNZhj2T9LCLzM9AxRiAZpCdFyrYJVqYTAYJG5rSQhHsbZo1dPhaHb7DW5Zz87p4ShoubUtiwMD",
  "key23": "64sKW3ZdPwNKubRUmoX9FoDUPp3qaDBwdpGftNUVfdV9Cxy63wGQV77iSmoQzSuSLc3XT6vTc68QuX8RLcuNFxTP",
  "key24": "3hNQTtotLdp8Bcg4uAio5ts2zMjjsJji2rxK8TEQ8wBQshL6CxJzM4dGE5x4PgfBqmuDxWtcQRfEdbuJ5shrEj7D",
  "key25": "4DPSYxmoeSZRtHcqsfbDHejkLaqvzhThS4exFAZdudsoGuZtpDTfZmAra3A6dxZDs6oyYeAuYBUU2GKBCPgxxZ2o",
  "key26": "3ConLTUZmJWrSb5tmqB4AYV6aVJ1pPCGRPT8uNxybLQ3HxBFRYt4ArQrAvEtbd2PefaeKJb2qtMtiLVUYX2XuV6N",
  "key27": "4j7JvWPqSz3ssUrUM3RszmRpsNohoXo7WCgF7NUsrhgFAhJTrBt3x26MyzwcvL6oVjmiXHZBtuJa3Ms6GWWLkUQs",
  "key28": "3ysXfmEsrTEpDe1YKxLT9GF3zCsoq2oBVPQ3fXRveun7LsdW1gsvrxBjrdqiEa8CRvuV2phpT7VgdCtfUFwvzxXw",
  "key29": "2NgVddDwiXUcidnKxXNULAQ9E4NWunACQ7YxMUj4mCGF6TWJGHDzG4YHYnXafr3QqTcp1gKKrtEyj1m2dX6MXuVT",
  "key30": "22wPaDvdAG5sGP3vK8SbwJmBTU3nNFY2XJXJigXH8YfUto7T6U8TaDsN4rbWyccVjFeoZaPYrz1ndUbsfrSK7X1U",
  "key31": "3QxA6dM3cnh9zAnN6NRatG4E1oSESsVbyu3iQumCJFt5WAX5xJyaHnFtvufmaBVfQ87YfFo6eBPSZEZtfoxGjWUz",
  "key32": "4D5PAyeBpv46UNY95jMYGxHvMnZxcs4c9YXaUoAiAFBvZGdjh9U85bYnwP9AZBiuiJxTzephpH43az1eiyB33mGV",
  "key33": "s9uW3bKQWXRr3Sh4cJrYaKqfp3JmWsVV5bE9LEedb4P1UJsY6qPWCRMNvF9HPxYM7oPQbmrKG9V3ySDEw9cUwHG",
  "key34": "3v95V5Lg8WFGUUc4gpPkgTz251YfKEKgJynA16MvffAZQAbyKBpbVWECJLrfQmzSSEpu4H3bcRQH2tApfMBtK3hy",
  "key35": "63twzvKSTRoBLE9PHcZLfFTW8YrkesTc96gJ6yYw9z18aykkXPwAmzk3uPDkGyUZUQvU4DXSMSFv1zRLgPNxMmBS",
  "key36": "6S8zWZgqcQ4zoTnyLmjzASa1AQwh65fc2kwAVrhA7UyjW6FeU5JbtuhXAZpSK5iNSicSiE5j2PEtvLkTnuXBBe5",
  "key37": "5iTp5K35QmbCw36o9zRgCvRtXKHME4LeHJgF183W5kwcHRXYCECqin8YHjurfeEgU5sdaxLpYLosPmnDMerSbsG7"
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
