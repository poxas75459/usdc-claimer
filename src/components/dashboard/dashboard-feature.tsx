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
    "5eCtJMcEBx7YZNr8TVwo6tkympuJKHav2bxxcm2aCuPd6itfZCJo33asXbjM6oXYeEJiXtcWgAbN6sHejb28SNkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AJtPg3Q23HegezMYWzKWEDja42rUYQQoh7MVhYjigLc2SEYq6qrFD8yBE3gwXD6smzCpMj7esuH2QGTd2DkQELK",
  "key1": "3CQvmmpuyAUwXXEmmnLKNVatqrvkFedxFpbpcDe9by7kMUNSsymyvzC5xCveQiNaumXZC4H9Ry2UQmusVw7FWV5H",
  "key2": "4ctaPuQrYxebeSP5SfVYc1neNnDyg1YkLCAWWdDEchpXyKuydMVRybYtNL83UYv4notxsYheVjrXrCDydYr9B4UY",
  "key3": "2NAhua5aAQXYCkKekFmeVxQ2iTRKddt2DvnbqyUb8iZdnFRvYBCW9ggXu99MvSYqAEiVPShx9fz2Pn57iJsj7tWm",
  "key4": "2AKhwq2QiTFm62qChsLs7v2un8Q9NdF3SQcEF6KpPV7Lw4rSDRvzPqyyyjiz4KLrQu7yrJ9Kxa5s9U5UP4qjRYHr",
  "key5": "d8VhW9y7GECWAaivyeJPbwiYbFRb7goY1xUxsssTkoi3c6Qq1CMLVFBxjFVELgEyPwbvV141EbKgJ9DybPm5y92",
  "key6": "5iGwrKG5dsi6Zg7yHUL3dHvNxpkb3yqWqgfpmobCrhp3wW63T9xPf4N6RGZcCjTeTLreVfMixbxQ7DUAKWFgR6oH",
  "key7": "3XZJKXZPbkdtY5bVLAfCbHbpa7Hyg5Zitife6PsfTikp6TW7jBEeEidyLdBjzYxPdEfnSMiyFB8RMVeLKnwKYRGM",
  "key8": "2vhDQASpWJGFVHNZCyq2WGLX8V8eS7fMGJg43Wkcua36e7NGmWhmRssvAJUnCFSWUT4qTxCKV9CaUFM4BRoaw3Pi",
  "key9": "4ondwLopFLGmLifbhfqHgKQqUFgXLZmGHXqDNJYefMd87Yb497EXheVrBKvGPnUYudUsfRjEbYiLcjDkxfGEpj31",
  "key10": "37GoMinQbrJHKbK9a6dRewNebNcLWkQTrdJPY5RT6TrhMK3b5biawBohy6hU5EDCX8xU7AuCJP77CogoWDzXmhGj",
  "key11": "4mTLBeiCkRgzZv7cpyFgRZAPZpeQz4zT3e2gurc9mu54B8GpbsCA2Hx3EguShrZQ9SxK51wuwDMJBxQ4rfzpaNJ9",
  "key12": "2VbKUcMjqJFkQXkTHcDKGQe5urQzi3wdaVvxYWfidZrPqsWv8N2js4971TumqCSJEADubZWGXeQ5yiJi9fdc1RVh",
  "key13": "2yBGzVYB2ZsTMAn5o6y6wAoYqg8S4rEvcHyd7LmUkS9qGD9uP27RYLeg6HsTdW2L3e4KAA8XMgi9Pgtejz7Ti8To",
  "key14": "3H24YP2bh5B3PctreQ6KpPeyZRPyh8qfEZpUXhrJVxgdxKxprft9S1gGsG4SbdEfKwNyryutCia44i73onUnCHRm",
  "key15": "4DAXmgm1qJ3iQgVd3eQwujBSXGAxVsKmb7ttRXTCnzVBxmmjoptaxbZnQ2eYQKCfCYJwpqWkwUEbnp5pPUQnexj7",
  "key16": "3jVYiznbVFXMGZBTHdtD5a92zpTzxS4BKPuzLBmPeXGkYnzZ1KE59vVT9Qqo7Cs2eucF71qHvfntY2AWjAyCaE21",
  "key17": "iNxxnce7431z6p4mAryv3uGRh8L5Bb4R7is37VK6vuJTQUc7wBCaHkRBzjM8goMyGah39o4R4eXkX1YSSoWZBtD",
  "key18": "xwtUEESWFsvg9sZ951cHkRDFj4BzGovN7pfuyhbWpMMCWyfcT1VqWckvCxsjzbfRBQA1oqBPxRkvtn7JoNoFUc8",
  "key19": "24C3hZNbzNi7FcekNhhY8kug9BJzxxacyyyThmQbEUXQhvMnHSKVSr9ZhRTcAfMtyugbAb7mEAtt848jU6Kz4hZF",
  "key20": "5tX2Z6yUvpu6don8yrcmr4L1a587E9UGuvWEu3kQSbqi7DFryRW2nS6oJnXAJn2mbGk6rN6id28pQYf78e7pDLvb",
  "key21": "2ebMsQG5rmSEqNZNDbGuugQpJ2dh3MSbG7DG6QGBoADcaRaVQR9j9aWPhc5KWauooDN7BZj6KjirbP7QapTnQU2f",
  "key22": "2jnQm3tuDT7PbAsREb2VSaYipVh1GuWjPXM62JAKdTeP9zeegiGTtpNNmBau8oEaTq32afJJ1g6fx4xdG9evK7vk",
  "key23": "3PaqWKKT1tAcp2TGntFvGs4cabRgMxNs1WNUsWhY5HeBacQBdSemReVXvMriQrBvxuEKtxVfVs8xNQ96HKy6y7RT",
  "key24": "5Wp5QPHPb6weJr48xyNPM3Bknprjwdg6qKdaW852Pqx2SmCspqLGJvGxyAyUftpZ325FPjETBSKxwyqaGhRgwD3r",
  "key25": "4BESLJj7qrt1nTi3efxnehr8BC4EmMotusZg7hjD5YHxNnCvqwQ2xma2Cjk7GgJcHfmAVizdQf4FVZEjJJJNF43U",
  "key26": "5t3GsXxji47fA2FA2isduo63LV4iHJu811A4jcqsqLiU8zrsddCv6h1aDjESCMrZk3uxzoZBwUCPYnJMUcQync1h",
  "key27": "5TvaFF99xhNCBiaH1k2H18RVvgEGgHb6JFqdwzp1NkB9exL4HRUpCg54Zt15ThZ1Hni7LKnbV9okz5vdzoKkqC6K",
  "key28": "3M3xyJVY6vdo92gxJ6sDPqxE9keb32sqwirkbXxrkSF1xkJ5irthNzkFyDz7jpQEawi8SXVqH4KNZtNfVWkcb42j",
  "key29": "22AE8Yz3fbK2WkrvFo6xqryJ61s5E72EtcsnkphKz8rtosHNQZjBqtREgaAKnwPBJMEDHzSzH3TKL9WpPmWtbQdd",
  "key30": "4Bxox7Y1rHHR1To7VMvnaAWRSP8VmUxe5m5MNUcfFFY5Z335na5RLGFS56HyUXiA2dVbFuop5HCZWySCELnZUJso",
  "key31": "4itGKs7rzwPzXpSt7Ct5eKd1at5Hk5QLHkRAeNZA423B2nrceygGJvGFoK68UuqFjfdyPWVFNZsAhaNyabyYX2eK",
  "key32": "4iBA2xoumPBXjVCDSDBjuLkQgUHRmp3SJjiXsBSUUnhvJmw2yXngYW8kdfjTaGDAhH2PHYQHcGpnbMjUssjThMcs"
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
