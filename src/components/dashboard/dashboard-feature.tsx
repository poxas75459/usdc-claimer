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
    "5Yf62EEBe8Cv3CU4kDJXyuDSk2TtLMYcUUiCBXaj97TR4bu5m2oepWA7LtHEzd35keWLW7bTZmQMJEfAYnaAwsYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1rhKTzg9xGZ47SJFBwh8SjKPVoxg1VEA5Zu8RGbonU22j3W4GCTxBBa4TikVhuEdugEx1BWa9TNXeJVjcbmhHx6",
  "key1": "4qic4T5K52Emz136oTQ4g84z9LywzxNXkD2fEgNysxgoR5JFQWJMPCXPYYnpKSYm6QbgegGs9B6dma42bmSRuLxr",
  "key2": "4pzJA3fUKKhpAMTSVhhNiAtxUtpRz2rX6A6PEsMnbtXuzWaFdnG6EQkmdMDHjmki7NtoarFQsNjynaVwvPdHt3Ma",
  "key3": "62zZbUYNYsMmmB6QXrm5fjuzU18wKsG3uoDvA6jxr7KiGu6hQPQPSM8biq3cKG1263Nmu2PCVjBDRsUaYNiw2SZB",
  "key4": "RFhUPdkvdTw4bgqf7ayQL2KjJWZUAzF6DgniQX9FahrvZ6zFFoxGLCnj9CrKYMrsjpQ8zJ42jUsHumnnNgLfp5L",
  "key5": "4zQ9V68zCqoqvGLouQ7NbR6MTjrU14Vs1hwBAxpSDHcFfS9LniJZyteqErmq7tpbGfBcu68bjGFBd7KnSKVKeFdh",
  "key6": "4wk6z56oFwBVH7vHPWDV2FyRPzARkyvTCr5DxrhMaW2MX8wu7nMnTQzV7nyEfsVbzy5wcN6Urk6E7ykJD3xYnVjJ",
  "key7": "2axtko3TAHJoQog8AA5jXD6z43zSftrNY7snpuSdP4BzK8Fw3qQHANWZniDFyg9aptFk6dtPMuyNgsj8xAATamMJ",
  "key8": "5TtveNPBevTh26GJnfHoGwQM5LmbETK8gndDTtemRCgkdDfZacMvBgutjRoSsHMZCg4pVQce6rDnxSkjXzmWfXA3",
  "key9": "4gsYpXHyv5TgazF36A6U1qK3bcchUwhzxrWchm4DMNoB6jLKcmd85SwvuJ6bdkrXyu3DgHvqUmBDGM7NygfkV3H9",
  "key10": "aSeKuDxPA4WwEX2HyRrkC7Jpf41bx5gLhWF6R4gwpuRosjMGfc9gZZ1d8ks4ZjsbuvCdPMRJgT5uz83fxFvrptR",
  "key11": "5X195v8YDg6bpSAQgg2i9XQasqKnS2ZpcePmCLMKrtaypUd1Kwh7hF2c3aUzCMBmX2kg3rzZ1ATxG288iUNdE2tf",
  "key12": "2fW87Lsy3q5B2WNdCvVdDY4jP9NLBoVFkGkZVJLYRtVE6Xpb5Fbzsysf89b83T5oXBwenpr6LTrjDLA2dCppT9C",
  "key13": "5ryDxMmB6DpVoYE6jgCbt5ckjtAJfMq1NFmEMVBUbVYbv9qqxAzdCqZS95KrKJxPtWfP6wqsU7MotYHs8RTbYpna",
  "key14": "2qapbNb7zdRf5HsVHwd5oySVXacZKbVeBneJjTq25fDtrvzUYA45bwyUfY8UXVS66V1ZxK2AxVZD8kevk9KVwKWy",
  "key15": "49NBxAV1WwCZRKgU7JrVHTZfLUqFGPh3tqChxSPfYj8TETa99EPnz2JEjpekddGcHqUTryhYQTcjncKCgFcgP1Za",
  "key16": "65vpEQBJz3Qy9jrSYJAmaXwPPjtyENCjEgjzaL5kAUjbnuBmjBeqtEQPVDFNiZiQ4DbdMRi6LqqCHR3KR5yNZ2jd",
  "key17": "4mDdLpeQGLj9qzryYR8w25pvmguBFcYY8kQTT2wdafGgYWVp91re5394VXPE5Pg6EVkmSHVKgJBRczGmp4c9yENa",
  "key18": "5aAsfntw1Sm8Si11DjdsfZRBuuiQQTmQ5B3AYfbzdiuA3mwKdYGts9uLfpzjR7F9vTiXp8TG4kwm9MnGGEV2WXJc",
  "key19": "27yrAX9GuVoYUQNUv3kJ7CqoFRP6ueWgTb5n3EyiwVyrhLemiA2KxxqG7esZKWVj95mwvdu6u7UzKUsRfwNvdVtb",
  "key20": "3radYDKTG9mpUhmBf2fhUuwJH4ACjkxwzf9M3dtKjzNHoY7YqxH2w3GiBJnAYq7ZFZhPKDkfgn2C5D6Eddd7rwTH",
  "key21": "5hZkRNvHnAyB7gabH6UwtcS34iGV8AQqzrkNFPYg2iG9yHuqiuq698eVruDweHFHRxv9WsAgJuUZaYfTZP1nFTUP",
  "key22": "7haztTr5unzaVtSDAK9NRS7rgZkwHD4ah1PaKUPSMcpmHpuMmNoy6ExmBNoge3eQQ4MkjznR3HnYZLqqtkdEpoq",
  "key23": "5A4L9fE84HHKfm4zm1z5cKV1aHyJK8Bt3DvBfvAF6odX7sQLVhLqNQsuNacneBkK5uMEBySXo7awUxK5N7Qno2HT",
  "key24": "4Gs7Tg2tRuTjELhDyqxDtnsjJkRnsKUarnUf32PNBCcTsp6mjkvsekw5eNxpLcKZrjfKm2yM24wEoRoBRckuwV1g",
  "key25": "29xgSsM9P7fkKMAWatw8bqZbUd5Vw7dadpKn3cbdySRYpJWKnk8N89CWH9VG1yGHkrYghCpsdQibp4N1waXfyDYD",
  "key26": "2f8dirV1BRDuh2KZXTcnGaSVvcbeXmys5D3knF5BtRtoKjyVpgELRCnTm4b5Yw6tCQJigP8VAGoCc1j3wvz93KUZ",
  "key27": "5RJ6FmTspx4HtQgyj88JngRyhdAo77aY7e1rKGSEhv36s7nk7oL9gFrpyiCvaz6XwXvzxFLBCqnu4YyWhNKGfjae",
  "key28": "Hyd2AMkVgkVsVmy1wQ2FRNzmJzhoDbs9DSWPA8o4vBDKg7L1Vk1kB52Pr4KUnkumbvmWwuSMqaDy3mhUvU49mNW",
  "key29": "MMqkCkTeKdDRAf1sMwgLxtAVKKyn5a5ydYuin2RgcspYccrjj2Zzh2d6GeEbNWrKJoK6tnnthR7MTGhYvU2vm2w",
  "key30": "465AmwogNqPFha7oec3iBX3iERzfDEU118e9wbX6DXX5g3T2GZ12jDLa6KWSoYe9NW4H6vfj7n5EQA2WgDbP6jPZ",
  "key31": "4zLYMLCfYgPcqYr2q3899AkvRoFsMUmRdA8zZRHEvceAK3VKpAL3NbrXjFuocAUmSwt7eesieAy3xYrvGhXQSVcN",
  "key32": "3ggGU1LLfiqJ57kzupAsJTK2cDcmHBw32qsrCcPH8opZhsJATRzbHqKjWosCeyC5ScCkWxiiztyWg5f76r2PGXWR",
  "key33": "4UnKK2ttZRVNAcNbyGibzNaorzLr3hiiTeaBCmxPTUxiyDTGFdmgaVRVXqzQSRqMJemok38phDMrdNTmfQyhCK2d",
  "key34": "2tpKBNtV5WR78gCbjk9fPVqwFfnTZuT6k6fpSGqYZ4UHy5GcWvEp8PCjyvQnxGaKzX4rqyk5UHzfBcra3KiEzdDh",
  "key35": "3PYX7495XSikUWzmZMJ49nvpUb1CvNbGTAp8PCdL6j6P3Sb92na7DHf9LPE1iNSZNTVWhVxE9qE2wjewrjFonThz",
  "key36": "2B38Ka25w7RJUhoR1yp77FgoEd4dqRpbs5QHVQoFHRSQh37kk7KGrRap8c2hEWyLPjESMXi42f6uWsSZsyz9oWC5",
  "key37": "3a2gZvmFUVggd3uJLint4rVA4WUEeuYTC6ckijBBBopmPwivnsSdxUtykXL4Cik8XACmjuyrwdUASj7eweHbXZcV"
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
