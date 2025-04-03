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
    "27ScZgpZtVizz1StGppQznHPosVKF5xBRKJ8W478ZrGSpNe9hL4Vf5EGX4Vsk8V4F9hQR9XGZqheAqUpbBJeYk86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ukDHVMrQDB9xs9zzHHYBknG6V7D2j7ULBTE78rDfWGjuoqeAF8N37X8rmbhurgkTsdpwiqAvPXZHjpumDZmCVqC",
  "key1": "5YFH3jNgLk7bQ8FF8wgCsTaAME6ZyLLtonhDkZkm4GyXJCbGy915ps2xU6NCUSmGKpbiPWSnnRp37rgryTWZRucT",
  "key2": "3EAVoQtdu3s3Fbd1ZTKiuJRftCvVuk59Vz3mXArTcQ5aYENkv8AUQDf1xdgpmD2dtNMUa4ag7MdmuaLrHAYpHZvi",
  "key3": "RyreyM9T2sEGw9pTDsDHDCP5vD91sWsB8W7xmwuTdYvQdE4nL8eaqbsDcG1dcLs9EeWueJaW24A5exjLQCTrS9N",
  "key4": "3gdMbnPcV7WK1AxizDxcqRMLHnW5CPf86rpw1RqJt2dXdn4yEVBZSUYVcLnXj6eJfSrp9s6ePvNNS7ASQwwswkU1",
  "key5": "26b9iw4zqSzhAfrJu2AncnQd4PWubvK5fXfrUuada7aWW7MiQfrkv7KabFFr1maYmBewa7YMM8LBXy4Kv9Ao8i8R",
  "key6": "RvDG6PwgDwTUAdw71F9pMxAn1Kgt8Uyzwn25r9TnMj6WsMhXUepgvEqjgCwhf69ozkTFKRfqdLuXA2ZRy2LKecc",
  "key7": "2rq2cQUdUWRopDn3yX5LiN5mtcgwLFwvM7uSNTqMyH76S8MBcXv1ffhwwerRtCVRoJgYMpmwkYWAVz7s8dqwsPC7",
  "key8": "2EPZKbRZCFWNCsNvtZtNEj8AuwHGwueZ8FrwDJXFPa9mSxMiSqvLqq1mCEUMBXBPVxjV7hEgC8mJXzvWY2Tacvkm",
  "key9": "ZQcvucCBkCM1gUxfpZBHCQEAN7QChnyiWA9hX6ikop6uGQ7DnX75d3iBeTjsxY5vJ1n2SipMdUN7L9wgb91KghD",
  "key10": "5eHA4mMWnZU8RxZyReSAXEKzcKBLiGfUU1bWbYxA4FJrMc6JgGCHEPZ5LTN3GpHkGmHnPUXpM46JvaY18iaSMi5t",
  "key11": "52VyGESxRUDe3ErotjRSTpuznFKaZp3sTpDuBNdSypX3gUJdMfsf3vsWhnVedGPiNNVJepbDw8ikfhdQf2GiQK4m",
  "key12": "jmeS2zS78R88dySiALrUUzwfwEBRu94B6ZeT3u6gWAMZYdmgnRhsbNm1kXfX7soZCMdQFUFr6cT4FN3jsXJgXtS",
  "key13": "383gTsrps5NdzdUyNCYTZ9nsRbv5y3tGyx92QLdNv1W4TMQgrqBByECWf9vnfX1ijGRwCjQ15A7Zsc4Hv9mTToPx",
  "key14": "4visXMNbrzzJyZLGYHsEMTGCpZNjHdnWAW4Dm5Ncv2VS6QGNxp7Wwan6T1yGQDSU6KJMxgiLDVyFqPt3P688jQte",
  "key15": "5qQEHsT9BXzNswsp2CdsesTsFe6T1VUXd7RpBTaWs71MWCxPJuUrCmBsdNbujvuG4BRGHWnVUWgctYCpYeAjaDAY",
  "key16": "5q5WQUtAF6Cb6bSwav4DXgn5JyuRuEp8msKmydZcJiHw7uGPMg8zGixcjZNSwLbM1QFJdNRiNKbs3Qe6Ta1wAuGg",
  "key17": "2SqrtE1tPPgea4aassfFVbX1WE3sR86Uvf6HMbDQK33C5iTQwPhQQoP5Litc5urhuFGf6cBzLm8F9BStzYsBqAwd",
  "key18": "rA6fb1tb8nHHpCNGyZSHeKjYLz7PEpg9j9QQg4kZq8sJ8wz8niM4wwYHiHBTNPog7ncGeNE4eTFDju4pQu7edKs",
  "key19": "2yBs5fq83BVB7p31bXwV5k6hWTAzzLTU5Y6KDPNhcYVa6xZg3nj73JR1vLaAqK6EfgXT32sE9xB6GUMRW7QsNd13",
  "key20": "471yZRUb7uDvwzEEDHYfmKSRhwCAmyeEAi7NRQFUVfWKSuiC7goCXmV3JrQqv9fmaCJ4eGuAkMYgtR4r4mCWxjm5",
  "key21": "GnA2JxBDYR9KD9qtirk4q9up2W9dY9gT3frcqq9NrXvU6xyVL8PqHdiesqHZNVXLt9u9Xtr8fnoqsVHooWcZUpZ",
  "key22": "4Xrvon6CuK81eQr7YkMTwaiYirVjoTaV2NXLT43R75nootbf8d1TrX7SMRyu9ZxvcwFeLnY8P3B1FBY1MA1mzjrN",
  "key23": "5wcxJTkrCe3dJ3GqnnJfDcVePSshuZahwZF6QxcpxDBHoiyADnxgRMmhYHu7ALeRnsgTQh9Tqg4jmDz3fHCTd6Ft",
  "key24": "5iRQBQpMxV7hNjsFHNBF8xyviUFG6grttm8QiwsmGaPxio4QEcFWEXA2QpwheES2mpmYcubqwg48f74NmhwJEwCe",
  "key25": "3giJgvQfN3FttKX8FKT1Z2bnhie96WebXR9GEAJ1DUtPja3UjCU2Fqx2N4CbtgzBtzurM3LLCwHmLTFCQrSKQdVs",
  "key26": "3ndhWjJvDyBiziyaPEBQzH7xPsbqye6BCSSQN6q9tSJnS5RfWkTrEQL5CE372XL698BzR3GnK76WScfVhqsYNAQW",
  "key27": "2LmcNRzywDuM2NftW8ytLNFC1Gohamt9A9JPpRffcW5dSxpV58de7zQAGpUyZvr4UHfLCPT7DK1qyPHdF65174nY",
  "key28": "4wL2TucKkh9QktT6MQ57TihxtLxTyEuNvf4xbtSijzB24ViUpYDepKdsiEfJGafT2S8DP3JvVG7uPY2R5wyhSUTS",
  "key29": "1qK98jVqPdxXvDQRzeqfKaq8PMkS4SwCwp2uoNcpYGGM9LyTQVNNqjisbcuu11YLAByx64RPPVcC9ANMR3kdiHv",
  "key30": "3X6nNDMEp1APLmDYYVWaPan4KnL5p2H13ef62PDRfE64BcLCWh6Uy4r9MiVWRZQkjyshkvS3HC7a8VzywPZm9Lv7",
  "key31": "2RF2ZVxfKBcSGrYHCxNZVUYeVewtTPsDbuQDsvD76XHWAjvgdaFcPx949YDxTPAQgmqLwwh7EozT98tNegCSwJQ4",
  "key32": "oA79BrxHqYasxojKqc2Ms9NwWE5FLT8ybThnZdejx6e3zK8QYEusuf58NCERYE5TnHdNyY2XJWpwkds44GvAYak",
  "key33": "3tWywzwBU7YwHsAeX4wSs3xVyZBctmmoVQ2NrqovXh3hxE5iuEjTo7qt4Yo6fQYp69VzbqNBSAKvwQ5hPNHkXosZ",
  "key34": "5hg64EDjFn9rKBPvev1rhHwNMpYseSHwduxZACN1woQwKwt47Ui6sQ3edMAW1yW9TJ6QsyuLyN9TD7rYziy62Z3m",
  "key35": "3dusabRGi3w1iisXmJrhKeR9KSq2mFa2xqw5EnFikTf2tH69RYZ5ZMgjTGzqg4ypmK1517WTwHjzFtJy9eWn2qrX",
  "key36": "3t58F4oaHt3jQzKptx5HLjaivkmeuSDGHqKRDS8PR4mGdYd5oRVWxQEh9NaFVHPohV5d976xJeUE7MwqGCMeZabR",
  "key37": "2GnrxPNhY5JhHdxHT2SFkqMtxowVsDeEHj3s4yJvbfwpaKixQVTHp1RJMwJrawtUCFEmqT591XxBYfSyUfDtFfHL",
  "key38": "4kciuBdjnHh1se8B9LA6CWWdom5goo4CqM7UQLLHSfhTjvv3Hmrek7WeT99wVCLHsJXw7wPrmyUnJy85a7di7a75",
  "key39": "2keDCGBDhcyH4bhypwr6ZmURZ2TS1nyhwBDadoaMaaLbCS2eKxtgvJDMkRk7kXwxPNNZ1S5qWVRm7SwAaJgXCX7L",
  "key40": "3JvdCcSPoBNtpC5E7vN2NXNwgnFnoe9M3ga7n1qraXRmwmb2aRxpQMpDLpxwRJkgpxhzVZVirV29y19vkactPMt7",
  "key41": "5oZ1zu3oHzwXZaRH7bSU66eL3RoG4W7bZSUxho3zRsFeAZEbckYoC5LpPWQAUizbKfbeafZ8DybbFBuNmDF98F8t",
  "key42": "35fJab8QuCJUzmkyQvJcSDbqcC9qFTvEuUc6xyV4AMPVMnXee4UwYqSyDpS696csTNByQzjZ1x9NKwjtSt5dS54s",
  "key43": "4KUNqR3t3VqcxvpCELJyWR3dWm5CFYYR3V7me15hqD9XtZZQ1QCLtq9xeNGTWWGRExD4qqWDSoEwh6URiPDuiBsu",
  "key44": "mz8REJa5pZevtuCR6wcNRbMFwJVsX1Xm3dnzy1GBHuSoFx79ZumSamPbk4ckf7JqjrtuFHdvmR2MZuvqdRyDKyM",
  "key45": "55PsEhJpQLEvcWWMrsqRifBsv8T3pxuZfHXMf1G6NdLN66YL5FD75hbu2Ci1rRK6yzMYsmc5hqyMNAAJm4kefxno",
  "key46": "ZsqRYAKiSGngo8JeazKTqj2mB98iNmN6K32UWbcfZ7aaqjrshu6Pb9i77RXsF6UEDgRHJdd2Eivc6gipEeiR4JQ"
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
