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
    "4EguwfCHabxY4a4CXp5vwZMNKrpTzeCyw1M8quQn8zhxqVoPFNd9pgYGq17nq6obC3kQhTtvLM87WnduJifXBdWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QQcAGbjHNh5uHwWG3DLDqPiww3Y7tXCD5gxDFzaPLYFFWtmbsK21bQyLFrr3M5dmmutBwsreP4ZEozetwozhGxF",
  "key1": "3WT8H3bhK4NstzCsgAm9xq16PSG3zmsU5J8B2ses8jPseVsw5H7Pw6u7iQSDQURrFYMhvZdW1adwVtkc8H4E4TwN",
  "key2": "4nKz2ukBHNQp5FW1hYeJVukBFQKuXByeQebdrdDhUyknudgRBdmCSMrGYhCeUBqqXve9MLzQQMXJob5XGJKMp2hc",
  "key3": "2ky5wvVUiD84qcVccH5CKLrfr2hFbd6u1uCad6kmXA2CZnoxeGTEaNYkuTdR75gvvoAafcmb1zYJ3YQb7j6waCJC",
  "key4": "5N3U8d8W3tDBXjWBPZruhL87aHc9nZeuPdDuH6YyqFV8UihptrgaKp9pZwpazxx6qFRmSVtuZidqqUus1uvYbyZ4",
  "key5": "2brJzF1yXXKyQeAZFnMhuu7kgYK5R4b6sBCzMTGarAMEC6reP6ZT3bSCq46ewSZDLuiPYXzjPYi38pNjbfto3wLS",
  "key6": "2Lm47aVdVPYo7B2kHj22VvjUqCUVx4xRwDBQdJm1C4UpaCHGFtarABSSsLW9n8KYSpP9QQfS32wtqGXv7d1mZsnA",
  "key7": "4XaauAogTRePyq4jL6Vh1KYHRm84bxtuXmrW4ttmWNsDvTFNRPXUVov7Yj853p8qYkyqWN7ZayaidXtLb6WFUUcA",
  "key8": "XgAwda6KG6WM3iw4hB8TX51x7q6ppvCGoLV9MdZphapxymAcKGkXPYh1dEt4WqovMKK5GM6CSwYCjGYhMPoDLRX",
  "key9": "1mFKJYCYj9FumFZEvjyRHAtifSU1JFbo5Vch3TRnDw7yC68eqHrAPyfjN7xgT94xKNpdJZ84bgzCUPPfXC3HwEq",
  "key10": "3b5aY13kDfm4dt64GKVC7uvRQrEhEoGfXiyQ8Q9Lkc12VFmM8dZ4Un7zZREH947gsTCLY6KERcAMt8knaTj4gbxv",
  "key11": "35aTT3uyH3JnYFzinYWGFTzHeXWYFQBNWW57e9bfTEz3PCmxJwY2Erd1p3LF5BMCA1vEthBzWRTY9ga6Q5VT6K2u",
  "key12": "5q2Li3pLo5LrTwVo92GcaEJEm7kKVNknbtvH6vce5CfkqkHocVGvoVvZimtSyeycPd9jpi8NNT3gATuDw1phBYdA",
  "key13": "2wxbGnRkzDA43UxB7dT3dT83CYqiMps24oEZi2JmNhcLDHkbKJt5tzU81eiwvjA7kfmbBGB6aJLY7vTGQT7ReGrm",
  "key14": "3nj2kdomqKKP123rRaGpEYCPbdi9iriVrP13MneXNsyxn1EBNqpZh2LM4ajVw7iYkeih8wFBaR5eWzvv6sx4G1Re",
  "key15": "54nunXNyiD8UcP9hohNKFaWZKdUjt5gYoNKqE2Kk2d2Eab2FPdaBge1omJGLeDcC73iXXg2aW3udr5uXbjTG57S9",
  "key16": "49tYYcV6TM1mmwXvkHrbZEhtPDLxciuN6cqtoRe8hxgCDNf2bn7jqWVmAjEwdKgSFHG2q85BqG22NzLX4NrXptty",
  "key17": "3m5qsXg3YzzpdiLEatVYkADwkTZGdhpzUMey6E5eMZ4NH44h6AKGZwfX4SWbjwx8PLTWKRmf8AjhLdRqZMLgVdQz",
  "key18": "2iqr1uEBSJ7S4nSCv7HHCsGdRNaHeMC6YwfeoFPU6dw1F6HixxsmgPkhTmFQrPNWasrsu9Rvtee3bvi1jfFxJpg6",
  "key19": "24Cppzhf938hVrRhpjhUUjWRhtHJcpYMjNGLNbkmbAsn9hD3a51e9w6DGoVVZudSt7SsciR2fWypoSnoUHJi7gqQ",
  "key20": "4hc5sRW8CrBS1bDuVFATJwgytqmGRCSRDJNcpwq2KhmJMQpog5Kv9Kz7vgwVNHhcTkmjw8mBMbonwQG32YDNFuXa",
  "key21": "2Tcz7fn4cAETA42Scy1iLE4BfLsModXKBdeKwAiPamc9vuASdh92BbKGW3LZ4ZLQ38EvYx4VTYYpDtFCxa6URkKZ",
  "key22": "5b6CFoBfMtF4ZB1Gf7bNBJES7r1QWPmuBTFiyRmArsGW4HrzgQj55NdHqDSPcMmkrahL4CzT8Pk3ThvqQKQV8voD",
  "key23": "2Uq4DyD5ex1hoLanaz85JcdUQcShBfJon2CnyrToY2CBfmhjJpW6FNas1uEwU4Rp3G2E7jdKx2NNvrhMQvT1pAXp",
  "key24": "4dmhHik83mH2GiGTAMsW2Ci8NMPXK5pjNrV8gei3jWvSsFMbsFxML6K2wi6e8RkSdeZ8cASL9ajobPEsNHvtsCnG",
  "key25": "48U6UuaNEBUnPBeSVrY3emYnYQR6Baf9wqgZpreqp8kXQXK1kJg9CiXYXcKm7BiHX37DZqwZteL3m3zkmrz7WQ6V",
  "key26": "3fqKuFnWZF4mRWyEhdPYDaaJ4mjwKfCaiW1gAZXYwzAtn4ceHTjCxUuzEknQqDhwfUkdauT1cNGurJdzMjkgfwsi",
  "key27": "4XoBqoUQuyD2Ss2cXcqK8WKfkc51WWHJNh1n3qDKeVPobeiPmThaC3Q5GpDg31hubFRqBUhqbAuzeRYJyjMTdTnU",
  "key28": "4xGyJ1aEBcfNuucyGcmjimjBSYBZ76EbmvnfyU99vZm59aAThmSaoJRkQAKKN5HAkT9FzUMGUGjASdEeuXjjxwN6",
  "key29": "41wytAG6qoC8dJttfA2d93xeBFdKoX1pZuP3cgBxQKjjpggY2eYhwWQH5kywPg3YaCaWi2YcLEYsHQqxHwgAQDL",
  "key30": "2MSbZNcApjXVF9myv4KRgZk9y1BEreb7dwZ2KGNdv5E3FKMmLJbJSUokXyTEf6fRJk54VpezRBGb8PgBpVWBCw1Z",
  "key31": "3USmShsMtVungbuKa4W7nLsoAxn6jp75ehDsZFd8tiKSX4SFQdvQAncDhgLQRdXakiwMjGEyYPUsFiqCPxeEd6nj",
  "key32": "3H98jzkAYTtddvgLfskPgjzZ75xQn3A5UAvysLw53v4P6oguqPZV5qNQkMYkBHgPn5qfmvaZwoxcx8eQsD974toc",
  "key33": "65KuGxqR1Lyw8kA8m69vr7aTLP9jhvMTi1By8XNrbNj1DtTNVai5s6hxpMvhFwCajRsdnWjhSZCiewyDSZnRNBx3",
  "key34": "52f92wYHAT4VR2crAbTso5kCwFa9ouzTrRQWEktTKDiWGj4ctnLAjtFBurMpkDq4A4j3X4nr9XnVuWZ9TfPSjyYm",
  "key35": "2jjUwNLoMiycgkRwyoDpuvxht47wWgEXPwAD9wD6xvGAs2RzJvAL8JkotoDQqRfjZv3XgwQn565YtHdQxCxRiFgL",
  "key36": "4J8YBbnPTM5N93HZZXbLXFtnDm4n7JpYJ2pAhQ8hLUXPovDNALp52S4chCiD6eQbt43VkGZ16MRFctFH1sr9NGSG",
  "key37": "QXB6nMdw5E4zSmKL1wx134MsD64WvcY9D2kbJCCvAvJDiERjmAmhSzhmDHCuLCmYH3aJoojh8wa7wECLcnVd32B",
  "key38": "CXEHiW8Yb74UFarKBJFZgtuigs1d1seFEQT9XjXBrUSgeEcQuBiV8rM2hQnfQnSaFzBA2uBidLfj9mbo9pbfMsK"
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
