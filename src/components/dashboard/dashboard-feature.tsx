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
    "294vxTSHvGEfNRpdR3x8Jvueoo8WhJfPLSE9iCJBVXhckRyv4Xx2SKuJqoRPhkKWXnwrQZQk78HdA2w2wNPECc2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BQgWuGyTYX1aidgt3qCDAWyGszPoMNS9vgJXM5XdK5weCZttKaM8YggUwQLXNFyq9q4FRfujswNtzmkN4bQzgGo",
  "key1": "3Hy9VX5VfRvxVMHh6WVXGmLL8JEw2TDNThjpUTHaERhTg5XYXBr1CG3GC44dr2PDh61cNJpjrDvTEw57u7TMw3x9",
  "key2": "3MAdGVst1UmoiC6NEVeijzNf5MFwCfZBSeJznwPzWq6Hwkd5HWe64n7Zjsb7NvEhYnJv8ZcRiRPK7MH6GTYiGfKv",
  "key3": "4aEnovm5PCfz6J5qaobGDavzCtBgMCF3RYs6wXnd1PAfwtzTVQsrEqcoYYhXkpZEBN2ThCqWiMBFBJ32pTyUJwVT",
  "key4": "296J5MxZ1kkxw1v9FoWeaWTUBHv5oYxUAY7U96t57ZJZ58EDWCYgmQYmR3xEL1Zfnt7htyG1kbMqqJ3LjFeV8tmh",
  "key5": "2qpmcunMwwYg4jKG3p31GsgCgL95Lt3bq1EBCsjZ9hnFa12Sg9KHtXbrSCRvZRAAE1eCUf2KRwu6T8Qux9H9FDJw",
  "key6": "2czPyHypkSBoh5VCFyuG7nAxzTz3aSXtAHBFKiYbEe3ZRGgfiNCzLPEDTTkjxUgKhBL625trofvy9NUUxzqc8aya",
  "key7": "42GJNMRJhdwr1LucBTg345DnJ3Uz8tz3zQXk7SNX4TxFA6fG2aefcU6e2HiVB8QC2FDd4WHgBaVsb1HoMeZWuAdb",
  "key8": "4YHMEpjdG4DChDJtRgSrhryeUdDNXdaYi5GYLraJrAnUuqKmNuj9vSF7mXuDJBCD5HnXg5diyqXdBurwfeqvAE4d",
  "key9": "2h1vZjtaLFLAYHwwc5JG95qvED6ysc4zexWydby6uxbUHWLn7UZY6arrYoixPTgYvHqaGk5TndRGc6yo61dtC9B8",
  "key10": "4ArMbttwzpFptGQf36n8ZsYJ1cFW9TnqTT7vfLXAGRKJwWPXx9FhEJqwRaJg9wXeqe3JJYTB9tFt23s1YR8eRSCR",
  "key11": "3vnr6f4B5FeeUQJtBUony9stKk2WtVn7fqXWun61BpMGTeCQ4vmr245F88gxJeqN4nBWu4XYEtPhdYxPR9a5BPWR",
  "key12": "3By2wceivxKd79JYFhNozC5kpW53swWe27Ch6tzFWZE3TH4H8a6B1SmTntE3TbbSunRVHvz8CpsybRKHSCyNs88P",
  "key13": "4yB7agbk6iMGvJzMrwEzq7XDPEfu9bdKaVvhLeafWYRmqPzpyWGNqkDS7PXeP36jEAiXmXtdFufUXdQW8Cd78YCZ",
  "key14": "3E2Y7C3vgsVi8E13sawGDDCSKLfxFZSStmzS1c9VosASB4mY4gTESm9Yt9mGjF7AmfkA3LcTdnk6JkC4HEcgR9Tf",
  "key15": "634JRzP5sBKB7nDk3b1by7rcsQEFHmb32EhNmJStmSDis3dX5v1KV9mdoBksNbv7Y8APW4GRrnAApbevqAYYCPV4",
  "key16": "4rXJdzWJpJgkb7dSdmqSZFdcZthpxdz2sqM3eb4MjRVB6GEjdXfm2gnpMJKMtXbdAvTj8PGEgfYYKWBqdkp9t6Uy",
  "key17": "66wqyTssy1RtvdFpjNK9ypZAkoJSQzLnZbR9PGKfmVVLyhjDn1euZrKX3DSCqo9jZ3UrmPvfXCfF4ieGZsyS6FUA",
  "key18": "4JmDuQQCJEu3q2bK6rdz4uWqnyuhKaYt9PckCAYspkNqiXauQhHkJBkKxrBWDVYCjrqqgCwzWwGX3Ts4PdSwQF6b",
  "key19": "2gQ8xXbLUr8GVgG7yW6iqs1pVGitGo7CSEWwWipRbLyH8p4eHYtzn2WKHAhJhyrqTr1knw7BRhPk4VVC4iu1GcjN",
  "key20": "vQSYnTgtGP1qbKEzhxPmNXJyieSNi4z7ThfkCfjFzbSvU86uYZmHNSB7XywKgV7AzRy8r9DCpNY987cfqDBUdew",
  "key21": "DVdx8g87Sk9yf7oR4G32fKZvEBkCAR3qf9SPqAKagmRvJeceLUh2mT35phLrGgQ6XdjkXtw7JpWsKKWcTeqFFFp",
  "key22": "35yw9aaT8ZodMcav9wjmZxzeQvWxMe4VntySRHxMja33LeLUoppESWzRwVUKYEJ4ZBP4hFzmZwtvcJoPg9bcjenk",
  "key23": "3Phvg3CF4XaaJnpowUWyzeQ1GK1VnJtwXTyYPwrEpWXr7zBNme6LN9oQX5xma4XCtNvXLVnnYFzyfpHMc8KR4JK6",
  "key24": "5k71ziNFz7SwqzPnbGsLTCRb3zn68pMa2Xj3LwMSDjDUyN4HYNKLxwTU44HENiK7iqkiTmr45rW4pWPoCc7mJvVA",
  "key25": "3eeXcNEAS3TC2d1KrLyg3sWzZ5wtVa9h8LKfZo1YhZi95euHSnJYpuN1fg7zfAnwNordVceQcMWmLV6LdsbNCQDq",
  "key26": "29sFsaJhix32gEQWMPBF9DBEFRJppDz5mVP3fosuxf75zuvuCdvHNv9Yu9hKueP47SMS8t4vnHNuciQXc7aGRzsR",
  "key27": "2MCHACJZyQ9HkFFrm7YyZMy7gwuaixb3SS6qwdwKHCWPxiUheJGGg98xrZHAnxUZCXXy7eb2eEoc4NNh2bRUsJJp",
  "key28": "4aBB2uKp7R4c3m5NNRw5QgkHkdUvPX59L6Kse8TFQvpfGGUAajwMwZ6S6mzSdxmFtFPcS1EXW8nDLbYfas6cs2ji",
  "key29": "3d6SRyJPGKd6vUDKoW3NJU5SFqkgBV76QEDPHPpBrKarmFXghRec2bJxtDQLqsz2EFS4kDng6cCcxqnxqKAh8Y9m",
  "key30": "58LkvCim8JLoSe58hjnHNZahXJ4jGd9MS6ZumFfnzEYU43uWxbnCC8JX7w5TE3WV6nBhJMEMxznMeHDfiyY4EZ7Q",
  "key31": "2ijFGf7HFZZdFme8AyDECj9443HZL8yiGKVPtXzEeFCjU1oAs81QwTgs3nN2t8UQQSdfqpsp7M2nrsLw8tnRZFF9",
  "key32": "5MbP8aFmeVcw1A2ZnEGzTSdc8ftjsxZsY5Y61V8GgBeEWne6Xq4yh3XTnS1p9WJkFjss8ifFyeHpXt7UAacwUnMq",
  "key33": "3ZNRSkMW8kgL9cBJP1hasG4n7gEKLmbT4auzDDRA97SvfFLQAfojSsgCED9UU4MgpncTmwYN5qg9ym3kis7toZPT",
  "key34": "41ZZY6iC9TkDoPe99R6e5jPJaATmnd8T2VutGqmHnMB8kDFs6v5Dk3ppmvS4ZgxkCoHU6vtNA1gkUXCNNcJVXNYM",
  "key35": "3CUcbdKkif9LtcdPUz3YfBKUY5KCr2u3DTHirXdv7JDJ2K8i5EXw8BxmzrLAV1xzRZmvcHjyp24ZvxSErfyPxEwE",
  "key36": "4YRwCMwqkdphHa5bYtoNsyHuGXhYFGKTv3FGGGQU6ngxgJ8WS2cZeuLLEiNa2siPQF7v79WKLh2UA6dBrfxC61iZ",
  "key37": "2Fh2yk7yLMG3NbsCLkVBiGUmFdPEQjL91VyhzAUtkr6DLHkkfq5CJwNFc1GdkCjfdAavaLbcdUdHPit5j8b8YEMv",
  "key38": "2kEURbfPhGvQNie6udgYdfxwgzQin6J3k4T4k8GaXQFDf8CHmDeef2KcfnXPp7dvWyhp3aFvhBs3QmsAbKn7vf62",
  "key39": "5Z5NnQbLc2AGQLH7RnwX5bbmhaWoTzQwxR81iUBTyYK2sg6kmvqN2uy367qjDGu7VRhZYx9RrFqB1fAwp9gMvD7w"
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
