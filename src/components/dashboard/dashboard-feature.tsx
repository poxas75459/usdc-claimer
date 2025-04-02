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
    "63NXZc7WTDa4YBdrn3ketYEiNFeEGw516sQ97jtWHQAxx1MhKqgahh45PJupH4dNZSaNq8T64JWmHu3z6J3nNe8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cK9DrPY5urbutdpg52BQDX83depUK6dU1eJqSj7onjMu6xj1r7rRia5kUmAeA9qgQectGyncnRLfmxoKQvbk39j",
  "key1": "3SiAKMpkgLwRNJRoTFLMB8VVgzDmjtRrBtEiwZELgGuXqEdz7TzJJMkKLbCt8YoP7sL1rwLbn1HGXLRwx7yCN8h6",
  "key2": "5TiuGGn3AzmeZENu4k3uwftZbNqLXgSALwmU7GQGs3zJ35MzTHDWLabkwcTUoEuFKjitFZXMQERJnYYtqxtGSFrJ",
  "key3": "3fdX8eubEowWyUzvzNg4Kkd3fn8vD85AJxXa4SSyyf3UhKw5pmeE3uELXf6fcMCgEYTBXpgY2jZoFsduGL1xJHxK",
  "key4": "QZQ94wWVGJZp7YzupNDFk4McVnNqYvAAV2Mx3junzCxCoq4Ckcwf2kgQoPzNR7yNRgyvNsCgmMDhtsoDNKEKTPb",
  "key5": "5JnLJuSFTwSZM7FvMpwQ11RFQPjo3SDxqKtC3hAa9d5qg2W7ja6TbudSjZ1sCCTKd11K8dGTmwe3wFmugXt8yhHQ",
  "key6": "5gP2Npbi1BBvN33dDAEczAX7edQciGwQgwGxBg7s1NRBp7Th1PNKEicMDtmSUh6a96sgDS4etSNCbbvdiC524hnU",
  "key7": "mQNRsgJNp4pfn3cSFcMPJX4TJjDNzredA3H1mfPE19W3CbyzYGyvLfa8TbBZczdsET17EZGWzF1oUoMz8HeXJE7",
  "key8": "2EASDrjWipjWjVG35kKVuRNTZwU9C6PometBWxscMdNUEutXTYNqZ7HY98qm1cztixDPvTGtakR6aUXLk8b2479p",
  "key9": "5QBah2XnnAqXuTzAG9SN5gxzR7FXJgb6LMd9DbpWhzPhJSXM3Fmwz4zv9mc4GQjWKtT7SxqQ8yR4YJcfc7AqaGQy",
  "key10": "4JmPzg5skiL79itcA3njG1RgmH2kBgdL7CGwQz2RSrXv6MZvCiUELrV4wtGQWrkbh9nhF4HvqLQqEUfAnwytHZhi",
  "key11": "41XaaZ2qeSZvex6autfmuSjjvWPeNZgNMQKxh7rNPXot61dHqZzhKCzDZeBL4WwNrt4AhF1fMBsZZoTmaSHFbxp4",
  "key12": "3CKwTtcTqjBuffW6NE9Cvew99Yq5TDckddhx9qPebaa3ZTEjNH961U8ZNmJ8eshqwGUSMjgkjCusidBa1Ndfbcgs",
  "key13": "5XPBvm9YcgdCsyU9upB7DvvMj22EcG6sz5B7zr4fXebGV7rcoJHerbERerXgkGNVqxTG7Em15xuGe7Z3VVFJpJrR",
  "key14": "2g4XNUsYsJih78yNa9QiumEGSeQCVsMgSx1oZbFL9Xij7prSw6sqC7Lv6ZDyVj1LU337RruHD27ZfEjT3bY2uqjD",
  "key15": "66UJGBBrufU5tVSNbuBshHD1AXjjVdm4eRFKyX5eJTbQmnMEt7STUpWiJ5xXdahXc3L1G6bcFdY4UCKDDrXRNZmg",
  "key16": "2WPfb6G9eqJQSWNV2Zg568ptAiWqR6o2qgbxMuty7ZsbtKCeF6tkjuR2XpMwHbTZbvk22z14SJ9ddWGewgiRS3XE",
  "key17": "4xqHsYej8XJnbga4PQhyFNbkHLEzHigV8k8sx6LS7RpRurYyBAAmVyVtPxrAnh6p9eMk1RFbgQ6C4MiFEwmkS8Fx",
  "key18": "4shoKWAZQsWMUyfXwyurdcB7p17fPFCNs6VpMTToTXm2yxdGH5kSQ9GcWfX3rUUEcmRGgVNVzbGckMXQZ4MKCekx",
  "key19": "41GMTfPGgyujEEPjym1ySSxhLoEfWELDmRjSHUDgzfQiJDpMCAyC4eGBihUHtBDEKVG3EqoaYzfwgPjYvzimkBis",
  "key20": "3EPDXmHYaa1qDLLghveQDvNVCqU2nZQCXTM9ntGH6zLUAZrGXVrReZyCxdXpEsrEpX9KTmB6JGwn7jYXWFZAGZsB",
  "key21": "uSZqTgrEkF5UZd6wg3vzqqyLr6nCTZKna73VkDi2v6UH8KRKX4Y2VhfNgGDDHYwHPC759Wt1Dtbn9AddcZUGNgT",
  "key22": "3fNJ98S3fLyvAdmkKqikmrXhrXBXfL9WQheQuTaPnt6zKWyhqcSmUpfr9WkwH2eSpx4sAZ3ijC4qiigky33CNVJN",
  "key23": "59BuSL32VqNjzTfW9Ebit5V2QJCvwHR2qfTXPXTQr4v1q6Z5JRH39AVoFStcBLxuybpf9mwmnweniX7x2ZeJHmnn",
  "key24": "3PppnydJiEc8gJCzHEJd8odwzjNpfVbk2bT2cS23FAruGxUcErT7gQBrsTSJ8usSu1ng8xKF7HsSCqc61U1MfUjP",
  "key25": "3f8ndYCjNnKjs3PBAonMf9uGKWSx3PZZsuFX92UJYyUhnY13yanscnJqPAWBzhhsFKoNBwsKULs5dKwz3StetUkU",
  "key26": "2oVGMQpo1nuYUVefz2Ja6iY3hBjcxEVdMg5VSc3kURf19aiW3VMLegPnTuRXL8DMEuXsVY7Q3HKrKDt5wa14VDw",
  "key27": "5hyk9GjJ6PEReX8zHCKsf5T4GfgULYd5QEDz4Kg1o8y5wuDYaLFXvTFwSeScWUQWMk53rhEYVWnLCERTaAPTgzNh",
  "key28": "24YimBN5fXyxqapszJzwfFd6R4wZApKPxbjFjcRBXdKRcxaQzccP16K9N2mGyDgJRsx45BPWgSBPoCVqfMHZVNP4",
  "key29": "2JS4pzjYP75SVxnsX6qHVTLwLEmKRxbh4cCTPmJtxqf9oGUSg8jLScwE48jfCed2mbzaDzha73ur5wj6WwPcVp6e",
  "key30": "5s99Anrh5VZNCUK9tcWaL3SovRxAaHCEU9uCHyugLjPrJH4KS58XbP7YSCDwHf7YwN6eBKr2cn9z77FWDNbS2jEw",
  "key31": "4frm4AQUgo2sEhtBtRtwPAcuYoKSuffJpv9cgMiN6rDPiGJxZHeC7EYLR9RAdse5ozFikFieoPGJPCe4C8ZNd8tM",
  "key32": "41KZnTHA36pMkw1PeV5zpxZYQ6mHH699cPm9R9k4w46X6f9RC4wnaepWfJ63dLPBNii1DP5Z5HgdMi6LY2v8BaWY"
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
