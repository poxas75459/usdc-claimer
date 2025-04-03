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
    "MYT56mWuiNxn15nP1nALKxcPtm23gXnhHFpJtXgQDbR8sTZ8M2zgvMsr8VT847uJoxcBbJPFBxhnkRaCzDFS91c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e4Vub5oDheGptmtXg9WRZPs9gt5dXvb157X5cxFEgBvv56mGMT6sHQEW9v25Hx1WzryuEKz397NGmTjkNK2ygZB",
  "key1": "26dKqMey3uio9P64MKVPu1rP9Ry4rfZLYLZvQTndmNBLNp7kQZE4SLAqza4pyNMduuZte5VDZNCq1qPwyD2ckWTf",
  "key2": "3FU13nkU2kfwUM218zEtjxUvA2d4VmaztNbtg7NhUS49x6fUQGwfQA6Ns86yNPLGhwmzuw4fDbJS7ZoAL97eUUGm",
  "key3": "2PPLMnbwwGm88uPQg7hTPnxxLts1EMF8vMdL63fR4fvdJczy1knKuSj8wE9pfn3UVyPz9syj6LyHCvuGb6bXy6qK",
  "key4": "3t4JircT4VSSUo1xgp1jLxkoq6hhBnb99JcPYoEFfY2Z1KEgwyK9DYHNU7YE7Ta6M3tXVDcWbPcYXf2KVV3B1pV5",
  "key5": "5K7j2kdDpCrsa87u8GpiagmChKuEhzQtUECEcveTq6umixmDPhPprBLVfjxqE7fquU6i53p8kt7xh3gYB6NpfNhA",
  "key6": "3RWm7d7ZTqevKmmdhYKWbAxL82XSdtgY3CBsa5aNJpMTed1cMLenzCpPekuKutthjbnYc2LUPTvL7fnGyM7QyTWh",
  "key7": "6bcwaX3DNo4kQ1W5h8v6agWkZPbH3wwP75HmzQW1gMGPHnzH2g9NmkqD4vYAvFMDa2JM6xwPB4nfMCnSiPkV4v2",
  "key8": "64a32px1iwG7TZqiVUqynJHzUL2Y6Et2ZJkFDMBLMSDXWZQu8J3sGYCu4XjKfyxyNbRc3hYuadD8bsC5pVd2jNwg",
  "key9": "tiEidyqgDArrintFsvJx48euVqGXbwgJpN5TjKc3pfFg2VeWW5tLaPTvbMtoc35REpzQv5rFqMWYqcbkdBVV41g",
  "key10": "ZGxbRTFcX69eeHizf49CPaGBQqzs6U2JUeGSDY31xMb4oZPsZA5Jdrv26xiuDwSGikPYxgx3hf3jzrBaxmSE6xU",
  "key11": "sZr8LP9L7YyWNSjEWiewd7kbYuq2E5SxUGzEb3EkZiJuHbXRH5ySHZW7m8NydW1q4334p7SDaB6eKGu4Xng1nZc",
  "key12": "HutSA3mJ9tMnvjtQ5fLEEypPrbJJ2icLU7C6mzok4KF4yBfL6jdzZakEF2UWLTza4nXY29yet61WxtXBTfvqxoL",
  "key13": "52HWHLijpLueseDdtnz24GG4HqHzD3rwpQE1pWsBkDE7BmrUHAJC3bg9bY5p8goYWUHdt9Ye8w6bGVJQhkCbmXiQ",
  "key14": "4uu1WJgMheBkKr4PzMLsP7UHS5d2WNmzRxpLNJpd95dWaRPvTqAhqVLzsSFBMa9YWUusVLHRSK2QrX2wAZYdER5T",
  "key15": "2VD3ZGxcbNvZToXLASSELAPCEv18ur6PCLH3LMuJGGXshQHQXSq1EJgD1uosfV6DPmK96zHYxmNTHXMfC8pkDrsj",
  "key16": "UBvMnQERvHxnXo8yzoUWCgVd9wXCbmVL6NVT3K7Ndn56kNjkqytz91HEJTzwuhEjUfR2iEvs3L6qgr871VZ7x53",
  "key17": "4KwWLaKgHmHLVaXZHyoozwxkzCxJJuN3QJFQxJCUdfqvrFDVjuvrUnADd5w1oAJu2Xi9qiihUhUSFYechxRETSuz",
  "key18": "AQ1iwdZAyGrxnKW1jqSwUufziRNyWc8zQB2yXhmhCUMTH88ynL176Dxs5ww6YgLQv6FHnJrauTnYZGpd68AX3bj",
  "key19": "44Zn2jLULhxe7a9EiijLMFPZfcUwpDYGmtbLiqxB4YzPCiXhCHvfCwjCZ1piEpGjRYKiEnnpTCDSZBkrcx2T7SwD",
  "key20": "5yc9B9ZESKeVJQsLT1NmWJKBSKwF5BDNbhg32gHibeazvbxPg2PrarPnio8YQDSAPzcc4EkLCBiB7bnqLnnkyaZf",
  "key21": "58AnHwM4stK2x3R9pfp5D7GjMMGavJTjKcVhCgN45LrB9L3DBkNYxK9TqZ4sxfUztdPrsc54BWfNppjTgmiVfFuF",
  "key22": "1yCcUvZVaGBxMtRYmzSjCZR1frchyxfdRxa1msE2GybE5RZL5N98JoGQa4ny3wgPyvq1VGN6WjApHDmv6uMBis",
  "key23": "3sU51WWokAFcsQALULratv3RdPkkrMrXWnYqCrJ2Up9bCfVv2CYBopoeGvNYmxca1wpWWZiqSBzarrmcV1s4iZHv",
  "key24": "3GKgsMvM1kkLH2bpsExjeEMNvSN1TJaS28aF5Gz793X9QT7a9dCpX3GicQQLERqkR7q4NVK3qJuLZHBkypDu3HdF",
  "key25": "27UdfBwJxTCHwvBk3nsgkUPeMYKQ4E6AhxTAEsoCt9EKdHy3qHJ5XccqGjf7QDbkB9GZ5wzpitKgLv55BMMDApXU",
  "key26": "45KKj7hMDRuhvEG2LCCApLZ7ZHx1jq1yGz93RavvL6Wnjo41g9bQi6cNkN4eTodY8FxVMD7L8kakminpbyBqxaGS",
  "key27": "5pi38YGjqFuDdWygsef8Z7JwE86D56Grg7kyreAdD3xUqfRnKgUsF1SNK5xK5fj6bhdKDJY6Jp6cHNjVdCPsLkj",
  "key28": "2BSS3GRptQbohcGobM7qzFFDH3y7G4QccbTg6BKSR8bBh1t4KnASYrkkbPLsbbdNmGbMWekGD3rwnfKuRikefunt",
  "key29": "67WJfp4as8yizeA95RugJT85q24S4J5NeDkgsAbHeLTmwjJrVzCU7pkPxHzgVqXognBMt3mQbf1QMDfb4H8FTmJT",
  "key30": "2Y5giaN7jRbP9UAjEkzRr6utGhYRtaxGZS2edakDHqK8UhHo5xkAj2UevHziCD2NonH4P8Ga1V8fRwDEuWLhkdjZ",
  "key31": "3GuXShG2ZJ3P49cKNKmz6zGTrwJwrQwMoe9JBTEJvi7zqDgeRFWrLYzkXqHdyzdLLkbttZtTwfQdSjjaJWFepSNy",
  "key32": "4R9k8K6aPaMk1YVB8TdKMNS87jcGfFNTrGJydef17ve9dF9GpdhVprY1nhJKNBbCo5gUsSJdWLSxQKNbuuN3CPfb",
  "key33": "h8UdV2ur6xQTU7arc4JHAhHLajwakqpWLWptoAEpiP8mpSHdGndvtjwTcg9R3oMfeszdiVUTNnLiA7xaN5tr31R",
  "key34": "4j5zy58YNpQYvrPxh9qpygJzhuNvFrKAT9i3o5EKsJ6S1bwYyV9ZE8czrv2jatUuPsnMQkHQumNDkqaiwJkkoRUP",
  "key35": "4eBTJ8eBYxjk9sYpepPCvz9hCg1Nv4jCq3E653eRr4NnYrvbrLKWMt5iKwQxPzEpTEk6nefUr6mw2gf5dWJvsii2",
  "key36": "HoPff9j4Pp2242VJtJzTdkZX1ogQ29jDAyB2ZQifUgceBRZRhLLCNmKHnFyyJPrm3A5DQMcqgGbcZ3NZCzrftKS",
  "key37": "nACLq1HZH52UzjqeRKG3heiezJV2B6tdFvor7ENsmV5NE9S74Eu9G4LUrn7ZEwtbFtjrXoU8n2BbyDmHpTsit7z",
  "key38": "5feapnYMB3ZpzB9qBGDpxosU9K911JHXypDvPP7hLu6JgRBv8YsxuHGQuhiugzh2WWNRwFCbVSBaz6PctnmGxkC7",
  "key39": "26yGyvdqGtGuBxu69ZR9pYtEPvifQPKNAysfeNETQ2S7675DyJ3qgECaz9VXzPZzBGsJ1Gxfm2mdCuUE8ayNqxzP",
  "key40": "2W2U6YVzncYjz6WWDgnYn6PdZUzDej3CfWnspZhPUwpnrEuqZajZm6WzTn8MFoqiapQMnuiDPwcws9f3rMGwdAss"
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
