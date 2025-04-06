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
    "5ccbKjSpW7WqgXsaQNYVZWot7jB4Vmpxjj6Eh81p6eAodvFoUX4CJKW3LMikNTTYUmYMbXJibZW5V7EhbstmyUSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xjJa6BhnN8xT4Ny5uezBZse7jVZN2xGkpRKCSQLEkQbjGJDcN5bioSd8fd5WZvob9utc45ifJ7rK9o34JPbbgZS",
  "key1": "5D5REaYRAZT78fcAaWGfqQdKwF8otGLax2yi1J2SjuhAqYHjWFGRKQXDPvY9Rq8zJ4PcpWtvvhpSs2j5qUiMPsjW",
  "key2": "2okmbZGJJDcXmpPFUm6hz7uoSqbmK4id3A17k5ytTVM4C3jYTyiDnfGScUjwAbxqMeo6WPKpFvzjcequHZaijB9M",
  "key3": "qKdHWCAEeE8KmEKCu6bfJxvG2yNh94PCPjrBBVrkkSd4mMXSH9qvfMw12QYWnSrrxaWUZt2GWU3k1SZAjtUYtRE",
  "key4": "8hQ8x9HX9FAN4WJ83ESkmAVL4QeGjQwME2dW6RusRo6uGMAPFSA4A4rN7ayueFQWK9QdvrQr7ENjCMcU2bkHnxx",
  "key5": "gstPdxi8Knr3yy2jJpdVtDCaxc2R1x3bLSwishjmCiyJpkGGbpNL2QzwEH8oksXbMyFDW6ZxJLiy7Vr8EoSLdPD",
  "key6": "5KgJZ48Vf7iS22LEfjPHohRXh5DA73m6WAzjq58zSweF1wmzZrXjirT64uLiVRame4aBs9oP1erg39caYE17LvVG",
  "key7": "zwe7mazkikZanZk4bkqswJtUuEezoJLfhFkFRBET4mAXRYiwTuygdju1P8R8M7g8VZrmY2msUdSmeDdQEZmc9w8",
  "key8": "5VpDLRsAFu1pknE3n6F3eqwnmwXBn88xpB4Nzsky6dXjXxuCEQ6T2VaWouS9SCUWSVVdKqHHsDLcwmBemaNycKYb",
  "key9": "49R648xVWnQ5x2u6oTZ3PMzbukrazPdLLNcojMXSTHGu1zpPx4c7RuSvshRAJK5Xk3jDWQdMiAcm4g5NuScup7tE",
  "key10": "3rSHJUvu12LceZnd2wxGAyqBdSk6mngXukikHff218Y7LNupufmuZsd36W5Mo14izyjkb4TJ9ZwCDntH36Yfk9y3",
  "key11": "283bj3ykzrEReAATxqCpGAZ9JFNXdoVM8SXcoX2d7vH53AnxTQs2vaqWpZK4rJrHcqRrP1heXXrzgQUGYYb9DVXr",
  "key12": "5Zmsbh5MqMyFtsWh6iJasKjdLFhVxieGF9cJxQBLP8iPtQS7UZfHA4VejW4puSNi3uNifvGbQgsvZFQpDU1d26Mx",
  "key13": "3ENTipLNn9y2sfe7NgoUUC5P3RQ2ssBE7wRUmtAr6Sew2Vyqqd46HFNDMPEcCnWXwoUhutRtXHrVWNC1PjpGsLSu",
  "key14": "5udwDRRkbKoKh1zPQuyj1VquUKcxsbFzZcSwL6oPt9NYRGLmzcVJGsvgo1YMWo7D7LjTuoTGa65rNt8Sgee8vo8u",
  "key15": "2NJZPEGp1nfoAAFC3cCr7h4TcuHWdf6cTmKEfj51eWD4RbJx2Ag8nXafZ6ZuxkqBrFXnbY5L89SWiMZi9sWXGzME",
  "key16": "2VPmyFzCE9BkryydNsHLHFRnYq2y26qiURYPS1hW8qU2jrsn6p341BxLewVgVYuKbuCE3BEbJgBy5TRu85uYiDJj",
  "key17": "4KqrxEhfySzN96snuwNCWumrPkUqSUBCHsWfAPuQHivgubSKuWda4Zu6DkHEtW8PJe2KCkbDpirnQmaeg1A7jHdt",
  "key18": "5NHkiNLRkxiXahdydYYxDExEuExNRGNTXByjqSBYVxAikwgwdKWKhpT2pQYZVLVhAmmz7Xv5mtWfLho1MKcEvmuT",
  "key19": "4GQe1SEmU4DJUdYTxcRE8984g5bYKMHEvVhfq4A4fhEc8jmtVMN3zxNEhnjtLYGqqoKdkvN1gQPhvZod763QCWoa",
  "key20": "5HjJ3CdaA8E3xSrSvFz6UmLTutLcM7aFgej2CWHfYzaku3mtBESjnxsR2wHQzY8V3DHys95REdjeacdizrNBJGYv",
  "key21": "217XzPjXJNRDWtmdMjxHH91GdxYELYmRof37eP8VxAD8pX1Zm1mZKMZtG3yR3E5xhMLKhYrbo3MTnbzbQ9XW5uSH",
  "key22": "5XVWz6fwP35yFnZce3RrUqBG2r9fFSpFUz8WyQL1TUuW9MQKGkBuguuyLwMwaz8Bp5jteKnd2oiinoAYVeBHPzU",
  "key23": "mQS36hqVKRgUVLXycDKwLijQegYwhWpS8fVSWXFAUnr8ThSH1D8MoXLTcXDdXBeHD26jArmrJh6ueMK9nbJkphS",
  "key24": "49d26UDcpeq2kTS4euTQ7RqBnzeBTnm7pj2UmHuLDu228kMtf6fBhK5VCGUEj8HTLMSYBzChFeG4vBUkdBBcY4jS",
  "key25": "3atKdTFPNHf8QaBZhzk1mt3Tm1mLyt6nFcAm5zpdiNSvYcqbhsf5dse4YH7PspBocGNtcLzb8YT773BB7qJpJQCE",
  "key26": "4mugVKGSYKoYiRDiAagJa7NMW9zT9EFRzVU3krgAdMzLtkNmw4MeujoC9AcrxomP1osE6T35kjQUr6MNvzWNsr3B",
  "key27": "2HKfLuDPyeXGBg77Mm8GdPaxQjLuW6L4PTfSfbmgb1vKCMzpSuT1zBfKbsEyTx8sPZnMc8EipBNBBe8mpVZtfMFp",
  "key28": "4amM2i7tK5GHsBJUJ37Fsm7uXBDhFewfA73vQiwRtr81hGWibAKqsZVzXmNJTgBE7kCmvYk8UGNac8bombKeCCYU",
  "key29": "2wZYjzHx5s5qYfaVsqxHgt67nvJE71EnoVxF17id1jSMKYXuc5QwPeoRYXJ8gJr4rG438ctNynkXShUdQVLcVYqu",
  "key30": "55yGGBh17z7CcqTmcCs3JfGfBrDNu2zVHgMdnEJUBGLucG7p4BeDt5dh138NffFWWfJvdUENyfU2XCjBMyf3Rr9u",
  "key31": "27jNeVeAAXizrbjSioLtVcXvLEUPFng3ES9Dgt8GYShJtR3G2jsJesoAw5Uo2hQuwKSnDJBxcNw7MNtNGC3LpKmV",
  "key32": "HVyyTxQkAn7qkxk4fUAwz7dZ3xDDzDjRMhmLP6bkwcoNdq7nYScG8dyakAbuAVk6MzSJ7ypTeCUkXetnQWT6NDM",
  "key33": "2fuibDo82UGTumatohfSCyLpYHSq99yrSBiieg7C3UF8jfz35Kr6QWYP8LwfDp4A6yVkpgwsrNyLSFRbqt9PeR9H",
  "key34": "3sPffgtemq1as3qwprnVh722sQKBHtEZQnfzzpUXaWR3jmwXAbzDqvs6cbjL2fetchZw29QovHRBfuKhYePtPkgF",
  "key35": "4d8BizWjyP8EALSPuyeMSDJ1yvxdkZ1PUcifixKNCRuS7fqqYQvmmwNeWGmeinq2xWXAYCgkoj3u3fUFpWkeQGjq",
  "key36": "a6XMo6kRvv6TLV9o2b8zisgUJQjAXJHX1ptu1TswiDrTbxVT5D96wnpQ6Xu9wUcTZVWLjLMYAVxmbsc5Af7tyJE",
  "key37": "4YCXnvKv7DvKs2z5wgCLXf2ThHGvQN13QbnZ3NU9gFYJ8stg37nPD96EKBh6cxdF8E4T4WCNZ4H4KuVGdLqy4WHU",
  "key38": "JkbzynQGQT9r6LdJCiBXtuBzqTw932aR244oXEA9HHHqkoWFSESqJEzphLdKoE291Yq8ARtWkWuYrqUGm3PbLkM",
  "key39": "3oa88yvWg6pjTr3Uq7ySWXE7fcHv3zAe7zjhQiuFM5MzqmL7PLBsAu1iqcxNJTmZAcDeV4shDjmefN5FMBHs85MV",
  "key40": "5FkxadxFLBLo2QCG3MuPVP1bL5B1K5xYcczLEEXsHBZnfpvCVTmFjKs5hfBbgzUP8cJ1AMgU4MMtNHkwg9tLfwEr",
  "key41": "5YriezuTbnvsMViBvu5qK9y8sG98M6PAhyewpcr2h5iG5wsMCAQ6FY6p5aP6MGhnu7kcrbdQHn6vsNVQSc1jwBhx"
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
