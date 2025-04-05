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
    "2F71E4jTNsnGC9H8Eb5yfmGwhXoSQ74hAnwTh9wWRqSWB5cWzy2KH33xcXcKeY3M4QuT3nzeGG3HTzz8FfNsHU8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sYbF33AWMZULp8Y8TrCrWi2EJtN72SumnvP1bWRwwQhhBpkUnrV925pCk77Lp1zjRJK99z7JFcRZT1Z7qyh1JoG",
  "key1": "3dfLUdiMRj2Qpq8rqDngpyegqMnPXzNQKmKZLpR8tCYcCpCarDFEtMhDFqsxbSpYyasbLXsPyxQyVfZcDzjB8QjA",
  "key2": "32g5zbC6zqqkvExjU7dEX7KRE4VvC8HSY6RA8T4joCV2RARtxW2kNNiWkNxGMrkFosv8co3uqQnxzx9h43ZT6vhM",
  "key3": "4p9A24tkewmWy1pKPYNidL1JkTQZs6EvcdYMoo96mWf2LgUTskBHNsTZEQaqoSkXxzmZeS1D7nWyVtKLMjuCBtCi",
  "key4": "5wHQ8cVbAnB6qBnFxiKFDUNiJD9qvkyLmBcy8Jvy1qxjzkr6vyzELTPjJnkE4AsFWvZCiGDg8Y8cps2ATCEtgG9s",
  "key5": "WpvJKR1zhzE2kVyGiKK6kFUgeA1vrQUnYefbj7YQc2aGhnRL8EE43S8sQYSPXQ2psWRZao7BySYbDC8L8GMoyGg",
  "key6": "3Bm6tGa34RsfNpQrc5j1mMBYYebSb5rh4eUSAHoFLQJ3ZYovR29oxpnzBu2EJhdsGdyt4tBUwWdyT5m1YCBLDRNN",
  "key7": "vohGZ3xxpNFzwkPnCMvjuuTH6wNruKcYvru9E4W29iXNsV2iHEakCgvBAoT47ppwU4DdZeiFzFfzZ3tHk4YW9Pz",
  "key8": "4S7to7CdvcQmkWUXFXweUXuGXxQ28jWmhzQ7i6jWEr8Y3cCKyczrakdMuRmvg7U2vvicSadAWhYyskKXvN97U8JA",
  "key9": "enMWBiQGuCuRd2sJQy2GjvbW55ovwFabycpEJuJUrBzE5EhKWuKdaeEayqFja2EWGJNciFBtTHvCBjxZXR284n7",
  "key10": "3ym4tNqBUhq4D98gC8onDa6NGsNcEhVfiajxSpxMTDnqWqkJXEkx6BUsx7nRxNAAQXdPyRxzzGAFBtnB9ZCK6ykg",
  "key11": "2fQgtUhyL5XayeQsCqQF5wLjWKTWknkZSkSwAX2rfiRhc38szMCjXyN93QX4HeX3iDr4fPqLqngpAR82c2svu4vc",
  "key12": "3kqVHH2huLsQN9V7czHDKbaBJHe4GZACoVhFfGphUwYvHQeZq43zfFi22a4HUCNP2AWGZt4weLBwSgma66YPqrg9",
  "key13": "2T9BR4TRzJVBx9GiK1ia1NtH2Awo8Z7bWBKGgRjaL8uFSU3nZgyst78tTBnj4KHH17ezp1HRNcJMvtQHxyoNXZnE",
  "key14": "2PUejmEsBXXEpRJ2ZfYxSXjEGNXs479kaeCnt8C8ATfSeLaxWXgtV6kp4yo9DK3iuCDepog4F6eeJCgEbSwAYx1u",
  "key15": "4dJZPDXNEzpEF7UtamJk4Ryrew4hrA2w3AgYtefpnW53cpkMS6oaUpHgVzjnzBTMtXCiC7yohvBhFi6HBcQzLyYj",
  "key16": "2nyHwZzBDuU11w3TJz6DZRZiXy43ZtG2oVjtXjtdWrWAFetL7y4KVCvEZzfnPuLCmkhg6QVqyKXj4scZSF7zyTjh",
  "key17": "LTR5BdV8aLbKyZP8L3Czd7My31CXDZeBm1HgCYW449TgxQDLKeYM2kHqiYbyvHxMjvuHUR2h3s31qn4z63VJBNi",
  "key18": "4UuUEG6DCEEqLq8kCe4BeNx2YAAXTk2YT5wNoVQervW5f158EKmShPRSG1XEtebGHjMwMJ8wJuQFe71G6MpVV1uZ",
  "key19": "36XFWL8xvrHk6YjDFtgHPFhSVRR4EHNrxjGWjroBVSx3UB15oExnomwwuv9eebx5QPzZCg53yJJwv5ns4iQDeAFC",
  "key20": "4QNt8yaWi8Mh41s24YZLTMVCE3MYh7r7X8y3KG8JnzKBsdySehYjwXH2DF2ZR39e5Nmu14ASzHs3DiaMYzi9sZsT",
  "key21": "2FUihoW5Qib8AbPDQFjpTt2q2KrxpqaRZdaHvk1UoURCyfV919zvTh8ZBLUDpiE5qK7CV3UZ5uXhEqvHxAQcmRK",
  "key22": "4m7nndEP9uZVMo9DwP9gREpC8LWNeFbpspMETNMNsvnrGCcgsfmMqKNWMTNNSXeWZ8ZeqXyQVKvj31JcLBfSD49g",
  "key23": "MgfaQkDh4x26JkDPjUAPEqnCU2N1RpUcr5myXBYADa8B8NZmF2seaoGgXa1pLBmA36faAuvrwab6KFLbe4rr1Ky",
  "key24": "4Yx8dnBSubC6h41Sb1kUMtAR4ocrj1oqNRocLmYXMeB8vh826WH6URs3pYpCwjriXTUrdmF3anrfkw83RtDE5Hk6",
  "key25": "32vV77vinFo4wGXTFShQrjmmxsvgd64PXRLDAoRruy9EvvxiasvThQ8sPvMsJ74uuDMMioxWkjbY1zSxQsU3MnyE",
  "key26": "4B72n9aowtDEn3nUEk4QtHiR9TgyreVuY6B9pKcS4qmupB9eZUWVGTcVCCk2q35d2AGYGP8N85quz71HrdeUAY2S",
  "key27": "5t45dEFYj8maib7T1wm9FgAFhLtWiGFvARSYug5kzYexqcAYB9Vmzm4jkWBaZJJJWjveUvJinEke1YpBq3kjdGzM",
  "key28": "2jEs5pPE31oV2pLcP3XC16CNs4fmytAdPoipUFX2TyBdK2y7ubcqmmn3V9urr39sYipmxAY9YKgBEAz2wFpMGp3c",
  "key29": "4xmBt1ScFhRHEf8hLrHc5Rxck8SCYMUw4wZ9JnFwJqDh1AEzL5Sgz1jsFP5JZ7wY2Z6w153yHZRby5Yhdk6SmbSr",
  "key30": "5YLUzr1eVuK1mAs3K2V74FDgzUXYMz93EDLCVaMbW7E26JyUMw2L7KSaRvpPSbyiwWusaWbyEuouHSVbHQ73fSyV",
  "key31": "5KNvAdDbjXxwc6N9MiAUVeevwSY16uiTJUPVMxZvphcoCcv8PJCL7BzJjYJx8S3siDfrZUAHZK2qdMVyEgYHZGmu",
  "key32": "4dWRj2dSN9KundWaGuU1sDtSFGMn4Hd7oNg25Z77MnhsJg2DghukhRkz94QVe4vVNvRk5Hw5VT4vNtgbe7RPwUqL",
  "key33": "3kScEGrwTkgLrLRutpMWrmPB3hMnAqj7U4Cj78mhFPAysc1E1CAwifH9T25SaDuuP3ByNkn37HymZoBCdmSL6GCz",
  "key34": "4tgzUdoQuAqQ7e1zjEzdkAVC4GKtt8nWAPytv9gCBzZuLPz7PTFr3vLGj45N7bvXgpL5m264T7C9ctnaABp7NY9G",
  "key35": "2YDQiAy6iLB1nbsS2oTJzAK1QHpS6rZNCuTej7aDqSzvqbXqTdXyWM4soUQRrPUuDRHnvddrbSiUCBjjSjEcyaZM",
  "key36": "23w99qprgQ36cAsBjTdQ2x8EPsWfuqupo3yPMLjoSp9XqA9JkmTXtEdwxWMhPb4B1Z9PXej22CMQsstqbNmfsVGE",
  "key37": "5hutj3SyhDaokP3uanvsGEouhd5nck85YAtWB3TXd9dsmgzBr3FH5J5JfEYXDk3RAUoVmQHwAbxMxpYUKKStdUJk",
  "key38": "3uaqkjHex4v4JJKfYeNhHN4v7oZj94PxcW4o8w5kjce3tLUYoMkK6vs22NbhmEz7GGj6iAoyJJFBAoAioQyR72f3",
  "key39": "4ayMp2XJozxNy1AV5NQwsqXoqNcURd4K5dYYRse5xeCzHWMRdDHGUCPcxR5857mo7JrCs9jqwPzMV1n4odR8Fodu",
  "key40": "2A1B2pvUHGJLqtqWvpm3Eo9BBEzhiTtW2VrJKwb97uGJDkRnk57f7uHgKPMVhfiKDVb3iiihAbyEG81Kaiin6GaT",
  "key41": "5SDxkXCZ6QZZYEddRagE5HvfLeYaH5ePEkp3LZG6wTKP95THsY9A5Zb6FCqTeTVQxUFcJpusFB7Npqz7crXVFgQQ",
  "key42": "5aebZZKa2yvLWJ6cNrLA1Dw4eqP4X6aXm7dp6yxwKQmcemHxvCPMDGjZA1GaM2JmhENbDqf6VQyF87XtMih5m4Hb",
  "key43": "2W98LFWZ3mNGi1P95Vcm26isppF1nSJviJNo1grVzwZsctyHuG4iytdvC7XLSLmtd2xQs18u5rtre3q7qaUTLX5h",
  "key44": "2CpDsMdD8CvugZHyo3Ep2Ru5Y9jcDnvD1dj7zFZUFWK6UDB8SJGf1j5pADrFcAqpcuaqojKGjp5SdNKa4ntUcUez",
  "key45": "WSQpXMyH5ih79eeNZgRPsQj5iYAFMqT8c1AoRZTAFsos138QETrWkeDCwcdm1DuN9QFUCTj4fFRw5471rkffU3k",
  "key46": "5PrHPqMakNMYRQ3kcRcT4zMRyK2r8oNeSy8ikiboHAFWgxQW6MoXeinnax7yRTuEns2qPKHARDkDyQ3YfJ2fddsU",
  "key47": "3EpZ7eFbfYPxB2k5c85BS1se9TjdN7FQdsdwnn32xi3cxiBXr7VL2U4HAUxtLFxcDqWVCXMVfiiCb4mVagrwraHL",
  "key48": "qs5DkvFPMGpy4mS5Jsp9Ljf16hqXh6532j3xQjUFpVXPB584z2TcgWuPrBu51wDWs98xDQ1fQzifFqVCxvftHS9"
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
