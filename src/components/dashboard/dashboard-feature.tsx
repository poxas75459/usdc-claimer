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
    "5rQXBiSdnMU22UnfaUS9oZfA8ihJBshRLARkCG1QVwTmzscu4kgNm7HhSZugWsz9XVdFkv28AEqkxqCBs1KVGekD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tAai9hSaj5VVSkb1kf9um4NnnXjMkZqNUMduBFpGN8oVU6bXY6pFkpyw2h3uroJ456JdUdKtUak2byZ4pJ7AC3A",
  "key1": "5FGmb9GdcvSkknpvYDjLMhtVtQ98M3sFKyDhczJboXq5or8oa5m6v2QoiBEbkyFLnHMwDPrWavV9oSpoAUcGzfQF",
  "key2": "4SjaypncFAtXu6dkn3HubdQMLwgbCkxkJRAafDu7NoWrQFuSXxSVWLt2Aj771u2KDMkDSZ1W6d9E23k4tHKcugA8",
  "key3": "3RofQNGTcwPywZ4oDXrEQkiVtDGwMLTC38hqKRNwJWNDqZBxbZFp3YthbcAjtK167xYEvXpv7sHesn61yXpDWcZD",
  "key4": "3VDw2cyxRwukKdVM4Zsi8YePceGqLErV9oo4vPnRiYYeRSaiQZcnfBptJjKQVxNcHxdMdEpmvB4iujuLPVDoSixM",
  "key5": "nBNccS1uJjqP4Z2genFJo5YY1EJmWfKqnJyFtuBxiY7t7sjAYsLHjQybrG3HAFqSggz2Q4w3tkrRn5kMt8M3TPx",
  "key6": "jWDoi8dwCKkwRzWrNkndhLXAiAG3EQ54sEF9mtFjQ7vFkiHSDXi3KBSnWPXsbK6JiLaC9NjhPdBedPyqgRQWMim",
  "key7": "5ccppXXDNrqW4dPwfY5PeVqioHLqJhdVAF2enFgJ6ypJiaaC1ChyqaB4dHQjFJwQvJYZ6mK8bWvJsXVNE1Rgc6d1",
  "key8": "3fjoLZ6qhATCh2MhvzAsNsUAbABbbehdXUmtkxWXRr642PuecRErZgMDDtx79NvKAnvRmAv3pwo2K5QDQUKUSMU4",
  "key9": "253pSKL7PztNFrPNX8Huoy3pT749s2YuSuzeC5PYLPkCNpmRgDBcJwvkwWcYrKwRbt2vWAiN3rXqrrkXXcG4i3AL",
  "key10": "4DTjxasZr8uHUwaacUdnukYxNFzjxD1x6sTrsw8BkMNeTQMsUJyGw4uTMXV9ADajyGiM2C5ZXxpxTq1rrp82NhWi",
  "key11": "GLEZhCrFZiYNVBkWvpSTCGu6bG5wd6zZASMXuefAFGHRM9iBXDn318Di2txnyijyf9uW7UHpGJBFXgxJFMyea4Y",
  "key12": "4BFnzA8rvzdkDShS1kYYFRuthn256MsVBLAdgv42QXD2Up4KvBfmYut9As2BaeorfMdNvdmmCmWpgrkjAwCJN9MV",
  "key13": "2RgHVuwEp751jys6Aqxr53EeFJKVcFKmzJz2KQyzxz57EG6yoZvQaBSgq33TX2X4eUbAYzo7u1ftn5WqZ8uADUKd",
  "key14": "2pMjbwpzZZaVsHDmazSYKSr8fRFXtastBvqyee25PkFb3iLKjXWAJYCkfJrVx9CYbS8j8vUtX7fRenPYBD1w33vm",
  "key15": "3VtyXd6kwCjdGE9yM6aKuLuVa7XdVSLjfGrG9zPBNZxWJvMhjfdxp2FbYMTbbnpFNicWfU8ABA4KnZxD3uSwZhQY",
  "key16": "55rTBRE5sJE4NHxKRXS5RyEDvmEEpd2C4t5whgNLh4XFeXAVQhpgTwUu3evYce2aBkw9TpkpCXAoeuv1GLBWvbb1",
  "key17": "3CDotL7qqjjnPEnu7LvjmHrSJZ96sg2Z6qn55Ljk89EzWkCQHCgh4TpDduPa41pvULYyBuNnGJytQ4ugc4Jk6pcw",
  "key18": "2tCB3neURiEjMexQFAkF3H5jy4yaU56E38NVVqKF7fQ9h22RystZwGffQCxpxCmkdVt2d5AprZK5brRoZRuEQzwZ",
  "key19": "52s2tZme4nUcM63Dhc2KoVLzDgrvwxL4rfsa5KUWLccBfsRXFXHLiCFWavoLuA4SSGB8BJoStUvguPb3yZAqyZ85",
  "key20": "5RsGDAuPUNnu3pSFXXiF6UctmwSehoKpGUvUsbNMnm3yF5nBmzxfux3s8VaLgdjoNwmk1waBKNMegybYZq6TmihW",
  "key21": "59AzoJSSPR6n68pC4egGKuHA7Ysyd8xYGEWe28GwA1F2iJSM35dw14tZwihvsqUMk6AYC86DNa4kx8t7zBhnkJiV",
  "key22": "4W4GXUxLbJ2intDSUoJvz2cAWrWdXnkWuBy2Hhe6CfmG6a6dNFPpwTyLRkB3k58LwRoafeVubrU2868TNRsM1oZr",
  "key23": "2aUmLGK8ayqgua98XJKmv4e2kWBtEZkdafSQwXb29QYNYJpjCyRHRnEjWbW11yY8ZWNjo8sRGNU6JRgdpt7f5ank",
  "key24": "5Li5VM5qdoV8U4S6e2HPRppBEoMFH2uixfmqJ7g5QhoP43QXkAYXgzYe2eWXT1Hb2sQnr8Zz1BD7df2tJvoTjKo8",
  "key25": "4WNSTgJstEruLarTKgkoF4NgbziwpL34MFvAhCVTm5tsZJpGUcJqHXWBVaQr6iTczv6Ck3A6DSUbVwEkgKiU5fXi",
  "key26": "2xS1Xbzb7NeEHWcGWSagK7ajDJqbGzZV7TukKkNxbCsdz4LkoocCg2J2uZS5Xc3mnVewkCLh9Qv5mJavcHsrcnU3",
  "key27": "5TjghXsdDpjK7yKw7D922zhwcrxxcF5J8Nms1oCQixFjVKMvfyLknM1XrREkGDzkzpa4rrjtq5dc4pgz4htbmvp3",
  "key28": "3Rc1B5DKHPM1xB2BSoYoHjzxdWyLP92g6AzR1UXL2ocUikzrC3Su6V6ev7qChD1QZ7UA7YVsyqkHdtPvagQMTdFc",
  "key29": "3Rg6vxUGZSSUeQtfwfcaEAkv1ecC7wrnzRkceUGG7LJYhqEwbCWv1TCtcnCjqD8zqmc3HfTS2WmsQXwRZukEaB9k",
  "key30": "tHUxxuxvhkYETF2zinhyfWR8YZbHRx56QB175LqnqbHb2SktrGGrqnG36py6LC7hcCDwATjrJ78tod9VYHdp52k",
  "key31": "4wx2whBhGC57JtsGsXy5akfataWHGXiE5dUwdfSuMyrj6yRfwBdE3dLXzdjgsCqHkMpPsJBGvxwLwgKefDbpWyx7",
  "key32": "3qcd6TQb4dweForfxfW4E3GddQijTbjsR4P6U1rrunnRxaEQdmi9LZ2zXePzpTw2EfwbFcXa45jsjxvNuCKK3nBy",
  "key33": "5b68oVfxVMRq3bh7XNXd7VgpyYBTMvHr64nH6Mdk19XQ1XsHTbgXZfrPXAUdojjc4tnsycTk82P14VE9cKJmqYqp",
  "key34": "45k3tv7KqpYmjYLFNrmXGBG3BQQJPsw35WtxcS4AfTkEuxLAFnv569XiMvDemvMYy34uY9MPTRjqVtdBh4HnxkGp",
  "key35": "8T6rTr4Y92S9rWU3QG3gUYBNUNKnSGfgR8Scdwh8BZowH6WBswE7XDPU9f7ry8V6v9EbGGgS8BCMycs38qpBAtJ",
  "key36": "4FepMQaXEnTu3kr9WzKoSX8PpEkH3BDtEGC62teu4zu4X5LgYLrv6qKckXAH5D5rSZFMrSkB1LiThBaqD4QkhQwm",
  "key37": "5PkRCK8no3zHGS7tpykRFqFwVLYGqHGpiyQG2vegTt7Aa9LkqPU7mXEoaVZpevt6qtPr9p944Gp5RHqmUPwiDGSq",
  "key38": "49mAn6K3P6b1TPMmE2GhbHDrbyS2Gyo1yihW4g9iVV7i5VM8rCZP246ZE4gvjxyfgEozUXYDRvykW8cjcxDieSTQ"
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
