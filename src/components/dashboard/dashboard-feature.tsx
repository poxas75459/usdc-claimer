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
    "2FVYVwjsugiWTdxhkCNjxHSKPfmxCoxYkH3xEecLVrtG2hoh4rwVrMnYsp2VFegChjsXzSySiKMzzvE512QXceQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49SCgnyoAZsUmdhRw4Mcpg1YzbHfREif2gZkgt56NpC2Lbc9Mby5BTCPMNPhh43QaBk5AJ9XrmBU8nGo9M7BiuD9",
  "key1": "AJJtJssbXAq5xBoUmYo4sTfaLybHmms5QLiKz4bAGYfy9HmRbPc3VLLGvV9CD2dh2ETiqEth9cckf4e2jZsLqwG",
  "key2": "4f8FjvfwgDKki4DSUhdLQXSXFJQYKre8j6r5LmQAsFDMrRxQMN9M2gUSQ4R44rfTVLskPBy4rw7sAYh8c3f1yei9",
  "key3": "5FL1sNovLePtFwM6QZJMCAKMLKNGwchnZujgK754QnrMrsfL1MjEcfPSTkZQY7hWc3PL75HSRoxygNdkuSLWLvmS",
  "key4": "55fA8PXryz8CAdNdKgCes7iBuvXLm49y46aNTRquEK1WcjcUYB5ToW5BDWQRdFCyPux4norKcdkj9JLafVtjB3SP",
  "key5": "34SQ3oRHXV8U8rfSTCrbjuRUfdQTCdgydHfDaYKizMbeCTtApi9WEATgDcQMjW2EU2z83v2z9rFZRDmDrridScyp",
  "key6": "2WhWFy1UbzSM7bKkvJxWYBdfddKqhyeUa94Ks9RRdh6tgFhGqj8WgwUoyLYs1e9JEoqJHxK1bPPak6MULuC5oRZN",
  "key7": "a84HX2sF6fwq9ScXEiqG4iCtZPz9nfonsVcwh5Go2tCQbcvP9Rudv7B3w2RBxynKDwK5pggGat4FE2ovZjK5Yng",
  "key8": "5UZUyLFcaWTFYBB4iruVzJRiNZaEuxn9PV5KU7Crj6vT1vzuGU8njBAP8PWW4hyNipPijneoD3UmPtfnfHgT8KT5",
  "key9": "2nAUDhpBzp5rbuijtcgvjpCu6As6X3ScEFLkKKDVh8WY3dyjVA2z5jfJudYHhY9hkBJs6uqG8x2ajMrTpFd9ER11",
  "key10": "2tQf2eJoqa4JxZpDPK1HV68PZW78u7ZveQkra9z2y6rMREhhx9J9opKc9AZaoFCDTBJKHpLGNx3oVSH4c5j3FAsd",
  "key11": "KmX9tdSi2C8Q6aiFqbQiJhEkrXvsAsikvJd3SjVKeGmKhvBvaoTBCXJKoDAEvHvyHGH1PG2p7QbEBpmAaciYYwY",
  "key12": "2UqXmuJRRQcBYG7SDRwqjNvny3TWrKTnSpCqaeMSxhXdJFJ9mt2MQw1V4K2LkMpCBHc5iMa6yHLDbvvNkLXP5W8a",
  "key13": "G16eRbfHvJ4YQ2qG5Z5MyAd9CJgATbRJffptR9tuXVpG17Pz7VzHyKLMm2Tj6PDT6fuZr38JeMGTNeGrF3djq18",
  "key14": "xHGsjaJiqZFV91Pxk9boVvyo7nLfp5za5XZ4Bzxj3T8aKePHXrTC9pcyreHvCGJsoLxbWn3edG4WmYcHmce6Lvp",
  "key15": "cewa7c1YFf1SqCdqiZVsHBgEHKzNDqjafmTk75fnGYVJJkG9eMh6vZKsE15hHC1ZCrsumVNDUawQkBq1xNZgSH1",
  "key16": "xdAAH9GKsMaHLqGdwhyTv32ioTr83CzvWWG8JwLRo6wqaqRTrKJet7wUdRTNHGdi7VufuKDLfKsBse3Sy3brJBi",
  "key17": "31dEouL4jjyx5SjMYYB7AQC8a9NTHX7jPHg8eQUeM7AeagUjUdijXKCX5hy7Snfs5BtFmQwoCDpYwCA9de6c7zrE",
  "key18": "47XP31y6H3jjXJ716iFy8bDZFFCmZ69BbaDbG8nbapgVAgWYwaZ3q8hcmKmYH1tykTF6U7zMyKF43VgUwfEUCyrA",
  "key19": "5uWimUDe2osJhUrbEi8txw2oXvC7kbBVJysLqaMt6HcLBz21tEemUdxpQbJ4zDqiWBHLLKV9hJ3QFMwadgSjJxBW",
  "key20": "VVa2ymck9AEHAR5puTWsRoBZMtYfSL58SQNzmWeoSUVJoAnhUw7mUPTRWduPa5u3rnhmuuwd93EEzSFtnthhgzB",
  "key21": "5wrquQYZ6AeG9Q2wPbQ92LeSQZLuMcyLFHdQdk8xkjZTb7tVKszjrrVfY4qczTYvCQDjy47ZCUZPBqJnnGE5Vg9t",
  "key22": "4Ys5Xv5gfJUeZEYSgcWC4zdamfUkJtwnrGzjnnKKSokfX62QTXqtsEtbruVHSDGTvNA1mgD8BU7ULWSaWpdFTgmq",
  "key23": "5JpSUcYB3bFEV9LekPaEVRQ1Mdj34G2jH949WEKW2QLCqLiXEfPpKU197ADDsTV2xZR7JrQLvkZB98eaJ3qT696J",
  "key24": "48Hjwc8cVaRFrm8McXsQuxcKKcMDS1sVReVJUghJ8D8qYZeqoTwGLa1DP1E2NUN7mbhT1GABXcXw3iJmRd71kcGh",
  "key25": "mgpKWDazkiwctHsan5Ap8kkBnTYgNYiCHK3mJf1c8VWjEoEbmgpS35aTQMXuberdWkpboLqnmmYrabpXYyHf4pu",
  "key26": "3MpAq14mpqMQGpTzrJhhHAdmDcXRV1TUD3XCaNqUz777GbHtrL9u6JyLtA97NHKpPm3cBVf5BiitFac6SxEpDKxM",
  "key27": "6k1bBZmpaxZpRKuh7GBnhAigZxQReNxRNrjNgM4DVApbQhJaedfgCknxnEFyKrBvwQ6NW9e5czMqieS6vj7zPZj",
  "key28": "3b8THrqQJqb6CWjvZ8bHqRu61nVWdAgGywMUZkCBMV5tJBasP9doaF9D1ik2h1WYcgHECJ3RVe9J7LKCXREsQw41",
  "key29": "4EQSMBry3mSd9kqosG1Sg69QroevL4oVQbWDUQksziNCTPNKBoczuW9c28jmEXachs16uKRcbnecbvsdmQVgzBk7",
  "key30": "nRHjpv9UFtMSoTDw8QpF3CDRrke4QMCz62ahh7kLixfqTk2cPKGWZZErQQ6NZqz9faPa4mfgEuQuyYB1uwedn27",
  "key31": "4k4aEa4aj1BNuJBMYzAP12PdEioDwhtqxHwrnGEaLQoK5J3sqeKzJBnN1ffxMNCpDVuM8mjeiv7MeLgK8vQsS74W",
  "key32": "3hjXevkmdhXeYoKw6VzKHuMPdKUkDszV3Y7jRyhjJmN5od9qas5KnSLzdvybnvKnGB1R3ZfoZhvegHas1a7DRLyB",
  "key33": "5oUkuvH65cJuzSb9ADWP8eiJHXQQCHzBiD4SNTpcYtbsS2TnMNFjFXpZyBi3ebJ3SPeUo8UCVpAHXnX7GDsvjr9C",
  "key34": "xXNgsw4iSQGisNBFg3wxKmhhgB43HQCrQpJSig1MTUkzhu2Gzcrz3n19pfMQSP6DhFFc6RhjVVZYqJmfpT8MbL9",
  "key35": "bHGSvgaUYaRaocPXN754wEU8YmvEutc4RtmBrwbTg4JWvfxSX14SpocRPiUNE9xrvSacnZV9C9dJXGfYUbej6xC",
  "key36": "B244cCv9HvrTfsqHueGboBqGiwsQREjefWpcNU1r3VdS3mrGJfwb5R1EBN7pBUv9nnVZweKK3t4jHBfWc4p8XWD",
  "key37": "469gtBc726ydb5SHPFfp96R8gatNnuMrWHtCh3SjpTeGwrxn3kvh62hB7Ns2L217vp3wUidJ7jFhECcmr8wKU4ck",
  "key38": "3GYiW9RYiRHAC5YS9jC5Wsmk7enniHcWqLdnNNXVc5toadvAZnTqpA2LprBgpX2vVMAtm1NoJnP736x3hquLU5GY",
  "key39": "49JCn6PCqgTB4HZbN2r7ar7PZvgxMyYJQvfWD5AReV12q6ZdZhffwq919CNuU6uj8bkkWhSnataWyph6KZYnauLL",
  "key40": "5ZQX9jeGUzz1fYWEjhZbKmGkwUmfGMbJmoDMUYZkLZFuPRbfRyeeGQrNeapJ3mVaQUa2BFJv3t3x9hPR3qNt7V8E",
  "key41": "4DqPCdLjQ2KkW42Tq5bSqTvGC43LBhUDbUL9NXNHxquDmUsoWJ8ne6YKZZ4aqg74d6HCMvb3xYdC6pKx5t8HPePt",
  "key42": "4DCyNvx162HKWLxwBh1VgZtrkcerHBwRgG4vQucrsoaZHodneQ7QVFHBjfjA2yCWFXk1xjnudFVDUYqkSZf25mGi",
  "key43": "28GxfLk9ha9epxzBBq9NzEEr38ER2aCpPuVUKjEQuepZ4Yipa15gE25snJkUEpAtaUrqEjVVjNKJGzWgazVaqNk3",
  "key44": "5MWUrpocYL61fCv79nosaYxMjmy1vNsJHezgc6fP85BZSsEcxtK6RtMmjHE8A4efzy6K6dxDMpj7Lrkev3xyn5JG",
  "key45": "2A75nLTXAhKbjpTgGeWfhzZhkAtRgXuJcRrnuvKaRo9wszjfF2Uqya3cekwvSyw9TA2zxVErxPhgfX4cdaYosC4s"
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
