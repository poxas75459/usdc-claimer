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
    "wbE2xJJhAS92oLxks6dFQugb4jgEbFMo9p3dH6GipW5hYw2diSMbH17bShz7CDdq9r55kjg54h5HUFa3Ltdtx9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7rqgy3H9iHPfQzTiiFYEo2Sg1a5j4TpixMJYk6zKCfVowqJA88q5tLGg6iw5e39RiCA24veYSb1SFAK5b8PQ6Gr",
  "key1": "4a9S1D6uusSGNcizX56ijLXREUb7SxiGvBkXF5PAzWrvk9qWBPhT3SJqQKn4usQwUukJCjmkEEwKh3CWfqYroVgk",
  "key2": "4B8Fsz2xSHco93JReo9DQHpZiHNzieQLMu8C1nBW3pBNG2yZis151yaNmb4fuiu6asZCR1JGGwcvx8nBAE3bxKe4",
  "key3": "3wzUeYJRWvn91EN5WtxVFxqdYVmqy5xcygC14ax8Go4iVu6xZjrjsWWECYeWZjFXPpbRqparv8E3mbk2KJcug5yY",
  "key4": "Sa554viJsDuysZfTLAPTNJsfxirp5ivJK5J8HesSL3JvZnyzXEAXGPF4T45V4SpmZ1GTgtV6GvWyrXhT5EuHV9a",
  "key5": "3r3dUyhJDDA7LR7PC17SBjGGXwZSRgJ2JE9EoJ6bj5rnLbbZy7dDSS6FLemZMvJSxboQSy6KH2C4qfaqHNfC3U6v",
  "key6": "2b8SQ1hut3L5AFuJYi6wAMm1EbWvpSsKjnUijGgEDdi3QgnPaNs2YkPQAbitHcwUqDymnW8aDFoqqv5cQUh9uSng",
  "key7": "5ZapTQrExkJfkagzJ2Emj1YHXkApkvJsggtWRt9pbCbqvyYBLJ7no3YGKt24q34TUxb9VnQXyatjJt21Q1V8QFLC",
  "key8": "329bAZ3gkEBhLarpFRKexw4hE3aqMUHqPWsjydZbFUqpLNHKU9M2TQMTUExFhrq6y4kLeHvu2n6U8Zuo7Cu7FDmV",
  "key9": "4EcuqcjnkQTyhy8GBDNWvUnGYdyCmTWAcChVCcB2FKajGEwSgqcHD16sRGr9j8YW3a3hY7XuNavaw6wL5fjTNAW1",
  "key10": "3Ne5zAbLi9yMMw5oX8MuYNP2kwdN8g9oigpy8QfqzDkySEBzvRvLE2bt8Qnjt8bzM9tSWE4NhQ8kYBfABzqYJyC9",
  "key11": "2YdhWg257e4oGpmyz1wv6fASGiYQozJ8pbg4zkXvXG7cKBcmmMDYVuJH4N7EX8wnXnAPrCr3YRLQmQERXnqKUvT5",
  "key12": "3mFdXrGw2CmgPUJmVdXdwjZBfN2k8HEPxzkdwn6GiYMXZmaan4MsdNTC5cQR7dJy9Qk9SPk44dfpFGLgCYmyYRBp",
  "key13": "5H4AjMX5fEefpNS8HQQ5vzqEMsQnBqbSgRYqTELjHAefFAFM5ji1eMMhDntvMXodgveNypCrRv6DReNxJfY2GjVf",
  "key14": "5iYf6LjyaZYZJSek8s4hPoWYC5XXiokvu6QkkfQDDewLCipUmV3GDBCHiyPA3vXupeAQrurCHpJZzHVHu4vB4nTE",
  "key15": "2VttVKoxV19L9dXwMNpsqG51k8QcE1WXSCiz6aRoe1TrVQP7kF7A7EYbVAL5bSkn43TL7wG8dHtw966S5BZwSH4B",
  "key16": "54dP1unDWWES8oAry4Vp3vrR8TXLXy1YGgxFJdtCgvmGZAoDmCXj8vt3Tg3ftnewquM19KBzVUo9cmov7qebqjBL",
  "key17": "4PDJ3akSPf4NV98s1fHm1DM3ejNfPs9MeH1bNB9AmtutU7LcXiEY7QJrigy9WvLrruMb59kY9k4WVcBx12Mvqh5j",
  "key18": "YJVNkGXWek27sbvQCWY7v4P78HxqLHZ4p4876Jis83k6TtSch81sbwLZa7sMtgPeqvTPxeGXRv4hRi6HAiTaqCZ",
  "key19": "53dYk7A2w7Y7t8TB6GPAYa2CkvJNSWAthchGZErWFoysX1n5f2buShCCnyT18Pc5i3rmttNsrHQbfiAZ44YyNK2p",
  "key20": "rVZ6bKx8NUP5yEbnmFLjBRNqqG7FJo46Qc6jUWDh3F3sGAN1LwUed4vSyrxLDWgNLtEnmRcHkceaQRW8uFtMLqZ",
  "key21": "t3UBt3u6UojYahKRTXZwA5SFA8f9ZjFtATP6zb8A8zq619KbBdeiz7xSQGu9BfNhGKYVXMtT7CAiQruzriEaYXH",
  "key22": "2oDhT9XPxjzQA917Zr7s4i6hkkAacvm3SiKDKUUNc9gs2WDBBtndzojqdNDuzt6vbF8qgwSk8ZhuJb2BTbEU2Qig",
  "key23": "2sUddzCdN3pUkrURMqdDtRPKsVYVoBzwX45TvDbZpMRZKzgKEyRTShvhF2qXN18cKvfa8UyubwT3YYbkcfHKTe4c",
  "key24": "64mkt7z1tV6JU7DoHQ339A3E2PGE5u64WZuqkrqCLhpZqcfEHwtPC13tsri4v7NN94UsMVo21vAD1dmaRGJouHP3",
  "key25": "eW7rEQAa5XQzBK7rEnP1HK1GMJ3UK6Qqgix1ehPPG3atv4QUm4uBCEQwnFUUjGEB6nVLSs2sGCpeqjjHrFz6ADM",
  "key26": "2A35PBwToYNnckMzQGMCfE1DzcKVp7kGjtJzUpFC4hj1z6BjfZ7Jr8EuGFpFQZYMiuJgUevGnEP8Drxy58WHNSH8",
  "key27": "2YZPELY6DfngsXgkJBbmyHMRFNKC1wELGPb3BtKDpemFNeFDnNu4QYFCgrSgBtcCregw12NAtD8UpiKyu2hkbfYX",
  "key28": "2o3Vw5v93bLLmPUk1uVgpRiFE4Hb69oFE9eCx2JbdSKnbkbbaMUSspQbLaMbqnG7bqbQ9aSafPmg668Aq6f5kVsB",
  "key29": "5bpyFGTqo6PAZi8yt65n6ByuvHvRyv16FaKVHb7qDzwFCHnYS3rbGAXGHDQq5xDg2ddiLg8He8zDdCPxPMJmbw1C",
  "key30": "1hW6B4oyEsw9ZHga6yBZghcPyoenPNNcULPxUyRjvxFEmzk1hgmMj1a7fB5AMPE86pjDxM5xVke2viUpUYhHXAz",
  "key31": "4JsFJAhjfL1rtX9cxu7KmQZ2N8BMSX8q6rANmZQmhTAsBSduH7DGb5TzCf9NTNSY7zjeeMgtmjNpJCBbSRTjLW8m",
  "key32": "61MgWn3Ma8RiEXa6NyLnXQ59C9rJ2DxiiPK1SnqudFQQJjpCMwUiifB6EB6v8mSQUEDMnTojHuT576s7N7PMaEru",
  "key33": "36iwNHnmTV1vtrCWyEFE8cxtsoJ7tRc5Vxqc2fQJv8GMMejzacUK1Noz2QjFqHo8QqXFkj9evYKgBkPoT1L6Xi2p",
  "key34": "QGWW3tMjxwFNUei9mPMxQAZYeRag7a4Dyijkrh9eibGQpLuVUUtNTFBtF6v4awvfnrhKaKSZUvaU8rS1snZaMNv",
  "key35": "3bp5oCjt1m8NvedxA7kuYLzXCiikQjTyTepFLqphfxMVzqY17xpbAuV7byrHyEAiRjTSVuJ2mGPWXEqMWE8P5KhD",
  "key36": "2JgyE7eYJPLfPoDuxgRxnEzEVhTKuyEBHuBWDojTSr93bniPeVQDwiZPdCXJkkPRr4Qq2mdsmHFJtGVthYmABBDw",
  "key37": "2XCYKdSKTy8x8DnxQgNgLk9J4SZ1sdKajsAXnuMwzR6a7WC6aX1u2mqvgSdJZebt3hgfkWghMkXmGXLiV17dfa7b",
  "key38": "5cEVDhdK5ExjagdE6Vu4MAhmrquDdgWV92MYJWWS321rXvHV3x8JhTWg5LATyV4TmCevFTXtwxdRB2dogD1euX6Y",
  "key39": "4CetKrFRQa42cinbkDjan4riG67QeRh57wEfQXJrY986ZnPmNjQ5eFcpDAnWCWPWL3hPUa4CLFyo21z48NkMRYpb",
  "key40": "2KENi4DQKguZF7DVkGUFDgHYUFx5aPJK7e8KezJHaEKGhcoAF1hq1sDcW34bSBG63MHS9EfqFZBbe7efmiQq8mKn",
  "key41": "5yheSqakMZKQVffprKWJ7Gk7qJ1DUUi9VCSrLaRTtLJv3Rb975JkjTybdnzCgJkx4oKgmsFYSCBaLTYKWzVfZirJ",
  "key42": "4381JYQc1WcUDcJJ2qopDCG1eUVcVsCqUX3Lg9v1maDVcFX6MHoi6twYMaP6nx98rfcc6PXwTVmQ6EUPe7zRqG9p",
  "key43": "xkuKmmCzp4fYHKZDR1gjac5LGPQzMLWBEo4zggxt2FTnKpEePwZ9Pggo1EcDMuwfMR4ogSzT36K4m4sxDAMwYzh",
  "key44": "52sQskjcHP8HESBdgV1FUnp3PmpZs1pWVgY5jZSG8Hrd2bJhpzLrkAK78igS3t8sVpho6i4H4Qs5psTkngH7Vgyg",
  "key45": "7o8FZdX26koKoxXpbzFerXS3Ajz3188q8cF2CiZqYUvGpkb3PQP9AYoiBj8rcHg5Kn7xMqPgewP7TA4uaASgraJ",
  "key46": "q1HMj1g1bWn5cxjfe4DXTMQUAGpFj2sbLNmayY39Jj1CKTwNvtEmSbLsT7XVi8sbZE9y5dwMzYPMf7fWHKDJiSJ"
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
