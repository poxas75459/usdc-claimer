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
    "4RjJdzeXuKbsHmLZKZEZN8votQeprQoAdsjtq6m4cs6Ny9RvqHs8oYBhwPctimZANG8gbwfXytkeg7of9jZsT2ES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nrw2jU1DraNYS9Kr5PNK5aDVfgiBvcHrRd87xbba9aVppqwFVrPDibLdLQJFtthfYLnBKNUAuS9ghwQxcypYvbN",
  "key1": "65JUiKBYs6goDVcwU4dqhw2KuMvmdU1ujZi9GgvjECEdoRXpmvaCGnyqNBN5b4uUxcN2ftyLFBRZdagBsfPvkL2G",
  "key2": "47hzhNLxsdcBz7tnzPbeUQpacaYTVoRdXdeGSBd1azRvjNtfuFnzhS19U422xChhVsD1ryhfaB6NWkQ6c5fG4is",
  "key3": "59wSpgA74vfowpapKpVACSUHffGDFddPvmL1SC9FSdR9JkJB2479cY4cP9sJ9i9FAuczyScCAC3AbCyxVNycKJZu",
  "key4": "4EP4eqD2obCpB3Afb2yYxZc8bPYdhknp2knBpUC6DxhJURte3Ku9DGHWLbQAuKaZhQP2FBh3JQ1etBUmisnKhMg5",
  "key5": "2cnqarXS6moJPKsY6Vsr2fgaJpjHCo6X6Mu4dXDVknSMTa1Z6DWD1frKuZ6K7umeHEkkRsPSkCu5232LLpFungvH",
  "key6": "24TtS4CcfYwWMwUCoNRWBTGG9Ryrx7wLrKvgUMRrq1awhEGcVKAwtFfAHkd27Vg6PXLu4fbjXBASNRFacfaHj7zp",
  "key7": "3FgghwWa71nPoBWhULfyJPBEY52wgQK6yjAd7jzAERrLad9DXfsuZqAhrn8p5jvijsZNidGzJ4xeAnMdhNB67hCV",
  "key8": "5hiTipXhwQiQcHQF9swtmkndenaToqg99gcKFEqnL7rCyav9AVfo91FvMdUL4SqnEwinLEhwkeSy3rrN3K7tXStA",
  "key9": "2esdy5ihvhewUv2MxDGes9b4v8RBNCo9o26dBt3Z4N1iw7PTKjwQuvUDJMjTa1TB1bunwPC1u38UwMqSEafsXFwX",
  "key10": "28j6ryx9k9YosEikcbPfKXThLmmbyE36PJ217MrfJ79E6cLuwvi2oCxCazFU2zEVJQ3thhZ29iRQq3d9eDBEoqKT",
  "key11": "3UgXCwW4uvEPSAygEMdtGmgmnM1ZZ7bXpoggzztLAp5uR4vk8iXEVHku1yijUA5pVBEC5R2N8NZTrcyqjse5LfQm",
  "key12": "5Y1EuWLjWMCBedTMaq7nKiwJecbmd2iKiAJN8unuUt32kMrE4iHfYxWrZYY2kJ86eqyjdEpTam3ZCsr4uPZ6h6Mx",
  "key13": "jGuY4UuN9zpPe8uuksCnyLy95wqGmFLTexeuYvKhPDwWqyZ4aLxhsR9PAjZ2i5poYdUVqNS87yJA3wUzzqiR3c6",
  "key14": "3GknaLPG3YQFbMhQrnfgKyW3oFsT1SS6Jf93C7xCRhdgAYA6kJD2qbXfycZtqH9DyBydamDpSq6r2C9VnfAgVKZe",
  "key15": "5ycekndKSwT689AUEdubFjSHuXcEVWjKpPAnnDtW6rcFR7BeQP4toYUqLBGM9xiEMV6PE4dycruVWg7GWpHVgPx1",
  "key16": "2vpB7uTAbR8g5sHGsKa7TypHPotp5Fcpym2WRpH7krJ4Z8qRsEEKn7v47fvZVNUUcMw94A8NNhmJS3oNkgNEtjta",
  "key17": "AGY2M35KT9GesUyLSGBGNRvQCRjxUMuzKWkXvtr7U7GpQV6CWSJgDeKq4PuSGdKYGQZMcHyFAL1HmxccVY3LpQQ",
  "key18": "5gWs5fZki4chKyVM2egvLtWpTF3UBpr68PYM4Pu9Ay6acmaix38xtqtYsTxhVxhAGyodhv7Twm5XhUtNSUPN6kLn",
  "key19": "3cbaL5Kxa3fTjgTcv6pC4iLmuZR45aZiUQy1pTZYuRZFhBcXycLvNZfyAZTqA5ffXUy84TkjEjhNWRoQ9USAP2ea",
  "key20": "2mv1vDLGCRvZbpMvsW238f7Zw36iv7smZXvy6rbNNhbLRc7SjPZYWfNoxHFufbcgsTuxb8LvjdHKwxuSeL8UZpCG",
  "key21": "3QYNw2Y4Y1MJQBkKitWrGzJGQg7EGEip1PeKmhcRApsW5NBJyKfuxdTFUKqVMTP9Rm94u5d1AE4CPYEDgHA8V7Jn",
  "key22": "4Mn3QTHK7YRK5UjkiaiQE8cxfm1UYb71S2AeLEi8djTzUG2DcP6U63zAtG1auQD1g58r6WF62yB6Kvz17UWgqhmN",
  "key23": "2ZYW6NFJr2fxAk6h7NNfa8o77vMHDKxmEBMRATTMBMdtT7dq9ghKXnqULZYhPNvWqXQ1su4E5n7e1Qv9W9H5h4WS",
  "key24": "2yHZBUAuEiUfXsU43CpVW8wbrjCDK7wHmumx4dAU7qPpVzq9hGuptA4UW7nsWvBjDzajEjNMfwt5Rgmk55jrzTLR",
  "key25": "2DuXmybrunFFfLKAUCTaHzE3HJBnmyutQ8HiGxPQprNRdyJSjCHudhSonTEsLS1WHvG7NoZqWtYnMRvNXQKPb6yW",
  "key26": "5zRTJk7y4j4zeo8zXd4qRoLZXABmqxzGymYdiQ6NY3nX2zXwY2kF9tbanR416Yity4isE2qz4g9s94zkqQdEiiPz",
  "key27": "3T6V6DAD1L1pS89fFQD7EU6YVgCThf1xYuayJ1hdZB5sFwassE9cJwyR5UV8hom8yqXvByxYrrP4j45QNW6DtxrE",
  "key28": "49rF43tTZ4GNMFqBtvPobQwym6ieJo9NfAsdvXcDo875s3Ly6Q9SbLUwAJqaBBkfWf2gzWnLZxfivRYiRsJbKP2n",
  "key29": "4RzywTjTAJDiicwL3DrnwtaxGDndMyQCwxTfU9zBMPAk8hBCTfu9sTSa7vH2gNvgpcY4YLMXNBUbtm2LQWaqv8bF",
  "key30": "WpejjhLsBV9spQbEShKhXV4o4oiVnQGgB91ux462MQjwmHJxjWLyfgTrBeWzfWJGiFJckwZcD66YFUr497yY3dk",
  "key31": "43WznNpS7EbtBwgGrAXRej4fCFCqGztPsLqw3kiGwKyaMzewtNCZKE6ZziVBLBvrkTxu6n4NmhLhCzwhMajEMyNC",
  "key32": "2PojQE1i3JUdWiuYoCZMbB84qwyC63oJ2YLLxLMFqgrx723JFoc1X5mHgqmu93uT7uxKaFm44QLBoXJHSxSPWwq7",
  "key33": "3GgCMk5425EXfGXQeyHYdv1yMNZWXo63Ep4cM9SJfjMxMsNp1i97FTEhnNNyJNDTWWEWhtAcdpRrSvfKHpo725eP",
  "key34": "27YkzLEhE8iP9MPcTje8PuATygwicvDDAtzm52F73TFeoDpswQVGN4yY6VUoznFvUtsDpgVG1fNxViwXNnbxUmqS",
  "key35": "4Xn8xpVWu1MZS3QKGgkRUTkypzhA98juvvN7PjQ9chgZMPtfFotYsyVwbCAbeSJ9NUdyGs7qciWuEW7jdDgXL3Yq",
  "key36": "2ofJUhSNY5ZvTBaJxQAmxjFuAmxijn1U6zcti1foU7rdHpod1dZ89HpHDvswbHt4XzAWaBTQYgVhrvYywQbrbviK",
  "key37": "5iJg9jmryY4XZtjwvbgqo62ruzQ4mE8CXJQi6Hqi6H4MGgupKe56x8WzMWQ2uz5PQqmHsnxM2Zss8HUT4BNLsfVR",
  "key38": "4P9pcSxN2XzaLevVx3FkB1mXukfZMVVZyNwB2JwzS4gFVYjkLPNRNFcL2n8dcJLhzq8nFKKgmxTnguYmgShqbQHR",
  "key39": "26UXvDkVwcWkyHhZ3KF2C6yjuBLXvAjxLu5RC1horb1qx5pXkWod3W8HpUAZaoTYzfJi2oeCmErVVgKSVRnSshCu",
  "key40": "3yzzE4H5djMuHUDmVGS1nvBdFbEWE7ZHQCwUGMEGmZtaPJUvASK7VphEUmFdAJSNUps4yEmQXYLSiAGoG19ifhfz",
  "key41": "4vgndwbKMSCt8DVyy65RufNXXdLKXnj6FmHN4kDGr4h7SVfkPvP95HbuNNXasA1R12Aa1Hf2qocyjagZWPQQvFpc",
  "key42": "2Td39FibmcpZ3sSUTDHbibPB6NgbWuh75K6UdyUNAb6vmsggvpTzibDqvwWZx4ekYpfrNb1WJyzRCoD1vnZKjJEX",
  "key43": "4iUSMzvDWwFCYdDyi2fy1LxRsoYW8ymgs7qqKAM8EAVqEL8xyzXMrvfLc1FY5MmqkEJXwfiHyD8o5KDbzJFVq1LE",
  "key44": "4RAMkA4aLiaUzTEknmBbnW4MHXted96ygeN5xAU2gaj1C9xmzw9xk55btYhDY1nnWe7EXAFhtJdru24TtbrX9f5x",
  "key45": "J18qfkuQnHpGAtzx869nfhnC3Lyqk3bm33NwNdJmUvF3rRwmJfLGdxjfALATtcs3JAkcGJFMH5fQBbcRYSPqz3m",
  "key46": "3rXiecWx8BJfRr9htiUeJouGq4t9DC8Ks6HamPY2jMi7iZumJppRJSjYibA5FpyxF7UZccimVAec7CKpsf9iejd9",
  "key47": "26q3FsCyKziFsXh1UucRqJexwLzNdmY52sieYf3MpJgJn9hJgLwP9ZWfQ3EvRXsetgXTn3bmJHykXppLMDnxcE3E"
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
