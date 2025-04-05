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
    "2fhgffPRHjadPsokimM3B8k27geU5jgXXsdDh9pqqGosiGT9eZS7WMs7LiyFaLy7RUAsqEuwno4EP5UwKjuzAHdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o8nu9hvEsAcjfzphJGAHYvyKhTPKvDkZXoR4NhChDGadzqK3MP8Z8wTnZjrHfd457w8UXq1ZFZqyJeRcwNRaW9V",
  "key1": "YsETTdRyUomLWgbPiJ18qzGW6pMd5bsKrtKiEwZLvJ9yKweQbRFpGycxg6VATt3Mjz1s91dMzUJEuK5ht5xm9LZ",
  "key2": "5pvhRUcKLxN4kWMGyjRJTU6YpV7SotqtM9Yarb3bfFvXKBFUxKYCJAjb8Ntghnk2eDMqHzKPBKKzEoy5DLxLvXvx",
  "key3": "2sscRLckTkpecAT9cyNn3yuDgrxzJ53MfjjyxkX2U7Hrri9seR4gZ1bmpKY9pxSZmkiJNxwgodivhjh6S8ZYxANS",
  "key4": "owEP2usrVUEdpsf1kaY18CnE29S3RYinheJi5vAdS3aixBYB7TnLM4Fw9nhbrsgY1ghDZAWhvuUg1o59rnsrgU1",
  "key5": "2d4yNAyqv3DF1reogdCuQ6NhQFMm4Re3TsbKU2VaTxojumEfyophuXWg6BhLDT9BX53rUfg7qSq2vEyAX8RzFiFf",
  "key6": "3mss5SNy4Eay39gvQ4FFNTRW6zyyQXzbXi46qF6wS3RXddeWiNV531HqsNG7NFjpKrtRaxHuHF1u6Q5NHsqycQu",
  "key7": "3DFJVFAvc9fDjpemVtuAntjrzKx2cSKyGqyidb9ban6sPud1Aq1nK2tJ4h9u27MaR4mYqN68Xj6LFRiJL4GxXGkv",
  "key8": "2KRqN9piHfDsW47UCfdF3XodL9viVFPfLks1xQej2FzAmov5AmJ1p3PBj5QQxpazqd8BqC5CHTqcys8YfAZvSa9j",
  "key9": "3xCfkE7v7vKGDwPQPJbREXnGwPayNWwN47HeXKvBVkYeUVPEPQZ4JaoE4RwL2Df3B38c5LLY69v2MM39TKYm1DWv",
  "key10": "iRz8zSTVegUgFCLPoHAYrq9t8ozQj2FJjqXNK5991ibb9NfPam3wSC3TuSYLbLKPAwZDFoaNo5mL5hMDQbH1FYR",
  "key11": "265RSK999sbup52YJjb1nsrER2SJRucWP86vG4Va6woCHxDC7j9muUzdmw6z1FFtnGuVQ9HrZREAVMiUPVTpuuJL",
  "key12": "kQKs6JKZGFpaJFcRGKbB9j7XVP7k5TszTj3EmX7Y8NMjXPJwa4rZLpUBxHLiPCTMt2bdWiYiNxKNTFy8VuWKJYK",
  "key13": "5Kg7GUc2XP1beCU5tZuuqaap7ckoW5hnUSSb63QyXQVwap7cC378hTHo9YB4unA1cLwEmrRqy92DKGEanVeo1Nyd",
  "key14": "3ybWGt45dJGivvADyGcS2QnoeTQJsUsQehRfwWbdSqx2EmbHra9UunKj5SNpKvJukUgv6GTanq6UkFEWYyU9GcWD",
  "key15": "5A3ULE4Au55duny8NU7xydfB7sG4yf5KvcEZgii5rdpvBp2Ctpxn5D6NLBkSKQ6pqLJcbPSiff17mWJBuLQeyaHR",
  "key16": "2R2RM4L35VY3B4jdrD7qJmKw9KsBooHuYX7nbiVG2UGNKJ77PJsPfxWc8vmUgmotBfEQsAXjMiJvkutTPHTvTAHv",
  "key17": "46HTPtkdLWUyShbfFxZm1JyoP7JY98RtNq7Ub2ZtujLUhhXKqGAaaK9kVSWMuSbjDZYpT1Dxi1w8mYb7UtUaSPhu",
  "key18": "ebWuXRcQ7rBXRdEgtEFeR4zQC7VMavmkaB8iXkEczXPDKd72ptXTLoV2ctS862GPm5Vx1WXxDiycqMDpRi6zWVf",
  "key19": "AjzvT77wrGPg3uSxdDDL4AukGnrWKmk4aBw4Lvu7UhWXv8LoY3Mu2ZvkdTacLSCY7YdbBaeeV3q7FsLSCUohnS1",
  "key20": "49gPnu4MGFyk3ULAhEFd5K59tRHrRxsfLcUGSSutCmzjShC5EzBWJPqfpmbEYeiGVaSS7dyhF7uA1c6dHrKYAsK5",
  "key21": "4bAVekQfNJcgz9WxV3hNKLcvjkSPFMvg6GM3mMGW7Njt7zHdCDf5rzZNGbB4pBXnC1fBSaQytoT3RwZZcumjVbqb",
  "key22": "4h3nXGSDRiyv818xDxLhh8oJb58wXjf66jBavmLZ99MTQsT6Y9RAyBkbkSpHjsCRcdq7tsJfYFiCJkxmgGKuhJNE",
  "key23": "BPyTmYAsP5vf6WswgdHWYjU1a6CUV6qT5NZZX1bAaw5bBRmTtL1LjF6QmWKgWuXLkMtoXfzzv2ubmVt8NcMHJxC",
  "key24": "4qaBiBa5bLV6CEVFXwFJxAvuynLtAQekE2JNjTEKBLN3AUvsNRu1psQqCBdK1XxSBeM5tQESZwqPeX4oxMXAszS8",
  "key25": "4UAb77KEQKQF9Hgd5Cjswr1SuJBBymxCFfN2QhSy2jvfGxQoiYybjRoqGaFbb2ajfhP28LEQYvs2Gi2iUgBxJPjm",
  "key26": "2eq6UgyadnC768f5T5LvSdSFNPXNu8AKtCsGHsw1DsC573vsx5SHA4sa781US4gDfQ8vk8uEan3WfynAE5BdvK92",
  "key27": "5UhJ6Y1dHmpSP63Hynn21a3zKwGUEYcBFz4HUa7vFTnw8S2CTsQ4vB6DKumzG6SwhCex4k3ZTDQReubWGyBBWtGC",
  "key28": "iTEHXeVeijbi4NUoKXg7JeKkEJQCcojMa4K6nd2TsXrNDFguNb3vzm8FCenAB9h83nYvULabeDbpUju14zH7qd9",
  "key29": "3KQ4hu3ECFaZYbMsUpAeJMWMmLYGAEaT9GJRVuSSkCxq4mQZr5h77pnv35N266Zp2Dpo7AZdLs8NN6szhHZUw8cs",
  "key30": "3G2LYCCoNL8TesVo4yR9WgZgEtoJydTvs7ZFWq4osqsZkhG2pc4EaGtgkgfwXvytDBCVKJx47L9sdTz8MwVqKN9r",
  "key31": "5DSLmmDXTVtdqxRwJwE417uuTwvyLQ2B2pneqDz32vrgZgZyYJ33kGkN9NefLo8vUcX1XxZp8yRAmwhzn6xDzaW8"
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
