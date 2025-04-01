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
    "51c6DS2XQhP5GkmUVYQQS4AMJ6XrWZaxMMN8CJXTiKyqFkhicHvdYx8R6jN8GiozisMQsUyuqZrPnjAHJWYQMt7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kEFEjjaiDkA8rHhBTxXeX6HF5zaNv4ugyQB5DszdDBkgiGmfBMboyXKh6iuDYepp8pQ7MZUpZeMJy4LStikD3rm",
  "key1": "4nwBs39LZsgNbDZAngHdPcg5VqzDKQwnozNCVRbeSq99saqCm6TM4VkW7Bty2uicZu8zAwi9bZovrkGzbwiQWYZT",
  "key2": "3NKDDFzkXT6eMSnL3uQpWcPb7HVVyeX2w8eQAwJYWyWGgMCiM5iTCFUGLEG7GrPia3ca4ReH5EkGRzWGCBUH2cAy",
  "key3": "4XNxisCZe2qtq41QqpVC9DaEhL9ovsdhPZ5E3giENExxzb8sBJoYr2V5G5BmsLuqqKSSRHUw8zVo8iCWWKrECd2R",
  "key4": "39i7G8MtYNNC8nKuQQ6mTwi1vGQa4EWLnfVKLj9gnrSg1vjwjV98cUGAJsvZ2kibbyqokyyz6y7mZAp7dv2S8Dx2",
  "key5": "5RQAHmXDFNActxFesrD4bfJFiQvXbE34bg2Dr1V7hy5Duy4wfgagWV4AT3j1W3sxMnEMCbCAihSHQWy3F6GV84qM",
  "key6": "25tLjwWw6NF47tQVxh5iVa6QhhwRNMaHWDg4FfPxEiE7LpwRiWk63jkvmNxTG9q1qQBX4WHZHgTDXPJECgMBvp8b",
  "key7": "4Tsfm4nsVSgFXCwguw6EtUxnzpRdDaotQFQCj4r5bnmpSNT99zAa4naB9sNxBtiP4CCzCzsqyqX9k4ohq2wbjKNU",
  "key8": "41kcneqHZgrQPKA7YqeATsBhgx5KHB4JaJtNBXXXMHcLSSqnPGyUWgCSUzUBo1cp9QPmhi2Eyg6xS6BcmJXtRiY1",
  "key9": "2N7XERyYGC8Nwn1KdcgF5khdck4M2NqW8XySiV3EwMpxkcA2sktEi6Bh1tDfbX8qY64vfCnz1bQh3yQAPKTo83mr",
  "key10": "4q2v1LrCSQk693PUR4JuVLSacjEw15mnnt4oYQTJR7thuCQJ2t9DQfjPmiAm6iC1sKP67B7AzyRmhiVXdhLfbhp",
  "key11": "43u3wuuhiy3bohE3ZuadBoY47JPWX3ecQpm3D9EFyjurTcndj7ZX8kPFsSysmFU9Jr2YifspErmhfEbzyCNPYtVe",
  "key12": "3ihf6riLa4S9Fc5ocuedRTtszyuMPEQkoWVBRGbtvbBprjEroewkDVg55FJhD55ckBompVZ247PN7Za2chhvSLzb",
  "key13": "rF5GK9VH5YddNSXgCkEmdM2gk6Ufmw6CgBrihtGkP6Swg84ftnnS9L354nZ1sQGMyMyUR8EAWw6u4zbfjCxiuxq",
  "key14": "43WKzJX9xyn8c4tEncrufsMBfAA1tvVgbSHXo8RrvXPTu9irk28iXwpUSkzmgUwK59H8CEZYy3FN2a9e7aYeDibB",
  "key15": "3B2GFCNQYj3pTopeWZy2WPmkxto6nYan36jy1qEPd85q21g6sDnzRaDqwkYPHJ1t4R7GmmAiCvisk8PPUSDA7hBs",
  "key16": "5JihusXqMsdwVbh84HLpSdtRMXQSgB1chwY8gYf8DCx6ddQEEsSWteLFKFYz16VBhNk5ufYGfsPfVzEMkWhdFD3g",
  "key17": "2hyFWCWxffPyW3Pmb1mtBpeKxvuXYkdwuJrw1dhVTLoDcf54vgwbmqgP7W5Zt82TLSh18tC72kzZ8ADMrM6KaMb7",
  "key18": "2sy9YH7UTgXem5T4Q9Fo4cKumDmy7jgBvUgyRvL6PyojRpVy7D58K7yEMzfrpEBc9oexgAr1ya8LTCeyMvGHTfdA",
  "key19": "21K1gKgQz76e1ie3veUWGhxBXH1Mjftq7sW7au39GEA5ExNxDmvghNn3mD7dZY3GC6D5GagvLo7YoVw1AAvqHwXW",
  "key20": "2Q56gM1Q9njo3ZkMXxcrd2YzPA1mo2fTyaiaDy2m7LeQPaVQ19trYBggyF6Fcttf4mxgMU2AvTghh6aG8Loqwdbc",
  "key21": "4JEFyFLEhNkiuVbATt7CDykJRXsSuzopXHFGrnAmtLqtZ7Rx9Cih9jfr2BGe1rBJncS4UHiGWrPcTizBPX5wKGww",
  "key22": "25UQ7TK7te3zMxE6qCFE5HexpGGN7oTf5XThvpHKWceyjHC31b1YpXyuXjHbXcbMeiyxbHNmURBSkpThVZbbnMaj",
  "key23": "2FCjRzKC252nLcGg79zjYZR7hj912FE1wtMKB8ZGC2BmEVo2B5kgM3pGbSRo4W3YwVJ4DRuUhzEcWnsx9Yn2Cyur",
  "key24": "2WQVH22oyB8a2zK1amksYmrYTxJnTRB6ziKEZXC45bg563eE9DhJLVy7hQLotN77LKL8a2mnSRXdvHK7C5nVQ1gk",
  "key25": "wxBZPgvEiAQvEXffddBGWAweznV2CC839yMYc6y9J7P1vEiLrQjsZGYU3KheqqNdAnVGzNDx79gxVoW8r8ZAPBy",
  "key26": "48Cwqvy6HTcos8tu2f4a88NMS5cnW4hMwx27VcfvwTJDzZgcXZpTAen98zctXNcA4fxdY7MyZDH7LAJL42LT7bdP",
  "key27": "5hPTJgZHStq31DAN1vyf4v5Q6wcpPEz1ZDJvceM8PQwUmv6KpvuPPKRp7Mo5RtrWQf3SZcyiTWknYmA7dzaRZg5n",
  "key28": "3m8iF4dmy34y5ivdZNcqwVjspwr4vnh7hk7rrPEz4UWXhHrWewtdZx33FZ9szUBLHa77H9Ko2kbcQPK9fKmHPHyq",
  "key29": "4HXZkijWCdNe63WZrj7y6kFvvT6W8Zofo7BPtUbxZg4P5hPUbPa28z8KywMr9MTPLfBe5om5uYkCdjbp8JkZPzZ6",
  "key30": "4JCtuJQi6WjZKFM9ZShU3bshP7HnTQaepHGJmL5qd3K2Sdrs14de5pvf5KTvX1eamcYnSSmUL23BLAofDrc8aBrx",
  "key31": "5bFhWXjsdw7isvq9EunTACySTh3d6xN5DKkJecXP5uphBbQawuBf1dedcituhXedcAqHxnj9w3rfvsjnSBBLuyjX",
  "key32": "5JMAr3UqCeqVTWsy2A7tUvjpLnVKfz9M7c2Es49BvWqkEUvUchAHVN77h8oYPs65dNVcEoSAAA5JkpVa9rAsXty",
  "key33": "Ugv2iqnzZafCw1MJiZKArEWHsiQ5RvBjzcigv3Jo9qhuES1e1Tq8s9qcV4CDkw4jJ3yy4oDiK6XhAkSNhbCVWvq",
  "key34": "2yRrm9XDgrXTiYw1tFm6HCEp2oSVSK8ZkFnu6Z5HJf6FAkyKRCik9F2y8pwUTdnWbLTSsawuTGKHBdMkthvRL6FP",
  "key35": "4NuudG6BVLufDMb5T175HvEZqb43X6fTvw91CtzBryuCuNKSS3QJ6f6BmtDZoeSpdAvnZ95SbpzBenPQqbt4p5kY",
  "key36": "2h5g7BeuPBZ3w7QU2wj6m9rbeEqaVfhzpS5gCC17hMXdSx74n4dMUqUxM86bA6d7Q981F9kCH5vi6nvqy8ET8PGn",
  "key37": "47LEBrWSozi9rNyrYoUjiw4cEmRSbGWAJe992VRW2dS6NC6tBhNVPBiszxEcVERpwW7itmc4RzbhqPhM5wy3Vzmp",
  "key38": "3sNYtHebabsUstJsq51zTUfBdfyrUb7Bs6A2grLjurumBzKLhww9j7duAZw3s6xCYrdZfm4Yt1S4ZZh6YvE1mFA1",
  "key39": "4qih8E3v3Ck5MQJUqUCjhojDGbxj9oE3XPNN8dJWLv7646k8y5AdEvCT5Tg8KvcL9ZBbwfZoB2E8L3gFH6eb2A3b",
  "key40": "3w1dWyJmmem1cMes36WLXLoWRYmdNwsfTwLsEVrMnx3hKnbsmsHxySG2q7jwyWvmsDHU7CGq69LEsrU4CXRAnVPB",
  "key41": "3JFiEFQyEXQdrV9ysU5v8tre5LbsAYRWyVeXeXAuKDuAT8Hm7Cpemthm68dkxudtS5EP2xRJ455uyrveBJ4sLRqj",
  "key42": "54yEtN1Gh2UEvjs76q9tLKgZHTqCJ6QgffSvSRM9vAB9FCCBz6ocfj274vzkNuN8STwMxHHxj2wtb24RqJ5RfQjj",
  "key43": "3xoH2zve4uRgn9rYTNyVE7xvLEX1z7psGpw3Va8gye9xtEZkcT5G51qoM7QkXUBfwgQmEb7anfg38ULLRteWC4U2",
  "key44": "gd6oZa4D3qj2YKgWX3m7gzSAdYq3eqPkEYavDeAJxZpXEHrNdMWU9eYxtnxvhqYpsYnaPqDv7STb2bhqzeeqLy1",
  "key45": "3S7JkzCstzbGt4aqvfM7gjXTu3dfvuFHFakFw8STL84aybxhk8Nox27rPfJXCGihQUgWdTA5MKPuzjcGbMJTCUsY",
  "key46": "2TBEFsMgXPbZ4HobW97RwuoduLE5QTw8U8h47TXNr3MpP7P7Nk38FABX5KVNoxpRs9kAsqqESZJnjqg8B5qxnaUr",
  "key47": "bZPL1Km4wpMpTGSbqrH3Yw8Wm4kBiCMzEW2JMsEJgxEJL8X7a9z6UNm1pnx5BRQmCK4uzFyuwePqoBSMoJQsCEJ",
  "key48": "4skkYTnsjbAC3JPvWVtAn7D4UFkVLvcD59M5HeHdEWaaGBLwRnBs992eS2CuPzJtSDBC5d9whSsrjAkZbWC22UTu"
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
