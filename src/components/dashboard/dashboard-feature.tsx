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
    "5AxbJrMnpr3iXijtkTGiNv8G4vDzoF5ZNWEJcCWT9F365URdoapyQfouToT3a77RoW99K44oDs2pvLvkCX253Wqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VWS9NoUiX1g27DmDzmK8Ux39LuAmTvvAYphnUDPqaLomUn9fs7G1qUpv9EzYQHdGJvy9QCbBKCaoxsWzde76jVK",
  "key1": "5kkXohnA5XdvquSR2LiaqUJmwyQQYMRZiTXqZBn6zTJmuvKicnoY8DrmELBK4UAQ1sd45Mx2Ast1YV3RznNYLs2K",
  "key2": "4BynRjyqBCWFmPVo1cT4BtWbNb2vbGkHRoTPhUo12Zjnypc1vDmwwRMGobyvyrhRdHJFtmpynKfjNK5bQZAnohY5",
  "key3": "5V7EixH6HriRUjAPxEnrW4iXe2u3EPKedVjVCVMdQsMhVsY4PYZpXHk95DdrmskCxfm1t8vSVCnLdEFnuST3sYtr",
  "key4": "3nBgUbqcw3REGswX3cHFw7gmn9jggkz7iCfdvHc5gTjvM5mgcyyQuD15RvGuDeDxz3MQ8DhKACpk1eA3Cn2GQPtb",
  "key5": "JdaK764PgwCDUpTRbYWEj97ZfR43KFGYepdcXa9yrqviMh1FkJM15KNtnQ3kZDswPha41gXuqpHNUtNePJbiPtm",
  "key6": "2jN1aCSiwXri5eV7xb5Pkhq5KsYsVry6kmAxAJvtoZR8Lkn4Chf1GdZgPUduHYpt8vFCwhFrkhmyrMzpvUof1hKc",
  "key7": "2n6avfodVBPHD1HcYXnAijwNtRqmVAdmeg7gUqnv3aGa2nAdbi7RqoJDXDCad6udkZQEPoSTBPEM9M2xdzvtx9fb",
  "key8": "2CnUV8kaH1iHvTVcnwRw7LEkh126yGPiEyz1drwoKYXtMoJEiq5fy8B6BXePbnkZ4CyEPYrbnPHgAuGCjx6THFbP",
  "key9": "2bTHrBtfWmGMCTz7xQY6rxJdcyuN96meqC9gBoXbVQVLb2hj7fUj4jp5jQL5Uhd18MBTpavwsthK79JBufAXpsgy",
  "key10": "5jmxakrksWaCtuwZZB8RMUF3s9ULT3VVUrpoddAqur2MKFmqVxe2rsJRaaH7ptnEPD2KXM3Ak6Df37rua8d68anj",
  "key11": "2tbRgLR4mrrtjAYLt98uq845NXg3iuLtKZuVhajzdRrUatqJ8tj8YXZvpeSGFXNMpnpuoxyEaYyrLEx2BartE8pr",
  "key12": "32RBvnzuToyU9BoYjgeqHGLWBSeDBxVVpXY5bwawvTtisSoq37H9cBF2rFQhxT8tkC2jthEgXGtFpj1pxgKsXQbe",
  "key13": "4eG1hMGzYtkGNTZgu2FSiUypAY3zdu3qTfbhXeiqzDLnPASQcDJh6qzqft2ZdQBKfvwD1bj9xLu376FEyeem3SjA",
  "key14": "2vRh7hELZVKshr28xK3iJLfXfcrPSKk5JznnhCum8C2hymPdn7SogQjzSUmzwvZ5ybyPhG7BxDWDT6iRwdUFkjSb",
  "key15": "51qyDNYi6KPEzvE5YUvKbCAsEhj2aXqGq27ymxm3fopwdFB3dDQ1upPn2HopHhfrxbDjibKaPYiUTWB5mfZGUwfU",
  "key16": "48r5PJ6ivoZKPH6jTHJs96RZdLYuZTGqq5qggLQe5xVeHCgGue4Nkr6Jhfvac1tLBSYz4Z4VpW3g8oWXRAxu9p4y",
  "key17": "2mjuanmniFPqArg5NAb7nsmJJGHE5RCKZejge6eKcaHTNYAV1cBmPN58u1kfzke3pnccPefrrggrZ2hJszteqYCq",
  "key18": "VJY2EqMnSnhdqvGrDtBSnBow5n4nRPhBzpy58Wi3jBo4X7XESXKAk5dG2CwhE3RMBhNoyVpBNpjbZgridHozY7L",
  "key19": "2whRWLK2NzBuvU8DPZMPKQFyouGvupkL4iM3Ec7UJYkEZHmdBRftb3Q6qMSnEY9eRTutXPnux2ura4VEN6oj7b86",
  "key20": "2Ni19dzy2s2z8bNPKidcccmJcfiZgfHpt1HnNnn2sw3T8Kojigo8dEEpw2tGjrAiZ7FQRuJRYpUaU9P6Se9HEucG",
  "key21": "634bc4kR8Mu8eoqZGDBiRAadhevB4zoaivboqDmro9nCjiccKHHpN7F2KtG4dBjf6XaCkHVXoCxSbQcCBFMjUYjD",
  "key22": "MRtWNcigRGX37M5zYPxdJ2ZgVAQbUfXEA9sYLwdaUAqMZCNgVbYxDQC8W9xFW3huB8Q59vN7ry4QtHun2G7dmQn",
  "key23": "PjFjfTqQP2H16HPtvb7p8UZhTrmygA2vwPxaSreEL7HaBhVdVXr7bk5rGVEdCJJdaTG3qAEsSPispt5dgzbqSnz",
  "key24": "3uC1U9YBX1qM7EvAS1NvAPUMM7sDMpXtNdzPMuosk7qsfsVA4znoQTka2nZ9sMdpPyzPp1NfjHJ2anXSAtd5txJc",
  "key25": "nt1BfXGtgBCQYLyoEFFk6F1MmAzN6rWoFbZ6EMPEtv4taPZx3jHk5doghU2Z56gLmohRGpT1hW627FwdSbc3HPE",
  "key26": "5oxEzzUxy2Qm4nzNGsGjb662mHee8xyaSNcMRgrJQg6A7yhNfgGdDbEvnbvHpSZzDvEEYfvyY3namZmd8yJePbe6",
  "key27": "3zggyjpX5zipbXqhj6HdpMwxVv9hobYuLaF6gRsnQB7SqDJJFN6mVsiEqYT7NPhKVwM34oL4oFzPEXeEvuCDMTuX",
  "key28": "5A4GkQ9dbi3VCUHBJKRWJaLqyUCTExJYwx7XnQjyDZKB2Kz2uz8pszjusSChPaZybJWfZHLF8SyPT9GhNUVmvyoh",
  "key29": "5DwVCndnNDS51r7Hk7GraJygSBYrPWHKR4rpTaUQSG4o12hNgXGgW8KDdCvHhQiWZKxAJ892AGVimvJCduLGQrN",
  "key30": "4VYEbsCTFGG1C5SZ7RoEsTvzgo7RX7VnjCGHpEtqhMdvS4f1JohctJGLrtYtWnwTVvtQSsEc7cC4xizDA3b2PkG4",
  "key31": "3RBsTjDNaEF87ooEUumA57KNTFd1F9Ye1ZB2uZpmjNXk2TCRWBjXsq7CrLEYRv3RMbMAR8eK7YjwwEyRiuNDTjHm",
  "key32": "95x9Qs2xqSfoEDqpgVwxmEBjDfpERZ728Xn3nWwygzPbAR59avqd1AuqT1U3UgvE7EcTAsdwvmWy6RvXtnFpuD9",
  "key33": "53SGKFehBxRYAwFXXGVGihRNkeBifKbaUSMjTrykWtTRJWt84ALWinhQysoHyHNQRgyvTSP4ujxX9K8413JXV6di",
  "key34": "YTzmY58jieEnxFM9XSTRi7aN8t8RYBPKu4fy1YFJPNWkd5y8HnPxVuh5s797A4jXe9jLTYbCFP62NbgnA7r3fSN",
  "key35": "T77zy1Pb1BFksLGRmifu43SeJ9iKwx3qy1d6uEWaZC6SLwvQZEUfYwYg2F6CFbcCEL8stKxAzhFRLsAUA2eFcix",
  "key36": "2eTVDY12WNr6mF86pzjhqAQWxkoyxBkq1rdFRs27Sukw4MLFzgBH5D1tXWnHxscZLfXZCnsiz4ttrk2ufArceRFy",
  "key37": "5M3GzSUkHjM2KKLL4utU4BonJd2RE3odPFqHVQvKXrPGH3wM9W3oUHBuUp66EDNUsJDDEP5NiPnUmTAy51RTxfwK",
  "key38": "3AVeibVpmTiaNeyxnr1BMpqdyySDh7Ra2iPua7CiaJEek3vXYnnByuqtNxawrV29wJRzyHrzqcoQXMZAFGAB1cYg",
  "key39": "3gctFMWPhcXh3A97wvLefswJYTaXLzZ6fKgaCCNfmGk6aQLNKEXzhP7bcCzhH6mzxJMKsQjGmArvMsaxKvcSkPEU",
  "key40": "2ypXwZhezkZ5fYeRUchcxb21Bb7od2JSoMaBjWizDayMiqhoyHwLfTfkHAvgMgbdkjqCHJgAie4ckoV6Gv3v8bJd",
  "key41": "3ps4fcCEiwdL18hzPaF6TjmyNEGe2W3NLGK61e8U7RJkKZHKDsJRcZ2po6gMFnN45aCtoPZxwiHf2EH12RCqHFt5",
  "key42": "5c77vQvZMJKos1R73itaKbYrt4Nff3FxrTHFu7UA4Ccr2j3b9azkjbxdPjrV1NkQGFLXkstr24Da2vsY3mWYw1Rw",
  "key43": "4Aq2s1axBUKGKjjdc1BVMTe6PWCcQEM4WDsqYEcW5YutxSxPCWZiJjJQZMT3tV1MRxM8vQQKfiTvgfptbJCqnjVp",
  "key44": "45nuPxp9qFmBWUYeESacDaMcvgi5D8evyz1bSSkMg3iFkPeKzjv9To6Ca2fvPhe8LbLsFTkUmNByRaAXS1YvDnnL",
  "key45": "MDghkdbdKwP5tAX3y44Ks6s6ymVQhKPNW9m6rfrV8eGebLTV34JN8ThYvmk3jSLMvy6YEBrRRX44ahv86K6tj4c"
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
