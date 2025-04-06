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
    "ZwDGu9VbC5cbWSFeszNzPhUKASUXEswnfewBufQcVaYYv3ARfCiRkMBh1JSicoegofE9Tz2ZejZDYPHEtTibrPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fg2bodMb4b15LdzEjngKGG8qYfh3JihVb7bE3wvR3jDyo5BF1KW2XbXSZh7BoGHJ6nJQqonGxbe2A7Kh9ZAfsHD",
  "key1": "665kuHBPeyjPp16KMHNkuauLddZp8DrYW42PB9zYfS4cUSD5Ndmc5WjYVYe9C84xnqhy8tqqsBATCiDP6kwpzsoE",
  "key2": "4xWZf4rUbeCFWxHWhxX1GHDaq6btEyNaWQJzSLUZn1baZEutjE7Fd3ZNnBMc9PmE6xFxrcWxJcWLmCiAsUCd4aa7",
  "key3": "5VcL7ZtR9GaeM1FMbHzLoeijQ7ro79UzQECkdX4i9wMNNziwumb3d9SbREukByN9thYfQwKpUxcfzAjE1YKbJm2",
  "key4": "hLjztDsjGLyKgEA1w6TWxTe6k5LR5KgE69evGZRjVe7corTPFqRwsBDfniwLX9TFJjSuviaRpxZVacFHiS6UHsZ",
  "key5": "2rGkwxS8skhrSNtownGYdriPgpFBMYvJMb7Q59uktvEGoo2QSqh9Gw6naMe6bFYW6RLQrarC8z8wWPs8xA9n2i1N",
  "key6": "4isDBNTkHdvCWrZ4RFAuNbAq7Dhxk8Emnge2RbZTszQoFTf1FX1tYd2oC5s3rY9e8rFdmTBSRFN1gpco4sEyZgKK",
  "key7": "5NEvvEqSUB3rEjR4faDRmJMwtFdd3S727ZMrz52SowCx3XdwagSqZRBE2qia9icALaDmEkMVKKqUyvywD3LzWMUh",
  "key8": "3ZLbYNnttZPFfgj8moZ4kQumVS9JsmmxXQSqRkNcTkzRzpbJ9yyx5hVaWNUeNwYZqiB24ZtPMAWoobakU4LPbvUq",
  "key9": "XDjeR6upQ9UE7p8327x3tFT2PP1ZC8tv6zE6ReYFoLSFa3kFvyqcP6AQZmmqhERHF9WGC74Uhj62asLWhoUV8ZH",
  "key10": "3dVRCuzw5xpt5YSRDBrkqb2ZZi26k57AqNQEv1TxbqBpPqRHFsQqZ4SZAWeh1drrn1Ti6Ci67cJ1eyHVGH6muYVd",
  "key11": "4Ph4sxQCFMj6D78cTCmRShzksS64n1LuDWfoWmywAuekEzEqs3bNxawEqVzvytDjAEPyEJJ3N2tErMQpkZxQGwdw",
  "key12": "3JNu9V9rEeRAPYFcC5aH26wUNXSwfGu5NspRv4yBm4o9ugjsBo69QmV22VjBNYDous3q16pVZuFSMQ4N6bzbGwcd",
  "key13": "4SLiRwhKpHBZs3YZ4qpusmovs2nwTZSoidcsuqasggJuhZATYLffw4Fe3GLCzsGmiqLRDpJ4Vzzpupc1NsYx1SrM",
  "key14": "4LWPWeit1B9xiwe6pTnkCeUkgJX7T44eByzdiM9RVFtc1q8bktmNQxsPNTadC316jWTx6U1axYnaDKxpBgaaNDTU",
  "key15": "2rWnztzEsUpXsmYPmR9TUALpQxzPur7yb8N9SuSGFrAhngNuer3NF8nNFrxMxAvXefsq2TpsHL7qp7Bp3vJJxkVt",
  "key16": "24jkcfqqksbCBVNnrVxLm293Lrp6yRorJaC91JaRRZDsCddUZeikvc7NTgFhunBUURzEtGk8NyPfB4gcBokkfPqz",
  "key17": "5gFW8TsvS3zuTjM1syV8rmFieEsELnoiojYU4HGfchw1UpQx2HXS2pLkf9pfL98GyotFtcf2aqQeps6iJMSo3JRu",
  "key18": "66aXXys68Ksd5VyBxt3NimZZCqGMFX8Ps4cvfS5a6965aZw9dA2qLQeUdMHVGmPpCng56iN35Sw4U7Vyo9r81HE",
  "key19": "rj8f24r9HAd7bAHcv757vNE5jjXDZGjwocfC44K2nikRVPox9jCNrM3WA6suJnWbBALAUN37dWAsn1y1bEcZW2A",
  "key20": "2yLSHTo7S9ZFB18zYqcBnbz6GSwmweDepCksVn5YtRmuiCiTYoG5BYqyjHftQTUf9cNPEix1Yh7GJ1bXXgzE3ikA",
  "key21": "2BwsahrW1bW9XTJ37NQVWrBy67Wbo1EXUJpbzGyzMWdmhrCjpwxyqzBa5WKjZz3XSpqe5gayxC2L6KnSDc1RC3A7",
  "key22": "tLudAzTGNB6eMAwt1EziGnH6iy2Lt4SvxAHqCiAFjhwV3JzR4KxWLXRJZQPdzoPLpA57qqrLmV7AC7GJE8M9GCQ",
  "key23": "4gC6DrUbKzATKhFiYmN6jt8oHPJYtbCnqR6auttJWD1T9Acc188XuA43zsoiVsZSu35Zu9jJorWxkkyuCQYtDcZm",
  "key24": "sQr2RggXVz5cpfFrjjaDosxN4JcWGzS1oU8c2GhiPorQNSxug8tQiM8HcSX37WZnNeqwmFab6JZHLxN4DUPr7ba",
  "key25": "3fGiFyZqrtwvCHWcgnY4ouxypD4MMpKJvhwuPTbTGm9RvmygnthwQVxuQwohCBFhNRuD9Djo9gbmjTwGBzpz5Xka",
  "key26": "cLBP5ZBzdrNBKehipUE4v13rSyY75q2FX9pNibRj5z7EQn7fy7uY6c5JaGjPtJcQjhqL9MNyfvqvpzzqZy7a8LM",
  "key27": "5CVCw1fnYnVQVKvdemNbXuSLj1s83WbrFhz2oduHu1946TmUSsHb6Z6vAUeqTACyrNwZ3zuBGhKbPeCdckBmhxxS",
  "key28": "4tYJjksiE6Lkm2pGpfUrrc5oX3Tupr8MkE3Vd5ec39H5tTHXXuKZsctAioyBjTH5Ci1DvzSNGvJvT1XKM7ADV6P",
  "key29": "2po7CDZLhwri1jQHFgQFmojAFPKBG12gCS1P5qoyubUHz5S4kxNuyvww8Dv3cfc2kqiGy3MCFYMa4P6iUKpkxR4k",
  "key30": "41Gj2kCF44tfHQdQuPi6PnekVt9V2Fny9y3dvMUGHsQeUzqUWpCVH4x64afqx6W7AzJ4Ck5NdaF4FNszx72U1TR7",
  "key31": "2yASX76hMBKM3JjDXaMRPG3CEap6RiAqkkoaZ2WYstto6Uwewx4UX9UGFskSxcMHsgwXjsev8jqjsgMx8scN1Xxg",
  "key32": "3GWDdyoAXUFXJnDw7jE7T2nCE85o2qdqn9yfCdZSvF5kz9sxNhwE76yX3TA4bzuHZ5xFp9qJFQj2pHnFrW1ByDY5",
  "key33": "5qzpw66yrjTxdkPvPJo9hjBaGgb3g5YciT6RvcK89VchfK4krCgrn9MA8qu7cwBtwP1Zm4K7cGADe5rJtkqhPNLE",
  "key34": "3oZbhqB4s1RLvrSztj9XR6ydSVizp6Pf5tnCf9kGkee7yLJCtS12fpLVazFNQukYdiJ2bmmoZjufhDeiW2e1W9XU",
  "key35": "5EfGnhLA76RiP1ggBtpKQQmGcBYsx16TvphqX9vZ426Dc6NudThhiuS6ULVSsKnoh5hDvhNSwdc5PWpojNxQ6VAS",
  "key36": "3Efb3WMLrTjYPW4uin3wNnfKG8n24MUvojFCttQPzNYLNuL4F9biFRfKfXpsDeA12im6wMopHCVSif3vEbD6FdLP",
  "key37": "2WTemGPUNKq3ywfj8hdPwhX1dcCmJdDKvffAKzerM7N8ZxcBKqa6MQKo5HPbrfYUfCNcCvye9YbT4eQknTUZktth",
  "key38": "3PZDkmf36Lk1VR3VoLufikSjcAugKwNHv5Nh1HVRLqbW2FMetmCEvqWGjpjc4yoE6CCWh4P54zJ98Hu3iCCdSozZ",
  "key39": "2xr1awDdLDgA7hGQttkZ2TTzBSw8vW7Sw6TJG5qYr5532E2i2pzG1eSuZZnPfXBgBD22da3ofT4qGkhwtQWMRvbS",
  "key40": "2XGf6Se8UBuK378rijtgA29VH1MTBRpVQtgssXBhaWFG8cJVe6RCpneLrzFYK9Prj5N7XrypVgFtyHSyw2LQWqw3",
  "key41": "4sFgwSXZ8RmLRSEREcd4RS4nTQgnWCADMS4grzoyKDoiV8n3yzLGpZPnjoFRX9JSPnUwnmVG1NmrWcwv6ScuD5wg",
  "key42": "2VEFUv1EDycYu45XTkutuSFuZqvLm3D61nrwiBm9CePn8Snt9wTzzY7cQEXaXvtCfhZVa4d9ruLr32Y59wSDou9K",
  "key43": "5MMJQzezmMHxB26PvqrdJVAobCNDU1DDT6nT4KuXsd4moKDqwzDU1ojZZkyV1rczK7NDhozVa9sBUAZRUwPmG5FS",
  "key44": "52qtzVwiAYuKPpr4jZw2sbPb7HeRD1eaHobQAKBkVpUpMR148Txb158HUhPF7VVS8z1woVtoMowxPxarPhxkY74i",
  "key45": "5naXhY52bXCZXxVv566ScDUeEdtfJ7CbXHg29X7mnvqvM5XpHkPZdWB7kQTHQ15bVH1fHGRY7zttjzi7yWdxiXhx",
  "key46": "wp7zuHfM6rJgFKJC8Pco2TC6dZTZ67gpsZgR57FLRj4CCpYnZyxVVW1JrAywcwQKmoj9BmzWv4Qnb1bTTK9y67D"
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
