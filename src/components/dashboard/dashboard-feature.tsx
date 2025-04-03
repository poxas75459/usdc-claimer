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
    "TDU5XYVoRHi4Jdv7xuH59G7XMybPsfjn775kNZ336EHNLjFwia2xaA7Ys8ATpJK7ZcHDoNBckt6bmskvYu2CB6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TE6k6PdsRvkqG44RVDgffTMh1RNH5Ca3m8B6eWchZVcjDWbNXDUZXPbvCNJd86LkuQdMV28YYgwA1Fqi9R9TiGM",
  "key1": "oc7pdxsrrCyfgLsRiTmTrxdWMVjHrdoCUShtDdDaaLWMkvMT3im1q886C7zHwyhn2osrDj2DyouAAeQJ6VzkZtm",
  "key2": "2Q1is3PdCQMmiLC2Yhmhkbc6VKpHaKXS3QLyfv7i9k2e4o7FJUXYtA5Z7P7z2teqVEp9jjh9eA3KBWs8c4k7wmwd",
  "key3": "61nGhcrvWYRrVkDyAxbmhea59xawKEwK9p9TtvkKptS4H39W1gGaem5FML3ECxCYwXzQGouNGKghAkpByMrfVmQ7",
  "key4": "3Z6UCz6WZQVLRmsseuJiWdJRqjx9SXcuxgdnumtnj7sWEHBDyXj13UGgvEqU4KZytkahzRfKKMU3AqGzMUat1ZmU",
  "key5": "Fxm9D2xmSYCwjyYJgQUREShJ7Qy3uMjPpNYQziPJtD7RTvVP9zcFKbDAt9M9c4LFfhWD83jLRNeeKc58LbC71ti",
  "key6": "5DARyjD3UVB7haK8VU4akwoauuxQogdGdqgjgjwcyghPXLtHSRS8MY3WWgV8trqrSwXU7NkLkUGMEmkP8bctoFxm",
  "key7": "3JmV1gRGWphxjTC1UgeZp9RuGHjRbFym7eB55Am4wCpwpUbL9JBeu9nPcZpQceABEAXHRtxd3FCcrMYrXs5F3VUU",
  "key8": "63JVCkPVtik2nDvyZk66FsSw317h3cp1rw2GVbbKhiao9uQJAGyoZaqY1LizTQmz3WXXNgNiFYJLXFEfBFMjdbgP",
  "key9": "oZaT1d6nvoSmPaHtopDktkj4ntnmGmi3Lxma9pi8m32uep4e8tB1mSpGCLrb1u7GpPEeZWSTQ3DEwJz73UC14N2",
  "key10": "Y5PewF7bfTzbt8fnJEiZPNpqimh1gJ7YBvHVi7PNPSiF1MxPVBUmkDCsthRVFQjo6F2xERfhhTtomaC7BRDqg2s",
  "key11": "2VuNRoqsvZjSixVbBDtJLghcLg22SvqsyUSbJxwb2cQ1n74BE1vHhaQF2V1GYdEyWQrh77QorxiaixtiUZjijYXB",
  "key12": "3jT3Ebmyu8KPPzMfLnxB4tiSd5Y7qK4kvLodE3c9DNRU1Qbkg8PLC6EuSX7W9LChyHriwn78KSaNx1GE3krzDwrN",
  "key13": "3swLc2qJPpc1xk5JVJrY1KwB8GoZDLPiGF6tQQdwnABrEfvBDcyPz11763vnHPRCQctY2JdkP4MwTm6WDTDqYST1",
  "key14": "4uGvLPJKGbKSag9pwbCNfk9NENk5DcMJfXtG7H7PwJoCgQFB9Q4UaDeG76JGB2W1mvukzdFpJcfNkuUTbgy6uxDp",
  "key15": "37kcGUpSWrRbLKcbVhf3JXSgiiciNQ2pmm4Pfx5ubp2FgRaXUyqkjr1fisowdakmVSsCtNhn7fhcSWW6xmjk235U",
  "key16": "3VjprfCXeWikAdh9pY4hXZ1JxwTk1uR31yyB7iNcihZS5kyFKSd4pUFwz7oSvyFARpFTAeazpTp3zzLrYY2JFDvY",
  "key17": "5vdpRHMwqbjWrPn38TG1sPHDGyjQwhABjWam5TwoCxhUDACdTUdqEvzkcMwycCLYZVN2n5j3GGdWBt1VrDYnyDeA",
  "key18": "21PGM546SruCxUtNhW2YVS499UEL6gneNsNwy9MQcWcoAT2p7bE5Rr94UndfCB8nwtbmG63u9CHSW5cgNkBiXh98",
  "key19": "zfWdipJnr2w92yd1JrC7jpysAVWbKKYehEv3pjDqQ4YBcJaZLGxC7KWNt8WGjhgC59xtPXByj6vnubuHPjJv1TU",
  "key20": "fUMyjCXRmGfQy4m3Rbuok3i3DCB3gT27yCcorpWtFtfXmx4EoTpvwctccUsmTPTRxqWYStTLNj51bPLfugvDnXM",
  "key21": "32miBJ43QwSmfeWEC5g2yw6mzHwyB3gA6zo8tJb7ZhszzyUWVE5EDMbpFB8UGgWZeRMCc1K8okZDmLmWqEH5vkJx",
  "key22": "2ZiuXyeCrwSnCEPC3nJkfPeffEn1w3FcgCwnMx4UFtKeu8KxS8iae8kpAHche4FnjtEmMLZrseJvjP2vcp8UuTxs",
  "key23": "3qWKefXHRpL5Y8crhrBhwvjHXTf5ueaWMpgmFEJjLwJUMeANFWLZ88pBkT2BDQiUmSxXLRtnPJnzjuPvSopmYFGk",
  "key24": "4ktx78RzbxssbqQBg1q1ZooxEAM8u6xRZnncf6vCnGVfbDeZTyqFn9RM53QcDiQqp8d6b4QFZUmNvzvqP8H4auhs",
  "key25": "yXkV7ZvGKVzSpjvY94iMuNh8uKJYUYaeCJFatnpNvPyW4GkmDD1KvPVPu7GMWwxPJ5n2EVZhQCPMr4nHe11Ue1Q",
  "key26": "45fchBxNZXcKNgN2AckhWfG3zfPZd5DP1ndwV9yypmRYZXerGbEse55Lcp6gvf4iMmK9uBHCcdnA2QhzgnEpN2Gn",
  "key27": "3esD4Bu798Mpte9XH88CfW1iWuifzRR31TdkCgxbgrvUcv2vwvZtpgbcDi54CNVMgYot63FbHJUAGcxbCXHAYLRB",
  "key28": "5ww5hEAHUgwyrzdUnGnzBGa45TnExD9KKZ7zgZgD5rWEibTMHEVKXxhykna4v3yKLPJwp8eyE3nPoDNRV32mcvnN",
  "key29": "4cJzDM8aPV2nNa4Yof6kFxa5BP31J82ep887LQ4hF1r1yDkYojnLEQaDtcMSZEgK6s8bM3siCWZyQy217AF57sjE",
  "key30": "4XmDCLXJmuSYQpjRjUsYK9eA62hhXjuTV9e4PER5n9pNGbSuw39h7tXLMqenpbVyrtAZmrrrcEeMDBrsnpMh7zFC",
  "key31": "2xBN7NiWKMUZ4w4ywwheBcoxAEjJV3HvGvpTJJobDW7MMGEMycUpHj2aRoXtxbCeZ6CNs3dzNCGBCNtca81P5epp",
  "key32": "5LGAAjPeEy5tqzzPupNEsarxCG8YPEioLqhZiJMvy8xyGa8ZSdizhC4UUyTbuH2KmHTamfgxqKtceezw7yc85mAy",
  "key33": "4HyRpU1THHQGxNpK4MHMJbsY4wwR5JtR3sdjSHMeAfp7CiDU6chMBNByB3bv96LYNympsJvxSfWKAArowwhSwXQU",
  "key34": "2KHeR9bCEX3RbYQcv6Q3kKo2Dyz7RW3F8cz9fvogwfKqWfDkCed1BnhCNGor4UmN2gknJ2fZwaJJyG65pUjQgTqP",
  "key35": "41XKq7QLtJyeDBhVFx3gTvNQXag3e841WqHAgymXKmiWjvi95dvyRnXaPCf5vGi91zRZx1MQpbYHTP1J36njxwx7",
  "key36": "2ycc6n37SkLZewn7cmnc5nRTfE9RijdfMCYeHs4B2wC3PdkKRUGQ7rFJfVZK6gdhbbR17Y7jh3iiC1VwwyCJufqc",
  "key37": "2grDwMLjuERmNsYEvcihjSc23ych4Pzkx7nBaBE2JVhgb7VfYRzHSjGdNjzX84n5SX61fagY48HxJiTShRjAGXgU",
  "key38": "3jJhcfMT3v2kw44PszUH2dNzaj2NRCFb72b8mocZoMeQhiQN6fxx4udA77KXKdBwspKAoW1F5c2iSfjshPqESNy1",
  "key39": "37cngs58SK2ChVepX2o2MbmPDRdazQ3VNCnhhh6HgSm854WinFcrnpUvnYikQ6dBR5rH6H2DoHR1GuwA32xpsiQR"
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
