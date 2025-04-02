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
    "4SUhmia6TaRvo2vwsX3AhFWnjoMk2zpqLud2q9N4RxtciuZ3WHZ2R4v9momLDyTMgniBeYBNeqtcUyFti9GRPXs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49qziLgMvnVJiVvnpeawD7qXMCEQ4YUEEP4YGt7sNCNDLYZqytfh7U1nb9GCqS5p6DByB9EMUYETWXvT7PeAMuQS",
  "key1": "KKfNJnEpCjVMCxZquuhWN5AT57hRVToEGMvFqkHkoKAUUp3UosUWukGuse1H44U7yuywRUNE4RtiSpfyFixHFHN",
  "key2": "3wo34iSwicBieHEoNE1d28MYQPgJHEF8abKM9b56aJj34a2Kuv9JmT38pcwveP5CDNq16ycnGW9jUGsF6CL42DLp",
  "key3": "2FkG5mRQKpAGf7oFbYud5barJrz9vS4X8X9wLHhgyFk8GTiys8pvrXatDVvfj56tLG5Saazg6cJfv9dYFQ2DXPVk",
  "key4": "3AFbpi7CAio4ZpxpJFuC6iC84NqNYiy83dFajFVjjiAToNiQE6ZKAPBnF8cW7yZkSdkNzXsbpLAN3eTEe2vYjooy",
  "key5": "3Lh9GmF63TuSNNBwNUWa2idKHePxsQtKb8FgDSpsJtByAZofDYtFr8URSgCCXWJTGpwd16ndNDZuVXYCZkLD92x4",
  "key6": "41S96GLku6XoHeKbiMmchpjhmE4ynENGkCSzyCovaQiApvERUt1LCDWMjYCuV6hvEkzEbeEYkXTxnUQMMSEbmBkK",
  "key7": "2X1dGKg4qJk2DAQr44JjXYcXFwx85xEP4HcXvf73Ryd1yN7mHRoPiDWHoeSkNGuEoiQgGe5kY2DimKZwaTXXgEFQ",
  "key8": "5buwKPWu14thjjE4t9bTVssvE6R99y6eZuYrF5Mm5PKbrWiPfAojMGvEYbzC197VSNLyCywYynR7TckY5P84eqF7",
  "key9": "TmCpjc5Xm4kXg9UWS6N39S3s4Pt9fVXds8h8BKyhvPtKLfxGDnVNrCJYGKH5jBKNSeNpCJPiGtTDM1CoTsxW7Hq",
  "key10": "45EjePEqWr5VQ8aYP6Cap4r2t1nFz9QZoBuv4qSZPkF4iqLjhZdTB2ydkeKk85FyWnjgGGgqfac1o98VrXUrp849",
  "key11": "5bb4qXiU5KDXEpvDuh27GFL1AR7XCDDxEpWAFo1VEVBnDWLrqCTm6MoXXj9WcSQB2hBahhWgQzPp1C8DzD7AhgMq",
  "key12": "Fv1rdfGXmLpSHKNLpq61nWcvXuUFJn9SK4hQa9bN2a7gcKS1VPrDcntKdh3ayqQho5fCyMTewqnVSRTX53x6QJM",
  "key13": "6X3ZcXtRstsVnAYDxna5UmPGXFmDkg6Ca7RJnK9EJQZQ6XaSbdXHPW32poWpaCfNwuzyCWgQqKiYjPkd4ELWkDa",
  "key14": "3ZoaV3JYST8KNGFb4eiGhTGsZwHrPJRQTSTmMQhtAKuKHTLCcdzet8cnJemsUJhLF8Et16Ms95xKZuqAY5x2Gcwj",
  "key15": "4wRghvPBHXHnfr8phv8UZYFze1nnBaCPV6WrW1upPUx1hf6T8y8tWGiCFJrDD8b6cjnQDw3Tg7fsQ635PyufPm7k",
  "key16": "3hg5XMwpKrVht3qBbJR3QYiqY3p8vzBHhxrFseoDMDzeVPVLAZyZHRJ82xu4E3KNUge2pB5jbAUUzcz8dctXVw2D",
  "key17": "466roiqo2UVGMuMUDeRccBAMdepb1A9EA3hNicPBgWqjeGfQKr9We6uyW4on3AukEcSWEiJExEt7RtMyS7ZbJ7Fn",
  "key18": "5fDudc6FGz7guYXBfKqvTVugLkZvs2sGDcQqqvDSnSjrMdiVSa4KAASMTwkJ6ZBpU9gdCJRqDavy72njo16nwFT5",
  "key19": "22GahB7vN47Mr3TMUFWHn7a9dzsMbCScHJAGNm3cRaKEQyYFDucCW6jdVvmSgyQDiGvfDNxzri5sJn94MwcMwxQ6",
  "key20": "2biZHHALgoB8r8aAfh4HtvFf5S9X3JfRyccRkWQgDGcDSsFdT4sJtBj8X2XXtYvBZ5E8b7jk8G2T5MnySpJEkkkq",
  "key21": "3LK1JtxmzyZ5qnv1tbiX7Y24QoPQ2LgzS6zJ7GKkqzhfr2MvhscceZ6J87cQhQpAQyDuSxTypjPmZCmQfDf8kLEN",
  "key22": "8kjPojxDPVkBSFKW3kKJVgdqaXdBAo3jXkuAghbFAjS99VPPaADCEt8tEdTK8HXqeGQggZ8gypQFis4kD2HtsWC",
  "key23": "2S93uEQUBuu31SUpUFpx42TC94hQMy3fcGcNAq6ianjygYCpSSLK3roUbgP5ScfewEDK96CdM4BFLjXRL2zmcrEz",
  "key24": "2GHJGvN7ZGig4D9xkJJcV9kDo31QwticbcQh3R7hFE8RxH1BxuyKeQp5fto3RDpkoLeU1xTYv8U4rfXJ1B8deyxS",
  "key25": "35rbBupNgZ72vM83LPYWJMLGSwDbbuy8UvpJLCW6aQUDsMn42E197m3ZYTq92tQdpdiHWeK5ufx9Wuh151jx5AJG",
  "key26": "2wn52Jky6ojUiBSbupFjzCBXjNceSr4KUezadcCBfXKHKUhTG6uCNGUFXCzHfiar7XJ2Yq1TJU5Td6n7q9KXezv8",
  "key27": "4cTiNiiYktuSCgR4eNtjCJEhSb9iptHtgfnQU3jw9UdSJ5YX91pmQfghAjgoFHwzhyPaJ4RoCVxCm4PaPhFER6VL",
  "key28": "5DcwZzFZJfp72kDEWEVqiS7ap5UbUECuSfjzwCBf7LBokvLzpcKTittZpWZWoLk5TvqiXTfC5YKVxLmqccnRmfAF",
  "key29": "iQMtStWPixmS7ZFicBWM5Bco8LkX4zN7PoXe1MXYs2ZZ1y5JFMaXry6gze3npusCT8x9gyvRiKUFiscaCQXKPpy",
  "key30": "N8S9vdnH4inA6JJ3Aq7UNiZ8wVzp3JhnihAr9UCcCkY6oyLx3zWW3y8CCVnXML3i65ULgKTAJCfr9S986WkAeeC",
  "key31": "3Zh1HZVbTe32qQuTK81fdqc9rdGmhmhR6ojcUD9QcVfaHKe7Cp1BZ18NNPuGp6WrtucXR5jk9nz7nnih9jkb4Edh",
  "key32": "5QXAi1NQJAHXiaTfkQbF6dz7oVKTnAQxETqq6c6Toe7z6ZRsQW6TKY5D67fYow3hZ2wnscypdMtQqJktHG2HgaZs",
  "key33": "f21WTupE1Y6ENYRuXLFxjQbjL3c7FTkuk3A9297CALdCiWsCvisnMZ4ncpPQdrcWc9eaMGNPoM1hvjkhcryQxvb",
  "key34": "5a5WLvXUVo6qfFbo8ka7LPh74Roy1fzkdAUoD6Vg7TGeZzXe1yoDwQmtW48xF6Qp8uXLbkHmy4ZQSQ2X9jy9ukPE",
  "key35": "26aZiZVv3TPPLwBmn4Uoxt9xRUnQ7S4kLd3ZujApjJrj8KmQCh8xsoieHX4ZtMVrVuv5R3n9m8akknARXxdqS7na",
  "key36": "3D9DyHg4TvHGZb3wswbKLXcG5yX1pbxXPEyTbe5DKCbCYkKeAU7ARByRQWBH7iukrRZgjpXvhGinqtyQC6h8QJzR",
  "key37": "553KpSV1o4K2SHsN2ipi4N5AYAapGUTGgvgjfYgMvTJZnbKFjdEvn7eHXR5mua5LBU6UQ2TmFzVhCuVGG4MKh9AM",
  "key38": "5GdyTPCXJvKoFT4k3KthtFx8s6maoXDKHpadZXvy5LKKmcm83d2XDpy63BqL9MHi93RNqZgXHr5TppuvecHfQytb",
  "key39": "3Y4c1xA4gYYjNHbCutJWJjspuA4BsLz6k4MsJTeQ97yW4Ve9JK78AzRYJG6UUhBEZtozhQM8CydMxAtGJgbhBUMJ",
  "key40": "664tP6NWcTLtXrKo9V31Ksfx8J4rF2rs8GHRcrTgbm3zc5B1oddNeVK7v6BRpNtEXTJo4ja9iX64Ybk6eY2KzLWu",
  "key41": "3QaVs6qoHQVQQSwmN2cQzWteyBsx1aP6St8x94vheFCyUCcXTC9uufLszWBn5G6FmruQpoSH1rGt6oJg7iPMSXKQ",
  "key42": "5LKLwQfdbu4nJSRgQXr8BuDxWRzrmvu8TvKFJeVBYhT6V4S2TCA9XhVvw9nfVbrWrNXHk8SkYw1DixNZhG2zbMyy",
  "key43": "2Vu5gL8sXGbfgtzmm7YXTwTgAyCRWX7c7i4aS3EEgyt155f3YdAwzGWh5rGN1H9SRUqgSoz3xwhY2MXWvUcVYawQ",
  "key44": "WDWpfUWro51YLuNSPzuR7V3FLDh6cxWgLEiu2cdievRhVtMYpgGtZob8SHY4nVTusccVwQZ89E1oCBAN8Mnw3mZ",
  "key45": "537gDk1P9M6XS1WSdkoPSaex9RvAL9tp2g7HtCdSsB6aKZT8vef1nzL37vLtXCgXVXBsqzRmfVYum7qjcR6JfuEm",
  "key46": "mR3UHfzmGWWWe8tB9Gfrjw37Yqhg6FW3WYbKewXuXGLuUsnEzuLcZ5EGmRUQgjisgEMELUDo1keGh1dTPDypcku"
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
