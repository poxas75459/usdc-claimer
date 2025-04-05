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
    "4TXjjoQGXi4wjEdwhNrLqvMzJpUZsdfV3cqCi8ZvyWSwtWLpxdbB6zRTwtWcszjobpBHMJtDWWvXtYmiYA68thNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35MyoBZfipKU4TF9qAx3QTPzBYa18zbwo9aAHHXB47uVqcXJEA4h2G2P7RkCxHjsDJpKoNfvvAUuMk6Z62fE88k3",
  "key1": "2NUDeuxzwzZNDsVQMj8FTJn3PJG2oC4CaYNAt7MKzLH5pUi5i4F25ysnjSLqP3cXE91J6zLf1izjMyb83ePGv8dF",
  "key2": "PrEGgYdSjoJ8Y1euTTHn2CwbpjT4wBM6SoAvrfV26EQ5SsECNYrmk7WLhaL7CYou3eaG4pNCvJas7CpEAK5RyKr",
  "key3": "3PAhMMckJANZTptNZLc4QpQd7rskM88bu4xyGP3QpYeKQaY1zdcvgGywfsuq21BG7R2e9r1uPpx5a73chsxsaPLW",
  "key4": "5EZozAbAWDAaAWMzPkLhTFGCsmQSXaCt88qZGWyLHm8MbnQiyEGykdcWU6GfkLsvaWxTPbBYdyZYjMRdpF99mRHZ",
  "key5": "5Ja9Q1Q5357MAJLspyLBAXNimftv28Gt9NKVDxMBD6HRKeoiarXN8XixZCpKR3yk7g5P1RW6Dsp24BZ17wnwmiWz",
  "key6": "67MZM12d1mL61jiUXJjY7VHPTwnMZHiH21KEAjeA5KN4bDqjd5jNuGW3mwd4U1Cb8ytoxoaGkcyMKbrUXrqSdjoV",
  "key7": "4E4z5BZdAMv5SXYjBENbUja1VZjNK6VPc5VsP8ydPU6i7Jr7FCAU3ydkTt9GuRHXe9MqVBNZMBzNiBNWyiF8krxR",
  "key8": "24CQEpxuhumMLoTXTWL4gUA11NsSsmQsyFPMj8GgNUueDJkzvZP4SrvT1qvnvtyT1zz6rSMnGkaDtxTUQ39Bw5ju",
  "key9": "Rq4W7sRaKTxNsoGMwQozZ8bHsX3LXDXEpYonkHMk4yh1tm8CMRqrLVNXPL7ZCWAUwym8Wn6WsXeXSigHCjXZniU",
  "key10": "2nQLuWB4C4Jwo7LSTnaEpAkjtGHTJp7AcTyad6LsHfFbaKepZiYxd8mkEB3KXtsKwbxxCr9iHsXf8Z4U2kuPauQT",
  "key11": "74wFsFefU43fBMxrTWB28K2SPsdjnaZEYfx24XjCYBb9EfTpUJLHsr2iAetMLpqZT9jZLmXFXByrPE1keBCe7VP",
  "key12": "2BntzeQDyZBAR8JbT6JTxnojbXb85LDBuamVRvGZA5S3wN42KYQoEgS6zcT5TG4DeoUjXZztMux8HE8ULE7hmYf9",
  "key13": "yunAiFniznPVHu1PkTCJ3ifKuQsyGFYaTEkXTeByJPYZK1r6mCnRrAv8iJNrULd32fDYKWExgfADKJAZ37mA629",
  "key14": "4RuM3XG9ooFgPYCnXsemj6M6vvinAmChurRmUDB4B2iFNyYCHdQaBJBcLfriTUq3if5AcPUPepmR7R4RJ1LorPoV",
  "key15": "K4prQKMxBpcgjL8jBGijeXSGYdSQPrbhoGpcFZddS2riK192CqfWqpXotHwFYsweQKfTrMmtx3v8Jg3V6dfyzXG",
  "key16": "T7wNow6EYMHKVwGpQMwVHq3gWrASycBTiwVGYZbvRwTPudC5QvPCXHGAGZnwMJqFse4Vkf7jRmGccWDiBUsmtpA",
  "key17": "EnwLv5V7VVsAoyhKxtwncj85BcWqseDy6PuEWmeqQhc29ETJzMHdXk88SbCJxUvvBkmB7dEn5PmEQRqNwk3fD8t",
  "key18": "4RWaHLKVrp5D2Jroeab736eoFzXJWX7UHVo1onXL2jUeCRFrNuM85z1o6HxACipkinnomXwuLSjXoH3WdWiTyxoz",
  "key19": "5XKjZ8oYwpHqEWMqbpafJUuGaa8qudKuYTQ1an2YwqSb6qbejsdorN6XN7qkoEF5bWTURaBLUqKB1dhxy1x3wj6V",
  "key20": "3A5yH83YdfKxi74rPzBFHQBjtkYEQHdU6Xy4UCGDZSEi5wgDjHHn9AeETDumdfrtnUn7faKSm4LR4Pb7p9fJfxeW",
  "key21": "4RAS9AinGKwUydf1wUbiKCa8YR41V9yLbNRx4vXgFaGVLoGWFeZo7h1tSqtkZn898Hu6F9jEP3gRFMoCEnoVkSc4",
  "key22": "43gPnyG2gh6RXNzhzAPWKujusi97hv2NhvVvKvBSYGWKjTtwBW9zxAF2Cg1J4MKnAzGSPtvue7QLDqTgpdXvENgj",
  "key23": "5rWBCPYLvDGZwkiPkvA3g7SJf8Xpg1VYvbnUm2DL3TTjthXe72QnmEdbA7kt1DNfm4rLCQ3ugo12DHAy1yPFXfto",
  "key24": "3iE3SYBXERST6Ck2QscSeuz7x8BLLa2WjDdbQij2cZrJMoACn1QL7QGaK8EkLnZSzh3K3kHeNJgKn5Msyci6NN2y",
  "key25": "e9KLyN6whK41c3a9yp65WrgvaKjWTFxqi7LfsujK2nN2MYD7VSijsUNdGjGn6pgv8i8zsUmBsQJG97DjRLawoVf",
  "key26": "4Y1h5Wy5udBHbYhVEgxeVUZbW4L8C83eVCbwTGQDtZW9JbEiY5ueG2oxTTR6j2dh5RUpaxa6ezUXrGspaUZtGP9Q",
  "key27": "3SMT8Xyz5jPyi7PazWqt5wXdHeSBEs1H5UhqsYDfRkXWQaJsWgbD3Kq35dJjiugPFZEhq4qsWbLJAfDK8e7z7yDw",
  "key28": "42C1VJf2qrhGYg3jfV3mm9cASyBgT2YH1g7iMFpE3ByumQpfqQfBqSx21sA1Y4R4BbcNr7LNL4UBMotsqMgaLRvT",
  "key29": "2twbYTAWdEnzhQQkNw5ZFrM6vX7ZHVHRGRvCYHaKXY9d6EhckvvnvE8FPb2uvJHhJ6jSTcnj2gkVo3bSoEf2qpKj",
  "key30": "ad3TPkc4odCrHsCkvB5aruNB827Cnk4PXXoUQw8Ax1AseZNAvHw1KbzgZFLDXaDF92czZjjuKpy6b32abQR2hrM",
  "key31": "4c3j3HT99DQU8NUvVN9U7qxGWKPu5TtNZH4A7orNmmBNEcLeNjDHbtemXhm2KddSFM7AgXrPYsKi5aTByX2VXYyy",
  "key32": "5A6mE1DEbN3auAKVtvKkP3AYTcDSHpnvWun79vK421F57hHNqWHu97wmnRzG8ozzJ4b7xkGxW7V2qWr7qPhh9w51",
  "key33": "4YKYFj7EGi1888sBXkJ3Wn6H8pkmcfD6jwETmx7VMYVTwNowJSC3rq8rVVFXtA8Eybod3JBzkA8fBgaQsUWenBeu",
  "key34": "4zkGenAJykbaifaszt6jhoDAxExEgh64K6EnXZVh3Wy8AP3qXs5xCfWNrjQB95iN2y3vuCZR1KjjA3Qztxhp2tLK",
  "key35": "3s1wmSGPuWdQ5vbAz1WdvAm7AqsaF8Z81rvGKfudtuq3TVpQqFEk4WnDydaJJC2ShEmpAVsgLXR7Z76UxcfAHhht",
  "key36": "2GhNqzqZnVgAVfVbkBbToo4CD4XUJ27G4zkaBkq5LzKYkTfvJvcHFBVu7zP5tjs45yfZMXVYqBkVQuxwUnBENm1W",
  "key37": "2RspatodccRBV72nVeUXq8M3goQoL49KCN349Tk3fBC1TLRULj2tdhcog2c65tF6rPPZKFyjB76XqxCeib1cCN4R",
  "key38": "3ekch66CxyVvZi1ZCWmnMu3ZEdH5ZzCqd54i2yVnF5PjCmheVaGYpsim3pMTffWziQaEYzax27681uQ344ahn3Jv",
  "key39": "5Th41NzP9vv8Znsmdn4YAWUscWBwRCdF4fCFoMkUUR8CfnWTVDtRhYdhiWYMzsiBBjK7X7mZUcmZcVvwpGP8DEPc",
  "key40": "3aKVQqijRwiYE1eaXH7PfAZVUzbpZ6s5vmzpVrsiENJZsA9T9m2VrrVgEtgkxQx6kGMay1iqrMn8LGDD9pk4XbN8",
  "key41": "2zRWVtf2M9HEUyeWgdZjU5W3Y8hJY4XdRyaeadNbtgNtw61AGxkYohA2abCQSxF9V4DRFJ9vdhaj9cbwrND3aJcz",
  "key42": "29hmg2NoYguBg7bbza2cEjeaWQJchXZf4GpN6LzPqBeThbXCZB2KCZ5DHHmLgGqcmn1XRUVhXsbd8gZGsnE6rR7c",
  "key43": "5U3i5TmbAkqg3f7YGDnKcWFDsYFtLz2pkDVuPH3pwCgg7LabAJWtwwdy1nfzgS55uSUPGhH8SVtJQbwsPYQgJdVA",
  "key44": "3stRMiHxFpXVono3Nn7AYcPchShWM9m35JuZ7x7Tt5rqsb6TamyNeZmE6qy31Nq3Nw3vNqqEXjUoGKHw3gQJxrTe",
  "key45": "zvzpNmNGXqV4iCTHJQ1jUb2KnHqtuVJBv7oFWq85zYbsgEUaaNcGi3ehkvGymGzG4bJrdtkBP4yo5k9UoVDp8kH",
  "key46": "2GREuCrCvd9ApVLy4uHd5HgWeW3Ycdfoy4jLwBywsAr2uQifYrrbtQanfMuQgRUoZeqEYJ581CnT15Tva9fSXreQ",
  "key47": "3tRgVjTkGVD8KP7FtsC6KnJ7ujRfzsXqY5DiCVrhRDv8e7JsNTPEvBZ18A3XuUGNGC6ZWySJtNgD7B2zEKgJHQYT",
  "key48": "2fCCnFrxKwdWN9wZJ4RR2wtwnZHxdo72r4FthyMp6zYH1Mm7x3DTC2t7un3mHsMD2eGJeyg5ugKMmhzqpDSkaVGF",
  "key49": "4iFPA2mhMAHu6J6GkmxKZVxrHaJbgECCSJ3DKPBU8zDUTR1fUr9qGA7EWqro1qwnsfoyYr4ytEtU8wAx9aYC5uus"
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
