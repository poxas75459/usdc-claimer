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
    "2pmvr5ntcbAEKTBgtH7gE3P2VSQy7TkhhS13uaPpwv8mpgCRvmYQ7Q3rEhXDZTo2pzBMdwphes3ZpShGH8PN43xa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PwKasR4SFEaFJ6NWUq6vDk2PvoYwZg7VwteKS9DHzpcvu8HeBW2xdCk1TX9oqRcRm8ArV1PCdoD7o2EjrWt7LUH",
  "key1": "2MV5nSnXmmxkuNt2KxSt6ZuWLHTFyS4oDrtsEeMA7TmhE4N7nXsPbdVXTKUpVstWUSkvP6EzN5ciwvTSMLCpJ1Nn",
  "key2": "Srhcu2VGzSMTkRKVzsf7CCoHSJRRc5hKfejc71JWj6Y9nHr99aHphELLUiGD155D6BFiY8m8s6THNT6Umtjhtro",
  "key3": "SBC4nyHwY3CB4RE3QsTKFvVThHwpf4iTQKrkZ2pim12iG6NegxEXpqM9YqZHy4zZfe9aKE2nM98gTcKeJk2NXkX",
  "key4": "4EfgwTLDmo86qSK6XyzuMreAf2YCX49BsCEjNQcQ7NBozmfp9smzjWdZTofQkvNgByk1mWSVDzwtFGHr2rhAJ4vN",
  "key5": "4Cj3ynQbJH8pwjy7wqyux8sMhj8gUSoH8YvBxn3JVcyPJ4HFSZRMf3iqmfwYZWPaTYkmv9V3sV6geNi4zq344bgM",
  "key6": "5t1r13dvtrECi3qGt1YetTF2ZyrK7Hs2LzBrcqy25DNiuULCTbrjuV2UPf8fmqcGXRXMSKQZo2VntZpps5AgLixY",
  "key7": "43fTAkZVm2LSgWjZRjkinpAMivAKhdLcDqRtPx9UyUdwmrJTk6wqaGxYUm2mMADfuvtZKX41a75zMfXaFjTTJbfk",
  "key8": "4g8FMLV4JfWUobNNngg4mtMsom6wJ36vr28od7LYcK5uB5u8rX6GJhuZjrNGHpunZn2yqrV4YYVSQ3W57vHdYZLi",
  "key9": "mhMzcWb6k4Cr7UMsM8JLG83ETxz8US5ykv2Pdxhh1fzJasDcef8uhoQAxwpVY8jGNWFwPuzZBRvSSDdygLwTkW9",
  "key10": "5Kj9Thx1DBzNL4sYUHUNmSFGC28ATqiry8maZtcRMSv9SHaaxyKh39ns24Gt1WMMDYmsUQQKR81X3xgDVP32r6in",
  "key11": "3KFJzxFLJtu99X97Z1dXw3wbRMN2Xpn8h6hjoPeCDPmi4Xok3BPzkobxN6A4Qs6SU8AEWpCyRVyu48x5WULoaJjC",
  "key12": "3RuFPChniBgQtKo3LsR3sGDSEmbRW5uK11qy8GcGuB5ehapMFd4DmWxosU1F4YfNhZpdZSkzraTf65PQgKVWpYT8",
  "key13": "5P9YrqM4pgEJ259Je1hYC6Puo9txBJbKABn5FDGX9xRPZNxpqUJw7rJbvx9k3nSM1JuLHUhP5iLYSwNCQp37g7DB",
  "key14": "4U9aL3ozPpKFuUgr8743FuazbQTzTfmbd6Qve7rnrHps7JLEY8HkeyfPkqrV1t6PC5jzw3ZmUK3VpdWykNyCVW4y",
  "key15": "3PoSDUWPNom8nmCBWoXRWKiDb5UMNwVSrKZrqRr1Aa1nEbNfjzSmv4VaPr7RpqCXFfCWGPeg3QutmJ6z8MrDHpF3",
  "key16": "K2XZH2aMyoEGPSG6uw3REGUM55EdNNXfzPyAC9eMpZ7G92SnpLMvp1zcgy2x4PRCCDpQnQVBRjG1cdPRfxq9NBd",
  "key17": "3DZrMcddJXqryyMVxJ6J3mt7HiphKCWSLwx6RnxPksxoUSKkjH8iRTkDcVffGJHmX8azV9KqmJYBrfFGLvyzFt9q",
  "key18": "2pij1G24HC5nipcrk7orMizFEjLgxm5XR99s9gzZpvd137cXD5qYQf4R5NXwcMJ5SWyXATNqUwctXN4K71GdB5Rv",
  "key19": "3msdTz6njhUkmeJqKTHWrgTRRQF8b7LGf1acNxUkPEkKERtU9pA3emP9DB3yuCQgwTqDcRxWpqfEi6LjbUeMA8oP",
  "key20": "2BkALWVAa4vG2tDuRVfxunKfTKgdRex8VsoERJtaeKcHHpnsCEjwa7EXBZbUHZCi55FFf8CctSaYSNy4fVgA9WNR",
  "key21": "To9N8F6tUMeDuYm6E1duv7X7hVDuGDY1sTehXHqgU95vn8z6DnSPRqybX6x4FhkRhRr1cSsK3nm5ZvxG9RXZNdC",
  "key22": "2sttjr5fr8zd6vb9342GAWT6qXLW1GN1Ao1KYjSCiL6pqhEoxZFHSHkD5e2Qyz4Yo6J8Mx4NVdkCuRfpKGNbwV3W",
  "key23": "AdvNmYzdiYTueDcpmg9dPGWfpBUaCC3qN9HRMEbK3qao3M6ESfhHD89RYF4DVreyVCHtmVH1LZCK45jE6FAduGx",
  "key24": "3DdeyiED54BEge98Uqzgv8r6sQ3PzZesXNtcdPxtirSJULbXsqMDPA6xmtiR7Bo7YC7P2hgYFXxHka59FSwn4xLW",
  "key25": "KiP7VFaafqJgFn8DkrCWAfn5pmqmUcm8K2rXMR3K2xtbpwuKdEqYNpqFvi8pTZR3XWez93aLzJJTdnP5ANS2Ch8",
  "key26": "39GMe5uGJZBQiv1KCpeZmNBJqton3JxFhNW5z3NQXsU6HKF3PtZJ7ZbWhtkZTKBypFPX1YaitADFSVRPeKWWRgpp",
  "key27": "42QNSWH4sAzDyMwvqJHqgAACbrDRLc7SqE64kSReEBZp1hxZQKP8K5wFosfP7PWkUhJsHE6AufrmETgGSPWpLnqo",
  "key28": "31ZZUtqJdve1umXyJZJ3NhNsZgJocKHGbVvUhjn6WEw7dvZ7sKusPXJ5XzEyfasCMyoJSSVBph4wHY9e66jx1m39",
  "key29": "675uo5CVYJGKgaQAgX3gLQyxQnuEUhu4N3XTqCooNfFRDLRgXQsZWyNDufj4G3FGqppDWJVPJiqS4k1A79Lza1Pe",
  "key30": "w87dF9ZRwEvGC4YhDdaAEcFrcPii4eYy5im3moeMZKes8YavSYm3dr2AyC1WWqw8cMKrdSPGLf4B1ZY7XxpCgTk",
  "key31": "45Qa5avxAdZ6MdAYxejyKWg6kqhDUDX6pxeCHnf5wTDG5VwYVjmX3x3WuzPqoPWYEUEYm3KTCg6UD6cDwrvYWYFj",
  "key32": "3GBLF2iZ9ahYbF9aJt7fNKaCc8BUxqTrCEDdXFMrr13Li9KjAX3jpzDzbbm29nAeA4hJdSehySqTxw8uSRUMQh5B",
  "key33": "2So7p27czcNDfy8BdcvMVsJrtdXom7VcHeCUxCUzgxa81oWYw9MzcWWMmN2bdNMTXvjvQGqwvJVxGM28v3eDEiw6",
  "key34": "3r3VXTMEjtXWPyBVF4AYF7JsAjbkXHFnqadJDUA8GoDJd6GbjtQuN3wzsMEuqBLiKsHHgY1YrUo74e3BqLHRys5K",
  "key35": "62oRoypVJr8b4eTpdNX3TVMdeArx2w9oaU7ay6Apz774okjPqgD8zS5mwgLV6SwnmGrK4GLAuwvEr7RwsJ3uLQ3w",
  "key36": "5svKy4qQHmt67cNtsTonMZGJ8dhjpmiGEp8hFAyW6SdAMzaAWTvFX6YASjcmyJdVTCVWgHvgndv6nNvwAZRt1KNo",
  "key37": "2GDrMs9MzqQknKHNBtF7R3WUc3nV8mjAbm1NCDVDM59Sz89Ye9dZjMsAy7E7oFuDPVzERfR8tb9YTmMoprpeaVnf",
  "key38": "3wFzUhBXE8PPcovPxrypyW3ShsgCH4H7cfs9zhRvxhJmjKzKQTsU5dtPZb2Fnu1JLZvA9KkkC1GJmYkqY44W8zTM",
  "key39": "ettAxbV4vBFMvGoHNRtAVejtRpasWfG4PbdQPYhbfeY5tffgaZhYLLBN9ekgiEQmFMvqZzYF85nfCAJR2UfpfhH",
  "key40": "5HA93kru3rjyqPv7vJXvTZexB9qZmj1Nj5q6kYGsrsSoHXNNUt85jg8oyFH5xY2gNj6kkFTgEkV6ATuJfkvzNJwk",
  "key41": "4netMp4TM73QeTqnrfx8QYkQdHBdDcVSLhcLL9bfwFbsddQVSBemj72gdQvT3ZsFLMjAL5dw2jwtrsm9RkaNa3Kt",
  "key42": "5Cx5nRQ3qY7DXiSoVEWy8ch4Hm8VxcqxrwfvcZprbfoSGYrpD64MCW9kZZh9qarhjbKjkKvvekfoJNMnNuAfkTFU"
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
