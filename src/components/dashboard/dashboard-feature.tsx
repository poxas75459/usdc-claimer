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
    "2ro2AJL4SPA5WRWiQbFdThisa9JDpeEahmeuLS4WL58cEPBXfQ4B2fYUYbApHRhU19MMnh4ad6q51Jo6LuHCV6Pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Nj6zuzrweDrWjjSvapeJZBijWjrVFA1i28hKUJJJ4tq5ksP99D5vx8J35iQNUpusrtG9SHQQZiCQwWtCdUvxJN",
  "key1": "5eh4scdrt9Q7Rg6MCFFdriwgDUxnRXiPQ34rp3K9dmGyoPvhu6FjCdvS5Qn6f3PpyWHapisHqGx8dsNs1rTg9CEx",
  "key2": "3VUfuGLeMAKWcDYW2cE8YnLyynXQuknJLwEh6hyKtTjC6n1MVLPH292F86XA5xt249Ss3mwfwwg516jxKamBH535",
  "key3": "5weLQnaVf93D1SL4tWMZ5UfQhPUAdXUf7QheTwQBhtir9U6EvG6VMSy2C3kKEKd4wn7EoAR3cRUaquHEV1yJw36E",
  "key4": "4iTJ8K153dpJ7gPo5omc2QgZh9JVV4Utu19ktT86jfAtfYkBUoPKyffvTKCGHdrVsgZCgkr7kKef5geDVu22LAgS",
  "key5": "2iLBvYJwZ7wPZgkmzZq9W9ZAZ6jaiQXQaDKo4nEbqLyoDTw3B89BVAGJuDw61org9g2cFj9tZxVU9vkwfWM3Heaz",
  "key6": "5NV9RhZ2imr9ywMdmSvJoJ4i2vrMLsUdYpvdcpTgq8sxRPZrBqed25PchSeFmGjQqvgYqhMintAte4bzTjob6C3q",
  "key7": "3wF92rkxB4uLzMT9mFqzbWaP7icRYzjZuSsvtiaP1XUdP97vf6PkDgFpfFPntAzFpcTvK6BRiUh62jRgkZU4BhYa",
  "key8": "5fomB96xgu8m899ECDVNaURC2G71k1kdKTCQdJBamMMwLP7A6qyTQu1Wc9e3pas5RGdvuwssJLJALxh4bihEccdE",
  "key9": "36sB5bVUyr85SzGG8pM5bdgpj2BhRDjhJug42LnxipVm7PBzVbZEUGvGaWoam1R3RK2tL7YEwYoAEZhvbtLMQSv2",
  "key10": "2ADRZYpeYHvwrAKNeC5DsXMaZdJezow4YYafNjjMdEPTA6Rpmfb9wKFtufuMP6jytAkMQnmTEzsqgjwfxVdVXcfa",
  "key11": "4BRrQ5G3tsJ5xPnydFrbJefH8RERuKb86trbFKmFhnqvN3824Yob3VeviCLZdamyM6WxajsJVj2MXhsEj22nuRyF",
  "key12": "TddCpn1TrMHhBL7iwkoYzYfC76ujSZMy5NjaPTnSUqYBHYZCeA1YK3xmXzBTiVoHL9Wz662ngZkGDtmZNtgVJSw",
  "key13": "hatd2iWjg2WtimEKzu1fheSubmApqTrDnbctD1Y6vmT9Jz6NBgnikFwWfiMHGh8GbLT9cid4JmZ6vEgZVzNVKpG",
  "key14": "2bXPrfwqee8mufyGG7JdeuqoT9A9gngAaN6nQGFJQuygXDzCXs4oPke8yy7m4sq6keHcK3fpUJMDDEnNq17xuFnq",
  "key15": "4npP5kaJHysyz9kSzA8D5fBNucVF8QkhmH5LnHQxGbNQBcq8pvz56a2cXPXaTmYvzN9eMR6d64tfbkWov7mmx272",
  "key16": "fz6h8fEqqhHua781vw3AndV2L1dCwRjpntoBjZKoCwzFbQMpkdBeWT9f5spFod76zhPhCiWYHZKAtih3JMJse9m",
  "key17": "4HbonwQy69PNncUBzxfEZ6jMJKEhX92JZhb8WbDhzcWU8iCVELqxDNuF7xWBwCmdAbgtb3y2rgfMc81G2zZxThmS",
  "key18": "61Ej7iz5jFqzvdiqmav6X8AExYUT3Z1Xx2x3PeD2kAiLmqBBy4wzGgHZd6bCV18W4Fr3g1y7FRYR2T11QwngTBRc",
  "key19": "5DtPm9vLaneXUShbMkW32PJhRpZTe9XBXcYBePdnQ2spzHx1A2uwPHZTK8z9DQCRLcVNPtmvZLJhh7eKkcQxUr49",
  "key20": "5u1K9qhhCsQ25ygCi7sSg6Z36aZhPX3j6JKCZTYKw5svfPLXj2K8BGdTN8jKJzgJrqqPojAvwLY75maoSn2ZKP1b",
  "key21": "2uEZcJGkJuMb62mdSwGp17XnMsF6AaA939Xwpirunch6WXERx1ZnToQmfv6WvYf28GEQNZUYkCuQ8Bev5bTL1UT2",
  "key22": "4JxZajMjmxmhKUgzHkd2QaDcDmQxyJtWp7Cw1vLkbGyVHk5qe6BWV63SHWu9YiJPyTShaZ1UKEpu78V9q7TnGrcc",
  "key23": "4HJbGyvLPTjJURCf7ENhLr9WjGTGwKBbYVKaRQ1MgteaRkUaBeKAPJv7aQfhcYmsQzAQyJsfh3u8hPgMSsbnT1be",
  "key24": "3nnbYmguE32UwKvY3rwkyBdkN45JVnqR2ZAV5HDP7vgyN3VGfdSrgEuh8uoREqsepZupwLU1GSVqEpgYDtEi8vMS",
  "key25": "2K9ccmZ9CeRWtodgY5rUc19vEs2UBnSHneYZYPJVHpfthJZ2ocCscVAy7VBvZMMhZnt99T161L839nyHbxmjeURj",
  "key26": "HsB5WLrAx8Vk88it2vFtn4abwzGorrTAZ9w4oAZgR8uuf4iWCV2UmZbYjyGneBppG5sKLXcgX8xeyAvDPgTxKZb",
  "key27": "5oCwEGmHJuH5EzqGXgq9DoGd6TaPiDPnU92X6zYAYr4g8V1w5eaMBDpbSFT9taGmBxTrxFiaR1vVBhhvn16HbEne",
  "key28": "24eUTMZoqGuTWmavvtmxYrn1NpTWn2ubTxdCB2hR45E529fuUMQyeoHHszNsCojrqpXJPX1wwN3DGpEg1pXwHpi4",
  "key29": "THZuHVVvTb7Z9gmMZKXtWiAhZ69U9SG8AqLJhr9pg5goPy7zQuVj4ERAT5rJ9Mk2DJPM7u7tbTcJBFsQzopHDuV",
  "key30": "5JzgLvn1HGXAmo7yHoZWPCpKaY6cbu6uZWuufSgWT7vxN6ujDibiBnLRsTR5jsynmhcceAduijMrX2NDXnR7Gfaw",
  "key31": "vBxw7DoEntVepiCUCtDkL3BL2mkbjr4nyN8xa7d4C6hKEPA6YPfU8GmH1kp1N9vVLdCYwNeYs7UjcSKHFMuQnPc",
  "key32": "36zDek98QYDuYVdqeGGvZehBDuo75XkCD5ZhjCZfosrqtxT2JtKYrJ2SRUwdMUaTDu6w1yrEdpDN3EZ1AymZgkwz",
  "key33": "aRYd4BJYw7FfEFYLbUTecmb1pyb151zwH37uxKZGSPeuXJ8Qmy3Xy62fBDNdK3THqmMB7VnfAnNsB6zjDCN2RNJ",
  "key34": "6Qz9yZbfdfYnkZpRVnxyZxNMBMWehGUMTfoNAJnaEZcCEhjwXQmx263oGD4WNJx8Mjh2cnejUV4AEupeCmFy1NQ",
  "key35": "2fz5UD2qYt61QRWo9MJJYXVaf8TKQkovKgHWGd65iPpL8eSVkoC5En95RVBdSoyYSL3RvgEADabgQEC1gaqxW4Dg",
  "key36": "34e6cRsWtQ4fJJKEj2AqPECRaWG2VPDPfgZN6L7LzNssnNfLVe9eNjZa9tvZyWytAn2qy36wvZerciub4zMCYT88",
  "key37": "3jwyhuQRJLCEhdRmRtabjdYaWxtecngmtrjk9jYZadGQ2FrS1eGQ3nBWnmQB285QGrzufyPNTi6JPRK8yE9zpBf5",
  "key38": "2FoDUAXcF7cjCpXEHKeUPNf2HLgWJZQwJZY7Vp7a3Tii9nxSKam7mVorXobmqqRA378EXwbPEzcsD48Cv1bgcXdR",
  "key39": "4UwKaKEK5jQ3WmF8pr3xqAumQiRZoSaP3nwzpKhN6DqfVAmsxwiLDWcPhbTUETX8GaZy4r77sN4tMjtNTDKCV9kH",
  "key40": "3cPPgyTV33EKUQsbumAJ6KsvqrjRFrPxKShen6CcNaP5T3pS4sZ1TCkLkRFLKygaqjmF2PNwdemQMTR7sTojsU2i",
  "key41": "5n1kiMBYqXR7NbLGJsnk8SkM5DHdbgWr34JH5mFbPSLC5AKTKpUnj2N5dRZSkPgk7GzwcPqTWtuRiHim3ERBci3d",
  "key42": "X9Bwr5KpNhfS779bS1mjjBtSvGeJki6cRAbi3eEQSMQYPDadgmpjB2hT2Rg4qa2bDyGT3HJfqTo3gvspW7VamhA",
  "key43": "2DSAu9drvUzQQwCF2Wn9WN7d9L8obNTJwFcFEqSfacfou5feQvxK1hofjmyaSArLYHbKFLv6aHAkKp7pXgM7Dv1j",
  "key44": "4Aj4bkaXxF8vNJRemKNMm6tp3wgbr9v2mrGTZ8xcKvHPP3v5nxB5RXVhQAxiRYJXebJFZRmfWLeX9irZBcKJ8BAw",
  "key45": "2M8n2iC5rS1cK6FZA5aV5vH5aQtAbCfd88Mkz7zMxFsfwzddoE8JcJpNUodGrChKApvRPNfFFaQxAD27fXzUKaEw"
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
