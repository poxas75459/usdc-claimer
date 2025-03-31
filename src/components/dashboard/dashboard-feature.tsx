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
    "5HZre3FUqpNzaTCVt7fgf4WXRE36W9g99KygVeFBVapKGmUusdngAWStg9JJcEXMQBw1WMkERdL2fq5ZHBZoTJBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HLh4nbSbbvCtesCnWdp1TS8zHH9FG9KaigkhfUAFgvxXRHdGvH95wZDhktKhX3qHXGavFSQs4VQi6EuzCtLTH9",
  "key1": "DmCQczZrjJTHewun19YaMKVkb9UxTzMyFgU9f2rm7W99nPDA1dbVwPQWHeTkBLxQvY7ZzpLW9R9GJWiT5S59NW3",
  "key2": "mDyp3o2FYVboYAJXuAPN9on7EiEPVURTzjodSM2uGgVGahhKwwxmMdsncrREqngCKK9XX4Rmc59jzcxqXFwcd1E",
  "key3": "3rfmhWKEYms6Fs84AJXZW8FpaHbsqmqoz1yLL6LhemiSDU2ZzhqAiqzvJnjwgF2JL4YQofX31F3BZk8MiAVfYVvH",
  "key4": "5k2Pu8rZAjHFk8cTq7w2bao28y67GRESWU1LJmHpvLuLKWncue1F1dpUhDWibrEmNu2fV9Cd3XpMRDpnv7zpXYse",
  "key5": "43oS7cRgwSARNjFwaMnkjYgtyryzsZ3snabQfrksGLGy16nPH9jRWT3B5UvkS2iRvEFVrLwRm2634BZfUcDRcV8X",
  "key6": "JHV6dYbotu3LNiPBMjcjaZBeyeWmkpjsPeDJYsv1ifrejGCYbAeFn4Ey4ZZnqbchL4zuW6PCgZcYB3KSvf9CNMv",
  "key7": "5SgtN2doqpNrcGMHxoYr33cqdBVgYt76PZidZwRw5XJHssVxNPvsFQNfHSsY1i1h1qjuvpqrbXDkdAkpqeAG33wq",
  "key8": "4jZu3rumMu31EjENjeFowurjpwt2TvKQQJpVULCdgkaArrLgXWzDVKUupzBboWFSNn7YWKQJiiHtceZJrxQD1BFR",
  "key9": "2zVVJNFTVNroB7mYcxPGzBZq9hnqNUPo3dkzBURNjQgRS4y7AEV9zEwr7NbA6nsVgHXmRn9oSTT5WhVopPKYYuBw",
  "key10": "2Vbi3w5FBGPtjkNkQSTku888BJuwXtQ5adpEmYoJDbTWGeH6kg7eY8ciwMbyi6WVpjkN22HeJ7R9wrEPYNQpmnbY",
  "key11": "kkaUB5Q5YWESHDKZ2ybRzeJRca9gr7G9PhXdQeBMBKpJWYrGmd1QRyXih1yniLXeRw6N2w7CmzJmFRG1v7q7ujQ",
  "key12": "2wvJYt9xhe4M52M5M5Ve2av1j92EXrepVZBVgoMsZW3m5zBB7aU1d8Qu4eZgzpghFUvAnNhjUDrLqrLF757QFANB",
  "key13": "3hiFamfixfh9HfwiDbwwA4VeGkdsA3FJ21TCYzTUEFoWxKbBQ1G9E8pL78whKeKPwzC1cxnYC98yugNH3bGiYQEA",
  "key14": "4dhWzMqsk6TCDt9Dt8yqCZCzLxSkqtyPRHt2b2izxegBUtaK2tLRbdGB5rehNdhxfXjonewuak4UJeAE6P9RTA3H",
  "key15": "4F4VcveMNpSRGcAPekmuJvcPm3AS1jtGdLe9tn4oz9FStbPvuCojAGnRtDeNcgt4BFp5RywFV4pAuMvupsu1X6bL",
  "key16": "3iwtd1fe22ZE7oxPpLhhmmuW8ej7wBkR151barUFeBPBXx1dZYndBo9Daf3r1rYUS1VKfjQ9vo84WG2DeD41ebSk",
  "key17": "3u5RTFS2kmD5GEXW7pMbarMBcbbrtJ84cCBKQBuet7qZzueU54eUCVbUTmFoNqtmRcFLCLXsdY1dRHBCWGZbjzbr",
  "key18": "3ZEfYsqk5n9zARm1iGkfCS6HrEoWbtt4LgDKcu9bvbkTFMVztKkmGmrEwr75ebUyeCTMhBn9UzFMmmien3DaJR41",
  "key19": "4rgRXgtnMpH7hmdRCgFiajruMFuNPdpHbdh3jRyz5Bsjy8waBFx3GtWr6n5iFAphyRqYjgkb7njqJUELjbkuycsx",
  "key20": "2yvbrDCXYiD7CpZqEnshwN2kbJbjoS3fHokATdfbqptjZGSXp76nJVmA6R3MTi9uyvmbzHkTnhR6j5CnjjHB7GLT",
  "key21": "8AHckgyjs3LKwVisVX7RCNzyqfiC5u6Rh4rLjvGUCVzdEm7dwNPwWY9WHF8jhJnbTN8WBVzQCLfeLovYa3hmpeS",
  "key22": "4LZEPpMcu5ZpsGECguVyd8NdQY8Xr8axjyNRoU9BrryD7caDDKEjudnqAYBEAQ9vcKJXhP2ZZtU4mgbyiZgmUTzG",
  "key23": "jMEZtG57ik2t1YqcVdT6hHZApnxDZnqNK3qfKsDSxYvcB73gZBWTmGfht9dh44BQh4qsdMg3K88tUFXdRFWRQg3",
  "key24": "5AjQry7CMx5GJGA6tFUH5qBdNuvY3LUHMPGj7HgdQ8vNNVhSNdwDNw5nZpdCwpaEhsNveXCWhC26h4sPC6Qbwi1q",
  "key25": "Vaq8fwMsbDVSeepyGvppn8ym9FYV7BH5HkUZ1Af1xxH9J6G6kKAHq7PaHVTaPWjZHq1Um7NHjc4ZNFSF9eihLj8",
  "key26": "2ZqefJ5caGojDo2fgfxfC4ovbpowXyMYsRFVGmh2UQVBoofFes19ZYQNTvsmnDquFq25fudtfL7YCum6FdRikbFo",
  "key27": "4zFSPye88yc4QrndYE4NXqqXAbSpfXyKcqAva4iqfZsXX8JLjmWvDYPJv9wAgPb3HYLW3irMeBjnPMWrV6zRaWH3",
  "key28": "2GDjhyeJTUAim5KG7pB235qVLK1P7CLXgwKyPqkssAHGkXZUmv3PEfYR3RXzNzqJh8WZGZ1UXzbe5SyL5QSdMnGL",
  "key29": "hVrnPzBMMTQr1KbyM7F9Bok5RaPUY2WRd4hLeoRyKiQi9YJ3on7fE4y8Fk4nboTNXu55BCGgs5ZFv1WfjYZj9J3",
  "key30": "5PfW5DcPsBT2PXLNfLVz47pLgQubJmnbjUbyiTLuNZRM734vdWtZnmupkABYp67E3qoAdNHW1XZHu9XonMy1VjST",
  "key31": "4VRx2rQWkfxXTgeY1eUCB1k2WgrBNXZfYJZv8GhADTNy3ZxKWi4dqUTDFYutyWP53vkhZLPCw16m8qWUVWMqgiU8",
  "key32": "5efE18bqp5si9VbGUnXE3fNv7gXhKec8ZFjeud9r1hApQH5pw9m8LvW7ieMF3xpBpVzeiCSFWacNmr8AqEzpAa7E",
  "key33": "3YNLj3ZxsdNGg3JtWWpj6xeViNnULmNF11XugxGr7ywdmt3vTbpnB6zzzX3R1xXfnpFDQQF16cobNoz8f15xrJmm",
  "key34": "4sV3cCqYF2o3rzTCaFzWNLjKzBHdrpd6LGx1eoCu7iagjh5bqfQziT7fq2ze4fCwbL3DMYgD4fmLogwaqJ8zAfJZ",
  "key35": "h5UJ6MZSZpH7UWGvcpWsM1kfrrx9fLnmrRYekWLVqcD5tNr3LGgc34An4o9c7HLo5LDXn3ganxgazLnMmz8Dm2X",
  "key36": "rzTPwkM22T9e1gCdM2buzg5p9EekqtmUJcayKVkLNKMdXJWNfMK3xGB8XwQwQU4j3D44nQEc7gACSxxYv1ZvHbY",
  "key37": "5T8nmNEcPwyZqDMhSRJKfdyQiRpnNVWGo8Xp4PyV4rnG8Te1JGGjNXpZ586dSv9FC4om4i6LMz2AvioAFh4awUvW",
  "key38": "37WKo2SNQHdVHqfmoD7GaKt8VkE5CuAoEheN4hf3y1VtTSGi8AotEe5swzSQ5NRQu9j3qsoDw1c9VXCseejVpM1L",
  "key39": "49gT4m5zZbifYsPFRP242e27GPDknbFyz5nHCXvd1orHaFJrydWnBX25FP686QoGyZ4WqYcgMKAMchTyzk1N2gGg",
  "key40": "3Qzi4x22MyudbpibkSht67n4DzU7qcyZWoVofofk31tyGhnnN6o5Yd4cu2qwAAs4X6B3VMqbHKPbusYK5YaVXxUp",
  "key41": "3zSKZAKtSPPBhq8sJyZ9GcJnjTmacayRbAuYNox7vARWqjUiephHuRcJRHgJRMZiVNMoE3YMkmJPv5dUcf283vYz",
  "key42": "z3MVtpgiq1Epp28o5E6rHo7iPfHksru2eDdNvn3upNsacqmuTC5zfCy7k11JHnrhhvQh9DqVorgJVAA93ANaYhE"
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
