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
    "34Hkv5e6zxYzv3mWRu3wjdRcEQYXP8vD16uY4Gt4D2LdRxGozpdYKDbnAsKwEqpCTZGfWYktpS7veWJJ3zofxcDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VDqWTdrv3ktyeQ9W8nLmcqQpKNXJMpcwWPKERazn1uCDwPih4NxVuEudGKDVrMv4BX8FBQN6FFXRhMeyKM9g9X1",
  "key1": "3Tjf3pjNRNS3GDWHV7yVEEGtyDJxVRPRomMTnvQ9NHbhXt2sBzLUX1kHwYQui4cBna1Sb4hniJK7KuHQPid5VAbB",
  "key2": "3Bxb5v17HnC7eSVdgmi2CxWJie8yh2rWebWkYTiZpL1CBjq4Nxd3GpLou6W12xtUWmryt6Nx6azhzmMjxsyFYEAN",
  "key3": "3PRcjGZsTq73LyTcMeXz7Q7weCrP4cTxYaBGuqaZ3ErYrFK1RBohDsQEYQPQWrWcqbmUz7tSvzAbM9rtVkoukyTW",
  "key4": "47dQbN1kFECH1y5nESUzXt1NbPQJvRmNDi1icbBaASbGsRwHfbZ3PWQYYzVxzDHypj1RM1NPuXsdjRxema4NEPeg",
  "key5": "2TJywV1FA3uLxZuUg6KzaRJpCT9ts9D76tFQpxZ48CvKd8yHPiyL81B4d4hQCTZzFNXcVtxduadCyYpsVkcG7Dj",
  "key6": "26jN5ANRPZbMLTp3DDKYyo41UzKUBFJyX6JVBmUGn2DFDPRd5MoVmv71aE2hxyzPjv8FQH71UrqhqwfWMykdXGTq",
  "key7": "4oFQvhUkLkFcXAfZd1AVTkMkaAoX9qg9wgkqdCZaNhNWgFcZt5RGnmx7u43CojkZq6EowCkG2efzD9ja4otDTB8P",
  "key8": "4rsgu2WWtw24pNtsersiABmBVVDTX9pBgAHy3cmxNSKzHMwtWei9VZMhAsDvQAcHhgSuWZFWzeb5hV64hEMG5RHo",
  "key9": "5Ta3mFuuBPV2Ft6BZrZNbX8LL4vsMukPqGVrRaGrYNVUKMvQrjf752Q1Sno422HVbHsJPbSps5k7ucLTFUfzZRtN",
  "key10": "37UZfALX3UAqEr9ZLhktZJphZ1uzHh8AbmgQfwXS2GEfwfNiZWEV8b2FYgXY9WFLsU5egLD9bbofdQvboYMBZLG5",
  "key11": "25VDVGJHGmPBvxxK5663DpuV4U1yPdcsbMPD9TivBAv3yLMDMts41Vzv2KJHvMNKQnhQVLShS4jwhtD7y2t2txHm",
  "key12": "4GPsFtfb6NYW2vxvxKgt7Z6UnbaksjotR57Wu25qyqeGsw9S1hEri4kazLJR8zQcC41nqwkChvebF596WSZg9aai",
  "key13": "57g5siJCr2eNrKRbTHdB8yhcLcvC5TgTwU1T7v9VGsTyGRsr4QajNRA4JyskqidACmmTgwK8KdcJf1snbjhBWmHd",
  "key14": "25tqCMb1MugxYMvyQcd6TV2HQyFuHqn61WU9ZofVoDKbjdeuYvWM9SucjkXRojZm8vGeWg9shAc6fvjCmSCjvwcJ",
  "key15": "3sAiUtS45oAVkCgeWQgA6YYKSF6XZkUHPdqDVTQLJBPhQjmy6qQUXK2PLGeJ4LyYQEnoVeYFHwbG7WJCBse3mwSy",
  "key16": "42MesG7yhiqFGsCnTdJogtqZRgh9EQydSATKovkxAPzstvzqpcKAD5vudZr1XV7iVyrVVuq6BJuzegUdgq7LkMSq",
  "key17": "36XPap5nCezxn6tWjAXTN3vgzAQEN4dt49cND1Mo1qq4dmaV5PBgMrxttRiitViVW7m6c3wPbJdZf9yviSabssur",
  "key18": "2G5b4t7hgobvBDn1fqHCi8j4KcnGmMxA8Mwyqso67L42XRaQVxBidDRLkXa3kPXA96QdJBySPaeAcAPboCFK136y",
  "key19": "3dc1QcGzQD9Jv84ri5v4sLyCUJ7zGP5oEcoB6FKb4PtMGAcGvtB6rHVzCxxRTyJXyAnZHnx7VAsqVyRSmQecaHyK",
  "key20": "3Wmyj7cFP64SEYdYnfaUomSzdi7LU57Gb8ZCATDNDuPyggcUT89Ainq1gbJg9BcqB3aXAqLbT5EzVtv5baJzc6H3",
  "key21": "5yxajnrKAvMYZZKGwAEhbkXWAUfDCroQ1v3mHqH1UHV86hvoQ1wETfwpjwPbzwi8dQfbtvgMkhqfF6QDBSBnnG4L",
  "key22": "28Lq3kKsmD9xqArM4pARXisSQSDn6T7T3KQ6VMU1kHv2gtHRA3hJatVuqeYHgMBfFLwKShBJ5A3ts16atk1ALXxE",
  "key23": "5uCrfQconVvhSzc1MmgN34QLiAXa8wCiMx8vortxTuKKEP2zvhsaVVupZjnWsJF6KyYWyhqLwDmwQ7TsMeTnmFWo",
  "key24": "3B5sK3PXwkudYCDehTuzY76iqsYrsDaRLVfTbZazDGA53k2xVaDuKiUfcEA85fiowEQbyKNokK18Y2XxijdwgXs9",
  "key25": "2eGXU6ZDUzwcWYRCGZgvHTjBLbXJBBeFLRr9LwiVSfAGDGLFqj77Tux8itZLHbsvk48RaZ8dZmyES6YeLjGMij8D",
  "key26": "5ihwRn6aj71h5J3gAdEpGDG3Li9GgcgePrLPJQvCmM4W2UqDsz1dkVBsu1Pxrkph66YyQ3k2YNCzaV4GgSn1aNvF",
  "key27": "377WeBuMRKsgHSDmxoKet9BRkMrXEBbKA8Tn1EVarLyGfekbLxjaSU8CTqsZ4SLHSPSGMq1MbLvkNEBAQMET87Lv",
  "key28": "3akWUyVL2mnnQtQZ4h8oVR14zp5c8sgWUwQUQhBeNydy1QE3xsoyUUWczmMiDfb1Ww6uzcqBx9MujXog5EXY9UR3",
  "key29": "3h6GJypFpop2x6TgKJsdUiGyryJH4G3Q9VsYYDGF1MfEiGMwJVq8TBTGfq1H4AnNM6cCFFfhMA5LKJ9ujBFGA581",
  "key30": "2iNy1cWgd2hYGFvgNWrfzsa53RFDqR9C1jwdb8M2vvmNKJo2h7nSJbFj4LM2ZbdyGngKKswfQyJvg85WJn9R2S7V",
  "key31": "4KhrKuPbb6RDiVLJpHqCDqYPZqaFeH9ekN9ZDkHSq9DVZT47XzWkUvN5iA9tZhBXumrFyNcnZ6LBX3hz8y4zNZd1",
  "key32": "teLXM6Rx8C48M1HrAYUPgxBEVr5CW7hXMBwnyfti7nQ1Cm8Pb6sRQ5iK9gL7QAkULf1Y5YTzWz3Wrd1gkGmkHwg",
  "key33": "4TaEV2KQ5mbYem9WHceWXcGFV8LCcdj3wcsW4251kK49dXqEDSzoWaW5SkCJg8XdcU8JWnXkqQQvJCpuySmg3sPE",
  "key34": "8akeVdVopuMdW58Y9ZmUgbS53QQueixH4ksJGHCEgo4s8Mvvdj7ohJJ6xenTbthSGUSp34cdxWB2HXWUo85TAUc",
  "key35": "5NXfZNwfFaeNC7Y58WFtt8YMnPEn6AEoSVEV4wXcFAvMeBmnNPxDHzKhz1dYLgjM3bMaEz2XfeKSDXMEctALCUFa",
  "key36": "4yxPiBjbBCwD5fmD6hbJPMgDT3Pif1MMYCQYvUpEJUyXxTGtzWkkXd8dcx2wZutW7u3KzW4sDscNDk915b7P6YbH",
  "key37": "7f1ybSmRjx9FnS5nUYN1nAgnvs7eA4kTRH7QT5qKEwj3y8TgfPvhBJm4FYYAPXwA6PDhqMosPjJZE3mZinsH37j"
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
