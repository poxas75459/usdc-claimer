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
    "34J2GakEawnTrpYggWZT4qEdZnNLQbHNmqespeB3ACfKsDkEkyYWDTRYbehZcRFvmj3CjZ3jdLWE1bZ75SMKZ33n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24L1zGj6FRWCmH5DMdjasWCeX6VJh76CiATQ3zupA8VboacqevmDXwPbUBJrqZ4v9hJnHkK94tsqSdHdCmK6mdVb",
  "key1": "4mwYWrVDyDZsEJi9XEs6NQrZ6b4QPHoftgm9orekcVH2DGiYysZqaeSWbu6TPugDVFhunEmNrmh56ew1sqJwwdLW",
  "key2": "4RGV8a4kYxbr3Tp2v5BjYLnzWYstTgzzCpSG7N8zroWSoREx36Ego4XsRV3zQJN73aZYp25eVn7HjxKoMrJZbKT3",
  "key3": "32PRN7AbGb8eq7u1bGXB6pAzdABiuvT887xitQfLsa7U6Tfh9wpy16PNJByxeQLYWGn1nCt5dufnb9iQCrYiE5AT",
  "key4": "2Ka4C47U6rtP69LRGCbWq54tWxhfXH5oWfjny7bdiTbSrAq7sPMoPJPYmCHkVMtE4XFCojXaov6cTJo5i9wc3anz",
  "key5": "4tssarmUE1q5qcA1hF9aijq5tVksFYHDiSYgpiucC7M9kaye5q3eeBCAT1DVVJ3dqtEsR4gcC7ETNA4WxCkW8bLS",
  "key6": "3AQDNa4QiDJJeGegoSvsY4s6RiHmwZ1oRCzD3fMzN7niM1a4TXXEFfDeRMXPHj3tg3ZqMrNa23wMusgy5RtaMNc8",
  "key7": "2LTFBYorWCfZPrBDXFxtjRwZmecuKoVDxQTRN4rwZBr4thN9rutZcQBGkbLndqeVGANe6MnLn2ra3k1forGZ6Low",
  "key8": "mPNURH1PaLxvQx8TEM4Vpjfrwk5fPkpbNsQucjHHpmdtFFb7PRSqM9J5C4ZU5Z8z9XP9SYZ4X1rEhn1knYRNt3D",
  "key9": "4CxVCSKFk2JcXGLA3UuWYV9MMPEqq3dcoJDatg6ZwPqqw1iJnCARtEnkJc6McHKZUhzdtkc62cbNEaLfes6MFxDD",
  "key10": "4Zm3Hq9RhyJyURTX7ShNAQoXnwiYc8TFMZy8urBRUY5tsy5imEbZG4CZDjj47HhkPWzDXeBofoeeecDQk4cEc9y1",
  "key11": "3vTCACcVvB2KCA6nsviu2ZtQQ9eh8c3gq9E2UwjaxnX9BoGxgNJzNLCSGZTspZL4EfouXkNAJT4iAYaSp1E3dtu2",
  "key12": "2PgfyamG1jnD6ESLacmvTZzAdH2gBC3e2W9WxsuZFMPDpRJa5TojRA274zxXn6bqsSsJBFnWwuL77j7aEZaqqwxL",
  "key13": "3MC49JsAVQYeg3wn1qK4Xe9DdtJtj5tYtRbvBCZNFnym9NNmaACxuSK215jgLnBsK5x6H7Tz5NRU3CiixChYhaoS",
  "key14": "5bjRV17XLjD88zc6ef2XwTzkkNnr1Su2TWgs4G3Kn8erMVyDuoc3TmPukAoWk71pH3nbHqPunq5gct2gVL8CGg29",
  "key15": "2XL3d4xu3tyfi4XKWoyATyPinuFRtckMDEXUVdSSvigyC4FiqokQh6dAVCJkhqQ6pb7xDBXKnMqi2o268afDzDpM",
  "key16": "52UkkmtPFhVFdgpTBidFYoWe3aT7bZ6a1agSZcTzTJLGq5GWtdQ6jdNMTH3KNEDNFCE9evxpwAiGFM4JcAZbuvbe",
  "key17": "BN7qB8qe9bhFd5aNS5xRaAMvvVTxJzMfPvh2HQB3U7YkEH4xeBNFLUwqdRnwGyw7RHAqE1rbnTUGxvSNwKDjFtg",
  "key18": "3Wt4bszMJN9PUZ7NtuRixCqAqeGV5PwKjGvL6EPcGjbNB79rv9hqugsEbVWG1Kqcb4L2ggsrd8Y9ujDNhLmKScwh",
  "key19": "Dke4ao3QEj3PZgVJDEhjsFVyEPoUs7GaR4mNA6obZ95C5neiFzrdYkCmscBtUBHRccnj3muMrbfpTDYsyBmU88f",
  "key20": "3omEEKiXvjQ83UJ2XZnUrUUWmeKwtsFCwHBba8nAapUtDatz7pMz9b7cr34ifj1SXjdfVo1rKmcQUek2E25UG5Y4",
  "key21": "4p8c7L7qkhrN8rX7rhxethdE7wMHp3gye5SQYEEUhbCaR1Y6rWRLbsodV5XcL6tCxeU8BqnjvjrmywhQwJpFvegL",
  "key22": "5cB15pUMkA4L1syvU7Ye8ZDH5EfXcsCuetJcB9ptc7DZogKLKP8n4yhwSNH5SwdxBdotgTam325zUqGyXHNjebhJ",
  "key23": "5CH6WGeFiTee3fKoJgmvJwSc5YYKNtBPBfQNV8fSnUdsyahPdJpnnpkS8zfBAkE3wRTtsweviy12n4r9AWMo53Y",
  "key24": "5aY2hdZ8Unq618cB9FMz6VmC5Ci7EQ5ejHmdVb45Q7khRb46DfDc3Dkge1YFWb4hTErUFzfEW5FaGWFTx8cUafqd",
  "key25": "5ZAKAXNDXvqZL2MWSt4V2gTTddU5YcjnsABmVinCPQPCgriYgu3ZPQHjRMaBJsBjuvwkXyx1VnDNNGNhn58NQToU",
  "key26": "32abhDmFxo6YqkF9bTr2rpYQnSqgdwJ6SGc27ULGP4Z6UKUfwtHMtxwiR3gUfVnTVdf11Q5YTuxSmquNJyeAg7cP",
  "key27": "HpWXbRUFRRwNYihWvFxdTzXL9jtBctK8ds2NQVuWvoAyVJaS1gv9g37xuMCZgH14fH8i76VUefzzkL2CiaWN5nP",
  "key28": "4xnDWZX1WYdsjiKoq9jt3jhum7UbMTW6wNPBaQjnA9GADZjd8jbJVrr2o1UzfTagU8pbELm5u4vWg6XcSB8o34zZ",
  "key29": "2Ch56bybBRd32WyyaRzraXhSz3UvZ3qbZcm9Wp6kUqshnYWaYWHtoEejoSbBH3fqS5LfqZNoqp8GyL5HaS59EmVG",
  "key30": "1J7cFBL2tSUdFqpLbzYEEWuNvYUiiYExzzqosKkVyTgh1U3WtsQFWf9XXgbxNoHjqTEZeNrPLy2fTeRxdUV3YHY",
  "key31": "2deTpoMHL2pogRxqfMD7nzjd4NXudrds2KVye2NpMxcdFGgCL4KFm7CCcvPfcNXLquFLpoDQbW3XRghLE2xv9CL5",
  "key32": "26rceLLdJtiPVBKdjF1wuNUXRTK3SGwK7msy3ZQ57y2gGrcyGs3XgUv37snXofJUsrn4d7mwe92RJUrpzikTKQbU",
  "key33": "ouSWFG67EkVrKCGZs3CP1n6Nd6ihwjMkBCCQDZFyxmu1iVpFnDyuQVe5ob97KUdxF8m6maXB4C1bY4PHsXT7MF5",
  "key34": "4jP8AJzHAxFirk3hDuXMq4SKD3fgeBukFfBwaYvN2ULsR3kdSLZGiDqxV4QJ1degC9utbNfVZqAuyhVXhQnhDqsq",
  "key35": "3CuqQh5zQ4BNJEkX3ruK4oCJ6syADikS6JjHmz4KiCeRbsrmtPhwYWTjuQArX75PJK4eKKeJNNjEshWYjj6ZjbH6",
  "key36": "3e8GUuuaPhyAu1ecMgSSHvEz23cv6KDeGMPmCgC4kAuBgPYyW77zeJunkMAMZLXC5phjgMceUYZRKFTBhLmumLjM",
  "key37": "4bdk7Y9zwsLYhJjGu6YCr5U9KmZCkBhdwUAg5hKY2FEmsseSModSQmg6ZcrPLJ2Dfr42EEh9JgxjKJsEZJyd9AhP",
  "key38": "4zui32pjqSHqufnSy99bjPQc26ZngkMsfDvMLSXGTT46Kd4ux2AecH46ebiopcyQi9dqPymtq189RssxnaPx9bPb",
  "key39": "5mca1hQpp13GjgAk8bkicB8zmCzvV6DsMAcspBBHStXzUbBYcmmqiX8VDqVynm2LSSHqZ39kSYtFi1XKdd7ntPFk",
  "key40": "4iYPx2zT7PVGYy4oPfda8TC6t4d6a1ExCSeMNZMBBs7zKPZL18p4vW3mX4gkghgbDW4NrWmKc6P6bMhLYe5U4WnR",
  "key41": "2HotHc7WwwYAb5KNsX78oeeqoj1CDruKRY4XDqj9M6EN8PoHu3JcPw7tT6ghKx6jX3Dy4u5sDHae5Hq9s4DAPZxH"
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
