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
    "2XMVfAc5jWSjHZpa9VF965qhTA1QWwaxXTTr5dYyeG8L9rUvZKCJA9EbnnsqkszWerhXqAM9utzd6yXGc69M9nJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bq3QcbdWFhRmUwhUBWCF2WSwRggWhfpB8PnAixSvjUudwr1ADn8rWCmnXVxxtNJ7GfsGxcarZwgnT6qaFbPAKX1",
  "key1": "67nrphoEafAgfJA3Cqvz31XaVM9bXXYkFPQdRYQC2kN4LJUghceGYsF8DrKDrPYRS6iEL2HWKychRWD9QW7o9mqZ",
  "key2": "4wZ2wfTdf1bud2ukQ5EkbrZ4mt8W8JVnwxtZBgYGY1mFnHpjJN2NGHMYTTG4kHxBQeTRiZo3NNvMTxHEcrS8KaYi",
  "key3": "k4x1oW9yvKLYjpra1xwShecpn6SvLJWJ1QQN5DoMo72AFYzfS9k8CeLmQjihS3BNREVrWLQVGqaQfg7kaiW4gmm",
  "key4": "4KoASs8716TZXznqCzFVF51yALvLd5noYpwdzsg9RCxEt1aMZE1yobinsveCfEEgDg7DSvkDirTa2Fyhyic9qEdk",
  "key5": "2gFRPHgnwGH666HDgf49i1QdhDZgcR1oZ5rAqdWYTTeHq9SoCFzhBeuukfvhWtJruU2qYRNYRN7m2Vp3URbfrnK7",
  "key6": "3bXt8jUX1QPyYwA6DmB2vxkExf34yk5oDMPvrEyvCjgj7mtxx2bKQs3BnxxWufmj7ZcXs92xKe7y8bBBz6NbDuJn",
  "key7": "3X9Rp73WBarJnyE1Wxx3W1wndKA3obmKnjqSwfWpxCcVYDk2dYFw1wf6TjPj9xrgi6FK13tMzMnTQgBuqFwTgsGL",
  "key8": "4pZir24n2mg2C1GDgtFs3JCtx1xHi4ngXFBmpv3wD4LJe2Rqcgrak1z3huYR2HEauyTEfH4fu4MzFBW8RYYqYnRj",
  "key9": "27uzrUGxPZPejjqbQ3sMaozYEmamcBnkaLogzhX3t5t4bEKLHcqKeE2AXbn2VzYeYEX3krS7h533KeEHaoHgCBcj",
  "key10": "4C8vkhSxPd67DxWbZf6vYbaiwKQMphmdn6JEtWTiR3r7MgGEMnfsxYgpTuZobL8tzWFFZQZdHkYpenBHk4JjiVLv",
  "key11": "239vkD6N3NGUAmaACwMkV2dSxGmUiFfotGoUZhV5zU1sQD5TppzUfZpW3uAyNN5KrvDURwMeEnAVJTrr918Jxth9",
  "key12": "2RKsFk27D4JyNVHZRsdgz2cx2DnCxXeDcMDkGyFfwAQzedusbNTQEnwa1KcgpsXetzQcG8LBfmeXbNKtUJS69aKY",
  "key13": "2cUD4Nb24cFfWfZWqjUSisHV77cyB2eJ13fbsB4hESASSkAVJhegHvMkPXkPYgTBM4aRXpZt1XbKbx6e7fii7bsJ",
  "key14": "2xem7Er15zLPtuyLCvPySvjhvjFBTPig214eZBBvwoKLdcKmB1NVdLtfnt3AycP4taeVjzcmxnJEFZCUbvbkxq1H",
  "key15": "5rJjHVp5dtF88vRfpYBCaHern1SUJm74HEc25mPz8wdf944kcMteC1k6R3BvtNpeA3xAo4NwjBqax1VZH3jak3nV",
  "key16": "38gryigb6dpvS3EfCJDwroTezpPBfmuKFS6FJtfhEmSr1Xuxa5MafaY1tvbWSWdVMwxFv476vswY4MZ2T1JepYG9",
  "key17": "3vaf6FJAxsBfC99FNcJ8Wou4auKQFRDjqMs27jawUYSYiRzYdLQGNytPgaXY5xt9FeDAxrYGHZLxivozspCcgfjA",
  "key18": "3fiigFiFEhvmBM8EWuVEvJHWr7NhcKvmV8MLwdsz3uztX5SUEsdfuRmYciSHUgp24RsQruyFtMURd1bDxtoAFxo3",
  "key19": "3e4CcqzGa7F5fpZNLAgVbGv5JcoiqQdb64jZY5qqjsGjD9yF7PFcwtUKs6sxpJxj2zN5DgdNjuEa1AtKX7nQHZ8z",
  "key20": "2Vcng6iKh7LAkxLStAz7wBaq1axBVSvKMVL4PpsE71C6MSvnpL3Q37hLYbTtK39bqjSPAAH6csSfyvovXJnbCnHY",
  "key21": "JNTALD3WiqMwCFUTF5Eo4dYzJNEimwKyTATHWousAgkcz4LYAfmsE6292V4rfLE4kJyge3GB4tSkyGBCJyZVQwM",
  "key22": "2YJED4RaRXT71kCVTJSnVPY73KG8xZq8Dmf7eigyuGSERojjWk7YfmvU5ZNf2Qrmntrj9pZ7rH3VtkDf9dFbRNnP",
  "key23": "2qRP4FdB55DXAWph8ZnWvrpdbSMHwssqxtWdcJfGwPb28LqPpVvYPif24xqTk6ppUxFSwGa3ZVnAyQDbytCEbUPP",
  "key24": "2jr9Q642AmDTcxukPvScnCHaupUmESDNGomwGRTVjwKhtJUQSaBS2reR1YtbPWJeGVrj746SjLrE9gBATX5bczZo",
  "key25": "3yQaLMPGEGAHj6EQhmuTRwoVV1Ze27YvjhJNxC83yfWB3j44KyTmjdPi9pMwTQXKEvdyeGXQaF2qSNZCTiqHQFLM",
  "key26": "5RBeMRjiq1BRbntqR7oezJW7qYCWtLMhrdQU29My5ZpFDfY8AGbr9tZuGhHXvgf6Q2cbr4x24n5Br4oyCwGbgZrE",
  "key27": "3z6eQN5GTPcXWh64QR1qKTky79mS5A8v2kCndvgSiqFtf9fY1mH1SehfJsUZNo9avT9JnrYNFDzWn1Wh7FNGDc5H",
  "key28": "25234fnhq4WTRQEi5PUS6AtQ82W8HwhF5n74N9TtEv3stjfeGw3Khx7xqpNvzdky3ireNNGEAaLpY7VtqQxSuhHA",
  "key29": "2LpYWCtQrzeLNgSuKp8HvpHe4irUnoyyqEHrF86cTvcSub3LJkpfaJAKY8Z44ZR4uQAJ6UZ2GU1R1ygdBGJRPoGF"
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
