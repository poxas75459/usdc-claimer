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
    "2e5yvRjp3SUazdwcVRgaRadKCHMRacRcrGjFUEnnLKFDDyssEyfYZGVYV1xukc2m87ogsR6RR6KSvZXTeLm6Kge2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49AEbJaWQcEmv2Mgx8JKwwhQExK5ExEncJFZswSnz5bGFdmv8WWwJd7otYqsKrwrQ61pP67mCvEcvUbfrr38ursp",
  "key1": "4RdrJ53w9G1DM7aaaFHJhk55hVcXJ2spPBDbzyKsA4MUfdxPXXZVm1Lii2uceYR2gYJ2jMd6R3n7nmgrHQDpqWLF",
  "key2": "3SgttV2eQf4o5WDMkHD3MC5pVgAQb3rsHosVDQREZUhWinTLt2UH1ywNpwVgxMsfthtYhgCfnsk9SmhkPUgtnL4v",
  "key3": "XkLLtRVx9pxhDEmHoniwKbzqvRi2nGD7nqP6yAnNskCB4fxWqQUoZCTLAwxfAuoxEhpcG5TQ7UruWMpzHMTkBdK",
  "key4": "YuPWqHCDWiWbSBNJgoVPAysEvt99BedmGZRUg9ToqY5ykbga4rcgCw7GBWVwqv4mfL7ALHt7tmKxuKYD735DDdb",
  "key5": "gVwpK6kynQyhjRQUCeDUUdisD6nZYe64gzfCqVGH1zNHRU89dLPzkp8xRiCCiWX2NTGCoVPqNNXW2zfVGCgD9mB",
  "key6": "2fQoqjPeiygoE8EW3Ms5QEBAuZ4wyzxniyZmjLu1wdHU2Uqv7XCH5oMNhTmkVp1iGKNLYhshvthymPmi33bXV1dn",
  "key7": "5DE3ZC4QogPXmE3gWzFbpvgNDgUUkBB1ycfTwzHSVS6TXM7GCFuwszujtFfbn7HDCbojySaK4GskDDfoYGJFsw3g",
  "key8": "2UsH1QtXroMh8RbAAnyUtCYPhS4SkRKeQwjGrTW4DHmRQHqb1iTEMkg1Uooh4SrPTgY3vL1wEFbEWqjjE4xEmuaa",
  "key9": "UDZ9Zy56ViAGxtQ5nU1fCqN39icKnQ4x3FzsJpWiLk5avnj7ngSq9qwcVCFR4VcbXEANh5d3wUDhB8MfhNn1Bq3",
  "key10": "1CQ3UMfXC1Liq3x1RWpfYQgXiC87PGuP4wBwm6aPqVALMVzrw21Mu7fRBoKwjQ3Qdrhyy6XJZZkSAzNpm2REE11",
  "key11": "rpemhAyJzMS84GGUpWLYCAcu9pTa7riTJGaKNYoxDX1muAPC4ksbbyLqRoVnSQ87sxAT7PxudaG89MDamqAwgy9",
  "key12": "5RveASDY8u1Cmu7eNvFeexLKYRwGgNAfoNDAZ8x5DeDvhCTUXBhX7FaDanJWRksUbZd82sFWAyaDQDtJ4JMVQpFf",
  "key13": "5EQaKgdDZTHfwdyZhd6sZrgXGVHjgJozXGAVziF4p6xouQjS13LSFPaPMtzvs3sfFkLPaiRCDGEKwFQ5dRWQSocy",
  "key14": "2wTPWCZhCKTrW39XVzUfHhhsQ7CjicfEVye2XRutmgF1c8GGZUMWBKmrQRk5X2UYxrtVsbKZZbSBvCtPvWu7WHXN",
  "key15": "4iWjUbdCm4rTGsJoniUhNE8Fch2CR7xRpmZUw8r4DQUTVXhJvV4s8vGtH7x5bGYatJhU4NroMaeXGS8SNxmAESfr",
  "key16": "2P552dSwXdEcPKWzhDerPh4ouPFAvNQycP1RfQg8rGjhFfwX2z8mV5eWRUP85t5QSve6pprFsE3oonUkbz3p6dSK",
  "key17": "5RLbfNRFqT6zcHfaeszPtUHn2nfkJ4rYYpKZSrBSWFjNggwp9myQQvZQbYJtVuTVNLyxAbrQuWZwVPaMTnBQ3t91",
  "key18": "65GQAWEWcMmyEALv9YtTvsxuabs82dCZ6ythSjfCFNSXEQkxsUjeHVnsCgyPeHbno9pm6bfvPe6KfM1HhikjLggR",
  "key19": "2gw6WQCcZU7aKyPi35Mqzyqfa1xzVttFj4mUgBF9aNMiAEf1DqZ2RrVXZSSjrPvB8GGcGuryYQF1Cs5TZRCxEn47",
  "key20": "5kGAkN1AfQuVFanDp2tqmsirmxsfcSxFpvLMdCKURbLHbk7ShdHSED1XgWkcKEHmgYYrCgjxcLGb5LcKD6ZMKbYD",
  "key21": "2TDunpqrHzJcQhwyWdgw89ecHCbQDvHcqQrSuL6KrWUBzYLZt2KiMA7T7wwpMxZBa34yFZZKPQCCtfB8zNrqrjh6",
  "key22": "28WP3YGFfxUsauNRJ7kGJ52N78R7wccTZqXknNdXQ2ei8YshtAZrs2qHiayGKqyChkL12E6ZPSZpNG3pmM3kwgNe",
  "key23": "KHUF1FGEeCW7i55QE7FparxLSXuXWw7JJmMP9NXGB217nwYb3ZUKERc9BYLmJAjejGJPcpWCjzGFZ4m8RiNhhgh",
  "key24": "JMT8rU7K8BPrB4Co8s9Q2zkkcvaCppvfuRQ9TcizNXAq6Dyn1MPhKR8YVWxURPCQ2EsPsdNieXZA8j8ehJo6ntx",
  "key25": "5pEzfPuX9sGjFtNbgTjWq6UnNH2kPvUWQEYeCcSMNRnX6B14rt3uhVB8NRertg2BgW6NnF61ZSqefwEgtzMAHUPy",
  "key26": "5mL7qLS4s2dpPa1bhtNztgGDtQYohbdcZxAiWwZjcrcLoxkVF9gNrQsAcjoX5FYtXJ2ET1bxS8rEfuvBp2JwbdmW",
  "key27": "2JX5FfyhQLC2EXX6i4hrH3C868qaCHqNJ9Y2H3XPNVNw9auykFQRDGCNXkhEQVZk1dsf9LphYAUL2pGJLwva7gxV",
  "key28": "5Yx3yatDij5BkvpFYiG1qFdXaNK4FtfxvxxNWjppHcbHzuSi5yKNyXPEy7S3gkEjJMKq6iAYbfMJ8b9XYeWVmDAM",
  "key29": "3AVsjDiNykorj6ReJ1Fhzsb5AEyrm7gKCYCv2tp44dmR4o2de9C4DUeCm1tkpdzuYTSASAViYPp2geJrtRyFT5R8",
  "key30": "uLhRfeorhfZ3Q9SotPnZrdPHDiFV4zi6dqCeW4n88RncbhMznwZSr8wFD7YJ66VgZuJGb5jTatpmfqd8dFByELT",
  "key31": "4JKCWNpFPbacWPTFjvFnrQJKj27GbyX1xVrqEhMAQ4FRnDTZBaXaWewxHQ8o13p97HK2q1nYFaXPeRzkUepGnEgn",
  "key32": "89faEbMdVYgAKDTUeNoKS7E5Xiq7bNS8o6e462DiizD9ckGmbJqXzx7AM6u4dGzvamYsd6rPyEyfn1HbwVbNJHn",
  "key33": "5LEnHaEgmQNb2dKCUMynDCftYq58tZwpQUTjLWpzj2Jg3U3R8KZFLVWU5kzYYyZANuho5pFKeZZoDdUnSec62fMm",
  "key34": "65DAxwqEQ5GGsxZ6oMAbkquWLXeqrwyF5xYhpyKny7cD2oKT4MFHR2yvicYGEth65SU4QGr5ZV2DrTdTPHtCYbZB",
  "key35": "3XUbDWefp64HYRSqWVQtfz9Uuj22zuxxofhWHUhMXp4ZTb2NLyMgRavpQ2CFhwWywrR9TZoMbFKaXwQiqjCgVm45",
  "key36": "2ZotiXfmbQVg5boUdwumQs57RoAfyK1QPqbwyzpzeRhKLZrh7dwoBjGzveP59VndjdrbifPgcg8qQveZYVAvdDRv",
  "key37": "63zupVNM1JkoqxoZJF2KB37DvtG6ZCsoH5u6u1ExnzPQnZsJuDDey725bGW8cvQcx43ufqoyCyfJyCGy4E6soi3E",
  "key38": "63gW4H5hPiGgUnuPKLbFbt6reGbZxCirirK7aNeDReaHvbTMLexVSu13upBNeQkGqDFuUKahDWjMUQb2KNyjfauH",
  "key39": "5ha96XcmqSCt8yaxxVLMURNjdd3LqXWmoSBtKXbbZjB6Xj4KiJEWwSqKuMP3zaJFVbGddKHqwYYU3vScPGoVzWg8",
  "key40": "3AkSSFCS71TkrW8ZEwDzQCkXb9fiPgWAJQa6z8RbkiUCxpzGEugQ9SghtmFABPJoCvYvM4L9TJWsEYzaRRD18S4S",
  "key41": "5tzm3KnVgYD9yTARHLtzAm5zYQNWyrjVDRSvCHEpGB1orsKyJHDfYnxPZJp6qgJPe2eTYwWazsxKZUcEovugmg46",
  "key42": "355XBvEs9KHPykf9qQBy1MjgW9snJfhDBWAzAiH4gXED8JJsjgrFPFSEGHREo9E5L3ZbHgiBG3TMZ9kxhgW6yE4R",
  "key43": "w8k6CefNFhGEt9KU54PqDn5jDHSGfuQy95xRQdYcCs4r6tqaBJhS7QVzBoGez4GdNYgrmzvHJ9MpT2RC5sy7cuL",
  "key44": "55xoPf7pjWVerAUYfUGJHEZsbcPAoeEZ8XGVdbdskbcyYNLNLSW5RUAQxmvYXNNaDhaB58Y9STV6X8JreyQybcuF"
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
