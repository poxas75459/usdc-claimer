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
    "67MqsuAqc3Df8L48tyDQb4pPM6KQfzKqfkQtaQt4bbrYQD47BqZLuKfLrWNH381whhRt4osZZH6CKyuoi4YftSyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xycpRwDCn2divnNVf4rd1KcDxFUiooY9Euwjkpk1mo5nakd8Rwc18TzhftLb2MFWgR2KRs5DNSxjgcHH6SADfJK",
  "key1": "2aMJciKDteVZ9VrsYmNJvLLRDp9JfCYX4f8Xo76RgMv4RE6WjoiTdRYKgjvQL97FVDt63icHCCfmunUph34uu4Uy",
  "key2": "4zfSCk9AMXnBPfqBDchJMQk7kxHTFQpRFt3zauPbQWiFD2wmguakmsZLjkYs5V2S3sXQC2EiMMDVPUwgMeumKgoZ",
  "key3": "5qUQmQpvS78tAWXbWmLXEC5LYAbPRtJSCd4uMnV3BZSVzhinbbzAwYTT5PBKW5DLKhaBXmi4zNHsVQ18yMuUzB1x",
  "key4": "2iQBuUQCJAhdxT35GThHVuQsi83zhJWcAPiA3wb2feCRyqd76WeYeVzZSf1tshcafJXh4tu7HTgAVuaZ5kWiU6Kd",
  "key5": "5jHVwYzELRqJGhyUGPvet4RypupvdfxmMCvRFwLEcjhXiA4noSUjP3nqbDD4p9A46ZZa4i2QbPGxKFii9osgyo89",
  "key6": "46HGGh2RMjZz974BLqhU86YBGT8XPPhYr83qRUFiWWbsV6JMw9eqT3fCNuhaCXTwY4ovES4XR9ATAHBQ4puerFdq",
  "key7": "akvy5p4iUJuovxrV5fW66tweKCwX8rJhm2KjsLXi9mvpTUwf1CdJybuQBteKrxW8cXghF1PfvJqqgv3qijrwinF",
  "key8": "4xF24na1xh741N8dX6Hre19U4ueiuUTn9fLgooeRUHjtrU3gYQv5qQkd3UZVr3VT5J1v1pDX6YtSpwqtzh8dmiJ1",
  "key9": "3fYc39qED1pzCqkvdTtZmfAzhEHg622vLySsEXBBkvEv3Sh29zZ6mhP1eCYsJTY1ho67TbtMrS6nMgGiCHtbXZtv",
  "key10": "2qjWDS7F7nFRi4fP41S31Pf6ctePx9aUPHoDERACzzvcfY7YJ1rbjT3kGt6b48rPSY8EjrNLs2PVkAJQSf2GaN7M",
  "key11": "VGgASnjd9wHS7MoMsn3tswtNacpPmvPNDVrTQvHnj2ko1GfA9a6nrpHKtCgejxjkFeizPhmsQX57rnPrvUkHmft",
  "key12": "32MN86BSxG3HDeRzD1bY74fXkScQSnYdQvJoyC57dLLj81RKo2hb79crX8V25XxwZzd8nbRTvY11qY6eWupL6sy7",
  "key13": "chGsXSpEv8WxHPccmx3Qu6pVQRgHtKNT9RjPLQ5VzuzdW4tert4mYWbBzxXHzpjTC3xrC8pWUHXh2QAGyNxQ942",
  "key14": "R5hsHCpN1Crr2uwepesXa5tgPLgPKcdALh4vS88VfGZN7GHF3QeyqjBQbude2gKzcE6TjxRqe84o8PibNy6vGFG",
  "key15": "nKu5CHrdzZJuVRpfZGVXBHriAvJBp2p9osj6Yk4mUxJyLmNvzpHcA3L1CT7DKowGW9qzMqspVJ6DbLs1hBB9v4R",
  "key16": "3UNVZPhofgDq6Gfo723isKMM9vmnabFELYp5SiCWSAAXk7eUAuvBgHJ2zavPdYSXoGjwciK3QwRTvDF2RRnoRVhc",
  "key17": "61ohrKBwcKPNmM9rgdkqWeXgQzdPRZiSCHXd456BW6nk8WdY4PT28z2JtrCKjJWdHfKa47s6MJ9UAhiC9q7hRqpp",
  "key18": "fNSLBcyE6wgtKCXkCJwB5qfVKx8ZySH3EJ1mja8UtK2wyDpsqwacZFkMgufFaHTsTnApofeZ7gnY13Qhpgto5Lc",
  "key19": "5EG6Agx9w1o6fLANvhiGcQkNiB5wKbBnX3MuCgkXbd2Pa1AubxZrvdshod6waEYK14Y2W1vqysz5WpiiK6J15kMj",
  "key20": "3rqkS8AMNp8y6rZDpdQKZqDQLtGTMAPDwKD2krTLETKQYSeLTN89RtykND6QBXHGEpTgEprycHau2JVActi3mknB",
  "key21": "4i7DxXasykwr83SgamZ84z1CVfxgSZtKDjFk8LffFwde5RMrbrUxyeG78NvGqJyTtLd94XL8CoNGFvG8WR7XbeK7",
  "key22": "JaDy8yQpKV1nKovVBXYSr5TKtH2PmBS5xUxz7kEkP3kbgkA33mVFFFMKnB9RCtSxSLh4QcZhGs65c3BLPphZjyf",
  "key23": "2nEzyEN7gnJ8ftgwFvYhUhzVr8bwAzf8ByF8zxoyg5jKjL9efbaVfarc3xb55PmSFDCFwCTXXXaLGDQ9fzPGZDni",
  "key24": "2xBLvdyMWySp7F9JzT15SUujAQHwbGg5rrumcSff6WaqJoCUw7UEgr26UHRbrsw2JbHWE6GCQVaum4YpgHtgfbML",
  "key25": "4BTVfU8iPPJtJZ7UNAGHzJd9eGbE565CntgUpE1tDdcYTaSJVfwqktUfTeQxJAibxAWD9Fb4si96yA9A5QvzJAfp",
  "key26": "3zWLyUuFyhcwdUfWE8h5FUeN5aBw1PvP1CYkk8q5RTrd4BahuGJssktcQFrQiz4E5f3GrGwpJJJavhw146pFwLtE",
  "key27": "HowwH1ZQAYPDcnwCQZmcs1tuwPQiZSRJDV4xtS8s1XZGCsQTGWVYsXizYsFtdHmBdtArunjHJrPLXvqp6VBiAbi",
  "key28": "QcM6uChL2ftG5LsmafVDbZVHM6axz2aoWjZqKdgxaDoKAVc1dgmc3nTNdFAowQK1pjisJd6uPsj58dYASxTJr5U",
  "key29": "2qDb5thPX5Y1pYUMWLU8JjR7628sgVMcQvnH9mF61oGEkZGxtjpU3BbcSr1tUH51AgAQqc2fbbgs5jCUHzDVJGeJ",
  "key30": "3g2KjLXL23pf3paiWxg9iYbWyYSAixVpDKfBxLd6ukBokvAauifjYpjQTo7tn6LTX29rRhNLewpv2164NWo4ypdE"
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
