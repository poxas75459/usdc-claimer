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
    "4Er2gc53AePnc9QbATy7Rq6GNgQLcziWpGJHPdjDGvGDC7fJm2BeygppnPBEBdh316cSRyduJLLGJ6nyjtKQWq7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BLhJRZqvpLBJwhiHw1P87429X8MKFGxcctZNEk1TRDoL3BmSFEWFbtNh8PisH14bZdB5KPEHX4cgegTa2RuKTpY",
  "key1": "3x4cFWZYv6Rfe29ePszpNaf7dXTX3qsHj87dAwabcBbwBehcdXU1JWWZ9r5srFKNEFCEY9TbW7C811sbuU7VoTFt",
  "key2": "5GjBHo731jaCnuPhfckuMK8jf6fB16K44gtpndgDJvmks525wSEZBR5pUWUiBE9oazLyBEuNkqxP2FRQ1vjABDGB",
  "key3": "2SrWjwDSSADurS9pABPTu1zrGhPj5N4z8vGPSXBJ2kY5LeVAZyJrDr5BtRomBJjhQpzPbt3q7kHY2b6Ry9GpRZkU",
  "key4": "2N6ukr1RZuxXJ8PnbGJdqakrtebnvX8TgkF7QxahHLzzJF2pzv8zq6TcdNGqAtVJuEKkNL4mdxgkDeQu5gqbxWwJ",
  "key5": "3ZU3fVM4JNQRnoRBctHD6DsZ5YY4n7CmF9G4gpYy7VvuSSyPrVgCx648eRt75AsUmZzy4fXe9hRxjdPb8Xuerx2S",
  "key6": "25aoHUwjodDwfzyXNt6CwK5Qms4k4vCNT5KpMLXMZPUk4connQbZWcu6kqNeMu2jG1HSyPXdBvUukMrMYaefJHjJ",
  "key7": "2WgPEBxYqPmpm4wk6D4wRdXsEwuqkRB2o1whUAr2n5MtW9qJ8TycLYB6iRZqj4BS1SoETRP4sBdHWa22XZtWucBD",
  "key8": "3EecNyiLsE4PxibbmbkEoQ24uma7rF3TF47ZDjZBuqWneotSVhX746GjY629yq5ogo4BkAQdu9Ufo6hScwh9wMGx",
  "key9": "3VkiabDs9tFBZb5inUp9BB9nVaJizzRX4nQAEWz5sSTjf8Cb5HU9x5PfGJ6d9zBXiH7MabqXLwX9KAx4KiGFBUYf",
  "key10": "2vQvMZqxsWdRSyQVQerCtCgNpCUBwLPGx1dWzKujyD1KHvHXUEsTXjM3c8ZR3vTNF3PzteW9EcDPvWPJjXo1GU9h",
  "key11": "YJKcZjnQ2bLH5GSS7Bd9TsXx5A1fDjfzRSCXKCK7odj29xSt7q3gzmCPmbL2duts1KELzCQkWB5ZLMa2Za5BfU1",
  "key12": "47W3pmCxujWba3r3tjpwA9rDxffR5aHcBYcT46Nkhb9EtYWkXYzZdrS1AvoUXBk2ggcZ3Q88Jq8fBWMQ6uwCGT3K",
  "key13": "53ZNq8LCiG3yib5QGXbqHhAQW1a2pbQvogAUbdD5Lt4iwuVtRMgUDLih2MHo75DFHUu4Mjz4yLRWzxg5qcFsFS4W",
  "key14": "4KkEWYGvtKjxgehHPNpXv4NmhGgk5SpCmWpxu67HMpZGkqRPnGG4sco83WXY5q5X3mS7mYLdv828Q51dDXxcDXAZ",
  "key15": "Z2NDNceRVZGSH9GjzDnQVpQbh2V14iJbzNWw2LZAhPbxhNfGg24bTvEzVSvPLGaDRVaLnhc9WhgySx8SuYZgmP6",
  "key16": "5c5jcWv5RJXLiTGqvchoduEiaUzfZMwFj2aeYxEpUSPrJsQkytubRUUyQ7qxMrgSogaaumUnn9RfJKBNW6hQojUY",
  "key17": "5SQmDsj2XGvKytPNoN7wQpgeKdAdJHd1Gmo4tnaND78RVaJ26DT9Fb3T55QVDb6sww4PFSZiCjCYYAVDPjZc4HgL",
  "key18": "4iKTtCZLyzv8LkPQNFe5ViUkUXacTxBiSfoJBj4Lc9nVCrUvpTcuEhM2mx518tV3Wu5R5qGzwxZTYEmF5LEhmaGr",
  "key19": "3akhPpBdY4fTpmoRsxek8uAQNTYKqHJAQswAWYj3i3pGEjw8fStsjDQkZ9DRowwPvRjPxXo2EyBSjubTXKpARuLu",
  "key20": "59MQ9132hoTh7yfL8QJ2mT2SRo4G1UHEaNpS6ynctD9wC85WAxBJEPqKEh5cL2xpRHbCJHZsxLEMeoEm2ienyjFX",
  "key21": "5xhpHiJWvN2mXMgYURJ9MmRXMVaSz2pYDHYSZ3V9YpRy6wDohQ7o18jHasp7YzNShknSqHtgFuNE9sLwvegvtDn1",
  "key22": "4jBEWpn6Zcf3Lrz7PqVm2jVko28LoCeqCKTp4uAQzo4Q4V679JhgpmUYAXKxS17Ti4aYG7vX9YPhYs1JTqh418C4",
  "key23": "61T4i6xsV8KVDqDbRSZpW47rVrfM7eVR1KJd7YqRHYczSXNpSxjGyQNc26G12RtzaNQqFaoYES5CJ7wHZUb3VCir",
  "key24": "458WdyLX3BEN1C6sc7DmwwukrmVLhV2FgDv42CpksJJBXrZFnSvfpWBKJK7xSZ9NBnSrFDcBsBKYztpgMzgzzRiZ",
  "key25": "37bMd8PdQv3e2hzNX8rqPMKJnU1sD5sDMT3Y9NtxGyPfKaQNTjpWBtvaCWgHgsAqugBFKccaK3LdWw3dKN64uCpy",
  "key26": "34onwSjJxtKESfWDr9FzRcPYhuU6gTxGg2c8He3vbDezQcWhHmaZrBKvCehYKLbw7Aekx9rcXykyQWzh3Z3QXEMH",
  "key27": "4m5ziWyRF7Q9E3zmJyzpfH4GweWfejQD2repTH8rdtWa9UZmujhtENu6kNujydU7jnyCN2zz78wr5y8jHy9kJBFB",
  "key28": "5TVdrTEEJVph6XoBn6u3wnYtxjuyR6M5UEN2zZQoucEydCGofCksdJqRcWVwi7RmpFRUtcQvj1DAsC36nbEy8ssw",
  "key29": "qiieYpbYbEgM65s8igFDGbP94ybDpZgSqh36sy6D5FuFnk2u6szMy7svxJsduo8NUhKBaNc895JxkxmtTAYLxBm"
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
