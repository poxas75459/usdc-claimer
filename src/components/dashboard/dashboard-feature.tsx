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
    "5i89TA84np2UGqAoBwtGodmhvVuak6U3egL6u2A1VQoXSykaQDCp1s4yjthxUwnD4qi7PyLViLYsQSRRmTKZntiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r7XXRfVHbAdzP37paF7ZdXunP56tRE15648BCGkGCjKoY1P9A5pk792cZ4XjVuA9iXXCjYWDS1mV3bW7qHJbzmZ",
  "key1": "3u24aqnECSZh71pk1oFXdqAYPBXKy2bmZCGxVtkRXJTyVUMDRWd4wq57YSXYw1XFpa5SUbKTwEt1GaCTd824n6NY",
  "key2": "gaRjEMZSm56R9SKfLXCujpxj5JHMBrMGQrNkRMDtyiYAE1R8Uvw2LWJNLZZhGhqDumTY1AscjCZUHb1CegJZBz1",
  "key3": "gL5xYeRhouY12cnE5SqLCcYEAh5uSvm7dH6i4pq35HzKXfyVMEEEVsaAvyknY2npQnhqKsAdAZstzHtTec59FPj",
  "key4": "dXgCnCCpf31XJxvGkMLx8VEkyLTRYnhRAeXJmAHy4uf4a4WPGxTwovjYFrsLZeq9qWE5TvF45rejpsrCjTnLchE",
  "key5": "4AeJS1Vcjp2txE6Xs2ESBjYc6VrWXvktoC6UqfK5Mb62Vj4MStgvmKGFisvFyf5dY6BP6yMatb8MRtMaio9rRkUG",
  "key6": "5BPgmerxmd14D9yannus97No2veQGZ7MaijXogiiiadouMEhPhrtPwUgUAsHZkBNbKbNKtSzhmkohdXMsXZzn3Ru",
  "key7": "228MNzRBgyjRbfGKCQM6JZSU3vesd8oF4T1CNM2SJqqLqXMcaegRYAzq94mGLjTK2bh9paQd2DjwRoNauYUJ9PKx",
  "key8": "1EZW1W7VYeAg9MxbpzyV3ZrLKSWJFesvAeXdWq5VRqAjDVH6Ny3xzKg8mtiz9TfZNe1pGmTCpGRo27MJN1ridR5",
  "key9": "5NbXqqmHqRpGNmgATzkykvNTYjam2cAp5sSY43mV14ycoioiP35hVpPx6L5Mk5Rift9NjjCFQ7Fj9nnDgntGWHHD",
  "key10": "2nbYQs5HY4Z1FLBagyGtmo6qBSR17ifcVnJjh2SoDU7BJW9FBb7pGGu8pNGZcPd6Kg6tUZXYbbycQfxJ1wcXXqcv",
  "key11": "4ieBKiJiWEvjWL5Yfhsyd2faQ34cC91xjmHq4PoGxuF1DQWYr1vBRxKz1nPUnrmZMu4gbuWZjNkmm8kxtsnrDsxq",
  "key12": "4s2AzJDnFaSrrKzS3R9oaBALkA5wSHnz11dhLqkpuadF97z9VNt9PwTkiAKzPSB3WMKKANZGJEdatfMxLDLzJrab",
  "key13": "5B8J5xn5KPhRTtbvWiQSEZsGdeGngS8FqDWV6kmhZpChXUG4TBW9takAmagwmHen1JmNUkpDXzZ2ExLMsUR5N8CN",
  "key14": "3VW6hDt6BbyuE35Xf6aAu6FdrAcBewyCLsNJkhQ12Q22gqMETdUVHjq9FungQWFLitWTRkAUSFt4pvfCiDktqCVy",
  "key15": "3wmQ61rHvRTWepde54rk1QzT9n8ZrFUx6CELZQf7gMgU9dwYGiAGKC5iqmwbTnENXv23Nez7o6zzzchiX8MNgjQu",
  "key16": "4ijFw2sJ3MSGHVmQ2kXSYmejAcMe5eenB9z6qwsAAMsbxMWyFDVBr3swBj9GB3YLvyktn2FbtrPjSGqKF8YvuL5J",
  "key17": "25MjNxznd6oLNw2Qkmtw8XrL74uQ4jNprx6n5hGM9GNAvZz4pFt6S9qeMAQ7ctZsVd1ehGbV5gBr8FzKxmvNKR3z",
  "key18": "5HGoNstKbGN9w27u81TSqCW4giLTDWSfFd6pi7M61o4EFqUwHPhFWP3s6nbjTpBhd71ExYGRpt3tsmPWTAKx8CSm",
  "key19": "5PwhnXGbjAtZx7yaSPCiU2BRuhevS8tsh7J2VcM8DapsbpY6voFeFtkJKcD6io2FZBqWCvG1qNN36KAw8BCcY4Qt",
  "key20": "4qbXZR7cSM3iwJJvTAGwfLxKzELypH2S2tFgM88gwnx69Fs2N8rnbdomDPPGK6kvToNzJxtiERjqQWYXKapn11mc",
  "key21": "2hTnbg3xs3ptSS5mn5TWR5EGyuDFpEHywZN2xoySxcS5DHDaevikmZYyou9o6fjjFC8AqSE8mffrdqbwa88uiazS",
  "key22": "54X1dtcvUw4cEPV2PoonyXfTfPn15fTu6orBUyLT4trdUcTnWCJkkt1wEtXgytkLQoJqs6xoUUbdAQ95kfFAUoB1",
  "key23": "53CuYEkmw8t9frtoArzwJL1G3LoZ6bnqTRVKt2xdZjV9QmaXPVquq48ojb4sLGVbG7XfcLSBoiz9RhQ6y7suYX9W",
  "key24": "59d4YBonD417CS5r3fwrqju7thT81mbAsA4HNaSCxqbEao3LeWWL2HV1CDVoodS38YLggwCt7F33cMXBvihT67KW",
  "key25": "5YVBQEQx7t2nwRTseUHRSmcxRFr7DnQZ9uCJ3rR5BpNC7ESy1zi3UyTcajzG7tuz6hZFHkCBXLddjGBhJXGxAjeS",
  "key26": "5BxJCpr6UP1tvo6DrosUBUFxdZJEKK4Mw1sp4AE6skivQDpNzeYoC3kgzH3CpVavpGrXzhETnNLE6BGdyUVABnKK",
  "key27": "5Fw1EecuE6sqvTe2c2Ayr8iDHorrsgeJzShQ7U9zaQUfsf2cLp7MAmkcM8YhE7qmbg9RyboyJRoxvg98MkbSRZuQ",
  "key28": "3JGQ3AiWsmX4Bitd3MShAbF2f72Gr9ADJZLB3m76Ao8W9NPDp1nJuTWYci9Mi7m6fVELayjJJKEKuqsgvK2fSax9",
  "key29": "3naHgnkW3enozu2VFZZ7LdJawMV8ybvf8XkB4uTaEyicxuyBrZTuvc9vvJS5ELkWNTgEgz6W25eSi5sbQYGszQA3",
  "key30": "3Rgg7bpfGXtAEUsc64vyFsoQrQbinyMAkj5kchaYqTWqxn6STTDQQ1sJFPWy2sBHUoFahuhZ98GE7LdBjyV6Cuwu",
  "key31": "ZC9H18i2MuxD7YSTuQdNWg6u5wuhD9BYSbpa9XQL5apSYWpWLuWKEhYReLkUdCxVFLWtBhgNYSjtJGfVRemznVT",
  "key32": "G7mfHpHbifh9SEABQYpBUYudvY4C7CD7Tc45NncajRjaQubnhF44uep181xg6JCYDZ2yGAUqzckEgD5FUtfSXAU",
  "key33": "5pSFN3Ro5T7tFYDd3endjeoKSaawSgixV2GK3kNsE47FuujnHmTPbdfbRhqF64kMjyLBgrTeznYQCLqBEJRopaty",
  "key34": "4fFEFeVB81G4HdWeGpdxRvot1ECAHorjHfC7psAAtzBqLhCEaDSHyXfmzEDZt7XJzrtn5TwL8q4Uu1r5i5uaxes2",
  "key35": "5N8vty3DXUURr5prZ39d8aRvzdC91AA5TvMrLaqxrkmLAK6YMJsf3Wrd63zu21NcUkkJCTzSnWk7n4N6E7SceKi4",
  "key36": "9Webr5P32GFMaJcpQJChmicDC9BmvkvjgJ9BkPMeD5dDW4zB6k5M5gCMfJjJRrU6CqZoUbzMi9TaU7iYyoXqpnK",
  "key37": "4f2xaf3HP3pBSiK44LoFhMjB5avEPLc4A6BFu1yns8Xgjxgo7a4LfGLVDqWHfU1FpGVmXk1ZogJShBsD8FMqLxau",
  "key38": "3A6rJMQ4C8Qts6gkmTCuE3FRVPt264bYmzi3g4wUigkd5Fw3wMnBkn2nqJ7x9wdGgsBjesMrpPKzNP76T1eC7AUf",
  "key39": "4DXFhQWJEYXFRRZiUMAuAGjwAWiqmpzPYNiLfWZc8k51bndpbX24knffBBF8XrxHmLHLRrhvwFyPim42vKwZYFzy",
  "key40": "48Cokn1AYc2UFyWyk8k6u4GMc2GbMuLprEUFCmsyrRVaVjFnanJiKM1ep42GPFEfLJYLKYXFLtJgsSKgugaWSAXH",
  "key41": "4CSWLuUxWnJew8NAPhS4U7QdRF9MnZHBR2zhqQbRJVuDen445b6E4qLM51BttJYLFbpCiqpCGHyqLQDBeGbn3rA2",
  "key42": "T4qj2akDKkPRczkauMpCa4Abnr7XX9YXoAuWNgvzcLx6LBk1N3JkSFQXT1oAjahNT1YYHn2oLnwnKV9KreTa3Ab",
  "key43": "CSz7iSvkbJVxXmKSFZY8G46sdCe7YmTqpLbSqtWBjKwAcgbmtYwH6n5vHNZYv6ZBxD2wtona633pH6GsEFdzhyB",
  "key44": "3ZTW8ukyLjvR8MA4aUDGB9VwTKD5KkwwVZBPsFgfSi1suXeC1JoRUCZ7T9SUdXCzSM8pU2FUVYMWwnGaUM746ky5"
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
