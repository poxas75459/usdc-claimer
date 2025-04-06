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
    "qZ7dMFKE5rEhoKNrGVoFgHfFYXqjqf2iJ69LYmiYygi6vCybkzSJTbANgukd41JmmL1oSik7QeWAfbQUBYNKQwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44uQr3CJrdezYfVGsGYiD5ZFTYQSbaTuNUH9N5yi4vHZy9U7ngjWrgRvHPFJ3Mpx9ztYXaCvB8thVBXgvjYikpdc",
  "key1": "2BUt3jbBw9JMQnNY6Z5nEeCpDJ2yYhwLtDKnAtvxe7Cww2XH5x7Dk1hrVN8dknAqhz44VYY7g8Da71aauaNmfVSP",
  "key2": "DDafkuKjLpDYmAYhqCYuAtjiPKbj7vSaoBu9ZQG7a2ULS9YcCT1QE81p2vcYq3KrkkVNUCiuMYqu1tbAzZWwyg2",
  "key3": "2XATPY3n5oUUEaYErTVJupieMEYG7EhCgRreQbKPjaYosGKWMXiLc4uTUQ2jrURcpT9AX968qX6Zv51hC8D1DXP",
  "key4": "5dnyZAFXg3U8dtM3f6FLy8DhijixcRhJeouyESjy49jzSGEx3ok5gWe4CJA9SoW4EQ1TbC8znG2VLmUu6gfp5dXu",
  "key5": "2RTH8rKaRzitYsMqBUSiCLK1fd4KDytUe92PBeuLi9s3SfJMCjiuYX8MSy6SjEmoMJREKQQWjhf2qtzK7GowFjHM",
  "key6": "4dZweaukhjUAzFzfGLJsm1tfoGzBLfQr2zKb2KDRorqseqBdTvzKHfnyc2X9Gh69aygjocQsKPwxwGH8zLcaDR52",
  "key7": "5XbZ1AYMvTj9z99ft3dSCudxpCGU3Fska4EJjeC35ZuZ1eH9QNmEqbmkdTYW2Fr2DqHTnt4CuX8KRv5buU4VLSiX",
  "key8": "vBXLTCxzBeBbEqVv5WV7fyu5fWAo9sD7KFVkVPK1YbtKdxeDWZeaHm5BsUhygCjmDt4ujxP5SKGYXmo1iHDhHNp",
  "key9": "TW1HyCPzpV7EyfKx8ZsU4Xbo68eG7T6eutogc18HFTLiPHy9TikE6tLQ3PNs8DMsc5HXxVcnzPsGGZaFBSVBa4H",
  "key10": "SuJ529rJXixU9sPDovVh4HP8CgibNc5ZpvWaLg6BHSN7AaLtjm6AMUc4mGbG7mS2nxUCgZVgAfhttprZamacbHu",
  "key11": "EjgD2NbHwxuBi1tajm59X4XXaFaAphY4gWk8gbXtJNPsMTFkTtjL7mk4u3myBDAMSiRsiBbHdxtXNgr99AQGbbe",
  "key12": "5T1kqU4LzxrNhpA55fZcH4mJ6eqjucB9JRiip5exWgVbELeRvgQMMBxTUg9NCpWkjEL1846WWCCZBgDCDdoqnzEB",
  "key13": "4Mvv8qkN279zL7v1W9x6vuZ4NvY7HzxXeYGTURUnpLF2kSVvx4KBvCaKCzYN2JdMsfMaJPoYszLXTDX8JGQzVSN4",
  "key14": "4zre1HQymu6xH22nFirbkXfMP2EMDCsesCnoGqKMxFnEdfjybifUuhgakMwy9x6V5fx9ZYhjBwjaJRVcNjEknT4v",
  "key15": "MA4UKBzZyZ11QKEEWVibQHL5waxBspzu6cHRyprGhZYioDNZDwFCXuisXaDnjJGKwgsyuHpsmTJ8FpkZKkmDHVR",
  "key16": "itRQwaUR2Xf5hbETboeQe9ciVkVkzuNfimebwNguQQHAB7f28baFAi5gTCdrL4okZY99FfwLA3cqi9bgAuaDSqP",
  "key17": "YfCXA7MffsoNmhSwCZgviBENdXWacs2SNbtBT3MV6mjMhDgJiJUscDyiUmFQKbssVp3B4S65BJhQ2HD1p47mV2S",
  "key18": "qwKGDbo4oWwoPjW4nPcMoHMs2xLRA5varNimhBN6RAbPzNyz4C8GHVA976mfvdTXG2zF3JHYViUAijd1irvc5qg",
  "key19": "27eV7fk2WodAUp8LGMVNiSAd9Bzx8FsjfX6SPhiUB5vW6JtZfG57FKrW77mAUrsN12BbQ5Dide1BuYH8dTZPu1vS",
  "key20": "2bKRd9Z7eB4niMdF4BEZxxZbG37EaFJ6XUqh8ngRE8fPvACafy1zacqthLhKdQgRZgHYrT7ZgHAycJsXYxbr5KkB",
  "key21": "2K2eFmXfN7dSB2gMHNFTzoPAs9G5ATLTfXr6o8A3ys7Ugs95RjnJR2nVGUeSRwGLjLrc5NYKekr1veo27kJRuqDp",
  "key22": "4eSr5v7oUvokP4KxRvbfGKCDSGZndPkVqojZCraaPtMR7px8SNM2tusez1hQqosYPTnB4Dcdr1fFJsxcHVdEEWBH",
  "key23": "21mUrCyke1Fho7hFFYkXnJrNm9QSmWwLtWMDug1hAhs3mvucA7L4nFroWzhuAM16ac4V914vxTQLsZKVLxJhK3Nt",
  "key24": "2n4LtCU4Wcj8BNypSxEiYhiJ6WE7R5RVQHBCBciboRe37YRuqsM4FrH38PWGApPuw2a4Lq4ZE27MBLH4N7PHjmTi",
  "key25": "iDQfmF39mg3wAKcTPScdtqT8aG1BUzxWS8CX5nfQjfMSmz3NhJ7DvSQASrYtpcLgNDWpMRww8KUHHk64QMZ3kqx",
  "key26": "3rin8a9d5YguuYEm5hbQXu8CQ4RKk9s4aNxbLBu6TsKEesAs2WLjMQumUx9wKVzXqEcv2t5yPZkwpPiayYej48aw",
  "key27": "HeVCPbZmpP2qy1SpVjVbTsV3jF1TtjX5x2X2bSciHMg64tbhgNfvnMddnk7Bwwxk1bsyGpnf4HCtcYR3mcwHofh",
  "key28": "5zF8C5PMMfkVppHoedmS7JTa4b446kyA9TLmMPLuejUe52pYzsUNceUmh1qSiXM7fa4XT9GLbeCVv1r5GUgWyYmT",
  "key29": "21y9dmqCC31ZU5zhAtZuDSZjtxs7JkruqLCFVA7a7Jw8RUZVzQuHhBxbaAbDc5oi3Sd2cwHjceJPCnCSFqed9JHo",
  "key30": "2vHpaxL4QJH8AUSqN2aUYsU53kHTVq71rtNK9GFAWKVHo89XoA1PADBPuEhAVKdU2DffwNca5dvnEn4FSLVZoyQ4",
  "key31": "4akCGoTtW1giJGczkzhxXUPYeizoR9xcF76VLWMXCma3pz2o57Fk8E4iCz7oqHshUXrB76KenDjK56NPboVRK4DJ",
  "key32": "31diE9TKEXRfVMRvcK8P1ehEDN4MjtYrQVDRcUSprutes4Ddb21wXdaU1RMqWGoFsuSCNZyK4Utn1cfxVA2T7yrJ",
  "key33": "2b6iU3dkFPKjtKWq94fdecEBkx5KTXBEfuDyG4nEfUnfLaFsiHcc1RQSL5WF7oQA3mw1cQd5dpL4LTuryG2Aj26K",
  "key34": "51VyPJXEKmtdYpZBehU6xBUpdB21c72UMHg8cn241WuYLBLeSym1ALZE23Lwtm1NCde1fGDvjnEvRyst9asmGUup",
  "key35": "2nVTqgmn22aUWexapF33WekeX6DccWAuWgHMbCvdgJ6b7aWd7QSpnEvbr49kxeUsRzPLg2sjAo86voqr96xPxN6c",
  "key36": "5z8j6HFZ1wg7a1azt8aPneDNwNfFYCAtoFFLRW7SQ3nk7N13wtTSahPWghEwS1jgE2gHa9iXfbeeaFJ8H8ZLqt3o",
  "key37": "5RniP241yn4ZV4QbW7T3C7BCGE2h74n8Lr7A84oN6bWRqABkAaLbKgxvYwgYJbeFWA9hXRgguDvzf7VYpywmLuRr",
  "key38": "5wubkJ9sPxxexeyXrdkh3Q7qJEpyHSDy4RWHgAsbrgKtcV1kwWb8QzUVSaLaxc8ANvCPfcKyzAuPiSYbqdQLL8Dv"
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
