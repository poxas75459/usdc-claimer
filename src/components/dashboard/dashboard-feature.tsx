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
    "rYd6md1Z1W71sUDD1ZKzvvyWPcfatkDDTsjZjiD1YYqXeLSN8ieY4Nd5N8ggMrJycNMdAMcr1zL9DMhbmd1NY86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EtjYSoyeBdUMEJjsKPEHjSWaXk5bHkdFhasa6XUrf32fr4oK43iyUvWETgoyY7Tnq9Wn2TDamNkjoSdo7LKQPCN",
  "key1": "56V6f135oCD6gpJw9yExpFQHMLB3chU1UVdnUiAUhiNvcsjfTwKRCRsGFrZv4XHMDVMz4F5RR3suVsBP2ez9GCRW",
  "key2": "5WXjaJSrk4mERx1j4Ys7Bw22sNdWoFGiVXXbcm61h14D6pVTTBeXrKaQ64AamSWMV9191TtScgQLg7AQj5744ao9",
  "key3": "49vfQXtHaGLbfoPupKS33DUGtH1vr9KQouznqGXX2pUxsevFDr6eSGWxYGSHyAin5WQTCteQNffQ2yCiQDrSNf5P",
  "key4": "49pmn3XmC6CLFPz7ydtd8MCx7mqxEBG7AgTLgosnNayu6z5ivr6hYi4MrS7piV94PeDRCjTg63tkuf6rwbmhJsAN",
  "key5": "64JrFSFSFwS78aKGSwx6cEBYtWA2T57LkqUwgVrK5vSb5ohT11NNm4oCJBHVacrB8mCU1tiNNvi6ZAbM1v6NFcA",
  "key6": "gG1SGWXtbzrcWd3DWVm3DU7aGFjpHNzizLh5UR2RpFU6YkNHwZSWR5k6UQmiUMkLrejXtpG3eBC8JL1qde6CDwo",
  "key7": "2p6E6arGbUDMzNJvcDF1kJc6nzmra5Vp93aZNJUrkEka3gFsk5mMJ9DJbPE2nBgAh8kS3XJ2KYh8B7FktD8XKsN4",
  "key8": "4CBDjzZC2Y23PQSi9MsGm17jUQzpKokpaRXRUWFZ3aLqT8qC4Hme2mkpfFNmCr4Daj2WExPNntmsV833C1kidRCh",
  "key9": "63qR5CpBN5NmTAMvJnQTCT56A7gEcat18MsZnphU93qES4QS8cG2semXTLXeYZStVw2Xch4U7Gs7nVRKmGibAzyp",
  "key10": "3pxk3USb4vS4EVU4pvHLpfpHG2YDzx332kMU8QE2ugmCuNa5VNC4yDtrPx3u7T2Cxyd2ZBxjfHaPhfiA4ZswKmbj",
  "key11": "2NgKiEcUktnGx7gJXQnXg1P2idXgrA6qR9665kPqBfm1axyN3Ex1d12dyiBLb9zFVGqp83WZV1b6AUeS5Znn6QTD",
  "key12": "3tpvkNHbYFZLcCw3gQagqum4boeVbUdELz6iQ2x9UGaVZAJZ9BUFviyriJjcPcBfvjWMqLdDrrck26YLsuftrHog",
  "key13": "4ggRDEn5myKaKMDNvv9JuScCh5De6RGkoX8AcEUsmNX2MPedZ5Dwc56mw5ZNPyjJBDZXC6bVmfTbQ344swjvhF9t",
  "key14": "GQHr9tFiCosjFfhwtzhGAVM6G5QWQe6hRQWaweNgCpdNNPJLAygBDebCzqa2BniCx7cmud6BmzcWxF83hqPfjvS",
  "key15": "QEToDJ9fBJ96dXEFcWADDrxRvDzPXF9Kdj1xGoMVnHzpXtY1tLGDETVoMP5XPX31QHbPgnwx4Q7JetgyYCGpNVX",
  "key16": "kWpDinwGp8CPHH1Jtxa4ZPQRToAyLTpnUwGSpfSvA2bSofBTR1SeqHLwPWgXhwfboAHiHYTPd2ovna8VgV37U3g",
  "key17": "5AVL4iks9C9s7PQax5VE4gEv6Xa3VZqnGjmpBsQWFhGzmYVhDJQRRdt8Y76H4mStv88qGwpsonHt9wZt8s6e2bRB",
  "key18": "53KX7CT2LVgugqPrF7fMzQ4RcWwqz5qt51deE2CRCGPUUMpBEZKMPmPAiL176V6t9xbf4uHuWvM6gjeLradgoQ5F",
  "key19": "53heEtLiKgBe927x4hKBUscVfynT6ynyYp1eaUyBugKG8kSvKEADwxFpQs7NYwSQPeoa94cZex86vFXGPAX9hqyV",
  "key20": "3Dcdgrz1DU1fA8yfzU2fmqydpomnL3VjeHnPwdD5e8ZjqFMTCMbSvEopfp5HBiksdbCiHXDJBkeSutQH86881Gmf",
  "key21": "4iLzzCDPe5rNSXfGShJCrjPRuqxH2QJAFWQ8WGv8dPsYVZfbfeU7P2Trv9PrPUEkwQkdMxsRGsxpMcaVpqwfkrEp",
  "key22": "5RhXx898m5owP9Pri7p4L2R1qAEdYSe2iVgi9UgJduLCUSWzpFe4DHcDKAmtkvB9Y4q5vrtupBBh3X5pLz9uNp4T",
  "key23": "4dYPyHGsMVdEio6tsCUCd1G1CnzRt5xJtr8V5yzrrRG548a7fEMvaHf6D15cwgfWX5jtRaSHDyKwqqF1kZMBRDPL",
  "key24": "L9GMkXDT4fB5nH9NhrvXyyoJ9BekkRtrNDdmJJBBQtDsgiH7ZH5ePHyjhjoCD5K4xhXsddwoRaDEVWdu4GKi3Qg",
  "key25": "5WFRiShkstQcHEj2dgCsbQhpBgWbdXD7Ae4kwoesn1TLG8GVoJ9B7qKiBoBsdF8XbZ2nwJDFEZHhs6w3KXCFCTKY",
  "key26": "5vsS1vVYCK8s8xMRbtzzGpLWCSnyF6di2DF82NxeQdjqaPszhFbgqmxyv9c35U1PDvgvEGEsCtqixPcbRv7e2bXN",
  "key27": "2W3Xs5NyTJPd4BmwjaJUjGusFWF2jji4mVX9ipj8YyBppzVLxVVe9JR4minzLwzknzPsLzC3D7ufJ5Dreo6tihfS",
  "key28": "2Tmu8Q6vHa9BfKauyQnSTJxuxNp39XUmE7W2R1PFw6RrbdsRjn9Bqz2dcUjvE6AYpd4rscqGLCV7vXYyPfhqKVPU",
  "key29": "645o7Aaj5v4maWXBHASnFZcBPmLyLY7vZL8qKhvWDqKvveTJhcvtThNgefp8BcwsD3sGm8s8b3SFD4mKL379KxEo",
  "key30": "4DYCJzu4cadua5emxDWrDU5Gu9N7Kygr2sU4h2hKPEapKjjNYdqErN4j98gp43hu9FJSoNwH1sXEqBDpDTj1krgM",
  "key31": "4NfnPEj2jEAPpuPQsLXRSgvzbLb97qyPJviYXtf4nU7bFRuoLcEbaWtS1z9Bezht66To4PjLPfKHNsxjweja7ANt",
  "key32": "31bDmC2E4KSY1gPKDtukNzxbHDjfLpYJJ4W7oBsqUgngh46YY4kGLXjzTymdnoQFGwtijTZG1SMzZXbzQMnS53J4",
  "key33": "2rsWA8Epoz6U1csHmmqibaykpREkRUWPiVC2unVeqWHTkMMXuvhiGUre7AZpvQ5NdwjFviXzRZFg5g5RFmB6RJMY",
  "key34": "21wfqQ9tNDSvskzLNqHhoUv5Lo9eZZU52eG1r9MEJeKjsgSXe7GZTzmf3xsqWBx6T3zDTwVjTpE34CvSgovJC6jG",
  "key35": "2GX6exaA6rQjLMLv6eHrBJwPs3Q56HmoLaA2wsmuDUFhgCEHotVrgWapzqEeB6KzfF3YedqptpJ4dDFCwkKL1kCQ",
  "key36": "cEaLNTqwQzTx5PfN4VtoyejHoXyxC5s7A2Sf419ePkMybQ494PWcwcLrzQN8nEZHLzqDPZNK9yrtFxCvsnnSa87",
  "key37": "3Td5E7mGSxxUzZq6asaRjVwpNAeTpznAg2q1phfXCczaR6CUBm2mG6cEneoLXCFnBdVZzR48ir5xMr4zRyA6MaBx",
  "key38": "5GG67DRUH2C3QBEK5ogTwJajXETuG45tGDk4SBYKhBQHmKYxBKqgrp41a7p3KEg7PrPKDgSr2Cd8xBNnEowKc7S7",
  "key39": "2dvYXNVDF3mS5t5Kg69gRSaGb3zPmVBhJxCztsMVBqbDU824jucsXqYJzhimX2Sb7FwVQX7yABnin29B3JfD7SnT",
  "key40": "3sJJBc4zKnLXQuCWGiWqaudTw9J8uYRSURpGHkWHiP9dW17AzmNjDnWXRQwdh4bs1cdp1SY8AFz1X7XeJy1jAutV",
  "key41": "442Fo9idVxqf8UYPMFnxnN8no8VuzxjdioyFF2HSSrEhACY4zNFyLjWVDRMwJNHKXUXccCwBKPuK5icN2qM2dkHd",
  "key42": "28QWeBKTxymyjVoqQpezrGkNKQodJr5SXYMGhYeb1QQNoAJuE133FHRYTwjQhYhWoN2XLTvhYRbsKoAof2teTT8q"
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
