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
    "3TbprJ3wWm4sdmQMFiM1xhvmeo5F8pYKS9RR4T6XL54au3TDSDZ5ySAYyLTYZPJkmZpGPo6z98pKVUZo8Fev4DHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uKDvdDvfdZZqE7sGY8yvRaW9ZdX8ujnhkbz1M4K2sRn5amdTwXamXJiuSy3gErWU7J9CsZMoq7kMvX7zBxoRuHL",
  "key1": "2GBjBsuFsiMMbwLdnLEiGoF6Ke9QeWnuUB4HAQCZTssxG8PbfS3ipeUC32y7dEek9pyppf4fqw1ap8L8ELw6z5Lb",
  "key2": "27ZPvKUxvcj8Cr4j62z8bJ19sS78PGSsn2nEsM2y873dc7sBSrpUrDNVZkFvVGVG54Wim4o8mej3KbBBzwM1HQzS",
  "key3": "2mpwKANos73bFaGqe2S7JnX95QvxW7iUPaDvqBeh9XWNuXcX2mttJjVRTf7t5cz62pB3769zVwQrnAfkDxW8ntr9",
  "key4": "4QySdWMBLpoXC1y3QikRLY5nS4WGEpdgDwJeKKsVDELpXjUJhNshi44KwH12mLv1EWwK9RcAqa6q1pUuvMp7ts5",
  "key5": "SH6dqtNutpggb4kEkbTCmYC5NiVrfS146KTmfLa1r4VvRyetr5Ggs4SXanrFMY2aPgzemTaUqZEwT7a8nFs9KXw",
  "key6": "ebhMc4voVQXgFGiYqBFA75KmNUpBhhMw3FMkrpdVZ8ZFLEMrNecva5cEhisxz78pX24fW71PB5v2tMznPTJKEpR",
  "key7": "yjM9BsrHFzqeHgwGVVfbSD5ouEr4LyYBQr1MSRkRL6HPobusqBKq15aSKMRmmAXmUGbncE7PvKw5wi27ZicRMQC",
  "key8": "5f3ZLFnYgYXYQoPrBYermvJ1tjzAo6SWDXgFSjNaKERLE4tiBRFsKCDTZi7uSdQMjXNFtgfRqXQamf5JVpwmaYue",
  "key9": "43tYjHJEr7krG4XobBmz9kvZM2EzZX3f9SdsdfdPHXFRsCQw9WSAkWqoMtrPAvdfempgzkNtgc4dinygx1sJYm8b",
  "key10": "3iaCryBmUuw3QxKCaJEytVZwuTtS5F47eFv5vcZ867Dt7Y2mSYVc7j2JUV7LwZdWDRVWVUFhTYyX4siyGMyriy4L",
  "key11": "64LKMrj2bvfVtqzKfCm4CLUPz6me59Khn9KWo5Wnvb5h7dNr2jvXQqCZJTXNCzo3uKbk9xEw7LJGd9vWYa9PLL88",
  "key12": "35n5pdLvLazeooUT5hfvZxTRNgaTRRQpAwMtWZtaYkg1jgyEMrJ36nMTyCM2262juF6UnjKPZYWM4aYtbNL9UcqW",
  "key13": "4UJ6DnQibBWBp8b5Dezdu5cQbKMPmXMrBSUrT4V7DSjQBr6pZDFeTYVYEnyBBsJjERbwvTZoYLssqMvuNNn4m95o",
  "key14": "3dYL3oPmqqscPaKgbBYDiZmgBy6JL3bDaNUDwtSQAXBYssK13hgUvtTBPC1cxpwx7sUY4LWJQ2gnHR1mFvsjqHxy",
  "key15": "5uNDWciBv1P1oLgadEpeHaVEeVFaYo4sxRAzB1DQMj2qhtyKwCsS2aTy3tPAVMbfybcjmKSU8FPJxkXS6hbkU5jR",
  "key16": "4zq3xhmtVNKfhvjxRF9RLFTo7ADF19SNjvcf9H4v5Fc7tdtSGuhcrKJ6ok2jUaThzaNFtHpSzV8ZCBdqLgngVpQS",
  "key17": "8MYeC8FsQhFptbaJWBD89woPb7JPfW2rzUcxh1sAWziEYN8QpVJYgTxDq54kjiLpVW9FjYqqpXdxP55VzYMCgeP",
  "key18": "4v12i6b4dyJCmD3XAL2EWaU4QHHQNwi2ATYV274vvd8SLRQmhKV7mVJwrdjx7Jetye4RYcu1dRbGNTNpjFTvjAWq",
  "key19": "s7QvKd1SJtZvmyTG2vSZPYrjHgbySgDTe73y4JSL285gAKoEPAzyLv6vBi7temamzcTsJ35gWywVSVx8JzVshcz",
  "key20": "3C8EsEnT7K74YFUj5dP5ZhGpgyb4j9Fj3QVC5v5No8s4GAiMvNZpTjvV22iPDpXk7MJrTDuhWAM7KnZKSM2APR99",
  "key21": "5QW2MGQZhZrF7ViXsy3BpvoSKkGCzJjkebWNMX97J35vkwJEjQmW3CeQkssXuvSab8ub33mG16s7ndFtEqmmQydh",
  "key22": "3kTeRLeygMWzQyzEtPLZJxBvSBU4YuLbKzgdCtvRiYac4k4nMc7Dwz5c7DMZK3ZppGWuBzKMpGUcfyJzrJdy5Whs",
  "key23": "5mrZAxShmyGHSwTcBN6UuiWA6zMRAgpPdM8rtpr7dbJYswkHCFA1NvVoVxtkEkHBHujJLf4kNgnKit88e9YVc4nH",
  "key24": "5MiG7Q2qVDdGy3biijPvM81Jc46TbqNucrUkJjJNoJ711LLZE7VkQmAbtFGub2mrFg2MpNx5aQCAvLJn13fCVKdE",
  "key25": "M5PvPGEMMa61fcGvLiL3wJMRh56iaLixpQGu4AbRUm82359uWQpGsKCufRybaRnVy3zYTq7sxP3iSoK2T68tsBw",
  "key26": "2pHz8mmcRbj4m4jDh64D1GFdB8P322PEBMVDH7F2xEZUVhe3x3u1f2qHtpQU2zMRyq7x9Moc12eHKNJxnCvT8rVc",
  "key27": "2DtGfrgdWqMJKub6xyAs5wnmLeAfh3YtGg3M7oUpy71SMEVogTW3C6EYyjfGk8aMEHTQLZc6egVacKxJuj5K18Tc",
  "key28": "3KJiJEL2JatdZZfDDXpGXdHn1AEmwEsm2ZaisZYMLJ9QPiKbUZyaRXVgXcq2LkCmLWytnwgDKpn5ATCRD5p7mRDu",
  "key29": "33FkKE1TapWew9pevjsXmQ9wpVmMxN4yCA6DGkskN1UPFvARd4qugR7nAkAXvNLuWs1UPxDkDV1fYahbTwVumTkB",
  "key30": "4zXvaZ8fhXgGVvTnaJLrhXUk3BhRZh6JiZKk5mfZh9zVHGaeuAZW3HJzcpH5f2qkdCg91PW3QQ4SL3cCmKgrsmtx",
  "key31": "3zdRnPvYoo5vwNJ5TTx7jdiWhqgiskcrQyjPcKieKn4VLVsaMHpiWQf4Pv8WWdXC1nqWFn5LrDWewTPh7pSPwg1c",
  "key32": "P64RHHRUZVggjt6Pe5eVodADKW26A2Kd5PtWopdReyt23nmuEBkJT3eJgJhPeUVmZPZbH1UAECdFR2QKX2FiqmP",
  "key33": "4paLGrA4EnkKkA1xFpVkHrf6ncTMn79PZk4XyLXdSGUVuHAtUUnqt4wdwfeyv2pHMkVp1M6edpwueemzkci3Fav8",
  "key34": "3qLX5bWuGFaHrrn7rYaxj2LakoNAECdVReGesTwqnU8DmWx1zPj4pKxCsuhaZLp1uQjTf9riReH5gmJYWGsQ8ML6",
  "key35": "2C38RSTxURtMWUEuEJvniso1fAwnWPhyusTvnoFgkeWPViCX9v771d2gpFdq71qdeotsXgv2yC1812FQWJSfmgso"
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
