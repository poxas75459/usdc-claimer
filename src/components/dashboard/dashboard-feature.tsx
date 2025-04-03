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
    "G8F1aHWKMscebY6R7kGUb3cehByxb2UiXtQEKrTbJBjLYEBPBkxzEaVW9Pftn6ULJnSYooCozR2RUFinQT15dBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UtLSBmiqQrPLSDZw3UsCoAh36M3Erf4D8GLiGyu85zwHaTsqZXVn18AfJGNL97ZhPYejSd4Rv6GQ5p5Ug8g6b3A",
  "key1": "43hZff3Czw96RAxjcpmWCamjkTuBragRyA2gVzjopn5CutgBRPfhx27VoS1NKgo3x1oj9UD1SwCuXdFuJpuMraqt",
  "key2": "3o1Thmp8rhJcQWPnrAxsjdksysZMpZsVYLT1H9kT7MeAmKzRP6mdLJdAHDxPKNaR5TpuxVZxEpJZAeTGfSuCf6ym",
  "key3": "3cfN4p9DXsFidCEt4R6xpQRyoGoijK7mhYTpxsGeqqVrvxNC6DEFhHg6xL3CGRjwutS5J4CThrqBSYc3Y7c5Gg3B",
  "key4": "LFpyhntYVUbiGCY6oE3E8gKMHX7KkowU7yqoHvMdktNS2cWKQejj2Jf6qdq1RdeiDJqg68564hQB5r1iQsvdKJN",
  "key5": "5yvKmiRLJiwxxMfeownDEZf2VYzkB9EFnzTQ5emT1ZsBx9RuXA6FNMCNz7LGMJMwFbryDtvKJoNVojRgoGVPnGAW",
  "key6": "3huYRrWPb9kmPpN5VQiCQxmBMppvK7XQS5YU5amZeaokJPRHd2mHL6dQwbLJABjYr5vyMLBJMnWBADGummsSj2xU",
  "key7": "3zqWSyKoKt2EPvwHi4h3Cjij9it9ANupkdCvzAhMXvwxTKX5sMqt1JDuk1WtEoGYtUs8BXPJsMbYLhzqr9PMeHGi",
  "key8": "3FVNYB5h5BCUahfJYigWrpJhy2DjxV6Xsv5RXY5Sy4fLMVbFD8SW4g5E5bw1CHiLpj8PgFgpxa3EkbYMbjHWFiL2",
  "key9": "3FzPbygLiUpqZtbrFsRRLtYWkDjK62hxMNk8apQSKAEr7u4ws8om55VjE7tKWK4kksThxHdHoWmfqAPuUhQtDJZw",
  "key10": "2dfT576QrkUaJfvKHqVhNmdy3SikgSt4eo1YGfAeGydMYRgrcw6Vi8pyx7unnzDdhCJ5w3TP5zYyevnJwH8is4UG",
  "key11": "5ehfMDZYMFP26Vd3QeXqL9LwFs27EnjUbnLNYHQ3MaDGpW8iWsERQUrtkw9TbTP5aSfovFcTavn9Fz6Xy7TJUg4J",
  "key12": "3QRpNyjCFTxdSXvj7wFdXHnM93K4AcQ2BhwwdAgfUM6qvMRGsMXa4hAP8AVgUFuhwgkQuVwsPrgz4SS1sX9zkdJv",
  "key13": "5kVqGZh9eyeYM2oG4VLKCVATfUjKSsJA6aSZTyKezdGTnEK1E2kJJJYDn1UjF5grKKJcL4waH3HABv8nYJ3AfZCf",
  "key14": "26iFAmqXhHXMia8Ln2Bchf3p8pM3uXVWeuRd1LpEWRogiTSqZdJ5ZCHBQ2CNRLQkLxZwHQBTS5fdnn6FdkgEcNFe",
  "key15": "3bpAWPMoUbuzJ5JPHcwsB319P4amC9UEVhLTSwQcS72NWCaiBWs6L5uCQciMPCkY6s24HH2iJzkbbZpqvw3sFiyj",
  "key16": "42ELgtmkLtENmV3DwNynC63xw4murcTRBCcQ8xRZ3EBDZ27LcUVmDYp4u9mmHnKcUrfN8fTMD3yaamU2NHVApk7w",
  "key17": "xgS8HaRXd9H1rugfvHnK6ZaYmfZjazLQrnpWXzVkL9XnPWJ63rE9cddhaW5vguLGCrJGkLYrxMNqANRQL8AxnJf",
  "key18": "5h5ohW4E6D9KMsCnGEA41WraDH5y7HHHRqv5VzxTC7vg4pMr4SqZu4qTizGS315y64SNZLpznPnfbNMXEKTNnZ1a",
  "key19": "GJsNiVqAKF6RMQeRHrjruMGBfT9emaktreVRDkrnQVM8EECHySzKV4zaKkggUYXg65fEfp8z6Pgjjy1qdNmSVNK",
  "key20": "3R1EWssxKpayZwNKLiVc6TVdA4mAsSxdjq3CihWGKMFG8wBrsB6HtQGnh3qu5ucMwfKGZoy7uJFAJzECfUQn6aGG",
  "key21": "4pSaVARQaUXiMw5btHr5QVujCJLr6g91srVHDaJd3Brswzb8TWusecos69AM6YJqUz71F2BWanrwqKid4bKZDYCE",
  "key22": "2kYKJaByKCZp7ecaZjkobG2sm4B6jBPSRuqVmi6VoxxZjAEqCAcEnSsH4Yq8MaGVwTUbCy7k7B3rkMnuyNs27meX",
  "key23": "4wQZEzw5vBvt8x2SFKULBR85M82PRrQ7raxcfouPsiEW5E4vB7Cd2QjcvSGU2PmZfNWnzE7U7FMADrv8LVNojEhT",
  "key24": "3bpBR5uyWisLkeVKt7fdfCVpdDfQjgHK6cBSPjPdMV9sBacWkQQFMZ3vW3nkXthoch2XJMxjv6K3Mz5Vv6CDQjbY",
  "key25": "LNKBYRYXX4anuTPyEU9ixpDkkXUfZvgBxhGFDNWdrS7CbSQPpGK7PXKe4cqstfzkKHdxJuFjr2Aj2XHzKorNMEL",
  "key26": "3iPT7mWB4sP2x1rFUzvnVguKBy4AJ1d45V4f28HZ3TPBwT5BhyrNNhfaBpjsFQQbUPW18yWRn8TMUQNbX3rRS7Ne",
  "key27": "4vPAMMz4jwsR8ych9W3d7zYRk3YvJdnHgmL1K6KTeHefiHyuwC6dMTn17aD4Q1xQ7sdbhZ6qumJ7AGS42BS7XofT",
  "key28": "4Qrc3dJMzRtq9ea1Lxd8xZesP3J5hMEHMNQyBAXgE1J2SACXXzUiMZiAGhCLCA7fGYXJfP7VESAj8uT1pDJBLCQm",
  "key29": "5jcxXF2ggrnVxyBaemCmtPpH7NZ6qNGDqkR3KDJDMmAeRLtdxEEsxDZkQ55YApVV7iJ6Hh3mpexoRv4kgR956Gk3",
  "key30": "3ETRtanQhmwMTFQYm22tcWE9u9zFtCGveBUZ6XzaShRE2caHW422ntgoUGHEHK7gKhvxFNwnopn9u7h8hohWhtUN",
  "key31": "5nYitB8stGxAcKfV67kj2rEYUyR7MHfFgw33UPB9C3QDdwWucQQd9waFog6uyC8dJb8W85GtRQyksvqwadpBrpg4",
  "key32": "2GcacFhUAGQMx5VHk2PRwFzJszGVUecMvwR1BKyMnGdL82KqoMg4C651uEh9oHdwjtmDRWdZgRTvfVYxRRS1TRgx",
  "key33": "gPcWuFnB7Ho57Q4tNwsLZfLjYMfSkaXARrbZkMvGx7oGnMos8whXkf6JZuqop6pXkbnc2DmVFCqEaxosH8QtLDR",
  "key34": "5GTkoXzebBrnm6BrbyL3s12BwevVPiWbXhyYJJ5PBeZgrp7JLRX1rURqFW45SLP3gy3axGuhLP9Dz8dK7ModJMjA",
  "key35": "5SXoirTDKNPVJT98tLuvY977E7suZose3MkEXvLVoEtUNs3mspmu9nsyV75dPMKypmsCaSzVpBG8Q4DWgQpJ8gDY",
  "key36": "5DKRd8PrgPwxez5MEtG5qum6ffr8xXzhXjFLo5kyR2nppRVXXPkkpLd687EFkZ4Ugnj2QBy6iHQYvSk1PzeBFuYB",
  "key37": "2jzEs2HJ2LfYBXu3ywMF2H6pTEkTeexCtLoZvrGZnx4bdYc2hbQ21a8r12gBk8ArXjo72jxuozmDin8K1mQCxp6x",
  "key38": "2YLLuDeUPyXFwM9tzkZANpd51CiuGfiNio3AkZSv9KkX9HSjhQVmrKtsA5wBJy1LYdUe4VEZpGncxNWqXbKswCLD",
  "key39": "2yopcwhVwAjGRXz7DrCkMi4mby4BajrAtW8Fifpf3E7SpwGAY65zNizyCDCAJjz5cM1FP4DejkkMbzD7Aq1LHBrf"
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
