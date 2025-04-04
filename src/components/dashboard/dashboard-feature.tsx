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
    "2zVR17q2Mke3vjhYEa1YUkkMqBx95pzu73VnyqxBSzBt6SQFKt1i2jWiXBdf6A3cEpgjxDNsef1FwM63b7sfet8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSPbqJUxseKn2VGzD3Na3M29ByNapdoWbcUpM4vekSaaQ5zWpf43SMEkxkNqv7sfVJ9hk12fQBNr3cNqtAW1taD",
  "key1": "3RGvERxYRMhBQnujABtPGUiz4Q9sKCwkTcWZkqcjaGgHZ67zp3uutoqSfoRTaFtgcVi6nF1iScH6vdZvasNSa3gC",
  "key2": "r53xqZJ7pmcQaC2CetQ7zRAsPxqUEfBYd4EDjHgBQPoDhnTH6HYmVimzkYv3EVDtG9EaeUJZCae2RLaVpCSxQdc",
  "key3": "2TsbM9cCyDHCqbkqNEdW8s1H3NN4iRkA5dDH6awyT435WoUw54qwA95sMqKv2umHzg95VmKo9p4f5eqi7JdtwSF6",
  "key4": "buCddXcuQEi8q1JnizdHJrL8HZJXZe2k9MemGDwA7EqDDwzmSsqFMxVEyYEUKipgvuiiLiBqXeek9U235RFfbso",
  "key5": "S8w4qVYnzownaCijiPZfspjpXBtwatsTGNmdhGNs88BeUtjoeiUzNGTMCUDPSiHQwb1uTakoGQPKetw5c2P7Yz8",
  "key6": "2ZLfcGAudnBQx3rUCTEms45ddY9yB2WDGaKZF1LaAKLZJrPvchFa6BSwT9uAAR9EBMvNQxhwpX2BWQzFspKqL1SV",
  "key7": "5t2yDtmYH8aQGszqY426BKc2WuAnQ3He3ieoMdhyZxFbCsB1Pt1H1GRRiLcvGcSKYjVesJEfqbVCTivh51dS9dsH",
  "key8": "3kxYWsSkULv8wd3UGLqwwppbeecnVBhG4g5ztQgzJGwXFvLTSfUTmqupNeQHsdukLY53uZUYfHrwZsryt4s5cksm",
  "key9": "5NXRhi4U91p29FLaCXHyXCtjoHYUaTeFrnL4apoYqhrTwcPZU1nLtz2FuD8NeNMttVDQoQD5UsyRDFWAP9tmjZXS",
  "key10": "ToGtPDyQBpmd7PwMkE5xMBV2Der4VYVHDe6Lhs2WP1JwpJqFU828Ufb43SWoZMTAABQwWzgLH8TZwQXLncYb6wS",
  "key11": "2PT7vJYSsybxeMg4XmUqNNu365ZiLfTfvqACUpYTJzhbMDCQ4kKLFMqb2xRfxDCXPNC6oA1RmrsFLiKj2AA1cVzB",
  "key12": "QWu95P8vkAZdEdy8QBrKEB5dH7i4x287MtYEX54XyxVdkidrnsVuodkWXdp2oGzUcfnh8H3QJ69DokmdrVWdvkV",
  "key13": "pcaYD9jfzPxPjAUvYf9xhJGs82xt6hY3ZLhSeYiyFwQkaRybtTXtSidpQYKbhrrkUdyQnREBHjyXpuQjZmtE8VB",
  "key14": "3Ks3no1qGAAPJcMusndmR3ugtjssJoGuiopfZwN7LFHqxzt58ToSkj1KdbtCrKap1nMNbVxnRLWyazwdq9op1WiW",
  "key15": "4sNDqxDvkGJH36LkvVN8tXQ5mBpVfWsUGxon1ySM2fbASETDTVfXbxFEPjsYXSWfe6La9onxKZRka7jPvjRE4cVp",
  "key16": "2JD5tm12uXq51iEZ8cW6ta8egjLWTeHxsh6tv7ZfPqWQoq36rRjWrqHmTHaTZdZJUncCQLL5bKy5N3nj1cE3aG5p",
  "key17": "4YcTNdEnfUDdmRiRR9PYnqMUKhMHPsVDw2fKiyW4drKwQfotXWBHq7sh4NXDsV3X3QFoFypebHiGehxnaBGg1qLc",
  "key18": "2SMddLEwCkPKatdxPGhNrhvKtz8iZxVxidf4By7PkobVEHQA8jMYSAdMrA4wSBQbxiW9KpD6deGbhMWYiQjttMB5",
  "key19": "2igBjmUqUtif45SzbVZbPu5HL7MwmJoXP3AqC2bnYqQTPkf9i357dKx73MgE5hQyVmEgATKwpFAsZzjvbm1MphvS",
  "key20": "5aYwLUvb5YLvg2T3GwKr5gY8rCv2275x2BhjdgwZbtNVv6ChvZEE6ufiH8Srnw4KUsjsnf44JUEw4MzWdSyf9H1Y",
  "key21": "2gc2mtHVnXwRfnk26CGemuXMCdHjXFGnnV6HERMoBkXMN9d2xJtQc9hRkd3yCPRZtBBipiJeCfnYwiFx6PftJf6Z",
  "key22": "D6zq4yVRQwYsC594LYuRVeYWZgbHh1Vnn44biH5Apvx5D5rFX9TihBPGb9sj7XXY68QKbnnNQNWGxGTxVgJUXKN",
  "key23": "3daUStAzDGJEJ1is85q7Re2CEyJgYcfoVfRT4qN7pgbFYgFBSyDCu3UYmeog3wG5BBqCoF9XiwPik3eUCWQ3pj8M",
  "key24": "3TGmKM5K1a6s5aFMHGbrDotM3jUr8SNFrvXZUvLWekWJwqze9QuXJFYHJUYWpiN6LCkFuwf7fMmH1SvPhtPqV5Dt",
  "key25": "5oqVFsDs1CR132TzeKLUnuT8cK8WVCi3dzL53ebhzARxUNCdHeBpeLJcWr6pa1yFW38TNL2gKfJoungQBzLd2xrp",
  "key26": "53QwFpBGcVLF99cJ8cTbVBnJWce24Zg3Vs1Kgu8Cn1JFg4UwZsjVKCpLDYTXw7wdxyoWvXXAT2UZ3A9UB5adYSMq",
  "key27": "DWRDp79r438WiTxqZdgDWgLXZCagJfgUq545tg6kvhoitX3AmBWmouoXNbqDbfCoNoRqs6PsraabfewtgxACS8d",
  "key28": "2Wua34giPGm8EWUeKurFGo9GTSY4k8BPDRDjD1iL93hKVdJYopstqM4HFUpTSKFBYdPrSdgiNZV7QuQuyF7ZCsHn",
  "key29": "xETUXRPLsYqZ8NGfUbgvehurgei6TqzuqSRXbKW5VQhm7x3dAbNPFcNZSa3GK6s6q9KMgaxGqEDQKaBRHG9Yhnc",
  "key30": "4DaTfNuZ7nX7Ep36H4BwX8BcGzkm6mNVXyjMBPm4UVqgWqKeAp8qieVjHoFmCHHLpcjFZQ6L8C1FZswdAo4DMpQk",
  "key31": "5RWF5QB4usrkhLp3bXCFEBbYvkFSVa35jCUkZ5QeSoBDbasmjwmu2QSosfPzYE76bjTniJbb1AuKRGN7bfWx1UQf",
  "key32": "5VDZbphqT7FqkbKcbR542ppZmYUrVFJhtYUrwLAfBQkiGZm3rcRHiAy1XFCjjLRoB2QnE5c4Fhdm7JQM6UV8gsdH",
  "key33": "3xqB3ctPtASa6dpXvEsxpsW2nLwuG3ZiayYQ46CneCF7AURWppS73ZAd9XcBf7xCb16Rdkkgmtc7yUqRYww2FNGp",
  "key34": "JT7nPkb61XH9KHaUGrcUn6GNM4KJBnNTNAia7K5SPw4SMiW6Trv9LS29fzePGJN3f3NAThn9Q4BXjP6Q5cS2y3f",
  "key35": "svYiDJdkGP4NkTRtn9m1J8MF4Ssox9RxkepNvhbxEMxaM1tAVcaXkodUsNqgQmT6AKy1iJWYWNHxR6CativyHnm",
  "key36": "5BtjHDiM1Z3UkGy9y3MTyGuSa4LH1vRLD1DHG6Y8HMKNKH8ropuqqvke7GiuLbR5XdsSrU2ANMer2Z8jokyS2y5o",
  "key37": "5cMRU1Kf62QRKSwwg1GkUPVKtH6oKE7Tg6viV28PR4Un2jG3tmToe35M9Dff9MaD6rC9AgxnvCLbkFbmAAv1d6k7",
  "key38": "3uAti3PpWgaFtMfQLBWJPcYDkKPGV76mSQu8pvNmsEGZpp4aFVuWeepwcirXtGvSFZkEfwvh8Pe1oBWTmWPLdz2j",
  "key39": "4vDjVoKHDMUxa4naUsp8yTpkvmKfpJ2jBcm37gvvx6X87pSYjxxnkp2VumRkytjq7bs2QDhKHctpAWfuzgWJ1g8v",
  "key40": "5MT8oUJUrWCkmQMycpoktCya4EEs2Ge8tor3vc9xY8ciAWgtQexeAoCbVEPRbZvXsP7vt6gVZgemdD7GdDQS3kkp",
  "key41": "5K78MDUnVQGyc9yTMp3y8hcNWdLReTV9Cjm1JjdvLok721G2CFnPvtiQjPwbhrA2ojCFWS532857TCCgzFpjLwvf"
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
