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
    "3upc4qH4d7od8PGmsecSdeMPCouV3q5jf6YALstwjH6VLLwaCvXhXzZt6wfqxYdfj5zcBVX4mmrc7s9uvCfMwxuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Y1aTRjf2pekpSR9TetjD3MdJkcs6AU9oGthe6N2GDnAeyJMarZEJbmM5terQrfKogAs6BLQiYFzCYgDK2brTdZ",
  "key1": "j66aACMNVC8Lvc33GdnvjMPBDEzWUja51mjetrBmZqz1sHAu6K8pbKpTAcSyEiJdp2DE6H4WWvUKjvzydsQNswN",
  "key2": "2m83RJBigRgstFCr8GnmvmeJ1M7ZSpgbWviQ1sxTeV7UiNq9z2Eqpdi5qzLpTdenhiS2VnhiCA1k7M5Q1DoofJEw",
  "key3": "5TdpJdrTUQEopnMVhVQDXnDCS7JGXqqUU48WZqdiynZsEZnstTyBcHGk2xFghBVYLw5RGEGJ67i1QmepxqQpk9bh",
  "key4": "3PZ6tccV4bMKubw465M4FTKoGzeiJpg12JbM7K2phxsgrrsTbj4tawu16SD67MBFGdSH4HnUeX4kvgpZB4FJKBm3",
  "key5": "2P8Y4ecsq71djsHxc5qNqK11wdL4DWbneKqGhzfCsAgGAnFurzki4rAXHBsGTM37Eq45ZoJ8BWKQ4TY26UHPkjAN",
  "key6": "5GZJDv63mgvaVVeMFkseae1i65ePVNmbfJsXap4Y5gMkjANYunGwHViZ8Aa9mRZYFvsFUBExZEtp24PxjHPhkbTq",
  "key7": "5z5v1m6BK8sBhsHJCPaucb1WhBdNnqYqUHs9wCpBj44dwHC23ped2jDnHhraCcoSEiMfaNj67jEcjJEwGT4LRUqp",
  "key8": "5ahjRzcTQuKsognhiFfAsyRchJJksEg3bVenAgLt3zeLLEgxvQkBb2DBLoYGA4pLD45GsDwCG3vMmDyJYM8udSHy",
  "key9": "44gDhB768MBEzfoxzCQx8EtHU6iKJwm3m5bS93uvfk1eeLwNsvRZvLggsYB79PBuRGEuonMy9xhYpvrYygJ4sbZP",
  "key10": "4UaRHv7zPmmaxVX5ZxVjDWVYMKZwaiWtXm65VcMKsvatLKB5TRCokXe9nRxJRd1vDYx74NgtUTu4czwwmraB7WVE",
  "key11": "4wuKw68FzEN8Qu8X5T3yRDxL3rJNzJrwCVmWfPHULMgzyLELMifxon9kKW3Lo58WoWddchfwX5BEayCJmoPKiGWL",
  "key12": "45apdTPoqBjBjSCqdfuuYpBm4dRW9Dwbe2cUtZFTSq39kRfR89NUoccBFFzRkepmo1jSmXtuc9HVvUiGFeZRxyLA",
  "key13": "5XWEgoFyc7x8LB88D8ueirVQ5a9XT5rjaWSivbjerR5nEPHroqkqZGpNeDitPvaGRCox2MiFfV4RSgv79nwuLtaA",
  "key14": "3Xtsb9sVNhYKRNES8DKpFZLGTBP1H8NBpqnr3suBWds6oJ8BYjsLF6opBKPwbJFqzUmX6r48MTyTsjsmARzbXEQa",
  "key15": "4g2bRafugxV8pQCBajjwBbMjKD6mHjVGKwxTMBhpJHTyDfSSAkEVsCmcRXNVwnYArZStmMdgwx9QGd48n3pw2GNi",
  "key16": "2EEughKFKH2QRckAnP9jy2TvyQqfGk5SZF8KhyTA9mQfqT8tkGZhCLP5TxSN7YWY2B19kya8mm6h4kMDUdYcv6vx",
  "key17": "3qQPFdtprc6D9Gzvfn1pFayhbaboCdL3tBu2gFaRwhzXqYJz2sL4SwuZchBQrYZGTuatjH9tFNqsXgnXccKemCpp",
  "key18": "VwC5JTvTcu15ZuH22Fnj3VuXdevc84QBfWnLM9pK9HMwtj3Ev6wSXBiuaKUiURMh9JE5iXVAPu5bhnsqJF7JBsn",
  "key19": "54ctEx79NLbCHdTNgmrWSTh8PpEWSXHHBHY4EooZxEqSWUmStLvG22VTwjr3wQs4T9EZjeZWy8yTcjX8eJDxt5KK",
  "key20": "555c4Me7sAYF7DZF77eNjeoQPEzE7vk224XmdWhMsC6ZoPkkg9SRpPaxTQ3S86JehJ3jjcBRU8AgQBQRV1KJFaA6",
  "key21": "4HXLM8h6MAjQf8z3tU25W32AsQqhvxDYMPH9hkRrYFULqNnkB1E9gQBHR4Muvw3RxfN4QRNNvUWpm9Wi8U6fTGpC",
  "key22": "5nzwjRkQbKLKaq57yHehNMEJ7ZAFBEuAhnoQA8pCEfztKkmDnhydQ5Nv2YRX11xEmNK6URxsUu5e9vRujEi8vHA7",
  "key23": "3YgDpucWY3LJREK6psb2nt5mqasaqC93g9scZ9JJbyj37LpAzQdTjWBneDDh36zpBb7gGunwEQJeJVTLWhUwZg9B",
  "key24": "4ErnZb3kuumKgLyNXVWzMjYcLHwnCwMnJJXZRFWensGQdTwbbQb7jbwkaruiztTQYUL4cRuyGVbGZp8sveSVhGnW",
  "key25": "4ZNK4xEXhhmFVf3ErU3a3Y9R5HtKGEjEwCnkm6mgpG5xVuCicU2Ton9wUFePL1NCmU68ouYN7mfVqHabEcot9uHg",
  "key26": "3GyagEmwyKdTuVvo3h1kjYo6JVh75QCVshf5oZg8GNdgQffkwJu8ZBrdRsGitoWcqYZz4EGd3VwSuRnk4Prv3N1a",
  "key27": "kweyGGyaqYgFTPtbuGZgDZbWtvvpAANqiPm7MMqswSSCnT1o13SsTz9Cx256pVh72iRck9SdjMUGwGBxKqdLLj2",
  "key28": "2qU7DtYo9FgE4zj7qsegwAZ675yA5Zbbds6Xxigr16zBrADfTaQyosD1RDA4C4Sm1Y8QQrxKxkmM9hUQ8UqFwefE",
  "key29": "53kje4PA3tr6tY4tfYsN9LNsQcvKL23f2M6qjXrhZzxnNJLbZaoxxr5mf51QHdo2s6v81zuM72aKPu4gxWTFDCoH",
  "key30": "5bmgDvfymMJh7Dz9h6R2uki8WA7GiudC43B9tmF7qAbi5fkzPDAHeGht3jtCeaha65wpsfCTG2j6NP61YBxbrbF2",
  "key31": "fdsQ6sUJQhBmrs6sZDahketnGaLjmeVeCVuwzh4Ma1jt7m4aUMr5v8gWQaLe4t9st1fzi7Sg458u57QexYXgpV1",
  "key32": "3DS6JHtbbNyLhGCmw6AtKrrrGZtcViWvcRMPKcr46BT6qkPobXHLT76YKwR8uYgNpU4MAmfuEqiDcaLcdLHZtCmH",
  "key33": "5qADphUur5baN27gkrih9ah9Ri5rVhEBQgXrJ7CmwQkBTy7d6f4HzVP3nMnEoFHkZxYK1SiQVnm5j66qwE5wPD92"
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
