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
    "4D3MfpCMxkxWXaFLk1LFc5QEkt835LRDoMmM945ZcT9f2Ugku4J8Ps8wLBLmvMZxNgjvoTUaRYqRcV4hHuLNYXTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gr2pAizNue8sxCiETFiMNtSMnKmshuxZoJp1Ee45WxtQUjYb6eHURCdpd6Acsq7neWYxJpCdwKqsCUPEqVxfP45",
  "key1": "LqGAieSqHxNzTyLLF9adu5ekMMe7q11snHTAXwJzhrydhYhcPpespUT5AWVZguXHfkmnvzbDR2mmXQaXGgvYs7z",
  "key2": "2CRibXxrhhGxU74duszi4fe4TgJE32iVuin2fYw83xkxRgxRsywZ545rSTtedCaNa4UVeueA8P7i4A64quqTH9Q",
  "key3": "66DhdRwHWdKgh1iwVPGqtgXUJMpVD7LjEuvSbhmZhkm372YncRX1v5vPA1dQJ5rd3ZHseoqu6wFxejyTN9rnoae9",
  "key4": "3VLh1WxmATPGNwRFhND2bFgAhAQiFcU2UXffCJiQajmnaRh4XThLePdxXyado8TBLEiEzwVj4rCt28o2ysD6Pcup",
  "key5": "3irFSunrX7WGhC51Zsvea1UxZfxWFQjiaaUo3LG6pXrkZa9241cAck1Tg1NYttL9HDdfKi5FiKXpoQTu5TCT9jsA",
  "key6": "54zAXrc1es3TYbkydCB4a7cucsqoHQJL5tAWCMHZG9h2LDXsdvSPu1ALGaVvg4YBoZwnE9S7RBVUeRPssQz8j4Hh",
  "key7": "3nDmh1YCMq6P9X1M3pSZGmPEKDozRpAEBNZmGg69QC96AmjrCTtJno8LuSoxYZKG7oQcE7pTTTBWSzLZLXHj3kXa",
  "key8": "2fa6q3LvF6nEY32imUeysXoghLuXDRZg2QWyPruuC3194LcZRKffAe5KmKygKpCpEtNCqKoy445W4UFQNLedGA6P",
  "key9": "5KUXA1wKCX3pE2UqkkN4CmjTLJDxLuLpV15u3c3MM7h2cJG3dVyt6AzZYGnUJYBBrszLtW7UKqQZGaBEEFiK7Ajo",
  "key10": "3pLVzpb5u6QM5awibJniEs3jSvHXHXbmDgiK4Fwn9npZmAsgmkcLjfAhFDpENHtfvM7CLzqk5TyqvU7PTgjv3DNN",
  "key11": "6PCNTD9p5ifLb3inUuYncGkdYnrV13Li5eVKmCYDFvdFvZMjCUgchq2AAqnt1BFnJwJBEei78a8284ADiVjHsAF",
  "key12": "25uBWkmTtrsUXVzDaYZ2poyhBLrvTtsjae7SPpcKYMN56mWPdLX7jX8TRdjkt4pwZEfBmawBJKiZ7WMK66ZfVVLV",
  "key13": "8NdUj3UftPGwePvgxgVAxQtmmHCsdrecLoxziRNxua9kdtfkNgUHh9EpVfphxoqwz5pPUshvXyDFCqpT3vLtAMn",
  "key14": "aL9y35Emi59zhVPYTHDW3RN6dAiUpnwwquH2TEzYY2GMdaRLmLHyqAqeiiDFKSwAgtbjGf9EtHsejp2xrkLfBak",
  "key15": "gmFPWwrDWnEBfa2Q32YGQEMGrxrmsCpxMz6gp3VPBMxuGJiehXWPJF6KXk6UBksSu7PnZ4FLjsB8w1CryqnEDp1",
  "key16": "3HaZG3XjCTeSQYSY8qVggWqgPapEPpshE9kunadrjFBsLRAAqmCKEuJwUSDFKBEDbNXJgQkVr252vTq4FqXEkWen",
  "key17": "5MrwMKg1JzqPaLKbmCstRu7632qVUQ1gYPctgJdtvRnpmDGno3grjv8jxKpve62YbGC3ya5K3UECNU2osAKYNJhc",
  "key18": "3oPsUaGykSynSg5PaUQ3Ajx7gRyeKYcZRhcPKmvmEEwrSF2X5DGBv2YhFacZuEnuhZvZAPpNRHmUbV8iCLcnPMoK",
  "key19": "3u9w4UFFWDuc6HJ4oDu17goiTmDGe3CCxe9B5DGvBDi6YenRL1BTqhPKCqFykTgjBTcbTpAkm6bhn69gjGCe8LgC",
  "key20": "5g8rsz3HM3ZyFeRNDjPzFKcSn1gw9G89cDjbYUS6EUMN45w26rmUPjB9JwSgkqGarqcy8ZMPbzK9TEjUWZsBK2DP",
  "key21": "jqX6P2iruGSp4JcaMa7iWKnmeKbZXkBxKDHaXX2LmNXLGkdxEdoxkj13SKsS7idGi2unnsDUJq9JN3k6JVMoDMR",
  "key22": "4oN6DpTzVHXok5x5sfTiTQ7d4gaLRKxKAmumE4SEBDLtDMDbJBWRwxvMKUgRbm3X7YcfqeZDPWbxNv2dyZN7REuU",
  "key23": "3XjV1FutWU59n6woUxUA5bRhYPGPWkAQsXj1kwT2XaRyT1yGqBYvS7Nuiqa7b1McVr6df8BBPUfdpN8wUat9jW7U",
  "key24": "2uXfs5t8j31qPVxiNnKMtoJJRXcJqDi7Wu1PqhbM5NVjJkJCZVMQFZ6z7j9BAg8or66pHew4q3wsWtFdBk5i68V3",
  "key25": "4mdZhc1vbW8m7niGXANHzGAQNX7yVmgxPy8d5LZ2kU1TbkncoGwtyfxJHAJdzvduH7sEscYgNvJEeJrPtRyGE7Zc",
  "key26": "jwDez4nsGdwb7Yb6dcDTv5h3FRgjBgr7TbcMFPnScqwR3cCZYmyXccc1Ee4g13an7ihhpGxyukzwdmK5xPR7AUC",
  "key27": "5fdsUU8kq5P2cLP12igsKCT2cqpzgqjWvCBCFq3qq3tdoJmtwDgqzZSKAaSjHtHs7MAerAQnSDzc6ub9YQy8HPYE",
  "key28": "2sthWh5fe9vGLvYc1wiuK3hf6Qs7QJkLiQxgvGEaLm5wopM86erX3THWC8BMA7L5iDTxrJ95W12jsBuYTxFopq4P",
  "key29": "53vS5p3nwgwrL5HD2r4iT7Yn4dLdoHQZrmi9N9bmikscAReN32fJmo3TNZ6vdfgsEr7WHBprmjhS342fyNBwMnh8",
  "key30": "2bPL3LqZB59h6PNmd6xre9XF2DaqJ7upc5KUyGC8kGGRX1zvpGVK46wGE4B3sTUp4Ma9svTJvFXEPtRj9keTsPy9",
  "key31": "th7HAJDgxSXTtjBvXNcwQgvQoN5hDbrZN4hMbVKLFcnZ6Gyc2v8PCHq5CkmY1A85baYnpWtA4Gds2Arm6hH7zaU",
  "key32": "3Aqpxv1ZDfGMvaypN8iku4tPUDDx3rHe41Jx5UXYeb4tWz9pnehXc7CbcTR9RdtdhuQsSsDaykVVro3k8rpQ2DxM",
  "key33": "2hGkbQAmidifH8dbKuNxyW6gkcdL1dU4BhvrVsgyTcivu41HmpPLAvNe351c18jAViNzwGrJwpRLpuJnCivKwp5k",
  "key34": "8TMNqST42PKxXDCU4TUz9zZqVfvSAJbwzBLKQPLosq7APgtUvJNPjmA1TrsW6KBFRjuPUKfvZv7nebb8eTbMEL8",
  "key35": "4SeYQ5wnk6TNgsxCSyZjHDEH3pMUc5q9j6LUcUBSexzhG44QmwS5XxUkP5Lvym3gi2N3RsFL2cZ8Bzpe6r8vKkj5",
  "key36": "69f9QHDJDJff86wdE7pTE2joRsR9ekk55uxFFWKC5ctGvfKqdxETWCbbpgR6Hb4HbsKUXxkkvCkj1kJFjJebCoM",
  "key37": "5jqj4QnkKUvRUjUHUqFAWtyNW9Cm2rTnFuZFWLumshCCNZniDt8H1yopUFFwaW1UV3CQ3LbAEitfkVyJ9kqru5R2",
  "key38": "zmMkmQK4c1k1UYcucERQBy6YGhRHAEuQVUAhuwQf95D7mP8KcUgpC9GRgdrXbEaeWr9dHcNhBXqKDPnASFpMBnL",
  "key39": "5qtCatzznfsh2jWyq85U3vKXa8rXurqpUQnLV4fDLEQV4dytHseXWq3x3oz6R4mYdx7uViVMf4osQsSkfHJBgFdA",
  "key40": "MGG8fg1TENP2mEPPrQYwoiYSSMFbL3gCozxtNQm3VD8HsFLL5iXZWSuPmBP4U49MVyt9eFSEtZVvRoYk6teiekK",
  "key41": "VCKDyamWzS8UypozTjsWEXA5Q52T2UpdQQXpRSk2dSmYaQoz6rSMKyWbMgFUKg7H2Be6HHqdVNdbV4HSd6e5uaG",
  "key42": "5rJpUH6sxpiMLuA2GLb32Wx7S5Sej9oNEGERVMAdmiDtTpoLzdGv8ieHcUaahauQUJx1DrcbD9m6KLhMRhE2Pavr",
  "key43": "5KX9PeD9NCDGoPq3PvQ39ensdEVDaxDXbyzU7J1E2EYyBYSug1Q2mMcxjiLLGKMEnhXgXCbRBtovs7MrG1wimRnK",
  "key44": "3JXBa4Ep8QXY6HDFXWAYUde6tLb45ZCxHspUa6eYzU9iW7y8tXDbs5YYfK5EnDHUrrnCwREMhKfPScrrumaCqrCf",
  "key45": "EbKnJYuoSAScFEbCS3yms28nXYKgq5CPKorvvdfJjpf8H19xc8bBGPy7Xy5EMpdToMAHLP1yqpN22XqQxiyGmWj",
  "key46": "4XbHstyL7A8DPe7Jfeb4QVMuGUi3yo4kT7yVTG56Wmu5ZH28PXcVzKtoRPinvERBtwLZCrPbgdqrTBSsZDV64tNm",
  "key47": "3Up8BC9QD7hySPqM6DHYeRhqmxbfAMf6KfcAWg3Q4KogdWskqWz3NkKZ7uqVEVS3XFYxRoxSFRi4pRFmGPtc4Czu",
  "key48": "3m6K9UgZtaJszHLsdWnL1KGaVgnkZFRgW6qbPsVjVgN7nyXfyddnA8AYUq4kfWpbqkSjACAYw8NAFHiYkeLrmWrH"
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
