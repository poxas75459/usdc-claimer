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
    "VTdkikafTVWgZKAt2MYaY4CpSbqiWiNBJ5zooKCBqP4djyudpMJUz3Zw9v2YKntpRb6494YmvaQvWTqKhaDj7Ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rPLu6RyNWNcopjSKG5MFTCuPFGCA77bXXufV3keBdfUAPssdKLYB2zLdaTG9JZN7BCx4hDZ5SxBjFEcKoGaE6f9",
  "key1": "5nRxdgk7jJFYbR8NoexxxPMgtzCgeDku7JBfrA4qF388wws3tCmYMsyiDsHPfEFKXYfmNJZ7BCiv1oz8hoqpH81g",
  "key2": "q5J6fRwgxh4FGnJDUckAh1Uigu88vx6Pzic4GW7qVwXQuWRTZS6nPmR8xT47uPt3nZqRuXVq7okPYDtPgF29QcU",
  "key3": "3Nthx3BXERjTL1io4RAXBNAEwApiauSZsq3xuyhF76Rkpz8RsoPLSLMoFqZGY3CV4ogxPfMW27fuiotJBYu9qSsX",
  "key4": "2yp5a1nJqkCT5YW8HMbNmEsZNsRixikWTd3T9bB16mCdnAX8vTJqiKQCJiWr3ZBr9oNRdjbnpwKuvMsuUxEZPGui",
  "key5": "2M1rDqCSxWqmhhDeefJSWddKKHqcy2mApjqnrCTMB19Di2Lz5RtA8CRMAAz7a326SqBmD3Ppxu3ioW5uF33SqSvd",
  "key6": "5MofxTdVBGDXPWS3MADEWvc5t7f3JUB7WFXjQSwoqT4MGMKmueFZGPxgAF96aZm5wR28Bi6gD3x89guU89H6cb9f",
  "key7": "RP75L5WwneXEQLS4MaAxSmEZbiZ4JLWfQNbwz5xwqXiiN1cYvrzs1LphWTzu94hWZVueggXkzy77q1yBZWkHKvq",
  "key8": "4GQo8ad8vUGABXu6q7CXLAmRsco17S19oGr2dMC9ecfGFAemAPhvmQ1wjgTZCwQVCkiyy3KXiP5VVJFBA2Vnho7S",
  "key9": "2XR9VJVnkhm2dNFwWUPgb6G2N5VVS6KMB6z7PZzdyd1UGMJcav7b4NZZoVMWD78P6o4qBEWmzHQkuMHLNYGGhNMF",
  "key10": "32iS9FTBku8E27jF95NfcK1hHm8vmQ2a8LuwaUjSeYc5ScoT526DLgycQ1GYeKtRfxUbEd9CwB4qrfJEuwbaDk5M",
  "key11": "2JbP4NxuvP6RoTXmzZLUw2qctpWuKsNCKMQ2rs5ZtcRSYHWmzpp1PcLfoNx7SWa4NmY1gWn2zTeBJithZorkHvU5",
  "key12": "3dn4JhRqtV5ASiswU2iDmLSTXvCS729VZckdEcPZST5VNTQSt8QhFigCBzeteGa1ZudccyKw7DC94iYThKDcm5jP",
  "key13": "648nkw3L3ZiqN8DwAEEHDgqcvZcZ8dibZCgMMgJD2j8k1ydTJGKCEqQyYgxJ4PRWAi3Srm9wbzZY18e8GKY9ZA17",
  "key14": "28kZKuMRtXx1ZVnunwmfrTWhhCVwTTixbs6nCXnGURLQqwjQ5EqJqTA7xEHMTeE1jnSfrwdohHjbLU8gSQERP7Fr",
  "key15": "5vefueX35CUG2BRZBEtRHiwzZNX5rcxKYh4LLLe5zxmAzrYuM1q9qwLWYxV2jEm78wweJ1dCHPcmqrfP4gVp5uAN",
  "key16": "2EddorgaXUemCYnEk3McK16W9fbEM4rHNyttJug2QqzeMgNxx2zJJyWBd8h6aGbWAXS1Gg5MUb6xEwbMwobAMoPT",
  "key17": "2xdxMT4PkPj1Mg4hwHyHXe6716e7N9WRzhRjd7PBBi4kUgofLJ3eZ4zuXGsaM67Lisf4Kv1hs7DcFJmmMRPHEpjX",
  "key18": "3EpqdM6xPcNhsdDBqBWjouq7mn9P26bHhsbwiwrPjvqi7wdnNh1SJ6A6bZq1ZTv2rexVv2DJiMNdkx3o1SiJxXnB",
  "key19": "24V5YW3RrcTM4oqHRgxAHNNe7EJ3Skm65rsDdjvn4roj4HrLGsfiUfZJFmoJQZPcih6ekoJgAsaSKDcq76FRLiTq",
  "key20": "4yv37vLMkZBKCMeuXELgo4q1piDy7msp2L4LYgjRAj3VC4E1D7DMdU7p6ep9cmktTVt2UXW63oNzJWVysG7pfk9B",
  "key21": "3zPxWpLAvjsatrjVGJzHQkupGCMRFJpxjBXg4oAkbQbnRjrkHzJLUnSCywrXXL3yYswFp3sNaHpUr1qhCz8bKf9P",
  "key22": "3C7EG5zZMt8YaaSSnVeRVTNpY3Z7YNpT71xdiYv7Bbntj99rd4Hih1dukMtH4VUXs6Yue37RL6PUegohnRkEyHk2",
  "key23": "2Ce4JwGDMXteDwSvxVagMEsWXVSHkb4TKrbrsy3euiW4qTAYQrf9x7tEYt3yb8tcK7kZKfEQLGcjGqvDM5J2KS49",
  "key24": "4HahDirZaSnn1fzuH2nms8ephBjtTQYRuEHSN5hDsvX2iVyDKRXchR7ksMXavhP88tAuhSnjWKJYFAZLh2yNCViz",
  "key25": "5touL4Hki6XHYHoXi7awBHqke5p9LTg8EsU3RmeXDwrLXuo1jvKz5sGjqbTCKa9tTdWDbFxLQnim3v7KrFDLURAx",
  "key26": "5YDRQZsFtJ633Z6hHqNUXJfnrFTSEnT7ejdaQfmuEjhjywEQ44SFi55UwXz4ind2JzehAeLrWVnoZTPp8CcmYQPZ",
  "key27": "5t2HERJjqxsZ8tBQDRXAFDnMCihLnByuKtTswqjF7yHuuK3BSQeRAdxyDvymb5QED8MjanMCV4EJWuU4D6t9auyw",
  "key28": "4gUwvckPQwscEEZfNDpEHY2MoAowDxnJJB3GkbPLjMe46K8jKxfEZpyUP5zaWSyj5zafkbwHkoSoog1xozSneBq2",
  "key29": "4qUUXjqagV5L5i9GCuDLzHL8vCUbm8Fre3wV7hFRSqmbBMigNq56Wx6xmi3yLjrpzpwbfBDjXpEsxcSMaRUbgGAW",
  "key30": "5CvGzWMCQbHhVGgZhU6HCjrKWoURYQRosxph2uTTf25Ui2MXP1zLhd3DhCw5UbijsgUrdvGkkXD2bvv2cQEbKuWR",
  "key31": "4cHD9BUccmhJH46Qxgaq3VRgvJnvn8b3c3sZfpQaecmpnAXa2CHjCTf1TNcvBLio5FBU51Yy2d25gnBRcDHJRdm3",
  "key32": "2EVrKxvHRnMPK7yeYRSj2ytHyAs8NfFAM9AkQqnsYq5bffvFV52RWSTWDGpZiJvcTmpTuiVEUENJvo1S4kgPw4EU",
  "key33": "59LYcDceeM56n1CSn6ia21KhjFPeWifRnYehbVT7dC3Ea7jmmMsfo7uzcYmiUYxzdRQh9kuYGo5pEpAyZjDGZttD",
  "key34": "MpQtUmdKm3vnQuACQGbwJc3G6VPjGST39XLrTEkqnH7HL6S9wScSYp5GgsT52pnjbxAEFyh6zSeAdqUMKPgfCDt",
  "key35": "4eCckXq4PpoBmrETF4ih98KqFuHVm7bvY4bTdttw3wXM9zmMVzj2SS5gY8fYM5FACGfMWif6CtPycceXDN46pomT"
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
