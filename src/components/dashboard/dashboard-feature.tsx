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
    "3GaucNPyDvDtHDcMYMXQRuzHZMN8EhrBaDad1rjcoenC6oo5Dyv6eK594o3uJaP55tfRtdSa7eg7DcS8ppfKvej4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UR9HMQ9wVDdov1JgekbT9Z62WDqFA2bFknndnjZZskLdRXJeVxZJDDrLVuBr8MA4XZyYgPkihZYBhf5CgfTLKMo",
  "key1": "2Rsf1FnFudFiJiiquRHpJb4wDPdSQzjw5ftwHhP4FbLjwWCTv1n7asQHE8iVS3aya4wMbGf6R2UdN5dJqkpds1TU",
  "key2": "q3vECXqv4LU4EUEYSmxSChDggdVZu9Vd2rD3ZHRWwpootUP5T6NjtkYAPz7XTetGxsGHb8BUUQwhL7AAd7GTEmv",
  "key3": "4eqMVuFU9nRUm2yf53rahnS8LMzUGW7y7prNNPKEXYfiRs3kmf7EwJjPyAYgfhEvmLXwRDgTKuntAfHjiDiCHsjj",
  "key4": "3Pw6NmNVdC4xbkEE1PSHLoiSB84XTqvZsikVHjeqLQu45m5dsmWca8dVkv7GQfRm6yLvs2WHzbDCWBvHThBbF1Zr",
  "key5": "5GLpaC8rxaWT4dLLMyY4bZH4hRNknUDbYinAkXhUuMywVS4BDe9as5ePrwyniDhVNnq5WAs4ahKZngyNpE5D62pg",
  "key6": "2uT3vWez3hMRS6ucUYzeth2pQPByHkY5Jftn3vhmVbMErtLRnrRPCU26DbncxAUAiERZfgYZSMshVPgzSpGWQdVg",
  "key7": "3A4wfXQLLg6Sfp1AL9BX8C4L9QGRkcttgwiCRruyKfJxCU32XdZGGNDZBtYYoD3MBzbxTtZ47vqujUtutFBPhGEC",
  "key8": "3E1c69NCXpkC5ZnQECvP1jZNMDdyBoAecwxAoBnP49UQkvXBWbNgUbw1AH82QGYvCYVjhdzv1FxUzgsnTvXu2fDw",
  "key9": "4QuXbM2gvsUCHA8QXv7ztK7pKSkzpSznS1k4z4NwkyUNagvopZiFt7mL6sA4CxiuQCiTBTQ5Qsxc5Z5ARDicBew3",
  "key10": "2nF9Z8c5VG6PGy4u7SPEk6D69gdSEvULzo8LLH2weytM6DiHNy9JR8sFKXCVGAgQWxCyi95HKRhtTUHKUZXNd7Kv",
  "key11": "4LE5DmA5wtbcSTyVZFcNfGUAQq2PFzEPFMxo35goDejQvBUvFpMUHRVrp8dLZaeLYkGipL1EdTDFS5eoHETmdDUB",
  "key12": "3QYZdWR6xf6LpL1UudNnDtUK2UQESUsQnBCjujdVKpmk8PqZsapdPcTmqz9MMgLDwaaCavvbpHmKU8keXsqyC25G",
  "key13": "5pztFpPiZUuDEaCPaMQLZZnDeEkCkeBfmA1McNkaimGXtg8bGuJM9K3n5zgUH5Z8Bh9qDvJjxRJvkRg5cXkHgPyL",
  "key14": "29LobXwnfykakmBA7PW3cghr5FWTEkzsvJdmjpJzqiEMt5WbYoMcbbSFXqepdC1eTBKuEiVxuAqJR3UZtjMhBW52",
  "key15": "64noCm1BfjdYTcouYXhjp19pemSZafWWUmSDHro8E2Tu1sAMTofByMbBRadHEnrM8cv4vmE6UaRD3xNtsSubnXgu",
  "key16": "22uDf3LE4zb6c9W4owwhZzqgW2bmpTHsCFDeCwhrwgrAGoKcb8c4yhBk85HBykazXDe9Nh2LmTKwaL5zeTqZYh8W",
  "key17": "3pheMHq2yZ3SuTKyizqgkvexpST1uD88dHEKFu44dktHavjQyJYgHD78faxTxkojBFxzHDE4cLkAk5jLcwUaDqeM",
  "key18": "2WmsJMZ3VTprQ96u9EuaMQ4mhX2bWeqb6P2JMLyM3EWjWaBqbFYyKKjYoryZQTN7owzzU71Asw5eyNWKyJNiGmTE",
  "key19": "oxDzs4hwToFDEqcK9qichFSEhjTJ1gbdG5xJENym3ymh1mRKw3sMwBo6JBmVd5ciDQkcLuAPk2juHawX9ypvtqi",
  "key20": "5V8zUCpRVUojzDqsEpr4ZatnYirofnxSQJ4q5JHrowwCVDjYAM1nNcZGc1Ho9qH4K5KccufrwVqoQZeQ5KCPFnGc",
  "key21": "4QoacFkJ5YZV2FqsmzQPKWBvoFXHFWADAEj3bdV6AphqzKes5eTxL4r6pp7RTDZo5MTeQWPKXzJd7X6xTc2UwwpT",
  "key22": "5dBHY9nK4gmFWH1bUZWPwfPTo7cFXvrQ99FWdMHi5boKVQP1YU76xmkYeTGrhPwHucL3e47RKCCNZjSYSNwEbsgx",
  "key23": "24329d4xij1rPUynRwJaeEgi3duTPL1XkSz3p4TrKbSQjqy12QkgJww9Mmin7j7CbY72TZAczJApZAuYkHdFfrY7",
  "key24": "kbjbbh4EgaaNWDPPps54bLx9oQ8F7R6iNExwtAb7cHdzGtyCe3v7H483Fa3hhzsbbkcLwJ78hNMJewRCa8MP23p",
  "key25": "5UvYmRYfQD5K6R41D7Dqt9g9GEeiR4i9zbGm97WQimjJZwbd8heiWaSHmKPyRZt751LgA3Q4TQNNaGEyU6SU3kQT",
  "key26": "4pGFApVTd9saccoSVvXQ22hsPp6nXdbkZ7X3atPBbQj59HXwLpHEDdwi9oCNfGofFuoQEq1EiwqLMMZVzGfawNpo",
  "key27": "5CxaGGo8kdVAoy456dVtjBiHd3EwTpZEj83dRpRgA8deVQ2N8wuZrkMEDwweC5VUyFDczJVbpQJed2vMS9mtZYzQ",
  "key28": "mmHKmotfPHsiDxke3aRFr7tLoAked2wt17z6GAp4w5ucefrUhvdDFxZ7pC4snesC2HAAwukAxByNmzZSBrgPjxx",
  "key29": "4vv4BFCuW2ivUrexGUXd9L3vaeZUmrxQdfDn4ExS7Jnuc9nDUYTVApUVCpGeDnat88Vo1RLLprWrgmZiYuckXcBA",
  "key30": "4LZ7uuS9jVTR3UbnEagB5BKHrQzbuG1ivuoZgAPYVEk1YDMFnHQmrVktrEn5kJCdJaJ6KfpFzxqpSWc1DhEMg4f",
  "key31": "4QHSKzpQiT9HGcwttJt2ReAAvJBsGcuLKr6yoA1atvGd1wWmnvLSHDWXZMNiJfTPzzmwT7828DkpwLJ7qk4eEV94",
  "key32": "64ZPFwovVvuDzpnbm5zBYRBVagAT2UmpPJArLMhXy6pDWFALyXQhbkoZojmyaVux4Arz6Jp8cqpiRtB6vDFpekVN",
  "key33": "5BKTTWtfTXVTMYHqwFuhCeBVYUvmSs9Qx3fpiNz4jVFsYxVHAoXS4MTen2dPANnFDSsDWhZfCn9R2Mz2xd8u13dv",
  "key34": "2pisyuvxwMrgjbySchS7Yiq1SezpG2sS7jmMiu9oG7FfxM68C3nKYv72XF1uBPZDpsjjdo2yZLSqfMPQfxQsQT4B",
  "key35": "4KDYkJi4LGVjgbUdccgCqxkbt64EZe2Tuo6JUWveGbZDqvFPSj5386ft6YUsTyn7ewRdPgJoh6gTxavdUf47Jpuu"
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
