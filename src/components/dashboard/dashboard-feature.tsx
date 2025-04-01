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
    "2nqWb6gqjDcjf8R2omJCZdDnjzxeYzhxymmio3gm8aPFTJC4pJhq5kMW14tXRgX4Thasn5eQhKJScXH3NmF1WPG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HqZDd3QqWMWWneRhsQaq1zuqPYQPEsZqSzfXb1CEqK4RHYk1TyezsxGSN8x2LQAAS21QFgraqt3e16udhRZgHfe",
  "key1": "5ENDaMsDkXosYXE7q7X7NCYz1XPKedZUGUae6oHujMPi2JBgnTHJM1QyKQNgpRLWgbP4G4s32kTQsqpv8uJpodCP",
  "key2": "4vzewH9Sx4JLHeBnmwQEkvWiR96PHqz8z3f9whU2QtNnmUVuSZCKnbkemxg17Y2xdoY5t912pw7JjppVQ1AXF71m",
  "key3": "5z19ibpVMgLCiGGmcJNrrPB8iaUe3RZvdCFjqcBbhdwJyo4rLDAqxMVxwbKA6xB1vWUUR1SmMyk1dogXpsYwLnsR",
  "key4": "o4Dr3J1JWvRb91H9fei8qQu8LV6kBcX4TP7yJWZT9tEjsbiwoSBGwUrziwf3EfQq6uBfQxx3RYJME8wNJR79JCP",
  "key5": "4nmAzmx9cyHsRs7NtRHchz3e9DgCPsHkEK6zVkq92P5m247WYv8Wu2tHNFgakYRrHPYcmcRmaCi5HdfcXNUQX8wL",
  "key6": "5Kts1ZNeLpstgoRBqjP19rVoBDHJRiKWrPFee3vUWpjc4LzTkbsW1EhvtxuQMHMerLk5VM9QrCZKjiruBfd661ef",
  "key7": "MihoQa7S6GbvJ3A54mjExLQt4jutgyo5AGBY7JkRBmj8LuWxGGG4izt6fkzKwqzK12Q6LEyskQzf8AG1D9ogn3m",
  "key8": "63mRfjvixRWRgcPAUqa4DyCPV37cRJpSdnAHoSa4XP5j3MARwExxFzqXvQbboiJFwicLf88mFQC6VKgkTbyDQ7mz",
  "key9": "2wfL4qwbSphuspwozi9hka9XX33cMYfmRGKXf6mrpWTVnjPLqf98PnLseMPwkeMi7ANuoCd3f637jSfV5JZ8Ainr",
  "key10": "2dXC4ohUkjrmbW31VTnPnFGCisLwKJf9UDiv6yVbjeK8aAvR3MsZiSwcKhnGfnYp5WSETGKjQcxsorXsLNSAiucV",
  "key11": "2vHPK2K13tkDzrUHRamPMCVHwiZhJ5sLSTEqLU8H8yzMeTpZaVsKnKccMfuq43DvYXEUESvT5CYDcQDLR9rLE5bt",
  "key12": "2xf7Vbj6DiWu3hdcoJmRhMss3bVXHozZ44QyamWxzKPWLEQyJUapKcKEch9STJr9RzniCi959S4zESMh5YCtxi2d",
  "key13": "f1ThwhJa2s2zzZpTq3NH3UMr8sgupYESZiw61cjP7yYKyqa2sUdoDSJ9CASdCEF7UzKniK9GEpwKaDou7VU4uR6",
  "key14": "FZ1xKkrq1gj2JE5YhtPCuy86GBrjajXfuVKMwmefhL3RueqHxQMp9r3aDUFTUCbNr4Lnepu6YZQiEHp6fWE53N6",
  "key15": "2RgbJ8kK679mLxDkAVMTpUh9m7ALNedHx2gPMxTmeiZpCGB1uHMrejzVxeeGDUth43zP5y7WgMnB56Kjw8XmXP2u",
  "key16": "p4jgEr9VUV7JyRNx1ZjZrBKhiyi8rCyZ9UMgGxu9LmGmSx3AJE1HLhtaWTwMteo4SzCidvmm7ek5dXBn1VANY2E",
  "key17": "27PmfpB6Zem3z5JqVP1JTzvoRtb32uzrPNyveA8dNYQA2Bde25DfPCe3SpCh9Tef9XHGC4Um7ndoAvnUJnhEWQfm",
  "key18": "K9j143RYopMzgYh3AKQgRue9bXqTraTJH64kBXLNrN7nV1NUR6SRSRxcd8Brf1d6D27ypBKvsPTw1AUAgoqY8d3",
  "key19": "36P8mKPbnooZJJngCdqK8K26D2QbanxbPbEngUB2rnf8nxWN9xVwxGseqSPESSgSu1botwhKFzfvjSa8jEWta1Ho",
  "key20": "21AzZuUYAv8QhRs7wAqFFdbTkLdsAAQgbmD3kt1XtPanVmWNYwyaP8HDnabhZk5LNi84VEdvv4Xd71B9ViW1YN38",
  "key21": "AXSbCGjgUjYNfCg18XmVabevfR9ZggxQ6xoKS58Gtsp24mC4nBJLYxRpkYeQU5T9yKAo4Vyx2kgys3s7zk6SKuL",
  "key22": "4qfQdPQNzW4eJSvhxM4NMiNq2MkyFDraE1qoTnrormsxmKRTqMHNHALdyuuHcjaMkbLw3SJJBep9Q2x9GFEEcf26",
  "key23": "4CARVzcCC19duGWR2JRTTZ5SzX99KkvPdbqBsCirsXG9wbVMGVc3y7k64B5Lj3f1UE3whmQmvwcWNAyEh3bLERt1",
  "key24": "5M42FfcZYSriAffdarJZBCnM9bkhFQYU2d856V9T5fySrmv9AKEcej9ArTywY9zeqkRPusTXRdP5Tn8NgFR1AwUe",
  "key25": "5sh9vGqcdLX41nh5DVEdksXiMEcZEP6sAt2Ki5xFqW2PFku4PmoPr5sTKN7pvVVDWdAtzjARtev3ns3bNdVZpRbg",
  "key26": "23pA51nDgWmf2YTgPka31cTWSw1ZT938Fq5F97VQw1EAARohw4nV6YewziTxbyT27PsvpgFD3YwE9xEoHHZXBzD3",
  "key27": "ejWx7woKapoNJqGz9PgyHhpW7esnLWHv6sR3U9ELtJz7Cq5zykLEannnzYDVZVp7JuAhTmJCFgL1zj2LFq1ygXd",
  "key28": "2DymVZZQyjNJ6qypXBauzBjkAZfTQPWW9ot4H4txopALDoZCFQQXgGBGcsF2qGQAS122CM4iGRXjSVC9EBKXoGXx",
  "key29": "5MvSZQbj4WoeuZAAhzWzDyPSZVWkrCDA9MB9chYASSnErYQJ4ZNwp99pY7fWyC4fS75K4skwNuMdydNw3o27q1LP",
  "key30": "4YtNNZ8xwRvJpiKuM8iriz26cQSuWUvb8wmZ9BHLWPgguQMtoKY6yDKvKHUDMQzuTswm5aoXJ85pFtS5wjn41yVX",
  "key31": "42WpfCgwKn9wAsEYzFvaHEvVLFAToW518enDcyz3bVC5mAE69RRd9EymqT1xhHfX8UA93tZFRDvSRekusj7bpmeo",
  "key32": "5GEiGemwFawo7G53XVM25Hm85nVatyEYV5AocVJgWmuSeq2LHfyA3aqviZp2pMDee5qdvYqs3izVneprFnfQmK86",
  "key33": "2a22yt3MpVkeKpn5UVM9rvMwLJXeNUzTuUPqQ7DyJECPvSAcVzqMNd5fNcEsqjmbT2ULyJCd798RexCPxnHb9eXg",
  "key34": "477PLxmq3GGhVMNwCHHwnRKkYzAzay3NF3M8zwcsxKtRonBZfTYxtRVzvWfsSe9f4P4oSrmB6zLx4q3rwBxX1vL5",
  "key35": "pGGapEBMZEsNuj8s9ka2A5kXmPZApHw2trSw5c4vW1izkZRP8yvEcfoN78e3meiJ48M4hqbTHGsz4Mj99RC9tDz",
  "key36": "3rWkEiMHdAQbEB2fmKXoApiY6NizscpY9nDQsYaajWD3jCxn2CC9DpzURHyhF66vhpFUQxdktGYScJZSPNjm17sg",
  "key37": "5uupvDevGLmo8pCY38UwSEehQEkAke8W8RQK6gt9xychD1f2cG7s9dWvSDLaQM86Yfoc3G8Kx5vbseM5Hg9mmgrt",
  "key38": "fPgr5qLi4oeJhKk8Jy3e8pRzGmfuZCNNYj9Ywxevbch6Q3BefeKkaxyKyQGapBJM36HZC1duftvEiR8kS6oKoK6",
  "key39": "3K5c1Xj5p5jC4Tg9imGfnD7pmmxjfxycMYZwbjeatAt3iaTPbE8dMypsJ7P7VcGHbMmMF47E8a6CVod24jpsLi6D",
  "key40": "4iHRQ5rHHHtgMmiq3LoFFADcrXKNnM5TMhD9FKH8yiSiWfuNoSWfN27jkyB3VwU6t5NWmKcKSuNE1kc5o84FV3Ly",
  "key41": "4QJSVCHsHMFkyLXw3TUGD462DwpJxmatWctkYre6U89t9NMaykEetV7wdQBUpuo9vr6xxc2VnjSTY8xwJv9E7Vtt",
  "key42": "5Ps6Tcs5cjWiCBTPGiXH6v8cDpmduBfmEJDAZRYbZzAXEKNq8vLjK2PoAXF2dpjVi7cGQnBLMeu59Cfd8hcgJyQX",
  "key43": "62oWj2w2K95G7sFq2xHsKrx4V4FD7hZ6cMQWUkEPwQxrsAbzTuMeFRHskyxfcpuPLGGtVvqXSjNKH51vDJPtrp7K",
  "key44": "LbT7SAVGqnASEwecp9EbGyZgsMxpVs8LZFhUBfmD6dMdPDNKwXhwnw2E9HiE5RkSV2RBCUVV3empJBdjFxgnyNG",
  "key45": "2UPsyAaF7NA5sfhktdiLExtPskarzkVW3Qonv8sHrWjoQKkyVCwnA2AHHy5gXVGdT8eHDYWWarvvr4S38RMhNEWH",
  "key46": "4acbJ2JtXA1ahWAPKr42yzwUvRGASk6mE7Zp33dLkKeKvo7Vqjdtd7G4ScDAUfiAdfdTZKprXRnj2uoQ5pE7x6EY",
  "key47": "tcMcd5kzz3Miaq4eM3Vi3a28RC5PngFpPQfYXgPADBTfPPFfAMqEtL51kGF3fKACky4UvV62u83byv9ewisHQCQ",
  "key48": "p554C6pLqo8WGuSL7eRtxbtSJQWsVanDFmu4rksy8a1wQPQ8DFqaH2qzR9kmHJFiFW2RTXqnjJFTmbMfsNhvY8D",
  "key49": "5n4b3szvo3Lr1cud2y8qNPTpMZ8ExTmFYzrTtAeE15VMRKdET4aozhDTEqrLnLwRinsn1fzRiA5stVvppVMxHKqK"
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
