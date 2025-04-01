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
    "vurzRjgexowNRVg9Kh8ViZWH6r9GBTM1ZqcKWJWSmmqM6J94DgEeuSu3qrqgUjehcBs2Zrv1tvcWZS242vfpsf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ErjDvu5jBaZkYiUFqTokft4dnw2oa3PArvjrUfDysPG7qa176NmMe2jqvG8XQS9RcjmnKBp81DfBT97L6r5gFX",
  "key1": "59BnsAbEHYb7gnkWMzaPGfeUxWbY29bBmGUASLV81UY5nfjfPqctgTV6bDwJxPmJvZf3vQtpzqmKDSvGU1RiMyxx",
  "key2": "Q3KjqGtCmp7EhZEx89FWxyRMWcP8AFNP5BWbJjRTLHtCsUL9KAfALWBZ422jYrNVewW3Z7JNNyNTVENG24q8pNY",
  "key3": "RPvAc11vTappAZERyTvZztV7Peb4jgoFSrLgbk3oXdx6reX1cGgEB5x1Jrd47cdjVDB3vwxDQCx3tGnZntK5Gtv",
  "key4": "4p3VxTZcGWwtvdVj7exPDEBKy4nA4S29zCzBVDgDsomdoEkACc1KnSGaQPmQxzT6Zn4uAxRWTBGVY4hMutDPHDBx",
  "key5": "4WHxKMQt2BwrcAW65ojEWX9CgDBxEAa2akbh2aH7BakM9eh17jdi7J3VSoaz16zogY5FvrehWPQnWdyJ2ymeZyHE",
  "key6": "5bWvRaQeaqCudW3FLwu9J2VY7B8fdSjrodeSaSsDnAewJfHcTAxJ4mEpyQDhSs81gfa4NJChWQY7ga3oRyKdMwJB",
  "key7": "4SbgjtJ8ATwhShQoVRdgGYz5dYG998RsHU3zKrCoDoJc4qgLUeEheFrTkkSKxZk6nNXEAiyJuQxJyEgQB88RTCqX",
  "key8": "52p7wcSSiVQEwhVpFRunPZrPwq7tFw1nHMffJPAiJkr5KfkQzbFG9AWeEQCZSHB2AnShSYRA9S6YebnuqHRg56Zk",
  "key9": "2R6xfJ2uYQFuanA8mG3YUh7qcsUxateHfGx3uY4ku1SeGFA8hVFrv8rrYpfZMFiPxjDk18yrGeZGGQaodLQWjNed",
  "key10": "4yrYR9SRHyLr42LFX7jVrJzvv6M6zJ8EzfnabAGiYUeKnszRJyGT5AeV3qP1YrtJUyoXgYDgmk4BTBye9VduLvMD",
  "key11": "2khn7kEPFvET1kNFfu2S7TJgPFSLaGtVFfTDKhVQw15PMiVKnFD9ZtgQS9MC8b3AyZhbUCgD3ADsVT16VfKLwxs5",
  "key12": "iQYoDcwvxXR6Dsf9VWfUw2Zu7PdVevDHEkn6qjxwHTCBRywy9dyAwrq21Sx6xxGARyZid2mrqwddWn5c5kTdLTX",
  "key13": "3ZG5RWVeu5pguoTSr92hDogVF4JwM4czgfnCztNWecqjJjGKSk4fu7jCLAFAmPdtDbkwZwLYdSp6DroBL7MLB7i1",
  "key14": "2rUJmFR1Sjjyeea6e2un43Yufh5p7Vg5JDdppyEaPjAcR67tB7Uvwhh5BmCyb5g4fQdpnE6Lcf3WvStujcYnLd5F",
  "key15": "4YT3Mg2GAwtxxdnx6xqoe3SgzNRJGKziDPWkiQfQZN4q5GbQUEFTmiK1LtMPypgN7v7rdc9iEykK4Z5SaUSeRZpa",
  "key16": "32WpsDYEPnKCZUR5VU9VnqgHzNv9HXHPHAgdm2vT76SoxhPLtUvPrYSXoypCk2iPtEXNvTRarboQmZXh4rysXVCC",
  "key17": "5ftdXEebjvvS8siSxkzZVoXKkeFgSQy2tzhnne8zHvQnXJz4FzJ7aMRgax2uNzhWSf7nB93R3M454uu8fCZ3R63s",
  "key18": "2mEWGxzdnZCTwMHkL49zgsZxqmHEw8Jxt6o165AJKYgY8E58mHZGqsfLBfHcPcAHZtZVNjqbM7MBkFb8EEhY72aT",
  "key19": "21U323FX1poPHqZL5utUtBCibeHvNid8kgjfEXwcDg1La4p6rHtuwyzqeh1EzfeLkTjbDET8GHq6FFuDa76icXpu",
  "key20": "P6TnoHXUEcAKZUd8YwPAbrPwjwXMQEzLB7w2HZD3v1pvHBKkv8H198kdNgEQk94mCA13GMXogMyhktq6BXDLhAS",
  "key21": "2qVDDUkjY8Qkuzrd9CT92hNyGGMPmwhoow1x4j2vSj6fvqBZGc93qCKSLTva9SpbEdZ18nKJqXF1R8nKBU1DxyXq",
  "key22": "3yCWLukhahTktxWMFcqx8ntaKCFopk4SxGiFM7auNzpkJo3Mj6UqVzN8DTU1R7tHG2RpkEuv9SHbGttjUWGJFL5w",
  "key23": "2dzP3KXByPBmj52KnXfGePmuJv8MwsgPqwDJih79CTryFSmhD9rhheYAmQgHvxkvCd4WfrSePHitakePaJcy4oKq",
  "key24": "T1jnzMaZPyWrJPWsBaQyBFi9tkddXZVNcYKs6FV4k1ZxU6aoaHxrwDUMd3BeTqyc11wNE28NoVCnhYbWJb9RBgJ",
  "key25": "2M6c14YHNzjuT7qe1DMSQxCLgFdb1ExyAR6xoqRSvQocidAfaDK9YWWLxM2Nvr24eaRMh4KMrhtDF8oGcvPaBvUx",
  "key26": "TbA4aqu7P9Kyy2vn1nzLYnktrTCgnuPcJ7XJy9K8srUXeVYoduc3pTZ9JiMfANP8idtSu9TuKADXMUhKZSY2S9y",
  "key27": "7k4ur28RPXU1TUV14tdJTBJMWbvLZXaEKuAD63a1nykcDPMAenYRzSZHYvFQaMsY8qhGDtx1VTJ3RYnDzesjcKp",
  "key28": "4k26uXfazHYav4f6zKKNmaB3Je6WZuzVtibXBEGGa1Zhh5fgAtHMGgkUq7Xxbxi4o73W86KYiZGoL7duGTkqsxQH",
  "key29": "31QFY3YbczkBemwoBXFq8Vb3TSkHnkZdHNGAb5hsn6Kwj8FopTjir1SQNHcfD1Ub1Hd6L7MRgYoQ294PDkBRfNkQ",
  "key30": "32wbsrVWbeawLcWjnTFHTyFDh9a3Haj23Nr4dzKyeeP96hHR9bECLZzaJxxVEKde6jCgZwaDvL84CdXE2Tqzizpv",
  "key31": "2USjv9RY4U9F8DhaRvY4DSKATdzKBeQPV1iFgnZ432YfRN71Tcrxk5YKJYtAzeK1wQDMGsaDSYzRZN72jWgVpwGh",
  "key32": "48utigkb5jYtTrcHr9kfumk1innBYbNCnwNUruUFdP2ycbqbwjhNHzBesMgSAnLssYcCfurRpNdEAxJvWY5gJUZj",
  "key33": "2MCStjgvipvf8BJiCH4VedzHE6dG1L2uhd8TMVR8ctQpkzpYnv6TCGNra4nXgeCXrUc4p9udBVyJWQNTxGDbiZLx",
  "key34": "4NUiEozpwuySJ7675ZrotDRFpt7s43fFsMAiphKSr49cio3Vwjy5RJrAiz9CdXhEYHLJSdFjidE7ifuHhbJcz93h",
  "key35": "4rmRnLhPvZuwz91PVvWR2dmfiyAoEY8GqQDxL3BaKvx4YdkTV1HU4bPCpqKuFR2GHkzD95pjtYnHjXrkqL9q4jcJ",
  "key36": "5xfXKdzDD7Buurp2FGrr4NVpaEWry6SG4cpeZn49fH2hAJ1at5soT8xLhKoWdH3EU46hzvSwBm4RbjCBkLhsktST",
  "key37": "64WcZgyEHo1xddSMb11gRsbtx6eraZAZsV8xygFzVzjnqbfVTdJeM7Qd3HgwpJiLUxCfagSbfxrndWqX3cvLjzoW",
  "key38": "5G2LxGyeKEKxBm4hMKFZ7Kv2VSbiGgXPmxLejUKKJLZQr85HyMJyi5uYFYYVQdAdbMDpXLXeCGb37iX4inGkdmCc",
  "key39": "nkD1PoWyEtV1cidZ4voU3jSySa6cWHaKKi6t4gGUcSWWxqGFEbgs9U8iJkj1AEzM9HrpGuPaWvaQ48BaMAKqLbx",
  "key40": "4bFmZ43tYmuhjL2RJ8cHg3bskCrYatF4xD2M5Pes8Hoez6zn7gw8tGWefxCBQ9pXSWUrxxjJouowrrAE4tyWYd3w",
  "key41": "2v1Kdbh4RYxANcjHNkZgV46K2pUEUrpShXbCmGkRFgh8EcZcxfY9XaRjnKyhu8d4n3y75dWAD61FeTPV9KAcStMC",
  "key42": "5UBUHtVcbHY6PLj5aumgYV6gF7AnnGqDGDy3tjuYgcwUxQdrjbJ16QtBQvfe589mWQLfgXxiriho26oiAvmAbSKf",
  "key43": "5yJdL6uT9yg24sQva1iZSh5BQsSJg6ngYMrafBV5UEF1pDHcvburwqt2m2mKabg32aJLDdrMEgZPMphakZmXgm7V",
  "key44": "2tuQxemLPiUGwwnr8n79F7Hgi8oasR3Nh2UkMhaDGsM3YFMqt6oNE94e49trFSzDdmrPrKm5oZEGKD2PLzA4BY9b",
  "key45": "3pZRxE2vh1J6e7he8aiYkd5jyuR1NvjWMg6pHcLgQDs5wZd7qj4B17ZTbNq7EjBpz1mUDG2dQ6m9YcGVaqcFb3Q9",
  "key46": "4YkwAmrZ6ugG8L3btVvV5WHjTpAeKrmDtCSgpG9DxKnGKuvRzVR1EsReo5HFShfD6BLNmtdJhz9HSHcY7RqCm6ZX"
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
