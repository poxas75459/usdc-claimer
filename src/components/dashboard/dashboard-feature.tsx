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
    "2sYpb9yq9vkya2v9ygGpRwi7GAYSeEQFWbqYN8Yf6Pjy5hHQyrFoQLmQzuB1Kuw9nNETeEiYKUm95WcFZDE4mVun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8UbTAgVg6dzBiW5b6yVjB8VcEW4GvSXTy5yf3QSzsoZBTUN4VWbngWG7C6obVrth53PW1PCXxuQPpD2Ty83YQ37",
  "key1": "3NN3NgwHj3h2e1z1r72nySPDFW2gDwArQzzcVdVVrugcnSB3f9miD14Hpz1K9Ua8RmJXiWeh4d5JXp9vevWM25Vu",
  "key2": "395cVZTDrsemEJveW5CnELCeU55StwxxK6qWmy1UzhmiskRRuvf48CLcaiadbYg5aXxNTRmfydEqdq6eJqRP7NaL",
  "key3": "5EEN6JXt4JDLT3qHjjkeaqJrfpaFpWch2Wz5XfQ2wkgeZBY41zonkNB8iNUrcFwvH41k8avSZDA3YajtPMM1qyXo",
  "key4": "3y7PAY4fKizWUM65hdDXCzbRLipZw7zGKvtiHVFYco615egEb9u3vEpbaBARJmrfwzHaUMMbGbPynCSQpca5QfVD",
  "key5": "4ZTWqJ7Wa41aJGzPR6n93bUBR9pnqyijQu2m385J5rCLXzH5iKYJnWvrWSz8hHVY67gfkopW1USuECbFkX9E3oZr",
  "key6": "2XpZaV8V5xfiqHgamYwdbHNNbgiEs2A6KD7uFjJWinos2irWME9KLGBTGkyNSAjmdEVcQhwoLkDd1c6rBxQSLSQu",
  "key7": "K9vhvwihQNXgVhpHTnK3dfwMiCwjghGBe1Q1q8r8YiHZfTE2rxECVwxrEpxKE17qjgDBh7DqwZoZpskVFWSKEhs",
  "key8": "pb3MZeuYxkrEfu33vJx1QMFnQs7QQLrvVkp6MjNrCFcB6x443pmHJVogi8YFeLHi3zo5mbqKuaR2737ux41u9yg",
  "key9": "5JoLjpMzUQue4itaJCUmQAFyPrN26WJvLQZFgmNdmvatw4tvrXiDBq588mqUwPL4LGugbYn4vc86fSMjYv46vLDK",
  "key10": "3iRG13bPoBjmY9UZp2B4rBrz7K99oWhoTot7fkyqCuiboKp1a4UGBj6eqfWbXNAYGDDGzXvWzG7FSPbdQcC8gqrk",
  "key11": "LSgA6QhNJGY2T9qDxoGNc195bHRa9fJGYZqqQDKzacDPUB19Ht9RcXSPvQiRGbz4u49VmcvnFuLMwQkaj96CXgd",
  "key12": "44KEdrAXr1cn6k3rXakWetXh4cFXCAxqgx7A837Lrza5xrmjsLC3vvCiRdPwRQmPPBuoT7Pt5LGf1KvP2Ggy1PQe",
  "key13": "28dqoWMeaS39Wu6AiRsQhM7a885keWmTDWNuwyEASaG2dyjGYdMyAzEqjHtE3UcwwQ89PAPzhK2yvwZKA83B9wXv",
  "key14": "3vBMVFwQRzDNRrHgAbhcc5iPhgqYMSEJKcrvmsGmiyMAaGCq2zt8jxGPnqhNp8ZeXMJR3B7cqvZVQakDNuropE1f",
  "key15": "2Azq1jaz4MSJgdHeJo5hqSLYAC2jnfYijiKeCU2jocrGcpbeGEiB5Hgo7V77yCUnyZrWcpoMrG8ERGmyn52WxmL3",
  "key16": "4gBMKuysiigKxkt2J51vPxx58AQ81vGFRAutULFYxbxDFiH73NFbfz6YUDW92hBUiB7At9dp2YLvL2iBXQE4JJMg",
  "key17": "3th4xeocyr8kpm2M5Ft8VNDRQyMDvobVk5GUqQVa1SLHg8saDy75UZi2aFSAtrf4HYfqYmiG5L1ZAvJ9KFNYKNML",
  "key18": "3CkcpaKsUUj9YiZrUigqdTuuLb8ey9LP5bs3RgsTeYBu2EkQeqyJQvheo8as6niDVsh8LvPpL6pVb2vLJCRHZeMs",
  "key19": "2oKpKXWtkLF1epwrS1cvyzEBomd25Ryb5kDfq45yFVPf7gkyYKG2gkWehHSpsnHYYhQASoSkZsWSZ7V2V38ENVFt",
  "key20": "2qoyt8DNhr3gKVvomzzhjDPEYFBoWqUbprtCeE289cg7BRd9WeZoNbV1uF7uY9VcmQZzm1k3An6DffwCd5K25Qrj",
  "key21": "MJ1TRG883aWFqiVY6dKdLuH8RoDynn5DPLVJcp7M7d5L53gidoMGqohmUNeEEWdygy5LVDJTkRHyhvpc1b9aR1o",
  "key22": "3uYZfNCAzE81A11YdZnjzAPgsbjoPFSLPE8vHToVM141ahsHsPp25GYwb19n6qCov2GLV5k3dZXwPfDpZsQsC3EP",
  "key23": "4LDC3s8iBSSSa8w2Mu3wJckVCdynz6sygNuGNxtoWuCQfBxdZR4yxbyMS2xSJKdKyZrKqemn3k1u7LzRqEpqvELh",
  "key24": "3MroZFyzUE6Xba7DVVixGoCsqSnfnmUmYSMAzRgDKp3VkyUjGpwWBsNSY6qR5U5WPvntFEWncweZ2BUSfBHdBE91",
  "key25": "5dXmGTA3Hk2gXpDsJonwgzg1wnRvC5RU4bUsktwRfLwAbdpFsWu2KDDuhxZzmUzBJ3aYWoJn2WdtoLHboJ6LJRKG",
  "key26": "3H5KzWYgmkEnaXa7kd7BhuoWbGnTmjbz3RnbVu7rq6HPLP4ryj6BpLAs9WvCLhHUk6ekxTLNLDxm9EZMDkyx99vk",
  "key27": "4AumdFTgJ1ypDLajuDENC4eM3Nua2UFCHSp7nhHpeo9FLw8yhkqYyvtu8YPKnyUQCsqiXgN8F9qkhxAF65i82KAm",
  "key28": "3C2vdA8fAq9bpwEx777ukXW6tGDys91cyJivio184EjHutG7ePp1r9ka5gaN1P9EDMkayr6HaifeooEH8g7pZmWD",
  "key29": "VVnzLmfacHMDq7oFWHwAaeKNjDJ6poLjz7ALkuV9NYNVmy5zBeKQQQvjkSyDvztiWRYa1tcBDbrSn5ow9rxqPBw",
  "key30": "5dL3BKiAD8crRwZMbDRCyf6LF2ZQXuYcQAEzp7EftCSRpdRD6yTNe7DB9AkzWKpe2cu8ksVW4WAwvcfSYNJqMSAS",
  "key31": "2hP3pi4x2ih4FYkL2dd3aYapETXzudoGVuf8XuAZVKEpJaQA8d6ctP6j5tBFqiaAgkgktKwDPVAMy3wShYHhU4Ai",
  "key32": "AmpRnD7rMAq5CgTYC3BKVjG96XyN5Wm5YwaTCPMcpHuomN9gQfKaj9yYLHRNv4j3Wb9gsUxsA4F99Aso5JwLTWf",
  "key33": "4TmW2uFYYS7MbZqDf5z1xMhytm5Rg3zuNAnxmAKoEJKspeErN6gUYx7b9PneDEkVqupvHynmWgr4X64SzusQFNPQ",
  "key34": "3W6fCfY1n5zwXg1aexbktJTBzFRm8jiqzFGGomjadbsEw69yV9UhQcALhipWa9dzc19h2GWwBG6NQUk6YZit7mWt",
  "key35": "55vk8tksZqQdJ9LnihAPmHeUaoAxPww1gVrqR4o6wGNsJqEnc6Rhdeine7BtpcaAtKawrTidXXEBWVxQUPWGjA5w",
  "key36": "3zfy37tRYfDBSG42pVKiHKit1fqannsKpY8U2zdtZgxhcvqvCVnL7tQG99dhMFPFEiaJjn5WF2oDJnHCw3gDGgsz",
  "key37": "qtha5GLxdmXfRzEf8GDo8esiVjmjccGqJ4EvW3zECTM7fdF39fYDLrdpDkEQw7xm1HqUx4XUhmAVLiBVRWL12YA",
  "key38": "5LXRyvPiuuQhUs4CccirSCjz2ThqY13JYDkxPzsLbEgaH5y2SbcbhoQGY2TFWqyr3fP5evemzwfrvKnopw6ZAai8"
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
