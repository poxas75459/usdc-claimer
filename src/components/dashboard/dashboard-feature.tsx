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
    "4iCxSjt6FSN73jahnaAGjhXoMu4DuzzaYdHfLEigYNEZouC6GGhntgZwX85P8GCHFzEW67Zee9jd5BL8FPMHsHE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hs4YXnYEPohk8Fo27mCcko3cMGoYJSDNC16sFqiaaYBi8ZXUczi5tscLvnuJ8xeDyCapSkSHg5WMuDpvYoT9ZJT",
  "key1": "3wntWEj5dwM4xEVnpBV814ix6XhpNP9DqjUbNGTRpKRM4psH611sTZGiN3UuRkb8uqYBVcMxafM8mYo5rWQM2Rra",
  "key2": "5SZmGB2XzgZvh7SL8u4HWNybvtxQU7HyKfE9VLa5zTJ34hYjV8VZxXPTuHhFHe3w9f1a8kRoVh6X6XCuKtUTWysi",
  "key3": "2t7SweYreaf2AB3dgScXxDWfznYqfbtcBhoVbkVs4dRJKZxekGtictDohgUBWyMdv7JQVt5FjavrSG17vnMFJWmj",
  "key4": "3aFZWtwmVDUE7xijLSzGVP9gAFvjuVibzCL2vpW1ZPgaMpWf6LzEZYvXJdz7nJPZdCLBn16voTXp26EKJqADpn2y",
  "key5": "3eLy5eMEeW596EYzRDZ6m76ksAd6YjWzND5bu7zgRHtAwQmrXoQe6K78jzMgZDQcxYDMkCE6meirM2XJz4HobT9e",
  "key6": "65mVtt3h61Kfy433mtuSu5ZzsSc2pgjUcZMWqYjcdFb94tFfvqDdeFQhNJ7fQxsZpwfAWq6C7A2WJkErjk167VQr",
  "key7": "571fweUi4QMPY2QzqzcmfmfGr4zUE95ypkGCF1qvjDbezgDzdtAs7A4EHGrtKLNW7qG9rs41fYhLtyjTgNdiS7dG",
  "key8": "4a1s81bqYJneCm2Ey2KhocQMqXRKwjPYitJbboGEbLmhUYeS6zvuvqFqLB4CDCmik13TvZCscTFYRevk1gG73U3x",
  "key9": "5nC4Ca4ZMeVQ2Bf8ZVhNMLdkjEsLucrbxHX5UCsu7fuRkbxFsJPrbnwsxFDeJAGJLYEWrxRsNZJT7i4NNV8e8v4T",
  "key10": "4Qg271DdAqtJxwMGGDPaXKWCF5qDGVTsBmoZo8M1SHX5xMcicB4QuBuLu5HEC1D7LdfFvK9dCNCbthMahhFjkySs",
  "key11": "32n5vuUxxiLU87A2Uybtq3hJV2cmPwNp6mLxtzgDYZQ5U3MkKct1E72ryqdjo7dipk73wiHeHE9mXuGAq1HSWRaL",
  "key12": "anvNwrCwFjVes9arfzUitBLafgBbpf6ADVXg4672RmAXLqxTYxKjeTDXTorJfvHrYM57R4bfQ7bNN9DmpYLgbDD",
  "key13": "3UFHAxAJiCJfSjEuSX1wfmPQwSg19DySe1JpexwJBF18iJ6Q5NMaTJUE9Jkck3FJLqLwR6smaekxQNxHyFAq4MdS",
  "key14": "49aeyNutBQd3n32W4hJL2JX3qFPmqbFsrBZGwu3SJLpsmi1Ghxk4JTXYAahqERugpmw1eScDiDrQPYgCfS84BXZC",
  "key15": "3ADdjtnXd3uAgnS9qvMJcEaZx7Vum661sg685qXBjfULcWU7ZDNzQ6jujxJs3auRep3UtNW4HPQbkLymPjRFeETp",
  "key16": "4QBYGy6mF4QdUbfgUHBtrCFEZbDBD7UtcpV9bndLeJaDFZ9gau88TErwoxG6pJFjXHKrEbY3CSa6rbE6Geu1FbL9",
  "key17": "3cry3oKayYycNRxrWg3ei2kLhR9osAtS31a5TPeEwUSEicxDHuPY1YFSQ9m2QPiuwMHLjntoZMspAF99DA63qLPQ",
  "key18": "47AnwAnfPXatLaPATQtWjrhhf2vMCuAJX7STmLQYWZYEYQfS7dTMUwimbwgJagvEh7Ci2yEbSfNwxLf5yV5cuvEL",
  "key19": "34psxupJgYhB2BoaWbB9Vpc4RSjHeV64xcbjLhFpeZdCpN3dsr9Djf6oSThYY17uUNn5eG6K1Fc8NNRYrobgr1w9",
  "key20": "2FWBMajc1MLi5BzH5pKeHgRL3d5n72BmxY3Y31jx2Yvs1YaKKT4Bn2bhZrGXUpaKfWr6tUCJ34SEkSWyWnn787NY",
  "key21": "4iar8skt66LAemGg1HuZnB4oCPmAD8maWwPUm7ixgQKu54fQLMpEhH78qr9ohyjMPRanRLE4ceMy2NpD2U4CKGTX",
  "key22": "67r3e58ZemEhANybAPPKkUnThgMq53AfGvpkVapUjMSvgkNVqmWmw1mLCJdBtJrA84CNqEjAZP5UUYQneb7asXjz",
  "key23": "4wntzQTnJo2W1BvgqLoJrx5G3NjA2eSqyM7MFPCWpRkGtFxiovWxFNQWhzTaTbTpegbRgwRdTyimJrC1KbCwZzVC",
  "key24": "j5YfUARxZnGGt9GmQgvBCxb4hvCvjemf9eU5rkowrrRUKaXf8Lyyz2gBXzVCb8hPJAecqQEUrLF9RWojdKcCpTk",
  "key25": "Z6oKRUThZUjg2dmByVFcM9sUHfCTkFfViiE4eUvfjn63veZA6BP27bNeBe2rMdLXuAnthMUu8HHFQPch9HfJ5P6",
  "key26": "63D2tL8C57pc8Eywg83cMTNPkFXdDJxdF8qh6XhXeEfRdqUFpG63yfM5x59BPTPjiWj2rH7WFvXs98YXewW2bAPp",
  "key27": "4VP1vU8VMYG42nVvdSiK2H9tpm2oDAk2YUxk8gGaLBxrHmfBnuWfvbiW9cettWya4myJVCvx7k3sJkziVjYmDgb8",
  "key28": "5ZHw6jXKXFk6QTfTvsoGzrFcx1pPZmpsqsnVvcb4MCMDSgdkp2f1eH3HASH7srvfatXZQYP1LwGse6LQ2RS7jMGN",
  "key29": "34he9RnFWjMwRYLtB17Z7ivYN7VmnGrzcwjp3S7HfRYQahRZayJCpG4QtcsRJn4DjRNceg5JwvfnKhjHPAaUCys8",
  "key30": "3uPsvQpe4Jf3VDccCnA45nvvzDTcS3w6bHaKNEQfg2Xoi5yJUcAsnSEHH4yzSQRTBWLobMh3xfyV3wPM1oQt9dES",
  "key31": "2rHCZL983PUzG4sLSSCm1JYrK6KGggH6xNR2yUQuqiPFyUtfvu6W5eMvREFQK6FDcsXvcBS4apDp9NY5BJgoZzgk",
  "key32": "2TUmSwvHaXSCEHoVYjFNyVHPtXdvwBtTR2qdQjSKf6A9zndbULk4aAseM1ziYuheGixiYNYhLAuy2WKbGn7CeXu5",
  "key33": "3zyfe7f9AqZkFkJM7nh7FAtdncByzXRk2JFqGGR6kreNYKQFBvF9mb2T7EVB45gjhpPc3nLApejgQ5f1hCRmFCtQ",
  "key34": "3d1HrKvY4VMwXtTjwQQQvZZ4BQkAeiD2KtxMAC8ECrYxAzF3cuwC5dExkBinZKh7oSVHKyBps8soha31R5sAgL1h",
  "key35": "5WZwzhhFkaiMZ7rFmpVA2SB9AjTzWhmDavY1VqDA56YuLayeijrL4LiduLEYYb577U2br7pzrw9HUXuHj3CNCSpA",
  "key36": "4baYqEpEbfK4HuGbx5NTHFLMpXoWsdyFTQx1HALHR9mMQNCDbewT5A4zpSSNs9kvHRi17yowtxscbPB8EgYcix3p",
  "key37": "3ckw8fXXNHghH4T19b7uVWbAcya7C95i4FMpJ1tGexuYyX8VoyB5Pnicr9zzcX6wKy5N6wqC2Pp4YKHEUyLeag5p",
  "key38": "FqS9Hvt1yaimLdwzaWuMdBcU48xosFDUVBfezdSm192TSjq6u8BKrAyMnF8ZEjGtaFCHFN9ECArnvviGRs1sqsr",
  "key39": "tSLniuu4mAJ8L5qFQ5872864qHxdJXgejaxkgmKZ3xET36oEbpcRwDi8wwAH7eGwHmQteFhJeB33XpiNfw5pCpq",
  "key40": "xZSicNgMcTTUmGhd6NYQpTFkWbdSiEUVbW4ZCJND2W5sJcUwfdUemFwztxdRJRb3U4BeTwyWtq2SLZmvzq7butT",
  "key41": "2up29wehxQqxkaiRC27FSUVm2Hqajp6inr9QXEkMj9ian7xzv35dkVEqKFYXKqHoHHz8Zg5D3b4Ziu3YeXVvWRrm",
  "key42": "3PWmG7EMgmHP96RSRExfKK5zLqXr8kkPPDLsndP5PDN2jhtXLo8Tmgmi4y61bnQo5NN9MAxNgkdqAM4qcoyVCo6d",
  "key43": "42kH3Jrx5pm5JFKi9jjkCCeXV7FgqNtg3bksx9fQ5HbpxL38u1jPZnrDUavg8Gkv9vMqisvpiL22EyTFU6eU5g6B",
  "key44": "4KcidfZiNDmmtT63GXxX3Xwk7Np8aBmPRzaiVRoezqNLJu9Zf5xngGqxR3tkPrRavEBgLtjGVUfiX4Mk82v2sekZ",
  "key45": "4ZVjyzQS6f579R3BVJ4xTetXUw5CgwsTdHx3xkgjsnH5LevMN3Si6CfsYCFHMebPd8ioYDBmc691iri43BZFnVqX",
  "key46": "566SADNsEXbbD64yjw431u2B71hTSq46Qejru9C5SKCNWyMWn9Z4da3URz6j9RY2NT7xR6XHqRZnsKcRK4hphBZL"
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
