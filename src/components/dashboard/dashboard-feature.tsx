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
    "3KHz98b3Zy6V9sq3t9mDctLVKBEKLU7s5B4WLGCUJTkiYuNDfT4p11Aw36jsbSKf5FbrDEinRobEd3VtWz6wuWWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kMcFKQmXctLjovt5Q1ByWxPHepg6ybaYBZ9iK6svVWLPeA6RqxRN45HXiAAbk2nzN36sNgPdNbUrykbwAEm279X",
  "key1": "2ndH2s7iTCD2nQHoecXuQvZgmdSB82RBfPBAmwiQVpoJUjtK4ZSWBwA1CHXN5yoE1u1yWvkr3qnyAyLJRaUrUEZm",
  "key2": "3eFGbqNJZSSiGRGBHmQigJ1TP7qCKLeFxctV4wqNm76GXFqVmvVHkkhpXyNaSwcEyYzinWTm9VGWxaZKU3q2yNM",
  "key3": "3W9nrqSgQyQmawnrc9eFLN2w9CiDcvfhHRVtmTMeG5C7otoFAKuGohDjYA1WS5fkWWpugz3KYf59H8r3hRmCnqxy",
  "key4": "3Y6gXdjyQq3cRjLzsL1tQbHxeE7RQfK7zkxt3SXmAA5fX7gxV2dwmf5HjW7GqKXqMEpbLgQpY2FqjRvz7DRBAmgc",
  "key5": "3Zrnh95mhiDhcB4w4q6L3V1vvCrm2hfddfSw8nL8UZaKvwhxXgUP756eru23Kj1BbNx7k2Stmu9Bc8WPx2LasEYk",
  "key6": "4RGGtzzwmGK942sD8PbWRVYUuDGGydhtXSYv1wjt1578Be399MQHFdx42CKEWVd1sjzApTpLuYMkEzPhPpXZg9Ji",
  "key7": "6125s5C1EHecSiXDZg7ERZwvjLgzgFvgnYUJsGgxcUnGD1v3DzuttRe5sax8oqSnKppWEPvPN3735zqMHD9bXy9y",
  "key8": "45NC33qgtMrywYnMhkFBRPgCemqvjEVNXt52Rc39MhCbqEtYvjuVcam1XLkrNPmZSycaqSF1bZARoheSUZ8Ex4Qu",
  "key9": "DSzTAHGvCNmYNW7et7Mtvs5Tt627SwpiK2qnaW7iUqSVqrJp6jEPE5mrzzYdPEHwEE8XVyLKLy8tMF72ygqvicZ",
  "key10": "26DGstFUgJE2gD6awJbfZvn6PAfmcF4VJ8kDGew75qbmpKMNEqkt8Dw3fNRSc2QZViQZqqco3S5HYP22ore3PLJH",
  "key11": "3SSnrXH46xgoqsnSY6adLwhme6qKm5QjVVwbeJfsPhTdmhBWuvJE1rq8TTfLy8LXC4Fpr4kqfa3aAS5Xzm4D5vkL",
  "key12": "2ZkQf6ZDpbZuXhf9aA2Mx7erQjiRjMm22tAYZQxcmz9qW1KpRsEPuidwdasfnUn77i7rdEyShtFVu6aZrNNWCKR5",
  "key13": "3pZGovjTmP2qEztTALxi1WdxTv9Vmd1wUpUQDpY4spcWREfjQzjbs841FnsQcG4qye8pTT7WSdVA2E5Z2zhAX5u8",
  "key14": "3xA5qPonvuwyU3E7kozi5rBjpsga3ZvUAZAcehSeRCMB9oBwCrnPMsi9UXHHzjrUyJMg2gVpE5b8oZcjPhLPxHzc",
  "key15": "24KzGAHfrovkDQs9JiRTmgK6rEgaJQX2MAPqQtKuM85u8AzoqnJwBipvxDxLz45b4hMRK9DWDVc4GhndydqpCpHB",
  "key16": "5GKfpwziywPZarrCcsd2zqDPwJR4bnJHQihWLefoif5cuH2AGs5pXpB47FT6AH55YUenHb3Q4FVeuyDrhuQcLVrP",
  "key17": "4vkAVEBsEYf3ypJb3QM7drCqtopiLSbfwvPsddbiUEps4pdxXF87yZdDwSqq8oVG3yCMSu8Si1LJjVpXnatt5D8f",
  "key18": "2qm7LFQgUQGJcL9T9g2Hezy8mYMDTPMdrcNh4Vfjx1ViYb5VneeU9N3yCMAt7AC3bsW8ovKgrZmqaEBDBsfbmr9n",
  "key19": "5GGZthjg2thYdiAFGJYH5U9csxDc5UCjpPBFF9aK5JXVxHkPfTLaWsK6F2eKXyXzAS4YAZq1FSYGs7qZyKTChjEu",
  "key20": "2T8kzJYzcP43ERBvk6ujDGvFf1HcXqsaSH4hKPYYXURa4fWeQa6gNZGNfSBRn5GqzGCMoaoKrYhggGzwEt7bGRu4",
  "key21": "5VLNgtL9m35Dbcn5xZZavnraBJmUqGZVoxZaKzSVWsyHQ8KwPbnV1aqqCqFxSvfQEeMxtXDXKaWayDUzjbcS9rc1",
  "key22": "4d4DugrUSKVa4xwFdno6Vc2q5QJQjZYBrGhLAysUe1MsXcM1s9a34PhDUUMCAKDdeizbYZrv27SXyTTXdEoYe4XT",
  "key23": "4QNK1rkc94TV62JF39THwWPE2Wrqj3wjyvBUhx4nZ1WuGNh7g5TCCYYM8s2h9f72qxhGQfMeqaxRYBdPkrzQSBcC",
  "key24": "2ENTyFUpxiuUqtH3S5hVRCkxjpY9gNDHVGxcnqSznEhvsGatGV5cQnMtdckEtudHnG4qo8baUNrGj2fepL9rmSq1",
  "key25": "7hmLWAokZ5zUpKnSNyJrz2FrxVcn4rMSdTinJpwYSCzCvXmccxa5fN2QsskRYCUQptJtogYg7hQmWEwVj2wD6Nj",
  "key26": "47fdoVVJ4KoJTKrGZMDxaL4zc1WekFd4kLXHkJTPnRCHwkC3fnSCeEEmec1u3HTiL3DqdZQXn3NJS9QEKjYFjcn5",
  "key27": "3ZfnJegoUiRQkb9GqfPD1g7KPeaSEfhaXjtb75ib82TFvNZrnVZ9GNSbK6rU5Vv9sxtyZQ6Bq9gPdUopJxfTCrf6",
  "key28": "5CB2HbRPwxgCqPwjsQRgwBSQUWPMrf1viBL4DsaXDtPL6qjne7QLjMwfkLEs56uBDcbtFsiMyMQzw47Yg1KMqLsd",
  "key29": "2ndntgzmaY5G6qe4Kp4SDpM2gE73Ah6YanHjkEL2hDYG7BEDZyLZdYoVtJsSEmifTRSaEirKPDvrFWmGpgqkoLHq",
  "key30": "3KQruWBgBfwU9ZLs9brjTAEUKMwa6kpQU713J1QiD3MtUe8kNfLEfH2GgnT4qXiCDFuTZ5dn7L1DLmb5xXDCaKxz",
  "key31": "4BS3Ck5eSteNdqc7XcndHabKqPo9hrajZw2FpSDYhSoYcabDDKEjGCoJ9XP4Ha7s6fahyda2prMHqhqN7s8Xn8FV",
  "key32": "5tmfmnK5bn4RTNM26D815SEbhfCM3o5fSmRzmydeJWYkukomKZDnVGRj3b9Te8SsrrRH25Jk5tECGyqUZGxnjg44",
  "key33": "3FQgHtVAbUevUakHVg7pJsuve8q9NnpmtggxYihmSaMWeQKf2LPgxgbh5npJKA7GNicPBnXQ8oLfzu6qwrLkJ3K3",
  "key34": "urqwaDYvUUrtspY1DnXnE6UGe1XZxbapKed4GZ8WwioqcA5eaSF3CqTSfcdWLJ1ZoTHHViNWZ2HLZbnoF1WEsb1",
  "key35": "5Q4ED2512YXsNaYQbV7KiA1XDrfGhQMm4PKKgfwW6paFkw3cMaAr9MjBQSmQNXFxWcUMpWDxA13ytpYjavK8Dcr5",
  "key36": "5BC53e9pJyV4KN2pZPgtAJDvobzbojq72PDnAept1xrchJVUVNkAdxtGEpH1pBBXwyLtVRahegGP2wEPsfWfhvBD",
  "key37": "qWWkXbTxRkBjwYwVf4BZqVvouWCrHCz719XmEBYy5Be1tnuVBhCf6qahyMnNj2ZGJ2Ghvt77HttqqHP1QEkxCrj",
  "key38": "3CYGExefh9S6eWwmjFY4wJkPpg1Hk9eWM3GMG2NNFeBe2Hqip4abbfMMraqvEBJuKRmAQnpCP5mxdnYrpDxbUmjR",
  "key39": "4KpMbE3fCShbkhe91FD2s8nMsQ5eeRvJzW5nUAxQhkFWbLbzX9omCqzvjs2eZjG8rDvQ5bmB4BfA24Vta6DyfxMP",
  "key40": "2nvMt6VF2o3fezqDNw7ubgEt9LoiAtuZNfSQn2ZYNEiGMBrrftTYgD1hfWhGSbVMQLJgTDoeLjgJmG9QRcj2Ai87",
  "key41": "3L1q5eQuiSCQT5WJX4nAFALbERnfqKDNh9a4XjkTKkvVRQfTKcGA9yn1videS9mQDz3LjHej8ZBw3Q7Gq233fMiX",
  "key42": "2W1SGT6YkoLc5DpeKFVFstr66jKUSKb29WC6CLi38DPkDwqiiiwnE9cgd8awc4bvdJqY3bXR721MfRz3HmRNTZr5",
  "key43": "2HSxQpHPEnjDpcY18Aho7LJS35eFEJKYZzH7moQwgALaNYBMSBzcRKDspxufbHYeid3RcMyhSSbizNY5MNWHzW2U"
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
