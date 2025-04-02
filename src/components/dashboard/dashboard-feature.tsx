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
    "jhLs4WuXZXz31JZyiYbaVzXu2Ub1sqpHwzZJeJmrzUAoz5HrCPC7yGsuYEtL5Fpp8GoRZA3MBxVuiWkQCwTyWiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49LwNA1oS9gDd3KEiTqamFPVgCwwXtYqTG72cAREdwEPkTsHkxeG87XP9Angc1WuhsEjqyRz1SnaUEsYopF3WHFV",
  "key1": "wGPM8idoWuaQGB64TXFPSmYp5TPZqeB88EWDrdpDp3KEDiQ3EfaiHFZQfqEJbXERM6w841BE3iJopkfgLBPsVTa",
  "key2": "3AdMNSpKRmLMYsd2CceyHkshYj3Qfaai3ANgi31yyUSW9P55xppLJFi6i8zgH1o5x3QM5rEu5xZtmcB6R5C5kVbr",
  "key3": "3j8w4Pkpdw52rDkmtjGvUpZoJi8HzwGiaVgKt9extHN9spqybJSKw1FEaHeziuxtRPj63obGztAhWjgMn8VSE6vo",
  "key4": "2vrb2oninQZcfmGT3M9F9fif8v6yB86Es8HkCZ7ygnXEysVowmxxYr7YaBVieSu6WMno3onaMTyYowoWGnd1DDvS",
  "key5": "5QnTSeZSpVYyJE1rTCGECoNrBnE6FVjxSeZxPfKs3vsudugdGZKLVJvcwXw2vMPzQP2QJtpHcoBYk5ZG77ypyvZV",
  "key6": "2HjKPPJ45fEWP7uv6jzsbzeSiNdFTvukA4qqGJ1mqEKow5Bh35exiQ5nQPfrx46XEmkZnFucsQyca2gCXMTzwWuL",
  "key7": "2BkE1vMki3X5VhRVs2JAZ6hundbx8pc5JAZzNMLFXjZgH2HGUDzfsdWN8HWsVisJ31t8QF3nw5ExJKSZgXRidSZs",
  "key8": "5Y3TqYyrZhAaYoUxUiYFFrexxufAmCqRj49M6AU7TtNSx4emtVvxPFLy3KXm7ePNqFuX3emNcJWSnm5uhXR4J5tS",
  "key9": "3pT71YuQd5mTeqv7MakVW67yWNV4CsrorgQ9US8Mg3c56hYLTGzC1PsYGvYi5x1XPPif42M3stqkK3Jhu3GVv4cG",
  "key10": "5gRaWQNjhqfHgaeLV7b1aC4WEqKxuA1WgSuZr4aH2mm62zwXNo6y9S2mu3VA5jniwGFiL1tKa9u599CczCHDRZJ4",
  "key11": "516UTm37avH7sJVToGnG6yyX2XrcCQ1L25BKUJXo93gfNn1GSdGx6QKh6CL7QuJUKGG3j49TrsUiNxzzSQS2iMZR",
  "key12": "4XoNK6SFgMXxs1Mx3a3vgztncmtYPBUYgTisfkuM2V9B3dsvfzRXcZ3S2xpxbpoDMcaqAbN8fchfwY4tMwENADNj",
  "key13": "44jMSABVnCzZ6T7FNQrFAiRuSgD4cwAmxgXyqWF9aoUXqDiEoFMXThzCWKvY18eajnzN4PQM8n1v6G2dBcxywe6C",
  "key14": "3TQUKPieCwz4KTb38BtyoLepiyNkdWy9BbD1rmB4cJpSQe3YfKpVoeg76NHo8mJxmt8uruKfrwvdq2UYXBESEcGv",
  "key15": "3iQKqpUJZhXefZUUXXgn7jCHM1R8cMAipgA5emRBijW7LfGEJg8vLTvzYQb4Ub3HFMbMboAuSSQX87RjQt1aV5r4",
  "key16": "33MDYWmmhoTUznqoK4a4jwH2D3cg3g7F42goJhfUrrFt1H9azyFXcH2R6JVCePi1GZY2ojRLC2fGPP7Uc3Q8NHjQ",
  "key17": "bBLSTfbPxh5Qtjyhz7zF4shATrJ51hsSTYbhjhmedBnss2Hk5ZBbav6d1FmfSjE7HP5FbBQQoA1tF3goEzXgGQB",
  "key18": "45wJ2bV2pEGJtnaQsg1v3Kh6sMM2KTR5K5mhdEkreFkjKQz7nyP6zvv6o3ioSbyuAM5ikPrJ4gdeBxWB5JDj1vG4",
  "key19": "45L8W2Rey7X54ZUAUCMYLvju23ZSFTccoQT8r7z6uqzum5LsPJYwTJcKDdEBGRsR7C4YiC88SPuMefSQZ4WJKVXY",
  "key20": "2pf3iSxNGdxvomWiBwoS412hKfEo9WS82VxgKh1hJX4BypzDofkhmGcLWV58qUfX7edjrEndxri51my7frLH4Q2p",
  "key21": "5TRBwwJhpPxX3VgxHnvdWPbD9fotAo5MtjxJSV8Ka1Z4USt7MNQhKmMT2rZNiZpuVi14tCpzm8dY7bsXuy3nNEGb",
  "key22": "2iQhx8edZqrXXitJTNjQZH1RTEbNFdtT9UGop7LRwUhDAnBRd6KdbE5Lefu43m1ksnc8dQagu3Qg33r2zbcVrZ3o",
  "key23": "2v4w8kQZS2ujCeuQR6YYo63U8qutJ2xAJMwENrzGfvrKLSHbmiRiuW8GCheVbbfXuPf1Z9oALzq294ZrbfKM3zPi",
  "key24": "HQMEUjEFhp8qwrVRMr33ED6VFwnnPcczoGc427xCZ7tWmXh7CR5UUY2mSo4dEjJUaNt653LEbP1D9a9Q2pgzH1s",
  "key25": "2W68WEAABLwDtYtdANNYn3riCMCkvr2qcAUat4wNfGefkpBPjHqhFSM5y4YAMfjx2GuZZDStKWBxXrkYKT7jBSpL",
  "key26": "5dgNKLkDDPEUmgy6RPMk7cdPmbWNMZDAwDBp5gHr6zJGZsJabKknBgzXBzTKHCR7yQCDu3E7m5Y4bwqLTdb5957A",
  "key27": "4iFP4Mg8V9FaE2o1faxFYEoMC1TNkkRPAmkxmXbBcho7X7qBo8cGHYKzHuA3Vhhbw5GyFDvFhYMsk3RnQfEeTaUk",
  "key28": "fxkadviHUMmmftiG9B3MoVU2GNz8mh6tkctGzyxz25b9PP5VVDuV6paHfC6Ki3SePSAeRi2cQmQc7pLwYNTdxgc",
  "key29": "3q6Z9u53x8EJCyNVM7zL55nUMbY9n2tKWowwZZBh7TFBicv21yTfnUpXm3P721r2UEPK9tC8u9iPtnQiHxbywy1b",
  "key30": "5uYk5u9iS8MkQfpLyKdnUDtRRRkhqRadDxMcXLhMwaG5LN4FjgDGWkw3J57aTBJVP1AoJuGGcJ6Pqpt7trTdEaYL",
  "key31": "eURnG4FPEgCLAvUk1vZEx8HBMigpXeSQt8jQoancKkfbGw87EDycCARPYbwCxjUt9sodUAGGb2GGJrtELBhMwEf",
  "key32": "3fdaa9u3HNHGHK9FoY2293R1sZmwXv3QQUa1sUqkbfqSiLve9mySL8fcmqoXUi9kWWdCh55AbSRYYD5S5amProby",
  "key33": "5E6G7haSqVMUjKT6muutmmQ29U274N6o25CduY6fRjxrtRpX9ZBwV32xXBjtKyNWmEsfaXtBk9UowxkDFeiASk4D",
  "key34": "52fiRF6fJkQHi5NmwZgBHNBta6PtiTx8GTEQjpBKHgEP4QhLYiHrdyvtUfymRkzJWHTZCXiMrGKBAmyJKRHtFeRW",
  "key35": "2KHTS1FfqBXV9xvbmpwQU9qjwM1Uz938xt6pQzonxT4MK91ADkDgsVCxYNUnn2XaTGBEiYtBUMFSDpc7XP2w4xfg",
  "key36": "5pgdFBQLVQbqgb1pGicdAzRbfB6yYTVd3k6kGyL3a7Xn9uWdJd8pRWEuiq1UnXYXzQxwGmxW5MrgGSVsJHFLJjNo",
  "key37": "2ZiusKXPiNHQyiDd2vAPqWVZZw8YbppCTVSgmNkwKq3ZzphVncuGFML1qZxJvjFqwrLS7FNGCehgdvsbYhU2HeMp",
  "key38": "3UwrvhAaS3J1VbK68NJiLF3ULWrQNAytECFAXZM5AC2KPRt2Gp8vKsBwLCcLWciX5CiBsB7e2i2GtVn8AyF98xUP",
  "key39": "28hxurB1izgCSrxQ6QbQSNRQDDbxZ2RCtqkJAjHq7hBmyNoH6CiSZDFNyJqot5JzVeFopHLo7wtk9XmJaM56USRy",
  "key40": "3w3bF7C4ZrG6tG5DngPnzrXYCb8RX3KjWTNh4SMN9yzTbKyW6CC42MGgvwPCWfSZw1PgFP1nKWHrBLff2d9mPaez",
  "key41": "3X846fYSfzLoUwrytsr4U7o3vGkPSkqdKUSHyK9VNhhiD4Neo1sMVfjxZnNyWWQXYRVthLShuGorrBWRDdCWAuZA",
  "key42": "3E7ZfY8mq7DWnWNwPtagKMumbdGcXAWTb57Hyu12uSKvTebrzj7rahZPhYaDgPc6RHXpzQfoHVD6RFMqDBatWkN8",
  "key43": "4mPM3zVWr8ZqsCv7WtLE2uRrM8riaYjZuG6egxrYUwfBjjgHH44vqMqH7Ejp145P81xCLVHn8eneUxA4C9Pbr5jC",
  "key44": "CkuWM8AdeCQ4QAH5RWv81z7YPmZL55QUcJ8D6yqsbCJ6Di8v1N827LWnWyhbZpvWviYysEi75HNxR7wWf7jNHFy",
  "key45": "5L8i2nZJM8KKzxvq6bd2WiVuS4Ni6Rj4JXW2RbCoTiPo4EmkhP7EHsxqoTf1Mq4d1dE9eUxym5jgMYXRqqzGtyqM",
  "key46": "F8dDp1hj5oyx1nxBng6JgAKPEXmgtRJRpyiwwkDWcJAyobVA86nC8XrffXqjRUsSDFSTPPjUE3osKJJ6gfwdAu5",
  "key47": "Rp6udcRoydhitob9w3xgjdZmX1L5Bjd1BehvPS9hf4Gu1NRrXAGJZ4TteDySP1vZKMai5yuByWHdUDHqPHFfoVF"
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
