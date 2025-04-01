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
    "5jvnvocpWSBLYCuqvVgnytibKQ7Kmm9ohaj5qwg9W1z9D4AcUn1K2gyD3dPix7SNEbaw9PGL1PK5GXtAyKXeWFYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SWeX2TyxdciQ5F2JcyzRNMpTPL6krrAU3dfmq3VTpr9oYd3z14Cp3Hcq2gTGzigg7M7VAKMLRQusExa1uB7dzqS",
  "key1": "4W2r9ViPRwGvB3EMNhqWx7f72ETc2iytBAR3pxssn8DfVCxGo9BinvGrzYJKRd5jC5t91fkDxRX4ZCxr5D8Emxzz",
  "key2": "eGLmQcBRZoMH2Lwa1xeDoDUGa4ALG89xm1RYjzuG1nZfWThy6FKxKUUAHLv9YxdKxWf8HkWnuS5JCvJXEMxBA9H",
  "key3": "3jekXnGC8DQ8CuSqs4jXgEQ3cKJccLt8NorAiW97F9o6FEAHWGA73rqzCrVW6uNPThgbG9Rtufp6uT6pdzzdGL3A",
  "key4": "3ZSsFDgiwgFT6WHqyHDBJvVkBmPj7CrRwEojwuQKkN81UfEGxArsg4PtUaf8xjsQqRXxd6G2AhLSuRMHU6jCiZvR",
  "key5": "5VAYYmKAUYfpovKRX8wrZpiKat6dNK3NFTdeVzGZ4xV49mZpTUpAJQ3c7z4woFweRLQ1LwijzcYHsJYrQ1Mx1Jc6",
  "key6": "5paZeYAxSNaReGEj89XZQxTQD8mNKzyGLjqtADMC9sknVW6vnbGDasq4XeaR84Go82yRuFwxKQDBMH5yRvJnvEbU",
  "key7": "2KMu98Hchzegi9xGjnh6ZWcUGqV9fV7gzpGUx4nuLAHXmS83F9zbhjg14QJCmD61jPMNvHk8YXAUM2sRvqNu9V4j",
  "key8": "3SeRtbFXaedAYbFD6NLQEv3hL86z1dvqHMAn9V2tcEJJ2xpxcdYiaTLMiYWG6afgbrnCWhBneRzYhcaGgwLJEbDh",
  "key9": "syU8Ygum6KicQngfaniUZ71MrcWETF4vrxwN41AQhqL5uuA2eWXD5vaBoxxm1zqfdzpfJaDfaowp5yp97dr5ofg",
  "key10": "5fqp7YUU41zRkUWgfEotXmFsoSijdbpvDtrzseRrKRt8jUKHeu6TdhN71z4pdcBa87mVKUSR4PUY35Z1z9ZGh9Gf",
  "key11": "eRVdEurr5yFxsFuHw53t6ido8vkFNtDoapnYLRjCkEEiuAPftTDyFeLyY4S5FSHCuPQM42ZjwqrMgPR3BLHUudH",
  "key12": "3tQ6iEAeRAeM6uNxpqSaqRSaowtrQmEoNYcZzQZMARRXW7jEKULq3ZN3ERX5pYg8J8rEdki5dwf5KZUtSQ4Fy891",
  "key13": "3AcXKsMo6zgxwzZuYVP5D8eXu6gWr9zfhLkVQyF8toqKRRZTvEprEA5sdYwLxPvanfZsoGe7oX3G626idHKHCo1D",
  "key14": "2ZB3yKid6kzhdi7k6gbH6ZncGooLotFd9zWg7UEBsyPtKitsu37MkrCFKraMYQuKLE4EXuU78AMGiN1vW97HTs37",
  "key15": "5rYmdf8NTqKoV89HitqnZ7QoBBVADwfhAv7SdM47497XLTNFypTn24agBRUkpE984AqTGoK4ALdtyh8jhGd4WACs",
  "key16": "62MYbckcqhQJQ95uo35ZTNcUsfsrejRC3MsBxa7WapJJAcZqREAaCVF6Mo9L7zVdS8QAiEs3qNTi9eNaiQ64qErj",
  "key17": "5yw8rvq5mmdFuYttrfQh1M9aLFhPSwgahC7X6t42kXP3dqjGHqjuZ3MDUMWZ6i6gphbsR73Em9M4vCwJ7NRNBPKJ",
  "key18": "3YAmT8ECCWwsezpGE5yv7E1pHxmfYyVJ3UZ7aUXNyZuMFyQN92hMRD8XxDRj73kPrsRv8PyqU8W4WsBADj9962pJ",
  "key19": "3xKBCgQTyrpfCbwFBMLXTSJAEqiZyq7J2qdYZ6Tehd7n5sjF4VUq8Q5iBUyXejsxcFUvew6GSJjBKeQzDX6EfCjm",
  "key20": "ZoyjresimWdihPGUojSe13cctLcXaLg3HhPRLTk3PzpY6tETAGYDF11USYXGgePN2qtFrVHesGvQekLnJorUzgQ",
  "key21": "23F6vG8dg56Ro3vXV8ddcd6aq4vNigNqbxHk7pzHFAfmpxNbMKbhkABWHnYz6uDo9n64m8j98h9rGt6Z48pDDwaF",
  "key22": "W2WyRdsZfdzZt7xgzMsPko9ayeSJWfXdqgivj6kvKfEARUc1KydHruD95Zs773Moxppqqy9SBo3Ar4mep6ayUhi",
  "key23": "4AEKqd5cKyPnhowmy9vhd6ZArz6jF9xfscbeT8L7U4RUS7n5eQ1XhBWbU4dDQMbWvdHAhc54Z46nBNB4KEi9PNfL",
  "key24": "D5LDKGdQpEV4sEbTexzRLNu1n8XMTXyCtPfkSPejXnvEpcpEJijzc1TJeTDxq25euUrMdmXeNg1seJiUWYR9qkN",
  "key25": "33sH1WdzYaspUHgywfw1ErHjVTMK2cFTrKpHtYHS5MpT9dEw1myFgdeKoZGYCJeAev3cdRjvXtreFVG6VeLWq93q",
  "key26": "3mgNjzCmMLStAi5CxBEd9BD2ELuaYCBRB9tcPs6ZKTacCuk1JBM7vn1siPDTgw5XwoY3q7dMAM37V4ZBHuk452wo",
  "key27": "gpaubKhaYbnVzw4cmzvegj4tCS1pUX6azapDbSNeHKkfNY5LjXrpBaNEqeo9pjZ57aQSLiLy8tWwL2gvuZUF6vJ",
  "key28": "3kprzL4Ng51FXeHVubcJNA9fXoBuxS2b3mV8uKiyj91CKzU3EjrGbMvbwCxVtW8rLqJ3M4qmLhpFf4ghrcetkN5Q",
  "key29": "4bjh2pJNKYKSjYwpYnFvrdmUHRhsvGMiYfQr7cPC4sFgRFcZiMLeMghVGjKorSTnDQLy1x5LuV4GDQNtoJqgJsJ5",
  "key30": "47FPm3WYVffakFPmRSiyY5Uqsfje4Kw5ToqiFYNtCNL7TMkLFUCAVXkxDPUj5Pf24bGm3ZaWMo7JN5BwmCnG5WD1",
  "key31": "3EfkdRK5z7C2bi9d8CxCytovM4WvTFyLGa2Tcu5zTJG9AZgH1onvi8voJfJWfCwMFsc51wnoPX8HmmKBLLjv6ZN2",
  "key32": "3Gxc3SxFejfTrWTg5GvcY38vWcMLZtMJCMPUjhgFMopTAUzCy86wcS95DyBKJDMEQpiEZ3MDmu7McfyU991gNjsw",
  "key33": "5FBevttbd1csVRbDCa7JzZpeb7JNRCCZNizJ5wMiVSNjMb2PDqEuypp5Egafwq3k6QVyhczJ5h3QX4hVMuyeapm5",
  "key34": "5f5kGi5TYGrdvPnawWRkp5CWSnwKhJR2brkfQ3VhJfnyETsrawctDJxNDfpiYQduLuqSPRY4zpL5WM8nijXDH3F1",
  "key35": "5N2Rcuig15pcTD8ByizxD8FtrMzvGKEM4zMBnGQEPCbYTXMnXn15VdtsozKAFKbxrZVWeEdGA6b2ZE12ygsPk4og",
  "key36": "2qzCDbPWcCvmE1a73s21oQWiHF4g1DYZLVReApvQ1VefVbyhYpX8SY3C3rhzRAwVK88kJBcSQiuyLeNv1xUDx96e",
  "key37": "2px1aeVYZC9PbBAysmxm2iV6p8S4EoCM9hrBbeEqxCdY5waTJYAgbGePU9UC597k5TZLEgb2xuLRrW5x6fn8ntbr",
  "key38": "53nCcJBvQfmmzCX8Z14TiJGDZVmzAn2X4GE7c28XcZvh7vTyCm8osEXJTC2LrMvs6Hjm8nDjE9v8CsaiGeaRgoS4",
  "key39": "xLGbxJgZZBAy1YZ4AUHk5MXw4hhHQvijgMba4ioe1dzC2xWziRzNHS77bAEMyQjUY2BZp5eAHQwTnaiorzgD5os",
  "key40": "4zjG8g7DCpG5ZzTWYcXKffihNuQYNYozTcytLR7Y2tM3J3JFUKFkFcHnRtjZKit5wven2CN9kmYH2fc9Afu3qvUo",
  "key41": "2rdGjyKkUB4T9RCBqRYgTsYC59fT7iYS9L8rsPKbeavfSQ9DTrV5g1R4WDF8PbsoFmd7Mznz2Y2yBPgyCcfgNu9m",
  "key42": "2M9zD83y1tFzUm6zYZ6EVXyruK51ZqF6mMaHVqZgDca4h9B4WuGcVhPevS47HdCnq1iwx1XGGVGo87nAHgE6CSqx",
  "key43": "5jS4KrmpYA37nwsGP4F8zejJRcuF3YADBGYrAoMHH39uN8nA2hP6WvNBNF542QGV3oABfdxxCF5a6hCahmSKa1u7",
  "key44": "28CcCqEKcYhs5FjVUEUcXhK3ttWoD5GDtAFuoQgErrikcMxcNaPE6LmpNqnEHznRD3ywfr3UktwyHoss7YMvAyjV",
  "key45": "M2kitDQ3TmhsFvLfAornPuh2ARgL2j2H7fv9zCocRB6gijmSHA9aX5UJ7BJTmQtvg6dURKJQKRyTCE5vPFtN8jq"
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
