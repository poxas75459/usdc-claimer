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
    "5ygyydEFZSyGKFAoJoggBBsEowGKEBMBnRJzDSbJ1KrMyu13J99DTkWwWubd3xkWgsEYCAz37ULcoPiAUiqWMtdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uC6wQjXwkXVn4uJvSRGzbZFqnE592JAj7xZnHda4iWhSCXh3HoZje3TEHSw2M8by6nfhJgzqAMDMqSvjPbhDeh8",
  "key1": "5uZi1Mtck84gbj2oMiLjmEPQ79f9w5kd4uFxGKqd9AhLb8hjbmCY8vdXyQVf9HJAhLSZ3bgdEHw6Y4Hjhj4kDfNU",
  "key2": "2stRcF9QWJgHXcrT6YadCrDV21eDhUDR8f7yjdUtzzFa3bgeQVsMCy18zHaGJdA5RszSsB9ta6BrUkJQuHuiGZYj",
  "key3": "3Ttrn2ptt6GoLDv2cGpQrHy11pVhrMeKXqtWv2cap98cS4LyJZLSGtg1bQqb4a515Aco1YHxiCu1Rcrn6cikiJdK",
  "key4": "2XY1e4UG4B6Hh81nzwkyuu6YcCeQ3FhxwmHYrDrBYNmYTJTyEp1LM5RhveY8nuFestBuGrWCi1pEFxdno9jpTojf",
  "key5": "2ok1FQTDqBLZs12vTMLDfxT16yrsv32gAjSmexpCbmZ1B4MGHCQRnB2pHaozsTEqu4tiHMVwbzEtYgJh4kTsCWUX",
  "key6": "5HU75vc8zw5wLAyGKuKcXrKUm4XoL2VWDnqVxKvBan88bvwMuYTcphdiuMkfvpiKiZ2865wuWbhxDAx1a8LDjtqR",
  "key7": "3jcxXubEWKBD15aE5y2SwTVXrZpN1hqJBBrSVVumdidf1szThrTv3W9k3mf6qy65bafM9PqaifbygHbgFKssSYFL",
  "key8": "2qmXd41ButTxPaHHUyFbVzEdiEyq32ajWXrBFAiweLM8ccWxtGi3YXC3ZQi9yRBYr1Tirh8dXoeuRrPK3tqVDdtK",
  "key9": "2bRs1XCzDJpBqTbdmCyMgntjGF2F8tyZMbcSz55dSrKjcBBMcnC1m6ks7FF1q5yZzU3WjqhtrVJnk1nKHs6FUChU",
  "key10": "2gT59VY9h2dZFzB44WN635YNnQTaNFKMZCgBiWrb3ErroJVAgdi7R9D4oapstH2KwW5eZZg8Ge5CDDZGj21QS5jU",
  "key11": "5R9KwNdDkJUj3EyhaATtF7iaPbbEcCnRwMSYzUZtvDy7XuE2iGH2RCwd8BFmmMn8KbbLDX8ut9QV3XbzvFQWs5c3",
  "key12": "4dVK2YfYzbHAGiR3B9wFM2do8G9nBXL8RmUM4JepX4x8TG7nhysVv1khsdcrzni3WxCP8RS5xzJzEHRv7ZU9jgA9",
  "key13": "5MhUWge5PpCw9x6xTdE8cJSwQtGcU2imwPYXhyeux4ZAVoh4govf7Fdr1f3uqVw2bLqJaEDr4QaE2Pb3m22QBL9F",
  "key14": "3wwvcDY8DXtzBBExV4m4rDPg6xNjdGxqLp6f24of7ddGV9fhsbVxitqbCUrsqruN1Nc8J6qz25UnhAqhNrG2PqgX",
  "key15": "4h1o5o3kG7maphqhnZEvEBZoG24Axwrr2pVfDQV1g1SpNmXAJ39d2H8shEdAdkjan9fXuqxpX1jmb6tuDJHfrrtY",
  "key16": "2R79T1JSmJ76dfYACZj9UBmPPtGb5TmZjTST9tmQjpbLMErfiY9RpwHuirBzVKUZjPF62axAszATn3rCNvxLbVxb",
  "key17": "4Z89SZiBsSXai3J9C2Nr2C5XAPcjRNGjtDs8g5N7RyY9KdVfYaBVqh84cnxsrrQTRNTKDHm2jAk9FDvWXMkPSZaK",
  "key18": "2LMAb2225RQEsabhxun1ncEH2bMfU2ejEyEHPzwNiiMH6kJHrkoTk8f5M9ZzjQKf4sJs2C2GtqY4ss4zh9FzF7Qf",
  "key19": "4gRi7apr8nr5nVCmYjS8G4hiWLZYgp189Nz8bJ5bvNEXChKsNxUpkSHaV7j72uXRSjR24mXTHrTXTLtxrkSPeVY8",
  "key20": "26RP7ou2DdYav8azMHXXhdbxoWFh1sUKkBSseg33CkYobva5dotB7Q5CqYK9r8ZiHeso2BzeBGGzSNcyy2Uwkxw9",
  "key21": "3M4Qj4A54rYJQvdznBCvVErmYJ4Us1ECrGrnm9fTbhPPPXx7ep6da3dvG2U9Q4jYMzR2ec8hSnHvsVw6iQ5qXVzZ",
  "key22": "28i1MD3XJxQAsvi4PWHEfFiUEnAYx8SyB1pxovadopqL2WyMQ6znBSb5GKQATzgmdgvdksBTdB4Pknt3iinmsVXM",
  "key23": "5Z8wVJhcR3L2oqG8T3TiKc3kEp8KrdgY75ciEUgHNCe6253ZwPSYEJ2NvXvJHFfcHz9yH9em83Qc4ZmxwT3kZyqR",
  "key24": "5tBkgpmVwtE86bSAwJMhBi2tooD52UimivLVV7opHBy9RfYJtVXbHGv4Jn8zzC4HckCHXqCKRDpCdDQvKAdwxWAt",
  "key25": "4Y22euefEtDYNN3T9WQzkKpDuip9xTwroE8ytpp2nepMwfiYLzKZj7mYqWKhj8GqgofY5xM3FXCsj9rKBhkMUT8D",
  "key26": "3sgQnJffonSh5TpmevnZQPdtMBjY7cQwwkYopLUDpUpQF6JcihVQs8RhGuLUst364Z1dGVhiqFsXpvff6NtL9g29",
  "key27": "3Mfz5PuJajFqJKtPGZ6XxjF52UbcGeY7Fx8sLPnBtQzh6MZPgMi9baPTGxkaFDZE5HNXpUDqmRJmx8LrKAVQRcMr",
  "key28": "4oWLzuKRhC6apLZm9ecW5hGj6K99Cr95Mzk4Ko4aZS567Ujg9dX1d4CCWToNvRHXa1zbKqQdYSHWkwKqL3xNFwxs",
  "key29": "2y6UbA42eKDUDj96C5sR1n5cseLdw57Mx8uHgteZxLyw7ybMnTyf2fWiJ1A7V9S81bEcGQWg5YgUuiUcZ1QbGVvE",
  "key30": "3GuNbRVrxEevvdz5LDdUhwPEAQUt9uKToA8fL2SVfXoAxLo68nDwjQr82uiBdMBiDp2DGMv8ABUruuViGZ44Dp1P",
  "key31": "W2WkAcAnEhHmPzDzqchXJDytN4yUxHjBcYePKFhYgpEhuBzf6H3n4XgQj12DDwK5s5AXCYyqZgaFWTNLsQHW82k",
  "key32": "3SFpJJzMEt5mrbta1ybFACbgeqZEif2mK2FgqoaR9k4hAMrt3mc5yYEHPHspe4LWZRTYKmKWnTt9DTJTtaGLeqZJ",
  "key33": "4VZW3JrTrKbpvUECMPRXiSj7QV1zP1xw6P9SwP2wPSMEfx2os1CEoZuC9w9wk88kcVVL5cP8Byp5NoaWe6Hx5XpV"
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
