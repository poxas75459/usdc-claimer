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
    "64uy1GYpaA6FP8raSaroZys7sydEmN6QvWVUu76TGLRk4Ev4BHZ15aXscKuuPDNTWZJaHe4FG6A1er3NGmMpoLDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XU9VJ3JwaynWSKbxpK6yLsZMygcmrXBuwdfjLFFXv9iGiyWDA57sePQ5c6d5w6aqr6XEyZT5tq2r5DCTdGabFvi",
  "key1": "2HCh3TqwEBgQ5YBjLZ5zAPQBj4vRiXztkKGqY3pEojAGkVEGweztZTLydjCgjeNPgGkCQK6a37rxP9kbCzsKoYuy",
  "key2": "5iggi2ZKoSH45ggRNVNHqqAjD2A17cDKkGbMPiLzFZ1V4f9eGYD4X4S826QV5T6REVoqVZTFm8rJkP7huCyWffJg",
  "key3": "4KcYLwgHFrHfDUPyPRLsaBbM99TabLPpxiByDeKLjF4YBH4j2cuZ7WntSHyi6yRcRqhHzyXuSesShE186QaYXu2c",
  "key4": "536MeurJGjDt6a3hig8WJ6LLLc22ibT57qojQcuF1oJJrLpAbnvEHEPbUbadpnnwx6Jeuc1wiBtCenBkSnpGR4F2",
  "key5": "4Vgd8F9xeQ3mVDDj7jgv2YgdWHvmgE7XyV6phaDBTknXKw9F9vRJth6J3MewBkZG5zek3c6fweSWSNpAC3JRFd37",
  "key6": "24QTFCTajMs9UNDKJseY3w6wRVXJSbXfKTBnxqgnawv54f1KHZrnrzDVSztByc7vJWSii6ayoBPTusSz5r3RJfvR",
  "key7": "mTYAWQup7Q9YfHHQJbwjLSW7A963btuxADuwgf3YK7V6w7CeJejSwuSVKXwXYVwdAWbwhSA97Br1LCgqwAzcEGr",
  "key8": "b96S471g8P8BDEttFQUWGDF17AVgiwHvxfaveaJwKwbFP1C2mBjcusinpeXLx27xuQumrQ9LvKtaXzmCeseiwcC",
  "key9": "2jdSWQxCM8e1NptLPRH41urQ38aUNoksZP7tNSMMSZb3Jvk7xax2MMpKZfyhNkDrABAeSoyvZXMFUvqUCzRdgTgc",
  "key10": "3rFZZXpM1GXLVKaQvNLFpGHCQbUxd1axcCgLSQzQNgoYuhpZkWWodHR8FP66ZYPwurfQK22Xs69HYv5msr287sBu",
  "key11": "64x7BqLBRcbF2mK22tHc8chK8u3uNX3Y3DCHmzSb8zDWcvUrTTwKA543W5ETmDgt8LxdgWfeAVw6qzbNovYj3RWH",
  "key12": "5jXYUswvjiVURgtAUoDwGixeTdyMV6Tig1ANLTkjxkhcD8XbhFCo19XhFoL253WkKC5rvEqYM3S4vyoPHAwfmz5F",
  "key13": "2EiEHb3K8JqJNWJfuH7rD7ovsgEgtgxgXMf4qdmGMpSjTGGdfVs853nHi66DccCWfJP6DHW4Z8DeWJ6jBBrVpXjS",
  "key14": "2fJ5QH7VbRT7n6RUojPTjByuX43RGDgsqCVR2d1DMZjpbsjhUEwRuxEYrmxXhgyTZo9jckUDdUuFHx9Z2dqi3Ntp",
  "key15": "WPbuTQ8Tw9sFaYckfy2NJChx6riopv9Duai6iReY57iDX9aYKXipaTGb5wdc4xgT1EvAttBT2g98k3sFXGqSSvo",
  "key16": "5r7wFzR4eSH7GXRgt9TbFbQ5VvxpRancAbg6e5vnMN2ppVBNWS3ZE2HpaWsoanm44sUTQ9yFkkqNiMGnzNkzBnj2",
  "key17": "39GorV8UrYUwfJvoDLXzc46rmmcST9FhaSUABGf6iwWhjE9ZpSivNaiKnuheCdWqXK9s8UJjmhSzWMmpAermxekw",
  "key18": "5F4tjh5pwA7nhMUPyxhwSDTgVbZ5dfbz2kCrZc1zzok7d41AdbHFwVc6wwyKHpqv93jPuaptgoRjx73wQ7wv3vmW",
  "key19": "3AUzF3Uo3j4xVtXbPWP7HuCYWNvtho9vJNo7ejMma9Z8jfZZUKdAhorWvogREef9FMb35aL1hmpfdRFUaNEp4DKV",
  "key20": "5VP4kH1d9QjC6j6eHNjQhCsHfDeABcbUD8Qx4jMEbSKFJbBHpTZzG1A95idyS5Ws5oCcNH585sE7x6gLLB4kD8Lk",
  "key21": "GreHiP8QCjVZUcfqPcNARA479fF6Jh6jftUYzZvSvfNSjTXvqHsZk7HZEtgBte1mHyayLLtKber8t1UhuBs6jZJ",
  "key22": "2Q3cv4KwobLcXCDZXtiWLdHGQGAZponJnTZ4JQs374W7xQRQwYdwkmCchYFqsni8MKxoXc7iGbc7LYNUyQsbNY9T",
  "key23": "2LX9Azj58icXBABXEQ9oVk8GfR1pXFfPBoiPQzKKRQ8VRpaezurSvErTEkkDRNvXn41dMx8s9S6SB5Mub1cAzepM",
  "key24": "35XxnYsH8UKKB21b4GwL5hz44JbhAKhqe3anUm1Jjmd4b71TDwzYGCTsMuBqU8XZNSDr4RzsZ96FPd5SrwbTiXus",
  "key25": "5gJ2bEf6tdhjHNJiQFGDCfwhSHMuqNgK7jLutmuJqy87N2hksqSvLMbtzwQ2VSfy6NQ3FwL3oQppaGQzt23hBVU7",
  "key26": "hifUkWn3Mt9FYLmb4pT4kf3vxy8ZTaeZYP67eqb2qHSBccVmrqZGzLvW6Ksw1fotjMHVDHRuVemz8XYLQyy8jUp",
  "key27": "3JzqWWmgCmKu4S4QwjgnWeGJUnoJc1xZnXx2bdBnZyXHFk1YxTso2iCx3NK5cgGGTNMmjqV3rUirSvP3eCJvm6CK",
  "key28": "4ZZkiJ64MJKSUjQQymLFhqKJbxdpR8X3NvZGmdSEduVs1cGcB5Z5X1thyhKhezcGhcL3dSkDgNJztmRsDfiHssoh",
  "key29": "3tf8dKY6GoRARLoCu8ZQnLGHX11SyyhaVKaA13Yz2LbmsBU1NZ2AyT63icSVtSyEsRSk6TCZFrRwC8oo1oJ4BYu8",
  "key30": "2xJwaETzHHysu6UTYuFTH31AmqXwK8NFzYZARyR3tgDs1YoYFnKHhm6xbvwMFdSVCBGPYzWyuwoBVm6wz9c48pu5",
  "key31": "4NVqid8wNT2Avi3SjoJh9jTdVCNxiG7MKM1d1JW8fRXn5WbCfyVU4UM8iPcFvY5nGphddGCeg3PA2USZ1RymQ1KX",
  "key32": "SwCFGrhAhjWdPUW2TJrsjg1tXx7bTahvTj2X9i8sMbBLLPTpW95fbsw7qq3u1S9KCNagssJ25yYSC6o6BpQRT2c",
  "key33": "5xvBrD9EH8dK978NoZmr1vzPGJB7SJYqWxkR2S7sM3xoS8ke5N5z7ht1ZRgFLrdDQfH7oNRUDsXUX5TP4F7psPwE",
  "key34": "49t2mXGzd4WoTUHj2Q2RjL33hJKdEHuBzrx61uxi18adUmhJ6PeFkFve9De9kpbny6oiSCmEqMa4UVx53VzupJAg",
  "key35": "4L9Vf7H1Z1uQH4njfPgr6q3wGiS8F5saCQ2iBwbpfhJ9P6EXtZ8Hw9M4omzLJQNbSFrURCDezHtXztXxBus1KzAk",
  "key36": "5gpLTeR6gwWaNqVtLgQQv2DwbcXvwM5DhKqNcq2iiKLQ4HiCQjAwmbQzNm4jNCNnpnNkKhjvKAMcUY1Pqij3Bzjj",
  "key37": "2EwGJV6xqjvRfShhdm8BeL4cpqZQyuXxsMJnzbwGP9UU7gwwPEuFfru2w4ES7jPBSahA5Rc1i7ApRC5cjWSseGUY",
  "key38": "2bD26Y1svyUTDjjpbFTMUKcE6zyoVzq3LwxtzvhhSPok1GW4rEymYo4QdNR9MH7vqWyFxbEZBZZPq3EAV2ewKds6",
  "key39": "3p4LthDVKdcT59JN9tukLExz9hZ8qwnMR7PUXUJQ3cmNajmFQitFnA4PhF97GLf9J5Hd6KgWqnV4acoMCYUuUcGh"
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
