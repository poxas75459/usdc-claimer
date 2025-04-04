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
    "5VGvjyJivJz11fKP7v6LVHFLKy19GvETNDMwSa79YR1ZSWmHrUeYAGBRoNU65DwLGdUmBF4Gy2x23ATh1zmjYjU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T2hqHZwTzsxh53AuQwcyfLx9GJY62xzz5VqSkX1cpxjVppYe5SWeJWBsQ8h8LKv697jc811WyjFMUAR67qM2W7f",
  "key1": "5yicwMbK4gyEifkdEVRkhB3eGMhYwgLzZ5Ub6EGc9s4ZoWJ6QUA3XpyQbaj7VNFLceZMA1AxVhEB5kyWDjYnuQWV",
  "key2": "3SXrAj6F1UicLLt75xVb4G5S9HMhpSneJ8zsGcfzVVh71WYKRGBnHGhvwQrJtocdtSAEbmGJ1JNfNBjhYXvkDCoZ",
  "key3": "43fvU1tS8x1fr1ndzXbhkSXLTdt91GKMbHFwRBKGvtty6yywQ1B9eeoKRjUoLDNmcQbPT2yVNapAjjd728diHRXb",
  "key4": "2ZBs5T653ezrdgBWetzhhuNYy7u112ADfKqdmWTJ2kY5Fha7cGawAgAUKCm7Cx9AcPzVBbDWaxCSuQfopTka12aL",
  "key5": "3B1zyABdNLGdGEPNH3Fbt7iD3ERpqNqnzQLHgTVmNrgit8mxEbapPKGBZWNTtLtmwMUjTCcQeYb3wqBpgYyMKmVo",
  "key6": "3fyrSwQZUuJg7ziQ8reXPmWVwbBfYX7mK6TNYKRgzeLngaV2hFSsWp1mmSCCwPoz2Han5V5BSczPHwUfDDKEZi6G",
  "key7": "4TZgptbFQ4yBghpPkkqFH5RXT8rFHic7LPtbSWgZTqdV66o3Esbsvs6HMCXfrsrpydWS9aAQ2Vj6GNy4XpMJKESM",
  "key8": "g9msKADRDXGQ8d6oG4rfkMGt6yntYovr3o5sCeyxs8HBPTJ69UKQSaK8R9uaw4S4LqfDLpuGMeXTqx2eG9hNcJb",
  "key9": "5oi1YAmMqbPmpMNj2iXPFPjquXm8FskLj6Y9J4ynggziXiG8i94PD1ywRgqbpAyCRtsDeU6LfLQ2dGiSZfGqrCyY",
  "key10": "SkeyAqKhk2QydM6bnbBzVKYoiBhtBwZyqmmStPSaMRB3bYm2M1EywY25yrBZkdMX9qWz95pDZxuinbpakkgjyX8",
  "key11": "ovQJSb92z6AusTKCzi3Puwvsr72nxhhcu2UidT5MYD1wYVU5Pq61oaacsVtDCWkarnqpDbZh7rn1cV8R9e7D9M1",
  "key12": "3LjJEWkS1ofDynJXrPn2dBUwBg1SnRVHewE4LLn1ifrrFoZmY795j7DiwkKPM6aDK8baHZzuiqcEksShC4gEGYWh",
  "key13": "uKyDdJAdUoeYwFQhHRJccgCHxsEpaHxmdE3PAqmERzy2ypwpV7btMex4Ywo5tvNsPed7ZvpKT7zCKGYn3LXdMxj",
  "key14": "2r79dxftJKxFVujJ9qa1sq8EJBNFxUx4MEpftvurvVVcfUwqUcjiGoQBnRQw3xLYUpcm9RyN7baCk2riLGLZrHPL",
  "key15": "3461AXxduguUbJ9mXb4CnmqFFAGjcoENkb2WudMtchfvdaaaD99Rg1AadJAEHNvMMcfheZ1sRwSinH73kvZMbbaX",
  "key16": "5rdXh4A2JunAMFVtmHAX7NKtGzRuQiEjNHgPm7FD6vwwZ9746ktsH5xERdbqNsoPXAmWQgweSZAVBTgikAcKZHrr",
  "key17": "3N7r1r7Df2wsAj1fnGTZCNC7f7La4Fi6pptKGEtix8wetmAyf5VxDXDvXvJvRY2zyjxY7nL6Y4qtLfy6gFj3Ez1",
  "key18": "2Dr7e2BWquZB4MZpDod75ffQMTodnaTjCiNSKSQ7K8fzPcGUQWfNt2sA1BTzd1jt9j3JgcZxdXgy3Ri3y4HdToBk",
  "key19": "3hhYd8Q3n5poF4nwgNyAjutB7pT9irouxR6CmABAfJuZULfYk3rR7WaVknPbpkMmisj3Ac7G3RbsmbCdhERWrZEX",
  "key20": "2Yk848G3X3zA5uRviBtH1aYBZmLAZd4CxsxdMFwu4JLSynyZNGyWXzGaSUJG8NtDwMaEVLkoKkrXGfJ5w1dKoYnH",
  "key21": "3JudEEcKUDwgnx48a1JApzsbnMmXMMhMZRa94WKjnW5jR2AtW2nNTg5Q8JwZGkC3Lex3mAUzEmBVF8mi9oeqGgxV",
  "key22": "4f3Keg9raPzRaq7df8YSN3YayVHvxBVFPoYnxJaqSXbvSE6A79Hw2YdzyN4oeeSyDtkPo9gMd3jfHjbZyTxCUqAi",
  "key23": "346WoaSL6qtGchFSRj5a8GK6mxbFrTKNCYX4BxgGtFiPGuRMRGj6j9Z3up6d3AB7HmbJ2Surtk1TSwyJ7F78yosN",
  "key24": "46ttRqum2w4WE4bn1chFZPbLBqCqCtK5FQBkVMhNZfxb56uaLMKh6GANvtxwVHXVQhKcYgraEALTdKrgaePqy9sd",
  "key25": "22mbEvGGveoLBZgKAkhJVYiJzVQiwQpp5pNSWPGHQbSTKmoma93yMjNZ13FwikNokq7Yt9sG5gt8ndp339kH3KVY",
  "key26": "4mhqGyNuBoNnLBs72NmxtrAtzq2HcVGifJRh2yqsqPSQtiTgRJBzJSGDHvEr4DP8wCxSctmLbjtGRtES3WdvQzQD"
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
