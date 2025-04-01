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
    "2SPYE9bzFaKrMDv7qJ9PbfDEM9YFq4zhnbrtDBWT4uygC8NvoaWiyHVs4BN5p7kCyBPLzS3PyC5v4x844wsexrvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WvrFGwkLXVSvGD65iwNHVAKRzQMeG4fqyZuzxLCFsLFmZRXJzaq9WkNjyGSXGUCbd4TAj3CAsnfF1b7hLVUoftR",
  "key1": "3hHKCQreHG4RHHG7GTfXiaMBwPv1ejoGizstkfjvd7CpHH1cBqyGsqXnAStVXzN19kwKtKy741MpXFYD8mTziGGP",
  "key2": "2WtduCkTD8NenPHATzYCQCXToQeeSCgDvEGoVAEcpntAcwBnT83pzMMW5nQVXZ5y1ndJvhXwqNq17zFeK9b3G1aa",
  "key3": "62XRsL44Kb59rQXqUxi8LLSHhkkSQiPvV2TmVZ6nEEMxRH5E9VdEBdxuCEVdQfdMZq2Cifx9m2HyXn4S27oqwgwT",
  "key4": "61cDavApLueXokUsbdU1m9Aq9f4Z3tFbmiWPdpPkVKEHNMPPKbXqMSTnsfMdBBCmNeuYCytPzrEHy73cr4aRJb2C",
  "key5": "5h4a26ofEuPM2CYEdh2aLWqxNS1Uzo2U46WK8Bgd64TTwHcQKfv91GYvMfL8SXo1QGyKBL6YPSdwbbMZovUgqHtf",
  "key6": "5vQA4cFPeAquT8wDUGW4vZCjgxAsjeHJ4m8e4uYLtPnMq8kyCyo5BHoQQAcb6vHasNatiD7EWBQXtAVgBfiVCP7S",
  "key7": "2f3MvFFDzRxguTzJPS6mdDdE3Lf9oFJNEYJdCgu1MXKBZXoL2fhi2t4WdnZe6zkUyNQPUWvN1hXYuo7pwqNkRo6p",
  "key8": "43fKbKcdMhdboavB9ndTKvHzKckymUaWTovCuGSshAqbF1Ncb6yrT2S7FXgRc5g1cpRpPg8p3mU7VoLTS1bhjnJ5",
  "key9": "2QeMpEBt5rYK4Ga1GuyAxBVC6Zh4W94AW9SJT6ZfgC2ueLjoJCaFziBW5mywVy36Vct7pRSZF5SijWH9vAjasEU1",
  "key10": "5JdgRGzd7uZEx6rwLR5LKMShnhxnwtZeQGBZeuMn1jmGpBFbnAXKCQ5oKERjyGe8VFmRNkTU6EXEt14kDNmhvbGc",
  "key11": "5EnuREKS9PyXC6khg2rqm8HhUvQcR4ncRwNPcszSGwxrVeiqTmXwg7K2JZJd9VUj1AqD1YMPeZos9FGxKTsseY39",
  "key12": "3BizPbUs9GQpyrFiNxd1XVRtnPfqSUv2a2hBHEgVzH69NesBVdHmTR8XsGX6o11PXP4N4xsUyyLJXM5yXU3TD7CJ",
  "key13": "LBHBySfu3cTvXG4m1EHQrtVZbqHVgN3hizKDieooM7p5YzVpaLZXrmEMgTvYHTkLKnyShRwPy8mNzh5GaFCTE7K",
  "key14": "8CsVkMAYuVc7jhnfxeX9No3LiXyrJbH5qseYCY3i23ngU9cBHGTs2z5YFBdbUYigJdk9ZKSNNKt58pJ2uSMG78T",
  "key15": "7p6Ut8ynNJ1dQG8YDNyZWuzuYPuBLTB9e3uZ3QKtKmWeByvqhE7vJs7ecxBuHAamNvmLMxBahj1SvfQnDZMynbS",
  "key16": "zfz3HcN9UtjkhXyTPxTNsh2yyjHWoLbSD6VLSD3J87A8cxxqGiSRWeaZeAMzQjG5URYxq3fx2BSkhQ2hZEoMK2m",
  "key17": "5PUdWz32Y9DsF1pxLzA9apxv4oEQVaA3tkPaXLnGZooSBq1rXcSugSJDb3Ywts1iEGgAVe6Wmqv2BFQayTrFimHP",
  "key18": "4aciXwbcogyEjQAqy4qfyFxciaXnd8yC4zikc6MmTWtsVdnAXomN2XGgyjowHYStY197MHCar7mBLBkErnpA4uyr",
  "key19": "obpeHP7k5NPpV4YxhnZaSwDfHNvMW4HgvNRCmJvr2JXfqeTmdbyjK2VeDice2sbrYorhhNNKPL9YZHaz5KiZ6Tn",
  "key20": "2XnVAnntjnV1xRAxp8i3Xewyd3B6ht1RmshNFnPVm6NVfhUJtGEtC9wxRgJC1xwdFKFo95LQoBwmPek5uXkv5yqb",
  "key21": "2vrteVvtaybZw6TseMMWeXLauJWQiHWMttXzAYSRsWNHFXqg7a7MKARQV1gYbFQF8B4YF1UGruvHZ77awsZc3hEe",
  "key22": "Zrd3PL8cVZa2iaaBwp4E94SVjDP3kCgqKx9Kg33iYikTGyNL7q5cXT1137UD4Df9gEn1mQwuUPbAyoakHC5Wyz2",
  "key23": "3YTn7wznmcgycFe5hcpixpcgVfPwEWGCHEfCL3ciLUZsjyyQxaPei6oqyqHCspZgdVKWtGQW3vvHJmRKN4sqoCSw",
  "key24": "58FgjmYkD64o6AATccYjrqbhwZPSphNG4DsUaeDngrh7KjnYXvTi8TwPytvAq8hr1kTFNHbrjB9Q6XLoKMMRzkye",
  "key25": "35Ex9sgMc4u3E74YUNEi8sB6gTFDCQc9saHJ5xQ5EyYpz9faFUTT5LCet4QwmUhofrxvR51vweoP3KhJTEHyP5Q7",
  "key26": "2nxhmpMxCpCVaUZ1AgTghjjaLXxzkhnQKSjUNhxR8Ney3mXfnXed2q9GXZ6cUhxDrQSxmCPe8NW4s9M9EDNfad97",
  "key27": "vBhFkqdijfS9vQwjawGz7WgWuGS5miMqCunocVbsZps1bCW1TTm5hcGeByMxLXjV9qsg78XXifmCDnNegFbWzPk",
  "key28": "2HQ1ZCAkZigZjmBefCr8nBEAJPMr5PwLrtqpJrveCaxxTCuoUaTTZ1814SBbrDoCsW7cs9f5W1V2RYzdGdgAottn",
  "key29": "3TY6i1haMQL1Wzxr8ysfB1en9mTcAqAuRVVMCfuuYd73mCfMjRNFmjibpJXuy2y1dZmKtbvpzRkqtMhJvnU6zLFo",
  "key30": "3DkdCCgkzPzdrtyHDm5RxeEGfeRj91EGgoyPVwaXcfpds3BMxfr1W9QKAUBdCBdx98gUuCRD95QHKMar2g4bi1AL",
  "key31": "3fJZDy5GswAeNEvALB3HXvLGLnUhK7cL5v1QHJpZo3v1mtQaZVn5STmqtoT7whnBBF3fhLqthF322pwpWqJUrYX4",
  "key32": "mskRvNt9BE9V9cw4C4qVnxR41ximYzpHJohi7vSLq5CutGvo4NVDHNfVLqaedM5JgLj7JkERAmRAnTYgYf7YzVS",
  "key33": "5pw6S2rnCySP34WxY8wvVi7snPdjt25zMZLBQie5X5zDtHBhF2tdTUSodm6zqoCiSDYMYvnFqofs3f6rc14BEzrq",
  "key34": "77wRZo8TamSwNHfk816tmkxZGBPfFqkM6Zd6nUZvLYv2Q2MCyDesdyBaXmB26aoRfbYdoamtmEZqg7jdqb1Vsvh",
  "key35": "4MDsW6QQZkHxsX4iRbtp9Mxuc3cDWX5Z5H4NtCPsRQHwvLKN4LWZMv3vg8JTXFrZLXBGFkeeEL2An8kwcwPkGXo2",
  "key36": "uitCYLQ9jq83FnHNg7rgw9Vf32bfekKBVSHRJKeeFDdGJDdDbMz9pW7at7URh9R6BzTowAGCYuR2E5hyzwfLJCW",
  "key37": "2AVv8ShdoAfUmiWNvCRtc159kMCch35DoyGc286qyMZwrFz1Fehs3hyD62LssTPByJpoQ4yswwJXVvmSfEgQp9cC",
  "key38": "5o9Dsj9GxYe6JWCe1r9d4oKeYffi2mFytAvUWJwCqNxhEAkmgc9eNotSf6sRXtvEyJFCmNn6MNpnuXNRnzvcLycJ",
  "key39": "4ZR45iYgPyzmRd6eHvoYM5zJgGGkceWy7hZwh8iF24sLpRdz9bFxox8qYHyuMXo6QjQw16Gh1aPjdPVQN7TGkrZ5",
  "key40": "bhnGyJXATXvV8Bji8Q7aGsZ9K6H8wFJqQEEduK9mpZHbbDRNYWWab8FhCMPud3XA22J5an4SUX5dsq1Uv56Rg7y",
  "key41": "3XpbA6ZxJtMiepzY95v5cnQ6wE5LwWTrCeBEw9CbzWNXaZv1G8777YSvWRhypEgaCNezmJpjEuFDdXj44LrygKbV",
  "key42": "62wa5qRyUW5XpKa8kth79MjqEMnHoxXYFJVj8j5rfmooTPV8tnxnjSozJ7mukANyUzLfB7Gf5iryFXnTMuRSgjdm",
  "key43": "4ZNub1RgD7tg4JVkCkmXR3MU7iDEAtRUC7H9RN2EB69hyqdTbChtRJVuLRYszX7nRVVKsbbQVPX9TKDqX81Fc3yY",
  "key44": "5Gjwo3tj43ebfrYUSaBxR7XzbttLFA7g8djfdG6mjC33667wVBNYkPEF3q1CZngHLzYdaCCXqDdJMJvEzw8mbC3U"
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
