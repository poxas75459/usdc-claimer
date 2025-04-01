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
    "2BvPxpEvzCAVhkQJct2vP2orf6vyKUMJUohZuPhMu9Y1oQZfSAmR7V37e2GE8TN1fpD7duWm74tYek91j3v8P8mQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KrLbq44BHDZcqrqgJ9CR82pSkH2njH8YX1LDhTtevaTXv8o7DCvkTYXZ3YD8b3mraZr6e8dsG53uzHwVPZp63ju",
  "key1": "3psMCc1tMNvdnSutVcq32Ei6MDzHjDJxzHsWFZHAo9ETvwqaQGDpgKSUhevZXhKe5rKhHeZUJDrHzhxWpWLW9qWz",
  "key2": "5yTtUYEvNz34RmaAdbEeSeKcrMCPARrn6ndysycBvJdh6RtQVaVfbZhntfGJEaAUo45TiJmGrtc4tfHmTQ3R6KWH",
  "key3": "39wSFP3vgTaj4k3exkfKUH2xayJQBBmsdQB9GjYcx1apyLYBSRo9RFiATSjdoZ3BrviAxtgi4TFG496A8azFzJDL",
  "key4": "4bN23ZqDcG9X7Y6Ev75sqWF3mrfz1J3oeEmHruFNvbYEArF49Y47RLYcFtJQzAssyR7xvE3zh9B4QYj52o2r2tY1",
  "key5": "5r946HY3u21W7pRCWnrATE1PdVNvxx8GokWsg4nEM1JYvnYs1Hq7hGkA246a91HBCewoCqmprv2itz73coPajH2k",
  "key6": "5YwR7EojLAkpgRGbzDpUfsj8VWGj1MGnjvQvn8TMVGmAkydQKTCSbkJvg18NefjUJeEABEBqVjdNexBVM1kRH88q",
  "key7": "5zki6qsiZ8zKdtWRQ1iQkofMMqse5wLwYwq1r9WDY7bTwmvTRnMhDjKVpxd5udfq7bqwihghKnMiJMwNiJx61TVR",
  "key8": "4Hgqb4EvgDHjSQzHKkh5p1BfrE9CgEUw2JbswkhNPX5EwAjP2dH8vEWZMGTZeqjbD9zvRaxxgmWM8nZwEPuBhYTk",
  "key9": "tkJmGk4WsebWqnBXCDgv5tWmVhHsB4gsZSupZKr5hAjcD3MnLnaRvbHVXn5Tg7mQ5UvWmyQJrrQviMuoBNiXRYD",
  "key10": "27P9BrrBPS6hqAbFrsznxqRDZC2JJuJEvhJWdBaXEJFNzwjcp4DUXTy8zj67emrbruMXBvbZDhLP9BoijJjCgyn3",
  "key11": "5acemuweRzLnQxiQpBJqTeFDdwuwdksNvHfJu87nBFgmsHTxDJNtGr6wJJ1uVhZExp7nFR1AU8APFzU5hj3FAFnb",
  "key12": "4N4CwyswKAYGNWkh2cnR3kswTdx63JKpbD9FDeJ6bqmEn9YZC5g9ogMeiB7WAW3G1de4z8zZPi9y7tJt74SZWRU4",
  "key13": "Jz6v7gyYZDz1SfJ5eN9xLZKGPfT9UgmFSZCE3DWYM16MNVGGaeVqVh11kdS26h9phXVq81Nw1kmQJH46EW6i1LV",
  "key14": "4LsJaZGKy3oEV21pn4xu2QaHzwRvHCpPUgtgV52Fs9GFv3nuYidQU7EHNhUGHnnC2dhZJeQQs3eJGGVerPsM8pm1",
  "key15": "35AobhLiNvAvmaGVX9GjbLY7xJZQvJZy5b9uJvGVen1NcEh1g9UQVTtsk5LcGYzoYqJyS3RXJd8dy4pRVoePyeeB",
  "key16": "4KQQXxkjYDXQ5xYUwrUWRyGiSuzGCCzYZDNCETECkQvxWUCa9KdRc9y1F44TnCEUS452zqJXET3A1TZ1ouq6421B",
  "key17": "63Ec4d6zwZ7xCqkwYEZCVfuZ6Qjccc736LrTmoo9WcgvD4sNW2JkcFKDfJw6qq5nF2ZpkSKEhmwA8qRSRjf9tzLz",
  "key18": "33BMoU4EibnEqjZQKPqsbokCbuV42s61p1zJW94R5ZUmvfdk6DGyvuARvmRKFr7g21Y4XMv8WyBWqXxA6VCVyyD6",
  "key19": "2k4rpqLE5mC6zHPtVmWmwq4hiaBwkV38DKDSkzRHhedbbvBa3N37pyBm4REs2VaJZwwprGWRvS9W8zdP71FTqZkE",
  "key20": "4VPJLmsPLBvcbfEmZtQGGN51WmyD6YwixEXtnvpyfWtsFTQ2pAoZ4GGiRXSQhNxNGNyimX7b7CUFZiSPjeZ7ZTr6",
  "key21": "57Rv2iwaAGqWvNqhbNUmZ6Vu2zNWeCm2hrTp83LbZhWqpbDnKKcn4USrKMGNG4CUpdXVGS9EC4SspMrzJHf5Er6w",
  "key22": "4LNCMz1hQmwuEEziKWfGo4HC8gnmX9g79KjE1nnsyksigfbAxteNMnkbeJcQe2C2KXVdgzZGQ4z85Wtx7gJcnmbk",
  "key23": "4hpeNDnM1TnW23L6Wpmg8ejc2KNs7t3QuHte5sfhz3KwGSuKwKqPNcAuDyiwewNkN74KGjYWXmAQy89f4ALYg3yp",
  "key24": "5WBqNWym8RHWgQLgfnGhM1M2AiusgfqGWv4FXKmSH1iqQVH1DQK8LzGQJ7R51cHWWASrKHo716t1apXpyZ3ad96z",
  "key25": "5aqjMrQfwwSEuVCQri7JrUnJvTw4UDnYUBPVqdxFAsMqKEW57mTv9se9CwqifaY2LcEBxYPWMK8BfWQ5Jjc6GrxF",
  "key26": "5BMGJ5UVrh46drCKdJrk5WkiMnQagitgDn3a9ghaF2YJyU3q2Vc4tZ3SfSAoj2Yv1RMi6ox8LFqRXwiKPDCzbuKA",
  "key27": "T8tqRADpWNCkaDctz7RDa8HhihrB6ihEA64ib6caynzAjU9fYcn4HDTEr7iRQoU55bX3RK4JaVxaD1PyCiPCizu",
  "key28": "3Khd6TCKLZFKfcQSJ6rqYPEJyNVq1B3DoBqod2T5X4x2vjUCJvLqKbuN7KXitnaveNEtNJfe94a4FZ5CHqvrH8MV",
  "key29": "5eDe1s9CWj2pYf4oYK3iCd2QaUWYB5heVimoACQUMPjbo8andKZaQbxGAgMfvBS4NVzZKC6XsWyTanQrYvHRrCEu",
  "key30": "4k1rWCRvaPEcfF41YrGfcBrj76HRaRRn6nGY9ozA52tCzvg65CWyox3EfNKDEgab8QnhP99Q4mk2ttWzmzv9o9k5",
  "key31": "4p2HFxbwvRSCHXoZf6YALmLQCJsXgRMXVZAypMitfsh4CKFdSdYCBeHABvKyynYPHKSamaFqUF3MmCogm9VMyrqx",
  "key32": "7S7QhWNpc6iHcZpAzCXFqZKQVssrkiJ6A8vHoXi1AjkW1iWPuMYqMWU8zfDPPEp8cxqFi93cBnmaZTY4KTX71XN",
  "key33": "4yUj326imwe7v5U9JFR5E4rcXfh1idWME8obi67hzjTQh56baA679Ti6AfxvMvyUd9rdzpekS4eeqDDzTtyuGPnZ",
  "key34": "31EXjezG4s89Zmm2gmHYD75DVi1nEZ4UoytjuHDG58VF4b9fgKoZJMEc4pqZ9EbUEHykkZEUrKiRc4wvRtonBhxU",
  "key35": "2j3fXJ6Atb3S3bkop9Py9Ct8x5gXEjF16atXBjExtH63tvRHm7YSTmi5ea85UNUEdm4KAjmr8u6XRShVv6P9x6Ek",
  "key36": "2upXzcwGuUXHm55GLUHutwQxqd8AtBQdtr5DpTt3E1FeatbMoETEsNfpfWkcAu1fGtWNrC2RwHG9Qv3688BGB74",
  "key37": "2hAHeAPxntHNr5edCoZQdE9QAWNFC1ANCQ1GNaLD1R81EoMGm7ymBiDUtEHYUuRVafRg6MSQp8rCBw23w25zDQpw",
  "key38": "5HZkPwRCM56c93fH5ezxTdARDen1KVApbVoRQQkcCgn7hTEyoMcVthaVzWwgFSpCj2AZFMeej3ZvvP2LBVu3VNUb",
  "key39": "48gBZ3PHPbuDweFnyCq9tXzjo6F2wnc4qx4kC9Rxf3oVnhK3Mi5SwRvyc8GybQsnqBaQSRuR337KirHX7wJfVv4z",
  "key40": "2jDpUnGXjAFic9tZsBfi8ghVJop6RpLAiw3tTSgc38kYqUPhG1vUhGvPUe1YtScaQpVAFfrKAQ8rXdwFUCRhEN7v",
  "key41": "4t5VSHP2WvpuQURu19kaauvvyHuHhb5UxgwmMCTYAL6ujS4ppeWxSDGgPod5ZZ9zezgJ9YRbh8HTf2mEhN7igVjr",
  "key42": "4tgiTq7RtVEJ5tt4uwPXDwx4BcPbNxv5hL6HFT8hpXQQ2vuRX77aTtRLQnHQtMgw4PEugsTzYDGDGnvK5AqXuWNy",
  "key43": "5VBjazCihhLZ1QAF1Tm45E2Wjg8xSd9kGoUGCvkQzbnaQxL6xfyNveVkjnShFE4iaQWgbrJfB6uzCHJ8qB7ybAkm",
  "key44": "nMMAJ2KRf5CPkzh5z5CokxuX1W7pDZNThqRr5bogeqqkRaDJmYq2ggZrfgAMxeLXDfaK6ZX8WVYJ3oVFWg3KkZ6",
  "key45": "48xu2ESy1pVm6QrEyzkK5UcKmZxfxHahvnz7FUJyLWTxcHsF5SnPv8rzztsFGb5VUCcDhJYg4GK8RoeYZYE9462m",
  "key46": "5YiGVGtgyL27zRRdXdewsUWcJZ5bH9pe7WGDoiMuEocAVywFAu8bRoNzu57oTLv69cENST7QNZdNineHPhiZeozL"
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
