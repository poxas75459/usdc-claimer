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
    "5aRzMuEUe7eM1kcmpA4jEvRVYqzzHx411CUX832KYNWnkHQSG1zDGnBc7pE3RzEv5Uu63WQBogqhs9ABBykgw2sM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RA9rrBK6pevGYV61aNoWR1irKuGqvgDDjwH5UZYzj7CNRLPm2DpthPjFi3MqT6QJ8oGryBWH9xXA4bF7NNAf8kn",
  "key1": "5GhFBT44n84QQeXPN9bFK1wDt6CpQvmNhBZJoxYAFA1YXJZ9Dwpz7oD9s6rBtyDVSB9Q8GXYLkwnmBohTPqyMRQE",
  "key2": "31nzziTWaJMBUT6uBCrGUEiEeb1qxFDqH3xBu8qz6cPGtDQNgbEL1zAJd7nQNhY9uPZWVqgucTR5WKyCvUFouEGZ",
  "key3": "3ojgwEgLr9BFSq8ehFYTpaUUftxKd2khpwizyt88uBmwtQGQbL33j1RDqNvXUCDFfqHWqcZpfhkGYWakQCj96nJz",
  "key4": "5gKaeBrZYteFsC9cQcp5mbPoJm2xgyvsZfVwiWu8QxHhU755mABeUK8x9x1mzruakbBFp7o4fqcWGweCF7YM6Jdu",
  "key5": "5wxEqosJZyvx8Yf8Ag7sxXCszUwRNPEbNnWZuYBZSGekJssTVtP1ZMkcjAdLKLh19bVXMuwCGGee3BWLwEZuqZbP",
  "key6": "o9f38keh5atRWiMg9tQWcS3g1PeReqkyKRYf88nwy2dvEsASNL2uu3Z6BJut5hUpZXuch1MfrKk6jkYwxC1HQf8",
  "key7": "2vdKCbsun7d98K1EJeTZCT3NekMCn6vsRDbfpkgHp9dGVaiiwR3mdk5Y7mzHBonrX5pBXtQVdE7fXn6H8rdVP1Ln",
  "key8": "qvXSPBXXeRCphL4e6kzFRvn98rj9ybN1tduLE8uH8TVCoVjbXSgZQkUxMNAkh69CXVu2AHFVDYwKjJDVFTTTq87",
  "key9": "2ow63igTnzuWzEfxpAhzmJEVeUuduC85itw532xx4qCrSLwo9yZn8M4qt1faiPPjVAkx5seNuYG5i3qGLAtTDaFV",
  "key10": "4EQFCx442sQoCdhmBiZe2xXiMnvxn9df1bvC1JGbjQeJycnbrWDNKLrMFEHG2QECCxiLaYMh2SyFPrptXHua6vp2",
  "key11": "5sGqASmm3QQfBoXwLixXpum6jkdJWTKbHmKer7Au6TnfaTjPtGo3fuDs7Rcy4yMDMAcWSDfDxipyXXwUU4aPaZze",
  "key12": "jx1AehwG1exjL5NNNub3YnfE5h5dH9wtWFShCTkkLWeHv3sCqJDbrXcsznvCaMhWwzZaEJScV2aNny5CZ139Sjr",
  "key13": "4jCdJ6D3UihhXW5Dk6pwHdV5NWLmR6tou1gMetXPuw7UhcwbSeLKqgAmAmY2g5A7ifChdJniNr67dDuyEWyMjsfL",
  "key14": "48jiDXShxE8ka1QNpz3soAddaxF927yPdCdrBSNdNp3sYoxmqDvDUKWtrSu6j9ftWpU639KkoHPz3YoqAJYSNfad",
  "key15": "5cUSY14UUEKPZDGEABFQ1bD2FsKHZC9VbX76UzT5AXZBA5UcjEQ24x81NAicmKJsrxGQfhNLTgPq6pkWcoEm62T2",
  "key16": "64ZXvz21bDp5b7c1qfwBQ5ekzrHd87e2iQuqpzpJaqSwSqXmM9Etr76GNRuC8FDtisQWNbzPgBY7zbZSgG1kA3Ar",
  "key17": "2mdnYBV2fPEePXY1KoQQneX8Aer1WvGqj2ntCSa4d2WLiCWhHNVkd955uBLLKYPWRJSDSxKHkAEvCo1iQrzkfSWJ",
  "key18": "3yfZwToXQK7dtvC65GVGsbcHwca4g5nM1yjzxksmV8X59J8n6XUoyjjdhZVWMXV31LYdzYa1d1mY5TQ8YYRxZ3kL",
  "key19": "3RZTgCCbjQxc3f6VRvQWyzTyWipLZAeYc5QDHMNm9uXVHvPEnw4P5siLiuiaQpCVi2grFRQbntk49qDKZdcbgrvy",
  "key20": "4U71pF8sMPU6Y4L5SeFpeA1bVeSumAhJuU1qzqhEVibi9iMsuhUpqpQqF79CUwE6PaHLty6zCgUMa7C8HcxxE7pg",
  "key21": "3LShRYSZ6e9BJ9J4kLAFHdGiBGcMxec4KGB8RB5fEyuwDJUZ3G9xTmHqyXB4dNYkwbJhU9Z9iaLykUXcV1vikGyP",
  "key22": "4MuBHbCWS8HrC4zBRvaiTrxcGCix14pMmbSw7oPC4xzVCFq4UkxqkB1ibuKQYCu1kaA6NVcJ2ATkCJmUKEAaTBBk",
  "key23": "UZBVTzuNsUerSwm3Pke1VZd73Pf51U77q12iieprHrm9xdrR25rxi8jbqz1BTin924sjNyNfRr4YTuth84fQTqp",
  "key24": "5Ljeyq1wKVjzhq7MrozBy3LmZQiCxoBXbC9Xburh2aLE55qsfqXSqLf2VWAkT2YsAfSHzsQypKSGwLJFaLpxynwP",
  "key25": "5haKVKdfa1mkXThAFLB1LbvZQ5JYpr9wZwJksvHKd5Mp8T2oHPQBo1qfZ71QANcnw36XV7kQLqg5Z3HgktMvKm1K",
  "key26": "3KTRLh7ZLpqUWfEMwh7YmZUjpW16nCW3ZMuzJFNFqGBG6MixDVi7eDfqmTVU6DpczunB4FK66D5Jm3YSngh4Pnib",
  "key27": "5pXmiUAb2ik8wFzTQB7nFrazdMM5TnX7YBuyx1X1btQcRZHp6Zve9Xyx68AGPqsFs74QYkhBMsqx6SaL8VvYp13T",
  "key28": "4aMhHwUfMdheAx69wbKJC7VzDwSTDEx9RBiEg3ebNujLEPZ24hSHRqR4LE88REH6oumuosM9HqsWHouCyEZTjURj",
  "key29": "MrF3mDjYtWzE52VdsdYWiBapGEeSv82DW4uLhL6tg6nuA3LzSiYpeLeZkTASr9S7GPfcY6sBk4b6RfxMP35dNsp",
  "key30": "3mkGrQXKnd6VShHq5pFZRG7pd5M7M6B2wcKcxv7mPrwXNRP95nZRephdPjynGDR75oLyRwtZcicjBHgfDLTGzXBx",
  "key31": "GVwVNcuQSGHV6iPMs9XySM2JoFaWUR7SeQ2ictgBkTCTskfyFFh4pg2SEQ7JSpnHEg5x2ASo264iKW14C1pYijy",
  "key32": "Boqi5nJMbGK6twVeS8EUyBMpWKgC1RSjVCQKvFCVzeP5z9sDzJbpUM57tufvbHtxtLErfMi1aWaRpxx3bsDPnny",
  "key33": "5fcNNEEpgG9J69egfUwFSvnYbzKiQSHuJH1KhAqEPSRPXTmyw6jJdpNDPEEuNzmMTm9fBz3y21KWAbmgdaDCX3RX",
  "key34": "qaG7Mp5f1R8NneQ1MoiYsdfKUuWzeFV4F1w1DXeLLLntdghLeVSFELykynDsTmHWQ1KbHbUr5yxvyXr2if53MZE",
  "key35": "5J3imp7vyad1N5brA7YH4me3TytWKnArXMuovyVunrUx2BS59wSEJh3yiDdxeXSXUARkvXHvzRVNsja9VyjAT23A",
  "key36": "39suEkWggtTFstXLM62WpGGVGCp5QYZXUipDDE4Gn29S2hXXaW8g6AHVu2Rb5V2cGCr4AA5L796KxkDT8o8B2K21",
  "key37": "2SyNCb2WWi7toDbeKd1BYA7nD5ma5ZFLWELtA3fo9of6GTXQgGBLQAA3a6NBoBY45znQ8o9HqK2CzWxfUQiYdGcJ",
  "key38": "4Xz7hh7svszLV25TKywxWWHvm2kh2gAd1GUvFJzB4TR8714bu4sYYkur5AdrDraM5rwPw3oHzjN5gSa6UxSgDFL",
  "key39": "4Tg2qg1FxiEpRPJVD4UuEfc3Ggj4mFa1JquVD9SpsiptgzaaJzC23PP7QwVRXANxTQFRf5GMCJ9MsaVAokpYGzjq",
  "key40": "49uCBg3utVB8z5EvuDyj4JAJQSTeDmjRh2tijUHor1miyU2MCVj7LJPF2cLWXmFjFyUcRBDWkzkbgqAVLEyh34UA",
  "key41": "4RzFR3MtKX516W7okVAYVUCDqdWEMC7BJ8LmvKuxjycMkBTKdxjtnqqUmHtgqA9dH517gAY6NbjeA6iyzKtCNFyz",
  "key42": "uUrsrM6MDqNTNLXwukFyvMr55VFfoDERkmuRxf1r2NvJSU9qxSP7MRSjRFrp4UWbcMt4oTBx6z7yowRmJktvWq4",
  "key43": "Av7i49uaUxWkiYWP7FhTrgAeCsLoD6958DATu7LJ9aF2z3HyYQHfJb9iKbx5zQkRsRGSaxMJQ3wG8LkMaCeoHSE",
  "key44": "31JzR31GybLng847KVWysowuye3mX5Js7EYgFm3P5JZvhMwomj7JgZ4y3gpuE8gtXgi832AqNr1iEatMU1XsCeVf",
  "key45": "4CCjEsFCuvc6dgjmPLweiXS7LL3w9bToTUVUxDcGsQpz4zwqswTyLJ2krRh3UL7FSK4FGBCmazfyJm1oQSacZJig",
  "key46": "3diGsnNUy8uVd6GND1JiXTPcMdcWoUQyVYCJNhENXDCSqUAutZUYcDwA9Dgt8TUEe2YCKi3USfm9j2y2nDFuVXPT",
  "key47": "3PdMaW64jXDvVk3jMeD6wEGgvPhbyUoCJHW5f1TBMcdWcFF9hFrtG9BgKarUfmt28g2e418vJJdPNCBGKEGiYghU"
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
