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
    "2dENmntskRgDEv5P7T54rZXx6i3Lxa38mwBauX9GusnkbuZQx32cgVpiPBuSRGXZ3EfdTomqiWJP4BJKbwUzCkNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SQ2bdJCLmvZsdoopBdAmMZ4WD6dY8SLQqwEjgstQD7jmk4uopPZhj3zGPvsn7aR9iKHu6KN79o9hUY4E2K9Y9tg",
  "key1": "3DaM7MztyRX1TNkjzkatoRb8ZjmB5ijkbkSk8XDJ32CarE93o4MeaRRXaoGGfsfQeyK2gTeUYPvEfArsTUrKUwUi",
  "key2": "4gpjJ4c3WvNGxtkVQPGKqtx6AnZZC7uVkhdgeFEHMDWZvJGFmqJAZGzi6AmPnUtXXzGtsZ4PQEodqhW4oH2xnxGw",
  "key3": "5NgsNgVk3nUi7JPZY8xdHMmpaPTRHxJkwpgYN8LYVGb7V7ypExm6kzqrasdxrFkS3DbkP7rZczKiq9F97RpxGbRT",
  "key4": "2B7igEZAJzp8VZt2u7FJ3YDJ8mBGqbA8vCk9KjUy5HhmrdqANUyZ6nFmUiuaHBL5HH1cJtVhmeDgM5EUEbiZj4dJ",
  "key5": "4A2x1YQZpgZsGSL47t8dgY5G75J9y8eJNzypfKBjU4dSFmuPns1cPz8p2DDwPL667nHUrGXppncjw15ZVTt6sWik",
  "key6": "eB6XCRuhYwjKp7vZsLMX11nF5ov6t1Ab2mGfVAqHMg5V4ydryK9Pm3wJzMApWQJvfLtY2FbiCAtuapxtADPrfuC",
  "key7": "2cqoToPXmncxXnLEUTAdAF2sEfPm65xVnPGeEvpnPFthjwxT6ec8DQgPY4ETgF7QgJpn8vyGcKDeMw6dNa6C4JsQ",
  "key8": "2SYQnLqx5C2uqczAP2BvgSYgB9FaSLPCa4BV9jHauwv8rMCzQEvfwypknunub4UXAK1GT8FCSayZgy9njCHqohvV",
  "key9": "2duZHaiTDK26CgX6BMcuFLB9RSFWnAaGt364iEHSSmQryMsmWFqi9fRmyLZtnTKwQ3HsFEqnDSEWvZ6aSaLoEUPv",
  "key10": "2qH2y28DywUXa9VQzjzakcGBhYKJJUy5ZyyFgw7UEiBKNH5jeaxpS6bmije3bbpjKg8psAVeRVrPCbyMhnTSqTWk",
  "key11": "2T2f9awrPtAdph31MTrRMSjQ28oVUW1fX1PuNzUMNwB178sak67nR1viumYDfqccbHKsGy7yEb4vLBN9jXRv1xDy",
  "key12": "669GMa5MD4mK641a7QqS5QCi6jFmUuA4JEhePcdbHfZQ4ejsyjbHLJbCZxGHBHZbDvmirCsHyT2MvTpSGHyKQdiG",
  "key13": "58Pi8oUVM1bHAeufuzgANpq7tCxaJMEB18JF65qpZdRinfxybzkXFQdiGubjGvfECSMotWpos5xS3fGKYX9h3fPe",
  "key14": "4ctyDc7wTewD77ZzSdZpvfTGu7HRaKkg3veKmkkRKBzXBNLCe8Po9Jj4zLKz1RC9frEEABJbxhqb5BJeZXDNaU3x",
  "key15": "2xuiJPmpNXgJUJSvvLaJyARc9XUAYDu579Z6u1aApX962AjH4Pskivoudn3eJf1pAxJqt4XGDv6WaHY5rKdAKYqv",
  "key16": "2qzBFxRbYfRXjpEuBPGp9VWPM7iKCdGRf3kZasDXyLDhAsw7cQsj5ZXKcMCRGQ87NcFJo6KCKGQ64D3TLvvdQigA",
  "key17": "3V9HaABCe6v4uNW4TX58ApZQNDj6CChoWgfJ3Ncw8S9AXg2Kpbbm5ALWZDisqpnWnc9o6ptJv82WoJNWrnJyK86c",
  "key18": "5Wz3bveDPNKiDqQLwtgU5emEHMCysnCWCY2fShBQ6thUrcgH3Adu7Av5SycrAq1mUDjwAGVTbABdBfwcEEjfGixH",
  "key19": "3gpDk43gEv8c1Cuk19rW9RgLKBjyN5bNpQVk5sntwJnLXXL4wcCzn1XSdHXXc5SqNaP78b5ir579vXmP2hn62jSE",
  "key20": "4zLfwsXUi8VhqV2hWcmLkUvDzdYhkTXm9Ew2jYjmkpSNTXeX9XkLcdkPPnHBbjTUnSQEc6m7Kd4F72D32o61pDtg",
  "key21": "4Q8Sj6mZNBthxYCG9WjJuYrhc1rgPoS11YvuooECgvwdcBRZCUrKHiQRa3oTokQJaraBEZ4sfsPkTdFuWmtM1MXS",
  "key22": "4LTjxL4v9pweP9qtX3XjGmu7jMJLncCGST79SHCVqCQu1KD9y8S32pjPq11C6mwY5kk71EMKZGhvtDnZZuPJMHAM",
  "key23": "49G1wSFV3q69S6d3iVCThbaiH1CZDBUmm2JhJDUVWstrrJSTz8tzR93By3cuzN9eVgNUtWxFzMGu5A8nTQeMnzcd",
  "key24": "4QNyCYwhLaEwyWCWLYFBfeZKFLvWCXEoHpTmueThj56Gb9QWqw3r973F5gzDx8hrxts2G64zBXt6qVrMxWfNrBey",
  "key25": "5gt5BjqawzbkAaJBFHL7ZhjLZqnhnVzDvhFdc3EMxxCpB2tkXMxDV4hcEe6tRGZsdg8Sr32dnWBYzvXmp8u15wKm",
  "key26": "243moydeZmjTFNyQekFJEod1YV9QhL4WxaNEb25M5LJdFZtAb5NARHQxShFSbvJUbS2A57hiebNUuFr9T1wSBeTd",
  "key27": "ZNdGD7nJb88SiXeP1rorKCsCtV5xV7FarkVjjg2KxB74rrrh14bzqve2jtnE6d8GNGDPLgHBj78N32DgR2ZsZji",
  "key28": "5dcL3Grqd9FmY2XP18CB9ZRS5SohMVwMnZEzDCu7XHQF9FmbrNazt8fiyuwsqXMUYm6yaEA6swZFdwarontKBZJ3"
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
