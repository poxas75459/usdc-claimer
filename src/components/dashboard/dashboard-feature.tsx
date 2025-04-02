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
    "4QiPQbXB3uAVv9om7wSL2sph2JdbW4tz8Jt6Ft9EVFHyw2SExUgB9KYzpoj7VvtVnY5m1wTGHWkmrDFDyyzx5PuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EjPuN1YzFMEnRBT4m71JrZjZuBZXVVrBr6VidRFSzPWdLyzB8BEm75gcuewrPntWvSet4q6qfKL8bREEpkKPZoX",
  "key1": "4L4geVNHAW4obYYVru31HgmkoPgzrpiSnWD23gTxaAS5vXBwfNbRNzfhHsFrkYLk86V65Uzkvo55kob8DS9X2KPm",
  "key2": "4xZ91pTUkXmkrGb15RMxjAoUuCNy3Cy7mnsNXnL1P1RhX4GAEe7Q9frnUfpw5FCkbuaeTcGmhrwMTGELhUrkwYEW",
  "key3": "2oHQx6y3wC7CxUEmUkZXEvDJC6z5MfCHMPZJh1EL5bsYUKuKFg59rXeBxc6FuDF8XRB1G5W227WmPbsof6YwCthy",
  "key4": "3px24X8XGvUBVk9bF4m1ZMsMq2PtxBVPe5UWssykbcjGJ8oj23qirMrH4Td8qAH6bwiZJL6NJQ1cgF9uptoQf8yz",
  "key5": "43rnFoNc1nLFmbDfRQDDdPAqTCmQuJaNhnJDzvU1GW5cnSddUW7hyRx14BSWR9uRuDUr86EMxpzNd6RBwyQgq868",
  "key6": "3Hs79ASAPwWS4aoWLBvwSFtqrnVSnkmF9EFxvMCY6hUZBye68WzAV4uApE67zrvbk3wd2FHx16LRR7SgT87eQoKZ",
  "key7": "3zJQKkbVb7pWyYwftwLtW541AcnV8o9i6Fzz4qkoAPdf88V7dx4tTx8KEiaFAuXaATouCrTU4HaqTzjwfWNVLGcb",
  "key8": "3pGefx8NgkGcE9YgxBmG7muaiGz4fhc1hCdhbdiqh7iXykQXr6waNnbhBWDbNxCboro5MVFJSJ3o9TwyDoNYxi7s",
  "key9": "4RHV1hrwsGxUEHwHdCJRQE89oV144dVi18ApDpp2K1WZKxUJTQvfCF9tVDqEBLmvykrYVQoFWmyBEQ62r9gnZiH",
  "key10": "5M87yX3eNjyZ1Rzr8RZF6TYJRJ5kUet9cPTNDnZu1sC22DMKHQaKMN6V75noA2KAzjv56AXpBaN18QFBS3keJFLe",
  "key11": "Sm7DvEtSFkcDbfS5JJqau84Rp6DAG7ejLKK2Rnq5J2926qL5XJ3fn6F3erpgCcDz4P8ftBE5P89eQxymE8tdLSc",
  "key12": "azqXsmgPv6sgh6dd48LkmC8xFi6KFz4X19nJECwwMECoQQhtsd96vJp7Q3TCPbWcEPh6F3cj3X8bkL5kUusnKJ9",
  "key13": "2jpzHLxoZnQnKfPYeKkyzECN7fFpFZrC6anp2kuLcNsQXAWrprjEF5oWSLUJsHria27ZfMc8QQ6YS6v74cqYPTCn",
  "key14": "4o4S8UGmGL3Cw342WJP2zpPNxGWT1jAZGupGj7bEakir34ac6GXoLaJw36jUEtWAbG7msY4zR6K8XtCNDUw9aPwZ",
  "key15": "3Nt9bPdoV35hiVDiEwg3sMBjCNpAvogzmxH6qPwbrucfq3ptMpfSb2V1rPtR32ScrXf4i6czCMdfFPEWVUNK4L8X",
  "key16": "4vYRiEiH1a3HygMpf1Rjpjs5g2skumaAgT7TWbptkjn1pVN3FgY9x6RaTpH7G1iRwLkpyNBZEL3iHtxdgByUjAnp",
  "key17": "ot4NAUHy2NS8Wo2XPss8uKGMddKNYCfPTenyKbLLcVNc5QfFJAgfSbo5CFgw5JiEhkZVeCf1TVwUXD7kgPZAFYK",
  "key18": "2VofevCQKzf4vAeLNLL2TjVgsZy7HN9GvtH3jT2UeXgTpEpPTEWbsQDPSJ59XKg5k9XpxT5UsrVt3LkwxCQXBYNW",
  "key19": "KCcB9ca1AY1FzxGbDt1VgbA6qGnaVCd2jNbdx8QEAv4GMzKMR63z9PRtVXEYuVN1bN4tCCPagDKyx73cUAndrth",
  "key20": "3qd2bxvmgmVfa7SGeUjAmnqdGskD2wjpgF61im2gdDdMzUh6ev4pNzf8Ckx9KR5gZHVsnzaHfydrBUwfj7dj2EDo",
  "key21": "3TxKpQ7bo3Zf5eLVe9vGcGdZq2YbqekhBDa9FSidcg6PxWNxxyMFcjWs4K7AtE7BgGDzcPQ7kw322iotTupk3GMM",
  "key22": "2wQgPzVZpKPyYK5zF5dQDkc2buAz94ZxcAXeLgqc2Roo8RQZeh1APkgKrvWmMHXkD2BfbZybSKLR7rdNEFdvZT6F",
  "key23": "3VmtDGUVp9GCz8Se13i3SRdX4H2oyG7x63XFWUjerKNeMJNLApszftLcUGyFcGvi5sZXDidV6YncaaBUj1NNNV2P",
  "key24": "HyZ1NPLtET69imsfgeSJZiEsDsNQHnA7esgPCoxsdPpVkxyduT1At9Ryrc76BaBF5RdZs5wsRTMDLBg2atk47YR",
  "key25": "sEqPKx79uMaGKpM1sJHwLmZzvi9s67JQLeM1fLGFVGjsd9Cxzkw5zBtjHGbbSwd2CdZgUPHR1yHiPov8cwRS5Sh",
  "key26": "3M4uZKpAD7V98toyknheLaH1k1QcSkpn5sBqM7ZSQLkHgs97jQejpGTmm7qKDt4afNeatoegpF6XCf3sGYRjEoZ1",
  "key27": "5cjPGrgLX49xj5z1eG4kPcR7mcScrv29tanhYMfyaeAVZ15iTCPxGpUamWhPXUzjQewafaBm3M5dKFjrWTU3y3pz",
  "key28": "63dUdp4pcRzNnqWx2CaMFZpBYM3MLnCXXkmp9o6LvUp6bsuoUKfzEBxZr2ywVrLGhHgeeJM66TU4DMxTPfBNmygt",
  "key29": "5f3cgDhuNn6byZDEDPSo2u66NGpme35bhPdgVuoEjN8k7jX2Bqyc8JXPPgGmAELTnMkJ5nWPRFRmhoiQf9qw3zWW",
  "key30": "3HEWqrqRNdjyEEvVJpnMF71im6ipKjc5nZPPNrrjdCDpvHBCpUWwyQnjJT3XMvQe9cGKfEF7UFrrh3uGT6RLArpB",
  "key31": "aaivpycyxSCyQmnkCGkz4okJJDLkiJwqz1NnmqFxbvumDr3VWj7C7WNAR3HJXeQqYUaoUAqe6c5U8843bmu4NUS",
  "key32": "3L1BxytoaqPbdv2fXMHrqF1SMK259PP1S73PPkPdqh7s92ENkNmpr9fymoduHkAA1iXvy6cLxBzbhAy3w3cxW3J1",
  "key33": "2r7W44R3whC4DFQotcB8hSeUtbPpgig6gXUQcFJShHEZSNP5LJiiVuiTWTVsH5tnSacw4n6vGGuzADC3oK4v9Zm3",
  "key34": "3UUJgEbuTKLSd1oRKuByZjZPnwiLBNe9EoAwMh7KT7wGWroVGXtkt6BcM8tz9feP1WydSaUZgKMBnwQZqKHMyNiA",
  "key35": "2iZnW2C6F4etFM73B8KEEUPkdM4zGsfyNLcUkeqyyZRDTqm4BBJoLorqGu1jZYnRkiBEY43HGWUvdp7bY3RfVdkP",
  "key36": "5EkVQFT9UfwXJyrMWBntkxzFfqbYhugE57prhLcCZYr5szmjGxQEZMtbkj2pJZTUkjJfocNKcCJWMdozz7pXr6XP",
  "key37": "iYcS9vAYwxUkC8QRenXW1dYALkmFfNf4FdWv3AguKaKbbuC6KLAkPUbfRCPK33tBYfcL5kwvf9RswMedMnyZYN3",
  "key38": "3PZvd2oZncnqWrkzG68ekRTyUGu66hKXhisWLQENmkTRPN3UZVXXBzEiuBDt4m5PhprTpsz4iov1TaGUJMA8K7x",
  "key39": "4EWSKp1EgPGkKw9SM6yfueHekGj7MZAxYT1vmoxd8AA2J66SLTJx2hzbzZHCHB6QdZyyLbm7jroYaoqaoGgBZVXr",
  "key40": "5SzN3cx9XJVdEz5dYpZKaLdCR1ZnTynAk2CkvWf3JLdYff7E1CjjQsMAWmax8gofvx9ZPWWPzjxUnTUksMxf4NqD",
  "key41": "3ABcypdiX5BaHcZMSMpaurkVxCiXYEHnJ2zicumjr8RMsact7L59BCnbV6BkJv4T3avtjrZMYwC4tLdc9uE5BtjW",
  "key42": "AKb6CBBxKaA35hqC6caB3ycenNAXm9BB86B4tQgLHrRzVjUis4NX8wZ59jP7b1Hgqw5QEWU9K1KoEf5SNZHZMt1",
  "key43": "36Esj3aotMeiSxWVz5Qb2GCVKQpoCDjc4Lbbnsd3qTmj27AUszyxHYpFaQh5FbU37trAd46HyiwNk4Lyoy1JNmA",
  "key44": "5h9a5cm5t2s3iRAXxVj8Cn2wagUgtBhDYpB5dZXsGjytfGHj32s85q7V2fAComQHjLcTA85kBn1Mz2B9B2bWwJLq",
  "key45": "2nBgnM1mFW91pky7UrqK7euF9yC9MG3WW9JnAHr6vFdGWLLSJTzYh22mV5jJJFky2x9kLJUZuR4wNA8tBFVLGdmD",
  "key46": "3KQfYFZKorr7Kgay3my1FR2a2gUkpBFsi3p9NRe7TTZ2ddPHLKspBEyZ87ybhRYAmgbeYmnNJ5zjPr4WMQN5peED",
  "key47": "h8bcmHeJAD3hRFcj5Da6rksitAjkQQniqk5Fr2cpm6tL3jY4zDy7Cy2PdW9kBe4yxMWoJPoEAU19TKBpqyfLrWE"
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
