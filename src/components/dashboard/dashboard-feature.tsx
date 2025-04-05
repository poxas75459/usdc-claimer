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
    "3ANq3gm7fuQ1dv2UrTCLDWqTNk1M5wnwzFAqgbQS2MsVkguhpEFViPCMPoUPyq4oU79vo9DHTjpTQTjgZL2rUwWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vhjAveXYXLNf351ymZi9ioaH7r32zpsFuFREiEuTHP5MUfMXpZEj7ZSLmWoenJ1YRyYs7t98Jf1WCVBfxoQBdXz",
  "key1": "5JnPQiZEzNBYsqdBcCzRP5fZyiR8ZURFJ13ADmdL1tBuhmqeLnmWwvDCkBbVswhnLkw6CioBYEDmLYYyTy9joP98",
  "key2": "56ebP5cWpP3RjaGUcxHvGuLJfCiuinyy67hZi8orRspSAy5amNAKyuXBDYeD9YyHTFDtGNDan4gwatSyB9zkRaPQ",
  "key3": "4kGvPdQtUKEhiTdcMfTMRqeSCqb8MK2Byt44b5NcVRnhRFivPcNtPXDmhMUdMtMwyvVrUDLjRq3rMKJCbobMWZRy",
  "key4": "3DcRzgw5UvT4QKubA6wnZnbjfe1X267xBpWP3mf3weAnYp94NonMshPdzZ21ESJAtqeAnJ1WcXtH5zJ8RmkLrUSA",
  "key5": "EqDiCXUrKMeGtXnu2SWh6YDw3Qi9rbJMDErtU2bhJX6xcSbKrx56iNBezxxSS4krU5fpM4wrRJ3jnWU3JcPdEnQ",
  "key6": "2VAMddJrE5wZadLUVH4MXky4HWCGBWRcMAchhpjuqQt9rPw9PkPDmzgaydiUxNoaZQDx6qS9YrHPE7o9nvsu1wLX",
  "key7": "5hVn2ugxWe9qQPNgihAwXybFVCSyqmufEH1Ks1CSuBaVMHkDrXHNmyEgdcfawwRmgyMuK9FU4Zvd6mWsWbH3TU1X",
  "key8": "5c9jMF6fTme4sEoKLpSdmekVMq83HvYX9xABLyZzUP6g35kWDhGvhnESoTxjW3fMBvxFcpJb1yTeL5ZQaRyoMFzR",
  "key9": "2RyWLRJaQWfFs4kT6hHH1EPfHXRtNRA7y2pUrm4AUSQ1nzofKWbU9cmnrsKWgbAxmYT48zLYWoK6ZVWs9Gq7YEQb",
  "key10": "4EzWC2Mj9u1CkAcEmWZjHCPXUud59Xm7BS89b4emRgRgD21D8kaxyPsz3t5FrjqUkn4cer8m2so1DJTy4uGASoMp",
  "key11": "2KfQDBueKFhECH2o5q5xcgnW3HaGvUqS5nEgFBq7bjjxrzWtY1UKHYwMsvZtq1nXowm5xH3PTfaiBGQkEzwwKvEA",
  "key12": "5mP17fQffKczMXZqjYi18ZfXuBdCmajjps2bGriY8HLgjg9Ffc8hnHYVJfcfvbs8c8U9waNoPasPeG27Em1BDEnR",
  "key13": "2UK8mXyezgnQP7mcPB9fRm6ABmvooq5xrSeCwUsyU5i73hegnPtSDcR75HNzfZXk26odcxhkefGjHXe4bkzrWRHN",
  "key14": "58ePg3by5TxFEpywMrB8BDiC9JK2d921hj23VwW3fM1uWgMkHDkdWV6w7tDmRkCjG8wQgjRLQpoTbgD4eRTet1og",
  "key15": "4CEVpzEnnaD6EvwfRG5j4woQgDM9RgVAYZgbYsso8TtkPHdm8xQ2jEVs2ms82tGT8idcFc7NCM4UZ5RtTPg8SThN",
  "key16": "5HhzH7GzFpFdmVSM6d6a4uVS74MMiwETn7DTKWr79NdE7BzQttmA8FPzBYYCWrSxWTB5HE6hLDk9o3x6LG2SgGja",
  "key17": "3coVnx4r14jWeugU4EZGPKd5dKuPh2nTPmxZi6wt8CmQJuwo9BfyWv3DBifLoHyFvbxUCsRJfZd3mfAP4gu5yzDw",
  "key18": "5oGfwPcnwktdSmipJ3XmKk5JFDk2u1gwwtZKLDbYm1Wv96sZ9n4cNfYGUy8inP3XiKkKxhmMoJ9no5R3Jo2nTyeC",
  "key19": "24mwAfTAAadtUF4syt9TbNzgfiar6YMHzXEBH5UdjEvoirzoTiXyh5wE1Ev33e1VBG47kvtLubcP4crLxQynu3Sw",
  "key20": "3R4Bw6xCSXQruCABE9zf392HUG8aULL4yLeUBWVxvgUbimjWrofrgNjYUu28dpfXYNArRSx5SvkezXq4v3NrkrLL",
  "key21": "ncLPtGRNfL4jArFoeaqzy4fpLbp8PUAYBEFQnS2nNgiXYBvJhegWQDDAh6s3txBXF1Mrk6ZHBzQJbnEdAa46ZVH",
  "key22": "uKrSyE22U3161CaDZpsHpdE1J9DJ5KQ2aHwpG7bYboskSkDFB2jM7QMBLPAFRDgrA4dj6JMhEh5VoVzScTzuttQ",
  "key23": "5jwwYqRAWZegmnQKswxYeSdFdx8Uh9AiYYLu46p1SNHtxzesS44RgvAsMPJDBaZCAAaA4iHWDNH1pqmEczf8MzNx",
  "key24": "2hpzS48Ahs8nKMbxdzioe38RwrbMpzm9mfME2eUvY99me7YgaxjB7PhqTggE2rzdnXkks2fuTEjHCheLM4tiTXwp",
  "key25": "2mVEt47X4VUZ5jjayt1JC3a4Yu737JhAYh8N1iruYiEyTraAhdjRfRkFU1ZbCtUQ6CixVfh6expWCjdDx923jw2c",
  "key26": "5uCKgDfrFcAxa9kQc5F11VW4T8L6fnXEqwbVzVCBxCKSoJ3gezBchJss41vqcZgu51RbMhkktwZktd4JFdaGNabf",
  "key27": "2GcLUPqecu8c5kqwZf5mDrvNiwDZhGaAc3gQvvcAbcRo3mJV2MzaRK9RYzmtjTCz5BGVLCxaVJqV8sfweZWAgvqn",
  "key28": "33FbacMq8hjUBMjVCXDjD966iqApdPMMUSJPJxVZHFvTZjvR6RrmFWU2Wdr93BwUAUht3gdARDLtQc1sHuRZYK4R",
  "key29": "42qhnKDupn7ksEBC8vsqFQBKaLMeYmod4vUgo3XKUrEfruS5arzzkMjxY4Yef1sxBesp9mXtPCqoMN778V4xAe89",
  "key30": "2rgpYRcCAAnPtzEjGCHxJwKSG4Qp8Qob5cwYCwpKxu9gmePcayacJprSo5N3VnZMZKNQTU2hAKSkW5GughsTadSJ",
  "key31": "3eGqTod3bQcV3vMb6rHQRbNZ4YFHReDF6vYjRGBTzaevu8vSzetW1G1mkBH3gGh991R3e8u49sQtnSRkYNBVRXsA",
  "key32": "2aFPVEr4UicQfPyyFLFFSqEBbiHbuHa4bvbn4Ucqs2zBTVh7fK3V8D2QrVrSECSeczuwwPeRMw7DFBbMYkGkxmbK",
  "key33": "D1rVH7d2vAjK3cJfDbZjdqGijYbkfyziuaPckJXi3BJPWTobFmXeimDrLxtofVpZR5o8BpV611RUeq2jgrLP6Mb",
  "key34": "34fU82BsntKnNWHASq1tZ759QS8nsQ4ASecvx97cQJQGZqzWRpycHcrD5JVWbHykX8L7iGCRztDJGW2hjm4YXGhr"
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
