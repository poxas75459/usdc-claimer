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
    "EJNwcsaYTckWZ5s3qkzTBDGGBTE6XR7KmxrBtqrG3ZqcpKVNRt7KFNP8ooQF6q2mDF3vPxxuD2zY6yuBiSPDb7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64uJJpG5eYM8iyaV5E5S3gCYBPNJdFDryjPagUBBVy6uJV1dNzpEKiMZnuqfhtbbSaFuDTabUUUYsoU52j88TRYq",
  "key1": "5YxYBDbUWuLC7CZMoc5h11KFsq2x8zDNZzeXpVJZzhS2LoT5GE2amcZt6KMXczRNvRa7ucKcK7d8kFSxfXufQV1q",
  "key2": "23LjCfrpA9eiLzyMyZKAYcvJ2WiuHhnubEUknt7TJJn3875NmMxUtSjPwsn8XY8sFCj6QKuu2eCafQvxzg9brYaC",
  "key3": "5c9YGxsUaZj8Vjw7KFZHWmwekPdCFA786keUZ4FzE7ypUkDKYrChUisiYnEwWkjuhLGev5oiHNVAPJh46YXpk2jQ",
  "key4": "4tP2d4Eh9pn4NCRWeXcQhaEmE9FbA1qTGWvLimsNXdJvL66WWPanLNysZhyvqFqze18eNxfYQKkb7fgmuwRRpKVj",
  "key5": "3bAadQqwxjh87SuE1dq1gcqmjWbP7YPeKwjC9MJjY8qUy2GKFHD9BsKyJsdLV4GhivX93tHF7Ss6GYJqJMhaMr1D",
  "key6": "25k2tKegDHRSoCh72wqzaXy11KcKHpBus9eTUPH84uCaXGX6MJp6Lj3XhZ17fcgUFLXMX5vNGhoTE5y6c4qo1iWU",
  "key7": "2HeqemqTfgXZ4YJkwAJV19S5DQqmpTyw6XZjFNuCMoWrP78vBBCC1D66TTuAByGG75f5iQd9EpQFMoAz3VVFJCE8",
  "key8": "264Kb2UzQ1BvUUAQ4ukxQMMAepyVNQXG4urxJjFpsXNTFcN7WDbWfDJsZaCUPbm6Y6HoJGaZ7vofnSqJKFz9eBK8",
  "key9": "4ojUNGNRMhUtDKpGyK28MVZTFEk83GH7GqUisQWLvzSBLotoDf3Pwz4tQc4EgKbV4PZYCQKAMspbAvXGydusoSr",
  "key10": "41S7aDvaUJaNRA9MREXniGukZJBJvBeN1UWH9NxvTLVNZuCeSLqMdGjcBci2D84ydAidk47z4qELLAReBeskBU37",
  "key11": "XwXDFehcLq4NbMJnQWLnUc9YmNYBc7k1ezu3FeMQMQYYEbYUvapP4egunVgnM4K7ugB2YKeA5AW5r1RsTESe9RR",
  "key12": "3YemQkASryMivrH6sGjVRM42JGbqQRtdT1CG6e4jZnRrq9U4bFVNwpnHwG3icsnwpjVwBHFYotZKE2zZ8msHyNF6",
  "key13": "3JBLkCJaFi3zm41c2s1K5ovP9ZGvP285imJawpCCNB7QUVeYdJM5FrcM2WWVzbCe6yQYneHwZVsBCWmuTkAy6NRf",
  "key14": "5nxZtEQfc9ytBcyjJg77MhLZgVkskq1xbHEnPxZj1uMxcaGAb7jEGhx9VHaAcpefJfLgw39ceYY4HXbKqW6MYfRN",
  "key15": "4HEqkmeZ6d2Bo5nDfG75QghNKGg2YdMD9GePJ6KhKVrZSRqZ3iL8mMtpVryxovp78qvPwMtcENirfDLwkpTjdn8U",
  "key16": "3x5HtsGsuhjkGkYuhHs5K13u4ipdahuVSqDkAYVV6eG9FfjCywCqTvwS3TAC65Niv3eJSbwMJCrrZPH6HGeHBq6a",
  "key17": "5A2KSBoHLKT5Y8bgZHXLVeUGmAVoetNZnXrJtuPCo6LeRBHbo4UeLHrpF6HjsN37NsgrV6Fq5kWXSEY7TfVsUaXM",
  "key18": "4MXUqgW5BHxEDEfuNsNnAFUwrunbLhHrby6stuzjDwEYxuFLgYAeq3Yqh6JBgPmVDtR7XaYR6w7Pqf4ushn1Z1ag",
  "key19": "66v66YBbsy4n8qZzAVMmCMgbah3GKabBTpH5StaL2MU3R4nfSLmdxiF4x54iaSQ1oGmTVSHLD1xkGq1wuEzjHLgX",
  "key20": "3s36DZa9rG1MBNFfiPixMAXC9ps9ADT1urNnAcgudGrv3zXkxLCFNqHjjYbZCZ1FPGkK9GNgKXinbNBCsFxksxt2",
  "key21": "aZqGQno6q1QWAT81PjwvRXGzFVFpsRqXFtEjFC89jd8YebHGxy1xPN8G5RET2sTNMQj5JPv1AE3ejhApgiqAhg5",
  "key22": "2VDxrsYJBtc9LSEvABFqqsy6yWBRdbYaEXVkDYyTxoDpueP5qNPpG3VXqXoqUmBUd7Eh5oXsonPce3R2UrurbrEU",
  "key23": "4qzS6W7jQPfCbUiQKprvKbkb3rQDfR2f1RUvrMMZQDK6BXGTqB5RBBfFbVNwCEr6faUrGMXnJ5Mbin9oEKWq5WSy",
  "key24": "2uWFbX9NXQ5jgL9C7EZGYcnjLPEUxy3Uf9rAqqqWvv3G274aBCvm5rKhL1j8vgMsUforTGFr412QQS3ZuFnJvEex",
  "key25": "5tSUrWQABLNLiFzQdTDngKfTB1zBQmGsePxXWP4bFK3sUr2PHwADUJNP29WFQm1C2WjP4VrfgZQpfTk5bhNFE76i",
  "key26": "3r7sckTVrHVMmPpJbfvRt4kDz42TL1hkX2ve4pFFxYuUP4vFjqquNue8w2SmwFF5qVWiY6kxPJ5XGdzXZLjuqr2Z",
  "key27": "3Q2GPe76QWyFgRXPCWtcSprSUbxCPEDowxEsD1CYpYRwN5K5MCjbbhXMq85PPVr5r6vzkuEzPcpZxVZexrVyBmp5",
  "key28": "4ieRJty342DE43MXjiPgUxrbuTMAaZ9HgiVLm8t3XwdqrwQzsbaUet6CFumALpJjUoUCxYw6szTJL5RAiwNYSYg8",
  "key29": "4dosF55Fp9qzunk6aVEcywG9KhtpZJHsurLRo2f1Y6jpCCZyiEg7pMEChCdt5fQBtsctcqk8zHvw28kDJWe5U7YQ",
  "key30": "3pVzhHmRAT9e2DAuiYvvbdPVTcAuxq5Pj41mUSrZSXuuFVxTg9CewdcRnShWiRpETPvH9r7s73SFAcYTnViK1bu9",
  "key31": "faRnzeZtNN7SrqxuPwu7DcG2jXJwxBQTNmVmAzjnDtXmAWgMyVK8kCnmzDC88kV5VQFmqntMc2Dtg4gSVZ8QT9r",
  "key32": "3iXrFy7PqPcq4LW3FqUoHUbKkd4tmanwkxXySpFfi78MJ8V7D9KNg1ygGxLvhGQZLPZuMCjBUsTwLdkvkN6SUhyh",
  "key33": "3x8DX4KEYTfDN2974XRvEQAjDxKDbRCa2n36u4x2CN6UFZk5Xg6gQ3fD4SdPLxMozT6uW22VKd1TUHGLqYMLs33n",
  "key34": "ZFALzX6KsrCwTmuDyDu11Noy997gNdQkWBLAHzMvTqsrknJVgdcyGBvfYssLJZYTbeE2yVqb5HoLBQBYiYSYkSV",
  "key35": "2dTCenXf2b5DMM8nZEk1N3scjku7e2i1Q31c7N5hqWp2NNaMLKnjY1gFSKHP5neSpXiqzb8FwzNokdGSUtiGGhdb",
  "key36": "3aEt5vBwRpk2hQvsqtEHNL2GntdDweaCqfLrDdhqTLiFoLGH3RQofHC8sGhPiw9PAu5YG3nkn4tgZ9cBorUWVJXX",
  "key37": "26UKofqFJ1hjnfre1YopFqvSA9pxDXFg3xeHYrym14qyAY6TdJ746ipf8CR6xfAiZVgx29RoqZ4qAb4fcwsmGDKs",
  "key38": "GkPM5BSwocHAkRCbqRv5FbijorRHhjcbdzUkM4kxw1DaULh7TXz8XAiWx9qHTaasGMKKrPQvMXDtFPpdWg36xsW",
  "key39": "25Cd5n4wU191LzewwMMKjydWS8BmhWVWx81dRJEMSNK9a2UpJ2iPDaQxfPqh3B2Zmee5ffK2QEiZr1eiKJkCR73N",
  "key40": "5QLuNhQkz55pCZJyPi5CYWF5Qr6iJCGmbof6JZPdTEMbSuRpAcy1tHf3YRZUAr4KxNwUxWQB6DQt83YXs1ViCtzY",
  "key41": "3meqnuAz8oj61U6jLMT9PK9VybcV3MxA3KPBkodvBHioPEycZgyKH13BNv5S2cQ5kRLuXT5YvDMSPghJf2ZVUkdM"
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
