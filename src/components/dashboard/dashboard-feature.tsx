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
    "3CUje6vXn8rJ6sSVHCS7z3MCYuZXF9WNQvc2cAUGZuxR2V34zsA2ySfLCnEWJUAPNQAaUMzwXrQuLwN4N8gfMx8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wwfGUFc6AQXdMQDZDZVtNBtRHxwwAAmQ56XgABgA3iCRGTPSsD12bwiN2L1HYdaha7j2onPhzryEzgfZ8LuwTVE",
  "key1": "3wryXLRfv428ZW5hWvvykD4XT1ui4h63a4HEiV3ShcHrxfTMavL9zFLVphuqarcrRA2DdiDTWQe9ATcLjdyn7uGr",
  "key2": "4WYi7Why327yj8x43Vq2YEzpL6jXVecET8RXWkZ8HqyFfWxpfEG7cL8kDytZjFwosLoCe1iVKgxtWEmTc7DqoyGu",
  "key3": "4xC2m4CnKZxhU551hfhpyrTqsQb6VxEotcSef8qDNje2JuAUTZVvmEymGfFw5NT4yNKxAzRo2L7wBdguytUybs9i",
  "key4": "2qE8izrt3kkezuVKGyVQgoWL2USapS2wx5P7NWTLkZH4yqUWwiiziYnGEALmou1DxM4it536Li2BS49RGRPXrfxL",
  "key5": "3dKxPpZKTYDcNkixRfmrrgWY6mSkb9TQixcf2W231hpF7fVCsryTQ6bzDWSq64YJCNq7sRBJGFXZyXKau3ytHp5d",
  "key6": "2YCrsJvffYEG8EbgAd1BU3BbqKvWLTUQWj1Sz7wsAjGAUuWEmvcpESvczqcwxZsYCVgb57JkCZZQpfVYEdoXYuXH",
  "key7": "4BkBq6qvLxTMvWspLQiHKzspKgCAvHs5ACsHfktZHgzK8XXhV2oLFJmsf1dFWX7BQ7cZobFe9rE3vkYASoF24ydk",
  "key8": "3uffSoiUmd7roTNp4SDn4A7TMrt6RaLug9gJ5etZHJNmdNjdu6rL5po5ZnwyR561DAQMQSHyp8cYxg93cFgB1umU",
  "key9": "2xbubTX1e6NFuAP9dswm9UErsojP6SwFeZNXVUDFBPJqQeiEfECcAk4ySUbk8eBDwRC5CNq4HuVMBTUFJdHFKqbL",
  "key10": "3PFcet5DNmBRqapndQGLTR2XpzaknctzK4GB6VS4PE6UdHjeSLmDJsn5tVhXZiTpUnNV8hwkJnhDZBDhWVvnmyS",
  "key11": "22HT7gvjzpXmSH9tp8fNbhMzVbsF9AhfH3TCqsV8cL7oPvSztgG5NmRugnyMkLjGyiRToPKpgLru38MSperce79n",
  "key12": "urUePNYKfyK754VdJ6qytG7ATUMqhsHHKgcRo54p1vYG8rXrcMopLTNhKu3MXf8r1NQRhW717QCHeS9S1FhKX4E",
  "key13": "5JsXZRx5VBtPgJdrFZtzyHVB5XRxVwHdHxHrwvZ3sb7MKW2BcoWJLeJMXQANBiJYzQixeaJZVZxvxx2DnQYJ7JSN",
  "key14": "4nJJN8Nn5oG1jbpNWKuWaSMGXg2UqtQcycyfJVcfYj3AbtUxqXoCBfNEZjt1cDRb1optYvWZup7mEHWr3u3kha1A",
  "key15": "6APJSDzCrX8uDkL7DJcVJwkxZDb4C5XEGNhKohjydneN2ACqgYSVTAQwSYyeQuwboshBKecdpPHKQ3VaGwzgRqF",
  "key16": "4Rq61RZMSQEMqnkxeLdaXzunaCA22V1nnyTar8RyD69VY1MUF3EJEHoQduH2hNKS8MMtEztBjwUHbpe3W9tu2UvY",
  "key17": "4WQnnQS5qfw5V7hQtJwwhgKR73pjCwEdcDgFcfhZ3kipMb8ym5y2xy7UqQvCWyfeqh5Luro7ckWN78KDeyViA2mT",
  "key18": "52sA5QvTk3nJ41AuwhLrcKk27BdV8xue8LuixaWWBZchGuuYsNwPfahzka5FSLpsKdGCiHtoNJg1jrPySnu2JmKn",
  "key19": "5AZVnbpwWkMqa3m9hwSNkvTGNPNUaRfwbikTu5Z1obZMye2XA2VJ65RE3wUWTRYT79NPeDonWzP9neQrDwY21ij6",
  "key20": "2a4Zot8gkz6JZ9Uo5pr7bjQUQ8bgbvcEZ6TEWw98qbAmXxq92bksUQDnsA6SqDuNjBXJsyujNoGjXyimiXYUKqcK",
  "key21": "5WYrpHK7XYTYRJY9ecy7n73f3Vy99Gz8i35Wzkhg2pQqvu948e4d5MzUtkubZLDRBqRBGciFW8cDAg1CU2ohNZdc",
  "key22": "3NmPqXue2QRvNmbJWd8NWdxoLoMuGHyhhQhtjTvssEWHT4gzu6c7MQsyiqLnqT68cTXGQodKWbSogMizcUBKEFVv",
  "key23": "5TjABPXCZxwdkHZzSvHgKXXKwWCdiMGsokjffhkxcTgBuf2zjCZpKxcRGZ57H3gzbzTyKMcZgJA5zuYXrJjKc12g",
  "key24": "3YGLZdKcgBX361pkXkPqU1CRi5ZbJhq7UokxmZu89wBDTuhL17Ce3jxyhFL6jULsL5vuXBUpV4pLph7rukHH4GtE",
  "key25": "2BNfXQ8b5abrGAUStLUXm11HCEqsSbU3hUqor5Hky1Nim3wVkLJqW6wisTxhhuAAwKovwRYzQypBSmUuW6DeqDDJ",
  "key26": "47D5TKAeopVkRLi9rNdkAv1X5EVznJVmtfSdd3JmHynx4TSRT6F59EiJcqbYDYzVGenk6Sev1NS8EHL6E4Y32bLD",
  "key27": "4wXX6H21GmyhZ1j5373tgm3osiN2mAULXTXK1wmVyqpuGPskRiuGikWrgE1GVW6u3S6HdKFsDW1zkSnAjtcm2S8W",
  "key28": "qHPGogBbhQt2fiWVqPiuhEh4krZvV6CdwDN6swz4oqVMXPF2FCH6JHpBYRyQEiiYV2TRtgLBB7kxCiaLDeDBE3E",
  "key29": "5N5dF4UmTmZHZykhde3pEus9xRTiVBZSMM9y2rCKQ4Br1vtd7uxu3dQCSvyUBzdYbFPZgMuxiN2w24YhSEQurQfT",
  "key30": "56ZapVbv1yzZwsuhKYDifsLSrS4Swb9wk75zaTpMzBkeRxZQkboDYoZmbFEdRooLPx5sYZpTv4a2shEdyseEbcoD",
  "key31": "269bqHnsS68pSKucmRdUGnqthMYsGvFenPsjB8VNjMAFrNFAo5yRNYsmVejDp2x9e87i2eW9PZbPsensuKCUixMk",
  "key32": "9UyXa65eoqoAUCKpjZMWNQc7YzUvgWSkn3YLmb2Sp3A3mH9EqvRWxmQnVaE1CJrfiwo4HpdcTjkfKVeDK9yojoj",
  "key33": "SjVR2GDQjjvUDkBrsubFup669x9UkwoLDsFiCcBrFck2YxnmY1mnMoM3WhFqk8pG9gHtV8nVaVuV1ZgGrvjXyHr",
  "key34": "aUfzhQRbWSANN9yC6DjBgrNvkPezdYRJSDtF9wYfHzuXWkNmeYbsdzzQraqMv3p8Zg4nJtEB2fDceGBtUn9hN2h",
  "key35": "22TX4c2LuT3hVCYeNCYJER4T85MnYYyxmsQzV9orARTyjZvQKUKkJ83pKxpKGBXRrY4QjYVARwmcJremDgM4iZS1",
  "key36": "3uMV3XkQtqnXjhYvzDD7kXkrpQuvVnh75w2sQ1UuXL152Za31CKo2E219FrsVma8iPLW6qg52dYkjviNAc78HViL",
  "key37": "2XXcDmdN77G1h9tQHxVULC99bbrNUsvnhubLQrLYbn4ULDeqSbR35Lez6U8wS2mCxDmK3LuKuWxkRj5Vy1J73FYS",
  "key38": "4oP854qtJRPSpnU2iRn2TrrPMsXJTcCHhx9ZLZ8V6GrrCrin8QHfZUHXoxStUdLLNfAeW6YC9zMgQsUpPg9oedxs",
  "key39": "bT1Bxq1dqs9DZhKXa8KYoD6skkQZGXnqmF3bZ83h8yy9sKrVZ2kB98iXeYt3PiNvMfMXFMdrzrB5inJmJ3v4FHh",
  "key40": "Yy5CeczkstxWkT3djouximFanzo52v2jo2Z7q4jPqLGSj2BZrbD2AZGCBCppkS3SAo2PD29vL6MUMYzBUTL4J3P",
  "key41": "5S71jafwE7BVxfh7VFJspmcvecZtFCrBWmySzZbzb933mhWH3Xd47XkMBmURkH11g4vDET6Z3guyRo89F6QXefAu"
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
