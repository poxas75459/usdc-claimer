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
    "27aEwv5yts31ejbQM3Z9Qrt4PVrWjHGP4saJCuCS4M6k2a39xhpE7Sv73BXZtkZa5rjdQWykwB3EnZZEwq9QS5FF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vt4LtkjAbCkqWV2G9DxyskrPWFjvv96tw6TTZKz4ssFGjBS7WtK59qqDTxtSXnEpT9e6apoREmAEmSVbXhySJ1r",
  "key1": "3oVqeFWWZAmnBF2thZhEWFSrVj8rP4McpPc9xsm43ctK4WsCsRDcF4GTjS5gi86ZxtPjuPodVWhTU9M8BPBaQJPm",
  "key2": "33HsqNjae3N4qR3NgAJi3346V1WtDKLp9nkbnCmGDKjfnzzRsMDew78Y2DhK4qeVtXiL6fc4UHcJDLfUj2hnAdKo",
  "key3": "54KZ59omhZPRw9TkGm1y8SawtFztgiRUTpc1i6m3qgUK9squAhgxu8cPa7qCdhRvScQDF59BTt853xjz5rTtGMFs",
  "key4": "2oLv491bhks8AyH8xfzRvRdJsszDCYEMM7oMuzmvVTGZrUzTfKTZfe8kwvWCGTy9KAM69C8VCGowzin5PzT3gTCR",
  "key5": "2cafhSPWFcxnTZfMZ11wrgBSDciQzHnhKcTKxR73zWfyfhDHc5uFVvcgo5YkYQ7u5uPnp6JW9PNVGMPgzzyhQ6eH",
  "key6": "4yrapUyo8in2mvjzfEQqtXCDF36a4ngYTm22m9Fekmnn64CB7Bn63su3CJeXbN51BKxKLmihVFD8GreM5dHUoKta",
  "key7": "2TMR28d9UcLQWoFcpLNMhMEQGtcfz6oxZxgrNbM7K5jgbyVENRLtyW5aHG2WCp4oqhaCkjLp8xyE1m2qpXK9BJKi",
  "key8": "CJgjaJePNaYNYAP6nddfTyq3LaEw2ymqufJRTnEkBG9auq9zL12HDT2B8Dypo7ceM11CRR65wsJQbGEbRZFTYrc",
  "key9": "5rM76nLfvPgHk8zEehG19bqsEmEFJNLJSbXCzRcRbqXFcX4nkQNA5M9wyQZVGdfcyWJspfpko8DxR2Gw8mt15pPY",
  "key10": "4tZWmepZ2i4DkarupryhspRr4HAueVr2E63WbXvPVdxHyT8t9QXJVQ9D9UwKXYTXho4Erukv9bcQziXFrFX9ixG8",
  "key11": "5vhdvVW2sa4BFpDyoL63cNZh5zbhuRyGf3zikwxmSXfuWGtL46nuQM8GGrjJbHYhQBEnWyKeXXAE5Y9oeGm6Fbr1",
  "key12": "5GkGUAzoM3o5cDNMKSqRS1BZM8j3SQWtQRCYwzQG33zdKFAowUE8QAzav2FduxXXiqcpBxCA4rnm3oq6VqkLWLez",
  "key13": "2Qe882GeGWmSNMuTTasJgDDBuz9wwkcMDwahtDDHDYKUH1RAyRLLHe7fGBnUmFXRJXVNHXWNP9p2CFSewnWn8n7d",
  "key14": "4oFAdgRd7kiL7pYWgftYrLo4zZrJs1Hjz8hGCXAbvi71YEHTrkHJgK6SVCH8FctC1mT7VZBUYAukbqhHxdZJfBdq",
  "key15": "62BSfdFhmJua2KLsHaXspaQvLzPoaCpaehbeaNtqPZVBmantLB9U1Tu8ZuW3rT5E9VurL4jj4fY7u8rNQKDofruF",
  "key16": "3fLAvaip36kCg2xsocVMsiG23nHzd4s8zZkrRP5EUZv4bi6uvdYXUPMvkqH6mcqXRAkFpV2EWyLXtpxuLmgwsfLu",
  "key17": "2Ja7PicHbjBssjxsPoRYcsLiJ2Gt1h4HN59zEhdALCUpqm5Lq4GB5kV1tm6FmLCTQujMJozogb98DB2qzfnkmyzn",
  "key18": "5E5ykzvpuBqETzP5HpYDipG4yxzSi6PQBvMF3zxiiT4kCJPgvos9aMNadDBh4zAaVAxX5N877GrWS9s4iSgiNmbZ",
  "key19": "4Z7x2KoV77XTyoQ3MVix17635JytswquKn7EsN2jYbFUraDfZGAa5JCQccGwnVb48KFCuQYYFxtLAiSkCFSMEBkw",
  "key20": "5uBM9ZnaFKSQQd916va3U4TfQhQtWR6cC8jDyPWZrsb4DAWTcbgptXt7q4uFvci72FpSM5X4tDcMQwF8QdAr2WBA",
  "key21": "5tPc25ggSYNDqi3x7SKM5yeeXBV6vNS5KQn5AvoqeensCyxU7cqRKNhw2sxy4CizcVTM3kttRXeQEMV1fcksPnMC",
  "key22": "go7ZPbr3Ab8Vuwd4eCwAk59EW5WUENiqb66gfBAEQNtr9qvMhbyf9QaHHZCzQTBry9Dq7Tm2Fp1RSAGG5k7dwGp",
  "key23": "35Cfnsf46zgRrKJfoEe21sLQNzh5QkPrcQhSjKrk8bz82prz4QvpVzSHX2Ur2vF4vx1ANzWLGqWtBfxuDUCW4BTj",
  "key24": "2XCDU9yvamVxkGrdZw6icMukMaitHGPSLV5ASeif63SpVyLPCELrKRXBor5HFXx61ix5oMYK5XpEdpdR3hompLzx",
  "key25": "2yVBWPzrzbCW4g9y77XeyCeBfVg5ShppHkz3yZz1DQ5LTVcyXhbJETw1mresbZ7ws4YxEUeaM8X1MR1BcYzJTaVP",
  "key26": "3VswAEzPxGsWPQXmGhE5cZjSg59ykBUy5X243D1KuWgUiHbYCALjWQjfFqhKZLfGe8d81j7GiUfsvRMW7m7zuhzH",
  "key27": "2vGbohfk7MGhYm9zK7DPGMZXZdgCigT4edtSBkmKWEj2ACquCUpSuUw5P4CmUxDAEccz5McWmQxWtTfhnfHpAF7b",
  "key28": "3M5J572Yn6qMep1ZTQRR6E9Sf8vjGSPxANLcerAEeR4sHAcLsbGGHMxmNZndiMVpKBp84c2maqr8YLbnS44XRrCQ",
  "key29": "3KS4VWcgNQGNuPT4TsA8JDavxdnsJ78AAoXsodxubMMKggQW9AGwd14mbeKsoXD4rAVy51wDD7Yc7G5urWwz9eHW",
  "key30": "54tVAK78XgDBuRk42S86tzC5hsfrNpaLhmMK6mNa4rw88qBhMy6FJh1wFjnKbM8bdL5LPPU8RV3v3UpmFWJ2S5XE",
  "key31": "2KYHGSfRmZMFT92XkzxwGVGM4kxBvAcFmATqUFawCn4ntmZWHA5vcsJ2fMXPPZJWaKVsdCgpUH94brn8sHdy78Gj",
  "key32": "5PoLyjVYte8NzWvTcztVS544CpivnJK9vxvCeXKk1XGty7K8wL4fThPcQHvQxmAqHMiFJY7JEDVEVr2e1F9zuwJU",
  "key33": "61Bie87wbsrDPNaHFoJxJPU8M8dAsmpiS6xmBwHJSAX1bdrSTXoyGQ5kTfjnCLCc9tj3UUsgChFpEZXRcwGni72t",
  "key34": "3YpbkjPE2GmTPABvhUBCBaw7AtkK29SKAFTgtmZARypZhbzq7D74PXsM3fbgxt2jTC5231tqvXrFuR9vwbgTF7xL",
  "key35": "3FQQE1MM5wrywru6pw4pMnkAC4dUVerHEa3aMs5A9wma9AG9kAfQkLLXEyZCBvQy57xdr2VzWHmdBDc983QE515U",
  "key36": "4pAK4haX3vtsKnNexg8TH3W1GDrTtR8P3x6rJ7LKNQqXPo4SEGX1rswuZuxt3qAQWibVL3viLaKfcEYkx3ExCLk8",
  "key37": "34UHBZwSHhBFry2ryHfguANKXGiTfEpwqaVoMgfuF4yxcpK3wyzWpbw7aM2Hxw2ywwKSgPfiFeKyDMZ7qMu9eL45",
  "key38": "34K8QR7sANULEy5EM8CPLTVvkJrRmeBh441hUqps8ukahYLJSVPwqm26J4yuPpXgLNea5ZhCWEyfphqGGnqZ2eNM",
  "key39": "2j9ScNnLPSpa8yQcbgJcK6fACpucTiQNTgy3wndiFSavCb2pZRTU4r62oZTGxTbSSrHCjNZJE3gqY8JyvZHGqhLu",
  "key40": "4YV68Cr5FeLSvVXqLDebQYD9ikEfUqA7dULhL1GbADfaCqC7va2HJvhPYPeRv7rRacSzswfm3f919ZtWPifaPfPR",
  "key41": "3qQABDVx5AYUPWYUVhVNGPwpkoYEKRdRsZrv6Ma72Ko31j5xXA8pxejB19pXHBhpTzK6eLxLVs8uerMVDDca7U6u",
  "key42": "4A3jCc2kX5pQ5r6ox9RJZJkWoxTY2rYJNU1GehDbPdkUa5HZHak1o2aLiV6orQuvWp8pL3KYb19YfmrudrhZU3gS",
  "key43": "4roYrycu9m8tAeVma2XaNdaFVRzYSX6g9kusbsbH14ghSDv2ZXxHvCJtND7L6pW3v3JV6oQHUoGrFd7Cronau8bP"
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
