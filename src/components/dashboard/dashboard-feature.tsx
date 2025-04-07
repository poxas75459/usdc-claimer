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
    "2CMDfz5htGYpuhh41e9dCvhB6pZVtE9okAbw4wBeFNRvzEsQFDdQkxNpq2pubQKN39FUqZATPgaSrXjBzZ7eMnUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HCfd7mN1HVtnFKvtvj4QKjYjmpmeF3j5r9qZUSSUCcT8AwnN4EFq2EnwnsmZLwXNtgCpEXaeYbWRSyXTQ55hSgB",
  "key1": "5tQFiB4VyG8PHsE5xpSySdC2Mn3uvnoJdKmG9iipUyVdUNBbzK86aCqFXhu9dGvFNamKUgiqHBSMeYYhge3Taa91",
  "key2": "2TP7zDED7z1qCDUa8U1zomtY7PS7r8jG49dwuha5vfdT1cAzuLzKBfC2LmLWyFzS3jRSdziarYmJKarpP3DKK8NB",
  "key3": "4dfDfnCxXAHuvq5xPJnjjkY6ms6oDonTRFnaH2Y4PQgYVU9ZdXfsgewyXnXM1fmKNgs78VkjpNYk5vosPgVm6iR9",
  "key4": "4YiZXHVbybgirRPBZ6Bb74oMq8P76yLQ5SfFD1yHEvGTVL9VipyPkPAAUBmw7j3qBtXadCKSpJVCcG6jC9nGXVTM",
  "key5": "38UT7SoWAXRePrTnWVdZVrVw8EYhHcjtwmehyong7somJrAYP32aDVv5Q2PNGNL1BQLJfJm1hBNFuA9e74pXfpYT",
  "key6": "2URjXSffmGgb55cDHno6FFAKuh5hdnZ5jEGowjJC5yaL37C3xAv97voS3yKgxoNifVy5LC885y6mMsJUxczif1hq",
  "key7": "31mQwKrCURLDyTw1ak2Pyb4GgYDYn3XBzLby72CCt4UQnnUgSHZjcHs46bAjXvD33Hc8qSo2r8b9bWUUqD9V6ncM",
  "key8": "35N5ZCeFjdXe5nBKa4YgADt4wT7JME4rEAFoDRLrjApsD3y75rP7bUxmpAPRP8hAKLB4tnFBcQ2eWAuoFe3BNPNu",
  "key9": "5GagLVjFfnf979MJYJ9sPPHwVAhdaQJVgApuRNi1QbB22ZMsdaipFQwYLpV4ttwGaLb34DoMGLPufhQ5vpRZSUMo",
  "key10": "2gqhEvVjnmUCjyrDgqdQGdi3XS5KjFHNPc3UCpe7QNYYnzrGJ7oUHmzFNBS2ZMktcvyhDwuhjaaAHRAspBxPTTt4",
  "key11": "5JScgktQHjTuRrNBBFFS4MvqEyi3kErF1LPKiYirWVyyBSW6QYoWBD4yMdZVyPGVjzsAVdJwmnLmahEn1HdSY2Qi",
  "key12": "39fB3jaQdrFfMDarUm5m6iV8nR6jucPsSrFV8EsFC9bod19r2h1et95KFSW98YCC2xGfeKjp4vmyXqLW4RA7QL5n",
  "key13": "5cBtt1XiD3Wf7NNCoiSVEoHRLJr7TnjEM2joe9mjzhpmCAPqFazn6iDMFmzHHxZFH8tgD69JpLmzts88oK6qLpAY",
  "key14": "2tTnc8f1AzBP94de1AsUjJHQ1oZQNvr2raiJNyhUi8omQaZyPSmuBseeexWbuL8WjwkWp1GffuPncVLUtbhncN9P",
  "key15": "5aVxzu3X5cbDbywrG7Cmj9dixX1hwjcouSEaNv1QanJUF5mT4FZrLd5YEevtuwkdyFvDMNqjtUwqcUL2jKyRPNun",
  "key16": "3o8BJP8eWztJ1pZu2EWduGRozcz8aoW9ZGnzx3A3YnqLvgsxSo5aaU2c9DmqCtfSciikE1Kqjom195ofkoLrZPjF",
  "key17": "4UBSvcPHijKBRjH1FX1VyPhjs2v27SYdPdNUgBkJYyyk4RynrMAN8FFaDd1NptVvFkEDzdsTe1nfa47Hx2hJTVUV",
  "key18": "3Uxt6Jribxb7k2eKnAfdtcTmteUa4Rdx3zN7cbRBPd5SLwZhkpETcRkVMotVNkoKxgZiuZymnep7kLHmcjw9K6ZT",
  "key19": "m1JVbtifheVN3yQEZyDVtD39kJd2CXoYT9xujpRXf8YmSLoVKXf6puMpYAPjPU6WVHCGBwHeByXUJgoCqMy2GJk",
  "key20": "5yXMxx4CC613Qy3NtT67epfJ4Zx99TdArftxTg3aEDfDCVNPorGp8hHXunLrDGSKZFepBbF7nmksrNvb6YZWN8ew",
  "key21": "mSRgrmqmXxVjSA4NFQEkrj5vPRXLjCf19ds4fSbBxSKZu38AEixf7kN4W9xoiuWgbLS1rZXgZd3Pi7ohwKNecCP",
  "key22": "uGbch57Jkcc5XqfaTMD4aETS9dsBsikb4W6wFRmSBfJ9m87CTGYCmj3434zxxFYqCdtk144cdPA2zKDPqAwrzLc",
  "key23": "54rHextjtyUC3CkfYgWQ9oFn3o8eHMidaiBRA6bUKenSZ9SEzJvsydyLetQpMtmGiPGJvQqTAKxkbpzziLSsDwdG",
  "key24": "2PjhKraog8fFLPJwi3A3Mz3ErP8kHjnb6BWagAAXz5DWGEjP2xhzydqChoDv4URXjf2MkFMk9WoNno7FCxQ4NDvQ",
  "key25": "4pQ8cTGDaNWvwRGzePjdf3KJZun97sDwV52gnGofaotqGvM2bnjmhbArd5MkzPkyqcgkN2dtp4uz9hskSr6qovY5",
  "key26": "5WP4vxJnZd2aKDPA3fYwqM7xyNue5uqeG88uaR9VpjoEppk1ub1oEcB4Vjh4x5Spz9265dHvGZZjNANVX6rb6ucE",
  "key27": "5q9vApeU7AQQjRsBi7k8QAybbKTGt5bqkptnjknuNidFz5mnrqaxZCSsjPd4ZmHhf8xpQBk6odM7hMM9xbMLHjaq",
  "key28": "3JS3SB1GtfeLgKStREpzczvwouT8NzMv2RpsD6t1bWN8WvpgwNVjdtYf9yJKgjKTnbhNSJa2SeVKjsX2NfX5AuBw",
  "key29": "55DvMQ6zcJZjkhDwpcRxeMBxRjdGYtEFC4rVdqNeicjWRpDY38w5U3taPhPwDbQ31Rra5Bbh7kwQyFZrxV5g4Sd6",
  "key30": "4GbkJPaNPpVb6JYkC3MJwZ9YeZvNqGcuKPqM2cs4PQAWisRnck5MhVRS5XrEnXpWUTGzLydE6YuXWZdG8oab4fqp",
  "key31": "5dQBG5QiqztHhSdAneL42ovf5LwfbhDX4Nh4WzFzZQk4gCRMWtyMAaUkyqD6wcgKVUJmyseZPN1vMtSAVohx8kPo",
  "key32": "MRpjEe7TcafshjHAMZ9bDQjbr8KQY6kVfFJr925QCntZBheZHRurhnFKpndVw7MakAEVxBittyMH5Hs3LsRVR2T",
  "key33": "3bkQep5q1qQ8P1D4M4MDM3qy8QieeYksx9ZSt2XmDpGe5JQugtysVE7jYC2djKhetMbC3Rdhdx1UWhJyB2bEN68e",
  "key34": "QQqdMn9GpUE1QAYYanrw5CgkVqULX8vpvY3wTBRFz8CkoaccLnRARuQUMCsKMMzjJtBPAUbSRLU7rwVQga8y6Qu",
  "key35": "65fG8eUdupPaXhf6G4R9pZpj2QXpUKCkozeTWBnXX5ngUXg29NmxLPxBHPeewuDf8RWpKLN8vFzSco5NBBYeVVjh",
  "key36": "29LtrQ3KhUJfBEkix1mEvtQ7W3x4wnjyG9vFqjYudbRwrVAnK1BNW1A5T91zLJi3ZWk5ppdLpgdNkhxrNbaLMmht",
  "key37": "3TvhBDWpRH4k5QWfMDfhMsygQqzmz4wHRwBn9FSV8Dmdw9HVJi5AxNaxCSbfeQBzELfoqNe53y5nZz4ei9vKdaE2",
  "key38": "4Yap1JyUUb9gU3kCbc1aZR6kDbjFVRYmkFRs8mVVTmXiQGusobW3SGzUzGog5WiqBBHxq3Yy78yiqENBN9i8ep6T",
  "key39": "36G1nzHaUtrpJpe7i8LJzyQXg8PcH2JdPnqDsQ7j5P47Xmy6oYTVbKSeXR58yAoYHR3NMQUNwsL2WQhk9EErPwpd",
  "key40": "i5Y82Uy66oHEyqpCyuuGWwJ8yNd8mSrCTfCX17y3CySc7auU8fTK5Jr3ZdZwpsHuSapTRxsxqSS8JTXGXJFZA29",
  "key41": "5V61HN3H45YXHr8145fhoKJePnirjZCgLzJhyTAhyjQLuRkCAAHrd1VFxAegwJZEwAmXMtqjqp7A1nM1MFiWErAz",
  "key42": "5kSFMD6F58vbDAK5bMNUdiKwFMd6rGuEEos9huz85M3k2zQpCoqN3xWwUHgdDchYckmRuKJi4W89ACB9qfqG3Uc4",
  "key43": "67pWim9mwLtMwRdDT81VAcY1nczLXUtyd5WJKtSh9CY7oNUBxLhJ3ddbGTQDgcqXzUFk1A8GpCQrWGRnaWaJ44cg",
  "key44": "66UmEG6KLjKrnGC54Jw5C3wKsBUTA2aAhk4depbtJT9nx3NhqhXkCoLj63mH97Q6YhhSd2ufMAcyN2cvS5FPmVYA",
  "key45": "8PceKuEroCjDys85j7G63gJpJjfpc5UUzCnQJA56rvzsFV8dtAzuFrVpo4cYSHKCidnWiE8hAec7dxg37r4ot9a"
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
