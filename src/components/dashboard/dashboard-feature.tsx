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
    "5xRmx4KjfvRQ1xTMpZWM2UXL8eTRDpPU9KkKkmbu4ZiJSm6WXtcN4v1v2Rwa1VbZUN6YUESK7VMrmb2fSjY7vQsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cG2TkKZBmLUMM2RkwvHBb4nJaqGKmwnwwGcwoipNw2kxGJLpM7PDyDq3VkcafPAEXZwhLZeo6PedQofbgDEhip6",
  "key1": "3PWHjDNc5t8Dc8Q8nbSGF6MoQ2dww7qKUTLjbHEFQJutMZRpHzFq9YMpFCRQBJ7dWK5Q7xdNjKpwLvynnj5XqEmX",
  "key2": "3vi3TFxPwpCqz3fD3WA5TyiCFCWA8xhh3XoU8Lq7SehwEDBDESgMHEMjTj5WW4yWDgk7sqtmoGmx2baTDyzvKCZw",
  "key3": "wwGW4AugYLLQSD19VDVVigzohV8zhm5Jh63Lu8V4MUhRatAP4WrZdmYTEsaNxPFhXiHr8RzBja81fhuvey7sraY",
  "key4": "2stRxXBmu3bDuQWPz91BrDmEZub49fDJ2kgqFQQJ5rFUEpkuQdSfsE3HK3AwoYYTdBHrqTuJoCWbVbNc7XTUdaBz",
  "key5": "2Kkp5462S3iZu3km4BdE9ud3CRNGFFp9UEE6vDxrXEZ5r4pBt2wAmy4ym4SdmLbvh5diPuqr5w1xU8e5wWW1DYyk",
  "key6": "4tN589CLmmg2c3Yon5xpcSAjo5WYxbojQBfygYJ8pisyrz4pgSRVDMgBhXiVdxmiSoi4pPGaFUBHBF7rqiTbe3sc",
  "key7": "4vA74GzbdR83FhHxDYt5kiryH2C6dRGPywhxtRvMWTjXyenbaW2HoNPq2yQyu1Gx9h3e6xY28vS5P6H3qmzmJZwV",
  "key8": "oTHcxWmNBWXoDiiHWomt8VH7fg5SHdjfRxQpvUtj92VoYKtJaETaGQKZ5V7ryhJtZk83BxcAu1DKwX4h8xb6M4G",
  "key9": "5wrtkRF4g9aDRqD5apxCz63ALaDzYFWLuFgXz7DnEfNiVj5B21n6gSBvE2tdrtG9sGpPy67t7JRbymLAuY2t52sD",
  "key10": "3Wh2qmtBGV5ms64zF9gRJyqgCFH4CNgYzuji688y6ETJTt39XAD96obLS4FjgMv2RihGZuWrVWGjRXguLDVh8HuD",
  "key11": "3yiKFJMUkNZdDEree1o1GZAEf7qouDFKehqMJ9ioszZsXSwdVh8ALg7Sssk5wrez3NuppVkPhfpKCyt6Mj9F5rHk",
  "key12": "2PThSufyJvfTy7ECdzStPWa8zx8tbTKGuZ1LeyaAnq1h9ikPFdWamiNArCroHkLRgUYpx8iKqo1AeHoNuRDxdF7p",
  "key13": "3HXsPQTWaihYBrgQNAbCbAHFP4abGVpdvQsB2qiedDU8W596cT11CUrb2UCtfE33mdnMUrZGS17FdVJYDENorSe5",
  "key14": "3Tw9CA6Q6GXyitvYcbrpMpZQZnbqKwCxhoYCoAzUWK9gEnoQ1ng6v5jW4LBkLnjSo1TShNvCWWNgsgTi2wfLSf2x",
  "key15": "3L9dBGNH2qRhXXVcGnDC8ZRNVtBR8UaAgcbVth9qduo16PbYP1TveJXHC6d9MPvTjEaNa8fFWJUw5hTgrhQU5zqN",
  "key16": "2ax9ncdmJYEQWHFtjLBWibAf6p83CX75woFcuMA8kwpz71Z3E6vBBEvTj2W5qNYHZ8ghs9wfJuGUEmZqLHjcNZYD",
  "key17": "5PUxW2HBCj9r7WzenvFQMuuAF6a9aC53hqsofyvSZqwBbH4j1WxCC7wB2H243a2KrC4xPwsnZSEnpRP9au3kf6nc",
  "key18": "Xoh8ktEgw6u8yoqZSQv6wPA1JMAVyVdDJojgUoTuL1giX7eWY5kN1cfztV4pCYsL77XTcuKeA4xJm7qjSVYz9sY",
  "key19": "3Ezgnd8MR3R2YZyuGpRbf3F4nGkaorLjB7aL56KmV1Y3Y88geRFNn9EThz7rcpwAarCyu8ewvcC61LzStmwSYDHJ",
  "key20": "2JNvJY1xmJiMEo8uSptorBPXpqmvsTUYgEMxkbFZ4iuapGy1JNTvAbfCGkvpzomKAcY4SxGyPm9na3MD1xYBFdqq",
  "key21": "5r1xxSCx9TAs7MkHTufd3aQ18NMbyHEUf9sg85AWwK2fiT2ypsZLxj2rWXuBN9S15yDXNfK19AQS7nnKojFbHVM",
  "key22": "2rDrwuMKTQE9S9cHzpF8Afugb28j6bjdp9xBCwawD72qxne7NMqYdLuzBiYcZ5zDVxtqhnz6oMRn6QWAPNYq6zVQ",
  "key23": "2Mjs5eqLXparysnCo7jYZrEWqyE3FbEmKUiUgyKFi2RrLhrZUjXg1Nmz2Lbr9D4W7jyGqLSRawh2iBhmS8Qk3xSm",
  "key24": "2gTYgYWX2tpiFRp83dzcJ6sXv5cEVJwBcUthoNgqVYfNxebHmQzzMBnkwT28WNgt47JFdgX9yw8ww8ZXN3Ehy66",
  "key25": "4iPnjSGfLCLmNu5uPi5NBRRUbeTkuimCvpZG8ibYFPJHSbX2eEPGSyWkxQM11Xn4Mi7GHztELBuQ9iW8XJMGZLju",
  "key26": "38oZUV7VfPSciCtNhPgBqDGEMELdRFbQ5ZLiPRgvq87f1zn5YCAH1KrBg5yv2MTdGmB5ASx5v2Fw5AncVRfrFsuD",
  "key27": "2wnB7MyVzc1TvM3QPjYx7efeoGM7znaXGvwhLinztvUjeFkyrfqzxTfRiRMuSXsqieYQaB1zQg1iuWh3gE6Ez5TZ",
  "key28": "3unS8GXHbWxeA3JLxjjPHcQzcbxwX1V7TyAWbRH6rVALgMcxpW2NhGetQYeeXzQavFzj7xGhZgjrjiWHnEax92JL",
  "key29": "67B9KjUazxZQTzaM7QnBjmNRaHU4CRMWmqc3hMZBK9z75y9oTN6VadY7DhAYnumYZEE8n7G1Av5BuW42nVE7Q9dM",
  "key30": "58HuP35jTw2UusP2up3of9qprVy794QNZUrpEsu6xZd1NMF2xQDhBRA9YfCNQxEg6hCveXv2L9q8W6tzCrRjWirp",
  "key31": "44FBiMDxyABKjpMuToKEh23rzfWW2uanDBsvFm3b2MhQozpzait3QGY9YTGvL9CArfRpdy2G9CCk77B35DxPuowr",
  "key32": "3yoz54QHd2SMJsR5rctTKee2J2JtnSqNdPPUKLHQZ2T7yhokiUGBtVfcscHURxxGCroJzn9HDsR6iutufDkeXGBy",
  "key33": "587tM2FNe7WoxafHk6fWfvEgZanB4EdFRk4C2B45TFmXgp2sSvDxFbzYPFyfLZ4rhfsDAtfniB58EaJg2GCXhmBd",
  "key34": "2Rr2GLjUGKnbzKf2q1kfJSVCfVr4fhpGGVeGi9vqXWK29YzB85SYdwRpzHvj1LpcMphqmCgo5v5fYofQuEa48w6k",
  "key35": "4zz6jhmwnymivshBoEwvt7NdWXvtrU9w6LJsUUEigK8vXTuA4o6GevRgHhLHYkYw5aKCtaCSef5nFNxQ9WLxunk2",
  "key36": "3zXUr7D8T8bjjWreeojLWgyJ7FUzVFq2w2uQkyQqeddV2B3L5jPBGySCVWRYLBzExfRSF5pS8kN3dAJFyDmFkpGP",
  "key37": "2ZXPh2QHJFJq4eKaFDKrZ1XT4jDZJ94eim7RPmVsUX1Kf4NWusXmHRkmxAcpQhS8EEJF8ZbWHkKx56JdCRjYE7xH",
  "key38": "4hsZMp6J14CeicSYRC1QRhDXG73MD7sABsLtW59hXP1YrwREi5gycDZkHxAc4McnfUkNuaV3oKiFr7ceQjpdnCAS"
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
