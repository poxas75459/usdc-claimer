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
    "2RL3qKpMNE7L6Zxa4FDZUxHsX888NKY2BVxBP9nxRc1K8RKBxrgEgFRmohhHyoiHfZKmvst9PUUD6CuYcHFvpdN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rv6GdabvAUF321ZmELG3PZ2g4oqv3YRMTgwLuQGQk6GeUgdamJdBfiJACadFdQxFZaB6Mm3g9SCNbra8E9p78Ta",
  "key1": "5DhYyATYVfrUAAThdMeU7A3EqVJC1V4noqmfALabY2qow7HfarG1L87Mi3Ku1iroYDBtgiuSJanG9qJgnQhtFNmf",
  "key2": "5ACbmqetesMkCvFeMVGUe3cJ2BTECyUmwKcnoKu8QAWbpwhnyYdyQsGw9p17ZHT2CMuwc12A8qJmULHqqViiYqfw",
  "key3": "42BhvGiknbFefzSmr4TqP3NxVPWkxSJShMwKLHCQ3fDYfwjsMMkvmGr3KN3Gv9uR1yG3ioG3vg8iXnspokpndiG9",
  "key4": "2u1ApGfrgnenhHLcZADVYVfipgciuYfNnrg7BxiqzEAcrckg95fZr1uk6U9hL71xJAcvFnKEztvxKuYFGZFzCUZF",
  "key5": "Fk4msRSsvpYZF8vrbmEpmubkVidUfCiYV8v7buTKnHyDFLTdRYptqHeMgqpfGFzdLM6fGKUh2CuZEwSnbDN6EeW",
  "key6": "43TuDTbD6YmjEe9yw1X5LuXBEvBfFeCnkvroFLU23YtQ36pRSx4mJmeeRgszMMpMCXCCvA44dXR7RpMYAEWirUt9",
  "key7": "hA18nK1AuMVKUyyRX7vkRvQ8of4V7s9m4sUFw7VTqcUxJwMf3pTfgA1EfiKGLNXpLXZ5fkeAsyevaUXWd7xUxnb",
  "key8": "56oACyb42UAgjaDA46hwBaNWYiPcgu6eJFAi3ew5hVb2Kmf1idRdevsUS1q8VBfPyPdGUtfbXfAzqiwnCKkSU9aw",
  "key9": "5Sbirq5SKie2sSoPF2YTHSqwTSyDqUtrbQuikUK4e4uxpJfGNq228R2u5zLS2jVJo8j3r2sQ7n8GxJ4Lcb6cW2Tz",
  "key10": "411QPPHuQVbWpxaLexzz66vkLGT1gUszaM2AACbAQtud1B5RMT9SKoayj7hCxQFpZGCi5L7Yvj3r2GQJ9zU67mz7",
  "key11": "39E94vx5i4kaxYScVJ7K9vCj99s4eg4tbWfyziu8YbNMZNXgikaS9rStLkgx3n5tA5jB9SKLzLUW46FAHxV3zjvv",
  "key12": "2P54onksFjrjWSU2H2FbuYUZb8NEpkSWWZxeQHUF1DRuZb3Pe6GNmNnF4rwK3Fs4mLY1coKnTn5Km971ep7ksK5N",
  "key13": "4ixXaEp6nE5w9rf8NmbErMTvGHASa3shZ4FWLzt5qb1DgMJ2duG9dm1KH4HvYJyN8iFjE1dZ2PsUvTbcR8PyKV5T",
  "key14": "56jFvxmt7FGBkWtg8EMCDVioRooMLy1Cn9JoyvfXeP7Sf3a1X42kp9CcLgJhJUNizpfZcXYMBZX1Mdt6oTHaK5AS",
  "key15": "25crXQyw372B6SQDZoXr8ZHrjsVDt3F2AvkjdeKbLCDzWWD8ggb7S7daq7qfE1XAhEK4orbzBiHg3bX8zf6DvTfN",
  "key16": "3YnHRDf7zdEpktAdZbwyjWgYHHsMYkrcaU6Z2ReCp2fByhBszuVB3sGcHKBMDRbxRg8f3oDZ2d1t1XmWT3B3dhAX",
  "key17": "2JF5YDLPWVMRs6q4eFHid72qLHQMR5FtqBc6MMDcduX6ywtTSx5ySxZGTiC277ZTgru8pvwFtPg87msDRGDgenT9",
  "key18": "2ejWYCy5AmF321GDryToJUSLSQKUzXHgRzJWBMojTPtgEfScdSwFomxZrAR4k8AArFPqtN6mnrVBhmLzBn146ZXs",
  "key19": "4AGxNm7g1n8m1xPPWfre9QWFrFVNvaTg89v6bksk2TTLbktsviYCuK2CWwpnbMLGQgS7qKyEassjPoVoHJnimLnP",
  "key20": "46DeNg5DeM6Zhymq7MSnpbeAhomxdqNgu7NQnsfkij1Gdch1Xkk2C43X9TSERTXKzs4geY4pwh6ph1F2pjhFVafh",
  "key21": "5zGzYJ1risDuuDhkNohtpcEkG8HXTiYuMBmiuLYbRWLEMnWcr5toBF7UTeFSFXremzEW4MXoYtx5wgTp4MMQ4NgS",
  "key22": "PwNjLGU7WZJ8EdLUMNTnrV9qxTJiqDftmT842AcngSfKdT6rnB3oGEyFKHJQ3fdAs6BBqgDav7KoC8a5oQuUenQ",
  "key23": "58HHsBpEVgZ19uP6eX8p9NyzJvSHkXYfwbEaLkYhWZnqpHpDbZWsfQci6fRaFWESM32iXwtqxtYaW4zwgTUSzr1Q",
  "key24": "32Yr3oCzvB6oNUurakMCfCnc6hHiaDLvaXVsjcTSTbazW8rVudReVjHY3KTFtwZHQrkTHPNVHjk4VAYD3QTYpXzP",
  "key25": "56t9tCg69QdeZ8pKDrHEo2xfxYu1WPMvM3W7J3XVFnQBZk7u9Dpk2StG4LGBjUWiJKd64fc8mjDMu3d72pWEExH9",
  "key26": "4wWXC5KUwwuD9w8RXSq41xarkFnxXvXo1HY1Qx5H2faqqwdgAC1YKSZXsm7ULGprEJpnArc6LWCneaZZB5hEKTf",
  "key27": "4JNK4tjQtvwVw9dQm4jJo7UGx58qhdTfwnbSXTXPhUU1KuyvmJENeQNRPU6Kor1ejHUxxfTmh9NJwBUWwy6hKJxL",
  "key28": "38Umt45sHf67xduFn39oYeqGaebuR5EGS9XSGxmRcHXfj4qhqDh6y9iWhWphWBXxtmuW4YPH679qYAsUTSWZtkgm",
  "key29": "3D21RAytL75fM1swK9GzuyjKmHUjoroixSuxHaWQvkLHFJcKv3Yvyf5SZYNCcJobDyPmFeGmiik1DUriKFzjEbri",
  "key30": "3qn9PdUvoWQfHNVodhbYokZmWShDpTZ8KdEdPDrt1eqQWzLXZ5oHh73SXcUipVHNbHhwFbGkqqPodu3YANyyuwaz",
  "key31": "333z86A5kAXFfyJTQu8AADyU6UbRCw4ZV6dTopnsknrceTbrGFiN3AMkPu6minWpY2kSKU2GkD3DKLtxYdVrpK4Y",
  "key32": "NXB9W3aCDPxPL43eJzkZqmr2rna4ju6UioX4CQ2RzEqFzStT6TLREaYtDfnaYjcTvhYeTQcEzbwP77msHRFbShd",
  "key33": "3S8kf3uJXSzo8jkbjDBzTZVFYmr5WnmWzK55hqnfgHDPjRKjckxXNJ5gak64cYXZziqEKk7mTdwzR8atGvt3UXAA",
  "key34": "2CXWsQEu3mx4TFRtXSZEtJt39xHFy1PhghcNKqznswPi4C32jG5qvQ8AD9y4LaHuRwv1bbYuo9H2MAdEkNuYtAqU",
  "key35": "3UWffe9dWCB9HamkgdvNcsQRNAuAdTk8BKhh2BXjSbPhToy9TDQTAUt5hPeynvd3jNpU6muLVa3CdJQTUgtSPQYt",
  "key36": "5RhyrtpPHn7DZB5E53f7kg66RSeUqtSir2U3b5zF5i9BKZhRT55t6eyAGyaL5Pym8AtQRdoiUMYZ7Pvj1LKrdf2Q",
  "key37": "FqLWgv6F1Dn8c7zhSBECji6zAc3GBAYYX4TrpXaRaQgSZzjc7grjRb4oNTUnGko5cFjhNi1LHyjB8L7PiZs5TYQ",
  "key38": "3zZ5kGW2AJ7KEgsDsgKegxGMc9t2TnWj3yyA9XaVuGbJF4kRNy6hWoHf913w2h1SA68jt2Z4HdKW2p9vCcEXywZm",
  "key39": "AWZjrcyKTCkNj3eztRcvrt1wKxdoXoAK9rwnMzMrfRL5Z5DyiG7s1yQWMKMhJ2QEtNpUaWBFrpkUD89k44UEg19",
  "key40": "5xrXVnEbKA6ooMoi9PY2KRSdjRPJSDup36q5EBpNMUVcK1N9ZLp13eiDdS7hgoJMZN66bB4nHFuGmBwfdCGdFWEK",
  "key41": "wF6tW9CRWmys67V79G35s98txez7WeaGWdxDRczuBJ9Fdn4TdKvnj4hLk6gRHF6g4pxfAfBesKRwJmzBaCnJCwE",
  "key42": "5ac6FR8EFF9s7RpUGMW1Km2qz5ZLQme1ZGcKYXYyAYD9Me33TCx56KTENRg5F3wy9XPDCddzzFgsLiNsZYaL2LyP",
  "key43": "2MALu9o9P7VasmTuDD6q9hVVCfaU8h1TLqRnC9D5Xt8SKMXdXRERmRLa2o1kf74gV36NY9gS9j1zdQLb9yzVASVn",
  "key44": "gvZuhujzrD7vgW7aeJSmcRXRpm8HE1fHX8MDbgKBxSxKfeKgZbRnMY1QUortWwX26ykTroSecFC2QrVVDpFKvft"
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
