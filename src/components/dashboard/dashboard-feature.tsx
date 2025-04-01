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
    "2FJhnvARkGC8PB1UJxk4YoDdWh8f4Wi7gLTA2Bt3DjXBVdBqqWzZvcqJBMqT2M7e9Jgqo667zmNmffmjGotNQw63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AHEodTQvYEXnvzqD5ReMWCxKKLKQ88dT2SNPmyhDQFnMra88tHWgbLLN7QEsM6EtG5b7YWFFEdbfCozR8mkmJN3",
  "key1": "4uYpbCbABLWSrnEovYJizDZfuK6CzqSGHSYTrL7v6b2BFn4TzjHjMBUQesDQQSMWf18fdQWWb3B3SmF64W4bDNQP",
  "key2": "5xtkNTHWQwuRM2Y5mDCFiWvLkF42Js1dGEumkKqxz3RG41DkHFRc4ttwSYoS7rdq81g5qdY8aYtiYXobgfDje15D",
  "key3": "3gWRPbbAA8ryDAitbYycxQ6rffA5KJVVGJuN3CAmJUAQVpvX8odyqf8789qpUb6A7E6v3q5yrE9r7W9bru4V11Sm",
  "key4": "4fJ1wgjdib4SDt7fFoHXu16a5NUbZLgdV2gpdo2AfEH8YEbJtPHrSzYwvQoqtkpwvLfG2n3c7K6jizP56mzNt5K6",
  "key5": "2jUxmWkao4SvQzZwptjbq3Ye8bbLwsGkpDhNJqvNchrZVLadFwdQnprVuuXA9R6MeKtgmTW7hGTCC2B3xGzBY9yQ",
  "key6": "4unQoyog2dxWANaaCqt4u6hsDa6AJX2YwNcqsQwqCFSUCDtarTLSXrbSjXaMXfiuMdpy7AaraWr9hRZSRhw5VbWW",
  "key7": "3b7XFRJSe3fAADp3zgLyrCH4BqfaqDSxRDUrSvfvUzhtAPftYoHGmpiNZzsR35ZnoZJuFAMyKcVcoCpHzD1b7txK",
  "key8": "3HnLAachCRMhJCRDArrZjioLDa57xHWqAqAPw7gZa43S9z8AYQYRYpw4GEMqP25adAhcJZXcTkFXBQ1vsHAbEvcj",
  "key9": "47tZfmpL1B87Mi2Pt4iDJyEGDUQi3hSzGkzpZdPSwhcFrtaqhFnGSZ35WrYP3zrXq8H8DE6EM9fMsThJQQuAjjqA",
  "key10": "2mQxwF4zuhNvd92FNQ7ZU3hZrKP3jJVsj1u2c8wvMCd4Z89RFVsfYXaBfiVBYsvJRE26fFv436Mxiow8wjSh3adB",
  "key11": "66YvC7kv99mGvgJetnJkWTZQpxwsXC9JDB5mcR3pqmdv43YpFffukJZ8EwCeWkvzQPXAjhtHnbz4ktTiHVEGVTX7",
  "key12": "3FxYnyobGpASYcuvnNJudCTTy63FuJ9DfizzxovkEpJbqj6khShWcqRRE6he9oi9CKQgu431w6Ng9yQeUvamp3hi",
  "key13": "3DXxPRnHH33PLKbvSmru2g6XFnxdwCKPvXQ86iMWrcWSCs77jLKpHbVa3dMAME2sTN8QE4eGNndh2djgXWaiwafP",
  "key14": "Wwwccnxv7JGhac9WeT4c7VMuy9N376UY454funCi5SDyUUSBXKLRKn3poekGs1va8BiaSkRzbJoKX7RMeEYyd6q",
  "key15": "5dYWuNS6Y27NQPEfgemdim2H8AsUFxkewK1pgh2xM6yJXhpAr39dFepGTZFQVtZ7Fkk8qfRDMNC3gvhdTRqRhoeg",
  "key16": "4Y7HNS9YiCpmcqCPqrsTwZe9z1T5kdrg8Xh1ACdUpkezHh6HGBLgGyLEAPJeCm4xdeEuPM9jDen1qvtYh8ArQjzF",
  "key17": "22ftmBbW1NLLdL5cEZVBkFRJAnncGFVb95Sc3by4JKfLQTEuSi1sj6uquQtHGzjP99FBRfrJE6AJkkrMjb7kkS1c",
  "key18": "gyeHGg2QuqiatWWCx64Y1vkquRidbA6GqUpyTGqUYLBVZXPHbjpUS9pn2G9HwhvZoXzNCtoLAL6avVsbaTxLEYe",
  "key19": "4zppzMiWFosBkh6FEhzXrhCmyqsRCsvpWt99c3J1j3bWcCcvh9sJPd5wFSfBtyvBxP43QSQDQo16dghHUymbyqVi",
  "key20": "3r2p5KxhR3WmUkYvNs7MopoASHF8jfz52DrEjE3CVGnNSSAENwgzG7XNwGJm8WsqeS8aPNoEYZpKKiP1J6XRGgUk",
  "key21": "3E29DXhbxyPZjWNrmXkPJJ3s8pcp9JxqyEYEjmoDGoCjyvb6U5pAZ3659LUJMkmuYUbw5wg51nN3fXo4qeZ1tX3J",
  "key22": "dfno5PdByHApxq3RjwFJmD6ri8TwKWkB9gTqVzkfjG7bhcsnp5cAk3cZV6rfpZE6eAqbU1eaabJwPLHoE5L2acL",
  "key23": "n4GtUSxhMAugARavSfCj1oAPXWQNU9sXg7C43H215p1GtdaCJm4krk8BRYmNyd1xPuzaG688WTh8RmGjtnsN9R5",
  "key24": "4dVNzBqt458B4CDPu9975JCHkHYKWvQaeSUAFQTc7P6Qk6dRAyFSNnT1rmjGH45sV2qh28Eh6V3G1b1zgJB6Pjzq",
  "key25": "BGD9WLnC4nnERWi2xAn2gMJF8gr5rjxj9phB7m53NcpUqawrsVNkrmdTNRTfehDLdZ8fB2SPAPVw9EQXKVeaDkf",
  "key26": "5i7SXWhaJDB8u4KWQuXfrn858VbF2saAuf6bBvtoaV2vgQAzHjZ4NofYVspqxhWhi5cRxZ2MmF18CcwgwNP1h9Ny",
  "key27": "57oSUn6QctQrmNX1ypWCdyZ5xEK4SWs2SHY26rMeZs4ADpoLyvLERHtZVuidmYkDZAjRxFkcYxXdX1EHQoMxTULY",
  "key28": "428rWH3khB85xEfxHxR8sXPF6oPFyiUhBFnh9wBP2hZWP1zHM2n6CRqmXGDXTdyCPTUBrsvDcGXeW96VwCYsJKZj",
  "key29": "3pkyKTwUbqnrfSo7B3wYazBB9vkH7YqYUjFFTiXgCEbjG4pHitDeXjcS5qEBRTxxKE1FRdakaqBnvyhzRRSWnZXz",
  "key30": "48zhXYBo4C8soSUXrqPj3e5Z7CQHvtBM35EXZHDhMPpyAZpX3Kq7d4cG88Q6tHcG7s8gDHfHazYf4SNcs3mfn8x7",
  "key31": "2DoyddNaaFb2NhhQs7NLQvcbqE3rRVffvAXPwbdu6xZR2hHN9MvTzxSRy7WU5zf6qYUMy6L1Mm84Zm7eZQTea3hr",
  "key32": "5eJVLY1s8UJeHpa6PMHyGPhCNL3BDBZwggzL5mgZzkDNYpqTWLzDFt9cJ7rLYoyQnwvfL3MeQH59YHKNYjh3rJ7j",
  "key33": "333J7ekobCVzqdqEVHkR7DtucS1fpWevrGfoQ6Teqy8icsLqqwftCTcBZFPUpJXcPj4vzknPJAzxjEnDTAdNveCW",
  "key34": "3aBABko319MpYqgpuDSRg262p2eFf5v4jsweRo8DPKk8f2wYo3hBeyB68d8M7nkB41XPLwJpmitxpXK5xTXArRNt",
  "key35": "4qDGPidAFmyX3MneT3D3dnru64cBka7j2h2cTsF5nRMW56P4Tbc5x13Ae1rNT1Bw9cQ2DCtzebtziis8MEdf3mwB",
  "key36": "3MoQZNCq68yHdBxFuCUZnMV8jWFgDYojNyZmAoHZCbCLKQhhXgQCyAvFN4tqhG2aPzgBjghFJpvLf5JDXpbRoCqn",
  "key37": "2rs98tmkhn43bC25PJUerM7Erz6wiRhyDUsmMhApwNk45LqtRago39zP5ufhhyArKeEAGhr791CnLdmhgn2i5vov",
  "key38": "5hct5Uq6EkZMkbzYB4sMvgZeUZZZ1EJ9Hc3yzTTzS1SBHJLPB9wnQxHyfNn3dYxbX1HVzHk2PNP3GkZgvkePrmnV",
  "key39": "NRsMjrByV7dj9DqyEgr2dwspeHTMDcYee5kKL1Zp9ABAMdUKuRQ4tVJ2AP41mvAcGRX5DuFthfRKS6KNgcyNYPR",
  "key40": "3LSTR1UN8wPJ3UcJbXJ9JPUAkeNng9ev6jvUnx5i8Yw6mg6drPxJLe3N8aBr1CdkyhjUaNfgTWC8Hu7STUzs2T7f",
  "key41": "3y7nBiWxyfp38APfCWrMU3jPDNCktA5bYLFzE74q7JmRnJopqQVgUgxoEc2Pn8FzU7gmJcJ5ij6Xc6tyt65HKEg",
  "key42": "ZH7cJMmyUNbn6kjRoUJzVevvPgWS7ojDk6GS8cy5m7Vw92P1jcUvspyYMJFqjHQupo8XUTTxjqeTjGwzkTpjzyS",
  "key43": "5o7zqNzieza7ffWCbATsv9Yf2D2Lgh8nSgYFeTbmky4q198TpwDY5d1c7jLNfg4R58kASazfmWhNL3cVQGbfxj2p",
  "key44": "3VU4qowMVvdmK2hK4QGum651cm7kos5U3dqqWV4DkPhGx3FX1Z5Sr8xzWBpPwoQZyzBa9ijwV6sfRe7srMmEh666",
  "key45": "E7UmuwYp7pm3gF15MaDTzT32UgqrzqkYRD3ZKyAf5FxgvTJniEFZ1eCGJvfAJ2nWBakQKbHTWeGVmoC8PBr2K9v",
  "key46": "3FM4hzmGJALwmejtiqxRTPK96NptLH4mSt7PxXowgpWmWWPg5HVs1pzxJsvURD9VGVohThpjhuasWu53dd898WCW",
  "key47": "5T8oCevkYqXDZPntaQRHk9caSXYYX3DCpCdtYUb4fRx3PbvFH2Wbv5T31iQScotU3k6gVm6GRnGip3xnXqmTRbnF"
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
