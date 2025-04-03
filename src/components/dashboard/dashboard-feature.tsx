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
    "5MWEEvxyWVy79z2qWXXUvW3GHsvFgtGQvd4pyhhHohx8QDEy5TqJfmqAMVMEmxthpWdb7KAwk7EPfqNh8VMehw7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aX1qM8Mbfauni7jjq7QQBAkkmFjS8aJWw39AL2VkimyFGaCUGkUWd78CTQQ1v6b9A7jNECmx9XAJP27KAJV9eHV",
  "key1": "48UHp4Kv9qFSzdGiKL8BU3nbA3UEXXUEQSSqAA8TUY4x8BZtPuUMw3fxSJtGysSFEAa1pfASZBfkPPhw2bAW9fAF",
  "key2": "dtP3wpFwuf9ujTx8AQGmKoktkrQgYPULuBnL23BbKyqh7DdfjPSiUNFYePCnX8VfyAupozDsyVbnZRMLnqErg1S",
  "key3": "3TsLCvS4FJWDfFrwtCVWayVrBhbBNyLS62dbuwdR9bmezq15tSXaZKvWiyErXgJWgpvJTJEubJm7SquCXQ98rnzs",
  "key4": "35D8h8uAVGekXLWntCw4kKT9wy4L4KCA4aBWFurkHtpgo2CM21B9NXF6MUPmqcwwMozdF3qGg8Nbym8rrnmdW6X5",
  "key5": "EtGUXAwjBUM2ukriFbfHWmivx2fus5SAYPvb8Ppr9Hmq9AjVP3w26XVCufcwjJpLkBC7GX6Bjwvvn1dzWduXgYp",
  "key6": "3P5MoKjobWZiXvGRXcN4nAUg4E8tBz3HEhRw3wHUfmV1ZFn12z4MotUbNM1kxZbE1n7efNwPJ8MKo8Uz8tPok7c8",
  "key7": "29ixPhBAfNQMnKAAAL8cC1Wrq4BsEZF8axnKXXEnxkJkUzaqDeGAfi54tqSQmyfoFKLBKvdrREWeEqUTHF2w4HeR",
  "key8": "58g861VTrs4uJnNe1Wk9UDAf8YsXMU3VV8S7smH2K5J3gBFTkG25iX8f3nA6pj7wBgMYpgA3EVW6VPo64zDG1Svw",
  "key9": "4b6feWWhhbsLMJqzuCghkLp6hQHp45ZXWUvGQQfsVbp3DN8A2ABskr8Tag4cYg1iereZC2it6yAvaHweaLLwmHV5",
  "key10": "4V6enuxvgHnThyDa4aHmseS1nxHW4PNfeUugyaDS2XkiQPRVZmwuSbMCA24KiKrngbBsU8Dxuea1tn5UeijDz4wA",
  "key11": "4wtEtzcmz1bKYdkEgJELmZT8FbyKq1aV7hwMnojMYCSopQo2dcfxedkzb9CrdZ9dShb5F1rt9AdcnmtUU2ypvo8E",
  "key12": "338FwFgvg69Ah7reTXtFVsXLPcQJqte1XmFogyG6JHQd1ZPp3v2UUmRY3HDjxDPz3kHRSQsCCfPWJqSM9fnktGdD",
  "key13": "5o1LY9JoZrX7yzA6Gwa875FTx5gdsaPwYgwkiadzFd2kC3uqDh1CRRkXkPNjMhFRbWcC7e7RVBmX7ppMr1kFFFUR",
  "key14": "5tSd5hJJsWeMYgeRzB5xfrm1DpbFaF18uk7Yj1KbR54qJfEsNK19cyDNEgcW88DyRDP11vCg6gLFgqebbBJYqfzo",
  "key15": "HKp8ncX23bUpJsqp58qdm4X2JUANABac7iEWwS8KyFZzwg9ZpMmm1EzGfmXr16daWR33Wd5c9ytYPdwvqwkAmdq",
  "key16": "4btnBpgEQTzLeTNZJxTReY9ELJW964tgdZCisvr1v5TYand6seY9WrGYzArLrdWuZd6KwvCKcm2S2qt5UmY2DDrC",
  "key17": "2ctqGJfCFGthbs8x2NGG7hGqxJXZzu5fsNGvBpezEGvpUS8TUcqBy1DtaAsXsqVPbvHf1WdK3t79a1Z3atUuJWX8",
  "key18": "5onvSEjU5Giwx9apNpvkm98guuiin4Yutjq6PqYLHUcy2q5zrMUr4rTA3FBUbJtDqqnvXhzu77SMPeCF6xAS18W1",
  "key19": "8BmdGNN21uisvUR3K8TWNR6EVUJR8dSczNZry3x4TiCxFaV7RbkoyxnnvbRuYBemGrsfmsHzFdTxm2xbKt1oFVL",
  "key20": "5aVcBksLLFGC9KEZtrPXmE1scWZzUmkZm2X9AYzdetXQgm7TfRxwnMduyqXpKcJxSqYCDr5KDt4PBQRCQJmeL2h8",
  "key21": "4czxhvxEVn24hU7bGeBNQ17tUv7s3AmhSLpdUPbxPg9DnPqgfDqUnEVpnXu7Fj9WepueALx4pB7DspQpkFToQPWv",
  "key22": "mPXfSyU1ZU7sMD57XVgZbjYufxREXPFH1q6eKmXRs3zqEYTRJFGzUwu8NKdZ2eTgeegMhnnp7HBN9PTEvcC81GY",
  "key23": "5R1xy69zpRYFrsfvsEkVQE9LgaQNtMTrtFkSWCgAJhJmR9VQjHG7TPRkVeCCX9ceaJNSiLk4sev8rba1chogiVc7",
  "key24": "cBvfCzYCuo7FRbFUKgN1ojtHDS4WZHWPpu5BFyShawBo33kErtN7T7LdJ1Do4vFEgtPDYuVERs1J3AasaHJcvVL",
  "key25": "2djsKWD2MnVz3TD2FieinyLNB5WY3Ent9eFJaw8LfKy63AgmiQsN2h1t1cMmusbVjdTUt6onn1iMtvKkZtBC9gfg",
  "key26": "5FxKD33Snc81gxsq5xo1vBcm8ZEC4TTZ9Hjd53RuMW78D5PLqTFxmKugKvTT632m3dAR2hrPBuKLQ2DFJ2MxygAb",
  "key27": "2mm1UN2JKPb82CvSdNgLLhaiJcQxqwXXAwRdNc8bYFhvoe63N1dZrPjt1dMC39VC72ZVAAaQZ3vYmZ1EEgniPE7h",
  "key28": "2ErgJHWvQciPWzYP3dwBJfMzRmwGoLNtPjLpBKyj6mz5ndxjmUAcDu9bod9BhYDZgkAkKakWUcAFRMgxY3omQNZK",
  "key29": "67fAMquFvpCe25anPsCxacYoRaRcMTER9G1ebbH13FZvXkXkQWgDXV7VTCqiUVGxPeYaaMA1fawuBVpD6VjCjh6b",
  "key30": "5WTExR7pMvaQtNEWwaaLZF6gAGyZ8GkCyLUYhBCYDaeYh6379u3cJE2NNkf5VTEBRjSy3R9VuX6L5feDUuRvcgGo",
  "key31": "5gYiSgGtsChC11kZzb1uYuwEfnrvvLmnHMApZEZz2KtKfJx8xftWbwKtoSGzDgRPWibDEky2VSnHpgRAHPJTdSca",
  "key32": "4Th67aFCwvVhCdQuu3u7qHi3qmh1wFLWjmoncAEwkneLoXsry2BUD7HoX6g4eTeh1e2j424wPqVz1rBNbtLniKEr",
  "key33": "4zjxDbG84V5LGYBX2xgXyozuDgewPwQG3WWbaHZuG9aPXamb8zRNYrvY7yShx15gFmVhxBPzTHXqUt1unNRbAcXh",
  "key34": "4RSSrDJ5SrFahKEeoYK5XgeQiiqoqSUqXh9UtTEP7BKGG93dzuwByvAjJKyYdEoyW2uZe7Txsn9MozmqpeaUGubu"
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
