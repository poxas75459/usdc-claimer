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
    "6Y26PL8rR5aqTVsb5DBpDBdkGVmJbtPhetQGr36a3BDRhs8dFy7efY8KtHWysgYqXfhiV3eVLx5jsNhygoFkCfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gXW7K23vR3C5BYGY2hKpPN46NmM35YjHePLrtSrf5DJGi5t8RstSFqTeGyPpy2oZFZ2NUAx9ywDzgyGGv5kEnwt",
  "key1": "5tg6seZjqEHBait6v9u1fJZ8uefSwD8z7K6zoUiXULPCPdexAQ1xM8DyJAuv3uiRgEWFe8UtdzMquBub77zpcAqD",
  "key2": "Tid6e8JH2pn7dST7Df49wT13hzyVtc7obJ6dcq7MJRwuHvvvjMPq8QT8sx6jGctumBJRu6cXC78ApVQdRd1KA1q",
  "key3": "4g4f36BN8B9ScPvwpRcdDJoho4NkhJTj7odpNtqbXhdftc5Hu7i5TqbXTJBKawUghp7B8jcBVWGkipXHZqqE6kvB",
  "key4": "2fhX8pnsKD3YiFM1rG2S5wyDL3mZJcR4tk4JLckUtJzxhqVaeuzNSWeejKRKDZoZ63txwcUcQwP6omQyrYZJQxaA",
  "key5": "5KPUzSs4X7XpUmmruwbhE9adhk3DVeyKdrUQNpAF3F86PjcHRdtnRJH9gUuMvY1V83v3PvbU9c24sptWAwKddgaK",
  "key6": "2E8S4NquSJh6EcELopzdpCNQcnzGnowYpdAv3Lg44kR1PpdicFYVBLrxneksvyyuPZL5B5NXg7egJAbncao6a6vw",
  "key7": "5bSEH9ga3n4xj2nDb6ZKfESJezDLcfJ8Dm9Ruc51pzbN76xy8uyqskVuQPBt2kWY2LQ797Dwc6zith9uxRqNii2U",
  "key8": "3h3DUtuyBQKUFHP6nE1xqUbLYwMu9UQy7WbQK3ZmqL9kKonoqHs7JEQMGUagasVJJccwuz1naUJ95xqe8SJ7RnEW",
  "key9": "2cThA2q53jcJZuWCY2dtPj3G36v3Daret9eXfjBVePhms2w2XRDBYi7E1733u9hpMa7S2cQohhXoXfui1setAff9",
  "key10": "2uz1QVR55pivbYT5FrbpC5bLB616KYRMZNHgBVzpkS2DWsUihVZbMTtzsgCxRcPKcD9eKsBG6v6UqSKBEoFxkr3F",
  "key11": "31PF9QUaDqXBo42AkRcyqmGBU3fkHRB4MxuKVrM4jAXgpEz1reUYQTi1uNUYcqj4fyboRYUYm6esQQXdoo33T1Am",
  "key12": "zMZv6UaKNhtFBDGgP7keK6Z3EfAHXng1SjDDArajsXv6tDFQ3PCxkMqnb3ZJMCaM7Tdy2iYbxtmiRqtxLocggQy",
  "key13": "Fq6TEZLBbEbWduYYmz5WznWfHrhDJpdxR1tV5PbUy4MzkTCVSkLrqf4vp7wvEdK2nVdSe3Hxpxmovk8RB7VetUa",
  "key14": "4b7RvDj9FUekSUXHaSVBc3NmehXMgb1GrSeJNKXkmKLjSBhs2bCUfwEDg4oHkfKVP9GcUgsj8bqa3hSKDpsJEmZr",
  "key15": "KeccLae5G9RpH8Na1x4oKf3TKz8x8S4zAUP6aQKXckPrkd2Kk52ZT5zpJKVBJn53y8BjxDdwcBXrF9yTbLE9MoV",
  "key16": "665uexrUy7wmJTs7DNJcnpFihT759ToNAPxoKzcNaceh2BZ2631G8CxpFt8mS3RLn4rZT6sPaZZG5RuFVCV1StLv",
  "key17": "2iWrDuXAcWyac9gkpqmzKDGGGfiGWYqDe3vu7HbgoLG6pwYuvbWPX3qVzTEYB27zBw4wBVdoEZcDqUr7cnPqTgnN",
  "key18": "mXJETzwzLeEtQaoQqRyUtnJ41uZmKPxburf3YA7vewH9XfT5y67ZwJBiMHQBgnss71rtmAgcutHwsYSroPiGng8",
  "key19": "5mGhVjk6dV6TCTZAnuaqMtb5qmB7rNvyyfQxLGE7YuVViKkSbwehsy4wXXMzNfVKk34KZtcAr5fqz5povazx4sSd",
  "key20": "5mZZoEVFNZCPHYBrwioyPAd6BGjSRCW2CjfyfVknWH44yxMPuvsBV33y7CcBNRfqnFC7RSrQYBL7w8vthEFWjRHE",
  "key21": "5uxKKAbJi5kbzjFBGA8VKfmL18tPjMHx1xgxg2xacqZkeMbsV58ppofJ1Tp92hZE2LYU9kYoMWU5gq7J5TsowLSK",
  "key22": "3iokDdNgPawcUv7xw9Ar8Q1n8JJ4wTsqHzQwo6KChScrFYNifZvHiPRDEHpuqHiDDZXp8UmyoF9oMTfH4xsUsaKS",
  "key23": "5kWg4pkTTHzYsKXWbLJ9XCHE1o1LrsGBGgpB43rKGVUYM3UA1T4vktnAcvvfzt8e7GxCsTsCYF4Rc3gx9jjmcTMY",
  "key24": "27oburBnJ4t1ryUguvMjMKr4xkysUwmUYqvkRy4To7fbAH5vpgJvWXBsn1QLhCwiXmdsTuKdoFiTzpdxkR1zHaag",
  "key25": "4JBXki6Z3fQw4JjEvTNvwrzYHnKNEPsCC4SBsSSpww6JAUT47k1KsLn9DcZg9WTNsHooFB9yN2j5VNLascNzowpL",
  "key26": "3znLeccM1pptgBxkti8WGx5FFKs6e6xDEV1wj6aJc8aK933xp43p2ii5bxV1Xe3NAW8B2zCLPH9yyG3FMNKVZ8Nk",
  "key27": "3TmDrmimwK4kqAwzH3LYGB3aywHVPXjmoVXMf3nJ9eyMzZSd9v8TQBbjqgamXJkActuHxauJdxk72Wg7DzYeTkzh",
  "key28": "4T5Teiak1o9p3LSb1WBmKLD86iLXYcSQxMRwo5LAMBiWAteYmiezAiaevrHBmZwXp4Z2EiVXmjKaG6rr6zzgV3mL",
  "key29": "2xaWJCss7tVmNnTMYEcRJampQwXE7R8ga7wz6akwmwo8ZxJbvS4gyJToV8hgsNoam7fF76ki22szgo6yKQUD46eP",
  "key30": "4XYRw9dvzHZyN3z8uLLifkkDCNr8CyxSVgakmAkjyGmFpc7CEgVbs7wvQLhcjRtZPyiJxQyrwSyEL6PfTS9Dx8rm",
  "key31": "3tTEndo6hV4ck4SfZmwatx9wUSLBUPntq7ZDDuknGD6q391PDKk9EwYmjAg7zKe8Hw31nyGCZWQTxnxQMKpJg99t",
  "key32": "2RFV897PaNyapN3NZj8xrCDPQtvRHTpSAmEy4YLqHcpe785VfMw1yjCBQGVXczkADUYHvmTCnQNrLPuBcbzuFQ9q"
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
