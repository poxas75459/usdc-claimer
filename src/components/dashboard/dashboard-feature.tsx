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
    "5yy4buC1EFpBcLM1G3BTsYu549FM52wsREsqnGychGsxZG2FTNB2jmt5fdCEUVP3SMJHGahyHyiJEjQZqErsLv9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MkBq4iNS5oXgecDFrN5S14CrPejAxpkvu6rCG63T5x6P33AmfKbGbt1GaKFgkiJctLi5bFonWJ6Pc159y5KcdpN",
  "key1": "4VKcDpbjHGBXFTWf8Lw3pXJZccjNqDTzKws7KpEKKEKuYgJTBK5eJvLUGjKN8hEoEaJMcdcjKwVgsUjoE17GnunH",
  "key2": "43Z3EQqm7TX2WAAMvSjUV2a17wanmwacD6MKAE1agQuzy1o77mWkeemfJXS8Q3GyT7v4xZmUx4mi8R5LLCVz9jBD",
  "key3": "4DDsDLUpTdEPPrmaF2S6Wuya6feSCGXvL5oCCCD6z2JmquSypLp1VXrishGPKsPHsYxze3GyWBkr1Nkyu3pp6pia",
  "key4": "LGxBspHMwufFPDHFXrV4nfZcCj8KsTgoQoMAS51uZi1eu2Enm926pxXJZuPtTkAmhFngro9BAXtoWAMDuC5yc23",
  "key5": "4V4RkeU7PE3dustWggJFB8viA5KN82DHCzmm7pXPd4RBL25f8cagfHn3uCPT7NN1daFF9U36bpceZRMr1zzznMPo",
  "key6": "3FpXFazZDLGZ9RHBTHmyxBDC9XXpkjpDtFBKKgwZev8PtLvL4TE5YnHj9hLsJDBzrAX1WwFmWNQczq16j9zc3iD7",
  "key7": "4461fLViZruGwT9QsbagzKZMDhuXCYVx5sgZ7AmdLpsLfJ9DSPDJkykcxs6CQZQfJaSzLfeqvFFgy6VXt3Cq9Fm8",
  "key8": "2GHJeDmvMe3ZxqTafymVx851hTW9WG9CqvjtFQhyEU1BntggZ6QaY7LSqrZixPAKgNs5BCjRKjGW6qMW6rR4gTw4",
  "key9": "3jmXpuvvY5yzBRm7guX464QFRsptG2Vhp1VPDXuatNkGZphHZMWH9qJ9hqQUsexQ4puEsBg6NcbPFpm769jyCQ3S",
  "key10": "JHNvjRJXizki2SN5bYpxP2kBSnbpzYyvX7rSPpapHvddSA3j16ofjJaDVDrL9mSWx6xzaFzs5JkjboVYwedRVkf",
  "key11": "khbDv2C2riqDMBMuPqEXr8EiojdFf2AzwKy6ZZhPFY3k7BrFQTxbhRrHLZZNNBMy6GHcjhh3g31xhg1DX7QtFiK",
  "key12": "2HNUcywNpVpe2cpSgrfoW43fKt2jVCd6witmwTZpBBU5S47og2a9Ax9ng3ZofSrQqPpxBBy95N4Usat66BHhunHG",
  "key13": "8LayFSi9iRjFTH4dXLnUhTnNiqkb5UxGqq9MXSJaWsRhHk3Uaou6LcnaLaRDrkAKxFir8vpJMuxDrW19fW652q1",
  "key14": "5us8KbYfHEsN7kKUzQ6NU39TTbQpd96mhnXe9Yois3LPYePhszjPF6W7EJqeLnu9GE7U13Wr4S7NkJVrpZGJTmYv",
  "key15": "3UAC85iGKCkwAdE3qvtVdrUbxQU26VzCEE83mapP2dTwy9BbAS9QMDjaaTPwewX4VxJc4wUaRHShxY4h1AM2KrLR",
  "key16": "5HEoL7ECA9dP3mNBLaoM5psfPxDsXGP7WUJnCCtRHd9NAx3nvY4wcxzp16g33ML9qX2RJ5LbBuCgNmDC8BtzB3eU",
  "key17": "2EcEGvJZCWTVQ4XbXtJ3tT9fYXg4FEzmZ6AKjw9WGAQVGNqXJ6Xar1WznkNMGuBLRL8NUG5czAdLab3LyCgipQmE",
  "key18": "3j35kEqSx8kZ6S6oLrVAnM4PYUjyzWpxLWqXpbiuwpPQE5mHPhUZ5Qap4c1RB59mJKNEM92M39Sko1UxtD6NwkgK",
  "key19": "4qjx3Daw6icvCpgT3LcrdhJpe3Xn8W12UBrVAkCHrmTFKDi4zWLJwMLiGsVJiohy34ctxFhwa6x43q6bS6sYgctW",
  "key20": "4BD2iuqmNy5Pz8mJgGRd7xu3bZcZ4pQ8XetDjDSj3ueiQoAh6ZarD5khBX5wZzTQRnqjNK6T7CxH3trv3JCU1kqw",
  "key21": "4vC1xwBJ79kKJJ4YWwpWsRo24qh255MqVozo3t2LdjEH2yMMceDTjS1UcgaKbQ2WQ7HZzwaXLMCmyuD2wynEFTnX",
  "key22": "4UXdyMDpX9ePCKzajvoMenBToRNixnBGBf4akZiG4cYyunste5MwsHeMCcPLDQ4EHG2xud5VGbzsnUtq1Db91Wbe",
  "key23": "2ZgLDG1cBMYimFLuaAs4rWsrkou2sB53SnDg5WWJxDb5pzopNZtZyGwX5ccBhVkfajyWEchqEDYV5J2xPAMSYZue",
  "key24": "WFFMMu1Dmta6DodTXpvN6VCnqHVrwu5SW7SvAg9Ms11n8wbwFDR41GP1fT3PEw269geEzsrgV5T63vJTK2gCFxT",
  "key25": "aDiAYw88ZCCECQfHWnp8qCLQAVHYx1viAMqp6gtJ4vZfN722VYrnAJpV9MM1ohB6oVhG9dcGci9UF3hETAozR8j",
  "key26": "24xBzMpTW1FAg6cGcXMQbMa7Xwqdaafid4JRcUCFWxp1CtAPDKXhQLgZGZyAN9x2CY39wv9mVs85nb7Mwdv3FmTG",
  "key27": "4SmG3f9xzYkzQmgpCBkv67CUVjCBEM1ga9oqQXQuJf45obfHRNP76devw4fAiaLYgLoWybKEjzDoCJXh1DKhQ5rE",
  "key28": "8d2YcM7vvtaYPMu5sqUXE5Y4HPPaTuk6HfwEVaNNNAKyo9KsKP5Ad8iLowBwDiF7Fxa9CeiV9MSfD9nbJq8cQ8r",
  "key29": "4a8ZYiTu4h4F9uXjBbEVkwQifCWE2vgYQQ5qC3LAg8EaUvaHYD5MABBteLfBdCLjMB2PGESFz818PUDaNBrQcjTW",
  "key30": "4nDzUZtEwRARzj7Z2pWrPkhNWY8Aau6dMHahQEpJ55hyrUaxzrmqsVD9g1bgDGZjpyWLJQCQJUqPkTFWJ2Z3Mg3n",
  "key31": "gj5HxC3H9wLT7c3sAJ5CFDdEo2949i9WjaHo2vhzc4twVd3vjLMUUupJX994wkfazZUum7BDDcYYimm5NWBqWZi",
  "key32": "4tQeRSTvA1uxLSf8cgBW4KVCNDCANBYXPiTWr3sWNjRt8surVLai5E9w6bUUJmjXwgPJTRARfxPN4ojKZwHoGMpy",
  "key33": "5DEjpqsdKkJQoozh6ifzqhgQE7BMwYw1hZJKPsacdsSeGgQEPPFsyWn8pESkkk8imwoR64kwJREUgypyFA34GSRd",
  "key34": "4GdsLE6fjHGKsWRW8z3GfgNotpvmqRbL4sxwv7HBEdrozw9NhrSN4kb6d44fW4dJxrZ1B2abVPsKavzXh1Jvp51Y",
  "key35": "2Vqp2bKxYAVMQKVVu5UNqSQz1EU8BnEJJCutqDTGbavYgEZZGAcxezBvczW9UcShZiDNJWjmospkVKM7KCMP4ruy",
  "key36": "51oMCGpqssae22nbPqDSMSXt4WCDLJTJ994WafBrnzo12SBD43hWQSoZmzJkMFECq7WeFYXDHexK8ZzmpSJ94oEJ",
  "key37": "2vCuufXK7n186PmNUVCrnMjw92UwXLwQE7T844H2FjmU4hS73cTJwuSKBsB3BDg4eo7srW2LRVPXRDG2BWDXuGY7",
  "key38": "3fZ3EsbfpveoYhYQZVDhA4My4PnSgmNacHe5KS6YbWZizTwkdmqGTNEHysxsz8ZG7hYdUrjZP9xc3ktoRDZW2Zce",
  "key39": "nAqaGMv33xtFewxtHCYgjuZEoNeXQ3vNkT4G7vMiWqqaMENpHZ7mXPA98tS65SCTCkM9kko8SqHmUTcqbsmXJGg",
  "key40": "4RCDha6D5hxjDGV4Gmjm36xMeuHX5xaKNXZmfCcM1v6bkzCg6h587NcSDDCFnZUrFKsKcg2GaBL6dtBuUHYNSKQw",
  "key41": "5VFNd5GjHMWB4XoTxPfRKFFZCXpeRnVFTnUYpW5Z6zwe7ByHPmjmT3cbGcpa19cgvXid3P4YyfZsRQQ9tFUwtKeH"
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
