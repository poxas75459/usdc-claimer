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
    "CRtDD8qUbjAUG3jeSXR8kN7R4Ajg8wxM47PJJKwdGvfcp1yjSBJGFtd2GRgesgnvDksfYbJAd9mLoiSf2GaoL4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gDrnYwVZu1zU5yt6Jftir15ig5UuMoet5mpbpBqotPYEbvoDzTveRNXoZaDavVwzF972NRG2gTctJJTGvqqLup2",
  "key1": "3pvevx3HU7vCvPCHdAR4TrJzTc33LwPm1bjF2XoWvSQ8gy5cHrSJTjjq95r7s3H4hAacRyaad5LHyBUCrrJHeUWi",
  "key2": "5yxFSP6VEf2phnTTQynU7Vv5rtvu69n9oFFZMyCAYu8kCSz5uEZncnFnWGtGmSp6oXBapHB5TdQy63KgLnQ33k2B",
  "key3": "2pAaYWLrgb44RhtAJUNdQ7Vit1PUt5LZrfE1f9iUqSDgqaijGRnLcQUfCdqndzp45J9dXQ3EHMjFw3fkkTJ28htM",
  "key4": "466MK6Cun9d44qj8d6n1Yt4f8zDdUGYA4xjLWkTqwd7Gt6kSDjhCzYF8Z8rZCxLiVEZP1fLbQYU4Us9ffVjSazoa",
  "key5": "EebPSqtdccc2xMiKxbvvrCnfjw9GkUuSNdJ1TdppH5PPphSYXFiL1vvnVL1uUurv9hu8eXZuN9Lw2PWKmbtoT4Y",
  "key6": "4UaL6PWk4SYQxpmumG92ir9kw9KW8BQptaUBuB61Yevci6EqdF9AHj2AVpq2ge3qhtssmygMpsHZRwgizxwGV2DL",
  "key7": "5cWvrVQxdr8JJUcohiWNuoH38U2y7QGx4v48TRbGoS7FkV4B524WLygB6CtoBitH6kZKdG19hS3eGR7GLvaDJ8t3",
  "key8": "5EkdZnDDe97FeR41HYyqMeTA7sbdXxk1MEDKAk54CErNYamuzXi2GPEPNtBAWTpr8Dr5t1AipSQrwTxyVF8acNaC",
  "key9": "2WnZy2rHQPQqkt4pX2bu9ehKAaEkFFTdAQPakDssNyh9uYPTBe23d5BFyJ8yKu5kiEfVNxpNC3wUaqzPCoZBxPFQ",
  "key10": "512oWy98pnv8WFdXFH8hskV6ejLLFz1idBgGBWDTBa2ePJuQajahZ4rLNbhDnE8h3F1hFFhr26nmL7gPjeziPoKs",
  "key11": "5Kfn5TetQafiwv2MvypysRK6kA6VeU3CiLm2mp5YYbsDDD6o4iUeQr9Ki26dxVhyjCfVVQqEvtLqvxy6ANCzMcHJ",
  "key12": "4Vth7eZ1LESSN8oJdiXzvp9ZgaYpUx2Bw3HpQGwLovK4N5rkdWChb6rgD3EQdSUwiyEVTj9vMfnToWSDiBJizUQ6",
  "key13": "DXS5mMiPoLypFqAAdgsgbNRt9yqPmk9fvzVAxks4ZY4RWtrcR2X3EDhHdwH1Rn9HQmhhLRPmrYq5ChMm3rWk6WY",
  "key14": "29D1gnEJEWovCLE48v7rtgD6Se88BTzVfqhXgmxfB7rSmPZpUrDnYK3JHahkKARg9SZr1aExnTttzuJn4RDGjsCV",
  "key15": "4ChWbtCHQSB2ghi2UXaHXzZgoe6eM86DScoY3UiNuzpTrjWGWhvVVKZWp4W1BkajmL4canPzWGeaHYZ17QJaXf5N",
  "key16": "EhMTGkramnZ4AqozTgNgKjxdUPBzZ6yjpktshr9qB7UgRkQuD5oKkrRyQHvrJ4z1fFGZTuFob1P6nUgSPcyPdP6",
  "key17": "3Xk4AJVdNjSSF83j3qCRRw46D3aN92Pa6kFNKRwdjvteGNxTtLkSfbzGggHbcbpnxScBUXydnBpaXCwjVAJh3tm7",
  "key18": "2rJqJFmsrWfgTAbT2YU3b6PWFgwq7vXiQym6aQTPqqLkwA7B8e27fVKPeyqUgz3MtySPyZ8Kjp9nwbiSPeCYHjh4",
  "key19": "3fyLKTxbUNfAiace27aBZUNU2CPzRNfSregyMSR225GGFMxUitowVGK9HxrUoYS18jgga2RsF9DaKBYZHasc8RXz",
  "key20": "5iXB31rBJU4agf6gqnNjqCTEvr7qefRVx5uugGobVQzj3c5ZfKAQ8hwtu8D4fV1h36ud4ux39W2KLNkpcQnQj8wd",
  "key21": "3EqgQiZm3UYNNEpyJXUrTGfrNdYbMJnf182WGfRdD2QzJUeGs7qpL8aVobegHUsSdPWSXmPScVv3FxgDBNgwbac6",
  "key22": "4hdoLrz7PYFMJJoDWpNQwxqGFBUCHKmE2ng86qwMEsFxaYuimdA3xHw2RwSva2Ev3SsXnVa8PqrdSSZi3RbWYDtb",
  "key23": "YxrZBxkYta1gvEWifaxbNxVT3Vdkxo7LqvJMSddTQTrN73RGMuyPgkwibGDu1jphc8cU7CwRc55LA9U37h7CaY8",
  "key24": "3ipc5Yww65nGVNq6hCf5Wqv7NAP4Amxe8gAF5KwBrGeap6zPNSLg4XgTG4G87hEzKX4V25sNHZamXaFLEeJDWzvN",
  "key25": "4cb9Noypf5CK8nmYQoFMza1PuxNAosz2qKyrYDwiCwMiCvfVFN3QwfDnmzni5ctZhdhRVwcKLz16VqsJzdW9kgcz",
  "key26": "34SpEWH95PPbvDuCfeeros5qubDfUN9E8NaX85ezmjgWcg8JaHY9CzxY1AotP2xPjbtuMkYc8qCuims9dcECbbAN",
  "key27": "3wrEGwrPBEo3hCNW8octc29vabhG1X9DtH8KUU5xddTzm1Tdh66RMt72wv8ToutgGumFG5qzTdaf4E4ua6WiRo69",
  "key28": "4dQooFay8dNhq1Tf4Us3Z72ekjX7CVLCxgmArgxyKz6TwfHfWsBR7KQsagrbV4SReRiukjVPT3iwMp4ji8pcY24c",
  "key29": "3e9uXTaJWWzWVB34omn11ph6wMrTktK6sXRmGeTyP3N3a7nfKM5obj1meZVq2UbhW94AJF8pFee9oo9deJEq8XkR",
  "key30": "3QMn1dmfMn3mGirrbCxHFGzaibdethKG3Y8o9mt3dt8eq7XYHgaAT3ewkdTVpLQyU3t8Z7Bmh4g2UHZvj4DXkEi2",
  "key31": "2vDioVE2smM3Q1K8DPzdunsu7XFgbYSngS4wAoRbB3DigwGB2Z6a4PGzeL9QCxp1C6MhAhbtRooT5ZkwsGEpBnED",
  "key32": "5kqRTgnMzP8F14f8ZMedtwweCHLnr6CRRtwndU7X8PzAPuiebjWjwpBjq1RJUB9pXtp7DfikehZnbD4KXN9vysV3",
  "key33": "2ja6d7Kauk75KMyyLs13pkM32BHXKDvjkLDgufZJ4TggJTQusv7ivVMdA5uS4BezoWwFUQc8RCsFKEzownfigYf5",
  "key34": "2583odby3C2Xf53h5tgskid23zp2X5r8PU91b5eDFENjaxinykM8a2Swgx61Pe26AbNvR3EcVxYs1nSSwYdPG8jL",
  "key35": "3PZ4KRu7gqwqJz2VqTexorHVPgvkjnPsrXcA1aeAeENwzb6258omNTEZcbByh4won4KPpAXn29eAWtWh4hZMrSsD",
  "key36": "32RiVs11qFeuPMidxqg4UDBDGjeF7BWQbuEASkymjrE3zVYS6aAsBguMhcn9yZjP1rcnHgxxQR7dTRPe2kU1nTgP",
  "key37": "52e6GPa2bz7Kc3dp4Uj5YmRaucmee4K4QJiS4vvPHkGbQbEff11PjXuvy1jaKzd1bzbL2ESLVCUddeoxVJpCAxkY",
  "key38": "5kYLKSEnJFYJVD7AvemZP3GBv826R6quQXVvVTKGZHRZx9RQX5Higp7NrwQeGXupVaXSgN8y27vtcSw88997ajuo",
  "key39": "2E9dX8fctPFu1JHox9Qc4vLXrVuCnxEPen9AZbJT5jafwTSBWfTrXPo6doB9U6udX1hivyVt1zSvwyM9J5REP4hM",
  "key40": "3RS65NbyS33424mWfKFqR3pvDHeRCEMiKzgcuaWSqffHyoQMpfgjUCyPzdYyi16CgzXKtBty8NMD8Ex3Td2ughLD",
  "key41": "2ir9gRU5JVbR1JQwUfLVebTdoy1FoBo5RycyuTqZYCtYKCoCQ395pvxVxvi2oDuM5zV4Sz7SGPo4FtT8EgiUwBJb",
  "key42": "58jbYgA6NmRLmnrQVroswUXUFjzBtnC3UGUnG9Lqd22SNifG3YfAdntWCQseg3eg2ttaMyixsvBoT3zBhWTvTfNc",
  "key43": "ssHz311BRkhAKCJbjUkbaQfyMgYcHcLh7wSHZ8EcDRA3Hn2kHjBrcuXNmbwQEh8ShdM5gCPqqcqvfK9paQK1q8k",
  "key44": "XvUwz22U97o1KXMrL62voXFTQiBCwaTvBHaFxpBJkzAhrEQMLxMHrVCEP2qVpteLttWkKLwYaYardv8JR54r9Ck",
  "key45": "4JGwHRm4JTAr7pUnF3dVR37eaUsdzfwp8yjiRMEyq2iZGTSKUMDaw929tRMjyTVbQzYebsSs5QvUrFwm4w7BPVSM"
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
