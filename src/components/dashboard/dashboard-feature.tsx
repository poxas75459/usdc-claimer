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
    "3BXW3Xgna3QinmVscfDB9tjQusWzRYzTHLBMEMxDBvbzx8LoYJhB4riVWT3mQoFxNRPhyuNPdZ8mXCVsjh7sJfCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TmfCavNYdJtVxSj1C5x1GYP7U59A29Fsj4chvvw6nbg5wBNeFU3YEmhVX6jGGcDXUhtXbEQn2Z6Up4b5N3fqqSj",
  "key1": "5m42ARxXXy6y7B7tB6xb2sXBy4ELVKxb3cP3DbM82PKHzknusrkoqyUAHVq96b3aJN8ATZPNzort548de7nZnEQP",
  "key2": "pS1bSVJTVsUHjPXyVCN4UWBuSUkHJvHF5FxtBfgVQVd8XhmP77zZcEUxSJHVZKpPjMZsdo8x71G2EZ2Svg9GJ5Y",
  "key3": "3kpBCkA5DKSF7vGCpxyuy5ann94uXSzkopg2d6eJAZWQKD79nTQ8NGysZ5FWqAtyCT5u7xde7ct5u5LDP8THN1xK",
  "key4": "2LZBn417u4En3WmrwoesTJehyTxUaqqdir8AiMQYZsyuz38EQr5rK1miRHFXFEd9SrQNzDKYPhkJF62k3gUWqAPf",
  "key5": "3qN39W3tjD2N7g5PHr5QwZJpgkWeAeArx95hJkpmr7eFcsAzGbsAEpwYr3nxVETJYxS7yzxaKyrp9D8bgm5po9Hq",
  "key6": "7KWfG4QKqZtPQEmHSr7LATt7heFjhDVbLKRFzcLikpQrjGjbSkRXebj12cUsytVZFHhbujRm75WodhUnbT63UoR",
  "key7": "5n6AsZhndiPX33r3PRsXQZth28DijXfU5FK9GLAKCdLUwKwJdT3DdEJrv5zSEEgbWwNEBvHAuUUR93csCnwwsC6Z",
  "key8": "3fk1vdrRVfUNKQ1aRBZWLygith2GM7yLCKWMWVLPgErVMgSj5DW2GJbLcfpkTAPmmXVojpXwtrrnEPwq2EwkAyx3",
  "key9": "2rLxWrsC2pjfg1qjgJUnQBTLaJiTRM9LciH2qjYGQdKPztdSWYBfnbqe7PXUsjd3isGV5bJnNbS1GQNATVKecrCJ",
  "key10": "2diUsjjVNMfbJdgNQj2hAEBj1DYr2QnFwSyNLse9NaX7U4GgYuaKo6HK9FeYjEgWzZDaxFyhhZD9XFBrVxu63fuS",
  "key11": "4cq8vDFjdHGNgGC6yvZPmRbWRkf5ruMwZNz8pX4ZQvoz9fpM4vdaHqzSaPGPqRhHVHFhnXFxfto8GRTiidBDVg4v",
  "key12": "2rhBcdmxiRkvcXCcbS8LiA14kopCVG4CA12o938wLb3SdhTjrJNMtJf8ePcHTJ45WCGNGfnBtWiZUmXhhjYHuiFs",
  "key13": "3q8mvTFmnQ2o89KiFA6N2h8iXZaTAu33nhoPECBrsREDTeMYQQUofSSTkNoQAEVZf7biJW2zcnPjBbxkbtafhmud",
  "key14": "2xvSmKxgvyVfhAc6ABQLzGmUM86AznKVrCf8jBnc8XUdetHnVjqVZNNAsUaAuYwjDriRoyPSiw6q3Rq49N2UZS9h",
  "key15": "5MRcC6qmgqRtaB2JhaMrcuEv5xEZVUR2jAXLr5FmTeoUBpJRvsxKvtZ4omDDzwjhCscLR1F5fmDKDWXNqLtiw5tr",
  "key16": "5iofcfjdKBNZAHuYeFyLS2ephmWgXCB2fAGHaYAVnsEbuYDocLwLA664Nh3dnbjr8LqTLG2P3aWjsHXhyVi2yi8o",
  "key17": "4qdopQ6pFaoM6hQ8dTiW3rRjoHPiN8BKDGDYQhfywHjNWZRMznxMokoENy8y6N22U8Dx6efUY3TcmvsDACsJLitZ",
  "key18": "37CQz2nUzrnxgSqpk8c3ewuE2nn3L29Btu9TWK5LQhZhjDdDak7sh2gYPfSwNgTqSGpvsanJnSbUb37hgmvWrjAY",
  "key19": "4zVEZMvsFgXtDPYytpid5a29s8e1tUsjbmJ8CE4iU1mJLteDGipmQSv7J6brvDmuCyzDTfcpHgrbQc3J8N9TawNP",
  "key20": "3AmvpgZtkCKJuKz6n9cfkdK4YYnMhTr7XhRVrp2NYXSHuL57cpJNqGZdZvScGwModM6Hu5sVJquCjWjFTFdEsm2k",
  "key21": "2LRsEaSNXyMbvv9CitK2mqDAd1HXuqftoytGm4o7pe65wYU2NZUoZnHpAwd19Xox8aXyVLmgDGkdGbT1dcZX5oFJ",
  "key22": "3iu2FCyMsiLagHi4z41f3t82UzbSYUmmTiy1vNGVpYCgsHSrNqqWnMjhJT5ajfLmdzjWKUy64SSWn2vENFiA4nLp",
  "key23": "5u22NMK78sGfw39ZHC4SuNCQrjNDzdXFZvdnuuk86acYYnypfZr3KRkGcSXrVmEVyVLqFVP1rVqaery8Z2AA5QMw",
  "key24": "3PrRHuQzo6mijBNdndnxXT4vgCWJkxaef2wBRRLvbW9AzhA6cSjqhHKLa6dM7Kdax1JvuVN8rd1ikChreLhk1TCY",
  "key25": "5QEXBC4iga4nL7KMmZfaYMQhyBMCwhxjD4zgNFC4GurRRAbrLLqAkWhQZu4c2ejU5JfZsM1aPdqyG5NDJCfjPUKT",
  "key26": "2LMEWP6NJKaVKNefXU4aq85kGeERiP5B2msUH9XLAMMDFkS8kLrPuvqeULmgtkSPnue8cTu4WjCGnYxQ32VmXakr",
  "key27": "4xxq9SzKdZEp1LDj6eQ5GPjQFFfqWUWpsHS1kpCZqkN8wf4ovCaRFmwj6KFELQTC6G85EcukR38Gu3wn6oaHhXyJ",
  "key28": "625KKbsQHGifqRrinK642e7zmMfN1iyKeY9Uu9drCp3kfti1SBfJ71YWjzcwQcaTTwY9RHyqvHckWdXMcmtPUZBE",
  "key29": "3QdJAynEQ2F995hfKUTMah9xigittDAmGA3wbe7tnm7qNKeyLb9eFWxgo163ubsfuyubFNgNXBhEYJD67LCKvit2",
  "key30": "4hNEbSrXUnYfEdZ2unQmYUKcLMtFKc7ZNJScLgHYtt141Z3i86hr9q6dQpbJ4dYDNCE5k7XHPspiVTZyhJT39iBy",
  "key31": "nR6TZqzCzUTXmZexXTT9m4j8ZpyvQDzWKmDvjdAsiVmK7Bd87HwCvjpQeas3D9uBSAy91xjZJH72skg53ZUGpbX",
  "key32": "5B64bKWVytTebK6pfEznDegBvUoNUfqWzvPGRK4dqqwj6fXfYHGuSWU86vmWh5RcBLgEmNgTnnvuJoyVx7YLbNXc",
  "key33": "3X1Ec4JzniAM3Rim4w248aXcPVtD6Fz1BxuSgZ8epk6gi6RePnSA27wmoSB4rwbhFspJw3aiJXJVLmDtxxQ8xA1x",
  "key34": "3YEjZFcpZVNTUT5Y46fjookZPJtZEK8sHh2ebkaQs8CsHcgAwthdoJSJcX4XVeBtATkEUPf9bY5DZEBxX2t4bRUH",
  "key35": "DgvwFKD1zXPxnj2QmMHHrZSzsFU9g7Rjun11ruPZaJDR9xGEKF62E1aSs5g1gU9oyALJ5Vx9ba4Kugg1KFjYtL2",
  "key36": "4nRRZkrnNgqgy8Zve6AeQJHHzUcYaZwKVjkTgLzDKc9VhHZvcPec5ppY3m1NhLngAo9bNrKCWqvQgrRsmfXDUDxq",
  "key37": "4GQz3qunGcS6fzW7YRXpWAYC9KgKBoxNKaUeQ21GVVj2zQG3uRczNsFGPzH3pKvhcyN3C41Hf9vpsY89dzZDFWNt",
  "key38": "2MHURUFHvZADoHqYoLCPQWqHi2vGY7ZCj7gFTRVBcRQ6Sm9hFnmVTX5Dy6xvDXiJy3AqFvX6foR6LzT94Y2XrhPX"
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
