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
    "4YZ8oB2KBmTmSLZdawGc1xqi5x1CB6d5pf3XoKutYpgvAEfSh1ucEChiVZxPkzQPvCFapjnL5PPbJULGKbpLPijE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "421nCdpzvbDZc2hvoujb5SGVTm3WqMsf8XkgGSo5U9ZM7HztfWtiwe4opZooVc5KKGhzrAa8TsBhhcoAXyaXWwdw",
  "key1": "3RUZenkPb4Rq4H8iwyyE4YFJp6X8Sv8kHSqGULwd484kPjr3TFfEkC5BWMUU4GkNhidsCCEXc6KZDDpzTiE5c7SL",
  "key2": "2xyP5yhN2oYdC2de8rpboYJ6XNMEADCA9M6UPv2o4F64wduDUnzpBA5cw8pAHyZPotwxnsTv6LaeC2yJqAir5vaD",
  "key3": "3kagPvj4Di2rGBZ14fYELySWv1kiGaC5nr14wyrqB2DtbBQawwwS8H7o1jBpdLg7JPG5brLNXgNfKG85DkmmqsD7",
  "key4": "3CygYWuPusiYHA1J1JWjbRRFnGV88pPXr765LjKoa17kjMTtY7iXdQbs6NzkMUQG49KS7rYMHUH82nBsnF1MN2hw",
  "key5": "2g6sXXuBNhZRcR62CrZFWEWy8XSUr6UUDZf7djPzAYhmK31r5Km7Cr85MhFPJbaqM8wFRgYfU7fUuV9Cu485YfEX",
  "key6": "2NBdP8w9k5ftg6JX3Uhgy9bbPMQQsiAVx7gwNmtbZEH6dFMSmCoEwEmTM6xoaRajLyz1WR7JFfkGq4VNCWuaJmno",
  "key7": "5NmD54awxfE1AN1SiY2zYjmV6ob585Jn4gQBGWofsYGQqAG5QzHBUpqYoCNdnhDvN5wLXu6Gbyqi6vakVEHuH7gf",
  "key8": "54nU4DxfitMwnpoLMkypXhE1pTrehrTT2gU2mKC5XNjFPLbHyk7pY6ojTxngQjvWJ4jD67PqC1Fhiuza7zwGPh7U",
  "key9": "EgGmDMAccJCugCUcSSV5gssFQ2zoc1kLRuuaRwzEfRBAhFN8UoJeCjfHXdQfsZ2UiXAUN74Tqz24eiPuJ6BaK2e",
  "key10": "3APfiJf9N465wjgJzx2aJsnKus4xutTZQgCe2yKbhJ2Gjwv6w6bNDeFt5WmLieSQubkMB4Rg7SATr7Eu8zXgj14b",
  "key11": "5HanK92YtqSMfA75dAJm5PEWnCrxYT7S4fHwpDuHc6NucuDRJ1ACzwvg1DDbpRGBk95VUA3bufdbuFoBHTdkrHVx",
  "key12": "4nUEMYGvhA6zYx1ihxfm5WJxoauy8ToimTpPHbeeumrhPWhggsH4fPQiyqmxW4stmkAm5rZAFYum4Vo2EChDEpbs",
  "key13": "3YjqoM1odwtr3Q7KWKLyu1q9FFPsQHv6v2yKuMzmFXCbBmWXypLFeCqY2ngHpRkPRmxuXKCHFZZXiTLDtwctQbSa",
  "key14": "56G8VdgoSG7B1yZY7uFfrnytFKEeLL6sCZk2ZGbgkmuShCvp65o3yzwVsqQ2LQrCsKihfbLaE48EXittw6XbH612",
  "key15": "43cs11jerNRX3CFAcu5G3veVTgYxHjh7PDuceF6Q9jMtNfQwb5mssQARVAApPXkFbVfWEmXib9ZW4JxkScZDhrYi",
  "key16": "5oXp1GnY7zjW6srkqw5C3DmEPYuvsuREZZFmHiZ69NYrZTEVBdpHKwWPPQDUwPr821a6G1VzM6pZWxk4LC6Lr5GS",
  "key17": "45uriiWpXS9aSzLaYPemM4KKT74nm3yALzdPubXCFTQtpdpD2uvw46gzpXd1hoQy1RvhECPmuLaGxczpxApbiUe3",
  "key18": "4eACQbEs226Cr8Hq1G7dWTDkKbmESny5tUFQwVxZnELdAy6d7kasrWNJ4ccY3TnkJHGjPwiWuBbqa6gDEPGuP3kQ",
  "key19": "3iGmTrS9KPXaXbG2VwoSm57pne5ZdN3p8Ym6kjhUX1WY6W5hYJdFqKQWdLAGKZxt8pfk6coW8jgTuerc5Qd4d2Yv",
  "key20": "5UE4Uqi9Kcm7T9xcXhLqUiNYb8chA98W2EKsEGWDZ98xomNuqijPmfCfYDf7iVN79PE23GGsSL4vTWPyMnV5Kbtg",
  "key21": "2291orjp7dQnxxjCXbzNWvcX1snbLRdNTEz1tJf77RCXxeamgsbdk2RepBmkNtEcATXK7kiC4nxz45owQpG34Rq5",
  "key22": "ge4HoSFcrpxQQMCwCjsq1fBauzFmWA6EMw66wrve38DERrijfseVZM8G9RU1aChyY6U7cVFXr8N2SmuY4iiQVsL",
  "key23": "2ArxCEdUWzbCrVunYCSGSJyezAoLyMSk22uPsowGpqo9bSQznC5Bx9A7C7RDTANfiVUEZ9v8uD584do6XZGz6L1A",
  "key24": "2nN84w41oHM6Gjx9ma5Uo9iQAD6wDQqxHSfA25dTkPDK3bny4kNpYzQL34vSN9KhThV7YYz6QzPCWhQomec8wPTP",
  "key25": "5LQbtKSHgqNYRn8GkUK157pZT9vDfFMp8tGDE2qvvCKP83QCuixuHJSjsxAy1Vhm8sb3s9pG6hZMaMp1u7WKaNHX",
  "key26": "A3NuCoNWNF5Z3WNWsdKtbHJwBPcJHj727B3Dg45NqDstm962qgR3EieFEo3MsYvX7vWrPqUSc8zs3sSALVBf9d1",
  "key27": "3Sewrs8kfnHTEsBe9WWMWgV8WrWdJK1MUaVYLhjQw1y2L29HWaFNEWNggD2T4APkmrke4yaUgJk8qErEcX6bUhYX",
  "key28": "51Cga3BvVrDH3w26CrJXdUV2V976QAF9txgxptJxfkGt8DUY1AgULPJB9Z5Kjkra74wLPt4SsSWRqzMwWfVd9BGy",
  "key29": "32Jwg85vuyNZQ85AGAtABBsp68Sa2R56EKFXu7ckdNNfeXpqrWjZ22mmrJJjLyuziKySD724pfnDbohUU1xDyU88",
  "key30": "U4mCKMWxXF6WBSZ3ywZ3Xj2JnBBPivpLm3GUQ92XauHWKVmg2rcU9Y7q3p8iZUwJcRoCWquQCg8e6TscQRjnSnf",
  "key31": "3DBpXSk5medak86UStHKXK4pFXRbPJ1Jhrpu56b5UzAJdzL3aQQQrbsFAtgZRXZ3umD9mJY8kYomjvaQkW75Buop",
  "key32": "5SeMffnkkK9AtZuH6Hvsv2MTZ7f5qHs9Akpyj8sHct5esNcKiupihpErrXUmakkeucAGnKBdv4Rk26nVdVKjUkG5",
  "key33": "5CserVjeparFPfAqkAY4mPKFnyyH1uA7JQ1CzF6XSttFPKJuqi6btgSRyhJfLJuMadXsDEabRHEiN1Fuxciys7F4",
  "key34": "Xs3upSREnhdX5z9qSATnsLYUKEQqwbH34ba34cSKn5VND6EDmEnguxmfDBWBucHeezxzW226GynPWrWuUqxRcY5",
  "key35": "5jTtYn6aoGaqtvSqSaGVXJPHZoq1KC8HZb437bnCmCgvP7eNM27bN9n6xHeDgDqeYrJve4BmZh4gEbZM4TfcT1K1",
  "key36": "579YcMLTq2s8yYfm4ERbQtUtZ9iiLcvxaEs3cNU45WCyBhnMGupaV5TY4kMH5f1Zp9b9nuxBQpziZscAiebyjfL5",
  "key37": "xHA8aJjp2Nv77BKDoCEpn6i94baX7i81fpaNXLhAsntSGp8mRyR5An6QoGCLZfMjDKfmS8cs7W1fAaKNhJvyTKv",
  "key38": "2B2c1tcdCH77q5xbtV8NWZ1LoJN5pcbDYmHuNWFbydPVvksMxuvxbjseLhMsZLrVZ7ENTG6tmVmgxv7cXiB7NThh",
  "key39": "4aScwGzCstjBnJ8CVAcn2kG4SWsUvQr3MwcY8hrhyRV4N9CxZwnJqLvTFCGEVsG25EHmRjA7uAEyxo3Uev2fvJ6R",
  "key40": "364Jmg5wgMscuBLcKQcUfVZMdjVH6RrRzQuom3A6deoP7bG3joyCWsLosbK6AxnUvKLG6MzwmVZ4iLfMuBymnPJn",
  "key41": "5qwpcGVf6h1wLgGjq6J1H1TLo3W65vBPE5ebukwLVETUKr7vmpRu6qT6ZRcFWydLThQoy974Arwdy96QmZVPnkMZ"
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
