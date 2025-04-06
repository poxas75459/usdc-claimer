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
    "mfcgDjHdH74h7uNW7JN3kNXZXBrVaieWwcfumAkxuLw8WzzpZMoYr84US9njt25LGwcbk8gboAn6wnDh8S5kWJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2prZnsWJboL9iewq3VcLTkLX7Q7U51LfuBtSB5Cya7FUrGXdcjk4eDvb6LpXwCxQEvAuYd9nu5vQBY6VcmcWTxyr",
  "key1": "4qm7oPEJfZGT4Dvnf9Py7oQ1mXiETfJ3vqjLBjE6VYWWhNjfUSKrUAGuq8Q2p9aEwFGMNu9t7Qb1EefEXXbRu5Wp",
  "key2": "2pHxnWdUh98SnYwAEPNrPAnpXLLJ8bfbaKsoiJGzmUi8588zXQ1bDkQNoA5DzzBPM7KyCg9wkdJH98HNmYHmsrMU",
  "key3": "5fw8dePFDZyiDR6RpuzzUJpg2ycjpvjQZjTectTBoyLpMgvxawhA6VxzApifd7acMWo1q31vqZcj1Pqg1U3S3n8z",
  "key4": "3Mk5RcuHGB1bVs2MppgZ1xKTgXfxmo4B4TcVkAtx8sZmjsmAsxU1ur9hb8bMJuiy76bchqWRuHHEj98eU6b4fkJK",
  "key5": "4moQeudgopvhahDdxsbKtLikfc5mcGD2ZeXt9wsdjZBF8aM9fDbrJXF6XUYZwiqH83vofTBeNCG7UYGwHXS5vEca",
  "key6": "4HyvzHfLQxLdfjQkx2AECutBYSADkYtpz9pCXwH6vsP3JXwuz8DaaPwATD2yZcdXtVgW2Pq5LyjGjjLVUiVffgkn",
  "key7": "RXn5mpPNXtPdB7z27wPgwBcTbPjTuDPf3Ap6nNdj9Swp2KwEcJBEk3fuPmkNuQj2AyKExX1Mec911uyHBGFQAak",
  "key8": "62ZKWuAbnnfxeGhXwwVxFfKxbQECL9zVDU1CfRkwixQpGKVvvzAkHdsyKRSVfeBmiSTDakp7yQrMVzbaNCq7yhBN",
  "key9": "4QtwtrX8VHACMb7oF96PsVzGh6WgqMPaTEeSiVicANkCd4k5C25bNhmi4QWswLHdPbQu8x6mUKmCfz6RQLmTZ6mc",
  "key10": "5xLUT7EY57T16Bh3wVkW8ZwPUcDW1Aa9CthvkR7Ee2pN4J79LGiDKHp1nSexYXLTTWbaCrH5mEBBoVgVPsrYL2or",
  "key11": "4rDiTWfJiazCaxMHUv9oea73ykUwZZTt7fEmRDvk9kpWdQeG1ttmGeNPAXUMgC27JrXCq1c5J8AAGJZn7hndX23b",
  "key12": "3XRsEC14znZ38dfQS8RRtNAFkQnZ7ifh8jCrptSDHzfcck2mdnsmUrYwG73fzz3t7EdvdkSS9kq2GcfvM8LGMtaV",
  "key13": "2QYwpKgEwP36CwpZiaJ7ojv3L12nExMnmmfCi8BZG7htAsPiMZ2MwNkDfikGuHHL2PrtU3vFyuxxFrzqmfNU4KrN",
  "key14": "3bCo2V8whpcp9Sudtc5266y8jwZmaorYBh6QTAfAq26sv5WSXtyvr6cj7EcUKkw4ZTCn7K4qw2pgPmztrZE5xtA8",
  "key15": "zape5qnmFRVYCpoQNEPPefw8dFmVHcyrsqQVuYLRq3s5swxW2ZnLKum8AQBGT2utFTXjPc1fgjTEv6FUZWsUNAH",
  "key16": "3jzmPbcPkGH52jkao9dAtMt1Xcysove9bBCm4USa7TQogCGnWm5f9tEtwAmUY9pk4dgBMJGftgrnEguLA8XZQpAG",
  "key17": "2Dh8DgRpuwf7QVRehkz1kPBy7LPFsyap2cN4eqvKiwAquTMCtCieYj26XdKo1dLAYKFdRzTCb2wPtnGEr9iqBk3s",
  "key18": "31ZVBaGURVU7X83PqgfNBYC8DuW564DUTrhcCdp4qnX9nULzjV5qiB3hURzu74uBZNVuTiPjn1F2FHPqiNL6AJVE",
  "key19": "EZiMNQA1Ds2vyrnwGWwjCiWELH1L41taBdWzwbyUqodbP71z7zw1NWsWMqLYcMXVu3XhhRvFiRjJHeJFVWZkKap",
  "key20": "65EX82gtFaHufrP4NK6HYqF63TK3nfPZak7Ao1aLfMtE43o3SJfmvdmcU2vGiWxdZ6noTXzBZRo6Bquc6K9uWE2F",
  "key21": "4cRPHfKqNmnd1twcf8vPDqy6YgUkvYavoCznYhA7W79mYcNFLk4cDWCymEJh5YJuZ29AopGR1Q2nNSyZPv2TKFk6",
  "key22": "XM3m6XAELNVootxvLNiGNTawcqxfmsnLoRrYxKAriPw9NBdSC4uQHLMhHCprzBs7QyYh1wspqstxbd5HLo6NLrX",
  "key23": "252vZdQSqtDxAYWuoe5hVJc7QTfzXPcfkEbC9yMkfLC6M5NF8gFWCk3fWNPeT8PhkDJ1k1fs5ZLbybu4fLBSduFS",
  "key24": "1s2h3jN8ioqrXUnop82H6UPDnQN7T2oTzeZ5u9z8ibweGZmSqqz1bR91UDALdLmx71XCf424qFT4nPXFA7zQ4XR",
  "key25": "4rVGx2GHAHZBnrfVwmAwrQgYcthFqMwbqFQQ8zjWDrmxmHBf6JGosAPJ1E9HnbMfFXpzdvJm33MSx3mCuhxSmJhU",
  "key26": "5JMCCPixxBUgEQs1XfeDMUPLGWRV7Gf4mQ8eEW7hnyZYr3JJZbrwAjRXNQi7o6565oPkmhfMjnTZoaS5HYFcq3vH",
  "key27": "44B4iyt3fvtVooZP7RqLuDG2tyWHUzuQC5X5EhhKvRSMg9ovbVZKMJ348Nvp9zkesnWSaCTEAk49oo2ghwZFVrhj",
  "key28": "3coiDQwjv5d2YH6sySATpNgsFNN6Zy7DYzWbQoTw6YPZYdtzu1RFib3hnS1jGi7EJji5rXrtavMcWykjupqgU5fY",
  "key29": "5uypxKUyvPtSexzHe7ff1HMeySeDcai3oDKaRDCfFHHW8GGRP9kMKBGXLFvaJ82tLw18DTHzG6pBaSenYKqBqTw9",
  "key30": "VbU27ya7PDACVnExxnFfsJBkMMyXNXNns3ihzdHNSLgA8foJQHmvdf4iKrGME4i2A9Bc2LNNJW1wYLN7yjidBcA",
  "key31": "38FQb569mkVWqg8gevHtFH579Pd8YE6u3sYFd4LiZsSq9BtV1bQ5jSveK9BJKEMn7DL6SWjuw8GTbydRsXXB5oZ4",
  "key32": "4NyPNHoMtNtgN6itWgG6ftizkRCXVCgMR3uTRSX4sC4F5f4bLTGsfq4D69XN653mr2iDHgERC5oofJf9cNPvna9t",
  "key33": "3hAEbGJpoPcrsp5LLAkscU9YazpDxN3x6fqm1XmWHqinXxUUbtSgRw2jpNqXfFH2AUBaUbbz9TVmAmz3vJYq723k",
  "key34": "35djdeFMQ5caEH83L86TM3Gsv2JFuWLcF1FgxvsQdXt6TwfLeB7bj26dFT1jxbirQr2gsdob48wJA9MgHf86ckp9",
  "key35": "31nSWTPnEZv3LYQMcFeWubfJsZGabeWnzUKCcUBWwCKLoVMTTMEw54NYQggeq8YtfHmkYa4wjgcvjC91TVDuZCj1",
  "key36": "3KuZRgpmJG2ffMqKoYGQfZa5oyRw4ZsoYqzH8cWYtiDqev61m7AAYVNsb542tVP66Gg5s97Cox4GJraj59Vn9upq",
  "key37": "5rVhgmjqdYryLrwAqFb65teminaHmE8nkvHFvAWXrHqo5WXcm7En2GmW5e68yeuz1FkdLFfasYUbTwKBrbJGRVw3",
  "key38": "56RC4UHizCMEPM8Qg9LyU4VMKdQ1QhveZHxD6sKgrfbNzXdDJmCK7UiU2HgfrN9btnQyoQDbjor9eXnhr9rzP4nV",
  "key39": "3KPs7EKv3RK2T2zXARVT6Dc1DyeeBuVitvWEE22ottubm4YDf6SGTQXreUUxzPQXoWMj1Vmzyz94mXb8b61p5Z3f",
  "key40": "3RH68rnSijQnthVf8z7RinAecEyp9AKFmP1KSs6WC5W7uuMXdjmB9X68wj8m8b1Wn2hLzV195ZJ43iQzKNLcXJqx",
  "key41": "5cGZfsnJdx1cmuyqWUyM3PGJrEWpqVRouZ57MUZo341nU3prxs9G515C63Mtf5RsDeKboHtB4361MBneat8WuhiH"
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
