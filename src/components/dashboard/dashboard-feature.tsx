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
    "2kSwfyYuVw5ympyKv1ugU3RZHZvRWPHKbv9fST5csBghxru9oDK6GprGbYCS49kqZW9fY9Riqmg8XwioYUmYiJ6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QyrSybQEvPwobNYNSkDTzt71wcqM9V5cqQxzcdSjAsT2p8b3qxE9KUW6ytcLXtGR7AXQvp9fgKQGfo8NLTFD3ea",
  "key1": "5aM2iffEy5ZTBCNeVf9teAnivjc9LXWYKdFb375CyCmgp4Ns2RSmqvA6r6Bvedi7TD9r3XUQaWMhd9BPytCP4RnR",
  "key2": "pwoa7LndZpiF9WugiphmXBSCJAKhRCR8BUoRCVuAogz46TYezSWMoqxWwUPkGLazFJZwPFpJwpTVdf3JUTd14V8",
  "key3": "WdbpTM2TQpyJBtkWkgKnMUsjFCF4CfmHBGEb4XUGYW88SeoYykjTRNQUdwxE3f2tFGLcQ3sPWU4qQuXwvHfD4ZW",
  "key4": "54j7kCZ2NHr4NFKtDZLaq6vQVp6GtV1BeTb7x9ocEVqaoF69GjhNYfurU2YiGKpzNbL4Hxu2kQ9gEUUvN2qGAex4",
  "key5": "HTYqaTBVgbjCjiMBvaRGnXcf9qbFBwQhNfgu7xZLZNCuQA4aKtnpWDDYxP9bt5T8Hc92V6iFzFxtp1Gy1EjsEKB",
  "key6": "46m5LUAWKTijcAjJmFUSyRcEqU8gzani6wCQ1q36xo3pRKmt92CatwzMEZbtG73JxqUpj483y8pj2uCivasmb8mf",
  "key7": "2jAT3DxVrfE2nTXCE9CVwXkDGBkvjNVe88tfpxP57qw9Zbhfp7JAbKFkbmktjyeD5sEZVnYzz9PiE12SeqkA2iUX",
  "key8": "3xfMa87n5awhv3LjS7QQDBh8keWy6E2yJxX9Su7rwz4g2vtztji8qnQNNQd8ikY621zHfFA1Q1J8qkm1ouFEe8V1",
  "key9": "KVsMyvN2FVLNkxxwHbzYnNbXePpFufJVqJMa29zcf9GE49NDMm4PqQ382xwtJzDA2JPYTvn5ub2TBjy2mPcaMUE",
  "key10": "2dicKPn1EfoEmPJYNed8jtxujqNjAzkkXfXCysuWM5HzyggvWfHckKUXSavP6wNNZjBtpj7P4ohnYrSfys8mA5Ee",
  "key11": "3yZVzUA5wvodzbeusuTy2uFPSJWwjWTqa3iLFowaDeNG8rLnAhRXmee5VCPDFEzgnYo3qF2wkoxN4EURHMB2yoNi",
  "key12": "2a2KcEPgFj8e8A4uLduhpuG8RdDEAQVx42Q2jxHTfyTP8Ymu81ZBroHMX4w5ftJK6cbXo6rbUEoLpETmqMUPFT3w",
  "key13": "2xTogQ7B4cqjCz63HdhSJF5YC8rRMWvJCnfSXYPeEFeqdTUTdR1xaZZPdNTcJR2ZXn8dbY5zpcewBMmGDCP9cMsu",
  "key14": "ZzXSHKdtvqm2cKXg6z1LSe9JuLnFNea9PLtwwN1pc7goDKQLhiD6DtpcT8zAm9cCuvteakntJ4BcAX1Y6GAztth",
  "key15": "2qyJA7qvjDyYxWN2SmvrVcESvCqcPenxAtbqwsq1gdJ4YbBVTubDmrUcpdjMVKZ5ocesf2JvHdF23cfryXfWdWG6",
  "key16": "4MQ164adFTzbHtSMBAGFU9CC9zuZSUyuXmAUgVEcKwUpRdcgeJWyo1xHqe76JU36wrVngk4ttWTJCZ96w15ZasF6",
  "key17": "qi3mLYksxQnRDF3GfU3etFNqozYnf5baXehmxQNmDFFLPoM3qfcxHK2kvWMmXmBdU84hvQYMNb7iWBb5SXGtkEK",
  "key18": "fseYQSfRR8VTn9JgEE1DkQFvuq4v69oVQJyJFrF7YAQ9f444zWsWKswUaEfMsQVhX295vTsBiHSuDKwhpcnbVX5",
  "key19": "3xVrRV5KAkraFDgefvCQDxdKi4yNv6SmLKs8sbVH8XJEA4dMc6t12joewtU8fkpvMotN2BYQPPYDuJYA4DN4hsEY",
  "key20": "374ehgYita6Yrv42aRaf8At4ptf26Bfc14fWg2MXi1aWmf9tSjxbwV2sEzGpEFBEGCDdKQD8DNL5zaXEvdsE8eZQ",
  "key21": "4Au1Mj4xGKZQ6dgwuELZhSXrmVMkUSYmpdB6rgqqXduFjGCbguFU3npqv7mEsURfoffRZ78ahAHfNTJmuR5f4Vtg",
  "key22": "44LvJwYvo4Kqztr6MCgidzuxtbundQHX2VPJXjP5UZg3RYVEmUpK2Ku4MnUf82fwhfo5Mih1DJaxMjivEekqekpD",
  "key23": "322oswFG9bd8JGPgTmgwCeGTmVdoQnm83wREkJ3kcCEJ9e6NzzU4xv9FpuHP4dA3nAqQs2um5NpL7rnbmbj7HkMS",
  "key24": "32DgJoCv6XPymVDS3DFz1dZJCL9j8SuZxX1JCsNk2pYQA3BAevH6Ns5YmLjMmwtmN7ia51HXjq6D37Z5Q1bvYoGB",
  "key25": "47t7artBMYjvX1Uw3bRAG2TsHZdyiY9ZFaLRwWNBRPSTRJzgSS9JSqnHvXuHjLYH72t4gpvYNSABRMSQVXgvDW91",
  "key26": "41VeUGAn1cWT3AAt5TNY3xhGZgwioQo5jaBuCw6MUYLdpeN6V8rej5hDhk8CsH9tq1R8GiKo8ybYx8MJ33MAZoXd",
  "key27": "5XdqigKE5PoJyKA6mJuocjYTjse52vvfEXAJoHYFKTqD6DHjjjWKwZPgCSEVZ7F7nDZMatEqmC1Fj1PNwA58FY3z",
  "key28": "48ZxND2spocJ2uAGSw8ibyiiK5Yviu2cShs3jKxYoPgye4GLKKT3rCD6wjKhgQXd9WgkqDV6DHscpTpdPFMxZQrV",
  "key29": "4G8jcsBTNioRHM1iKyUQ3LM67GyMcL9mvqywmNJPkZ1s9Kj8c2ijefkMpwX4cwqxGkxinLPnqaCfq68Lt3tzfvWz",
  "key30": "36LuDuyCKs2KHtEQgXbFpd8UidZw3xapo7ySjsC3o9vYtD17uJFqAStVn7o4oxfuQ4qqYJoxEjKRaWTw63uWUH1z",
  "key31": "4MQQeHajVwDizQaQPzRswbrGUjTozSV5rrLUQawqghyen5UYXmtVoBE9L27tAXyFDLtxThwqqtqwuXVUWc9vvrfS",
  "key32": "3YiSGKCLc3y5H8yRYWuxnUajKRsjKRAg6UeD13ywEXoMwsXfN5nSSNeo1FtK9g7ej83XG3SBTxTRQ1gp8WYGLttC",
  "key33": "3oNA1vQXJwyA72vErek62dBH4c1XYEhyJLYWmNohGPZssbVsMpyBomKR7gYKGqGL7bppMwMd2QcPTazNKQWhWK23",
  "key34": "4BWpEgQpXhwTJHsQRyBXcfh3KkQRmNDW9dP6Tq2UkSGLYza6KXygpN3mifdh7kSkGy71GGmtVPnepztDXoSqb85H",
  "key35": "2VMWMXHxdoScTpJSE2DuCTunng8J6x2AaXBMW4bT4WmbS2nEDHTavWuG82ePERHeaT4P6tvjZW8CXnAdhTLARake",
  "key36": "5ZWjU8XG2cwrYzwWGJrUuGZBPB9WEdNKFdQYwFHZNZ86ATGPNuNrDAN1ZR5beqCvtrCBcamuC8zj8aGqWBrNsLQJ",
  "key37": "2TXZfZW2ikxtGDx5q3mjkrjWYyECFcx3wxK4smEmfZCDpd5qoz118cENwTPgkwKtxZYAke6JjbzoMr4Rwh4tJyLp",
  "key38": "2GFH3QaK9VeDzyGuup3Cq5Bz6UtTaFn42rCyhB8USH1oy8zqhJE7MJXSdM4fYoQASnVagi9TBExgNaZtik2fZKW1",
  "key39": "4pbZfSZy77shuYSgbMWoCB92X6CJA4n76bBwhtN4XJg15zf3FQ8ypBGx3WksWm5Qsyz6RumxdjpiPp6aoQAF2KY",
  "key40": "3FzgMjwxRf3PivWNZA64iRPEngq3oiREbcFCBHgytygvnXrQThwvmpfPpjpr6aRxdfBN6ayqX34DfhmE3pxw21g1",
  "key41": "3qYeTb1uUApM7uFguUcq1e2QTg5LnJGv2z7CSXbPHR5T6539NtRhvZsVt5LP89THFkng5VYsJY9EPM9spPuhKJup",
  "key42": "NEzaqkcBZYKpewwbRReZJnR1Tc4wbx4WBSWb5ETD41uvc37Mj2HUdk1WfP7qA9RY2i98wR7pJGJEXo4hkNdd3wQ",
  "key43": "32cuDyw5EQtTSLWKqZSiQccSpZGy6qDQ7seYtHPmpssfPjUoYUJeVteGHqBByodAJ1A1jawcMzfAtpXs1fcMWZV7",
  "key44": "3gExusZTe2v9sb56Yxfcrd3GR35VVdnmMWJX9ytirBAk1YT18t7rcJqCphgLeQNqFJj3trEhmutE6Mz8RqUzfq5Z"
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
