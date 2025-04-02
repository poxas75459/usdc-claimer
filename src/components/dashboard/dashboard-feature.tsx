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
    "3rAtRxYiMBPQLyZhN4ytS2btHJ8fm4qo9dpJZMnEENZEzvdVx6cCc7vRQfDVEKuARHYufapE9ArbvKURNNv2oxch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T5AZKjuJtoN6PcWpHBLNGDQjQCgyxZkhkeB5F1J7p5kFL9AiwqEKkzLr3ECHJqAwmGaGDTUohxz2gg3RHrxWjQe",
  "key1": "2Q28TYH75CmJVzpH2YC27NXBTtFkYgoTiVRugEAAsrAiCmWxqtQ7HsXeEFexnvjUxk4KMaSHvoRqkLnqVxYK6VoY",
  "key2": "4auUuNDDdBUhZqJBJiVaeeTYPRySS3q27eabvsKvKUzkZH7B8cSA52e94V2YDo23QFMpE3yYu5CxR3UwNLLknL7m",
  "key3": "5LjqknbEFfd2phracNQG3z2MQmW4GiwboWXL4JqXtzjY9JGHLQSq3XLNqBLRaYkaX1mfwnEVcdJm8T173ooKZMUn",
  "key4": "321aEzeCpokxRThqMgPejST42DaDn7zpzmsvWzozswLpJEZBrWT1uKdTS1EykDZk3kfCwpRLqqigL2cpkumMwuC2",
  "key5": "4u7WS83fE8kSew4HVnWb9Rw8tvVVwXv52z5FmpKoMagBVSzvVqbpFLxGLPoHNSPBTmgZDhmtmJN9WUm68jTVugB1",
  "key6": "2Ew6a8BYPRrkV9tWXdwcjWS8KvwHXuNU3LWdPqxu8cJVXfZFjyWPseMdVPQZcmrPiJCBgcqPDFVULfywrEY4WGLF",
  "key7": "3GWwD69HeUVpzAp8T8BtWqp3i79AbD2oUmTmUBKVDjFysuE8CeBVxHyW3qr1MHSYTb7Fqk7NMnwpYdv6DptauBMv",
  "key8": "5AFnb5tv4rNiqT3BNCoxqc2Qu9sFhGBTR5ztpXC2Z2J24fopycvYJvSptaiaD4BvDEdJVRpno6NqoXBUARi1Lck2",
  "key9": "4fRJqfsB7y2P64Dnepn1LkysuCawjNvUFL5nfSTdNxNquwm9i51bpXFBYhkHTkQK7VUcQy3Af3R1BJPrSwKN92Mv",
  "key10": "2YbxUpJidib7j6HGar7zJLYf5EoDubqK8E2WGc5DD4CgfHvkhwMXhUtVWQivq38uWjt4dWAiR1XFJ85S51pBEffN",
  "key11": "5NZ4ZQHaDaHv2PDcadph6oQ5d97PQWVJcjVTSA2zyZ2jWCuFYQS8ygNJastmDbDpSk4SeHSnh5j6pehkNDycVf17",
  "key12": "4kRL6pPab1ghG5dhid3zypX9dnEhpQJ17hKr6kNZqE66LVLUvEpbnXRY8YUPx1uxLgFiHfvjw21qieePtAyg787h",
  "key13": "3BwKf1TcDiXeAift7zjfG7dHKZt6bnnXwPudLmX1J56g1aa6oGQyG1cSDVzBMymBB94uW7PdVDnW1opWNdKWcc19",
  "key14": "4mQxiw1z4x6FvkKnnaLPrGz4cjUoN6evQE2TbWioVQhzNdMqcxKJqABjBtVjv4Z69ZEmfS5Gc3V3jSxUbWc7AWZR",
  "key15": "5tnCGPHuJPYHCprubVyazFJppVtebEbqxL2yFxj9eTXWFtaqPmu7tjEAoViFrTpeDXLNE4E91GUtRa4d9Jp8ihJ1",
  "key16": "4Pj3JmqRpGub8KxMHmWNiVdndUivPAnYt5E76mDcitbaJbJQVB1f9viP6zVwQ7moJtCYfEPaxCCQBRBUqwNjuge1",
  "key17": "5bSE9NAdTeNncHbm7gRRr8Ln6onNMtCjzikBpuXyU5D4Cqc5tEG1r4yDbkUuj6qxhvpexkg3tcNts2ZBSS8EjfkB",
  "key18": "67E3PNtU9j5uEq3jabwiwhJfunPJYDbCCMDVqkdcsuuWdusQqxEhgQUPMNAuxJ1Tcg5JnVf5VadcFGB8HKT67see",
  "key19": "4aPWmW5jquMJiLNBCi3QBA1venMCeYPqMKCmeYMddA7q2omhy8AAk74MjaHMRSh5KRUBTxYFcArD3VzYCWxPFxjq",
  "key20": "4NhbH9i6iys4xdyYZQfBXCYVu2cEghwM6zvemLdVQHDg3J7p7Le7MENsKBjh9uVmeT8RmYRUggcKbrHE9rkgNtKC",
  "key21": "zDUX3iei1LdDk3oErLCCfzmDbLzaD1E771GFRoTC763gn5QFkrqipnvKH54tYU2V6jwkzMRPmvP3pxfpX6AtYnt",
  "key22": "B9hD75nsYpsMeznCwFcHFGevbccKVq5v2CY3eKVQbCLQsdVphJhtHasRdnLqXUNhnUAfaFmSQihqubpmC7HcX5T",
  "key23": "5evYi9TbcstfBYEp2Teq3MwuU5dZVY3yLVf2h5rHV2FFjFgR4EAgaQEybogVcKsNhCg5nodBF62iCXoTsCPr4Gvw",
  "key24": "3nLwvLYkwqYAL1fRxgsfjDqVUDr9WydGGtnEEk2tYZmydtaBpq2w7SEzUzVK9vNL92Bv982nsax4Fww49xa1H2ji",
  "key25": "4mLnDS1HzmAT9ExbbDGjT96BSJem8JxRrUSwrQdye7zJxF27XtjkVgsvYQWtg87TdfB8mdHQCqC7F2dgQ9jwzp2W",
  "key26": "2fGcX35tcUmXw4dLyqyydqtLbsd2MNbieHfAUoipGDJsmza466JSVEmiEe7FQp9TYAZc3BkUsjCcdPLaxdadc4XE",
  "key27": "UE5T2f38Qos42ZvSQwg5XEfPXD2jfFN7uwkwrKg9CLQxAxypx67LNqnDNKixK1W9bSRqUtMCGFQuDaUSyeuTicS",
  "key28": "9KPsqgFB2C6KyFr48Au8EYbRKRr5yrnkQwnZDMvLM5rbBsJK1WJD1LKYxGdL4u3TxXRKmqJ34kBdGFbDdC17j9t",
  "key29": "2aVddzj5jQZcv5VAGbmJUkQKvY6UnBhF7ht1P9FFd2fint5WPxivv8PYdo9MzXri6GqYwNBFXbq6z53j9PQNyeEA",
  "key30": "X1x6o9RGAC6NvzmfSCEHYR2bDBDMed6nhPaDeYtTtbC64DoEUa7BuYAYpkjiijgxU462iWVpt7JtzEqrGPhkyQJ",
  "key31": "2HjxzEyMrSDBj8wgWiYGUc2R7udVeyTEdFtuyYa7PNpt24zRu15CXd88Uhdobq62nQrPN1tewg4PTkbUYNPtpdTx",
  "key32": "2VAfBCZbk76nbYNUbqeh7ANyyXCrG8GnnAgvT1zWWuwdkBYgYuSB21XThe4H76fNV5REmtmwCDdeyx9531Bb41wL",
  "key33": "p8acgkX234zVoA3jJpoUtu7ZGDnEAkRMoqdbWXt7UdzhK89BuoDvWH9t7th7sP6u7vk6zbzJq4ncaQ9LzUr4n4v",
  "key34": "3hjm77dkSfrZo1b8sARqDpj1UM694YnWpFupRy82PzaHHxGteBugP8HRSUf2RpT5Tb8555kr3V9vTVTdpGB5gd8R",
  "key35": "3yGT1zHwaYiAaA8aayxwyzG9XX7JSkLoWvMgThZJEde3qKEUjY6yDXYpJ1KxoT2M8hW7mJvrFFbxJKse1TPSQ8Wh"
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
