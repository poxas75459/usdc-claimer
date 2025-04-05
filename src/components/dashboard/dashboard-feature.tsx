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
    "2Y8jesVFrYFi1FVfhFCLmjg7DS7xWbWMBBdAfnDTcsDDcVLQ5pQ7wtAu4SqFrMdLxQc4UBfAaW3bcg84rBE35E8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3NJrhBGA1XB8Z6MYj83R8TbUPjF7qDTs4NvyFayonYUgQu6fYond1DtoCPUBb9125XiLHF3XKPzTCHDUDq1yfo",
  "key1": "qXokj2nCizQQ7UrhWe3Tk9izUWJPgaS4389FXzsRDovk3LuPS7atWhrCVfewZCJ8G4iAzjuitNmpEg2xt9NE1PM",
  "key2": "5P5QnQubXfkmThuBRpst3jWhShAe3PgYva2YJWiDdJAtAtVdxSXfS9HgVVYyQie8d9csxLx2ByYV2eN6wiByLWt2",
  "key3": "5FvpUCicnntjstQ9xB1LqqFUXy8rgXWY7m4XhubdL2Lnz4pntVsdbBacePB5jsWNBBkmsRUfwpzjXFacx9jRRU23",
  "key4": "qN3cM7WF7kKW4bAavyVii9YL8Jo4PgQVjTFGgeHwdvTeLNg6ah7hXU4AqnGQMnteu7hx9SXao7LhHtTfUWManVX",
  "key5": "3gNdvx9bp6pqJLJvFF5CWMGz7xxUFMCcjVd5nkipNZhHY6wfFvYg9e5RJGHCdaUshbkup3SFE53juZ5wt24vsSpf",
  "key6": "2bvfwYxjjGiRjpi4gBc6hwMSBHvyTsCjMSe7BTAyaPKfx7StjAGbhTax5uUeYSvrk2hRGjbL5jkDtdGSBrLNXnwS",
  "key7": "4oequoZB1whYVn3DERBFE4oCSa273p3RerqUtXvabmwiZqoB4HWs54iphquuhg57Mr8M72EFpKpcheSSTGzQsYzS",
  "key8": "2B2VnmAbW7m825HR7hdn7ukeWCjGyikMt8arsjJaN3dYTc8YcewtZJJ24nheZ8VCGPLY4xCDYGX4aMbvNXx3mgSi",
  "key9": "f5TzMR16fmsnA99popHUz3uYoU2YmQo8UprMkEf7kCHuGod3vBQmcLkFMmK3sK8ZMTSNwSuMVoFN6EZfUuT3S4B",
  "key10": "5pMJwbTpxgVbZqT91RHJ8cYTJ2etD8xEnHpTTHs23nEb3mKAq8Rp2XBN7YpXoDFeJJSwAEn8HXrZDZ9C9bUxdu8v",
  "key11": "5Ft4vseSLUeaowQEQASSFhN4DUw3UqhM63mSTr9Nhwqjds1kCyhvffzY9A2oRQNpGri8E7wz2sVADPLmgxgiviDr",
  "key12": "3XUNbMT8y6o4iUcJRJWfMr38BMi5HDpoDpKvfhpUbKaTDpH3QUhJjfHVgLCZcQfF25UYhtUSfGBP3MVGHixE8KCb",
  "key13": "4s1uGMMiAAjR7Q2npAiymMe8bqsi7WxWqiJcQ39BDHLCaTGEE6wrqMaFRxv2qfnLuJEBobVbCY2SesY2xrqGPzYN",
  "key14": "3YYkAbnHVcR9yqCokZe3vvkJNY9YszPL9hHyq517ALxqqZzZviYHZSnBtvU4aVB1k5Dj5VX5meZkgTw4aLgjKqTG",
  "key15": "4XxwwpfZdX5JBvubWDS1ny9HwJPWHDdFStZQ9SsUjxNUg6SuMPzvB5WBa3UvvnXgHmzPxj1EzrdgF9xWAVbgCuyf",
  "key16": "m2QRrrYP7zLe9Gg9QDDMtuvH8DiEm1xqXGpDK7cja437P6gjS2C8NWdGXEDn2zV4R64d8Tf45p5MzeeDi4FXKNA",
  "key17": "32ZzAmKJ1mF5gwH5AhTBFEV9dLHRDZffVEbCinTbUTji5QTycggssqTh4bZY5up3sAZmpHUZB8VWXPgrHXNvxago",
  "key18": "57e3k9JvPYjEDnd4XisRicSUEGRWvQKfXBSb4m6XC96BkQ76k3VGwAoyxydirvvZYY1Z4HdotbSpCQTG9UiHyQjZ",
  "key19": "KeFiNJ3htbQpHLWJJN44AfuofvWFPxMnPVpZSjj6YY9RLdEPgwiahe2236pGeUP7WC2RnBhUERhrSX8rhJ1jpEF",
  "key20": "3xMayZzcRmU89HNVUmWwdFvY6Rca2gFiyCiZ5oB8TBxaiyGf4YEHuSi9nUCEV63Fp7sNYf61oTLYVr9f6D1Pf6N1",
  "key21": "UXEA2jaGTeVSzbPbsA4yvhRZFwRUYKFqyCBCa9AU7Z1gykiKRAyjCeCidP73yAaihpzi7jSZhRpDoXR3KLdMNNg",
  "key22": "46VxYb8Z6J13Wa8bNiNWxwPeVUns2ufKDWpwETFH88Tjt2eqfb1Qj13AeqTkB6iFKLqYMRjNhYVPPLiU7KkG6pyw",
  "key23": "5bu5ZfHGdbc5zs9mQMWCwGWuz26kwS4hkRd47R2WZnyTUvSieoDLp2JQfQZTuh4ajYor9TY1LzYinmesYL4y3LgP",
  "key24": "4AKKJCRRtZft3eAZ1id2w1xwH3qeZuFCDD3rf1gyqy5SvQr6GBF64oRZDZykCY2mvKuJqNFbXjfXZhTjb8iHPtpj",
  "key25": "3eLGEmvxNqBz2QMLa2VWFMwjCCyBGgqgz4gbxABws7Fi8hKE4fQ3nnj63ZZVjtfY4czs9uFbiasLWGa5WDpS1CeX",
  "key26": "4ipMGrUJrLdXYPnV6MjVmpmnABjiF5aJ7GhFQ7jnhgztJ5zoqnLhQLfmWTJrXPKwmKcyWSjQMv3su4k1s4DfzERm",
  "key27": "2BDex5pyhd5zyYg92HSCxyrejywspYDoiL53yM261rjCJy6vAvWGWWcX6r6D5tXfLcUbSNmREJL2HK9m9VGafPAG",
  "key28": "5LLjMzRvjvsRRTNxV351MBJmYCYE8HndF4sKubt9z824LqvYHJhHEzjkrqW83ic2m5BVAWSGsHy1UsprYbGDTHCe",
  "key29": "5tY5qYx7RArbasVK6wXoeAsFs61cf7pZjmrzyUbYF8zCwXFfaA2oH5zcDibwGp6y8iuEvz4ZxEZ8EnDe8VCo8hN5",
  "key30": "92zi3V2Wj4As5aJq34Vfdefm9FKCtnKzDJSquGkfC7CXAPwQHKPjH5Eoeec98zjDSWzVJm6CnX7wJpb6yKA8StD",
  "key31": "ozGBhbGP6CXR8xfmFd6ieBW8HpWKPZbwHLYP8f4g5vBGRc1VVZSaPyXQW6eDZR1Ce7fGu8RFLEHV5hGqtUG8DM8",
  "key32": "2PkBv4WHtQ6yFP6iiMaiMDPMzzAmtxja3NhMvmuEu9fYP4UnjFkWp9qBDSnAz6FcJXYeLWP2w325P64zMa1CdCHM"
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
