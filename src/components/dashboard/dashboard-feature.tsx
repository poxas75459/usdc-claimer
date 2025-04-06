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
    "3oC7VzyvaWpwuGSGdG5Xhoc8rLWdW7VeYBHeiA3L6UQjWcVWbQA4FfFxmqb5AbUZHpN2VuR1eYiDYyDUpByVxwtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tbfkTwrDRRY8XwFTvLf4Ma69mZqEVFxmtuLCaPbNJ92wW3X2bCBa63ZKR8NEvxWnAjc2wKrtk8XYfjSRgwi3FRK",
  "key1": "4t2LdAhuvncwqqKddZWd1FRdjdw6CY1n5TMvA4d2qSnYD6J52B6SbgdLjFHDgKQCxtyuMn6V4Lsr5j8kzpAoSjiN",
  "key2": "4Zk5NifmVgBvLbNQhN2ShbmTw3hQS1AVGUi8T2KUgh5yraubJGt2aP3kwe5n83mREatv8iM44V3NgjWCCu9i3iGi",
  "key3": "2D1o5VfoEJNb9VqqjdL2PKNT66DHCu75WvbfpTJQiyN4Xe49fyoSBzMsy8LMNEHykRaHPftG9d7hhs7auVJLY85i",
  "key4": "3zLh8AtT5jfF7717a4A9fMSKHYiD4tfgQmgi1NDqY9br5c351kjtbsv1poTQmQxbJSKguiAYfw1kgxEhpYpjaWTA",
  "key5": "EBZDnssXNFt54h8daWFtrGPszURF8dFLcQuQbFS4cfUEdc98SnZLSNXNUfc2hifGMm429fuHpV7VJRAkKmRuKm4",
  "key6": "saQnAyEUs5BJbjkxdcBVCf8nGviusxEd3TrSZgVkNBGpREbCDT9xiCZMsSrhZhfTSYsz4YT1PNzWssgyAuzkc13",
  "key7": "72pCCEBRXx2uc8cwT2YbaX6CzZzZ6vpHWuuM1QaMr8Trrfoy4pvBQ2sh4WSiKmgfMDzwXw7vpacT8v6X5X27D4C",
  "key8": "4BKZxNN6fyYVc84fa4UjLmi67rdeqxDkkbiS9m8VoGc8fydAnvMM8AfUDJzjX4iSNkHnmBsAChcypnGvW7CUsjgJ",
  "key9": "4zoU8W8w8AevCUC22fVUN88RxBFZnp8qyT8uSU99XoMkSVRRs1fvKw5rdUrGFLDFjHNpSLJh8eWQL9se3Do1J8cJ",
  "key10": "2MRtdyCNpHXE8jTj5LTxhMYNRSt4Hw6Au7maDgr9w53D2UNjBdqStNDq4G8R3HK9khKTbA7mjqndHSjpPFaXYZY5",
  "key11": "2wPBPdhnqACQCNw5qqWbadNK2cpTZ1SnMzJ5JbtsEhzJmB1641MgEZddmMkVbGevnpXDRhrmeN31cQvDMk9a5LCh",
  "key12": "2XaGDWXrPWfRmEY9Sm8eyYHp9BXKV6Zxr32d2euwocQW64cLjENH6pMvWRiVRgm8k8mho3rAtdo55WLSEaLFoqwA",
  "key13": "4XgadBt1j92UexcstLY7zUqywTv2A4LbsLimrGbrjapGTvzXfC8QJpoW3TtvevRqtzJSmzv4sTtKSySmNYwk4nGm",
  "key14": "42GDM6QEdQJNMFKwREy4iWyVBQh782vAnV5vtfbLcn9ofqivwVDKn52Jkr7qtdAa5baSznJVr1oWtDvdWqzPDcLz",
  "key15": "3QTMnmwjFVaAVdiPj2vuvSEioGvg1CcT3bgV5CLKcR6duezvtDKpB129sUF4V6RAovdxQp5HDhBtbDrxJdATX5rD",
  "key16": "4WQ6pLUPdQxng4nZTkbTBokJKXakK7RmxcNrRALA5zzaLqzSBLz9uH7YDjAh3NXWPVHTWmrFobaxgEiiVeBZXaAd",
  "key17": "3rRakbsnazbD7QGZmqYKy83osVZMKanL6M8KFqb5txmiXggxzzjENfGYz8YZpReogJEix6wHETbrs4sdSGHkYpfT",
  "key18": "2W4hf7eimYiZjyASV2JRHntyZLvpe1sGakjAne4oJSmViAsuR6SyHWCFzj8CMUZkcTZGHPwT4Dt4AX4pLTrrbvVN",
  "key19": "2fCi9tMKm6UjkiTfeHM4dozKsWdVNDhYZH6oDqHGsybUoXHv16e3mU3KHbBGSQpsqZ4aELzCdKedtpuHctjiwCJM",
  "key20": "4X9aP9pS1icd9cGAUrqfWPEZdZJanM3Mk5EFgJLgSyapjUvj66tZtiHJSukgjT6X2q5VQvdnKpjXoiuA5hah7SjQ",
  "key21": "4C2LGkNa2wjyFtaumHY189Nh4SX8QTfUWzFtYvJnXnxarKd1WcsEgF5cyYx6f8YiUMhX3C9trNVzm34UcNWbKwBP",
  "key22": "3WzwkHyLW9MhWJipJ1voU4ndTXBtDu5YhQywSkjb5jhdzAMcccWCPQaU68LDJ2ahsfi4NoYJkWmL4pciCLUfJF3r",
  "key23": "4DVbtK8kcAe47wDY8PmymRHqXtbH674x5JLjmCLVu8oJiRh9hwW5WjR2z8WbRXuUkWmgTWwUe5vF9s2Z8PiHEy21",
  "key24": "2rW7y87Yp4KRtKNMzKwecV9W1g1B2G7kWrpeVjCHQBeyk8f4j3HscBRupmSRJuqcHHVEThDYnwghRJ9wzoTUcMBp",
  "key25": "4beCefZgz9X7VXmAcgtdnTpKpJySR69p9w8SgYVG7Tr4bUAD3AN1vmDSNDJ1tkqSsdT5kZaVksV2QxLt6CQYe7Si",
  "key26": "2EAtkGTJQY9wGworsxpGd7edefwPBVwAzXATuNJv3oJZTCR8kcr9Z2G1WAmN8gqUuhxJXXZZspEtqygNXqn7kKVk",
  "key27": "5aiQAReYADEUKdaHXJ4WY8fYpzayuR8Yybbk7WX2qjUVXSH74rhsomZDfmyeUJS9EUR5tM7UqrYRxWgshnfy5P92",
  "key28": "4aDxc7JMRbZuvTQVBdYU3aPf9YPao1vdjvB6hFKfaGgjJ8xj5iCQAC6PYkQmZzW6hcF4Hy9eZSZ9iXykYkYpNeB1",
  "key29": "sjDqkrgHNyN99HJkFXYN11yNMc5Bc4xSYKkDrXc5JmekV2ZEYkdcMUEVvRhCjh9W2sdDau4ss9sMwyt3TYCHUuU",
  "key30": "2RPuNmkrPfVzXUeDodGtueGgyWYBVYLLDBFpZhTaeJ7TGkf1wG9zGMQiaQj95jWNW5b1ocXiMfqnRdSf3pHfNHDi",
  "key31": "Xj4p33PbB2dyni9ffBzdDSYozWWV5W8A2reRYGr156cVApbmkUa4Pyk6ef1RnkwD6XE7roMYfwy3smeENYq8KWg",
  "key32": "5mcHozvkNzcfc41M4iTDRnC1SUcVh5ywP2CoaxqueKTAhWDdZweYjKJeic7bZAy7d8XTxNUqfAzTT43T4bwU9w1j",
  "key33": "3fDL1Tq76AhceG9qSo7dXDgFRHkCYmNHAwrkhkhhPTQ8CEZDB1BZBFcrPz7BCZBkBmFTS1ZE1wEYGELJU2297MWz",
  "key34": "4gh7dXrykCA2dJp3B5NFREnP6wMhW5UaMpuyPUEQUyHj5ShC1mmRTBaqhMAQHKqXN4kvm53XutZkZhwzdC4saQF8",
  "key35": "3owh2F2rgHYRL3V6DYr5QJq7xXZqov3DCht37bMDafgRxLE87facdkmpjGdsPkM59P6H6omF9QvS98MjASuEhZJn",
  "key36": "4p15JGGEcRqY2qwaPpacQsdpMvrVeNhKbqSyZRhLKSZekeJnb81ZKKGBENiMUtRTGHzvY61wHehqh9kNCxVvQomq",
  "key37": "3473ZUr6fz7hk9xu44hiuXtEUKHmMHYfqx78FXLcaJYdUE5kAwHPkmBa2ypL3Eum4FbV4vMUGAteRegodJjXgn5Z",
  "key38": "52YpqZF1rQ1c6W7c9sfTPNPCDU3KVf5AGy7m1jdzYtcG1AT1zqwWFNWu8cT86ULB8zcsTU9e7AYUE6C5CMLz2zyp"
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
