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
    "2Vn9ezjNeFw2UitYZFh6kL2gB4XocDxmQL4YgDUp9dVx7vLLVzwnxC9FPT2V6CMJLLt6ukH6LqwKZxnhEc7J83cG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MzxoHQoZkywcc99L5AhixwpGYXNUuUcY4z1NeLGUqbEdjWDxi6eB8nf1sFwxZqLY8x8yrrZuxKWfkWRyhr7aZ1e",
  "key1": "5w5Bdp8yhaMyhM8tzP1as7aqydLufwRrYFWPvJa2X5HV1ubAagKrWxhjpeaupPMQahqFUzYBcpyoAybCYsTFPHn5",
  "key2": "2KK7DW7nc1AF1dwD8VJnCJhAqoCC7bBPDSUNu1gDukn2pwL49n99w1x1hzP1m6jM1SUTyXSDackvUuNTsZM8ZsR3",
  "key3": "BaRxHFdNDAKXA3A7pWBVY3Y1YaSyqETxfaJwHTgd39gL8zJ7LYWqo9y4FXgMyAhGmdSa1VfdM9gsUTA5cR2Ns7J",
  "key4": "3yXzry73xDzFj3AHV2MrUi2QTJ4AuT9wuVE1JBJmqLKXBvucTBSSizxqi7fnRFZQjWBKWHAatgZXc3YBCKDyDkY3",
  "key5": "3K2yHnh25oTeMNAvqWj16ZWKgg6oSNR1GZBvbUSpoMw8Qv6Vg3pkMco8XVqNv7Pwccd2tZxiY4fS34YKi6JTbAUP",
  "key6": "4myk6o118htvwnsxGysyY7wsr6CctncgWdvDGC3dNdmPh9Ye8EqYnodH6sBo3QEHCxBUSsvfTPJm3eeKjQvm1hyo",
  "key7": "2MR1GzzvN76hLb3zCNDYxFyY1AkAQfeZmgpxqgpQbBckHj9WBnzV78gCSomdWSPfoe44ktzMZus3rSQJh4Zg7Spj",
  "key8": "4fMac1S7UX6UMhZEJf7DmoBCZi5wEhTL11tRpehCyF3PmNx3nt7ysy1eFoP22F93fGH7ZAm2ivuhMcL7BEdRF3Jg",
  "key9": "4RyFaAYvYM23FfPipa9GYuCS4SWg5RD86tKAXp2CtXGAGgmzPnZqZiVCa4VyiiX1G6vq8AtyWYzCTbruWmxShyQ4",
  "key10": "4JsdZbFM2rVqyXt82YsSNDa1NuMc1kSFeemzmpzgfkyw2gxUJrgSTyNxGwBxLCvUTxE7ZpWZVTcZk8pPAFDz4Lid",
  "key11": "XD3FCDyotzfQaoPGKSS9yfVRpizm9hQ82N93adwdueSbFZF7g65nKRo1zMnpJzNdUNh2ci69MiCfmyTN9U2SwzQ",
  "key12": "oUGMXxA9njtwNaugnGHgbKMJhHzVZPzXKD3rcNrNm9aWKvmLb4QrKx6wx5dFAX83QXtZcXcQiGciP5Z7SZs9YQd",
  "key13": "4aa9rnSDW8kCtDaC1oyN5iXKu1uoR5Hd83Lz3ijg2e4wCaeYsCGcEpaF5oFJbg6RUuahhQFbn6RgCMANLBfNTtC8",
  "key14": "5kS4nAHb9DjJNxuGh862HRWTgdQstDsov5zvrs9Q8TuEwqt94KYPsVv29Mpm4mKhxtJUMpw2hJTZEbrQHhwrKRrn",
  "key15": "2qBRJc4bKjeFcZh6pbvfTEmMo5iQHbePDjby92sgmB8kWSn6wvrUiwFBwDF63js8TT3zcYG5eb16evuBZ79th7Bj",
  "key16": "2Mv7jceuAg6WBEsLpWZ8J8REq2ZNMNtdDDXZ1qWZya4owZMqbasCg5iVvKFH1NgsGTpeRXdyDr4aizsYzagZASMo",
  "key17": "CbsaKUVc1TJf2ycSmJEtTTDPbg9zyKt53dQgHvTG6J1tgdDYqkvpFsudBTtuD8TuGUtrDPvVtxEgUwRBCfguSnz",
  "key18": "cy2aT6mFAsM1QKDd6aqFQwphZfL3GuiSp5votPLjYC2V3E58kGinUfoXN1H5ffzYH3wbtuDEXJbv5x43CNyd1Xp",
  "key19": "5dPsG1Zmut8B9KptcHWyhQnkMTkzNa4ghFtwD7Ux1Jg5Ch27q2mubizVHd4CmT6qchUopNsLzKzXZyaEYEvjrA13",
  "key20": "3tYSDppHnYgeB44spGgbTjU5myu3vt4C2NKvgJn8x6we91DQEpokuzgMysJaSfRHmf23byTSL3Si2vrZQFziiqaa",
  "key21": "dqEXh1AeBfKFN56k8pW6iMw5Vk2dqrd7yhrjbZSGZVG2nU1kcQHE3TUmzC7zGqvqLQVU5Bx7kcFhpmb4zC7nRvs",
  "key22": "2JERcBcukpywGBK5sxMXE8mUQEvMx41Zs87uJ8p3Go781GDdjme34AHYHibNhaAthWuSooupqSdYwBiKTmEKeob",
  "key23": "4LNRbudWMrJK61nmnDY9ZkNevgQ28c5raU3iCdnoffbfaTmX64pR4uGkf42qqk8z48rSKG9zs64HghdyoJgPS2Dd",
  "key24": "2qLyt2y82usg2zXVPJHQsGg8PrfGNWa8dsoBXy2siKso5mK8qLPgNpFZU679WRq1sZoMtn8gDQvoarB5PtJBno6i",
  "key25": "4X7sMEX1YFrZHYhe1af8YNwTGvBLhscsTnGNfKVinzM72ex76KBnsbSgV9ksVAXQzXTS85NoVCCpFaWwDv2kXNwp",
  "key26": "3HNibrdr4EMCPrbL9ptFNPD42hhw6wZLVdeAUPU85qY3VYT3pPviU3hBw5oDKhkRjKcryh7LBhhi1a35EUoAtG1i",
  "key27": "4PdmGa1GBiFWiGfg4xW4pjukt4FKnifrUY2UW8qVDPtSkr4rviSSyZ3mLxV87eUmjUcQiA52tatXrYJhqK5d8dvC",
  "key28": "5K4wYvFUuLau99cAirZ5FFfNsLAekVW5Z6HPorjfTNimEKHQeQcXVastckaYJcog3rBujxwzJafdyQcERkVwDrrj",
  "key29": "3qXqx6UPd2KTjtgnpsC26QgcaLfNB4hfcp12GSftqg1sdCgFndVZSmBV94FJmBUyUXYHxMrRZPPrXGmo8vz8icAe",
  "key30": "5mgtdV1CeWUvKZKXmyU7J5jxjbRf3pqkbPsdvZCMNvEhCq7M5w7MvAcXKUxcoTpdh6EvjyvsQHH9SGHYiPm4h5yq",
  "key31": "3Dzbk4Hko1La6KqatL7cLJGNTMYmg2fumMtTDikif8KkmCP7tTD6qwigsjqAWyi889ZLPgLGz2CmaPpLdtVfeYBo",
  "key32": "2T6WiKY2hMxfKSSwPSgFAw9nJyZ7JW37eB4qT3AjPZdLabD8m4mmgGcnS3Ptjjv33G6WTyjfMyKqX1URSnRqd6rv",
  "key33": "5izW2FPX2pJSkLk5Z9ZzK1giWGzoZkxMucBRcKyt3G61CEzQDw9b8A716NQh7GVaJK4c7qhHaHzB4FVadCVLU9sp",
  "key34": "5YDmBPvZrWzaJ7RjNsa7jnBDtErp7E3AYFCqtPTzy3ByxSM7hrsEo3NH2rMoPgoDN9Ma5RZvihf9sAAnjiVBKk9X",
  "key35": "63UszGgor87cpLLNKR5KqvVAfKiq24iYwqsHkJgRGzYU4HaBS1MxBA5kThtXD4W8T9tvTYXxQ18xBDuryWZN1pXh",
  "key36": "EKhKuhMPrHBu1SbZqRo1pPbkeuoPpcD9hwqrHo6PRWVnsm5EUdN3kE4S73itVcKS43sPcZL8fzTM28Trh2GNg53",
  "key37": "4CTeC317heZsDEz2arV8fqjF6yP4daWDjsHPWidhj5kTsHT6hsXXmxXy1FZvLENtXcnhz8LGfPdE8C9UnDEvAUPQ",
  "key38": "6zkidWLrkfMPzG1GGJfs2b9uhoBY1pRg34DQVtrB1gYXiaJhqPxjRe8R2faZivpPXcuRg3Yz97HR2QjSkhScYhK"
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
