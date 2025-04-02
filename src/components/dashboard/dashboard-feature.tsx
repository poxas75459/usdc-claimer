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
    "RfAycm8FGC7diP14Dfkyu3BZodV9MxqTaDfHRYEk4DrvDzaEDpzCyRciPzsupAkpGej25eZpXexh1rgUrab5CYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h7rVvhhihcEmB4ghAAGK4ke8arrm9LU3PcNSpju6LA3u14mnvVyd8zduBY7KshskP7r2UfVBsoCanJQxFGNQ394",
  "key1": "38cMrRYnxsp3k57M5Qu6AE1nJ9oAw1QPsnQ1bMBhaKY9do8vJD8mzo9EbHVNHd28Ay7JEcLp3b2XFZ2ughsBn9fA",
  "key2": "NnNqusVbiTi9A6kNKgU5bMofjANzhNWaMdcbseJDGqWrajZgGFdNkgUKJgR7ZQUdV1jq5bNPDg5n6WP5LXuW3c9",
  "key3": "4swX7Jh8SwYSyeY1pTg67d3s4DR7FXihndKVgUDC4d9DZtreyYKxbVCwY2DPWaR1ahX8aWCnpet77bR72kduSXhN",
  "key4": "4f111q6U7riSmmdz5kniVu9cesAfwqFskrLNhqG8QNacyEYk6XT3zNt3UpGAxvGBi1jGFbvRHBtZBcQK3rvZenPc",
  "key5": "YmEbHqm6RZTko1JrYBMXXxikdq9WDsQ8S9XcniyiDhGQSaDRVX6dkgekYwkqrdRW8bt88QLAS4Xrix49mGmQ694",
  "key6": "4NCg1aRqe7gGcZrpmbF1PwpD6txowG8uV24PTk5zcVniPvtEPo2rWqPgJvYWx5eHM3u75aN4H4C54g3GM25qHmJV",
  "key7": "7EErQD7GZEbd3gBzGLLGyQa1qMmK6t5qBVu962qu333ZbYkoHRJcm8YEzB8BaCjMvExjA98gah1YN6KvWJhcmfS",
  "key8": "54UdgmmqAdfT1VGFXY1BM4dUqbbApavFwAjEczEQ82QV7uV3WnPwp9Q6ssseZ3rWQjmUzpf3gs21TxEnsG5RDoNZ",
  "key9": "2mtMVPpBHZnXZroMm3F2ZxRWZZb6MiEBk9agburYpdassPMx1UpYaDKsNWUC5sULcruf9s7XafudWcn7g2C4KLCn",
  "key10": "2XwDzASGdx86FQjmfpMkex23jHeoQTk9Yyfpxvx32nfxr94dKoALgcTZzdALrcw2KTMjgzRMTkLYKCAM739265Jw",
  "key11": "rVJa2ob8wDsoRHDq4waRJoaQYQcTBZeB4bZCWjnPohsShbDVBpNNd6HARKMSZQnkgC8yS5L8qVPgACvXwHxmDn2",
  "key12": "4zhF1SeBLS6dsL843phF4gvqFVCTqhtNZUFiBSLf6BeGEMdaMvuLCbpBTcivvGrUSRrmxXCkimBCvCooJNTbu1Rr",
  "key13": "576bFTvknkmsc991vdiACpA1byCETswheFsGVCR4qwGrTbzDDcyu3ZnUWSjje8v3yFRKbWqnguj7muhVWkTfK6uR",
  "key14": "5wDRL779c3uENjFoHRN3WRfWDfTnKsZ6hPboRVohdKKy7t7wMamFvWqeg5Kmvm317fd1gVnjRuNJtCA7oyX1de3x",
  "key15": "5yQufiP7ABtqBZmqmLwNhFLvpTPe6C3iQSgnpX8GW9ocTo3oEywVbLeSbVYzbDhepmzYp1BGRX6SjjpVxZCHZ36u",
  "key16": "3QTLUd66BGnzQ3jznjiM79MctmskeMSSQHafM23TBD2hEtYZREtmRewwtcsN1znYpB5ZVxjQwADuNXfpg7ZtFoyN",
  "key17": "2FudcsQt6m8PXzVXX6SCNG5rr8fhQ2NpduJUfUBXXuDhnLfp6achzR9JPF3i1KjMkmBtQP3Yt2D6ief3QQMd9j66",
  "key18": "4uTpVCYE3NhbNVWumH2xdj1uhGpZHCafcGJLjVLk3agPgYtQo7BEmjJiPE2mwQRi8VLSMJDf97aZ6WvPZj9iru5H",
  "key19": "pkrQuM8Emb3tfHxg3W5PqNp36gghMreE4eZP1K1MuvxcdzMWxv8jKqhk2g4ifbW68XHPzT482VokzMT5fMmoGEA",
  "key20": "5uD9zmvoaHvtmKmPpuG2b5mXTcdZMbCqh8871LGvqWYdTPLtFrEEsqJdCWXwnyJNE1C8kpbKCHyLpzTUYcyUc2r8",
  "key21": "3rRcmmbXuq1ZzAs7rvdPXyGaRvzquYwPmSojxigyu3todaFcPBs84AuF9bY3BQRNbwq5gSdDYiwXaUYGZghfywSz",
  "key22": "2AtkA3zbv5mHtQiLXCyavXHY3maFccxH2TtGrmkecJH5gxvJP2PbosZxbSV7FMo8ehPiv4w4kuZPYk8hoRLUoG7e",
  "key23": "2zMnNZHz6wF47gwXMqKYLf1jJ8Q2VsVyjCVojRAURGdUtxWfmy9jveXUtkQqKjbzBWTu6sah8FtvMdrwC7cFEsei",
  "key24": "5HzWW21CAnPj17Ua1kXuobQw3X5guaqQPPviKnUajXAFfa9hCCtrTRdvvTtT1kHqK2QN1Wvjz7932AmeggVoRbag",
  "key25": "261TNEn3piu4gguTbK7YoQV1g2XxvmHe1oavtM7unA7oZKMJG2Vr7RLSYYFWxETggzHtAc826hP9rufRoKypMkL4",
  "key26": "3fNDX9cq2uP3NLfLN8im4gmzd2sL9b2cBzZAs9LRv1eJG6HkMjoZTD1UupaPc61b1gesF428jBiGbZLgPdm1V3rM",
  "key27": "4iXwVCcBYSvMtXhDw7G5y1qJnKNQ71JXTYA9efEYoivJgZ8GLfebmJ7KRhewhKy5CShoZNshvGMZh2hvWYZNUnXb",
  "key28": "4Wsio8MyeKDATgwhmswEtRXCJjqVf6CqCFjzjLUBNrYWt6knRn6H4LwjKTVLccGvH1pPkSt3mQDCyf9tB4UGk3vn",
  "key29": "3LGxC69jvsFMWwwuVSaUGpfaeT3rtV2zt8dBwVY2rZZ7VaFqu3H6a33sFZGGtUEWgsQMPwd5ZJMuVukYH7jJELPh",
  "key30": "4G1Nf8xitqqdMn54YFYSWZ8dMXpuxzFoQR3RS56jfNegrcXEAEEcpVZk2LLpr8FHMwVzex7q7rTPW4k3fAseF5fa",
  "key31": "S45sShmisf4xtvT3bC9GHKTdYWBdEi4gyXeEPTfWkdC8j83KBJwWr5utNfaunJC518x9PHyutV8PzpfLRBN6mLT",
  "key32": "4CbZg3qfp2NgrJmaGEM68fEDUum1Xd4ZLvyx5bvQLxw8n5oovP9BAFBUzosX59NARZwsoajmH7yoZu6So77zvjKo",
  "key33": "MG8EpWrUTLCNKw7k2tm44QsSb3MC5zgA8ofGBSXq5UV3EvVQV3xWK7dKWGQ73byG4h4hYgNivAvnpyyqnzKMDZh",
  "key34": "4cuZ9Zg3eE2rDJs8JKb6nFyb25cjX6CB1f8n29QsrGHRZTgPnMkycX2vxMjUwwiGr1kdMWYJmNv8esNPjyBFjYrf",
  "key35": "DBseFT3i8uxh5xfeocYwBDVPajRfxf9qbBvdAJTHPPFWBjYtgaZsfjS4ZRh7ysm7g8XGN3D8zgKtjA6FQz3igxx",
  "key36": "4hqTTMHivFctVpiwuoPYDmQWRRdM4L5g75P7hz7EdQhD8qk421qYcmghdpuiHv9ug2L5wK33caTiigWxzhk77HU1",
  "key37": "5xf7giX9nnqFPKdbb77od4AK6SpBsaT7r65nEFiNHSJrPFxNH8oJ7g2hVi2AAGxmAgjnXeRuPVNdepToEYbmENmQ",
  "key38": "25tDPbsUwz1wFfQV6fjxwsB85oHtVfB63vYjWfPpgcadKtwZLsYLdfF7yfrNfthnPZb1LAK323JnHaZiHxjRpica",
  "key39": "3ZSyB3Q6oPSt8q9obgiJHRAg62Wukn3haWMjoAZUZLL7WBJJmWkTDqijxkLoBvS5HuLPT8waA72uLUGYxzoSAijs",
  "key40": "64tRHDQgsjrfawDchGqaPz2tp7v3XQhGtXyNn7CVeVDwjjACvRT8vyU9C1FV42GJN5KpPaMM8TnagMqWfXbiGf8p",
  "key41": "VawSHEQ74jZSXpDhExN4R4Bi3424g6s4u9Ypg2QoZ4tF4Zi97u1BAqyDgvuRAXF5WZVPLFSU1uN7DAFwvPgJjGE"
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
