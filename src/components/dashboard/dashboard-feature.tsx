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
    "sJzGL2sUC2TN3xos17sB4KceXnLRwvSM8ux5AfaoJK6eZ5uyhS95YnfBuSdhKZoLFs51Nda4rhxZHpeFNyQtzw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A8BfKuA9rs6nU5n88hgTugGsbcwpyt9wkZx8zPYmuWVteBVkSTXVeHAjFcNs13e4feXk6YRxX6NFbjfst2zFBnL",
  "key1": "5zPJJyooP57AMGYwpsFpzwpsoCnGe7vhccfpoB8QErduxVqTbo9DeuZKDWiDcywydiHBvncmHYjNHi4m1sqPRLiX",
  "key2": "4gdxWdbVrbYJZ3vmBVYpvepGz24GTAE5PjLhqGtD3nvUbzRsEo6eNgY2pnrbExrDAwM9ZgNrrQDaEW7fDe1JqHxy",
  "key3": "48Df685N4mZLGZ2U6cBNcQVD466nH44MUUYN1YcLJio6WRnGRBsQd9MUaadcgb8xCedRQxZ9mJhaAPhYAEWUguMf",
  "key4": "54BvDibKj6iXp176CGTcjtJxDPwNF1YSfjPxB3xSXcR5ZpxLRPoLzoEvDLSSRqLtyaQrasxw4Hb6T2zjuejA2XL9",
  "key5": "21CmN2BA8rGDbWrbayHd6kd6cGtkiY5exYqEDwwecbwpVridMM9NQzCNaLG8vUy4gkffj4ZncCYDVKdBW5xgMGYB",
  "key6": "566Kmxhu24t1pjHgz8qi57WqWRscqXEWRNBixJeVEvuTHWbGb7eJi8HisyzzHAuRn4wCDZDAU6PyqqyPtc6Hbrac",
  "key7": "91pFqpzqkXV4RxT1JhW7FW6hbmeSx9bkgH95fLJjUsmQodmXJBMZDuJniqmbPkBQHvmgAdwDy9uQ8ZXQA6gbVoS",
  "key8": "4Km6AFAKu8KmHMvWaQ2kR5dKr3WHqg8kZpLrdCtYwbwYZQNG4mPUyk2tFcoEi2Ki27B2TyKTJuA38sTqALQ1aisM",
  "key9": "476yV4ftxuNVyhmZh8867AekN7KdQ5VeNQHyPk91k5XJj35D8jXzyyiLiVYSoKbczqSPh2ks4swhLXXiVZwmGj4A",
  "key10": "4cigKtYPZ9vd2ucifoPWKnLbhU3uZFmHYc4K2YJSfxBV32uZdnZzAxEcFQuJZUWhT8kMC2bafBEmJkh5BHRrgjSH",
  "key11": "2yCKLfbrQN8umYuYh1occuKDTpRkQ9AHQbPUrYjS9wCifCgrK3PpuQcgv8ZMSJ9JHWWovs245Q5aNWMe2rccPSh5",
  "key12": "KtgytveRjxiKt26ZRyiAnartWfWHWfTnXBZQgRY4BuUJA1Wu5KhnPPofTGPisKxVCwc7LgJ8twaGkM7qiBdqWJf",
  "key13": "uPEEQRCaWYmMiGsy4KXAdsaDhkEcvB4bBtbF1qQFgqDRZcS8m4s1X2nesWpUgoCJEWibSXLbPnziXSkwwZW9w8M",
  "key14": "2TrCkpPP4B5XJgNqQA3MPz8kcUbxeMjD61qE3JZmrVG1Wbh95SKV9QjptwBzXzg8k4F2K6f2oudGEMzTs7MK2Fmf",
  "key15": "3gFjXXsDFPeok5paUMj8CKFCN7UXHnWncP11M8CvNNmZ7DVoK6hHpaVSAzTfsHd4MW5SpgwDu2PvheccLxqs9Sqh",
  "key16": "4bQTJ9Lree2PCkvSxkBCqBKdP353nbgUetZV9t4LoMJURPr1KrqcneeaFjdMdfx8bEp6ephfBkTh4cQVtbUUAb8s",
  "key17": "3tR7uoAoPDeDG8FrXAiTcAanBbJwwXeHakfxcL3tpnqoJGGtEyhRj4zWXtTYnkBiA3kj8D6RhtksdacpjapYTJw2",
  "key18": "5bBziiyF4xRK7b5k56vQxPLa1pBmM4gLq54Cx8pmmUp6ZK6JJ3P8FrC8oT6cvgFzEdian5FiZZoByuhqttRBK5aD",
  "key19": "5dmAE9nQ5ThFSXPR7bihtmw1YujnM1GKkEWTxjGvx6e1AN7RF2KmcuvqnhVXY1D1W16merSMvjSxabLEg5e4MEaH",
  "key20": "3FFJT1wH4ZDufnH6YgTgxZmCU2LfvAHA6W7VUzyh6GUpdoj7RB17RejEhenuTDrgJNEtMRvRjqTgLsKBMwTMW97A",
  "key21": "461nv8VNMo6wwXb7ePgBX6c5SNuFkLtxcm11yiBE6ynZHr559LYuSVoQDi6UrxDVi9YJtYMGJDk3WqNi8WCyctvi",
  "key22": "65V6MGfkPZYLH6i4CtJ7egQoM1zettRLcY4JFSEcPLzYRQHokLCQjJyNPoELpKDNrT3wZs4b7KTE4GYR1Dc65Mmc",
  "key23": "3igQD4V5yh1F3HZJebnpSL6QhmqEP2vACacvarokRAy6WW4h6M2ar4Q2RWaC4bwh3mKTGzUxw4GBdcx5ozFrYY2N",
  "key24": "4mVvg1E3CghLC79YFBEazf7T7FfV4ZyDgJcrVcV29mJMwJizyz8EJT45zKYz7t891ZbuJcV6fgPyPicSzHbjsmLm",
  "key25": "2PgG1WGPD3xL3fkCBCcsHs14YAKhxMNVDTi9cXGf9pFhNKUZhBZRhvfHsjqBoLuyyxfkMDZWzNGhqWb6uZRvyf2A",
  "key26": "4bch1g6vyUQ6uFbiEx5JUH4nx3WSwp8nsvLLFFSXGWWBespM4EkbmhQecXv4cEbKXcWGqfpKb7geQXwactEjUFcD",
  "key27": "5z2qdqhXZerG4fXGTGM9yk8d6zp1hRUdBQ6RthcHpxTwKvsc2ZKgGtdd3jXLPJMYxeviQVaHHs8x3qR1neywbdsf",
  "key28": "eZiPYTM9RQDi25HG4EW36HP6ban7AqyrAYYecfG8rZorVRFVt4GRgCRMjiTQagWaHvMCmMb4vMJodiH3YBPLvBN",
  "key29": "5HWaHRozPjX13LLwKfe49U5NAspro1gpQvF3QqYDthVR8jhFKNtgE6f9EdhQ86kjJNd8GsZPWkaNPvQscunn4mVN",
  "key30": "663gz41qMRYzCB6M1FpZgRAMQEAzUrz7LMewCJLrxs62QQA4oU4fh4XNZfKNLM3xbicaRhqHSKsiFh2ThSyQLo6J",
  "key31": "5t87Wu6QUVUwdgGCt5VDycqrsoSRj2TG2wRvFgfkq5KRnesVyDq58zXnQo8ZybytZ2E2pwhHgV3ZJip8fpz2kU6x",
  "key32": "5a5YkwuSGEFLrjEk6hYv1iX8DewSGfmypvEuAo2e2nYyHuSvDYRJJEfskg71KryTbnauH74sPtFY1UQisoDoGdkJ",
  "key33": "2nmQjhgEEyvREQBREW6JDe2yG5M5GQmVn8F6A4yuB7uT3Ygc8rEMX2aMh8HHPKPpNAHGv1CVRXjRNRmqrA548yfi",
  "key34": "4beBMvHQ8eSEXTVLc28rAjkSB4swHNWhUZ9Y72qMabZMj3JosAeFb6hJE3cFhG1GPWiRaF5kjfuwwbpiEtakmrdv",
  "key35": "3F8JhBChp4e8jRYkQCeaniqQKW6NKexTSfdvpj5iwokRL6s9chpqoFt5dYBBrBTDDVVGJ8W3SYDmoXHojhNqAS8H",
  "key36": "3559wuU7HEmaHnPEjwkACKT35kpKcZ1kyJaVPbpiucLKRWYnPmoNRQKJNHqh2AdRRXwmW3pDwtUKAa52aUX4Td8P",
  "key37": "rgfXewEEWjzbpLENPJar48GFi2W4JzAmgHjDa1Xmd8qk1CnGGWsyd7PudYSy7bH7WwQCPoAH8N84vo3b1GFq1sc"
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
