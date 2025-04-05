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
    "4qgBqwJ1ByYet1yQA3oKchCAhsZWWgcwWUo7LLqJb4MK3rZqBJA7RdzPXNePUDX4V36UkHD4mG9nQ43nVJ2Kftu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uZeAZMn46Zbr5AsHubkANmbjc5N8AqpXE4LsYdccS7ZPccVMvKPoKgzDDRvgLWwQY8WZwKFDGUQzVv8WLatWh56",
  "key1": "Q84axFGCtJbsrtLtYqkmKQTnjJBb9zpPZgudFs4CnnJrFG1gThEGfh4M547cv64GD9wqdW8JnZ7MbwRcM4Hzkjm",
  "key2": "3H4vpg5Q94xcBZvjhuTWQZMkirVKC3Vt4BUVsWEfqRpZhbT8iVqNJqW7kBDptX9UNibTm2te8jHaBr52J6rXZiN",
  "key3": "2y2HMhvYq2YCaPjnY2qBrvjodxu1RZ5oqJUmfHZ3Xo69kFFsrKidfpNE8bSUhqVbAKLihLLPVgF3o77M9S3tMhap",
  "key4": "2ygudm18MiH1QuH9Mu5Sz3ahpoPpf5AkSpPQrayQpjMvi4wJ97EtmwYQu1Xh7Gmq7VdB9gVig72SHqatmzpYaeV1",
  "key5": "AAELU16pSk5GNPv8i5ZPg86sPhvkFisAf7eUThD8BEkpEr5K9jgR1ptCdP43H7r6nmSCW41fbtpm7nPQCBpGAod",
  "key6": "5XxFTH668WmfKuVa2mM2aWtUoJi5FNoZVVAEAEVZCDviLgUCvtLjmaThKYhq7iUFXsTyajZLgtVpLChPys1tDEj7",
  "key7": "52TYQGnB5EvHfLQe3U2BXUeDfuhfXQYRwN3QKXkiShG63G6que7oUXKF3VL7NessvYFeHg3skz3oi2TJHnnFzsBZ",
  "key8": "4tvMLbj3D6ugGP3ypLN6AcUtEZiSar3Zjufg7jBf5bmA3VJjA2sEkF6pDN4MFe2DhepDGw6bLJqC6Ro3Dz3rJS4j",
  "key9": "2jdF9SnDtE6zLZ9unQkhVnUBByF4GyNMrtKTaGk3h9XXE2CauKMzbgouiMm7erAYhCbezgCtHiFZb22Qh9P82UHV",
  "key10": "4GW2q8ASn7diHTJT4f5e6e8jii6yj6JFsVZFgRwn8HfYub2PuNFbbjhqFgaH756WcBfASWfDjY7ZqdEQi79mt32S",
  "key11": "3jqh5tn1kaP4kA4MS1x6Mt8HxPsVgDjbyECA5pDoyMuQdFDiLScJYiM5pJys5cQVhUvACAh3E5fqJroRtEz6M1vL",
  "key12": "fM6L73Jvok9PrSVerMyybt1mAW7sLrfX9519KcZEcxWk1uAnTHdBMsuTXJvvG6fgyP15uJtK6fBtQ7XuwAfxXPp",
  "key13": "32evDBXugXwxZPSf7JBvpN1DM6MixMxfeXGKJgSXPbs5LzsXnbfc6534352eGdhw5zRwrZ9vp38cvd1RdYMsLH4U",
  "key14": "2BJrmhEhCHR8ao7rQB292nacBhFNyvpg6HfHr9EsKxX4vTBgfvnf8BkGac5qZcdYeaf6sbFsaz7ZzchVuZoSXtFS",
  "key15": "5L9JLECZwj39H2ds7WcuJYJrPfvq9EADhBN9uRmijhirCiJfvJdZraHJxAN5SMYi31AWFQmq5BybptRXeyw5Rs7f",
  "key16": "2hge9cGtHUUfBjj1KBQYG95nVwp1qBe3BHG18hE2CBfw2MQ5TQUc9V4oLYJG7msAexpFQiBA5R7Cqz71UkRmb7BW",
  "key17": "3TDc412851WKwCKKCnWMSonYvFsQfjtGm6azDV4utCXfUE9bm5aMeENWsYmPf8EdJ5Hwoo7iR6i3GmJa2K24MmKN",
  "key18": "4EsoQsBcn1vbXMYXunJYuCYx8ZiAfq29mVzgiiRjrLCAPQUYpP3NhPdU7yaq4CGe973j6GboMzeTkKRkA1dG3MbQ",
  "key19": "64YrmDpGMX5aWLLoa7XN6U9LyW5RuP8SdzvBH1zEwr5DhgijJYzqd5eJEG5ru8Kn5Cymsqq9YGqAFYjNDPZYgP7d",
  "key20": "2p2ZKWngeMTaUrBu2uJQ4ZbssqnsaeJpTjNQV87PBKA3p1n8H4uDt6BoJBuKyYvQYKV8dav8B2Scttt794zCeTCL",
  "key21": "5rMdPhZ1BjZDh1tBWC2xgY8CWyYDE4JoLT5rqwjpTDaMCMKkguPax52Wk1xBCNduuuAgHANm657xX9vNm7zezPgz",
  "key22": "UXXGvLLH3hz2zsyjm2TjRG2o4TEVLKiQ4sNh4ypfMFRwMjSvpyyHuELjzskFpsvjznBn7XnqVgwSSFQcVXi8rqJ",
  "key23": "5qzcTb9N5k8yiM4MeDkLBsU5pbZSo1Bq9JFKYcVCjT9c33y4JjrVmJY7A2Dq4rwtGwLNLcg3SbqSuYGE6N4u99wC",
  "key24": "AcBfETL5MnMpzi9NUnStWnZgYLgtqsnCaqjvNVRdYu6xenmmrRUmpcWWh671yLZDVtW2yc5cPgrWgt2hmfpuN76",
  "key25": "2foLpXTvCX4toFownpXhNNo78G8x2MRs8J8GxDKaa16dKfqSdnGv7eusv6zP4mpkRT1JpuvLvvFUBxnscVWZY7Jo",
  "key26": "5L77o7QQc9ZZk8womK6M4zZPPZGrR6qTmRuzvL34aK9WaS1WBb9PDdVybjsnu6P5D71HAmt9J1TtGuU7pfof6WiJ",
  "key27": "2kCP5mKVNnm59QAaqByBjjS6kWtFCiJQLfTQoGQ3xQN29qsW9g78LTz7ZDwJxEaarbW1H5DV81M8PffDLxa2e7xR",
  "key28": "371fekH3tRbsCTe4DdtgWXLoygtxXjRVPaL4jhXsNVhsjgSLgr1gSrhtxLR2TAX26VY4k6GmpYk8wp94MHjbSqLw",
  "key29": "3uJaE2QyVgFS7ajDSgRWdxRnh6iuJLzQnSSiFmygr26jpGQN47EVyss2ELArKARArqwhE6SkZF7xncoMgiZzKTTX",
  "key30": "5jSDe3okZymcGGD4afCM1VDFFmTsCCkBqJxyQdutcoJqqGyPHvMSRXspzFdXBtR5y2iQA94puw6eNPbR32qjLMqj",
  "key31": "2whRXk9Ss6XUnw1YCNH8pCXqtgmazoCVi5kzqrcdkzuMyinybmnQEcBCv4eDwiEm8JZ75LwqUqFHx36G9inmkGCo",
  "key32": "xWqNcWqyR5jCyABvivk98V9CdpuKYQrrmV4xFpXJZgFaVM8FvSZEYq1D9zpRFAfDVMUXQcRAUGhNSDTYySM26AF",
  "key33": "VjouGfDi2xN6MGTx4LTsXPt8cr37qjeSgVw5biZ62Vt8sKnp9iyHeuY9sBGZ3AbDZxYAEUgHZ25B2JJBNdM9rgP",
  "key34": "5QB4pnExqo4XHvjenQDUqT6MqUBP43LFJNmoX6483oM6ieyztyDZKbbm92d58hc4TsAStAwJtX3uUWpWzRc6C4zD",
  "key35": "oDbHYTkX2DhmQhYi73i5KU3BvsycVJNin6WvQzcA57ggpGQLGhnbXjY8cGzThAPAmZL6AGLHaDmb1cBpsivt3ot",
  "key36": "4hvgKKofBgTqJBna8ii13EGR9qnq3w8QGMoZtYMbMySUScfjgEPt6LPemvvzfJKDJNx4LTuu8xw1XefjyUEkLyT8",
  "key37": "3TBcDiZHXFzsXHN2QcFVarTnRDzr1Lsk747tKUzLeQyxAoKXf862cTC8eAqrZRS8jpLwtPS21YoWUEzzuo5LnFhE",
  "key38": "4aYwhjfquGyvK1EESeP8S3F82E4GkN5h3NZXNEm7EUFFtbGvZBjymh9Q2dD23h772NBNsFfUFhonHiGP9dLhhsW5",
  "key39": "3EDzpFWQ8A3u3RnHDkUZovdQauztV1CUYmoQ4ardm8Z7zVTfHcQgGnJMC66T5bTFECByt8wA525tsE4qAMsNFwQG",
  "key40": "LfVqbabNC5Uj1W4z7Mgbeo6nqTM9xkJBfGd8wjAtn2LG9NzAt9AyQWHEVBg6atH15GDwb4wf9f9CxFeadZG6oxB",
  "key41": "37Yk3JAc7WX7ix34m1SzWvpzqiYxTmBG44KkaFYPu8ctJAzWHuYajHYAxxsWgs5zjbaH8kdShkD98Koq3iGWs2w"
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
