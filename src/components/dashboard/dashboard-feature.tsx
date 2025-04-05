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
    "27s7EHfo1xEp6Q2ChQNdVxuhyr8KygPe9xJWXb4nynFjMrY37Zt8L1wG39Ksxqk9Pmic9LMWJJMk3jn9ktJgw92Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBqmBUrf2a2HMz6o8mubKGgYTNF9c4gWaTjXQDTWk7YMzBooAZjNJrMjJ4jWuvaMSSSBBrQiZcsX5yT6tTSm9qM",
  "key1": "SFp1Dn1uWThYAuBSz7JKahbNtxL4NCVcczDERPq7abjomvgteiVGhd3bY8NEQ5arcM17nshCVNm9ZWfG7k2EAZv",
  "key2": "25yVrx66pTBBhjWp1TTYzeajZg9atDAvS3VvHPYdzWPa5gVKTNuEs46yp5a22z617SkzjTiA46hCpH1gCzwyDPtw",
  "key3": "61FBqkThQ1jVZVMbfQmUAt3vmqbFhonypDDfNjgcopmZPYzEmrQq2nw42WWsezvn7bb7qZEYEuEQdveRPN6oij23",
  "key4": "k6ZDfiMuzoxLSDxtg3WGkVuF6x97itrKfzpuaUxYTpzQe4SPvbvgtM7BKsA8j4oevnTzvHPZnmpH6tZEHvaHKfu",
  "key5": "4mtF7cK2oVuwCsNFFn6je7qBzLJFqzQVEDz4u4A1g84FURjPB51wuK9yjBZu8jDezLv2F9yiFAfFqTxp2Fm9g43k",
  "key6": "5qaPeeCdV4duzVzeQbKfFomw6PxBr34WX178L8VuFWxfZP52kW1M6BqoBKTjtcbw3Nw4hpWxhSTWztKFNgzS5Z7P",
  "key7": "5bLhFTtD1uCU1GsmBSFmqAuUDBPksBS8sUyjz4rwRjxXCHBj2nwENeRzirGVoiEp83xWVFmMVTgvUnspuZXjvGvf",
  "key8": "2yCyEc3WRVTxmzCZsVAZLGnpF28jXFX9T5nBJMPxWqK2u6uazmQep6iLvFUBBTkuwTADW8ZovQgGJBG9ArW5V8tb",
  "key9": "yMHgU1nhrn4bUuZLTtxh4G8wAZqnVCpqsN19QkHukP9rd7VGABVk6eAjpNKHE34Rn2Cex9SPGVQ9DXH8BGir9xE",
  "key10": "4tj7tH3AyAAN2ZXCB65fNS2oMjc5JkHW7GzjpxXS3A8FvoUNgbFcH22NJEkDkv72gDoUMF9P7F79ruJStNM5MXxb",
  "key11": "4ZbbvXmwqsRxqQhwF7artS1A9VoyzKVWRMYraVhgLLQymTETEZ2yUS5EBSFhZtDbU9MPPT51vq5xkSs3oLc6Ayj2",
  "key12": "MPRu5Qezhqc5xQWm7HomyjSMtwCunArAnuw2vdoXGPntMetFbVbt9gZX8XJQPLk5CEg7D8B8BmHmazggDRqTSb5",
  "key13": "2fKPcUNRwSbqUmAvJBSby5ywtJPoU8Eukez7HTFMffRz8FwoLrDmofDG4J245UHmJcnLh1K4bY6KfDwgt69L36YK",
  "key14": "5Nj85W5NPCGzZUPdWAVUkXSuJCerX8wvKAuH95cHAnyAUuhiUMjePoC8bcqkNppzodvJ55r96LPXoxDKJrRuL8p",
  "key15": "3VSzZSixpZRTaf6NsjxGcDPdxfYi7b9hF9J8yRVLNwEH1vvHJNVjocxWVDiAtDoYRhgL2xAgruTYKwmHKM24T9M9",
  "key16": "5dkr9ejz1wKYsoZzZecbMjC8REPNyPghVbYHDp2VT59TKj2NDGGoDrjZTf89hYFL97sRjw82kWZma54GkJB2WCKS",
  "key17": "4eUqXqmTNx79ovyMk9Kzc9T6KCqJ9uAKSELLbu1aB6g7YZCoBjh9igUuK4GrtmTtjVQ5JGhtEAqswyGxFgQasB7n",
  "key18": "3cibtpci2mfTCUrGuxfMejJEPjRVqwzFtRTEhMjRw6xdviauxT7ZB5JswcUk7ii1KatiyQfc9oitAhxrmUPEw5oB",
  "key19": "5WNgkzatwFj7K1JM6c1aTRmG9ZYzTKa5VT1k1A6QwrAL1vtFhX4cqw6QXUE8Fddz3aeE5pk9JKTBWgbA4iPF6MaE",
  "key20": "3HtF6UZkVrVqmk6uekBcJJm5zTR9TkHbKYCbgrp9NnNJprDuYDsdNjF61pVR7GRnoni44wpRbwcjZwgYLn6v14r8",
  "key21": "27FY4FKMSx52d2bJ9W1VMgaDAfdS1QomHUf7jyTNqSLm6PSb57LGeTH2af4zKXeGRmJ8mzz558D7f7zZZJuxNYiZ",
  "key22": "52WMGMxqf7QoyWid5cRdFzi4uP6FUt3ZCwvGHN79TmgXvjgczkcvcwo14K8bbYecz8TtfKWZWH1t4D95mYLZqFuE",
  "key23": "2o6WVy4KHvHkcmEmaFM6Qxba5dTBgxEbaStpEX9zaDKToC1vJjppysWFAafZb9FtjuEUcxLov6eR39Rqkz2sb6Wc",
  "key24": "5MTYHM6ySUnkLMjh2GjRQoXLityAZAwmJxdcSTU2h8HJjmG56cvSX4V2ckqBgz6EhuEM5cedm2zXwbimTcv5d17v",
  "key25": "5BFsvquKXYxZe91nhxMFMybzk9quvGpTwCByCJHEzpkHQzH3Z5Yp582w6c5XqWQgoxZwGBoptb7snFTXNTugjF2D",
  "key26": "4ZoxsSr4aeMpAG2G8hPDTP6BTvj246cczhhNvXuUotBk9hLKSjDhyLCvhWFmgoc1NnvEsi8eDPht6tCad3fEEjg2",
  "key27": "4qMUgMsSWetcHvK99gqw6Y2B2Ko25Bcn1aq1wbcNYHwL6gL4RygXPkdwXAk98eVWhsmEhfxaR5YEMsvELSy2JF1U",
  "key28": "4ffXTDPomDRo5VS7Pe66ZjbW7EwDgvJrNeokzWgzB5uPGmFPU2Edipwsp6EgLKJEGGXDcLxAECU1SGhdw3bfLF8v",
  "key29": "5Dpeuoj9aFMcHdekL3vKu9CRR4YoiAYn9uTBwtJJ78tNSY5L3nFC7bHCmW2GV1AjzudMTxSjxRF6iJkJctTFdbSg",
  "key30": "5PCJqVpUfS7UcNRSuq9GRdK9j1GqfpBC8krqYqrquZ5efmbNQ7nCcs4BZY2d1ZtkKx8mMex7coZgfugi8LsA74w3",
  "key31": "4zSU4vFBwrhLnp86YcRsVeSYieme7dgCAnBiEjikRd7pGBSdw8uPZ8HH8sPpoYzngdT8H1ZQ39xBhE4rpd7aqsNC",
  "key32": "4fd4ZYBaHsAxLx35xCvvJn41jckags2jepZsNrFW5N3sKCk7QJHwGLacZf1y9Pu5NAWzkNTWTXoTqkjATChPRidN",
  "key33": "5GUmYwurfzP1XWkGUWJtwcCJG9mazBdCuMQWEQAnaioujbCrKKzCRL3CCQ3vUbEaG5mppH9Z3yRCtvBcwSGXxMdn",
  "key34": "VvU2vmwiXrJz17AzZASdNmo3fLp9Wtn3LRQFGnxvtRp1uE86esAmg7njAKVcS1tBNAvrSkAsvCF2EoKvZh3ko4g",
  "key35": "2tQKVZp5evKmHNsYFYmTfLQCVhTN7zNyufZdBXB2zzZ1rkaoj5TwzDcBQFERTdRCv5AqvVXRkfrU7dbeWJNKeX35",
  "key36": "5zExyYbjKbFP92EM6ZK2gdWEzVuo541rGoTvJhxTC2giqEgaSDbiqhEy6C362tmJ8z5vq9ahRZX3DFdcQndrmvwS",
  "key37": "2CUXae6T8kJu9i7SFxTyx8vfn1qm19fk6wXjdPRC1L3pzCzEyCMzHq24be4EVd35kH8Nfzagj8nxFjURzq8ceETn",
  "key38": "3Ved4xJL3j9fdoN4yRAZxQkt9nkHv7yNHhVxz8xXKawBGXM4bj9SYkQ4JNgd27YCpze6yipD459ms6eC6m8Gmd2t",
  "key39": "5pCjwdetB36jkPghas8dE9qdJsF1fZP3dWQKzLAscX1A3Jo5J7xZWM8tRtdeJKrNXCy4XyHQ5hVnkMqpdCdt1jRC",
  "key40": "4ArWrjctonputabyGyjPnDZevpgzzsx57hJLSakF6WUnoGRJvwR1Cmz8gB6LWrN4gdcZuHfXy2BJ63s1ziMs4472",
  "key41": "BRfhXDndnrZwB6QZ3jiqv3sZxu8mpFLf8GzNY9hAASYfjUXnscQvN26Mv9zLyW34eaZzpJj5i3fGtxbyW2aMJxL",
  "key42": "24xaXUqcPKYSKLXoZ5eBvJKDxXkaFFXgrfTZJRC1DS2vCHJQ5sWTc62x2hd8TqRNWz21HQr8QUyjW7eCxREzhkDe",
  "key43": "3hFQriUiUNVWHYNawED7gtEmH7d8xmmxnUS9fAjJgu9Kr7d8tmo8XhHRVJWq2qw3TiSSPkSXHPTn3Fb2xqPjDe6A",
  "key44": "2XjvVkVRtNZakGJHhtbDCdu6ewVr2HFR9gJwuBbhXvCjYFN5iESpYqsLQTjKqUQ3FTytC4tDJRs4oMLLKVqXDpo4"
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
