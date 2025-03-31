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
    "3jgGTyVYHkTzKXrLaNVJFEX5DKS4tWThM3BXRuSdBMYFd3hA4ZjsFuDDspx9CZb5PVaSZkWLn9X21Fu8QZSaGi4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mk9cFXLQsMMd71HHZCrnWCAvEkJRnhL7ccc6jqQgBubakcP99t1zSAZh6Urw8q1WJDiPnRENnkLjXxQaUHtmtmW",
  "key1": "26qprmj8YCrRDN98n2pjy7DnbgibKgcwPaUX7Af1zNW5fD3M1ToqUDkEM7fS7cDEUssNkpM7MbQbLTspNUGqMx3P",
  "key2": "4MJ9cReknqARNmDUT7AsRXtUqA9EmQtWPEFRvrTimKN3RvgS6MKd9zZdwSx7sEPArnbVh7L1Dac7o3o2jY3ARs82",
  "key3": "5Yq9mFHNvKGkFVQjwDKKk5Qbxkffc8yjXDQAQ2CRRPFsZWNMATHDULuDd8HA7VK1d1z6MJfXd5uMZfLhDiDMMDZR",
  "key4": "2iLDe33YwqXqGRWtZfr6ERvVhvSrrLHAiVdgKK23KdWEgQNLE9w3MX4ZY8ChUMRSNVggvvzMQBPFQtbQcgJeifL5",
  "key5": "2oLZ3eJcSkS996isNLWAsjNf5eKWo5xFAHJ8eShhkKkmcEZeLByPNZJ9d2yki5yoqkyZ8V9Qd1UxvUDAhW1bMGbr",
  "key6": "5eiac3BqQKne7Ewst8o2rjtcazxnzwAkwTARitPPERsKVbihsuFp29GrT7HrtbyGsjvMd2WSYFPoGvDwGXK3pgGP",
  "key7": "5vaTi8w3twTpwM4hLk9suqeWgWZFbQtu4wjyfEWDVQ9oKjA5mwesH7iorTZ7urNK3FfF7CgnbY9RBizCzjj3GK2a",
  "key8": "5635GYeTRx8XVYGq6ULUyY6qNcCWg963c33Tft8xNtVUoqNo1TTtBWdumHpKqdd1pFuk4UNp8HccSNzLXMQa9Umh",
  "key9": "3JKRKRUy5tyxqhyc6iDedosENDWnMcMSP4zU8W6D7rBbP65KTLHpBjC5RbhdPet57aHJDgkQLRQpsrcrq4kMZVRH",
  "key10": "5Fhr3mYbvrxccK8dhAa6PkJYUQAhF6N5JU5T8EjjnXZaboRUSZJvwkLZ7eV3hdZACs1rcZsBzmMEAP7eZY7CG3sG",
  "key11": "66asVpisWM2a9FBgZba9pBdDokuXa3DCjCDWFFMB2VGoXAbe8V5xqn6LUiiF2b9vjudjtNTc3yXyByHhp4uCD3GE",
  "key12": "2baqkBawFG1Jib5cWi1mdHYZz2Bnwj8JQAWtrUuXzsGt6Li3WMshppz4oaXLiuLbfqGvzn6efPxvLCKm6DgzZtTB",
  "key13": "21qkKikfujbQ3jmrTw9ShmfWyELkdhEfRBsJFs89B1B33xXfExDzCcSGXaVpiWt2U5Wb6Q62SD6WKitjovehxn5A",
  "key14": "574rJALf7f5WJEKYDVp4A7iUhBjEY8B4Y4Wh6JygpzgJAvfVr6wnkKqrSottAemWvUcXbz8jt8kME6BToExLmt4Q",
  "key15": "ka152F2jVh5Z5fd2HKRdHxTz6d7etL7PREd7V59r2AmZsMM12pze48E2rCn33mNTt2UWAAPAZpfSY9CLXnbemmy",
  "key16": "287KEtmSh4KNqLy4DEGxcYCpn59bxsyMNndip32TGgwabDgk2TJrQVRe99x3pLb1AMGTxSuYaXafjRXC1G5zKMHg",
  "key17": "5T7Qoi1R4eSNvmJozQYHRF9ZhpGeWrBTo44TRBZZKVnnGFjFZWJiHvCo2LyykLfBXYQQSifCcM1QsACfQEru8UQF",
  "key18": "23G3WTRNwYkU5fBcqvsJWtQMwGCjig7TZFfYsBRxMQrMsVKwszmUDB3njXwvbf5B7XPhCQcp1Bwrv8eEQU1t5mcf",
  "key19": "3tyhFrM1ovoR2wYgTGg3SbnooCWSxcMCCQ67jZ7tnid2RKxWgpiHsHxvsrVoAuvhQtNVqoB4bqUWEwnoxuhscqSg",
  "key20": "5Js4yhcGjQUmvkorW19gopdEDNpf2ExgZKj9bcTp7SeQ1dv1WaNWtAmaJW32AnMNWoXCpaZrWFU1FzoK2jvHh9Zh",
  "key21": "5QWQjaD8MNs5tefg7R9UpAh4UK27h6tozFL6FeMxi1PRPX6y3Sztexqj7Uw7KrWwisEcgNn4EWgaLkGtCTdrF5wR",
  "key22": "2DEheCWikyWqkPEs96xNJcZCH2dTA1qiEA4oykH1JxMKyjA5CmkHBb2wtGVRkTQ6GCNA7mKfwZELT8kKpoA9LxSy",
  "key23": "5xqK6Vuqye3LvNby3FHYP8BbmcZfTrQVf85vTcQqaeAc4jquGeMfEb1DEwbV5v9KLwfUYN3yhj5rCBqe4Hbhc31N",
  "key24": "TXFdy7krnaeDWGtXf6efXaMU9hPKdJDxBrW5B36Zbp9tRKbiB7VEyXp3A5RrTg3H5AXqsBLjn5qnbh4ifzCEopu",
  "key25": "4zDQC4qaNa9EgRLHCbVmKxqoHig9DvvWqs4dRquaymRmendvNTpdiMes2ye43u8YhrCcVtySnsT8nasEcKbY6KNn",
  "key26": "WvVHyk4DFQ9qH1ZjdZ9PjTprmKSud3Hz3ovUutKU2fEMG447PY2ykPZ8qhBn3YuP8NyF4b7st9rLPfVksFBY9bp"
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
