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
    "4RJezThCFznZb5fPPsDxPVZsmcjhvBJdVwr4mLYRStmFNSnArPrVkDVo8gUcxAMu2pr25ucg9hq8qTCYUUMeATrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AmwtgTnd8F9BHuD6ByGGn4tvLFRRJGS66DpuBywoLLL9dZbwAfVe3wz1FpTvkgQ83sPNQDbwXkD8CAYq1oSam2Z",
  "key1": "LXAEbdL8cduo53etiwkioCeHTDMXFBntUF9ZUM7MhKyRVB6VK1gKD3ivYxfECQZg1XJxTNsF9oE1JsaXYxRXpRH",
  "key2": "4rryRDDqr1nCVscmP8NEjax7vBDjvfiArhC6vLYh7B5bSRikUJvF4wZixt8RfZ8HkKpnJeYBduSkyYsTxAcwjk8j",
  "key3": "9GEZb7KcGCcq8VTVbH5ctqaf3m6U8BqnTKgCrpnik6RTG1KjoCQRjr31dv1egeC7dHEJj2CgdfaK1uEXQy2bXQj",
  "key4": "qY2Qo5XXfEgj3NZEkqH35pXNDX1m7fyYbHF2FoEegGCF5NNmQWbe2H5WnZC2Hfn42yFRioV7igfcmPqrdASqtBc",
  "key5": "2A7j39BJ9qcCX86Y9wNG1ao9gvZWjw66nfNiarEoy13EqndnVZdFLvgW9CLswKc27Cvn3VGLwyAtXVjX8kJr599o",
  "key6": "3GpLX8Re7sPee8aHdZFVPNRgAZFWb2CHqDrx8GePkV5MhPQfVsazZZWbqbx5Yk7L4e2fo9WecBSznYE86Xy8QWJK",
  "key7": "26zRXjdpafc7tDRxNCZGHEazJoruQSoCB4djebqLjz4HCUJQbfUYwbRNzP8PRzfSR6w6hoDigg6PQf6W3DzETwGE",
  "key8": "5bNUSrsczPyKzhDSENfzvyQDmAwwhsyTxkHCty4vdqd4ce3NRRvzAxaL181zFJZ84q5hb7fDeWY1ie28ZsJbmfJh",
  "key9": "2MkuSWd7D7oyXeJqj39xuKEjao5cy1JzSqUnswtQTY7Y9RXa2w488qp9KM8WkXa8SY9bp2GrGZVennaaWgKwk4pn",
  "key10": "KkhtdChAwKXPdfD9VPfBr7bkLWH3dC5Nbv7GyZpS6RuLLLr1XuwQGHiyaEh1o9azWfCY5qEXzquYY8FLGQFtJCs",
  "key11": "4e9t2FLhLksfuNeF7aLRQBah36iTKKsKSpfsgFQFL1kNv6nPRfh1Tm1oEuXsKB3J5nm8tS9AQgZ8st9RYyX4TpwS",
  "key12": "5JoBKE5N2cpwz4srsMvqevGMeV3BWDdVFZswZbmrrJm2RrnAJzYyqaRauGfzEjvs9CC8ax23UCA3RMFYTUU8GsoT",
  "key13": "5jAi6TvWwKRzAA29fabe9dwCzCnPriaM3Tv2u14GAHkpeLC9CXfjnUc9rEMrkf8DAWySnbovBUXVpSZAh3mWtQzS",
  "key14": "4pVnqrLXe1VNokYbZCjV2r1GTn918HXEfmTtqyHqn2mVWh2YhsqMgS3SoeqtXoJKgq9RKcRXtcBCMYsn89dXJj1W",
  "key15": "F7bfHkzLKXBZchmHzGeDcLPRFEfkz8Jy2bxQyGmjZPXNUkL26ZGB3iHRjinnEaEsuu8ahmrFUiD1gTpdyAh4Sn4",
  "key16": "3NQcHFHb13n6ZkLxrFWLrU8SnfKzPYJiQk1eQiRPLKHWACzFyz3gb8Df6doDm2hhkLkDtVS5BaHjxaCBkBAUco2d",
  "key17": "5FKqnX4GKny5MX5XhkvA24pH3jMgTWm5ByFfJQ2EHudrrSRs8UBmhKnQH16L3CtxbtqQMsqfELrmCnUhj5D1f1UM",
  "key18": "4AArioSH6AHB5f5NsHKwgg3Jed6PgNXBHCA9s9nCxHhtWnHU9ZxP5mybfU8wWgiJn6RgBQFemRdApfEdgS1j99Yt",
  "key19": "5somEqDRbZGhBVxqUiS8WD7nfn1eBXfsRGyktk15npd2Krwc9T7PL2DsZk6Na32EekVfFKaf4QGuKeoB7tzd2anc",
  "key20": "1x35jMfsvZLqcsydJQWMKEgLYQsc3of5YKW7FB8rU8i1NLf2HjHYbxqVk9ukGeNDNsSmpoMYWpySr9gfFZRd89h",
  "key21": "5r4ro759JMovom4zm3ggYnjUUa51WdoT7aLEz1C9fT7oWTY8nQjum7mFcVGLHNuPuRbuG5LseC2mRtLACwvbvdQg",
  "key22": "63i7ezjMStf3WFPrz3w1goxr92SxDmkLFnQp3GfAo1WKrA9fANNzPQRmprq2ZUybSyoy3vH2pfCG4zqUGBiNroLo",
  "key23": "2e8SySDWdzNrwEukMswkeZy5WSJxXzJfxW84kNvZJz7qpCNPv3rpxYvJ2gDN9XtCt2zCwGbCfnV5o8tVxTgzf3Dr",
  "key24": "2dz9s2hxM4az9AhdAvm9268UmM8gCARh2VqPa1vXwiZcduYNoZQkvvsmtRQwyhsqKygJ5uJiPy8b4eVrbpdU6L6D",
  "key25": "3z9yjUN37JsAbEQFFKBaHkuXhPoWpvgz8gPMikvZ2AELrQAdNo9YXP1ykH4nN9c7EbJ3xYzxn7fMofSPkFR4691g",
  "key26": "4LPQ9weHD2jQ7zYVrUo1B2p2wxxm9s5bmgQYW5bHTZ76sCGyZzdoszUQCTnvBvYKwqR9RZMH66d1e9bq3zj5PiHq",
  "key27": "53P8yAFt5nihnyxXtcCdFKHm8jmgdzD5wgdGsLK2SLG5dTZvkMQ8zf7YvGFNYwJuwHLewYJy1Q42pkmNNJyBfUTE",
  "key28": "5vWMsMS8JT5kFVe8WfNZUZ4ie5GMMPDQMRgtH5TYfBFJ2C966sqhUSDjz2sPHWsjFUgqe9oPSPEUpobYRSEJoTC8",
  "key29": "4Ds856cexd8S1zXbDGQsQbm7hfeqDxvSAFBkFvRL9X9RUAVvCZH7uJFL8QU3edZVFdijskHQWLixYUyCAcrw5cbw",
  "key30": "4WchyTaahSvLBp6RCDUHoBa9QJCb6swzijPn5Tu7qzpsm8BLgyWAs1KiZ84xArQVq9SvjqoNK1y3yfkC7EEbTZfu",
  "key31": "4Qdg6fSnbsk2vmhqqxKB9WYHPYkycTzUH5FtERua2jyFdbckbaMWLgJGtEC6ThdJnkoCa86T88zyiwQQTYaZrJV4",
  "key32": "62CMiqMxpRcpJob5x8nT2AeFKrAQoGX297YXencNnPFXciWP5g1ahMR5WPrLDH9eed6h5tiwMvBUN4zNhdkquKZc",
  "key33": "5G3rMZMuuAmofN2kpyPdFGpwYrWbouj8mVWFvwga1egodRu2KJVyR6cXAr5DwtXo9U4beRezJCdPXmUzG9UZWD1b",
  "key34": "zVLDA2q5hUcBMCNP4457ACj7WyooEUWgyrP7peWP8F8w8y6iWj5wBkZ9skb6UbgDz9iwiRVKTCR92cP3WYWRNBy",
  "key35": "2GKGXwnrjfgrf1TJx6XuaRdG6DxAAGEZRKStP3AJnzVg5ygDvc494P9Vqr9y4svNMDMcgbC1D1S4ZkPsUpbPrAms",
  "key36": "2r65L6CaWMhemqJQLEKv9ohdPQwArxx36aG9gR4QPUt1D8hAr1jvWgNa1wE31jutUtwKP9ToXPTVRBRLEDLW36LC",
  "key37": "4d6HNrw9Lvardsr6STGYiNqvXG3MffaDuCaecQD6ZE2hPnyHmYEErsg7owuLGftZTc6vMZh185zRjouVfsRZ2FhT",
  "key38": "7cyuARcJ7ZTQA2AkaqnWVR2iUg2BKvChPbikfHsnMv6YBEpNMJJrppSezK7aC955LGSBK41pdA8i8UuSLZRCNKj",
  "key39": "64dg6LF7Ekw6kwzTvUWtjWrifpxQQzoirAZzLr88wiokWMPekPDwZkxXhLjZwheAwoQw65Q6UBT7ZJypcUx5mpbU",
  "key40": "3yej2k4CFQbSJKYPTZNsYLTLxs844bnNuZuSEMDw1UWMNgvDMafWHFfXLBvEAuNapMJuq3FxYhjCxqT1wGHt2fFF",
  "key41": "3i2oUKoxnBTxw8vy1qwBcuVMEtc4ACEVy3DC5BREQA8wWPzYfWHN1sCGaw9Hsgqc2chKs7bYisr1khp4aVhaegZY",
  "key42": "2QD4fdpFX9ZqV874UQo9g2sjmt9tjFZgSvMh9Kdsse1qxx5R5e6ebC9hmiRkYyr83tyasAhATJRtZLVz5m1t6p2Q"
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
