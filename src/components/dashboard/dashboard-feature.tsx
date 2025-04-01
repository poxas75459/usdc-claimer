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
    "AzP2m4mwXbUJJ9x3H2CNn6MyocieYiwwxExxFx5Bu4FPzFvXyJqcZg5rqFHw5x5efeysRWak4vaZnu2nRnYQXKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mUqWfbLq4WZpfhWMFZidTB1PwS1SXohVZhfzj8xdbucQuy2nYwJ5H96VSi1kyaJ1cVz7PVtxjXTMrWJiEHQSXUG",
  "key1": "3xamaRnRcFF71Kcim8DAxJASZSDELqxGiZyr1hQwQkFd5bbWdvwjQ2WjfKu8kCWv1RB4NwSPhRr22CowgSkfeTUn",
  "key2": "5wDsc1nwp7F8abThWp3DLFXeXi2JXHxgr6a9wZcW8Dtwi4zhKV7aK74hw2Fzcu8ie5WQnq92ZJXCwhy8Hx14unuM",
  "key3": "myMnZfgWsMKcF99h1fRtcJXkxugdm6ubr6ZywajqHXqJZPpLDegTV7VJh6KsKWF5kuDqLhV5onVSPr7SQuUv7Gk",
  "key4": "3Koks5Qwztorojapw6XCUVBmLcNni3kR3gz7qteUXHY32oiECbGT8UdVNoRdALMBvJgG49YZ9mSSuKDiLZp24SAL",
  "key5": "2BpbNNG9peaKoCJBzbFdQaj5JJYmMTFJUQZtoLz7BjqevE9rG5L2zFFaEGwmDgaEfWTSBn6VsWYChwj18ZMgvsij",
  "key6": "4CcSbfSKhgEp8q6LnAZqpFUT5nQHP7haidSifvMibeM5LchmQ32QUW2JvkBw9CX1zzEiFwPu2gHPqw9PpRTsm71W",
  "key7": "2xaGFDBmHFhETEZUkvKnjiFTS89na8n2HFgqXgJDP4piLbVyjF56T8VAugZXewyR2dP4S3EGVp8RzRGJCvqpEa4E",
  "key8": "dmfHHFvv9XmCyDZjNuSJejczXue7wC4aesYX5xtFUe8t58BfueJ8eTb4b6mtaBhqgzd2NKpYbCKy5gLw8JENvgV",
  "key9": "2k92uD5VEpTGiKF9dPrARLefWZjUBeH9F2P9TsnpovA2CezFPVum3kznbUWUJ1crmLYge3PYG3vU84agt7i876fZ",
  "key10": "3tcT6oKh27AKaE3akjveUVqB2KD72nyJNoDUbFRvEWdfxewL7pUyob6JYwscDrkRyqmrhjKEVz7Dkfdi5zTG2Yw6",
  "key11": "5txQXhFdEcfZfqJh8F4REnNLMQCvQNeZx5w5XnEddMFFgReiFRhWH8eM6Ggz6QWvET3GymxZ6qbvs7nCJzMQ1Yht",
  "key12": "2NYBxKiEkfqBxd3s6dxqrtiXLHZbQzCT2t9kRZMMXif6fSDXp2rZJUKYfT2CRozjgyYVwxn6SsUB7twerEWdaypn",
  "key13": "2FMtfPUhPeEfDoWysWwSAt6aUfydeKAknwwNfdicTTDqzPEepP1H6964m3KwhBxf6A3AUBtAU6NgX9Z64Bmhp7VG",
  "key14": "ykEApnP1N9bjcfxJudQgD4jwxPmqmMEf3aSjw49FD6e7cnN8EdVVS1hfuXQEeSwHkRkjgJmk4kyKc2yvZEQHwp5",
  "key15": "47s8ej8ZRfmvUY7yoZrPEV72Sj1wsryGmjGBamDMTbaSzJBcBZaVGEWMyFn1rJ6LJvLJogc3dkhjq1WhSRyQfkCq",
  "key16": "4DQ8WhGefiUPeSGYBfzuRLfvMCUKLfx7dTXXwaaPUUbTRKELZusRDufD4BRB7f5QurMHkLwMZprm1NFyJPQVbv5D",
  "key17": "5ApXt2iKTW4Dduxr66NgHFJaVfPAibEc6wFYycNodS4zASFabNP17tcEXNSGyvQKvNuvE8bnnHqB99knByg1nqyB",
  "key18": "5vSY5DyAQZcTh4uhThkv2vsQWHkSoEYUrBEReZUVeYpcCrKdrpmfXs5pdUmByRZgh5bDUSLuTosNa7N1NpJQNQPk",
  "key19": "63DYTecsrFNCYfLn5yd9VxqiNJxWzmX3GhpgyABhiSYvxo37bGaN95b3rcHVhjjvVy7RCn3mQAftD95MEfgDYmxt",
  "key20": "66NgPSJno8AH1WMiAzoqxaKYjjkVgu3EN3KMUdSgyA5XsVZvFwywjWXppEyK71FP7wCqhGZJyZA7upizvXahoPuk",
  "key21": "AkfxH9vjyACSQZo9ZefFr8tUzZif2V5Ren6XaDYUEpDpGDPv2PbbRrBMJ4qjisAcTaw9uwWjFUHF6zezBkG5EFS",
  "key22": "2BNsqZzAPAXBeXYe4Q3Gz19Wkdk6K35QpSPrNFYr4iAFEGKiGeP7FeRBvH5RApHUnYrMdhQ9NC8GLW7CybT4LbWV",
  "key23": "3CTJt8MSz6X34TVfcXtFhxpMxsLiTjahGrqU5VVxRFJeTMZWHY1jUGtvpdNmUqQ1Qq4JEAdw3pDcfcYBrVxHvBDT",
  "key24": "1tbNKwZTdsF466Amx89MsJjZampBQc7KMXgTtvtcsHUtmWt8CTGoDBBApLFAUcxBJMhvaTsETHBySesyjQGzNdG",
  "key25": "3SsS8pt5FcXeVjgp73ovCoCBjwomx6qk27GLN5b6uoWDRctXA61Sc7sT5bFoGPTY6f2keWMY8gSawNE12HZLZBSx",
  "key26": "4MPTn5rY2vfBwoVnVWJ1cWkMkdXWVGUg78YT3F6DH4jxnJBpMBHXYbNmP22mq7LZoKWMi6UwribvHoaUjL7fM1Qg",
  "key27": "cJVEsJXwCwJe9acKNBcdGsqdGv53mx3XkCqWBaDDmskdsNNurepkjRhzUbSTFCHRwvHewvFTynEjMbuSLqXLt5F",
  "key28": "46Txokgwn4C2F8kDVkyP3XNM9pM7aF1Ad9xVQUdB8uH9ZkEzY7LZ5sxMifJwvaNrez7pEWkM9gScDFGMwuspj4Eu",
  "key29": "2QmwFh6CPcxMemcgHDU8Ysy7cETu64YXX4KULe83T8YnVhD349nncuviVRYRmva1foet6n5bofW326Vi8j1S7c19",
  "key30": "4BtwMkEYHLzXaMu3DQEd7dBWF8uTAMTeytoHsfLcXT8DX7mbnTQjo2xoeWrZUcSm9b7uksmBTzYHMmXRj1WHWaGm",
  "key31": "56gXVWeciAzRWAo1ama2XVzL4JBUfVxXWRSp5q5keQi4RBo5RZtAegqzLsqBH3MB4P6YWH7wuNEsCcm5Fru4ecJD",
  "key32": "2qiJ3cq2WGjvCdtbyf6eUknCeAGyiQHBmdCZ8n1N3AJCXbKJnNnjfK6A3iW9UhP77P8qoFmKn8say6jEFVu5s5K7",
  "key33": "29FQAh4rtHgiiRXCHF175nFDeFPqQZx1fbvUZKWxgUG1HsrnYUpeQbRvLNrCzVZmPdhk1mUM92vLXVJhxcXJ9wN1",
  "key34": "2VHFHy8mmiGJdziTZ9m3enAnpjSVBFUPUmw6x6GXWGrfpmkSsnkrTiUr2f5x3JA2bSQ4LMqPmWypBfJtXonKsWQt",
  "key35": "4LBiXsWw4uA7nfTNp4KdQBjKLKkb6gCp4ng6xq298yfF7tfdtX2dvcf1RSj6iTaNttm7djdt9NK8RXTVAJcDSJUH",
  "key36": "41mw4LmbcAGyhayUPevERrZ6HNJRTj6v9Sv4fadnwRmvazFxXxUkmBvTsto865dZo9Y9kXNa9MV5EVKcJ7VK8tWs",
  "key37": "5PPX9AjUiLopdoJLiVmVYoU4N4zSSfkHPerR3MUf2Ych5iEm3tdgsrz6eT9t8CjVtVsgo9UU9zN3jcqZg6s9x1Ch",
  "key38": "4EkNX9sV5mWZp6QUs1DKWvJdmBuyxZyV8FPd8xqyc5GsjqWuJ7uQw2xdXpTMxq4DR2758y6bwinDEvD2vtposYFg"
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
