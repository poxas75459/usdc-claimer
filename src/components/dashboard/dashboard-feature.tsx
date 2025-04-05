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
    "347UbBVU7p6VPJV1H147kuBy7bdGrWM229LooH3Jw1N63ZBrnZDE836GiPyBZhF3YdXzSdx9QiML4gtKz3TeAecn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CrML7Fu9eece9y7g7m4J3GxjSz8Ci8t6pDpm1gC4QGPzQWzT6zPCcerPbnoxjehriX8xRkJ3K1AWbr7yabSfzdh",
  "key1": "ooNMu2sqeTL1JEoQsHD5LWDa9ofgWimYbQGfTsKAQ4pwtUN9w5W18BytLbQ5UQT2taXnSffNoNZmXzdbhPQaUWg",
  "key2": "3kbLvB7vap82PzDFKW6LFRybPJey3AkM9fpGBGwjJ2Pc8DaMPSHZHe4SUb1bEPmQZJVbddoBr6M9DeVe5XV8GsbD",
  "key3": "67WWPmmhmsJAvBybhabW5dhYjEsMPGGkgg9s3BRphky1Yc8y9Ff89HhpNPez1nHefBe3N3JwTQRPXwRfirwaYVur",
  "key4": "2NBmH6wQuKhoaEZmaWuLhDpJcYg8as43dLVuAeZLvw6AkQymxNdMC7TwX7UXBRFMFxwiwqhcLpyAbbdVfYRJNzwN",
  "key5": "6Fs7i11vMhCfuZrfHDSUpGGQqRYBNNjbBN3AP6gSQhoazhQrHfd9sg2GApYnzf6Q6879u6utptbRotQzq81hkRa",
  "key6": "31DhEJ33rCrehcpPey35AEjKXzeDRuwziN1y18HcefK4W71Z2veRWNCmkzpReBcm2QRMDv7pTqnivD4ehyDDrATi",
  "key7": "2FXci4xuCN1wbqmdFpfA12jXCRJ4EejgppfjGi8gTsDNVDDRmsmSMEjSHKrakPtaKv1T6pGmz6wMcjM8Adzt14S2",
  "key8": "5xGZirBqpWpJSRWtczVzmq2rThYRauekvZ7sYEUZSsE6qoiJDW8YRrj8HeDYzfZSMhzGj9WvGKj712q6WXkFiGVu",
  "key9": "7Buavz12vsKyfgQiK4tphXNA8qf37QHP4iAgib9F9PqbN7evDTnJ8Ps5hivgdZt3LsHzjxCthNUYHJMyWvTXRnC",
  "key10": "4gKtD3LaHwQP3m2uWsQCQZpFiynpshXY1rLLVXaZzb1LtFiqojzSV1RbS9u2TuRxjttPBiLTrKg9dZVKR3fxTDZE",
  "key11": "3UaJ8MrYeVtt9dunniWerrYaQHnv5ByezaiZZqQ3X9rtKXuPXPPyYWB1d8ohTPtVJJJ7r4rJ4csCPFZfJBcWvauN",
  "key12": "4tqHd8PAUgNzg4z3dF2j26UgYvzE6jLszFh6ZiYq9TjbKFkzMY43h7pjFDkqgb1dxFZnw5tgq6jCLpZCAmQQ1my",
  "key13": "29EBXxboUA6ZCwCJDTiJHzJuvwpuVWka3JZkXhW33NjTfnaQEFbcKYMjhLXt2LjwYqsyEZC7N8abchAdcFuD5oXe",
  "key14": "dyMmN55mNVAw2sgDDqEae3qTH9nmZEjWKFaqb8YmR1VK1qYFqBt8x2JnWSXG5YXuym3dBGxKgx6VZK1ov1RQByA",
  "key15": "xmPBtY8q4f14mqYuMaG99e5kSfwsRPVNXor1n9Cu29s9GyR1HimUMm9TQcDoEp4CWNJQ6Wfmumbizbnf3SQpQnL",
  "key16": "HEk5jbWAFTty2gEboMLxuzD76o9YdhfBj9bzdwKuxGcdQVoGf7JoCsLDidgqwSMjkhnUbMAkzhyZ33Dar5Cufyd",
  "key17": "CC16jSvrL5EeZcgYmZinuUA6dB12JN6v9pe1i3n1c2ABB5vhNNWBpnryetU6Mrc5q33DstqwJkZnWRUeMx4uTr7",
  "key18": "2QCexSHfSct5QFn6784Uas2zStXbaS9oDhACxqsYvgob6T9xrZkZvRvrQi8WS6mRPm12y17LKkJWvmNAn3Kk8Zox",
  "key19": "2co7R8Kagkmo1fzMqWU3rJmLns9Rrxcg3wCF5KGw6MrMSA1qqURPiAvTkT7Xh9FY7DHLAmt8Y3qL1eRUyUh2mb4a",
  "key20": "wGgFBPqcmVvkBBi2qVMgzmDDv1vnSSXaNwzh6xoD6Uij6xUCHaPDCcLcUj8jhjKXB6V7bX5k9farjbGLfGJnQuh",
  "key21": "429g5Bfw4r1qJkxL9cCYttfWboCjDpheZcegiXAdkHeTL8FggdLDqkMfbLqHWHkVg45exruAwvzXTgxkbpeHqx8g",
  "key22": "4PeFEWpTMSn5FixHfJbtr7NFwBewrwPAmXe5YHuWXxBq9PUupCQxeTUSJuLg5qCbt5GNHbm1LLFZgz8wr776CbEP",
  "key23": "53wrroLErnNKWmZ53P9P6AAcf2UFDM4J6Fxypo94pxwa6QeLo3aM9Pd8nC7NcYetpKvSqcxsiByU3ax6dKxzD86J",
  "key24": "3hG1VSJXLgaagXfWoXg58BQHxkmBzmvebaTM6deaG53dPrt32WXXH6gVaBNEBagV1pxhjvLBHW7RUJCYTf2Zv3tP",
  "key25": "5Vq5CwqFNP7WxtHJ7aiGZxsVPGVRb7vXrQbqFPxRXoXNiZhmUYdM18pG1r6QZxY96uqbNNSU3yWF9x9QXQtXgAuX",
  "key26": "yw844eDSpYfq4MgDMT9vvNWKnAXP9EcXXu7WdbJZv3tXC4i9xHquvH47DbjctBtXaSr8XKHGNyoKU25YyiQhVc8",
  "key27": "4TcZVSL1F57Lwv4zaNqoun34Rw4YxXqUK3g32Wdv9Rto8bRhcZhFimHb8v5bftLQPWpcVoYjzAtdGvAxMXkhP6iX",
  "key28": "38d8Am8L3zMPu5inVQ8t181Ys8nmdDZxSc556SNVu82x4BkVuBQ79KrTz8dbSM5T7xh7xJsnW9tzf8u9sFEwfvQj",
  "key29": "21iuG56Jp9obyq9CcrpNkNy3GnK3QpLji3NvWZGBcT69zjbFwy5kLufT96QHCYC45Uf47ALAamXtNfdFxrjjUrys",
  "key30": "4Dq8pSnPWWpamut3n3z9zSiiiLCiqfJ1aU9KRNzN8WWVGDYEgjyJri3bGzFQoeVnSLct2zofnz63hzipGLeSt2ym",
  "key31": "2jNw2G3PdwkRsFFCgCoz14KxfiwbhWbFf8gn4JJrudZk9hYHFy1XzGgmYeQHRxNtQ9ZBH5zDsCV4rNbGwuRrDWgN",
  "key32": "3mPQtgdyaCd5JhfB7rz1Tz916jP7EuyfottSbERMv6Hog6q7rcVuN8pgM3YXEATYDBYfTMmvvQqfs7DfbHHikZcT",
  "key33": "65wbfXUk8mmU1btWfZPyQqcaYruQaE1Nw4wsMdaknXDDSC2SihSH7ECeUAD3cbrAE6iAX7F36qqADwfRppDbcQuT",
  "key34": "S61Q29ACeKoYoXkDxqAKaVBf7qDaVKAu3t7TW1WERjwJaazpaDd68PSyBvS7djWUPwRHUXhmDBPtXyJBFE23Lwm",
  "key35": "55bexXt1zNv2x9KzosA8TTToqtmu9BpRXFS1Uuen7NTonTZiA1mx7MDSSDnCdLV2Jmoy6FP4GAK2aexyrTWNuoeR",
  "key36": "2w6PqPC8H82M6P4ih8FDhyUYmgLjAPg9A1G8XdM5mb3r93KNmDzrRjUDR3Lf4eYY15wYazgASJ91HfAnwhAQonsa",
  "key37": "3mPU6Zc4VJ2JYrmbseuCGzLoj2Q7Vxibkr1CVcwdTV6UfAyk7DTosv7hTA8MuS96jQrLVBXyUhc2FEPrVx1fGkaX",
  "key38": "3VfbYUHYepWuLxSobAiBUe4hyBw7u38TdtcSfMY29JmbaBpi9MhyyJ6y5wKVMGjMmV6KPXDoQbC4PQoQALCfpMFy",
  "key39": "4fbty4xdrnAtryudMAzPcDqouG42zKnQeVSPbgWEx8uC4oemuU1pApYsbhh6KmUimh5iMpkAEDZD7TRReuHBemnn",
  "key40": "5Gf5Acv6uVqZMRnds5Bx3Hc43gcdiV4ifgfmMKz8swM18TAPu5YyR4iyqZK2C6JE3T6jHc6GPG2Bvq1wiHzQaM4d",
  "key41": "4etba2z7QBv7yNY643hRVDy9NsRaH61m4bZNEH8mAexGbUKXBspXFSPbapYcBKFA3sSQFeiF3E1NfwP9GyuC5to6",
  "key42": "4yeFF2XrKu5ZTL4JPXEj5mduTpMgWs2V5oRkKH6fm27EqYEPeB23KfQMZmxwPE5ZgLmW6v8y5TsqVqf29CWzFEe4",
  "key43": "2H5FYjBPHSjhG8a9Kfyt5JcwJsi9tbTeAHF4faKpeh2c6bpWoHn4TweXVLAEnbHu5MwDnXFVbZLQMWKwyyWZ39gY",
  "key44": "5JBoe5qnzXjXGSyViRB3xNPMppt3ZQNRmrZa6TJQ9iYvL9ymYhyWEeVeKPAFzBArL8MeXN4QXVRoqEWEqaPaRxwK"
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
