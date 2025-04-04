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
    "9zQFhooNUtvU3F2PJ44593RxESXMhztj7UGbbYrB6B7YYRLr5Tm9pht3rz347GiHbHiyaEDKZ8jEUx2aHDQCd4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B35DL7tBU8iPXskdp6neiyEP7RZ9wAVLBMEK2KRNQ199Ph5xmUi7SVDxjgDUh8Fzxfvczzgxwbvx41sNLcGwgqw",
  "key1": "2qYvXmbtQS6YWoNbeFgDtj8rQ6d8MPj7n82sWdTKFjShJD9RJTuV1DmeE4hHzRdQ93mi2h2ioZPqhZuUpWGVfzBt",
  "key2": "3T4XsXgrx36qSjXiVRuFyyxEqAmN4mKA1BNbMVtP4jWpJT5LTzUANPrjt6xjmpjSLcRGSdhX2MhYJUFF7YMtYtGj",
  "key3": "xWdhwKShhdP5k53RAc2x4Mi2k3Xho3GF1Eik91sWv89GiR5YxfXuCUxTKWQwtTLxffCkEBWFu2AT6A3EakEHvDR",
  "key4": "5rbFDEd1QYSjyCv59c7eEffqLHMNJZsvivwDbs8j5R5XQiRVUMCg77cFQ9paS8qZxZ8Jq3xhHwZA9kVP6Ln8QKxs",
  "key5": "yJyJxerU14TaUZwPaiit8iHK8Tti8ndkix1sAZoEQAzdMiW3FiLk5unh8vaYN9jubCLekxqWfLmkA2ZRgszyHTt",
  "key6": "3iPxPnNW6M3fMrBQJy7RG5v4TpRZ192CEKabVq5yzcRFsW3RhiBa8597TugViDEug7goNtBmZp7wm6uSkWVW4JpF",
  "key7": "2E6NeLgmE9P7j8bZWcV4wrGg5PhvPSNi2czNcED7R8TZfCJqJC3MM3TyTkYtUoRPHfiEJchJjrbtGtGGqm4iG3Gs",
  "key8": "um11TZv5aHCn6JBgYX6A4Em25gah7mVVjbxjCeVCQNQMSaRfyqFPa56dhdvnXruNmxeTqmkprEcbPMfTbDVcvTP",
  "key9": "p8nsdq7UMoEbtbio13D9v8R4MTBFChGLf8xFHuS7FT6KWuv1GjRJWRj2tzFqJHHmqRBrVjJmy1kWpbKyGQzfe5A",
  "key10": "3HAAztyX74yD8fYWzs5NXjQyA67wV5tFGPUZThug5ZWEkrjtVffJCoRfE8quSopboHq63kuofPWg8h1nzVznwLZb",
  "key11": "4VkY6Fqdb6uDJ8RDPZUF66w5FHTV7KzU79tVT1KL8rC98fCP79Sm9MRcbGvW3yheP9oeh9Bcx9a2pQN1iMNVJPqR",
  "key12": "yMhhhP79Zg7bk5E66zNzdMfMxo5j41orztuK7zXxajVMboBUZPjDY62JeVLWrLypHjh38MCFYMYn8vyAEUqGFZy",
  "key13": "5gFr7prnv7tXmLVvSm43h1hjq9zXAVazgnjEZcdUSLoEbEMyUpaoApqa9owFF99UgypnyoQkMuaSD8Q6BSsfUwzH",
  "key14": "5QxK89W1nsDgbw1GTVQXzs4xas6s5VovRWqv1rogmzqcyxDhPUj4pjqi3b5Hqnm7WnPcn5z5LMMYKkphq9oTo18u",
  "key15": "5hWWaehGqc83YJDwnxL2mCwGJ4hF2uKwEJe4UmvgVKShcy6SG9GJtHT7oCvPHWVvMyUTmBGDQWxTKktFu75JTh49",
  "key16": "62qSYnTotUNbjvrrv7yJ6AgwEGr69kjwRDwZwzaAqkSDhYnZi2tTpMDVwxA5sFqKYhgvVSnYxVNpA6V3gaZQQ73E",
  "key17": "4XCp2pfyikoirBsccPRUipFxNrsuqYCMxFi3fi5iKjyH4exxqUQhGJ92b5uEXtf8yWn478S1jFXSR28yUj1sbh4G",
  "key18": "4vdEswjwESGuc7tpYtLqqvHvf6WjXnfRes99Mi3HSiDGR3XzgaSZjb5AVChHj2roDj1z1GPC4RtgjLVr5BP6AnU9",
  "key19": "3RWsQz8fPxu2nRZj4LosEJsXpMtQnLGyfxB5wCVfHBAxiKkeYNpjxVVDtPXxcPBHquHu5Hu2Z6cYCqz7MJRzKZk1",
  "key20": "5Cq1oXxUPPRzf17ZBsLSp4FNL5NpzjbMo1wbYUMXf7HYzz81effTKpiGG1Kz3MM4wskXp8PJUjhxp8emxbXkr58g",
  "key21": "5AYfpFvmCE1zkQPDbEn7x3mMSXijCnmNNxNEMeperTKi7712MMx9PU23FpjhvGf51v75ZF63GC5Ag26nVTTTpPFQ",
  "key22": "3ZSTz1ED9TX2QfeJYrpxfkD2TngUTTQXvQpvaa5yJDWHx5kNq3CFLTsZsSBy1wFkRyC4ywB1HVKdTJQRVh9x5tZR",
  "key23": "aLN9LuQyr7C26aAmPpM1hwbdzGNqPBikBdKNLokXtkx9HhY6By3mgFgAtNek6tEYzcCqzg7W9PujMxJFZB13sb9",
  "key24": "5tQoGwZq2HAEbGgFeB1azZuVejRXFmbeQfdmAHGdgwHspYKRNRKm3xtzuny6E51dVyzW94dwXeUjCyLQ33M17JsW",
  "key25": "AevBjJ6iayQRXyXGhDK8Me9PVjSTyVBy1cs9J8zpLAYR78MgKuoRrJssfReJveRucUWDF5nzaKFz4T4JJvc3B3A",
  "key26": "5o2KrwPUvxbpBHmpL6zXjK5Z8VefCnzned3vDWrkqSkiJQpU3juAoQuwc5D7vJRcj897Rn64ziFgGgrL5wQu8stP",
  "key27": "5ZtDFWkBJfPZCewCU96rucpwd2D4ddLehBqvEWQycgScKGhZwVRKgWTG1ET9vjgRaMbXaHnPcLJBU7SFErfuonB3",
  "key28": "4xdnUEmFY4V9ymYasAmEFUP34zondQ3D5xgRvM2y2MwXHZMs8vUNva9pHYVYy24m27SnHyrkU7998kJrLZgFu5Ln",
  "key29": "2RXcvDSo1rkRkpXqy9XJP5jfr6ZVBxcQAFkdLWZH7mxTswSZvKosg5rFskh3q2SYCymZiJKTsSDA1bVeHrx6hiSa",
  "key30": "4zAm6X7nfD477ykwh8B1jMoxeH5NBLEt12yyWwAwSjVW8j9QQB8b6PxTBogYUFF3Z3UGa3n9VwUDxcshWY7r4o2f",
  "key31": "1tNZRFZhNa1or1TVXoSKuZMBRu1N7nYntEfFE6cMaafxy6d4v4uY7emhYFDfjXm4Kn6W5brjLdSdGhGNXTwZ3fW",
  "key32": "4Twt9euo4UVzqoT6vEbwhHckdtp12QKMM3ib7W7bDatAifrcsBaRAM2uHy55558oRczcRRzBmzQ6QqqF7DkJAJLW",
  "key33": "3YpCHSb7mnbgihpuZX9UNDejNYDMqqrZBTGHZPQEVqjJGx7fBnWD9w7uc5aEV2WYUBPmXP8NbCa7RYcohoNUmrDf",
  "key34": "2xiPPRr95iKNzwpBiHVVQCWN3ckAgfigC3kj2J4DP1td1SNRjdovP1sG5hWuXKX4SgwtwYim5cjpEkNk31XY7ME8",
  "key35": "3y9Xk4fP9i1J5Fb3RdwhBFxrjzY2caWxsMtNxc4C5uK3kHJw3tpnxRt7XbtBDakzgty1AwSn53VP8paUuygj76ot",
  "key36": "2GW8cRNtJBDYD82tsxvLv3T5woUAx8kzWArAxZu1iqFsbF5Woduh6PLEkoRnUKwdvi1UqLWzj9AH3L7oAF2YanXb",
  "key37": "jVd6PE4ZgQiE4FBhQFH6NB3yMqSJAAkQtsLRCVK8empq1p6fKvyZ68XfTsDwwKCfJsFH5hGK6k9vnYcSvs7i7Fy",
  "key38": "4KeHjUJoTmRyJZowFAieBdjQgRwbRKhhhzvmYLheMQ3n6MeZzcZtFwsRttqoGTwKCFHZVVjQtxhoFLztkFYtZ2dY",
  "key39": "5hPKqNG1VcUREPJTFiw8PX2PkzrsRfq6wPv7PY7zb9ADouC6aUhHNg9cuYdY3aUB6sFkr89HWSYvp83Dj9YnzupE",
  "key40": "5w3A8TMGvcQyDgd2Mf77kak6eWqrVdYcZuYAaTrr6pT57nFyqhtwTTvrii8LHQ3z3s3m2ZcQUjjo2Ws3XKwM5Vmb",
  "key41": "3b2ot3H4rkCh5DMDXU48TpKWw63kRpiCwsKbfrBN4YLY2h13kGiBMVGHjiZyBTQt7rtN2n99CEdPJA2hmqDuDDXo"
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
