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
    "4rmMHFGapu7SjLj17YU4Du4DQAp2A4etcD9MAqsuafPW561pvrFodHiVLxckPiuFsaqiM8PxKcLW9ycbMCuXWhCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "su1woeySQmrew2zVDk4fxUQEgJnyQGec87ZRPPHNPwwJodFmDuKYpxzVeHEx7eryArnevVicNzkY5XZbJnXSn7L",
  "key1": "5YsnSf6EGaoU7xSFSeLcy4U6qHx5M8SC2fsHNii3CykpP2sFbWbdWPBHdR82vLRVMnuaPwhA6txPob8FipzfNUPM",
  "key2": "J69guQART8Fj5rjWeLajyysvRmMLqESNzzLnqZ46ys3MDNyRkVaN3zCDfFxix7Uu2CRHqrytd6szQyoXd3mCugj",
  "key3": "2TeVMSqo8CxU8GG8oDH6XyMVnE7w2AXP3dJ2u7V2XdNeoQF6XrUkYwNkAb2Hxdq89NEvWCVcjp9mW5mJozimL6Z5",
  "key4": "3W3wuCSUfXc9jLm4xjvWqHAQMHcP45r1zQ8JwKfLuowPPt3HJELQ1dT9oFiNmRryw85UZRwgQxaioZwQLTYJjEJn",
  "key5": "57RQTWYdou3B5hRArbKwaPrmnZt6cCUptUfiUBtxMzy7VbDk2W2NFstNypcz9sBE3vDJ5u9aj6FvoBSvkE43Eqxt",
  "key6": "NpoBQY1vaHuu2mvtdDh8hzMHzjZvmUWH2maqLspDybe46Dfgq9a35nY4p99RUMdjBPPtTP9FSrgpN14gKgPLk9Y",
  "key7": "Gv924FXT4ksE4xKeEAKQUzmEvxYqUSC4vYQm1wJC4Ppm3Dhindtnuo8UPEYGr6sDfmM3PPkDcG3xgpZFqkmBtru",
  "key8": "2kX7QsNyzmQZNcZHkhDgABB8dDzTJv3c2brugb9PMHEWap6ZLjHWjcNyx84EfFjNMfYoytHt8jG9EnRgZ6wLisbW",
  "key9": "3aTZE2nKspBZrJCyPHR8BJRnex3aYtN1rMCCUwfVDP41pAQGYfMT6PdQeQc64C6nTrbkWoKmSWazD6nqhvvmDS5u",
  "key10": "5Pv1USVPJBF1keRnVqR54uEGh5y37HrjPSTHMJj7Xfw3weQiPvu6m1GhZtnrxK3FXvRPDKfnN63AeWfDo42tHxtH",
  "key11": "644sogoBvLxyWmuLRgoS94Jok2bwVmuerxMn6faQc5szjgFytfqbvAU49k3egidqcPSSEKbqvbg9ykVPV6fGkhQe",
  "key12": "457vdWstHtJsrhhLcB2dQHpvoVxziFZC3SJP5Jwg7bhmBUnZEkwfbQkRWoqcUvo8wHJt792VnTDMqizUNi5S2Yz3",
  "key13": "3W1duv19sdvCSfQXsSFtBVg6Fwp9GSw1mRmca6hmbaV9B8g3WCThoenYip12SxmwJqGTJyCMvMXWPJ6SePGvuaod",
  "key14": "5CUYqFYdTs8wb4MNAnBLBVgcAD8VTC5vZxqATAsyk11SSS6uPCwV7SJTcavej5gpjyXtNk3gjVwH1ZGpunwYVS8H",
  "key15": "266csEhst3jgFWZWxsW3SQ3pkMdVXTKSLZY7Qi5qgaLDF9gXCtyFSkcHyt76wvR4Bp27PES6TRKu6X53HSzutbXa",
  "key16": "4KZzUpjCNtxSeyAFEnN74P3bX69JiYvVbb3EuEbfqPtP9MG1Yga6ufRMNUWQWc3G6NAi6bu1iVD1tfceCAFu5Kig",
  "key17": "5yQvZjmwjKeYUNeJBwziLtV9soBBRdq7Gs6yQrT9EjWGjTYceM8wa9Bo4xhZv17f8yWijhNriyzfjYK4YUhcWPx2",
  "key18": "RG8zMiRS88hRd3msupyWmDaaQM3prfpN8D1xdcqcbBRZDWVW4uTSCjxZWCoPJRGHFay6q4GyNYEBkWNtn5r6zw7",
  "key19": "cdbAct3ySwckk8QkCHQxGXtoRdJWxPntLvC5W3QrXeX6ZE5peFvdTkH3VjcCnLgASkNL4EjwZFSoa7DctWdTJzV",
  "key20": "2EwfQXoo9VhYcCC3fDcQryAcgDUXAkGCdsPP5QQ3NiTKaNKQhPJa7aQ3kiGMtxnyWHse3vLQg8NKebcfgaWFAxXf",
  "key21": "2w69GLWwwrz9rvfRBERXfFfk2SdKAzpjqmvaAQ4PZ5HseQLAQvmKUfq7hAZmbpzvHzcpt9jq1iPLpvRF5kNkZxse",
  "key22": "3sqE26NoH2gBc1cNJLmGNuhEdiVxuJomb7m2WVYQNQ4hHrKG34RyrMna11R7qMxNZpviHgY75bEpv1ozjSt2f7cx",
  "key23": "3XWv9jLaL7foB9NHvZgYkD2NhfdZCq7rEKQduzCgfGYmsegbx2M9XdwZhZDQLqGF5iRmsCvE1nD3Kbgq7oQZ7Xz6",
  "key24": "guFgVZDF3V6EWVHuMw4qU8fb4ay1m3CXs3D6XJWPgSSPophSchmQTfTsScMH79xTPTUaiRGTCbEWuqndFy5ynRa",
  "key25": "54Fy6biyEQrDxxtHkUnGSyJN23TPdiRwp7NAGBRFbxLubZLotzaE22sZmLCNHphAS8WsEk6iKrdR2YVjymQ5ZDh9",
  "key26": "2CF3UFh4boy39MUNdaJ82PMwzGkmKZtxp2HT6Wg6woCjqZqiJWK5XQvoV1cqLdjkqenqaTBmDvtqopSDkTgFEmaL"
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
