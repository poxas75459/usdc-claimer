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
    "5gTfpdxBwzQnbqGSVEGc5r9bdRun7xDi5r4pJ51gKLUgAxKoeLi1vbGJK26fFYLmvV9272kPz2uFwrrRFuFQQp1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NbLbFjMCfycugyvCSwV67ThMDFYpTURc6b7gj8xuJk9qLEgbb8AsUGxTSPbURTjHee1oWtRkNGSRZcvrbBdu3bM",
  "key1": "yAK8FP1DjczqzHFscd6FEu6Rkv69wyddQKTK4bgin4SVnkE38NPUAmYwBzBY8PVTzJAUQ7Air85zHk5Wng8ps6j",
  "key2": "3Rdi5vwK3aVi21A7T9MSBGjnG5dVQKwdDQpkeyV42GjU289wWrybhtZRbhF6GSf62PKpdH99GdyFJrtfcWAMAtb",
  "key3": "3cxr6nk8TeSZuNvE4Hmj7e8v2HeePahxWLH7vYaZgS8zPMD6tTprEBHVGpWYTCqY5BKjezyrSgVjLKJP8Rxu9Tpo",
  "key4": "3rNo9MMdNEVaWv6JX38a1QvwCTPH4Pfe33agkarYLbdHhK29rKf3m2p9zLfYTpyfBkpS5ZWw1CvwcMyWnYobLmVH",
  "key5": "2DWX4LsihCvL3ck4zq3npUd4ePSKvYAxMws6Ccw5HKMUfFmUemtJkKCdevyikAtFBUsbBnvkY3ddrb2fbr16B9Mc",
  "key6": "2H4d6Ye2nUZm6p9Q6UpLaZSXMoFmA6y9FgoYNzbf8UxyVwxiWRa6RM8UCgsPanSav17CS4RGStCUUMDgT1CrCdRc",
  "key7": "NhmDj7gn4viB5oCY2LbaK8hJ6xY2bgnFDT7A6tuXm2gVbMAuKBY7GyszH4YctMLegMC1Xm2KvB2fuyZh5nxwcxN",
  "key8": "5M4YGFujK5VtxUCLeNuGkja54xZ5gVXgXzRJgdyf1aWevKVCrueMW7KUELbGQVMTGuxwqeztn1MNNhXs59ALKYr8",
  "key9": "5H271i1uKZCHXr4yvnvrbUvF8Z3WtasPbYUfhzxnJQsFgGML6L6VbTPsY9XRMyiCU5KNnZiNh5WKwXx6Gh5CUaSD",
  "key10": "4R8fovPzCMmkm4x1kgtFXQRe11umxEx2bJt158KasqC72emxc7GHPLDkcbJjW6PXwnm1qR4awZgPrZzCkfLhpU49",
  "key11": "3ppgVzCmArGt3w5xo499kQdAzBnSS5QGnNJFSDzD4AeEYLd6p54k9DyzDVogGcqdWJ2MqKXw2DTMjh68Ht2Rrifs",
  "key12": "2xBF2MuRcLYvPewYyLWSfPZ3AtDrCg93R18a1acvEFuKiQFHNzJPea9vBmvwxKNcxUDQJ2yx4dwNG3qFZ2qBjx8f",
  "key13": "3KavLYaaJQx3LTmBBqk3TvTi2gJP4PhtYpZeQ4nUoZTJfzZX8NFer6U87gFSwxy46UuBFX6MBEFuyUCr21njo9y8",
  "key14": "ci1CZpoPKosYA2N116t7rmpv5zZacPAu5bThY51ZNmRf5Ld351hX7AqsroayiKkuoAw3ChZU9ATFXrvCjxLv5HZ",
  "key15": "49a5ifBBPTko9eRZGRSzZG7VRCLRKEnbBaK8w73jBetJv8jK6mHegM2qqfR99UJoCxPgTdnwQr3jCK1jjwvkChGQ",
  "key16": "2gdhevkjJ4mSG7MTZBhYueh7YjFYBJyUefmUvZRZ35dfgJaDCGZpGTX9711bJU8yDgKJ96Zi5ogUYSeYENmmfyhW",
  "key17": "2UdSohVEjfwbsEcQfLXYb2ZARVQB6Sy8F9upmktRqfFGnZyrQPVKURaexGexLCDU9M15tXEKz5DN95y82A28vjyt",
  "key18": "49mWTSgfyfLNErwo4xip2cksfLY5osH71xoJFBbb1AQVV36u8JYE4FzcSgUaGuS2odUqU1Z6TWc6r91KibZVabdC",
  "key19": "3hrRiqLKoQUrFZasUoojCqHL4fD8GoNToZnC4GbNtDVJw1fXumngoFm7WFpT6ukTHBPreNz7ceP5Qi3qkf7GGXFY",
  "key20": "38SLWEL8xF6kLjiwQuPLoHzjfC3hpDwoc4GGSgrnZD3Mnei3r7FU1qLvqojWV9U7hC93HhGwd7m5iPhVSnPKB8kL",
  "key21": "32NPh11MpQUPnHbg5hjihU82ht62U5rsmc8GGcBEQM6uaELnF85mfnG4M3VMoQ4699x3SuGzzExfzo99KpUPKcUv",
  "key22": "Re6o3z2Aeytv2Wgbx4LT7gP4pjWoJTwkCgpeka3ax7bDBYeFxqT7GZJyPezJqyeon13P6qZ26aUZc7FddcCbGp2",
  "key23": "5FYt7np7bRxUfvdsTip1GsPfBjH7RFH8CRsDTsByCikDZgkw73BpPUTVpTu5kKosGs6aTVpAJQFcRoUTgVa2c8nX",
  "key24": "3H7fQ6ndiBFmk45tdHhVbdLAESrZqst4RtTT7Ta63g6AFG4e8eD27tvtGAi5CyuBAzcBL2JHK51H8MGhxJbTaj8P",
  "key25": "5ZiRmxLXK74aQLnhYVQb16FrHG99XbsdoXFYey7xhhGwoMAHttYGYhL3rppq7oVnReMM16XYipzLEeCKTWMqvT3n",
  "key26": "5cGj68y1CpxeCiTqu6adzYGr77fXutiVqQxMattJePfWZ4FN1Gwu9AomMUKa6ZN6bKJYcpAHZ8bBZLKr5eUuMPDk",
  "key27": "2Xp6RvoJEx4zYV7zMnCWPRyVp97HfBuCmXBSGJzQmimBAtHhorGig1Hgg1tAXLfjv2NPp9Pm2XrG4MY6NdyTMT3X",
  "key28": "jVvtYJHJ4AcnKxN27uzyQ1PKxT9WJtdtc3KUvh3b3dbEdgMyjE6CWBtqQxApZn353AsuEaHQhynaEbYqzYq8qRF",
  "key29": "4NYRuFdUxvqKhuJJCxLhZLrLPbgu9LiUiXyeKZSfqj5H7j5jtY7Ybhzfz5MJgHtNLgfXChKYxrUm6Ag443FXvvuy",
  "key30": "MVmiZnhKTryyjmGAbEpqcY79mmZAHrDwR9QN31jF45MFnhtBUsctfyV8ebE2RE99Fum6kbY9ye25nrQvbuyJnL3",
  "key31": "45cYKhyyk1ssH5EbuSgvXAiPRwajQ4UDJinmj65yd4bMNkuCU8PpVMKjKVHwhMpSSQonWozzZVtwAnhDWkakveJw",
  "key32": "hegLmXyDLKtG8k9cArnzb4f6pPv3wxZmHAzNJEfpZpiQRKNAin87YWxpYqUtCkuU1Pe1Hz6MAGEc5Je8P4V8nPX",
  "key33": "2HMvq98jdw4zTaJRybpCNbFrN65JVzFf1XYacDJXDp7o83Q9TP7vpP3N9n1JKUCRqBxxPXKiHtufAUywB2ZQVCqh",
  "key34": "4LYaMFpzsyRPSbhTu1pAqXC2GRFPCVmdhQez5iYjXazcvEyGN6BdJ8dwUcdCLRa5Zaq6JoXrpYMrG41AwSHAccL",
  "key35": "3ZGwFWaqSfTjvHnF7i8CM4J8UrzosidNqi2qYSYEkAqGYvyWyAhVGSpBz7Pk1WzcAdGKvJzfNbNSv3Pn6yRgJYci",
  "key36": "4WmHjHfibzw1vLoPRL1X5krp5GjTfjso3VG3DLiMGNrtnUMFTDwfUeQwTX3pNhMJ1qsj3YoDZsu2w3yzhRYRbS82",
  "key37": "3NFHFY85fzTW56qh6potGKcyuEYAWFUWYCiMHKurhPUMVxhJ8aPe2YPaAEpeTu1mjfy13Gz3uMVZ8jSPuKb8oPAD",
  "key38": "4BQKgNq8cxhbzJqsRT1q1TFwM8m7LjUQSrVj6nZLGHNaSUr8LnyRX75hBmgDQvo3FffSEmBHxzswdzS43qPKCizk",
  "key39": "4B6kSs87AWvXWXguwbJsGyJisdkWp8V7P7ZXWkg8ZBGoUEs6uBXzszdGw6kHM46JU1idRrmAaypgnRWfc2C6yXPE",
  "key40": "a2utPQQ68NpZHLzzgJCr5qkv5FUNnyrMU6r1oYiZtLJ1ufjaMHPSyUttDua1YJ4pEdDPmNvicEAA1pQLzZQ2L3t",
  "key41": "47ZNA4wqeNgqCCx9X2xh5GxFRMAAgrG1jTTsFxUWQcasBP7m1KFiJBmdbmAq4aqvTnBAg6y69YKnoJHGXPnPJ1Wu",
  "key42": "4sGDzuRvhU8UcLpdxfrohdc89F4tPktfbjwQKsbefybaiLRHUqw88pUMurLMPC9wC7koApEi1SUdEAC7SJQ8D92c",
  "key43": "2CkXrTt5UHNfhEfJHTHhVMSAKjdJJJU8dqbkuVWxkziUHoZuCiKQNrjRpjRvKy3ZKoVXKBsYy4uG1EpscSssc5Yk"
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
