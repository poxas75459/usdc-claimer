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
    "3MCsHNWQZVSh9rgmvrvargfWzvR9PTLtdxYED5UBTnJbeyXHYWbsjaaZ98Y85iJoJECLgAri3LMeffR2FiPUzBD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KWMrsLcStU2rX5bShf9z8y7Bv7NyaM9dTcCstgCPeJ2c2JRkFtXa6nL8m6N73kxnLVos7asNSUV4pjNJbvPZKU3",
  "key1": "5J5tSupPqQTqkpbRanR7nY9XLHmJwNLqUnCxG6v86QcUPeNfRZM9hZB3ygnPeJX3akmVDPtzVgr54DJnUFAnMRbv",
  "key2": "oFLy6uy64tQZcT4uEaHqByXrNsaRKWrmmGTQP9KCN6wsdBDyBKEtodZjFKKuV7HoBmuXdiG12rf7pwqFYa7yNUi",
  "key3": "3hM1SX65Tn1bV2wPk6Pjkp7eqsGJxtKoKqeSdAbW3DZRBfgj8EGo81hX7WDa6CMogAMPZ822MurTQE3y6MXSDkVY",
  "key4": "4CYRuBAF2GnqpNdvY2YrnKTLcG2iG7cad3or8vr95GXASKZ5DxtQT63v8MqSNwX7NB9TAiazkWBhz8zdBcQWQNFe",
  "key5": "66v8aVEhyyVWLYadxuRvzSwiBgWwcKSQw92bKRjqcK6cjUGUJRtJ9RsLrcigTyKVnp1oXk24z9gj1KBXwshuRYnB",
  "key6": "2abXEqoTA4WxxEq2BrbQphwitgx2qtYsMptnC62FFdT9SEfkWSRsDKMFQrLLQVUoRoxWAUBVv3mEcedLVYuZBxjn",
  "key7": "nU1a2ZShf5yAvWzS65E7A8UweYNrnqCNqd5xLVNvV6Ax2DvMY76z4tGVkLZ2GvrsJZwZ3dKteTMHpVjuVpAnUVY",
  "key8": "3fDXCuEUKJRLsJwrP3S4duTSNbrhB72zkSpw9TiK45XAUkZudEjRkAFAsfhcJwuYcZDhbUB6JLSaTie5MS9HzspB",
  "key9": "jJMSRc76pZ9c3RUMikSkX8yabBcM9GLpJWyg31dNZ9ZLWEVKTdayiKyJLtihiMQEY5TGwA45pFaXs78qxTATEjH",
  "key10": "5fgj1PGhvDb6yVzcUXy1Xv5hkvwgQMoDAwSeSzRShxibPWUXA4UNVMJygkaEChob5p953FcZgh6tp91ovxbQVAdV",
  "key11": "4tx5o36cr8KFQaoX6YjTPsZc9SFW2p444HhgHd75KUYZHMCbhCQ8jHmAbe8YaVdCZZNzcD8fXbUWB4ZPrAGe1t6H",
  "key12": "52Wtcpjut8yiX8fuB3nCzxVHEnwqumnRPfZx1fqmnvAp4LJxyKLot6QW18qh7N9ZjLWC9JVRwYFSY9jYgEj9LpG5",
  "key13": "4jXWYc6u8qypohQFuUH4eawFEwALyUyzyVN2f8AqAgAH3U31sXJyXACkwMPMqosgoTb7SjW1CCB6iELeyPxjJ8D5",
  "key14": "5pPfxsNTSWNnDrPdQWXi59ZNCwNC4Dcnj7XdBxid7yp5xYHfwQZqpiaqaDWqU4E6mEZA8W3E1EYH5ByYgmqYMYNF",
  "key15": "2PDvTdfY9ohFAeKA5kpak28KZWnXrRU138DgyYmvd97okdwiLkjByb4zj3r63ezcsU1uHUbPMRquYmiC9dfP4Cij",
  "key16": "3hdgAk2oHmSYK5yAg7REGXdhWoq66rAjsFkevkkZz2KiDM2dNMKQqCHqXhQxCcELSRiNVL13UXzp4sff7KqzF4YG",
  "key17": "3maFChH8pjJiCcU9MiUSfYC7oNGffZ48UVSi5PYt1vyFqotq8tXX5ZvpUQrTS2cWNJpyfGKdkwjKidwWTotXWLYn",
  "key18": "TQKxeMeVCZbNtz8Q6mhvZ4QzjRYpKunoaYT47Cz8M7SsMho7Z3nRJvX1yJ6ng751JcvDMyivEQHq5beqggLWTu1",
  "key19": "4g7rLX9Emv3HEyum2nU7isjDopqm3u3uqsn3gqTipZu28WeGF5vnorFatKtbEtM7uChWM9wDDyZg9P1HBg5NHct4",
  "key20": "3TbTDknYtpsuTLWAdD3vvc7BLDCCrCdsRg5KxyTwwej4d2hphYgehu1qtaK6pvYMjupk6PKPFRJWMadYwXSzeb7B",
  "key21": "3REQjrNFDbVs4rPjB84SEFU7VsZV7ygWcHgXrdTeKyxEk7j1Yh1d7YsGmkDmnEVRQG8w2z6kCm1MtxhA6Z5vZoBK",
  "key22": "3VgyLaYGmvm6mbJLmWdLf8Fym8bfYSXXnreD68jYGcbkuvU28HDkdUCeJ7duBcdDCsJadSLzXDSWq9mLNdyu84Vq",
  "key23": "5k7PF3h1h4MVUKMj4dhiqEMZspmy2ZeL47jWzAo3uiphwUKPDGK6T71ojmxpkrPRXw1SGBWuDNroUZEPBQAJqrtT",
  "key24": "CbvVoHbYudyyowHzcSNSGgFghkCrV2GXBUNDMjQAqNNtRFyMrozrpSRbzWyddDthHUFwtGaS13ef4Dvyb8RqkNP",
  "key25": "2kZRtoLnSmu7B1dLgWZRaPm5KBEAP73bpBKWC75XZsV4MbdEhsQUL9Fs7sJxZoSfQFm1EpfHWyfj9LAfDE3onJQV",
  "key26": "AMGwZWFnCxTr95HaZH4NELJt3BKxVY9DnmcP7rVbepAfhpeLpodr2p3DkcdPgNWdiFtYrBWSNX1fjSpJfzVZyXX",
  "key27": "5JBMgGQXfnJV1SL7M7LjCxhMDuPLCTCmDxkAHMy77Wk5UUpgNAuX1aCgPL16aedcbFoxwfucKdoc6CzAUZbxCM9T",
  "key28": "4dysCMDatnVSECWSWLWHiXzqdzBChkGqTyGwpLeLS9gt95vD7mENkEymjP67FxMVruYwa4PaUyxkskqLAGyFzrQM",
  "key29": "7YxSjtJeJkqvUiE5sMNTGxTXjMYUHqkC7m2ABejcgkJ4WqXydcBapnJw12GiuZS4ZzfgqSvyUasddMKXgHTGrF2",
  "key30": "vtmDTopaKHGUbFowYj8TbWF1adjWmdJhpMVhpNTfEWLBwKYya4prbvyWcVMYn15qh85d4UL3tpUhXBpXNQe9UmS",
  "key31": "4Lzu3jk7zo5P4afgjQupGsR3UekZL1mkLbGebHfqjuqP4rsL5Cn41BR2nTk2G1TU5FvpjtHww668f9BYHFz5cQg3",
  "key32": "3hZrS5A92VMAwdUrMrbG5PKdarsz9x8eUne1sM5ycZfEGYyrUvcCmwe6it34VzxCp8dUjSf9eyrxftugQpdpj66e",
  "key33": "3F8pkHhMft8PgFdx9ZYxA6tEEe5p6r66kqHyRUuiaJ8MweoHoVVXuzk3KQsrkeQz55FiiAo2zqV1bRohTGMpy2AY",
  "key34": "28sXhHsWEFzRw5c1JwCXMZje75Nhfp11Pg5VxJiwSLsLv4rz21vVv636VpBFg5ND2XEaT8VFDkkT2uG2JQHzDe7R",
  "key35": "3hpQaKAWkPEg72237L9zwov9c3Vv37ngoZwb8JUym5VmUhw4qbgfjDGv8p9pCBumrmQWVBHEoPkKaa3f7nzKuSPk",
  "key36": "5pHQYgR5vnGMg39tbtRBfGTD7FGWVEiZqfNwg8gzjJQfuryK4FQNNQZjUwia4ha4Em3q1F4DXGV3LMa7n22XcFaQ",
  "key37": "TzS5Zmku7jyzQWAJDjyQw3VpZJ2snyAoXybidwekA6RvPvk6cbd6crw4QACGLdLNRjstzB6NmKxZVtacTm3USbg",
  "key38": "DFyEJbNy1KK6DKkhxZTKFbNu3FJwRx1n8QVnHKxH86hAT5xUptK3PYPnbdhTLEMKAhox3jKca5diX3S6c7SrJx5"
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
