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
    "2qwmA3MymTsK1GCpQriqTL9udBU5GF7T7cBRpDduvfJZRMK9pafndezC4XsKYkLbz1DbZcoQFLHMmMb5pH9U9tjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a7aWwfqXcW33KShJFusatT5buLjJobp1A6sQossETSdNSJNLjtoZitUjZGnanqx12dt5LNeh3kcPtNbZBqsUaQA",
  "key1": "4ai7WuDgC7Q6je32txtdNJk7CXGH5W3Rph9a6vDAsBPuNBhPnB18fLV4PAaY2T62Nz2fG9RJoX8gdbtGM8Py5nXM",
  "key2": "RweEwBi1d6SwVhDtYLxfLF2PCvDb4UgfLfQeTvGFs6hbTQ4YqUCmAKNnSX1sK7B1q2Qf8ModWUZyLeywZvAS5Yk",
  "key3": "3zY7MZHyn2aSB4Tw2yf4e3tFXs5eTLzPdrkk8Je36Wd434NNmZauc5DpbNc5cj33XG2rBxfvEucsuT3QV1avHVaW",
  "key4": "4pgy5cRZbohLxAuFg6h1LPMyThxgmJAymyhg9W3ndHRkC8gpSUSjk7nszagESikUrhAoCEQ6y97zNW2khaD2GxpB",
  "key5": "6HjiLC5cdJortGj9AHk3xD8zvmWjiq4miYoQnBtc5qxuXLpGhgBFqAfwLumftAQW2wBn52iUQgQAv1AnzmzbjjV",
  "key6": "3QasVn1dh9BCRCCnFPzYzmWPAGGVu7v1Rp98oFxWwLyxUazgXwnKhuZVwnjf7LPN5bCSBb5WHMtK4ySBbPdknWtt",
  "key7": "337DrEw5iftRr9y8EFBrxW6aZyuf51LRHdfKV54hz88agsJmoFyDWhiBs1nt9zCf1QtLSdBDgqE8xPmmLcfGMfsi",
  "key8": "9C7zwoG91zFuBH1WR9iKgqCzAA6f7EWKGkiW5KwsW1HArZ22jEnYUQ3pvg7fnt6d1UTPeM4XYEnpvWyiqJbL5c9",
  "key9": "4j5KrcCbnsXaXr4WKcCez5z9f8QHUdZusn5fEL9ckBsKHgKiwYBcKNQcWkQFz5c1dEm2KinH8p3VgyrW8vVqAjVQ",
  "key10": "2LojjFiGii33pV7qkbuq8r8fXjLeiL6KadmL6JAq7ghKno9V2qgfoWtBB5TpkxB28G94iwum77qi45J6rFqS4yVn",
  "key11": "3t3G7W16oooobmz76eTffD4jTFD65wmJ5zYoioYZSmEhQAvGirzL3ttrt66QcfrXsHHHCcaPArCmQ2Qo5LG4Nz1h",
  "key12": "53BiWUPkUKkbH4qBPQThokGLawJQt7Hkn1WMD16Ej3Eg7kxYdmMVtUZQHGJq5jZjBAcTXwXRFHvFabttpFyRCPkM",
  "key13": "4NhBF9k33aD9kKVnjzYzaN1Ku69DX3f2yntGpuJNEZjV4hJjxox26JLeJFevF3MyesVxjhhRK9pzT6oDutot39Qe",
  "key14": "4TmV2iXFWho7bLmEixSp9JSx5iECNtL2tUfQuXKtf8dr49JJSdVSdAfZA4f1KYTKpnf8LtKqthb3BFFLHgeVPfLj",
  "key15": "YpeyxiKAXfd9usCPr3TQ5TvH89dNgWCLfhPuMxXaFX51ge53gd1Yfsjsib1YyqMV1wFz5C88oQbKteMkDnHzt32",
  "key16": "3McwaJVuKWQCgLWtBTD4o8eUJPqNjRjPvi6me68JzHzYgp2FWgm12Ft9DEoviWodtCb66FcojQbx7tVofKPQW5sq",
  "key17": "2G8eVwo2zw7ukW5Fqf7My18wihQCtCDWwmWVcchSjUxL1y48c7EB3UP361x3Y9PpQpxZpgVRoghHBAt8tzy5ZCdT",
  "key18": "9CKkRdYdLaSyLz1vM2MJzA1uFesXkUkG3PS93DyBpLWYFQh3L5jfPhBRHvVyxi7KhLjUHTNV6TaG6LvbTVSVkCi",
  "key19": "dBbG8BAVr3KsWu839QbTT9PfD9v4Ywx6HYVkK6x5Z6tymhgPH913miHMDazC6477AiRFEr3DmaKhEkVJ5Tkzh2d",
  "key20": "3K34LatfivKAbSrQYUxqW6cqUXtRJJ7V5aoqMnL4o7r1t82VZL7WXwYfX1V2jVNQEJGEwErQxfEi1XF3p7H2niES",
  "key21": "5J9DvMuUxDWwiWwM9dXpS3jWg1PZ7bqtzacUWbhRQJHh1mHuHcZwF26zinkrbd5YbxLudwvVZ5PwqAcMWRwdCg5C",
  "key22": "p9DzH3UpjRmMSjbJuNm7qVnSDaGFotxdKim9FbVbLAriSqTtBU4mJm2XdA4aA79SP8WNCPGJgi5W75mpL9tC8Mr",
  "key23": "2K6oRsoikrn1GQQDLHGyH1AP3UtEMPN9WwhBWCPM2sT4Ltunc9uPYDGbHnA251Nt9E5QHiDuci43H7Jn6uxECnGM",
  "key24": "2RemZYsHpgqjAUnKmnGHjZnoh5EPi7QRLGJbwQMKTK1ZG7Ws8EABHoGPiUtUQqLZLo6tMvoC66ATgkXiMY4J5gxV",
  "key25": "4L5gXiV5L18eoDdGEKKN3pBcuLUG2BKvk39q79Ysb85boi9Ze7nY5KRMCbrjLpbCzFU43GozSW4qJYpEbQ6KoRD4",
  "key26": "fYa3mzeMw9a5HSE4vVcWutyWRBYeqmXnsGukv6Xn4kWP5tvtB2rjs1YDnMMLxwEEau7jmvxVHMJ4QgTk1HDrw6q",
  "key27": "4quNnRzGmXVf448ZzTVGBjutwc18i2rXCiaw8xgiygn3LpMJgyCEwBUwQ32rmLGirT7FN8bLXrjUhNY58BQQeKgv",
  "key28": "4VkdejLHENcpmobBmGQQm8CtmUUWnT5jHCdm63bWDK75j2TGvmCS3a2GGvBEayQjwVuCs9oYPQSF5yXM4C5gZpii",
  "key29": "3ZwttLLXESQaqySHcpLT2TnnVMeAGusdYoHMifDoDEoJgFQStmZt1wWeeZaj8NxHsvh6sJXwctARSkEfvLLU7i31",
  "key30": "ydtbXWpH39zj3sjtnJCUtRfWY1etWu2G9FMuxkpUZdJ7cUcNAzxrzuWBx7Fiv3AfDN7vHpBGqvnB2HsP1Kdcibs",
  "key31": "235BCGSE6m8CqATLFAgh4Xn7MeN7gpWFgPxpBB1GkLK7mxrg6NHzP5xgLKk5AJVDNqtFMZKx9woWppkB9h72itfV",
  "key32": "Fo1tj9Qx3AtRWyngoDs7WSpNqdUbeb9Lkfbfw4QY1bK5S9kDKx89PDWNDmtTHhfo5rgGGnGhYsniF58VdUNqqtR",
  "key33": "ToDFbvdjM6vXcS14NaM5mEivchnGU8JMVJA7m2Y6PoQRMAdzPm74HZMYC7Uf5SktXBWSxgCyTrPdW8ReeyDhr7y",
  "key34": "58TwzyoPfGnBfadFx2DNMVPyKsrD9oZABRhgj3xpXmU3AMLMZGEd1L7h14jT7XGeNL4gwwyxYA5y92BQhUKvoxxE",
  "key35": "YTHRVhTvSzSYzZn5JwehVTjxcKh7TZKjpDfWPG9yd41Z8xFQhYT68KEuNRzC1U6UcppC1wwShK2nJuwpn9snB2F",
  "key36": "JLFNEBzaKPQC47Fnw8hVkR6pT1RRcm5mp4gACokdUCywihPaCoDHYBvinuSNzMyGe4wEKFKCvejcapWrWsUUDxA",
  "key37": "45SksN29H4wDaQeNeGwP8N3PgdTzvoZNRWZWPM4zF8vit8kbtgzQRxFuQmcETzsp6U6YQNu9Mf4AJcjsqAPVMBUs",
  "key38": "3GmZCuoeyBX6Mzz19CiagqmWtW9pYGnwkNdCrkeE7r4NakbTjmXZ5JRrsVfV6NXtyDwf7MSgfoJniaVdLFBA3Nfj",
  "key39": "5H4nuCJBpvDv5KN1Ux2DTkJ5s8d8bQidMuCR3YgxsybwFWrFZSKYMFoxxwksLRfoYpQX9Eejiy8Cp2H4gXV6YNff",
  "key40": "61viFcMx2bMnSttjQ2boiHkMjjxkuZvKW6wDsNdss55aUaTcjFqTnswUBhDfP1Pn2eTMZTykcZgSoKFyK1qvUgsn",
  "key41": "4iNbGotsZC2vY64g1BAjusaWLsDzCis7QjUQAg7UaNwPB2qpCJJNYira7cnfXJPqak61ZKAWjShBG2FZH1X2V9zh",
  "key42": "29NhoCLmSpNwtTrU17SCVUCe5PC5JSsaCm8ec3xwN8e1jQqBCAJ4jDFgJndZS4CH8sFdY98d1dqwNuYb3uNA3rnG",
  "key43": "3bEAWytKFg2X5khhL1g363SodK6VRaYRfxYgeHvxsbxt4mrucokR1taBZ7Jj4rEMTbVxbZMsVkf2gzHtmfmaVMof",
  "key44": "qj6JdqTTqnL5RedJURxbtj9uQov1bJzomVTqsTaN9JoKcFTKxNo7GYDYKMXTr3sdC2b5nEUorSUjQHyBmovWHg8",
  "key45": "5gUETzTJrWdvzzzmDAmu5RkfGzLmU4WoH6swvpcjuUrDsKgJL6bnQZTq56U5GNxaVuY1vP21vf5umqUEriCXvhJR",
  "key46": "382gaCSYLNjitFUcgusct4cczbAMXeMchUMgjetUchR8wEW3igUjETEkJj6pPiumHj8wnHE2TNTcDAdYNqAa2cg7",
  "key47": "29ZNrHvoU9fA7h8C4jEWEcpYdXvv7KWMh8E3zqX6kqHm8nk5YhFzPse1v9GcZJSbbQ7J5FnkdM6baLBKrrTaqHKB",
  "key48": "3PdvKBMWkWKzyVvtcueV2K4LsrLYUKFzQ3yu79LbvK37fHNG7DGrASxXDYdJwenuKtQfJPBwKaRxtvEryde9e9vG",
  "key49": "5AMdWatPwLAP9V9u62eCZJBXwWpPugF8nY8jaRjsL6Ed4f6P7dHJ6diuuzfcwnHHFamncfYdRR6NY6oxvpSMNxJV"
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
