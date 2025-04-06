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
    "uzBM3Lij8pCmGpBTnYMZQD3P5ThKFB5Q1RFXj6mLEDFMUfCzF5eSwRepb6iYJnVt51HpAoctayXPjb2FztwLaT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UBLX2dh8tjKwtdoFnHVLQFwfARKnRN7twKgbzQ85gyWc2aP9St9R1S1pMyApaWkpyUX5p5f9ALGBJbwFgcezHvk",
  "key1": "3wVciRrca9J2ohgWwxp1ho7MrJRVBEVFh8L5mnyiVErHHWdGEbo1BFLtg68bciBTTBwHaTKsnnhJbnacP8bEkxSZ",
  "key2": "3UPzG4q6iZMXdbTXHQaAaXtXodLvTYnY2UU4BBBfSoGU84TeGhGayycKsVfoPq52T8vprauJWwGWLZAjHLjWHS3S",
  "key3": "41eHGgQRh235JESqdcoQMkxnAVc828e5KyNdqQUGY9yME1rvjnoRfWx58p8FpPSaH99qXpPE7o3AYvMbj8v6MiNw",
  "key4": "4FHApetFWtA7UVkHKtg1Nxk45fWAmGVrix7mesEPiJdn5cGzKSBiL3FCeyzhhcZJbgX9WirVSUyJazDr6d6hZqdY",
  "key5": "4FCD1fH8pouj6c7FBw2rwaJynZLcYWs3o7b9mRDHNg74jTAdJz439WupEUfN13SQdLExqxzF74tABjMsymW6yqUp",
  "key6": "4CiSZ9fZzqwNUT8Yiv8hcCJsMD36rXG1vDmB1Dif4JsWagEKzkapAwmajDAGguiVEgXx69MQFhyFkSZY5WxTv5tv",
  "key7": "3G5TGxzhgvP92J17WGTJGAcKDUTBZawRVyQXp7LNBPa41SezJLVAetyRBmAdMFQVKj4EwZvPQymbdEUB6YguYhbd",
  "key8": "qvSvG6gswkhPp2ZZkHL4QGSMtbGMnPWarK7X9S3dhcgZowjnAFzqBSgwt3Q5ji2tNvU1EZoW4sz4EZq4LHq67BE",
  "key9": "53EbmnnjyU8b1zGsAkd2Hvy7nB7JNzSuL6dYVy4eD51vdfRPeShVZWk5jNZiCzBAvbTwumjwUWekqvscVmnDnrUr",
  "key10": "5xN4NYvZnsnAfSoGxKQDXQf1n2R7yyjQGZAqUxWJShKy1EEN9waief28BpJdjqzExVqbh1zCEafFhaX19nBE7i7p",
  "key11": "KjUKWbRGPPCguuDy5pvXdaWAnTkja36d1ZyCosjd6FtDoJYGJfUmiLAguqpHorYofyRQP8s91tqDKcxiBMJqvvz",
  "key12": "DSr2M66Q4tbGyDBC6Q4K5BtrSADiVNHKEn7GQkj6mywkESx3o78NtqrjSVYdsmQpM4AsRLPSpVTgmpE3SgEUzap",
  "key13": "2G757dNg8DvvcoptfsF4CQXAWVjDdyaTtNKUCfy9TcjV2PaKkAaY5EWPNJ1i3uNAq7W7RnCTu5Uy1b2HxCU9pS7Z",
  "key14": "z3iGZg4CN5BtxNw6HHR87kKb9KZJ1LtCm8gQVmJendz3KT9omy1GPosQPQFJjyuBLka2gQSAFty6pDReefrU5qo",
  "key15": "3LxPvZmLQwi2YU2LqFwHfhQmejFAE4tuH4vgCgphbP5PNnjJ4ANhnf3BJ7mFkCGHZhXUNQaAwPsc8jXMhvXumcn4",
  "key16": "ub66VoLzovCfoQeqZGL9jktEzeVjLC1tYPR3qw63g4Z8Yynr6NaWa97Mc498bjhGkZ3iUKKKKEUUJuq6Tq9Tfsg",
  "key17": "51USaT4tvWZ8iRzG8oLfKvRRv6XhusgciPBMZ3mei3eqd8vD8PSTf7Jys2Q4RFnRiAH2S5cHcCF279APHZiQXQEm",
  "key18": "3CBgpVuTrfTzTx4R6hkMfqE4KoaRqfH1WvnM1TFS2MeVNCuNGLyeGaTsX6SjhrcFvuZv3Fhx88yFKAmqcSQ9NVNd",
  "key19": "mreeKkgexGBRZhs43WqqXe946fhTwwVhKVvEsqPrH8fwFcfFp1A7gLGPRjDJNMyzguzK8ysArfHpraH7zP9LNHK",
  "key20": "3FwKZ7RWEdS1gw9cNA972rXeq7MTWehV3LsWUQBRtv7RRQzRhBteyjibfd847FDhtpKxrcjBFE3RMitiTeiEgEJU",
  "key21": "3hnEcHLE73m5n9MFpmyYMh2ZgM7Frd5P5Xo815hn37fPjJxycuAjgi5YiVcPY1fZiKH7ncvHqENkXFKtUUPaa7nU",
  "key22": "4RURZpcubb8q9Q2mgpcmCxsh3sANzUbjmSbq9ioFKL1WtZHuiytybRpFLMVFNSjwSEF29KsdE9KBJZ2uLhQoADJy",
  "key23": "7ZxR3Dg8mkGYJbBHLhsb4wvDnsfF5YxLx8puKgCk16WGTZG39C6QbuSPAgjzwBMPfaNk3MLv8VoRVWLHe4QvVyb",
  "key24": "5yz5FAQX7ooyJJfM6jR4XLNafQwtNTFhS1TQDHcsxd6yhqSL12dqTQBdeDe3dDcnbHqF94mxTpTUT61JMs9saWTT",
  "key25": "5x88PJdgSACBmYQxu33VtAtwA7HXdYGoqbRcDhq6BSQhKGuKD7PFrCgrxdNsxUfF3XZQK2TNbHpPWgYCbad4EGtE",
  "key26": "2mKHDNYevY4zeEZwu1u7ww9SATSF6qJn2MGtHpWPV2aH4cTh35v1XG7NtHYeWGPzQgwj5sCmmmTNspiu69VvAzJd",
  "key27": "3GudVZ2SWVqLnvfmWGb5UcwNFvxzYRbeYjpgR8BQ3KdME5PBVQ8vC9qwh8M3yHBdPA1pZftp7bi4SJpFDBqCnbjK",
  "key28": "5ARBAy3rYdTBLPhtxzQ63ByXVdWWo1o1oBjgCm1vW8yorWh3B6Vfg8NdGaBoL11iakkHd2Do4XhvVs4AD2ZNZZXP",
  "key29": "4bZhvFNtNY1Nu7ffU1NFoTcv9M6atTXFNfyKyXwFhgXQ8kDY9GKCkYqkyQMWGxQZnQWsAzvucPaS1ZhwSPT6GSqD",
  "key30": "2WKidzf67Hvx1w6nqBbZp6kyqBJh39Euy8MQ3axWCqYWuFZxrGC8ZzAcHyzfjednY8sUu4AaCgps5NGmqTeK2RKC",
  "key31": "5rRcmuYUYoHE7bXME8uqWtCtUeiN5T6LWf2DA3NWVLo6KCCR7AbUmEkxeUxUCqeAdf8cArvRDuKjkJWVpV7Ls2aB",
  "key32": "pvFFpkvvR58hNs5Bxm2MLdc2xL6tXbCrmD2PRY8o2JgofFMsbasrV1BAqx7VDpX1bcxV6AswG6sjCHULaVWJXXj",
  "key33": "4w9rE5qBCEQirkAHxfdFsBfpv1h6xKXDwpemCSD1WCuoAptjxhPy2yrCDVT3antivpLwz88HW2AbNdMj9A2F7sWY",
  "key34": "33kaAeMHPRLHKKRM7ACassQhQHmxJeC1rZJvhNajnEdvy6owtFVFHLgGtfaqSdvP2kFn35irWEfskHU6BZwHiBj5",
  "key35": "2GcSMVzTA3yzg74XayUUPE6Dr1Y68943xe6GXEQX89pQGnfySqnjTA5M2wUEz9fXcgWnQXPzYESLDGKk9szLHKDD",
  "key36": "g8kvHuFMU2AmwLfstKPEataZ3BJ6uGcPKzT3nrJbNx4oPjH1y3bbNhAMEtZVVsyFgq4xNE2zPNMfjSps7yfRwRw",
  "key37": "MWxGevdfDZp2RWusckqP3MDGAqDHUizdjtMhXt1vtGxP6QqWGXpygFR6qSWojeQ56cjXFf7yWdR9vipf1XVNdmD",
  "key38": "5CFMqnM91sBTRmhWtkHKRLRgiD1Vx76MfekYoWfDhT54XMJzFn64P5T882xBDjrEiWR7LRxsaatj2XwgzXiksW8p",
  "key39": "28rQ6XRahdmWjMAJcJbiiED2jVdLLPnyLLGvn2meBgNWHkk7F3DFvXJTg9aXH9bTwsBvnaeTeYxxuWRrte9SpWpB",
  "key40": "iXyzj5WE6sqBTyohWxbBQa9uZZc27Mc9QyRPAF7amJz3UY2roLG99Couq91QWK4KKVqpFEXyeN932KB89ckogPR",
  "key41": "39aTNPKTbmrWNdPZYXpKCuU6GBrNSaZ9wJpz96afMH51cL7LowrqvGi66ko5Wex1sA1Q1AknwDedmV1FLxChNhMX",
  "key42": "3Kd3Ch5VUKz7syVXKwfxxnbF6eNvUvuqPCJmB4drEaNohvDm2Q712RgUJwPGQjMh7Aai2yrRGnRo2vmjfZiT3qFS",
  "key43": "3uBXUGoMxV7U96pVE8ZahWV1vr6TzgLLTLq2pddJBgCUfT7fdmAPPVov7cEZ64CQwT3JEPyvPuV36w8YppzfDiDG",
  "key44": "wKddgntoJKcCRoBfSUEFWvSaXWBrU8oTaXpyZGFDHvyLqAzwGDTvfBnPbwLsrm6He4pvWV6xnePpJ2Ns99NCgs9",
  "key45": "41QonZGi9wkAfXZfjA9UMU7rFnE9tKGpr4hrQYxcKTf9SPA1HZLEcEMEekq4rsy6miwpwiRjjmELpQnRwnBTk7gz",
  "key46": "416QJGvBXch1caBXL4aGF4VoyRfWT1R9hu66ng1gHBfkHTsza5MeeFv5vDg26uoh4vgijDvhVTK6YhWCUz3wXKi5",
  "key47": "McyS547A7j1hgLbfi82PofL2qwDHX39npoCW4dqWiJhQUTGrPsgRbY7toVEVLZVKUn2J2HmKakRxFEqUfLJUcZF",
  "key48": "5h8oRdkHtxz9523RSowntzdkT7xd8pVwAe7LzKfRt4PppjdRydd4wpFYtmV1GdxNEYfod4WNzg9N5AWGSMFCkZqh"
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
