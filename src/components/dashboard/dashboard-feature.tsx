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
    "4MeN7CK7rXBbhbgNnJpKAuj9ew9VjnNoJHJFNQBXkdTKXTQyrL2ZSk6nHuzsnhyNwqntSvoGKuSfzsXVe8q1zNLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RdGfvLifUPjCLnbpbQjcwt1JoVMzQwmemoLvaisRzvxaxKVwFmxyZcCAqCv68hg4uqjUbmVwzRbqBzLebM1aNi1",
  "key1": "4gWMuSbVvVu2j35eorDoGY6GKBqQdESGhRFvahMXaFakdRRC4pHTZjDVgrGVK7qPFtVuDBTqzLr85XPaLEC9CYsV",
  "key2": "4pUedaf3HfoQcLnMsvYMidWqgVvEqi5zRAjJvWFpUG3MJJyVgorcupSEY5cTqt6PErkR2gvWUGaM5QgQeWwHJmhb",
  "key3": "3pTVQKrLZHeX1b6pK34YW9Mx24Lkk6Pgt6GLQ4YaSNBZzTbLHSBd3FDdinzjcYGnASQHxMcEszrTqBeHwae6GVZd",
  "key4": "3zzKZsxDCJRYnDv4GSrnJjw9TPFUtbo8a3Xsf1cVpeemWuXELGrYKK97bquxpUzGtVX7wdbVhJMjew751A5z7G3h",
  "key5": "3q5NRczE5TKRp2DBPGLkKF1ohRk4LMsTrst3UJ7K8oxCW6xCLTEkRoobc4afQAF1oEBZEGi4uE4HpYWV7hvg2MhR",
  "key6": "HQMnqYrLFZG5BRkZzvYg18QrVtjB8YuovuCpSTtDqgrQF41m5XJ2mmThHHndni5iPrGRzS2Bq6YQs2ppVj849Rw",
  "key7": "5kzoHLbDzANqa7cLykgp6yoYNgHkT7Fcbiat2QREksq2gC39oAK2nwH1ktXVmBG2DVxi2v9cnJpgJBtfzjJMcaqy",
  "key8": "4fdhRviNyXTTaQCZeBF7SmHFT27X6DMMYpQL8vHDXyS5Cr8DPQ9t1Z3mQdqtR1VurKiEcmRr9gBqJrQcWQYBJ6ms",
  "key9": "3AJS39YirJWyGFLWNFBZoqsPp4BMNSn5aSmXgR1hdL4ouGNFJq6p6cZNjqcmkAYyXvufrmnTRV1jcSuVPiHVzzd4",
  "key10": "LHXkHJTwfZm61VPZbaT5MBiNowrzVydfnPPCcgXotq5MTGeiNNcsdLCNEcR4zjhwAEitroW2UiXmmXtJfG6hBjV",
  "key11": "5agkQs92Z5sNGATHFtEjmabaTWPt5iwudDiy5awCBcZwLVG38uJuxZHfRiWu4aX1MjjZMBZJSyg1GXpuoYmT8qLy",
  "key12": "5fRMKggf2jL7Mgkq111VXNMtnxeCXzZSN2rXGAgwdS4NzxEVVjrQoZJZ1tuZNyjoLKKZCHWCsLsLgb3gMBESFxsJ",
  "key13": "3wkAQLHr8Gfv2nJFYcWXjKFAtrfraYwgH8kd28RTcPo4yP5gdQX3FNknvYmjGNeinPdosiHBAJjhXuRSbFNKdNuV",
  "key14": "3f37JjaK41AUwzSts2iAvadcim5vrxhh8VwXj11aLJXgYm8LVSJaH91SMjK47iZJHMErbBMhusPToXFYptSpsHu",
  "key15": "32sEPzA68pRtNgXR9p5BFPf6QQzPpu2uDKQdDq2qmJ3A6gVas1DWEV3ZnovuSwkwkqDHbcKtQjChT37TpU48dUbj",
  "key16": "mfcEZ3LHofLDFh7ccVrJ1PjuYpuKNXhcnitp6LjfeqJada6StbfBCXRWQ7h7265uGcxqnzfKKawWPejWYgyQZvc",
  "key17": "9pM2SmD65H9N1a1rB1yW2A56eAwk1qzBwDFBGpiEE1yDJWiRHJeKzgSWQt7Pvg9UqN3Xqa8QeduBNh6SVDsNDoy",
  "key18": "5ht6pXja1VeQXGJhpmxFvo6FETSHCgfLX64VomrqKkyixRxR1h2cXL9VK1TrV8Qd93M6Btj2K7RLrEfq9K143H3S",
  "key19": "3fpNJ7kZ95hPkcTA8FSsdQeekAdrJFb7regmvZzKG1hqEnx56WHH1wxJWSjVhBgzkQKWCfxgW1CNUdJKwYPuu9oD",
  "key20": "2dVPQADtMKsFdEtyHD6pizJVpQsXkXZQnJWjSrgxWL4ut1XjqfA5yLQ8Tt9c82KsJSSkNkqPoPfAC3HynbpnqgUL",
  "key21": "2b5ZobX9kCyU7bTqoCQdASiP7VU8uVf5bdyPcUJ3eQUG6wRttNWcZcC8HSfk78NJKQyayys4171vVwNUuD35srA1",
  "key22": "e6Rq7edtCqMXiemocDuwdPSf1qhcjXiWtZNduHdG9JaQTmh2sS74V4nwk6hYKc9Y5cGeRy43kNAMQ9nW1NPxYdt",
  "key23": "4pxZ192Zi3ySaHnTDV7oBSGvyWrpd6KPWNv4owGZvDqmh6rikWLahuDfLNhCzQe2s1u2as16zNP2W7m1UvhTDqrK",
  "key24": "2iwkwgDgPYCkB6oZi3JFdNcqSvZXKCkJT72YCpoC82tDvhPCEg7TZQfPUAvD8hBUuhoMB44m46stfzDHtdeyb6H9",
  "key25": "65CiAZFwtHEUvym2vGb887M2vmXDRGuuvYnkCRcba5MHjjubMKbMDc3FkGrwaPF8eYdXy1o6LDuNMT5NvaaxAs2",
  "key26": "4M5qGLr9ccnNuc9axRTkimjrTLhNRgqXa9ss2jB7b2nAEpEbChNAiNzr3LE9AJnT1MreWhDVZuxirpK13pM2XasQ",
  "key27": "5xzbhdF9PoZBtmgJepbSWdxwMkg7N9K7ChD1VPM4m7bzU7ndvUgSJxg74qX4CirQPN9QxwEXd9ocL5L8rm5FRStC",
  "key28": "493pENN1KAR9jYq3Qw6VMSqBUghHqyzsH9P5ZMYr45QpUMp3zQsWBHwtbtLsWE2aof7Gdh3oyMTisRrUXpQemafd",
  "key29": "3rMRMmXrpV5Snye7f9HSLdH3XQEHjekPcUApr4j6375GexiDhfyrCaPZnLXG9FUYfaXmSnDHnwfL6wYqSzdD81YJ",
  "key30": "3gnrtwamob1ym4jWtxHVUbK2dSSJpyjLoBvpwHHhiT3wiVYgUEHp6ueBWehRZnAZHnQH1vH8uAKzbA49gW3aoMyG",
  "key31": "52uYM4ESjvhtHfWT4PHXudH2g48f1XNNzMrixyrqXRDvz3QbG73JhFZiG9274caQ1xPKbKo21R4NgfZyfBjgXgs7",
  "key32": "4Xm8AM3ALd7qXtXt1tfPN6JAKb9izmkRUiHguG25mPECMV1iB49PnqW8f1HE6FLSRyeMhfeHyvc4owXp67qgd74C",
  "key33": "2rGgfBUkrtnnJap1fYpQryto3oXFw4XKiMBhZj26MQBPNgBwacF1UyqduJR3TCHqEZHUp93MAwv1JFc1cc27int1",
  "key34": "3TVV28xKhVamn5XpK7A58f9EH1YKPB7mdZHCJqWwQxhUzNcLnZfHLYFdTUhQK244p3fu3n7dhPh4DpZAykF8ZSeb",
  "key35": "2XyLtKZaQ8VsLYXAV82AKbQKhtPpMEVYiBytiPcg5DLodEM1j5usdmWNaUsMP9K5Cyas2bdSPuLx6eAjTz8AGzUq",
  "key36": "2pNkneKpYu9nAF6QA7XCW9uTLyhq4GBncQiLhzazQ4aLRVjTMaQcdvvPatZK44LvUxUhXBMJ9efU7y2f2Gbk5F7B",
  "key37": "4FdpapFW4XC67qw7K4CsBsnLetF3Bn9WqXCz7ggBVaRq3qbRwmUFQbma9ndHFjW2AnwNY6ZFMtNWkx5S57xmKxZN",
  "key38": "5hGG9r3tSzbQJ2mz9D2BfaSPpZ9caL22yvEMmyqMriaGbjALdFgBuuuNCvk6atHwX3U5DNv983ejGikqWb4Sras3",
  "key39": "1kJg7J4GGyFJNiD7mfUSSiYpmmPm88cC6hbNVNnmRGCv4yvoA2gRjVSzbNHBZKamCdoJApP3hQhC4cKiNZoAGFJ",
  "key40": "r94kGfFN5Rrx3vGxkyrsiDPZr52Le3EoBXqThmeiQ3qCkjP96Afjm7FP3g1qkqC29tpPFYoxfhNWGYPHC9bG8BL",
  "key41": "hJ6LQpEQ49pRgHWekZndbGLDcQw3wuniUvFruYdm8hRon6FVTPuKTqBcV2oKWTcPLx1je8VGk6Fb2h1iCR5uLKy",
  "key42": "5xCyS8oZRGYsjmjq36VZTp7rpRM7H7skQGNnbXU9MXRBWoFPV8xoTZUDJpBbMDSwfpBaWbdsyqfRTzrxPmpbWPtk",
  "key43": "3JYUJRUpDTqrHcifKwBpEVUWdGjP2TZipkBFh2racUHwMdKGXhkkhgPuzhC1KwyDWHpMtzzyHPM3GCLkzYtQqYwU"
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
