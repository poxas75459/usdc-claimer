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
    "4JuV7vGTVvhbqa6X2VYy9MkzX1zrkLHucHDAjjKtpydrf8jAuSuTP3XCAYusjDHDye7nTJ9cGuCNivoQHVhdcyX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dmXNn87hVbwn6ZEis2hQmHb3j1WsrsyL6vLqzRk1Qey4RkrWgwMVYSGqqVW9koLUUWnDY6zPJBkrK4BkupYqbWg",
  "key1": "2KXAom7eXVLdkAdoZBr7vLQzkHEJ38iJ5pYde6gF1WnVxKDfiLRbvztyzSUHFDjPYxohNLQsczEgh8YBS9cpcYCG",
  "key2": "2YqXDtfgXQWxGALrZv2fcXtKt7Xtuka1r6DAcLyprnwuQunedqAqPkH9vJowMHB5SSXfczaXXMBsnmSvZVFmH6NN",
  "key3": "59KTR8T24UGUvD4TBC5MzuFqaQALP4RLZt41QuFC4wcYfkmpGUcUYA4ya1f5hD6BGadXNcSWRJobjsoCAseYXJFn",
  "key4": "2cRxcxo7PQ4iv3jcMKq4aCJVAQr21iraSEHwCQ1HxY6NrqucWdVpTNKS3G8GVbuZ2xwgeABymnVoubcubPec7yJg",
  "key5": "3DPLAgeWpebu1Z2cA8pPEoDdELzjXjSaiJ9kUshwhpwVRdn37W5BPW7X7hL6LmeMXTC1WnYnSSTpBh89zcjLpw9Z",
  "key6": "211XauBuCSeKk7Yzik6c1kp8AE7X3Ls26utBzEKUE2zu9RJcAaBU2mzP4cykRPYFb3CSa7JpZ2ixR4TUWwDNBSMX",
  "key7": "3eqFm1x43TPSjBQ9fBJ1QhD8KRnhcDcLo4d6Cj6GKthAqHBDEKwJwunrhujj9eowJMaNuu3ifFge3gTm7E1Nk2Bz",
  "key8": "3yCFtimDwQ5iQVsTmxDetCqmkasZuScUU7GmnbXYMFHiVv5g4cjgUPwZbvXpxhDJSLRyvhjS4TUGq2dncSjBc7tP",
  "key9": "4SHTq3aRUNtYiSXGAuz8YK7TiphxemYh357duqVqAPVTxZSmdLT8goqSPznkvzCHG6RVJvXzvry9Kd1FJ6QQYHow",
  "key10": "5vvdoGiDqhBActGkN3n3ExK2n1bDtbFuQPZiDwf2kC8WQnxJNHKsbFPD9vcgQZ6Q9b3YNcSsvnDQvVVVwg8RD5jM",
  "key11": "LG7164azu3Lwm4PeDuxSaQurt399ARAE4PsHQ3mxNNi9nwALX7TNA7NNBurympxfe9XzL2SaNyBtERCW4BVeqC5",
  "key12": "SZpNhgyBUUW6jJ8xZNSMqgjMhGpQSNQUhifDNS1jvWUBJRhayRGvHEmmjBg3ESCiutWMmKQCadMqFnAUuvH6KJG",
  "key13": "bwtUNBQGeBAnS3rD4FiafPiFj8bvkxpVb2FpJssq3Cky9AzCUgJhGt3EvvfsmVT1JHZCqzx17cPSzZM7gGmxams",
  "key14": "39Ssr15tXF7g3hN41jhC5obuSMMXX3PeyACaEscRTZBN3nXgeidn2Z2BUbfrPx7PQUiwkHfnU6JMkbW554XghoNP",
  "key15": "3toZU9eKEgdLUMXDxY6GEoCWuX727VpxQi6DvHDm6wmEL8JMAoYRQ72TDSgMSqTGGFG9nUkcusx8Z8arUteLR7J2",
  "key16": "tQJmG4FoUvwCb3SXKyLmwZXny8oceZ1WUsVz8Xs4rta4wU3P7MPLdA5HNy6JAyifZKFsm9KQnyNguzbuKcUvuVL",
  "key17": "4TiwdW2LRWtfHvDDj245kvQWsXv88zBn54rcHU7MJemXiKXknnpp9tW9JEaFLpkp33UaBWsi3fiJmEa5dPo1bRHf",
  "key18": "2yFkms5WBKXzRUYBnynUVsoJgdmUJqnXyeY4RZEDUweyNYxD5GpCeAZnZCGF1Jv8DbEsy7rsA5GuAXGdRTXZhfrB",
  "key19": "iaLi9E8Cy4abmMCrjvbtJDtxqeWg6ihueRZD69dt5KxYfWJWBcten2HoPjsgVV45p6wVCgAZaVBWdUrfrGpi55n",
  "key20": "5VgnqxNh2DVyxgDJC6itoK9257nxmizJkGALMQ9TNSibj5X2jHVAmGXmhehbLbTmBS4eeszBNM3unFPfsNo5akq",
  "key21": "2ErewNBb4K7cqSUygyszT2n9C4nBpt8Uwv5WZkAd6wwom3sFNpqdgVMKBD3kDDcNyBtrAoWynBLNUX7rva22tFCJ",
  "key22": "4Z9XbhBxKYNPfjgfsQjmwMJqpfHTEVQb2smEM4KqMRTQPVYstiR7ZV4wQohYbtK1ea2AcJqKEejdN2EH3gUxxdF9",
  "key23": "49oGwvGCF3duog8DiMKVBAHybzcZd83xqAYTmHMrTmrcatqpScp4hLZvmQJedvxcyrXFXz5a9yw2ojXjQFyjrM7F",
  "key24": "SU1BMMzEpU9v6iLSPZW4ViDCwfmAkziLiwdDusWLqMwTiZyz3vBobKnDyJi5UU95XcCqqwiubRxT7L4JYReEknC",
  "key25": "7mYo8AtLh4BFLsx82p7zAD9EjCxZCefp9wjHgVHKRPMYbanSSsnNEU7138rggPj1tvA7tjyYckpei8xQ4jw3Yrc",
  "key26": "4UhD7QejY51o7hb6V2z7T34bXAnSMaaa34eHiZGVh7ngDTsYRgwwwKPEBUxM8RsvoxGg5f4wbSbjKzERJCXFXTs5",
  "key27": "3u997uTsTULAJPTV5MFwh7jkJSPzMSGjzmQNHRGtugwVpEVyAK8XeSDg53h3s5Lb9wiXFM5XsbVUrTdSSzn291Mm",
  "key28": "j4KVPx8rnvXvki5mDY7xndxdsBGVpc88tgJthivH2ijXhf7VbFgk1khWgY536YNcqLshVxSwyAxRSwMSeDkG7C9",
  "key29": "3mg7Bq5pPTphgBfP9TbjLpztghGKPasf3ovvK9SEmCRgztMvdgAMhDgJQbcNJE1knay1diWyigfBYaVD7Z3mRyDH",
  "key30": "5DdNjwoeNfWtrdvjTZbvAr4cGebjdi8iNn5gXxJA4X8vqiPsrRVgToUaXozCGNb5Awt2k65gLgL9ATQwyMDYRZu4",
  "key31": "cZ5o1hs7nbu7UwA4ekFtgMpMURHxSUtpp6WZhCinkJFumC8XztF8pqDobxTeBJ2yjvtjTTrJPJr7DEbh1WtpCfo",
  "key32": "3mkVcuKQAKtZwYQW8GAK67ybUVxaR5ppfuczLG7UBYL4Qe2CqSChJL7pzZ5yGTgumSdnmQGsQqpykJexv4SW6vQ6",
  "key33": "4cSykGqrJJYQPKrkaGLY3LX7MVH7t4SfmXBcRQ8RqnuTKkVk3xp3MHqLx8x3FECEc5CzkyfoSyyTNuWALCzJKk6L",
  "key34": "5BmnfTjwswWQ5PZpv8V1tYDxPvLEL6KwT4Ss87RkHDs4S1b8J5sR336psqwARtXJMEF28YVC7QV7RgQqvEtkNrXm",
  "key35": "Q7P2eGmUJWXW3188eUTGNrYDYjeaEfKBFTFZfLAHiMLaYRUY9crEn5XRu57KEpbHjr1unfGwejGRosB84xkMnXF",
  "key36": "2GruKBD4r7c249Y6S2X1QpM8WNzCtdJ6diZoA2RzxKyT6SB2HnCwa2xf9D8iokre1LKaPKKy2t4CzQhefaBJEdbT",
  "key37": "4Bjwv18d73ZMjgNE26rooaioDEQ6JmSDPcW2H4H1RjfPNBRQknAy9CTpqwhFmixzYrtTkkKfcLiWtZXWGRpwsmYb",
  "key38": "3PnCjkFwM6oaqAKQyQYb32WMEhTUtYJdGfCWURwCbBnKbaEK2UrtDm4bSWZ4ekB1Tv75mbmhGvzkQ2Wu9cnWwPKz",
  "key39": "jcvfTXENQ6ocAmHrKkHcgFpEHSgPbUwLYzxKahmBMQE5YcGQzaU2gJGCAJECFQyenK6nxVCzDezTUv3B8TBk1b5",
  "key40": "23Bx38johh18Zwi33b3E4f15R2qLQsfR9fhZeqp3khMBR5wHoLgRtzrbWkfhPjF3SoZofAPAhBUDLW5vsn5Q1AyD",
  "key41": "4C1e1BKLZ2ezrLPrcwGtYvDCYNnu6pGCkLEZJugVbw2NHkwviiaNkzXJYZRzm6YK4MeZxCFsUgCdY1PNWkbSjoqv",
  "key42": "4q4zQg2XBFhnY2nUaDPsifvAyfdUYaNFs8RQXk4zNQPcWTCe2EqVYLmPKCiG5vpULKsrhmdwSRhUhBR3RxNM1aTt",
  "key43": "2AU92BfwNNXtU8NJN3WxbkYgkH3y8qxDdLRVc5aG53iPgBaRpgnMvX5yCKPHphw1aKMjRrLdc3zmYHpefL51ZDxx",
  "key44": "2JqebiDd1VB2CWjUBj4MS5zrFZAsZyKbrBSFU51aSBSrZmTAaXhRk8NVJ24RAsC4KhRChFrM2sH2FquwQprkXdLx"
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
