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
    "38fcbjMsu6H7xqpgzf9Hc5WaYuQnb5VA7xYXmktuRXGL17ihDBCZiToxvcoVekuKv1wj4zhvfyX8uUbY5c5RVDke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RNBSjxaFXaux8LV8JGeUX6sWxJBco5cvobboTzBdU9uVU2JqCQ78BmNZVMimpsTWZ1qRpUZBxJsXALMyP4a2Qf5",
  "key1": "3nnHGKzYZWVVXAZBco9zyMRLmRHkBB4yMnRb4E9kMezeGr6Duor3k2qHxzBqaSPyUtXeHFkb6mKENjoej5ixUhpW",
  "key2": "5rzhHmvssSTkbzzAfWThQ7ubiwn6fJPnEjvdZR81XqVSNF6MjLTnUungoiWo3UR3U7wcokc7aFKwABWomHky1RPR",
  "key3": "5ngECFg4Gwsv7km18qB2Pp9QS68K2oGgsCcfvQVTRpDWBZCyMALkJhzSWHWEkRqPQpvyXFifHK5jZQH9zVRDgD3c",
  "key4": "2S2bbuzMMtM3TvVyp24Nz8dudyyJBrXuwciZHq9KT29PqsYmqHqRqpD4m1CweVDiD8jhE9dn526vcmeTkVsSozp6",
  "key5": "3kFCunuptuoW5vqm8vfAuPiBUgBqmdzeM3L1UTVmKChxnQ5US61J84dHDyobb1ZJE2C1taAvi48vUetQpXhd9Zqu",
  "key6": "5wf4FqThgPmwELU63F6Cf1v4ZnL21Qn8ECfA4jERdLMxmXwAxx28nkwCwg5KQ7Raz7S7KosTXqmc6RvHsHPKdEwh",
  "key7": "27a289ADaYTqbeP235XTin3ao5UnDLQRW5f4g5kFwxJv4DgKKPvVcCPbtzRte46pLvgurkZJxALMHSdqXxrH1vHM",
  "key8": "CmLSxFkvLgqLbYbn4VvQKZRSDpurQJBATfnUbstDesw1ZYgbtDJnf4S78W2CzobJ6ipptVFBj63NTFYsMWLrnTK",
  "key9": "2yMdWB5BPVPh2dUu7QaEuaaj1wNerdmMfJ29DVNoNU8zVxYia4bRRGT9aDKKmoMhzkcgxWgb2MNpU41rGzsWJryC",
  "key10": "3BxXPbtS5CYfZGMBJJiG2i31kXpt1tzwbeQ7T1pcjm9FKbWrQYQ6xBdmDH8A6vVD9bRy4gTLGTRZ4x6vZ2ALU3BL",
  "key11": "48BFfy1fhuzM7yLbjdLq3vgVH14TsEaUn9dMa2RZQZ9CeLWjNcf9gTRUDcX6ivMV4rzoY6sgyU3c2TFsCDVKAcS4",
  "key12": "s6MTE8EKCXrPGnopi983fD1Y4m5fRmiHrcq4YT4mZ3QhETkTiVzmJwbaodeCvuRVibCRteaqnGy3coiDm4iS2q1",
  "key13": "3F8EYGkJKNmbuCvfbCsAp7sLRMcAxYzJnkXGpQEnoSHXrXWFbLacxDecMqo9J2gkVEwu7UEo8Rs8ps7osD4taAcR",
  "key14": "3HSxtoEUtjdeDtzH7fvzaHrVMN7ggwdXavdvvATFvAJc7vsxa6KpPuotbphQgXu7nuT1xVpM6QVV9LK84Znp1wZQ",
  "key15": "5T29C7pGJtbr3BeZSaLy7zcnDQL3XbbNF3dc8wkH3UnYchds4qWgQD5t4BaRaZHedG65p4JgoKkQxWUtmYhDk13y",
  "key16": "3M7Sd5LWoVekizLaWC1ksENTvrp3MxMSGUqy6zJB7Q5s48RyVDoUagerTUegBtGzzJbadVZuZ9tMBFHjQVp1Q6KW",
  "key17": "4Y8sGTBuHcEiVUjbjyVZdwKRzfZ3MeVS6L7jkP4a38kNen5ngP5LgyRnLD5iTCBemzxdFv2qugmd11xX9Z21dkgx",
  "key18": "5d2KRbPrXkMoSXZ6qLeYGr9DGFqhkV6VFBcpFEkPHQEyFwcS2HyBimt8Loa7Vf923u4wBzPqQsVrs4fBa3uG1pyh",
  "key19": "2vVLzNHDVSQ6nrjzCfxVn26xNJiZQCokVE5dEy1qTKjPwnQW4SMSXBmpkey1aPzRyei6cPutuHFDJhZr5PHv1kNC",
  "key20": "46jpXMvJgBmW6bTKk3brFpZ3JWaFq5StKdb91SuF2oYc1R8JNPnSCEgXP9qNNB9Fwa65tPX8GTXhrvyeusuZySvV",
  "key21": "4pAtzhoAdEQSBgii2WZGG2oi3Z5NfvmDqDqKXu59P9tNTCgZP5V1zmARJE91nqkRxvW94bKt82khcD7Qixvjz6Zp",
  "key22": "3KXRX6WUvYtPHxUX1AWS4V8gmJpcbUVaLvnBAG1bYUqmhgg1s7MtvsmXtgURrMpdz5jShBJuiz8NvEgHrxYD1LRs",
  "key23": "63hp4EjJT9mqFPaLi9f1wZhzdYBcMaPrEvEwtPABtFrpmAUwwJW4MAUNSdhbVU76ianpuPb85XCHAYUSGJvpmL4o",
  "key24": "41ZZC1hRpkfdWKjriea5QD5jnLCNae7Ys8coAsaAQjChWfnWUxY2yNU7GYAP2CBr32STLX8i3UCE2Hn3tm6pMAFK",
  "key25": "1aE229eEo4hKvsbgLyDHPC88So4jH7qjjpLLqkTCikes7S1BAjmjPr9PXhbbzgbCgvA45HUGHKC1R9badhD8nWm",
  "key26": "5BxTnvBKrK2wXukRyDiB2JVKRofoUPq72sEwUhKrWomCYaTVEDgNiJQxf9ihXKNhTyagz13GbR1aD8MjtDwuS122",
  "key27": "5msji6dkRTwtozTLw1CGbjhUEF6sB7wMCHRmJ4irDic1ZcTb3UAyDGttqPPsry8zfW7AwqPoqco9Q6352Eykndpd",
  "key28": "3Xtu74FsM5ttyZtL5LsvZSdBDBRYbRPAzSz16zm1iGW8SPt2pTkBKvrDz3SeRsC95MXmvQxrC4aLz5bfpGQpTqYN",
  "key29": "2brT9shnMVBmXxvmUSP8sZYUnj8SmMVbBy198L4YSxsS7YwnFeFQrXbabhoXJgMeKz2gu3Vgvz1etZwNGCSHBWtT",
  "key30": "67HhnSDZw1eseeHC16H6vfi3ZznET7VDe7DD4dowiPPp9jS6yqsb9MexvnNKiFHHkKw3if5FsBGrxc32S7h4zYsd",
  "key31": "2aTjLwKJFwkLTEf3Dmk1EaLpen8GTR8wqJHy6g8amWWpKjxGEhCEpN3Pm4opvuHGGKg46aw9siTNe5SJ3Fd7s6om",
  "key32": "2NgMvzskW9TPgHRU5RR7gDsiZ4PeQnK3SJxKM2xjJf3pDGa4ovPB2VByJdHBQwDAHdL62isbn6ZRLAb7kM9HRoVD",
  "key33": "2vNktr3wUkfbj9dXiTkCBtkFtFNHPZcXEMy2owCpTEWq1nrqwE6VyT2TBzHWkD1qoK3nrMCtXctfNEUSue1Ekg3r",
  "key34": "5NEm3QpwC6qS4yaS9vPK8p4y8ahAVS6sL99gtbQd1VRuADr56znpnWYopbpzCYUo8wjR55ciNjswGum8UnCJr8Nh",
  "key35": "3YDCKCZ4VGouzik7URYhYWbW6SeJQnUgkPd4bkAQbaTjAxyttysJ8xmP1KG6dn7GR92XQPRc9sUa1xB72p99tfC1",
  "key36": "2ivkK1n5mUS1jQGTrkuUcYu7wWq7AUGcJkvtCzxxTpuUUrqEG2WkS5UxouSdjyooLrmzTWQMVoAgQ1WQ4oMtkASB"
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
