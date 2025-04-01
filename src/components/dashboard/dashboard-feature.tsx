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
    "5FxuPZYqq19c5Qs9Ka6jdHPgxBu3ytWTHeMkEDtr3aVx4MdBr2iNKqYRmicS9PcgnsMC21ALAfLcKDfHTUNLi8hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EMU3bFjEzJfhjNiJ58uuvYjxzqxWXsSTMFX9RsxYELanEAJ7FXuVCgJoZ3vjj3VFhsEPnkTBv9p8nABMmU6Hftr",
  "key1": "34KnYbPnDwEFuiVN9YqpGoGws9Jyq9XtezHPpSzeegDLcgWbwPBpj19iotwTksxyrwGt6MN1yGci7ESDS2soUy7c",
  "key2": "3zv3fbNGiG4EXwx7w1APKn6wbDJZxWC8zYhSkQJLGsk6PwZGcfhym2C1TRggbL5QWNTirRqXdej4dZLr9B33Cj1D",
  "key3": "2oLArsJKemHfg4xkSyaqrwJk45rgR7wdJHq6P4Fy4UX9tmi3M6oH4jFPnr4yDz1PLkUu77ZvQwtNeF5sqbfrFkWU",
  "key4": "4od6Yvu9JHA4Hjw2FcKnuwdBcx4Hw52Z3jSpeJPZzdcRFrra6pf9NhpptcywcM1KGhEb7KuEwp4sWGc9dgEBLoZR",
  "key5": "7N2ikYBmCBHh5BHtiaQi731EcLgWFTUzr7298iVdQjZvmXHVURkE3rzNYQsLjDyFFHNzPxx71NjFo9MCoSPqxDY",
  "key6": "4z2cyWA9MTT2SpwLqgGkwPCo2rjhNJMwWyq6iSHsqsPoQYM4CvFbnN1nm51ZacKqC5uQghSAD6WyZGiFZmx1C9Fj",
  "key7": "5s8huMEyKEv1tpcPbvrTPx839LSsnSC6MxRkK3FQEc3sQ3q4t5i1zVrvu3eqq4qppRfSBmPyuFKrTV2abvjSKhSE",
  "key8": "5J8Hdw7jZv4x4cq4prsutunW6H3aV8ukKFks7CduWbtfw6nHNqbAxepar6RzsAiYizkn5AnkCgjF72DSty8VNbR8",
  "key9": "2JpuyaubxwrNU1w8ehbyfMq4KyCA1fY6GyfSeRHd6wpmXtmZ41nmW9354eWDStmMb7Y69tobXdmAQKRfLcYDYyGM",
  "key10": "4a9Vb8Swi7VKmc5WiHAtV3J4R2cmafKuNv6hDYqSJERJQnhPWNi9Ne6a2xU4fYifXYenGkNTvsTevXtu9iwwWUrY",
  "key11": "3DYCDNzqXJ9nmVWyk3YxNtmZ2W5k6hEbBrd9LYuWLnE6uC8xxwKWhMQFZrk3MAsdT4cc9LFbXnZeNDC5AncXze78",
  "key12": "5QdD3DCq98CdDyr4tZFpgKeHzNEMymSJo3TiV6PNC3geLEomoVqastN9uUyMw8p3ExDpH36u6FpST2X6oGEzBWtQ",
  "key13": "1PEwDp6jAK9cxnxxBseuQ2cVNfJeYtgi7tTYYK6iTij9UxWj3k4SFbY3XhiiaueV2zT9QCieGPQi9V8ZXCo7uzg",
  "key14": "o6j3DKDmCETZqqVoLw8hiGqkrjfRJujktsJWoNrg1Fc93vR7tndREtSm9R6khmagHAFzpNbB3E18Eb4GohnjvAD",
  "key15": "49iScER9xwDE363E8vQLGCaapbvCKiPKZRRNKzVEDm5aGoh1Xerc3GwV6UfvauRydq4gC9NdZtSmbMKBMrhEcK6g",
  "key16": "58b19ZkMB9fVK6xzobZf2vEv97JY8qbBKzsbJtT6RerBrWytUyHdKo92QoFhSqHkSZd88yVL3AzGRbdUAB2fSMfX",
  "key17": "5tugqpuKp3xLeu39Z8PcsPxuaMjPAiJWi46vEquHEjk7oCpGoSxxFRoRRs1YQEQCJWjt1doeJvsioPzfncCFXpFM",
  "key18": "4JJ5X6CzrrbrrTEzDchHnDDwuXyGaUsJtDZSWKyXe1jCN2pC4PaTygVL1pSaDqdCEwYmRSn7bUmkcFGzLZu3ZbAh",
  "key19": "2nC5wybJK3iGAsheW3SE7Q2xiKb4YkCumYQTxQWst8L8pz717Y4NE94n9SLj6YBPpH3YKYdddg59JBCGUUSNNcRf",
  "key20": "5g5KGVgA6PBVi7BviAayXr7o2UwgDqjgfuUy36n14tw2xvTKhbTd4bbxdfsvQuTTJoCWw32zETPj7VzE8RR5PjuV",
  "key21": "4TEuuqN9GAX6EJBst6xbd2jZjvGpfa3jC4Wj1pVCCNuJoRKErEgvThkHdN8QoHSdcm4L6NEQJ2q76BGXdEd8NU1Z",
  "key22": "5tRtEj2ZZyXPbsheapSQD5VRCbTJ1ainRzC1sZxhPvduU1D6qhnpqNWDRMhMmdSdV2mqQ2NHKmaorvXAya4aecVr",
  "key23": "3Q76qKyJqwaESq61VFJKcZkHGEVDDrwYSwBYtjhMReNuHX48FM83SL2qDpTFVJhX24G78DVddkKaye633yHGB3u9",
  "key24": "55HbrZY6k9k99Tssed2PQMqzzhkK3jnzvkDAz9LbUC2F5jNrLUtSErva9AxuEJkdhdxk5SCAz2QG7rkAA7QDGswf",
  "key25": "4fGucbTk27wArw1BmsY87GwnnJFVZJVRWQqf9srMALDqUwgXJgTrS4XE7L3QNLxaLptkJASkG1TuZwaNwv1MPuJd",
  "key26": "qqHkSLA2RyKRNACMZEQx1KaaRUAabtgKnVhHdLtEwD3PocHR47f2z4gJmt4JDnCncDbzmLhTh7x24i5ZvnwxSub",
  "key27": "2yEFZFaYeFAmKWeV6bfqfcdLzK2SQTLPHWUyWANJpvUsP7ERdpe69ks25KRiwZ7GyS4Z5gYRdSagWK1efU5MqEA4",
  "key28": "3hj3ZYvKTEgNA1Bys75YsG6urPKff93oZBEgQjnGg73wch14V8KZCpPGHxc3qeLRf7LrHgZ5tPZNkB2Hb78a9CHi",
  "key29": "3GAYGMzpa8vfRJoyBP39HyAi8zhAzXG6jet2EC2cD8Qc4GQhwFZxa76t43gZrvH9P5YVFrrMZRnnQkQxm1Tg6FC5",
  "key30": "2mehfo3nMEP3NDY3YUD5z2heEYNgfQ361zA9ygcrXmpQ8Lhr15iRUtx7Uese4fqatpzQ5Fz1UbdLhPSsFRySmZiy",
  "key31": "3o9qgxuR81Fz1JpvqkXoR4t7N8GmU1w53K23RgQGm3817AP1GRkhXhGGD4W2GnNaeVErj7mgXmGCBrjByiX1cvMy",
  "key32": "4qq4K73H4xR8va22RfPr2bqtkJSqgMPxSAYdjneNEneRNebB83BQQZ8d9UR1x3QHctYa2RDDbPzeugEvR8JnwiAm",
  "key33": "bS2uNz4Ek7pXJcFNTPb8ZTBz1EdLCNxpbBCwZKYLjY9HfbHKKNd7z15s99HH93cpErzDLSHfDHf6MusPkMEbomx",
  "key34": "2N5rT8fGigWSAGiuRZ9pZh8QLzbHuX43X65iShaUBt2q4DcTgeJ6a5hmtFoacjP3zFpJkbVcdXW2EEAy1TiRmYwB",
  "key35": "4iBUnXvpxetF4yphQYGEhRrdEpL1KUrE6xMQX8qgZa9vB5n6dcoGUPfmACyHeaT2ekBBqVoN2q2vHrwc65aAyoSu",
  "key36": "SCeEdEfhbkXts2eB41trPjQHpwrUrR71Akfj32HzYA3wEoPb45LWYsYC844tx93gMr3ezXaJEUUjPkJaxe2BYcS",
  "key37": "3HGU2eMDbPDtPDnRUFwo14cbC7ciHx8HSh9WAme6frcoeG1EF3v3PuCiNEbDhhMmu6N3BDCcoYpv1pEn3r8QieLv"
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
