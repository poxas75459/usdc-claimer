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
    "4YM11pMUEJDRtXx5nWfkudaK7LcAnjTeiZmP1WMqPUhfdP5DZrVPCYitNVTferAn2vjQDR413G8wsp2LhoaaMDrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NftGsGv5TJWHKd9M4knsULkMXS9JtAa639cRKtGGPGqTQ36QMtdJXKbjm4tjtuDK5RRfz6wfcAvqzcMHCRExT9z",
  "key1": "ZK4ZU9f5eGQ5pXeMzGKwdk4dHrp99zeeJbqBtiyHYHesjSscceptnaCBqCoW2d8m7XZ1HyaqTKw5ZBzvc2hb2eP",
  "key2": "4cB9witP7r1cPFDA3t6rdmWjkdToi8ekoMuL6KhVcfN74HtEnq9cGALdbfUTzAcCeWaiZSYUhQYVJ19RVrnLSoJC",
  "key3": "4JbQBdaHzS2654HyF4Mo3G3k1NBp9xiFXXaYyFMg2uqSaW75uKxf3Z4W53XBbJGC81yqzCaZfvHZZELQxyVBG6rc",
  "key4": "HHNV9gX7gGGR8kG8FwxAAzMwZ9qXGog4wi9bmbDp7WbPRCf3oqBJudSyqbYg8GxrEfs1sfh5t3oAfg7FDiiw9N1",
  "key5": "548mLyfHZiyRG8zguTmXjozP5uKMWrQC74DufpzSpHhigwHDVkBLPjNhprFyUvZKzRpCL8mSsLDShcD9YCfktStQ",
  "key6": "2AJuzb3FC5fuTcsYfq3hwiRJPUazwYxi3xM8zvxRicCgkRnSGKEcRtCLqDKaDLEW8PrCNY9knp9BCKSyy1ijpgMb",
  "key7": "4mq6C6jjZTH26G7pnPEou8WFRDK2p8ezNuVtMEpW5KMEee9ubjDrR4qTiVQYzLfNnbdKfBfMsszdRjv4SSKBVwdt",
  "key8": "5o3VQkMMC3f9XmrA52oVCgAmXRx8WvRM7XAqHoadbKxrfUPa7pRDeZpUfrFYMhQvv7eZUErDYUUyf5hiAaTFJFV1",
  "key9": "2antFaroR8SC3SboyLhDmAst6XMJfM7Es914aACnqDNRqDwhuUBQqXk1nQFpj9RPyLDMR2Nuf8ac5sEvaNU9FstU",
  "key10": "3YXB2LhNMtuftdSjccayr8V24i5pkAYGCrrMMLTTzUggkLH2fPVHbkBDKvRrabDee4CjTVg8E2P4toYpUwPWhtTo",
  "key11": "pgCMN3oiUAJJeR7S7QaTDrhgS1LzgBj3xdJhTD1msStNqGJEeBkPs7VHpDw9e3EG6paThXt3pBfTWrEi7EynhyE",
  "key12": "5tMBQD9hoLysrKMKQnZXdXkagWAUCQyXTmVeQ16dpmZuhwgKMrix2jUk26Q2ApRKz68s55Pk6DoHK1tKFMDv47r1",
  "key13": "UXTcrYMwWdHf9yedSireq3mia7J6XFjYpKy7tp3ddMQQ8a32LoVLMCoLQ8gumJthmMEXeDhz2BtH3Uek57ZcSnH",
  "key14": "2zLDkN5TwNsDNFvtq2VSzSB3S3gCrtKzr6Ca6Ttb4x4kRsZbLEJma3HSWZtC5EU48HbCjCvWwVfPmszaqJA1d1kx",
  "key15": "4fpwKnENrc5G4Qeojpmy3h5PR4vMkXgYHhyH5JYS8Kath5nvHMywmpYiMH96NfqBReF9dh2wDm3zQCARbyUmdDZR",
  "key16": "DNhs7WrdSJCdYVvTkkURaDXgGvohS8uMiWScmoyHoR6QJsyY2hBuHDBgJgwyKu1npZNFiyHNANP9AMZkLNqa8vA",
  "key17": "SN9rECYtpU4FhGQjqcdCvWB9E98mJvnNUZKq9nHjrmqXkWJxUAwumSjddHDPntN4vtUgFknZCT1WKnS8KLbj4AJ",
  "key18": "2ab6jjPDvivv3SWtyr8r5UfGEhp2eg2GxEFGCn3vrSsZwqbx99jcnGWCxsXEdvrqjyRMMvfQZrZkYsfFLtYFvmJh",
  "key19": "3p8NzEcMNSS6mrgeX6PMfGZLgYZYU6oGzc4L1h3L216tMt8b5KgMF1eaf11JWDL6K4QSuFN5rekodscg2Ynyivr4",
  "key20": "3ZLQrrkBTFgBoVKozuQy3hV3gW41qqwcyGNzZS8smXWcYb7mm8d71W2mzGG3cPzBmf6Gu8L2YKBMa6ZY8SucCLgt",
  "key21": "22sGTqFCBs6uDXtqBEMJt7b3A5ShSR4oJRq7NEhDzvmbGsxjQg6Drsj5d1wDSgHEKTbmDFBLHMk9pfrjW47JjsFS",
  "key22": "5k2vk53e5UuewvnFEpeV42PVihg8h6WTpEd8TfXxfnWmiydrBMmogA5hR1rtdNwGetyt728FUJgag23rDSj2Zt4o",
  "key23": "3u7zLQoEyZ3hUPa8gKJxMdagabc3uUG6z4SV8oJBhxjZZY626nT3aA1q39kt1rGCQWW7UmdsCna3p4k6vzogj664",
  "key24": "42oNBdYFYnRBwH4jgJeWSm3yfSuDQggSD2bkvMXt82jgzgxTR6vKuU8DddZQcV9dQwwG5Z8eFzY124BNUKKwfN9Z",
  "key25": "625LJRtDfKP5gDhNjXQQaJF9x2yAdxUUZFi3q9DM4tQM1MiLKYfqcdc6L98LwSLQBrukMDwRN9dEuoSf8aVk1JnC",
  "key26": "rYKf6Ri8XHi6CpQzrBqGRRhohZ5ptrVyUoZ5GTzMDzPWphUt4WLcoGGL43pNQSKjK9gzXZ6UWUEzCdikRUCXyFt",
  "key27": "4tCRXroDaWnuxWXdbbgfofLv8QDqAC5zibgmbC3rzNKZCuUg4tLj25DZvny1Sz6tzFxs9ePzd6DhJ8fLVNX4Dj5",
  "key28": "2BQYC8NnLzyEV9ugGhwHEUmYfZRDpDGAWHUo6ac7dCdDWN4qv3JowNfrNCHcQG8WEsRjEaLZaiepztxp7YF8yx7W",
  "key29": "5bYjmPyQMZh3GhhT5retotnG5ESoGmYz8SwepU5bvtZXJNgoUc4u7NwZLre6C1KeTa6yMsjG44a7vFhSFU5L7wTX",
  "key30": "5HRARBi4Q3snSfPSd9BVp2q3h58EJYXiquhGDH6WHmiLGLgose3a3ZajG9tP9XNSUrJ5vJoeAHFAsT1k4C3e5axA",
  "key31": "4dnh7E4RhTQNyuFXNCa4ufCCCneAE5hwxT9k54PsmjezA1YfdFRxoBGz2DfZKiSKW4gsonFQAZa4FuNiHgHmnqoD",
  "key32": "4C772Nv45kFS4bZgmrmKrjcagvTaeq3cc91dDyDgmP1HKsY3FbEBSHKuwRePW1o2k6At6CUWM2bMFuSGJC3Pq3kj",
  "key33": "4LA8KKVL1UCoPPsMrnw3e6mnBc8wJPtWDvLb15KgM3PCo17sTj5Fp65XNRLAXNdqSiCbt4Ftc4qm41Xc8MCWzo6E",
  "key34": "2ofJe9L8sSEHNT68a4NcUwvfYxjiZ5ZGzptiH6uU7o4eQMwZSwWDyaLsc1gabXAXqKuGWshPYiqHEdqE2fyxnYTs",
  "key35": "2vsntnynjfK3hiUpJcTDYDmdSG4gdURDJ6jRUkNvFNMTZGviKs2cAEAyFaQeh5xWQgUAvSPRRFW6FBGPLt5bqodv",
  "key36": "26asStPy5Z4vSP9GZSPzH1PCPTUUncv7H1nLvHkqfrpvoDEbW1sjX711uU29rYsPVP9242exrWkpxDbKgZUAqHuJ",
  "key37": "ovoSg4ucgpZ3S9YJbuJyLqph3uUs5oURY2VAWJNq5DfNNatP5mAE4YahybrjANtFbaAiQk7c9XBXsJpyruxSzD8",
  "key38": "4m7aGByfo1VybbvoPZMJK1D4QM9JTZZUQH2MVQ3g5JKrph5H6pbHhYi1RbXx72NnDdcVnFeLqgegyQkJD1dts6if",
  "key39": "56xbiP5ebwQ7WdTv7fPCm8a4kj1kD2oqE7nPCzyzkiLE6axqzZBvWnkAH2birjAbzgjsFTxPnKBxi1oxVJU6xiz6",
  "key40": "hqjJMQvT7YjxNjN8ALqd2VwjUor74XLuxzGgT59p78aR5CerNNXpb641TTqzYDa518mEknA8Gj6zxCiVLyPxGcD",
  "key41": "sJ7bv3xN3SmiHXbRt6BS6PGCwRQnoAAPEv7UZvpGbwpTvXH3XBu8yPioA4zu4MPYsEQjYafuRjSaJPb8Zt7xPhe",
  "key42": "3fEM1iubZtxL7CHyrF558hVa1q3ryEGmS63C5T1J24GyMUTv6sTy2Qi9Kigv7kknXwtyTB6XNGbyM6JjgVKvL82t",
  "key43": "T6o1fy4LCbnaoMktuaDtEigKrR1c3vdyPYbY6TSyZybiaCAW21dpEHRuPQ1vC7zQVXTTcMsyLHqKfjYn9BUPFK9",
  "key44": "2c2DF2ibmhhcuGgzwYsNx36aicWfrpa4LroeeCT2zD5Y5dSatQKFeaT8LDcuKmdLTfB5AhBbrNAKpFfgdbPZP6Ub",
  "key45": "GAyfeXsPSZsvPooAiEi1bQnX7BDvEaT9ZQoBTs9oBPiFJcgSbzWFKzbTPfGam3L9WjGYWcJnf2pUmbvJch1j19L",
  "key46": "2bfqxBpKTtRkeM52EFpThfaUSR2JTNZcMjwibZKZTogZDr6sC5sEivfZcXWFo6ags3XcaaG4TyuLKH4LkkxGtfjY",
  "key47": "xn5NJBtoBSy4squt9P1TshFGYWYLWWAHdg2HmhvD2cecA9se8nUaaZd7qttqTrKjfKu6Sr1W6MHFgjAkeBt6o1E"
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
