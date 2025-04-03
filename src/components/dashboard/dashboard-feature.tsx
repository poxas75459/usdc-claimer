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
    "2brdgSoBTxdLLLy9TsSqqCBegPV1rTGYnN2guikT1fiEpC4nXySyJAEjjtfavJBXErDpQpPrtvwpjmvNey35k9rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PDbome3d3SWvYNwrVMcs5djGyBmeweiEa2ugkZxVPAWny13kTBoVS7M3uPXas6Zg23ngBYbzmnp29hwZgHVBhag",
  "key1": "4e5eoZNZrLUTyxL5Qa5HgfnYM7BM4Vbb1nJtrhJHNWQuRWbA1ao1ipW8r4UrSJYkwyhdMZGRku8qDQbSrfuqBr5q",
  "key2": "2S9epPvk6S2tT9eB9e3WaAMpssn1e1n4qcu9GLwQjYLvkeCJA6zDTBa7fPj3x1rXMbLg1TLe4KuhNxm81wuV6P52",
  "key3": "2FjHJp5sBGHRrPWmKqgVoYrXfuUnPqRxqqfgdJhEsLbzxaadqNhooqxbvjL66ANn7G3zG2kzruf7RSM5isSfSzNx",
  "key4": "3FiBcryeK7mupNjqbMhJ5kpWxYXD5HeP1ghbY7YqKk1QGFzXG49AvqgQzjC1BvjP9GspTbdBsQBRLxY1aSVoSDBy",
  "key5": "2yaSuSxa53da4MpEFYrUzNuNy87F5SM7bWHk1vsqbzvTGXXzqoJW3k2Z1P7VWRrsPDLhVsgMsMmp3vdbJ5QpAeY8",
  "key6": "4dbXmN4AsJaQ9PmwsRvprs6kfTQEoab3qPMvEbuDB9NNnLhUCYN4EFR3VUfRmwcqZn1uMPUHiqGD2fAwxSqSsPzx",
  "key7": "Uw6UUmE6Rm7smZAiLFKmK6rWezoreVYJQeePhjn5cmvF5VDgaUaV1NHggp8putU9e8QREjsmnA6Gcj9a8JHNpm1",
  "key8": "57SqYkrNxcaKi7TaBqcfEDP77wR28Fa7LCAhF8WhViA6TZEXconpejr4xCnsgfrDWMwS1zWszxKbYK18CZL3vG3o",
  "key9": "4CetzpaU8gm3BfwaAAjLt77zHDZ832aUW4XdNAXmJgdg2YC9LtJWxP4RtDbVMaL9sK6wsHaFwVtAvcFNFNaeigVr",
  "key10": "4sjyLyEXP93mSzcBLGMaxPhV7pFrH28vpi5X9q3EmByU2m7mXLyYcxTkNNyKUquCFjzX4c7c5B3WcG2Qz8xtfWbd",
  "key11": "2MR2kCeRnxxHvJnNyy2Wpup8T3vKwp1Qie5FRSt8UuqDxrKLDv56RBPa7sXkVrBnNsYNjFh8jpyjpBHoLmBYi6hZ",
  "key12": "2eLA8P5wmVVsYn6VSfdqnqahby5sUiNK5wP1vpnufCb3ZvwJ3GPW9WGbjMBXvtFtYzuKKL5ik35jD2rnd9kmwhb3",
  "key13": "3bYLTGJfnaVXJ2tD2StcTF6vQCNX5JgyQVF1Uvs8kHE8CVNRXMPsBTy9SXsHfqaczv5QEYYcqzrQPvM4dDhjRi9f",
  "key14": "5q7zhM2a9oDwKQXr3FwFh2gVrUUJjbRbUJyH88f3mfjQHSXwfKdgdHqoK1VK87C7BmrsMYKGTogZriMiKzPKRhFo",
  "key15": "KZutwExFtJTsNmpNvDc8vjBprWpB5x2M5fBqDnCXgEN9rencwUXYwrKhmUiSKwHfSoXVT4zqmPcyLqnCUUdovid",
  "key16": "37DpLVfERRr14M9JtoDYgDHP8ngCURv4QS67ZoSzDZ7oVcx2728Djpysqvc3xTg6xihAREmEs3hiGjLWi6chNSPK",
  "key17": "4PLScbvpb7mYdfcztyi64qBtaoyqUwmy7JhLNLR3r8ZZUTDkQKgWZaWNnCc4AAXWHFYKMixTYsBfBaNEa1mgmRmH",
  "key18": "WLTSZw63AhMZjkBmQRiK2jnqB63aYUVQhWcA8L2gKQ2BQQR3FtX9dbt9xxwUgvaUfV1mxbH8SYtKwTVffPMv6VQ",
  "key19": "2WTfJo5gUJa7d3k5t12A5L4xkGNqmjap285tzEBnN7PuT6T81ZYf9NkVa74pYHyn44fcWPkkDdHUHCGyP1EgUJ2W",
  "key20": "4dzr1Z33jaqLTiLLGZZ1pAGzaaKQBfk2rKQfMPxJHhdUYuJJxJKJyRoh18vingJsQHxT8pJ9NXDpyTGMfgAvak4j",
  "key21": "215iXvc4XsygC8cfWsiXFoePKeysUYwouWbwQDGLA5BNS52smp4ANp8kKAGaWMfEUQwM8mUTW28u68AcBx2pHfPw",
  "key22": "GpinttZTDL222dRhba3sUjnefscWqT3JxomegFLUsHL9f3zW879m7Up6BGqJ7Rq2TEdDtsDWMCPi9tf3pJiXFtW",
  "key23": "2HaBsbWdgQKc2c7BvsoQgAe94DK4wt8jzrfMGcccWUsGFfvrecjpASVzHcU7dx6forczM6CtBRbcHDDyjxQfqCK5",
  "key24": "2pgxtfSn7QrHnozpeMjbB79pMrBmv3CJCphuQySCHPxBAceNPfPdx7VRJPtg8ksUomNCWLxJUPceDWGJmPDwCEFy",
  "key25": "3twonit8XN9or6Zw5wTMEfcZo4NyjE36X3NFJzZChZzbJb4i8HZke9SB77rsEYVjjSHkWp9qHSt9eJyozQKDw51U",
  "key26": "2KgmYtq7GeAn3yCE8dqcHNY3of3zcSj7ayg9oQHK1NxUrTv6Q2DrrXfbDt1Uki8uirWFnpQCY6vhEZQh9bVpJGJ8"
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
