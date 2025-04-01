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
    "2gJ3AodbwZUwEjMb9iiqpYD6kMQLfkAtAYcfmS11xwdaujRDpyBkyyMYQeCnUeaLfoNCKaoQkwqG1aUUz5YDxqEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "biHDLDFvkanTxn84rX9kuUenFuG6F8mUvMSmGndnrLY8a2xzt3GWqUqE3L5xdN7HhX1mFe58Vu2AqML92wuAfnm",
  "key1": "3nd1gDdFoaxcxbgw6XuzozbtrkZU9zA1NB1g2d1Dir1yXGZcRonbAk6geQwGHu4utHN3z7Xoey5ejwJbj16FtoYZ",
  "key2": "2Yn5RtZrsVxfSCas7Ng7PkvkvMBif29vaRy2opuZtwnZNvXXYMWn7FttGFKTWrZYEwHJfCrw4uwfqkpXMoi37JDu",
  "key3": "3Kg8NS6dStQ2ffXkqnKs7ZNVbfNRTbciKvzNq6GBJ2GoCEpVfeGn7UVo7RnXjHh22GpR5bStXtD1nwX8kRzw5CYh",
  "key4": "7uZWThdcSkRxcrsFvLUuvGAHk8pfVB2ya7gyc71EnjvfhzvYetW75Dvvw73EsD1e8KdknmKp35r5RnYhy4GvMn3",
  "key5": "pknHfARq62Rdyj4gvCKZAz6GpjUgtqhFMMAArFtSVtERTtpsTawVsnKr6geNJ2M6GU5CgGaCHwPb2GitKr5XA46",
  "key6": "2s21adGEqnx63k5qLpoVBiDhWphvB5m1Tte9jo9uaQD7AnEkzT3Em9GMuZwGBdLFVBQfHS2daZME6MbV6bacwq5a",
  "key7": "3QseK5hVpARM5V8Dkut9auqbHNfXvya7WJxvHzCLXDUunH7B62qKSfARTxWFFdya7JYLdRJbZJZV3sg4Pm6tHgdu",
  "key8": "4yayzP7TQerjYj3wMtdvXVR6qAquvascih4rR3wWoPT3rE3rvpyJEej6jrPFGJczwx19Sd2WKNXaSZaiWfinkRwW",
  "key9": "3tL8VyVsKmXx5LqUN2jXXogfEqzuiGPS3qUSGPQ6q7pxdrqvsU9ZqujjPARSCMs2csgZv91tsCARHoiZD2ey7rMV",
  "key10": "42fq2Tkw6CiEFdmTmtAeidNipcs45PLjLYddAQFbpvkAooJqowtwaRmeaRwZrwmPqpezhx4uuscLW3ULjjvuiCna",
  "key11": "5tgrnMK8XFBr8SyPbFZGnEM2KK123w2qhU18Ki3UhBSit2yTqpBBxRfWHLRp3tbJSf9JU1vEzonvso5Vn39vNHVZ",
  "key12": "4SUw6iCC3z3LSvmzaZh4KrHCqrEii9pDESBfcA1y1Eai72BSeDhTPe4gz3vuipqMmbY4sJuzk9z2Jbfch2zkrNps",
  "key13": "RpWx76CLzxoQ94acUXrMeqpU58jSD2EB7QX9uZbKfwEtkUnVfvgjbBxNSBxxynG3CGyYP9EWMLyV1yf3SMD6U1a",
  "key14": "5SaRWuiKY3XN4wRGwNrLXyZP5n71vWbvkuT8mBpwgQm3raMNwaXv6qHkEzw3h4pGJ7CwnFAr9j6peJa1n8ifLaPy",
  "key15": "3o7fbhGhmoBT1cA27NL5gq5FnYPC1U5rvo1awNXqdQA3bmX7yFPyc2MLQGuxPxDFzJSQgSCZDijDQS4P974UcZyo",
  "key16": "49hPjMvVoH7SAttuASYYPWUQZoFGkyYuH8rrqApDUxmAArG1ezNfPgaU4yYFUmksWsfZJrrEZEzGerhqPTKKCQop",
  "key17": "2ZFkUnSX7Byt3Shxw9B9srJRbeLjsYq2vF5gJyAVY1BUo3gkCKUrg8xSzH9Q8VAnZVtwQRrKpwuqaU17dFffp6m5",
  "key18": "5THe8DrQAdBdSgYyuJex2mUXqQ6LVSjjXystXUdknNLpsBEDbfwqbsbYQkAX53NTTF2AhE6vtPSywLrd7SdYpfHk",
  "key19": "4bX7f3Y4CpAUEFcJmZNq78WZQVDrefJXiYrQP8qFjqfcPiTDPKJQxvFBYfNWxtBd98DTnZMWfXXa5ko6s2K7nL4H",
  "key20": "3F8AxhABUcQ7sBTQgjHDzD1V2vgYXJY71Z5ynZnBxWTQ2Hb3zCANjYRP8HKKHPjK58VdVBhLvWx4ZB2JCDbzMVfk",
  "key21": "2HzPGobBH7fvxdiBQMiJzprBHLPQLyzD6tUdfhV7BmcURm4cLo5aLKAhLhxyYJRWUHkRCBEpY3nZL7PBkFHBNDCN",
  "key22": "2iuVw7tjibtzkLUFUacPcVcGEKL6zSXabATeRi2Ya3wNx9EAAUnwM8bdbBbQCNuDWn5GknNN5WManGKveFqFcUHJ",
  "key23": "4CdUxtc6z4iCaVnZkuCgTzbnh749kLZjMFg5ZGTxmNAHSBnDdbTyUnRoYA6nM7TrHEUmXTjne3imzHG1ZycFseTj",
  "key24": "5KxwgmXe6SgnMKLQsop9jjExgKQTmAGeb92SkxJmU4LYGBic8xnFaPxMEp8VeSpMig17DTUzgzzjgrknAz8fEjn8",
  "key25": "3wNeBzoMPb2dKZoP31T4yupYjX1UwTJmTy4cwg6soDrPuQuLy32ZXb4sLdaR33F6RGNkBzA6bCNrnC11nSnpj1Fe",
  "key26": "5Vh1skHAZmHaUwx49cphcot3A8HuBR6dujpgTDf6sueGVNBDTB7FQqriK69j1suZb7sLcyonsmVupv8cwXk9aSWa",
  "key27": "vEhXbnvprBb3DhBbevRsWXHRDC1RY9nr51E7hi1v5jp2W2CnYNz5pPG6cu5Rcbj7rMa4UA7nTSGgfAP5k8jrNiY",
  "key28": "LN53MUpaP1tgUVEP2Nue3ckZebhm2sjQvJ5yDEBqc5VRSbK3DHAzPJhyrUWsSZFYa5P6mC2KtnQQ4BrjjaGVSQG",
  "key29": "3D8h2hsGotWqWBUD1F1dzb6L7enYfjnScHZghCeVpcT12KwUtCku6gWaagjBUnNmiNRFymyFj4US7JiPAMu1becr",
  "key30": "gviTBYamJVDyRtuQqwRCPoG2XJuPPiWyXPm2WPuQRZcxXYe9ixR4gUzw22b7XmsifbX8WAfccToCnnAXgqBqmMt",
  "key31": "3muEXiT5ZpGhUxRjVjj6d9SVVjGV54CjT3k4M1y8GG43zG6LsacGd78cuuFyXn23mpqSJ7PZv479oJF7SUQq2XRe",
  "key32": "4zfeKAVKhXTw5oNco6cLKXR9Q6iTUMNrntN4qdsX4mLzd4bztyX9G56nejW2v4EKaKv1WYo1xLV6AVSLFvdppYa9",
  "key33": "29v6fsRVse1R1F26k7xtHPPzk4dQYQd8D1Cr8iKm5JdEWieZ9ACgE24gzek31ytPyHfKsMS83ksh9j6f6SkArStw",
  "key34": "3tZ6YAN81UVDHYujkZA3d6fyY8EfCDQHwitLDgni1Mvr6ZBkKJZKXFQok8cevdhpfDdi1v29zUhbhmf1BKjK6dGz",
  "key35": "2jn4D9EiLyXeiqR3XtZCqjsEW2DYH2j8mdby2gyBYeq9d3WoUrDP8o8XdeHg4t1xRhf6i9sN6UJe4kqYii1oED3r",
  "key36": "4aV7U8Gm2Tdj5iTE56Jn6KwkmQiCkAPUJYVbsZaegCdrQ3fFdBXQnrq8jP2bHWfvSqadDXqkxAAnYmn6pQANqvUq",
  "key37": "5CHkQU5dGMfFnkKnhHYkw41mD9hux4qzM1wjUBavpoUCbiWPmGY6k9wELsdD8FWciUzhuEfYagTqUU9dqxRhaQNW",
  "key38": "gSeWbQpfhqHDmgCMk36FnWXQR4yKRCK1Kcg5Cm63PuSWhJCbGdFNB2y34KZAL6w85ZRdvUbmh8nCs3YPzDQ7EDE",
  "key39": "2WgipZHNtkNWMkUUFFnmEf2JhbVrfstMGCFpeweZGnbUjv1vKMR6mtujfbyXYGZCb9WdHrRGVbDtyouEBvrkt58o",
  "key40": "4zFG3yZMp8f9JnFwHqhmsMPnYQgU2CPvyUSSZBLUuq8NtZsYJ2pY62vbLxMWHPSPyrD78kzhDb5swJrbBkYbZz5P",
  "key41": "b6xTCEQTYmmGZgDxuxSKJyChtTTqjDguqzkF9HniNcJZy6WUGFEvLJFTy2kRvVoCbxyqtNzMM6pBrkT5y2xLmra",
  "key42": "63BC9HPvrryxPT9rHZaDF16irG8L7quLBgqWKzYpWA83g6gWsTZANziziHHawvyCVwhjooLS5aThfS4AbbNULxKP"
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
