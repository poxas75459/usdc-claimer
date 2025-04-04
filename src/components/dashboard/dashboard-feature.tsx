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
    "8dJjHjE7Pmduu761FuK8knLPHVjMJBwpxSE2myMRRBQz6nHG3zvQoL9VCQ8SqtH6MC6sLjWLkxbME9DqjkZMREk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E79Q5GBsyS66XMyBexSeZC9tSaoEP3vfa49kiqLmF7QA68nW3e9h8jdYYEZjVvWP56FSjHPpxzizJuFvm5U7n9Z",
  "key1": "2bgvumPEqDUYVsZ1dsoPNNcALCavrT7AekK8mPNiNBoeY1SCuwnRYP77wturzbk9ocJMHu2iZHmyR3r4V1ZtMnFV",
  "key2": "3g7pEieMVZ6mU6A1Amhr5MpYNRf5K5kdSdG7oeonGRJL83MhE74TKTR2Q6Set4Q3daAhpoaJQftB2bk8856pJVe7",
  "key3": "5HhBwHXxNCYq3qE2NbUADCdx5kgLQUXKVUiwuhuRyVjeqHiB5fUSaCcR27N9MYQzibg2BvoU827t2wmZuD4xEQT2",
  "key4": "5PeBTxe5MXq6h59B7jDtbzVAxE6rGpmdFY32sgSdaDc7H1XyZ36Dc8jpSfJjSHfNGuWyqnidXtyAUaeTKjkGX9TJ",
  "key5": "5AFyFUHAPnQiKwFMrcVxrwGnPsRnk9CGz1WdGvZrM3YZRZ6MfSwWgLe2Mfzf24YFgCFNMTDESvNAYf8DBU3XEtuJ",
  "key6": "3A95ZkcDeZEqVZy9PctckkR8xVPQ5tRToPnJgzPGs9TXV7famt6eWuBL8JwJKPWZnknuzWFDgdcP2wLGA4CMeHxN",
  "key7": "2kUCs1oBT2BFsFbUMxYcJPXAYpcg2sbtZzGc4kmA11bxErCKf1MyA5NEVL236qrSJxWWrChtfyfef3WETHpNcvME",
  "key8": "4yB3W4yZTQxEHgp49Jpukrgv9Va3XLqLbvTHB3DzaYLp3iodJzu3Z4x5sAxrWULgq3N6pFY7JASpgYuT5uF3PLo",
  "key9": "4GN5cULyckxGMvpLSVGpWXKhnKJZ1U6JKSyoZRmRddJaRo232DKepQQULXNmDZVULQyvTZxnxA6eex4XsRi7YdPA",
  "key10": "5GLNwtDe7ez7KhTDwd7EszdQ5i9B44BNRQPMHnRRYcf4tfYFVbzkAbgZTW7KGHAChD6KETX2LD6WFu8N45dw9B25",
  "key11": "8ALhREEqhfEeH6qjkAxbhou3xMeVK4zV5J5QCGGM111s7bGVj39qfMdHGrmiWnPc3aGeA96iV7SDsT6gyRu7dbo",
  "key12": "58ZavUSBdoG8ZDRjPT8crioaWpZsYbV2frVjtT3PXzFz3fyZXAT8xDTozAEyhFVTfpNJ17kqzj3JScifUEUa36yz",
  "key13": "35ohS3pppZ21LLkAzMAEWcgYcSbzytZgdiBsriXvd2tSwkhdTa13CXGP6ch88PgJYa9TTP1b4P8DAKQ3GoumXNVD",
  "key14": "GAvkQpYXEpsCBQAEp4dzDmnBanFLMkFxYtEGWNk6zhT5HMEDG4nCCVtjb5MN87PJ85tyeaxSfTZnFHVx1CsdBkk",
  "key15": "4rsUkHKDHNV4xDNc7j5nbkC8c2gC1Z3cEDeAyh5voKuW3CgukcVNL1neMPPAS684rr3GhK36GdeZFyN89hHHcVWE",
  "key16": "2ngo3PmVmuqETwJNgSEgURy41v7ZTBhpUMjdLMtpPXH8rDA5qYvcaVYXAB37CvVmu4BoGP9BbJc19mDihexdC5eQ",
  "key17": "4L3LuGJf88CMBoFUCsWsRcs3MR18KVSM4mq6i53Mztx8oDATg3PjYxNWNXK4sLjdDMawod6TfF99yvn4WXmv73EV",
  "key18": "3sdLgEE9rNef1bK8H5pjffEzNuwpR8PUgvNwnEAJvyfuvAqUZGFthCyZeBpywNbRchZoWjTAqqRKiewWc4rFjs5K",
  "key19": "4Xo9d2rAKEUZ2HLp8gLoGWCYKfD35xsX1FDaGidhemkzaTuGxhZueRmoECwFhiezMdqSRtbEKvdm7mpPNDMgnb6h",
  "key20": "2HA2k57rKUcWipFhFFU359Cue24RwzfeqZRCvQ3qUXnDQYRfqWvwpSEeQR85kCiG196Kz4x96ixCgoWFmLjS45hJ",
  "key21": "3Db2iGua8bdRhtpeeyWxJkksxYM5q99gZueQoi9Z1sf4psjkKaY8nzrMAQAuDRavqXpH72iJuLx2qfJp59uE5zod",
  "key22": "QtvDC3YzpuJKtZVcVMdy9F4RHGkrEnWqkbPoQuYsgmU6vbCk26t4YmcqrrvbdQA4WbexNTsCVQ7njULGvCEMy5o",
  "key23": "4TbMTfTaqiGMWPBqoLC7a9q1GiTNFaEBpHe1YkaZKdK3HEf4gYmvx8mAoweKBn7tVkWJi2X66jv3AMTXAKzbvroz",
  "key24": "VPboxX7LpfDbYovRChrphcwaqrKsGtZPcrtVMqQ4KCuetZsFkGQQsGhqu9vobL1iLd46yV4npVoQPJvBSSC3oAm",
  "key25": "2tBW76b5M2USCYy4wovkPczUKkG5ZS2zvDf9jLAmkw2rEnbQsafCmqFwoaEkUJsfdzV8CJKky1pRBpXdWdL8i6Vs",
  "key26": "J8TS9UdxRudLuUqwW4NJJMVwrJuUgwP6Ce55hj6h5F2rGYqA2AbMP8UxtjqabmURQVimtDa3eec1EybgARQ1v62",
  "key27": "3DKAgTv8rdJnvFYDeP8NQJwT3hqgYnHhp2HLtHXPERFsgocGTKqKshPiuVEFockcbFqWHfawNRpkBtv8PsopRvQM",
  "key28": "4X1q8p2AmAseJJgCqHPh36crYTK1QyaF6rduwZwbvRxFAWoaDKtyWZ19qEFo37DnvbL5Tm5AXABWeP8ufpcPxBdE",
  "key29": "Z317AnjYJnfuUfbtB4oaLESUrPd5bhUotEovVRkfDTNfNVfapoQ4iT6VKzg1nomiyLbEwNb21bTvjMEHhkkamS8",
  "key30": "UUH2mj2bXPqZf7mEuBWp5fSx3Djc8WF8tZBjJVpvV5sv5kCfenDWzZ9VTGiEEJYxAH9jeTA7713EGwVrVs6BHVz",
  "key31": "67SPCHNy2GEkhDJdiwH1FfPcptcogGMVUyRGS8rzhTBmXZB8PC3MrfwZ8UyjRxVWWTfz92dAvEwsMffE9ues2wCq",
  "key32": "34rFx99kLNxWWMy5JAVXt2jKN8QWUKdYfdgSyUBmv13vm3EvpZJkt469HeNVvyUyqoNGN4qDCFxiV18uZr8RHxaz",
  "key33": "BeMe4Y5sTdEzo25zseLJR3RCqVXBjwRgiph4vhFq4wf4djh9VGMt2uyL7WFQpMYqzeL8A2L5ShQLXna57BAUU6W",
  "key34": "5JSDdAV4vcbMP4o2Qoz7nbpCi73URhgmQPHRs1dNoYzLwJpLsiAqCVmhTB4g5JnCdg8cZqQSKPMnKdon82ak4qAC",
  "key35": "fQBDoJLzYjz3siZbm3w9y5R8tK4y2kp7Q3ryd8PDLcAWybAjb3ChLT7dpZQMyWKnCi4Z4gsKFJLMvYrmxycmbc5",
  "key36": "3LYYw6BqDRHorYEC8jWyCE72DkuTnUkZVjp2sZLfyEk4SwxuUGVXcjpW5tLPWQJihq5ymEHWdG9nzSTuWrkxcuZS",
  "key37": "615wgon4fx8QTm7RxUtkNkPw6xXQtn4J68dPYMex9X5u2sQeqqazNyuLkiRTtpsC3BSgkcEZtWPwgvPv1u3SGDVx",
  "key38": "3fM9BYz1TtgLKxUPBKrWbRiTMCx3LRLhYJPZWd2aDjQP9PU7peYQBPs3TazKvYJkYiZZrdmufuaLevptKBmxrZnw",
  "key39": "5uLyx73VfBqM9YrszAQue7rpfKWxDvfQSVinXX8qCpwRdiQijjDJaFQfSzYmmdNrQ6VNQPPvBWkZzxAu1LrPZCfQ",
  "key40": "2sPhhJFWYQXp7XukjEG3Nf96Za4hrQPZHfNyzDvx76vZksncHYF35uMFjXmgLdeNb26KkqW8g6e1TE3HHt8KB5o4",
  "key41": "fd4r1G8WG9NHvKCn9bpX2fM41uxr3a4EPh6tLE2FdswoQ2E6zFKBfTwrBbKwrDJnsPEWAGL7BraHCVGs8whEHBM",
  "key42": "3YbLUBC5fcMuBFRbYp5HNxnbM8vxRF3o1UYKU7xmEg7kN9ruvHpCbsBNL9YrGwoSBhijkxp9zXNSo8ebT73rRzAc",
  "key43": "2HqBsgSYrCUE1Hm14AtEcr3aHWmzdyimyBCV3E6RmDEDJhQv182HFqvYSQ7occjPAo2xA4YLu6ZDB4KWykZ6oWpr",
  "key44": "4EdBss7jgr6thm7eaApQCUsj5bJXsdrtkinQ5zigtY5nHWhrSgzLk4vh74t3hK5VMAf95GcHsPwiFsMqAKjqvnx5"
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
