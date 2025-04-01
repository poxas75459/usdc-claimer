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
    "3ageXYZSgfaCH8yGAszy6Fx2gXgdiihWYLnw5BGyT7SovkNaG8U3kYKk1eUjXnGPDL9pr3uwByTGvgod9m1Sf64M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UnMKs4QR1Q93y5o1ndVFZj8Vip4MVjzDyfhUf6sbjPmiJp5vy6Az5haCprPvpMb98AECGHxX3RhjRKnY6EpRp2c",
  "key1": "28nmRmWnPP1YnhfRnoUnz7gm4bGnrQwRri5TbaP6bwE6irGwLJoQvzcvcJRAKx3izzDGYW9JM1FwzD4SMBKignSz",
  "key2": "5PCALyfExZXGgeNVJzrJH17S63tN5qB36VcQaKoGudRtsjUANWqhCK9h28ubvmoTXfhqXgKkhWvA9PQmkUAhZSgn",
  "key3": "323NNE1MZo9yqeiw72qo3QiH7LcFEomCFerTf98DULmTc6FPLfoWW2gUagejt9R5941LrSvKw51u6zsBTbpmGdyi",
  "key4": "2Em6J5Dmi8avraYAaS1YcmHHNMfXqp7GX9M8rr3XRNMxkeXKKda43bgqDjPmTQXY6rDnCrRGAi6M5r2rAULeNcL6",
  "key5": "5Qwy6JQzLuWU6wusuJLd8uKM1yK1YQZwYFbJJptWrUwc3SFXoetcwX3VKn78uC3yiW8Xizbjwrcg8ntuGmRLrqqn",
  "key6": "2WA3YVKSiUZyGcyAdd9h14gGrvPcqxvxwPiauEbbLFxHvnazkCYKZdP2X2zDEnuwNiJ4xL7D9Md7yrhjKpYJVKAx",
  "key7": "32bzAzjewCAWGFi4hKv8iYqxznH1zwQtBhWM3iqQp7hSRPMrnVhRaKn8BqtMSrkWoAfj1rYtBf7ScZXYnn1cys1",
  "key8": "VT6bsf7xjAsV2AHmm5FgQZm9kVgEkmmHwUWw4fvncrMW2i1PfETCyYpuv1GUfq64ky3z9oQyc9LHuTN5Yc72hEs",
  "key9": "2gzsk9SvRmAHArQBZD63593RhXYnWYnsQyxZnVzAR1eRPCsnvH4S2Pdn2NNioXMaAt7kZyHNDyWfvGc7Th48wHqZ",
  "key10": "25TTkzYB9gmbvAXBDF8AGngNYS3AkH5w1jjHMNKnswBeJfvL1cALsSzjRTc9YjUTXAyqEXunyadgkYZQ29esEayw",
  "key11": "zrHmhAWva9DuNSS4nBRqYDdmfmBj1p7FJAVjW4u95Jg7r2MPSb5uZjNQS2AcrYD31g7kNicwcHyUJu9FipqySpt",
  "key12": "5qazLmoqtV8nhYQtiejRDcSAFr6datfC85LmvaP5Dv4kUh4prNq4hbnjbzkb8pLtnmjGULZSDT4DJJNMMrs5TU1D",
  "key13": "Re16aaCAUzZMHTQojGtk3aD7hLcWeUVuiAPGye6QiCmVy9B7PH1od9pUyZoTW6Gd7JE9XXsvyjZbxMvGB6Hgv1M",
  "key14": "2bZJw97pzg34f81gTAJE9icxc4Rc8g9LwxHkKp1DtUnBsEe5YKEQR9ZbtHCcfKifBdKAts7k8yMEDC5DiFWxHmbP",
  "key15": "5TA2mJBZqJ3BPNGesVTMGrzA2HeLj29q8pnk3zVhKNAqYrNXYc95ixjvhkzACuxPSjYXLMuYYdePduLxu7Zec6YY",
  "key16": "62CS1EVFJdJbvp44KZkA2hhyHByB27G2H8bZ1wwj4A4CHCf1cr3XroofWmqpk4HviAxh7DpksaLKmaGwF6mLGotu",
  "key17": "4SqkpRWkvS1vWy15RopdivJoxMpfYaKGBtYVNufPnH5Aa79rayWMRiSnd6th4Kuagw1kKgVe5VNETPKGLCNMQbrk",
  "key18": "4VUQbxFNeVspdynDhEmR89GX8TEQsqnjrQV7xPcN7kU1R5CxhxDZ5PLzxTyiAmKHS8zZqsoumkFUie3SnBKrdUwF",
  "key19": "NMfWkZjNT3U7MZiBTP6jv2d1D7ffh6Z3AEh57NBt5svY7gtoSAoSuRZEAv2KtkSjtGqfHAcFR7zYFuo8hxCF1NX",
  "key20": "2dJYirM5iXqtu7hrLsanjKLZR9E2dGhhedzdpcC8PCKXGAbMfShQyVSVLWuk9KTn5oC72CCJfdjDq9SfWxVix1zo",
  "key21": "24po8sE6uCPi7dN3Y9F94Rps9mPAVFHAVCqe3MVGVk8ipMVjGCmmJs4mvJHbDrbaTEk8Vm3MHi4eJL72oEZ1rVra",
  "key22": "2QMP5qop3wT2iLqs3yDGHGfkeqAJ9G3cUTGUBFd8sQ1SS7yBjyCwCG6xNQxNuzGAhWWXsTAw33JjxSGkcbK2fSXn",
  "key23": "4tjAbwNX22zgYqVNs4i4WPpprsCtcbZesKe8rzuukexxR7sLPmEZkiy9oaB97wPxySXSvtgjFueGtnZ5eB1fat36",
  "key24": "3JDBLYBEj8cxGufaMB7yvEsJEbzdjhGD1SVgGxDMTrDJaBVgaDD1dcLNHwNKfBbPTxVMvsvZwG3yjpxicLPnTYVR",
  "key25": "2MxxUR6vmrTBtDS4sGdEB5TpsyTPEwAqysDypDfD94VviJjtpYpSn6fEbN75QhUTWEvQ6HiUZf8t8rWhmseb5Ewf",
  "key26": "5oXkbUZkdURDJyrg38dKetDGaHcSCRRta5aSyyLj1UwaTufPhjGK3AqNKg1yqMHBD8y2tg3VgHdJkNnH2nQy93S4",
  "key27": "3ZntK7dmxvYx2Xz479xyey8g9ER33Lyjg3cpoYhYUDBD3eSg9GLTuDoVdNuBQdkLZeYHRKcqLSE1uMiWLd7C1Mpw",
  "key28": "3DNSW5dbjxzt6VJ3k3JCvg4cKvSTki7pi4Mb69cLxFsxz3J6MbHHZqzrt19TqPtubyaUsvTSCVjtQBFeFQ3XSt1m",
  "key29": "34MFKCpzzSbkPMDsL9ppPDh8RKxUYFo9tzGhsQVJkcsAsG6BMXpuzGjsMxgZPqKG9ZmF22AF3kmYbFZsj5SaKtoq",
  "key30": "51oHCpd7EK4h8TMP2itKY5hYSCq1Fnef5gqq79H3ieT9qK1CENgAjVkRwzmjJX2yu1NnbodFKzr35xSNbhSoWjaN",
  "key31": "3ZccR6qNEXahaHShNbmkiZ8tyzc3wwxXj6NcASrxyXVGavS3rZk3d81RePZWQppHpYDTevydseR8sqnfXQ4ZDYMH",
  "key32": "4G2bMzXa8G5BCrQ4UbzWMxDK4bHC9bQ9mhGwxD1jKqcJ4yQW5SoN5T19xZkCahEJBwdnR1wSio6MU8LArX9rmr3K",
  "key33": "2gV2VfQseL8k38e9KgY73455dVLDc7HqUQZ62B9eW7t7JKuz1ckL5yC4PzUUvAeQmg1hgnWqNwin1Nq4vXc5z22R",
  "key34": "YyqQJsxM4vzLjgfxtigr9eFhxv6viBo2vYmUYnZJYGzWUY3eKoMyxz8VZ9XBjjjrr6fBWFHgVJoM62ho6enLDJ7"
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
