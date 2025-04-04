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
    "4rL4QrqPenoCFCm2VvbRaK1CZY7y2rxiV8G7HBywjGeCBwjgXQzphCFPZymJnsYmQCnogaPUf1dLtqhfeLyEph94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44rtub5evgapRECvnQnGxW4Gj2aDk6rot1ShPYwrKvehwK95CPiN4HZ8LcLLCVTsHtMjDwzZxyYygswhT9MNCDpA",
  "key1": "2sbDu893fBkCcbEUMJ33vDcdpaW3AYXSZ5tVsYbM3JJN7E7fniSn8WrB1hFZcsc7AZGbCu1oWHKN6cHYGZmyXshJ",
  "key2": "4NbXETB73rf529g1gGH2SjjtUrDUNG9cYQvGSPKe1yjznoauMpjZ9T2pcucJpXEMNwLmG7GrnpoKBpT75HEBtpGG",
  "key3": "3KnseMFgSRGnUdX9Y1oZShvsaDGffvzo5XMicZhomhFtdMTtjixM6j7CG7dRD4xdFQiuaakowNPGYndDUH4szFmE",
  "key4": "576RXjNi5aadiPUvvqu9xDRwKsREyUQ7ENtrb31pgKL9jTcf52AE67BbBMeZ9QHpMengZ1KzT2h9Paby24cWqCy3",
  "key5": "64SWwyrqNXSYEFk2rLCQWCjAYFpEXbCHTmvenupHJafxSaV5GyMz6yJY4URCLj1Fn24gUB1Cohy9vHsnKXn861i",
  "key6": "Nq5A3hYcsQKMMexPAdKTMhdHaWZ5Du3ns2av23fdLHZGDkqWQJZXx99Q1Er3zdJgpk4fpFDhACBpSGmTKB7yy1A",
  "key7": "urTYPtainycSvpCr692EMrPNce6jt9gVtCrNNnbJwMzcNEW8yb8zFw1ZYGLUXAguxZXrXu2hbBJ5VExtfQG7qHa",
  "key8": "uMGFFboTVuW7W81gpxLPsdK1b3zMZPzp2jiFZyQ5Y9tv8v4HGGk8jpn235h9aPxXqf3FaTpZTYDCiqGvmk8TVxp",
  "key9": "uSdFCa5UBZRwQFmZ2j5P8UNoASkzXiQfeH9QvR9XA4Kguoj3VYdqb2d4t1XW8ywmEuQVzrFgbuDxmp1sgHzvDcq",
  "key10": "3WC11AHvRU6uQjnRXu1v6AB9iaARHL7Rya12ByEj1rBPRFHm382UuwA4CUnT8LXsypx8C2h7Z9Xaphj9vn5zJX7R",
  "key11": "2rCLQktiv7CZ9eGZ3iNVBwUayeyfWZy7AWdFPAiS6urxhdTPxaYZQHHcd6R4XEMTPo82XHEfbMEonWunZDmPXSN5",
  "key12": "5jYyfBDxTKmpigiZUwC3hqECjhLsmgDu5q4vkD7ShebDPSnMEtxxiCczrBtG9kDwgMoWNWeHN3kvCsWH2tj7f6fa",
  "key13": "3t9aTZJb99ukJXZALDSZyPqYQt2geSBf6KdHUo78Ymrmsni3mYKRzTb7r1oTWLGSeJkexKLjtzj2cq9VcPkvX4p3",
  "key14": "3VPTngPVjiseXgR1qbNzjAPgLQVWc7UVHWdD2x5mtdJ6j7jMVC3WnjGWpoznCNtj1wqGjYLQR5vwGEfNDpw4HVDE",
  "key15": "3YLrUPA2tAK2pnoccy2maDkvACG1M9QX66tk9WizptpoqKSqky74QsqJXFqGqXVjDKJvSYYuiwdfoXu7LYxGQ8t1",
  "key16": "3KcvtwaQSxSHteV5hgiGvMnfkjjBp2bdNKEp1F7p7wQBUEsJkYamawXnYuN8AHGuodmestW72fGXC1pD6YfvaSLt",
  "key17": "5BHNPardupCm7UzCo7Bixqx3EZai17wTLQwZTc87T14hSdGmrXfbNZSRbyKX6EJWW5C8YXxc1nqXaBeopXRV9EMm",
  "key18": "2GryefAyCbNnZniaUFTjsa3uAymTTsceBGyGSpLXYpYiQTvh6JLxAay9GA38Mso45HUehbuiDcZ6z5eMsWdRuuZV",
  "key19": "4w6AZJmeHK1rXGrQCATRkRG9kz3oGMqyc3xYx31jkmcTncrHBDksxhPUDvBjx69mku879phx2GY5XrW1hEtATH6M",
  "key20": "57u8cDckxNB8pK9iSjj5MLrvCd6uDvDrNwoJBq9PvDFE6w13TsZVQ8eMhLvqyGexb7gPoZ5PBphNSESQZF2pD5iL",
  "key21": "AnrA7kzrap7dm5vBxQmwVs6CURTzkdtgov6CcsdsouQGAKzqNfEHn4xeBC3eWnwcuw117SfWcsrj2tXNGetSaH8",
  "key22": "3NGMSPgMQHJ5myUHQgpw478oNbR1mA7Fq1Jw9JGEEn6KNzQ4X3DGX5wkKtGMmBddGsg7zXNi643wpNvxsV8o3LdJ",
  "key23": "4XJpVzpYRuYLBNJC5M3eJ4i1G5vehTXmBNrs437dWFTggjH4LTPC4jw8TPvkYnyMy1VohpJawFCCsVmaLyqQRqti",
  "key24": "5oK9mkjKSKnLuHHGVPCP5nGfcqfJFMgMKx8Wwcymj3TczNRHqfTQkVSVXkaWc6gsvMHfFT1xjyYxqoaDxPsmNtkX",
  "key25": "32YeTgd61LKuuBWC442xoAg5fEMmEF87aZdk9VkpmY2UqDuP2TYvr9jA725yCVKqtzhzj7RksurG6kR5Y1HEj62H",
  "key26": "3dKk994SyHC5UUrigsEjK69xeXTffrFhXBoN9mSBZRxviuyQb8RFBBTjCS9e3sqJypEeMtSS22fvLwPjSjLcgb3V",
  "key27": "38DZTqYfLz1zFCQSuwNJUdLvfLw7YxkHFDpd27gKDPghA6KR1EzA3Qyr56HBQWCe9qqzxUAXLegPtzv6vZ1FfUsN",
  "key28": "4EEnLUiFESDzC6pHdGttqEFWFjw8CGzaqNZqSHtG6nP4tmYQsiyBeJB2kfPYBR3RDhorMzsULmZw2brNcLZQVart",
  "key29": "5pNAYVBSvyow2w62Kpj6jbjYXwjw53KLMcCEVCESHpgZ9UC2tSMjs8JgM7FNteMshdMVS1oCMQ4zEbRjdwfqBriV",
  "key30": "53BL3tMfCkKpgbMJjSXDL5ywDmbPUzyBRmB1E5aFpr3TPsPC95yZNeXQh5ncdLduFrntNzgcFMWziieQxkFWt573",
  "key31": "2gv7y9ffe3u4y6M2RmTRX3fV8W72HwmJeJkh5vh6BKQX7Tzg3uD69YQj7C6MfEnTTBt2N8MPZkFiXPb9DQiqJRwm",
  "key32": "3DvpVQj8UFZzhofJpo29tLJHx1A2VWmNvhUPjRAGiV5Zq99UESMSH2WD395CwAr5ATVfM2ouLHsx43QvTnc1kJNc",
  "key33": "362G6vc3t8zABFWNXFQT8EBURkMvRTkb7wbctsnKeDoUJvepmFfom2sZ2w11CPUdhWThswZifoKvoXTchwqakhtC",
  "key34": "35L653ADXkj6FkoQVVC948KtCLJCjK7X4zBrwnnHTTLnYi1LnJo61UTSK5ykd3LyuSUyRNjXj2cwDFAYSEKXYNfC"
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
