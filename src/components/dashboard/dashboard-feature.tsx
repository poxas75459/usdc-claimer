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
    "44LktnoGrzQ5Ud6t5psSWxuQfQgNoZm8pZQ5LRvQJwM61KwLmtLUTBcMumuB8YRdR6xKxCCRSCMceLcJRKb8wwWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XcpBvndMeq4tNTqZ9X9eLsAzrcaqeGrtQxvKz3dvjYR7Whw7G1sK7PeXDyEyFSi6fpsWPvoDdg6nMpWYipGka9G",
  "key1": "Xgkc65vSjHb2hzh2rFP7AvwdtxjCYruzt5Qf9z4M7YrdbREeXceUmqUCETDANXV6Z2wYjZ46rH5TwdR6zDJQhR6",
  "key2": "7AxrPZ6WwyKjUZiKK1xfEvVTnMwUnu2Qz7QqC5Z7Z5q8QDTnJnXQKAsGz7Z95t7WxnLoAmQ2qySggRCRjGdWwFV",
  "key3": "2manoAVBRiUY1L7JXisUPRdCBiLTKE6EmdigcHc2XRKph45uFLx3i2y7xhXVtatrUpJUc49Yjr6rcya1Nu9D2Zvs",
  "key4": "36bfCXX6Pbph7n2vDZHW9enbyTL1UFEdjPJjcf8z6rRNLLUJqkBavBQkE4Jfh5xTnGAGwXHYUkwdHgnsfQNd7993",
  "key5": "3PFi6DkFTJCrMxZha1FEdx43XF9xXVNeFsPeWKQtm1CuL136Mu6Kp69qREbrRxMK9KKPdgdG3JDtH9y7ouMfdK9X",
  "key6": "27jDwJjS9n7tAQPf26a6j8zGeEgnpeCzV4XE61FTEicYqyDofuSpyHWqyKrsB8WXZB9h8GU9rGHW1ns4bGZ7npYP",
  "key7": "3632QwmngS6yCZFvVyxkEFMqzoMGUrQvauDtuDQBnmwPoxHStHehP5P9kU8vDJshJfQPgAEqdVAqFthSwo9hTbqH",
  "key8": "5iPEw5tUmLJHV2JVfprDAB869CGKrzeN6SLR7GpP18nbu5nf5zxuoV4vEjuDqeBbD1ybZ8J1bEv3aQHBtEpWisQj",
  "key9": "4Lwf8Neeef8NxVpVZ9TNwNvJWV163L929bf2aGSPnNnFKz4aCx9MgnnssZMgVvhgmf72RyaiJvww59dGKSQ1AwRL",
  "key10": "ySncGHjs4nfjaSbfG9g3z4hTXDoLmKfLCTrnpTrz22na9rq6Rgs9rw1oZcMjhRbaTHJmULfgc6b52XNgsHZk4ap",
  "key11": "2SXW57E12odVheH1BUGk4H2UMKwy3T5f9XWgacgwyNnSZYbdGgj3h5XgLFsDqd2Cj2zuxaEryXRiCyGTSVRR5Ghj",
  "key12": "3bYfr5Hhe7iFkbZ79AYMEzo61U2qjkfsMJqUgmhmQpHPCmci7t19L2Gya48nbuazQEHYFZXZNDejhe2Nu3S6FYdK",
  "key13": "26Szrp6dXV7zvgfNMMDFpry7GAHtBrT6cGUqQCkvfpNsLp3CyZuhbpBaibZv1a6rRrVmZ8irb6czuQUvum3Bbfb4",
  "key14": "4aqF1wuSDbnN1SViV4KPtxBiuaQYzSvnMLwiFdqaut7Xx6rfkcmzHBzswthUytDQ7XDisw63RpFaAH19PgUs9i4T",
  "key15": "43jhHtJgjpxGf5BHgKGTdUCPq3aW96qwpJETrKVDWjK2u5pbd5cA3mWAvZTTBFtsypvxEALKQLp2KfwmwaZURqqw",
  "key16": "2xzLoaFhhvqwU9qKxgNsoRGxm2Z3uAN2e3oq4qrKNt3ErWcUQ9k71EN6DCSq9HyfsvQrfwFfUFh4USHJyk3q54aN",
  "key17": "3xtmEj5XegD4axaSwAMeG6XEbHAj7vKqUHR3V97zHDLbQrRtpHXTiHCa3zLpYE5mCWbHj4jBS9oJzFsHJ8Ei3Pqr",
  "key18": "65XE8GUa4ZcfXZF5TEP5RfF24HUYRkF1FdVqoeARvtZhctXoJv92VFc71Mo2NUXpSnG5TsYoKSGYAZgxcn8BtJTT",
  "key19": "52RbghwXWRYKRvNtots2DnJubF7KhogoMVjqfmrSafa1imzt88ytJRXTKXvxKFbNb2oGbwmcWmPhA99v1r2K8479",
  "key20": "4mj6Q4mNuujLy8iFEARkPHEhqCupn5ye5yA8EbiXmtq34HwbTz2CdRXB95XYbsAhGqs9S3dkyigA9fiMv2QtSFnp",
  "key21": "3ay48xui7yB7ZHzXub3ksWj7gXL9Ks1G829JiP6ozrPEtybYhynHnJe9sFvwUD9DnDuW8U1LAVx9K7DWNokZZEMw",
  "key22": "5U69egSLq57wmTCkYF7vwNnwhL6K8XXuF7ZRSbgSmqQxXwtyuUpEdDpB2wYBpYRTj4CpDFFsN7x7eDBSd6p9cVxD",
  "key23": "AQbDDEJZAi8GMkwUCaxav6qEXihgmyvm2Rz8FPaZihCe7TxrmBRidRApUBgzZiQWQDZz79UsigyBrBLQH7HhQrB",
  "key24": "Lij5wqKbZhb8P6pdr6ubcANaDjj5chm4jhSva9448npDNdvSr8EdPPDKCMaQhieZ6QSRi71woG8N82vY82kmANG",
  "key25": "4d2S2CzRrcKyFcB17dCwCfoHcj7w5aVxdmeEHiQryQhpD69wm7b68Lv7JRHTGzv77mYrJztACVuV4ons1JokwGNv",
  "key26": "2r2sycacD9aTMvDtvtiwK6Fd4GfLcBsmqkP3XBNGrTUEH9w4kSxxwzipRsukF8qzH7cUNYWmzmFKsZBek6VNa277",
  "key27": "2Wrp5MJEVg41NNeDeJi6ZbKyjKi31uGRri3yb2N3RH6oaR9f76HpmpdqFWQmRnKaiL6LY8s8MwYXFqj1E5rBSFHa",
  "key28": "E4saNTAAFyLeaUJhSheHaM4zTv9RxP8nPUmCTQdLiHWi9XkVktajjziRR1pAyPNP7DcgPdnTTc24eGasYBX6WDa",
  "key29": "ia7iN3Ncth6LELkoCQC1WG7zRjzmGUL1f8MU5Ks3UEV3nSPqG5KMV5ypEU82UPFpMEFbffF91858t4i7UsTSLtX",
  "key30": "ZTS5PVipYuVvJR3AhqbH6uyVHKAncBbjs5xfQgR8JJE4KQa62ger3RvV7i9MavSeLSYCgLR3VJgDwNkPmMuhTSV",
  "key31": "4NVJxkzyHweqK6qgGNEtf4CYAkbB3Ljnz8R2FLEB4RJe8q7Yu49GziWt8HgtE9Zs5xxqwPiAzv8RqBKd5mB2CQbo",
  "key32": "F72jdaqnjGpsoJRnz3Y5c1fRNndjZ2NxzGs6DCKfNZwS8BDLAUap5Ga52M2TPdwcs2Y89cWYWGzkJ22QBEcQzZ9",
  "key33": "2kNWXxFRwZuiMnk3yrKGf8jXJVPjkEGQ5oq43ge5jGTN6xoBBYBGDtk7RyWiviNaykbYY7Q7VMjD7RatTPVjhiAb",
  "key34": "2rYkyi2rgEFoVgboTTfjC8MzKA5tXZvcKwKfLH94FWpD5xAyMmSmDGK21B2hYPfkpQ2qcPG9Tnmh2M4BTwQQ4LUu",
  "key35": "2xqshrTjPnoiofUcMomSaJt8Fi9s5gkEfW5gaKn7NBHFYHvPcnQaaCPV5aN8PSUs8FaCywkpXAJPEamL5anRrP9R",
  "key36": "2vrBchBooWzrn6nF8YDdzXDmD4RL4HXq34MTvoRbqAYp8nHn8TW23uiE5ErxXxGAMhPwH69y7A9Wf159Qspj72EN",
  "key37": "3w6ermz27wHayNc8hMET1fnFYA72aDgBgasSkDAEs76VowpAhD6PAHcuzhdBsyGezmV3zqJJLccrbXXe3H94Tyd9",
  "key38": "5e9WaDKw5bPMrq9NMNKhHpbDUgJYLzW4dmqRQgzb2rM7ySzNET4sLFpqdXz3vKNqXpNLxShQxLSWZ5tzBiY6E5JL",
  "key39": "4Z7C5Djt61M6KfvteqhJKL5dzEoLzjRUC57Gpvg7Xy7x3przRwe92FLipLDyPWXfzgMTbsKLuc3h5dFqT3b7g5zo",
  "key40": "2MBar2VjLpbGtuq3FupdXyYRJwc5FM89R3VRJZXhaBW2jmN6Wf3GMZHEDnHZxnTHcDNEUHshKNfWk2NryjS2DSnZ",
  "key41": "PgrX9UJt7ZGZo26YyuaaY8p6FkJhYPuEsgaCN8GJNRSp2K8Y5eLYGh6UPL1jbaCQLbEncgH4oju6eyMFxEXEBrD",
  "key42": "3pEGh7rThqruAHGr9dSMFD6qWzALoa2MU2WTcY1D9ZRVQ2TogVjhskaEMej91Cotx1t6kyutuKPcCziZcA39EURR",
  "key43": "hX6bqAgtdsSa7G7RHNdxv8FwUKfRLykHygYxF9xj2zJtvAACLU9csuYFFhNUVkzzmSWfMb5RqTYec4289JrAMXt",
  "key44": "3GSXuJ1cCPHfzrAGiPZmukeDg1BxyZP5S4vw7sq45WTMGU74MxwMeFrRgG6ovpEpqu52QRqgTCnS1hzsKE77xBFc",
  "key45": "4fdUr6LDj8tUaNEnWWXB4zHmue1Z8tPRPVpHLqzE5HSp3NN3xmwB9hvXDHsT9igfryQXaoFgPttZ1ksV2SWZ1isq",
  "key46": "4cRXXoDJH1EL2f9MExhnXixmLpyzNEdqs75JGF8WyXb51CSdPtWRWQuVF7mxfi1vk5Tc4YagN2yQpoGRgeVRtW5f",
  "key47": "5oWEVHsJxiZEHW3rexkGtfVgHMjvan5TpuU1sSDUGsH7P6v4x5CqH6jWSwFnBpExQu6yQhqVMcbDCQroV5qeDvGh",
  "key48": "497WoKeL3kybWd3C2Q4bnwiaP8ZMhKttqEQ3WZV7bHW36GqYrzn4iUCwmvXTpcsy5JMCgVDdzpXcaGwyz5QY4J3f"
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
