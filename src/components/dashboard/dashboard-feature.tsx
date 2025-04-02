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
    "2BFk4ruvQA3gSwJxZmvpL4SFq4iDP22Si17XEu4GT41tupvpcd6u21WBEkeFF4nWaCND7D9CkLe9srYmdk6Z2b8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qQ3fWwFqWoeyfegWPtZtxTa8mX5cp7ZNS5iYBWMmcS2nLexuvAcQaz3aLhNNn7obq7wZ9cn1rBF3wLjtJG7imr1",
  "key1": "3B2fi7mejDkYzKjWZ8APySjewF5rUUGLKhn8tX6svcerKjQ7P2DPzcR5Q1CorVa9MtjU2aucoEMRfZQBBL9uAinG",
  "key2": "3NhfWpz8EChBP5fFQiMXsN9sdiRRxFXRr4ieadoR3T1srBY3fJUzZTTp6sF3XePQX4wbgMSyuNUsKWFtmGTwioks",
  "key3": "4XUWmQXhEZXsX1FtrZMcEytmBwzoHq7DzyrN29mfDCoGCaiv3zvqtq25NAGEErVk3eFLUgoo43CTcX3wUYhXZiQg",
  "key4": "ihzG5NKTPF6iX25eo3QaaJsBGnfQiv7bdJxfYwGMZ3zU9FfbtgkXtJ5cZNy2HQpiJHR3VNyMjSYX44LiVEeTeAK",
  "key5": "2MK42dbV82hcFnmm7q5baEVLScgbya86vNjibJAsun8imWDozdg1A2NfjsVcdJXiNwjGkmb2QDdG2nmP1CMF67gF",
  "key6": "L9JhJdqR1zRwyVkp481ryWyWrrPFFR8D7ieSVzDnFbggTUHkDSdmq5UzeGuYTtspyEBb5wg4qVZP8ogb8y4ft1L",
  "key7": "4XMX6eZxatYPGzKVWph4Y61j2Jp9YYPECPG4c6cNy3NZbpGrAPGazSmEyEGWjgspwaip143wPTtzsLqUgrWLzexL",
  "key8": "2aDK41T3bLDNbn8USTCQ46zDrHLWJNTwF5FBQnybvVwcuqJa9FGEx7y72A5bbyvkdxJqjozTeCa8B2moYveZQGVk",
  "key9": "57gj7HASSFbyMPyEzS61qotdsWC3upbhWrHiknpEtat6ARS3GkHdNMhaVGcbQVc5TMibE53HqyVnzJSj3aeXbsdA",
  "key10": "2YBaj39GwBo8ifxgohUpd1sh9ySxX8cvSLaD4QXfxSoYABASHCrVkPhjSmwfTDaV7Nm1fdoFJRwXeX1RAM9Fjwc7",
  "key11": "2WHuXvxM62fj1HWPA4AeR33vYxeJPWAcBWCs6X9kjQUrhwCgHxA23by3LSqWsqBmVnPPotybydBwYhsn18J5auEy",
  "key12": "4S47nd39TLwsvQJC8VLNCExZVFQeQ4xjQHMdnxdBrHx6j1B2F39NYwDosTPFLX1iqsVbeYTWq4MmdxW2Y8UAxe2w",
  "key13": "5R7NeWeZSJ4CUkVT9Q73Z9sJWgpKUz9HkebGj3ExEa9QGAz7Ng8wLiCTMTW5ooBszbaxuMusFUx5pmN5eXtA3mes",
  "key14": "2hNfi518JUKCjfWQkR9FmH7YjDpKEV5ufNJNCj8XZpRRSydgJrtJ2bsE3muhkzEmD8LRbSUqsrwBeURk5fha7V7k",
  "key15": "544RzP92M8pU6nN795nznYX8N4dSKeyYWdanFtTEugJuVXNCbzNjeqZuuhu1kTP1gdz4FSATiMWvHz1YqT4KcFB4",
  "key16": "4qBHLQ4ijTymTqUJrAnrnb821gafzQ9m7h9gou8fjxf3DpkGjPxpqF4YXxMj1WZqQLdCGTMAyHMSNXPcD9RxyXTM",
  "key17": "4LYKXS8gwZunvVBGVgxjRZp9FTdE8omrgUmKy8ftgU4bSTx53Qk5Sk5L8UzNzNzdCNsxJ9voQm5P6SP8dFUG8XAn",
  "key18": "61svyxtugPg9Ub2XvsTSaHwPDs4NTr3a4TSZN4aGdFHVobW8tk9xghA62ZiCibWJZwFmv6ZUqM4Gz9bqnDzf5Rp3",
  "key19": "53hLZZ8L3447GxBZ8mWkAuBGm52KJhhJXqarWeFuYnAuijgzGgZBwSD1emJAhSMNPQFsTce8jKud7JnfqyCTUrt4",
  "key20": "3eSTWt68f3wYSchX1UGGtzx3FEHQ2yeSbodMHAH3xfGpRqUkMihhjdmHddEjpMSocUYQCrJTE77MnErbxhQLkbjj",
  "key21": "5h6k4H6qB6HxV7R3CKiNT6KK2B4NqNWfcWRXkkhukVEucQmdNMChc3Eo7ta7mqcTfs4P7eh1VBa8VsCwg6RSeqgL",
  "key22": "2z8euGeEitnNhW9JVoJ72uJzc9mbbAit321HZ5HCtRe2GEbkxJR2P9dBJtTZ4673U1Kiqs3BB8jU7sNtzEhj3eyP",
  "key23": "acq8uCQowkMU9tsbVuB3KfQ3NhoxJ7ibwULJB74L8ZoAoyuuqikNbw3PWatSkuEWzrvJm9YFJCWrkQFkLU4QqS8",
  "key24": "L2mxq7gu4Mut5P7wcBAsrwKtDwXKU8ykkZ15LSjXaEpHzsLSb6bqTJSBmYdEyKdVwYcrsNGXeq2vcRGuui6xoVv",
  "key25": "5dsHBwHbaHwqdNPLfyEnBGjyqKt6K4Pf7HDEWNSQMAznMH4CqmwokonYnRi3JCpshVMregGzQVkCV6Gw3Fuyi2cw",
  "key26": "4NtJL8RuQWxMExyjSPY34FkBMvSUebhxwZJ6reYezpWypyLndx556xymMreTLbg19EysNpCFafPx9J2ch6g9tVAn",
  "key27": "3cTt3dtE57qHpYgzQUWRpDDRn2pTtze8azB86i5BzF5hRt1Smi4sSge3MDx1c5KMLaXR3ommVH9Wjtnk1sfPdDK4",
  "key28": "36GapD5jP1jAe7T2geFhYazzjwWtSEvvte9DgqNtezejH2FaYmhErigDdMN93znijNyz3oah28eFekqWSQTRPm7h",
  "key29": "4T9cMkbuRDqRJCVfEcj9s5qUNoGyTbnarwRNRGcg4JWkrNWWqahsMHdo5MjiqBan7kYNsNhLRMSQPScxAaVMeBqq",
  "key30": "HS6iayerpntmrPajo6hKc8ib27m7M6ozbeuYinmZfd12eb3ybbkoeupDHck7tCBTUeucGkzgoXwNmxi9cdCeBnm",
  "key31": "2d687MC1uHZdgwfyfoteu3wSCV1vaXKjXYcKZvJTn6hfgFuLVYEvyvnESkNgxVpcvA8PxnF2mMVK9rtDD6LUutMf",
  "key32": "4YAUYaAwi8RshbPYn7CKEF6hhBP2eNt5MarbcthmRi7KYqL8j2gpAcZ8a53QbkdDe5DHUKRBssR7ZZAeHHhjtfjP",
  "key33": "47MSeeAtqr9oupFxYvbizDcYfxXEFzhwDhQV7APMpb8R1mtfTomG6G7GBcs96PzAYE9UcdXVEDeTR4wQtAFdkXkP",
  "key34": "3VV1B1N88Q4VaWToYvnz1WJMChbM1kGqkQpFSmHFXbnx1Lqop1vsgHAu7yZXJB9C2M5wbFmeofCQGQgyujS6W5yY",
  "key35": "4SCygkR2P2yovRsEV5RgEwPAU1KZKadVZstFj8WE6TqrsuQpKaGdebT62r91kCZWrVJZSXK5hVTfJ4AcVL7py2DD",
  "key36": "2hFGhMjWv4vQbk5aGkLGRvHbwE1d3Bf4P6FTHS7f3aqLnoQWGuhU7cR2WniAUQYcro9Tcfstb31MKKcrPC7egbPp",
  "key37": "2DSJHiVv1PVRnLHixx1ZUJDnEiD3ZzZeGY7aP7DwHYY4jmdX2eCXAS8w7XYitHy3qsqfbpfzFGzvqQWQww8Qe3Ji",
  "key38": "41Ttn7v3o5Ctnyw7NJUppfEWsBfQdrWpdUdSZBrHAjKJPoTF9qFS5Dh1wxQgMk9o3vQE4Bm6j8s6MK7FPf7cf2U4",
  "key39": "3BmooQbGCE8y9sAcZd3P1MVFvgDMpLMh1JqEsc34SghyraT9bVYc5sJ2wn2AWMdxg49ixDhLFqNsjSJDo7awHBv1",
  "key40": "YVNUGiMwm7LrSsEiiertbehX57FjQnBPshNgNKuHkdyU5HGGw5GEkjJT7UYuCjru48CWhqrZRRPUDwsH48Hxfk9",
  "key41": "3Mb2wuEiDnQe381E7vRsVeQK8Jp1oRTCa7Qqrhbe47qEWNvKMve4xu1WMHknnuuFn4wG5Gs14ArPTpQp1B1eh1SY",
  "key42": "5KcMS3tGXQcJswG6q87j5KwSwbWXXujSscS8CVd3aqLoEVLbUyiRNzEwaioXRJUADA8HpcHEhx8xRShzTGtB8F8v",
  "key43": "2G77hS8JRW9z8RSNjEnUKayCkeF8dw5NnWEt3fB1gAz1tzsPwhL9gEL6B3DEijXUNDty47DCEMRK7whf3K79Eg2P",
  "key44": "2jXDYiQ3oaf7sr93Bb2ATcUnMVw6iJXsYAahf1NzdrC1AhUDYrkeGLDWzNwLMxcXvkVbkyHXHYN8GNJYAFzaJLd8",
  "key45": "Pj4CXWp8sGuage95yA6euBBYGJxr2Cugu2VCjeErdGjgX3pXvCKHAGVokmtwbFwhDaenLrTdAnVkgeQBcW8RgbN"
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
