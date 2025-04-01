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
    "2mTLy4YFrLi6Re13dTNjWxGcUzZzw79akMSx87L6v3uMdc1PDeCZf4um8M77rRuuc24jhizvku5m1wGHNpzbbKj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43NDA8hWTpqyXLc3Aieu2zBCR9rAUPNHZeLsoMqs3zu4de4hM1FupKgW5PQEDuJkx5gxfiqi1vAXbATDdGmWA4go",
  "key1": "Q2C8xwegGAdGjLzrQqvTJhSHHvVdaTVo7JEW34Fh6je4vx6gmmNrbzZ6P3tGZXkTAPynFVj179QYkaxN3zzCePY",
  "key2": "3ycEb8ABV8ZMN7uxrynds8qhqXT4syXmvbecQNTnbzRCaYdfYbTHERwzNU1gp8zRbui66RX98ZRCvwHNEtap7fx1",
  "key3": "34WdaGxEfAKQRMUA6yzV7XjN6doTxDxeAt6T2oz7L94p52NojfVgeejbcD5ZVXjA5JxUYT4wMhqzh5DM5uzozYEb",
  "key4": "o2y3X8wAPmMm5aWtJnCAxtQ3ARgSn9QmRPAqd3xRWpQsVqTeNWRQ2gbqoKPrCqT9pXA9vrSxnFxhpuiGpHq4Kdu",
  "key5": "5LhfiBBqtaJMu3cEn8aCZb3G3kxjTpqviJebCRf863MW7Y44egrCuZv3itnzrhN3qx8yTqJMV2mMga9Y7AT4SbVX",
  "key6": "33nQFC5idzWi9pWpQa8KPQ6hHRsgkQim6CBw3URJ3NYpzVBsPokvDu7Uui8gxdHjL9cP9sskSmgP422d5YfFCapj",
  "key7": "5QMJWSxk4jN11Djb8pCPgRmZtbdKpWXJbXiamkLa4YagJACTWH6vmvnaFwJAAzAwTXKMgfCsmP9iFch9oFqpCw75",
  "key8": "v9iQPSioQCZHT5nbKzAWEYhYAf9PH2MA9f9tDQbryQRAeGiYzLPykcFVbFSa586Safon3x7rqMuVHV4zKZu8AA8",
  "key9": "4JiHRH6JqEWqQSvEAccBtbsUrWFcZGNfjBrJTW3TRFwqCf5kex8JkRVf1tG9hp7yrmJnxbxDCBB97pn4tDo19Kyj",
  "key10": "5mFPCt7zyoQ4MESmPUBwZHZq6GH7ne3YSv5KEMxszksLBdxKkge96oZXPqN671z5Mb2s6cqEUdkwjBLGYyJW6skH",
  "key11": "5CqttrFgy2qLxmBf3AKcYmXGiH4KmGUW6G92Bi8Jmz1sxb1gmjBNhfeWTnaierz2Q8hxXtdctNE9Ct2rqe41NvBn",
  "key12": "Z7MjVYVVJuat17xnuMaV67ZQiPMMp9FcxpZvPsYE4VzcE8tK5cNvyB9HUd6LB9zrGfGTZacV7iGfcPGM3GaD4H9",
  "key13": "3UKAsXTAGvgSLFa2HV5yJZZonuF5YxFhTuYkVimVirRsqNUAk4f4jvJBWt7oF5sWTT3NNScVAF4G1daj2g7KeZ3o",
  "key14": "4i2maBEhQN2b7DZXg3YZJmvbFfnsZQUsHXxyL4q9CUhfu8Lv92HvLArhEMYjNDVzzC77cuSGk6yJ4cNe7SwX8pKB",
  "key15": "5T7UAw6wnYMYd8Vs6eD8TqiRXHMSnCKQhidnP5kA7JugSXn9QgtUm3185xiss6aqfvAVFdGvQjyDoQ4hfDg7ofvx",
  "key16": "2vLmvKmKdAfrWjoU4Su5nrvCZZsGcsD9z1zyk3N93rtj79UMC1PgHvgsdJyF9cVhFaWhByVsqrkcphhXNvDKuvwR",
  "key17": "2712CAdcCsynJgrPnn1KcRZ6GYokP3AFaYBU3dUn3BgnKsZjCCEXMoVHniWABBRtKCjmqiWHnCgdeETRy5A9bFyE",
  "key18": "2mE9cPG33hj6juyPAPy93ABfR5VdkyHKpiXDRhRjG2gFMeM2nNsepPxQ68wqKPyJy5gcUFpbE1tyxqqBWNPrhrx8",
  "key19": "4ChSJSatacSNB7L5XEPc4TfmvcxoGo6bwkQB9GCDNst11KAWJA4aeedUnHfQ6nSkhgiaXvf62mSv1suPaPcAS6gp",
  "key20": "26SFGigCB1Pv1usMcaLxiBghSVREMfF7dKCpRcHM1YwGxRi9M6NhF7p7zagpeCJ4GbSmCq4SQepVZJZqPyj3HBTM",
  "key21": "2vXiHMxmJREm313iYhGzgL2aYE3Yz6EuqnaFp5GgKRyubBmu7pTjZVqoRE5GYUQa62CypwyHjcHHC9dYL5ht6c6C",
  "key22": "5eMVcM8qVbtaDKhUkndMyPVvj7GREQmhyme6MsHLbHVAZ7qZn8gK7Tc8h9vwghhVzyco5ufzroirxRFj5YBzYmVm",
  "key23": "3d5ayW4n8aJZ5ENJgToc7tRwURhZHwgZb9Y5GigpwzEaCoEV3zzNKVDcBy3APmVzMh17veAcuNNirwbLcD1JSmZz",
  "key24": "5EbCvK5d1emWveyi5uCUrgiSwPpG9pL2p4iULUZgHdh4XRfdhXye8PYihqEEwqzK3KZj23rq9zKoDT8ZDxy4fa5X",
  "key25": "5zLBUdZTZjFJ32AoWHgPEiJhGs39UTStN9Mvd77GnqWrE3GKcpwVaZgUfQF2XxGTtJcHsJTqdjojPSCBRaRQ7T54",
  "key26": "4FRNBbHzZH4R39HnEsxbPfb8kcw9zCCnCLycMdfwL7f1skaHR72YkjAvYP24VpTNSSkadW53YcHFzJbMo9LyJXCP",
  "key27": "5WMXEzNefpir8W61zAGBVt8ZqWovwAEqhhFnvzKZpoWFNGPj9byd1hrassVygjW9rsXCkCXXTgvM8yk4cozTnGNE",
  "key28": "29z3PbM8hgc16ihHXyoL6cGxpmE1wkFwRRSUZ1McinfSuJB1d4RqLxmGASnLfrJ2zHUSUCf79qcHYLHsy4pMnKtj",
  "key29": "2vwUSFLGp55KJFPeJ1dPQqcEVBQsqGCymXyAfgdUK4C6vbCqwFmgeBLrFiDhamom95qVjYwTAcYxHQ5aW4YKRjkZ",
  "key30": "4rMdjq42neAERHdbvtfExBHRVKQcAAV6a7VjyBLqxZUSbfTpLg9UQcwek5fDkt98zw23za85Smm1J3VoWsi7kZTf",
  "key31": "4R622x2D8PSFrsETtgk2tygCmqEH5r2AkkCXnzQns4GjZTsKnjK92GFoEyJFnqAjPaZXBHMvqYaK85YG7kShsqjM",
  "key32": "5TE8qP272ZBsKiZbkNMi42Swpf3xfnr8jRHS8TNHETkySGGRsq3a9vnJHDbF9eLnW6Xb38sHsXGyYoRNQnBrVMwi",
  "key33": "4Q7ieK53sgEFFGXNrrVcMUSLEjXKJCd95nhMQ6fdNQuRxEEbSkWisZC5vZsinYJw95rAfGptBpAkU7fw4T1aZ9ug",
  "key34": "5yWmT9R56MG5S8SAWChLn3G7swmVU5f7cLxMgNiBdjivmMvdiwKGqMQPbUf1oj7A4FQkR7bjpQ3FMPmx5vcX5Lna",
  "key35": "2AaaCCYSQ2giUZ2Jd7JwziTmvvXbVijcPQa3ydrMmvAgG3PEP51GNUz5L4qsdww9Jbhtk554wfWsJVHMC7LRFH5M",
  "key36": "UHYRPcdHJmdpdcJoWn2did3fTckk8ADfhhpvYVnNBb8ExqCEMHbmSrH64ehjQuQmjdd1sszxW2G4N9zmZEKdU52",
  "key37": "652Am1DQkyqCmBBc3AJMaph74eTXCUMNPYanJciCWgdkUkcV4ycRbLHr97Z1vpTJQoTs5sVv2cF4MyJgPUAf5hGq",
  "key38": "qG7VrGUfEeQGRqcjrgcahJigPcCR8qBpP6UH43T4ixW4dLjcmc4Hh1pRU9qmCM9iXJYEWX7tcRerttBNLi8ZEku",
  "key39": "5ssFDPr5MzjPYqTcxatedJcgsxmAXqasarcodrDPfeEdokGEzfxd1wp2p2E6ucLk6pLaj3j7XuESAnE6tj3XsNdM",
  "key40": "2MftFfUaRt6gKGPkYfxNZgVxki22RPTcwnCxRpT9a7u1Jzt4hgYkQDVsCd7PeTZeGJrxLbTBDRcC6Ac3QPaB2eaB",
  "key41": "2GMo2NwyewVVeaF6i6A6wGUj83LXeDMYbxaKsK9kLFUhZjULAJRfyyTCPP3yD2yxSxnwXVQ9BHFK89qdRRm7Fp4t",
  "key42": "3cMS4ejoyhufVp1ShV9Whp1qezFArEjQZUYMXtM6EMjdLW5PfEXc35XHfqz3K5ysCAZGYWQCsPtnd9hbSAEMJMxn",
  "key43": "4JfRvy8t8NkowkK3nUNasLNL2bWX9AQ4vcNwmpZucCvzda1goz2hUKcx1c8ksLmTWcwbhf3oqnazFYdyQeYVFZTf",
  "key44": "5SzAWNw7hyoLbk8vtq8JNVHpAS71hePkeaYELAJdEap75eyL9TSHsSoWkq6maoy8UyJvnkR9wTNJyJE8ESyuvi1j",
  "key45": "2ARZqh6Kg6gJPuY6j5GBka6HgNEPUbAWcBfDx9zUigvHz9yRf4m1pZKxPsHq5nQ51zHM38A7e8has1u3ChNewoXw",
  "key46": "mA98swmc7FYtiEMfbRPGrXiC8jZLMDrA6n4cY2sppZ3LEfKJUmrZPZawcn7HkKK5pk8VrQCCh4iihJA5GZaK4vZ",
  "key47": "XVsFRJh8aurpEP9przaT8gcyr6zked8pAHBJLCDrjujqjtKhPFjYjZUy1WhmBM58MvfGCVpBCESeUbxTsn8so1U",
  "key48": "TKRq2RJdX5dkEChkAAUFBmEKCyDFe8WuEpLS7Pk5ndjFcVFjbhKiCFoqGq1r8nY2ANR8KvJz43GBpqmgYXzPh1J"
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
