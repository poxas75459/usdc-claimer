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
    "3p7L7KXWFwNVqnxG3X39oB8HGpjbPwvAHpDQtUWQfN1LcD1WbnNTWqeTzcSTwRgfKvPnm6RAfrmoEqFkiu6zZy6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fVc1g3Gz9vGBzU8TTWUGUrpgErjtcAtyXwqWWEPz2suovVLr6sWVFhmAj6wSiwvtyUTpHiY6ubSA1q99M8Ve7Wp",
  "key1": "3uAUas3bhe9UCGHnmWTTiTLpt7f2XNgJDpMnWash1eEnSEhAFDDK8Kx5A2bSkUDxpNdk8AgNdxaUQT1PTS9osTtF",
  "key2": "4hQk317Ncbd84d2f4Rd3fakri9ymubgFEchtXPrae4g4u8SiCfFYoXTmKhXeas4WtFEKhKYh3NHUPGVouTRXRfEh",
  "key3": "5MRqa7QDyZDKQCwAmWPfo37oj4AKFexMeC7dUjUsZDpoWx9r6YRHYEa7dzQRQyHsWEShESix87HSdrUeK6PWo6fP",
  "key4": "5pxtWZ5N5KpMTrqysjX45tumN2rpSTGW9vw2xUVCNAJAg7UZ9ewRSK7Pr9jUut2aFGYhyzs43wsmMaTNjaR95bB9",
  "key5": "GDUYAQ1aBVCacRhQPAJk7Pim91cFTeVZQAvsEUzspCPEQ2WiowREaGoNMuK65nkKP3VnWD7x4kVMCJh5zmDpjtJ",
  "key6": "3VS33NgTd46Gv951QFCQb1dHbrQUGEmgFy9JBzrYcSHYwTnmz2S1xwzvKm8bdVA26aRjSmpUyERvrxEBrbA2a3Ys",
  "key7": "5hYd3KY9a6d1YSYGudJcucV93FW1t2hLGFNtmRob2SsK52d6nVmyvEPaRsih8CQUNdkeecTmAQKymKBqhPPBXWPf",
  "key8": "eTdiWVPFt9mTaatbhnUksCTT3ZgWyK2GxU7N1tGEwSn2rrqgN4JSwcQLRRL5bNcVa7qRWCT2nQupBq3SbVGvE84",
  "key9": "D2ofNTZKTbt6rcsv3mYTSG9DZkUqQ9sZHPDuYmPmwqRg1ZZEHPPH2CfkexyVWjidiMeQfP353HUgj8CN2iJDaTd",
  "key10": "58EGtcVLvgH5mXwV8xUJm9XTrqoLGGksgVMWRKF51ZUc9ktxN475bcyA22ZCqFeTrPahmJbTfKjZhLh98Ksrh43B",
  "key11": "3tZSTADX8EBSv4LpRAeKcDKc4oCZbvSVqFGHfXagSfu9N6MnswEigg6GxRfJzNykDfqhbmnMy3G3wMSLjYU3Cecm",
  "key12": "8Rv6GGwWQZbU5akj6LPUaSCFrsUubJ8oiEHGEmYTcZvQ4AEana1oZKvS8kcsV5xh7jXPHJk8pgTzo4GjwiXZ5Dp",
  "key13": "5hEB9PneSAW8cHtKzSwYVkc1MAWcK2RPsUBK2fsoCMk8wJ912nyJ3UdNyUvbfbkeMN5KtdcvzQ43vjWJ59oD4epR",
  "key14": "3FDJaRULJZjZzrMBBQXEVnTq73N553K7PsL1BbnYASBzMYikJ49kzFxitLFpwPDSJojDzsGanh5nHWhNP3iUNxfL",
  "key15": "2beyHvt5rwK95jRM7DVmnzEbDJ4bxRLrxkodV2rdrNBZ6SfPTgodBZ57qYDjNcZTqUeDHTKzTFL8Q7gqgqpdQAiB",
  "key16": "vc8G2xBcmBYFdv8czq1BYLorHZoBqmtfXdQFSNJ57bpY9HYGoUQ59Bjyndv4svvd4jX5fPaTi46epNbEzR2CjS8",
  "key17": "5dWsn2jkJpzXxvfbXB4B7qZ8iquM6aj8UXNeA3E49RMrNszDnMwazcQpzihLkZiB591VNt2A7jsp4QswrTDXnx2n",
  "key18": "35JpBPJqmVuhZJmqyKiBGr3J4MZiQrwUQWNdBRGjHhezgCbrSgJWpmjwTuDNbJFNJ7SPskFU7gxnt4JBqb1PrWAm",
  "key19": "28ea2TnxeeBSzSgywjAATuiytZnr8Lk8jzXcstY2B8wakDoZ3P9xJugRxQRwPRkjWnaYMeeytnZeqWH8AgPWGgNA",
  "key20": "4yP8PgoZk8RdyTDBF9eKQhk12dgScnoHgJ7DHee8S64TjNmYUrxSvBTHSKt37yE8hZJsgVxSUT5q6yiKv1xEscPM",
  "key21": "5nKKbt3DqTrg2PoySjbmW3YfDSaps1EzNT2eTchhWVrr574kGPAAaFhZVF1dyVex3cJsbsHS2u9anTaQJuUGr1TD",
  "key22": "s39TFYpmTLhQRPtMjYE38rxvgBdSuSFRinwapEuPAoJaqRd6oKLiQxeccLCtZsr9SaewZ81NnUcDoVqCSHE7VHH",
  "key23": "2LXvhCKFhb77sd3ztLbCjTbbNrHf2W7EXxfY2yL6aydMCnA3ZarWSJupZSU4g4YqQ5UFwhPiTJRoXHVXDbopusWv",
  "key24": "2pg5x1bjcLfUN4yHJ8ZZiiAgjDhYgttKgDgDyC53i4FJxGUu26sozmTaHQP2Zo7i3Dxk5q16UJKojhMesvSjqcva",
  "key25": "2cL1m2VJYHHzRKjspopg2ZEq3wwpUZcq2XZYMaoxZ8uSumMmJcBgCG82VexAiLedkcXLEmPY7VAeCUbhBxEpw1gN",
  "key26": "3YNE2MFidKtG6Go1PD16djRM7QMmXWY7ZasnLW5dGhrDp2RkA6Q1uBXPvX9Kd5yBzsYc9ey9DQ9CgK2ApqZmNSQt",
  "key27": "4LmPm9gcicmNc3FuKU3m1LmzU3F3krgUeEVm1CoxVJHnfTf1LDPPZ1A26p7ogsBXWSLk24Cgf1okMvdjoD7SqAV",
  "key28": "5qmGCD6wgKeVENKtEvFbVovSJxMLy8msicSPCbqdX81pfVTDExA7faZuZvLsnW9MkSEhsSdX7jEPbnRLshPCdnsB",
  "key29": "399bG4uLrfQFBbcEE4jRX3iEKX3b8bSCHobiQ2jdCZc7FQ13rkPUKZHtXTpSE6p9qcd5GrUA5TNaEHaSiYa9CnLi",
  "key30": "4Rt3QpYNsuJ3NXMvkwud6cUuvUUU95Wtt1D1426SASNz7f48vfkAK7Hoxwny6WXs1paY1QbQB33NBErNYRZJmCBj"
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
