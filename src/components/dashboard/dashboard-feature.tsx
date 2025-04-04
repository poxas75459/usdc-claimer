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
    "5DrVVT2TzZ8DwTaBt9e3c95SEqHf18fPzv3mEjY1L4je6fbsYiLCMHpo8og4eXXA8XSsJR83P4GeCQpYevaC6aT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51kYi2kWYZWPUsRKGxj4CWENveXSrwt8dEm8YsmE4q1cZiASVGPSQT1B1BvrcuZ3UuxzvwdVra9Q5721BtHjNwXT",
  "key1": "ngE1eSw7r9LYfa6ZNymmHgLZKdDiRaELvX36R54LuBghgoGVKzEocnnU1ew9zm7vsAYyvmikjYJtAeVCY6ToB78",
  "key2": "4tPjJDfQzd7YVTu8871Nhi7dCZ5DCZbr81Q52HBUrkWk6aAxKYgW4qeLMWL2zLov1VwJYnemEfq4pesJMLesz6bC",
  "key3": "3v3LvN5mmqRxxtPVz7QikwBEBFx3BytU8HLhoEJH1izzoJWrfevVAVMCsa36VSrtCkLtkBLP3KKsN9SdtaCHWnis",
  "key4": "2zKRnZEQ1qcWaUrM3XnpEhivtek7vcT8En9F9p1e3YhmeykYiUmKbTx24T9F3sV7thbBequrAjohQ4MXUUCvK4dM",
  "key5": "5TK1DMdNj6J2RfaNYaefaGpTdA24ivyg41LT7zjCq33bBccmVoJKPc5o4EbTaFr4bQXbZ5YNqWmoRF22QsW4F5wi",
  "key6": "aCFdx8tLahGxprd1PntMBBp7vrYn7S8y9VJgeSfWVvtgqZz4Y6eFPfCgF32HcwpNLgjJUWWJS92it4mabzCfdCb",
  "key7": "29RGZsDSbydp3uDxkacwYdnXkoYEiKtmFWFd8rkMUBH2Fy1BSVJraracAQHXp3t114SWiUyu9A3br43u9mdR7K7v",
  "key8": "3HrHETMtc4qDj3muFLvt3zVMWWFbYYM8cSexodkevD2cPkUhSqWrojeYbUtWzdn3at6GoGzAivWCsUNck72Bte8m",
  "key9": "5LcSX1AHtoT6Ypq9HGtj68gTuP7cXJUevwez6it3DpC4wsSz1WqJUerzTqmgftffZbYCk1wW8mBcvfHBVCKzH1HR",
  "key10": "2AsypJznEBxWfroeXaVvg85TDYPN69esm3kTViEkp74yR31vy4E7d9Ydvq8UX8xtCW8g67xpNwzfYJ6JmaWQ98hm",
  "key11": "3ejXKavukzcxVsLbLAUEewyyvqh2bQ4ovpKd2t92kmHZ19GKB7Bj882cecwtrgHuGqPntt5EucbJJ6AxjiZDGbaW",
  "key12": "5utzFiKmmo52wHvgEctjGWhipRnBAb3pjSSrHf3f6fsDZRbmc3MYdGD17k8UDeCYFgtvzjzvKAUnAqBuwvmCt6Yh",
  "key13": "2nteKrG9qVTsk7j1zTDL1pF9RCzYcZ1KiEfLnCKHQRuWjV8tR6krvU8PyDchhJ35q8ccXPGPzVdec3LVZ9kd9bWm",
  "key14": "35xpPVD9ZSw63NzBq95P5KLKkuq9vGodNTwJrkAqFG2XWqGxroUVB5kdabxC2oFzQ2LGmExMUa3P55pFuUaBVbPu",
  "key15": "c2gdWJ284mhb3BZ4S7YQiLyC24874PRfTghMJFxZKESYtvdtq6iCsFs1fZpQMntWNVFhGnUohXPfPh2ozKCmDu7",
  "key16": "xXbuX5NhAiZ1EQVbVGSKZ5NGLLecA1DobYbEvyr4CsKDT6jT8ALhjwseJvyXw6Vaavbgz1JCEXd4uvevpySBYqH",
  "key17": "4pBgYkPkiEeXWBhVeoKNZXxxdBf1GgwwQM23JfTLsgZLTaAEwWjBpRANo1ynRSq14HbsUTjZeq5NwyQQ4PXhWpBB",
  "key18": "63fx1pXSLSnwLfyJu3cZzSdSRccxbFaHkD5JJ5Sq9abixoC862fZnMZBQKaPmMQ7fFqKNmajeLDbvPyDLZ4fbiY7",
  "key19": "4Zob6wCDz3Az8nef4ybGD1c6Fyu5eKtTM9VLutqY5y4FKtHpPQGrH8ZXFsyfcpiMR2RmHxVwTQRR2M2LEqsmGp1r",
  "key20": "3qNHvr2Jm8NCnQsBVJanfpdXew8q7sSveT4RMvA2WJyAxuEkyFXD9SaQnGrve6MYj4bvDcKgL6YWScQQLqM1vnFB",
  "key21": "USTmXfqNNLeJsUWQ5zfnoyFrZ7LdSD3AT51RbxCyKABbYwQLqpNJfGwAd7wfgEKDMLTNbayHUMS3txDf5AVRiyb",
  "key22": "5B5QKU7bCyUHorkKcm1oLF3S61C8yWEcA6PPwH6pRVMgezdxdq6HHwi2HRFNGiPRQBQMEATcAoamKGdN1rcZmzfF",
  "key23": "5gpt9qLt4rEqYKYGUFGhDEbEjw4B69xCh7cmDqGJr3nZcsDxobdsFteYKhdqS15tTnhYzLUXmjTaUK4vjNDGxc3A",
  "key24": "2BeWk5LqD9htiEGS3nQPkadX83k7Fc2F6PUR91jXF6KJj7aZGD98jGUG29irPAL467qTe5eUbQD566dj3D71ihLA",
  "key25": "4EimTkJpGp5XURf9SEYv2qQ3ph65QbHRMKU5woEVADXgpQnUQiipHU4ak1Bhb83hidK5yqWsHTkqPadEuMUfUeNQ",
  "key26": "44FQnJDqWDHjmFYs2tSWC3Mba8cWDx8BhBSDsG6UVxXc6mvCpddMMFUH6xM5WJQp7bNMKMqR1yb6nQsTiGE1V4U6",
  "key27": "5WqtxLqXZQcPAwQtqfkXq8zYnK2tNQTy1XQB1cLbwumJfEwkMjsGXZwwUceGccb2y9p7kQs6uL1fWPAvqUnotyQD",
  "key28": "2UE2xCBgvR6WuHpK45zRbfFix7Rf5SmY3V2wY33SjfLgpFe4bugBNCwj52bvkTdGdR9dQMsfmbLz8jwgzBdWL954",
  "key29": "2BSxbyVvv6hK61w1HzhGxVqXC13rV5WV2j4Tvh2AVamewrDrPFCm3GaAkfjRKx7QRZT8Mdnz7dHqvPBkoWsfW2zM",
  "key30": "4MgDEWTxJhuYeYpYXudT3xvd9GzgmR3y1QQouMDimVwbUmUZMa1ptGiYghhR7AMWmSrDkMvdz4nSpD7q9jTtBzbM",
  "key31": "4G3fLJ12c5JsLhGrLHaagz4fVjZjvbtLkz7ECQxDYbNPvDoFhrguEvME6jnU17sva1ByNqVuWYpFdzjBjWmxNYVX",
  "key32": "2ZKfhcrJGyRvpirBjmRsbHUdt13uj9gWiNvygjsiZMBgTwLam9BMTJauqPaJ3zQrQrCxWPLMcRoxxoBtgTBPt6Yp",
  "key33": "2BFMLHfeTrxZi9LUToA6BVYWWBZNEBts5x1SZqYvLtJVumGrwYTUv6s3j7mcXQqvEgtFfFG3YGmnbxiEYiTAbUAT",
  "key34": "2MUHhDKTJU8tC7iNFnxNbRsTdjJL96iobA781AKGRMhKrRwJhtSwiWo2S1T1LD6Hg3tXVL1EKLj4Z2tFZxNo7zmM",
  "key35": "57qgew2Hw33EH8x4w2UrNJ9sVLtB2Ug11Wcy645ueCKq3VrZnxxxf7WykHeUV41dedJZGuYtc1ZWqAG7ncgnVoLc",
  "key36": "fzuAw9ZSxAwyPF4BQLAc5SEFmTyHJhEmfAQAp2bgntKDxNN1G6vsBzAvZWdGNRF4zSwqtuMmGDi1HJUic1ypZto",
  "key37": "4np1FeXF6V4nSEDk7LYnn6aHF66FbG1T7ZdpHmffbx5ravsWQLFWwdYoKjp6KWm5QZ5VqSZc4De9X1tXDK3zt7WU",
  "key38": "4p5YiSNV2vTDFnd8abPhHYbhHSVjYNCMEg1sZ2orUJgCHMzh2hPZALyJc5W3Jji5xAEjCiZ7CZfGbHprKfUhaQKc"
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
