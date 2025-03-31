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
    "55nbzNvK9CQbFkk3rTdpoJGcdEz6hp9TfoMuQs7GikbUADSwuvyeYtVqasWHLiJXgrYLdM4PgwEd2bNKV9w4qqFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mXv621SpHH47gYQ2jnL3LirVkgqRY4yBs7bATmFmaTBcEryrac4NqMpf8n7XZbeh3syJXiAvmNN31Ci2nspaTZB",
  "key1": "4EwWYLTHAbeqrhLM8iJwBS97xzWmf4ARS2kGJgBW96sFhTPDo6beDgf6rVBU26sr11Va6Hq5onk2FD6XtqrVxShx",
  "key2": "4bSXyFVyUu4gArHEyKMiYvT37zi8Jt5Ep2B6G2zknPmJzVgwfYA3i57kMFQyKbq4Ljs4enhXgo9qoU482ASMjX5o",
  "key3": "5dFtYHbRpZGEoa7b2jZJgVix6eVgfL8mcyXdYTbHERTp57jgfLMn67faPqXxGnRACnPmRUJJqBn6KGZ9yGfwpArP",
  "key4": "HAMwnc9eXdXsqzr33pD1ocDdy2eN7PprFBs59J1zBHbBwyYpTZdydkYTJY9Tis7kiEkmMr6LtRMCSuvHJ6M7RVq",
  "key5": "313eYjQMaQFwJHPXFhvcogBtdSUQgbhA6qGh1yNYePa52dERGkdxi3oqmFjndwXkQ7sLACTLkqX4C5zjwUy22uyp",
  "key6": "5MS7WZrL3AQsQvTqBf1C5hmEzt15Z787muncq1VZKQYQr1pojSoNPVwKzPBsBCvvBQZBoYdgpLZgtXpLBgt45Aqw",
  "key7": "64Vm9CjwBr25ku7oBV9fuK1yGWbxDXAuUNM2HtnQmJPu75yKqjFbTiz7BH454mniT5q69rA5ALB9nPNcxoAZguRK",
  "key8": "Px6oHi6gfXoBuorrLLR9ooNip5fCaHK9Ln8ht32fmEK2k81XUXp9cwENHhjiEu1TViNR8BGL6WXkxLetAQ2H7Fk",
  "key9": "3YjtNg4g6XMoPeTq3mS59ELY8nQMaMN2vqxpo2FxaMgBZx8XDrGmdtPupfDf93rRYwM8SPGCmmE6Ywa66VGqrtYY",
  "key10": "WPtBXo88bsvg3mHXZK1Z37kmAF8QYuedzCfLkuZMCbhDH9DcGhzRXYhxaMczEQ6DmSnmKwrXMUzo4W9uYVaZDnu",
  "key11": "3LfbsPMpahkAnCkqn7ys7kx3F3Q4986AQwKpRA4PJt7tnJCtyJzK5gsUWncotXgmFAHypizZaC8G3QvvyU2MaipB",
  "key12": "5JZmJiYv8bpcuPyoSyMistZYVyRppryhM9Q6DAgExDBegma9vFpbmD9ogiP1BmfL58LknynYesYfdM7MFfUbAWTb",
  "key13": "411F2Zx9emAYGt8mtaRRoHPrQF8XQbCyh9HGc1kPXe4c4RQfBgUMTy2rGU38oQWTPSr6Cizj2JgJTVFtAgV9kwqC",
  "key14": "29KZZjtkckHMZzHpC9P26G7LDJ3X7DfQESLG22XASWVnsUvmH8N55d774sG5XPu2SDfmqCF7L8CSpLJnKpkNStYV",
  "key15": "49LoA5jPqV8xdg9wFG7BSsegpi89jMnPArPBih4y83izbLitqBw224vem3DT9tyd3dKofxjaEEnX4mp1Ejsd5zJe",
  "key16": "4Nmdgyp2fVZqtzqVinXcwMCf9UiMJzTwzmCnPJ7xHVezDddcxz8W6k6ZiWNQr3C9pYe16WEALUmy9CvEjB5yLtp4",
  "key17": "3MowVUJ7krdtw5QyE7o6Ve7Fnttay56e7SLPHRb85BLXdB78xQeSEFkXLZ1ePNeCXjeqXS5VrNoQcHaGqwPqKGPg",
  "key18": "53bmqNES1jotyJZWg6yoKMSmEpUoFKm85tFLmuYGSXkAbHN6zjgR7uEBzU71jcaitZL8T52VY64sQSKUe3GC6Fpe",
  "key19": "3ZdtVrQAVTAebW9DV5mRjFdm68QtTXrnWS8N5HrXKVSALdhBtSqHeNmpieqvQjW8XZqQ93qcyNsLbpDgYKQR4m4e",
  "key20": "3qbQ9djjQixWnizqqg1hu6P25xatWRTtpTYkFWwGKFQY5VkEkQcqHyVd8NKWzaDXnf91ffuysPmXYzsczyndSxcz",
  "key21": "6jY6VPMwz5gbs5WhvdCnYesi7nzCXTuJ1JJKdXdCDBNxF2NPmqMRrnAeFbTB4Ex4rBHmwdCgqgqCrpgVexpQ64F",
  "key22": "4m3gQvpks5Mwsj8V1DseJs8h3fsw4JNUvouPNWDYacGjvYcFKWv6BNE4W2SzSTB7nXHHLryBGvCg4EUKGUV51J3Q",
  "key23": "ZHuXta1dTPzEeWEoWYMpRZk4KcDvJWb2yq7TqHcFSxpLz556mz8rV7jZKAQ8j8SyVvhynehdjWqBpKZs8exirjG",
  "key24": "3BbcsVqvfnsobRE6g7n1UAGrqmGHKXCB5GKRhcZgCUeX8eMoQr7inAmtcNePZujwY5DZxHBVHdrQnYLSYc5Gpidm",
  "key25": "5n6yHdFYSznnntySWBmbzg7CJwzMz12iTR5nL5hq3GKpu3VxMEv1NtkDcB1sny8cRL4zVoKJpnkfG1awSB2TY7Hq",
  "key26": "24ruEHs18hTF61zwooisGcQVZrprQXoeLCr4kZKcUcPNLTXP6GT5HkKgm1Tqtm9AHQd7b5aVT3ZXU1SXRvKr8uyZ",
  "key27": "48u5NV7NzoY4fKg7qoxmaddCe1cV7LuRuLV724DmGVe92cGr7JaHAr2aA26jHzK2ySzPVVuNgx8ZYaLpy3Pw7n5F",
  "key28": "2y1Gv75QYghNfgefNgRNgZ7J66emSwSEv3yVSxY9xDXiKiEV9yaCWzrfETUsRo5sEegiKsMWztFXCpLM4wC93iz7",
  "key29": "2ZvbrExxEwmK3jB9H6rKpcBJd82nNf4FeRarHQ28bHemfGHm2YWRHA1AwYfApv5zcFFzPdYAYQpcJDrpY6VN9faR",
  "key30": "2Hsdkbi8ULySYM6SNi7XHF3hbUUMk42tLSsxLgAvZfZGD4PwHEuzWgWos6K9U76SRvLwvh3DGFUmwDkoYr57rpVP"
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
