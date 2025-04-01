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
    "2xjSnZgoSZmufcsup9wk8WWJUd9ZW1emAz1cxzBbdC3KFYLVC2GNS754e5WP6nzwxVxa1e7icFakXtKgeF6MKviQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HJEy5oLr5t1d9bG168KrjQVWv5b1F7KicbAmMTHLjm1u8Wy8ngDcESDcw6BHiRzjx9zMmW2U5dM1XrRJGYPpFhD",
  "key1": "55BpneKBXgiT81hfzYW8nmdd6jh5gytdNXFFLGqaiU8DVsQ3FCCzAwzsWm4jskfwCPa4P3Yzs2N4Xj4aXooRDGEe",
  "key2": "5yJhRgBczgWPJSw67aj6m2PHou2cKMksZ8GwH3cfptnyJUgDPtopPNjskfq4L73wBvSmmB7o5NtcwedzkGFvtowP",
  "key3": "67y5zvbyrMTzMiYo89FXJNk3xWgqW54NUH5xbqvatcw7b9Tnfvhs3NdfkD8KCks1ixVXkK4XZx9Egc8oRa9CCHX",
  "key4": "366epjdgnd62pW6sodTTsHPEmA55b9CAdZYMQ584sDB6DKifk58Dk3hPLKTQn9xzJpitcEhxLve4EAgn2pQG1cU9",
  "key5": "385JJx29Yjn1Xb8RuxA8V7h5UYWqvCwNkB3vmBHLTZcSr83ANjtj4mE8n8EQ5WsUSEudcVqG2shsh4FPBaF73bAc",
  "key6": "5SXhK3Q3Acx1EzJyJQ2AHKTFkFSmq9ubCr1KQD5z5MxfRHRw7byr5N6NcPzNDcnrPhjHNRt28EJpWCMtytcwzec1",
  "key7": "4ttJESSWmvtnbjAe7rmVyEkaxCmZGhbxT8HGuQwqYtCQ4V2FZF63vfvHyR7J19YtShJaaBtNic2wcKLE5EE57Dhu",
  "key8": "5UXXqHGUAMcfdYA8Di4KRKrLeiErGk1VvoTEohrpxsLhaWHkBekE9g8d1bzKYbu78DjA9oz42aZ3ELKXtAaiFMcw",
  "key9": "5eqxQU1RDE4TtszrAETTybZxMC1y16nBbiCSfCtW13WXKPMVnRjReU1pCcVy9SoTWmwnLRZhfu4AejrD9KwcjhQP",
  "key10": "3CyvUGHaP2FdSPxJoLyBLJLoNFrE4JFRrTyEY2hWiZ3d7mK2TE28waPeJigkmD43Tytabb5iM6sCA4WpKNxrBPUZ",
  "key11": "2ibBiELJTaMFGiviyyLewiQ68AoiEbK97Z13Zs4yEqfFtZWNDnmhrXfAEZy1NfcCDtXgL8ygdMF1rGAHoyBHxR6d",
  "key12": "2LqMqS1E2CyYMrTPTJi9fKrmWgBC4LcBrXN6Dv9yzatGfrd3goJguQV9d8TQzXbJRfuVVYHWYFZjJakJozzJPyJW",
  "key13": "3hrZjUduc62rfDmbi5DtNqvgD1ZNmh4JrGWdzNEzMarAbirr1HZKKAMd2CXCoGDYqQXuSvGY37toRwuY5bkjPawJ",
  "key14": "59sTN2FFxG8ucKsCE8jV9b3TSjwRqm5H1E8GBR2uLdH4qEdHgBN8zystHdEU1GgcgKaDqefanphV3JWBMPyQ1phL",
  "key15": "5FpZo39454sqJZoE2KjfchbCujRLkwsDBBivdLfXFt214Wgzvgf4jFHcJ851TeiVUo4cW8BHgBwDZAsRvtuN2xhg",
  "key16": "5Pb2YVtTxecNwAMdz9ED6akxC4L2gEGqSwQicRdsb11guLKsUAszLyh23M7wJLC7dmBLbyCLtjYCY6Buh9NeQWLB",
  "key17": "3QaXfpKPmWmrSEghqWDW64qSr6QDL9RsSunqWo15BuDkExqT5763gKPbiVh7Viw2Y4yMLWabEVsqczkPStCZfbvR",
  "key18": "2YsJ38rj6hyhuS9RkJnWkNHxeSB3ZVdAmQaK1KKSsLJf6dKYkFffcHRAdjFMo5vR8Eq1Degtt9BY4zuaG1X9tao1",
  "key19": "4Vqu25SZXEUoA5fr4QzZ1W7mrHcmHPap3gYTwwKmXQKQm9yC31g8yXANhmbDrHffYgqbS3HJ2jzsNqtH44LCHy7o",
  "key20": "5VKdvgqb7RPrXJv6moZeJQ8CMJY43JR5MjadKa9dJBDDbKFYGJDLJAUM91fqjGkByTfCWSrMZX5WRHLvPhsbCL2q",
  "key21": "4hC5Uhp8BxtXUpNzXVRDCDQKJx8PPKq2CA8sLyQ6iKiLYsCz22qMm1HqdUYTz1Jxqdt6dChbP4ya9oh9cDkTcFzq",
  "key22": "2kwgvvZaAymJbpKEddeokAw5WwDKr9X9LSWuAa56X2d1o25wwyJ1n9pWEYrxQxmHw5289m9eJnZWniEmkdBLPKMh",
  "key23": "kautqPbxn3YXooHcn2pmjGg12ECXfUeQpQoSBS5KMw3U9vQPWfWYSaUDfirAUiQZzmBtGwZ5GZPNPcQbSPhUokf",
  "key24": "Tds6gbzJkV9WCks1m75kgyrRHZ2CdkE22RbEM1NuGW7GE3NupXhkKUQWBZ3f3YNuTcAmVvgyLFkDeP86sdNUqqW"
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
