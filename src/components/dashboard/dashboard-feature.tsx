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
    "3UsVMTRDtpocRgLk9LYKsUcfte4amSd8jpDpHr67ox6HgsBiE2kPvwLnPjQUjU58rEVSEvYhqzr94AgpL5pmWMoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QSp1K3qyTpWVGqdkwmWTK7vVQgmvt1ZudQhic3bzP52dpzKDoMY5xN7d7diAWKtiPnWJDwVQKRvoKyvbhDxQtXQ",
  "key1": "5Qh3h3duQWU6EDzm7v8r5hNPEptitSnj2fux997BsPp8bLh5pFScFSgq2WcYwX21cRqXdQiRsTBa5xxdpBH49Awj",
  "key2": "4xBHpkNC7ocsk1ocDAGmdfx2bQN55RxsxTygkviugow1AcCU2G1LMpwdismZGYQaddibGkTigofo24qPvGCUrLii",
  "key3": "4hTKHMyWP8G7yw1zHBFJVH7JoY4iQ3cGLqfXryJ5ios8LaRR2LixxYvPTtszUg6bo7wbS1CPNERaFNmTDCL9WNnr",
  "key4": "53XwzTyxwCy5TikhkK4A1r5H83dYZt9idqf7jcJ51aTjciSWQVbsWFVPFa8uNmvPdwiDQgmJ7QqjoY5waG9PuXZ1",
  "key5": "5fH5tsxcHWjkqSiHcu8uPyLXeycTxyFpF2wGHKghbZPBDv5HdodeV3ZRVwVCYNZUzKwqJGbumF7DYJXjKq6HeAyA",
  "key6": "cvKyJgTJZkAwT9vCcgSxTvosmas62Z1PDb9K2bgJBs4EbC8RJLCjwh7YH6SZupfK7KmRfq1zrLFRMaqhdXXjNwq",
  "key7": "5UDbPiv2uFZHK4LEpJ74iSwpYsNBcHERehyTyAF5kDqNLLn4zonWvFc9oAHccpPUKPy1THxW6gjzZEyV8nsS76k7",
  "key8": "2cmvUqvRUaz2Zij8e4jMJNCKGkJHzNHAe7RDVyWbW7QRVGCsEvgfDmfKRdp8KNjpyjB32Z1L3BzZch4Pz55A2dTG",
  "key9": "tZUCNbLVEDuP7Nyjayk97T21Gis13ZjdPHoPck8Kn3JLTbi9jPbh4L57p2pdePBewb1TwKAi6FEqFKBnTS24A1L",
  "key10": "4Rv3TNjDFZ3qrXRGVeiKJxhHcPtj7noByuU2mkAfaUEq4zhDU7caShmepiHynVC6FbHs43uVFYB8mahuEF55S2sh",
  "key11": "3HeWdJsQMYBj9h41iMHBaJT9KkXx8oJHm2xsKLUzrynjUZc9qHFtnuQR8h9svm5sj6k8sGL8Kh4c5VW2ZFGptW77",
  "key12": "4AdR7HHo9mjgCquTHWiZ1k7TuMK1czvXadFxXx5vrkec6sMz3gBHgCVD37gktiPWPTdeKAoqRkF6xRh1DNwRuEAA",
  "key13": "4FL9U3kjADUUvfvfGPaVgEzdBJg4o96Dj6SNAFP2qC8aMhQUPF67xjR5UVCBNayJh8pxeF5AfAVQtydcwMnqAe7E",
  "key14": "2dFa1osYbF8LdhTisk1KKNLXnysByRrxk2UE3nj7Fnjt62KqdSbFwrprLMGA3TTcSBdgVjaReDhW1CZE8cbBZpCG",
  "key15": "44erxbbPaYCUf9Z3QN6WEFh6gQKFG1Sy4iaGtSGZayqjBaLC9dRpsVFKuibvmNG68GPcF12cDYCycBLofmE1B6pV",
  "key16": "25FReQ1hqLnK3NLFXCfajzjCbP6EENohvQ6smRHwiTAcrWrByiuGW1cy8QrnsDqRaBjo39ttzhEbBtD5ApkBJTAL",
  "key17": "5Nq8JsBMikYgtngsufRPEPb8AF1Shu6UFZHWFR8i4joPzyjkPxTcHj3A1FMyg2hh7Az4jNDDDuR3RxwnkZMkjiW2",
  "key18": "4JKLqpWvJd6o4hHDjcaj24QHQDF5qyXptsRqtYikacmrQdda88bZ1gejjfq2DS9FXa5R54KD5BG8oU81NfXVfzhR",
  "key19": "2Lf1AwziSASzoezWJTqZAn8fkNCAUscrxqp7EP8wmYnNUQpmYVQzXMdbZGRdFw3qedKZNEYxhtZFg9eDF8vxWgf1",
  "key20": "2s4651ZsPWywB4tyjqCkR8WH7MSJXtgJDEQgRro2EDScaMkNDmJY9Xx9JCtevjNQXfVmNtBuWxsmzvUtj7T8u8Fv",
  "key21": "3NuqawgTfEChQvnggwApNk2GrE51eqb4UXqMA2Ljq3u3ip7PKevetrdyBYZvtq4Z6x4naBZQUUZVcxJkRekkQQg2",
  "key22": "3wdm7vsRFkgKHnG34Hy1Q1fVGQuxk435cpzHAZgVqmkW3wyYcgy7kZyxDwtTF9PVDkPuBwWRUbXjv3Yskpygby9n",
  "key23": "5RB5SoppERHLXdWGVpKoFV1DKWLNJSZNwNAgd7kufHT96ajtVnwqyUZoLWUmwJw9cF8rRkBZJcZG3ExJxxXn4sBd",
  "key24": "3NDQv9BndB1VyUeore5MgjEZ2kXoKJTWmvDcrbhurJP9zH3BFmYciGu5WF64xBwAnL7WpRWBxobC13YZwY7JhfHh",
  "key25": "3whVUvDJeXuxxaCKryUafUK8DneXydqJ8BdwuE6ihfpKef1aa4EzwAYpseycTr8T6qCqnwgQzZGCZx7eEmK5tWV6",
  "key26": "3xJbWsXJWvzkYGiAkSvsP3MboyofG4XEeytqiEucqin8WQ5RxRabgRW7Mr3kP5PRvEUWUWy7sEZddt7zLR7wHaZg",
  "key27": "5pbTgSGreiNxwusFhC79JCMLf5SpwEeEiCfaLSYjnCxHrG6bruczE3FLVhrY6j7kt4A57ufAyffSrQoLE7jJDNc7",
  "key28": "9cJSx4MzBS3jTrfL4E7zPTYzYJFYAYMUPHQr78PQh5Pb2fRSM7wMB1kg2XE35XNs4dUnErcZKdcx9YP166vn3tu",
  "key29": "5W5B8SyjNod7CHJSbkExEdDBgeQNXBRSFffZ12a4WFYeanAaGWSHLuysNHGXdmW5pna4YLT4jJzqLr2hBYD2r99Q",
  "key30": "5HYin8z2z7LuD9RSoeUrc1gcV7SkNZ21johHTiftPSxBW3WfdDVECNRLT6cWjwP13pu5fY9EkZQoVTv365oCmwp",
  "key31": "3Xrjr1YxJMQ97a6DQWKNxZ7E6Kv8PJ26uPzzYppR91XHLzQxhTRoveveTLiP4N1kujmskYf8oYG1FTevrPfZqR66",
  "key32": "o75hBk37mC1AMWZ19db7e5YgbCMDddHFEyC9LhuHRfJ7USEQ9jMst78sUJ3ZCikeSs3iudnFuFLYffSJsiyK4ge",
  "key33": "WQuRfhi7sFAvHDeReK9cuSEJrtJQvp7yufdMsaSWU6LbQZP4C39MAt4Rtg1TvwnqTHUXWLJY66hd2DsRxGCWpQz",
  "key34": "4tm6e7Dz1HZRSPCyukTLq1Tbt5iyF2U7vscQSPuvQeqE3MLJemXNpb1uTPF7buFAjLqRbffpggZkQjmE6BzXGTPs",
  "key35": "khwoSta3RUyhyV5p6NRoe5vpysbLhS4ftavtQrZBVZErhqrEmaqTLhnCHh7iWUEFkbTR2ukEuH6VdzuZbanFvqk",
  "key36": "3KZAF2GwWpF66FphtBUpEaZ6X6ykQyRzwqeK4sTUXL5Tbn5DYuffNs8sE1rMGwwpB3HjC2zEpKCh68EyR4JCgDas",
  "key37": "wJPTKDhk2SPLwLKb23hRSCEsWuz3kRt25yXqKr6YuwP2yhyZASc4KST1HK9quUbkTA4DKCSGrMQtzeNVGi6STjd",
  "key38": "pnZZdb4uqowfvemPDjHVFrEAgNQedEYcSMcWSLgAGJtEX3HXKVDvAF9kofUiCKGZ4SSgcGB1XsGDN78KXtCYgzw",
  "key39": "2BBCkvCrwBsAnF5khcrTnMGh31MrWETyHkXtXfSq5TvcUzhyP5SoHtk7cb2zR12bniVqEPfThqWoQmDRzQrGvHDp",
  "key40": "7gcB5uA9wYWK8ZryU7737CLSeyLEz2FJL8b14r9deTWJJYd9xEgTqchJJrg6gkC8RJSmxACEoo9ef8BnwbseXM5",
  "key41": "5vUWP1EzCxRzpzZSAKqnhf5ZD9i5g1abCQ1qNiDmmbv2ZFDPT9gMVybBqXF6So7mQ3HkX7RCTE2hECvGSxogm9ud",
  "key42": "51Wvm9EmrmfhmEerg3Eb1LUaGQ36pQJQe1NthuD4vis8FbUFxFBAZwjnhnDWkXAotbuMEkTJbNZ7VXiuLAFhS8PW",
  "key43": "2vKUkhXFYiU38smGd4zomQknB2mk3m338LkoapMWYnbmN6m97HnGemofYR127soQtbbS3GLEGW3x4nXNbwP1D3Uh"
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
