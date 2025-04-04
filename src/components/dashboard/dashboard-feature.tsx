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
    "oBH4KUWid2mGAuVDVGUjrkpQtWfRq6e38XCfTkUWB4FYqieEnAndUh5Tf8LxEihDzr4jAoQkMrtHyfrkuh97g3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KunqrBz77b2mYA2Ra8CyZFrNvLiekPkb4pQ5nyFA6tPv5r5JX6cFUYsRFoaK3zYUJRNuJnsg3HSjRqZYGkVZwkm",
  "key1": "5ck4KAxUT7KtT2HU1EYa19oAze5z4EuvbjVMNhGPexxz6KUVrAe1rGHjxDqbbL3MQ2S3X6qzGKsPd6xRDcWososQ",
  "key2": "3NEU6xPhh8toVDJmns14su4cCRAzdhBPQEEEcbos6oKLmWC5sASaLEqpnBeoDv4gxY4FuD39E525uSvMykPMeYuP",
  "key3": "3HnwXZUTvjK4YdHp6UH3mEfNZjkpEgkaWxpo5rgkzQsm82EwPG3vJadtHTfPzRysDPRLpfGcs7GsciN9eM4PT83B",
  "key4": "5q9NWr9jWHvY2d6rVf4PTJDakw2Qt8JfH8uQG4SAmdw27wbrkRw3bxECCDuEVZYsyuQfHSAMC8dpF39M1PY1MDwx",
  "key5": "2vWmB92A2QPL6V491u93fRhPHtPcACMVWABrKFY942rRxqJ6MTUEnevLJi2ZVMakVm9YFro3jwwgUotu7yysgx3L",
  "key6": "2bp2FfX45ac5e8BaEXBM8522c1hmv7Gp1uBY8nNHNH2PAdU22DirMTHntgfvwpWMFjG1kbLvifNrLh8q3viiP5Ty",
  "key7": "3rHaXxuJUxo3WU2ivXpperooBbFj13dznhRo8WDx29XZ9G4JQn4DES2y2hgubWkQPkpipB9oxMqyNspTrsJ7X2rL",
  "key8": "2ELevySnXrEC7N5DVzhAnVQQXLZHWv642wPCtFvirwse9rPWvtifcZEajQSPtdZQQ1HGacnX9jBMFWHZf34HbHYt",
  "key9": "3MHgSaDJnq7bnFFeFvPoH5LutH5vNbBLjni1cLDGFFMdRzriLC4xBeMCUP59P9cRbH1AdWWM2foYeWfQpGCfaZdp",
  "key10": "4qj4WfmPA4Fk2pB1XiEqkLsU8XmwnpUyQcakpGJYWAtDQTi16LNeSy3ZtgoF2STFTY8E43gVkkyk1MWGyLzmEnfw",
  "key11": "382Pu5oTjfPEeSxTdDpXLqVAbNMixNLfazv9LVdDzfsJEeRs1LPUb2oyvLHiBJzKQZaGeFUhgNwfZz8EwJbpXjKA",
  "key12": "4PRi1sr3ka5H2ioudYQfv9VU3K8BphiDuUNcvMDP76du98aHUu5ycdYU316WN7nEB3foUx6a3QNqT1N5AbCL8CUW",
  "key13": "3rhCBWasmSbvQAo7g3yyd5XvBkkimPxyZ92XVjFrALLmru9hZDdMyGstQYaXhfJGeZjn7SQN9wCrP3hfEW1NSugm",
  "key14": "5VRWEcrqiyFoPqbXqcF8WrgAQHhUXk4LrbTAzqbvMa3eCPsXK2xj1yLxTkPgDJ3wk7H7PueS6cuSCDe3YVgxJxxi",
  "key15": "5TmycF31gU1rG5te5hsCqWWT5tKLjiMHuHnkArAoenjFtZUqKtZ1Xjz7koCe4Vs7WT7tqDHeLMphMphfzn8y78ho",
  "key16": "3QEgCHSEqa5DXavjqc9UANw1Y5vcUA9pWN4g4M5DmVMfNBc71Zqdpp2ShjThdPeYeqUtKxANKedQPCSCiF4ycq9Z",
  "key17": "2bv4GMuVzfgRwxRmnUFUYoTJMzdPjw1Q6jkZyahU6cHwUavzne8hdAsmiNLpksEDgjuBV2TNcc6X3DPFRixqXBek",
  "key18": "4CYRdUTZJ6ViR2a6KruNjpGBubwuSJ2E4i88eBuX1XJYXNX7Hb8uQpJG37iTNkYSi65YhMaG6acSrer5DL7NJFba",
  "key19": "5ghB1oCD5ch8VSqp6tiKG3gDTtvn56AZVbyo4udyYBe6PrJ1Sgqy95Cb8muSarqqAPpVnC4XK16CEniVxrSntAWG",
  "key20": "4zMAJCFaDGn2RbSRBGSK6FKAbhkHFo9xWr3TBKNjnGzd1hJacFidvaKh4kHU1RjdiU84XfifgGmM8R7ymewTtiDr",
  "key21": "3Mc87JfhyZSrvouEq3iWgKaaPAfy76vbys1ddBDXq43PyUSAJ5yEAJCWxEJgaQWAmFCqgNoiwXuJ1Wu8CnCDMwcD",
  "key22": "SA1hXqi5zNwudwnDD4hiGmNUYZbDCe394PtcYj7WX2x79ApMHKTK7tFeZUSokPdk1mhMUgS5g8cdHxWJrsde6NE",
  "key23": "5toBsrVYAMB1YBnWL2WeekH8zAgq6F3LKzhWUgfpzyDViAebgg5FYWBtTGKeb3aKX87sGqHqgLt1XPiTBU3LueNa",
  "key24": "9awEwNVCcFCJTUfWthmWSy8pnFhJX9epnRBWsGB44FRGXZsCu4QfEBB1wKR4V2WCHcpCyXELETEwg2tSGUcbLpj",
  "key25": "9W2b1L5TwcJ3bfXhMq2BpB76QBUTUUbkQkDL7CcANoNg9YuqfzztfZiMVc5i7RQdLgbQZT4MGYaZ22pRvbVsA8S",
  "key26": "2LBgya8RY9KLjwgXZjjPUshei1wjMnJLdFcwG9wm9rJectnxiSUc5qDh9D1YrUqbLVZgziAq47nkReG7diF2RMaS",
  "key27": "4N5eSdGGDSqDnUEWkHCbwpBAGQ3pzb5wLUeH1pZbDjXFSr2jMhyu58fyowvs7wtP9TRJkTKUC9vNMRBzfkL3TyUL",
  "key28": "eJjuk1niVdFWkT5SPpf6mRrQGUwdZYX7FLcQk9nfwYxBgxofWsYwGmj8JhWFJdNaQK4Shpce8LA9hGz6YKEMx7M",
  "key29": "f4SoAWyq2Y2Ei2JUe4KaE5pP85jrmotDUwCmaRKJvwjNKapU58VyYrrJsMoFeVmy8ghSzWBhDxz5W9BiUt6YbA4",
  "key30": "3iep46azmHjggUFyWbU9tuUt9qG4b5CAjVx5zSHGtVzo7khKZtpyq4toqevs5yLd7HiA7j1iRA7u88XqAwqWCLmx",
  "key31": "4TKkGJpKnHt9FqLRAeit237KrJU2cZ72gAEMcKS4jZN6QSKcguMbwxovXBKuREjjkY5E4D9qbUesQUVxqVSupCN3",
  "key32": "hECSadz55CDf9WJzKu5zhzCQL5g97xvXfeegDHqaSRa7NGComLiZUWvFEzEumcSThgokSafMj4ZXRqXz41ZMrWB",
  "key33": "5FWxuvTBxyTSfpFcv7wVeaucpKPCer6xq5QoBvTTPZbu6Vqga6UyQNpcJmCniGysuJEGSC1K1jEbGHaC8Y2gB3b5",
  "key34": "4QtgXy3RrrunXLyvRznyJs3eRidG5VUezWSnRPiYmpYNoGjvcSYcwPH5r2LcnfN4DW6xaeKVXUUpi9k5KVazbjS6",
  "key35": "5DjXX1jAsmXEJmDsxgJAKcMsCbdKZr7HTatDwruhrMzKK8bL53r5sZfg22SWGpQWFC62WSpitrydtTrhjLyc9ssG",
  "key36": "2GQuZaV9fPF3VWcokRAST7DJqzfs4B9vdutSwxgvxqd5iWiMTPwGXBsiaTMRSBp68SrVU4jiCSdpnDT1haqcbvE1",
  "key37": "5kMsD46z7P6rdax4tfbX9MZLmYUi94jDyb6DVDse6KmxFXKe9hgjED5o6tnMsG21F73t7Zi6DvHDxpXxbabHCcWm",
  "key38": "5uxabcgMaTCBzKXunYcNVcLjMc2uX3U5X795ibPR8YoFVU6hznRA7AtgKbjNNkAMXBnDcU59wytDq6HSykApidnG",
  "key39": "9EtBFv8BpbVEEB6iTQrLdeoU5MfYNTo8rneJ1Syd3hCLU2LMHz49g7QZ8gmVcyYrFdxhWFsP9Ly9MBuc4U3wyWk",
  "key40": "3MopJfn4wFsPESSdASdqi9x9NLpArSDo1Tw5GbyUSuBC9PmynGf6gKpYgymQ4ZiTG85D6Z6FuNXmx9bGj53Mhfyx",
  "key41": "5PupxZd8M1BcfVeawo6aXUCqHqtwBV8j73ptQavhhf38zuQiM6NTNizmdD6T8SZqKR3jVcfaLueixwT9Fs95cNZU",
  "key42": "VKVF7tvzVXHF79Vimi3x7BnnYdCVWmr1yWFa2TkuedSXy2tm8ZAvu3soiHqqypgCx69XEUK83uZHVrZxpbsRD2u",
  "key43": "5EHRBxkeLmqGVF1TGbwurdJFrMxMFv6mDPas1cxKCJto7MWRDJVpc4DxPsw4BUvfYpQQFhciPTzLjzn1YBTJkiMv",
  "key44": "SDcVzYCwZKgGJQiKrTK7xCHHeGXFsVJiHbiHc4JbN5vE3YRdUVE25xYwTKFwt4ySZkCqiAP6Wmq3ud4gxn3qiD3",
  "key45": "59GtTRN1uRqDmo2unFJ3jgkpb4q1eDW7g4bh2SyANFsUWCAo4TDKpkkmRA2cbAX6xgwmJ3RaSvBz96eWfHFqLQgC",
  "key46": "3524DV9GimmcgtTEPnp4mDWcF7qLhJmFbs1w7nGnm7gp81TV1JjSyMoUbZkSgMWF73BUnAM2AHU1ZbzXtchVz64f",
  "key47": "3mVhUtE7Km3MoyxHkKMt9uB6pNiGFc1gBTsPMktHCMNJgLrC2GdeFdsorn7tGjBhtvJgqnanvtDcYzDue4mgwCdt",
  "key48": "3qEVDN7vqjgCCc4aTZaLaYqeS9hccPqzCu5G77NXs1xz3dnJkb6y3iSn9yhzSZy4i3vPZwjDdRxRCU5LyyhL33Fh"
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
