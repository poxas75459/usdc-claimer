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
    "b12CupwJxWMWywJtHcat6cpsUy4CNtuMYpjNF4SwkgUhz2PHg2iBFXvimbf4vPjp7cutxBbg2Pjzvr3b7Seoa34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d83L1mToPXCAZLmCNvSrNM6sZcpRhFpRnwubTz6P1Q5ZW16mCEo3BYYszwmyATnBQpwa1PiSJJ5QQ4LW7htDKwc",
  "key1": "5rQpYePErRNnqHmirbW5MkDTAD6oWeW9M4gaAenqRXNDV6FDctsUjRaLF7czyVERu4u8JiQgZLYawEghfQ4kjnbv",
  "key2": "37aErsiy43UBSE8H2qXV2uDcEVSR54Bc6qTLuvdfE65UKeTfrtgoSWEriirNBZbWoqgrAHqpQkhDLK5cZyUeSAN1",
  "key3": "e194qRErj6Da9AtZgaBsSYeuxEz2cjrw3r6PpVyfM7hiMaCZmQce5KaXZSptv2f65FvfudQ8asbYv6LtcHQQiAp",
  "key4": "3UPACggstxuZqFHFWcSTtFZQkTw1VWnqgyPBDkKeCVMZxkjHAkSi1gomoJn3SEoa8kgfhBHERBaeq1GfxJXUS2NA",
  "key5": "s3nc52tDkRgAurRRMmwwV7apTWDpEyroML9QSNZLkrRqxjUZU8QHV6BmF4eDzZZPTtXy8xnm9m427jaH7otyQZc",
  "key6": "57PiR6TJprx3fHmZFb9FuXAXwEMePEXkF9TyUnr2deUoU9b2UGU8dTcATkKxWu9iPLKZq7augrRvNmR27B3GfsnD",
  "key7": "5To8wQ34LS4LoKLoVJKnc4ToF1c9epwtYYygcnLSBQVuNUVxdwnBVaMiYPT4LToFYzsFavdWYvL5efENdrpHLP6Z",
  "key8": "4uk9t1NTES4JsZyJe5VnGWCMWws21A97wCejrGn9M6wWYqc1TCSvfhySEVwiGSw13W7HiP9aiCDwrYWdMjaJkogA",
  "key9": "4yVt7HA9oMwexXQmeiR8jpT8PvhxTX1kqMvvDqDaJhzVE6kgVghnu9PkngVLF29E6KEtbvwng9khpeeCmYkXD1RT",
  "key10": "2T3q6BNmojp9a5ERz78N2zR45FusPcvs5RKptjBT8AkJoZPz8RpWvUnnLVVEsYBLNv2UiKw6i8UuZmBNBEEkyHgB",
  "key11": "3d91Xd8PAikXpQpRgY5Jkerc74nrfHkQSvVUNHbfi5aiZ7dato59z9ARu1eTn1gKNPNm8dQCwcAgdwcZu2wxD1qh",
  "key12": "5FkWeXSb98agFTuArt5o72ajz5diKXkWaNt56pXhRcKHWuiDRKwJpgshyJFbrB6EzdrHBykrtjzjJaSJfrYKY7Pi",
  "key13": "2kQbcvqt49qugtP6EQh46ENHANSUbThfo1AyKNRY4RM5iFME75XJHfHde2P8oJJ766uikGKhnQRZxkRF5CQQq1XY",
  "key14": "QBkhevntLgeGVzAtUXKkZn71XA8p37HxznERKgzDQHt4BgGyv7s1rEV3xHNKxCydZowB6rAz8QczBiMrbDDpdK7",
  "key15": "2mYttPXtct6y4Df6YJHWpp7aa9DoqYUCPQ7hYveGyQo4zqFo3gv8ubtVmBem7gNQRyBB55b5T2sHPVQEyoKoWcbr",
  "key16": "2ZoTE5WsKfXr7EaqSqN5Lqw73qAvnsPogDJ9s843DPu6gh4yTYrVZwiCiZpNCjhnfqwkp7hAVtZYxxsM3sWKzj2w",
  "key17": "63YdxceqpdbgSouhSxCyobueeiCQJHcseDN6nziYUww8ihzQG8fFCFtJK6wjissoir4TmLZimU3xRW8dqbr6kstr",
  "key18": "3Z8yknpYpsQrErrEEEdgF7HcrRt98FRg1fSsshnQadHqzK54QDwpdPTcJGa9U34QysKQqjdEZ2iekUW1A1ja7dX1",
  "key19": "3bhV9H1oApb8Sqe9ozKEUqKQ5XeEGaHg86wY2sgcoeCmbPJykrqqjYgAajAVnBwc2xC49G9j21GNeVe5jDVsdk8T",
  "key20": "65miqKvWD58wMCAkz8d69M3XMHWm71MxuuSxiuP81bQ4cHoN9EwVB91sghehiePa59rQihL6t7ffK3SrqhMzEKXv",
  "key21": "7GBpdcgjDNqRW7bgg5E5PqSsqujsm8SjjbQkFKAwggbuuqzPdPpgZAFNPKENPr1LvvrQhWCsMCwxkHAbwttaswa",
  "key22": "2dKkP3GLG2Eob5DVMRR6SSVGEJjBXufUvM5JDmVHxe8r5YNpCUjfBsdQjgE1LCyPzjMxSEj8hYxfq2aKH6ShCoC7",
  "key23": "5NfwVx8mBYsXd5bksKT6Vwdedt8Xf5aYqUiMyzN6bGxnv8G87NEvqsi6wnS6R6sSLXi4uPyw4LzRy1ishzFFy5cC",
  "key24": "5uuqvjrPiD1K8UQhFefkx6mmySWpVxFgsmeUhj6ipfoFBFv9yZsiTkeeR8HUFLs45buoQtqqovfvfD4mN3baPyGz",
  "key25": "4GK3uaqZLQ22TXc7uyLaLXVoCQSPa6NVCNyRFedHqLDDnF6pVfJuVKJeRThwP1JGBbc1vbmoD2u9o7KLnZambi5q",
  "key26": "5vUKW9F9kNxKTTsvQGP671E23oxdExMvpr8kj5sPrD6wHqQvYHj6PcZjdBnBZ6iCYUEGn68jczY56gY55uJAh94N",
  "key27": "3YrXjJUH9NmbXM3JF4Wqh3HyrN9HCk1uNN1SpiRRa3uzxhexKnR8HrEnrJgmpce4eAkAq7P7Vweh44hNrcURRKpT",
  "key28": "Wvv5bq4dvKDDfLmcusSo9sGmiFiRMT9NtSyQDGuDsrFKbzLBWfo2EfEyoK3xWzzmcnvejkB9KE2VQd6M6sgRuu1",
  "key29": "XB3MPd1NDRJFnjmQqY5z88h57WEgNWeoByFanm5akEDBQXgN5i1QfRm6xejgNDTjHy5KuMCQzhhSvxdhtLqo5bY"
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
