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
    "4K6ZKvcXfqdYYnMKAvs3VCBvB8bhbwGTnVe5pjAQ3ayE2FEQBtjkm5ZCts7fUfG6fi31SBvw2HBzoFH8KkbxgEWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFw7W4ELVu9c5rcCnpwLu2kW7RncgsHDYEi4TKYUSZfVW8WZoVWEdGv1G4jXFAz9Zj6VcwNtyQAfxUqNYNENy9k",
  "key1": "5p3GDt84xesMFD9gN2GYmiWvffb43Ghh8k2ddPKoPKNDmjyLRA97DTbHPgxKgGxBXVEFBMB8XbdJEnAByLZi9TKX",
  "key2": "Cy1BgBnmkcXCFzDzXtu5Wsowuv1KT64ZchMXuftygCXaSfSrUqYF4NSCMBM6WBqEWbNg7AEc6gJVpASi85jfoCe",
  "key3": "3djy9k8mqUohUwS7csGrhhoFxeUhwtnS6hDJ2ozMcMmyuL1cDrktADQevcm7kjRge1cYy7cqGATWwMsfjYNfM3ee",
  "key4": "5MqCFRL4uggXmodT42U6iJg44gF9CB8e1nEB7SpqdqSQTxGEJTQ7BVH8omp61omCiym7zomnQy3LW692FQbz1Ppx",
  "key5": "4NWv6vXSrWaLP6wYRakrB11HuENJtYa1uCzdv9QYgYWJN6x9XfE9wH64tbwjvNor4xQmAeYUFSoBTioiBf2s8aot",
  "key6": "5fVHMgZ3wBJpkuRnDf1aDpefmWzHSGZSYuw3YsZk4uPk28NTM72nGMDJc4MTEbqbPkMj5UJmii3PbRx4fZiCPQuM",
  "key7": "4YHPsDqhicAa4K2XHHpQhkmpe3LVF2wurFFAQYKoh94CmzYTmBfE63AhJG9FwiosMEC3D5QbUMUopg7Q9Z8jEWg",
  "key8": "2xMffr9fFRD2M6FSzA2xX9XTVxFmqBofrntBaXB4rJyThhpWXWtJ8DKw6pLk67XyTB7LwyxZ8Gprk9B6tNTpmHZC",
  "key9": "4MQ5qzuJ66Xd9qUKtoMWwRhXanu6Yc8Ygm3fyU1LERRMtmAmiEXDnCTAnb7aZCqwX9yXaZ6yNj8WAE9QjDCGmCPp",
  "key10": "55BHdjwe1R48iJb9U4mpEhqmB2Sgy11wQY9Cyw2viB7bfGm49w8DQ8MC4Cifvg23pmE95UMoLUEYEg2p7UWquuSj",
  "key11": "4wpfpfDRL9uE4HrguDkr5hcLerC19266S4e52c5oNGAwjZ1ya5qenvHK9t7N3KvkzLE1fqyJgq2ztWvCRcHFdMwH",
  "key12": "3jvshpUyQhKAusF1a4WX1gZ9hSP69HzPESyscskAecDv8JeZdZ2f7u7EPzkajs425v9ic1kxNL5KZnD7FFmzC3ah",
  "key13": "47xNNxUgCG8okyT6bcFBze8nFrucevG5srW3C6qMPKXwbWXvYAenTLYuUKrrNwYfRXxsDtNbYEjM1teZSwPJhLHs",
  "key14": "QSmjZCDCKbmdBMZE3XD5HMXummxz9yfPdjDH22ALJbsAV2zVC5VYXUEiL7dsTwqTsQzuu5a4YuxToMtgx2DixQn",
  "key15": "xxPKmWrLNFXkFuV2oSJZyXbm3n66CGZC5F6hhUJcr8EdAjn3c7VLdR76Fj9mvEpzksfCDog8nuLsDf6Joja6M5F",
  "key16": "4fGZbyKofMKbbEKqrZazAxH9CRvQepX62auvk25fuXxzpbgYrFRjg7ApqXWxstPFac96ULHXEUfd4RLMqGUNUme4",
  "key17": "QDBhxe1NaLysxht21fZ2SpWJGxsDTLYUneEZBV1ujePK5GgsnEKnArEAUG6d8bPEf95K4GiwHqN6T91GoHsKZiN",
  "key18": "3dSM9aKvX5PAZW2dUJVZvKv8h8xu23tFRzGsCvFagEBcp1WzY1u8EdwWZS5mpBPiWNWLPtbLBttXERMjthYbWRwb",
  "key19": "4jhnhWvgSXohG25CCAUpZJPb3a4tKzxFjt6Ce2cPoGievAaYPiBj6qwGs1BeMENsoRYFKATurjGa84ba7uytnTjh",
  "key20": "3JFzBH5f4E8D98oPqUQBgQeBVw34VnFZUFTQpf4QX2v1rcppXbyzYyjbAizWk9y2ZkhTRcasAj4J98oMUPYLfejT",
  "key21": "3rzDaw2RkrASMLenH6biug7KozTA9RJYvWqq3vNDahcMqxsR8XX9v63HqGFn81f28JNDtS1nNM7X8zMWHMzeoM2p",
  "key22": "4FFhfjnMfbpuJTeN8TodqS5XnkF7ExoBRGQVUgLH9DTcBx6kHmGzKAqJhhPci47rxpKcFDMNcZTanc19KRcz6Pa5",
  "key23": "4fdxsAGN4KTpjAqZGgMwQSSbFPSok3uFyEG9NmEE4sKW9a1ot4sHsocCSEMSfnnhECmKNdMEu2KdPuMbz2eBB7tu",
  "key24": "5v3NUnV7ewg1LG54hSUAr8Ju8fFxGcvPuoZvsb9XBN8PKVeaXozP5o1s3fj6qdEMXf5b5UvCxUhXZqGNhEUbLFdn",
  "key25": "2JqatxQgZLKhCpqonQbz9s6oCdMVtjJDWKVhmf6TgpKzKPJTvhapB4FLbYw1BMnYpXYHURAQKQN6muYKU5gsCtTo",
  "key26": "5GbkQpDZQ3DHTQ1N8a5cAe513BR7JvGFMfNfZ2bBehKkSddQ5HAU7gJhRnRirCxF2T5LfZxbxmq9T4AXJ6aQcHsv",
  "key27": "5o68DMCUUkMjyFePwcReTMwfLkDukQGRvrfrGoLD3JvNLtUsh3AqZb3M8deQu9uTkEYAr3uefnxxdpq1oosA762U",
  "key28": "456xMaYPB9SXaaggWoqTCm3PLG7yZFWwG2nNpQPb1c3wdGsrCqdMF1gUb2GBhYQjTZN2GBcgKMXMSuvowjPF7wZx",
  "key29": "3YJJiBENSqiKgLo2ANNKSfMGqQ2wPv1inW727T8EVxZ5hTq5bQwdFnzqWDyiA9vfNPw8NXkXuVwg4qbbwYuNrx9n",
  "key30": "2jraN2qUjdGpVYaqCA6sgnMoHG3kPLB24SBwHQLrKk14DsSUFD7jUNtFMX9euUjoKv5tpfswyidRLyTpWR1XcYru",
  "key31": "umhgCsLSd1nSPCZFdwuwnT4cBLdg3zDPD5wPGNTJD7X6TSiyjUfPngbScU2ByuTCp18BV2pA4mYez13xmrvxmrP",
  "key32": "2EZFg3zJGMe3DtdbkiLss51bfFwgvs268UHSQDdF3rkmqyhy8uYJTP3o1r6zbUUAwqiD21mtoS6WNw75Jm1Q3LK9",
  "key33": "5tpQXyxvVnGkzbyEUEsP3PctbMyxtAGTGGNfEabrqYYacFSLQGvRPcJPV3Q6BuXXnDPLGtsZbh6z3Te1N27N7tNs",
  "key34": "43LSFoj4boE4QJSZACZB1DYxfrUbxxFA5kT8V4y1pkX5gctMa44gJJQj1xfDsNnZQxFEDGDAqQ5ZMJ2MgWvZx2Rs",
  "key35": "5MKwt6aNZ1QgnyCasK9J47VkakfNuVNuQ2CHEnE4uXdb3QXjWX1qwyoEQH3FSB1aYWjeL4psWgYYqDFJTa8J5CWR",
  "key36": "5rQdjrk64o1HCyCaxzsWvedEEshRAgZ5CFJWe7WiUyMasToofBU5nqJwMqhpixBzgi8U1kGTPdD1fpPq1ZrpUrQp",
  "key37": "oVDB8fZeCfmUt7ZLMu5w8PszY1BNgfYs8URKCXMpgj1JWtcgQRUoGCTUovjsgDrnqQ53FoM2Vr1iiuDMzPDdvnt",
  "key38": "67f9FmHV4oQ5gouV8pCkGjKgXyyLehMr2ZJ8TsQuHExro42XcavUnfWgqdAPCvGS3DCt28tiJVXQTyH8BXo2BJ25",
  "key39": "4wXbyL7q1v7aEdTvm36ZUywQvbzHq6Hk4jZHfvApybML8nyRFCWCvym193QWmhqVs9NFM8oZrid8YrngEV9F9Zj1",
  "key40": "4bXvZJvCqABiLMSgyBMoQyvVx9hDiGVvSPfYV6JwYauKf8sVufWfy8bWKeHHXaiLJvNN2SYJWKRVGZb6dev6u81g",
  "key41": "8Q8ULFti4GZRRC3JeQwje9EE8hJbhgs3WeYRfp1wwcpqZhv72nJaYWbsByMgb357VTSEVvasBiNUGPAfQKMYQAa",
  "key42": "3HRMWK7QGaPWyPwqDRFAtMGZBJBfBKfjFUzCJ1cK3Wx1pCKV71pGiZo12NVUfZkdLks7kiCnQkpH1jGAKE1cUkMo",
  "key43": "2vzrUkYp8cQoi5MSq9NxBXHatyMX3sUFCjAThyppSoZPbc4Jun7GoR87fJuhbBsDwAHDd3XMFni66zNFdckWG4ti",
  "key44": "5bo6guwfrzyFYcwiM9cNpwKaXzjiMbXNxfV8HdPo6BnRfX2bdptzYudyuZB4XuZT9pKe5To8ncHpcqdEGHiEsYQi",
  "key45": "4jQBhugGe2JJsMMumcBCxggqExGTBWNP5BZ2soqXrhVmzqXn7E7Kg7ZztTojAyB8ay7Zt2X1ovr1TG2JN3ctBdUt"
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
