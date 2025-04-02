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
    "2sPpz3pTmfAfLbiPDX5pX294FbQ6Dsn7UiRiqcM9pms2ViaWkmQAAJdbWAAZd579CMuG48ZAB2gxHMzNFiMDM9Ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uA8DJuWdyuK5tnaLe3G6uS5at6okY2Vb6MjAZGJW1Yhp8R5gBa3d5ysN28AnteG6sbpNeVQYsKfcFdLSLsWENC2",
  "key1": "25wRJCEZ7YDfbjaPXbks8MCTmf8pmc9HDK6zYPVmVSM1zRNg5WJXzmtRaz7gcgPrTmuR9C5bMQjET6d6rhcUC9iw",
  "key2": "YE8No6dLa8D3Qtn68GWDr4JXBYtLcX7XzehLEetLKD1kLzFr7Thw87cRdM185KaCn5X5N6AbFeTpERvGuK1xSFh",
  "key3": "3o9pcgLMQ44bvhur1rBpP1i7D9cKXfuTfLb51LjiWfW4C1FuCapKmVGVvGbub57ZKrtDYG4NNMDddHqohrNyAW65",
  "key4": "2YaBSxDa5minUkz2swvinnJJQ8FrHS6pEZZqvk5oJgzJcvqWBAnNGnmUUFRt8juk7Vxevw5QkSb8s37AUsfYgUPF",
  "key5": "2tb9i8hm93cNa7nMtYLjqjxWifodU6g4Nn4NdEBMbQLJfofTHv6fVtxPBYsA4JmHybGh23EGnGnRysGfsjVnFKjT",
  "key6": "39vJyAZAa7BBLB28YkpReaRmYmfFqwu9hPVnxZvGE67Zso5mDo4zhQoss2c1USLt56oEDKTkfjZQXEernwRnXapg",
  "key7": "5aTCgriaEeb5a7MDg9soxitxkArDYNn1XntBnepC5uXAoSSM7kUskn2pU2jJxQxgbesZ95JLZNAar3xQcgKFy2ua",
  "key8": "3ruVRQhxjQwdoQ6RKy2sJoqrYRKCm9BLQofNGzcRreEsdy39298CDQHT7t6RA3PFSJk1HmVtxEwTT3KJ624aGGh1",
  "key9": "4MTrFXnPPzur3j8iPvtzPMrZWEmm3kTn2KdtEyMrxGuHW4KVEwptxkMRbJbPcqoVdTC7XiHHcs3H82a5Y2TKWnpt",
  "key10": "5WZBzg1kH9CRsYqJrDsMXoYeX9RAnRGFfowk1tY8vPKEfW99mtHgsaVmYFfjLMKcdP4kEhxA7seixd4P9S8BkJZ5",
  "key11": "4AaA84eARknCYp84wLjYz82gQ2SdLYWfzqwPQ2rTGWpm5pCB2D7H6mn496Kbmju4Gu4wWDH81m2A3sNJxcu16H2x",
  "key12": "3P9nN4KSHYdDdpZeUAb1L6Ke86MiQmiVM9SoQqkNEFdYhw4zn3k5zwjJkXr2ZD2bks4W8CuUkzknHWHqyrBQYHhn",
  "key13": "498BUPyo96t1qU8jVWhj9NGDVubXod7irKAf6SBapdrJxga1mudpxPdXPqi7vdv6aerU4Gmw9uq1GdJ8cyafyDwL",
  "key14": "i1BRq9Kw95biV3uexxVKbPYEweAETQeLekAyu4GpsBZzVELc2Wmx52A2LzZBzRrEZrfRYj31PQ22jSUJXmnDeEw",
  "key15": "57zUtSBJjvCjmxMUwM9vUDmVqrz7kWcr2kGtGS5FNKjoDPZrjbWvxSr4LAMZagYajjNo323V2yp5MYJvyFArQatP",
  "key16": "3KMwuiRxjRT85EEo6ovCFYfRZG8k7HRE3beYwpkjrMDsfg545rn3eKMyCAi1d4wN7uWwY6zgBWAp7z6CzybVKH7P",
  "key17": "2L2KLdVEb4ZzkATfdTdtWWcP7bpzoa3NtUEMuzooruLpg3DvDozT9JfhJVfhAmpkdSeQKAhXUKEoSciKHjTSo9Zq",
  "key18": "64pP6Pt54rHfdUFgCniPRj8HS9AqSK6eJGtooJkBoZnieKx9Zm9ZCTFq1JVJroYRn2SVAEpJv2m9PMvbpx58nWGW",
  "key19": "4VciSqzmr9gemAxSspsVSwLX1w3Yh2MFWEfwxQ2pJb9vuf6NV4EZmfmifUAVedRKaVZXdoMu2daLrgXdzaBiHFZ6",
  "key20": "61XryTKpqx5fTikpm4TBpbSCM7diZK4PNoAhk6d2PcfTeDnihjRiv9asA7rKZZGpBCGmMrpsynnky8cn1V3ZLfvv",
  "key21": "nMnAHKLRR3Si19nXtXBNVJZrRH6ikSNaNtFwUFmNfUvRweHj8ZBroeeBWuaCSrHP5AbiMDJERPRE9tooGGU6Zn3",
  "key22": "67KqwbyLGSUPPnN5y95qVtv2ciqMzRVqLNzkKM3Rm4CG9nE4KCv9PQR2YD8Lm7xzgBCKEx8JQJS5HGVkHaHRzZTp",
  "key23": "2iLQrhxXLJ273za5EnroX5U2BXpRAEq9VFhx9to3xoL9YEfZWkgY5acMFwAp4CgxK5LkMruFqd6e78t7CWgkcjtW",
  "key24": "2AUKhMGSJoMMyDWXpo5ZLFALhoy4QucnBot5pK1GDRwC3MGy1fkvFWXb33UUhvX1SyNytpvCFqxjjv4tEKe5BjqX",
  "key25": "21nnWdAXBhHw8NFfEjizRo26sygw74YrGnKwMNH99FsQGF73fyLq46jNR6weZH77PMGcthTDrPhrd764qZ88BJb9",
  "key26": "3g6S4k3rkr5uzgu3euXzWYWvmZYDawzJduFu7Vrf9bDeudzBthfQyP8uhWjhnN5EHAbW8ACw94SbuCxCKc19PH6E",
  "key27": "4dnbvVfs9YKb8s9Q5w9tZ1QLBitbemYkv8zkdqZ8oMmQYw2pbFmqgk3FQ29gVtmrXrpQ73GkwKtnbQ6jeMq6vgjm",
  "key28": "2iDbQ8P5hNLdAV5WijoMEWPHtwpAif7wBs87uBvJua9BfUgcU5v81KjMjCaRmjWBS6nXQY4D7pMD34b4Ju7USjF8",
  "key29": "5BRi2qqC47vX78Swips8QoqTgyEf1Es4eodQYf1TSoYdjbtYAQCZEFJ8xGJTD1Zzk3MLgDpo1yzQsD7CtBFDuug4",
  "key30": "4a8Jwu35fZ7D2AitvAhFWpN4WtCSigFHhFJ8MpZ3peBGoy2j6sdnFM47odJjYvVuxKsYnkbAPCcab5Qqh4q9FA2H",
  "key31": "4Vc6wxs4sCsomekCwr2SNBbi8E6A9DKqF2upv1Y7ivZ79GZhhLgVtCmxYZUx9emnWvcMvsnXJzw1nGrJxjyXP2xG",
  "key32": "22NRJBLQ9obeWsCXpPtqCkiWNJsPnXkcKXQBoRnutLnL12qZicJJ3HhPKREqQrPGKeUWe13voNxN4bEFEVXc4VzU",
  "key33": "36YoJqT9WtWZxdaRqrtJE2gF65FvDgQ8JxbMdaKDWWTr89tFUNeJb5gHpCLmythq6eCD7j6E1vBuuEWD5nNvrfvb",
  "key34": "5hTyKsAFPUGskNsumrRjhdPDAjmbxuCzjHJapxSghNqQ4pWRvW1A9FC42EMxPXRnNNdKLUXHitZJiEPGYqrgb2QM"
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
