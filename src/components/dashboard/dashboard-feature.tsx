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
    "4VK5pMZBMPraxgyPSBqLVtwtNypjdPhaSzSr1Mz5LXwfdskpwaZtPk3c6gDv8FVWM6iDzfRjGmDwUnedsNwQz5NG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HXnMyZt5kDLu1LrcLWxj91G63N5AvbSodByY3JsAi7N4Ywj6dGxjCUkaHhXTJ8F9vNEM8YSzbmw7AkLqbgy2ymD",
  "key1": "3HcgotM4YAP7XQgGWXqqB4GRdPE1wCcPTgaXaL2zxh6BreoMkSVHuv4Pwaje2YbFyNmxGekwDEKw1DerqsN1GFqn",
  "key2": "capdnRuJVZWRQKscuJafyU3rhaBY7Aqf8Wgwyzd5JM85s3KdiHEh4NutpKmRcPo81yd5hraQi7MeiEfgvkXSmb7",
  "key3": "5MRU1Q3nubSSqe3KPNrPxH79ZFBDZwWNFysWF4vpxnfo2GyqSgkXk15yndTF8dBDZrVz2SAHvQFpd5JPFKxNS4wY",
  "key4": "4qqavXhx5eN6Mr7GqsRXNGfx5qNLFDhecdWwQThL5cFc7YwLhTDbVbCP2arUA9UgoUqk13FZhFSfGqogvKyhePGN",
  "key5": "5Y8VjepvE1RwdtzNXvNEBuTiqioHBameua1b8KbdL8CBvV8mnQaCRfTp8HeWGQPKBcy4TWde2z8VHKUZ9fsVCWYK",
  "key6": "3zHbrUD6H6TyptFj3Sn3uupfUxTSwnykGfQapidctfQbT8sZtzUrZRz3YK2oy47zKXSpFMJ5RAjKcn1mjC1GCEqV",
  "key7": "4S19z34CSM2gPdDsPY4iDRAmT6tpgE8Ds6QnqxHQ2MVWQQNCFa91XahTNVVuHDW22eaoJgtAP8N7MkJ1bYWUYYsf",
  "key8": "2ZzVT4ntGsCmEBgSQwS337S8581RhaFmhc16BFPU2ooBe1WSpRX7jUDWceS7C9DT1bVchqsMH6dYTyTcymh7aDw6",
  "key9": "5msyc78nvSrM2jCWJmuqsSSEHdHkNu6jzoWfKwUyyCegMCZzVgRDMgj4UNGcyMrbH4CBksiFFmq7Lfw4WA26dnT3",
  "key10": "3cixw39LihGyRxFFQpXbCvUqWZcALDUYuJ4w5M8eocuqeEnYUjxNGnimKVxbCvx6vANTGEhmk3bdBF3X7JuhjH12",
  "key11": "4Yo3p3SqPft4T78APs4w2psexgb534NzGCy9WsjuHhfE1f4s2UQt9URFNq8B73geY16ZfzUSMxieMzM4YoKcLKm",
  "key12": "4WwL4Y5KEAJkTevZpe2NBA6haFgyeaxzucaMvP1YFRrRyKBQhWgCiepc9pqzxcCNz7RrCm6ciFUGCvbZkfiLLcCn",
  "key13": "5xpdAHB9cQuDFoN3N5ms9QydFomSqhjMBx2CKthyxxbc5fJQc7dHum9ASpGJZWSiR2YkcgFiW4Mv8PmpC2mHCwdH",
  "key14": "zbnRreN4ik8cmwYeWDg9m7uNcSX1N8yU4sB1q8WLPUj9LdBfrfdDKaH5LKwnahffDBqjJ91VUq25tEhEx9PHR3H",
  "key15": "4ctL5VnANVFD5VJRAdd6RhKD63AGS6A4P4k6Zpyd2JYEv9DQ19h9GjuShXKpYaynTp4bV2dVjqguLwPtBZpkAwoB",
  "key16": "433q8Ab1NpB6k53nwGk4VJ1bUYS39qmEtoQUfkanq5fmRNBorz1pPCyyZpVaMXuMLYBou79D9d9MtaawBxS9Wdj3",
  "key17": "n9PG8QFW2s8DtChSy1ru9bhJAy5i1p9PUMU8CAop4KsB2mDchnRg3Ws4xjGKa7GRAN9btQuVKLJngHUpEJC3ML8",
  "key18": "3WxLarpZ4ysPbydjqSEREzyhffHaREXBdoKkdnTsYKCrnkJH4gGEUW58puCaTbwkquhYKRtrsU2afVo6AgTrUt2B",
  "key19": "2NhHwE9DvUkD75LAaqQKZKZN5Mnsp25E8jZ4YSNhkyJMaMRFeDz6A3ceqw1paWKSBtUNwSQ8rU1J2gN4R7goPCgH",
  "key20": "5NJNmHKifnTiRKVHaRyfPPsrCXmjd46bVUKHibDjt8nAqtbvN7gN5VbXqrWJoJ48tALK1nhhSi1vhfqMVqSQBpSn",
  "key21": "4uU14XJuqEWYSGq6mZCENqmttdWaE5YJ3quCbraPG8TGskXsDhPZrD8K1SQjkdEYRLP6JCDCqgEfuL6JBXXp2x5w",
  "key22": "5rr11UUxGrcoWYQQyJTU5GcsycrWBd2ai6q2MV6QkSYD7p4S9Rqric7g5T692PjHnTWPBQr7dqeFmwgYPuMLBuLj",
  "key23": "63rEbNriJq7gq389wfft6gsPyvSs5zdn1m3Zqec7mkP4MuFfcqFH9dcDwkuA3iJtXbGXTrXH7BELpEoc8jRNtSnv",
  "key24": "2LujTwoCkNQy63CFpH7Tcm86CjVKz91SPvAsE8HXVxeH2AnumbrT6ynqE52gUSwCF1bVWsA4NwMGUFagrAFWKRsb",
  "key25": "5shrrhptR4G3DNWybb9WmtDCn7ReaNEZgZHR21vMCthbMJLM3USsvEhywkzEJpfJUtr2uEgFSTcoBSgFzWFjCvCg",
  "key26": "5w96EJYkF9wZk4wmErAixvTZfxmprqG7SYie7nspYNBJjfgbLXxpbxq8GSd2uHvbgTfQqwVQYxDvBozDutF68Mfu",
  "key27": "3P7SzUyhsbDhjSG7HyhYnJT1THVdanDm8Z5U82tu7V4i3ntm87VpN4KphY39s6qrk5x9EqKMG5XySCSgkKQT1eL1",
  "key28": "3BsYrgsgY2RatQSxMYE3wKKZr15GXApyeoc47hgetgS2rRmzduX8G3yGUBRrjCDa8doRmrf3S2bo384bJewo5MF4",
  "key29": "WC96Kauk9wSG5ygBmoUAgDSYpvixj7sYdQ1caEMPXmf2xVTPoRdC5Jo2rVWXKAFGXVosQdhCwzUDrmNnvn1hapy",
  "key30": "63ik3p84FgPh5v5EWJwp1a2udeBjAFbB1MXqbLcS4smbxEjUKvhymusuALV55mj2txAVh2BLtJ2tQxYyiMhP9N6A",
  "key31": "3v2tgtENyDtqkCgTMmg1nMTR48Ja7E1zoPjuUkftmJmHXRFTwT5vJqgu2jxCpC2bWak4XvjjWHNQD23uNdAswP7w",
  "key32": "5V5j6HnZ34NKH8LGequVhWdPo3J7CxBgEa5X3UnLCD4G6US3jEvaUrgQD9ox6xDNBYZwUv3ZS9bdV4iq3xtJ7Usg",
  "key33": "5HBBcmAMrfs1oCjPNsHTsmvE9fCPUapidaxXZeZpMtGguDAXjYH5ZUbnjYk8fj1LfMfg4rxRGTjxBcZ25pdLGuu8",
  "key34": "4Epp7JXRfp5hfvNya1h3jf7WngjvPjpjgkjdpkzYtL5Axui32naH3zF8quV5UhzcfALtBx2LHxjoiq5JJZDYNucv",
  "key35": "bxtzJefY4wYQ9MWLAWkBuHyv6aiSyffcz6qrTLr4s6oPzUrVRESQB8yYRhMPjyTx4dcW8224BUVzuZ6RornBaqB",
  "key36": "4PSeKn8L8x3x2nqKsGKdpuTZYq13GqwFBgymvHNtNdbKLvrt3KMGv2xJqUmZRfF2mi857eGpMZnUZPhtP8Yc1eDF",
  "key37": "3oKonZWpwPFJcGYWPazjmXxEjdjcr5cWBCnnsrdXfue68PSZ7s6gE3XZ9iwxGcY9kanCy2VXgpckbQR4t1zHxDRW",
  "key38": "43XuXUQmoegou2CB49feYbgJnTgFvdTQygb6bzNe99RYmSoLT3V5CNAzvYmEQDcz1LY8kt5PuTvZkjJ1VX9EKwtA",
  "key39": "4UehLMJSAUUWSNQiTALrG9c4uBVKXuJphM1hGQdwAehCWwo9zQtJt7bxNAdStyRj9UUX7mtzSGv1d1HonALTVNM5",
  "key40": "5ECFTT2j94hkdWrUbMirg75wyP9FGHQHoSmPMGGuGaprKGH2kJ2KvHHxmet8x2aTxbsfHaCBcdTCw7H42eG5q43Q",
  "key41": "WGJVjFMTGu3n8fZUytPNwB337tSNo5dH9GimCFU8UCEgPr8FgeYveCTajz3mCcBHbQCbdG5LYp1hDjFjgrCj3bY",
  "key42": "4Kkc8x26mLnBjFYJeCNiiBa5cJW6cGwLDZdA2pTDngJzRi49oeVr5N1QrnFSXH5wgbpEqCnn7o6s7yBLb2zCNUj6",
  "key43": "8KB4m3bZUUzZrMscx2pcqAjgRxQnY1zxKBcnDN4oUtDkEUA2oSPg9EjRkMi2MBSmCz9ZDNgSSjtb2xXU1sXDJZJ",
  "key44": "9Pk62Jf6W9A7DMyLZaEnzyeQUceLf56sdMnjdBnsQ3Z2oJCrRGL3myEqYQGsKiQiXqnVfsuNm9pyd3KAaTbrTv9",
  "key45": "37Yb4iEPc9WToFUmRKAg7hy8yyhNvnAWWfUSNUQpqFPdPrE7Wm1b2vGnYnneUeSYBKSN91fHmTAiVjzBSrSmDbjs",
  "key46": "3o83ZxqCLySettNoyByFn7f6U5tbJzfQZ328WHrpKkR2q89VoeMDe2eLrrkrTzQmN1dSMV4NmFVAdaEDxmDyWSKJ",
  "key47": "BkKYVLvvUhJDMkQTpi4pW6j3VsY7irzCbMSZhbw6AyEjPJDhbNhRJxoH4KYeRvLHpZ3rDWZrbkKzmLEDfiTvdu7"
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
