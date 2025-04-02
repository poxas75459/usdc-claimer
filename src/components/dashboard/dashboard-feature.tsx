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
    "2PmAR9C9KShEnkUHorDaAY6NTbLk2xQ2yU2TGgcKmWwjbh1UcASXTAMqQibddpzy4QCiZGaJwmkzsNXF6wjnw1f4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wu15nUtsHWpjaTeeRaWpZ87cYxSanDponama5VJKoXNiFRVX7896o6HznNntsKYErbhwTAFNvpyS1aR9VYCbtXt",
  "key1": "4Ho3HrF4x7A4gQ4vnfCDuErUkDs6B5PAHV8CtDqmY1vv5Q9xZ5w5PhTcSiCqCUU4nQzjGPJx3uBpGJJbGqJ7mEb1",
  "key2": "4g8esvEoCAFyrhnwiDCrNnycxfq4HTYPJPzDHfS8gccHNUVnx7t3Xg2ie6Q7NCQg6M3Q3iBUKPdupvQo775qDnRu",
  "key3": "57fFufGrKiiEBF4wm5A56Y1yF2nB6H1sSezeKzToxGYSdGxYazAvDbzfL6g9rp4qkFoWzszeDHVjhwf2XY72XRUE",
  "key4": "5vAbnSSEB3t1rAU7hERY18Ae4kannBXutaNnwMRtA2zQChjgaRYkzFhZS9SyCBEQXRTW6EpkfBSxYNQL1wSfWRop",
  "key5": "58A8LHUtpC7CVRvei38L9FtctbRZ4gZQakxVNzgtAgynkuB5A3gbcmySV6ycdFX6SxxrRtTqRhKuY7DyMD3bx2af",
  "key6": "3Hrwd6saeneqEf3n3GfWhihRxHsVSQuKo8JuTNkLs7uPVNTqW51cuTwBSAFrqfqbL15YpVC8YZtsN5PA4NTr5WLY",
  "key7": "2JH53FzKDR4x7be2NhUPBiTi4eU36eygTTpBdeiRqFTEs5egdQe4hp4Z87zjEya4t44xAn5hF7CrXxU6q3NyRo6r",
  "key8": "129t7Fzp3b7AmNcSX3Ybm7mEvDWW1B6YKY73FuMVfvZbQ6YQX435mWQ1VzBhZPqbDR9X4KXCnM5h1FqCRThVmQGX",
  "key9": "CdREVhpUiZbqM3zCF3ceKi3TUph9Va1F44id5rkkA9tVit8b1fk4b5yWm8TQw6XmwevBhXYws48G1CS7DaNhEpx",
  "key10": "3KWWe7WxGKheiuqgp3uTUSCoTKgsJAZ869keTXesLzEN6q4bVu84oSn7qb1VyDGW2XaJdVwG5Vefvm19voxPBYr5",
  "key11": "4iP55ZN1assXSePXKUyiv7tF8ibz1QSXmATni6vs7jqExRfndNgBMgWep1Tdcfmkz7JQ5j4Mruf2zWomAmZikRYo",
  "key12": "cz8J1ie8ngc79CPNqQ5tqsoyFywxyzQFYTxB5XPRY9thAGc64aCDnjegoyg74zqDsCevUqBNAEemdcPmPzeC2qH",
  "key13": "hDB6RMp2VVin5aehg1SZigrb9SfojJEntccXjeGqfpLL5Y2GxK7RNqaMYYzgYacWp6KmC6QV3zHGEecXQ7sWwEF",
  "key14": "4HrYhcrpsgHcWoSULCJHqGf52BAKVGKEy7QxDhZ4Y82wKRcovpDdnvPuaiCME67ULDpnWpZiEv7rcGGcbhvi74qf",
  "key15": "3C96DkwP1WDZBph77Fx7YABbmh5udWYWTQ4ommLgcdezndj6uF9SJnK6s8Vn8ztj8DcabNKURUKJY52omXdr1uMQ",
  "key16": "3WVqV8HpkiGbAeEKvtwH1FRMShhrcY4DyNkzqYqhB8E8NuZXxEjTiF3HZcB7mrZaLECt1pp6GFSZy4AXtTAdwiHZ",
  "key17": "2bgJ9hf84rEwJPfSmUfsxPqGkUDvZ7GxkH3bXLN4qNYLL5k8zuC2a57dttGKRWYCmbhpYmrZobFL4hq8k7ZrGT6",
  "key18": "4nE1ghB4uecqonxtDbCFnm99rXvNApWbGWN3kfWA8mCsXT2sYftMZMTW61tJ7hr8gXVXn1wRhPSEXEWSpJtxgUQf",
  "key19": "2bZNiJKf7RhEQbeMiZr2KyiatATc4moDZxqxsTH5SLaUvhR7LoVsN4VW3SnkLbtVHsvkFb9WQ5qwezJQrUMcvCVh",
  "key20": "ZUvQQMNhmeqXrhpdFYoHNHrFVEBbimWqU16gE25tSbCZXEwGX8q4gnPjvhfw2H5xzj6fMYqzpWkDqpGdURU9iDp",
  "key21": "29ZsETPMxSFm7nHwUb63R7FfiJqNwAkRCAqXfTNdPcRdKn5gW24xEFqeVGm8XhzKnvnQjXwEqUu5zAvXiiexS8kj",
  "key22": "2J7GZeXpxF4Vox4TJJLD4wS4X267wPRuAwmkfQCd7hrcrYh8oxVajyX27JJt9A8D1idshC6dhCiPdYSbELTZNpGX",
  "key23": "3K7jaDuTMPW55xHnv3PEbejnxa4AfXYpsWn7XKwgL9Ni2yDvxbtuqr1dPiwbJkWV5QwS2qVL7LC8XyvAr45ciRx5",
  "key24": "5hp5SQzZ6Ai5umyBnCzZTeGBEuN9QeMQvfUfv9LS51exBXNB3Rgi1ixRZhyPvoJ5GTKy6RFdzzTFhGa9VEEoqux2",
  "key25": "3ypwjD784293gG6LLtBzT6WTGaoMiG4Y4fEdTWKb4c6wXktpijRK9oYrrciW2MsrBPV6he4fVcwEcimXbt4m3Dk",
  "key26": "37hEc1X5TmpVUAYSrrvjrskzABd5HFVQWJ5TgEW1v1YjrHiniJvKTzzx6ZDSeHPmm3A5whEDB2zaeRfiH7wjjCgU",
  "key27": "4Zn8QegDK1j6M4j8a5tdoBuMtGqTgmGqJU8WWiS2P2XhtRmqiZP1oy26437fCpjMqwp9YzfFYGn2AAzUzCFCDtSZ",
  "key28": "27sqiaupba4aq23EZbWHwmnHeezs3A63vULNYZMxXQcRpGpkU4SwMu1RDLoWvaMyicq3Wzf2rNibXpbwYMju7SEw",
  "key29": "65Cd5Bi9vvmkEep79SJ93sEx1Vysr2JnQxpNbhPcYFYhq7APqhoGzRBS7heYghXKGz6KhUUie1hh6pSW4gzMLFwC",
  "key30": "3aKYx1WkYJWUiUaXEkUgiZ7gZNv6fmSvWDLKD6WRsvCRbz9VkqgPfiiEZbQQGKrBvq5aXUzBRPmyyj6uwUof8rqd",
  "key31": "2nKn2C7m5CEA6dDBnatMCpaD36po6Tzm6jhYtSdDfnbuMgGN6jM29XjNZX4G69dezXXzm4bCG39eCFWs7jmQc6YB",
  "key32": "4j7CdB1Tusf2DuR8Nup5SKN3oHxer1w1UfRS999BbU15kajUVutnmNdDi69hbZiEyLgigykG5RiSeFg4Z95sgKUd",
  "key33": "4bdPDNcm5DpeYePaTNtnCLH73mkeymajCDJpETar5M3e39mqq7GyvbcAQd72FTPFYoZ5fkXYpqvbaAiTo8wj4zmn",
  "key34": "29Z9C4wXAbGu8qXn1xmA8ENDQXKsZp1nN7VfMxd2qZEXwmJ8tbjcPKb8DdDEf2GLq2ugFjacbeKMEtMuVHKXD1d6",
  "key35": "4x2RzhBRDidcvko4fCCsBqWqNHv86tf18FqPStjiyq9ZZb4A7JKYWPJt3mQZxjAHsHi75zCDt8yPPmDv1YZgknjc",
  "key36": "7AR7izyychRV3c2xqi1yLCm81cxQo5jimwoySMkkw58TyvoKf3qjT4SycP9dwrJ2PxXuLKUg423quzDD2tSBGAb",
  "key37": "57CVgiCcSjAnzgfLGiozozd61B79UuNUkwvV2QpSNXABdJutuhMLYBccwQMoGeG6Vfah2D8ibrTgpFY86EUjRKp3",
  "key38": "5cTjMyvsjxGHfBB2X31P5rgCXiwi9vLmPc8RnwKYjLuMz43vqeHEffucaza97pXUNJiak2rsyAdcZtXrR7Kfnmz2",
  "key39": "5cq28HxjWXrLP2oCW7tZDcrQScCHqG1jbe3TGCJCsqer56ESgmAvXcEmW6MBKW6hqVSabkuXJwNNQyKbuukoNBoX",
  "key40": "PAfedLkUExzDfTszWuWeNgsPSr8kWr4NvJijnRuu8w9mnUd9nof4WLb3pP8D6z5NQn7g22yGdBRR78xdqDUkx2o",
  "key41": "2in4QBofdW5oYnQiUn8hnMhcC1LqFYKfsrnRmmYL3WiN2FkLy7S1jjMi2vmPxMZnxyThTSwXmDaaswqnbW6sYj63"
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
