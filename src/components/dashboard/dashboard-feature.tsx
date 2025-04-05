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
    "DQze7XBEuF1JNomozfrkkPYFnVpbbrd3xDoxZz1E5XR8AeCgw859cMe9hUZrVwBG6QFeD2K2yiwJQMWjhxQpqvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZnJVpaZALmkWU7LjXribyDtfm7S5MfQwsvau1G81KcwUoPizpasGBdb59TJj44Kxg9PAVDKoWj9eUozzfM8DEig",
  "key1": "41qnWw1aDZYTg5uycKGMvGkFhQdfXdyomL3NeGamQwP5NULUMqdDYDvcjwF99dxd6ZdNZWDy2xsEWstoUG2KZHE2",
  "key2": "4fzvwYbYTFFCPhUHRxwDay2b7xL6uN9Mbd83PpNNg55znAmgYU1EHxvhVpMbEVmJSfZxu65tynxU7oRiagN82qLM",
  "key3": "3pMCQAYGv2fRShzkmggXs2K1mm8udATVty2zCHMJHEpZT7696G9rHjmoJ3XK4yeGKHopz42vypy133G3EhTeqaxN",
  "key4": "4dDHAxa4KDYfZDHfpBBzBvPkcD7aa4D7ZnDJ8VimaMLUXN5AvHigbHnbZiLZZYgqfVHtZDTgansJfvySEt9E1uaG",
  "key5": "5aioTjFeafjwv8izexL7DnxR2bdHi5MWHP5NNUdMJ3m9VSq7MAzbzukHWabF4Gko8n7AcMVdw5xnmTpyosaqAJrf",
  "key6": "5Rh7aFj2eyPh2vqEWz4ZMRoAzBFRUZRWFRcrMAPXtuRStrNZZJqvnXsEZV2XT9hzzLkt3b9HHkBH4msg1eyBFb2u",
  "key7": "3hVHE7KWMrqaWUSQuct2EjskD21YKGhSgQrVKaJjMyzGksGp62ULeddGQif9Mh4svVNYkW73NrW1Y1rsT2BsAGr",
  "key8": "4fHDYapX3HyLQPZSzLUcb28E5JhSRmq59TtFn8oHpwusodjS9FPEaV5SLxHD3D2FvRVUNkk6hQx9f2rbeeGJg2iD",
  "key9": "3UNZkagU1EnzLTC5p2nZqod3DrEYtbB7iESaeAgyetZh6NNcjuzj93Tu8VPsxzQjVpEBuaYasxMKirVVkbCnWGmg",
  "key10": "ALAwzqUXeAKmsgnzRiwiqCktmLvXg9AsJfjqMmH8B4nvnnTYLabL1yjjpnuCYYohyyKvejZe1T6ALr6eZ3UGx77",
  "key11": "7ZF2zeoDuXPSoduqesj3m6tChNfzFa8yxA8xT9VZXPKKjumBbHxcVQuQGW6yNKijVopuGF3soRG2uRYvKop54ns",
  "key12": "2jNdjhK7xo8tMqM7jqe2htjdySe4HU5vmB4AME4ry4d4hGXuq3nW8psicrSQ9U8peLPFzP6YzFyVBdA1uayhBLZ",
  "key13": "2iLoGbSZsZgikPxUfvLvN2VAXzdVq7ixzWnurHZRpJhf8YfbcgVWAV84h3rgXWaJiK757byKa43qcUC11r2VHLK2",
  "key14": "tgvsYotMQLAZyYfkobZR5TvUDYE43TbzXUuymWNCkkJv5bTuNpydFD6ARheKAsH6B8xApFfTvGpEbEPGwSgEaYe",
  "key15": "4qWGJ9Qyh4xWaATRqYRwvF35yYsXNbZk7v5dJCoVmAUYrgKun121ZzmAVrsWQR31KH9A2bJ2KASmyj7FLiHGL2Ec",
  "key16": "S5E1mCEsfDg6FYPTT5AteFb9eZba1kN3SQZjJa6okgJd8uVnQwTxr4AHGHsRtfZhe71DCphzDZYHJoadvJtPgqu",
  "key17": "3pysKrnjF26oEzgtC4catqaqkVWXawdp1PmkZdAnPeiVhYQasqL4Y9jHcYAekVDBQkYdUUzD9jUFGtAtwHFnF7Bw",
  "key18": "5a5cH2BnYvNvFCqwPyYEFAZ4YGfKUhuqmFKd5MuKY5oQsPZXLR7XF3oSWiWAstSQuve23yCA2vYtpX3HSyUBf7gU",
  "key19": "636Bxg4ADyTNiaHfd3qobHYLx2ACxDyfzCWmYjog2LFh29YmiuBgukJ4jL9URaFjD7zka6WyTjTbSo4oTk2YcpLE",
  "key20": "4SRaiwQ9GnDmi2fMRB1bUnaCQUuMFfDMfxGr5YDP3Xg335y7oLax6dg7QQ2kPWH6JMFBCLZus4h8uxJfu6ggLf6U",
  "key21": "4przqU8fVikkw36gbycxqPj9GbZUUmAL5Akbga4P2FAWAqRuiVeA8kDQxMwUy3XnwwhJ7m1u2dXkEPWGUK8TzAJo",
  "key22": "2zCKkrwh9izPwSWsqwiq59HQZF8FcBiNjWCCoFabWM3SZiziH4BcVYwrEogNqF8LiqEvkv9t95iuCVdK796GKH8e",
  "key23": "3xaDXQ4BqimQfNTjQxfcrQXUURBwewR3c51BBkkdPUAY1SGP68HNWzCJcnPzHT8sAho9VgVFhpFWSx7KLG9azdK2",
  "key24": "52DDu5Xo4khiBPP6xy9GoSTS3iBi11m4RDf9GosnhNcXFMWW6ySVtge2XAsDkmkoa7vwSCxrPQ2dicTeuf7rhdAz",
  "key25": "aqgBKW5t8rxekkhGktRL5CnZvi74J5Y8QLnAJV7BS1ejf8ny32E3Gpko7A9FUrHPdxMZEZbhxbhun3Wg53gnirT",
  "key26": "2a8xcg7fYd5VKKvPBSwFvg2752naHH8REdpF93XNasUCuMy2NzZKwiEYmwCR215vqCgbsBaGWNjfijbvCDJCdFhM",
  "key27": "4j1kX2jZ3ZkzGZmGUF6JwcLepNaqSkh6FPQRsKBi8btUz1CfjxBV895SGu4XRdSZJiewcLi62E9WJfY6GF1YdJt",
  "key28": "4b77H1A65Fkf3EbvS9mgeZqU49asQxZfCYhxe1h9pwwoqCeuTXscTSDHvJGasb6dLYMuZityRx1mKafZz5BSiJii",
  "key29": "3sLLPrn7FrXKYZy1m7g4QFkvphJiJ3Fy29jPkmHKKXRphTE84SZmh5zekZKfkyssafpaWWzywQhyNxM8ie24cNAv",
  "key30": "3z9y3QKkLbBFyUMFc9ecQsr6XerzzDZK3mAByNX8WRZUqAiQdx1jecfZtQnZUxLSJQojYwduNePeZDkP1Xa1GKCH",
  "key31": "41jRbx5Q2X1s7v7dCd7R7CYzD51oLdxSw315vEvi8BNcaT9Wout4KLeiR2SRGS6EdyvrCsRHW242EmmnUUsw4rLs",
  "key32": "5uWnwfr1EhjK1qFK7AeggiHFAKAD4oTprQkHepX4Yk1yMy2mpxhHACxakGMLRWmaSDgZRh3Kod3rvuQBR6Lugthv",
  "key33": "5XBWu79Jm1ft6yjRsuNzYdeY8dyNVvs3RxX4dukjwnPF1zACTsyj28Rafy57UUQodmbwJ5UFNqbb1jvsVCLsAPc9",
  "key34": "3x6amdyKTmcFKgjyntGLuJEtVEvDLMMYDacjao1VVAhzb8JMJVDvkQnANgPfjmHBbcpuRk8L6Rt3uVc925Xp6RtA",
  "key35": "5JyxRb3GTAWcMMbgvGSghpQST53KcwKKMtzNBXZ1z5euzqqm4v2mY6pR77QG4jCTzXojQS4SwRLhXLSqEt7ci4qG",
  "key36": "4qgPuhNMaaiKBLv2QmaxhobdAhCdjoLQHqJkuv1iZW4wMpKGSL9vtrmvZWYDZzCNv9iiBDNZd7qpSdngGzuTwohV",
  "key37": "4QciA9BAUuJrYhKcaEXLNFq4PEDQaCPkzUjGVwYtdiieYLbFr3PFKik2B6Jp7z8mr32JLZTzh22xy33M7Wht6gni",
  "key38": "4QgwfRJ2tXsTeVaPa1M8zeE6CGVczKqVZAdrir91FgRBstGtroQ9UhkpTijQEDf6vok2L1vJ2eLNnETbnq6ywsw2",
  "key39": "41bQGDK5KGK3TJLDJGCxEkavf4g5cnjgXaBNkw2A9naXehXYVSsaRxTbY23MXA7Lpk3UoFqXaB8LwqwHoMK2ELhv",
  "key40": "5fvw6jGy3BZDeMo6cGrYRTctD7PV2NuGvTx15H3DtJXM6JpYucQhna4s5EuxQ7Woje9uTPaKKSTgs8cdX8d3zN8n",
  "key41": "495Yf6QorskwWxbd3edE9kptQXPnsmiAYyX9eiTevU5phMDnSS2vEWXK9XwHcFiFTjkR87ryGQ97afSMPSZRmD4",
  "key42": "2gBtj8uM6GyrGQw39VzbFEGkMNRAQKMSVziJ9tjie1gJsrKpMx3C4wq7jw3fsGA5hoFYr6KMiYaucBJkVWN2ffxR",
  "key43": "3TdAdYbdXH5jxajozXo6h2akgo8kEd6n5eq6JeUc49NmAGvVn6GhKxBbDweiXSACY35MGiKMbfSXzufYPfKWQwqz",
  "key44": "3KzHBJmndGbzMJ5jUn2TFx1R1KESaq2XnpX4Zmjz7MjX36bo4LbtK57rB4mLqSMNvVzA46tUFZY2mznoiDjD2iog",
  "key45": "4p2Sgq3CXgw8B4BmChnxmvStLx7KrcuVHjYZ4zotLm1BuZAJrVZxWYVmS2vB8jJfYXcNTKvfDRxMKQ3AbLFqpJuK",
  "key46": "2N6Q2krgm1S9rqZo56aUc9qWSREMmK4JQzN1uuSKqPNaGPq4wV1DHt6xSefqecYubUXwzBBwVtrHnaSoFL5nangL",
  "key47": "3wJddRAvNaY5QvvrpojTdwGvF4m48nkn1GdegbzR7f7DQwAg1mLxiDzUyadEFCX6p6vwcrkxxY47rwoSgHnWPrxS",
  "key48": "PM9LseDwqRyHvAiWVWNw8K9JoHsxmSgt3WoxcDLNPB5uiG3FamQtc2xYEifX2AEoip69Xn39dokPxSzk7xGhkFN",
  "key49": "2mLSZCn8wzXuV2uATHPjHSUXSWh5WCt1TQXrDntrqBsiYjpwkvZav8f6xLY3QigFPanjzWzJPk42LZBAXeQv9K1J"
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
