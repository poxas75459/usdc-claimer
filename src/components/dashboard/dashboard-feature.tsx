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
    "2r1LWUkrFJnRiuCKAskpEdtfUwdc9Ay7YwbY3kKe2xcxwvmKfDnsHyPPjgxWqQB5sTYjT28vA72jzojLfGnfhKWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fb7E2LRnwhWABKL5XpJwhQNTB9pDDCguqk2rxfbC8Lo5jdY8DwXaFjWmUAbZcj7buN99EePLQYmswzmoWG5ajdS",
  "key1": "2L82UuAwvDFGoNPrH8Py2cFKzLLZz1w38qn8ZLpSSDatorBKnVdGwJEqDbi1GmM4Dgdetqh6S38WoGE6xipYuQyy",
  "key2": "4ztfg97sNitAGLtAkwKesLj1PbeK45dDKN9HCFpKne7yJKwoy12Wr254H2gYAh9keHEphN5Y6GNZTYC6go83ZJiy",
  "key3": "5sbDazJ2eBD3pBrQN8RYfskN53uXgrRvpuzHKKm6LBWC2d835EtxyoawmFMhxMrbLPq8n21sNwue9DqjYb1uDp1X",
  "key4": "5bLSr9tYFMEpt5wAuVRsoiH2wR7KUQBErxCQ2xnAGvmenayCfdgZVUPYpifNzLaVwKJa7GBSSMSArL5P6Bqbfdzs",
  "key5": "21zD5kEYFbb8bbFjS3FVYics3FKXkv3adDTbLjoHvGf1dRB9EPZ5c5pg93swdQguEjM2UKBNiMLFadu4H4MCX4jo",
  "key6": "3r87bgT8GeP4V5xxoiW3NBG94iM7pMfoxaLCckw3igS6TnZScAPTzEeSqV5ccCtbPCiPDHxZKYZimYxZAXYkMomj",
  "key7": "5tXPk2GDHeb49hVQY7UCLc2DSn76TmXPVNEeMjNeZnnNfcaGDzDxU1HGFRPyHoqWw2Wdfta6JLZj8oFoKpXr9eie",
  "key8": "5rREZZB9H5yGJoXs4gdcY8E3RZkZNSwPLNNVA3rV3YfQnMGsTMn9WHoHJFHt3Dv7M9dHHxesSJQjZ5t8Gifee2fC",
  "key9": "2mx9WvEeaH1ii3Fe4dyRDbQGt1kFZ7nqTSpT6bPKxvWWmabNuiL1d6m24SYaXWSBbzK7nK9bFPQZg7ejq9zAc4Jp",
  "key10": "51dBCCjSUG3pRtZakyotqpL76fiSbNqkigUt7BJw2wQNiMoF4G7pZgntWvYaTnr8PjvLxvgTDW3PMAa3uxadfc7J",
  "key11": "5JDPC126cKVUmFERzjUjYUbdTCrxBbAQmZvm8PC8CrWKvqh4GVknYyEvkUvVyUkLhWMzsyGDKAN1NwCN2HByyLJS",
  "key12": "52nEHBDokiiz9ahSSTeG4Ac6yBZJbCs6fHWXUX34m6JqF8NBUFKejvWsW6A76rsUcdMcxTTm165PDnS3pAbEzQX4",
  "key13": "xsraHE7UMu7zKEgKvZE2eas72ERW9ji6QG43AthS2wL81Wy3eMWTY69YgywFGp1Kw4rhnjW6K4ujF9ge1xpskzJ",
  "key14": "5FSqxYoFob9h1CgT2674qw3ZYHk881henn7QZ66SD1hnBBPgocjL6XurMMxPenbj19E1XQtM8sWXgoGnqnGnd1VP",
  "key15": "5rE8VwY66JPWWcfFrzZL511LDujhYcKzQKzmpY6x9cN4hieGxDYDo3nCfy4L6N4r9YsKibcvSTNkzBsyEgo61d2j",
  "key16": "2Y3a4HGrKR6VFviLEwwMpivXY7bsB4jTNHgiF2vviu8yQu6oZCDP6WM8SaDJykeVv2YrGTk33rW9NJRVzggzWV1G",
  "key17": "344JkaY64DMxwRKyjA8STbdrvSfEMENwUSMsFuEdg1SY7THqN8xp6kAo8jjVJM8YNaaeRfpH3MBvYTdigrffBebB",
  "key18": "KhduZqpuHd4YL4gPXHSTHsVYgGP94hqb28tk4bHAKGSjizzSLCmZY99myJkH27GDib4fMrPPPz3k4ubSX5YmGga",
  "key19": "2Pj8QvvDw8wAYfdCUfyyEwRJRNfUVwgnWYwwYLay6njSPC9F7S8PvCSeQVqtqhnthLme5Z5g75NPtg6G9wozA2qL",
  "key20": "4WD3k6J7CmXU6WmmEi7XbaxpYiuvtwBhdFmkWCN8u1VhgKqQprcCQvkvxAb2dEq1M4umTAVNwrvwNPJpiDBXt22s",
  "key21": "5nkUaudZNpPieQGTwzj2vQzkpaH6mnBSgvLNGcWMmCwjCraKvyd8xTSqK12iXTbhgbYHsR9wGbf1ZJsKpufQv7dQ",
  "key22": "4mr3BBigZ8sdrzR2L2J3rrZ8fW6J55ceRHKxEA8wkq7miqf2Pi8fQ92bhp8qTdNp2QPcLYoN2v8gGYgxKH8WxR4a",
  "key23": "4n6s9QEu8G3733m2jZXY1Rgh5XBGKAUW833Wk68SJTx3Tptgc2nGrgZxa5dZJyWc8fA7AR4EpowrttFvMerJkFFV",
  "key24": "jtfEMACk338dRasxtDnT3XBiF2tM7u8xLqpvv4bvsMroHWSsKQdW7Fcv2RiWZEJidPiUqVZFNJ7kFXY2kMnB5Mg",
  "key25": "5uVQjMS8L4kVGYjtexD4oD75XPW5i8Qfud6tKupNLSanTUVQMAeC75BTsLUQB4NYefaD3DL8ipZxw61yKKTpbUAg",
  "key26": "25i8seupypJ8w23mjV4LDLcCKxkZFCtVVA31buXWZctKfw4e1nNC41x8PxapEbKz3BMVhXCho6H5shA4xug8d9LG",
  "key27": "379AmNWr59bbZz9RRQ6joE2M7YmY3nr6Z7D1Q45EWTqzVuHHj2vHTdjnPs7es2Ww3HcprUNYpt99AZm6cDRzxiN4"
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
