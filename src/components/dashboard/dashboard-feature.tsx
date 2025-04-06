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
    "5EFjHfQZsCXSnp7RCdhz8M5L6ZVtvJ7zA2RL1Nt9Jek9D2X144L6QZpvAba14XtD4Y6jGjCorxAGo5AvwRvrv8K3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pDW8azG4VHpPSzAgjigYCpEnvfuCGUDWdsBtKw1LgGoHRDhRcipXM5LyAGgPLMPhNrAfmBsyjfa9oMfHDiFtHr1",
  "key1": "2Wmwby9yQRYp2VtfiYjC7BdP1LvLqq2yPQXrwxgHGjQjfcnfGLjGBHu9mS6pPryc5osSesGNG9qvehW98ftXrP7u",
  "key2": "27wGkCudfLVHWyKcPUmzgaQevBYwCcyT9tLXnQeduXQrwHzd53tBWNzYJ3ehN2f46b1a8Y4JH49UnTTnYdBhoYiV",
  "key3": "sZRx3F6T2ctL8Eu3WqMqvFbuT1B2NhRmcCNEV8FJLzDZdPfBdZ2oU4VydUSurjgn1N79oWEvK1WrP3NhMTQ8S2X",
  "key4": "8eAkRZqg9xLxHZhhreUiK3dc32Li2MfimiqSGmkJMx46Q8pTe7YgbU74soMwSsxkKh5Lof8EMgGrxF4nS4Rkpie",
  "key5": "45a92m5aqXmRCtmpz9qVpesi9EErH6mGAFaZ6TitcL9qGLSQf38QP8447XR2KuG1DDDjnUuHTGPQ6Y5JhMzfJxSU",
  "key6": "3u5sFY8uMyMvkLJMAbbCzBE1Dk4R6g7FcYkyGrJ8f9tRkFTu2CjuGH8AvEutuMPuXDUzQzquW6Cc8HEE12rzYe9t",
  "key7": "42tCU5P1f5stzhoMF4xkde1JP2PdErbx4oQEMx53s3DyjkFZLY4qHkdvgM6Vq1VAwiVbKrW6QK7qjxE8WPUzguYA",
  "key8": "64VcyUxEjPwzjhtDrtNrTfj7xssUMRuGFiCximezGut1AtT1S8m76wgSg1LYN7UoU1WyKfun5p5zJeehqqY9onU3",
  "key9": "R9xZhwJysbziRQu9ksfPrj3YBVXiwtjcfBy9v4gmQTDjjgf5Ab4JJaggLcw3xDnst8UghcHX1tBdxxMMNeuUVyv",
  "key10": "5WcBbAZtc9QHYkSHrNUsQbxorar7F2tiYBQYffZJnsi9yskjkM3erkj2nuF2j12kMzJR9gToNH1wF6YqjUVoc3v8",
  "key11": "vHkN62hfHL2K4rfzr1hYWuNPaCXPPtpfmruhnw85xZGJnnHXLWGuVhgficBwUnoZb3G3pn9tYaZP8Du5eN9RDBH",
  "key12": "4avVChyuNhDNZ7Eb13E6QUjxWhHxaQkUTVMiebJuXVP2uUhEhgCiNkmGGBJZWz2BXKRAQpxtetm7cyh2CjCxB6gj",
  "key13": "2rUxhXXZdU7Hmuo6hnba7BJmadxbN9A1BDJV45BfBgQi8FhkkGDzNDtbzuc2aQdj9EQ5TewT3gKqtyxp5i8pEJkB",
  "key14": "4yGZYkZW8fEsadfYjTXf7cN4UT2PRgneRhRiuXWyBabh2MycXpnooKCz9rJeMETMVbAUVoVK4XpDqZdrNw4en8D7",
  "key15": "xhghCDvmxCAUHLG8mMnF9E5dL3U34MQAheZVPmef6pz5rVvvcENNbxXsqiabCBzFupQ3womEcfXUtaSSM4tMWqu",
  "key16": "3WP769nWJw862H9SnpgGcU4XwAQz4KgBZrU8AeLpcLCgH7XHZnd4rFm3HdevWCnMDvLa288mgKnJiLrwXAwX9pSR",
  "key17": "4X6GG8teDnHXD4QrBtbkEp4ypavhYXVHBXJ7yFHYshFsunh3LmfojGJkEu3sLJCoNW8o9Qvc4XNDG2keWcsCf19h",
  "key18": "4aRvCaFwd19jyXtFinn37dV7SwJr8zjC8AY4HfGxDHyFgyJXjq62AhQw3KHYXGebPhrUqsVksBQWR3njxNHdL53K",
  "key19": "42rU81t5gJrXeBiff9X3akGoQXqJ7nKtUEaZBxP7yxJFBt3TcVASWKpoqFvmhzWWgWMc5HNQQk74Pp6B5yunfSTR",
  "key20": "3teFAM6yuF3FvcQeH6MfKzCu9UwY29ztAUXGWHPX7Y3BoGZAxFnjFv869KakbRa1xYpN9tghi2ohRxH7R1xjicmt",
  "key21": "3sEHZYYdfguFLLdRZURdZVYPxxRCNYT5x4G5oJSe7mRqtB6b29CzdzamijtEEwhoYvZPWkRHsn3PCdBQ6zSrVumh",
  "key22": "315pTZMf4BHgWCHGhwRd281DGV2xErccYLKrrfnrhJmWbHh8rWH4EVKodVvGd4PitrBKZrrzKwZpmB73iZKwkxBk",
  "key23": "3DjxXJTPAakiwpaR5cxVBLqXNSR2eLWbwZ2w19VgTT2q5tF7dBT3crrBdvTAaC2iaJ76AaR6KBCzdtUv9LpM87NK",
  "key24": "4ojcwy9TsyLwwjKNsuo36Dakjv5cSDkAH2LhkxSQp2vH34UAigERnxRKgWBb5iUsTiCQ4pyjuZ1ymsLfvDdn8moa",
  "key25": "2cdiUTkvGqKvsLu1NbYsdyviH5pCB7NbhpH8f4RufZ5o3RL7GgtmbiY3i1UgtC1HRvmM1JFJEC2Z5GnbCuLWEYZu",
  "key26": "48nmpe3vqeUjhi31TdyvFdvbcmKJt4Ga1rCUTYE4kPRBy4BtDeCpRVXjoBAnTacYqNRrJyQVUvUoLm6cW4rj9Zzw",
  "key27": "5VU1LUYYMom8d6VxFd854VTANyDDmbqmcxqmehQWuU8LbzH2rjZHAKGSRNfM8NzhCUGMkH8baioa7bizsxtRa1Dw",
  "key28": "3GZn4X3t1LyjyznJ4qssvFESVksRgCmie6AYuwwbhAV2vuf4BUeBMCo6xYvvvY63diKRfadspawEk9bLAzWx6HRw",
  "key29": "4P97N1x8DkzJNUhCEXhS5zcHast1VNAHKjyc8LduDfaLHiWLJEvqgUovLFaUUinFy5dVYjookYCc2T6EKoGJM7xk",
  "key30": "2WyJvvPeymwfrGSURj4MyDeKG3iuNCtSPP9EwKuxrHuCZeoBqMHdGx2EJbDuFHPmRHLxNU2QPt8BE6EcqafTWXLu",
  "key31": "4rJAmsxyzCyhySvLRDvcEpZd1gLLpUgjhoU72hzVq5kC7tYZ5owqBDNjCPp2HDvhHawZf6m9w1cVYzs9z1WqjSFT",
  "key32": "HRhW9cdyAxkrobw16SWLoEg58B82LEgRGUBpYhsg713v7VpfwNu6XXVHuCUxDzMeTM9KaJ5TWNw4Cts8xQn8zuc",
  "key33": "5zz8aS8n2dEriLopXFhC476WdvcWzzutsN9B7rb9idzREBhM3cR2reLgQS2Sxh3zoFbn3QbdFgxkmVHsfHSi1MPU",
  "key34": "QtjJQZmoMFfF3jjhzHhJPWttCRVMzGJW4pdcJcConwemFEdLQ4tRHtx7ztsNcsjvH295kiEyyRNZNL5eaeABA63",
  "key35": "4yEuQ4PgLucUPqqzREx9Dh9WeG6Jiwm51DsSi7bMkEKh1T1cm1U349E9U9bqhx3hJDbPmjMCk7GwLFMmTvuwKvPX",
  "key36": "3ojzYmsrw8MNPevVHEkCWiYkEYxuQL6iraogAYixZYw5WRA25JWwXhThce1rx3GLoLzjp832bYL1T64HzpkziZSa",
  "key37": "67nc5epSouNZYRfKSwy8f6trxJHeYWVvw9FmcMfVT83nC4bN6uvddxDUE25KkUJNCF59RBfe2AVUj48EhkNXktKJ",
  "key38": "3iDWDLjVXWnmBvaH74Lambv1VQvWASRfHTt8tvVfY4FXPHK8i5goeSCCmJgD9qvdRa4mZr6CW7rYSSNuZjM3BkA5",
  "key39": "5YyKSFG4MvQWd8JyxDNUziJikqYm1xP8ETuqLk4SzA1zNHiscfrmaMfyirhF3JBCMXu9QXVMvGLqPXQ7W68VNsMw",
  "key40": "M1y17Y8WCm7gpBe8j7gRPqatrSTnmKGHfg8Y3Gw929TA1ojU8uG7Pw1Ntsvg2kLcFBg9dtYdeW4ZtseLJb5te7L",
  "key41": "3GjFHNSWnWMf5RU8MxDNzB46wqLf6ysFV8Fe6YouBPPksrZqqPkApxD1F2C53aJDro4bxABJ13RXg4ASkYzmHKeQ",
  "key42": "278S55TbGAP3XRh3PJXTi9GLzqWUK3jzuDorDoZHh3smXuyBquXQpQ5GuKtjugnf36GHZGqu9G5ZNAApwN9Mxu1W",
  "key43": "5uSc7pBwDqmR64ThCrndBosSQM8euDkqiCmB2cFjtbR2kZNzbZDHf7bPLWtBmz5rpFYSg3YCPe6LdrKHnRfBCeDp"
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
