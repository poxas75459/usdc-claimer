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
    "2d9YtPyjpycQg4rmrTjZ1Ar1BXX1MEt1vmzt2mPXy9FiRK1i4XaxZ7jmmwPVRWBCgoKt4VMscDGHJLZi4xrY5zkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L8ZYjP7ybM8RnKAdyLS8rmvD9Lxt92HUQsxW5P1SBQRVgWNC2ZZ3rjVaxF2YbXrbr9cMymGNWnVHmm4tQFtUg7L",
  "key1": "ZRt2RYLhfKRCwLoNnVariAuaHsFARb3iKkUVmAqQixc6QdaXYQxQj1LHcNY7qWc8bd4DANaiCFjPb3V7PvuBHyA",
  "key2": "eJRGre9ywATsfPRefWN8yfGk3EEiTqpURiKYoqnsXzURExsi4Jqzozrmh396opKq5YxpdSppp5k73QV6xJWuBhJ",
  "key3": "5sZyheGLR6CpmERn5kTedMPSddzontLfKFFVmH7cjNSxMpxPQWpQMSZPaYVyXFfZox3Xpwgh8vawgsDEQspPeG2r",
  "key4": "4PHjgvbfX45G4x1dJNCydsrEzip38mbrmqqR6uSfdR5fc7Y4JiePMKhxWQZ67kgHGv32gC7g7cEHbC4W7F5eK3uy",
  "key5": "WAswWN7XjpoSZGMLryDuNpDATi2S2DvNAh22jRwUyEKpPcSxhnppKdRucsqTKWauU5axnPRWcVPJe2eRgRrUGir",
  "key6": "3pz4CvrFUWDxwVa7zmQzjCg1z4v7tuYFNvVhbQiXhTTwdiVafbJxAk1msLACjY4Y9uoqWhfD1R112mAdLq4UB38C",
  "key7": "4SgXicv3ACEX3BEnNnsrabKMJQof269ux1xgi2LjiW8fm3XKnCkWVHNSWMZwMZkTPVjBpVMm2fig6N8Qu95HV8n9",
  "key8": "UU7NVhEh7D4Sakz21yZkHU835PYbogpkq99wirw2tKc2t6Vheqi9aamGMoZRypY3chuiPp3F3aWyBoPnUzEVr1f",
  "key9": "5X1VKNx4iUCXSKDnceSxJGX82ZkhwqkpFcCfr6hq48Rx4esEqfegTr12LM18LneC6VqLNkVr4pNeF7hD1v89dsnF",
  "key10": "2ikRjWjJjjYW6Egncq9Ut3JmNuroxTG3GeFoR13u7FA3JQReofMMabbSZGMDB2NkTKXC3kfNXRrwRjc3X3Jm43HK",
  "key11": "25kCtZU82ad5ZYUHT6yPBkthSMMV5vFnY4gJyVJSni2m3jqfM95MZnHe4FVVtsZZatirMMXsVeCeLoQnXnxF84B7",
  "key12": "2vMtUGxLh1QVhaqtTz4tx2Q4G7qaV9k21aQ12Pae5DhYVZyMLVYrUBU9i8kbwSv6ZKrqCVYYWEcSrYNamMPRBfVg",
  "key13": "56cNNEnLiUHcDe4utdKxqFzASe9iTAtijDpjTGV58ouFfh3gGo2hamkGZTFzBDMCuMLBj3oJzzSeoevoshTyMvCv",
  "key14": "pxhAfpiQfrTpveosSi5xe1DcnrLf8iXZUap76FBMNnZL9feTaAG4wJp9DaXYkJN7GDfhyBENNuJvq3Lg9iTqPFv",
  "key15": "2SXEJVThRLVf4TY9JGVffrzAZzDqH2Xt7P24EKbGVJXmj1XQg4Wu3uxFL2sBpRs3u46LUaQmvvQgt2RKLvnfD4qo",
  "key16": "4A6h8nfkXbKmuFkre1DPtqYsYqFrPjdHCRhoqWcsCkEUJMV4UQQFuhFe8tMguKhXYVoeswRTN4u82B6bQHJVxdbK",
  "key17": "4GnrWMGBAwNQx1cAvohuFUWgkRv28nRvx8SiPTF528MKN9qB3ZSGFCyC3ivoNZPSr9K5oYSBk8KvmzyJgBDLJWNJ",
  "key18": "rhqDDMzpFM4zTsv5rkHXZTdXemDQecJMg6VnwPcftHg3Eaw49iXfKuuCLob6KdHo8C42mgyxuCVL1EmSbdxCUUd",
  "key19": "9fcQ6U3siuTTjvkfxWYdWysQUWvCZequ7Z34GZf5pdofvGFj8KRrQ23QLK4oSCKn33UNw6oKiH68kYvvWtPrC5K",
  "key20": "5b5Wc1N76TTwE6XtNJhbTpAhKmMsUn45nFHFkN4zoLFXoz7oQ7nrS6PJVBESW8jxpoYyqXtXimkfLfscgrng8c54",
  "key21": "3GWeSga2XEyeqxpmYdS5LzGjZDMwug1XoXWpWP9cahfkJFHLMcLLctkDN8vmG3Jc3w9xFZebq9x68ZMrtaUCsxW1",
  "key22": "2ky64ZWoKdcSyRxRHSoYDZhPCmQLsGPGi7Ex9a7bsRJWhabkcPuz3EsucE1DrmMzGBjRWBsXy87f99EMF6D1K1FJ",
  "key23": "4BP1VRP4eWSJ8RTR9BFc1pUarchGeVSVPsKZBMJMdVGGFPPVoQQofPGxQpqTQeq9aShaKyKJjr9qASZjWzFD6nNT",
  "key24": "43srtpF3jPqdgQmxBQfqq4M6dacdZ14Sb7C6X681fmngDVKMN2ic1gTW5yvjABGFE2XTfBjd6gYEdk2QETTiwaAU",
  "key25": "4jRGLXzaidCxAL42fyQ1gKiUfZC4Cuk77NeU1LD1jheBri3F6W1aZrYZftawJF3XoRLveHvWSwXGtpejRQKHzbWk",
  "key26": "AHScfhBtfyzHATgUHxeAr7a37R969Rji9XNwpHtYjiJQjms85cG8EFuUv4XLfCTismgbVFD8eZxPHKWXochkZpg",
  "key27": "5T2hxyyLbUnJ8pdo99WkpmJuScK1zdbXECJjLUiagVqAtZvA1CxPzwvhq24QhHcQRBsVTcgaUErESSDhnqSEqR7C",
  "key28": "4V3BDMfnBSetHhz34mxPPF6JaV4aiu85goA6TqCW6D4XP53hJmuVeeaeUd6Wkm28kW6sfZAdmwrmJufi2KavGbHc",
  "key29": "5JwhD5PDDdzUwFFCMWDf6tAfYxoQGC5Qw4PvAa5e6rCCuLiKMyzKQjw3iP7kYvLAyp8ikQZ8zeoTGXY4wWJTMyh3"
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
