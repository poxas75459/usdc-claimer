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
    "zFsbQFdv8yhFqaXdntT7eRoNv9vJWSx2VEAJg2UrMYbEwuTC3roQTDBfVYpYLtcQ8MYQMmDvttxJP3tdkQgCSMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vVCB746jySXEwPGXuhS5gyJSu56ce49xdUxgEUBk45Le8Xs9zEPLub2rpGCgtkJBU7Y72MRwaDwQm83DHH4mFAs",
  "key1": "4b5rK3HpGRGNWdkEb1ZiKRpzdgJ35iwe8dPZeqeYZUMmz9diaVv4ypVngdteGAwF6qEeJVMGpBvAyqM17gS7yKb4",
  "key2": "4PTMxv9Gthy7QsJV2jdm973EE33P7iQ9998TQfrE5Fyew4z8yhojncNkfr7XRRRguoV6s6t1gbxsxR7XN1HMepwY",
  "key3": "5aVKM4zc2dwrs8KpoCNE5yBufkLBVg4spLtinca3ZnuZqshKhCq7w8UTfYDtfDci8NcCoiF3BsYcqUCY47rPyHeK",
  "key4": "CtfwpTPkE37HueXhbyE8pYHrjg4oMiLT8f3btZFt1oVAUyV75btYRBhCsSDQ3yXJynwUCgxQgJaXjNkgT4bwXor",
  "key5": "5rx2DnVTWWjxYFKetwyYcEe7o9WU6nCNbkdwyTUnbbPHnDfVnXa7ff83HjY46o3Dc59774VpVsZ2HToWWEn2un4a",
  "key6": "hDJ2nY5SBATTWjt4AxyGQNYjGED9ERVtHh58de7qRyfVmMRQYfGmLXwad81wA9spometKdFH8HcMkEHTyMbE9VC",
  "key7": "51MQem7pybCRG4V8SjsZ2utEvfYYfSoQD2Y8djTA19b4Ko1QE8Xuo1dbFf9ZezKn49926RUkLYo1HhCgh3G6eR3z",
  "key8": "4ntRd6dmbfftWDvUUKxEVmpwGuwxBux4cJeqNxPK8HB27PKBL3sjXouugTsoxWwQRZsMAQBSVojmKZx5JGa5KeUV",
  "key9": "5ZKjZ7m1op6Fh7CxwAFCk7k7mo6jpdKBKuNVExJfTygG3By4L83dffoSkZ2eUmHRUWRpVxni1ohyhCsVsxmJ5NyK",
  "key10": "5gdydZPHrzBrKe7dDbpty451FztL4DcZR2YyZmEZvTt4DESGQZam6EWNfSKEKXkHQFsDGgu9M17QdDScR1mCEPji",
  "key11": "45d725ptymN59RwYkckJu84Dz66TQqywMJAD68vJo8jwDj5dtAw5qPk9xvor2f8Wp4a2tctMAc4BYXvQf7ev19kF",
  "key12": "2xy6myyut7fxfzGGckdp5CrgGe3tHabA3GoZGLbVB4P9GXGRXiD9oHghKgLLSD6vsepuUcw2xesfte4u3qynwwrA",
  "key13": "3fhFQ1gKZeuwVFavk28JpQRcd7cE47Jet5GMJ1auAcTk1zdVBGyWorCUnyNEPWEhgxQCBMWc9LVg14xPMU8spB3K",
  "key14": "67UNNVur6BJ8AE6iL1HfrULk1HVvbYB6Uc3KfU2n6hzfrPdGodHuHDR49HpXnaNFB4dX6Ps8byx7fXN1k7qCkrqq",
  "key15": "2btVJ1K5RchNtUn2sCwnXxCdC14STY2Xpr3nRC5y3fCfFCi9GxfhBireQEryG2kTVXYPZM4WTfKXmYnXAy51tVnX",
  "key16": "3szhRP6NfinMUGabyQvK5uTZnQhVxJU52WNSskZ8ZTd6avfyXDbt9mzbmvdcrCJ6Qj1LfowFREnD1UpP3tDEQein",
  "key17": "3gTGz7Q6PzbqQ4HcTpE11KdQBxf22J7VLzzCGyowsrq4FaZmcf8HU7ZeFqLu5vWwKf2gk4sSK9QtzbTJEo8hABVu",
  "key18": "5AcQC1B6KXfUGcbbYwWzDUzvDELAJgKWttRHGnGgtkKubZxazVeGvedKHwpwjtngvJu1vPDqtxuGkTwy3m1XKXjM",
  "key19": "5rEfuhsSw23uCZS5gRB7rapMLJcRtFPyDJom5MbkaXAYqcPj6fc9x5DgoSrC6Cn8WDWJB7oBWcyE4J3DjtoGjX5H",
  "key20": "3jP2ot3K6TmJn2hbtWD8Jd2vSWuXFpuq5KccBap67DCcXcyPv96Z1BU2q1SEKXQVRoJLfCtQyJL7KXdziP9gKTKN",
  "key21": "yFpdNLZ1mkWaMseFXEzRbVnWyYwrWpdquY89gpH1o1CMXYzK17CoV2LZfWYFvVwRvgvfTLGa7EyDf6xzefR5nA2",
  "key22": "2ZaM26EGnvY6YrznjoXWxXajVGpuqZrfQCkRUJRfFTErGmuoagX9C3NPJc8pAFGYwHqbkKwj8Gu2omrSmZeBaRqf",
  "key23": "4dcyWrar32mQUhcGZhrciqZ7YikcKPLqm7NFyyJepVDpbpEEcUeoLzm3xZLbpaCia1TzjpZi11pizhMQ6XcVV9ts",
  "key24": "37SVmLL8XSEKPKEyBHdHxS1fQqveRNwZ25uMG9uCLTmS9p4vuL8uGu7o8aQoV7VGnXjzDAGRVzmx3tLQNJi4cyXQ",
  "key25": "33YqFaa9DtSyrinjaH6YgmWYcaPQ1Qj1XGEuNTE971hRhD1q2jbqBb4q5Qnf4MD255Qupep2jfqAbSkvXfXvuntQ",
  "key26": "GY99ZY2Q9nRW5JQRQGHCmyqmoyUgH6cyRtgo4pHJF5kcN5kf9e4yTixrFioKM5a1URM7wLYdZ6uKqi53pDw49xZ",
  "key27": "tCcWv1iSpvWw6JoctcXaqyN9ZMMtUT2pWCNa6uHcJTcQjmNYkeZ17sPN6KiEmTGJj3Kya1gVR2iuN2ZXeMkNT2C",
  "key28": "3C3yjRcphuUojzSDNQMCN8RHAm1QytGRbXDTHUqeZw26Xnvpri8aYYBkz7bXyeL9hdutij8ZCSZgP8hsMyGr6HVS",
  "key29": "4wXCWfM8z8v5evZo3NNeG53pf5eZqRJuAPJKQZkVahcnPofEhRvWxf6z7gmMejDXXDvbZUni1LkGiHjroXriEeWB",
  "key30": "5r39iqc2acHHFpai2x63HCxSz4rg8uTAwmoLqG1KW6EeYFHtCWcJF5g9gGSRGfohZmx5BDpGgSbjSgeAJrqfa3eJ",
  "key31": "3Hz7iHg6g6cjhw4o9aKMiM9eLmM4b2w43dEZmko2z4nQ2ud4Dr1F8UjNUZHrrFKhBZYZjeHvAff5EXgkKnQoA26W",
  "key32": "3USvkZUw7ciXuLbEokT5Pgg2ked6pnENCNoRRtrMALkfAM8mbhnpteaqqT2gMGiykUoPxtA3LGmePvYU6ccAcWbz",
  "key33": "6f3yh7LTAzykGfxZC8dG86RRSybZD1prme1cw4qYztAK8BC2ud9j3czQsQSE4PazHXxvJW9bRqJUaTgA5hM5RHM",
  "key34": "3tVoaMWxG77W7NE1yjh7nNvGTkUummNvrxSWDHFP1YW3VJaZTQ6FJQavDksNojsoibhskj6ttNNMcURFo5mCYVJm",
  "key35": "4TAnrNr9vhmocWKymHHCRQLwHnUjXaAcZUPGye8AB4jXXxJtdPKX9ozMdzeH1vcpzprViZ7RNvzwrt2kNvHnDhWk",
  "key36": "LgSsKAYiLs3Y9kNKmuvvQgxSJB11g9YHj9JMp4UCLky1uxPbBTCw5TZvV19YsPh7LPKnt1kHrnhRQdB4BLG7gbk",
  "key37": "5HQRctEUbkBrUndq2SbeQ818KgVatTVRKiQWCCNuUQixdLbNMbvuyPjyKUJjqrzphjC3THENavpxAuuH4q1fMdbX",
  "key38": "3QUCQuqKeLxKQtzsz6ZrcmnMFxaaUdq9b2MSRfMQAq1FU9AKV5hvjY7vEo4JsUxJGVMaXPxDdLXiUMpJu5vj4D8F",
  "key39": "5Yj7q2Epu6vvVkjFrXERgD7jgQQN6Lu2pFf9X6k12WYzPYjAqZr6AL1i2zZshWMQBVZF452trNuyKYqsjbPCJzbC",
  "key40": "4mdNo8YuuC4aqSJ951zQSTox3PycuiCL9gDGx371sSmHiEXm1kfPg7P9GVMvTJcZqwgvmxp5bFrrZRY4LRT1YEk8",
  "key41": "3PsGhcozrxoKaxbdU6WyEbG2GnKPYPyGTmbJsFuwLwgbC4xMvH3wbT4N1Q5yqmgByzSoYeALpgV9mHQxigaN5Pc4",
  "key42": "5q7mqNVZHhG8owqRZW5SXTHDejfYvLn3ZmK8hvmFXn6cufo9nnofGga7ihXX4gPN2smahV9ozdsH6bjgx7gG1yRz",
  "key43": "gWoqVRxHa7LFjdGCAZc2oKg6rPwje1JciGahPsfVcYUMTeJnrvw8ZXpSqBFhZZRykxPiMTtKXujQrFh2kzmWPs6"
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
