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
    "YBwjab6fuYF1tn1LsokxvhHvi3a1CDw29F75pcrGgnmBKRPd9D7Z1jxekzMMpVeWzntq2mGcCLjTBK61mabzAJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kQfSKr1waMw1ZMG344pm3BrfSkdpiPwvSBceaU32MWSN3oGVHzAao4SzjNmeTos4Qy8MLc1jrUcbjDMSuQSic9W",
  "key1": "2ih69GiyuVb6zBYSBKt6J3XHVmQ9GthuGQozjoDqPyX4QGiiCsroXpVs8P26cPhFyCQevdGHDnEWqSdorVDFegYr",
  "key2": "3aPB2i5RpuYd68tkqv9bCfT5LZ7bkMfRHufKGf1A9VppV6NSmR6w7rebuE3amsYS1wYqrWETMegT59KAbEGMohDA",
  "key3": "63Mr9NeZLiiMwSW3vpG277S4aoaSnnovogtpucgYsXiiWzdsDvz282R7jMHenvNyxTp9wWpVwxPvphVdPb2fLreX",
  "key4": "3r4CY6kmx2Csc4HLhSSGXJ9afUKFn2qSWKQiKJ6WBXmQLnGFwLrQYoC8PKTxUuBXb4FE94DEgQvRrU5497JjU6cN",
  "key5": "4VFAGfZs2xEykh27uqvHyeMVNLcBNjDRKWsCRDuNGawwpq5rQfmduxr5ciSjEV5M4BMuLAY1afCF7kkzVrNX3LPL",
  "key6": "3W7dxjxmFeVwjpHBJMZmTgWpLS5UBWu3V4RrBLziCt3LJJuUZrKNduJTZ6EZgHjBaeNRLL3JtdXdkpN5xNxvaDrp",
  "key7": "72ebjACHp3JFKJeL6f3EZ3W25ugjQPqdvBnQmYhjTsaL9EDuh4dZzSueBYyZsLHzRe9Bjuj6mn9tHRRjCBduzHW",
  "key8": "5KoQZeY8MMVswdYUMABZSpMMGipDAMc1zghpYW4jzCjiijDrdNUfAvLjoCxy4ju1XfjNEL54H1b1WQAiUL7rA9cZ",
  "key9": "3QQDWNpGf9ZGCzfXGkrhXoQDSkNoktKKk5Td3ULqzf7YMdS5E4G5FFcn3PAMCuSuoE6y7FQ5nNbmiUCV6eQtHxEk",
  "key10": "2V7RA5RVH9ugeveqpdspHy4DgxrYaQHf6a7fjCbZaYCZwc5aLdFSUgTYWhqF4KgVGTBeCbxZpopXy1pmXhRVdbbH",
  "key11": "2drBM5P5szrsiDxhSsj4uvzVskvV5MqrHofNFhXZTsGHYJv1cv3PCMEMG1148ZZEbZ5D2kH3JUobhr2bBFuTRZ8Z",
  "key12": "4imsCtnEDj3zawFdbKH96HafELwRWp9NBWZKoog7piUx72o8ZgbXBUMumhiEZH7UR3ChbTeamTeU6kcAhuqmqpFs",
  "key13": "31iqnoDx77K9qNomUUeLHr1yYCekjdVT4SATqN5WYw85Qgk2eWhMmQ4jVeZLd678h6uDPN78VtzdGbzAf1z8tbUK",
  "key14": "4yjapb1Jb27EwQZAWGfZ72PjVRXeLQnpEWBfdew7S8eEieEQbUaju4yUvJhQzYQ8MWcyL43cNyoV54MPJbQ8z9ZB",
  "key15": "2TRzuxo5BtPS7aX1wDTRNkD1szYRgdi4Goc2aNe74JXWRYEvUNUMhY7NpZgJam9XCdHXkZp9E3GxF2kSfusswbwn",
  "key16": "5NXCquSKSe2D2HUsQC9TZAEVqn4pTEubYvqzNK2WNnGGJuPsJ6LRN9EJMn5c3xdPymv14GAwK1qNgbDxbygwEteW",
  "key17": "553tP48nuxngiG5e5m5pA2Y8AMmwqJFy9jPv5FYjTnHJBuKZbqMkQoYxDtwGtL16i4prFo5cCZ4kJ6GYCHH954Eo",
  "key18": "2VGxhk6gyb1HdTUFQ8rK5vWU4UbrAzw5j63BA5gyyFruuGYtTDwrYsyYT9NGTYdUPTTMTjwJzGKJNbN62QjJYusx",
  "key19": "25pXZvYpeYQv36qZrouzj6rgrFj8pqvXzVqa8PLfm69DgUNY9iarGSqqMnrS8ShnDPatYadfFovKHq1gYuT2s49d",
  "key20": "2R1RX9eQGT9BNCtqscnWE8ySMUVKaesE3n6FcZQskExjG9S2HueaN9P4PXKXEzuS4WwP3Qig8PyCSHX3QMqpWQqs",
  "key21": "4cjPLnPr1XxVaonfR9VDADFwxC3ZuqVBAv2ABg35PXe8J6yvGegRUTxoEoLAa9t2ZZKJp5CgVkAe9oVoUoTE9sMD",
  "key22": "fuUzrcaudWqJhnv8L8p71A3tqK2KQe2bfAXyi6u2FzJRgTkpGYWBEXVbXdJ3C7jMUFzjPdXPq4Voz8H8NbNjptv",
  "key23": "BMN3HZkmqHUGVDNq1nsvz7U4nzTEt4UNQBPP2A94QNT8g4W1Xx2gGP9Yt6FTvjtMr25kUdxCxoXFDvNgoZfVzm8",
  "key24": "3iz3LthzEvRb9Zzfj4Kry4YbPYVmdyVg7DcRjpFvrk7e88DdG2W8ggdWvTMB4Py44H7Zx1JyKMFEkKP1VqG35b46",
  "key25": "5L1aVZDM4pMFYboT5YnEBiFegZQQ3SwAm3WtPtHWAg4WkjuUdUb2Vc4kfMW8Ra3pqi7rgKDHjXfPF2tRkLQYTUEx",
  "key26": "3qUfardM7EBqtGz49DG3EX3wkx1tjxZSaou9AexhrpB4aZFQiJjU6D7guiV7aN686dSWLxNHPdeVuiPX2GVBsaEe",
  "key27": "2KqVLNY7Wk42BXfBsmRoi2avvaJDAgYmdyA5SWVzxHcjkuCF9DjP3Aa2iJcqsUtLm7nYyexYncjQrVr6rTRZWgE",
  "key28": "662K7ebWxc5GqtwXvooNBHebQszDxdqaJ5FLECEWjaa2bBJDgW8uQQU8j724durcKyjQD4P6NPcdzoxBdKF6JHw",
  "key29": "25enDsqKtxqaCAzrs5Yw1Q2Er8JxSoYpc7VTqWnJzcwCMSraDqumgWuNwctRFqqpQ5QG99HEVehTpBrfGfwzEoDE",
  "key30": "uJbzENcytdwSKXYhRBMVyiASDD9Fon1fwRRbnRYhVjAeE1R1FAAp5enwpz39eA5KGuXV4QcGVT2QV3XiriRUj18",
  "key31": "Ki5c59SmWbpgTk3qq8yqKhCvF1XqmXPRYSLTGiuP9z74UZRWtLCYiSVBWpdKM8K3tzRF3KXaFHhuYcNWj7pMAq9",
  "key32": "4xG4gHRVppsQpmpNhFxek9sTm4FFZqGecxbzrsNpVVPzghBSUAXxhARsD4gAh4rncVScsr8a7zcHFu8e1HPx2iK5",
  "key33": "3kZ6GG67VPVKngW3fyXG4Brv28euaivwtw23sQxWF5hh7TBautvC4n6ScVgCaSKbbdyTWkcZPdKjpb1M7YVmzdsB",
  "key34": "2GH9fxsGhydSek5XZz5gpHcjTUuUSnstSm7LTeqsaJCgzxnUcK8zYgmJ8pgDP8sFaTJrrMAtvLzLESjWbnP6tL3D",
  "key35": "2QhS9awgrifTQjguihxrPggc5DXQNEeSjYobuoBM4Fn9WZM7BdLYzZrDCH4SjEo2yzDNe8EZjt1CUvhPwYZ2ZVHT",
  "key36": "HZe7FvuyHym2q7UB6sGxrNsLJZERZh1Asm4Y7R5L5sYB9UUAbtKHFDAFVAJYjVW4WysPWviZa3mwz6YR8RiQsAs",
  "key37": "2YmyqNEYnGeUvRDnvV9oZw3mmGgP1wCri9VoZ7x2TviixrKaZxXmmCwDGqCiiZnsJixq9xm3eW4vhZJtitCchnEF",
  "key38": "NMHH84weMDdTGnVznahCgHAD8ZFwTA6e35PBxTbgT8hLh13uxv9XZWpVK17FY4YFffVqk5gFbe391e94vnBwzW2",
  "key39": "HpAV2k8paCM9brgKs6LQob9ryopZyA6qpwqaiQaRNp3kucosoMYjjQPeoRAbYp6T9W3cyDMDuECx5fv4zouFcgQ",
  "key40": "4GuAsFSTPQZZvAfDcGoToB385ca3cifpEda8tB3AJ6oqLk3byHgPR1aHFFeNV8ME32tprZ21eKcVXyJSugWaNaRe",
  "key41": "2fBFQ2KyvgUaKQGaC6tGDvTCj3d6dXyZ547TtwpcgtY7QSDXocNDNMm7xMRhsBpA5DHfYkyE8T7vxWRZBkWvMUsL",
  "key42": "2ciPUr7CZKrAQ9ptDrr6k6NviVaRFee9FtQCeEF88TooZjg1ZfJLfdpB9XoFhSMn6JV2rEcSgZemtXR5n7DCksgn",
  "key43": "3d49LWdtoRf3tZm4GahGyKNyEDsh2tvHzPtfAT38J1qcLRXaCiteA2DBTkrUKgcJ3xgV8zedsF7CUXRFUhVf4n3G",
  "key44": "5EpyrQGKK33nbBPfxLA6PoSLvtq8dwTqgEEjg6CUUhjyr9ocEzoqX2n8pTAHfmmDs7KdhdhREb7DMNTMHecVEtBg",
  "key45": "4Cbo3LMZsJwqTgu7gHPn6WxXwWUjPSsG2Evc1gMq9p57SegXH4JfDgiPvqi19ySFJDeeVhZbLEvVZVxr4jKBnvS1"
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
