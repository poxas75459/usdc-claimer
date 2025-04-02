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
    "27YHfvJvCcULs5XZnFdSBztNASY9Bxpxn2pro6j4sERDLQ8JMxsKWs57A5qs5LoFARaUzqzMWa7XHkX5KacH6Cwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zKitjiT1JTz5YZkyqv4G3TBR6SVM4XehisURMCnfaGPocAiHmHy4yL8sLwaEhfSjBskD2Qv2KU8uYwuRdvXgrcN",
  "key1": "4qq6eqixyLyjTXXsAohEuqqzuHbsJTedoeJAPJxKHAhWFEnZQ3sWtAvg1nvZofvWTE65uvHMvyhNVwcFqPkD67FG",
  "key2": "321aZ5xjxNgpn5SAmKY3EidCJkRLfo92wQsL8w29AVQVY4TYsbFQKr99jopq9J7pcmM4hTDgULyrbdodvN84Qp1j",
  "key3": "4WXwM9MJsNJALpJNGVvZRcrsaMqLgHKi9mALK9ddwfJ9No7H4qBZKf65ktKKVLgwxh4iPvohuVKoqWiSPLojtpNK",
  "key4": "374aPh75gLWp7FuLf3hx7kk6ARGKNAKJD6PaH8Jv689g1GH7u2gVG4Wg9QwQsC8J9L7h1G35Yk7Yga4DCZmhDwhE",
  "key5": "4rYBagAETDUSr75uAmrr5bBAXcp6Rt9X8niwQgSLEXnp4Rq9kZimmoiibT58wc3wsuT7vZXX7rx6GsTGZ284EgLm",
  "key6": "AgZVMQ2DhB6hywM47jv7AsTqApussU1CAcfQ1QMX8BB8jGd3r6ZRf5vS5BH9s8tA3aJGhLEkw8HdjZd1NKrMs3D",
  "key7": "4fuiv6cgnSKBmJoDFGpPBSDuuXNkyEdF9axfdnJeRXro6iGoz7CyH4EKSYNzDJVCcQKwSghZdBvPmEPAKmRKkebC",
  "key8": "5urR8eDyEhBf9YSMCqhPmLFc2V3zDf3KahuKx9gKhQsPUtU445fc9gRPCzNFHybU83Ke6FxE7xnyaENKAjNN2dez",
  "key9": "2rJv7m66rNoM57EHHcUHrrPTnRjsQtMPCibp5hqmEzLMMLQMEicvQJyg5EFWA8cmZT3Umorcto9BLvqY1Ymoy1j4",
  "key10": "37tuKfmfp1djujM8E2X46cy8kpMKgu8cuouQtSQaAP1Emc6sMUEcJVyMgySTcYGN9Xha8fDAEZosvUiaEiTH9v5W",
  "key11": "4TUtfBnQXm9DRA2ujK1eYFp6EgB89sxcQYaxsmmB5jGJNYcw438ddmfScMJg1acTQxcdsa16HvHZcQkLXUx4tfNE",
  "key12": "4QL4odabSPo9MYVk9ERnavEBnJ94LGPiATxJbhUJdFRo6j8j2stBNKLnDBbATmxPPcRi2nHLsqfxAaJWYYWqE5CY",
  "key13": "5Q5yCPhSgPuV5fiVhLB5UYvQLTHKf3CbzDNMUYGdy64ivkSdKC7YUTYrFgjDZ6r5WV2teERcPrQX9LudpaBrhJMu",
  "key14": "2pArQpafJM3v1seoriLPFMhfiSHqGn2PcGne6BPFK8LMr9Wp67cyLMCGC9kzZJMC9BDWPMVmcNJR26Nae1aTChjH",
  "key15": "oteEzffnRx2KoYfosr344ga4d1SqbU2DeAw9ToSWCW6RUHaM3jPNmRS37bpmYGzeNYbpsJ9B1PRP8NRFjEcrivj",
  "key16": "3Gxk3PzXDyM3o5CthJMSLYbKjwEZzUgQYjsYxAJBHhu8xm81m2AW2SsPDfAPLa6JZZxSshSpxMpv33BAorT9HdEx",
  "key17": "22hA3exzwQ2jiQTmyZgK6uoKhthszsyrexFoZt33XeCVgbyfye2UkyGoHBW6U1tyvJboHtiHWwMQ7CB28fKjNSUd",
  "key18": "3HUTmysekUEWaq5kdwVVas2zMk3Bzt4BGXUZqwMohGYUSBW5KGFpRc1C8gTADLgGZBEVSgbTqE87rG8EGJZhuVDF",
  "key19": "3qMYAxVWWQJ414gQGUKVG6Nb5QEfakMBVYXKer5m2781B8WMvyoP9PsxYX4hGaxj3XKGPhaM5p93te5ZjNe43999",
  "key20": "5rrNmU6tCTaTqZsSbwVxp8wiLETrQdhmxjVyThMCznX85LyrXE8yieFKseebRG9JyX7N5KSh6FLtC3CvQt4dJn6F",
  "key21": "4VYSardPWprwe84sWPZJwfyR1jjX7h2Dx5u4SwSnSDLPxtwp7agDqk98xkGf6ABBsKuUXMwmR3ZmYWRVg578Traa",
  "key22": "qPT8niGbrEkt1vH9oKaUd8FXTgTm8jovX1mdrjtwNd6QpNjSEU79YAFvmzLG3VDhHzsgfQzozPf34UznShqKFRn",
  "key23": "2FsyrfLCqks9Gx9V2kXTAZ5Ymp89kqcaQWhRjLcH4JMLXcrvdYQuyZARPRZ9zaZ2Zj6G8sUjU1BB9egtjG9T7ukL",
  "key24": "5jLtebvnYJNJNnRzFiGy6NaY8bLKzwBxtHW6wG8x3YiMxzpGBnF5yz8CAiJCoKXCoq4BN3V9s9oKj4nKFMQ5MVgc",
  "key25": "5u1g1nESENuSNepoeiVMvDLLZpDjzziCb67wkfaP3nVmgDKPA1o1RUETGzX29xAi5oW8YxPMvQ1tQVXim78rNvav",
  "key26": "525P5VXJVuZ86Vk1Cx7H33JDX1xK9En19uXXFZVsSEMxs77iJSoeDQuDc4pQogeoGLR4ZEmPmqJuTJXaXkfGKc5f",
  "key27": "5GH4uG4dmhx5gxh2vFY5EecV2V7HRMKqiS9LohBZJ7N98UyvLr8vmKwXqXvkbByE3ed4cYAW8GDLUwGEdX3sdTWS",
  "key28": "4jyfPLBzeomQUyKVLf6HEebh6Q9UpC62fgGnbWmYcj8jrYvFpXuWWD9o9RqKuUuzP8JjBqGLuYsT8VUYHwUUrGjH",
  "key29": "5zS7RXJT2p8qqxgafE2Btcxs3MeGaKqJaFyReP7xxhPDAPny3nfeFHuDzKANRTcwWffrXSPpVs3HVVtYvYUPCq5g",
  "key30": "3NriZbU5SQY1RNVxZwdUg171sEvs71NVjxqANiGQ9wEPidcjPfMGmGn4kJPf5yic6JGVXVvLt5Lakmg4SE4QC6GU",
  "key31": "5FEXpaEiDCRrTwwb51kvL84w3w3KDyMkDdyeNdoLUd7yZaxhmK5isB99sdQWqRuQg5FFVBtacNHw2io279qARn2z",
  "key32": "5FLY6ziz6HwWqxn2N38hv4rRRbWxVQwBpzoJyEGqeRLkFadxoEayEX1VqcKqUUEJwkCdtWjZBprc9yJV2R6dEMPc",
  "key33": "214M214MAnvAGtuCyhSFj66Drwgv5amL7GgtAKoToMT4v2BmiLsdwhEwi6di7AdTPwDb9DXfZAC6YLBrbZWPSacS",
  "key34": "4gSiCn7Bu4B1i7Rw715d3s7zZTyKKurax9idzfXzcmepAVzeDT1VEYoNuZnSLFc6u4eaGQpj9rCgpdBY54vAfq6J",
  "key35": "5jEv1D8JiHKRbvV4BFXSZMs5ZyEoYbdHpaGwZ6R7TNVR1ow8a9H6trJLDrVRovgksM2u2VpezcJTViKHp6F61jPk",
  "key36": "3n9yd8L36htPLj97fmkAgmaf3ZbgkzNXjnPhYuh8nJobGpmKsoynskVTZWE8FYTRSvj38MebajS7mKCnrGDXHq7u",
  "key37": "4XTGRX7iYqwJ2pV7MxaeXUcm9chX9WsKghUmY3ZF2sLTEA57pHLA8TE5VJP1B7sX7GXXFuUTJHnS61ZUMoEyAeTK",
  "key38": "59aPfzdnyZwYadnccNULJCBqST29aQDVBt5qz7i9UEASjd5Ge5kLjHQdFLQRbTUMV8ACFrwLs9rG37RHCqyvRaLK",
  "key39": "2v11pdKnLSBP93QTZnE866g673baRuF9UYKZqK5a3YAvCn46tgas4zYwQ7p39TEY24iuxKokL6iNKkGna8MYNfpJ",
  "key40": "4WKcnmP7rFePsHkXN3uT7vQqXNzuUgE3XYh6CQWAUhW5hWG3XCpDpWMVS3f4E5hLrYEc699yKLWvZvMUcBMBLTJd",
  "key41": "26RCaUfbzMwz1ULc9vCLsMoFtjCMo5APSiEUBaLdCnB3bGaXUNF2jHDr35bsCrrwytnzWTSGDu3PcXe65Fz68XkH",
  "key42": "37XLfQmc4NBWU6msbDC4RKvGStuJLADGUj2jSw5rDWN7S2QooMrN99CweqfhsznQYCumx7f66NpMKV3ERAEMESAP",
  "key43": "392m32ZFuFpMRsE4wdBTgf7ScdiWQSHr4U6cwj3T1fDGTy6wVRiATwxFNB9p9uc1aKwxwk74Nc2mm1Ce9j9Mf1tr"
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
