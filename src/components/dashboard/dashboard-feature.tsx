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
    "34tBAqkPNTqEYKXgKQzp1bzotuvW373pgFvWFRn9FQwXZHwrXSmRvtp7o8TP2eYCn3KP92SosrmBWx6HK1cNptEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gP8gbk4a9Gr28vZytVWeBjMqrUEcNhoEEJsC6KaQpt2HiyRVG1n1iwcSKsJeahYqy6DwhyVd4ZpPn2afoha9YtN",
  "key1": "4gad8Zib4r3kNLFAKmdwMChDb7vJDdSuNMmPjkT362SkWEtG2yFaZ1yMDWzXR4yLCKwF9eyDVXChBxvdJNFVE1aJ",
  "key2": "4qT52BxGcggARgJCxwVMHGztoVutAnxkTEZY1qwer1AfrKFNYv3G8q5bBGmawru7r9xHxmqwtWdKYPPdBE9jMAfw",
  "key3": "rideMr7qyKoGvyMVwTqTtXrbixxVxLhjpJTjbBQ1X9xoAuzsWkgyDWUnWQL2teXzdTPAogQr5NLdz7zog2CVR39",
  "key4": "51mst4X5p4e3kHRdcYCj3Dt3mkV3PuYRC6SWx9Gw1ipt4iAmMx2aHu9iqEVUVBGM6XqTv28RiJfjfhRLMFezWhmY",
  "key5": "3jdu6qmizS4dXYnJ5vDqfzBoV43nZcm227S4swfnTCnLrHTJUzpnmHqKXsSfZe47huWQxosN3DxygKVeMknn7zTs",
  "key6": "3sNXtdg4Dg2CEj6nKQjhrSzBND26msPTgy2XtzcSi8jWrv2qADa5M8XwJMXwHqe192G23hMp94X9F9hq6ytVB3pX",
  "key7": "5r89AzQxb2t2He2PBDRTjNzfWRpA6hiSgteRaoXLvUBrrxkSVpKvGduiThv3hCnMhHbGgoU8pJ57ihYijAhBFRqZ",
  "key8": "5dE2P9KZdnvbhYU4Gov1VPDpcZfyX7KLjLwFz6fUur6y8c9tjGFg7wufBhYtu4GUC3tPnwmZt68LAt5BDe7X4KGG",
  "key9": "59hon3xMozkcmwnRw48eXecu5t5rAWuTgCW94NPipLTLgHZMgYLKGpyVJitLoEQtFTWE21HUUhye8GrVusiskmf5",
  "key10": "2WCjqGuG98R4qAdxUJFxtskp8f8pZv7mktaAR5orYDmEM7pXDTCG6EW4duebrd81BWhQPA6s3hFcUgyZQ8N7e2YA",
  "key11": "3yuMQfAnN4wLQyMBqKJE21DGbPvSWtspdTtFLmyk4WJnNxChrCEYodZk1ZXNKKow9QiPMfDZbG5sBZN1zsiWznjR",
  "key12": "5tuUaEqbRJDHQEMLhAroAoKV4U9wFF2R7aAcgPBZcGtHk45EsdVsJwXdRuQUFkGBjvvro9cYVSnrRP9xxm2tTuXw",
  "key13": "3mj84vLNd8bMrCEEasVk8z3qxwmttV4fYYNLWDjASC9LUV4t8maZ7198Rz4jPmsvfjmcavKbP9oFi1VSitJMD1R4",
  "key14": "vAAiHrUm5zZFeHQKkvR57bHGJ3ejBcAZp1z3go2CZkQffXyFgA3egoNmc6k8VyznxvfjK9QjZu8rMac9GWSuEjz",
  "key15": "4quEFuRfNhuc6W7CLAjjBAmW4eXgzZ5NUKrhmeoJRLMAu8E6g2LWxzkUvSGucVfZmcfPhbYp3MtzkY3BMQA9HcRG",
  "key16": "4ZmydL9vhjFBokJn1EzYjefsGSCditjbzPvrcigTRRqcQzEzP75rA9MYvvwM1CMDSJ2xrosNPM58bY2eThJgJ9HU",
  "key17": "TENqh8JXCyfreWnrj8up9wYEztLctDbC9pdvnPmCPXiFHSP3jfygqu7viagrLVaaDYUZ7VEkxDgHBCyDjsRpCuv",
  "key18": "3aykkgqtkHtppfqmRrSkPQinvrbAqb7Ss8APRAiWEJNVi1b7BbXYVB2aAjsMRN97i5uscAGJQYhXV5H33h7jUrQH",
  "key19": "4Hzz4zpuCNdExyUBsGoV4pq7KFbcUoWULmHHSr2EpCuiTQE8cCpCsTVJ5cruC3j141QaEwa35s5e4u711GEQErGh",
  "key20": "5FW8iAntGc2mtqqcu1aztmWd6WTmfXgyrd1VVwmvpMbbgRmvj37i1dDPD17Umo1vbTo7iZFq1u2kEqUVvjUN2aU",
  "key21": "2MTgZ2ndEupwSMfJp5FgkHZ6tyWWvT6LJ8ZgqUcvCZVKv7u1Wfk5JCKpxrY4N5VBs92hkWkcbjyHAZEBvyd6UviC",
  "key22": "27jG1ngsP1a3LNetDyyw8HtRWnNQBiSrZ2NKxyWGY2nTEf1deqYcnY5sgkxHVjF8ZwJWdiU5Qd4ujTfcQBGXhqnZ",
  "key23": "5RTKn2oz9uHDS9J27XmsxqJ3sgPQV74Y3jmVyGm4N7SsPLAupctPkb2rfoteE6ALkNtLftSouZZiW9jsKPYgsaJa",
  "key24": "28ZYCWm4AVc8G4nwXaAWDF47rDWsraCU4kzrB5SDbfvmm5SB8Zf6qtS4PDVWvjsmgab9MwMr7nZc78Y32xYCQ4ep",
  "key25": "3ctA8PJYywxpLinZqdLUw3z4XQ5s6fqFwYLbFC3ff66NzuDuMsW1ofWMatY7kJpMFwaEBsBNEWZrXK1VuUQ45b3J",
  "key26": "3TZzp8QGWbgXWYS6uN73GgZDpYYMLa7ypYaJiapqstr19qr9MGFZjZBFxCakstTYgtBPAmNKfmdT2rZCSdTNGSy9",
  "key27": "GScC5SYjJWeriyGiyFFUPVpmj2vK2wdE6cLg9n539w1k4QAoAHNxvFHttSrHPMUPg9v1RccxV1woNebCuvr8Kh9",
  "key28": "469x6NWNfUU53GYGuctuNZuQC8CFQejc6SoA9qLuGehcbhisx3pBQvFonq9xYuiR3ADM1L8DBhYA4Zwn35qPDL5F",
  "key29": "3tXLbTfkQ3Mb54Wu6V759nb2CievW923tHazy2dhRWRqrbA5HzQDVoweQawRRBSF2gHMffJjuVy4y3NcH8xSw7nK",
  "key30": "3raLSQSbntRdf3CKPdEsabkwmi4ykFqSDAzs1S79HrZZYhLWL26uNGR8Vby9QmM3brWzFj4h2FvLQVWocLdmCeLe",
  "key31": "oyrqPfUW7Cf1hK9gw2HWuDYUbybCNJJ2EbWDeR447SbV2vL87TVARsEAXeRVPyA1amBSisNK5D8KeRL4Wy8P6Up",
  "key32": "yt5QZ9ez3wHavJrRekAzP3f2bmYt9eBTYeqYLs8JGZRP6c3omS59GyKcW8sheMkFjZeh1MnKN7vHx9sMDQuQh59",
  "key33": "5vFbQS1WaZLj9gBydfEj5SoX1Kos9FqQjzUUZ9hi8edisX1iEHSAtMS1dQcEWmcHfmXvDtXp7j6WJxd8h2Kgjnrz",
  "key34": "44rVaTAjnYTBHF9ts9FZaYC5wQYZmQ2kP3UXUmjcuHsyQEUUcKtTsQQYyLFZjFGrb3DAbhJZjTVE93zRedbsCHwq",
  "key35": "2hFfysw4GFvr6FyAiYhgarhSZEBSjgU1VA3CYLdzHkDoG58LZ5UEc7CRwNxkhuK5TFm9HAzCagcKrpHpdFdZ7Awt",
  "key36": "tia7Tdu5zoU78XAe2eL3DUv3DoSKaWQuhtJjWNUNRtwXxmoJjrPy9yt1H2pw71Dd4tYDSyGXYN3jh1Xh9QFiVJ8",
  "key37": "5QU57KkK6ofKjSn5e7AnLRCYP5L4umGxMhU79vB4r6KCX7JF3q5aojYK8GCvdg3f9fKhsx6uPxXUoGtDT5E589ie"
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
