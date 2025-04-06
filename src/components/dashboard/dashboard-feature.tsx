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
    "58QDXoaUvVzFRBL9uQuMYo9hC1AroaSo4PMKDmQLpJaB1oUY9xJKfSoeCiQ7DnZ6MZvRoVG5VrEnU8bCcVouVUnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HmVtjqqx1Y9syHvjMVtE4DgiJxQ11CAgPkTxCpbzvKf6Xcz6DehqmA9woXnQSNPmpWYKq9fYvAsj8SmsrFsjF3y",
  "key1": "5SQdjMLmGbCZv1aUe1TcjmgbgE1rSivhM4Ug14cgJPzvt5Mm5cPpFgnYcdwWDcPnbqeVHixK6ACCH8vPqm9WtxnC",
  "key2": "aFwgmvqqx6u9wfMb2WJL3VYRy5zYe7pvLvd6iagkMch5bhDQ98Tqtrzb5cAGsXywfJLyCmPtMrt5TpczzGDKU22",
  "key3": "5YsLUd6kXTh93XyhZCrhoX5EyH6EyJYrtCfCug3nPMZcXDRNhcswbjwh8foNvB3pejEv71PSmzaqCi24E8ZQXpR2",
  "key4": "27hGpn1GwJwJ1Pktvvv7nJmXc8mZrxRxRCFQXjgk94XcFmde7jFFmA2oKmwjLaVxAid4VP7C8EDBLM6ZzzYRQyLu",
  "key5": "4WXhWenPEr2Vz7fTP2yvePxoWuThCmgpVrGVHMBLwYP6V2MPE5D9wMgvp6xcBLa22PDrj9AAfQUz1Vt2pL5yctX8",
  "key6": "swEP1cKLmjX1ZJYZ21WD8vrF7RuZdm2V4x25GcTaAjc2VvuhtVC5LPpfLHry5zqhQATfJDYqrJv5k9XPuwbiKCY",
  "key7": "5cLh74V1PkFMvQxbngKtmqHCC5XJ4v9Er3d3kP7ZggCFj5Cket7Y89wgETRs5qX72n6vobM7C52ZeLUkwqM6Y8kt",
  "key8": "32dsGeWz6eUjYENCadLpcPmZLRdCC9igxqZfQEVgTXAdYikyUgWVQYRi98Yu918q9mtBWkkLsSSt1MJwZjoGyX6E",
  "key9": "4J71edRXnhCZ8oVvMYsfrMcumNv9xr17HwCQG3UsHYmthwngxk2FXkjogxzZypB8pAZfVdddVD6G6RbzMUZYCo2w",
  "key10": "5hrsdiT6GnoSrfs8hCQLH2PZtTaNKNmcnrGJF8DJQtKGdo22QZDZtRFv8p4EPdWaRxNMSim7GmEWY9R212RXnMxL",
  "key11": "gP9piSuHVqyVhwqi6y9Fhtg1jJWM8M9NHEh99qmByxZ5zVnnzkHK81DxZYg21TdgUjfAPusgy98i9v9KrSFGseV",
  "key12": "4EYVL1XXAa8JvbCHW45CQkbdfjHi4PFbpdUDHakkxXTh9Y48trCdWdR2fwfCDotxLmPS3VvrG9YzFde4pfQ7DhHD",
  "key13": "dXDRbdzcftdmoKxv4ieq9FHYNDva1MMFeuBNZexpbuVqFoez1w7KBkrtfVLEF3t9bajgvTGokFr31ec8ZDgvGJi",
  "key14": "5tgYJWnj15bLzkwJwMLKAbhVzg9zRMK714XJvnG6u6TVHRij7Pt45XxEJXhB76ynNzfbVm6vuSR9pt1b14bhK2NA",
  "key15": "1r6dCynzETQgiMUMkX7S6k1fSe2owJMuf31BdHriUXWuQFyTVJqocfWPAZBcq4ejvjqx2g7pyQNqDV8F8QEuk74",
  "key16": "3b7xBmgcBhzRV8qwbnkq5mxuxX6FBbmZNd69ogf4uFzuXgsjuMpoiz3R7bzDcYdkdseJHdAhuPgmrU7NmGYSb2gC",
  "key17": "49LWAHSP6HsFDU3zodKhkKWFsYUiBpavZLaMtvitHL9Nbz72xHpwC8NArLMF823wAePnXxLr8kooVXbSXuU6nCCg",
  "key18": "5Y85gKgPXkbCn9nt8u6PU8SfcHsAVBYbyBmR4EwuQWnkHpUBYLvF1eznNCuoHY5N6HeS72sDEpEqkYvZa2xUehH4",
  "key19": "2efATCYXbj4T2TKAj22mAfG4ZjW1aDsx74mpLetVU7dVgJu6ruDwoUhBS7v9NPw5bC2tUDJx6DMo9DHEdfcnSyp9",
  "key20": "3LQr3aYuXD4s9EmKuF4ZHNYumoYVSTcNVxdZB9pL9dMzawrxL43LG7j6jMc9AftzVNfRngQFkeJqZGRpSAMRQg9J",
  "key21": "TVi9gVmgs4NtDMXMp1KJ978y6eSBTBtGvRrGXPU6vLPftWyU4eNFQNtJNGG3dgghcej2KfPXzy916qLcPLSwb13",
  "key22": "2Rg9BDJbsz1vdhPmHCBKKiRURHrgYvDKj86W1aPz6YFcexqeUQUiotzXT8pBr4hMLeHn189zj9VTA4wapfLqwahe",
  "key23": "5mQn9hLgYyw9aV4aFko7K78WuYQMHj1radA8CyYUNXBhViUYRX3u3J4VPppRztpAw9Yyh8AGGwt4YwFgJGsHBViE",
  "key24": "MihJgXDCscDdQ5uV6NPVv4v5Mr2TpAcLTEwTtBJuwCETawsGExk75EmUfUHNT8eHwESnibo1TVbpUQyLhrhe2Qe",
  "key25": "4QXgQHihmahF26ftMPRa31ZKPCwqinVVVcGECuMpsG6avotttxJsx9FtGKsFgtVf28PN694qPw6EHsvhUn8h1pUt",
  "key26": "43GUhXG6m7S1H5xxRuoFSqqBnvDn1k2aF1JNXAyRQVJBEqGzPVkmuXx1P7E2GVfzPHDeHraJ3y5yfxqxduQZWZZt",
  "key27": "fTSSaFVZPm2rWfeCRJZ7aVwug9ive59bM2oYRq8PdvhWG8Kw32Q9Z27JxJBNb5CGqoDjdggumCyq17LtjoZMVxw",
  "key28": "GTPhqcqaWM3tRj3Y2V2kXWHuTqnv5yJsc9RiDFTpyYy3cDp9LE1ds5eYznjNuUAqaKDWUpFFinSYUXzQPZD2g8H",
  "key29": "46CjdNrYH3qx8bWYFy7atYB2QgqFFro29Z4iMLDgiBdYYErAwSNt3R22RgTbefZdgZR446iWUG4eQiGQA8qrXPjg",
  "key30": "5zto8gqjMpAGt8VRdz73BAqNBYJzbhPe5hgXPe4GHD625F5oGM9FGspwqdxAApeu97E5JiDQrRvrhAzmmoHc1XeP",
  "key31": "4V6dNdPesF4qGpaGNxLf1tYc2GJZuzA18Yzhg3jqYeFGY83RZZZdSJr3Xa5ZHuBt4LJ6n6gAgQ89B6yUGjRJSkVw",
  "key32": "3JB6D9BnJZjp6oqzYPjsaQxLbQ7yBTcxargJdfmid31LJbhhDbL3M2xLm5XQEKKA8uDVByREAsfvAqqtsnCu3D6m",
  "key33": "3wEx2gCtTdPwASUfiPJJ8VawsdP4JXUpzizFCHUb6LxQF9fQQpVintJBrKAhHpzj7ugr2Rwdj2asbHCBYUMLuiP2"
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
