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
    "55kbKeznNTPSaX3jm41H95JUaEc8ASxLKwDKek1PhmBA59cmyFAYjioNhfRNxPcDmSjvvyWsgCC5JEWJJKhDzHS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FFjd4jq7gGEvcq9JSFnjmBpSk1bWaHwHug3L1unCMkqKXkyC1XKduYf6NfgvqrsMeyTxr8MBVhCXHQM19F4GzF1",
  "key1": "6o651jjwsMQJbEDHeaB5EQHGoRiHmWzegksq1DwbqFzSy7JDBJEYGaphojXaqPuVrUnZ3WCtv5epVM12pZcDUe5",
  "key2": "3Qw3Tb6HvH2fA9jbVJgHGM4WjuyVWkSfJJNzfqZDobky6WP92cfz5QNLBcQ4SuksvnKThQLHXkAyvWTYix3SWZ15",
  "key3": "4cZUaz6qqvZCXHwLJRQSTrVrLcua4uCRkBnxP1PmP6MSdkgy2WHARAiGHJQFtjWogiN7BoTJNjV5Vhbnnp9PLUzX",
  "key4": "5Ct53StxydfVCaPiYud5gyULHSh7JweFAv6Dcy8BdGbm25g4upbVHz2axjDWPzrRnVcJ7PVAatxQs12ytxQ6RHVC",
  "key5": "5HgTck5HyT76gAaFFRrUcaAMETwZjhMpjrAS4Mym6PtvXm863WKfYSfQeGHhShZVxihAwfCk8m8DaieBJPFcyfNm",
  "key6": "5M27DAg6XJwpwnm494eA9cDisGxDPAsKiMZMa4FVCL9JKFtTMAydY9PmuUHMRxsUayWak9oMaGJ7vAyQ8W6fnBQ3",
  "key7": "37JMxC6oodwenQB7iVPgKqRwrT486Ws87nNjFjUME8ihUhbMDiHjJaMMgMYVwJXzUEQcuXh2fu8kfTLjT4ErF2QS",
  "key8": "4fuqDM5gm9KGPMK6gC68d3bzbyN7xdmoaX7kvdR29UZ8PC49tQJUbVkr6mL41Xbpv3hbPAzUoiXu4AZNH9Ww2Ndr",
  "key9": "pLtR9HJ2RfZzvEWo86TXYVu25yv2UdrRhLnz1TRKWKbUt654E44QShQXVbuvXhn6XhrgRtxRAcVRKfL1T4yJB87",
  "key10": "Yu7BKNwwievQkv22F7dakwMQz2pbJPvYRbJraZpnZvZmYGMiqaNPrHsLfi65BGJsenk2B3gMQfG7FbHjpdkL6Zo",
  "key11": "51rGm4t5mVAGfHGDYFxmDB3F7LxHEwN4FBhbzeGT7BuL7PJ8a9tG2YTr5EyvLNBFqZM4JbBPNCMNBDjVvmEKXzsb",
  "key12": "4kgy2g8LvC87HHXGDT3JRVXXNV1pn7rXKFyWvSP5FNZXBJqMbqX8go24LoAChEBoaZ8WtdRXtKfc3YtwUB5D5SBs",
  "key13": "fA1ECXpGq7FfV9x5F6ywaYsJ66jWvRcoyw4SwWvc9gCCusWdoUnLkruR22X5m9sTpqrDzEB9E1a7r2PrLNKSmqr",
  "key14": "47rnTiVamAuoHxHv1wSM5N4NjfD3KKLd7ZXnhzBe4HcqF2NRKLrbmYWUW3YVAjtrA2fN3RKbjNWbtKJB4a7tGDXY",
  "key15": "5ZmLaTeCi3vWMyNwvFZFA43JwRMhuu3whqRZ73jsbiDEETCfCAtCNDfoJDdiPrngKbdH4JYPRzcg1dKfm75Ej5LZ",
  "key16": "5EJiLBGcjXnYVZJKjT2GR8kJLNQuRJ9qZgwawjSk6wbdBR5gcPXJgLMgqk2XHb8TDvF653GoyKF2CHisXMuqUCNX",
  "key17": "qTrvGZZhmyPWQRRch1jZ2Yan269nJ1e9pJddekXAi2kpK3J8rsKhzaHW7cw9munSuA1DbX9DdeffrAxX4tgHZ4k",
  "key18": "5ka97w1FsQojxL4Lsz6vm8Uo3WwucEHcPWwukB6WcGtCiVsaW1YWZztbKYpw5Ftg5j9cUW2R5kVe3xsnvdtr8LD1",
  "key19": "3MLdx1uQRhHM4tnKKWiwmLyKnmjWjJm2WieuFnFNH4A24THKffd2Sf7CdvX9zWcGKAwQjSqAtnuYq2Sv4QdZuh7F",
  "key20": "5ZtgqTnjVTaTDJKTj2Na3tGYTHjLKAm4xeGcMEGVv44vMgm2f9wuYF8j5LzQ4CEB8rseimnZ8QTkZDjJNnBTysvK",
  "key21": "2Qcyz21zv5QVE5cqfSawC6Bpw6tmTK1PiqduGDZti5WUmNTmbULKSiP7qAfbmcHumdvxQqLBkVLEyq1Ppt9pSNH6",
  "key22": "647y5Z7AVMfLLQo6KKBuwoT4gCarhZ3DHYitnQHFGTs8Ce2iaK9Lvzj6wTtheJUSWr2Q5vgJ6GdzYA95LNrSbko5",
  "key23": "4j44msx8Y772pd1R97df2kiDi6QARnovPEdtQuLDYxoDPusjgR34duqWXLid2HFS3oDyxG8XLYqrSXay1sNsRQec",
  "key24": "3CBDrQc5Cr9g5ZmWPrzsspRnghLcS1diExdZuKK66mb45Hcrs59kPXPMdLKbvWNxLpgSi6xPUkr9yrgxHZFhD3PL",
  "key25": "3BnbcjGNpAyW3uCSh9HbMdZBFScy3in1ug1DHK9mUDz2cTXB345TxBGyxNQjAKxrYrGsaPcamV7KGuF3VAD2PE6M",
  "key26": "236R7JG388FhD2mwDr2arJM996ehf6S3KWueNsBnRxnfJf1JLBPMADvVmVk2TtMHkVx9CpK1sZsstvcDji4yYsdy",
  "key27": "2PCBKf52C7h1SLP5vHgfQHHXWbhMvi45veGCLGPazZ2qmHqg6JWSK6TNuxwoQsEWTwQFifBA4XJoDxyAe7xpxn3k",
  "key28": "oTvL31nuKna2CfEatR6mSeSDZYMN9HUMSYQYKsv391UJJJsTfAxUiLoBH5m6nNsbf2yz1YZiuoMgTiGtMowQqw2",
  "key29": "3Re27BD7tyRfqubHgW88bEUmUwwgsAMtsj6iGAj7ZY3RAuRPPwZddukUUGZmbADAGgK1aga8dYRx7owDjR5PQb7m",
  "key30": "5nwzmFLQKNyBm8RABeX9DzEev7RZYqS6b16sPuwJagHadtfaoSjdA4YAMjAhjPgUVxYarPHKDFwxocRxaUEyEsUB",
  "key31": "4tFGgtMa8pJCy81hdXf7QiZo9ZPy7UtWyzA8nwN35gE79RvjaQ7RaHUtrhhjoGbuhPjEWrBmxTQaP7htcG26CRjQ",
  "key32": "FtU45VjuTxJ1oMoJSmk2x2ucMANSQ4MpeDYeXft187wd129Wukfz85rByd1Q8mKFNSHe9BPHUm6xRo2Sswk31pi",
  "key33": "R1kfwHbhje6wmBYLtXRB5TQgdepHkareAfQyEj9PLKUn8izbeE7Rah6FCaMX4S11wtUZQVz92SRNBHWRmb2WnsW",
  "key34": "3x8yfVczpMmkwLe3tGqpMhTJzpg3CVE6xB3LcpmJmNMh4cyEKh3byJHvWyGofz9ihfjdXQJ1CGHCGUmDTtF1tb8e",
  "key35": "3hc6BfTLkJUizzQMoocPk7PVYSBEnnFfqcHJrEq7iM3xoHmfRnV18Q494gDD5L9LNok3TmUd8jnL1yHtAp5G2Pzb"
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
