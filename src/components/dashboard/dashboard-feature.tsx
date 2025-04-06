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
    "6PJZ5YH6fjL1fQpKyY3aqLp2E3HEa58hE9LRvCA1tPK3u2JQ86SvZYHhhckTpG8tgrCzB5JBr7Tbii6Q3zR942S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fjYeU1sZZTTmXXUknQ7SJ3mtqFYTyboAKRsK6XhGi9ku1FPv2QFYAjAsCAtPj3etwesMwvFmKT5QS8y7qeQYzUP",
  "key1": "ntfNXSD9nSHGYpET1neJe8AiErTMP964xLtwyKcGvSw6V51XfYv22nnYZaNBYk46bqDwXdHi3e4YQzxgQdK6gKi",
  "key2": "46zftbq8Rmxn52U2aZ92eSmdBu1sGPm7KMSZ2bzFYhY8s2p9A45ha3jjrLqhjeMsAnAYA9DqTUzk86TZa9pdeYno",
  "key3": "3NS7y8S7AQ959n9vZnTxb2JmZp6FRJLm84UnxF5mV3aaMgrbjvAJb8Mc8DDndLmZd61Kd2kbfWRnq5K5PDj1WPkf",
  "key4": "XZ8qdML3gvRsZhvgaE1PcF4pgsM6ySGUbPY4r5CCfqzTE2mZwWDcfRTCHqMR3yGcq9Yz1UAj7xZMzUQYQpba1QD",
  "key5": "32mTRA8EXV7WPr5AzwosqMNnFLZhYXNsasHywzEkc5MtfsqD5xvJSmdrs2UY1o6Wc6mgR5cgDsvCsVRXaMhMU6S9",
  "key6": "5rmHfL37tXJGYheb1UjZADTr97Z8wW392WJHYxmVEb9X9U7R5ZTyzQ5Krp5PvgLKmuqpkQpaCXDiaVtDkmuHetY2",
  "key7": "5y3ULVvqwt2bMy5tPHE3SVkyn9cpGf2JVpBcVHDRnJYMgxr9PFHXu4Sb4heEseNBjQ6w2TiXhhon1k1UHJezBaQT",
  "key8": "dbK9HA5TCNkbrRqJk6nhY5ufKirP5UfkQJFmYkYakSdWByGfPbJDWj7hsLebZFVzat75TGLANqXnrYtttpF5UGq",
  "key9": "563FFKx455NHHLVgEZVGYZxxns9s2cdKR3DAnD69NYw5QMeJKk5PDqzKHTq8r9F1iMrDF7EgSVDz4ttjfDrv5WN9",
  "key10": "4EV1QvwG6z4AJYbyXhe6ym7iLLeS8j9SC1TcxDXG5zKDRoyUSbE9C9Rx71zkwKbG1ExBKvts793t3HswvNfNMQm1",
  "key11": "8tik9J55yPqhdv5pp3ZeA3roFm8wk2Ln4zpLvBDHNaqA7qv1FiQL7ZRwnH9b7A13fTJdbsvXxrcQtKsUNfTa1iM",
  "key12": "3s6RcPuVD6K2uuink19C7NnhdHQZAu12SeMB7kkJt1efddP1AmY5naZ6e3ZdXjXWzBMCFkTP8Wp9tk32M4xobDwj",
  "key13": "5CwjTZan5fwo5rHF4DAKFQpKk57KGj37NQz8jiQbntiJgecw6GPVwqEdYd4R3esBsiKZ6ri5TDdcLJdN5fzGohX",
  "key14": "2ZiN9VSrwjRRJToAcjogCVYuiiD4Hev7BFVwfkM6jor78gybAyVb1SrNLi65LyL3Qo1HbBooorEbVak93RzfwD2h",
  "key15": "5E6SeswPxpjAc5Pezoi3LJFwEAJYYETcoGuxW9qZfH9h1tqVaFJwkvHHJ8d3ZAeSCk3s6jJSFR3morvhkzwJ9jhQ",
  "key16": "3EGmvVxoKRabiE7pkspkeBKxbUwDxgsFVyTUsuRjftW9tkL5NVahupz4soBmnmeuawQzPNxuxkx7NHC617EWr3wC",
  "key17": "4sfUk8AytgFFGxejU5UsjH6C7ZLfsEdGH3dma1NXgZ3nR1PMfF2gkV5FLKDT3Za7pq4NoD42YG6JhFuyRbhhoA2u",
  "key18": "iUX7H8a5noN1KEjZGujBrcASVqWpE6nyAt8GtApkJpHw9Gh6vaUZcQwnQzHvChD2VpJhRKYCgL9hgV29ZEntgMY",
  "key19": "2bmBKek11aXYBBHeSN3Kns3GhWodVgdQKaEC7wMkojXXmCC7vMYEDwECvUsR6PFpNxvP67pGwno8LXJjQ9CWcnAt",
  "key20": "2ZH9XNggKstM81m62fbTe5JLsmQaFYUp5q6ERQz3xCF2MV7RkMC5Vw7jTMHWtTxKf1jeS17jrN791uSY9NKpgxtF",
  "key21": "285TgpTCkkMvUyv3AwksFLUw1ueheReiuYvKEvrx9m3ZKe7x2FuZZwJuvUpBEYa7oLApKKewWYVPf88HbYT6Ywns",
  "key22": "66B7kNvgYbkVtfMEoZKc3cfUGVBaoa5shFgriV7ycceHbSMuut3uh26XDgUJuD4gYG7sM6s5xeWwEcN1m4Vz6Vzq",
  "key23": "STKYBMJXXzM2kyJZzxQXZUxaq9cq5p5zg33vrAUPgtEkDriF4uFH865tisTEp2v5nLXDeNMzv2SY8TXrcSBCxVG",
  "key24": "4XM12qsi6GnWWHXcFdPBf4J39DE64fmS7MaqRrMmm2m9wVYtTwfgY27jYdeseZQR4cmbbDK38te9Ms9qRCTPYZNp",
  "key25": "3kAHjzpHpPeeX2E6W8qWXTe6RjsACJVeUc5YsvyuMJVUDfLWPnQvMmaM2q16tevE9bKuVEceFe25NDedVWEGGhbT",
  "key26": "b6CTcbNk2cSgnRe5xMDTG9gCrWTCcEcxcX7WRCAJdCCHQE93HsqAjzxDeVMLkMBHfBw2FgFLzse4KLy7TuQoeSP",
  "key27": "39nY7sdrE8NKpgB7wECdptzypvtXHrLiCmrVwh2PtwgGxmjHietCdwzUuP4xAaDcVzf86RwWh4PeF1yGxmNAkazR",
  "key28": "gZpZxbBDHLsRCg4ZocFV8YHNZE1ZrhfvTMZWrnC9oRoHNdzVKEf3Z4kewrmEhaGW1SRscAg8ajj6eNDWj473Yix",
  "key29": "4mZBpej3Q5HXUtTHcP3wZw8QWWcd8whfxi8siDuNpdftJMghXsSd8oHd95KVd9mugxKGmTL8R5KUrBwtap4oFJN3",
  "key30": "3QJFfS29dF33DwZouxTKbZNUguNvqUKSMPUrsEBK8TAGnY7zZQeoGg8kQAzZ7yEhKerPoFAFnE36gXPd2XZCCgg9",
  "key31": "uZziDXZWW272Y3RQpUh6Ut4wpbYyu6agwm29fifAcd28opiR1z9FiMvNYKNdB8wTvAMUcvyYcgnUGQcwa5TgW5b",
  "key32": "Tnjfzu3fLMJRJz8u7NE2JMcdsiP5ErnEJpbwrxj5aRGYxLRRA8GTbRCYPwTQYw7qYQmxEqim2e6Ac6sGZh9v6cM"
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
