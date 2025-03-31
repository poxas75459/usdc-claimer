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
    "5W5gk93fCmwHqkRiUmRfA19SyCDcgafunyf3gZRYTHue861o1zD28utJ7oCjoTYbYYrT1xmHJvA8s9V9icpMRkot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59dahaDSBhcyWhLdvEfVcFwAsKnWtVtXBMUcsytF8mPXXbF5e57pQaDhqPu1ASeXZ32ZNAtW2RD1M9qTZiyANc59",
  "key1": "2pKGkarb4FYiBorUqmkp2AukdisjfD6hf3TYrsjFLNDs4yq9ce3ryK2mpFs66dwuKaxbXMCvbyag4CJwZN7q8RXs",
  "key2": "52h5Wbm4WpCQki41XaXLfvuxjvjvKrwXr8fMrqsHTv1csEjsgVTBHzHpWbGzojjhqofBCF6Gg6x4WuwkEJWyd67j",
  "key3": "2R4nJQ1DqxzStUtpYL81WmBNE2bzQNcDL77EqoZGV9FpeVj8P5NqM5PHrw5oV9geZyURMNYYrijWMGcvFbFrGeKg",
  "key4": "wj8WwmixLPtZoBNNCNiJC7jmijffWN85MCGJKHt8cLj7A85ZHf2CPRzJ2sw9A5XtFhYsuLCJVwEsdUkFizoSQDg",
  "key5": "2yY9y92aLVex5ZwUfjrTDP3qVrwL2MfYW3gXefwtBQxJ49aMcFbYAhURHpZPrCQpto7mujHet3qv8DLme8vN7Mc4",
  "key6": "5u2PRLPMB4jMFP8EUpRM6cC2jNxJbDpRp57pg4TH2U5ajPgMts9bTjTN8fPNfRksETGKdHJMbTaPiwWiwDMkumyM",
  "key7": "4CXBQ249gs8VuhFQCuy3m5iSupkJgbHFDhoErgGHN9T1pmnCGZByTDcaKYrdikyZEsD6X1oPEUohwy6kMBHHLnFn",
  "key8": "3u57Cmuv1yws7SSoK7mEZd5W9Xu8DYJ8gnAyHTK7nKwbC3tkh3UdxZEF1KTx6fJBLUT8AatuzaCcEqFdgd7FMJLr",
  "key9": "2igMQzup5k8w1tBa7oC76gymxiT5H3N6gsZfBgHXMZpWqAApQUvJ8VWKgzSb8YQpUK9HYwRP6AxiXHYaN16iUwfN",
  "key10": "4Ms9mbydUGzy1dfG3iu4c1rinSHVjU8kuS5o6L2KpGNZ2md9bGPZ9trvtMnRiwNwPP5Voc6LboJUCEWHKGY8md1i",
  "key11": "4Zzr5eARxvhdWE9k2wXDfeFT6bA63QU9kNpwGkRf7Bqwyt1Wa1EUQ4ZkjwaB6YrmqUFYXkpApxc8TmS2kv4a6Mz3",
  "key12": "L3YY2jW7fkKXhDEUWqdCwMdAs7S3DaUY4WL68hRZiY1G4g8bnCgYC5noTty374jBXVfVW4s9vVbotJVDrdVfQRe",
  "key13": "5an4ebDMYpFCCuj1YzUuMm8YCQpTpz7Cra5RXbifqbqMq54acTeAgWW5Nps7jZRLLt4xMZjQYzc8nUswnK7KaK1t",
  "key14": "5eqTKbX5KqL5FPBPAncMDWUgTsnEfknGr1MkszL7wbW7mDDnqeiuMsyVMNcHZU2hUzFRCXvFAy5gAGNkRTncJnUs",
  "key15": "2eUNZhLhkaf8cvexyJXEsAuMLabg1WiSka2F1U4wiQNh2wJBmRbaeapRmbnkFiMpMZyGLjHP34sYoCCpwwdgpsCb",
  "key16": "2MfBHufyfqUKjVgjbSmhTwMaxzSn4aZUHGyWxvhg4Ybhqw4ab8ENG2axAnDgzwhYjkX7vqXMpon4askYP93RtMSn",
  "key17": "46XxQC7qyfcKkEApQcCZUnven7bGFpTHiN8wepFPNCRdqfnwvz1ij3H9fBach9Cgr5x8wzYtUEN51C45BJ7n9BYa",
  "key18": "49vgMxETjakGhxevU1dx4GzSZgz5AzsSeLHacBWFSy2atcLM1ARJjanYqhDEe2Ziohh3S3oE51QkER4rh3iGGNNx",
  "key19": "57RGgvs6fwgFeN5ndvY87bJP4R8t9zkLzp1kLGRYM9XJNcqvfwk5975iY135BCTYwiBffG1HWhfdjhjBHPCbQLpA",
  "key20": "4X5pfccLTuxspKuu3xwVkTZYie2dXHn1kQ6KC5oBaDmXHoi5rbVU2UujRHs5gHBWVEu3SnTYx1MDirbK9qcBkd1B",
  "key21": "3YTssZoZNxbLDpZhpWPGKmcc8Y6ZkAjGnDMh78XMdaaRLaz4eMPyk7DvfrpkadQn6bvzsBfE9jfKYgSEWxajCR1U",
  "key22": "67BWF7ZT5HLtnLqwbaodYnWki1UjTH7t9x17zmsPpSXdxs5aDZxavbqbVmbgbyQFgaqr1Vw6YRHpvZkV2yWy6UX1",
  "key23": "Bhie39H1h2sEZU58Y24ijWB14QoEakgt8tdjcDMRHcmHMUo1hMZ9Uoe3pgK7uPRjXb3p1P4gzT1Ggysc9Ntm9Hk",
  "key24": "5bUh1996WwCm3qiz22WdGF2RAdwaLLu5fjUXsUNTK3EBKJtCeZ8NxCo1jtnrXs23qvvdp1QrZdZArtsjRzEWQJmJ",
  "key25": "2Dt7LxEEmJ6j94Uo74KEdVb1jMgVN45WzuCgdGiu1HdcMLBM6kvXoYK5sBW5sXiYpEHN2xpjFAfE94uXmkNRW7sr",
  "key26": "54dqZrx1aZCBByuAyW6kuYyaMZBaeUaGjJwqMYJaSQiXFhbGvnBiPK8KF8oCVAaVmRPAYw8N1kgozmsf87uLaXNk",
  "key27": "24bmgJS1Ri2jA43PZTyKgExvJzGekPcFBJGDkmpFQwrg7inEj16swZfaiCgXvvdZVgPG2a6JA32msTVzwTe5189d",
  "key28": "2AbBAb7SWh7R5vw54tbqLaTnVFSPPuEQKN7n9FvfJ5kuUYCodGcimcCG6Ywdrb8daJNft76f9NBWzAFX2pWfkgjM",
  "key29": "5JSMzGYjz1eVXaiFcVrKk41hnYLGsppJCWyoxapqccC5gUwgbH9kLFyEpnKUZ5Drvjt6Guwgr7dfeBShrwrV227F",
  "key30": "23NDZ8JUXzrCX9TCM8nyicuvWh9mTnTjQ9gV4ZrTy7gtdzSMBzkJu4ppzjdbfQYA6aTT3gqMiedLY23nQcRhg7gp",
  "key31": "4kqBDzLD2FBEG6SmtjSD2UnWKmZqGFsxJ8fEWHtUn17EKPtVk7A3R4uND6zh2caHtD7yiYenQSrKCEgNex8U1zPg",
  "key32": "4YDU3mkA3E6U7m4CJoMoEagUhNLy3EU3W5P3UzFxpb6aiRLr2unabfQFGyHBAcd5jcb5GFnxrDDkMPpU7ZxzxpuP",
  "key33": "5oxT8XFuUMdx5zUYATEJuHTxBvewYV2MVVp87RPmgGs5gs8nMy8MqXWfXYm4q1iYj1fiidQvXMsrj5BoZ4h82QLy",
  "key34": "5gEoSL2y31c4vDdUeKSVs5usMnEEnD5Hn3vJbfWLGnf9MGuoqjZT9fHoL33AZaDGGC4xMbXfAvUE3CXR7P1uaEz",
  "key35": "5jpBZy62nmzjdTejZQ1RKh63WxbNB7B6wy7Jhjs4ahtybNQpKicckqBj71DBUupCN3MmrdZuxydvUrjYjY4idz61",
  "key36": "cK3VRH6JP7EXfhdy4ew64bTUopdVakGadJQcQrJ1QssZQepQoQ4a8qXot8JNVhuNaRsffNKh9DQ9CTZbqw5P9oa",
  "key37": "NmDxpt7813MAstYc2CeYwgY7guSmsskKHR9Zh6Ud9gAV9gmQJxg6U8N4GKvwkDCbqgKvZ8mNgK2igN5wwJsbKt7",
  "key38": "Z93AQpSzAhPfBBN798ALSkSSTi1ryCSydPkMbThABkDSbW59WN5jhqZLcMvApC9XbHXf8SDKTXZB38kLzvc7Qie",
  "key39": "4BkTS651b92u4dipCwzbeJ65GvdxwaUNbxs4UMBrkRiGB4Puj6WwyAc1QqqFzj4Gxeg49njdFYHNNGx6fXLBrTCN",
  "key40": "zuQ3M5Cfjonjzc5AxCwcMZvzVFJ1bNbUMUXajTWNngeyYtxpiTYNMxzKJPT7gytYuYQXQfohdYoVcpvQGrFiFcJ",
  "key41": "3ihJ3pejKpjG2K5hUEQHsu7JUdmikiLbWvXm9hDiKgtgipEoGtEqScgtHb2LgrhYXb81GBMG7YLvE4ZDdrqnFSr2",
  "key42": "4bvPH8PWxNFyB8KcW4XHF5gwh6mcfsmuUarF6Yn7esKaD6ZUWMTX6inUvJxDi5K7Frz67GEPVVMXxcfKD37Fd9EM",
  "key43": "4MpafayvKzrF4ChQjbDP7zfVMH3nrVB5Sk99dwQ3WVx8ZLcGZ1ow3VCdkfd1RH7hDs68hvFKbjBn5BzPa9CdBtxV",
  "key44": "5ZBenVz8LgJDNtq3yqcXWU9DJtu6TcPM1QH5V4DvtHeE54pcTavoz4viYKoFR2ZTKSNGASsHUWs6nJzFzYaPXcWf",
  "key45": "51C1GVgjUYndxLC5UNQup3b31DzqHJpHy1DXrTiNYWsBdDAky5t3Dd7R9A74QvoYJk95k8hZcU3oHAm7ZhwD65h5",
  "key46": "2zBfHutgNctdteM3iPuhD9H8kF3gAKCUWsL1qk9TcNuHLCytu5Jifbougaz256q3xXmE8KhDrW7jV6N3qn282K45",
  "key47": "RrrwGV4KJfTSyyAXaRSFUwkUSpiMrs5WeEi6sqKqbQE9TSSuzg8w2YYsAoA7HNvBxyarcWoFgdXiXu9fXBLSGCE"
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
