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
    "brmjdz8wBTqDySzwdPfgowBtvRsJm4pQu3kBAp4EQwVnD2yqony5TiLBMqYqCieHoT754cor81KzEBF5TybUoKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JaikhMNX8qYXmcSL75QZ6BaLhWJkWWMtEsdrdNAvMsc21mAtzcKaqUbhhECSJrhdWw1v2WRA3PSmWqVPLucFxcD",
  "key1": "2yRk6CeajAmvVYvHHmKVivNHEt5uGXFPFmA3Q22cDNjv5eWxFze58tF1QzRhAu2t5kpaSmhquHmjrZowZrEXRqT6",
  "key2": "5P7eBTWgoL2AbHypRE7FSkpM6yEy7Wv2jnQQdB5DGogG8CMdMUkmAou8guPCxD8oPsbfy1rnsrVRPERZF6nJ1GmC",
  "key3": "47c4TVnwbzb3fVVEKQ9UnhQwxgX5AMMPzwoo1q44auaJmvSEJdRv9yis92Zg83sA8WtDyojdVnMptCqQgRCthXCJ",
  "key4": "3KMhVDhBhrCiPQ6Krg1zyfUTB3Yy49BbmNC8ufUsKbUPbKeaJvwJP8aHvsPxvgF7bjZ3xyf7YFp1WEivxas9dxP9",
  "key5": "4svUgq1ghSchv5f9yos7bnrezsgtuDF6zaE2SKTtTpDwHbaJL1G9XeRFB9rBq7A2LWdK6Q2UL4Z7ru72uK8z7Czq",
  "key6": "aXBzLXhirshqcaTxtetE6WMUBzFmj7LUCHt8i7aXARmH5fz1vubRKYABzqUXS59Wj2ThSkzGpwgGahDXbKnX7Yz",
  "key7": "3VE2HDq4sojcFEE56MNSTNHRbvHCH8Hr27icvkzn6NoYknFcHBWe7ESRM7XYwCdbPgfPPBCJS7jGpHPYMmFYJFNG",
  "key8": "3Xpevdv3YvquBDHw9WRcEPVd24qJmqH43bPMamVqK668MRKjLfrEgJQrgnLRv3EMaTBT9ruykBfSUWVfZQWXEFrZ",
  "key9": "6LWxBu2QK17t1mEGHCAFRUNqQrAHFt2D5CJ2W76KD8b3Lh5Dx6zaiYJ4o8tTTn6WRGmmrJ52kn3721eS4u1vk7A",
  "key10": "5NiMxBSBwja6YCCZAkvjKGkrGF74WpN5vRHdWegYWPFv5JPcZtxCF3uuPVYRx7GzVneowyyxuGRjLTVudWeetctw",
  "key11": "4hjCqcBa1wPBwfAap3aRNWU9UUHZNeSZnvP8hGrz4z9Y4dVkgQ2YAQxmdQvjNnwFMq8rMqxvnSCr3aTpUCfe1iGf",
  "key12": "bVhLZ1e25D9oToCbopzwNY97VbwKJgWB5SWKcg9uoraCCcL1CjbjQw5Cou4uhCDYkgRppZ2L2R5QEnGUf1K4ewk",
  "key13": "659PUeCfcThNkF9nAepHhsxK4K53fP7MDPCcqQExTA796DCqcuCLV3ZNc2jgujzDKzfXBUqwdYqWBNXYVKk91ahY",
  "key14": "zRmGFQPrzhzd34JYFYBpWKiVVxy6BDTQU7YvyNXSGrgxQWAkE9CzCas8cYDJzGFiBvL8U1TY7FzDGNfRN6opzyH",
  "key15": "4xYVMaXTPiruB3UY1hc3pxFy97bH8q5dyrNfeC4MJ59FfhphHX4RuXnDd66jLVbmcxmZdRp4dRcnZpJqkw6Wz12D",
  "key16": "PnmbBsj1vWAACxPUyUZVdj41Zw2Ngw446VDgKMkGyyjfo1YA76uzT9GmPHuLZW1ZR3ST6xAiWoDzAGLt7UTwMNc",
  "key17": "547XhLSCdNL4r6ndRUQjCQnPBKk14jgb119Uw5U45DD3sV2vJiqTW2SbCb3QtpgZbyxKm9gyMCRWjDF7FjfH3gbz",
  "key18": "65PXi2WTqkRkmYzRHEUHbMRmkDRPJMyiZRYjmJrTYcMtZruytpN9ZmiCRxdYt43zM9vJx5TyXjG7ytAr62K6AKiy",
  "key19": "3jG6YUYJqWBkYBJ1KW5Yv9HkfAZ6RVBH1HSLsZC2ac6NayWWELZckz3ZKm2ByQn8s5mZNg1kKudqAm1ZYyhHMgff",
  "key20": "Q4PF1roAoUNZbsBdJ1UxbYEWSV5CxhHYFoxsRA62tTW8D5exQZ5EXBirmS4tceiNyENnp25JpUpsEfRQuTEb9bc",
  "key21": "2tsnuLSNnJ6rhEWYM6nk3BqbpUMzM8AmGaNrhs9arJjfSchZ2jB9oLXei4cZM5827LfKaEMRbXKvAJR3UTd1CpCw",
  "key22": "323Vp6WKcUo1HcvL8TeUncUjtyuXKubyqfDV8WehhqWygA1GhARFWXm2xk2B5u5TsESMyde2a6LtX6bp9U9yozXF",
  "key23": "3VL16tFQqN8zCvMMqhxPppGvogdpNbj2PgUeeKBxYkQntxxZLvP2AXJba5VuJPRYUVxxbJy7XvUcLWSCqkqBU7mr",
  "key24": "5JvBrJFmA1wiypXAQPZijnftPPBnLmWeN54rb1BTor9kpVvWtwoXFWwtHyiFa62f8fZAbfdotMjEa3WThcjVutPR",
  "key25": "3vj8LiogPV6jrVgPR2t7DqWdX7SyiFXFi8JgQEQ7hbGeHYkaaJR2ZNAByXERY8L2X8B9wij5MKCQ1Q49s9Bwkrt6",
  "key26": "251ZsAr8BBcAvqKsEHJQ4RPzt3VxszkEvtQdYeBePSrxnkLpycaHRf1cBfRYhLdhf2k4GaVBgNuEnix8mFeWZGBn",
  "key27": "3tY9PAJyaRkCmzYriUW6FrtQYrxiKRAD4WUdjo3EJ7annA8v4Q2TfUb4ubpzw36tdWe5J7grDeeUnuvwreY8NVvG",
  "key28": "2WMgbnGsC3C9vs19jnEYwH8YeSJnCZSSDerDH3vFvc8jFgXYR1cbXBrSbVPn7rej8HvWpzeGxEdR95rzmyXrEjU3",
  "key29": "4aVjCA58c871nYeV1WxtajFqfSRKNfmEnxWFn55kx6x6v2jeZDPh5VX3BdUgzhbunDPd3U3zfUCw4ZWn4WNuSNJp",
  "key30": "5RiG9FGdThXHbmPy2Wio28kbBb8eAZJuCJwa3obAcSC6Nnyj5yGXjBnhsmTQAGwzVpQQZu34qmJcdbR6Kp643Ly1",
  "key31": "5uBB7yPpURJyNoAqM5j4G11VP7y8M6qrt1ayuoJHmszKHFZm9QqRxevsoH3dvGMocVfoQfTvCGeSLAzs25JXg7uT",
  "key32": "4LJjo2g7MBnN6X8LqXHboyxsc8YuF2i1ZCm5MvHn9Faw59pFtUhPvF1arkZYPBsLFy789p7m8ZTAen8XRKPjJRVn",
  "key33": "4PJywjgCXLfVvn4cbc9nNvVj3pKcKTpTzkiQhebB9dzNZygg5VWjHXnGNdqo2mbQ3RWzkZrDmbNwdwpNKeDF2tmE",
  "key34": "57FAFGypJQFDnkCDreycGqzqaFC769W3fuHPWSxFX99xxnEFijqTYPhHk5cPib4qdPGh7QbHs6zyMHbgZSrGx5CE",
  "key35": "8Hw3ovW1kUGtw1XpKKCFQn8B65Fan5mM7pZGVaeYqVJPwgHJT7FM3vDTVyMe76v9pnAkrofa1he8KvxuT2tCNUD",
  "key36": "32qvmwYGhNaZ8hQXYJcTNN7XzxUQM355cpfE7KFn1CdSQVdREYKfaEYEjy3QRZbjT922kjNg2kPF5m8Vj3zaSLX5",
  "key37": "VBPjDTJvdKBD4UBJWWrCgV4ubcDepnFBL4i8rQVBqdeYphQYZB3obn2zJBWhjGszyf8YbFsfho1FPEr9kSPckD5",
  "key38": "4XSiGxzXADHm1Qb9kLRfBiyUB2SFbRGhG2geqnatFvMiLL6945uDgbKYFuszUvHac63C18JbsNV6taVLd5YNV3F9",
  "key39": "27WXLg1f6Z4WfmbJwBSYqrNd47bCC6vqcbHAmfp9xH9mqyjQ3vtDinScAamAuBZDgiu75xBB9mt8W11m82dgjxfk",
  "key40": "4M6PhC3VrdSu29u7HNQzeeSFsGbbi6GFuMKECNsryy6MWsPjddjAxBfX1fRauxUVi3Kq8QZsEGfbSGRSkZkuLDEk",
  "key41": "cJhNQCxzXE3AyBq1bUzsjgMWJqLNVtdRP3JsY59Ek9c9TJWCU3rGE6qhk9jfSrQsFYuQqcQYqcCLshGFzt96CzP",
  "key42": "2Ny6tYRUf71rzjC9dY7yNZjcAR6XhH9CGRjC4Grj6v4HE8JxEMwGMkgkAYSafUjp53eeZnVrAcRqR1ahALyfyPep",
  "key43": "49Byv3tYZaSvDzJdDo4KJGQstByc4qSFGhYgfHzVey9BcpuDEC44kyAaFNqpyRWLCPLXpGLgGdasNZNZ4dR3zrGU",
  "key44": "cTw9bDGrYdXn3kcDWkLwM3Urtormq9btTTDDfjoYVDdwinDzBi4ujGqcMnKxEeJHj9g65udmkYbkiVYfn64on2w",
  "key45": "3n3orrLTVMeCjW5Qs7dnJZECLALwYsXUdbU7yntstbc3smg6MhN169cjXDuWWxYo9G4oCfagXYpJ9qNeNQwtY1Xm",
  "key46": "26W2ygsfn2Gev1yk5omoebC6tSyJSobVaWRAQpv2QkNYaGsPAaVUu517snD8QgGi9TJyF8TDjoKBDtAWe8hrGTF1",
  "key47": "2YWNju6o9TeXhfToJJZbFjpmDTh7BpDe9bzthbfpkmsmCfXzoUfLn5rc1Kzw5fc2z31FgUyq2Vg3ULfFMc86AVRZ",
  "key48": "524fqRP2P5UFCHHvtGABpkZekHWEHnQ66tJT7ETQdm7MneEwvxsUGUaDQr9iRJ33DPnNrePJ4metzqhPXMwFZh5M",
  "key49": "3RutLCasjcMFLh258xYmtzJJe7e8K9YWEhWgXc1nQPWQEQJZn225ggTbeLHnHYq1FkuGpG9wccqHKsHDf7JUr1yV"
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
