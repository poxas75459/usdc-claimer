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
    "27fNE3U8f1CKebQvFuDYqRm7X3sQjft2cJWwPhw8bCSmt4sss838inWP1NNzpw5fYifbGHSAdFYZkztLjgnKXU2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8fzE53uJ6wPmWLiNp98cTagfHhmWVrbj2vYAidopKYCXefparLYAHmZkiZvrEeKP39C4mBRu3KfHwARHRKdeLgJ",
  "key1": "4jRuLQAzhDxD8bF9GCx2BLz1DhBko49DVHZZUdqKChRBMxox2rBQyg8ySgPVi9gSiC3vRWxdwomJRCmn9QgfpXnX",
  "key2": "8C699B1ofahRKZM2rgqT22s1Co3RemdKbMgs4ZB5TJqhFeGSMtMc8XUyFq5shBeTJDEoCRwbJJXxboj5UJ7f5of",
  "key3": "5vsEgKSNAXxWXRNcup4CF2XZLZcj6f4zCmkkSPWz427FMU1WijveNYQVijKvKiHc89GGAWLTahHb2Gi2FWZMLjro",
  "key4": "5yANgPphtGxEVu2nVkRuXZz3gtG4VohRCFk7kVMiqL5u2AWys5wjSFzRXtyL2BFGVzvVNBeuMHtSCHsepR6XaWAN",
  "key5": "AEgs6tYCgjRmWpiZVFrwSR2eqjgpwM321FXH1BqJAz9uCyPQd5pMoejbmM4MQXdKobztaDmwC2ELahkeLXthMdD",
  "key6": "2xR6D6y127AVPVU5StjRQuf1TSxVjsjZUeQNuqsXBrL1bBjXhQW7VU75SVedRhZ7sQY9yrK494cteqxxPvGNHvpD",
  "key7": "2hKWSgJ1Xu75XoTPuir38abYpZNcFQmBt74DQUw3TEngZYuALm3Pg6knwqkZtq3d9rR1PTTqSrQDJqc9kDLpMeuB",
  "key8": "4JJn6AHY7sUVV5g3S5YoiWZNLYiUL8ZoN9EjAhA7wqNoe6hhGw1fT98Vswt2QkM8nqdhYHzSrr4G9LG4ZVdvhiaP",
  "key9": "3dSoDH6dexS5fvG2WD4Sj5Nq9rYwKPPWmNmFhoeRC4x2L5zayXhYAQC89ZUbogod63AcdoGVxYqLeo38hT6BESXZ",
  "key10": "3xmduc6KZFsbBMoSNjdhE8yEyrvYDs3fXbLDV7hbTsF7ceXiYTwx5KceNwyLKSeqm6eRKWBP1aoVWez665hUhS97",
  "key11": "5dAqEoMGST2i8KxVHrBdwCd164Lte57nhunVwhLeSbp3BYJWYRefnpm3VJa1aTFdR9JXjaXLa9zeDVe9xwX4KnHf",
  "key12": "4oQhU25dmDkEdZuurXgspwcbuAPMGjP4mL9i3vtN3bdWGxmha7mfj8wigUgKAU5khP9zmiWkDG8xwCsRcAZJW1hD",
  "key13": "2mHVgvqKLPEJqRUSb3f2YkyiXgbxSDE2D89474XnNWHNMsfCe1eEHHFJ1TZVYHMhso4ihUsMiEsDcswCRNiMJEpr",
  "key14": "3dsWAQHDhiJPHiz81xX8hWiXw89zDg1cCosjLr76HAe6d8BZX1K99vZ3qZpi8zDTYX9zpPXzyCohLZqhWEpL1nDe",
  "key15": "2TJNLzgMivea7nGpYhuBDHbqJNwE6yQBWfdupq72emcG8pYd8UPgsCbTQ72NzGXvoeVVd7CY3Gd8JZDvQDPyq44f",
  "key16": "5Fc1Jz8F8tYtGfYvL5oWTAcCijPt6J38d3dXoDrJtuUMDEaznKpDenoeUnf4AwHJ8AZZ8d2TqEVvF4sNPWArjpmE",
  "key17": "3tqYmuU2VJLbRubF5bGW5VDXEoeBFZ1tYj3BP63nuqrdJMxs5r9R7gaooPYZ4EJMgt8vRmDRSqj8sRiAMf6gnrNw",
  "key18": "36inCoRwy9RziKf3SUqxWvccjhaTsPzJc7ySrufWHPos4zvPXE2DpkJBkaMFXJNoXafhrqYPfznZXex3bYRYAj6f",
  "key19": "5S4oaARS7hz98BrtoS1VAX6NKsX8G88GzM7eTrz38BU3pBTowYLg8o1W65JPh9nAaNGeXKqsHJ2D5W5yhZJSgc2H",
  "key20": "27AsVuzakdXDsQZ6rhBFAU15f3DaqHCsNB8zUij6Jz6AYf7pRVbc7wJkRYmF7CXcJYMNLo4eSMi3Ke1zfmMMH2Ak",
  "key21": "tHCLVpRPTXRXbi4JaZW361co68KLsLnbsb11UoYrHx5pvbjgpGwHEoyuVnvMr8rGhKLm9zX81no8Cc36Ue5qNc5",
  "key22": "5cxrW2BEEckpQcQyceVjkvecR8ELdzjwFZ9V3NKDvqnUhsqkfWqqM21LStDYejNAG6nuzq7xSD2HKyGzWeFbjwTx",
  "key23": "Ev5wZ8UGwMfWWYG8LYpsWq6dpdS1K4dbeijevHcuMzLvLDnJUjeW6ABoXBKFp9UdsuwiCTZRkGYycuz7jjwFdj8",
  "key24": "63C9HZ9seNUFqgK9D6RzjmfxQtAJpyZGCH25S2UVbtvbnGH1x1ijojqdHsxYa2UsG3qpB8SZrKPKu1QCHTD8Tqm8",
  "key25": "hv8X6KpPfGfuPdtDFi6uE4xM2tamFGi4xbtt1PtJes15Hw7bvRcfeLbHR5hK5n8rTvKYeRfsy45yTWhfJgbCCpz",
  "key26": "44L43N3xs6quMLMX5SqVsbnekEXjykCFTqDabBf6HcZnNLLiN4rbbca9cHdKQFU2fcY8og3af7aXD4N7CQ3qkpMT",
  "key27": "2gomgZPF1jGQe8EhXLmX6cLQhmVTJMKbRCpTyvXsiA16Gi9eNUbYjyE48Z25ZH59S4gdm8FWySAvsXeKwujyxchY",
  "key28": "2knzKNPQUENJQ6HarrSgXTPxTn5KQr2oC76bhAfWptWN7aQFVNeyvv9TJhHxgkuc3w64voTMSsKaoK9kmPoUH26y",
  "key29": "2PkBgdYY1nchaS1GAzagViuxjCa3dmcH3VAzMyJZWR3frepc8ihqFwuXvKpD21LKHaW8eHoS3nNcxbKEYXzgCMK3",
  "key30": "4fSJQbYj3sFRBo6pMGVPfTtST1nQUxXiZi9keSUBeybCDt2grGCyRjxDtW1Jt3QidNjbaT6LkHfs39jKNsF27pPT",
  "key31": "3VYVhD16rS6RNfCNhG1oRJaRgy6zcXLi8rbQD4smt5ir5vXYxsZvktuzxvmaMs9bCSodUseoCxSLmNY186P1KcS5",
  "key32": "66YDrDBk1rWjEu1GxLfKAaJFWUE7GbJeiahAn4qnYh6tzBFBu53sLAbc36tyDUn4CboCvVyZT6dwyVsJgSfzj9T6",
  "key33": "2bD7xQzkyKQUSoQjfx5xnZEQkV4Y4xpXMFHQ7Fy5pBRvCtEQFs2gUQ3gPeNSxgXRdoRBKds8UmE5Vj2RNtfWwYgm",
  "key34": "XUCAD8m3Bd7eY4EwduMCWWngcSAsikBWk4CKts1ToktKtyWsYYeKBiNg5iHWJtxwUzwdf8tshQx66wnpbc19dCX",
  "key35": "2HxFacfunRzMry4PXddbcRdbrRrmgtu4CbWxBtF1HeVzwkFmZpbp5SWcrNWYvzQJCKfjEAzGxextqVnGRLKywvda",
  "key36": "3chgcTW1LLdv4CafhkzZ3WMYe7dAosnfzJH3W8TKQejop2ocxh4FNFf4dUeVfZdgokXGooLNrqCewNJCkQZQG4SC",
  "key37": "5xjcHgy6u8JUPnKVtPTjZ6BkFtuBrhcztUzWPgCrQTeXP9CbvY4Bj8u9YUMxhmEyUho7rgjVVmDhKTZCAF9qu6VX",
  "key38": "2JxQgtogepbWTDQPPtRPyd1WXu2Do1cdK6Q9bo35y35Qv94NERfZ5cZ6VjH5QvbZ7BTpkAnJAbDLUe3nGZoPS1ra",
  "key39": "2inX9guCZ4s9L5C8qpceH22fxXbiCwbvThZiQiK4fTsm6ZT3ty9kJshGfetk6deZG2LacfGkVMnP9sxuzGgtt2Wu"
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
