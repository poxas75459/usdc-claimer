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
    "2ESRQjs982UmP2NnqkkFT6cQ4CSX1zhwykW4NU4qdcWjfbjhAJST1EmYPSqbRSUEFPsjjEBwg2Y8zzaTEwrXuwGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54AHLcK3TcxjucU2yL6MBYYKhAugcbwxnpY23LksrLFVGPMLTH5eJ81WYSP7vmvjkmYe7N3LJMVUiB4sVhpG8rsW",
  "key1": "4F7yUXvCe1HrqRzDBqjAYxmZQbvNxnMygEsXHxvkDFgDCJpRR6k4NRtU9KRvY3TByimFtKVDB5Mn3xqubiTkWYnc",
  "key2": "2KFnZ4ujGackcpEBtD8xXBkdhbS7oP5ExJHf63YTc6wZWzGU76cdABEEgUCeagaegkEmUnqajNacDFvbkgSmtqCX",
  "key3": "5DPzaffcigBXCin1uu61Ms9QPHE7vakKr35fM8Z24Z5mGqqJb7PLwm5gJiHDrQDmCNDfsBfFxHGVcRb4bbnTgMHt",
  "key4": "4Yu7iHQxpuoXEgEPE3fPmCuAk3pRbhNFiebRtFjUVwoKtwPXmFt5gQAjRL8vu5LnUaiNgSYCWdrFrxA2aEXS4RsZ",
  "key5": "5sYWQUbhYPJvacHKGAwRTVfJ7XFUCqeY8JWQwWS9dpcLRAiQbmrgSbqD87bhXzVwiqkDwa8KtMDwEKRgNcRdSQi2",
  "key6": "Dh4zEekPqcDYCae1sUpJFHYTSTFuRfdbngLo3USJXuZoasX7SMUu38jwFC2vkwMNT28uKb33qqZnngBpC1rZcvA",
  "key7": "3qHWgDcUCW8xv52g4ge56qnr1u5kGZ8Wpd67ms2d7CT5FgLusmEHKDGqWLoLRAPEdDzDAMLAEyW4rLZXoCGymqSk",
  "key8": "62K9kQEuGsDxxxsAHH4yoSHxGPCD7zzBbvTXeDtmY6gPpLEZyh5ADiVxEpQj76Pxps9zVk5EEQGFrZJd8gAmiV8R",
  "key9": "5EBDPwkQJ1xBnhv5dTRHGdm7XMJaLUungdTX7UypBbb3csaixAFZ3hycMGNrsjA2SB8SMpL2YCd3uu9G18rgDYHe",
  "key10": "2YqHjGQt5QJpMBQsLUDWEzqiSshQdTrCew1w17YTcWVh3AUwFwVdPCUpHQ68WUF7tMY29qT4WEF2i9EoBhmZxsih",
  "key11": "54UfEgB1tshzQgF8TGR1XPqNLZYbEmhE5SeCiPRzzFeykJcAfACYeetcxSLyDNRviYngK2yhgXvgoXhA3j59BJMk",
  "key12": "CCsZEJEtvcnAsbUsug1F2NCuRGtWNjmG957NV4TEUsFMov8on4zNMo85po8GUHwAhVVDSA6Lc2Rdj8wxSMd3fTs",
  "key13": "3x4QzfV8R5j2h8833BvfMk4xPKZbcWH2a8P5jKVhJtScQusXJr1atdwaZ9pgoWVHH2KxEH9LR8xKswocK2aESAPB",
  "key14": "2jpGtcbuHD8booNBDPbWRxxt7VVnCWJFPJrp9ZxZs96vMkNPErZwNBKTwsWGFrAChhkpK3T7KdgNDk24yjFw5geB",
  "key15": "3DrA72ewR3Q7SxshRHNMzDHiQeE8Lwtf3vA4WRTom8CritHXezGJ9JopoV395jJZz3wD13QVgppB2gZEvJc1QTSx",
  "key16": "22JmsU4R64mEtq4t7RfPeh4cEeKHTzEJmJ4WywQY71EY7QS2mS7i3iT68j3HB6n7G9f8J3m4nZwqQMWDSDRQLaY9",
  "key17": "3NYvbT5Qz542Xm8pDYB7mVXJB7U8dScjJv23hukmtC5iWLDKv2ojj5pxWYW1afnEWmC4wWThStvppwP7WDdeyheq",
  "key18": "XFAYoAaxcaoQjfhRx12qBhe8caRvJxgwdzPy6K7RHWWKyvJjQxQ7nxu9ZCfLsnr8pkSmvHyWjC28WQ4kkQinQjR",
  "key19": "4UtVQRymSje4dtMXHCQVSbYVs51VSPrfZw9uyHJgMEhc4No3Y69JHQCzLwsC1PNWFfwZsGrE2Li5gCVzdG4uKkSC",
  "key20": "5f471fKKGvBbM3dzXwjsmTUTHvfKet1eAALAWVV27Bb9kNTBq5gxqLKQaWWhWPU4SiwSLFJV9nHRbRqUjieVhfUJ",
  "key21": "5RV4naDT52W2eejpy7zYFQSZS7N7ENHRXnuWqY6S3E29CwBDHmTrNwGRYxwSrhc3SHT4hiZnoo2Raq2PpeRv1jvW",
  "key22": "2EoeYrYSbHjwSMqVytoPH7YiBihiFLaQsadb2541V7AanjCwBVvqcXyptTbrRHrdytJBPA4MQrQiXtxm3Zpd6szG",
  "key23": "4VHCwxyfvrdoN8cXuEk4dqpBhrosH9oY5ULRiSKHebDyxoZEenNDscviTUSfYM4LMnbXDrPhMgpDtzi5d1JPDC3F",
  "key24": "3GfX43gcricq5aYe9Z9knPAQBXNmEEHFKJxPnU5bGbXi73RuZqfDHhV1FTSeYbanGPZzsEWajN5CWLqqg3JGyNyv",
  "key25": "4CmvbWJ3mP8JXuSUWwzwX3ge9mLsaq9TCufPM52EmGAmvmvgYfJjq3AJU7MGVp9eiRXzoB1P9ed9e5JtE2x3WhP2",
  "key26": "3RBcKn8NAJHrV6JtLtk8Kg1tJf9gVJawwxHXPSEGGxbLbqkDdgtgAwU1NiGjCiSHahtLGwnkzPRpRqHLVYtnHGRR",
  "key27": "42HJHHXhxPcZKCGYyawvLZ3uj9kK7fwggoqrgiTAUvEtip5ijcHWa6bNCm13YaxBEnJx814m1bNyWr8BgRWE1G4A",
  "key28": "5VXzjazwENiAbTWJEp8qqbwdNPHjn1kLowKF4eR7UUSdAbKbPjqaj6XRkRvjZswWPBD77dbjZqmzB6VSpPtsHY9G",
  "key29": "2CMsWEJc3cDy8WKdAkDFQyEo6qEVaWce2RAr5uvY6MzCv97Wjr9opJguzDEacWPvrVTYG4jNMCcQYoTNfWSq4bvZ",
  "key30": "443iwY2sKbxcCZHG5XSuZJba4fSiGcAFngDGWuVMgaT5G8AqgEPa812c5dNMPSXWBJHfPSWzGdoaVPfAm6wATD9G",
  "key31": "4k6Rvn88oHwY66PFZnmuacTLHw8f4S52pRCAfAU9sQgA5Vhbek3kMEK9rbuHyBuoa3Jt9M74g6q5XJYgV7SwmneV",
  "key32": "3cHY1NMs51B4GHKLJM8JdCxcx6VMyNSg7kd3s6MMfA39VfN9BosVz9SHwBzddVU6pPqfLnhUcwyfEKDZsovmr6cX",
  "key33": "tipoA8CZpjYpXFp9AufTb7eYZRJbA6TedPhtxLNif3h92h9CtzcW1fKntnJPxrXPs7EU7UP22XsavXS9VxfJuKF",
  "key34": "sgcR4RFco8E4vxh6ic5CSPRhsfrhgkzYQiUYojSu2659D467vGGmKsNYiN4D9XMZNU178woMnQH3sEr7LxkXcGS",
  "key35": "2JAWSaNCjHg11Zv4n24SoSTiZTyw9g9162nVfHPfeCKz5p6meCAsrQM6bQYLaMByECrWes8GX7WKoLuP15V2txdU",
  "key36": "5wWBe8zFUJwr5YQKqmTABmB2Mgs5UAv8MDbnKeqzwzCDFLcZ8Q8miBFVqYMYpnnX49BP5LBXCtdLuDtDhpNThko6"
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
