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
    "5YMrTP2C2WbYm3D7ZDhme1JujEqxVMhEoaG3BYwgaUwHyiRv18EyJ5WeWrr6zSAft8VciswPmmKWLZJre44fV4mA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j2Sui9eVwfvpABvNQd9SQVb1ZukrC8F1A68P7RDTeddRpgorf1JcPQBr63ziaXQyNrnBsMMGKZkr6dC1jhH7dBG",
  "key1": "4X7wBRsqynwZfi4AtcwCpiRtgCbT6NnmG1eVmJ2apoiTX2xdGz4abPK3B6EuLmQuL6USUZUb3Vjiax8jUdBccpNd",
  "key2": "58bZ3Qn4CDBdHw7Cb3w1ZevfQZAfRAxUKpyXZHZgGHMXzS62MuNvAjEKk87xDgJJzYwfVBieUJSA3CgxvJTppYxd",
  "key3": "5Au2BfuPA6mKLboqo4HBJvtKHRp1hjrQHA7Bu8Za4p6uWzcSWojL96ZC7DPr1LpTUMGMJfFBhUELf7t9uD9BT3pM",
  "key4": "u8tJGT71joNLLcxn36YSJB9mkkd2f6Ly6S1Cugr2NDptdpHXLVWvciffDz72gwFcNsVLGwzQca4g7KVw6KfLp66",
  "key5": "3uRJASu72RqrDdpaxpkHf8PEAzR2SxN2fYSgYdUjkW26mgjSwZHAJrrsC38fWUTYcuqkg2GDvTJiKdU62Ge9vrDm",
  "key6": "KrRwtprAubjCMrK9C8es7UAoA7XqauQ6vUNFRNv7ZEDfjmf1VxvUVwRaaQiory92kibvmZ3CUqN9BWRfPXiD25f",
  "key7": "5NkkXLYzf3pE96M61aJHR7xTj66sL4Ww7Wi1DHK5e827q9bqSQgb8WwqvzHGgVoUtJi7LUjrY5ngYy5zx9jZoLxk",
  "key8": "589touyYAzgQ5xMpELDEWnnNEGdY5z1on6GtYra9uNAhWiaojK9aJkfWNu3sGTDMMFoXst4GwiFoi1x6UAkY8xY2",
  "key9": "48ToAUkNtJWLgjZmrxUFMstcsDuQKRxDtvnSJ7nuid2nnvHmuvyXhberhJhvYYbHhP4P7oNvsNHHfMSRQD7QpGwC",
  "key10": "5sS6ayKh8vh7A3T16Mq16wHXd5ZP6gybjstvhFXEHPLMA5ksVhGvM2fpKTXBeup5EPQSZgyzMSz4ScL5kPM3ZHQH",
  "key11": "4K7DvM6MqJveEU8s4fiZodVQeixLtJ9FEzAhEFs7A7hWJSGKrMoyJjvzDKTu6Zbz4jkUSNeBdvNwXmFWLGqrqed7",
  "key12": "561cCj9d7tZeQpbavi6yhGtaeFTjwbznc4BaxUa2miPj8u8m6Mc6y3bUjrwQH78TXEPUwR8XshULpgT56u44PJEj",
  "key13": "2fDrb4ABCb1vGbtizeY4ProSAFLBExcZkDXCi3SFq9Z5CsRaw4M6U852WE5q6s91LH9uUijATqGa7keyg9xCdEjX",
  "key14": "5iF2upGJ9XQRka6qzsdJpyuwrQNCorF3pZXPB2cD79tCu22VLV8M2CSrzvgs4ZdtVXtPiCe2RRhBmRoGK7iTCPT9",
  "key15": "54GRqvYKhPLeMHt745bPG4v5cg9tAjV6sudq95gGdAZCSTw3Uh7AmKxWQhvNuH9v27cp45SNAvKSCtWTjtmJ1KbR",
  "key16": "zEnE13Q2M7iEgYcC4Pj54eFdMEXrjeqEjRXx52fC5NeP8G7LxX12KcARb7s79tjuSvMbyYFPEgvGR5sDZ9QpLjQ",
  "key17": "4EHWPrQK5tBSQixXX1UmNPTZcvBdRfBq1hY9PBao8ThxHgrYmzGZvCsWnRULRoi3WJ6xPbtpzucN7SGj79UHQ8vo",
  "key18": "4onbYvvtizkXFqZ1thUkeih7KBTi3zAQVCbx2bp4vhXranNUatXLub8N18Rs5eDBP7fTQLXd6toaCRqaT2ir55TT",
  "key19": "rKjNnb8CVCzibfaQd9G8HYB1MngPBzmyr11ic9hffr5i4daV63fUEp4z3ve2yz3VMSCWo2qaP1KCnLey9gzLB1v",
  "key20": "2jmD1XrgGjtBrY6RXo695vAh7A8eVvSwKxEnnwD5y2WfngZbe1fAAT7C3J9UwtYKxCh9YjEp1ntVq1aGFFSEqJeH",
  "key21": "KfYoAnvHY6Tk78tPXX1QHZnHFske5zGTAPNWkYyJ9S6ByhVgzWWbQabZz3BXrG8XhCiHkmTEavYCUQFv7osYWfG",
  "key22": "2qTPGniWtNTrgiwpFQgPkCKantmYCXPb1q5UscfK3e271SGtXEYS7xXACvf8bBy9cSgv3cJsfPVCZQZ8uTf2Hfgx",
  "key23": "FDCkaMihpSEFAateiyPkj911etxY7MgUUt55rwLtMqnW5kLiJRCqZWTwVQNt5gztRpBeHFDQeUVzZzNBVnSAQ4G",
  "key24": "57iG8nhy91uNzt5Uwea3ViiFcUWfTFcT2YpBphnvQud4QzHrq7WGmcKksZAWPaGTyoFGA8YEB3YF7ysJ2mLjNRZg",
  "key25": "4icnkc3vMcSUkp9XLJbXMj3Lrmrky45eA6hSivUERYGQYQTzDNLTAdJYFLotuinWgGtmCkMTgcSpBLmFBVo6WkpF",
  "key26": "aG6GbumQbUrbiBMYHLLnywsF6x464D2dZzV6dGWvSEey6NvKwjM24joAwHEFUjmUomCYS4dfN4yaeSEYLLk1nd8"
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
