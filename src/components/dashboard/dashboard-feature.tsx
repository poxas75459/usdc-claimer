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
    "4RSEtDMBS83xKrVq2kBANv5TaByUggeo4LLrErrsuJ5ZGfqMuiUaXf3p4ESBMnJ8nNCHu1z138xQ8HwfBTKqBDhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D7qiRS3miL2KPP3HKut9dGgbNEwaSpj8CM2a8hgQVXbHW7cKdwUTRy6bBJ5Cmds6caH7F9wd1BQwePKdkXxWVqS",
  "key1": "3M7Jd2JAv4SSrj4ho6NiKk2zWpvQbfbHgxi8HGae74mSB4DNKoxgfkCG6o6s8p72w2i9kR5y1C7hiauRDmvNhjHa",
  "key2": "621iMwZVimeLw5FZ87fpXCREXuJLQHMiVGJsVE4uJiKS1qTSL6E8vnDs4vcX2RXv5whFCYUPJAUacQXNzTUtF2PX",
  "key3": "5wyXVQS24Ms9P6MZXGodLX1G9mpnhYqUrc7vuQfwXz1yzfhvLDijshLTKkKfVhSJ8NzSJV5t9nB35L4ox4sKXWhk",
  "key4": "4ah1BtaCnTs5XCHVCknb93uarDVr15qFn9sBMKVc6B9D4BPjYNrs3m3kQhfbJgHYasiGWV3ReXCYse4SsghjzWrc",
  "key5": "b59M26CbK5QjnQWPqAQD31ppha2zW4tKa9CMeKuSs87RiWeo4kQ9z4CVJRDZPEmpiK9TGTq5YsCEmVNeDZrU7aM",
  "key6": "27Av1Y6ZHnzn8wnYcgArajhnGwyNMQgSEvwDnnUxcaktQdNTc5amjF3A9jD5V8uKXA1L4UdbV4DTcug8p6rV8Cnx",
  "key7": "5Beqm9teR1pwGXNHEoeZ5R6VYcYBpzCGpc9FB7VL8FvWAoKR71eYbL56cSHhqxbZSXLq7wFzFrthFiCsK2ngTxyJ",
  "key8": "xrbNpX9CMTvetzxR3SAJqPAZLnVVjYPYXCEtVLzFLBYoyQTcXH4D9SoDmCnjHMaEMnrLbXdACU5J56zixEJihr5",
  "key9": "4Xg2VbqS1mtc5XDJFaXdAVJAuJwqseDU8DsuyEWNjuCZvaQsE6fFByFdiTmtLd7Mwkts1wv1RBBPZG63kfwYnQ1T",
  "key10": "3KMW7RvXyCMVdEkvfbVN95kxzQwLam5XS2b3mLu1RSbhTSsSB85RehaXTZSfv6MtKUjKBJaRUtmQrvgC3obdBRzx",
  "key11": "2QERK3BLNg7HNJu6iKvA9QpcbFKvZisRWPBpZmLAW5uoeM3NLiPnSA5AGc7RvnefJJAaApUr1fMayJnNBVV4hzKy",
  "key12": "2NoRxvSisyfk8J4tzr6jBDaWJ8pG3tTYorGbwrPcfhrckYRUzc8iG3R3jyaSAtwAdw84pJRtZtPKU9t7V5wMQdq6",
  "key13": "5Qq5G4WNdKitNJD4ktZh7v69rMPYqFrg48Dmsst34h28QY2KQJheo5csnJk2XZAFh3SmWdMXRPsiZNJh6GN9HuNo",
  "key14": "4iSJmXqNJ6112XfVX1xkPo4WpNeVDpee4dTXZKxVuVYhNgHc7azQmV4WfohSoPGzHE63b3FQbEyCudSvays9HAPD",
  "key15": "5run21eKSzEQJVb7ubAn6kd9QnfaKuzzcWvY6MNuqfPXXFiJAxsVJ872H2Qob9HidyjALmrKL7YHDFJdEXHJSEZs",
  "key16": "2GskiGyNvR1bW3oML5ojzjUmKnbCc9DqC6PQz4wNH5vgJZhzFq5HknjgxZc1TWoKjuo2daiuGTdCLDYV7LZR6NE7",
  "key17": "RjLRzSxRj7s8y73CoAq7fK8JE1P9JRrC3jNZ9KRiBpWjjxGAobfuBGEvsKHiQcNaSUP9neBGt5RE7MdUtiKB41q",
  "key18": "2kt3rGQKZQyfgFm69bpw4cw6Q5QJmoqgAYGhrEvb75QsWbHkD18Y2TvzzdvL9wwz1j2qnbbwCjZz3gCVX19DJ6zY",
  "key19": "5wfJjYYp14yVPa7LeUwk13bh1o31PQ5AKa9uUjX9LVyzyVsAZSgNDd8jvQJkJQiaM24FtSVcPRZnvCET9g16UN42",
  "key20": "4BuaMdebk7RJvDmygUTGnZVsFve2AW8hfNTf5GyCx7NNmzpt2FJgeaEbiFP4DFQgJ1XQ8vESpQuPmf1ZXs3QWFYf",
  "key21": "2QFz2WGZn3HtBzsAfXdBgVPj1iB6CbnUzoP5ZVRxyd4gNi7qAHpcQH4fzGDUYb27yUJsNSdPEM3Prv8Q7o42AMLL",
  "key22": "2RywVUna8pKDiUw8o9mcz8jwTaVELuejm4eVw9sPHCt25urX9uLwaRvi9oZM6uB7i7rBp71NVjvoW1DmFXQiqNLZ",
  "key23": "5wthkqxgmWjj8WT79wqAKB7KP7MYv4T1QQPtEd3kg61XmLFLCLejEnVxk1EwznQSXuv4JLi4MZHHQ5vYeBKAVs8p",
  "key24": "2SR8DKN6m5AQDWsMBBuAzq1LZEGkWczNuxH7aQ9WdZmd5on51uBsqYjcrtrfSzQTC2aha6H3rfbjqGcH2dkxgbdA",
  "key25": "3Vt98ThkbQVr2c4KzZhUZ3k7TD9LtxYgRUMfbXapiyUvbNn4JvMemSiw8ResLs1N4RhibkJvgBvQnuNTAfLcURce",
  "key26": "SDAm7fDbLLBLnYrarheypcCR8pTVUh13f5Ew5mSsTPGZFJGesbcNbLa5mq3cNQwbTrKneQURg7VDs7w2iQyYxVt",
  "key27": "52nuN8TEDDgKHJtRHtjqXUSuQ9MAF18YVHQGhNVT6RCzZLPXd7jzacXPGpkJcag97eq2WbuLpzt3RC9TPUAGqF9o",
  "key28": "4Pkpn48MM1xo4Dfd5HKN7rcSjonp67wMoPgoqdz8V5qbpPZzRoMA4p5WKWVjEw1qUbfUdYL8f1gMjLGqXwr7zJix",
  "key29": "3STaLiezmKbBE8auX4UeJX3Br44Ua7YxpdJeQYq1QJskBBTFtmQQnaFU4SVKu4WaoJgdpSdWPi8yFmM7LEAsmF5z",
  "key30": "364jUhYY7tPMn4GPJvX3D9jhRpc7ZqmUJC5RpDjDxcP36tv1prV7m8TxAbqZYxut5cizUKKbWq6wuMnuhfPyPW3m",
  "key31": "2Wu1YaH6iUGniJq4Vwe8G8KEbYDEY5pG5zAkjj39FDaiYWDGxvRnTV7DxyezNxWLkWqUsoJPtm3Ci56wNr4wmGJj",
  "key32": "5tEazdxF95DKVDzmykf1WRhSq7HuWuuYp8A4cWyNfcty9Xoe6Jbdg9icUwXPqW7jJkXoMaWdZJV1cP7qpGRY9QiE"
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
