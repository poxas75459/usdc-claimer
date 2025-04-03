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
    "21G618vhTY3DrF6WrQQyyxXJrjSBT4HEvzRUKFZ2zpFrhS3RfJJiPL1GMkRTb3qNP1ra9jeKvHHoXLZDZZZY1fuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uD9LebP1Lk4FoxsPkcTv3jXPhh49TgoFuT1cNYUP1qdbLk4YzW1TviEWczKYurthUxX85grSPoj9RvkLJWhJATz",
  "key1": "2jjgKbxS99XmWV9TWzSZBLyuvoYJRsr9xeh3wncWmtmg1m3SjjxAHq4HzZi98CuwPc55cNZwhR3UcR1Ly8ZC7CKQ",
  "key2": "gL1V8Xb4HyHvA6GNR69kCDdkhBYgaJTfHUsKC5VSRipfj1bZ4JmuTRaut7kQbbxagvDFFyuyTDYQtzjDH539FZX",
  "key3": "46SeCLMskzrEPe8g72GgkNBz4CRxa1uSAwt7wYkDeUHWTJ6Pe1gt8YaJQttKv3F4HxMkMDatm6AVDeKtarn7ji7C",
  "key4": "qQdUqTBgXctYSJQ7ekbUAqhzUGEkREj9ZDNF5prG58SnPVf6CGKgmWXdgMBtYr9NxVfph8mP7TE8byN9kdRpdML",
  "key5": "4JnFrDHifKpVmsAJMiDgxCpyKCi5bUbUvnfvUi5WWA4ZLdG6xFaBBQ2nhYaGdp9r929bEhAhjQRsXVKpQX2QyYZt",
  "key6": "4VG9Bvq1JnqqF3uVnwAfj3ayk3wmbAtpzihRfJc7eTcTt3ZxuhFPhqghETG6GTbi78mncrAHb8Ka3P4YUTb78tjv",
  "key7": "5rcXzE9QiaePD9zrawmeMkvT1ifQ7weagNrrxxzCPh8gFnjqyG7ioRLvW4YBtDQQN2RXCLCsvg8MccT4afxnb8FQ",
  "key8": "56nuEADmFQkJmisHRZsQ3efrKnPFVX9onEwjRdURqnmqWpj614SJPbsfDKPoBNcNouK9cGrM8K5Q89wX5WJCwXdo",
  "key9": "3SMSa8ssnqpdna4nZ31ri465vKKm4GrusaUCk6AC5M7rQkTCyT9E2DnUy4MPzr2v5jxqgn8fhgAUG4X7ukN3dSo4",
  "key10": "VvMbA1FJsKLz5Gm4LJscJcRsac1c4RcyPe87JXFZNqRpAqhJYRodHReYHgiuCmMRworezGxebgmrcTYxfd2dK9f",
  "key11": "4B9obc56UzCGbFpXM3pswBkCBVicZZgkr58qAcj16kdNxrgWB8ms5885LFRE2RJZooWSibi9jqyjHq2ViPvSErTd",
  "key12": "5GFnWFCX2hdP3YbbwWL4TXg8D4HAFNUoHuzrNbx2Trn1C5zCXEG6b269d3A66fCdxhwDAgsWJPyUvtr5aGrEToXk",
  "key13": "3o4tohZBsFR34siX2i6wvC7NBKBqgkLy47QXz2me6gLBPKSGcDQz3gurATf5RSkRC9pWzmLuHa9JVVY6ajUjnYdK",
  "key14": "636AxzNFxS6WUpaNVXnYmgjBw62byPP89tVX5BCcwFGwTwcatTNE1nKfrHSNAvmexxWNJVKT7mmqdVMoKQrF4qKV",
  "key15": "2u3SLsboH5tEsnSPT2Fp1wLCRdTYRsBbfbJ41eU21zRic67Nm3BXe7HDBtmgunADvZCteaZYMVAwobW7jJuzzq14",
  "key16": "3EXgG9twR1tzoGJG5PFnBEFaz3cyazMq7qYbnHhRHdd9YM7hgAC2PUUNHU5WM3GxUCTC1naADsMVVZEaU5Kx4z4D",
  "key17": "yUuNNuH6ZoRd9Eczbu3AAfBJAFxtwZtb4Q6814PgsmzZ42LQnVd8R4KYLgtCwrSBupBTMVFKpkRfj8NEAo3NLWM",
  "key18": "FqoUmGSaRSYJpTBnZXy62Ka9mt9ve1zr3rSkBAmG7HebC5c6ERJWATCE61iajigSYt1oM8iJmp3Pe8SWjdDw2GM",
  "key19": "5qdRmZyV2GhD7ZoVrEEeqLjuXa2BKExtMxA7eMWAkFczF7AWNSA3NoeK6tBsAEdrGYPoVVaeKoQ87LDE9UzSafLi",
  "key20": "5cVFB2vCG3RQFmoQmLaKQJAfeAfU1runKi7dVJZ2MZxBhpfAC5219cJaeQNknWiGtaSVB1LGGr4eDGm5Z4cMG8qA",
  "key21": "2EdReFuzo3iDkaNhJNNjfXTJh94nm6QY1xxgmL7yzRghiJ3jvXPNLcRpZBF5anBuq6EM9WwrbqMgJ3WRL95TRocs",
  "key22": "TwsF2X6ZKM2rH3LLShL6EJ4dwTSmths3315V4aXXnDB1M6idPjG42SWyUK2uUCxe9YoyLH8qFAXisk5x1P4NeqW",
  "key23": "udaZHEvU6sQkXebQcxnA2RbhisXv6msG5gAvsHJtSo9BbFJWRsWYqhCkkKSXyprHrE4jARuRWykPhfz8bLcrwBX",
  "key24": "5G9KdEMRUJtipXoTFpYTmxeRMjSMGYcFCiFWaaXjvzezPEKwj4QjbPCwq4Ugb8NYzYTTysjDzSYjUfjMp67SqwNo",
  "key25": "42mXTFowLpBwzEh6z1ptNdgueokezrN4wziefjPfLXTPZVnHcAeJjo1fva8pLnUvM5pFNGyMxiMhmdZkfTqroguM",
  "key26": "mbDXqWYuC9PYos824ESMCnqjSP5B5xfowSgEeQ4ecEUJvhwM7qQeQhVQFHJuyHmg9nmGMieY2HJUc9YRxJ8Rrrf",
  "key27": "4xYXTAF13nAEJut57tnfdefgtM4dEbqhNjk9PLRXGsbqMgYVjcrRRhwkuFEkpzcLWjL4VFWEuB8ciJw5g5mSsEVc",
  "key28": "52qW142HqeyCL91xFaZoxaRtyZaFLR8hNLNbr72ECQj2bYw2USynBFfwmXRdJiRr8uH17BHwHYC55XWJjrftfM4d",
  "key29": "5hAE76xoxphYVdot17vdgDFCJ1XXegRtV7SyQzNSWxa8qBaRMo3diYCEEck4FRxWNAWwGayRbzFh8AWT1CMFBMkZ",
  "key30": "4Scwxh3998RjkiTENLxAuz1bumG86nFWFkjZcpQc4DxvtR15k7xAxsVYP8pn9wfbAVfsTrpfk8moBuC2mYXkS3AY",
  "key31": "MSPM7vKGzJFDFBthrCRtkZy3N43CuLVL8vX5ZCnrvhHkoHZQXdjTzTSdjuinj5QMvQmx2m2CUJ5PRqFMXyeQ3Gn",
  "key32": "61kWaKvTvEtguDg3YeTHXtCX5jRY8LyGpQ4FioUdCNjKVca14SLuSYweYdhzmBDFdCcHi8jeoKayhwphaQ4Rshef",
  "key33": "ymZkkpXTDu3GqV2FgTN39WkmBNWJTFHe2So9daZ1LzehBVPoQHkWYDbHrW9yK2RtERUuzGWqdzsWrn7LyirCWBX",
  "key34": "3v28dXCd8uEFNV9tYU3jphAc42fxH6X74tx36eeTPShxhwiPFkKxLJQUVXaFmQuv7xsuyTzFMZm6HmoViJABVTFw",
  "key35": "33YgjknE3LZrtK3ZNdj5q5F2e98zSegYvq2aCAaaJR3RsuMv5sHtd4CkhUh7fL3kfiQTcntVmQvhkSzArh81tsf3"
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
