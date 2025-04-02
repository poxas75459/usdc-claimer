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
    "3GJ9HhoXzvpDHaGYv2nkUtA51mAJEkKDsgWSv5WYgWJj5Bvkq2zPkVMuGf1Gb2GvjovC7jyZYLBrWBKs8Rshh9PU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mk2mfbk1oZkDCMSG3puQaPWx7v4w27yz6DA4B1efgedqFudANoLR66gjkY3NqitXxBQ2RsUxE5vhBYFLHhrSDyN",
  "key1": "hBHPqew8y7S77La43E194dLqDW7z7HZB1SLYUdGGgHr8q4QR5BWNCpTotvwS64NTh8H83eCaVowCW9TgGhfiAtN",
  "key2": "5v9ka6FiJHMhcZQfXRGVTCu9PQbq82UPq7wWtRaCvbeozFhyWH3MQ7c9kRr4gVyyyJgTetrMoxMLi8bAKo8tL2Pi",
  "key3": "4L2jE2xZLHuX1myhTLiNHVS7wivVA6BdEzB6aCgTYTLu1somy2K3NjFdTfvPj43LqPbCQEszXjAjZmXVbwYHYt1f",
  "key4": "2YEDZ1627o3adB9rbnFvRzeDhJwYnpnQ48ztxoifpE8eyg7LS1ug1HUS486P9FLM3z57Ccgi7io9f6UQZmzS5pRd",
  "key5": "5Lm7PeLx8Y3dHrtiRoCbnVgTwbbnH72vJBgwG8dFV4R5NhVbqWAg7RFZJtWLRePJTJ5o2pVJajp6itRiUojWDstN",
  "key6": "2DGku662v6ao2qyzzVpSweXu1UozHyVcYpgN97KZtNwFJGrBF2Xe7squYbYvtYLVJNVvRHijXV8Byr6v36R3eJh9",
  "key7": "3h9GreUs66fWgqBA8QzDA6LQvAidGY2799ctfbFoTFLp8xJTYtxhSfZ8WZDSQCC6QbXt1BGjr5kH65fiQPU5szX9",
  "key8": "4ViP4xNU7utEcWdk6p1s5D2ngukGrzbYtU7sh1KsWjx1w7UP434eLPU1KncYF3sHLFhC7NXfB28N7NVueLCaBWso",
  "key9": "4arWum9Jx5kJN453Ti3f4YpfvvpVNnqHE7iZvwKjwou14Gp3e1pMmZcU7utWxNYFQki8SJc3FNwLsv7fJEpJwhwE",
  "key10": "5BUDiGrGEowotppLkfqH8WEnqMvnAEBfbyM8dRdsW7xyNrcCCXsoJRZfP9CMRckaLq4vmZ973JkDhymN43AFw3NH",
  "key11": "v3BDiF7ZsvtkruGS83uRrcjKpBDBBR8JPhcu9ydGa4BXxUUHpczNWxkb2jaqHU1xcLUe9gbb7SKrJHfA4wgqgSy",
  "key12": "4gNBcyyiLufVBwnFa8w9ofyqcA8ASSFQbtNiVTNfF8y9kbAnojzCHdSafBU3H8nZj238C6zjvjbxE6PuLvRuvjoT",
  "key13": "4xzrwhpAq21seuHBhYo7f4iokgUyM9fw7n7PEAYLZmcCDkmisWCaYijniduYqaNhWCnFbAP2XkGWSWEWSPymf3Lz",
  "key14": "2bKRqtbJNbGfHEVXCC8XAdfN3FLxaqi8ARYnSib9pFM2HMJHLYxJhK379thVZApawTnoJn9LqLJEk4jbfkXoWepB",
  "key15": "5JPqDW5GKN3Bi7X4HMAHwprfagHb4LXyxEXdYJi5HMWQEQgozTqh5ZoqGzZkMnDjsDBh1WJdauXvjSqBywZEVXgR",
  "key16": "4mP8cDZvny6EuHvHVJoXY1EQ5wT3FpYegV1yzLMi79N83tLXGgEkHYsoaFTJCZjSt3xG1gEGSBjCxFQFKifSLvU1",
  "key17": "2cs68q95cUFToWqt3P7k7Y6EuzQSMySoubJ7495pQBJxzVnQZTkJeKXYkvG262Uh6uvpMM3RACrRsKUAPwGBToTr",
  "key18": "3wYQRuD8JtxxsAjFCrmXdfMPByhB3PFrFBc91VMJUbGwxCS59EZ8GGNEYWtRgNkU329QwkscGfxXxUohc4DktDzo",
  "key19": "3NP8w58L8u8FPuGWYbtas3G6G3vqtsWpRFzHnA3t6b9vjSsZeVK5FpiDN6EeEVmA3WNxsZwNspodZ6mz6GDQQ7u6",
  "key20": "5Vh2w2Gey1Kr1KTsmsKpALqaHRR3CcAEGSp9bRjLqxyGVHWR7HVRbGZ7iNy4f7vzeiDVFH6Nf95oxhnh1FiDAGfS",
  "key21": "h2tivsogzBx77ystnoXi4PmUpzz4XJPr6nNiSqzFB7abiUQKKxYghGf9qh2xFfBx9g67j16bkobpAD8rA3uaJVm",
  "key22": "2HJ3JgfVmA3gEtcB7rVAX5Bcu5v188T5A4ykrqpfR1zzPFi3mwh4eyKJhPLZDxfk69ZFEFnBc39LBuHC377SGpnH",
  "key23": "57op8WNak25uHpdD9y7Nber5pYQMtd7XGc7XWR4bLTebCLFq9LgwYUrn3HNvKnxmmXhHujWC8VKGRgf7XQnnL2ke",
  "key24": "2gSbXLVRmFuHWfu8r57eemhmJ3qYCEBUnPcKw6MXmiCfu3DM6UBGNNcmirXKnGfbQjXdzwgFDJ6Bd93GKNFYaPvz",
  "key25": "3YVTEPawkdFNY37dgW9u9vFa5d45DEQcJEmEgsWft5BV27mqimHTHZDbP4NMcoA2Rg8buJwgW3R3jV1Zd1UHKn7C",
  "key26": "n4fn9gfFyKH57sNRQCwij489fcitgtg6aLDDYEdgdz74JxBuT9FdyAC7tbRgFPcL4dCPgauRwCBkicxF9ZR8psA",
  "key27": "6L2d7sFoib5A6tbAPjC979FCT6qZ7guRi5HxHDqWSVxVXdidETpBeCDGrqTD4nhoo9rTwvwR1DGB5caQ78v1kUV",
  "key28": "33LMFTySDGTq6yNZfTEgQ2iFZfLrr8mLQLga6AUAuQxSdybPpHPvZQtXhQw2Pmbk9SNQ4n3Q7ozbuupgxYoiGiMs",
  "key29": "54c3DUXboDF3HFXh8RDPBdCBw88ruhhW85GomE8nkd2evH1VdutRCw5So5rX77icJM1jjN8NS3GErU6faXXmXZbE",
  "key30": "3fEZG8bLKLbBh2VD8mtiK7RZKEFXrPJjTaPQE4CKQA1JkxLSccQ3NC3qnCfZvrHkHNTvh1ZXzubQHZKmECeuLJmN",
  "key31": "3oLbecJTPDn1L4JCxENZvgiaUnRX3qxJWAzkT5esd7Uahk1Kt43AaVtjFRjDtvDtMwLZHAqAmMShngV5d3Rzt2ac",
  "key32": "39FYwGiq1WbTzPV79Yfy4FyGjhMnmuZYHVG8J7y4CEyL1Db8vpLnrNFwjY6HiQ7t8ckkY9Kj17r24FRr3Frb5XFb",
  "key33": "5mLfp3xWovLy4KJ7PCcS7vKtLo9BVoms4Vn33d8X1YqLwoWwLi4mz3GqsVFHUycxYzvPoAWiCMvVNQVPZbFydZro",
  "key34": "66pX2kvRnFvwvoFgucv8qT66u1aJbFbfGTznggxyepd6rhDgZBvB3DQo5rQcBLVaVn1m1vg1WfC4oZAHjPTmF3H3",
  "key35": "4CWTEtbPLu2WoGo8r9Xu6877NUAHfHBJauBcdL5p822iSg6PWUabQcSRHW3gNjyAhQ3MNZffzYjV9NY3niAGhVEh",
  "key36": "rrB8GVDgKEfFjfqq4ZzRQUMMynasaSuoyfmY6j1YTXv5yNqPqRfKgw7uUGod7kZMSVG9QWN8ABzr48J5Cs2Lh4B",
  "key37": "4skTkNx9xoKqFGE8CA6rtbCtpitoQyvXXda7AgD5ZU6giEoMu5wUfZrp35fW7ghZJMAgDFM8sGTctvrcb11LyxNv",
  "key38": "53de8aBpkjUikk2WW2FqrGku2S97dAxQYUbUep8CKouNrp7bMrznUvWCKpegxxPTCuAW4wabq1YkDdgabL1byvsq",
  "key39": "UMaDf8mXS29K2y5LjLnhaRdYSxDmMxAJGe5u6PnbFRHTg4qmwZUvKu1xVSVycS9wxVkAPPg35io3KEYuFvEKuhA",
  "key40": "Zv9R1sV5QuAbAH1E66b8UtHTMWpWwmo7cXSouwq7eWwg8xrpL2hoeC1kXQVBSnroC1E37QQzpavsKUmnujuDRyU",
  "key41": "aqSCJVz9jiExNj13yqggQ89u2FJPM4ZLFbv2J1iDp3eFY4ejMftW6nSDYuUsBaFA6zpMUVzuYEeosrG8LijHBXG",
  "key42": "2xES3fvyKPW4CLt6Nogyj9g2sVWZgdGLKduCthcyQ2F4gSK9FkJaKQuXrKYp18tkbL7b6pyJnbAk6BmPdrCHNmn1",
  "key43": "CmUxn4iB9GRrbUekyUsVarMydTQAHvoSDB7Dev9gN6eh2ZARPeh6kGpguYDMJt3wWGFLjKtcpRDtJ5opRWAMabd",
  "key44": "wRLwB7ZiQNiopqe33U1BcwpumgX5vKPyBu8gV6ebeT1yfTYhgWwGNfEsMqw99Zeum2dwtz4CmAKijSkPJ7jPQYB",
  "key45": "54FpZwwa1fjQcHtcWmJ8QWg132wFSAqz9WHxuRNKWhMnBMJWgBoRhBkYu12tut1MPEpVoCAtpuJVyEDj1sjmWvhE",
  "key46": "3gWDxgtjV41BJjCJJnd9PoHdu1QsYZ2gfBVCWYLB9MhFYeBficebALxpa5kPnwGRhxJqB99jBG6yV2v5k6MjuQTE",
  "key47": "2kZwf6XY3cDUBxtZvvPNf519qiwT6WXn9yFVWBPyVyPCqXuSbBrAf3t78iC5eApQWB3nCwnVuZ1Sy1aTZ6tXG3pK",
  "key48": "t1o4mHnyPQKurGRqEkaXeeFh8GnkjCP92dSNYioJGyFsY1uHivUqv6wSNHWq7tozjmGSz4pQs9FhcApXJnw8V2B",
  "key49": "2JExSCVC73h7V8bNCEYit6rv2Mrocsp5fkY5AWeSMhxih3YmKAe2Ed5jkPZAeWi6vTXgTtB83tq4KKNw2uQLfjQV"
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
