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
    "38grbRVk9r8CXWJ2Mig8vzRTrfK9fv7kRrJyfQjuLcvWNUcTzcfPGUvDV4PhLqCtwGEudmCzDmW6UyAZu41Eak4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GrvigerD7eYjQ9a5UFcaFvKpRhuFvLMEd7fYU3xt6WRMkTZWSwmsy41fDgXau2a3DRbNfx2n3BRkZhNf1HSCb8Q",
  "key1": "5NrpB4HnZx7EQdV9LKZ97pF1DgPajfictVHwfi6zBrSLMh8sg2pMkVzjkLAQy85eJ7nrb6wa2dcG1CbAZ3SY9BLo",
  "key2": "DgBBAb7JdAwiPNoWArDNnC5PpZ149rGr8U9qrbxrcGEh97fDiwpD1Gr3boo5dUSDCWgJzibWpdgx7fEmNBijGk5",
  "key3": "632dfsg2asUQfthKfW1gQ6f27iWpi5TunWYwMFfqnGmTGjVPUVQQhvdLd6HhcLQBbgFwjw3iLttfBGQ73wEBTF9i",
  "key4": "62NEA41VsEjktKqTtsdDubSS4DqVZwNrwoQMkb9uXEsjmLMcqdXCRyQd7smhUZHSjBc7SbkgbhSnhNsPFbRj5xV6",
  "key5": "5kNMFngbvFmj1eVNJmHM2Qba2EwCGjvdMBaz5XM9GteKVHdpcsKZh3PJ5mY5Kdby3jmHN2YecvB2bUEJYJxqsdji",
  "key6": "3u9HnMX5EgFxwoUB8mo63HvFJ3Tr1Q2xZJKwwQWM1nvCmm7xDeRPZTdJSYBDRpS3JCFMbyGMfHKZ47CcqqKcb1ge",
  "key7": "3pnbUy9LwM4d24qJVGgMWK9xdpzh8V2hpR7DRAyqFEjMGEtPuGDZG3fRNrR41AXD6wnZzSMjqTkNwEWWqUnXyU2d",
  "key8": "4xZGs2vUXBb9YaV1YydsgnLyhNMTDMoLFjcBV19n67NgpNQBnjoMt2yiEQeA56bBckukTmRGT3jZHaoUNccBEubH",
  "key9": "2PYTSDX2kahGCtxQxPqGrJw3FGFpHHzBxh75ptRfvoui5XQdrJRdHjVCpQT1b8eaaqQPKgBj3uWUy7npBVA6Miu2",
  "key10": "2S9XCywwjiGa3aAbc5vnZgH9a6PKAHDS7MheJJLoGX1MtL9kcvijALGmHLsEwrznaddhxL18VJh7d6m1kegsF92y",
  "key11": "2HrHPhUK42gwyRcRXH2hGThfE6mczSuDqEDZJQxfn9fg6UmG3zQfPZLhZx47KJf7a3oJykMUAQYmRMJChTojdNTE",
  "key12": "4Qu3jvchVNkUQgfGKMip5GB1NEFagyCPLGrTSwyRcX1NDNWZJtvkJ4hUcCEhy4RGNxcGGoA7r57ZnLa9AZTzi3Wy",
  "key13": "5ozR769LFT5iysagwcjep1UaGxRwtyAp7WCRAN8iPGpS2QC7UvVYXKDfy8kuYyDioWAS1dE1uFAGdXdo7Xrotqo9",
  "key14": "jszz6MREeic3MNWL65MmWno4GW3SybnAa5XQNzvkr6RSdxCT79QxJcHwSBWAXu8o9U6iFgGB2sE1VYGQQ2hJrNS",
  "key15": "38FSsjA3WbG44vCyZ4x4XXBrB66KFLPfc3HTowYRSAR9We1AXt7UieFY5NS96su1yyp6S5i8MoQEA7cLw11HTEmZ",
  "key16": "2GZUPeEjoYi4FmNwtkD9MrfVjZJnzFPEWh3kf2k6dsoV7Y2vGn2rqMWfTAPRLyJh48L6nChN57jZrhuy125Nieg5",
  "key17": "vuPcTXn8b16BxcYaAWEiWJrST4kqTjtuqpL5ABHegkoJ33RwdF23TRtSy44Sohgrexr6QFcYN2LUCUhCaMAacXM",
  "key18": "4xPyBcR4icQEPXkXthGNLLNXycQBa37H3F3vHYR5ivKtQ2i9ApSX8YiJVJBcmwM5kn7KqWkfhUSPygHnvV3ACcHv",
  "key19": "4fSqTd1eHzmyXsWcZbMcjzuUkcv7muvZp9RWEnLLYLJtKwV6uXwhAHqtxXY9vJC7cjfybfe1r3LxR6rvqxcNziFS",
  "key20": "4BBtLET5LFEugXnavAwDDiLAUYvbRhWB2KuqcFf41aXe9JKgh5G4eggwBX9pdui8tdHrYneYQGfiVU3p3B5JjJyL",
  "key21": "5aT5Ew5VkKTCLuzwnHqRFrufemYzBJGXN5E9ABFUh5yJQNEX4d7yu37hmS1Sgia15tbtRpDqvWcSs7N4DdzyueUh",
  "key22": "4vCZK6Xx9PU7F6Nns9Exw4Kzqjd9qZmDgKVUCZbPvbqdNE2KMmfwvFi4uvDhGuM9VxrQ7PYD4K5FFUWVRpoJwZAH",
  "key23": "4wWoAfYXAbMTw7uvh2kgau5icWcCeeUKkQN5Vc3LHHXyPKEBcPS3b8kvyXxzFEMJ51YVvC5kHjZmDYRyDBdrf6gS",
  "key24": "4qFLT7JKisDcw7j8wTJYN3J2Xbt3jcmpZbjbY2atN32J27FYHcynF2bgYQuNBEVHBg8FeqMgybDzmQHLoj9WsxWF",
  "key25": "59EJJiFnPuDmxcaeBxPa1G8sf3RNUyZBm44FXkYGzcx4ZBaQoerNaH454hLoWP4RNsoxpWUakWXiEgr4CmMje2Qk",
  "key26": "5bg6VLioaUL7V76FhZNFz9QSL2WTQngXn73yUiJk5u31sH5i3CrvSsyjSADTYa5TusmqnhtRQs8Ahs6TQ4ZRFdcp",
  "key27": "BRy3PVXcYCQmZLnyoh6VGXUSx7WSrM8oyHwcYkhUDY7uTbctzVeHvCKWjznPQsRqiNU44NuLGwBjyZhWvZdXbmD",
  "key28": "4NX7BeG2ZuZ27G3XtNgDqhf75iCKNYG93nqSdKCPT5VJarj2DxMw9mfP4yWjvNU4jhwWE6G2W1oguaecuadmtZ7N",
  "key29": "27MBpY2bQ9aakeBXMu2f7SGg2GdYJRYM29Z5ci3f19i8p7mYUi63tHGubXvSq76r7T6RUFZDXDmD754gLBXWbW4N",
  "key30": "3zb6KdVG6GwmLir2Drev2wMz96xEAgMCrf65CPEKrgq2Tbhwrd4vUuwyRKqEXiAbtn3EBvr4RDhqTeZX9xvTvGSi"
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
