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
    "a3Q12NBRDh62J1i8GpihGM9Yax4sg5ZkoUgsB2rEyz2etjThHyD4wWkxJXyM6zSQaBUztpy8kmXzGwJVDEyXQ2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C1fZpZ2ojbfkF7ova1GtUp7BfWU5Hade9vhqndLfheqPEmXdyXW6chjkygzfatECsyMxUHTBxS5RbeWXb5kqLGW",
  "key1": "2xAFwNWiT2L5kTpscb5f9Pg1xkhcWUuBqr2dfvpKDtdMdGYTN1obDghKc9bJVhbdfWiGgmd7CWtAu3woxyZxo5Ca",
  "key2": "LiMvvgdcpAeXV5iGcpbwQRFMKf6NW6SJg4JfGCxFedEkUaYi82gQD7BoctfRsbAK4afhb5LxE9tTQRKp1DBpzF6",
  "key3": "52sVKWvxHf9gemt5v4nZGzk3CegvUcDESvbTz5hcwvLvyw1EWQsHjr1denxejw6e649cmtJSTaDP64rgTLefVCMS",
  "key4": "5fdZ2ubGVPqNEtm4TXh11DE1gHk3w5aFnV9gjvLsKnmZX6PxUdSYs7LNjXYCfurWgBwDeguErfaGUx2RTnub4PqT",
  "key5": "2vxkdHcaiuX6qk6uktZugx8ABudsPaan5biEWx6JT2XFiaDXq4ojAVW5kGWK9GFySL7n96YKkxMA8wW6xWxrtnvA",
  "key6": "xx3fHfb97KEnRkZjzzC41evBEyf8tiKgZNtaX9v248oSkbsnKU6GZmbw3czi6zS4aCsT3HyeKq3NYmS9sPJj6TM",
  "key7": "4w79PJ6i6Y9Kbx8jUQBqVz8GBdLLz3Z2vfJQK2qEpz785PatVSLNR4DGivx8dgwbQFdkYbN1dhKdcLVQZnVvFzPw",
  "key8": "4MWrpdf3mSAEHuXzxez37ToeVUZPAYt8ZyXtug4G4UU2UE84qjBNtWMbZqjbXufz9R2waBaTWEW38Tf4uKcyJQqz",
  "key9": "3iZTTog48S7bTKnAgJtNJSLeJPwGWRQNoQETrZM3zy181LkNGxsZ8QB2jtcVBuhBrgd6yY8GYSTNpZRdUPjbjL6p",
  "key10": "5MnMxQ8j51b6QMXjbrENzHevbCGT3ta6nkBBfFViYgPqoZCQNRPwZa3pH4KQMjmfipEUT5dF3BZNQ1m6SEXweFhE",
  "key11": "3wJynpQ3yrzMAtRkAwbtZR468ZDsCeQ3EJSDAN8QubHNHyFgYvFKd6vubZrSecL8VTiFnoPxwtYF7VKg2dBXzS8e",
  "key12": "263ab1jxszpSio6sVDFTmJbXTc9yioX3fb37sou3ujft1r8Hx4PwFxgu1vT5fKX6LsBkExGTyHbYmPvb1GQZeMbA",
  "key13": "3mPp3oLh7a3zpbYdPcNDQPSJBoHmmPakVwDACzyWKxgFJuz4zEzrNoCunbDBoLgnsVYrSKmnHgt5fCMjUeFNzrxS",
  "key14": "3xzwkuf4DNPvDBDtmidfQK8iGkFbPmVKj8GkEggBxARLKjgrSkzrkgzR7rG36qUg4toTu5h1rkdrZsUC2sWnbWFQ",
  "key15": "2ooT5bZFmZ3t7U8NUYFa6onU6xV3Jtt6GN9sfbmV5XDbJnATUa7McnXuV8EYdrABjpiGE1Xdw2Ahqy6y9oDbvpaR",
  "key16": "5EgriiDXBiW3h4W8oZkpqLeeb5ghHLg3A2A3M62f8d4jUCkRBfpsiqusoAEZoW5hYfSSJ9q1uEgvXDKXhNNAW9dg",
  "key17": "3HgCBCUUjiQbzRGuM12Syk3qNezGUxKiGTJB4S2PPh691Gtuuy3VM1sFyN1avpFAfXBvLzHz5jfcx1HmbyaCCcBq",
  "key18": "4bbXxTajhbjLeMbwLq9dzP1B2gBFUtBXe1GWkHCYeo2ucwwLoqZSHv968BFEAGmbukK4XdzVNQZxy7oaTcZRFMZb",
  "key19": "2ZB9weCBNtafooAgh49fKF3sM3SFQ2rrpKrUjtW9qvbW6tNH27A14XAJqzEcNXePfVfutcguy6AtfveT61MCABSC",
  "key20": "4MAtmtN2X389QskA6TC9e8rwq2vkZoHzKVxtugUrG4QzBMQ4TDQhqy9tc9WP1KEuLeEKv8NTVnNgHmhKYsyWaCNB",
  "key21": "D6JwUeXHzgWkpPRxxHnamCo3GKdouJV21z1fgLDYaCPZYfqP1pYPFs76FAfDdgaT4BRWL9YXBDmCJSKiBWeRPj3",
  "key22": "6341yTkMt7j1n6xao2akkoSYajctSpCECU9ZTpjXWikz5rHT6csVZiN11Sq8uqiaVzmpHMksKDA3yYSfsZ9uXiMB",
  "key23": "42B8WMUkoTJx5TuEmmjitf921y3isekBFAGeRNQ2QYp5k2HkASxMSY3pzD6hENxPWZvTNeMkxGguTBcAWiATJtKQ",
  "key24": "2acw54JMxrNuNt51PztDEwAvgdNYBnptnWfYYK6jJ6ZXuERwBb9i8X5FYkobugZCFCKoQoWXnNHy1BiMJzprmDbV",
  "key25": "4ti47CDc7LaAPkUfZGxpgmojrVBaoWGzeD6W2sfuaFEpkEhX5V1DoyPZadKhRW3uTkBh6djPHta9NxFuiFcQPMXk",
  "key26": "4U2GwYSHUvqeNfZzmiqdCg2Gey6HJQGjvkGw7i1dG8BDBdaxgZxPkYQnAaYcY8HCpKDsB2Vtydzv3Y5edepwSDmK",
  "key27": "4woLzFWcsRKKXS56zvDgpVf16yR2L8qVtdiPnJECMrjcEzjne66uTYW2w96Wvybf4XQhi3qbbf6EKxWJzgoky17d",
  "key28": "4eJSuA2a8w23wVAYankJ3eEWH6L3gPkA2Lc6TtxrZPGd7Hpx4tT1RJdDGetXLNHH8HBWhqzevT36rezNp43TYutE"
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
