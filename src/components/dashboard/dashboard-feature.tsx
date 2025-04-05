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
    "5yY253hcw66ZJ9WjzE8nh2SqR8Xpcvk351pk6TRMMUm2pDTLQpLnvAWLy6vLrvZjsPqtWrsHGDAfWY6UJaCy8C2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s3DVuaKvAFWLtgivLeTtZoTYh7q6nbMB4kVjbSNQkX2UE7p9wnNu1oxSPr3hhYbLe4qydg3uiRzVUwW5dzGxUig",
  "key1": "5A19Xv7nSLrKqqXagWkQCThJPGj5YykweCdRYDb18sFRhDEDVjh868CF6tLuAmwwQk7WfrFwZo5y3yG15hvPoet9",
  "key2": "3ZXmSLupCjBrzDQGmDBJMGwYyRCLJQBQWj36GQq4WKh6nj24GJaeym86D7PwXyvDP7ZWBPzADLuarEscuDs5Hnho",
  "key3": "VVYuVHo2tdtHDeTgK21BYC1gTXZm598WQBLR1w1e2EuuY8DGxmUucmR12kKfzKfZNzqfiNEw6mq6N7MbP1ZHcqq",
  "key4": "4gUgMxWMxp4uF2gB8hn4jV6MHHUGXWxDVq5mnY3VmfrrDgRY2pcZUZDRuPPdaTbhidLiTgeW5gQBTwuuPaDdasya",
  "key5": "4ZiHmydoNiAnQVGGNDw7VMYAVWdazyfFjpgYXCvHpuZmM43iMf8jRrhy6kfUw7CtcrewZiioJ1RV3V7m1sRBM6yz",
  "key6": "3vpKtKYVz3r7UNKjK2Lx78dB2sxkERmyZqHjQoZVE2EP2XWAZPncSjgvnTDqxVq5DjHicbJ9JihkKjJnNcer257f",
  "key7": "2tm3t5brotvoNv7XQkHtRMobCmVaH8faZZdmgpApsFpRKCKfwMgMhhDPHUDKfp19siUQSHNhqobYX9zPdBQF9jYn",
  "key8": "5JGagrMmqoBoK5iapo5DGKPf9VjyfgA62jbrS8uduc2KFCTgqbpohC85LtsGCkUoj8cRiuAGS7vqP3jhifZDjh1X",
  "key9": "5kaKGvPaHBQhn1YzBviA5CMTEa6AiczqZRTpUVwP95gTRqcUeqSxCyFYoJBnK2eiNnQsTtoJKchudf8JsYaVXHAH",
  "key10": "46eiXvDCrw8HbdR2Fiknv5DYVX7Rx9GXZw74GjrgA7TGUjQFZfALoPVqp651LpAAxyYiR6D3z3fKzDQttcXK8FiP",
  "key11": "5FutbXFgY2wNXWETGViJWU2SCqNyEdxoAzdDZQRDHLoUnSVRgRZenhqMi85cM1BCEZUaF4znGGPzUxSM2P9NujY7",
  "key12": "4g4uwf4AuBrNGcuaGFQy9wwdZFZLKN6YsJiVxowqRoeHLCjJm8n5p2adt1kreYQzk2GimAVwjWGvdKeqN3VRkDP2",
  "key13": "4mpc7XkVTS5ztoHwwLEJJimRe7Pn7bsFKAJaj33bz3w9aZN2ZSs1buLQUhrxZzCg5KdRa7Fin1ZKr26WtBmb9nvM",
  "key14": "2BWKHzHcCS2zQd1rRNTCxGfdGFsTcZMs4yJB2roZT4dZG3jVy28B73kyy5BieWQo1RSrxjuwi4kGEWSuBAqmfRxu",
  "key15": "4hfL7EtWid5HHeYmedMmMysx48RNwu8hotsnXeAv7miSXapihMJuf9HPnSAnv48jHxaeypXkypkobfHeWSipBxiA",
  "key16": "5LiqfzJ6kVL7zsCF3NegzwQb9PUW5dr3uaf3UFmqeYLewvFrue73DstDpAWQ82SfjH3WJcq6ksTRC1uFYR9dsrMK",
  "key17": "xabnbvX6JyUxic9qEgtn54JrRcmrvU7acUuNNEZF8y1RXAk2wy3Je1WV2R8t3rRD6svbyDvMtv41o3K5WsM4JnD",
  "key18": "zBMfQ1NADc6vik9UCUewAtdTLxh89Yk1T52cQ5tLYL76EywZExsz4h5YKWHyRwB1NL5Yx1WUArpUA6jFWpt75Rb",
  "key19": "yevuZxwdwxSd78KtChdG3J2ZtXE7AB2E2tsVPFeDVsrTX2qRnr7W9UPAdGzr5W9FL2oN22CFEzPhasJZum8i4eJ",
  "key20": "4F4T64vShFkZM4dKPyqHAQNMKwmgZNTKtTgfYtKNzmRxULx7UqZUbWnwVfmcL3XTtkUpvFvtx4cMr6mCPK5MQCLH",
  "key21": "41JWjduYv1imAanFk1dRgJkvWFZnAgZgFuFaH9uaux6AfEnNxwDsvc7GGMLP5h9Edm37WUL1fXcEfVaAZ1LCqCQN",
  "key22": "4YoBeGZsAVFNQbb2E6EKbQF8sGJseEmk1B32Kc4V22FFFedxqGfbjCNbjqY4H4ZzQr6evv9RtXiuU5kE8hPPD3JQ",
  "key23": "2hQfw7tat5WEyJvo2xNKkHs5P6KWz7GE9ybmRZnhLpXWq3eHuzwdvJj4KPGypuhKpyzyRfjrKHNz7kTuubfmq4Jm",
  "key24": "3WgSKivCgdr5RygjvUXUCMViJCKRQXfyHAUaLuCQCj4NLMqhpjJJzWwcRgQwqPN9AjYSPnPCCkd2jzSfdAV51zHh",
  "key25": "3tUGRJbdFxyXe4eirp3HF9nWp5M8mvgnq7QwF45GNTs8UeazvjbAZr2nsGcXfGc4VWP8kB8BJWb32THfAyyq38mM",
  "key26": "C6bVdsFcH2roGb2ZvBULqRQ2gNcfKB9sb5tUwp7kwdr2kzKuXCrRV34teshyhvius25qSJMNyHjjoHvB7WuJ9T4",
  "key27": "2Ei2dTpKwomN91eP2Trn69U34wXweLvvMJNiG8gsz6wJGs52f8AgC4yAD1S29oZ1AAag9BqEQcbL2uM8MJw14qq",
  "key28": "4H9uj3eHJrBZN3YML2NGcmk3ckGmfL6gResXA7ByVTG8bRegdSQkimnaDPT3RQJHvXT17Pop14TBYrTuRUiqDdyH",
  "key29": "DRCGqaHp2F2XXJPuuJZKgTZRcozJc2LVY1gcX1tb8Gi8cHoG7sx6iu6XnDk4LyLThUT5kpszVP9vFSe2s9cy1q4",
  "key30": "YM1EKXPpPhmGLcQkeTLnwY259CjCbt6ALyv2mmNLXuBMFbyCcQ45AZY57yDgKhKpWTDBBsS925JhCrAe5DKDkCX",
  "key31": "3dvPfEbnapKEPmLzgNk7pfkXTXMoyw7ZRvDQPnjpe1SqJ3yevNEYmcQ4RC6SSveYKYhQBzuNEXPg5aRe5DPAhP4C",
  "key32": "FebX5JSpcNJweDoMabscabcx1PrsyZVMcsy7hRToADqBo4Zm5YJMsapmoAzDbtCYheveJCFvvPxHmAQcYPnfab2",
  "key33": "5GXGuq5UnoBVuuisJ3hvvHExRgshwe5GYeyBEWXgrYfAMQnhCCjyVBm9BRBR1b5GzrkGTxDo8p9t7tvJk5GUBQt4",
  "key34": "66mLMp2SDdTkwATBMNwKTdja98uYpP9RFno1KFDDFKdGUpoDWga83miy94PtHFLyFEYUmftxDLn58TkxmjRDdxCu",
  "key35": "4WHK53x53zGjf9DRq3p41ugaCLsSG2mY3voHc4cJUPdc9f4u4i3TruxYyTqyRFi9FeAazAsRZF5ZVHTi1yBSWxvM",
  "key36": "5xqzxsj44jgR5TpQ3BcATuyzepXZEScxrcKr19BRnoDLEbwzCxyJPGMgQVSpQqFfMSAQuis8rqTCi42RTbcPMqVW",
  "key37": "53i7YBRbB3REa1w15bKUNQVXxFYweZer7V8pn15tTEFFJxUHuTo9E4j5oq2EpavdwmamgBpUbH3ShK1Vs5A5tn2u",
  "key38": "5BEMyPrLzpzRpzZNQJ2th8AHteDHAiz1sowTKS2e7zfhpKGoG9qrWQJ9wZT241SkVtiJkdCVGB18UCK8jHPmJwW5",
  "key39": "4WEq8PedS8pjQ91ky5vn8w43Ueiv8r942e5k8PKVDWFDXG8wng5pWwpWFM9W5cBqbp5aWFH9PX3Yp74ZPkXfx6L1",
  "key40": "MbTPSE15NGpvaUFjfBkb5nXZd6uvSHZJHYaL2ZgKJb4D971jSCakG3dXTQWjKPbRenJMn8o8X9MtkxuaKwhWaSj",
  "key41": "5RrgU4qmZBR2iBm7694ZpvJvYnwTubwdoxoTxjyjE1FPp4NzgZ8NxxrVYcbSQh2CrBQnHP75YUgJUEnS5VSjyUvu",
  "key42": "2TGKKRDAGVuckFCgK2xiX5RwoUc5yYwmRLE2grXXKT6Zdo8rrGdSUQkFQXCgcJBo4gK2MLojadGG6s3Kw2JaC812",
  "key43": "4JPU7aofySbGHNWwARK6vctgaWB8EQLqCGCaP7wgXyFX7VzNfZP611hKusCfPtTjKM2cYkMRy24cxMEzNQRVMdeF",
  "key44": "31vBrpDSnHJEYiTShYVEs4MrHhpepqPRri24R9zK8wWmXVKJ9dRRcJTySyrFZavQwh1J8t2UZYJcrkKVuphLBrYE",
  "key45": "2ZvM6Zm2SbDK4gbmrqoWXRZQXjRTVqi6ZRp76zoH4m57f1iupgB9VnJT63ZQn6UobfgkTVREJpiytoyBYPQU6rsT",
  "key46": "9AVi4BB2tcqEHjsSPRCaiKjYAfkjVXBgf96VEunkc4UG1a4f5VCnFtC1iWZujsAjiKa4vC1gHUQsXCBxUGEWt2i"
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
