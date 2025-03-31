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
    "3bs2BNt6ksmYmtDmQhZUN9Xy7fVsN6vuRnmTaky4gaFDrDk133Yu4Syt4ANJkHAUaXAH8PwgEhbR4hHJaDivFmvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cVzESiEMNj3xd85ws4uiBUHzSyvEunBDGbTP7m7g9eZnk6agrk2CdxLJVcNxo3P5cp5xqtMpfMCvzVEEV3fNGao",
  "key1": "43PwuLVHiuA6dKL8geyWxxQeo4RarEL1FnAAgoFzRXo5h3j9pxwhvckTUENwYA8v97T8vUg17nkDpvVE1e4MomK1",
  "key2": "5j1ub4U2CH1Y4BDttok9wUE7mpgMjTyphRVxQ5LhKTq7CchmiRRztbFr3zMiFRBH3nas88t1gfo2tZAsDxkexkFY",
  "key3": "49rjw1TQiVBF8RRycTDmBKowSFbgkVuG6po6Ze3kWYNnf4ZaVDoyLcRsUWkKHLagaUjBgDqngnGKEaBbuo58GPr",
  "key4": "3BsrfdHRomNofrmriEJzXihRMWwJRsXxcmf5vhXkNzGuPuDeubAgkN6W6DMpAYm1eWTRnefLHZPTGKNqKUfz8F5T",
  "key5": "5NkXVHx7e1o9TMMxcK2rJt58CB1CB7rzg6ENm365Cv9494voefENJUK36MA1VwysNDa9xX4UHKDN7a1m4apMS3YJ",
  "key6": "27Mnn2uFF1dR7tseiVCp7a8S6UJYMvyDBmJcikusgjxYVh3NzsJ5z4qpCU16u3xWmVu28D7KDcFs3trBtzjuq9vj",
  "key7": "2ca58gaFYwKT3ytfHF66CFRsq9tVo4oEiV6hnmLAuZNRLkuHKhuoUL4GR2QwKLtYdLWYuxFKCNyz8s4CByhjzEMw",
  "key8": "h1gauN2dEvH5rBNFsaykyacrkYD88szZi7JrhP59icjyvRUjysR6qgydgBj7EBhdEZUkGARdWSViJat5UkSSUNC",
  "key9": "2bgUk2Rcd9fFZa1t12JrGK6JCytEf8UUmKb6Ad9DpZYaSsC6cgfd43RERPnr7uCQFeJzXP476FNmqxq3jw4jh2DJ",
  "key10": "3D1pL82xrR9asMJx1rVeWAjPC3bePkWFcsX9cwk5mFCCijBtFX75AcWfhbKusBoP82qKXn18q6NUx1S4aXbkbWXa",
  "key11": "54xFFkKV2BV6kDZDwdijWia2gdj2AAdBzWG7zPN5oxGrANTb3MYsTdBohAAnSS9DFuLbed6qopgrnfwXrdCnU5pU",
  "key12": "dQEcKducWoYfRZce7f3769vLp7EdDmnkCtQVQJxMC2QdgDssRTdpqSw9SEvH1vm2j2rmSJ6VbKTkzFQLVmV8EQ8",
  "key13": "2UVooxexn3btETKyrurKvuBtKmVZ8N45qKqZGJAGBqzqKZGj5g1h6rLk6ju1TXEzT6CJrkBjixc7gYMF9yvUcg5x",
  "key14": "4Bi6TncmMbn4T57MhXx8sVv5J472cZRaousjkCMgNYGfLLAFkTweheoKgF2ofYFLEXb3mei8ienhK1gqhzPhEban",
  "key15": "4T7aFd1PjRc2UB4RDaALxC9Ma6ZB3c9WYtmiuTgQguGESSdGBQaaHQTpFc7XzRFbi7CCnDja7BduXk2nPG6KpooW",
  "key16": "4sDLXWoEGS1ev2ZyvL3MZ1ZeGGh9DbB46c9KnoqF5WZzEckeNhx34TdgBrTh12cg4xPuLwAVCxWnA1ALFCPi8Wki",
  "key17": "4C5iipqnuz8gqSLPRtzrAy9eMAzFDrhXEGZx9zz3URJob86sCcdUQeLYaK6f7W5HNRoBEQPw8oseYsaVLQrjhtoz",
  "key18": "bTTKhdBSQ1MiXmUN2na9EVnHz29ufNYsBrapjptgQV1A1Xe18bTGrhhHiVzxhSejoPrBef4vsRPmQw7Y2MtCxZa",
  "key19": "4wcwCZbuE9h4xexCbkorwymNCxWH4cfW99aTdRWUJhqw1AHxneCCrdnbV5g1teAZfqDBTUqBVoQ3WEFvoz31KxGx",
  "key20": "DwdqEwGJoyDGCk4QcKrwnXbKW2nt3Mr1B4JC7euoqijUYSZdLK7EV3a4r5AsepqAUXBgWVEHyxeJXHRQjxhdvPD",
  "key21": "gHSksTatxGWhthQcKjwyUyCG3qmAXoHKEsyJabx8miKuBrcJvKLQSEU3xgYEfH2GU5T8vFMiWF5We8nG5RKzayt",
  "key22": "1BmZqfWwZoZviTTwr8yuRUCfKcUNaKTWyu9n6ix1DxhTPB4mb5e6QWyTHxU15xvaUx1Qgx6e2kZRzqdjF7vy4TP",
  "key23": "4ec6GekGwa9M9xubJHxwa4yJ3YkyXtq6WmwkRuxvoHUaeuGsCHXcdVrdVrFXUzHYUTwfcuKptKLwxfSC7vFsuTsU",
  "key24": "dRFDDSuQZ383sq8GQ2EqmvbqcE1Y5ftM2jFAgWjv6JmoLPpErwmDwicHHg9D5go9BdA3BLZnhjXZaW7aM8TDH8L",
  "key25": "5ubynuKNVAUqk9huuf9Ud7uZvJcd6hgYYkdjG48kgaTycqNmU5ucrYN58L9fZpK8BsZquirGCnsWdwB8CtYYYG9P",
  "key26": "4oJCm38TRW577pFbCXT1ERAwhbvnRSWuLj3aYa65C5ekpXV6ApvZ5HSwcvWVVG4zS6o7vQkycX1ubpPGZ8MgNfcP",
  "key27": "26zkq7ttqoUMyGvPiCHYRq2cibi7ZC9ZA4fyW2UZbLqPxGiU7N2qEDvwWuUrHvPZZzrde1FvN7QTePzmsC6FuK5d",
  "key28": "5ugK1zoS5yhiMXPwtJkpk7TU3Rug7nvqGVaGLTEFLfiiYdF1TzyyKstyvTu3Gok3hH7nZVRmaavcg38Aa8MeiYcy",
  "key29": "4P3MP8CzMwpcXpzoxM17KScESykuSs3k4EXik8pcZxZrjnXifMuThxvdQqZQhMUAVBPQ76KUnZe95kTtCYrrbur6",
  "key30": "54v7wsxWainp8b6mdqm6hn7fNikkxuC3a9jijddJFE9aaNoQMiqn8gYfcwMNiReGhK851bhtmjC6Tc62SVMdvBrn",
  "key31": "53t4Qda7mtk1ciKYzsfp677noH8tp4o5HQnHH3CoRhCqUqmFFmFWmjWoL8j84Pji1hcxHuoQSzma6X5MAvB7Ej1V",
  "key32": "UxXsyPjFEyzzDm46zTJK3fXs6mVAynDksmqNoqGAgKa5suPffGqLo53AAshzqMs4enG8b6UftkaNRbWjpegQVWP",
  "key33": "4S1BbnRydJZiQcFNsfXZZFTF5zxmNVgHiAum8vfc7dJMYETNbHjFV6536G5iMwtonGpmFVNBUJVEtQgn5aiTjWEP",
  "key34": "BJmQyyP3PDaS6i5UMm7KKqSCwBeBKMdSZB9MnoWM9xuwA6bYTHYK64Yft6xitxJcCbQzZjJmeDjN1NNbMjuhJj9",
  "key35": "2tAQHTtbDZRXNs4iNANd2sA3jH4VN8gDj6nkJ5Sa6sqLjKKMXdJrm5KcUP9FUdVwdDFMxKebWauHj9Tig2uf1b4",
  "key36": "5FJSWgkuS1KAgS1AV8fxqCaMQc9jAmzatozAm4qHBTcvh81vVdKzRGPeT7xK3XkWRxyRqecifeCGfAaNiywn4LwG",
  "key37": "2QQxc6EXPhqEVLX9dFSGUwT2gTPeaqgCPvL9TMEjdSmjcFSw5tSLmXxA5eNQEd1AmDUuXnKcgvZcJkEZsomyJ8DT",
  "key38": "3mkmaYXHnv2SZPiHY6tZv3cBLv4JLjXB69AfnmYnaUDJtTANje7BKjgjQCnQNQEj3Fr8AV45QVMLA5T64V6DALC",
  "key39": "2J7i9kDxmZTVn7iprMVgkP7Arm567rvTqnajRHo1V2kUEgE7LriJxQTmJi7Dh8fqc7iTt4X5Z7DFi9s4L7hnW24U",
  "key40": "2MF3EAm5kPiVdcWPm3SVQYvDuZ9xENJeQDbLQPGBqRKa3k1uCVNXi33EQ3A2XazKhHTAMWfezi9Ceu6maMoNcWN1"
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
