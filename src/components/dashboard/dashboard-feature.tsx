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
    "3uKo3h4ibY5ffDxyFA8nGRDwWL2RkJqpNYSzKjQTLjAvmK7yKzmgqe4RRPEMS2VR2AbrzxyjkRMZ28ihTsRNpCfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m2ut8dmXZTPzVTGAgWRgJBvWnvhxK7Seev64SQQ8Em4BfwQi66kK2MJjcbAJ2jRye46Qdb11YUQBTkYoxxDzMEV",
  "key1": "GA52rewdbkqabvLvFf98mAP9bxcmMVTFFuCSL6BvHFA2KxSqUMxEUwaUTe56oE3q9Vh5Re35As1bwAZ4JB3aLCg",
  "key2": "4TuSuvCEWMZAjhQej8G2cWXsV75mURcLWoXjMJtpGqg5Dj2FYs8yZLAYicuKy9Sgwav3FeyD8MsNLaJKZPQo3rAn",
  "key3": "565rvjFX7PptWJZKi1ZWjvXgV45C4Fgu8pnGwRA8YnuyAPcmjEs8TAB5o1k8JzkKKH9Djm5mzsR5hNsKvQmKj3XH",
  "key4": "5sT1TiVEPHmQuwde9ehCX4sDTx5m7cg17S2RsHSfqmXFn7zoxZuCAaDer468v5aLmxmRbtoHWMEeoGjGko7tfoCD",
  "key5": "2h45vieWGC7EVF8dXzoZC6WpLc63CFFio92vJgYZfqTxN5Lzv5dNmkhNwVecHmPMvXXM9NggXbLzU9uUaCSoMjV5",
  "key6": "5ZbGNELbQRWqDr3qzWovmMvvrCGY35JDKB1hb9PAzbkwdfaZKM24GeJrB83D2r5nv9yMBhdUtze3HYv66KJynaDL",
  "key7": "2r5bx4LW6yC3xepCdqBMyHWZ6cAnQhp1Qcn8ndZKdheCG8Ake7WzL5zAWvEirBcU7uGu7WksRwtQcQQHjFcUExEE",
  "key8": "4uyg39yfSkQqd28cw5kD96tQHvAAKjpKrTjrCt5hSfeJ2XXBDsTE3pFeK7yfdkePntPtB7U1Es5zp5Aqd9x4DHqs",
  "key9": "3SiQXWbciiPKdSkQA7qJmtiWnbuvkrvdUL5oN862xfhEnSTmzwDiRzwJjju1ymGGWEhkYZP1fqdEX31GjTwJuHbC",
  "key10": "5adXoWpp8fci3Rh6aC629oj7JC5ScmfYvQRmWjuRrtvYyyxZ7F8xpXiQ4kNKop4zzv78npE2h5v7Vf1Z91CHyzSY",
  "key11": "ddCfv4x6Vx73mdTHLzJhBRgm36B4feKLs7VLvkpTTMGUsswWdiyzCDYjb54vgUR4wWD6TBvoqN5ci4UNfQPimRk",
  "key12": "AmGmSCBTdCYcTFqUYWWxB7epqJtXHk2DAr5ThRAYdjsvp5igU23UGPaMQgPzLHBexrnR9LWQ1BpVNUNiH9Wy25K",
  "key13": "2FR8osq4VqEtBKTrecRtx6vKa3rbmTK3177YFQibtzgSe3V5siZeRcQGWEGEUJ4jLqA68MEFYNw1hSbU1DZN2kcy",
  "key14": "45dQZCSitWEZEueotD3xw6JMNGVtMFkd154QDmUqFQSQZcW55TGsmSPwuuP1YMkZSzHQiQoBKhqVW4zXMzgLTcws",
  "key15": "jvDMoAmCFCJP7oGPKFZNu58cGAMCi2TT1AM5MddDwYSsoEexUAkeMiQNEXvYcp5evCij4AqjSGGHkbNghs8qs1i",
  "key16": "2EjvcGK9pCYUYg1eqhHPjubCqeH1Ukb1jzxJFwgzDeSvTmLUbrA5Md5TfVySwuAADQgJrHEui8RmMqR1hGHoKqxm",
  "key17": "DMtnG4ASZDzdKcP9Zv2nzxJ5vUhg8HV3H48BppD4B1D1ptrs9huTQhuag83fVTgBJMqDjm45DMCK8ZY6cb61b3D",
  "key18": "2srnjF1KAtNHdaGEQR1q22is82FVVh92c7pcjrxVB2rh7wDEGz6Xhw16opQjR8YAy6c1jAYX2pR3uvod4Jci9pUa",
  "key19": "NE6TgMobbghjFT2ax4XTNsFPQ4QPSaRzkhcD5MAvkovMbvEzBviF2DvGpeD6BHaRVQzs4ioBngrVShuopjkfWcv",
  "key20": "G3HMBxnvi2vHMqHvHh16qwbFM18ptEJDLixUodVPW9knetnv582t7PKRtumEaAkD5zrRwwPJthxXSVwigdGXBGF",
  "key21": "395meQouKtTfmpwwgM3yRbuJTsMEGzCAhyJJq4koVibVR8c9Fq4bcyyYq49JxvoHX7fkTyHsCEs4ZjPbj77yyfwm",
  "key22": "5FoxsyCHPpobaS5doAkEVx1GLR8grFrePndudSwJjvMwgcWUT6uVgoBCqoj1FNrBTReBdqSqm7h1Zs1Fs7E2pQ7j",
  "key23": "2GUphA5qPn9u4QtpMkDanEspyzdSiYnNA3oD9GYSVyEk9K4TEvfatKF5jZzfRBthLVVtjghfK5C3Ym2WKVuLf8wx",
  "key24": "2Lq1gwLjHqjoe3XscM3CJxZGvp4gXKy4VvyPGmiHwft1sGtnu1wo82pAD6zfjSaUy7hPZnsboWMAC6svhMQ3qZtv",
  "key25": "2yEUGcHbyUEuxU1hqG4D6uBYMTJtcjijL1JKzKiKfTLjLR5CiEcS6dHztZnqbXAbvZ4U4dYPnyRpTE4t6maEqQ2",
  "key26": "3sSSS5KfCBBrgro9KwRooHVnp2GBDbJsWGGnceYo4i3FLcUpiGoukatsqKsXaE18NcVyk47vBvopA7msRNRjZcKv",
  "key27": "4No2LWtqdiCdfRYd6Q1n1JHaiyZCWTjykk4Yi8PCK3WaHDAbuKWQcc4hNYxU7DBwMWBeiSLj6oBcYTW9gd8ENjKz",
  "key28": "5MRk5YkQY3Yw51Zu5ryEzPjvipPkhgtpiQTRdaE23GSpCHhvFfy675XCUr1DjVGa7fLYrCNVqbC4r1pT574wJcTx",
  "key29": "5PjT8ZVuEqiAkFUprNtBiycZyD47iiXRvRYauQTiPRDQAq7YRNVjALaUam2amW44S9hNMHNsraTiFELUb6Gdqosx",
  "key30": "3CAFk4QmTMvcAUiauKjSKhJjo7psWcwStkKQek36Vkrg26x37YmqvQX8staeESeWqYSZDD4FNyC4QusP6U6u8yXH",
  "key31": "59fxf4MimMUHzT7GzmpDsQ4TMfbYLAVETkKiGq6ZzQBKCbqjMTiL2raZUQ33BtKLXfsFCZtdnCHqH7jYt1swq71A",
  "key32": "27q7arEbH16CcsELySq28SPVMDReNPvWNVsL5mB74dMLX7EPobt86HAzPo39Vfjs44ZLEnVbwWDWp3HVy8pS1MHM",
  "key33": "4HLqvYb2pz3L818B45dkSUhfe1EKNGi4MTwSNAYgoc6GTHjZvEu6J3RHRXpBHQeKeVXAHcaE4hxRyrjvnX6fkfoa",
  "key34": "5nSLbYXzbeuXJ81ePCDHbSjseHHCxx7zPwiS9apRYq6tEFFP9Drd1znXW9u5JmkyeHUa9ykburJfH8wwj7V8gYFD",
  "key35": "5ZJoFBX84iXddKd8jxpKGRBmHiKwPuzmBi1srawEvvup7RU2e7i5ARiwMW4cH5bbkME85tWGnNNuCq9zTBEBjikG",
  "key36": "2UZAWByySoTuvHMMED4zGrJdABQ1SwsGqo2nDtWmWmqv8uJ6YZgQJF6dPvAT3WPNaLeKaVpFSvtaBUfosHBYKPbm",
  "key37": "4icA7MZBQbf2KKWHr57Fu3iw7UTjFTGAmCMoek97kXx6oZndzpY36TwhyD6b3R2p7kLMG1cQAK3EShx2MF5VfpFp",
  "key38": "cNBCHGWaQSkNgEHYLC4ubZFVf5sqnPyxo5kxasWy9yCRq9UvUaMCoztnAhcdcxiSWwZL7KN148ASziH8wNmDVEA"
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
