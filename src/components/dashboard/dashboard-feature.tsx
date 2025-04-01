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
    "2tjhDackaxArs2gaTTPu6bjtb4H9TJ8UFhjAUKV6NRQ1RBFZfZTmCJmFArF7oK1ZkE1Lw9WrfH88WDHGA1TUCHFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64H8noc9KhSYK4ABZaiDwUL9NrjwjnDfehnGdz6CYvUGEzVjoyoMa2v9VsJUsPpn1hcwpzqdDCJMvuGFBWAnZrWK",
  "key1": "3rxW9JLJZprgDsdACuM3hZVBXiUy87TKx9jxG6xFxBSopMLdetxnHJ9TA4DaCjMd6G97PnPoJa6XCCa8EgZfdoFv",
  "key2": "tkPRXxa9CUUEuYyyvTHxzRsMqEyb5JAJiMvmzZ8ZZLBSEMmAziA9Q2sukfTd6B1zh9Dqi14AK5EWfoDzZ2touJx",
  "key3": "Y6bpU7pKEwBsm5RXW6Qnqu3mmFBvWyyyStqESLSeBBK3qosx6c7HQHnFuL2dRu2X9t7iDMh8vaSRt7Ss3dvpXp4",
  "key4": "669D3rnSpNBUE3MYKv3VQpLMBF7o9FrMW1wX2HxSMtBnVwUJcKWtM8yHcZskkEhzcJ3CJZcXc8MjeAHx4fvGwDmk",
  "key5": "2weY1u474SGyasveMPqHVDiVsXeQ2Hdd4Ntd2zTXpf2xCGN7LG3x8JrrkZvoVkioQ9eLbsTfBAKTebaCugRgYXEx",
  "key6": "3FNLu12d8P5c5dq72o2RNrMNxYng9LRJMnucMC7pUqYqWoUyyQyAfH5dZVseNLtHj8PmsZt59V4vXK6FSV91UXHC",
  "key7": "5DDUGi4vZieUh82m9P9L7XiwYgp9NyK8nWpyubDNc1FJQoDjhzPkEGHgvJ26G1NTr4Ec1NzhKxwsc1ugxJ6rgm8H",
  "key8": "5xiSJqCSsRZseeAQjPTsYPPknbDYYT67GzvUZH996B4WRpRHtLCLWyPTj1qaQXcUigzRD37P6m9DtEUzC3ffbZvG",
  "key9": "5RhnXKZa9MhD1QvZVcos6xRd4wEYwy9YpSKQu73f2ApvHmK5irTHnLs8gvGwPrDufpT4fJBbCWPnUedesQBaTZ1R",
  "key10": "23YbjVT13iGVDW9sGbkkGuvyXyS7wcHHG3c1EyBM4haKct1Et1AywLdKcMXSX4AEX4tivRK7huSwMxuBHeXWH4MA",
  "key11": "5sLen5Xct3KHXeHZ3NzjdQgppccdamrquE96NLYNaWTv5jDp5RMALo6qWvD26yL3Czbu2cgtsEA4SPkaspNyZSf",
  "key12": "mi6u3oyzgdHPg2hsRuqX7EsvskHHKBKx7GLqXjMV7YjbGZFRYj38xBt5mWwSDXB7KUGtxjHiYVyNeTPyiJHxh9K",
  "key13": "5z9jr9dPZmQutFvCd4W9wp3RzmKjtfCToFmtBeH7MSLrbnAkEcJw2hfFNKnYgt2R2ejVGxRzL3r4vq6KaF7BHLWF",
  "key14": "65RbGB2tRrtoik6vMWhMu4VDQX7udeTdRoSHBpKcH61JbxyKaedWoJJZZxfaLpDysdaZnny1WJSAymEbb6FmCoaT",
  "key15": "E3wNf6Zts1DpqkLRokEHnEgaVc4RBqy5qSJ3kxeQCNQH1pqWopfagybkXLNDdpxcVvWQ74BK3Q9RqpMkX1j4Bfk",
  "key16": "4zFCpJYaRVvrVqDVq8tofJk6WLLmTu9ZxQ8AqZQLkNwXcRUeb19xNZb1wYsKr6qBFbJ2FkU42LygsHR6HJZcgMVh",
  "key17": "375fqDvhE954LtEKH8N8RxkA4vkBw11h636zQHvB6jzJ94LCnu7fZJygme761n5ReiAWUxiy5YpZhJKVCANpxBmH",
  "key18": "4hasNxtJHf5yyt23JqTj1QY96YmBEFPig1sebRnZiUnts45KtSjDN6o4GSXZcLbyNXnLnU2U81JurJzks1nm5Gtp",
  "key19": "4s5ki2GxMLnUSVhDbbzTWUYRrw3J1DhyhYajNhL6KRR6S9YMjf8hMxpJmQmwZojHQKAJvUX7qz5WREuSgo64Svsn",
  "key20": "UsbZZQuJHUNwhpQqaqFH5d9wSn3nuYBCRRsJZ41qNKNbkFwQrMrQ7HTFAPhtHTjDLBsd3uk7iaSBa6KG51kPmtR",
  "key21": "4M3PFfMhFR5Z9ZrYvyUMeyLBdLyuQit1RukMamu77v2Widz62WcU9xZtu866x6QhcL1WHYTDi1vBW6S1ZgGzDz9f",
  "key22": "9gM6sn6qk5CP1iHFkUVo6wEv3r194pZUeJPXSYTVuk7CPfvgqK1a6tyauAJHb8SBPNDxquQccTbAcXuRZeCwLjr",
  "key23": "UoKudHFqhqQooxhsbZEtC2EXB7TWwUaJUN3M8tkU8sWynabzg4iuQc64DwvuDDQMdoNQKMnsynDAXykScTWVESi",
  "key24": "2gMDzmUnaxhcuzqPcip6B5ztQXVfVnayDvkRiuXS54avdCLpangtAV7B2qsmZKwW1aoMCr5EaFi3tDDiKY3JUtVm",
  "key25": "3u2S8rCoNoX469amzKtb2kZiBA5q51YiTZaagJNqAmWFuEiFJWid7Vth3PhNttrxjo44xG8vsDJ1iTUbJZG3Rnrj",
  "key26": "4nQJkvzrWCryMYxfNzrLrAVoZMa7m4VfnAPG851SbjtAHxhtFXcpjiyNqLD7QeCKjpAkqaNfSs74winqXBVZ62ht",
  "key27": "41MsH91U2bQNFAnBB3HaG5RrSesNtFB5esoSH4VczZZam6ZRqSaox17rtxJnDKoLyJpnpT59f8sHiUS2tAQAQTvX",
  "key28": "3WJ52ZQr23suTZhfrj2nec9a9EUMupN3j5CZHrUs6f6W4Zuq7JibaYqzTe8LGY5qcHWXNWGCWFLebtkoRSZzdeMq",
  "key29": "3bbbEdHDuXKAjvzEfc8VB2yWo232qnMmZbFQHjiBT6cgUFmNNkyDMw4qbf4SwFH1xqzpb5k85eQDu1uCQSx9tJ5k",
  "key30": "2JC6fCuG25hfyjDgcLpE6UKXKqi1S9RqkbrBEJJsxpjqHJMKamRcj5t6tJBiUWLrLR8tvEzp5yZSXQGpNvBUaG65",
  "key31": "5ibd461HgmCYibduKbhbNXifWbR2rVwsC2Zom382XU9BRK2AxxVVbaThdKak9hTGJg9nZzjeSgJXqhqk5qSoJ7pS",
  "key32": "CPNdKGAtQW6e3qwBjijqmzYmc3NUYKyNnjzCTbtwbjxcjRBX1Cx4PHZd8uUajagG7FX8H78nar5xXbkT7aL8fuc",
  "key33": "5PtNVXHyP1pKTTpRjpv5HS1tZTEXeRFumN7hWfY5FTUVKQNaP84vPDC5JMusCm19ZysReoLY2v7Qh1MAMvJivF8",
  "key34": "4dfxviRvebJz9pvUucAjsJEFJ4L6fmo9TH4YcwpYH4j96tDJskGMyav5S7bMhLrfwMtNGjUYfMJBVjd6ygqVxJdX",
  "key35": "kt6kVcci9nZyiQjgnea8WqoipVAhDM2HFDbsTB3w7E826XVnkDJELju632b2zrp4JM7PDkFGNSuvVKdPSvPeTXc",
  "key36": "5jYMYm9d1zDNDbWczQcsMWmUTzd5eR5fbCohnDEofEHzNfSyWvM2fHH6Z179z6k4dsp7qjzvyed6My8rsmwVXarm",
  "key37": "2aBmVHxRTGodinQLgDYkZJFdi8LhxSWxvE2gbpfy3PfUfg2X9VGeon9crxEPZoHwQ3BxTqoGoGDCpmp59LnBWFFH",
  "key38": "5myNSps5n7anjEb8nN6EX6vXMG3hb2yEwwN9nfRohrwtVdoPm7dbVi3fyqPzNeuZc4hHBc7j3hb9V48D7Ksrjd3c",
  "key39": "388uUH4c8LB3pSWUwQu6w8RzKut7N1AT3Mv1YiLTp6KjcbBzkWP9dLSbb47wmqeD2B8WArQcyMMj7sf4Tz8JFPRE",
  "key40": "3PqAq4XNYvaABv524Uct1kymCVYJhYhqw9rtfPiyyC6dqX7Dvcg19Nw8Rth6rr8jFkDY6ZXs6M45rVUp5a1DVpFZ",
  "key41": "2jaVPdND868mzSRf5Qp8QgvAa5jkxKV1NDWYq4bAKa8SsQ3FdRapzgdYRDPHfRvMbUkPAMvtLnH9GDxzsXv7Qzwo",
  "key42": "2NH4iRqZ9UUuRpWWoVz2KMqF6SRNXqPQvQuMVffgu8Hh3YiNdw5JNs9D39e7sToFMC2gkZRZZ4382ruY3EjQLiTr",
  "key43": "4RrSi3jgLXHLgPSdVk74rfSntuVBnzF5nDJyFJYyzndebnn2uGurQnQQf4wNVGHaidk8obQzdEGJybugMCFQ1Awm",
  "key44": "4EHHWeQ7EFWUjv6AmS1hSn2knbciqrtsUukpFwM3u3GUvG5LFAQsFrTCqJp1hbvKQEKC7JJHeZvrEwbbARBUq2ry",
  "key45": "54kjeexMsp4ajSwAm9XhSxXzDM6pvLzuvr2DSMFoEv8R4GGFcy8QGBVZn83sER1UefKbUBEVYe9jT5EdwF7AvsFh",
  "key46": "2xC4YHTntQkGxiZJT35g2mD3yyaLW7bEXd52Bwch82dSXNCAisDRdowVnMt8pmy3s53RYjX6dtKqan6tx5dPMPNo",
  "key47": "2KV9uESaSvTdPXX7m9Wz1Z2qdcPhhvFTJ4sz96TMtMfmj7MrDWaFZHVHPZKNVfGMneHEcF8bJ4oVQnM1gs4e7JYA"
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
