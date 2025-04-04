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
    "5gDXP288rsHwkZrWnpSqW9Jt2rphAMW9EVJf7QEm7STa3kbBHyUFmJkvfp9aDVC9PbWjMveTjCtGbVyGwArqmMC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mwXgNmpDcPV57BAcCYzkfVZNaRbiwB6Qw1fpD3kA2FEidUo9eZm7wAZUpXzzvrZqEeQhhgZnURyhuZtLxC8bUS2",
  "key1": "3Vidpk4eTD5kL7qvCmJvXS1jzN8ufohwgg1BCZTDu3i9DJPxZ9j6fK9fmAbyum5GhUhgLDxiuyoecZ4XpqmmjRAn",
  "key2": "45aGXsv1rW68AnyRpDESwDZUFtrNCB5eRtZpnWty7mt9TFLBPsrDhMDxyLzjpvGbjKoGcgKHYWNzbmQGWmavHs77",
  "key3": "3eHEHwoahoN9eY25vvoTpGcc5bLB4aWk2p52vX9cv6z1KyPjtL8q9CZXFdBffk7WUzhn1jSC3P2pwivg3MQRCSpT",
  "key4": "ERnZYbnUgFt3YocYYt3EbBnTvUbrYkwX5TXBzZBW7BnVdRQNNFasNHVGNFJwsRfb9BWiUsJSdFAGAaQUEbFFoub",
  "key5": "YHUpgyXivE9vW8eoSmts6qmxv3Q4MMtdYF2QC5E1REKwtMQ4c9uKnkdQvUXuyQB16ga6vzJ1khzyFKDsL74WGUS",
  "key6": "3y9o3XjSxJAoEa5Zz4HfRx94Ucv9bZXYUgCcnRojnDjyY8TT8aJU1Hpud4MWWC3cv1frKet5wKPFNqoEDXjEEkGr",
  "key7": "4VDv6VfLrZukEbL14ha6AQFF5DkcrrdPcmu7gp1kwER7wUqx2nq4mYHPNFjRfUf8YSurFC3z2s3CZ86t4qDDGAYM",
  "key8": "2cnnjDu4iLgsNEhiMxbvBTCMG5XFQTRaP7945J3wckAMJjjhVTFqTVSjAg6gydadHREjdFNKZ19uCpX9gk7Ht881",
  "key9": "4zdRHskHKvUUbdDFmZbz2YXdCPmVciJJyAdM9cVF8tLP9cdzoyxX6zgAzv4tyW47oiCrQdyJKJ7wAewdWoycmY3t",
  "key10": "5ArKjuo4Xo3418vFZR3wjg4ixMq9RwRW5eGQ6FRbqxQj63HhfJjuajagfbYU7ntysAzqG76jdDVbGdxPJdndeogU",
  "key11": "YNJRNQmAHsM16Ax87eBa2ywKq93ju2Wu4SzowGVbrjYZ14UDrNJPcjPQZKgAzvyszKmNCHQFjAiCTyMCMZdBdah",
  "key12": "4gsZKBnvsgjWpKwqMyZvcPyUvZRB5LZq9UCkwYwuTsCMxtConDsmKPTmaDb1ecjJr7rkHVNVi9cF1GaZ3Z19iheF",
  "key13": "Y3BWMu1D87W67jfui6KjGLWz8d1TtmAYLx3JVueSPzAzmP9wNP6fc4x4YYdxTaR6mnsComYnnogpUZqTAquaS4g",
  "key14": "3n6LcLDYeSf3mJU5kiiu1aPEDeAmV3ZxoWieMrTkKidC3h5wBBHkD66VJZXeWRacDKF2ea6cpGmBrcnm44fSvv1x",
  "key15": "41c8MqnxBBUzcXtos9RV7bZ3R255MUzugsjfML1S5rxXGrDowSfAMzv7k3cUu4Rszd9YoBEU1KAscgC1QyjrjAwi",
  "key16": "6vBjKFZrmu2ZqCAJGbxChKLdrQfHJd3zLV7YQyA6MGcYWJSrvmfVjZHyeCa3e67VAtG6w3278WdkXYnCyYJGsVf",
  "key17": "4zHtgXf2y9f2nePRtKjt5U5uSNyMtMjpqYtCFkDvhiDeDdyYLRt7fFC2BXfe3N9bpoeDz94bf1jgibS84ox1NoaF",
  "key18": "YExpxXtpiomMy5azscEDF89KvXB4yTcHvYvmkkf2jAmGCDhbyARKZEdZJRVsnw2PfbUdXG8Z5gwX5wk3exXeDRf",
  "key19": "ZDcKDrj54ACaBSRqjcayncfFAWmpf7TJLQTK1xzAoNNijwLrz7KHiYpB6a2YexLifxAKXbiKfC72QLAX6NhHDqC",
  "key20": "35MCcZM4sRhKpJ62jXTWY32J55mvniCbdBpGsPBr9SNdy31eU86DHw1rhkhkwwjY8RrjySFCQyEmJJi7grfu48zo",
  "key21": "CAxpZxkuVHYiusVx8VAnq1LEHJVyk6oEBEMZKjX1rJGAg3TJwb97frbspy9dWmR8QvkPZJpBKyhSeg4wVRCYEW3",
  "key22": "2dRaXq9g8dRQSMa9tkhrxNN5xX1gCyojoXK35LzbiQ4jXanKokKb2cSPWyNzGAoYfkE6sH3gxyjhfpBh75fSJXLX",
  "key23": "5BUJRKy1CLCN4DNUCDMXg3TNJ1fp6D2uM9ifFt27XhiAPCkSa42RCW8LDT28DLiihHEo26mNKpjD7giH3Fe9dcrc",
  "key24": "vdoGQ6FGse4ifJLVNivYqqbbk2xuQRGv3V2ZvVEz7mKJDcsWtndD3c6wHEFFaGNwFJKqH8eLkNNSqXXuWmW8diy",
  "key25": "259anBmHYmjhvtPBvAcuTKe5aEwE2c1zEmmbg1A2NW8XjXGJGSHSKrr3iHjLSkswe3ssgS1VhMc9uQasi9HQe3WR",
  "key26": "4GdgeYvtXDsPRS4z5j7urdvuEPq4qqxTW1jkhBeEq2EtB2i1RF6fHkX4nAsmsAKfoDmh6CpYVuAa39DUfShEWjHG",
  "key27": "vjtaQmypfPhVPfFKuouFz3qzyXySmTQZxWhxZQD8EB89mpspL41K52DKdLXAfrxu42zi3PU66FLLYPeuwaN7ZWM",
  "key28": "2TDVvqgavL8uAeiXMfto2Gz1wbEY6Kix29VpDBA2uKPF5fc2TQFUakrTVva9qVUGCqaox89rCBuuUzFNnKChBiRC",
  "key29": "5JMz7XF2uC1ByebqDbdy4EQ844skR12hC6TVh68LM9fwsmdYsstvgZeArisSLHq5gTs6UqU1zcRsqMP5wTYdBb2D",
  "key30": "3KL2BTGzSZ5ENLuDXDQNPya34C3n56qc3RQJHdAyD5PWFWJeq8y9xD9WnvMpAnp1G5pAvXVDhDemhzFyuDry8hyg"
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
