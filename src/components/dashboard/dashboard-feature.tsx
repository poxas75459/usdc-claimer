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
    "4LeYTgZY8JcokwSaNEkKma4KbrwUEUYcZB956jqGC54wUN2f53EE8a88V2qDQqSxp8GQ7b59PgrKvhbKUVf5vg8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hDnCv81Nxa2DwfPSrhC8P2TSbQnXkmjK35v8ZGzfqdqokGmv5Qg57FkzpXWH7mFwhumRQoznkDBtkAGcDTMy7af",
  "key1": "bTeuxyuGtmQ1MybYrU8ckESGhbdPbhms58d6LoS8sCrgvi65D7fdXaQJ2MepS9bTop9Jzzw56PaQJZP1dEYiKQz",
  "key2": "5ukE7JZDyESmz6w6KtPJQR5gxQWqSFYuFE6wFAiyCASuNHFdGQjwhTBbuthbNEtQW9G62C3g256rFuZ2gE8Akr2A",
  "key3": "qiQCvEvGRP32Fews545DRAoHbHS7pwq1CLTCEFSRxXnLAfgvRMoGpxjDgqECmmENP4PRjKpGUEM5EhcRZa4AwBo",
  "key4": "87YMSJHoi3McexWzEb68DUpJ3sPEUiYa53q5VJpyAjTpnoPdTUYGbbwPekL6DDRxqwW4BVLZ4dj9QqLUNDoGkNH",
  "key5": "2D9snR8SdyV7Xp4fmT1eBBviesa4sUWLcVRGdAuv8kqavubTskZaYAoxeYEG4Y1wD4PMoKNd6tsDZ3euzvrqTZgk",
  "key6": "44ac4o1kxPzhDc2eoQiPbBxHwPFAB5czRS2JaXPLh3xcTQutUj4eHFiTeP6gjaLrWByB8qdN7VZqEbrSpKeoK47Z",
  "key7": "RiC1zbnzGU4B1zFJr7jLi938SD9Ge94Fn4qYvyW156hJr1V3ApS4npNdJwxb1JHmYPrWpRj4tBy3P2LD3Uc3982",
  "key8": "4ytxaWTarhZF7qsHymtqW4GxvPLR6vojh9qTSQxVkk9HctgczStG9yzmme7ugLEurVZn8Eu96ahZ18mJJRL8r1jU",
  "key9": "2TWLoYxQWg97DR3BxM5JhxxugYpcfQJH3mERJoEYU94M3qZk6RDnpdjp6F6Ny3vtdq5TzQLu32A7iiWhd5zA7vuV",
  "key10": "3iC6RSAG166GWeyeqvhKdciC8UQ4xVyApvCoMn4iAtsTNM5pwmksmHyD6yND5rAMBrws1ucp4X5emXBtBcByQKED",
  "key11": "2FYZVTFnVSUa2UD1pUTqnz8nZz1akasxD8BcUvoUozNrd7HJdbZyv6M2jAXPFKwLEqGj3CCFZdEJ3JrwzWxPkR4x",
  "key12": "4DLUJnMYwqaCVjVgeBREyuf9WMYfepqt4DQgtijRdaHKMqNty1yUiZTapcptLm5HQXHBuqfJWDhPpm9eLCx9ShBp",
  "key13": "5VEhsLnnRkwb5DUg1L96S34uCqNJdibsD9XFiPY23Jp2CtS1LLCGmb1rpGLBDByVSXjFSrhBzitnqu59JtRHRTye",
  "key14": "rqfWsvdXNkdSx85GXhtfyKQYGLBvLqvfQxfJFNqtKrwSGdpBdQtcPxoRw43b8MppUJqJLXdLQV69mwaEivhqzeS",
  "key15": "4nBSAkSEruzTYKiBcfvvMb73a4VG2ZivvxfgzQTXxoTt45eWytK1BLVpyeSFNGqJK2q8moxPNMNPMoXMP6EjUriv",
  "key16": "5sJxWbFkVNKRaepfUSQzJpye7yrfu1MTd7rh5o96XdsaBnc7mtoHFXczoNR5x4wtc12YkCZpSb9oaZnGGWoZtmXt",
  "key17": "43S5jv5wX3YrWLPQjGqC7mBsYVgwpvheaDCksuFE8zagEvDocXfFTfv9L3HMouFc3dhvDFQhvThmrNXeuaLybYgf",
  "key18": "3uw7gchaAy5cSyJ1mAjQpzdj4wdHnXLn3LJx1FMWkfJYNp3QjvuDuszdmTjoVKeiCY14iS2dJiJTzLCMhF3YzPT4",
  "key19": "34tyJ5i9UqzBhPo8UnANZDx1BPKjXLvWjyuC2b7dcbdmakcm4B4jYAJQqBEzJQSELaXCEuqCd5ahE6eejDSZtr8t",
  "key20": "55QjHaDhwzfqgV1hiYbHB8pjcnqv4Le2udz8is6g33WSW5aN81aJ3K2QXCaP4YEBHbYUmYZfaeNNpUsJE3sdBSFn",
  "key21": "5E2sDwFdoPmVJWphhgkjLBkXGYaoNqvguxoYKYuU1agFiq1zTUZ4kWaJByyPavWULUCJKgbKTyAbaH6pHYPNsWgv",
  "key22": "un7z9jeDo6wDRS4UmG3Fva27QFSM5fD1WhN3m9G6kHHHcURbAwuDGvYK3Zix6gd5Kbn6GJQjJGVPpDCh5hVBADk",
  "key23": "262Se6X1Lq4ChfLpsjCcnPAJ4BVLfo5RMzmP4GpSG2Wv4ZmiR5tdNq8HnCjvSAs6gKquY3qBB9ChZ38hCbDYgJJM",
  "key24": "4i1rse3B4hPQMttwDBQzuEt2msiaVZ8nCNyAb71p5qAvohnjD7RUDDD91X9pyN3iPZRxbLycr5AANXR2JMHNywbA",
  "key25": "49dDNBknTnKoEi6ZGN2QeaxpKY5qYVnZcboJrZvRZGdwV8rGZdTFsH3wM2QpLsTEd3BKKVsfujCbrkEsNUJsSrJ7",
  "key26": "436eBqi8hoYNN78arikUmcRDowpMbgFvJdS9UciLDgCeETWwucYQLMu9tcmZCxnZfKUhRn4Lyvvqo9rvgrPfaoEx",
  "key27": "2yBnuizTkrLnbkRUEpNZit1x3HYMo1jMj32butLn5R43XidRkrFv8xdfwSHNktMtKq3nfJXfcvGnHkYdyd5PEMnJ",
  "key28": "2qzztAtW8okSzW1DEjbSmzpo3VcRcEQgHTgGc9eCJhjdBHS856n7oBW9dyJNBmBnP9prSd5YfDo2cPSCHNwd82ra",
  "key29": "vPZ8VJsjP8PTJPdW5zXRiR2VA1bpbgiSJHFj9mSjaDU81hNXHn2NA6rJAvqY81djjNuwEkR78zM1xJNktAX7Z6D",
  "key30": "4qs4dkSt4ui91mzxzEcZcuePcRcV9YewULHnPWeq7fuQunUuWzUUbqXa8etaa1iz8FGn3bFw4WvxvVLobB8kmCob",
  "key31": "3D5VxBQkENaBCh9AZz5DJUw8Guky3Qa1MUSQMdicoe4TqoGWcPhF7ryZbvEaCPj4pkxuzQyAogSb6gqdPe8z6bjj",
  "key32": "WNcH1pX8JEFZenA4nRKu3SmyDS3MZfj1nSytBfyEragJSUjVJBA56bKGGDvM6hrBWPWpPGnhDdbznet6Fx9umNa",
  "key33": "3rG8wMBhbBaCReB15hKMLtixieBgkPbdxB7JgmqwekVbEjgwJ8Ecw72pMPTwHzba6vqQtw6RgYwMukXaa2rdb1nE",
  "key34": "4Ac3ETpcjLjC4jiyDw5T2c3kv3AJmTR2WtN5BG8Mzo23jyt13PDs7YTPdAvMRKAgbVJYKvWwE5fEzqzL8c4K9fb5",
  "key35": "3AnZNNWmxJv3TqLUATnpFosfm6YH8TkCg1XUqxtfx2Li7npFCegCPpMrhotGoyniCC7x5mPFW3ssgnLMjxKdVaVR",
  "key36": "52PGZoPdtfssxxN8Cbxvsmk4Nro6wXuyAzo8HhSNzRp5xiwaauJXVqGap9ZCiBExx13edBUYMnd6WeiykEKVHaub",
  "key37": "3apyksDzr56R8nQRrg1mjmCLMToNZgecjy81YHRarvw2yzPHQ5FZs6Bg4A2XsthtB9hYPQgPQKRRFYLJm9vTxcxu",
  "key38": "dGZxEp1Ama8f3Ni1ng2GXT4gBR2LPodNAURUW2A1FvfT84dovz5HSwWdNT5AwmCahhGchv7UGPLcEAPRnzaxtSd",
  "key39": "49hQdPKfMCDiBSdagkSqAigq6HGNwoCz4uYDHi25gyG28EqLAAq7Sur2LzSRGuSYC5txnTYdafnKqzXqfFzD9xxS",
  "key40": "3sUJ1C9dLTdjtBUaHQUqALFxKFoVp6KWHgwc273sXK8c7E2qxbSmXM8nCTw1Pt9U3Bbhh1SswLMPYjyjrnuxX4zF"
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
