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
    "2cHXnD9eR7KuwE79tc3CkMvvRmXQa7eZzVyLi51CVFQPEqDm4HHmjHSnXa5Dyped1afkEcDyQZgRQTc93zBZW7Vp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aiafVN3YNJJxrUby1Z89g2VTNzSifBxrJ8LFxB8GtrdHiRZKgKsGTMzN6ZC3YzFkknzen8KpJggTNeJoz1hwNs5",
  "key1": "3moqxe3mk2YhoiNRxReQRb2pAJmgTAvvme5rzrqw4y3tHUd5VNxDWWkuMCCUM7NnK1wFkoUUVYk23U18YwFvPWSM",
  "key2": "776V3op3ZpXi2x1pVVDGnJNaWqc4hESH6b9ghr47kZJtQ1n4rdeuwkvwhTwKDcpxSwT6eQ9yTLZgSmUpXhVSy22",
  "key3": "39YQqRtxTJYxFDgmv9xRLLJjenPfFiBc147oWRiMafCkNaBX39keXfsXm3F6436xRdfZJKzDSktTXkohEJd74r1s",
  "key4": "5RD7TDbpm6eXRgHN6skGpF9csDwAzeSJpYtTrFdsi2XGESWvfJuodHQeFYY19jot4UvYeNQ9JCxvsLyHU6hMF62f",
  "key5": "66SngnkWED2v2tfNJ7R9kcF5Q2KoQeY33YPdQSxT8HqQzeDgDiSdMjpmKmmP5Lg1iZpSDWjV8Enycpaigcp9kvHb",
  "key6": "4dovXckjbtKncFBwns1iNKsE4urT1a3YnMDbd6S1zgTdqkhAKvgZD9e6bm9QPtLpHbTqcEop6xvo4Jzxy3LWwRMY",
  "key7": "2FHak1mhzkz44kVrbfT2i9aA6hQGY9RcyHrNnqTmr7sEpKv1cSWYxP8PSMAmvmXLNNP4V8iQaLMBLkUUqJbBaLe9",
  "key8": "4m5wDpTqKnqsCXRtRSB3iFJzSYAo1K6A6qb8ox7iKTs7fSjCtanzS6s3SJUZTB2YUhL5TCQHBXE6GwJnGXpigthM",
  "key9": "4wEitwsDhHipspk6YrGtL6dHr2NBrnBVhoKaTcdSPCenW1oWsqQKo4x7Z9K4m7jQau1RUEriXpu1aWg8CzqoMRAf",
  "key10": "5tux4J7CBXSHWMdtKYdPRL9kTtVgHtMmvR3gsFNVfwHLJ41gEtCa3kWRjbrjRd6c6YTtxUx38F2iAxC7vqDnf1Gg",
  "key11": "2DnWufydye7U2LT26wqL8QHHacwJNQDGBxPaeY7enjnV47WnZbigLNhFaCZhj9A6Un1JevnTFR87yBziKkExJGYA",
  "key12": "4KhvfU12y4TBWyHm8kGfJAnkzdzFQgo5EY7YnVekPPNJrvV4c7Z45eUq14eMjYVkG5pW4qxm8YVVkhhb7tg3MYct",
  "key13": "2n4FYRhN5X5hdKQmUHMzEZByjNX6yHpbSFgAveDVNufNePwGWMfQKfKLFbjQG3VFStAE5Len8MkfJMtrSMyyXj1A",
  "key14": "SuDLKLHEbgWMhPAZf2nHFsKVUUuZfgyQL1u4RtJwGeX7jpLoTbbMtJucd8DNx3zXkdZ363TnSt1G7fXFC4CVK68",
  "key15": "5NwYvQoeSkXzdnGfLGXLFwzu9KMnutJTsKoMSnvyxYVwEGFeo7W3GBffwqfPvU2orrXfCdRgJd16SDjuETMaRgi3",
  "key16": "44yptyjGjyBw2gY9krtQQVDGZPsRJoC4TScywzQGVVfiaQzVjdatEsMex8c7yF2JDzRwPEshSibtu7Qu4F1QPUm9",
  "key17": "yoTYhxhdkEsPXgCSzp5rwx3ngBe61QCv9nazijkQVug5ZuDKZXHu15L3Q4Dbb7wCnAzmAVZg4jv8d5Zmmahj4W1",
  "key18": "AU33sxvgqN8BM157t4VYFmvbZtdf3QpWXD2euhPg3SuHyJHQc3ExPvVV2EKM93sQSvMQLJfcNHkN6kJwAtS21Ct",
  "key19": "3VigX7xjpJBPxtgXe3zPEpdKJEQM19XgevNSbfYRrkNbLqyFyUnYLNLFTGi9atobvA4uh8EtoVcxNEme8LdsW7Uq",
  "key20": "5TH8GVessEkRNoYDBYgKtAUhiHYG3W2J4eZT7W5w1Zqi49pHuZ86K8s3rfGPvePEGUnmA42jd6Fpak3tvaX3hZZC",
  "key21": "2T4q8EenL7QBcqe5vWxymAkC6RR6AGmRuUc1rh9wLdGJY8GToUMYwCFQrTXKefWGYTHknQZLYAbHFN45byLhvmfQ",
  "key22": "MrRHf6YQxU4WeFq29w3L533V9LeUKgvmrLKv2q1FDFaBoyxbuGezcoYCQT4f2CHUFmcmVA2vmLZPF2ARRt7qFiG",
  "key23": "4btQypcs2XkT4CR73tVtyCkPUxFWUYbtD3MDQWRGwvh8awmaXCcfzFgDPta3cq6YEKUH8LjyMPpqroSh7qzLnr45",
  "key24": "5r6i6v2o381eU7wfrq3kWv3Ve116XNRHvN1NdCTLdFxoo3DmzBFeLerM3P7d7KEkwv36gB43UUEbWJx4MJuFs29f",
  "key25": "2nwdXSPN7vFxD5FBiNzo15E1N52K6HDc29rLD3bth6KvLR6eGZeA6vahAJMJ7L4A81Aw4n4CD6uYCbScJpyLWJGK",
  "key26": "GW4YMZ39qHM5VS7z6EpKgHddbnUD8P9DLcTxPdrjZCTjafyRn8F6rX7rQ6jzkNzn6cFyUZUqdCY8cFmHsJw7k44",
  "key27": "TXzoeo35TY7q9JerMxbXGs5W2ebywCmzZnHhYhKqT5oo4ddEHC3vZHZLdbRD1KvkeGxW8kNP4S1cKCLmbH5PcDJ"
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
