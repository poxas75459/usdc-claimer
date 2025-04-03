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
    "2ZPHp6WPebYYkpEjZcSmKHEfTEA5isLrM958qUGSfMcFZ98jhAEvdk1LnSHDcatVWXwrChx2gqSPYNuFYA9zrFPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vwhXUKumYJCM6yGnZQN8igA5DMdqbAW5iLHtRyP9fhbNLf2aBeCJUtrUjKHW5jNnN4ivPPLriRey86dizAvDxDo",
  "key1": "2qUME1QreVX2WNbBuXCdL31MuUNz5uNnddptsDwTPeo5ZymjjVcthkKG9jArMVFL1EaRutc8oUmKjkES53eRUZxa",
  "key2": "pML6curP2B6hnEc8TKn1hXewy5vCbpZP7TYVMngZpnJd5DimZeDAAWtxRaUi9C74gh919mhh736W7q6SvGZj6Fa",
  "key3": "MTyfUBQ5WVMFUFjjfFoSYDaYNWsH8DYBEtktLcaWrCoPwxYqTf7b5e2Fih9K4g4y31iTKaDTWpeLih7yKgmtSDr",
  "key4": "3Uk6mEx2YX1ZwDXmNszjN66b8D93PrLEgYrzBjF7mm4fMyDRzBkA3P6o9fLZx974wLBtAsW67aQB7SjQod8GXgRn",
  "key5": "42T9ebFoxaeq8DtUmiEwLKpL9dS6mSvE32AhuZHp8sf51fBa2ufxwRXHtmfMLjWpS3CebKZE4BiZNcLhHPCMRBxS",
  "key6": "FQ4YtWX6yQCB19tiZBaXxq9kWg1CdsqkEHdXXSB1beDzw2NSkiysdfx9fRdoA4z3nqgnrfAdwiUtrWvmvXRS6un",
  "key7": "3dxTCMnrdagbXj64e3QKQSptxuF4q4JkesfCGSrJzFHkQCm1XgbJsF9LYqiX9hFGdcZSQ7ZChP9pAUcG5woMmeyW",
  "key8": "2jzdsRYbu76j2EMUHWL2UiTLg7q5ZrZjoZSdQCi5vAy1ZZjpM5JoUdo9JE9ejSbUS9dZfXnEv6qehbsaNqSnMfWo",
  "key9": "LYd5DmWc6PWLKrd7ZU7UN3nYgdwyPo5gSnDj3jxe4yxBdTbTEgnkjNVewTyRYGpVgaUr3L7DnwfRsMGLkzgTt3B",
  "key10": "3Mf7w1JELfKGxGNbaeqPXnPaTxzDSRnEcXyesaexFie7czeKSpn1wGYsGC1JvgUqyorrt69RxM2Ek86JT3jVQYup",
  "key11": "4vH9LG8D1yPNYoDhPhByLGaFc8okSURfdgiwBH72XZQm1nMEMEHkyEAhYDYNvDYoNhN3N23b8pvZzLZ5RUWxBii2",
  "key12": "3pHaVSigqYYDV65WjZc4yzfuNwVhjHojcQ9FusD3TQJr91EiogoT9xwqRCoaWokCqtZ35r7ejhrDi4cuYBEcfgSV",
  "key13": "3egswrZA9RiQbDxcrN1jPLp8jbjga6pE9MhcNCxMUXgtYJHjMRhSmZ8GBt6LY6sKgzPu9hoewhsjfdMgQdeogwZe",
  "key14": "dwo9BeY8FZLjWsfBshrmGjudLHyhPHFyvvz2hPqy6xVXQ6qPFDGJ3a58jQ59ZaTYHLqMdjJfCtUxmnVLvXhHpMr",
  "key15": "53ymj5mvyNHkXAsJJsWDBpHEpCqSqVsnRoU42bM1WDu1EaatC97fZC9Cars464KpM4aEvASMF4BA3w7p8uSjZTxH",
  "key16": "2DLxvBRi1paQpJitxAo1qf6rckRxNS6dRqTdJyKSE86pEWHSfU11SL8V7amTYw8mm83f88xeN3tehnTwPnS74gB8",
  "key17": "5kvR7yXGJByD4xwHd5KLEB5ASxfBvKoBb95yvViqaemvnvKyzD7FPSnStv4onYAq5QVRdjYCmgieQERpm14quF8C",
  "key18": "5Ejk8C9vaoRfgrhtGtBDdAKDizMVXX6QfP93bzJJof1z4QShDgHkk1ZRbL6cuaxSaBM3iHi2JTGBVKtTKSDtQqgn",
  "key19": "hgX8wgeDuWRv3yKP1js8nfRLtNspgPzpY9TwDznU4mcyHm8b9f5urx4HwKfcU67KMvqvrdAz76nCUHY33WR8xY9",
  "key20": "62xMR6id8JogHGgWdtW9Lw1BWkKZH1RmTnmLzUzS6MvvvfyNMeZURtfamJqFC6PnZrdr5FFX3uPBQ6txRpx2KFJt",
  "key21": "qUyJVikMthgZK9xHsSsXqgpYPL6KqorPiwmwRqRp3wFUnnuDpSFRXRzaFoK6nV5vLUt5zjFjcqFzCMavvvJvQrX",
  "key22": "hc3xqtBU8pcrECQW8cxaRw2jE1fptFZKzTWS8FnnYqZYiZkvz1unP5HTsTZ8gcSWayRtwUpVLM4TYmomNusreBV",
  "key23": "2XcBSnzJrZQSg2mG26t36aVUuAwnPSuhmHVoMciEXT8fFnkPmeq6FJQA1fMRx6VnBUnPTrReVB3ZYTgFPeWyqPiu",
  "key24": "2GgfnfeiBGVTPPbu7B3HGf3xCCL1JJm6a3sXoCm5QYWBsk3P32nq6jYGb9fjMdASaUTBE1ujjYUzTQ8dWmSJUrnA",
  "key25": "3gaUtjcfQL6e4Fvqs5MSLN7pS8ifng66CeWGzJreRQCn4Uq665bmWtkfCCd4BDxoKR4CZCbCi8veS5Vfm7zQbcp8",
  "key26": "4nayx3ZWDQH58fN2gZdbXxAj3dv9rGXfhSwjK5WfotjqRZzp9CjWYHadoXn9DBjFF7jit6R9Ysdx5NQMRFK5Rigi",
  "key27": "ZujrWxkLB4zhyzPnJ2X4QM6WNYAUEtQBa1pPrvAWx88RcccgDfwzM1R1Bn5MKTTUYSjCjC5Tz4GWh98UGoRx5un",
  "key28": "3tbgfUeX55LDXRRVcFVDcEZuUBWspjCiPMvBFq5i6AdQyagbYiE5ZH86bCjbGy2jfd2T8YysHe9Pr8uq2KQNVvw6",
  "key29": "BY8yYHhaHSJ3AtKqxHmaPDT4KJk3SMCFXXcQPfYtyiVy3c89VPwPio4ACSzqqcbBtfLYMQhogHWBcaBvRdoFkiF",
  "key30": "2U1hAsS8G64h7LAhnfUgwPywCB1L5yJ99jNccKQF46Gn2XwieSgQJzYDLdgQ53DgLwAkDmcYnN3rrmS3RXi7x8P9",
  "key31": "5uUimRyFSMzFh3Wvyk6eATy5XMA49rzrUtRE1Gd3UywUybdxrvjeBHX88o9XhRRxBz5bxTZogFMSziqr3zq5dNct",
  "key32": "3RrSo2cG9EsxfGwcPCLVYvjgtS8DeFTXjgjQqPCC3f6NhRDtNhTyCdowpPnmddkpzTkBzjf5y3wN8HiikXutpqNk",
  "key33": "2sfCE56iaLRngsq9nyrr6Fe5jrakuLSSjkG35837FYub2gHxYnDMie3q49QP9CVcZtcu5AUq3Uipnfc4FTsqaqzn",
  "key34": "3MMcPVeFH1ad7BzquCbeNQ5FFRbUzi4hriFRqm9UCgjVr26nTxXTQ7zonzXJRFWQHRaXqZoRE2CpWqkU4ZQGAXF6",
  "key35": "43QZqYQbHdK6wstV2ASqUFPtRv2PBnJidz2LJugbtDy42Ez113kZWy3hPveodP4mU1jxfdpDsJj7a9sxF1PhHEFF",
  "key36": "3NCQu6gjcgx8ooTP2jyZ1ahG7HHLCf9oCNpQMjveBQzjGUJS8e7Z2EdDQa21VtcRJ8QbxVTDugemrapSBdPLaLTX",
  "key37": "65myrLxQ3mqRmRqrudEvezqGYeLvXnjUFUhUTxcAqhVALv5D2CoDWSuU7myTp9jLhECSRTkr7sSGJyesjvjibNwz",
  "key38": "4ApyU7otNCHdhUiXVdY8xjYn7doM9S9bLcfCa3dxAMBr2YD2yNnKGFH5LgVeQ96kRBSr1SUtvBNDaJfjWEoY7hNY",
  "key39": "4pL8mLWT39DZvQPkT7kK6BcMJZMgW3iHFCBr5U7AE1Ft3TqNqVSLsNGDySJFJkTywCze629iWPdYRCiyeVD4Gj7q",
  "key40": "4cWPy5qCQbQVe54mgvrQiRAeFyeVdnJBoV9899b3a8Th26oMDXN2Y8ZwxtQv972wZDoFj4QAwH13KFgChKQS4u3y",
  "key41": "2423BUoUpk77U3ZqoCGQJ9nwpQKVtasPRZcnYNF5vC3VDZDVearvL1GLHa6zKeozttf93kDuLmLLrxh8bpYfghQy",
  "key42": "3rmBcetM7bb8QDazDy8ASFfV1W8qR4gzri62ajfzQpZwdMG5yZgmzUbBxtRUTTcqnW1d7Yn9UPkN7sVxmfZQLjuB",
  "key43": "QnjoysikJVgLc65gn61Rxs4uhwvgwNidv9iotwSCCnaSPmkx4DH9jXFYF5zqS5DDxpNPTSsvsMmswFSPZpn1uuD",
  "key44": "2pLEjGXzisPUzJGLhggoc2J6LgZ8czrjRsSML3smJVW2cNvuM3nkuUViaWMUgQBcF37a7Qq9LoGE72JNBs5UcjcT",
  "key45": "3MpKPqS9LUdZV31YuZve4VabZj7m8KUyEQvM3YCcLQjP84wmMsRBz8r7BG5Qq7oEmMbwqiA8jSDXgWKnRJ7nhNDn"
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
