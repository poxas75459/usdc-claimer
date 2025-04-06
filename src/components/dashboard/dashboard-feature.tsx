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
    "1bwwoJiwNsKunDxQa4mohdbMGTUAMKyiAZfa8Vyrq6qPavSqdLEXa97sbkjpQ7chkLZULdQ7EDTt1GxxyM9tMN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qK7N9y9SGDXdy48tfQ5owZzWcSeX7eAcE8fA31NNBQru6TkYTdGYS9cHGsDyJRMDGEfZMXCpQkScAw8zQNnt89K",
  "key1": "5VyFqbKsqyknbtRw2AubG7WtsUhtxNk35sHZZQYV7XknHP6p4PJYettXKQJ9Zh3nFni8R7spDYgaRC2z9aRgmm45",
  "key2": "ADsCcQhxBvU6nQm9YjWYgpUADJ4beBuc5TMhYPqJMaxdfnivTSn3dWng78inH2CYoHfkJX6teuc4yTntXrGin1j",
  "key3": "5t8bLGZcQAskGxGPGTpHKykpT513D5rhbdocs65QdSfe544oZGXEo8sTazzKorbVB9YnhyRXaiLQED7QykMv3HHK",
  "key4": "4YUrxoqN7bRAgqU8znL8N2hxENvNtg9j6oNxphP6deb25SDqJ7iP5VM4woChWob6axcYhfL4oNaU4LmfkRb2ksDo",
  "key5": "2KHZLAWhckWTEQfMbhYutQkXt1PL476H5B9x8jZkxRjjCTPDQGfzn4ecVMDVGYWtQxXaVKGxybsZMtcqmETHS9xN",
  "key6": "3EeVvk8G2Fhfq2sJ8xo9cDoJmYquqbtbnBeh6vnRNAq2NQzRQxg5BPbECk5kEcN4c3skrmeQvxTVCJpnmbMD16oP",
  "key7": "vrbKxaYXUuErpSstGdFE4KJVHXc6P3dmg6Fur4egyVmotaXXhwaRAtkxM4JYbj8udu6sUPEg4qV4vPTh1gfcmjK",
  "key8": "YhU9xYeawDamTUH5bxMQSLYx4H3MBafeQ7h5nPhvjhGaPkPppwgwUTeE9uTG9BNrbYiSXP1uZAXYXGrNcTmLBAK",
  "key9": "2bTykmXXC12oGFFFVff5iZ5boPXXx6qJVDg31dMdLHj6ZgqREasfyJiUi7WCpNsgPfVFoAuwqbN1T2Ydqx6eKBdC",
  "key10": "37qLpztQENE8pRtaZuYXnB4HCMEzFRjZHSPz9FaTsvAKd1tcjLH5WP62nihH8sPbiXXNvCSR6ao6EQd8CQsS5wyv",
  "key11": "T6UjXkxCK67LyLRGZ3rGZTJXWSEfoe4Pe5QTU3PU6nUtJDefsvX3YmQNNMi4Lb5seRTfCHWyYjVsFkmfQgB1ahu",
  "key12": "Ge7EZxxjWaNbqZtTfKatamPGC7BwFjEYPJBBgEyYe2mmf9eNG5R75KdK1LKAEZ3xr6KaFyrciPQ1jy3oeuisekY",
  "key13": "2ffnRArsA7MDZLER9gzs781DY5WUCxhb3vkKN86Xru7vmCRtvJ7wHm3hoShnbxsF9Xf83M2F2HzarfwkjLP5PxA4",
  "key14": "27MnCQCwPKFBpBqB3m8SLwD2nD2g2M8YgQCXPiEtWeZqfyiNPuF7ziV7RuBg6JJV5gR7yzGjGhgc8nVP4JVqfxGv",
  "key15": "4TUT5WNrUF215rnRTND4noqmvTKdiW6UAtnpMRBQ8RW172xvW7mY1ycyiDPXfEL8WDA4nWLSWUMrDKLWGoxhqV6c",
  "key16": "2GVPevoVHWEjv6tYf8kUGZm4r8M65SftKe1LEjZefTeipWZ4GeBcKLPqtzZmikXraCjnRb6mvnBe7vBGRhbcQSVh",
  "key17": "3AYximaho9sQFnKVxjQjTwxgy63RkqCau2ndDBny11u3BsSt9xfUmeE1NZtjmNyNtjdMxyvBMKogj83384s9Fe9z",
  "key18": "MtfFbjn8xrhMs43qfDzKsuCwrRBPYoWoqcVqsPnqe2yQ9rgddcEjsWWJsrQ3wif8YuMNiR53rMUCX8MfDRQV7WT",
  "key19": "2Qxisq5DyXBGrDQZsDAZSWKBFHhV7DoTsiFWcPgZnsZfoejUeqqZtpTXWE2n41AMibueWy5avqqhTeujre3PM6c8",
  "key20": "2Xy8oQyaC2LUxc6d3GmtLNzSCi5A7isEtAkRMx9cZ61fceVFZV184r6dUYRusNXmTXBzqMmQGLhxJ8FqeV89s7td",
  "key21": "3Tr7RZqScdkeyNLjvQSuHiGxSDSKrf3GvG36Kyrm7LJYvy8RNcF4XLBgMkgyL49CNDA9gusHjfps8KhoxxW3JMvm",
  "key22": "2AC8PRWf3hzi4HQqq91zm9fE22rEQfPQHeZkriZo3cNJavB91GrCXdyukBRoyQqSGMfgTMKnX9QFSTCiokjp1n5M",
  "key23": "pBSUZXJ65rbQMTm3YDgnsuhop5mpvcBTLtFhYrVqbz3qCkhkUuu3S1B4HhRhUAj1gnHWVK3KVsrw96b9JbRnfcH",
  "key24": "5Na998v6viSvc2wx8zC6RFs22PTiBA5Gqf5SEFta2mZT2RBLg2NaASar7CiidtPePoLR9ZYJLnZ5ysdCsPLmdruK",
  "key25": "2DJjV2ED5PtvmSRVn8cXPwXsAyR7cJtNrEbMTWv19oVM9EwenxBRgmyaLGEjuvMbb5bmP61AA5R5Kmv4GQn4v3fV",
  "key26": "PGG8QHPKWcGkg66oQX2Lat7TJCy2n4Wrpkjg6xQ6dHzTQAMhADS7uN95zxvmjUv4D3hPvZJemedFQCph5BLA1xc",
  "key27": "4axuZV4pYQSesufA5pFD8AoYMDyxxATXP3PnUikpRCUiu5ccKP5tvc7dhhy2ZYxAFytGzPy8QYEBZKeSEdERWW4E",
  "key28": "5ZQs8j5wkqGJ5qt9xdFk9bRXLnhezMGs6KXfHmeJbPkfvTfostrCdR2w84QNDxsorwmhw9a5bzytPD31CZYcYNm4",
  "key29": "2UpF5qBLC5BMcngX9MnAh6yGU8E8NRvohBoigge9viKAJuR5tPKnaHxyWhRFfmFGVnYx9Hor1pSA3eU1vyAgTNiP",
  "key30": "LBY3uJPpxhkbfy3YK2Via4bD9ozhNqi8qwyTi8pZdJj9y2i2wEN5nXhM3uCDD7MGjAMumgKL9bMvtBsw2jFiD1S",
  "key31": "46p3SrS9vspMSW1sB7qr9XYX1mQEPW9DUAX8jQbdC8nJoba7zyiyCDNTgUs3eUMZfAVNSCMrPWn2vrFQtz6fWngw"
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
