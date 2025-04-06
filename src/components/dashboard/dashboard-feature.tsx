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
    "3k8CZAMXC5zhZqpp1CqQpBgyrnDMiMsyqsXExAhv1B4hZw6y78m9CuKxe1tcqDbwJvzVyTdF65VaKaEGzKYcK6LH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bAeZuqyZb63j5ZRX4SYJfuermh6x2ianh32jPQohfFhgr8HNf5GbjdvZC424STiFXHXx5sx7qe81j89M5YytKjR",
  "key1": "2DLnN3iCmmNAEQrdSMmx2J5ah9KyHmjYrhQAYhSWapYiZRpJudMkNd7zsgZs7pmqUK7iXKSYxCvFkNrRDxZYi4K8",
  "key2": "53bpmKrvYzibKf8ugw7ECgu3G2TjfW8ec6Liig7TmneTqHSvv5j6wy4VqMFZLcK69G49BP6dWmtVTH4Bjgf6h2dD",
  "key3": "4DmhhGxug9vwWQ8mZUNtXaHvGup3EPpn5qoVLc3k5BkpT4JM3WEzMBX8Q4YEWhZXuFnEXu32cnWrz78MViQQ2nU4",
  "key4": "3GvAQh92ps7p7qJQC7QyCRuNPHgVsLQwT4L6FeqWxrchXuMSoURwu3XcNFhTi2aMqMkY3Rq8RqenTRNjXrk4yW4Q",
  "key5": "2TyZ1fHRc9ECQgxRao87WdZdRZuAVWsUkwEpdV5Jfg1oa5hrRMAbdHhSP9RL1oHjzuoiA6Eyyt8jzFoqnhye375h",
  "key6": "oaey7uAeGEQSdPUZ896wtocoRZKiXWoA8urWrnoxgf6ZeP2kfRR37TKMHmFcjeMHt98S4TWJ2x4FAGm9umuQht1",
  "key7": "3jKds88vMCJR1iiw2uGsovKsz2Yv2kjzLubjtfnUvcWVoLZ8qqZoYWbLjnT1sTVqc6Xhvj1Sdn5CrAqKNuKRUTyo",
  "key8": "4iY1zNhGWRh3EUGXXQFtTV2ch76f79v8iZPXLjkAY7JG2L1sYHxAVAnaF9kRQEpExV4AQTm6fX1pK2eySXJb5qem",
  "key9": "5KhHCxVWEDR3vCownhcAGjkZBrJu2DkUrrdukW8UWUfhDqnNq7pZg8FCzYwcv8RVQbZEWMec2Bhg67UgsyC6pFoX",
  "key10": "GgjYuTWXHreNNK8zTVJEuc9scUWzLh97aJ2VJXi8GZWeqGep211zfeFt9mdND5s7iSF7FF56YzwKcSHbMPKtzZg",
  "key11": "u9A7muDUvoZyfDeiG3yS6mXXHN6qWPyv1iKtEzioApxTTMtv4iXSXvHJb1yUwAHWvaiFwa2aB5q9V85j8MQKLGv",
  "key12": "2TDw689kc4MVSjeaD9PWCDqCpf4a9cUbnbziQFxBNkfpNPW54G3yJaCwuKoud9Yjn86YX2R2jbaodRCzZk1am4bH",
  "key13": "4Q6Us5YRH9tVp45fGTuVHG6tNEHWZXexUMnvSXChf6EfT898dsa9ZnwCsCqisFChux9yHkTG4MdYCiMtuE6ZMiEa",
  "key14": "37NNxyFDoRJ6E9jHBBfDjwWEnZASMRYBLTQB2Bq5wH4Cc4ZbhcU9KdoRvzycWZHEtncs6KdDvDvCty4s4uzVssTN",
  "key15": "43o6FvXbjg9cjr7Q8d3zfdg6TwVGHrZ3LtzZsuX9SsWeZzg4gKfVBccQAYcZkTTsABDjeUTBCbhiJnbUTH7EZtgx",
  "key16": "5zt27pw2xPFEjWi1Vc2GNTvyDLsgabyCmYwM7kCo3QHnpDkCFR3d58BbfWunRk7dvDcrHwV89s7GZZv5RM2Yukqz",
  "key17": "5kHM7YrGmuXH48RYVXLH7vvFMTL2PNgrCV2M81CARqJrSEkBJTHg9yWTc5udTHD33pBDs4wzC8vzcCZTkiU2pCkB",
  "key18": "3QB5VbBHu1mycZML6yoEkM1Wg1pUmM3na9Dh2siDSkHvSKZaoVTLUVwtn3mEL9ZHg8MnMZiJAxMqvgK13HFT5Nou",
  "key19": "4S8vUJv8MmPkDcsnvje9DSKfCuWqKYYenu17PPYEhiY2oe97DM1fDjoeYD9qUE6rgv8XwHoxbAo93tQte6eTQBKx",
  "key20": "46xGoyu3syK3gf7qg3kq24hXG1KjMsDKNW1HC8Z7oTNR3C6LWcy117E4UgNpfdkkNQLaFYLSkzefad4czyAMZghY",
  "key21": "3vTkv49ZQqEpWaSE4vfZtGr3yc44xzVpJ2mJLGhsLW9V5vF1dyfgLwiwbunRRLFxQWx1fAudnjrfY3HWbfH5nsU8",
  "key22": "28TS3T1f1FPi2st7PUVuhvEihhVx82tw5ATNSAjufyB5fygjDVFdK4tFMiSvAmcDEaWVV61WKWihT3D6WPZji43J",
  "key23": "3pMKEPQT7wKJD11TYxycQkjZpknt49V9QjFtKNW1YRztdXFXswRbXxHsnRjDUQQii5jLE6nR8jipg3NcgCAGVFJH",
  "key24": "3K4eHbyrkXFvx6rnqEKDteCWHheRhcBZRd6FKtpo3hRLzyzZQJafmzQhr9K7Sjgxa1HgSCvU4z4Wyf6QpFeJQbEE",
  "key25": "2szZNFKYDLVBP1jxRXQMfNskB8XourtQhhNUpYXj13pKL83VFvATgy4HPVXHMThzZK5sGGYCqvU2nK8pt9RcgqRo",
  "key26": "3gkUmnPwNd3HnS4qs6Me6pm6KHqYot3sDSs9EoSqv58jSu86gZhPe139HrJbX4xxRc6b3xHsEPemcRdaKnMYAJDa",
  "key27": "3h67yvmDSaTg3mJDY1LfP271zdPnxYrsX1yEFbCvgiauZyDPcCDDQWKrrGL6PaFtXvcVMShXrbVLtq5LVD4waNQD",
  "key28": "2rV1S7HdWGeZEksWWJqTKUauEwt2ZdVeEveVy13nUdg5BE4BqUDtbFQKpWv197yV3vEya76gjo3gLAtYtB1ZkVy1",
  "key29": "UTw66RQvLav6AJWrVRzGxujtEMtxE3xFSzwV1iDvLFm6USUtgR5zRiURokMvvTfcyRu3D6HxaUmLReJ5RBQ6oFQ",
  "key30": "2Z9M1eCc62SwGnrRMcKMbDsFEXU1SoZrNWh7spd64r3SJSFVccZbX9iGZnTRSLaCcLd9FJX12HGGKHGKzRDuQDiu",
  "key31": "4eqAnRdZJU8CpJYLUL6PyaDa41j5pGa3sbBK85EaHWBTkHhhmXpgGeUDZ4vJWYrUVfhkgbUXsiJoR9BZzjMhBLj2",
  "key32": "3CXv1RwK8jZ3qXoaaMSsmuZSYT9wau8eajLzDDnqRAYvkEFbLTQJA41iFK6YXhb4PMtbGietqxRVT2wfRjFsERY",
  "key33": "geMTWLidLEBHBbyCG7VttgLf9ebutrmzUHcoTvnJDkKBEmbBiD3JdB5hznuDSxbkNTjGkqPqSCR8uBDmrKNGKR7",
  "key34": "33PACVMiskKVkREtF3Lfd2Tr2vfTSDDNQJAT3WxYoPx6GugDT4yo9fmzdxUMs4ZqjXhTr7FZXygZbGpdwrSmvgbM",
  "key35": "5W8LChcdr8Qe5LCie5sRG79DHKbVgsoxVHyehsc8TMSEmyiiLnf2Sa82Qbgk8qQkCw7rpNcPah4Mqp7GrJGhT79Q",
  "key36": "2wm1oN5eDeS7kvAmNBXXuUZfbyERqzKpfDUfsnc7ZYzF1JC5KiVESH2nMGgeYif933PGwEy9rtHj5noFNbLT2v4o",
  "key37": "3e5RVaCFm9Frw8DLH2CWgjMyv2wfiurx4bwLierVdr3jWFisxbUoMkfNYQh7osZrC9x3QoHVSawWpeDHhg1WCLh",
  "key38": "4FJhzTVm13LxJfPehZDoQWv7ij673Ne8RT8uYEBwMV5ckhkkTuok9NgPK5orw9bjCrLWZNzJQ27t3GPiiosTg6Uy",
  "key39": "4DF8jN2kHAtNzfAAHXTGbz6tQNnm5VUSiwAzYmHLqy1FvEwj7xKYoBGgn5LH7piVYaYQ18JZ6ZgKdLCPxNgWBCTq",
  "key40": "2P955aQbUpkzZ29gsXYgyoV5S3R6TJkybemUyRuUTuiMJD6XTJ4GxcgHotfwGmwmfezoqdW8mDWatTcdK1zAb8cA",
  "key41": "32Ux9ctPZSADHvcY5dPCQbdYGt6eWCZueSDNBrM8M9E1vruM3raiXSGiU2BSBTnZrAAQuimxuv8MGjYnJLzfFUS6",
  "key42": "25gHG7SRXCiBn5kXEtL7qBRoS9teLGZpTY5UuSvShuAjmvXevZNdvvhUWiiDqkzQyuzifvDVMokmTEKG8C1iWja1",
  "key43": "2BoYj1Z7ByfTfUxb7QahLqqoDNQ4XWzbiNAYFkULRnTCEdsnFNUmfmiXWJUuGEUpvnT1tW8o3uAgSdNrzPEP99HZ",
  "key44": "4c3jcdJY5csCisRPaVXFrezkmgR6RZJGn3k9WGU3RQiVBgup6UNygfEmrVAN8yNbV6VDM1KpkepYeTBqu5ALeqf6",
  "key45": "4Ljsmu845RTcTBqjrkJbFK74Lp5wdHfadpFEurZ71niwtrzenPrycmQjJd19GoQnFZ9ZJeqjFyvkiXQmb4iU3Yn",
  "key46": "3MeQZASY2iEZ9GPxN5YaR3SW8948YHthf77LNqy1irXd3JMREJCuQ97HduA3jHRN8n888TeC4Sm9JbhgxjbViKmW"
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
