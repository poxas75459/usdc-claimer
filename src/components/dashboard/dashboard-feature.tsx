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
    "nTH4bpbfnVihYpta4RZr5Vjy3azww6dsFR9VbGzpT2PqFiLzo9ai8n9oMUzcohqjc7vYiAKgmLYKxZzqyVcGomF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LF6Md5b2w2FnKzH8mq121GYB64eneqKPgrH7mphXgfbeGiisuxSGF2sH33V2MbkBssm3DkDKfexVgYq9GkxD4AA",
  "key1": "xepNzCCdLymz5yvsyBfetZodGAbr5qHQYa1mRp5yiE7ARbBnRG2DsdGQ77x9SSka3niGjhUZG6zkgm8xSWq2K6a",
  "key2": "5AiYS6y5KdEDY2QgdYSaaVsARtAKxFeYiFtEsTGRaKLamoZvXvhEo4MkjH3dsB79aKCmsY8LmxqwZjuJaUVxcFfY",
  "key3": "4zL35WJRtsXh4zo7G6QUyZ8pWiNgrsjiTwECRBY8eRR8kxMfEu9YKrqWvzEbToubKDbwF7fvU6ZeRQLkNB4xuDUt",
  "key4": "5r9LrjigMHQiVN6iiCwNzEGbPuePfEaaT1Ejz8YKSJ7NeY4yFwbCy1ZxhgBgBF7N228JyCry812gGnG2q2cwSLao",
  "key5": "5PLXEJKh7Q3ENC6xnQQiWzvRKMVudXouXjvVaq9rMoSaBHUZwpTKRp63cCULeiN2vzrU5g4Aid6YCwtbZye2kbFZ",
  "key6": "uu3Pq2xAp2h5oNnwUmxsJ64tgVRPTAe8ipKuQWqRaJEFtLNzFhkpSF6q5zizP8Tf3KPELGNg7TzAr7JVufaRDss",
  "key7": "5xiuJCBf4dxr751gJd8JbCLVgotiYrztrJ8GSf6zDo9HPEFach4xZGeK8jo7EjMfN7huzqGR1wktMWdJuNnvPUdE",
  "key8": "53z9ZYzXTANvzN93GM1oDJo2PdKBesysa1jpvxn14cFpJiYVAhm9VakgydAjA74frTFcoar11QXY8p8MvaxKemAn",
  "key9": "PMMToMrozMcYA6zYpeJxRNGvq9KSLy7VuiAB1FtyAkpaG4FsVSr5BgeU84Ao8N14rCWgcTAkyZc9oqLRnPS4GJN",
  "key10": "2DPnpTj3SCYnsreWr9UpCKJHjrp5FkrtoWuDCa56XiFrh3KWRCGkky6RkRx4wCmfmsxBJG9dUP6ZL4NEugEb28fH",
  "key11": "2scb3wkNqoR4ioUYF3Wrne7YtmsNVB21A6WJYJbkcsQ9mXQRExcymFEmTGkBAGgFPauk9TnRRW7CAMoAd5apmy5o",
  "key12": "4pNBofxPLcGvQeP1eFhNq2qaKapudBYWDzaKL1Cvsq2VyC5yNHpAJdaz82z2MK126qoJkcAFjbD5TcBzYcuDhWbk",
  "key13": "359bqrCCbFPZvcnbEv7eXbJU3ZmBdg1yW5qAy3QQxb6XcLk6TAcTGXR7Tp9rwjL7nvHws3keCqA37FWKB9VE4L75",
  "key14": "7itCVjjGD18znF6EwRvkJQoKW3HUiuoYJxgNjRiHkGANubicUESqt9C4qyu2uGMj3kmfQmFG6hmATV45xkbXXxZ",
  "key15": "5YhU41KLo4gP13uyM8RMhgoQ36jt1vBw1kyyJ65rtEpQtzReVb7xXUMURKED3kS6u7TXFDy6ALPDn86CsuxCZDYX",
  "key16": "4F35HfsP5SBPqxpXeLrU3hKLP3vNzK6mVz5hc1Juzi2ingWKU5GYuVN61yR11SRxc24pVT7uVWhqAMoPDJTsG2Ju",
  "key17": "3kZeTQ1GfS3cYvwW6MLBRWmdx7ZeP2yRwWXZeEEiTnnLiCXVRsnn7LSVXA7CUYbzS9PTXwPvVdZpjLB7NJzAHFJv",
  "key18": "2Zc61sJZDXkDSiGFA4nUzii9bTmLLnjWvEg2qdkpEswpsAqX3YtZ3izxnyioLr8krHiKVaKnvVRvVPBoFrsyXDny",
  "key19": "58dmr4PmVzYGyY5DG3ZwyoEFomAMzwoF8doNRBVsHPNVVaJeWbVZSvJmbAi5f3WAoBRaRKZyyrZjC3c2LqTi37XL",
  "key20": "5AmCYW8mDukNyYYuJ8iw3cNnW65xwskcMmgbi8RL1eYvPN8oA2hcjwKHt8X2Yak67VaLoR3LbHSFaBaqw7Kojv2K",
  "key21": "5zgShmeVMJTJW6THomtzMCvg58bCbco8eRrJqpapXyhTDLLEHnvdfvexqNa9vzukn16NMYx1cGRCP49wuJuEQcfR",
  "key22": "JKt5q1rgUfN4gtBgQFgtPA3ckjoYjBtU32xAkkC8H5BRz2ovBCcvUduFiWchZ5iozR9YHu3j3hME4n2gCtRAHC1",
  "key23": "2PSTNLByhCMnR6ouXRfAKUZmF3CkunKiUhtKiFLNALuJf21yDd4L6mCpv1p5zVxf8gNiKAPwpP5a1z7PaPUc3nLb",
  "key24": "L5JfJMg85aKpRrxvyyHeXRzL7yHMGfyBJjXEgrDiDmBTRRLcP1g4hps4C897kPchwWxUzsEnBroLzcs68B6AK88",
  "key25": "2srNTPMuSv1VnZXNz1dfjtVXmMHWEFz59DXiSuxmccm34w7g6QZtUXHfhYRyQ6wUL78W3xg1vsqaeKvwej4ehzSz",
  "key26": "w9ucMLkcWy2Jnd5BJ7WdPdyEPPuRnPhfBoW68ixaL56cUVeJv2ifHYTBHWuHKYjiDNCbh5z6kgmvnThNkpcGzou",
  "key27": "2hQKvjjPncjznL62TSHsBGjKyvJ8pymU2BxLdCoVFT7rbXh2L3HUbJtaLhtws7nvC1aqu3YJ2WBWUmsU6uMBTZeZ",
  "key28": "39cDFPMXX2nqt17H6ZQLuvoRteDK7P9mujhq3cF28fyYsRARF2zmatwbyuHCFMNTiodQ2wctQhPWn3KvznqQqAxV",
  "key29": "5A52bRj2n7pw8iQvWfa9K1cKBMyECteWmRQZM4suqYv4P7uZeZVBkgZwQPfeaXiRqddSJbbz9vtuBFqaBCntf3us",
  "key30": "41FQvFzjjGqmrsKdY8kSzNSiXQNkUgj6quhQXBmuxoqG1zKrdcYD2wUnF7w4MXoigzmaRTMJDq7YZ4TgXtr6ogvu",
  "key31": "dBhyykH9KBBuoTzXcgn9fZ7jKJTWmyuYPPQHCmfgeZM6U8KcoaUMkunZPPhQM694E9957dxLiWLq4LgKpuiqP45",
  "key32": "4hnDT9iEDsUPm7DWUBfM294SFBZVDwRvrQD27hgRh6DW4U84DX5ChA4TwKo7trLYfsaXVn1BKZ12UDf61pxxhory",
  "key33": "BTwLddETA8pcbn8cZtsktE66iBnrNi9rxLviacYMfimFrMmoRrQxCpFBRKzf6cGpTPJyfCnJjumtNAWoQphvNK3",
  "key34": "4BGFLqzWvVMNnmekxydoPaCjxxc6CQ1RYiZjcTxb7CrF2yvCBhqhSCq3dPToisHNPZgNqwo9McPsLN7QeUsE87if",
  "key35": "5RNCQur3nAH92fFFCXWwjyd91fjSyyYvYaBoGEVjQbBVNkMd1vx2AmENMKG8zhdDGzJR9389R8Mpb7WnsE3r4msW",
  "key36": "4GkJnRhtXtJKHV6We3pGg64EzkKXLR6EZV6esp7neGChSMghXcSM5Er7m6GqNWeQ4CGVJsDxwvGVSBndgQ5ukGFB",
  "key37": "5nS2X32S9YpPLEFBXzLLXNzs2KDPtbLyXrNfytVNoPt1D27XmJqGwy3g5vnc59d5cX1H4cCkS5wa1QVNFffvEFcB",
  "key38": "3qmQasQ2chXsSeRQE8ApVP297L44nUPz4syxzeNZwHAguPjUrqqUCPLLWhTPrhoPPzY8UGBDKWFqfkSdvL7dkJCX",
  "key39": "yeQmHnMYzk8c4WCojLM1f9LTEyj565haWgBShveTC1f219Cs8QpvCXRLWLyJouzWL9xwzhzSuALHn9ttkqTaxTP",
  "key40": "gNHn9NYC6UkY25bpV2FpnxDHAyb83qJiLEmoodLJEpAx7apuMiCHMBifxXWZnBjBy6bJLSVLN6KgKF6VBtyjWVa",
  "key41": "3876DHSJHScyq7Sy1LhortyxS4h9Jfvm9YAm4jakH1SqTRgMKVf4EczcNdzifD6v1YWWXdohuy15ZwE8dugq9HxM",
  "key42": "2ns7qNczBUbgnSuFRH2FAbwuP6R8CJ6FSGXaeXyz1XMRuyPHjwt8AbvMCq7jkxoZ474WkpMKF4hpwWGwFkQhaVz",
  "key43": "45xY4Rr2TGZvw4KGEpGdiGGLxcYwWWSfnSwG5JgNg1QnxEAoxR6b1ApJRPJG8a8XdjwdsJMjQCiWgAHFJGUm6m8h",
  "key44": "4vK1EFCaSpYK3TrkX21cDjP2u24STqq5PdH5bB667MMeZ5dRYsRwH7YhKfjMrPQPCtigz3HNpQRwyryVXKx32SHB",
  "key45": "2CHkhg2NLtGZvZm2U9N9qE2Rxb1dCK3xpkaGXEkXYLxM8R6ZbWWFdZAcU9WJn8W9wbcHTjkq7KKfN2oQx2rgw1kV"
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
