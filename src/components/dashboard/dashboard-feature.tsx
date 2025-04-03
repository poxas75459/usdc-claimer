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
    "3S4nRXwxHAzrab38W2miLqELFghixYMsX6VE99pwTnGxsMUMvHxin1tLpiJEbtfKfp2gscEMe3p291JMXemCggNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U6N9jTAibKdn26EW5jnN4JF97V7f4EfmCDiHwCm2QAtHjp9QMNb1xeeDaCRfAPCgCki6VgfjryDYzXfK2eejVUo",
  "key1": "244o2rPmCWcPBzkHn2JZz3dmyPPNE76bpg9qDUBQoSRzsMQuaKm6miCUU6q4NXeE1ZYuvmmwEgwEPE41baL7jJ5M",
  "key2": "2QrFBks9xDMaAy9dpjrP93b5sgfYiNTH9EVQMQqXRsFdoEAzBuQ2Njz9Ur4B6pHxnvtsvy3hcq1AqHfd8P5WzLeV",
  "key3": "2vtFAyJ6kju68g2aSpRfRz4k6i4ury2S4qsaKFmLnLGCLyTwQZyuf1swgfatMNMNJwL42e799BCNQdTaL9AwYqGm",
  "key4": "3cjYwtqsqNCGbXBNhBjCnBKGwWffkTmwjR2eYtzh2a3xmUpM4pZDDwypw6KVtBkbfphKCT9hdLj876qZiHPbBVfc",
  "key5": "3U7HqZDBRD6JXjbjV32ftQNRh37nE5fUyyoq5PaakUCkCbXqTxoMiBaqYmFA4ncf2AggYrmE7Sm1eJ8dkgmRj8u2",
  "key6": "4biWdyTEBoHJYZEoKxQXarwxpaTBjLTk5oL7fynYRopcMPEX2YR3thXwnSG3MgdVPwjsw2UFx9fCpjdFZYKYMYfP",
  "key7": "nYvrra8HPUX3TbDMayjuSxyYWDWNVEZmTiTgF8BQkkB5sFmN8i6EhhD3G2mcYQyCx3QEY73FDqeUurEYcmG4ScW",
  "key8": "2AAVBdiM5zw5qGbHySr7pVzU3s4JNftH6ZnXnrgvvLNjuHMtiuF9xxn4wAGNR9fhYY6aS5VJsgUZUbh4BR5BQ5Mz",
  "key9": "5kJwZr7nDFSX8PoxHzx1Np6KgVKzoAZ91rV7kcmHgiFSvaSLiZFCndLqrjohAWV5UhEaHd5qA7GG1p6zGfdDmGcL",
  "key10": "5GPUnR4riZfvMkbGyksyLRCR75B9jkMTNdLPjd8aHVtGtZk7VqmdbaDz2DvvH5KtCXoprGFVnut8mAV4zieRccxh",
  "key11": "2BwdMrLerJUhoU77gi1JZfW3VTJz8QWyPVC3WEeVu94LwuFJwrTyB74AFvhznN4AfoS2p3qtTXKP9h3GXLWGtha4",
  "key12": "3Tmn5cfe415Ask5zPd7gFptBVUg41VVjML18ghcpHcpBRtgfGHJ3jVpLXgA66suQnFpbj82ZjYx9RHAaiie7ohY3",
  "key13": "GBTnhLzzF7PWs5oxUjaYzQS3pC4gp7absFJytqHZkM8wVGrx8wayNNpayTpeqXxJxn9ev3ZvkjVCLXheHuhhvAY",
  "key14": "2sGHfozvmwF4b5mosx2TdBmECJzN1CyATDGUDHb8aVbMc7dNDH7fwNkRKFcRSBy5FFz7PVoggeHQH7ovMFSx5ChU",
  "key15": "2FVTaGQBBdaFsJmpdFU1zdHDzYE1x7V4zqW8QxfMgfj7K3QYLeqtqb7VbdL4qFjp147EZnoBfygG2KdS5XJkEan3",
  "key16": "31ALBXx76B5pZZLV8df9wej27nJKvWHSwFEF5Ry5jEyx4ZCQsCzhNwBctQjDXGC5gD9QGKU1sbgp9bzwnckbufvn",
  "key17": "2YsgsV8LF4MoBfbhb9r94UZX4Dzrs4YHPkNUU2g3dcHTVa6eik4jGaSZYne6rLXURHg5duMfGb534BD13t3yUXaq",
  "key18": "5BwrNyKBR8TY9nu9F5gapU3CEt2BUjMGMJgovgKVCzByrsyAaWeaJjBSCFXwL86aGFwWYRtDq3SJruSwvxApHjop",
  "key19": "x7ZTpXEarb8p3h1j8mweUxDnF2qikZBwh29ieTDpEYBMwYT6EmPGC48BRSZtxbDopfASokKeYNS87KGFWJRCc3A",
  "key20": "43yyvv4MPQh59mByjGciLXoMeTSRyqev3FwWk1hYeCt3CmnGC6duzFnnMmVa7sxuob4opzG4RQ9y6w5ej4xtfHyE",
  "key21": "4rBgBcp8sUsufRupYxLHPwDth7wcmNDh2v2s8Z9ihnMLVgM5sSas7hXXC33skGvWrGW4QT8NykAbNStAQoryjruv",
  "key22": "5D9PZAn3kvppVJSujidEKrhxmJTAErtTMfGLe9tPZDzhbEjCocRXxDZVcimBDe8qe5PS7onUrPgYWgTC1wjcc347",
  "key23": "3q2jhcDc2FRPVxwA6nMZU5apWjqk7xKXPivsSRLQLeD4fSTak3deX2evvhmVSEaWode7icquAcKiJrjBXu5GNYHp",
  "key24": "267tyRgmgt2o2P7DyjF4DpJWddbXrJtuiHm4mif8kKGTmuuSPzG3c1sW5hB7caJGYFPx6VeBHqqRC5bTWw39VD8z",
  "key25": "h1U4rBGxotwBjMuvaUVAKjPVaweGQgvnfZqtWoH3avDXR7sxkDUdQCYH2yHvo5JbJyK9GK4XGgPmRwAenDsdfyr",
  "key26": "5PwiUTD2qmxFt6in44KGxcaABpE31uErPF6Gd3oMB1sNaGspQouyz6fXYBqPV8swKNLqMSscQK7M7ZVin4fbsjy5",
  "key27": "QHYeKZLJD5NEyCUwG9jrxdWNh3Lw2hLd5pyq8epaRJ5VjjF3vELhNWfo3Q8dcJBGpjUuy4oY8YehVdyVfQfZejv",
  "key28": "5kpqfTi39DNtaucVR63mRJp2jfZgGwNauhcbUV4tvYu9zVC8FTdu1ZdxL9EHE62NL4EdFnLAQjkoBKMd3nb5Nuah",
  "key29": "E1w24sLeQDqsf4uXAXgcwvaecWgBZNmscoPGc9Da2y8jvBqcfecefeNessVfxaM8Wis1ft6kLPDniSKWS8VzWFd",
  "key30": "2TwukMfy2zkmwWkHMZ8kP5DUKwKQR9AHsE7YUz9qeTJ9oCc6nbejSUWTx9dumfQvd5bV5fd7JQvB4ZP8W3kHEVpp",
  "key31": "3Rq4pC7ffHiM9F9k2gB5mTAo4gTE5eCsUn93X1BZ4pseQnUTXecpybkx77zdUzKYi6a7vS93qqRsmTmJ6CDDbhLe",
  "key32": "qUnZpeE5dLgFvZUTSMwU5qF63ww6uP6664EZYb1zw64vresP8hQxRuGbPg6zGZcDuHtgAdNvXy9nkpRY4jzYkP2",
  "key33": "4mQBW3qVUGEGYnss95P8D7gpciPGfYJRN3QFEDGV7J9hrYKKqPmRQGnRVdFPNvCzh4nqjWKVezV7U4KLM118m6Fr",
  "key34": "5tJcvW3S6NFPqYCRK8oeR2AAjmqd9PBeiW16Ya2g5Gefnj9GA8poQDLQpm691vWrJEbPpaaTFe9AjYosH47Hhhv8",
  "key35": "5mpnxFFBCwupM3fHqerbvZeJie81RHu8MfGJoyPfTmpCRT4mGd8gSsCknWVW7WrqmLAW1UAXDzVdyRWyiayUD3ZA",
  "key36": "4Lrjc9sRkvW3uvN3qxZjCEvak5RCutpFxzEWJMwXYRLxJNXeaHphs3DccZwGXJ94jJ6hwUAuzVYg9bZHbiTMU32e",
  "key37": "4uKdgyyMiZMtX1tEe5xtmWETQWCh2g1bQDxMoiZ7yHWuvgY4Tg9DWhUg7uS5i9LyajLZ9FTAP8VPgdXZC6UyyPBa",
  "key38": "3bhW4qzLYNcR7Pgr3HXAayR3FFNBzuyVrNJqSAQ9AWqcmA6pLmdpgQMHv3CaY3EYQzqfUbTQjopHDmyggqjaetp2",
  "key39": "34vfjksLubsLBX6vJc7D4nLW7QYwcBR8Mh6taq1enEwaYWXeHZLMyfLTnuyMkpXGqdFv9SQ5shsPioja6T1eUcxG",
  "key40": "5z6erbHbATUFn8LEP1h7MByWcsetcbevaH53i9VvamXmW9b7Utt5sfo8KBBeZFDQrtjTvm5UdpR6D4pmXTeohHMj",
  "key41": "yoUKdkMjUMj1YBvBiyi7vuyP3Zahsvd19qRVqzfqny4cois7sAGLc5bYihRqiy7qKsEQ1ZZLwxtpbnrJvDwfDDM",
  "key42": "4C9AGpArhnhuqm9Q9SbLRdA3hYsKWoGKbsMcS4JHgK5zcAGZJYvjejJKM6GLy4tFvQqQxW2Vm7v832fnMV5vcFmy"
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
