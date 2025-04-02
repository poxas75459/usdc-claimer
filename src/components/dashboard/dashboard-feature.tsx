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
    "FwxrdxrEthVSbgbDFFQnG3vCTQpUgPEXkcwszH5dwLkTFu1Qt3x8tKP1h1xnjBjHypgUeD19zA8Mmtg6jM1xCAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LtR54kC2W7EHBHZX27rx5PadMyBd6EwFUXsAZ2So49rCQUu7EdLSZkvPt2Q7amLxwomE6Y5hodcPtCRiD3UMSBx",
  "key1": "4j7EpNShwYCcpc2bKFWcZHBvJno9LFY8a6sm6QhMkw8dPZVHkZzrSeBooF1VBMsruMvyTkk4oGCGQrnLn8arYEtM",
  "key2": "3UiyJ1hdWE6fBrq3iqtTWVXQiAttzqNCaaLzYQMrx8VD99Z4BD4qxjhrT2MGMAe8teabeTDDkufQAt9pe3srk8wc",
  "key3": "3VcwpVTyDejLGuVn5ZrHycRaphszYMFxcft5Y9dw9z2a9ihr14cJ6stP5wG3g5hGL6WRvwFgsGeiA4skaSWDQugB",
  "key4": "M3w5H5dnZXCHNbsdsSdKXZhEQymWgMUuuWZnKq5D9ZkcXuF7qSkVzp7bxrXEWRhzV9aVWhXsfSvTtMMbUZCitqm",
  "key5": "5U1ttJfYhFawJPa3MUUsrv3EF8dxfaio4DCPMDJe3oMytQT926qHHeyBx9oufk2vUurWwq8FJRjGpPCAmv3qCk6y",
  "key6": "2ETZvpzjjXFs28rPwAWUck8mhxc3CSSpsTMqsq6GpeH7sCirTEQdfRXFs5JNchp8KrqZGkn8njXthZhJ81iYdtTm",
  "key7": "54gd1bJz6akMqCYmmP52HNZH7E7bkj26Dhw51nJoypLUSHNYpU9pJahYvxAbPXPvdMX2adzrXytacqimGMgUJw4w",
  "key8": "2MPH1SpHg58r89LwnZsUxHBRVFU7CsHj6AjMWa88Coc9sgZC5yD1KoQEsgTTBKrKtMLvmAtprz1wkAGiXeM2zz1D",
  "key9": "5VvA8LbwsU77WaLDTAcetrpBEDByXzoqrUoVE6ebNnBq1aFJWqiYNoV7vY6cMJoCYvRAZGkiCYsnH3rZrETYf4ET",
  "key10": "4sDpaHqeKGvsFyh27VmwH7URQHmnU2ZLe33k8zkNV4MWkqjRBjGe3JhpLok4F2MRvwT72StUMgA4Gb6j1KHGKSiV",
  "key11": "2wdfkCSi37ayZ9Auj21n3gsUjrRh76WyYsjU8Ve1W5fRCoV5hcsPo4a4YQmmiD9JaxESUSrArDEPK1yXxTzUZpxW",
  "key12": "3vaShNppog3umGTpjSC2MLDyPXWisJ4X2jVqDgyY42FZSJSPeGvMt4ZxjBS78hdtarD6JyMeezQTYin5BjANgtRr",
  "key13": "3MJmdJF7sLvR53MJAP1DGa3nXdGbnaqeubzscgSvKdifa7PgCEXGkv8Lz4ptockGmYkh89qfmzp8RGA76L3ZS8jd",
  "key14": "2aqHbg7FCoRqjbYa1iYLCJkrLD8cMkyhLPWCRNGBSExNNTKRo5DfiBKyArvh4221WZJ7J2PevJWmSuV7AoGy1qWP",
  "key15": "2sq63TESsrCndwzurYPCKSKm1PgKaxiaXG3FX7dyywqaeEETxnwRXGg2pTjaWr8Gyf2WgQKiDNqtt9TVxZjsq7Ca",
  "key16": "crm1JoocXwt2sSFYNJczuvx2xRuPJ32DGrxknHhyVCTZLidpawg13NkhbMGDCdUKbJa54CBm4bfj3UW24JpF7ej",
  "key17": "4ac4x1PnCBqyxNWADjQfLtwqivtnVqAjkjgY75Y566dVR6KtBgN3t1rjWmRZ9EiXCwPkcTvX8seZPX9nkLHwRLdL",
  "key18": "5q69HQ9LTA93XtVaeQZbf6NM8gt9GM1vAEynNcssA1r3bAtsZia3QCTmBbknSk6iQ8KZV3hJQxmjqoQY6jAYVoSb",
  "key19": "yxQ5RbTHj2rsmiYSQAYiK1QBQADvJpArteWu7UrrGDvBiHt9jgaw9M79E178fkCVtJjZSySwQc46C4YvpSG7TLx",
  "key20": "PwhCyRk49FNX3Qtp5nyU3PKQGSBtzK6jFPYyoc5aCJZ93rBTNEZCexbLfLSHWMy7hmN5XLqA3iUTov6p4PPaCZe",
  "key21": "58o58uTZAKsehb6W4vU2hzRWZtXYySCHf5SN6wbKcjHCE8BgY5B7xoPkPsn5uhxNj2JcBTXFVf1uAdmnqgnCsiN8",
  "key22": "6w6bQUpFeHDwdWSnSTVW7bfsqGvChZYH4tA8mVMkUSfT6oiuzhTQmHW7jEkqzMqCxfg9X4F6k3wLuzmcuhwdK7e",
  "key23": "BzcXK43KAeju8Cf1Q4gyqoCpsYdHptT79pDYcNJMZryi5fXVyLAwJSjoRg9setYMY4RLMmUZEaod1EwyuJRdChy",
  "key24": "245cKGbAi6NGZm5Lhby9jLyQrJUMZ7AhwM7jY9XGYKxzv5euNVez9S2mayhRG4J8LjrwPGPQZbfsfFpQtdVtUX4q",
  "key25": "5Hh3xW2NJ6mkARtAai53dgEQN4EpzZR29mp68t9VHDiicrUaxayNTKBrHXK9gjXECKv63bmfF6EDPJm9Wh1T8Rtk",
  "key26": "2Jqizid2vRKSQPZPpMiWysukPBvDrMJfycLDzUjNtK2Sen8YHqMABShzEg3z1h4nCL5DNwhvXLeuTXDQqMhcTjA6",
  "key27": "5MzPzw84dMtfLE7rdXKxRBHVhEG2MnsZz1dRbqpd6RDtqt1gCKhqLjWEyZD1D1YnDYBq3L2rX2oxC4HmadU2HfBi",
  "key28": "njJKESXUjrx5sdxhjhXXDSXNpJTf9yea3Z6ccpYsVnZjXJTi3TjY7ejVYdVaVio1b7mCzBpvf5GkN1n6LYQPA9X",
  "key29": "tZ5iJ8F4AySqMMQ1hVqaCv5ibHKYnnCojbKVqA2rx332kN6RH9PRe6Yo9ewtE2FsEx1b9j4Y6sWaoePx5APL5Tm",
  "key30": "2Jgg2mB89YA4HobLrKogjP8EM1AJpGcW6VkBTisp5jDxQppRvtVMETcXZ9aubjZ8SLPB1dSbzBXdR3e2SjCZFm2a",
  "key31": "5SKEEd4fSgE7g6V9rz32vcwaAQ9X4xQocc9pARev9mJPsaVSNENzpEWFYVxVuwQXqxLhhsnhXbGSAN6KuQQyoBmR",
  "key32": "2iKTc9WTnzUmQcGsRR7t3KaUtynH7uHjnYybsvtFtGWmbsMgxRohSQi2dfghEFnqPdmG2buxfvnsuvkaSmUFCtwQ",
  "key33": "GnhhppaeJ7MkaY13Y4AW5RttLnQHWKPaV3wZJo4jLsfB9He1SFaQeGxCnf6ccPTf1GyLs6yCpE4p1fRxbcG78hL",
  "key34": "3ymH78Leam7yf55CCwLTna8Z9DyKNJ4hCpEme3SEowFgrARbyAoQ55xtkXfgM7SCrq88L98PdKKwhrJrB8JiMQT5",
  "key35": "45JPQtXfiM2ijxdKBTHBeADXn8o2QhdToABZNDhgfzV9WtwVnBpUnU8owY49ATyUx6wh8pQzvuX2MxqxWnPeAnVF",
  "key36": "yMesxZWPLp32D4rMxoSnFtSWwXypTng8tML8YPeBqTdBgLTsmFmG7eQvMrGeqRgc6WyZGU2AZwPj5nFn2RyzFV8",
  "key37": "5KAgezDyHje6EeJuvyi9dEG2hpGrEQVSGQHdfkuLGfZk2v3Z5xgfU4shKg69DT2pkQ45FPy8noSj1Lde1PXbj5mf",
  "key38": "5qzbH3XT6HJYMfhPFJtWfbQ7ivz1USyWVwSmgJGokkRs9urjcKa4ebaRzxDG1JBi6FiBiGsumfnqKsEqfk93nUPu",
  "key39": "5ypVeqSHjNU3qKcfmhfHAU2xWryDxzfgDA7h3zjAK5XgDv2EQhv2B3UBh45vkCkf54M7oLKzxdmhAozryM955ec1",
  "key40": "3ACBw819etxq9CPZrQanoByLzC9PCrNnceBP7312reZwCqMg3irTfhJptv6CoJKMnx9P4qEPb4n9JJBw6nC7DZYY",
  "key41": "5tQ8yqU6E8GVeQkuhDzAiTDr4DKMjT1w2dyXScpgKtGwqmccJZyKmMMH2TXXNru6z74hiwSM9TBX5aMLu4wv3Eak",
  "key42": "65cdDxHeVd8hSW1oiXuWwioBSw5U4ZmzExPYXYKUSX4c7SDBSd5No4mjw8E8CWA2kim6YwV1kd7ZoF8VgfgQE7TR",
  "key43": "hrUGRfoeaomNvLw75BwLSnLa7xqWY2dC2TU4jA8HoCGfuDrr8ATnCFH7LA4anKk223oyWTVyRrgCbGPHAGoiPeD",
  "key44": "514LGGudkNJe97WsAN2PdMJMoAtfouELcftjqLo5Qe2YRxyqJqynzJERdAVUmre3TCuBAmB2MLQjTD9eWVEEMPiK",
  "key45": "3h68hX7fbuHJ5YY5ggpaMrhN3vA6zVXodoKUhh6VmgPtwE3fqGwEpnVmbrdjBekouMaMYS4q9FHSD7nJXZXRdbxh",
  "key46": "2aJ445tijS59tHruWTkjbkkZq44dRqbXYeNQUMPnHhzuaFXagp5FuxeTr4jz8nFPRxrpDLPqDZUjsnKG4eEo1KXs"
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
