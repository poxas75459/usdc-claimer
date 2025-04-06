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
    "3eyNsyDTqWuwYqSo5YFcgskE39ZqQQrbJ3S8Fa3V9qRhZ1xwNGGTT9gVRygtVaMYmcJ29DjUptNE7fv2dTuQTibY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HX4v99YZuC8caRkkAznPb3HfLLRYD7r3mUBXTMR4EgJ6AytahBV2xmNjPdJNeMJd7FbHfAPXuXoGPJWjBmpmtg3",
  "key1": "2EkxNaA2tUH5nwyy2Xg6DHu7ANj5Ptyrd5aRq7S3uvNEbrTT65DBxD35jawVXQv1HCarRypSRFaVTMsB23XVxz4i",
  "key2": "3Qmej8ANMEsUVLfwLSrH2uWTHoivhBFNVi3jPFyosCW5Yv9NmBLzXpaPwcrs6KnCNssAcTPkEgL1Z5xjKFnAEHph",
  "key3": "3dKarp1VwjZgUoFHKzwBZKSkFga7Z7vny1doPuYVBjbZjALapk2JnfjLiQXYe49baAKEoR3h3RTWRdtUWHcH2gaR",
  "key4": "32p9Wu3ZY2NMnkPwDbrP64iFVNxEyHYKpztAYrvYjjxjyKjWQ6LCqrBP1B4pREnJDhMFtwcujUGcDGk9gE2apvFp",
  "key5": "4ToqfsHkyVPek3UBQPGKih99GfGinQcGCKQ2NJCwwka62ZgnJ6RCPekZuyV7TzEviBtTnYCJtqYNiFD2DJmG9vUM",
  "key6": "5n9GmNbP2A2qaupb7TW2qxUYsaU34kuiVrgPZ7RtDxELPmvcwqrx9Z4SzHjx6648WX7ztey2fidSPqdWpCFzyn1H",
  "key7": "3NuNtQd2mB8Zi5TQFyuykotf5mg1FXN7UMwRYvkS3xaaBgao2kunVmYCDPzNJhAgXQNF64rbYK6xM2oC1uZPixRW",
  "key8": "3uN38Ky9MZti7TMpFJwJHfJcbucjKbBgduYp25iYY1mbuhBoxRxM1wXcqQnoSt2Wqr6EdiUS3SQDBmLoY73yL7y",
  "key9": "bx5LptGLHbzks1GLQSuCUmXaZS5NHAw5WBM3DHyBSdhJrNaFiUV5NXE1Hbj667LXQ3phrPoCjxB2ds2jupyWYz2",
  "key10": "4stRPiXaDTrCuqrHZ4csjDGZpv1tUSWKnnLYtcdYFgskZaEQGLZpidQi1eRAcutmDtc4qny7o6Bn78Byx4ERszt3",
  "key11": "5DawUbNYQJkc2oaVy1fjUa4g8Xm5KXwAK4XZHSXYQFUMrWtvb8pkH8w91tuacLnNFJmSta1AhbwyE5S1Eai43rPG",
  "key12": "3XzY6reWmLKrvJjqrZGguZmXnjx6rTpySdci4qQjH5DLJ9m7iiNT7QBqkKN3W7S5q83Asbi87xQUwQyyMxNJcS6E",
  "key13": "4HzN9kkbZ5aQj5H19vZeCzwzVGgH9URz9K1p8B6ChGffF8RJEAkrY6Sux8ZaEkvgpA5ZiYQqrRXSJd1PnGWbw3JH",
  "key14": "5LG3bnGhFgdtj8YY7HmopV2xgSdtFBNLfTM77aSEj8TYVskyMi4pkTuZNREAqqLRqkY5biucex6uKAzJRLKMwUkX",
  "key15": "fydtdd5kNg9yx8M2cPQaju8VMDu4swJV37Kf9xyhy3epQs6y2NyArf3uE7ZWWJzq1JkpcejRzKz4UzJPbLBjjzV",
  "key16": "52Ge8CvhKBN5XTkv86AQnT828JC1By1vv7PHqc4VQQpMXWC7UTkUkgKgCvJSh7GpBeLDsaqh4jHpPBSbBf9SsMy5",
  "key17": "3PoveeMTqToH1M3PkgepYJveNPD2uiTt2LT8KV7WYnFBn5ATmwdNSe4qwyL5WPUdAiX68dN1LZBS1tX9dcMtuiQs",
  "key18": "1Pe7QW1iUvQkfdW8163mZKse19cC2XX9vowMfHKs2uecBsNdZXDSRiHegvVr239PHqo2gACZFZbREpJsgQvoSMz",
  "key19": "3t3dX64jkLp5QNzwZQFrnfSxLEDAKAoYuuAUYU4YtpJJwtvz9CJBrjTpw39LYBJ5wxUGLDoFwvfrh8yxQogC65pd",
  "key20": "27GPB8e1tS9P7vqnabWxEMQh1RHLWqHe2ve78uhvVoprxTVdFPmVMH5B1GyPjY4t4pYzT9UjjDQciNNt7eeZ1fQa",
  "key21": "4oA1fFcbc1KJ99CoePRDRZKnbYR1phMKiqs2tU85wtshruv7Hr3ybJUDZaa2RZjPspdjPbrhsyyRpiJzGvqi6iiL",
  "key22": "2GKLVXTXcaxyXwg1xWKpfUxSjD5bgfTKxWkgjjU34wC1snNpm4yREMfaMkDM8Z1bMPo8UFFZis8eojqx4MVqbiQv",
  "key23": "5uyGw1zE8bWgP8GzrNvixgNLnPN1MTAofgzdivX3oXXuavB2ut7WJjZWMjYYuLF4qLtdE1vwbNXsGitWh8NYf42o",
  "key24": "2VvLgXEmgCm8KTn1aRSANjnuv9FuiE3wV3512oCWjyRv4pJLTWQY62UJNY2CnTG6svjGfdVetxXJAa4c4j1QoqyU",
  "key25": "4tT96T2eLSuQLnUzpLA4VrVFboNDtn1Rto8bvEZDQvihokJdgyM3pwCHBCMZ64fszkc9kWvzo1Me4a6RdEbPebmb",
  "key26": "3aXNVTcokPoHoyYCM4p1gMskML54YYjPLRVRUo3r9WKjUmuLUYmpSaPLx67tgZjcsVanZEsDkwS4XvSV83x1zi1y",
  "key27": "2bMVmrZnnWDiNHuwuTroncGxFq1Q1TShF7Brpk6pB3Hy5JG2MdMedNWoPHBcuMhFkFg3oAYMBiarXVNbrnsRqUUX",
  "key28": "4Pw1zqLGD2WM79thsoXCY9pwwSwrfUnikHk2V2FUa4E4xM4QvR3HoDbZbsHdJZ2NLwLKpYNrUbAUbCc96JSC9bh4",
  "key29": "2CagnBewmmn6yzGUrKbU7G1psdWRR3mNvNB3gpBWFkrUHB2hEnbDWDhXQqHb2gCjgMxC486j1A4daXf8tPCuejSX",
  "key30": "NveRpvWE2vFTCLVX37H6nGvnqQu7AYXjbkXDsEpqfPZStLrc8XCDTeojwSGU1m7zdgtB1bPgJnC7iYXQwVPpMB8",
  "key31": "2nxyAwJtcgcMRWngp8oYsabEeXHsi8DFaPfzqYJSSnWmDG1bJPh9Ss2G3BZuSvWJy3TtpB4ZqPXtcWV5PxoByLn3",
  "key32": "2sZhtvVg3TQDYwz2wz6SvPWBcHvte774xtfooQVp3LNCCgFXJV95dzrwNFfnU2YmdK3HZauyDuxoSJErTCfWAopj",
  "key33": "3gQsiL5d2xVLQEgFPik1HYrUhihC7Q8gNHcCSZwb6hK8L41SwyRLxDyBm3oXVkGWuNYGf9dAzEDA5j3eGG7zb39y",
  "key34": "2MZVKHTR3LHDiNz2EtQjkqTVf3o3fZEQHM8RvNCjNwfzASkg5UsB1MGRe7j9CsNdmo5Hg3YcAaYvBLJrsaFrUyxA",
  "key35": "253GyiPmkLd7qKZLqJ7XjjZp4vYjEA9g6AWmxc4KR3N6feMeq9KYxaFJyi5sMiQL3hKymc9FbUpVvspWE7wvF2A6"
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
