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
    "PJezUbssg3nQAS9p93Bi1DzDrCfXbhYBbXnRJK9NA1CZZeUDUMQy8aKavMXWKv6HiXPA9krfM4iCBm5yBm7RcmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TERN93b6GT2Eu5xjGzfBWGs8cBviPMbGQjWPgBmtwovQr6nRchuYLxzuEbT84VJEmLQpFy5szrZgXpczfqjc8r3",
  "key1": "aBAh95bTAKTTAo9gDKvtf53kp7pooFovHAAqCAW4DXPdBTbnkNEGLYfgfr6ZNoRuhK37DoBkvWdxn9oA2sShMDq",
  "key2": "8i3jn5Euia2Zi5wUgm9uQ6D4YzRDWxqHRGiNS5XQcdEAgToQr18eFapDyUM754R2MuL2nTjrZq5Jn9LwQizRDCd",
  "key3": "3xY3VokVLkc3L7jduzMEdWKu8z7PdwByuX3sTrNM4MW88Y1NAdETFb5VGehtsCw3yLY6V1pjFQo98qKvBzb8XBwp",
  "key4": "3WxYba3QJKFmxrDZc5BnkpwnyjKr6TKzzLEL5KJ45q4J81LRHgYYdXBXhLvee25vBMfgx1ix73Kcvv25ytN6d74k",
  "key5": "4Wnvdbg7B3CmscqPRoXJ3HAcemzNzbMzuwNmhpC4EcyZaUtTVcXweQJu7XHCxzWPGW77gJeDqhnUKdosKyLY5YSr",
  "key6": "5h1DRiZG9Ho21ZKQeS6zpVpXbnHAFR7wueGcq7bt5MqobvnHmZqrnLX969DEG1WxmThVohMj3osUo94JUFokfgSG",
  "key7": "5eHtdgQ5ME7dxXeGM97B8uJyvvQr5PYS4nxYGLi36FSaG8XP37N3YKNnUYJ7zGSDxpMQDcimkwhQW2moZSkj7aRx",
  "key8": "4cZV2rvjTbwZovkfsg3jfghbBV1kvBcBa4YDBkMgT6YA4AvggUDigv3XZWZjLJnY5GCPh2Xwutpu4Ha9mUw3Fn5S",
  "key9": "2cF8bWjEZiZSxfL1TMo8KV27tNvCuU7eGzqYFsBghMFbxGLCqrXzgV6gEwEq6a3rvY3MBJVRQ1LZkBFZCimVwSg",
  "key10": "4qmz9ENHYwHWmQ2qpwCea1wjKHJ7ckWgbRbdUhSu5A4qxpBeDBph2pwpCBLjqohxNARGaviSKYVBRopkFis1dqzL",
  "key11": "5UzAZj4nunMcpaJCbvBXUKnBZt8XhqUBeWisx1Fu775dXATnhiDqnhNuxYk5mEHjbxStdyFgc7GDZLrmFiYPSkJY",
  "key12": "4wkT4UbY7LHUUTYfQDF51FbRKs6DYHjPqGZ1U6APXiYLDY8G2cVUVGGXWAdYEmskR8rsPhXYzV8EQQxMvjNgyaDm",
  "key13": "QnvTBUzTxUqmGcwsKuM8Zr5YwZdJvSZ7t7Db34M24dMcgcLYUBBPkfMnMtYiQzNTcATJ7wMYd2Zd1sAL3gm59P5",
  "key14": "5TPCF1FKhPJu9ePyA7qKTR91aNkSxP1YMsua6rVhMPeuBRREC4XKNQrhaPSeQ525nK1NKmnas7i4GjuYmNmVqEs4",
  "key15": "4ypb8HNAz4JHQ1oE5X5iCLrDh5kk4MN2rmnReKAC9giVnJSqvNPeijKkpLpxfrocLAU9rn9eXE5zZ1wxC8cjvKRm",
  "key16": "2GfKhJxGBrZRC2r1ABtM7bLhkPQEDEWd6MqLwTdMWfP6ShJk3LAC6fsWxBB1FurTFgu3pfBqHWNDQUEsxQ1EmDSh",
  "key17": "Qy6T7sGiviGPmrwddLviwZQe2H9QNV5Ws8dyXZ4NxbPCmwS9amQ4ndU2uYmSHzvnPxY3ABFnj3aL8fjySQmK2Sg",
  "key18": "54U3Kupi7XkhsHBtvumoaVfYF8HCzCjmt4b8PWn7fKiuGRic1kzK23rAKMuXv4fBLxEsD4YJAWL6abvfy5YMHgzU",
  "key19": "4mw7ifWr4wKRGiQFvs8Da2ntUS4wxMUyNymkpVrpXQwCp3rkfrJcgsteKtN7UfSz4voswijk6fkvwxRpwAvW5ykr",
  "key20": "5nFnHfejeUeMaGeXVP6fW29ZaodNzoJ5VfSURtUwHB9sxt9GopsoertSiAeKXCMXQ6ZnRxQCe3XghwR94eErsjrQ",
  "key21": "NBXbDHCSwcy5j1qYzkWUVBRa6PTLzfTakrhxcF3DZVWMXwPJ9S9Jtsb8dEbPvbLPqQ3gCJEKZisQnyHYYLHNeMR",
  "key22": "F8ywhJLxAawSfhxfHCwgVVmttKFX97nRTNosgqi3A5vq94xsfqqME7yUWYnzT8Pds2DyBpjERbmygcNjG59GNYr",
  "key23": "2YusUd6SfMQ9tUJH5bPnNZSCEzpJJZSH5Kpx7NCui7Xi8oUCm1yuAKLhznPSs5hzQ3V8pUhq6pnzrCw8i9GUYMSF",
  "key24": "23595Y8ghWEbmZPiTHziSD3p8Zy9eewC8Qatctc2HS39ZsPv2LFcjVj3Ruahw27DUBBAmC2hGh5fAqRkvv4C5RNY",
  "key25": "4zu4ZgqHH93rzVGrd7jafHkTpYpzDVyyfrjZRkwqM7umGmH5PXUunz5E2ghXNJoRwELAyLd8kdUVb4VxR2tqg8MU",
  "key26": "BxKKuS2fZ8TaoC8jtCAzU4uvj8HW2rebVx1c3SKM29ao7mp6e4hRmKwJRvGM5ey1jVxCFYHZ6z1zaVyJx4xnkDq",
  "key27": "5RjUEWbfdes34owf5rpB2UXZuyAXwqg4oho47vi2pBACDU2WjU1y7xbnyr3V5EadHg6BkZ8Q9uieAR69HsqtZNSN",
  "key28": "27JVWh8ANxmXDQBdAXNrapguhrHoapbvGLoUm9vW8kJhBBSJfpxUYbKKvu1cPZPfzvPsodEDYqykyYiQ9qw1SQKv",
  "key29": "5L1TVUc7TZ4UJbaChLGHAwgrL6NbdrKjS1WpPZZ8Ek8DAGZyvfnmr3DXGurYAWmMNqiWxdHxr8n9U1s49x82Ld4k",
  "key30": "3SdPsREbEb5iKJxaUPbeTGxLczrxBr1RA5AGkGSb4nzq46EL3uMK2cB7DuzfUtMBSEuZbdBf2hryaSWxkT8pNk7Z"
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
