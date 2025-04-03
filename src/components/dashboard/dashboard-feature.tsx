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
    "65fE92jBojVHrSaXqyTfgjrVYnVweeTgW6P7aQt4QbpjrkNCQrm1eBvgR8racyEZs7tttsV2SSaeXTmPHbe5gakT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hcJc3QGbGp1UoPZP9pH34FyH8WV2Y1B5vE5JwoiRFKGxQsC1cxMx4frfGQuMcnfJaY6B2cwdmxq2vXFCupgVGX6",
  "key1": "66hf3inpZXChp9GbvPUQN1KjG8NWuA4r9tHhVhqJsxcqEc7hY29FnViFXVcYvjhgSJxiaHG2vw4g5WhjdeXMxUVP",
  "key2": "2f8uEkuW4soyDtTWM7UapbydZTeWzdKdH8fbdDfxk7NHyM4VoZ2Q7ezAdzcmLWr8J9czpFfBKgnMcBJyy5j6xGXb",
  "key3": "4SseZ3Wz4i9fEkrMQyJTC2U7Ms7Af81rrqtLTnrV8raQFpsC7C9Fphbab7epKx3dcUN5RmE8tXmjudvHBp3o1MkG",
  "key4": "3p8d49Y7doxsVsWQDNhD3bjDkeR4GSzGnP6ZDRqeJgYhpQ1cvfoMBw9J1bm6cy2aZakZWtVfzDMCdaJp7k8XuK7X",
  "key5": "3YnmzM6topbG84LedDytcusJNVGenzFjwHxBuyBJXUSvcXKp6L6E5ZFP41A4YqqKUVkqR2sKUoBDSx2bktR17FW6",
  "key6": "2wwvp6N2YiPzJWhsD1wy9WMEkC9T8Rusasbsav3kgr26zzrbFdiyQAq13Z4gCNjxAJbh4uEUJD5gMFdXuCkLSGkF",
  "key7": "4kEB3VhzNGvpMYDQymkfUsYMR1dtdr46XNnhnEYXBoAsgL6UU9A7PPnsJGCpsMyrp7bUHtZGhmRCvyc8tJ1513wE",
  "key8": "3Rb41DEECfY6DPdLkTNj1skMqQoHm1sfrxisSnWfiDoC6zfumg9ZetpnnLPBAUnrGszNDKZuVnafg9XnqEsA9pxZ",
  "key9": "cBQdq3c2qcbRK4gfcdCWdBTvZpXuHcVWPFsnrz4yQwYeiuJG4CHgNfYAQyJGfjiAf1jSwyuGE3e3d3oM1extwqu",
  "key10": "nsPL9cyBw66ARVxaNPwLEnkR5bsW6JZktG57CQYp35UJwbkm83QUC6mEAtsPQYkhopdRbysAoRaVLUEmGiwdEp9",
  "key11": "2y1YXBoE6ZqaPSGJDndrTWBWKswNRt7MaPV3v3fLaSvDKGTzi4wsJgE9oVLgQrN9iFow9F5RLpYdazzpc4B2repw",
  "key12": "23WTd7wLFbbUX77tGbn6wZBe6zyMt4DEYNvX55SMJHsADHNqxFVXK3v9z3BmnQ18AwtXNe1LSSWDJJ451QABFZch",
  "key13": "2kcTB5U8tooJCTupX65E4uXJwWHLXZRFSm88DMrMfAaBh46aFKhSt4qyxYdwfZuKt38DbizZoXCYakqV8GkWQZWy",
  "key14": "fsD4W5vj1cHJYiUQDobzEtnPbsdZSUToLqMcvAUaf2pdLG2Ax459wiszFy11EEXQAtogQSPmwrwwFG2GgBghFcp",
  "key15": "3z1ADUej3qiLUvLP6GDVzNhbGV3KFNfsmZ34YsVxvcefm32fQxCxUUMK8kmkur3fRZL6QcUUeo6ngCxa35GTyzAS",
  "key16": "4Nf6W7kZFy5x9LB6Hc8LhzSaZs8ujwTpgziBDTCpYGSXUYCx6u4Kf5cmLZ4WVCBFWkdTSYNwhpwmP5oFZzmrb6d5",
  "key17": "34uVov9LCpeTPUnsfQo1JYBFyFs7dmR16icxxnkrvDqsdc9yqYaKkQVXsp7BRjNDJaJHj7vKcG1iowKSU9jjj98h",
  "key18": "5CnEtgyLHqFZyp88kEwwQ3aMQD3Y2rUj6TWb7Xpo5dbRFJqTGAQK2fZBPX686YFvu3d4dEidF1Xh8Qra8Gz7TXrd",
  "key19": "4Zrs1vwfGxxD9X5ddAUtF5MTQpcbXjpyrk6trGFmMfbaHsS46zoSEmeX4sEKG2qKdyqffPcbCk4Mvd66GJLFP3Xt",
  "key20": "L2otxo4djRTd7Lmv4LLUtFa4y5bxJv1pqo1Xcc9ku7Y5VpW4PAYkuzx6r8t9Q8RAaNBAgSPxLK2as1CZs76WDnS",
  "key21": "29Ug3BpgdNFu5dDSXj4DjaPdhWgRgz3hqtZ1Mkvtv3yrYY668zoX2dB78jgjpkFdnU1Td51Zfr7AULt4SqPt96Ro",
  "key22": "4eASiYzMpxvS1H9kDhs5qLdUq93H7JS2Lx5bbSwidtM26iP4GczcfJw1JQuCk4xhcvHs99aWhyFCXVCJY5YYKAdo",
  "key23": "2DX87MsGb24hNSD3XFmisisNdnFdb8qKva46m8r7VEoGoShmzMk7JQyrk1ziPKb2md7gLsH6iDJbPBpTQ9bju5J7",
  "key24": "VcyS4q78bnsYUYBahL8uUK5RPWW62PmTgk9uaC5BVFqFxWPeerBnQe36bBYhWoGCE2cnzzJWYhQrq8ksYpZkmGq",
  "key25": "5GRdpFidRX6vX5JZ3U4i4PocjDneKG95oDoQWKTR1eoqSm4DyS9Nv4L5MFyTmc7tEXmQmnknQanpfCsEYNLmfhsP",
  "key26": "21L4roA38tcjmim6ri2Q7L78zpQ8oJiNKoKrePruDZaZk1N4w9STHAgGDjQYoLTADtYXtKQXUB8DcredMZA46dE3",
  "key27": "2bn1qvKUTxEm712V1wZM4M56xHo2tsea96oRVkAtgpALD49dvkDDY3vHLBEs8BGqLggwXAU9v4S1gtwZJCD7C5Ns",
  "key28": "2N3wCafutPHrX57abfJDEnHdhc8jmvjm6yviPbdAMMp8QFaifPkdeMkDkU2JSNycq42rP3L9K2h2DZ2nZFmUd4QX",
  "key29": "4DoDa4spfUCh7SjuUYXWg9Zy5wpAmGyuXUkaMteZXrNcU8jRe5GAuqbVC4qX2TT7yWWFhaXURj3NDB1hAtXHsRtf",
  "key30": "3cf87hi6tdC6M9cwikCiQ3oP5pq3NevxwM65sU8UD72sxQBRx8RXQgD3BqbUc7guKSAbBQGngSvD6wzGH3PVtf3M",
  "key31": "4xPUpup5danDJARVcdQ4kkn8acXkqgyp1j9itqmaebYiweyrA4GiEmCy4EmYvb5qHjHHy2XgRZcaPJzmYK75hnox",
  "key32": "4zuhQnfJ6AUgtBeaFvw9RXnZVGWJKczC7ycMHtiWauBLDcw7oPS67pqvDPL3TWLfAYpAZsyYpjrnz9kCzKDWcSqZ",
  "key33": "4bhtZ1w5AktFiRHotuFNArVtNeF34haEHjoC2faYAq1bgKhjReZHMZiTkfWBn92ZqBuGDByY35x7iJAPBSNsTFq3",
  "key34": "2kzjToxsF2cpJvoxcxa4aKPW3ox56vrCj93zgeEfHmoEsa1jzzeKcKLNjwayoAn1rHjMsWVgpc8ean8V6jcYdES2",
  "key35": "LKT2Woq7L3WB91o3u9mqYZpk1hqhvt7zjZb3baJf24feHPToxFXcSieVTw6RweUVgc8i1tYD3wvgtiykGt6wHAo",
  "key36": "5fLS4fJG3hEQ8sDdj89FpEhAZbHYrk2upiYtBRc7Qa1Bapa99Hk2vLmvtrmEDG3gdDgzvApe4iEsG9ohtxnsc7Si",
  "key37": "2Bscg7FMpjzuoxaj4odj9akGYuLbnffXsaaRafv27CrRbVDaaLcWcx7ehWJjg8rLbr89eNipuWMfLsuGHnb9v4C2",
  "key38": "2FAvAiYXCmyk1nPPxex4jAhEDsRcPpFKHZQQPLAQt9pDz8rYvdzMG2B4apkdVCti4nB5vUxitDr5PsqCLkP6a2sh",
  "key39": "5pFmkDEe7VexiNjxV3mZaCh52Gkjmgkjjy8FZeWqWDHwwAi8YTE5giYReb4YRC9jGfgbzGobBVs98KFBz7F8tmoi",
  "key40": "5hdMmWxqMpgamuqh3ntvn8V9sic431QV8kkhxH1zaU7CzoX1ryugEmriGFVYuJGhJU56gUE8QrUgGafQagdb68V3",
  "key41": "3vvUod7KCx1XxxtaJ7rjCEZx8J8yKU7f1o5Pmt6vFA1H1suXBBcjdfq8HjXVp5JbZF5jscVcDD1bfrT8FAhhJuTH",
  "key42": "53AjUszoHRZvifxXEV5Pg84vQCLcJwHpQ7qxvQ2VkZi6NTrav1HjwwruJ6JaDBVeUdYcCd1HQtMkcohLrXJfqpnM"
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
