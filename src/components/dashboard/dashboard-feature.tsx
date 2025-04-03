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
    "dBJUjvfrcozdw2bkrN67PVHpDJBbxhAQUUP7GVf8FZDSsHLj8m6fq4dJ4DMMcyRm4LTLVmUdgxkHusncPHiYTAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QyChmaD92ZZi5n449N37jcQY6Q6YrB39inRTMVkonvTWn1tW1ZHVPeGXnSiYMorkSvx4qL9xBvUJGFLuyLdVoaj",
  "key1": "4oogawYmoyz63nPuJMTvxHJNFxXzfCdXVefg35aUR4Np9pM8ocj52LsjnBPzFEyL8zx6NBQppmLeAXXUzKLVvv8t",
  "key2": "52aHPYiNmAq4xZJUiDsCgbT5JYk7yA4krjFtEd5WVur7vNMoZLMG9EiKpWUr6M3Mw6h9m2b8vk8UBXCzoVJNjcvG",
  "key3": "CKvG5u2D2U49JaHS5jLEs26zT3DrfqA8rEJZh9qZQnrvgTc9opNdgQDmbRcpQ9ijistieK1rUmeqWvQbLGmCDWU",
  "key4": "5jmPhGosSSdBCVATPc1g8Np81VH5UDnUkpVBKZn9eFwK46GeiXayyFZTTxeoLkVYwC7PaHs3Q7dw1qMjxortwKgT",
  "key5": "3bfp2KgJ5LXduH3a9fvv8ytcYDEyfsiuLYGuQ3TD1twc4TzndGXSDWdyBV23TaWNqGLigYp9QWgwNiJFnfR9FMBo",
  "key6": "58Fdoi4vxHHLshyEnSj5DouY44iN1PAG6zEDicwo2NYk3fRmVF3CqrfJNJ4xZgy5zsuVK1MTx5ufnieL4QNo7cYV",
  "key7": "2DW12N5yixTskgUhoXjPyCsBQFDqCoBeh9ikN8Tdvvhwrh7EGfT5cUZg1czjrKgkNzRozoxoVxGo1atX7doef3Y",
  "key8": "2LznGoBCwYWZ6xBMxJqqxGBXGrRto19qtKrcz3u15RFqjrfMhpNUHHvfWzAteL7zH9Ga41vrpjE93YmrEfs38SFA",
  "key9": "4iwXMiqo9AVf8M59YmN7cQDueuZwHouc2R3hbNyr6PTTqsXCb4hMYTpSZWCpiXhsRBH6T1ZVFCt7Ma6eeG1ZCCA2",
  "key10": "fLWFcDPC3aVdmhbufXAJdwBSjoyAgNwVknRdFNnrdQwouEZtC95UQrWfNNqcoNGZxWcMma2Dhqwog9AU4wAWRMU",
  "key11": "A22UvNHB4McNjuP9Np2wyaBkKcKmj6BwK2i82jJTK8rGy99pbm8boQrL5W6Gr4VJnM69u9JVs3tWZH8JwKGpij4",
  "key12": "5mztSt8nTT3C6q1vkAUdW85WDZNEHHaGGYHGPUh6KaqMhcGeJNFgpTVW8nGGhgvvS7N7ememp3GrncdDHFbLNeYt",
  "key13": "4AKCv2Wu7AyCtsESgAZsJj4u2MiaXp1VWeDH6QFvfYFJg34iMjaaPbuGGw4bSPJVxAehJK9dkjVtfxNucnc3dmdK",
  "key14": "5iqWHHUXkt8PFVpAciGKJmk6S5unH11FPrikrc1aHkZPf8X9iqaCzKtfXJduLxuFntpJn1MKJbZhvPP9wMF6HKK2",
  "key15": "3bMnFQNNYNB9GcD3MeVCABTsvUC3Hta4fPxKWTA4PdcUdjAf7AWHnpi6JmbG8LFdPq5saA6BvrstqsN2A9Gx4Nw9",
  "key16": "BsLkSiFvbyit8ABHTK6KmYHJ8yZV7rEsKK8DzywZSqNvaYvKMnS1nYsbK6CLmmE27bKTb5suCQ2CWdiXx9ZEag6",
  "key17": "TK8XWuW716sBRZcMEfbHoaH3CbZDV1CLqMFwHmX2SEyXTqd5xQpCXipNfnh2EFySkfhxDfe3iKGCF2VnVQVfpAG",
  "key18": "399jzY7cawzFW7j3XMYJRf24TiWNAFTJKNWHUXhF2YkhpTFNwRWoKrwZ8EVtNjcQg1eDwJWd71NvmZHU3kwhmY2p",
  "key19": "2VnnQGhC52HQ2htXzyzv5qHQQ6EMjUinq2aV2cG9yYffmNXnNnLyurQ5mFWSt1FzVEsErZEbPq8bTi4u68dBfmwg",
  "key20": "3KFMsYrqnck4AyTq2CF3FUEviUQtESSR9q9xBdxYuigJMRLBLo3pXVCy3D3d8pmtvbfd2CSswzrQ6Kpv3KKEbo18",
  "key21": "3Gq3qk9ApCTmsgj2d6ez7d5xjdZQoLLZunR57j1aH3whZUxuYZxRG59dY5Dp5yd1UvZdFRuVRjLRaq134Znvh34c",
  "key22": "2Lw4bRxsSiD8GN41AViMJdEnHmj9RcVsRaKbX3Ea52JrDQ7EYNmvYuVCbZTawNJ6C6t4JzAU8VvaCm4hWK5MZQpq",
  "key23": "3hTKSuSR4oB3wruAuaQp4X9Qq6Bc8Kd9vjx2b3xqPsJp3FXwJ1KhrDnFpoLazo78evucyoV2Q1CVfGqvsxs5Ms9P",
  "key24": "66mWVPHdQMrq9RvjqkSVfuARTneRzi2fLmkwbwH1wCXW5PU1ULrvtuEpvLttYBhN3ibHseXUW5ae1yBndsBydHcn",
  "key25": "4Ko55xD5bqyw8bJjAut1Qa62c1sC1ZKVjihGu8GEyHvotpD8gj1nkYy5GL2aeFH7gSMJQxAbsjGxBHdiJKHakm3J",
  "key26": "21aGbq87bRbyT6pKyBS3eUv1yVE7DkCThiMa4UrZghfue7UMgqxF3s19q1d8j1Lbv6J2Mt2iMTLyBCrZ6UTj6inK",
  "key27": "3dYAVQ9qPKMJhKZMDrw26UZFBbqonVGfnDYLeuxLbdUbW4D3zJGtyVMitQ2FHzn9oBXdAaDpibAB14bw2LPaDHdP",
  "key28": "QXB5S8rZysaDXWjh4T7A1Zgf3S3opg7ioScpsDxLUhJXGhuCybUiBBureJt8REJxiCN8wX6mqsAo2u9fFkeZZNR",
  "key29": "5XhHS6i57PiLoih1VpZt6DmHk78EaVCHgD5puaM3xChTfKMN2eRd4j16Ugz7QVkaS9vqFWmf6YqDw1FBLgZbuogA",
  "key30": "355KCAc5CXJikJk6aeuMfjAzH15mPVCRbPbTpcpioq6UCPTxFwZMVWqqE5mN4W2BGP2HPvc6osbgRsCBPKuPdVdn",
  "key31": "KcB7MVZspDUdUwNfvrbXtoh2fL9PJmV7R3z4vjPHzVRcjXD2H54UczCjjw8PafKcjc3u4LQnKJsp2gJ6Q3JSfGx",
  "key32": "3nK5trNQ1JK2qviUpdHUMms9Lr6fpsyo4m9mr6BnioWZwYg3tCxu3VDgkTC4vNf6LLsY8Za6MKC5nH1auzrCqAQg",
  "key33": "2ofArgN2eWNma8BVs5SAqJjg8RDBnZ9yr8A1ZUzhkd4xLDae25eWpMTHmAtV4RkbThuEsyM3hg2HGnUNMhoiVBPi",
  "key34": "9PFGJd2DLQirCa7sTGZDX9EQggTYLMsLwAFe8sHL6uC6f4LnfZyYmZWDgDpBWXEiYiU9txZdbN9vXTB8Qfd8SL8",
  "key35": "4SLBmqQ1wW8WMMmWaN33iVh1RYgeZRij4WYezEY6epFt3TPJC5NuvrMCu5k1RUvN6RJhVWp4rk2X3Jqdyj1rnLhX",
  "key36": "3xDdtPNh9bYfcxtKg1mXBxKjeM5DZ6d7GgzmAEFN161XdZFt7UBpnNUEhuHgLEE9cE97kwwLj6GL1nYV6z8mYLjz",
  "key37": "3M1ZZmcFx47L2VWrxAZaLGxfkVd6adS283GRWNix8SVUB3qbbjUHwY8bNZ6afz4Pyka7KrsuH44NW93LGLbng1uL",
  "key38": "3DPp6qY67bQCMHWxnGiwUsME45RxmRJ8ZrDcaGmqsEdXa53ZXp5hCxvB2CmtTPkMU54rtKEaGsijRMCAUmkRYU2P",
  "key39": "CTTsks3jGqPqptmqyYQj4hjKjbwzMrUCSTKTRpBbDquR9AsmjFovW1yKg3nJ1SVATJDBd9oMzhmZ6Z263wHcNdu",
  "key40": "5Je17KABv6i935n15dnJPzP1cvb6CYC18DAUgZa9WuoxNgvr87Yk48rkVf7zLA1wgD6aRxj2aPfC28gq7fzYwWMD",
  "key41": "2fa7GZdufX4NuBrscz1ke1tRJ2fYzGSzAYqjtGCwMpufibxXtCcfaPnvMfvLUr2c7Snni9fuwx2ZHYTGQqSeviFD",
  "key42": "5ov5vTHYd9k5CZ5wXBJ658jMDxh5nKrnDNF4zUNhLm91KP72sgE3F8Sr6fj7fVB1x1n8TJzVcP4U8LhiJbC7vS3q",
  "key43": "3JBXSeXwKeVM9fjnv8ajyNUmtBHir9t83vbRpgphHiGTcuBJeC69jn4uuHUbtxXvvSVSHQbD13ETQLYc2zGzy4vc",
  "key44": "5P9RDSuseZpTVdERKs8DeeS6Vmsf3HNgkQJ1bCZukjz3ZiE1S256nUt9MWbM2ZbF2yeH2AJ29JgA2mZvTy5frqWv",
  "key45": "5EWJaYrXuQ4AcKR3sFXvRrGu359VbS2CtYPEXJvmnhF8UM3VG2E7FEcYJ3Txv3hQbCyLyALa4MFfGqi1ynmY4CrU",
  "key46": "469gbJuiwcAnuCCpBd2smch4C8yLbwAAujhUYcVrh9ErYRJPpp3dD83JGc9L3gjj3A6gcEWRvTCTMdegkAV8dpkF",
  "key47": "jXvZ5ay9NbqgvgpLWRvBhrcH8uqhLLTGQBJnAEmDstCiaKicFPciJTEtUiUqsxhV9KRP7Jirr94K24vGvGh4RaB",
  "key48": "2EvQb58jNbZF4Buh6P1ewRvY2MJomUcW4DHjy7ZwY8R9yh1tqowDynbR7n5eW7WmzemuvoemV9RpjXBSXMfaqC64",
  "key49": "kngkWnwMF4PhqfEcy2QYwDDwgVV9cP9bXLaN6yX1Ri3KraHXwtviavdYYcrMejX3tTjZSQMZWXjfSS3hxhnrpw6"
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
