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
    "4XjsXZUwQWA8eSW4SDyJofAmAAb1L1PxXRQq37i2c2JMSiY9mtNvP1gEbH69WuB5tMSmUXsmMgjnCL1X3389tJoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wEkffuCV3VXBNtgW14JeiJNkYcMn7Q9d1a8EzhNMSh5iQNsu3GYW2o387388s8xQXXfTzfEiNn63nT54getQmRz",
  "key1": "3dUqSQHvFQskeBKkv7ZS2XHBd3nJBZTJ4mKTSY5mrxwX7CetkST7MTH3bozushjqSiMUwnAUwru2TtCxeCMEU8dx",
  "key2": "4KUZH4Pw7BQc17KySVm4283pYAkMEn11gQuHnEZ7fe7geyE6ag8jgF4v7zQu6sRXByMEWJjJh7oXi1Eej1wsro3Z",
  "key3": "BnM39buggk8hs6wXrgFsHffspDs48TzZsbgvcJJ5sr6VAHuos4Pwk4ZrbJXkToieiyKeMzAV7rsFFWMi8GLdATB",
  "key4": "5ngVYw25TMZaZoJM3cLKMLarAKhiSoUSF1xYnxLZJLsuun1k6VV5uMM2aSyzMbVqRSkvadyWjeC7A2wkyTwBSNyU",
  "key5": "26zTbTPryeSPBhaZGQnKzDckikFfrvvhkHdn8p3JDAkhABvetGLdN3jgvMCRJmkgBf1PPuh1wemYWGUfCeWMa97T",
  "key6": "57aDmAhtXXwuy4mXcEe1qxhke8NYWz4vbVB1GLQHm9XA4RPx4M8KeNaozAAHDqAt7DUhkVTgkjV26aLcHEvLUfgs",
  "key7": "2F1yRRVuEjNrMMtxFoWhvTdVS3quqhXR7JGVrdbhzLfGVZeRSoH91qwAwGLMtLC19oFojiYZp9zM6xoQjaVw7Zgj",
  "key8": "2fcjJfeezv97siQGVDJmasZZArBmVW6C33LLrdU5NTVDipP8djBLiHMv8mVprEeJdDT9fWo3qHCL8WsA77ZwdaDH",
  "key9": "3TerRLGun8fAyWMHeNacXBQopeSm2VMa1hNV342arSSLWzRB8ntGvwAg1Xbfh9KN95PYfWf88F3zBJmYXhoaz75P",
  "key10": "3DT5bg9yJy3VxMp3rHCwAG5aW5VmuLFBKu6vUzenAgM4e9kSdPb9fpzHq4kdiSNjmFBUm4JdhPoeEYfFPi3vWCWe",
  "key11": "4meZFsWAkZdWapciekE6Byzedt8gFEXhHE1ZUKqMUXnPBv2v9cHxiE6u8bLKGhab46qBMVoMxnjEzvt6UsgEmNcr",
  "key12": "38MiLse5bCXF5ZXUFQL9h6HKnYF6hDwHhLW9ojgbWMXLTGi2JwUHp4EBip4kmba7E2HkUZ91F9XCbMU6BDVhMg9y",
  "key13": "QoYrd6RoK78G5soNEm6isds5kdzsTHQcUL3iyocjhEFWD6bxYSkAnsShWjcEGAtZykae23SYAwfY3Xm3KDQXNmz",
  "key14": "3L54zj9G5NgAZgfjUY7Ciqgkiu7ysLZgraz4WGXohZmAbccxeSAxoXZrALHUQoabtsRhHwLmJoRyMKJr6rZ9cHQy",
  "key15": "3QX7gmTgYR1721ChXpK1xoXcAuyBSrfubNwoYNcyncNvEaMgUp9hrTr9y3xPKDzcsqTjW875Q25DXSpqRrGLddw8",
  "key16": "4cnN1xrgtwYfUGPdnedLHYtUEgBK4XYTYDjvHw4xBGkhMJiwpmd1kgVF36ZPp4YYsae1LMQEKrP6qJwcCBv2mWRY",
  "key17": "3gE43Sx5paTWgt4mAb2iyvPGvbTWAkGbUXJzusW1vgYyYxJr1Pk7MVFgY1woz8c92UvzzY2GXpG4qKaGSQk1rV4A",
  "key18": "5HFarL62yNApJ3ZQ4L45Lj7zDEZbK9BqBFM8BScLGxMgiN66uje9m79NVDL8KvUgo6QN9cq432qLkC8tcjAs4BXo",
  "key19": "3Wx7Pz4GX9EwKsoxfsMmJP7L9UK2GFHD5dWYYAs1VjR2dvZN1k2n9wt3MY8Rie9zmMsJHh28agZYTL2eekJBKFju",
  "key20": "5CkJ5P1wcmaYQcCvkkVpEXgcVmQMufke2A5jzLg5zNFfaCXhzRjNwGxvTZPfADCSrLVUVYwUy5Af8jipPuGowj4b",
  "key21": "pxgZUEBzr2GYbpejhXRyC1wrakNG6vEhmDepLRDJMZvGffLCGwMAaYoL71Dq74njiDjXwenRjNKvUPDYjZscgA6",
  "key22": "5U5nRHNnQdDpty4nQ1R79sGY1h2nwTYSEJt5a5TALmvnwWbHjS7hYsp9vQHpdkp3nM2zDUFwQp2RAAbbdCptQGmV",
  "key23": "8F8iKvHnGn812ZZcXizic2A33pcPFSUrsFmbrkutiuS9vYG5t8e39LWJA2G3BttUCzSV48pMYqEUZpC2q8Z6zAf",
  "key24": "2M9fGk7uRp27rEDN92YazEt1n4Btmk8LzfRVMN8inuifxmAsN7Bu7tjjrEGtDotWLi1oux8QRDp4onK5xiU1oSVo",
  "key25": "3SvRsDnth7zAamnNkziq1KS8iUgUAy1qxaMDVk5WDffjPZqdSVEkuieaLjTDpXbymbEwvGM3p1hnVS63vkYEd597",
  "key26": "4bP1CRG4K4nDASj7UQ18Z6mxvJu3J3gP2SsUuwa9xDeiaMDuJVeS1ch2sry1a7D81TkykVCD7YkrEyv7myZ4NjnW",
  "key27": "51bF2PshyV6kfK6sMzJbKYqcYeh5CuDQkq2ojLDQbApawTE9RREQnARr4KvS78n57a4Qxkk6VpzcveJ7KCP7xXKJ",
  "key28": "5uZQaGQCacA3Qbw5ThhSZmWAhrbCqEG3xaaCGmBsNdXAsH1PqCnNr62RTLgkd421ajENNa7VRW9WBGS3CR7JJ52v",
  "key29": "5LHXkxs87mhwnPjiAXc8jEsBcrFJSQUqiwLQauEsiLhZ2ifoQnoUnkkZoCpyfo3H2fZ5abEcs6KSx7SPPBQeCGD3",
  "key30": "4ANQ9CYLt1iCiVUZFr43MZ7dnUwvFScCDJxEo8vgaXLnM59D6PJpAAJUPTRBknbpQ3Z8a9V3SbhrXBhpTPthBwap",
  "key31": "5uQj2KhoUBhCVzmcBxwpsoTqSXHJroJLGpEykSgPNmUf29UVK4vUjkr4K3TtqXWDNhZxmFDXAK5mEWbkL11YYZjR",
  "key32": "5Eg5DiQPyLJUg2t25uNp8xBNS34TD5nsEML8YDNZ81UB6zYpQ2rrcCDuAx45WTzyrWBs1gnya9a9aqg1wboYGmbc",
  "key33": "2wuQ9Hc5x22k3NL7nEybrvMYaPdXCR4DYxSvZjErXaQQciJKjByP2pYjZdEDstqp5Jce9kprtTUwSyve9EDCs3L4",
  "key34": "4L2dfJm9bhN9cWrJsm12u6RiNQR6FhEEQqfWULxZShZWF5E3o86Xk6vmEAz1tBMXTgCdMixzTfDpNBN9vv4b131P",
  "key35": "2wdvohhVHKhhSNvZ1bEKKM3seFaJg4P3igCrvm4dzgKFpzvd7aVFt94tTtf8CtTbMibULsNVgBD9rkNy1whQGqqx",
  "key36": "3Jypg5ym6K7XBmHnW6Ca4hnq6KLVsHVrsQzKfBmUxKbZh62hMqv6Argo8vZzuT47QHrvoSfS7qNjdZYn4bYsvXwb",
  "key37": "5CJan6QVRVcxiDhtQqXsT9CRbi9naQHKtUMQE9u6MDgHZkymP6eAc8qeC2Dr9XkMNg5vC9SNFPmQiTPKnWK73Xyb",
  "key38": "4pDCSceqVEBR6LtFqjFTB4Xnesyt1VfezB8BUaheYusdVqpfWTEJVYBPpM6kSzYZe3gVj7NyAbo5PuqYaGompdhP",
  "key39": "3QV3kjng7MhpzjG6uTHzULfebaGWJT2XyrkNBUaSFjXLXLJCSkQhystPXxEEcbb9iT9W56rDznQYNekU9kLJDnfE",
  "key40": "5LC9bh41MTg8TN2mUt3jzdxNyETCn2oe4sgfmDvuGPwxujEMhPTzR44BMfAgckdgxDcwqEC9PJLLuLnSkURtmZ7J",
  "key41": "E7YtyTeNcdfAgJBHiKT8vhzuMgx9DD25HzWNN26mzA9D57PSwQFjKFBKHk3PbKWUvSqGrZ7v1fkZZqrteSvV2s5",
  "key42": "4PZ6R6x4AjSSUQsTXyFMe5ur69gqVTLpPGn5juun6EB2GKdmnVmDUyhmehvFz97c5gjZzRe7Qnv8KR59fai8bFEj",
  "key43": "3JLCY5kdDcDxkSMTcSBt51iDhmyU7dHR3WTaVsZ79CcrGugXmVE3JafM1NYPPBTzHFxk6dfkNf2THHhkyys3JEZD",
  "key44": "5DpWH5x27LQUbJMxsTY1ex5pq1EYaLLwoKh78D6Hnq7Uz3SkwznLgxggqby5WHvQ2B7N4fLWcg9tBB59baaDWBMa",
  "key45": "44aw4HveokNutg7ip26uogcKKZAAWvbJ2V4QPUGqYzjS2XFrLH2dXC3wkYHqmBgPwiqvEy3qPo2Ssrpe3928F97L",
  "key46": "3RzEZBFU8iJrbn5ZdVYht3EqzBRQ426AjfHJAhdTTxcMrcymGq1WZeGXGgUrgtDK8FLz8QZiSq6bLDxZcTzHGR3P"
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
