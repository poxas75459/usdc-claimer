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
    "67CxayJsRuAsCd2uBs4Df8We5imRWnwQPwLePKuhYWUgW3j9oFERT3m2CwCmG2tntUZMX7iU8jXjaZU573HKws2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RYvrD4Et85JFGzbW8WyRS54LwLDXHBm9MykRHGb3F2U1z87dWRWVnBDAayVaQwxmKatrmErs8KMFMN1DC14fZod",
  "key1": "yxyfDGf8zTjdfiGSr33VMEbYZ3p89SBJUAcJJY6Y64CWXAv8QspRcuEdfyPMjK5qbvb8Xu54k6VMKny3xE4LZsp",
  "key2": "26Ctz9VamUJpU9H2soaNDRHai9VGMXxrwvmY4HUfhCnNZW1RK2XSnjHFwW617MQZ3yQbbY8Jr8vH5KpN9oH5TN6d",
  "key3": "3LQ7cMMDQMYeavkqCQ6KnuncVyg4eXFxrWrCRTLHPH6cG5jxztAuuJTiNZS9q8DTu4ZQRZN7fM2S8Furqz7gBFA5",
  "key4": "2ML2RAfS73ms14Xsvz3UUWJuFLgjkJD4JjHJQTAS81PmuzJyXY2qf9CicKXymzGmQT6BtT5EpG6tYfPAnXAm2FBo",
  "key5": "Ws7gmyWc4MroDFHFg42mkVs4zYzCdKSg7ruyxB2xCYcV2GDHs7FYrfPbvejwagUsR8NbvAPN8Lq5wvEFxdEQ88U",
  "key6": "3s7Dx6yDjX33mS99C7TZCiYWthdfG8SVxtWpdnGamwhYvCvQbtj6Y7XTzwsddDqmQvLWuvpT6VK35m36RQo9rVar",
  "key7": "55dk2m1TXFtR6U8aqRK7YGHR8we6ZxggV79i3RgDuAafE8fNHHd8h1sc5GFg8t5Px8RsNRmhBnWnRFxKvWT3X3UU",
  "key8": "4wqDkY9nWNrcT8p9y7SU7VE1FQCYunya82nsBrMeWqAZDZXuuTF6iEJCasbUZizbs54HAJfFu55FygeFKaVGNhjA",
  "key9": "5ayuFmyLBXJMf7KgYgpNiLPHwVBc3wMj4DpgwVkWspm89dhsW9Fkv2EkByZisnWBwqYUVDZ1gLxPdGjUNSGc5gUr",
  "key10": "2hpCErsQ1Lz6VtEW3LcF25QbXUYd57tQTvWAne8m4FpVitivJ7vRqk6Est1NUw6fHjvswbwrxyNY9ZrXY2gGfch",
  "key11": "4wvuRnsQcXsDEKhXC2JMP1DLNFdQdoDm88Kc9N6sXF6kC8CYQ9wqGzJc6TEFoa1SaTc2SYawVqQ41kY3SBY5tZH3",
  "key12": "5ovWYkT199VUoam87Vyvyq2G1jvVvxh6E9bbRfZ9P5QVKb5pcQHpyVePnxyucCXcYvuUYvPBrV2UG1QEGAi3qQQe",
  "key13": "2LxA9fXct9ZAN9bmnxPcX7QvDrQnxsX9SrAXxmojWgDQWhdNuPLAc4FchQzwgZVyyQUqCdhiaCqS5YSiGAzZJTsS",
  "key14": "2BMbXTi9Vaenajm8K2kNvZ8wZXEjjSw1WujxmDQiGZjK7U5cveNSXmApyu5ZLWuKuvYHz7RRu7o6p19L5Dg8yzHq",
  "key15": "5EmYbXoM5XJjztFmxdFo7A1GqpSAGQuBLUqM2p6tcguFt9HTBqcZ8NfLhqxfeWGc6dyKCw7fc5y9sKgKR5VZdWiM",
  "key16": "upzq5fJxdUf1JRyML6kT2QMKgrNTB2LNAgSBVLLrRc3qHWb7xcWvMz1vgbqr2TA4uuRDw1m7GYBg4ghidEdVZ6Z",
  "key17": "3883XHEn7i6Gxh9e7FbAgWrjWxaPTfSvxn4QTPLd7sF5XDqELnCJijb9FfG28WPbccpZaMUPwbCbX8HYeUS4hpCq",
  "key18": "495PYX41iHtWhbaQ9aUEbvGmxpzub4qfpguxWHeTDDMYHjHLFSHNMtS3sqcnoRpf8HCsXqM1fQpJzfw1kk4Hcvj9",
  "key19": "gEDLkSGuizi7XBwiwnhkrFSy9J5MyNiMQQxvZNnk3AVYv77AGsqmkjYq8YdmUBV9ZkJ5zogWnEDW9drA6NcaHGt",
  "key20": "2z6jpnjaFSh1ZnDMPDRN5iVhEJHNQcMx5fBaxuLCoQ8PJidffooVcqTorq2fqKBL81d7HDD4FEidD6b1frD42qWU",
  "key21": "5X46ggRbySmjZ99PqAaWYnFFi71n8ej9BzPWq5yxk8BK7oGp4uWff3FDJcQ2MSpWnRg6QKi6WdogGtPakqTifGPj",
  "key22": "4Eq4SFiu8FqxUsLwqxJexMqPtx1ph2Y7g43KYyuqc9rBkKDQhu5WypaurDwSHT8Usi5nEvxzeZ3iCZJNjd6XtLys",
  "key23": "4s8mzZy95kWGjWbJ1ypN3hBnieiJRdD1etUtxh4ASpCLipYKzKJyMK89MMWs5dT63GtYz2mLkb1WW6UYP6FmURRT",
  "key24": "4EKbu9mMHt3FMnDyL5aD4BNTFZNqfLAR1Bky7rPLWBm1JqsBFDwLPi7GcTH2WzroCYMrWy6eJSZ7cv7Lw61f2wer",
  "key25": "2Ec9r1M8JMWuGhBFM2PWVbkU6zkCsY32F7DSGp1rr2h81qtDBjXoExKhH6boAjLdbsARmDFFX5q4fV5z7uicvx9m",
  "key26": "2VvA47Azai8TB3DruQYEXTigGkfDsr26UHHsne6LddfYpuRLfZxe8muy2yp3a9htmMLAFEK1jz9roZzomEBtDy9d",
  "key27": "3ZRAp4VPdKbpucsGCRa5Tg9LC7JWwsqWnYvL6RXYEJHeFT9N1cPvx4M3Ztcfs56BrEsgCQ1RvPbUSfWCLhSPrFmA",
  "key28": "43cYWfVcbHmcxMkchoPzq5NLeJLjx13j6m1KafUcLav7LCcqfnj3N31LSZs6wxMsM6wdPobcvFxBnWXDEzvwWh97",
  "key29": "56UnXg5WZPgrR8rydyGCPSRxqw5iMwUk32jU99sTP1rjqHxgij4uwwbY2yxF8cxbHB7fgvPgLoE3iuEG1uk6Z3cW",
  "key30": "C7cGD1KKkDoWsHFrBe5xz7A6PY42jnXfyAuyhdexyx9iu9WBQBoYzZriMbuefVdAc8Gns1tctp5znVxev2KTw8S",
  "key31": "3RvhByoX21z7AAFCB9Jo8KNmUz8ew3dfwC1furoMaAdhbNPwCb3Bn8UMCFN82tuLeX7vaehYToy3P88VhSmhxcC8",
  "key32": "2aJH41C8gUyfHi3oYrPN9uT7CAaUSK3QjY873NH88Zsk6faMiqLk4tbmUPpKFGiwuJ98wzPowmVFAao6ETbrhjxh",
  "key33": "4ipUZdMSDDQpk1vZRVe3p18M6Wmqgj1ADLpiUzdUUfV99gcnrMonwgUjG3JGEYD7pAntxsVvru23Xg2aoTHgMK8D",
  "key34": "3FXcHsudb3AivrPAmTMioFPEcSzMjaYX5AWccWwkE6XvCwjHWNMDWdFmfUNnQuCdNi2f3QFAtVoSHFvkrBLcH9yv",
  "key35": "3pQ1a5PtW7BU11XogRqdexTkbP9JsiUHUu9AUptw4Cdbef5rpbX1yAcRXt5hoHX9hGYqNrAFR3xKTi8tDDFB7puU",
  "key36": "Ay5Hp2dbrEYd1xbaYFxm6Jafofi5hzvEMhASm6pepj2vmAQSwHAsyhLBBre8RnzQ1ynHoSfrbyfiUWjkJRdeBig",
  "key37": "udZRdRNSG76o3CqkbqWBXWk3iT4cLjNtaaayu94mp8fPsYwJoRw9PeVS2VF8FpzKi2eJ3GSk81W2r9ep2qZHPVL",
  "key38": "4AEKK3S6sRh3vZgG8PHeDctCkhstW1RiE4XmBqSvsm6kwc96eioDUQzfQRQXNDYQ5XdYt7ycajauhPHgSKjPUCpP",
  "key39": "3zti6LH4oCmwuLiNWXDJK9pGAva7cZwq5c4RU1Uz9mLdfwbhGp8dHwqLb6P8MQnumLzC8AQPv7GhcWaVTH3GXC1w",
  "key40": "3rhqMc235tx7kJch3p8DV67QocWycphJKYHCrkfGfq8DJmGUia9VYch1xBnMZPFZUXZWeVNPzTYBzWkRx7GwFQCm",
  "key41": "549LH3gg7omziBmhqFtJKSjTPhC8VvZrCnBnps6DcQCkj2fNRtJVv92GL6PE6WsF4TdEvpnDfhLCeL6KocTUZnua",
  "key42": "3HAtyo1CE3SeZdk7K82gmZrERdRwYkTRW3UndZaaNXtFFtvCLZ6McQFnbh9oGYmknZgCL1FQ824cNuXwpPW728Fy",
  "key43": "1hK1puEcoqhq9mCBHgTQ5XME2RP4AhBdD2GQJQX5vfoHPDoXriKajAXhqPJfkCMmqsu99z72vbNpcQ8q1yA5MQi",
  "key44": "21gAKzvaMCch4P68hpyt4KEu8msX9Aoj71Vsap9ckufy3xbYuSRJUMEokWUHugYCG2GoFR36dQj1NJogQENczvmR",
  "key45": "D31jsqH9ffGS6ssmEm51MwRZd9uZR6s8qoFArxmwM87oiSgvTL8NnqS6NJQXt7m2Np7hk3Mq7CjvkgQaGL7fV7u",
  "key46": "3HYgkLrwKtUJ2cNWscXkMWQXon9DAG86zpSP2kRqNUCc1vFqfYwDt4yDmDjiZQt2A3Db89u86WcvCiSwtN8SnvJR",
  "key47": "KKV9rejDoAPKrA4R8KDrzoXWqRCg7crgeXnB8W7qcUMvdwUTSC7pp7D76L7N6nnbbeKuthAohNc6HD4j8TU2kBk",
  "key48": "49SBn3ipGpmsJVEqC7baSKMEF8E6xNVDT5E5Jzm1tRmtgqKbWa3opJEGV2XKfPeWmk1pQNet6YUsX6Zgj9btj7n"
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
