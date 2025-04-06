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
    "3kppeoMHJk4LcwXGVWiQk8ew5z55kgitDbsAocSZ6CEek3SUG1yovi1VkAuAULCUb7EvozWExK17AVnjnTiSsF2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mcmf1YbDf1xACZaQPqypFRmNP9g39bwvM6upUVg4Hic6Aa64yMAuzdBBDYQJyzQKbSe15nffy4BjDW3uJhG5AWT",
  "key1": "5sujnJjiLbUJmYE2ZHWUgwwYw7qtMwT9bJ2xoAvCp3KiNwT8mS1nYkwnVji95EJEXvhPn6iY6NyfuyK4Yj26foCB",
  "key2": "4b7veWDFnSY1EFML5nZqdRFWR7LyJdnVeVXhE7rocWUafipL4Hbuz8nkpKDcJPKb5EdHZ2MndUygB3tkt3ym5WLi",
  "key3": "5oJQuWPQvkLMAH33v4rwp6Sa66SrRHjVKezux6pC7dvCAyCvLYsLDQxbHBfxHfLrqQVPSwxqhSnQErSWCjrggwza",
  "key4": "5mbRAy2B7pDfPu8MhRG1gk9z7APR54fM67mRjsRMtL9ibkxFFAQX5VBVxX1NnfNQ23Up1Zhd4GZa1nZJWrNHNpRK",
  "key5": "3pmbwL1vc9pY8FHPzvgA3XZrWTCouQBgsm5eTi2J1rL74vyUBiYhRbaoUxjECqvwpSa8wqvBeGCtiNEFPLoE5peF",
  "key6": "4XTvTDfGpFiPRdnSj9FhDRMmgUb1YR4TwmRVbY4aCk8WXmS78NmPqdLppys6Tr3sAYndMU4j8w4CWX2LrJFSAYMD",
  "key7": "3UngsMkG7GShqwjYn1bz2JYHtL3hvhwvxEoC8f9dtqGqRW92su1Gxg77P4B3XpiRKYiMJBd94PBzSnN6QfqxKAX9",
  "key8": "66D4k92rV9qdXTJyXEDdeFyXBk6XNei9weikoMz6g5riFr4MRzrBNPd1duTjXtsLGQq2mN4Db1aky4C1Pw9iRT9M",
  "key9": "38LnUorwRkV89uJKY5kmHFVzt9Sro3YxFfd48UAYYVhvruvPXf3aVT46huazsRMSvsHKRmM5jgefnxPRtJGxhvJp",
  "key10": "Kta9bWkLUkkYAvxUXpKQ41sifzMmhYuAL1T4wvsC9LYpmbCu5AehWoPKimYFx8snZ8p3C7PX3XPH6fNJGDuJLUz",
  "key11": "2fXxygmY7AVP9mD71DeFjqFDi5ALcNZz3HjQALStdyV9tgdZi8kb3GxVpLNBXK1gzaMSZNQfjjh85LvwVXuEZzVs",
  "key12": "4UrfVRoYfvAqCY8kypUAKnBH2ULQe4zx9MyNBUpZAU3MFtLoihPv2wDpH2ibanjRyvk7iviPoDhLagNVbcfLA899",
  "key13": "d74GYJ3XiozFPu7bHpV4kEJdNkq4V3NdtwNmr9UpVPF5rHHqhpMcA1RXTo6stXVeqUBfQRCxE8qHorsTKS1tfE9",
  "key14": "CnHC6xrC6d2Bq9wkRZXq1ecLtiMzz9dgxQhPgFb8xbAEzbFYrqB9XqhoSRKFVXLSE5Q3naJ2VZHr9exoVHStXJR",
  "key15": "4Vd54ny3V7N97aSegq7qsFYG1CMdoThpgax3ostwBb7fmi7zRBRfMAyRvVgRNXyFZirsy8EMJzp4vvmM8Eqt4aDu",
  "key16": "Y1uyEZ14n2CqnXEBWT6Dzbm2efvXF57798LLQuD8M5shZYq86PjaDSM81RyYsYJ1gRGmpkHvo2MjiemYPzDMqUG",
  "key17": "4msNg2wyVZQ7Yx7d3C8s1YYdmcnunevNbaA92BwtPPnpJsP7usFeLWsFGUNd1RVu5muEsTFXQCwA8v6AAR5ivcdM",
  "key18": "2dMAaKGf3x475hGDhzkSxQPQdkCAfJ6n81e9FJe3nTVJenDKfE3w8Xo86M9nEUpsfdPtmASRgmDEJu2pbAyAf4TY",
  "key19": "23SWRpFqbWwTkksLXsU1ThPZLwjQyRzKz7SwJNz8Wy9iSoLnEtQeiSZw2XhJovYnQjKArLpsNBuuLuuX4M7pxk4k",
  "key20": "giALskJgZT2LpG4tVzPRM2s9sF59qxgHPwFHpw9M6JqYVKppQuEfvTxefdhQWM8bwQam7qSbRD3bNR8qWCybg1y",
  "key21": "2LECXheRdftiTBy5SUvB7ayyJK3eU3mgG9uen3xVYe3vbwB2FM2RNgJv4qeVq5J4fSjGPHtyp81f6JQT4FM8XmEH",
  "key22": "4qmVM9hgo3MrNjJvSDes3kLPdDjyCWKtU2nEuvUhbAU5koV7p1xTx4Qn6dmUe55ZppAKcwKuuQbmNvLux3GGST4x",
  "key23": "28UChZxBgMvmq83rVEnKdXUo7yTcKUkeVgpHKyH5iLafcMZ7Jb8ireAynfE3LyKU6xBfxBKRt8B9KnwYTJM2T2cz",
  "key24": "5BhmMcmbw2uVntRNop2WoU1Ly9wsTpbjEWfivULgKQMNv22U89CwNReop8XeMQAUYt9m5WeK1eYrCanri3iiRsr1",
  "key25": "2fodUr7VycQLjREFuA4itzMsWKBQDvuHPPcJq5EFKWhEX7DzfJkgq5FJTVPhHhsitL1uFNRow3TMsLPneCbp4o83",
  "key26": "4L8qARSsNrghWxcSBKCGiGT4L9Ubpr6SquVxrMRXjVaAQP4gL5JM5Gex89chXrqHUKriAhAPMaVBYgde1u94ZEPr",
  "key27": "FueL1CgbdhsDm5heYbHVAThQTynnP18vg9a9s5bj9cGCntEKt3TXyKUBLQmUqZ4YswFpVngkhdLa1PvoH3PhmAn",
  "key28": "2dpS6oEySoBTfsMSPDmfG9EopEZGPZrdLfmzUQ9LVQ3k5waVk8k7avmnabyfbKRA7JnTVKjB5xVCsDvPRGwZybvj",
  "key29": "4Eu4tk4MEcgTxKV9hZDGvapb5nacMeEUrzgk9Xn8Z9rNjBxXxvtuyNRQb76FPe6B2pe5m4DKdBrQPFuMGV8AE4AV",
  "key30": "5Q5tUA7WGmb4V29grP7dW4KfKVmyXfJZygLMZxCNeQ7Y1MZiBE7VyigNVMzzqHoT8HvguBcdj8nu2XgLGZ7pcHgE",
  "key31": "DdMfD4i7XH7Tbk11o3xbxN92urCcgyx9DoW7XwLw68WX7VWw4RVboH8DXUC6YNXJ21WztxQj5LdjRPBeAZUFg4r",
  "key32": "253itpyZmYEENmfrda21XU8sdb7dd2y3a1g1DYsKw5qaaHj8JFVzQwAzUpxuJGAbZ8AwiaRzptXgPiPhS5fxYKj5",
  "key33": "v57K5sQQLZp8TfGf2CZPoES4q3smhAoJHqRURS9bQwZhXa7nPyLxkYz9v3EEG9cYBdU3B8EioKsSQjQXcEATqu4",
  "key34": "XSQyXdfHEGsT73sq6TQorCkgfsHmf3sbLa6WPzWryMmttHbDGmpM6KgX6xoZNfZ4vAcGef7w3bfeE67hWRNRYH8",
  "key35": "2Y8smYpSV7jDYWM7apAfcsr4GzZeu4QfT7RRjwdKu3AAj5ZfxDHhTySACriiH7QmTudKDccos3Q4giCTM8nSxnEV",
  "key36": "3HpmqSVt2UY1Gy5MY5gewn5M5neH2poVtv42fkLZYybMp5TXoqkWfc2qSyecfpEri4LARH3FgfkyGyTY9uhP4chE",
  "key37": "4fCvaoRRP2MRM7Trg4GstgaVUbgg6JdarSMaji4sKEwQdp6GZKuBCBqWqU2cLii26dnBs3MBtCeRAQAsojMeKpwL",
  "key38": "4Xp1vzWm42MdboHuk2qxgwvphf3LGsdqAVCmZAMnoamEK9XAZNEB8LucSiwo4q3AizVyJwwhzi3CGp5urnA2ihV8",
  "key39": "JMAvZqhwn5971xV8QPAY2vPnAmoUyHTf8pxgNNF2yHoo3jNm5QgCmv29Zj7t2vLsTU6Lf78QismAv7WNWn8V8BD",
  "key40": "3iYC1xopezkRQPzCJZKPzH7zRD4nSvA949MeokuV7tHirxsbc4KveBQM5uLdQ5mhvC5rCJDTCbxaDz5NsRowkVJN",
  "key41": "2mZNnk7yVWvfmDg8X2QEK89n6K6xevtBQiBVQft6bkiASxLQdkvyzT5hSwfkSwJxuBBbUcH6dQcFpQGvJ3aDH3VS",
  "key42": "32iLu4yTUAp5Hhaio17rGygALnYYB2TZJwqEmtZ5JxdvPc1TtZMNx7gPeq4dtrEfbLa9izUUmZoJ7kh9s2qDk61R",
  "key43": "4bZbQyJTgYRq4uNVfxGeMQGDhERN82F5xWndE1pTCpLs57UBhEo65W9h99VwxnCFmxHyvbbcj6MjScP8mqcEgyiq",
  "key44": "4ziUYktCNuDBdfomrNVQdhhMytohrznbzUMvHL8zeGXKEGCmXqDkCwXWY21HEeo2CNSVRpuQZ4sgx6ZQTucd1Qob",
  "key45": "2yZ9Vmsp8pKtdgZnymQwokNxyMZ1vwS6ULT6eh5Nzo3AgmH2dhvccHQ9uMLryVzXTc6wBG7DkxrtduJGvtwcsFiy",
  "key46": "5VGwBtzPh2LDTAR3Th4KGwtcmVSQhnAGMHJng6pjPoykEN4uKKVAxy1aN1J4DzsK9cQxGBrZojgwKvvsvPKwMhj1"
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
