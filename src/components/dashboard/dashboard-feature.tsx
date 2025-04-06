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
    "2J7qLLbWFGa1XugXi2hiHG7xjfBRjZxR6AUCt8bKtdozf3toNXFMhNx91TuPXvhBmi3nK9VKuZY5qLtaM4yei96G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1c2miogJ2SicC21RQ871sdxTYBJkFCR7gMXMSkiEDP6dtA3Xfnu8duMD61J1Uen5QLddVLto3XrY6iPBVjxbpDV",
  "key1": "646DjVmqWFjBfhCeHZee9wUvRGnbgaxVYfHr5Uq59N1UENKqHukkFq5Kg7qyFVTtF1ximE5sLKo4EfvQDTu6qx9L",
  "key2": "2cY41Wja8ttm2XKJKRaTFaJ9p4QjTDYFj77XSPioPRGyTtMkAiZiWe4RWVVUqTBmVrAjw85dKDdqcKuseCYT51Ps",
  "key3": "5HoEECk9Xktmfj1a5oC9ftaXTesMDne2HxDHZReePSNL9K56ydduWVgAmJNvtjRxLnFvr7MYyuqm2N9nja22PfuQ",
  "key4": "4QqfMtQkCpwrp61SUEb4gC74E1QtQFBCSFUg3MrGMgjNwnR1nbTRReLRjA6oo3FkVTvVmMksGdx22s9eemQqjrnR",
  "key5": "24kD2JRDhvQawLYk5YqpHk5rUrL58exuGWuZnv5RtjTGRKTs7phdZj2Ng6icrCr8MkreyYuLMFx8RdoAUfSMnD2N",
  "key6": "5WchY4ueCodCbqEEZFaypeRadQZvX6JiQkFc2qvTStB7AQVu8f2sm6YiNxaskUeGnnx6sZkUAr7n1cht1sUUtn3Z",
  "key7": "2uAhPvhF1jMFyfSyLyHSaHsgFsRbVTuA3ZwyXYaQTjNZ1uGqrtzivBJztfSiYUi1TtKWA4JCVtauRx6YaZRerNip",
  "key8": "2MVjwFVcFXT2i9yD3rJqBF6TmQ1rRk39v7kkTzTNY1Lr27zt1evjnmKmFybEuc2ALRVS2AHTKuwvvAThFFyJy7Ne",
  "key9": "wABmX95uy6A63Zhy6KrNS2sKcbqcphafpN8d8Y9zdxHFRFSbWg8YcnRCTZGpj9V651dBMzdVRAYuCZvdoJHDyVX",
  "key10": "3BXLVXZXFG8om56dzBL6jHnS3TZ9ewWkdreFfHZ6duppBdFUiwkg8Hg6thWXnCdbAyRMHQk9FGbHLi5iNuDq5Brr",
  "key11": "2V4y8gYryEWM4Ud3ShD1y5qd3pX7nmrYD11eE7oRScthzXu8ZkSbAPUCiDyL17siGHKv6eo1nMcdUiHFU3YQWMfr",
  "key12": "5MGtxiEvamyetV2QQmmi2uBaM77HXeasHCDprwEQGfWC2iCWwfea7qPnNv4Q1ao8jvixLYMdTocFmtvz6kjfbXdZ",
  "key13": "3pcsXuTdf8LF27YgiXe8oyQ85JqKYiDgJnWnjqEvTsuDdmEtmMDq3EbszSdnk8ncoBs8xpkv4kxw6eBEyVCkpxxv",
  "key14": "4LgJKaM7siNTiCiNGRse76o6aNMjuyXwPDbF6WN21hSQHTtXvTBSiobwQppWZp46CH61xeVhmoLyBLAtSrWPj3G3",
  "key15": "tG7LRAk5BGaUu4b5n1yQ6ZzT6LGNUC9QE7m1UVRtjqxPhecbXWQkDQpFSHNernLzpeiRFt25RExpKoBgGCLzp8r",
  "key16": "2SN3FNdXAs6u1gNQRjEvxioeRC94A2cshhCwPhD8kh71zLj4P5mh6Yihrnni7CeFS5ayFim893U1HGQEYmrZhhW8",
  "key17": "7whnFHNHVgBM6pVW7pnuSeb8gPjWs4dTdpeH5mgh4Vst72qyat58y4XFsek1WftKkBr1NCMVxQtmPE99G1cW7wZ",
  "key18": "62Q2i81Xca1oRKiC4kmkjKw1gB4sTqxBqYzBiyB5ZrhPJJrHAXY4Jgfrq42kQmR4o3zpwPVfrCvGd8YAPsqqaYmx",
  "key19": "4i6zFhH5WU2nMBu661X8XwjjeQMVGcYPfP1mncvGPsYzMUDgRAo5DtoFoARa2UtJxQu9DSkNZkZ54WeprPCo3ZEm",
  "key20": "5UcUQCrrPRF1VaLgAh8excqg6CfVNBx9hD7a18RgBYS2X93rfhQxS7HnPj7jhC8AoGcpR8zC3QWiFyn18HyDRMD2",
  "key21": "nkxHtdkT9zxnJJDfe2mUj52a5YSKnCibbyUWSrbwY4xNStsZ6FhoRxbCUEHasChtLHZGGkxALrgGpS9yA8u1g5G",
  "key22": "dcBigmEDWdDxn1QA7XyLwW8Tdo8bPvKEFywAXaEx3qAjfNmASe2emSxy4xAhFCYPBqDjZKCTR3zMpBCBPGLc5Tr",
  "key23": "48HTbdboqaTqmeodLiaijUWmFckn5vnrPRH7vmwff4SVhFrLdqoQzeJGeNjUKWpjiF4aBpRhaxA2MgyZNx8fKGZX",
  "key24": "5Ym66RVbWxDaKrmZvnjwcu8rktMq6f8rLHssTX2SKTkKXs1E7tTdxByJRkoWnZPnrcMy4hw2ZGTQoPdnsTV1fZft",
  "key25": "5QJ7Mofp5YFEH4gQxCTPfF4T4rsSX2G7tGJM3JKnp48v4wsKTvPGDy1iqZiw8WNYqGqWJB6sML4UWJV2ddy6mhtM",
  "key26": "3ZXa7GezNPTfxoiQdJgCHTZtCZGEbxdquh9M6bDe4Zncpp9dyrmNjgH37kN1wJehfSAZ3mJ6T7Xow8pfFxEVz3Cu",
  "key27": "3VLp1pdaAPsUyjEhDVV11fTxrM69ff5MsKoNnQvwyz9nRQM6AFasZd3Yb1gjpqZ7No8yugg8QpAeg3X8u8bykr8X",
  "key28": "5QzmHU3Xtt3T7hrZsk7fPJjkZHr1nn2a2C4HBZhE2YnZCYNEB6QZyNtXzKwZVztReJ3spfz5tEFvqm4r7imomsFB",
  "key29": "3RGjuMkUtuei9S4BXFVR2VAoG5G2WmAdUzfWwhzM9AV4SBdzdXQ19CmYctumQArT8Sr2A9iNCySMGJ1Pakm6Rufd",
  "key30": "5M1X67kn67QLqrSsxp8HxJBcwcvZNXgNc7gWegxwKZQirpistcuMRgrV6ntCiLn86KgDp1cnVmR88am8CdXssXqp",
  "key31": "S7gX7L3NU6c1EsHABLT57y8JgqyhN9F4crb4yKGLJyu9EYAAaxKCVQJocTo6P4CmQ9pGDWvF1TBMNFUH2xvU8eg",
  "key32": "5c2h1qqzWbZRmaZiFJgunWqQhgXg1GKNDTFCDg2EomhBtyFFm7UGw8LBXoQ5XgHyiTvBKVV72vHNgR6AggBx6oP6",
  "key33": "2SN8QdKhjfNVxsfE3hzZZA2r4mnaquBtNqzp3MiUMSpcwMSA4DFSdCcTPEqm8JLPmPCSq1JPuBDHS6N4fB6qEHmU",
  "key34": "3NXa6s8BcUcUNZbR5s2wsDRacycRdZ9rRHW5NGrZwQmT4HFTGnjV2vToafoQNzqQvwdkK3nUre8wJzn1qc89aEcL"
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
