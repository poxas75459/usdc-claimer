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
    "46XCrQEwY3VJ9RhQt6ZMj3Btxdi5gzJ4s1aVFEmqnJnXNtXKJ6tGCCNDypEENt7WDqy3s4TRKMKuBCJKqAR26hZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z3iwKWHT4wr9JSWPdjNGdTGwuFh4khhYokHXCfpQYer64T5HL7JPh1uWw5ipVK94LSuqv3yEeBYWyehEbEgTyBt",
  "key1": "5XtGamQQUccYcYLZ86wzJVa5xbbFENRFGyGCuyG8cyer6PdNWMbRyz4HRV4LuBcn3C8tttfTWN1sJMVfUTw63daB",
  "key2": "wtyEYFBqG64jFQe3jcdGBvexkuSubnepNU9U2mfKZsAD1dqvk6XygrrGAEQzosv8oDSQBNV7eHgFZmGWur2etvj",
  "key3": "3FwZqBje81C5318AejJDmoJ27bh8dDYDyx9bWaaVDKTp21WjVZZDBUEyeAZqzmdvWucrSmKtati6WHDGKTHtQy1r",
  "key4": "5g9e7WbgB1poZDVhduD49y6o5QC5aHZihNf5Ldg8WVeXdaQxa6BeL7qVzBHDHNY1WmLvWqciEVi3QQfenMDzHhfd",
  "key5": "5vaaFQH9K6tMLbvdDjNmabJ2UKpjkzfZJsSCtedvKWsDZ6nH4MdLCPjuybbeZt9hrguZz3bu2mmNRx5pa86TRGU6",
  "key6": "3xw7QA26Zr59So4GGzWVdd428QSykZyqV17Pxg4gbcGA8juZFnwmaAhthojYJNrzhHnbaRzCQsZyc7R4z41DZbEd",
  "key7": "5kvubPJQiw4mEXCUV1BtNajpBVpmbM9rhKmwjaGqwhejWe6K5voHTx5yMcx2NUg9xB2UyHeH5phuNeGVsM7cN7nk",
  "key8": "5oE8eSJr9MERfJ7J4RxtKHe87z7j17YfTpPjstpyBBkpq4nZTBWyeiUsmuw9T7eSwgdNyp85Z8RbP5ifDDnBgYyi",
  "key9": "5XFCTA1twZaNg9f84F8s7BofoyvEz5DJJbUrDygmFpfoESKC5AZZe6m7vQZd7Cq97zfGFjUVtV2mfd4pP9vpDacE",
  "key10": "4PtZjPzbyT4xWC8iyGLxwB5ksCQeyWnrtVN5oTJTfdmsXDkwytx2gH1ECTaxBozh62Lt9oQYaMu1XDtg3ByFLshY",
  "key11": "3gwbUcJFGdVprPE85bcwgrPeGNiEfSwUDgUY9PPHp3WTYHByBG2QrgtGsZKjo5xVFkD47Ln9gi3uXAZcxdCKZTUo",
  "key12": "3gNmPUnmy8vkAYz21hw6JTPuYTN9wVcLWu4K1nDjcFYWxAsbShSZYZBRdofMftNxQM24KS3SWdZZj8N6zHJqbLrD",
  "key13": "4GzuRFb1CB2jqbC7VV5mPARi1ZMiNrPrCFJC1GKoYvYv4kEcRVDB6Hj2UpFywkyitaSXvTUVmrKY1w8MFeVkB54t",
  "key14": "1Bzu4Rg2P1w6CPaHkyv7Y1J8inUDN8k5kEx6YvcAY39odHu8StdPCicfxja3mqP9bW6MU6G1bTvzXb3mW5bF3xL",
  "key15": "2afieCYpYX7dNHfv46mXmcYFEvMj4ST9Bkm8fCdgKcX13d7HXVL9TuX3QjS9oL4sJTMDLcVaMYUb4iQyEgzEHq6y",
  "key16": "38WPheUjhuTdfdA4cPP2cxsUf48ehVT3DnjfTbU6GopuZx4ReDUyYSRdvL13x9Umi7w9R1cEMuVzj8PUDjG3Ru9A",
  "key17": "4rqG7REt53brMPD7ZsAgWsy4YaAfZqRxmMwPS9sNZkNLfDZ9iNbpo53zqYG9a7cPyDRYpJW5VA6ned9TjkGPXik5",
  "key18": "3AAthyV3YaY8cSx8ba6X48mSLShRya9Ksi4ySw9CxgWfcPeKqbauoqUyBtzmjaPfwwbe6UCHE5ZWpMVBXwpB6xuz",
  "key19": "4VtnCSXUPz5H4zzcQpWLmpfimS22NJSiF7dSC7hgSyn4NuztUm9Hxp5s5Y7C2QWsqzMSpkpZWc1DHxdg5VZinTmg",
  "key20": "41mJE3eF3SnSSb4mwf4t7WxiSATCFV2Npa3ZnYsFbBzH7EbjE9Nn1qzhVtdDRCJXyTKxQnxnYZTZcsNqqx2VaK6A",
  "key21": "uZJeJRPckVzvxVgswcfKxYTSCjUFkRvE5zM9FNH6BGVVdNiZLChCAZwRV2Vdf1EWVPpdt7yU9hJnkRGYCqzr8ic",
  "key22": "E7oFbp9bhoYjERZuFFa3ihJu7rBiAzbqdhePViApqJM1zYdpUDD7wLhK1ku7tZG2Tz9MxbmfQx2Y2WrP45Zz7Co",
  "key23": "3KLwzPgYMvBjo6i9dwRNjb5h1cmDz2zsXzo5rDV5HEozsr5WMCkJXzYj2GyKbHUrRbf87WFW12BprGWKHhvKYvpA",
  "key24": "3zTKJm83CYNUKLCy77VQ92B9TUmefTxaSvgvNHwsBjkcm8Sv2ZwvPY3Uv1rf9zWpr4BYxPFB2LickCzAh5mFxpoL",
  "key25": "3oJKCiyM932Y2f1yQLdZPbi6mNDogTm1rbF7wzsFme29wAx8t63FAHgvoDRv5GWdHuhUcvjPsXtG9ZpgMXhVkvqE",
  "key26": "aTAyXPrS3HsbpFxxZydUDSw2anwZcrRkJuaTB47DgFsorYMzw3w6jf4KKNJdTDAgdrhRmpscyzFuGM2Dts4qM1e",
  "key27": "2615MtKbXoigk9LzuAvAJgAFXFX2SPhCNQ6d4tfwX6bNvt2soM2p4D2jrhfGebmT4kf4bsw7YEePXj6D7abNfzqs",
  "key28": "YbE737daaRNNkS9TahvkZACUWxsNJjaSXwGpx9Fkc3NAjv7RnV9iRKgENHVpYSy4sCLA6eZK6CCb7SXHJU2CE6K"
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
