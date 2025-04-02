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
    "4WWMoYNuASVDmRqwjbfgNNrRCXpNvE8eVd82bne4KrVCmhj81ampQoFR8QXtfE766X6qyeny756xNT7sUSKxMKRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41RqRaPVLqyJ5JpAz4NFHQsz1rZCPQyo3AMGiGtYPwRNye3bsXmua21uDZ5VPQcUqCxvee15kDZc8umgii5b3VNs",
  "key1": "26kjust97SeU7JWWZdZbRVYCzmrwekwUiCYj5vp1Zie97Aff4yW9JXiHKmPYLDtBN5KV8eycGRL6wnjwRBhQ3okc",
  "key2": "5NfMqmRp9JxKzd1TPLv3VHBYvbDDprBPRBPSNJvt93MJMNFg9PvkwcUfE8kqmffY5RAAqdz4hbKDLoj38UF5dE7A",
  "key3": "2r1K29Rm2FcguoywYpMBWtUJn43HfQzgcM6rVVFwVqG2eY4MKB6HYXuGD9SpMx34KKxqeH2QWP3MnK8kiti7YfYq",
  "key4": "UncoeGwQyJzKGf9EWj5BFmZ31Ubh43KidTyAs9spurJdZeC88785ENesBnmHXYJ4HY3cpg7xyteAqRZXJxUjbF9",
  "key5": "59Q7Hibx131GgWpm4VWvStfVkuYvQiPZvAekjibco4LQUqsRV9YBTTypE61VnFx5mnUeYzqpyYELn268YFEmkPXh",
  "key6": "5t8VTzXmdL81uF9Xeg42tMRcpjdwSkjef9ZAS2XqB2yoRJfv8ZMMQ9EPXR4AN3RwxpKdH4Bkgkv8Z3uLqtkCm8BX",
  "key7": "3QQy7Qw7dWr9ssT3Wm8wLNSPJ39QStirunfz854XLJehU7W2LkNoSGwyZ2Z9SnyiMsmwDxt6gBmZ1fTRmZbY6nF1",
  "key8": "4wHnX76rESySwTLEY686V4P9aAsfR3r76tgZfFPsx4wkit7rSupkhvpCN2JDTocfLKFYfHvJCRtM7Y9GmLCYbRW3",
  "key9": "5Xe9EFpDzuGz4cqZKbgjhqDQSHC3865qbTjfpEi7BkqUDaTqwBPyRHLCD1iTX9cFRz66uyNkPoG7F2mKMU8LCqgd",
  "key10": "3pkkxWERTQkpKDrHb8pgkC67dnFU5845VBLnS9FU8xN7TPqtZijQEiz88q5qHtp4LUTn2v2AX8wzgop1SZMdDXiM",
  "key11": "65uhAobtH1w8N6CZWHnZv91c2BDxEUh1x3qVQFUSXe5vgTWN8xDUvvUuYMWAn7J6YWRqQ1Qr3PKVXMYzLjEpx8P5",
  "key12": "2U64BfuhYXjA8H946GAkVTZNWPjcLFDPsBUzrRePUfRx91pGHsExjcnf4KFbbzYnm2ZtsW3gsmrSTUoJgnNU6UzM",
  "key13": "5GPSbWkVNnTj3R72hSaFLGhi2BhgXqFTmnw8bSsXiWtHVqhubk88bdDoeA3uC4H7YQt8KSGJZxZqFFBaE8KKBVEc",
  "key14": "5pxS1Mbzkx9hpC51MR4z3SWSBMEg7Lht7QXHoWUBV8BHkeciXVHbD4FPr8yZEfHGgmrTjb3CkwcSU5ZmQcKbZu1f",
  "key15": "4B4SrM1n7Uu3o5vmGhEpe3X3Gf2Bfkyyd1p1awhYZvWiRTtQ2sJtny3ZWfCpS83kLeKhWxDd6rWnYLtnPocBa3Ha",
  "key16": "2omQpvUGp58jbvuYvmpYXiaD5ZH79xzSGzosKBKNfhDDu3d3xzkQJLtmDsQJgtb1bGtdNnSFNwb4yudGhr1D9KEd",
  "key17": "3X9UbbFvju41xYzyUHMFvA2fHKpiuDNA6TkDffDBomh2aMfNVQzQrNV9UheV9PzPwVVgBdSVuMtHcsfvL6fDTB7P",
  "key18": "5ZMbPF72KoDcHK1viatPDwRVTBWTc74m4hGTHQv2auvTHYKkPEV9pG2N72EsRQ8hnJbTKv6r5wYv91zdvYY398BG",
  "key19": "3KRbocD4NrXFAxYFyjVsv58zLED5XLQ77VWCUKyjHu62t1pJXVKvb3LaGS19bvLLLbchCq1oRo1UfKdg8tKopRmc",
  "key20": "bP8LjrTyyKoS5uVMcivs43PpswtAPayr7eZMxwPc2zVUXV3ivVtJzpdH8MXR8bdEsCLb7t5CWwB5dqbTfixLgxu",
  "key21": "4udvqyPH39nitca2YxQLBYjdeF9hW5piEBMXc3hD2AiprRLU1B8u9FxC5RoeqUfsxWdBqRHre84agfZebtVzMjgC",
  "key22": "r4WaMR5QtsMCpVZHaFzu29eZHuKbHNiJr1yBWK85d7jnLkK4WgVeLMYcAi28TBtW7uvzq6We9d7vd3eCUXkekkj",
  "key23": "iuzgvHmngEfhVPm35yYLmMSgL4CLyKkGBhFKBK1QnPhSps7o3RWwDwViw62gCWxbSzUXcfzm8yDM18Pvnydt2KG",
  "key24": "5kuHj7Wo4QXD7XzcTotGFUxb3MsnRpALYSPKpFhfRG9bNaJsXcc3LjWctooxTw1SYU1A1cCR8hQTe2DxMWmer3Ls",
  "key25": "VqXL9NQhrSWm3tbvFM4W4MVZYs4NjjJEwrG1w88n5u7HnbPFkmaiKP2K1hGWwZfFu889ofQrNnEyjgBQQSH3HLY",
  "key26": "4fSqLm2XzWnCQD51LcyhkaqnedmHXCJYRwPdsqBE5QPE6T7bHUCrPPPzcs3bL2r991ucgiTD9PizEgzttqfnz8qE",
  "key27": "5afGmBDqo6vrfPCBt1XdXG4NTNzseKYPU1QdiBiuF1CRJ28gYfCxbFYFP86gzVLAGp3x7g2a2nLATEgX967MUc7f",
  "key28": "5CZYzipqscn5qvYQJycZDYk5s9NZH7wZVyPDHd5aTMGduBdCUFBTVg2w6P47Hy16QMacnsM4fHBjPQsTHfvmdN6K",
  "key29": "25jwgYT7as22HtP6aq39KK9a2P8D1y45UqFVUvvyFnbiTaGXoNKavDbTKxGLsozDnWLAeP1ahHBZzC24g2VWzNqH",
  "key30": "2pUeUXuEosgyyz9c4MDY7Jyzd8Ex2ZuHkM8X9Kzg2pnCM9ihJ7GjEFj1XrmhNcnBNMAxyuq5PmoTsfVm1BBfeXY6",
  "key31": "4dLufoHTZ6GfhL9aexMrorqvgUvP6b54d62iCd36cRQ3FTnN6wX35v6FZXupYrsLMXLJqHYaYxrowB4y4AbNd8nm",
  "key32": "5Dw7SdQEATpmT5GPrekFLujpuHSTRicpEgeLsajczboopCphdKp1LQBR8qbBx5dBMJY6hQAmGZCSmdJGu8E8hae",
  "key33": "2qzV1tebRsMAtwgTWVNnQABsSREhZGjx2QjYvo4GQgjeW3djRNrUWpAU5YCxvNaMX4jDG7tTcZGm1zg4QA9EN94X"
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
