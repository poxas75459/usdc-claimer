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
    "4NNFLTAYRhAqVtee8YEkkTyaW2jxHg5Y8kb1Moy6GfRfBEkVUbHUTMd5LQ9RKVheEpuYDvme7FQ4bbxWqjSMEVy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cc5hk1oc7hWChipuuC27UfqWAnLKGK1vMcQcSdtYj932MJKFXxqz2kRQCZrTZonn9iBcWWZGmgRh1TqckqTaPwN",
  "key1": "4B5gvMAFP3Y6MN2cHF4hZ5r9E92SYsvXUd2bTQKo1AXXNjtWkigvTMsmnEGKDM469nwep5YrPC47fPfqtmN7ex5x",
  "key2": "DA1HSgoHTYYUncEYNYnphnruiF6Nzp4ebepGKjVG2pQm485RVureY2dSsUFL4F6ToWAYxqACnbZ5hABV4nwtjEz",
  "key3": "4mESRNRjXaqXHcnB9ZGvApFQ74Ryv6xQZK5mgGnXQ2H44rG8M6DNBx9NbRMZrhTvB73CNiAW2t2TdmDGPzLYRfnS",
  "key4": "2bRoWaJdjmznvAZmDSTjEnC6z3V9zCPePUYFZF4YLzGAbMJkjBUhGbo9Yh2uFWWWgCtJCEeDK9MeRT46M6a8S42U",
  "key5": "4MTahjPu8uEAovfsCL3xjC8wPxWKPCuwfxM7E31mCVQ4GvR6zodVuYpxM82ajzbWCCLYcWus4Z9GKr5W6QbP8egG",
  "key6": "3QCLELe6PY1oPZaZRy5HnGc2QoZifBcvgFvsjySFR14UDDKhNRg9vQtNCvpPTpNRgNTgWK1SLwhhn6xrfQPbsEdP",
  "key7": "DpoSawWdaKVWS7SLh72mT7CT6HD1LgKEE37b314wW9TmctdvnHe4ayRbV69caVXnqKAWBsDpnUXgim4pGGMZS3S",
  "key8": "5RURKMvktwrRvYW8L8Lz92CQgJuBJ8JGFNAbfkMFwChozEv4hNmDWA5RB3H6Sk2h431Pmt4onmSDbY72dMN3De8J",
  "key9": "4bRutx8UVx6qBPTXLn8M9qJjM1oFPNeLLmnsh7mxBwBrfJmwRuXvrzu3AZxVoDjqDMaenYjLwnKKJZ4atjZnz7FC",
  "key10": "2stRdScGWdgKW44uzijvqWGcHW67gvrxnMJGATUB4bEt6iu7GFKZuS1dnbGc5EASjpeMy2zSWkraExjGSLK37De",
  "key11": "5o52uUQsTx2FkZ24VngW79CPs5jfuP1dqnVsAGfTmC37P21KPAYDCnUfgWU5Qi5aJun1gvngsfPHmSpkZ2P9GZyj",
  "key12": "3Th6V4qgKDRw7APtew2GWzZuaSAxkouLkWYTxLrA1v56vMv4S3QJ4tcpWU6CbSEkDYcwz2wCBfiGNxsh2kcb4R71",
  "key13": "YJgJngMNRayzotjHSWX3m7oc6X5J4QA9x46xxFdH87g9Tqw9iUyVNGcqUgGChdTb8KrN3wLMg2crRrFkQUJrsXr",
  "key14": "3HhEfz9X7rNCrgqJQM1MjaEcPovwSYjUHyuaxRtGQZgG9TH9mSZZxRJAvwk8Vux9F6wuH34w7DknXpSTzZnRxRdn",
  "key15": "3nEC8KRTBcybipfLowaD2di6QVbekKKkqS3AfFUbE76bpNkySvrCiRvSsHrJdrKC1fQr24EzpmzaSeHzq8tVvHiF",
  "key16": "3pDfFa6iBxwKTfKzsVBDCt6hF1bngSzzfGgFpPwAtZT3hBs7nL7uB7q8r3xABUjoRwsUtutAiJWyNyES3drEd1V9",
  "key17": "3GPxGSkSLtS29hiiiAt8QxqMGdthD5UjqJBMSAm1aSeDbWv5K8Lk5i3xsg2ea69KE2XHDrt6uie8ovjoKXuHmjiw",
  "key18": "66yUtRCQ7mzSNgpkxVgPVrWdoA4XuUM9zgn7ddCquzZo5jn8Vn67hDGGFTGBCDDVUXR3phxPsmpKrHoV9SkVEktH",
  "key19": "5LCnfyg5xdwmark8cGhmYQuxPAXTjJq4rUofzFZk2pjg3JS9JZqGGjeGEtcf3Ga5DfYh3qFE425uxiCQk22HThGF",
  "key20": "5uFapXgQ2agbfBveJFsYeNorsx3YB5gCm4AE3psh3a98yZ9wcZUvzZRkcxAjmg1HNJEGUw2csaW54x4xtYQiaThd",
  "key21": "zJHjuZZ4P9PjKjZGbj6xw846SQtPMBGdq5ESZevFQGRDV4JYoKjVGJtEELJ6M6n8naapSQ5oRutFc7Kx72LvqRA",
  "key22": "4MhqWhQ7VUYKk33p92VjeBjeNNuD29w3HU2W95uHBUmz9YFenjGEM2Gzi814wAExkE6mN19ajqoRXZM29T9U9MRz",
  "key23": "DmQWHpWe9sfaSFPfBW8daAqXZaNidfNPPn36m1KAsAU25UkYCvuoB7NbcpB8raZdUTZeVMd29CQBibWMxrjZg5t",
  "key24": "41LbTmb3dPPxe2PNrq6SvRPAxLc8Mm9RYK344QYPXuHowXJBtFZ576aK9nyN5WAj3CJk4GUy4BGgn4Vx1n1g5FjF",
  "key25": "3HQSXHnSd1TZat9X2f5qYCYMv5xpjGtWtZU9DnTpyqW2vw5qdopXFWsaLgx4HbgbbxoT6jH7Adok6zDEPXgEXSZv",
  "key26": "wEQFuHXGtdgihn8eYu6ipDhVrkit3iMyMHF5y3eJYuDxpqPaQLMQ3KodQcsbWMxQnFELp3GoE1XivTwzTsjv8p4",
  "key27": "5DWdMgLx2Ms6QZ6WWownvhQGMBQ7ds9TLewoQB6J9yEr7Ntd2dNu4okV369uAwRgz2gMki1sDHXX1h88DK6ZKWtV",
  "key28": "3r8SJLuS8pRVNwMrcssNTr4HV6KCfF89qtJ3E6gnqtXajybFWRiQo33YGqj8oSnTG9x2oZ296qgfRDSq6gCTUDPg",
  "key29": "2GXMsR7f3p4TfcoHEWH8m18s4cgX1Go8tr96rXyhq4PrzuonTcgNQ59ke2uiUne5QTEQd4euRpNKFCEtWjKKXkKD",
  "key30": "5Zx3CnEfKyYwh85XG5e3JFh3wGby5RARSws5VnKrVCmmYigPrhJG3RGZTTnxd8ATbZWK4fXbYvVknWLJku98LfCf",
  "key31": "52GttYjFNoEGCWrunxjDZXf4xXr7fqaojJ8NrV9M1znTZkyiwYYzWazgsWp1mjDtpnTrL43LAjqVy1PJCttR5wir",
  "key32": "64sEX3QFctZeX2VqkiMUNeZBeYA6gH79CCh3XS45WXiwgtYnFhBkTViLhyC9P2zrgojYXFbLKdW993FAqAftz6Zi",
  "key33": "3ER2m64pDn7Uur1XKNUCBCCp6k9XGoPLLQctAueWPwbgbGWggguNYCXdYywweRPRbM5czQ8k5tQDL5aDz1WD8DaA",
  "key34": "4Mmvm2Y1tNqhVHqecmE8qip9JxKYRpV774EHyjSy2c2eJpzLxPJX1a2jLUqFbXR8u4wsVvVGNS97nk1tMdE2aZyX",
  "key35": "4GbXJYvDvdGCn7VqxWjJdY3Bs1LFhxmidTzwosUS6ybBQb5sYBtcKxDBQstJiokpjpoiKC3ZaUePriogQjnSXb7C",
  "key36": "2KKQcMGLaNE1Lems6ymUdZR9Ti7Y6uU17RVQZ11zZWazxNTzZtYdqoAq1cz25nYhpA8KMyft3YqdvekwQsqimoD2",
  "key37": "2wtypUJFzJwLFNKZD1Eg5zkCNCHpkBJPzSfyya24Cz7E3dLChKRhEQkW92GtopJ4v4nT4xbHXbgATBBPCiY535tK",
  "key38": "64ym4vyrvfbCGSMMa4ghTPTZuyLqmJ4mSRvDyuLzey96z5xtTpyHkVjdJWT37PD4WrDUjVqQ3LKNyrZTFXEFPX1F",
  "key39": "JP1no5B7iypmBXULg5cmLD95gpWrmAU2vUqgFu3NpiKmQTL8cwcMxvu1koEbrr7eLmG3AxvpxuJFVhNYxuZt2bD",
  "key40": "4ggguoEEkg5V5NuitfX7ZVxtb45PqQw9ac3iMPQcFnyUGVx536L9Hb5tpg4oXWLqSuzxX1hwLanoHWC43Ybr8uss",
  "key41": "3sqbuUXwG4e9PvjN4U5jV5iJLoKfkKh7SsJb1jJh7mTx1RtCEi34seUu3xPq4hkUAYhV5VPxNrx4oXFssCgtdQJi",
  "key42": "4mhHU2c9CsujkET36ecVPzHyL51XX6JBhBZZ9YkXEyDUThaGpyrYmVG8tTv4ntzxnHnksCGwhWZnmP5yymwUKMbu"
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
