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
    "4HAekKYMPtu7TkThz3xwCa9V5k42AvkzVyRdrSLNnKc1x9XeSUJ4b9mxzHE8szx9MX3gE3Pz42mwDEjPDCk5F2JU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wn5KSvTBpbAkUoA7UyJLxMdqbnc5GrQFByTeZdtJ6X1cK2jo4x1eYh8EK42wqbD3RvD61L9urKxvuQJHESKmTYw",
  "key1": "4JFNWjvPsiaDVo2ToEVrSwLuLFgVKjGcjFagKBy4RDohdvRab6FpB71PzvqBvpq59a1TXE3t5JpUDMuty2hV8NWq",
  "key2": "5oW6WNqFzP3zyTm6evqAXLJsAfKpb8UXc9FhqkDo3WXSohuopPWBv2jGApS8fes79wS9qAsAfNwYTt8CZgXTbMrc",
  "key3": "3ap4gGXtdvu8pHuvyF6bHbPWve37j3HnnGKRGvdPMfowKNxGmVZrTWUE6GmyhYHACgaoYzQtppH3H54WNkERXQ6W",
  "key4": "4WGNDYXQE9cgKAmXooJjRTaqvgKwaueVsyRHK5a49aotKsuSmpGYTkQ1fh37QDbWFz8CvEVFmMgq2s4UYZTKbZ9F",
  "key5": "5fyumrjDYQwTYPSALsyxoXuYhAv1k5eAK7xh9iqrj6qznQTphPiDaSWAwD92iJ2NXTTnjPu4KMEXGQs17BpXsLSG",
  "key6": "Fx7cRFfwDyUFBL6YMkoZQLDWzYLPZZLDaBPEqEsGGnH48TtYRrkf3Jh66eRJQ1PVKMsTdNLvQoT12fqbcb1at3o",
  "key7": "tWP4a9JFoedtG9xVWdE53gtCHqNmsx8WENZQ9XB2RCN1o1BGwbz2HVvBWDcbPPkSet2pep4LGLiL4CL1HKiLJ7p",
  "key8": "2hWS9NFD59tDwotic8AeBYsf2C1Ry8YVsNdcUe3RUe5Rhgt95eMBMnEm99vbCWy75zP7BcUocuenNvyn5dMNazdU",
  "key9": "5gYvTCEfk7dfg2UZUGcvWiiuBA9SU7xqMWf7StNvaDaYnRMfYgNDHxJdKLZeFV8u8PckBEBSUWgMa2zeHLZJXCKF",
  "key10": "3rvvFFQDnb5E21tbZL1yEjgbn9znSxwXmuW7BxUYCjzJxGi7SCrV9RMz25xk7sKQhSNnhc6W9HgKT12QDVThL7do",
  "key11": "2QGEARSLTPYrvsgcvxDRvYHmHgvryynNGekNZzBTriUUNBHM4DvGdRkBa6NmYAbYNfYqMP1uJURjwEnuFD16PosF",
  "key12": "42j8DuXyXkodagAAwYhmrZ4Tm1xJ2kJjP5vBt1byMVeu3rCe7skuyonkS7X5T1eT4zUYGZfyY6eFABEhJgBf7vwN",
  "key13": "DsAAfbZGfC4HPtukCGHirXd26RvrjfN2cfAt2WrpxRu6Ww64Wu4g8dSmkbgQ1gqk3uzKALxAVZMaY1m7Mh9AQms",
  "key14": "361M3fQ2Q3fVZisWJPKMqpuunmcNvZxYAjC1y424vhDwMW4pFqLeYjBjSmgiozjCpRnjRCwAkEdu2JwT6ifr8kMx",
  "key15": "23VyJiBZWES9wCkEkzqoN3iutb5vPhCNcMLAjPq17hviQRKD7PAmo342b5pz9Ckpxk4QLwHJD7fytLc95CyFW2uQ",
  "key16": "2w9hMs2RAiZhGY7L4dX4hbi74ijqgCf7RLxVNQDs7KRxT66zjxJBK9X61Kps7oZKrHDgY2M8xipnsnRwsLsdixNY",
  "key17": "48Bsf5PKDi88V7UZdZ4XUQvHheUrwd2U4q8ZbXqXMQiMVLxBGoutUCL5f8dJyejrwmGTLgT6e5hW3uE9X5gMfWeJ",
  "key18": "4r91WZj9AQspQub32oCdLkbgZw9orCFq4cXkonJFvBW1STL3UGhHUEQ43Jz7t7jjeGexAoUmSa3wsZsdiuHNLzWn",
  "key19": "21w6PiWv3AY3BJqmKNbGPFXLKMLQY6T6aWZN7mCGnoxJ3g6NkGBhyxQcMM2QYiGqkNUraWH5qCLJEGJVEy7ky1uc",
  "key20": "58QdCsMDy9CtPWg3W8pTCHY67BVBMkFUeAmN8tpvAHBxGhuw9e3q6xZCTD1xbA2tWBXWu7eHBznrwVyLhwYYusxd",
  "key21": "26dback95mJxcgB2GKZcUoFq1gHHppHzwuw5jmSSim6LREZeQnJ6N2v6kqxHa5hPyGYxPQXaE2TE1xSR54C4MLtW",
  "key22": "ugsVuAqQWut2rr7Kv44Jc7JQaSqyq7aMuBK5USCdYfuRBpitsbehvDzKteZeiVoZ2aUx5FQdPjPp44mSwtMYC5V",
  "key23": "2YWdeAmb1BmQwfVpjZNoxiZVBWpPyNDqfDZekr23igUXHNNMRMiE5MYUo5xHyf6J6ARSCi1s8L3o122KzLbKTphq",
  "key24": "4Y9nBnb6mZpmYB4xkgC78soh6N8edFbLoS8LtQ5MfRHsA1JHweirNemAvpYCkW7WDe4JvkpFNTvrJefRsp42hHmN",
  "key25": "2Fk13x3pWT6qM5JYXzNbxmADJGTDb1GxNiGruMSKg89nRpJk16zqjJ1neNXwLmp8oL6wmN64MfY7JyAN83VUWzh7",
  "key26": "3Hrdmm8kgsaxac6U3jzbAuKeasY1gXWj9skeSCTAwt7a5yG5jCUYx7nrUqkVQhADxuWvpcCfYM5ChKfU8GZC4EGX",
  "key27": "3hq3PKJkxGRRNDKmpA3XRDN7qooX4f1pGrY4nQLrCYD6CdRZSNvXYkS5LNqAYifkmKZsPbpRgsgUDi2fBEhn9krV",
  "key28": "2kYs94dxJypYkJmVs91ikwtZhZ6thrxL9JS5Vv9T5DWewpFXiLTiy2eWP8BvAtDLFZtST8nxCciggiaPgmt6Tkx6",
  "key29": "3qE7fv8aZ5pMDBuUn24wBuiGqse2FdnMtw9f9duGov7yiCnvJ18ShAwBdwjZJ63jEHAQqwDLfHRUdmbr1UCMpbxn",
  "key30": "5GzW9aZFVmf4M67MgVUdozreFc3chAw9JNdcALQ8FpTfJRxyHZ12p3Zv77XQq1GeSUgoNT5vbqyAwyQv2scMnQh9",
  "key31": "3NoVZRatSjhskwfUVHh7BpMnBb1cuPhMab7upafxYohyyK7rmtfxxDdn55NXpg9xhmJPr7GKSF8tKYxDrRGBXYNX",
  "key32": "4Tvq4Rk82T4wCCoeKssJg5FTgWDAo7m1ha2nKLRR5VjebYF93iCbRvy4vPqRKXdqBg1x1xj2yPXEhR5LEh1V8qz9",
  "key33": "46wG8pjiE1PEuw1BeiN2xgQmiV6xrDTh28nsz8PyazjZa3LBh78qY3XJEqmHkYWWGaj4hBMMG4odEBKMk1CGtJPm",
  "key34": "3DLbA2pdmKJNgrmeqA9YeBFj3sck9vR49S82ogH4HBCfmfiqdA1wrFgv3fz5CtJhvk1zgAiBbyia5CZGKAETdqEd",
  "key35": "2ES3z7qnZ6qJyFHVySgeGwm1Fr2zQJnDbqB8RRiTBwWHKqx3M9Yj1xAkiB1E1dDnXyCWBSZTm3BH2GPaURzhAYzr",
  "key36": "3yk7JBsrFnpn7sSmEhdT11tpEASTRbA67zXPNxfVeSAepF7WNkNKWme8bpJLDmFzm7he32mXxzt2DcSp6DeW3HKd",
  "key37": "BZfnvPbt3xLDCvDzpB5FtoioWr43htGY7TZJreMjhbKHnDe3BArPMa3b1XfhEy6C4FfKTAFLyg9UmiKr2Y5YZQB",
  "key38": "v4fVWYvUmHtRMXPodoSWdHErhK1hfv8NcnApxD6txHZgbJNW3gme2YRxqaYxGR3QXU73MPBTPcsTtiV8K3EEV8C",
  "key39": "289tvKKUybAQSUFujiH6qS7rtX6pchWEPVkHhdBinfLXBUEHHT2VWMq62kcTZJvPRHpSp3UxXetX1R1XGe8VrVxq"
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
