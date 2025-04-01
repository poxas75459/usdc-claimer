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
    "1qQvVjqX5QobtM8ddSEyQMiyKqhqgtCYgsvbTRrohwDSMhTs6cSvcJxWW4MVFqD8tER7iAhvQY7gkWEvW4ZFvmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kht8MWNiLPWenoD3copB2Xw1kr8XRWzbSFWMDmqJgJTSq2gHN4VZX4NzcvzkmDu4vbQAZhUqc3bJzkkNB9R78eY",
  "key1": "3zhyeNmoJ9R5Sr8H16eqCnN37hpR8RC769kDqfcisvuJuaY9ubQXdoBJCJ4HJ8ETZL8saSA2R5LzvUTzArazKH4",
  "key2": "2XVQAmPGK5CT4YcKtyMqDp7zSrMwfraJi6UN7HUWyfm2zE75Ts246eHZgNjh1xVsciVFJwSr4xdX6ZHgRiVTwa4w",
  "key3": "25mbW1EbDYNwgAuVbq7LKzqeF37iJ8nANWs9gqwDk4WjYqtzjqGmdQycXLXQZRk6k9cwiQrrBF8awyyswLnN37vG",
  "key4": "4oAfnTMfbR8QxJkBPviNQMEk2sEXfVWLwiSkgpuX4B1TVjMCkf9ZKqk9upmPk27zDtvXkqRyhzazGBtRNc9NJvxP",
  "key5": "qcU2BWS54HpuqLCa9cxV7efFv5CYjdsnumBpz7LBcFp1hDTd6v9Y2V3oRddREBES1CCychPP1NDixHSkHYHPci1",
  "key6": "5Y2voB5UPA6VJ42rFEfTq7spMnJvHwojhp4cEfXoHmR8jhmvXefs5zChB3e8TA6mK7AjbFL7mK5wavTNiAzA8ygN",
  "key7": "5uC7DH52BzW14cEnPgkaKwtcDfLWBhch1Fp51hjmsKFmc1B5W1piJZt5mtoxCbzNCzH6NU9tUXphf4KcMwLVoPzW",
  "key8": "NwpyQBE3eC6nKroh2upB61PKx3zLR3NEkWRmxiKi43ASjScKJCjenz517TzdGjBqFwbf9jtB1y3MzBLGEGUNo25",
  "key9": "2hyrtLiQnekZwhRUdWtAanwPebydgPH6VagiGSsSPTyAgdCySqR1eZ2yevzYC8xKd6jMEUQ2jct5SZ8LFhM8QmGV",
  "key10": "49myCdMLVQZ2VhYSpaUuKL8vdNqbBmoJVzD5bxAQ4ZhnbCF1R1DxtU1MKpQFgbHBpQ4uMhMPpmwA89ZA9CFVMTGp",
  "key11": "3MZki5egvGRJPuXUXJcUCvjef3gLprCcrSMuu3c6HTrMZrfC5Jpyn4TfrbbqCMb3bE4mRjJrZmhCS2fEQMdxuWNq",
  "key12": "3FJtNLjRq1V2kXrPzftZXwUT8mtosufwwHx1yz2oNpJBRNsAYk9Qw5XuZuCXVuoY9qjApRfn3BibQYLSrLHQNNNK",
  "key13": "EZxeWYGy5duYLjVqsR4LmgyBYxC8ZhD8n2ELnygSUbNbVKBw7WgoJ6q2Q99dm4TZYSC7HBcXd6X6p9jc6EaJdVZ",
  "key14": "3HLrpdqqzeFqCeXEc7PeC6YywCkcj4W9jym1b9u6q2NzQXq5rUiPtrmM26weuwqA4AqrRYAsDELkkAuSP5hjBKkM",
  "key15": "2UWj3TKMzLH8Snx2XqEC2Z3JPcQMtV3wjg2FrNNjKiBbQPPqwnWzwBbSc7Uqy3vhn6hHG9JNWmzUyX15Zg6KEjok",
  "key16": "2Ws8NMDXwZh8W2KryJzqGbuZhLqN59nvy95PAgwfVCdWctqDYJibfEjs2bdmn8uoN2HeAdpkLFcKkFnHqXhQtVUA",
  "key17": "2H2sVwEFEXumFnQKxbBp9Hu1fYKQ3tQXfc3uoiFgj74tF4hL4uMJ8LJLj5LxX2vWT7AZ76c6az76QeZw9KWKzaeN",
  "key18": "3FGqijGz25CrE2nLAZLHdn8WD9Frvgp5Jt8GWrGx9nLPQLWy4HDem5u9dT8SCF3k847Sc9feAtYVcJMMS2Ub7vdm",
  "key19": "5bnu91EieHd5EZAEd5CKy48uiQ6UiZwfxDufLSdk92wuVg8QotzLW5Ug1mnmwQuNUK4DEAGnRChjhCNvMvq4t9Ei",
  "key20": "65zQUHfPhmBMAKsBFviy4WK2ExsM9BUxyjwVDXFDdw7NSpTFURWUzdYwZovdWEh4RKihz7iMBzN6Nvcwng5wqFqi",
  "key21": "34qtQgstLz1BbND5D9D37DyURibiftPEK4jvRYwYep37iFPs2uhwycyc4vdX8xqk6wezRQMMKXhXkq7MaeXsw8ts",
  "key22": "qwMmDnsQ1mNGKvEjgPDf5ki9gkFVnZKMJyuMhWMMYfseSQyL5m7M6NE8TYQV8bFSQuPxrpyPsPEBLHPdTDc1chz",
  "key23": "4FYBmk5sLa6JmY72ymjAFgRrEqQfPA4mmFhtyyTHLdUXViGKr1mZBBsBW88FwK4d1j5zsTwuqr2Nq3bf1Pa3vVxi",
  "key24": "3tML1SLeUH9X7HZCvQhFv7G46hTd7pgoAyec4iJUspW6dbX7hnmfRvsKchYCVWj4fbmDj1JyhmKYnd2jRduhsyAh",
  "key25": "YrdRi2Z6btxhE81anVFuzdYtRjdiXaceSn54x4jzt3ZgjGXCiNY3aJqNp8TGcS3Pd1ucvYPYK4Vsh7pHh5wThzK",
  "key26": "46KvPeb3yX33P3hM6Y92fQhse2RetcZb8HmuxAABCrUhAVr3EQbwXRe25xn1r5hBunhGAPLqaD8tc2RbmqtPHKDq",
  "key27": "5bviLVKp12ccxcjvp6enegB6Tm4KFHtj617EYmThWCG7BmjEUdNq98Bt5zeovngiGYmyAo3ZdiJWjfP5W1iJqcWD",
  "key28": "22cQjfJuKwnKb1NuDHsW3LWpBgJ9ANFcgiiRRvgjpiJ6Ui64vCuUUGrRfiAZUy1zzYN6c4iBkA8utzhsFrL2Tm2i",
  "key29": "3zK7o6A2nc6m5VW6TEA9F1bCq8isHqQ9Ja9h9cPM8K3r6ncUdGixhw99VMFLzZGnE9XEJmkbEo6zr6HHxwvRqrau",
  "key30": "4ynWfGA7U6kw3dD5B2PbYRwu2k6uNwxgz6bLk2UjSb6146wvsQ6irMq8X9R67fUZ4gqtBYEFrHj9QfdbXHG9h4Co",
  "key31": "UY7sMk2MLhV8Be1FA44nvf7ms5hvqL1DvyQdwDBnqYPrVXtbMeLnwoQ4Wcs97vSXeLurdjQg8joHt4My53KuAHv",
  "key32": "21b5r2dXTNyWcxrM9nzPaojpazgucFW8Sk3rCBezqkrL5R9zCfh5WWT5pyopQGcJ8eo5fRo8YuExy3QU6z99wZTp",
  "key33": "3rAyJJ9671v5h6hYz3GvkvvtRBnZ18M2s2urGDw3pr5wQp5PVemd7zxR114uZQSqK6jEneeubxk22z1Df3FqfeLV",
  "key34": "4RD3vZLcYUCL55LK3TSvhDbdHLHuBkpwxURjRuzyHqMK3gdTZV3DRwRcu1WQBd9b83PKSzAQvXHoQSmiQTgFhWus",
  "key35": "43pUNghUfxSCDMJpA1pmZjsuPwqbfBZtP4YjeAibdvRKYnBnoRaRXfpbCtV8aTMrWHLP8UBG2ie8VHb93t2QuE4D",
  "key36": "39FnttMNTdcUcZfeaDL6B9zzDFSzzx1bHGYroaEqQiCPnhWpZqbkN3T6S561d3gjcKtgVkfMA7YMxCe3oxxLUXdb"
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
