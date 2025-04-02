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
    "5qqjDZxwQpJqbFtaBNHiDKREgos4AS1FchtSt4UKyxHTYeDwma3D2W2huUSHTWQWPKiDWdoXnHsFJXQoh7xBGGaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nm4Q1jhrynFf1nHVLwfwWpzCyB6YTGR8BgS9vxGF8z7vCLV5HB8FbTSyBaWXKJu3Q87kgZNxnRmUNrmZJy3t18k",
  "key1": "5ZRkVpGbgQU11iT67u9do1aJf9wfgwhut4jh96KAZGPvWn3gR7Vu5ZqGygUjsnNLT4amq64kjVtBJ4vtBE1BZcLe",
  "key2": "eP9auTxSCa4w5TvG4pAH9xmCNsDVTvSqGeNKXnVxt7z1KyMUwFrCzdBidCxyZLx49zxdnGiHf6asNN3rzQPyqiz",
  "key3": "5rtciUPyiVF4sNBz4oiwwV8ef2P2AxGQqTrqqvbqrpPYFSSaLtzUo9jLBvePDX5S2S6kqRRN4DwtJCbb32bhHjJC",
  "key4": "4apM2wdY95GehkRrKr8bzZBGv1yKDfcMSvxPnUEDS8ctdLf4kAN5c7xqc46tGu8mEA5FB4QeQdwDkc96AnWEAGDJ",
  "key5": "5p4ceXgsBxTvV5ZAorR47Z1bFeKoW8byLr8mptJUt5eDuVYKTNxxUVAZFeJ3m4UBo91GNebXqPHNHztSXUmxGNWf",
  "key6": "fkKrE8CH2Uq6D1MBgVhs6WWFoZDvUYRQVQtNGWyYDs1etK9LLiTL9iNqN4jrrJ5JsiDKp5Crzmyztw48uXSLe6E",
  "key7": "5WAS2uDDAB6NhdtckCVq3pzM7JfH4L6pGn6Nzh31pytFVfYhK4cQk3cBpNZ4Y8ft1zKDgkWzY4kScqukCq2qQMrp",
  "key8": "5ivPgtWrfnrH6L5TLXTMcXVFvRxvy1pcxQ2YKi47s52hcuVbu4aGom8vdEosB3E5rTf8C4oDcEpJs2mBKGeDBVx7",
  "key9": "2niqiVdrLhzhSEiArKhjxGyXX6uBgPrd4SJN9TAvcU6tFaUzxeYmoBb1rqEJL65tcyDPyF85HUcuCEkroy3fXP3i",
  "key10": "xXzq5gkhAxJ6UitkcKMu2g45HsB7e4d1XiFbVpVTryAcnvfTqF3LvXzu1EikZERDfVQLyUP9Jdmn3BxYsDkvFgG",
  "key11": "VT1Xu8QSoxx181tFot1ZrQXSJoWnkeY211UTnMxFQLLPC2nC1Vb7kaatfcXi51c7nPtPHNn1XgLyRE6nTFCoL4H",
  "key12": "4n6EE81p3xpbZkAMFaVHEBTANQTAEDag63967DPpVpinmJ9xazyApw2Um5jBitjuYG9ed2jt8dbLjoxzRRKfnKB2",
  "key13": "5nHEHJubyJFUTrAaaDNgdgRL26nuN8MpUPydTcyHTbYeLYSVBcve1bhPpnkQzexeV6eM81tapMfuHsLMPxHdwMzS",
  "key14": "27WVVJEeKEeHzzDiupN8tr4cNN3EKVppQfjHee4U7tuWH8cNvm6HjAyt1UQjyAh6NCX7br4iepDiB7TiE5XyXurZ",
  "key15": "3bNT963RMyy2iLmqZvAavSrEVZF7wB1ez5zyCR4hYKxA6XU4rA2VS6suZ842FYPX37bXNaYcJxNtJ2frxPNqXYvd",
  "key16": "5sUTybPWAAA9m2sqZ1Z4sxb97BmyouuwYHSGPZJ9jU76yMnfoF6V1TgHSq4yt83AmWgb7Etvz16TSsBjd1iDcFtb",
  "key17": "4tnqbRJa3789jMFziQmteUzYE1NeDLe3aKQT7SvhTyuzcdmUFYUYeLDitfJjPQJ7yMacwfb4CgHve4KdErDcmEeQ",
  "key18": "MPa4sxD6iYyLNX5YRK7jqcLLhZEMs39ewDqvT3Hv83g7JtrpqozXu1dNtkyKtxKtXUUagxmWfTWCxJY4AMrvwEv",
  "key19": "3ehWkKYXKY5ePVPZY6m1rAKYMzsiioW17szy7R2jfDX1gWEbwtL8LoCuE6BrYE7agixsMmWCATTszfnbAdEL7HLA",
  "key20": "rZDtQhVqsKj1vAbRufzGNER7VotyNTv1tzEU6snsBd5zRuHDy9db2rQ1cCydN8covQQ3ZKtRZdbUcyQy3aWZKzU",
  "key21": "4FT7j6DmuyX3Edn7koaQWQQmVN2aztNCr2AFP3yq5hgZbEcQkcxhJgLiaqj2UXn9Rxk3VgZXgsvDWYNjSW8AGQbn",
  "key22": "59iNEP3Hpri3QCeTFAhSB3RrFMoqYheJUBhFmi46y1oa5QZXDmwQYTN1hzmSmTHi3Tzgr8BjuZivGvM5SEmRouH3",
  "key23": "561npowRDvfejDPqsLKCBTKdQXAFN4nvANiQRZedL7tnvWqYdK7qmGWKSfBY4sXu5t3zw7DDvMn8w3RQWkJi1orG",
  "key24": "CAHozG8XyH5oNZQLrsmHhF89afismhd5kZE31rwMpANTk1uYobNN3HuvB34RATL8JuRfge2oyMvmm7pF3eQMq1G",
  "key25": "Gwm4cr5aBU7WgwFeswmw6DJBtUbeCHDSRQvipikuW82VYXXg5Hye49ZmEkiNjyES51Sa2MdWtiir3FxdPuFvzBy",
  "key26": "BBJtosXeEE9sJjPH5UkSpwbA7rP2YRovN49XoYWUaeR68NW8GkX9LnJjdgC3osw5pkeaVJE6kvfUuzqAas27TTJ",
  "key27": "2soNULvLkcjogj8w7Pc1cBcLH7ZkTriTi4XB76QLx9m4111jurk41fqDFyBWou8gw5jdWe3PLkrDuj6Lkt2TB2re",
  "key28": "3pVwWRkuMEBJJgrAvoxbEYGr1itxeQnzALnj5BhRvyV31TBXuei89hn8zAVFdc8PjT1uGZ9qnnBomY2d76RYZzSq",
  "key29": "B22sBNvjbtSUCTvwnGe6zPAGMpbxj4ohLQnh2qwZDA6H6V9LeK3Ve3HCodGCXu6oqCG6BVZFD1wam3CrVpYabpN",
  "key30": "5wobxt2u52PLJ96w9mezUotr4RyU39XqWUQM46NV9rFrwAhj7uQAuoTr8xzwf8vteQu5VTA8HzjUvZ27WSFv649",
  "key31": "4MPK7LJVsSvg9uLWc3sdJ4JsGnPXkV4nNvsNG8qt2ENFLEiHX9417bVhTe28VAAcv7KhN2vedFNYmrQYnWCDAdMv",
  "key32": "5PJBmx11676we9qRbf73gBJBXb6uCvkgjDgAk2ZsidNVrxuufpgEetkzuYpytzMDuTx1MsFiyFWWbJtRutR7Fk8L",
  "key33": "jHj1fa1YoJ8ZgtjG44kQ3xd28kycBse6eaG2sYcS4NeWFGq8Pyz24RoBbzpnPAtpUkwdACW3xcaBTd8upo6xhTx",
  "key34": "213durGAbpjzZapTmdLfDCAW8yLXD8XFBCY3JS1VZ3ndoNUGcMD3GDwbDceUHX7QVT8vS7gXjpkvUFsW3Dxe3P1E",
  "key35": "2bYYbVP9hN8fnAUYhjNmyyQUYcv6kXcb5Y8xoTeTNrgqqZPZiQ2LVXUKuy15q9QLAqHnDHoVbtXzujaQ8TTBwd4m",
  "key36": "2eZidJri8s8HknHtz8Rh9eiY5LMfCT7ERymzncUuK7N7LkRKoMNqCguvENLvNU8ZHuVzzTi7P857Htu6gRbMj1Sf",
  "key37": "47uqMqto17jgYqStU5AVT4uchQwDNNnwXUwrYeJ7VpoJbUrWQaFpw5WwB79sVKEUU4355ANwjTRygaSLmToA3Rm1",
  "key38": "3Y2Z4RUgVpuP9WSFVih71S4knoneUF2L1RPAZQ1gF9ArEvjR6xe3eBYiZrkXB1ZtrBD6WpQ6Eiu7NQTjW4sK9yem",
  "key39": "aKMJ2vSpNLHE1nQUNmFhiiRZa6mKjsu6XAR1phwZLeGs56yuY7hxFc6ZpiRwwEJnxt9zAFjMEGSqoFRkNvNgi2B",
  "key40": "3CmNbssdeCnzgAWpDW85MvohkCMaFMKA6ryHYUMK5zNWGW3kkXNyknW9XoRubbCSS8JNjR8RFm4ZTLw7CjTzdDmd"
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
