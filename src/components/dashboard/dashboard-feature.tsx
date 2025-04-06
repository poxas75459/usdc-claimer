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
    "496i8ysavJU46ShgZcbXbvmVChTccr4R9fWufGSkvAiR2AhyzFaVH8Z47JyhVDuRVNMyeDkPjgXoFBCQXoSV2nTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WQQiAm3QfjAsKJnJQNyaLHMcYpUSJYRXNqctvQ5HS7FRMkziaddC6hVAZfXxczcgrYWTVt8JKmJmQrCkxJdZouY",
  "key1": "4wXCsAjAkfxbFXsfzjE78PjHUouxVcDGjhRkfmCgWue6osRktm7DnKzYUYU1ttr4ZeJDnHYhQB3QTow2geGTwRiR",
  "key2": "555QcpXv4B8Edr2Mpe8Mb33CqmnRvfKM2T2sqo3pBiTqCqdyBXCJ8XbtkHQ3D8HSW9WfRgcHk2hqyQPxBYbS5wSY",
  "key3": "37ikY8a1MZFm6oidoSfEx8RtAGqxZ7bzxXAdeW61zsqG3S9E45vBEwgiFpNNxeKuBQ5HcDw5btsfhJBARjn9Vaj8",
  "key4": "67rmfkjVBqxYmrf9D1UDJuEsKGyABNkVJhCqL5XmmXBhdL5jY7cZzv4X7qFJ6jfVHZmVGnKkNXEA3isj3mgnZBYZ",
  "key5": "5KodmboqdgK7pr2Be5xawzkuiG1bMcqV56ava46LsS1CsnyQUdsus2otnxAQCChNk63SAefkDdb4a6n9X1Fc1wZc",
  "key6": "2P33GnaDNxFDDwmEe4zxXqrW6rGZuUBRqphByhYaf4zDZvNaWCC9ntbN36R8M5Gv6cfnTVszz6ejJHyvefsBU3Gs",
  "key7": "4fbpxxf2z8SU5oDrjpfQrJgW1ZXpG5oSozhiuWARJKViYsGRAhYYwN2AWJiGfYo5LmAXErGLDLWUeSiGAQZzmH6B",
  "key8": "3QYgSVnAVQRe4x54nrp8mVXDZi5Ukn92wFxLX1E2rkxN3vdz8etW5jjoBVx8h4rcsAeUw62xTHRnsFUEtCSrnKWZ",
  "key9": "28UHMeNoX7NebKdJSz323sgNYPPGKgMRLBEN2ACiD2Hn4BTEJQN76T93HmT9EaDoHCdMfhich43YJb9v8eGgM3SD",
  "key10": "5mxob41CWQToEbsbEnrprW6WJxvK8HGTJDG74kdtAaaauheXo4A6BAuHToxRK7HdtMN5FWmczrZtbk8sSytHQcMM",
  "key11": "4YAuNUaw6JZ4NYRxczRiQsUmaVrX4mDWvVANSEnsRRpgK4YBnoBD7so5PaVX3pYkM2t2m7jQH9wjZBah5VU2rRxX",
  "key12": "66DwzK6eWyYo6uYo2Azo6vETJLA3oUCbGVQfjQ6yK9298BE2JVmmhEcMLYXR65LryHygt2ChJA8Tpo2crooLjLWN",
  "key13": "5R2Fps19WAjLpSKXhcbAMAQkf5mZh93d8QSprUtgZbs8Dh9GQumkAgUxmiD38ajVMhj9rjfmXNinD2LjiYTL1u3C",
  "key14": "5jqLgdvLHpMW3oGbA5BMQN2usencXE16F4Zh8yefQF3AXSezv6QsT272P4eHm4Qvf1wpNKKzSDJXh1getRMXcn5u",
  "key15": "2Wr3fGDzc8HaT5Q5zve9X5xxt6xpyqz6uSkxrniMDWS3bFBSgSDY7vZrihg29669d4ejb8d9vvdohp6jAwDj4shv",
  "key16": "41Vvib57yb8CTQMtGCTd8WUgdWHTKfamhi4CyPM7bEAtFSL3eaXc8NdKAeGpAtRV5E4ovUCGxoju6Gs11dTBVtnD",
  "key17": "4Wdubdpzi7XvhtrWDSRFMWB1MBvsWLVW1Be5Rt7xFgr2Q7Hyszso45uTWQYS996GiiUv4zn6W9fc2AJj7dePkSjH",
  "key18": "4b4RbqZKAA6qoVMSoSEXwv4Sv8T5bPqQ2LUGKR53kCHwLWtEyrvzEoefRa1RGeUNujGtVRC1Yy8J5QSx8KEEdU2q",
  "key19": "2qKe3MKS5256kUGDYvy8YLnQiJoJjKTLbawv6NDbZCNtvat8AzfNajVt4ngVbSAuJaxU3ixo7842LgXHUxuHuMLd",
  "key20": "4vond2Uf1VNowiEan2JJqJ3SUfBFXHUsbQQjvGxk4hPHWmT7kjTmz7MB2ntJfuc5Mf6XbeBcqZGiHgHnBG2LmTK2",
  "key21": "37xPnXrPkbkXD7Qs7dFmvnZQkYqauBPVwE6LYBabqdbQJtvsvPYKuYKHxZ5GWVA6La44byDiGikVvMtFQn4vmV6N",
  "key22": "5he114MLx6sWN21dw38t6TnqNMJfALKacpZxBMyGRYWxbTEhgf4cuUJfcgtSPuZM36Rys9FAd2F1YXMve1iiCg5b",
  "key23": "37xHoSBdYEwE7er4KJMZMmk3YCeUk6p4kbzz4j87N3t7GNmc1H6BUU8KQVQirWT8y6yUM5EWN7uKaY1ZiCVfTUDX",
  "key24": "2c3XnNxXQjzx4wjCwQCoS3VEoZvr4TzgZzjHnQA8EFsfVXwyEmjghop4CHjcUaJQzKk9btfHToPR8X9LkZtTyeZk",
  "key25": "3WswC8LU7DoXBxkMTmKkkAvPyeNmSjESX9roYQNs3DLxvH8JLWJbvdD4UCrfQVGQoXYPnPwe3dPvwqdBmq3SPFdR",
  "key26": "M4F44TVsxeg7d5Nffiqy1VioXfY4hBnXf7qc23MeafdCk6H3VDpYZYV2z6C8DaiUgRV16cwpVkBmDYr24JfvaQw",
  "key27": "3peR3GzTSrQdP4oKzA5yuUYBD2jNCTcH8XpjrNT68R5dtSQ1pLknzkb1NewYCRaEUuxd22uEfVn4VHvut9wJuDEy",
  "key28": "VbHCYttwEQFJpoRQPMH7y3epgGHCU871fpafguywMNe8vacqn9NfqMv35nTKertBNnnbFD8xZ4QEqEgmuZ9iGzR",
  "key29": "3CiQSVryzMw9sKaSUAcqWCQZtyDDaxdNHZFa4o5GXi2sjbRJ9SJrV9hh8H8NYc9FHZJZh4Rap78VmvUfmNHoyiKh",
  "key30": "2At6rF7T2U6MoXJaffF5z673GV6T94yQyMAQ7zeN1bhTXzz3Qzt9EXsoohm3JKwqMsAGbZEkBj6cbSqamtEtbA6M"
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
