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
    "VWeQ4Sb9tXPwAy4eCu7iHJcMTrjgNN8amSMxuuwSEaG3xAabwooHqK5LMrETboLsobcs8uv77M4EP4afdUDbHfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YmmFBrL8ETu9vZvHE7n8PRZBubFtmy22WdQwGybsgWzvneFLJyrTrncBUQgh3qXHKCWUAb7UKWUmZ799xVGPADT",
  "key1": "2eZhup8f5QZhT1Kaqt9TjJePmCVL2mRZDQuj7RXDnfTecBm45GKJFLxigsWehrntrxaB4MEwSkoHdJ5Dh8cWFgu7",
  "key2": "4YZUDsS1ju2egNZUMk1Rtar667KoKQX3GNrubzziJqdcb2eMPL89KJLSomkBgGCSXBzjK1tRjPVEE57cv7m8z5sN",
  "key3": "65hL7wwPRjY9dDfeTX8KkDXXS8zeR4FALuGWgPk1CKF15nxqmhxWg1rgkbEZScVqLG4wzoUDJoepCFMr4h1AFEWZ",
  "key4": "4g5yGah9v6MTNK2z685JQkMv9SzpEuLM532ampBeMFbp57H7XNtpNNxWC1iow4SqkgPQTST5ukCBhRYSmyM3WN2n",
  "key5": "5XN86gVRwVTpxBxx497ybrjXrJy4ZKr3P3LfZeEtvFjh24kUmW61DeCKF6PABxgr69kGG1ZpFJhnDod3qVQ8RU3X",
  "key6": "2tyQGQVyMA1uLuG79GWbGcuFeuXB9vLETZfJqURMES1sSqVSxxXj5Gi3RYQm1AVSrwZwtAWGuUaMRv8qq7qzyXYh",
  "key7": "4PPwBLbM8ovvbzuDyJRmbAydHUYnjG7dHp4omYzAqJb2ad4eyqGEHzCem3Uqm1V2KHgpvVjegL9kya5d6DfVLafv",
  "key8": "3K8DVrV5sMcFLdK2T9xFn7Xk214FPtUfjSHmJetSRb9mBGQ5JkSzuh55RLRSbWPW2GRvC16kiAY8LaUcFBg9NooP",
  "key9": "2db5FctHJbuXDCmYbmbykwpXxYxRGvjw8hT8VM146Ad8iEQx9EpZmQn2kGzPHYAzJovVFS8g28DoxpBjr8PiFk28",
  "key10": "3PLqTduRN6TBtSVFvezqw3ToEVNmsRMo2G243jjhp5yqUd542jGN9y3UK4ZxvAfMfXX32zcMA3PCjp82LXZ9jCpe",
  "key11": "3iYVXdeX8eKQhtXE7iboWp88AoM1c25KjV9iKB9rKnonTTiHAFwyxfthjbAnhnBXWc33MjGuEh243rDFQ4SfDCxc",
  "key12": "wubpLfA4DVMSWoE7E3HVdgFgptezvr3pyEbbxYbeDvtd3cw3GvcMUaRmKn924292X9pg7TgQaG6AkadrF3x5RQP",
  "key13": "3bcQGrBaNoJpTcp4HLvHro64s3prc3TuFZ7gKVDWBKdo97xotAo6j69AMgx9zjFpidP9YpEa3R3Vz8DdBRXKjLSe",
  "key14": "2ygZzkWvRdeHpFffS7ipGrM2sXSRi25TCH3SqtEXkxaVdQtYA9YJk2xnGRF4w1VDdJzkYHzS1QSuB71JVWnmJxZS",
  "key15": "5WUgEPgvHwKVHURNJgJPL2c4ubkLvcJsXnsgezr2CcG3FEfK532fM8dbzKwgQm6r93eHQDKeT8t6R23CyCXiKYvp",
  "key16": "4kKi7kPhnQGn4ccQepN1k9tnsRy1DKjSFM97NCc8fbvSSmXeFDZ29uzaZgZk1YfoDBEW9Lwu6eVsV6MbrGSZ3mJe",
  "key17": "4Zwj1ytSJqiSfkwEmd5MsXkHtJSmsQFsLfo8CZBYZ74bTCqpgHwkCqm4vsfcq4LRTcfQWqdfX31QaBtwbshr44SB",
  "key18": "4eP9hPBb7KzwC3Dx56f8SsVjtMSTWDN8FYqL9ZG3ZMNdaKhEMqEtDiTj5HLbZDEbdChfho2gtTagghDWQty16GGx",
  "key19": "219fn3f11HQjqCTNrYPBKVhfEGf4jQrMoPsD6LUaj2AfTmhQheSFgxy8NZikZGh4mMBNY6fPh2yx12N78z3uSQnN",
  "key20": "4HStueQYYffHtDJdX3BVUbbRQUDSkPr6gScHZbkrMH2MYrAXaKt8F8j3NN7d4keGiPZxAHWNyetXHvGjUpnS4VQR",
  "key21": "4n1jAG337KtrbxJKCSyy5m79eEvLC4aMGTF6NBmkvKjeeFxyJFJaSMG5bwfKjbn5SjHjRbdk1uc5zr38sS8nDNrH",
  "key22": "2PhBYMgRsLYjWsw31srrETttYfjYwx4rJZfjSwfjU9YQKKPDQZMt6AjbG4xDmwRZqx7u5qzQu1ZBc8oN2LC3L9a2",
  "key23": "2FTP2t8AGo6683xjUYkczcXCsNQ6nM63D9kocFZmDRAqCZ3BywaquMB7QhXZwiAtxtfFFTyFEdoxKLfkSWXTo4yM",
  "key24": "3zwUe3kMf95myQmFHo8yf5vYePVzTxmvft6TFJG1sfwEgtKxLJqVUiJPptvNtsMhi1s7FuF5ZfkK7FcguKnr81KB",
  "key25": "4eX5vt8nm6NW38rHJyKiTAghfJ3rkWUGc6QC6wrLPLNNFEecAjkhdcG2NjrbHHS2zi4ud9K5yFitto12xnU7cHan",
  "key26": "2pbwPMEuDghvFTpumXep7gGaqow4wtPDHwZSb39rkKgKqhKW6pgg8EaRjsACR1eX9Byw8xRzqpBPVQ8Q47cchvYM",
  "key27": "5gmby4rY1NpMkcxzJHTi5eBFfkD4sv9XPYCe4D8QaxiMDffkJRYV5MWgXC3hZ5qxv4VE2kf8xQLbD7EaQUQBC6yt",
  "key28": "8WTjbuWVNtBT1e36i9eDRU1UDVJsamxv8o8Gm3BeUc2utrF5EqPBuGoH2KabSyzDwr9F5pPobL33CFa4azF1kGg",
  "key29": "5vjtoLxqgerQmr5mmt1yUC1jpowfKRau6F7Vt1YNMiGArasx4peCdoPmT7mY31x6p7tdKpJ9ZwfpehezAn7AFLXY",
  "key30": "do1deLDnrg6RwQeXb5RkDakGBLPnUNkRFuZuUzjcDwctCCDd6oCRyKdPnEK5skrVcBLyD8McxXsohQGVTLsC2sy",
  "key31": "5vDs9zmwLQih2VEtt86zD7smrS1CxrD4pXRcjqffAgptiY2ix36KqKJHxDfciMXHQAVYKiPAN5RVu9sX4tYmgrrb",
  "key32": "53hTZTk1HMBTuMMESUXtv6JVaKRYcsLA5sLdkaXLbcx3beLFJX95US7W7e8HeeurgbycvLcn6G6dJGgtQXQGR4u5",
  "key33": "3dVfzzGWdmnEN9EUmc8j2wGVkuLadAM4t2ERLw8WL8SEc1YJoQwai1udVhbZH1diJptYhN2QLeJwtpey5mZSEUMM",
  "key34": "5btFgX55Wob5ESKNW87fXWnRu6vkKgsnRR6FEw25Ld8E5cfDwqbBC2BDvSqBty1kUFckiUXWGMw6YdHxoJKjjj7s",
  "key35": "4uEiusMpgEMydr66zLXMYPQcP1PWEKFrdPNQuLjmoVGSTHqWbjm64JX2PJEGEAddhTr8Hu39CfRCsp1iEjcAYnt1",
  "key36": "3SCwLeLoFdTr6UsbxPYAcjuUbbmZASj9zGpqWCThtgWxdGDHqshXVXRuyUN4nFMNpDD8dMYy3wWEXo9377X1WiyC",
  "key37": "2e57j3eMx56FpfQJgADV6bKi2eMvyzz9veFAi8wv6m76tmxWPHoMUJDjD1FmkSgog22qGh2BvZM5vUPaEDy9czrw",
  "key38": "eZiGFBihipCuaC34oCrF5BQHrh2kkLUy8cbgENkQ7FF8Wszb86ixCDhokWw2VFmsS9cVtgAocg9uigGuN6nyCWB",
  "key39": "67QmYfzViF9YukkSQXYzBop7W3anGvFo6u6xKbMoSP2S6c22zoi75C3DXW53k9nNgWK2ucziEiR1VkZn9sumQVsK",
  "key40": "3zTivNc9eHfZukuU4ZQYzKv4u7WrrC8YhHNteYXS9aF98oe7YFb6PjJS3NAbnbau3fo7xy3oePEN5A7Byipw5NXo",
  "key41": "djpTwaF6okAA8nAT8DhSCQcvd6ff3nAF8x5fYBmJ3Jo12gQf4zKqQnxmuEtPjdtGRHQqCGSaAfGnsFVf1ztcPMa",
  "key42": "3se26Y7bxrGXbA4oc5EZZ2hR5zchNUivrayTWZQKgngUGSPKVvL43ziSawvUWmxyWYF4vs81fHmAE1BFXk59vJ8h",
  "key43": "3NS7nQxNpeJ1rUWL9F7oNtjFxjUNjM2SeAu8JNke2PYFhMA79xZzPdNNYPAdHqoGMkLSeizyEJDXXCiKZKkiTsk9",
  "key44": "5PkZFSvttW1pTC3KPkfhPTygVizfvrZ2vnfoKqGCt99jr1u1UYBnZwEDGtBCpRnUQZKBHqzjZi5QjB4xPqBMNKfL",
  "key45": "21rgyr1jZ8KKLzoWeGXM4grJYVoZnX5ZGZy3AvT3ZSJ9z3bsnRM5RcALMDimYWdtkiiatMeDMkPKJLH6TjcWB1ve",
  "key46": "5HJP6HgFAXfQi21EwPhBvGboFoWnwoBj3uwf5x4hxFovqWMTnHZyNZrXvJ8MSkWSt1hn1hdYTFDch1miFgWkv6kh",
  "key47": "3ZAzazX6uGoFjFyd8h59fFmTbNbXNTAP82egCcDpfdUV5fNFLokEj8A9GV8evfumbfxhzoGRrbhvmyEgh3EEzZ1f",
  "key48": "3YFwVfWaPw8LEiPrgn8k5QRcXTsdZENgCPfB8Pc6wu4YL2VZCmVEpoafsbnicTrCS5uEhKnRzKonmkZMYMNhpYAN",
  "key49": "54qTafwjSgBsXhjqHAmPqoqDMvZDxu3vENcUJvzJ4ErVcLcawx4WEHT5DDrg4NUNtgSRuLqrjzSPthDTDkA8vb7P"
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
