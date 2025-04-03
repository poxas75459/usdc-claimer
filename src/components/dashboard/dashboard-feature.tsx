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
    "2Tv5GhX2rkWCHJYhHKp8VeFcZ3jQzaqn84Y1A4JJvdjtVQh4t3bMKqL3Rf4WJ5MDSWHBr7GSLuK8bvd3RU3u8ahV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k7BPjZU5fpTDejVtoV7frK7McCLEcTUyz6kKJX57FuEowmvS2thFCspAAoQ4HJfueA2v6oVkSzxyHVvPSpyFpsf",
  "key1": "Ye2V25hrtkeKLv2pwwBeQ9jFubrMP6WBvDpxRYsNwCvyZhz6WVzE5vXXmCVn7ZHXT6KEAVxpfgyoFEWLhxY6Hqi",
  "key2": "2w3aY1heYrwdYehF2a39XtwJkco9GXXafid9RX1smFsWBA9b8YNCYuAtem3JqAtySV2W8LmfDZh5hSfHRueLsq9b",
  "key3": "562HM5NhfrKjqpUpHEaukdAho12tfDfsiXKG1hUqCz6sZnHCHBTryPhjasjizzdn67gQ1KQt2qkhSNbhBJiXDyQf",
  "key4": "5NG5nAN68kLyvxaN3SHhVoYX7V6E4zGify1eegKeBuDRbZNzfdXmTCsdH16d9hEvXmYgX6vKirRDTFWFkuUjpsUH",
  "key5": "3h1MSyoDqwNqT9ziyskiyv7dp1VFFbKDkFssy3v2NtAbubT1uAVKsdrCnmFC6ZWNiaomMbvvx26fJ5VdBFkoqFmj",
  "key6": "4NP3W71uVyHcZdUtsJSh7ab5XU3Xn6PFVKAGnR4bEqywCLPuPP8ak1yS4uBnC8sr3ixG5FYcwB8AKPzc48fF1qQi",
  "key7": "3oi9oixtDfi2qEhuKXGrmcFxvSTsJXqjktjXvzgRyjqJ3T7qySdG2XW7epxnZBLnocNrgZ1FR9jSX4vpZ7ka4MLu",
  "key8": "ySgvPF93gqE4cKGXv9L4V4ZFfQdpCX2KyYv1NkwnPLgr7zj3uGAe2RJ6Uo5odcGj6Wo4vroLCDjQVsDZVDtDcmD",
  "key9": "4Fh4ZFXXgueEaU3MRsMj2bvfxSHicZjaGxd2Abz68xjdwLyxPTe3HdvCXrGBqk3LL37byiT8nf5qaCnEugf3QVqz",
  "key10": "62wa6BV1cAJXWrXMorMs5Pjdt18ckaoGCfBgPLtsR745RgPUBwX3ZKtrATCmbDF47P1RA65yg8F1GCRB73ADHqLB",
  "key11": "3GajBcRJHVLHTgVX82Nmsq6RV8EuUYxgKEF376wQRWGotSAZ3zGtaiiVSEJdbp9k6gqop8HDAFoJ6csoigNG4Bkt",
  "key12": "3tsXHLJ7hCT7ewg9AfV28pAS445mEQCFuFv9rGKeYcooukUuiZTsF3m8zmEAhjfvRHWGooGLZKcvJVUntwpY5nj1",
  "key13": "2jne56K27uQwTsufseytWxYoQbHvjsmNnFqQBUK5huntALK5yzN56CNAXYv7VZPDUhbBsQR3aP6eTuSKMP6WVJng",
  "key14": "3LcGyVKrS81umfBUk3uekgqDKnvkeBP5zdNpVyztpYs4cjSHtiZe68qvMoFXx84vJpqfoYwTQfxeVAL57qSNnJvs",
  "key15": "5jGPnooEhyNxWmHj2WKYqnPMuBXhSZs7bzPKgBAw7YHurwWhgfVwhkXVSJxfimTtvY6MeaWpTW1GKXtT71dk12HE",
  "key16": "2yQQefCvtXCyZdaHMY12CUFE2EWJpbTLrH5MTQeqR7UFCdG3ttWRfUz4pTb9b2rBiHuMZhUjBi8aMFzciyoVse8W",
  "key17": "5rJcCVL6WZp6ewoZrUS4nUUMdvjzHmfRGHXeGo9nDnFaruRriW9ZY2eRCyqnJHM18P9kJ9ddyNPLWeDPf3bRdHu9",
  "key18": "2mAVUQHnnkLRSDjXF4DBo5NvXweADi3qSnYumTcaHKqhcpcJTyxcprR9mA7RxknqETKwNTkNccC2CaZdmRspa1dH",
  "key19": "5fB4ch1D7zghDNsi6UPShsMT25LoMwC6zfyRJHvVwnxNb7HpHLdswkzKDDKKV2UMNS9P6yd3uzcEjC5z8LAYcrqH",
  "key20": "KeAGYuZ8rtEh9Eu2iWjaE9WsYGws9NeHkANKDuGAHrHWKdmWSiKWBPZ6bBE8kNeBDtfJEs7R1K3b14Cc4gUA5KW",
  "key21": "5zMTDBCMTfdTWvmriT2JceBQysHCyHEuAu5EB98prAKnHKBAWAtV9MppWJfKS7zgeqyi75JfaLAVFNMRqfs14Cr3",
  "key22": "3491yCWwy9FfMpXx9DbCtX81bS3nvvZk48xyYZoHTnAceYxioQ2kHTfBNWKh9Tu4qaBSU9MmvnAkZCphwFMbJ3Me",
  "key23": "3SDakbS7DK9xYVPBjFBAJugwLMVpi9QaMCSjweRQ7BUQdM8S5A7o42EvSzPnBxLJAnV1csGTZrP2wVfr4yAFxMuk",
  "key24": "2sK199MpSyRsRWCnpo5gTVg9LueRit2oNs74QbHRyTrFKz9SWEbnjTGnPDpw81y5nyVNnV4nqf522ucYkKf6CfJx",
  "key25": "2krBesjNiTkYLwMWiyLzvcRVsjo5mzvged46UhkY43KLGp4sfNYEC2e7bQKnVZpSosYfwvx9JiNvLpWtaBFCDuMf",
  "key26": "33p4ahiGGLLYF7SGiWt4hRBdkV5hna5okvJnAH8YmqsPt3bSSLeAsbkTzaTCLxz4YHvDxk5qsrzE2rzh2RSMWVyA",
  "key27": "4PNEYB4XoY78LNe1hchrunkgVWMgYwr9vXTBoyps4kMdau7sFDzdfbGEdv9nynUPqwuN5bgAytxoTsBbyJELHU2f",
  "key28": "32xMtWWUyaUtHUDnRNPZdbMtbseyfZxy6ZWAFEEP8jxHH6bKwNdtxfxF1GtLqkPW54VsftQD9DDfRa9aAVxejSm1",
  "key29": "5p1DB6dDkJ7Uqhkd1kSSK5NPp17cVmnycabkFa62bvLH4x9k7B6mD6qCEaFahX9eHwBh4S7uNx4XagVUwnLSMJHc",
  "key30": "3guta22Lm5nYDd64xTdaQMsnR7DjhVa7y8KdKGwcYpPyv9kRAjDhSLUYsAuwr5kUN2FXfDAeJTH5YgVhp6v8Qg5Y",
  "key31": "3418BvZ6hNkRei1QcLDFFxQ6F9eDHxtckEN7ohSErgnumU5mR4L8uEcZ2MW3qmpg53iQoMstWsuPUwsBeypUwWYC",
  "key32": "5kiikhf1gAmqnVdhipE3d1KCz9XkhZCW65v1Cjg1VF1Qa4yf7NmMxwagQgv6BDGzA5MpjvmzptpEH9yZT65xHDhF",
  "key33": "3WEDroZZipAk6sSmsd6vnejUMFUzg7MebVdnyxWXYN62AXXuVyZG441AneeNGGkSQxnzHuyKuCSwG5jgi4UVvbYN",
  "key34": "5fjstdQSgHdjuUPhBearf3pXMPLHnV82nkShybPeHkY4kX7WyqeqQRTucmUoWMUZdzJsdE5a2G1YND1ANJcR6qqb",
  "key35": "2PmE7phT3ydkWc2F3xfkLoC6AZ1FTMJUaJZCpHZVGBrJyKZpFKuv9RBwme2EQv6jd5Ws2b9zF7G1XP4tnhjWPdrB",
  "key36": "4VKxWxHUaXA6xUkhZcj7qAf34DtbuWZVWAkGvZNwDU35tXXGrQgbZMAkLnDaKPSBhcjeHjrv4afxqtRTFea18wAg",
  "key37": "XgDZdkwWuhFfNatTkRvLb9hemnBmKeANRMFjJGuFRgS7VWki1yKPKSeWmLPfm68Z3Ant1QF545pehhuB81hyeei",
  "key38": "2LXsEaetDhEQsnnrQVWvRR8GbVDhRXr6or41GVYWSQyTj1zEg7Wdoo6YiDCE2dUT6Rpios4kV3WHxWPoKBXwSd2s",
  "key39": "5jM4W62S6X6gNaHntnn9Rv99gXbkbrEV82uYsnQAxchnJznfi7zNi2SABh8jn6tBQ5QvVizqmqPdX1SQbDtuZF1s",
  "key40": "5a5ZnhkPwEHp9qV2vAvGp75GVNHHokDsUPFfFGGgnjY2eqDdLnZTbm9LA3C22LZJqrcCaoBLjrytCUCnYzArbPoq",
  "key41": "2f6cJCJUux6n1pzWuqXrsLqamrQ5dnvQvUnsJ4C5vzCS7PsoDxWddWEDhQLyKpzwFtphfXeL2B7RtESYGRgHS9W8",
  "key42": "3VyzuSUgCc4tUQaNTRhCZSLhNjTzHjTAXXh5TbkCVtpfVkysQGWu1NEyF9nn9FmwFp3ewAJczww1YqKYLGPNcUJR",
  "key43": "4Eog8jUzKKUCjWiY3XuEvpLew79dQUgNYFnVrN2LoiM6ZWTtGrmnMLpFRd4r11ayWgYvpCFJzXmHQH2L1dzF8pq9",
  "key44": "2srRjA4Zne9Dq8vTqmz4en5BWd6RKCMhLMXajLw3NB9YUYExq7uPBHwcyU5afq7gpWAM8NJ56K49XDkx6wX3zfv8"
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
