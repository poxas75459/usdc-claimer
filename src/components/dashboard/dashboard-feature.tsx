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
    "4ccxiQXGm9wYAd8fuTUA7gaciiSGzbmCxKyXcwaFxCUzPiaTxaqNNNnsxNdWvco2erAMCGinoGXdXCGqYRiY3cpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G6NmGEQN2asW8Y1srPARMd3Kcvzq7fznDfJGfrrtdDi4grCt8d8zRaDBVtFKsAjDj1eDk24u8XTLpxxHez39Rg2",
  "key1": "3oVYDkX6XQi5wcCaEyTT69A5Z5ePQuFGNi2i6tWhdD5srNfvBumgKLiucAqSzLXxtGvu4UKh34c9jqyiUajZkgAr",
  "key2": "5PAompW9eH7exRrssGLZgYBqKuaU6uEvUWBYhQiVEoqvYHaShd4c241TqLgmgbA71xfBgutVSGJq26pShH3Axj5H",
  "key3": "64755dkn6ERkrVVMZYvuKfQgco8dfZxgANubq7qzFWs9XwG7PqSxWwUf21qZwggpDrVCBs5VWL4estthoJMb6iMU",
  "key4": "3tCUpqePYbAoME8fwsoFSXTx5oCduBzd6NsvXooooYso1z5RYsG7YVCzP3qnsz4JVwkzuvJzfFLivmgRuMRvYzRu",
  "key5": "124yMUrHTLh5MKiC3skgZuNXmcZUEBzYeaw7Bciwoxnx3uQqrSAdbivs3dmcv2GbegvM1xYk9RfWid2FjESTZJsz",
  "key6": "MveSC2i1uumrz6ony7UFDKvpxbfvNc2ZHAjqC3HsvJEaEHZPjcPFJ3TBFnzNexnT7yo7ribbnaxiJartGKr3ZXf",
  "key7": "4uHSfHnzr76ZhHYsHWZ7UB3fmKLyA9K7TGmztSdhr9npyBmgp1RHvFKK3JHJTG9H2VWsXY7gSEgT8VBxXUMEKcTP",
  "key8": "4iL63ucq33fZfQWGM6C2YMpYnFgvp8EzPKNFnBn1vYAP2mPFgXQvqMgBZcQ6rLHLnw7Fjt1pbwARYx17NuFq8VyC",
  "key9": "GScBC1saLTtixYq4JBp65ottiQjpLT99EizbGMWicsvqAqFeMLYJsHzK5AyXrqkoXdWxjR4B2mfrybomUrLRei6",
  "key10": "21ZhZi4HLV8M9S1b27EZjyCgK2d4xAmu8Pg8hcMXeuCmHqgpukd4TU29BFseJvWPKk9nFchwmBM54vnm94HBzB3K",
  "key11": "ntxSmjtK769BwAu6owHdXPnXCpATFsBD7SjLB7b9aiLsokTyQVSt3qyi7pFL3pYq4PFPC7BVmAo9DSHuGYJDvms",
  "key12": "2nJLCwYZZQp3qMjj7i7Jzf4W5eX2PkdVgaspWSThZRgboTxa4dSdjo7dzj8NkkaWcKKwoXaxXhNb3sd5v7x8Kn12",
  "key13": "AvagBSdHV5NZ2UNiZqSVf3KznKqtHYtGym1XoD134xgyqdz3cYWDUoBup1Wtj9fdP6SB4G8PfbdwJaipymEnRfV",
  "key14": "CszASZQ8toZxhwPQMbVW5DiUabAh33EyZxLHBmhpxdVkeWBS94V1S6uZzmVDbfJduJ9FA58Ts7kcz2hbee7uYit",
  "key15": "4wjAfNYX3YPN6yPgPMQNo9jesdTGu5fTR5PnJtCJ4NwPtWwm4NDRq31z414bSddVYuo1hWw5Cr65u7rqseEnUgro",
  "key16": "4qR8SGfzzwVupinWbUEn2eXpmUwKJj86BVNLHeMGiBEJCrA5BKJphaB83jxNLuaKpeFBrnNSyqyvmqgPmH3aq3zA",
  "key17": "3PtQuPDiF7yZmEZ5NvXScUFuG9XGzRXnhtT2rfdFQgouPzxqZbu8wLy3LT9pJdyV5CYr8wf3mYkUDyFdT9DUCWHa",
  "key18": "4nrsagT4eoW3iuambkbX51Z8iGA1WMSUnP5yNymXvBNBquLvK2iLPfCAE3WKEM8Jws3gYQqHznZZKzHyow4B4Q9K",
  "key19": "63R4jTzTsEaYNukeKnn282iAxdmEv2TPSk271w3FqkbciBsMFd4qBwWPSGiVJJnBNro3myfdUrpRbsam6UV7796n",
  "key20": "38vu167rGPCk7gnJd1y99SziyaF8neMaBDzDULc42Fad8d4uTUiNrr95tMZQ8RhMtAMEJ1QpkdsamnTn9xsuvb66",
  "key21": "4tm1hx2GAAV86wuZVCU4KfX1UD4pU1uzfjJNbS1DKR8CNnSVdxQDxZBQPNQGqZSY8doAVCKkmqZBxjXqpJBpvqWM",
  "key22": "5wNewx52BwsRj4bHZukNpkFaUGc8YdsW3fmRgEMmzhb8pxPWznFGpsjUGTYnJVYeefH9AeRfNFW75XVdq7N5tL1M",
  "key23": "5vr8f8hFK1DrVz11LWmSyoaPTMPmgKNQLsn2jcsj7GxKjfUbBRPRvC6KALkvRgMwVZHDLKeQj73JwoXnNEqpPfKK",
  "key24": "2FAVY8GBabqDuzneBdubSMw9sEFcUuDvKcvLmRRbhD8mKh1pPD3Fz6xSKxucc6rgZjG5oWspdQq4UCEDqjY57VGs",
  "key25": "35pjJe1GWfZ3tYubEnLtMy6pR3MmBYmeTR5EKatcKMbFy4nRZnoWDe3kQkijBDy4yJ5uMN5DBc8AebNoumR2d2iu",
  "key26": "1MFo6QUkdPbTeszKyGEzKS3Jnfe4ZcSbn6c7QUnYUbLdoFRXjU2xzFaYocPULsbqZ9zc2ezVmZxPT3a6XhSqfhN",
  "key27": "4mZWZh24ogWJ8BAs1cJ275KTbikQSgS8mbc5DLGRjq2hphaUWPWQRbBARe97xMiiTktP7RDyxHpRt3aXE6HRsNrv",
  "key28": "5fnbSCvXDEkmguGfSAyShSn8SqdptwmFY8UWbXaXwFEBxr6QieELjcr4DBWxNRjmdHPjMWcuY8QBE7viHyd1QBbv",
  "key29": "ztdrWDajJMHZiUqBzUrFb7FePStpiLSVxi1FAYXQDBVmpJm9SFTk1SxVx4x2UpHxptY8RBNjcwCssDzhpGEVcEX",
  "key30": "49JxM6PNPxoKJJeyvrSDTeTVsEjKkaz3Q9cw3LtxkrtcYSyXXVixg3xGN86HhfQZX5QqxRNwybKSakJSw1KYgpc1",
  "key31": "4fkZR34uAvcoCXW672a3oj6cv1DTjCV3sxw2Yze3anwmAbYch4TsSapTtJ5g4FAXmoXAcsjqUzEdhoUYy7Ttsqnt",
  "key32": "214U8gH6LVdh4zmCxk5KaiYuXR562sWR9qU9pGFLjvsFdHDuiaaB4gyCYkRzgPTCo9obWmMehzXMLdSXzfiqcTdZ",
  "key33": "1mS8wb3ELeJRezuKmxcV31ZVR1z6p3ZDdtDuJc4wACmAPaeDsjdMGYfmzf2b2eoBBeDFLn86yuGnFquM55JyH38",
  "key34": "5awByKvjkfF4TnEaTtgQMy32K5UAyJwEaFo5oCmnV1yaRRkUDCm5D1r7VcPnU8jEejrM5Swz3sL5KWD1LkWXQSfL",
  "key35": "34vr7M5fWDB3BsRRRgzUcxergmkLZEDEEkPciBnziDuvLQzUjfESiQdk6nuJvzXwSAhAm9nnqV5KiNqnTmGDes9z",
  "key36": "5rdL1YDZRuXnkJofhvZRcofTW94umtXAoQRNNpa68M9BKyqw3sfoimMt85xhFJbqy4SxQg7kj8eBimf23QUbK86B",
  "key37": "5zb5brEnQ7mvCG6ZQHMrAUS3HhyNwqZBsFGi2n2j6PsrK5mteV42JJvPFV2CxDBU1PkQQDKrH6ja6HJrcb6Q8P3i",
  "key38": "529GqsGKj1dNksUnEdQyThNur34ZyE2SgrQNsUPek9aXqeBFweFepubwHRsQNTG2jAGtNpPeMHCRFvgeN1wbRYrF",
  "key39": "4hMoEQ47PjJUnnyDoRwRAqnT5TQRrmdXe1ydH9MMzbaLTkAgDLXvXJPEH1xCdPfqLrhdXyEFq8Npdq1SGzvtn1XP",
  "key40": "2zWc4DZzAcLFNoTLETeutJYQGob2hYgMKNQZwkWFP2szUaoumghXxDEu1g93CukD8RPZXhJqEt1jaFUouu6tXUZ1",
  "key41": "27EoUW5ZnfybL1ywuhdWesDZUgJsb5AHkhNqBkHHWpKoMtbhaSSU84HhxEiSF3yTGentvnZoy7SB3eS6pVVhx8kd",
  "key42": "AgaNWvF2SyzcNLAcPi6bJqraJnqP6kEpg25eaE1HwcFNVzJv7A2gE8SRifYeiDEEEmyaj7Dy6Crsc27g7Q2xgFz",
  "key43": "39ZrUhrTpvqHdoufqyHERMVYPS4WEEowyYuVsf2WZZgbuhUyoNUgdxdUVJHwJZkzz95U2peFtunHC5JKPL6dmUQm",
  "key44": "54s3JMoJdjCMfDFSaugZmLMwWWM2xXqNE1j8o5GxagqrokhTes5qd46UeE59FGCKrZ4YhU1vm49rfoFUaaHgWXVY",
  "key45": "LPRYgGaDrYu2fdwURXSwbaHrWjKqzLiRNAq3sqdEmKmBgGwHWKdkzkSarY97PKUzYF8TMLau5zjkkejhydu3uff",
  "key46": "66UJ6E4MgFKpaJ2cEXhxELyfEMbdgUK2Y2e1z25mkZZQXVD2KpbaURD9kH8bkw3Vr4MR9VReX7RAL34NG756GjED"
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
