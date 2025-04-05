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
    "2BJH6bdPFX9BawhXS5aBuEGz7kz4vnoTECxVxWqFbSFsZd7B77Kb6d6nb2tnSP5BfvjQ4NXzqABEtuomSZnaZEjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2joz2omcrvNSQdNMK5REekda6hDYy21k9FZYJfQJ16spud5D42nvXF4gbHujzJYf3bBeQacPJxYQXZLNsytFJHHE",
  "key1": "4piKh5x4i5ucfXyarEVJtX5FKAMzRNmPeXEb2LkqGz9fQGwF6V1CvG8odw7T8vu9SMKW9RKHvMnfff8g8ZsRSvMD",
  "key2": "2aWuTxQLbj6aUs8CmwpDwA6CPA7igmWdHuPQicMdb9pcNTAGLcpz6Rfe3qFPrpYwLJwnkcvHvHeFXpz1TugbLgS3",
  "key3": "tFscVSbFJHzpzFn8M1YQnkTQ7VXMtLaTaTxMtAbewgwsaUcqtCQ2mG9VrsPxe7Z3C599rPWEabruUXhgXQYzwib",
  "key4": "4dPc7FVnJRQjyGERyiKgm35GpkasEfjyVkdY85qqbadVvnV96b8ogGPRsspHjac187fwNW9XeCNKbKzGc3X9jQ1m",
  "key5": "RcBx6EYQdSKWBY4Woof53nZGQukLsNpZ7eswqLS23UNCDfqYqS2PLSpKY3yp1bu35mjxxShhu4gpV5mu5wsqvke",
  "key6": "5Fd6GugZ3PVZSooE5MSRV1ZPXbqfJLYK3mHw78h76kyas3PYr3K3Nw849pFx6f6o8pEw7mhV3JQFx2qXQiKYHx4",
  "key7": "2Hgn7bg4CyrHugrHybu1oLk7Z69iVjJ7wd6ZuiYS4o6sNkiaqx8wRXwNZ3cnfov5zNEqvLaXq7XHPXzL8CL6GAsS",
  "key8": "45vooRJWXDvAaq2xp2yPvi24m8JSirHyVtypVRDUjz8zsgPPm1BWaQFyy657KeCEUMBMSeBAucjyCHwSYTB5jjvg",
  "key9": "34YbB4rjgUNe4Lvfx7F3gT35AaVNjuFRj5EfdzTn9WoYgW9o8bwNtzJo2CsWUcT67JJWo7oM2g1md5uoMFf5vCMS",
  "key10": "X9BNL8brTeKLvSV8ifYGzRcdHQYoEmLqKUeyHCFfFsZNotAjNomPb9wYFcz9PostLfbnVaHVAZDSBgBhG9iUGa6",
  "key11": "4be7AqnVsJA5KyTULFvJ3QDbE6fxerZVDknkUybR23yzPYVcCfdQERMxH3BwcLhYuYfhSdTD33jEihvg8QUfLV5n",
  "key12": "im2XYj6roucQu1ZP6YN91eVf8SWZnqKE1ACqR8nVDjFkbYvPKhrxep1GVMcmgXRw4PuEQedD71ncAXYxP7UzsT3",
  "key13": "vMc5vKirieq3V7gG5MAvKJBhKRVavqVWvLttGiLw7pZ8t5DG9xcWEPy3RgFKR1Gp9v92eDgKuw1Kq7bqpLzH2Js",
  "key14": "63FR9ZACsd6P2xtWScbd1i8wV89wT2ccGHewg5Njt3UpvjY8MPptf1LrJFSqTcpmKaShiay4X2T2iZTyGPNoWTPx",
  "key15": "4SZd28v3a8QcNtKpYCJvCoVDpxbpA5PoinULxqk1eMADLj42fQGCjaebrLGtvRGpxUJFePb9JwxuoG6VmHDojah9",
  "key16": "4W7jVpLgdvKCeKEbRtRH7woBBjjoMx8S2ViYB7y9cZqENZPNCn5RdUGY3Asmbkxy328xWZSwPHKHwaXBTrBPCPmx",
  "key17": "y5zwdiFGhrL6KcCgyRtpuoRHSwW9uxAkAJbiXYMLpvazamH8bEUSqCeH9ffkGyAmzHqE8oCnD8qgLWs2cXkDF2w",
  "key18": "qoTdtEMeTfyePpZdtogegS33EFoRnQJfFp9dBvZLsENju7N2Ui9rcnG617zxGxpxcruiTmAvd69SAdqyYuupGZA",
  "key19": "4MGHMYASWb2SQwFoCWBS2DqEcPvesg2WvRehmQTeBUMPv7SYTG3bJa8YEdqqKVckRnwPjiyo6pJKRnD4wXfp7C2B",
  "key20": "5g2RGmLQ8vDw3WMUosxPtuFkRvrudg1yc99UEQrgymeJZqD6H6kX2eYPLnkhkH9NYrs17fqkSRncQoMyJW4eQvSn",
  "key21": "4qNKg2jnHzdny1QJTenJVEK9SCvLg9x867ULLb4X2AEQ1YEai17apHDqhmU7wUuUrMTrWgcqWgJ2nrJjvxixucMN",
  "key22": "q81Y5rJQm1XqLscUDDmeA6QoHubD1KojPb8LuMxTL7Yn1QyjHwio19wbPfs4vhWKXeT6gKY5rReLru5xejDKajC",
  "key23": "5hTWJUzbxoZeTdP1aawa2n7K6ioBAmCRiJgrUmNw7rkFnaP12c7Vx7GvpLSwQmZ7qNL1PuL3E6JgpkYxCVb3XF1P",
  "key24": "5QXGCnF8G6Aefta22u4UrFka3xbFENtV5qQTkoTwWsP94y3Ln5Qj3pZJiWmfCWsVJSqHA9H96nHjikBNZcsRWbK",
  "key25": "3RBDfZ3Uqntv3eiNm1rncuAXo5XmvWGzNGutuqEM8uPV5rwRZZKmGMLuxdcFFmScgkQE462U9W17PpjBXfWWAyRt",
  "key26": "61gMtz45ahwuftvNpZezFsLvzDwuf5rSbzaPqMin2v6ThdKdnW8P7zzLJTgihVjuvy4Bua3SyYVdVfKAPUhthHsB",
  "key27": "2p8boxivgpcBmoqq1ty53pqw4caK9tqcESD37N5s2Gip94LDPYuCaojzUMfLJwKcfyHzpKy5Zj79CVvJa6Ju6wdW",
  "key28": "4JF192uLvpziGdazqhmaPuHkgnMWt8dYGhAeEF1vZT4RtVbCaktbyYZ7CujLJ8Z6ka5Lak88d73tEpLuoGEFpNuh",
  "key29": "4Gj9qqaM1u6aZHFTKRsfDyMR8WShes63aw8Z9TbA4v5uhWmYDNtNQYJMZVZiCHyifzDYjQQu4boZ1YjmpXFQkqPN",
  "key30": "4aNsgQgmHXtznaSoKxvzCuGUJdWhqiHhLGEcjHi8rDGwPJTktRxRf2dMam6BanVgjGHBM1RCvmYduBJWgBfTEuSK",
  "key31": "2hSwe9u9HggD9S6HMsUA529vsJJiF1xbdYHF46PTJUzJ7DpswhLujqJYx4YSsgDMdocxT396o9jCGujPdjwkdaWR",
  "key32": "128xugXwkkw7Agsyoa3S6uvTxg7f6Lif3NeRmEoKCQj3jGAcGCYdSt5psx3eWUiTWW513boprYFBPoXdsQwVK76",
  "key33": "5Wajqw8nu4mqrQJQTMV8AFM6zPb4dZNeAXow5WzYsARaVSwz6nZs18k1xtpNJy5yUdVZ7gFm2Dc8dHJ2cPoifAQq",
  "key34": "1dqiD9aGwuve8MPSdmXNFKWcCsJbo6Q6ki4rWdmoY25veqRhgmu58VwqLxmDN2nPwmTc46DWFmvBzQpN5n8Pv32",
  "key35": "22xMzr2Mw3dqeozzo7Wkf8JQfvB4s4pGKWNnrN1bj4bm6nvqccurkfMLs91L1S7LMtGYhxRRPso8B9yeDe7gCBpd",
  "key36": "5i38sXFGey5hKLyshuikDQiLZHTYpgUygo9w74YnoWRDYYytNDoSzzeUPMeYnPy5KQsn3BAtTMiStQKRUCB922HY",
  "key37": "5fCXpqemktVkvRTRJqDXMoBJNoGcC8DA7Nb8zDgqgoaPwLazgG9UXKxtfSAwimT4ofSDsfxQ1uqxANWEjqfCCRbW",
  "key38": "3qqLmcT4JEiUriKQc14rCVVTjqB74NafMEpU3KWXoBauHmkTwuxW6WxhCA6vL4mXwENkvMtmLhv8cLWfr2BnxDLD",
  "key39": "5DGZLBXv5v14TTZiL9WefipT5qKG7N5Qzc7JZ8U8D5QQhqYjkHMVNMjtoq4CQF3H2bosZCzTjoPN4pUcpPBh3fXM",
  "key40": "56uQS8R9sh6zFLZmNFyJNBKsHwZfFTTUqYjzV5C3zoDJK6SjrnmUgZ5j5bnjgku5mzDH9JoAFzYcEvQsww1oxTox",
  "key41": "55wLwBFVY3RBvoWXqY7JYJ5JV8kGYA1rRN5LLPpJVXRKjDr3eNiosJMSf2Euv1qp63KcMKxVcFapXFYpavofopVA",
  "key42": "3SLCgktZZdUWM3kvujTsCpzdup663v48Fw7bsrVeRuXMSdxWdZY2nwm4g5p13kHw4mkLeKxS8dcLnuCf3pkoV6G2",
  "key43": "3TnXL9op3rd8DRz61X4H1uRJnAQiWaZmm8Pt8N9kVZxh3kcEtJgyvU4Xq6QUyuKd5qZJpX1N4GEE6xJn8nNWNWS5",
  "key44": "33CHC9CVXwznipxHBKnaLgakJHA1eg8jX54wjkULVpiDXmkKaA8zNKnPa6Snnwoc3MvGBjb7NKNpMtKojwpaHbDW",
  "key45": "5Ms3Nw2KPqKPPGHgxeSQ5MhdDimXp33E9XiaWuBTpLBmnDfrUY84aysLjrM8xfVX6rxbQt2T8WCbXdz6JRk1HsKq",
  "key46": "2Re71YJA3VfyPkUzAeVGgZgTmzZdmX9bvUePv6FKHESyqsUrocN8dgXAwxFrmafG5c4SPpEiYkxsuvVvKg5BoDvy",
  "key47": "YZhrUhGUQWn3rGxee842trsAn5VtHd3ynsKxGVZfLkuQbXdDvsqgWa6XX8MpexspnBtXK7Y5rgkAwPUsvEk3wiY"
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
