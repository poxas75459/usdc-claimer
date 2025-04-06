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
    "2Js8CMGo5taypV8kxFGye3XUnjjku5X8Uo6mdnJwyzRn4L4qrYooJBPJ3K7Zd6VMecjmPzskvZcHCsgTn3gJ7fs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3canFsgr34kctsKh8F3CHHs4fBZNYywqpDc6JKVUW43umYH56pNRQy5jbCZe1oRKkRUr7CNXcuFZQi46LYtXmndQ",
  "key1": "4L65zNULLXbjddXemq7sqN83VVKpGgtUW56GViL9G1kwfmu32sZgohKSKF9m3z9gexFSD3AzqbG5cfXLWgAqgaSJ",
  "key2": "JwZhWp1YQABPr4RzmvcLq1FoYv94xnz7Ru3DUx7S97scfgFDJ2XpNs7CSpMSGTyzifojmqHhD16jn5HMiFheykW",
  "key3": "4qqnsnxewQxLwN8AxmhdafXah9w7aTAyx8LQcJbc2wfttMVDRkTP2f7AdHEVsDyxtFMKRGKNLs9LGCaWpDG11EeG",
  "key4": "2y83h28ZuVbrAcTvXDCKctYHqFF7FDmz7z2W1asJcpRBUdNLhipYuyvohK29uPaP3H6htyVWgkKKxPjtUNWZbmTH",
  "key5": "ya1tkmgDkCD99Er6YXevh1dSWA4dYAjZvSPz7qza7WEDX93xJv1rW5eicgWth1AQK7NovZjzAZWh8bAUxaxtyan",
  "key6": "59uUTxq664P1WGKLpr5rRn5WPRjDULpuryYokgvZcrGRsnQtuRjwNXDEakpHSUEJyvBrA1xk3FA24x3C8FWmY7VR",
  "key7": "3BHq1PyeDD1iPegGqieVwREYByEnKaGnryDcFynKnNdAJxgDZSYtGrzNovEbhephkUknNHSecNViqxoVRysSnBsC",
  "key8": "4GmXxfKpZogLqcwh65pCa4GTWixzQhfK6smQGa4zwNKjqmKBQpbcRs2mJknAdaR8qPsb8LWZyaZe9xdB15jTygUx",
  "key9": "R2DL2mf5B8NHqMXQJ2Zk9hWKpkGpVymuVtDuQt3Yq3ZKF5dzBT7upnySqrAjtrAYgQV4nZYmZ4T14y7pGXX4jzk",
  "key10": "4Y737ZXS4a7oMPjsPQJyJeDTpGpzBqZnSJLv4waHPCJZfTyRNhunwmRXrVCHfZCsL6zZGPG1zkm53uixmnYNi8Su",
  "key11": "2uJCmAkZ1TvYiX66tcoGLmRSBGGn5GrYfmdZUQr3Nsq9pmmaFAsQZXraZXwdtG7dGY8X9YKhdhyeUijWE1Jb9KUk",
  "key12": "2xxCTzEX26AaYekCAsxZ9PgJ464XseihVGfE1sYHWsgBmrWrfYXGtkjFcUWcWtykGm5skCRReM67roDuqD6UbXBc",
  "key13": "2HsnzCUt15VoCGDqA9CmZUqGb2WLEjYiNngmedSfYGRde9PysPF9fVYagtxG5GX97X3tjyBU8fVbdkRgt7cFA5Tu",
  "key14": "5Gcna4jMPymFYL8DMweeJCoFDpXKdt7KPxoQzg7eYx7wKC9xZJH4eZvb3R7wQ3ebMPi1FhrqTtgYsdmDTxhKWT4t",
  "key15": "5as6k5iEKdduRESDg6RX5mUU7xtwroDjsSWVo6KXEqRdfNZSoymjVAJ9euD7f9gGZehTGfvoxrmELzRmEQW7NkA1",
  "key16": "43CsEMLjXHVgxY7W2aWgMMraFNw9ZMYoSkuAPvbLukFcri6JSH4rUvP1Qo1CzZYceCHJfJ7A2oLexZqKQD4D6ywR",
  "key17": "65C6Y8Dnp9Kn5kAaaCumrkjP6eTGrpZ2SptQ9ShMqnrDR2Z4nY2QJFQ5hc53XSSbSbaKFsAuU11R8pxAq5LrBabq",
  "key18": "XEvfMG9ZNwHFBWfYBirsS71T1cbCkkS7MyXxahPFZqu8H3imTXiDjUdTdfRmF8WFGtFJMSPd3jHXQdPsmvn3Y1t",
  "key19": "WLY9gf8LLuu3U5BWtzgzFNcamxoTUeiQ7xRkdSEZAWLp1sjtzbLg8fC9p9aSmXakKG1h3Wfbw8Kx9oYMdtDZFTC",
  "key20": "4tQuHQNtk5TtMnYphi8KFuj87X3ex6uc9fMoNXZbGNYj75XCediSnCr6izkUd6YM3RZxtMMvgC1PM6UXs2ALkDjo",
  "key21": "4sYrWzjU1eroGXaCiwj1Khx8kfqvVuJU2Vzhj4LfooE1NosVe9SG46CuDqWMRXULoqny3sRkZVAc9eB85PXtJQhA",
  "key22": "2xAQ59ZGbYV8rendBcXU3QqYER8gFXqua5Wu1t4tEZsMAQJ2JbmA3jnyBQ2u1aW3SDe5EyiR27sVq7d5H97hi7LC",
  "key23": "4j1wVhtr8eM8T9wwsYy4v9UiWJMc9DFwof9UGWbHcS31dHpCAiNJ9UtWeH5DbSx24Xz3rnFZJim432xVAPu9t41b",
  "key24": "3DQNSm1ZbT5g3X7Hsi7Xq9pmovnqgFTrsKDmfYW9MsgPmKQCBiabT1gt3acQhags9nGnekKDQ8Zc4t7xD3wfnedF",
  "key25": "26jvzN6N6Y998CLZjiawJJf69khQ9y2WxZidMRpqaqeWB9vA2f8QxiePCX1mC5oxr5yTDhqt7F9uf7KxLg64Pmmc",
  "key26": "4vVdQQg9kYVyTz67wr1iL1h18K34vyB8WqTyYDGM2kMgFZgReJrSU7aqhLVVn4iQLAGy3RwRF8tmBDkRF2ayMNtz",
  "key27": "5TPeg9LkJcSesGfUi7P3wp14URKCR37R5pzQoJvtshHYtnQCsdrZ6dmdihWHtYynTmzqVfWXDuDmf9Lm9fpsLe6p",
  "key28": "U4dqoEbPHQHTqWUX1HCFSq94CqUxQK66o838vb1Uk8DGzVepJqtGHP6oucj98oXFLynQzkzdeymcANYpmfY8pLT",
  "key29": "2t9gEeg2B4aWUCzNmTVnxuQctkgDqCLNXfo4HjfLGbHLbbpgTKveqgFpj8G2jKkLZBZdGxWCf2EFxxWaNDX9H4Bw",
  "key30": "5gANKQzUX8YhLXHmZePcW1ChcWr1RKia12XZZGb7w9rmTMSWFxYqwFKCdzgau4dhFV79KFihcUd5ZUEkpjcW7tuX",
  "key31": "3qJsMU33ZBpi4pUei7MgeyHjmDyvFwpumQGsEdz9qayXE6P5ARv8ihyztpAQEYF33CgJ2H5dBfNThawEhLvH9ovT",
  "key32": "4J7dvmJq5gCa9uYoCxD76ptuD4HVzxUgQTbK7y6Qcom7z6L3idicyu6hHKFcMYuwtaxtpvCYy7U7BKePT3UyLkJM",
  "key33": "2Dx8wvXVz2U7QZ9BBVP5hY2G2EwzXV1j9HNnLTKUz8Y5HD8GNj614CGFDEbQxMWXjGsyBBKcxhMXo1pGCmMHrVK",
  "key34": "5M1B3hfpzsi8c1vjujjw4VNsiSq4kwRvBoi7iFmUcteh8EvWiR7Pz8EmGaCtcHahTyierZXBqPUQVpDCdrN88bY8",
  "key35": "3QF1yZoAn2nMuTENvwe1DXr6nrcdW1zPf6ejBpJveXDujM9ZPhLxapKwdvF6FKMbLDnCAb1ftNvRn1AS5HsJxo8C",
  "key36": "2JpxN5jCPJ8S19N2XN8bz3rE17Mxg3na8Jw1QSVKiqx7nk5R5zTuLAwGHCbzvGNxK2UJGqff27vToZ1sKkjFLs6B"
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
