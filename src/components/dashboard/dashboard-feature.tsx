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
    "2bnxxpEH4W6oqgSb3Lh6xgdWzKqyvDnK9iFygFBfegpm7LuVJZHqbgbDF8sWYbhp2vi2fehP6rKW1BjeHczaT6F2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fnKeEqZcp3Ywg1ekemrMbcNpVAeNAC5j75qLzhzEe1S8pTF4JGnMMnB519BcgaVFexECbabgj1p6Jw7cBr2hnL9",
  "key1": "2e8TdgEHracgcpnArQTV7FnJFQbix3eEaFMzS1S6gm1L3uNtPJU717BQxGEQaDLwmNsWVvndD1gfSMB1pWyTGqoL",
  "key2": "4d8aVJTYFJ4vzoyFV1BLLELEtwE3knjrUKz6UGrQeQQJk4EgN7f6sGGuWxdx6WX9Gu4saqovnH2i7QXBkJy8o5wJ",
  "key3": "62kV5ByxU5qUzX11t6a7mUGCpWyYr3niPVgnEQ1j2gYE9zL5WNQ13RvHwTBzzbBzUuCVwPBzL3Hd7aaKY6Bp4zBj",
  "key4": "4w93rc8pMi69U8MdsV7k4qLnjdV8s697Muz78Qqmn5UyhAjR2Hva6oh6QJWtRYm5CVh8thtDLQGEuGkah3ygceK6",
  "key5": "2xL14bougekNWxsScB2HvvuPk5zH7FQErvMw2xaTk4o11R1FBnCzuZadqbXoyvac8eYy68cFKe45eHAFCCew1GaV",
  "key6": "5bUD7kHK8pfcApGjSKa6i7AwEHN5pAy33T1aGa8Z48qfkTdV8toFAAQyMgCckMJ9RX9ztnsHNyKFGpQXggTSJdLH",
  "key7": "2fUm2ataAWa1Ki7TAP8kcbQaBE6srW43gt44RvXzYMSFLUAZsrMerJoyUumMSe7SgYQmKxKV3t5za9csWvcXMznX",
  "key8": "7RXrPriPtZPAtwrKjNSymWJ9M46oF1MKGQL8uV1pHJoayQaGMQXpa48sGyGYvB1XvqRGh67GkTRStyUeTXstaRq",
  "key9": "SS73gjmsnrm2CbRQws49wBCeew83sB9C8gZV7TdeEimo4nssMKDrt77GmmB71urc33nz7U9FFmPMN8WyDrvfTZH",
  "key10": "4uiou8yTCXetwkc1FMBQN89u4Ys84xZV5KAnoCSSYxNXwqd5ZmCaLoDh3r1sTGygm8DmyLGFLw7unRdBBKT9P57o",
  "key11": "66jhMuHCtCGXcoYdZzrSGFzUcbHiopQtesK1XccjVMUtNbYGgh9P7QC9Px9PXjbSwCDSADfhf3zd8zQLbhW3N42B",
  "key12": "6QyNV1BpcMBj91t4d6GrrKePwfuniZxKNXDXafTUJfBSMGyRWZWGWokHbC8uq9Vis7JE4rCdvtUKGWppZCs7GCk",
  "key13": "PK6eXEkD2tdGQ3adcQnsTZRMmvmKozVyuR7aGDztvhKxRAuTnxu41FXoGninsSi5LEaSpam4awp17yqvpgJhJh3",
  "key14": "9mzZMHXSSGbbRgM42uhhNDG8cKtypxKwTwENdbZsimUJyARsitJQyHWQdgXHcEHnpwY7ekVNKFcVagAH4XLKobz",
  "key15": "r8uK9Yhm7bDuYiLRh1q2CT9QiYqJ9WCxjADEPN3Xueoo4Y6nwU8SyEQkYykgGys7At8UgcPLMCNrWwZywyzUqUX",
  "key16": "36MfyP8scehsKNyNLXxn5S1VcUYWfQa1FhUYXmg8PMxbxUVS1Ut1N7EpuccRMJPbmTPYEys6Lk3PPBRXxvodzB2o",
  "key17": "NfYkoMGd5So9FGtyKsNNzDxwtkSpF3iTaGh7oBXm7dtfdw5xg55Dzt7Es5cYNNdDDd2mYV96SJC9QQZQsbt7aXZ",
  "key18": "AZeBUe9N2QrjQZTGVeQB13ZVEES82fYseaQVapdp68M9yBNWFsjwVhCwomGRERza4LM3bauYiinDnsbUAmAh6N3",
  "key19": "4ZBYfWagMgwqX5rVf4u7HMfjsBScTBqAgHieCBFPm6fQd3C3GFTvLpY9NDopkVjjAWUxgDyx1CPghuUKhYNEzj9",
  "key20": "5XCH8udxMUV6e1TnS1fQE3p2yRdkje5MwUyZL1Y5eYRUjLoaetPATXiDqCjoUBc86KPS9QVvFESLKewj7yJGhs7K",
  "key21": "w15XB8MPcD6VmNzuZusHDfUuMcMtc8YXtcmDcsWdXR9yoBtXtxyjdnSiBejm8BEcL2G2bUmJxwYWRvDLoqkWmsW",
  "key22": "aupgubZmaPXT2xdtTHw3qJnDDAiffYAvq7ivoncUjFRSWJEE1Qy7EetL3fuE9wyjWnt7cz64St8sMR9KQSamUWD",
  "key23": "3Z9KyheUhQqf5s5n6ssx8xjaGJ1kiEFyCQyFk36KH5YMjENoA4yjeSUKx9Lg9pU3VsPqKKPHyZRqAqFPqocZ5Ajg",
  "key24": "5PMyJ6HT9udyuGVkaJ4DFDHvxGo2nmQjUE59ywZhCTCQq259jCQvKzYFbUj12WbC1hHTrcWEvbBhVwhGv8T9WmXc",
  "key25": "5uxJYsZoDa1WmoBAQGPKNrcm3rH4AjyTmijTrFH42RJUNxTN1jxx2RpxJ41obn6Jsc8XxV6b1pT5Ai6Mrd69HgUJ"
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
