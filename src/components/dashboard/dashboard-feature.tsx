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
    "2nWqeLEKLFomzusKDYk74aLBRtoqiM7Jn3HrTMzYp4AW2f9R9wG4HdBB9EPtu22d3iW3CnHVq5MWpoqXqhMZUJ6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64nwNZRseazxqHYHuBZedsc2B4goejvnUg3vgu1LxWVmsaTA5g8BHLBDYzPpc1Xf3hLNjK7AunN65y3ZtxMbYnUD",
  "key1": "4WeFiXLsrJcCbFJXLveisR51K5WYkLVQoCjNmonZsBkGJ3G3v4tUJM7tqoyz5aM1u5irMNUGe7KvbvjRWL6xMj6j",
  "key2": "3Zr7TJUaH9aXqWhvCWcDZuyHUM1qLrhsKyCfun8PX4WjZ87hmpUYpurbtEtYtYJ8VbSYTq6z35yjtr5c3oGNgeEH",
  "key3": "3oaF2CWFVgLHrG1RA6UtMdQZuFcPULMB2nDm8fFeWLpyeQTerfGk35frDVGJD5Vi8zc6UGhLEzxz1zUTRG5s9XnM",
  "key4": "5bbZqNr9GijZNJuFRjj1wW8AnR98MD2ZfZd3fkBh68TBgDcJPCn2foWjAqSVSFiozFTrw5WfWwtYQLRyUL2LHfKk",
  "key5": "4FGKLMjJLQcJkgTqxVghGXBesJVNisPwptaiJmSZa39qrTf2jozMQ5pDgbdCNYfikRqxgLnqQyufy3aGhgqo81Ge",
  "key6": "3Cj21JRKhfLoJsEPaWQ5ew9Bbh8QKN26JMrtn5VZMaQogAeT35h48wcZi5BuG9VvHFdhyJ8LWDDuR8pKkonvVeRc",
  "key7": "5pyXRDLGmUPm4HGZabXWch5LSYxuP7TwhQWS5Nx7z6PRtLTwWzxmDGj9NgmJQktuf6fgZrurjJRbVqLziQDwuhVP",
  "key8": "3PFxkmfrTF3nmcmVaYrPUGudmgM1sxznXuWDbUkzbpwNmNEH6kv4cyudbxtEAEWwvtGaGiFJh8AZwou8gTZhG6jX",
  "key9": "5mLtj4pSnft1kPshqa44hs7T8UPCyTdfNoEh6x9STumzT95SdCuY4YPBZTwftrMQ9CBzz8RKnoY57WdE1iaWkHL3",
  "key10": "3EnPuKRrhMSKmvWXPPwwhc5nYvekSuMK3iuzj6v3t6cPQf3uaziyXsWrbFN6Xhhbbi5RiQyHLZZUiKNPCKPp6mtq",
  "key11": "2bHQxZekxfepHE7mrgQNgqt8DxqhNAHzWCreYUWZkyq6JiFtaW84si4JxzjRCohdVTt3CtteJFAi5LQ4VACLWe7B",
  "key12": "mi3zFyBADEAhy5SzM1N5TwN6eyX8WuoftjzCfkRSDWmikKLgHVZGnFgiZnK95hxvs6aKEt1SuDedP6DRbZ4ZxrX",
  "key13": "4unZbFUxXv3MUPEz4uPvmVrtmRCkZ7paynsKM4vBgSSEotAASud3cS2SzcrTCeprp9m5pvxmVoLRftd8oX2V6tNm",
  "key14": "24nyvs8ypmAnFG6dnF4dzV3Ao3HZ5Eh9iHYzcM4H2hE6xMSsDAvCQCLWuGWAccAfBxn35xjfJBAu2xc6Rs4zJZoQ",
  "key15": "2Eiwg8iUvR47HcLGzb63McSXXEExPXzW8x75Z8rjGKso18emJYY3tkfm4TRjqUkvECA3z7Z385AUBPVsqE4BuGZi",
  "key16": "4CUU3rU4uqmPVMJtZJXnDdSviyDa2B471NySE3VYUXyZC21YGQ1TLQvK4h2nxCYFm56QNh18meJK2nAXG3AqnqSt",
  "key17": "5KVDFpN3SA5A7Lzi4rFz1QBviSFvqaRmiABkc7RDnL7UwGBCWakraCr53V3D1E9YjJ1ALUk4D7CQ69eqb7tmVbxG",
  "key18": "3bqPY3YC2ZSLn5w3Sg5P6Vie3mBex7qGceaLUarkidynKgCfz3AD895eUbhHLbb4bcVmGVr96TEo7jTQdCg5Pwmw",
  "key19": "3RPxXgDStfYLn1uvdkqykMbcQvxZHtQpH6THHDFkXrJW2sQjxX7zgx2eETj9Ftfu2tSxVqz1wnTM2vxcuCaqZPpD",
  "key20": "5XfpNZjWaibEfWEHEJbb5gyNWk4xF2yS9YbPdRXkDfnHc7HULpKh689Bun2RJxpuW5LsZ6HvuxTTL5qbE1bQKU7f",
  "key21": "SmYcc9xSCVhvigKNnBtEBjJPuUuqf2BHvhjmSJxHvoEBVpzehbXDkGFrBpaFVX7WNrCqkH3vGqebb7Rp1P2DR1B",
  "key22": "2aTUMTcmePHV2hiQ4jdLQknxJwrJpn3R9koGQ5r8JrpU42MxQDx1ziCxTGQGczs2eUcSCes2itoS8qfm4cT6WHAi",
  "key23": "4pyxF1Kew4sFYTMDZZZm3pnWf4jXdKg6HUowDyBhUvqcv61npUqsEkrstSuT1mKwH4R1y2VeDMgj8CWe6jQ3YDzH",
  "key24": "5NbZ32UFSCjExpPkzNf89RBSZC4EeqTfMWxDChT79QYKmCPMNRqEk1jrLjwF26nRLXy6fy6NUSYFwi6TPjHD2eUg",
  "key25": "4dtWidiogaB1pDYi3U18AxUBrws9F6E49uZ4PSGVZ2jmU4FFMgcSLLzwbZvHtzUw7VxxH4LzESnCm86GNGbbXrug",
  "key26": "2RJVqGpPMfGKiqXBi7Vtqud3pvxPNvAwatjGjdQcHDjLfcugHB7WUyRmDoD9VgJJsjZJrsRYc9UJN7V8c1x7skCM",
  "key27": "4KhiAUDB4ZczDykVukB9MC2wuDkEMSh9xtxe7nm2nPCxeo4aiTioMpnXm4xUhhoqrYPZV4KhXEteRcVVGexghESv",
  "key28": "2zvTTWHYq7eZ3f2XWKWpVzpRLqWxJn11ZVk6vjncgUYHHivJn13iAwXzhrZDEHLHZE34zQ9mE2gMFbSNfUQwxekS",
  "key29": "5mmXD55AxV2hAakJALqfeSG7NGz9mn34NUcW4gq1rqMfwAnCp8pa98CTPyv7EgrA19fKrpcjjQWpBpa33aDyocPV",
  "key30": "JmsvtfZfuQwxcRyMbMQNcDwuUpTJCw42g8xVUXsz3vURpwKuTu7Sdw2mtFSCkZCUj7sodL1wXnFy4xtEHRRzoDG",
  "key31": "2dvGaxVs8WHLcVWzZLeCskAgHtmFk865snTAe2rta8gVx2XZ33HCZ2yiLVk9zBVFw1qGYF7k2X83efRAreRVkQsa",
  "key32": "2KMcWzYDdvS2AAVtkqNGh2wnRbPAQJ6Wh4wk5X3e4mduE4V81tbW5z6ngmZ355H4gmzkAc7njWtXYhwBacrqGxuR",
  "key33": "RfdgSPQxgXhrEkppb9c4JK2fd1cjffAcihUxqmS1hMhpeRnYvoAkEythfK1zvovNyaauEakdEeSouPzDgQA89LS",
  "key34": "abjYmXt38cwnvqjkQwwf4Er3bLw9aRRjuqeK3caGsn8gu2RLtbo8Q6pWVAZKEx9zaCPCy5tpcbkiuWp2AukGSJK",
  "key35": "3dGCpLFcPESAm4bP749jZ1q6SwrMiL1ujGQ2EkjR8PTbMuNd2Qamd8WgFJwbFqxEC7V7Se7VfCrpJz5iQNS7Rqzv",
  "key36": "3kz9bJtcKTMzef36GDxVqPvzpFkq6QAYGpeqC3VTyGh8eifsMsv3C7gpdNuRL7CtVnEfBL8dyekh2FLg91WWFndj",
  "key37": "4e6FXJ7hDq1ewzpPDyh6YZd6RWpbaR2qUXkMegeod2CCBkxMtVCYMxFtHKYYbCmqymDUr7kiPg4AbyM2jSabBxxh",
  "key38": "HLJQdVgGPVYacKftgEVuyhyeUh9cnadbtxLdkhQJqkrfQS3mRTyTrMUX8qbSbZYx87TTNESZcdraStMARq2va2r",
  "key39": "5JF6zcG5HNNF7T7L4XpTnTURY2AY2hV69kXwHtytdbuQwRaFcZ3F3Sbi2n5PQ1PF198x2JECS3kqTQBA9GZK46Nh",
  "key40": "3fPpUjywYJDhL4RwSUyD3vpf2hR5xhs4jGBxANpjUtXpbXzXQvH7qUzKBokdzuGnNeGpQFLkMr32wJeV7LJXPsWr",
  "key41": "42j1XJSVFYK72AG8JL8PKqFfwYMHfUtfo9FEndqAkXKWARa9WYn5EGiX4FeVjvo9XpSfgpQBTc8aTPfw1wH1X8BN",
  "key42": "3F3yG6MwM2HYzkE5iGUxcAcstUj69t5Fp9noWNnztmMmkYPS1wqQqwgrowTRk77kSdauACB8svd6tFcww255TWzs",
  "key43": "3m6gw9kAmAuCNDAAvi1iDkM46J36cveuMAqkLk2XY2oTWd2zFGVFrb5o6PfKMGxz46WyKXWkB4BEnpQPXTwjrgrf",
  "key44": "3uZLGyjd7Gy8eLf1zHEpWMQuke6oFTsFzPw94mLQoHhkqhmAJqUN5q8hat72trZcHUkQsC2XxFbz4ePDpPTsiCAJ"
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
