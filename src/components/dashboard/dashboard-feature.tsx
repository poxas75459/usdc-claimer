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
    "5u7D3KCSQNp7wf6HCCcgm6my3DyhLchR5Mu8hYoKDfpVLDi81Pto6aUzS9iPjawAvhPBXGULhLW4rJ89R2CWRf9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VhmvkhanXhQbA8Kzzhs9jbMAxW4F2Ejjnwgb1hrrUdVnLM3hcUf34iWwxZEJ2VKWzwFj3Yc5hvjRSwfKYj3gBZx",
  "key1": "4EibR7rvyyagYZ3MzK6n1ast8ttVNsGxRhgfZK4mR8MmKwakjcS1qyy4enewzSSvHtFB8WcQddCWdEsMiocXYwFs",
  "key2": "4a2SgSMxYHixFTC44jqHMQRVw7x3H3iY9JhWPBecpPxfbrgsTS62cjBXcgFFujX6GgcgowMGBj4Y85k6BtSrMihv",
  "key3": "U4uq1UEThZtiFSDb5tt5jddWpjCTyanwx83TkwEXH7P21Q5NcrXw8DJyyBZTHC8NZVWtWTZFVDpXkVPt4rDaPvA",
  "key4": "57giSkBDoRRyW3F29Y18BitUoSBkifBFcxqHkT5v5vuaba4hJjRA9bHEWZB9ziEnWhgR45sWYTibwVEC8FuDxSRL",
  "key5": "JcBYeKDL1iFsjpk9AMitWaiLC5Rt4iss7AFcAwPPN1UPdfUPri6NfqS6WS9Zi7vLYHeVUxXiKFB2iZ1kwAtu399",
  "key6": "5RExNqtYdb6EweRoEWYjmRKucn7BHRE2fjjm7k5zqQJTq1VfxvqEwVqzdAseWVv211SPvxJ5LpJpH97fULmhJBij",
  "key7": "4TbDLC3uhXonoZXXUQpo8ZpffAWud5on14Zg8Mm7QxXU1tz2WP12bRFab9v8Q872kksDHTvNPpEZoJiapD69huum",
  "key8": "58LdRYSbUn4v7TizQ1U49dS2xzVCk6ZW1Cro5ujQU8nFDnwjvxQ1sG1HT77AUYUwToZB25wNvDHfrrWxd3GkFE5R",
  "key9": "2XooKCiJyE5aq3dfgHi5mwm7YBbCRAALADhCu4Agqd9L2W17JLPDdp6i7AZLwT66GipnogdhAV9CimKmeGD6m5ve",
  "key10": "212CeqtRPF3aeaqP8RV87fKMZpyxf86AwrK9NTfyus7ekf2YfsYVFb6gRqUbckRki5vaHS4WW2CgeYdXQztmvfEd",
  "key11": "49CFpsLPgrcNhvoE11Kpp5d5sWNhVqcKMq9xSNuEjzdW7HmqMih6JDt1a7VsHHrdWMtGX9utNL3k3D2mKJ6kbrgG",
  "key12": "4dwwgU8nY7wp7k36ouycbsRSn32nvUZdKtrnMkfLxWZJzq92TsFfMxenfQGcgpsSp4Bw35xo31rwyrtmnauRCSG6",
  "key13": "PxupieDNg15jNTjsCFMMfSrULcTnaC6SBMLzfWrCsx5KBZ7etHRLtREz6YxDjsvmPSSz1RHdayHi4JqmJhAKvdS",
  "key14": "5VYTLabWCV77EqrkrypKyd44XkV1xdAixDzvazkK8vng9ETq8imjEVwvqLqVrU5Dw99NjwdevmpqA4La6hpbaVsc",
  "key15": "31qYoD6bnSMfcuMRNFff7x9t2Qm2xZAHCkPZ8STkifFyoNpfheWrhmFssH8m7sJFmMsHegYV4nf2cbL8shKqH6yc",
  "key16": "285rMx6Dc53tE8HJU4r1pSoGsaaE6qfAM7MzvTLehdHgeWgK8kAV3TDSBjmi32hNRwXBKVDZgm7JbBipcQR45R2o",
  "key17": "3Pvvq32eneDYjxtrNqEbtYGbP7r99Kc5KLeSWR6s4xpoVRFeQ69EWDrbR9pHorXAXiB9AkabapeimEuVr1sqEb2p",
  "key18": "5dqFM8qHBUyTar6CCj7rATHnnm17FGVzFfo25cKDpjHqxVpyRxf5DxP8yZtu3cPdG4XFwB2mRgi8qrkHF6QnGpeY",
  "key19": "tQDLX4qNDetmsP2w1qovP8ZqNiDVbP3sKg3h6T1n2vY2i9mZREjW2kd8nx8eQgBG68uzpFsfvVK2DsVzRStqt8F",
  "key20": "4hDAY76TbuLgtkCHCUbXo5HnrPPvvU8fboGBmq6FgJsVpN6WpPwJWZFmWnMriYqYGNc37WfZ5Vq4XuE8MWwK5yAm",
  "key21": "4pJs9EbNaxevYeVXurn8xR8PaTnDz75uJhfkVsxwuWfrfTCMu9P4bru83HqpHAzychp8keNbTtznPEn2yjFFXUse",
  "key22": "5XnDy6aGPD8zLBDzQpfWAbwo2pBiZmzf1tVwDK69HyGwu94M8EuogufNxiaCu2eVEZpFvPaYY1umQd5s3tZYzae1",
  "key23": "5578guruQHHRBxPkbE7BTbYQW7JegMdPssCe9X447KWWuJY3m9FyuXc9g62rjBoCxtdCfW8S6gbMDxVLjfhyJobJ",
  "key24": "5HWpMgxFNtdVo3KuFUFkXtPATvHWgDnHork1M3erdUaxNuDxZSqj2fDqXPHUZPVxsmTEbU9iq575jCmAMBuHG6L9",
  "key25": "5tYDH3qDhJ6nj4adtRU11MursttCnok4ugpu9QkjN6NQcuUFT5cKi3ohKa9mLtvFpJ7ReSRfeTvTqQPPSK7YUdFZ",
  "key26": "39CSFpLTrVBaAH28619ZTTFXpjR924dismdCX4bFMaJk4vNqmgayoYoeFeF6gg2GP87tF9KUqReCq8bX9jtKbr8f",
  "key27": "3227sZrjrDvgqvwtzYFbSeNUR56CzzjShhLRKVMDTtwNMGvW4Q46A62UPHS8zXwvXfBGFaEHVXPSqF6dEdfkoXgN",
  "key28": "2ZHBfspHpRqDZQg2uPRbkpsgxbnAYhRZkQP3j14YHyvMTF3qBET5mmkfk1WUY9dduFNqa2gRtoRQjLyk8CxEXSKm",
  "key29": "21g33NA1UDZtPfJ17BgdNC1rU5Zq1cT51EuywBDPfCWoAvCmPM19H7zXUMqyGkRbAPLK46W9sFAu357GxVrcLYhu",
  "key30": "3zmCpS8saRqd9zokWYVUWs8YWqJmvmciKa9u99tRars1bP63kgufFofjs3MApfbTacVaAap7joz65ktng6LreSd4",
  "key31": "2X89sJLjgi83onmVJCFTV4LHJAB233zkzoKdaP9TPx9Wxe5Q9Q9QonGmzyvx246t9AnAbiNdNj1e12G2Tgj87mEu",
  "key32": "3trtXNyzPfzaHCR1m2K4LeYZzBmvFgWqSbeh5ZZaJVBA16EJxCxf1savsHu98NymSeotpHqBnZuudPR5bLew7P2s",
  "key33": "5Suaj6JvbuPUkmgDqiviy7AEN1KCssPTRWjibedqSaLpxVdWfxt3ppbjpW3m2KH5Tm8XQcMZsfMW6TgN9SyZsf9B",
  "key34": "VMhAANjfyM5VHuenHT5NTzS6vbnzZ4pY2YjjvRBhycd5y2BQvzqEH2ogVJGTrRkCUNxMoRZxhTQ4AdviFL6XqqL",
  "key35": "3SmrM7Y4JNmjkMZpvDfHRBXwNrweSxMD5tFZ6NKrkKmHaYXF7yFSapZXsDkFhkmNzfU4hiTgJJe4d1ov18k4EJoS",
  "key36": "6UdSWkWfLR3Nyf2GMH2KY68ZNb6h8m7BXxanT6sMJXmmkEofV3U7NyA43SV4UMuSz28aeeCFuX55rPaFog2ot9n",
  "key37": "2vs7TKGhpsnVNteUcHSCMDRAfXPQEt1bRtmvmjxTkYQ5WzMKFCFPRHEC7EPHnGaa3ETXWdy4UNZtSRNMLZCyKJHb",
  "key38": "2zY2hbNykzjz6HsGSdHJxUMW74jYdWACNDhWCHMPGMpvEvx9J3HZLUN6JfkgLQEAiLoWC3XfE1vRgWDnTBqL2ZUo",
  "key39": "3KL1b5H3wNF4Yto5jmxdYCpe7sfceg9472fneLPWxpNePhAW8m93EN1YZuTT1JoHb6s5hFr8ERS9k6QWoHucNnBN",
  "key40": "5JNC71exjPnRzYo2eXHeZvJvtYGsSLFKkF7UvDanLEUvUC2iBNjQZtn6pDYCCvRJx234oha6TkDmPvTk3k9Ho4N8",
  "key41": "3UCrz74p1fNY7BQnaDVfdAfsgCWU3LBu69HyWbDQMPuo9VYEagzTnVFiJPY6dfcyp59vkFAnFYDWQ9D12yv8AmtN",
  "key42": "3kZ6vf2j6RcZfNhMKfYdSRFYgqn68QMYyY2scN3huNkTCh7ty2k2hnTqpv1iEFXApQFte1V3M9csWHe4a9ec2JnM",
  "key43": "5qezzDgpCXESuPJfEacTWF6MKqaDTuukr5rw7X8obLubZi9VzHNfP5pdUfcfEUR3qrKwgpWSD22nzbohfgxuByuN",
  "key44": "2VjSGzaqpSQmEoXQ62eLivBRyPne8XKaV6g6WKWTypCStFQHEDSmkmMvK1ER43BBJH149BCbzvy25a5nPChMq3z8",
  "key45": "2QFu9TNWWwu1iway4YcKRmUebq6rec69iPC433tyEomnDVDuB1spBiyYAHMxMKqEziEUXQoJyAWTMTnEt9obYRdV",
  "key46": "5UVPTvjn42tkkBFKoC2fEyYfaLBSmkGrwR95PejqWHA1CPk5oUQ3M1Nz8j668pUu1KPU7K4Q9ngj3YB2kgG3DNea",
  "key47": "2wVo58qQYJGJ7kkj2v4VZLM1CQXVxKofi8DJsqiN8TKZciwx82D7MkLeUtkzXYqKEfMq39GG6AVGKQJRueXvmWJz"
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
