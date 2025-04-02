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
    "4RGPsRPNx2XZMHkzBWxwifKfdYvPhDvt6UhB9rkTmmDRhETEziUz7e1LqfQHXfW3kKjX2xGHTwGc114aY7CzB5rQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WwSay4etAZqrPvyx4NN1PLQvexxhcZsr98Yb3EuqZv5i2B5KyqSdTbWxMKDiyrD577sWpQeoGmYHdiCjKQok4cB",
  "key1": "65LPUHRAKwGNAjBBRzFj9RE5hZmj5ZgVbGpFkFCPGgZoBxPKpTq34m3RjdsDvT4MtJYWvmjMyK2DuXAjB6Ki7seZ",
  "key2": "4cakVqE2B1PF2iYXHH3bG87RJvmaCvCZHQsECLNid4Ud17Wk2ScwwMrzRtKmfz9hPXHGgHzc6UGBqXWwkMgKqfjn",
  "key3": "4AvH9q3jiLrFb1ARAKY7fDCRxpwN3QjwE5pv7YHWiZYLf4ci9M6RZngQDvMik67CqepnabFkCS3bGN81hKQpNx15",
  "key4": "asgnwUdb87xR4oJiTK8dD4M5TXpjj4zucC1hMDbDMLXrpDw2oXwnKPYSbPaZxGaSv3CnVQ2pdpXypUuz94gnx7C",
  "key5": "LqrL1bBuHnKFEc99PjSYv3XHDZe2Za9n27LoLj9jk2rtYp7wYEMLJDZcEQaEMiBTi3aG1SBNo1Yp2qifG58UNeY",
  "key6": "2ST6P9AJ8fXXWjWQBNQ7263ankWLwNQfR7CSyQcv26cpXdLV7Nv6Us8P7v5RT6JvYpLcJpipqmnVtZcDFesiyzqE",
  "key7": "Duq7T8Ay751nk2BAaX96Mc6Tc8wpNw8WdQL9CyEjTcdQz76eJFrvQseZtpMdENGVQxm6JeGUcmkH4GpncjSdj5Q",
  "key8": "61sLTiDYpsnBAPV81gWVqrnPQ378wi9ksnyWM89ftnhq9db279N3s773BoxDENuditUBH8AJvUbzBVSmt9z54TfD",
  "key9": "36853iQXRNRZAywGy1pD1TGVqJ2ojNHZTQAumwWtzkkwQ223dWe3CmzLN29aMwADcYDA9QxP6Led3N2kgJdMBHGk",
  "key10": "4Cz5kokUKR1GQbNcFwGg9iBCdKz6WZ3Nxg3GW6CnHMLV7NxpoaHTCpSy1MtqFQmYVK6fDTdiqvFQZegZTr3r26c",
  "key11": "MHQZN7vC4M3svkXWpoDHAMe9d2KpZoqNzREcw9RRqDxJ5MPCwRYuHfcy9XiUQwQh4xBRkC6PvchnQomQffXmWXa",
  "key12": "5LAFFQPq6742PCucV8K6b3HvF7yDXFFAqffhf4dMLukVXWByCgJQPnW5UZaYAF59o6Em8DffZ5pPqCvkUeYDLmjF",
  "key13": "zqEW3hTx9rcTH6nYWgzpTu9UmmAjNvfvRQSXXF2tysEU4Q6yX9Ee5Hpvy1Qu6aTwrRiDg3WxrjuLFe3UyK16mZB",
  "key14": "2zmoZKcJztxQZ5qw7LjgJSc56TwsLyWXdKj3kxG1RfLpghjTUwLboND8toodAv4qWbJGTxiB2YZMvXktCyUpKNQG",
  "key15": "ZmEBUeaKVRc1T4YJPJDeGWZykvuxLLz5R444pk218AqxjLV2X3s8iYhLaiRxBzjDXuaEb357Z45zSWjAi7bcoue",
  "key16": "c8pZLXMLkJMMVm6T8312axtTXun3nwAUw2nS4fFrKTMrv7QoXmddCKf9MrgvDiberzfKajjgRLJj2KrbpGmTHDF",
  "key17": "47Rm9yumrPX57sfJPuZF16TDgjybKUCQiKZEukZfj2SvAeUoct5wip3zoH2DFfiGg8m8W64d1t4KrCfMeNXqfXr9",
  "key18": "53UYkxntQvQSzuD43ZMZomhKHygBDVEfxTbwdQo8QN7hNQWG97v1vR1rnVvGFyw2RNqevxBjQ72E4BsrUV2WoeQc",
  "key19": "T8sHEJqiaH8Xur2oVypB35bJ8KbYGtej7EBdth47Sacw2bZhw2R6So5N31CT7DrDwNv2nm5P2RVShpaPioskgEh",
  "key20": "5Jd4Fm3W1uc62uQ6PnTWe28ABkchmYD4NQHUFgq8bxAbknGGattFaffYJNqCrXaLnfR2xXQpJhA1L1rsFWcteSJv",
  "key21": "3sKmpsJjK9y6Wif79UPi1SSn7Mp5tqD4rJ8PxwxJfjEQLZbzBTCqdcqBkfiVzsto4K6ikCBkFGZ2BDKTvYwXfPpU",
  "key22": "3KfDSuiCVhzXTouMPkuoxy9mVMXmHhTZEYkREgwtBGtbRFXsoFESzy4YbZXHi5iiRVq3rVKYU4KWaY8nnhteFjFP",
  "key23": "JQ72mNKxBLg82DbimaU5Vz7R8ccYCkeUPxFZvMmtRLUwh1FqMQN49ENthcdNeh6hbQbAvrMhmD5kvtjMh1VDzHA",
  "key24": "3LdFG7vjTSGjDY4YoQRceNYc5c3m32j5wwtQLg8vXrgDRmT1ocPQVkPcA9Uo3R6JxiSGKrjxLJ1LqvJo4fBJG25f",
  "key25": "5QErxtsDm4f9hJf1vLj9zgtKnYQcsDM3fD61Eh8Y1wTxqhu1fZ6trCmPPu8TT5teYo9rS5nPPTXs4JmbJHLuADVT",
  "key26": "2BMn2jvh9kTBRu3mKqcHFp8B8M7vEDiGGKaFL9Vk3rwzjDfubhtmznJWd7ZYag4hMaTx8mqMFKCjBHKfoedaNhv1",
  "key27": "384YdZm2cQZbLeFusSbgcAvjGe7PGjyKp253C7hhKsbXD9CJrLvu3S3e923xKTe9Y4PzbsDHv3ZaXmSNJbQhbwPp",
  "key28": "5YSapicuD4vRn6LxHxXMw5nPd48tAMjhpECZMesD5VkZhLggMrWr3V9Zf1LP6a8EYA1mQ51nPiG3y5D4EBhwwSUQ",
  "key29": "4V3MwXRnCBH4TWboGqQ76LULd38DsxL4vqaYBZum1CcJeSExPp7KiGH78bmNtSq798uytcgWNK4eMsQ7SykcEukm",
  "key30": "2y9nJs9JaGY61sj998rqu36UwuYQPR9eRe6jQZvT9u6SnjZiFbERTK7pit9NiT8DZNtXmHjPADEb2gEiJAvaetpH",
  "key31": "5gALCn1USpCA3nxY3SL1idjRZAog5cKwoTBdMGovbY5ASMcXf7C2izCTcDTsh3hGdo688fiv95NUZVYomFRXErt2",
  "key32": "4A7JFTXCLRV1Xxr9NJnkpQwFtLaKBU1crNZwbeT9NqGJu6sG3zqmwviE2cE9n8ZdGJLE2mU7NfhS6RQvuEFqms4n",
  "key33": "PgQumMUQwGFEgSFRDBJdZAre7fhT372DRYsLYE5tqwc2oxfCgsYFafHMpuTWt36cgy7DPNrgyo4vscu3V7mMQ6S",
  "key34": "45UuXKwMdeNKiXngsYdarkpppUHXQuJe3qogU6y2d1gRtJRKdKyVvRv1J83KKGgiwGKfkzhV2toHEgsdUBuqiS5y",
  "key35": "5Mu6KocVxzNzw339SZNjxe2zucgzbu2CWtkqcmxhwHJ6wGTFkYxVU5yWhGN91Vjt3KvC5xkRJDqsTfdYU5vuQ4PV",
  "key36": "5WpRr54i8f4sfypPaGoGUECPSr5mcGMphKv13SfR36r6TcRWutwdqfKCWRnG18kZRsXdF7cFobsRBKMwF4cvrhmm",
  "key37": "4jgjQScCoAY7zQM7wLkemEGfDD8BccGRXzmWtRsyz5qUKjsCjofhNnRswUS6bzNu9bFq6WQZouXr98TkDRwgpDYu",
  "key38": "yKktSSSuTNMwU4rhaSfj6CiyJT3NvmU7TFp7k9PYZEwsRjMvU2FLg3h7QCQjaG4NJC1vZKLyT7i2MZ29UmnsJVv",
  "key39": "3i7rRQH5ZzeZK4q7HvcwbLPkQ7n25cyoPAqNWdi6jnLc36bKTvH6VNHpzvnTX2uyV7thMpyciya2abXJHeNPBVcb",
  "key40": "KqXCZ1re7NwkUY45BUxhNwLrWpMvFpqmsbLAxwAM48sLroamCtkp93edCa8ffjdwpARLBc5zeszNgRgnuHvUQHg"
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
