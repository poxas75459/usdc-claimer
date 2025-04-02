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
    "2RErJLnpxMa3nLaQdbvvptbMXfpv7FHjJfTLRoWZhUdude8o421SxSwdnBTkZF5j3CCPDKQv3KZ9c8kGqfDr2qFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rKehPGrFWAssYWDRMhxcLrc1GhNSjSVqzz19dQpCdVM9jAfmDuhmrtaALfhKFy3GNPkE4FnttB3KAyFxnoQudvU",
  "key1": "46ArASoS4Ys6dTZHC165CwPjdoGJ5PvXtPaEp4b5o72NSTm26yLG1zxHum6db6e9VurrRuvJPwWGwnmzdXrzxmwC",
  "key2": "62rnYYy1z7gLLbUR6JhuiJdiXwtzSTWVDJwqqNfpxhjzS4KDZYzPPYJGX3orXSMmxyqeZmTeGwAEXvrqtULLzkyW",
  "key3": "5PQJv7Uhve2TmusBJDoxCnPMKsMegRoy51MEfFEnvZPn8fco8vZuW8LXdnDTg4qDS82eg1o94bgdzP2bPAbNS5Yh",
  "key4": "4hmQDkwXk9i2ftzwtYXH4wXvWTPWDnbsUY2xEjptgFUqxw3jVM1CQWbQVyBbLXekWvyyCDhiwPNhKkWfQPx6V8d7",
  "key5": "eRNLHTQBVfSxJYUKQ4HAvA5VCY9p8JEd492sNU4h3d4Kd2rvcBPR24ntr7jaPCTAYb864Y3PAPFtHZvSokRHdeC",
  "key6": "pMyJLSq44476draKP8AwLReUz8a7YiWpc9Wy3vC3Fi8RJGQsTcZkFGVYe7n3vN1tFs9TL8paTBRsLzx5YR2DXJr",
  "key7": "5jRwJns3yrix55566TJ9Yo9ekcPQnFc5X6dad8qN2Fy7WvyKRNsLGm9ob4qK3gPYRABhbLg3kwJGsDJmjNr5Xn1H",
  "key8": "5hMPzZafL3x6UWzYcMVgGEZ6WMUmRz2BrC8LcSqV3KyBz4eAeyoBW8tTpkzSTvy1atBj51m9njJpV9fqF6StRm1e",
  "key9": "34MzKZc5XwTU3s5jWWvP6kjcnBVQrTh64fG8cTAYchwyvHzYnY2TesBEAgaoHzagTRJCSzja53tkhxpgeQvTfcdo",
  "key10": "5pwL2JDUaZo7d569CktV52EAXY1ekF6yPf5r5ZVxF38bEsGqzu6PmArHHYdN7JimwR2mdWSxkFERP3wT97YcEwfj",
  "key11": "5bDRBnwjqqVrEvHXKyqCrhRPey8Cvp29of3NuqXge9mUVZGSag7GwwQE6SiTBVrbHmGKjTvXKd8xNyrsM9FAmQWY",
  "key12": "3jT2zBVLw1jorDJvawMNPLeF1oi3sjwk6meQRuGNL3etHp5MnKE6ALYwWz8vaCFxWfQMYN1oxge2ehHgyxYjadoE",
  "key13": "4kEKfY3YyzzeKcG46TzWHyy5D7j7sUrLw8rCJhHSxxvwFL9nV7uYKmjXh3MQ18fEoEa3UWjHGABnqB24Vo1JrzxV",
  "key14": "2yjSLfzGvjSFtu433VP4AqvYF2YWQeeZjbVHqEDG5oum4qjzj7p7sNRaig6dQu1Agts43iw7N851v2SkyhrW5sWw",
  "key15": "42HdVrprMmDQfk46SXLB9e5CdYYCcyKCmKLX1CqRUsqzw66GeyTKzQCgEr4BzHdbi13dpsMfnFo8jmmJejRf6Lyd",
  "key16": "3kiEeZ2mL9zugEk3d2Dviwcg6LNgPrRQVizwVjkvr654uVbLcA6DbGQVoznmn5dWMEKeWAuLteyNXm2HQ3DQYJhB",
  "key17": "2rx8MGd8LTFo6NoowkURJCxroW7XLhFYu12bLRJKcHbU8W4hH265Urs1xaLMiVcYSNyggkr6J1yKZhtRPfgzzfAs",
  "key18": "HexAV6dCzVpkLYcovJ8DnAVpDFYDDPN5ydRgsHKqq41GVPhYzwDHQgKUwaqHzXtPgfgSEqKnjg7afGuHpCfUseN",
  "key19": "4pTvphJPij9yWvX6vVxTsrrsoYXjr6SuCfTWnhWebi29bHNpbWXEVxMvLZYeYH6kGk58hoiYYSfabbhGa9b4RbPa",
  "key20": "5wnGVoyG87DNCWjA75VJix2hWvTNdDhdgBvY9L6CL5ib8NgXh98dfvPBVm5YSKaRd1t53XwRVrHNT7pzeQ7EnW51",
  "key21": "3tj4tVUDkUnLtc3KTmibbzS5q6phJmNJMpStAUFUz7X4nfNtxS7Nsm6VbE48P6uLaepXSyc6vHkjQeoBicw6VeA4",
  "key22": "5R9G4cQLE36vTm6frMHh3UAU2seRnmcs7iZiNsfcjMZ7AQjiiTvPSdV8vViJ9bqvsdDZRc7vbTJj9YPdzdkzgMR9",
  "key23": "5WAdj3vK5TKQCiMbpNA65t1D8vW6sVYRbedyHddkszii979Yzb3QBBPw5mgpoAYJoZPYec4BcS9Bhn7PT1o7vuNg",
  "key24": "63h1jka2b3e99aEqDwCoSc8NhBrEWefVrgTMwbGZuAYrBaZAkdnYG2zbFbwciYZyKGnZ8zNzaXSAY5UTjESF5g6z",
  "key25": "51Ng34ddXxGfGHHJQNr2XivD4YTcJd8qZaqP2ogYZ5G3YkrEPDCssZAmVKGAT4FsXthCreFXoCXCRs6bRyVwktqg",
  "key26": "2At19F6r73M7fcDmcGX4znWkH25CfGwhRXiS6afFytyRvMrvXeibBjoEWPsPnkMcmEVsaUVGsboGNDRSAE4qEtru",
  "key27": "4V3kFpWhd7s6tFZ5Mw8LK5ujMq1AmxUwrYwVAtEL8MzRURJqw5DEGmPWzC4wYHGXHdnMAkckjFiVvCDcpGaxHaRe",
  "key28": "5eaDXgTAXu8pGthuhRb3kBwt3Jjs5oXASJiEn6DY39wBRDWjWkuk9Zr6BAUt1nN4sVguL3hbzQNz7t9DX4GQd3Zk",
  "key29": "5R6PTnJLGnk1xL6YPQVd2pjSNXdk6DJCxPKPCi7vCnFgZbibKU3T3jc4EVgynB3WPqdbhE7icDMdieMr6e45uJzi",
  "key30": "1fqsyfeJYRWF97Aj8xMLEsC4bByuSJAaTDGPR5erd9BjiA1nv2D46mNAdfhSVrVnMGCk4bbmJanseJvN29ahKxS",
  "key31": "28pyy27cmnaKcWWo9jyeYkfRwKMuDtGV7dfzBeThENXyCCXyd7qGsUjhZbdTAf7ooEGjCiRptfTiPaYww1KcTDA8",
  "key32": "joPTb62h2x3KwC2LbNqynqdQie4skD1q7qVDhe4LMyprGW9ZU32v276fPL8RCk3jxsZqXTJspTd21k8mkmJ54Rt",
  "key33": "Wa22imTy9wZeSrv88hcgRbtcJZH1xRT7WQFjsgGXZhg2ikohBo4yypuXvfxUymkahMLp17Fdaxi8Wb858eB4Emr",
  "key34": "P3cwyy8yamup7aNVkNZKUoEAzs7ec54ZQbr3pZY14srman6ynJhaU5Ecik9V7A3Z8fCKQL1sBfhwUzNzWLAQJti",
  "key35": "5pstAuac62PtJHjhCFsq7UzeTTeiLi13MFKbg4JXPnyoD14ymxnTAJSATxctdqi51vg2ezDV5p5qD1iEsfoJQ2Jb",
  "key36": "21kKVnNat3puVePZkR6oFjbLKWSwTBn3PfFWfsit7utCPxb4KwAuZXo45DosSNfk9x8VDNHkYX7bPXceBSHoRgn3",
  "key37": "qD9jWZEqELyNjV52JBjVhoXq9U7CXtW64bjGtYj8iiNQ812eRsDT9aUF62ujbyo6i7wbWLCBarDY4N4aCyPE9Wg",
  "key38": "4RcviLypdiELG86C2ybSBtHuwznkaeuGigF37wc1R9S7CSoiLrpqbZ7Eo3WSKTX4z8eY1jkjpjQA9fz8mVLWcoGB",
  "key39": "3jSFUAPny5R4N6YdTZCPquYku2pqjh6J5UVzfYoADYDN3SfvnEaw3WABNDWZJ1WQwBhW2ARv8h6eZemnZa5xaNEi",
  "key40": "5avsgsZLCvaQQJ2YtnE4B9P39S5wg7au4X7C7ZZonjEpdQkfBGwa7ifPhBzQhV7pbKcREYdiwoDc8mdGLro7jJEB",
  "key41": "2C9D8uVuP8kqiL287D1TEctm15reLtmXiFgi6LnyZcrbyYNUr2VJGp2UWHqgnJJPv88L77FYPm9JgP9Bb4aS6NPt",
  "key42": "2khELWqYGWmL1jWsfoBknMchUUQCpqUwEAWdnWHVSbUF4dXa2BWH1Ru2SVmzQsV1v7keAS5fm5zgX1XU38CgmkT7",
  "key43": "EhKafzoHtZCmDFKiX9389ArsedFwA4F4YPhPFD33hbMkCMrZK9C4toDB5pBQvr2uSgTC78MwZCaR26tJ3tWKhX4",
  "key44": "5uA65PjQh6BDqQPoTHjk2tJSLMyQxS1cXtwdDFQPwhnHCwzRgSAm6WGsFrszT5PhHZkkns6A63DM9CnnxjvzE63Z",
  "key45": "3sjLMZssh4vip2dnTgmmaZMkw2fDbjY17xawMnueq6cWQTtRzx46Wek82BViVJxw9F1NxboWf8YH1JZWrG7zPpXK",
  "key46": "5f1MCdmWkaxzEpFHFDwVNXSRLAj7pgKDEGgf68e2fxaofU2Wxz86erpCoNLw9QvSrTr8JkiVy38rBntzp3A97gFM",
  "key47": "5daUE88WprXfNBprMHY5j6yRApLuLFwXnntH8pm7v2CFJi3mKxsGQDs2VkY26QU2hp5mFU6yXaupKcdZpM8XxeZE",
  "key48": "2o8BaUvgvSYaoN9wsadgKcTBPCtAnncSwiV3T6FerXbrMG3M343NsDPY5DsnfNpwQmVmtqG1CfFgVXmH6xnQDNdW"
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
