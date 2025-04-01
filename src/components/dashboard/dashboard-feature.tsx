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
    "2pBmf4jPDoW7Vaj7KQtYcXg5nkCV5MkhrTJfnUKCR1vB81NMhc6VXqMx8nqLXADYLBMqtMWrKy3JSfoY1RNzfvQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W3uJw8VZHUktd2z9uukZLKpDKYSt1VUUiscjd29i7ryoetHnKPiWPTixqVFVE1EtLKtVjF1jYydsYFYGjtAQfH7",
  "key1": "4gmuhM6i8amsqa1UFuw9BLKCwy662fczTvkxNmK9xQN56VzBYiFFtmJpkY9RPqNXJdp88gLxwEqn5qW2GmJuFvDA",
  "key2": "2hosPNzHpEEkQJ3Yju27bjC3p3iFwEfnCfuYKxHPDPjNH84bfbbbUTYANYXoi9Hf4RWtqiQ5tSy4jZPxJZjo8LA3",
  "key3": "D1mtvN2Jg1P46v7b7ZLMA2EpH1yRZfsJtFSurcffzzN7imhRjC9B9m9WBmRpFmK3TZ5mUvQNTATx3ZGsewFbWoz",
  "key4": "4uDe7xkLWhynabbud6rfk7WKyknXtry2RXqiLSUekWtPwDB5njeDgMRGe8zDHFwNeP9iNQRHuhorSbHGnpHhUDMS",
  "key5": "2UB5FTEN7yuHE83VRfmXdGy3Mie9iLUMjsE2hTcXAoG3KV1TXtFfK6cdKBJfdv6kV8VQc5KhhMKJvggSns98xeE5",
  "key6": "4Em1VjwcHhwVBZhnsnP2pyC3WQhNoDkq7rMnyK1BSu5bZnpxt1iHnRL5PA829oZQdqFtivSTriv9NcWjidRfP1rB",
  "key7": "4gSqKPZA4oDoq1xTqQRuaUFjYmVHJNseAKJy1M61ZdeaEADXFhfNX2EorAsfNYfC6zZSE39CaKinnAioBsuM7YTj",
  "key8": "6tnoH2nMrbEw1Rxhrtz12A5Vpci3MBoBLXqhtQjiJn3YPSDmuAReHRTBZubJPavrMrBqdQ2gMZEbz49SV6jQqWH",
  "key9": "5athWjnSkjUU6KUya9kok3tqDP7Gz2pvTJNsj1iopfPmTJyqPxG6iRxERwAxJgoEhrXquCwjZpcXMLxs3QEvoL51",
  "key10": "2rgAvg2QpYqQ1cLgjDi7H2PjWhosZKm5HXXV8hQmA7LhDmFgWEY6PnkkzaTPQsUekLwPhcufqoGC26WNqr5DhAtq",
  "key11": "2W414hJY8k1LMmV9BRsUH2Qn9iaFyyZxtgfS8jNoHsQeQ6E5twjv625oe1EPbGkALYKTjGrTtBX1dZsXZfdPg2FC",
  "key12": "3ubkWPCi6RRWJPWWSti8zqNRJjWD8NLVqzFBtpKfvCk9n9ALpSfrLeipoFrdrTfAebX4HehvLEcxkNLt3fRHsZWj",
  "key13": "4XDg8yfUy9QsWeYGZSL9XYnLuK6VGMy8mkTLL1osrrR24AjK3ntnHwmeHh7HGRKA3XX5FvZkqeiBFTs2X5w6ifgU",
  "key14": "4yFFq8HDhq9TghJwtYQMQCx1zGQDruLDn9SuXZzmphkkEfZBgfd3S4tjZtAC7fRJ5PR5nv2SRQXRuwxcBLae8oyn",
  "key15": "4QP8vQuYv7wqdFdS7CMZzH2dGGbGFMCHftBGTZ3baHNcJ3eA7KHuzmy4cc6HYuAcVJiGAyVD12kYFFdhJYP7vA4K",
  "key16": "2foRbpKr3U65et6hZgjwA9PE5BYmWFQ8eKtQ5jA1PADofzGMY3xVKY5NaxzYW3vuVeTep1jK5hEtWAqhAnbVHBJL",
  "key17": "ve2akddzeDdbzBZkdRUjBFuXLujCyjWAToee49nUJb9sgiuNwvn8Df5wSfXhhrsJMvy6Y2dhcgQqex21F4a3Dsg",
  "key18": "625A69gAkpgVXPqcQCWaqJqEevwdD46XYR5U6vdjv93CaQrdg6kRoDDGAQEx9yDte4Z834uVuFYXNuw8Q8SWtC3H",
  "key19": "47VxNGacJGyQm1fTWDwkcpzFGjiroe8ih46Mgryb4GcfgqMQWkkemHGkQNQMgyMuXoD21YesWxnyJRJSnS4gcWdw",
  "key20": "4i9vr7JNUCpvmbQacfKUcN5pYH6w2DmDe5tbDdfzHevaxA8Gth4Qksz7WLX1vgJdjn8UfUZjMSsVe4ABta5yUuu7",
  "key21": "ZFXKu5y32qeDVUN1M2NMfwzkLNVGTGFX3hyCSLmhLfG8FGtJukPNDqgemwNtBSnSFEGpU9KpXHw9qYfTm76S3L8",
  "key22": "4RciCALvJ9DNC7y4V8xAKr4Z9sVvMvMvwkNj9aBPXTxGEH4BkiUQthDC58QpiyuEghSB7WhT41Ph5KYEWkbZq7jy",
  "key23": "vAPYYMQ5EChyXS4mt5Rda8eQ5DpcJThoeydwHmrUPBywG63Bt5ndnhM35BKnEcqVh9vh3hgi14qVAegBGEUsKux",
  "key24": "2YGqCZZoWty9rWM1YoY4trtD5DQZCeKRQDrcru38E4HLrQGrd7HVJAkPe7fPvqHoTocYgWCHyANAMB31JQ4TtAo3",
  "key25": "26FLJ5swZKSUK2DsATr5NEjrAaTNdARfaxwmcwzZLvvWV2BB2XYZFQCsHksQCUPSDcn5rwEVzmbEiut9vAeLyoDP",
  "key26": "4XMHgbtyoSP45wzk7HdzwwVAoBa4yDEfEHr5Q6dTnSL7ESHkZ51cMZLanVjwpQ9jQanV9idtYyaAq1WF5qPifu9o",
  "key27": "wNsd82PjjdywivSdt3UmYHDtuV6DbcWfj9ZZ2ZykfMzPFSj78CkXeEPHhrVRJYBTcpFKTngaQQikKQB3Fm2gSiA",
  "key28": "ztzbj4u65jqMBNEaEM4mFEYrnd91vX3RwTfTjZcCdyFBsjfGxoPZwnVSADstFHMtC84ZzshEU8GrgMmsbwRVXak",
  "key29": "MKFM7zFQwsQsGuTGd9JJ5DdtcVovZua3XNndr1MzZ1UZGDKFd7aJjzMqD3RCdYWFhu7ZVXybh91q1TUWcQURZ1E",
  "key30": "qGxmSpvVCKLwSEvHnM22M5j4tVcLN94uMbCWLCBfrPp5GXruNyz2Pe4AA8qr8t6AG1JS3cQMCJnLEgFe3bow7yH"
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
