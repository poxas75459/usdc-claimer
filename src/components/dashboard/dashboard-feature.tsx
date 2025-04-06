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
    "YpcBYJGN8v8ZjkFbPvYJMmugP7R1H4Se4jy7643LXhdFmrWmia7HUJdfQCdRSTfnrNEbvaC6GAUFUpJwXFoq8cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FLnXVSC8m5pbkxq7kGdcukeWKmGPhUmFtXmFGCnDWkg7sCBRcUwFgr4bqEbHUWBGr22ZRk7cosQ6cfjWwXtkG6p",
  "key1": "4S5LNLGocoTyGZ4LrKrkPqU3vbbUSjC1exF2DHx1ZxuRCAqVaECwVxdiBNafvQUoSgKam9GiKQ5kFihzQtCwmP2u",
  "key2": "kHcCvdjUZLnERLBaYpzyQRLiAE4MuU8x6Wo97wwyXVrJvaUZkU8cDxxVvnTzbJ8P3VNsUna4yWsUv2vmBsjH9oD",
  "key3": "67pex26GkJ2Gkrq14FxYwSdj5jeHncgYb5sM344RzhamBmLxPTJvYWfX3mSrNTQRqmjVsV3pS8yvcSN24pACitDN",
  "key4": "5kwqf4SF3zAeQNf3Nkprc2SUvMNvpAaANqUTT973NXdA4ZEPTtH1UZ9T925eZVESvm3NkEX5fLfwZNW46iQYypt4",
  "key5": "5dRwiN6NsCr8r8YXijh3bRRYK7XT2mPGDnLganS6uwW9AL18Aq4osb4HHeiL3bj4t3pyM4Mgj2TLLBjfbw3Z3fF1",
  "key6": "2WkoyYiH1CqCzjExfSaNMPwxo8qjJhT4haSSCJtFFq1ejP7bDjSkFiFKhCHNQ8CB71FyXR9nYgxeNh79nCvtTHry",
  "key7": "3N4JXpHpCyzFTvipgcZyk2HFKLu5C2PrHxKiF6roCrTNoHnadrn28mNM3xz5kDsqcJxu5i925wsUqtQvo21i5M7E",
  "key8": "2e1TLCNupcEPDEtDiHBfrtY1TjTQSCn1HYQVibvSQuZYD6KJpt6s5VjGoocr9gsdVjbLYHvDa4t6kez1VF9PXyJm",
  "key9": "tm8d8J7BwTdrRHjHyLjdDcnpvztvarQbkPNBv9QZ88Y8ajpDqShZi4MaWpL5gabUAbdYC1JUr1DCniAQAdH443R",
  "key10": "2UkS58oVqzLsjyRQGgRMdmagCjRwnUSE6WeunAhw9xW6q9kjQ9roL9iyBSFqBb1TcmCC6x2RQnFp4r5Mhyn5chyD",
  "key11": "3L6XLFgaeH4gZia9HeEvUoZRwsRMDwBresMCvxx6JVmXTLcF6kLboTXg2rzdZRSc9TZGoMZsvNhub74jhzbQBfS7",
  "key12": "vXGdsShJi6q3k27KBiPkzqvfKRvQEA8nWbLzgdziAScaZfoar6NQgQxzj4Py4BvGKxPxEGctLMr9KQA6UkgEijS",
  "key13": "3dsH7KmCrC3NUu2Ytujk1P4XjTFTtyUzZyqqzAfwLWhyguQUi9avTb5eiJKoAzrpCjuErQrVZpfr8Smh2aJ4qVrh",
  "key14": "3nHcrsiTTiuPqzAcyDVzLhr8TuC9yzUmhEUDgvLoK7c6G2qtoJKkNBaiFA2K99qY1hdC8iYE8MR4bh1cMgzmanYz",
  "key15": "2AmH8L94f6Wm7YoGU37oMtDCrdyewxta44oJqM8xjmvPxKApMN4zCyiFpudMq2SJofPGoMbxp7ewLN1hdzGUPSF2",
  "key16": "2C5QhkJx4wMrJZicUnJuSkVktDuxXHCVZKi1w9ZFhegeS2Nzv1V33GKFwEcooaahU5Go3K52L66zVNNd8FgF9k17",
  "key17": "wsvFsjDd9GfYt21WiBM3CMd431iFeQMa6RbZCKwWYKrqsPFrmT88FW1yVvUj4KqLJAVvskFxxGquVTDBGQCNkQg",
  "key18": "vmDDFipzcJ6C5FCn5ojG4zTGdAQmgc856tuFVeAvtS5ZrDns74zqshKF28KZuGRdYr2C2nxpRYHYuT9NwwxvMCs",
  "key19": "49WXm7aUMcHedcKTauJ7AjZoi8JhFpPKoYyP32jYuU1GSJja866DPqg2y2dndTyrHZG3bi7SGJm1Rmd69nzo7dGZ",
  "key20": "4P2HQkuJqp55rBvqytD1GMt6kkGceJQjzat7MbRsJuzMYiSA8q3nuNgH9M97Qd56JwqFquyfKSwu4KJqJ6RaPc6T",
  "key21": "3QkcVaT39FKTNVNSPJcqbWNdNfQsiG1MzzvFCVV8PGHjAGJ2sor6tgwXX68rYy5wTpRdAGhzUhfpBQxvT9ZCCgJw",
  "key22": "4MdPWJxftQWQptBGsn3L8JnUAJeMawMTu78hon11LW7EbcakjnHHqunPYRUMdGUPperCxvprYFi8NBPXkiqMqV4f",
  "key23": "3mVxPh4o9bebcVkbxgXpwUnXyWR2mrcmGbA3VJL489y5JhvPUMA8gx5k61xDvuTnX8AmmMXaAFaUE8fogcJfo7KX",
  "key24": "2TB5ZsfzEKA95ExzXisyrsej2dU1KXLaZ4nGYUDbptTEEqTUCd9asWoXjuC6uuBCkaMYh2ibnT8zJx5resF7YJgB",
  "key25": "4YiRZXix93cw8VSzmeyXp4MpRMTWbRPGBBzowy84mS6Skg5YV2GnwNHbck9gzd2pQ64eXkHBG5z62X6ntUXfA3QT",
  "key26": "5CYhMivdYPNUJFM5HSCeGwKgPGXT9UZVZejwbWoTjy2n9yr12mb6ZcRyAvt64PHZ3wVNkbVo4CJHgGaE6YnrVhyi",
  "key27": "2vAs9mv1rK6QFzZmHZ4uPCxgYm8aG1A8z1C2DSiPc2hik3DUqvHjXEZDNcp1c77kFbBEiJGGNsPxuZ8yxxDmqcCB",
  "key28": "5fWnDdhe1czvJBMXaUAega1stneY3dUB7AtV1pUSV1fPFmzSgT1NRKrTrxzETzrYxmo54phHUkY2eMFsKZmpnNZf",
  "key29": "PkYD8YJjxAnciodCBWnVCouYqJZhMPCkJSFoha4VtA3GfCXwtps8CTJo119mKH3EN6VNcydEg1z51Ye4MexfbsK",
  "key30": "2dcHVPpeP8BuyPVcGiurba3YwbXJv2KefGaYd8PWURRqEK77rmyCmCmBhM9ZpSDVTJb6c4JPFkV22uz4kZVeaVob",
  "key31": "2w3igBc31Uq2T9tWLAUb1tQaHgFPL61b1itxnaVo7TVJVdQBwRGdpDyQhXuCnTLTdwJ1cHMysPbJvGDSBKG5aUUk",
  "key32": "fmmgqiybBpa6rRehk1o6GkyRhsWCMs9DmxhprQv8YBh98bcXS7iFcukdEsqqakK13DFCKcyGgV9TzhyHqd8dkxg",
  "key33": "3Wt6XJiquecnWk6QkbkLbSGXQWKA6qgHaMZLUy255Qoxbjz3fQ51MPzmyr7YBff7p6dsYvQgFNJ47a24tKTtJxgC"
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
