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
    "2FAXj7BMLyf16SgDfndowxAVKJQh8F1iJc6uHoWKbQxow6oCnXc34UvWeCoiza9chgwygELmZubbKY3yoHdBrkg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FSfc9G6DQh8JWXqj1cbn6UQDbBzNr7hFXnv5r9pXMcqiTAtGFigaYStJfaJdBeeYdDCWyqf3UcCxZjamz9WCc3N",
  "key1": "3pA7obWHCX9RgHrJRXxnTKfPjcH22VUet69MH5yph6tnS3HPxzY6QiAZBDyssNrSDD9S7EcAoZf8kDVCCM4Q2HZL",
  "key2": "3uMCJZkqsmpFetP69jtLP4GpZwSfTkEB7c4bsSPrjzP9s48TZpmzSupVwp7Vhb1k8TKwKeXoGG1L8jiHd8S1zcHk",
  "key3": "j2eEbVdGwSztyEAm9ijzMm9wvFqfJenXbYbY1Z7g8Jd1Sm2zjQqQ4HVGkegdE3EJkRw8Z2qBrzWJXqmJjFqhz59",
  "key4": "5zoPodzTKGy4q71ijsaPqKjPUD9PrTFttAfRFimfLskds8LikXRQBhGgAMMaioF1U6A3bMsaJ5FUnrEZEG5XoRSm",
  "key5": "2CgJPLy36P96MpytQt1excCp2gxaHjxf27cjbMHPXQoa8rqfxGux54qTBES9JJwheoJFr13K7WBFAXcYrcufteEB",
  "key6": "3oDD5jM3AtjcDzvJN4PiApwN6rZqm7ujgtrS1Ji9cLkzA51wYVokwmVzoXFafxk29wMhoqCFRmj2KKQBmnLoYvqj",
  "key7": "26z9LJh7ESSyfE1qnkHfiP18naCUr2kj28fYRBKxmjLJpUSS84eaErWkY5CoWSHcZ7phaoHLaBR3y8AwnpkiCWgC",
  "key8": "Wv2id5XY5xLU1VcHdUqsbyRg5SZyu53RhvB3jdBQpGDHq2LyNBp5rEbiXWa4zv4Xk8Ez5uhF1i5Qpsj3tLQiBA1",
  "key9": "3BLCcNJbrKzodLWDq4TzfHSLJcL7WLeoj31p4xUhHDiN15fyqVygY9q8YnM43z1ZfxbcfsayU6RWmyqMJLKoCrDj",
  "key10": "3cHyvP3BEq5vtC9AAq1fLxqKGrd8wbU77BQhxR9wi4ddwZBufqXvhXyXjdu2W6sha2x7BujzDEvygG6V5RLLH6zk",
  "key11": "i8BM7EM6RwHofmvm8FspuebZhVcveBwSLcPSYUmd3fRt1aPqaCGW9tjT5wQjKPyLf1BLGjDViirt7YShw7mPgJr",
  "key12": "4LH63Ti1gLibD2pKLqKMdsUiEJPPLHwZ3BjwSqTGF8E3WkoyLhKyUJXPDCq6CamzRuqkNakeGZXctKUtHh2dnMPH",
  "key13": "4Zs2TsyYSCcnnXVMDB2QJ53TvhmY8sWTTpKGBzjpL9LENmd1kJ64JGaqcEFBudFtwt62ghttY5VBiXJhPKBfFtvc",
  "key14": "5JnrDTJPTYSkHv19C92FWVqThnVLC8ocxKUWvYxN6pLesVn8BK6icVbsJtRqN9mVriVkrNqfzeQWCDdX6dXt7Jm7",
  "key15": "21cJVfJXQU8S3xKc8B1Bp6g77KDRB9V5ZrJmEtNPeffCSEk9naYisPm4fY8a5iJj69voA4x2srjNpczmdU8DkHMv",
  "key16": "7LHWRWgPs6SkCbMKDPn2spuLjs1VrVpM3yAM3WukJUKmXa97vBw4Xe36Pi7K6kzus2iZCMLgsyta36bckcr4j7r",
  "key17": "2efUeoBgD9RxzfGzKMCYFefJrVQpTZ4RGCh4hZ1SYqYNL9HSkrvbi3RX3R9nHVzYpEvbXyhByZi9Ytmx5MToBEk7",
  "key18": "5LTLpkyqgM1cNmSR7Lz9uRgaQ1bTyK5jZukHcWduCz4WcdkzirZcsm94AoP9VfHuwNxU2qcSWQNeJU9DskFgE3Ms",
  "key19": "Fh515564i3wJNcnCzQ7wnxB5aXScywgHPxcczzyKJPZR7EvmEVmsRvEVt3uHkprzNcfZcFVgp7VBvgRXSj5iCiu",
  "key20": "4RxZUAzNT2FQ2nL8cE9MaASXBpodf5dQ8Rk9NdLH6E5UUXRCUjuqXEi359TCqLVHqwVQRfzzqS8oRzxEbsmP2aZm",
  "key21": "5tRpY8n95T7R5bs7me4ih7dBw68UAMjCjj2ugJ6W44ZdzFvHouee9CvbHdXMNRrYiv39MY7K5RvVm3DAJWMtSz6J",
  "key22": "5YSdnBGHxuciWCS728g89MHFrAwNTta9TUpqrzkXd829e28whnFDvrL3eiTXNuzJvEjAqxiQ3yjsn3csiEkk62PA",
  "key23": "33FsK9iciFrDzi38JKbJ2qaTKzVPXxAkmV52DNqfspY4wb99JNhZjdmesJ5KtRJ5naDpoFs8wZYxBxaLVr1HvBQk",
  "key24": "2qVXTzYddnWqxSxPGvLQ78d26ybH8vnXXrw6AfrD4Hcz5t8ea2L49skY6fPRaTRGYBxYNhYNHWt2vriU7shhWmaD",
  "key25": "xQBYk4ocwFscipwGtwQrYjpQdNNdTwKBu5jbPnGZoT5zTYXL8oeFeWuPXQtR3qUuDX2HG3nBGrHD6SejaVRnxLF",
  "key26": "oqBYrfPqUdjeJrzsMBgj17iimWJncMgrSZatYWUapHoPzcdKwhqaqbDsnAHLHB68UvDrMMCjcLhqVuM7smZdBCt",
  "key27": "3aoHmmbYW1zoVm6z8EF5roe1kxxaJLUYaPyaEfhX7EhAgQzUf4qxQmHb1iUq1Mr6yvJRK4HbEWHyDxmTvxqWsLid",
  "key28": "2rdX7bNoHghbBd5Nfn1b5jtRHB9CZFwFErpoPwtAw3Pvqz7P5onYihdny1yZRAYvEWvkBvApTXMwEDjJ11rHicz3",
  "key29": "3CoNAgxtj9cNUN9KNYWvSwQ5UnQ3N9iLCVUwWyv9ehyipuPT1gfr9Cceft4VddpcwqFGECjSZxbgSwVStqcppjfe",
  "key30": "253ypKeuekEyXrPtV3GEQX6rC4WJxBHpTbs1snWTRwCXJ2mJHKhBBFpyGJejj7fmJWahLj4VkeJjiW1jwrprYAhL",
  "key31": "5UqCJ4HCV1anMVwCQ3oJuT7esPt4h6bkMdHnYA3dybjC9dYTbhVjxj3y7W7PSzKEY88jAEBw5juALaBh2DRV2JxZ",
  "key32": "5PLP5MBur6xCQLmznDC7vHUiiEPMFrgLjQ7p8MrtVTwBeFU7vDKtdCJd6avmqZsPW2YoPJZezE8uCMLUJZsAFMUf",
  "key33": "4yLb7s5BB13DPeFuVGHSSG4NQ4bKE3oEZmdkBGNAQYqbdi3s12TvH1gRyYopLPEHkf5MVLBZbYYRHyykAiMBisw3",
  "key34": "5Gihh4vhESiMvESVDfNUzkNHndx8DMXC7htfiHHVjBMgw9cbDQkjY7tdyRC9F3W27KkP8xhn3846w3hAGS489kyH",
  "key35": "2ZTBDNGaR1ftTJAT2zsxNEWah67DnrWQepaNm54R61TJtvkb3ARdYLiX1jLBtmsKs7z4VjbVhDWvoWe9Df68c9ZU",
  "key36": "66rpwCHMMnksTtEpE8u7JtJcWfJevdpjLEiuT3uKiC79D1qsirNbKbtefvyA7vQJsuYhJUxVpT3U14sSPMuASh33",
  "key37": "5kPTcBpqgpkfJtw5mPR73MP99TV8LpJvgTv8aZAs9hpBzY1mqBnPs6BtrtQfEybbxPmaa55VCPZBG7Ft4opuXa53",
  "key38": "66Nr199U82VSqjUYYu39rHsKJ8qCHoxsKdKvQXBZnEToAviVamxiLx2ZxBGaYbU4Cz94f1r6HLMTNbQEWEizo6s1",
  "key39": "HEKd2owE2VUSUWdxc6FBfGMVh4yHZ3U7wkhaeiRVKkvWbyDqP4bLdLfbTAPvEA2oYA1CaX91upQEEVeRbKq42S4"
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
