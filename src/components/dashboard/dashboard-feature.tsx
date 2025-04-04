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
    "24dViM66HJe285F8UqQ6Mna1QRkUgx7km6JXaZmAsNezoUGfgVQa9n6kpb3dr3WbU3ppqL9XeGQeezJiBgpp38iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49MHmFw2ror8kPzHqRRyNFCRfmssWibk1d7dMsWzXkGhDTj2W7J44UPReGFdmiSddMPjCKfDoNK9ZweovRpYKEtJ",
  "key1": "4v4t89XDEUBKKmoA5vPqiFzwCbpxY3RG2djirYtKDX4Wt5q9tVYcrgxy8tQjCcLEvtzLRfxxhZV9qb7KQ8Fpghw5",
  "key2": "3Mr6TfdgfkLuAG8jMWYz6cD4cWhqUJZesoekzPwrysex9pdoenKaQYfJKtP8ASnUikKWGn9kkBNxZjLDXL7mELBX",
  "key3": "HzEYofgYH2uACR9RQFUQEjjYgBjUhXW9YUigiGtiL8wU4F6smHKc3c6uJFxdYsFn2eS2QitH1dJxQ2grtGSwJz4",
  "key4": "3bCyFr4aL8okvRegk2wqGWcnNmhun6WvzzKaH6bSLnT8qHmju1LUxd7hyLdVXKKLmGFETqPuWv4k896h1qgrkMTn",
  "key5": "3QJWnSvgkruqejo9GAvdDQb39zZZgShLZcbFANsqu8fktTbKyedYedKSeN3KLLqrVwXzVSYWJSuppEPB5V26D491",
  "key6": "2gYgiHmhrSPPJxuTvboiT1gYbEwhGrW9f5ZAyBi5FcpPk5KStmaPMYuJixyALWp7FKGRQaVgPqwz25N9SHQwMp4N",
  "key7": "5PLA9e7tJdHyZE8zCcLpnvggHQwtMJwfrgPa1dZ7pN9ZQFyLTazWALZPjopoSDV64ahm5pbRiXZa61U4gGFc5DJ9",
  "key8": "2tcomEsDfaTpMGH6sU8rfG37FJNRtX2CvnG6sGhycKeGhoo9f49jXqMKKoTxYCwem3rNjL2dMnydgKo7pkwcmTNf",
  "key9": "5cDHt9Z8rvXRZvfCR5cKs835mqUHNA5o1845YVKAVe4wLxhVG2fGegnmEEVhBs2JeCjrfao4o6MvGMURNrysKL4t",
  "key10": "2UkMyRod2s3pbvR78VixzKbwSUhjtmVRFFhjfvADxi1TjFeWTZ4jfqW4PzbH75JKKRWCqdPQB8FnBAhR6oBZoify",
  "key11": "3zZjKaV8X7UgTm8ypWMh1jy79Zz84vaAFbdxrSCweexth59dqeSejgUXK1sgutg2SrpECQ3A6J2rxK4L346WcY9b",
  "key12": "3YyPWUFY6pnhBiUNDVMhQYhVFHM5YAvVngY9H5GjgKsfYThZXnqPPknH2dVbSc6cJZRCD7Pjo6JVsq3E6oqaw8eZ",
  "key13": "5G7gC5ZRwWxmEcPUXB9hhPhzEkp3a1A7M5N8sR8Eaf4CTLpQduYrYLoRPyH73NigbnVG7vui59qD3j8LVetsXnKY",
  "key14": "3GrLHLFRBqbYmwPHbz4srtgj9ar9oDBbhoBJJBaQZB8FHtSZipZDAxyYwEoKjezyuM3ekYcwiQ5un9zjWr3CNB8A",
  "key15": "5YTpeJ7TvGZmJoi7oFh6FJrHv8dUssc3iUeX2FKWbV4kjpypHQ8V38n3NmPZvDkygmZPHXgw8G5i24nm1ti7LdbD",
  "key16": "2X1rHZtw44NAQJtkArMwVc4TKnT9vjTk6b1uUeZJ3CAXRfRfA9w9QLUUBwoF2EK3vZ2VMGJstUxW14APUsPDb78r",
  "key17": "Mkq6wFG9nfysJR9RARXsgN2H7dEzHKqskzSmhK5aD3BaGZsGAC42g3MJ92p7pNotqSkoDAkKpS6cNXHYnyCNZLj",
  "key18": "5dJzNxK3WtTonPinMsrTWVH8hYF7doURvmCGJGcx3HWx9q35RMwADnVwggrZkkQcREVZQicoy2kGtz2Yd3D9XTEy",
  "key19": "PbgXXrGduX2LiTEWbskEBKGEaQ4judhdYFMf3PyeQARpHTBvMrVyeYUkH1dbX8TJjhHDNs3SvBKHyXRxjTWTNYN",
  "key20": "4qbvFhoaQzqzqt95bZ4kAyfQ38qXfR3vabar6ELDdcxWj4584qPGEQBS2fozDeSwamDZRzUpLVjNsStThWLK8mQ1",
  "key21": "2ZHFh2vSich8g1fY1g8cp9zYEzq5Jg6poDbPS7jxsHdFbUAh7B7fuAijqFq4d5FEit9tDiEaTXDyhhQ1ndy3k79v",
  "key22": "a4mzFS7nubPayYvc6TxziaAgqXGg4mY7MBLVJBrdk1Eps4dzfmZQY1H1S8mnX96vh229Q2MAmPGnQtVKnXATRPH",
  "key23": "1pDjTwFEjPjp9mcB4pkkjVWt3QWxk6czLdgHXKHh8rAUSMSS6Qn4rH16Bqmwdc7QRo5xjok1vCbdeCbDN2LCKUt",
  "key24": "4zWQsBWyRFzsH7zdfJRSPsR96jDtisgzyGJvCa67iLGteJKbAd6FG48JMdengfjNZAdcBfhSSDkAzZfjNuY2aATx",
  "key25": "2BExiuB1WmGoWNeZEr3V3io9x4MXyMzQHLpYSCZWFckQy8RJakoCVQMhzhHrbAZjqUJeSxnrcmWNxAKXQgvsyc7R",
  "key26": "4VEZgRTNNBmmDRffJXBCYXLzck6pBiVnVzFPx9wTmTtpSHkV8LgpfYmsMp19VtGLDKasJhQpHxK3d5XmvKd1GsUV",
  "key27": "5bSW4SWDg7xSMz3tjfxXQ8dZYQ9an5CgCdYvNVboJmjFUCiGSr4m6gzRjY12Y2MFPqg9Bv59jYK8AWzszoxzzj72",
  "key28": "2j6kWyatSgCeXd5Cd1xrBxjJ7wWr4rqiTRuK2tZUWFmjg3qdtsJ16H7Ffk8TXH3ad1ypV4Nw9aVtyRjD7qudeawY",
  "key29": "3XZVrfzQCq8ya71b6TPnT8aLWkUgrFLy3QmHGZFwRhS6roSnnx85YdDfHQ3qacmsRG5Tp31Aq5GUGwQk62B6ApBz",
  "key30": "4Rgd2NNRLNkqv1uQovd6krrqpynuxdoGXyiZLfrhYFBhxRFoc4RHMvyuvZsYAewwo4kUDZmWLjsLdwVfa3hk4exk",
  "key31": "5WGxeyWLbSdfGTmV3L7CZ3YM4mkUbcoAkQJLnP9bErZrRPmUXkhLe9xcCjhZeNeixoroPRTLExN4c56fzx5vNZ64",
  "key32": "4eGgvKsKv7XDoRCMQwXZn9NMt2bkVCTMJNwDFDpXHCA8LpNodKZ2Uf6vSsEx7Zs2AQosd6YJ4Xsn3RqNSceLTdRS",
  "key33": "ektHoh2X47zPpG2KP3JbsS171FzVm7Nfy2jFQhJFTUHCsWo45Gsrp78y525dTyFekkgbhnfrJmfCsUH5Yh34J3d",
  "key34": "2aSAQYK4TMpmRR6HLyiy1jASJ4QLbKyn5QEfmRbohkcVzusXS8TjMCbT4wQUoiDWt7bs3hXm6nX9BfAzioWyHAdt",
  "key35": "57YivCzVG6NqWYGdwdHtUxCdVEW2cbdXRqZdJKBiubyD17U5GYGSbB6sjh5LCG4GFYfvo1ZkFaWa8KNxAbhF2fo5",
  "key36": "oKDvA4ewZNLQp387LqybhGDeHNkH8o7bN9YXuyPcEwYy8Yyxd5gfVHx77xD19SGuPau7q61t8JhjDuGNhSxJ8YA",
  "key37": "5jjLYDuTm6fvr7b9j8TKFCRJPMpXTtki6rJCvXnTUocxmomdwLAKQpDrXmt8mW6sjF6EsdzmP1HqVJK3fVagjRrU",
  "key38": "Nnh9BqfcipxpfKvksj6nXHJYXsbWbLwr91C83RqG6WPr6pAskTJW7k9WerYJ3tVMLFvmMJoYp6dJHo4FsRX39zs",
  "key39": "3CUnbYgQqGbcQjWAQKrmCuq3RCRBZpmM5d4rdATZpkzvLNvk67siFAo27ZqHWWFH6LjPAzsWjMGeEYrJWHHvpZWM"
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
