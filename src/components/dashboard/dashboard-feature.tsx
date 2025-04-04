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
    "2CoP5aC7UJUQkWmarrWwAKaoSTmKPsFwNh3aQQg1wqxyNDwnnhweWdSDMZBU9BYFSa3ogPDSWcTLFbSamwN32ji5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TcDMqXF388LULTcFVNPvoYXAaxCmW466Cy1Kd8rprzuwtNH1gmcVtUuK9tAM2j1C88AX4FonnUjzGph61YdGQXi",
  "key1": "2ZJ6qACWd6K6SBD5qNJ333hhXTngKHvcNS2EKYWyM5KycW29is5wj8FEEBbKmoXAobK5iSCDFntYQQhc56bX8DcU",
  "key2": "3VZMxbcLV1poPp1nVeKagNEWKAS2D6oR1eYk3pHaRs7z2hMSKDL9th47ydyawvwXi2uaeyJ6XHL53MpdoSGcRVKy",
  "key3": "4tHCLxhcFbY7X2Xkz9PCwVMbM7dDQF8oCmaaSyy844ZE5UgEtNt5sBq4EAvoAzyY8jjZzKgHoB2vkHDUbeJiZJ4V",
  "key4": "JBxrSL43MwHmvxU6JJZ8RArNZRtFEu4irqgULzcYYLShZRZMCfrib2vWJsEjv8MV1spyk54eSnynYXc4rHK6An7",
  "key5": "5DpjT54nZAuwbiTonQ7svi5Pua3VkihGR5rLvaECBrqMdW4kNCn81ithxr38MvcNFauofFZMgCCAqjXZvfR24Y5Y",
  "key6": "4ozqzAkKQx2Z266gfGbLtn2Z4uH44Djcc59JiZs5i1yhqZ2QNp6rQ6j6du9iWmM5ZwP2y52h5qU7ycD6qA8aNxMu",
  "key7": "MTC1jPU9KrkEqqRXdEsU8KbH937nTaR1WixEFXSmKUAffdEtoX69ngqtX8u9NswGChr8M81s2xkUwtzoLkAyJTi",
  "key8": "5SbvrXpXBHvCoKfCoNPhWe4NGP6MyBdZFE2duu8RxyoK89EXgJFYdunS8Qume1B7LG18daXqC7hNEVq93SBqm8Nf",
  "key9": "4SFQeZ9B481PKHpPvYBece35VJuNk2mEAjLkWVRLu88FAJEQRRw8AfL52oNCiC2krykTBwufyf69EK3Qvq4DJcaC",
  "key10": "457o7G5fnYjW2cpKutVMtJXgDRgfkSD7JUxjXN2wZfd5phE9AVPYag4r5itFUTU2cmewmSiTj4aHkwTFmTEA2yLU",
  "key11": "HFyKM1a6vQfWZKybz83oWAiLQTusNBCF8HxN5sohEvn32sYsnn9f8ittz8wvzQFznW8N7BKnuhHEkrXdU1T4TXr",
  "key12": "3UazAkyLHCPfwuJDumjBvKs9xEXwjEY5ahTw9E4ztUfdo23DmBykAEEQufmPGAx9h4LqFgsGpKF7fE59VqbUrhiF",
  "key13": "1bhhGQvqURtL8DnTXcAp5yQqurG6rLqBDApmmMfb7vvHHt1ygAQRRjiP99XTFB9y4o4f9tc5fyu21uAaSAfdiVr",
  "key14": "5YHKffWUgZQXcZa6psjcAUtoKGHYfMQ5RLFNhHzxnAVXi5bsBrqk8u9Xqyrarxbaexc49ias11zizcks6CmxVT8G",
  "key15": "2BeRbM9hkKiayzajTeQ7ZLXYZp6qG3LkkGuL7HtcaRQoUYpeA4Qrx7ebgQdLrBwZb68SxhBfzxMegnoTnhmPYrbn",
  "key16": "45UccVdDabKFucP8kRr2w6CGwrrQFjgY29xK2BrHv1jmjMrofKT4XgDXreQXwdpKkykph5HP7SkxoKProbWgQvvY",
  "key17": "5bne1rFCyaMGXy8mX6s78BGswM3MMbaocS4xe2KUAmFuspHkLsWTeh4tyRypuicchiL9gsvAY36BkJ2ag8316Hdn",
  "key18": "5F6U3Ai7JbuhwahQeXrjvGmLVFCq6K5mS2KFiNa8HymRp7kfPLA1zUoGt4uRoQatN38ZNUEormg9VV6kRpwJhcot",
  "key19": "65okeGNZpj5L21e2no59tA9zaYLJyAhUdwzd6246FsBTwu9UXaPqDrebD4hUn7BVT7Lymgen1es2cWrJ2Czg5L1P",
  "key20": "3wWcXZDL6uLY7hHkBs2xdkdQggDWiCgBpX3c9nAXZvzc3dfhWP8Jd7ca1joT8bvZxpmEYGU6Zik1b2ZdLfBsAutz",
  "key21": "21FQqLXdp2fxYB4sViepo2KdbDbdaiSqcUh95MjgZHHX9gnGQKcGFJv3HbP1rrPb8NXWYUA9Cbshund7DA1EFc5T",
  "key22": "F1rZLLd7WeSA3xoHP3JvmdKtY89rRAeKRWdpdBiFVazsb38GYWs8u9n9arSwViD9wMu8HJG8MkyybgYYizMoDGS",
  "key23": "xN4yW7yEkif18NCKfbbj1jfEqvHhGPA1o1rzEQ3yzhNRU5sgDZyheZyMCh8qW6byvuReJbtZPLQfAFGRe95gjJy",
  "key24": "45FDZp2QLJBrwT2Q3Uyq8zxP6DcpvPqE7D1TxgdAoU1HiaM5MZmthLb6y3SiPuTf7knd5rBogdi8Eqp4AnmgsZck",
  "key25": "rAETQuQEk6SebMA1EmWxwAxGXh2gdSG2rwfDoWE4qmNpBUbKwjChQYFJ4XpuqtPTRpiBh2mGvbshLi9jfSBpPje",
  "key26": "3MBqG1sRp2SuQPUe9kkvfB1K7xZaTFs5NXprmL5mQAKdmdaKMZnNbPJNdrZAGLGHrkFvJtviMt8qTdKGujoNLQmL",
  "key27": "2Z3uEksFD91s2kc5qYDv52cLfwkTUsFNLUs9Q2LZLnPfbJMvKURxinAnooZgPYbmqMvqLNoh2LtaxW1Qhoosx5Yy",
  "key28": "53Hm8THDbk9gysHykefsXFnTcMjXC3BZwd2YyucJcWEmUSB8bWMETmPtJK2Hs6iGq4qXxAg9JnBHkuH1h5CoB9Zw",
  "key29": "2N7KWuATvmSvxooupPPPY1hUe59m3Q5ioLJcZGCF3bnXPXMH82nbAe5KppLiMaYiXWqzvKbmn33wkKtv3TcKg5pZ",
  "key30": "2UkDmNkDeJJkwfpPwtdEXDoWKuBkb2SRKFzwS1vRQdyr6KXvzR9PDdZCEe163R5Wpegfoq9Zj2vsseHxod133noF",
  "key31": "5UA9xHQDkpR4JdseQ199SZyT7nK4CfukgLqGWdcJvup1Hr6d9FjPm1SFCd8XFUZxjaHkop6A5HtbZfQ3gxT7qbjA",
  "key32": "ej7FsHoP7k7XgVV9EJNiU3PaRLFJCSRHvmJyNGCrfNY8PPBVKsjQBjU9zxXozf4D9QvyKo5N9XqT4rHmbevgMXC",
  "key33": "2QksJzcmRLysYQMoGsyqALawMewxfjY6HFsASzhGdvn8nXLqScyegekYgVFAKo5X7ZSKUa31N6ZjgwSoMhfqGX2D",
  "key34": "2unBMVZK6Tv5DZ2LPVDms4YCatMuFDMrpgjypGmRMAhmynokPTjdnDum1SArVwaqh5F5n7zEUAUZrm7FSybTYGcQ",
  "key35": "4JbkgNvWB7Nh69RvXUaz8ydx8YN93AYsPUwUp1ykf1s3xCzJCbtQfXzBcGT8e1YHQkiWs4ffXbejANGmb97Zzxgx",
  "key36": "kbESh2vJpyWyyDqwYBC7ijM2QcTTfHi3sutXfQK8sAh6Q4nPnFPPdNrMtREB4AaAksdayEdYr8byY4oC3BcWPH6",
  "key37": "2V1UJ2YMWbBGJFNdtmAC1hCC5PByPxdDD5XZMj3ydKcdgt1Q5Qxu7g6ziuxVKH1a5rXu53raJRvf2xH9zzigB3Bd",
  "key38": "2U7TePfbLPXDtD2YnUkrzDGZGSANrH5g7StUKRQj9ppwu232BWA1XkueiD7RCAyAU8d1bndchyjD8jnKDsZdF1Dh",
  "key39": "YiUGXCTv8NNPAVvnA7noNyMavaAyeURLD3B8nQviFXkoNsNudRnLa18ZEvSnhp1ki9TeU8oFubhs6juE4mi5QEq",
  "key40": "58jqdc5aTZ9HMpRrMNEXPYCECuFYyQrzQkhDtmwc5ewGJyxj5dtWX7fG2nhwfxkEYAT3SLB3DNzrTMMh12HX2BAS",
  "key41": "2GEXS523ttp3UaFmmDhpTyTgzP5deVANV5eLWXfjzUPzXX4jGbFHTsaSb9kp8dEXZJRdqpY2wLeGT7EFZskhmn2C",
  "key42": "X3KSr2WCuTTZNQ3obMhnAaYdhAbfaUn8wqcc4Lj8ZEp73ArotT6Vo9ZJwVcSzmtfub8DvsUrN4V8LNRsmeya2uP",
  "key43": "2ogUzhjnoZLRuHVK5dUNrU9WVHtwtuzRNhTXCXbbEyKy6dJPC7GP3uQycvdNqfF5BgVQmasNGpfSTNb6dH7KGKiQ",
  "key44": "3BJmVSWc73zfx6Jm1MU6UoZYmqJ1vcogZcfGrbCnstzXng14xwpUJQNnHFSnTLRAJ1PwmWSc3dxbKTPagtcVdMhg",
  "key45": "3YUU1eJcqR5DdzJ37CXnRKq15ZtQgZPS1HueoRFLd1x2BXX3Yoo5mfNitTABXPERLZZEgp5atErqKvvJe1fmpuc1",
  "key46": "2YJqhVUUoH7Pnd9gQxLaLwhFNP1aAhKw4gzefS25ZEpL5FSf8zMBB8EEu4ZcqW7TaTgzuBaaiLX3mfd3BdjTDbpR",
  "key47": "8jj8dw5wTNSNDe3QbxdSjumFUrewv86bK5Bbjrtuqtd47EUU44RUxcpFk6oESkHu2korABsxxKq7ESNHnBGZXKg",
  "key48": "HjHSFL9HXVLyXiPiWDxJu4WJ39TbkfUk5T9eRwsDgPWBCX8sceVxYor1aXHE2qVQHkL1RbmWdoRLrP21urYYmgv",
  "key49": "4WFZqFsL5VSfEAzKwrmqAezFFTq3Zh1PYqsGA6DD5G1dy5xpwN9n2PFF4Mo76Y2eHosdeB8EGzjX9wbTUvgBeX69"
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
