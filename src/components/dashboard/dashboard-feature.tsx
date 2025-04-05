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
    "HsH1CryCsSC6KVXgUhsR7hyxpzwLnfQeuj8r8trzyNLLRLwuUKrTyRFd8SwXjMJo1FvorUGKASFCioKbk6QAf2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tcCiY1kTz8ugCSjSbUrGYbFetSwiABosVePzK37LQZGMRk4pKFKnJdcFwbGrnAQbr16gdW2rape587jvmwR2NZK",
  "key1": "29zFU8KFuaEhVTiaauLSE3x5RKnEgu7Lq8kXUKW1FgLzwGxQCzteoHdMsMyh2LkyuudNHsjT8LdmyAZFGiM8rKwM",
  "key2": "2icP7kjBNPGFvDZF1a373JsYJfZBzGvuBZyA3gRd3KgxPcQh6ZNE3UUA5zTdYXe21v8iABA1EkqwrUxJZnv6BbZS",
  "key3": "678MfUpsPQwGeZ5kDbFJoqBYKCeHPALAFu9yKnDuh3F7Dye1bivWR5rfkCZyJqVjbgfi27KNfgT8fKgaXPanzsSP",
  "key4": "rJM9TLstBgoAHroQGe4hWagaAc6y23iXtWg2vUrSsYFWgwkbeewuVDAvNH6Rx1MQ9j4fniPibHsvs6gffT4gqBL",
  "key5": "4bAaSSHHo64o8s93KDWs137gCeDs59zeddRve6292auuL86DL6yk51seFyBDYcYaYpBN9qJWSzm1ALuq8Ea94xLf",
  "key6": "4tptK3qV39ypuXnd9YTtwpHJsaxzWMJ2JykWFw1fii2tPU9TFsqEKehseTAbKHQ2VYduikYn54i2dEKmEgmKKUUv",
  "key7": "rHQZKvpufPttKt6xZFnWzfJELAh6TQdPZjtE9hWeRGjQPqKUhwwfpF4UdEqBEdC5PZyjJeSA6cq3YQmdwbcSQmN",
  "key8": "4KWbN6QEP7fP8pnWhFJr2Kxruryx1GkHp4jmRSzJeKugNAhztpDXwteuP6qt3H5qM27Q1Q5kfRHRypMpjReALL7E",
  "key9": "26wsDQDLhn4H4fZVsYw3SqBJbNq2iKm9hfFnrPzWwFNaSu1B48BzMMCeMBf5KkGmy3QgwThH4AdbTq8sSVTMjN8A",
  "key10": "5R8vacv6BbCTxrH65pi64KMjJepN4kNrWjTHFeAWVp4ieYA2KcbuD2KQTF1wYnPSoH2PnZYXU7HFNizARxEN5RjK",
  "key11": "331D2V9dANAjaDSxZrNqHFjeoZ9Rjw9BcPQyUvT9S9R3Jt2RGzKj6ic2Nsv7aD88ZQZPhAWEF7QNamZmMNwmL9Sn",
  "key12": "3gskwAAD95CUvSs7jUQPcDzi1eufTdtkZ1erhHKBK5DdFiFmsSFtE2DK8GcYVCYD2TAAF4zqVmRehPTrStMuN1k7",
  "key13": "58SPMunZfzzGhFXHcyMAP1pnH9A8J4BHe59juXYzGGfhJ9jGn4Xw7mFd96cpMyBfhhkURHeKtwKBqC2CHfysXNtb",
  "key14": "67ASbN837BAKjxgmwFQAzgBNDbXrZLegUVY2Vg5yd9Rtk12op6YG6LCzArrReDSwtFr2EYBPeiKCg3AsEwc7cc3N",
  "key15": "4wN6N6u9D7NZzyAAXjm8GhS2sHveVU4Zp1cocnpuQmrpAwnTbPanb83dbehB6XjZNH8rW3oEAKRfEh7tz3furN3N",
  "key16": "3wLegZbpmyaivtybd28HU5tzrp7vExL1ZDXBeNeL46RrGbBe9oaEe88wq3tQXgtEcrGwXyyqpJPgc9xpKjsNXEdu",
  "key17": "48jfpm87gPHEEBc7UbHAQgWjRN9BRLs8sP2crnynRGVMsiuNXGKxqgApde2yC9D4PCppdXez9MvhSVvFmpyvrcrT",
  "key18": "4Tf1KDENd1KEo4egq1aLP7465tcrKU5KvkmjAvxqUCYtdPBbNYJ6ZrVpKeeAFkYnm6yDRoXUZQ6Z7dvFqLRjHuf2",
  "key19": "DnjpQUELAfgLsSdKutLwhwekgT94dnWi8zgEUpjstQo8rxZqFoAw9EnM8NaxHp85no5pqPEVeBAxjXneyoweYxj",
  "key20": "5zuw93k4bPYn4ogvpbzP3insvorL9YXKNiYLyvLoM75UFoVGxL4F2EdQQpnewyPfhxQ8isusEiW7g3NyoUisB1GE",
  "key21": "2dxSdgucAGTiKkXF77zSTZwz6uKBRbd1AJgpoDkL14H1kpGMWqdPRJGcfk22rgojeELo37dW85prV5KDWiTgKYJ4",
  "key22": "66XKZDfj8eSPJCEoR92XPWCiocWW3A4o24w5Himj5ktoGZfYd81hwAqqRPTJQwGc54m3tRgVXF5CpPiNc25wJ7tY",
  "key23": "4otsYAof8VkxVGLX6vDiyv38LoQT6a9Liwu4JbB1tah25B73A18TfYbpDuQVF6xyDu3pW2hmLrw7Ph5b6Au6QEXQ",
  "key24": "2cVLG4zJERkbqzkTyhEc5TB7f9EEdnfCdHapstB3TLV5VWHXAudptBsXM5PiXnxFkwq2ABqZgMg6k82Gn4A4cW8z",
  "key25": "3kfGT8RMFEY5nxxefHm378d2kKrgBSTmmQNAiqgg18CcXssBSGZbYuQAiE32nvxATaZjW41BnM4iGqk65w3pQoo7",
  "key26": "22JdwZCQfAkfNxrYjUq1W21hTdqTiknyLwzW8eYEQjHQCkKAH7yDsMTKYZwkAL52y2iaUcVm8dGpe1scBhtGiTRq",
  "key27": "3hhCRbYwqknSnUij27zib8By6K3rSxefpvi7uoh5fyZ5XuWJwt6MrzUKNrZBkTHdHuCQYdHab1WEZEHE5gLmTo9F",
  "key28": "57ATbKvRRf3o8NumTveFa2pJ2fB2VqFaYo5mqBk4crBmMd96pKr4GZBiTUTfHmm5W1AhRxDxJtx9JsVhA9cDRYwJ",
  "key29": "2hkfk8dbXNjei7PQiGj8BkZVNHjdFGBz8V2yRU4jha1Mv4rP33mG7vzDGnzx2eA43eU8982QJnbqeG9fJoihRfkU",
  "key30": "aG44d4hg2anp4JDDRiXM6xnKVtfLjjLoaiCzNz3e2bF3cSMUVdFm5zu5VqN9pdKqQZk1L7Gns41PwwYzryGxxm7",
  "key31": "5PfdA6yMxM7AuaP2ez6LN6Uk2keWeU6tg2egRepSh3FSEVvfPdhJRMv8xC3mLtt8M9XvaSkJmt5hSQnDtyNcDjDb",
  "key32": "5SSCpr8Q8uJZUPmGcqn8DGotDVeVjmZ4nifFK3ws2ktcGKRX6CdA8osrKTbQqQofp9ow9HMpQ7GhMr5zBTr1iHbT",
  "key33": "4sk5HgSY8yCZqYRQFYme4ouwH8UhaV1d3oaX63j68WZQxBgj2ybJYRK5iBC5txgckkZjhUsuUTAbtuzVMBgvQD9k",
  "key34": "4rGLjscjFdSEGGCAYooNAncq4TRhhc8rpqgZFhcYqWdD2NQMfwadgM5HYeRgLSEWpa4Wri2w5i51ZGTkXqL3QtHb",
  "key35": "3bKhXBoWY3eyJZL61KZDXBEGe42WEYGKywF9Wsk3cbvm1unQasK96Cksu8g5sMdZCA4E3G1zRRHK1XEdAaP4L2fG",
  "key36": "3BXeiy4m3p8YCZHWiWZv3ESxt1iCGwLqURX2xV1Y1t1urw2UAobDX8xGQNvFq4qwDzRzSLxjMBTmWvqCyXhdf4Me",
  "key37": "2bwANaU9rWueuTG8o5PdUu6j5b8ZjGSwjpt2JEHdrddbK9eEZeRLeZaHgfz1sUNbLX5CaXCZwMQ8Rii6nLDgP4iU",
  "key38": "32tF1ziNvE7Fcv1FLn2qWobbsLq3HZx9ENti2uJmoCmvAqtgQqckhNDria72VLoPkW9raUD8HU47B8gpnwQfGP4R",
  "key39": "2JsfdRrgVyN3LeYm3GU1YDtaVCpgVXpQBqYYKNyPm8qQ6Gv98Y5D2swm64UYKmW3i1xg5kvuTUH8q3e5s96m2maU"
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
