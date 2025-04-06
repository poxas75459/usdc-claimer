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
    "4tACNdSG5n8AwhU17ftsH4SsBqH8KVxYEzhCGhvawejGH6SQA6fufgKtXH1HaTqZXrtyffuD7WNkuCUjTXiNNdpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49uiq3Zxxp1XJ9F2Y1vgzC4MWF64e5ZWvUcrVntfoCYNLskTEqUULJfpSCusnp3Bux2SRtc3XbJqoKZuFTFzfE8h",
  "key1": "4Vzy2DJy5f2WA6BEqiRUYm9DDjACTcLbpfcyvdu2NxbsA7Nb59QzPzeCeH7MbkJLEcv2sqrqNwyx2AThHVx9bu7x",
  "key2": "35Yzs2a6YzoFjXUzVap69taCDzexk8Bwa9iigAV8xSKrvzqs55kQnaKu9vkrasq8XS1AAnUCTcxtCQ2MMr6tLqRn",
  "key3": "23t8oTkAo58FZ1a1VynKgdX5mmMSt3miWZuqCpyhAik6w3pnDntzcoawyoF6c1GEVn3E9xbc5iim8NoGbJ54Z4ab",
  "key4": "rm3Wt2GVQKgR62yafHwcgeyy82v8DG3AECHfBSpMrGuAs3yJToCvdrt6J7v4bs9PbddyCPB9aeiLoViVdxPJJLD",
  "key5": "EP3PoLsLh6KAPwowMm336guJPksd1cN9FBNvFhX25rbS7JrZ7K7FhuLBpsHqxxHWrBZm5CiHcURei75Hbfq325E",
  "key6": "2WxTsMnrXjzHxTzTAXwdvoBmaXsp6uBqd7b751QiGkvRMacLrPWQmhMHZyqFtSjTB6DJRVpWg8jh1gfJvySYekYW",
  "key7": "45Xym9oLoMFhzhAEV8brU1H9EaXA1PfJaFHfA7nVX1Hk8Guhi5iorPUiYXxYSuDwHkG9SWYrgqVEfPPthPWuPjrs",
  "key8": "uiMhczRdymsB4fQutM97ThDtB2yRCUDzWcdZZJeC4fbVJEJ9MYu5bt3wB8f5zqiLRdU1e87k8t1srviqQLh3ZCe",
  "key9": "rXeWLGAYJ3puCN9o3cQDFCVBU6hTd9HXFJMpewL9Bt5oxB85qCUcVEYH3uqorMWbH3Z87u3C5dM5i6LRoL75eXd",
  "key10": "43hfy268XMfeoN4bQ1fREqTCKFWmWSyp5ABEJ961PkaLwoEMebSVwX1NYHN2muoKZ8tw2coPBHjZZCtXFGnAhNUA",
  "key11": "4ZSHjKHypzbDJcTLvjzG5b2wdoJukVyByvYFCGUGGsA26ighKeraLw197a9vi5KpGvswM36qshezNzPgpPMPpb9d",
  "key12": "uPDfYdweET6PCenf8JPEhcZNKXvjjbTeg5BHkqUgpQpbAvYgoveNkgHTqZZHPyDqqaPbTPe4VwvhKye1JKdiNEF",
  "key13": "3Lg8a1P1LCLGec6N32pT4Cp9aPsCw4KmjKJCsqY6zRx8opo46vsxK561dRPdQ5XJYKd6tSCnmkp6B6R9Ai1PSThJ",
  "key14": "35praayHrv68D5ii9p3vumco22XDKHkPp81stzpwvCqNCQSZez7qPAYkcQS8XSNSnLNJwyhLM4b4Tit1zpnoLP2w",
  "key15": "54dkd7Wrb98pEjvfeWnKMR5zf5GYozeXR7PiKBwffHLozMCT2mAPDGdEVhzR2nMjTUJSCwatmyst4T4TJj7kMoBa",
  "key16": "2pgEET7wNqcLLjW8j3HJi77qh8NRStPTWRaJ4C4hZSfAaHx7GE8R8E8xtrY7mcrDM6FTmkCLopTVQwcU2BauTyvk",
  "key17": "5vzD5ctxzk2YcFSaPoRaRpY25NYhw1iBqgYSH76M4ecso7LBZgmCjnWM8n3hCvqnyVXACb67wfXbc9CptwjGmZRs",
  "key18": "3zCceYaMNW5UoawSMjxqWCMZCyYemtXJCTdYz2LYcgq4NG1K7EJYhwv9r2FpjrGHcerzcT7HyKnxtkcj1HEjMMx",
  "key19": "MD9JdcS7dJENQTWbgnZPEvt9FFJDZsrAuY6Z4UbZXds9DRn8c3LtpbJuu6DJFgNVEhxxBQfovy89DUp1uTMAPBX",
  "key20": "4Yws9JNyZHr3kwpmK2nBjX8vxRS2UEjxSYXjerhJfEF83tH3uZE9GkDWF9d2JpKUeBuGDyRJeFtoh9XhwUCQNyL6",
  "key21": "5qhwQr1zeLXbWWYXxTEgtJJeE96MfjGPCfyjgxZLs2YQTq34sbdpjWUB8SfYQfK6ZctX6UCr1BPuLQWF1arWWPTJ",
  "key22": "31Vytvo5XgnwZjGkWEGHEXZGXcAERUicSo2vcoHvMG8GodkvedgUBvR7noZxomgpMfWRPpQi7CkREpozAT1xCCGW",
  "key23": "2a72HFaYTyg5fKkJHUP8hbi2ozYoGRjYaiCUxqcyvyaLvdJDCx6Hbh6E2avUw9xGKiDqEoqGXUS72DGXcYbQ642M",
  "key24": "48YLYHqxLDrhMFzJrHW3NoVZuwXPdpH8YPXacyeUCD5UkAKS4ubvdqurBqxuEDstqhPP4Qs8aneFxSoQydFELQR8",
  "key25": "8A91EdBseTqZAHAE6JwUxdG4xmbSRdnfrs3NMAdnukK8b997KXvDRZQn5KoCVgDSfEvQ82HFUkw7ZhJxWgBLXRv",
  "key26": "uyxYqPqEouurX2uA6qpXaJTeQizHDThAoVAcAZsgHRcgoD4x77e48GFyWnLpPJBpCjVwXQV7oG23RxRVidKmKC6",
  "key27": "5kp9cqGPZ45K97P23zabhpYHt6tq1qbEP48xD4LK7Pd1gzPKmFG7JpE9WF4HPMPaXDcKmxfXqq3BgD5ZvZWxyGu",
  "key28": "3oZ8aBinP1cioxq9DcaXfh9bWdygqi6r8YfUgDkSC53ncZnKUTj1vhJCj9Gr3chxr1xrCd2y74LUJQkkm9u6ySNs",
  "key29": "432Fqibh3TAKiUFXHKSihBVyGJH677Zw121kGGWVAspqjBB5rgBY7aySQ2E7BFmTWq4GyxmEqRd2Dgx2bwhHcnw4",
  "key30": "Xh3D41KEjkZ7HWjAUpbc6xmYuNQ9ti7aPkahHJGxBE3uoTAhGUPfXEAvppurt58UsUaeieC1VcyQVvoXm75xbq9",
  "key31": "3hCN3iTwn2rgAgU1dvbFL3HCvcPWsvKtNMRrypUangSQkmLjrurfXdqAnLGuFxnERbC9CKPH7KQAdRsuQWbuHkzK",
  "key32": "yVnjtbaFjaYNkwrNDHh9aaukqzyDf9Dovgtxx8zJkxZ2goUX28SfkyZvzpKQFZJPrygjZF1EHjrp7yi1YcUS5Yg",
  "key33": "3CGvhtEqbssYQPfCk2zS625yCs3RrDQBjGQ5WAdjnmiQtoWZAtc6jfc39Vsc6UTVsVrx4LaUxCBNXcMtrZsEH4Px",
  "key34": "5Y87Yakh2axSNB2Bsi52ipQSP6gEMtYsB2kn2zD85S8bZ4oeHYtAuaKrPEt7vq6hsXwAi3VtxQc1CQ7KzMotk7KB",
  "key35": "3ypt2ZuK3abVTZ1vgpqMX1UTZeesCnhSP4YFAdzY9zc6cxPrrwq2uSagcyh9kw9YQaxJ3CUDQFyLjb6YxVjTj9Nv",
  "key36": "5e5GmPLmyCFKfmAXV3HfXEcF51b6x52KynK1WzYaNja4NkHn5TtZ2YatxVEYpKrtHajqevfSZzieqZFrZCkLZzZ1",
  "key37": "35sRz7LHwASes8kwHNzycW9UGT6eUhGbnA4qHWiGShwbrg5izMt7pMdz8WHc7mXMcC9m3QxR5oi7zV49MGGhrm9J",
  "key38": "BeGfXJuaYAhjMbrF2btMKq3uou8TtL8NLtehhQ3JqwNm5kZzakihvKPbhdELKWxojHZWnogp894HNSDXZjYdNYN",
  "key39": "JssQsGtNM5CQVtTUdSwvprH8VFwv3v2XALDoBzn31NqDodvAjrb9tjAiuw1jjdz58kqdkBV3S5bpZMnq6HqWCH1",
  "key40": "3vWQXyiLMThBmEwrT7XhTr9Y1eLgUygsBPD4gLaqx5RUTMBKjo4ohfmRfgtJcg8KNztn39L3DtYuN9nTFhstsBug",
  "key41": "3ziNsZySWJYiDw8LLExWWtDBALfjzbVNaDX9oXKn17pusvjsRsvkuoMauH7NiW63dkVAdLku5JR8GLdUQ88RvHM2",
  "key42": "29Vy3VEJZ9FJJpeDwFWxjgh5Mce5fyH3NMfZcwT4DNsK7e3UDuzknBv7QFfB2DyhGsk4DtHEXP1LzAS1tAgPUkR5",
  "key43": "2aXhuo1WrXP1WJnHUoCPCLdLccqJeAwuF18SXQeVWkQ9udjmN6uamjuVX1UeWXnzmoTJLQ33qVHEV3zQdbpVSzZC"
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
