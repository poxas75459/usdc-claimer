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
    "2VCGFp1FaogJMecLDq3M2RAWUkQrweryGpg4SVstvETQcVhZZr9rKzkcnzg3g9EUBihJUowG1jLiN15eesuS7K8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zDasJ88kLxuur3ULK9gmqK16hs6z7fx6EhuUgKwXXhA3oFWvagAhypXqzY25QDdUEFzZUL2dksib7PCQ76QUSMr",
  "key1": "5Uscrg2dbZkxyE5X58QSqWYJT8N1gK97LXaTm9NPAhKJL1DDDJ49eCdpy15oa73XePjszou9CzaF1zsvgKRwK16s",
  "key2": "4irXyUWzLxfu1Kjcr4LCcnUeBbkcSuYxLZZeJFdUNB6oqKPoMxTuYxrhLdeZsoxCAWnK69ziJJR2ERFWoWi7uo33",
  "key3": "4uy63akeQnQMUxvu1gBwrHqV9Y9TtubhB981JjppCctRcai4dARxpiTUQe1o6iqDp5nBTYYjwftV1c4ZzQBeAex5",
  "key4": "XgUgpBKcQCievdtZJziPQK87STLGKKEUsy6GvRxrfDBtR3YAbt8yAncQQoqv25UeL5Qi7ccajcs5BkxTX7RYoGB",
  "key5": "4cmyCx6NW8cyPDHeaQvqSQyaWaop4vivM5msxDSuBK3SsJgEghgYsKReHB9ku6HuYW8msmbtrkpXcJoikrm45AYi",
  "key6": "63YTj792uwF4qej5bvi6mPh59auvatRkxZpHpz4B73JdwyCXZgCuE5G71m44GLvfW75jD51jjq9ZR49S4doAczJg",
  "key7": "4ehGRF8FDDpryRvwEkbaHM6svnzZ9Jw6aLvnYnHcg3A2xq3xLqmVr5bQsUAepovZzgEStTT1Kf2mPbA3AyNb1TLg",
  "key8": "3oWRUTtaTdm9HryoLJ8ytDKcrfqDLEmcg642Tx51SW9PuMX5cP3NCj4yDgqFfkWiUzvwwt3AcszSMVKuhh1PzQSD",
  "key9": "THjE5dycumAAvZModvfmRwKiTEH6GcvK1XBHPspxSoptognj78j2eXepyby4wSn9QBUMn9jhuBx6U8GWB7r6ZFj",
  "key10": "5UV58TPC7sewG5MjofvTp9NW2T4yAthe5A8FxV63W9opcuHrth8b3diyDSp8jcweMcoF8PzZzv3dQxdE7QDc99q",
  "key11": "2BZBzXmzB4FNXVamVwy3WowWdoaUR1PmmApkbaB9N69RRseoBEtze3aVxzJRY7BFbxeG9CXWpq6hRRTxvnXKp5Q8",
  "key12": "2kr2Bfk3d97MFdaRTyHWTx5Up4VhuAiycfbHsW6vjHrJTodh23Dg9LbZrsy7Ko2w8qVFBJYfbYV7hWj86AjwVnpb",
  "key13": "5SFfjQcbBp7AryBFYzBKpT7p1e1hZAfLYdEppZLVQQg7vTPdZcVdBZFJYYkR9nWvEH5JweWyDUKdUpwSbfk5dPwx",
  "key14": "5fk811avwStJDvGXppMRcvvYfFJbkkQitZ2haFX616U66Qqtc6spWCjgiWCvdEEHDzFdFYJXY5vaeS6f6nEUwwBJ",
  "key15": "2ajjaWo8eAA44FtZKTbJYc99aJKtnSkUoiSZeRAXdRhyYvsD3Rt5vEXEuBVyZh1BKyHdVwFt2feERSLkv9DpZN3Z",
  "key16": "3BwsGcijiD71vChSWvNNHjWguiTQdQakfPdD3dMfUYNUJeVdxXqcxacZp4yREDm3Ehsa62sxzqFyb4SUc7Hvsjsy",
  "key17": "FTExwLF6oj5CZ4WMaSYDwerqbSbnq5RgVaLAgbtVH8LAS5uUoL7JswUzTsTEyc6bs6YHJ16S1aVh61e5jzHY7n5",
  "key18": "4vvboRXnkwgexHThMGHje6sDq2MuZjpqMqLrvvtg1vmSZnPnQmZd6GqLAbe4xDRLpUAjRvGtdqDAawiojaSptqY9",
  "key19": "5RKACDpULeBib2TupT4a2bSMnvfFNQRLF7B6SHF6NoRzkLyqXXyCqdSWHUskrQecMPbBPRjZvFjUNw7Tgp3WxFKd",
  "key20": "3HyeQ9MarH2i58S68HkRxmdVgYKNjnqETykx7wmF4GDjP8cYJAZaYXUKbJL8ZZFniMFDUGUXcK8EweJpMn3rfNMq",
  "key21": "3bVUmLSxwmzepJiinShk7F5Sruac9zCARdDpHHTrEpxmeaso31s43VmDSowJ4aijCoAvF4MMD7qmB9nAaKNXZJ4c",
  "key22": "48yn4Y7gr99LFcRYZmysHR9yYQNsZPT8VmMNbe9PUqNNgJiLvBxZd7cNKciXBPFbe1YUwhKJq83xYCDqnVJ8XPhY",
  "key23": "MoCyGHktBco2qZQ9YjYRaUhb8Ss2h5FvQ2wjJWu2sKCfJ8eB1rbHQjuJUwEwGWdJnsCg4qJ8TJ56ckMYhf9hDQX",
  "key24": "2Pjk1J3MMbiKKs1zfwG3A4H3fMrBad7fPfqH16TDsxB13PykBVkaWNjDYwB6mZViK9VettBiWco7tkCngbbnou85",
  "key25": "2tyXLYF5ytM51abajAijcx2ZE4te43tnZoDc3ZE2gL9NvckX856vnAnf4qusscG4jVs8R5JRa8C5J3aYDMGzEE21",
  "key26": "5yy8aV4JKdGFSRihLuswiZo8wNPUHDcNNkyc5GNwRn8D7si9338EzQh2rbVH4zKR5YH4snbcijFNs3WnyJnjYSvf",
  "key27": "3hJMAk7UUNzeuYmsRmpnoKpYqDNU7ZhgytHgsxgFKg4vyjWJGDmJn6rts4P1tmPnetPH4etzdMGQvhTcepNwSPtW",
  "key28": "53EX5UKJccYxn2WgoudKqSrejHePsgv8BwarftTaiYq4SNrVhY5x7ms1pV1CXWH7HxSGGYJy75w59wtJrdMVk2nb",
  "key29": "3zAU9ZDQ8MVMWg1yNnrcJr5JPstjqDGhqdEbRrut9KbMj2AC1sYETwLmuDPsPcGN5jWuoyM8cLg7xNF8hhPtDYCY",
  "key30": "26ByNJuDA5cruQ8HZXNMUfZXs767ZzVSwzmid4pBUTvgwtP9AH8H8eRkiSgAztgdtT1wdenwsqWxBmeZbjr3ruWE",
  "key31": "5ikuCr8M8D82rEVfohGHBmp4c54ENadYqjXezeXzd36AtWqS95PPPZXxF9BwHSMcDHDn8vYnazcUEvN1aAuBo2Gu",
  "key32": "2P3j9iTtu9XAmyWqD9z7p9zPGpFbzpEPT7zp5YG6w8apKPb5sw2RfVirXA1VzBVeY5ooJmNhc9rYicZsw7wBAvks",
  "key33": "4zDLWgY8fvuLHQFRCmjXMxdjqhYgk4kiXidog3Z3wA98GGxfFKBawX5ScWz2jwX6G1XXBZMA9wbwssd15HZbz4vw",
  "key34": "5wWnaGreP6T5AdwfUz2Y4Bspsiec5mgx9CWxsfsbz1wjDPUMf9irfg7sm7EYDhZ3AR53qcXS6ZkLRwhCM1ULcA24",
  "key35": "3mNoMaDTchfBwmxMS7JSXTMxYLmNqYnZ9BrTyiCeXnXBMRPm9Wpa11F9sNRMBwFU85FGQNn1wkS7EQbSfhmKVn1j",
  "key36": "57rwYZcYrstSgmJFj9mVcBE2PcQVzzpyw2jyRgreXdzSRHWjMo9YckKjdheW4z8vPH4hzESK7iRtJ3EMcHiBnzxm",
  "key37": "33KwafRJuMhha6CaCBJ26uLKmKQ2Nesq9wgmEYb5Z1jLtcLowFxk3R2NhJ8mR6ZwB8QXnTDfNBvMgSpTFhBhCf3H",
  "key38": "3zdiKWzYNnPS5sq1Wpayctc3bdUiaRUEUf8yK8kaxeiedkw2MhK1Rcb3QUCGvDgiUGdZA7LZsMeFh1LX6PLujxt7",
  "key39": "2UD81YZHvZGjLGATVbyR3QeWZZ9ayqrKrAfCoMcQpKos7i65aqZruUFLe2GEniynEBndsA57pkq8BCsBvr7PWLc3",
  "key40": "5jEeL9dM3UuBKoomWWuLJV6WWur5tEbK15jM2aByxvWUGheJWjLu3Ffwpbpf7a5dYPVwphiknEz9mxCKJ2Jz49td",
  "key41": "NDrKxABqhhkHHqA3PqLT3e7ZNZ8hEmpZNxDJry6bf4UQDLMCguX7dXfyvGQSMvXSjy5zchLMP4Ktybn2ngE5tza",
  "key42": "uDcEYky1ZV6TxCiAq2KnPGCiE8Y31FrXJ3HfLB2GYvebqtRMXDvxoUmfemgyk9GMXQbmKVgbaFwFVqskJG529pg",
  "key43": "2Wunja9pKBjKqKFb6nJg17gneNXDFvg6azK6qqDdipHA1St8BgPaesWEBFWnU64VRDz5os9UDsKcRbgQdpfn5NPk",
  "key44": "4kU9UVbm3tnJaw3L2dxr98zaQ7pdjZtrCvQjaxhE6RUWNDqjvvqh946Qy3xEpSoFBN22FPcxrNSKrhHe1huX3wJ3",
  "key45": "3xWBueMXiffG2NQwwdWASrrsBRSQDuUsTdUL87q8hFKDHUrX9Qdky2K8aPgn8CHdtMdPv1ZXR6a2zmmxFZVivK6b",
  "key46": "3yhGmnnGcV9q6k5zjU9wna8jnsWg32qFSnQyTmXsG3zEQp3iKuqsGUNiikwALRowSn6bDqmAustv7UzeMD21cqL3"
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
