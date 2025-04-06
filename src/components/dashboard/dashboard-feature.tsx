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
    "2piVeYYFkzKAMqnPp18c5AxYKw1MZ411B3SFxZ8XNN2K8tEiGze8AwTMU9w1DLDZbNtJxqViShxeFdWky4cDCnCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yr2qttmkPVJUPwVYTeT43gYQ6pUmrRK5pDpyyoZaMEnTaJpToXCJKbkrjG1cEYiRrkHFPLCsoZAnRuYLigNCyNQ",
  "key1": "2KcnFQ9K4Rm6Ffvt4bweSwb6VduTK6NmiKN7b4PN2oT72DYC1uEDq5ZMgPQBSUrRYnHGk15w1AnnENK1zUaAM6Hx",
  "key2": "5W315aRYeHqL9cVjBD57FctJ443KKh3cCveitoCnqYeDszTsru1xZuvRFttgM39MEhx3a71wzhfV4z2jb16YRBCQ",
  "key3": "33jM4KuQedQqmKcRHBswpj1jaUsnowAhd2Jwuh3n3QBWxTGDHDeozTwFoH7cPEzgLnricdXA6xKNm737oEgDXagR",
  "key4": "2sLUiGV3GCyCXbB6iPtCLpyFboeXHHMZSFmgyGjS2V4io6qb8ZEmK6dQDvaw4AMg1Grq4d9ZqSaY9u3VmWPqyLck",
  "key5": "5r7L29ys811zApu29r4mSyRB5oBVmJzsTnWh7EqSCcRgBVuL8nbxMT2BZLnzVZzhsNN3AYTUBsDsbUZmyQgXYhKW",
  "key6": "oNURH5w39GR8gsBJFUXrHPxa1cdutqEjWq5YuyWmTAkz8gHfExBVa5CZ6ceCaegaWDb3uwrqAswh2Prv4Q2NoFk",
  "key7": "Uz3Zgfdn4vyUGbMN8ZHfH6WgVxaVdEfXHFjofVZkka6cLkXHR1VVMAgyxpSLHHLwNmNfnupEr3Y2xrbyZXuYm6J",
  "key8": "4s3BCKeZMsH6SpTeFZ5Tv6fNc9mJEChGuwTa4BTty4p2YdF2Ec2Jin8aVFWvK3R1zYVowZm5igvFimwxM2YsYwA7",
  "key9": "4QD4RUsvzNbSheC19uYxEw8RPNkd68vadktN9go8Gd21ssGXPUxGb7QXB87B81U8cDkQe27KHJawKFBg5kDVDYBR",
  "key10": "5CfNhQF6BP6fAmkoLfGiEgcusHYLgtz3MckuUAx2WazoQCGsUDdKCe2HeEpCueUUWRrS59wAUxnCwHJX2NFXjgxy",
  "key11": "55TL6zne6cd8erP6ipkKauxFPgC4g4r18ryoD796xtuQmhZ8BEEnEqwE6jjqUPZbKPwucGJdnDgq6XY3PSiLEPFN",
  "key12": "5XrBSbtbZ6nm9EA6z8dY4qWCKWc3nGGpig7jGQr5SJwPNFGb7Ae2aG97bvz3G8ZfFqWs4ooMXuPYcNZbohbH4AP6",
  "key13": "2qgy6ML62cahNdso5py6UX77sBNJdym8qZj5qBF4Z8dsDSw82WphFte6fvu2MxjMvuzLP2CQVNnG4qYeMGeG7w7g",
  "key14": "MZtoC6jQpKsmKoH6r7hf3BTXn6mRzKYc8MMZN3i819F6sU8vB1BG4bskRMLLEr1r94ZZj6oRmLB4J6FeNncYkJ6",
  "key15": "3nV7tudkXeMNiSPEizvv4YmPnKDj6TRdKvtwZXYbxZmPqTN7GEQSz3S3XA1q5r3oUou2wkHpBNphNVp6aLxsNzui",
  "key16": "2A9AypFs2UhXqqY9xQQ9uEsAUUef4GtvM8tQPo9fKy5TXEaW4ou1fbnv5SGcYgdhTRKnYH8ZwiwyM7GL7PbmekTs",
  "key17": "2ik6LedKrHbXsTXUd2A9RaQo76Aas37Cw3u6DrNouS1aa8DMM5UsSP7SCGxr79jU9hT3EoTaCmwTH1zUJYroTB5U",
  "key18": "37pYBumfpAqcHgpzWwVNuMybt1TL6nJThDGEwduttiwQMznwCVZRnM5RkhsaLQUuUZnPWAXELFYnFzTs3EseEGoD",
  "key19": "3dicmiGa9PRbPCAuuaXUHABZmcyGBkxFGx1B2wGmfgeiDahkxoCJPvfmr7ngDsxbgWjNHUJviYVZmirJvR7WzJr8",
  "key20": "4s493BtZBM188PQu2rzUnkVYyjx5eEio4MLssCo76RfebxzxcJ7fudsqttZtgojrK7fSvKpJL6JmsjiEe3xW3rz3",
  "key21": "4n3mkReQ9jqgqDTVAsExykHwrD9MZEGbVnfvMsyokvYT6wPuaGuodb633Tyo8njF6AizQNofNFnXnRbLdYRx4zsK",
  "key22": "PxFo4fCJ5Znz1ma7Knpoe5m4NnqPwQZUMFHXkFqnhaz4FPNvPaKxYECYZekt7etXVHVXYD3fERRY9HCAcZrgPqD",
  "key23": "bxhLj75ykLFKDBo2nt4XWxLEVeZ983wWoVD6NSAgWTM8aJM9NE3EtRQ7X8oSnWYsTtK6DjnPEJ2fE6kLbvCcsro",
  "key24": "gLvrxEYBzrJFDFmRkL3ShbfEjD92ur6r1WMpw1im5Hu7ekYwujHGx4rGgsPoRhkkzmvW3Q6ABxqmy9ZjF63ZR96",
  "key25": "EmGGwuyGAFDTaQmUsTnDMg4wJ6a7RBWj2Dd1ayZYQJWEUAReWg4JDxivDz7YirZRka9i1WRRNJSv8KUddP1rpic",
  "key26": "2mntzfJonXKny5rRRoMXC8731qGLwTggG1jx4GaP4sffWdf9FzYk8taU3QCSpjsX6XYWkuwJd94Lq7q1YRJF7SFp",
  "key27": "31TYtBubgXzExv1YL1bdovdwAardupctPgC9keWZxsX3d5q1zTAw8K6BBqGGT9YgNygSddxVmpAD4E3z2vMrSb7q",
  "key28": "2DTKUw7WUzajNVUsEjGDxccdq3zZPbZ4KeN9pM3vg28DGR2UEq8ob9aw8awU1t5pgrVix5QTiEVkoQatLvvPcfrd",
  "key29": "3h1jXD9tbALKMD5ZaRM3w5ih4hKsYJqFjvfXNAeA4UApyr1rq9MQ1u6CD67rThoUzBw6MbsDNh9oLqs1gSGFPZgR",
  "key30": "2UqJNbqN1kZrqjoEXFFrTZfxEPw564yLWMTpzbMiPmQ343EEQRXRRfdcQyoBp241net1mjGNoQRRqrJLzqw8u2Ux",
  "key31": "t6NBxySr5jjkyHNG55pdLMYxXDLCE9ndGAxbAhr2uXHHVZqm2VJus6MywzqNCaVjFfdknBmipj9EzjALFYyNWhx",
  "key32": "4LXpMBbtu5h9rGzrjSUU6KFqc1DpWbuhqKTsQhioQdgULSV1so6LWmYCMW8gJPjTyoDLPzM7tEXrs8TM28LTpAim",
  "key33": "471gfvegKQCqE23SGSEu8nypaete7mDJex89tDBAtDqhyLxEAiZEVSsJ2HAuyzXK7SzLG3UV6KSiyx7F86us8YMK",
  "key34": "3wFBz2pFsTFH1mQqdGfBbcUh8yBs3ufKtAonnXaga4NjisQEqsR7C8Dpp21Z1ihETGDxX4gZusLPxdzLhsCjSuFC",
  "key35": "61vNoGsZUp5Xm9mKVZ264NJxRZzyKqjn1VnJ5zXK7PQjyZ22Uikywk89XNZG3QxrysrtKrLuH4oZStudYiimU6KC",
  "key36": "4zEJeG8q9wEHC5X87i83CFi4xQMT3nQjsYxctSJvXAMoMQzcrntM1oEbRcfocaua5mELvYQg7XzcowqQbr3gmish",
  "key37": "5zqhmfgUevu5LEsMUpa9QLSgys4cEMjmNgwtaa6pbZTHdzdDJCjgQ8kfWwASXbCbbcWrsMkUTt24XRJmurYhAyZZ",
  "key38": "59s5YmNpnQEAgNm7xNb3yrQzZMQtgKfXmrjrEsKgbwqD8RyUp5deTFvDSWaYuXedb93i4Jg1NRX4XiFFmEYLuAEo",
  "key39": "Lz9iP5VMGVnnrWedcZ7eQ7AJiKJy1tAT5gpn6hiXh34pmTb8qbmzP4Dj2BkKEK8rBzeVPsBQfYQzrquEgqDkX3u",
  "key40": "5AftB14ieFds6be8uTrzNyetXENosjSMnGB5tAaGVC6mgpK6eQdY57r8eBV4hX9tKrPG1LEPuKGPcjGd2bQdAPNE",
  "key41": "97MzdtfGHcRdAibENtubWDyHQbn5nq7XvNWTtGBrbiU9gq3ecE5Dq1hardicij9tchVSz3DpoaPKT29QWsuk2rD",
  "key42": "5SqAfZY2JGM2GSV9fSbBHHVvgCQsz8tqD4pFo3uAhZPWNqKtD4YGL5ftW7dKmYhqcPJgC1qkukTg1wDP5qcbEWG2",
  "key43": "2jquFjuYBsG69LJPBRVFRu4vpCa4r3MDLjWdNUgi6WvYhTg23APCbLbGMxQtrZKH6RRpkDKT7gsFQbaFniUb4exK",
  "key44": "5g5KjibTCUMis5Z7ng4TMm7HHQ8HfRXCECtQyABSdZxeULUFw6gjgTegpKUxBsxTL5rzXFBGPHoCqnMZMDUqE28E",
  "key45": "PnJVVXRt65yH7AS9K8DA2MzjY18JpHKq7pH5m4ypRtr7FgMjdT5GTb3SdZHVT9fHWxbVxDd9B7QLH4mtbebcNBc",
  "key46": "CJYkvKWyFam9mvwyFo6NtpBeh49nzjUtWnHbo1RKV5G69p5BeHeMzHtZUp8TQTL5tchz4C9kwssJsZmvSpwUi8q"
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
