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
    "4xFcW23fFuYiy9sbnTS6McdWkffT52yRhoWcYHsuUXEw1TMxhwjfEQZvx6qZFTHpQghFrLUUGCs6KMSpkquTtif4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gog44GtpZsu7awtFvD9LyaCNy5UZ7ahJoqXXmbwD6UGo5obfvwABZcQ8rKqXeKuwbyFswquvx5F367x9nV1s8Fd",
  "key1": "wFmDYEMkUzMaDhvx9k23wvS8j2ud6YS56REeJMr5evgmXmWNqqJKAZurU81FygSU4N6HnciS4YaH89t6US9jjKx",
  "key2": "5LU9jLesA2niETrTAq73s1ps6BwyTrXzCr9DQxfuC6iY5aiB2VhmUr5L1LaezUkaQC1XcYGMhMsRwNneY59n86qb",
  "key3": "3MGcHqyNM7zwyR4vzJV8fE27maZicdkVEDx8sgfVnoUx8hj8QU44qX23VqDtBw4payuebb4TQknoMtqbnBatzjug",
  "key4": "5URpPn7za9D61hxm7WQCqessfyJvdDvXjFgekTYAaWS4rQGwy3gxgdQwKYzjLYWUw9srENCCggc17djo51XgeAvh",
  "key5": "4H9Jqj7wSBfHZrZEuHGsqfxpBAwvLdrwMZXoBxeKirXLaDTmDnZUtx7wnafGQvY1QEc5ce16XeBNcwj5ctU6cSgQ",
  "key6": "3waPer8GMcmJHS5jMJhtcDScPFHFwFhSsbUnM67eoShB2uKBUDzgrwiqEyRvH3gf8XYHmU1YS9E7Ar5HBRMLznRi",
  "key7": "r9eQaHBLH2jDxq2XKF8SwnhNtV1APvKfcKH3TstZrMxLz4J9WG5pWScVVfXNDCh6Ks8pjVesef5dDRv6L1pbTsd",
  "key8": "3Ya16QPDJSFzLWcFuFKKhKsKFDWRHkeB4HeGhGNEAWhjXLWXVdg6DL9h6UGjU9UMARrVciBqiUrkzktj2X4i1XKU",
  "key9": "4o6ubFDX5tXQKpQ4YPG2rJW51ocN2J9V5n6BoJ5QCXsk3SbXBvR2K39idwG6wxELCEWbSXECWZiVty1RHpPQmkc1",
  "key10": "jMxDuKNoqPXpikcxp8YADieyyof3CHkgZtaTH1xfSa2EV1sNcdvR7R5aHVAHSYpGdR2xfjxNGVnnxTAgjxNABBr",
  "key11": "4ucq8JX8ctTEzK47STim8zrDfBnFKjsgMFR5haQGamPgq22LVoq5eRMNzRFCPnEbkKYd5PSdpgm5v17f5DudTwHc",
  "key12": "2x5QEGYCVB7vNzbR8BMCeL7jujBTgHoRGyJ3oPzHS278pvtWSo9dWmZmdrPNTz8oXp9UyzTpcEPG7FNzpHtq7Ykz",
  "key13": "2vSYJbJZ5QiPnTX42tUC2SsRQ29pEs9RULzfGC1kyAmMv7hVFwAQQYvnHz6d1EzNw5K58eP12m74XTFP51nU2UwG",
  "key14": "bpyTQakmySq4Cps79qMkGjWpmVRB9vwTexLzkVXEA4paVwh6d8xGLN1DeepAUNQbFTK2r2u52LshkUkafhgTAbR",
  "key15": "25nnUvVWSUDuqtZyWNUV6NKJeHJZPtBZt9TyxGK8rxKzEPa9jVrAP2vgbaxsZ1z2eL1J1JnjFLHMvJWqWdvKrQmg",
  "key16": "2jDgS8ErskcpXXE1PsLZZHqnG7cq2ERix369BKwW7cgJo1rXcspmAcu9FAEWoAqaVqb7e7vXCVZp5Wakdvis792w",
  "key17": "52H337Rw4Vwup3eeSN5WvPbmXmMTbtLFZgvYRaKqCPkXYwNekZXU9nDxPFcpA4jHX5aRnWq7aqnBgbsyK62DJohG",
  "key18": "4DrJhLkd5DHkTrXimAo21okNewExdNmrDergANiqhyrFr4VXVxjn2siypwkS6jG72F9V1Rgsj1JM7cZ7aqWpZYcj",
  "key19": "4PFZSyGg1eAQgKaTVgeSqShdESXCFainqWGigQmxyJGdsBfNQixMgRWdRzwymEgx39Ue6RZ8FPeiEJeUE7qU6i5K",
  "key20": "2NPDiQdRBHLpQqJ53d4stqeeM21D3PeDveQPSrfBx4Tte4Tsy9Wm2AVWjGuWiZXwFG546x5g6pCj8XQsYew5aVrs",
  "key21": "5aBaG1UtQYV27JVifCM4jJi43y1yFGCXa2Rt9wkmV6oDsG7PoLcXvw2C3xrnawwE4QR7hTgXfKmBkhoPpGTNvM7v",
  "key22": "3yLdUbYJ7vaw1QdR3mY8jqrwKe99Zb1tzNDrRBkchJFMBStPBQkpSojvtkXmDaEQhDQoVEN4MDMtqTtAoCXEZZiY",
  "key23": "AfHQdAXkFQ9MGt2hhywmA3LNxcHW8DzExXSc5vyzqcu8rnPhVJkmBU4pYqBkcuD6dsrFthFT7rTVANivZq1D8J6",
  "key24": "3zTyW6W98jbr34kaqGpaFqkFNzKndy6b9DJpMNHMqwdBDP1NXS7f58zqCvp2EdR6TBUHzYX3mGWZ312WsKL6yPjJ",
  "key25": "75ETgRL4fJikuQ3K125zDgYaRSrFtoBGyqSnTgX77BAV4CkYac5qMrWM399GJErB3yCg7h9As1PitYQoHH2M2JR",
  "key26": "2GjX2Em9nGc2kx8Q23h3UH1Z9avTv9m2KxDJGgq4upqK65PZikfwL7woxiBRj8Vn3sy19dSwTNDHeqRm4iZUqASw",
  "key27": "5skVtFzbqGye5LbNqQr411q5NnNc8ayusF1jAbVTc1axk548VXs9KxY2vFoPLWLvzQvJ9LinZnLomR7VwQeMncqe",
  "key28": "61cBqkhv2FPqDZF9eJzuhrDkQU65YzTRpJnnR9AqEoo23XLPLfQXkKmNZ9SwXCVDVzorWyqYmmFhwFp6JdNKqGij",
  "key29": "4ArZr2UkydAHBiaPjhmMEm2aiU9S3qsNWGbxrrSQakSnrKQQC5PnMxS1oB6seSc3zQshv2psSaRdQCQ27mnLDJAH",
  "key30": "679QDVasqsoSbUyiGB5dchoZdfemYWYNtEcADbEZDkHYEePP51cDseUJxJgmWHSW2NvsvFfPhgLRePcfZgFZeF4S",
  "key31": "29cp9zZAXovQ7zwyvCDZvRxLU9jqHVj45rMHTpnMC1tzFDnA1AKwm9DCDrQrXugyDsm2dL2oeGdjZYD9FFNgsrCP",
  "key32": "2VXGBUQxTheeLSyKwpdzYkmBaNUcGyHNsy1JYFA7K3ucnwy5S4wb67ngv9Pn8pTW9EVT5GffyZFpvA8p8E8VmQo1",
  "key33": "3JezEkAxdMJQFX98A8T419L26n5EcrnitVgX1LPsMfQEaYURQCK8wzvcHWXnZHL5JbvKvaqH5pHXyNF9h6agjFRZ",
  "key34": "26tr5mmtEfe1YaVhLbwVLM6D5sQ9aqpcXH8rkofcMworsgcZC3zvAxChFhR8PaeQQ4jzR4Pt1aHfbPbPiBacSzbm",
  "key35": "2R2ircfN8pUmiRiAPLxkpVAvn4TVbjnd1Hme6sQePMrop3H2dibWWdBBZp2QeL24U9NS6RfZBcgFFwAXL3SiEMvS",
  "key36": "5ypioNDsgMjmfC6qqa3mVyNXKyJsPRXMTFy6ZK1hqGiUt6f2kZW4yAgxG1vRzQhfFXDptThrrdt7Qyy8S8w7DJGy",
  "key37": "ipfv4LBh1bVhmwBRaG3rzC5ChrBfXiTzRMLGq2b8duphHPZLwu9sWd1qPduVpTsFpaYV6pqPWhu2w3V1dfVsK2s",
  "key38": "5XTfo17dRfmpABfx6qGPaPCpH93jLqNFijcBjTkLVomypAfDB3f89Yqdss2LXbPvWoxhqJWUiyRrHrFj3KNdFxPT",
  "key39": "qR2Yw5r8LQDwNChttu52zc6A4MJfMvn5VHVTs53Wc6MHixMDhjvvLkdTjfKa7sauT9BGC6Z6yjnUP3PfDAJsJZS",
  "key40": "2t4M8ifqy45jhLLjbFQ3FHhop8GRwk9JytQFTvEFcriMtws5soaBNntCx8FySZ6SrzdLyCXViwmVvUy76tzs7RPb",
  "key41": "5aLzZHvwv724XY7Tz8EhJe4WmCZV7smHDuw4ZUqmnpnEDPs5JkX53ZbRveJcnX99TzTz2GdKMZVGS8hrKVSic6mD",
  "key42": "5V9NWqheqvuhwT8UeJjYgo6zp5v9BJxdGErrqiQKrY33Tzgrb3wyjXB38455MX4CKJe3jkgvBwYG7picSLG59UZf",
  "key43": "3BaJtjfGmq7RqemLC1YD3fGggqMiwvbVTW9PGK8mL6mWLquaz8wFvEbkjcoWD2ETGxgfPejzKnCHeewpdu9UWUD6",
  "key44": "65ipjmsfYhym1vujjD4qRsCSv9cgBued31RAjxLjfv4nhNbarH1Y1dWGZEpCGwwnQZLLABATLueAUBAyyvPJJMX"
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
