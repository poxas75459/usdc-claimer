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
    "67fUXqqHhjUAfP3CUeDx1ZdWdyUQ2HfMrheVKAWf7kDJ6gNsR8jyWGbfafX6f5aZXrWENP4mp3HTCJPuVoKxQ3ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ZbvJKqv4AMunmnkUsxXaJnTBf8XEjktSebCxBqqcRi2vAyLQQ23CgN6FvdqdFEWDFegzNyHud2YzL2JNgyTbQ4",
  "key1": "39SsRGxWP6WMt2GE1coUj4fxtpVeYJJmcN1RtqisVDbBPCzNx4Y6Zoe8UbHzizsMh6hjZhkSa4fSQ1Ty9v6G9nHv",
  "key2": "aD3FDykDTj8QNwEQxTemQcPSeXVtcGH7fkK2mVYaFBdpntBSNB3Lm9Bt4VohmsW1Y5VnetsanA6eCFc3jyVwwXt",
  "key3": "3w7iRrWBSd971aGv1Ek5YocetSWPCR6DQDNb3KgfwZYkuPaR4EPANfAoaDdNPc5bN9LD41LzExGxiY11X6awR6Rd",
  "key4": "52w3wn9yDWTsxaVyy32HD6c4Ff8G2m5xMad8jT7GMeucEiufUvxApEmcFArmemqWjUx6jWjXhmGfYT4p3yWQYrsk",
  "key5": "4Sjcp1w78UWcDoxKr1B4ywpMLiCq2QQJ8wCtmXQSdt1hgLH6hX5GMTemznzKHH3GPzd1okUUMXbKCsXMJV76BxdP",
  "key6": "25M8nJzqDfBQT5bVB5db8rfxN1eSZB7qkqorgkkCsgXokSf4AePNiH6HH5ghGPypSYYhAuBDVrsS1jaXUCw4mym3",
  "key7": "2HNPUaiwiiQ4CF1X6xdsMBgAURACbpVhnafJqYzekQt7oSBptMykcc1r7Tg5PM39GjprTdRcu3qFGLtsGawg3Maf",
  "key8": "7XCu2yWfR53PurdB154y76xLMe4akEP29qjbkmTSmSDgG45gjAjCimPtENqam1nfgDDH6TUDLGwcyFhrg5sf5fk",
  "key9": "5FGpo5nxpFXVwxxfKa7A4oXdVFCCJDrcLT1DDzkYR67VyonEdERXwfjJvW7w7VB1wcPc5cCBhky2LbA7XzPQZgin",
  "key10": "38uVkKV94HERVxgBN9wtXb2Rq5g7xMtxfh62rZXmQd378pXXvqJMaEgTBANgpV4bqUy1MB9cbjq4PcbydfHefcWc",
  "key11": "2pWwfFwkBczfbZLB5YSd5AnZj5ZE4edP95S5dX8RRwmTahhW9PTbzgjfbP7HayMsYhKWhPbyNEfnbKNH26A6aVod",
  "key12": "2jTdKUoXgPu87ssbB3HPbc4QhHvsqoeyRdWFXyoWQGqG821sh5BwG5d97LXrEfZtY4o5AU9RZreLPmSzKW4cfrUt",
  "key13": "t3N2FuBiXhcXibogaEJc7z5K1ufvrfLqoFunfYuSay8FZNxZ5sGKQaEhcfPXH6Zat1fU8P5q6CyKFJcQKc7eTC7",
  "key14": "MtvAunXPcHCVmcHQ1yuwEoJe9Mf4YUpXLpf3L5dGxRQPxdkQ7ZzeRBercQpTHXNXYUBekNYodp3gLA8WsMqHwQq",
  "key15": "55uDVjD4vCXfaCdGhDKjoxPJ2Bq7TqNd2at1PuzzYoArwNTp5kGGdSswcjomP7DF3auWvPznB3ZC83zD7YrEPwJz",
  "key16": "2bgCifQAMozFFvASHqU1XTcYjMNVeJKaobzz6YpyScFLrRDcRk9xsvkSANmNp82bDFB2Hrn5k3qnWFm34gaa9w6o",
  "key17": "3pyv37RSarpjSZesZJQAYh3i2T36T3r2SdmuDC9L7Kv4UR7ZLcjfdkVKnEipF9WxjZWN1GWVmtyUviv3WWsbu8p8",
  "key18": "3Sz4uhFsWNQPXj6BpyZorTdKnA6MgdmJMdn2pZN1tX7tPs7f7hKj8oRLA2B7PQ8TPgDKVcp8fNu2y63mfKLmVkts",
  "key19": "4WfHRwZt2jPVJbSJrp6qwwVGrHbsZerYEK1mKeZLu4DcLXtsnshZFtRd6VYhrn4yt3h1UxrHuxRnqrdJ9SRPkU3p",
  "key20": "2yGE1V3SCvdpTKYf4tmtXyJxR7a1cdDU5W9PSfmtZqXovY4WRdZUaTQVhvcxm4YGxA1rMAqwkKCRYAirsUpmsAGC",
  "key21": "QXuWJmpadXaXhGJ1gDBn8auhnJ9yBwBgV1VaxvJjB2V8GA3j7r5JAziYtXNc13TP4kk8LveJqqM5VrKe1Un37qn",
  "key22": "51msCurQmgVdtpKAwbgt9TPKnaJ4XWRbZSw9PYMb7CyVE1FTA3d1HQqCiAHUzuQdXkuU5LrrZwGT4K1kRVLK5RJq",
  "key23": "3JkXAGhgXbfDbbqZqeEM9K2M6RvDcVDzAXMJaq9wptJSFGghvcCfbWBMUoag33iRZU498uYWUCeRxMbRQZZAJyhk",
  "key24": "4hBnnMCdK7CuyEbdz4KoRcF7KDKwKE3GZhuaoXqDFubDr7pAQqH7T4sqzuqPpzgH9fY8zkSsN1FmPEttuybsRL9o",
  "key25": "5sE2XdXFNmoQEudH8jBMS5UnekJBP6Pc3S6pRhX2aRvQ7M32SHQZESeqnD6rf4rXw1aqsnkMRuKCizgwdNtoRSk7",
  "key26": "5cPtLfZrSiZv9mnxcoZg6yjYHhNzvxBWNKJY2eM3aiqHymhVcjdYyXJJoFZbC4fj4eFAdNv87RLovfcQs3dSQqka",
  "key27": "3pKskryMJpVvbpyMuqsfVZzpi3tbBGZwBs5GvFhywhtcnb871uQNcuzwBMB5J5TRfcYPNG9uATrTqj9NV3Ffrp91",
  "key28": "4DPYkN7ayTvzpER315cdm9bCNPMZdy58iyj6ucBjLww331cnpeGHivapSFQ5X6QaJBB4m6okhWrfNQb2PspnYLCb",
  "key29": "4mXS9jvqmhxmTgJ26cW66EwFo8Novkk28LkgCx2zg9zE2qsHuAbmcj2stH6RWSj3wJTnZit7DG1D5Q3CmASdxpHM",
  "key30": "2YLboVCCPqp1XEPYcStBmJxF5eMTChKruedc5dsXzZNCX21iiL6L5SSjsLYv6Yos4qVVD1BCJ11ZV21s5knWxjwg",
  "key31": "5ZRy2bCVDNGTSvm29QhC9REzBs2soY81HUExJAexdSkKt8magvmmQDx4h2vGve645VbhMVPxAKhosDd9Kdd5kca8",
  "key32": "2n58Qm5qvzx1nApKznqFxDaS7kQkL2vDQpKDmFzHgiys54SFYrGzkrokALRh7znkv8bBXYr8LW5pkNPi2wx3Reb",
  "key33": "3Jw9tUTzjaQ6xSNRJAHoGnTcke6yZNRiD4bGq6qdS1gLkX7uSrpyAitjTjkW5wfnxWHVVFcT1oco6fxHhuHMyDGF",
  "key34": "55iN5pDKpocc8AaNzzSzjoSVu3XVRKWP9KmpEQvnQohCor2RmGA5QDHWE2uRtZSVMCAmKXhFjTmD52jTdFeNNz8c",
  "key35": "3WakyWQhtd49WGVbYH5boPE4uKJnAzDA1cuTQa6P1kpCXzsVFP1xwbNSTuHQ89LU4F6AM6DmygRZRu5GSCstkxq3",
  "key36": "4CEBoJGCy32SEbXaBmbFoL6WkRu9T2WoFoK8Vbn2BPkqiK1tBwjLGmVtrUzbzMe18XGWTYWfrUb8B5dpFd4TKYdE",
  "key37": "W4V4SD1U2hWYyonJ8NPcLwsYkYa1DL2NMniH7y5NLyrbvMzYDfbEXNQ1P4KvLjJAwdfVTRfTtnp9qZz4u5qvPfv",
  "key38": "3e8gmFMRPyLcMzzcHNnzcwYHR5vrQpHYtPbL3ycKGftB9kS1Kjuuds9HYQE8SDPUxVyJvyAwhqPWQn51D9q4QYB8",
  "key39": "2eAeGPybqQArJ4dbySFaAEY516pDoqsGmE3xrJUAB4MhiTiMnTdwiHbhWYPh99CVByksYFif9e8ZorCqeAJ34WUJ",
  "key40": "433xukRsTgGLnUumdxAq392eYZhnhH2s6kSS2zS2tZhXXDztk2EqPzoEEo2mC4V4LdCxkDwos3Dm1zFY9CcsdzNb",
  "key41": "3KRBxR6zFEVWLH7npi9SraFkWnRmfU5tyRzCw6C4thFsUW5jx8dQGFvGb5h29x7ShdeNhcxdD9Mi6BEsuSVwnerg",
  "key42": "21va6EXXRvAeUzjkBkkuox62NusF6TyM3sgM23YE9CVQhxbKwT79yNsaNF6cwonroQXubKkLZwFaiEFhVVwmZYmj",
  "key43": "3PnZdYKUUuKARvH4qpF6csWT37ssW5jk8pxDqPZ9EthbtbeRQqrxgL7WGYBHoJxdHqifCJ9StgcRZBnLkBjg3mwZ",
  "key44": "4uv61Cv6uDAPhsgHmBAtxm58VfoVJEvdMbcnbxe7BQzKsL5CPGAsZ9adshNFnopKoMD8KMcGQumeUJnULyMnGPDz"
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
