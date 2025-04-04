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
    "3brjBQLHWsnmNrZp9BLcLXxoEKHFihn8gfUXu8BM7WN6XTdknbN98ZSmL1vAcXgTX5DMPU17YY6FyV6o8PepMnji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Btz3pQtTDGzaNUEmaff49uvd158vrn8oQfGjqM25FwRTRRXxMoviextw3Q7DzDV1mfi5zhsTHHaguMC1pjD5fAb",
  "key1": "3EG6G932vesa4dXqDMTe5sjEWU9sNH69yL8yxJjGLwgYuQbBcCaCyqhTMdRefZdYpPsSMvqZAHpngtneEzYtSwSk",
  "key2": "QvMFVZryzxMAhJEMZVmSrB5nSyr5rwwQpRZRFV7U3tZPRugpwkVtYHQahU6Z12fERZMdkgpZW5g4SnXBDVRLoTL",
  "key3": "4XjbYvJjpuC41hyy4cdtRrjSbRkJ5ckBNWnSJBr6VE1QnUs1CPt3nA8wHpihUogA284suv5mA22aY3egwSp98yVB",
  "key4": "5i6eXsBq9C9tX1TwdAxJisGT2L7wmn7ewut3DzHNRUofZ4w2ST3LBq8URQvAtvtJg3cpC8opW6Kc7r3P27gxxqxa",
  "key5": "hhj5iiALGYB2rMJEasVosAY5pkefHGNhmc436KJRjQHWbsF23QjuajYUMgVKDgWF3V5NByDfuWmadVJ4obmVuop",
  "key6": "5EhzJgKLC6qJ3bfoM47HMJ7ycZnKMTAenqZnKh1TmeZqFJoXv8HFXKG7SbADzqoYDWiwDPHduZhjfe3h93y7PSrd",
  "key7": "4o7xmJ8jz3pzPmFeNeiMwBBo2XHjqwso1gFhBy9tz2sh6c7Qseb1oVcyEBo5XaPxp2GbMuEJod2Rzf11pg1nt6t4",
  "key8": "5MRU5AyqNiQKQY1bgbfxALfmUSJWAai77mFM7vG2Wx3HK6TbNvB2qshepk4WiitvWYH8yNJ2PVSBR7Ei9XpTizhm",
  "key9": "VwTy1vSSqvTXa3LdKcmAcxwfCTQZhatTbA4YFUpmueqnE2p1bsHG4PEPiUkxhprsgjEE9L4itgs798T4Cxva7FX",
  "key10": "5FaPMxouCob8Dq5MXDe2ZuoMA8fD9rN9TABrf585p9eZ63LdCUWCNWEU2Ap11TsLt9SnhF4mJ98B7TDV28jJWWYc",
  "key11": "4YgT5As4QcHTyqwFxABBvHP6mJFJuQoQ5UWCgSEYYWLXGuRQzBamUY34x8pNdidLa9BZkzx9xtqLdT3yeqkzrNT2",
  "key12": "2F9EUu5t2BvPB12qmtTMoSATkhh6sHzWPqYaAHUBr6p21yYRosYTWzXmW6T5PSTQ9rDFBmBVfqDFemyfYKey8ox5",
  "key13": "SVF5eK1QtfSdMyTDjmG63Dk1dKfZRGJgnWiQUuKgeaxqUme1hiyHkotG9zaRtmwV14FvLeFaCyLZBS27Nkn83ZZ",
  "key14": "2wCNNMQMop9UGHLmVjCfqdaG2emXfAj8poTJzvbq3fJ4oJ9QmJ5HY26wfPvsfpEfV72EiA4UZpwVb9L4KuM51chj",
  "key15": "4aJqzhH3Cpja9okqhLQF11WpkErzFfMSRXSz9e7ufzJofBbB7CNuwhxyza2N6DvkgVrUZ84bNzpLM6KGzzBsQutc",
  "key16": "4o14NtBhnmj3i7Z67NhERLTi7Up81UVSRxCzRRytadW9yceMEa7vnziXWjst6Joyrg492WErDji19QeGX1bSryGc",
  "key17": "4g8KMmHwiQVo3gNVWFy9XxrTnXU79gX8r928bSQnFVKkMyXP9Z5EuTxg6J6wkiLtAk3rPZv8yhVzcRmZXfB3uWz1",
  "key18": "5iUuzFvq3kQECuVjzaPMcfsnbjtNVf9dLL1gz86zucmFPpUe8v7A9fMwsdcRYpwsDZW3nEs73t3vYrwasNvGvZtT",
  "key19": "2xJKmpxw5fNtoAqKhXeH9vdeUQFwyyxxKxYQo1SSz13qT3yepuX1NuYkSSLkJUGbDJ3PHtGoEtbJ5nVEsYCE6gdn",
  "key20": "YWEfY4EH8spDJ6Ersu8eCNVuQ6xCWpounau4TKHxoQew1tw1rG6tVKUvZaUTpcmDHbPyCn6gbhVdPX3ZZWgk5ki",
  "key21": "3HCPL2bLzoGhUraYu1K51AL8WzvFtbAzjG4Sf92we5XRqt8jLTiBLkKVMkEfKHX8hTdm5zTJTabkEXcL3gTy5MM9",
  "key22": "3nUnxfp1FmreNubP5DBsxX7ExmqZR3uQQNvihWG8BhksBcbqysSX5LiAhs2WPff432tgefZjFWYSyuTS1cqZx38P",
  "key23": "2HVCYXDL3TQkhhFH4V6cNLkkXoijJ47KCVhV7geGo1k2H6dLte17JCnATkyGRTNbiiTnC9KuMKr9tNVZ2T2wnUf5",
  "key24": "26oZqGhAiUD5N2pA7YNEf6XKUZ9K7F9wrMG6fu4CjkMtKqPDb7xeCBq4hTJMbWeXLuCfi2WSVQJrqbewqcDMDpGG",
  "key25": "aBLK5QTooftUvdRCDZxh4GcQJA4N8iA2jDE52pe91yVUyALLR37a656W3vk68GDLF5gKZvso72oNkhrTUpQWrCy",
  "key26": "5keEtyxtdCk4mUyqYFRtk5F32cHPcy4FzBUnMsWiamRsS3TxxZfAeQLDHjfbqMCjE9vaPcNyx2GPSwbALaANbzx7",
  "key27": "2QkziY6c1SBNkxEFGNnSXZF9zB23r1hFMCjbnQYKaJi594R88Y5fv1wPUhyEJwHy1hAg5BUMMrQRUtfqAcH1f5XK",
  "key28": "5JyF5wzaSdp3Wfdg2q4WWwZTqsF2ENvNKKJ7Tx5fUxC5Y9XuJVXUy3DMUU25jV21jqCohLGkXFM9VznUPkLSrMTq",
  "key29": "3rUfwmeZhf5FH5iVkgGUC2G3SkzSsZCKcZJj4k3PmuQUN1si47Njj3fXjKLAzTPXLmF1EWhw2ToYXydn6MCB6tjg",
  "key30": "4gkoNnS88YAucPM6WqrqawBgS9qKheHsqUXFYCSMZeGu9ZvNVe5FxWEGpwvTUqCMdhnKxee5rGYuuFKzNYivatAV",
  "key31": "aAjuCuWLbpKQ2gHRPgceDxFqhWAyXU3yG66p9Cv6Scs26A7fnbjSi2Rg4d64tFhL1dK7us3fp6PeRtA8LDg31ED",
  "key32": "35aFDsv8p7uFFyafNg8212xoCsabQyXk7z455SgChugjs67mNrSVPjC13YRoLrN1aPMG7RCARji349JY73kdfkDY",
  "key33": "2VtBqQCs3GTUctvasHR67rqh2QqozQHZisiVP2fuqw8M397tDHActEXKYCS2FxLPgjpvxi6VMcUsFeK3XebAg5EY",
  "key34": "3PLAPLweRF6QufMBb8j4u5KGzKkqSXr7VjLS5yVttAVWFAYmh8whHmC8ZsKsXSbAC18RoGN1wjDXXSD1uEw6Baff",
  "key35": "fbxeZ64ZVQUMKakSzLnimix7Mj566wuHPnfAdTPXHDNhb1DzgywfagPZ7Qdvkr6hQRFzK5KyAmrfx7nwnNfpLyk",
  "key36": "2t8o6RKxSsEF7UP6FmXRGbxBNNeCSXuUL6MGjFGvhhPNDW1sxGPtee58dDNaHyqJyxwqhY34i2EngC9nkJZx57G7",
  "key37": "i2RZXASqpB7vLUn98C4cfyMTZBTero6kyXeej7gLGUFPpHEitxJTX5oMTwuvgWgqvt6tTGFPdrapqnk89qNRAZJ",
  "key38": "5hzHBGAUNJdeA9cXZ26uRHSuBAHyzCf7H38cPw4f4U7C9z7uC1CSvpThpuZVwkjoGRsPPKHKzRN8tTzt6wMVBwVu"
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
