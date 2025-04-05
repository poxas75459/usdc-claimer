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
    "4sX9JoE5wQ5BhVDnvDmFs7CuNwAiwPtzxF535fYfqr6xa7NZp1zZHP2Bp5hvUk1k5rzQH4ZAcwP4uUtitS2rBemZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bXAMpYdKRmVheUbbVQ8wVsBMagL7azcMQfVpa3aBzu1MyCLyMayZTf4JADwB6KKG5xDcHde9VFi1Vv6Wzcn7tq3",
  "key1": "4ZAXf9SgALgii3jSuqPwFgWj1hWc9pBKeVwJ3bFRCcMVrnzz2c3swQ4jsTQoqNhmi6bbahrhnMcXqtRWdFyYEJsf",
  "key2": "4GSHHE7QvDNxrT11NecwHK5w2o9yEMgiwAL4o1PCgiuLDeXKq6ipaXimeMU181zss8byjWgz1Eby275wTnoAognC",
  "key3": "zbba7xxB661AY2agLQvhP32gfQiFE5j2zVjyDdtGFpFbuLHZa3qgwQ1ppaiQBDRuGJotqYQuv55RzRuqgMyhXfX",
  "key4": "2AL1EaTPvDLBgsbyuDb4Y6dF24eUARETpkJ9wrYMMxj9X5Nu5yKvvvVLLwBDBBnCaoFJew3yiBkq6HparhjmZsWX",
  "key5": "3GA3rLswjtGnMca3kmnFSmPUscx8SDFGCETBcwNwKLLcnvBPACsGRyFdkxGenh4DM5vhdHfom12bJTxgZqozdB4S",
  "key6": "43f79txiy5o3eARGYM5Mat3WEFDyoVb7BAxKguyLq1oYUJvoSoKJe9GiG8cRAi7qkfiEr8L1z3AMhmSwLUAEvRbz",
  "key7": "FitVHcbZQEogEPMG1JFt4EtmnYR6XM9tsZeFDYJGNumUZRwqQsrqCmiY96rAvw6XKh7nQ1cbBHUxeoT7TDSHyg9",
  "key8": "2VJ2stWRtTy2ERd4UbYgSYvvwTv9147nr8s9bpQRZJW3ErWPSDR4UnpZrN9rqRHFuPrGj8E3fqEzb9QPFYzqBAp3",
  "key9": "23GFHejcQswLrbLhL1xYbvALJ6hk6Jzea6wD91ePmYiZRa3PHEqXLfVECbJVD9KD26mozNNM5aPXpNL7KdZ8sGHa",
  "key10": "3tbUoANeEGGcGJ1JxK3hvRUG2Y1AjyWwrqp2Z32FupQvNN5LGUUJMgJLS4JCrcqvfeNGK2MnEwu5cG6zmADFRU3r",
  "key11": "2Yo8ERWci1ZLoUA4TktXDUqJwyFuUQxFGjdNkbznQf18xTCpJ3JWQAheD4C2ibTpH3ejHH4bkZ7SVXXPWY9uuxay",
  "key12": "5snDt6nAMSZ9ruDs6t8JtdFeDAGEMNNYWNvWaTkted63c5zTBZy1b9oBbiWqbp67sW1DFAwHr5s5J7HYSTbnBtpN",
  "key13": "2yX2Wz3kZSp4YtjPKJVnyDyUZQY4hXEyQfXk6gQ7gCTpATJps5gYegj1iEc5bJS8CfF2Y4DmWF4g3L1KXNF1Wag",
  "key14": "4RhVR7b9NY1ub7adtT8Y5fNtVSd2fuuRuA5gHLwrR7CAH2SuMQ9C2QuGT8N1qzn2aJoZsejq3EWy6icwX1BE88cx",
  "key15": "3s18HttMzB8jwAzQZ9q4hwN4ipY3xSxrdJ52Ag22DQKPTvPy5v4Knb1vLKyrxfL8TVWMtLe7Nk8vcjV7gd3KBnAA",
  "key16": "5thxVYPohRT5kViP3H6Est13x32k56x2r1BfDjmf1YfzMPAQANMzFzZTvpevPzvqS3kueNN7Zu6c6rtMtCwzLPSQ",
  "key17": "52Jhu9otkdKZiKKreUE6aEpLLiSK9yfGAEi9nnJVJUmtv7ToJm6A8ZCLcBdQ7aR7Kgu3RqCyuRVNN9H4q985Wgyr",
  "key18": "28TAGbR2ncdtwPnsyTNJPEARtKrhhtnAfQFWsGz5G5ECbvKGVBi17Prdc862UxtyiunVXszPoyqCEpVp7hifogcS",
  "key19": "4f8J58rQbz9tH8dnh4N7UQStao312fX6jLgYLhSRT1wGinkLkt4fzYwN2Cp7nu7vtQt5LzcxKcvgMy2JznwxJuaP",
  "key20": "wfDfvCiqBjLR4fhrW7UkbZB5cQaY6NULWSVLGdbccVn884EPbvgoWVhRtE7YLcn9pFZ5RssVS66BkiAN6RVugoS",
  "key21": "4hacgv6D5zBZfMi8wnQ3QT8Figs5D6gsoHsZg2oYcDKHrwSiWbz8NagyMrapXtGp6dawbDLCme4AsraCDJDqGQ3K",
  "key22": "4L3VKuw54DdycLeuKkvnnMRuxz174bz3AK8pcX3rDyvtNwthCsE9z2aRb62npnuzv6Z6wcsMtVBKNsqQEwhJGgvy",
  "key23": "u622GpW6JQ2eZVe3FABGWaf9VUVonrZCvmuzVLgT5gc9oKgCYKJ11PfXj4L3SvB4tmT3SrDyJWaAYth5tYPG7fs",
  "key24": "4QDDgMFjexfWVTtBbvB4JSFciob565dcf1yAyvB3ewaGhQt3EiX9y3MpNwHy7iP2fMv1fN23UuwfKDbxMzoYqcC5",
  "key25": "4jXVci9T9ZcXBiFDNV8z8478AxM4LfYQHWzCeSS2HngcCMNB4mNDitUUbAVhK8qybuoszVUMUz2gMU9sKK2fNbFX",
  "key26": "3EcFBAVSDgYGNuqzs53yKtfy5WkyLnzTCqBb3DHvnUZS6EPKJeuztTrRWLSwgQmNB6PUuPVdAon9K2Hkw6NRVjXu",
  "key27": "4DTYQZYR5QYiVJfPZo2fxMXhK4m1FyXajdsJSbpjzzYNy2BnCrNr4uxvfMTrDWQVPmUpVgShJ95KLTKuLxS7gs5J",
  "key28": "49vHxtXZuQxB2jX7GpUt4RXdhPRbsbR8z9S62iQyD6Rfg7doUEpjm3aAgRCn8RzrRA5Emj5mj8ssy1pE6ZV33nh",
  "key29": "4Sx8JP4sNnia273isTGa28wWygBUcBDfXrsXbc8obiccXNobgvV2VrHTW16GJB4HTDrNvDoCRsYywBZqBZ2bpEsb",
  "key30": "5dgJ5zPtj7za1gocQYmVTYAHzSSJdb6FKZpQxCWUs2RJC5Pr41u5TA8apqdBUtmN9Xpe6kEsd5z4JKQyDViH77q",
  "key31": "aejSQNocQi13Yhz6YEZvnEUA1vnQFdQqXz99PDkr5RkA76PAFuP5FsF68NSPixh5bmB5a18see4BMhpAezu7wvs",
  "key32": "4Lv6VUPznFCCxvbZP8xLtpUFQ7BQSiQSomPHtxRDH4X6DZqE36LjAzZjbNXCjAi5ptF3nVKkfEagRooBoEt8MD7f",
  "key33": "XEmdsi3JJPz5AE1GN8bARqtWqZjZmZFNwATR9rArfJUmF68ujNLhhhDfgJ2SJZRYAsoDBPatuWJ1sSGNFgPoxeC",
  "key34": "2tpaVKYhngGLnVBU4RNJRJwWW5fN5D4swyFwtFo5ZD64wecFSPRPxmWzKuFxUtEDhV7Dvu4JkJSfeQUZ9PGHfeaq",
  "key35": "46RdboECFXy5UK4ZG1sHSPxSh4ysw8dPGaNKJP2rY6ELFYo78iYAkuhwMd1hTZppw57v4T6ojAieayKZXek6DpgE",
  "key36": "2JPdc52a5njsabNCpwRUHidf6hTtGzcYEXoSJ7Q7BLPBdBR2QP4TqZzysvtb1s6cRQjz3TsUfStpDHijKVuH6iDx",
  "key37": "djzCMzMByMYWFypxWGgE7pAgHY1gupotd6T4Rzpbkuc4K9sGxokGHZT9ysJWvnCmqdhmRjFg5ARRhpZoHRQhqKU",
  "key38": "5s31QJa2VBAqFMUukcCCL6P7m7GYqnzcJYZy23VWyFxJnA3oP2StovukcDG4kWWtzQKkUZ2qixTbe3PBr3vUbB2N",
  "key39": "3QtTfeYmSHzwTkyqb9QoCQLXYBC7eXKsvjyyUNwNXN6EwNZ8xdvJoqTgBjpaYj5oU3migpd9Hb7g74NKMM1Cu51z",
  "key40": "5JCf4jN8S49km6hniRKuveciQdQhZxwyNLenzWSXLgWTnhDHkCbiq971AeGniihSp51t5ym7L3u5tYvBej7nMaew",
  "key41": "582KjnfmWfq8yxYJDKuS7SWGdy6r9y5fqFKMQtB277MyAgroPiHoaUs5AuAb8QjCM9DvH3633u8m2VvHpFyqAKEx"
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
