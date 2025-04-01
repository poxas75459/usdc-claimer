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
    "2qQitfZN4zBrJTm51aVVeDWAxqB9RmVUXMMogt4ZE1hrRxFHPcvoZiidj7mYVzapnG31y5jKM8y68dU4tkCSLPZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Z85y4aUMcR64ZQ9RGhyj3jerGR9UPKYy3tSmFkFSk8acxwWm3m492nDbbw1sw57wADNPXz3iFgiSkhjeySbAt2",
  "key1": "37oGv9pV3A3yWY1M5RDA46b5ypoKg6aYpM4RcsCtCucLyQPRKFgFzYiqKQaasQoKZEiFNugfmxDGnAQPBsCMfRKo",
  "key2": "34FprGgq5fhfCAVbnHdRc4PeMjvisNpYficC8WZxS4YwCpzySzifd9R4pqxAAH6jZH7r8Ud1LpisVJN7uDqfmAZe",
  "key3": "2ihEeQjKoLhzPoQyaxPfSpKSJhW6Ptxchqe91gAJoP6ppaKVSyXmvTmWUMgVvBdkMhXrXNZ4nyWJSQzwemi9bAo3",
  "key4": "NHhWdRnRUdaj3fc5fDD2TCieU8HtxAdLGGhFTgutJ2uRTEAKSASGXibDVVZWkF35ZHtEJTCP3jqawbKBTrqhkXb",
  "key5": "43dStLLsja8mVkK1bMY9g3kKDq26nDkFf8i7LSTWoT3qYKe7NKx4qd52sJVjZZfCPUmo9KZe8WSpC1QXZvAMbnZM",
  "key6": "3gfqxZ1mCgsJGuWcyTu2syH6pYAh41oLb6K5q6LxF4nzKwZed4KADfLpPXvh1YU2Vh9BjA8xLQ5vXuVZBeAnDMB9",
  "key7": "2JdL28LGDDyfxNJyaS5VpSWfEmd4WMkjYzGBjWpvSNC95LUJbF8gAa9TPj9k5CKa9ZeFFbsr1hNP9qD49mZ3V1sd",
  "key8": "AGds3ATStkDgfZPpSsGFXT2PVncnQVeLQjjbUFC8BkeXg5bNUyvuQoQRiZCLfWDcPFqvp8tjaDn7r7gDVJsYSk6",
  "key9": "Z4GYPYRChoCxQzPYS22hXB7MN3TMbUQ4TUZSytgUs8pPSED8HpXbgQSdhdWSYzWfRSmYZpZkpk7U9sWccnpNLsz",
  "key10": "592pYRLKcRCrVPsen2h73QYfgYWj5Hxi9k3YNNVtiCHNN5Uox3MGCcUsQsQjsRN59rwriTvtvtVJmEiHDiGTUkXG",
  "key11": "u6ckvbryRxS4zN6KcBc7KAqVmvwbGgWAFaFKEPXjQBMhMDP1qiHKT2qe1kVF7WmR3w8a4i1WiCGExzkDfWWikZn",
  "key12": "GkWE6EhMYWc5cshi7dE78x8B9ByB6oXKD2pzKqHjrDNiuPtBatqFnrfS6fDyxYnnLNLk4nKoYzdH5bGC7bBvDa2",
  "key13": "8hSvoA2yrgnf7fGeQTp3DSfcaP5tLUUrrY3rweyK3uRR9W3RHBwi4bi19EUpbJpNk7mifieeoDVTmUynWDW1B76",
  "key14": "43Vtuu8GQuiy2PHWfFeLxhCugmpDDpzLZUE3PKACjwqj1Q8SyRfxnTJAZJBXJ51cm13zjkZq7S1BgKfX9N2ubkk5",
  "key15": "UpT7zgjmhfEVJ7e7K5BcVwA2bDpWV9kQ4P2Mh6YZ7jXEHpXRja2xq9zSQpMX6TZC74CEz6pSfdWMmnAbtfRwNHg",
  "key16": "rRo9bABt3SbHsCFcBRcRRmWs1UM8y3v1cZJmcCCqPaqLtphqXmAJrUth19BrghSGi86ZgXuiHuuGVvfWVSRcqNy",
  "key17": "5dV1gKa1KdsegaxbgRBoE5q56bYyWHTw56p3h6y9iwiE68bQsJukYrYZZMdXd7Ncw5awboTS5BrLt4acxsdUQZoP",
  "key18": "Zn8CHRU811WB8AvurpXrxxZLx3d8UNhBJTsCkiMYiNZhCxDwRDz93pLJXewJBqXNZ4oVGVb8Ego8RKg28Em7vpz",
  "key19": "2U5Pr65ZJyYSNDm7KZg2qWpz5qAx8k5YniHUCjTrbQyniKDybCgQPvep5zHY9uEBVF4hBCh1mJZLNBg8vU5oLswC",
  "key20": "5uMyuHfiof1pVFjj1E91T1x5aMetJNcSEz4TvkVYX7xYejpC5Kwd19qQ4dRYsygTNmfoD11rM28XmDVMq5giTmFo",
  "key21": "2K9qdy89arW5uRdsp8RDVzZPCDsZLuttfbn1TJkzmHcykeasJz9mwELGUK4HtLS9Hk5DYTbT7Wyt7jju7rJuG4zc",
  "key22": "5HWa3MmxaUH7BXFcd7LJzBF5yDU5TtqpkerscRJPtnw1zTp4iYsdjzGhQF4dcyJPgUJCoXjQ9di3X4U1okseBQ7s",
  "key23": "3hNFd1g1SBiywuqf7Ja79BTX2EtQfcuvqoMtEG9ZsLGeAF2DtonRQRFwzhnaCEPyKRtJfFmgxhG8xo3J9n1gUxvH",
  "key24": "4HydJL6PeGFpnKUgfY4USMdNMpjhXxohDo15DePXFHsC8zw8gUWEsf2wgYiePFbD2pG1TvaHFJCZ9ZtrwjKjTSSv",
  "key25": "3uSUUJbM6BJnRNTiy7mFVWkzi4NaBZGDLzL6hnz1wU446ug2K45Ns2PrweeBtqwVDJMsGU3k6yCSKBVReSKY6a6v",
  "key26": "4crzVZKXJyaMGA3yGYKhDKDBf8BujWKPzBnWMrREPLCkmRe6kQB531SDpLrhQAqtDQ3WiNxw7ona6A1o2daCqZpU",
  "key27": "2EEYWrpiCURPYfhyPoKAnvuvWG7TvjxFS6xYji2As66pNiPMfjJDAKPFGP2zxzy6VMAh7j9E4EqLVVjkXgfBcsj1",
  "key28": "X4pjWTtTnXzGNY4HwpvyL24S7cb4EPdz3Nyi6VniANdpnuKRaWy6z4ootS2Yb3WbAtCrP84aNLbkSbRNnwPEcod",
  "key29": "3GkL8N3AnTD4pUt5By7J6FiwkD5JepE9BwSHsVXAxzdD1HZ1yqmMVbNbr9TEuHWrGiYE5nr8EBF6ePzsGu5mmfLQ",
  "key30": "53UobzPgs61uZteeLtfaB6LwJrZM2mNLaz348dVw9rG8ct8wxnLaGYrJ3xCuUGeUAetY3QbZdbubr64AHqmELPQK",
  "key31": "2FFN5VStQRvPvRcdeFRR6H5igXoafLzEn6wcyewdTi98sW6EJviwF8nkz8rXhm6ngcfVTrdoTTdcnvRUtRdMpeoD",
  "key32": "5bo4JUvUucGg7t4uVpHLzRyRBq3NvH1xyzVAgtrb6SFK53QTxtPC5WNLCscYeiBrhFjVRxPZCYARnajBW9XrcdX6",
  "key33": "5k3i5eKJvHNX7RQxYLvt1L7vnGfr6EKChREyg299ZKqcncScKevx4WQGVjexgCLGAecpJTTzTL5YJcetgEXbNYte",
  "key34": "3wX4zYzy4bMuAGuuQsvABaaPP8dqEj7cs9XnBJe6GXpHJRmzjvu1AxJncCCnHtkjoHmW1v7XhcsDRDDSoUJmXEnj",
  "key35": "2bRfNGQRbPJRXaN42RDVneQvGHw5P2BwtLnSUXoLHWRJjGfyPQJZSCrG537Jsa4bu6nWjnfkcLwfTb4FfzJorbK6",
  "key36": "5kXRXcBk6LhkmLCSs7yh8FSsLuhWjrJXh4XEXmnGHZ59myCkH5LicBL5LSCiABKnaY8s2NjQ5jcnqvS5Cq89cByT",
  "key37": "45fWUqF9ZZUZTr5fv4F4xqfpMYryMXrLPtTPc2x4KpcUCtyLZEYxUL5sm7D3KNm4hQuJ4EWqrAt6BnHbQnyZyQp2",
  "key38": "2QESfdAcE3oaEqKk2hTArLUyKbfpxJ3ZmzHTUKdnrUCnev6Q34XS2B9jPFxJ9vT9aSUn4nv4ovKKBUz8i41HU7U1",
  "key39": "2EWQLfwBtRVqgfrQAjvak5uDbFXz8Pk2xUFvPfgRrZ4BkdKjqictKDb7eNY9mBPm3pssxpTGy7tqnfgMJBYdji78",
  "key40": "3Z5Pc2UsXtVJCfd2KhHvoa23S7Hpw9hpaaZ9fP2ssqNZGD9TTMmNf8B7FhVm9bCmhkyMqN54vje8QVdVphArQss7"
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
