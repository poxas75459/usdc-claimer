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
    "QhGKZoqnrYBQxfSriBNkVc37s4TU4Yqd5qUCSgq97auyVwHiu7uygcQDnPBg9cGHPk3BvQgrEQ7DcZs8e7KMaWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZYuNXWwgP7W6SjSM91iXX7mu4WLTrTPiUrvRXBM5CFCNHs73AZDC23hM9F6Vqucz5NCXLjTtTM8ytS3PS6E84t",
  "key1": "66tq2mAZ6ULJVQg41AA5e2ATT2mVDG9UV3mzDr1zAsAxSwvckjREaz7Fw27uahSVedJGX2qd3kEsX3QxzuXnCF6V",
  "key2": "4oJZSpyUy2fHFsMZHR1rhdP9vhCRRWKH7gcFmvWMKZxY2HMTi2Ej89bcEE7XorhVaMuVhYfzcAoU4csa9dXoW5rR",
  "key3": "4TERuotxav6baJ4sHif5T1R5aYoYE4Mkomqtob7Xwk4KawD4WxPUXWwNWoxhmq7jHh6NxzCjncgfnqqSV8MMwK2z",
  "key4": "35hkRjJ8uB6zVAPetdCtC9rCgFd2PRDmDm2Xz2mPtdcRWTRXcXKPcjPoQBavTLJw8b4pnPPpdsJxnBk5NDPmRJ96",
  "key5": "5yiB8QcKbbCTWfbJkKy4q3HAxMF3M6ZSkY82ZduSt12vv5MTfK2LGxcR5fm43KsVrqbmCtxDTecumcf7Dvo3w7nM",
  "key6": "5Uem1YyMfARSm4EzwTENobyALVD1d3Y98g1dVL8VGFt1wg8tmpfL53Nqg8op5hV2aJC75o5NtbsLaWFZJFzw1VLm",
  "key7": "5tKV6BSpAkmFTmiouJvhY5cPkuoxNwGRPCcHazhmgXWaNQURqFisG6Qupn2Z8tKeJ4wLJ7mPvtWEfpgvfp2zA1Z3",
  "key8": "5BoMuxAxJ4qHXMHJ191pxGW8AVeUsxq4771HDYFfe9pxEkrqCr9EjmX8xwQ7EgFe7jSkc5Bk8PUhb3a47Bc2Va8j",
  "key9": "4DUvtGLTLp1ZVFLWbdqvKg8f2wjzuUFF9nQunQQYWcAdbBPSUrNZCRsht22CE4r1oizKdBNERj5HQxYXBDRJrNSX",
  "key10": "2fcdymZkppLpec2rJfrPZ3Ezp6YkSSd3wDf1jkej1T79yEy6WJ5b8xrDMVyBzXrHhwsMekCamNRksGUDszduzWnP",
  "key11": "5Za3btAeCNvBqrh7aHt2crg9Lr48XBppVWmrH7w4pc7KUf6AemdAQExXddyTZ7FVYMWjiKXo2DYP8LBPCs9RvZUp",
  "key12": "5jmUbwzzwRdKmzoDLro7xzvbDcqMnkZvqJ3mqw1ejwBPzWW7NjewayELN3dVwX5dCGaW7drXqmcXFFyNXB1zGva2",
  "key13": "5xe7tGZzxUBX9dartw7GgGofQC9M1XdhARuhfH3SdBaSXxUGfNDtGWt6UFghbMNq8KjTpA7rEmmeJxkBZ8fmRP5D",
  "key14": "2ff55AJDeg8rV1a9nTqYJFjBeitUvBYN5SnsCvv2djU68UzTRgTEXx4Ksv9aeXqNGeLzpDSDbuASQoqYrJBSPs8g",
  "key15": "2io2oQGnf7i4K6frzFM78ZhKdFmJfjrDQErK15WzioDDBZ96mrgFroYAMbUSD16zBVYsQaX4Pf6die1SJ3UHGrKh",
  "key16": "5x2pZhSCMEPZxpBQLmuGJxrGaKLGNn5q92jsgRmGimoKvDm5Mzs9RG2GwAZtuf1MSSmEoPzA71r2SqNhCrfCFWWA",
  "key17": "3dj2sceYuh9tdChuiugdwbeZvpDPVAzgfkZ9M2AmYq6yMukScKv5LE2RXnodJZdj4ZANucmpMdNLAcyMPvsDU2ru",
  "key18": "57TMM3qKcqQhP6YyMd6sMLYAS8H48v83gBDE9h7V9XuyqkuMZY9GnZke34q8zsCwzZRcMbUT2FbE3okGbDVhRenA",
  "key19": "4qoQJLxB7Kh9UgBtK8343eTtRqohWzeZArckVYfbd6TMeFcpfBpT2drzaPTJ1QiGnHWeD6WUkQ8gxmF1w7ox9JVF",
  "key20": "5LKWCZssP3rsCvhPiynjCGQmUVJgELN5HzrwpHuK2QHSVgGEQZgNWm7b1dZJUnzruunPZ4HN5ndCxrRxv9USqbsL",
  "key21": "4LtPALtFQkFVXMYAoRUC83TH3xiwbWV9SDfYJnjDNjNBe6h5CwvQ2UxdCQDyNaRqXDGGMRsgGiMZ3tjwZdN9JSWX",
  "key22": "7zcSkyDjiG8aNE2ktz5SdyLhXv8q5RAUC8Sz1jCEr35XZQgckkwUDSzLasVV9DYEwVtfGhpfMBEfNEZr6HMGM6v",
  "key23": "5EzFnrMTocumQb5dgNuJkde2KcXTQw1rXvL5y2cpUtpjqYiJsBHUM8bfhMxyxPgyvEPS56TdKRSqLcjEa1SkWhod",
  "key24": "3BmK77cLFnvyGAebnJxgm6uwfhZL1MGgRYnWLJgDqR41zhcTpzND43ovuqbz9p7oEMAAsKhnWDEu7LaB7UNe5pVu",
  "key25": "c3vciAavgM9zusMMrgnuXZVS7UpAWopNHoTCQ5iWFRAgECuQbQ29PrH91gcfBH1z2ZAKgyAjXCbZnmjgcVBJXjN",
  "key26": "3oSkZrUn7hu6MAWQUH4qNg9RBiWc5GkVNZmyZupnPeEJd6eVv2EmN6nQTWcnBH38K3RocNYhbzfat1q7UWWfjpnk",
  "key27": "5sCL7jAgUKuC6PzedNUE1ZUYx4hBNK7AeYQCzV6yM27aTykeVeuTu24yMYRrsk2FmsSJRKEisKnk4Bnv3SgTL1QE",
  "key28": "22mvgxLKJEjGvjedfRGYtiTkFovGJicHTUNZCHTTAQXLnczgkdiwhGEzDgJLbd13xUyxeWpYbMXaabLK2apF7hVP",
  "key29": "4XEAgZAe4efpMXnUXHoVmezqxssRGAX18Ma4ZVZStbN3rjJeZ2Epjp2YGB7MhuMC6jf6AFUvuSCY2tW4mXQA8K3i",
  "key30": "4SRZrQnVWbT1ZUjvGVAWgSy12iC1xsnr87yRCNo2hdiQwYiXABH5YfTXBYgTvZsLMwzS1pUBaHNY1ECM4L6nmEHR",
  "key31": "4QPUs3ricFRNpmjbAoHJoG5BDmEgBCC2vD2o21RFmkPEanUQQcsAW3Q7YVRo4GXHrKa57pAUv69mxg88EuF6HSVE",
  "key32": "2taejB8xt9V3cog469TivLuYFEBDLVHcKr4DNCYStDmniRW2A3xQaxf8dfjCVhX6CtLj5KsecwKcvDPQNo5sL6vH",
  "key33": "5sA1PVvpWDgE9vNxsd3ttVKp2VPkGVcYhMjeRjT7cvzNmNkJ2Wocsypw6BtrdpdBqTZ8P64zXAZstPCyVXBMpKwa",
  "key34": "gb7McxBouW2TgSJJJyDdHfKkedYFgFqdmyW54SkMAQGnwpAWpHyaEkjeHKiftyLVzCyFGxvGxjAEk35QeMSZ32P",
  "key35": "4pcqWf9wgDoinmWgr8878wcHLpEU8TG6Cn6HEk4Z4KeVpuVNyhdwE92isthVHLtrSFKHutPXYBPgBFncKhZXdzjd",
  "key36": "5GZmkUYmGUbMicrTdDkkkygUywC8nGAtaayvNq8ebqej5Bo7jRXHbBYQF1YXmMRWi4sAN1faKEyzgttPvJJgrjE",
  "key37": "4tqTcbRsapDFCUktaJSBhNYhUk7SqAWbz2kiaUYfpTswnxoyZNHj5YNZC7CQqfQSqkTsdqiyG9FdPHsB7LYAr7EP",
  "key38": "ymyjcGik9wGayZhA328VdA8DFN13NWGc9DFtsbRUnfrLZmC4pzbMzUoDnhjzUu52N7vHHtJ5TfVhPg9g2qFtvM4",
  "key39": "3PzgQZ7kwa2TjUV1GLZQo9SGSAEff7XKQTgghRAA4BewTbZDqjvKExy79gai1hH2z3LWQURawdf8up4TPSoe5koW",
  "key40": "4RnB8iFAE4t3PuScGmaDNG1DScAbYtUoBWaCm15iqq1dtkLcqxW1Jjf3VYsKsV2tj4ctE1LXEaqnRRLJfrBrBwRG",
  "key41": "5z86ke1zhfmDWrduqfijUubiZZ7BefKv6AxaiHvsxBnxThYYUUZGWkR59R53YyB2QELkZFETT2QQaXfPVWkjjpmV",
  "key42": "42YLnc2Kd6TAj4cAtK7CtJfMUY8y8hTd42istXm8xiGXt7NGEbWK7XZvbSvN6SgL7CsTpD71Y4Z2fhiSxoYAt18x",
  "key43": "3GPFSZKyi6ctiVbZPX4tn1emVKeV9v5QzGYery6o5AvFTx741aPTJpEoPEfWrZapw9gw1A1g6aXBsbAGrQk3bdS8",
  "key44": "4C5hcapB8tMWxSXU8oUciC6nWv9NPBuN3V9xpJXbdJeLtMx24X1GGreM8eVRjqRiwBzFLVvw4Z7Ft7xMonMJL8QT",
  "key45": "27dqusUuxzG9vtx7n87bLzsvAyUvcFiQ6BhVwRTtYv6H84GmgsMGgJEBcDqpGzcog6cHY5LYp1B8aRDNnjGoDCVi",
  "key46": "3Mq8qRsG7BqXiQszjyydgJPBKxEwj7iqgepaY8SWTM5b7tGhc4e7Yr3r9VHWHh9dBbTfdvfD2uosy6DyeSSk81h7",
  "key47": "3Bztp6Sun2zLE4ughkqVbPJN4jA9Rsbye27wm65oUCWCaUUPwj5ztPm1e9ajUJNYyPwRqAKVReWE9dk1y94dfYAM",
  "key48": "6342qhcHQR262B1w4dBQCec8B6gCs7Yrz1P5ZBLxf3RBftEcSEGyaZ8SRYCQ18MUwKDUi19P9pwNUA1g9Zz1JE7W"
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
