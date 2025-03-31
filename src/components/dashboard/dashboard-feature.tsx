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
    "5brzSyx2QvtwEFv1arq2ambdZYLKJAV9nQgiA45cTJXAZQQR1qj2WHUhgVyGtuUVn6tAcXQWpQNGrc3P92fkZnLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jvYXywA5vZuRyaLFwo2VErdFpHnaTektnRwdxJ2TdqezTnHJ2tyuUo4D5qhYpzrz5CNFUodqKdF6iVtnU3Kxn4s",
  "key1": "3fyMXJBmpXw9ftp41XMDzsw1aRTCFZgLmUb8pPPyKFVzqtQxg7RPzaKux3kxZuvSHM84UpFZ7AqaZxcfAaotANFK",
  "key2": "jQUzGmZdsGAKWoHxLCq95NUd4jEnBcvTBy3D8pCG2tEosVAtdzYeRpWaYs9xs1DHNu1nt3MSZHpf9NgQiytNEXW",
  "key3": "ZKpvKTTiwDmRjE6qPE9yixuVTB4rUkxHZhPQjcYUAE1ASHbbz6aCFS9aLwYZe7mDgoX8dMMamQdydfbeF9kZqSq",
  "key4": "5dynRYRdJESj6mCdHRXA7pRiKNvjXQTh6C5t7Pht9ixoo3z6ywYhc7uaxoPgTaFC381k6PAjTxorxJ59Dmip9XpL",
  "key5": "2ZivNpZCYCw2qmZk6mbtrxVaVLXyuzDHS8ZoukPdazVYnpm8NL16hdAJ7PVuJLneYFdfvAWT4ruFYdhUPu1FvdXX",
  "key6": "CACa7GKyMFgABYMD7uzk89wE3t1UguY79TDEJjLuGtVs71fs69AyyoSDeJBLaHsaY7tz69AFNj2bUC4vrc5P7vy",
  "key7": "5QGDhnUfePSjkwpU54mT6bk6iVer7e8f9Sc7bvCDT9LePBqs4gdDtCYoh5wsUKmgUZz46x62xkRnGLzKqpAv3usA",
  "key8": "PmyXeU17geUTcyQkWmaebxu4hXb6jBZwtYjZLCwQF5fABg5W9gdYfBGoyk5VENAsrtCPMFuubcJoyLuiKxyMWcg",
  "key9": "4ctRgMA5wyCZ9R2jbmVBdUgRSUhsSerigHYyww1Fn6zLKMvpoxybwmBorya2xA8PuWYbPtCwnNYu8ng6NvT9w1WU",
  "key10": "5VZL9eNja37AwSoWeXEVU3UH5iJreU6osNe3vWrnma3neYrsJpkV9XAzRoJNZuvbNu4ZBZFzQtHhzVCtJ8LZ59et",
  "key11": "2RWSpBxNRYemorwCsnnLWRLY4iHjq7Be18nWvT9ZcMJknT4ud84qTNxCbJHT3SkvZY2yn4gYcVTV9McQN2saTrCy",
  "key12": "59eR6gNFcSRiR7osGnbwUBTXfk47ATL2RC6fUB6puKiFmgjbTEVkLCd7k85Sdo22rpHcSVXa7rmU9sa8FVhnufCZ",
  "key13": "3LnQqoTEZDGQ95AwS62qaPJyUhARh7zqH53Zv9cvCqR3uxfqHxNNupbDZG18ozf1b2h2hyGdrt9o7q26Cw9Ag77X",
  "key14": "2dxMP5oLQc1uiqoEQXN6tsw3kMU4zZPmvP9pa7vkKLb85KknfbcTWHMde2Nbn5cRQxogDd3ka4agNQxJtrv2FowR",
  "key15": "5QGrSZDj3iEGp65HYuL4nnL9YFTSU4rAceR2NoKVd2MUxjAxSu8geVT6JHdnzP54iHFwzm1mugeoiPQwNhXwNYs1",
  "key16": "5s1MnSuJYjiuRe5hXL4jQVncksCVKN82sxkzbFgkSWfXdnWZAmNEudGY3NKA5nmKQvjpZdFc2AqeuwP9aZEkhu7g",
  "key17": "4BWzVY87BFzuYeFvxuZHxhec53gzYEohW5SjD1hxk7hLk3Zhz9yQ7mnYxELpgyABJqEz2inwNh8NfX32xnRts1S5",
  "key18": "67Brbwx9F6MVrnJ2vikMXWzyG7WjEXAxS9MyTtowarzuLt1tdfY5QPLobKoVvVwrM8d4Ejx4RsEYa7uYp1vHWCHR",
  "key19": "3E9FLwHrGgkn9xfpKoj9yX9Cwvp3BZe3deXYEXSGuMrW4uFquZeAkhM5GGbLoFd4MzunTe7RrSP6HKvPpqXXdgBm",
  "key20": "3Ayi6X5t6zG5aBMKDbzptCg9a1WWm5yZRiGrafs82rXFNjCpuFrsAV3iZTzRh4xe3vMVFS2FB76cC31p4tcyF4Gp",
  "key21": "3sKu7VNiC3UcZD1j7vpiMv32NgxbPqzNf6oivNMNPvPE7PmEmKHq2KgTmiPwQunX9MKSQ5AFF3TbTJ8AqUbjuBPP",
  "key22": "4ieCZ6a3iUmPn9rS1teex6WoRCqLmwvDjuN2fAVYWBcvp9mi9xL3fuvzJThTkwbxNEaMJshaU4L5tLzbNbLuJQBa",
  "key23": "B9QnZonFiRB36TcWwy4s8YDaXgi424WkE5G9VcM1XUsrVn1D5MxuEKigrssdxqu1jcGH6DQgtHFXX8WGFEx814d",
  "key24": "pCadqNGXHhatH1ksLbY9Vmcr6Pk9zfBgvxtqoGbU8nQV1wNKrLm8fwZomipTgM1GiY3n5ewQ5RV7JvKqGSAMtsu",
  "key25": "EVoS286fqs6eZq1Q9TeKW9h1Nxke6Y9jzE61KRmB5dRUiKVc6rJbU55dkS4CWz3BXw7phaEPusYFmyHjcyMzRue",
  "key26": "egC7y1RtGzAKJd35Pxxy2LazQB5BEcgu1wVxPHjZEz8kvH1Z6E1X5ynJrmQcHVYB2RCkCAZRcEfi8ALgRfCa8At",
  "key27": "2vW7btWRrkGXJbtMPM9pxbQcCtkhQZtax3fLshrEWCDen5gE9uS8c7pPVo7GCRBfQB8U8h63QWAz6vxg9GU2kxE8",
  "key28": "E4YtrBveXfwTqytCuU3GDQ4aQSDb258Q9LzH5jvCCtECYcS5PsnDi9C3P3GgSK6s6fa1wKjdphGZ7cC8wiFqgrc",
  "key29": "3pDkopS6QLt6QivRPLkzNNTKmsxGJZwfDq5Lr7vg7uSG9KkdTn75SLC76Hj4hCCR3Lz3VqLvbWrCjwE3TmgUWwJa",
  "key30": "5gP7R2yTWgQcr8MDNfwGh7v4obj1kcR6ymYUW9PrY47bHQNmXM4NySUXzhyVkuowsxRDJS1gK6iBg9Tb2uP6jMNm",
  "key31": "4TdtUydRythfhovbLxRuqtBpKyoTCzqPCdDUoN31n3jXwFXw3xzWFoFnWCb2m19Y5YzEchmPTCp5Gfc7ACChwdG1",
  "key32": "3BCZThaAxuAXXkLBhuTqovhK2JpLCdXV2MSxxjVWjXKBMqQS2JcDX42gCJfi2me5JepJoNxjHMQKdJu8R88Df263",
  "key33": "2NV1ArkjZW3zz1F5dv7LoL88tpGQCEcFHRMSGRdnXaMep9RWpcvLEXNpJP9uMD3qSwFCSgKJqgZ1NFRRwKwJMTn5"
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
