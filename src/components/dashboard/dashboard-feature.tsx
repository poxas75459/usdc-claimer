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
    "4ZudDAD2cobGRg7TwEAiR3o2UG5ZtGZiXLkkmh1iGJR6AjQLvA5DHVUAnUq59uScisHDuhECgbqfpYTrT5rAhZ4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LAxLDP4ZVyW77QaA45mW4jGReVXURYQkqmqMcQDy9pHyqeJz1bLQJCEFrxAgGaoa5NmbGgb4KSM78tsSFJgrFXx",
  "key1": "2XAePi6kvfwSJ9zJXj5Soi4ZcBKDhDFpzxsoxAxrBjPjvUGUEUGfMjQ9ABRoG3gx4Z14SWSkqJL3TcjTRLAqWj7A",
  "key2": "4Uqgy1ru4odp5dR2kcJGY1mw9Eq4Cc34BRpeX9cVngix7XrksVDiJ5HZCjtN4KtZjXrdGy4ZQxHmTDz9VEYM6N4R",
  "key3": "64Qhz9FWTKPokXXyZeKJKYXxUzbVQBbkk8eag9fhtwZnJgU4DFLK2UL9pYHQH2akTrS9qf9NPgSUDeUVLHhWMVQw",
  "key4": "4d8hU3TSyH7YJZfA6cXWyiEcamyB1RXDjg4jFApY9STSZc12bZD5h4MKfvR9iY2puw5t7shEzphh86YSHeZKX3ft",
  "key5": "5n1BM3usw9irpEUgWnV8q3uCdQ44B9a8bZdMNtiY3muYkWyQ5WNiActGTm7YWuUd28yN6GXHdQM9SVHAmiGayeHe",
  "key6": "etSEyMqKeRkbsGVbHsZk3GmUYAiYGa9f2XKC3b3xyMz7t3FoWfcMa3qPvu5HT4U111bZqnCtr9bUmrHBA86M3VQ",
  "key7": "4rnkLM5dq8fBfQq2QeJsjdTzYr18sQZqXzKdVoUYAoSawJ96WSMfDHCrNS3g6fPWpBcxQqSY3QQCb8QRacY2fRLq",
  "key8": "8VnWifuEQkmDrFzLhsXEWiS9729pxa61FkaEVGk1Xgd5naCGs3XgZBSnrPfiHrSXdAqXNkC8xQH9xLghuEwqGAS",
  "key9": "25QNaR8vSLN3ZDzv4J4vwd7tsAoaqCMB1N67K5fDBTv1Am6F37NoNHBz7jbKUodscdhJp58ruNvqWm7B6UCmRNym",
  "key10": "dYJcnXyqbR9RsDMacekpmg5TmyrCqY4fZ6835ExfytQqc7FLPC18igjMhZ6ahwS2gsXMuQiv6MDcrxENHxHNwdA",
  "key11": "2HK3KKmoAKaqjLKpxpoqKK7MxWKoTaHZwxGsuuAAKjneWNZQzZMCpPiLoWpip5LPYtpZfrktoV5wPUHttkrxxudD",
  "key12": "NrXWRKxkCYANNECvUdE9hqr7FdryppoQZzsTfdHYUp5YSm7ZQCAdTSdYSEACmPxLrwAeDVEGAVGD2qi9NMqhnGS",
  "key13": "34cc48xB8cbgKwZWs9Dncm4os5Zz5Mhmyiba2CNeD2YNvphWPazFXEsb9xC7YZwFJgEQeM3oxCjdSyVS4YuLGPkf",
  "key14": "2ZFUutgZ2XLzdHGUTGfxvh49U8Nm9Uvv2M9k6HqD6cCTpu2E2rpxcXjhcLqhXgaiVQLH6t8ppwmmyHdUwacnZao1",
  "key15": "4cQvhY63rcGXahMYdHyZhhmgMpAjrHWfozQZFRN3wCZK8opsWcbN5jiZqWigQfrQJxN9U6brgKJsmq4hFNhfcwGE",
  "key16": "5gSEHeYGUY4Fx6edjm5Tvg76DX6mCbHzVPpigSoVesKFYPsMJV1eq3zQbgvJdqmELd5fGqyzPqFanZwKJ9e6N5Ei",
  "key17": "7vzATXKfAnNB5jYSxCZuzt6UWdy6BYAtAo8Sq7KeMrDVBDQtWkgQfo8qvopCn6KUs9BYjG7hF7TtRRVn9JrKkEV",
  "key18": "qnMzTey8FyJFmJBtRgEeMSzJJiutS6UGrK4xyCz3qSqg93PNbTFHVgSxkk2MxxgrxYBAnTKbWLw5nSuMFnpPj5U",
  "key19": "KtDch2r39LG6azDjNnVANGSCjVcgUsw9WXUuD2BoYTzLcSHqq5FPRLu3Tz6EAoFL1weRv9mLG9w9X4vbVNnZfci",
  "key20": "4KQKaiY23KCTeWLEobsCPaxHnBqQ7xqfrxYNtuu7aNceEd71ivhRXy3R35FAABB4LBfkhYowFhekCioBRMyrLiwS",
  "key21": "41paTneX5vZ2rvjwsMjZaeTCnk5eBLA1GfFvyc411mTyfLRjzt1P5LZxfe5YSAtdNzq37ZK8C64991DXRf3Qyux1",
  "key22": "4m9tPqvdRxAbLdicUDYseqvcogMmFcLtAR8WD3C5W9giPcJWFaNYaBKjfvyarGd1EjTAGYi9nshAAe1BnPK1hazr",
  "key23": "5tAvCbYm76oP6Df997YAjXgkmgvsW6ZhQYsZC1nRnCPxuPkgbutUyGk1x2HX1pKt6jgT2H9vWFadp2T5r6fxLmC",
  "key24": "3DkDUAzHDJ4d3qzVm662owQJAnK4NT6BvwepLQss7HzNXCKudd5temsHtmjdeq3VHGnjFyhiULvumQuWfPHCRihU",
  "key25": "5wShsf8iYtg3E9Pd9hey5P7Vw2xdemyQd8LawsQeafJht5xqxS9iBB7mSkB7jd3yyLAh8dcxWXASmJ34CBsLfRn3",
  "key26": "5D9Rbotif1UkZULer2C8n82bgxreDwz2ZYW8CtM4DciSrEoP5nCd5eUmd4CEomQ36ZXtdU5XS9Mhg62GYh7pNMcu",
  "key27": "3VXR9jrW26Fb8zbvjehXe1u2X5fC8BWYe7y5HQMN6Bnus3gmgqVgT6TSRUvhSdgx2uq5KFCmLrkSsTSyhmygq8dS",
  "key28": "4uvYsjrQUu9pWwxumauFPkj4kxzqzeCy4vDUgNBaQ72af6DBeG7hLL5pyWoULY3i2MiahrrLW7ev2yWsMb7MKpUD",
  "key29": "5CYMoWJ73J6JKhR4589WaPi39kRoYvQQH5vFBnsXHSKLtf6vC6ygRkr79RXosc5Xex1ZqvPJRfce4g6HngtKDh52",
  "key30": "5yQBNUpWCuXWcLXvoDQTGHGysqnFkFJrxzC2Ea9cMSS1YVyRx1xgVoX1DYCMifn5wspyubFZFSjHmCnpMsXE3P9u",
  "key31": "3cLD68Yi1bSjoDt6YvdtrHjxKTLPozQyLFzEoQ4A3KYs42LQf5x5uYPuxkrZKhfj4PYNTr99rpqGUsiXfuyqXSHe",
  "key32": "5m2TX83DtVDh43FUi5vw7DPCt9uFsAKitYLUDneL21H3JstE6kX9MuuiEQf8BCE9S1NqaNm5jSQfWJjML197zzck",
  "key33": "5UYwjKCz6x9yaLMB8YwmeWKz5Tc31cQsCxDk2PXSKoHE4VUJYgVQXPZVMJjatcvCRwBsVvKj6cKPBFTqsUCD8P58",
  "key34": "5FhbTyp1aWKREmRG6kiBHcjssb12j7fjH36XVMYsejk6vS1uq5jrSqGxin365ZXoCFgJk94wZ1McdkWSHiDtKUJJ",
  "key35": "3kxD2EJWtinTnctVCqgFZceaFBVbfhjXTJoeVB1gDaQ8G8rKV9FL5o3jhxQkTBbCsRbSToZfPEmcm7sDkpzQSu8R",
  "key36": "5X3ftBTz5WnDiYXhe1oiujcmJBawt55CZp41cTKeB5FyXZGCSm3q1ojC3jjPw93Rg6EtXtRKNUmfrzqYhjGgg4EF",
  "key37": "2f1VJYNBvUpRJz9dBQZ4pigrHANUPe8Vy5Fr4z7XHrzfF794LovGMNbYkUmrdYmYtFPopFP2RxstTb25EXRKocpa",
  "key38": "4FBwiX52bNsiUPPKfAS9UxprXkFYPZtyWt6hKbeMmwb2vhsHr2LmR8REefTZQFaNLhd7Nu17r827FeFkLZ8Len5Z",
  "key39": "45Y74WiAqh84Zxd47Z3Sxza9HVpkxenUAzqk4hWXrNp7TUKbY4YkjDMvVmmDXCVnVEoJvB4m4P6g3VVaxV6FLaoQ",
  "key40": "2amgCxKBBuoRXmiqZ299YpdLv7BL6wLEGToPt3bFBQx9Z7GLCEbQjwbLBuXtpfa23YQ22aJHpbspEoEcLgLdKSNY",
  "key41": "4jHTTkBCwtC7udyKZQtiyY5ByifT1bFSPkMrx4Zctn8Nxmc2nwX5gnu6VFUfir4GT3B99vpg9jYYnXPdXT324n4Y",
  "key42": "57t7Acj4xMbWH7ujCQwWz3vrjbw1ca1Gk8ppGFNJgKxQBJdknSypgafxRYWLrVquK2PvtCGvU4maRmBNHyNPNgza",
  "key43": "2AgKr9DeNRe69rjWtdtp3FE8y2GzmJzDvtEeQM2TWo8hyuXn8RCLtCTbcXuSLKH41kERDXpGY1gNXruKS4QQV2ek",
  "key44": "4ZTqQuHf2uB1aFv8K8abKiqGXoMyAvwiZ58io9g4oEC96KW8X1KMQi9QABtqHN3r61FDShHNRqxpNfPfsACMkbZC",
  "key45": "34cJGgFR6qNdmhGMgXgWr85nds32tXsfx6CU28pyrTGD8NFDXP5m7iAF8huJC8vYB8CeiW1Xn616D2i975U4R9eF",
  "key46": "26dVuRxzUsLpojfLRK6Fr8BM4u6xZDXQQDFonxZa8fgY7qzFBsJSXgFmeuGwXmKpM4b9KGkN9SdZCZ5YdUPLRAVT"
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
