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
    "4v6CCDyTPbF7XyT3nyGJE726mCWzpuYMujMkMDXZ7cgj2BW2UGhsUhaBPJJg1nMVqcok4Vu7Zg3zYBSCotL6ACrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fimqtYNWMJR7FhatQDiN5HmtpWxJUFjGGT25if88e8fwqxwsNer8fw8QwotdYyL6hr3oQtuGfL1oiyo28WRKE55",
  "key1": "4mnALFrQ7qdUxiac2iAWgiCJTAqSpuDoh7R687eKXHfaBFqq4Y955tdhrEHtMZUrFTzj411oGKhUj4XPmUEginFq",
  "key2": "4tYBXYXnjwTHgExeE7UKTymH9T9sENWQtwyeQS2X1PKk74UT6RHJ5yGfEXwKvTRtwNiCzJjikqq3Jhn9e4SNPbhk",
  "key3": "i9bABFbJu2zwftGFTRNpifrTamxQcV9az1zpJtWQTJonahChsmo4Sasczg7WeBGYJHJujpzjddcPi11PqUfEzqn",
  "key4": "h8k4413kPmEDsj4D2d34egWMMmumDmQPNtaG8n5mwFSUyGU3EyLepPjKR2Q8FRftaL8Tn2M6DpLQGjCpdhdZYUX",
  "key5": "3CNLi4B9He4s8zMWHiwphdmfMYycbb7Ro5f4eRpFtEy1B3MAAPaf8m5h69D8WJzEQQg7ziRx46XxNUMEve9dARVP",
  "key6": "2v7ZF9j3nfdTGZPzYKp2qqJ15ZVtrv4PPnQHiVgBgkNtdvey1H9QqBRxrLxCdM8ipm7zxhKZ6BLpWvMcUVrkiC6X",
  "key7": "4Kh2TFSQXVHFuTHtdJ2swF9JCQTpwnYppeY8gdhoARLn7jPmu6y2SVeAVDWDHM8aHUgTwE63g3RSRB7xGEfmebz8",
  "key8": "3GYvEdNFiKfqs3f5BZ51FeysGdqtpgpTFNJKoTXLTUQ3PGg78eLeimr83wSnkpFiB1gqEMPk5J5vootqZiT6uMU8",
  "key9": "H87XRcFYLb3GtvxX1kp1WLZyehnQN2HHAhdUtXWNNPXCkCGcmwkh3JBMEKipZ8ngAAMbs2BVASfeAiiYeckYUhU",
  "key10": "22BhFidKHYvMSmh8eYpYJxRTADic8Ah7Wt5Cjgx1xGHJMaaQK2afdZjphCxiEBN82f9a7SWGbiKyfKF1igDA1wfV",
  "key11": "5csJGmYzwk8RZk4DrKvBMxJutZmjeSnHs4zyVEaoZSBaD3N5urZ5gfVmrqmgK33aiXhsGvYPWiadZpVrDhE6dyyY",
  "key12": "46oUgKJkyJ9W9cbjo25E46uYqBNCpuTjCvb9UmUY4cqr4MDvsByZR6HzVwPsFTiMsYgzjfPH8KzMn3rKKWz7ZbK2",
  "key13": "4ffP27kUdSh9FoJYehULttxtu3hDz41EhrY4UXVqz938UViVchULWPDjsSduYLJaBYJpe9qAPnL4vMKQcKkCNoko",
  "key14": "4p6vJP4KbEtJLcQJDyVtmhYh4X28zBxriZJV97dH11E971v31TZRgVxj56eDfoqx1zu5EGntotYR3QNciWNpuhLY",
  "key15": "46aBktTo5ov7GDaADk4Gsiuz1oPdnKnPk9cStdvxHQkyVc2Hd515AqDYKPUCWBiizAo2BJBHi3wqKHqhJymdEwGy",
  "key16": "538MGZs4v1wpv7BHQukjVZzEGd44YvGZN88bMUjmdGCgiu3dWWYzSYVz9yTmKesGrJwMhncmFaAqYRt367VLKbTh",
  "key17": "2Y4VZSE6xT9q22xqTojU1z8VJHFheUfTZUa4Z1qNuux24cGJcbDhXvhboEqUhv7Q9D91c4T67WNrL585sRnWLyqh",
  "key18": "5x58vRQRatxWtWv9CpNZqu1Vju3P8xwf3BUZvrsStxJ9Q9AWgcDXXcusVuZAGyTXZZotoTDSMRsgYnLKiwpGUHXQ",
  "key19": "32w15aVjPo1B3aprwe6jieZWt8hrqCudVcC1fk6Y36PPZcXMyvs5snYZoC5eSTiyXPbHzCexKX2DLNSA699ib4QR",
  "key20": "4RZ7hU1wHJqKVZT6FEtKTSv9KnzhBTtSi4kgSTSd4uGbSLWhLYtURoEveSVG6g47YtDtAL1pCVouK5dygbko9nMQ",
  "key21": "4MBgHNnYRQxeAimAsFkgxxjmem4zrD3pSQSD8r6Ngcfi17kWNsPaNfXWM1t4UfDv1L8GGYgDzTszSZznnV5Wy5FE",
  "key22": "3viN7mWuE1Ny2s32Hw9vH87MbvgfKpHBXRtk6XqJbQpTH4eHuk8RJasqgQNVZQYojfbBeQyRM4akcYN5HWwoVJdB",
  "key23": "5qAq4bnctvLCVZzwzFADf21bN92J8uVeNryyg2Gvz5HJXZuPbDqrgJ2NqH7G6RJRk5L986nEVcnEZffqhwUXCREF",
  "key24": "29ehC19wBcAkw7npJzc4npDrRexqo3o9k8JMFS5h8UGiV7rknE55XVLbqFnvkECFMBvtAwiUqEYbUvDUHiLmgtLP",
  "key25": "5g8rtiEoE8Q7iweaRUoTUZN8RP7YLowCSFDzu6yvxg7b9sWWbTBekDewQ3dpfQDaceB3Nwav5G3kRA317FZNRQKL",
  "key26": "e47TKYXiUpYhsT7YXuM2KHV9vCQrDvoNnMGtTmpBNjDXo9zoP2cTAuUAoSaNzY8rjWJZxmHvJcxkjPZTfSdm7wF",
  "key27": "2mDuakTnAKGUGePPrGJzAmoXCfC8cJ1UBuKbrVrqhBa8cjK8gkDpgzpx4faXacA7E2rdYvp1U4idgWkxrA1iA5qK",
  "key28": "4t5AM4f1erxCZizRNDWCaC9qod8XobQuEZnUhsAoWUE5JgSFQBYk7qXJr86kkHsjUARa6WNse7P4GiyUBRuZvV1w",
  "key29": "5RuD9XV5zyfC6M4DB3ka8RjHNKCkMDpKVZNCDmaB1VtAC7Ry4V76MTGPBAeduuZ7Ar54Dh2vo8PVj2iDtdMmLr8U",
  "key30": "3gG8yh6HUp9US7qHdCkKVLtT55bF6ZRPpG8x56RoEUv6QFLHSNijhNtmW3Tu4VAGJZrdepYdigmivrxMKoDN6n3J",
  "key31": "2yaxYF9HrNheZRidgWRUs2Wy5iQTBshmRk4NK2fKE9Ks6WV9EhzG6WsNWFMDGpzfjY44RXuT7oaaCLmH9VAaBUsk",
  "key32": "XarDR9oX4RnGkR3jfkk8sBfDQCerhLejwNLaN1m6namEVkDR72bF14rEDyAebEf3eCyaWmwd6CQXF46MwdQLMZU",
  "key33": "3HroVhfJ1pBTsPXfraAan4asiqkQsuxazMz9xzU3kBHafgrTtxvbzG48z4rjfeNVdSmw9axadKsFbszbQSeTipoa",
  "key34": "2VvS3vRorgm2iDJYk4iHaG9aC4bfS5FHo4vqRYizYE9MJkveA2mWL5FwPTuiBUwTXpdAE55t9GsNZszTE6mWBoWm",
  "key35": "4M6g15Ypn36jf4mJLQchAFgUg1C2hSTb7cHnEadom2H8cN5vAV6KmtQCWoftPt1GHhk4X7bDy5eLzWcqxFA6pyfo",
  "key36": "2MGSrZssE6BZG7f3NLZHcJXoyhHF571SAgygXduFYpA8AkTJUtuPaZeJAZdfzR3RmXAobcy6xGhiKgcM78pUXE4x",
  "key37": "3Huwb2NU1LaSKHgvo7FYaMw1i1nZKFTF3mgthraYiHgjY2wrwKHPLgqkVzKPdNcmLFmG2YZ2dpFZjfPSkNeubL7x",
  "key38": "3RQo91gWxxeWcWC3onyy8KfBEKnv6kTZXiDenJszsA8VL3ZJUMCCFB7MqrDiBniho6qscNfC7r3b4eA3xan5Ck8d",
  "key39": "2MXC2rhPnyyZSKHgdX1rCeRvjQtyBjUQke7H2beixLAfJjmskhg1FmL52EbKXTv5F6yrrvwKNhsfbNKqALxSXsQt",
  "key40": "3W25U1DSBwjHPLWEASDPNQ1FHQQ4WsWJYokkF1cgsKgTDmig538SHqyi6bLmvDJ6kxuGpofpZJ56pUrcMTJHbn1C",
  "key41": "33QeVtEoryi4VeGmRCq3rBTDPs44EAEfUqFuXSFdpZZwNjdiB5GbfUJDQirhDA2qWX8tEpsZ17sq3CmyacRXeGGy",
  "key42": "4UTad2HUBgeMVAuUUJhxeUmG5SF9k6E3juQjgcdufgD2Q8LDiygwoEHNN4EcKQwiq6aYXM7pv3P2EcQebhscH9Vi",
  "key43": "TwtiySDCmU46xfyxxbSp9EJLWsqThD92fFEFumep9Kvybr9FdUwoXeQhjdUs3qEzzTzeKjck6LnrYBj6GLyHKSf",
  "key44": "DPxy66RVXzLhz1i3DY34cnBGpMu6HPV4amrZbEfcTLJU9bLaeRiHvXcjoBLvPxayEXapeN5oYJDtr4x4EXa8nGC"
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
