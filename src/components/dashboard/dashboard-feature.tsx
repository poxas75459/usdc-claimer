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
    "4R6C5MmNFq3FFFxyaKG3PChmxs1QtwZRZZbuL8S4BPgFhSuxSUqJvZhmDjxBs4ht2fLM7JMpXj3nXxG9sEQLi23S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ro6eipGQvXbHS8snzDneHM3JGB5zxLXvYhVj9KHiameufvhHThdVzsA7A7nYyNnfiikjv7wSGEBiPxSxE9JChHC",
  "key1": "2pCCtXmtxq6zfNZw9QUL7mfMGv8USnFRPajVNDChsVQYE7VwG5555b7ZiD7q8sHk3SatX9m6ZBuowRRB9vrRzhLC",
  "key2": "DQwbNNkquPToRcNUvytNBd4Nc1KZ4qdGpU7L99EEejZVmixgfWYiRqx1zSJ4zCUX7zc12rr6QAuCfaWyEyU9BYU",
  "key3": "4BLz2JZtJX1tx9EjLcubU1MfRGCt9oRZx5NkSHPnc2ZfM9DTVdfWBP8u69nzqpoCXMJzC4v2zTgMrtodCQTBigmR",
  "key4": "3TJiSmAjA4qNNsw9NstrhL42FWXPUtiL5pJFxVxKSCXhBEVq2X3Xs7jY5kavT4fAR55zm1stNDhJy3LSqR5D4Bxc",
  "key5": "3gdEzhdXPRFBByDUhLv7JPwkFkZGsdsiRXufscAXokikRH9J9jGWLyvfLX6FQQEA5WDzsfFNSCoBenZmykb3TPqp",
  "key6": "3ip8rzAGAoiBT83VxwcZhm5NaerzsFiuyfzUMqispzbrN8p6ENjQKhaTKebQHd1FMKZmFcDigSSGndYt2uXhuzHe",
  "key7": "HahuLjVXXbQPQGbZkVMY78RzrJzhhVr1TorZwy49SR2vUmbKNwTdZQGqhzLtE8jr9iHk1qJduN7Xj7dFTVBYQYB",
  "key8": "zp47KttUxD8ttfCDikeA3tsrXAVcgjrLWni6nfzt3yitiQMzW4w6wrCt9UYsJW8ZFiWe7bFpfBFai51sNJh4sQN",
  "key9": "3gy2gz6CAsVhauhF9jutQG334ygHkHLN51uoqKKbEL6SL3i8WAXYFpAVH8EjsQB77mqUbEGEQEspTPuGXAwaRCfC",
  "key10": "gPeps9zcdqtkWhsPe9WFzduZ9iz4m4dUyi6sGrNtvknJ8rW18UrrUxjJnbX7QaKF4g2qSDQxpcukQj7izt4BRJA",
  "key11": "g1JoRg9FUmU2NHS1ysAHSEspUsyHXifV1WonEhU6skRitEfFPiPU6zxZuv1Ny6mCPNDMdN8CpbZoerU7Z1xjR6K",
  "key12": "3BM68ogA1NygKgMDoBMCN9r9Cyo299yTgsYKuPfZuosJG4coK7aDL6Y8hyWiJYBZqQ3ja6oJd7hfF5TojN8ueQ6A",
  "key13": "4mNJG5WZtvrE27Pz4maWdkz733V35Z9gJTSww6qRztmugbhkAW3cGZjGD5V8HeZ6Xs5bo9pgXoyA9gCdgNnb4VLA",
  "key14": "4etPDA3zqmMLoqcEoduguUFLyGM54EAGDX2TGSjPRMAw1MvdcSQKcKeeMjWiVUWa9kdmzw5z4Cc5w9yhNNVDgvUE",
  "key15": "2JJ3MAJsQKMYZxxMFuJafeaasD3F3oRHiBXALS2o5RgqhRAWBHxSdo8N28NpFZQpHKBHNqZZ5UwPCAjViDAESn3g",
  "key16": "5qcEXTDPLwbHFBdSQQoxudTLiWeqJ6kSCUKa3TymdLZnEp32KHv15bvsS1X2jkzJRc5xbipETwPmUWRgfKHUSmfs",
  "key17": "y8LESCWWQm8NzVVEF2rR25GxW8H5XRRHURdkjrn5qmPQrvNtp7azhjdNmqDNBwGXD1YLJRmwxHxfQomcHAznjpp",
  "key18": "2DRwvD2UpyEKQArUJhNGDiF9t41iKoY9QF46vVuY1jtDcFHaX6P8mWndRWCpFdZpoSmkLxc5Rja5Z3B6ki28PxnX",
  "key19": "4xiL8Nz6vZ8NpRkS2Ru7Gv9MLMu353DxntcqDsQdUhUdSZm5ebwVwiqzeFUL59i32G6FviuCyejbNRnFM7ikaEYH",
  "key20": "yFnPdVoNKVyde835jugdawKQEausDQaeCjAk18mpWcYd6XLAMvKCsKNt8yufMBTwrfGCbB5gXevGfMxuUFFQBj7",
  "key21": "34QnUC4RBLXpNN95S5jfXBU9RKiiTdTaKHnNQo8sHATcW8FokwWfbR7PPeg9x4YDZLkdXdnu2zWGb8BNZYfWKDrm",
  "key22": "44DbZYSR7tHGTewp2SgoQ7J9H2BNYT4JYBcWt5fYkUtehTgQ3Uqb5uEo8JFew9SJCP3CURramAuRjLMN6z7qZBJ6",
  "key23": "3zH751rVm5ebv8xhkxUgNb2kk5fGEyVNcyHTT7rD7tpdsc3qwpMcYk2UNzGDkPv7YXQzfW6RoKdoF5G9NZkFomQz",
  "key24": "24Qq9v2SLiFc3QyheZAukmQKAQsVhFkjgsEoxaUBvmFmdsnDGVAzEkDszxiqfGsSL1ibanRon4RN2LtjA6rqNDaj",
  "key25": "66b4NCpxE77KLvHFCQCCZDekfihcwnNthh9ybCpu72W1f5EFss2iDFt5ut1dLk1oCnCTxWZAGMHvKjHPjMuAyFax",
  "key26": "5hgct2gXeE3NBmALR8fswPkcWgzp1yzTUvpZiPLzCD4SR1n3npvH2jzg7eiouLhgJRjdAhw3J81gs25HwZqVvioP",
  "key27": "2UrPQTYCsBg9XuTZPzN4ybiSVWW2D15VqKC8imwDSLamQTupHt43WjUMLgo1wLLbQgTQgHriFzQGZF1uCXqQjjyG",
  "key28": "56BojMnR5j5rd9Mo24udcmy4khw2DPE1n9D4kcdBDPnkAmuy1JnqqEoow1hhaXibxZfpT9P7YymCFNB3urhpcrNX",
  "key29": "4joMPqQfHh5BFzmUvRYE7RnD9hpg2Mr23SX3yCM6jyuqH1o5KyaAu6VFofJByVo6JTHTPDEeBncttCjkvmwbZCgs",
  "key30": "4WeFtxYCwJgw6CTEHGk2FridE2SmLpBxbBDaPztkc8PxmfMgGYbnpgj8Y4SC8cg42eSXgiGBsYQQSQ7ohZfNjrH3",
  "key31": "3xHYgQRVX3gfSoYK6B6VaEq9Gcv3DmKnndBuL9CNCoXgTh47W4H8VzzSYTpnfECXuWLiojffwDey21EXpJ3XvPc4",
  "key32": "45ijfLJa2Ri8HqkRfyURA6kES7vrQF4q657ufEsxKxzTJEH711i7qVA2uQhjhbutmwhwpM4LuarLx3r2d7HLd719",
  "key33": "5pAo4necL2SqhGVJ2mjSp9rUDKYQiy2QaK7DaSbrp6i3vUnNbabZ6eggPw65RwYcD4AULf5XRfyEsNpK43gJKsrc",
  "key34": "5Edi3CV8gKjCzh4QFevM98ppZyCSUMkVCWUjuEnyW6S5G8P4njGFBCBmcj5fzpgALpV2fdvwQrG6cqTXc1U7tjBK",
  "key35": "2c3rdusJ1M3XJZBBwEDoQpkKTYWHuofUFKFHvz6B2yDqRctqE9nfzC2TcPY24Z4PGYMXeGKmhmEEoez8VxjAmctz",
  "key36": "5uRonJGMbavtRZhWP9FtfiGFA9GvNmWxfN3gdDsV55JpGPgs5bfMcjLh1T5Z9bFF41LkWC1faiv2oxqXNzM9pp65",
  "key37": "4X35KdrqZoSTGMwcdAN4mwVfa7j77NLfXVyZbiHBAKFkKyicvV2tm3pU65dg1t4WReYn9Zp2WM74xnVy7tHzcLv5",
  "key38": "Te88Y6GspMtajWHEHjKbrCVngUqW27D5Yfygj5u3qCiEiYiuXGUtbqoxnnEbxgRzsEZjCNdPnannCSKRN15m6LB",
  "key39": "5E5bvAzQy52p2ZR338LS1pGAkaSKXazBqvhhrtPqQk28TN7oWS7Vebyy8WXchBD4bHzjNU4u4aQJMTsa3aToNewV",
  "key40": "5wuTLWaLwRsHMh8priadEZ3FYiXjQFnbedaZHXYVzHHRGJDuDQPDy9PWdNny1sbnnyCowMnTSiFDeQqbZwMMgJ5X",
  "key41": "5BdngvivTwi8Ssyrs9NCwR9tDdDqkX2yqu4udpFV5KXqLvsSrhk9CQC4nPTK9XJJPMWLqMEQsMjqggshwSM9tNzo",
  "key42": "3LMq6mdUhY7attWqfSkRy3Te3EuB25ehRKxH6PVqepLVEyZt1HLdaPdkuD1WgVmbx1UWNFvYirgBEapCU328gag7",
  "key43": "2VrEpdqN3TYQudSBjNny2vrrTteUMxd4UJGerN25k8kXYmH1MsQBskT8b84ie6Wjy17TvizXjemP735g5eRv7Xeb"
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
