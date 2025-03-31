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
    "4Hr99xoRZkpeZhKrXXwWKZ91FvRnrQebuudmfEyKPVWzcXZumTboLxEfHvm2z6acyrxhqSbJAKESVXd1ZDHGshLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VG8Jgz3amjemM9xwjUqi97Cg37ZgT7zoCymgbP5YAHNhUjtL2nGtqw1kAANBAyG6V8JjU2L4tTYxSASyYyoX7ju",
  "key1": "5rXBwHxdTG7XxmVEv9L5ugh9b7UpXBzjF551fez8WcfK3d8kdHNLx3g7xSQ76s6u9Ui2GWxu13r3Q6wEbZbHQHYY",
  "key2": "4vndjfe6y4bv3BE6cFzdkr8rupVf1zxh8gzHpRKvs3ELX9UU7oXAwztDg9vNZp3fwDuR8zuY1N3RAyM6wSy6ub1f",
  "key3": "2pooSoSAtXZmKNmebYN9KrVjgqjymHtnySNy3rXgywA5XiGqynoPw1YD64a7gBLgpvM3w5TtJe244keX49e3UZbp",
  "key4": "5yAuRcVzkWHBUe1Jv5ZeWqsV36d47nMNDn6cHvHi8Tp28ejGnppGbB2mtsFyXv8FNWPRwEdoYwwy6gMqp1ZJs9Bt",
  "key5": "2KaBHWgroKqcfAQjeduZxWV4VZ8pkVsZeaFEzcn4pYz5FQ5Rsx8qUJjJatj25VNdrHS1wqQQa3yoqycxENns9LQj",
  "key6": "rJFJBdZBYU4qTwkugSiNYZiRJJivaZFvo4bYvQ5VmcX6C1YQ7EPo5M4vo6Tanf19kNEJQjpp1JqYaEhtP7sUQjz",
  "key7": "2999cbpVuoy1FSTZMc25SRqeyJHQZKsKZALbcG7uDZdhkSZUjBC7ME6Fk6VoAnaVG5SXFxkqGYeauJ4iwTG79uYn",
  "key8": "5akeS9QBNJ4sBbv2ScPwkW38MbWhft3Q3ji5L3MhBVNxkiMfGbbvTBRGCfTx9DmAnceznxCBjEYELuB1fUgYHyrX",
  "key9": "2Ewg5KHzV5uhzzwMAcJPX67BcHp9ggPamFy6bu1XMrweR4tdcdJgAMpAzMJBym6u56cWXT3JcnV1tyM1eQ15v7SX",
  "key10": "2T2XXT6sAU4Uqz3xcixRLDe89VFeehJybMpAC6kJfNynYJwQ3BotPt9DDfAXCsjaR7M2Gt9PemUNSqCYKNB6F2Ny",
  "key11": "2ue1TxRoAfnE62qdAL82752k9SzKwuy5okxvomHGkMPbDQQKyLrQEMtPtgyqHg31uQps8xMhbAnX54T5JS4RkpDv",
  "key12": "4S9vRwoYPoVGSJDNoDAFuRT8yxWVAFm9mD38C41ZBzKa8igXa7wWx5tFLUydtRHDqot5ktP1W2eXFvGycZDtix1T",
  "key13": "3JJ4Kzigpd3bQdt5e6C2pVkgMgEwXAcTVUX6t5zyCuB1pnemsQdg4CTBbyLTbw9qE2osDZL7YaPxtuZ95wzTQRrL",
  "key14": "2uWx733tbwb1FYah73TJspuLEgFCx8yCk8mw2KpvxMuZA6RLjua4XMdienAgt1yng7XaQsFsPA6m44by5wq6RmzH",
  "key15": "2eL45LB8ycvpE3PoEouc1uHvjrBbrgYv2VVdDRMxQDQ2obsw47CPJLgZ86p6svNsprkpkpR8xA45XY1ZQydT8mLy",
  "key16": "zLT43aohK5jjWh3bG7ry5xm9C3uDJvLt4F1jv33dU4xBmp2hyCdKbxu5NKrV32h5wyk7caQ8wH6un7R1BztDzj5",
  "key17": "4sVApLE76w1uuApe7c3pDJN2xHqpRqKnq2RwkhF8bDDvrPdsqAoFCpCiA6k1DPEvXCaiAs3Ay8ToGFXWF4BRuraG",
  "key18": "2tXor9xErCK2xGnntq3Nc12g3ytPdBZA27Lmtb22h7P9nJfY3DaFqVCwwGbEVxbjsyoxM5NW2q25w92FYYm5nc3e",
  "key19": "q5QoShPjJjcXV37DyE62VJs8cfBuEawKKi4CgmbraLYvBkAuNYjwBYviMd2U5ix94bM8QctfWpD9EUMKBBaZBPo",
  "key20": "3qWVVveW8vd4S95SiGVVQoaDNkbng3YbjnvhYM2Xoyt2mScgeQepkD6eGGoZwWDqZjiLiZBB3onJuvm52hZdtHVb",
  "key21": "5WAXKCrB2ViSJ6yAoJrNpwmQBix7FwDvZVDxREyikv8HCjb32962p3mYKvoQDSFmew9LQgTDeTabPNupgb2eAGMV",
  "key22": "31awpQGeGeXWMaJy78ADy7fDuCPMefN9ZaJzfZFEFaV1W3XtWaWsEj6oFWY6CWZLee3qrXiw92Mxryou39GLVXn1",
  "key23": "31tP81ndYwzj1bLwgLRa75eWj64xsJ3CHdHsjQN4bjxCBh9AmMqGyss4q5fjkmwwfAMs7h2B5otizxtNTvst6KZQ",
  "key24": "3qbKy8qDGN4AA4fucDeMa6rKJPWfjs5rMVdsbXTguXNMBthoU4z5LtPwrPuZLwbXcYCHRWuxETQiojVhr4XqtJZh",
  "key25": "4T9sTFtnXM6Y2Fy5t6SV8rhnDo7N49AzdWMwy8pnXFSVuk4b2KU4VL3RY3KZdZcLzs7BCgTLvktWy2NU5fhDahm3",
  "key26": "4C5TEV6cKGj6fwHUcxRnwMb23xi6v4CP5b1vn1W6JZ7SqawJhiEoMx5Db1KP2eTqejaWkiUv5exeepfZiiYT7EqC",
  "key27": "3vcAXRo9jNaaUiwsmbE5XDoHwRpj6vhBp2MfWSYEAbNLT3WoQ78TxtfC9Sre2mx6QDPaKZ4mnuyHBHeV3rfSpYfm",
  "key28": "2Pjz3AdWUBGNXuisLBmVAThwnvMtFA7oeeYPYivSPNnZXoAzvmVz4fdmiXudUATtFL7RHUYQe73a3zghmbbgSdU5",
  "key29": "L4ax8Mivtaqo8W9Hp6kwizNBmR6UWoWAyRuRYqgyqrDfRB5srdkmp5gC4aFBjFFHqVoQwco2qKWFAtw55B6A8SV",
  "key30": "3nBxHAo22fxciXqMnHr5oeA83hHqkRiUcxwSnrm6QTatxgcqq9KyCZ4uoCMmmfekHrdKNztzbmiiZGnMRQuFrtS7",
  "key31": "xSs7pf36tmmb2rdU7A2Vn5oRoqs7pFifiHZZi5HP8UrrxiJNLgvHNkFj9FGFp2NzngLtuY3h3CJZCtYPwTUN6Az",
  "key32": "3T8tgVyPAAYf6Ruc1zqJ25EwkkHwYYjkeQasPLZLKtxe6iKRdas3MG29qsfvmZcjPnx2MgJC3u5Cb5prnFjfiP8F",
  "key33": "41PZYVXTXMPn6g5gZ4pTp8jG5eC2kq3uyC5wt3mxgqeZxitGwXD7KXMURTXht7dNibFArJ92zgUwUUUTrmW4i9Fq",
  "key34": "354CcnFKzm4Lv2kNMXvRDbve4NGxrg2hcm9aFrMZtMPeQXSAEeDQC42h2iRa5Loqty47ayYRtfY4PhRBGmt2LQ74",
  "key35": "5azuMb8tKotu9yRjTXbP3aTzBvJJC92C6wP2nb88XHNpPFn8UzC4YMJ3ijFEqMQQ1rUqsz3LeKcSNNkbMFgHi1yB",
  "key36": "3NMbezUAjjbMHx7pfgfFG56GkrGDpH26G5RduaHjHvM3BygA5pkGc1TQhgDvjhBaek5FUfVAeueNsNRbqcape84T",
  "key37": "653BvtURZcYmj76bteXconNahwQR9a4qkojgtx2RmLpN7vEWvWfrXpECdwWVfQh7n7MeNerPykjNT9bUGzNkR6Sb",
  "key38": "3WDdVq661LvQjHeJJk5tEsFP2pwGawAfxHEbcE5ZwD2hkwhmhyGuUAg53R5wwzsqzBU5g3vcGNwCiFXZEEKvnEio",
  "key39": "2cHh7MEr19yfn5HSZWEjfbJqKnnnQD62no3utvDk81JTfYy2s2ebzdidbhkSGEkYJb3mZp3bwnZZZ2mAMjzcaXrY",
  "key40": "49jSuLq1NKUJsXrFUbw12UKrXgDxXS3RoXsHJfL1j2CuQsCQABNiC3j6pCqRBQvkJqnLskfm9diy4Ynn57aLqa4d",
  "key41": "4UVxhvnnn7WyT2Gfzseo7fSuazMeQeGXi4esamowWfDoa66szCMUfps9W6cbqVuhzCJryNBRiE6XBE5WC42ks1LZ"
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
