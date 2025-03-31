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
    "5HJNahnKJdJymCBbwDz7y3UUy9PqKFVG2EYPfmwNkwp38UydpzcdKRRoTjvNyfBMqNR9cVNyuftCi6qMWQKRz1Je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o9bxEqK13bsxcYfWAWCtq8LPzEq6ErgKAj2epGEnZxZfugnHYneNZFvQ1nWWy2uywgeuZQVw4EqrtH2K9Ga85w",
  "key1": "34V1CHqD2ozwTK3aFyoJt2dwyoCccvTMqV988o9nQcVA4X29qwrgED4fJkudedwcLZh8JJhh1AFSAALCBuosGCmD",
  "key2": "4Rf6n8nhVvjstn8uziKsFSNYa3z1etbaERExBgL5LBaNFYtvTa9V4quRdXirJYkrcAGXYdJ3JMuDcm2v7onESZ8p",
  "key3": "2SJvXf2MzKj6nWhHNnddoufuSHYUhzKZiPf17BfnrVqxXf6KjnunJ3i3ixtszJKV6DePKY7xsdSMSjaYiPH2tcYY",
  "key4": "iAwJe7H4vvVtucYFPaxLyTM7nJNxSkvfAYHQRauff57DveTUcEWfEJwCZJxPsQAxTfA5n39CoSjxdkxfPSiCoQU",
  "key5": "2xbBpf1GsgmDgF2XfCLL4eiXt2oVDcxTbTuu9n6buTF7NCk3QRa7FFAFxs39m2n5qRBosuN8J8wcXsj7ZKJyNcmP",
  "key6": "2JF69mg5YTVgX72mNkuj5iVBqXtYcix7Wj9irKeHbFZ2iHQ8ysWuQMG5qGRJzJkzKhyG9JyF66QdejeKpVo7BhVw",
  "key7": "4y1mELCqAnCggmfmLFWCKXWm4rB99B2an8Aj5rL3aWPgMrp9YTrTguSo8BKW4LotC16jZn7L3PXk1xZV4wt7zcc2",
  "key8": "2K6u3xLzUtUNVbp4HfpQzy3JFdhcNwH8bCN4TrEsxePbQGwBjiXdSTw9iksGW4r8PvoQFBYAwXeRnhaFzhdQEJYH",
  "key9": "4JLBBgjNqEgA52goCWmNdBsjubDkG3Mhf94wjXi388ahKDhsXeoyUL4L9wZyvQAc6qYs7ePpdZfLQmSgyAcedifj",
  "key10": "4UGmnno1xs6yEnSRqPSeBP8xDayNyoa8ZYkKtJcoxpUfWa4vRoTyFntZhi4RdjxWp9sWcEEVG8Ag1Fy6NVzdNiQk",
  "key11": "WtbjcGiVJRz1aVhDoX7z6BDMRWdjNvsTigJ1L7fWcTpfwzBMF9A5uebTjQBP5VVvD4x97oUbE19iTTuHmUeMeaw",
  "key12": "5ScSaJftFEMReZdLkdWxipFF6jaXCh38Pse4Dem71vugJWRB98YY7oAb86JXFz2u6dXVyrMXnaFH3WAhQkGX3xww",
  "key13": "WoriEsG61mnJySUibDXZoV3JPjZC67YjwZ4yUp29vvG321VCtSYDJQUZShU4dW96NfXr2W5T6tAkBS2K4Hkb5BY",
  "key14": "5WrG1Yw2s42xJYJJ3QXgsX4ZzycAK3sVKsMEwUT9Rysc9aQEJUiwZ6wraajuV6eYhQLAeXK4PkK22q1BNGUXkhKC",
  "key15": "4kRzh4yqLAxjH3J3AJcFTZViJ1NgpQ9GMaoYEdjFegtXfYYG49TTpPtqN4QyVwyQmxKmAk7ob9ztK3rvRYBD1FWd",
  "key16": "4ipQPgGTXUxiNGzgvxHmjkTFLEjTMUjRdHkpZWRbjsid5hDwAs1KE2CnvMUgFC9wYKAyEPueBX3kLEF1U9seJUUu",
  "key17": "2pg7cmK976wZRWHcYE8Lc1Cv2od3SBatz5Hg3bVjkQoXPM6xF2fvmbDBcNfTJzhqTBzP3kZqX5VkJnSt2MiSKeBt",
  "key18": "4WrG6R9D1SFmimJKRJpLqN3aMXGMFvpSHDbC4yEMcdL3mafkZRMj1j6efhq8wiWR6F1hA7xmtA8mbULdHk4hKaGr",
  "key19": "2XpBcLPmSQuHYwziDcpHeSDPbS6nQMze566Nkm2a1PA5Bx1sXMwoMBpH7VKsar4r7L3zJJbg8my6NLf9pfnZZQoJ",
  "key20": "E4vFjbpBjE7otwTgka3FGvGgc145YejMKvrWT4ea2iTZ9p6X5cZQ8pcHvkND83yjmhf1aN2h6aUtY5bVjimmeGQ",
  "key21": "3t2nvLPrgQmAQr5Lybajh6Z76ZuBa2MEy4AgDAKsjrkizo5faweqpqLPYv25cB95CiMrRkQZxgiDA8QTgXwUWaV5",
  "key22": "2ykKr41BZf67fwhLie1jyR9sQDs9QEDFHZfpvEp5GAmjdc7y6zreHzP3XdRhDQ689Ggfy27bS7pKfBx5Qn5Qnwv9",
  "key23": "5ycuBK6ityAjDz8cAG46mcChVgpEo836TyDJudb7wmFznXZtR4nkXZcns8VDyGigcR8yg4dWDmw9yY2y6LM4Eyxp",
  "key24": "4nXuASyyaeQp8b1AXEZPsqM3cJKWMW6xTFyRWWQTSW6rZC6ZLo95mHRyEwXCAfHt2bRQmSbFpkdStFRgUc5gtX42",
  "key25": "pssxvMdVY6sSTbzyp1TR1AmRN71SiBwHNDNXX3MSVcDht9MtAdrMTpk9okVk13DXsKhKHvyvyNx9q5MNBp2u5av",
  "key26": "3HjpkvTxMUmBusQXhtTFhrMhpW5t2AGy5CwWs26koJJYVVXfvZsZR9L5hVD6wMNzru6sJie8fiQZMprU9GyvXtXH",
  "key27": "4ezXaa8cHV3QeknkCUpEvPrXtbUPoTsAoeswbeXjSnAZpgNfZ99DookfN3414BgDBPuJn4d9UaK7mSt87h4DCmWz",
  "key28": "3xM6gnyd1eW7bQNQ9xLtY3d1ikXgbchmY8rENcfohjdDYeLYqF8Q8UxpY7fz9YWty3BkNQvQoeyDrM9rbagM5CJY",
  "key29": "5Z7wDGsaQJLK5CjYGYhqMWVvdsx1nu4qTL5q8y5eXeVWYVn367vUgfEZ4ir6r2P5ioeyi3HCYSxWH9QFJBNgJLzu",
  "key30": "4mMhbtF5xENdHyBc3VqaVivJCsYV98T5cVPoAw2hCU3HG127TGyNE4HyNzAqV9oBXvvrYFGv1MscKg5zHipssMQS",
  "key31": "59b93gTc2pxrWNdsEsaHVFwA3e1akvpwUz87iEsxUfAD4hZy8MyLtJ5GmbkobJdVvJRWnVN6ZcvQ8ctBReLCX2th",
  "key32": "3xLNTXjGX4WCkjgbWHLRGR54H6Fs4EUSgUdE8AF9ZEDBpwyU7wHyxLupakzcp68YFVNFzFqM9L9fLD5f4aXQZFUm",
  "key33": "3s1qXAv63HdHtBFrt2LPYHXZ5TJ1hBypv279TrLfhvziqb1mpjzTF5yztSuWvcK8z88JJcJabFRQrf3Cbg8KJybh",
  "key34": "faSkRAaY7qTzuDD6Rb7L1XDLhV4ccWtRLfPy3aFSXyBq87K6PJRsz73td5BK5HqMo3VZDZmwxGPKbkSYfPoTvFR",
  "key35": "3ix6Nd6U6tJ4G1wASkSDqKjVktUvEv2ePoBnLzk68XzWdRt7khQ3vQFEuCBnm1ghbiDSQdNhhdrb7bD1xY5TkWCN",
  "key36": "6299EQhvgeUa5gNJdjWH1VDoTtYVDt14LXKaiQUVdDPikfwE3gRGjWjUN8a9ycdAD7x27xkbLEQQQNZKapACBxoy",
  "key37": "5YDtuwTSY3GRkfHrGWtLrWoDjip4WEn46TjyZKCEM4d3cRumTaPAiFeRE6kTDR9aqMPCk7hjsRLfE6UQ2p1jq2BG",
  "key38": "4wMaG94sJGBxqA6CesmSdLPfGDUCgR1AMvLPg8rZGuBbquW4FQYdoroxiLbZ6dkkanXBpLJTE53AJRgx49vhcZ25",
  "key39": "4dJs4mMU9NyFETAiDadScU9kGBLDC34WiUYojuQH9Gt5QK7Axuvh33wSFGTjJtvspV8i6rQymtGAi5KnFR1g1fv6",
  "key40": "KirxoERKxWGVs5vKEY5bALYrjWkX8NEebp3xTCz4112DLcgwWWEcQtsxR3ZpjH6M8bTnE8bVJLJMw5TKyWG7eNV"
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
