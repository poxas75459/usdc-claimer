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
    "3rdzbSKu6fRYsoLcSW4RPS9iV13GG71nBxrTuzqvVnzDmx4xJFkxVG1n1tC6qq73AJ2fgmBF3dGsy49hRSEw16b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W7FWtJEcUuV459V2rCRDtPiZDoRDL9fSm5NPkyVYeJmxHKRWWzwMTPLgTqrEwEtVuf3ewtPatV8R8DoPcLsGKdP",
  "key1": "2GkXsdeHpettydZjahJk4R4jgzXtGkAgJNZCnSGgeshZeYjRHHveTmzzvmyHtuX8ANnjtmo87RELhcbCa5jaWBth",
  "key2": "4JU67TZ163k8rTq3FaBmGTXmDnu24JGEaS9p5n39T9YKxfqn289fY71UKxirn3jEtqKhydmFwxu1h7CccxwVtmfA",
  "key3": "2itaAgMpeXcWXfN9rjWxfoAdTr7dHydqUUatqCb3wRp2xypEjHDWsSamC855RnPvEVpYY1ZgcEg3Z9WQw6U76w7t",
  "key4": "aaVfZse3x3qyLDAE7ruRWVBc3VVCP62H4nr2sBMgkWsHXfkVj5wUSEt1XoRvWCmzaTkga5kPJ25yNn9LdsCpwMy",
  "key5": "TSF15fGA2T5HwEfZxaqtbq11v7orxPgb4yWQi4whhEYC1eUw2agw9PrvjJzG5VoAPXCnmH4TEiNNXRFG18hTVqe",
  "key6": "b9jn2y6qCA9q51SG1bWxjYMqxP5bNEBd1ar2xZF3pRqPu1k3a5owPCBWffSCB7KuCwFMQCF6xitqVhxK2RCz6Ap",
  "key7": "4CDyvfV24TJ6Y6p3U8qPZSX3UY2xQ8Hvqw4AgrH4gK58zbzoUnhUSx4cpkJrrbviEZ46VRDHZ1CCsFso9j6stWnj",
  "key8": "5qLFt3mJXr4WD7gxkVd1hurzBW5tatZoUftWk24v1AWXqYqkK7o2aSSZ3UQ785DCSDsm2WTSLsCSkcwPgm1CpAGK",
  "key9": "LqgSVyNEZoA3SruAX4BXni9gkMN76BrXYq22ivJZSPJ5bvbzarTqjXjKgiCWnMgusNBeH47c85AK8r5PPwL8EKV",
  "key10": "Zo8R25931asBoXPPbTnWWeZ9cX5cYmKfheTMkV2mts9SymEADk8jyenCEZwsJVbgz6aqBTwB6YGmxNGDxGo7Fts",
  "key11": "2hZW9BL4KjEGWoDSsYz6GnorNboa1vFdnYcEz6q68HWm8ksuBJsnHPrGuj27XVUhPURw55te9hqw2LYSUuJjWeci",
  "key12": "2WDdAGC3ZpZhcWsu4BdzV4p2nGrDooikujYMgCmzpSX4FPq9NTiWXWF1PmvwKBte6uujxhZhvmAfN45TqDLUQ1V2",
  "key13": "5iiGtrP1oY5tHRWbTYNVxiwAYgMV7UNi33s4nbWHHmSzSZRy735ZhvggNYE2m7UN3EihQjbKRF7p4cXMwLEsY4QY",
  "key14": "2uQZGY1BXKVBd8BFDSpeyohA8DjFV6218TinqVBMY44q6XQhBGPN17LC72ixaYtVaDcZcfikxLA7Mo2npKTTJSan",
  "key15": "66qQFsB2va5GyUZ8UDrRKxbkAzctAQXnewCyUKkYprsnwQBf8UfTVLiineFV1sGfLQd26wA1eFyCUuf8mutTXhTg",
  "key16": "3cUTQpHRoZhFpGh7c28nmLmBnqcSzeGkGYKvXqUtSDYvzGbiyMH6iF62xL5oYvuWJGoY72YXryyZzYwHxp4kwaYc",
  "key17": "5Zj3YDwBBTNAvebs8CZ87ma8YxETnXjUtHyyR5Cryaf2DSa35JzT38PSwGrqutBBBihWp4VmpT1qLZGbcCLhAyDm",
  "key18": "3WVCsfsZn5CrQTqq69aamUPhLHBGsgwkerYZV5rvTxdun2SFTKbpV1wyqi4CX9avVKm7mkuZqYRUN7Q4hR2c29HF",
  "key19": "3wyivMmz4dRqAptmoChqPVrrFnZzxESB2jGh2uThhHaSDLS9AganAyDy62Z6msPoMszDUkucJ6bGR6APdKJi6582",
  "key20": "2XnEodQSNHE9iJzcVB7PRCBS65qcTx5gYNZGyvkHrh13VvR2ch3zLmcqw8oQUmmv6o83miTh6vtP6auo2DBs2fMy",
  "key21": "4gXdbqcBFtY5VhhTbPQffd88sDCcFQnPre7tUFWEVh9v9hCCuAhyykFMRcyJXeZwHXzE9RfyxfJ26hK7nZvQLxRm",
  "key22": "5sGnBgzAGAS87W5qAQHuMapmVnvFttsAXgTJg6qCKpJcY6SeqMqNwL6AuNjYCgqZabYXJBgZzfTisDbhqB3nkMRn",
  "key23": "3xGrS7aKTbStB2Gds1W6YpvHmxr7ndnWJbANuSscgwb5DjsVcm1P8rNC2qdf7J3tgYPmBVMrCPoyHC1M4NtATjC4",
  "key24": "LAdzY4xVcUgjFqKNfJJudDsQZtAzzmZ9AHuYJBaDxDc6j6bHmBtdsTYrsecMitG9d6a9Xg7UFS7Q9K8RdJdSzwE",
  "key25": "2sdytxBKsdQyuLkx6Gbq1ccwi5ppCwj26S7BkBXFfDFJXEH24z9RVfokDk3TZWLgRtTUgmJVBsS5qeCyoDwVEsNU",
  "key26": "285mYGVjWceBHXqo8TTvg6N4vYepwzkZ4m4shbPMTpnfc8vZb4CKt5MZUuuV6Gsb6vUnydtAhv9Tf1KvxTc4V7ww",
  "key27": "bzDg1cNz2ypzpNy6EqCfyKMxgVQ1FokH7QnWVQccf9ioANb9n4vGeyVK8BtQpbBqYFBMmYmwq929RHGezp9YSQS",
  "key28": "2eE3kViQDtq9EzS2c8UiTARbcGYW6Evde7mpPFvkHuVzKGd81HeBoDnFVupHJXYoPGSqRAimF2v8oxXKNSiHXTfU",
  "key29": "41fJfcT9B44yPJCMuuCNXp3GH11saxmTWxfydmR7xs1wx7Yg6EzaDSAzYUeieHj6XmtCDjtVa2bDSKUPD97gbcAy",
  "key30": "2qW3bZrPDSKx4RquwKQiohrsrHfBTAJJmCp8gcf4qGSmuvnSqcygmxKtjBp8EDCZdQRqtQykswWDJYuTEyBiJh4K",
  "key31": "5UKU8j1L9K73y2Po32ZQvptTEHQYrWywT1LUFieKXKA9i2xKWsyT9qDEpyrUwKaVW8Fp2Mpn12H4mDYKkocasXZy",
  "key32": "3gqswVwvvTas26TUhSwyNb5REoYrzDVCCDCYwMqSRhMLKsbutikU1kqZezfTcAr5r26ogtNcPRNnzK1rcxbGS1Pm",
  "key33": "GRtqsUPqk25rTHDrnTLsdHC2PeWN6fmQmgyqpWJxNDECNLd97diEgbXV7tkc9TkLqzTmiaQxw257A5EzE66fh7c",
  "key34": "5KXq9JRP3X7i4sByDDMRo7Dvho7vA4EPsx5d8YRVcBXiNQocLy45mbba3NfHWwqqyhtdDJG2TjAk31zrpzVnXBxW",
  "key35": "5Y2XmR6sreyUhtZhoPx5S3BQmyTq4PYDfD59cjwP2mZYsJPfssKWR11euYHG6RFqPCCPNsoaFsfwSCpAUhEDzgmj",
  "key36": "m7eLP9gBdAfQjfbCy319AuDfZf1afeqT5oNHx4f9mP45H88hXNPMYGZsZxGGYfwKxtfRicW5XrAjuZBMMPEWEeK",
  "key37": "5JbC5yGwxdEzV59bgNfmdsvK8sZMbSBWyEVNSFL6wGJGz83PBxSGLfn2hW2w8CGNBtnv5oVrKQLf9xA33R1ox7c4",
  "key38": "3KbvWMTPxq9difpVke7rki1gtUUTQobz2uhPPrB3p5y478bYKFZwgBpuxVyvbcBDKRJvd9ccJJ9sRb9k3FMqMnTb",
  "key39": "5vrvwTgc3XBXoY1vL3dvuSYMPQsVQFmEhm4erzNiYBwf6Bn49NCJGy1kFz15dd8TfkhecRwWVRPULUVwoXx3bLdi",
  "key40": "VEtWkcLQX9QhKcur1SjRsYf11eMk9wHkMQhbMgxXpZLeRjyokZkxrZgvp3GQoqNZt4x1MxCzQkHxgnv2c6BwN4M",
  "key41": "3Gh1ZFNVMQyCpE9LQyMyC43EKA2UxbhFgYc31RZ8UXFTE3BJ65wZfnBhWvvd5noKPoXmEQZXRi2qxNv69bsMtj6L",
  "key42": "5G1Rtx9tCRgTqTg3oA55qnMmjX7q9GnLmMV7B9ZsznkZUfpDg1Cqcssd8C9KpxVEGnmDFHsh5V3ZQcUdpzFpimFi",
  "key43": "4tuaq9qJXQvBJR1Z51oRz7EPejWhiXSE3zHjRM2zQ2vXxpnsbwp2RgEGrywCAJUFCjifLpjTNa7fEhXArQ9WRMex",
  "key44": "HLepd1j2BxwsR9m1LNVAxEbXqr66ULmE7Bzog8XFAKRrrofELUMtSEXo9zVKncexpSdaFgVMPGLQxu1QGHxhJDt",
  "key45": "4dpipifGksjmdNXxqZxZyrmH4AvfHeAReAXh8kUekyjyeZEz7ratm3X2RcdavTCbw3JdDYuXNggHxrZHhDKcjdCw"
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
