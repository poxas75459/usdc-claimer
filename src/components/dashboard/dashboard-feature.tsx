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
    "3DrxJgB9P935i9asSuV1o5SANivkPLFazrqiTGS4RmUHZkwMRFu9xG76sMMmKWb16791k4iPZ9iDt3U7uifbcUKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gU2e5aEDSerWmskh6L1dQpgstCrZE3tnDP2WsgZeNWTSXmXRSfRwv8KyHNgotonKcbjxKXco3Km5ZK5T8X943TQ",
  "key1": "5LjYwKa7x2CfTY7iD2Gs6DGm5DaPuPcn3dryFtKsQeALJ7gJ5aTiP1mMkvCPmb1oR6d6roinC7j1KsgP5ZkaDoJk",
  "key2": "56Ggr857EQ3YGZquKo8bFGaPje4kYHZPEtkEGJpGmijCay7bzyr6vTGUmc8JegjmpwAMnK86yN1UNzJUMyf9rTY7",
  "key3": "5h8ahqTY1kzixLNNS6qzHpmj74WftAwqXtsUGkDpLjbJaCfs18EyRbCnyXRxNcprBp3gzDfvkDQrFJXgf159s11q",
  "key4": "DD4sw7FZEjdysVHqvJT6Sc5dtYFLV5oPzdmaSNatjtX12vGKYrJUwMp6zN9WSFBDf3BJ9kRyYNWVFsam5sfyrJ6",
  "key5": "3GpFHUbvKk4JtK3n7e9UsRx7NLov9JDj2FU9dQGEpMwuz5qiJaNtRAKvVcmDHFhiihaxe2Eq7xNt7auCnr96qUJ",
  "key6": "3djBs9BPPEkzspUNCXURGGCokYgF9ywK4ozDggZs7DnbXQv9R8CsCP3pPS582VUizTiKasLf8gQPUg9zWk7k2LDV",
  "key7": "3jEfZyRPbhSQhmj1BNDKsrNGJbAsC9MZwhnmX3M1ui4jqUUzv5XMXjGsutQiQet73coDTXC6YVAiD1gvBaUX1C2s",
  "key8": "58NXN3VMzJKFcHFcRzZX8oD8fCc2v43C9GQzEtsXhaet2FCvgZYxjLvU7BEAbDL4d2QLF4PB1SxGBv3dHRbb2JkM",
  "key9": "43e8KUhg1T1nvWTr9xCAhDj7G91aL39Za7cmJvjbpQJrbXwaUrdFwsiusxGtRCdSeRBAcJWP9eyJDeQNE5fkLN2y",
  "key10": "2ccTAuhSMAehAp9bMmhBtYgaDrg5eQQEfikdM61V8CRkD1M2JuYjKXqeqTU6XF3GffTMcCQMwGBy6zMtBqGgy52Z",
  "key11": "4CJmqVxWJeZ4un7Q8z1KNbQPPHKWsoioa3rkuAubpF7Ws5eHwNfTSgENeskKMHcJPvJc7nVc6p6pD1pHGJuWS8VE",
  "key12": "2q5yT59ZyiRiTCytP5PT8qjwxYcHK6w7kSxgLQmh9AwkfK3bf1HZRWXrTFVWngk96emS2MwZRuZo6jK7LPDbZYG6",
  "key13": "4uoQyaybPpNJkJFfCVuAbkpWGhrY57EytjpqwtbSvCTRwyfH7EkjdETcU6aoisgNfBJXMZVcn3aeBfUVhU4VuedN",
  "key14": "4BoaQz8yUaaYchc753RXj62dKmHADzSf9Wq737YKcLhPt3bChRN2wFKyZjT8ukFYoBSwgqUQjbAyvBqyxfvHpbP5",
  "key15": "3hqBkdPVj7p9fGavCYoVVjCr1DRr8qV472WaAbe782fxyaNrGW5hAvBE9YWag1rUXHQXaUjDJfDAU8DCDSv58Tw5",
  "key16": "4i7zD4JTv9HyEfSaxw6tjM2Bxc95p3W2Jw7bZe3NZNbkQbzksjEhpZTw6N4aJGFLeP5kKvDvY5pBGzY1FAJxocjv",
  "key17": "3vG2u2xyJaAM87H4SF8zNw6XTh7QYjP9TNEaedWu2rFVQ5mrs4c7N1dLJVxUqX679qyyetb6dLF7zCAmFBYSoX3k",
  "key18": "3wxENzbVVHyZgE4EgKMSh5tp56oH4gi7rguMXck8kQ4RMoorAidzMwJBKPzZ4ohTa4YgkNY6i8oR9pP5LDxWNei2",
  "key19": "4uXhZ7p2h8VitStnhQmUem5zLBUqRxA47M3iDVs9HXRKDGavDwLSZc1QkHxtAB3bZWbkxB2vwHKAEHXCGubRmRdE",
  "key20": "5HxfpYqm3Tst2oPK1M5GE1w1SLYQFAaivMZJC1AYoP7i93xvUV6zNysr7FaX9j5d7BqStLxTx5YsfrNkNfa8ieWP",
  "key21": "3q7VUnyqnFreaYcfYMk8MDWSkunaQTQw3ikWtfwMG1NWHAcA4L55S983mDMSMxwzWxXHg9TguHF9FXArCBrtAyAA",
  "key22": "3h9tsFGA7U96g22UT41YWiccv3nvVsSRqxWUyjZnqNYjHN8RDTUBA7NGTLT73RuSF6iwZPRJEJC63Zgdj2c6T56c",
  "key23": "4WrTR5J1hVcspBoosStJSmbvGnc7xAngg3qApDtNT6WtriqWzat2DMv1Tv1bkUr7n1kXJT4gawwZ5ii8vtWSUGPD",
  "key24": "55q6oE3YwJXVq1kXrUWLo9oHsd8pS8Zj7drETNHmFs1itSnZavEMqxRK8skHCSaK9xPsmsace9VmGGjFY1tbWWBD",
  "key25": "5t72s7odcjS8v62GFdBwJsGkAVuGvHe8M7D2Fpp9quGKWjxKMXWronsqYdCk4D1csu6eWpg87rqygxMrj2eW77XS",
  "key26": "59jVSUdcCYHpik3R7LgvGVCMKxGaFASoubSt64wrmjbMgjvaKfkXd5p6xtSuZRdzQRsRAhNhTsRuji4ZuFg3spmT",
  "key27": "b54ZMtzqRpBS8BZRWGXfFozWLCVTqjvWQ12hLB3vDekWethJcsUGiR8b1cq8XV5oC7v3RxzTXMr567UeLMmfEQ7",
  "key28": "58aLHmTjSjxB4QvUu6buRyBiqNCzusnhzLib2Mksz5qkaCdCFP5kbARys5i7mGWQQJBqM4zFvvzZrRPbmLEXqBjP",
  "key29": "4yH6snBPgJYAkKp36bYM11EnPwKa7DLnfZdCZxjhH9Npy9nZbPUEsftNB8gHKX9uT1sM4Dv9nafn8QHoS12KEzuR",
  "key30": "2Q8BkJNiAMP3E8fVngRUwVUgBReNw2p2uQhNNkrYmP1T3MVrMZXx1XfMaHCbTbj4cFdgm7rKSinzEzY7ekht2mqN"
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
