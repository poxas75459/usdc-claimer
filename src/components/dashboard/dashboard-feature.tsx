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
    "2F1LyhVko9qQ3eHVFKJkmK7Nr4jNQXxWJKNf1256KUd7QriB4wyoHdo7PEJBfpUq4GJFD9zC6vwX3UaLBxau51DS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "358f2MWJLkeQh5G6i4rBei4goV6SvDVrAzCmCvFcuBWpACX8CcG5E2nr5HY1mDk64GDR6sKSuG9ykFtMqF6VNEPk",
  "key1": "4GQA4ADmVfYJnEcHtZ1f7iU1e1hyp6EoQbH1b34p4Li99mSCFvyavD74bk1hfbHYL33HEXVKyc4Xi7nXhqUg8M6i",
  "key2": "jCTXx1EPzerux6reVA2Vs7mU4QhQGoPhNrEbhSVEE3QSk9csMBz8ZDTWMLCJJ3CczfuriQbRzuTRYoqcatDNHzc",
  "key3": "3kuHT9XBtCyx7Z1ccCCmCUecuP8hXGcGQE8EjjY9qVboujLDCLfBEiZsGNF2RYZSNZKSq8xkkqKeciKWsDt6ptDR",
  "key4": "2mqmptfwFjUvmALTBkSg23AEeY69T1tXMzu9CLtKwdJK7zWBkVXb4L4LRTVAoLpCuBriYjVgSbgna2QMaFzqrtwX",
  "key5": "49Ryx3biaJepa2TxXyBb9vw6prqvKbWqocnonFwstv8S2VxDcHbLoPZUCdWjiUVRBZskRiXvWL2QYVN1vZLHp9U8",
  "key6": "3HPDst7amW95xhLCYcXjJ71uzx9dwLxXtNJNg1j5RgRHyUSkH83ZTBd6kKC4WP4ReAiKYwgFpDWpWwSnraVbcjyX",
  "key7": "3dNWRejMg6NcLrH3oEvgY9JuKLB3AuJ7s7NDF9NpshgbYWikvYfuygku8uBfm7VQFGTrycSZaTYspRt8exuukjxt",
  "key8": "3eigQmjrtksUqxGFAi51C953XSMKx9623bfzaiYqBvgWVQKo2znQ3kLtfWZZjXjsEXrFaYoAgnxzF3LbtcYZj4aR",
  "key9": "UnNx7fYwADkPFvqRFWZx2UMcJNt8GgACTtTW3TD57xpHyiweJx133i3Qvt5KSJct6yYZLi7RmTaSS6bgTXqrMwU",
  "key10": "3RDCAH4EcrCFsqpcNhEpGGoUKdUuoSkcVTdoc8EhhuQRfvnzg4LKiZYtJYfnL1daLKH4BwSfaDXjryBEGvLSUYbL",
  "key11": "2gD4ML8jLcngERFGJyJqtdpvBi2U2SM6bdYhVZYpGzhJMxkuALACLRsx1MnYZpPkdZ5hkTNQkaY32ktPPB6pSfqB",
  "key12": "4uYZDaWjKamnceqR2DEPJQvis94gDCCD3VrFqPhFDXFXQj5LZkQssizG7uk1KJYFwTW8J1ixL8EtGmhNbHQ2Vxjg",
  "key13": "4DL2j95imbMJebpgqFxAnyxDyNFAEsJ3Xx3C4ckEbVbST89aKfL1RHaXniiUKZwVPcXSpkGqaTQvVuQ9v455Ffn8",
  "key14": "4bUVcpW4KdeRtEmMyy43LSQwBZfvxy2uVwAArW5EDTvPvsivM7vbdpkGwD8UEEpSA1PWfdV1n5yRFAGCjFnfqtAT",
  "key15": "YNYZUz5h18kJc1xrASCKqLpvTAG94woAxSY1aiQozf4FAFNUYMfh3kV3XAJXjiVApvyioLpKCUiS84vzZdm3Z9H",
  "key16": "4rHea2oExLLi2Fx5QgUKo8WF7iRxXXWh7ehHG9bZQE75hYvFnN8x5eijDenNKvHSkwQZ7o9wtgULzgebFwwhhPoo",
  "key17": "312RXLxV5iAyP8r7899oeqjwCsQsQoCwDp3ifC7A5A8Rn5qVMHtiZuRcfYYZYVFsne4bFPd1Tv92jasAyDmWoTBS",
  "key18": "3vVoziy3JVRK7TrUBCngiZ9vxPwnwr3iWfJzNqKVs3KMTwHfDoy5dTk1DQpYCcRu5u2agiRffPohR7rm3PMZWwCs",
  "key19": "3iWbD9E6DvNYr9LXcmJr9cBVHcrNRB15w73oUGmDdmWEDNV8NnwZqBfJ5gxMfkYr23r5fwQ3gHfLGLST63jzJSSn",
  "key20": "2peWqcPALimhQ8vEAE1yHFV1CzXUMk5KNs4dggo1g2LXcd1qGi28VD1qgFUVUPh3Bo8e43LUhADuMX3ZCwGdgaD2",
  "key21": "3iGM65GGx2qGJqHvNUiwnYoRJTMdiszDWUJfvFgbfPJYVVrUda2u5pgMbHP1mxDVNdjweiBkiy2r7QaCoSwDjRfL",
  "key22": "3e9HcvfDjsKXr6wfVkeEj6Y5mihqGmsjU5kXGkXjbrzj6KANoEENhu2Du6Kn59zu3NmqdKiQxuBkkr2ZiRCVKY8w",
  "key23": "3yjxri3pfeM9Nx33GnRj94mMHDpoK1ybWNCLjJaSUdUUhixzuCtfJF4StnvRr4wURx6PhcRruQSWsU856Hbq2ifb",
  "key24": "3RoTvgZ9wL7oVQz39mAiJoC8W5yL4RYQkz7MuZwnHAYydm541h7Cs8qYW8YXWtFiQpB8pNWbbM3bWgyNZtqePKTY",
  "key25": "3wq5McFNosNxmfReUemA3vV9yxLv4nFX8PWy7jMbVhFScCzEVRRRA8ViEJYPK1nK6tXAh9YYiUV31YqTQ2wz9vbx",
  "key26": "GpiZ88fUEe8KjofCgy1zfffUyXyumrVnKTouwCUkaD2Zwb1nmWJ1SzQF6hACr7aUpnBhn6mpfa7uU5f4xmaxviV",
  "key27": "5hf6RNNW582Eme3HJppZGKFLMmhxe12gLUWCsdczKLUtFk9ycjT6LY5VgQc99Wf4d5sGMBemMTWs6B8594WNNo4m",
  "key28": "fo1rsn3iXDuVRZfx7uGxo6kbsyzRrpaEvnkquG9mCzHfZa8ENZVRsmpHGFwA1zrXBPWXikCmgds184mbiMhFb8X",
  "key29": "3M1YtDk9tXhSwNZgGSvVypCcKviSXEiSeLHDdnB6iCDrr4t623KqS8b7Ky5Bv2eP8ury21q2D68Ez52kMr99MM8Z",
  "key30": "2h3gspyR7SoGqsm1dN3XNtq5NtCm66dThRiM8VMAJtmfTNREnZiDhXMaNDfjtRm6eYwVNAc7ChZSUqEZ2mqRBAcr",
  "key31": "siAaMKE9zhztWwTTLQMJyyPfdUG3f2vzc4cqFTQq5ZPZFCSsDhuVeEkkfuXtYTZE2aNujnthYmGXmzVzuMVrM8V",
  "key32": "4jVcebRSNze6FF7gCjb58g7jRzajpqjz7hW4dgg8bziqavrJHRGuMrZHoALVhvRWfZuPmN6eKJDrpZRJG2yjC9ZH",
  "key33": "2kBT7877JrUTcjf2BVcMwQW8ZkrneiauPwFyuWJpDKQbDpoChkgDLRXSsv89ZnkJiAN4Vq8CKXM9RmJageVbRLtS",
  "key34": "5kiCDEYDfjZw2aPvtdS5Ar5vCmEnbKPbUE7K9np2f9tWDwBFMTeLBNVkhsYTDR8Buh49KyyX12WdBniqZHLgtjR",
  "key35": "pyXdhLu211RWJ4HU1hWRA3u2ajdnRGT1K6Y2LBQivu7FmLRo8symJW8E9G92cNvRZVrJtWtFyx8ZrLgHohiqW5D",
  "key36": "59X7P75kcZ9npmw9nz3nBE43xcB7E7H9H2FQR5NPGJUJjSXPKAaKuTT1XCdzips1BYkqpbien6XNkByv6GyYD4av",
  "key37": "4HRgBP9pGk7A7UaPgvXhk4KdAWaC6pudMHEc6XTUesuT6mNWeHHHghE3gb2rEm3ufuHyjhQooQry13qMZQEZgv5Q",
  "key38": "64QdkFMFVnf9xkKAk6GM9ajpkYQFdYo1ihaGLjUKXv8G48LJgY7TpzTmtaRkXFPLPrHXfRHMFrzcwhEjwn2QQ7ck",
  "key39": "4GTVAuZ5o1LsjLYXtwRohP9XwxiCwAKgxEQyjsHVwEWwsVdHYAdtqswEbU4MskqE4GuXVPabdS6EqbQhEFBEActk",
  "key40": "4UrQqz5udKwXBVNEhdJpzy3s4o4grBpZ8BTasGgPytn8MnrQTzYMBsbBjpCzJmSWYWFtW3c5ipnaedu3w7KCbxWd",
  "key41": "4uTZXGJjFKAG5LQspt5NCx9WVfRJC7459eaprXEvuhNFcU5H33bqH9cnRa2KGeP8vuSHu42GQ6QsnUYUfTVQFak1",
  "key42": "5oGSNakJ1FH1QBe2xfdwDsjrYJDCsDWv5p6QBYUgVtZiN8tnpK8ETFGcKJ1THZAbVvgqU46tpnKCybh5huzZbBWp",
  "key43": "3XPi4AgDaWPEgMtUcK1iCGxQ3aVZMTFgc8SmMuRmC1dM8zoKNjUc1zauDVhsnn85ni3BSpgx5zrwcBTxXsCys6hR",
  "key44": "orEVFBtVx9D2xWS4VxEpb1rgY78SkgPK8zhM5bW5Jx7rzcNfKMmzuxcMDGpsosm6WBquDRdWD5QbM514Mcv6972",
  "key45": "2Y1xmnrwFZH13jcAWSJHjQ44X2oz5L4U39XRLL3bHMWweW4wF8Hgt7cUszg2NYoajKFyN1L3LYfGy1NiGQyrrfvZ",
  "key46": "pgY7h1Z4Dry3CQBsAQT2aTpWcNpJnXAneTPf3p7sEUdfKQVAyYbYHtVx1cgyAeJCx2pypgQznSkMq1xF2UkENug",
  "key47": "3zwurT6mAnTMaX1bQnbaxF6mmfKLU2KkCSBu9tA1y7CeLJA42XnoEtPoXoXZ1ZDbrZCuTS98o3i5PJBs3q2Vcdiq",
  "key48": "5iM5Kh1kRDTWYdwLTZFxqUtEtmbdrmhuSRGFThpXvDpih12YxR6dcK1ZNezZEUNvjp5mkBvztVyTdVk3Rpa7gA88"
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
