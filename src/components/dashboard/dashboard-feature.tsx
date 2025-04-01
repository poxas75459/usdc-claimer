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
    "4ff65ZqWpw4zfNRXn5VUBHueBXVWLrwbYCT3aBTmr6HZ6a7dGhtoEVLvdbugv2ByyiSi5zMpy91TqLb2Xv3uZrFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SM5itviQjSgbqkpjr82wPwRgcszRuE2CY5XoLEMTg973v8eHcJGK4YwcrKeDnMpLRHVKaLEnzY2c37TRKcjHA42",
  "key1": "4WdgGDUQEXSyZPkQ7uBBUCUfpc1SZYT58tJkb9rnZrgQr2cfsZzrnABjv4tBGvA64TgnNWtrYe7q4eE9DAVADET6",
  "key2": "2LTPApyXg76Jmv5om9bjvrw57ehRHhR2D8RyBa8irWZLyMxB2mJ5pUTYA2WBMYGKgdcraoohn25dmN7qPUBou725",
  "key3": "EQGCHVhETLg4dhrE6rYP9DQecWM8fc574FqrDwBuAMZ3ZecwTUZDhoC5fcPp3pzVbUuzQmBCHesbTQ5uw63evjC",
  "key4": "4vraPn6VTQoFUYYY8okrbSDogP622nnK7PFHP6WRBhBRuMPYPsq1ghr1Ebq5TgXKxnrtycPhnakcfYk2sf4PkKdD",
  "key5": "47mRP1gVXTTM7GfvWoJy7FfX8sEHgvUfbBc2CZngHGZSt3dp6mneydADTKKQr8YfhXKUQqWGH1ik3VkdLDxNT7Ht",
  "key6": "4Sd9LGsyxGrXtWRya4jt1LUmUM466UMKNNvo8CutoV9by9LrAY8EbRkjuBeTstgXvXcSq9a1FRM6cqtZ1MRjKstV",
  "key7": "2bqHFK1GpHTQLKzKXcWSfhHpAPPR7sPHnG8fJrp3JDaavoCvt2emYRyzhU8Q2ER6rPz2sRieiXEFsXq9WvRtj2iY",
  "key8": "5ibSZjvWAVMVb1zciJMoqp1r5PRwCBJ7YnEkypWNck1swNDxQECA1eLBR9JT5rxoQWX5cpKENHmpn21KAFz7RTkJ",
  "key9": "4vQiVU6wj9Ni5KuPK7mAoFZjaRANhtxQEe9pbzt4zdZSfrWGNtksfaAFxeeP2Lt3fKaBMcMT8ezHqECnE6FxHURk",
  "key10": "3SSdh49WM6FozmeTu5ZQnLJPHTnghkPffDr4TqxAbAYYbWTepXYG9oeUYD3KppUmwyLh2u5S69nLMYzVGrpS1V1P",
  "key11": "5M7CqSqZHevdxfPSuzETwDXRkGZG6TDHty15wmq6zDMQgghXePTnstU8yMLNVWuR7g6Yr17p1L397Hyzt2HqcXaY",
  "key12": "K7FeiR15arkW8H4wHEFqXCgzFGcCCB3WtuyPqv5MSj5TR65rea5prukJgDDp1YxJJhMxs4o8HUXgy8aLGiuNdv5",
  "key13": "4o176VwSZ73oQ2AMcR2muMJZk95tL6QSiFKB3B3ogH2W6seXSLPE2n5Rr47o4Um6Scc6h9M8smB9AeabpEnBu21g",
  "key14": "3SSijVKPotNn2WQVxtcN4t8RDCJvBkmVnWKMyQuoB7X3ytY9ufCWUM25nGuCap3tu8tr7DY7m1N1H5TAeEMQfraM",
  "key15": "3eMpjfvTGu5DRHAH9po18wSiVg2R75xJpSq4b9MELnAXHG1Ci7f5sUqXUehzNcVSYuhe9arfbyAZ3R7DovT65PvG",
  "key16": "2g3kndopBhVeD4tewc2yA9VJwJUDWi1Uo8Q1BV8gheGBSGLN5SwbPSBiZcGkGSko2N4PpQ6uBkT2srGxUwnD7Y9r",
  "key17": "3F839acRrwPUbxcTuiqN85L22ViKb5AE5viRJRHaCzSJHZuKdzhJCAyY1YV9ocr2ueoZ5Wo2UCT1RR7AcsgxHURB",
  "key18": "53tQWEsdPHi6TCo3NzKTQ1cinb9zRNGSjxNWewkbPZkLQr9n37kNVueRiv6c91eFL4ixNTJjsdFEtYbhDwKq98sz",
  "key19": "5Jka6KYTvuT7pYBNNDyLRaGxCa3CNa6WLe8wzrtueQ6pY6UUW3BUML9Dee5HVJSPaFMzySYyTUPgosG3jMkqaRqL",
  "key20": "2jKwPNsWXGouK1xEYnQn7cbQayRq3fXTW7D7iNKuZAhNH8Rmx7xCxTmXDHbD3SivqPNWVWAqMo3ANy2z2GSSyKZz",
  "key21": "5PuEukYpvP5GkC3WwT3EP4jzXYxC8uPvTsdURVQQvZe4GynQkPU1TYT32w9VGvDdMnGW3aCctSGj6W9sz5u5Km7D",
  "key22": "4F5Em5KAWxX1ucVgALYT5ceqrBXaS5MVrySyjTLWQYveMvzM9qJEyqb4wqyYfJW4DfyWe3b9RigtiQ3sncgj3qBf",
  "key23": "5x94kN3g4zJF7KHeaBxcYq1hUEd8CmPwWGd5yaEJKumQxEGDe4sAekauYk4v3zpHQiEeVc7gek2WMSm4BH1xk89B",
  "key24": "5kUBrXcggGj9tqRmoJmXXeVk5CkwTqgVeDaeuWfe3i66GQicFHovZr5oNN4P7zxvJeENW9mX2bZxACkMuK6n4vVz",
  "key25": "sEF5jKEb8DRKZN96ECUZytuTSPZn2LouTquLZodXQET5hiAQq4om6U2jcK25Z6ZVHsFHaSi5747LPH528bVajKY",
  "key26": "57EKFd3na3ZEJtasvpWWG1zyGv2qtkKcnBPvDhZNLjVXec5V3UKGbxaZ2JqQsPksqq7JuP6ZrZcxtXQaPWJBusGE",
  "key27": "4NdsKcn4Q4HkEWG7r2koKLymyTGUa8Cgma43xgfJqgvhPABGE1mZAKxokjguknhY9BHmrg1VdKEULaUTpERAZhv2",
  "key28": "4tdRiLnDCrJ3UxAgj4eU8ucz4YqEka2n3J2wCLGKb6GmNap6jYu4YcRZDXmvyZaA6Whiy87rhBJs9jR2LyySLbgn",
  "key29": "4re3i84eju5AC8J7fQG9hiJPkSyRFMBq7dTnAJXC9gjzF8Logub3w3qUS81tNmahqJAxbsnAqcYcH2Gk1Yz797NA",
  "key30": "4GfDBQs5k7YvthWN2SsviZ7fwk3d6s93uy6xdjhCaF1vJ82iAucmmUx8LREn3LvqReds5JyrYAPSAhbkRhCvwpHU",
  "key31": "3KYikzABwJsQFsE3rLi7jgHgVjuhFhiRFjkmPRKRawLpAQpV8tYQ1cEJ8fq87VoN6fBZTtQn95mbJbtL8P9PdeXS",
  "key32": "4XpAFBiGdjnzzLQWXJU1gyRegFPVxApahsX5e5mo7UxZepm1oAcKGHSscH7pMhFCF7whgyn3524UrWAXUQCwaqXE",
  "key33": "28ki13So4bxhYUJEYKoKZpbrZXZNAq5ZJT8zY3C2qCKw16oAg5rr1qsKLZ3ngT7PCrLKA2zY5FokB1w9t83Jhig3",
  "key34": "4LF3acC3vECvqdNf8ftesEerB6ZkbdWmDEFfjh3Nqu6NhwsLrCWgWhM1BHfTUjxJ4gJDf23bhBe8V8oGWG3Z5VwP",
  "key35": "61er2GQW8PyfVDpMgxV6WX2hnt3vpLdxjiByzS67HD9t4fiVyyMPYzvjDyWTMo18xGR1EYQnUmMuLWorA2GEnS6y",
  "key36": "5jXXYcmRKvingeax1AMhCPZqkYnh2h65gUTPq4BperG8UbDfV2mAs7CxPhqoNhqNSTpB5PmVBZwSoDy4eB6Jcaop",
  "key37": "3XKtDhRh8b7BNKuKnQaQxBeNNMJZ8dqPghivcYSxno5kTgrqB8KbMxyBrE1gDTzHrW4ZiD29re1V5h9KL8TFdqGX",
  "key38": "2xNY1uoRpweZtGr2jfybAFj8RfsvQGDDVotJCBD4HDKJ8zfNbbMNTN19Qpr3eQsGzWU99Vwbpb66QTMSZxsdwFTs",
  "key39": "2gDQYbwsWmX5s6C2m8Jgrj3tTJZAjZKeAzQtNDR7wVN4ahTDNEsca7syyy2kpSsL4F54ZDxV9GEydk3V9U9jBAW",
  "key40": "2eh3PntSJidNokXxyusmMDg5zc9BugJGYXmXLPu5dN3W7Mv7yx9Wi2pY5jfhf2Sd352q8soMUp8x6Ygeit3k8DNM",
  "key41": "64CUb5hj2KNVmG7jPCjSn2zcVdSWxT2Azf9oZukfryx6u4Ja9Cy75G1kPYrH3oKsBbXvm7pnGzddT7Y2NWe87xUn",
  "key42": "4zWQnhKwfszeyg89r242CwofKNqjXfa1HD6uQsLhCTTpMvb99XMiTaCPtT2NmbMBJidh8XLHam1SYFmTRNhrGx11",
  "key43": "2f9JvHohWsVJVGFHskhmQ7GJZ9Nt73fwNQ3gkoMnNDB3ckvWhn2Hnx4c4ww3DigyNk99B9oUiXbURki2JqNZGvF4",
  "key44": "bczw7KXNPqW2TxTm34BrCrUBHBgyiw7GKsCqefktFGSFiScnTRpM3saEbGTDffzMrFS8uhUbv9YZdYZvE19A2XJ",
  "key45": "2dVRJTa6QqhtoA9FnCpusosCrrXTvFRYczWVwumyN3LWz6KERWTZ4F8TZkFZqNCtaku1NHWZgLV587hmdyWZXwzq",
  "key46": "24b3mSoN7gj4b9Wg4VuyvaQve9gg5o3kgWijbuHSwHJegDdwBcXGtmWH4GE6DxGYZtU8QCaTmNiUyfxMv5RduK9J",
  "key47": "45Wyj8fAHkmoBb5BcFkwBhvZ298ivg8zBDePyvrDa2MuxFmEcZd1qnwbfnex5tNu793vUJXVyWypLVzAmz8rvDoZ"
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
