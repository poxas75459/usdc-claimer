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
    "3keCbrGbzVSjbfJpkEW9upYTGowdN8qrqPxrzEeSDuHUQsqLJe5zqK7nBeBKdHCDipJnZNojfeHH2JNo6nwS3AGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sNZNwRkE3rmQVueQJiG4jmDJF5Gnxwc5oAijaigDUrXDLyWKM6d2LZJQXvdMFKtrsySkai6DdtMjt66WvSeZh6N",
  "key1": "58M1j8NwaCyq3SnjoZ4NtfggbGAtBDyCjJtjHFEpthUFroW6Aam98TT5mwp6M1rQgQawb4tXnhefToPHE3feN8vX",
  "key2": "4ZeBcpRAEwCVJfdjTzbUG3xQfQCrxzFMBYLUKmGhLiz9L5Ecx1hNhEGR813727yNDVmpxH4iwJdjzRGG8EinvWim",
  "key3": "5nfPaHaD8PcksPxdyBJHoH7Dw9sV5bJTM1M6oftFSk3qEnzhdBc1VXPgAJj7xswQDBKZK7RMtM7Hj81xw2k89Bgk",
  "key4": "3vh5rQE5ZKJwLgVsCUukh3kGpUcj3ZHH5e1DnTubPyRexFvwQobpx6SnN4eed61okcWvyLwqysdkHvEErqSY1vXZ",
  "key5": "3bv8yu7gcZMERgyRBjsfkc93tke2S2XNoTGdAJYU2HRi3Q8FFaFQRXT7V4VupRpPDK4Ap538itb7XUuSg1ujwaPY",
  "key6": "YJsbpiVF4YNa1icaLfVJuQTv1i9CwnfvcMsGUHp4JiS8SoauyPqv2Xr16uYYmV6JUdLNeq5uHHEmjc4kKZauD9u",
  "key7": "4w4XbvLm1e1EVaFTxVKCoYe6uKheNYrMsU1uHZHUdzL15nAZKeTT6Lby8myBDWhUDZj3ohmAuZkusrxZFHb27dct",
  "key8": "YBEbmfRz1ZBwZcM6xAMVDG7GuUEH52dhTmJ7v4bMbhr46hZxtwhPdhooUdffMQcbzyHhsZyznpCJwUwpKshiVNH",
  "key9": "5Dgac5iGkP5iBKzYVrKRLHHdkXeaXiaVyxSeAY2pEEJE9WM2vTWqCNdmsYmPni3dKDQ2a7AdzpAZ3z4NnMVSyXqB",
  "key10": "67iWSiumM9VqLcCkk1HLtfoF9rbMx6jknMJcR1M6oC1rBAk9KcEezhAZLpCwUSJuJuYTBfAQDXvCDW4BCEfQAA2D",
  "key11": "5jnYrtzd9BDhYV3tAA7B31DmL2efLdpWJ9wRKW7nzbEviH64fxmB9T9vTTaCnUFXAus8smtYHRznywvKJkDTTNMP",
  "key12": "3WXdNgBXwrMMPbzuVrXHD2UCc4NkYBAcmkSV2RDXJNF7rykCfM7kMhC1vSgATNdmrW1vspYLNLY82uNGnSoz8kGt",
  "key13": "KjSa2Piw1HPAe6PGbRpSBFCN5soyqZmte5TY6ucFkqPcqS7TSiD5H7n391KV3yp42i7Vfhzy316j36FHgPtg67A",
  "key14": "4j6iakDUMSMvas7aFQ2assjt3QY4nVuJC3RGigvU1nPQU9hW6QXvvFsNL8P5aKEHbfGXCpYnDEZn2LLvkoZx5gac",
  "key15": "5cEQuXqTaPkGGt1z6msYJXtmgwuauRi22FQZAKJeEPKgoeiv9twHtPEgAa8d9ZYkxZgAXTChG4m2cprt1QBo4sjR",
  "key16": "34AmNvJKvZYuATJGaQsXpgDVPJEdQGNcAvGc5qpoo3U2sreRhsX83yeK4i9afyanNLrjXbYiLuuXqc4ZSH9eD3S1",
  "key17": "29BQPK9hkarYug7MaifiTbhFjPGh1GP449cYuFRkVM4LMTbLj5fHB9Yp8caPnL7P1ToQ4NVq3DT2wtaTapq7sfwM",
  "key18": "5g5634Myn4kp2BV9ACSjCY786npmpGY9LcrmVaiPbtT5HVaAP7BrCfMWi7pttbv8aStBYgNiCBo7GoXkMxhpbaar",
  "key19": "2td9gDC3Umsu2s8YmFGBYzZRuRZpC9L2mdYdVeDqDmE596qfAKmWKPojTG4k4LWGX7fVbKor3dLqXs6aweLHhVPZ",
  "key20": "2uDJya7BK9vEqG2b24Y2sJswmYkEqp8MkStJ5yunrELhHxFadE6eWUvzKgdf62arwEzbx4wN7KNJTbKUrq7eTHZK",
  "key21": "4qBi97FrNPqGvEfCz8ZGJiUigYYM81VQfJSZUujMkvzmZGk9GpfhZGismgaUKEDQinPGsesxXCyaoomGg1BtMCR1",
  "key22": "f316DE6jsYB9DMYd6CspDNMfhUTXXctZnKmJtcB4HnfdX7npRxr4orr95VryzGskZK65wFiV1Q2X7o8SFhLcpRJ",
  "key23": "2oAYJ9J6CohxZKcFv1z6qRBBiUc1qiB4s2yswrkBqtpLtPXJ3jQopxJBexjAbrxwTgvQpjbGDbMnND8hnxvdGUxP",
  "key24": "3V9JcJ6DNwPG3Ew2SbMLX2WfeGqYQoY2LjjpZLb65imGt4uWVb9F7Gti72jGWGfx7ufQCnYD6K433nvG43PQm8rz",
  "key25": "2W5Uzs2sPbpdYMN6jpLDoKEet3fKm81TTEP4sDbm1ZQ9sWUYptphHNymVPwHUug86s6pPjqvPtteSWWSX2emwqaM",
  "key26": "2EnkUNGKTK1Uw6rXuRQtYN7H1goMTCwZ49dDEevo2JAJoXatg8TmbyVHuDd1EaWhXGsjWtT3LFZMiWZLbpRFKaHp",
  "key27": "5FXjkMhQ5KVNpSv1nZE6CQ3sn9YiuNPgqwLA7LWkmDWdTmjopr4ELdBzUECqqXYLjcHuwLW7MXvPBGjrnkUAD3rP",
  "key28": "4mTQ1wWvKEPiPyuMaJ9TembdVtec1HHYGXgPEqDGCwC19hpD42nmc3dco24uPndMJmnKJoUAVAHqfiLddfWGodRC",
  "key29": "5x65N2Ge31VyN6oNdN3tkYqF2nrw6cyCipiuSW1Zg8eLxp8R6SVKxKqQrh5twUYJqabVcW8CfdZnrUHBvofeqq1D",
  "key30": "2i39fNadPrv9KA4UrLpsN8Rtc78jAbc1LS576WZJ7ME2h28puMQ6hKbeZRcKTQxmGcVfcduRJS7NwVWSxKZXZ7Du",
  "key31": "3EZbPKu2QzH5xjpPnBQ6WbdHnPmSPQ8zcSoH7RPEUt9ewpz5Zyix1e6efdJQrrD78e7uLVsPyEoVqz5QfJ3M7Mjv",
  "key32": "378a8QSS4mWcrFtoudPaWuA8v4JibRy3pV6hzqQ2pNAZ5e1cB2So5Rw6Rbt9HCocffeUhbSjtMFfijQBsJaNDpe8",
  "key33": "3eJFqmaHzvVUFVZoRNqyugGwaFFz4YBPvQAHkBemfbLSBA7uKT9q49CKWqoQLvVSWW3WDoEhzQMMqVrBpWgHELUE"
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
