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
    "5sQo7RCqEJqbkYqsPfGEWggBieZZBv7xhe19PBTYCpfxoQBe9Mioemueru8WjdLkgZ4u1fy9btbfZtRRAoSjQkvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24yr1JuNKWHVTnhHkBAdogiWgGbFUfiVzsGbU2H23BJHydFHugGN8pycvDib7vUAQdHbm5aXU1r8pAFtTS7MQaLy",
  "key1": "3wZ9UubmcGstutR1CLjinQsTGmW1RWB8zeS2iP6VCZBNiW9vmaVgjLf6UQhpvTfzkcvHSbkd22dDdTbvWFR4XMFC",
  "key2": "64dRtZgdnLzTbyFTE8PcdPqP6VXYsfozNsFTA9h5DJJok3fT8g9657PMPhKH8mFJYfiN6hhHzYiTN41BXYuxzG3d",
  "key3": "2ZaMzEerNeRQHkmaB4bYwF4suBDpjdzMo4921tsz7ZCgoMV8tDCgrkPJjj82RZtiLWYJQkwcNV7CTNqJhGu8BjKS",
  "key4": "3MgDtVc3Wg8RTRtmZ1PmfMwsfmmhRHuopKtAUM2yUW7nqCfciwNsxGhJBQimzy6Nr9F48XHMDfbZs42aJUqqmR97",
  "key5": "2aSkhRDqEz7KUY2WyznxGt2hWwmgV1A3W7iC8qRsLgpRGcJpdB6ar43qHbsCEJXAoeMNJzuWHYbPUsUK2BteGzCd",
  "key6": "5gVhs6Jk6mgfRWN9ELjJZPVKr4TsHtNVsV9K1sD16Ua6XRifPWseMXLBPqWEdWRi3qSyHZLHWLKTd9XR2TT9oLgb",
  "key7": "5Nm8bhSw8wnyGLcACLvp55kHDvYtkyLjVfFFH6BSXgR9ccLf5hC93SLnkNrFqoLuzKQ9J5MbNbn9GQcE7cNqYd5o",
  "key8": "47m6hMC2AGctDbdN9Fk52ucvGgZRyxkwyHeR7yq2kLtHABYuAL5eHRyV1A5SX8CSK4rwKw9RqzW2VV7bzqp3kqSD",
  "key9": "49YtsVyzviHpDqa2cVtr8hPVjYiED7hSX3tP4H7GQP5oweHfVLkDYfjxjVVUTQ6mw6V2a9mahrJjHXiASEauR655",
  "key10": "24f4xzNzbNKvtt1VHiPoPNX6s3CsK3Xgfw7G8w1oUbwrYHZj87HBWdBo9AYERPXZggbwa7bxEFP1k2R6rBFeiFLL",
  "key11": "5zUUn8daw59DiUukyAQGDg8GiFyHxJorzGfKsbdjfysw6sPeSPhfzomETxKg6ocSr3ab5TNuVUs1aotqF4LMirTJ",
  "key12": "5TzSqhGdjZB96ht5WwLfX7AXCEwRK3pm26TNrKJMpcWVkyns1f1xJdXjjaqRDSkPUZn1VfnBtqjvrjZMeV1nCVD3",
  "key13": "5Bw5BuvecjnVf38GVxyPit2smNK82HmqgzbqD6PtTB2FGXRcVcrLgxvjvmiN2tqgv3HeCTjVrousFvAmJ8X6eZzM",
  "key14": "rXckAx9t5NNckJf5sHyG7T8q3GNVzgTk1yrTJMv8vWp2vT25hFVyUjiek2fAyP1gH42XtpLv2ce2s78oz8QCZGY",
  "key15": "4WDgNjVDUgCsefxX7gmreLZPii7naz3auht1joapWjPXDGrJf7eNRZGp7QsgFpohEwuWdo536dS8Bdyr2wQrje9F",
  "key16": "36cVbBawpWCxYgjEbA7ojEpwRbMnsdemRF8SypBy1iQughuvTuGm6VMgbX7nNULCxy4kbP4KKqSJcLTxmwNakoEW",
  "key17": "2WfHGKdudMH5n9JsnXUQaC3aL4jRFxmFVooMnpYUnmkADb1LawdyjRg3wLD1m2MyKxTjuLRRCzGDenkzYt1Ge3YN",
  "key18": "3csSYZo3TbxD8GN37kKcgEDgSDr7rsFsQzvr3VdCuXQDKcDJjjwJGbNBSyq1ioJDeFuCoErWzqASrJWrjRMMQ8V2",
  "key19": "2kmcChT4bcoqoceK7r13ptwjpgCyNDwqyHa9RuWo1gwFcxATJTLPawuFzhtVuaHFKDQibHDcD7WnxXyFVXRB5v6S",
  "key20": "2KfCZG5eNfNHtsQoo6uk8bDUpHCGCDuWaUqKyGBz3pLLdmqpHiZwucaJQTnkrgYmodYt7DHXRRAzY7goXKh8U41y",
  "key21": "4kFZqrozXLChzfoEcXmhgKwvggqBvPPe67uWftHu45m9oTV3bekXWSvYWtZdqWkons5cCk2v1jD8Yxb1221gEuJm",
  "key22": "WH171amR7diqkjAEpRAwchq1B4gFiLX7XMCinN6c5QeamGRuGmXLpJ9yV36gcorr2KLmojPgusHL6bQJDXaxwrE",
  "key23": "3AMuCFm1wBgHdQ1h5qkDabfumnHPusXGfXJQDoV7bfeE8JWLH26PxzuddxqChkGunPWDmVsuX71WQuwhLkFy2kdi",
  "key24": "5tG9xVspKkukGvWGBwWitHcYR5E7W9QzkxgGajw54eoDTgtN8gZzt9HbjBmgzTXuL6TQbzoUXMTGad1jxyEescFb",
  "key25": "4RNQRaw55iPFD2Rzukgh3329ZfsXA4HawD49fxrr5u5sDPy3AP3hGqTRjM8KPLtHgy1Kd4co9jkd72KreRs1pcE2",
  "key26": "5GhSi1GR5mxbPeuWzg1zfZgrpRGG7FaAYgeStJYFhhmWnpjYfrcHAtVhtZVaw7oQVms6eV3iAWVFZ5pdoqDmjfo4",
  "key27": "3iKcrwe5Bes7F1AYjLqvxZX22kGw9zAasipAGxvTEEFTohdCJ3rjqGuXBCdmm4SspqBEPTreVKsKhL3tg8ECZ7it",
  "key28": "2yzwZULcesseWM4C9SoXqwX8fvtbZxNdCLADA4bqucEYxqZq8tebnuLsHPHTrJpHbqfp4b3WUzbaT2HEpXhXn2fy",
  "key29": "9ZVSpycg1vPN9pKtkoEGCU7AWC28vdZA19FBeMTpm2j4LKhvfA86zPCsytpdo2wWkpVh5qBKSBKR5XYrZ37Tm89",
  "key30": "5BX3MwUq2ijcHKTrL4pYBdPe9C1Ntq82bXhwXqVXK7C85jbHJ6Hsz26ZzmB8g1JWL3Lq5Nieq5YVbBwY57ityvju",
  "key31": "2tSo2GG8A8SmzQnkCxrLoXGtWWsFh4Z9CRdTEtSJLqVKETeJM5qicWnZtvH38KKGYYQe27uKfA3FLdC1diDEpoYA",
  "key32": "VdL8ThK323wiHY6Bkjz1qsu7XqQuSDoeKFHKTLgLoQJhddCiUyZ2yPHkHnNfyhjZHRM3tnXyfzzZwk8ZLM7oQqy",
  "key33": "4jc3FeCdtUamrTGMr69NAVopgBk8TMa3iX1UEB9WaD78qm3awmkXFzZQC3Nz8aAPkBoS9zrQUrrwWnC4S1hhxeap",
  "key34": "2q84iLTYWQVpfJkJm29NVC6Vt2LVSPrxN6fH2wgkvGTDrz4nWxw2cDaw2ZPAHsRjvj9z6dQAgUXmtnKoWkfJHRig",
  "key35": "3S11GS5spo2cGQtpSupr4D9fZ5HfyBjf3DgMaKg4UE4abnBT7Y3UDAxW27oc4C2AscX5vHrHQ71ybyG4VSb5Yxhu",
  "key36": "5UMVk5rrNaUmZ9dV5eUVKRdQVa42MDBp4fvnuEHK3AT9cjmsXgaK965qkZFdCA8L1Hr4UbeEjyF3LCnJK9sLUo6n",
  "key37": "2h63PoZVXGczVa4WG8MKkpTe4UvxTDn17ZMiSK1RmEtAYZFjNodTRnBsb35qE8xwQteKrHmMRjyJJPtqciheJLhS",
  "key38": "4XZ7zxFteQ9M5jbZNBYypjntNEi9fKCHEiqyC6k6SHoKc6uNmqThrRiXKjKonFp7X8nMCPPTznuqafUX4MwV2L24"
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
