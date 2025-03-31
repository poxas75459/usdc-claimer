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
    "47f87cmXpnKz7vqMCCBqvZhJ2GSYtv7RNjVY4NxNYfJAfTYhLm567FNdstJdqQxyJeZXU6GcjZQhjPMnxnb75BS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4anBHixK6hgMQRmXjqr6pj224SWZruPitot5mdABQ2fmvB5f8mL19o1X4MECT4LHby8S3hHPgKL23LudunMgNNvu",
  "key1": "28dp3DShAuGKRxuo8jEQi75gyVSN2b64KqWgHJkpE7LU8XJRFNjZufsHCqptQp1iVsYyXdGpR1EZqLyDugi4SiDn",
  "key2": "4QAFoEVUpDYngJ8UhyNMJcthFAYYSs1dVckSAzXxrLLYBurynUajcEzUeyrPV2ZA8bVuCwqw18gQEZiTG3BBhh9m",
  "key3": "2Gz7rJrPgHBoNiniMMbsxnNccWbSwiEdWRaAzyntMvUHc5qCZ6TAUMKDt2cqiDFU75TFzshjktoq8TpxXoYQtdNt",
  "key4": "ewVVu63jybf8FX6UXWaL2WZGbYfgCoBzjA1AtuGRVivQkbWmYk8UzTeKxi3faJrDfxDYpaMgCWTVfNeB7SEffqv",
  "key5": "24WcyeWnFtHpTBnUp925anZqrCbprwYWsXRVfucricjWzKg86Td3qxEY41aUDvzzCGShJvJdttErUZJJjUXy2ZbZ",
  "key6": "48Fyskjof4fQmBRH3NsTfXKCmapHKiF5jEapUGnLtPq45svMGaf8t8teDsYb4gkjh2sH6ot8u5kc3ThQXjfDFrTX",
  "key7": "4ubco2gRZGNmCRZtZR4exy1wudj2vrM7xxGkP81taBpaGU3dnQc7Et8Gyzm3ehXYp9M93FoqSQyRu78MkFwQiEq9",
  "key8": "4HHk7Cgq4njW3nB9GKi4Ayg3UoaY9KFNLLRF24fQvBeCba1Y4C7VqPioApdiBnZVYQGiqFtrqXigEsvYvimHngiT",
  "key9": "49tbo5cRuAnMvnRx4jQ5nNsrKYkA7RX3YxSTAiZUUgALxz9bAUPwgb9uNoYje6zWUn8MJJWHfyeSm6hXJSuQV2zF",
  "key10": "2MsGC6NLHWrYBTF1huJNgUiCTkp7zRgavDo3GUHUiLbqRG1wtNKNX4wgwp5zdN794wGdMvux1HWhpThKaNJZKobN",
  "key11": "5ka2LJHvXLtfP1JiHP1ZXE33P9Byi231UhbE7FXRppJLoBFG4rM6H8qT1rL3zeee79VGq2o7A2LS93fw8PJGHLXk",
  "key12": "52J2oaRk4wKgQ9KpvM9cb1Ap2ZpMtaoKbL8yGNCyp718s6wfqFKJh9pYoiS9EWfX9ysQLPxoyNawH1SwGwYd51bF",
  "key13": "V3hsFHNqCQeLJAc9Eo8J6CWgxPaqsK9R8YmoG4D6zNfne9VCztEDAd3Z6SECCzrCt9UfwHCr7BoAbpgjbUq6Gwu",
  "key14": "2jXHYQshWNnP8BZSzjF1Qa6XFC5ReB8mfkc6c21rH3vJpnw34CWqnueTJ6EsMWDJKHusLG2zoYrReCqaCitr4Ap6",
  "key15": "3DjK186uFSwmRddPa3Z4ALpJPWRps4oX52XZibhTipWc9aLHUM2TMT1R7pLSuLmiAwz9jtqrvj91SF4bFrtqEMHT",
  "key16": "XeHShSiaKwaUShssLW28zNgzugx1Efq6qJM6JVF3BqGrdvYcp2mkvLcZzy2EUPXCQnzyt2AJsPzcdEGvi5FkNsQ",
  "key17": "2y3cw2YK5xjka9Xt6dKn9mMETxNzJPg14K8W4MyN7Ey8prDWRAUUsFXSVcK9H2R8KkTZcfVunq9aX6VzTkAnmZpQ",
  "key18": "4NwwnUEwo7USsBzsVVKHPYJmAmxKs2MgR8535vRDi5sE5AmSdUKtF7XQ8JKf3o2DXeDDbXkrsLk7UGB39EDXSpgZ",
  "key19": "5Z5C6ns5u9z7AHNrzsXXpir3uEZ2DVggfx4AbodHrsCov3CwV6y47R9MQFRA6VxBa1mkFSogdzNWeAHSv9wSD6Yc",
  "key20": "2nSUZdsmdiRxJq9Fn9n2fkqLFhSfuaPZMjiafFnLrWGkxxZDrvSLTZ1CnyYXcpPuXC4mRpcwatv2fvpJU5rte7ZQ",
  "key21": "2Wk5cm3QNe1NZGgKxbBDbhymS8CbzSn4iUkZJpYwgcB4UFA2S3hACorD8S4q5nX2UcKWdeMK11ZYeMutVruW8LKv",
  "key22": "2UcqnKwntHi2EXBJQGQLxqt2YBzebCDMq1Rc14ACVNXAXVh7M5qYRgKv79xWZo4eWWiLMKPCgoiXaXbAapF7am4E",
  "key23": "2BFsojh5XAsYchB9QfbzgEzDsJpBz6Mh4PP9cPDfEv5hpVt7aL6MLiC5GGckmStG4UEysLa8z4W8NQVUL7XyTPVK",
  "key24": "RPoyaaL45K9xa6LzZ9FfgiShBLroKmoQmbhzB8rpmxo99L6Cy7KHM98nKucNjw1uiaig7n12Ejd8CPKnviChpLf",
  "key25": "jP5ymWEwjSrQWxk7x8fDybtgs6FvNXQbUhmDYhLf4J7mmB7MwysavJS3WArN35nzfiNgezQr9BNzde5r4xdZ995",
  "key26": "5ABmAp7N3r4wULf7KNg3WVRRfueWhFDC1JP2H8UR3wAvzNJShkUsYw231XynX2cD7k9ToY36yRpt35MWmXuJkucF",
  "key27": "DperCbd6FCzB8jCFuGag4PANESBfu7JR3srxVMXfwTmNusS45aPFxsey6GEx2ebma6FUYRgUbBRj4DZMPUFcJ2V",
  "key28": "45NuYQshdYiv8VbymD6tGjrLvwTC2EhNKj9VVe3tXbQF72W3v9kwG8BgnoJSpX3mZyqYjsb2AD76LzRqoLF1SxAp",
  "key29": "5Gjf33gaBvmDB9EnHf6UT2CNvjJ7HNvcyz7FUNoUFFHfp6eQ1HkbSahkFgsCR5RyWyAyVX9956PUH7t2o6YXoiwc",
  "key30": "FQS4TEUPw94pc2DPe47Eo6vx3byYy1DrZYJF4xmy58otixU2jxYhCX2j9Nnwk9zkkUq5wH57K944cr399othNd4",
  "key31": "2VKwtZqgVCXinmMg1D5L2kv6ob43eNBX4HLUMtsxjngeRr9LrMySSC3A952NaL11qkaQRkjtGDSc9hWu5PsciRg2",
  "key32": "3LSvDa1T8zu5zzz1th3m19LL9iYrj65wT4wGLarqgx8s75Xw1NjdtU1NwKSMaiqQSxmp4xQ3YhN89Wrn6FCUQf78",
  "key33": "2PYaHXLVtgG6nREr9jX2coT3MjMAPYgaNXvTwfZwbqa8tvLz1vdrQAxjK6VH4sGdYkkrvJH3cdDp4TRXWh6mZPRw",
  "key34": "5K2WJDi8Ydbtov121C5uX738gipXMaevZnQKgWx1SNKvuT1UTFUkFYBrAxMjTs2Adh596o3kMQ5rSUTMtfsGQ3dV",
  "key35": "29VttatjpeHtDW2NxKBxGqQF1zWcMqrds5JLhSSxScBXf2YqCjFVrR59MTQt5eQVogvv74CJRjxQfrBCaDv6PCMi",
  "key36": "2iXfGtDJBhvzPywiThKDRvueFKHWFLU4ghwvmPxUzVz4oLNiZBERRPWrdMuC8uackV2Db6yirEQih3wYsGieaKa5"
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
