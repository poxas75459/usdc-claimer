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
    "4AevYVriF6d4HnLDYh47TsGtr34t5GY7NZrMisGGazVtJktNnP1APY9YV8F2wGFMhL4xsAyHpKg27QLFfhs11X8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rgFkyFF8BQpXvzYHfkVtNkvuN3gg8LSKqqmaUdfgTATxFr6UeGtpU1wpvCvR2co6R6CHQ1WnareUfKi47Q6Vr5T",
  "key1": "3XNQA6bMXpjjW2SNgZaFVYmPkm5ks8cekdkFfjoKCmRu5rpVZgmDbzspAmzGV9N9RFBBLB5fEgM9DYkhRFZPN7Ay",
  "key2": "3MfFbTK6xxxTGgWQTcePGhtrkxbJWMEpQrAhZYX6RsmBSpFf8QzHH82cBeihDPNnSGqAqoNDJFD2b3ZCspKXuA1J",
  "key3": "5KE28FBdQm1q755BKYQ6iofgYgnoxWyDpteaqmjRGbydihRdFUicMp3zBEGePdn9tLokMUXshXqwKAQSyqaWPnhF",
  "key4": "goJpAPKpJokkkPA7AZhotE452dMDXkMzkCThgLSoX4Nn3t8SdwXAcbrnVHcQLWim74yPk8Wffik8fEmG7yWNjWf",
  "key5": "b9umFWGXaVGgYpcTuaLRcJNnZVA5oPhiy7P8uDdWhosJqhSWy4mx4QrCrGCTAzSk6C4dbnnvE9JM3k1LgSmEgjL",
  "key6": "VSUWjMMyruG1UEadyVNeJE9PpM4ca3hfFerF4rBhT31CrrcbAvb95yYwKE79kYYY371x11dH8bJuwNXbiZ9sWWx",
  "key7": "ovMKHYno235sxboccHHsYcMn2Y2dwWjf3uJGbiNu2U5JaZYUpjJZup2zRSobq8HjLhDwddGoVnN1QA5zadLN1dk",
  "key8": "5o1JtLuVGiVN3iCsRfce7f5w6zpbCYm3oBGFsapVr8v1wsPMEQTd8doW6UtNh188CvQccLWyF8Jj3VvGeCtGbuwQ",
  "key9": "yydWihWK7GVEvJAMXSec3W6xaNcspcv3RRi93gxdm91pTjhaS1txbUPS6MUYtLYoPxvr5tMcHnKYPQiNkUVgfc8",
  "key10": "29juQYEpZXunNP9Anxpcyab4Rs7tVYUS6hRfNMwdeJ3ootWZPMm6QLS2YFgwScQCbZLNFHN3aaF6qzNa5QJ5hDj1",
  "key11": "2NmWXfKjq3KDer1xoMMnpU3tjDxpUvzM2mmNSTWx74XgVQ7DXVDJ1LFNZQCJjAWXJhLxyEV2aB9dGyotKD2v5uPY",
  "key12": "61vtbjnNr6xZs3Eprn2WqkEYTbYtGp4qnvjGkPQ8FJXt5KhUwSNLRrenNGV8GzLrURgaCbiu386CyVRDNyCR2D9w",
  "key13": "2FRr4s86LhU1nKJmnypdoUF1nFXzof32rB2F3eiCDunEJJjei92u6pzHPnyow57JUNy9c61c16yGvR79Dgjc1oS",
  "key14": "5qMYbnAYYE7UjJRtNcVhCVTj3b8KAAaB9PfvTdbCPP9ec6Sne4ibUjk6Dr4DpZ5WHKux4Hdc7rJG3vpxV8DVMKH3",
  "key15": "3CSHnJYjs8m1D4VEHek6JetkzNFB6aJjAmGVfZQ5jQQ2e2sDXVj5TRM8RdyvP2XnyFDzexRdzBrBVTGvyy18XqYP",
  "key16": "5TThrJD6ZNu7mQvzrV6frA4MtroHKWeNv1R5SYr2XYYAqh4BfWZ1hrchL1r9pCdLvrMmvPckYEx57BBTDZ7ygvD2",
  "key17": "4V4rokdcdVjVPCSC1ghVrZauYjQo2wsyQnsaJXRCDm1Eb1ufN5UYC7jP75iMVEbryk2ehMPVHcftFq1N8rvebMtm",
  "key18": "2hnV5gyW6VfykjidPZ3tqXyUY19SJepAfKhyDG1cWy5E325JXGH6nZYL4baaktZCA54A5bYDo8mS1M1jaweYzRw3",
  "key19": "3HWBJiNTs59FLh6JmhGhisymC8yqhZrTjdPThmUBjrmHfpbGNHz4vip4gGXNhg8zWkoAgWWQA1bFCgqaVghT9cSr",
  "key20": "2ofJ5YkMkYyU2vYAiEgHmZnrPYYF6CkdWuPAewBEbNeQAy5RwQKWGLMkHgZSkfA3ridGJvmmJySamtaSpVKFfKMU",
  "key21": "5QZi9EZhXrSnz8obRTizJrLYscKhymvwPFGSQveqNkDHmStBgRzycXNFWikbLGHegv9H1NcEMeQ1tgH5QbCUUYRj",
  "key22": "4iZ2SJbqz3wNuknUvNXBJQaoVSKoZdczPY56qPcGwDNWvsoHAiCPuNpEQxgQaxEFPeDpoTgeozC8aRFQd5rToXo4",
  "key23": "56hxgenUv2gigPiWic42TqB898ZwYUW1sT45B2eN2FnpqcBJ7A14ny1zZxH3CfVoWDuGkTB54xwL2YCUBkjuiKD7",
  "key24": "2Zy1X4WDhi2rKcR74PszA3run8NHGAczCYdtN6aSyrFJYYGx4fGnv6FbqoCJvcP6KUdTZTJBFppZciSMYFZRStDD",
  "key25": "3HCyZ5pxw7v3ZRbcghYtWDwLi2vk31EoQVjSfttZ91jcnMMUoNbYcoiTq3HHPw5Z6XBm45jxiQmc2QW5zNE39sPb",
  "key26": "3T1Hc6wnu5JQdMNUayMLwgTmMFeoHw2N4UgeJYLfKxEyZk9CvzNiYxsiugqyfVDY8o39AEe1XiuEDomygB2Yjfnj",
  "key27": "4bh9Hp2VNX36tqZgNFEaiT1L6beqm6Ta83vv3Y9nayR63gXwg184875QSWtT8M3eaGvrBNQirUZ1QUWuHEvR8r5a",
  "key28": "3X3hn37uf8RA2Q2HhoZYe5fkC3eSwPEqjvE5z9zqChu5KphZUBWdyqED9AgBnS99ZCnE4T8d6db7A3uQXqRpne5G",
  "key29": "29bGC3JddLanaSrgbYoZ1fMgVoY1WjL74LZ159ZUry2aqZ8F6XwcGgBzJ3S6dCyeiKYMhzT9Gr3WBkHsY5LhuBX7",
  "key30": "3foryhdmte8i7cKndA8qjJoW1JGbE4Qaow2yRtbioNrermz6RQj5HdyTuM9KnWKb2DX4DBQjq4AeJWdhMHNrU7yD",
  "key31": "67cbQ3PMsXjRroLpssZVgi9bh94jzkfsRhjeWxQvWTNoTcRMEwycdtwSeCZEVJa8whmUE1Du21TjN91dLZXreGui",
  "key32": "jym21eMKh1rUGS37DrrQc9DYq8BCvo6oFqjwttkrngijxYkeHW5tM2TFxGsHm3DNH8QByZxcA2FKbg9N5NxWHRg",
  "key33": "3U5G8NJ83c5oxmU9tnb6PSufJ2FrotavxbyBk1CAezmawbwnJd5tuj6xxyc3YcGQEhAybyrrZGnxAwVr4ypCyYfA",
  "key34": "wcukVUC9wK6fdmDApCFgF7VZFMwo6etkVsWF4x5fBVAktrmWp6g6kQbFLGW7Vhw47cyR6Trfu7M3xk8EQmFX2eH",
  "key35": "3zjP4HtUcTNXTMdb3ECUZcGH2wvrHC6bjHyYYWWQmPpTLAVRefGtkUk3wBgeuBM8H8oBBoR5GFJDC6zfKTfR2Z3h",
  "key36": "2R92WuaxzjpQrFBRvWjHAkhBUXMqCA2wayev8edaMztvAn8FvQDPXKBW5xteiuRWpQWExsXpKGYUyLsui3ouviih",
  "key37": "gKcWteFrExxFv5sPacaFJEnhMDeqLLyGZtY5gEas9KHHUF3VWn49YXT59z84U3975iC4dCsWeU5Y6GXdVtSG36s",
  "key38": "51Vi3zRZLauLSUcUrCSRGSmUuNkbafhqejQPYXQGyTvMC9zVb1zx4RV3vvbdnm8yNJCifTTVjqEvdtjWhkiHPiBZ",
  "key39": "6yUymFV3aUCQLpngwcTS2AsvDbZfSQ7hsEGSrB1dhUVkKENccfPJoZEZmVBRnFDdxxg4c6Pwjj4zPgud1wGWftE",
  "key40": "5n5F3ztKzNKFYe4sqTKrSAKAG1nANQn7KQNrbfrAPsfYTD4sdoGkCFBQQDtvnQKBeVbSuo7t76koVZUkoRoRmtmT",
  "key41": "4YVLYNqQhQ42LgiiJejXNFpRxY3iVz1JRfcQYF8xuVYTgfz7TfYYRD4YBkUbCHDwP9Wfm1ghfWpbQaKoQUkrWxcs"
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
