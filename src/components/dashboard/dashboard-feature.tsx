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
    "msdJEjrZFB2cTBYBTd9xJxJHzEfoYoUpNdKUYyFzcf1zjqt54kvQoxigXvoJ5a7zseRPxh4boxiE1hc7RcJtdY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFgn6kz57HdQiemoheXosRGoXFE6kPhspPpGug8vDeLx8d3ZMZBoamBtoqnupYLiYfy1Gfky6abVisVoBMUH6QT",
  "key1": "4v863q3TtsSFXQCwNTyUkBZkWWmPdEpMQXLapkj2ZsU2xkm1rNZnqqYed8x1QgyN76prdCicEgVrRcrvLPvZBiAE",
  "key2": "3ACopk745uJPMNhfjMWxhdXS4KbVe9C96HyihgX2PbJfd8XdDYznG1xpeXzkh748tZWxwcX4TAxUESsw9ENXdZfF",
  "key3": "3p5pJT5YZAyP4BwLYxg1nUbgCYkdq9xG1a9wduvXoXfc8FtJXcQHop4RYhkwXcCw6KSyLk5MnNbJmPL861fZDgts",
  "key4": "61kfKKJ1ctA5SMjMXZDXpSx626LMP5vqmafgZrah2ntgijMoAcXuQ3uGbbktFQs9gy9hrEq61VnoZm3Ap8ehsFJL",
  "key5": "2BAGXedYFnDYbMcT1YGc2Ki7UpWobuUXYSZkfuZsWuszggb9kA9sxJK1LAC6Et4H8B5Ywde912JHfP3VRocSFy9T",
  "key6": "2uMAa4QXKLX6UeYqWTFa69tdowQvJKJKcSMpTosMsMYe8d6H7t9RkyMbzv5b5EJypMu8siKbawfZxwHmuHX2iZ8T",
  "key7": "YgJkhdVpqaVnUZnrSuF1UR8dW4LiXfzhoKMf44Y6kPEMmRfu6Jyfd4e3oFHpYZi6Yz1rQESdTQ1fLN8PwqaV1Ra",
  "key8": "VMLvjR3hDsp2MKXzN4uKtNH7uirJo45KWvy2jeg5u8GJwyGKwWGbQASNo98TH8QtuRUWC1UVqFa9s4HhNdZdLSx",
  "key9": "2kp3vumAfTcJnv6t1Kj8wTF5B6dacG8Rse2UXvA4qDuGzcc5krnRNuBG4NtmFc4wCf7QXz9sgrRjUjvhiT9CBKnB",
  "key10": "sz67wCjiY4qV7odnks5gRvsf9R4WtXq1turQnUc9qsuCJixYmoThXfJZwebmE83W7xewQy8bPmf2kJWRR6EK8i9",
  "key11": "3dvfk6QVVHUuQygrdcSjLHK2D6812GXzFSncMVvQXUGbRc7dWeekSBzAi2p7EB7zVQEBVJSs387Jv5y32CkFj41s",
  "key12": "2a2ChQjsiPonq1WXNnsgwm1B3cwfpu47bWfGRwRktdFjxBu4GXwXihgKRogfUeyThdu6iF1zMdx4JEg17NEMeQQo",
  "key13": "5owDfDt2inzp8WJtFJ8QFCRPXLe4nnDTp4rGcR6hw4ssAvYLMNsoYeMbr9bvQjY74mfhQ34DH9rHiriAaYzBSeNr",
  "key14": "3dpFgRQ8rpcSz69Jx7dKTBSxPXpZM7fhHz3NPiojza1tsK6fAN7z577CwBgp58qw2Z9qm7Fd2wWcbwzS7cEn6RLH",
  "key15": "4ZAbHqE94bXQ22bns5E3aQrXf78JuupPrtHJBuk7iiJM7A5HBK3h4v6YkRCmj8cjLP8JUBhx2sz5TqCpiost6TUH",
  "key16": "5hLXN1gLAkqS2Y4skTpLWAw3ATCs1PCCDHmiK16hhW4SD8hnNncjgzWsND5Jbov5HTAH2wMbAA7e1rUmYFgYTnsG",
  "key17": "2QM7VdXFKtR69pzBjnDuiMSK5FE7VCvt6iU5R6iGMbLV3KUesxT5jPa8JAPZGcpnPX6noPa28JgNZAdZTc67CJSY",
  "key18": "3JXfoFtBHAu6LDQPAgwKV2zZVMeY5U7mXpBusjiRJSXg5CfmyruE2oce6kkyjFzn6FyHMvGDNwWVGkmouycYGhBk",
  "key19": "4td7cqR3at5KwwjSh2GTLEDY9GppBXjgAwNhY3XYFFxVqN9BzhdKq55fwaFwUoAHuWbTKgDbNoxSp5oEdoWBTWXQ",
  "key20": "49Rqck6YQ2aP961pPH6gumTenG8qp8n14CaDj2aapxJx6MH3jMUQ4pvSkxatY5FASKcHLwetEhgPhZXJA1iprux",
  "key21": "65gkCRF6wxDdVXnbYjXkxrTUmp6xHCcEFPzwdQSw9XvUhA36icFcZNDnAqpvv2N76L2Hb3787GX2gATLAzXfGZfJ",
  "key22": "m9KjonWJBRs8FtsXp9T1skHW6ubmgh2ctvt2q3ssaueJdZDn2fqfTvZcD5nUiRUa9ozfuioN4rsghMRs83KwzqA",
  "key23": "5ohMyWAUsvsNETALZg1nUFAjrjA1T6K7e83vFdXhJHgUoU8pUWSuFGBxVfgCjQRBeaXZnkSpBJQ3TuRy28rx6CK6",
  "key24": "7ojBKgqG4eG4NbGRqxdcib5sYjdueM7qkmxRqgcdjSGiJ47Dt7HvmrEykGi5ZVBpff6kC9TWUwhNmCSWsP16uWx",
  "key25": "2FL6D4EWWBjt1RS986GWb3t53CsNtpRaGarrUCrREpZuxgBSJLBP1tcRXCU1kteA67Vwr2UtFC1UJSSP7vsBHW16",
  "key26": "43S7BvbyTfk8RTC6y115DPK6ky79u3tbbqA1nwqrh2ZyVExQWDtqg8EUDsxe5k7cf8FhsnTK9rLcNsVUhDEtAYVr",
  "key27": "2tr5PmHyGAmNKqEMbeEaEDiga2JWfC96dZJLAJsedjEMXqpWAhnbswYXLrxpjLAU9JgQ63M5QwQ7FGrZzfNMVBf",
  "key28": "4VwKZeHDP1Fr5MpAcBTk316mX1keP8a2M64boGLRx8dVMW1VKGFXfoZmGsgqtCiADYt7kfXfEpExntRU2Hy2QZgz",
  "key29": "2mzWAQuCV5eKUcTtwstvR8YVo9AkeCYpMqhLweQpeKeJ2ZoHUfkD1rErvd7oUk7KrH6Roqb9mqZf51pe6zVYFokk",
  "key30": "2mNC621MwYCgJhA8wJBSBBXvMDuz6y68V2dkqKeTYEVAAX9dAC5yfdrFK9s6wLfQHSLeAipvTE8crb7M9umNndS",
  "key31": "32yCDW5kxXXw6amq3qbWeMztcRfX6kRRPwPmsvN5Yqp1HVz3DuQSw73uEufJn3QHuY5xu3sY9vtjm9YdDzofXkhn",
  "key32": "4nMjSNSpQgRefHLnkrxMbHjP7DKX419VhN2grVGGeU33DjyewqWLpHjeK8wws4NKbdd66Zv2xMFm58TZaWJ6j4mi",
  "key33": "5XyGWyKVttSpJACCZd56NE5znWJ4UKo1V45XxsfGxRjq2hhrwmHgZVRtu92A4dkqFE7LF7JHgAtg2V2rNe9Gj2RJ",
  "key34": "CJU6kgbRZ8pN8Z7LcHtHofdP3koPuwBkqRZ1YXh3oZKzkGUc9UvjubKcxLmAerhHNxwz5MKrT3NKUqvpozNFs9A",
  "key35": "vH8zk2Ly2TFTHt6GCRSAdxtbQ7GyjSoZxvupGpJy3iHk9SLvYrrRAUyXXmUkVHifTFeiD56DCC3zoe7CQdEcvF9",
  "key36": "4eyuamwiQ5xJxtRzve6o1RawJ9sT2MpT7vZsPPf24gn3UvLiyumM8vXoP2sWTjhZQdkfjpWUfvLed6nDzM3fPh5F",
  "key37": "4YGe5vvSNcJs7VfNn6vgh26x1g63oah9AdpYoot4GThY5fUiSwVZEE3UPWzyYLBguxo9gzWCWCGFfpmTh6pge1KB",
  "key38": "3TZ2vd6kivrSZ1uNmV1GDuLVuVAzwGLpxTg8bfMbjMzLR8XBsHaVPjdTDqsNBNkys5DuKzQGLHUNpdM29ZZU9YWv",
  "key39": "uXX2WTpyaixEUoPfPuh5jVzAez7wZXcTKBLoHtUAnaFmC9ugErfEkmrR84YY7Lry3kACCXPUAwTMKT1pNjHfM2q",
  "key40": "5NkxPo6wWFo6hzonjPZUPW1T8urfJqf9MPQa5PZkQsZjmv5VstgtVCpDQJqJCZLJEW4mBUDGYhQiqow7s81sE71r",
  "key41": "2SxhLWiTbknU41niurYtMZgLspYu4Uj3g9z8mxNEbhi4dcuNsGXCsAsfp7eN2skusC1XeEU1e9L8Uw65F2W5irWM",
  "key42": "2GpmquxWXmxrA6q6Qc8bFX84JgBYwS3BdkNMXtSS5HDhfjmCvNSRwRR55jzm1SZBViLahNKxhbMzzi9WTxA8qW7x",
  "key43": "2QtykRegbGfUsnSuh51o7ssYxQiEqrvChLm8UeDNna2zM5bjTWWWMr166LGqmLvcQZh8CEmdTfRyhQp2MGjyhAXa",
  "key44": "BfgTyJC24sE5ms7hA8EYW9ia9fgw7qTdJYHg4xZnYKHi3nJMRANLbCqaPMxtp6jfxaRtt5DSAyKCD74UT3SUBWr"
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
