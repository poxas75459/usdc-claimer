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
    "3PL9TAurwJxRPiPkHRCui779TrMxLoJLyrUeJexb4Qg6dFe8xMKSetPyFaoeQS1PHV8sK4t3tKh5RV5uZDHUMkgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wYaDnRPdhPwwgrX4XPXXLeq8rda38HRi89xJWR2ZzRUNmscSHeJpHnRdyYE5LThNdhEi6amGn4fVpiFET9XwQBh",
  "key1": "5UDxk3BqcHBMTY68KiqPFycL3avzynDPfPKKNYTCrcvMDKYQyGyAjhGaAr5wqkXrueizUQXSKHQDY3AEWBxJAmnx",
  "key2": "5WpDyV9kUqeQ5ik5c51UQqtybam5Y173okNoobRfLQfHAVF9zbMrmy27LuBmcz3wunyRG89QRSV5RTofXmKp8P59",
  "key3": "4rPUZuS1bjbbogw6VfXh3mkQx7G2wiXGhgU7hwmu2KCSNSvuYHRbcAFe7SJdd3aVHJwmn9nQT57nZGtdC4z4PQeZ",
  "key4": "jnhTas46cziFexY1oBbyNG3NtHNvjXTiN3CysXYSF7fRJ9iQoLgH46zszYgeCaJ9qJFVigo3SKQA3gNr1Npvbon",
  "key5": "5is7SZnZK9QS7GPWkrqdngZUYG26ViogtwdyjeStWVgzPmXGEox7UxiRn6p97TtBjdDYfiDstXBi898y7NSQMF7x",
  "key6": "5Q7MWj7j4JGnv96cLxgu9iQTpMSRMLe2NReWegKMpeocxD8YLsGx6TxrgXjAUHe6vgtGJzkzjLy7bRWbZby6hKZN",
  "key7": "5LKVsgtmj4txpEZueSVjjPgus86NUtw2vDDDhK8byNjJ3EKvpRfL3TFoVComiLJoqeVJr2RVLmvzHk1MNsC4JMnG",
  "key8": "3tB1MBovm1q8haNqLFx6xioy8vCVrrs9ZJhgLCaMXff8gjfLUY1vBkBtedeyEcWMcBBvoBSgNqReGRZ2rgdSs5Nc",
  "key9": "7itbpDc1TCb35eKpacevmzvTT5Qa2zrwqX6rWr1xQYEN6Bz6mV72d6s7H4jRs7WDp54bbxppJKoakhBV6MsZZ9U",
  "key10": "2d3ppCvnS2WFtdNoF9ofxMUxW8QGCQxyZG6a7JpMykTCj5BZHCgKJREMd9B1iJ1JjvWa9b8mrtQg8sXwbe6CTQ2W",
  "key11": "fqytZFyi3odMDw4txonXxkbLNy3DgCTSWEtciFXwfawgBnajfhSv4jGunCTQr7G3HMqLi9vPeMqGD4ztsyWuy8K",
  "key12": "5iXyvi8UathfA2J4fyco9A63E2bHbPn5vqbbZ5E6yeyDgyFj1KcG2kcdK37sr5TMS8pBRE2zprExHQ3Z7kGzJhmV",
  "key13": "5KHpqk8KXJ1Ty7oxULmrCiSP7j7wRVKRgaDZB6cm1TccAMABe5uYQjurZjGRcdUmEzsk5KAkg3TsWNEZgb1kutns",
  "key14": "2EAnNYAS2BSH3PR1xX7FgpUt5KVSEonCNVhbDpk2ytNE6Ha7c3KaVbtMq49kApQ293mxTxk7BBf1Fd1rZGzH9xHj",
  "key15": "2Uif5hEBiy9Fd7SWW72ooaQMDM29Sm4xoj25wMiBteQuseYoTABAmxavuy1KuVuuAPq4i1CkMgRKfRgNsCMmcfFN",
  "key16": "3hvZ6hLELxYidKmgd7qVM3YnCNtXd3TfuwDi6fa3KXnGPeJfK3hhqZfhLPzG3awib3BWdE3YxtNp7ZxdHEa7rqAA",
  "key17": "5UQ1fXRqrMMzZ8UTnk46s7wmfR1MjP1NhchPLd58XNJ8rQFqnUtzWqhbdXAzb7DGuJcHg6T2vDR1ozPUE8t4YXrY",
  "key18": "5SPcMAvgvXGce3NsAwVqoqJn9Nd6stUXNUoghn4uzqzPjh96VqRjZuhMQEAY7RQgjU3U3PfHbiRCHiXeASbQDjwL",
  "key19": "4fESX4pwBnoj36xMNxnjffokyjiZUif1kTBe1J6HMPqKZkL8edW4gpyhs1K5y99Hnsq6iTw2Ccifoxu9JZqzUZRN",
  "key20": "2STDbGEvyzbvBPXv4t8UEmx1RLpZByozrQcRYENycv74BRvdDrjCJD5owFPimugAe6YsTpwi33AF1fZShpDC2Cz1",
  "key21": "2aKqLx29bHoogfb7KCd7wjnaY5EECZ71VdRsX6HS9S7xHFetNzPHrGak7GiP4rYN5pKL2eF5B71Us4czv6my9JnF",
  "key22": "3srZyDePYxDqLbJHJ2zAJsXKzh7bFb6BACw5LEtVVDZGQGpPzbanhvxmWwZ4NfAJTK43nbi5rd5LhFuMcxgj3U2J",
  "key23": "3DbiiwMcHckc16PgTxkhfnuAyfNuKKCkQKD3VvNaqdkK2ndJhKVS3FKoL89sV4S3YYeX7q2hCokaktMWhxFktUhg",
  "key24": "2StsTynypLF9oQVfLjwuzKKhaGBTEzsEXYRU1Kf5ot3rjgH3ttNotG9qtMkFxV6nC2FoQPzCx6GDTWutXwAc6n86",
  "key25": "3RacTCLbpMSNwc8eKM3GX5M7GghdjXGdyCckoo9X69yaDw5Yt6TBmYfH36xKeA9nrabGXk6h9kVPQpUi6xQ4h9bS",
  "key26": "mHjW9JX8uWFDqtaTYc6yN7YByBRnJVJzX9uSBay4Jyc8YuPaUAmvbmg95unAZ6mvB1YGkZg5gjLRjRuT112wxbd",
  "key27": "2ZfMAQbmg8jLWPsB7ScZh3LJyUkBiBPhKmkcUK86jLgiBitBW68yhLaXQFWaNrdqCGrutg7oteKfnpsEXYZaNLic",
  "key28": "2jAuZvfBQxN9YSNJxAYJLHKwi5KqPpfVv1Dm9LPdvuYQtcMYapAPknop3Roe5iavW3DXybLKmaRd6ZXx3MpsrNvV",
  "key29": "39p1ErXBbRezu4owEbaGCMGH4KZftDwyucknEza9Hs8dqNN8S9s8n2hphyk9uHXhpnvtRTQ2dvPkmSjXgfFeiHWk",
  "key30": "4tnUp62tbr75Q7hiMSJtvKNBXjjoY2Vr7BMQXeU5XA1R6Ktwon2esC5SCbmdrm4TsnPWd1GSrMt4CaRXjvMd4WhW",
  "key31": "5RAEMmQEwZwsNeqzAa6Ya3VqD8ay8NqhQspTTkrqjSpEmKtFxF6ZxeJUFwoXnFSG19Ey25irLAq96G97GPNopz45",
  "key32": "4zEKq54JzPCwZvfHX6ogs3gpCDDX5YoEz3Z8pZVwTicXe8XqwUffVfkUFR9RxRCysjtDE3JQxe52f1tQsBEQyC4M",
  "key33": "49qymc5YnqGdY42mqxJP5zHzcJotKbVQ482W1p67pk2hwgvcnt5P8Bq2Dm5tGoGjfCyTqCyqoFNKZxTyVUH3gN8V",
  "key34": "34Fx1HeSp1QBtP9YVnUxw4Z4y98WJpdBoCU5PYiofSPh9YTU85vgtYx11fEiaM2DyY8LJ7sXH2aPYxmMvPj91v1R",
  "key35": "4CG2nk5A7wUGGXxe2jRS5NNYqneK9XgNuaYLGwaM9i2WM7cmC7xVTiGs8hGDkSradcwLzc2fnwJNGdYCm2eUPP6B",
  "key36": "fY1uCVvz8cL6SDqMa4Re1rtdadBg98BSe68eYM7ck7UdmNGu4JUWmvsuv12KHGUoUQCoerJehwFfZcR8k14XGFu",
  "key37": "4TcdjZ1mgBbD7DF8jmJD4Jfn5oEjyKAmyoXKiGmba6VGyXZRvhNxBGsAWyffEbYS4Y22aksijrQokW3pbdWniRgy",
  "key38": "2NKDAHk4jJDVuark9ie7PHvd6sWLEA3Es4heNHaVFNXsBM3sdUuKhhku6bwCSFwzyTbjrMBdiDxBXqJRZdVRufem",
  "key39": "3FWiRdpNRAhS9ggEYkTq8pHnM7T8xgLxd9mL6g3PDGUqGNMWj4HN2XN6BZJRCtLZrPSgd13CPrrgjZt2sUo7q6Lu",
  "key40": "3RKWM16PSNQDuPHkrHW8athnsNXnQCDZy9ZkKMH4RbVfMYNBbdLxjouTQQGxsAXs71nm9dsf4La5W9HBBMrSKKi7",
  "key41": "3bJssbz5qdz1hqc5nKABKe4CaGDmAuwRh5VEDLLwCFDamA7dXgwPkeSCrtqiqZJ1RYqCYHbeVZ47yqS71fBbcjyC",
  "key42": "5pFDs2TebBn3HnVFy3RhwKYfggQaVKn64YCVeajERSH9yCKXjbZBceySHfLP7xXhK9yu27Vd2BYDG3hhshU2Zv3P",
  "key43": "92H21q4DfAWLYVvuLCxzLPFR6xh2mnV7sPPthSmspLqn9LqMM2mYF2MqdBCAmti8NqcJH63R22qH71iYY4JuKnT",
  "key44": "5iqF1Fe84j9RZHTLhJAUeUEGwyRFsnx7BgycgmiSpiotATbhC9t252ETgfR58hHuNfUZqKnK34fPmeAi2Qdn5KfN",
  "key45": "5ZRtyXQn2ekZ8ouL32TmdRnK1PvZasGo5rPjwC3D65HepN6HgKoXNg9ohs3aTREJuZCkCYaJnxE9CeWDzud6MfNW",
  "key46": "3wMC96ydrj9VWFAwvXcypcCUKtA7putMTZFJQCtTH4SUZnFRNnkNQxLMDWZ95gZZqAbWeyLE7G5YvuoixFfRzU1P",
  "key47": "2NvFwCU8JbNbWTiovuk4MT7kmUqsBYcXgBtZUY9qiWXcMETmBiBDAubuK1tEtF6F3B9QcKy9YMxxVzJmGmefTomN"
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
