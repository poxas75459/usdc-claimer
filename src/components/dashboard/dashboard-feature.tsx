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
    "3eKAdmUwhmfP5ncrAqvXC9z1XYEW7b33P8edhTNTtbK1psedje835iNThwHr77ZSxmjG8WFxVQ7rkYySZ7Pkcp4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GG6LAiKNCV1JFxen3yX3tJKwKzrUDd9bQAKSkYdJDm6sPWEDbEmiRWwSvjGCGLmcHkfVSbBeE8HX4GgvPWYfCiT",
  "key1": "Gqnfo5KKU6oBmgdhWv5dLSgp1jYSLLpwqQY6PSC7zb4ekLkQHcmPKFJDNeL4BgR4pVaSApcPpMRWEwX5mM3aLxk",
  "key2": "5VLvdnfqjaCp2FubWdPq5jNDJSyXsojJbXEZEcH5Nrd14hNCQNm2xWG5wRuLX2YN2kfD5WN1X8RTqv4F8i2qUzma",
  "key3": "to9X33mVUp43jdHvSvmboeW15pm9zVKCLGCJz8BuQEgLqJjvkpKgUiDJrAUPSa8A9Yu5QwjaJDvpuQBC1sDY32T",
  "key4": "5fykXVe4pQswnt5EZiRBCjwquh3xtwdyHZjaQEYDuGtxZHHdDFoCVmdhHTaztUYsQrxmhn5n8YPjZMvW5L69b5k7",
  "key5": "kDWvhiWAfLzn7z1cb1Mq4hspz2ZPspCKtdDK4PPUABsXdMc17nDEMKcgCVKNFKRnCrg98dqAAHja6RFQRQae3EC",
  "key6": "3FGvqTF5nn2XFLgS26c1HScSMa4DSsJgXLeBUpMm8rwAABPDBL8phjkWQ9HW58gEKBSSQbotMUQwFPPYx3SHwSU1",
  "key7": "CbA4XAE55sTD2R3yBLWrowQtqJoLuceKHGpWSceRACgfUfRg45W2TFW33a36xe1eawGssjp1AEcgr9KsNrNsxjz",
  "key8": "2CrvyPbM7qF4kDw7PJWAj6uhKoe7whEgkjVH7AwQJgiBAY319gbCDypWdwrEbNwMkKUCamsLqKq1MPhmFgbvmdnq",
  "key9": "54KowJQMbJDNUNQGV5X2cFmhHwV1EsQhuwQ63wwhAyXJiz9UJVT3bDRtGFoA2v8SwHzJW5jzTv9jApyuRPhfJmJP",
  "key10": "4ahLjhZcqRswohAQoDqhxVqooFJ86WfQ5ChucYLhSobKHbnym2L7E5mZX2N7tGHWE2P3fTgUwxpbBfLfNmqX7mpY",
  "key11": "33vfbnZNucG9dTt25rfTbdwiEtuPmwyxrLx89jtbp9ZYm4vPsNSB7sUaPxcob61bbmbteRSj56YfbYWbids8qpy1",
  "key12": "5GdJwq3ixqcJWsGtL18J349oasSazYxCarW8XozpbvVmzhnN76Ehz871AQZnvHzgoDkGAzcW4hvMvPytG2pmTsER",
  "key13": "xhNjg7mho3acQAcprjqNdRA3AGsoYmUk17zw9Jz3Kwzrx25rY9frvfQrJSubzj1mVLyGdChT7nVTRdFGsnWkX65",
  "key14": "2ZXV9xfxkjEBvtA5BF54qwUJcrZvyu1jUmGAAh2uypy6z1PQTjyH1pgXmrfkiMXLmWVeYmCcf7N1MPLMkGRed4xk",
  "key15": "4LjAPDQTcpXxfUn2VfrnJ71UYczpMvjm7a7AbasxfkcuhTKkhyjAPr94BeoBWtY37HTfTLwcmFebmTE5m2Njvb6p",
  "key16": "4PHCjDxDvYE8GUjahkawnXmHsGBC3Mfz5HN4eg7hyPbbsmeEfnj1Hsk61dmYkmbs8YhZPS3dJVHdrr5ZKJ7fqjzE",
  "key17": "2doXSDAGNaRj4A7NvdQCrfvHhCfRZ4CFKWEqpskBA5BjJAZmxicnmuvJZyqpuCnMZH6AAySjEWhmYFBTPMf4jEP",
  "key18": "v5qaiACDjJMeeFTP7qGRw39DvmpM3914gUECHEdRStUYMgup7tKhgypAUZcXXqb7V9PC32CRd7cTsa6uAUJxEHe",
  "key19": "5kEqvRRAXshRco9Fv3SaiRLSYdrFepDnGTbdHoCefQvP2jwcmyrQWszBGRofJVuHQMbABjcXUS1vCjtcC7BAcfQ6",
  "key20": "2sczddtNMRoVhFg5HZBThDKofLHoPAJrJjMgKrKorCdUmHU6uWuvJ5Qxaj7VwVHQHxBRdhCHFjksP5WpthrTkKzG",
  "key21": "2U3WeTtRT5AzLUcz1MX1XWxWe2JVwqBNtLPQnEuweqr2fMhX3Fn8jRJgepvrZ2ZKU9wEKkgAp8SfwogHkwi6bd7N",
  "key22": "3AsoCAoejJVHwkFLWYZLeFEiF8SUj1p8q583nJVmmtrZBdCvYtkJWSaccvTyACBUasbgxKafRKNpShr9zwRw97ak",
  "key23": "21yMpevZ2hFcQw74eBkWzE7raZaaD8Kw6odyYPX1JyMcLUGoYRdjedCWMGK4NHHz9pahvccgAdxz7qahRcsYUFpJ",
  "key24": "57h1mvRHHD2D6MgXGs87rkTMqWY6bFk9br6pu8Z2zEVscFzymUDdZk283sWnDukUYNUQqWEk1iRRx5VPn37i76Xi",
  "key25": "4LFr5bwxSXAbmx4b5AciT1jR5Vh3JZMXy1bKSVUrG1pzbjPL1mDZpJE4U9UaZUBAQkQNBFb7VPFB8WmY3jDwCCpH",
  "key26": "41wkZnVnpj86gNMJdKMJFwbvhZiN84zRb2SqscChUuDpgYUxCUmpTd9xGHe7vryvxtQiFJT6Cppz6Nm5CbsciTe4",
  "key27": "5qv1gjsacyGBQLrGnZRKt3wYP6bUnhDA1PszkqNK14smt9kQRjzZSHNNJZ2QAMRNoE1nj8FixqPYDGmbiaNw8H3c",
  "key28": "2VYXHA9TWB6bmnVqWwSYV1MvHm9UwZeRMDFBkaCWPz11D868RPVWB7Yk5BADMFVaZjPqVG7H13sP4EtiR8UYSakG",
  "key29": "N3TR3JmKGoDz4mWU8JXeQD1NpYZsmD7KagtCvDukw48GiFNz37ZHNXNCnFNHXLRFE17DjSF456Tt6U9QHfZ8Np6",
  "key30": "5mKjZLcC2Zhoq6KxxZv3bdRuqNkVxiq5q4XwGM4SuXytSpbkCXkCMxw29RimbAqG21hCpaVSdGPmt3Uq63Fx1DQy"
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
