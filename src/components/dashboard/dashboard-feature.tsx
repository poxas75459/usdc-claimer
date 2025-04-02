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
    "3BSGPXZwBzQc6d2oLcr96XxWVr9jT2Rzwcd78X8VkHTZzEKBDH4oCxZnP63fKSxSy9AsFu2W1EK18kbkouoHYoPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pSNM2thTXYgyeLmGRN7Xa6TpQBM2vRSB877QAgKDDq62dpPfEYk2j8PVubiXsxpeCviTfnpzLUbsM77j5mmN62j",
  "key1": "5Cv6nJ85pREgoWxkTqX5B9K4Y7MFerA8zPRXoHa7ossXfRhj45rfjPPU8H2nRfuQGDd374EEGsai1qJp5NKnzoDG",
  "key2": "SB2bnbwvJfTj6JjNXttrB5kf7NTUvj7FxLXxdqLTS1uY1Si4mTwuabapBdJxbSdNJeiPWFTEu14R7e3wREg5cSz",
  "key3": "5KBawvzNGGZP9TGF4A3HXHtiRicRCJYysYKtkAhKJq5wWSKc8CEwibpr4tR3xwHFmu3xSpfCr9HKfgkWX8YiMzyu",
  "key4": "WPQiUWTTmtFiT25UktUDx8NBBW5zjoikNNN9ohYcLfQZ4oiFMXHkjb8ShCbuMSe4Sjxw6aiyGJmZQLRqSKT7Ywq",
  "key5": "5jTmsgccFBUfxpcNYY4WeLen6mYYjFMniwqGunojwKAUSSKe8mhJDFzAN2B31T3R8V5Lc9esER1X7eYZZQKGmjRL",
  "key6": "LaCFHD13zsx8TEA55Az2WyiLtKi9zz9dnzZtb8KHgSmWXx1cJjq5we6iBS9us6Kzrrt3x1QrX6LYVetrZ5V1MMu",
  "key7": "27u4jwySFkUsD1XMctKBpJZpVN5hhGJCb8ZD2w36kArETiJJj4fsbomtnL9qmCkUZbDnmiRqvRM5H75QLQkHLyDX",
  "key8": "43LjpeBYpkXzLsZnXby1NM7W5PRe6k8ok3nCAJ3tVF5CBGSPAMVBNiHgTSoJgeWJa1NhAaWCRc2Qux5pgTKSPMXs",
  "key9": "5MUzKH4r6HEPNQkRRjRAKBmwBzXTrbipLGbbF6g153ndZpNpVmXaBpdgxtSNkeT6S9zQ6MP7YHKdLnLDbVaqohkC",
  "key10": "yktYsAjHY6MetZFNz7tgKhMjiFeEFwGm3Bw7keSaYu41pNPkUqXkU6hdps4xBxN8qFnZpdRVmyiWHL69LLQvstB",
  "key11": "3APux1zovBcB9LHn51ZDaFSXkwfHJEddK5dGmiYhxWvMSVSK82ECc9L2jP7UQC6ggscDnJmkb35pzqnMNHtgb6FL",
  "key12": "5Fsir8Ch6B4hkM8LdfD3ytwbmGzbbRwk6fFukgzumoZsyj3oo3thXV3paTRBnBKMjQvcPdSd4V8vdB1Qjegk778X",
  "key13": "2dK1Y5PJUmeBk3889m3zkKhxDxwwbtAHmm2iEKMNo8k6XYxLwV5RvfiZxTkod8fQuPT56BedJVY1qzKHxH3iyQCc",
  "key14": "2u1V4Cm66YMbVmHkDCv5x6p3MXbWiJA9RrSn8ivzqGkZ92UwvBFdxg81QCfgNjtPwJ2aNYWH48Kr4n3eshbJjTRQ",
  "key15": "2qxhLTbHJ3z5SjVD8peczw3xZhBDdKDqBN5pwgauBfLiVm9NFxUumXmPcwMGzV3FocniJ8UG1biV7Yg8LGYiov31",
  "key16": "5T7e8NKucuGZ4NDUf4qudqR2CNh5jTwAdx7HFTLgrFndWzvNBAWRZLDHLiKh4jhqJ1k3q7yTuWQZ8ZEh7Y7c6mTZ",
  "key17": "6bcNuGNcp6oXrJNNUiDPhmakguACZKeF1BDqijkE2e5HFiHtKbFspLtMXsyETzMWDnmN8oz3h3nrrYUJUox5BVz",
  "key18": "55GinXvD9JWYGz19C6gdqRdxPuP5PhYaDFZBR4MyGj6anSjm4Frv5G6eUafQp8xpbmN9xGGcyDTS2YaZUrN2WPM",
  "key19": "5SpZLfBdmKk7eXKpddbizPNHzCSriKJEee1DVcZhYvKtkkrpwSKdRuKjByEvjr5ix5BGc6wzHQQSkadJZ1DiJsnH",
  "key20": "CiiXYjD4xofv8RckRnoVkxsxXcSMCPWxCU4CvpMJ9pxLeBg9bW4CkgQugsP1TPWJ3r4yseJTTgduLeogwqWQ5G4",
  "key21": "2JuSSqopxsaXTwwttFhqBEQCtLkzBZcb6Czy26P6Ac9fKtmTMxbfUgvDkkvo5CzuAGPxtPj1QJGv3PuNiPgw7zXV",
  "key22": "btJBMr3kYgTkonqdH2WoBpiCLuB5jmHpW4hDAwkiugKbD1uxZfyKkKD8Swx4Q6p5yVV6mo74TYzc35UUACEhsAJ",
  "key23": "3v8aHfzwJ8TeCuvhsapZxF7RQRnHfFe6xgBed8ULi7RoXyvJAnc6LpeVTHizzvnsdm5giej8zVWzuFXyE2QLKHnM",
  "key24": "eS38RLZ1yScPNV2rHWyE1sCAJmLXha9dvZgrkZK9jFv1zmRRHuTQ5qYyZUiMtQLFTvDVccurDZwRdWumfuffnAR",
  "key25": "3CzkGx9rgZoG7gKRj9puHxtznUKyHYGH8wCSB3CaXYQRKyY2TdReuNMm3v5KzY5QVt4pWp3zjt1rEaeUaYdqNaHR",
  "key26": "k64jh3i6MVocvNa55zJHttxGbP1XisJXZgQvfkbUagWDtJ2pfQp6C3GtGEWupTUNEGyiqZCKSU3Poh2a9x78jaq",
  "key27": "3YmcJJ5rFDfiSymkK1MHisB7ZqMuksVhcrxcYMB6gdR9JUcmRP5sb2cVDD2Kf5YLMoPEcgxenipT1WB7bU6n2zki",
  "key28": "S4jPYMb1fhgoTiwe3KhFT2ytSxYjFmmpFBR3CUpitTpKv2WDvqGk7tmZaZqSjuL4xoBnfVfcY92m2Qa898ZqXCj",
  "key29": "3ZVK8RmAzD9Vm9YnzRLdoGhC2nFMKaAM6Fx2kHkqCqaukBHMvWpiDeTMqmhxgFvKHrEAYAPFhtec2toep2cPjdLm",
  "key30": "4ssiME6pXwLV3vap7ugAXZHwzZBdKjGjhSPHjxCQr9CGU5gVMNq2SjWGQi7TYDPgxHSZEBezrZvpxGpBSgx9fnZX",
  "key31": "5M1ZxEpUEJjLYPG7JXirszGMSuGNXQjVDeszvqPATd4Ry5Try87S79JUukjZRubXcKvN5qRLweroLQWuBo4uHaZP",
  "key32": "kg85EbGM469xi56Ld5SDkogrje5qmjygN2TDe7J8W8kV87rCRUyw7mKEhKCUgtM8VuRqf4XXzmvuu4Bs3tWpLaH",
  "key33": "5qrYckaYBzsmuWiXvSPxj6Wmf7AgbFaq79pnPLqv7xrFCqrHrkgZv2M8yMa7pE3DN6MeWbRmD4HCiARKSKM3QoKn",
  "key34": "2Dfbv2SMwXXtj7B7Ce7Zd9cR7PKpNLeSerLncNpEda82vHgxLUonGxdgDJjzbA8QHeUbD6cDkYAjGvNbTQsUsoWy",
  "key35": "5L7hdSEQJisJcSJLTVKpHU5kp62mg2UgDWsQLecsHmdRkrfBAARdtXVCnmLWsan9BeeyMwSJd3Y9rCWdfzwxZbW8",
  "key36": "4hEePSPN8oCCTTKAtMfaq94fKGnXZARky3GvuSh3Yu8B3fVXnvqSTBBgjhdB4fi8ETsCc57RdjdFsj3ZdQUR7nS"
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
