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
    "2uUVGJN8tWZHyXznYLEtXgkfj6MQjY2srJkgLstSoBX7T4e4AHQRkoXbgdS7N3fPpTCmsGYXZ4PoQJc3p79VDLsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qjyfzNLwc5xGC8KqDdvNnwANDaDNjBnfX3ixGzv5n2652DR7u83GvJwRzoYV9kBfMYCeedzCbvH4uYnDkwLrnrR",
  "key1": "R5DuYYxPc7mj3XHXsWg6mQ7FETzipeRpB25nEphU12C7vPLccDbfTVHzzcegTFgtyuJkRW9WUsc1CPJBfTt73DQ",
  "key2": "5g6mDxdzGSfspLQxWBZXRfGV1RRWWoX5eW8msVQyyqxZznjnmNugwC7ixRcWmdwXMwgyy9pn8obUD6coV7DDFF3s",
  "key3": "3q3ixt3DmMdTvq2totLs2gCoiatoPpEYqiqhksLkaB9stVpRLtY9M5YqAWnZbUMZpLNxDbfLqGwNsoq9a3nTfSZZ",
  "key4": "WC5gq59SUtbjkfPZotgDUvphvp8QLg6DRgms9yWzYAdiFH4LD4soVccZCctBhWUg5SXHwcArvCPSb7JDJwTa3La",
  "key5": "4jgzzpevVa7aVFcjtBz1DbYwMQsSqXGsxd7FoFnDKhoBLmFstCchA9eRGq86fDsVcH6SWRszAZLjerFa7Jie5J44",
  "key6": "2TcProQFRYPdP8ZhQAC41Hez2EZJTrDghC5ASFj6B94zfciCTTMv7V1Nd4pASHdF5WaCsYYEUZBBd789RXKL7rHX",
  "key7": "4mPENB78gcvjL4JTJWH852FPXHuVaZqmQgWmSP8aMT8F3zRSMLAwXWn2AwB8qDb5STjxu7RGD6VMAf3KJGVmjgra",
  "key8": "2W1t8AQb2L2K5FdN4UvekMKcdFQCYUEdvuvtEUAV1q2atWFv9Ep9SLtC4N7o1nbJ8iigYBD5U7Afp41qkovCK2L3",
  "key9": "4jSiYWviZzHR63P1fuERjjaPzJAqXbpuDz6w8eEANBHq4vh1DJfBPQzJ9wsYuD27p7izjAB5ecpBph6TfHrinMwS",
  "key10": "4aFFnj4yokdDMkAvezszWb5CjqfRv3rXiYGRfm6PF3FrgbxHzZuQF62PhCk93fEHx6WMGynTatXxk87WUc5sfVSD",
  "key11": "5F5ZKxadmSNCChneSpfPHF37igcPV8jgTXq94y6v8KQiPZxMZAnLods6mQJcSp1c9bdHwYWsQ5NnVBNssEDjnZCn",
  "key12": "3fAsxQcZkTsnt11PLTjkkP8VGvFf2s6S2HTvv4xnCBiVe62Y5mjsYsxLGGYHhJFdJJmNocZwR7ZvgARC7w4XN85z",
  "key13": "2Z4UYzMgutF9VehUM9LMQ28Db5oxAZPP39eaA1w1TaU43dCVxUhVARuHchbBJZdi6zriqeonofpNk1DE1tLvJyrD",
  "key14": "TNaLNY3DWsFW7Gq1qUrbUfVtz9h2BxGhXq1ktz6xFYyHPQdXbXZ2MJT3qcT7dWAF3ZWK2Ez9AAJZ31srDuSde7X",
  "key15": "4vMK3GQCsAH2Kd6xsw5L3jhQRLwwWsXzz7VXU81ChtcjJ3vHffZGMvvbM5fnYAyJQAh91QJd7mxtsVegKaCtmTQs",
  "key16": "57pCjh71ucfvd75bYFQyWb4Aq9A86efdnTEChmZTaYstgkXfKKWMzuosX5uiTiyznsXqBDgYmM7J9K6TBC7YMesd",
  "key17": "Z7BZeK825CPXG3X4CmVafWtvmzNhWbCk9Us6bgSAwV7kDk6tQrJKHHFRZsA98NLbtDcMUyD1qbbYA9mkPmYqvTF",
  "key18": "YFT5YadR2zj1zfA35wxdRpDAZ7Nk9dgHCJdwMbZDGfP1yrnTpcJUs9BcqawT2R9DGbhJqrPnpc8Vzo3gKjF8XGo",
  "key19": "4m4Hwc4cx4geFFzrZQKzDxmRrqQS5nzwr6H6hp7MmXdJyFi5HVVMZiVCPkMa4wKctemKGxe7jYy8je52jtxS9UzM",
  "key20": "4UoXwqmK3GJhTBEB7zKwj5mLgGGcEKMstUDh736dHKycvELqMoi8za2ySGox55o2Gm6CPAdWUxwoHVwCEGp1yDgR",
  "key21": "3rLFRKroa3DvqSvPdWRe2gWZqmYx5oncrzz4e3eAJPR3RA1mhhb2ZnZZftnQUYwYG5pJ2uMeJWv3T2f64fDJD4qs",
  "key22": "J9gGM24nJxbn6dBPUAQHLQCeYifqjuQQcLSAVJ7QGiPXSiNFD9Qd4Rmq13e8TCr8866B9HyjmATnhZ5XfB3zQQK",
  "key23": "3MicCLWmUKZqYSKfUhGQD6A6edNm2AKa5oJmqkHKd9kApeS4oMAuLKVz5UyC8j2c7LPY2gqnkPGUuTf2nu4xLMcc",
  "key24": "uV8ZBaKSkr51sTL1GwNMTAZ81RKoq6QX8G1G31EX7w9Dqr46Lgz1LoB3bGgGEQvwQ4ziQtN5eLdevwXbeBdW9KR",
  "key25": "54BYeYdxhgWd9h8mZezK62vTMPzjpLaoK7drfbHLjrzQpB2hkYgwazLYGBp8f3QMNYu2BFbuUhP5F4nvZMtdiHBb",
  "key26": "5uoHAYCvuUwxG6FdCwEbk9fFkBsJGH5JhQBz2ofzGk72QYVj3NRpGGkSeAMWYh8SA4VnZizJmx8PG3k3N8TF52vc",
  "key27": "23ewY82fMVumSEDzUojrnetERCnkhGmKPT3d8HPk4gWLFPGUNWcMtSLqR3N8AnZG6rPSCtqWDwA7FuwuPDVrbZVa",
  "key28": "4rY6zEV7xtmdJZTdaeFca29VRDov1prcSJJ1MQSBBNYZPk8heWn2RVQYG832AZHgbBFPMhooUwXpLk9yTCZzJCPN",
  "key29": "3EwwaYxcE1LASyBSVbfmdHBD6v7yZmkNZKBz6mq2ni4Pu4MGBoBGcjru4gRW5iqJJBTxYgWwT8eC13b194rTrUhD",
  "key30": "4qVp9Sa7TEZb3V9ntKbsKGK78FRGkG7EngomptTsLCW6WJzreAqCSyarxkT5qDBPG8HSJqaFgcV8NZ3HpGrAib37",
  "key31": "4GDsCZVHT1MwNNN8AoyK8u4ppX4pYQr2NfH2q9m5sYPyVq7P3tm1eWDKReAVStfU5jBaYJEkmtuzvZkp27xB37k9",
  "key32": "3okjvuRDU7yqtQnpJbLYqKFf6h3piJwyyYFvSG23zvcSzceqMe5SzNaFT93WAPLsCioGRtsB1aZTGbcWi38Go5d5",
  "key33": "5SBRPAVrMrWwrw5GDwcsTgMk27oAuRcPWjyGnvzkLeY4PYAe4cpFNq2h5QRFaz5ExTfXSXfYDiLdUzdR5aevixzw",
  "key34": "ic6TGWt1BuBCvsio2JubApZ3oYZFWJP5QJMFmazVM1hDvYA4cLRRDiySzBjSMhTXubanZ9cPmdwy1aLTPYX1nnR",
  "key35": "J7muSpTFUzzLBnpBtFhMLbjmyAcL3RxHkro7MiWBc5gZQwbFPvUXn3QfdGvXGW1zjDzUktQzdgxrLL1xgahSJeh",
  "key36": "2rCtm5YNLsm23Bd1Du5jUNcnZQKwsaqvuyQTMPaneX16RuRqtbKVgL5cEtEmhjScJwdARV12QjpY4na4X9223Mtk",
  "key37": "5Xxg4XZhgGcJPnsk6pgAY4DXzHHeREyjsrunfBUSSiEMC8ZPnkgfqXu9TCLQ4HcKc7wbRRHxudU3RSn8CZkoFSVH",
  "key38": "AVpm2x1BfgirLgYNoxtiSvGVcF4rpauqA2iNp6pus7VhbiNLeDX926j592d3f9HardZ8pPEyUwr1b4CBhcDM7Zn",
  "key39": "4aZuyxdVtN2Nz3q3RC5ARzqE3ZyXH2AwQQnodXhgu3W9CzF4guxLm2JgztVQzu5E26E7fAMb1maKtnafN38CbDeM",
  "key40": "2RUi5KY4JRvyhf276FFjtuXwYK48m1np3fxxfdRkyxKCMbedxQRWLuPHULdvyZa9YbNmjqeDb2NKd5ERmJCeHJZV",
  "key41": "4Beu4nXnJkZsDqMDXWaDrZsrXsshHZ9DDVRtPErn2CA94V3gWFbVdrJ3XtjqiKuTUjMPU1r9ZAjt9NKVo5LYvRYt",
  "key42": "jrvfZtpBGSBHdxEE54c2tKHQmbGpxYAAKPQ1vtujGd29Vr8J8LrxuPGTpNAArAzqPVxHD4zREbWTbzhXcmDCwR4",
  "key43": "3VoVh9QAdBmA7pdNss2XMXSaAytYdkH5oE4efrfhV3LNxYegssDdPZbQcSgJsuoVYdZMzP6AJBqMJpBnwXFxEQLE",
  "key44": "2wWXUnbqjmauYYcFcKEkSmvCZJaLkK4cQhLk5we8518iihkiswREfS3ZkNNRcPxcobRDMztGdKcqBzWg8xUfJnGj",
  "key45": "sCBByi1Uvdoz5QZwLSpfdQyQ5nZNYMXaFeBJKpMUjNd4vxrSyo5rNg5ngZvJxurGyx1oTgs8DPK4kUAMQVjRmDT"
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
