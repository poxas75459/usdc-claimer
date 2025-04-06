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
    "4rx7pFb3FTJzVw1RPtX6aks2bRPrA1oAGqjfc7hVaAy4XdpnN8asZ6n1xKQEPAihNnJSws2gdsqFAYiJtUtJ1Y3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwPA6bpzxriuLq1AHX93WqRPBZQeD3vpdPdNAqn6SVfmaRcZ9NzZYFSSzeySb2m51jgkiq9t9joj2AL8kpfyUEe",
  "key1": "2qG6PMCrc2LmUYU3o6s39Jtpth9FuZDmt6uKMZ7XegtqvvpvUNcatsLJGDkH6mFv1vwDHUJ6uPENgry2CBw4Rwqy",
  "key2": "28viQnsaib9J3yozFjzCm23K4NkKmHrvAGFCn6jLDjxm2PsAn5KexLBtTduYwuv4n3CraggCq5KpCWRMS8yNEXHB",
  "key3": "4AWGiqZaKzVUjqzPxV4trXEMoihPYXrTmFyvmu3D9C51vzMqgPcZsomG94r4g3NVywi95hVHsj5jCdeK9DfMevbz",
  "key4": "3YjFqA9nQ3Ygy8pv3AN2jK14GR7HpCoGD5YH1GRxwpo6A6t4JcXvdFdoLF8sZvb5cLXWZi3dZnxLoA7RStstNfdU",
  "key5": "4cYKzgxQfT1wMZtDZkDzGd8cALKiVnyhwxH3sc4aAWYMDnbimpk6DraY2E4BPe87hR3Sg7WS4m9psVb4pqWmofHx",
  "key6": "5M95cXkPQD8sFrmVrNnwFDxzuJZEeyJhG2URD3YNhitcBv8k4HRET5fG2CJpA22QJnGNZqu9qUPtZZZ1BKsE8mpb",
  "key7": "naQimtmNwurSp2pgd83JdcAcEVD7DrMyg44GPP3JaPPvoY7qXxE82mbJDS66Bwk8JqcERMb5qGR4ZtLy821ZG9y",
  "key8": "3rwRJKoy7su41XtjDbkvDVrKzD92jR2GLjqhKhUoQj5Whr7YHbehyCH33PhRDJDpxYu1wRSYQB23d8VEwfRPLtTh",
  "key9": "3B1nadPSqXzH1YEJdTr5A9pRnxKRnqX7cpHPYCQZcAxwSWdpm983n9PX4M7vMKv4Eza5kygmM66X6B14iNRdhD5U",
  "key10": "5nUDoWsfMRSgQNB8bFsCTU4ByEgrZqUpaHkN9pmaRaczNk6zhvUveemw91VJCg94S2j2VZydSh4cDbpZU51fuNro",
  "key11": "4rAQYVEKLGwAq37nnoNTRw7vQf5gHwi6nVXzwoxqi8JpPYjDJLr8sCT4aCZo2F6aFrLHRz8HXSSwJitvMiMq7BYa",
  "key12": "2GibiSdnGBcseGKpYnV6UgDC5FjeyYd2zcGMZbRCKh1WCAQkxyzXt3QFhw21aeMT3NBxe4x1bnsCKi7XytABhXsG",
  "key13": "4usfAu2pmrubhGW8viMMM79bsRDaQJfR4M4Mv8SmUvmyXxqhBhcWiWmNABtFu4ErUJTS7jKf4uRLqyKvoQXva8VJ",
  "key14": "4fSHbeAWaGVpiJZURAqiwBg5VUnEWAMTieU4iSEXyRyCmkjs457XDWowU5nKn6CWRwnLVFfBoyYRjvwAaSrwrcAD",
  "key15": "3rRTHyUKTLL3HAHWY87m9Ba85BjVxZT75uffWN5ha8YAM3ry8jnKxy3gbHHgbeh2HU962cp5gx6aN9MhKNUDK4RD",
  "key16": "64VG8etWgj5ELTrhFActFxNyJb7bt6ovxFEGL29FYVBrMNddARqjE59UwKQbFfHrUit2YMN5WBX8AToRMpDSucrx",
  "key17": "38RiKuje2heJbDxmWDESze1Ybfd1h8rJTtM3ZnEthgeynMFVCZfwC7ZoVwCTzQfFUwaH1cHhdtdoqrUxf5xkPKos",
  "key18": "wfn6NXDyK3hXMjLtXeTiaSfnELrtSbn6kC4b6xxDvawwU2dJHazovKGCfv8tMEDgpqGS9PdErmKwihKz6X2eeXB",
  "key19": "5j8b9qXMgnmvspm8ErU3xswBtyw35AgSvnwD2S9KEVLxRJkXC83ajtryw8ChykG93aeE5QiEgzFJthUQUT1PeFYc",
  "key20": "H4WxCvXMKNuwnR6A3oAjvB8Vq9KKRLypbWYqGtS6nFbwYtb3wzP8acwBMkw4y2tGJtVncXDZcqeU1ocgsVpAvR9",
  "key21": "4rrPKvt6kRhjKTWHYa9vb2S392CXc51vG8vUwDojhTdeKtxsTdmFGBjkEzqnStjKyCUwLbvLU5mN5ZejP4NimBud",
  "key22": "64385T99NM1XXxqMUaKzSV5VuocGCVqwRxwfUvhag3fPCGYWNfr5UiPYsHWUYpTEwgvcLAHz3XMGHmEdyy2BGVhM",
  "key23": "5fxEFUj9mmpBapPrKo5jzEJ8HEa6Kv9HJbEgsjvvHHXQtgcdFN1iGTBwmg6CuMcyNZYHwtTmdkBTD3xf2K2ioE1i",
  "key24": "3TuuLBV17xMh3YBSUeRwZJ37uu6jV6CPPFdjc2JLjBaumc26bQAnUm7dDYnWAtnmUWo1b4CEkKaRWbf5PXvfJgDr",
  "key25": "43o6KmU8JkK2PEvbkcFL5WKSqAtKgDDHJiAg3gkDn3gB51hz59MeUP8YmLvm3Cws4n3w8iNUiKfyubQTDTZufYfR",
  "key26": "3TvqbVqc9BP66e92BhqgmVpdaAFuXeaFXuu8RJVoY2peszsRCpzGGkUcXXmAkAzP3sMjCaCoatBivkC1PqwnQs7Q",
  "key27": "d45Ezrj5i6zD7C72DeQtqgxpjJi5za5tYBnAq9xCa14NKCZgpN9AYdzn4b4UZnvF9NBdCRJsXThX5hiZ57YvgiP",
  "key28": "4jgcrmgYBGQKvbLE3d19QN4mHiTRQv4C5Gp9bqP8rmo5u93QgdZoNYDAcePMnRMoMuhx7czdMsDRHe4i7Te8JZC8",
  "key29": "3Vvm4WkkzysgUSCzZKaNXQixBFZuhMs7GoKCEcb8E8JdiLjzHcUEYfYSWgM6FNaCSFk1kfutFnpnwfmEKs9QQVDV",
  "key30": "5Eia4Ve8EmCP653zGz9Ztmtj6DVCN4YJTKsSht4ontFiFL7cde4wvxGD1JDQAgHdmdX2sq4mgvwp1cs3YrjgmE1T",
  "key31": "4Wtc1KnAa5Qbf4RWwZzPDyy9zP1R2PxN1J6UFcy3JU1MvQM6iemTT59LjsDqHcQyHSVXUNBXtfkiQqCkpxf2e1oE"
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
