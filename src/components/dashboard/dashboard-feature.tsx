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
    "6Uh1oPfzhvbbVytRafpwXJzcKmUkgiCea1kvK6cK7nL1H3ZpapxgFrUaVfgRXdnaqu94mu3vJwBeVkGXkpAmWA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32t1acT96hmDY31tFAb3oA16CMasCY4piSpzaHbZJd26RaeRU2KwwNaR1eBpQmU7TpdgCxYSL3HTVVBfCMKGCz3C",
  "key1": "2pVbYdqJSg6aX4ob4jR3p3WQieoCHN1Fgui5ytHwCe2GvwAdwVQDgE7AuDHuEYTg98amb8RrLdyYbahYnewFmXoS",
  "key2": "5SomfpuiB5RPFncVmuW8Vbbdzz1S2563NXryU1dvfEKvjpher68Bpg8ZyUt9XKzmTvMndKctjXhAvq4vxdLpquTV",
  "key3": "3zhPc7FHJ9g4wbuhTzCtxob1ngUTqANoqMyviSSmf3GUL1FwxGiuw6PK3F22mo1R8UAhPAMqxomVGmcQKqCFm8wh",
  "key4": "65p17vmg7XfBce3E8wZZ4aYRbSfgCSJUJz9SDZSKPCoYrymk3Z4AfnJQFHQcfBE8A3KW4UoBuhLVYASnGZXAMRvd",
  "key5": "32855SRym6xgADFwWiJPRTWpZe6D878xxVk6ZUtgJy8vMqKS7pLAuezQwMc91BXQancHsbBp8jrxPd9Qpb3cMsZm",
  "key6": "3QLo8aW6y4PzaXacN1ZJQTy1qc6F2VEF4ujG42ikc8ceKvNmUSNiYWkUvZhVQCeiRKCXtN92Swch3G9dMPgs8DW1",
  "key7": "42wTGEU2xcVWWy5nTgUJirFwNsdyMQBWrabiiT1TkALf8UXMwjZfz5Zca36BerWEBd2tXEWRfg8q7yiGrLPw82VY",
  "key8": "5ahNcK4SYNvF8FU35hQ2w5rS2z1ccFq96pBjfwcTTKLZwU7JCyRt3GpavAmpv7y3AJJPffgzbE7nVQ5AA69Uhdqd",
  "key9": "ToCDqUSicPLVMPr8ShRRXKeHpe5qCAuZyBjXhrS5WhRTZtYh5L8AkDoVbp5w7JZ1EpfHzC8gjD2tHcTusj7iA5f",
  "key10": "P8zRSQQ3ceHnHbQLZmC9biGdeCyaKB2pQQpHVoLRcKTz8ZBuTgdk2sFXjhujpEFT3NHwXoBiHszAdWoe7MXm67a",
  "key11": "4FqkSfm5y924hQE1JLxMxKb3qqfUQfEFb2FDeb5qVfp43PsoKiGE957dx9RdFNFcWsbuf3Qu6txCSKodTJK7Lohg",
  "key12": "bjiwXjPBosiSJw5xqqh38rHcqqQzGh5FrNr89BMaZJneiCMFn5VXpi4tAm4G8JMrLHB2yWmqLfmx5n86qxhaWiu",
  "key13": "5ANmgfA9UdveXDm3pMoiucuEcydA85n5sg1gNoEr3ViVkB11jqGjKpWhyhMuwhaz9wxeq1T6FJHF4J2XJxf5zwaD",
  "key14": "4n2B8Bvk6UsA6u2kp47hc1MqZfjDWrJUbSsevFUQ4ZNYVkrSNQ3Qd65jYLSb3ZWtczANzaivxogtvNqzr5zjPpE3",
  "key15": "3agp9Zo9ZNz8oDhYTdbUMxRrjk49jvL3ENk86C15Rx4Vh4gMkVQUTeysgWDX926L8DiFQsS1AukB6hyGLtGYFjpk",
  "key16": "38QfyAAGediTViYW7T6DN3bMJBVrnRhC3Mqj3wEf4ZHbVZvbjcwWqCpxuepgsxL6QYafKgWniBkhfL7Sf7BxHU8N",
  "key17": "5pfjCSApEeMRLMuDjM5juiEcWiwmKooP9qnkDVuQYZ3UkABkp1Ai7qcmySVuKVWbPZZz25abMFUn4wmp4gi4wQwn",
  "key18": "4SBai75vm7PeYydPKEVx3JLgx49b5kbnUwhQgpYaEFCUd4C9h4dpsWUqDw9bT6o4bmusk1BUnfNJUwWcxPQUpWw2",
  "key19": "BvBmLCSkC2amghbcP7jUjdpkENm3dQ4VTqf5aXt99mS6JcVvy1Lhfw1VZGG6uit5oTudZbEr1LSp75KWr8KnTs9",
  "key20": "3CsPbA9WedWKN2R9xNDtaZB7iGkr9c5aTkfKq3KjHLeD3dGcwTP4Ay2ZN6GSiWVZdnt7uecX4W7mbxRRCJkVjmu5",
  "key21": "5J6soppiyLLw819eYdvWAx2LQ3TdfKQLv2Cr26SqDrc7mogLGrd6m7kcfzgxNkTLsrB4NrzbD3NeFSJGQek1Wjon",
  "key22": "5csyhMpsywXhXCLCWw7wrQRri24mJgrR9HYuzvLNhL3b8xTo5WSBXaF5CT57fig992Ux6gD3qnPNhU9TD5nxA8Cm",
  "key23": "cgSUv7Qo8Wu7Ys2FvWqLXe9UKt1gGsQQbiymBwJKVWX2xLKLHXT7o4tLxbPvzFvMjry6gUBW5CokPXbWX5NERdP",
  "key24": "2XkaAmM6eMiAiXcjki39GXn7MRAAoVESnTFWUsrPKciAfW1kPPToMnuezZrosmvtzdGhwpfkJAB7n2jFhhznB5s8",
  "key25": "4mAYYC9w1aoD9FxuxKDFEoTGLMpyKXpvzC7VBhSEL5MiioEQhxYqQ9wMAVWGvhzccmUpZjvwBRmhqn98iTLwFN3S",
  "key26": "WxgP3TqxzfLkwhE3yWz4zaRV5wNNwygXLCDXYkDKJd76YNyy2v8UNKrUDQ5cbnf73JrLjkGh1CF36diiwDWBpSD",
  "key27": "3KcuBfNQ28GkHiWt2tkE8Sa8MDbviNkyRUJwrTj9o2C36na9AweJutrabVbD12z1Zt39Pe9efSsANkEfLyKadDBy",
  "key28": "4vegsjcL8bQyMinGLzjGfY9nHJYeAmybZWHtTXvHyHEnu5Jowd2yB1YV3L1Vy3ozkMvoDXpyr1TmNGdB3nLMDvSP",
  "key29": "63BD3AxB6ke2NJJLKmYeXi6utagNTjzYPNEkN8EJbiRtg3xDQtJCxrct5t5uZiUbopCqAvemmvawSiVj24VfyyM",
  "key30": "5wqM3iieh6xZm7LumojX3jtHESfogyf45XaX7FkHQ6cHGA16gyDFhExwDtpMsrfgzxnVoD5q5wUFVbEKPCxrdB7S",
  "key31": "421rmbfjKKw1h7QeQZteNr3XkHgeH5VrM9r7AE9UCTXPhNK7gNb6ud8KydMpeWm6MaNrrj3VQrTGvNm7fKKzv3FS",
  "key32": "4XgSUCdfEe1iXzyRnrhVKknb6GPkE37nr9D7bVdYLrsCzbshSdFHGmi8fwdgfQcL2uo7WnaHzNVf3sCniSB5eTFr",
  "key33": "5xhBumV6W31wLUTGESM1TTffDgYW9aaPDSNdtdE8i47Lxu2GtZTSaPiJTrnZYH4myR3qbckDH7n7tbZFm6vrcuAt",
  "key34": "44gYwPjqL2WFESThVNKYQ4jCc3Ltwo2UrWt9ZkpUgLREXfEHh9v3M7VS3pZQRmDNWb7UZzZ5b3yTWV9Xtjkx6HqS",
  "key35": "46Af8daav65M9SHGt7mBQvotW9m4Eo6w62de9Xeq219b6FpQjMY6XcS2U4LyWcNZaDPUascifUKZibh4vdPWUsqm",
  "key36": "61X6XjdPUo2wuCYmsqx9NUVQCXbWrqQpKKTKMY25YnXy8fNid6Mtituyi7AhQfzpoLz4YgRoQRYiQsgSEfV8n7t9",
  "key37": "9mqzmBdtd4tztHTUvkmeKgKneh2RLbCT2rYEYcUNUdQ4KKfnFqNuk8uRDNCQ7qFDTtQEDH49vjJostx38bxTqbp",
  "key38": "5FSZoRg18KSKzbKAn1qcLqYoVRwYB1b1CzeAQ63jCkhFQQpbnp9x8fThiay2X8wc4bTWrtG5kzfSU2ish3AbLbaD",
  "key39": "38rvS9oDqTQkeZefTYbF9VLDavdDjDysioxSci4kySJo4p5Efrz1KuW7a1vBfVubfr2tXBAHbnJHqmGoEVuBqqTr",
  "key40": "2kznLW7dFiXmjigcztUJ9PHiZH9sYTCFVmzuRKRM3r6WUugFB3HeNg9e5iYSTYqoRFyB8hK197qwyn6kWyTfaVC9",
  "key41": "3MHgcf2dCzVG1nB31kJB8uSkPWQh1MVEUweCmaz3xgCtZKAQCHr223yDWNzFqcPhmzdc3uYmwCooTu3Uh8GYBuyF",
  "key42": "3CczuUyL5pomxBD5EMBZ4LpFAUxZFTbDdLxs1nhVY5RX6gPVkgB4zuT8EtCsanng3KdeFt3tLhkJe7wnGEosiC8t"
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
