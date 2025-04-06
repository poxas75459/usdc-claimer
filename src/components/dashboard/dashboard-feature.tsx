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
    "kzoPEyGf19scVBTbftQSurFPH2DcY9T45YGqVb5K1XpTvCKmsMY6iz3Un1yH1AbB59gCFhe47QEWVVEuAuxTski"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DDqXA2c4ss6ZYUeiJb46GwjgCE1QouEi3X2dr2inFxZHt9caMHCy1tMU8MvH2XbLwMjJmw8ENvCrCPjWMChWqYa",
  "key1": "546yfayRAXmu1UHb73bdhm1PkmneufAWaLYUXDxwpKJqFzWcZJNcTbRab9Q21B6q4k7uUTP8NReGEazZaMW7e8oR",
  "key2": "ZPtWhfFNGq2CE3mSUNf2r3f46tHZQPxcqWzqzPioa2chVr3WDG9wZPjmVhwNTWctujGwEjK8APs994knNnDEtbV",
  "key3": "5Nxb47Yi6ABf5XyupfopC5kFNduZdu1YyCoCBgJTFPP3H7Ji2HwtHYqMXpbkjZ1Q3aoZe87vbrSvSyMZEiMZTb7i",
  "key4": "9icgDNpGpmmj5km7Lijks2niDjirotfxhuG4xV34GgWWsjanJePAimG3h6MCNfW4HohEeGabinPVuPFUzXovkT3",
  "key5": "2dMY4LPYQyLgQChKv6b3T2BMGAcT4aNxWpf2z7PgJ9ZVwUkRNBopFBZxXkoh9hSXSsA2hFQmT4ph7KsHVoW3qLmY",
  "key6": "3b9bFqtmTEowqhE22fPBGhWG1UYj1rMxA2mpHJ8YBS7iJK7LBnpL9ZZ3VynRYWPWQX39zLJfLn5ZWp3hJts7Lekz",
  "key7": "3RUhM5SvsJgFaaUktmkdYZU18jtBdJdYgweQjqFPkLzyTz7gvRKzbSCjiLfrt89JsyAMf6bZfyf1bsjzySXmJ7Cy",
  "key8": "FL6TPVxHCs1WBEBsc8oNSBgootX4vuLwbtaA73vyrMg6dZS1C3MJvTzEjKTE8BSGfXwCRUVWerUnCMMJeTWCeLY",
  "key9": "5pN2yM4J1UyB4Yvf6JfhqatG7T3ZCQWKCiEnKuzC6DMu6JogHRJT65A7iQ6YDct5TgPNaN5y49zxWuJKYaXw6Rgd",
  "key10": "5oX7VDKWFbhzgRVqxwkfi1XVaZrnUfRySfJbotgxw3ZeeZNMf5oKzybVgUR4WVatkLT6vBpBoTxt6w8TgYkwfvPt",
  "key11": "5p8QyuNSYQyYjuLcV2kkx4qNgb8a4En1RJMW1hUzJz42W6i7pJPBiYJwkRhLrx1qb7Y3z52f11hbbMxyGiRAmBfW",
  "key12": "3bNjbUhDYjdQdHnokszqo5pZt8bb47rRVRa1yqopzvsyyouoH712GEYcQemQCHeSdiHu4ED2YxPY6v4Y539pc2Wq",
  "key13": "3dzTm7DT5FCfwvBibdLaHDXKAzEdgkpZbdZJLNnmAjc6Jv6XRbeQwxaiM6NoGeCFygp4dU3EfaBYutop1J6joP8A",
  "key14": "jNMGkv4XYoCYUGdH2XvGWsCasNVPYj8QTvfn1Ek64RCZC3nruwEmX2UD3Lpfb2PFqdJhZ5qENJ1gJ2LXVEo8hMP",
  "key15": "5kRxh89HDJfgqvauj9SjFgF8xAiJXC7AeSyQLojE1FrgskaRjMxYzh78CvPXZZK9jtwbdZjs1nVZFiZdzVpfjPPY",
  "key16": "5SKBUse1NvhjjCgwzNetKyJA4uPwT3imhzKu7sC1cCDBMcUHjPVLH6dEhyzLXHzTEL6cmhkk5nkwVdkxcrZY5kGX",
  "key17": "66GJyZZBK89URuteCktTHiWw5LJa2jvv1zaRpKofaAuHW6RkRpLetjhx4tMfmFcWZQaWVKZqunfKpBwG4VCoUEdT",
  "key18": "S3cKoR8qAbDuJkbjMmBjozQ71exuVHgpQwnVX2cNUzxhLN8wffhcFGdtZ75bGgNB7uRLevqS5F3N1ZKG6N6niwK",
  "key19": "64jPfP8ciSHDegboyhZj8LZzzWry6hVo7WVDzFtCZ2JhvotfR6G3WNrTFphbrRtGx5WNthgDD9iW5zWK8iJ5MtLw",
  "key20": "3nsAZV3RBXtc7HFUcHsZLQWxwowPr2Dv9945NifYegNnnridbHMaieN4vY8vXy3Gpq91bmk7cKqCT8xzr27Vik75",
  "key21": "1zWmZv14PLE7ZVqvB8GGFR3LPiGuUdSvTKAtLjjHbparxwzRh358V7ACbV77RQLzJSj8caSPCuMrB2NBuQyrMcw",
  "key22": "GasBRSztLtLZqY73vUPxb9RhsnEzrm7xuaAbfnj1SW1C2xWExAR4u4XG6gsSpZwQbhMyrycddF2HpsJGaJQbkKa",
  "key23": "AsSSgYwHWAnts3Q2MLcWtoDEV6X574dzdnsbNvGWNDBM1eG6MXFCc4dNwNWtSHg5przMY1oKQMXtQJH1Fg9R6KL",
  "key24": "2zndVqSj5JLDgtWRjXsJjeJvgT9Lsyk3udL6aaTBeumC4gQ86t9f1mrqWMEgkZ8ruH7sdi5XLes38Tx8nmH3zBUc",
  "key25": "64nJAAXudjRdPaMz2AZG5XvVpfGZb8XEtwP1tqpJBptgJYL8HmCs7YpFP8ub72yRQERFTEVw6wsCNUGnUkJsAFci",
  "key26": "38P82JQnJG4NCUfgZKqhuuu2fzL2rcqdchrETni8Kbc6LLEBCdbM5ajnVe4xSx7aj2g1DnYNt4CUswYLXrjx4wsr",
  "key27": "5PK5TW1T6i3nU3cuqyLRahjor8cc8AZa1E4RK2bzvzb1MWJEDVikeefnG7rxEWABvgkafjUqYbGGu3TJZnbwnw5K",
  "key28": "r4ZM7PEK9EyDnRCEYGja174JVxAfVfmE57dpKZPwCifnKgVSTMZuRSbLWCz7jx6Q4CbyRXghnaDhEBQ2QMewrfT",
  "key29": "JQ1y4oN4NDu3k3RVfVh45YwqzEV2UnWAzP9ifsBdpeHoxiBVGLknWXNWhFbyjj7UYNUR6hpbXmiMqYvnX2xq5Ao",
  "key30": "UyUErEzLxGJmLiUNLic9cFHGvaPn75qaik1im3xTWaiWGbsAghkr188ynexCSiE2Sr9TecV5JusDshTcfBSB1p3",
  "key31": "5e6ttQ5FcmH9uKpeBcPZ3RFZZYe4mDrnWKoVJZqx5yTFTyCWgoR7h9SiFnBHPo79AZgNEqtuXKL2eKNzKJrAC11H",
  "key32": "2JYGfKsFnQX9RQiDrpoW6h41fDc5xmJek9zdpPU6NGCuCjh7Fij49xGkHcUaptFtg3bFfNKobagoEPgK7sWkwdcq",
  "key33": "4EudnMivSQ7oNxNZPpBvjdqUHGeovg2YeuitZqVzF3KTqm6CL7TeWaCx67MCk9HF7wvUDC1HraTSXhAhce4nmdDW",
  "key34": "A4KrgpzmJAgBzzm6GMRjodgycnaEcd8AGKxesHSzSMH7L9iaQRmP83kBjkMysJwj6DAtjk3xThvYceuB6RLLppp",
  "key35": "5MEbaC6LG4ojmFdxkKzdsEF6uyepttfvFN2yonwNRSoEYySnSpj1rHch3YProDz4FSmGLuX4MaogmXB42LvdLyaz",
  "key36": "2V8s383qpzwWgK16ZwsgML6Bf56SQD4VCwbDDdFcRP1UwJ5NBryD5adAprzUih4cRXv3tMHF3QHkryFsQAcygBtn",
  "key37": "4BNeCsNSJwNn6kvv5MecWhFaBm8B4SLM7Ac5BbuUmXQtTpYgJZfT2RUF9Mc3pn2SxqRrrnvRTFK68MiKYycyJJuY",
  "key38": "5ViQb3nWMADc8fU6EZoe3D6qZZs82Lf5xzMQ6gk8CdaejAMdWJV2HhgqXxT4mYoJ6GD1tgyLBVBadA2sxP6xcCH5",
  "key39": "5XNaQhUGpSNzSanXLzRMN2G8DJL1956wgR1g4ZsgoqhWrbfQp8eLvz5uJ8925BQY5u1zyUTG6tomsyvi4FyPbEkt",
  "key40": "3rmj6KvFcg3ohn5pTwAt7MQ7dy1ZSJAszzPgirGiH8Nywg6Rfac6zgGkW2gbNnbA8rfVpBeR3V8CkzHTJq1w7VQY",
  "key41": "5DrEqUQ913XRQVYM9kYbM6gJT7vD2Kp12XwjK1cG9ywqSNEVKSLL5pkGZJRMHCtKyTw26HCsnkCVtLP1FRomgF7c",
  "key42": "4MqP7noMPd5NBYndkufVTyx5rv2SxgDQpzkfzrkarr1nhaHznzrjksYTBRnsgpNTAHowxfKNmxKf3fwjS627ZpeT",
  "key43": "5hoq1vNBP3rfRzu9bgeAZDuoV9pCyAHgrqgGQKHsDwfDdR6VqkNYbm9KtMPsZxfEzUeGhpARik2z8JnEfwajnEj9",
  "key44": "3tdsKJEPdn3qJSQUi61XvGApegEvCscXom7QB4qKBxqkJ1xgg3pYKf1NWB1kzgLezcHAFyD25wkQFqZYGuet2zhV"
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
