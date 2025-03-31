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
    "2i8gfXfSdJLiP4Kum4fhbtg45QygGgmFKNZL12yYyxawCLJJ8dpBySXBhucjF59TW6UNFixhbVHb3z3PSYTSnaNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wMHcxbWQSeNpPi8qEkQcKejv9AAkcs5tofgYuqtWxnP2zFwj8fLhYm1KEDp4RhAzY1h3CxKNTmwDocnW9tTpaLa",
  "key1": "GZjk8Ug3WnVyeLHnFANknPpXLkfHGHh6sgBRwEm6xXKPQG6yEvKYv7YXyrEkF1PVBDN8pAvja31GcCrVqfCTmcd",
  "key2": "5y6P7SEufupTQnqcjemXC2gDGWnjwySaHR3y7Wmt5ddntrVatWoRKHGaWGFFrqqmjEAGPNCyP82p6CHaNUsgy2Ck",
  "key3": "2HXf3ZMK3LjvyiQyEok6hLWKYbLPMMt3ypkkityQxeavwXDHwE6RGTNwTWcAoK1EDmYB6qmtNYsK66QS9fdwXtef",
  "key4": "2uU4QnAmEyVQaqcPW67VdMvG7yZojcRBMpD8EepyE3MrA11qCNYGz7VMw84i8hoa1oKYd2J7iFRPTfTyDQg6ZLYv",
  "key5": "HxoHCCEGuYPhnG9D92jBv9pXrAd5p7wDvBSJZKoLKCMbqzPyyDmWJ215ju2EDLwkcvWuZzJQ5z2j9A37aywPD5i",
  "key6": "4WFSfSH4TpBuB1w4HKYb2QBihQrWPnPa8geZZCUBsY6EQJrjhhDrKEDB1zUAz2Nx8qzZmaHKLx396jSnX6VZbSEg",
  "key7": "gQD1Khj5JKWMWok59utSeJjr6yzSVxQfJdYSBnXw7nMMW9bH22ZQ9xPygMahRFP1RQeLbdj9e1hzAi7frnGD9qN",
  "key8": "28yV5chYFuG7cup2Eke7Nwanx4qfZceVuRrRNePM4QL4L4Hi2y9iXn6T28ra8VUXpHDZvUim4pmESug4UhbswEpZ",
  "key9": "5cWVDWeQA8dyqibyeP2VEVmi7fH4u9Q2WJWQuNZNiSxGRZr6enyEjH7BrEwrdQ3beZ9VCZtBdZ1K8Kc22zwcVUTn",
  "key10": "3w6SFHY1uqje1QhYGQkrScCJ3wDg6uNFKCtnfRsKeWCWkuom5BCYHnH7v9jJ5A27WX5AccANbbA8iiR2aYGcBVMo",
  "key11": "5EcT3yaXKeS8xfSjxv7PRiogrHECgSsRWiG5UCoezbTJCXHVxYz7Bd222t1nvTDdgLLht4WfT4FB7Q9eZyKtCQmG",
  "key12": "4R22sUYFiA2CZkWjp5aFRYXxYuC7iH3F4et3Fxsseu82TiKs29h9Gsy8ud7Pgjr8gB1QUHCdG34yWpey7mBdQ7nH",
  "key13": "24KJvgW49488AvCGnsAW6tiu1jNoi9G7s55e1rVEyaatk7eYPPDdKSyqxMjs8cDXW6QYKPrcVZMhTWSXjzTrGBza",
  "key14": "27hQDLW7kHK1FhxJcdnxcvcmLiunz84e7NuYFSFtFTryfmnTFLs5zhCmf21dMXfJh4P2z7bDY4mwLe72jfSWQrSm",
  "key15": "3jGmB6mrNqmqZRSFmdGxaZ8quTSy5WYcP3ePq9TSYCZV3SNjp4nLxPheJnFtP3d4Z3HxGBYy2mnr53a2nd9TbWbp",
  "key16": "5ihdJ1uNakGFeiCZVfraSYERrvjxfC5VeWAe2KSup6bP6o3BzAWPpFXJAtf6RCtH74KoaMt9JZ4weHtUMvjxkYEP",
  "key17": "3vMhSPRUSpSDk6tcehZ1iJzJtttanCPyVd91eGcvh16YMkFx87TSANYyTrp5z72SDCgxRAWyRmhJRpJxgYebZ9Rd",
  "key18": "3aJkabSTWA5oaUZCqJSZU2nZUvA1Mimo69mYBpkdjjkrG2JN9v8ENKPZofsoNcvKJ2bARghqKfTgYY6oP3BrS1HC",
  "key19": "g5KvoAKAsgDiH1DXoW5qjx3BrZDcHyYv3eQyi4gh1SFqLTpbWk2UBrDnnVg7M9a7nr5LiX7JxkZkovgVVoVWXrm",
  "key20": "5Papx8EFVv1JBWZog3Go39QzFf2zZbCGvs8eYakZGneqPhtVCCeGvBJPVxQe76TAuMdoxVgxTPokYMvCsMfX2Jtg",
  "key21": "2JQHRezccLdBBYVTi95se5tuMPKo3ib1vpaLu2VVGpRbDYauf2kxj1D1PSZt4KpGMdxjL4KNjbDtCneCcgPSmwfn",
  "key22": "59VSEC9NiJXnDCvcWdy1mV4WwogVN95vKnwazrkx8NoK1Mwt8rF19kYR3cNtwkDE3GSusVZ8yTiV5EpE9tp58Knd",
  "key23": "y8Ac4L2rDqqG9w12oWTn1uCjctnDJjU7MUvR7Crq8wZ8gzh5FYfSZBHRJxUGvnmjbnqPy9YHi1WDSdor9Qa1U7Y",
  "key24": "6712nW3mNAVpFh8WXYn9AhxAV8bTtJGxcDFoJkT6VmC5GD3q3mMykCBEVbsDnpYxJTYHNS8BSFfJWdpWrSuwaPLY",
  "key25": "5gp3ahRvMdJoY311uSJAozVWoSk2VXggg6pWVDsFkRLZ4WGThvHtAsFFXX7fRcUv7jQeHMSL4o2xXvrDhjPWBbeo",
  "key26": "4meQG5ahStfLn76iDhLxG6hnTPiMtkpgsBCDwWkJokYQAs1o614hqLiAtfKDDMwkA7mGWXmLdrHy6woxC81RJKmJ",
  "key27": "ZJtwbvjxgUhiKXavH6daeod4qXL1mC72dZccQhwNRjwVYp31bWV9Ny9VN3K6aoaGhh2zHAV34LP6Mm554DYEGdA",
  "key28": "MZ6MSSV5ZcSNoq7mzuwtYCKtbQmxiZcdou5iNFZYMfbPXQmqjceZ86D3HYt2QakK2QMyTDZGGiaNciVS2Lfc6nt",
  "key29": "3vxJEDrhqshUptBBh1R7ixASXcMSzNGNLcG6gpsoNq4veHxNdQrkBfhUGbBLLERv81EvKXpNMWHEurqu9pBEzsQU",
  "key30": "1rEkd7iYufrj3somZ1YxoLq2vPFQiHbYjiF4N6EisWm31S9mpWgzvzEj9Cdk7uNAejXenx5zPuP9B96R6W6wffS",
  "key31": "587YfBBevQWqG3zsbY4vDAVG2e8NBSzzm8DP7zDN6qCn8GTxnbRHYLpdJ5kvtSUj49hL2aeYaSFHybDXyBXosqDe",
  "key32": "3urhmTT7aydUdPPqSS6X2bLtd7VnPEFRrvGEzRd8VeYdDqTDXj6HyUFH34ZaxVvf6x4xfe21dTUBUuhA2SKr2LMX",
  "key33": "32qdCuXQ4Ltj8E8U1guCR7c9NB8gg4mr9Nmz1vw7SaboWGUsbGYoX93dPsKRn66RonAiF8kXdvf14NN7Ds23RpWN",
  "key34": "5jvkHx79sZbSf8FcYKyww6eRhy1JLTUeF2VEgdANNy6Ttph5uVUFspSreC31YQSttGgxF6yVKKqhNXGVaMCGxYRA",
  "key35": "5GgerXUSTmZxN34u7Y5JtRrR2TCw5MhGZuXkFz3J9LSwDC3NGsqUcFN3f5p4CbchqYbC99avLacKhannKk44Bpo1",
  "key36": "2MucBtbfR9TNYfduFK1EmZD9csmBX5nm8HPXnir4EZE48vEKfFcw6Cji5Nd3P67Hk65rXefRwhbTPXRwASb8NTxA",
  "key37": "47UnsSF1WfMrYoQ95vuTfyf6SaShQ4amq48Fvoj6ZSJjgAnchH23ZpireX96Ljtn4hKunXWgT2YgyuxnWRfoW8Zn",
  "key38": "3Dgqu1aAHCzLqLWdfHA22LFicSJqFD7wdzSH8xDPwfADitCxMvojREd4a6py2uCBRsoY8Kwwrh6T6CidVNHw19h2",
  "key39": "MVzANH6V9dV8Q9f2JD8Zf5pj3hRnrBrZYUrHPnMi6YoUeLVNaHzuZ8XpGMTKqFs4KPFgh5D52x3oRZ4R7Yc8AAV",
  "key40": "Ns5zKGxYFbGnmhr6E57bFBs4HxERmsrp5NvnNNdqyEAQTe8xJwWDdm3qy4jvJKQGy8ukq62ziD8tGHg4Tsbz6B8",
  "key41": "4erwgqrsdTq2oiPzisB8NSNnWVKDBUmSXXvyy64u9EeekVk766FVVbsmhaUrXQp4yajKTgjW5gWvgrrUAzeoPnkY",
  "key42": "25G1fBV99ju4scCxacG8fnpG9x4nDfTNDhhRCSDC25AwabZotUTjFw3ji2XJHWn2VZeNS3kFNgTsN5sRkWjFcsir",
  "key43": "57Fk2pZVV7aMa9XDCHKdz9SFxgfbkHaYPLHWdzLqnXWSG11iTXTivtGj3FXmApiq499UwTn6zYP3kjyFzLX3GtQd",
  "key44": "2Aabc1YttJj8f9pPeC3er9BrXJS4h2cGWPccDbqnk8bhhYW24Duu7GbCtkCRjvsTWBAfmzpcAKX1X5y4aQLaPrAt",
  "key45": "5ZNhCjUdjX6db3p8YLEx46EcqMqcnDReZkwZYm221pW1HAi8XvXbgsURi6qexdVZE23M8dgUAm5u4KsJ2H35X3ju",
  "key46": "3nSqEyJ6PN48BEs1iVcxzeCPKtSAgFLCp2JB94M9A1dsB1jB3JcqCTvokKihPmGrHrW3Hy3qnuNpk6T9RozZDvT9",
  "key47": "5ZEcdSoXqZwNpRZMNxg7GdDthT6x1RxEE7y8Bvwrf2fxzLttjP1QQkf3EGVCm3XQoDu4xv4Neh4Sv5vvHrBtVvs7"
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
