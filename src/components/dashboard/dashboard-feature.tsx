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
    "2fG4CTusArgWBQ81m6gXgHEPWRw6rF3wdVPS5iB14Frec4bePKMQbXteCU6CwCsyqZY19YD8Kr4DS1iPwWmBMGHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c51cNsQg76AQznT9sVi456iJhqENLZMa8e3ec8DKYyDrURMbutRpUQWQjfHoXjL7gbqkTro6AP7V8kG7kPvJRUd",
  "key1": "1SVnDiuETgYBuue26hAerALxnSNc8Dih7bJkyjCsGJWRShbiDxjSWESFWb1vAiHroyPUEFxkdEKL65svtt3fxag",
  "key2": "2qDkBZJoJ5323itzsmSXnLAsGRtu2AK6MvtRTQAAYZw5wKcjhSLZJqMZTPZe7vvMpx3YKGwR5ittECVsLDrjwoYi",
  "key3": "2WoGHzzQ3dWQEwAmMMAA9aqYEGZ8YRjxHw4DUrXgbABU38gZR2Jb2vFYqMoHgpYFZ5FZnLPonXP7MwGzuDNcrLBF",
  "key4": "4U3DuixASVk2ji2cipxmXdTPx1HgKLgjf71yZghaQQzFrffq1wCMcZJdCyxH2Y7Vp4GPKtXfejRDqYNdUMyCnAZ",
  "key5": "23Xh6TmeiWSBfG5gWmpnDndEQraquJqgVMdFFYTrCFuANBdG7U3Ryr9owAsKCFr3RY7HUPA4kqrociYCKzYobswJ",
  "key6": "4g5ewtUTBxU6AAqVHL6WG8RVYV2WC8uzYZUCzXpx3dVYq4mE78ou4JTjXn1UWBTDr96BPKbngFksTwC4z6dWsEiG",
  "key7": "4opmnyjPCZhrTQ5RzTHKkJYxFETuqSGRwbmGethpUXEnA8fnpKCJtLAw4XQyjhdA9ZunV78teUSHx3CwU85aSUZt",
  "key8": "2DeDiF2HogBjQa6hiGYpf1Qc8ecr51khCH5iHfBgNFKEF43ccWApxcKmkQUquzcQ2JDBV1T2FnthNMHS9N2hDauk",
  "key9": "4tUVPMcKGJRUPoZQCbZ6mRPjPqxUL3tS9uKnCKWJpXtMFDF2ck1H4s6rXKRbk5JAdkeLcLfUwcCSL2BDiMbwpGFi",
  "key10": "32UWmGo4Zpakhsr69RWdm2n5nfyTyyLWJLUZn6sfiZxAb41nXYkxStqPWVgE8iNHCoFQHc1vx3hrtQkd6yFnAnNH",
  "key11": "5W2XRcpvPRi9wxcQLyncqfanCbqUrmCDum1DM9WVDgan6gz8qoxgHKnvdTMUpSAG7199x3g3uvB6Zo6xGuQkY4b2",
  "key12": "3VtSsjEmrteuj1kqtXbwExbfMRbPY2xz1NdwgHK7jzV8CfQNVekzHCHdPor9sduLyn7JaScvMB6PfJqHPHPDE8C1",
  "key13": "3qWWinpHGss78ACXBLCug3PorHRizQqtnoHVrC7Dy1dDgpm6Jzde3obZ7d4M8515ut4DEJLR1MS2fcAcScc2CEuP",
  "key14": "4c35cRZuKA4pxsr9tvPh6p3pLqYnxPH8ufVCeaqXH8NChJbjGssxJRXLA8SQfE523fRtB3dfrzb9AzvXnJKDyK6d",
  "key15": "4yQDT4TgW9QBt98VkZQ843c16t4ZX6nXYT1rGL6etpRc3ikqF54ZQKvJkC1LTnSmZy3cX7gUJcL4soXtnsRriSJG",
  "key16": "7jyFgLbtnuNz2nVTrgAAtZXcatTyfkJoEkvTEBDnQ2qNYHKn2qJvLH6YZYxbLKmEaRughx1PAoEnuiVSpHNUN3N",
  "key17": "5J2yLWVEmkkFuqXdHQvaBniioVVc4WYGSabtW3SeqJ6t2e32FLzofDkSEp9uuPudTaC4Y44TLWQvzMf6nKjhtrxn",
  "key18": "3fDRj5i9sXuapnbNCWazGKMxi45VWKQVCwoZU1E5F9PEf2mwu9Z6G3fp43T5r1u9oFy8ahbn9c9qK2se12z7PLpv",
  "key19": "25AMJu6in8mDX1gFCNL1wbMNRHtR8Qyas4DQwCU7cxHhaj7yeXivfpPVQLJ3jyc2TpYco7XQN3TypXRHbX2okDh9",
  "key20": "44QBdhk9wjpEosRT25BVz7mhg8BYnusmkGkz9GXdq289KtKcGFUNc3Ea3djdtxNiw1DVSZMy7YPVbCMHvJSC8e3W",
  "key21": "2yJo6etfyaK7mpQSP2D4cpB1Msp89jWxVAKmThbQiFwoqzHUZMXhPSAYo6AnnJtrzMbxBFZntJM1cGqruNF2Pm73",
  "key22": "44tKa2x4GBiDYXy9ckqCCSZXGJNicD92Z7BivZCLMRNDXwvADvTMGq6bv6xzsFRpsvcyx4M22CxX7FMPVLX5HcrH",
  "key23": "57JsKbaGZdczbP6AEs6oASQEiSbpQkfAQx1Pgma6un6MKakttJijNX5nnC7ZU69Wwc5tCzFuQqa6fkgbFGUyidNX",
  "key24": "YxxxHFVE3SZjKyQVE3xfndie3D4weVMQeZxZqp9Z87A9A6L48y1VZXXRT8U5n4CuV5t71KrTmPgdVkuWvUKviNH",
  "key25": "2FQtg8JqLXRmqaPzRWTFdJikPYgryWXKfJp2giNscLaCDZmpvN98TPSdB2NsxXhv2wNmJB9tWyWnPuLpPEVGGDFW",
  "key26": "4EnLwRNfE3U3LquBxxQyi2xj72Vd6Wh75U1XiwfFNEhyNfXQ6skWDtkFDunocZbUojBXfHeNEuGRK61ERBBJwp93",
  "key27": "5r2cyrXN7iQU5VttRmW9FwFxiUm1W49V6nn9NLKcfM66hdSDAQfYGMg6LfKzLhyenQFPkKxicaWJCMAuL9oKsM4W",
  "key28": "5oRoMZhtbjNHAQ6SnBbnpuuHP4AffLr3g7MRRrHbrQnecDxjQxtzbpXAuNnSp1yzsxGCzqLaCMovXiWoi7b3FERT",
  "key29": "QHHEDY7B31nAHbv5SNyAKC3EtNmhgp378dxv2Y2nAEcJqvmFWJ8Yi2zbVhnLkqXWpukgS2Shu8cNbxKWpXKTsSR",
  "key30": "4txN77JA1CKfV4Z3VN3Y8pLk7D3EjbcUMXPx5H6bDGU6n1vg4QifNsApPHfvhVNMPa3P9MM7UzeP1qiTTZ6ojVbN",
  "key31": "5SDTFnJysw81eoX3WK6idHCGM6t9Y1R5CjC2jH4FcRG2mQbQ1v5VZvK3ANxS3xHNhQxw5qdWdp15pbbMUnfKJMoN",
  "key32": "2Tka1vEjPNJrGnmdERKwGV7hm2nEZrDQergamuGsqYDA9Td2ghcM1tk29FwPDumFNzE1dh3hS9iHz9AdyqeKNmrM",
  "key33": "DiVKZQZ6hkVTPJcMGTjpwNbdZ3QvAzsf1Px5t8wDbL4r5rRf5aB735vv7zxYGA1CmmHdLJMGp8VtcfLhvgQJ9Rj",
  "key34": "UatKZUAy26WzMveGNXWTrAJoFxRPhgwwo2pswEVFFSNJ6oei4xSqjzLzsENxJDubdCrmgJw5AHjpakB8vfiG7sg",
  "key35": "3cxWEfQbGoE3mqcQt9yBPaFG7gZNMVr8fJgshzeMjnS6cBwAj1z5PPRBDSxG8dXhZXFTK41FebybGxrPg21KYdbo"
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
