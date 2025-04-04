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
    "5wQqoZYmuy5eVztL1W4WqK8RdUmJmkLR7CyozYo3gvvXsxwe1LWN487jCEi9bysiyVBnJuZma4zEw7Z41ZaYaJjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ZGJqy5m3v8xmA98D4QQcscAKR5P8mUmCbYNE2iZ2iQkvKK8Lha4tCq7feDhwW6NqrfKYL5nmBR7n4sv2FgXKvH",
  "key1": "3P1LjRV4skoAS3Y8U8doZH4VZ2UybdV8bBXoj58RcAAwUyBgyMRJhq434n2Y7kw3rgdU1DAToviFNLHAM6a2kkoY",
  "key2": "4dzww4op17pdt1S8iW3tnbrtNwXtHNWieqAAZyjLMcqDqw6P5V72xSQK9P3XFvvZGrbe3WBmqDvd1zShXqLJhgHT",
  "key3": "5XxNKbWj1LwsVFhs33okQhXKthLdZBeq7mSEwkJ78BoKMxeJ8SMb8fHeH9DXe7wRYQrcvUaL5efbMXbMrxqSqh16",
  "key4": "3eqnWhCLaS32d2nRtcXU2psa7nbZqA1BcKuTfVKsV5wBkQqtE15uHBo3eCcdnifCNisH4XThDFDuC3t34cMcvJkQ",
  "key5": "5ec7oU6zJ9xEcVoRVaFA8hYjzqdiujpG5NSu3JWi3sokwpAWeXJWhxHtmKbAqaQUPEkoNZ622MK6Y1MthBBcq9B8",
  "key6": "Jn4ShJWi7Qv4WA6seHnMg9RkDYer1iwVWgZw9Vimhp5xrKLRdZMp2mdZab2KBoCyvZgaRQGX1BjtpzrdmUbCC41",
  "key7": "67k3WB2BQhzGneaeTvEiL1zwSHU6N9iLoCVgeDNHv5z5a1eJkBGjH7ZoGX1gTR8FdKevTwvs6cF3tQ8nzr6A5CCu",
  "key8": "2wn1qy8DWi1HhfkFgT3FxFXN3ks9PiZXpB9qXWwp5f4StGkGzseFJw7mXx7pJdQrAALRAiuuSWhiyAU6oYC1io1",
  "key9": "2UeNrbUUatiL4G1RvsY2S1EeayAN4ZmX5DMiCzFvQpuARUm8AXHF69Q2Q1JKBbzkddteWY7pGSKKvcjpBcHbXTyZ",
  "key10": "45pwgogeftxLq1gPVCrqjZHmmUwWSmagjeJZ2mme4z4QHrq57z1SxU6JCYp9HAz92HBSDNMQaoEjK29x4DYsoKCX",
  "key11": "iChZoyfMBbJ2HjW11j33RLznzDLim2rb2PvU2PLpm9MwWVUU3Td717x42XCb3nEpzvd9YbM159tk7k7JY9x2tV8",
  "key12": "3qsoq25XUCkkJaJtEqR8fcP948fhU4xEYawGR2WR8Rf6Jo47Zx6YXtZBoaQqzfcNNQeXQmQo1WvKzU3MguSzBMML",
  "key13": "64CsR9d3H8acRDxNrwFKZaa2VSZRiG3NSoP6EiSvV7JQgFR6ddeygTmUTf7yAohs7fAMd5UYPAgqxD82FF6tVkn6",
  "key14": "2GgRqKnyrcJVjQmxyL4HPFVZPiVxfSoUAXuxrj9buRtqzDMNx4ugthDvEWS7AboViXjDc8YJm9FdDzYY6bvEmGTM",
  "key15": "4xbDFcFb4cS3W21HiBRL4u9pXjXeJbkfkB73A3Atumky4dchvSpq67QpxhfAvf4gZtphYNrstyeDf7wU6ZN7JN1V",
  "key16": "5hT93LDMSQaNJm8MdPUTeBqPJDRm53YG44LxEMV4ZM5NqpyjTVVQy5eebDf4EqfRQwrHN5u5YzCSKKtyyZn3MKCA",
  "key17": "XXZEcYiCfdem8QaLBKRBJRZxaFV8CXt67z3FRgcTz1oqoHt5QJrWo3iPkku5h7KhaFQ6zYHDJMqRwyQiAwYF1sr",
  "key18": "VRhSJPx39ghBpzpgqxLdmVcypedUh5iujjVAhwaUWUKTe8pZW5pkH14NbDCb9v7Gg7uL7yLUgTM48MPevksC65c",
  "key19": "4rH7Y2Sj8qeNXiU4Cqwb8qEev4bMeY3GhKtZYf7BtcRHU1LiWGe7r7A5yMK1MrBFkEGiGqFPmsJ97T11c9SyDEae",
  "key20": "kTi8WRMTKHq9KtQoL8tencKPWYhhHUiEoLuw84CMoWsdWdPm1EK4cSE6y4oMRwVCkWrMgcz6bCjbA4kyiiDSifV",
  "key21": "R3q4fB3cwZsBLVvQ2B493rkXSb7jpAHz7yCmE9mQoaEkCcQEBHu3TzwjWBxNM5HPxx6aGQYjxajeGyYN1XJUJRQ",
  "key22": "4DZ82w3pbxh7DeGJ38iBHFG4DTozHP4iRRsZfoESzTUChPVQVjeqnazCRSWz35zDjVf3tLMBBxH8927Srk3xQpQx",
  "key23": "4U2bDfnwniNavqhf7Df7uJfguk8Zv1hhH72yJxhhoG3mvSCgcXUzhhZXErqUywjxeUhSB1Z4TNfLb6GoU3L7iCUb",
  "key24": "3vEXZ4EvvPJeMqWnwXvGFn4S6JdvUxPqpYECUHrtJ5zWk6N9j7cuuzCCHqvpKpFJ8SuWR56iBEyvnW7yAx32e3GX",
  "key25": "5WtyLQWZEBZERGnVC33ANvewJoUDbhoWQPRHRfojvUwAHMHB2zQrdUQXkNRM9r1RmJohTeErSug4enknfPk6yR3B",
  "key26": "2e4rGNhQ68M8AsYSNgf19DfMfsGxFWY8aCvD7wf18BQZVvwZooWaUrJQiTHjpomum3mhdogGZqLkmANeXyWJQJ7v",
  "key27": "9tuBdeEitNVhVNk35TzSA4fPqBJR5QTqZySy2xwd42fXdxvo7en6RTBStcntrc1PQJi2YnjPgYmDeT7n2m957CV",
  "key28": "2MDcAZfz6UVvZh8zSc3B3s7vXh3Vc27zkq9kQ6pVW8GbK3geubb3SrsMQuAoEbNuZti7qnmm5gh4w1cTsLwzuSYi",
  "key29": "4XVU4bFuXKTWLo5qSQW22ydshbK7uYQoM2W4SSDD1unPjibdXvo91YwNSYLMy1bmNpqhwRu5yCN8hjVe7q7rDAHY",
  "key30": "2MvkXoSjiSUJcyoHJmDnkuNQ4CyfeUJoqscAJY7HCAxwvkrts1zeZfcEqVyqgntqJqLePTVDxGPg8am1HKNqaBcU"
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
