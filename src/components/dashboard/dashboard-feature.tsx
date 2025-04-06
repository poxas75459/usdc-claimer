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
    "613uxjMioyiBFayXAzUvryyafwWEswMSW91UB2WnPfYtQ6uPC3aatFEgzhTHdZmhZrE1k1ZbBmNTbaG9GR6SZcbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S8tF3Q6ad3dLhMsXiXTGFaVQkDUVaYaG7RezYKG8pDWAuYDyPEUnQMhsv24Axej7M3u44o7GNavU68jChi8bx7W",
  "key1": "4hukQeZQAqSHMzdZXq1xcnVQ5W1tHTcMyALzyCSkFhaKBzdg6CnqZwCHhgjX7WjQogRKwGUvHepD7T2QE9XyPgiR",
  "key2": "3Z2YYbsK8c6PcYjiHwafBXXPwapEHq1yFSYtYwH8CYgKEqH6TGXb4RNQsRtx7WTTdoph1GEJHWjYsUGM71YKKgcj",
  "key3": "5Ja7HrojD6V8yBgne74SaM9ykP5uSGdoKrFyTXjEw7oFm4eScxURpV9cn8iz5Yuany86KiDYsKPizx6xWdoJiTzJ",
  "key4": "5xhKuA3PZQ114L2M9UmGhVmGsDm1FkZkRC1JDR93Sv9M7PCK1voMboZY86VVQvzJrm9DzfHe7uUscprCDGGwHkyS",
  "key5": "4a4oJvvMer4Yfi94wneL1Nd38DX94gNsL1wo36HthAbhhZC76612YZatyx3ffqbYsS18LsDkTebdkjABE5Xm6A4E",
  "key6": "dw6JryCFUpSgRT2tKVWJL5bBCfKn5HE5b2GvsEPeMqkcHM5SjGHUXiosAfhr7ewYNmRLDpYMR2AnVnk9JJBmLhs",
  "key7": "3YW4CH2Gokf7mZVPLoYaFXGgSVvfBnFnA7CDqtHraAPsmShGwbMnXneHFyzMwoQtKB46tgTgPGDhZzMjgi45FyyJ",
  "key8": "5Nd86T7bKuzXBqHinCVyerPJrGzpifXnduaPF3Fhg8fFD6BvgcdPeS7PSUyGFwEB4QnBq2dwba2fG48Ewa6UWc24",
  "key9": "52tygBkr3tkQGx2uwzyfLEgQwLArnFEpoBMsXzVfAaPFzRMsULWV3sso8bMqJxkStF3i5hAmv69KQq54AA8TuX7w",
  "key10": "4nBSp8seHZPVhfRFS8p6dcaUAGSKfm2W1p6GY8VKrsGXsmEWGZNRGP9hwbFkyVZjQhGUBWycK9bvV5QApxdZPToK",
  "key11": "rscKfN2mwcTnAEsRqAPvqJ3eZnjo1STjuwaCigBxtQxgSjr8Av3vMJtCc1s9ZnquHREAfZUYYT7KnGSh3vHfaK4",
  "key12": "5566HHeeaw4dEYN2TMsU3a1bzUJaoNMErKx8yaZ1P3HYFwEE5BX6m9kgfFpadnnYaEzerHEkNQFPrZMFtPkiFz7c",
  "key13": "3jJe9apu6NpR9SoDmogXCABEdcEFGeGU7EdaTKjbP9fJGkrD3CHG3kARgNXuzfGdPakiVMs7gz8qfYdZR98KT9eH",
  "key14": "4eLpvrqLJxFhH5Cydo5nns1cCETH4aWt9SbUxVzEdALK5s9ynfYuib1gbhiFCxWCBV8Qb6EixEruMRcu7uxqCGcR",
  "key15": "yoqXks6aTJMfRj2gqguABHgeHUNkh8K4g3jkJ1uqg1A1UsHmCYkXv9M3urEAXMwwMHkbMjmErmU6kWdfWeadsFP",
  "key16": "krbctthWKPW8TxrdtqLkKopPzv9uwMMVRyEGLHUHaoFDC8x3pt7NtGDRupt2cvuMz88NbsXCA5drS1pQVdHP7TY",
  "key17": "snA7puhFnA3gz4KoqxfaDNULCFdw2S2tGX93eRGSqW4gFJ8DmKa9d8YcXDy1T3iaXAiV9NUSqwgod52R1sn2PfH",
  "key18": "5bF7KPrNa2BTfoPCg7tkGZLKL4WqeJAdVzfDtW3RrAqPxBg6cepvKnwRLWHRh25azSAmwXEWbn4SpwLNdn1ntZDk",
  "key19": "4NNzsCMThS5tSqGbmFTctSDVA1WnSURg6WgEz8W6BCxVfWD5eD8pu5MKsRrQRi8jQjESApzm26bubjJUbe9HsS1U",
  "key20": "sQRWHwP3kaD44ub8yUFbfTeEWYAu6e12PugFti64zhV6LVwm9f2WsSaJj5pYQ6iV1Yd5Y4Mrz67ftrWjqdo2mKb",
  "key21": "2UehpawVakrDY4VnKxoJRQRMfy3zTWayYPz3guHwNjY2yq8Q9tf7JNc3pxURaZJztQDYS4nixRoh7aakL9gR1km4",
  "key22": "2H2LAqredrcMFXDd7CCxh62RmuL5Wat5R3kvxVoNtyCimoidSfzqWcgPY5pSjdpCJ1QundUvHixiRsK2g3ZQBg6Q",
  "key23": "2sEXHdJNJRGMwKLidSc2m2UXNneSh9yVjgCh2mzUKCuJ2dW8MyFwy8FMog2oaC8d4AeZu7m1dwUoeVH9ptax4jN8",
  "key24": "2Q6eZ7qrdJm6e72upXgf24Bc5g7dTEiq9poE9g5zLWmKwQLZXt1rS7JC5YD2L7gdHiDpgAnM2soqa7GsHRgM25wV",
  "key25": "j8f66LcTwWTJpuxH1ugr9G9ubeKQGBbvupD8ZTMg8hj9X2JXdrxALLhfVz3tpecsVYsrZv5THv5k1EiQwvVVfBz",
  "key26": "3Vb3jgrymHSNyvGUUxeRAc4BDuBVDEBQ9Hkah9WpLuNQJYRFMNf6jpyj5dq5UCwzBFsUHAurL3NtYeNsMbmQt5rv",
  "key27": "RP2LQUXgRsXMVheQ85hBqicNgEp9zMrQHbHFoZR16kZZtPSu8QKj2RuL7AVtz51yhuSRwvrqiKZunVGtpRYUdS9",
  "key28": "5HnFhtfCHwucwbC7Zpqy71ghmoibaS3N1MPU3zFCHcWUPqRZcZ1zHYWBeaEK6s8TDrNTdJ9RodD6fK3T3utrGFzA",
  "key29": "4QiYUutmxKN4tzVhBzx2623za8chyJWtYFjSFFqHSwSHQeBrtUXZpisgW9jHhfrUXPLo9TYDUroptuJyMQokSh6E",
  "key30": "2LS9DsRiuxsXAsKTh3h7c3NPZuG6535cwRu5Qhq9H8PcZ1UnbzBmV5KsYM1xmMonWRWAgbkobKMUqzBHUhajWQTT",
  "key31": "2PAGhHXiPJwoyQd4ytNqXobN3U9sUC4wrv3xCGMGJB47JTuFK9LU1rFDp1qURLZ8mXg8x8QfHDFNeDjtLx5v7qsp"
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
