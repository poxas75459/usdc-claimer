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
    "4KpUABjdE9S64DVrAgCoJqgBsLQUZ2bsfRRUqziKxy5y97BTFizpq43RJtWLiML2natD796k9pEMHb1fDN95h6hi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4urNJBbqchvgU5NBmgA1qJZ3PpkyDbTnRH89UuvmqHoR9tkhbj5tdrMnAXnPJgRSZBDfdeajNxjX3neC65aK5sC3",
  "key1": "2Lts97sdjBHEf2YdvUiEVzo4ug8RsdTbQy6fRf5FneadFQhAFHqo9ZCrMNrZme5kBarJnJpySctVCXWScEjwG5qh",
  "key2": "2s9vmD3KoxSKVh6KmZkp8WajoU9dr1KLZ9zS1zsWTJ3jqpSNvCNBUMJyMeb6BVw4tXf39djCE41NZamjAP5CpckU",
  "key3": "4aR9vN6ejrhxuRRUjBz4TJ5DC9Ej8grQxqz38zkMdf3r4bA7gvBS9PAwo2V44vdjh73Poa7PPBFJau4SpZW3weLu",
  "key4": "623Nkny6vv1eRRprtfqtXTSp5ecSa9fQwb6G3r7YWy3jvmDjS2vg1rZeChX12qYc5Bg3Tyqz7gf4hd2BHwmKYKK",
  "key5": "65tGgRNgPrStFVeqYmNDohV19Em3XKzFmjEMWkNZyr7Dh2zcK57WJV5q7N6rKeVXpcC6E5hJSoFFtovWqgn517Kq",
  "key6": "5UY8rMkLgFYZ3W2hCK6J8r6RNhUGdJR1io5TSoVM8LvvCrXJ9mzQLXHHQsCbpGBYr8c8r52si18AfM8WF1Tp6Gh6",
  "key7": "3TBCXTCWhtME1q3ys6yS9EHNYMi2esXQKevDYELqf4gyKJ2PPgfAXUwfvXdX9EARNbYjz74Uu8QJc9XH5amcjno8",
  "key8": "a8SKv27j47NJeXGq6FpxEjEbQE3PUwudPX7uwAGjMbck76kP1FXwU8DexT542USMrvVpgqZ9GmzKvc57KNbfr87",
  "key9": "2riNDz9DscBq57M8JvNuVquRgpFutJ2tq4rdYaYxYXzbPeS8vR1uEhL94LweAJoaYGvsggAm5RKCY6usoDaa9mJ8",
  "key10": "5jyiXH8ez7Gj2dYB2xZM7NGL5HnXWBLPRNU8aJxH5bPA8fuNXQ399t7UWY1GyVMBegBmgctWrJXDPa5nJTY5UUZc",
  "key11": "5cM3gekZuffK2ossu6ptFV32Zj8F6CGGeYsyK3fcDEswJxAsfwia5nh8GYda3NjkFLBbHpn7BGZXoM29t1EFRkKz",
  "key12": "5LAwzsfkzVpUvRUrk1F6vkWvou8qAvY2anbJVjwtLbjN7mciaqYQG5YGFxjZRQt5ZAWEUzMU2aXbHNif5oK6cqRA",
  "key13": "2aaXCkY7Ae8MYZTkqkYzsYFU9HCUr43DbyVhvdmp489nkEDHKUtQMyTfKV7jgmQtTJkVb9iSjB7qCYYR7v1Cthkn",
  "key14": "4RT86uRSd1PGrWQztXTkMnHP1fUKoWVwkwbc8fZKqbimmkbNa82C33KXG6Gm6NTsWjbg4sB6F1uZgLUHUh3ikCJo",
  "key15": "7kA3gUTFzRSRryKNfjGG2qzrckmNoNDi94SLVNKbydp8Jr6CCmaydt58RsyQ25A3wQ8QnPzgkv9LZLs3ENaHkPb",
  "key16": "36qa37VgaotvxJKpeRp9Z8fVRtacp6vmCCtZq5ASU4gBkcpavE4BbaKPbbffssLmfSpzQ6ZMnGdoADbVUZkXjzcr",
  "key17": "kPLfWzKZrHNSSo8VRBExGpprAAJ1RyDMU89TZc4z5t5gGKNaYUz1r7FPLRkQdBqWYV6rUMdseiMRxaYoexXeEno",
  "key18": "3bzk5RL5mHWvmMLPu79FU8NfGhk9G8Qyh9ShMyXf23xjEfp1UfwKjTY3EeEDN658tsCALko6HXCgki35UrCBtRYu",
  "key19": "49DuisUWq7LJQxScK3kPbUbnS8FKYD1KjcP3SWn8XTDzDF2RtJ89JVo1RmPDE7Lb5Gzr3Z3zCUV4FgAwpeNzV2f3",
  "key20": "DeqtEJCsy7UkRHzHbwyNPS21WgBu2YZxSeYuxuGkt1nqUAxRgCM9AuQcuBJMnjRC983mmB4Vt6TuAsQDdrgPVPr",
  "key21": "2yZqgetc7FRZiwqVQFMAH1qxgD85vtaUE9G85N6rmxyHGrqth2d2rcCznGV7aXxME9L7cQ9Hz3Y4DfwDC972F2ZR",
  "key22": "3EABkJRAHw9LqBq8ZjniVk9rGUvv8eQkLRgcu3KQ2rbHJH8Q4U8W1cnAXSkCkXuswG9SyFMjwtcxggka3ccywvjV",
  "key23": "2MxW3YkwNZBqapHKjYeRyx4awiSqGotkNyPXLVpaFifReDYP4T9qVKTqJ63JY1oQgcHxidfhxjjfbhr9BmrpW8Vz",
  "key24": "3v2VZBygDKjaHsJm6bfvUc597tcHPGXVYqZK9rmwzPUuyZuA4te2Y2DtBzj6kPWKhfLBgJj6aHgwSrfQ6tWssEQo",
  "key25": "2zNJywJjEXoWRDfZ6kk5UHqFT3ft4dmqqN6BSSceNW45YWrySNwgZ6R37E7Z7qTfZzF1zVzSosJvXnXAnzZV74VS",
  "key26": "516LmJSQW7DLKX5YGuvha2p5DED3CNHs8i6pcgs2nxX866xk2BviGqvnUibF9jqSvSpUeuVc4QhPgfZqcBQhc8ct",
  "key27": "yYSar2tAVN3f4rzredsqiZVVAuVPxiDBqEdW1YiZ8Bb2D3hKRTwGtGN6iHBrPLYYV4CA9TXfU7tFdQLe7NSsM9P",
  "key28": "2PRJWPNCzFUhmP5EuoP7Bwpdd3S6ynfJzESi9h5P93uqyuB8Eenxs3pFh6p99yND8K8GrJvf8nw7H2PkSU93f2Wc",
  "key29": "4kypRkgXENTn7H4nMK9oehXzytAsLBZNvAYKofUtAVZCvKpdQNtffYVZq9kJ1BMpewe6zoTNqBRzbCmLGXDcM2XT",
  "key30": "PLfobeaadgnNFxG7ByPMdaJ9qwABHeH2Tz9vArG57ngauTUGfJqBTVEuzkWvRC67rjWwR6tpjBUiN2QSih5FcMj",
  "key31": "3TjCZBVPiuwVnZsm5dUGgfthbXSu6d9pdp2dDWh33THXPyexMK5iShYgwa8TtU57mNJVtZsY2aXhJ3P4GCPmuXKH",
  "key32": "2yjzMo4a8umqjQ1Nwqxe5VXhZnF1wb2zS6hqsVPCVhUxhDrQKxzxBkyvbRCyDm5tKNwuAxWFSs8YSF1YVpxNohX9",
  "key33": "4KquzpShLGRWfj9S9XfeRQ88NaqiSXcqcRmzK32C8iTHMHiXLA5Gyc5NCWfRJMsx6jaQTUvbsfCEEo2nBydpFark"
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
