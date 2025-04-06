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
    "4znURc36eSjB2HUebbdqxckVrc84ULm4RcF1ipStWUxcuw2p2RdU6bnbpU8wDfLRXQi6bTkZJeTucdzSnTYVBTwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a3HLYeMf5zd2QhqgJdTD6VYS5ZTkFt6crMjRBhbGKYEcRbF7HXkf1onz2NfkjgFq7KQjWB2RuzoUYHebZSQnL1k",
  "key1": "2h13xPheGDAB3tMnpj8fRrED1Fx68NmxUj7Wn8imHKRaLhzNX23x1TFRn6ZCMyP266EzTycvYZ1PaBPDfWVH4TRY",
  "key2": "3sQVJktBPdSaCPAa8ReNKFHpg6nCTAGs4X8EZ5cUXmvvGKGmRcrR2V1h622M3VfRsFv7od6dBPtwsy2WbEX1CeZg",
  "key3": "5gbqTr2htfrfDjCyVi9kus7zBmE4vcKanuXAQP1FA7M95Gg8Dr1eWNqZVuW3TwefTgHcmYQNV1vnR5dBYiyZHAWW",
  "key4": "5TyKLf3RUXytmhqtMba6CCKX6TzakEazKHXWhPwkrQ9PjAsyqmi24LYHtktQ2kcuRYneQtc9eE9GPSXUbSG8HLWs",
  "key5": "hVgZLB11UdfEpS8CJEiFcJozPCHmdCxU3PYzbt4LCspuh4NnwcnvAn5xxowBPGPP8QXgabad7Guasx3g6ZLqKfh",
  "key6": "4At8wqGT8TDKCtPXGQom3oQrf59j8qxJstXedQjBa7KwcqUNvj6QiFfnjQ39fXzUhTvVcroCP2TBVFDCHj3JxH5i",
  "key7": "2XtawyGTWVro7W847aTHCENDM2RXFM9rnLAxHrD6YsRoMXpYceXTgGPZzmytYS8B8dP6PuQLFWSRAD6Uq53Wn7od",
  "key8": "39jPqPnPatiR8UKKpBeUxsTwzJA6UPwDUqH1QdTP9yY7R2LUkf7CMDEzebv6MQyi8csVPVz63Q5wm7tm5noCBR3t",
  "key9": "2cQBhDQQiJaWUK3NsFUTAnoJYrsFKNBkSrLzTTcoAWQVrJX6mkCx7JbLnGKDwqGrbBnwXdXNUaWiwZP71f9hT5Ug",
  "key10": "5f9Yz7znYH5Rhj72gpWaoKwUiDXuTke46ceab3JuZcnBza3gJTzqNijCg5mRDxn2owa58tyBYQ4B6TCGB13f8X6H",
  "key11": "5R2Vr1GevJZ9a5nSXwdxRPndcuTXkxEfL4D4PwgEV98BARqNEB3vm3yqHcwjB8eLdbW4ayin5Qvt92kiDGRYDrHt",
  "key12": "4Dpe5cTCnCcJqUmUNYoo8FE1UCTbUM3wAQL9Mp3CiYGQHFunrWi13XwXGRCdakRg51j9WK3r81aGXvnk8aAAbiR7",
  "key13": "5SzjgybUZmpYShZUfZZVSnGk914FLzfk46Dj3nYQ8ker793pRdmR7yzHpz7LKH6A5dy8tciqFLouj9KZqQg4pny6",
  "key14": "SGjmas9ThEDxv2kDGKHQJG6Sk9C5cdRkWM3gbEwQcvyNz8UJhzhmfCjD8ayMGR94NqJ8eiLo2PdLR3E3gFeYwPU",
  "key15": "2xgFrE5z5VhqvX5tvDafNdyrFrUYEAVFopM8UDVR3DmoJh4mdRcGWpFyK68uwpbDr77Jf2tTk33swCHrmkFH72ay",
  "key16": "2Epreh2MaEwiLDGYEHoXgaNFhZFkoLLMVL1sHzBB5hSekHhjyCmWVD2W6hFrPiAyLZbzceRucWiCyQuiVaqdaZW6",
  "key17": "5m1DiwHVxr9tC8VvJN4MWgqkeTuvEN7PevhQsNuPppVb1LRqm79iqePPPPfpP5pTLh5mBsjcs7aTzYq8H92JawXt",
  "key18": "4omo9JMyShJXH6hfzTXFZaNUz41Bmwqm5thh5e1U4UnLjgeSvMLy4VnHreBWQxbFRhjJoB7wqt54rpkiiSRjZTmc",
  "key19": "2nUFk3k987PBCZUJMNFXPSQnCMcMqg25kuVRNJxKRfacwJ4rCcbghBbv6NnabLZRKbwwcqu7JdG9GQMoYxmao43i",
  "key20": "2U6uzkodzbf4GLVKqdgp1TtiMydrbS3DKoSUisDpEiFJwmjacD3c9wuVRJNNtwMacWnsorrmKRTo5KXQU64e8NM8",
  "key21": "295qN3CJFv7w9FjnL23VxUmvY1AwRgFSLk4kbG1mpiHaDJmspXn29CWYoaGtBfZU8BjFwxRkRfk38SQTPqJwXMe3",
  "key22": "3XreHYdupmiobnLfu7JLdZoDGmMhrBZXruYqAezhrcgqNzeJE7SjT8DF7X38iGpAx28WeYAtK9BBXCgB3fu6A9em",
  "key23": "2WopjZTmQ8znBkduv48Vn4MmLyMHvaeXbitNW8JP182aiWPDeBBzddtdtG2eJ4PUKcQqN4LWHxeYiT18dPL3RYr5",
  "key24": "2SeQutQSe7qomxmk2eaUzsWGXgKxG7u8WThZNLuAgC1AvyNjxMtDDRLtrruyhHF5zBqkaLLsSBDQC3mQAUhcczWe",
  "key25": "26DH9jdJ2EVDkKt39kvFJdYJpDamnDUgFnBKccQGKBkBSq5rmbYGaLxmNTjtzUMQCkzGHD5S6mUj9RCbsRhgiNRa",
  "key26": "4yJsZepLpk7XWYrFeZ5oLCXFP9u8j5qQUkW6XWp7uEVzQmXusPfJ4kNyTtN1UXSTiHbWqXCk52Rf1T9P82fgTtHU",
  "key27": "5RZh8wW7m4E8Mrf3kQ9UMMZLsREmu2egyY5xYJo49p3XUxAtKriN47KJLA1XmLTWhHDbuTPjrq9ZgAg9AqEdZfPd",
  "key28": "39V6jwJMd9BYyDwq2DNJbbQ5ZN82tLDTKM4UXeFLb8viuBZhKC5FJfYisY2SMJziSzhfpZLzKYTR2waqiZxMJ1fX",
  "key29": "44pgAeN4sYLobsYiP7jy1EkgYwzR4TgdytQMtyaYSp96Mwi8pbvAQ9Ysh5UjYJbtF2ohAkGj8LAdyU1rZYGsBqFy",
  "key30": "3vQFG9RZ8kngNYUZ62bVf9v9p9AY1E8bC2tqT3HFVsnLAXAi5XU83xFH4MDW7jWcrCGE5AhuRQtfANndfX7itCuZ",
  "key31": "3gE97FDvCY55frPBhgHzomKd7NXthP6PboWT3YT3QtBcLJ5wgyQGm3YKK69oM6JN11Hshsu1svZbEkkgV2oS484e",
  "key32": "3tFRb1pUBZXnNyvY9viCkk6h17GyS4xRRGk8dQa1c25N9b4kawvkoGvdUZ7CFfWFWm9DAKTeu5UxMSfdFKyrSpsX",
  "key33": "2u13hGV3rXAaSnhf9WUSnpqEjn5KHaVB4AYudDqMwHLjBB8aNoDzUPggWsm7ng49fz6zNC6hgZkmtpBYiJUYtsAn",
  "key34": "HD83di4QqxPu11kH86WGpXfTHVqmGiYQ7HJnryaX3LU7FCZkAydeWHZo1UdsuPc4EM9jTxMguWyNvP8DUJwQW43",
  "key35": "qsBLqrgabidJEjnSmdpTEDfdJ7PpEC8HtQmzdWPp4sL9BMrCAv3emH6gEpaP6HvGpGSPGciUJdaGLenziq9CXKs",
  "key36": "2ZFmscnzJoTPGXuq6niBMRYKaa1QaQgiL3i4d2tHQg9anxPGcHMdwv8ypwiyZ88pxBgD2bx5jp8eTXFx4LgwuGC9",
  "key37": "eg82JibZf4CWvJN9uw614ApXnPU6TNRYqZoa1uAbKAbQzJyWcdxxamkU7EPTTnmT7TyrtjfMHmqYsKVUagZYqxt",
  "key38": "5Fj6rKjWDh8g58SFQBSuAMSTQUCUxx4dx1Hf4soHcS4ukSkVMC3tiwTcZnFUMAC7ZGNSL8FMfuGnUfBKeWYQBU43",
  "key39": "5ErCTvRyju4eU9b8Qq6HAFtDP2s7Pwc2pv2xqBNsmZaKD33GRScVepENvmUXJXGdmi38MWnHi2238emF3haD2GPU",
  "key40": "AZJr2JH7t82weKuGh5qrpfLmzp21bkkyQn2oMofxQQx66rXYo66oVgKYBVYMusZ55tWcGowZSgeT19fGX4T4zSk",
  "key41": "4cH5rEnpebGREMpCJ3roGyKjjF342BWkaBB8FSXWJWVs32AnnKPJkJ5pMNLxShfQMhFXjiMpEGJ9q4Qe8isK3XQk",
  "key42": "46bjeE7j3cCgDAyhVbn6artvDAtwbvqqxG8onBb77unMftMvK8HPeXFFhcgPusMz6VeRDdL9AyimcB5wFzVBPhdE",
  "key43": "3xst74vRc3qzw6jHZMJzUyzBeLijDBiD7W5jSGrnipzyKTCJWqnQKLh6ypuWUWiHbYvTJX8TfbneJDkznbNyPfHC",
  "key44": "4g5M1Y6Ca9AqkX1jzGqfUh4NWZ53kY2hwLFEbLCPgHp74uwak4ddnhgGT1kfKb3tCpaDYfyMexGBgDT9mkk9Nty8",
  "key45": "qZsUmuAtvFZ3fLcEg4NPPi1MMR2YLr4Bxovb9ud5A98XsqiKAghDonuLMj3jhW4GQhxtv3TiMNUxYa1RMNDZ3mg",
  "key46": "5JKwJc5baoxtgV94NxZCH47ZRreiwN2f6sBriX2bmg6KUwvBanfksrQuQEwGYSLQsKRY18ukLgQAdCuXCxNcMMuL",
  "key47": "65UMwd6SK1fo6JDYRzDSkvCGJZFgbgTVuVGcCsMmywpVRbVPhu1goGbWHdB643wS4U7GPkGYjH2Y5JCh8wy2gf1o",
  "key48": "3UywyxSEA51A1AtyNVBjXYNgh6tLyREwz6MvJiF2DMgabNZaTTzVqKMd6yBjU9oW3gAyaQmm7VT3m65a6y8Nyqfe",
  "key49": "4GDpp1TqiHB2UtXbP7AvkoVFqkjZevDh8HUgm73HynYaNsUhzmcAriaT1zjqrHvXFY9rkhJnJzdESRGiFeiyjAXR"
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
