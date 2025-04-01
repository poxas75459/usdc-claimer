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
    "YYYy3QLL62KsYaH2F4Xt2GEpNdWmz273bg1F24yFkURd3RCUHv7N14aKzVUBJFL58zueJxkzR9r5WKvuQAwc9HU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yVWpzdqvG8y2pwFY7iiMpXEsbHCg6deJXZ9Ymzn4tTDut4CSEu78ZDXGeeoxQnyuhzoW3THd5ESptaUjv3pd4QV",
  "key1": "5KZJ6EN4zBLEAMXW8NQJe6vRsde6gZ2DABg6qFNKc9e8BMrQJb4eKF5Phczo6XzghYi99Uizt2UB7QAqqFvdDPVQ",
  "key2": "YWFqFjEKeVUBsj5E8K4DsPFYj8j5WSiGL8Hx9jv6SdjisVjMLVCNNMgzj1YAD4xyjqd81KSPQc8tiZzuNQApP8D",
  "key3": "v4RjFNmQPie7MDjdYaUGjic8cgxyym9nXifpxWvr3LzW2BSikH7vR12VhNH5SQDHyfbJCgf3hP2cCSXZ8zsdUJn",
  "key4": "3RygrQuU5Mw7aejKnnm6HArGhhMAVo9p8KxsRvJ5Bt3sAuFm5ZbWYkcKePDyiWyMMvVenr6HH1eNR1rb9d9b7QDK",
  "key5": "3qH9YJJRTmdBGnyt931gSuBuCemnyMo4FiMkymmXPkeWvi83tr5VAWBNQQRc7XLoWcyAeWjWb5TvHBWfATXcPdyy",
  "key6": "3ZeNfWBnhRkCvfDbXhvYbjTxsrpdLS956fbHDaSQK1kFqgdqcbvNZMqQd8KHgDot8jLkynuHq9a8fLHk4j76w4ob",
  "key7": "5JmtwZzdHf17kaJVko2LTuZYtrQvk2Ue46Fv7CfnXg2KfQoYkd9de927oRMffNyBAmJh2hdyonX8EvXZiA5vBCTs",
  "key8": "598j1JjrU7RCUWyaMuUZentSaHBHpKLuE9ULqm6ym4WMReHWg3fcCvc59kZPe5CXBiUxFBHjm27ii3dcpL2cB74T",
  "key9": "59jxVWhj6Yb1ebXbU7JyP4gcrsNDnJPDsFw58jMSz8LR4Vo6W8o3B6xvXm4U3CQVuCnbBE6L8PwgCn6UUNp1bN28",
  "key10": "GBP2NAXYpBJhbMidyf2mG3Z8qb5b7T1DRfhEiwN657Gidr38P9NS6GY8euKpgZeMdcexZB9nTg9jyfCLoTYCpmM",
  "key11": "5ETi6YYCtewFVhJsgUsTNtYACjXPfXizErixxr2Y9GLLVN3YTzG1EBmm9zRY8zSFYN66uMGMk5EQWVUvJY8LYHDY",
  "key12": "5xf5C56MSsjJbhkDCJs3untp9GgnWTCqiCz3o7kisqwqtbJ4f93C4SkMwbigWgS7kneEMXXCE7tUr2mquBh1xbKg",
  "key13": "iQh889emDkASLweE3QXxiYNK71BTUds7WFnuv77nn63WrDMsv68WSRuiuXoKchCosiHNhyhR5vhmkSupDGKSQxf",
  "key14": "5L7CYEkDqhApmP4Q2gTAdYo5bjw1BamM3TR2GzbQRQHjXwfAMB3v85CQxY5nKQqqskwNCp3jVjWAh1ucpdusp6Dd",
  "key15": "3KrRxh7hKg9BnGb3Hgr1RiUgSSS25ffjrPgX9TgrpJ2sGzBdP9csfF1BT9wb4DgMFgDqL6LatLofuH5gni4iqU3H",
  "key16": "2oUejVcN387BNK5xk2pF6DDhAy4zFcYZCBXf9e8XUsZXEQzZTKPpVHzctDTRqbfJ15CWB34beVqRB1v6qaMFde7b",
  "key17": "2e1wZ1ABeoHLsb82pNR56uvpotNHkNvxbtG8QpWhkLHNfsYhaMGH4wHYSWuD5UqooZd2rmQiboLjw2RABkKtJAxy",
  "key18": "3gFZksmYMwvbTj53HiBNhyi5oajz3p7zukuNGKajbH8NScbLiSFV12Akgjt7ro2eoUWgoFWKWsfUktEMFmqih9g6",
  "key19": "4ENeXYT3ZKWmU73dhEThpN3KoZF5isHafjNLzGwn2wvVxsstGsckvDtinWks56D4WuYc1TKL8JxDfXJDqS8wyE6g",
  "key20": "3hbC2o8X26jAs4uXxxTpDtZkaX5zLjKMm7xTmsJEXR6V9wJrkHpMDLNhULNxd2vaoSWHxR3aPKhQ68b4sBQRVp3k",
  "key21": "2vY7uhSgkm2K4xyo5PJQ7Jf9sjMEcKuEwwBeUuPkwNwea9QGL9Tqm2cQ6NTQPn53xLxLs3HzoFWSZTesMWAtBZkM",
  "key22": "2yUUTdQ3wEtTHr8fh7QqimUGAysNtxmM9TRrSQN8q9oHYFxZjTLNs4ZsGRrJCFUeCMhC1cTjM3UeQy7Eo87kJeyk",
  "key23": "3298SogXSmV8tYv1MimewEshkwQeuotLMv3B1qS2YpHypoiZ6UCr2crTuG8SU6R7VWk17AVrmgcgW1ovMLoEFLtR",
  "key24": "5GhWhw376xts8PVT58b1cYpoPfXdEr1BrTM51BgXNci8Dy6hBssn7MKeg9szxNKjWPWwGHg4EDtpP5GdNjRuDXuA",
  "key25": "33Vf1tGTkJeV4y3mCKVeJTT6NvtAMzfSHErbQWzoyrZ71ep7JKA7Z3bvGSDFJNKDdXKxEghQqRU8zg9N3pDCtxdj",
  "key26": "3UoZvzxjonh6CbAYGPZaTeXGJR7irkJUMv3QG7g5J7xPnFxRFmmaDBmqNz4qzuWUSXxrLGHYAKatXdegYtJ6f9Ff",
  "key27": "m9yAGKWC1imSJBgJo3nTPpLheULZqKL8tcqaQUQQeEPooB4krUMUsJ1mAoqW6pZ2oynCKAt682xpqydSodYspes",
  "key28": "3T5n9PKd7EnCHDJnexbva9zxUzG397v8hmd7uM4yLiRzgyMDZqp2vCLXU8UVNsC2J66d4k4neyEA1haUKfFwbVDg",
  "key29": "4hs214PQqJ2toPMkoGFSEUuFsgmitWPRuV1xvfxgj5J7UvxdCUQXPhsTFzT8frAEXsBUvd2EUr3ckPbPMb2ZyGFm",
  "key30": "44ot1Led2HqRoxFA489e5X1k4QVcHNRp1qBJbrdzkkhL8bKo6B2xGh9cQVFgf83t45MffT7owtBZxX1Zp8VnELDR",
  "key31": "3XjJyXzs8R7MxeZHLTidyHtT4u8gkk2c8THYGZZPyjayK2ApdjFe1yFrZF1taRJECDsEVys1vtxDYePeZEfAGiV7",
  "key32": "2PeMQCb18PfcLBddHYzDEYPHvpFLvTuc3HAMRBWNT1TS7ELpnfQV3pZvCvmzmZWALuexsMANsAfCEErXmnBcNomo"
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
