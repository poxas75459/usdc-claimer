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
    "4fQSYPyiZn5hSfXhHSQ6UvPYz4byKmp2E9svGswggHfT5X9mq7c9bnQ8ompmdssFS3T3GMxgRbZiFL576LQypvcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YJJv2vXr8RdhJfYYPP7msJzwucpwydyNqn67SDwQNnne9YgmksdgPF3VVKsZY3txRiHc3nZMag9ppBpraPxMZ7g",
  "key1": "3VjKLhww2wTzoYy5qKi3LU6y6jDffRGZzQXCQhycUUKACu2yLj4Lwo5ZSFx5uUDu3yxzwcCsh52aiMnGfVEtaytS",
  "key2": "2939DN8H8U9q7chX2U34eJs3zzVXhMM3CVXoqrCM21C7U7bwjRyhZg78tajFQGrgrs6QZZuvAoq5WBLwLMb2ctxx",
  "key3": "3Af7pdRRWrh87GWyQLCdS1poKMfK5ng1eTmayswSBWNxpzE2T1XygoxdtkCEujLhBXomoxTSboDnnmekSVsxbmRy",
  "key4": "xR8y6sSCV8D7gNq5RadLuSaXrE8THPdqVz2xiyCsJuucztggX5xaakfPLcnXWUnMRnZXqLhnEJFV7GBQytEbtEM",
  "key5": "4SNcN78tN7u31JwpvEyqsreWsXPhpTfaSy74hAaefaiGtXjkEy9ycXQp4s9Kyv1XpdnWJmw51kGfc5yTMZ1GurZ4",
  "key6": "2hHC9dS8qrTJL2sXL89hcRBN8LLUTYd65kGGU3ekDPtfwAMbbWkUTpoVA9kVq3DFcDkAaxCxDpqgqXz7T4YSWe7Q",
  "key7": "CwdJdgGooxWMDyKKmb1mNdpCu2ryE5p4mzudjnGuu54RQ21LKi1etehjkEW1nqghCzYe3knTr51hBp5TF28oFBU",
  "key8": "42qL3A6k9jppCZtt2ygbVYR5uPRTX1JH1p2Bf2QwW2u32nFQsZSiKZdvWnFQjP7nojB3N7dnd6ckkP7WBnv674Du",
  "key9": "5KSe3qJYm3tbuiXvCYDBgxTTNw5PX9oEAxBRHpHZqa6VVEQkxJLyAVM1ZUqmrweWmrqvXZPSkZHkq6RGDGrsPQWQ",
  "key10": "2jTiWoWcXmohcrPfRXDNqoFwbfRGParWbYWiZQZSKBwyG1HZky3ttLAUZ8MnQyQCdQ81xfuZhCYYSMWCpeDUZwQp",
  "key11": "33VwikwkKZyVckbsrDn4QnA6mb2dhSgVXQLKFoUBRhRYzoqdk6erUQvmSA1Q6o9N5XLsNDz7ZctwyopA4ugHNyRb",
  "key12": "4GofduBmWn9ReyNZSt5t5JbZPsLc7nuBBS35EjfmUTLppXESiMgm9PqkwMbtDTwke2gi1copYXpdJ3C7SQ9jwYK8",
  "key13": "51aPUJQHHhcoQzBhaXuCoyRjU4NhQSkA2UHms2M2gQq893CN6Je8UAGzRKxApwPprCN3oboH7QWyPVS4wkapQngr",
  "key14": "2cspt7T32jkUShHx7RpydyvRuEmojcdGL2GB3GDkynDq9UA7VhY5CxBC6dLPMFhYDVMXmrmK43faRNba2LCVcMAf",
  "key15": "iaPj2G2FquJRH5kiNiiH5AVuVbjDt8RKAqDvPZyapTk775CPmFUyMHHQJFQyi4SG53iaC9k3y4wsRdLJEEPdkZ4",
  "key16": "5GYPNsBDCi1n689Emhh9YJLSAfd4T4QctJ5z7j7eGK1NRVPhAocGigU2yy3PWbcJcKsGuYqYE5VUtZJVDN2xyy6r",
  "key17": "4HwQEvks7H9NHJED2YNhEhzV1UnKmGSNX9uAJcPBFdeBMyDHeHLYV4zEevsqVjjZwsW3LfTRENjth463QCZ4pXtJ",
  "key18": "34Nz3CjeJgmsV3uqMSA4t3UVUo3wBCWhgingBCDxMVnFgLxwE57oWVctxBuLCdXd7ACd4Mo9CmktGXGaGyoZZM1y",
  "key19": "2xSJD9A7rrYaDqR9zfQ2yrvCuVZzM3yY9yURNiSuSSdoKFqFarF88HYYpHadB7xKQSu6KDaf5JjxFuBHzjkomyM4",
  "key20": "3YPfBFLwmCKiTCmtSUEGLciQeVnSMHM2mKgWKsgTcZubgExgkksNziGgH5uBRpXuK7jjTtRDERsPYfso2B6Ppvai",
  "key21": "21XzSUeytwnUJBSrZRtPj9AbRV6ggiuXBNp3cXwNkF59Nu1x993kmv4sjbFKM4Pfq3LtbPWR8hJ3rDSN4SLhJsLa",
  "key22": "4MDzCBh32HXWZgR1wjQTkA5hEcbHmdw4tVAbBBVQ4E4myos4dGFyLtPYf4YKyyrPJXNWc4gfGVR6Nvgp6zwsUAQ5",
  "key23": "5f76BT9neHxSDYYuuQpka3fAejgCcSxq3FHNTmEPPxBUGJCipcsCFF79a8XuSTYvGPYeV4jAkm8qqYo2jTaMSH3p",
  "key24": "5zMnSgeiX4YLQSKFej4mb23skWZGvqNwGx6fzFyAr7gSa5Fkon3QzTrD3UXKRqwGAgZzwBqBEuVpjXAiQp5mQn1c",
  "key25": "bfgktSYmkQMPqJRTfnMpu8akLWgaTBWJwmQhtygkTk9xQFqb9iBgGLvYZaPFEiX9B3jYzw6ZCzphUa8XpwFw1xe",
  "key26": "2pPHwBF5eyT6B5KXBMBhHj3kWqqv9c217QTBQrquwot6de61h4X6Tzc4asMmVsa8MYVowedSqhf3MM5cXeP4EWUN",
  "key27": "5dQsFn2tiFKE1QE3fezN23eCSA4v1JGgmoTczoVVquU7jGSSEsM2UHzwspMC3nFuUHJ19tjAgd8Yfi3FrpdUo6Xi",
  "key28": "4RHMkJa62BbeuBH5zZSU7ufafpBT6YhzTHKyDfkqK9L9suAAVMDDuy7YvnCbkwNoAYaPh3TXbgFqbtx7KDXZoQwp",
  "key29": "pNgYnwrietKBSJPrnU9CbEpBBu1to4tq4aowu9Rjnm9ebsnKUgk3J8JSt2tcthyyVa1m7QNsu92GQvEGZJ2f4j4",
  "key30": "27RJgk8tQ4GxTNAiwxXZACtxsYo9okDCaX5TtEXakXbci1y4fCHhy4e3RFRQLuZQ3JzuBWXc3LLjW93VGFcXHi8i",
  "key31": "52zQ9gPGJLT8radVF2Zg1wAv9KXDsECG5bL3SPtbzFpWybHmhVpREs3DiATdAwtVv8X5ijBroFWVArxHRzFEwGEq",
  "key32": "2oXHvL9QZq2Tjs3EdGYpbKceWsR13rBmS1uYMXRzFsGVQaVUhSnHdXPHZtDjBLTtXW3Q6hZcbtCK8YvCWusKbCfA",
  "key33": "3EWFnVqkVKfst4D5nMA2XDbRnRQ6X4YUUb6qbRPdRQnRbJ6UgJiUjMrCwrp9efDYQFSS1zBr5CXRbpvjMjnW1eTm",
  "key34": "4J9Z19LzDvr1wW49AijSUVb7ZjApaW1FDnsoPWKaH2Ef122xGDhWqupPYnaXpjn3wjNY54cpSHsLBH8gPEmpdGnM",
  "key35": "4F313GZN4TNh2Bw7dvwZsptLZCKiCLibKySb2yvcMskp6zhcVk2Ls4j6TCXNMd1GYaPRVxUmb24Kj36HU5aAWNJo",
  "key36": "CpM3GwHpmsV8FYn4k7HUqTjzzTtwFB7ZWFxdExx6Qp7fLet8pPUmvM8siMxvTV5MbxjGNzmrA37x3Tb87NeUf4b",
  "key37": "4n3nWg2kR51HBzE4wak4tEBdwRF1TTJQeat1JqMcwjtQK2Sc4KhurvWc1KvuHjEs6LVnzMZ25hh2hrWK4wyHTj3E",
  "key38": "3Y9zpkZjUSzpumVnE7jDwwvBpQZCqCiS94G1QyuegFXcxjvUTSEGnbb4VLAXZyc9y6AAjEVHPkqFEPkkUTTbFcPs",
  "key39": "2jxyHENhshGWmmbmgwXCCCvVBzVpfKVsKvnarQ6tcDoiQZ3CMSnfk37kYQhZySYFLprVKiiC93XmrBA4C4nqkCbi",
  "key40": "R52SanePW1G2oF2eEwJvsEWjApzr5jZGWxHfC19PhdGxwdm7m27YvWprfxXfZzrHaZyGHiyh6eXtkNDhFnyezQQ",
  "key41": "MUh4Gx9S1SKCH8Eqn6dTnH2BCc7H39Ty3qxXKihADDT6FuX12Fxx9FMmxDJPom1AQEWtUAsTAtnQkEN9cexspsp",
  "key42": "4j4MEpJU4jQC3dRyhPyWu2r2wYXix5UVjVT8Tm7gMHcpDrUcvFwKcmafyZQ1kokDdtpLPLyMUzHvjbfiD85jTmZb",
  "key43": "36oGNub6od3eCKoyiwq2HN6JLv4zZk59ErWZjY9pjstSPzFtRy7zjY3r4qWdq9pWECQzMrMcKK5HZJrFmmyv6pZp",
  "key44": "4v4mSoCFSFu8zPEyTSqEjPgKp3ue6HYi758yPLB8e8x5roQKtY9voKVSsqTvGPBkJgnNoDuZhzrm1P81sCPTfCm4"
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
