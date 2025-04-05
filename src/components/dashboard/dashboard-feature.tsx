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
    "3xoS5Ra2NV46mFv8HGSqSZNKbFP6Lma6VNSSdAPbGr6KUPJWYzHGemqRjf91b49EfsGcZL4PGg3EmxKYYPdFJXgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7YUTFzinCBNF13pdW1CgJtxSrh2c9E1pQ4AsXS8Fqp7rpYLhAF2QtcXph3zYLrUwoyxDvXmEiJ9EgZirw6mCFEQ",
  "key1": "msQwZaL8FjqxQchLzPCJ8y6VJJFDLr6Nj2YzBQhryifbMufadNSHpBSwBwLekYGRYGyjKhwEQArVmWE3HtDEtSZ",
  "key2": "3R5FMmYjf7N99AC9rk3gLjeJibJ6TEmAQpXqJ7kaWxNEQWAiVNnDrFXjmy3rBaXiG66ZgMgNyywZW3GKV4Xyz3HZ",
  "key3": "4RuR4VeJHdNgmeD79JEn8EmDuuZVxMTJsNidG28rMGpSzVrAa9dVrtzcoGTuMxoS5HEcWQoQFD2k9ZQzyyyEdkdJ",
  "key4": "3frNhNrYermu4Ctn4YykdVDyHDiCrn8x5pAMY8rd337f58kPzvKNPpZQwZUW1gJBJ2bK9nJvfncCkCQQfnHEgZus",
  "key5": "2ZqQTTFdCnNeqWQNGjFdQa7RMHy8jetQNX74qE4C37hfweadmy12R7RUktHGeqcTAK9WhKbCbJ7av98SoYBd2Stc",
  "key6": "3z8DVuTUoSJ31nmTYjFXCXF3ESNrQ2QnQgvSXa153ZjfXc5WKjfFCDbteBADkMkQETVbfctEuQm1v4scRr9J9NN1",
  "key7": "5hTpfZBpqGewp6iLJDfwmEqzUd611gNbBevgs9SFvSRn9kW59C1wetQ5pbMQ5ozLAL4gZa3LXqftbmYK3VjgMwG3",
  "key8": "4msprJsKKHAvwJsSG9VckipokzviZ8SY3gJBTuGgEiz82EPhtdupUuiV8zYLMbSUKwYQnLDBh6cTZchpdwaodQQH",
  "key9": "4EpxP2AbVr4V7RhhRBcMATgPeuSusWTR8ZfXet6ynUxeZjFeEbfJpZxgoTto8tN6vcmjyhRet69hW6qxsg6QSodm",
  "key10": "39Je5iPJwXddLPxtbthzsd2ZZbFSQbjiEKXymqL9qUks2F4Ym2qFs6NQwp3dpoDHwP3EwA3jsoefqgAAVa3BmgKR",
  "key11": "5a1G4LPtDFtZTKLgtJr62KYoajimism85iW48EWNDSFgXgf3Mnimfytt3WX9B2PkRLAGL8Z1QmBNaWnwXPeJd8Rh",
  "key12": "4RfTD2GE1uQUpSXyjyRzyxKN6xrsXXpyBPpzdQwUTHdZi3w5keoc2kfXSLifsWzh5yELRPeNpg2RrWSLTHzWHEHW",
  "key13": "3zkx4ifsq6tW63f3rJErzpyhn9SHvbKDV5VXjrn6JMD2hezcWu2kWDSKt67VsUc1Gxr5ZXuQHms4ddcrchkBagMT",
  "key14": "3BLUcVfAeoT3Qbbpx16gnvifZcC8JP5xupYBYm6HzNTvdz2qT53AxeJ8sAh1xuH6B7HhhQ99ry3aMH51iP2Phdes",
  "key15": "62Yzpp1ZjvynQUjFEwckaZZdnwEahwNfBBx8N8uEPsGiHhwzDbtN1WdrrdrvpAu1R1U7zMce3mKamjQ5bhEwgDFh",
  "key16": "2Ya1huwPHJ3hNQsZi1XPaEvX8G3memmfPxqtaWjBc8WxwtVz1rSjgV8yysc1cyQX4ZGsNcAXknAEMBFXEdEP3r5z",
  "key17": "3MBsYqL2g8zrDCQfrcRj3bcd3RZLmNyABCa3B2qmrd3zUGFvRU2RndUnVqJxBQChPebyhonw2dmpBWg1yeY55k8P",
  "key18": "3MGjfH2pb6vFGaZqBL8Cz7VAfRtaJvqSLXKLRv7htmQfueNBbtsWLGuTFdSXp1RL6gPmrimR9K21m7rajGDXNMJ8",
  "key19": "MSvzzTGGToHRs9wx8Q5vouAS1hE2XQMx5X6e7Ph22kM416huABuy7LcfHF28cc6ja2JC1VkLoGZv8xumVNBFXSX",
  "key20": "tPv5P7AHxAeMQ1KovFyy7VNRAyuvjnMVPRJPBvwrJ4bpSSjiwQ86YF2DMexcrn5G4puEg7nW9UPKd9iYVdNfKXf",
  "key21": "4tweip3CKhd7pqFBg2HQXrTTX3xYHDfq3DuyFa83r2WYnE89FgKTEbBaYa9XBSUKsFW84TqWvFSA6V3xKYRzxacx",
  "key22": "21uDkh7NySfTYNor5e2XsGcz9feiDqx7837afFrmDDFQepyyQBSKbNUmQB9Gxc9AJ6x3FiGqAiitZmzj4b7jAkLa",
  "key23": "3nCzCJWyyQG4iGeDKevSUwacdYDW6HysVozDr6Cye9DFXMCYEJ6iamE6S81FEZKfxgQmKtesXBpSDsJpTgVSdE2v",
  "key24": "3jhA6cpuft3t6XFEpfkPPmn3HKR8MG1JZFgPEMKSuu8JGWoLgAEdF2t2BgBb8wvP9YznENQUEvv3y5Y6LxbGeuDR",
  "key25": "3f5rozLMfwLm5JsVvdpcBuy3DJsbymycRtNSC4EzFpJ3weu8bNNphnxQ1J8kC8pkBCMWCDchakeFbzKrQ8kr7Aug",
  "key26": "hp5Q5b9JxbVLiacqNqH16rP5Zt4HpD52ViYH9kFM624es6j9v7HQUfSikvk39eDq7qaF1CgwsHjQdATHXFXt579",
  "key27": "3QJ3Xw3DCJr3ibKNsRpJRsonxJ2xQLQvcZAFkAy7adENF5tX51EGZqPbowC6emZRY1YuSMjGwnjZ86FdAPrMxB25",
  "key28": "6453M7dz3MG9R1LGGfMXpnpzqnD6mJ78GeshJF5wMJmH4wHxG6W4fTofYnnqvFN9Wxha4E2hDEQWkTnGi3XhTJXQ",
  "key29": "4aSSbHJ1X637RGJG5ckcZVqjmpZ5m85fXmjCL1GqudN4JSWY864QvK9TeagKDy6tYxygnWfvupoC7AHzCNV1gqcv",
  "key30": "5QAgyh3rkz2KwpgytLhmShcjHeLtKbAp4X5b4kKcgZ66kfMRyZDx99iVkP9Jkq6MGEEEk3VgbsEhgjrTDgEeVbiD",
  "key31": "F4yEhJ3sUjEvkDFJC9rXYD6Dj6382d6jCT3EWu19eRourKZ2LjBuQfKattzQg9SeptTo6D2NGKRRviVrhKwL9jT",
  "key32": "5H4WwYJYcVcLKEm84CzpuXLrSB2Tpu5eqYjLqt1y2cjpYfwWqfRM667dL1MWMLynjJcfndVqZTKfJ4RKcCo3PfRJ",
  "key33": "dCeMvddkqEQsJYXtX3rhEU9UNuT6Dmv7CQTfHTk45aMZWEAtNK7UnokwxS7vqgqtnz9umn5LXjZAmL4XJfPrKtS",
  "key34": "41Bdn7i7x4CDuVtM1wk9SWqdmRXVJACrpioYGohhfFgHKnYqXBf3JfY8mKzFX6ExBxMqDd2ppM4T3p4pv34N37uF",
  "key35": "42ULHbcbrHXRmBAJdUFGqZn83tn41aGj1TK7e9v5p7KcouGft5eU7kgsy4KD1pbhBJMpxNAS5Ei6SssQktfKQTz6",
  "key36": "pg6eaRG1f6z7TgGqfRCRhiSf7LtfdaczuopZugGzSpYeUtobyVKqwhUYVviKKr7DAaSDcoKiJK74qaeQeg75Wh1",
  "key37": "43Rh4ENZunKwdwbSYXpk4yKS227fgUZdBpnvLUSQcAYZ6eKRqFgSwEL1acxwhXdKhyMWtKuyrT2Xqh95Pe8KnUWK",
  "key38": "3QMGP6SSzPPR5zzMg3ezHUmAQAdnqjUUfAJ1RKgRvb3CFFVXRvqiZUrWmpQBFYFo2TmhR91QRpWEK3H2n5ErVNpZ"
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
