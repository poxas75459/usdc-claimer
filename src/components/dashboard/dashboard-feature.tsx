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
    "4aH9CX59Yd4hUDDydejY3hFDTwEFA6Hh8YHoTEjW5XY7MwSvpxxhLibMFVHtivKkCgAbXtDeqm17ANtdWwxYQSc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36EAfCFkzp3hdTDTvFh5kPx1WhMBuiWCGfCeWUW7m9xJASRrKZx1ttRk591YAUbWj6Hvjti9A2PSsrhs7Fgxppxt",
  "key1": "sqmRhHAZqKsSBUDnSJu1zKoZproYDo2wfLLqRQXsVdbbj4kVCeyJi5azuDLRQk2Gmi1Q1suyTspen9kwv5b8pK2",
  "key2": "QtKLaoMJz9d8Xpc7eQXLrRdztTucmQynWhgGMt3VfnedXvLSWLUJtvgNMfv6TtMPiob7REi6V7g2PtqAKNkP223",
  "key3": "2HiUCtBbBE8PYNPVtV5MuKQ7vcwRWTZmkCTSR3kYcCiYUmTxTf9JG2Fc66Tru6ypvyd7FAJuB5CepABWzQ3PZwBL",
  "key4": "241qs93DFHrDN3KqiQ9RPnbMAhQDDhgtMfCgELMGz1ha3Sx8ncGfY6yWm43N2U45qwzWc2RP2bhwQZ13Mxv3Fo7M",
  "key5": "Komh8DfyiBGuiZ1jgCGcGY4uRT5mnJcCWcwP4tJEXYuNNzMEPqZa9uUssygfCzGssQdx9DbPrR3zsFHbGhG5Bmj",
  "key6": "4zjufwZE7EybLb3oRKk5SDrzbTpGdL1ieLA8Cg26AEtVcAVdSDMcuk5WZjbTaoEWHwFcxL6UJSnMxBwPqTW323dc",
  "key7": "6AYGvE16veC8X2bc9CA9z8Vsny8EhAaDDucyn1H8YKjXjkM9oMAYMKq7WasK6pDSU6FSA2ZEWLjcZTCZB8udTZe",
  "key8": "4LrCqeVyCGHZWNFnLMrvzktLKjibhb8uBiRJQDsMRGetU1frBtCB235wgXCf9gG1ytC2M7xjDhrBjtoS3LzZcSuW",
  "key9": "2RXgsdrSM5f1518gnM95PBowQ1zEW9XD7EetvfLRjBgCSpQqxew8ArdwwR5wRnFxmswurQkLq8xmUrmHW879PRFy",
  "key10": "5rnBggJFuWTXG6SCFZWkQryagd73ExaSpdyvr2wuyPMbScs71K6vhtrMHZgJQTZ6NXVWCxuZGVZCxmn7GDsThi8F",
  "key11": "3DsSKnQbzWac55htNdxUepPwWEyLd856G4hrjPRDA25wBwv8efba9kkM2WUXx1Wy3xHaA6fnpEiGSeY4KfnN5CTi",
  "key12": "3fHfCR4J89QQeBVwdfBoVWYVeSBqbNg7rwd6yswCrY9sXaLApGVtV3tjCR7mV3RCGppc2EBgYNaJjqgsHi3Bbypi",
  "key13": "64TEX1bmqVCTEY4tcVA6RsTTiiZZNyA6Hbmeq5yMTwvN7DyTYsH7r3wXFZur1xtxaeGjGmNDvPwM45ALA5QH2gi8",
  "key14": "i7btChQMubDJemc3wYEC9AU5hqRKsD5cRUzRApAnNjJmf9Voc4ig9m5T6StKsv8YtZD2rUjQjTyFENB97SncnZg",
  "key15": "vH4qEkiH9BGqhptbgK4rBD11QXann69SAZdPhoWDydRMr1LCNnj5NTBAujTW8SHM7M4JmsgQMkaZMKiaDd6N1Fx",
  "key16": "2ScwYgmfDvmjZz34TxePCq6aGJMXaXDLe4M4UpncGmLjQfRh6dLS4nsChq8kgXarV4jvz2W6NxqNHSFoWvXx1ub9",
  "key17": "4nkcGY5fkE7ABAqu2eovQftWwxY1yq8fb1TA3RKYjPVR4v5dt7e8kEbk2uVYUuL8QFKyxnpvWacvjFrodyqetaL4",
  "key18": "3koGRtBgdVre8znRvAkayMwiPwZbPuxS9iBiwMJwjxTa16iNKiZUMcBsfsLrPQPy5cqCq1RJjy1GGsR4mMrZifB5",
  "key19": "4Jv9MwS8V2hxSz1MFW2T8pXHLxv5sit5doHMLmtRujMpmtAzwBJvVU4jjKr4HDZB8Wx96DCHBaZagk2JUUjbs6M4",
  "key20": "3zXp8dckn96aosdGEfmqMh5QDv7xwn2h8yWWfRkwANjMbKgUaLSLKPeUsHUcPSXCVvoYeNTnvUov6XnUicjsf8XF",
  "key21": "3VwCJKnYWk3ZMwdGuXYskGg2ENJzKFtQD4Sg8uAiyHvGeEPkNgdTCQ1hmj6BmqcV8UPfid31hXis4mNrDxcc4wQm",
  "key22": "5mRV4hViY5hUc1YhEoBogvgZHmjYuXKrSh7qxqkRG2ANVG5eXcXU6WJX8PhaoMd2R2psod14gDA5toaZ6uoSKJpX",
  "key23": "HphWKp72jibE1c8vVUtrSEg9tNAMxsWtZsMYxDP7BFyrnKH9imnbXPXcnA1UyXUL8XD9SDbF9WarNNM2tjRw5xL",
  "key24": "3tyaEuGMW9fFcHsHyMSn6vBmGKdDxA8jHrp8xSX4VHU2KHWqP4JyKKVtge4FmkP1hbne2sRyCi1f66zXSyiQoKWJ",
  "key25": "5wcUGpEgv8AQE6jk4zx8QL8tNw4ePeo8GHJGYYMyXrk1baJMTWzR8yBkEaktPymVWMLwsq3z37t5LpvTLGSddiVC",
  "key26": "5UYWf1LMMaRQB56ETqDMzdV15hAL33y5wr6n228t51QPErCvuFcjyjjss6awzyAq8VPXdQFKB6pcuqtgrow1Pf5u",
  "key27": "aevg82ZQ6NPcTZ6oc5kKSDGgQWv3o2kSyorWAtMhTho91wQvbEThVF7aXukAKLWgTa4NhPzm3Cz5wQrhQgEFmbr",
  "key28": "5ra31TbncXgc45yJaiN2z7Hx1XAHm5gKcVzLFRDgAL4woqKLSUUVt2w97wi53cwEdaLxdcx5RXQKHG3F6qyBEBzf"
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
