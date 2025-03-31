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
    "27wEDWhxYxUgiw6uswg4iCG6nagBtLkGgv9xo79hsmGDq86JvW6RxMcAB1fBKkqrR23NMRKUmMbA6tMbwnuENSEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rDxXPEMs3fEhLGcyi1zCNaAZM2JV18Q3T4UkszHZ6Lgr9svoNHYhic287tASAgyTB2PceuuW3FLf18xMwPrkJqf",
  "key1": "4CLyKeZNdk6EZtgh87rTM2ZXpHyxdSdB2Hy3MzJVZ2iiky8J2U6KB9p9Ud44HY6PYJRGQSfkEz91KKDUqeK54eSZ",
  "key2": "4Saoi25Rv7VM8mLAnRgs62nqNbWVYnuu5SrUBo1XEcVVwdAXaHh867F3gpsUoqV2qFZ5qLrfRD5oxRUSw6iBJEL2",
  "key3": "4uhggY1b1SmEzBqBWjKkrg2JJYzemuTgCdCX42eqp5oK769ceeB2X97g9RDYdbw5ZLYJNLKpbKGsdPrs9jKLJbJU",
  "key4": "PNxgKdvHbaVEu47fMUi5cqmVcWwmNjLBCM2HvA5He7fVsoJBvvCmA4XA39RC8BMGpNk3DMSXCuawiUzgUHEwsSd",
  "key5": "4TvUtJeEC88R712b1FzndYoTLphrQN8f1VuE6UtYLQjN6h4jiQRyuPeptyJkNEbATA4FUWzSBj7munF71eSR1tmw",
  "key6": "4fmjfquPQrZVzDRugBeAmfxdAUptyNa2ztv3TPiex5TzjsL2R2iZThzUuVVfFAi3QxWG1igqe5K2bphdUhZUF4om",
  "key7": "4SRjeQZu4CYVaKiD7pGVpN6E3PtvyVrMkXL4LXgggzAFhdaDhiQGAWefcRMBgv4GmLGMGbvBz1QkrfTA9hKPAHPy",
  "key8": "4M6TuNLSRHUuZLeHhv3kgmYTpEfctrBYr3LeD8mDmF67j5ybLm1pDEr2U6fYag3krYpN3nZF7632no959TWgfBUZ",
  "key9": "2Y5RZ1wxwhMGWN1JStdbJoQXr22ScrU7XR1S5SaQq9rTsQiqNXWBogxJQFa69hc82BVHmdKYKnGL5JR2L2mdL8YQ",
  "key10": "34c2TsRQ9pMnwPT9Czcu7zdPBFEmDgLCzEt94Qs5b3nVxsK8SKC3e6Eoj8DZKeJehMgN4eJxtn7GkR1Dux5jwGmc",
  "key11": "2qFF44mqduHhQbVpTJyx9SX7PKTapFSE4n9PkV96eEz7yP7UGEuDvzD4xs4uFEDMC6CDtcrHsZb6N3dHjdL9UWou",
  "key12": "fX43f1N2U3dTAkd4sWnWuKyMUMUhdbuXT17pB3q6srsKYA5vWktuYp2jb9tHq3ds2MzpvzKQZjds7ZYYnSkYu84",
  "key13": "3kfVi4PBnjSACTAf8DjG7LK47RgXCjaknUXWUshu8kwXUESfdMRVgMNXCnctymLNFJMLRHKK2WJX97cMxWAA7fyt",
  "key14": "2sbJyfs8obxgxJafNLYK2RpgXZVTF7pHr9tPHCxarPaJp2u7Q6zPMJt4C6eyJdTnRMazb3Paf5ZNNkWeMRjsET89",
  "key15": "2ojrdEtoovJsy5is6CWECAK2Nx6K6gMXfe9M22JTZ9WAZvjVJ2c23QnJBGL4iqWtzHax1LcQkkELDPH1rJBjWxTv",
  "key16": "KaZNj9JKGtbpr6hzQ3xfiSi2HN9FZhY9DSvjxZZEwJG8mEAnPo4KmvG38DKi8f3tLi27FAJ7rz87VXZLQSr7SYS",
  "key17": "JmRANjz57JsFQFh3FEGFGw5yMnWCEZjnGXz7umaea6pUsjg7GgY99rNMGtybjhVe7sXDyyk7R2F45fpyuzKMfjc",
  "key18": "2WtBsjehAud8nZC7rgkAy1mruvHRMCMUt1Zyj58QwXSwRuYkoCyuFkfS7TM3qrEZiPcoqzFidSsCJBqgX4coDZ25",
  "key19": "5ocPeBc9PpSnTX3pzFcsDbVBrJ5QnT7trnyLeLsS8wWgWY8ELjR9HqinMagSKMXxZUbTWustP6bKGQ6vQSUZXe4o",
  "key20": "2CdCuxzgJDAjDgKzRv4H9GvaD8Xoggx9d3DjUBQ4srt2m6ZB2vw9MAWA3VDZN8z7e4FMvQT21us6Rbqq23tRC1Mq",
  "key21": "5njQTnbvEzha3PhxZd4MfBhgen3dGnnjQs1zG8QTCeWh8vwW6mkrBNsdDkmpc3szwk8KbhmvBBEUeCveK5MunhRj",
  "key22": "3DuhqCrpQ6uqrz2jHBSgKjaUFAwue9UnTVeutaxY8cVp4vfNnYPaX5fyKx3cVVhzQoeHUgwhtQEfrxEYgrHeUUUq",
  "key23": "3CbRV3WG2aaA6XhCjtMrcUYGc6Ur6e3Mkm915GAwJJNuVPMRZiEzzJ8V57eNZueeTEYzMFuM8Z8M7Cm4ob3PF1CE",
  "key24": "31cxZ2QH7rJUmc2WJwaprU7aiviRYrJGBb2Zvs85yxSbDXsWCwJ3kcnZJKT8HDYFYtDaE56B44G8dRh4aQcdAGDY",
  "key25": "34y2CtD9m8DGsh6N2WN592f86cLNdDzt2Ha2pcaiQ5ABGF1YZ5SUcXvqoxdaMsWbNZWBw2LhNJ4Bia4EsDUYw3nW",
  "key26": "557BsLgUwo4Yv5nyynAiFt1KtYSRijyHuJZhpJ62e51tGLrp4uX4m54rJAiETsyi8eA7FSQPVeLKjscBwgsULoY",
  "key27": "2LbWZ9N9qzjRkpnP7W2ZV2TXpdYZ2YpyTgZFHFCiWgZL4gYM83XXv4SwpeZ57e8NTqiwK7PjMNgTke8foaRTsVkS",
  "key28": "67WqGJPHUK5gDXaXXB5qXJE7nqqi5rhG3piaZCRuwX1ptHEB83XwJmKuT7oxQfh41TvPdikKLbWaHgyfuseNiS9P",
  "key29": "2oVx3TVcVbbKkgE3evQudECuiiJP9YksDwofvhi5RsUE7MZkihArtrehUSpaSeJFgE3p5hj8dtukV9tqk7WLhKVS",
  "key30": "NCM3xDwqsJV4mYd87YvMJQmjmUEw9t2gUdnpMiTVY21CSqUMkzfx9JpK9rigZGmXk3cEWMKyGvsSrbyUTzCxvSH",
  "key31": "5bePghn8gHL2dabMhSd8jdkX8LvcuqFaxy1MbWi987WDD7YphEzo97bBH7YfBynuhEMvHshrZx9w2LPMbf3LKLKH",
  "key32": "3gkxTfUoYb6i4cTw5YEBfwNWLgXfrQHME5wPK3CCgeXR1aLrssRUmq3Vkkcv7SJughp2sKhtM1jqnKxsgG4kQjrR",
  "key33": "2QmtRVffE4W7zvsFLeWsTsihaqMJMiM4KhPzDebvcceN9rfK9ipByvtRDhneLcGU2WUp4pCWtEirapDjx7jRcAvx",
  "key34": "2FDonU4UkenDiyqjJAkPAyhKQgvsS7o6sZoXu51wGU9BAdsvv1Te6XFLx4wZgAkHKEeqxjdhsrYTsTG2pGzWkxq",
  "key35": "4MrXYawN6J9at8cP973Fy5Rn8VoTueS1mVkWA1qbd615KNkA5et9esnk6ZbxeEiJi9CKhoSvL7YCG6PDSziroDxY",
  "key36": "FnSRhwGJJRXaWp4rHhzf1G9jNhXZkFxQtCNK175Wv1kA5L7wxRfxYkXGWa34TbgmewUJ9ZnCirqH6PBw8PHXSyr",
  "key37": "3L1VNhCbTRXcioo6WjbjhUCxZAH2gsKkqT4Ameiyy8NFhLDHDWT9FrgYxDgBKJteB6yL3946P9BfxdVZuoKqXc3Y",
  "key38": "3iRshWzpdRSZfmtns2smPETmbt4dsB2CCQ797Cx6ytGdHBGPbMPwJfVt8L98oCznRyqzX6RsHo5NUrePQxnwHr5r",
  "key39": "3MYp65LeNWaXZcS9HAgrb2CvATiVoz4BNvDeVP5ZqTieZ58JJ6FvgtimTzNjmwwbDHgD6chWHTks7RXHmQXwxsCu",
  "key40": "53CB83byXF1L2j5TjtyczCMrZPfM1moqJ92HEQzB4ofqcxPZR7QKv6nWrWB31S722bt5ivkdZoGsb3QN6dxuqUWZ"
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
