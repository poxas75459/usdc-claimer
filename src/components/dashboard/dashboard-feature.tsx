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
    "5jGGDsmfs7KNQdLTxyNMkyTudUCvyTjUv7UzfV4EL9jMnskGUK63kHe6mxHV2x9rR6uXw3a4CNDeseKWBnrYqtnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BFayP5MSGjP6FYhZv5vQmCFbumHdRXKQ2PQJx2Y12FgEdnaBxHUzTaFCnhAyKVNqEpvyiF4CyH7iYvZrJ4YzYKd",
  "key1": "5sCJya6y3VFUq9gGGeEZZGxmWnUmATA82SFGLmZSttpeDJfAKKDYC3Xr8XYgQnNTmzAFTnBYmR9BwM5fa6PJ3Wuw",
  "key2": "34HgDpwKChD4b5AHYMSi3TLoGwrhEGn7hz6mduWrs9fKWKFiac2rghwd8M6kELSjqUXPsvEX1xB8kFuCHu2ZJpBB",
  "key3": "5trZ6odn5XWEMNQwG3gd7SNSg7tCYeGo4Hcg5jT6WFkFRqMbfVToETar5CXub5nDtZhDQpVGothyi1iDtzXY37XF",
  "key4": "2ZbSFc6KM1sGPTkULKhD4H1N41bbWwZAYg1ZZBBzw4GdPxnnXNPrcdnY6idwsDCBEzDuE91FWYEjCXUfFY9g1Z1",
  "key5": "r1bgJg12DzVyvjRN7SUS82TNcEsgzJJzKw2kUTUrcgLH55sFs4qf7F6EXW4npzQLCTC8CBhATFsZNv376xs9xvP",
  "key6": "5b9fE5n24D7zS7m1PnYkZNBKW2taytKbTDaa8GvpdurEVDisHgTyYduF4VPLbgKU1JZSipv3txqJwJ7TDnqVUrjf",
  "key7": "gNpxHjzLzRcxTzkBQZKLzc8VVY2xievFKnCy7eTvP24PoMqDsd5bFw6EbPropQAPz62qTizS9iiFDM6UtEFRfQw",
  "key8": "3BPgtgK23i9VqibrorWwPRxZEPB6tgab6Zsd6GKcKqmnUSbwuxPmr9J56df5EjpvqrSQACfw1aUtRPGNunSeuL8Z",
  "key9": "5z1QxJVQiCVkvAnSaoLjeeKWJStG8qyahF4S1ZohTboYHmpVkcSzgurAcGEh4TwSJTMgXencDHZuyfED1Bqfi3QD",
  "key10": "2UE5JAbVdYo272kY41svKZhzhFnAwEhES98Eeb8yNnvAurskdrrwdfJzoEEqyKtWSsrRzhYv4vJVqSLVZLpED4EU",
  "key11": "3DAaqepeUrabGqSpRZfCidqbXGAtyg1itakMTyLGQwntaqpLnJELs7n4dUgs69hiXfQ8nEH6B5gUR7MotG57UUeg",
  "key12": "2gMthhXZ3vNoZBnq3VXNEeRXVhBQHbmH1JexvRfb3GtuVE1EsXZgYJAPcLFSAmWNGA4mW7S7QQVhxG6DywmQw9Y6",
  "key13": "kmVU7FXgfWx9SEtD2i2UXFzHiDK74QMmsE7ZiLGxXLSwKRsxTx1T6ip3WkEchKT18Nq2gCHoCV1YPFS7B3A6KSS",
  "key14": "62wKwMjhhM22aVZujU7JWeSUmDoHkFDhDnVU2vZNM5yVNrvkgkXumrGvLXuRE9KjC1uWRYnxtqjmi1gj1wU9BVzT",
  "key15": "46yHmxA5kExMQCGrnLKCMFUNhpTgDs7PpzEiZH3d3FU4tjoTUto6f96uBjRmN2ESXNLrHusWpxVCUftR4tbw3Q1m",
  "key16": "eq3umVGVW5jUwAdW3Yy3ujz5CmZgw4xi1d6yhYHvACodUcVicM4ktLYXM63EK56nphL2AzoysGgGXVf7jwXvwF3",
  "key17": "5BgFKkhB5Pj27oJdmSt8DTpX1GS9CjcNgksYbwg35vv4ZQeTNvqFptNWwhP6WNTedYQrQyaK9YuFaWor4fri7NnN",
  "key18": "5oS7XGf9yNyLW3xLNyqZp5Xeb86RmMDJsjoK1vjFVzmR2ewJjFnxjKR375oZA22f5HWFhwBrtyxJuV5vyXUwcwMc",
  "key19": "4Q2sKk3rMSJ5wEAfixXwSCxXJ865mjLLgXnV4ivHzJRkZkySVqy2PPep4ETogsnzx7FyfED2HzrsXccTtZUuYh7g",
  "key20": "2A5XhxwN9iknCxmu85YZ5VA6uEb3swBDCUnWhUgt192KVKf5jG6nBq1gCKTmrHp5oUpBYD2HVETHxTR2djd99RJk",
  "key21": "5pfkLjpXfD6zgoB932pvrpK6VQv4eCkcBbU7PHwizYjdadeeqvwwjGVgxYMzoyToj8Ch9U3tziTA56xCEpczb7hx",
  "key22": "41HrkL25fuW19d7PUbd9jiqAh8GMjPHerx3RdduWf3UhhymM8nRvmdToPTgELzuAyt9wqLXxvPB8BP8eg6gpFDXt",
  "key23": "g3KqWM2NsyjvzRDWVGWjNvVi13SXTFiSD2wGhhRySLh38hXSKdXtJ2Z2UiMQjUqi9DRmST7iv8yRywb5yUjwLBU",
  "key24": "UYHmVx4rXg4S1n76TJmUyHmywKd7zsxAhd4eJSi81mqdF42kizGbXcPViSzgvyjuXiMW8yn31n9Gyvw3EbERqno",
  "key25": "3ebWLRkj23ZCrnXWS1NzeTPjFgTHvjKRwUiJhaX6zRYNkbsDfyDs5JEvUZPT83oXKVRavc9ns7BwDvUVsig1cLtz",
  "key26": "2H6Zn8ngCtkUt5QzpwkivjiZ24oAyJpzoe8geUytPzyfH39ntP5f4KgqPU7qYxyhsmxcaV8bdFyPPM2tf2DBk1BR",
  "key27": "2PdsuV2r26pcgZENzokzjpbCKznErgCTnWYEyRaLQncaQpqMdBSA8DLazUnBU5oBCJzoujBe7AcZsYVaa1CQnDXv",
  "key28": "4jTUVSAnLHxYhhMzm7XvPi3aMEKUFeDgvuhaYL5qsm17wvRConaSggoQbTwQp1Jyhjnk4okAQveFarHVBK3E7obD",
  "key29": "3KFDtDDCRLUVn5XJGk2YjDz2ybaTJvjV2huXsHRMpKJnH1WnyqmYcdFdrFAA3ERJL17jrvHu1MJ8bgpxkZKY2tvs",
  "key30": "5xCUQM6JYUu7ce3itxSR7gT1apPHodW31edfLnJ7HADT5DrgMkRR2jyubCfenAuWUX9xgEXj4MaymFS2oU72WsTy",
  "key31": "66mKCqQzgrzzBtxZThxfiEQKo8UzmHvTWgpBACpDEvLHHbXujAQPReh1tVSJFDvSMCHwq59GQrRL7rD8eHjtHPwZ",
  "key32": "4q155oE5RgzJtm8JLyWhwfpQSjHmmFVrMfoCXjxpW4Efr3zwKD6epCD7UqXs2kYrMFoNrA88A836TgQx5NzcTeYQ",
  "key33": "4h1LFDQftqu5pHdPh7PdzX86T9BGgocmKdTSbVFgRUFLikvTCs9Aa4WQKyo4NhEkGgeqozKjaU5P8zjQzsTTd6Pv",
  "key34": "2j6pN3eNf8QhwbotTBeMT4E6oFZ5Sjqgjfa244NermXTXxdosopqLGgg95WN4BRLauGnQwQ9TrY9Xphx4wAK5MKq",
  "key35": "q49Jpkp9h8HTZfxQWHcrQNDGntiNgubiemaNGiL56VBZusSkXaRru4LyDfKHQQ4y6CPaFVw7yLy5G9hztRWro9d"
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
