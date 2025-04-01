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
    "4oH69s889AsCg3raSgjaiv1KZRyZJqjJrztE38RfvBJpHsbpokmMSPn2tzL6JsupsgACeohr59aMFtDfN6jGQ1s7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zDvAwi2DeamUDVKMX84ZxgtXP11HAdHUarCFcivD8Mcmj63LJowyiLZzemjdUm1vEvBABPyEHygVV65419WZWoH",
  "key1": "37TgPWA2DBv4zYeMjagDyk6pZkFXHKb6c3NU3XkqMXk38jv6WtMR2MB9KMdTZDbiafZyUpsYQPzwVWKHTmSycsUY",
  "key2": "4zcP4zVqc68XNUbyS4Wcy1sVxDq7KmMM1bFytxLtt1WXUbXvGRerkuXCSUwCiSAs8E9JkeZ9MTCMhxq1PH1qBHzv",
  "key3": "4J9ug363nEcgHYwCjjsqgSihDSwDjCeWKmog2EfLBxtGcLiJZ5hRs3NoKAScXhnFXHvqoQBQwt6wwde9hQMP1jBb",
  "key4": "5bwyrZtL5KxAGGorFWxKKHAH4PvotnuZHCZKqq95Jpe8NQYDaTRqnx2g7ycRuCXWRY2fp224vvtt1C9xYGon328E",
  "key5": "4QchXZftM3f32FvMEmo8mnYJLhdvyJPd3cggvgvHUJnRomsnWxGzb54c9f3xCbEkwxndJvrKzFDcq14748WB7HD5",
  "key6": "2Ar3FffBzkR5Y3GQK8yi7ume8AfcpJUns4axNcmxoWApKHhvgALc5CjRjKcEwbDchekV7g5LpD6bMu2fM3m2dbmE",
  "key7": "3QTr9qaEzXXLc3QVkwYCEUeFg9xYeJJ4Ecp7v5yPQzChbsFEyVxbY7kumwSDxgkDM8piq4QUQM8dQJbWWkDLLccV",
  "key8": "3EPHw2UzKBTw6j5eVVdgtwPW3u3xb4cZ82QeXUJKfwfhAPLnyVxUZn4n32teF73k2jFz57YF3xkmeNXNfYinpB4C",
  "key9": "5LMt9XUTUcAm8Wo1L7rTohYitv78h9jeFiSYfABnGW5m6T5uS2iDJS8nFbyd54XwnyZUk98nJier24HacS6KexTY",
  "key10": "VuywdPUeZDJeo1b5cKNThHbSjVary9uL3uYAnTFenZYZDSwRBTJABoV3eQjhhwgLg3p7E6bqdSu1iubE6tWdsGi",
  "key11": "5LkEGMPGcaaUqFMyqpuFgSiiN9ZquDk9bKpBVJAbcetVP51jS9xbmBYwS6LtZrzTvy3fn8iLRhzAYKT1x1jjcryF",
  "key12": "2bkZScTwzn4sbHZDToTeEcHrvoycCawyhFp3maBV6rD4s58qxs4XdNChFv4GqYupkzsPik4r9Ja3wXNbYfTh7ZLP",
  "key13": "3STPRVmtmyyw3xC6spns9xfcCjBG6kFVhNL6iEdBvkYVPS7PVhefAJF2NpRrHrHT16Ey6QxmbjK2JEcGwqHtgd9e",
  "key14": "4DH1DwtswvXRt4FjCTf2s2VMP8n1ndLVf3K5uMyrKLaDWZdDp5qtHghBFygdDKfsd6cYBYEEVKdmUCLFQTtab4dh",
  "key15": "2qzacwVW2ExzAQtUcBcj3BDzK83Wx9uba1EGMv4aD1xZtHgEUY8PjQLGUMygxUPfCnrJx1KqKaWguDTwKQwBqSF4",
  "key16": "2Wtp9HY8wxEJhsJv23x1uKj7NtQSi6CTYvAtarJQmEHyw3NRKzb7t7oVs1tuAwC3zefAzTrZqjSvvm8d9jnEytP4",
  "key17": "3Z8MjigSjFrVwwHrd95bK7MfrcyhvQGTKq65oJAsqs8rZKDwt1sonqtfRJbHRr8YyFDPCYBAxS6K8Mcsw6yZoh4Q",
  "key18": "4vSzxXBoVeciwnJEohWNYBW6kdBo6AfaRnZUEhrxZA2jSnJpkNUeCcU6HPgdevgWSSd2YU9irmwzsyrAn7bCiQzs",
  "key19": "29YrBZQvssWp84qtAo53bwVgY9TGMWTUBax6tM1WjZAKJjaWxQuyAsQtf6W3K4UCGVZ4qFZQJnVfktpmRbsYwM5p",
  "key20": "3CteDMcC7ZUTD6VbnnroUpUMWNqnypHQpsLACvVDZxE74omQ9NBW3HXBVpDEjXzyJYQhPmDkSoLVJxvLUm6xT4KB",
  "key21": "3Xdt16y8MfMbyee2yw7c3JnxNgjgNe1R6wPBgwn4AG4zm7yJdjC1Hq6DuUysE3e3ZkPhdGhsQ6TKWSoa55jNVAc3",
  "key22": "5M9ofjgN37nMw4m6dyarLg9Lx1TDsALgGCb1ZnbKJeTrdaHgkAk9Yd4wpnpnweP3uzzguNWRNbxhkJgp97v9j1mm",
  "key23": "KhSprd8KpWkwZh7AWq9oAXSXq5FpFbS2evNmBs5zPTckGL3UiEypkG4zkBrfuegCH4GqcZo5oxgc21S3Yf2Wqxs",
  "key24": "2BKeQqe9HXQVZTagYiCcD32TCLZtFe3BNMmPDJi4AzDgBGijyNR2A7V8JkpJYk8TqScxdKFkWcK6sEjgSsCR7Akh",
  "key25": "2TBGThp6BcAwkGXc2Z4EBM8WuuwwE8pNmJjcHr3RvrrBTyXJbbrfqbFrtDF8i9Vke98rSbiHhNE9VEuPJ8DVJqor",
  "key26": "5rHWudmtsWHDXJRr9ZLk9ZgzFYaotSMeAr9zaidzZtsyR6Fe4BZvkh8B5imPETZTZCSkGBbqQAoUepAYw5dTohYU",
  "key27": "4asbEdrxAR9G3oLAdog9ZG7yeDBUShMdDEyeQ3CL2B7J6FV3GaKw51TtVhpR7JmNWZJLjp4cqDMedwNVoJov5Z1R",
  "key28": "XhYfD8ChtXVgkHAoHRkeWXmMyu27q27FyfTVrkZFC6vTib3SdAEfMy33RitidBoepizsyxJsH3BZLKRwRS3KFGj",
  "key29": "3ptaUsdvNjkcfXPZRbypYvQoKERQucFuAoNU8payccW5UWz8dVXqDSJNqBQtXLkzxTM21qwzzyLUPWzb6ukDQwLM",
  "key30": "3h6K9q8r4Ja99BJkdb7z9ShnWsjCizYP3enQTGWknaMBfePsXwTitHW729TWwVEs5NRmHTxqakUbDSsjVbuq48j3",
  "key31": "4GUZ7aU3mosUew1wRiXoLEMnDJjkkS6kE7me6Udd88nk19gguQP2RHZ5GkpXEfjzCCFSzJH6caGkxJyost1coKp",
  "key32": "58CqxSFVPbGAqJNC3NnnaaVKjo9wosRbLbap9HfG8ioYJ7b5uPAuvbT65Xg3s4HmhDMFZPiUTQKgq7dVMb129kvP",
  "key33": "33Lj4uGB8BiKNEMA3rX1J3cDVwV4ze9zJuY61JwnzigGtMuPz17wYfDrfxtwqwaYn7yhEMMLN3S1jwTswcfkyQcj",
  "key34": "2ugksY5ud9WEsK4sTVe4GhFwtU2QT1vA6gMx8HDycnKrVErAdzYT77i8TtoPsAs75VrrxF1TzB1U982Fb6GDEmBq",
  "key35": "5Coh6tP1UzAdKvAGAsPivZsERzGsoCaY2sWAEi1rZMnJqkAFs2BG27y7DmNJ7DR5S2CLm8jSKd1AVqmPM7CqrZXw",
  "key36": "2QykbX4rAVka1AZ3VxwDrEXRaMyt2WtSZunC2pCdxQdWz6ppoaVPvcL2JjVcZSJQgUyJc9ZwzZXNyJe7ziVe228F",
  "key37": "3qxTqCnLUR8U6kDYcRrD9vsztu4HB9yzzfxqAhG7wtFs6ptsuZMnwWDoycsb7Wy2FJvEbUESBBapdTFDHVFbFPzn",
  "key38": "sGtijzTaeaqwGxEhHAh12m43GePrFHeepFFZ6abPvi88sBXq9mw7XZLU6BjVyKP7vMJWZyWcNJv1ZGT72oxXnhh",
  "key39": "51om1S8D7otpzNATujbBySAoBoYpvWxJb4SDuZr2ERufinSsj4f4orgnXcooxRSiUGGs1dFLeDpuavYH79jcNpMF",
  "key40": "2EvAShZykqy68Vp62kW9VFDUajuBry8wvkz1fEsP1aedW7ujzR21gT54q67xzwF34sXNo6FEK33CHYLnefVWTCrV",
  "key41": "4nGRmXsr25STeur6ZKxbTDSWDfPtYZ86kgRx3ABGr9X8skUfPT4rV2FVYYhrJckYW9mvRY4ECEYQomqRhe9xEZC4",
  "key42": "4P1F95mTu8UfcuyhFRzE79Q6PMS7XBCMTYeyX2xUpmzr9VTe5UnpGTjyqAmdRR5CR8evi4PiV8foqj9LJYATvRUo",
  "key43": "T2AhEzGE7zX5eNzCR9RBZUjiRRTQ1NsUen2AFmehNSs4HjGvbysJJdTC1zG8hucS6A37yjQ1f3h3G9KAwJoZyDk",
  "key44": "5A3czwxnr3ktQt5fxxxrbXhYLN6BXfLjeqqhkxLZiDVbRgnXsoVDGomaeXWckBfsFyZwoYqWmP7u4x9qksqGpZQQ",
  "key45": "4kY6MrVo4Zs5A7is7nA88B4viTMeu8tW19pRUScshYU5BhFZ1Xf52KNVVrav1zT6RoN1VRJQPWMN9dSCD79CjSrU"
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
