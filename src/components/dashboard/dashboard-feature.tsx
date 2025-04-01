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
    "2a4sVjNnTSXDUNg4mHWyUxJbLVtwqMcSmDKyS3vZpdztPNUDFHZwxAmZrmNBYiyHipuLkVedxcoYmik1qNiBxdJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d2SKnc2ehrshpFq1GX16JWEkJRe5WCY1kvvqtBxYEaR5cW2UEmdPzVpWRdBizVdHJTbTEDzZ1jrPd7G6bKYTf2r",
  "key1": "2qeejs7v4szzYLTgurXSukMQRkTqrJtgAQvQLkH8k8WKE1Dq7hCMLuAiP5ekCsqMNym3h2qV4xQveyohZb7mn2Gv",
  "key2": "5F9K3LowuTJUZsKo9KhyCmALdkNiAxbM8tRHGDjHD9PwMH7uhNzL11Pk55YCcpM53FKu5M6rPdJVtkbC8K5LyePJ",
  "key3": "45igtc35YQwexXNwdY8n8WXy7nc3bPRNJuZdjFgEJ9V7onEeg3yKkdFNx3G9s1CyKWmgZzRNSxW9JTFwLtNttzXz",
  "key4": "4n37H65AzdnMxkqZzPjPgAu9nmdX8tGWD9Y8cyTBst3mXKRbsSt3KvJ1fqB8gF8MkSqvD3ahu6eBJhstRLLWE1J7",
  "key5": "53v5tkLyZ1R1gKfXNdJPWyKHoTxmEjkP797Lv7BJ4KqhCWfvNmZAKDjRiAToB87yGE3pWgLCKTrkTABBqWjyYd44",
  "key6": "kVH4qhyDrkZ748Jbv9BmrEq7X7pxd7WdSkZkqoPKrUfJzST82YcV1BtqXmffAd1jjLZYg5a9B6FxCJ6WRkYe9yR",
  "key7": "455tDbgcNicXWCKZdTkxo6sbMz3ZvDFshEgLcmAjNZKQpNomiu2og6dTu8mckKZYaHeB9sc6MB3uKd8poZoyQzwz",
  "key8": "2zWCBpQihuuSfGPmhxtdg21DJwGDtBLCeF9J5Js4Q4nHM3nekwJTEkMvyETevrHNZaj1xTDCYy921GtNNPd4JRZF",
  "key9": "4mem4KeFx2DyeEee3GFRejuxnYDX72xLqRFRmHYaJKTDjEv7YdNXhmVixkxsoYnEJghKqHD1DeYW6vUTWSzvURbs",
  "key10": "2u7pCd2JdnChB36wMvZX69vuCxy4gHLN5aQnwaaDBP8LehfPdx1wgjGruBri6oG9C8mZuvjnUteXahnPwMeZg1tV",
  "key11": "64QQAKH9bZeodLbkjLbyCCf69SPcvp7YrTJGySEYZMvoBhkpi4JNqiUqynpCcuqnNbJrFEgckfhLFXyFBzEn2D83",
  "key12": "3ukALQxGyqu3snrAQWXbFzHbX4od8tSwHL3TFHuV4xc79JvvUiEB6dkPTN9FUCeE8c1g6g2w9WNnARwqhfHX2ziv",
  "key13": "4Tgc7HjgV5efZJoFerffZmhSTDSsbDTR4TtDeGFxy5ivBmHocxTkbsJ7WVxHkmp3tSTcFFDhUs4iGPfMtgiaY8L2",
  "key14": "Cuy1wpL6ANRMh7z2r1ZmnrwPdxpxGUB492DddUa7bFgfFazFbRdfWtMQ5NL5cY7Fdq6PTLtYMQkLzBCoAcR8tc5",
  "key15": "3bkEfSqx4fET6imrJYnjMr6D6K7Lip7tgrmpKKSh3tm9qbCw2AhCZ4qRRuL9KZEN1Db52bKt2HRkpAo6NTjoiPRV",
  "key16": "B9Vvh3XwXVChXV6ejaD6dkkcLhU7NuKrujW6RUiXpS88ML9nJaMwsMDECGQeNxHrGwHojXJ3N1q4yxvHjkzdZWt",
  "key17": "5YxYJ9J5GeDpC7x4MqaR5caEnyQJB9LcgPhQxuCRRHJtHHWBxYEQRHYH32kQXqNiGiAaheypTnGXdBxK8ThQXGZX",
  "key18": "FJuVZ9oHGzyqyRAAXzH9Q9XW3H99CyqUS31fE63NwR1jxLpKHJui1hiRwS89rDasWmy5KhrmB3SrefaVZGzx7ft",
  "key19": "3tZqn68icjZkUXzUW9QxAG5o5KSbBG6L3JG8xKaBZX6kHyHJy2FikvxicadkoyPWdzBwJQaa4anzm7pukzorcEmf",
  "key20": "9Rmzt3rU7WdLoShBtkVJ1MifX9CLg3EGUx8i5wocdK8SifsEeLGHtR8FHPSah1nZbcoQQEoaV2NfHEgdMKJkMG5",
  "key21": "5W68mqDWFyUx4UHADgNiqWvMjJ7kgoLxVTLS18DwEXVmDM89iJcZAij5fsuJp6G5UVkzzJGh8WqUyVuwPLFBpwEB",
  "key22": "4dH6eniAs2yNEHtCErhprJhChLd8SJipfngheh68UctfeUMiMpxzByoepfAcPSoYnBjBn6qSjbQkuv79ykEeAWZp",
  "key23": "62WdmE8MZRaDYKyr7BxJZvhKsHpR4UVDbzSkgYYvJbCcwvg3V69tzv6TZhdMf9Hj7Wd9pi7eysd9z9gR4i5AabHu",
  "key24": "3ELKftBtk9uLYEq1vBh9F1Y1F6Z15P3uf1HbPj1kxG6bB9rF7hSPCYmsdQKj6wWco8sTqVRnwzH7tCN44oHq9Q7W",
  "key25": "4sEQo8rKPenUu1CN2nc1N9hJuPhhRhJdj7ny6TJA5QaR668iSmXregaBHyPoDUQcoNHZMwoGk7SnwxZhjcpvE8tt",
  "key26": "2iKJ3b5Fyf8nm8bDgTyLEFNEBdoQMjq2P1RCBaUEd1hNxriR5Qhtq131fsgBQCWnd3hYnKuX9FaNp8iRTrZo7Gnp",
  "key27": "54Pdo8w8VUShDUM11e7bmZzz6JgrjWregANpAnMGMB3eM1Rx5Hwuz7MWFCbL88WqWYBG51MykmPRUVG79MFtDEw3",
  "key28": "5QAj6iLo2DNzBUcAdtVvpj6xZma76kUCKyV7nfeJ1oJZq75dYimC1QJv8JWCcxbZa5tMpBnXDvLkuMGTdevyaJ4Y",
  "key29": "43WcSHNAZUcmrQ2zx86htnZ6GH8B1P6TNaHGTgdonibWHwFg8hXxs3szSaFeTb9rBKyYvCzDwnaeC1u5bA9c2i6P",
  "key30": "59QGNV7dwrZG7Yo6QrrHMNWHpMxzXPWngFgHJMix1v9zFQhsNJCyqojgdNKt8PhS5JgdTtFFG8VSQ3eJg1nhPd3j",
  "key31": "2vBjvmsW6EJW13rDLuT3w5Xmc17c8bpKZC8bKoiDxVUyw6gm7uhfkCcupo6cioKvq3wFC4kzG9kzEnXq3aC1QCD1"
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
