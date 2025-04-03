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
    "5vPYiyBWBhxT4BaczoCKjRitTQQ9PS8DaZDpyX6ASvS4CQpx9dZhi8GBN48GbtdvqENNj7Re9cXtnezPFyUUaFt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RA1oPcdaxJb96BMBNTeKajiHBVn5xDLhVP6Qi92WCMNizHnF7rRThYLLRVqvcYSfRce4QNPcXiptnRLEb1Ej3XF",
  "key1": "3XZHrihd3Ds41ARer7bLHVKbkeL7rj76Gqy9c5tZeRx6VbLcVGF2nMme4dHZVrz2G2nKwWdvyANrdfx2ENZo1HSR",
  "key2": "2vdUdVprYhfRSjdR5kSFSxHqjzsy6m8ftJQjCmErgR15th5zaz49w3fN5iTermQgRv8dvZAqs8T2vxv9i2jHGMRG",
  "key3": "3uPwL3Q7cS6Y1XBZY9GfFCaYam5KqGRMBwHF8qxa7FJVipX1f5Un6HrPn9mKHhFjGmhoFq7L7v2wvG189769ATyj",
  "key4": "35tDgyXUUDPnH2uhVBmqrHKCpfyJmNXFFALVFh3JxnNRdzt9CMsLrQWTWpc6mUtnNWKEnynkSuEKfoa4V4V2EfYK",
  "key5": "CDbkF1KK7yekUN8MaFeSEpGCZm91uQ5WisTiR5GtTQKdyzwtMwqfk3iUb53SdB7w48uUMkugkA1j5fkLYmfx5UZ",
  "key6": "3kXMqqfkY5s2uxDc69WTbKvbHjmYyT4cU5t6yppnCtqVtvvdojD7R9XREMLaGjtzBSTbJhDLdADy6U1wRMDk62Nn",
  "key7": "2qHpxCjF2LG9x6xqaK5YLvr2R3fMmoXVdRbjd2owAhheSjG2G7Yg6ARUwQLBg6KmXbb7ZZeJHCeXByprxsZRtdnB",
  "key8": "4AddZeMvp5GZTXrhKDbSCDZ8Ymwm53CUuafvpc9HoNrPQh2FnqGPaWYHoFbMuLU9jPEViYabvhGW3w8VVDxLQn3L",
  "key9": "2SfoWR4oSSokVL8Rvsyw9BpFVPNXuxNL2XzeE2FaXBa1vxqk7WXShG9U2Pn4MT2fQFiJzWYDyusvTmHXRpPZFCRk",
  "key10": "2zjZ5Gg2ndm9gyCyYaNzwK4kFhVQaJf4Repu62yjcTStQFFjKVeaqZ3v9YHoEg8i7hgndmAqUbuitK6Xkrd1Z3pA",
  "key11": "3Xb23rpdXJK9c5xakLfqGezLMh5QVZrELtsm7GFLXtCo6doTh61E4SWTCKUh2zhKpKYSANroMTACixCkGy7aVVBJ",
  "key12": "3Jo6Hob4enT1nXfbQ5kFM3KFyrDjNF8R74kLqt8yPeba1JMM6whyeL9UyrDC1p7hrZxA186NVqDpVKpCi8pcb3nX",
  "key13": "58f8E2e5YGsh9t3tmn3poKeshgxGEW7tsxkHKj9Lv7p6ZK6YqmqWJ9rfbRLqTYdriHvToCUm5zRm3xhjQmyRcmvc",
  "key14": "3WGtoo6ZHC3EVxxCaZvdFPugHwMrmZ4ATjNyRmTFS8Z9FaACsf9Vi29NYLP2QLJVSsUwLQ612KWEER8z6SwMKYq8",
  "key15": "FFtAXKH9HwjCcceMjwn5vMk5JcghwrkDzz9z8gNLdPF4hXZQvvRPyyJEjz6GJDUDVMjo9WdQQHJ6xe1gh8r4bNc",
  "key16": "4c3FA2homQhNJ81x6w4KWYkeJjtDJvmk8hRdttdrDp9GjVJdcP86Vt4MddfAqAbUwNCPcjNciWnTY72w7xjZyHf2",
  "key17": "4KGekdQSQLYowbuKB1uwscZktAQNdrFHDDLcfXsQMUzB4nqZLqhCFed1vz93iLxtBgN5pcGpxsroa9piWkmCssmf",
  "key18": "3N7tBKE2MiZcKnKsrp59RRy7N5myFYf9NcBfhxTCSy2Xb8XkuqP5ZPqax9CQHs1BVmCLh2fxu6S16wQvYqdLnVAa",
  "key19": "5c8eiY3932Hwppt3jaPTX89up2s9hNSRUjZuwF2NHwnNW6Q2UKs6vGG5FaJHDztMTH82VV8DB9e6Si8c1mUCATfA",
  "key20": "5hJvvVfGVt7mcx4E4cBBH1vhYt3XKNagw7pu5NcH1CnVACijsXRZwXgVhTuSDZQiJ7jvwcavJCpFmqtA2NYixqAp",
  "key21": "4nB7jRdK24FafteVLRNHHg9Ut8vQh3ZtD4TQbbQJtYTE5LuE67VXJpatiY4Y3fQjyUaXX9V5VctgbM5miTH6AUAW",
  "key22": "4bbhpvm2avBYEubVgCxVpg76ubpxsZD5wQ2AhLVfoQLsRRp8SWa36hLKg7TUDrBMAAK6pJsh8JSviPfnQwmvXECW",
  "key23": "61sFiXEDtjnYiAEJJbzBhYQHaKNXVas84HZdi8VwF6S7CUpNKwGUXdwSi2iUDBBkg6fwMqShnZkwFv8CNa9di165",
  "key24": "3Zh1w5xFWdHPawRBTFWdjnLTksNc63Lm8seyFK9ztmJEcLwou5ppXWgSW3QrMhWLqYd6WyLDQGH93qh69xErUVPv",
  "key25": "nehi5sKX38FcAHW3vbq3zuj4YGH5kVidJoWFRMoh9G3XR5GM1e4mzVMUJnB47uu2B4hKic3HPXxGwWZQaQnXoBS",
  "key26": "5vn5irsr7DzVqzBKb5Rrb4n93GcJrkFrRtwT8MSmU35KqAC3mYjV4E3xeCgkzfjJErAX9RdvZZgLXz6mRBmRLjST",
  "key27": "2smmYrVYA9cJeYGREKTNmi2DBYMUm2Q97gZBozwG6BhEYLn5JjcL6RrdiTfhsa8aQaXE8c2woAREHddhhnLstV5d",
  "key28": "3Q6nnsoiKgWHhLU197GQsLp41kigaHPVE8LPmjPdMtqaSbDjKeUrv8EFYDVY5Vm8oNbMjc6dngrUugkBaxZk5N5H",
  "key29": "4uuuY11JUi4W9uDnxXjbfEwzJqPTtY7bTfKqXNAtTxYiJncZitGCNzcRs1yKQ2T7nw4P4uHrgyFhpMSWbWXys5hU",
  "key30": "5VuwwgXHFf1hzcLQ5cZ5Jq7hMcuAWXN495tUy3ddsYpUcXxg7YpBVPbeiW1yJM168Wjiz2VyYtDfzxV1Uy8BSmd3",
  "key31": "3RKvELxqBkZg5hb8XrTdDPuFJff1p28qmo3wf4CXr9SeyF9JwLsZJaZcjtsXkr8EomkcviUwpUEsPUDyifmfTyBF",
  "key32": "ddAfEJXZbAWJSSNJY8vACxtcbAKwc3M6PxXNm2AnhLSGnmfwsMTMrKBhEEpbQvxmYu9qS51dWmLiCzak4t9TXSy",
  "key33": "5XvkErwN4AzYGrs9viz5UbzYjD9QU4c9QXRWxdU94J8hSVBa3oowSfhpEMYJiqA7jgx3m5T9dmeJmxBrJ7t2RC9M",
  "key34": "62UniHi4VTWSunrWJNK9MHnmsMTKBFmadYUsKfJp9CJAkAz6Y7fSEeTV54v1Yss9N8XH1rj9s7Jtjj5rqQYig8k8",
  "key35": "4FGLoF7HVickziWeCRDzgghgFSBrA7c8gzphJEKRoQXabEJTbCGmL21LL1aWZizbbi5ts8yuTjVvwLimVjjStLpm",
  "key36": "3EfH4UarAmQSEUu8JrgNW85mHuDSu6eEYtPG5KUJsCjmKcnXWvwF5RLhnCLEHyGPC7iAkcDFr3TYq1YrZLbwpUXK",
  "key37": "2Up59XQHvTHweWc7x8rA6Nt1h3GDaVexwJAYKb83HTHxCwG9ZnGrLCuK1yWiV7fiG6ZavgcyavxMCVJK9EgJVr2S"
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
