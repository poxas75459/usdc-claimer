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
    "4SWjspn5qbXb3NnJFyggK1d4oYAxDPcVNH1vCpEmrGe89NEdKvRc4Fe8U7S3xxvxHyCsFbCVHt951LdCqXUabbG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54UbH3khDJJPEfPhrj83GJqyxXGbrnziT8zHSb6SHz6yGHXwsaLVUW4SK4pcHSEP6SC3aY5x2qid6jGGpkTQqxz9",
  "key1": "2ADwvV8txPjykYAwCwH14ptUzdrgFQcAf8S8UmQN9WYGmLzzs87JSByXr5yBQ6YG8XUH4tXoQQSYAndJe5pYbQPm",
  "key2": "4t57qtM14tRTRVZZ2tZDuokNAbADzqc9W5SR5FcAQ5fNLeqa8GeAoBDkbyEAc8wZ6Q41DULVbQRBq2ECFyZ6qPBe",
  "key3": "4eqS37TCNkFFChtvHzgPdfg8dLjnhcMupSiBkwVdzJreTobbSMoJKaD2D6nf8YpYuchSM2i3deGDBoqRQskLE6C6",
  "key4": "dijHNaiehh1NjVMwGEogJypwWDapRgb7T11biB9L2heLWeEom5TMbDuvvv98QMjUDSHU9BD8j1rpbTd74zwvm1A",
  "key5": "5x4viaHHydLzH9QweJYpQypdzP3L91KzixhFR9LipZhSTScPJb4Du1b83BRPzKhvvQYz9sa7RRVH6CTfwruFa5Xy",
  "key6": "5WKq7VwqurAsBkiMG6KJrmgq3hBrAoVSNKUuTyHumgdQANDRFQ12GaBAzWdnh5b9rhsemzhrPewiXJszu6KXRcMA",
  "key7": "4Fu7TwZRFnmCCt9Y73NCrmtiHjRfmBKtC2AY55dkVXyaZ4Ukn5xdk6eDoQnzNEGif9PN6qrRmw4vG29u2NQeh89K",
  "key8": "26oLW2wPEQispDxoEeYmuk2qkr1RgahS3X6qA1hMpyZqpm6ym2GPKAyKRLJBUDeWzcwGonBesvznMiCPykkBBvN6",
  "key9": "K7v5saxW1TuPcJ6DrQmRfhSaqqpgGYYAsFnsp125F7gUm8U7W9QvUahnJgLDGaFjtCk2QU2kqWVRpWM2CakA4KL",
  "key10": "2m9AxXPdQaWvUB63Zc9Lnk2Aqjbie4hLGJUdaw4xj81X26dNodN3hojebZN9XqTQgMgpnMGytwHvnEXqbuumjUfv",
  "key11": "3zjBj7aacHUCz1ZyGotM7FeRrmvv2sJjyrTdnYnDEYCcMcCm65YmhChtiFeTFJzWkw4tUR9NTiLBXVBPoahSoS4z",
  "key12": "4rwNjptsT35GLfvjLym7pJRTFv38fb27SyAvUNG57VH916QZZiprvC5pLbVfaHmcThciwYABtjtUr8pzWX1JeUAn",
  "key13": "48N8FPdSzMZGqaEJXC61JKor3HhuVnH2YAduUUh4LaLE6v3t69LdLEMpK911kkfwmsUZfrxkF2kRv6DmJ7iG1T6c",
  "key14": "gorBtTqd8bmFf45Cxu8FqSQ1cwHZisLZ52jUuQmG8J9d3oUKCGwfCAqJ71JRqRMPHg3VwruiabzuiVh5A6smV3a",
  "key15": "3LX7wLa3spH9nFxxUYEQ6wSGoeeoC2TGRuD7YNRBkfJN2Qw9HsPycpKegJ3qaAmFC5NcqpuJ5DKQ8xSZvouUxtpz",
  "key16": "3BwS6yTgwCrDvmzAmAfEMP2xf4JzLRwnsE3nD8qTAHJ45mqY7kCShp2jMThYpeBJ7mn9BTgR4RM77MgkbPUjx7ze",
  "key17": "2KrHYY2Nk1UKPNh9G757wVs6EaiDm7jx7gDt8ifRh3RfpeTeSTm1uRWPfWw11kRj2xQ7uHQ1SmUUQ7zGiDJ8rSWv",
  "key18": "2zRxdNMw59bLa5E1GSZX4Mc1hihMkezBx2BDfeFVf6nKu5UMftMUm35WRjBEwMXoKE6hi9MfqQkQfYTANE1hLvbH",
  "key19": "2nRNuPNFrBCFBTwxdW4Jipd9opXfeGYVqbRMCNA2oUjNsgXEUqBkaPgg27twpnsnQgXkMTT79SP5JHpK1Adgts4W",
  "key20": "cBWWmPezNfgGuhWfteHxEBvHAy5xQqNZgnQX4kCCue9FHaNr6YCHdneXVvPiBHYa5Jh7ibChYCVpeeLzR9FABd2",
  "key21": "5ArVy95EvHLAg1SbeWa2ekG4XZYGBCJZmZkuS61U7vPQtJ4eKYAtZYLkHWiYFsTM4XvAqwmDfyq7e7JRWYkWcMXg",
  "key22": "2N3hpgmrHFHtZCBs59e22PH8RRunj5XAiqeGiYeCmfZPVicNa7on6YXvMPc4zKhGSRE5kof2DPJachL1sQtu6Ynp",
  "key23": "mz86wJEDT7R45Hg6QVz1u3L6CPkrsDtQtuaXongyaywaRbRMRuVi73Hdg1BR4QGRY6zX4Ymgkqhc1wXhE4yXPyg",
  "key24": "2orjyFyWYxP54npn6z1PmW7GynsKtSSXwqX3JYrCFNhhD7GB9y3RmJqvrLKDEHqEGtSbeKHeJ4gJwsvY71LvGDvz",
  "key25": "5LmaY1uyv2vNJcPVfUDhLshpbA8faGPfWByZuFbHMZi8qrYXDZ1anCpeWY6chCYZZDr2FuqWrhVvn7cHuxZMJ4t3"
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
