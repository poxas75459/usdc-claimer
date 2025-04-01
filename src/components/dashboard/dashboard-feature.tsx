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
    "FEdxaBC2sbuSkdPv5oLHYgJWpJxuRbri1si7BQ31fNVsnqRUF4xRhk66G5qmjVvjMAhi5eeVdbPogDuoUES5Bvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LN4eZh37BhrKeZnRdzhj9QQRFbUrKczRsdKJV91sZUJSXaFQKTGrqpvy1kqYK7rTFFomj6zquKP6U6dVmr6Rj7b",
  "key1": "3an7vk9AW6jZggeTVQiDEetQzoxnMuMBxZehrK2s7C9gWqKrCwUwmA9XFwH5dzi18d6YBKHYbwTDujKvBV1CEgXJ",
  "key2": "ixx8r51AJq3hnUkewgeeUtZDXDtzdo4CYCKcgkaHQAcFaVoRh4FJgJrNGAvPEEWNoNXKYC8rUrCAUATsjTnkoSo",
  "key3": "5a7MDGdqHvqcQUvhLUhnWP8CqJsmUh4TCPC6f1rJoy3YzNSqDkb8SYMEntZ6zUnwc1gG4z8S5gezQfWz6yrEbziu",
  "key4": "9TVDr3nqtwEC7JbbQLKVTf163SyhXTyYG718gCVQG72PsK3BhCQY4eSgDduvwc2VUzBBMCRR2v9K7w7x6M87Wx4",
  "key5": "2sqcj64SKGwB2EEdiz5nf9MbpUkXQ9BErCgEMNcb1FCGaP7EuQxCkoJCr354rFmzZmrUtAmHiVtCaKKbmmeaCuyN",
  "key6": "55aEJunef4iirPEjriDLSfxH5YmPFQC11ZueSYvEzTPVfj92zHCmkh4iJqzfac4wQ33GUB1wb2epLBuSHQGn2paT",
  "key7": "64HfTdVmdVTPkn2dL7mkhVuryGGMNRdASS6sEm8zz4cF9dH7FgUfWP62tUPx7WngbWAVbGjoF8GJBiDP1GAksNxc",
  "key8": "3o9Wh15MeKvaYuZkA8xq3dNzig218iNRzqevSQkzDYAV3SV2oZQGEW6ydHU2vidsGgPX5U2FEcgT9mkg6S2r9ZhZ",
  "key9": "3JusGiKoGMXb3NgeF6agHdKbzs1u7sNVBazhjygkdP9N5axcLnMhxpbJ6zj45xPc5yRkvNQQhmNErpEDJpfrHmai",
  "key10": "4wbqja8ZikmBqWnyrr2Lchq7rLxaYHw5aQ5is3QtnTAFKXBLhfJoHT5FedkoLyBTCV6sqGKWLoFWTRucCHkWAVgC",
  "key11": "2aV8JB27t3k4yznCVyANhPiL4154bgSbo8WwiJjb75xDkBWqXkMRHn6RkyQDurpC5teY4Sp3Tcm2Goxjc2barFKZ",
  "key12": "2ia2SkSSyY4d4K5nJDpQkzc9E131BecqxzGxUZb3azzmPZC6VBcj8auXsZSn5mdxXFBaRbdfaqLZHhGoiEutsyLG",
  "key13": "461WnDnkjqppQnXa8pa352WgrMjbPDB6LsRRn93GQQNG4drHsur8ZAf5fd3Xy3thcJ31yMTBETo1jNyfwz21GtsR",
  "key14": "4bNYjznEF31BdARpwGD9MgJjTEuNvJoUFxjvye7Ye3qGmY3uu5wZJUap6NHsrL2UtCfTk2Rvphk9jt2CRsafbH3E",
  "key15": "5xfmEFUNggTqRe4nawVbqdGdneNKudbSBvZEojpXYRGrgZAJP4pZza8UfPf6iEyycwjVKbrawxqspQ6mcJ3Hwad3",
  "key16": "2ZChQJZiA57jzArWBNWeCjuuqDSsfPoiYR9tqei1v4LXtLh54afEs2KQFYWxV6y6kiSyebKdNpRSKymYwNckLEZ2",
  "key17": "Tu7crHPGKyoxH9FJMSwmdevb8KG2149pYX8vUE1oALvXbkF2Xx8rtnpapfKaGMZnuyC5B16CVCMY8vK3vbPR3Ct",
  "key18": "4gsNxRrMTV66KGVjNSTaj3dxwTvJePPEEiwjL4R6q2H7F7cpagB2sbZJUz3ed8y56Va5cTZufaUJbwLibuAoNHhf",
  "key19": "5DUA1J6PWB9ykKs3TvVWvnDjPufoa5PRbAwzLKiujBxrEsjfwm85H7wGGBsSHRg7bHjf6LdEbhrqrVUuGEDNeiJH",
  "key20": "J2gs4oag2qrDznD7E6XdWGRncLekTBAPweW6WNmXc7zqwjwPTA81WSSswBAN8mLFvsadpRnSUyUkCvEtJgezRo9",
  "key21": "2UUo4o8yKCvnT3KTskfJ11azBiHrGmEQH2gJaDKVQ2fpTCzd4DAqNt94KBNWGiaajfCWRpjp8yadHE4KYt2ntH3u",
  "key22": "2VfZqpKzMk62mi2dNBB4wNQLLJv8SyX97EUBMRxcziAP4dqfs4YjXzaBGaqEwGzQ1XxtpW6GMUpH7z8N1dvxingq",
  "key23": "5Hx5xGHVr5KJTMguQbVAXcXXQHwDPXR3twKCfUb1GqKC6BKTDHNcJEFKR19cuFvQ3ch2kJjbY31SxTtaR8dMHTkU",
  "key24": "4j1RqywKzesKdxFB1eWm1jEtq4hT2pNmRdyxBg2esCUqads3yHPADqq8KdCESGxZ4Wqk1vEWoFmQgxdquWe1YTKs",
  "key25": "Qm4bYrnw3bNrCDeeekaAaHkrVGUZPUed2TkoMdzamXGGwresKpkvnYCwcsKSpb937pkUocd5R7A75wfL7NoEk7M",
  "key26": "2P9YugwpePuQcJPwHwXQzmPyHd6MfMifLWZAQDUD4wqwkS3UGxnrPKtPsWdUbSjSJbAC4oe6t26gTvz35CVjdqDu",
  "key27": "xWwJu7JoFHoDopQsJi1axQhJc5o9PTmrE66QWDoLW15K33nBPvayd4McmAK6umyqQbMhZwPuU9SFg4BDDPVRnTb",
  "key28": "2JUbUPXQwbuNR5j9HpKZZw1YjYQWbHpq12KmcVrCWrf33ZYG6PLZ4NBha4Zv4vkvcC6sLR9h47A4zBBaBTs7iieo",
  "key29": "2WbaPm2oG9HsNpqgCyAD3urw1wXEqpQffWFjcVZEXt1N1DbEWLYUGSuwkaN1U13okajAxjJqr3ebqUBeUdTPEUEB",
  "key30": "3ULgTEgAwo4sh2X9UBCZTdNmCbDQwHRU84myTGVooFTNf8Az7MRK6B24aapKiNraV4HVdknThNxB36ydrvsnUZSz"
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
