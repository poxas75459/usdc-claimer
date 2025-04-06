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
    "5K23rPd1Mk3WVnAeXqPkQw8E5az2Rfx7MsdivtT8YXFBrm9AwkCEs9z4kCRZJdbWL9g6zExGx9SGuQgc8rGEYFcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rVJ36wdvriFqgLX4AWnu9vvvqRygV8L1t1sBouASrGe5fWWSqu8TPSq5K12hDW4sc4DeQfzkmTv7BDVBBTgaLbd",
  "key1": "29u97Np5fjptL1N4RfRRc41N1HsCnwA2ezzu6AK97yuVGMNrKzVHByXmGftR7wPyXVNrdfRWoJTEkL9r6NA3xmP6",
  "key2": "3gDDPLkq2A1S45Uhzn2tEHNXioR9Cxzgadq2coB8QyybRg7TmHxAX9yWETZT2tQdXtKvBtn2sUagosBmDtwLsZ7P",
  "key3": "4qsSTitq7XDWMyocQTLTzkaWAPP6gGdfivrFBjK4iJ3Q6VK6DWmkwN73q2DfyDgB9TuVQjA4g9q4wBnatxjKXsTD",
  "key4": "2EiB32LxNnVUN6Vo1UiwH88Vq8nyqAM84encnZmr83a3sBnU297mythzgQBCgRhYT2BdiiSTXcTL8dfdiDtZfbE2",
  "key5": "517nF1wfTiU2bzS7w8wUb8xUrmndMhUteo4xhu8ndK3p4jUJmitoKHDnM1ZQB2hwVokHfWiVrCBjmA8UmrnPDZFT",
  "key6": "4R2SLq7sKZzNvFftagj5sWF4KcKEPWTYAi9BexQ2tjBDRCvyKgNv2iH5F6t4WAdEghxEehA6xiZ1GTvF39xyNMws",
  "key7": "5zNBXff4s18PDe2mcTPZVXdMmFkEYpDC5aWEYQsc1vfFsYw9tGu9sWj1FLgSCTJBais7TwQ5uL1owzc5mZzra6VP",
  "key8": "3un6L7yAJHA8g5fbz5gTkMexWdpbhgJZooD7xB7eSeydei1iPPyf3CY1riK62Y9n86eVa2ffh3D3Mcz9qWynxNxF",
  "key9": "cwRsmLGHHRHFY7UtfmjZTxAdB5KLRPBLRRxPqS1dG65uKK2me9GpPfhMxssfDFwjcBVtv1P8HK9BnxAVUtukuJv",
  "key10": "4w42YS2aEjjLLSps3xaXmdVFAGLtpPMemekQQsg7ZcoNTj9cZUzNvqUBRi6eUuKAzBdZzV3MfYgvT5U7EyfG9RPC",
  "key11": "4xGrctuid9hUDsahchCETq6VhTmdyUQF1PQQcA6SppsGdvKgVTLwprJDDwja7uvDCgeqpoy4bApNWg9tz8ZMAPsa",
  "key12": "2E7pQi9P4CwfMBHp4esdVoBwGPEqRfwHwsHVFyN9Aq12pfkcbhBT8km7igW5fWqHtJzu4oGHvaqzcBjTHKT2yBnF",
  "key13": "4F3ByUUU22Ww2qcV9LZtzJyHZPkeoqUiL8ia2CHCcySbvnwPxARUPG8gd8khWfBKGCVvbqoAYsMXHbgS5sqW2Qhq",
  "key14": "3E9zGfjjP4TRVZxB3dHGAKbtUPD1Z43DkytDJz35WHMNbPUHvWxX48EF6jkMFMVLMA2ky2Xodrq2Fuf5ZYJu1xGR",
  "key15": "2nusvRvcVeLts1WFd9euzpvJWvr6ysFMVLen2Hvc9G2MmeXDCV6sq8sS4yCRqQ7pWuxFLkzhM78ajfnMy7r8NuiD",
  "key16": "2cpmrgaasHzTP18hiYAN1mKtuxusDmENFYeyuXCstg9XsnhjV2a457UW2xpEiGpZxB2h9bCy6SitFAiX4m6CHUWZ",
  "key17": "5LJq3KwQB2odBFxsMytVjvbJVjq64hKJ4SmJRdkkF21nbUEQjvWnLTgRSwit14kp6AV5BaMHpxRaDtTajB3BPJ97",
  "key18": "44aAnXBcgw9p4B1aUhU53ALPDamHy4p5x2qu2AoZUx9t43CPcS7U8cjrUm26TnQZpHX8Aj1CzoPTj4qhKXAyd4rS",
  "key19": "5oWc2HYF6zQsuxmc96kpa2krpep4ASWZ2EtJBLVa4ueKn7L7cG9M5jmPw94zJbmAHuh5aJXjBHnUcjeN7dWhTaPr",
  "key20": "A84YaazyHHvzB8JrHBKjYRAMDVXQsjZ3G7jKuHASpg6yWreXVHDCG2qfK2JgaAbS4rPdZztYWkeweXkrjdJDbE1",
  "key21": "4kYZgNkf9j4XR6LmbEnsFRFsiK1tKGVtoX89DF39Vkt39yMmPoc9hUqgT18N3z2bsWgCgRK43XVUUmFAypD8wiQh",
  "key22": "2hBvXCrYTxph6hmoJVYRS2S5GotgiuGNpqx5efoxBvoPr9RTU9KA6PSJXTKAgoNMZiwKCHriNzqVZyK5qR7wnSqF",
  "key23": "4yrYVzK3Bs1oLbGF5i6MbaeQFhtejBM7PxYJCH8aaHod3pxqiAtRHHP5hNkbLwViJVZd8c3CSM48TTmyHHvFXtBs",
  "key24": "3k5jtnD8xRRAC9WBhfVLPCdQMMySg4y7mCxSRouBRKobvivpr4ffbxHt9ZD21DiNpt35gNBsKTDfooAqFXMEaZ7t",
  "key25": "495Zgs6L4DNpepoFnGkUXeJZoKippaP6QjfZGRY5xA95FDGxeBa5pDsyHrgeNBYKVkn8hM3fqXo53CFTnnYDcyHj",
  "key26": "4vAKfya32KFzjw2KXcnM3vsf8DbcgPCPueafWV79EQnbep1qLAmvEA72o3hb4W975f1gY2gCQ9TaLPF8LkUQ8Rxy",
  "key27": "41cp9o79WQEZeaym2UxT3ywhSrgM9EGjEU9UVaRqwwyyyJhRmZtAiB3sv9wfdYD71dgj9iSxS2VHVoGqpZrqJSbE",
  "key28": "2HsRDFETiWWQxoekmFTd1kvqkR57QkPjL8ejuNhJA1zKE7xUWYXXjzT9AhoK8hPs1FczJGDqd5UGoyN5qYGAsyzZ",
  "key29": "3H4FrgtWHfsztR3j2eqGvqDZY8v8K6CTAEwVZRmyr4ihirGokcZLv7hysM8XMoym9wh83kKCJobeMm9cmXa6BXEh",
  "key30": "634gccaLJSV5dkNR3zP7uoGQP8TmVJyUqZt46PCu85fFdPtnbS5H5zwtpFPR7Z5jEH6RgDph3rPEjAvha1BP6m6J"
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
