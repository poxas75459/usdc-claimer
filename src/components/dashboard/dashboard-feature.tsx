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
    "4sHf4jG8MuEjzX23wez1hU96A5CGWjckKQCAkT8PPG1NViZdDbKAyMRCXPhN8o8MDmmLgcEXr7drsXRoDRTiwurM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cCzUrQWG54SYwJy7VkYDmBa49Evare1EyTvM62dg8c2tNtDfaaqnFk84LqCBgHrGbR3mcmrHhUiZxYkZNfmcEiW",
  "key1": "4zzbMeLGBoxaFkxwPc9gCgH9E3Tpj5fLMr613RYkF1P5QFUBWPA7SPv7mpZJQWtUShJP3dE535Xjsxq3vQTQk3BD",
  "key2": "65mFod3DTcP1F3A13R6ee5Xf5u4JTErHiKkAdPEajpon4bmDBTZtXeaSGw9pfwt3RJ3gADREigoZLePKfeEqJWmF",
  "key3": "SSkDQ419XvwPq682LP1Gtwt5asWVJi1MYHqPjBixWMzcSaNbVJMRVK6CAD1dmAjgjqZ7Abjz8BVqYNgamC3SDRe",
  "key4": "27ubNssFQAWptUdn5ctduSGnMCbKBWw78vbQDzMmG3kTczFodPYzdPrEoC6npBNqFVAQqyAZKxkpa9dAMyx3VxAT",
  "key5": "7haNihfJ8NrnfrRf8pWSwEYEpes74eHhGQtZq1BKLFTdwx21DS6z4uce5hyRZfJZ9eD5kvwNfdTV1ZVcTewVTTV",
  "key6": "KdrwsyrmagAYPh8NasDFSt5fMuPRfUCzm5Y5QF3BEWEziTQE2gTKPtAoTWxsR1ek1gCaybcXxrSEJQv9NZWuNYn",
  "key7": "2hT7PfhFSvooPgxHYqikZzkDMTXed5i5qLbaGvrnYCWzhbBVCD36R494C8vU59XV4Wf4wU1C72oX93YXSX4kCAnn",
  "key8": "47wLBHo44VRGQNZsME7taCUATzgfxvS3Gjf3eY9YFiSqVcYEGLSAUJVMtiJGJcbVMm3PCVH1f5cRucKbbxCmypHu",
  "key9": "3TWdPtyBDtX1BfzvnZ1SKvHLjvkPQWWWCg8bRVr8uL3Uv1QBAJc43JeavtXW2mEW38FNbG21FhXqGEeXP7bkGcBf",
  "key10": "2saR9KM4kXozBu2BaeWje1Hat47gsCM6Ni1uQzyz5RLz5HfBRZcTJnXfTY1Goq6Z1Qje4VMdAtNRhuUmKyLWTwWT",
  "key11": "2KbmvTTFw88XjkALhXBGxi9fFYBXBD5V5FWjQ576JqqKDca5bBBa4hS2YEiP4CUFB5rK6EDSJyr9gb64FfdhtVhR",
  "key12": "4VA39eMGcnurtiqnVKnRKbHXewuMW9dgur3TCVZuDvzUwcznhFCnRagS7pde4Z7H4x19G5n1Xhxw1Dr2NKf6jzbo",
  "key13": "36tJZmWHuZse8jKXVEKYsGL9Ny1ebwmes4z42ThfS5fMmDAseVY5pfbVTUozqHiSZ28DvLLfY9ZERkfCViPsUbFh",
  "key14": "3fyAWJvxAUU1zowoS89DocDLQ25GyvsRaeFVQEXGp6RUbacC29LnXedsdM1k7BYzAAV8bJcnpS3imyxrepvqd2uX",
  "key15": "DhK6yipbNiECHTorZpt39yDyWSmJgCBp2UX4bc4u5fQeASR5tPRmS6cuVP18SFf1saq9s6RP6s6pipUHvfXsPNp",
  "key16": "U4eLSfFeYAoH3er6JF3o55BY7gtNsWUYnh1n2JdDBwyXiqrYPHnhfiCzm2jD7UAU8TagQEEhP6qPGYbzB1unzt8",
  "key17": "4AXMknoYRP7WHU4ZBABYjnuSHLR3myawBz3RPBwaYFN8Mm2hq3JQs1EdSc7rvaJ1agD97ZWCiKe1LrHuh2f3JjaR",
  "key18": "2SGsZj3hPeWqcYUdEbVsgV2VECKkn2cFhPWQspGcC3wCcedxPHCErbNcCZDp1M1zSYxH9mGKYdwNv861ER8WV1R4",
  "key19": "339PVMNcsCMhLKAEuYztfjkZrkAbg1bvy2ADgmbQVCRrNYRoxNX6g1RBCFYiLQTsuowQ3PRCAxB8xV1edmAzhnUg",
  "key20": "35EpLPZY7hiLKcWvZJPLGCGduPmUcwWesjoXdZrveJZ8XKByUjHXcyY2T3hvUgyePW5jJSoiDu2ZoEUWev4abK2e",
  "key21": "bXJa22XfC7MSsNv66yvPY24LmWVDCTfjeJev5yRtpeWfEgrrrSG2VM9Gr9NWqSarrt3zPWgYmfT5xGmnvtjYQ3s",
  "key22": "2oGuGwDiJg37Mo7dXTBfa9Rb3Kjq6ppMXuthpsrToZeNtSZcVd1BFqxtnj8ExyHcDCTDnwdukBm2wJG4hbfP6imt",
  "key23": "smEdaeVXbZEFiyXK1bKh1oTQ1UGHDJ8XarjHmYEKHQw66zEyZpQLXUSFDKhkqD6o1yfvUza13ak7yxXkoWMGYZL",
  "key24": "Dhzi38kDcj3UJDVimSPbcmEtru7Dx6wY8RJfWefvkjmWL8d34Xk47wJhWYGv79NZqEvpkpg7Y2MUjr2zFKMKgGp",
  "key25": "vgKDHEWKDNPqispFKJAxuGVwHUbvWXZ7BG5uJCj72gAxny2GWFV7NKwJmqsgtecX1qG48obW6RewmUURQe4froe",
  "key26": "672fYGsQfhor4R7QcX1qiBTv89YaTNV8WUFKHsXPzT4xxfm22yCsWTtDeQG3ipxUu7o18J9e1DA21t1RgP5tKMxq",
  "key27": "N6jshNKCMTCZPs7ybCFSxPoF1EEmvSrboBqD26cE7LuzSkpvcNpkuyrLo8crC6Cq1YpsJryzLvpxgsgA3vVGh8b",
  "key28": "4ewdJwxRcEmJrvP4nMHfS2cTtMgC36wzUENHPaFsqpCYpbiAMrfRzmWDirKozJT2czfTaPG5d9eZQReNSQAxUwwA",
  "key29": "2fYHb4nPD7XAD5wkWQcfmpvbaU4kqzoghEMuXdkFkYSu4hFpnPzYMMWKvNUDmCbR8gMNgvCYf1hY17pLhgEEDEKS",
  "key30": "5M185vEFxt6H88FGtEfEFgoaRC7Un2ovAaxyziaA4Mac28oyWGwMmKBBnC4z7BaFxpZCfbMopoMF6aJfPagN9zbP",
  "key31": "3idH2j3HGZ97BFDDNySE7b82jfaNheT1L2DqCbsa4UJ4Mggz1mrozPn7HiyeZUKqU6GJirdAvDk3WhWR5fkKCjqJ",
  "key32": "SDm9gZ2s9DSVXLdsP8JvgFmNn7q1o51qDivcXbn3hp7oa4jbCCDegKsWnb26f6g9JGc583pEtmsuKSb7CoSopgk",
  "key33": "5x2yq8XgXmZWrTi6xsKdE8jFL9J6sq2deUebmopZQLWguvVQvNUais6iPF9G9icNR6o59QV8zNEhYnJE6AQwdHkU",
  "key34": "2bW8uF5vGXGSqu75aUeWwL9DNVDYqEerqp7JdByDW7wAVvUbxzZ9hzjbx6gt42XmTstAs3rjnMoyUuyRHjypW3DS",
  "key35": "4AK2CWM4ATB4rRxonFd3qggc269yz5iR1PgQMTuNbEdBNvUnJ2xmcMTVqDE7YfU52f6buAAVJqdWLMY86XfKcYfu",
  "key36": "29xW9r548JRjwsMk5VWbQMQK4idYe2DsCu5Eobdtfx2U9kPqQUbq36LvVyAh41UfJgmp3nbk1jTcYKDSLYDYmvvs",
  "key37": "4uVJ29NshCfxCn7SVPo6545MLkccc61mu75z77FZSpdMfjHj3r2BAnDZVpd5qSP9GUkNCnqgLRqLos9vP4VD1K1n",
  "key38": "2V1aMCgwqDtrMABVJs5NUvqnFQ14vLrYspMB9Qr35PbDDSDGF3yxFTrkcFnouZYWy3EJFKKeebtMfzqe1wib3Jb9"
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
