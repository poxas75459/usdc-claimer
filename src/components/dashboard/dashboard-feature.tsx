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
    "5KnQf7q5dRPh1dfGnBoH9rCTKFqk32P8mX8fJZMbKQnkFW9GpfAqEGb7NKG8tV8WdtZAN9m8RSgc6Qmjx1M5vcU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cp7pHDYTbE8aQvLi4nX1emHqJuUcrn4nWZyU2EQPoQgzHpxzoQMkbcyn7XPUU4Fe84JfUo6UWid8PWwSr3FDR6e",
  "key1": "2QtLa7t4McLDMW9ZKNnqDYwqF96sqGj9tzmAHGkcEW65dNk6zo2GZrjScQP1YTJHReFVVGbsLugmjKQpHzug5uJ8",
  "key2": "2YFHQuaxKdUVY5fpLhzm12a6JCvXPV4U1ixdmRpAS3vBkdauuMgGdC35Z6LAzqE1MdbKQG2kK2J8rYsogZCAfcBX",
  "key3": "2Fjot1rb6C3TeDTfuoX67csyzdKQLnvS6SpsciuAXtFdf6ANW8kTCroxNJfaCRLpr3vrVs4HCfg4TPeSTfX4fPc1",
  "key4": "SHzBC8iwFDsaMvJHJHwr6kMz7hB7QFjsgKoh4mat6zUtTXv31BsgqBNLXsLSPQevekmGrTDZdPQ4dk9SxGf7hyY",
  "key5": "3yvgEjCxTB8tZsnMFyMJBTKKBJ28BbCx8xJqu1kPPZ8c2KJeBeBTXjTRcL9PCuksQTT73YrMwEDtBXZcXmh3aMiH",
  "key6": "5qgHpSGJetwJqZbwjfidbuMVJp87aD32j8mr7nMZ3zvUHVhJrKjdis6bvHuQeukpxwqGpLmRWiRL8ZpVm2TMmqxU",
  "key7": "W7AkXo7Exgx9qZm96qkjtsq8mgqo8M1ufDAekW2taenLMqoiJWWqJ7Pk78KzmZcdQCL1SY36suhjXXLY2MTCRn1",
  "key8": "5vTARwjfWf9cLWJoPKG1kMGdnYHpYwDzMVQGxiyujy2VzTFuRKusQjfrwCHZ68qczoYkkPXD5rhSZ3LpuzzFiej8",
  "key9": "47ahQcfAWGdm8DWDnfERz8xfFpDdpV64A27fQ7qPr1C2WJtqvErARsQJDBf2CZb3m4hD3ELPudcoChWJnVoVQPPq",
  "key10": "1vUfUXd2Kq7kh5BfaX6R6CoFUozU6BcMcajm2iVSYs3xtSN3dT6rvbnefvwYLetBsy3M5jLwwBWiLwu64oqfCJE",
  "key11": "51aGh6N1vwqwLqBogrxHcYaMgtY3B947MUzmMEVEYcvqsSM8rBZMxDWU3Mmd7TtNsqKvtUW6o52QChUsHzLwisYm",
  "key12": "331SepnMzRRFdSb6XtuiNUnarLPqyUc61nrXAT1TcizjKz1n8nLVpj7gGhKkcvAButVxGJUuU4L2zzr6fhHpEEW8",
  "key13": "6MJotAUXpPnhvbfhdydQTsh3aDgFof4ZVwXMHNtPD9dbmJ5io773tPNcXnUzjRVmZQzrE7TgwRTQq2m3hA7socW",
  "key14": "48w9YddstegfosZmWEtGfJd8j1wzunKoL8RDNZr5br978J5cjuTYmtDswYi6kvh6d5gHKogSkhq5mQb6gjTu3Lae",
  "key15": "5Mfg5DRhuip6h2buSCYisD9iuf1Y4Gjady3s9yfu4opKtq5H1Lf1VWDwS1dHaYriXMuj14DjvVTocSyT17QoSJjN",
  "key16": "3Y7dMA3kDigmabFdj1WMK2JLE7pccxDWNYtdRJXg7HiZLLKjZ8995ZDoEQ4dqTnN8bgZWgcWVyNMPQ9fpAfEWz4M",
  "key17": "4S97iULx32Kr4y681y7VgTTT1XjDjuRy6Buu9N3dJ5Kme7aNE5GkkmKJJxcdVuHjfhDGuYnfunRj7sGC1fCjjU1y",
  "key18": "2bhyYUrn5Xy3giFrnHVXW71LyyCqnv2aKQVnW82dk4h9E19ATVrhcZX2Fbpmnp5rdGgRxwANAkk9vUZQpGMMQGts",
  "key19": "5eQy3AKXNaVWLMfhcdUCbB6bmCei9ooP5RpRQh1CxF8zyrfy9vHz6SkMMcpApbyz6q751s26UrALnW6HWi6Te1CS",
  "key20": "3HJ5FZVwykTDBepxpwd4zHKdHyL8gGAtiHDVywZMLo1Ue4Nhe8kncpDb3Pwm8R1Xy7uD1iiW3TtRNy2MK3VAht1y",
  "key21": "24YUvUtjA8yEuRArifp7hc4a9y1oTyJFi7XbCpkjwL4WdKcVhp7GEWvGxe5tnEybQDcsXjLL4mvhod6nbPGjEASS",
  "key22": "2qPPwsqvsKxCjZNjXeSn6TQxy1LYLTwjsomM5zyCGu3QSp3uWjsNWC91bjNv4ypm2BXYQW4zq9dFwaXBrvwuXDQv",
  "key23": "45x21puy3sVcPDqeMLrVTc2Yg8S3dL7ZzgcdfBjH9N9jbaoFQMDJsAU1WYVyH5d3fusRrd3tzvzCRnLYUAi7VvpB",
  "key24": "2jYvFaWmotwro7mH8ZpSESEwhKxvRyj3ruaWMpawdamdM5G13oegTsNFKAHgkiLnCVa9quy8MKHMuQSdCckxcJyz",
  "key25": "5QNZyE71w6NVNByPDQpYKeppqJBTd7oYvtZykeC8oJf4rTwNBx7ae23p2QeLMy9Va7xCj1aLy2Wwj6x2mGqPXyxb",
  "key26": "5sTmrezB5tvF3maXqbaa97qyysPUioyuitsqq9b74kArXTTYGxY36QFpxYnGdMic9RA9a3KUjjhKrkHs8jTcpxV1",
  "key27": "513YTRc6BfvXVqKSY6Tw1ZKfkdiefym6HaCLhYHfRTatzBbkWCnXptkApYhdmyuZieND4ytSgzAegn3Z18BGmCH",
  "key28": "2z5AFe9x8S3G4CchBzwLPxhwm25Rrhcm6oKpPD3XNdecfTfayGXAgJBhLAUSamKrC2FAjKjQd25jVHe2eNK5mckd",
  "key29": "2a7h7EDMhNDNXZvXMyD8GGU6JswKQqV8JKnJQ9rjvd2xQ2HpJBiDEfqK8g9oUvjay8QByxDeKsAS4cNGTVXfAYC7",
  "key30": "mkmgS7uo99qoyAVmwyQp6B2bVMD7m1e2SJcVtjmAAoEqj8Aitz294JHTiCTiGRCPEqp5NnrfsGWsa5npVZcBzUN",
  "key31": "3BApp9cvvj7hfETpm9mCssoYQFeRtjPfqg5p9GyymJ2BMV34M8thaiDk5p63Hp53dN7JwRSNAjUpebVknG2UutxR",
  "key32": "3U14YrSjZSmCLrqrmRZWebddLp7W2jz9f8Vkwdoj3FpbTytyaDUUDiRF6kTufATHWutsRWzTn3ZHvFdeaBEyK2CG",
  "key33": "5aryro2huYZzbiAtfHMgkdVxpknNudfRw3WRb7ttrpdMruFn8fsCQZQBcUe5F9L6gteZJvJtP8TUtarjDqiJ3maa",
  "key34": "4Q33B1HxqLck6zJZMA5E7ke6Ps8BTjdWmymj5fnpiGpfLjFQQdczVkhJbEkk1gFtdYx4huSPRXQKSmAJtisZJ8q5",
  "key35": "2YAPJWBhgtNkDvWfLENGZzvCvoyBBU8H5kK1ozuAZa1Ng1fGXxFxMMJCAbKCSCKnmXjXjZzkNmTmthrhwi59suxA",
  "key36": "1FqFD1Kf79rrTZzr4EqxvZFZK8oa9fBSzvLB2diZpRbzfV6JVJSNrhhbKRgfYSo2VbdKsGWVx3K5DyXqELA3h21"
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
