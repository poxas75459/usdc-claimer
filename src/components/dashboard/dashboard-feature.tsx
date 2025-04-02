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
    "49sYmnxCBqNRM5ki28yc8xfXpjpq6gsSkc77erDdwEPYnrXriCS1iHaZg5tNQfRsRPN3GLwBhM5xkWeLGD4d5Dqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DmzzDQvbrQX15GgpGsMzV9hRvwGbrEaUc7TEAt3Uk6joEHjKNQnjS7yH33PNU8CYF5Fyrq5Fwn4gCvawEbewoih",
  "key1": "4J9qqE3UPMn4D1SZWyxx1L8QSsoZnkbUjfVcdgTaUVWb9knPNpWjGguZFrrrP1KKV3VmzwNNFX69X6QqBmfrRtt3",
  "key2": "3Y3gsokdAUVLJhrmXsk8eZH7CCi2wr3R7x7w3AWirLqueCKhJxm2H9CaEW9EZwke5hh1d8zvc4s2MHAkTAA7MZ1D",
  "key3": "25bUdf1SVfsaKnqYV6hxKndHH53SecxSPoygjkfufq5PxYrk6ytTUackCbjTmWcAKEo5YVoV1f8fZsVn9TV8jatf",
  "key4": "125mBS3ifWqVYTpcRqwmbSHKHDeUobD8BGf9Y147hjryywNXtWS9TYXGYZSwZoqXPjcJbRXnsRKvXzLycNB2Lybq",
  "key5": "41n5kLxSPkzaRtuFgqdyVCec1rGdmiun7r2NbTHMWuUtFkEVLaTMaPHhJZw1MxWixU3v9mBEtT4mDYJuU69Gw26g",
  "key6": "2edgcS8VqPYzfVadPWaTvoBD8rerF1eY11f6bARvKB7KGAj4mV6N3RZFRQWGCukSm4KtTVn5Ltdf1MfHtD6Ykg77",
  "key7": "58EGxuXadPkG38ZMvZ6sbeZ62RSiuroegK2hNVvgBdg7qekpUYMwoQyTp4SNQ8gdoHpcZURAyrBurrk8ef4QCR76",
  "key8": "2Bn9txyizjao99ZCxji2cwGhx6cj2QQsUUTVTMe8877TxQz78U9hKTBaUSUb9kbpQe8iuxsfckQuNdqcrtvW2i5u",
  "key9": "5Bf4LjJXu9kcFFbBptjhg33eFAvi81XmnijfvKutw8CkgsB3Gber5EhnZCfhP8yZeqpeYcYmoR23HEfBc3qcZaVV",
  "key10": "5vfNMsargg3jYvVqwxNVWKB9F6Z2P7hKTbkrDBJLKo9J4sAA9DGUet47AG9arpYvq9FhmKaqZWuxEgyH322F6qHw",
  "key11": "gmVe7c9GgnKLXnnMiMM81zJQS5caB5fpcKAQ8DiFHu8PKxc8k1RqT45B5wnYpK4sdYk21rCFE8sBHC1e2WFuXX2",
  "key12": "3gGBKfbQoh9LBAzVUokrdRpLRYncddz2Mv7qFKZfp5U22q2XE5VTbh8EqBFuVtiDCuDbNjoYNzGHNn7tZvvFoqfn",
  "key13": "27ZgzguomyjdCWNhucar5PTfUqajAyLqyNFbkuXqTdHeYgoiockLymUj5CWGVSSxUU8fH7fUe9jb4m6XvpsDaAX2",
  "key14": "4ABLJXLxGzrodgK5i6GCAmVcc4RMU3MFWZkvKzu5hS1BSynw8z9PGHk7quMGxvwnqCCiziUbpR9mokhMaMmh2dkP",
  "key15": "jpLMEiji6mrh1e7LgHkabmGEQLBCmFaQ6EsJwMqxdkpbe4UP8wziPpxJsomDiYigHNvGBVrfYhCZxur5ksad1GU",
  "key16": "4qmn8Y4EtNdZKBqqKVwb6oCpuc7nBeWhYYSo525GwoSd6kMTpSqAjWspoUZmMVmHmwNkFCYemyvBh1iwo5qXCBSE",
  "key17": "2dXxM23S1KK6Jnp57dZg4utcNhtmVB5xtnFJL5YpqSAj5LxsATBaUUfrUfmSKQ6y3ktJZ1tBwEy8PBZ7BaufAKLn",
  "key18": "4u4iPKPuftBSMbp8m9DfUgvJafo3wYMA6hXsiF7YSWJ58sWwCapzWkEuQS3mcyNgCeubQfWngZKifpxzLRdf6ZKr",
  "key19": "3MBufETzcpuzT7NVdqBGfp5yry8WrJAwxH2aoCM1624mz2opdEvsEsaKjGy38E5RjyDrMQbHg4m1pPugrz3syJvN",
  "key20": "5J9fp55juuqUmCaKqsPfM9WUxRatG84DTwBWeWH8iEQmBMP8uydAtdipWVC3ZKxuFpxKUmwM3wemXLGE3vqZh7Cm",
  "key21": "AGpQdZd6noYzTZ7fdzpE98NhLH9iVojWqJtWnxPuqWcBA9wuqWX37wevy4m6AiQNkWHxeuk9zFajPGseTtQbtPA",
  "key22": "22qx8G2PKZXBCa8Y6bBKyFgeJNrNsHHpxcnYCKVorbCQQptiazw3cJeomNNc3jWq3m5GSBb5riLZnRJmWvWEy2Sz",
  "key23": "3hZWMPthPpNoMCrcgTAHS11MPm2fwLCHBWqfPw1vyPWtLeU87JWMtZadyJnUHTFKPz57CwvzRMXMLeS9bvXwASmE",
  "key24": "Ygi4ttUWTL9e1qVPmJf8rwTemEdKx9fck2ZgsnFgLeekUJhvD7NtN7bCXcVLjaq1sib3N9cP2sJUcoD7bTQRdHt",
  "key25": "c9J7y2T39H3styqv77zUmBZnuYvH357wymS1hwEEpaoXySwGP8B2w6svD5ZGsxxYadGeyq8Vk1pA4ogdyas5VW9",
  "key26": "5oGUaGnsEHRFS7ERz4G5GJm7PSqQ3CHRmA1MDDx5iqyVavSXZXcW8aRc5tm9ybZNB9Wi5qzyu6Y2YmbFiu7aEn9n",
  "key27": "NAH9hQuYthJUu65iGzxM18zhPBYzCJNkQsinNfKVcPuRDDViW5N5VYQLehkNxC5Jb67QxwrZL1WM51Bqv8vFg7r",
  "key28": "2w6Xgs6HiCpoFrXBiLPSitSQqfnMxRu7pJZjo74cu687t7oaWdVG94PNGEcowA7E6D8niZsTfuwTMgjCSDWYY4qh",
  "key29": "2D9jFFrEuL6piqehEWwNs6qNEuH5ZCVBfp2Ux7HTyWzSJqwc1tjkZkPF71TxLx5tZcf4GTS4EsohBvUpY9XwPSR4",
  "key30": "9b1sjsyFZtdrNQuvMF3LbiA9DNJ6iPojsphipGBvRdmLtGZ29fXdhp15h2jjV7mmEjY5nnbRxSoDi5Hps5iQE8r",
  "key31": "3ED3vY5SAsEUfGBuHSmGXbGAzwuXMCJJZA8EZvCD58H62xjeCEswWWfMMUTagiefB9nYYwVyQrT2gyBRnsvxCCgC",
  "key32": "3ijJba4cpGt2Ct2CK33Kcs9gyx4eFaDHaDbTgoTDeXS7jXyUGdFuHgo2xFgKJwn3YMhVnuzQncDBgEtS9HjkzTH3",
  "key33": "4dUzQS19fiZFBpp8cRGC1SW9FNfnCR5tBLYE2Sr9obPztoSj2EPWN1G8pKwbBq4m2hysfEU5MEuN4X8ypurAv7Q7",
  "key34": "hp23tLi7SgT4jkiC8Hw7mxeYZc8VkBSoCDCW9eqgAhxGivnfZTQXALowSi2mSGzkrW7zxHbxohDQAvwZUMZR2Eo",
  "key35": "YVDDTZD4La5XRTzKLk8b2QX9b7JMbNk8s1pxePtNcTbfhnHfBeYonXGHTdT4QEZJczcSesUAPf6sA6W4E8WJ5uL",
  "key36": "2dZvYD95BZgKN4jVkhuXYEougJNj1gBadtGEJPuNyrrdkU4xr51sFWxKm7isynvDVL5CHb7ECybnGQQuVV18fAPX",
  "key37": "48EivF9NMburLYWR88ShTXuKds97QrLZ65znZMG2GQgdCT7xN9UGdKGr1Y9iE1QvwbJWWioZTAwPiPCeq7TTjKvN",
  "key38": "4QXAxUhmEwNXK3TwMKh1neh5c24mxhBaZJ2djWJRGW67bZYVJmUYfPCQuBKTdUVb8HEPk7AfWaBey6tsmRrSB79Q",
  "key39": "3JpJp6k2WpLMJX9Hfb5o7MHrJEKUHjVXnbCMnrmiaXE5sVdoNqMgGUUSRbmdhcEaJmUaLs1XwDrDr9HMQiWMXYLU",
  "key40": "2ddaWCw7Nb3Q4qmcb5ydjVLD6ncWEDLjmQE6Gie4SmnTiNsZxk6H3MQzyCzPbrofVrGU3PHG5rMVQAaPgJ5eHz55",
  "key41": "5gF8URqQmKDNAJTDHjqG1NXuHU8HUx53xaAnjuvZ1A3zEL1VTG6QHTM8eLauuBULQgwr5JRy76E7XhT78kBjrsU7",
  "key42": "sE6cnM3UnHdaGA4ukEJAfvLg85QuVpEzXRkbBNZgoc21qq5LTYkUaAcCyb2oNnCp29TD98FTowZAfVh5adYRVkd",
  "key43": "4DWKLYQTMwKZyXEE9RY88dV4NvZa9wvLUggsF7uY6sZhYbNu5LMbcZSC8DPQYd2se4N6t6pSFkB5tqRjwSgVAjFF",
  "key44": "5f8Vh4ebLs9NHzoL7qgDFkxMJeyqbMbo8e6wtR8naRdmN4WJ7p6fdFpE9yonX9r3GhroiiRwkrHTV7QwH8zw5Md5"
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
