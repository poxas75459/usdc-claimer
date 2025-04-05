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
    "2NRkG3RUt38Vs5UCsA6YWXsshPU1EkiTMUGk6MHg15MQWVeLDiGh5JaAJFTjzpofJoYbu1qW1e9cutommYEDBTwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hharMUnE66Sa5YoLxjnfubBrXe8NGd6wz8yht5M2c8iYomtVuGqBLsnM1FnqRbrWBwPdC99JgYpskJRPBFzGUXi",
  "key1": "31yrZEd19GiqkDrphMcZHYUUsVZJLKXpGFGroA7Shgutga2QRo6urjvaBAAM4WQKvyWTtA1hhrz4kamS9desmkcN",
  "key2": "2tt7GY5AYiUgbV6Cvz1dyujybihwgeyiicy5UxrB8ixFD2cEZoU35uwsW9Rw75VTtkP21DZpYVXXsFy134PkUisB",
  "key3": "22Qm8BXqGfrsx9HDQswoaAuFY4uQzayZp3iTscG3mi8hMprUFhaWFitF3TLrVe7QvmMJ1bR8Zkv473ivkL9J8XNq",
  "key4": "5RfbRd3py8BuA6aJ9j3DUvPWybCzgoAcZbLRvmbq7UNdG45KRpvfcwAR27FkjfPrXtYH7qY7Kjiqcao3q7r1zeN2",
  "key5": "4jQbCNQgdCs85GJJBGnrEFouieauReF9NuAFXX9exjSQymPnu1B87PS1XSGwJyScKSfK1wQw282FqsF4M83Dq5dE",
  "key6": "5VGtEczuv6beFsaagXVR46M7HgFjRdZDeGTWtruAH8y6EptwKzrxXPC14tPdW3qm54jevuvKVJAjDZ6KKABUzofP",
  "key7": "3yKVUhCzS1DhgPQhWYRVznc3G5ZKzzz9dyfDxRAJX5jZErtsECrV5FQKPSp1aRJgWNd4msAku18ERMXzfzeRDEbv",
  "key8": "3a7Xb3K54xCQEv1h3Su6bDJC54smaYCPM38uAykW1agDVmLznTTxysuMZ7pCpZDPYRL8UNDU9gcbhb9jTUhWEBpv",
  "key9": "3jLWPHLmT7Zfgmn6mPZr6BEYnDjBvx5Hehq96M48sWBnjydtvBo5YhJ8Nqz8vAdHNYEsnV4F6hefBF5W1FSwa7b2",
  "key10": "5kRaRHHQ637XJj7bfaPPrNPua31F1DdnX1HzmDv9qmi5EriVjw2wCVhLRqTGCF7jzmsd9powbNEqiQQLfMwf3Dk4",
  "key11": "Ruv7W1j2dXZmQ41sKzMp5WiGeyxE4j4CCi6TmqBRA61iUcjj4bf1XdW4mwws8wgg4Tm2dEXJmXWBdVen1AbPzXM",
  "key12": "25hanZU4gsf2UZNV322yHJTAgvnCYTQ4DKFAguTNJ6akz9LFhDmK3HF3en8eCLfaFSMY3EvcfGQYYCqfq8Ku3nf8",
  "key13": "4KTHmYywqXVR68QnyrLahWAzAhfxfjrMh8XNQxyvsoaSxVkBrZGkD5Unde22q1zfNg8X5Jm3yX9wx2yCtG3c8MqF",
  "key14": "3dpr6zrLMEQ8ooTPbk4AWbYVkSVswaD1cBZmXwS5pcAtxy4qr7wVHwUFmx294DCdCLp8T4B1Ssps2m5TT576qnSW",
  "key15": "4cUvY6npypei92ZBs7kwN7sArPoFXzs1nWaE3p9XKNi1UrYcTWL3LWYKJv79wVNecGPRBY5McN3GfyrpzKXWzBqy",
  "key16": "5LTXoJDkFx7xvWQWjAUh4AHaWE7FszyM21NkQ56RVq6v5ah3X8b68u7tqQnYKLxHpkuJB3DRY7FAoNT2RB4vn1P",
  "key17": "2o7ntv6sz3Q3cBbg9ReqddCc7sYv5z9Sdad3bxXBiaQ2nWiurJqpfRGGdsg6x8r1CogyrsLNVSQVvsVEry73uq3J",
  "key18": "387a8tPN3fXgzvKSQVAAu7Gomnne9wZcZihnTxtYv2TThXv6MnWcXcf5mHiTer63HDFBZ65v2QaC37btUELVx2B9",
  "key19": "4x9YUZUj51zA5S3Gown4u8frWD73kq5ynC7TGyZ2DFfCTaiRyNcmwc5jZXyCeu72GBrdQeAgp3urQeVj8FNjxqjR",
  "key20": "5WyVx2dksB9qCCrRr7bzawHkPVm59D8vBgJiYsivgu1g7roDZZPZrxpFfSxvENthgArL9kcJPonSeEXj7m2UmrGj",
  "key21": "3wwdRx1sDn6Y9rcLRCHfP59mNRXMbzeeXZYjoFiXJ1UdVAJm33bdB9hXY1r2vSTHXcWusxGbgdRVKpTp2Kk9BNgn",
  "key22": "2m5YA1VKUKcnLw53ezzNiYJBYAWwGBqet9rT7Qm7ZzHebdWi4gggM6Dbvd5zW58zfEhJaAhMPpubFVPdPybNHPe9",
  "key23": "2PzAcdjSHPiyiHyn5B8ogdRbk8x4pcLncQd6ieEWJ4TrxCkH2qPj2uPWGbXpWp9nJ6KvgmsSFvTiYC2yJBUPuTWB",
  "key24": "2jz51WGyc6rpxqr1Q5mZA8WUpxcFCmr2ViAuLZ9KxSmr5y8pnM4qdLLDDPK8Y5jXLe2T7LdozxJCTeKLMV4uXA2B",
  "key25": "49HwCGGgCGVjcAq4RGbdG67hfk12WVftwqcgSNyypYK8ZzukmKpSdzEJo8ABr5yY4Hj7YXYNbFAP9hW7aXXjRytf",
  "key26": "4naytN4ttXPjWgTgvCdt7VnbAJeX4PgbxzDFPzgE8qbsFYHzqZFvDu2xLnbLt4hwhubaBGer2rFy1xCpqrKCWj1u",
  "key27": "5JExYyastimDNtkGdzEdMJ3KkPZGMVQCmUmKBnydgZxz6H1LLqYuqLU95kCcQiLn48CVJx3ys3PBDvptL1Hvi1qx",
  "key28": "363N8EhNnTEvnFmr9XRjeUiXWm8Pj6dTB7qrrCyfqAugAy6kPfa5osQJXd4FcuYKuvU6tSoqR1iE2h7tJktwahdP",
  "key29": "2hDMMcPMm9Jxdvah6mDCLTCbF45MbzMfxhzf2NiD7s3qzD7EF578vmVVsM7fhEACR4yyKxZYQdW8zt2yG1UZ7drM",
  "key30": "5DFUVvym12bVbRRUK6ck4AvKaF7DSGNEzkMaQxVLEiQdYWEyWaT6jAFofhTpzBFtvZwMVa4H35gdMbdx2eWRwikx",
  "key31": "54bvs8aQAoRdCuRtJHHosy3kwYBDa2CvAdtGgdb1opVPiXf1hNTbqa4zRpg4oFpdqmzq23ZxvvFtFJ2NivaCKmH1",
  "key32": "qmfBvW6vYUjJ1MwGN7L9PF5QAzTS7iJGfu42Y7NAw4vAgHa99a4tRTdEbkTEkN36VTyMLXYgPvhEXL2NqQPrS4e",
  "key33": "DujLhbCDnPDozGuGCSXN7EvVKLQLzRd5McJ75E6e8eP2MPWS19M9DUsQexgc1yy1SdHyXJPc9pUJWb4cZUmk8Pa",
  "key34": "5DBBbfarU82wVWRrgrnirCvEAD9DyfiwpHxMcyh91Snow6sn3wN4SgBcChpdK6Xiwikckk9x7bunL9MW5JpVYtWm",
  "key35": "4uUu5XvQFx5oTXHVjqJugZGSwtw7kv7AjvGCFPZT4fmvt912fZKCYwHLcgPuRe13BZkjtoTmbziDoJzdXvEy1UQP",
  "key36": "4gjc14qY2fV1MvvTjYe1fwW9GxWwWe6CJAbn1HgDi8hrJpzZhQrvjGiYAS63dH6DXNTaNTqwRyVMpyeiJ2qvkF8g",
  "key37": "1fgjTqdJznND3jLRk2K95JF1KrcazEKzFDWPnYJeHP5wDYupMFY1trtBtPJ6QqdUdN59t5zjGzws5h61qJ1dHME",
  "key38": "3sZTZgE5CfumSKfCoBaZ28BLfKRyiUL8J8qWCtzp8F4KUVJtTXFX7w7zp6kt25P5XBVwhq5p2BquE1KLqCBNanVb"
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
