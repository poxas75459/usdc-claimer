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
    "4mbRH7gs1YGYwwbt8oiGEuZRggNn39dQyVUBj9LS5LnHxWMjg9hXaE7YsVTDmLrsKJz2VzvWbhKpx6vXUvLBLyJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cruQFuvCXLY9n4FRk6MfwFSD6qQXYwPpub5mX1bp4XzCXn3b3iwRwDTCMWpNu2AQknJy8fAuyRKpadN897y22SD",
  "key1": "39dCN7FXS9CWFTaDdeZzS8aDDppAXdedseGSZ1g2XoJVHbQ5MC5fwYSHmED29jNFeBw9TG6QNbehnDRRLGXPc2S5",
  "key2": "3FJcazn2iwgRJFXGmzroNQR55J9cFELs416Ar3e7nRrt2o8S7QTSKPnFPyRweXDJKRZBJQJcy7Jan8uD3tn1vaZT",
  "key3": "5N5agwzrSV6QNGU4s38CLuwpGZ452vJoggGQdLZTCijg8uBz2SFnwV8281w2qgrZ3LpZrAggpXh6kqJNPuXEdbeN",
  "key4": "65gVNLpuusrswMaaGLjB7zd1w3px8bQTBDehg39mYrcQF3s5BgUAay1JeMj2567bB6qKGha2hSgTGVYubPKwT6mu",
  "key5": "4ymPoz8GyieLgwSZVbopPnMmGo9Pad5JZ5L4PhepR5sZc5i5qYYJasY9FUtW2SeCSta9Pduct26TT1zZjedPQ4Tb",
  "key6": "21N4i4nNojZFJYTGKr6YVPCUcgybbgFdBDhZKdjNaUoDEi3QbQaiGr95hQwxxavVCoLcSdfpU6fukWpLqF9yUxbA",
  "key7": "4Dc8Z9Q1vyxBDqmw8ywVqUfAZss8yQSQjFApybZgHhvMn6Z3qgKfSY1pwTgTzpH2ahEMknkfVUKqVvzc65UiQbw4",
  "key8": "4pF3xivUu8rTvwaY7u3Qa2bdankjFHEg8XwvaJJM3gS3EwJeLb6wyY3E7KiQ2UQ99TptFHJtD228ofpYWjatueiX",
  "key9": "3SHai5NURcEK6XesMBABrDFBPnd4UEFW9xxqtndTkebHdYqwoLU1WMxwpAbYR9HbvigA1v2iYL2q1FtPNuuqdVjT",
  "key10": "2uqvS4z4ByR7bb1vFdF5Wh4EgpbNmwcsjLnA8ReaY7yhHWFkRfZkyUwgNynq7Fk5fhoMmBYeW4puG5YRYCD9GUhJ",
  "key11": "3pKKx1ojYCAa3fmth2ojt1rjvdKoqG7J2MnsocjcAUPsnjYK8vPCHMYC4kKj3d1przjfjncLxM6NeFoJfrpaD9fG",
  "key12": "4dzp1P6pSTBenooLinyXQg8gvCbKo7jq6EXjJavTuZ4XnjshX8grmg9mTugEgWunmLhw4Vf3EJQ3GypynEQGNitT",
  "key13": "5VG9wVaJ78U75s2oEcqEqEkezyyC76mVvFAaqgKRP6wejAVvEAu2Z7sSCqyPQhtyr8kmL5gzYoxUJ8Vneeau5ETa",
  "key14": "4PzQu63t6ubtJAsN9FU8BYREWfML8ykJzQ3GkqNscCpyeT2VRS6MfL2fPSH3HpFPRHVXkCP4WF2Q2pbsUnU939dm",
  "key15": "36sG3CVnmBte3F3zTPFdAWorhqvhgM4DKTibkxWxWfV8ccercE3dbSCGzCRwtB8UFzW5g9i3iTe12ntcnmw8oNRn",
  "key16": "632DtVGEt8zZ64qwTDH6Mbo1pXSEh2FJ3hPXgMnoUhcbZmFhVHPuTv9bVNjUMC1KcDDnY7n6dpmTbSFwTFLvokAX",
  "key17": "3k6Esbf1vR1xigjaJUdcdtHpoN1ozsBz8vo9DYEd9oqdcBhq8rcEAiBFbKt1id4nKNQ46TRwgZoyp2t6K1tCQwzp",
  "key18": "2hx1gntdktxoHjVGAHysmYswF6eBLzynSHh44FUAkopdAh89m6rEx6ZxQUHqER2YXrAzkiPvAvLDuyY8dzFgcwQJ",
  "key19": "676nKAPFWWkXyL5rMB586efJh12uRe8RXP9SryBu7dDsvWXud9tBbhpASDqJhtBnSm4i4rbdm59Dqh8w1S1tDzxX",
  "key20": "4iDubG4yo8ufg8i5dwjGgHWnLqPW6KDBTS6eAYD18KwdVZMGugw1AtTd5btyjXAeWBJmCh1jb34UszLBRrW8hFv9",
  "key21": "2VRuJLJ4SDbffAA6vwGFz35DEBJTh6XYCJcLgs3s5u1PviijMAZt9A8kcmqGHwWzpQ9oBntHr1dNYEVBaHfbMYKv",
  "key22": "4SawWCK5ebphJJZLgGwYgPPGM5iQHoNPUp1ZFq2pDrfoZbrZi2Eo2kvR3GnznZ71Bz3hevKZf24LZwdWvQHwxPT9",
  "key23": "5Mz3nQbi2xYH1FJVWs97b7P23dsYTuNoE4sW2mV47V3QucgDhgyZkSoKVecBWZo6q74Ah3weBmojKh5tywsT313L",
  "key24": "63jDvCeo2epqcW5MYk9xJvbRouEAzGTcTcdFCZDpFjumy5WuKn4g8zWEy1ubPKUdmN7FCpLu8pypAVyqnrrevY9U",
  "key25": "3Gu1rfWVBVWagQBqMDg9RqAi8Yxs6oft5KLQbchHVhNMUhoLUqonbCHfXHNf3Wz22xDCMeNbdWRXa4Ma8D1vbfh6",
  "key26": "2fyaw6NPkcnLgqbF7HyzpJgu8Q5YjL16FQk1fmKs47rhZCh4Gh2MqH5XDepv44J4vTSHKSQsknLHHvkQqRXY6ENy",
  "key27": "cptTHy8JFUgZwPB3ERSUAnS6YozEMCc7kHuC5YoddptWDiYNvAEQBQBBYJLjG6w28kd3DHmN7dS5sg3NZWEWSvf",
  "key28": "4CMFeM2r7NqJxhYuHHymrJwyDLWoN1WeSjvU5o7fjzSTvaAHh7auefRB2cGeMpwBBdD2q7ZLosTstZosm2GmB2J",
  "key29": "5G1Hp17WVxitekyZ7nUWjJKFYi6Wueoc9i5pt4k5D8dNEp5yCe5s6biWu67R7koZqxaHFxfqZqmeRtnh6Du4uHCM",
  "key30": "3mW8mqJcodLrZABVkkfs35kzq7Nwmzf3c9CqJCi2dNKWYt5e2r9MJVUiVSxtiM6wtnPCKy39SJ1KkF9YZ9y8VnN",
  "key31": "uPknxQNuS8D6itKj3mkcC1PystXVd7QccHqbMeGmqp3ttPU8Ef9j21fvcVU9EfZfwWioV78iqS16Sh5WiYmd237",
  "key32": "52eoyp9Ujt1Pez6koG1y11Wwu2btQVSCZmc7SmnPLXNM9rdaQoxMWaP5t3az1yvg5kmvZTquTSNpyyvw8LjFC4mh",
  "key33": "5cEQVG2ndxXywmjjWBkqcR1CTNSZ4iSrAYkQNVBGsp1TUvifSELkxyeBroEDxxofEBjX7fjwnA51s8eqpsYAvRuE"
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
