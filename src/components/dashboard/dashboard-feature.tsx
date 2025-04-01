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
    "3WbPWECx3BB1fvMeJ37yNsaDHVF3FgQxUqriqdzHVi9MUeGJNmMzDCiugwTmbEJbHfCX6wsufNpbQe1ths3oMXwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4111ix6GjFGi6cXKpJVEMcywT3sNLGr4S2cnyhpxjoeVBo9UqrJhHUHURtNjdpKxDiaSrVrFFW7MadpW2n3YRL8x",
  "key1": "3GM8m6oNAHQpDzwT1Hr98xZdVmYzD9LL92CPJeb7jp4K8U1ttnzSkgfBki8akjm4VmnBh6H7XnW5cwsdRYwEuMfi",
  "key2": "2ZbTvqDc1W9dmnogURLSJWX3Qb5ANme9tDVcjY7ozWUuBc5hoWdJiJYAq3ggFXuRJbvhcp5iQT1tKZcUrxvQJEiS",
  "key3": "2u4K7cBqD9gEiyLGTHBrk3vGJpeR9yAMY7dRw48F23MgHHZo4M3qEpnK2ing8EW1zA8VZs5z4nquoMZ7zEGa4JJD",
  "key4": "5JPkqCenwVqPrkpQADzJvDCHE1YHXTWs9MQSDytqyrBuuLrkznQSae7xLQ82nf6Te4FSmwHZNFrtkGqk6uR5Wu2C",
  "key5": "3ivHJTHFKNEvg2bVSmaGJEuCw8hgQDShBfEFjeaWoYA7FD5tpUZrRvEezjd6dLSkFNeWX1Pw11fwZmoMhC1TCBQt",
  "key6": "4pGthM7j9yf7mziy6xxFvM1AeFXzNsGNLywLHSzMubaoCx8G9kd92M6CH74LC7mf6hDZLmEe2p11z71pDGkC3Z39",
  "key7": "4UeyaHTSFUiH21xz97RhoMG9KRWr5cmzcWGcWPuwb3RKsAq3bXG7nU8PrurCD8Y3w3CB6HYStnTve5oa7uKhT8CU",
  "key8": "2RMNQX6ETBpwfuhgbakxCdqYcH7Ywkbxq8wPrfPSS3FitKvWNyLhyRXJRSfdGNRbP1FACEaM5Jx2nWKQbfgnUBJi",
  "key9": "5xap6Rv7vcyzRVVncNyr4Arfg8vCEf51Q5yATbvuHGiH5KhFuQZqmjeTLiCFqoNLxSeXYxzf9CoaJFd1cXvPXR7M",
  "key10": "46UdDDrjuNybP9giGwy1u3DhHAkdEmjgJFqgBoCjLq7yYDtwSjW9fpnU23kkEZevdUtNVvDiokys27i5Vp7QdsSp",
  "key11": "2vWzUaHipzLwSM6NxxwcWbCEJv9aNX5NLG4SPotZxsKTgq2EcASiEt9fRqVdFCaV2985qeFrKsQn3gEvLHrdHXnd",
  "key12": "mHf6dpXJaWMX1n7TYDvCJufcUpUs98sM9H75URDfHSLB3Ujyot34ZBxVsKsYJbhd8nx3M7f1jG6BqcqMwHrgTUn",
  "key13": "3b8Tma5PvXT6ZuHX6sWLPgVgHY8t5nMUpw3RSbFJjZuxZ6b96AQ9iCreNpSww2rPcRk15wTk76gnacRxMUzdEUqb",
  "key14": "5934g59fS4toXfWBdieZf9bAfYnX2LJ1zcoULvPJnJqdQd6iWLBiYyE3TzaZk3XWhqpeMSgUsbEhVQXGSq2KKUxW",
  "key15": "65KpCPo5pYth5UAGehhQqYJFuGs9vPxPZkht5nrgJGUWKmECf7WAyvcJB73GcthcdPPjDEZdAejAVMqZ9gEKwnC4",
  "key16": "5fVxNANb15mPuX6oEV3HkHT3MqvfJwFvYTL6uENfMhs9CrboH5tEjy9VDgYeKQA4BHT6tzsEsQhniqXYo6T6RLSY",
  "key17": "5Vb6zcrrYNWzSAsFnxecthhFUWM8Re6NzcrbWTZBR9NDyYrq6bE6rakoCBTywrES9bS1TsMokS11okqwmgozj6Bm",
  "key18": "2mQ7YLdigRWf1YgqdBsaw7fxhoj52hP5B2dLbadzgw1f6NyyamqZLTxDWGJpXRgY2L1rR4MPC9Qg7DvJXT7Ln7Rn",
  "key19": "4jDAARgVMQeqRRsKpqprSNR66z9CgjLeNaLsaiEq2kuSQnowJu8bTvnBDUrGzpFzKzkCE3Y68DpoDeEAReMehTPY",
  "key20": "4BeKvm42gysf74Ub48mGgTLnPQTcoRBjL74Ukym25fTAYp7gGmdJ3LyhJqyivcoV1jLJZuuPygXZKZENUqGA8ebT",
  "key21": "3QGLpqpiSBM9ubyHZRd7r1dK4iZjW2fyy7h2tGC35XRzi2JEGdbQNqkyqVUhvm9Lpbx9edB7qLXUm4usZWkGM4eN",
  "key22": "7WY4griFhtCtDQZ815oRoyoEpHT764sLPLexCXBSVTJnB5vS9h5UjgW6CRPwXNQ9MERXjPM56y9NEZr21jQ2awT",
  "key23": "Ax7j8pMhRCGKmQZnqgooQhvWh8gwCEyDtsxCxkinzAYctyzbvLZSzdGHMn1qnbADyoxCPjXskZHKDBXks3LqZaw",
  "key24": "5NuG249hLJPAyGqvsKomrRmBzGqJKaMqTsJhjQULe5HnZaeLfYfMPfMeUyYsUnaCatRnb9xrqEUvczGpvGJ8HFqA",
  "key25": "rctE3b8Qh7rDGVBiUruQi6Gg66hhqJcnfTgZUynV5ahDVJN6oK53Xiqh75oFv1v7Wsh3uKvxy9svhjkgKW3B98o",
  "key26": "2P16q2qM52xvqxqyxqSYcX7Y6BL6UYiN1N2eyf684imsfAgzCSonz2S5q7WaQxktsDRdKKphnoVGEyqjDztcUre7",
  "key27": "5uTaPmnjTg6Z3QyNbqiB1NqPC1npJXKDo465FAqrXUizE9VGvyCun72u5dNbrJ8JR3dRF8kCAwPu4gy9Lvj4RgvE",
  "key28": "3uJAxL6A1eHFqVxYQbzxeVGaui1XM2PUFkh1pRjWGvRjo9WSzrjsNnoaKx8X5wuP7fyWX8YV8wzLDGQP2SHD34YN",
  "key29": "4bv4xhDV19fq25dDUP87MbXgBApF5cUCBhnFqHWQoFAbND4kSKG2W1CmQdobTT65bmDKtsUTKEuwrrp7LhPDNCAn",
  "key30": "5MnQpwJAtAP2aY66sqXSF9qSwS9y8iRvBtNj9o34fS7QN4gwQHVRxGtraDYcYzoLKU4LBPcDqEuRiPGaYpp5cNFE",
  "key31": "4yr8Xd8Y6Y5m3d8KycfRVdGuy9SkpmoHjWK39BnD44ZBhMugMeeu2jgGQ294jadj21C9oijggdfyGDJTZDt3icHa",
  "key32": "4QBLg1qY5ksiyJkAyEjuH2yboRVu89j2vMESJHH4a2AfMa7A8nagrQJh2mVGYCY7h56vYFaXPvUNqvb6t76tnTWE",
  "key33": "3AqpFKXjPgQxxi3TNVgpCy9AzzcmyqXDKBncqUnmpizfCxcwyFSyQVK7D8ciDvCWtB2yxyzYspFN2Wd4z3da3WDB",
  "key34": "Gxe86V4Ex6C5bvML8uLdtcpgWKMEPhFNXFHLZVqkfLnhk2PBRbEUUM1ZgKzSt9K47gCrj7q3W663UiRHyuXEp5N",
  "key35": "5pgbjuHG5VH6R6TDNyHTkeZpTgLqjfLwieoAeAzohQ7sUr7xh5KMRu4gJG3kumDXu8LnH1xcPPfR8dZNQw8MN71Q",
  "key36": "55KTayD3g8vjXG9Wp1rpPXZAN5AWyewoe8tF3XaK46XnZx17ycWyekrtRoL846LVayYWwxjNAfDPjSZW6yhF4pAa",
  "key37": "3ymjFeMHezfVpSwekPAM18f7kQgU2NhnLczRCYCfPcXi19t4PSHPQCcazLi7VU5PeqNA3EvvtaH83PPFhuCQcnzH",
  "key38": "2DcN1wYi5eXqLcWAhnko6c83yKTT86dtcGBwVBnoKSZxHDbXCPeNP3jyxqvK8hGrwyu2XXfiugpSjvH9LFkYQhyw",
  "key39": "2uDxU1n3yfyjgyPceyeApzzDYFt1RBYaWfx4etw6HkRr2fS5DUA2Xs1JmBZXbhjmHbCgV4dpFpgPCisBU9ePq6Er",
  "key40": "5YP177ZCrZPkmkFmP9iGpux2pV2cZSmuQUx2LhxsDREg4fvEEE2ZCGeStP3fdoaEA52jiEfPWxHiBdqcrnfamM9a",
  "key41": "52CPjtigeV3fXnicxCp6UDBQP7K2xQPfR2UQcmcUbanyLwC9CE2tspSQ7NQR2giV89rPgZEGfvGmgjv2gzU7etn",
  "key42": "2jK5guDR1LRYQGc5Mw5pFNLU7bz918ZAwDxSaMUMNi6CppYopPbGfTywmH1yVsKP9ym4SSumgbTYbX6AsLtaYuQb",
  "key43": "3VXfhec2KKZT3GgEmPXqQ1UViS8qUKsN37Dg1eZdFLo9N12AivBy9MRRcPyhJ1A1dGfUtaizTyZz9MLwRtfzXBBb",
  "key44": "44PsNqii9ZsmZFcsp8RPbHvEzGDnFKuUz8wdki7eRwMDoU99RUgosraGcqxmjo9FXzrACCE6Uyxx82CCepLKEzXi",
  "key45": "ZWST1QKXRWQehdyWn6Ht5SpfHGXf3dsnwWBgAqohc2zbyF242ZDeXZj2tfd7RMJDUwTpCjZ6zvn28xPLDPvo1xj"
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
