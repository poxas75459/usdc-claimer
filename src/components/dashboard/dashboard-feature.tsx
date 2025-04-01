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
    "2XWeedfMBw6MZEbzDh7ZVUmLt7fWmeTVPuuRA5KFN4ogxHqgpc5zHjPc1woWj7Jqr6QitrpTccANXjRcJMucTF7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W3wgPNHLccVC3GqexeKvRUaq5eTBsmgQcubEasnffqqcgGkQCNSGVkx4tXrzwQMaLBhaiK91zvLWxjrer94aQhx",
  "key1": "B5QYQLe5npGhXpaLXsHrmyorkJTzyNXpJK6gC6t7N9dnHsvajUG7maaqoQf8KFp4rfkP7bmBr4nHJJkS1qNadms",
  "key2": "3w7PHDQMZ8GuB2Wzd7t7Gih6RL4WWaCCToxiDxdPnUAaiuJgithEc5FrBNQfsBFY7gt6NqwRQ5f6ARB9ScYCCY7N",
  "key3": "2UxcbjrfmapKiGfixUnN16DbCX4Hgy8ntgi9pqPVkG99EPsvGTP3Gbq3yYaubrWUg7LGszRSzuMaGLyRpP2eZHTo",
  "key4": "3D5o7JCqECiWgKbpVfRouewWbyJgriEu5KL8cJrFe2LW4YHSK3vCfnRkje1VyWJ6jLtZjJKGajUub8pnA4TGYf54",
  "key5": "5NJaHVxU9yYSesvXCGrc249AJS9gATqbkSrRj8TkWXmQJLAgX3xYpxnFQwEb5F9q2Gi7gASubCgfqd1HPXqscPb5",
  "key6": "4YQpkjY6LVewJYr812JnFaLBMNYdy6UxuR3XqY6f6ez7xuByj7brH5vLZkZqL4fzuTaWLTAJA7MTcVT1igyWXgzL",
  "key7": "2yVios6KXXVZVxxzwDPfEQg1QJ6ypWqx5CRCvUFZsXfLoSYjcUY1VdmRFQ2jMpRnPvJLMq8FzTQh3yp7Hd6whyip",
  "key8": "CPJSHUJ3owbSa1icumU3XEGZZygDLDtdxBeiacZrm2X87oyjr8m9MhxkhipkmV9oULp2ucRwAMUafN5Dnz2uWEa",
  "key9": "3CzhRXeVzmXZ3nByTxsaQNoy1c8pQZx8Nd4UvGkGWYA5sA1b2BjKgLC16homDPcdZo3AGgzRdVgTVcq46MufoGRq",
  "key10": "443VcJZVS7muNaSUCmDS591mtsop3WxxYN1uuKrAeBXpdcTBW4jeTanKg15oFoNE23QJTKuxydieu6NfNhuiFGpj",
  "key11": "pp5mJKoGeBVgUzZBhBayvtJc5WtQNHeGfikpcSpMarAhkbAcxxAABJzfB768QmwvFBePvDxdrSqVbkaStSEjnV7",
  "key12": "6rupZCZ8wTuHkjeToagD79Bv1p295qctvKiTZzF5YAhtzk2ynZRkVKoJ7GA5xxreYP66DdUSDyb8BMNx3P8VHkj",
  "key13": "5CSwxyd3zfMMWmxYyyKAe9qYFQE2AD8aYcDXjApL5Gq3xNA6su5MDXJrgV4b5nWQ2yYjogbvZGghary1Wn4caMnv",
  "key14": "2PG6nsaUii9iDn1zRccc3tHdnu1w9UvMLL7GoN6wC5WW6L5rRtJC6FFZ1JWq94RcFgdkXajEQ6E6LTp9hpZjUyG9",
  "key15": "5txgZetUA896mFqqqfgA9s1a9ozZ2vt7EXyf7T89paES5wfyRmm9Ay62Dfu2s6iNbjn6tdFcSLW7AJmGjzyfTCeX",
  "key16": "4kACPB2NWfVnGDJ5jAWD7s9LBggqSA5moDRCz9HxW2J6qngcAx1L8vuozJf1yke2Sft6aJAmB6SNYZyh4jrwarbe",
  "key17": "42RiwHazEQUTLpr1JqtaH5tpiTvSFaBSHeWSWTR1RwWt5ZfApm5EwgXLAdnz8mRXs5RT2Vk4u6fYLnLoJ4uKyZTG",
  "key18": "4uJz6hnrQ1JcQba8DSHgn7XNgi3hLsAJ6kUe5Gi7r5bFVTppceTfNAYcrb85Hw9tW2sPKQNaMC1pwCPv3UiojiXf",
  "key19": "4PbhdxmfgYGcu8kVi1RoyvJB3sLb8U54uzzJ36odgnE5z6Wzi3P7oozBnZopEYM4RGZNxZzFjjfF7miay6tcvj5i",
  "key20": "5Sn5No9atyTh7jtjJjefHETuccpvYu7A2vXixmYrnq6nn8vfDSDAdwyaTrFFC8zqonkWor61LkaC8hp1z15uZUBs",
  "key21": "2PS4kHYyWh9hJMXVDkrSXGHPZf3kDkD4iS2WzTtxS3FoU184FNK31gfsDskib5BbAVzcVAqj5ishCgmnXR8GQCaU",
  "key22": "XRKHzLtD4f9m4LN2VbgCxfbmcjrtPWxwAAhkPUaoeKCYL1Frf6Meh4cWgLW26t5u2fyTxV1K5hKyT7w2wNb53Sz",
  "key23": "2geK3jXRavYYP5VukmCQ4AzUZXWP7BCGndc6Cyevoe39pE3k4qUXJF4tdmwM5e3MkAVNdm1AMnGoV62ZvBqiUkjk",
  "key24": "3LA9RYjayo72noUaSjeHt2Pis3AYKbAX51Ww9wm9cnw5fAybwbAg6paQAVCdDRcqWX3ZqoktMdbp5TCXjmwSoA97",
  "key25": "5iivRH3QLK5f3vFXkHyh7uzecni2KW8Yopezwjz6GMRGPkCRbWxroZAqorVBQY5XuWUvX1DwVSvp5CiB6CQAYcXv",
  "key26": "62aSnkCMUCmwXoN7Z5obkX5Jf8wnn8ALmGjMs4Uk1tBU6c9zrM8rEXRL6m382zJhfPfCAmhynFQtG9qJR6qfiqud",
  "key27": "28ztBUJrqEjkpd9GJ6r1mPJ77ASHiLzuQADXin8Z51qoLXZ7ZwH5GMTZr3fCU7TTgws6Bk1Bvo3aqfZzT1cpX2og",
  "key28": "3P75rVwvM1LJ2788cNfujqWLTmTcannRDpCJ2m6NNDEsYB9zZNsWmUZqbDzYzBp5S3z4rxtbzZUZb1jj9fR9oQQA",
  "key29": "4eYG72BSKdKpiWwHzwDywxSpGiudNPBzj1RncjJTYQKUk4yW59mVdadgBfkrkzhRfhJbAG9jUQ4Msf4kdnte1aSa",
  "key30": "2n1W2TrC2qbJrpHvGP9Vus8NoPzkYgSk7RqGC2QPKYdUGGoX47coLT8s2YYYpKBwbbCqbzKWytTnDSDQP4dXaEke",
  "key31": "5Gn45gwaNNGdCGejRxj3kmK3YxocZEERYKLMjpJNopzKqyT95n7EJXGme7gAAJvnCPNS2H5R9bdtgNBmk5kQGvjv",
  "key32": "2q1CdFQZpBWPezBwSiy3CQiAbLvBWjiGyF62UeHnQvQPe7dePwWTPS3indnFwBAz5b3bXhfE9QrP1eQTTcUW3Crc",
  "key33": "4V1Nh7GrHNAxxKgdPkikp6tS4N3GYDPjJtqkUUFFGnBmvECdyHSFvD7CauRszBCZT166oxmhFdjAMnDjTSAy6F8w",
  "key34": "V7EWYcud1sdyoQKzpAKQHMAYP6NYrDJDDLbBpWLG4pp9QXS19ep4N4jGs3ZydQeh2ytVaR3n3M4zJ7px6Wak18p",
  "key35": "3vGqSeN1anTKYXPNKpebRAu28w6Z5dHe31QKQg5pJ6Lb6Z18BHZBRJ6UU1HSr9qh7SYKZtCmxYA45E1TR1uwywAM",
  "key36": "5yxBUtE1NxxCbUNADmYKhJ1kuptsQJJdkh78C47AU2n9jCFdj2kyvaFxj2Z3bzS4Lpib1LCju4BZTFQmihkMq6rP",
  "key37": "3Azcg2vvNMaNQWLmPGV82WzzzXzYwR3Rx9PZTGJA8YNfK5PX1LUucdGio67gtiWLpZ95uprENaydjY9t3S1Gzh9u",
  "key38": "44wj1dMijyjbH14QpRqcqD2eJXxHZ1bTcdF2ZS4H37Uc6fzgnyaps4qzJRRTbBZhzaotzgFC3CL2rkptLugiKj6p",
  "key39": "2VeV437qYzzmWRhnC8wGE3ziDchdoWRxC7wm9EUks5V6KsTHPxHMLY92jpPzL2bxDh5YUZGqQ7VzxycXGtTuxR7y",
  "key40": "4DcCjLCC1wtR1HFFMKBynmniTd7xEcrT4SozZ2WAzyz3XfNyJ8V8z5eWf7VqTKTNv8FkvbQHuk7Jfjmx5ETjpoJj",
  "key41": "ZT6bp5v11csHaweNAX5irKXPptEb4daj5Jc27yKtubL6EBBzK8NGs7Qt2PJKkZs9t279i6DLaL7RRxhvWmUX2B9",
  "key42": "3gtHHoZf9QcuMxYZ6Be2MjuoMZWwmysNRU6qyT289fQH7nL8LswS8BWSajFp3P24cgt9Aw1YtYWRBcyGjPpzzGkY",
  "key43": "424siHgEBx6j51w5VHfbx6p5kX2cooY6FRC2c26Xy4wPx3APvUqkWy25NUEvdW8QYTdrBDjfcQL4WrAvFUamrSRC",
  "key44": "5yd9DSm24BUcHnVavtdoQd2uAjep8tsdCS5NQrE184daZkHSvfYNZYo4nnY8yQabLVLvVHcSEfMpP3XS8wXXSd6H",
  "key45": "3j5Lru3KtgtytLm6By3xuspt7Vn2NJiEXu7RhF4itszZ7JnETpgwT6umJEYuNkzms2916sjS6NF7ZNgf8aSbjpST",
  "key46": "ai8ohGXazqh2opgc2tZUX7Fbhd6JAE8m6KRuuGhj1ZUJWvkHTVSnGrhpjiGSpKdMt9DGKDX8Hy2fQvukdKcps9W",
  "key47": "77LJUEPAwUXJCmdFs2tEDUcgjykfZc3wFdXZDdWLtJgLGMANU6zdPFvfAPzkatx1MN8EqBm8pQZ63VZk5VtgDsz",
  "key48": "5ahq9aP65fGvrEpS7LWrVuZAy3QTeD4VMgeibrz95UAnCN3m45JmKHMHJuNEQshmn6mKN86nZMiAyn1FJoqZHdh6"
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
