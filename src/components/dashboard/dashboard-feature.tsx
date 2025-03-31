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
    "4B9swnvBLd9ZdDmC837R5h9dKiZAVLdFFKR68Uy1Yr33ponGPgAVZ9tTwWjN4cXaWUnrW7ZkGbHdCxBWWMd5g72A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cDQ4KivkDsBVCLo8rMrWcttTi1awCW4boin9guTNQPW3Yc6vwKV7a15Maav6ZkjCQMfyAp4RiUvEJ4ya76LjNjM",
  "key1": "2oEuRfuo9Nn2qfQYf5rwCERFH9VLaMiq1RvqegN3JdoBZeKSUbYxkhu3SmuoHjNBRHbnLSNha6x6LWcQrF3bPLDU",
  "key2": "4qRYUJVZLLpvWWcXHiVBqM7uRuudTKuieryH9yJK3L6qMVjBg9A3eGVDo5DYkmZDGrCoDdV8XoSeBJGhDZPfGnhz",
  "key3": "2mPmJviTVc3KHtcF5nZ8Nv9AWgrV4rkuPrYyWeD21gbjcVkryxB3MDk3GEDJT7t8wFhagUSCF3gTVaF5EDKidtW7",
  "key4": "33fi5WuzzxZvpd3NuKGoHHrUdhYJ63fXLA7PSLhTB5M3TueeYmCoz2tWxPx9r5N9sE5Sx2zx666fJ5FHRKHAnGBW",
  "key5": "5BdSBi1b2sZVSSgNCi4LyZU7diGsU26CX84VrUvr2FJu2gL81Sk8kXquG5VS118asDkborXezHaWGiDemkrYkhs2",
  "key6": "4rQAtvyvkFo8oVJuoKgBzub8nGhAby1t1gBohfQV26ZLkNMxLqshDPiJ6p6SMxS4V5x72N9DeaFjidnasXNf3Nqu",
  "key7": "2r4ANVTDceeDorZGys6BoQfqeUDXcRpw4QGdMDToqKw6TPv3Z9Q8tjeXugeej5W3gVkTP5DXhAFpRLLgqDb6YrPh",
  "key8": "2Nsj172M73B4TEzTdqSadMrKaZsKwnX3tbbQKcZS614m7W7A7996te65DvLjtXfmSBFgqLS3cuHdmFbuSKQd2JgR",
  "key9": "42UCrHjqynmL9yyyTmTwzM14GHQ3mAhKmTJLfTKaPYnozGtNNtFAuKJWJRdWaKpwprEQYLNCHsNYcV4VXgAkoHKV",
  "key10": "a1ZmAsgS2FEH8YrEEKPzwFy8Ai1hWNnJ29VjN2Skgmo8eHxFiKBGWVWBRbVgcparrfDu42whsTDNwNytNmBFFaa",
  "key11": "3aTX3Yucb2R9rbpNCpJyr3UgFi1rFTH3FAVnbkSPSH366aFXYJugdsCof7Ree773Sjkwu2uHA1VHjVupx8ZvtPq4",
  "key12": "5XtRxmqFbji9PbbcP6515yT6TwUwDd8cvHPepvome1wbbHRmeC24AdhgYfyXF6ZLEbotN3A1G17noJVNbcJQdeCU",
  "key13": "3F1KD7GptXAuMG9VgDTYCk93mqvdhCKcP5ThVgsVisMdypzwyW3x43Uc9QYWutPEy8597NuuFhaNPfb4Rw2qiEQy",
  "key14": "46Uy1CUzVAvcj4mq8mqqtEnNeStJzaaq33fS6MhvJ64Wda9sE7UE7xiLV1PSeTmYV5yf1LJtZ7WPuSEZ3arSGawd",
  "key15": "5Ynmn2ZgFaWJiM3XU7GHnhWgrp89KtHak1vPhQAb8viv2JfZL3TTBtMunQcDbx1mkDaMPFgXhnJx5FmZdSBZpveK",
  "key16": "bPG9KVgjN1Z8yE3n7ywQEUsYLP7zmvQSRvSMLUgKdfx1XUy18T9bCNp5PjUJBreDVPYFxjouSe1s5TWMxK2krS8",
  "key17": "3iQT16orZt2tbFG6qJ8SsDdB6n8it2zvpa1XqQ1s444cvoqr5JPrwjV97whytVwktzqHggKbbU9vwkLSC9E4Ne3E",
  "key18": "3t2EwD7g7aq4G2UN4qKsgEEFXzQ4CKU3jQ4mfUh6xWjZQTMPno8XzS6nvmAhgDfiR1Pev9dbAYRKvtVhKN6gwV8y",
  "key19": "2JSDee4hNfrNYNGkTEUewyFdxjCedw2FmMCN7cAHRYiWTa81epRmeyZtCXhmKFsjq4D8T4gCrwt59WBpNfY56VwC",
  "key20": "2HvgNeTCWhSXeYy1tpDVtUNbqRAEBhPiU559tneS7v5YcBLMHzj5Hw7CoKyyruybemMZpFb7NqnrFMYkjxBXZ3MH",
  "key21": "5c49YMxpwh3x6RAGoHz5ZRpm86FWy5Wba3hbvJxB9SpvnZDbLrbuDSD8vLrVpZefGq6jyppUGE4Lrr4WBM15G4Xt",
  "key22": "3psiomg2gEjucn7g4ANFjfv6KUW38RgEH3bVKwGvM3MiW2qrAwyQhehu4QeBf4CQfCeCraj2merMBHSdaR5WhXWS",
  "key23": "3PDrNNmeLFWiYTZYmaqXnrgSGz4NZ5tJAgB7HBCj5hXrfLdAsog7qZQZaEiH3xRrTwwK2XBetiPHqNNijLUzrYgv",
  "key24": "L1ywScUdzyUyFjFuXYFk27LDo8Kt61cNqsU4G61GGCMkjNyvRHBVXDXBz2srtJqdVVhw3M7L4hWxATEacZxg21a",
  "key25": "65XjL9rzV35E22t2a83GKz3PF1AbBtpLJidPSKneB93JgMQLTDxziJfjkFr2rvjFf8RumisZcneMXnxnJJYM3V3s",
  "key26": "WuvmYVmEpxepyCfg8wdA7EX7QZPgWNxmqdWyq2a7uJTa3vr7gC7r4ciuBc8pCNBDxztGDbxFssd7T2aazAnjaAi",
  "key27": "3UfchAeLAsenSHjkkej6pxaiQqjA8k4ygsf5bFGBGfEMNrnd5ijGjdqAJwLuMbYVCS2EsaVGwtezKMTthVMdPuir",
  "key28": "3hpau5tsgu3RAnkzQ8HmM4V5JcT5tAxZ35upWMX1p8nCCXtbMrXMi44kwP8DeDwbJ8YDVs8EWoPV4ouXVrEyvk5f",
  "key29": "4wwtwNTiS1ubYifZM6oYR8Woy3asHZrp6McKky8mrQ1seVmDtve1JDnXsXx73vQXrF9cWAqraQXGHM8sa8qZGVqp",
  "key30": "riGEiFLxeE6vtuaRYzVz9LtyrR3oH96ztm6CvYGfiyfWwDaXrGR4EWBB1gWM3TxMy6KNrV8YqKEZ74RWzLVPLLh",
  "key31": "2sXHBr8mw9ttRXH16Z4nDaDj1RHhCKotf6nEYfHAm1dxRpHb5TCpK5hAs6J242T438pLauTR3xCZzxYFYeb1KsKb",
  "key32": "4hjeaa57FWwU2ALgMAKtk8fHS1VTvfjz1c4hZd6tYefEyXbHCfqZ71Sq5kjy8jfwezxGLdek3XT8GwPrJsrg3ZRv",
  "key33": "3u1a3ayGRjXHRs2NDM1Tx78JxS4bUKXZVjux12zCxo6Y5fcZWQYrz5CCYnbYFhBNctjQ2TLeAcWqmZYGDqk4AYBd",
  "key34": "3W39EeEFDtSP7C4K56rc6QLheEynWmNWWp2vyQ7jq8JizavMjt77C1Hz2XPboNViF4CcsaM7QmKvSSDBzCePgMdQ",
  "key35": "63t2coFeex7uPiJ3Lqj4cGSyhJGJ4tcpUSrN7S6U9YYWMXjrDPfn1QqvganPweYq21Jeofpn9EQAVx953AdweGJ8",
  "key36": "2UKvVQmJUk4tSRayAAwbgPrZmjA16Myg7gNF1TJCtQo3exJEMsVhF8cfWag2oHXEmLp4Jgs3oEVUJ4UNTze8tLQR",
  "key37": "oGxrkiETmZHZeVvLhHYZo6V9o5YSK4EJEv69cQ9GdzLZxXjnZHoccUvMmbA9FSTpq3AUnb31DLMUfB8AiodjUgp",
  "key38": "qex8UfkQmVDFgJuKfu7qm3PcZFbVeXmwDYLD8jfV21kDfae5sUsnAfG2SQggpnCGrNS98eQNwQqR1fMsMbV3E7e",
  "key39": "59Es933SxFvVMfSLkeMY5MorJpK6VzKJLwnSY2g5t6Nj7yHaqLmqGm92UBZFZUjUU5a8mx6N7ckur4Au1zNnGhcX"
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
