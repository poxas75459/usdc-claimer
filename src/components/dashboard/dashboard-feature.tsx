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
    "5rvPYjbir59ETsY4haUw1T7Av14Tj9haTvzquyuDyaHTbzb2yEtuduM3Y2oxNMcSr2p834PnB7Tp7323RE7GgEQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q6fSfait6RAFgmDtEMYufggnkZJMZuqPNgVePhy5i8MUjJ3iTQwuQ8nv7Did5GviUUk2u14BVD14chwAvac4cVN",
  "key1": "5kUfaVnERTvMZ72eomrod6f65jRknjk9xeY6JBQ9MR3nyoeak2DGZmcfp4aQPL3f25AQkQD2RXxePrKioBmFnugH",
  "key2": "2EMTn8BFsh1NKaeaWJdvN4GfG3dAZztKzkAwjYMSV4EQ4nmJyfzAdoGgGTzAB29vbLm6H6Vcrzqh25jNpfTGLKcg",
  "key3": "2J2TPMKeuK4ki4u4j33eNHSxAA83NoZsUYumkmfnkGgX2cmzy2XiGuGpScQeTRq2Ysh7hZqryrMzc47tJDpk126U",
  "key4": "4hCcJUmjNxpy7W7AwnYGK7awWZhqb3pK8xXcwDbXEonECf8g5mbFBpLQLHvKCeN7wxEYGrUhyTsitPg1idGsq7XS",
  "key5": "b2y4vuNwe9GVuijyN3x9h9jFv5FKearsptGop7vmVR4KKMiaYAfRwVVVKefAmSXxCwSRYoJxPu1JNGTUnY8rF3T",
  "key6": "5cctaBMx26NRyirRCufBzzyLq1nKisyT5Xr6Hz8vuM4wGByNbTwbWbzou2cmyNyAXZDixG3xnMv2gdVzDeRPkag5",
  "key7": "CVvyUZG9QP5gwfEceEiqgK9ifbqyvjARD9zZKCtmXSBxU1jGGTuAeWgsYAeBcnkYB5z9XqKnd1HdxszbaUg75pT",
  "key8": "3n6JMcTHNFSRorN4dn2KY1ZCudjx425DTHgBXdWJrtLpRTLcgpCefLjAzAzZ9C2p3cTZTpUtpUERZ1x9jPv1RtKv",
  "key9": "3wMp23M4sxcPPMJiWG4pmBemXtqwz8W5ZMHMqDhU7QbjEqodrGp4YnEoX7yf96iCE2ejQc3SpG1uERvYSoxsBfC4",
  "key10": "CujEyDKS1HVkzScoLVA3YHkg1hx5aFqbxWbyU6qVq4qezcJ5eU61xRUxDQMH3q3JJ5jvStgH4ZDkqXTsRnraDWH",
  "key11": "5CJXoAqqYsxhWkKRC8XUtPQ4GUMgbF4diti16RiXZmmbRYz3FqWGhmTFH7BZo9Ne6mY8VFb7GoN2j2VgWSX4Rvvz",
  "key12": "3QZPJLhsDkyrXAhbHcAtSM7v8criGGTsTvzjDFdnFqpyDvniGjjRMDU1h8yrADJj8Y9pJeh5cGGf561cWm7gPNzV",
  "key13": "2WBRYJTUi9ikc49dA4kfVTrQkDABiMCXrgH1vk9p3Z5QZPjjdtqT5Qw5LkaL8n7VvbX3uvk6tBKLTyAn1ytQ639v",
  "key14": "5BvdnEDERfqS56pdNasRZT3pXmr4TRS4p2mbhXT4HCpBvbuKSGFCmK7wdZuEStmEyo7Xhwq5AgpEJqo7SsUrC3Uq",
  "key15": "2JfWjqJKbE8DHFB45Z9akaGgtEbs7oERGR95bRFLN2VjU86Zf8kCeebH6KK4zhjNbcns2RaAqFcXKYSCYCjPMkq3",
  "key16": "3EppNtGS2HTMScxbmcEpk35v2zYLbXQw3UsZnny2iaRwJCzgGYib2mGevp9EjCJhEdodXCjTLVohxzA3FaqV6AhH",
  "key17": "3XoKvUhWa8BD3fYVLxEoi1V7NRM6makgVEJAVnUHV9qArR95jxTVJfjgHws5r43fj7Pxk4n438qXj2y8rMrZ2JPn",
  "key18": "wxm29j1kKtuQ9LaKuNfj1pxWhReRgCpQmjxTAXPokE2PmYYiYyt8Vmgh7HXaZsnJhKQWFZGrUPKyxHP2g5RLMBX",
  "key19": "3vsg2iFomnLUQAcG1BvdqmuHERHecdsAnWp8QN8cbUAqgQX69tWNNQ5JwhdMSJkbT3KuCDb9b3TBakiR1v8gPwfR",
  "key20": "4UERDh4Fp5CDb198iC8iCfto1bk8fRo6ywiLJCaH4AF9XKTQ28eNG1puydnA1cta9mmd3SuX9sd8uqyyozwfg1hp",
  "key21": "5EW29n98LAyM9BFwTU7bUjpX8Q5zUZa5kAPMTCqqztBzZDWfpUdvptVRft18XSYYbzn4eay3PAJN5MHVAYsGsgk2",
  "key22": "JNVs2wzw3mp51ULoNa6K5xtfRyQTE3YFCNVReYzmGax1NRxDfAxb7eTMFGo2AgjFuygXtLR4YDfvz9ev2Z1StWk",
  "key23": "3exDjeHobCENFc4SvCNnguZrHSoED5z4zjW9KH3hdESW2YX2942PLpqj914NossMryKFvkvNTVKp89nMCUWMHuPb",
  "key24": "43KWyUFxgUMSYkGPwUJBZyvtyBUpTpMq7HktGRXsjeAke9eSzz4G5iRMCqbcRw5EgbBND1L7Usm3Xrb5UJkqyCYY",
  "key25": "QSkUSRgyzjMXiYHHzVC66Tz8fCBo1o3UktkJ49fxT9M8wzTyzyx6EL3fWCuiap7cFAUETK1GaFym8QctLSuZ82M",
  "key26": "48MZbdjdmWghFjWz7QFcJisMFDZLtFchbfbQJZFmGu88CfyA5EBrcmXR1HGLqqYrtKqAwsdgD8jMtagPdWccNvXJ",
  "key27": "3whYNNscsAMMYAqQF2nMAGjbWK74sk3HSNvaojyLSeHiJS5xxt83zmqfr8VDtdSKQftepgqj9e6Mracwwq7u7ePX"
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
