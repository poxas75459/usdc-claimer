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
    "5WjKSyC4eRJ2g4t72XjWtftUg1PH1pBEQu2yzTsqSBtQaTwLugB9G1yPApPFT8DtoMjSsz1f41e4Myju2pvNf1Am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ncPDz94DB7BjG64DE8VnFs9ZLzZeXRSyUFQvRy9m9sNuvSfycMv6zFdSiWBrbimU8k19LiUh93ASMNm4hAuqSY",
  "key1": "4VsEk3Sz8Q3eXGzJMknuXcWy234PdZWP91uL3ADEPnU9vAJ1UG5VPNGcQiYceeTj6YtiBM6tP6ZRZutEPkzk8Gyo",
  "key2": "5LCGzw4V1WrpvehH3T4wqzgD4mjBAxdHsc8Mj5ri4vuNzTX41GD4qFvW1R4Ng2CqKKk1N3LDZPWRjfJLhisZFjXw",
  "key3": "3yub4satZZ7z91XtrXu624nU2DEQTDTDV8im6vuXamRBK2tiHAH37SMfNrrtGQTymJVEHkqsjePyaZkSKTTb6LAJ",
  "key4": "5mhxqMhkc9Jy1GbKemDiF5G82YT529mgQxLcSNNBw49hdX4tiNJivVGamin7Zrj2Fuh7e4aB58rKZ8SiGjw7njrG",
  "key5": "3rT65YjoVHRVtqexz4A68Kbemm6vLoM7rPzbytMbFsWg3Bw2fpHU8yaLMryvKcUFe6cvGb9RdPk3hKn1Rroz7puF",
  "key6": "2bbKKZNTT98dFXTL6JnrqTJecqhqjwocoMbyQ9q7NoN76Pt2TTHRrzmPanmbg6JQgwLRJv3bAQ7YhNHrVZLUjDhJ",
  "key7": "3oJWNHi5s2JS1jXeRYmmviFT7oJg2Y7NZzUNgbCy33gR5SrjNuKzVcVWPQqfCpqxmYGMWyRtvxLCYRvsNLBUjyg6",
  "key8": "4d8oxfMsCG9eMtfWaxAG8dm9tcajvCYstsMqXnz5FiAPQBxqqLdjjdeGFB7LnjzLc5VeJyVgLPki9uFCtua8We5M",
  "key9": "bzNeneh4kmKSuqiMqyZCkQ17GheyXApjoN8DXYYh3Q1KujNDfT2zximzJX9iDpn4EU5L4buSGUYYWX7GCyG3aW9",
  "key10": "3kAHCr6dh8cZ3Hzv9KjBRkz8Mi1VvW7Ma52gLvQkaEUPNVN7cYKyX9kkwV53H7BoryqnRcvNnsZdzzXZnNb97J2H",
  "key11": "55KsaWRgK9TPa6FTuZ6e1wocT1e7oXpWMpEt5UmmgkhPD5owbYesnWJ8AUhwGkxQKJK1b8mgZFPMAegvGb47HjY7",
  "key12": "3EkNHfwEGXpgaz5ww835y6JN5MJoCAoUSmZ7soQHDGuTyA2X5hFUF1GbNwH62rq52x7oD8ynsRJoV9cPyfkvKqbc",
  "key13": "55A27WnYPadXTZygFhUDDmQkXcMkw2mFuzXWDwHuktNytwvdoJUTkG6gEmQYtmsDrxq5ixiafJBbwTLjiJTCieRD",
  "key14": "3gwTLv8xbQnCuQmqF9deBLNQENN2tksNduM3AKv8k2DpB36QDLDkXqv3tvn5YJxLgAMhrvpUyZ7xsjaVJhcu4uLu",
  "key15": "3P1D8DQLiGwWnBJ6GPJ2E5aj4iSYXwT3vWCsjxYjdSB2soAZxSuvMifCAyKnUj2f2SbsSffzBWP6X1yqrHcyjCkp",
  "key16": "4Liyf2fWX61WUnRTeavF8mgCYWqErvmTWpnapPp3EjDvmgte5u2FiUbH3unAEy94J9KsMAcLrXvVUqU3gXWsFZps",
  "key17": "5XmsXUtSEkH8BiUEtaPYPQqv3omGisfXoVjfM2L3deESw7SsdHmRkaJJua5sQuTQoTfUmNy2mDpDZZRnGXCX7FrT",
  "key18": "32S36NRXhSGjVmYfpFtw63qmyJNiAVowP5g9iSW5KmY27QtprdoSo9XwgiQpHaWTNA2PCHSzcDVdimTcLNviLoUC",
  "key19": "2SWiRwoGTpZMhUzLC6LJtLYFqHWfJPo6dDhAmyfE1fFcPjsYFhqS6HAK3nuqzYVrT84yGCWu72mVKRs9pNuDdXdJ",
  "key20": "4KD1Eqe3a5r3y8dTrnCtVuhrMEKLiEJmY2EySuRGZFXoDomAm6r8zXhqMjG5qGZUNXedCJSfxVohAB32bSP5FiUL",
  "key21": "5TgSAPDCuYZS5pZJeHQmuzjnWkE34ynUAuPoUMydaxCbnkF2K2gTY27B8f6CDBdXyurXStmRurggxc7maVanodPK",
  "key22": "5xV7WXHx1GuLb6mzJcfqFJKHqzuRaVCh2vQtDqj2KEy8ry13xVe5ZeXN37jj25kPjV96J9WYmzCHCZC5tgGnMZVQ",
  "key23": "49ivC9kPkc88gJwJJko6aSDDix2opXWEzUJ1FrEgfSnSMbVnpoKEmcrj4yRydHXe6Kx1go4gFA4jFmm1DAAGRt2v",
  "key24": "3GPs26xqTtP9QamBfFwSBDppESXNkyJWXfc5xgyz4zhNVG6i5rgKyHxaYVpaP4UsaAasR5WYRGpWd9fNaXUoE2ad",
  "key25": "59YW82w8mfh28dMbA5AsQBk5tRbkrwrKju33Z93xUxWioReHVbFR1vFubTzohC3EPEfaqGJm83J6VJEhpVfv6kAJ",
  "key26": "2zcxVUvcbgiyQHvRMJXwmDSNtgzjRTiyUC1PBnVYKUSUfKdSKgokoRGFP6qNyc9nkDkDfTTwfeEsLr48kB5pnxC3",
  "key27": "2oDJ9E1tWV2SWBuvqxszVTyTrtBao4casvuN296TJMjTnk8NautQnQrTdezCLz2a2GpiR4e2UkrEVWwRZsct9t3S",
  "key28": "4d27MXfToK7qRdWrJq8aMbyhKWiAwoPAAdTfnMrKqRGSbUb975MkengbvjPZXux6jFGp6Y5T1Gobz3RsTjHzQwjX",
  "key29": "3ET3pWVnjG3QbwpkmgFXDXvmXUc8NjZCy1SyEN3nHeZhNYfQ3qUdnvfxT12awxwesLPbymJuhfjMZcyuis2SgmQn"
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
