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
    "xuCobxeba6Ysv5VxgqyMCUMD49GvLQVXU4f4mx4JvhFZzE9bXpJnocvF2knp2akkPAKjYDQLz5Xy1aCsHM4FQUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZjSdPTYqSLvZvwDoXG5dx6FXFaeBJretshrsYDH77LWBhqeejjViMq9yLabkf4vh6pRhZ6MPKvCsStyXGmarVXf",
  "key1": "3YoX7SXPijFMMNTqGcNCstSpt4b9KS2vEoh8bLHj1pxPPZ2HuohqpFXYP2TacAREYWSLnj18vSJt4MeyrhRgMqyq",
  "key2": "7kDDRVVZ7LzL7hfGmZPqTnD1tqCCbodwpamWKibCrp5BakxqszrutXmFQ5p7TM4h5SUXW32MxrqRWxuxBtfWYZM",
  "key3": "3TtQ2zRgbhV1jqhrPdAY485J8Gw5MYRZUpoScEiYN82ML66AypXdKQpYa5efrbZRtTJgYAfoQfkeNmdmbkoUEaCi",
  "key4": "2o7ApXRB7xzG7S1Gf1b6GnkXmGDoKjXGQS8imVRkw2495tV3GbHi4EoGoBkHEHSSoMwtYyzUQGtpfK83sWx3SVjT",
  "key5": "5zctRdwJcQh4kvtoAtfT2whaYYbXriahaqYC3efFT9q4z6Qtf9wQy22AxvdGq2agBiQCGUhwXkJPWnNbEdJqJLgR",
  "key6": "3EjRGrTwYnUK9f64rCKg6jnf1VKw2Sht5YsGzqF9B1kVt8ACPcV3uynmc2KMpZ8ijV998issMtCE7EZS5E8gm9KT",
  "key7": "2LzRjogCntSDTaDD2QGUkQ6xQvRz2kxNAGiP5LqPSNzFaLEu6DcACo3KoKVWrmTLfhMEeDe289jGE1FDuFuuUgu",
  "key8": "oL32kcJDzkNTc9XqwFaNHF18cMCFnXTFfPSYiFmAHf73E6zGD7YjEifVVbpRQvvUcUGNm544SLd1KFGvx7VXmMS",
  "key9": "66t1DsFmiWdRqDiAobp8AMksLcxSz35ET6t3xAGE8dCGqaSJsRQxC6jtWA1XcoNLKgEkc9tc3713a41hmH78V7qd",
  "key10": "4PQMhequxa5dAArrfpC4jXvhfVgoU78ZgsbTcKydqirmBfvEHUSSQbBh6LF8oZY5TGqX42kc6Vv7BgYesD7mp7c4",
  "key11": "4mith2kqe7TaiNhbdPW6hajkuoK1YFNppGjYE6aToxYiEsjs7PJPUUfQvfUWiathpwJjuLm2NMhv6KFNvW6upU4Q",
  "key12": "3oQKXMa9yVJmCMdzbhFGZDLPL7zr4FidprQZJntqvmY48sfwiyVCQGuggLW2Yxs2u7kgVTugZE4nTNhchtZvLW4f",
  "key13": "WEzgVr7aSkrj9FtVHtvZFhUpjxxq9KqV7ubzWUBA6mraV81tNt7VnrrthAPU3Wt3iSx5HgvVtH5fy8mga4L9qr7",
  "key14": "5mPRZbzejzbsJ94UExXGhtUncbKkAAXbP81cBrqvJx7fBqNmuZQiXBCRdQqaJpUc5Q6qyGgcY59TpoDTqmLdg6ds",
  "key15": "3QYKAAsP1hHBrzpjz5ehXjFhbSU3vL5XWFSuQDpNRKKnPZKpoZrmeuYiWYyUgL65TrGoSnCRfdm2HNTYE7K6ScHM",
  "key16": "2y2q5ujfQoRronGF17y4wCxJTUjKyRXhVjFM3HckKVL766zvNkrFrG4ZHdPtT1QLSvUgv6n2ycRzC9opTjcX3Vuo",
  "key17": "3umDWJnojgDNyFnrB4xiFo5FFt5omHduZCWioKisW84JcsanuhMk6q4cdJRoendgazaBHmxbPJSqDbD9evzDHyPV",
  "key18": "4simLgdJosWZFPqib4fU5DQryRM3iY72EYtADCahvGGBPK4RPkvLaYtyGMBfFJDwjpkvMJbBVHstJXBLakywGXNi",
  "key19": "HdX2NKMtCx3QwU9tGnLZUA6ExbEiYFHfGAYSpXVbKKpS2WrkUwsdPTke71t89UnwHdoE5EkZBG9ReviiifYce4q",
  "key20": "2q8SQF4JCeuFyKADrn1CMEzAVtjxPqiNuKAz3o13o4tRjFNNU4YJKvXowM5TLVm2r9LPVRGKTokUqhphVLJCde6Z",
  "key21": "3MZ9hfqw8Xhm7k91KSKu4qTCiJJjaoW7NvyTuksjT7vcKsaWdxeU28KqdMD9mDDL5PRFXT3s4PHmuzYnHaLmcL78",
  "key22": "5Jk4nNgcfAyVHd2hXNcpq3iYKYE5NXWFGrn6vHEgDsjXU6VRprXw5u3dAFhPaqvzRWRpCRuDEiW1ftb2RuJVyiMv",
  "key23": "5fxJm7MtwV3nLYmy1fpmNHe9f63pwxTNrRpivMQmw59KjtpByiygE6ZUvQtZLmihSLZCca6jRaLZqrn5GJRPH765",
  "key24": "3RhCWvUiFNGMC2JnRLxZJhGmN3ij9WcLwed7ZtGUBr4h68vAxr8eiEZRA9uDpQSTibAzRT9ecvdrwC9kS2infxgp",
  "key25": "3Eajzhx6Mn7wzqZ5Jhkq7XQNjeccpztmkVdwfurDqEQRngeGQkA4K6SyRT4MBzfd3j6Y4VS6ZnvL5FpEroNbC3Y5",
  "key26": "VYPUS4B9eG3USg6WtvR7F72hFyxyXmK2PcDXvpfPaMbFMqBfbVJF7RVpWM6mHE1n5qDAC3foeZgMwHKFzXgX5RL",
  "key27": "gT5jR2nQyaY7PUJUyGN3MFbh3Yks4dCyLB3UUDwaXWmBjVAgEzMnRcbrBehS3PpJtSN73HAcQrC8F32hTNyR72L",
  "key28": "3yzXDBCzEMybceHKsfEn3ikz1GLiKTVVCiEeaVZcMxJNGmDb9YyN8i2VkwWx169PXEX6zDJyqP7xRLv2bgmiDYk1",
  "key29": "3ZMYHA3jFppwXiUGraiKzzb87k8yMx3pCK3c1DaAetWafyW5xGqMc3yFr4SZihkhatx4Qf5KgL5uHAkXzq5VRjpj",
  "key30": "53bXVkLbpbacqFRTAp8HMMFDd9CHaaXDBiXWab4tfqSyovkNVu3AU7aQ6PVcBJkSMva3TWWJ2s7BADgM6y85rDo1",
  "key31": "XW37BWUfgGwSEWcGQC4FBVj6MWwMTgVSGfG5c3bXcq7ZmFzHWjeBsuUNAyNtXr5PYMaK77XEKWggkEgVPp4Wwip",
  "key32": "3KvQqegiQGT7kEgRYgpD99d757yF7nXaftMyyFc3jVED8ymPXiRZ2pqyAg79RVuRPfbpv6bepC2ZXuvCuejYyG6A",
  "key33": "5p2aXXs87ApYZfj8wu9RPgcDM6zQGHgn2S94xMt8gwKGFz3urgLKth239FhRh3UveSrMHe5W4dJ8hzF1MEd6yuzX",
  "key34": "AtrSaCzqRPm8RXiAX6V9tuBXsAqyRjy6BaDdGhusQ6Z4KixtCgRrvW9iu2DGipGY7v8zN4fnSGdbWPK5bsKCjSP",
  "key35": "3xePXiERn4dBBsJK32miB1G1SKw8jUjjHmonswnbb1AcgEuw875ubXUcnRhwMiroGEfRxnmW8XJ1SXZxD4T87aju",
  "key36": "2JFAMqFYHXxwTk9Hz1MAVRrNyiYR1LTpryy5Ezpbn88P5DQpaVNnhWzbBeS6EZYB5YhBEjnp6Dq8mjmVQ47oLsXK",
  "key37": "51BDAfvgRiiscbuqntaN2rKXVzdZgP4cufgzJmqLmaKKhd4fBqhnYPcgakDYzrchqhTJMjhsQ5XKx7F7iDdcjhzE",
  "key38": "5VD21dhUW2vtmxPttqmuJ1avXobqqgvrddCkpV8Wj3o7Ya2uzhiRNpSh9P1FYLWKPyPMrbvPGRxRVhG1PkcWMLBc"
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
