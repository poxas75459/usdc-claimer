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
    "4obMjdyQ68tTdT6Bke5SV3ApF5dLhd8MqK747whaMWcKsAgWQkByLPoddTA8hcTS66P7jbsQiLo5cFuQrJE2yTsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mhpdqxKQNv26kmTxqwPa3Frc1PGdLR5TcRz6TNEXSiKzkNC8FKRmRfdkFgFujyju5SUBPm2TfKC2WcZwC4sGq9j",
  "key1": "5LiCayT3xpAggxY453e3HFLUvdHnZW34Wrh5tVTBCHcHBZLUTKnAqG9MLSqZ7LzLwyyGCWX9SWzHgavNCTE5TGny",
  "key2": "5krYF6qpwQQW45tSxYqDweLEByHgXSBMp9MSFMZFFeAbHnpfs7ZWd5EYX9XVjaDqNEXwHBnHQUgvk4Sfc4BuwsuS",
  "key3": "tbfkiDpavWpdXvqwwVGRAgSr58cimzoiXzWfSY9ZRb2Y9ATBQTu74birCa1hpfXLgui6YQWKxcVU2mkt8j4SiKo",
  "key4": "5cgKdbCSSyHesjVTHF8yVLC4FYs55GY8AStXmiYz3MZvxrMMniMvFMtcSNXjsmuF73zM4t9dPWxqvEo817d5qy1K",
  "key5": "2VT4UFsFWQqBqddtNfTqjMXAvcSUQEYGDovgPSG89u8Qg5qtnto5q2MjiKdpp7Q4ndUm5f6r4ymBTWHZYU5fJw9u",
  "key6": "5zQ5WVKD83KeiGqMVi1vt7ZCmWbpKCauVUgPVGSFC65v2iD6ct4HedTUknRjrjzQXGFygsamMB3cmpeyi7KFF8p3",
  "key7": "3AUoLCQGTixRhUk4ySMD9r3bq7uPP4HxqaY3D1vHrwdpe9j2Fp6jg3VutHRxR626PYPCdsy85mHxagRSdPo75AiL",
  "key8": "sscjXmV5ftYhm4pSbcCkDVyQsixLz5MaWb8KydwwEMbP28aCdY1R7aBdCn41j5ANLZdieZyNb28Pz1q3djczDLM",
  "key9": "4JrAfLoTmhahVFSoqVCRSS7tk4f9WwWsxae1znAwZoPvLMoXoWsPBH2Mm4xj6UmChrZD2xF6JBWYvcn5SrsUycqF",
  "key10": "53x3nuCpMWS2pXBqUFwskr6NEcMKhavfNHbs4KbBb7hNhDjcEMXXBh8fT96f88qWQJGPY1RxawcQAG6U69nvCosb",
  "key11": "5whHGdE7sCUc9X9Gsk4bBA4nbeMuQiMPtDQzwXwAurn6S32as9aXiaqf1NaU5seJbRHVoRXr7bGGABvihG5m7na5",
  "key12": "2Pf42R2wqurC2f2TJoTaRXubcjyVNirz3JgQZuNKR2cw8Rreq7WJuKRykpNXoJcJzbBCJQWdv9gQ812xCojVjXxY",
  "key13": "jKPM765L42zmKqc8J1qk82cew8NZzUwcfyhScDUs6isruc4S7f4HyosnDQVEe9xPsAnABJrvQP1XwbtMZeRxA6w",
  "key14": "4euKyujvK2p2QjNhMfvcCvszc4oSEsopkTqw14rcnUtnLrRAu6N4FQAHPew1AmcAstS2MFzVdaHzJ9cn3F7RF5RP",
  "key15": "2478VVb8U56PrYEZdLFs7aT2KkCLq8sV7huR8CZcCM1cRT1PsmQA7c6gF2SDRm9Sf32DegfBaovoEpvVnwciUgEE",
  "key16": "3J43BkZveHM5h7FRWPporZ4pLwfz93G2EkUwYpkL1XNBPhJuUuuQHT5aND4PbyU7gCNNShHSbHK44Bg76q58fQL3",
  "key17": "25YMKVZUqQz97CQxSdYExRJgxDuyHM9pq24tXqbds8ZeQENR1Eb2gmzuajBnzdbYJa2a3ZVEgxbsoowcwTuDaZ9V",
  "key18": "2PxCgbzzKLp2sE1zKuQ9Kc87hu2XrJdJHZJBT6YYqoQN6QjRhzNHD6eA4HYYK2GkkEC63cKhmiBLUGEWTTWUovfD",
  "key19": "UkjpcXMrmvJk5FLrWPkPyqDvWoueeLxmH6Sk5A32a22jdmp6MnQscgujBuScyGCF7iJyf36ETwvpmr2DocriatT",
  "key20": "4nDWHVTf9xNfYTSpVLR52MCyUHui7B6nBiZ92h1nerNNoDeotEJJcN2qQ44x7WgV3d6J4dJJMP85XgCWZCqSgZ9b",
  "key21": "5W2EZwU5Rxs6PCtfa3B6QH8AYkvW21rSUBxS35jqeCLmaBoxCDEnSr2fHmzmxcFcDSs89ViVNzeNrnwKW8LS3XYf",
  "key22": "4YuH8LZryqqdDxCympDGYY7ysewf2EkgkpKQp59an18KwfuWYBn8e75kYAnJeNS39BaRMeqAJRvK4LKPjRkc9w4M",
  "key23": "oj3shQ489ZpXFi1VM9gcgY5c52RpSzdKUJEaYQfeSZLRAMj9m9oPQ8z44fedAj7CJ2xiotmnvAJaXSMVXa9whVz",
  "key24": "jd6XDykPCJMUifghf61JQNeeAPmX2bQgWQGv5dsAeLjSvi9dhTRQf3vNpAbpzV42PCQvqocNqqNYaFUHfW2Cgta",
  "key25": "39a6PgpXV2BVP3PnfbHuEDdazfhNHUrJs7mUKnMiGdh4FRJcw9i2ycKKTNEbKcyLAFyZ5gYT1uW9JhpthMar55QK",
  "key26": "5MTSxscwBLMjCf1HfHgP8vNRSQAdTSeXf9JDD99s3uUj21UjAgb7SztTQf6mCQ2zkGVtGHx4JWVo2x4x2dDddapr",
  "key27": "2TUAvvRAKRUbMTEaZ8Lrxhee7dqjxA8r5KxNzZmdUeRnVTQzGH4D4fZf6bnJ424PED6QufTn5jRrVNQuFPGY6DUx",
  "key28": "2DR7eCoA4SpLzQPhPvpMUPwkjDuVKbHMDm9fZ9rdnvdSx1PWWCf3XQAE51EUqZKuMxrdKURifg4esRADGupyRaQr",
  "key29": "FX3merDyMA6bDBAr4mJHEVf2HzM7peKPESPQmHHBkW4M3JnnCyMzGjYTJBG3B72j6cePf2TnbtvMvBQtrSF3tea",
  "key30": "5xAX6RyqWrmnhC7kBgPvwdVm6EfTH112JuMA6KnFYTQEAWca1t7LXVmnNXg7NpnYJ1aBNHwcuvMnCxTznBVCfg97",
  "key31": "3gT8L8LkWb8SQqhTpMbwQaUDTjUvbZsfbEokzzUEEQAiyDcDCsHmcHdh97fvSkLMXkKxNcFwNggPz3RLsBGpSPuF",
  "key32": "2joddFjq3TcZAT6mKCNs5jzxcVAFEVZoAN47mAcBwe4AuWBdDiScCijXws53qW6cqH6cEcBrpEuNYK7Wwabu1Vby",
  "key33": "5T5sVRxyD2v9nYJCpAGo5FU66tM5ZcJxEL6ADyu4MrsP9edtMYACPSR6qYBH2uBpVrXy6rqZfe8nvZyjS8TYvCXZ",
  "key34": "3Br1MHZCwSk2bwQ7nVxb8Mm2VVJ8XD5b5pLQ61ui7WNNwSiHYL3Nsa3dijB9mvHtHx2euaGvx898mxA3TM68pgWX",
  "key35": "5gcPVXn7Y5PtmqJaq1Ch6U4TSjo3McwRCsB5RY9NoWTYUtKu9J7TN92G3yiakMvxM59VSGorhZY8vNAsp3UpFK3W",
  "key36": "48nhvzoTSw22s6wD17ExxEF6LroPJz5hhkT1kALyQ1Xmz94boa7eGnXRLykbjweTyVfQHEoChmTUNaMCZs79s3zK",
  "key37": "5jHC61QLYaYkUEbniaQsZMMHBCz2EE9NFhL9BKVfVon5EDcQgUazHLQbtyTkXAx6VwjDyc4bqz2R4cyXamHj6ib4",
  "key38": "32jqR2879VoUsNnSQqjn6DQUiCxwveHsvRGq47a1CYvqesjCfXV7s1bxSLKukiAdUFLmKuSrywABMDfBmaZq6P48",
  "key39": "65Rvk7PKRDQS2qBZ8VYdb8tLfA9YxCr4p8JKC1J1DQff5tMGM4qDCjVWta9hNvgBT6GFQiUUHNNTrfu5SLffq9rN",
  "key40": "5Q1bxdGvsoag9FUsmzELBXzG9EAmbMTqms3SdHEJy4yfkYot8xQNT4UgBfJa9kP7uBmCzekuyr1ec5F7pEhEfNAR",
  "key41": "cHRkzm5ph96i61LqvqttbxdoVxTeFNYP4SKLVQ1qVzhs5nfL3K7cQcdEVJY11bukWdKSJC8aBQjw9fssuABFQKr",
  "key42": "24uojoy4roZSGhkyoVofs9kSnTnZC7J9Vd8G4fYvdv9AM1CVaxJuJHmqEpTTRjn1qmwurthEftzH3qqMijVn8yY5",
  "key43": "38ivJsyrzSpyYPqMd43nyAYGNpAfzeT18Yxn25Z7q6qeVLH31dKUKAovnEvVstzReCjSacP3EPY3A72Vw4ANv5za",
  "key44": "3sUquB5xsYqaJycrq8Lh5EyHGYpG1TFdbrxNbwtRLYD7DFSf9hw82G7kLE6dDSLjDdrGoDk26g8NZGF7dJQhSzms",
  "key45": "4eHtrECgHNf2SjXt6RT7fcVLf8n1BdppoTWpzi2NJbbbs2RwPDUt4DvXo529aYTqSF7Yu4AHEvWXpSBnikjxy5mm",
  "key46": "3BPKG6qC4h6P29K1GqTf8i7guB51L19WCJxr3CrxSVPbRUgPzw2MUNnAbndqcuyCAE93c6wmfQSCJS4JuwXB58LA",
  "key47": "591UZj3ViPqQ5HfHYcswQVEUneGucd8jMQzHjzQ4u3MkZCChmPRCpDinZ8iNw8XLHgX7oaxYxzVgYVRcxUUi62JK",
  "key48": "y32Uw49FJ2M9wx3CUE4Fr7S9zHK1p3omhyapvh9rfLhCfp1TMBZ1qv8R3eiS4ozsHcc3joqe71GMc3Yko4ZYxc7"
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
