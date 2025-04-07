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
    "2M2nZmGpqvkpS64P13FbuAD1YiWKZftSqGipVn39rWGgMBdiebEDQMpwtjhdhdzrebwAy2Fw4L17Hxh8HcejkmeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wcdeSFqmHfrwZ3Gy9BGW7z3zgpakctApD9dG6Trb28PbAKFmNVTNtxuXa2oHvrMnfDRQM9mBeijNCJWkDoisAKc",
  "key1": "5C2pbFpcSpguyd6TGfqnjgmhbqb3yAMTVrBF1tVrXeLUAaJL1dGJJaHGfhKgJTZLrk8HvK5sAg2tXyaQshS4ftxt",
  "key2": "JKgWqB52r6WrvBLegZohjYRwayCEAf5XspoevMBSAcoNqoanZa1T73dnhtRDjyJbUJaq828MN5dqzfBKuSSZwz7",
  "key3": "yqSQjQysHT5HiD9uHD3B8qdKKy5pugWhPQ1TZY3FPC9kv7PFZdeNW2EMhx86KNUxoUB2toasmu5a6865cUkKGzX",
  "key4": "SAr8jLo4vDrHR8JVB2J9wDGzszG9Yd2LRZpxMWW2E9FsVfqJujbgZq7xqMTJpk7SaRFeQCfR2HFrUQaJGtXEf2Q",
  "key5": "5snz8KK6ZY9GqhqhTohgE1Ro9Sg1b8wF4vhMEhsxUE1hHK8bXVe5Tww7oYnnowLxsBUkBQUT65UF692s9BG1rXym",
  "key6": "4VzEaEJ9ZLMzjLzDWzkr9gBahbKH41S8Ug7BPwdPsxDNy5XZ8VcusbgAt2D2sPNpPknXiMUicDpKuRDotdNBmWnB",
  "key7": "2vVzTubyNdhgpmziEX71z83WYtz7JA2ZPZoQUjMwiQbD89eqmxAUyvcCGWHintP7EHNR8zD3FgzN7RAXYBGwMg8c",
  "key8": "xbgpu1XhrQec6UMnsdvJfxTBdg9fspKPFufPAsjfBEBiqiYKs6yyiAmfYCFLgWFNiE1jfJMrLy8fDNLMwWLXFEz",
  "key9": "4f2UxYBvPPaeLgvgAdPp3bT6xjxhrmh3CnyBQhMUSodjkCwzS71wmnvG9zVJ3gUv4LDQEm3AfC2nFko1kEDTiBfB",
  "key10": "4dp4GUBjDDNgiqaAWz7DsrNMTF3B9jps2cdUufZfVWuF9WnSryGVv8f8xsgjJMstjTjzjW83VSK7ZFLvTZumzoj8",
  "key11": "52k8Zc7VSrVjL1KQVAxUjiuDGGSu6ZoqgCwaoGd9swQJokrMKod4AUgtQwkE4aFaUXA9P1tZYgNiCcAkiiC22pig",
  "key12": "ii5J5SAPQD2wc6iroDcRfvnEtiSzvak4JmtjaTt5dETsMMtvDErkKyH4nnvpkntfiwrQhbujMEhxUs7ngwodfuE",
  "key13": "22ey4vXkfZJrpPVcCN3dzUp1SzeM9akRhXxv28oEz1QFXmFML4pk4RYu2uGC6TxvG1kNJ7ogpKFxYSsvLjeAJN8W",
  "key14": "2UzZgn5w8Q3s4F7HdZjApkJnZZKx43vMSDuLbh2pcthiR5RN6bXa2eehYPsfGiTgM3jR1cx8pujsV2zazXaENcvF",
  "key15": "3KVSALnwRipByihfwd29UesPdyTDTR45ED7QmbDawtbfwKNhZMK1TuR9z2fv6GiXBSMyr3nCMgMW5naRbNb3BG2Y",
  "key16": "3g1vXBfkLWPUL8Uk5C5dbRmwAnxojMPqDnZYs5kLQoe3ismfPsw3SsfG9Bv8pJgSKNT87nLnC4tVgyT312Ej411A",
  "key17": "8pNZo6NDTJxFqbwG71HtoduQvKnPYfKkxC1MkdckkHrxYfQfDCsvjNssDjTHDzpa4NQaZAHj9auM4NCqkHzgRAM",
  "key18": "4BSXXTZ1N16ekT5edicNHAkrahSAsMGAPB3nh4bvzLi81gD3Sudjv3uW62a8MJwAYvcCBxB6b6Vp1M5wiyith43",
  "key19": "U2Po2rjvjnpmihVVtvHeeyT2VnSFGoVr7oswuCFgkJ8rzfnN6raez94vbXzvC7BHXPiwxYysX3RNKdwRRU4715C",
  "key20": "2AEDHdwiDgGjvQAWCgdFLpN4mSoK6VTE3ptjxb858giPV23ZhsqseDaZvFmvFhtPqmtEz6dMAB9TYdLxeUMC2SwV",
  "key21": "4WkUinwxAQeN5WYrUNeETbhfEfm4pSY4bs87onFE5cCU3xQAaGVc7v2qvzwhYWYK2NS3zmKuoyqBFzEGQd5zwMiQ",
  "key22": "KvsHpTyLJ54jPtBdAKhB7XxjzPFbndZJCoKLDnXFVaRPy3xvDSc1DiXZWukWjYSntADS4Ncfxa45Bn4yy7kBAYx",
  "key23": "4jyUuCgpgamYkKZfMzGxExTkVZxVanEYT1hvN6MYXK8nzVon4XMLjvZ8quc2WPEfZGdmaqEezYWUBjbs1zMVKMzT",
  "key24": "q37ZFMFzd3zrMXPNBrwG4MQF7pqFPQthAXDyaiMY5jD9GWGPkTj9LpaJyCHFmvhRooqkLq5Pz5dTVNGdLfZb84L",
  "key25": "66b47a47d95A7v1H7qgySJqZfSe9PkxPZ6ZRsyMgfK9SU48Fwot17JzWatnp9vRPqXLi9YPyrPLSc8ZqC129ANDP",
  "key26": "2PnittomHcRtV2J67HSH28Jwo3UJGHsemKpEspxbvX1EeJeHWKRX8rXfGtF7haSnmMjwMdD5V5TzeJRuxFGDVLzS",
  "key27": "33ugVbmsjjZXj2a7RSFeFK3dqH6KBZiSeCwZtYDUL59uVLsBa7UgbkTbLqCp2Mdcm9pB9NbzxfYoPaqLUqBPXQCp",
  "key28": "57DXECSScvetTpEWw6CoUr7rnGecG1mhKW3VXYCpnCsyiS86p8HjkzocJa6LpYHs4DdBYmVdu92Zojxd7xKDU58E",
  "key29": "5JAQQTmDbsmEfgWhyYjuRwFwsH7VMJsGswpgeL61J3DDCMT2cWAiCoGAANSrLidDCzb9kaUYRzvsrTtim8U7GCb",
  "key30": "32yNyxogL3d7G3pe9YRaKp17Rb6bBQj6NHBLkx94Kp5TBLYWSagJY4ADmkz6AB982oXTMKJB9ZUNsmfeEw6NC4Gn",
  "key31": "4XwzBSyQzfCmqqYU3huVWX6eqBrrydcgkJsgxwvNmbdcZUgySGuc1SMDY1FgsATaM3EeRend2EFPKxFtcguHoLL1",
  "key32": "3zpVGtKXPwuZgfoJ4USweEGgcRMvcP3HJQqLrEAMqbvVhPai1MY69jc7CpsRmyNMRFGnBAAAeg74DF11NNoeZzMP",
  "key33": "3AHag8rznhGmmqdNuzmtWrc1cdkdwowbXur9JgY534DkLPndUYWWp1SrrkJnKhrh2u5sRa9oYrLXCtXCzYQ5FQnw",
  "key34": "LZ1jMaBnYyw3iaVegJJ9f6iCcFPA5yNSCMWLLuztq3DMgoXxgCtSZZJv78cAVnMqJqLfdbxVup2KVM35YJkQYmH",
  "key35": "5fcsXzsmz7cN731cdusiDod5cXrEYtiSG6UooXdKhamc9FmiTyDFmjE3ZwFkJ2HjbVf47ciMKAGs5zhMzpkbPx2S",
  "key36": "knaAYLwUyKE6JZMYk8khKvqWqVW5WQDgm3V62Tb9gWkAMnzqRvrjZQMzdFRoQbp5m78fRrxVvYt8wKMwQki1iZo",
  "key37": "3hdFd63QyuzHqQSUbZ5QWasjq7aK5Vbrr7SPiwvVbgbdmf7hDE9okeSTGSAvQ2YpHr6WzdERTSsdxWhoNUgy7ne",
  "key38": "4jfE7d8ZjQPkwBrCYzAYZUJP39ivLvbXGsSTe4d8fGsZNe7i5dzAH8XaekdHw9nM56dfmooGWjcHviSqRcQwMjjP"
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
