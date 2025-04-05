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
    "4yUW9yYJY4ZnCd4vNvyGTQzRMMEvY53VMTVHP3q7wRt6MPVTAuc9MNnqRAyQQ5jpXa92UdJUddHSpf3soi3sGH5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eEUVeYtkzv8FCJzNsFVVkQzhwLuDsnkjcvKGbHCskArCJ9YyWPX86TgjcUbYWC2qLoKaZKWqkH15tjXLSVvbEPb",
  "key1": "U4pFNWJtqJgs3yH7uAx84chxeAh3NGNt6EzvXFpw9xxtmcGseLENi38VXMgMy7CgAAfFXwjvUq6ZiWoApuiACT3",
  "key2": "2aMzrybFycYaV7TRoD4hjhxPEYGMDdLvfsYijPhFNxebV4DU7DG7nT6P8JQdDmmsKMXw6wpXBJ9jEQBMQYkyhy9F",
  "key3": "327nWzJv4V36LNxHkzpcFPM4hbTj9CCXvp3WUvKGXN4jAAoj7thA1D1qonarGvp9mHESuR9mbXaAYvTUfumb9JFz",
  "key4": "24TChx6VCExdWe6eSenXtKxLzAd31sC2m9g7mEMTRJAuSTcL5GHeqz4gxeGPBAW2pZ8RsKtUe87TzTzsyR6TaM5X",
  "key5": "3zkpqsphCvwATu4fveKCTauTru4i7DVkiGcRcEtvs3Kco4bBZq1RsmRw8EY2invd3ghvCNaqeqZ1eUk5G2FuvR8e",
  "key6": "8PbKmbVsanGwcExTse85bUmiuRgzH5sHxT2Zg5W3PSX4ybVFaDXgNkAcUNqfy7YTD8mkt8syrHMEg2EsouxSZ5e",
  "key7": "2LaEizeTVezkBaQoVDi1CRnPsHhmRpWu8QZgfDo9RB98zFkPaQhGkrH1NQywP2sWesAJZU8UKeoMrkscfC35fXEH",
  "key8": "3uorcHJXgZaKKN7odiocXA7XePUMmtaStnzMQZmhfcgb92DwP89qbSsHh4Txme6iAsvepWQMSjV3ce6BUTceDxeX",
  "key9": "8i1s54BumMBwUH88JNJdLZiK6EiyymEpBTcpiGQzAuX2f735b8qPiMZx9h4chBLhY82X5SE38ZU5SgLoL6pvyru",
  "key10": "4sG6DDbRByuQyUnsQ4nKmET459qkwNT4j783SPqJBPFaw2w28hfCcnVjEwt2tSmKwMcNkY31PJUfVSLANdu7uizd",
  "key11": "2EGiLftjTCMimjXcRpPzBaLB85thdzsMY7GcbK4HpKUDwdTK9ac3P33Cn6MTMK9KPd8fjLr4dtBKnAsLy24j7AAB",
  "key12": "32wmZVvuGEehG6XY9pKPPXqpAqvpssZbkGWtZeTrh859X4RNNyAzseFYbsqtVL3DG3Ey8X1XhxX9kgvgTEHG5jAS",
  "key13": "2Fcun2Ux8pCnfF6CrUVywyb3oN2ayufbH3LvXFVxF19DvQdHKfNJpAEYTavjw5uvxzzDNMpbev6f6NB2ba575t43",
  "key14": "3SQKf8Fw8HPZD8ebtJmqSVUED5hjZbdfk8grsZfWCBjASzFu5Wkfb5VyR6wfRaVBSk8c9QvV1HwnsR9wGMmeH4A4",
  "key15": "55hpfcQSEVFQT3SXXnddQ4MwaDbdYtCnqpSqeKZikUgE3jWX7pRC5zVtharEvgTK1V1dLEJVCcrMobJfwr9uTA5e",
  "key16": "2CKgXMZwR5SG9LT5Ehh3oiLCYz6Luo1dpdPDdWWBU2tEB8Wh2QR4DGPqP7Kdpn42PGVag33ZkaxxBGsPo2eYyHBN",
  "key17": "23bTHCgeq4f4WqaCeHmpWoQBriHmrL4iBo9Y3CY9Xa2jxn83XM2SUFq7oef2cyHrUcv7TyRdq8oVHyR6zNXEVawY",
  "key18": "2a8yr97rt5cM3KJARYLcNPJen3Wq1dkTMRX9VFrSYuiqaUxuZ2WRGK88diX6TnqWZ1bTf1MMcMe532XkVSNRCLQu",
  "key19": "n8LyzRqYPuXEiVcDkQVoT7KdZh8av4rzhw68QgREzVquxaP95PLbw1iqRo6wH2bLAMyuFTZBJWMNgWMYGZBJXpy",
  "key20": "5SFxENdEoN5uRQSEvszJkkbhByqFY7jY2mUzw1pHmKmMmZjqXdaqAdG4q3dBWhR8e7N2JnfuwsL9uGbwsvRcRc8G",
  "key21": "4dsrKphuMqEcbb1UubgRZDgtC8hqdmLbQEGh9SAzDmrT3Dy62T6fbxh5F1xpwFsubPEqZjBVQkYK8Wy2KZupEQ2B",
  "key22": "66zhiuSbDc5gaVAFjbBEfjA756tRRrnhY3itUReeSUkCYkoUxgoB7jQcd8q9DQVHkRrMaBdaAn5XbBzBFDb3T9ov",
  "key23": "3YrSeVGo6dUhPbbaDrxcvYf2mQswQRoxorLRJbtaAiMKKt5vzcsah2PGjWhx5hkmhBt2nC6Sw7cik71suWUKZCYG",
  "key24": "2BiFeynqPHsdEAq7WkE7XniKCrDiqEex3gdmcJoh7C6ApJRthxDT4e1nUTvs9bKnL6k1AnB5fJgRLJTh9zYTJYQg",
  "key25": "x22K4NisxDC7zJ3LPTLh8QjMMFLHS5LXpoC6BhkLh2VR8JCwv1Z2tzPsTEEenFNh474avXgr9tuKB6eeY5GStj6",
  "key26": "3JbzgcE5wViWuc39ZG9QieLfUM8dLinH2DoJ8hpKgVbwoG9PKtC55QcPz9KFV6C28Pa6iMKTtwWCkRiyzVQFxB3Y",
  "key27": "4sfGqdLWxyGYBm4eABetfDu7dECNuam2GmtZrUxzQJAaJbCtvssEgf8dvjcDPcry9F6suesWXxpzqYz5RDD2T9yr",
  "key28": "5tu7MAnJSjFdqXSSEPwSFXYNKbZAXuqA9Dsqz41mzLfACimM79wwJWXib7RKgNCAZK2ToLqimPkiAm2srw6u3Ehz",
  "key29": "3qpd788W2j2owuW1jhdGKzoz5gr4SgXrnrmrexZpK3QXcTgi9cey9AATH7J9LB6qLQcb6GtWgT9RFszcmiMZ6TPS",
  "key30": "45v8L35wnPeXUKMtKiqRp3go2BLVwpuhzvuB4mbfAqh7yxHCfmewXSAwkRLJs8UHCjbFwhTJKEbKSqshChiLKp9o",
  "key31": "tk5eqyhEbYqXcxuB5PMnbAuYUdnEWys6ZXYTM9GTAEmvSZUewYq7Gzi97vUkhoqZk4e4bzpKQPdzqLqrX244aVx",
  "key32": "3Xw9RQ5hJaPgES5tzXXXZbhZzJQTUFBQdvk3icYCHghNm4shib1vjK1egtFZHBvj6RCfY7CmKVphTPvQeVDy1MS6",
  "key33": "5o3HhPEE1UZkdXHtKYwvrEkwVvc2XTNH4N23k5h5eGiHJuShH4a9Uqqc7wsFy7UeUexzcPGNKe97y1ZCuPPcCDXZ",
  "key34": "51LB9rmqwsZqq2CUx5xiY7jaZNAAKH4kwCCVfAxYMaEqxW2a11qN3TMw1wbG1QBK7mmhKw39E3uTC7bs6j8QY3Wh",
  "key35": "2dTFXFXAVS6hCB5tvSE72q3VNwDbs8iKXfyBbXhiAZqHQPAwJrdUmuvktYLRaVKzKbnDw24V6Nyg4STp9ektu85V",
  "key36": "3bPNeq4YBDNU3NQ2MmHfWLaDauXA1mGoU9VPsrwGy1nQHgVNcgYp4PJXLQDLYsan1r9aU8z3hhWfx64t7NgEZVw4",
  "key37": "2P749xVt2GoRQYweP2TK13C6S8RVynMQjBhEo1KxYgqrANKBDegcbfZoccAmwh1zrRuh6nFeTktkzhY3LiFCQiZV",
  "key38": "N6b8a9H6TkPh9kkemdVnN2Hfj73rn5EPcsE7k42Tr2YmFy1F1o2uLj2rQmHnLPSCYb6H7hNsY1drk4GAhPApEze",
  "key39": "3j8reBiMujhURgAtDUQHGsVLuVEHGpmV5qMvT8d2L9gBjLj3j2v8q5BJHhkpsmd3W3TN9YobV6bXXsi2KAqcwj9f",
  "key40": "s5k56W3XPCAtw8kDTwizHtzzsuxgfzy8DzrV3hC8bBN1nHEvyLSNT27AT2JmgYKX8T6oGUq8CmkvAsYYGHYAfA1",
  "key41": "3WHCUqseA3DNNqhRneeGRVGwBep18RxoLqjz1kb63v2DDPc5pNyagY3hytZLUkPBrhSpVmWcx2bZWunuDj6tKTaT",
  "key42": "b5ugFNpztC5dFe9CzbCKha9kc1BJioJp9csnrYHxebDvqLKwZgnxnVrotrtcbrUCbfFp8pPT82SAY6tDTnMvPgi"
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
