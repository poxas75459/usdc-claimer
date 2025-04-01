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
    "3XuX7imNwazWoYnWCnir5yoRmkNShYku2mZ2iGkx8W9LeCRdCVKoj5r4rYzCZPEAxZuMQkdSnf232DWVkhGihaU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tTwJGjrtMSWL6XgAyQbCNW9wHCFjc7rYdLYN1dfGF4aQjY3YK4nrjvuuPysXedKRTkD1SFEAYNvxNtizfG5mwD5",
  "key1": "5xRqrE9CvEqTex4aLvbztfZR2Po6vpqh8njCdshXJzVy5YJRxxkrnq2xYiDjZbksQMpGNkBCyHVoakAc5B4tiDjd",
  "key2": "4KL9h3uzjJyE79NvxEVXyQrfSf7xDXbrAM83iPbQnD2R7qkryNkRy6DFdKyGrLMugH2NoYL9ndHNctnuaKZ5hT3Q",
  "key3": "5x5uLFHpKZxAw9YQn3BLjbP4UiyVcZjQLKNpQXHjCwWXEkaPihB6DHL2AfkNXZER4XawNRSLNAceG72FRfjTm8X7",
  "key4": "6nAjDniiH1xqbW23jAiErUMwcWi8Sk2NfsMt3NwEJaiWsEox9gLiA3K9HYsPfPfBZ8u3z3fwyf1NFfVxyvBwbMs",
  "key5": "Nxnhn9ogYCNPVJ3HNC8hBiLR1HsnHUjMBD58LWhJy69pqceyv5efVw72p2qj7j1YP852vRsiP3bppPjvUaQrZoA",
  "key6": "2xp7nktA67KiREnD2UidAH9gHAha5wzinZKpCAfX3sa8mq63WdZ5nCKUMWrzL4Ym17mjNQnkx5B45TQ51PEtyMt6",
  "key7": "3WKNpp9oUURuXpvv8dqbXSNsqaF9r4jqL7gZG2u5G72qVsiKvhbT6s8CRUAZ2huk722KXkDjHPS8dFLqPmqCsiWf",
  "key8": "2VvxniRL1Cmgm2KfwZWPhE9K7yvLk3BSiWms4EXEr1LwWWDYvgGvZMXvRWLRDVrxesRSg8MQtaQcsoRL1TsXDUFo",
  "key9": "QMhEz44LdaxkHcxXPi8m5zM1vtbPpWQ3XPC5nmgNdo32m1DMGkaqyzC5YbbrwiiqgSRzzbdEvAuzyXAQS2eSdp5",
  "key10": "64rCgS2xuj8JbuLxbgRPrK1P2eDC3uHeN3rwPpWRVUBEFEUd6f4HyVQXPTJrcPTVkw6NLPJ4y6z3BVPDu8R9NNt2",
  "key11": "5PyZWM1pW3PBKhNXreGAwqZKTTR8RMVq6hmrVyBhUNA6hZZ7gxHK3Ysr5q8Y5qFPFiCAYSrCnbbAtmSZUDjMSzw8",
  "key12": "2T9229dE81zQWEHTCUprErjxEGdfZaZ18efdmvrAf3rz87e1TXk6UkMmUBRx95PUAFau4ZuxrMDEf38nz7xyp2vg",
  "key13": "3KdukTocwrCsS44wRS67jDw3uaCfdftzeJdDGmBU5V2JbZUXY6F1vLgiVYjhWrbEtk6wjdETfshtoF2feikvvYtf",
  "key14": "Yyc3QG2qA1vRBZYPXQK1sbW2QCBhX628Bkb6WrqjVGqJbm1qd9Fm5cKaDoEPVwEk5JmAKciTKQiWxaUgs92qrgy",
  "key15": "2dUpDMhzhhtGRJjVzNawSr3MKiK294mYUGQGgaJasCQN1hYAxBGMCwX4Pyr7MVryFUsaN4fnzixkeKZEPe1Lrt3E",
  "key16": "S1VWxbsnoP28YNnb9BdPKbJtsQiPFk8fRj25KH4ZBW7pvrSY484Js2VuEZQmh7RSM2LgzYKDytZW3MsU8HkMbCp",
  "key17": "63kKaoVech3DLVzw5vopxnJsAb4HztHmbFG5dyR1oUFwgdGvqwfVHrTUxTJe1VjFn8rqfYCRtAoij1rFaHGLwDV9",
  "key18": "5RHAHb9FbGeU4TrRodHAeW3iHNehfS672Dc82NbuSsVGjYrQkYcGRoerRM2y9pR5zbKMgwmC9c8P4poAKgEzDGCf",
  "key19": "4Sh7Bk5QzmiZTCwafd71MeLWyYs2vBzD8qAKTQijXDC1hBYFNKFevkajJtmHjDqiA1UJcdy1vNXMhkdo7Hd934D5",
  "key20": "4Pe5gmYeaKyYXY7XyfxhhMy4Zyjq5BEyh2iEyXxSc7sjYjQy28AhfnVwrpX3QJDR3ANLpPwQyRZgH5noE4qfno9T",
  "key21": "3nK7ExFfXx4Q9p4qhKkB7Q5M4DixT3SVksd5efWBLZyqHbaNHNBRRU59fqAH2wycvqLQUhuiykDs24qBsywCBUjw",
  "key22": "5NLi12AUkHzWKrrwzgwZZbc4KsPDhtfd7Tvy6e9dQW9tw2UT1LedEHvsDSeefZwp6fnFS1fU6tqZZp5ykc9isQKK",
  "key23": "3fMfAGgVDopJ83qfNTXCr2F8VHWH5dutmKXZVqPbxvVXtd6wJH9jhrePfFz4tuDuoiFYavcAvCVo8WxAZHzsxYwp",
  "key24": "2B8qXhiwsc4PQvSsNQxPaGeyA5Teqv5oAimVfz7zjLmZNT3ovFVbYPyjacxknjUwbwTefHmCoEdMsUi8t2WoNQFp",
  "key25": "5cBqNcJ8vi6kDpN23gf2fJ1iUMSh72CWVRxqC1gMTJuHWcab3qyqA5ZA12GMvfrefcgWfxHHxtx6vwTnVkEdMPbw",
  "key26": "27s8J5JYSbM7tHoWyjpJ8g9kb9SkeAeHc32Vcm3JPjRc7QpCvUjjBxCzpjdXLKSc3aXM48y2J3ywQNzBNydpdwE6"
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
