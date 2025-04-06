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
    "3yBzHsieYHAaVgA2ASb8vj3aSA7h4Q6SDKahdKDZSomooV8UF3ootoFfpvBduMZV2DSnx9SpQ5y1baxv6j2tWbKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sDobHajprL6VBdDQUG27dBuXfwuePivshkYBgwjhDe4Kpp7vtjoXewmocxQJE4i5EJ3kUbspcVANvhCs3aWddzS",
  "key1": "4hSvMUrETdSTd2hzAqHqKvbrqjoTAF6LASiBKCih3uDXWaNC9VJVhMYSScbc1GVXzshbAb7sDYiAjAdFAvr4WgjJ",
  "key2": "6NeB7E3L8q8Dt89H8gN6zwriB8piSSkDa8ip2xcLNNrtMhhn5DDPsUfHq5YrTxJ3rvVJSbdQYhUmzrmqvv91oVH",
  "key3": "4XraGFFBcqpcmnFfAF7fUR5zcBGHyf1yNCpA8fW34owe1DAm5fVTzooanqX9tPDd2qjRaBP9nhPWteHAheh3R2HM",
  "key4": "5joe4TYujxsrQf8yh5aCVP8tRQn9vHSkQ3g4yaCmRNRfHwn2WGjs961cBEq15eBkyfvhh7suLHga7MbD6hs7EqrP",
  "key5": "2evgqkHSe7Q9CcPTsaFyVVLkH4nNUfVowhitLppKCSYRxwJuGidS89ywHJ6LLNR24X1xauCCKy4vHgu5UYFcnM4K",
  "key6": "466oPbnH763ZszqkbEuSEVg8orfL5RWH1SGqjxMZCYD7gZcuG7oMC22mjtvJb28ckkiGUFjfiRvZHSjGzeE3NXwT",
  "key7": "GiLwgLLkTxqPZ6rNTCsQh8WMjwemeTcxreVnoz8pWTyZbcNKSV68kZgvWXomXioqpjMt9nwDhHdyYtTwdcMe9Pj",
  "key8": "AwDHTnc8pc11mpNgWckREJRydCsuyBrZDL8JQd5xHnV6TMGpFTNqqqr4CaZDMpcuNcr8QdtsnJEDcV9Fbf2ZwnB",
  "key9": "41mvmWNW3Ld6hn319vfbnNMuFS5ibSneQhd73F7JJiHVStYnr3T7FUvSYLicsT6uK57CgWaCMJ8SoTVQ6hZo6cUS",
  "key10": "5Hn14xBZePwFYscgqHVgLhchv6FRKstCPDJbYbVHxzkztxM3jH6751PUE3tnmhLui1KkbTnvWSfCsiBFyH57NTbG",
  "key11": "G6RtHhu758ytUm8B17XgrKYpc3nfEetx8x4nMdJJ2gijwXejruUwNbkEev3bvBwy3B8ySWeuVBJiJ6ZAdWD3WCZ",
  "key12": "34RxkVAnfP76Ys37UiuyZRdwezSYKqLn29qK8cvPbkAUjTsPLqE44u1NrFCvw4rQ1jU3WpfbcABbWNfQ1cuFJ7qr",
  "key13": "YpfC75cfB96wimZcvnFqmDuB37ZeJdog6ME3q63xTZ7S3TUQog8Jy8BBmcUS6VD5DNiU6k7EjzPoibbMXKuzbUT",
  "key14": "4fnPFf4PbFWAagu6qnigw67dKkhuAdufYxfVmUpYWeCbxJT5D2qGvcihXwBs2F1LCmpf9gRngAVBXw65AznTgPBP",
  "key15": "NupLQNAXNti4spvJobxBwdbaH7dgng2JQu4eu244va2VTjfbj8Tmvn23dW7YD8JmGYnUBwMEUxWqybDM1XvUbZ4",
  "key16": "5y7RLMgvvcaGAh8xSq1hwQgJt1vHTiWWoKZh2MjUxxp4NiiAz7EkpFHdps7A4Vo9wtRKEm6hPsirSBdZSDBHJFFD",
  "key17": "P4yeLhNUdC4jN7CtzHev4926C1BragEnhudobs1JBwPNECYsF9DVuoDcfSrn4kh2zo3JwMVeAjyNpx14dMfrFEY",
  "key18": "sHFzERca7JevmKxrF1mBU7ey5qngq93rsbR5Pqniq2nC9vQumpHg4Nde9GniLTjNAju1kGvZSCyWtV1Y8otn4CR",
  "key19": "2yMLb9pPBbeEvqbaVMbEXyFdrkK4F8bu5KNHpToVMZtm5uHdkpbXnEtFtWPerB7JxJMUbUb6JeUXrZNSDSdxR8GL",
  "key20": "3moX4KC24kKawAZLE9mzNYPG3VeBVW1Y5SrycAiSFaG5yna5cYBXvYmzaJH9CP8TUJKzEmXRMtzS8P1YZeyKt8QA",
  "key21": "2hCa4CstreSjsJGT7kzCJRPfNswRt7jNhw5eShJiTHyPyyLHGCLL9Jy5TLc3EKSEjn8MqcdYNBz5i9SEHfv15DYF",
  "key22": "66MF5wafeKPRJFGD6Jw6ceuvucCwYCKiq76AuVuyypTMt2Yx3rqgTMXAnUcyB8hccz2PxC3fQX1xUt5r6g3Sua7i",
  "key23": "25WffBTuxnsoT5P1ktwA5JeM14aSfrZc7daBLjsoViRC27YjFkmAMq86tMhTckmTnMm91rkLkpufLKKeYLVrQo1v",
  "key24": "3h8pHxdWeXyEPCpk6p4sgPhAYyfQW9KCZNY9ynZP4W1FwKwRkB5E8ZmYXFKPbqWn2RkBd5FfQLkpxHmV46nsoTiY",
  "key25": "4RjFMyMUXrnZig9gaK5szTSnWDhTS8ZjXarj7q7ahzweTN8DejjycdVc8GYknSHY2vFx89pr6UhHDiEgetZvkjXr",
  "key26": "4shJxFfQVucKKdrS7Gcr8NpMQ4SonhViiyqc5ta4FEbUJf4ZhCncQmf2Kf2xyrKefT8M4Dn8y1BGojyjrqwooNMx",
  "key27": "4ePzy5NzEi2dhQyWkEy6jd6u9siZtb123cN5RJo7fzAaFhuhJatSfXDdosotWihngKbDCrntL2N8TyhPK1xkkmY8",
  "key28": "29sAisZcvsnYvaPGfzYjcbWWgvNca6BSi5X4bWwQCw4AyhjXay2rm1mHo2HMo7CTzywDdL7xmVEuaQUBP1PZhVuD",
  "key29": "4tFQdXGvdX2QKFXZVTUtxzHjAFyBGQmepPyUEKTTHT8AmzpuhAin3RAaQekDXG7Hvyr49uY9fQDfpek7io6kBh4Z",
  "key30": "3xV8MiozCy2CPe3Pv7ErDo9KLa77U23ve2URibjZVfsL7KBNjtfS88cBFhQNwM6XBCBh7kEja2XZSC6YAbqVFMEV",
  "key31": "2aJdDWBGqDiAKLiCk3twsEpWtjhjVyEtwEbNTY39mxc8fTUEuPDGzBJQMF3zmQ7RS2byrjZRNGw4oaGSpBvN5H7m",
  "key32": "ULYJ832hpDrjvcZCXY23UPaPrEsNTDF2steBMERVEW5o2q5QRmJqkpXgWVuH3AswAacJ11G5s1MTM92YKZkpidZ",
  "key33": "4SNwDUzXFyruaEqChy9gMtYNboGm4JNVdP724dddbdxBKp8C5ULiF1j6q9k2ZoaLfzjawNA2ETCNeTNUCTE5SmXB",
  "key34": "9x9A1dKb1ybbwjrrqPQVKfMdcCdMcj2hwcCM87aGRxyRS7TbwuB8AJtxrKj4QVUWqP7v5gj32cztcSCg8bjvdAm",
  "key35": "21q3MoaHDLpQBWK25oA2NaZVZzTrafhcTDaXMCrVcunJyrZWYGZBaLcBQNYahKXuh9XV9gUMFyd4baePwcQvMrvp",
  "key36": "63ykQqQHnYcisjpBWCTLBEQ3oY7cP3QnW7aVcdL8zJMFd3byhnBQ3hWDjYVREmWxHHE6wo6UNJTz59mPRpwFbZvc",
  "key37": "xvuRVKS9Tu9h41yxCQfJhqzTJWY6FEC8hgg2dRtUtjtGH1fzzBpuSab2E7c4J7QLkYjh3gqEcp9ejD1c8zkKWVu",
  "key38": "2qYmPEpvom5cCGo7xFKkh7C9pA9cuDwEPwfcdeMDDpW9U6WPyLQoAejsftCo9yejBztJFNqUwEFx1SdkNuxcc3Eh"
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
