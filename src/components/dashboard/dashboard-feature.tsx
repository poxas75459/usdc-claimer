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
    "2PKxxrgJ2n15xZtj1M2GKQWQeTUN2d2cqof7rgkW4thaPZP57xPnv5aeqqMZRrczfUSLErtBJhPdgoUkhwsP3dk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VaghpkWF4ndwWgYm1ti9rssPA1jxHX4Swik7VdB7DNSvf2FbnVbdxaZCbSkFMf7ZApsTf7t9P9AWMerbtDUGHQL",
  "key1": "4wVbo5vBrkZJ6MDKt5YPcRSaGaEKrdDF5dDuJiBWtS4tUJZazbBSwQB3BMPwT93CDshHSmStdcjWcTekQK16Szxf",
  "key2": "3tHCypsJC2qviJseTbtn5otpYFx1SAws4ikzz64zo3coL9R2uMk32sNGJNndthQvCvS4huFcXdL9E3PpfGMPmGdv",
  "key3": "j9Xcp7BUNjTbGFXJ2Qz9FcBcF5WZkKwbiF3Jk5ykJ4dNEnu7inJ9ag6yYQ5fath1guKcc32QtMtuqR9JUahzpfW",
  "key4": "2xZNAnoGLjxfjoujZ6mE5Grp3C5go8yv1zq9Hu4iMWYDAkya72Kjt5sMnVsGh8ayzKu1DzXMp5qxuC3VyBNyV5C3",
  "key5": "aWbfgyXHttnLA7UA7tNPJg33k6t83TU2ndH8CQud8CBbDY4PWFMgL8ygJySqESvMuhLkmKHUgSjZeCYNjufM2N5",
  "key6": "2egFExnNG62P7KfwTSsKkSaD1CBiftC8gTrTRr1vjxRvovCZar3WfaVD5aR7DYjxPQqu8E1kihmekCx74fqwyoVd",
  "key7": "4mA1Ud3ASLzBy9phRjdwRaQmy5HXTjsQYu9SKa3FtrMCMGE8ZJDZVGaUX5H3A8GxLoq2DRHZusTVLVUhMxipdw7G",
  "key8": "2KmgbVNtmtDWEArzkZqVLPH3J3LW29wmR5UPiTQAnUxpkpox64razFrc1GbtL64QfzLvw8DYt3pHqmckqSegoB7t",
  "key9": "3dADCaF3uwSdPgoP9wEkAdmLkrPVLfhVKKbJC1WChKRsb7djcXXKLbwSQ2SWjKyGhT8JeuQViHoMyoGFB3hwnrXa",
  "key10": "4pPYT6ubnSRQfTfH9uacbF3P8g6JxsjjmpE41VjbvEmomveaSVWTq1qa4S4JqJ4Wu4CCQmiGMXG8A4Xingf8tMEp",
  "key11": "5VvhYZaXErgqWrDUbqM5gkUQhqj3FLznP14ZsPCxJorCnwohsVevM1AbADQ7uWrRAyLdnykQj5bJLRDLdEy7wE7n",
  "key12": "3ynTEHDQ39mPs5U4P27reWZ9xT2NobMbHy1qjUAkxC8MHLxGw7fZRET8evHU83NCbmbsBdS3i1NB4rDqVv7Z5z58",
  "key13": "5GesTvmPxhttdstF3SrZcp39Xropf5KCHaMZPhuinsp17jTbfuBftTGNcbPFP5FDJxxGShVWYQHbkGd8mvMfq6W5",
  "key14": "5nB4SXMqFJoLRwcYUg2pKLrZr8zTyUAq3MqNai8xaNsGiQ6C3y8BannrozY2VSvtNVSNooSeLspkgJzvn7AFa5Qq",
  "key15": "3CjpCimZpL1zUu9nVp8ossd2SzF7cHoGWuEU4nzqc6aRSkT8TQRsxekdMhUHE7Gf5inZsy7e9XF9HngMkdFfJQs4",
  "key16": "5Pv7S1qJtYBJV9crnUcQ7shStVevjZx4qrgDHyMVTjGSF6b6Z5yM7kyPrSMLNrWYrgbExYDVuo72b8M9wHtkwzHB",
  "key17": "5P6Dn9ypH6LDMzTVHzKez2WDzJ9qPjq43YjUX22gUT49UNXQVmYsg27o7y1pFJDTWEaHoyNSn9GmUqTr3MSZiRhE",
  "key18": "5bAWNtriV7X9uP3epdXKXuevYpnLgnAkLxvLBmZJZod5w84iLtSRkjSNYzibpvpFMJTAdWZZWB1Mc65Gst3a7hjG",
  "key19": "2wzAE4ajEJUhDYAyPjtwaAyoshFf3LqX8cv8yb3Vz9zcjTB7ySHuZTC85R6xYhcfarrwowxMYbgati8trJQTHX5F",
  "key20": "3yd4cqSZ1y62Mm2Ty1PKHmGestWXodjGbH8AUBqCt8UtTHCfodhGBXm5SNd5N18PRhkrG2togugqLBhtF7Su2FFc",
  "key21": "3DtUJV3sSZR5miAL1uLvHAyp3A2hGnef8nezhCVNY8wQpAHj2dH6Bd8XaSbtMzvhfLqSD2fngAh15MRsTsYSsaKT",
  "key22": "5jtGVreGGGjMAtNdMaobYkz3cSSaAYjpYoABhfTzmHqL255XFZd6Mz8bsEPbTKLtjqqnqb7RZvbCRBjbq5MLwsTV",
  "key23": "5ad9J5MamqDtx1QZ297f6icoTPWeJ1t3UQkFKEK1tpY51iJ2dLqEMJYAu6jCNnxG8xFtxPQLhJNqoNagzJnM76iY",
  "key24": "4XnW4coGt5XEMYaFxPHR5ou8a1jRmdY8aZ5jKv5kM6febnErd1P5j2sinmaPssHF1tYJUAbYWh9H67epvrzGDdpo",
  "key25": "2rzsWL6pEYm6yRLjnniuXbMsyntc6zf53EsUs6o6WhdQVyhfQTmB7RBU1892rs7Qgasd7MeayTcbT7RHpTdiM5Z1",
  "key26": "3Sdp2s8KYehvYTYpbEkCF3BM8jAyBEqFZHdT9G9CgUcwkctBwYniqLZg5kajQB6ijZf3FeUBckAnK4a9qSw3zvMb",
  "key27": "5sar8Zy2T7MFSW9BjxFmwCABm7p8CzmSQwxcHYeFZJLSy7kGTnVjQSfpgCGW81wYQLgaXfTynYSmTVM8uA9kAe1g",
  "key28": "5kso79pzXJcQZ7Kg7bs7Zh6ezs89LbzZ6MyeSiaLqBFkEBQJeoUYwmKkzvwQohqdt4qnBcJDpCjnJUMs5TSy7pfV",
  "key29": "3CSpUe5vNvnEnzXMkj4JRKhtqAhQFjD3s5mrhqAwtKAscDJwpD4MXRaYaxTEcmJGrPXPdYMMnZaoaaBCqPqR6hvZ",
  "key30": "LWCKop164QdBuES8bwkdh9NsJw6RfUh5KfZRsErCuQe3udDWf7dPF8HntmExJLEzGdnDdANcNfRzPWspvyGaxzp",
  "key31": "2tLY6Dp7tJ5BFEGorKaLJfpxxq3mhvxJWrw2e4kMJtnBaT25BFqZR8dmAQ6sQLMHRS1M7of5mdyikubTs36UgLom",
  "key32": "2Bb7QmZDCfGZG52n1yZzQaxr2L1o8PtjKPPZHGWZJ8PhecPV81TT6tM8sN9mdLe1PZw7suDA8dZWK1e34N6QBEbr",
  "key33": "4HhwyVhEmxK4m36fJxtW4ct6dsAmeJrg3QDBzPBkx7VZPJuSyBsKtZSjQFiD3Qyx2aBU12QYR51eqfJKgTaiB2qw",
  "key34": "ySuQxMzggz124DE9vpFuBAyN6PiftzrBbgJZu6wqv2UwXkgownBSSHYcBomDiDbx1SJqywQcg7sAF9DwRcm1bFu"
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
