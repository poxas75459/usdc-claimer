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
    "59vhDQDiZqdfssceKNU22ibxgXa3t2dXxu5cyvjNdKpQcy3mrbN8J6jMeqQLAHhUeRZqaKGLgJ5fdQMy12MXREB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BDwmJcnd9owbiqPKjJxUd8F1HN4QjPTZ8daMzCiDUDP7RadRhqauCxnsYr2x7HzWUnrquQYBiApxQ67uzpvuf3r",
  "key1": "LoXRTMPdq5c2UHvH2iRTxStGqESb3tWsimk2hVuQBHaXbEL4trxLWZovHGZPLq9anPxJk2Ai1UcdbW7jZg1acyx",
  "key2": "5zr5ro8M2enor4PbvRVWFuwJxzD8uRTBVbWy2fbPKXQcCFf37wsbjEgfVFYNpPgWoo3UM42WpfNXbpsSkHHRJcAj",
  "key3": "2CybHYBfCQe4zN4gdJaiv8zJBcvmy2M5GP78PoFKHqGfLW36cnyFiAZbsnAweeXJHQTD5HJa5hhCB5FwSpgHmL38",
  "key4": "rGJ9sMZKDFrqpBH93YTC32b1eopPX1sdjcmt5gLej4EDgpHnnaabRpw9k4KoEgHEfbg8Yv19t5L1udapWZvKKtp",
  "key5": "25bgS5U8tb7ZZhBWkY6JhGNgVLzjfZxKxQPCgPGTrmqQFLYi2rQrHqHYEozSFzGRQEZnLrcthdQcuPieiHL9kjAQ",
  "key6": "2PsBtyf6TYC4MoxtUHFoeBqy88JFxMWumr47brcEnGCsBFmHDscFH2DkdjE25UT71evpruqguaiT7pBnMJwu3F1y",
  "key7": "2EiUDzfLFGdj659G47ECxR6GMt2BPf1ei6f8PrX4frU7JJ7Qaycj5VYNzzBi7Qr3VmjzQCLiw5Kp39mvwhbAqxhf",
  "key8": "4DtjEi38beFVirA3nDb8zbohfM6RGNkhpyAs56p4M5RNbm3eKLYPmhDdbWtSYDN7LFhvtY5qaPWameD2H9JbSdFp",
  "key9": "aRgRRdxckVhgHArXz7YSDkykv1e46BNTim8fUxyTXeTces94D5GYdXTnAWHznYnptG6h8jdiWG5v82Rn5SbhTMD",
  "key10": "P92XLcYTVZS4qH9fjPaFi88UoTZB7MMVjnovNFN1e8Ujk26jBo5nsK9LRsFN25zFmfn1jTWEFZ5wMf2PPjEzd4C",
  "key11": "4SJDgqUVrx69kUzkMvF8cQCDKnUAiLpUCacauJwLG2ezBetKXqGVDSE6yTPZPfxvzA4zJVx4Kugk8ngGLozAmPDW",
  "key12": "381bvKhaKtYskhTAmywR6aoFDZpBn9fCHJtdkLLJm8xRVLSz1zUVD35kTbAXKPBsyS8Ai8cGV4rTQAzf8TCX49Sj",
  "key13": "4bZ3eW958rRVaQmC71aabPdrTWmEkAv3pDo9NFe8xzdC6ypojXW8qsLevRp4cKcq1eeRKqRSFoQePkHS6v1PR2b9",
  "key14": "3SmfFAsC9HbEaSEHHMVcA5Vxcb4pUrpX5o9dtUv2vNy7d1z1fX8E6X8iKc28Gdj34eUjXG5vybSU1fTPSfQArpr4",
  "key15": "2BAnLWPGhFvkTYqmM8dbyGEmuf7kExtwXHqBUzLvPqvz1ArwX5RR6crPZ3xx4WCfwJkeTvQSHSJCX3UWkgvL7a4S",
  "key16": "Mm9mroTPEbK7pPsyzfm2MBD6Tww3rxPQ3vFJaPvGLMsjWvi8Uq1ANns2rTvWxy7pgpVSV3MfNKff92txx9mVFXr",
  "key17": "w6DGTTzhtcdXT3etZgrknNfhwYpf3ohV5nx7FL1kboJk21kCxuHF7e8t8Z35qjR1bUpkMssvExAQMg6iQ5uhVNH",
  "key18": "61aVxkYxhmAvQhe1wQ9Ez9rnZKsvfXKYFQi8gmCFWZrP3tyUapdtdjheQvZyTLMay55scAaFmaEiAyTTujFziqtN",
  "key19": "4cERWrVE4FLJy56m19UxR3TWeyJaH6ZXSYUzTk6xkwRWRbscpJPQnR4DPUuCtKDjByjHkdNkP5wSXpvSxHLNntbq",
  "key20": "4npoeUc6kRbUaEgnyiA5Nnnatosout1kxy5b7qrjb8713WpSs3VJbb4SPiYErhSLRG7jmH6ttireXG5aLy9dibuW",
  "key21": "2ufZyNkAe2E9Tt1zdvs1z6pkByzCUj9qppQ13HwnigNKZdK7MTGNWfHhsvvvwGevwzSAMXomxePdtYzRVzjmFNMd",
  "key22": "2Neo7SP27t8e3uiASmKhJ5R3TpukYF6ZJ6TtUYB2VECJkJiCLDbH5VJkHQaKFhEBpb9scirSBsCqzQyqEt85WsLE",
  "key23": "2iEMUw8k82FKSeGN7qKDdU32atRCdH2qzkZr79dVugW68tbkypCFiMhA4sxgFXK5XgaQqZYePZTzBGLXGn5FbZLv",
  "key24": "4w7ARehf2jHoputwQynuJDYJW4gnEt552Z3Mgdo8g9MyxcPQHBsgfgQsiNuyBKn7HtPh5DFjMiopEumCeE3v4WzR",
  "key25": "2WV5Q21W14ieUM75zjbBPtvJKHojGhaGpMEYUQCVLvxMeSZY5N8DKAR9WwDv6RofjAwxsSAKHwPoL7LsfxtevSw9",
  "key26": "4n1Zo5upjH2z251Snpz4bY9dLLcNqGHEtCmQFxYHZ5BwZEYVnQqpjsEqsCCvgG9bW9XrtDB97NgzXF6qtAm41xsR",
  "key27": "4236iS5iTgKwn6etGwyo1DPE1oFbk12CX6z5poVPP8svc9fpGwYdMaacfgC4EHkdAcJ3NaopMx2mV47bvSo7YJMP",
  "key28": "3wCfLmEb6f235rGyvgcoQaf9JDiEiWTEY6MtMavsaPpdmN7mmGvkL6C7zuKX35ukj3dojZYJgN2vYWjFoNkdxZw6",
  "key29": "2KLXghwfKv54ZJqY3BhwCZ8ZLBMC7fNop9UyqmQG9EK7iaEbt4aqs9GvyzD9phGmBft1v2aEfjSrc6WA2p1eLH6x",
  "key30": "4GR4oc2USgz8nLUFrj3n1emUjt2J7ai1FJCdXkJgYNWAZjqEmPBvLcwR8DZ9FwCEne3tWgAE5NVXza4nEWzr9yuY",
  "key31": "t4Cq9ZjyKC2pZ7cmE7bY6UUqqnBLhizjsnBsyT6vzk1s5HM17rujN4TV4Vt7YkTVRWWVgFYCVVcbwjhajBJvp8Q",
  "key32": "39ksdfa28sVAiNXrjjSHV9LTZ6BhrdyDbBenEQqZ1oSuBiyBHkPBfHyU4fLUkXS6AHGktYxHzpq6m4FhaB9Ed5wa",
  "key33": "2Mo82DJgJnrVGTxN3HmAfy9J7LTVsRSbJtWHCpJtmUJpQrVGvx6RqroePqFnptFo3TsJYem8MDAqGNX3t7bnb8Da",
  "key34": "3VCy5HiYx6RtCEhYYea4ozAEGBsWQwtdpMLNvuxhpagyzSunT9bp5G9vRvbEatRJoxZGQJob6W1d689DHQSrU4M8",
  "key35": "5K9cMqLSdt9ma9ebKwA4U5Z7uHro6PdpeRrWGm7uj5N6E4fs9xJtMda2jWHyximAncwfV6brnS8PSBopUuMWcA8q",
  "key36": "uneGaUEANpWN5pjtK2YazgvsbdyNj1i6yTYdvtsJVRVrvrj26aZsbhKt5d7u6CN65QNNTJu6dZTUaZjnHvEXba5",
  "key37": "5dzJPgSvD32sBn3pZwZNBYeHqXHs2G5NvM3r867E9LiptDTKgWQzn9wDDybZxhSUsdMaTx5Tb3j7e8RWc2LaUu9g",
  "key38": "2jHRwi259cYoWCgTYzmRAriMM3QZXgwbshfmB2e1Y3c8sWdvwC9WrrtjxChNbQ8nYMfewCEzsMFuhC95cehQXAqq",
  "key39": "5hoVJTuU8ouzBiKWHLupeQthbLKzGWRkPtaa9CkwTSbFuoZY2vFjTTbqnnrxki2GYbTPWufT5HPo6a9ffGHQRb5G",
  "key40": "614g71DStrxq45BKikfPzQUeJZ2ZwWzGohmdQd1NkwmqeHH9Z5GMysoLUDk1NvWRCf1sfEsbHVEfSobTtz5HTS5E",
  "key41": "3dvKfCDbcns7QvzNSNyJ41dL3uaF6N6qxyQXSvXBUNbLy3CT3Q8Sd9mUQXZNiZ3LjVf83WFSwjHjznov7TM4V8sa",
  "key42": "5q2tXS9Td2uAQwQ6ckMtrMctfXEfnDff1PkDPnHxuDRuVf7AC9igbxZ9GkDbXDpVQYvNNP36B2cyaehmEp6LnNb",
  "key43": "2Dsu6h9z5oE1Yvss7vL1iWUiGJ1ye7vG8BiDpMb35LN2t6vWCTtxYTMjKXGjPsx1fvXcWuhceYYask4zHEqscniA",
  "key44": "8qLah1TRB55DyM2g1tUs5gaHtFbqLbqkceqheTRJuJd7HHZTA9FAZGRz6oRVjYS1uKFwy8mh7TzdZgmjCZgLmDV"
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
