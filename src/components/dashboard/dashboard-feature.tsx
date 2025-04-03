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
    "3tmWhE9VpBVNYFHtZzjAGiPXvqL2zTQJUjaZQTH3Aun7kqH8XHNs3fkwumiF9B1Q2CHPfku7mkwo21xQPabF1hZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q9LQBv8whNBfYTmQtiJrgXE7JodgogLMtqKxtcwFiX1riHi7b4ESWZDHeP19XnfordpbaJwyBdNfm43UnfZJcN8",
  "key1": "4QGBfk94qzv2SDNjFvEX7VuQHaD2TGML9ErVXVyRA9HsgZTsiUM9mXmmYyQTMsrGmK4i7ohCd9cMJud2CCDEQBFV",
  "key2": "3fTmpfFZ9uzkV6pKJMfmrYHiLP8DcAwSVbQYeCbu2fYuaHxTLDJtjgj5CcmKNXAKXuvwqnVJGBLtkdaQT9sR61PG",
  "key3": "5HFgVrSuZSq2JhrkS6uku4jdnRjEB6C897oto7zSY5wSpwD3D13wAxHf84iMKHpCuQtBMDiEHj9Ek11W6ncdC8i6",
  "key4": "57vuGeBB8d6enKWvBhWEhs27oqYXkD6EQwAViqGstnhqv63iAyoA21LYvH3gbdTc1tkDcW4Z4GFUsJ1UMznDbE1q",
  "key5": "3XiYRp8a2ukxQYHWXWm7f7AmBAm2vRXNfisAJ1Yv6wKKktcf3QVccFtvt5N8DAosvzCz37LQrMCyT9qEHLCtHKt1",
  "key6": "4g6h4V6vx6S4pioGemJTkwXtzaKgv4gktqX3L1nBvBpDs5wbq1e9wAGLyrAwzMa3EzNrgy1JtPFqor3hSv9U65ZA",
  "key7": "3TZtNeTd5Ti6N8j9usG2Ka4CCpBVLpyH9k6nKWvqRUxfYsdXLim6FDjoDRMUd1irVhUmhuUY8sJoodHd9VD6yCEy",
  "key8": "cz3ug1CJbyke2hKjvGDnofUqnv7UDVCx9Q5YGNmNopVhHChMRJgWVsLm38KwhfC5jatb1ndcDf46DtyTGUXTAKU",
  "key9": "2FC1kaAaW7kF152v2AopfXsTGdfbA95TX4FQ9QxhHqmFYkv6FufBrntY27ZCSMKfis8Nswsa4rFD7nb8PgpiB8u7",
  "key10": "46XPvNFE3XThnnWB26GAd9KHuoqS2TffUVSsrg6j3qzMAHVpBZzqQPYrvqmgiGZrpJ3hw3GPepzXg4951oEg3mCD",
  "key11": "DGbqqLYykfZFS6V25yKxMKSXbYB5iJxMKPkxmY1cmkodBnMs2fyoCATaD85LK26Qact57c81dxcMQ6cuKoPPwnF",
  "key12": "2pmttzJg9NuMDU9mZbj86Ayv73ks7X3DYiZpd8FzggCfsSGhpZxbZjqBMtQkb3cmrACk8sREeYtDTfZ4oYNRMv4T",
  "key13": "5f4zjq53m45ZZFvrAzbXqEU8XkpZRxhNkEmrg5fCKWN8eR7ZgCmsnS7RW9ALuVqiuySba3WnmN6kyTm6jR2EJP8n",
  "key14": "65TqueqDrTNMBZxpAbw2K4e2koDsD5CJEWLikTjWck1aeER4EHHyRFMN7x7kD9DknHcH1eT7RLffKwA72CCAfPA5",
  "key15": "5X6a7u9JmvsVTix4BadHFP3jeVdftFF7eFwG6crbVkMBXGFbMKyuyf6jUdM5FoDBwiTRk4Yzymy2qpaFV64aNtff",
  "key16": "bcq1d9gvV5WkptpY7LErVHYpkJmXAAT3FPhJynanwEGLfnQ1EF8rFoxHgu1WPGo18yS9VzCGNM1BxSn39dkeaC4",
  "key17": "3msZiHe8B5i1FeEehWfXaMauu3crKkdHdcCQ4YzJmF4kYaF9RMfgJ9qFf73QnAzth1EMuq7XTRtw1wKro8h1xww6",
  "key18": "mMRWJq9PrD61tyA4B2aKnBr6o1ifb3twZ1St8HTaHddPfnz21VzVXVD7Lm7Ebap2n7GvKnfEtN5DDk7gtfkNyAL",
  "key19": "ub4ccveRwziARbJcdZHqMjRPqTcpnjR7V7t7ymD42kopMNRNs2cwu1zvJD7GnDqHSNFfo7uExLj2xAiQfk75g5P",
  "key20": "2ntMcTtNmqittKUUTxbKwn6AbSB84t3UDjPS97SxTX3FTmQMi7oKMSqJq1ViGXRtFnmMkUPoYe4m2QUuQAzMi8rM",
  "key21": "4U8ymDHXch1WYQ9qeCcm8Jccp2z7Di5bJsmPNfd5ZnFCW5wZFxJHUZBmjsRxyjCLFb3bccyEDpr5Q73SsCWwxNHc",
  "key22": "5xJSKavEjowd3WkGY9EhS6mfg9CodHzhVhCjKhRry5XmkWXhaX1QqvTmFYtsYWfLnorgizhRYdFHVHENj8eryjUN",
  "key23": "3kBFxaKSSGv7vYFXB2CBijYBrEZJaUF3tX388ryBPNdS9hi52c8HaWz2ajzRcNsHCiQeMHNBszDSoJDoC7WZV9UX",
  "key24": "3yFFdzrJ8kDjsmSc9u7hR3jBmdZYKypRGBMN6zGgdXJRTxaQTcwkoPKAgD5W6mfWVHiDeYZonbJHsXPyivcnodNn",
  "key25": "395AkrGBgF7rZjKD4Eaf3kcBTjc7DKYSqjNjtwDGvqQ4QBQt7UAh92j6eorXrJz5dQJ2PiZqGoFdP7Skp74ntCAb",
  "key26": "5k1t8FxRSr9nBuq9ybHzQZ7ybyqVagiAyHjqAFEesTVtBQn6tvMnp2te5adx8TJkDjrb6JT6kySXnAT5EFLtdfvU",
  "key27": "5r7AdbScLATLcb8aa1qshgg5LdadScEPJozLhk6KaoBPoCTnVdTypYh4PdSwcnBinS1MvtvVLw3rTiwLRdfVhvRC",
  "key28": "iq1kDhBU59Pqtn5yJYa2xjBQTu55rPt4GzYw9Ap42p1Q9faHumjXyEoZtSow5HDhNTyqQdtosfvhtfugYxkHbqB",
  "key29": "3eZQGbSVNpuiPsqrPABgQEJVLt5PfRjuoUmptCcPDTiAc9pTd8k7kxRMTiLQuTBUd2m25euRkhmNXEFsWQVkpDgJ",
  "key30": "55kgmX3dNjpwz1ZgTPN8MCVxxSc2P1Lnioc8YLVpKEJGK6ajwRLqnkW3bJshZogWoocg9Yy2iPAmYXnuQuah3bKF",
  "key31": "5ggRBoJgKqsoH7S618nz4MziT97g7fFtsujobg6XH8FeAuxFsL44uEvnTK5UYe1vxgr5nAT1ptYax36tg8oi7ULn",
  "key32": "2Vh4Rb7Xx6hqy2Ea3wmWSYxpSWXHZpzaWn3rVhjmzWNf3MmF5cagtj7JUZeBs86dkSdKBccmGv42oXhAqbd4C34r",
  "key33": "3XNvQ9Wkxb1njUjGurtGaZMx2ZGQLGjHPbVjXy9Sq2Mx58PFX6z5zhm8Mz1RU5wHfxjFcxPMWLaFp3yYY362cPLf",
  "key34": "621z4hsKoLaMyK9UV89wWKiAVecmr3Gq4yK32yYG6RZ9P8s4WqcCz4JRNntaUaQfvC2Cox93WAAX5RXbJQyWawwC",
  "key35": "H5sGGoJobNbnrJ5DW8pZqkUPP2j2KgR2iZ5kmqobv1iiVjfg3A12HG2oN1RZMuWPrWALzvp74jnHuJwBo84xGE2",
  "key36": "2vw1FgmUxicKECiw8KDiuNWSwu3Z4d3MnUXPrVGWJBfae52SCA6vcPPJ8LyxP5iUi3Pw2WbMvZ8vyivWg6XYKYyj",
  "key37": "4pvBXdqze4o7ZPA5FsPriZRq1f2uPoKb3XemMd27KEHeTwgr8SGULLtsdC6NhiFCHa1upPUvZCxb2zYdUKG8rJYN",
  "key38": "4HBScpsEURbbF4LQgL3gfaGqNgWNGJE2BioNfEPmqsmpdnWyM7RSo8dc2tsK7oLZ1utarYZdjC8jdm7xD8vqYQy",
  "key39": "3WKdWVfHEZ4Dgv9kPXEeuDk58U52oPNyGfjniJnYLDAnUqExEUbS6pQUenNHX8RGki9zQZ3pLLaFYea71kx9gNxo",
  "key40": "3QnRQFjE7wRWFZ8zxShh4vwwodZUKRiLjfjx2ExZ4AiJ18qGwPTCqAWLeJRrSUSdPtbpSYVSUgHnH6FerMwpXzEY",
  "key41": "Vxp2TpwPaMttJPCd3qqojUxn36xYVxf2QbpJcSVbNtSkzo9npBkjPmF3Ku1NCEVDTr2oWvr7DX3iDcUFJRhEGzS"
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
