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
    "5dfH3pKyVB7RPaVuS1hi1ovc6N6HYwigjCJkRV6TNq8nyxhA3j3bdmcddG3vBMCtGpcotYrMtBsVdXodByLsiHv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VMTuRPR3hhdk2GLwdQ4Q8iqY9qy1HEHUrdwX1HmXviETHpSSrkAeu5MEXooxyuDhhawY6Vu9NQpYqmq9bJ1G8Ph",
  "key1": "4VF6WqW77xz5UDBXsPv3c3zFfg3SZrjCsVP6UJzvH2mURwTeULcUTZ4Rm3xMesvHFFGWzXygaomhNYLXt5NLar1z",
  "key2": "sghoNEY7A9xsZimx4wxy3kmK4Mpu757VqSAGCMPM1Apkf4FWBMUxWZKDuAccCrNs5vui1xCKdy7a9SDfBa5kWd7",
  "key3": "54iwrSEN9PkqNkQmCjj6DYfX77ydj94GCfjdnVfMMYc87GurTEJxXozEDnvZ7T7zZcX3EAUeDqTamh6SqnYsKJRw",
  "key4": "5y9qmLo8zusQNuRHkHAGj6KkvNK9YbvUrBaqZLctU5dXRvNEmBzHcpXuP6z6xgEHgtpCxP5G4FkiwzokEvtqCZPc",
  "key5": "4a9HzNFPbeiVg4SRQ1fQgykkR8bTP2d6pRkQBzoAmPPpXJaErpJoE8kG2Qr1EHNowebDzpMrTN8AZBMjcCpa6eto",
  "key6": "4bXb2n92XbpJmBWZPUx4ASXo2A9z8chXLpD14ycAd2hhWCejV92MvdeSSbq4SLtKyJDEaMxGNzDgnz1Nf1JMn5pB",
  "key7": "2PayGFPDcxVZdM5SoqJ67eC1SK6sPJwWxonmv31b8WVLHNQk59N1KyEEUZsQUKPrcqkMc3HkR9E372qNcsP2THjF",
  "key8": "3tYfyCP7g7suQmyrjQmD16sfusHp9rVBEDKmngzQXUXcz5qb5Zwhwbz9Cm3XsE5ue9Fk7LMTSsyrdNXxjDST5gwF",
  "key9": "336w9wrMvAHXztbPUyAvPhxmBWdkFcKoZ8RPTnireFQTBJnKE1dZTDgg3VnJ2KthC2HrL1drnidezbhoi7em8Rf3",
  "key10": "5VbZkVUtgspiL4UW7ob1EisCKR23PusA4sY2rG6gXZA9vHud1drFmL4BcBD5sAcoGqAbKkFhUKHrHSWgm6AFDQdS",
  "key11": "3bk5m3BZPgxX3sUTi9xGbSrQafrno3u4HnQAXfKPF2VxZtPjANKcXr6HaKCDsWgRxjSCRKFzgzKxFLbucudTcMQf",
  "key12": "2axsuyjD9z8LCQtzWt6zmEcfpZdgonwUficS2Pt9485tFLAKQffquCjuEcjpjVFCJLsyi8dfcUzebUFuTv8rYUQk",
  "key13": "ruNq4QKhMX51CmX5Ksa5WUKgDLxw9JLrFLqgeafsczFyqNaXRkTgFJw4WozQmwb65EjfhNxMF8GGR8vss6Fe27U",
  "key14": "2tFHUbEwGUQqDgPfGct4ih9fPHxXZjgEQThEj5fMLLGvs8L1tf1piMpzfSgNcnV4hLcbo5agnci2MYxBm1JGTg2k",
  "key15": "5MxoqnSvpUb1qs2eRhd2nNtB1kUmFuqcuUx1eDBFHpY2MBGFeRYaeHWWebLCkqPspKEtZnFYsT6FL5ewK2Zvj5u5",
  "key16": "maheiWHNocQehEf6a7tFyZKpncvF14QuzoXrrfbsvX5X5bBYwnuQV8cpBDM3JnsqQXyWH1XoEUjHKV9LV3ifz94",
  "key17": "4DQp9FeePmDWGucXCtiNKh1RupMmp5q5cNL7Un2qBMhtFnZY28MTMvcsdxZfK6T5vgCVD3EXHxf81yHttgycvjpp",
  "key18": "2oE91ueXmwhy7cnXxwHUPJJsuhXbackQMGMAZv3X6tDvBDkmSyuF8gX3SAV83FYUW4mAzDmwp6cnjiVtUUSnjQ17",
  "key19": "6yk9U2fC6gbb8YqHo6idMJQ8Jxe5yw8PqoHzUJnesgLRYsxxKqWMWiwkyUbA786ZzTKEuhsRoYKJLD9KtFUjxQB",
  "key20": "3KG3i9yvdvUGiTTGwgckzGpa64MwSkdJ9LPfjEvmwTZKdgT26cr3SQmFvkey8VgyMcbdRivgBQuViWuAYzwA4VLd",
  "key21": "4fcBoaVsmohZTe8i3371sNfpuoX5gtboSryYyhmnhP3mqicWfgX8LpGvkMCUf3wQbDMv67tvuz61dx9vdTjodbUn",
  "key22": "jeTuHfKa4V89mxgH2ELemLuVePjbfckepi91TEdgcRxurWTAjGeqULpb7zFB5kxs4WWti8F5W3aFWuYoLBrLa1d",
  "key23": "Pi5ByzNP83hKgdwZP5CxasathTyGDRaS8j6GEDEu8hSZUZWmSpY6JMbgMgwahsqTr6FHQv8YxzHkmTndw61iGab",
  "key24": "2ogTu9enEtyrqbz8paDM4j1ckUmZsYUYWdYvbCSuaDrq9RW1AUXmXXVinB8SQS8cQGSAAaDbgvjrb96vLmNmkHAT",
  "key25": "59Nze6jeuVHDouYGvMGQjXpy3d5LJdD6Mn3oE6FsJMFLG6e45R7nnz8igv3PTN6ujm7LskN9En514bmEHfHHUn2n",
  "key26": "39Fdm3tbZ7dtsDXtCCP5Z9oCV3isUomYjEjXU9LdBetUGycJqmcYjXn6kFor6VYLm87fvJJEHmkjJKmDzC1p6UsJ",
  "key27": "2vUPuGUNwTmCGrF29wYoY4MjfEigdMHamJ5vcZ9Hrqfk7Chf8r9dHfzcPTPBSW27jcMPQA7bVBw9YgXwZCgGARCZ",
  "key28": "gLGCTZ8ZKpBHD1Mp57XWsmvTxnM3Pv4Rz8jpLBqfAMtCx53pRiX4oCVNRmAitqbqBREdRhn6ucQQqBYUwf4b2UJ",
  "key29": "5BrpHs58n1Pbx5qUpdF8moZkgHUypmXHmuWgFuxscu35bqisUsuhwfHCUkepqfUnx3Q5LtrsM6iDQiZYRG76wo3t",
  "key30": "62iznEr893XKtCqKn5y86aV4pMW1byVjp3PJXstrU3PYBVHCmJLYRooEjD4Amf1wcodM94SaGQTVv4bWUJrW7DkR",
  "key31": "453wHQy6Rv32kezppAY6jG71fmrgPZxxNUVGdif9hQjgsHv9T63yu2Y1f1jKaW6ZMVmRBMajLs8sghBioShyj9oG",
  "key32": "4tZUZWPyD9HhxiQ1g5YLtLGJ7gYW9rYq5rzi6hyCFegnTMdaqFHEHeUrTvxJ8Cg33ZNCvog8JPRURhHFrPYZQSfQ",
  "key33": "9i4bBiYxVxSmxkDk45LQQ1jrLU7eN1NcEYPoTuHGQPitZjYQdba7F99AztGvcxQW726BWeSDw8agPTkCfFpXAUi",
  "key34": "4RovAbci9rCgqcWXaWYjZasHutkQ67bsvgDr5YLSfKcpM6xNuiLyhRmYBkDL945aXRiiH5tvqZ9zK38A96PmZ6wm",
  "key35": "4XDo8kjaoo3FPWSa7KoKkvEANsvsvRLWsYC8rdCi7hxTiF7qnGHtGi8xNDwCk5Qhd1tVnQKBxVQABvqVKhpdWiwZ",
  "key36": "245S1aSbNKkBioBH4wc3uGuFpsNF6B54jo5ARZWsyejpuTEEEasiWWFMGVwvTLSeJc1m7Ff2j264GTs5cDszdNtu",
  "key37": "5tzJarE88b5NpKgnY7a97LgNZZczZGnRBaPgxk875baCvynvx1BQTjLxZJmT1g22yxRR2mxnkXXKnSohExDm7WEY"
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
