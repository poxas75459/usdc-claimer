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
    "VbofxBJ4jYNKBZ9B84BuWr8UN4sLvRqmBzE4ncVUy7wEryzfamqA6WTEFaVrHJvF2zbEgXAdvqsfggnDwUABzDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dP4VTexDQZARFVBPbDAT6YbTeWCnjcpdzovjoUPm9fpThNVowXGDmMsW2xjsEj44kGK9p3ivvEP2VDKz3oHMLU9",
  "key1": "45joqHE64eSujQqUCrBtTiQmsPw882XEtamND1woTQi8nWbsEXFz1h4STUK1XxJjvguLgj2rPySU3HzTewSCDrq8",
  "key2": "2DEHfwpUNhtYsqicPNPAhMpFHgmDYm71gdJV5wMPGTxBmgoYVGk4ajWfyGEMCHDJyMxh7xKzbanPJZMXjXxn1JoA",
  "key3": "aimcSrM9fjP8SwMeHAKgUftepaG13ZTmLf8imncAkDQKoA3w6boaoroQbrxaHVnUbTkA5NnmBJFpmivo5HYuWgM",
  "key4": "5EGuJ445QEacjKwJGZvTeuKgZcj6b5DuVHznD9pF4pbyX6HQQRgCFA7km4xcctSnZQ1K6akoeNsktv74FMzAfHeQ",
  "key5": "mK5CP515oSrc9AuQE4ZskzAwkzrnJEoCUrCGxGb8ZhaAFXZtZTUdrqFbkhfvVXKwqS3xJikrjfs6yYVL3sTZr37",
  "key6": "3LEcT3Ly4jxxb3AJVMadYkNJEPcdnLE4SZx99EimM7etg9dJWwhowDwkmCk2yjkeu7pZEVgv8p64rj6NXM9f42fc",
  "key7": "5D3zZD41gDGLv7yeqghQxWYvmkXcPj2VjRrxn2iXcGhiLMfyoWSDv5XLbqyhH37VtT9wwDqKCdZ7V8H4sfnYQD8T",
  "key8": "5DVntmzciLeZ4GoL33A66odxC3mdqC9acGxHW63nfJjVyEG86RcAibvPBRtST5U2u5Feht7prxHKcMT2gazfTD6j",
  "key9": "2X4exB6vr1oYRS9ynPszfygZ5uPZ7sV5cnR5HzqzBneuvCTPhErkoqQvFtodnMd2GaTbmSeB1ubgyw7HrSEgXLmJ",
  "key10": "5LusSK5fTy75ivuqjarAzURh4Eq6Yn419Ap8ZFCG5VxMGCZdoFojgP8QgHvoDA1q4bpzFpti6nhQXngY5zJuU75X",
  "key11": "3UY6KAqrGcvUM4XcEbxT56fEvPF5Nz1ajxnwY8gapcVc1zcBsR6QvDk97vZ8f2LG6jpbWj5QoSh8DHgrh8FrLcLK",
  "key12": "3TtMVzLBX59wp5bcbQz6GZ7hqwVm2Dh9muzpS7Z7PKUfLSsogjFkXK42uyVCnhTVwS4hfRdTVrxmqNbc6pXYfV2z",
  "key13": "28Ja6C8W8uM6yrEnDePYXYrusCfr6nP1hLrptPF64CXWNdSaz3xZGtZbJ1dfsmLJUyxm7An1hCE3JLtKZGisf4qR",
  "key14": "5a3zzCuaXRxeQ6XRjfF176fsLajr1Hpiujy8pfDXSVZiNMnocroq4L2z7oMEzBi6sSFXU3EBnrCLnZeJdJ4yAhee",
  "key15": "v7mHXrWojbxcTaMR5DE5FWjYoJKrWGHNGQEg56ooNW4E9nNugaaewn7Hm8KNMmZqPqnGDgMbVZrcn5Er4uckZzc",
  "key16": "5PcjEAeZuA5rk7iet8AA7Hk7uXdYuwEPLLxABUEiy12sp5zbnJzP8aSAHSQDdWMHCSo7rBHedoRzB73MppkeyFYw",
  "key17": "62EQ5F1turvpd9RCFudNAYLHGbnnqhAhCpAakgqs5wMCU8mrEZAMhwDNewV4ws3NhJkkQStcG9XxAEoa8HcuJq76",
  "key18": "2dAxpatkPdxcWpWM3NhQPKE7RN1frMH7RzXHQXhKbXzzAAxW5aVQg1ybWk7TXZbk8hMhHKcjipDBRyx3jxQPnNqW",
  "key19": "2JNLWzDCxDsQSrCr8ZZ2V85fHBLvH1CxipjZvrDsNVWuWXL32LfRKF2qybV9Y7zw6o7QEcZeRuDdeS52R71KgVXC",
  "key20": "3y7RoqkgW6ZFuXArphv5XyEEDbX1AvhKhDo6s499XwSq3xLmXpsXdN3b2H14kaGqqRYqQRQxoroTvAR9NM4DbF7a",
  "key21": "x4i1VsoSUbHxivYEvqe1kcrh4PeZnnWGU1mGtkYc5jTR6ea9qsE7AXWvJrJhHhUJguJqmsuzLNvErtPtb4PDie8",
  "key22": "4H4N3vjdf4hZerd42JUEuViPKtkjmkdKq6C9V5CmEJ749buXyp4zUaF7jJefyVJ1CX4gnVk4xPj3ypon8kLcHiNg",
  "key23": "4qZTqKu5WGjzFxH8BbNN6gBwWm3Q1hRFfcwctn2qdRiJrmyyaEtqyM8H8hzAayT5FdJHJduv9dLM8vaDYMUMymi3",
  "key24": "56Wwscugr5YwNjXWWjE8qYrKZLECETtGiC8KpRuY7Ty4EEKhvvaZ1ZmmgZVVCNiscEEBFd8VXYyC3vCGgMWZ2hNW",
  "key25": "44jZsKZ1wDH12m8VDSzsrc7ictbqcBHPjGxyVV1ZBbecX431J5vpV6eysPsfSPJkeYWNjPAkxdx9ryfYwun415dP",
  "key26": "3f36ddQrcV8A1ZXwTCudDymzvUKm1Pe5ZNY1svDph6F9nVqqtXmpigjAYi94oaMFZ4MBZNxe17XK7anF2x4iKits",
  "key27": "5bEUFdJVGgueb7v7iHgFHwtMTvgtbNugZEQhe9ERcVZkE3RAvnDL97ZJhfW2cQd9fdpf5XRyr58WDR29A2rmheMw",
  "key28": "39Fu7sTrdr5mfSgrhvr4F7mbz4jFjH2JUyDD7hbjr81fxtUrB4N19XU4fSeoa8Wnb5xHBYSKE8q3zRs4cb4LgpPC",
  "key29": "4XrdwBLYmLgT8f3ydXjDsk2Rp2Q6EfKXvRMGMEwQooEM1Nx3ygFnCkwnYWzTyjAhn94Y5WNQSrt5uxVBCTVK2Xn4",
  "key30": "FxQsbd1WxpBkmXBPU6UPYC2dU3ToWUeqB4sZfxQWUydSnDakdBjkYnYxbeGSrQF2eLf2czRmaBXMoWGqHpEmRo3",
  "key31": "3ChasyzNQ85ZYSEkEM5P1qcwGWrQFedNq7szgjxaJgAhkb67BMN2YS9WRHBcAeNvrrcrcjdAdcQwVEQ7h8F9b1an",
  "key32": "5bEpigrTP8GTHqUQHagJzEjkpM1oMQ82p7Sw3ERKZB7cxQZ3A6Y4h2BkdtHxjqqTgKnFPZpWrx8evPrXY2hPxmxg",
  "key33": "4s3zNmGJvwdxkiPLHMsPB76at1sr1xeo1qJ993ahQuVTQZjF2onVu3MZnXSiQJNLJAs27f6djQ8KVbVHpwr3mtqT",
  "key34": "tPW9f7v833TwwKp6zNXNCp2osrmteiyMFpupH2ZzK5TZB1RYHrTdJepywk1fZt8ALqoDkx5n7vZN2E2u2m7NPZG",
  "key35": "5Kee2McMLnfgDcxDgq249WsQJqG9wfytL3dXnT1tXdaVBiEMuNv9FF1UP7TkPRaqT3yr512Prrsf9sahVDTvEQS6",
  "key36": "64tfpmMGDVFDjEr6LbwwMLiD5WhF4DYgHR7iN2yrRW5tnZFVEfocQMw5mT9WvrMiw7T8Ld5nybbQ4pfmPmo1uCyA",
  "key37": "3i4niQtFC1gvYQiNWEQpjZ1FGa3EgPCMXYKMAx8uX4Sg1XpTzpQi5ZzAsKJ9qpJPFFtw7da9U1ehwm3mat4s8rQ6",
  "key38": "3swMp3vdFh1ZxV1hZnFRQXEhSFBfJ5XGH3bW5qK8VrtMPNWotRJvTkWgmqqL8PegY3TmRLqxwqAbgge6FSwY4TC9",
  "key39": "QdQD48jWCng2SeHQA6sya3zSuo3KmZg2dzdUsEhjVRARdHQNmw6j5Ye2SoDS9smetrSJtqk8qyDisDsjrgs9heV",
  "key40": "BL9DZsBkRSgtU4Z1YKpXcRW7rNdG8qo6RWcsKkRwE2aT75M6ePDK3dkNDFfSLg24TuDjhmPfqtEqzj926vdKtaa"
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
