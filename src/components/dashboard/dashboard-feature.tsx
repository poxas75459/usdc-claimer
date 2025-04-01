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
    "GtPWqborNTxAzWbo2XtTovFH31FmQoMdSkbTkUrnN3cTD3Gv6dkDMr284qMogZaFDovk9BNWdxjJqX91SCFPvca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LW7zAikMbTD1FKiAaCukV2VAcShMrA4sX3Fea4RoRM8zEMGLZduJaF85Ud21X9avViQNh1LdA6n3nsYs2GkuKzz",
  "key1": "oiB6NDz9AB46qUsB68XSmx5wPoNw6Rq3eBm9uRiSCAqWDNTotGLB5Rv8N4sLeewB55HNFAz3bitMMpVxuY2caEU",
  "key2": "2cbFeFoUL651mT9yPd9dNnDbqK6WsJQ8UT2uZRvrVZFUP3k7hRi9JUWyQC6a6Uq3Ln7YkAjWceDBw8G4nkEVZxX9",
  "key3": "QVxQtSJ3aC3y9kYjrCRyTKVwiCD1M3haucshcdLrA422osLPZBpKAwkjXnmdwBxMpaUYnCnjb7qZivEGkc5RKcy",
  "key4": "5qn4yK97ziCqXXenXBwFMH5mF5VZsnf84ssnYzHLHqyFiUtXRoFfyoW22mXhMEBzTGCn5wGNWuhpLqnAgtGLEgbZ",
  "key5": "4pMP8kaLKDyjFKVsg3Z4SpqE6g4mQ89x4MaSBKcS2H9B5wyDHLo6FoexKHPShwcZChxv69ug9HcDEpjWndH5WV6z",
  "key6": "2h3UvbrbGJZJPJrpWqYZ6mFMhhYgEsnjFCqyB4r5mQgGqvSeQDyg8wzTXCVZduWq9sUp2JNSV628YgkpoBvb6ni8",
  "key7": "5sTpVK3g5oXqByBSRaTHuAWLrNHYv7zQenfB1voK972jzuG97XTKPzxKCBJ1rboCSHu29nKcGZ8Z91nLMoXSvvFb",
  "key8": "5GGALHbdfPBmU97pvW1WyvWQLDb8qRn2sxbHUCW9fQVHhgdGSHXjSaK9JnY328oz1h9RmnEQoV2fhUhDnMcL6MHG",
  "key9": "66aaJTUkXcZvS3e2udWkkKRR8LuQRprfUaKpPkk4FBCyEW5CWnHvAVt2xqcW177nXFjPNo8ycrNY9CrtaptRMKb7",
  "key10": "2fana22twkY13pWNKc6Fg9zob1N6B19nuAso2ZG1gzf8y4Q6EMSmfU235oZcqp9oQMLXxLAat8LzppQfrUXuTwE",
  "key11": "54734FhWqCXUor4NrEi2rstyo7TDoGRyXcgTKsShTF7Ckf82QgvF5ACtEb8BHNx6KLHVi1ERbWZVpH1SqsLzh5Ma",
  "key12": "4TVYABBgv5ywgRkxRGAuuyiwCPtfa7gGqiauyB8iLGeUKbtttqVKcJxErZCTC3omDVwDEtwKNbyY3V4qniWuT8bT",
  "key13": "4WYyhMqL67r1sRy7wFVYz4B9K3Uk9qLZftkWy6hcsAGyxCQPEjQrzWpTtopFsPv9St3QpHGSL49rJasYjW2EJoMR",
  "key14": "4mmfRL2f9qCcNgT4GcF3RFTVW4SARoQUkSQxBTzYzfRh8F6yUgQ7V6KN72WaUEtpA8dhmRcJm5dXjE9Kg1qgAQ1G",
  "key15": "SSwXYsG1e8Xa1EfSJvuUXqXFZLwKzgzDqfZpQg4Km48WgwiSdfBfcZb8EeR7z76Xsov7uACbdybmDhY8oMvWoxK",
  "key16": "4AV4y9JuRkXKEhcH4qo5WKRVNj12Hf4BBVoZoFvq4K4i6ZUuF8mfNQf4SnTzeUMQ1QBvWPs2UnTwK7D75P7nLQgz",
  "key17": "4HbYtwsByVziXct1UFcXSHaAKedbjvQUbfW2BuYY73PGbKLg5QkYbUCBP93UH7PjSoZUQQUmgzcQU2uZjGNeGTJU",
  "key18": "3V2SfwRuiVBi36NU5qiGijT5kLDPSuPZP4Bwgo4CamHuXrduLzzXkbMmY4ygCZ6ftfQrCfKvQHsjhf8dizg9eU6U",
  "key19": "3oBADdeAMxGYrnBJ7c4SA3Fw2qBjqttknezWoDqkQahuhoUBgsD2ZbtMpwFdwAVVpYt8vWo7zytDpF6VkxDCRaHN",
  "key20": "37imHSmFuLS7W8XFpFT3CGHcN87JTrGe4XYKKeYx8Uda5TMrosL9Y9tNmaT8TgzaBLyidahciyF9JjVhXyYvTcG",
  "key21": "2xxiC8YhxbZkRJtZa8rZmBGk9zMUh1Mzjvg8Uqr4oWtcinJeEdrH5N5sDj7xK4ueDcoj5NS5LtWE7yx45HKSeEGr",
  "key22": "u2FYvEDMVe4SEftP4eQKmxTVd7XALoUCXiHwg1njCdcEqyYmAaVMqciLBJ2AsBDTQqL6Y7PRiZgEpxhJ4SbcvCf",
  "key23": "fdPCTJy6qefH6jRm2KYK4obpFoynahjTkFtmkiT4TTpHe6fPbaSdr4GbqLpkwta7yX4BubZZbN3zMoCLD8W67te",
  "key24": "3Q85UbD3JCdJUrpeGuYfk337CKs3LepjcPgG5vEL8SuPEZazXW5aHCQPzgYYPFS2jXMvThdLVe9uc1fSqmnNXZDA",
  "key25": "2zifXp4o5TYTg9HSig9jGt3Qbxgvps41jCmVSienkg4wj2ADicLwD3gLgSrPUGTdMGLJjCWdaZJindrfcRraPNeq",
  "key26": "3CRyEpYNDYFVE2t97WaXbt9UE1VfEUk4oeKF753an8vLqGt5pvVMqyigtgkVEn2kGQSLoDEWrQ5rvCfi95xZgesF",
  "key27": "5yo9Rm2yoJLmcUt4PfYrueTdgdV53BjGbBgMoMV9xjWFskuUqLd6A9BGcJnWEXeRsRqqwYj5NdSmCE59bacVavFu",
  "key28": "n2mi82jZHm17edRVvdFTsWKxgBur88P7U7JRH5UbNqptUCrnD96gMxKQGaPf2Q9hyEDx3rQh4P4eNyPM2vo1PDD",
  "key29": "3HtBMxSzdpCVf5AhkvQdtaSpbNavkz6wUWebobYcM53hjdMHrj9LZH7EDjhsGRieJjJyi19DxnUqZAxDPdq3Wwbi",
  "key30": "4yKpFnhuBSG7wkp5dQKtyM7jc6GPuxMhNENgwY3pJKLWgFdbX8WhybLxYpAagedYuCbGpXBtLNr6F6anoKpDmq4M",
  "key31": "5j6yZDAtZfcFyrDbdAKdfemeG7pWG16XXR4c3N5eZ1VoLqG9fYowACi9ZkXJHPfDsjgpryjHCm4kTaHasMy23zjZ",
  "key32": "2KQdrHvhSAKVBKU3zH9wyu16GCnGZwBwMyz2AG9XvSeA2nYwJk8rAu377Y1iCUpCuro2MW1n8Qp43iPKeM475QvL",
  "key33": "5usZS3NC4xW81Jy11PKWy23gAZhyw9eUEodqa1DiCCFLUxcmHs2rixAL7ceHGXpgssJjcjE8qUpkww1uec7dNRSU",
  "key34": "2rNwxaJjvjVryeXNaTJGvfLUDpVfmJLXAuUYycXzr74LtfPFCbrfZ7KsDcrmt57QZtFBq7WSMMgERNfrQXSmn43L",
  "key35": "4CE2ECCciwo6UGAnrrKpBZjsFosVgf5vvHkaKGUTbXHR7qcYZZfVa9fDvGuwPEZfdCSSxAe9gvT64D6fRktLAid5",
  "key36": "2Aa5psMtLa3c4HXBChGMYAdLKrod8YWjn6XdAMKimQJsMWFjUPSc63y6NfizzGvBcLrbo17UjqxaN1vXrHRBnQ3w",
  "key37": "2ndLdrsQcvC1M9QsC83HeroLRKV67dAsZ3WwyrY2eeZ7asaTWLkssGjks98CaYibDB8iBUk8H6gP9UeZ53MHf9Yv",
  "key38": "2uVSawTYRrQ9ux97QCnrqgKdmqD9QMM4c3pbuCzZTBAXaMWATKXaLNq5Cm4paz6EphFYcXtdmB8tCCUvUf6rRdtF",
  "key39": "EhcBA1MY9JeevUEGkQTjrUkiXUVxu64yfxMFAs9eXN6jkPqcq295nsPqjHuoriUPZgECy9P5emrw51UQjcZBKEK",
  "key40": "5bmr8NxqcmSnw1twHHHM7KzZzqkeTVsqzakCtthRkRkRvAwK82B7eGSxnqYBjtshmwFmoHYgQq3bvnjcRvrZnG5U",
  "key41": "PHV8LdWieGVt2qDKEb3zhRRP5fbGWwjLrvkDaccTmTXp9Efm1woza1VhbwynwhYpNk6PTbhyPRezoFe9EmT7GHm",
  "key42": "4TCPsHYH2nRRfaj6fmdmrL3iw1AJgX6wa48GjuKPSZvt9KAJVkQfuXGbnyeFCvZ6GjXt9Tx7tTAH4tiCrS7rG1BJ",
  "key43": "5GX9u1iR23BUuNRbD3k6K4XDXNL3HotvWX5eSrFeGVexaVrw9JP4so8rbC31iiZpfUndrpMk9uRB7qExvK4x6W5K",
  "key44": "2hmjnwTTKfCzJ9S7dAXUeJTHbS7brKD6LkWJcdLUzHrtRDCphsZSmNGmvGR4Uw8SQ3u4idWTAS1hCboVQLxvU3ac",
  "key45": "4a1XJuKdV4hTfcQ8pMCB6Rkgt1rGLGZhkWLGNSapp3UgQPXfbtGKeoK8MMtzLeeyvTR76Qkes8yDyN5Gu2oKP5tL",
  "key46": "539ZrQJJLGSBp973uoccJ8WX6M3NtJ1cm7XfTq5GjsdXNfRHcC9ak2stbbGpcUBH5bKsJVu8gomAGtGx5eVtNW2q",
  "key47": "4vdpG5wVcNX3XLf8CK25xAXvk33Hv9QsxfkHv8T2yPq36be5y6uehgKgcukfJRfdoAp92GUJ5fCrtHQsqeRbqfeB",
  "key48": "5hFwNcdmoGPK2rXf7CjzgEJoFA3TAWXEcEjC7viVmCM53NL3fJnvFCi47kxLTPLhSW7q3fndNmgxCUduHbXHEDFA",
  "key49": "4Eqw9CCo2rQEqi55YpjamFTkjvmpxyWJqeEPPA4ebo9h7J9NvyBz754X7S3xYFss4wLPZXCFeuBWAYjTxsDzgKpH"
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
