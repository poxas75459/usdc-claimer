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
    "XmgHskdJ7VorfYQttk3EbBWrqkDEytFdbiVKvbC7GPCwGWZdSKLKHmbNwrjKL5QDNF4q3YRzegQLPnzDQdLeghT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5szneRGtinRQSqj2bgh4tDzZeXpkdK6p3u4ddUKFFmKcNzdfVf1Loawiaam67RcaFKmtvvaQ5Q2bge7Kz1uWu5Z4",
  "key1": "22T94Qts6RFm931gedt7wnkAafMyk62FgfvMrwRFuKvQCMRTaABHUgVNrY3g39z4e1tQ4jed26SoihHjvnG3Bzoi",
  "key2": "2UN5hqWbj8Na6QpLdzXAaVaxWvHqbBPEf7qyxSZYvrr9qjyVkGmUYV3F4mtcX4PXdBdrop9H8Cjk2W9Y9Rg685BV",
  "key3": "4YAPVuH1CNpSAZFdxR4ddTYAcGtMMCAqkXgEfuTZNW7MviMoPibGuNSLuXSJPUpPH9XTUdN8pyPYD5WR6LSrmFgs",
  "key4": "3PbEM97Uvc2pFkyxKmqVWbr4EUBc6pAnuqFFK9HjeA6ar73YccYyiKKAKpML1tpCFhUnUp5Mf8UjHGaQsgxTRkay",
  "key5": "3AR2ZmAUnTxXNzwKHHAL6eVPPKrPNMFaaXzJLuaNokAFdt9An32yGMbyneiCT9kAheM6hj4uYLuULiinoFXfALDr",
  "key6": "5oP7mR8emC2uRJtyiWhb8Qg3V6PgULVDit1cnbgeNUB8tbiq6xF2mDFLvtbhVdxkUXx1GWubNqHmeFu91JhT14tB",
  "key7": "64YwfjTG4ojuUyvS4e59WEzwqWbUdxNpZ3HbVXvPE7VKSymHEiDHgJnpoQeJDyKFnbJ7kamZUgmqvyqf6VczHMP3",
  "key8": "4HfYYHEbHQ19GYboFNXtH4npe15mxS1xXwev2DHJMFwcqdKiTwYgMdzLCL1CCfSJA9DfchmuuBGEAmEc6dCBw7C9",
  "key9": "5EkMFxfUa2PDeNp5sDCX3a6kgMFw6G1g6VA86xKCrtUEUHmAQn3bXDsqChaZ1KMaTJu6DHyY3ZsduG8FUbQFc9yy",
  "key10": "3Xxi9MaKGNBGephS7G58qzymrPc2RqrKEDs8XPWZfdBQoQ3SgUthS3U5kMTaLXuuRmuq6EBTNSRyL7TxpV6M2aK1",
  "key11": "3KdRRBfKmuDetTLj4DerWrEBvkHFLWeTdwhu6PnLRzA7GfjNrRLyhumtv3E9oAb2xXinS7cbF5Ps99RgdZG1tzgh",
  "key12": "38g4MvkwpFXbp8Rx6uN4nLhzUmDT8unaM6tgqivQ2ZGoQoDy9z4pjVos9k7xhNinh4ej1r2GZGtAhmmC8rCausxr",
  "key13": "2XxuwLTgJRDhJaUR1QThfyKpwPJrPuMKrBXfdAhtL55C3cFayYxEHFx8WyP5ruJY1odT98hR9QUTsXBX6cFu5juN",
  "key14": "2gBVrAtBqsQf7sKDngnRBMxC2LPRUyYVzniazWtu1XcLdvaqkJ9FEDxQphHyM16wgymoJf9kV9LHjWykFx2rYtFX",
  "key15": "4vFH7nztqSd2LUUfXQPeSYr8VDvFBBU2NQRTZrKHVUbXZ4A8yR1QyG7aUNQmAHVct33NrnAAWnKpaa6vcNhcvQF9",
  "key16": "2xiJGFyp2U2w9GojXLMJ8kd7geRc6QLHpKtoxoMV3DU7gLrDG5etTSvyBP1PZquepeBq85qykPcffHk67ATc7MVa",
  "key17": "4iukCLnTZJGkDHQb6oqEJRKjeWjy93CWAgEaJivx55rsPz7Z78TM6ybn884WBjwcRDCusFy2V2PqUtvDLNMcXq9J",
  "key18": "NmRphiif4FV8HQ9uJHcQkjN47AX4UBLUHyxVYFMj8mB79kLTPNi9VNc7LAcEk5YsTzGjfLBUX2Fz9qUoZiR6Evf",
  "key19": "59S7ew3QPnu1HVWMw2F2ZNjTXYzg7nE1S8PUb6aiofxvRxMQ7XbWFwp1cLCZ4rcCmGJPFjF4ifVBHjwKKhimShz2",
  "key20": "1wB4UQEe3FJfNdJQZQt58Yd2ktF8KQjgXNEn21Zm6pbinin8sMwhT4ifCfgLEmJFCN44t7bBJfZntkZZb1iMq7q",
  "key21": "2fhjEQQF5WuuxjS7477fv8VRdcEKjknv5NWYz1GgyGkWcuEEMx7VzQNwziVamjJFmB1zLRYwBgfQic2uHWjsXzTZ",
  "key22": "4v3HZbPNaHZBJsPKcrLkpmW4evpmRukFravGrpeNqei3i2FM2yASQJgHWTMUMTbrH5EwgUo4Cp5MPvqsfCmsFQmE",
  "key23": "5r4CB58aR1QDKUkHGXYpgRwbX4wa2w69sFcvJuWHJksZTPXH4QMMKRhXBaAurGPZV3afkEKSAPZScbefGcp2Dch4",
  "key24": "2GFJPWtfjzUDGt6yJGGi11YAaVTkL1Hp2GS6RZ8CksPLYhmReMpkQ2bgUzigxu2ZGm6Sd9gvGAH44xrSyEXXNTJq",
  "key25": "o2Nnbn5SYDJkD41UMogS9QCXJMTUFzrhmZP4DxH2h6urcGxZ3ika7DJLXj6cyQiHhBDtw9Wj1js3v8i3wSfC5E4",
  "key26": "2w8mY99yqMaZy5a5nSdj7mt3ahzH6mMi3ztrcdJCbRrkNi1TMgXqHxfJQN7apSpzXr9CTF9TMnQTMLP8omPGiAJ5",
  "key27": "vJBdcLXDYheRVvBmKA7WrZayP3HEwYoAmjDpkurooQwh7EsYDSHLPPdQEm4Gu13RJKYoXnizgRnDXpmYT57Shmg",
  "key28": "87nBV2KrwbAnEE729VUjFUimZTUcpCceerdjGAbZVqvo81uyJRXu7WXZgm2resVf372QVq7D3DP77owBRQKk75g",
  "key29": "59fYWhSU69w854aFZ9Da6Ao6Ph6NecTkMsodpBWvjw5q9JkGVmZSVotcu1MrTJagT4LngSemnfKPqYhtwUJCCZY8",
  "key30": "MKbfBNYPG6cxEk5GpsYnBXA3XqkGYm4qxA8emp9Kj2RB8H8gxLqePaJjfirUHRhtXWjRh4N3x9nb7iNPoLhDDEC",
  "key31": "ciqosFCjVjjrjJMdXLL9bCPYPmHeujUfSgDGV1A4PrqvDaWTrJg6JiUGUhiqNoM8cFBe6GbDxNtCoc9Xy3eqBgM",
  "key32": "5sw88XBPqwwnaGZxxUjNZGrw6rc94K3tEzYw1b86npoLbt9PtNxCmjnLHcekECHRZJSbNo4q5a8yDuwgwkxtV6j",
  "key33": "4V187PyqozMdcrMPq2Cx5v2QQ9kZT2Sjn5VZ74H5YNEtZ5EfAFcZRi3n2PFDREth21kF5m4ufYPFvU6Xj4i6uz3j",
  "key34": "3HgU8J49AZcCChedkCRTviMchSANUYwbZekLLbKXQcJpJJdF6urHVGqbyN5gJtpTTmSpnnanoFye1UkcQtTwYDsS",
  "key35": "5azTLHJavMXwrgQBU1GtpCwtmM84Sp1LYVUiQygNqpPjHvVQMRFnAvPCGuijLuRxmb8Gkwei5iwJxQYNVexFXVoE",
  "key36": "nfzZN3cTz4ezajyZK6SC19Z4i7mnj6qgMBKJb9zVConZawFojdpPSfsuHaKmkBJfPsLz22a3KfBvZ5F9UKCrneE",
  "key37": "5GPuboBbKEkuSGqxMkLGMo19RNPtJxvBwMhx6Gqa2brCpuzJcr1zYxG6p1jfCkNDLPrkvzW6xFUn4J7zd7PDFHaa",
  "key38": "2i1oeeXzN2HEnGaMTLLMPXKiajhYGbm6tQk6cSgc3keKMSrDViVyqWbGgzr8ZyFLvhLxqA37mUhhbVeRW41vheAn",
  "key39": "3N2pQezDEGfenTmZHjw7PbQFJufZ2mMszB4jyLBg4y1iuNb7zPjwLqjzPiDabwsSibCztFRvayL7XMAA2epuiwN4",
  "key40": "Ux4oVd7MmEk4PYgYNMmdF1BYua9ucY7TsSpxV8ecL4PBw6EMvHqQjq6fgs17buRac5uVVEizh4Dew2eWw21T1kp",
  "key41": "DsWMxDcvpFf5QCSH2Nq97KGquAm7ej9eecjRBryoMGQFKDJ9vv9eavnmxekN5vhFfDg98MdqKhRyu8mfUDDRr7F",
  "key42": "63tf4HhYU5YTbJVq1nRtjW8sC4Hz6eQdnhkcfAUAdAE7tEEZrYBiiFo1GHS5XdBMpZejqXsyqHBfpBnBb3yh2JPR",
  "key43": "468PRv99oKEDHDT1ZW6w6mBLnrUXmQ1q69YsoLy1ootwibuT1FGWvrNgovmVbKsaCAUF2bcjrX9ctX3HSnkfJbei",
  "key44": "4ddUYHGDq7kkk48o2vj2TofgdVPmKX5DCKK4AUBUhqPyvuEKMAhcr8PG2ZevG8gaQkSPnezDKPEX5d9xoyrTmcNK",
  "key45": "2YXpvb6AQXytgTEzXx2dye7H491brFy262tYgQHDKHgRP2RLRLQMrj2Whw7shK52kyvJGDdBH4yg6R4npLNJywxN",
  "key46": "3GaQALej9MHQxEbyfPWTK7XkZr2RzHR548e5eMbNYRsBh8mLh4bx3znUHFhsWyMQq3yP4SWSbhhHTPnE4KucGN9w"
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
