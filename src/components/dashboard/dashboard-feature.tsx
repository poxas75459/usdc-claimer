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
    "36vHBGQpqu21C5gpWav5XXATR7z61f9ZrLAPKuVzAY7cYARmB3dfD5myVog1zDZmADmABA87veM4uzdas2hzgbEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "448nsm1RfnSkJvyXMfwVUTJGHrarQXxuQXZLrYvmJBusxnXH2m5J791BprWDdSNKFsdec1b48yfJHajg8FcVch6v",
  "key1": "4hLcUtCqtFmJEYNWfdg7b5U9mApC2h93yhpPRXTsva9N5RxUikX9NQn16RWGtbb47fEN4x4pTmdUT1j9hMjRgrYD",
  "key2": "1stUDMgY8LAa48ec1p9dAJiGkAPEMdX9XiTeTz9yvKQ45DMPPV3VjLfN9XgggvYPuhPhUw7eu7mH3b2ej7cgz5F",
  "key3": "66xkxskeBEf9sXDyMaQpVYr6LCgPdDGgcFJJcms33iMXetTF6fRdritb3JFyNhQSxW7psyiXqZdSerG14ShERiQi",
  "key4": "22pSahcKe9tkKS5ApGMqZNxPdT4ncSpFHuDWaSQzJLqQHjony6iRTHtUsTYHpHMRJ5xLBJJJQBzNcm3BZPothizc",
  "key5": "3jBvbkeY13po1ZSA1dJoFvKwiXJj2zvKvcBG6emQ3DiR37jpCjsXHGmoKGe1z5kM7BPjciriLkFbEbeQcemL3myD",
  "key6": "3r6BKpKu19sB7nHi7RvX9UwtboVcDQ2SnG3RYgtqRDd2h2vqqmNJM1Avt57hY1vC9TiBEPG1CGp2L3hX9Xaa9kPf",
  "key7": "3nAn9ox44Bmf5E76QJNtdpfevGUgn2BjU2xF5EsJSdLZCrQvD1msBY1qqY6vSjqjerjsBV1WVKQxv32tBX3b6aTi",
  "key8": "3qctQbdWvBsTHeUg6mBUwMg2ZfQhqpWzNsWMHN63Ezi3vBKjE9SPqnUX1L9bbDWdyMBtmvuHfcmginnxRw2H6Eqw",
  "key9": "5FxybuhJaiGwFu6sRaof1RhKkuWQdHxWiHsJxqjuJhn5yNZ4XxGK6PNoJjTrijPU2Emvvyx33dsFyvrUndPh4dUB",
  "key10": "29BA2c4UBqL4ugP4NfHbrEAWuAAbapKHNY4zYiWyX1wx5mzdXjYzA6fVF2j6wnYdn1VpQzieGa7DPdw7Kx4dVfpQ",
  "key11": "42YLJe7wjCc9G9LA5GSLQqusMXqSneuraveKYmWNku8G5JNySESJ83VRbQDnXKCZKdy13zFasvKNJsDw2psDiTtn",
  "key12": "5u4GyUcRrHfjRMmccp2iK1vc1dY7aBh7iePCM1AJDmXjUNgAzeDq8g1FJ9BEzu8STavxJJ1pYC6DjBp7YJN5HPeh",
  "key13": "51Spqee8mDFJ9KBRgXKSdkc62pP3THJnAfZErejjVqsoeorauoxWAmxYeXZvUPBiKa3GTfvmBH6L39Tbs2Gbm198",
  "key14": "4gtcdvPSBaLW3ozneC6Ntp2zdbUQeia1Fv1eaFvBnNECoc8jUgExUBZTXAWzK4M9QYUcTxBNCykW8Yqk6Gpssp91",
  "key15": "rcFFnFZSXt6Jpwm4oLRt35WGyftFAxGginexkkgeJqYfBdf3rZgh8jmttbbThA7sut4vx8ffxiinZTbdoNySSMr",
  "key16": "3jzVzJCdTpUGUQGmSqFiqefxbeQiJftHFurvN3DqGuF9VNj7nVXcUruSyfxFfYGdCo7ADVgp4ET3prjEVg74eMnT",
  "key17": "2PKTDWGbhNFkbSbVCLTgdAPXJrGwividBE4oaLd1hVZHRHzg6d5aEJz4fA79Exw6ZChvPHUdYzjYzR5q7r832BTt",
  "key18": "yUYqZMAkHN2Z2f3WpyPXG4YPtnA9q7TYZiAGT3bjpq9Bf7FSenJbdtCeqwyZVkYx57MF1fMf4f7DqhAvQKGQcfX",
  "key19": "3bU55xU3Zw9c4cPwrLuFFMd2JUqzu3BF9q1JNyKaNFpMSnDgkmZFqzg3rTCax4YUL832wQN7mo5vni8LU6cxA1KC",
  "key20": "3w7ABtFFqg9SfvkLDgjnPo8NR6adg7g4eRhbzXoZFyg44PXrQS3peqcpuf6SwwRTy24Je46qmaeqAHdeqbPZhmtA",
  "key21": "ygmRHQkBRwQ5Q8Uq67h68tJUsG5tvTVuaZLfyYwtDH8gbeMEqJJYXz62vfknmB7Vs1uVzWfH6792SVzFvH9khn6",
  "key22": "2UAUShtJLg2zoWDC1tTcPt3NkrRYeXJAuWnPkUK6e1UrCWodxQuuk1iTqXFB5t2JXjdafJnVR8qVHnjzrNiEuiWw",
  "key23": "58BZmanavYEhtEp3sPR4fM8tTqNiJrA1mtc9qPLSPpEM9ufuWoYAwTZSaWb6nsgXTWPCDXckowPLwkXU2fZZm8Sj",
  "key24": "8KKAaH9XaJwi6HnEmtEzbD9pFhNnnCJUUsUX8BLGfdizL1zfMt3DzFNExT3Ph6ZNh3a4ihXYMLA6V1W6rwmAmym",
  "key25": "3DHpQ269sfyXX8P7JmUTUjaAaeDS9ZzoWu8rSvU6bUWjsBqYywKYpCgSWXuRtFUaVXKmXwaKgTAXQ1pEKwUhyWR1",
  "key26": "31PgsmqAtKBf1xVnhSTDhxkTFkpsvbPC3W7wLNhpxfYDcm9uFnMz2He8xGoBkWeQyv5n6LXwGSspAAK4dYdLD6qu",
  "key27": "FXPdtuyLQ6o8WyrYrvyfFkr1RdsKQNb5njy4ASeNFabWpLns1hVaSE54CGfAxx83AxBqkon873hGx6CmfWR8jn6",
  "key28": "4KbZ5amWDy4jAFuzvz1ASStzWMSRTa993YCYJJbXYUrts6vrygqCFL6XBK4KGKnfmbUpLHvJR5e5u9JzknpRyC8R",
  "key29": "5NSFUwM8fUMVc1QiCDw9sDfnCRepTa1wm1bgtDbjmA4QXnKSbMSApndm1Lzf1A2pD12573mFkfzbbkzWqU74PGKJ",
  "key30": "5VyJUYwy9ib785L46oWbo7QuBxDT47QJSBgw5a6dbQV35nJDMP4pJEsHLL68z3oJh2c4yNCu24VMmWVBV1goeA6D",
  "key31": "52PesWASG8uCMX7o8YrzoZTxo4YqwAs7nTjzevJAJuxwPGiq7TPeyZof3pe39CvrzwA3y7VLSJxQxFEj7TZFRC3q",
  "key32": "3ePW3XyojiDi9V9kvYvNPUNeaP9c2aXwthGoEHCnuUeXcMKRhXiydP1xM76E5pRLwBezZNAsxVzHiC2tUus2jge8",
  "key33": "22GPEdBqeYsZZyNuKvhwY4M5ycyBKYLvVDri1Mp84t3pdmfNfh8gZpkyAq4r1KPGnZSjg1EVkofLAtRgAB9EnsgU",
  "key34": "x3MmniFhWfXKNYhuZDqTVKWhjqVS6S3qPzLcD81GuSvM4hnWgZHFCVvwerRy87ZBsMWKWuTZeMn7ihSWYFu69Zd",
  "key35": "2Z8eSEnVhLmn8XULorafVyuPkeCFZuwALF2ksQbtRsztn31ZrNbR4YEQHQLGpQTkr2P8F8CeTdQ6PbUBDcJ2zJ2p",
  "key36": "5srRhRaM7RTu2yBdB8rdmejKNNZ5XDB3dDUQP9p3dYBpwETdvois66cTYdUorJrAvEpLwDk467R1mK3wBFnMBZRh",
  "key37": "2SBVUvsYCWDaxxJ3svb2kCcSijf4jcjsdeq9Qh2sE7cBqksJNDzHuK8mJ2DR7pov71JFZ6rci9V9Z8yKRosckMdr",
  "key38": "3cMRVkYR3HHaVnUq1pPo8GpPXGiVSzeqEmTc41QYp9asLL6A6Wg7SbvR3x3qCjwjipxFuATi6hX5Waz9gKJfe19A",
  "key39": "3FvbLcBHgX2Yn6Zfb7q2q4CULM9FrQ3iM81sEbXHBQKTCg2vF1jfkbKfjZ5w4uTA7UUNMgwAaykqiuNymY93XfT3",
  "key40": "F62MWVmBVZ1F6ytPFBabiXDqqFd55twMUAUm7QQpTmz8mpkh2pPBgXAUaMUp3LC2bRHWptQkLYJWjYRbkaaCTFZ",
  "key41": "3G5mpSALnajdigF9vjy11QVYyh6vfLdmoepGpMYuSR9aRbaXPw1rEz148vAXtthCsrUeTmtJdwnA3fnzoamrd1Rd",
  "key42": "4oPffFw7cKThWWeExydYvmu5UyZKGUThaxznRqVZUiuRR58sWHpvfdG6hQrdintTU3AtLeyk2dmQcR64DhoMwhgE",
  "key43": "L4Tma6DDDbv79BX8viNFp9rhyKV54U8dBCN4df9TmUXuvAS1VsgL9MvvNKyALaWF7XgmTCpbcx4CitmoFLWh5wb",
  "key44": "Nw3ZRwyF2U9UNqawKtasJepMMFghjtywiGU4rTpQuVyFWqMZDtJi5x4FbD6AA7vd12LpzsZrjUqdNLipsqfxm1S",
  "key45": "4sVX5Rn7EYXdMsy8SNF4nnEcDiSpC9LS8sLyNW1s7HofPD7zx6GrTNjJaRBiVZPZtsBWmLpRCxEi1KDGSnX5Kawt",
  "key46": "4XLrq4XM5Md61jF6piiXmKkmN5r65Gd2i3ZX77GuQD6zTqmY4D7MkGZYQememrtmS6MksU8Pi5k6RVbVKFeQegVb",
  "key47": "hXC4ew5CuYttR8KjPeiAAuKkcTd5XFqt2h2Jk5fa6hNDmBK2Ex2Y8yYFyTDh8bkNDAtujSGXcmMUkKsKDsPKmNQ"
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
