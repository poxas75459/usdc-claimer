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
    "2tXe2RuKCh65JcNXBjdFVjcwFgi1S5VgjzcXXrwWntxhKD3qJK5AS2J8aEfsp982XdU2tLTgQHZEATEtiYR22nec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62TomXXKBni11X1zQL1WK4NogkDJdC1XLPuZJ3GGemB6vGJCjffymmDSub1Wzk3XVYuW8dJ4L7wPPBgxDWe96qcc",
  "key1": "4nuhWqWwJDVdLdBj5Z7CYStmAdjqZ4G59XhQUvpbC6xEXtw9meJ3TMamtUY694zjuGo8bCKmtEbq6DNiMaSyA74B",
  "key2": "3EPJppecPfs9Fqi1r9MAfUUaqVfmgDW5KxfWkNHVdfz3Ef8vSF3y92xH3jwN5GsGimTsEz43dZ9uh2kTFvTxqkAc",
  "key3": "3so7JNjuQM7tc6te7vLG4X18mpDwLvav2r2bcKApjP9Ywsic72B7k9mmT3pHz1UwGtptX8ULHfiAMBT2oxTfao2C",
  "key4": "48tA6DovxH3VuQGiYyJQ8JqCkY7G6XwTz2fi5HuqdoSm1tHxx4KYZnQF6oC3KP4hECpSvYQUeyRT5J4EWqfSDNkF",
  "key5": "er8S986tX4NHpaZEMWxovRjMaiPTrNgv2yUiJe1JrSAiCTRWwv9MN5uZD4zricbsNrKqrkmwcScQAYcLkSWeoq3",
  "key6": "4xqLYHqvx7UEgbQsDqJAXziBggM48dxvg2GweCMZrdSdqrRADgm6WpprN3mdKFZFHkVUNYbYxkr1dzEcFc7TXGtN",
  "key7": "3Q7YTx4kZbofxX4Wb6h5w8Nw8hgcr16DMefmjnPAFWtjxfP8Zv7iwsbxTowgwLsSiqBAcRKq6VYDpw6ibYEmFNTg",
  "key8": "5dSVsE17xL9BqxvjND6yjyK785XfjZgYg5qqiruMsYT9Tiqcxnso42wrTi6fyo79okTAU1C7RRFiDLLE15pW8GSG",
  "key9": "nJoTqvMxdrPLBvwpdXnWnAuftSnkaxMzSP2Fph5QCcRZivweKXpot8Ngx4xgCCbejYbzxiPvXutFdULFfHTepYJ",
  "key10": "5XcsYck7eDge5cDYRfb3K5AZiFAJJcqo5qeFhjN7w9LDfxrHoWYKaH89WdR3X4khGzRH8wCZ4Dg2RiaTFwZaEcWB",
  "key11": "5NKxvhy1vBsbuFetvEw5ttzf2UNb1jb1b6c6TR9zToQRjTNFQibgGvgHZH9MdW9XqN6qUQDUaHmncb9eNXkqyHnS",
  "key12": "5oqtfa2JH2ChvFXsDPUD9VHF6ytvsYxadnQqDLFcECQPsNXenTMXT5f8afmDjZa8z4jc1N7y5wnwdnYYRPUbMmNo",
  "key13": "52gmVRa42VJZuvJNzwzAHLjHTYyrww9M6LiD5dp9mEiP44yL14uZ9XtE5Mz2GzTP9m1RTW321dEQ6ZqLkivTqtrb",
  "key14": "23bEMC2REDyufhgnydgaWuYJw6jqhkXch3X7hFBcf483ZQBQSQCqUBQokLq3XuHZmGHXkVamGi42SjCNbP5ykSZo",
  "key15": "zL4q2mrDEziEipsfeEkEVYGeRhquFNfQBecuytPBfsSoJ8LYxTgUeKyv3x3ZeYssbfr1cxWTqL7jgNuhNCNDfdS",
  "key16": "463tL3Q88VKPzSkZcy354tzauHYnRTTxmS13AGJAB7fDxCuBCkjTEs4k6Qt9zPemtK5eELxBLFVWaP2n5ruDk2QH",
  "key17": "4z9Bqv7RaTfrvJDGdnzvsbpG5vLwqiPR7iT9fxKBYbQipu3Amt4QWNshC6xH7bHuabjDSDHowhTUGFUR4rJxE8s8",
  "key18": "4qNpBU4rqS832p43dtENejT5by3hkJSVyxUeVgjnjfd6c1JEnLJwpUMv58kdJG54qtyt52sYfjnKUubLETHPpcyQ",
  "key19": "3S9UY4TaTk4toeyeZ1XFFHT3HK9gneB18YkYhspwPBP3cMuAtRjQ6poGfUPzi4XvrjUQNqCTTB7qwf3Qs9ejAY9b",
  "key20": "3HzK4PyHBRHTnYcv1yhmryjz8SLBLNxFBGJ7Y2ELUccoFLYUiXexb7Lks49TcFmC4sFU4aVKteFdkKSntaikFhPF",
  "key21": "3e3CRMHCs3yKvK2WyAN6Enga5MqDxJ2JtNktqD9UCaFf8Ln9fjcW4zD9E1f2d43VxKHxcD6HSM8XN5JHtL9hTcX9",
  "key22": "5HH3o3Q487ZMcheVESU7aKTYEXyRwRsT2aLWAg8f2n2yVJf1ZFhN3htGa3qMMf1iNJuPAcPkKLroeAAJJiS2Pp3S",
  "key23": "ZiHyHtpuMPHJXmSmjcz9t5KzkunWPqDLyiiwyLnKbTKCcVduqEF89W7WKKhkTDucqAAa85bxo7A4UgAaeFcyhDE",
  "key24": "5dc4hyfoBHw6UyYAbMUEVoZXwM5dDUsFJZsTa1Z8TcUUHPSggiDfxp4d63HgtkPt9xaZuwEzcTcTLY4eW9qGfRwn",
  "key25": "3bZzHXBoVpKw1tAhrRuzkDbN4RJiUtR8QSbuNtPqxmAqryWzwAamHZdRN1NiskryXHoj3cZBdQAN9FaTTetBuoD2",
  "key26": "43zY16aGJ2jckhf2srRk2YLt12yhv7H21GwLTKrH2CuVtkBoe3CmtGEeGXCUZJgpS6kLqcNn52eczMWZ8L3vAVmb",
  "key27": "32xfHmxDp8Gk1wmoQMByfzPCX8K3r3LX5eWgzuPStNqZ4tvg5Z4FWbneQFPUrsCagAf2meRhvXtZ8YGsUwDjhSQe",
  "key28": "2kXNX23i12YehFk12QQSoMyEXDebL1edtbf8YLFxUHsJo7KWtSHmMBYcqmMvpFqqDrWWcEkY1nbDxfQEQtSSSghq",
  "key29": "4MDMgAeiZGUVuWpdBMVuhmsgFhLaQK8LEn8sTe5pawa24jZqm4qrgwjzL1qYQ4bS8vfQM8ZtsVENDBJYNqmXinak",
  "key30": "4p3VA5zJTJZH6Ya3xxPPJXcMrVgs8kgXuxLneq9S8zXuyWMovCKfn4ZFuBSYsSVSnmfKogT4BwU1YDrd6v7PjU4e",
  "key31": "uu41Qw1kemLvU3WGLduUxqhRZo3WnLPHVT7zwHBVWnGq4QJZK4AagGpCKLMM8VME46uEvD25Ujou1WNHfp4uX8x",
  "key32": "2ZwFMQGP6e1dxugF2E9aUNPtLcq8bd63nWFmXDiYqXV8h7ZUurLhp9rB16ZfxJM6ebvJV1yByFvkuE4Rh79S2UZL",
  "key33": "3SAonLxMNC882c3vrpmQmSL7aag8F2AjsydhYBWwLtvy2KPixk8xQqBB1QR5Dh4xJestPACZgwiykLQfDrToDBeW",
  "key34": "N6WoJepa6uwMA6xLDzktUtL5XovW7cimXYCE1RTrmhkCQbV14eSj3k5PB7yuS6R8zjn1VsyYYuihcUSksqgmxAM",
  "key35": "52GnrVqxbtZAArTGFgAyPRZbNetGzd6D8zJeE2tfkQXRNPqRrTYzX8n5Y9mpjrkc6Poh8fSfqExw5XWZUKJyu9b7"
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
