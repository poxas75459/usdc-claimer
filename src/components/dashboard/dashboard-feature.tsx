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
    "vZQjRtuctYmmy5DNHQoP8Z8P7BgYmM64Xhfct2q7xp1Y6dRESqqrnfFkWMS6grbzeysxPrrq7zC5eb4PNBvPWyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AK7aagztj6AXvph5n8wSdmTYnhA6KGgfHbTSy4Z6gaLywfzMKPwnuv2PeQLukNYgpdb8NpMjichVKV5Hip5gCmj",
  "key1": "552dPBkBChnyRZQgbqQwbWbpNvJEqmD84W85QnpoPpGQoCtTAK5Swp8rDWqyW43zPPdGwk2s4EB5f6HEEidqkLNf",
  "key2": "26DQV84iC69yo8XTT7F3uoMwmeSiYnVhn6kZgxXypX3KkgqyhPTzhvjWonUKMhMRe4NhQ5MARwC4jNzmU6HbnnqF",
  "key3": "36KRNWPxwogguRq5agFJPzhJWPFjScrgNNy2wQMvgUiEN2Dxp8NuoyrKoCYuUmnRtAeF39rxySVmeVsW13VjPcap",
  "key4": "3njmAjzRBDvEJMz5NQHJJBFNZzMAV74R5GbD26oNWx5bv18xsKyL9E9gUmkUKn4XEWJUwy6BNhTg97mrC9nSQy1f",
  "key5": "3sQ7TEtwp9m8cvEc9VkT1nUGLZv59QqzCVCBJG2kXJ1VTjy2SXrnpS38F5afCGquwuVR4gVFgvU42rHE27adzx1Z",
  "key6": "ch5SqkhUuA7SPa9k75usUs3WATwnEtdbxLyoNQpj2UM2AnppxkGBY6DNcrHKK62eH4QXLeDo4xDvAibu7VicDem",
  "key7": "5NnCcndFdZpu9pMZKXAiRyqRMZr1djQ6V7vhTSMmxZGN5khn3FXtkTR9Suj9mFxjXc25kJBqaoxMfWrU1YXjeLTV",
  "key8": "4pLSSGg54BXPmvNGFgUxvKCXyMz51uRV4vyTCCJXxuv6wB1ApQQMavCMiE596Svv7oHZoqZ5ve2hdQhmXBMqnbbY",
  "key9": "5fxrpfGGZHw4jGSHBfFaxP7ziAoJ5ZBE8NBDmE49kFwyPBhh5R91qcgaM6pXsgsSYjAxznpcgqVMwqnXJmsgiUeZ",
  "key10": "3BGZXavAZkL6GTYzaXdcbeuskxeNhRGuMQnHt9FBzW2qhtAV8JuJAJCbvzJRbSs5egRcPeRPomJij39soXAT8GRi",
  "key11": "5Q9WgwXdVczhS1bQtuz2rE6D5hokc5zHGQdao4LV4nPLcawPSMPPhiUdxQjPWja8m1hirL6GrhcxxqwuTmx9qet6",
  "key12": "5K2kJumwvzUJrTbYmsTYQH1zeo9f8mHULxcjdaduJKEGfE4q1JiaMzgfjeqPhYHpR6E6ajbQii3RXhMJJPU9ae5p",
  "key13": "n5sDeWM4JVBaDirCyN5cPJU9Fe1tBvNhTm779tMcHCuQ4EiRmJqBdrz18f8ykR43sMpyEFbWabq8SZqmH7Bkis4",
  "key14": "4LvuMh9A95aXhkDrTLPPj78Ton46wVEEhHXTnWasBpVKJe2kaBPnb7VRtXV9vCPEDj6jSfnMEoFsWDDUWBFAog1Z",
  "key15": "2qxxpCTFhW7VcaQe4V7utfjkTomVr523PMB77uL7PxTetpiXDQCM8Y1q3GZATnaZb3gk1u53ui2t1QwvErGq6rbV",
  "key16": "t731XqHtkgtzvHQc4Fyjh1QyzricskrdtNGifFJLCQZ8y1fWV9UxZdyG55DDk4bMVCcHttBcUJDRucmJybfuPCq",
  "key17": "4WC5M68MpqXpkSy9jSJag7VAVbHfjUeWSg6XTDFmpuvxs4dzvwWyuMbBbTrXoy6BE1sPTJnDweMMTJmVuVgxeqZd",
  "key18": "oK9vAFzx1n2m1JQD2BKZPuuvdNHEbpefzUAGP62xJiMw7Q8oH8rGBGstvbbkQXX3WCVwjUNptMAa19V64AZoQem",
  "key19": "1rrHUNLSNPP1jm7N9eJSnKE1hAUU4Ekrnui12HfMzQrudJ58kfs5suYjLAGiMLbioodPhu1PgwAqLKMc5svaUM1",
  "key20": "4YwZiko3Dj9BZv7ojpAvbrzCDjLcnvdFNUbxyny3BVDdBEYj8YBWBmyyQYsiUMNbW24zT3pMSbmKg4WA4M9Pr6oJ",
  "key21": "38sWng1b2bw6ozPEf6PmoUNZZ697rY5DbPoFJX1DRqdMaE1PDqbUsFWZeByeM8MeSVjEBd4ViBepRc7q7VSBKKac",
  "key22": "4WHpa6uiadYqJ8XmAkDsQK6HWD3eKpTWFQPwSg6nBRcwwUNFCvmTeaHBeQAtZiSoUNtHRMguQBAQ2V5m5bLq6J4t",
  "key23": "58EhuXqr5LDrsB9qrLYAvDiqPiHJf3rNBfdpewJgjwSJ86GYFrYpKwemxUDjrbGUVydxYjDxu5CM191rh61ox2Ht",
  "key24": "4cKQSt5awPnBpoEu1CpsDzwARhZVZWpnk7rN5pUEPxWBCJh2BKuZHSDip5JLUqPBkQY4cBAenMEYJVyTp5ZZN6Uk",
  "key25": "37wQBTA59EN1BRVjTU69NfJBHVPqsoEUEdKWbr8fTqy5qKji1QWKy6fZBYUsURCMQ93yWDFGtPRpSCy68tDshHsU",
  "key26": "48EsjeMVhVWTwfHKoxvYnKTd7ix9sY2Nf1Mv8Qgbfkn6QhaG3vPqcHbHAaJEiSZeDx5J1rQU7r55UhCPdj2ZfQMa",
  "key27": "3h3mwaNgwvDnWwUGsGd1KXczKkqjc2uox4i6J8MCbHPfAEWgXEPKzWdxUQWqnBQDxuxXtmDW2gK7baWNucuyEqkQ",
  "key28": "4YnUN2ygqnTRSuZpaawjtuHPsXjkEBzGMuN7QhDEvGopaxftrisiQULTkCYBtihdTZewAGnDVuS8BQkNpZ9w6Pfa",
  "key29": "FGoBXnJ7WdVzexBrS2BmoGnSJ2WntUH7rdZc8sjS8n61hVTXaV19infYNEqGpkpSJmPgMcTQS16NcgdmGjZ9b7a",
  "key30": "51TQCN2aM29YFDEaQ14iCfN4xMPA8ph3SsLgPyBDV7Rj4STfxmEEtqXY61QnZ4VQSD63cQ1AzVVrKNsTpqLk78YS",
  "key31": "2tYNbGRxqCBYWDpLPg7DdTagUa9qK4oS3Wnc3UerHc3tjNF5vbwVK2wViLzz7WXEzbw3qtrQrThhciVT9QaP5Ngt",
  "key32": "5MJGUkvvKUfnpj255hG6YsuLPHhtCPrMgNd2bv9sVoEuhcLZvg3Mv1op2zyY7vLX4MM5k1mcHPSGqUkH28dEG5Fp",
  "key33": "2o5wF15xNQ6BYsuzRAftW62ANSGRt9oJuL7Q1Ljr1ZHAhvk2P9dwdrhWaqL2epEsUf2MJqPtAFdMTefzfy4p621N",
  "key34": "3VQJK452bLn2wRvrH8Bv9TmdMMWxMowkW3hfezbqgyHp2dfD1o6rRxtRoX1gh3bGVW5RRZwQtvimbMQxQnopk1AQ",
  "key35": "2oVWPgeFXwG79qVTQy14N2TaGWJf2Rrny6mY4UttPWafEe9bgwE9hojP7XdiJETVcpW9rxD4B7RpVCy27GnFpuR9",
  "key36": "587XxYR4zZfmf1BZoQVPMRWZUTsXU29sYMCHFiHUqK8CufvNNAEZdQXJCfMS8JjaJThgwi4wUNZcM6FTMGuCrcbQ",
  "key37": "3SVisGqs6Kb2GrXR2EMNxt6KSZYbFGvugVb6T4CRHYHwCzociwPtpr5oo4xrvq4Yti6NPrqKXvXVHT5jsjtsfWTH",
  "key38": "5oJFjhptFjwgv3rjhCJfU5XXpbdmRM3Bji45rbBf15KXh7qe5NSqDen9niQ1aTZVpNtRVzbFxh9BEBVnLzpSnZBN",
  "key39": "F84ga5FDDsFC4Hksf8bL4Q3CVEjSFXLsGgjcFixrdpcHyTGLHsujcP1XF1pyrocUyWVdp3MKU9ExGxaeLLP3GrB",
  "key40": "3qEje7AcSLstLzoi2R4F5GC7QJY9Yod9EPYGPezXzkX6tuniVFdmd16byVJvKgvXc84UfLhYjVyQrxAvGbUawKwu",
  "key41": "3C4xbE3MANN6KJJ3kEz6is1DTuG77p4y4ivPGG6CyH9jAwuyqZQVztYofrk9yGRuS5WaFKxeJptvhxeh4JfXLFuJ",
  "key42": "gLFGq7F2rgGcHPdyCaRBw4ypbqwTJ32vjgHeJYjDvqo5irvLbxEFTqgTCMuqzqUX1ME7ZQ3Y9vL6xqZmjj92VM7",
  "key43": "5KQXau3H6f3p1hsus6P6ivwp2gK6CWittyFcLzprv96zNq9Nixm7UgX1gJ56U8pEbBRMcG2xLLxwUmjU7kp1uJJ",
  "key44": "4NYw8XJHizEAuyYshvPGEvk3BfF8g7rUeHjarUWnwDaEmYjUUg6GQ3TSQLDQSuhWHJ2pL93G2sTCPaUa6z5jdi3Y",
  "key45": "323ZxUguia4A4BvyuYUbMA5jw5CdhyQBpEd8LszwQSrYfSQwZbKgg3AbB5KGeDCDRaqLU3ixzXbxGpJf9Rqpn9z9",
  "key46": "3H9qUFdvwQWFSVcESxYj4AaikmMpRhYq1BwiQ7zXGFNsMKuLg9vbx5qc3Fx2Ud3KdEXjsYj6Eyt9KL7qo15ijo4P",
  "key47": "4uFm2SiqCDL5RCgBLhQdPfdJbbp7dmnwHLgTDYYm7cQ3WG7FypADMttgKx2ySAmayEbg5r9w8wk3NxErmHh3fQzx",
  "key48": "3sfJK65FoX5GZY5TTaAJmowN2mfSKJtW9uDm7S3z3qbeNbDwKDEAbUKncKHvbPTa5vD3NHASsEotKXACctFih238",
  "key49": "5wNRAxNRoW49DNxzLJoSVig7z3zJohLSjr233T8nvkewCJQogRkcMRGER4rnrNKy2dyGpN2EwL9q7LFozJFmY3RT"
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
