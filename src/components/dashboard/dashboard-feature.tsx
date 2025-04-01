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
    "44fNoAfUbRZ6VwxEpuaB24kpssrdtJXxQDUzRAaenBK3qbsavDPHRa92oAgkN3cdeBdbrCW76fnTJq38Lpp6vN4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54oV8JAyTYaxK1vHE6i15nn24k2gg1jeEzALtpcLM9HZs5N4eh3sRNybqqaAc94cYGLfYDEJkvqEpbzgWBWTWH2K",
  "key1": "3q7Uq9WRAJFHYTRf7d2C44M5HM2wsHCteSQgyvgRwkveZaCPGUpqWiyBXDrXq7i5wh4eUhsHtrwRmV9UzSWQAj22",
  "key2": "56UuCf6xDwbnjqB9kDkU9CBFbrLYiSqZoYPw8bWA6nbfdVaqo3ynGrtGc8BZbXoVj4ybiNzbykdJ2VqMraEZPpDk",
  "key3": "3qFp7ij8xr1MpHKUA8NTQegfspa7G7FKrox5xfT9zhm73P8HFRjcK49aK7DSxncLdkHNFzCXK9i8DpvKHBSHET6q",
  "key4": "gpp7AQXoK1gRqNsyAbvyQLgexmBdeaQdJjURKNXYAxtueSfLdFHxWxjz2UFm7NKtFL8yuyu32oCTgnKbcn57WyY",
  "key5": "2wU98aL7PobaeyJ7JruAGk8L43SEu5b5iMu2XpvXPSD3YgpuT3qk2rB5eb2nXJiSmwZgJREZK6ZJzE9E3VSkcsGh",
  "key6": "665XhNFJRLojarsZTQkswCv4hPpyoRBXERuR7Gupq2sD31BYCnLxAt3qB4CoPEnkjgifzRPwARLR1eQgNcS11gGV",
  "key7": "31s3dyTATzxYtCTv5U5GagQBPffqkiMftXFEwGbqkS2WxyVP7Kn1REPk8o2YwZhUSTsRkTSL6tsTc68GDVQFJ9TU",
  "key8": "2uoYS4DYZLWghWZK3o2VVkkHwX2pCBwE5v5wkDmhG8vc1W6iuM53CtqeJWQYwNsyagarTZuy4YLVE6Eh1oQcsFnB",
  "key9": "4jYYBgBMJAgnHW3Rz4hD1eqTE8zZKgGgQzG1XqpZVJm66EhHons2U44gi4gZDzdykejWuNXtKXr4hzz113QZtZN2",
  "key10": "2NHghgjPpYTR2rzRho6wmFgUSPCQVnQm4iSBSd6xNBGo7WMUiYhi4JDHWTKnj2kNj9vjWMYGqXzwCtqcSomxf5Nr",
  "key11": "5bzLU1E3JzZ2C6kGtxy2kAx3uEk7E9RZY7rDjfuRjhuKUCKTVQKa3CihGThykcxwrvhBNktqudXaLomtKSQJY4Ez",
  "key12": "2LYXoC7MDxYmVzFFa112LwgKvKKG9DAfdW9fYq2X44tAUK1TK8RAYwygM9NBBQa3ByVKnXpp3jibC6BtgofgVw8g",
  "key13": "9bh5x2KUp1xdfyXzjLuojHZXBkpbzGAjYJzbvBcfEgLFDtmo6Y343wGqecB6yGkGFivLskGZKk2CE8iKP5E4WUx",
  "key14": "123F5kFachYztvytCWeVKFGkWRcUFm9wnHTeSDE9MZH4zFeUi7bSggsYsL9bYTJ1LCqWNA6rwu942cxmUaCYVQua",
  "key15": "4omSiSmrZagJ9JKPKRX2fWuLqbNiiwff2RowD5Sb3ddBhgWPgcoKTm6JV2FRPeviWUKemMLADV3ga4yUQsU1zkd8",
  "key16": "3CTcCWv3XsiKe94Nc1YqAmLtbKtxCqVpj1D1sKry1w52noxjGYvEfoTybjD9vmdizCqZouWAq9ZH2RAZXsHep1PG",
  "key17": "3mb2b4yRWYx9PCb4rduEnu8hbRc1HLy4TwQJJ5rYuTqCEWPwcuNzeLReucUSsqFEe5BS7MbqjK491bS8Y5tMq8Sj",
  "key18": "2GF2XdFAAxPrkJdLGDgqR4b5FkMFzV65sPpCdChKS9VV2piodBMR7HK6AkL1JMXdBDVN6NnC5LB4KJkJF7m7LpBH",
  "key19": "3ZpNs5CYiqFPDywQRnnWkxt5KpvJqq2CxxrJEfAXtN13Dzj3KUTXoyg2PrbtuCskJmz98HRpbnVQrfNxgxcZhUDZ",
  "key20": "3yDYp9fbBatacZG9FKGTmHq72n7tZdqDmkdmDzbY8YkNz5N9bEmKKf74JZzvobyydxVpqGYWUtRi1NW6YSDXq3jZ",
  "key21": "46JWhyWRWB4cQf658P8araH5iiByvvMZVR9YKL8wEH1TrFhgBVauzi8U1EVzvZsUYtTzFqkHrxYJBuPEarJ6MCHd",
  "key22": "4yNhbRJJvSHD18Z5LSQa3CsTrPfVcszfqUDFpkZGgUfmAaEeVE13PVGM7zDjWMBeTwwxzJSwcnSLjioywuUmxGS8",
  "key23": "5GXEXbAAZFr5gMN5FQUdQqGUvUi1SAHf8mgUnBZ2rs2VSJqe7saChmiLPwtNx3WjgxUUK9m6pcK6pnhBFKYgJJoA",
  "key24": "3V1AYpRxCezvddirh2c7NmLmgjo2fmWBBNjHBPxH5pe6f1nxzWG3PYgtJuKffhPke8FMU4AS6S9fgYZYubcsoWmm",
  "key25": "2MPV6YoqNQYq62Z5M1REcab3MaYF2DdH6i3LUQSHNQTH7SMKppWeD6GgQS86x8g8V924YWuPAnjHoJPXR4VkVv2P",
  "key26": "36zxjr7eeVif5xG86tAvMX8u9xr9Q8HG7XAR7RayVCT9MksNr4JXKxUL2t6Tt7g9MMzVyDUM2S8nUARo2oSbzrZt",
  "key27": "2ncTGZvb6uwdF14nF9EexFBL61BmTomQiMjqJ7jpWzsKtEzzNprTJeM1fqy32G8grqDaK284GcxGijEJ2XatZ75R",
  "key28": "2tDhWcgctdYeKKNQPmYqg8vaqWsofgyUnd3iucCenmrV8AQNDpyXNoGbETgTcwUVLffGXbUxLK7q9RswY28iJPvT",
  "key29": "444JMhjVeM4XBVtqY3jGJ7ALYYUefpHURUgTr76hKy7hDsVbBoq8mfbxzSWD6axkRMJVCCqk4ZjpAZhjHCebRZW8",
  "key30": "2XirLixE6xk7hbhzjPgC1Pq9hgvHZsSixou1wwgLPiibqFk8DRLEqgJx6vT3JDtKZoRqvFTRRAFVWGMH3rbJnhiP",
  "key31": "4qavnXZLfTpxSzV5qpkeyGd8SWGpMoAv7JovcMJZ1KGnrchQ3gZFtuewpwHJVwnUCtN73ycRpjfLPaWqw6e37yS",
  "key32": "2z7gjjdqT2nZneK3VQd3Kor2YwWpaj2HVtz1Sbq1Go4NVkgVcd3FUCTpQZJVhoRPoC3S2hUBTPjj7KzicUmDb5VJ",
  "key33": "5xgCkfmL4yz72qTqhaVRxVRHEXhpa56dhU23VXY19rrKpfULW9zhsq9L3y3vnF4b1jWanaFc56aVmHJKMxyCuD7x",
  "key34": "2H4yij5oUwXkTnRsPZRyd4beWC58v8bPtfsJ8Lgdb59c488YJv9fcddLqHRrLbMAgxjKDKBE5bQ4zYR7shRCFger",
  "key35": "2peHUgy9NeitgqJfDF8PE3uXmztf9tdRTjzVRk5Hp4pzw6ZeqnTKm6wJnTiYygA5CT9PPkG9LBEoiZ4HvQvQ8FXK"
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
