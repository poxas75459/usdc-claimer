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
    "42CVP3iQ1uBRJCQE6j6o9GHC7PEEhiH71t2jAbTJ1D6hzwdLhjwvsBGBMEuTQKkQMQCTeMEwDuyAMQYoBp2YEJoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wm41a4KttE7N29P5DUTom9jCpTxi35muCyV9fFrc1Dt7o6kYdVz958vqL5SJZEHHS6KimePxvERc1KbRzXJtg4a",
  "key1": "3a2YcTy9tNs48uZD29B51vcaYNzBtDVpxHGfLbeBqziHwPQMfUdHVXgWs4APuEcRrjBn778raSqsge8YKA4Z7WBs",
  "key2": "nJyzBjzW8YhX9NXV67ayPAYLHp3WApaFAamAPkDfrqXMjWDXSqMKzfnJe1Xs37JfuEJVJAx67Q8qkRCPHAPz2tq",
  "key3": "25etrYimbxVFXiZz1TuJ3H4YR973TQGPoV3J1SenYmbwxhmVaAL6QKtZKBRXCTNKChUBADsL6x1Noyun3UYcmHG6",
  "key4": "5eeJPYd92y2HWWwKYducFJypsoghRE3Pj6JxYQ4zLyCKLpLjurezRqusU8GAuNnPZY9nYiRqAuGXAxhzyxByAatx",
  "key5": "2d37uPtwekqeX8cotRURU3VJPvozVukXccqKHmdLiUzKjPykLpULBFR2vbSPehq87V8xgyrHkKp8pd346gM8X5B5",
  "key6": "5MrtGL6DYLwtziioARxuN8MU6d681FjbL5PjG7KDsEcjUEcGzP6ocD7MHJwVwHymoyrzfVRgonzcGjVGNxKJf5os",
  "key7": "3mq3z1QuCL2WzKjQrtiCNj1qBH8X1Tux68BdeZLRVW4rbPjtujP5GFjZXWZxtEVcP1yfUEth6bzsNDXzEA1Whrbb",
  "key8": "5jcGyuocJLSBnKziuinn5ruf3S7JHNLuQ6Bz61bRz5ZpxsU9zeFGMNHYPMUY1c4FJNzppEUYC4k9xLAc4SS5tCvP",
  "key9": "TMQMwEYG8DtmEVpVA9LG2QnnFZcZvKuFEsGJSWFRw7NfeHfYPHfvpbBoWjnBbQtMWTxm4iGUqwp78B8gYcyaQjV",
  "key10": "3p4fewMe8JDuXSTDGDpiuAxXWLqddR3iPPsprubbCo7NQg19DNWvTocv4fR17jsXibHPLvUStRo4QPAvAin8gur2",
  "key11": "4iUcPALAg2WYtc8auNyQ82VbypckkX6TTF8qsFwtrXFTUtVhwX9gR6rCmn6dVoQUx36L8Jz5q2sAMstYfQDtuWux",
  "key12": "3uoTCYsuMfRxXJns17zrX4KDLUL3CmaAwwsbrdCNd23J2eMediKh3r29q3ZbDJSscW4T4reUmK9oYdndjuJDYsh1",
  "key13": "5ajsPQVWS9XDBQPUbjmGxqDiaC4E4LXrpwWFdWVWbLAonHUmmV3ZMUNYiTYxaAtKJfHPGgzmJ7dq84BRbhPAWhXb",
  "key14": "4VubmtWwMcHWdCPckAhquqBijZ8W6PdyqVq9kv3qKV6MLztDzu7cSbXuH5VUdBas6mDzBGLsM4zgvGaSomxw7ATd",
  "key15": "45ux8z1CfudCcHRDVG1NGMsDy78GqPZ21mrinj3J19sUAmNe6x7erzyjMkU2hvK9z8iXxbnaV2cp8Q1YqpxkDwQC",
  "key16": "RUidUsLJLzT6pEpW9L9bY12fKFXidLzqru6Lxo4ffb6rtW5Ho2kXGtLGyPBwbE43amgx3wniEzS6WBQthx4fxAg",
  "key17": "X7ZUwgdTgmyd1c1j5raVQSvmz29jBPcq5vVysk2FffmGjgzNe3qo3iugQLrXR2XJfwPnMp8rGWwmHoVooycQdno",
  "key18": "2pGPzU49KuXSk9ccxbfSymB72Cd2rcmfW6m2s71QUfogAAf6mvJB3RpHMsdDvh5eDPvq2WfzTwifQfsPzCv2NRUZ",
  "key19": "eGbsGb2EbH4yXv6A18dhwKe3qGYirfyActhQd5M5hfC15hbY1kaU6u5maqLbwsCR18vxDRoEsmEVRuhdmDHEART",
  "key20": "238RoikBxLmvdbCXZXRNbXxytVyibDdgMmyg3cibdLQKf4D5J3Xb8v4gcCrzf8vw2fhsyaxtmpkcvNdGHqH2agPU",
  "key21": "5wmAYwjJ7pWf3SF6cq67pUYkq26A52deYoCGhUZqLWBZxrRtcYntrik9hdECCDzAzkMHEwmkk73UXZB4TnB6ikhJ",
  "key22": "5hyrx4oEdtZhgrMQqBGWcKJun8dQbLf7njLrHzk72KxNjwRj38C28f1xEY3sfP8zV8Kq6awjKq3xTMbvsRiUyqN4",
  "key23": "6prBH8QLTQNGYWPvC6D7xYDP46FdVe1YCMWViaGfgkQvqaEGk2Lm6ZFT6DRbPCXEVD9Aoz6XcLPq8SG2dhMHRQw",
  "key24": "2c3J8DbsmeqEbhiNYrNjtVAvcey1PMdyRQXG8J8gz8xWLnkBb84G9Tytb1Yd1byfa55Knnu9U4tYR2ymbFP2Q1vB",
  "key25": "3xnPfLkA6Nu7n2gypbqrJDuHbSqtCJXXdsBCBuUftWrnNXVCwmiKHdmukg4aTDoHwgfww8hgzEc6CXPVFKu4SzPA",
  "key26": "2AkZQR64ENBw9VEveBWjfwiwq7LoVWm3ZjLVXMWUi3eDozS18SzW8XS2zVHdEGLk5Jh1MGbt735oTySosfkx4Epi",
  "key27": "5NVxCdFY6MmhNtuifnpSwaafFT23AFFBCnRxNtwKLLWSoNtKWaCQwto8xRo8smfdxmmjjVFM97SndAXiijDHQait",
  "key28": "2JVedW41LwkK5ded1G5gH8JAsA5YUvcGXV13cQzHqHEWUvyEz23pBhSnQarj2JCgsWD5sTm4db7RPRz7ME7HZgeE",
  "key29": "3z5AxmzFRH6wCedeorzAK8F23Z3eAKuZdZFhz9zPNCTkHA7FXqKZjK3Xtn85ELFm7RxvAMfoMYH2eaBdBxfwH3Cv",
  "key30": "E4vKLCiE4GxvH3P8rNsB7eXrD3VvMebCMdzeAMEUAa13rYX4yMFYGC17stDfSuSCjraMK9hSH5hF8mCYk7fpd4N",
  "key31": "2Lg5PMc7s1w4BrKWdNNmnAZXPf21TviNWXxoUY5Tew5ViECRWgAUNeoyGzAc2qi8ifpk2dkXbEkyPj5c1pvPGkKT",
  "key32": "2AYHV2cPrEAs1VrqdXNxcCrEyFBiminn6Kt9ZEHcftx5ELmbwQAu1tWWYw2bfdwzvwgxqahhfbVUGobwTS4abftw",
  "key33": "4BYVYzux2uFuokCETZkpbULWveU1fL3LTxk3E7oSZcmLWZDprQoFGaiUH4b1iGYpG6NAEAP2ZW7DM1jRKnnYSarb",
  "key34": "TQd2apg7VJ1SrJqN1Vjs4UHjx6R7Lzzh1JpHfZwh2erJHqt33teJ81aQphMN4suJBNd2cy6BmDsHm5tEaRtXzzH",
  "key35": "4gtDozLMrpCW2W1J2aU3vGfnd4xLYqFaAJfGPBf7WcrGranYTxbieCo8wEUL8vWuLE8ENeP8APLt2wfaH9yN2DiE"
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
