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
    "27cz1Lqzh5skbSSZYSBoB8oHFF3dekmbq1xAuHy7mXjZCiizRVaozduPppBurQdc5ZJ4RbS1ewkEqGUmBf2ViwGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33rmU89w17swyvDXfVwRBU6RoQytkeowQCvPdYR3CtJoGBVjbVvPC7B6VNeqEfC9YA92HEZ4NCNAtcSVis72zJ4",
  "key1": "22vDyU3Grh483goMgHe4sWsmUUQj3bHRCezd8wPKvsioGexVRmUFqtAYE3bwvf6WM5Lz4We2QDweY9WhNr2cSUX5",
  "key2": "3ydPx3gSMbpzHRypZWoPsUQqFAu8dntYPjuL7j3BMVWYTU9ojhSMZuWdQhJo3oTthPGxBVwCYaU9SvDAE4Bjtubx",
  "key3": "4uTxd88KYg6tRTxdtMRrfqSSjfnd3ftL4vZR5Zg5LD3m7dhvyhahYegDbPSFtaT34bSw5tmiEES74NRaRMCzBeXJ",
  "key4": "UmZgwMchemdjb9qtj9JHzZ8twEooBQjCyb9QAQFKgp8SSyWnYBRfCapgnjEConir9Jg68msyd1dhdzoTZe49PKS",
  "key5": "2bn1ALm5BPoj4KDKrMzkCYJATzhJEhPjfWvW2GNBwJgPpnsZcH5faEbXSGS3bF7kzp7oBAWeoNbYYV6AwHuzSpsk",
  "key6": "4P7iZ4Y5MvhEJjKe5m6jB4HuAejX4ybh7TfGoDyRUbCgYAnQ4xfV2XanUa8p6A1NMdbNzzenZ13Cf7zgwhb9Kenb",
  "key7": "26ZEaKSsGgbanYe8uLd5ByZiFd37cCPAWvo6WCAseVGWQuBDs1ZTapVFK86sDpUJbsUVCH3Xc9UW8yp4T6dBPYDp",
  "key8": "3C6PVtXTFtnn4Te2AY9LrfsR3JjX4E9NwPFyxYwewsiAPfS7ePrkxMzYhjwux6B7G8AND1ace3JYz7YWp921Wrpj",
  "key9": "322yQ8EscJmsqsDyztjEfcKFJnVccsZ6LefLnyCXXSkNcoZmpoJbZctuc7MZtcT7UC3qmUgSKs6YKJ3vw3chsVpZ",
  "key10": "3mEPkrPrABdRwobvosnmj8AtMm93mcsSY4gr4JARu9paQREfoAFxhrcTFsJ6KsiESo8E3Qa7J3Sz6Kb3s4L9HwLY",
  "key11": "4qrqtrMWVHucHxUNJxX5ecHG84cHdRxQSyJpUa8nivshwFWLpE1GtD4gmCEgeqobdaN3z9a3qcsEHkpBLc9xypaZ",
  "key12": "3oAMtj564nwEYBYrdwdTvLGNHm6GX6uk9HbA7X9rHRcvMCV6LDeSPng2JQbjWn7ZpPBCDrvoKjZma9DT7kQ1Pkc6",
  "key13": "4WR8ttiDNrkE7xhHuQFfubFcr4HtruqEjaU5n3KZA51YPVkBz3JbL1GT9ZSrKuX7okztXZiKPmDuFgC4L4h9JzRT",
  "key14": "51sYzdaHWVNckbLECyVZGfMYLt8poMRAEdieCatn8y3jh9uRcSdBprU8WCcqJkfQK23QnALjTYGx32No4sqzcRKf",
  "key15": "3YR3jyLJAVQXuZM9BkVco9eM2Ky1yamhspcwN8Juvug9Tf15EebsYxdjGkauBeNbJH9akW8ffN4v1FqgswHBH8pi",
  "key16": "2sicACfZVt3b9w27P3K9Qgjd7UAEuPXxnCVbQkEwdmdXg9j66BCcg4j9kitCg67C67BiPsySjXdGss74eU72z7HG",
  "key17": "3hewHxquZysWh8g6GeA8BTLp51RuGAdaQ2wZvCqWfSdaQpXCfR3diQ7PhahSssdJh6R7yAiJqKVLMdqTKbbu9dK9",
  "key18": "29BtZjCE9GDKqXLiJorn7MExDC8o6oXAvJcKAFZMpEeadsoCec35HEnRNJhQTzoPZvhtt3Wz7qrkWw3y3UU6B9gJ",
  "key19": "x3SG4trhsVHz6LvKWtfzAV4hpFSvTNWckUHFTLq8hJqiCKyfYyoDjCjAD5BH2dwSGDVJUGauy8FEdZ478FgSrHk",
  "key20": "q4jpF7Ng8P7U5sHerk6qsY5AV2uy4bqUnNsfGCEM9R9gNG4GfR8HyK7pmgC7RE2bKaebkKWQjb4sfGsYTRkJ8PW",
  "key21": "5TUZeApi9B1MpBWv1PSnTc9D8pFKguzbfgcRQZ1jpmgC32oitJW2YB87kmQiekptsdZexexKhpqdXmAQJuLBY5D3",
  "key22": "CYhVSRfVQG3y2wXPVWgyzKSwcyi588UbQuvkZBiXwR7ZYAunZcW4j6d6mPcpeek9Lq9LnFkZUXTm4wVBgGy3Zzz",
  "key23": "4wTUo3DvV76vvt3YNrLkzmUVYWQm4hAZizhYKhg5igotxUnuMurHmysucWSK7QxiagqTZiAtPvNHJVGS5tiRSovP",
  "key24": "GVjNARWG1DWQntT1TymrDgN1YEJeMMjrV1ztinF6qfMr4CUmHBFw2vY8isEpWapiHBeCtvUFoDNy3NJBan6RL1q",
  "key25": "4xbqfdHj6M8yXP3QgBMQ9TLdEV46dWdhDcPpCa82kE2D7ydoKC2JyQ2U3PxqAto4RqyDzfVbgHLqWdpQUTdCLGtg",
  "key26": "3hfJBFoNJAcbswSg94TvJLCFLKrewDmai897uu9oPgn6Na5yxHSGqyNKEQCE2SZaRJFLrZD6WBL1ASyEfTFxuzyG",
  "key27": "M1JU2YXmYAVMo2rZPD758bJJLLA8Qcj3aVoEpQAyxJUeZiCCoiW7hMzBXyyNJbUgTTn2LhkhzUQ4iHj3fg9J8sY",
  "key28": "3uiUsoGXh5AiErCHQ7kfErRsgd1RfBazPJhsomNfqg39wVwZFy2me7z1W3tA8xRvuQ4z8Cwu2CWtvTrb694GgYWN",
  "key29": "4tQizQgtkK9D86CWh2Es1M3YaTyWPmzchMFXSjS7pxHP9Xjq5HQdc1xMTtFeqCzviMLPwqNit2AQmeh5fBdE4Daz",
  "key30": "48tVbZhxt13x3L16wGXG4Zww2b6ZeWcSPQiz2WzuWY1mK6XRt7EjeGN1yrRx53bCF4ApQmsGfv6d41odQ2JwrNK7",
  "key31": "FWN9gHRkoVJXt2K7MDmQqm5H2FPVaNXTgKTmgPT9XuoUMWA1DTtcA1ZFeX5yXFR7vSWrdyyka1p5SXBTRfrjg6j",
  "key32": "4LJWG2GFjRj1FKXTX1A3jHDLztWWtAQjG9RTZwCnKSHXMh7JER7UuPTpRqswAF1Uoq51EPj11bdqDiztykH7oDqX",
  "key33": "3mKbo3PNfcoT7Q7g6tnBgA4e9TkSa4yMyriN4nXxB1j7oZr4y7w6JrU32Wv1GWi1zsVi9ivD9yj7cFvzBo8awomE",
  "key34": "4vWaMYyuaSShYntm1q6pfUCcD57U5TrJnDn8eaN5cS2h6HFeGuYD9YviRzr2WwFZDt4ZatJeck5imE8bqVH4ZmUL"
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
