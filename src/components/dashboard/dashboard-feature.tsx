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
    "atXs1XmZcYErSHTpAEsMVoJ7RFJVxLLg3aaBaBp8fssyT6NwbEq43zVo4xMZaymnNgGhtZXcpKT9H33dN7TpwyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36yi6e7bgbxHzmESv9rmZHawamGTdPvYVSou2okTPL742YMZoKdbwvWcL8azJi1YHraDgwiXfQE6SUPGYmAgcTGj",
  "key1": "2oiuJWVn3Vgwxy32nHRnKQ7C2TFiCMfMxnid9M5kBUeiHgZceyFogFxH6i1BaC7tZAdMDHaNEeNhm2Ri32B3cNkm",
  "key2": "5tYvAJUYKDj1Ukc5CqK4mFuvdc8H48CXpB7C8ZaNDLUJmghx84Dn1QpGUpVQuKUZ2vLj7EAA5N5xiyeGwfeUkcDS",
  "key3": "T5tZnZ7YYqidN6Bwo3xtzPDSYaWS5kYeqTtcvQpd5xfonEh3j4cy8KCwUm2CkyMcjrgo4iJALuwtsZ71RhBjgAA",
  "key4": "4Ppbk6YqpSLjttEULNJrz8iVShs26fCiWxA4NAgZg7G3vxvv1FVBXexNgiMvUrL1Rs1yKmxJ6pYJhpPEaoz4yGNV",
  "key5": "5hC7CVFHhd5JLdAUi6MSJVgdEkBnmSnpaMRp8wo8SRkLPFzXFdkJgUaz6Q522uK9iYgqXrRXhWmAVPcKy8kB9LBu",
  "key6": "5wJm3tW2tDvqrEuarxWZxWyd9QuyFmyCnwGoEL4hHnMn5L5YnfoJxH89JzMaaQjFxUZk2yWu1Lt5ii7Pk4tpthYr",
  "key7": "5rY9Z4XEzf27Qsf8DVXRnEXCQTbGhPsriKTKkmAqUL73JcFTYhPuB2R6Q1XsYCRuK8ymFpS3YsPNFc9KVeo88Sh",
  "key8": "3iXK2M9hqD7SJkETTznN3Q3DADp5WmjMh4eBZaGhhodH1T6z1js3G1pZ5wRKLeHgFth7CzRqvMxoviEx2YT9vSm2",
  "key9": "3TWuH5u7rh5GpMPn7stCtURJLfcZ5FAvLyodZqSWaeCk6dXLkKeYNyTAc7iaiY6WN9JuV9UcHQd3AmMUncyvWJNr",
  "key10": "5tejNrphJVbyTU1vJkow955n42FuyaDDjEsbcVHRZghe7G74r9VhcjKiAKWDXjcPBf4MRdY45UrEPpEyMcfh287L",
  "key11": "2pZ1SzmDRgS1cRPB8qWk4CPYfJ2T5FJyKnnpoAER6KkkJxSwfciRPNAGaQoqmXnM4ZU4DUPmVRXmghWaKzsScJy3",
  "key12": "39ctq4aiWHcAazSe4K5AkgX6oaf6eASDG8Fb4WQaSJ8DpLvGpW3YAoHWeKkWNiJHckj5ibgXQ321aYJ2ggHNxxB2",
  "key13": "3jnRLAvPUtFzKi5CqahYwYpjyt4dYF9EtZryQHnY56gpQadZpsdiuBnVz4oyRJgyBNfLNfYHWHAm5pQkCFDRgvPc",
  "key14": "5qTmbGdbCuE9f2hEbGesmQDEo49gewVLBqKsCftis3LAnWymMG4qRh9JMoahNVyBzVfiCD15YQJkDrrXpy1MiTnH",
  "key15": "5P4AWMtUJWsBMUTPcyy6iwYutsGRef5tQUiDnjSVRGF5NwPjY9tFZmGRQMigt7hSWjuDwJK8aNfbpCAGdaDPmWA5",
  "key16": "45hiXAPFChQgxHizjhwZVsHxwvabURqMpKPZxcT2iZTiBx7bhPmknBRMFs3RyKYXmqkqq3P7fXqwtJpSGwtcihkP",
  "key17": "5JnXTE2B8NgffEo6xRihzavdFS6eS39pWVapCCzoddRUGcUWRq4Nv6kxDicZQbFHaupMkoie6RpuR5Ag1z3A7Cqf",
  "key18": "3dcqzpKSr9kdUfcMhspBGgmeSS5PB46mstfjcHmWsh8Lv1j37mB9sc6E6A6MB2hftTuZX7hfMXmhRJsL8rJXs5je",
  "key19": "37pWbmKcVYeUaKAwsvUU59sJyGdYBKVrMdRXNrWkcYpaGfVjVp31ZRwjsfqAnrFExmbF8w8WiguVBhgs4vVEgUvH",
  "key20": "2zhr76q1HLwd4e9viNW3xA8UkwqUpyhuYbXiT6HXuiKVfkYhcHV1FPsDwqcko81xzfv3B4VMmJWfvZkN5xgcxmEA",
  "key21": "4V12GCAEy1jpG8GRaE2efeM63XzvBUyVimtWhqeXQmGL9QL5W7WsmXAE6ZWiUYZF3rDt24Yv7YSK8nJWjcD8cmxz",
  "key22": "7eT7KQVLT8jRMNn8EMTNRnqM8C1ocZRcY9dZ5mXW3nXpLpQ1jxeE9tix53NhVDGaLVoGzAjy7jgVGQgb6o6QptM",
  "key23": "2twyftRkXgP9Szwmp3pRHdxAnRNHHA4PAUnMh7nLQ9VnhpLYi5KSe2bM39PiVaFnxbVbovFhB3NXbLoEgKG3aDbr",
  "key24": "4HnMHAefFRSCu8VzVgPwtmomyTJQxNMHebtJf7Mc1UWZtf3MeqQnHth8TVDUPemPHZ2J57VY16KUiwNPA15FZ1D7",
  "key25": "43wUhV3PRHABSrf6zGGm2E89MwJA94a8n9fV4CkZbWQQYe362pqUiu3s1TmyUKfKSc8pVZZeJKUZRCJaGXBChtwf",
  "key26": "47mKFxw9JRzjqEUbWcET3U22mQppM8XQFEiE995VbpLiX8UQWqbj4yJxs5yYS81K2uJJkZA7wLJwmYJdJj6wKJ7K",
  "key27": "51ixC26eyYttbpAfamSMvrXGrf2LmWXpHdVqRPcRPywWtvHnxdBpZpYjUTXo6rVxiHAkmjPQCMRnX6mwuvQCRcSb",
  "key28": "3E9dEd5CxzcrRvUAduR7ZWDeaW7g9gkg63pQZBmcZCXWuzKRwJhdWdxhgJVNSxKsgNU2K5AyZDr2ii1mi9arEh8Z",
  "key29": "2ubWKbxjcYhEmd92xKdQamRkFf9ytyJMD5hCUxef646SeuP8XinaRw2dHe2t8RL7f2G5pUeLU6yihDkkKugMRE6q",
  "key30": "4rUmae79ixgmXyQMFmybThAERkG7fGpywbYcEwA5Hrnremcd6sdAKrE8B7DiH78XjbTv9LzoRDciT9v53qVbehTT",
  "key31": "3D76ugSkg9J2LVMHC6x5e9igJSuK5KPtcoyXv8YhgcHadjj4JVUHrcvfNKs5X8JdRhQBxxpMTo8m2ZyWUhsqjdkf",
  "key32": "4cgMVvpmV3ZnCZHez8jjECC4SstWxXeR26i8KrqLRHu2PLy5rsg1zfMK7pTbJYSX7P2WNevhCsp78x5bS4pyHKGJ",
  "key33": "38t27waY8knDUj2fDpNQjfwHebc8aNZ6mN5SqQigd9mmSE6aEn7o6982zA9JfbKzHV9i55GWEE6fkpCpoRJZ8Tm3",
  "key34": "38vcJRanWhAbh6SXA45viaK3TsAMC6zgfLUMvN64taW41LrwttQMZcCSbQXXNZr6X6eLeA8ikV4eV56NPhrWdNgE",
  "key35": "2jrCcYTTgbdbCWU4Yc7fzZY8HaNBSYzh3gSz8YUgcbpaGoVN2kXWHcmPZSyzEBy9s46R1JsmaBxPZTsMSd6yrppR",
  "key36": "3hwFjmYqMgssMqg3LwgZD7zXshfVjvpgaY6TP3uCWtXDmSAsDzdVokzd6LPdq4rXffpQiagtQ5b1NyfikMNrZYHp",
  "key37": "672h7bjBfJFCTFFQtFgsKYeGG9uZrDQTDqH2gNSQ61hnRD1U83nxxm7aCWEA5itxCmH3hAqE9qU8vhb3voiEwTBN",
  "key38": "3z4YTgo2rtkmw4ULzmHvHjj9Y3tbXfbf7NtKTzkogCttozQsN9v1rbdnkXTvkpXJaJym12VU4se9D4NZaf5fg6R",
  "key39": "BCcpPKaMzSf1z69wwnU3KVaNGiT7Ey3qAfNf978YwNEHoRGi7aj8pwNHQsEYd2Pm4b1Gq64VtF9ka6c1BMcpHEi"
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
