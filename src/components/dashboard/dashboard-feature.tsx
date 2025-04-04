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
    "4pM9taYREynga2RKabPKFvL2wwSnaUeA1JL3WWhKonsxtoW2eMyD5yj62yfXwEX1hWqupvQYDhxYwwJiL57eKRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3am4nR2hCJwvGkUCEm2VJNLr9XbZornBT1CkSfzqCRwJQrEjfXz89PGnw5Z4YCXXGGqHji6cJoeNv8CS4MJ8ak6N",
  "key1": "3DnEQqE377tzvidyQuhy6ti5Z4LPzZ72DKGkKeuqayrgZSYCp6S88YMixZUYdfVT9YumWqUfjRKBoGYevjV9MhBB",
  "key2": "3QJQiJJ9okRxQ2qU8XYRaWVgrUupgUHUK9ACXihUoSNyXZKQ4W2gQawoizyKcmhyEH2UfzVoMmVqHPXZ2La3jptM",
  "key3": "5tGEJZt9XUyVsjcgSWfe7nc2HtpEcAcyZapckm7ztJgivXfeY1JiwxUbeQJRKzya4fYirDt3EQdWHQfsaZVL7syD",
  "key4": "46E5E3YiJXxoYZdhPjb8EifHPULFpYkYCPVCpxi6HurLyR16vustEyxssaF2g7YaaSbXVe4JAZ6vRnjiQbbErqEW",
  "key5": "Sjw6PvjUzBuhq5wjiXSY64sUWKAoJKrvoQro7iqAPKWWhVEgcN3xnpf8paxSVXp3ASbYAhwygUmqnwb3zKpZLhd",
  "key6": "5fPMTegfmHgJtMov32e8uJUMLSMKv8cSL26ziTzFko55nVteDeppwZP5LPBHSWR9cQzF2d3MLFFQWhUruSyXJxGS",
  "key7": "fA412YDkMkDSEFTjUUeKUPcLqGCzLSsLRBEw7coAcocxE4FEiMruCcF761pcb1Pmpkypq6xRR9vvDk4ugEbPQRB",
  "key8": "3Bf8NehZ37e9yruLWEpAS6Z5BmWFYkChzup7SJNE5BDAW1xmcXeSDcKYJq5aTNUPJZ7esuMZw8tLaQu96n5XAS7f",
  "key9": "21tari7o2EUofcv9ER27QATZ2z8Kj4Ka4HDDBnxJ7HuCBuoAwGjrwNvAMwSqkkRQFaJX9Lfj9PHCgVZneGXyNwmz",
  "key10": "22UkqeAGtnjWQUo13gJjUGi3B7fBt76uvMYqDVGaZ7NEx9yQnoc42F2iMwLEGYTmZZigewxJfDJFn79GJ2tbaw6E",
  "key11": "3RTtkXs8rBRVBB1B6fn9cQaxZEfe7oABk9UyuDZ554nTjgkAxoQYiCoh76d1hhrV1SrJdLusKUbeQANB6jGNtg7P",
  "key12": "5B9N9YFTWRbaiwx7ppcCH7gxYDjWKYoKNvNiFPbkC2hAoKihswpLLTd69W9jTJHZcEtnJAbnDLDjsBwC7AZjNRLc",
  "key13": "5uqVQu3tBrCSHmpdmHC3e8WdrfN25EbvB6YPWodwb2XEunkxjvnufZuUHaandTRiZ7MEgY7UjYP4rKGKvTaZxRSk",
  "key14": "3rVQ1yhdecWPmDS7BDLEh36p6MKtaAdSKu1DGbVFZQCeHiYsiJXd8UbTAQFxQTyBjuKQA6mazLekKzmNmAEJLBLe",
  "key15": "3qQ3nTopri476962fUSkrfonFo8WtReBaRLicfi3LjZWHYb2xk2sTwHZbqCNJYz2rJC8YPospQ9t269YZkUT9rMf",
  "key16": "5ApCCDhoyfU6BK3RkSeuVSxkGDqzQnkdo9hjBZ6p59cqsw2mEWfjDSSrfc9kHkUozb5TsQxYxbbfwJ7iLCeNbrvF",
  "key17": "4k2spf898jfMrEcZdP9RencyN8DfESmDjjnV5UsNxXWxmbF1KV7JGc5V6HocsaNe14cDr9F39fkYT2MkRPWgJqsD",
  "key18": "2tL1f2UbZnknDZTct66v5rKtG9ouMJJqeoWfoMty3ishNTtPRKgUs3ProQ8jydEUZWBStXitNNyMNUwfwCaZi1NC",
  "key19": "3Tqb3wAgGjeoFgn66Kuz2rQYZT1VBxRZMG8CX9VM2kaPY1gq5Y7x8WLze9xULwvPQgiPwoxHRoFnvwUyYAUufSsr",
  "key20": "2KH3r8dsuqsrvWcLxXhmbQS34VNWWvir6SsQRS4ZWy8NRcgp6BQjjFjWUBhrVfN5NiMkojFNW1E4YLSD4jTmb3nX",
  "key21": "33rwYD4xXwmeNnZjQ1xGGhKW2midTdQJCnr2sW1b544745Tk6rMcKW2CDAr3bz7tZ2vnd7Tmy3kcADwPuDU6CAcG",
  "key22": "4y7zGCurXNotXKijYmasF9RFzjUsmNfWu1HNsLxw63omNkMXGmTFjJabJJmXXMn1DWeobmmZnaxGvxRYoDJyNh1N",
  "key23": "5M2fwjU7Y4NGY8g3oy5EJweRXhwWz7xgXxiueebPhj3pbnqy2pbsXWupENeC71anYGn4CyKTqwmvax9FSoz2czra",
  "key24": "53Uz14T2Nquzujhf3bpiu3B3t3LLowrTpDRBNkeR8ALMW3Cd1J8CUBoeVBW2XN8B8irbBB4Qf8VUWTibYpfawgam",
  "key25": "3DwKKvSuopvzaSWWtuR6hF8DGrkEi1PgCbz2y8iuMjHzAiCVwGi6bUeVfZiobq4JcgHdfbcaizFfoRytVDK9khED",
  "key26": "4832RujpBYKCNZnwCN3gV2Hsuehh7P5N1ZnUaUMPJwbHCaQHczGtkDU43H7TNzv5874YHLQtmZT9ngGc7spM8C5C",
  "key27": "4wesA3HGSyC6reABriGc5FcxeDuyEr5zQdZvm3ZAyBkCeXvYBGRJUpNjZmzNbY2FWjUE5RD7G95EY1RgE163zqPo",
  "key28": "XF8iZPJVXmPxEtWDrTGUchzPXb5oME5mgzd2uinX2iyM2A9JzfB8CTcy8Uffg2tZimnN8cPUoDSKYdUJaPi4res",
  "key29": "3f5jbLyWzM8jpgTRF6cZYXgJe7qybVVcLG3KNKGPBbrj9NXWLpHSWNays9KHNEB6948zNdz9uwnVLWvLMDPBGHkX",
  "key30": "iFaHSnS5jQVojjwCCZEvWtRbpD4uRRQCHZKULbVi6MeUwoYD8bo7vDAg3RvRQ3zCfu9QHwuLadCF2NCfwqPDGyD",
  "key31": "3ydimakf7zhQytPUWeAAbh7JCfXVcZrk6bxm7pJFYqrmKycPbmGobiRP9wmHs9fguzqDLbUZJRbzGDAiCeR8bHQy",
  "key32": "67KWEY7C3qqB9nESAwBUvHHJvmPSqNsMDQzrhgLRFgU6GJ12Rbzh9Lic2AfZCfWQK4pnhPFkJ5GU7eJoSidixT6A",
  "key33": "5xpT7nabZ4qShXKZYAJw2ginKQwGG8oCvrbUjLo7unFAqb2qoJscZu1uU9FpbXQuuUBohkae63zWe4wik6oquLUD",
  "key34": "3uLZsAYjoJW5a98DbRMJLLnoiWv2MswhnkAL1RpbHXX6yWR1XEgt3T4391bwyuB4fiaEceLwxu8iAXyxsoxm9ta5",
  "key35": "REahoESQj8uoRNqYXqS2fT6pCheDFTJBjYoBgySTuBP6xPEQQmDtWGgEU1ptbfNyiaPMnUDB2cuQKUsAiZ7wKiM",
  "key36": "3EY6X8C6NhA42V6FZhoD76Asb1PXZp8HWm6Rcywc6JFwap4StHQAZUk4wRo3KNGB2i4JRJnQ4bhqYJ9RU6kykL1D"
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
