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
    "4dQtcLMvh7dp7URpuFSq3Ws2SZjj4aDn9wgJKbcfBdr73QjMMf856PHrZstvSQjbtmrPkDVZB1Mb4Q8o1tha6FnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2onEq9WxQyM2uZ1A5d7aZDuZF7BM2fy1kqXnuam4WCSwYsN495VcJcohpBMcACjnyqtf9UzKF3g9k6W6keCqdGQH",
  "key1": "2eHsBuXTbXrtnBVAdX1YwDqohQuJUnFmLtHMTCjQgFSEU2sRdQDYxwwvZoWuprBxdgfaz5gRccZbpvHySAkkRMUv",
  "key2": "GzXj4SdXCTZrrXaWyHGGooZN7JzCJSshRWua37iksb716YMkdxHJADukRo2WkSsdQjxVjCkHBNpeKz1jrBfkhFu",
  "key3": "ximpGmznDz39A4pHhtccJp3qxDHtZfrsMiiNiwG1Z3UnUmC8B9TwZfoJjtvc2JQAxTztvScTGCpkWYEWJZSGixk",
  "key4": "3JUb7Dr2WDJkBXBudwpT5vtv8QBS3cX5waxPCxo7bpmmexnoUEUPgev3aE1KG67Btxm6mXuyWAU9cYUo63gfxLoV",
  "key5": "2nazNJaojTFdmxnr1TmAtYw9UDPxMctDkXkjrJ5i3mMR5tjk77vDSysAGfmJbBfe6SzmBCQAoQuRTZGv61zScG5b",
  "key6": "2H4NPzwv8q3cjSjA3PtJViFeiGzFSRNkJJKNbhLzQwirEjjHMFMTTDdnyHe6zEu2YkivpqctXvs9um3uyFmePXfW",
  "key7": "4z3He8CdSfzDUE6ZDqTiTv539AxQpqMjFaTt9v2VQSXweqvwbXFgcgURrvMWnXmDydjCEVc4Dmqmr2KVuxuGjhyF",
  "key8": "52D3pu9hUiLD2kjczJXNEfHwd1GrLchx831PgMV38CUtXghy4kczSKJxRLJdD25DVvyyHuK4tXdyE63pm54YGVZQ",
  "key9": "2yVYFAbmQrL4TpNfeLcFT8BvjdXbSBtCPAYXMcEfbFVx9Sz5UWwaUn9GBiDS8AqMauA6fFbY95f3MJGBW9dEhJ5M",
  "key10": "3XJVBS3p6C5DnGMSK6omF2x4J3cfTRXXjoTySMA56tFTvGrsEWjFKeevqVGBzuz6renx7866Tri3WRnHkrxiRATo",
  "key11": "4G2h929AZBV17S6w2im2AW9T6pdsobgTFA6nFdnJMtfTuMTx27HBS8EUNRh3iwuky9nZ8Yt41Pb3hjU7aTzgGNRS",
  "key12": "2LCtWBFetAzud6fBwaTj4wjT3kNAAqvcYgxgJ4sc9gEPbLiyF1hKWSDnh2WrVaNpY2jca3XfR16BgLNHrwF6ocKX",
  "key13": "4EK41LJRLcexMauGQ1BHGtcZbEAL2pmRTQWHLc376yDQdtCrhrM7Znh8A4zWqgtXgPsqkR9iK573GH556nSdYaPp",
  "key14": "3LWwjnWGGLVanc5B62toL5DWUEs4DuYhq39sqdQVo2H6bqJjYPvUedhJCATwfEjncnMocvZ8fg6ayoLatMmkfEvH",
  "key15": "127Fp5sXtumXYAfns7zq4ggYt2LB2PwYHPDaFso21yakoW6jLadXaQpqZH763Pr2faxZZjYnuXdPRNfqRD7uop1e",
  "key16": "3cEYHSpAatNRAvN5Zcb4sxqHCVb5iDGNU1no5oa5grm5vgxBoJedEreZ9aiXy1JipHteBz7fL1PybrhBDRbYDSMq",
  "key17": "48CJyUDdTwvjzRcPPZF6x2j5M7796XDxYRh4wuUrKLTb2srJL9Gzruv563yPmU5TS8xqCYBxKxRuV7JcFU84t1d8",
  "key18": "4uGo7hScCy7jtm5sF2e4GRoCzxGWKtUkeMDeVbD2bYdauHBfd58832qvWY5tKKYetCwwi8yga2d8MBvHLhw8U5wY",
  "key19": "4wayYpFFxtBx6XDYRXK98MxWbdRw4j15WwAs4qrfWDqKGCwiiA1wSYHBNVEy9rYc8QRHV38sGR6YfGDajC9bQBcW",
  "key20": "sg9CrMHPP4FJFEtrcYNpqt53U43fVYpTAoTYHtWPRMzsgFAxQqQdtizFcfKi8RAgZqk2QK9a9J7X3pQE2NLJW9G",
  "key21": "2aiUGoU7qHNkbCrAAjmNByfQ32TmfA3adbnSMsJohGbRk57kBGLkwKcrpfb8MBDxgNfvGmdHSLAgTGASjFGBeMM2",
  "key22": "E7FyVMTKaAzMXaD1GWqXTCwd5vPEXwYCHjiMBnoBaE4hpa9utGDqLfh8aWU3J1djiq9UG8aULmfBzy5y41hTzHR",
  "key23": "5xHdAmuWjKAUVwT9zAwPQZ4LefZQMWKSBWbpCk67PS5PsvRquyf1ufsPJVTZVoXXMSYbgdf2v5vY7fZQNJmQmdxo",
  "key24": "5seNfmuFtSaKPFRWS2evRmCHPFjpmKdRuwpydTXW3DzqjqFZcQWLRwwA8oT7CJzWayaQ7aM12hsMvK366zrVzjEk",
  "key25": "5HtAwynvjTdfcZYAdQMh8xnS27VJ3ZMY3BjYRxdAkeaKWVK9wX182EVyovR8MXvfSzzn7uEpxL9XAhUh19cmfYeG",
  "key26": "4uK7D6qFLAvCDV6Hurhas2LrbeFCCS7QnTjZXkjqA83zsFkkU4SxkJ5kpXHughD36n5syw8qkgxC5mmgMFtsJXPr",
  "key27": "sXhpRgJ6UNR5DK91ke5Vin1PRqMngiBQEwbrjHbxaauuS9YW2wmApk3C4jgJa4BrenRKkiTsyMvQC2x2Mw38H2x",
  "key28": "3RygFwimW6P8xfKzTNXdToGoGLoxsE2c8qCXdEgabcHNndT9DrzCHr1Y1c72AaEyFVUMRvQhPLy1fng9u8LtEgUm",
  "key29": "3n6jVB2q1mvTXDFQGnZmNo83RfkS4fe1PzrVpAs1iFjVpBEgJnxA9qig8uvMggGPT8ti7D8Mz8P9EjLnmMVrbzKR",
  "key30": "5Z4JB61Mfh7TwHFUAQwDTdjeLt2B4K772Lxxyqn5vReGJTLoQxF1vLiLonjvibE5zPEcP8Jtru92oXMmprGMHAQe",
  "key31": "dauwy8LQvNg7qrrYsEia6xVU2Bjia8keZKqrcKu74zA7EUFS9aLvCUPmsj32JEb8Wffr5YX3f6D5gFJKjP7VUSj",
  "key32": "r73a8hWfR6eAGpRMsc6PbU3o4QbmVYM1EiWFz62QMDKxzzQyXSr8hr7yJ8HccFaGrGxSR11q7nP2ydrVTggewn6",
  "key33": "4pv9ZopPiyXjFPfrS1rJRXgFgxQq46Lc1mX7seiR96nMWhMNysf3pB7M53s7hX9vTEdNkL8SWvs41Zgyt4qRTePU",
  "key34": "2GtxVZoYxS8N2kicqeaP2jpm3Z1t29tdiHcFJunsJ44mot7wfw2qMyQGcn2aQuqRCr5EeaYi1avQYUceMXQKHDg",
  "key35": "3ddREy3jxLdYq1U9BnnEuWHBUD5jmTBRBBMh5WhWLoTwzySyF4L5PyNd8eYcwyyDJVg7QetvpUYyJkox2PXB8FjJ",
  "key36": "mhRwqihUgmNqAQV77WrrWTwgovbNEPiYWfoqYQfgZ1hCLMwnsKqwRWhSL4NNdBq6JghKFxrqUEdwYHm8CsnwSfn",
  "key37": "34PXpRAcXAUjbauL9WUqd3WDXMMHNdgjEe3i95A35ThPdyXmhtSKgGAEJPtCkCvt9XSVjZj3pV1wxLpNdUrvh3xZ",
  "key38": "3LRjz18FuWKZpHiEAGTrDAeTon2nezoDth3kCYawLeDUkBmdgUmcDMxQwR4EnW6jHcwp1iwPiGNtyUecNKXhCw5k",
  "key39": "3ULqW3nv6WgBbeoGrCMnytfKcxJQgxTyxd9tBbH3idEWXY7xZefz61FMdj9iTPFuF9arFwEAMDw8LzKA6So3vYYx",
  "key40": "4dXtyuRovedVZeErVfL1mSvTtpTJ3amVcVMYeGRjY6Bjn7b5gRaAqYwPUrXt42WuzZ81CRheNGc8E57LrDRkTtem",
  "key41": "22FYMJaMP5jB7mrHGU3NNNtCRgCtXsAEKyPJdFdK7LrPGv1WoCiwnR8JULrY8uqBHSXhhCQJx41SrvcZPxrSbHmk",
  "key42": "3Zvpmv4EQz2ikyNJxvQFq4kBa8sKdQ5Vo4MpNrhuUtWCAbgVeuSqDE9pRN8Gp61opGL9sLv5uYH69CsMHK5Z95YQ",
  "key43": "4Hm19NV52bJrwhJXrodGVSgDBsshaUpHKUSyQxcuwQs2nmohPEcgKqZENtiXFcgQqSHmBbb3aeZkZ1SVFsXvBNeE",
  "key44": "2kwK4kPMfGyctVJXxo7QkcJCwJseTkfu7Devr1z9VDjmHoJ56YYuNcjXCPSiT6MDbpXR1UbuVjSFNqFqyMwMp5py",
  "key45": "3LHxdbyq2kwPkcvHUMxJfy2LsxYZSBtmhs4J9L2gatbWMaJrTSxN4rF5mmcdmXATU57sr7PgvZAeWPprRcomMJZM",
  "key46": "41Hv52kteMPHEZruD9pDSXeMnsSFpnh1HeNcVEGXN7pK8e2zVKjWAo7r3Cv84WM52eQjbBHgYRgTk41uUx2fBHGp",
  "key47": "3jEjzQjxW7pbYYrc4YV4vdumB8ramHidHWFt34EEbau77MibFyYKjTeCXredeVELSHBSaRWR4Nti1XPcKT7kcaJm"
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
