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
    "2QkMHsaqbLbdLk9H3qRgbevXQpqzWZhX8cZgkBJDGTU8VknhSmau5XDQ6nP7wvAjRtV7tv6o2gmmxMnM85Gj6VFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jYJuaHnLnkAV2bwMApjD5CxoXKj7CmTaqAoRyUvwtofQua6zNbv1QxCC6Pw7uD76sN1n5mR4k2oSGPAPCgN6HHe",
  "key1": "YUkQ3WYArvmpejiGWEvDYK7hUVCzyaSW3SeDkrh6yaaRExfNwXnphNmQmZ5hkdsJdN3yxyVJF1nGZSrpxXyopN2",
  "key2": "2dH2J6CMZiUqJ3YtiZzk5RUwKMso3W8JABqbiVgCX4xSrHLcxBTSJkEnMDPCSjjHwm1p1Ust3cdzWns76iwHnzdu",
  "key3": "b4b3mKDNKsS78KxK1VqZh7PG2ibbSz98AGLH5gmDR4tgbyt69SSvev8Vr4XJvXokjNuK1YbAXhhgGm4yfzTekoT",
  "key4": "2ey88mMoFZeoe9Q4vECWDaeyfDfFGnZBCbJKtsuadWb7sJ5wBPVZmYVECHinvwdN9FGBffecof8CTS8PyNjvixLM",
  "key5": "59v6gLT7SzhPpuTnVPLE19tryvN5tozyA79rrwnVqi3gd6EzqLPGmCBrR1qFtqmAbJHUvYMHGHmuvgtTQShGd6bA",
  "key6": "5nHwqzqnChJrHNn4JwrdKG5s8cEb1bgZ8bVfweZsCA737zt9WTXJdJXcA9D8ZQZK3oEU16tas6ryAxNKjvuxKjkR",
  "key7": "fPo8rjbpV7KzpE3q1TiKtdVzWRdaHhFkRfWs7Q87MoGnifg2jFitHaN4CQSwgpksLMBpSK2FgAn6RwqsnCzx6kb",
  "key8": "3fZnKafMuC32m9jqnaCTMyGYj2rnwRPMKp9LmnTTgBHJcPNkQen6fm7NamYwhw1CN5dwWH1HL6btUPPHjsE8Q3zB",
  "key9": "4knHZYyRr8Xirhv7ZRXMmyFQ4kWPDwpEcoigpYa3xBEkBbyS6XVUkim4WWHJQy4T9KaMU8UoWNbMFUYgqKjbgSAJ",
  "key10": "2itYyhLesKQ7ZJiCpycRs7d117LY37L8fR43DnGks1p8AUgAvzLa5CmKFfAwiPjnoG6sqGWAr79JiNrre6RzJZdM",
  "key11": "3EDfXhdohhxVcnZAgQ6hmki57STVBS3GUCizoQKQdqx1bGVrdbdABDaTkXFrvkjzNRjaDRx7AZbStfkBSzaYKNBf",
  "key12": "17Ky2RZy2DhXsTXoeStMh619GjWNydttFNn8RsAi5PeNkboa2VrqR6wsJLx4JsjPDrzuyGDr6kYyGzvotCscUzm",
  "key13": "2RhkpE4HUw8yKAsSWPdtzLbpbBdRESYWLW6K2uBPwLABP496WQv7hB9NX9wAPi7nt2peFb4LCRTQCGxWGM6W2L7B",
  "key14": "3V1v6nf73a9QQDk1GKtLjV8r2gQdK3Y15KHxAc9uiqf5376Kzrn5BvBtsgrahrZPMVhYFQSD1c5MCszkQxJSnbQo",
  "key15": "571QCW31F7cY1warxMjT4gBC8CskfBZ61jGP7KnY6Rqprt4UNtM9CZZ8WueoseQT9JGgxygWwQLgASvXjVMcQw1Z",
  "key16": "5aVutn8CjLR3Uf4jKKDNo1P5swRNjmU89i63fnhLVCJUMfsXZxrSrD47hYedKoxzTLnubLeW3hoK1UJ4D5sFRGBx",
  "key17": "9QTgtipMfChhBT1aRHRqj9aED6qnQwQ2xFJDZPo2bwoNmyim3fxscfDWKDYv9kR8s6YK1NEsXst5TSPLGk7RvcC",
  "key18": "59RPivv9rdrkAqTyHjYtk349q73qqGAJqehDnMmo3nbzYRSMcusX4B84bWZketyf3vcm2hb2U3g5MPSMj9wAtdco",
  "key19": "2odnyepANLSULSaFFuin9sLXNu6SRRtKQ3m8PTRhMAKNXc15smynLcdpKzeWGsgTdLddDi9DLznXeZ3vyvzP2ofm",
  "key20": "4JuGh597XZLsUgzPmK9LiySZEQdiFUZgJ8JafSC8aHXZXLzCuFuGizXhVNo1UZNzQm7tum229FAHTANfDs37uFvq",
  "key21": "2RzhXMWcnuj7k4DA4rtqtEnT1TVnXZDTHTeqGai1HttpJvNkzB3AgeDXNEAkxLzT3VSJZKQNRnxZpyCB3PTMXSoj",
  "key22": "5iPxn85Jz2Rsq1iivzmqob9jbhcjouxeRwsv6xUJsxsdWySa6Jcxq4ACp1gVMSY8qcoYMrhmFmchYBRRZ8bFsfbt",
  "key23": "frDMQxDyJx6g9zFQgD7dTDBx84M1gN4g9CxQ56faoYifSTvHdvGpLigHfs5AWTQSKgKAqri4wYhmpqkv3xAJpsY",
  "key24": "36U3ydbPq3XYbyYJWdwFUD9vbbvy6WdpQzYVMZ9H1TVSGbSDTbBJX64fGJJMDGUoTdArB3Nt8rBWT4CvWfuVcu3i",
  "key25": "EFX4WXE4P48ALKNtT3b9chXcqf9raqq8uHWv1eiwxxuYZHtZyyw1ziajQadYkHc4pxTDtuiYZRGacMsYeQNfhWw",
  "key26": "51tEBQ55FFtXMzfQgPydDcDUzFVweuabvyo7MtbX8CqKPTnpfMEHKNaUb6u11N5MRtdHHwRE5zLseSbmiZH9wk6Z",
  "key27": "3NMwLjbNtHgBCCiN8xSVHfTKiUPoF5gnhmRGPb6GgwxTGdPbmu9skR8SeJ5QeECjFQdNUAPJxfukQAxwmY5ccDpg",
  "key28": "3nY8aahb7A4h5PKiHGMK3kVu9x9XQadTCXH3ATtuARWWJCXgFK1xK1ic1u2hk2ThpxU4efACpj5nJ3qfXx8K4b8D",
  "key29": "2m6WqBCZmRk1RJwcSafSJ7FpQuLEuBk3NKevEEKCR5q8Pw97oeKegJejGc9u56WGsGzoqjD6iNibYMHwtpvnoWuG",
  "key30": "2Yqxa87AKxUcBa2t5anh6cvZ7ip1CEoByMZAjYPhksdQKrCv9p8oFhXVdb6HU8yYjZKhuBvjYn5c9Mghm6yfoxM2",
  "key31": "3LqE8DCCggN3pfKJAzCr1NM17PrwqCBRi2DdGEVr4HPQcA5fzQvVvMb3683vLfdJqXpT1fhX9RHRRswfi1axKGAk",
  "key32": "4PDA3Z4yqXwBat5jU143YDBLX1zp1tJLHsKGJegMq3aUffayUvJqt413KFYg2JCPai8iGSBERVi3FsRxRmoFEAQv",
  "key33": "bjAA6ZfWkeA6uRtXBeTy2AR8ATpjV82iEZcYKBAaZPaAWKZiiQMcHmU55qP7uYH8eT5Hzg8nZXvdUfant7iEtCd",
  "key34": "2PkYdm1dggHh5UKB6gep1mt3gDTNtbnn4RJn5AvdxX3YGAwGUuKteJomYRBpjuQWq7A6e2EJ7dJDNdQCLuGSQNKX",
  "key35": "2TQq9JMnvyFZCuv1M6h71TYRQfmbxBQYWibFYyVbwLaXsxjH3CRNPH4NFgW2YNc6DL1PhSmTuvDh75pqXxu4b2eT",
  "key36": "acaRYRCLTmcCwkaZc5iczZbDfTtWJyiErtFmihibJLMYHtW7pCqFvr5FSaMqBE6WmSTW9XD4Cqd5ywKXiJsEeuN"
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
