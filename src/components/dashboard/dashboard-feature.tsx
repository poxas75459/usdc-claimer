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
    "2EmeUJZd7UZXnLLVxGNZHR3PCWmfwqw2JRfNn6y9rWmgEu4uvCiKDFFSa3wcx95bPTUtCecSiHmEu76GXwXaGmUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nm5r7MCKzs918Wccpn2HVreWDyZLQm43jxEuccE36LzhHYtfMGcfqgPJXEphnLZ1kFDMvhqEbcWZ7SRNzWkig7p",
  "key1": "4J2FXPpNCa4Jaicot63xHiLRiWbAx1rUAvq61k2JNybHXi348d7WdtUaJ71z8cESaGxfEBrDtLdyp5XQTC26kePm",
  "key2": "2uktN78Gzm1bwZDKwL4tnW4KhxXYxvu3YH5Gto5Zrdbw7JFf96qRLLBzGLXUCmPeSPUc3kVYMzKsyrp7xRFvnVpn",
  "key3": "21ZsDH2WuJXG6bcjjrAFnYsTTurh46PzLxWKnXWba7g565DNTAq5gti9BiR7WDTGUhgsj4z3ECyDGnAwsKSqfQED",
  "key4": "49znURNAWP3Dyc7KSqZxaGtQ9eMBQzsBPd9eTyyTH1xiqMfebXBJW9aE9PAhwNSaizEa1hnk1PFkmZPGYJvuY9U3",
  "key5": "43uQiGgamFtFFSxucHXm2PJGiUj12kWLFAS7gda66mivbdNt2Xu6pmmMgb16izpGgdAFeaQ8m8gBGaEnuB61qDnz",
  "key6": "2N2erJwtGNhaQRVaVqkstnXHMu8HgCros2nsnbiDcEWZ7GfRjc3hdgZ6wjehkXq4nLw1dpz1WN24JwqLXfQvLm7P",
  "key7": "2XcLByerjTqyRAfTnnKz6jnabytLD1Q1Nr5oApgacvhiJTAbWi1GPM4VPU7wsG2zi3Y6SnM3J13UcjPoQK9PAokJ",
  "key8": "4mHwRdq2bhDrgWHV8pWu5U2wyrX3prxmVpH6LCRWL7jHeCX8qpXgHqfnLeSPaaTDdrx9Sta9SmZY43JE7SJKm8jm",
  "key9": "32xtasUQprqY7Z7jxjiHj6GvsMkTUdMUzJ7NXTGsuPuJU1gExDS4YErkFbgHoQT8j1qZ11G63GfTdpBmXVkdrWPw",
  "key10": "4yfyFU6EyaQFFaYE2ut4LhnSjmmM4aSczPDJfCULg9qAkixcA7nknp6WCCBFQVuf2CbPvbuuo99jLJJqnLjDwX3X",
  "key11": "2YHtB2Pcb4gfCsDCD5dL84gG7L24T4e84ACPcVm8H5kGntMsBuunLrNeKT1daZirmCAujrNEEHM5j5xiiP1ea2JX",
  "key12": "5zpeqiz1Jzj5MRMmfoTyLuZ7xFam2kFV7nCg6TrGU1uaxCmxoeYWS6osQdPNTSuPv2F4ZgefD8qxuBUDFUZduXwh",
  "key13": "5GLw2Un3Leo6cqkUfsu6Ub5jztyNkkEwyKySTEHTxdrkn9vJnRde26tkKhBuR2fuFMASHo9vqQxcPyfYjkir7rjX",
  "key14": "2ozoWFFL9hjwbcLLViArc9DVXRhjjAzbSpC2P34zWSnfHyLPYGCsNQCyqG1ao19KaPK5vaDzDUr2EffJh85Mzcyb",
  "key15": "3RyzwXKkdy7NZxnuYxEGHtoN3ScUdirPr6YvwM13sNCx9h76Y7n8xGcE7Jyp3rAWR3F8PEmNXxb9V1AiF1S1sZJX",
  "key16": "5rYhwjJD4wT6CdFLGZwGFRDeqFbZdg7wyGdTkBTAzBt3g4hvyezsSop2foppUgefntoNDDz3xtjHRy1FECJsgza8",
  "key17": "4wZBAZjEuw3aFJmCrS8g52P421sHGBMsoK8x6GaFqoziPN693KzGtg1j6NNNLiSUVZ9wk6bZEhBzYuwh8ZJXG1kn",
  "key18": "5KEMp1uXKmenE8L5dAoSp6z95BPXcU2kyasYcsosxQxU8kU5JJ61gi6TPdU6hnLhVpJqEHwtdLs8hEnNQPtunFk5",
  "key19": "4rZvUTmvcts2cii4vvYtuaieZ33k6s2hp1wt7FmsRT7LRBtCLAEaPLNLbTA5g669rPs736tmpquYWqfedxDeY8Kq",
  "key20": "2Cq26KW3y3ii3DtogrBzQhjXZQrgAveAtuefXrLwt11qJ1qWWs1oy8wQJxbvqHvxWvzLqGbdo2uvwqmUNM6fKg2G",
  "key21": "43o1orhPdbgzBXv7EKMxzNgFzECqdWdBG9AYFmnWtVzD7qUNVR3LNP77hfqPppHbfDZxuNzkk3qjhrPa55NgM4MZ",
  "key22": "nWSVpKTYg92dcvddHuExp8YugJVN6ZEuPpXU7vVVufiYzUZjb5vyNRYfd15dhorwt5hC9wAe7vGhJ7Zq6EWRxFW",
  "key23": "5442hhfY68iFKvPGU8Pui5WhngL7A5pUrLTArFjSvZZEBNJNAFySFF75NMLgjsMKcJ8aJKbVHBznMN2pM2GPVpq1",
  "key24": "4SaNPxwmBgqR6va8qrRQXgLJa9pJQ786Hp36NQXC63T6rpAwJ9TfNu1ZcaMdTUcX3ej6SLRLZ5uos87CSmvYbHEn",
  "key25": "2un6XYnC67ShAqvuVQEAe75qX9rw2SA5iQu7r6Z7ngUQRh4KdhA2XwYGQvnnwPkoGnNKcjHmEeAj3b91tRGFg3pe",
  "key26": "3DLkrfKwQsnRbDpGYh1ZS9tz2ZZz4RbiNd3CnqXcmxWJpn4Ls1o1sJNZe2UeuDJDnkuhjruwgZhq5YMQyQqyK4Ef",
  "key27": "4xAUqhRG4cyUhNbpMWnrVuqKgq18LbpGSwn9BLzahqgsjsYY11zsZ8FLcSpwywTYdGAzg4gym123RdGzmMSwU7Kr",
  "key28": "3GrKUC2YYFLULkpxMBfQL8K6RnZ3y1qQBD28nmtZnaTTauVjEH2VrzA2CYrbutF62AMvpXuNHL8BF3z4nfHuiSu8",
  "key29": "3zRYbFyQvvMDyirhuzqCJs3aAXEXbMh4jYeAci775Lf6xuf8yj66kmUvvTWRpBW98hdoqeELsoom2DAFbnpSMB2u",
  "key30": "3NNsxvhh1YhCBRpKi3nFGpPaKUuUfSXKDfnGX9bGhCX4Li6rmW3urcYGQMaGYV52ywcnK8q2D3yCwLCxKgxgS1Kq",
  "key31": "2qkJdssBJ9T11gRSyWXRz3vrmAriUEApvDE5mFHW6ohFJrSgcvXjELYSYMH4bhyAAZQgAyRvrHfHRbrvfjPCXUPX",
  "key32": "25j1pypoUhp81oNB4mXAE5TKrorGMBGrJnc9gG2bLGPiKvXLCLDFBMNKKZ9fqBgUouWhk7LVMb9yEjtQ9mh9Y34d",
  "key33": "58pGCkX2ujeE1pWDTKDH7YLNr2TNCPV6n8B3HSbjhpDXtNQ2jpJCt8ufKAs9YaR15wtwLy6L17yZpcck5RM4dP9f",
  "key34": "3TEtj3MNeYWFBJY6vwMGcVs5Mejt72wd2zTs6q2eEfV3E9Q19WTaBPfmdLApfTFuSbJDaAnagAwAyKohkpNDejMh",
  "key35": "SBuQHj29mfuiVh9a7ZDbJ6XqQ3k9RJ2fqKCdt8NDSzLS4hM38beNG7ArvxDDd9JZWVSrb3GQVKyPHfyN1u7zve2",
  "key36": "3UTTN8tETnm32JqPP1SuvT1ZhzXWWQG1Zca41irCBoC1medeRCJWjXaKTYHzDLasXUFD6vRqWSpxkusYjaze5DKz",
  "key37": "28DLhLZLuyHt4VvLCQqQMfvJjjnAep7twMU4hU1R8wkG6iD96aeRJLcNPtFtEVPHSAPA2nweZHAQL95HGFg8jWAu",
  "key38": "2zHhtFAsCWEwqLL9CMSDB7mYe5eCuyW9wN83sP9B7BaUGwvwGZjqQ7ddUBMiYVFoL1fv8DKRp4rueaHVdLnWTmDB",
  "key39": "5QsjjSUDhj9iKBtUXRkVegHyeSkZpUxy9qjXvJVgVSw9PWyxpCM9NDTSAC2gwmMCb8EqhAFVrnSX1hMC2Fpwkfrv",
  "key40": "4nZ9jgG5MkURKx5bN8fg427D4QWctUEVcaM7MetYgp6XFKzgBAXrf2ysXvysYcTWkN2CsxSVGbwYYDRfvWqiYUF5"
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
