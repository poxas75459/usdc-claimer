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
    "5xRp6RhJN3eeZkfmzrS9e9LFr6VUkE8zpVdy1uWdGGdXMDfYLPeUjjK1qx1d8ep3RD2JqAi5J5E8dhtTTbGUk5rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fYPB1R71EmAQVNgGBfzGQ4ZRfnp6pYYdduKwbiZ7G6WSNkM76Fs7dPsu8xASmNEbr21eozGQiF7eeWhGP8wtpbe",
  "key1": "AGHnm6ASLEaRUdzCza13PawWqVYxRtsUKeyj8YrzaY9n3dvjFSifUMhL66SEmAMavN2uAubpoRohNoz1Zsr4bmd",
  "key2": "8M4EMJAJEwKEV6gPAwtgrgSWLjuXqL8LX3k4xre5hk448oQJf6FcvnM4Qz78DKU7xzyPUUYBoSrFavweSkfVnAM",
  "key3": "4hAyhGucLMWPW5qfA3jdEk88ZmigtG31N1219zE1jg1Ufd5PEafE92JFdYRLdKv7tHDMsziXtB6SnTAK6oBB4fUi",
  "key4": "2xnEC1v5Av3xaV44XoXBRdqkk3w1No75A66h9X75FZUzCkC1f79QVLRnjCQFCPZ5BzchHb7pbG6eRDZogPZtMAAf",
  "key5": "NgdBHj9TFXNVnj8Nnqntayo4AAorq6wvBrgfg9qRURUJXVh5WjkCiZFuYXAXAsRCVMam2FxZupiSCMi2ZWTJiYo",
  "key6": "2XHK4ZxSfmWkPnQV4NsjqcjczViRL6kqYTWfWB5yCVSk3MEz4oCJa8Qv7fBB2P7d3dQddrXLoKrAxo8YWhSx1shx",
  "key7": "iDJHN3XnV6Tsuq5UUKk7wnKr52Die99n7EBud4srZCLbyY8xueBr1RWtagCUFpdxX8Jt3yWUnDCnbTgfqa7Fnku",
  "key8": "639CcgC9KPnqB8ZM7kaJDMMExYiLsHjVVPzGngp3xBmDEfPM2XK5iSeSYP4fp8tspixLVs8Qpjw7rzS6zsN2bzPY",
  "key9": "3JgD3wtaTjv64W27NxE8v6soSCsnfto2bxj8VKPrHWmffyQ5BLbKj3m6aUPj1kqHn1yuVywyUCcMjYvZbV9J3fkA",
  "key10": "3uWgU3fKpAgnFLtLU2kBuJPDhBezsrmQyFDSaCiNLQJTa5YnnPa4tjUrVnwBFbustkiSKrg3L6sWA5SwVCE6qSrb",
  "key11": "58PQ5janr2bfqVaq87dpPAh21wncq5qQZivj6Hnfws3T7eDEsp1eRiU9dBcYZcpA8iVQAtXxQaVCh7oZgGdEChSi",
  "key12": "3jWXwQi7WXqudLZQZKGjAbf7YUzeLmp56ajPo5gPhUW46hsoiwt7p8opo3zm6Tuz4xXzEBd1jbDGuEBiuZ9gfXws",
  "key13": "5agjNdaTfW2C5iXKYEDHQsnShogoVMQe6bFkZgKrZziPePr7kXHZED1PQxuWPnB1mmmvrM89gLbNFwrphwKifQ6b",
  "key14": "RNDYM1a6vneB2Yd9q1dgZFQdXcFFP4RLyXzMCcG39ZMh8of2PDBGhMbzdQgcsT7DnMSesRbVBP2M6YgyL9xFPT9",
  "key15": "2pEfZpcToaLx19xovbuo2bt4D24ZzBCyeSuKfaJLYxz6WHD7PQYYSBWxEaf2f2mM2mc53Uvab3jWV2mNRiCz9Nuv",
  "key16": "268rmxMHrzy4bD9UQfHHW7GdT194y8SSULFGwT95jYGrGANfwZQp7cnhx8UGFHsrJC1krZT3bvGuru59K3cydZp6",
  "key17": "66gqgHVA3WoobzpN8NdZNsXaneF73e7rc77t3nsWT3VefEwQQf8Xa2iKArtXnbHwubsJB8m3bEQN1TdSLkBLfjRB",
  "key18": "2agcEvA8C8dcFHggXSsfD6pbo8TcHwFHGXZPG4Tf5upLug3GcsnE6H4qe2soqGXDchbD9buGg2RdTWNshDe86pFw",
  "key19": "mUKCVSJXmu8qejg1Fqq85pnxzqpT7FQixQ79zn5wR8wuW9Uq6uAZXgFhKiBtb1pYTf8ssWk9SKGUfximEuBAiXH",
  "key20": "S6UFsGH2mfcCCP2xhj7YCmuDVJjjuhj9Vs33rK2HJ4FrnSaEB8wHFVfRpnm1C15jv3A4Yjd1zg3qJRx7132RgnC",
  "key21": "47xzF86aH2kpLzoVHjoY2g1b5NQtJxVudYfG5tKXfU6KstRKyxudFroXMuzVhjs3DdjqHfYG5U3t122Annmpdqbc",
  "key22": "4QdFzvWYunJgARdutcspatUUFFh7jdev65RNAo1yjfnpZ4pehQjip8hAB7zKoXgzVdJ3STxs4gBi7q6Wb6oz9G6",
  "key23": "5m4bGt9HfgGAzFJH9qoujY9Hr7mVfUkjGRpdH5fnaEGKeZRBGgkCBjC8wYCS54S8BCKZnYJ4NCamYs5L5jxrUBqa",
  "key24": "3ySchKnYyRoB7bJh8VTLPYzLzCBZWmCMo2euR9ZCrka5sSd84cma5Tu6JcYwr6cfq8DW9LNmSs8We8pWD9brnK4P",
  "key25": "2ZNw4LLq7G6cdLgrpkAANQjsDhvbvd2j5PGkFaHRihmrZnoMNAfgFLCHfGLZv3gzs9eg1w9ap2WcgLLFKHK85ssD",
  "key26": "3gLRBDfWEtXHr5672VjvNa2Q2HXbQBfEPrdfeJ9iaGXaBdW3nLnFJTfbya15KDcNvrD9v9DPdeuRJuSzmDzZpvxZ",
  "key27": "2KTFPYsyLJqXCTSESRvRHxqmQGu7uo3WbL6vVKJZHTFJi9scBcMM3UjvbWjorXQagwiaFaGfLZcjGLPs9VvxenZB",
  "key28": "28seTDSyh5CQPjyTeyoGrb29aZQ4MJP9o3wFNv6qXkE3CYbUew3jz1oU29HfmprFYF6A6L2cXr6q9HGn8EkHsVEh",
  "key29": "3pVWzyR2emNtcEhUxCiaugoXBgZqUngBxwY1xL7fhdJdkYjwxtnCTiFzns74K8g6dsJwX34fkaqPbDAxB8d6Pguf",
  "key30": "cVqe5LBtw2YmdX8wyJD4v9ejS5Zzg3ErFNcKgegBWKqT9rD5emNpmb4srpZYXieQsrguQYpYdha6sMUykR2y1KN"
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
