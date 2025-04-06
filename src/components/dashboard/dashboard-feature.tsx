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
    "3awogFfveV183z2RZ1NreZP2A6PzKk24hgpeisah4wzLkPgkded3EntgEk8MrxvspjGZa1nTcyzobLkbtyjSPfiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24jKS7cyeDyiRtUudKB7jKLutZ4n29D3GR784RJeKpeUdvGuZ4Te86APHQrU7dZpM57c3rHHXb123pMn2LqPw8MX",
  "key1": "2JHieNCqm5gjuPquwoex7KgdevQg8FyCo2AefDii4e3bWmGMiSeBBVNzB6PeKURFz1kjwyc1r9rAsdBcLjCfhHAU",
  "key2": "4cDZEAYpRBEUm8qJd3K9eWCKqZkrCCQkLwEUuPw915YtE9YKEJumaXQ5vPPpsjg4Y5o9rqrV3rNrbrx88qYAqpY4",
  "key3": "5PzZqmHAhzHwqJj3nwYviToC5UqCW4LsexbLqVzJvUnJ3EiFAwcwgaTsJDWsbJss17TVvG6LqVUTig4dEcJXZFy",
  "key4": "5WcmUiAr9xw9ohvMREPeUU58rX8cWCKZ5tJSjwc4Tn78UqjfydgVUkkqCmAGMsUo9DEPg874zofnMUEnLMc9PfHk",
  "key5": "akWezn7oA9VJEhJtzv8rC6iPDkb5HYmxuLzZGDhtWaMTypUbbp7NuDDaqUhNHtEPju9FTWmsF7yoEcFTChLff4Z",
  "key6": "4rZZ9kqWj5rhnvkRToEj5F4XMxQHYK5d48uKJejSn9exeJGGUBfypaiUoXaxPg71cE2Ae2PsjovBJGspPk4uTNNo",
  "key7": "S9Z8Hcac9PzACs1JnrYZ2yK8edDxhAQsDZCc9LBKs2pCiLUSsuBm3aW7ERz5uNnihGf5hcPdPrUR7Xz9Kjugo8a",
  "key8": "5CmAxoqVYnSHUWmCmbcy356Fz8mdZLqNZ7xoLnTgk3MmrkTtkXoSfTEQ4mx3ZLShbg2ZSLybcHYJLV2BVsv6adry",
  "key9": "54821Fph29XSKLdNshUEnMEBSHned36XSKyFvCgCVpjeuqBbyb881rftbPc8ryr7r8TdMjJXBnvtDS8RRA7XfrmK",
  "key10": "66jUo8BwonXe9WvXfWdhrLiRHamdjF9QrsRxdczoCHFvapPn6JJnuz28tRJgYTURdnirfmwawpxJ1G8iZ5tAmJqb",
  "key11": "v2wWkbdfHwGp8Y6F7Let7nhaYpo5L2qNZ9Pok6YGt6AaFjqdysj2Ku5GVYjYuYiUzojL7D7StJyr83uB4x7VsdQ",
  "key12": "2z3yfqckPdJBEcjpyENC9oHrmfjq4rUDKXvnXnGAZfW8JQhNYUH134g9PCgBMk3hudJeCRXzPsjFzog7necRFEQ3",
  "key13": "4ctMQb3QvFxGUqGDyaRNwyNnfCvy2pS9o1F6cCy2Nz2U1wQ7MKDGsP5XzCjSXDd6Stw516R3HJehKLdt4Ast6wNQ",
  "key14": "2fb8Sc9hzUmoSVSpw9dKzWcSGQeRJJKsptBNATS71fJkZCK7cQ49mtfUd7Vm9eJ4B2wZcHGKSud2XvPEngjJVZBt",
  "key15": "3gN5gq6MaoKvjMeyCM9DQDExYXQK2G1rZ4kzec22ESLMAw8kgFdQpvFFQtwSnHvDLXBmhQD5T8E9cDLxuiaxUM11",
  "key16": "4EEDCjMrqj81eneCSRaEzRenhoDYrzLMvM9eEeVg73CZmSSCb9dyH6jzSpwDzdFw5tra2u8yhCK3pR6HsiEA8963",
  "key17": "4Z7NyNb59uTk43juMPUwFVdoTRBJWUhRRYjiwKffnWVFStfU2QwVxKij5Gbsgq4PK7ND4cxxAFHN3bYTFdH1GKiE",
  "key18": "3w5M8kSN7VvmEameoqz3PWy4md9fATefQw7ipFyH9FmMuhDaxAFqMiS9L5pKYtdBNNzuiJii1iYNUkwnb33jEUmd",
  "key19": "4EWEg2wAHgqgZLbPEwLkn3Cmh6gz2zjgDmQMhR2u7QwLjav9QgarcC6WCXLLRBJq2Bohx5FDbC46MbufWeBMqaa7",
  "key20": "bgmYAEQM8AZQxQ51ueEqvoYVWzhy9Fnsb1HNWspmBZt2ipWVBbh3oZQ7zQNYQHfxGLG7eG5e8Kb2pT3kQr5GXkJ",
  "key21": "3gA8ecryup8VhFaPFNRSGndMFpcPUtx4CtGUhcmm438ttKVFTAa5oXSw1djmhNggG6EXft4jQfes5uqmYotSHGqY",
  "key22": "3qu4rhNKGk4MSuRU95Dva2eZi2CM1LKHkCJL4BA8KTQTGwRLXXcR2tDhLmoiBom3DBEVD2s4JY87JQ1RgygNTLpA",
  "key23": "w1bUFyqgK1LzqLGnAJxTWF41pbyykVtk7zj2krEMCGXgocfHXxrut5kyXZu3XZj82CK6VjBBorNA1SozVQEWUuB",
  "key24": "22UoSd93jL6QxRVGiNi3Y3PBQ8K5A7yY3icpycFAk9ReNC7Gj1R6cbBUKiWAcyHP3cfrCY7KRykK4EKRFoQtoaNH",
  "key25": "4tupcFQknEaUhSb2kN1mNbk2vMUR6ijYzunSdXM9ogz3Feq5pTQyq3YsvWCAAbSyADyjRBPj7H9Z6nhsCHDcDWyF",
  "key26": "imUPif6uPP7asaw4vZeEcNs43PceJGFFxLanrBSrZ2HMqgzGbks6ai5v5sGnzz6x6BJUaMKz8eiYrvqVDcyeEYP",
  "key27": "4D655GKSmMTHK5ZTNyLDg6ibtWuWJzDVt9WhE1YvR9fvYk9vv2fBTnpeq6oogHafpCCKdGCDoCBMWDfisbZjDsrx",
  "key28": "4xKrdBVAjU9aFBLVurWWRzea9wjre2YW3YEX1sLUwUrs8zne8kkER5pEGgWLxK2vRMiHv2aa2aW4cWLVEDiBekfU",
  "key29": "5LMhDgYXSCJ6yysvEGLG27E8NiAr9nvAB9fwEXBdmsuVb4TG35k5nHgCCKDVdfJHUYWWiVzEZYgerPwAAzhjdBa9",
  "key30": "2ARRQTdbjgz3NJQWiksJYRVKKZjAyY2EkNNQf9ZM5obTWjBeE45ZG4avx27hCs63c6eZ7GqmVikfuBD4AT86SJhS",
  "key31": "MBkUfytgXzEjpKNMTBRAeCqdZdZsLTbLBQmataiZENDGj3WrAdcah9yxmVKcb5iq6bV5z44yrsiA7sVuzFWx8bf"
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
