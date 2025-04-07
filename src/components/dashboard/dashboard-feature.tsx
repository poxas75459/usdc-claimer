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
    "3TMTiAsr6eb38p3S7atSfA6VkWjA8gwqD9vkVXEmWKTcDUFuPA4DmQsRiq9QRvuA7eY6MtYmEXDE3YaW5SCxmT5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DhknqGEKZQDKh2dGUame663eK6Fou6LkPZRmHYsPZYBu3wJSPJF4t8zbZnJspTZVbnG9uqPTiLEqgKdkCTNjwjL",
  "key1": "5bDdVsnDF166sF4g2cpDNtmP16JGBGGLVjsEsJ2V32okx9Xp3gvzoDcUHfRqUeETP83GpsYxaGFcspoS3jRcqKGS",
  "key2": "5ebE4ef1A2mLTzPLHjpcxfyuCr85MKivW2Z9aN4RGRKo1JCseXJXCpTPWKYKXXw6Cwb2Smh1fKcjSvbJexUbi8J6",
  "key3": "2vE97vDsRxwuC82LnTBEbaQG3jRdm5akPzk5YKHBgLyHK9BUJmmyJzgBzav7wZrSNi8uwFWNSu8zBhbybYWEY1gd",
  "key4": "LUckywaFoKnymRCcjecTfXfnLi65pSNPupYLWNNPm8YEiiJUmLMhUc7b3RhGd2SM8e9TiD6cbkqLVfNgY3Rfscg",
  "key5": "2gCd6pbpLAFHN4FVMxhrN7BRbN2J8EpDdPd3pJfVBoWmCbT9DX3K1EL9r48187xB3pj4LnvcrwAZHRjee4xQHQys",
  "key6": "64uazxYPVyPmaSQy29DUwzY786x7thFYUThSqnFmrEKzVK15F7YSuY2UfGTgNyMsJCGd9rfw8gNMY1eXUD2uNS19",
  "key7": "5N9BhMM5xaxchU3581jWtLfyvNess5Ngt3W4ie12ntke3Kd18Z35RjNuvgXhjuTPQae7AERhP175k6sxnXFRXngW",
  "key8": "349tPtZoyxrpvU2U6TzE9WXXGFuwg1zpyNJ4SKvmTbQi5mGHcRjn7QaU7hCtuAZBZQ2CxEM3mWzT2Kf4EcKczAxg",
  "key9": "3iyfWuRj9S18PZfECd4GqVLheuVvagR4x2kaUbqLNxUyUE6eRm1xN2Tp2YmQCiPeaLiS9bQRFmNeWLeCkpGzkeen",
  "key10": "2xkotH4JifriTP6ZwPmPzMapGhcY3xsKwTgG5vYL7RbmNubNsoFuVCCwHQZ5vdG2xm99vKQUkxTihsE1oczWH9CH",
  "key11": "2rQ6rauyh9FsrpYbjiVbkPuYHN474TaJbpsvU8go4UnGw8UbpjUFPqFPJZbZ3AKCRwKUxe6Ar7kNdCMm1EUuWTvQ",
  "key12": "v7CbufUMVPDKj6yzheujYzHpp2wC1CPgmuvUvF4ZcJMAF4Ejeag8wBzyh3cmJVNV5L19n26tc7FuTCocqsfAMuA",
  "key13": "57Gh6AGY1DmkedX7FqiRi8o8ecdRHGKDBuuFRaZUYmrXxeTNU5CYBPivLmUAzCeqydcpFe85P6CtTqjBbCN1wP3b",
  "key14": "3EbE6fLXovSuFuWtwbPqXHjKFiXhMVHpNj72jysiroKY6uKTETaAzRspbNfpVckWsQXKkDsSs3EJpjp2Q7f6J9hv",
  "key15": "4FLajafGdrTNibhpovS3SmfzzFC4o4avMWzZuyaeutNdPempCvDm4QLVATPwvw47vKjRqciCXhSC7dWVco9bdBuT",
  "key16": "38oN7gb5aVggpzCNjfairoNmHrPvGgZkfXE1wkY9mNBWrvfhytECQSaVbbSwuyAYJvuFveGGUSb7ERujSHeYvNrT",
  "key17": "4ZsMQ4muCXmCmzUvVT2fguDpFNRawjMKAjmLeUhsE1jCYqMHtBTMQC3kcUgDDJwB7TWvUJeraYYSU2HyKZyToEFd",
  "key18": "3rbPZm4sx4nJsoug43fhv6zHVcetrbyiRHThPAfXauVgsRdxJayihMD3Gf35sgXPSyvs4RSwzMatoVsYSMUgKAjH",
  "key19": "416GqAFjcZ2Qp4bBwn57edvKkcSzo2rhMfXemGfoHqBR8rSpH9fMvMcaRfUNBTJbSM3THw12g6UaE6cy41k3ZkkB",
  "key20": "MG77cRQyPRNdAd1ZY6uW6vhcUVKYfNHPxc1cWx2pUJTzZw4UxFvnP5MHEgBLSbp6gn2X4AZYkghHYKCykaBTND2",
  "key21": "4Gt8rW6WtEn9d1wAJiuxa5FNf5unoRNx2Lt9aLrZGUjTd1u4zC4QzDXJDDSQKNMJi2oXAPugrKqt982wuor9wEpZ",
  "key22": "5rTi2Vy2LewRyHzcWSqgP8vzvgNAM41cjPrHio9DFPX47AnxHjRcXiBhStcjPTMw7bVprUgrm3fbFsktA9mxFj47",
  "key23": "3cbJefhfJssh9r4qtUkH8XvnE49t6YRWfvr6HXuzQ9KhnnjWdtWXQ4pUevco7ER3zYnT7oE2vnb41DYTEiTJscZn",
  "key24": "3pbjvCKf2oHp4BJLACqM37qqbXPno951y8oDnXDakuox6FyaAsJkF8AGdbxGaXhT5TjZ841P6qMM5r5z8ZjkHSqz",
  "key25": "5tYx2jEWuXVh851HSipw6vVj1pMZcL2pmEwPtyGWgdwB8Ji5CLKqmz59Hxyo6w87dHX8fh8DtMikJ9ieYQmTVKqQ",
  "key26": "5HZ3SGr56FGYxKRrezEn617g74aQH8JBqRdjKgHqFoERL1Y13kTtbn1fyqxLCW8d8ykH6EyfSocL1pYjrpxR6uAW",
  "key27": "5R3PX2k2yA7Z72gYU93S7EFayh754zF7t1v6YxoiiaD6cU8W5WkFxkN7fdF6kmhLhVwtdy81Eo1MPsx1dcShUXVJ",
  "key28": "2cFGiDEcxeY1HFxoHYUbUxqtEXDU9Ju7tyE119DD4Hho6XuzEBQMzusfqsM1aJXViRJZVP6KJKX9tFr5H7gTXxs6",
  "key29": "4XgNzkkVpp1s1ha3Gssb9vBNCVTNZuEBEoJoGVgRpS15qSJY9XPrNJC9McUWTpSL1xWX7CNyZpjtyRSRszLd3Mhk",
  "key30": "5YoZsTwuQqvGofc72CfwF5LsBURC7XSvagLMgumnnrNpzS7mVseDhh6236VZuVepSsCtfUh6FEbZ4iq1mHSpotrz",
  "key31": "2nb1kXv3TT8JhebgnDQ4z3bTGb3Tgep93sS4C5Tcwx8GNSF3zKv29rCuYeZ3zn6y1cE75PsqmFibPMdPV82jwV6o",
  "key32": "5sqAju6inGP3xJ6nGVa6zsPi1d7gWnsKs9boCJbhuTKjLziUZjqDKSfaeNUdNGJu8FHGYHNtzPMjFEo8g7L1BNuo",
  "key33": "2WgC6EwVJVsyAcHnWJukxaDu2UH4Z9Dfp5whFiQjMPxc2RQG7he56KP7WPAR9CvgPZ4E9ejqX76Mh1gVSsr4deyx",
  "key34": "5FYaxPd7kNYPpa2SZS8cMtwvgMbXUuUdV7Vj24qRpzVZ6qiDx8FTvzYxK8HsE6dRBoB9JXFi5g7qTyz8PRXtWfJG",
  "key35": "3udqcyMTVKYpEyaVkoMC61KeYD2jgFt4Gy6SJhoRmNmNwX2opm5n4yMVNhPnRdwPUiQY4krwBrvSrTHcquUK7mfn",
  "key36": "3trSxtyTCHJUGVHiqnB1aMgj72SyHYUyuJg8o7ZrJ2Rpezz3EYQv8NKpE2Y2kb4EsrKKjHi9U5MDqqabuC1SpeUu",
  "key37": "5Q5Sm4MctvLUm5yUGQ1nB3L3Qe2Ao2LAACE9HkwtkHv19kzFwcSvFKvgUBbZcgwTUXaARzyA98tKErFSaPEvaqKP",
  "key38": "5vFsmjqSucCuQ6fQWc9wGR4XFNDfGF7KvXeC8eiSBkxVC4QF1hKBgLaPgbo73VvcPwCXwTX4DJsmVzDXxA69G48k",
  "key39": "3cjjvviQa3GzPs7NUC7cm6pTGCiLZvp4whqnBBEFJ88rRb2NGhZsJLHwbjYZDATqpyns4C21iQhijkrmDymqZGP",
  "key40": "3Lm8YqGkHULKXFovCkbCwnPRW36zoSRgkK1YmLdfnWAJMpS7JxWLgV67Bks8ATf9dbPXPp8WpPfgemoEUcjUnRcq",
  "key41": "3UKnh3imTBpPJ9v3FWx17Jb4p758yefjnQubntmNRV1agQvx2uzadAoZC2Dft2HiSasxKJoRLGkxBjixzfz7NvZ6",
  "key42": "ksB6jXe2nYoShauFc7QCx3bNrCrGBTjKQWmRHk6rTkykwuAYa58nzWMMo455C2dyjFi1QEv2kbtFW8oXoUKJQFA",
  "key43": "23MjqFSE9dbThBoduQQRAUMGXGua9rMULxnfHwVzSasqTg3qeJ6MuWnxW2HJVysFse4FZBYGJehoHuxXjYWb8crB"
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
