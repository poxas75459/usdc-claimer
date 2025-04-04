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
    "2YgAwTFiKsoj6HUjaagp3jmzq6y6K8X1iqM5tAdiKwmsFZVsvMEb2PCRxNKGmNGYTJzkZ7KNjX1s7QGVK1rWBkRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nuPCMVSSQvH6pVjwL3UVf3myJ9bb5WBSidPkZ7b15b84SxHr3EXHpZ5itpFyRvN9NAiRucw5A7fDmqfcVjgWziq",
  "key1": "54fQmaBJ3CF9TZSRiuQFeyoKXn3M5rmDBn2bXNJHbcTJP2i4FaGnt9T6KeXp2gGGrXfxTZMB9ERJ53a6tCvpuqcj",
  "key2": "44Cm5R6MUSptYu8NXJ58n8WQPAnMrLRjAgez3Y57LVneqC7fgkheuEq78aJ7e9DMRXEszSbgisiTsYS4yw288RQt",
  "key3": "5DkWFSprPsvhHfBPcdPcojCWMTHzZmxEmAVZ61pRoBud5jT6U4dwUrDSCYHcuBvtBjP4rP5wBNXVnJVEo6yXukA5",
  "key4": "3We1yZq2GDQFMt8HBDsVQ2sHDdA95Pc8bdTdiuNYm9CqibCe4K1LFDaYAAQ8qWtPPb8fYfaqx6ydyx9HwG9QxtZ3",
  "key5": "3fM84T2D1Zhi1ffwA9vFXNcMMZixmazV44JDcduwMD2ARgHyzDFDKB5KURsgJYBKjq6PbXsZphTvBGZJ2cTaWuQa",
  "key6": "KrAsmG9QaBGML5yTpE6ZpanyyeSCrYui2gDLDVi85V6ZjPfPrwvaLXZSAPRzSYk5CEHMXQDLWFPYkvT8Tw8Ci6Z",
  "key7": "fvnRbKyCPze36H5AuDjwSFntAqNiXUgHAjfehgBLzoQJDZVPiDZMsJc1wYhzHYqBAKisdifvujM7Bh8xrUExPHV",
  "key8": "iJVpU2t6fuXSC3PkbEGmsmHAe563W9iRHR8uL2r2QjR3gFcTh6sDeCxwTQ32qbVdJCtKtmjD6cajhg46Es7cx2E",
  "key9": "33Xos33irqnBf44n7fxujmdDMThQseHm7ZCmkZZuGxcpWCGt4nFrkATou5dYedmb7eHjtQamz8NpFqvxrnTmZC2A",
  "key10": "4a9WvHqYW8V5kY7eesKAvDSAfMuMHsEmpURqxwcwYxs7xWHitRPCVT5ssdJRW8rH9v5pRX8R2obmffUvKWpcbP4v",
  "key11": "3FMuv7dATXeqnYFEoF8oAPBgrg4332i6fC3uJWGFUess2g9LY1DBqe69TkF8UKAcVeACC7sgoXFsmtHVgYdZbZfz",
  "key12": "34ETgWje3jtnFTSotNXRviG2RoqMCGbMyAubXfsG3dXm8kYNsKoLrWx1uezb7nitQGAUZpEKu5BFV2zB15Rqn59H",
  "key13": "5jJJbUXiYkTLCQ7wbMJFiiYEqFJ5aixs8TuT9hxebwXgT9TrpzDMzs1HwuRt81jNYSySgRNUfs8j3KXkP8fVtiBy",
  "key14": "3GT27qA5KYvAmWFNpXXE4qKy1pQ8ZTY7orhPGwcaPZk17HWi7Y1JHVmPNMFxdU5F3K3XUhiFVFcz9kwJsdPzrbTY",
  "key15": "3N2kqrakSQYEQXpJxNY3CcoztSZeRVLn9bz6MbfqQMSvV6Zr15iwphi3M76CkgaE9eax8iNsdFPRtMoJp4MGjTJ4",
  "key16": "2Gu4EwTAe7uWXRhT2cHEYLa7UVHbcdCzy4XCwdVLoZHec2jRJSoaYF6vHayk2MgxnC29RgixHH6qUoEKiTSYp2LR",
  "key17": "5xBAiG5Bf8ZgfAy59U2RRxsgsgb77tx74DkmAE4F1vMuDaWxptRBie6v6tyn6jf4V2eQaMGBwqKq75NXbikjZqDF",
  "key18": "2VJojJqfanVPkaLhWnkmMyQVjyuE4xQup3AAzFFRY4eS9AthiZCSjEC8HMz7SDEcC2Hb5v5ueNMTyQW8BuWc9qxw",
  "key19": "3bqL3ybS3MYv9urhEj3tcZ35JK18A4YiAFceoNog8wSxkvuwErymBKXExMda8oa9qYf1pikTaCiqnzJ88ZufjaFh",
  "key20": "22BBKeuMgtpSiZh3AcF28ccDzZEXPbLkoW1jXQBmrdmdbRtfqLMUHn6w4CetmcN1rh8pmEFTZB1kA8hA2TzfLf1r",
  "key21": "3UWbR1fwxtHvmsbECAJE2pN7XhDdSYx4Xe8acJn6ghXpQedLHfM4BDsof2V6nXSrGwvUYqmNqZ9gHWh5zJTacE2x",
  "key22": "ekHMBCSecRpMYzFAF2SWdrAhABtM1iF9yvYCvitfv63Z6h8YAEivU95YHEfDYxuV64aXjQv22RqSNT4pdceqLxy",
  "key23": "4ViUCqaG9xu3jzX4Go6xGRoHARirb2pyW24x1ZQvtmgpkuaNNGDCBgSCwmKo7jY2rs41dJaG6yK9pdwFY8bvpEt7",
  "key24": "4MaMCHSUbUpteb3ogGFp2UiTC7bNsBypao8cLmN2UjC1mdfz6pnwptXmsGsAYnWkBDEWo6f5EkQ5usDXbY4RTpzQ",
  "key25": "65XUL7XfaXfyTShkc1cyTV7J2HmQCCaGgrGXeahdB16RwuCS1eLk1b2R9fhRxmVnPhBvP4JGLAPvf4Po85fpgGBW",
  "key26": "3QPKsTWzLBJDYZv6PZ4dR76ErXWJDULHenpwoHsmXmfhkSEhJMjVPbSqZixqsfRPm56dK2qTLWGTQ62Ret7naEM",
  "key27": "Fm3dz3jypizcNkNKDjZEkTbRhzccyxF1esWXNBGZbwTNbYpYZmuptyd3eE9YZergWALVKvynBJ9DV66jxnBZ4nN",
  "key28": "5EhS1cyVfesTbP238yYxt6CaJjgedeFirhRpjL7Ux2voNkc2VBMDGq2uQBtRAGVbYYE2cgEuTfwCxoAAESUV86dD",
  "key29": "d2ehrGFLHm8P9Y5ykGPvjWxAwgQRvhRGR7BMXKwB2BX3RomAK2dm29ZB3aEGAsAUPEteuUmuwQEJoAaBmwh6KzY",
  "key30": "2wX47Bz4VCTpqZoRKmvtFxmcDHEU8r3wv2DG2drJU8JM8p5MwvyrqkWZ1ViFZXTkrWzxbsCn3eogbKcRtFAKXXmw",
  "key31": "3kpnZnZxWZHy9riFEYLhcSQ1TzNxitzSEn9aXmWrZp6bN9dJgrbeYcMNSMmTnB9GnMX85ysnjFaAvjmxeipchHyK",
  "key32": "5vx1tcgx93SfSZvq6LPJwWvKEnLawPSQys5FoRsbx4SmzyepxcJV1H96fC5tDezhjpsJXBgVeaxoEuVHTBMMvHS1",
  "key33": "2VCDv5E2goDL9QgTxtsQ3A67C5yhjW6cNdDSrwwWKqN9wUHBpF2JrgyBRJWmUCayxk8a5bhuEpGLTF7hHfG7ZDJW",
  "key34": "23Xh4HCtSqre1mobkhs4hxEWaEotKpzbjWa6vG2EKJdMQs8vjyoee6VDXrLNkCnyeFwWqTUAH2FH9Unq8vyrprMc",
  "key35": "4dNKbSArQQScpvainBKMQTYi7CPJmBWvqQfCmmCMWnEZZSZ2sZW76LbWRuzaTu9dcpRVG98vTHx5KfzQxJLmVv7Z",
  "key36": "5QdiNWZuNDzB3NaJoLbUw3ZbNoFNvGrktcYoeVkySrtg6yZUopVMcqhCsR9b4kW3xsrDnBDzMZJbGY9NWnkX47rG",
  "key37": "4gVeicHM3jkCJ8ncw3TvJnpn3txvLuCpDTqyNRreKmQ7bdeQsMEZbmPtMg8MEs1J9yx5LmT1tfg4eJfR6YUmY5gv"
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
