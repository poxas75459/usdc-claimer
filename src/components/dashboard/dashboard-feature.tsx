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
    "pCsTFNTkKKHfi2bw24V9VhzWoGEYSd4aweVPefPKG4rY4Sgrp1dALpAsjG4aShfwzeNdQEQwpGqC6pYy8dNH9EU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Li2ak8nXzP4uTu93AddnhAgxeduPp9r8sYAS1JbSTJWmokomJoBoJ2oHrDyXziHS2JUAgqRa9gm7SS6CnEUnap",
  "key1": "58JEGznB8vAJ1AqfJafvrQJ2nJUmqcL9NNQ8LdbeiP8uRhrf5ahLS9wyKudA3X7ajDZLXQdzTfCepzHQRyEz17tT",
  "key2": "5r1ZWWYhfoJ7Xe3X1hKJDNGNTSDEFUtUzYRtYrTuWbC1w8VGpC9BaZCZd2WyHXwD95zRaD3r9dFmiutDvicBD5yC",
  "key3": "556SMjREajtNZm2qRtaF5vX19TWij2xc41ZAxwVDdtNwyWvwykQJchmFshsXU6zN1MVccER3SRsXBfxMZ8RntHMC",
  "key4": "3H7SXnFmont7uZhx7YF22ouprngFem9wa9HLzkhWxBPu5BaVZVgteWk2WMW1XUnn1wdm6FYQT5Nes5EGtFb7HDzi",
  "key5": "4AQndga6DFofFEMzfxgJBpCyGFZmpAQMNTmpjXfqdJZem1xGmLWnKKb17HHbim7pPJAJWeLXgPQWdTx4CDkrtpt4",
  "key6": "4LyM4Vh99xMLTjt97V7YvnSCHpAPM8vYbMErBChTzEtwqzFVycgfqFTJFx7zwNymgLrout43TDp71PaXzxoWG4Ba",
  "key7": "4P3kUowKpSefi8NyyL3XRhsY8netrJLVLA31AFibQs4RioA8SuHdgfotY4CsrQgAc8xpZ7SzdWSV8eGNeLQ4m9Rr",
  "key8": "4kEM9jJzS6F2SVQMMor129hJJAbbEHm5famyjRGnmxVEpBrkX8WwFmtT4P9s874xbpZbjaaedYvYGn68xxrsdnxk",
  "key9": "2oeUmhUu42wQNdRWUUBrBxDNf4yzZEJaEXxfQdkfKDft2yD7Va4RLLu5gUS7ffom6PHJyLrTM3uPuZZxZwVP5QSL",
  "key10": "4mjRsNf4FvNNjvqSThkzAz4ABThYGa2xmtPtdGzHMP6MtkG5NJy4pfG4MY9r147o1aX4SQyYy7e1nowaayW64JRB",
  "key11": "5xcwVrVgvpsVeC6eY8qgUoxW8byKpdY9FAARaQ86PFJfh794P6rFs9do5UpbMDuLZTMmu5u7bvSZPZ7ufRPKZ1tC",
  "key12": "5tnrctm3CFQbgRogPBMz2DdA9GXvsM2Wu3UWgZjh2KB5ra6yizR9F1YGwkWuq5qHZSQjGj3z97Txv5aurgv5oJV9",
  "key13": "2EJtpbANSTYGFQxFbfz1miRYyntjCZKSpAsdNTSdiAEppGybqQ5NgQauWAGjYfqxHZ6srPrxoY1WLJdxXdQFZ8ou",
  "key14": "2ThrKYkHjgQj5zUFkkuZmYnkF6Ezixdfha7zKKTWU4c3zfDUXD2c4Q9zQTtNCPs1VqUQemeJsyeC4Gn8neS1nq34",
  "key15": "2zaoWY5P6MRkHnwjFMirRJDgwi5wbC3DRPMw4ApCJnSa3WAUgBGWovbgRuKyrhkq2hsV59kiNcPV7RgX6JK6gq31",
  "key16": "4dTDmpZcNCQ3cqVrwP1W82TYUtHDKYuTbAUVXdRKiWD4nxjAWddcRJ1TwgQuKqTncksUyzWeu9fuL5KputBmqSU8",
  "key17": "47BghSqamvH7hLjwAjdBEPJeLNQZiMBBAzCF3rZdpnRMAtXLpEcUqRvqEvPy1e9Z3zsoXmFptFNqU7yHoseVW7pj",
  "key18": "TqaJ6o3MW87esTRhrummEkbAyKRQy9r7zyL6fo99LDjS22NvmGqwhE9iZPm8ZFDquheE7J9uimvpN4pDgFPQUzJ",
  "key19": "4EQY1KrySfgichyHW5kd6n9tNtatsaox8j55o9B2EdnAw483RBD5Rp4Hc2RqxL4ucQ5tJSCHUwrQUMTSp7TYe3MB",
  "key20": "2SgTaE7ZDw9CnAwBr18JwV6zudaxS3P32sZjNYPLLbYW8wrAc6BjD88QXNfdLiQEEipMXxEgjRMBwkTg5APYMxW6",
  "key21": "5xxH5QSEYVVHd69DQkQdgDs8hhtTiKB7yk1eMtVvqFUs7KTGHy8tqtwxdsER7g6SzAmqXveDcqaaqHun3rnhtEK7",
  "key22": "tRWHeZbtH3XHfFx9593M4a8R4HwEPdcCNTjJ9C7xQtaePssamBLFrT4pDBEbNvdLeEvbRtxXxF9jMstMVYDMLqF",
  "key23": "MXjNTBxnHToUCjNFS9gGCLNuMXdKFnMptCDQuUSfUN2CoWZKads94d2ifoXiymKGvVL1hi8RVPjt3Fo2kpr7C3X",
  "key24": "36v7MymSGxb9eatuRyzybGgLEbGAaXuDeDLMZbrjYyp8eBhtnGTtyPSaNs4wTask6Nngn5Zeiw1X5nZFnQg2UnBx",
  "key25": "2dQVe6WfTr4sVMoUA5yVgK2ijU9vf3YK3J4gJaPpaRKjQde3PPUfWzoVHMpQrmCvzRH2tHPMh7jwj6aYmSkEdJNc",
  "key26": "3DX49kY9GbjNJLe7KqWx7KpbWLXZJf5GJcD2jFuZCaknMiViUn3qUMSgSU6VAwQDcdGVnkE1X3aGe4S9zsY9PigA",
  "key27": "3BKdGixLPmvYhGmzjUdG29jrYRxczPG2FZUPMMMTREaWbH2EAdEpVe2YxinftgyH7WnNUcVR1L7CL41efttCt768",
  "key28": "3dzfQUdgYnrLY89RFSWizYVBsgTdmwRNdKhvQQJFD8vPdwPt7K9b6FqNDpkbF2YZkEwkUmkQhTN4c4GewDMFrMTe",
  "key29": "2hLcCz6V53bN66StRPaPEHqSUCaKjPw1NhTZY3g9spFbjyaHwLqgaYhvYiKh8WMWDFKao7vGQMXfgZec9XpkJbLJ",
  "key30": "64rfKNg7eJ2zNLP4DuH5ery9qaB1hnbH1M8AbJKEeG41n77nyrsiumakwEK1VpwVHbJxUaaZwZfkwqDocebGLZkv",
  "key31": "vX1GDKgARYbvWeFgSQkgnadxj1DS3xvSmAqkbMptfeqYDJPFJETHFyE9bv6oig6m8YKywtCXBgAmsz267aqXRCp",
  "key32": "3LdoWreQxZGoPqUm9VzrvR5FJ29kgubAFnjdd1vin2suDhVwSy16wFNL75QXfWso6ySgVjHb8sT4UeriUxi53i1Y",
  "key33": "2i1VX4o8ZGiy1XK9ECcf7GCxTeA6gJAfLZeoRGKKZnho5F4k5KAzaK6gRHMbbeJLrZYehvaNwP2CYAbL2iYQviqE",
  "key34": "SkTgif2G2S6iwk8wkxk9jdDs81BhfwPyrxScfEAXvYJB4741otgWA7BhCkcuAZkTv1DZ2xVs8R2F8h1niz5Rzei",
  "key35": "5wL5p2U6je8Aw37ikuZz9xWpQXXypFRsYRMgHS51YPMto1UZZKWcMTpK5R2HSK2xek5atkTjzwBZno2s7e2DmmAq",
  "key36": "4xmhCBUnqGAo1ZUhUAxfY726fP47chxjXiBV6WndxJA3wTf3wbEiugDrrxdzZrMyWve6fD6tovgEvgAvyS9yCjCr",
  "key37": "48zmzPZ5NAFsdTDNTzubWCArc6VD2tMXwFgzBssh5GF5BW33dmnFAsSF9AoNQPa7fE9bhSt4uJnrdAmyyFETZbZ9",
  "key38": "3Yxqm7yaGcdXEYxqo69R3Scd2bxAgontKbeg8MoH7RzDzeHjVzdSipEAViMCYW5VQiZwciNDS8TGqfL1JkNSzSnQ",
  "key39": "5E75XM9W8rJ9iZPNfWcqk4Mch1UxU9FyquhjxTFbcChXB93nSUtkkTvEZnE8Wprg5wDkA7XUydd74SiRveHTYAz3",
  "key40": "4KedKr5VqgXyz9Sh9aAmZdV8UzV83ea3amXmiQHG5ZgUXbgsfpudBPieuDEwrEYCTQTgh4UFmn5ewEgsrAZ4WCiH",
  "key41": "6sSR6ko27xs1oV1x8qfW8YxdMLMeCwCmKZvD11B3TjMn3myiRpYEfZxyfWg6BGSFbrP2Dj4dvMTQpNavqRUBE1Z",
  "key42": "3F79qbL8XA2xT7Vbyk8T2ZEMW1RvK5DSxEcE1BXaNXeXG8PMQK1cQbei5MFEx5CBQ3iSQEroT7t5NCjfwxeykcaH",
  "key43": "5he141RmmoPwxmjNEQ8u3V6XsKu7SPp1nVBbnVM87PCvHhKirq4FtpmeEk7rNUifdCQ4wSaAJCGrMkbYmoftvQYa",
  "key44": "2DVjiWt4oqVQKE9f55tK5Ercy9QtfVZ6B12p6vahXvDLmvr6ec2yZx6mAGUdqhDnoe3Fu6StFTd3CSfktn5MCQR9",
  "key45": "41ouchwYjYPgzbnEfvSyKfbhVBLLQBFMynwWZkMDfpHKgyC59TA2UoaSGH7nGc5rFqUV6WV9BadQRh6Kvs6yZzBR",
  "key46": "5TyhouAmqaDk3cyViCKYJKw9RqNgztZHeT5fMrKPah95x5KURH818jqzHbxvgpThdL3zaQXLCdcTqZ3sf11sYjvB",
  "key47": "4u5bCaMKjJeBoPoscGkopo2mVhNAQ4EtSEBvs6mbG3yvNuWWZsqLWjGccMYpHz71gbTTtCvophmTPeyQLwYgguwQ",
  "key48": "82LNqmcKX7vm8t2c99oSkMTwMCH63BxkzL2XBPGfePEsEjQtZhuPAWDARXy5WwekgX7PjsT3PKHeHbQ11cqQCDK",
  "key49": "5RDa8ACiMGJHZfWzG2jQ6T1pnu9fU4NEqSvsjWbb4fGUFu2Xcp7vx4gfgmX49Ef9RAUCVaDMoguWtnQ31N9F76Kd"
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
