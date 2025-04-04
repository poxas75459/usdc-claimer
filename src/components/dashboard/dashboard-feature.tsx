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
    "3WCMJMAZaqbYyARFpDrqhzpRsdZF4rR32xG46kddV9Esh9c92XKy58qQLCN6DwFn7dowRgRXmAHiLhhDQEJ2KGuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s2YaMLtVe2QWAVDH9KMwZRrC7Dz1hJweDULhyPfx6uvTVVEuYmYtRTf4ag6UiTJCJJHdrfMEErVdZ5WLEAkduKa",
  "key1": "27p9MEXC4x8g1roe2QxrvsNw2aexKZ9A9HxPeJzfBCZXkEMp9bytVAWuqadDBvT7r6Kyi4hjFK7FPSRAoNApxYGP",
  "key2": "eHccv7xLKULj7qQHqyY1BivCVTwyB3BSBvbwpcKtTsqNMX5CS9X4KwugGeZYT9UGd9ey3Vu2TDVVJQoyYN1beo3",
  "key3": "3g7CBcaWksY1bxvRzWFBVhMTmcMoiCk3cfy3D7R95jfis5yYRmqxEk5jE6ftpfqFP8MzjJu3gbmKib5bZfmKFT6P",
  "key4": "46bYNwfvUPZNCDrAPWb6Low8RojH7g61h8oibFnPpbc3JeuYDH9iQSigcqMEB1V8jqdegLryeEQ3zpAiiWubjV75",
  "key5": "59W2Ye1CqgNGGqQDqasFiWBZPsfhfMHcZA423vA3dKuM9hSL2j4zpRKtKoM8WWbi7mW87WTj9URDbfQjo2qyfdt7",
  "key6": "4XQ1UEx67gsqoq4EkmUYwp7nF9TMCKSXJsBM3BdT52Ngh3r3SNEXnxVSktgmTpWi9XhnGJZDxBzi23UqZeyHQSmR",
  "key7": "3cnKjpA94daBMitZhtNiz3A68ZTyCXoWYvwb79L1gVQ7wi77ySHkmBsX9J5UxU3SQrqzoibVUKwH2HyfRtazkXp5",
  "key8": "4GNPMnTy5ZhqpRpAkZ4tqjL5u12PyNALNawARna5ERfNZCrqpL3Vi5rsCQQcWsb6zcjagxNYMfqRB8Ufi4TZSX5s",
  "key9": "3EPJNPwzsCVQxK4b4PNvvD1HmZy1rsV4kckEhEtLmAbeRggD8ycir9J4A9U3uKsLpD8bZLT2JuKjSBp8twjhPAKT",
  "key10": "21K1WNaH8XHtxXcPAj24w6CpcLwfNfiaaieqw69nPsFbgCts1q2328Mz18eC79NXXL2EYr6sxq5PnmthJrxVHg7w",
  "key11": "5qGQE6u9PujCX8NkDWtTUe4Fb53Ad6TJ1pStRxfNkWhdQ5hJrQWVu6rLYHZDR5a5xjErLwkv6gmXi3UVGtmSUNZG",
  "key12": "29P1aNaz9Sj3jynopFaSA28nY9V55QndMAvuh2RopTbmswQkCcpDwxPimZuVbzSP2L6c1Z2iHhFyDYRoYHPfc774",
  "key13": "4GUX3kuZeLgfJTFJfCr6ugswdFcbZxwkgYHqsFbejoRYnEE1ktDTV652KTXU46L22LVe9q6DVCrav3UAttQjLt2T",
  "key14": "2qYPyJ4Y4k26KgTGgXCqxo36JFxqhyNSPNvzbXc8vCV96sTXnN5bmwL8ZuW4LoWEHUQejAA9q1DuPFGF3WsFxrqr",
  "key15": "FgFY89WrFZsfYX6p6aBNS5bR5oUb93ZbXFKGx4MDEjCbux6CBZ33GYwoDGWdHecosSX2MFaMx9t6KgMyw29XLzF",
  "key16": "3qXFbuXXp4x65tvr9EfX9rw7sjATMpinPJv9s58nt2RKM7L92YqiZue42s96QXJKCKcVrfbtVFvMRp6R7HnjdhH6",
  "key17": "2A54kfKYzzcbc137cAhFu1MYcevi8BX1gLm3SQSu92ZRH74d3BTJNo1h2mGjaU4pSu1XTaGBKRVJYYMhttRbx7ct",
  "key18": "5ZxTwJtcKwUGVqt6YXYqaKEXopEuU2JAuEfH2TQSHkonTHR4atpkjgyezhgFenfLUHUDBPL9QPsSVv2XjFTWaMFe",
  "key19": "BEtSJsiSSSDvs6rJ7hVipuW2Wbw3u2hmmWCx8pNbDsDrt3RUrX62ud2edTKqmfEgxD43pkCujvDioQU3Sf5NA5c",
  "key20": "43zdFHfxgK7N6PnFDsYS2Yfe1KB6L4RkWXav6pKDRaX652qsPKBR9R8mzY7sMnsq5yuVSz8t2S4LuAnDFfkD5SRj",
  "key21": "5wDiBba6eZBrJkY9oRQsPV4NpxKXcjLCMBGKrw3ccCS6e7tEsxXAkBFKNQABtqZZYAE9s1xFJXzpaWRA192FH32q",
  "key22": "p9tfqb5cnP2ePLVuBm8rh2HXBrSm9X9JQ5YEtKrQpZhMwgJM8p3L7H2RmnPEkB7Wn6z8ELjgeR7Y4HTJDJN8Hsm",
  "key23": "6HGpyiRa4V1sdut5KpfGqKsSbj6mqnGXdMC68JEZnSwT45SjMGQTnYRKRaHjCaSQJRJMisAsXx3AREnun432Rt3",
  "key24": "4zVvGrvNJGayEuVFtNBD8nfV2ZQym8Y7sWU8v8SPmVGMB8197wfvhSaBmb3yovREW5mzZB31BZLFonVnpb5iR9Hs",
  "key25": "5pC3j3KrCRWQsWHGQu6W2EvZPaDNcQ7xFqehi3L2h5grTqBbpTiCZ6Kkb3oeCk1Dus8E8eQHUb2SFvsXFiQenTKW",
  "key26": "ahFv6bKeCizGFsQHnyQtGRJ6GBWLKtp1Nvx1TgzMeA8zggUQuQLL3qyCh4o8TXRNy2AQVrnoH2zfJCREfRHBNBe",
  "key27": "ywGfyivvyyExgX3AxQzDtFaCSUvtEzSSCtp7tpnshFpLJEvJBXV8d2VwWXXha3kjpuxeiBsvyRwEngsdcp5ipct",
  "key28": "iyafqaY1tCB4r68JhDCYXD7B5qUGsyq6rNFo45Pznb1qT5zw5evARnqEKhsULpmAFQtkLodiQExDaCjHqLB92ZH",
  "key29": "tDTKikU2o5BBjACP1adiNkDLuj8c9had3FjTTsuYcLydkaSb8dgr5DAaBf73JJMPb9oT5t4EJSXbU6e82wpwEYT",
  "key30": "5gfvjxkp6DL5SrLUvQwEpiwGSG4iGuoEE4PdTHj6giFRMyQFPREDRnh8MuAPXs7EpExzg9s3WzEczezm11mfAp3W",
  "key31": "cxkGQhN3KiTZaguKxKPc5UfqE9R3uZoEL7AbjBe52FEPRevLA7kZEa49p9QSxeCij61jPhyfq26rqzffTiAUVXJ",
  "key32": "Y1sCFtFTTEBpXQR41XF5CXNUWxwPKrWVdeE1KWC4jJbUDtnNAWeXzAnDMgYQvP9aqrUf3KABwLLZwX9we7iFqEh",
  "key33": "kh6vGxJze6BuFr4LEr3y9LLj12scRbCYXqzP1q7k7XB3ousUvFtJjtmwQWoauYgvcniofEYfdK4aattSaLfQZJd",
  "key34": "2vxb1BggPCMisRkdEj4TTKQDNL7sFrBdHEsEHSXz79ZBUxofmNTgSDHdjphffAJetE26gXRRKZjfeVa8hWVwwwqM",
  "key35": "TwNuHdksvoBC7sq3kbfxY6JquwFaUtMRYArYU8XwjdbMTznY1P8LdQmECot3LBAgRg2Z9ScTebXdUaeiEEacmMr",
  "key36": "25s8aezjAwUYfx3nW9TexjLJ5TPRTtpZGcXNHtv2MinnidACrYevGfEr8uvmK3xN373xVJYsKqv7R2zcTYfyKA4H",
  "key37": "DB4v3ij28uTMpv6kZDNrc7GLK9xmYXZjA9pkY7QMu4bBya8MuNPRj6KH947cKPmGMAFGmVUypGVysWArWE7BbJW",
  "key38": "NqVP6sELJ3BFQzNd2gdYvkZ8N6JSTWaxjxK2PVzZ6UkjWZJDrkBr35iu3p7y6dUoCjWkKxW3Fhbe4ynY2Shexrf",
  "key39": "395rihMGhZtJfowuTofESoaMycZpQX5ZWUZ9iA3UoD4m53EiW9oxhpXGb81UPgpekbbf8WNw2ag2oGJWaFJXbbjk",
  "key40": "4Jr87jTAJxujCKDCmtvuEpNFCiFNmNysA66Ke48Je1Ubqn3kyFpVqBHh453rjqz29f1YGsaC7TUSuTWiYa2B1qa6"
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
