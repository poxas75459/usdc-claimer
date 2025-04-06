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
    "WgU2zqbdGVmVKoBg8V9TR85mMyDbZ48hnXPpvuBCczjmHAh63wFQ2uHZv7TVoiU5X7AoEvp6cF7yrpdvszMeqt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c47RwQXUxEDw6uirhMbLjLn2dZi3o9VRKWsxZFmUVtxyJp6Yf4BBWG8utYheZuNCeA446g7SsR9CNTfWWBetuUM",
  "key1": "4ecA2aQfajBbwWAYN6u2nBPv6fiiqSCZEVThmQpq1meiGXuGLVz7TLtsWkMcZYry6mhUcmDmnSCqsgV3FNmSGbv1",
  "key2": "5dK5iRBRAUHbZwknCemksMWrZNQMkBGp7AGskQ6SdqELkmxrN1KwyutceuKZekioaE87chvPrDrFdu6TUUJnQf1e",
  "key3": "2mNmxBg4T4PXWsQ1Nw4deRsDHvRvE2Ahhm4HuwBf69c26q76PGDAJaMH6absbpTC3cLrXnoqD24PtSxkGfkgneut",
  "key4": "5bBxuKyAszfjcw8qscC18ptif1vZm5ebYXsATCKuWaHvRXN9JZxek3jY9pWy3buTFTckTktwP3mfCzanpZdiXEFg",
  "key5": "5yA2uuYFkzDu5HAPzNL8LgqN2bFKQ43eMhtfhYWP8oQ7jfiJojGjN2Ng4ywXKUrCJx55X6NMRdKJX6AqWvYzHrsT",
  "key6": "KzokxowmDGBd6USbqynBL73LcWHeo4UpogpZLv8Nt7NRpaRNG5tympEzbRxcVTkdhJZLS5L79FQkygvLDXxTPmM",
  "key7": "2hQHpuohT7Q4ThW1ThXuCJU4MnovZtMcS6GweFvKatTG5mVyzmZM6a8egrmsZ29WMEX2eUPdnyqE5CJvyhBr2kib",
  "key8": "3HNcVXiCzCvjSnqiYMJ8whvAhTtvVeqhuqeXTEdYGcey174hyji1dExKeGB5QgAzgG9t4H47Kho9LxprfYB2VYYj",
  "key9": "E75SCfNLGTNnMot9QaqhdQULgXT4sgjQheqtnF2U49nYajPc9wVxZU1u6uZyiz7FsRczzNV9sNgbE8VoFx98dfZ",
  "key10": "2SkMriH9ZiDUDzRKYkwNP1Q5uBWhZx4RAHM1oqrXpRVLCwmF9FD7a4Wxx2Uu8gHy69JCFDu53nGsrwjy812i6oRt",
  "key11": "5FGusvgZSBFeCoRDmwwztyHg1UVfiAqv6EWzcVPiCY97n2eHSKwxMCMWKTsN3Veg4nKQnZ8FUfkJ34XbEUMsAE1Z",
  "key12": "2jPdgcXsinPGQ8D28eVf43bTbGdHtaq4ZajnDLbFVxggaErbC7RTbhXb2UUpRsu2RiZLvLd2Hj8naVcgFruRCrv8",
  "key13": "56ZdCARLEeTu6L52rkHybA7FtdrDrZE9JHSgyN9hzWZBMzX3dpwFLQpti7npfu62iG1a9XdtBYwWzjUdYQNFqUMD",
  "key14": "5xUBAeiGyXbVvLtS2oh69SWBGFUAQfVHd4cSo1DVta2zf6Ws2WzH2oCXvn5WURXmfsVqNaedbGrjeTSxwEy7KdUf",
  "key15": "5L4CoLKPRWwUMyetyGxq3MxhfWPYJjqe3ShbKkAFuqhNdWFwJgqhRpBG448D4yrPgg3BL74nANao1k7EYznihAcc",
  "key16": "3UoPc57iHYG7YoD7bvP1uCfTFaDfx1zAXjJH6pXiftgQnBfoRDDbSJgBV1gXfsg3MfBxPjAnKdufHW4QSdfdvc6r",
  "key17": "4jRUQnAKR35j5qnq3afzLYW3gKHpc3Axw26VSRB7zhnBnrjeRcSn4qsMoBaJu74ixLqmhK9wED6CCFTELJ3yv3Jc",
  "key18": "3CehkNPe7k7jtcbahPYqG7DypBW1QywsAVnhnoXkxtEH6xE7639sswPGQeBEMasPoLH9J9SH4MPj4YDFM2f93ApA",
  "key19": "3qDwBocDefAqHhC5eSmtHkrSX4cPNBsgN7gjWeUZ55Ad462MRUN6bVFTA7pM3mUZXbnKkJ87Sp4fa5vGBGjSohGC",
  "key20": "4zQVfgrcD9oYdMMbQ1ngrQoyZpbU5hLfAvtUP7wnvAAqyotMwv5r16tPTiJNguNYgBs8zznwEwaqSVenC3UvDNKK",
  "key21": "2BQzSgcfePMDpxTD73bAC9nHzFsyyXq9xdVAFMZ4QfV6Ssk4u5j8WUwJBnvbxbmS3DqSuSpQFU5LrKEF3k7FhJwb",
  "key22": "4Q7wCV3WpcBSw9o3UruhV6Lmh5phqTSfiFEQaCvXJiUMbYCebfsVhduuk68mSVsxhNTRKB3WsEGrJDKyhYMafXV5",
  "key23": "5gSNbBXiosSAa9FxZtioqXRnf69rCnkyrMXjyYQdAS7BWQRfTdcubKZFYhhFsXocVTCCjg7abjQi9qUvFvvd7Y8b",
  "key24": "25wzhgrSfr2xgkSogD9fK4muNZMch2oEU9wfj44YN7TAkWJhfweUsSHDATn6mq8Z4mQxRUwDrMFuPhmCjTRBrgGk",
  "key25": "nPpLHTj1C8rLQdCvH4uE3GvTqhszWVqm7i4pZEL1Un6m6zREQvcUpWMDKovhxG5j8YifdGZqNdkaR28jtCwp5pj",
  "key26": "3QiRgLkn8SdKAJxXzdMr984TruL22jM3Jd1mmXW9MJ7HUQkfxhFJ5niq3NutoMHsVshMkzrhyKMNuzVZLskQz27P",
  "key27": "4bbuyMf8LPXqDe2QAopiZ99UjcEdJhMHX1EY69QjECTy3XziPnBz9AcCXf2azrXPoy8454xEe6ut8C3r4TQeCSNh",
  "key28": "52RddRA44YoCeoCtqz7wNEJfGdPw1MUyb1X81PCDxPnDnYZ59HJoHfsb2TKyGb86esqHXdE6FdFRXrRS9k7kDdWB",
  "key29": "RdRFKqr1tTNYisk7T9Fn3hLuM3DS5wqD4wxdJChbK1uDRP2dooAvABuW3ZaQXZCK8S8Txqqz4vVWsqZ7QG358qi",
  "key30": "4AUYxXoKHPdZEBxMEnsQasr9a7AKW8e5bTUsu8tP3xyey7VUtq9AFakPU93Y4J9Nxbvdc1sPxGbJBBjtnZT8xC5v",
  "key31": "3eivtmdDpwCJPafYZKjPAMqbj1fxQdPPccxXyXjZcNs5KFviLFiMn3Ehdo2QtABWYXNYERsVdnnmKi4tDVZ4NpCY",
  "key32": "5o3pjE7mVdTRmbGV4bZt7JFHPnvcDaDXPjFCrtvumAMkFDbu66tPpdahH3fXGSA2FMg54GRdmjTgaJd44Pha7zdw",
  "key33": "67DELTjeg1bYrdrDQp2LkzFqxE3QB26X3gDRh2u7kYFzsnF7uU55uBpUQzJyHEZydWwnTkda9rdEHES9W1HYQGJ6",
  "key34": "aNpYcUgBhsehPjChjYChNHWsHhsEQpMjRXdwLM9DGVmr3GggXfTtqMDJm9JFCWwL6Gt4BEcsuW2fVoSVyFw54se",
  "key35": "mR6dEHw79Ym2ckzisDU8aHg7fntWgDDPmknsUpNufRQRcKmseYmSbKUCq7DdvLFo7ZQ4tPCtDHW5wYGsUim2y1o",
  "key36": "3eeAhcmvhJdEL8kc1GhuFvsPaeESzKBSPFgU8BN6Y2t8EfPLjrxXc7TL4KPZd6q6GJBg8oWZYVr5BGWirEgyytBY",
  "key37": "36aGKa6SPWLgtcgucjWqy3aS32QHYbLjYyAPh2iMYKuu4fpgEBK5FnZ8C4S97QSyVvomkaaBxPNjgwZNsL3nKxXr",
  "key38": "2hhd3UafuhKkLXUskV6pvbYXZ7nmxnaYD7e6gUMSjPoxnMZy54SNT4zaMhQh1BVkVQPVJJggBGojW1r6d3UXs534",
  "key39": "3oVVszLbNaxG7gaZv9SmaFjcs7wVEfzCcQ8pWMRcT3z6uAYCYPcVuhuDFNTERopgtYXKJWFxZmwA44zyciJPEFLK"
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
