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
    "CYPxA4DRHZK8N8aETZDjAR38sGLKAJF4ZzyrVtXDYcqrWsG38XtCLM2UGNQ7AVn1y6syeHZzDZFCw6pjEypQAed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65VvuLpT6LezqFyRtV7mzKAdRUPwG7BfyCe919GcoWsZxA4kGXXK8YjTaYCPiMwohstYudPF1cJFcVyovaPg6n62",
  "key1": "2mrxrpxEB3zA3CsDqqBbeJnnfwbcqNPESVxaFyVo38xfDo4DVobpaGr8ApDHkoSo9yZ7SUrRf13mj362FMZepgA4",
  "key2": "5uKr12hb3eiueuF2dm7sQfiUrmhAPwFWs8w3sRe97fDRMVjULsswERbeXVuoHcG95FCNR7zdBhxRQDDVd9FjrvEt",
  "key3": "4rYL3jhGxhbUzMnA79x3ZWwFELdFvmEUbZYWKjeFDcyGQd9DkSkzW8Tdp9rTRCaG5TYgNsXkn43i2NZ2Wes6A4TT",
  "key4": "3P7R7gZAZ17e6dnbua1mQh7W7XpJrbdaLo4yaBmAFL9vTsyoGwnXR1AQdmzxLbF4WuCRHhWdcF3nYfkJgHxNowJU",
  "key5": "2baXXUxcjaS25DEumhrnv4feFshaKJj81AMFvUwgGiikDnv5UZBprPVCHPVEFxSJMuTj4vzcKuQdGZ2Xbnh91xVz",
  "key6": "3DUdWY4BkHWLeaugqsopBhk2bELgWCZmDMz378xZpFv7XfJuyYukCNTKahZbcf7hHUQQxcUvMqKe8jzgpjK1E8nR",
  "key7": "T8LoxmmTPLT99ngmB5haoJ5X1ZHN6K56eGMqc3JRPniCWWXmitzCiuYn6qG471uCpTMbQSFLAwAafq7QRPeVooQ",
  "key8": "47TmSB8yUyix57hrjeFWghFSooK7FJVVwihffmhTQZYU5uUD2W4kvbxhPhWP7sFWD2xW7MDPDUC4yEqqC7nVYhUd",
  "key9": "64tP2tErfGzXLGRKHfDkubZ35snoMcorfP5ezVSB6cxeQCxeobv82dXTJsJ4E4iqvJaPdj7atHf2RHBJxtMEV1Q8",
  "key10": "4RgMudyGR4mcPaH4dTVm54GN69bhfq2FhvNfLx813sCFnoDarbcEFaFbH3brAqdik35UQTNTmmZPKHAzfvywq8SG",
  "key11": "3H7dxGtbMhbXRK7yfdecozUoLKvCBpkSD1J9ZF3SSXeKhruWnD3Xx7dwPLQK5k8Z86Xf6MWBd5qG6thv7CmtzHcx",
  "key12": "34hdsUTKDbVCXN6pdH5vZjQx3FeUUhSVwBvn6qvkDnjpBJ4D2EKsKNAo5a6WUpAmbR9tB7Fn9TrKbaXXpH9NGAPc",
  "key13": "22SD9HfUxSfCtmD9q3y5ELrLe8UbEFNovydeMkxPhyx6qPuzCW74noR8UgUSVci1y9aFwdDRBW3yrj3noG1yKim5",
  "key14": "2daXD9WknqDJRrKdUhx2P6NGJgP9udxFh783NfegA1MPvNGgwXueJ6xG18u7nb95tKRJM6LamecVifetEkzGJJcB",
  "key15": "5KXtPQHYi4QgDxGbtNh1rZXtWo7oX57cG8DwpSnZRKdSuHApMLKTGH8gMyzaKhFLeq8h82H9U3b5JCGHovwi5KaL",
  "key16": "3recbKEBNw3yKZb5roTi1Kg3hxJxrM1Tugj1htUB2YuUh7ZsLRz9ZoBrUuXYUqFtLe9myrvgxWmqFXr3bdLmANZu",
  "key17": "S1hYYV3SXMenexFqAG8KAhCQT2jbbeGio2FwEHRoCAQw8iCswbaRu1dNNmQCKBqNFfWY2kWJ5RZmoYM1ss1veu4",
  "key18": "29z9UoK44QwuwUo7LRk7JSQEkTSCGbSXWynhRiiDwLZzTySV4UY2bcMzFq9cdMs3R4qYyPy5uuuVghKAqQr4JHRK",
  "key19": "iGkfDdXsZcqwpwpz87ytvixKVTzUuZs9iuPHisBLZdviazjxSguhpLkq7ezU8yAZYx98CRJopnKk5npAC337hjw",
  "key20": "246Ygp1LWmjWUZtdTftC3shNYJBXNKBCfXzpQsWp9uLLEjJwqLPvjBMCUsrqos2yVbM38N6Ld5YzMnySoo9oXMvX",
  "key21": "3uo52PBf3s4Tq3BTfk2Y1tAkMSLpV6HNKMsKuwYiMPFVrM1iYNk48rua1SaxL8Rmnzs1AKjKUPtWAZPNThrGDuhW",
  "key22": "4zKCfJKmF5jQQtPRxAXLymaV1Kjz9JfhyPyJZZSPGsCBoNMqv93LAEM97b8ui3qKYA1jWvvQMXDHxXEMg4KPrznE",
  "key23": "zHtgiQjxWM8PcpNigSWAnCSbyo9yNLtgZ4a5W5SadnLH1bMvGYA635R2frQy2pTCUpSwHVqMTcG5wRhLCERL6Ku",
  "key24": "2vKZsQ9NhAdyS7Fd5cesnZS7ziLYVGksCP43DPQ67wrN2vp18vancyPLAq7j3qea9zoz57w7ySqtkJYSda6JcRwZ",
  "key25": "5iJmzLG7R8LETQ8Q3Evtox3Stp2paWVrp2Yw4hQhm7qGLJAdRKCUB2PoeTZR4EXRCa84ZdbR1MWuoKYeLkTAkdCk",
  "key26": "ZoFiK2Mz8csdZ5wedE7Zd4nU6rmturKUxnQHFwAJBMBo1X4v1iXJXBG11QzbJ5Vhc9AefAVeeEnBSkZiuSvgfsi",
  "key27": "5PVa2bpdgXEnnjmDF6HnwyfEFifS3ytE6dDUKXvX9ZS9fNDoeT2X9qHCwFJE11v6z3BNqJstpgyuhRdp4LTqYqcH",
  "key28": "34nhXJrPC19TsYpRxT6h9KXWZ58iBZ7AAU5SkwkvX7KUuxuqtnr1GTcT1cVC9FsiLFhhuBg1LEnzDiUhdZTNzFZy",
  "key29": "5MdBkyT7j7iC9WJGjuhhPChdmBzkMvVakAPjurHC8jYgxWeqb6nZ5PNUMB5S2upAFa2coRundBurexh7LXA9UbYn",
  "key30": "4iceLWVaoggV6pin3vai1CqfFvqydvE4asejM1bDjnRtzmcFadfDVthjBvVuPyJoLwCgFxdJHjSw6w1Bm3KitG2u",
  "key31": "Gd8eVGQzeiFyB6bdMSbGvzsy4CdYn9pdyFkSJMoqFdadUX6CEqpWZ94SQMgULqYjoEhVh3oZVDeMqsXc1d59r4j",
  "key32": "3errbwdG96V9ymEAGdot4LSDh7tb22ccwigkGENDB4xFBeUk2XC1B4nAtEBdwtFpk79VU39t5PtYXfRhgRgbkwwV",
  "key33": "22vgU3hgZvvX8HbYo4Cct29HPK15Ghj5WVNdFDPiye3NFakWFCNnwLToyY1a7w4Pdn2PNnL4NtLbdGekrzvdGe3W",
  "key34": "2nijUDu7NvX5EhEFQtHCTgZQVVPXY1uuz3hW5NifWsthJX6tuUNBcW2SfAafWf9Q1KcfxjopgtfaL33gpRqLHsrv",
  "key35": "2caVUnQgyB4xjYyZLkSK5p5q3dqWqSrQtF6gFn89Vd6p8Dy5VMHvQhs8ZP9EsJVLLZWdFDW6ggb9VQqa7Q61vh4V",
  "key36": "e9bGYKuWRhwwMkeCrWiifrC1wA1hKMmx9U9AACFLKhZ7QEwdWX5QHRUVsqWZd2Aqa3V3tZ8SSDPg5D39Sr3MCat",
  "key37": "3FoYR9bnxSNrBrdivyvXvSYUGR3WV1bjuK46vuvRjK7LjJwkeFNVYXSozPMe2RRuaEHkJno31oRxGrkrpNoxw2dv",
  "key38": "3793WRpbVufn8gix7pnyWSFVvdEjt38i5Ww8ttQbUZ1MJrFXyFRnLRHDtvRPbNxZqYaC2qTpPTxpXio37aSrGgj4",
  "key39": "4auvpywo1Py8KkdZAqJAe2wW7UgeiQdMpci6Pth7u7HX4J9yZ4hE1pLoyVJTR24Pwi4X7iXtvPfDRoyD27Cat6FT",
  "key40": "5YsTiBymTZz2uvs9VQcXSeaa5BMKhnpPvFRwHZwUdzopg3qccqxcyvyLkQcY3ETHMufaM6SZzypcK5qqsKkyBsyR",
  "key41": "35jbChvJKrWHyxCFAkGjxzVkkz6En5u8Da6Kx6Wq2sHBKn7fvfs9kt4mopgq6KfuTp874yUZn3RSuPjHsRYHr5sa",
  "key42": "HK9G88zerHUjzB4mkxYMRsXe2BrXhHZSjeMEXc15JLjQSdxk9eJYxhJK8BjXuqL37C1iPz7N1dwNxiVdPonWYtm",
  "key43": "33vtJ9EoKg8qNYU4Uz2i7ocuoK9bm6YHY9EDmbD7tbPf52qEfdJbtfEcu8HiuviDazgqeGcv9DpYnSbZGvmt9vdS",
  "key44": "2KKrJtRkNLho9GXTGk6YnAo34xjax8qSmGHv6zqrR9sYSxeqhPQ4fQrjWshjYz2f2FumxccJj7iiLShe3X6shNnw"
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
