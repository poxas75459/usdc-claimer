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
    "36ofQD5g2x7hzfGaK53CnY3RuUgv2ijfLfZ7kNwAJSFfmxgZ61nz8yEihw8jRo1tAXgYpYJfKYcCcteVh6vcWGqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nN6Yo3Ep6qKWb65FMcL957ADgxeC5MMxJFRLUDfsUJutwU9ZXyw2Y47YVCaBmHBoNBMQ74XC9SkVZLWGKQdthRr",
  "key1": "2ez7YgZBV2xm6csykNERe2oH8sbN56DTHkxPGWsWjtW5iQULabE5boFUPu1JawynfWMdmT7Z6PBtCwRDnEZBwy9g",
  "key2": "32GT4qBNn1FPowhQHGFkaqVnkLC92abCKM32CbJnE6BvnokrvCUttCeenpauV1e28zH3KRTBPBMKe2khqKxTptcE",
  "key3": "5yrvWnpYM5YgNahUi1eUwf9veEMUmbAk2C68fGycJmMEZ2F8q63xy82r8LQ7cjDgUu4MoNfiivX9pagrggrXxe28",
  "key4": "2Z3kxS5JkxM9TFwqeLnNkC9KMLREYCDXfXuVoQePmw87EMR7ETrd2AjrX3TVRsatUyzXJnZW2C7AqtHjibRJCQEu",
  "key5": "3xboPSmVQDFrzJ1ogMzLxnNj6qXf7Cfwy1erjmXwyiBGhJDWizT4MZnrsgNpZKr4kGf4FXmAuUdKo5osZamYZrqd",
  "key6": "5ZRD58h7oAYMDkJmece1qJi9AakMNcVxf8ipwEaLCHpPYDPLme36FEZquEXzJra2tC3PCfYj1U31PujjQJqdMjEo",
  "key7": "dMyhV17uNu5VE8oofRRvEuiNZ72dPUAeZBNhRgH6aXkDZ2eoAX8PeNHeXk6QC3EDv8da4kW8hywsb3fCN3XiZGK",
  "key8": "yjMB4KHnwT3rfKuZwB9B8djUjWuSvcb1AkVJeox8q9wLTVTAfx2kYo2R63Y3z3iQYfpsuyR9UchRG9TYN9P7vtV",
  "key9": "sHDkHjNGPp1DNyeuwVM1MksQy2HNa6Rt3U9Ey5vFACAG9MqVxCk5STjYhcvF47FHP5cy9hXCxGDtCjb2SbqoZLV",
  "key10": "4jmeLG5USZRKHJPrZppW411o9KEM8pvAdyTYcw5VWbpdBgAUdHwRbCt98T8hrurMSnEwzWmJsjQvxQGG1CWzipuj",
  "key11": "42UqAGgGezuMKJKv6yWge4795JX1VjGfQCCKHrzCcE3mNE9P6i87kSDPQLnmjw4H2RhvpnY3zJqSfqqbztx4m8mN",
  "key12": "5JMjLFBpuEDXFCGqhbYU1Dke979mn2h8ZVPTbtmMcRAPYKYXDz1BuURKWoW2nehVS5dv2tvwTtTGaTziTv2kWB1A",
  "key13": "2TtdS5WN3JWARcMgP7x8nbn7mbKRpzayvdg24M3HR9cs4SMbwByh8gW6duNe58whmJ2R9kECnwURqKGTr4N2GCf4",
  "key14": "4seDaozUTir9uxwST123ywNVAYoFyK5CfosFnM3oxQHyj8cFitauETC453UPMDZvXdy6yEhS3BViVwXV1xfLiNss",
  "key15": "3M7wjENFBkA4Eu5j7PMdg2HUMmnmftydhjEqr4WAEdZJrFWjh9TJXadEc9oFzTHnDkc9vooh7CYz6qUy9DEnwnRk",
  "key16": "wrgQrzJFqr5oPjhBPZTVKY7cek72Rm9SoYUjcaKf3vLr7aCBYpC5VxPqV9g7cFJvo6upP21YFdtrt8wWqAGsZtf",
  "key17": "22jMkqH5npSaxiVWmqjT8DWusPUBBtwJmpfY6znrLcHJzVLnvvdrK9hQBpqqrSaBh7RVXAcmnGmn1Rf1NtguS67P",
  "key18": "51RB8QSrfC126NjVGWwxXT9BMiNX6M2u5EsNgNLT4G3kMyfygzwKgbftUZD6WwZs9D7uRL1MDt1Dt7ZSuNeqgXx5",
  "key19": "Zgv6vFwQehqhGmjcbM8qdFDbSaR3CYXJYNEsxGXRnpD5Arzgsexvjv2Y3rrA6vPytZASVPYfc9yc3ufogrFMXAD",
  "key20": "2fJV4upUmULZY584So3tHUtoYBL5a74npqNF4dAKE5sA5jauXCXX79DvrKTRCKL52Z2YDibJq41DN6zWu6HG7Y3H",
  "key21": "5hgZRxiCqW9r36ykx1gFEL7aawF4h678kWjePfpjbGP2SogkVQNKPquvg6ivMqTw4cZFxcV2caMyJwuWhW2UYcPw",
  "key22": "5NtGzKKKEJ4wpaj7L4iwSMJWy1t7ExzAqJePYr4N2VKrY4hCVnJepJhSy41v5WKJ5Dc6LabFC5bBZQJq9Eyhv9U8",
  "key23": "rkWZWFnXAd1emiu5YVYi7abNnVGkQzDNYNm8RoZ8AirsXnkroyDKMmpc2aFozs9qvqf9gmUYsv794ckiSU1fjfM",
  "key24": "MpQSj1MJ7AcTrSJVBurGXRhjMTELMGU7qRQ7m73yyscdK6J5j1afdpS3MhAVtGqHBYU9McWQywMQX84zd7G4FX3",
  "key25": "5ix7SG75jyS3KxbxWpSbwwG44J5qsvfoKmvnsVduEAjrFUv8gzSRTBvhM5oLXLo6m5Qvirkc6ymny9YENfHSN82m",
  "key26": "5GCadNrrL2q4caKVsVWtuvQ6xYfY8WVCPL86YXnCbGhivto8Nteeqi4ahc8PiXHoCBzptisf9ivi24zMVVqAyc8f",
  "key27": "QR7R9PQX33r7Jat6YG7p458KExJmQPBciZRWm9eHFb3PM1FC3Whs9U21C9fPWhnzmJKNoBkeeBopW8QRMTNg8DG",
  "key28": "59WapQDNHwVonUDq1fpE8q6PnYWBHuAdh3EhkffudC4onmFDwtiuPdVgQhzKeuWCARfXXWXtZYFaq42bmFVpCKGM",
  "key29": "4FtkwkHYBnSGHFg9Wwi1drLks2QikULt6bBLPXQP3KeH5wE1gH2YAMhWwHQJdrEWK9o8dYVzacn8z3hnf7fRWVqb",
  "key30": "49B1UAxrnviDgS4J7Ci6k4pSXni8ZvrSMLR8dkwhb6wgEd3yipnjDPxsrEcSudfzti1izAEFxK9a83kojczULQkG",
  "key31": "3tH3VuesKk5T9LSgrJ4CVkdNXgm1JtP1ZYpnofrMjZakGv9ebdeZjZfPdGEPKZcXzFZAYcv77WQnj4CBaQzjVH5W",
  "key32": "5VduD1YCd37d6AnP2UNhaATCe53ATfgZF2WS4YvgoeTqmrm6c47dGXXWGgZhiaMFSKpqZYownLeggZNm3DUJVwir",
  "key33": "YdBaNboeiFoPwrf3yYNkZSrPoUvHRmdquc1EDcpyKiqhjoBdDrq3cp8x7hbyJt63t8Lnv3pxscqZmdT4ryr5Byv",
  "key34": "2YNyVmkVxsqmBn3rfxxv8KA7ZfcPtsHcxbDydqSZYDDy9yEhdeWgronN6oNzbQtmuzt63cZy9X9W2P6e1yGjGchR"
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
