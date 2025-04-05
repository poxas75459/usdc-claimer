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
    "5MasDSCmxR919xCNZWxobEUdS6G3nfATbfxspmB9o8Vzd1NmxcZTnDAgQjHNkE6uH9cXdnE5oB13BaRYjCZ3tKhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bG1dpS5Cq4nQA7kH1riWMXwYn9U7PDqFncmXjS9t1rnKrFEu257UvPUz5xM8RSLyeB7GkHCXpg1tBLcgZULVKpv",
  "key1": "3n9GHe2szhnK5fwHYnruGk1xPQKunk9RBTtQZD5awQznJ4jvFf3s4TCKHAopnRoLK56TUqNyof2LXUPYCoveft96",
  "key2": "3zmPRwbGrh1r4CAgrHs4Mdc51wKJvPMCL1MPT6qe9jRvh8K1HKyC7zevN9kdFSufMFMp6SaN4RsqUZ6G6vxsVn9M",
  "key3": "8KUSBJrLng7xjrnHX7GZcuL3Lg3JP2zJbJNkQr9GQ8miRBn7XezaonKNYYpQxySpkpu5gpNgJHshZ8wQTkUo2Wk",
  "key4": "3xWZFgDs7WT4SqZF7qghqxAR1oXEiHpKVvjYTyPAwDuPCTiDXHJBSqmkiEcHcXUh1eqA7oxp5D97yxMhgGfd6nRa",
  "key5": "4fwvNGMpbi57ryGpsfnmu1dTM1V4q7QAzNY96BgZdgExnx5u6ygNB7m9BknpMygvaQLNDZ2KWeZM433CXd4K9wVB",
  "key6": "gV2ry4cndJe7FCt4t1Fy8Sy5mcTACF1sWToar8pEEFL3eiCdyaV6yxZGJszLzPoZ5nirCQwXRNtw5ganHxJcFby",
  "key7": "5VF8HyXKpj1sek6R2h57rSanNrVYipdEk6HThUB6vzhbo2pHg9MVPQsv79f3YLQn2k8Q272a3eriCNNt9uCa5G3W",
  "key8": "2PcwN8f7Dy4Uxasn3MYjv7vu8ZPA42t8RGgkzZv6XgNWVTYqN9YhYtNrR28WJVdJBkaQmpkni4kS2D4qtkdnM96C",
  "key9": "2tBbApXjkjZgj8nypdV7ARfp8ney6uLCmueWMfaaQH8TRKU81kuh996ii3Wnd2XQ7ZdyAiZ2N8o3q4TDwDiNwX4s",
  "key10": "4ZMUfqdWqKLgnezQSBuJgNGKYm915EaRRCCJaCSXksR89dfefAq7bdcKvcT8gDw4Zy7SBLXcQRbjiAFLeKkMi3QA",
  "key11": "3hXdWRBnC4hRAgWUbuz2rB9qadpnbVdfhpAb8R1v9XiQDefq4XjiuAP1MNej13CAqGjfvmA3VVdnoK5z6iizyTx6",
  "key12": "b6HyNvCLyUN3zKAVMUWVQ3bQDR4UFkGoMMbYVSx2ptakJ6Jzp4zzqUdcudzhg4ZNvuLZ9cvxiJqHk9rUgguKaYJ",
  "key13": "58TAJNmT7PW53Fc7gFQsEjExnuuV5yXKnj8AeXgaqsw91uzxKUidTCKTojNhAySfJaun91CY44KDrRipYkmagXut",
  "key14": "wsbRQvY59mpJ58cp1sQxmzdF9fGQr15LizRks7r2rgLz1pdf1EBATosanLq78JTMX5RjTJfEGRQ7b9jNoP6tpaa",
  "key15": "3NwPdJ3wPmqJi5svcrjUUe7j3jdEsHJAyX3xDQGidobgaffvYhsTb4xpHoUAoBTGKHHhn2mFL1hTfxtVhmj6jr89",
  "key16": "zqokDAWW8pEtEtj4NKwnGYA4ZLTsa4PFrZr8kEKoDaL9dmViatbTNbCiWpkkFvLs4M2pgFzX1NsQoh4PGZ5uuD7",
  "key17": "4x8Mo5XigMYttGsdS3y1rx9fUuLAQqfebH7hd265PpR1f4CiPVtTfoSrjpYmo2CCdfGv1XaSAk5dmmy2Jf837eko",
  "key18": "5e9gJAUPu5nzg9hBe6BidKMpEfYYda9gQ2No1KbwpNEJkXhNQUj3RNh57uRL2AfnYQtHY79VMoLs3FeafnbB9MXN",
  "key19": "2ivcne53HQjBMT9KPYHm7ry1UTUAYKTsef2Ab6uX3ePq5bLPdUNMpdmWiFzSBG92c1mvQ5pYs6djaRFmMVHpANVG",
  "key20": "3YoUGEW9wK6ekbmAZqe7XQVwH9VxENjpTYdYFt87VkrXp9QV1arDEpnC5VznwWLM9bDUEP6MKRFNaFVG5eStkjre",
  "key21": "2sq5gWG43BNHwrSoJiQhE8SPPyn8MpJq5Gvf27dm9HF6Loo8ovxrRPyn4jRmZqMCxGoCbkRcVsxBkzZ2UoqEdcWj",
  "key22": "2aBrpH9ifjhfAySEG9KLzks3xKqGJ6wjk8HGrbV8UjYWRoUhJCtd5jMfzhV6Pzidwk9MZUkzfr9fjdTWHDyoJVtz",
  "key23": "5n5Heh6LpG31wbErpM3upCsWCo297XdKhRXRwK6bacafcodD7GrfJEHzHPY94f3b6iFMDohjFff4HDF7Y8jz7yo1",
  "key24": "f6RGtDjiaUdpahyFkSAV8Z1QPcqhjK83jerzyCa8LqRdSsww2ZRGRnjX3isN57rZt79Bywme2gqQuX7ty1kzjpj",
  "key25": "41V2KKiDeVZwuDZhNkKzn6VmwrL7GqjrbY4p12FEcgtNTyR8oQ5Mya3zrpAQ1Sm8knHNiwBv41EvFBrP7wRFcZ33",
  "key26": "5h67XDzVHpBsg8n7KCV5KDzPFAyooLmoVjA3B2mF7o46P5d2AtJiZr7GP7b129TV6dHX9ZPdfBYG5wqbh74fRqP7",
  "key27": "54y2PJTscFcAcZ3L5TbpqNRTDT6qQaB98sZrr1JofLxnuCsGJWA44SWsCmyPPjM1Nt8k9tLixceq51qYu8D3ZPyL",
  "key28": "5zZaiCX3kMKUWhNbwVVN8NQxZLDojmiweCUF3sGzkSny7Wbfj5ZrKEYMZdfxAVHriRj2rbvYFSfBiumR5eiVQwHD",
  "key29": "42XKr7xYoahEKiFFHdEX5npgaCBcEGThdgu2uBYKeKPUERnp94YZqGKz42NXTv33LoK2HxJPZo9BpD6CiGV927Ed",
  "key30": "3r5qzvCuJiPYs6ctS9wcp3PYp2NMCS2397cKRwrgH7DH5VdqcmttHG59GW9jFCE2XDkAZVoBVzgooK2Lm8USnE3P",
  "key31": "ys1ctX6drTdvU4UZUh3xJuayBAwEvMQYup7UgLY8jC7QuNegCviG9WvakrdjYvrEFVSAXFs7qnTcaUyMR3Cw4YN",
  "key32": "5XexzQG3FLUedsffqxgJpzwjkvN981NNBH6cx5WsPqXiMXxhxp84tcPrrLy2XESeHJLeR8XkUKo9VkAgoHQvaahu",
  "key33": "2ycLzpKFZPvFVPwQkGErnC8dD1ozZAd6JekVT6Dz9RT1wy86F4JBQUG1svpV2d5x27ABfNhoVQoWkWhoUM2QFett",
  "key34": "1J9fNP2zWGSPqkzWUv2xK7AwvWUTxhCJgTWR65uWQTLNVHnpoEtoESEGkyifJ9jRjHkhnDrgXyRB1KFtvbQLi1D",
  "key35": "2kwpMNJE1tRVZNQKxz242GrUeBLi7vYybmAZD6B4iwrmo93wQ6v7gEvcjSJkYpyvuTWfKZmUBZowsAZoXPcKcXFq",
  "key36": "4QBhM7Cex4MXiGEGTmszCTieQ67Bwj3AtiJ5r58ujePSyUFavobo47YhdrkMkiQqdBkBA8ictSXaYp4sNBok22fh",
  "key37": "isu3B3tUi6CRDyuDaYdr9ZsNESgfjrbYhK6eHRyFh3F4hmBccjVirbaRb1jxYRNJKNwvAtBn765jdMz5FmNicjW",
  "key38": "5wE3a96ZfULtaghRziDc2x3u5v2KJ5BPQQqFvQvc9KNLE22nLX5ukXdyb9TBzFRraawnc7rtoMHaTRGXUsrCs51Q",
  "key39": "27viUaBsMHZLZ6azbSnTYrBtacav3HbkKf2P924KHC7ZDCwt2xM1GMoUsh5egV7BznnWvdwxGbgNVmYcYb5UPieA",
  "key40": "5dZcwoEtuAE3FXcRzNAffckWNcfiofcZMuNGVuMKKNV2tybQDKmqdNYPryMARQDvfAubmZGYZpmSHxsW5LB2hZkw",
  "key41": "4vWSeCPa8mxYFVv32MRZxbJLNYUYnvKVnw9Cizy5N89MqVWBd36zQ9iF96QdWGY8iTpedSb3MH1tBnWsYqKekrvZ",
  "key42": "3eLWimxoCKPPBczWGPUpWm6HX6fHoJZNf9gQAe4PAPyHQrDGMo7Up792woVDA3SA4wvhreqvpDsJeHtqt8FZuyYK",
  "key43": "23iCDttAZsguFqf4y457x6RaG1GGKW6eeRBQjQdLkJoswX1dTcjDLyijRaev2MJm3JcPVrcGNYEQmu6MjNF5WtXU",
  "key44": "8qb6iDrxMzbaCkywJpNvFUjgW8SNad7naEaCmkMMKvv7C5yAtgegiHU1JPBQ1ifyNbf2qbFZ4xcTxcT3X4G3RL3",
  "key45": "1Uxn51BG7CVNV1k9VwTGZ8bj3KhQE8W5uK7gx6sEA1nxTbucRF2wfio9ogpscuFYV98D1vnp4C4uffVuuZXftmA",
  "key46": "3iEocxV9ZmG6RsiaBusGg5x8y62pbStrjs3gy6D8NPB5RXcdxYg9oiJSjKrxoDu5V9mAYEPMHCsxzXXH7gHeSNFm",
  "key47": "tnLEhisP8gYSDqPcByLxjsFbxQ73kCVmygQHPmijGK7MorMHwJVYEikjVSqRcpQmdcWvJwsvHKgRSJ94GYZ6B6j",
  "key48": "59t3YNNVVPaPBbmC9cvehaMnxfBkjfWFJsa9hLtUNifvnrSh9cQsqhSxjBUvLf3en5aL5mohSrQRss4NuPP8rK3p",
  "key49": "38Wshea6gYfTkPr3QpuVxZNq7zHnBSRCsyDm5Ajphgx4Ej3cCVGUjRNN1UwNMEFkb7Sf4BehJtGgefEM36zXmC6g"
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
