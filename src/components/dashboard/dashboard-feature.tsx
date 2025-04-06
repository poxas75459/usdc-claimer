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
    "5b5mrDP15sCakBx8JM8UQKcCjrw5Jte1HSMHCBYktKVhTXXPaX427xD8LayqEVQxTtjwzSBqyh7pasMsaiPGTStV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vk6xdoAxW5wHdprDhVxgcV6sMHR6bSBH7ibTAXUjHeisdQWKxUW86XfXWtc1mm7TBPt3ZgfLwkpxKAn2sLtjGGV",
  "key1": "4KFb4v9QK9zVvcxTdJbpfe2EzKcLTjGjVxFvge6mPW6gPvJHu2UxfD79NbEK98mkNRrgDxCyEStr9AZ711jXAScA",
  "key2": "qcfJZ6NzvTdDizzuoxzThtbr958WPBwnxCKizcUBZNUuMwSHPAPMbVtEjviq9vCqgdqnY3RUP2Ed3zGLN9LK6zf",
  "key3": "2mQk9NoyUjCtN8YSNxXNjaJNjPNS7VjFDcaomWPS4jLt8Y2Kmj8wiJ1MGbcigxvVtmbSbDidMc1gBc8KEeuCeZa9",
  "key4": "4njLq8Dhov7kPwuRvo5r4psX2F7iH1qM5cXQKxdbyjCxQHw5AynYoFEkjS6MC4gp4yT1uVwsU2rCeb3BoBozV4JN",
  "key5": "5HE4Wm2ikQndbkFaZABXUjF7aPtFfjNnXYJ1MaFpWUsu269NCXsoUAhXEWoEXQ11wLsuTN7aACYPHUsiLTw3rWVn",
  "key6": "48MXwXVTV5xfqvweyYfBDi9jxQsADxyWkt9gCpUaYGkYGS7nWMBY2xrNK5rYUq55WcfBoqANh5KnuHiSkNbx4mm",
  "key7": "3JUTMibkPbT9zPYmTWF1irjB45b32F2h6aKJBUEk1jQ4sSi8z7Qi9SabodcZ3sXb41geCBqAspsncJxrgFZF213a",
  "key8": "2qqu7Y7E3Yd2qF4rQjwkqWugepfofLy6jPUv9bT712ENWLMfUEBp5pkwaiL1cMv83Gcyu1A69LTvvQ9JfpM2jMpP",
  "key9": "3Nh8Y7iCstUtT1ug4dNHaAAacvGZGqxXJXxUPGd5EEeeBr5upbFFtwPR6DzQDjqfUFetCMCEZjNgMKcQCS1TheuK",
  "key10": "5bVyuWkpaVMSaMo1tAejyzQPSkGMMBtLX6iUs2HWDkHqmBjwHdMRQRw4aQBiNru1U6caQfr2KU32sGPpTXLAEqdU",
  "key11": "PDYd1AAXLRGL2HGcbHPVr4ydBCc8h9csetL8AWMUWRpUG69YGtJQFHW1R2tX2ZyDtRax5ttqDksVtjHfiG8ENRv",
  "key12": "3Kw9be4atwq8QDWRm1QNMKoEtRshSutikqAGMGvonYEBr1bHsscgi192SmCfcHrAKzsaqc8B3nvu6PX12WhK278i",
  "key13": "3uLtnubiPRcvAYkFMmFUPNVLqTUkgtBbVNapkPUtGgBrN2PoUeTaKwjiLdzYi1Y2a1HLXbAf6MNQHZ6uoiqfJoF9",
  "key14": "3XZTHckEUonxQ9G5bHoRTW9gZLnRm7UAmCV9c27FJ6b5oAKx8oYcXArQFcUtkXk1GrUwgSxnnpQqfSwyN1L7Cvcz",
  "key15": "5Ld1ddQuaWRnYTTeFLk4P2dd6dqMnn9LptEXmFigJMTB3ZcYcB31yqzpdyJngtNaSp26DJqwD47ArxtTv2Fsqeeo",
  "key16": "5VKrb1cX9FKNupZwrsEupQCbb5bRMuD5rBE3ubCPBhGtPTdzucyFHEph9AiiNSEcKXLQPZceBkwNRVoTYAr72oWw",
  "key17": "3XKXZPSAz8gfWTh9h8mvK1yGc6zsJC2fpDJBLVKqx42NpKXF2gSuQmNQQYk6P7GdDnNNh6ZoLgayw3MWeS48Nue2",
  "key18": "49Yf699KxbjgQeHQUNQwr1C5ry84KuZaGho5wyB1ZBu3h8FcbnvmSXanvc8FTW9ykTKLSbFnaKnCARWE7oZwyBjB",
  "key19": "44aTomUQbrCKNNd63BUVNVRme2x9jzkHNwMnPMkEhArZbrLwLKcMa7g7ENgAHETXNc5c6p3UySuui2zryQg1NvjN",
  "key20": "5JhpZNpFzHTs6Qj2bZUtqe1AeRqeYpZQgDkLE57FGV5qafeEjEvsoX2bijyvnkdEeQe4M1XP3zaFqKXDnRLYpH7E",
  "key21": "3wnyRWVkuCH94zekH226GimoGJjGUhHcEPuCRYBLZnU1m444SNAKNLAXkWoPhRXwR2rPbdEULiisjYgbD2mBDxre",
  "key22": "59p9Gu8TSNpDSxkeDYS8jxXeVGWBkphNBtSxEP2nPkD7oVdBKSvCYUraXGg6HePwjyKyHFHWnQu2v29yXw6S3YLF",
  "key23": "2CRWpsF7L4RnJutbogKVXwDZkaeDHH5BR5zayDhvDnGnLEpVUX8y2UHgHjCWdG7iDQjRpdUngv8HySFFVkbme6kD",
  "key24": "4aqVt7NjdN1J9PkafqqEEhsfTQprZCmNpiNTVnBmEkrSYqebhG1UDvZbyg7FLaJFqh7XjRmxSP2TiYQBeKhAVBE5",
  "key25": "3Az2vYHSMqiCGMFHxwbTz91Wza1sKHqo57yFCgQWTfaykpDvBjKdrCSJnP8FLUiRetWDV5P27zqi2f93nik6bjjJ",
  "key26": "5wF3Yf48ycHT4m1gKsyy6UsuNYTqoK4SwnDabMQt2Bd7TeLHcdhnWvBf29ShpxaWnqwDKAaSeneYp2d7MFVXT4ug",
  "key27": "4Aj6BzDJ79HR8ZQ6yVdiCb8g7DjUbRrNQ8UrjucC92G9oq8HwtCz7yUocaT1aQ8raAoKS8XcqEw5GBPXPWifv57m",
  "key28": "5C2bsXfebbK1sEgcU3syrfb81TqspTQiibewGoFFimgmm2VSei7JuqxBKwUWkxs3Wkjpxqog4e3hacewmkzuvrrZ",
  "key29": "2zuhjuc463kjeCHpNve9cdQCiYL1tR5JaC7KPiDk1DvZ2bUenhqXgqY38LxqXNnARUASzoYK72BarTmnH1YoXPZW",
  "key30": "4EPoizNCPPsgezGPgG43ZBumkF55Pvn9X1JQE3PDk3szR5wK6biENZQKiiSvV1mk2ic1N1oQiwZaQyVPFJbixduD",
  "key31": "2zhnYsAzUG9sy9ZnnjAp5T6fKAwupfwUQYtKKiqhbEok3uGT5WDrMe8aRssHn3JJG4byPFrwwUa15XWsxPtKEgqR",
  "key32": "3Kzcp2igzAG9JW9F4Et34EdRGBz8kyB7HViZG6qvdkNUZrEM4xCTGivwuX4gRZ8SieV4qEF7K29pXabANFFULNhB",
  "key33": "4wZVLi4xc9YXiHUv5DCPceHmVc9urBsvcmuART66565Zh2YfJL8d6eW1NJ9caJWEhw3tBF1FkDH4R56Cv5mxN6Wk",
  "key34": "Wk8h6Y4daLNQaDwCDaBR7QbeBVv2NdKkFknW7XehQHL3PBBxcfUBcPgFARVuo2ftX6sCkhLjLvSpaWvGZkYWEnZ",
  "key35": "4G2Zu8grSWEZPo3Mx7TdzonVmxpJcThGB5Szqo8FoARrHGCxR6zV49hmb9ZpuosPNxP9fi48GC8982dPYvsHg9xE",
  "key36": "5F7eE9VnXyZP3nMe8GLJSfKzg4nBLvKgBUQMQVjVyaL9F7Dn2uBeydXwQ5s9roQxbsTiYZiz2vzupaHdF7cZEk5C",
  "key37": "46BWXsrNCrdouCoHWaEsEC61s1xAuff645tSCadzKVC1ucT4Ti9arZKc1EJwH5EBDDwYV2NeUkWoCEsm2nAZAvJ9",
  "key38": "2hmnByKmMmct7ScmMDraTYJ3nuqNiJ6iRPcVsUNALwDGZSuBEtcWGj6Ufwany64pEtfNkd3QBhWAJpxu1uosg91C",
  "key39": "38xY7rcZGHzGpbYAYuFqhAocCY9vSanDHH8fgnM4vjNi1RYzxk5PT8vreK2rtLt3ffEKKU8Myku5HPzs8uqpnq6r",
  "key40": "4BVqyiSA7SZk4iseLkoUW65EkSHe5hmhQ2vYHqNnsroeVxG5EkA4KVzGhP8H17SbgH2D1yfmHwAdMudtnQzbCcJ6",
  "key41": "34xaGTASiGMnvhiYarr4HZLksKEAKLA1oYPq3N9K8JNZmegtU7L6WkSTNWzoeCuTr23Wpb4w7Wa2UM68ZyQavQ1S"
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
