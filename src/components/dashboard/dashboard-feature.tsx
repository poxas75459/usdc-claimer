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
    "2RBwQPZ3jzYWMLS8ax9BkXvgeSeK4PA4sqb7abDr37UqAVqNWR84nNuzdpRoFX9fRwxhBLsU3Yna1oYAAW75vLem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SpgZSYdessSnzuaPtMg4W54N2DYPp77N1vZ5s2wwNs2DqB9wm6gaGGSNBaTWXtc14oGWMY3GSmtFnrejQZE1e9b",
  "key1": "3qZFPZt8bvjjYrMrhCzMk4tmxJ2yivTkjn5Z5gzkDC8nEX7h74GRsd1yijujitxT8iZ9HRTGPxpSmKDcKw6bdkxd",
  "key2": "5jzuLcaoYUhxKPC7QqPvWJKKUZMJ4aYmyMVy1U37odD5wbewu7fJHRckHNThRk4WvDbrSGMJxiBGeA9FP6BHsyAL",
  "key3": "2Ax4oVArEcvyo3Pwn4oXq7jcRXHgJVV4NV1YvrpuWYzffVs89gwXrkCgfTpMcFyXNjQtCXppxXa6YuRxkFwdZQNt",
  "key4": "JmtGPZPhEitgEJPvJkNFbqf2cPukNzeZx1n5dGP4H8KvbRBxgxHH89uUHv4wV6Ygiytgo5Az2q5ECAVjGYMNY26",
  "key5": "4SR1qaWc69GM5xhzg9f6cZcyr1jQNhMXTyMydMqG6xXRJRW5f3JtAxjU9rb1w2gVjLj2AfoPQEYVt6jCVMfx1q5D",
  "key6": "5oYZedGzah8BnTFeCFwk8YCFUErDSTwaEvzFQE9w3c9aWH2Xh4gbRGWbVafbbnk7E35jEkWpzHa83jVztQ5NUqDN",
  "key7": "4ApMTR9AgNyei9CNDmDSt4YbwNBtngaMvAwiFtHGicd2wQkFVxSUfbhRnssgxHG9D7uaZYsr9H6nJRzueQh7GFjD",
  "key8": "4FXyLyLd6jNDejDaTBNrehVbJgjBeegH5m3ftyFxN76oNC1mMFUDrdMsiUCgHQ1oiNK9B1cG77K6LbCVDzL4WMJJ",
  "key9": "LNVmxK63jeNizt63GYKBccRyDkBkeEkDcvRFDq2DrM8USjN3AsSzGZd9Y4REjgj9QJymwYMQ2Jbj8qVqK5nxN3r",
  "key10": "2dzKGzKPkwqPYpEWMFSJktmmHqUkR1gXq18zK1t1FuBX16HmCt5WtEBkQsvBp7pht3j5c9wGwazRMC2DYDCTFF33",
  "key11": "SUUsB6ayiVMSNGVnXnMUJweFJkxGZvccz7crLVeU1378f7DnxLWju9xZ9Ks5hbj9oehuVMFcJqEtRwqhPhTNVb4",
  "key12": "DUHHtEMgNGAhbCCYbP4E32u5ZXetYq3idbDMMPt1hWFCK4RKQi8fb5fMBTYm2pGedtxNDAqHZSZ4G6tgvnCZza6",
  "key13": "3bx7rRgk5mwssb4yGhDpk4XXwP2BGtsNiD3eqUusVsJSerkzxB9RdkSVWoEpkUUYYKUWmEdGCNyDnDwqZhbNj8uP",
  "key14": "2H8FFUeGqBSUfYgA51g2FFm8Y3c8xNcL8x77H1PMjjVST3MXmMt1JjyZwb57zPGfCpvPCu9etf9NwwNsRVdUmcw1",
  "key15": "2qa5F6fkuANWiUDTj4WvnWh4RZra8SD6mAgJaxndwxJqSJAhx2kZsejC2Kj7Gj8NqkCppbK9PKZkqaVTh4qDLCbu",
  "key16": "427WzfGWhqgFseTCuaVcRfdGm9H3URvpdeMGHYZQ62KipeJjUVW3oWDTs2x1Uq8eTip3Cm9xgAGMoR7yFwKLxWFr",
  "key17": "28bvrGFPePvXD1fqZTycKcgoGdgGfPQXFUmTxf89fwV4z7RVAVEssHk83HBueQvpqYCX66zGphknCbqZzQG22Gnq",
  "key18": "5RyD973HmMt9KdfKeFJtZU4LDZifUoyhNhzVqEs5gT7Gcz2dSrJt2KQTZEKUmeeK3ZqnbDVjs8RVtBh1XbNVnti7",
  "key19": "3AGkNAryh6TwDVLBiJbDDLBcn9NcZU9e6AsiBU7aFBUmCzNAoZdhLVAhgpNtn7rW2vMZzhqn3bVYauSZ3vSGCuPK",
  "key20": "31UbGVmcYW3NnHRm3Rvsi3Gv2egECUB1xHrvWEc6HxphrsmSQENkvWRtWTbLY2iE9HYoop2oqpP34qTpBt1xay4F",
  "key21": "XVEY8TdBnsdjYYLYPAQBTGnFpwbZAoLBmbLpmSUGnqZSfy9hFyAMz2gufsJ7NdUaxWvTKKXycZRfpxJmHRfaheF",
  "key22": "4qZR5dcfJmdLC8Z5vJJYrgMxVAZ6Zg7wT4s2cnHeBJdArtsAQnku3EdSRtyMyKovY5sqksCctty5cQYM8jWDtBhE",
  "key23": "5cVNE6YJagccw12PgPkMQ94AsuoAYntYpUk3XrwTUfinX8BZh8XE8RCa3YTejfmgby332oD12RZWZddDPcjgnGhZ",
  "key24": "4xozcVa7evk2zMh7ReawSU4aqLwJnBkcCLxcg5C6LPrL7aumfazv5DJhWnwCiy2hXwcPKsLfv6NEBqu6AHNY3WGz"
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
