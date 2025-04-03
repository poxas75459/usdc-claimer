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
    "2rQhKZBRVrCBcZ8ZdJzY1Pch3hgPjBjdpFe7H9d3goXPG7tcheUJwKuXZYntkA26vj9KZMndweiZ2sJSUeA8QrtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fD8nvtAX5S4DWauEFP2NFYB44XxfkZeCbekUoscdNdJc24d18QUsCGg4r6TGXMwWqprqfQaoKogy2pUAGJXPAvF",
  "key1": "rsS9r9CwhVKjSjDVJaFMnEQ76KhxqESdGakjhuda7uzy6DFMPbrbdjQnf65c6iEs3V1jS9G2DjVmLY9ujekQnfm",
  "key2": "57LQVLWNyntbxnsJSNQAoTApGUjQAqevwewmbYNf7EYCwLXLaUJjX64C5TPz1kBgtVBD4tyvm3mFMsTJwMYSE6qy",
  "key3": "31FdnZBxRed8c4u93tBugB1RD1MdKFnsx6EzT8to8GA3eYQHZwq4TuT6uMV9sEyybR55LX8GB6rjhVqKQqK5evwo",
  "key4": "YgnZXXiun8vqj1fraLfgXsHsSYiMVJrJfKv8s1JG7Jy1SATkHhj1JE62nMJiWsXhQjXqN3wyFLxzTkBodoY9ZcF",
  "key5": "3WTjN3R9S8muLjKfgiwGhriC2GDgYkV85pwnEmMtQTYtLdkwExbTRE3EibfYzTMR6WYr176nB47DbUrj7tw8q1ib",
  "key6": "3dfZ3jDq9BRNpHo3cTLj2iJHvb64CF3je8QRhECWLnWY5dnU3wa4pSvAG7ADMgfkWb7tGV4BRnuoaNgS9gT46DsG",
  "key7": "2ho834Wv24vmixg17mxDbwfLyfhNkxMjJR5CFVjqsMKExfqWgwDp963DF8K97Z3vCaXLv91RSCJipDn8EYUUsMdS",
  "key8": "oatWwE344tg51vCaksG5Cfd9EXScRMzUT1MX49UiNGAhiCHUp3MfEm5xYqhDerZwTNnu3CTaFFg5h5fUU2iXQsS",
  "key9": "2juNvK1CZMDgs4vGLwoqNkscmDFxNi5qiz9viQkH8JpUK7zoh2MYs2mMBnaBnAwoPyffVnkEV8sKiAGYsDiHw4k4",
  "key10": "hkMHz1W4UjQpq6BvGQpo83YDLgjtwtQMNAMHGUG2kXPVtHAutDfvDB2LmjjnWnWW2rmyE3AaBa1htQAHA2euLN5",
  "key11": "31N5qUXNGwpvpUUoUuDrbybEtk2MJYpq5PZ2e9vSZyQczppJQe7r2fuUCo8G3aoiDPfDME1hHHEf74NAYrvQ7ypf",
  "key12": "4ZNKUQio9M4Psm2jJ1ojkjyRB94yxpBe6PdAGKCB8ALkza45F5nNCy1BSSDvScynUsx2j9PX1LAA7L739fQh1LXq",
  "key13": "k9upszR7ARbNYtyuVEDpCrqnTBwNCokjrPgNBtDLgFjyL4HH9jvR9nZ5NWoXGWw7xZPT3AvnrVbyoY8psqTLq5d",
  "key14": "2ijicbaEiHXkuyiXzk1QYDQiQaeMbkZ43rt95nkBapPKbY4nbEcsQcR7YZZhucQMY7f7NAy5JAjLZeSWMtvZJ3ik",
  "key15": "34neeUtrzhJMqJ52sWe2L89pvj2pnQpHv79UZPeqvUbomdAJ3XNgmkCvGtgikzG9ihAgJu1xArMVV2h9YQcmtou5",
  "key16": "2qSq84DdaUAEX2tTQc57G5DzYLkGYAiXG9gvmMLYTfeYmFLqVibepXjeMjzjT6ef6yMVE6aZcAMjrzYJHLWRE7F9",
  "key17": "4TDBaQgxFha9Ep6BQYx3GwWCnH65TeUcAA9zZ6gaHmTScGjwkyoKW8u8fyv3Fszh2Cu5GuftW9gZpXNDdExQ7wP1",
  "key18": "2EMjgRgogHGVcJZafD2UJHCx7cLgbbMaPG6DqXB3Yy17dcK1pDmW3gubrwcJ7bYHsJczMeWGBmuUgfVRj5jt2nqv",
  "key19": "5oS6WZ5GrxEc7cLUBuMAre8gEsLisxqM6FSrPwHdXosH2Fb6STz8Vfd7LY5UfpHX7D8gBis1TZnmgD1ig4GS6KtS",
  "key20": "QYcQ7aXqxvbedLGebYDmjMqqVff3PzNA6XP71Rqh2X93MV6mjjDEpDFsjVKESfZNLQFMXPANm9pLQ5mkFgNocqm",
  "key21": "5fQ1yeTyjW7ijfTqkcHy2F8eNYW9dCEQmZqq2zgEQGRYN7oGjaq3QzMUyWv3EjY7MKVg9MbMhadLorCHxMn8xjVU",
  "key22": "4uwwf2hqSYe9mPHuPDPkHFp6PsMDnXobsfEzgKgWpbLKr1MffKNwb1RcgB97WuH97RRKMP6h9vtUfPEsKLX1HKNd",
  "key23": "3L6H88y8Fw1DrkwSXixmTbQ6xQebmihH4qUWu2W1ZrN6fhoK1s6fpZRDXFr3iURpEQArPbNCUMPbwKZMnVf1mwZb",
  "key24": "4bNKGEWChMDf9Wm2fR1NdvFfGxLt8ZkAgK5FCFEPedHtcyy33p5bTNnuaLSRdDqSPbTrn7jAGT2162qVSk9bQrCP",
  "key25": "2jLH3euJL2RHt8jhkTnMw7amtA3EE1B7DCmeJLt91StScHDM4nDvQUdR46sWDnNHsS2zuezwzMjApAUzfvckcaFP",
  "key26": "3VveuUjKnx4fgQPXHV5aF3i7x7RzK4GiqcrVkJZnrAFpSnKQiHc8kRpA8Fj7sLrbbwLzCQA8AX4B9xWzpFemxvkX",
  "key27": "5EjpZfM9qHo2LGRLWsqmhbqmemw9jGZyRPwZbo6LL8SHEf1yVgEN9DY2xuuo6KoXtEqb5A9hJ6ykjsKGNZk4KtPN",
  "key28": "4oJ7TZ9GZvMJEvFog5XdbnXhJfPrQuKMNU6ArJ9vyR3sjzdApbgVnjw5S58J1kEwyLbqfr38rhEo1iUS7emqJHp4",
  "key29": "uXnMHamyMidX7c1yL6iZ184f5FEmtVG8xdHHqHxEvrEF1ZbLHHD7pu3Ej46tMyzGVYYCDb2XJ2pb8reDPaNRuid",
  "key30": "4Sn97aytCLVCdDr9b4m8sCwoLJNb5jQJPrBn9wouqVhVHRt1NLwRvu5Ns3Bckt4TiGk9TLNChpEK36PfTRyxKwP3",
  "key31": "5oZTH1g9xGVcPwtdQf5C8ozWK3aDEfaALnJXBtbbManTCNbFMJLtxtp3Bi5icN4o1oCRtqq9a4TgUhd1Nt6ke4e5",
  "key32": "cTv7vKdjB7xgRrww7D4NXrao3xCEvjb3UrAzjAzr6BT4XPWC8rVDkDM6rUuiSZbTDBY8YULmu7LSpJLUrPQpZSF",
  "key33": "2jJRkmdSnURJvFYFgtL6JWni1KiBbDeQ73xE9wfuK8ae8FSBsFLd8CQAYncaQsKeVTqTmmrt6To43uvNHYUMGqaB",
  "key34": "2WQTYXQxDYNPopFBCfvZpZFHCtWxNgwikTdYKrctqjooTsHLd2YmykPbRdhsLU887wg8y7vkhS4gCG14kMzpos47",
  "key35": "456pEyXXk44qFoHm4KPUd3S7XLmbL9rDqHeqnZXPoFJGWHZhUz7rPcymJXAVUYH7rjnVuykFpfGZw7dJToiTzfFY",
  "key36": "Q4W9JirQdChh5HsSsrimWgMyRvDHVzTdL4wF5QEvviZYmfuqH6dnjX9Febin5LuDz7mCE3yt1MiSi8GdEoh4ia1",
  "key37": "2C1JJpgr9KaW3CjjMKF6Jnbzh9SeWWfQuG6qh1paiFBqMVaSV2SvvRGWt3tSpF96y4pmHC9xuKrwhCPFiDwSAAos",
  "key38": "4jkvBM62H4GxTuMnHYgm95wL8Uf2itce2vEG1sFBvsjKj4brtu2Jj4uPjfNuVf6mWMSv9QbzKU4yGrXf25GrtSj6",
  "key39": "4hbvzFySTvFysi2s4NHPZ5As9yjwk3AMCFg4unbeevnqLwPW9pucaqYadHBsdLXSdbYqYNjc7K4NqtVexzKd4VxU"
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
