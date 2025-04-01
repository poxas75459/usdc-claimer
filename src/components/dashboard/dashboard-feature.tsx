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
    "4FShgDBWnn8hH2tn5i362NBRQBaeEh1pHChbDj5jCVLkygDxLWvSnfC59Xv3QkDVTa6aSfymjHAvivYfD84gsud1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MWrwKoC4zHCCu9JSLfzsztgt2NspAfo1chHa7j3xgDmje1sDnbQYqiqUD7dXs6uHTRzD42FeFYCGESkWNPTGy3g",
  "key1": "3PwHHzBJAA3Ze9zLG5EaLwqzSvzPkY15ej1jZXhqfTLWKwZJLEBW4c71TF3mQwpPqtTy9797ParkFBhWAhreDf8J",
  "key2": "nhEuTSyyrZ2inmD9WZqT3NExYYMEuBTkSiKeBomTMkZ3fy7Ni1SHGwUUx6zJb8BgFcBKjA6j9dvqGWg1ZfmogGj",
  "key3": "4KT4Fekq2BDmB5hPyJu2gByoqGtbgLidGJWJUeyEKVR17jr7K69DDbAErKZakERS19KmSZ9S6Gez47HYMR4FJjVt",
  "key4": "62ugYFn3GWJaDGzzETSd4bKLKGwgd1PsGGE6661MUeFpGUZYj5kxDqFSV1MeUX6HFuNDeDR5q7P5YvCDs7kV26Lo",
  "key5": "Zb1vvJ8crRF7AUDMZzmoGdJ6VZmXf5bckH5KuVNjE4d8L8SXMDY4L59gCDqAs6hAWHzUUop6TVtTu8gwcscowKD",
  "key6": "2rstbMJCeqAmZkUKLY9LD9JNSwxyrXokEQsp33bXuVJ8NA6q692LrsNDmjygEcxerh458v9i9juHT7pXjoNWHje3",
  "key7": "3ZVyrgD2pYuMpdxByzNafj5ZzDPD8ZEkkiarTuRUiVWcAEeRffEwkF3xYuSGBE2NKb8hVPD4KnqkwyXCSoYkmoX7",
  "key8": "2xajTBMBDQtawE6zfyjeC37cazHm31cGLKyzTNJAmTGFS7i9kiXQ6DBFnJ4Ns2KUA68oKJJ2tgun2hjSaxkP9AH4",
  "key9": "aGubagW4mhmvaCGrs3ER1jUdtUp5QqXm4wfeUyJC7bfdC7zwKgfwiHwUz1mNqonnPicDNCA7Q4U8P3ibQWaJpET",
  "key10": "62thUq17eaDu1ws9xUrxG8bXkXoWSqf2KfVwn24atd87praro8GjRkLmhhrawNuH7kb6HHRV9GQUYyk3XBAMz15o",
  "key11": "4nt8sPq8uuFTEjBWNTfEcFGY9u2emuvR3D2afG63Xud8zUnzbsSErQGSyz6TbvLGpnToP95d2GE2t1uJ1Q2MqdKP",
  "key12": "GwvszbwfTuQpbYBLrwUorVDRuwFXEXzPtQMvh3v436wB2SeFw91jPMhePHx6BNz8gWJ9SxUkHNuPdirNSiPYjk9",
  "key13": "2qoCBQjhiSocXwUj3UEt9LjYSLLrNSt5pETGZzwzuZCLdj9xSuMj7agHVHCw7skJNXW8duKQhgDZabu4U271Co29",
  "key14": "5pnzq5drwGiS3FGoW1zFTiMQ8EamPfgVvoUHp9coQqw7uAWeTvQewEjgSPsmzmJk2cRybSDKFLga67nRZwZBrcAp",
  "key15": "2XbnDCg9d1nUVfkPrKMGzLdkMdVxuMgjTZZTbgahNX69FwMaeeAFsjNmFu2wy6ium6nunng54muQ3bqFfMFRMazQ",
  "key16": "33jCgBNmmGomkaJE7Zk9zcGCsLZcpnFmJWG8JS8atezZBgTuK2wdAULnt9En9ifQXfzQaW3wPjSDKyRYRxWHCZJS",
  "key17": "4Nqgayf5YcdZ2pbcx2VFi5VfS2kpA2Eu8NptUQoj835RShEKQEp1yh8Qup9aHP5xDkh4nU8iXXRKNw3yK5ugsvhU",
  "key18": "2dNTLB9P1A3TZiPeQTxHxvpQx4x4eZsJsTebW8P1zW3woYtPVnutkqRpYdtCH626XfnDU3c8T21mzLuqzm3wZ8fJ",
  "key19": "3Sj8DQzAEDmWcUoQTrxPXeGJYWkfk2aox6Ssmq6F9ybkixzzkxa6R1UpnzbuJjGunnv5xXCdztxJR9g5pQh1HR5",
  "key20": "5oy9gGVvsVvTtZk2Mf8LfEoSn3ANhfo5rCx9QuUCS941zfD36wRjjVDwVGebp89pAvmwP77LBdVvzC2cW29z5fzo",
  "key21": "3a4UYbWBq9WmtspUHoV9qMUeJeL5yqerLZ6iENyjxx9CM67aYT7ya1jXqVNDykLoKcLCZLmtogJocDDSBsvGfWtP",
  "key22": "cvdTUrAbP7j7oJsziEJXDwt4AYRMMdNyDxfZxCVN1JojHS7uAgTPsWFWZeWYhPbGakPfXYaxLgJgvfsdY3h73eJ",
  "key23": "w5JqXzS839YcSjtFpJbyski4Vs1DuAEftcodY8RYfMaP8CwguuiSEUssmRP8VCufm2jJMXKXuA8LRhpdtGa86yj",
  "key24": "3bEhaZsQPKCKbivp2kdwv5mHxuNnYSWpVhvDTeZPyK6S38oRqQEGGyKpaKPABMEtA2kyEpTH5i4yAhYYPrqsEJck",
  "key25": "2CS5uUDpwNYDzXrU7KW471cmVXzLjrs52QYwvD1q3R4kVxUmZssbJ9KdmHhudZWyS7XhpX83XeyBQufn2zjsyS3G",
  "key26": "ABiHPM79kBqTgcZKGd9z2didDs2RU1F8U4Arjwv5hRfVhj27A4SfvgxonEYA6ExAPhtrFJ6ytqnL8Dtn7ZVzgVS",
  "key27": "34u2AoBUApVNEyhxxmFcGyLkxrg1dug23qcxiepPhukRQw4y1Zq5Q9YC2gwfs6CHHMUvyCZkFfeJe8RDRmyUGSGh",
  "key28": "Tisjkg9adsZetcehYsRhJ5qyoGhEzYv7YRj7cpnEco4Cvb5VzBbcwMnj2aTJ49CYjBq1UB4DuiwttR3xZTRmR4h",
  "key29": "5Vtfjm25SLXjirYdUUepkJT64N66gQYUtE61zuvSHjJWXPphfqSFCGbYtGPSQSUFwgC8HfjNNuo2k2J3ve54fFdL",
  "key30": "4RftUNG9Vhu2g5r5JTaWoYRxWhBsVCoocc4YMhtd1p6KXFihsDLKnP8Dd3GK5sP7wD6k3MBtQ5823b3QcZMzfarN",
  "key31": "5whykB9LYpUqLy6BnVhzoUKwUdo94zB99z1nKJq4fYYfKKZtRvNaJ8E72Y5Dc8TnwGZtYshM1gKKwMnfMaLsKHd",
  "key32": "2xxAwVjZvpwsVQpzZaRgk3adWMuCPjVYerf53SFFDnehuaUJ24YFMp3n3ui4hQ2swJmvBm8vVYmAKjoSHgi3jhuX",
  "key33": "3GoUjnPyMbsGkmazitd3dD1aQoUHs6qgk7mHRBZJis6rNf5c8HSAbviYr69L1fUKAbPYLfigpUcdb23RLdGBxDJu",
  "key34": "67kNGhGWR71Utatu5qttDjd1PxkXADjpW72gWzYBJeUoSwph5UhmEWjehFAC5zKNgzfER2s8kz4PUd2VEq5Yz78J",
  "key35": "42QGbzaPpgBvX4y8VtRmf5YK88fLmEn9TUZTAePyHTrLAtwPuowvMQ4wCXYjX8uEZbW7R65oSfP6ShxVVb4RAJoB",
  "key36": "5WkTZt1pMSEg83f6G3jjRJGqQXsnqwh7JKYd3LdzAAmNL5yWddCxZkavFSWw2HFK1EpvhyZq8KgHF96TnGf1aHyp",
  "key37": "5MSqcg3hDfWrs452jA3sPRQkjxQ6At3qmbi5sEr8yhnXcKVsAGX8G2ep9v74aFJyaGWuJU3SKpb6sn9nQ4n16WUT",
  "key38": "23VBzYH9nnYKJHQcGGNdpvsiM7zwE3ftT1J64ebNEhBpeh22MxdwHqH2z16y9J9ASNUMsePD5yRmd257JF9468qm",
  "key39": "3EyW5PeuATbuNGEPz9SB699Zp9SXVtzA9w1vuJqaGaCgKjioEdJPWSZCVFwFB761sfTq8J5e4qDegmLaBQCbCvD",
  "key40": "HNRNYqqwbdibxv3QcffYNo56QtEKuXfbbf8WVAdDUhXJf7kgfayXE2Q2juYPTYQxtxUP4UbMkRvYrEEmChSpv2L",
  "key41": "3oNFSsPVqiKwdYfaNhCdaXpGX6w6DWxqBnQSQvw2We98EFkVVyuXA7WxKWXvoEVDE97WazwcRUuB1YBwWWxmrrMp",
  "key42": "4JMQMnKGrtA9m5zeeCLqEp35XxX1BKMf3xSxGtH9ttvtj3NzsdPACLkr2jZJyDqJUBtPDX3wTiwSBot2mD19WZVr",
  "key43": "mje33REnaorB2nijUWKESbjeaokqM9UUHNgGLpgk3FHyrE9KZY5VSQ8JoX6CzqU4X9ZpirKvMtR5Pcshy7Eka3U",
  "key44": "55q5EBomzLoxX9RM7wAAY5CRVpeZjta22w7pzUCtHBAswC1mopawjpgwab8R2Z71R9BJDUdDEMwWpAGtM11fyvkG",
  "key45": "4VW4zRVJEQKpgcN3dzUxiMUi7hPx5Bp8mnVDZ6K2eQvdvdDsD5eZQWHqJkMTtehJq5NcV2XnL8Rwj9GAAtw2YsfU",
  "key46": "3FETqK6owJEhrrx1ph6KELnouBMcak8C7wdUWjFbUmkgF2GMVgh5CaFzMYitjs2nfQCEwAJxZzXzExddbLABxiu7",
  "key47": "5imiyVzF9xBMfoT39PTw3H52Z3niAoBjptp6EQcxsQA5ZeLe4qHtGk3vJd3hNyTQnxCQe8KdyDhrr3xHBeMpD1Bp",
  "key48": "42cFyY3oVHbV3tpBFmoVnsV86AJVSggC1dhWViqgui57cb78psm8ZDcMY6g4sauPo3CnYsnstYxHni41VsC2e5ST",
  "key49": "5jKMDE9BJgRp6J5F5adzV3APe83438JZBXhYd3QpZay27RAzDUhthSL2mj4bTFXie5MMph3iv2SoSd8rYuoebJWk"
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
