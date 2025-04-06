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
    "21wFo7F1RcS2AxEEdUmtJsCErBee2hU9MTaSqbAnxdAGtXJNotED8ReKHSqFZkzfihFvrNpYiKEiQf3GvyGy8Crb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kUdtzym6osHooUTRHvKzh9r4JuRxnTxoSTMe5dg1RTyrr7tnafNn7h2fTv3vnRj1QywwxS4kucSPkssx865njAb",
  "key1": "4Rx5kbcKNED3hn3Yb7YPbRJr2LyZoQAio56dQb6zeMD2vNfy5P1197bWFVLFjWcrTm57RYxTpjEnvGHqwWnUVgwC",
  "key2": "63S9BSiYNGGhfZYwTWLx5LrJEJw4ZsBkvjPy55vk96jMfsxAStzgpywvHjhHBuwkDRcRaPghMjVuTnEEgSKEMpCm",
  "key3": "51orFSkHRYBXfUch6AdRDhwE1ta9GUfNeuXmk1T4RoCNesAe2xdCknnVh9NAmoPpSPiMzW823X5286vpr1heRaLn",
  "key4": "2t1zPKNetZv44Ya1xNE6ejebcQ4r3ogdArszf4cSTSF9hkEmegPrjQsK9cvuxhw9g7iu8d82WZbDYWDzRSuWRmY5",
  "key5": "48NKLL6tqUxyo1uyRiUAqgfV5gZJk54XbRcBEo2d3rdvBSVxjWPxEVqSSEgUitwuuz4zLRycct1YaMkezbb6feP5",
  "key6": "5iFm5QMcf5CR1vRYw4ewdUXumi6ryAqt1mn7ju4mFKJpsLwZekpXm3oVtVciVzbaEwotQWPbHLnRmqyB43h5rynD",
  "key7": "3Vu33BdBPXq1Nwb4nS1DokWq2dtu4zZDwdCbVLRhkAP47Xg8yG3LqA8KsXnocn67wdDmTEht55oiP55nAFVGUiVy",
  "key8": "XkEYqfEFiVQ6cKpxwQdmrMVwT5yF7usYwYapsykUG7rC1RE6YYnoV7ZhvXuq8wwFBMNFFha8SNJ3wJ2AQfSYoyo",
  "key9": "26zwhPeZCmC6kFtKz7DAm38kB3w2g85NcEvVwR6p9qY87qhQkUaRKADRtqC5gvip7rDoowsxAbiGwK4Q4nziADgV",
  "key10": "3fTAUQSEp1axnsmQ3cGzFeExdYxchwEmzTcVcFqyKyVECBzmNn3Zwe94HKBpC8Xk6vW73G5su1c5kRFvo2ZLLbdN",
  "key11": "47UGkBNDz4QMu5WHZiNj5TpRuErsiBp6fVQ6i74hhSXaSsnHSgcRf1JFFqEBYKzXhaBA1JBrUYPmMiSrU8YzUXZ",
  "key12": "5htYenHcsMWjGDsp8D9RyRv1AVrFtLMFBcSEu2Lgyajhi2Qq6Aoy8bNb3eeSHn7zX7Gd1533PTaNX6bZSztyUNeA",
  "key13": "5LsJUSGF57gQx7jXnDpfJu74vEiezxhB46jXpXymLkoecTUXZBPKeBNY298WPcrHFMhhA5CY6gMXuWF1jTKxwQr4",
  "key14": "1fj6wjUrmTnqdY7X26BJZNFUsetWBtL9VvMy1y4z7tnf7tLzz6y7Sf7pGrMSxsHzVNpDwLrjvHHXHNxzuvArcbe",
  "key15": "RmgEPGMLZs4hWzfB1xuEZcWtMF1dugLM7m9tfo6S1Mu7BzgzXZ4QAZejmXay9hqWeXY2y2J9DfSEihd4iwvUQgY",
  "key16": "5gEhS6AwbJ1CtfXNxaGWv3yxoi2GEm2k8RN6Qg162C94K3Tw9EagpQgKui6hqcuyi9qsEjGYmVPuN4RigQvneUed",
  "key17": "RrRYxbC5jh5XoVEgJAqdZYkWWBRa2ynnxFbyt5zfUQinDAd2ugUk8VTUmUgQorUDDxtCkunrCKHpYWgdTfprTfD",
  "key18": "4Ct5y5d1bGV6T7myLkxMyAdgURMFrrCEea8ZE2jR6ppD5rVnKLYGAqT2GXybyX3D9mkxtJnJquo6zcpWjajqGXii",
  "key19": "2jUNFqgveBhuffoxkBiZgkbofuekbm7SE8NR5WVZzaaUgeANbHuaseQKn4Wu1q84KJmUnrxpKKKdmqWttS7ENcd1",
  "key20": "5zoDnKAf5MLRZ8gd4i7ozji3pAzk5So2fGgFuHVmyPAwJ4ymCDn4ACcPv2gUoUqWKvBZV2U7hi6XMBWDFtmQ1Frk",
  "key21": "3fxvmDamhZC295q8HYXtpMq6G78UTzVrcDCRe5rZHJFEhdSEHyHME3SC5AebvJiyXzAMcZYaMiLBefqWkTNFXTHs",
  "key22": "21PWKkxFnvi6ZPoNb1DxdRZqMK2Hgc35y92M227mgjzfVX38sj8mLwD1zedD5yd8Dedg78KPHkpL9pQLMfgE9VXZ",
  "key23": "4xE1L8yG2ZJjhFtdbCE4ThvuAwA7Nytou4x5RpomtPri7U5RbNtnVM2nNs93Pb5CrZ4da7cYdKozpr1B5nbbbxmT",
  "key24": "4Dck7oKupBwoEg1BqDntwQpVV8QzqYP3TXiaScsPAVVzDfwqK7tNr83ZaAD6pED9dK6uexPheeAiQsfXjRK5atN2",
  "key25": "3KjZYcDuNhfY8xb7otbsiEYX61NbZTKf6YQSL7AxzLd4xvBVcerPMGExjc2jvTrt24dudkoVoig4q6gkVJa8zhXh",
  "key26": "4BkFxqxYPufagReEDqtwvk8u7XNfEd3bD82tj3j5aPzBYK3r8KEaygNztUixacW9SGgESvJSSD5MTY3NPd6ybvbK",
  "key27": "5MZPy4Bp26GBpHPPpQTFqgSiCSuEawQLn2XBakY3rkNRTV74pC3TFbyXTkkKWoqhwgAi5ztDkmk3WLok2QxXFYgN",
  "key28": "5L8NFHq5XpZrVggQxCuomfwb1KtHNAjTCsQonFkTpRmePP893HimTiUpACj7EDTZEKts4J4d6Fp6i416qZyHjMJo",
  "key29": "4c2aNvmiGgL7fpSvdt3tEPdvpnxH2pxfXZCpgxxBp2sFaBTNyv8S3MidDThy4rPwnML87SLFHrDJsWWayFmKKv5a",
  "key30": "5PBmHaDJMMAcvr3AL7iEZ5nVhScbVZpTr4oWUvmCnPX8ivHcxoT9KdNnqWit3R43qiKcix3XQgNFskG6FPEUjSCB",
  "key31": "5KH9HxR8r67YdT24hxd56Fo6mnxMtSVmFqdiGW95EwNxkjJRCnWqVYt2J4bwBsaHD95TNSzBJNVrHp5hnVfFgZSr",
  "key32": "4RTeYpgP4QgXXsKu35XHafFgWR4Ua2v97i9GopX5mmhvtnbNyM4uaGQQ6biLFUGxxv3HLv3gdLmAhUgYF3nXDuTk",
  "key33": "2dkCh18fvbc5tk5ny963EsWr4DwJh3437usfznthE19FXCjhLRzEwLLQmJEJihiCUWDhoJzZZD26UEECY6SK3wfy",
  "key34": "U68XDfLuhbihME2G2ni5ybV6vCBde3HDbnhTU6gsrk1c3dHKDPMLcY4hpxEDs23iRDoz26FFC5LZVDd8wrY2VJs",
  "key35": "31zM5EBz3drzEFomTwqSbp7y8qFq2ytBjRSA8fua2Y3c2tq353thgZppK22Mh5PkeZHFQt76pAhaHxry53Gr6dQM",
  "key36": "3J3B5WeQ5uBYFJ8iMbkg5YDkm1yfuvDwsWmHMTKBc1uXayLKpLWZitFssMUQpoBrLztjUGJJjHKEGFE7y8NEgRyb",
  "key37": "5BytNLWHJwvvSpny5FSkMSk7Dbsgszbnh29KKzQRmaH27DepkN9REBgY4frHpJv3h2qTps4sb5nxwndaNLt3HECq",
  "key38": "2JJYn5PvAUj4qTxKuPAsfFrFasbPyBHTAv2EPTL7CGzzp7HzXYgariKWqinwQWYxxxkt3xt4ThdjjHYxBV2XnLV2",
  "key39": "2xxJX97iWhALdzjeyXa5HKo3bJkk4NC1ZwkT4rJrQtBmEA8sNJDQMLMEk7tJ2qBSAuf357YwetmALcTGi7Cycp52",
  "key40": "3ruZTHEMLMvQ8DoEiFzKwjquh9X5a1Cm17DyttvXjWPVPuijkPgC6zJG3kmUB1E1cAX9oosUpmD44YWK5nGtxve6"
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
