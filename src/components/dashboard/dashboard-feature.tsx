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
    "3boLgXqyis2Por4LBFWifDbc9eXJPE56afVxkUZ55PG89kty4k91GhRLNhcuW4kct2pjiPQEVq7VzMBrQq6JbUQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37J3RA6yEUfYbFZzKSGjcU5QfY5NUupadTE2ckrKBT18QrtizV6pGCUvjUXxjwkR8bZm67EmMhjuHtj4Y64ncEx2",
  "key1": "4BWTgHDfRgmro2LKQMXU1TNerEaM4Ug2Fue6a4yG3YHsa72mk2MfZgFmdVzMaVTp53RZMcdQrZWno6YuytSn5Rda",
  "key2": "iVLxTbdHws7DDdGDABDnYDLPG4GYvdbAvPyS6Y7UwJVAmMfy4hPvZLD1BNWMoWjzt4v1WA1p7pRSRtZsEhVkiXu",
  "key3": "2JY9mKT7ioYBThAMjEz5UEsg1wqftzB3bZuTc5ffeu1eG5kdtfMXdCHaHyqbWuAkMtsx5CKewsNmqTW4kyZpuwu2",
  "key4": "6nf21F13Pjn5JTCeaf3GgnqEEVFDiBU4ffCPZWCvWCNFz5C7bnm6bMTQX164TxQ6JYSxrLjzhqPiXr7QZBFR3pi",
  "key5": "4rgriD35aZmXQAkysUqcL4XngqNBhKxHGBFGPHUrqyQnpHthTkpji4xtfgW76P3FCGdfDVURYGQUxsb4myL4EXvU",
  "key6": "62s43DWU7yVZHH7PZjs91uS6riXLpMmjJKFWxqyCPQRQqVc6dfLuDcUgWt7sd5Hb5cm44mueYArQSsBaPxwcnHky",
  "key7": "26GZceEXvKEyqKBCPyqYnaWwLUnY6y5E6k4bQJYLCNqHuMrEa8mpjMYDvmqPCGHAAQ8jAcvkAFkhjrYH1a6SQhx7",
  "key8": "2UtXRsB2brQPcuusTPjQSxEvwcKx6k1WqSP5ZT5sDDKfP1UzubFdJPCRUsB2Gk64BgRPiFHTCNRbfWiJsGDLAdA5",
  "key9": "4TUptzthMjWMFppG86XC4C7nHRGquBMDWY3yUFiUXyPjK1A8MZTPjXstMUCPW9vUphEnmnQJ8C1ZkbBLKDJYTwiJ",
  "key10": "2JYeqw71MUMfyzi1EzWjQsf4dPDKyBvFRLo9TxWYovZXY141q6ChVQ2t4ThbP9my1cVUGAFb8bzZMVF7UHcu6BNr",
  "key11": "JfqPD2yn4fUpKno9MSEAn8VTMYUUMEWNsEf8TYGUEsrxnZEftpYPCS4yytswArPvNtRAd4gaASL8RD4CPJWytHT",
  "key12": "39nj671b5qJMQF5j3FAgukWfUANXKN9HKRRTzDP7yQUKFvxL7gketZTMnaFL8dcr8jvZqeT3U1kEGtkTHmKSyaGj",
  "key13": "3uZz9fKdLWHPxxHpE245MsKViVkbbw1SNePndxY4WNyXCYss1TsyYFgbnVa8nYmVM3aqKAk6P62G7qiUiVaUA5SY",
  "key14": "vVpVnwSDaqfGYBtzS8wGMwciPaSfRqvKgMFPg8emGbTHiHU4wdBJTT2ZKskQ1AdVf7zwjqBJfXkcQW1rRGHgZRX",
  "key15": "341V9HVXMj9KEfbTEMF6dYKmUb4dNw6EVizJFARwGxgjNSZQy6sE3MkGTTHeWcNExpiMh2m5JrWAJinGprh2zxhV",
  "key16": "31MYMaEzafxQCyg871kLAwV6fpJG3vTLToxxGZtKwM6uHsgBdUbB6Y7ex5PQ6PgzF4R2umUvXTcG7dZWuJssv1jG",
  "key17": "49TAwupQMN5NDu4qoPxXRbnWWXWA4H3kjboqKRXhTgDavNy2Mn5yNmiZwUwJUyC2QjyREpQmB8s5ziJHAnfHqy3n",
  "key18": "5RQchPWU9zWryii8cQ4rpAtjKL2imKSuVjksRSRsiwdvUmq2Dy4Rirq1AqypkXHvSgu2otsYUhipqVEhvrsc6EZa",
  "key19": "4QM87XwnahV851zx64i8HBcrQJkhgb6T5Ade4E5TPrQ8EkJrpmT7bfQHUWctzfwuWz9gEp77XxnV9eiAFPrgj5tL",
  "key20": "5npfFdHoVKZPfXV99bYCg1yYC25kDrBnmwhUT6wDbaXKiz7eh6Ta9zp3Cqq38XfwffhXaVdsUQU5pEepBmX5KYKX",
  "key21": "4n1qH7zvbdgmJXMVJTvMUNmgyBG6cF3pavYTJ9kXKoxuSX5t5h16SwcUaB9Hjeheze34wevWXsph1isjoGxyQ7kb",
  "key22": "zGR3KBjyZUzMaQVxwJ5mAeBRyg53y9bEc9gm2hhVJo1XMXuVMruNNggFJ7DoomagAAorx2GGVkRetcaDhfpL7wt",
  "key23": "3rZPR3cJDrwBzLyvsBbvDs2qpjnCaTg89GWTYcqwAXHALXQATcVGR6ocH83EYys5uiPrMYUiwrxJsW6QhEN7UevC",
  "key24": "4RPkpYmcZrhwxWnm637NuManv6CWQfWa9ZS7Cke6e3mWYmMCqRxHo5WUgojyg3LdFF29GfXPbzP3CtKBkK1Ei858",
  "key25": "52dnH6NgKu3dTid5HYTvszyrhzKayaALr3Sz24Q9mGHLVbfjYPYMrBXMJY34ETvdBTU919p4SZZyo79MhsaGWZPW",
  "key26": "4kT7xqheCsUJtn42eR1gDjpLHk8KePi5pjTtHtDM4ZTWbCoH9w4wX6XjX9mSzse7Tjz1pzsmBTHH9kBQjGc9DjZT",
  "key27": "3kuxpttgaWtqnqEZwu8wBKSpAB3wJnATQL7sm7atyHM1jdAPfJJbfFAnyp579yJN6YNQyDhajkyLiavrK43X6h8x",
  "key28": "4cJhCHYXYG7oVGR4wEDn7GgyRduEpAaNRTuoc98BtaYVPHz2Mu6K5ohzEvvdJTsnGfLo4NjJzekFG278ca91JMuR",
  "key29": "vR59YYMnm2ufEGpbgfsR53nmf85NsNkFWdJ1pH3o12nG7NupzVEp8PBu1CjY86GkuuSUrek7BHaRmrjsMaUf47T",
  "key30": "4ZU1dtFZ4PwanqTye6WFnUU65nQcBZ7gg4D2VosB8q8VFZC3n2V2xLqz7kUy8JEof387XSCDY8gGw6ZLLSsCnbKZ",
  "key31": "34JXDXzEQeKVgt1U2MoAxTWk4EaWhTw7iji9eJ6ftTWdykAcdxzwvK9wx2RM21BqR5wzM2KwHJnSARgHBpuMq9Qu",
  "key32": "3uF1hjCZrhYczaXwG687uhGGN5dMFDVAYDTtu1axUMhsL9A82SqVBpKeZva7KAX7eR4eB9sVYPwMcoDo8z5ycVLs",
  "key33": "4Mh9dGVsuHy1VaJvcvcXj7EJZCWcp6MYz8kEcGuaDSj6PtjJrsHtT8BXMNqPAYoMBbAVmwf79UuTZefCDsQL52SA",
  "key34": "kkY3M1X78cDHvwNF1pfBNbghrjU1i6qbtSFe9JS7DSfQsE9wE76mUbt4YowyqxejcBDbF3QmY7BGJAhpFNrgTbf",
  "key35": "4MvuRA8J92WgmVDsd7sphhgmU3UigMgnoRZcYowtPUSavZjZ68o7hiwfAB3oYa2UWoubZsPXq7kUM8eGxQRnWznS",
  "key36": "UyPA9EpJqia6qZ4LDCvhmHMiSwq11ABjw9J8DNaqJXnNiTZmKcMAamAVgdL9bfHMc9EagC2tSV1n3hDTKmdUdEW",
  "key37": "4oW5rvYBtGattuA115wev5SvTCSXBYFAoVMordVgK6a7aqZA2ws9Eedcb4cbvGyzpijwhnoH2a6tc3qFHJ2buMzi",
  "key38": "X9eP6E55yETH9Lqo83UHg5ivWgm64yvkkD4DJZ7iJ2gAWT9yN4ovCZFBavhiYyCa25Gm8gTWecgDqYW5MLryffe",
  "key39": "4yuRSgz9hy272rRmcDUSERT9EHEUzZ4zNn4nzfWpZBf4Eg3uySv5H3iSFELMbTy2VbbPNtyXbZTb81koh3cBT2RK",
  "key40": "KUbn2b9x6C4t8x84z4cuHEWQ3AyqStwRYWyTGZ1Rd6vnaHZUu7iJj53GFDwuREQDVpEWittahEGXBgDYmQ3qNyC",
  "key41": "5Vcpw1UQrHGnptWe9H3ARGuJkXG6KQw48GhjjCN9GqNSgc5Lf4f1erN5ba9GyguEA6FA2F7WNgobQ9z5WBkUoYQD",
  "key42": "byPJSc1kdxxVhvwxvWoP29wyTu3KKcq16PZmPqWEbWXQEQJiDAyeCLRxSqtPXrfbh7K9pfzW1MHLDYZs9XEtirw"
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
