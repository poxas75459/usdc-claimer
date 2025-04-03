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
    "Xs9hxzRd3p1bsoKymFxDaFZmBNRmi92WfeCcfoJUXuQmTw1feH9uAhEkhSUabVH7s2cnbTsUegNbvH96PgfTqL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qeRPxNJASKWcDfY5bQhLn8umkGeBoCGM8J6GhrzeAgibZ9WTzKiJL593gP2GppH2GYAapqo24MyqJSoncvRDCeX",
  "key1": "nMnC7VduN5Zu1JUvVvPyLRtFZkrBdjvWgdPBcvwvoGJ1TVWEAK19aNbMruAN9C1FY4bQJtU8Vop7wfWc7PRurna",
  "key2": "3DDp6jQ5jD5pw1YYfJ1syJYPo3bYWjW2cNKdqX7wNQ4o2g8Syipr3j4cxExRwPWjBkPYkdXtrVwLCBEs2nQgN1pB",
  "key3": "5vZBGHAJeJxLtgvN2ShYFkaCHEWGWSCfkScAcFBrKXdUhvFYf1FKX3MKc7FuQz7Q5zSanoTzEJWah3RYQGmWvw8T",
  "key4": "4rj34HKPX7JK9UHrqYTx5fsggBWavb9VFms3bUSMZirJYdxzj8hhX33j21Ye7bCp8ceiQtTuN5KTjMeq3rDNhZKj",
  "key5": "2svPmGAk3gucdurX2iHDJftuPu8g6w6z67cT5XTwXR7ZKUNgS9HECdzZvtNcPso1tnTBWT4owpBpd6aR3hpQXWGs",
  "key6": "5HobyVBZUN5AFwZkdvPw2vuBdhT5FBzfPxB58XrnAvHZLqiZ6qp3EDB9B8jCTBLQfvyC1xsqLAat2KeQMQN6AFsA",
  "key7": "4rFdtA45JZgz8jvvzqT6aRmovfrXTPbftH2KwnJnGASYGygoW98w25698B1SETLoVJjXzRJWxLZfyHtpuMpixnE3",
  "key8": "2e8rbNLkCQJTGw2EBHhoziB51RcCtjqjALRaBeoJWoFK1FrncSXAFqazmyiDX6AQGMDt52SPiURBcocsivonqBLf",
  "key9": "4zfxBroNTK2EGUmTBcuE9XW9hv9X5Ups7FjpfhPirWk5CABHUmSMW5EBRdczuUYAEEFhjfCbF1B8ir19MZVAKDMP",
  "key10": "13FQF1gw1KNPPhNij8bQTQ9J76ZnLP2Vn3nxvQN1D131tSZcLKYC3fdoehTLxK6vnwTTqrA1VXvsk1BE2P8kK6q",
  "key11": "ino2j7hEWSNKhADmR2MKwQmbTwYiFZA76Fw9L5sSn66SSoeEpzseYyMBCXyBfVVLVeoWWaF9ZHkcxpGuFA4jziZ",
  "key12": "4Y3HVQnv24AUQJBYf1Tj8KSRpZ4fChgagJqt7rxjHxt35gnzuSRFkyDFbP3vVTJgCtL55zNTotd5RD3a4vPcGYCc",
  "key13": "393TygrhsdXqXnxUMWrs26JdGbbz2nVYbat8zP8JaD1CKNUXJ73xESgWnm2BPcpcasGrrp9v9KYtDReVZwzvnkKz",
  "key14": "3mNr3eyLa3sQgehwW9y1pxARvUZg4k2yuo5tU5VaM2uCohSMxSDMq2GEFK5FQXx2irHsWQAoXx7vtVNgVypjQgYN",
  "key15": "67frK6A7P5W1a6CPmvN69oSMjkG3zzjr7an9q4jq32XuD2xo3Se6ZdKrNhYf158XNUXAjaz9EbctfY78uV8YG7iV",
  "key16": "3LpXUpaKHAk9oEAMYKxMr5VFYpdT4q5voRuUjwJ9URo1zePjgFKXjvxV4pK9YLH7Wn4bhWn3PizYqMEVXVexJFkp",
  "key17": "41KDbHCXVMqr2pNQrbyUP1QoXPK6bdWisMEney2RQx6aDaoEcL9krfUYssvKfcF1UseHxYucUPx9Sx26rsaRrYrA",
  "key18": "46vVKWoPn381tvQ6W9dF2gzk4wJwFGYBuNB3zECuHRXq9GtCt8TRzJoWCc2yG9tszjH8yPRPgwNdAN2ejvM3yG5g",
  "key19": "3pjAfJ9ijW5EFzCJo1pjLqy92EFiY2sH2EEKi18Dz6gZDtd6foHTeGaAmKtbX6yV2rKvZZBmREptAsCtRgyMzyDw",
  "key20": "2U7v32yDXjZUeGEVXLkB7pbsrmq1aKjeueRJ3DvBeLwsxjeUZeSZVv3Y4zQ1KdAVLCa4LVgoNu5URP8uwj41BVik",
  "key21": "5K58RmXDpJbvFgwCfKp7zQtrtQL4YBmmLrrLE7WDdZx3RybciJc5GsQp4DSLJuE6vvaNy6BJHxNhFbMtd5X5aRcm",
  "key22": "2KVBTeDw2zjVe1xLQZJzdMgS4HyHB2nkQDwJsUwYTnJbqRErCdFQBpRAsRTVnuE1QSufzTuMyF4ZbdcnYPyYi32B",
  "key23": "5H9nG3ZKbfqM7HKxVVLR5MeV71rY1bmNDMFsxmjmYvHeosj3hsCAsXQSAMRVH8k7gtjwze5ogJFgTQNWEeJMy1YC",
  "key24": "3HthCw2xM9cJSfWGm2gq6SfNBrvNd9mw43hx3AJLqLEs2ubHsyWZXkERzd2Wna5pM4b1DSq5QKKELcppDqLqbU9c",
  "key25": "3xZ9DiaGkr2ZrLv7sTC3cXzqTWNsC8xysQKbDEgmYMPexxmij7CxjSqnSjVNymYtdM2SQoc3k6vfp1Kbstut9V35",
  "key26": "2UjK8bmfAzfDqcbwh3HixaTvLUL6x7oBeh1G6xjQfc6KVoJ5qxU3k6VYxJLjEHd9QeXPFWTLh37NXkhyXqdtBtw3",
  "key27": "4znhHkXW5T6aoGZWHjD8iAjfYxFN121GTdzuzmRDWAsa22v8VL7xPVspZAYEScHQ7s8oTJpXFfAnUdCgaCTBo27b",
  "key28": "63EG4DX2R6mmCv1wz1UfJXHGbLA4vELxWD5gfpLLgWNhDF7FdwfQ18HyG1V5npDbNpMyD2iKs4nGv6bSjvdwcFLS",
  "key29": "4mHppoDtMEzm5oTkrofRBrdViG6yL3Jn2aCzKzvRuSwfBMGMYYcDM3nUwLP61geQkSarHfrpkSUq4ZtKF4Hhro4a",
  "key30": "36ALQmkZsCQp6NnR1vEpw9mvSV2sPaR51mt9r4UBiH6ZPPprduTTEtMupx7CFnrFPtV14Q8UBb39YinmjCsuvYjR",
  "key31": "wduaiPuNVfeX4DLgkMNf8XhaJw2ZJf3tjv1VEixtDAywEfH1ETx3M7YceTSM1UzXLkFGbwkAEpz4vLhiHN8nQN9",
  "key32": "56BewunCmM6KhUogVhBWfaQdFCxNLbthtFU8gjy3p7kqzVN5eGJZDZ4ZGbHmyzur1L48coHyFUEAdWBjJnrmEgnc",
  "key33": "3amTuxMGh2QmYoT5TTu9tjyV9A3KtEQSSpQZgqgyvZAW1qYt9DVVdHkxAeR9kXH7nyVTv1rC59tuixMTf4UvdR2X",
  "key34": "5EVtHwpUF6LxseDNh7nVRhEXgKwWNTRJZ6h47Vr1unbxLKoKNiXGKoBSdmDGs5AYG32Dj2kGSwWqUbVSV6EDkn5y",
  "key35": "42ceB4HnBiHV8eLbgpgHsrcstSJmG6yP5jaZ2BeSirprLr9Vbmj7XKexM7K6ksL3pqz14zmYgK8KQskHz3qb9MgJ",
  "key36": "34SSaxZPKeqNhmLzFmtZDdHCAbs3BjRiGoAk2ahaykNznEfXrNPs5XDa6Fi4yqL7zVEGfEJGq5QN81X3mPYdoZdd",
  "key37": "28UceALvVf4NKRnkK7SofnX2aqcsYK2nakLLhHTe5JbmWJ3e7tqGCGda2rRmhsvrBh4dStG7maoJZEm8VpudAHXs",
  "key38": "646siCVw3JicfD3zdnBKPp78DZaVgYcnHoeDQU5qE2bRFeEX9sQuFj3Fo6GXVc1Fd3iLsCF2KfGDQP5QFCD7XJSS",
  "key39": "2tMByZUHAaD5JqUbya5LrNBuZ1wKp5WegKysC4XJGt1mp7aKinSPofbUHg38a78jRCxK6wN46D2XFRCMHBigYkog",
  "key40": "39GL6LE3waxvhXqdguRqU5K4Fn4HvqNKQ6ZBGmoQugP8rBeDcoH2w92rNcqCJr9nJq4avmMrnm3QZLq3Q5wEnrG4"
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
