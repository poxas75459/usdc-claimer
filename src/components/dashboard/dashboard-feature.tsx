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
    "XjrkcS8quUr1W5MGbrzHo7WX8hCeKr4ZDxzAfE6YLqjxXLrtp5wVURyzvSTg8awUBQwDK16QkXi5fHEQgLvL3Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uq9sTUKJ4FKJZrsYrAH7ZakiijtvwKvFnBzCYm9Z3n5Ar78xXsAYKxybe7ZxNTyqZv2634pZSr43SBpBgoGPfLS",
  "key1": "4R16hSyADmSPCg2ajfQWuyVEaBrksomDAFNw2rbodAekSycKyStWkdsrF2uzduWZ8WYx5DXuMvn1TqVtFkdBwtUT",
  "key2": "65SJPtQyfduy1kXNWDWYSUkherHZFu33jJ7vBJpNBrE8pimMLy4fmUA8PDmMhUYazQBjAe1QyfpPNjVuXYX9NT6V",
  "key3": "3RieAM4QEq7xNRM4LNybr9TzFs71tsPxvuEGXwu9NLdVDeaTHq35u9s8NtHNYq6ZtAdVjUJnYn9Dc1sAfqDTURcc",
  "key4": "zjPEwWTuhNMEtdrQiAkADm8JYfAUvRAPrX3Xo9dnKo9EbgqJzQNjh2kooNv5uhXXCVDHttwyyzrzNhMnLQHwibe",
  "key5": "ANFZMaK8ZYVMVc4UdTa5aBdioiYKW9tyAMJEWJGbXy8u9zxmEf78iJPfsv2waFr9sSKYvMpeCRxk1XmEci45YG7",
  "key6": "3e4xNUFXxSzfpJnyj7tgb29N2erJVx69z77nt3eTks6iTbL2WySgcXMReEg8f79WgoAAvCAswVCJ1Ug9yXdTib2h",
  "key7": "5QNE942zfZH6AZUjZMfjUvAKTTvdMr74oqTkT6BmN7uRHR8oGvgRGGR9BER8DaUaSfrsNEG5SfEwZGnX2Q7ufx3F",
  "key8": "UdtzKcDHEB7hQ2e7gxs9ZigKYikXw1ZAJpXmcUo98q8227KoBRQMFUm7RDubzkjgob8Q1q4KwvzV9XbLJLBddRh",
  "key9": "afeFu9uNw4TukBHJGJiYgwQzLh88BVVY3zMbC1iSc4xS7RRithDGJXutEJj3huH5Z6Sez2X7ZuGtdw8L7qeRP2D",
  "key10": "5QpuGtnoVsvHrSu3L1tnLMugqfvb9uunqJhTxi5hUcwFWZHBu1PCLCunBGKvQs1MCwEX7rr3mp9kttviMmGPK7qf",
  "key11": "4ppA8xppcGVzmPJgauipLCJwbQE7HS8yppZaD19QfaRXJfpudQReC6MtLBX8NsTQmA9wb56tXKFWrXamgRskACWU",
  "key12": "W3o57go3tUQtvinG9NG7Poj8KDF9r4HJd9zWEXce9nurK2Q2ZKLHZPDWoduxfCJGjdLKtuxMAEbeLE8pWJwbC2s",
  "key13": "47SjRCmzaXGcnDRcVmMtFGzGiKbKBy1Arbm4X6cDr2km2Zo3SQEgoTkhL6NeCeEqyXz6EtdB8hiD3rRY1iuqKg3t",
  "key14": "2eumcaMuRxb3Ud7KhgTFYPpMuYLcPQpyQafjGsNAuQAVHv229EkuLG5UyvTzEJRFnzyQbDcbrDCpJP5BT6DJXGCz",
  "key15": "41V3ie7F6QiBEgjMHJgCjx2xVEdJ2ew5xWnVCHBUdph5ySmjz6QCNdk7qKh6qYwBytseXYCX2HJHdid4AxvUY6gV",
  "key16": "8tEE9GXJfP7UQgetoWWE88Jv6Zu2gBuHdJuPF3pFwyM7wy5dhSECdbhasj2bNcB43SM7MuqZ4PrqkBEGviAPHb4",
  "key17": "4358H11fa3vKgT4Na76STjPDp9k7jxogqdAJWdNYGwXEHZs8hJfCGCDJcebv4WNwid33aRXdjvpFCVR7bBPUhWLs",
  "key18": "5sNtyTbP1L5FrVtB5Qh8fmAFYP2zrZDYjnxQvFDbxrDkb21zp2Ett5AmyoVtRzDUMEhs1H8kRfTj7eWUR8kyTjni",
  "key19": "bvfYF3BKik81XAruZfomHBocBxvcwXTMWuXDxgRQEk42REXeN9sgziFwzTevs1nmkvyzhQ59csCu4onX7LTwiJV",
  "key20": "3kK4jALrm7AFcZ3SrVERnkyHgdLjiUEaVW1cugWHJAxGRHE3zxhtJTYxE79ga1bZyWGe22dezHRLrxC71jLTUK1A",
  "key21": "5V9wUG3LJv9AUAQeuYAtzPUPA8C1NrGVT5xTS4eZKg3R6Bf85Pv2juR86PJwL6TUg5vd5v3qTsWpc2S8r2JW7EYj",
  "key22": "5jVxKHMpzBJV5VixnVELiQ9BEuDSX6MDEfZi8AjLCf2CfmaKC5hb8EPeRYjErV5qX3YaPgYdetMdCku4aBLvZVC3",
  "key23": "2qgd9vTQR45piXRXFXi214njCLFGpiqDNHVYSdPz1a5nkay6qx8SvQvys8Y32Aj4pdCyLx9gwswg5cyXDtUPqb1Y",
  "key24": "2bKzdEFwnGFG6aRNVd2dgCC6f3gDecUEsgkpXKAqagAruypg73eWKHRcqcnJsPTGGvDMUCaFuH1goTJhUm4oYN41",
  "key25": "5HcwD5DHHddsCJFZbRk3AbVxTxrNwzfjotwQTdAj6vhsXL5FQvmfqJCdFgVT8FupYQHExu4WUq3Ut5irp4hiB4cW",
  "key26": "4d2HqsgfjLb9ZGse9PTmB1LHxvVHm5JQXK9mcxQPyeHW7qAUjtxyXn93tUsvtCNGo7cTy65C6xvZo4uvhPRUNAdw",
  "key27": "qLEtxo8SvXNRVFGYkc48EPo3ARR3hFU2TsDDuaxNyLL1drzEAWd9gE7zhfpib8eDDanJupVK61d3jQhuMXF7SvE",
  "key28": "3fPAFDnSDeDMN4DCJzwL2At2WGspoT3uy72BLS11ciMt5h4wFgb4JCqsYPMHtEMnKW43HBfFx7FmkZyZL3oKEktV",
  "key29": "4ur7vRqoMhfoz7sM4fSZyp9mgHfnv7U3jRqMMZfZsGrQooWvCFizMWjarC25atbQTXTHfZ4vS7ZEMEG8SMztLjLv",
  "key30": "VXGLbXA1zLTgC4mJecMAp3v9u6tN88ZivVJnbeUK97uWWmvWFZNf6qUM4NWED86RAXpaGMTbzHEoZakByFSgLXx",
  "key31": "2pPEcxeboAAx3pfNrT6ALgi79eSH9RpqZMafaFuL1CVVDuwx4TdDfxXTRroiQjRSGsGCLPAGKSJyhye3pJhCprVr",
  "key32": "3mK7GiRFjSayzwHgo7ysYKo8qQeZ8kfuH1nnT1nBnbV9H1mwgCVX21nmPw1317LDNU1tEneLGztQPzK2mGcdzNXS",
  "key33": "5GgPaozBa2JzVJkmWV4vpzCqHJv4XhHKd5UXgxWirfcSv71S1p49aPzJqPgADt2GnyNh5NDkc4a52RPQmrNhVdQz",
  "key34": "3zSi6sqDtMcNMDwe5rxXouF7csy3SE3wAA4P1GmnALvdTGcy2rCZXmoekySkQQ4JHsrZLiQXJGnmsyXbeZkRbFGU"
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
