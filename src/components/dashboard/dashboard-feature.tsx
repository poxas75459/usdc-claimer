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
    "4n9JXj92BmKPhvy9q6d7JxtckXYCqisnwUcKwYUeS22U19imTPbCXfEi9pmq4nPQdCDLzBxFa1CT5MrmKeAFcXSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k55zYhB8fATPg9JvRvXqieFH46RyTRxnnfAP4Lc5y2karMaXMtMKgksMy8ABeikGbsoE9qeTZcwyBMbBKpYB8kH",
  "key1": "2Riu5JwuDSkAvPQvUoHaX5eVGeVJBaid9fZkFPTVk81oENDghFHGNn6Qc71DXYxPq2mXN8kG58gSNzQaC6A5CYpr",
  "key2": "DFysV11yrHbMedVPydvVLoN3AjJNdNYC89rgDAtuLJVgCu7SGhhrkGkNNErvsN6k6py45CEqhDreprTWGmJCEek",
  "key3": "4zEnEgj2jyjN8uUhJbRD9MxYA3PksTcZeWF6DnMr1JH67CnWKRmZGjuGUYDbT7L5NMcWUADZfchTpnj88zZyR4Rh",
  "key4": "4uJcC7tXwiqQfwTTuDgfZaLidCbLE4RrWq2q2RxTTmTDapt9qp8JByX4V4Yrp1aSmLE3iamXqLdedeUpRXmNMJBg",
  "key5": "LFMHj8kMvUvNTguXNUuniNXAmmeGZ5S4BmJhAver15Uy8iDu3KPDna3XmJZedUMgYT8BMfmdBjfCXxbzSDBQJLA",
  "key6": "52PVBhnPj3b14jdmrpUEM36aMa5pvR3CF9fDvHtdqoVqYZQRBQbds3ppSe46zaX8hz1z2pbLWyien46ghdT7kYa4",
  "key7": "4h8yV2VZC2wwN2dR26jNNXpBVYU6FLogY2YrCL5AYgGLYRm3yrLbYUQmB1go8zfVkyY1z29RLh7cYv52zoMCqYZn",
  "key8": "2MeUicW4qehx7B1F5AKhia59rkHM7vVgWamRALkReHSLT4ia5ESjwW4kpNoneXjA478nu81opU6DNR66dLTuJCEH",
  "key9": "48hVo4Um8jUrvFP4keiVRMeHtA5oQVjoA3h7eC8YJ89JtbQUWwXoRz4hm6yR9gkc4bSUpPMuYETk3hfgkrT5aWwS",
  "key10": "3sp6F78zqmQ77QT8DvMYUptSgPgW2uAWkP6WFJkKQyXky6Jcxzo7wrqd1U9UCgtmiBhSqYrAxWWXrGSvuimm6Q1x",
  "key11": "2UT56sso4Qgi7XJxepSgRurveEMjf87eu1bgFHGgHSGHd6sw3byjdb5X9vxyZtd6J7hUZitkjZZ3xmk45RBPCEiG",
  "key12": "5m91EcgbNqSmZq7WrR2AaVejPA6TTx7yjpT7Le6durRJSBRG49VRzxUx5QKx6BCtnnWKMdpLsJGP2Qnqn9a8YJ8f",
  "key13": "CGscypVZqdNBQG7aU3EkTAZHVaaJ8BJjMArKa8LKaXmZGW73TmjFYPLQ3FtLqDLiA9ypDLVnmMQt4z1uSDF2Cm5",
  "key14": "3z6VNp2JSUi9h6dnWrLSXazjVmQdorMNSPCu1tUZAFUKkbJ65GunETLGBmrGAeJAaH4k2P6Shf7gpPPiMYH9Zssg",
  "key15": "4uTyBC9D3aKjCFfC8TvGHSu6S7vDtDi8k4wKQwskJzQQ9bs5PVM49ZhjReY5E8pv1VX5zA72cCt8NyuX9tBh69QV",
  "key16": "2rH7Aew83tCPRxWZmJCdESqFTHj68yD56rfJk3obHSon1WQ27Z8XHTWd5X1dyg78y1viHeHivhHBVK2G5Dnzyn5v",
  "key17": "Ky27GwtJ5hBJSW9n33DH9Npync2DKicEcrXQ63muRZSasCLw5kBZ7zhRu6YBR3TnaNvVwrtJCUG4zRQ8u1sPeMG",
  "key18": "4mKeuA5p2M3Dw9FLo7hrnGwqvWQZf2r8k8KjEapnUMzZnz7r8t17zmpVsUMEKirruadB3BzNzhDxuKyvh6eDVDzU",
  "key19": "7yUK8vGvpwSmPLcGtVyMQCMMreKMUzZ4BiNJG5qJd3Y2aDe4sGxhBvFYBUkNCHgtP8tHJTkAERVGS2LJLJdCGC7",
  "key20": "3TFJARvK9SmHtVijneuXLfYkHspTUkA5prfekmXf8aiyaNLdxCE8WoLdFECHo4FXNpbgQCPYdg9VJLH34ioxwGJQ",
  "key21": "5zAtPzBe4v3HtLj15gYgj9deiSMyYUakHCJTUcwNMU8xvQQ7nvewALYUbLhMhB5xriDKGfjrE9dnWwPhwVFMLDD2",
  "key22": "2DhQPtY1Jz758woM67kgpmyaYG2j4zgwrGhxCz1meD6sd2mnxtV8huAQLFxkCmu8Q3tJ4V6VkpTxwtHDQHr6WYCJ",
  "key23": "5KkLGdDonwRHdcB4tAjYAL7CpcPxpaFEbGwYqJt6WvdDpEbwHT6Dvr96xf3FEHY1uSxpKBmpEfq2Ncf3hnSsXuo4",
  "key24": "3teZiafTFZWufASFtpKDogUdL61hB1zCCviaHCKjFKtVNPzutRgHbxB1rCUeW8Sr1ahvUM2XscvwTh1zfeXW4RoG",
  "key25": "HuF2gohHx781gJdj5HVCTV4i5m3zNawBEyDKRXmBsLcD87fAH5oUBepo13mGQ6mbwMs5wSqmc91X4K3fuYCk29o",
  "key26": "2UGtnGh9W3TMQrVZgiFkZAVdT8TmYFm9Br98EWjQwssMaVECXYr5d5f7J2ajkUH2MvyZ5MPMGsXg7xTe3HiB2nwG",
  "key27": "35iZu4DZCdjPoSpRyvh3UXTPfQiPFkqZBjFVRJCjyKcw2hK5naidR4i69kGVqHrp11wLntE32ynsGVh3AKmKoHF1",
  "key28": "2a55UyL6HdVARq725zN8NY4CJuBkLL2yrNsGZDQpbcqjhwVDszGW4AfrWSbk6ZbTJzDy3VDuZNeBj7mxq8haeMC6",
  "key29": "8bMAaaMdJdMfN4jPN3UqxCZpGg8TQPKtQN7dkZpizceEvfRb8cTUDGj4QKDi8vW6oe1h13D6VxLS7PeRMkt1tGz",
  "key30": "4qvv8NeNVsWHoSTSKDmDPbBaRPBZyX75R2nPXcc9uCrEFvfobwupkrzed6b583hJBc9xJGvfQZMiJMKKtMfVUpLw",
  "key31": "3GzvDxMEHZJtJGCGrTipvXWRCzXwch4i3z9vfvoJjHZsUsjj5sLSSHDvhtJ5VqTRDnGxquFehPuWmXToE7shgxVd",
  "key32": "5ft1PXFaFZXFjsWsjuD7bjh4eKBPPfzkcU4nGJ3vKsoKXg93t6SKjGRsWgfYEisKec6nhVx3xZtn1H4F12iSJ1o1",
  "key33": "4hcJnPCV3Ez72nt5JYPy9rCmjFyuYCPieQwJnxCxCEYRbHAe4yHbxj9XeNan5Rk8n3oRftjoDEiXHyasrV4KNbnh",
  "key34": "2ZBfCUsFze25fEdSeovJKS5HEp7qUaQypw9rwhduM3MkaCpFz6YcQm2GjQuYbRRzDK9rTsjEUCCf9wSFyVxF7ZJS",
  "key35": "5QRY5HLBhmxtfUbP6LJY7drp2Hyn9dZ9joGixZP3RvZqqKHxVN6gFhZaZbPurCpdp5dUpbiqXfAVAhkQvsRP8pXY",
  "key36": "32XpNMkYmCJ8T1ffnrJVAWqr3uzVKjGSBvzdq88CeMSNMbFjYR1cdWDP4o7cdik1ina4XR6SPyGhdH2QgFCjXD3G",
  "key37": "4mdZWdgvb2iVgUwFTN6pAwRzDJh53pGdfvmVFvPSPeBbBFhYrwFkDd9DtfJR3FjfFBkX6rSaReSa6uzqEErghPjm",
  "key38": "4pCQ4W5T2o6GRnQhwenJJVTesdZWpMtxBxX8n3hpGBsKZzLjb3ZWUygQzchDPUDnmnQ7mUm3YtDk3WdKhHwp9Rrn",
  "key39": "35V4XM72Ndyc7y4rbf8ne9Vi2roUNszZUtwMKH1rYhdqGB9N58qwDTKkU7k626FuRsMcWumyR1u7aEXLpPYjUezY",
  "key40": "3acv4Cv2ixvvEfrvEjvUToF84kegFgTdVds3pV7J7VYRFdjr1AN2F6HzxRHWusrrbnKfr84pbneTX37ZbgqYbKGR",
  "key41": "A5GPJht1bqJEJf9NztjRa1xCXxdAhKMX1S6hStSNToW6J6nxcWXdPNqPt7NYsiQhDMEuCu8kCnzoxtDmAj2fq49",
  "key42": "2awgXVFjnkYpHnFghpXiBsuzHUt33j6vG4pYtncY7bW9KZ2zPxk2YL4borV1D46iH7KodGUxoFekPra2EZNVp93U"
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
