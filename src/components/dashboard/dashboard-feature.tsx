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
    "51ncmu4xCrPRCxdoh818DYsJCqhVPHiPmproYLPY1ox9iw2KZyKweo8syYYRUWoWfb7JnYWnEmTaFh1B44opHgCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "233UP8yMUBVRn1D2pzvFyZ6tC3XsSy8TTnBSSPYavKkjDeVcrswL4WfWuDCyVVfifabjo4igLuTmc1YPkJnRame7",
  "key1": "4sRsEFkuiTfs2Lsjnjpo6aq5G72dCFnm61kivzYwJrbiQPX8wyoB3yTB12Jae1JhpkNc7vcAmRVTq2KrzfgfP8KQ",
  "key2": "5V9ybV4szZVKiivpnsrA6GRd7YnJ7D8awwgQUXMCzKGMs4ehUhQSTi8fakuRfUbaXFf8hvimTa1rQS3MJ2pUQ5bG",
  "key3": "3bJpvSHPJreTSQemETcWe2FZGv7jp7v9makFDZ9EJnWhgrhKAnEPwMrLBnVafeuNv32gpbd7JhCZr8kZzChh28cK",
  "key4": "3ka3EDTzXAMYRyUxisvroedsZBxPsRTkzvFfoNTEGWo4nee4pBKw2op6tWreHvec1o1KWxhY7w5trYh4Ehi9bWCv",
  "key5": "3HqkAnLnLjgjPnXcjPxrUKngxF9BaNoa5iSY8gTcQfvmTdZbLmHpVKMY2rTJuMBR2nkLRNAvUpi8TreNetvuLq18",
  "key6": "5NmSSzAEbD29Yob2woqzuSCzcWLjDebYvtBmk13Brwd2M6KefxBZif6PUB63VdY7yTaQbm4BZ99d8GzG75DaFhvP",
  "key7": "2mH9RexA9g7vbjqW7aRduVQgqpV5ztc1nHqZ2iJehuprHmzSVV5ymd8XyaKWatht8aY9KUJ8KkbYH9if2BfpZP4D",
  "key8": "3znNpxSXmhBAY9EdmMwSkM6UTtRYGiivrZavbsVudUTvRdU9vGhLtDgNaRNS6sz3UAjn9Sdhhgw4wD97QmW9DXcA",
  "key9": "2G3GjCmDBvkdhPJFZB6AT17VE13TExN5vGW944C3JbJ8sNtbXr4PeVdyKGEUXJi31g3Tgz3X6ALjJ8U3cTQyN7kT",
  "key10": "2obRU2MDnCVpNUapmybKJD55sHkkRPgbjjNAENa2Np39Pe29VtNDYdReLwikSnoNEt73gkQsKiGgquRHxpst6ea8",
  "key11": "32uibu16gKVM8r93bWFfHDeKmTAB4X92cmWVgbtHWNUNh6RhfTJSYM6HmXzY5JfWQodVdT5s69iuupCqyZEB8BEi",
  "key12": "472NF2EdVUcYLRdLkHE1QNiuSwciiKnADKVWLB2wbCyw6VupzkWN7figviaPsenv6EQQVrSBpu8RVcTGoXkDaFmj",
  "key13": "4bPnbTpqqwtza2TxMKqwbnodRqFi4eGi6LPduxkUTJYojxmfi96pqZsEwxN4M5jkGEoppWEftaL6gEPqv39Kanwv",
  "key14": "3xVd1WCqkyzikypxJYhJMfYq2fAdJUkrHNQWER2WkZxyWsJzg1zsomyJ2XxxX2zhUnVNj8NtkFhYyowGmbHTFCrH",
  "key15": "979AQcHqBoaRJCMFfwAjKxvRnU4E1UTgNiyFvcx5o5HAmvykzU5juo1aDUTRXobfGsUefrV6LTzzRHn6g1zFpS2",
  "key16": "66pzjcRGNJV1PXfSFVpQzWe7hf2hj7rMhCg62kqwosCyuQ1gX5TE5ozBxQa84uGUjwqithyCn2f3XDgQsyqjvbSs",
  "key17": "62uJniwg5pSZ4z8A1V4LYn1D2VKdAyuG1abXjHWKD5HCTqkJGiYanhRMLW45ysqoegvR4EmphwLGWMKdQaN55xc4",
  "key18": "5K9Q6kkRRNndAtbqVhs1okUCESwz3V11TxKhSBgekwwm3LLhDU4HXpHnsKSxA4SKCNG1SsMMPHRn3qQydNchgMm1",
  "key19": "5Jd8ohqSkLLjKi1rjtqezEsHhVdvJJhpS95ZN24gJox59X6UwkD3MsMeMnfe52K4XAvmz3okp6nxhYTkvWbYAnDq",
  "key20": "384sMPMSUTVJQtAFaQW5mj9zLMP68wBdMg2twbyMWBqGVt3qqu1e5qmGpKaUEiqiRUrTYQuduAEBEDNUn4cSDHRv",
  "key21": "5aUf1BYZ3n3kgjhgEStbRRSPQq85XXTWW4g17NVcio1P35fNXquT5zicbdE5p4EgMsfvPfd8PHmqqzy7uctkanUr",
  "key22": "31GTnjndp9GuZdH2gDmDP7DcHCcmmhkdWLNW2qMxpJ347hzqb8d4NrbbmhNjNoYb7CNDNBHJCvBxKeGyaPwgxjFi",
  "key23": "45M9SAfB4v5UYqCtwWvEc9V3i5JLi5nRXe1LzzDYvNiKpEr5ghZYskRanZNCW5pwCBgCuC7eyrVRrHSQFz5Kn6Hm",
  "key24": "4fdQAkUmGDk2m67iYoy4gu2cm5KgkuPNbPmnqec1DBLDBh2KJQPMvAh8aqpVRoWGv6pXJT8Lp4JhXQAM9bu2m9Rf",
  "key25": "2hfZimipFJ4gymtffV5hqDaq8mZCV55TBAfR5fWyKrCpYQj6oMRkLyYAG8wBcDA58doPMip1aPbx3JHWSBPifdds",
  "key26": "5253vRXpUrCqzXy8JkX4UtwutwpDXdAMoY9b8YCg15Es6AzTktahqXP7qsBSDQj7ifE5KKrxVMKGXL6bTtxTpyi2",
  "key27": "4ePA9gxb9aW42NpsvGzqCUgySBfgpbXWLGnXgj1UYjW7BFs2Do7mEazJfdzyWA9J1oau9N8v5uXGZ9sNAvhRwapz",
  "key28": "5KZ37LzVRsZQEGuTRtZpDWns3G5aXMcvPKAEogmkQYNcXqWSQ3KWui3QYL2v9cPaXJBMugdwigj1KYjDG9YMjvgm",
  "key29": "6E3x3SGkWiZKRXA9EPhLkaQR62aoTzghz6rfv4kz3mBsbFAFbwhFkFAqZru3ghHrJ9vsgkZzz83nUvWwZfjo8jU",
  "key30": "2guKyku7mqQkH6MDvtMeiV3Ge3jCWZPwvC8g5cHMQvZ4QHkwz1XSTnUoGunXjiWmZ78NtU3HXwgnXM719oUkLwfG",
  "key31": "5jh8JgwDuVz1nVkUi2ztVdzcZmJfbP71JZ1MmxsCYyPTDuin2xz2KKrmWfdpxZY1kHSm48xouLeGKU69cidEUAZE",
  "key32": "5rHT3PeHx1fgdiURZjFg46gExxUCo2yzBbNtSHXyR3UUzvHKSatrTpEtDmXyJxQLrZRGTRaNDk3dWLu9NHyuZqRV",
  "key33": "4uZM5tUjxBgMQzP3eEK8BuNpoMgQutWK96ddkvPbKEornWkvCXhgigcUt896G7zG4U7UCmqLXPVLwk6wH7JctbnH",
  "key34": "5P3rcX8xaWMbtqwnS9BeBMXNo7WHHVMpf9kTMmgoEtA3AxFMFjJtFRpmxzvkUnHE2G9BPKzzz2JqFTcXLo6rFNuv",
  "key35": "3fJQmnYjBoavGKvFy1wjXsBbgPsk3VZAUGec1CLY4zxSb4VwMTBzreYgLKf5qDQ8XYqVabQeokyrdzwus5V3eAG6",
  "key36": "4xfHwMNeeR8BhNYnMgYJdZBHWKjsoEXbFiNs1hpPWCf5Y51o8617sDRgB6DT6uUQcxNkvsaBj3CuRdVMVmemXw7Z",
  "key37": "2GK2brj3B8X31ypouGQY1Zo2W4PfvL6Y6uRFzaeji76aaY7oRfzbNbDQEg7usMbcTmfLuov3pgmmh1wdH4oLruyp",
  "key38": "3v2WEMWetCeKiL7jex27U9nK4pnFUZErgGhQMbSEhYRiA3kmRLjgyAWD7w5Dafnu8R7JJsGFYbacMxCta17earBb",
  "key39": "2RDgwSbUoAEyFKdg4LN2vgGjuSr4sJvEvU2kFNuuioHJwFQd2QhCTKuGHsbYVBNzEdD3FtAmSW7KBc6vgK2iVnnE",
  "key40": "2mfe4XpyUmC7HFNFAZcqgCxEUYemUZATRuhBbafeXPfvPT7p9DFhb8bDEFxzYQaWrrvDSGTkzsryEh87GaEpp2di",
  "key41": "3RVHWLDxfcCtPpe5PjHDy36b4rHv8TjpeRap67DCjkexfkPQJKThb7cBcfG3KGJy3mK9FcsBUoSsYWjc7LmiT6sb"
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
