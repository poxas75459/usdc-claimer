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
    "5NWy1SPF4guEMJSpijyAbhZY7WKNHWFemr9yeBmwGMy5JZgmaP3BfKXpDbaBnc9J7rWGr7nFEvdDatTMsXToM8K8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iuVpsSezUBjgE9582Shc2okh8N5np8byPj29WNTcD6vRBMB7qJAW433C9sJVY7jtNa5FpMPibT8MsCSXpVtyX3C",
  "key1": "5aFg4i3uZMhgnfAw1Q1aPoS67FozzTaZANfKAVFn5Vbik9WxtPePoKMa6dTYMYx9UUqzN8LBZcmwjjvTTqv3y8MF",
  "key2": "ziojhShM1ih9oYNgEUuPxeD8sbNKgD6isTYohPvj5wBxBjLKAzY1fUfPhGLtsdqhhty42wxwAcrhGHwkE8FjVYY",
  "key3": "3Cu6XzuNsUr68XBEPk16VuZPqFFTg63mqabDBv6p6hoH229V9tENVJWNYcJMCHmQEgsXjVpdWEeDLPH3QuWZzi9w",
  "key4": "2m2bBsZGtHzJ2YFtCXZTsdggBxDZtNoe5ahuPq1Uac29cKqf1bbxZuUxUnSSofKroSJJVVVNxc2WtQ1xp1hwNvZv",
  "key5": "L4XpWMtoBRwhu6PDZXDDCTJu4E3dLbkDEzokts7QQ9uY21RK3J2XuKEdr6PM3WgZF4iaq35vSE6GwcJZ7GZNWbk",
  "key6": "5JbV8oTV8D1zkU1TCiWNJgGjCfbvKDYFa7iCWU8RvNamRrrj1ZwSVVFjXTQwUHtSZ2amNSGHXK2uknWSsYSdoMq",
  "key7": "nFcELcS19U7cLTnQQPHiasZFM8LBjM5Mv1zaCRvwwfkcju3K6PYYyGxwsXipFRGS6NMD2D6u1BihcnNJQrSv7ic",
  "key8": "48aB33dft1GJK9NDAMrvvbmGVmx7mzSs8sSDW1QEMFFJBzyydjRgj4haX9z8MoyNoKzCtqsXXrVBzJaG1bbDT9FF",
  "key9": "2GnswBMNXwhcRZwgqi3cpB4ZWAyvQETQbfKGHmkNbn3uB9yM3FnqZ6R2cgaQoReiTPuKKP9MWXe7KctYScNZb7Tt",
  "key10": "4GxNd14D2xdbLSAn6Mmu9PSGwVgFPPnvyFmHVCAfjdL3ocfBK2AphqJb3Xpghghppd9sSxWJF9eRjnnBUxhJEGQ8",
  "key11": "23LHKPw53bga34AjrV36sDeKM848VKM9DeEsSJX8XE9vbckH6Qe17NndA4DXswpHdAmfu3mUCkjAedFuoxFZCCZL",
  "key12": "2cU89hm7oEB5EvzRNSLTteunyS1ct748P79G2HWsnr9jgK6azJMDjJ98kbzwyi1Kpm2xMqGRGxvyvZ4YUN1yUXMD",
  "key13": "5CttjcRoKzAzQ74D8PekSwhTXBDL6C2x6FeteCnpYPYDcYUt8CjmCyY1NpCW8ds2XeMLjaXrUTFLtNmCeRy2WwLh",
  "key14": "4MzKL2iLMdMSFk7m6v8X2S7SH7wjYL6cN1XtPtRv2QrC5VATuZqNZEAh3WWk48r7daf6m7nAZKkWxZz3r1MXvMH4",
  "key15": "u23iXRYPL9R1Zd6syDVgQAfKhRrUjrPuh3D9y6HugKkNRRc3NneJoi6gzZRumonEzjPGqwV9DbEJmeoWppBV72p",
  "key16": "62XwjUoictLeEy2fJxzTtMmg8wyvNkuk1sz8YzaCusqhzWKzpQyTczaW1DJ8cizwdeBd2EtZaSfAoNUNssnJhkzk",
  "key17": "2HSGi4RMhzheaeE59DfbMQFsQK5HszbF4h6HpYwCacwd7PMnizd73sQX96ttu1CydHPwSsvDPb6q3WKztCh6xqAL",
  "key18": "23hzKkuZScY5fFjsZKaM5DJf1mpno5LWzUPxYFywjZm8ZJ7QXyRtLuiqbgRcgCn34sUt9ALgBLFpLjPR5fncMNaF",
  "key19": "59uDGejuaWfP4RM2XgjEwGnbMddkbCCVPDtTJ6Fy51owa5eSV2bf8KTqSTZbUNhaVu3Sr6EiCXkmNVtkXo9dRidh",
  "key20": "5UskzWHdTcqkJdNnHFrNxQbrtv1HLQifX8H4UXQG8udupGWUtu7nxnuWxQYdzqRRhGkazDHmHqQZxbGKS2DMQd4M",
  "key21": "24fSjNaxe44UsqQV2xLVt5WxpZYJdC7m6cB6uaH12QbJKUJ8B9okL3gK2xEL63du1RGZh5o5nF3JhfgFCx8cFnPJ",
  "key22": "2kqvUS99vwdF6sTRrUmbyfPxhWceeyQXPJRjxQFmYtGdWtC6qmitgoETVWhDGGMRQ4RPFauJokNthSwHouh3QStr",
  "key23": "65GscbgA6nRQdazi65AXBggNrNRLDmze5Rr7Jo2K5K3yjXp7oT3QW5dMMH4ehhbbjypbdhGiGfHsw5GSULSbCrwt",
  "key24": "2sFk5xLdwBUq5QK6CGHoNo9R9jmSU4C6nZe2Af6zUUEfaSqMpaQwziMttwJJ7qH5a3cszzDtH1YoFyskePpkPRm4",
  "key25": "3K9SXsqVaFemRvKZHDfbqNZ6g5tXkDbEiY5aLg5V4kuGjt3xD6mUvE6txXDgbn3QAH61rEFCp6n27BbNYf99wET",
  "key26": "5GsDMvxQndZzDk87eG8eSdBDN5C5za8NrSoNNjfuxkKWnwqnALJsZJt8ickv6grMChTxMFogRhuYYRbt3K28gMqm",
  "key27": "i71dman64YiSKSVzUJcwmnajvgXuHrixy8Z3BhrCKtUTAW7V7MrMS94NcdSgdLxDLVpa1Me3mJTx3bhH8tzMfe4",
  "key28": "5fLCoTCEXaRCGNq6Pi3rN7CwyNEkwY5Mikg9BomaKytE1yfnyW26cQJqVo6HcRMvP3qMk7Bafn5bg9rtU3Z6pC6E",
  "key29": "323hizceqNBjhZqv5DUdCKggUFzRTektCCzbLGdkMkFEykG53V1ws8aPdESX6pNZjfEAeHb9uxEo9X612uAzo8Yk",
  "key30": "3UzCaHKUzq61qWvqBSgQpi4K4Z6S3jDJ6WVXXXujgN8Zk6mmyzmaM8imffpofBduPP1Ap7vATqFKKSrcUYpCaz2Z",
  "key31": "2UwxJ5XFDcKcCYsdGwwdE97RJaR564pyxiTsMSgTXaW5LWDNgC5MkXvktk3TKpYSgYMnmYUvpAr5SJrHLh6pfSeo",
  "key32": "5F8hXMo1nyNWHb8djM9M6MXnQLDru9LTWQmg94YFwnf84YLUQi9vrpRKUGUFMKPpNftrygJRWJU9cRNRYnFViCsZ",
  "key33": "3TkZBCnVbv3me3RUBrEpWv95C4pY4yG4jcVPspXTEEcxkuR6WH2p1X2z8uLEmu2sq7JgT8KASxCdfKqDSGryjaUy",
  "key34": "2oF5nzGpVfujo2ysdCiCkK5BgEXjJSXmUgn6zzdvft9xE4XqsekybCXqg645SxSJ9PJ4H5onSgcyFvdjnnb4Hsqg",
  "key35": "Woavj4Z5MAEhm8qJJSX59qQnnfXS4DtLj6BU6h4MtPyL5G7HEn3oFeWAKqAgRKNqtxhQWov6HdUFGc6N8inwruo",
  "key36": "3VroDyMtXJBPZP7PsZFzpC6vJqG6pTPA4VhpDSt5YCHrs9Q8Fdzrjz989r8TA2TuiyuWxUdJ7Qq8q6jBwnRFCfWK",
  "key37": "esXGg7oWmRxfW6ZXghYNcQPb6X7Gstpz6cywrhJMrU8bLSt7HfiPiibmMhEB4PXAEwMpw5XfvLx7ezBE4sT69yL",
  "key38": "5AJ7TPotu3Bz4QMNYEXEb4agrF3cm96hEFsBHR89Jja4kHLAYT9L9T1xqPkJzAWZgZX3DzsJqj2EtJ9gUTADys3X",
  "key39": "2qwcBHYzi5BpT6CrDGpRaiMnWtjK6Y7ru5YEP67NQ89rDzjNAmz69yh21LkhzikMsWMPq35SiumyWEMTxJDyFnB1",
  "key40": "5SrUaDmcSt4FkqpM9M9XrajnbSWumNnLSvfVzuWFynmBy2ZzZMYBrkv8W6EVroGZopf6HkMm2pqQbdfQcpPqjJdn",
  "key41": "5MYPi1tndQ878mAG5kyt8T9G9MhpnytVczvPRRLx269GzY1LUq4m78j4TFyAy1i7UCDXEZC6MVT8qaEJtNpAEvQx",
  "key42": "41RM4ib538anuBTqvSHXDkMmteyXev64c1zYAvFQP2WpmgvjkoEZfkPYEEQ6E2gkdeiyCzh2c8aqcAMh6wMV6UsW"
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
