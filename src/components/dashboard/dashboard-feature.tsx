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
    "5vVUGPCgu8t9AXKcQS3Q2BDBVJBmv1k52VoMeSkjx6DCg84M2M3z1MaKwfvEh5CK7tcqbqRY1bLmFkSNGPKkRnxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dq96jicFA9gae2zHxy7DMxu5rXWxbj1bgde3LtXJ2fUPpjuyKMJuW9MoovWs3RM2kdoCf1sfbBwfZqkxjeisF6m",
  "key1": "4YX9B2mdPatg8QshoMMJayK8Q3EbxXEoYWd1ycU6g9kcarScUrBc1cXUX6Whh5zQy7rtg4AE5b6kEN1y9GGibSJS",
  "key2": "541Yyc9fAzCr16sA2iWpdvcwGBBB4G4DCGfnWensTE516Bt114qrXaAiW84EwS9Fo2evaQ161JLuBF5crL3Ds4r3",
  "key3": "5tJVzhyATYYqxDKMVzM8LPTpLuR4sQCKNRiqTkkSunms5Qo2YsDhhmjPP8YMudMFbyzKbnKzzCQWutay9QzfpFTQ",
  "key4": "2gYf4tR8FskbPhMZZ5LmFQYwh9fK9gVB5jFhh9eNZWjLxuKFSbWX9ZCRwKsvTPJ21d1VyieeypuZXNQSegqQaQJi",
  "key5": "tTDMAxnZkmaRLZui3fnHEPbjtyuaAqWDTNxxBbSsSkXMutgFfc19iMqeeHUPHkPm3zRKtZRQAtDfrSU6ZVdj6tg",
  "key6": "5A86bHDsiiu2aUG852tw7VUyHVMBYUgyi4Nkxe6pPn3Swz8unp87kRHtw9c4AAcPAaneTZ91Cdk76Ehy6f55kG2G",
  "key7": "1RpVsYjXd1NRbfjaBHsM4W4CFcydgRxUxpiuP5pqmaDEps52bHvS1gR8RdBxkpNVzQbEdzsfZeuQiZsGconxMnw",
  "key8": "2gUNaTFLEvCRTujQfAWRTmvCvPuui1xYPZtxcNSQaGxqi2jvAxkSvsZTLRQUqtjngMn12JmgjhbxGyNN8kyJcadE",
  "key9": "eS15bcmsj6T13VGPWd57mXT5xLC5d38YPJ1HJ4JhamAGK7zYvZMeofVbmMBtxzEWgB8PXLzGF4RY5byyW3iJec1",
  "key10": "4UwmwMKRr8hNksF4bUcRJtaEHA1pJ6bZHAY3K7mjJBt3tJcoYBA68RrChLmG9xhAHJXMAwSfdt78uxCbWaU9Zxys",
  "key11": "3qyfQLnkrFEjXiPJd3rJy7N9vPPBNbe1Kv4utsXsB9aCzCQ4zuRVfjp8fAYJKCtWLgZyHF7cPNUWnvmVDHrW6EQy",
  "key12": "CUX734dmjpzZ9pdR5mxX4AqbJst6JkWQMnJxdZ7rGDAXcY8QtfF1JC8bCrF3shcspdfi26DJgXqFz9xvpdQrbDP",
  "key13": "4CKNADtCBfx87qwy4WjacVFGjHYWk4aDC6Uin7uv8nNJBuZmhWV1WZ9JqCoAaJAVSRZVzrGXEm7dbDa9ayEBvyss",
  "key14": "4cUnQe8RsUzw6EcVzn3YcMs2AwWVkLe1Te54EgMHTCB1sh6jjUEJVgx3GQTxZ6McirvDhURirEwSGeVmTnexUAK6",
  "key15": "3UtXoMAZe17Hbdq3UVnbLbYsA3AuB33EPF6ZyyZ199Gxpk4UZJ7yJNp7jK2vYv4d1vdjsXdUU3tD6REM3JQBAWmZ",
  "key16": "3dSzZ3mtsU2piujLRBSufXqe42BUxmsNJGqFh5g7mfJ3Z7Ur28oydZ8BJzwVNZAGi43PYfanEDSoSV6ftJE3gRG2",
  "key17": "3E6T9YyYH8bWu8oDS7wwwvFYc5BgWePeZgiBPDGaseTQ6NQCteeiB266kWm71Kj2A3TbU8wMJAc23HVM7o3kNyjD",
  "key18": "3CSgCMLbArWS5tZF2RiXwtEQbm4pxrQxqy6NHvXtwtvsLUGBLjrtJfAGPkB6nQ1NBiG8Xpaznkkeap2Afs6Pp1W",
  "key19": "WVaRCwT84nmJGrZ2c5bHg5nsuh72JkcVqtRDsU31x6GeMXk7rXjypCKe1Wftr6629uUbJSZvmiLCCGU5NUBgFua",
  "key20": "3tZNdNrxDnYLW3cfC6WsTVDqidaWR6y4gvvou6Hrhe2QaN9mehQHyACFMzAGSL7kWPaZGJbkrLrRMHgimcsaedFw",
  "key21": "2VShVSm1TSNDsctzdREvtCdoSrLj2d4nB5RL8ZaUrvsYdAHjXAG69WELFCoCLUfaUXpDKhKHAzikivAYR8a9bb9V",
  "key22": "3BZy2q4JLmdzEBFGDwM6N5aBVeo5m4NH1k4hc7ctuU22E5suXvJoAoHavmktKcH2tvKuMYxHcuEYuj5c4wuu658o",
  "key23": "4iphafrAnkqivmxBRKzWQimTJFZB3MqoNvzWnJ5SiU3oXRSq9spdnk5cM28GRLFf2C7J2wXRRtKkRjJofWA7DHAL",
  "key24": "3VYJ1v2bmcfoWTowN2sfHgZWG835oEPfPNyKWTVgYczouTGcUxiaaf9xouWrWjvYsdXKfxM2vxVEMEz8bTUx1J4A",
  "key25": "29WDgtsPFNq4khWKvci7qdMWUkA8XUMFtvobG5a5vseg987FsoDq3Wp4LeNL7gfKeWpJ2BWXdDMiwFYmimZquRPx",
  "key26": "5c3m54HnBrLdHzYicvDCx1WVSFfJZak4d7CGT6s5kJrmPxChYy1jQ1yfaWUng8gwJSUy7zUTf7YSRqVDoaoGZGJA",
  "key27": "u6AaeysKUtRtX9HYy8gWHAbEFNtL7ExxumJeSeBCG92McZoNN1VZbcCB1aBSH1ASy8Fgi5S3jC56yqJAQBEjKYk",
  "key28": "2zHxMiJd8JSLvtn2SQDHydeJfg1Chcozrpr3iABJF3CJ2zEVVki61n5K4jE1WGiq3X4HVRahXGYJa28Bopgc5E9S",
  "key29": "4VS2rctVwTr6CetyPpqLmNzxCu1mYMY9zijAivBWpF1Ss6yNTf3M5Sx2fNLHjWkF2E17vwBzaYAm5mXa6iimFX4V",
  "key30": "24dGZWo7H622w22DDRXbqdwfiYdKUgSzLtYNXcZ7kgYww9Yu1gLGbeYoXszkNA9vkeJr7YNxAdJ1bT5xy8uHgi2P",
  "key31": "3GxDeTq8Wn8uv7eA9u6Xb4arkJc4qj1dcmYbmeLGd94dQJrx9BniR1s9LaNtwyupK5sCy5pK5TGbU8WBnm1tLe8t",
  "key32": "3gzxwfxbQLGh5sRnRWHGsRSw657eXBpkvGnwGa7NdpFJhu75CmGerTHHFfSCFhThqFwJfe88ejb1jS9ox2Nvwk42",
  "key33": "3EJNnQ4qW2fP2Rv8b4SpHc6XeonJ6E6KrwetnPu2iBh94Q2nAS7wSTHpKMjKAq97G37GFbYdkzNMy4r42bewmEs"
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
