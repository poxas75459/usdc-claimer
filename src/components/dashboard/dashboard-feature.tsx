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
    "4vnY63EFj94prqQzUzBPfjKV9fTAqMEM3a9UVLEWA3qvCdyqJxJv53WibufGufSn7Ern9tip8yu3xRBx3rMwLoHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fMW3GBB32aXp4ZCBvJPturJdDyP5pC6bnvjEo2S9nbks4u375dJXJppwjC9cf1HASX4RRerwkvNnMkRT6Ne3QPh",
  "key1": "5cNBw17Vpw8qiYRUhYxiQRS1xCyvWcYpZkARXAxQXrELrUXo8SJpfLoXmszyNDn2TJ6xzsjtqXxPmBHPC8yjWd9q",
  "key2": "5zQrgkvf9PSMaA8dhrE35DD7L3oFYQEfAjPEML6BGGaivaGDroEBWnPAtYqECV3VXdKmGmAKwrhUyHRq9un5JFdc",
  "key3": "3L9SdLzvD55ETzJeNjfytkcSkenm67Xu8DDhP6fg9fE1oa6LasCJhgNCpmLqHCKDnp4P2K343X7SpuGxjPsdTTjH",
  "key4": "5AQwu1RWvrUDbDpCw6xJyFE4TBMzu7vdsxithtQTLUKwk2dDTAqJ6NWRQpBJpCr68ADhQGihsaBT4aPPtjfZjf1C",
  "key5": "QSioS5y1mQAp9eMiKqpNN7Hr8MRg79znq3uZU3dyRL6TPREt3cFbvGiFgbUjA5KEWSxuA3jDwqEae5r6LdtZzVa",
  "key6": "5GKZQkhx6z8SoCKjor8TsSY2Wh3PnFoFkPnA8bEQFfNPyBoZiiJtPp4nJ8JxUBDm1jWvtYqrj3BorDJpt7pLJjTQ",
  "key7": "4CMYC5c27nHCKPexQfmnQdRZMbfc24epiEgCyyuNKtN7qWnYnSsuuT5LGFjzfRDoASZyNUh7gCuof8WiMtBJPydF",
  "key8": "4D42eKnk6CVcjz1TTKftKHic4TYo5nqdHCUh1Atz7kkuqCiidk6xqZhHo1NWdhZSvSGfteDcx4gvSZLCnAsXRGWX",
  "key9": "F3YbPzYNUvgtPaCv5CxmGGcHUQ5fkFro5ctNcqhUEuDAXWL6Z8Bymqomr2rqpgLjfNDNfcpJRN8QwiaNpSmkWsb",
  "key10": "3WjiXakbJT1tHTAb2Pfyq2dXCwk4j27aLkuQa7GsbiRYuJzvbdrpkpZQcGDcv1Kc2H9Nw3RWDqqffRFKHLWGANfE",
  "key11": "Pj2rp2B4G4YQptZDgz3dAP3nW1HkbHNosqHEoYT6mi3nRbM9D71iuxtTNHTvkNaZwVgDRusGb4gHGKQqP8sjzpB",
  "key12": "2Wrm8fCBJHGNzbZoBRgTku1635dXSmPRFYnC2mhke6W9brzDZJFcSstbVYPqXmeKXSUY85qWZXfHFTvAcJnc5b9v",
  "key13": "46BU5sZErPcqXxJ9o854w8D7YUrF7QX4Akhp4pPSWnuoHHVTcodCiHQq7xvhgJeU7KNk7ngWh2yghyicm5SVrbt4",
  "key14": "eQVYCWwN8SWM2p8QrePjj7daNiArnVaPkLW4fTf3ycnKCvcdxhLM53cAn4bwDPhFhNATGuorMTF7AKkjaJiH3ru",
  "key15": "4GFbZ8teMM9BfkeGmeMXVGu1JJJrTmqqEPtNu7zxVZXNuaKNhzqXyJ4HLuSLcskiquXSjxZQDKJ3DiSHm1j6cybB",
  "key16": "5QPTStruvVqHN4D732asJZUjkHFCmiqQweN8BTS7MPLaycv4PmX1721GehSPHTP9E4UeUXkeWx5hNm5TFq9Eaz5f",
  "key17": "5qzt1Mx5yp4o1ELwLcrqMa6inFTSG98nYhPDfSR6AeSnmMFFsx5uQBx7psE1DpNjP8Z2jJ8VHNCwZUt3SD7MJExH",
  "key18": "61CnJjNqarpFgmhp2b9aBreurEUYRRaEfxsbLK7LfLMpbT7Si9mWrAoHeA9amwRiSDaNZSGF7rSUiA8sX9mS5oyi",
  "key19": "2X7SsWuDn2sve375srVsbUM9JJh8Ut5KL3BQybsifiozqiBju65eVCy9nvTQJ3bZaN9oXFC12ZVgLz5otDi6US4m",
  "key20": "HhH13aVJaXJtrPT4Zj3eDk9HYay5kXHvRaGDizz7hfuhwD2pzT59rCEcBWfH24Jfb68ZibtXRwbhQJ8PxzJ68Xt",
  "key21": "28gj5wpzny4UVKC5xcC3RLmpnNSNwDZKw5hzDpgCzfV5Qp1GVT6n4jKfMfwGSk1URFF7AW98wU17FMPtVJzYoYXP",
  "key22": "VR2Lf4fpAR1dKC4G3SnuvESLYk3JfJrezQHcnnhRY9MVBuNRfxJuPvrRUDoQeJTYHM75uaig5Vosv5kKiY1Ri1c",
  "key23": "L2B3daSA1mc3j3hidbJKrcPnuwWcdEPziuttHXBpY8GnBB3ZVmZ8jKQHmuk58zjKtA2pZNpuEG3tBGTPSMEPKaw",
  "key24": "3sfJZSjd5jRgisAF5fFRVK5qpLwqYpwnSbzLCXaAaUu2kHa7euqk7Lzoi2ZJgpFdJdefj3cu17LfkwaibEtJK5Q5",
  "key25": "4yjhaaV3XPhsCdiYMSG5zvVAJxfTSGus1qTUTBLfzaKXk7aCaQF91VZ5faUUMQoQcY5aQR6kHFW1JMRZcAxBfAUB",
  "key26": "4J388MFmcUQFXwGTf5AP5paqDgRKjcWDtZERua4PkEni5xqYdaemKpJ6Gmbds3svVmi5UjrY6vazzKkGARgajhvx",
  "key27": "5T9ZSuGLTQotWc74VBGF3uc99k1grwFM7VhzT6pu87m81w1sK8Avr6xbim4kwzCTcbSRFmMcnhBBrouGN1iMHnBz",
  "key28": "59iaFBCYCKZ4C2PRsGV7Lws9xonZGZvVtaqy8DsL1VHLHpjjN1AttgL243gwkQXMFquPJZFTWWgwhK8VUgYPBMte",
  "key29": "k4FLcGCC5YDrXBCgXmYsE53wW3afWQju3gMY8Vkc32S3ixfbxyGs9iz4ccWmW2Wkc7v8GqSJH8gWnGJZnHCJwqA",
  "key30": "2PKQR9sP3BxdkhQ3z8wPiT3UNt9Qhq3aP2Dz2SpUANdH2rbKMutFDh1A4dguo93pnNJQGZaBqKSv6e4zgnhAwoC3",
  "key31": "4spYKWJaE4ZvHaxbMnBho21axBkBsXQwfCK3JdVW7dQ54faPCRFQ3pWUvTD95wvyz62JLUbaEvBpBSHnrGWhJvAJ",
  "key32": "2LM2ocN73cZEgTvkv6B2TFxnCY56x18xwB1pSr7jy2h9drsxttwnwSL7eVGPxpzePYrtgCDMvTq43sYkGr89T45B",
  "key33": "5Gxh95H59NA8XV28jBx65oMKFiDNayBYwHEtHBu3N6gP8r31gTJG2vVmKKyUjLPpxfaJu77LC326g7CUENLBrHtY",
  "key34": "vZzNz9mc42AhvzyWWWpxtruh7kGYgcRbh5P6ZJcNQZJZLwvDJn8117JUnBEiWhBCmj7QVJyu7wtgyv4qyW98Hvj",
  "key35": "63m5PdRDYqrjmNELSqhQDpyuuiAQTB6DPKzn4CRZsCxyRExs5PgYSzkKyuYTpQe1wYehA7qqd3WN9fNLUXa6L3GQ",
  "key36": "5p5PQv3Smg7eDNBGLqcLaEPNyqLZ3QoYgfg7FE3KCtHXk86q2wkkc9ELoHtHRGYWXQcWQ9hQuA36SKfYBmRVwKwC",
  "key37": "5MeK8GoHVqaWfbGbpYosyxmadcnnoGADb2Za6YLorjfybD2hjZwL7j2aa2fPEDo7zgrvXGJFST7iLFS7DF7iUBbi",
  "key38": "Ljtuc4thfLUyXn6mzKPiLsDjrmTLZRnf9K9EEjNLz7xATXKjcQQctRvppYMtY13vUxayYgyVX9uAE7C2twyzbgu",
  "key39": "3x6F4DQH96ab83NZ3GnMfXr5gz1hqAJrQGLf9SrLgMRE3gGWXZ3xmuLeevYgTRkZUQG1c9i6kVDci1Ar5gfGj54J",
  "key40": "5NYFz8c463SKV4e4Gfw342XgpYCrRrqDXDCEHBazRJVSJB6mGzQsVQnnbDs3Zzkq2WavhrYvvkoxiPkj3YE6Q61Y",
  "key41": "4QHWk5JxCkg6Kq4GBsPgsSnANCtB9so8VXvjmayF4oNKL7HTBeEC2E6XTsxZKagmz9fhrHGMPQCoZpGCbfzuGqCT",
  "key42": "5q9sQC1Yi39kTF9s6YmDCjbdvvG4C3U6wcFDuCLkAby7xr3nvx7kCWe8dzMnd9GtSL3tMcKSrSUwAPSu4eHsBqyy",
  "key43": "3JVTD5jMFboJMSjaBr44TTFHfJ3XeuTCFV87ovTyxHTftDFw4Kc72A2W1NoeMChSjA8VgTNjRzuqqHas6FtV7Dq1",
  "key44": "SP8ftLbw8jPVrYz9RRrkLiv6jtTF9wJaEHX8iGqweZrN8VLecxNj54MM4BRV5dZLPGTbeNBmog2UUW1BcNEvj4T",
  "key45": "2JQi8ZjG56DcijifRYKLJfDUk3FcpKLpdkaTtJWppBxQ3UcWb3nAz3TXRTpG41z7tUUGkKpZSFw2KZRhEyUapfda",
  "key46": "4fx2WBHHn3nVFKRWGiXW2EssB87mHF24CzWTUhgzbEYgudTbPfjJVFuGgDuVWPW6pffcDy8bQ7FwHh4wr8kPVoum"
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
