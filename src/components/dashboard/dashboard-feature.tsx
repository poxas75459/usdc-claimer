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
    "3VjhuAmUmxgmtkqVQj96EbYwmauNf2LwEtCvSdTSx8jcVoxGPr6mszQ6VEUB9QZLgvGDXfiHo2EWfDwwEC7D9o1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dAqQCsZdXBNXFk7gErKBZLbPssveTPCCxmF2s4KT61kafTFwViFPgNUFJSEPNbKYX7iWFNYMer7UUwYcrsyKFXR",
  "key1": "2WMzs2T7pZLAdchBacEv3PzQ6VGnxZHV6t2LC44Fss51S4peCDDbFeE8XsnS4E5TyygxoTRmTBQwdZPaqfV57i56",
  "key2": "4R6Ap3drNk8998wfoBic5yeDVLtrUJfpuNRfMhy4dQq6LezahPZRscPurfiKTwnLWuEa2pMrFB1YtiK3AZRC99ef",
  "key3": "3NEHVeAm8yGjKjDAARbqtAz3BC12Fj4PB19hJPs3yaCypzWoF9t12PRpqkUhrE7T1do682STSW6qZ8WX63YuEpGT",
  "key4": "31z8vZtkukyd4WFX1bXTtHN2UiExoxGQDzueScogasjxi1gUhHGu74mKPrkemzeaA3R1r5xYLGDsQpRoRBksuRwk",
  "key5": "MFCCzGvzKZHgqraVQ2KSoU6JYti1UTmfLu4KWZ9HqQqUg28Edm8YNquY7Hczy1YUvCGVuk4Eq51hMn9wmL8LM4L",
  "key6": "4iNXzSf1ERuwu6o2ZyvchrkkxpFxSDajJs5psKCmsajVsWSfmHHg6XMEBS8bRsBb7Q5q19LwvGt28LkfHtk7FtZj",
  "key7": "ZXax6sfqJpets4Qwy3hS7jbVD2eZbJuN7Ljo78nTL1wE76HMegCuYCzsHqaibXEyn9CofxKZqvsAMcZk94BZdXS",
  "key8": "3m8W41Tnd2xnsMkrzmXNRY6eoNsXvG6fUZuTK3EQKhvCkassYJhZKCBAn2QaxXjxrkcNWmoJQVxQtD4DiaPAMkqD",
  "key9": "4YiRumm81HXW2cNHS87HbkNHKQQLtPoq2KvhKFaqfjpJbfjSERc9kgapprfxR2mh4GfDoRk5xrz1rUGLbeqPtkt9",
  "key10": "4HbDMaXJo8ZTKERxFbjp1tbbrutLZQZXMgbSFiHhvyqyLNXCQikPTGVrCWXuHKUGrCxwKihEnQeW1a2dPS4w5Yaq",
  "key11": "MLdostgipDt1sPVgFUd19wvgYvQnCvY9pqLJpZnLMDoX67xrxcb59Fx6r2temU84kVWQsf4imWjUCcd47RGGQHH",
  "key12": "2ejmRwVLWVFi5snr9funLkQ1Nh1J7hGAtyXwKUdzncZGyLWGVkZ6N6xwMtwEQsgApYKDqK4ZHhXgJEkrAJJpavKg",
  "key13": "5Hdds7Rn6BFmSmcfdvg2iAUKkc9EmniQVqHNzgzCRmV7akPSZYVYXdxbTwWrwyVMM5i5QTqRSUsdx8kivrLHbF3T",
  "key14": "2L2emLmgxmvaijWc5c9Lebg74wHMFuP5TCttYwdCr1okBJih6inKKWLucvip4CvtMt44D1pp7qazCqNfS77hscAD",
  "key15": "4vsUVqRyD8MHySDLpg6R65HvbqtBPNkFfzJWx4pAfyZHW1iA62Z7C5BWCzdqPWSALYxh3s1kFRTTpZaDoBXLiDbD",
  "key16": "35jstRsNVXudYeDpVYhQDK7McQPp51Sh1DwGDf3bfuvNqGw38fWk9NMQSdcZZphWkX4Zytf4EciwTB5T6aj1hKqV",
  "key17": "fmrytno53wvxqCo1ZWzusazVab1E5C1jRTTtqA95QiRccE9SJzSjNdgmZDBkSbhPwGicTtbBxjkLTcQncHc46Dm",
  "key18": "5c5XPZErrnQiHppLYxEEow2xbjexZ4S9DJNQfqnk5L8oX7zuPSyUSqM4wRAcXqtEj4iUnKWnfg2hEa7anYyAHYMA",
  "key19": "3d8jv1Vvv6Ckv6uXcBHYQ3qzu1xyFwMBtP86rLUznyGnvqeXhwrdKCq4GHaxx3QcxpJ2DwC9f9cj83bgsGhBeSCd",
  "key20": "4SnTXjsKSNwfh7cgM1zRBnF4wexRnWuTraN1WW1B7NLxXDDn1MbtLvBgmhiwnWAw9Tm8WK5XnAXeHYVJsmYESa4u",
  "key21": "3ECHV5YuVMUN2Y2t7dxUJXA13CSQg9ofLYPLm8Qo8hZxF29paWTaJFrzr4KG66G6sDS2bJrbNLhQziC6ZRorWPrz",
  "key22": "3N6YiY82iheAzunbZV4bAANp8UoGAe2qbHybZ1aZUDMW52VnxRqjAt8kdvZYiMqsj6MDzGmTiFW1qxbXGowQNzdp",
  "key23": "WU1ynxu5zbGzGQnRU6KLksCaEUgh7z5ipGFMgDUoYKL2dTxFgyUNtJ9nr83o4UzVYUTRYofmW4LKHAxkx3uMqUC",
  "key24": "5w6gneTMNkwGyvmN91jH6quafwYZAkCRYj9N2nir4hAbdzwzEBo5WttbeWArUtLUFZcEdMQ67XhedVnvVPqMs8qu",
  "key25": "4SNFaFsAQ9HET53FEbzaQQVqruuesXt9MZniBD26g73dfXqHZfPWffti2QddwjgWGUf2tvSBsRd6emhKjDESLHwV",
  "key26": "2jWdDYDFeia7jA7Lxt1nDpwTBVhGWv4JHLNgJChC9aqgvXSJExP3ZL65sgszfPWJAdZxmSd547H2as8kmfy5sjRg",
  "key27": "5aVfJ3eB91CCkSsRizwvtCx6kULrFi85MQfZTP8RejS4cYJH4rg8PecMzANEag12x7JiGnVEdYSMLkKt3zUznGfm",
  "key28": "4m7m6EMmXdb9vb8NUQ1bYDg6FtbbyumEVRV7RqpVrzYggGW1yXL3ZrwxPpNxZMgMrd8cx9HQ7rBjgB7VQ8ENXTH3",
  "key29": "2o6cWzdBRqDyuazGhXhUxf7jewTJLJLnjRCx9hcjfGRx9LQHtuM22CUxBUjDvh9qV6TjT4pLUissmKTYoEXk8iXB",
  "key30": "QKHzrpf4edRty5ViuZDfFaqHMr8oix2F2Vb64R9CzB68YLhs9rzXPGeZquepBCFDW1mRoobxiPA63rhy5CXjwAp",
  "key31": "5vHL983B17VxiBpZB75HHLd6GxkGCdFAUPTg9Y7J5ErgQzWVFqaEKseWFX6Nh3niFapUE44Br9X9iBtUNVL7Vgr",
  "key32": "66GL9pzD4qzAyXD9bFvbio8YoouFNguYEbB1uLRAfxWqyG1uN6ZVdN7NaxGM3NMvyJjGE5T3JMuW5o9sVBy6h5jS",
  "key33": "4sfiGZ9wP3aN7D6YhUpYpKJVMgpNyGT13PBg3kf9fkbCp6PZDTspSfwxb4aMf5ezv8jLXEjyVqNJxX5reWCh6YZC",
  "key34": "5kEyLxKgmRtHRsXrRiDZfr2DyiDPymxHgzWokj7ZxtSsdVpeGXNjYsYzPg5pVjj1xWeDDD1xCTMtFJozkdt1SBpu",
  "key35": "32vs4qf4J5Ct4H1i2mYRLgz3PMBuAHHJnMtd7btVHsQcr5TKivsjieVZHuzZdktX1emDgUxtXNQSrtcLQTZdSXC",
  "key36": "34FBpPMZ7p7Bu5X39wc8Bzc1tYGiv6APAduypdiVX4SFXJUdX3c4gSCyCtsBgM85dYhZYdP7tayBr5xpYFGxSJDM",
  "key37": "5EmKXi8mKvY9Srasr63WpLZ7gqu7S7Y1FCNcFwtaFT4v9wjErtLUZApuo3xxsoYRi44BJW1iBSEe98PFLzb6m71L",
  "key38": "4Ky8yyr9hsPAA8ykUKdxDDhVtGcAH577cEvCcm82hcrb4Z9JD4VswRPUbFZebg7pwSHUwbcZj87s4GGwCFbFwVAE",
  "key39": "3sZJNVghtEmBWXyGradw8U3JMGaJ7WKN4SSVih1v2XRiF21vYDc24ngmQf28FvrbGoacdFr8V3nCuG4rk8Xj6iG6",
  "key40": "3gGfh4UWMTDEqyvmbTJF6YbgqhFabMXc5XChN8nKrDCdxsc1LXTuwqruFHJBQsPJBTUu4WkaeNTNcQPbmYHH4uFS",
  "key41": "2ysxwsQGA4ZDK4zxGzzogJEjb4yeQmy2kysHVA5jqx3ScMtq67MDrXRv5oeqqs7N3aEYxjSKfmjVSkXGPvNLoL9M"
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
