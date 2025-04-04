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
    "3cgfSp3j9D8bvSXCuKNVMGxx7SZvXddMnGGLBeMhY5UbQfPVbk2brx5WbMNdhM1zU8NGMiZ3iiJpUZLq2zhV19Na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gxs7ZBxiPbo4aBAz4zfdBzspkcEwLiwzUxYGSAe4o1StWxC7gWYEzDWVaVbJ8xDwz8NsZdW59cGTUtCxphghB8e",
  "key1": "2CXrYemDFfpr3MYwFEx2hQ5bg1QmeDQD8vQ842SNZMnzZ9ZaH1dhuEhakoaqxZ4A53Vp8HvdZwi9TX8Zn4meV6AJ",
  "key2": "5ifVPE7WcoRFiSqj6XBzoNFeUU1BzJcCYVjGK1KEVHFqnoKAmbMTuaLtX2mTeQUNyajrTaGzffYNme2VZVxAEDpV",
  "key3": "2Md4hxTo6HHn3quTeXAej9xhKafhPCyC13TUEgquX9rARmdZ4t784rVnm1WEbfNJKhWS5D6jAN7NGaxezqoQRZeM",
  "key4": "46QRNz5tg55npbYaTcbfViYMdGQaCcFXRe8rB2qBUS1EiE7zomX3k1qrZga7MMFUYov47M9aNtmoUyXHV2VpUA4C",
  "key5": "39c6JLJBnpqQhTMZfHnoM4oxJKUR6qQA1fNTgYwLRaw4suacCnmdVCPSq4AV69x8RUDp7FADdifvw66fAkmpadqo",
  "key6": "5umwJ8Joj1sU5UqRiyTysDxYGDgHByTh5kVVYr9G6JRehsTYAohSWnpC7NLjb3nGqend4crTYcFGFCL2svDcQH1v",
  "key7": "2Ng8utHF588aDHhgPg4rk8Gj9RdUG41LWx8TgBLs98Sz8nWQDyDs3KRd7EZJSXfrMsVDqi6YPsx75K2GH5JqDGiY",
  "key8": "36Xfy9Z6ZCszRyctXYCj4tBmqTvo8jP7G5Ar8q4mJy1cQMr9UAguWMrU9VuQfGNDEaNxQcTeMdusDx7Sm1deifbx",
  "key9": "5MUmxDeMPqB35rx8pEtsUZMJkJ5TyYnxETwdnrchp9J6e4NPFWCGV5p5fbsEfZHpHXy2AM27XaUBRy1RYXofyf7u",
  "key10": "9E8vjefw3oafpiLMsrtaWoW7aQW1fNgge7dDjQKU6ZPbbTWMLnfapXSbWR4QEw114dU42sKeJ8RaaCJhY2j3fYX",
  "key11": "39fBCsUGRTb3r6x1cVrWuzz591T4mnLbGwX6n8t3VSREkTzzfi7C7hmTB1c14SrVk6VSTWHXMi8Ro4qVdFBHuqyC",
  "key12": "3BuCs1SVwKLjYnTgBp9vY9fCp5X6HDhSvxVEbJ1CChsybAexziy4oXscf9UK3TtDpDvZ6u7ri2UQyvsNgrVAHryf",
  "key13": "LGn9y1tyWBEBcQqKUu4ZgFFbEJTYizK55rMeKjzwkzaM5jVvZzFEC5fNvjpzMfY6UvTP4sek8gmgBjGsHhKszLY",
  "key14": "3HD6EfKreFogwJ6oNviSbxqMin1xovjdPzZD4jGifMDzCPb6RS9qWZLL9LFQUHXvVmnt6uEjAtJNfs2tw4G1jfVi",
  "key15": "sTHWmWKVFu5doTgY5PMhr55zkMgcVzFFqQKGVRQa7gY2w3yMg1fL7YvkKcncrwVh1apWkGygK4t1JZzytrnpHEQ",
  "key16": "3z6DnsF58XjJkwX29HoJ37K9nXdKszW9VJVhPtgT2ZTZVe7o8nniVKfkgKbVmhRW2matJR1mpSJve9tEHZ4RBroq",
  "key17": "5FB78YdSBcHFyvWtgUo4U2ixeJYFPaxRnnGy1Wn65cBjhG9u1YEspuXrjhtjWvzGBEPXseBNU6NeRphuT6dGCPmA",
  "key18": "55t2bTHMwkWMn4AbbD9wZpkrA5BJC97Ln2HkwD8tHAi59LHzZwLockzG5KfEm6zFof6jptV4BbjeFAR2ope1XhwE",
  "key19": "xwJv4RdkzjWLy81wnfXpNx4jTJ3ggGUaVrFErjYYsmn4zkXEefpCAEMjsHVcS6hyaugAFnjvA8HrUXduWbShQLU",
  "key20": "3oJkSJAdkAB1DWhGz34mbenxooEfL9kfjqAaRoGfs6kc7pJbr9vAJuUzmF9oouY6xsDNGEQDjDZxRpkUKEfyzA8K",
  "key21": "4B2TinRTRMkpZDXtrEk3Wh61bmLW2i87xPj9KAfPt3cqawYoZanTqugCLU9GgreJuRWX3BhA64jfA59qRi4Vb8N1",
  "key22": "HkiC5rWdYW7Hjiuc8YGbDe4cEgFwxzj2THBDX8zNCndj1XiLAHcsF6sYL6wcvyYvL2ZCEN26g5uXCaWf8C8EPQ3",
  "key23": "3qprVjiEA82pGGYQAZn3wH3ZFxKHxEf2aGwoxdB484MrAYfKVuN4rB6geaw7UJxoMsujQfXb9e5zuCByNQCwRFyC",
  "key24": "giaqAzyEhzm3L7Vr463FNewAre6tLwrCGfzGfsY57cmxfdHzdaKJq6XKK9iUk3LESjLKTzncVQNa5kPJhTE5Txt",
  "key25": "4toa7Y8GScMUoVX2C1obZ7W8zUeS5RBTDcfKWTe77cZGbSVRAsmNwNdvTn6dGi2oZjwWYKCG1Wu39KhLnPtd2Jau",
  "key26": "4PoLJB5s9bRZbPndxzfg5ejCosxi5KJJjr4S2SmugVfuaXAoFwWDQiEmgav7c2Nagy3iNJXiv1TXiRTSpBB1v3Uq",
  "key27": "2w4JjEZfYMyxrQYBBK8x1DsWwPET1f7mtTmTriTw5iCsqSHZtFoMHFAn2k2zYfb6egNQdKtGVnNpnQPzG5HEFvTT",
  "key28": "2cudQfBxaRY3CofNk4Uv479dT7Y3TVMr6JpDeNKhR5EVntrsPiK4dsVYdG3zzv84wC6bTaYE1DR6mEbje8obE82",
  "key29": "527WrSh2Ck6ACTkVNrWceZnTduMFmo1i4oqWWLUiFhcMefjnitr9ixsdy2ojvzQzHiidJ73yXGZovVwRHFR5o2Aq",
  "key30": "3AvUwakixZyHD2rB45H9gJ6166jisE441HcEfFaw72hUrF3Pz7PYhEmNPC7foqqYUaP1VdwCZpRTyzXRRWYpoy7k",
  "key31": "4qfAM3novbQp29Z9CtTRkpMUs5nbGwwPJfuT5vSw7NFDCBFbZNwow2EGPmuyUJfUfL7YerNBbQVSwsAGmAtYHMBb",
  "key32": "xQ9PcFZ56dozCKKCbmAKSH1nvnkRuH6FEuU1NahGC34FLMjcEgRHK2n385BayqX8GkJbXnAUy1yRn23z8CZLA5S",
  "key33": "2N2sR6WnQeYRK4YYSFZtvA528MoUxVNbTECjetDofcaqFmeUkYbE16SWzpdQ93UcioGPFWaAs5Tm7ctPwtrrcqav",
  "key34": "yw75GctdSEE9zaUUYDQVtrRDPdHvRCXCTafoX2rqbw4cc39tacbvNQFzd94ThEQdHCZTrrFqfhLEdwAREYEm2ej",
  "key35": "2R1gffq3dxByNV2GMQXvfVRaxqHP9L55WAeuXCZyXjQCHfgQqzTgjqdYS7vroB7jwNkBJCMUSAPenW5Y3M29yTrb",
  "key36": "61JdrB9V3zMMZQGvFb1kFncSkL2Ed9Mos7D8mKG7TU2iESDVZyM91YiPJFv87Me8rS2fZNCmrpB5zDPUNWVEtafF",
  "key37": "5remisX7Bq85CXfcxtCJuMrv5ibAzxA6y73fa1Pc6GMwd7B76jCf98CF3Et5DfrSH3TULb2AioRRD844mT9ACFsA",
  "key38": "4rsSi6cuYoWdWx1TnKxXdFKRZCp6tJLzwFsfxJGyvXyhXdc46GWhc734EQUp35w1f11eGNbe6Leaug2wiBWbF369",
  "key39": "55DWtBM84d7yuyDM5tCmaAMCFiXcpRknCPBq4RHLmZXnvUEQB3S9JgqL5trHRg33pHsSZXr92EZNS412G8VSrYH",
  "key40": "aszB23EDhq8dwUmQQaF2EnmEH1ETxXmSZSvUAEQ23rEgLZC6KS45zjKmap6LPnh7mR9xcqxVYgqDRWjrKMJ8ggc",
  "key41": "4WDXtuFcuKaNkTndiD6TLFMgbdWxtoBnM3phP6jrC2ittHpzsyHa7VWiWmA4Z4D21cjaqvqc5eRS7qSoo6XT2TRu",
  "key42": "5YvNotuvGKwaeUrC1D8G5RxazuRf4AQkcoTxpZJMxj8zccfzW4vNBcNdCoe72kBnCHjoCpEU9YUVvSr4CjYdHJF2",
  "key43": "31eu7GE4eLVvbsgxmhAnDaQb6S2ARqEpFmBqnFkNjnGb8rRpMp4JG24pXKjGprY6XZq4r8gV5rzqm2JPgKk5W1H4"
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
