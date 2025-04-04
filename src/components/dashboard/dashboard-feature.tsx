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
    "rAUoFjz64ViBNyvmAXWTC3VM8mNkNhUTjEuqhATme4nk33FdCGzbyKMVQ4tMBxy9U3VBuKPGShmwLmUZvyfAwg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gk2zZRXJqDSGwnHFMaMxHLFHbS1TW4DQoRFeNYwPnCXA3mfeeLDKS1TyovPbgfZUYzABaZHLYXXFtHDYmXmY2X6",
  "key1": "4WysowJ1KNHqAgcKnQtDk6rqLZp4npXorn8y7W427erYUR7Z9zipACGMqG28G3oRv5NuYD3df8R9btETRtPz886M",
  "key2": "2Jb2YXKry2uyS3n3BErUJQAeCFCpv3md5wH5z3Lw75n8yL2MzzTdmtHv6nEyb9EgJH8Vj9Tkdp7JX1oTav8gjEyQ",
  "key3": "2sdp98AXvbnFUJtUaezMmZPXqGebHmkoJA5uxHSY77yxkPuaD7AwLHGKUZSwYTVyZRRtgffbzNeHpgV1pss1qmEh",
  "key4": "Dc8WpYMC6tLyHsAiV4ovSFq631Twc2N4jMg7e3uhH9n41zgEqDeQ6vatzj5Cyv3MnK1Ry2QeiZA7HzQYLoYG4iS",
  "key5": "4unn96DfEBecY6iqWnEMQSp155s4fmCx6DB4X6RJsgpacQHb4SNMY5CQMTJ3ne8Vof93YmLSZdx6mi6L4LLXTsmk",
  "key6": "DHXsuiMMZJR9314UZLLTv9695V4nS83k6G9EVUPV7UQRZBsAiZ6mEhmCy3L7SU3JwSzU5NKuxVXxofzDjAjZPTa",
  "key7": "5WppobnLRJzCE5jHVABnn4yMoqXPxyZhZQAniD933vxgb1CitPYdTn384ywdn6LsMi6n4kQjLahg47wyGJYAXFcL",
  "key8": "2Sk7zoBSDEPk2N73xPDUbGq5Pr5B47XgGAPQVews7vJtWpeaPvYY55M9xQ7yZZKhjTpS3uPJsXMTSaxmZs9QK8WU",
  "key9": "R85fn9mWgCr4ruBh988Au1KvBn7GzaUrLbb3NEk5y7znFapG1F9F1yfjkCU4EvM4QHLwwdykfHv3FQLTdLedMqK",
  "key10": "3J1CsspXL5UVFDeeQzyt7ukEhWZcYV9TMnEvQBL4sf1arLCcMSEff2gNVjrK1x58kSacJdhGUHAjYgrtHaaEYbUg",
  "key11": "5RPEFoJzTg4hudwSVeaewb33PwJopGnvtZR9cUinjerk5aw8VSYrniFzR8gsxEBikVV7Du4pMX5meEYXRS37Rorf",
  "key12": "tZJS7J4a3r1mSPqyXMjTVBgQ8TSFUbdZJRUmZYaxjNB4RfzAZbsXfKjyz1h8vwMKpsUgD8Vdx5DyueTPyNA1bgd",
  "key13": "4MKCewxXdxZSsffwWLrWmqyHfpATU3auvwBqouEVaCURPBjoomHDQYDNkeyVAf8S41RrM3M3xDAdGAr5d6oZ9mXN",
  "key14": "2Vr3L8GUGeGXQ4fEeiybmTeiPzCyim4K72EnbmqmqkYrwxtpmxJbNbJ5gT7F4KvNDxmAf31XQNEJLtmj5tNCSWqu",
  "key15": "3fYUMZpEdA344QszYjDs2tzGtmeyBsqFi8R7cksJxXYoowN21EzjkSsJ7Nr2yRnYigMDfozMyPckSuJFEExo6Stb",
  "key16": "4AciMRGJN3JoqWYbQVHet5xVbUjoAFmFyxsi8gHBrEUNUzmucYHja7dx6jsQWRLAoDuvrYzFkjPJMvJ8hy1PkaYm",
  "key17": "2h6zQam5XMdavruGUxTTpqdKZHT6EZd37JHxNSTqNK4tDhy2rwkc314z2ksoEbu7AVJPmCGWJALiQ25Yy8NeQGwE",
  "key18": "iakSv5ykoY5ijnRGMGSpGJiM5TPXhkU1W1279EyWB1TdYQyYHN7tojDkQfe62EMBZG2D9YaYsrnZDJZ4m1NEfBB",
  "key19": "vmU9ks8TYt2sxAJvkrgTxEtnR14vifcf7WZagG78VngwocQVwxVieoNW6Uo4C3ephjbnbdAPVgUPBD7LgL8yBwg",
  "key20": "5w9GCXzxGgPnp2tQkMEJGHfpqFxNNFxEVAUmYJRMi1jbafRQD8oZWxurEXJsCPGEAh2pNERYNYprZFcuYggpapgm",
  "key21": "3LbTKnhTC13KMsBWUzLfMAmnPbZjArErF4RxC6QTDEHSNL5msMU4nSrgLsMjX3925g9mie7wLm1f33EFauzttA2Y",
  "key22": "ksNa4ftKaLKTjed1v16Mih9NCqMgPpdZjhXV647bHcVqS21spGnmQxuAe1DqaLxNMXwgvto5nkTd9CgFLKh9amC",
  "key23": "ytNA9o2qyaXPSppVL7j4Bgdn6t5YzJEfAcG8sZdFY8SNRtJyrZpnn5kvhhPn4MyvFsMBbNsqxjxgrWRJUtZqzWK",
  "key24": "4g4LcxnWSn2VXRvZnKGPQ6zoxFuBZpPpGeQLFKNSZBZP8Xg1rF9VUbVswFSYpSVn7FdA8UsrYYs5G87CM4xhXiV5",
  "key25": "a9QeDaffmhiEBAjPge3kazE8aRppugoKYgkyzynUwiUSdr2QwBE2Pdp5YhZQsCA1Pf7TARfgF4cttsfBLXrNfex",
  "key26": "3stq93s1qFpZDTvjHdfziaowWnSJ7yf4ADxXxejkwAQ7xRiUnocN8WN7iwgx2EMxPFat1VY8iZ4AQ2VtahofHE9T",
  "key27": "451jDyYyUZGZKMDvTe6LdMLegF87QaBGaQ4uvvsoR7aEfxQmrhSiXJah2jSyy4y5GcSAQBewHuV6QiPuxzYLYHLU",
  "key28": "UiYkKJHMtdrWHftQjvvMMjB5bWCpMTquELF1634T5737or374NNkWCUpyU2dSmxJSL2A8uVi1ViGUiedm6XxB8j",
  "key29": "tbUZKUvPhReWqM3GZdKJPXVJoFTrjYRGKypbGwp1sy68ovxRrUvxBw8kTWeChjGhxWKcSP6jNHXuiycYTmSPeBj",
  "key30": "2jNGWjZgCw4eAU8boeuhJdCcGSEu6p5YEmUwmFpk5GKuccnay6FdF1C8rstR6EPcBLPTNhyUG84jULPxrwiex2fp",
  "key31": "5DFa9Z9ahMd1rndkQvyiBA3rpJeKZzwgSmtdZBgR2TQi5GH7Z4DD51C2MU2vWtn6BZVCiyjb1HqX2M3bu6RgSb6U",
  "key32": "5RNq4guKaSoqxWDk4rxxFYB1vRohDuNuTN8ZqpgjFZKc9sdYzunZQ1UbEPn9z7CCj5CKhRm9TzVryvY6wtvMuXYb",
  "key33": "3jn7J8CTYNgKo97GdYRbXAd9zjn93Q5RGFScRTZFA25Mts9zPZvRskdcwzMSUPrroZCmEwPtEcguy5iEWh1KiKGW",
  "key34": "5sFMZk9VrewcBH9v1sYwT71atJ4DutfDYYZVVdMt6Y2AHyQQ4NWUhV8rN6HXL2Ry31cVuMtVdsZMNDGopRyXZApg",
  "key35": "4c6hpXYKfCNhKsLbekV2Q2gREbnpUsfcwhdjAePpatAz1BQ4d2cdb3R1GvR3xqdmcFwuPuUpKB3mUbndUSi7vwxV",
  "key36": "39K9XqqDpLgNr1DDs2Piwud6kDEa1RhP2GejBjxiMtpfydZSzoDpujqM7xS35pgVQBReES32Mmf44XSnBv6Ah7SR",
  "key37": "3LTzLPJedJdUNrvQAw9j8SRe4SNqwe2hN2oBde4zNquvmwfng7fZ6sNSqLiZxULdmU2PciUwA7cGz4dZfTY2Vqi1",
  "key38": "3uiy3KV8wfyHLRtof4juwpNPXmDAQBQQk1RLzv3SVwRNApvgCrp8RhFrKM9NfEKLu7Qc9MFGUhdYmbF9L6FCfPpz",
  "key39": "5YwszC3RdGKoEgTzCJU1cixTuAdu9XFgJpMyfcYAiKVf8vaTFDzKo94RabTeNDuLFYNczXUUi3brbkD7SZfdvRPV"
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
