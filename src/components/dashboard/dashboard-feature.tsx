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
    "3EDRX6zLxNTTgq4bCYJxeHHzvaAd1brT22zgKvqWaP2iZrsmeL9vd9qP1pphCKbMg6dM2qnMi6CZhgrfWZNxNzWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NaN4xBoGufCty665iNDzQqpTMQXFLbnGfGysV64q4qikghp16v7zAUmUWxdQK669VV9VhaRbrGELRbyfS9HNnbe",
  "key1": "4u1D1YVpvMpaWrELmpBAoRMdvQ8G3TfQaRvRsXLkjT7gj3n2e6jB75zEtE9Tu9saAPek7JoHn5HTj9cd2odUdQmk",
  "key2": "4KLCGg4akVFjJp8v2LXr44se28CJr5yKByKoVMXbgJ37QHfQQ1Xe9a3h5AzDrQcjTnJHztGwjegTkYk1yrqQBKyy",
  "key3": "5s6ehwnNkVvUSgFLbmDEM15LavyUPZNFrzLKvxoBqz5VXGeno2CkcE88Rm9vf3ZoZTPZSAYULJErMDzFFRJ27wQ5",
  "key4": "kzaWcrQXFEEdNWGFtjxeVfmu7c8oTYNYJYNVHz7rnGZMNfvfZtEDo6ZSoMiv1Ur99kxi1sMgAf9GBS4JbzXKcaN",
  "key5": "28ruEz38avgJMNvH9iyk1Z9rhNKNBGi3dRSewzS6Bsj6xSRXFa81pvbUmFnr4ooZQ4T2hBjH6L9mXeD42Yo2VLVt",
  "key6": "2LYiuatakwwqzJjYiLi6jT748u4LesQzweMgZVRLvLiLHqbQoms6vdfJBCzTazZ8i8x3aUNHMQj134eYDLeh7pov",
  "key7": "3TXsa3ksT7yRErMrN131E9NXwDzMFjvktfKRYeME4nLHtS52EgXheSAGw6tVnKo8K86Bm4uRzTuhWpksbAxv96mp",
  "key8": "3HUu9LDr6WJoJD2deaeuaqZgHoi8R9n17Xq4tAt4fykj7UXSUiQH7c26HbDrsizTmWw22FWHduQwPhJoSKRZhKb",
  "key9": "2K9g92Tu94y1suY3HgR9ZeKTTgSNjwvR8tpiqiPZ2RPgrnvXy9gKNYfj6syLRJm9YkuzNQKMfcS8uFKQZbuvg1ji",
  "key10": "5k5TPUDnzwLJnjjBnkWa95bW8T14k39sKioA6sHeLGKo621xoqhfyT1TkVWcGkViPh8Wo2Mp3m2NPxW9nkoQmz3J",
  "key11": "3TsPJ4xeWYcZf1mGvbceJY6DUBdCwemZxAmEDQDh3xcYA7krACoDDE1LyXTiyHhcqxiPjpCWQZwVLz8yDhXEvrWC",
  "key12": "4gU59K7W6tUaehC2V25RTeG97PntRCHhFtJcRBKUrtKboVLQpnL5rEhqkyVUEnKVkteWQmtVUEVPyPZdDsMKqvr6",
  "key13": "35RdXSGYQLUDBcSnVApjY1pUdc6a4kmLZKXA8Sp4Wod1JWp2HuXSdihVKcfJCGsNAKk1AT1fVw4UGNemjEeMcPNR",
  "key14": "3M1FkGodi7fsFEgthXtdT6FDyTXDvrCKaDTDe4oW91tAsMjZ39e4F3eGE1pbGeia9GtE1yeaD5QXJV3DP6rr4s1L",
  "key15": "3Ehk1EWmZebKFab2KQbGTRkmu4rTaW5zC9gEVBKGCrkjKKSN1QxFSeLd7m9aL2H2KYk8CcGwQNagB31PtvFm7AHJ",
  "key16": "2ZKmELMFPYHpzVKryXXzpxLYiGtsbfqVX5ekKmstL32n8HQB5UtFS1rPdp5rVbGi8gi28ZfSPoeafL4vpmD9JL3i",
  "key17": "4omXN4vo3X1tEhs614X6PDaK4j8bn3k5FemsZ7rSadgy2TkGp3GGvMRXU6eBfpgpVpx7aXGfkELSnPTwqrc1zRSK",
  "key18": "2yewQKQSmgjm1XTZp5dBhJYP4wnHQ6riiwLBwTv41C7LKY1VTHqKrM2H5rMwGNBmX3ZistJFB3JiTvL7EAAsvrqf",
  "key19": "tTE3Kb3dFXA9nF8TsLxNAwXC2B9fohn3fShceRzszNJ2tCvp4UkJqH3d9yqSgfnvi8jUgbsUup3TBXuNrhLQeFK",
  "key20": "3YKo22XfQaBrVyvp2i77yKuG4mN4C92h9Q5KLG9pgnRiKaeAgkd3A2ER4QyRKo7cam6HGAKeoT4vYSZh74msqSeP",
  "key21": "5fMGmFUPmnAL59nLi1qB21YjgQiudWjUjKFSuQgZc3eR1kCwjpRVsB3sABGESwj8Qf26RV73ay4y753LiZarM296",
  "key22": "3BHDe4nMa75TudYrHgJhNiXEjcDkchGQq9i2x7P2NGEL6f3kc9Kcbs1LedZR95vmR8yWZR2JCL2vromiG2wn6FWz",
  "key23": "5yugyQZfYsUzmcdXukppPoSpCa39RkkFTEhf11pJQ4GT4NeZiKVZwbSccJKcELDE2T9WVNo2ZaSmwGc1NFBG6fYC",
  "key24": "3LQ2BAc8BDhiyWmkQLcN7To7Gfv4MBmKzMHaTP5U7Xdyh9UtsMqgS92ngtkemYefFha71cwFfamG6n7sLkRL1j2c",
  "key25": "2Dg6uNgX1JLAPoVo7BcvCKewADPKS2fsRLpBggyHrJg6pc325zWFZrfXfBM2wQEBPPJWT1sgd5GV9tJc5YxypQmf",
  "key26": "4gXwCYebQhEevHcMJ32gbZGPBQovS3rfBpZXD14xYjnFFTXbJFjV6x2qxtwGyrb8z7LXs4iHssQ3hsFz3ex8ure7",
  "key27": "2R5SdYsudHW8kkKX6jypeFDPuPodQgBdZD8Gu3xW8fanLBMBQVxo7Fzv1zKDhftzpmfdkvVi9UQb5SkUvvZ5a85X",
  "key28": "2QJY5zasrQM64qp2DgNcTMwhAAW4kgW2PmrNVrz1KVfPEzsRi3nLMAx2YkFmyJ2BvY5vGWhHvGxiE2Ri3SLjyHoQ",
  "key29": "3KLVKxRSzCS7QmUXMBLr5QbgVVrv52UBpwssNhud6fBPudKzydpTQMmCjreR97PH21JkrtvC7iQik5rbGf8dHwrh",
  "key30": "2zRHiMzry6a7DEBUMtRkMwdbtJh8EcYfiaA7cWFtHk3zVNRH6WLUVzKpNc4pfN4Xb5X7TGoJUGoyiWrxZojS7fGS",
  "key31": "2AkQ44MbSTMeWVLQW3HeqWALLjCi3f2mJG8anhKvCrp9UcWPAFWWP5Qrgsp6sC7ufLxkJpydmVwTDiUv3ewWGiGC",
  "key32": "qzhpp1zLpwZ1HM5rAZPTQuYR8voct4J4ZzcfS2EnZtWg73Aw4jifbHaqFpBvfyDucFysQreDJpofvsNBdV8Zams",
  "key33": "2qdZp97s3AYXv5CV3v8PUiaWu4duCeJ7B7ZjajULdf3rtydgGLsKiCEh9Ui2UAoKG999VS2ZBeSpj2r4gFEWZTSL",
  "key34": "5x69bdKgWZMeXnPPKeuUibEZMFjLdNo58qyt9bbo1Q1oqPyr8xNnpGNgcBpueMP72z9XnKU4h5CZ5SpC7HHh8XyU",
  "key35": "1K9qomWp2LEW1Hzsyx8BtzQAcVdoG4yV4XeyYnxroNzi1PPLPuwf1gUtxN9A7C1tUfwkhJibgGKvnnX5FRDmQxT",
  "key36": "4YiAaFdQfR4BVa5EjzdTWiNmrmJUZ7vMFh1VfEJyqtDqaAxfxpdC3aFcs5SAhxgEDMa8S97DSLDoyt3Ekn7YJMb8",
  "key37": "2pVR3zUdBkR4AiTzcixNdNTkTFF9sFckdzyxjuT2g7v5R2SuJGjbZjE6wHkJjLFDSY4gxF6qnzC8SZYB6MMPRaAp",
  "key38": "4S5W4ab35J1ux4uVsGWzi5yts51v4UiaTme555WnjGm1hQrJNmgYWrjHpuuexcyh23rsw9xSBDreqWELxhwLvjqh",
  "key39": "5jYSKWt3Jwkyt96rjcayZ5NqdqfxtmyEbdD63YyoJgmy4E6cTfxzduxShaC1GWrJ5Nxz4BKCPSZDzNpw1RNu4HR",
  "key40": "4D9qXeQiWgVPAfKWVbzRYgGkKkxPMVWF9mrXN8YTfxWrjNkDmUfZNHXzJstAFYUJyJGsTxiPikztQTnLWRdrM3X8",
  "key41": "5586q3P793DdQboFyfrk1HhfvSMS1j2h1CJS8vQn87z1T4ojtmASAsRYit85TvZXbjXRUxyjcPYSkoazLDmWEzXc",
  "key42": "2voFV6ogJpKrXgVkC3zRu4qneDzyiXjUiqY1jSif2RJYKXXkDA6J2yfYtuzGcBU8XHUyUkVaHpb7LmYtVESbgb5K",
  "key43": "3oAo6ux2KniywGdcc7v8Ec24Wmq3ts87bCnjoXx3fq8EAdRW1HnuM212Y2YdJJ13U1XSBQ9X72ZgjuxhNvfiMTEA",
  "key44": "485TAqQkcf4hJ1tLjLcka3uVjEaqPoPqhNTwnf9J4goZwVio49vvqEZ8sHoDWSW6xm4y8XNbtZiTb8hKKjNCeU3i",
  "key45": "Lc2bwMuMy1RARh1GR6BKVhJfKpdPmc444PFsvGsqdYuFGCxWWevjArZths3YeShXTGJCqeTDyVQwixjAqRPB9kr",
  "key46": "2XxsGjQPbjPkDa68pES4ow2c79WtwYUMe6WHvtNp371dnPVbmmtBv2snteAdq594dL5nsqBqzECPhQLE7WbbTojA",
  "key47": "3AUur8aafW1f7zBiKMB1M2WtwrQsgdTrjGg78AcXKQrWygceQAhKXiTmiKEGWVGQbEZiZhRtaBiEz6kwLcEMHcRH"
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
