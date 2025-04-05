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
    "3cCEkGqzoXcqR23NXtbPv3iRBfTTxTve7aP22R4H4eXkr851gxDePbB11CdJLaXMfpen5NdZPTG9Di5kt1FN6M7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AGCnwRLHPUwTsqnmfwPx6qcHxZeNoajj6Wx7CJQnt6t4RqfERR9pexrD8RtAFWbr6YT1vDnyTGqWTJBBvk92PQo",
  "key1": "3AXWhNbntqpK3q2Lr7dQiw1wghn571inXmHUzNzfT7f6CH2U6uZhuWHyAsWAnGrNjtcjfv6L1fVdA7P3RS4Vkqi7",
  "key2": "12tntdt8Qb6jJE8yNqd79kPQZTbs8QRysiGc8iit2anEcuxhfvYLDyQ3pKEEbcSP1EUDahZkcrSgyn82oqS8fNr",
  "key3": "5PAVGxLKWFLdyUVTycfFVWorff2sHLY8cYRsXEBnw3VFKk83xwF2o8UCyTFzY78rjTCG1axbZDdRdqdAfKfqpRmu",
  "key4": "k53uHEbVZL3sgEjMQwBGXW4fRAGeSUatWKtpFpvAz5f4xkRdjpn3GGD6GrfrVkNwZH4rkxVSGzh6ohnoKNeQ8e4",
  "key5": "4naQvH6SpoTM7Wo4KqVhQYWjCw83EnXMLkxzQK6T5rkZ7uv2XYVkr6VrMmc89oJDkS9LsGH8nH2H9hjNhHq5vhXu",
  "key6": "5L7qZumRdZusvyG79oWnsn4sqLnSXGHDh8BwjDu9bQttCx6ZfFgJdaHctMvGziWqFgsPW4PmL1auijtcKWAmJSjP",
  "key7": "giRtMksmrfRmUMyfCpBL74ibkqhKhgJ76shzW65DQqq1qgpgXipF842JAbuhbQR3g2yrYDu82ZvPy94DrrfpWoa",
  "key8": "37Ka6ff1vNDzzkNqd266XupMRNG6ynB8UNh9sbXrHNK92bKwPGSrALDzun24uzsy5DTdLQEF4Rk2ReXzsGoPSh1T",
  "key9": "55c1F3oJaGegcdWymwbKCWWNBEgabNhh8Mn9jjPgiWjE2aja1meJ1soDFojq4QsSCAnJwBR6ZuaTf1bMSDnA5vkU",
  "key10": "3pXyiwWsQ5E6xaZguEVz81wEpY1uma5XBe1ukKyt41GyqaU1vnZ24FPgSSGmvndEixKgiiAnhCTkCjjsiF31nnr7",
  "key11": "hBH595ERLeWYp1vKqzR2bTnccjbkr5xiZk7Ji8hg9eGrJLpy5spfr1PakoRZdCNZu8M6GbincmjbcpGy5RMtWjM",
  "key12": "5XmsoTDvGRhhSu4LpPg2P74FHtq7PFKFDCaRTENr8PCwE3WuE3Nt1UG29oJL1PFRxNmUhKa5hNMa9JaQ2Xb2hJUk",
  "key13": "5QRszDawTRWf7NJAXJLDjyHPLtmaeuQUiSSDQkJjN4EUohrTuua5BD3crLhNRfv3D1osHeY3LH5oiPeAz5vrN1m1",
  "key14": "4gP8sKGvUPrTwvsJsfUqhTqaxTugk8TvfMvBuJR4dw64E68r7rSTQuUjLwPH1EEATnVPFDSc3WNasEzCix5LPGwX",
  "key15": "4D9u7sSChMroU5iuKPW38DZqYzqzYQ5LkVwyJzjwRCsm6Rk6crhBHUUBRar3Vuj4M5CxGToPzeAiVmUmzJshrrba",
  "key16": "5Niv7bmM3FBGEpSEkCbEY3YuDsy2mz2nJifUFVXTQBVvmm7hz9py5nuy7AK9fS1MEQUT87TPjgY2yJ3ZNNadaSmG",
  "key17": "4tDLnLAKqE3g1ae7TiY4sMdhatPNPkZefecHt2zGvTkMf8Fyw7wAZHCH92jfovhUgjL8FyRDhNrSszQpSaUh9McE",
  "key18": "2ymHZYspXAuQ35AU3b7ezBcVkFYRV9KxRXZr1ZgXSChaWVZgdLBiTThEBaMVNxXkcHT4HLMsv69qn88AAAmSxhic",
  "key19": "5pcdebLHDCZhptVZtNZLEkbbikpXjMTQWKuetWre22XimMQaKfe9Bm58rDZdN1BKGG51dJkJm5xWDtJj7qj7qRwB",
  "key20": "287yvSvQ5LidzfStnge4r5rmsUM3fwT5yvsNepCWDEJyNsdhZogNrzaY4pd2cnKY8mLxWvo1ZkzXaybRLQjRo85G",
  "key21": "3uMko5tueecsSew8hsH4vG6SKv3ZEefCrVGypw8xgNjB8PXdEynMM4qmZX1amSa6VSFvE2zfzdRJ5ZLP19b7QfyW",
  "key22": "61D2CQuKn2odCAn45kTQhrurgkKU5J2vZ41sssfyUWBa8YskWkudCB6FPwbfFCqpWwXuoYiB59XbVB6TpTTqRjsE",
  "key23": "2sBDCYQFZdaNvmq2LBx6VoACmZXWvj1Q5jXymG1sj3Lf1abXPxqErMPpLRuPmbseZtVRvrJumNen3GzUxbFoHRrw",
  "key24": "4mwGsi4bjqwFzzG5K7YP9cLeFMFDDHbLdEkYoWsFU4gP6r9WJ45DLRcZrWvK7kH5oZ6VMkBJGtuKEN9iZXg4e18a",
  "key25": "3kvpS5xvjvKH55KJWrDkKm6sUf8fmBb5TiVV7zrk5DvnxXMjd5Si8RGvvsM3CMkQ3Ucqcyjbv3e59dxPidiXMLVR",
  "key26": "2YiaXMhm2rkmFCJPrFnTiXKYUzu5fngkqvjh2JVLeXQC7TjGim6f58hbFWcQmQhWr4xZkXxfTbXC1CfyLwL6cyNY",
  "key27": "2TmWbVQAvSZBs954yDLK5yLJMynMaFdkbhPLJvFUYd1hmLUnxYbHa3JDBYwwYjM23vodbbgohcG244JT9aJHmBa8",
  "key28": "5LYHEfGd6pMAXhymngxizEF4Xy4L9QQVHVxRGbkEBtXnv9BPfssp2MaxeQGUdWxbHk7tEy7oGq7mdSJ57dNSFENH",
  "key29": "2CRdm9ZhWhyWomydqwwwkfEWogspbiGUaZHxnrBBt5MioTuizNj71pxTmMpZ7wYZgdPxqHxy1Wc6AwGxX86gaVjj",
  "key30": "39Gs1WK4261jhLmnmSRJusp9mwgsFD2QgzRVtwqVcPSpAiJxWAM1AGJVAs8c2d4GrbVixDeJUGDT1DNbXsW1Mjsx",
  "key31": "23KDKbqqeojDvshFsQUoXnB6ZvTMZAb5TJCdHL4y21eXxjVEqgUDmjquWqteHZmctn9k2X2DLFaAHwqcpyqaMTVD",
  "key32": "4u3SsBxZurDDZMJr9fusFYXGdYV4vffvvU6k3X6PudyDB2khWVXc8ALsMHdLG2emwVJ6GketD4ZZLwgRGDSP96Kp",
  "key33": "4PSrFS6pyaYZU5RWUbWYQym2f4KrrTvtzZy2HS3pHRKFn5zEM3X7njUYhh5H9PAiackmm9d61UNE5vbK16KwWAtk",
  "key34": "kw8zzSEQCiswDJzdicomfUzWUF8Lf5gtcEHzLSj2HTcPBRBxEZS4bQVRBQisN5XsAHVqo6LFRHuT9Q7zdFn7v5V",
  "key35": "677uaXPMJCmZmUGuP627Lu7fahZ8w2bAAdzGHC8MF8oy5K6zTQWan4DnP3dYCHsVdg3x9Bs3VCp3xDLh5NhEiHAy",
  "key36": "4xveFxVT6FHnatDNy74VRq5fCXt7resqNfq1qhDLHfetwkCuG7bAzSdi6bsZGMeDzvrMxZT4wexE9MXnRmoZikUH",
  "key37": "5SndD4abQSZtBtSsBpEDRzhvzuaCrk9tG5u6Xu3S75rcrhZV5yMDc5cCKv5krJUuq27LMUdFmtCnSqj42u5WTmQ2",
  "key38": "pCVtX9GEVfmdVmHvhVnz6Yj5m6XbrFpQz49VZpnjLznqxf3ehJaMxzRPh7Cj2JosgGNq5w9kieTRVoScodjJUvX",
  "key39": "5DvdHEJ8VKhcQqorrGoXwVVKDtLdtT2p4r7vaav9UKH45RVsx3c16uLJZzokWFP7Bb6n2XUG7PfDCAZKSmSjcYVz",
  "key40": "3NJf5KyBhi4sFrUs5RVdhJgZGdLiyyGXSadq1ZN3GMe8c6aqxtQieLSRTZVSa6Ki481VBRsM3mKcqVMraFLp7zka",
  "key41": "5yDLE3DyRoJHFc5pMZ8UTomgJRtip9wDmDN9HPeuNJjacnXMJQVEkq9TUqFsRRA99vRw2LszdBYWBAYzrzKwSaCt"
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
