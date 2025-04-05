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
    "5PBFbPBo3MeZbU7MMZtXMKLbas7TihRyV3HtRmL3cgEpKDaAEmJjJCeErtP2dTYEsYcBk95bj5NLXu8ycre7KFNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XPERnTi5eKQ9Hutc7jWdxT7o76nJtpLjb8x7Zajwhv4YL4esBMExe1giU7aGLGpVQpyTBQQXA1zzw1kkNDPqDuP",
  "key1": "5kTDYecFRjug3fXDjXEHbKm67nfctBLTRM6BgES5MzQwBVtTUpAUaYrWoJ7D8yj3K5XtTRRdE7sd9WnufuRSXeYk",
  "key2": "4o3amcJPAwdsdtTyS4x7m5eVeDVtCd1Q5n3jbFQkrrHiG5KLSBREzQPeAaCxi1eMzYA73NJLRXwqJWk5gG15VfWC",
  "key3": "HtuMNgtzoiry3E78XVRGAsQgc4QWQQy1hWyrRgtn7vfWmimGmPxFkC7cCKRbYRCapcufoYqjeTygrH5MoWReDPo",
  "key4": "3xcUURX4WLVJhGtouz2qrQEko4SoLRQWuUE2ogQGkJhSc97VJF9YmEtjRwjBkE1t4UpSjwjVdbgiNrrdyhEmRmJe",
  "key5": "3Q72B8cN6NpswSEsuGxWZkgJ6cUWbXuPFJjWgjEt2QJL43WuCeKHyyxfZ1e9GPSjXDNTaUMgpfvp25LhbAaLmXbd",
  "key6": "4twSU5EZuutCxJoDaNDBZVWyAeFoJFozhWLUR2MDUx7hVjQgVYaingBZxez4r7Y42K5gmMN3AUt2mysnsk1PRPAr",
  "key7": "2oEoARBDhJuomUdkkjYxwV9hZVNwiLBXPZSYNZqTRUSGwmaSFkM85Yj9AY753Zx3xnqkPsm1s4Yc4zqFTmxQvCbq",
  "key8": "3RRRixCJ5HKxZGUqAnkHKCk1R8rVJtBkbLEtQ2SunKeaUqxxASkC6gYZ7rNuKfDk553AHng6Qs2cF44dGnLtLeFW",
  "key9": "3yq4MkAw48PxoUTXt5Ay5mwiUxWGdtT8XejZ2mTCCjJvAwqto3bkPHNmZTdpU1fugQ3xE2RmyUHhupyfGnZm8j9H",
  "key10": "5XgLaAR3hC44jGAxoCgEqHN9NYEi4ZuEuYvUTkMX9wDkiXvUpAejCqhPVMDSY7ncG4BTEG6DNd84pFG9bzqmRQcW",
  "key11": "2eWCN9s3ZkATr42ksfCd3BQmWsc58fgdKqhVFzMEKgjiMYc1sURfmzbGWui3JpwdMC8decrytJXLpdTPUpqcq3ik",
  "key12": "472zfCa1vyp9Nhw7eGy7Tm5dNnZBJGqLuusw49jpjQyBzC98DuZ2LpyUSAq8UFvKium6t6tRDMp3WNaP3LLubLft",
  "key13": "2gyrT92L6zA6hdsDZL9DfcjHn1Yet5dfAcFCB7WpnijqEreX6KdQeoLJBCxNAAkBNitfVgqaPaNYwjsujci4xizV",
  "key14": "5Tyit8vdqNCVX9Ur3vmQAy4gb3AvyrN87wD4oFfpc3gF9uHDJD5y7MsF2naJeT6f8vyD9nFehfmXnBof52wWF5gJ",
  "key15": "2ZXg1HxRDGJgGFRunSeETFrCvTwoAQ4t5Q1HfSq3wWQ9PGd5gTLU6PCg8FBMBCV7KUEDLitPp7nsH1ZjQCyHWNvA",
  "key16": "kk1w8ZXHLTXTWjeQJY1Xg2C3kDVYfYEuBPFS4sDyi8y1NwnJCSWLA5DJrPAZQ5DrV3hXHTnVWeErEs45LKg4NM2",
  "key17": "5U8GDUPbTcggb9T8RunG4BSQk2fMsDRHYmucQfC8pSL5AcnvNRXNWfrD7coQfdVufZq3o7yd5kjBJxFPUKQkhQKn",
  "key18": "55UMxzAWGpK8VNpiHM6Tukjs7GN4vYAux5LL37scSf93psk1W8BEUiG1VmvBDbBt5CNbHZNRzsYr8pUCc7UjiScX",
  "key19": "2hp5yJxcRhVSE46ffnhoM8jx2u1hvs9t8YeJB7itGYph4tmJK1KE8BsgCosgV8cjD4XZZdU4g7mTrXCDZvkT83w2",
  "key20": "3ZWiZf434ho2huQcJGuiMNd8tPi2VLykM2XFnmJKpdUWfmCfvcutn9NeBSxxXqGcHdhhq7RMiQSARc4AniyVg6CJ",
  "key21": "6x9KaRmDkeiC1a3JSncrZ1NoeseRHQjGaVjL7F219AqirTVzwD2xwcf4A5yjUw4xFxQQqzupWLWWrkutv16z5cN",
  "key22": "2g1BHU96JHLY8X2BbXwfV35So7xUH52rEQs23L9ebyWKd36zfQ9EDt9m9TM26FsM1au7gxX6GkKk5p6nouunnWff",
  "key23": "5pjBTcEFq5xhYSUavmHhbvuYXv7JGdtboWS4SPG9HBXn5QuLJfQASQ7hQAAnKAsWc4xBbA8J7WGb68ErQRn8kUNb",
  "key24": "7wtU6rC5AnuPHn9RsiUuL1QoxiDCYDJuxafJNzvGBaB5ZneZsDN8Gi1BiSptNM8wXiMUyGs2qjjujsiVBQgrKKB",
  "key25": "67nQQJNQa9RkULrwAkfJoiH2ywSYECmtuughvg51W3UEGwrk4tTxKkuWK6HHHTbdTPT43fJCPVM6akNxmKpNxFJP",
  "key26": "3Aqik5w2evhRWVjynKGQo9r26uvVUvLa39YCiuqM91zr5ZfpgHy3hf3Vs9JAzMfbYWH1EKgKPEub2o16NggwYHb6",
  "key27": "2RHb52jF7qnZPf9jH5Up48Ry5RDxfR6hqJidP2WWgrBjh6byf975g81MT1Aex85sNi6GXnKFce6axuBwfQENhgGf",
  "key28": "3pjraRKYDcdYejuHe67UUywK4bkZR6gj2TKP3QpSeh1YYDUY2qJoBmYDChf1jsUMwLcMESk2pGWHKJxfVwiac9q5",
  "key29": "5t6nnLzdy42GtBGvpeEhtAMqrvXydmGC5qD3soXFSykNWSguq6d5yzcBjaDAJmgaEAQwCJgZDPoWUfiqA68YLxTJ",
  "key30": "5623FD1a25GFx3k5ykS66p8CMhhEB6Bo9yjs83YAS5Xnu16fKm6C2HzHqJKQBHdYjarEqZrNqK9z4wxSkb7P41R3",
  "key31": "2uLAhZgM6Y2QZXy8FzW2woRrSbWZnQWaYTkHQar4D8LAKTdoQCNRVHqRddjtDkpxYbCWtmjrRBMQPRf1BsasiNuA",
  "key32": "3fG2iLXzBjMbjhPRvNoGuLG8HLejRwN4pNwAVHdwxuwhyvrJuhe9xZBK9PJHADtov7jrQry3naeV2xQ1xYtfeUfp",
  "key33": "62KrwF9Eh2xBnzjVbaEsQt5mpKwso4bccgCoxQzBAXCGfV6PiXtUYYTiSSbzCCobSYoqr8vTrEVLAENte5Qg7xnE",
  "key34": "4bMMEx2f56GdcqLuDqP6JYFQNnZzKPRuKAoKSsg4nTUGYoeZMqRV6vuuowwxomRqvVL7Jrm5TZAWXHte3hXoT5tL",
  "key35": "4KVGqkCjVCzinsnzFdAASoERuH3ZLQpAEqHe2useTNQKXfgURxbkyx3A4jSK9GcyChTpXk4xRwBhZw6vJoM2yZcG",
  "key36": "v7FXmqc9QfvFxcMizKZvvBi3CY7TxoTDaL1ZCgi8oi92waUatezpmHKqp4mu6KguVWCthnwGzu8zfnjAgnt3E6k",
  "key37": "2TEBHbnT6KDvjknZKZLovBkeaUzbZyJsiKNg4vqoDPB83HF94xYyFKYmSmNN5hwWgRz4ibksuTSw7qpg5qRguDVa",
  "key38": "2veoVweooN33UNPWycWuDUYPEtfqZNFtsKrEcDFo1QHmEF9u2Hmf8nPMmLoV8R4Kf2eiYgNtpooxBAzkXQ1rWXZw",
  "key39": "4QmQWAqgHxXxbDvCu1cpDNfhRGPyMr7C8FyepPapdMqdMtwF17cYVjGtacufLT7HuHveF8Asdg7NceW3sML7Zekc",
  "key40": "gLKLZDvzpVfxEHKapQsfiNixDZySNFq2mjgx17YATw6RzThkrafrgxm8Qp2qTj92pMFQQDosBuqD8Tv7RME5yrZ",
  "key41": "2mVcM78Jmrqp1nc1SVYkkB8DAoy6Bpt9Gy3dVgFh8eGnqzAUDATkGpKsorLx8aBaFYyzFeYKNHKGWscXqrxACovs"
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
