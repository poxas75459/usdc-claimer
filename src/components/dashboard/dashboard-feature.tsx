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
    "4JJTCws69F651cvFNU3X1p1qsrxhJDgFwwmnF5gaSPpUscU8rUrJoy2cADDUgtd2nUoxSeDhy3LSjU1F49EJKhfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RzuDpTWqThfZqjfQwBp2CEdqqjRxCdfCNAJXpthVN8MVyvgqFxZ1uPWjEt7fLuJeyHnrFCPNCnLhaZ9AM4jinQF",
  "key1": "jD1aiLH1jJLTxT1CEoJm46TXGYvvMuwizaG71zwVtQ6hWzs5Uap34p8JxiPhsiFUGasfBMkJr2gsH9bc6PYJESJ",
  "key2": "3QJt5djbdhFghRm2PEU13S1ssMs5XtRHUqwFWg3pycUFnoXrE5MyRFXz6sK9NnDKqEm3qqDDcUciWjFEhQR3ynJ4",
  "key3": "5CwV4bSrcoUA8mAqqUQizJpzYidZ1B247hvm6rqG84oxZPaUrrvCNk55s62CGwyiuiaU3USf2h5bR4rc4jNnwaTQ",
  "key4": "y9BXB1Q5MUiuTrtYdcD2iQzgd1wVJf1Vknjob7gqJqT6zYxFP7siUryxCaEQ24Xj9JC12j9kiMiURhR2EFToK2u",
  "key5": "531owiuNkk36BP7CyC3h4zVUMiet1v2kcjgVLgdKgEctRYYRuDfTDepRoSfgCeNdyU7G3gYbQiDyUDarXGbSRLXv",
  "key6": "5d3uGG7HXAkVGqXMk6DXEaB5sTBWUjdJLgzEuYSB4kWg9ZhWYVMYwmfTNKR9d6AF5Nd8QCezTQuNB71uTMWLtDyx",
  "key7": "4TrRJMN8JBMRFEPEqzjT7666vEEY7SVe4QeQjyyuPm57G3hJdnmEcX7pJnmUCP4486ZVRyfCHMeHdFU4RfTpAPCt",
  "key8": "2z5rzVUHhiwWVT4xRdWVAj5JB14455dSTk3JN9SUeybmwuJq3C4cHCCs2JToETiPxtec7AWVXBqNCG9Z4wweMNAg",
  "key9": "5oMx3ftkSNsDoKvdwyHpA9gmMh1Uw3GtfTihiiFyZZMTrcPX1DgrWfqouCnUoAKQE3pTq4JfurtxjLgzdb6U4zb2",
  "key10": "5qvZbHJVEhhSb9qTFLBCXQhByXHBX3Eb4HqgR9XeSn68FuFAvdeSxpytPLM4svZ1p69xwfBUk6V1zKHXAdXCYBoc",
  "key11": "2vzw31pABi5QuNu12SvW17PZYhhG7y5xoxrvbbG6cxwcqGUiqL2RPeYg4QGXSANhFg5cYFSKZDgf88sXRTQkxCJc",
  "key12": "QJ34akidUS2ijFkqq1jDqJjLZzwmPXdBLFRRTn6cDeRKa3jrXe4yjEW9T3RPSvzQAKAkPH971LGvx784D9rPKmK",
  "key13": "59M3KyDH9rpQjp9gFmCAPUhcFvmKG1SRToPWzYKUtFuYNYcVV1etyez6CgtbyWAnW5ZFpi6SoXmZnKxLbWcWXbVc",
  "key14": "5SYYBmE7V4MPF7TgaRbwt7iUSpRqatNAkRi5SsM4yh4qbRfsWMNz3emVxTpmz2posXQA95DGFWHskv9Bi577NBpK",
  "key15": "36je6eiFq24dn8wsrdb2PZ38L2gtJVyDiRSVycRjjARnHXTgZRLkRyj3jgyaUGwdMFYMVvvm1GHLDfg9oKGXnnBh",
  "key16": "4T7Z5G3VzS4N7MybySK5mZbJZa2c2V3is9ypfvyEKrR8eJ1vmJCMi1Lbu87iWVF9mkdevSEwYuuR8vGgpRnJBmBb",
  "key17": "3zsZV3cb5DsmNgiH1gYynCo1y9iXA5GszYfarHhyz9mV2WXuc6xkrTSxG6dTD7y64aHZuhSbDKjUyhU9m2Bm6fmN",
  "key18": "2dFvQoUsSqBthygddFeSMkNcJSA91kSaLTrkReBGx3oU4fjWcWaV6wp5J67bSMEEYAyXwqRm7wtjNAsPHrL372U8",
  "key19": "5s5jpTkt3omgGoxJKxJeRZvjEkoRNhrozLQ4UHtRcbRhzPky7MBsgHMbxwcsGxgi4oaj6Ju1bJnaKpkWWku8ucLy",
  "key20": "5eAbSeJDu5RVENb4gtyt3dgRucU7bCLA466YBNXenqxSd5h2CiLHBmsYQYPuTXTicYcmZCnoygNXycS2zZ6kkE4F",
  "key21": "dbNXMemVi3qdkiveRjKt4EX9PnztDAHnrQMApaVdCciyb8ckwTDcdJtCztUFJwkz3VoxTiSC1RVazLXDR7g5UeS",
  "key22": "pTqHJ9MYRraUmi4s95AnRkYJQjNWkfaw3YMAJFFGELzhcor7joGTV6Ras8W9LavwQNzAZjWe9ZgkB6KmoV9dcwS",
  "key23": "5jQpMaATGHJykdaqi7is64e4BjAwrJiSkzNrM3sTMqY6xPej6YspqN5SLXPFu8DHHD4PmUQgWRUYoifsiYFp8JVC",
  "key24": "3d15VovkCzyiV1tFocdktLt49U2ZAb1pRGCLpT76hqazwKZzYmQwqkJtUcHkxJXQ23b5HBHDaFsGe8GZgU1Md2FR",
  "key25": "3AAMPKU6PBkFvGB8fFmpJHCqaQ2Xh5DL2SgMswL6qjmSXfSqThw9LJMzKHoLmZdHSBU28tybQChnB9NjXbDksps4",
  "key26": "5b7AKN7NJcQ7gEqqULxcADi2ELs8Yny9xAYxCoovzJmVLf23YCUfaSruv5pDUY2wE5TvUtfymGxLPWcvZz59KZko",
  "key27": "4XLLZxvU8roNy3qSCg4NbPKoe1La7zYFZ1YupsJ39btEQZhHjgrktxr7pfuyCchDDypb69GfVKpYEp81QJ9ugito",
  "key28": "214wUPNCL4qArc2129Jt7ZfEuvqSHRVVpjbHTn3BGurFjCxSpAWdMkcoXfT4rKXEEkxrBAUwbbEdpFoFUSBBbkKZ",
  "key29": "5UZ2pFfA47jtKESUg7Tg9K5wsZPr7Y7JiDdkreXxqHC6nZYLAKCRPrqNjSwoqaqqDMscj1Ki71tRwFnRCypzPu8G",
  "key30": "4S7PU6wdYnqn79fSNbcJgaZVqiADtcFEAkQ2TwGZNXZsUKUWLdS7GiWJCXtc3Ez4X8xwgQF5trxoScUx4aWuLqiQ",
  "key31": "63iw4wK7fMstnQpmp4RcjM74i5robdE7aS3UoFXARqZ7VGEPwXuZ35eqrxXkuAruqNHysxR28hmdbovJzts4E5UT",
  "key32": "4B1DWTz4d5cbuA6n8JWr8RpGk8oWWJ2ti16yXq3AWxyh8vN8kWo3gvt4953Q3YJTgoDGcyxrDhTdn29gPhNRk8pR",
  "key33": "5A9nwM1Vfc1viAJQohqJ2tqVsKoA3N5Qpya99CEZL2otgR2BBa9oBUCiHPXvmBj8JCjv6aviQyGhFsc3VF9XYiRD",
  "key34": "e6cNUPt1KQW6mCDQZoXa7gS4EB5ue9Fv4HsrauvVRRgra7qzWc45sy6PjiE9xpxkJKvkkeVBvr77Yy9h68QG6pp",
  "key35": "6R2zGEtwhCodpdtKykTt2MrRfn2mHCdUj1FnRM8anZBqN94jP8bcY5LHTnjnB8xAAXJu2U7nqVWazvUPaaiJyJ9",
  "key36": "4Lzas2G9TFAhV8DHdNksdeSVuBtLgqphw2R17G3PPMgyQMikDABWZFiW6BW9agGmUdTezw4ESFTAPN8HyVE3jCgc",
  "key37": "3RrfRSYfTGUtRpKkTHQNQSofwp5Z23ehYcnqT1YLwz6LJQVA7dC6JNBx79xEEZdPQyU9R3oPwnvzDtQKxUKVbKsK",
  "key38": "4nZd6E72kkfmCF6fiHRFcmTWp3u5RX6zTf2Sz6gK6HEs2NzhLigHGBDAfamSE7vpD3EDmdp5ZKWajRUA57sTFJN7",
  "key39": "KVK2hwLktLsct1wxPe8P2qL4npm7nfbKnn8hvKf18divYUiGvC28Y4txfPnYf6jDdLoD782nTEtJqnBHr5t6WnL",
  "key40": "5xeCCS9edsCV8oZBNoSyU7WeoU6nH5L713BQy5F1YXxfpePTsZni5Dh8QzatjztfTevCjeE41CZnWLaWyRTJUxVb",
  "key41": "34drtYmE5DwXHsMs4S34Yb2WjccNVCZ58G1Qf1y4dzqGmMYHpgC1E5adVZJM468z4EnhDtcztU5FeMm8GUZgKGvC",
  "key42": "k2Y8LxDorctfZ45eERrLWP1vs3N75dS2rcg933cjZ5wXnppTJaWfnrhVsHmxkGH2Ngp5hRCy4rjz3BZ3fFi3BxU",
  "key43": "p7BMKYdf5XShVLjiRgvqEf93r3hXV7L4989ZunReWzxUh4uuKyy7kHyaorPqH1UWQnYpTaC5LJ2drFnCDhaMC8H",
  "key44": "wAFPihPoGz6ABUdDqVfU7Xui9aa55KUkg7hVsRoH8hCDfrt1oaCZotrPxgZM7x1pvNy9VUStJUXLbyS7Liqde8J",
  "key45": "4sR5xb9GzGsjAuQ3WNh2huPqL4B1gCsFHMGF4J7LMydYSpmk5K9xzHrjFQrC98Q6ivCQ9YbkABdywYUruhMsSnJy",
  "key46": "4LjGfjkjBCJpGC9QRsJ5QB1dU9HtcEZ9h2d5ADYsTC4d6esPYgQstL8weSHMuStBdZ2srAjBySs1wXYxvZMq2AD9",
  "key47": "3o9M4xkAxDbGYmkrz6GPGSumrLgfLjU6uh4pi3THNz9ybZ9gikp3GkkwCBNJDi8FjaMGaTroXY1j4Tsbk59PdL9K"
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
