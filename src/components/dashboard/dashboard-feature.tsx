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
    "4fJNW7fWvXodQrpA1vyP6QvPbef4LGNG6skYTTkKg9VmtWVGWts6BptnVQDR3rcZ12Jkx4aBQTukyLkQQMPgoz9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xTnAF5aMkDn88C15EU8yEz1yc7FnZfam19Sb8GspwJCtiWs58mgZChLJ31kezBTPj9MAuPD8YXVXxowcs6JboKP",
  "key1": "3z31cGBamGSqVw6H3oYRQqw9v9Cs8c4Nb8fgRtNHCit4gtzDNn9aR9dVnN5hV3SxV3a7UUGY1VbnbUQS3FHJMANf",
  "key2": "WHMZXYZD8QmqY5hhGjWgMx6PkaaxZwuvyZUQQ9AyDzthdDhz6M9wPfrxAUXyJk3FUVCRRJJybetVQrVhsaMnTFm",
  "key3": "5Ec43kSuUjeieUErL6xB6xvCc3qjPhebrLTSz8TH9Cr83ed4FGjddYXzkvGj3igvR5bhwGeEH2QfsGVMmf17qXSR",
  "key4": "4vFFBnrSjz55w9MnUBL7uJhRX2xpDKBTB1aEf3JHYERAvtbP2v7dhmQjYtbERpRyyK7J5y77dQjTmUUK4L8Ax3Ch",
  "key5": "34D2n45JjukMdVxWTYMFCoUpckxcpf4ipyqYR1weuqqNECBGfZDTxMcnw5HD2YuDkXRCNdygxQyCjb3gRaTBVmMb",
  "key6": "3nuuVz623eQbUiTgHhERm5Uwir4XtJPsvFvs6hn4hkt4sUsCoUUtT7k2x1RwbSw8BVobZhsxNDiuXUKvud6zyKCm",
  "key7": "5ekngCujBp6qxvjSWn6aZGgtwv9XN6vfxNPjZ3dhBKUJyM6g2otKQbmcz1CGMMptRLT3HbE7bcbhPqYfb5XqmbRL",
  "key8": "5MWYMQqs5KsdNiTa8UVRWNTudRRqMFLd6Q2zhiXbofhbWpYtzzPHmpd9ik5pTAUFuyv5QcvVwX18ADqosfyLSJSd",
  "key9": "57wzJXPnXELTMBKDzen3A3HgQRPjqLY5PKBxJkE2BbP3vbCDntGsmMnoHwtR1hiCC7NYnBqWcwbLqr1C8mAqHiS7",
  "key10": "4HiEyMJzZJ9j2g5MBCNKQ2q7VbjfhAJ8yMCH5ndy1reW58VNyr3SQfQLEVWXqemVUBd5ttBx2H3tbF6fymvajvtC",
  "key11": "4QU8v46VsRpnA2noqkv93KzB5oCPW56fVgFpBUkBAwBN3EAdgRLUTsB3xBaLrPSN25L2sii9rZX3z2ysNSqKDnee",
  "key12": "ud3qc81mrcEWQEC54GUpmT7VyqqGxYHqze4QEuE83anTGVdJD6BsMJWjhTs1AECpTzErLrciXXFuuySqBGNvdV4",
  "key13": "2y9HfZRJRgWSf5Rcbq7dUQVFHA6sBx2DQjf2cyUSRmh7AxjdshN11ZXLMQiHiRYG6EUpYaGBTvD5v6Yj2YxusUKk",
  "key14": "5r2oD8TovrsxV1MMs4V2yBx4EiuacPC25EG8erKy6qDT7sufURSmacBbs3R2bFrRJJg8TcYD651vkMD4C4k6oLz7",
  "key15": "3vNG9KmV3UNLNAJqXKm7hsuB7iTV2PjsVcqZE6UcGMHYWGbDDig3SLGW7Hutv3MPrLxwGWy2yNNDduaPBVmfeyte",
  "key16": "M9XQFYaWxu98ktTmA2tKd3wqEFPb9Z4zfSLeyANBpVdG6waKR3E8j1rKkdQLw4L2BCSvD5UcqL3KKX5uLA9dLPz",
  "key17": "3QqoqBHKFPS8aJThCDvBmX5jmsrt7cKAb3oKbRBbHYrn92eBGF8NE4BwFQXK7QDsCWou276jdCjzDjEsY6jpmVxy",
  "key18": "5SdEycEw3Fm9dmietFuDvqk3xt1xa9FmipsZBoVTJ5TUYQECfXvekTdJbF2uKwv7em1ER1WMjnxXa1ALMxPSxADH",
  "key19": "3brfYso2dfyjBZxmk9fBLEFmPpvPTsx1TVf5LGJUAZoNmFQukXTF4k66rjeJDkE8fGz2apvD2Wjn4vo6iHULD8An",
  "key20": "QYtg2aHnXwCY6u6bKxvvpEYSrReYGSZMkD6LjwWyZbn6vQYZy3nhAtdu2QksowjhWMHMDDio2wubA5rESUKiYsT",
  "key21": "m9mu8kyGgLn6wZXTpWsKyUr75z6zyobonBbJyBEQMdbnXC3ZVwMd62zz6SRZg8QD7yzL2vb7nDLqG3oCLDVYjHr",
  "key22": "5EQ1XFwThMH2frYR2KYVG37NLukTbCogWS53RARkn2GYiM8KGYrFp3YSb6do25EMeuuaXpGCBRv7humrZ4Fz53CX",
  "key23": "3o7tddhW6HW8FpbKidN8BZ3BiHW3JXGyfxRUuKvkCkjnZmEF87C9RzyZzxPmvvpX4jfPYHj4mE4E1i5fLwnu9cx5",
  "key24": "nDohUX8nYMZy8PH6bUXWqQXBucaVERhrv3CNBH8ibzEiRGfmyxGBL43WvBpTJFqpsJxWa9iDgVRf5hu7LUzfCBJ",
  "key25": "jh2C6Dnxo1d3NoD8iVhu49nukUpaT7994uhXvcgeb19xED7r1GA6NdDmMfuaULWZvepU6gqpDFADA3rbvXda4rs",
  "key26": "2raU1XGaYF4QFMk6yFmu8E9SULNXXgAkS8h1t6QyvMnHTo9beEwCAtKo7zxtpLRyRJEk1HzPK4vZ25QSyNDPn4D6",
  "key27": "2nPFWFikNpmSMgeN9gN4QfuogY3D1WQ9egmGSSaoQP6Xi2QAjcXMfDJnEymW5CmjNYHLfvVj5x3R4uesP4r4uVEs",
  "key28": "2mNmiHNNJz2UoqJ9NkcWdhM279pMzib8Qeudzz3B9vRQZuFdWsCqV5hBZ9PQu3Gn1Ms8fyQqAjrNP6roqy5V4WUD",
  "key29": "uBZnpGWJ7MQ4bu8fXv2Sc99hThwym6mtNoeby1o9MRxVefuZMzwPoPjKULbHaHjMG9efHtm9771w8jNH2igXNSQ",
  "key30": "2coHhYwpz2AgEnYkSVMR6MxsohaeNyGVXh4SSrikcFMaoPgFd2hvAjGt1f9gXEupzD8Ld617668EPFN6p8AiBk1P",
  "key31": "3E4hBxgY4eFGCwnCUgEYY1MhTZQRyMrx9bWuyBGWU6YGXnGRxtqFKLFTJpFLiUxuMi22nhWy1Fe4kPGsKhroGWze",
  "key32": "3n8Yp4HNatV8WuQqQ4edeZpytqyLH4u7rdeDEGTtRHaZ4ZbjDd95QMMKK3i5XwV1iDfXXkdPJ2p4b7wptBQXJsw7",
  "key33": "MrUDeGgRuDZN7MtKCcuMYnFgkwrL7xmcu4wX7BEGaEB6hNcqafqZKvhtZhqcnp99irnKabYxBKjXHSNXPScGuNj",
  "key34": "2U8A8RMt6ZRwNBsQm25ZrYWFyqSigkHXe9zgZJYWsBg4htkGtBegFZ6ciKj8vBAFdwJFJ9cmJPjZhZKzoCvUL9FX",
  "key35": "3ZvfNqjFXicLNsSh3WdUbQhcEWuCC1xt8GuaEeDMM3s5ECutr5gVhd4tg5RYDqKWT77f9iN9M4VXaPcCKST8Y4QV",
  "key36": "3WGcbfYYkCgTCKXPiCXSNF6827FR6TdhmpSsZeiErHGTr2tQujMi6mw3shTvjQcdjxrh8ChJT41FgZvjCmmdpL7D",
  "key37": "5F4E8ttroNJdbAyPUGBW1NL1HN2yUnUFHVNyNdUyR47ZKbGRcbfZVYHrzxtTDmwVvSGUEtqW5mthqyWFY5n8WVCo",
  "key38": "2ddyeTDsMX4tqdfR1zFJzmxvupREkCvxWWYQWtAqMNn1t1dhkKjucYB3b6oLbV4vYgMX8pq3KaVJ8cfjUiwfTWML",
  "key39": "5462Jai6vBqxRN68ATruf2rynrkUELZeECdisGYPrLE4W7bDRWvGRmEkXqG89td8owGAhDE99gcCEmdqa128RD3Z",
  "key40": "SBATPPoNjkwVJXVugB9yAPHE7fde2mPWMVDnXF57PGVjyfYUGqAyxXS6ET1NZTCjFPXstZAzDbacHzcHXMvffze",
  "key41": "5ZnXU68tq1r7zEfbVzS5CAZbzGfc49uwhNMoTsrGKj7wvQoZR4iTrZZxADVBDjGa6hVm3DpKpLMZZCWAps6b7k2y"
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
