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
    "2px2yFtzJZYm6j3RzcRNoNQGyTPv8tgRtxCzLNnDTrns6PwtYwqe2W2DSriwjmuJdeoRwTTscei1MNapkWdKzuFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WyzSLLteZrKbKhf6zDW5wuAkABuXUgcQ4UdBSfXhUrAFGUTJAK8cc362HzqcgSNiVbBvzPDixd2rRjTJpbYeDWJ",
  "key1": "24nY7cGRuroHGQYpsthUr1C5966fXnXMJqPTLeLEFXSjJRc9MLVazWhHqxY6iakkhA27Us1w1Z5h2RR78t2qyAKL",
  "key2": "svREmSLHBhCfCyRMuA3Q2fcig6fhDZpmKQsA6iTtpc7XRneaf1vsaxKiPrkxivStxuD29HgWdjGkyTxuX7emX7o",
  "key3": "5mrxDRwX7SDPQxEJUHS8UXgvEUghXNYm2CHHNHQUXs2LZvpPUPedSkJJKXnrmVj5pHVMZJsQ4PbvSnfp9pw43ov3",
  "key4": "3BXnjMn3KXtFaq5qm8S68XLBSDSBfwm9KZWLEqM3kwP28h2t3A2DXZroa43VziWxwJSqLdYRMAzTCBLK2RttpKoR",
  "key5": "5gRSYzq49NEiXQM2d41sYzcGXJbT51PXmypbW7XQcMWkSPjkj6hjUNAMmx3RBj83sgBb6PDFYdbrfN9gg9FQco9W",
  "key6": "ntjAniUGHhEFSyttibN2iESDWFSnxKoPLmzaBSaGsMKq7d9GSpGAaMcT2yWyaAYwXbRXZBXngMYZ2mzGDatg3mN",
  "key7": "3RBdwWphz1mxwTEADTKuRLscjsNaJB7PiXuYtQvHMx66ijmiZZLJRC3ov1gaeJwTAWeAT1MPv5rRkgUNVm4TLHzF",
  "key8": "4983bx6xtTY2fu4SGnZMBxbKMd168wL7tnMft5ghgJDhpb6puxd2dfWJ5zKrYxdA6XDfJjx7LCWMY6WGpYnDixPa",
  "key9": "3BrL6Q9p1VfyKDyE8fsfpTrPZsY1jTmAwZ8d3g5pJDZWnwif9HKp2KBiS3oTBiB3QKpWAcLAgApmZJcuVKqfKpqB",
  "key10": "2TB51qneyMWMJpUahjqtuUb9JDTcHMaJVEqNSkcCJ1igVGLa7mYumAvYQH2iU8GyG7svpLTkPwDgbjnW1uX1z3Lh",
  "key11": "5WnsZNUKMDqNLUUSmcuQV1Ed3KduVgTToogdcPeWX2wTpTmTx4xUTkQwgGKzMdVYnd1eETVKpVyoFC6dQDccvVKL",
  "key12": "27WboCUt847MNNVJvcQJEGVHxywvjR5XHQk4FrdiGmYPaZcbHyuWyopc65ys7Xq3SEiwv7mWSMmWrggDMaSQiqrt",
  "key13": "5MeUmaunW8skTtDVgAzyHN6Fw71X5SHt5pHwvbmH8pD4WMGuh15LoHDCPVPk7gbFFwB73X92ce8qvEBxTQrMdJp4",
  "key14": "2Rjpznkx8J6z9QgAY3Tge5Tk1fe56Hux3qJJEzMfExwPmaVTvP6T9pEiqN1McvPhe5xQLp3LzsNY8TSob5CwwVUo",
  "key15": "38uaa39hXbTMpszM64u5zg4yhGgGdoghy9mir8fHTnH2aGuGHVdYudrnD1fiSNLFFKr4Z37UuJiPtebyfksHcXEP",
  "key16": "2tyWQq5xUTV675fZd6Bmb7yD3bpBkQFr8yrgumMrN77ghv9fSaCW1sajveWBZotHM1KafdCWCXNMXVT2tXEwxFDw",
  "key17": "263rboVMnmMWXYhTXdyixm4E176WEg1ypXD9De4cmXBh9teNFz9TtHtAY7J4DVEMow1awU5Wsa6KMyXP3BomBwpj",
  "key18": "2UHpCDnYPVniYDX4cThgJCX1D5P5PR9GqugMWo6kwG1WsY9BKmakPViuKbT7yBTJkEUEzpjCLBSfUF6bozjhHXby",
  "key19": "4ucmy24GT9Rfz7RfXz8r5XCDwKrSw3kpP2ozN1c1yvA3WmTqKdYbgvztVTTPL4eHZ3JUdJsAHQpiiHxZcYJZ2RAi",
  "key20": "5zr9CeqiRHUNWJ45sdDv9YGo33hW6Nmrgsn3db5roybzfXmzM2zP5gcGqyjLKjgULzniK3B3PMaJkMRUyHpSf4Ut",
  "key21": "66ZbWt4i6uuUEKdfkyChcRVef6PeyY79xD8saCQmyMvcTTwqmdo3qKg4WEnWgcXozVxfQ5UmE61TSGqxGHZAT59i",
  "key22": "2Xgc4xzycb5NW6CoKndm6y6QVQuVeEGmdETof8218wCSDx3BxbwkwqJnvwHDs2Gb1rjiuJRJb58rGG1sgojCzAFE",
  "key23": "3MehRbVNqFSaiFAQsgiY6UAuDWpDv5KFSp2JfzfyKxDKJRmXkVa6n3nhH2GUWn2YKh6EQq4xkrB3zWq8M7ZqcmdE",
  "key24": "3ddKageu7PuQV1Jd1EgRX21HaTjW7gqPJ62MyWVWRmZG1UQvUm1AfSAFw4CewhotoQE3VqyjYMoYnCm13T274tX",
  "key25": "5ypjmviDpEGcZypW4Ksj2a2b6WKiDvfwnkRyGMxUKArdZJfboPzTAdsLqvyxhWXEHm6vxfvGGsg2FEDyZuU14Hdq",
  "key26": "SMzu93xWDTuiPaeg7NFhShUznGdP7CEx8v7tcMnFyzALQHcr5goTRibsLWWUeanwm1HkBL4p9wdmBf2Yqyae3UH",
  "key27": "5DVdW29DcHi17NKeKLCgXaj7GEKZXJRaAUisXf6v1PtbMT9QtbyMZWkAejEkNa48Mvw84ZHqgFsjtyGRz1ve1h5x",
  "key28": "3DarASBiNQvcDfqdarvffQCgMxZFdUGb6EYYx8gdoU8Vv8ZEMBqjPurAqzMGpd6ATy2YDsbXokjS88iWwYydkGmH",
  "key29": "5QT7NVxvHWNGak4yGR6WNnxNVf8hUBPf8CcqsNTF3xvsWUyKRZpmUeri5XEN7heboUaYaEqxgbhg7JDaS1uam1mi",
  "key30": "5qpd1hTSwguzNbsLeR1ZYd6HycfRKjhTMdPzpgW6MAGLpJwPkiwn4M8nPRfTwKAVP78JG7K1tLqq12vFRezXwopC"
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
