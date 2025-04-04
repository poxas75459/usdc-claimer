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
    "47ZkJa2qZ3tsBc6E8NZgpHJLs11QD7MTSpKvS76DZpmyPhHtHVEyYVymnHySNKXZAhcKB9KNHc6vHoKkTuTUv5Pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35FGy52pp6PtTjtibPZRJZGgx2ndGgs962RaYHc8BgPZqAYd57uqCZ545FJ5rjv9sCcwnVHG3zTe14bZvPQupd9n",
  "key1": "5Q2PpMFPCtX2bCgC4C1uhdhC2gymQe4pxSrAQnA6zt9X6oWfd6xLyCUBVwt5CgUPzpzHF5JMd1DFCtbyk3MYkW8Q",
  "key2": "5PpEmLRcyS47UoNBNdsf5ggpqNTrdzVP5ZBnENPzHVty2FQboVbpCqZjmYU8ZFm9EN7pUKKBxf5voioWwrgJMH9H",
  "key3": "zHzRasACE9RApT8cHaa7PdVWebbdUcr7wRJuDLcUWvkLqFpirTGm5FEQVKwKBMTmYVdQxDqpWqAGdTGMifaJbah",
  "key4": "Govy5adNHLMwVdND2KrLbaNxaeJDC7cB9fip817Ebq9q7PutAoHDJVPbq7UHe2RV4qFLDyLZ6DPwpE6EC8YWfPe",
  "key5": "56oVZqnRMKsLknxkQgTUyMvUyGCWbnu7f3bBz3JGKKEvZcueKKKNBhmQPaXGdfixhsYac4WHRx1bdrMutjvbY1dA",
  "key6": "2ySdRmXyQj3nnKy34L3uzfqCGBXJqhH8hii48HaLDZgPzxQnt88ifdnoj9HobDvazM7qJoQeS9jKqAHV19fowzJL",
  "key7": "4GDfQREbGAjJN7AwcXekCFKMTA9FY2Djw6MLjrsbrb12cBSjJpwnKtkY4u72icULDWKwueojgsCiM5dN7nevGSN2",
  "key8": "27UgqEQyxSfpZS5yYi5WqwZS8RAGqyVYuPuRs3KeKrbReYtxmW5v8h6HLu6v5ZhwfJAFgV8epe9up7x9RbYX5vXm",
  "key9": "NpLBnMGmeCCXU8oEKbmaeT8rBifzYctpBpAqw9qHDNnKaFuxgHFhnsQoa7HbZB3oDjG5KNHKPipzxRMB3JLdrsT",
  "key10": "7zkq6au5hfoxE54VxexBzogo56N8LBvJzbQMqwhuKU7Rf9trsoerteW9bqchTqb75ML4pEdQRBsRQkgNoFNi6Du",
  "key11": "4W2krTQDkJ6LJV8PRG2r3a5ht8f2Hkii7TUH6djtQWkfcsCD3rgeUB3k7zK2cw1mCeXV1QaLYwjiNUngsm2XqRZb",
  "key12": "4GmkuRgkVmCuBnBKfFbj7Wrya5N8Jbd9uxFUVZTHEpq8Td2URAikqAvZmS23wnPSduEhSoAMF71SjRZU5dRWnRCx",
  "key13": "5EZ2CFzxAkVsaQU59jQaBqyuQApomP7ES6j37h4bY6eVYDbMcjoWKEMbAcHSYqvkX5PTAKMm7ji4wCgn7BoomWqZ",
  "key14": "9p2apGneZStd71Gyc92yRe9jQ8z3cRyU38NXd2DzhY1evLzX8FqaA52Td2MRtS4Bujn3TcHPyMkvqjDPfzZSvvb",
  "key15": "4HmbUatVPvw3r9Dyk6a5fyRXhJukYh1AwqfGGgroTqqGoJLrWMbEHotjK8JWjp9ZskzKA1W47e6atwGA41fjNQnV",
  "key16": "BNznLXuJmN3cP7M7hz5CSd1Cotv5gU3eSwUpCCrXoeWWciFdYskN5CeW2mA2BrL8oBbt7HsaDgepcDTebjyuxKF",
  "key17": "2WTjkaVt3utVmGft9Dgt3wieG4rVVBsWga4T6PR919uHLk4mFRmNQN3zdKLJb2GfT3yrh3gcdKnHizgqmFS4r8rq",
  "key18": "53nafC5FWciKXKC2sdQrQzAeYDwjr3HQggaroMDpgnDu7gm9nrcS7Qju8rPj1MH8cxMDQiTGkkFfzMPMPvhHf4bQ",
  "key19": "5bHvrFJEvcHZt9xpoik936VNjnpBnGsPSSECGWBFaeS6UMtTGY2BBQ1F18SpYVix4M59HN6JMyphAQTcSs6jNHyY",
  "key20": "5fuCeEB3YCmrX2PeitJj8YacxxqGaLBkygn4nyoteWqYyt5diL2EKfSEY4dRwCVfA32kiiMVhh6FMtoW2nHs2Cxp",
  "key21": "5U37UtaTKCiie3JZfkADmAUjTfVdAYBFNJKiDao8sK2zL5YcWyN8ByPFXgphPcFx5V9wnZFJrAvRnqHBTr8t9mWo",
  "key22": "28usGkwFGDEYVJfM7vF6FwmPUGnVSGXcWbgDrWTyJNY1fzfANFRNVUU6x6E6LTJfjzaveGp8g5XwvLUU9NiUPyj5",
  "key23": "3jTTHJFJvzrvjLMUr2Kjt39fn3d1eGzCNnCCX6V9EauKkvjhCruqVr6BfabL1Fi5A4vxpcC63u4PWXKfbuJeagCa",
  "key24": "MyVaN2ZaUkNDiM65peGKVyEyuWy4VnrfqpWqWB8PVkZwP6qPsxPeVsjw3mpoFuZjitC4Z8QujFKN1ESeMXbpQQu",
  "key25": "2eJWicMyNg99kSVNou58w6GT43UMhkFJgDr3EiucuGm7DpN7N8nRNrWhhEnkzpHHuuKQ7sEUbgSdrha4V4ga1VUk",
  "key26": "3sB5XAUUPLV4ki33hzvcah88FLpdNFMRH4BTZ1YPJun73aLSN9wAgMZN1SKd3GdN434r5AEemHw7um4tsXrFVmSz",
  "key27": "5dba9QnvUBBADYqAy81b5BwhRAisjqbky1xUYr8k4bNVd5rFUDsSTQhX87ujjDbHhhN1p6rEyk2jxxMtWr4Pc9Re",
  "key28": "21h5DA1E4as2L44neuXz3568bdPw1XLGQ2ACq4wPHEVjdojzt4aRrwzYsxx9yU3v2EPcQjpugVYFBXXpDSwxuXT9",
  "key29": "5G1mGTe6eH8ibKRJTxrgrdntVhRLcEr1nNqwUTngsERULdfE52JU6SNN91TK5HB8BUdVv31Zz97jUUo7cmJ2WqFJ",
  "key30": "4cu4zzkhBH5XeH7BSMT7t4aGmJN6zuG4f3W4BxSvjusKDJStnKWrxKSybxd9CSXW9YYkkvBwh7xDVrDRKAwNaLGz",
  "key31": "2a8wnEeJ8Fy3ptaT1VfiHBTQH2faMVVgdeHQLsDaZ5uT6pX9F4tzymN768bBxHFzbPgBUwAc7jEpFXuHjMhq8efD",
  "key32": "4j4GDYPbKLHdhM5WN389xcmELk3U9uRwuZiSebcuoSZA76DWkD6HcvPNXuhCiWkx23auQS1ov1d7bueNPbsqHHzv",
  "key33": "2BUzVgX91F5niXXgwZYzCD9hify8cmQ2AFRdwM93bZebQ5uMpJC5kT4oSa97BNWS1AxqMuumScy5zPh31qHNx5Qh",
  "key34": "5J4QTD9PwDsCckbLL6rkAvcdEe2VGfnFakXdPyoUKpN2irYvbwMBTW9VPKuJ5rkeEdBr8g17m1NaHt8Vjy2FEVXL",
  "key35": "35J1E6KwPNNWEy8ZA1cheXxrB4jiLmGithkwLP7uCnkxMG6KnFpXStMmGShJvCa38QEjrYAWXoDFmyaQqBF7gJFE",
  "key36": "5zjXDRyShjt48uvrQHhSHctUgPHAtLH5EpbsnrQWLK2z1dRg84DLiG3sP2fg9Lc65NzGFDjg2tUcCJe5U4zTjybc",
  "key37": "2Gicfq1GpT6uwKTRdtxQ7UurEYLJUHtij9mTMyR3QnKCYDLPMyHiNBjGcN7jiFgvWLGUqCpwp8AUZnaX8gfwqH1j",
  "key38": "2NjC4JuNGFaPetNb6FHmESM6xvo8hnBjLTTfEuZWPQPFDT9shr3hzrBRfWNHKfhsqbXD4xjYs7zJ52YG8SiMBQkf",
  "key39": "25UC29ZBEaDh6PXccxkTC5sZUuXG9cwaaWDEzpi9KLmSS8PXKJfSe8AQ3T1rdrjRfmQq88jzM6818gJDKWQpvbRK",
  "key40": "5r3GSPRMbgiC1MCVGWdmsjM7ujHMCSiz7AsS1zUfobncfqoZ5ko4GfMiwLSBSTAPzQfhxBFdPzhFd9GPVDQN1TWY",
  "key41": "2RdztWFpxgaMtt6tiQ8wkMfwkRY2TM63Y9uqnyKYWug9XqQVicH8w2u2iUo71WVjuApyRiYETzEQp7Wn9heecsfA",
  "key42": "4LwHtvNAC5VkhN2EJdyw9MoyrG1MkMsDJvkp2m8MFa87TT8DsahR511GUGgbRVfaCq3Po85mLUUz87KRx9XN4mVy"
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
