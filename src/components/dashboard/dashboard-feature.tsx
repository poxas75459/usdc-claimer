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
    "3t3Sa9mV2ftgN86a8qy2owJzHbYWLqocw2YXDJuqG6HJkG2ULwVH7X93qyuxLbzN3kz6HRozBEY2jJxmyGR7sn8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gmgBTKvhxj4D9Js3PaTd4fehFK1dBd5fJ7WpZcsDx44nLkETcVNfhpFhw7AXmDdJG98CUHBvHrXL5puvK7jpxXc",
  "key1": "336CHmhUrVWtRG7bczWGiLTsgPX32DGs4tJddKXxhTvXWwhykPxmSZxN9HnzZuxuoUEbyuZoiGQvTgQN1nJMp6yR",
  "key2": "5pjMgnhHiXFvxV42fRjBv2Z94gFxgegKZ22oFRWbBfPbykxiK8A411fPQfM4RawYxQjL8qGqz8FuGMbWRshrzp3Y",
  "key3": "3aSD1qQ4FhTffZPZ4v5Dk9P4ZNwLZDm12BFUsq1sWWKRkNKVQ9F8QhTJjBKLjeEEgx5hGVw8bXpYj4vZczCCHsMp",
  "key4": "4mZNDCBSN35hY4XYz2rsAHanwLCiXrPRrYngtSN58ZBZfiLWdCgPoqhsizqU8CZhjHyK5SyRrN1cHRSvLTqgCcaU",
  "key5": "39c8QdhEdQJHAV2zyt3er72qtqP26i9CNZktrDMiJvmH4fSJehu88Lh2orsetKR5gwnVD84DxJsKZsbVf1hSFXpX",
  "key6": "2dqQ4ELUjzF98AyD4onUmp7jyJkEjNNMunGXyjV1rQRsdVLPZ46Bf3zG6znzuUi452P66SrL955yJVsBnwzvhVJF",
  "key7": "5ERZW6CBvx9QuathwfDTdCHxvxzJEV8TQULGf3eLj3knuAKcMFMqgqeWdMNXhebqWH7yYunpdAEwzrRN3nGXmvzG",
  "key8": "yEzvC2DWPtrEyESMNSnewmfpBMBs5HRReMS6JfhKdmyUfkw9fPonfhY6w95Y5CZvcEhV9cvaDSZDhC5RLLqRf7R",
  "key9": "eLgGGzzGRWNjBcz7mn4tV9JVtoryVpN9RJQHUFjRARjaXeknvjeZiFPoXUdKYsPHSqMK9J3QRbS3yTmat7meVqA",
  "key10": "EBgCkRaFi7uqRtK6XYRkmET24Rq37xgxS2AuUYF7DD15H8e8KSXzb72GxD5vRQNxa5MPnf8L84mqT19PYyd9Beh",
  "key11": "BbmA3XRWawEeRz6HwowBCG3Ca6pTuti1kH2nrn2hHZpZJsUnFcSjBzxoFQch8pPDH8o3nmXoBVsTh1GMwBW64of",
  "key12": "2aqtTTBAJZXz3e3ZEC7p739gzmXFCAAUHiWkEodj1rt7qaxVbshp2LuRPpWHwER8KboPxbuKu5mARaVrHA4Z5wYY",
  "key13": "4LSeu9CRPHgSLuxt8sALHttg3abH8CAUZPtC4Krcoq8aUThJsKsgxh1tyknu5EtAuz82uVWxYFFgeiGJRqgTp9j8",
  "key14": "4KrtpiVU12DJoF8khDRiGMKMCjyfuFTSUUEcmaBaQwCZPj7v9QoRJHi14Q4RNSiYjG7G2GbSuJuhRNfMioxnh5z",
  "key15": "24zBJMiaJSPppS3R78N7JQ4nXWy9jiTYsofnP6RbcXg76uyzRHdkngkF5tHuDrz8aCivjx9JVgzfgcTUC7M3qVzd",
  "key16": "2HgkYSQDpKib78iTFYmrZYiH5c6kpPNkXkoTVsfDS3SJ1eZ2hWrLwwezWi5LLiVJeYhAg3VDrXKKZtD6yk7523eV",
  "key17": "3vDs3QzNCPJkAqZ6QqkgAMaLXhAbQcwutYHje2rRQkJz24uuAEn5xJZoP8J9sHX7zenvWTFYg8RkBKmdSmDsA9wY",
  "key18": "2b81tp8Y5wUT59Dpu1cLHe1D1oKYawgEogKx6vf6AKxQWnnturWR8pDVJePQkKjJsnBW4Ucrr67uBL5uhrohq78G",
  "key19": "4JGEoRWGZKXdei853hayKFkKJsRQezS5u9RfCfTyKyTiQE1tqdQqj4QXjpUcChmS8iU6ggZYY2DXYzXUhUwBvvnp",
  "key20": "VcC5kphsr4TQbokngdSnE6oZb8ku4SCcFtga6eFwU2q9WpQoHGvoDhC6JVRt3Fj8eMcGHuWk5GfUa3kvf1j5xrR",
  "key21": "7DAXfmQiQqQuWS4K3xpEAmaReDaiEgkFk9hds9Z2s3fp7YiuNGgg5Jf91RZB11tXPH2B3iv4qcej1SqDgAUWavG",
  "key22": "4LChZ1gwhDfBT4pydYYoXKRfCv2JLZ86zePuGTWdN4P87yQyFMHfEwnZH2TPRaZBJiMQnXf5yR57AwJnHxYPgxR2",
  "key23": "Cw1FcuArVaNpTvwJNJQmNVtBbUViWzDiiFKcmUpp71Fkf3ihG2fwbnGtysWgo9eyhuAUHW1JovRmGoRBFFEnD35",
  "key24": "3kmKppeQ6Au9sjdaJXMpdLPpJCb668EYtNmi3xHmC7xw3oaKi2KuG7BYV56WsXCXAnHkY3c3ZwHsCa8bbLMWhcrc",
  "key25": "4gi3zyw6vzuxSHBpq1HhAiTuwc7bjDorvG72ssqjFtyQ7uMmC7Zu4VXKQTUxkKEaRaCR3jeWoiwAaj9hQ7Fx9Ni5",
  "key26": "2Utykuou3yMkYYgqx3UhPDe9H7kWrmYfZcEDRohbA4X7qdBbpXijpiXQgZsdxNRs16C2SjqgqrPaWKHfuaXuuLD7",
  "key27": "49D8kCb6wRDXAjGGr8BxTztbBoMod4feyDGRFqwHEMuB33id6CHviYWQ6rKYigFHAthNi5tyRjA5EjfYr7Bow1VE",
  "key28": "5ANjnbB9LZ1J4d8mWcALgJq624xgtmskamzvbjSvnNpjEbrD1rFFePqwcGmWqfCFtBXFAyWPQZUHiQXZ1HbhueEb",
  "key29": "41ozXWMcDFDvFYixYtFyBJdMnkjWgtAnDK9agDYjw7puxwTQqHbBxYP6Vx18KUgNeuF7FpXw7TNx31hMH9MTpTcE",
  "key30": "4JSy9pWK8ZwzpTPMehm1PXi8Luc1mGgSWp1qCxk6R376L5BKnkGVxpGYPhzHvjstkGhFSiVa4mBgX5VuEYKuNDuZ",
  "key31": "2Pm9DK2C3mpqq5FaPMyWJSeRqBvG3vcedADNdX38i7otMXja8yk77P1fHgBuTzfkAaJ3ZKys2C2Hg6HqjLXzafMd",
  "key32": "48Po42XmQeCZNXyBUd9yAQNmG7Fvf5pRtArbKpCdHm1ZUpiVe9gBdujtQpgFSF1d3y8AaYCmP2wfWMdYzSTLCFCh",
  "key33": "etqXnFeQBQkvf9BXo9y8xLEiEA8GRkogjbQrKbsMZWVwgCzpaSEEHoYtPs3mxN9VGcow4EnaJLDLCE2T8iZ9oVh",
  "key34": "kL9vDgGxKkTb9RXV2ieS7xtTdnewTQW7TCpoQMhkd68uZUvqXHmifCH3VErbVk5QYtzuEcJZ4ig7iQSPcMQW2x1",
  "key35": "4syYCPiT2o4Q451fKLREhJQPPkBdxK4ugkBQZRoELziwAJUP9dytAKdiKr9Sh4QiMoL3G8CB9mitDcDVd9hk8k3L",
  "key36": "34U68oVb8ZTifZXvwbWC78wv4DfxaXqf9h4y2KXzj2WY6drFT84KSKR9y9epjQVJqbfdpSR3WapvynU9Z78Rre72",
  "key37": "5x2J68FZyS6gf63XvTo2sSsFtDYt3GNLpsGL2FTDmoTHvhgkGAgvtY9Dv4eFe5GVCkmYtAhvXFZP8L5eCqvuf7u6",
  "key38": "eS8RU2ocerSRFePKqyCSbfv7hmNDN5oFjSibrXAeupU8qyBSy5qMhCUHFzwi7q2675vGQ9p6njPcawaVJ3XR87r",
  "key39": "3e8s7e138EKua6DnJEeSzenDXujeQ6B6AxLyeMpXGu2bLtGtoV256Pf6qgjrEMpNNuuxmRWLdcwH3oAPP8RCr2qk",
  "key40": "672WTsMtWagwPeHRQTVvSpByjbYD37bcPYechmNFMV2yKyC5uWBRh5PtoZHeLPyfLBG8iT7F32KjzoWAq4p5m6Ze",
  "key41": "5D1ZHNCxSsha9hQLPJZqJkXJefgyaBVgcMs5mZUBPm178zMWPhVXhwMjyMJxpAaFbFti7NoX6wJGrcDvJBtbN3HU",
  "key42": "2oCyXPRWGdWbiUfvYxzhkLyNurV4ie3zttaYKHPXghhJ5MR1rbJP3JxWgfGnTNDTq1pVR3yVrMSpJNxdBQxoqWCq",
  "key43": "4pPDBaYPDbx1GUYpgCSomnuHyyKX7ix75jpVaU9zvT3jYkUCwZsmfksLjEvu8yP33CX2uwXyc5soJkEcdhkutzaf"
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
