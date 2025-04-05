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
    "4RsybVLrBkShhAmZZsMLn9vsc7xZsLPMfG1iEhmaMuX3VbkSPNRDudybLYNgNYHnfAn39NQx65VkyQUYSwYztsLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S5EVCsvY8FjmskzS76dK61krYf6BR61poSdGXbXk59pajVcYdkHhgm1XKm6ZQ6mTkHhhpWhUjCCsnSE28Bm7TPi",
  "key1": "TPRHh416FZoCVdvYSJVq7EmyYEk3FUKQaGnztuqRvqsAq2Eu5yHh7GdbAR4RNV8ZiWtzYDqiBZQeYwPURejq4v4",
  "key2": "5GafLXrL3fo4jVrEfvJQi5YyFBxVyvvudWa8NQz1HYXrJahcT2PxE1zd9VQk7gkjdA3FVnprzjNrDe8XHJrAJ97N",
  "key3": "4a6pdGSnK5hrL8sQ4PbsrXvNmqEaUJtxtFWPiVrBKLvTNqNsQMcjL4GYK5GE1uqGhYN4TS1svkiqSgQjH3N9AjJj",
  "key4": "5TgkYQ56twmMYwES93mo98bgMUGKYRZraVc8BEcGaUMVBUMTRcPQ1ZTaYFqMDxzv3bistsAbeXqALhemeD33ZnHz",
  "key5": "4e7yStNWs9eCYYnGG8DWN1MyqiXcfeNDQi8xPgub1N1M3Ydv4wAF8g5dDvvqcAiDkixheaGFfW3tKdVYKMb4Pih1",
  "key6": "4n8zZaWKSHgWx4YLLMfyDZydDXvF3gN6Pzuj6tce7Eog7kxzCUPSbHSGgGBQdvAGxAHpWMjsX7tKSzvz1AktzeKA",
  "key7": "3KamspnuA9NSERX4y6RkgppyQswsf27z6TYWQNJJecWReyPZr7w5AneNg2RnJsVvWHpAcz136F16YHGKQM1hAgwG",
  "key8": "5FnNXpfRc8m6dhvbx4aDD3zeezMjChk4otAH7HZ6XUJ1V9HywrcwmJyJzkq4ziGn645CbnE7dcudrgq8BDLea3j2",
  "key9": "3gg9ikud969qQYJLqHojBsSGYXk6tLPHecVhd588BVqQHibPKXGeEK69QiYzFzRy8j41jnGhn53DBNXjMMDqGX7r",
  "key10": "Tg1ePeNpnxBWKSDJs21aaV8i3q7bSgDRZ5MricNfWBvvET7ukdQKYbjySZaMAXmJ6CoDM4iUfaWJWUaAPD2y5Nk",
  "key11": "2UQwDCxYS7paPyHJJZ4fDD6jZDxju7dZxqj2kigP9b1ZtWSHrJ5qAtsTZb2JagpsLYgTLaBtqGNmtU4QAzpZw13x",
  "key12": "2bwXVSCmmVkeWoFzffafbYL93kWFWSs1AzNgj5nrzYNuuxhYs7rfKuQNNi8MAndRhL9n5ipDGFQQPdh51Yimbt4b",
  "key13": "5gn3H87HDJk6a2xGGKwFjwkNj3MvqXhGEWeWk4cocTZ7tRSoeSeYotaPYanfmocwPsdUMCqwoXsHVmicBm6o3PtB",
  "key14": "4SVFA6YGJ1x8nGt89qmEUzvKtjHoBZUc8GSQ1c2enU1EvvpGUSjFjc4N2RxPqnDRcuWKdS3wtFEZr5MqEj7acuhA",
  "key15": "5C4neVFRTY5pUxvSW13A9wsvmEvfwq1XBy6Xtqg9Vs12VTi3SfnF28PdmztxfJ4KkCEH1NV8CXK1wmfQTG6DrQz5",
  "key16": "NcMAfx6EE5mESoYHJqRzudoUVWih3Pr7YJwzkB3oxRwBJZ3KtVyfVmYEoZyBZ8VnF6xRWDbckLost2Sp29jwCmn",
  "key17": "3SinfwgSMBViLEGcx6uWP61b64d8iRZt63yiPf648j3qNUTeajeu4vAspUZ1D8kc1k9XYmQGqno5nvuGqFZfbcMe",
  "key18": "33JuFrwKij595UYYhTfp3dF2oU74qPDRqx93GKnxF1UCuQziJvCxPvC2S6Cs3726MA1A9J6t5yeKMKzLCTXRu7SR",
  "key19": "xWN7ko1Rkh3xFPauQaNSeLDC2XEUCvsFwCsooLia3HSR3aB8v63CoBY9kpf2exyzcgBVxR1m2VpGAp7GoHK9wuL",
  "key20": "2cqioji58fYazzVBDAQgEUMVm1oxQ1HzpFFHBztpHFKdQCTJoH9gVGYg5q4BBv5UZ6hP2VSZzrFKeUFtaEUoi8rh",
  "key21": "2L9532iHNVGgEE67DTZUTQF6uHUndLo2iYKxJhx9YpoB7Ao8za3B7JxJTUbepMfQrR2JYCqMDYJgj7uJn1y6spYE",
  "key22": "5V5j2v2HNbXc8UShzYLGhyXbyraRvEYMzNX1VgptRCefEpTJMhRKhDgNoAGMpXZvyNWTwfe32uxqa9zSa9XCtqPS",
  "key23": "4RiGKMwKiJuy5xaSagpuBeuCrcD9br176aa4bqGp7tQjwRttEEK65WX1vRu2Ni7CgmxM5bNGu58R9VJrNfXxtTfU",
  "key24": "2bXPyb5N25BHzwyuJSfpAN2Vqg3u3tuP5upptvNVi9NUTzevnDNdEZzn5TFCNPUE1NBtKJivWgoqqhJYT9kqGQfd",
  "key25": "2h5awesApXeWx2pbtFcYPeG4iX2K4rM5AgJDVHrbtU6JqRFXngBdRuJMxih7fFBjAX7GkNC8jXbwfZinkivBfLbC",
  "key26": "YMbVhseH1dcGAEtHdwcyDJTEjXwuPrXcAMLpYjnk4pvUHcny8YiaSE3jJ566JQKHf6YShK5S6zSSN6zePW4tsFj",
  "key27": "5awmzgH8EESRPyAZwisK2ojZSDTiYDGcENRtfnRpRsdEJWrPnQfqAib6xiH8T4kvUBX7WAMr42u3c65GDo4So7qn",
  "key28": "5jkWfg3kE8xZdPLNrh1dNzQbToaUqCDShJXKLcJgH4hYbhKDEEyB24mVBsjFzQ76E4pvecN8J3EVcrTpybRcKwuT",
  "key29": "4fVHDm7xDZZB1En1cUj3PeR1hyqMXny8gYaHsz33UT8ZrQM6NwBGzVSRNRd6HNXcXFRLYYGiGi4gEqWqfj3a56g5",
  "key30": "BUv2JEbqGY63zPZg3JhKGmH2QFNu7FRNmzJL22mdfk79DtGa5B59JnePtD6KifN4xJAJKbaoGi3x7VThjpRYCQw",
  "key31": "49fJV9RprvBrxETUiVDjqGejpj256i9bMEnTQni8d5Aeu1AZikdKTczYnqivup8BijFh6tAh2fhDGMjgKP92fu47",
  "key32": "5CxtB7kaYEpDSW293wM48GaKWG5EtfbQhtdxPJTjmFbhh9z1nXidbmmCdccoBZdHAgPa2C7aoocMY7DXsbRxVzMe",
  "key33": "2Be95aSzC8Huk9iAWy7z4zG8Tgy5CoyvwftxWJee8jP7BU5Embet63shfDv5CaUySB2AhSZDDY5PwRBLY9GJPjP9",
  "key34": "4SYjaQT4CHfhP9VqScKhJzBsu26cREGSjaAyJ8d3JZs4NruJjqRsRGqRz6wXxgQYKwrQ5G72EP6zrMHibNbs8wq2",
  "key35": "5X65oLGXqmxz6ono2VmQUGwL6VnuquByjZQngZZbgqDFnMSMFsYwMP7WJD7A5mWvcY1fVKZYyt2pzekr9T8ascte",
  "key36": "2Ad1hXguZt7nLE2ESzTqh97pdLRD4oGNkbuUY6oApcPcGMosidjtU4MuzbQ8B8VFg6wddTdQo8uSaaJ4BQHpnYL6"
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
