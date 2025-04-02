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
    "52cWX6odSXSECEuckGiyR6f1PgYpctSt3syaovWCwHQtYoBR3ZDui3KtCZ5gHPVKxti42nw3Qut9urzmSvzYTBYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WsGCrkbN8hGSMq7G5Yi6Xk4cwuKTCYwSj5o8qKRmqDn5uRJto7PMvxZGh9w6trLgvidZc3YntuQ8j1aiqVQeUYt",
  "key1": "38MDFKYyNNuYaQcs9idabCme2hhaQX6q4236HunwHgP1v2KGf3rGPLRbsoHGhvKkDCw37gUWrrRVzUfy5xd9GxAZ",
  "key2": "48pNfTtshCo2HpGhUcNRhvkXGxFGbwzKMREVNNEqz2k5BQwsAAhFiHa1WAfKFdEdTCgZZdMFo5QUcD7wWGWxPX24",
  "key3": "3jaMRXY5yK6oN2koCcDugVv2Vf78rKDvevgyTHztyjk9GZk6s65NhMhfhpifrvnKwxdFK9DpUuxTbHVTCTDHKA4y",
  "key4": "5p5LrSXT92tJ9pmRbGgKytPmqpBJxYMLHPXSo5KEtmcvtL3W28TvSGPMkzK3jxCeaPesJo5nQTazfGTDmdPuyy6b",
  "key5": "5XrNBtPRwGELY4TKJ2Q9taeeAKMhC4MWTmPpUTV5xLip5PrZSjX5dUy3kTRJuTfSJg8AarueNkd6CgBxHAgegQT6",
  "key6": "5JRECkP1HhRVBtUzo1gepFBYDWxXt7LEgZ3nUsEdbKxtXkWYexkKqeTP1cu4zQugYWwYJbYACft8aicKMkJV1uJV",
  "key7": "2cPht2mTGoreu2NPPDfABcvWrdRhrAbEtSo8NczH6LSTMZzauX8UrxV6KJP76KxN78FRbidWG6GXmWDWPagtfQdu",
  "key8": "2RqYu9KuxEXS9ZHtj65rcvkK9PCgFXT5D8Cf7u8Qra9HK1zX3KjF7P9peyFTKBdjamTJsSVn9oMNfHBH9oPZHDrC",
  "key9": "4RHsM6wXSYdtSuKCddYJEJgy5Js4GwxwSd1r6QdmHN6mSF3VRHB3G2AwKUdeJqfj8fF3HYsSZHZ9PPpZecoif4nd",
  "key10": "4ZcdJZzpgBMLK82PU9qzvSJHdw6kgPbkeQrfSUfCNQ95baU2mfCqYVJfHYMPsYv6TpVKQGMiEoKkuuF3WP7QP6Dk",
  "key11": "66F222fR5RZDtAdKfwbjn7d4x6BvU9Zdj7EtpvBq2nHMHAkrxY1ofSmhDgqgc4zGiky8UuP6XN4cRwQYCrJ2EDuT",
  "key12": "2F2DXjC8nh8gLxczkQ6fuPrEv1HBW35kKup515nf1uHETVge9fJQAWKAJHSUpesVDE4XYh1MtZfs8NKBSpqniUdJ",
  "key13": "21oZJvsayroctvQUMoAKdo8tJSLf96qH3Wbdwwg5GfKQH8HvKeFgeEyM5b9Zknw1eXLWCQLzQy8wWsGH117kuQX9",
  "key14": "QqbdbDYUX7F2zzJDRaMFksjxK2SudDKrjQCZvNBb7aHPJXiWDpe5usAF2V5gJDFujh3j3YHv21K91ShYYbZPX3j",
  "key15": "5ai7iLnmfFhkyWfo7HbJsVQ6b8jQqTbx5iLPdMFgH7NVDF3CJdCA9CFGfPQiccpW74MrkFgQmwcnywB4hQNNfrMC",
  "key16": "5hDUHTcgJvCDvTTytkpC89fVHNi9eX4q3HDAz3Qz6EjzAi4PmLjqo42t7kgVpCBxbuUY5EZHdWVCJChMQwrFettb",
  "key17": "55iud19ADkfXq758zwZCgRZX9r9gEGYHtuuxVcURPtUr7M8n3gfNjxj16uR9QcJJuxgRF97sU6XuXKL4U9bAHELU",
  "key18": "2fhcxNmbCCgwXqE1pn7ZgQudsjhFPvYodnGzW7oFkTgdZjBnpGJmZzeaQjYQxYcfaRe2BWfiqsTLekbVeBkpYz5H",
  "key19": "mjv9qTe9JwksGcqdyn7Equcr3m5Zn9avBQbhjS3Lc8q5RPs4ag8ic5EaQqD9H1nLAB2kD61UTi9bCZ9icSyKRSJ",
  "key20": "2P57hreLs9Bq7fWUkVZgscBC49X5KN8FPRUiwB7j9paAUr9r5Gy3PRnKNCNjw7UKijjymQbhnc1vucGfoXexYiEX",
  "key21": "gJE7JJLNVDWsYRQd7dTxqYH8xHDJPTM1CXUpcqNMcR7TThkMfcPbkdSAz7u8637TdMht3oSPD8gezUR2M9UJLBg",
  "key22": "48rUqmeAWPrDQ2FEoeGt1ipRhDM5B5PzynwLbk2aStYQPQhf2p1AjSRwKLSuMURgsfg9HgKbZ1V8MhEbR9FgYvBf",
  "key23": "4asyb6XWUiRWEigY5v5SYeXgEy37CW3UwsP3VdpWdm17UBh6koGmZMhSeoNjbFqUJAxHRvbyZDaBAENVQ3ry754N",
  "key24": "3bJwKtrJCGmsdg2yxT6sR76M7pH6T4KLuM7DPdViUD42raTXHNtQnfunf1sj7tDFKqC3rvqUuqeWVTs9sAbjrprM",
  "key25": "3SLgPXTdDQuz9HR9kS71uQvvF1NZxv1j4UrDicUjrbEjZ7QGLpXeRDEtKavXNRjcP3wgNnPizM5UaxD5YNWUAMdq",
  "key26": "4Asuib3DxTB8moFjoNXR72CbpWxa98uPJpyYzhPcxxfWypffPNRroyPtjMFdzJ1cj21QSbXMDuNLnJ44SnJzpHSh",
  "key27": "4cyGz5xZvEsXeHcVuA779ywnwXAcE4tFMHm5k4LJWkF5RsFaqLqMDzdmTRQKUcceXvXkYM4UdxXZEnDc4Bp1bG5P",
  "key28": "4KwUkHHN9AjVM4DS2v3xAurkWCEdyB5N316fecjAmTd4dPGxVT6ujTe6LxewEuPhWfut3u9Tee6EcRh9mW9sHLpc",
  "key29": "67RVi2Z5oRdwU6zjMbH5ocptL7N1y3UgXkYmj2vKJyVuhzZAdmVJ6Tj1XcJoGh3fKnhWzpLFfu8LNs692LutRULE",
  "key30": "5QbGsMzP6xMzDMK4uEtC2csmVHHmyrEuB9JkRPjkAsb8hHtdS61JqvBehDMs5STUJwP8T3SAq1JB6T39X3wmmeHK",
  "key31": "4DX2y8fw1wR4TdtecQQctvHSgdoLEQPHP1emsN5qxN8fUm48gwdkwau6dqNZnEwQCN6ycJE6g9CkjPsnYaLPsWvz",
  "key32": "shK1UqHUpag9KmNu7Sbm3Rb9ddtMQpBpaUpU9dYG1rynEzwnQRkqXn2vb92hw4F3tBRUuFTy9JnAA3WLSSQrUjJ",
  "key33": "2WwLnEhZdRvgmNA8orkpBE2XSfQuwx3U8Ng4tnokBrwoi7t62oLosK3VGr74uwbXGDmvqXHP3cMtQBXWtngZdHJv",
  "key34": "66r2W5P3L7E3QmBqU74qrDofrU2c6YeWSHL7f18AP2M471QVr9vMjkWXjkReMEsM3dSjv1prRGmtkgi4DHWB7qbB",
  "key35": "5X1pJxRygZDkc2gq3LkCRQQpSvgQeLFs9z2WV3rCtk7mH3K6Xv7SrvkczKbvKrDg6YusJderC4sMPEoFwGeEutjS",
  "key36": "2dVNaVevmCyXJ5N8qfVjUTq3b85DotHrtD1PR9YBcwyYrSkD4c9SrbYBELXWCUzCB1XWA4bDCk9wWnNQTrV2Hwna",
  "key37": "2g2TgjMAHyW6ZHnBsNkhjwJBJgfuwJFZYkHvwVsGy2v9DvZVbJpU4cjf4k84Q99o1WyFtjNLNZfohBZaqCXZttfS",
  "key38": "3Cnx6RVLKMg8PFUWPbFmDiiTphc47NFQDQiuwL8wuoojM7Hgb5Kpv7quyeW3abm9dS3fkXQRuXWnHgAjvDF5XbnJ",
  "key39": "Lg7kV1bWPoHqZnWCsjmxoLUMBEDKKsLB82xayoXDcuZ8f2ZiUfyNHdGcyy3BnTKDqZbozhWdmkDhQcs2mRfMmZ3",
  "key40": "T6qDayvT6xf18fQ1ZjrZfeYg4AbCmRdxAGA6S8edCxTJcqaiUUWp8tuYHc5DKSMYa4oqNt57sVWBHBcYmwjEjf2",
  "key41": "2XJPoJsuZZtj2JXSbWLmVudZAVGc53LY1KesuTvPxDJLuFMqCRXLDCrwnkwMpbBC21LyyV1mhPtbfVmkaRqCEao7",
  "key42": "3xGACKKiKQYuct8KczCrF3tWVnT3cDpG5mKHFP4wmPbEQTsETvxWBDxCyh1YKoa2Z1WkN5rasy8P5Pkpg8DpPbmy",
  "key43": "2zEVRww16HSU3HTkGc68MGmbz3Y7us41rWXYNaWGeP3D1F1E44b24LZ7U1vMyV9wfhxJckrY1pQ9gU5Br4zrYbwT",
  "key44": "3TTskvtB7KsAdRj3mhiuSZAgEBkuaTP2QzUbuu9uNsQDxsRKc7t6E57KSYLwgaMbiYjgMWTPRqmo3U2qM52an9N3",
  "key45": "4tXnmdbJPdxWZF1KBByvtYjEL9nrUNm4m71CNvkfd6zP2HTJzieUaAxJYmyV6KGzcYqMakV5n81Z6ssx4Zf3HyTs",
  "key46": "3WQbpcNBX94bQVUjXjpScyke6EcMMyaKcaFCYwJrbSSkqYyhmdenRudV6tM4fachE2Lxy6PUXdh34v6SNKfxedZy",
  "key47": "5sSmz9yZ7FYjpTUDaRQEqrxv9c9jaLcDAif1JPmpgTZu4eBkz5kyMHftgFumd3bdqwwsMSPw6tEjDE6nZBBMA1M6"
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
