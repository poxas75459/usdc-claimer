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
    "3UZmVHtnjNEkLSUni74RquukQzMoYiSkgfY8Zg4hiY8eP6DqrezQU7ffDSHKGx7NZRvAvtga5YowgNhUJ8GX7gGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j8k3X7dih38prSMKjXtWPYc3vh3xNKX2558GQrA6HJcXUCibufgkcwbdTkcVwvDzFpTmRsWp6AKrAGPEi4RUw2s",
  "key1": "56nPQUdxyMwVoLALSj8N6xgYKpfLHjskwU1fHaBoTccB8Rbe8rPHCFspv3j4xTWXYZTrTJWXhYQh5JWC9LMLD8Z8",
  "key2": "58VpHAs559bdBaaEqBoocxcDNuTiEjTC8Z5dpwp7tDGa8mztZAErwMrNRwzhvFc8i3gDFWNBnwqF9BYTqMVDJTf",
  "key3": "3xewGfWrahYNr9KwB64piim3hNDfR3KHZm8QAE28RcaBi8CtPTv5gZNVvvGBouf5hHMLNxuvCXvoEMWczyKXrFcJ",
  "key4": "FXbQBvKwc68N2PEsJGCkYfdjMN1Ka1wx2TE2mmvGE7pBjPTxpk8TkZmdqX9jnLEyHjng5KCS28wCL3JQ5p81jF9",
  "key5": "29W4PhKrCi5LvJhmXTYyf7pxpMbwsEbabnqWxDcF6TgnDV5CB4auqeoB3Z9jPQTXniHh7CW2ke661Y8n2AokBePp",
  "key6": "3FQZ5syzMuMYcEwmJWjfUT1YAHeQSnW6X7GnZE6zLExVXSuXiCFr2WCsUryL7xhJa1UDz6gjbbERE36WLWDXHEPa",
  "key7": "4socdoYDv1tjQfftMppitqBkJWdPtvKPwx6vMdUCWHmEYxTw9ny2NnT1HMcNUdP62xhASyPwcFCbsLk6vw5bKNtA",
  "key8": "5LhYDUYedGWeenyhvF23miAWFKba5wFQfezC8eqj6CCsiYQwJjQzV8DFBUzVhyGSoHWkUKfNnyq87G96UtdJtUB4",
  "key9": "3yyodK3pYeb6RnCBAzVwqkKt1FkedjhLtrVBPuxXf3osT4uo99gieUDb6F6X78Hhx98H9xQv8ohR6qNE2JPueFWE",
  "key10": "51NXwHhGBBPvRJ8u7ArUPG3HRdd3eNZ76KEQtJ9KAwu2bMx6H5i2Jvpe7fLCyfw3BjYC3No6gXRCjkn92dSDptL5",
  "key11": "4LrmpdcyAZ9Go6ZPByYA84L8p8dfniSTACxu6Ndxo6uKVnvKQApd5u95q6mJ7PfRn8g7tYtjk2fnBXACjjhDH7op",
  "key12": "3tZhReH4NbeiEaxiDBo1n37XirfDXUASSroY1fdhDWkfQGf1967PALzFegdrebHyeLwY2MKzNh8PSz4Z95GX2gzn",
  "key13": "2ia6sVbUQTXofiQwuUeVqbppagA9ZRbPyQopux2ham6FkQmszc51TasvxQk8MBUcohen2br1VyJxiqRXeX9fsP3M",
  "key14": "2rP65yUrgUP8PiUuXTPqbMc5bsayrQFqwQqk3v3s69wp7AD5oDD2xY8f3bA6TGLfRTdna4UTWDXjJC44T9vDmHib",
  "key15": "4j5MRsdVmzo3qWuvuQNejHvDs6vPoY35bZtMFnHFYDiDAod8vVVaFGVWJtR3H1dLTPQKyYJMFPfBsNd9os48nfT2",
  "key16": "5p25ghz7qQipfgqGekiiXmtxNHoSXCgB6qGBvijawvSW9E1S6dvTCpVoa1rQS5tCKVhBDk77Tiqo14LKNF2yUHtv",
  "key17": "2kSJxuenCRLzuZPF7AzM1fenua7mjCsjLYuPXDBoubXpbLQ2ZXQs7B7AezBqg17dc1xNzbbuP2WXFeBVF47GZQPX",
  "key18": "iMcWcenvGFMCJedoZzxVYaQHaAA5rFv9L4PdUuUopQjz9owyYPHYgpxwSbk33XSU2pSo8jSPhXcPqL71kn4SFiU",
  "key19": "5Ta1s7uy592eKSabmLhvGxgndbCWptqa6ic3Cx3XhHY3UH6XTc9MvbhSmrtSWm3RMXH4zcwPyuSmgzcMksXniv65",
  "key20": "rrk6dfQ8Nia1LToHNBRtW9bs3KvoHC3NTYkh2uNNact5k72ftHRVKapKFurAVWJSx2ZXNNtia64LDoV8QcL8FTc",
  "key21": "4cnBhKi5yE6EsqbJmrJKFDkahn66dUufVZPXmNozyRzL7bHqtXtnLwjPdKWunaH4q99AxmDKuAphd5T4XSZohesa",
  "key22": "3LAWRHQB8ZdCDYMtjBWhPtamBNsu1fXjYChiizJUjdxBMuukcrdhpfJ3ReuzofFYcymrazkn2JRzYd1uHzB9DDjF",
  "key23": "53m5bDA7MvbUdF1Xr18rd8pY6UjFvSj5nTdip2jLiYJ7rQLuguryXtCm4HR9y5ufckaK59nhP6GiCL1B4ndsoEup",
  "key24": "5SAts3nbPLutNXHNn7uXroy5UwBcyLocdCL8nT8Q3VJEiY1XaUPaH7ZduVyfpmkPy8NtxW7jVSiRGJtFaRQwRKA5",
  "key25": "2mS2YfmRMc4jmqAUbHyy8KtLPs79aHJ2mR5WHzsxxNRddbgvQ1Sa1QmXvFin8aWt4qXrpbZXttU5jyzkoCXcuecz",
  "key26": "28se54qHdBKK8aHDMPy1XtwQiHDax2MxYHTS4yQtaS3y4osKN4qwTCjwBsrRAZ771dhMP1CrxGLjhpj2Bdx9ycc6",
  "key27": "4CQ7Z39TXtSLPKsJMkZBmeNrDGL3SzNZ4TriNTesX3B3HdGT78D8oQG5CmjAd6nJr76QPq6uNcCdUDWALEb6Wbs4",
  "key28": "6KspAwr5imRKSnrA5Di9wCUzZPPiB6X46gqDbxiXN2sj9tAmPwn69d5dPGQBUjqF8UoV3PVzNhBK8P5tDcAvZ4d",
  "key29": "gyvwxyxRGMnDBnsjdjR9f21gEEny35MiAFFeD1ivgNh8Mk47tDk6RhSQjU2ZWs2GUAz1p3Eyk3Z6u5kaE419vvk",
  "key30": "4j7bmQTpYHV9ivgnNqEknnN78GgX4ZKFwNrtUnzBVo3pyqGxFz6guo4qEewUE9yCTmBTzeDBQjGKe184oWWK4u55",
  "key31": "2dzBB6kTTKmJa9zq8URsd4YBygPFhnppLMqe2Sd88RDGZ86ZdicBAPNyszb4b6MNbLsvGz7YfrvTGobWxLRBiFQr",
  "key32": "5jiNoRYWhf3WXv4P2PHDyjxyPCE5usL2SG9XM7vBTbcjg5wmpSyFmDew4nxHdCpDqzj2t7RsGAi2hstkZ7ujTi67",
  "key33": "xN3UMLbF3W94Ted9xVLLR4eirfty4CD6TXMEJqMwV7ac3Fdr4kFXdABKKty7tAqq4EWmEioUFhgnCMasVUpjJfN",
  "key34": "56GPEaVDJdsUcJcbnRTVcVZFxXKWtovkSf46Gyj6y1ruYn3r3nEVpLoRvtGUb7Usem2ewuh9NptyygBGoAX8nBpE",
  "key35": "5SQzGr5KnadFhoigxFwzMTmSn5RC3CgtahZTyFyFASJZFPy2uJybmjmzrkU131zSQTbCYCdvhs5PWit7M6922QnQ",
  "key36": "1W8ppctTTprKXqRchmodkj8WFRjGan9hVXoD122Rxm9MSx1EHCCimy9bARfck5fom3BKW2FYqUYgpMjb7QcH6Yo",
  "key37": "5p4TBovY4T3nnCXhQNJBNrLPmR2SM7jSLsoYeXXrHyyn6Ku3fprHjMG5h4QcCtdBt4arPUJhUuEawjMMKWg2Kfvj",
  "key38": "22kiSREkwADJspBSvTg8yMuxPLofdDiFVffdp7KC5xLeau6NpBeQmNdpPWEt3rRpdMWeHJ2hbJkFbYMXXg3RnjqV",
  "key39": "5DgCDLsAftuSdChCQoAiPY5EmniZafgf5WtPhDoTewn375uUN8VcmYfHGJnPPf2DRUsEaQQgQZc1g9mWEJzmKGRi",
  "key40": "4tMHoAfoenDHCmoco2Rhj2V7imjL77esacTEtbwEaS7tqpiXUsyTSXWo1H5ihsSGDasoBtyrvp2mvwPJ43EehqJQ",
  "key41": "447ESG1ahoKsFWHDUZteb5oCwm7s2t7RuAp48EGbAbmRVmwo4BAJBSMHWR6aEYPTPQy7jgTSn8BMJXWjbDwgtdHJ"
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
