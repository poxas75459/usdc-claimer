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
    "4cGSszP6wYm854NbEkZPhzx6Pk2eVNytQ7C13kZM4rc2S7zLXdbQKS9XTbHAuRC2Mo6UQ1A9DgQxejZukcGAaNwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LrfZzXUVivadRvvRKQDakAc2WAdAPGFfqXBFttUZ6EMqDQYGLjyRhEBzB4594a2V5TtrfJk2x4muhZR8wQ3wj1z",
  "key1": "2xDkM1DPDFg1tsDSnhgAaoWCSNJvRuiPBF427ReEZ8Exp9j5ktrnXk7fH83SxsuRkeCMFhmxU9zr4qW7XwEJDR5r",
  "key2": "i6LznqPP1b6D5uCCioVcFFqFq62MwfWryEwrx3R3Zv3e8sM52eBiiDHKLZac8YhyZbCBTDoCUre4v8RDgTXt64A",
  "key3": "64CSmqGjHaC6zX3gfL9z43McQ4CsE2ubk8p88evGkJaUxS5CLkyuYVJ3cNrFXrFFTfnDr7WnaKhBGTG2UxjhtKnU",
  "key4": "2gbZogkUbf9nUQKz9XNE97DRqNRMjorPZb6N41dCnoD31BGCHBoGLgqpbTRvAGhH64Twg44CdnbAHRNePmV8PZ5k",
  "key5": "57Qpyzcfj5gN1JJs5KcWTMMuD4kJKEnyH5F2RqnsBrNu7fwUjASRKTTzYy7yi7UoRLPWzXWbrh3EmkzQ4JEM7UbD",
  "key6": "5xSELaHZqD1dycdJoHsiK3tALtfuMiZ5f4koEJRawFR6EzRsVBsHGoAF2VyEyxgER66aLZMrcopy6AAA7tgvDLoe",
  "key7": "G6arQzZoyNudSaKz17tvH5p2Zafx1YcnKGFuohxWjaexKjX58XARX58ehTDeZ1rP8oH1QY1wN5rsrDmjqFW4Esi",
  "key8": "5JVutojPbmLNxN1VGixHftTSaHXGu1aJhXsou9KtXjvNA15aSioxfnTcomBvhXbCw3fwzS3MNNomL5ZFAs4mCWDa",
  "key9": "26M1KMG1Mfr18SMTQ4ZtDpogC37E4YsfVVedynhsWhAVcBftPmXjxCX9hZpJkPeqY6EDJSX66fiMvd5GvUqqxuui",
  "key10": "4dJUuHKwRsVNh9NySt8EsZ22zNUdrjrrB7SWfUsVBo7oCqCGDk67dijn1UzaHHUy66ae6aS9CDpokzfouLPgxk5M",
  "key11": "46pDjD8iCaHJQkKavtP6UhAZpyk3smkrvkDxdgg4Azsz9SKjPjAXzivX1TSg4EErYiuvy5rMUBfCcvmN3z3zfvif",
  "key12": "tgMJyrZqYd4o6LuZ9eVaUJvHoK6c2VqREmrkc77gsXZRvw7H5JSJqecGEfR9ysDas7bMg6Soyjfjm7gF4JQ56F2",
  "key13": "3Cr7BYTVRYScsqejdKu4Spvkq44APzUKR2vphLQV13xqRS7SUUWaKBrDBjffCirtNuAEBJjx6TWWabCixqomvrsJ",
  "key14": "2E7fggk5Kmk3SDwqhfSzwD72t8DLKuJz2wAAde2gLNcxXFnLALrgXGtN5Kew5H87JotMaBxaiWCwCH97ubTTT2XJ",
  "key15": "ZBaK1i4F8oyegXUe9FcrY5iHMAUGh19Jp4wM3RQbHZzno8uaaTf7v3gL9vMKiXhe71TKw1VeXWZ7ZJFmjn9fdNE",
  "key16": "2WCV1cSB4zgu2ENjq1U68Ta7pLXtMzXsEAoca9ocSiDxYpFgHGqbhbYAHGTTpEoupM6sgLguiTqnHppf1RgrHTzW",
  "key17": "CvZgV1cTB7S52oZSQKRGy8MYxnwDFQuzErLSFY9vdaFNyFLVKS18EAKafETbQmopTJfJdNC1uKHCEUtA2hyrSxb",
  "key18": "2ktcMjKEyz4iyZVWrpZHa5ag9MjZ4FAgD8eW8p9b3MhvS5HU7LkhsnxMJK92aKti2R7DsKz5zwsykbYV6HoAhEgb",
  "key19": "2CK2vWH74dQknF7LWzi4TvmWVs1wD3WbRviBtiGbwWYHLsXFeFf5uCYaiPGdC2zYbqpvZ3F83G9coum6qgt9A369",
  "key20": "zaycS2VS71hBU7UPm9FChMCFAevBRqudnpS2BXTrx7zxgja4WSD6jUcy1zmfwNXwgqcUAr4ks94bpGjibK2ogA7",
  "key21": "yzfG9Q5muxgZGkbSUjRVazqJdg1BFjzxac1aDSgzf2C3P8Vj9Bf8fKxm7vKJnynSMT2JQZip8LveGzyLx2P7Msm",
  "key22": "33Pdfk3nkifmibvqWEqJuJiF2Z2p8diHpM5gb14rkouUJq2bkPaQUjsbvcfAx7ScLBMfrHUq698ssYcphjuKKZzD",
  "key23": "3uPoyqttTYut6cJQUrFPJQcNcuAo1AZrZeQQoZ5G47ihd8yiYnTtHGJRrLozpbq3KtGPJEt2G8dytK699X7Mf5Vk",
  "key24": "4HcKNinLF2dAVzukEPpGxzYrx5oz3s2UV7GFGNoCDukRXchm2Pj93kkrmfkHsiN6VzMXjjL9Zqinw73pXEvdDoc2",
  "key25": "4HAwr22Erne89ERKBgDPAMKpRcYQnqA6jCSSvaG6hkwGGN9aMBD6DZH9Pb1Tbcyd9QJdjpkRyZPM5q8ubXtZXcwm",
  "key26": "ienpWW8kctYDBvWYhSerXkrVoMqXiT4ffMvC4N6Ghgkds2VAJWp2dk4Xm9omYtnocTXedDazNgfyMmssjyazmwu",
  "key27": "5AasUgFmZmCVB98HzrYNNrrjrhZUqs48HbBQuRULxjjfqSD8HG2j8irPhGFdLHrftDD7eRVppDtvHpxWSEGPSHsx",
  "key28": "22oCwbevAU5Kp4ihEVpLAhTdviNitSBWqjHsNh6oYiQmS5iBd2mSPPqNyAtyVtizmCm4woczXdqNNVriRfwj1oLc",
  "key29": "ZWHD2VBZm5D2MHN3inm59jj9DqtWR8Kp8KMJ2QbxYxKJzhEp456cKg3rPaabS5E7Dn9JJyDo2p2PbJ3y7jopeor",
  "key30": "2eidB5Zd7FHTTAqF4NzJ73edvzJ8nX4EVB1gdn3ieBBZ5m97vv54wEPRxTUa8cHDtWQ7uysLLXrmHSjRRCLeGt8F",
  "key31": "3jNFfLGfKGuBh7keCZ59a7GpyJnyh5ipFXGHCzSRzeBzzC8cBtWxFsmN8B8DMm5fGTpnTEEDNGvP8XEu23n5FaP",
  "key32": "3VHTtxLmLnAhtbo8R46KFkmvC7bbNb8aniFHrNWrWAHE9qnwuMBGg8TeURhwQK2sY1ov4xZnQALVBrGQBiqYPg8n",
  "key33": "57hwJRr18ujRuSFBjFWUVfKy4Aa8WGdEaQK9baHQvU7SGMAW8KszvNULbVxtHjuKy2GUhGA6R3u6LgABmoTZtAB1",
  "key34": "3ckGj9e9tCQttV4cK8KqMdy7Y8UWoMT9drygypiJkUcMK1TJy7B3mDchCmM62qxbQYbmcss8cvqLxZ1fB49bixaq",
  "key35": "5fi7uYd8rehaS8FBdDfHdk8tXkFAUxLG9GxmXXhiTBEb4KiuPtsrqYLxCZTEYDcDY187aKRr2enVZS8kpqyHAt6F",
  "key36": "5efeSmnxAjeuGE145TaSqxGSWqZJbZVbNKXPidzY2JFtdmH6UPDhHHVB4eRxp4BtjHMxCGSVjq9CKMQzXyPqiTDN",
  "key37": "zXwrWrp8MR8Xfg9uukHuLhmQNoUfHPh9xJTqfodNpa15DXUm7qq3u9EXEDD57oNXCjy6tjVStDCD8JmtUdDMumR",
  "key38": "gbPxWUeAXP5pYFpWAUyznQhjqs4UHku4ThDiUiqDQmdaQbExFNUW8NPh7d4g6qvdnbDnbx6oKF6u5JJsJStpeQ8",
  "key39": "32u8bP5udFnbHxrCFCTr5vsJu4jdwwFHBqjf48Zf8c9nDbf9xvrapqvLU9p39NFrXGu2NhwqDumZHT8sMKAYdWSw",
  "key40": "4ogaVAa4sgfQzePmNbMCsVobfXkbm6CyQcKEMrpRc4QsEeCPuD9tkhmSbu3oHuWEyc1toE88SWVNAAKEu33Zrq2A",
  "key41": "2BGQbpKfjMcDQHFbRqw1M5R97GXXLyKUu82KrJUNLVoUqeyi2xZwiHusm9pqT9T5R8gAu3BDLtGyxs7dwLxkTvSF",
  "key42": "3drvYveLbd2yVtrg4HmjrxQ1JnUfaBLuQuLWNmR7EjATEWZVK8hhPGBf8BrEJhZR8AuyB6CKDujKmUoSa1yPcx7w",
  "key43": "3vPoBHUveQKZrEJCRhp8Gjk2sT2FdMiXZAY3Avq36MLZnWu7W4EmgaczbpWX7dKbC2b2ymvJcoEJi48q7Y9tQrE8",
  "key44": "4qg5t5nJUvGQGTVWZpU8F8KZzEvXRS6aUkp5QuNGb2ZUvavz5b6jzYav9b7SmovqsyUFUgML3Df7MThYbokNDTfd",
  "key45": "5sCCTmvJUuSt8z7a87c2rJnsZDGqPPFuzZnAzMy2ZNxSoBzcinfqVpnqLhxJqyPUcyNJ22vYUfbosMs37A619iTu",
  "key46": "2Fdc9d1JeD6EcP2G6YHd3ikzog1uHgQGZ9HhaHqD8UhHdYTM4UV4X1yrEcCrkZtgcBiqLwnpfJKPy8t1yppuzVLi",
  "key47": "4tYgj8gLqhGbgLibsWLDu5NYYLwsoHNzCL1FYggTciDEhzQbJdgG9VoXXdK1cAht8eug33w94En5CF3MVs49SnEp",
  "key48": "2HsKnCU7HyPrJUFBhhFkkd1KdoeKAmYLz9RZT4WnJ4vEA71MizLV2UsszqY9E75HnFnYMwWAfEdQAref59977j1R"
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
