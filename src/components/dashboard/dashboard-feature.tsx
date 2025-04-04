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
    "3nbpaU8XwysChRfgkG3gRABUu6ymLuaYn8urnTSVw3yFhbP2a5CMDqj4Apqe5HaivyL34YFvttHhxB1ndRa5WQUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8R1adjCtviH9zP338xQBUn1PsHxUHUrAbNMxAUtD9FWryTvqZK8sUJR6zyiRhMB16hkfnNqhpmnKL5sQnB1PFF7",
  "key1": "2GqSEynBdqjEW4YCFXSXayDzbByvxuR43Ar5ahU8P3rHNWjwsvJT4FbfreGgeH4LdfAR25xRcKfxB2DbejwGg9ae",
  "key2": "46rCUyX4vYeXZFcVapFrAfukTuaR8vJAmTkh2yTaNJanUo8Z1aYK9DVHR4WafrS8XUbvnHRb4zvyno9QsNFGiane",
  "key3": "NuQimkwRhAYLBm3Wy1H1jAiJCDEJsB97U1KobaqbkWw4G2ea294nBRNggubpDYqLtMZfDR9RDCxHVzeQswzUfJc",
  "key4": "h2RnAyrkAFNVPWfqToP37vuoThQhaZ2VBo5yE7kw442KYg1waU9RRvufz6X7z7m3HYcbbwaJRPGeo4WXcwk68iC",
  "key5": "5Vk2pPQGpuTj3VWEJ1vQVBSYqg5VT6DHYR1aQ1KeHEiUWEWmJMXGjJd9tXSG6b9UP4WWrnmhKdbpR2ea5Cf36Pnk",
  "key6": "2NL5XRZyHoUiB5LxqJH1UCZG3iMmkgBj7wCXnhnXyatJEq51wPhS9jDX7YGJLC3HzxFXXc7wnpzGVr9qicSAshNz",
  "key7": "4PpRUaRr4MG9Wtv1SGXgFrEe1ywesmcqatQcQt1KSo2jkq6PbgvpPqyq3hFLUq2Y5xNPV4MMH1QPhTNmZ9Jwe7cy",
  "key8": "56GoicS6T8Tzxr9wujLAmBKyDoS9m1oARecK31uy8AsrtZN8cxr8MmQ7JqKKL8eoJoyRJy76ja7xs2nL63FAwqoL",
  "key9": "3Gay2f62LoXC7WBdiar8zveZG6GLDqoV2Wpj3Gs7ma9HHxVHowy6vNjrr5PcAqzp6bPPUJnyoFUbS5hZLNTdHGYn",
  "key10": "3wwMoXvLdSoGMwkMAPFUt2cpcA34Mk2hvWcfEZ6kSATPotgL1G89RGS695WzYfWDuh9k7qcZTdg5VXdAg5ncS6ZR",
  "key11": "3TNKcnVjBzfmHY9ifzAssnwNb6hQ9ZURddaFyzyYUzkuCN3ss92dP8mFJ4RDqzG3umU2J6wjckTH4Ft9LbbjAW5B",
  "key12": "5jKT7CLBbtbPFYeMu6eF5M6LWAVA7vUgKojZMT8C6iosDFGvAB1p4P6eTCdH8wF3pRvpxNNcwy6XLsbfYPWNB8o9",
  "key13": "3RAnVrJJvpG9WA1uq8bVGYr5RSD9wwJN5BYyj49eVrjqmsGFttNG4we8UhrfYG3ybyL8fBFincbtkV42hsdqGb4h",
  "key14": "51eghW7J7HuqAieM7ZweYAhUNjGCozXKoJMtbk4XzXthXWevwHmXyjexa4bADRdU9aMACyQ6MfDbF3HchdGGk6XC",
  "key15": "3dSVp3Uh5Ex4mCNPeQhDCXBf3TDPkxYuWMTM7GCSC95xeznt8L8DWFHRNh3NvndpW73ZN3Rvyyc6ecervi989Fht",
  "key16": "2r2PkHmSpzo3yYLZq958rgzwwfDa6eVduDKau8bgg9PxeuFzryLxbCMXkEMxHNqU6nZGevuTc42FJzfD9mKcvfzS",
  "key17": "4ciWpgcoihftJbV5CUGaLKeh8TYGNuRgj8YZjBpe2PnYwz5KygpYa1DMujBgoKbspi5ZyutrW7Cbazguix6gRvcF",
  "key18": "5AZH4gDx7aHFx6bzouJywJFzUTXQGyRY1eGj4cHhkpgnuVr7eY2GUgFoF69hK8QENK4heLwfjNtGuoxeXtBDYJT4",
  "key19": "2gtwi8q9GkpqBpACfdX7ai8tjvrd9iRPa1FXscPfgzsXwQG4dwDFtrhq6cP4tCK85JethCmYwcUWY51wdk2NNbdP",
  "key20": "2HVdziXe9b4XeqCsRfTPtNVEfpz7NpsEGgowU4q5Hdj6TFvVUdABMQAM43tCkFg67eyMEVpVMtT2AhTEMWEyyoCP",
  "key21": "KyQLPzcpFVgRtgsaqiMvD8q3yNwprBfnWBj8Hzo5nrP5V3em7jQ7tkMDu7NaQrKB3vHyGNZkTpP9zqR3AdQzpHW",
  "key22": "5hWGq7sqdcDUBqrmc6fgn6z1Q5WFGkPwn99FbbhHdYF5tSoM2mUnpwLPA7u27bdxbWJvsXZaMvuTtCcL2ZrhnUTq",
  "key23": "5HwoybPtatMxefeq7dYFzCGak1ACcG5KwgBdLTQR25dy9a8dCuVWjLGFSAtK46hgtCVQkhTD46DAPnFDd7qoe7i",
  "key24": "2ShWh9462wa95FAokdnfZKgw6iZEpDPsMmnpip7Yrhr4LWUKaYFQBnHFcgE31ZXKz53jicK7hA95qhm1Es2jbiRN",
  "key25": "AbBdhQq9zrc3gaWDu2FcKpnh2JTHWcMp8SkpiyTrkDLXirNjLzszwPradn2EyF2oo7zRowtrMtm3XxCr5w2tyt5",
  "key26": "5nJdv35oATc9G5eXoZanBvjnVWbw3fAyzZX49dABK4sNhLK1SgrwShivnUKvc4y6G5NWCJEyD2UpEwSGx5865Bfz",
  "key27": "4v6dmZKFkWxTCpFZ9DkrVZ3cp2pZwPDyLyJmkGYsXcHrTqQ8Ka5S8U6uFnqyS2GTVi8in2kbFjh4xwBUoPQnxqic",
  "key28": "4uqRxoamUoicWA97ptJYGwYva1QuNagTfw5XukSn1a4jK68d9Me1xxV3exUAchLmxF2cno4kJsW6FBGWpZLHyYqL",
  "key29": "mdpyWydDe8eBrv3r7jYjD4WFvqFLHwTAnyLCKxBnkF6M6X14hRkNK1kHy4y5uXosrE7BvFhWZSBBSwsz7LXJzxu",
  "key30": "4Hu1X5Xt5Ck9ZRbsZbWPN6LQmWnZ8c4UDVZQmU4N7kKYCgKZn1894Q8t8LxhmxGKvujfzPVB2dcxkcHCx3f3ALCz",
  "key31": "23wMyAFVKNeY6kfA8uKvUW7ypWCBH9kpUesga1nUk7s4iFnz3b1aDu6N4khWN7n6E3xbiuHZXJsq3SJuWuZYtvyQ",
  "key32": "3UwkjFFyzXmf6LQ9T17zUsrRgs7ZGjLL9feEpd5FEJRRcDrXjg7J39aFPPUZc3Rj19F95LR2CQpLpQWTyacuGW2P"
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
