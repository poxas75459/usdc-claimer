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
    "5CAFUBWEUFpCpa21T7rgakwqtKcqv1cJo9CSmDYc1QhvXygV6easpiNsDqhYme1ocPvPQz6PNtYvtKHCGosKDA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NsHUCtkyb6HCGqwTHJ26AMezSgsAZSfwzXLVFxnAFPv13bBA74dhYSpqesA4QgqNbjUZ2uox4jjhtmLWfHDwmPp",
  "key1": "66ytyHSUPLevQYt2bXuA2N5utsDfoGnWKr8fDqKiRWmM9fFkWB1kEakqyXnMYJ4j3GqjyzGDi8LMMHjutFgUoZv6",
  "key2": "NA4zVoocM6qwED5CoC98LGzr76Qsc1ZwYHr4zQh2eF2VshFnSSmjNPym8DkJXumfa5sYbchvjFhijENFJnWbSHU",
  "key3": "NpboWmAGemQ6zuD4oiXCnFg5T7jwxF6YHACzJRSuamtZyCFdXJYr31BM7cCiGGY9UZPSt1jvr1a3bLC6YiRWMdL",
  "key4": "466Edh9HupFnhFNPQPzy7JASd1a3KESiy2UgVYNr1prErcxYvjxacDrRDBLAq4Haax54XxRJbeZcaeb6iFmJxfgQ",
  "key5": "THaVcwTytW9Cy8E1V2DhqLs271KcyEW9hcRuhGw8U54PnN2pcU2ndJKLnWkSJovLWML4tLVrTJHu811ujmoPk64",
  "key6": "L3CskwJdESdgEac9btstMP56q1yq6hhGqvLNukeSj1q36YCWigpcvocHQfh7h6QwvQB5aChGQLzCpfmnjmCAYZ4",
  "key7": "3zJLWVwqJVtSZ8rVHkepFmadSF6ooA8RrEJQzqwamEswhfmnuWTr4Pt71YnJkyu78FqWLoG8aMKR5H7pS42avaPM",
  "key8": "35RV7ahoudwavrbfpBrBocscCvwdsHt6KVWLn9L6ZqxrjYfuNXmH9xbhpz9MY7T5P99NnjKHvFozBBVnZVpMy8Ew",
  "key9": "3t72XFUXyr4aKXVo8wohuncLdoSZQxWMeqthxn9MCRxSgVY3mWm8N38XNMH5XWacu2NBzCcdVqsPGU6zSUHf8W64",
  "key10": "4yntiGGDrJYUgGmrpHakHeFpTcLD5amf8JYEqAAfDQvpbGmC1Euv7LZAe1KrpRD5Nki3fsYXMzhseMkuLU4dDZTN",
  "key11": "2gU4mbW3Tq4dvG8xzawm8eKiNsmMtoZsEDnn5D95GmVrLBdJ4aPk3f9UtyQyB4uKKAeZtkv8DxmfWvBTHVB52gRi",
  "key12": "2dqShNfKXhAKG91dpKhhQFUVLMqWjSVxLMX5bmz1sz62KHwUqkRqG8HKCAfmwqdQKAFouiJbdwksfuzusdTECWmw",
  "key13": "5n7N4Bm2rZdBuP1VRDFdbLPewAMX43r3Fotwo5Py4u8q19poGVKyehkLGgUuh7dG8bWEFzqe9bodAQTdoVeLmQGW",
  "key14": "S91A6VfXiQS8XAAMYXBbN937XB4LNtHspn3HyGnkjFzM2m1RzfDU4erDcvheFWF4eGFZU86oL8U89doUoyvy5yA",
  "key15": "2aTTMnNBDVuNv4oH7uAfbAsGY4K6gG1ZmMVRuNmVaeeStszYosuMU5yysMLw44T1p3JNmuMaK9hs5akGEDnWKPVE",
  "key16": "4L647xJPrDU5qQL4wDvSTvyYUUx62GdckGpeFacTrjwKdutABapCMpVPQpt4pF8ZczER3vvJHrjJUW2MpBv6igcx",
  "key17": "5BT1ih1Hnnzoy6VZVa43sUqDTfhdsqjDqSxzShkpSFfsjeHioxk7HNjC51HE7gCGeWLNwXCKSjLjkZEJMsmNrviT",
  "key18": "3FF3nhsLid7mKp5D45S4bGQWcT9BgVUaCsB8ecbNUPhcJJB9pRMyNd52RcZ3sQ4FucnZyu7dF3VhtRZjEkDiPXmR",
  "key19": "2rJEGE66UgkKiZJ4dygrwSojPMeV1cWdvqRKXmFqxQjWeRYtijj61jS7NRV6HbgpLzVo7Gss6HHwS1Kc63wa9tkV",
  "key20": "49gSheef5wUCye6hgkV9FW77uUEx3ReVqfzc4qS7Chs1PwRynL73nxWnWKsuTy7Dmt61TEjdiR9Zbtnd3uLbxvrv",
  "key21": "3r4SznLyfWFJbHSH83P8sDk4mVRyq8VLz97iM9M99gfQNH2ZbTWhgJFqWwz8sAqu1XTwyCfuHqJivtwftaNS1eg2",
  "key22": "5TER9bu6ZQmQvHrAbLU3bsqb86yTvkFXDDcT5q2KALVHBtfsufcbH6aCrXEGxSdEit9DUjrfXgAdAQ1zHLrVRahC",
  "key23": "2HTU6gHaPJih7LN6ZYoY7sAwy2dQvt1TCDTsFFmciiZKw3pZBkZ5D3Pwk8m2YjTuqAHnbEcQTbghNayLivjHQoQw",
  "key24": "5FerVoQSykbZbYJhmvHsmtLdDh1G4Bh5WZm4AXtMm4GjrGkksPbQG6hXDDmZTXxZ7JxZpoCJB7cDd3agcwhjLY2E"
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
