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
    "3NBmq2urdBW94e7eqRXfrr2orzVo1yGfsDpeTrRyPuh39min6DWSpVPqz2bRF4Ym7wm7PUkG821nDNDkPscho2sy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24WTysPLcwjFUzWqhKUbAVfQfTphSTXJj9joqQ8mjz6U7nwaFNyjEveUyFudSoFoy7PFa2x9e1KjNJMohonHjqzK",
  "key1": "3sBtadmhSjKvz1n3jeP61ADYe9VtH4PdgXrvH26XKu3EfjDMVHRsPm2xnjzNCuaoucYoxinr6JeK9z9tqvNZ1eZr",
  "key2": "4UTyzPzr7AUFsdUCQEZY33tHvxmtouhtEY7NciiuV1WnaTrFzVPxDY4nHTsbipUd4cCzsn2ktmzxX5seuRk3v74N",
  "key3": "4dqAGfZDTzjqL1SSaCCcD5KUDnxfbeip9LyKpCrYsBU1n1pi21Js9AJj8q29c6jRbWVen8S61XxLAtPLBcRLxtK4",
  "key4": "2zf8i42VPtAm7URfR5xQn8CeNjxafQmB3zSj693VukTJubExvZ5XZn6h9JgSfRga3KxCAEJ63MfcfLhA6VdQ8o6K",
  "key5": "2VNmN5xKBx29ttCcQVGunJHRHm2syPZBLcRLq8crUBPzf83NbxQrrRWgrKpHV4LeygjVmURLsqCV189EiLgZWHTc",
  "key6": "Vz8QHkVbYfiT2MaeinMr7YvieAcLroA1oXL4hhB8aebwura1HnQryRkuNoEDCxhckPkJmi4Q9s61oGnwFnCgUhk",
  "key7": "3ejM5yY7tGX7JT67oE3maT4oMXbFkUUdzxq2JGmP5RtbSHXr6DFYCx1JLazeN9NpxEGoRVP6yH892AMch18Tf7c2",
  "key8": "3EDfnSvLDWiKKiNnTxN6AZZWbN8gAuAyiPHwo2d6yMJgKJiv96m9Vyt6jdbYTMugYGR9ePQayLmGJTueEzmiLzuM",
  "key9": "3LzqzruUhbqUASEQh4LjbemvgGLU3LVLgbMBFGS5141Cmasgse7BLVE27jVmY2jQEXLdbaHSn3oSwYndGwdSyqyh",
  "key10": "gcu4C2t7enooH7rHEYtXW4HDHx4fQyLNf3Bzvf4FCQQjLhXByTPNq4fVUahHzBMxzstrHMVcJ9kNCzGV7T4RC6J",
  "key11": "3nj6XGpz7Mqfb44EMc6mEmAsurr16z55L4NrZWkRowBPRDj2qsGWGgc9r9W5Vm5Z6sftVA3Vm3boB45ACFYhsNqk",
  "key12": "fQbev8nc8ZhUNuswVHj28RssnUTALQC1Hq5rBxjtNUR4K52kGeBqtraFnRFMjLcFEm1gvwJQ9LV52VdiZMcUXJ2",
  "key13": "4Zg7Wi9m3YvWKpvzcKWm2321H9PMwff64kfNU2GWgQ4vjnKuxkT3g4yb53LEcHtzdq6PwJVf295GLu9iFWt3rqqq",
  "key14": "WPGE1S1NHveddsxGZHQxUgUWsXXja9h63UwxSqh2ASmjDdyccs4gGnpKGxEa4AUWE2bSArx53VBbBGxkxNBrjM6",
  "key15": "4fWQJ5oEXwzR6nbT8pctmdj7mBJZSt34Wrb2JgfxmXa3WHUc79ZNJ2mGMQudb9btVaRwE6HDCP2vJv4jP85fDJPy",
  "key16": "FN4JfknPtnAUYxiXcFLV5t2wLwyZaVp8Hyn7jS3cuJkMxNwxggG2ezXaSYCtWZjTJj99Q6xayKSzBbPYdLRpJ74",
  "key17": "4TQQN7MNZe6pEKpgdQJ9gP4LbFmd9XGiRUquKqMgjeExC4U9qMSrHagfb3boVvXPsjND49GDESaekeip2zpeigvi",
  "key18": "5pKZJD8kzWUoqDEwgaWd6jPU5p8avUzS6VZBt8gWcsb4ZcgmAsceWwWTMwBWxizX7SRPWTbZrbAsAQgLNHNGBU9Q",
  "key19": "4KX3JmqJ3GYZSNVmuueDHcHuipmyQqArKgSrHrTXHvacTm3BdJ1ByDf87CLkJvtbx5fm3xUwaskTqBsyt5a8XjoX",
  "key20": "CArXNNRcHtrkxo4FvPiH6Y5DtVfAUp6t3sWMm6vWQLiyQiHDQFeba1fUx1Kd9o3hu2bo7dA8jU8etGNtFmfs5eP",
  "key21": "5y85neBXHdRHYsFQLw3qNjBfeHM8YAbjSzg5wTrSdv9dJrZ1hm73zBESkAnizVznPNaj1meAydMTc79KHC21aZm9",
  "key22": "5MTLRdsU6kCzVEaN9uEgB3cW3TYWsfEvyRPUTgp7frN4zrwcNhVGmvu3TSy89i3tsPmrU4G6XxFQGofgCtR2tJQr",
  "key23": "NAGBku1tX4EvuF6rBCVYEXbSzmxF48Jdz2mDHA8MY64bAaGsLEKuUZsMVjAMhTJ6baW9XgRiXh35GJ1o1vXfDFm",
  "key24": "5b3tFBzmNmj4LavqFE7Vx5EnTNmC9Y5MozAcGPE7Fqj55rStXK2Y6jTVX7sCGH93GQmm5bfFFL63KJ7kyVusuepf",
  "key25": "5dqCU6rSeymNFfTFcxYwt9kDEtDUhVUXT18KaUuB1tyBkzxe74zWWd9gJbwYvbWF4un8feoNn4o1APvauYtV6dDc",
  "key26": "616y4D5CGwC9hauDBS9A8Y9Y5EBn543AWHCWgvW1wYCHCEZBCCbLWgYkX7d7xBviAM2Qz1jxXJbyjp9RZZqeF9KB",
  "key27": "43uHYrp4oovMULsPMEnq7hS8ZBLwD61UiPm5TneugquxUJzzsKLDuSCxqReSNxfVoAS7erSeaqTvXvADrTKnRUYx",
  "key28": "4D7yifDVCXBVzmnGXGiTyxFUrDu6T3DPvRnGA4av7eNrqM3NQLLuazmGinpoMNVJGQvVGaKxvGop6cvAtF3vmAiT",
  "key29": "3rsBK8TeNhoxfYahGBbb4upGFhXmLXZyPZdb7NzStXU8nhTQj38xeGSiuEjvhJZhUNzWZTbB3oD7FmTGRX9CbkFo",
  "key30": "2aBY2wSgNEcCnTzkGXbWoi3XMNRPuPywhVkFY4ETuyxZ2JZkFycWQPuWCzcKRQnvhdfMUbMX9nKmui2suXWh1xtC",
  "key31": "5wwumxW77NJDL6ZSMW5pz2L2Wo1YtxVSnndXxvce7bRywECj3wztQhhLdQPdh52mTCBSjce4WnSPC5G7QaJkVHQM",
  "key32": "5tBKTFYh6UmeE2yMdFAji8osFhTsAA1Jb31fbdcGNMPscXkMuN2KAAD8k79aEN6TH6x9ooqS4KbMmA3ibUz4eAq",
  "key33": "3eSycES1QX8VCrivQrCBey1aRU7eLFhUt6sx3mZVRP71BJXUV56EXHvQ1ieFe4mmvwyn3ZciFos8ayU2DPGvy9Mm",
  "key34": "53Uz4deai1HXLFTkMsQRRJxkJSeyGHU4tmoX8qmQugpQNRFauAkgYXnHjRsdBKoUfvux9SXmAnMYfJu7jBZ7zqwy",
  "key35": "5mXoHVe5boQhoU3KQsMfbEThfC3rDqdVNoNVv2k5r6ovphprGTUqbuL13ZGyDx7FUzdcjBA1zeNmwJoh4fc2uUVT",
  "key36": "2DcZdGJfJZ7zuzmiARnfoM8Gd3FLXCyJFv49EMH8ySutRJEXJNAovqBSfcaRJXf1wtykmnME3RzGCpAYNv3QaRqo",
  "key37": "4GfzvN8JuDfDtuK5D2LhBPTtFQk3xLtW62zniUSR7sXvtSKYpgZd1HCP2YG1x1oLUQjV2tGzkvsP4iABKJczmeyK",
  "key38": "5qHxGbMsajoLi6yAQg5ohnow2iFVHBqpTMaSaViAPqJSLB6GM1pr66gJoJFxx19HAUj7Rko2QM8uTVPQfsyUb3jv",
  "key39": "32H9S6WYNtfqcJ1NZvsouAKpBfLBYWj5ZViXoyT9VtsFCZsARuXJA2R9EVFM9bb7CnxGTQtneEu7sbrdV63siZk",
  "key40": "4j3gN2Vf4pgcijyk7agyZTjZsPEjV7Mw28KDkh1TFVn1bDBCnKufLfsyp2QnViamCvp1CF6xLUrGvZFYMEwsoNKm",
  "key41": "sQ4rzauYrUbaq6EmnR6dpJfi59HLsW4VrMq3jY4JRkx3nDQfCdXTM425fydNhaiNU2msX2Vz7u1di5NL6iYQ2gd",
  "key42": "4S7iPLTaQo2bfXLnmfxWdbmZU2MTTQaF7g2f499LnoqKHwVykMsBEkkCLTkmRUAR8UFDBnvX516ictDdwBjgXNDv",
  "key43": "5F86T3GRJTydAfK6dycWL2FdVuQuhQnXb2Vb2SuJSo4xUoR4JDjGsnbcDbwJEQyTJSM2uJQFQJboedWiSP2axGJf"
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
