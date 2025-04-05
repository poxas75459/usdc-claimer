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
    "5fQj9TSUXRHs7xtJ9B3kawpEVPhZj6hBhNFZ2vD6UQZHWd7dPrfMekZiuYjnpm5F8WUzRn1H9wYjbM4M1Gg5GWcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZFTdsECG8xuQqU5RCC6chMRKN3woP9gGtTYBznfFsqaat3Ys5wwuv8HqnVQRDT4pG21PyKgYbANWwAWUH6gB6k",
  "key1": "2ogKY6E7Y9sT7xJGQTKD3GxbK98srdYYUPFrH7qYySBpeEPL6r3qhvguU3d4FnXPr9PXTDqnp1qCrY2ZNpBtLSwV",
  "key2": "2Nr8rm5dFvs6dU1Dbi6iaPRNEqs84sQH6Uut4Ls9WhVbteT8qv2H53DvNxqePNBwrLoebd5bW8xUhVetZrgLqWex",
  "key3": "2H4mpcqUbUfFRKtiu66XieDwfQeju5oRCxxjVLwEeZjLYXEavmzgS4b9VscuQp96cvkBv4WSEm8dp8gPFvaZvGgD",
  "key4": "mzj8WSkEVP1xFkFvkkZzR2Phq6tMMWfWpqoUpafdEaCFWEW3b9yfBxK6wK6TMQDyN8zygvoqzAzsTvJHyLLokHz",
  "key5": "22H9zLwP5gUyJntA2Ub8QHe1MoammtQSvQ6s2enGgcUwTVWXVNTtcM49LkWK39BFo49vnM4aTYSxnMeTtXSo4nwW",
  "key6": "2ncZ4c6HrKAhUr5zcMqzd7ZaesMhd9EhfeHaTUAcjRd1f6SWE5t7KwRi3vJLmNjoVbGobZuvXC8wvydBRvamDMpq",
  "key7": "4weKKzTNbLffPdxBs1zFLarZJdZ9bScackFWdmVH5W9TLYbxztqS5vCVKKjo3wRW8CCcpTq6KeyiBA6gNnMnyEeh",
  "key8": "TuQHSNsZZHZbPNBBnAVgro8KWNUm4CxV6zuSdgVxHJ7zuVG7N946q2csQisD2BYmiFojznM4QY6p7GFyBuzszpY",
  "key9": "54THFtZtEenj5QPUUkTUGPm6YhCMLTNt7dxNHEDjUeMYuX9YNfDQVXV4qm5PwYAFHy6ynR7G8BvRa1TRxgG2Vgif",
  "key10": "36qoDTqQRxyAKwuTcpYmGsey11Z6XU6XoENCkkiAj1VYHgPmPCSiPJ9HRXFEMgKgbdGyChiKfnFfs9m9e5L5ZiBs",
  "key11": "2CWAZA5WKtFCrPVMf3VsvzLLZHrGR3jsqdxYQzjqmYUpx8DGQMqX7QkJYSW9xKeEqEiCrz9p9uQZ37xt5Kk7Xk1o",
  "key12": "3breiKj33n6wkpczbHbzwLsMEUVofrpVhux8n8cWf2SMiLeEQzEC1k7jPLo2ra6J5WZ96qPyJQmAG5SHEzwh57E2",
  "key13": "4DNKoVE3rRQjVzbwvxmAy1rWHDFU4edqnUBbtR4193Q3teyd9GkwYi1gdNsLsCygNq5uKYUrwQDBZXQncyaWYPjP",
  "key14": "4TrudLmSp2LvNmvJjpfPeXvDsm8UPy4B7QGzguKdpZKUFe73WfLAuvQb8q8v2QNfT8yo7RA81g1o7TJXC3adey2v",
  "key15": "65guEMiGByhUXTpDJxC2xAmhF4jkTKRKoDWUu47XbtFyjQexRwQnLcePJZWbwiMcdx2H61JEYdEmXw3KcG12pCYj",
  "key16": "5xc7mXcmZLP5vYBBH8HHVfAvG3tMTMge4zyxAz5hPUXggysqvgnup9ywaH9FnoqFs9R5hvqQ3dnJAXSJzRkxVswu",
  "key17": "bdDgXFNGH1tTcXWSXtHoMPHCmZLpzB2rxMeXv4YkhK4WcmTCEdVHxKs1DGPSA1r5Xjsoo19gaxaNkdKkx7UUFKb",
  "key18": "2ykUZQyYR1fN2KA8G9iukrnuMptBeGyR135CDn6JF88dj3tH32hctxr4vvaSdkHEt7kioJqgoRbgjUHy4GCbmzH6",
  "key19": "XehaYpPhD2zNmUijRmo9djEfFcNZjmHY6oUENaamFcY7aJ5X3AjxCtLtdS13C8qg6pQ83WA5saZjQpT2j8jMrgw",
  "key20": "124qBND4Ezd63h9LZSj1TZcucSYtF87Yh9Bxmqv9eXYr1cDptCGEzg9R9GPoBjtfDSWtgVtU6p48EXv593836pJu",
  "key21": "67PsdXA9hQFFzUA6VYj7uC5jjZUuw76pvshJcTDQShiKo8KJHLcUKwn964qrcX6e9GitCYsxpJMPVf5HM5wxq2Rt",
  "key22": "23et8QBzdwZoiU8vNDw2pEozVcvQo9NVeBHhcixP1qfPnss7rFxwUdrtyrR9nPnCZEhTqMC8omHpSnrBFeB1GcRN",
  "key23": "2aEAe5VdZAwzaqm87awFvDZBK9nggpyBPsMZXPi9wJiqtM4B1N9FL7EDm4uR9bQEcKocktQ1k3WLEDhq1h95QmHh",
  "key24": "4KHZ2MgTZ3RFMcTgtiafxE4jSgwYzVLjMW5z4GkTesRyKbRQaCFrpE7KgLJeZHk4n7FiFQAqtjbgu7cgyd1bPSi7",
  "key25": "551opGp9Bsv3phkTULGSHFi5uXPyNJghTtwspzEzrJM1un8woFigyLZRZf4NZdvxwshvZWLNBo8c1gaixtCawT5q",
  "key26": "3YBDZC4TBrTZdCkP8AoDmpXdxQJYqBXHUaRkQVzwiLc7YttULEa7wcNxbfPDzif2AYnMVuT9T77LaRXt8sJ3pJAi",
  "key27": "28wFYrV3pb7QH63yYCb21vDRsnHueowRcEZZ78kf5TX5ckV9yXyhVXhGJbdii5U7ExhJTFXMzVzRbLkRA25uQsep",
  "key28": "3WfuaZ7d9LQWiQtH6DwEjPzP2UHPKdyEwficebuht9nSAYG2axsJbrEEBmTxLQCNUVWd9kwjcFBFxwCkcZpBfpf5",
  "key29": "3zwur53SK3uebNLQpqKLWxFUSxprPwSvGfoQuQVbCUH9yH98HPJbM2ML1y8YLNyb1ZvCCzHhWut7ySktnWNasrQK",
  "key30": "5k5nkpXyeVRpXCJVaRBKR3oz3kQjb7yY7sJBMU2VdtjmnAuBigkAdCpRd4fE8uzhWNuoSzoSrGm1cUTwfhuEXRh",
  "key31": "5VGkzzSwRCb6op8eH4i18MniHePLanUyUvStv4ZNFzkBiDNJq1gEWs3P8cdZV1vYKvSnvHFirqErNALQUkWpqjVo",
  "key32": "5h4ThXd9hRYVjNR89amsRQWcdnpKMzMR92G9qmvHSReuoCdVUtcNpCfXKZNnh1Vev8vZLEQdZxRKPg1n7EkCESMH",
  "key33": "4RPkc3BHpJoZayzEA2Mpwtfr2iw44Q76MAQ4Qr1XaFWCLHPPuhdYPeBFcHuiznXddCVo18jr7M9XtCrnJXqQsjLU",
  "key34": "3m2fTzSfrkLby2CrU6jDQRPBP4DLVyWdcHfgDM67vTgcNqnfLc4pgLnyiTQUUyvLrFhsLfRoSQ2Mav1JPa217JT1",
  "key35": "5LoJiqKbY5FtrSenVUJuvpxvnYaGFyETbBLxZadet8cXcK4nncQc4BLpCqfbk61aKd1TiFrzDtXvPGfQ7tkyrSt7",
  "key36": "KyZiQskyj9M36pTEK8X2KJyDv4XwD5HG9gM2R6mEVRuVZJUVepATJr6H8nQuNQCq19yuVJ78RqoWkAKyXXwQjmg",
  "key37": "63q5fs4tutE8ntscTfuhKoLJ5JnmPoVpvy6LAY7Jwoa22QP5oGwiZWERvsE4zPW7FEaFKAYSwCr7r64WgRdhTusK",
  "key38": "2AxEcaeDyxWC6K1NYGsDWa3VoW7MizovzNhXENN67UWQNQ4EpS7ewosAPiwkUQ9iG9RURZrpbgbXQRjFMcZbbmW1",
  "key39": "24LuGu37rLJ6Wtn7KJeouxagxzMnNoZCJBTSSaePWLq9684e2xsqLiiPQHVdT6qedeZwKrQNJeBVY1PbMotVqZoV"
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
