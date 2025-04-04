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
    "KFVY9qT8kEra9CBaaAe8BGk3SgM2SenB7UutqvCzLJAECzfrrNmSaPxAqh4EotLz5MsDpW1n4x4qtovvPRom5ZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CrwuamaS38NySvcxALBAy7GFc8C1Ne1o4uQNtis85QTnLznBed4RhvkDFCuM4wXBEdjmf247Exydnuqneg7VKvi",
  "key1": "3LrzaNMAisKWFjse4VVednsyPk5xyQEK9PvpBFUBdCpFf9Ro6jNx2gX2bWB5Ui3cfjzhGmmJBAQ9EHdbQ7kYpBck",
  "key2": "33eb9QQGEJKUhRwW8MngDKBuWNaFsRv7pw6ZW5fmBtKPkQdJiPbd6rFYJ3tT55RvMT7wqs9o7poXE23ziyqsrWbw",
  "key3": "4sMT4xkD831YJXUeq6SQFWJ6455xB6HB2EBU5xzB5DG862Yvra3sTZhBdbkTXFa7y2dgLg75P2tggEvARvQuRK2X",
  "key4": "2DR8TEX83sRgTimt2HJZ1NVMvN59PRGb8GxBVxUVRQxpZjsukkAHKJ83biErJYsctyujnP53Hqj2Y6gYwMQzTgYC",
  "key5": "4DsEHqXyrzNwEktMWcUxs6XSNAEjcdpFYcemDgW1Q1KxraQwJfXqQDBBHrgUCsSkA6WzRx1iYdjzgmMLZvmZuJRe",
  "key6": "3XbrBeWYSbfdey5iCaprAircL51AWzhsTbcJSiFmCXPWiqa9uaeL1QFg8xbaJPqSBpmTAM7iKzBnvrPMixg658bX",
  "key7": "5e2L8h6rfbU1UyryAwp3KPca9Ya8H7joqfkbn2naoQSaV963LAdGNCkmssc5ZFcxTxyfVHCHuaPys1VNBu55vRDa",
  "key8": "2LuPQHzvYXYQPWCMqhD5D9a5NyFJZfMKDe8A1wmxFWzjpSAbhB8MaKQdGP2hNJku881HYyjV9heViyDzE1q54BE5",
  "key9": "2jQJBKnxaMR9e8jSFnwkgCThYj2iWWjLjVjqVhDJMSAFiWGsN4H1hDoWDjCDV63NrAzeA5ret3FjbZJztoUEJ2zb",
  "key10": "34XjzQKJZ2NXf9jB5nMCggki1aKHWxV1X1GD1YGPPt19MjN4Pv6dRHEJRngj6Jvis9Ho1Ax14cfYAfwnMgWDEEDz",
  "key11": "3PTnMv3NL4DaiTCHnbur4mesavgqyYANDtZipPoZncWjEybHcgQeBDrPf2uSLvwYriHQJu2z2PUyGWhzat8C8Pbz",
  "key12": "t5QUiqbMzPUvWWjNMGGX2wXKDUKRebohcPEpZY7SQkSQgrR9dVBCwcQ9tMohhL27pJ4CK2oaTyb3584DPid9mtn",
  "key13": "az4EormPhcGzT88Evr3D6fdZf5YEkCx4XsiqaewpLDAjCh7EdofGFkkJW8VE88jh7k7jvbngdgRfG1VE386MXhh",
  "key14": "3SPrcXAexCZqbEqLj1YCuGZ51fBPj2WYwcXc8t7w1PiHkZVvj1re4fLb9QwXJsnJrDt2txSgAHNDEgYEQKJFz9kq",
  "key15": "3zJJNdCZij7XfYGkHHyTPH4BsiyWz4wprk6JpBn4aw5oNzkzR28eo9vCDHseiNwAGnAC1ckjxq4eSb8FpVtRA7V2",
  "key16": "3LUNYh7K8bEFN8WhENRqV16C9a5PqxpjdLVxGZyuvPCPWdM4YxQFergjwCCHqH676JXMjRRWHcBCap1eVPm3KvAF",
  "key17": "2BNc8jTcNfL18TNKQYmiyfxoMeriJK7mw8NZvP4V62RZbx4X3PYYbXhdaeimjbHD6JNGVwTB829ViFBwpuycJDYh",
  "key18": "2hKXBMd56sNwfbmAJkLS9ZbFHB32bLzZZZuJXBSD9TXfmpfW7PzuhbiKD1x6ZMk7MBnqGVyJvpfrX77oCe4Vb5ET",
  "key19": "5xyBqidMVgxxBJfDJZ9nbc5YbtHYFre11FHTYksGmEJzSSGziXDi9ZWwqKafZRSdcuRMi6edFoRLhCLyoChPPVxS",
  "key20": "FjFp8UGrD93hRj4CFZzXpG525jQ5wjHDqn51NbrfiHRm4CY7t26Jedo3Mm7ZSfgmhZGf7P9pN5UN2xYcTNcMDZU",
  "key21": "xPFgRrYd2Dd4wgoHmgXzVyveiR145W37kRwj85Cze2szeYNN7QriKBRkXswsjPmjWyoSRRRrELgDDAJwH2ZyFHB",
  "key22": "2Ps3CRiCMJnTuqy7KAUhmwp4XbzhkcEzDgm6f24d1LzN85BkKTETrdgKw7mxrEhcRvH6Q8uLfHPSTF9LaBFbQtzo",
  "key23": "2u7dEcVNW1qHkHPPvRP8t8Prfgatik2EKGWifPMpFKDAXiGk7CrL74srzLKrdjtNvT2njpgV6ZkHaQb3vjFGkZtD",
  "key24": "5hPtAR7g6r6MJWBYWkRhCZhzF7SuQnmBBDWhbyVzH9UPYW8L2QfKjzsfetAYCa64kvpZQh2n7GZTgmR9ZcfTocYq",
  "key25": "4pLpZ1q9RufT2AzcoRa785VwW6kWMMXMPuioEb3mkLrjMxVsGszKKcUY4DQxcJG16bQ2un63XTK6nHhDuoTfSMQz",
  "key26": "2gq17gCfxHAWw3tiqTQ3VSHprJHsc1K7Jt62dMRXnmNPkTT4rwpBrSfh2oivEEGJ78mXhWhj4Nrx5UHcbjHVDEJY",
  "key27": "35BXPsVsF2FuGuh1KwbtDG9FwMegCwU4XPVXQ2ikuPWka5oLpSsZeA6f496RJhVDEq6VZpkzjSCSrS4supjZ8LTK",
  "key28": "4vvMaUBTpwd8W4xGbZSzeNQaQhQ5uSqXeEYYLMbHBS6tXxYiuKKmiU43vZrPsoFEJtYe9rmvRAMJz1Ds3dr7KwvJ",
  "key29": "2DkQDfeGh6e11bmoYEnxxKgWy56HxwjYSZdkZ5RZjgRwRviPX3Uo4jTwfmjkRTtU5x9NtrSRvmxt7hV3jaGDyuBq",
  "key30": "4fwGeERiHhsAgxgfpksZ1oLXcuAecSDJ283u1QsHvnVu8tTgMEeyyBHxS9k81gCv8BRooef9vJNooNkf9EwFuUbR",
  "key31": "32nkdRFe1szLuC4i2HzuCe8TfzX2uXGrHhQRWUZRagceZxR7ryEPipLa14t9ys6EbEhXmn6jzpnf1xcQruGCUFN",
  "key32": "5Wdfq5JEJcKdhTFuRsDY77wrAT3DPequaeM1HGTTWXXwPqUpAZ5CDj8sP9Q9PspHYuRWaXft4mQwrjMn74LLNs1x",
  "key33": "umQxaZEwUaJ9m6rWEV4p69mJn4tAecpYMAhWHXWRTD68AMnnNH1sZE9FG1EY723U5fBeJitqk81B3Rhv8uTuXCg",
  "key34": "3RfrpvCkNSXxEVsCu1WDJfCarqZ1knHkDkAAYd7QV4fUPoiAWmLuxifzujqstywWDPDDE8EXq4ex99FXXr3ZGYpc",
  "key35": "5f9s2cCR8aw8gtHpNnY959hf1HJYDmicAVa3Kwf6YHdi4sDDfaxuY6Y5jpQqfsNkk2BqpU3fzgzfrtHqbixy25Y7",
  "key36": "8rfEZ2eewxZvYLdArA57hHYduUvKaAnqbVykCcRKmbhQn4NZqNsJti7Hg1Y9LeVD3pzyyx86HR91c71JZ4dayrA",
  "key37": "4h86eD7Ci2BsvFmDorvz6kRvaokbJzpcuDTnv1YNgJGCYGSkNZq5EwA4s5f1gK3ydnn2iD7AAhHLJVsnXZteWFnL",
  "key38": "xkT5ayXyydfn3DCJQngwjS4rZGxKNzrgyW365kofiryrfAkXy4qWqvouvHGgsg1SYsNWMhtcamMdJvvKeFqmchA"
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
