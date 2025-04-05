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
    "4Lhxrn19fpiokZBxXJx9ytjhPkg3bipjXTN6EB8ZPCqUFKWNT51pDw27iBsY91acTPSdSBTKQiafK545XAxnyqeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v5unncc2HkdMkRMMjQtK2kzTJC5UDuhBE6CJ8hiHEnLH7cC4qBG8SCyPdPEXTwkyXBttiQgfJa6Efb8HfE19jRw",
  "key1": "3x4L6wy4BecXbsovxowsr1Z2T9m9HngVuSdcPdY3F3ReDPcxLkHy44zwihuiBqbqcjWQjnudMfhuGWt9EETGunvz",
  "key2": "XVD38Tzso5n9AyjfJ47RuGG1ZVzpiYgmXGpzup7g693VnfRr7HMqVWdYYW2zVoSKggx3VxSSg821FjNKbT7pgzu",
  "key3": "34q1eMPQVsWwiXaH2GcUpkPPwJ1Kfy5PoXUzaSp3gegjSkFcvU782ew1GtuZEzpyjQi7yJNyro68rbuo7nsMoNDB",
  "key4": "5J2qnmPxxGjX4DRAkRQ3kqYATMps8r39uGezDEhkqqQ4qttgAA4Sixc9LeXKYScHHMdRiiFwCu8RjtbqrQvHCKrW",
  "key5": "4ds1TKNGNDdXGomVYrzh4EXJZzb6zVUkXHndjBohs42dBKZsNRVP3E7EeH8UkigPwncZwCH81Qy7be5RkbHRSvxi",
  "key6": "2opWT8h6CRuRXp4YowmFmQFLVA7VB5SE7AaL41oH1JFPoBor6ZACXy172Z733EziMtd8T3vPh2Rb54RzAknntaDV",
  "key7": "48g1m6qcuqA5nq1a8skfSWkPgqo4mSBhBmqU8hYL55zjcxpWQdfLPS8m4FNxRhPGeeesSeTeaBHZbL6uKAnqTqLS",
  "key8": "5AS9Y8wi2HRDgDvHt2a2TCfyR92agdpibhQWhX5yYQ1NUL3CWDCgXrR7LtH4fSLcL7sJ9ULdH72FKmARETpqbWPk",
  "key9": "4Kgs1KdjqFQf1GEEsRsU396Hn3JMXtinsAcdm7H1DAgBHrm1Tzt8BjJVM4dDbiZoLrhEQEy668bRf3mW211qWrPT",
  "key10": "27rx9ZQdU1Hgf3nAJXCfJ7JnbZ6yRT79j7DjjKaMBj1c7ybhax5GvLijA1d2X1yXe6ipXt1CpG6QczE96vkLUstr",
  "key11": "2cmtArck38NfH4ExkCKVAJ13GfSQrT3SGW1nxMY61Spe7qHfYfwkduZG1yCbqAfBSqTZ3cmjynPH1W5M3fNvnCMo",
  "key12": "4as6bDwTzeMX6bdHzqhfGi6cyrC7YKETazgp9hdH49H4KDcV2LXNLACPFVzJb4CQtc5Q7V1uEfG3vb61nfqYwrE1",
  "key13": "wpFvcpd3Ny8s69rMFrqc1o3tR2y7rSyoBfqoDy5me984qbzfWFjZA3kut17FYmHTU2R2JUHWKW4c6cTxcupbBvP",
  "key14": "4YDYLNdDMwRgnW99wiEHHyH3Pu2f9rhzB7YKCb8HQqScwfdJh4BmUe5j2Gbkwp3g7cyyKGeQXqmvsPvmpK9eXZjp",
  "key15": "PUutYVG3do5WGr3sdNRQJbSEa4T2WEnkXGGjfhj1rjdzEMAsajxEXSSpStGqLEeWo6x7gzXeWLgMei6V5WDgwzg",
  "key16": "gH1hwQsEioj8df6no4FUnbPVNHY54owx4KSRErGhJA1z8b7whDGA8HEm3MYJPDnMRK2yiYh2ZkxEBSZLa2fDeSH",
  "key17": "64bzyR7zHk7KEKMvjGNGMBxfCGYxXqbvxhfk1ukANqZk9rC5ERqQV724XgadzsergnSZ1iCckBsELwZmMj7oHMLK",
  "key18": "4dYrjYPMmdkv5AZCpv7uzQpF8tMnAW3DgtUYNFgS3rUNJB6Sg27v4p6r1hAPr4CvfCccD94SqoFBea2Va33dbX2M",
  "key19": "5FFNsJtU4PZYTk9V5PPZMESfVPeRA3ATBXZK42ssdFgBjZ79YADJ11oJu1ox55hWP6RSvkE6ykiJdueUJHjCQcqw",
  "key20": "2GQa1gKJz5stZDvH4X6kgvbFkzD3nSZcsn4ydaEvbRLsy7hFwpGmaLBrr5qRdWfJBgGZ5EKJCSzqZDRYpSfCz7o1",
  "key21": "52tSGBv78zCLurhd72rz6TAAmdDQqNtmMN8eWSyUU14oFMWzKnMwdYUbH6d3GSjF71oHXAmhSDGADusTSDP13PRg",
  "key22": "57kiFgCCR49yWKzrdb6Kv41AaHPDWw7kLtn1T2Dmv7Zb5MSbu52QxrCd9eheghiGXduaHqBTFwEGj9qo8V7T4UNd",
  "key23": "4LzHjWo682VfFi7GGAhhs7gRz16Hm7mp2HZwzn7cEqxdPTgBnDvPS8r3Eb3N4KQfut4AZeUuRjUQcTbtcNE1Cdy3",
  "key24": "jzHHmeATFK44tZiEaUH25uLkv8gYiJb8v4VkozM5muxZuFi1AgLfC8UB9xZqyDktk76CVQB2mGmrcysGYzS6vEi",
  "key25": "5wCWvrQfYCoPfUnG8VXfU9r41scCzfsYbZ2Bx2qJWpzNaYDoABetwzKCsyPnVXhZvk8LDjqy6L1U9KT4Adu22dEp",
  "key26": "67H19C1DXzeogSiMH71hoqK9KAQBpTfSLxSYhSwvwiprf9sNNC4exQtqHbohfEux9xhzezYNMoFry79BxybvwpVn",
  "key27": "3T6nFEqkmEnVjDwwUuVYrz7X82hVaphC7PQRynFPBLkLUzGYBPTdeSd5LtuMwUYtDnwLGxCbxSeXhofPTps3xPBS",
  "key28": "5DsPUfWnn5waRg3Qx4V2DjWvB1TGZdv6QCrGAbJJMrji83SCK5DiwAwZvZ1DD9mXMyTCxucC64GXNftwkdDmVL9v",
  "key29": "227y4vgnK3JtitaRKGWkmZxQ8Wtov2RR9tbuUQQvwEu8cdVzwgBxUh3e4sjEmM8oj8u7w1J3Unm9PRQEGZB4f6gN",
  "key30": "2d5ZKwwRZag823XRLj3bEG1yDqfp4Hbb8gKwWp6PuFaQs7H2G9yhwBBTYNxTpfxJM4uZLeKLZggmbcjMDT9bsU52",
  "key31": "XgQjbG4aFLiP4oDcVHv9q3MURn6JaiyQzFY9a6itHE3DBhB9nY6kdZcvdHBiTLGb58vch4FhMcU6NMZZ4jYPZfx",
  "key32": "3EeW5w4Fm6b1zEDe3J7fD5Qizaaj1cGsBhMJWTqXzDnG5QJ8BZzv8dKSFQi5SB6VEyjLf2yFgqNZ7V5fEo7hDm3X",
  "key33": "5Dmh5CwHtNsw74hsVQkNLMXETcxnKmb5gdrPzaqCGA3k8CXWLtkaasBnUxkDTxdDgeR1jCF46wFfwsmGWV2VA5wa",
  "key34": "5DWUfoUtkhRbSGBxjouViDGF7KT1NycQwtV1aPLKmHgcSebVEWTxgLFDmPtVpPzNFPNwJssxa5NjcVx1E5wyv9iw",
  "key35": "3tN8KCLu58ht4fKimJJpdUWnfWFSTZVStgtDYRab4ygwpaxZXyfc1Sx95cxZkgdqA1LXaQykS8DwhTZhpgswHSD2",
  "key36": "2XJfTDTtf3Z364EHrWK6Rj7zGGYamVoqGvELFAf7dqu2dBNw3WzB9kqjyF9H5QDzAkKqpb91PuFHq7hZB22ygPRA",
  "key37": "34rs3uCDLKm7rFtHUZpmrKftGsJi7bfcF5xs1g8B1xwJUkXKr3PM5nTJCbMJYypPN4DXSc1VWL7rt1z9sUGqCM3k",
  "key38": "5CmoeHrVFkv9X8vrLTnL4kc54VvXcNu5ux44rmDMpVJm3QFHKxQWJA4HQ8t6dLJKTAAu8bzbL1cJE1RCWczNinD2",
  "key39": "5gjaFVAQJH2EoiErrTk1BhxSbD4e1ga388PVNd3b8pWYkwvYQpQyKrRWbxryf1jr9GgQ18j7swFXLpAGj7zRL8u",
  "key40": "5RcD7PfBKLSzcHbwbij4ZnukZ8wZcNnjVMGQqaMsSsSGQudJpgMSeWFDtRSQMke6P3xFfEsQE97zz3prdej1R5q2",
  "key41": "4RN4ypi4eaDRcWxdpcBeRuBwABNstU7sKX4REHhhapai5KDw19MqUuow7JkKLJrVh18GxcfvWuxobS4dX1oqLJwr",
  "key42": "2vTAcFmSb1J6g1pBG2KLAxNA3XDeuRbJoAPPauvvp4h41zNkFUddtivsSfJ17JESyN6ttNWkJGQ7ztMP15dRcqKD",
  "key43": "nPnH4KRR7g9pPteVoq3ii4ARMTtoBuH7Jcowqwxn4LADiZzmAfG6PHwqp2HYagHaK3ZThZUxrJPQ96bjLYWvtX2",
  "key44": "4AD9tmMhgZTgwNPBNq7HpiBw2xMJkaX9YTb7H8kDo3AkcENEyPUSCJkULWTf21wCU3mGXtHYTW3idqfNLngyLMYe",
  "key45": "keMpmatLZdoLjJdMXK6GpFZcCrn29gft2yQVjYrEyS4beEREv7jaDahRJNZBJqY14TY9Sm7s2sJnt9YY6SBen1N",
  "key46": "pxLrocjj2DkjD7dn1gFAcpmodVG2UGQvK7Wjr2UW7eAk8ejZCiQXCUuxq9TtHe82KN1kmBoDdqpzwLiMbiyrtMb",
  "key47": "4PA9DMQeYH5R8KxK5NmLrY6KvYWni8t3iMLbqWzasiGpb8PBZrsWB4MQWo3o34jnxifziA7nSR3yfgr1C2NWLamm"
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
