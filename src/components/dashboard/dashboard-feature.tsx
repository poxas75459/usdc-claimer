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
    "4PteLQaiEyA9w8W6D3hvEajDmaa5fKNEMtSp2ykDadZ9g4GYenDetqE18r7d8HJz3Lgn89jXucwfMRrG8RhWHeQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j2eLNVm2ZGk7GvAvWTQamCUTWbf3AuXw6zcpGEx9tAhRqoYReYiEPhXeqzPtArmZwZerYm8KgeGSzxRNotgy5dh",
  "key1": "51SfuazpsP5Rd8eMNvmSaTcb9RCxrk3z7gBW4jZmJpHXmWjNtdQAuvkGqirfzaKcyHKCGaqFVq1f8Rdcf9RrPKSj",
  "key2": "4Umo44eW1xxaw7ULgHmQKLxpn9brocL8xDGXxonwgoNUjCbPKWaayZvUxJ9j198skgJy1E1kwXgemmqf4s9QMRgn",
  "key3": "3mphUL9eLsbjqyfMjFDrhhw1QZSuzng4hnJPdKFmYBeELLZNieW9ecaCcfCxmv49661cuNtAc8G2in31hVzNkbJx",
  "key4": "5YseBUGwR5ZGvFYckaLocDpm9r96j2QtDav1P6HmuH2yYzm3g2PBXEfrNn67uphvGCc6Ehta2t19VoCo24hSQrs3",
  "key5": "3wzEWSgqdhyXjLaYcnXKpBT9MUbbfbWPSujyjNA8DzAk6A99S4qrcYQjfPRBqThwxHpu5P1NrGGN352nJvnYs4Qk",
  "key6": "5Q5YuaQFmcH4bauCnYC1AnSuvCHKo1tcaxYYrbMkwNm7scWhhm44H7336qQwJ79jji38wYafFseDgaHUn9uRDhjF",
  "key7": "36L4SuNAZtSHEWuvZdCLhW2UwdWJ5om5KdMXCdT7FHwHyoGfVGng9RqRXizwjM8ZTwkMksks7EeJuMhcDKarMfHv",
  "key8": "5Fub7mGiNwSfFUpqGtxfNH6BS955k896jSH4fTbTPfGfiywdxYNcytbj8hLr5zKuFb2PMR4Hkd9ZtG328eHh1zEK",
  "key9": "3yCYkBmJbkNwDxv58P8ZQMeGmbKEEsn3cC9SwVxLE8V1Wm24SH8AWXv4Q3GK7YrmquqL8z89YFJqmo1XpNQBkuk4",
  "key10": "38Wp2MfHDbGBHgsvfLsMyqx3bxUg8EY63CCZ89vFcG9RNsRm4izkLAJY3QCVJ8BU9eqfExtyQV4k7TkaR3UvynEo",
  "key11": "zpbAyhiPyt7SMNPJ7vpsPAeinoZsTbEnGQy1CfSLUTrcC1b1F5XP3YYPmiCunsW2yAYcP3FuoNfEYg2wxFj38g8",
  "key12": "c1ZDcDMYhKfFRr1nSpv5C8d1VFoSvteXr38aT6PGpUiQxJgA4NSeo2HZ6nZp1q6iFfEg8YPqiV3CCUieZJqUVQJ",
  "key13": "4PC2WKfiCRx2MnrMaMUygRiTtgjHnXkki54vqJodHUqG5mXMyrMGBFeVU4kBtDKRuycrH8tsDU1MWfz7tC8k2jzy",
  "key14": "8awuUgzcGkabwxFVYHvHeJGaf3pe5XD3J5vH5ggGVWtSXYoGyMYKXpjE26g6KUHKnXKF6MRdLd7MZYw7UWgeasD",
  "key15": "2PXLU566QShK4Dj43q44uBaArMcdVVZdas8GkhfysbRfCjAb7xSnkTfhbRheRbfHQ6zgYwMjNEa1qxAxx26zAQYe",
  "key16": "3XcuvdhZBJGQ3KKG2SsCmzJ5akEnRMJBxKDP4ux83cSKx1VXck4fjZd3766jtX6EPzRufTuwZcMEFM1rQ5WfwsCb",
  "key17": "5Jvfahct97omrctHcfr9LR6j3Q9wE1XiTzbJ8ShHSGisBo2jJBkpSAHBZiMLxQUKuqHSHeYdk8eHcmfMH4hM5vKo",
  "key18": "4DCYMptHZG9LRKwXGobf88FDqpQF242u3JNQQ7jFk2fJLrC1egJM9Q4vVLsGyPf2Z8AUJs9p516xZtDS7VAjE47h",
  "key19": "3eBM2pZ2ciUqmTDXVetSvEX3bXDFDh5HgdF7qPDKaftXr7NxE2S8XK6BN5BmLZk8wLvNQmEoUGecUtBmN6xGP4WG",
  "key20": "5xVRoWmgVDJexEFSJg7SCXTcKsFqpfoQzaaWHBM59ufaz49NX4k2v81bgEdfeTgZxJ1MqVamc3eCLzZfQxpdg79y",
  "key21": "6HWV9Ls2iAGjZZWVMhxmudDchALqoQAi4rjXPbn9P53t6DienSoCPBkWG5p2kgoyaDMeEznB5KPB4RjM3tHEMds",
  "key22": "4H1VWDNRrMrytSSjF42Rjj3SPJ9kbv2uEAejVmFCFm1irVPmnpso2JyGy6HLT8dTNLvHbMiHzS5J5gjLPjgHPK3U",
  "key23": "4YrW7zxeWoVm2LiABfyDNy5kxjjsjfvK1iY1NaPEsVPxycnfArNVmWPJjRyEGrJKhSH6XmKx7M5UqVUzTtuju97X",
  "key24": "3oCTtbg3c32nKD4vW2Cxr8vn4iZyYJ8oau6QW9s5g64p1vWcJSKFwhMGT5JuE56Sa1KNByGpuaUVMKkUGiEcSuH1",
  "key25": "2tWfGBbUFyQmPbDdWGxM8p9ESD9ggcJHJ8Fa8FdtdUVbhKWdWm6zg97vHbQYWwYyucc5wda3XPsMU5Kjx77dNVMY",
  "key26": "5e9fyHSyY36NtTao8WwLcuRySBFVdNQTMgCJ8yqTt8BmEPfffoTobZMNygrSVQaGXKMBqFpoykudWkHzk8FHMbhy",
  "key27": "47EXaq7eAGcxDiuzCeoMBaXfNbzSWmYXjy12Z4jM6dQjLG6wAd8pbYJg3Ef4D3kR1wTcSyneFhNL4nSxw8tuFSBw",
  "key28": "2U1pmZnneArfVCpxWdaUXH8Cvd6sRfUqDM7Tnq33iurBdWuxEMMYQqHNVKXQyMHj8kWjTMiL7b2Q91ZbDB9YCCdB",
  "key29": "5EmCdk138XpjjReduSP8k15Pcf748Yd45wJCfKeM9zTK4TECPL8j4EPtibt6AUisoRtPVtzns7QpK5HWiXKfcHZ4",
  "key30": "3wQhnK73Dutx7HBzmZQczCGvkg75cvE2NaoypBtGYqXEJJ7ETcyyrX4wtLW5pdjg2iYDc8TSMRisE7YDppVQM1kr",
  "key31": "oN1p9WAGiRpWucP5djvg9sHAgPAyWveCMMukwLr5Nq1RNrUKxkJoHiEhmTFLmgs5YaJJPUEW4nf7r1YiS23A8bn",
  "key32": "3DtFaVhNpiN2pvPD624SBTMy8kd4vZNTgEFCHLCi1TuhS3awM6bMWHYTU9qeHnhXr9mL6esLofvN19Scym19XVTt",
  "key33": "bFjpsrdZCkyyEsbQ4TCJW6qT1oq9LK8c8FGxA94CFFMYi9bHHAHgdJAy6SC3pyV2gmwvUqtcnSzZZEAxsRhYY5T",
  "key34": "5YGHJtKwZb1SHSpPDmamMixwBbTz9XCMKX4QZAD6DiaNUC1zGXCjziDH9Vrw2GMDwZzzQUX69jywyTir9vGSn9fG",
  "key35": "2hs2xj7i12h1y7YtXuWm7m9tMQd863FeiSFtnVcKJcfoTcSPdotw3dwBfKrQvPqt5ChbLEcoM48PHQ3NVCA23Kr8",
  "key36": "3hqmycWLMBXz5nyMTsxVwngjC3Vu826m5bxb3MwvGhkazY6JgPdSH36oQuNXiacJtuo4WQhdsiLxhZC7tFjfGoAd",
  "key37": "3C7zWFi5VaRqNmKVHNFRpR23fVW7fRYJwMSL4GK1nHnFsPB3j4L1N43dK5ZJtPqBYDSfDh6s8BbEtLajo3t6au2H",
  "key38": "FsLw1FqNZT35rBSScktYrGr7VStieyEsJdi5qC49BtNkzRY36d3q9mLCd1LY99QxCwrUKrKWpYq7pyQULydt7Vj",
  "key39": "4dTaFdtmQT2wwhJeuDAoZxiBbzgzENMn3aCGiV3vBJnzr6NYWbm3XfFvJ4FgLiFi495bGpzhEFxNVztKoAMguyJC",
  "key40": "2BzHx7VKXcA46w1qDt6cMjobU7aRBDzhXGLP7fMVwmjd9F7SV6ahtZwLzdDRH2MxwpgHKv6DzeYMAFjFXybbU9eD",
  "key41": "q9UsncL2azvdd18X4RMrNoLprJ7wJnd74Hz8zr6VQKxA1ZPo5Kp3yef8Jn15G5ypibt4TVStcvuQDDUJixGHJ6T"
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
