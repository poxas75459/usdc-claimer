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
    "23YoVr3SxXZG6KbhDLktm5DFbkuBE8WUxqZaCzvXUVaVjF9uxV32SqfEauN7rRBcNkL8wXQozWrJpK3y48vUfp7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AyyBJkLEW2ZNSYqc7reawDGF2aVJpeMVwf4YzC4zcFUQh7xep8i5M8cf8tFw5kpAF5TaTNYiXESzJLNbypDhS16",
  "key1": "5PuCjpLdQbXVNDfEaeFrSohqTDN3tCA247CRTFFR6rbVo5EfYssark68qfcEuPgK28RFacS7b9JS7rhXfM4SRerW",
  "key2": "4Bc57GYJGwztTUeQkQ9GYoGRJRk57r3t6XCrbEVAzeuMUC5R1kkok4FGPPJk74NJ2SJutpYwmu8pgudUK6d9TJjy",
  "key3": "284Q9C9uTqSbVc1JeY974gMarrrYmz322EZoaKdiknZtkY3Mtk9KsDSJ8PBm2ZCMRJ2UpxrjxdQUurPc7d9S6P4s",
  "key4": "59JqfdDoWDXemUh18ZuFhoK6yCrF87m9Cu7nj4NCAgk7rdRjBdHwcuDaF1eGXaMxmh7ivHZ8PQmg4sD5XVpfKTyV",
  "key5": "3iNhzKmh37DQezV7TyBEqQ9u1W7kgdKAP4kLRZyNtxjKoF9Zu4snAFfM2FHZ5n3RBY8aXuDvBFRWuS8uX2GwhEfg",
  "key6": "52qUHuNAweCFJu2dei39KtQnpEMsFMTWNZ8tT9k8Cqxd1uTvxo7bQWcMKJaGbd9rrXSwbsBCHifEsKKtbVMjXVfb",
  "key7": "5pY4G7s8bU2X43GZQTbQ1os5SVg7YjjBmbCFhunFzGE7hQbFTsVdENHrckth8JvthKh4Vcd1wwrbVWfFY2aJH9bC",
  "key8": "5wCkPe4nG1MGZB4XnNi8D6paG7iYAgYfCVj7Uu8YQBoSb41LAWN2ZTsMn99iLt1vBipxbGRx5wqsvckM9LvGUqF1",
  "key9": "3WbRTr5rVgWEu86JVxkP8yCYT4ENGhPttLN7xdK7JSzSCAmdeXjv2tH5a8g4pi8rp6VBUPXj2SvMvSBhLgq6feeJ",
  "key10": "S3xToZ5sH8A7b7DfRrwdTpgtqkN6ZYXp1fXo6coG65R1PAtM6WtXumiGMoAbCAynqj4QarHJNuwmvsUYdoJje6r",
  "key11": "2SD9z9QDzeNHtZ9kgZdv3GHjuxgiHJDKzaH9Yj1TpYJA9ajHCR5JM2cxSGeZgGswpNAeydaHbiBhcjzfTubzPcwN",
  "key12": "4qxBuTPVhv9HDrHkXHNxRxpLr4mapEfP6FPcFhBdpwz2vxWsA7yegyis2peeHWDFxhRKuuFXeHpwYdxXH5DRqhw3",
  "key13": "3xqyMxmCpjseqkLgH8aP6erohNo6ZittmKpFyy8iJSoytxiRLc564DMWiiPQiYs5NpkDpeR7471FD6oTbmamVwrg",
  "key14": "5wcW5hygCUTBT1fzH1GGvzRE9qES1DfoXyutQAhDhiGpKRu33ZbWsTbChPECfZeZM8ob25ukMVhi9EKieSsevJKv",
  "key15": "3Vy9kftmgRvZoY5W8QE85mkSD2fWsubnyw9MjH1hgqaHTC3deQSgkRf5UQp3aFEVBEj3YinK8v9q8JF64KBoxURJ",
  "key16": "4ZSn8R7WAiDNHGu2M1WNJufHz91egqxT4gniKNkJn4wjTyPACdo635DdKPWGK2B4TU8piX8Tu6N84Knkn64xfyCK",
  "key17": "4yLHxx1kiQjdV82anp4MojVA1j2BNFzgZ3X9et5yfHwfFCacSPDNoneuANw6gJ7uhMNdxh9HaQcw8G2wSQp7UzFu",
  "key18": "2ygbJfVwW4KyhXnTLBEjpupxE3oEDoXzvguEwh8rq3waK9JS5vJ8JeLnvdCudhfXmLkh7RH8uuE2ohPhSSAhgf7u",
  "key19": "5cV8i27f63iSz9Te3sYja89nGGJn9AchJCP19eMmxAZXxWK3ZBMy73jJ4HdzWJmtWHTBuJMBDrYZuVaECerZHJ97",
  "key20": "62gU63fYUJY3HLgyNCeqGJcUDgSRmBv5qUh16U3uitLUDdmBcRGUnoJ21oBZGKJrvoqnRUrNqfRqpSMfigL5TjKZ",
  "key21": "2n5Q2j9Gu2yGkWr7sBoPo5uD5DdaCZ1nSHR71vr7a45EPYCmv6vsFLsKGJkKP1UPc4CU1tA2ukLCb8hRxhQhayLP",
  "key22": "2hhpdjaV2EiUpGoR4HqiKowv6gb8MXRo4iNNo3haWmuLaA43vABabzqH5G9HWyjAU1hkThnpSVmDS6mAMTXXbqMX",
  "key23": "5ejekZxVF78P5qC2TeSM3VotmebdDXKruEXmqxPEkY2JssK39LBejveg28RQWT6AZWLFqoXoxNi669MC4x4bcYuR",
  "key24": "3sNWMiC4o8nNjZvYpGxyeWhbp2JQE1u5A7LkiXjCxZZPVELwqKGYn5mKBnauhiCf1GqgnvYDWJsfEf3PVTuRSEB",
  "key25": "i2edhf1HC3AhjPwgK2S1TEkLHYRNd8eJyAfmogGFwR6gCKy35jA474fdxskF5bEGHCkbnVDwa1Va7hKgo6qMm2L",
  "key26": "5PWW36CxZvbf828evkVYNsdotAoszBbS2DTYfbuCUtWv9u7dMedAwvzca9W7CqgxmQZDdDeMWdpgsFp5DgnKQfC8",
  "key27": "5CNP8zdS4VPAnsnMokECprMuw9ZojZxC41sK3dd9Adnzk43qcPRAfYMNMsPr4eaG72E5PHjRRdUDgnACQ4HFFXJL",
  "key28": "5zdiJH21dPV8SnbcxPG2EpWdjpKrMewC4rmpLEfVvBXLLHgqixQotKpZpBSqwhBNa9D1351pkq2RAUmQeH1fXJqG",
  "key29": "KdjeY4LpjT9DrL7sZJiFEr5vjxKPDCcA9oPVSqJPL5mirRBgGKYHjWx3UpH9Ard45L4UqeYZ8Tpk8BtR1b5fNty",
  "key30": "Fa7wAFXefBb4M31PRSHG1xBctJPaHE9si31Htb1yHfL1qmHcJkL6fWRgE4z8ERwMU1KNoRoeZ1888FfDnagaKK9",
  "key31": "QfscaDFHx2D7h9q4eLApxJadQq3caDsSaPrsgVky84pkzcB6uzSUEZdCbFtw6aKCKr86CRYXh1QX7bNSZY9DvTT"
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
