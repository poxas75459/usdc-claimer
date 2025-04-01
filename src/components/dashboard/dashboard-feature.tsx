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
    "5MmXgmGKLnjdPNRA5NbbtFA5ZrkexPZmS8F6wtCujo2JHxnYgsy8znqXw7t2bpybyDhsWg7gbRMwECM9E1KcSmzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KQBvt2SBQBs9G3GcFRzAB6jsbRC6i18RBtg5U8ir5apQ8oHdGUCMf6wEwrGKq3gqVAh4Qj7smcEqkf3HHCgmQq",
  "key1": "2ENQurjt5WQiWXTc4i1682rrHcs8GwBQH7zcY6WNFkvQEcKECGHrDL9i26Gno6znvGWwT7rWaZmKPrSyMjfvHC9y",
  "key2": "2pHqVU85274uDazHEvUM1kiXAkTHUWCNhB4pFvqm5cJhCwNCraAURrEXmJgfNm6WCCd5tG8QbVLQfkAVsXZPUayM",
  "key3": "3FBLFVvrxgpAeAjqwJN3wcbWv7ZyC96r4Shwyywnzcveptcb2E3AUhKuTE8VoCaZbVzmG8NDeyMPaCwJ9DC5iaQA",
  "key4": "619C4iCwXuashL8hu8Z3npj39vLRZGZdSh4KHxa4yULKPVisUYEy9pjRBqRk7UYJkwkXdy6KuiTj3KJjupQs79v4",
  "key5": "48BXm8YYbLk3YrqEnK6URG8m4Ex7V6kVLm9mZN6xsVMNNYK7K6MvXDEutphQEAd2PJkPoSDUHMW7Mt5n6dJteUfK",
  "key6": "2SuWL59a2JbosQveFFdWJvWSeV8s4g2PDvZaa65AV5pWFxKYtouev8TgBLN3Y3o9mY2hJ17QvERpKEgrCs6Zhmao",
  "key7": "4DAq8irnQWKvsSs7W5N5AgBGgtmL4zM8ADJsL6onogUw4kVXbw2AV4GdFuf8THMs6hP6wXXmVbPEdDAz2cGQMxX5",
  "key8": "fGUBTLSjvjjJYHTcRVo28Ndbp1GBofSRHQnVrGiebrxURcDwiXDss3SWQgGMNWPw4ciHz6bVC4UtKbVqQVkotLQ",
  "key9": "YtbSV5xX2211Ysk4WahRzbDfZ1sXt4r6ZnHTjXu5kNYZCiuC9XfS6wvedSUDjFkwWyEQY4RXrPn7DyDMdDMyb1e",
  "key10": "23gwSTegx7LSx5zZ4Qsk6yoxKP9CFZokyjHo7974rPRmw5ev4y15gWomPZhVXhC9beDGUKe9kuvEq4eooSfRDKhb",
  "key11": "3oPkNqZ38yKGAdobvnaeiHzDpK7UNNGrJ7YdfJnKhyet7rs9qCJrpgjrmJHPRXc63ZeD5uLQt7HUXQgsnS6LwLgm",
  "key12": "2oeq7yxHfgvN6HrKTTc6Ui66s4UJvtoeK4zV313DstFchA8rvbHd2Y9c5Ete3hXt8smhZcnXJUevbvz1Y4omK8pE",
  "key13": "ZruswwDQ2zkKUmn5guLfEHN1Tfkh5x8sqWPC9CbWP7wLRWPzG1BqWCLxDwrcaB3R3kPHczeW8ieZiCXNNh9RpUd",
  "key14": "4qKQUHGPomqiLxSugStEguDF1iZRw5SeCkiPTiCJzJ68Tbb7bC6VDht9DEoBgJrLauGD4HQbqoRXs5HXUB4An41Z",
  "key15": "5tZnWzimKFte2AimtMrmm49hy5SmfPZxdgEvp1dHChjRYDJxZsxNwNULzTcxeu5Wdb6FpXy93nwFxCeQ8rGZTCsS",
  "key16": "3e9fVD9NRrpo4JRebgm9VvuAJDtJcQoLGZSURfbyo1CeqSWGNn7kmkXqdKSVCAGvqP3nnP6msDikbNKnxV5iTzzw",
  "key17": "VgmcNVV4NW2SS3ubnAzvtnTEG8joHG24E7v3c6N7V51Hu8jjveEqFapCp8VRuWrcfVesJZGwUBDskerWUoKEq2k",
  "key18": "4BFTERn6S1MPgf8refSpgEVZohjSQWryjXS2CuuZw15H1MwXAKM5sGuDPHbvN549z7h62DBXKYwyA4m12jBpdFwV",
  "key19": "45H57tNwBW7oFXE1FJWmb4f1MWq74H5Q1VuLhLDmVZnpxqBFW1jdNx8B9Cimhj51K7AbBjo6Gv5zKE3mUtZVceB8",
  "key20": "3xwQAo4emagd76ieih5rzKpoozDnqqN5pcpnWTQGYsx7DyNX7ZzmPtD5YUzrYoLNBWCS8JiCP7dRL4Dt1Dn56G4V",
  "key21": "67ePfpQ6u3Z3UyFFxVrShm1wuPJLx2hgqZw5zY5VP9DaMJ2S8sr8Lj1GT34hn4Q3r8y7aJF21BR1AuCAzww1qkCH",
  "key22": "5R21YaGb9TWUGwSC3teGUEuqZ9Jo3DFFXC22rCFAFzg3ytpzoKBHBzYFqsPdGVTewSFP3odRMcsaVeKCwKWihD6u",
  "key23": "3ttH3aS3adHnWmYXmDLYpVVXvKif7p7GNzxz9UskqvtW5GPsVCuFzZrny1LX1edrzPR5qh5HjmGX7b1xeHwqiieL",
  "key24": "2LzfDrMvLasir7iEpWhdBZZacMYgRneafAeEzMANbcCWUdHP8Tt98FAeTLzBh1ocfRWHMZvZ5vBGVNPcSvKkyMjE",
  "key25": "5TiZhBMDXps1XrbaXcd8ouLnzkV3UAT9dcvB4gkJuiUqxZuAUv4tF3RekcyhiCmt6dwpLGkXNdghBcd6FBDkoJvd",
  "key26": "3Yx5tpR7VGGPjEVcgeuVuFfb8m4vRC5uZDRE4ueNsowxNgjttdvRNUHxVYHTf6gMLavf4mkqSCbcMM8XYNourSMh",
  "key27": "2AxZq779tBd4MeQyCrZrbnHSN6gsoXHF1TV2gP6ohsfhyo8bk1SU33XCqehajixrgwRw31SN4zgDnVFM4TdfcdeH",
  "key28": "2yMd9VRgng72JqusaPBrf82cBwLxDC4ML1yEv4DPMvAawwWbnKTYqCvELzQFXuTHtPWULYw3RWoTDWHir7JGBKfC",
  "key29": "inSC2gTpTBU7TAV7QAmhk5ELAawF9ndJSxUC1Z5iNgb8yw3GBezYXCQN4dhrk9ox9eXUbNAmPbrFdYJStFFeJm7",
  "key30": "2m87Eo9dWCDU16NPFn4SkSoUV9CuwFd4gHttGZjtVgDzRZWiVRjLXCb84aRw2gY8pdoSfmssy9aY5JDR5bGWnLb2",
  "key31": "2c4q3ss48dDWGWkgayPis4CJXt1QrEjiDAkTdMjWfnjhVE22zM8hAvmWPeh12bjFZ6V24S6Wx1dpfXxzBBBofcqg",
  "key32": "hwtZLHkdh6F3HQUHJryqhwMyUjJdtMyoLF9iie1DyHHqHQFmgpR5Jb5j1htchMSpPRzVbby61Gq3f1FXbUza1tV",
  "key33": "2MMAvqpDAnjaxZPfUnRebJxkswHY5kzJAnTMTW3wC5P1S9BB6e45CCbuH8R6JMrFkgLuMEABrQEJQ2UiqUnS2ucM",
  "key34": "4z4Ftz7Z9dW1Lb7BxVHMRR8EW8VEVMp83kATHZ6uH4aLbAmRAGWTg1iLMbmUbEs4kPfi5jniuR4nH7E3GfMKRwpa",
  "key35": "2o92VJn9q7PFue6NLyK9wgX2xZZ9U9AQp99AY6Mf1a9e7sGMNRf14XHy9CCKARRhmvNLx8ziZPhPAoVPwSNGLx6H",
  "key36": "2nSvgQx7xgPnEm5E1dG7EtJ9urtCXRQDsGMNJQdECMkNiJKMPKcR6pXxGFxMyLWgQK2KW76Fjo9yFGp8EYkiPNdg",
  "key37": "67dCpqZZ4YbB9VWtCA5SCugc18ycAbnQrR7hL3LTeqFKA5hqBdgkz5zZmKRJMXg1J8bEJoksw1MjtaQKm5tibj2N",
  "key38": "3jKLZPHP6hK3NBbTnFcS5ux8AKutpKrNGyVJzE2dzvHFrY4BAeWVRVJAA9JJRNSdqeBJY61He5oTjm8tFDREVoCi",
  "key39": "5yKXpb8GLoB4SMiCKS3JrDYEBwyyVqfz2QtY5Dzzsqyuk1kfHTZZ388fwEutEuBaLVkpQR1qGj3XRkiZnxUZaxBE",
  "key40": "2tiQUr2oXgYoxBRQCUTmdnuXjZHf6r6Y3FXwjs2y5s34Ms26QQnbtPcmGYmQ4s7Bn7wLdLF1rJo2a3n1JRtxG2rF",
  "key41": "2KSQTSdGpVSjtKEaCBQKJC8BXNNZLfPRPtXgEqTAymRQMboD19epTxt3TJUKnx9zwDUHqUeLAA4eMcHi8v8v2utZ",
  "key42": "5GwLDa5hVGEGHTP1RJv853RoDjThVhaFPLUjdq2jkQ3aAEtYkexdoXfQJfk6uKsokarceXkVzBTNiW7715BWy4Rj",
  "key43": "5UB6Mp7Rbe9Gh53bLLArqVVvXBx4YHbzfhxWs6iVJ76L4taC4TN45WxfvtFQysu3syfLAMAkYSGoZVyV9oNwkywp",
  "key44": "4fmby8dUcS1nhS1riV9oo8EXFTvpmxcQ3Cu6Ujy629LuxXMqDAxiBPfMutXqdtXW8KTjTUQvm6vZpdJdvvG6Er2g",
  "key45": "4SRXAtEb2WqEY6e13T22djbQny5Ju967qtmmyXjBXFNi6MpKK865fGqEC5Rjds4zZVUHpgD5qjpUBFDBqwZoRSWD",
  "key46": "v8j8EPymetCcWZcVgJxfg5eR3dqF9R9z4YoztpUfeutLSCReWDt2cASngtPHWrmPU8fTXyUdGqAhdMynSFodPAd"
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
