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
    "2fFwFmchs15YXSeQwfsZ98VoRtwURot3Arw42E7QnKytzaNbabYrRQUjrZjxchcDnb24aM5P3CENs3rwFbBFCv7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uu8snafzFkDBy2YmXoPZBpXCcdTqYK51fSBT43pGPV3NFuw1YHG8mhz8p5ZWf5WFBctYnDutocLmsjuizNqaohm",
  "key1": "3bd8eZtmvFG8gff81RFHvdW5gD2X5Ua2RBXUEL6wp9eX6vscZkk1srAhKTVmJ7E1sxpLQPXdUvsSrxpdN9dvDuE",
  "key2": "5m5vd78cV84oPFNkGdnb7CJiYge57fiaUeHNVxoQLM58eas3h35Q1cnYWUrNUBUAvnARBz8YqWqYzQ9MizeHYms7",
  "key3": "4SGVkAywRqG6zVXu4Kwivxj9K2quCFdqnY3Ah7YXXQWCMJiKHZY4UHDcHJnefJxLiTPN3vvWrYPBUPd12QLftmxb",
  "key4": "4Ws5DkF7fGekRBSjJuSgaCP2MkjyRGbaxqC56gtR2hsShV4UrSHp1XGRUMwicFiXr3a6PeJqzuSyxxaP8hSJgVtE",
  "key5": "ANfEZtWhhgYpTP79kWMPozW7Rym6i5LFoQ4r63WDgL9LyMa7WuZSTKXdaEQVGEvfSzyTawwAQJnprR3GChKvWDc",
  "key6": "g77fDfFZFnQxo5eFNCJCEPuw2CxMzGsKFePc9qYSBU1LnLnNgdotm8ArimcXXRU7rffhXbarUdE6NzNQeb9B7uy",
  "key7": "4T2EShPzDCvPhT349BWfKmREqwvaYumeRBYQ4EaehV7g3w8tUui2Q52w4DxVkGEELL4qL3mGCHMH9P1XpUBCPbTq",
  "key8": "22XYpgrNHC6bjsPpJnoohLB8BFuVuXL7gVk3jLLqaur8u9xT9iBGaxgugu6KbYVfxzfZa9eNX9kWAmVqf7rW8Kk4",
  "key9": "2HcHtLTEdYTXpxTqBNTr4CzorDa6RQD7QVVmuavYT6NcUCvi22BfvnEEHUXU3yDtxfnSdWwMZbWFbbw816jCwGMf",
  "key10": "45j5TFN4bYFwUPeTEGK492AyyLDgNEexXiLeZLoMSHLAwNegrK9f9SFTkXGVf8zWX7mZu8xj1XQuVjuG8cfpysKQ",
  "key11": "2JUGaGuo47scT3ePfGDSoWA7DURjKZC7mMvCMdAtsKGupPTSBVPsXugHZNm7rvxE7LkBqRcC4PowVnyo6bCrG36J",
  "key12": "4gZs3dyqjf9yJWD9BWwiFp3Fhs3ESyK2a1pGV4GgEKM5DycmNMEPaCaozV5aHuP9ztgNGGFPYDbyy1J59owWCBK9",
  "key13": "5uiot4MpnPSnVcgMQ3VYwgGg27TrGpBFoGs15nSL6NHVyDKjkR3CV9j9fYxPUBPS5Mri47b9iGLLRL5JrGZP4XWc",
  "key14": "2LZAS24ts1ZyPwUagoHUWmeEevtv6MHD17vEWC5K47jGadVWoepMaxBhLeXmgv1TW7e4rt4xHgdxN9Kq4Nzjus18",
  "key15": "3Ddbhxe9SiEU1c7knSRAsnUqRAQNGZRsrQ2m7Y9AwNkYPjg3Cd3mKbEf6RV4YeSYoun7nDSawPYk1A4PdLmEJZTS",
  "key16": "5q4CxVJ6BMXa6ZyuCDBezndgaYnk9kCjGjRcQCkXYA5P9k9Lo9MkiEAk6zhcn5V72L4djtM4a4LQXKCwnPtE43N",
  "key17": "2Cdy76xjKF9VgddnWbuMWaqtKPt5rjgsR7kUn6MsHVjhDMUte3WvbaV7JmuncFkusrtg3LNkcgJ2umWoBoo445M4",
  "key18": "UHjwLnGGZzU6bdMNTqp54ETWs2dfTMcqF4P77fsboKPpDJ7wzMxHJRTnobTrXUi53KAedR5CF2u3thZxNtoKD3D",
  "key19": "21C4KMWjFF7bkUDY7ktohWVmd25wuRb8cXBqbKLwCEN8P7Z6Nwr5nT8n1LFLz6EJu9CAVcMjY9FSFy4MAVj1Wpcx",
  "key20": "3SRxttPnp9DSmAYVtCVj9XfwYHwCUX5nM19pZ25JEXK1CLWGg16bdVpNzB9Z2EuqHwkwNoMXj8sqmWi9gC73TbtD",
  "key21": "3s99xeT4yRF8fCnQVh7MShhPjs65UN6Xo9hwzfx72yYYkPwzv9ucKpCTpBzinDMNQXh6fW65Q6YZuGDqnFv3cHhn",
  "key22": "2kHq1gvDXXiNdHeBXfmiiqS5X7zNgvgmNsxxcNKns3zR7DAt6m1fna5LfNmk6wgYk52G1Km3VgjsujB9LT4pGR2Q",
  "key23": "5iCUcrHD9RRFHD3SR6c9Qpyq72oqtcKr7zmtevvGRr85G6v1HPboYcUEtBNLS7iccTTYCMUsPUvG1M6vEZytaW9b",
  "key24": "2zWruJDfqPd9ngHCAcTVUTFDtzYjkJ37SNG3tkc7NqNCtymdrc13N2MdR3XPhUEXnJC2iLsoNJfPybgY9hYy6gVA",
  "key25": "33v2gpmMZBMD8CjqaAafk8FTLLZo3NJjGunWL1oS3CmJREgy4Y7DmFvJuiW5urHjQSGeXzMyneA2ZZnoaXxuxFiy",
  "key26": "5VJhi2Y1ZJXdCo2iZkmphBv9EXiWQNHR7FSrMWstz1CXJtJ5Z4Y24tMfy2EN9HgMzygBmdWjUfkW98Q9DxhB86rC",
  "key27": "S6iGaf42kziArCe2zKpUWcBoTiLnqhpUJ2DXiU5TxfsPsxGEupuLXqTgPGphrv1eixtvwM4jNAyMqR4N5bBZx56",
  "key28": "2X4ZjPwtdniJyaBHKeHdjrKGAsi1qws71MsUPeXefCkQ8ZWAQhPjQu78mh8Tvmo9FtdC64LGADGBArF5G3UrD7hd",
  "key29": "2yYsDDeGTkzAGN3ieJ2Dd4m3TEwveSSzsG5UduX9Ye9u9TvXtcgxnQbKFMvQ7dZA8C5WTwvXkerakKfCPKQVGzEx",
  "key30": "4Cn3QK7qHRNJEC2jSGPLSFyW1VtsLGA4aq84vKTe1gqNQu3ofxs4WGXpEw2sTXLedT1aifn4p2UseP9ufpaUQmwT",
  "key31": "gXey5NfpUJ1BacnTSPjSkVTY7fskwHeZCaPZiaMfydvAq8KbPpMTS9x2pG7W2myYBucix3Y5GTwse5ZzAfz8B7M",
  "key32": "46DPEHzSfCk4iCxPsjucyG4Z1NJ2DhyCtMQikS3XMniyowWKxh6YTZtBez5csryoztwEEQ2kmZm57vgupbqUmxe9",
  "key33": "5AeaAEqwrtnhdWJHUz9r8Y1fcz5KCQUgFiDsQtAdwSd3yxPTsFZ8iZcfqXjf48vaQFRx1v7J5dtRQNrNcByrc7Hr",
  "key34": "9gjk5LLrXaA7UFPecerEPmJvQPKUcLZxADEscbJrkgyTJ2DbXzx63GGE5K8y1msFrijvGjm4ZpgomeqXBVfujzu",
  "key35": "2ammMPx7ZYbComQmuEiPtporQ9ScnSjkVAgCbuVdFc5mSofSVBfXXouNGeaEixpqCY1AtEvJ6Y1k1Fc3yssrpYPE",
  "key36": "3SpPvCHhBqfwi6X2mQ74hj7MLppbo9gYdeQ7qQxBLZ2vfFta31mgRmHig6J4czDRWqZcrWcp7egYnuhGgLjoBvTT",
  "key37": "2ZanRaHDdTrKA9vkM6LEzgjKPfGBCGGrkS29tnvrtzVsEgDC26q9NVu5G5trCYsTohyXhwv2ytej3YK1jUbuyEBw",
  "key38": "2J5ehvYTKUinx6VENSBUXsKijkSgFCtZjA3HKTF7TiPbsZ6S9T8ceRY2ddSQvDT7x61bJHUkLNCsbdvikdKqnsuY",
  "key39": "5jfz1Mff9PrQnrG366akQbLED95ACPyxrt2xuNTEfSw7FidNJthtAmjJiiW2t9mRhw948fQ67MD47YVtKRG5ozXv",
  "key40": "212FSHZ7fqmhHqQsX13pzF6eMzEJVkyvn4srhAu3maK2fDQtCNugpZbBsuRbkDTPjtoWdhY1AmKzXDU7dLk7ker5",
  "key41": "5xZMGTMULmq8oLUwQdt1QX73VQJYpUNg2o1VRB3DSZS68rb8aeko5ruS4TtR5kZJPDWwj6v7UgQqTntD4buo5R9Z",
  "key42": "2x9avPei9PcoxAVREu8dGcFEPsSVzHYdGphew5n3QrhbhQCu3Apwf5yD15eceoktHnCyhHozP84ZDa85JLKGNsPZ",
  "key43": "Sx7xA9JGheX7riHr23wQ6mefzTMWxB4RHyJZavWHZc62TNwo8x2UygRvLRomXYUH1CqSUJpafjV6QMSUzQw41on",
  "key44": "jtAtM9voJDhYy8dLrtjQBqnGxGwFTAy4RZmRnFHLABBFcstT8L7AaZWNCi3kDo6W1WD8zA8wu5Ym9ZFrA3zuC6c",
  "key45": "jxxNNqUZbZCy6DvMHuVbQXjXa4X9yDvSbG4TxdcsE1YRVKmHK4WN3Jy5e9nFVX5mUVtngG3AYayssknJxKSTA4p",
  "key46": "iJgw6bfL2vkVtyCsSVaFq46FYMo82pZnJPsoVozgTZvDK89AtEEfLjcg4Z81HisCXzYvXjDUeXfJw7ZtBt6gu1f",
  "key47": "4Hkwch1ix2YzyDUPCr2kMHgnYrR5WNaiMMKWj6J8M3qyss5MXcXvb96AHk9YR4ALRzq56HzPcNEkmXWyVVkHWku7",
  "key48": "2kC9FfK1HB4yKNHMN3tn8N9nQrgasUv1Qwe95zvEfga3AGRNx8pQoX2WzMhcvaFF2bmAWWvEBDwejMfhdjnjwGQs"
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
