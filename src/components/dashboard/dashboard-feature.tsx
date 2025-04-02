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
    "4zLJZNJMNRRanR7Sv2YXcSQaxed6mJaNjRhm6hUED2TQBR1azHrg4JTQotqBXX8gbeeeUwSBjYZBGJQajakAv6LT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zYVoS87YV2dniUQvzAQN1ob5anNjE7DZSMhm1G4bu75AY6wAQVmrhwFx7YsWs4CfCWLYzo9z4GU454oc75o5MWs",
  "key1": "42rMPy8trt2JAQQpzYrbucu1DSsKngzQbZX9oEhhPcvgyytxwP2VRq1NSHWVnaVTLymFhWjHmNowPVShxBxCfRNZ",
  "key2": "4FsMavWGU9FBd2HeEMqEeBLvzuL6GxRXPmMoCjBDbvANitFQr5RQ4iP5L7k6FmvfxshRdkPHU1Bn2LqTgW9734x4",
  "key3": "3wt3QoxBveDrmvSQguV8cDpqkVPWp3yR8aXDrPFA6u54QNigxAwPzAqpAmmXumGtsyt9toceR4u2qhCSLWfDJXCg",
  "key4": "4no3wpt4fcartTzDJ5SbRmjUMvMfVyVdD5We6tQPgoiUGTfxXzFNLLdGjBH6GwWSrScvRoPnDAsLVg96ePKWxxJg",
  "key5": "z34jWaqMjJUSmKJ5w3qXmV7z1F7ooTpDHtrw4zhw5bJYYUU7D2FGTwo6gbJGJB3j178DmoKJJ1BGJVKnmfMvt4i",
  "key6": "23FNptXQAwh5YjkiCp6pjCaPXqnYBqgHFkDEMCkR4SmkHKXSyT3EfVoNmt2t17q7H7xPgd8iS73CU64bZjqQbiDY",
  "key7": "5beBY4YHz88UxVdoUYuojTXJUKoaNKn1FRfKRjo3aTEThXCEcGPZCYBxRZNGGkbrDSamTuAU1grejm7TFRvBARto",
  "key8": "4GAtpbfgxTsi4hunFkTALhvsCWywNT9zwmdno4a6nFYVgfsXBtuPKVrQnWroA1Vpn6imz76TntGeX6tA2eAdTMtR",
  "key9": "KUZ4JBF1n25XPr1wXefJZqLjTk9uZRwg3P1kXTBANQHSPUWdua1pKnpFz5vUadB2Rsnv9K6nqUpziyP7KEmK9kh",
  "key10": "4hMDpVRN4hTeqQkwXX6RjR3PHM9o58PfzXHDWdHJk1hcQARFJGuSRbRZghDgW9psAWe2ABwSFJ2HmpHmXmoTpE96",
  "key11": "2XHruUfdUXwkF4LRyZL4pBDnZTgG1Zmie1nqUBohnFVcQ5b8FUM4ETS7TAChpr2X9xcgfMrBPTieyNvzSdRmNe8g",
  "key12": "3uEEicKjw8Fjh9p3XmkvFNnRhTxCUGg2TJLHk2yNYWkMHCEzLNy5geh1icMKztPA3HjMFcuySkJGrAkZrP62ud21",
  "key13": "2kgE9E9QnF5ecsDRW1NSQYoSeWMbfLEwXC7fu8xKWXpERBG4FFC7zSf6FLyerbPxD631LFWdaz561aaASAq4PJ2o",
  "key14": "2A1SEei7Dppp6aWuShypbfja6rwPHe23ghmakCTqUgiLrnAqvZEmJySvW28CZtgrM4eMn5oJWvuwDDZ6emxQjAbW",
  "key15": "Cq5keuxwmBfnDzeDQ1Hh4Z2u1JVvVWSpnpvPi7Tjv9a7K2Mp5oSD4RyYp1Gh7pPn9tPV4mBzW4JSXy3yTUkkgxu",
  "key16": "5kJB5fgBi2Us7uNG3s8juLojoXKJ4AsMmA778hRK6PY3qWBomAG4T2EtZLrhjKvU68aefuYHSjytDYhE2x2cm6CM",
  "key17": "23pHXhimZf5Bgx7d1hfEMPPNq45BiKWuFJFvCVujR3axv8VVQ4RVtWH952CZU3XVdFCgJ4Lpjx4ZTSEXpCSHfZze",
  "key18": "4QUPb9SHbQBbuJAJ6Ut1KyTtXkHfBNJ69jyztF1BhfxFgtBXecoXszPMw4ASi2XaAbkB9Fve64YLX7J6TZr8aJ25",
  "key19": "6y27UHeif9QKJMpN2YUD9krHaHea3QAJCVHCQmKuzqg1oTr8AjJ7kf9sR6x3APZ6CJCTdeDhjDeTBo3VcEXYWCV",
  "key20": "4B8YD4mGo5MuhmJTKoXU1ne23cFjDqEzS2xZQABEKmh4rcLvoraLDtXvkYcnUQDwC3uLKR17Cbd4p41NXKme3ftG",
  "key21": "5WoAbR6qu5F3ehEs5VNzbQ87wUCvs4iAE5k51pYz8wBvB2L4x89CB1Y1LJXe44ML1EYawYYs9n7HawtnxJfR6gdK",
  "key22": "4GN6MGyzbUMWWredW4koSc6oeDcXmGqNbfm3XnfKa84TAL3yWT1Eq7cwEm7PBWqbbq7tEFt4DYMENexaxizyzmtC",
  "key23": "3XhKNGmhSTDLoaFP1Df1By8gcyL1Mi2dk8RSDxyMV5rnE7FbRvTuM3xCSqDJaaeuTZowPHGbcZ2XHPbTst5jkgSs",
  "key24": "33vGagPL9bMjsiggb4xxRztHzmAP2uAeVKuFmqTCyNSLBev1qSxiJkrMfVMVi12YVvmjqhxgpNitLBqeZBGRvMEZ",
  "key25": "5AzmsF1sMUDixwy8PazXBZx4E4XXY7SBC5z2PqUheXA8znzjvrnFugDQVh28eCSXg8N58qf26WUX6VNUeKEKV7uD",
  "key26": "3ciBpjVA1WES1yuxJ1h2YEwqpNz3YtjzsKCR5ewpj9vPcegsriWhQQoGnmLPNGrxDsPySa9KPrZsTjntmtubYQek",
  "key27": "QYtGEkAR6noBadCc89wmST8EYTDjEpSM6CwoCsoHZSFKhVxZUAQXTppJRMZ9EoaoUPXLPNd3MDUiqkMdNDXtTN7",
  "key28": "3ciKgtSuHv8micfZXJjSXcBHzm1EWXez35JLq6Cw4c1ycYNenpxgTxfHVzjvAkEdLJWdYpon7h71TW2cfY6imEE",
  "key29": "JFabaXYUDJiKH7FTdmTLJM6ckydGiJawn3SQN2NEX1aaw44V9JVDQYbDDtjGL7JjC2cULzwmCXzHwDXdzVRHFUz",
  "key30": "2G7BLZATM4uPPsD4GrTTkvf2zeURXiyL69rnYBnCGgQZdZobA8Y2sQu1cAFjGdrmezrmXSAKFzYYcG3k7QEhpiQ1",
  "key31": "2nBnq1wdxWfkn7K8TqfrLMKuqLtZnoYVQHzzsh4trUxnBE9fZbnG29LWjoaM1B9MAgFj9w5mCrKUmSusLZSg9B1c",
  "key32": "4FFaQ1hFWRa5DzkT2oDSQxXAj5Sai762RejuMmseGSYS52yBnX1Nfy72CraUqR6Qy5hcYJZuvpf3LncekkF6xccM",
  "key33": "LmePdExUhJLMq2CPcZG4ivxT6ec1YXmBkUUPhY6FuvdPHH82tKnKv3E83xKuFs3pLJYn9D3KY4i6Q9rWhrCb5bq",
  "key34": "2ypNem14KcaD7djyrFrcLmuqZHeLWPURZ8LabKRpDuh2MeWC1iiy9AjyUQ7bgBfXhAhwLwhg78isKSd4fdtxS9Xe",
  "key35": "41GkZDG9UX3knUdnrKsVf18YMKFuapDpBPbXG27KhsFZPLDpf55WANYpy9ZV7zfFnMu6T2yDPJgmksWfhUfVVmF4",
  "key36": "PK6pjPb5fCpTppLthCb58zddCQsEznbtiD6127VqwApSJpWzS477TRMR7XdQX76Kypr5t6M5doPbL8xzMwJua7P",
  "key37": "3ETAMZepSvQT3HRZXDzubiLnSVqJuh112TwAwzwXE3QUEMnTPx4oQ4gVqM3PmRc9SEYi8bn3c3v7UyCzHCMP3KV5",
  "key38": "5TLYqaDwTG3S5H1j9hL8witTpG4AJSfH7wkxbZzCkHevHo6mQzwTfRGZBhFtZQK1195CqppEEqWGsggGd9uGXg8E",
  "key39": "5Ey2Fk1hoVGs3Bgvfsm55j8t4bGkULcGUfyywJBKH7KMQwL5c1XutFG7xjnBeYQpxf15sGxVkHuxot9vonUCqp9L",
  "key40": "3MT5j8ZXqW5kbFtWkqbsemJFbGQ6cEnRKT5gty6AuLkKd9242K8kSJ8cTutS3nsh215RKivvyaQcHdZ7gYbmXN1Q",
  "key41": "5n2n2bbJwKoc3pUva8vNSsKfNUqULi3GdHcaXafUdMedyQgYzYU9KgqonLF8EaocytqFKUjkx7zuE5sCBxnTxk8U",
  "key42": "5C6TxN8rD96qj1MYebrYJh7Kd7forwUyFNzfZG48qfdFrM7EWtZD5V31kHgWTLhBLeekzyfDRG36tWCzq4LpDinh"
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
