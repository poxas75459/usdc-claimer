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
    "5pDF5eJpAaZ5YNhtxPyXzD79dzKJKtCLvmmg8NnYsT9iemAbx4GcpqQ8P3douYvcJfe4Vn8iHDTQuTtNAh1iTtGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1bDH2jCMoMsTxx58adDcq8q6QsdWEiWARNH18L4CRSQMonJsA26QVM7uqF1e7eZdBCBuougTm5f7fQMa1bqzkAZ",
  "key1": "5teumuT8JuammdDAmx5xnZSt87AEZoaCZ6KKyWM1qRygC6rqdvdbmFo3tnXG6CpNbBvAcqJiT5YSJ2qoGAJHTD7t",
  "key2": "3sTvD5BC1ucGL77LCrGPwF54TAzupaiRKJnGadyPGAzWcdnB7WKqaoqHN2vB5T6e38AtB9HZuhMzEBsYhiGW8Ynp",
  "key3": "2i5tcojsBj6BuH1szvSy8tYXsEugVMB3L16yiXasD5cTh6CyA1qCMWgL6HGCQSV3pcHgzsdHsk4EPJ2pPZcNsMrh",
  "key4": "yDZJJvrmne5DUnHZDEgPghe6wz3ts5jT4tfhvbxBEVQyPZh9V8K1VXNwzchtgHtAxMMRxMLyN6PyqeCoQHrcq8U",
  "key5": "3ZSCKKuz9YKrrkXwTnGjKb7XFsEHYXxKQgbbMiJpZXFLtE5UCaj4EnvyPVGDg3AGqyvdsUXqjseSNSenaSg46bHg",
  "key6": "5bUyRmubiExVttDDmPGJLTvQ6wZ6v5YxdbGaNckq7gXboXE8bMdhwXovHQL6bKrb9QEKENwY8YywiEt9AS9bxRzA",
  "key7": "2Vz9fD52tHQb3Fcvg5qGSUY49LRnjgsZuPpB4Rb17WtaZ52kecpBwXaAct3JuKa3JQznGbYc2dmK5k7PvCyTHZP6",
  "key8": "2VpmBSKPDD1uC4PZDwZf33kbLr2EdcbvRec6hKvYqcbwA1eWRXeiApVyCnDjJXVjAxkeyBGSiVN11TyS8hZ6YUW2",
  "key9": "H31drn71wsPuW5ngXK7VF6FKFgAyPeFv7mRhJLQcZq19LYsDCoiFgDHcoP8xeZXssL4P1FdTwKUKmkLH5uzd2HZ",
  "key10": "3L2YiGqfewX6UJsuPRCet2x3k8BMH6mfBbNwerMBYT6W24hAaKKnmhViqpRjPfW6bVE5RN4dZmVZkmyc3MH5YLJy",
  "key11": "4p21b6j1RtTcHrCZfwoTfCkQDWxEg1WFGDGHpuHgYyZWEajwFdB3S5ASM4s1uLiaJy3vS3ooYfqYPi5Sisen37x4",
  "key12": "FM958LBd7LTaJuEHFtqPoPExDX1GmeyxXCzuyfgFwLXNsqykWjXYeiuUsne9NTWq8Ld8kb3WHqW6woDKHNgK2g6",
  "key13": "2KB88VTBwcgsHh5WgabESwVqroocqxVnuZERNePgvn6un6RuC3E7vvk2wTtJXQS4CsPoqdeM1xwDaYduxZZLe983",
  "key14": "4jESNxv8bMbEVLSiPGGAx3rzxN2EnXrZdha6u92atHtpT2gGBuJFEPAkFvsLD7dPf4JLEAd6fpvHuUXJqQo72gLy",
  "key15": "4M6VsdDCmvr4aPZ9GWLKHyaneZtU2vM4sNTvLdBzZiK2ztZv9Y5wPEMaCRAe5ScXSAqohrB17KhBfgDFy48cpjtY",
  "key16": "2Xgc5BAFddgacQuSTJTL9jjdZ7Cggh3SRT93nKdWZs6kEKsd7u8UZDexuqzFSjruMpsWTpzVTxjuZpXsZjNnebVd",
  "key17": "ZkyLaumsqaNADB2USVVvGy8qduVTFEobzLmw1Z9rA7Nxxe6z33rmMQwWmVBXgQRZaf7RNWfmGEisxWLDcWS6gap",
  "key18": "3C6LCQqW7s6UyjUkavUe2ZFaomfdZys6wsSki8WKsrSftzQ48z1To7zR98KBdkt1oCyFFUyviGg9PB7qz9ucP7Fx",
  "key19": "37BuBtrqBKUwnqXnGhTWQ62vk8RGkPQRCnEUQXS6zhXeUiF28NDWRediNhjLB4QcnJFsbSZYeFuVFmMiUKycwPAB",
  "key20": "3hMqRF3GLw3NuxD5cSwf1x6dNxYmX26tdiqi2dJPU6Csc6zaUzbYm8L533WwXP1pJstGHef58NP5Sz94dpunKJiu",
  "key21": "2z67vK49wubBSJ3rx5PLHGvUfbxenTAnqLtgpv6JXVfbhfVXKfJ1mngrbP2YJGdq1VU7X5vpw5Ms3UeJpfbWLB8b",
  "key22": "5TQQ7Dzv32gdUt9UsHwMFsN1umhmYRcgbKjLc6xBSa7dGhbht96ETfoAgGYwcrHQDyUXwHybssLgefgK5AewZqtw",
  "key23": "ZCFea1JLh8fN4vEpmXf3FxoEpC26bURQ3BL45jTfLtrhSUqL3P395myPTR6396H6BfbV4oB8NJSxnC2ZGcPvJdz",
  "key24": "39ei1DeE9zmZjsNcCSMRqqnaE7boCG5sWVPPsVzpQa1NjBKwegzHBu9Bunh5zz9YhrG3MifP1nWaxJycSV1bpi6F"
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
