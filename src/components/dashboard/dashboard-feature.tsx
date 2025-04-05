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
    "39nuqJ1YapcuGcmPGQgSUsukwZJmQZsSwjvJScArDLfbNg8yya58xBLQrZADrvjP9QHBvbsuPutEG8XixHLJELTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61fHYdt86CrgdQf9NczxN7wwaD5zYnVS3p3bTAxzTUE1GDM8n39qipr2qKRJG3UeHTsJE4Qo3KpwS7EwqutGb7jR",
  "key1": "42JKBbJbBKjuevxWMgXMqBkmptayFCeRgPE15s57ZU6wvfLyAH4qjn7vvMt2XEBKWKJs5kf3RwntuVC6ZmvYU3TC",
  "key2": "JaEaGYS8r3v5A5JPBAQwrPxQz7zqveAqaFt7NNhs83zRQV1HK3nmGf3myokJ7dGsvR69NZzsyvXkw8sdwqvEyFh",
  "key3": "3XT7NhoDNxKrYgZU52nKSqJsA75orERTLeWXfvLGtBZwbfiBgQdCRKp42LtNDmM7NgfzkKgjoA1D2FKizFha5XEE",
  "key4": "3SiqhRz4RfK4WDXYLyKFDCXJQczsXMmbmumV15osmfZvS9BPFQio1hEymZzMbeosNwHAWLZCoFSemab4fcTxVqZF",
  "key5": "3ep3aFawfeSrbPfVGbYie1PVUe2LXmv4E1FV7Xxo5jW4fyPqxnJoAHVHsyASWprTKT5eYyGuAy58WJGAqXZnbpSh",
  "key6": "2rGmqxiGPwK48dxnXmNWAp26KtCnaX3MabRE8BXGccGGeF9569o8YATkedneEzCGJuw9CeLrBJqGusVAyxvw5jLx",
  "key7": "4aD8B6Kbdymhd8cjizemywzX8opN3TfdQ1FH5Mt4NEQH3tnA1SFNLBBKnZae56cJ9FaPuthxgRnisEPYJYh4swT1",
  "key8": "4H23rX6jrSsMzQUrdQbeZ5f5p5irG19XjJmqFvXAPtEDwTESHXgeHYHXZnnumMj4Ydg8wDARzNptW1bHEhzU5SWS",
  "key9": "2a16PdxDYqZBK87cW1SqwVU2auFVATvCouednSTCWpDynStVVrvJcEA4FzfZGrerPNq8oh89iFXDAz8NWz2qu8dY",
  "key10": "2zkJvbY5UhXki9bfPMJi3RDY9Gf23MtRBWA4sW8mChPQ69GymnEJ2FtFxCP73LMu3aFqv6UcMRwtGtvcz8oHFdLy",
  "key11": "2xAinPW9bbWkNNf1WpFkWM5vpJxoYNni7K2RYsTeV1KkEyPrZ63Xk5R7BxP72v1hFh62EwiEvwGxnwCDgfzAVFaB",
  "key12": "3RaWsFabYha1mQHEGsjzNJvR8DWTCBNRvK1XR9z2hqiPTHYUMugPKcTEDjSSZ8yWbFhivSzemrmBEqHZDEAWe4BT",
  "key13": "3oZdcwLpDsAVXy1XrMEHzuF2ADf69xwzM7QaeV3YqsuTr3BVKRV6RXXgk5eb7EayXTHSg4NRBNJrTjjvysDPZTap",
  "key14": "55eqkaKmqMqYMXQ57Wv8qCJHyWaCpJxo6kP4tPTw7mneXoWcdaK9HHJ3pEQXViBhKDbELpmMk6AfrNFVXAXnxoug",
  "key15": "5ZbubaQg31X8RR6eGdYcojkFkCSLNq86knLB9t3LsHKTqWAQRETaXRqKRTMibSfhzRirxiC7pR4rNxiDxSwgMjGu",
  "key16": "23AgMw36Y3fcibwJeJTrCkXKJjwrwnRQv4bkWWf4SvrUiwmcznwYMdKR52U3saNqj4jb6Pc9rN1LxwrSii7tbZGi",
  "key17": "KhNCParLGztV8BT245tYURKwsm5DCMSfUfxE7QV776fbUdXBEZbcE5JjpEMJRTQC6Z53eyenjQqCEMCxAJ1DUtM",
  "key18": "wSsxvd4xhvA7nAeaUVT2FbGrt2AAnQaZBNi8Fm3cFZZPkSZC3sRGetH2ryqQJfAaeBSBnFij4qvNxK9JUCbYu61",
  "key19": "5Kc6Ljh4MEC1aRr9rbekDSA8kokaTqZBrxbHftV9ixzgQzkiNeDbByjEPRL18tsnmKyq2XxbBf6HAKjg72Mh6fpx",
  "key20": "25tfmCS7zDYhztpZmuetZzPrreKkpnk15awrD9Q4JivdFSiwyF2EpEzyCLnmpYgrDFfStE1DmPaDgoaHsznTRkU2",
  "key21": "2cM2DqTCP2D5tgmcZ3uX6tTMLxYFoaUu4uXWwQWakQhUAQFVUFXbyTYbuXtDVXJGG8kE2D1F5x1ncHf1SKKgays7",
  "key22": "3JQyqMhanQHBPesoioMLhV8m6UV66VnzEiA2wNw2qgnVfEoJoauxGBNjB5VsqhMTd2J5qhiAEzFvr38R2aUSvk1T",
  "key23": "5Y5dyxmSuKK6NeDvbEonq7nmtZVn3eLnztHSvmpUqZtdUedWKRBDMRJGyFLDZrDJqrgbYq7JrSZ8WQodNF3EMcY8",
  "key24": "34Qf2HTfFZwbLchJaUi86rxotrMJY4PEXhV9feJxkc9xsjvKPnb5w7QeC9LouN7PRsjToqicsTJfsPpZLcw5hvpf",
  "key25": "3CM4mHUaqwQ8M9sS9KbBJLfBHn6zzNwNk3XwkYcBKzAxt2w1Nu9B2xyj46hEEhPxrKvHdjAU1UXBzYyCed3Xdocv",
  "key26": "24iUNvTbBpcUbouM5X2e1G7ax6pMakrp3TVNLGVM3XH1XLCrrhQwd7fNcRP2yhD4guVYkzbhLXeJkxuYsP99KrGz",
  "key27": "3zAzrj93gzavm9xgCydGyXY8VFUi57r9VnQhekV7NHwppfaVi15NzPbhunvz57fgs6xw2Ki1nwpowyWoFkGBV1z6",
  "key28": "2m6cADBXEUjKCemc9f1KmqZJkRzkaD9UB6wEfTC34W5CVfVpvSu6H5VwsFNYdxZ1HN42Eh7R9Y7BymZBCfPdtUg2",
  "key29": "4Cc2y24kTWVgxgqEchu3CaQm4VSFQRLGKiYHbGbgKv1yUcxcMDPqkLva8Heqa6oStuqRTG2Ahze8PhuJpzuB48Sx",
  "key30": "2CVfqpwrCcmyxo2qCHUJD2GrzCiyfDkLfqr4MKAyiWz9DRYbiZkxKzwkTRHUhf3bxZEw8KYDci2RGAWiEDCBqYnU",
  "key31": "FM3xQpxzfgFHL1Kc4y9kQVoMAHXaMCZ3FtgbigtVJEpCaRGAQG8EinbGhd2wJbgRSc7CXorCxJdwLSYE1EwfQAL"
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
