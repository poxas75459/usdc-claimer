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
    "3uJkKRUitKXXw3mhwfTDdP3cVkFM7Lk2EtPpSwxziEskTEAuwKgxFoASNqcz7wwxdo1ADMqq64VkiCEM6VN89rjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h8UZVugAd2tmJmcr4LGuDsCYdd7UNCHZkYkKb3BeRWGFDssCJ84mMsWFYNtTrgh46G2xfGju7zCbUvMQNT9CE6B",
  "key1": "2E23Pwth8iQxmnhNiVENJyQhdvVHCLLHwaKFukurcUjzxpV9zeyTt8TYnNopTtRLceZdCMiJsWTG4E24Zp8RefpS",
  "key2": "w3vHreCCsEDnCxFseuWbSQT6o1RDEnDTYBqbgqZLrudFyFpZX3n8457ZtJQLupoLouPNhkZdANz77kCdu3aaGKW",
  "key3": "2WZaYFozJFXfukaEQutsTFubrWhRVgm6RQThvRoFbNm3ycz46bQe8i65y6eHmfn5jQCjJrzoTNEk4NNiCAPkoYEz",
  "key4": "2BTH8gwmHUMjh9N5JWDT9w787z9bD5CjXnG779h5WDiF9HeSpPAbGn3Zh1nfQMkJxMqNbQxAv7Np3wJQwDE4Wt9g",
  "key5": "2LdZHu7tkaMFtAqHQtVwWdv17o3jV3zwVrksg8FcE5hGVJW6UP6mxjF8TZ5GnJ6titjPEZ7SX5wBzx3PrQvPfhgq",
  "key6": "5RQ9SHvBw9xyAFXgfefUrWiBp3w9xKgQfa7wCxT44CtE4AhL9V3AsSygb5Z1ax9Xohr9T2VsHEvztV2T2ZV4DWN2",
  "key7": "4C6Bq9onAXR988MuVAZaDDGbwjH9JeotgnpPkXpH6Xsu9tbxT4WoLQATU5uvSioQ4X8myAhbJEmfXteqX7VF5x82",
  "key8": "4q8NRmoQAPkfjY44WLPMGms7uuQiBJUykTLSqV1LNXcquTAgrJNwsSt2ybJXyd5GYJtGjyk2FopSoP8Ph2kdNKMw",
  "key9": "aKdoaSdMqAKcXw8usYmx9WBwmDUJ2bpfsjEvFCSySNsTiX889gAoE6mfXh7zKx4D8RPs3UbMcG8YGBHeeVYBpAz",
  "key10": "2MQYWP1q286UEDFSpsjmDiDp1iA2reTp4xtJMte79iQ1eaG4kXVatmfshH1g4T4YE4xRJKwXjmBifxCm9v64JkcB",
  "key11": "5jiWaMyXZP6Tcg5AM3tvByY3g8BJLDFf7Kc2R72u9quE6XsAzNb1d9m2XfKEeLik7noU3bDpbK5o6JrdJiEuhQxs",
  "key12": "5u9yv1CU8zUJq8CjaV6fVU3TZAnfQUVxA9afPh2MsmH7XHHKnT8WWBKBJbVJ5dAWJXeCfWHqW4fftatqggZCwvm4",
  "key13": "4eMH1suRdLWWLnt6JTvUhb8QYEcS7rQAh4FzHKYR5wP1ay8rBY8GLtgtkN8Q55rAxQ7RBUZ9J3YLMdrqHkXp3iEL",
  "key14": "2Pgzc89VHjNpAjtFiszThAWQ8DfjuYJ3yRSiGVmETRpgMjVK2kocpvDciTRVwCeswmpJoZNXXnVpfVq6oondsuJi",
  "key15": "3Tp8H4jJnVqaRrGtvDDZbPvxX7jQZgGRzhLcsqijCS6xdnCHQqgBGSawx2NgKPg6fBdRqZ8tfXjdyreemP2uV3WX",
  "key16": "rynPPqzRYTvNo1qUvSyt7fwnvwp96wFaHBSEcHJWwqhDJ2qPjsEbRsiHo2v5CEfYRD1FAnMPEQVScRmKCxBrBkB",
  "key17": "2DDrCi82MNJg1XUGyg8WpPDgfdZ3x4LWTrNhJSEBtcVEzNYSUfBtpWGps7HBR9fGD2SmFNSrdZQkefa6dyA9ot3u",
  "key18": "4qY4mPRVUentTrSPUQPspXeAetaHaffw1TM6fr6SmiUAuXgqGeNLN9Y7cSAms7vTize9B4VdWD7rB2BknqzAGdCz",
  "key19": "4nBn3WgHCiqMxnuogMW5vowV7htxqsUpuRtZhShjjvEkgJfFn2z2z3HSMtkYEYfbEgZhf5J3Jw3T7yzSwCYaDjjV",
  "key20": "bCqcERMMW6cqCnfkGTYRwV4ThwbKBhph2JqtxCyGMmJv77kX1qWYPBub2jJmPAiMGAbaBw91GpwvASNJx3gKFY1",
  "key21": "4R4NrBo9bEbzTh9fSHJtMotC4mUsyEUr6p2gET1N6a44PEa52S1PQRcfeegWcYMdXQWq3eh3psHPFayXNPkEyF8B",
  "key22": "39Ms8DTkVitLgXCXoS4taxvJLQbWA5KFsCQsNT5YaW3yKQVVHP7aHvE4Dm9UJnHaeaSmJBRzywXTbGZreTgrEFcM",
  "key23": "2kocd1M7LieoRAZB6rkbeKXjcH3cFtM6Za5QincDNFysLwi5JRShumiQZMnaqasnidBtGN8yxDGVDtvC716TrAt3",
  "key24": "5XpER43oRuCb7gw5ASd6bpYBXiefjXPouqiziM9Rs15kvvzUBumPnrZZNr9ArnQdYhSPaAqWCiGnzrkquon2otWQ",
  "key25": "33C9GFyfP7s2rLqSdb7pkBV3UuA4ZvtTSHfn1o1xt3khnZssJxjXacpzZcy8qiBNrkrJ6eb8R6F62ywseaK27ANX",
  "key26": "5375jW1jgyEAP2VwuEeYvtuYKRL5iLjgjyepkkCu7F64ZskwQ7mqjxEbDBmDo8zrKUta2T7kTNCCwvwGYsNm5rDW",
  "key27": "4U9YHfYDkhYYZrBJtwqVpK2twU7yrasXE7MrF6KMQjGTi28N1TaDgAqcYz7bsGHArs4g1186okVhaM6NCJJvGS6H",
  "key28": "2U7qPHtxEwnqSJigzZ9hkV6Vro92F6FtzH3iq95GumvUXnjRAQBefoTwmYdGUNz9BK4C9yyip49pmvKtBBJMCuV9",
  "key29": "48oWPbMTnYtGy1kX4D4K9cbMWpPjacakqm9QpKY9HjmPuvHmiipqw2uLHqWDNY7dPmEXSv7W7i6iEgWgpm3HdkBm",
  "key30": "4xR8AFdKuSjMiftvpXVgxs18dAFj36jJt8ud39LPJw4UC4U43tZKMZaqWgeXu3Cjm2ii3FrWN8XzY7mKBaiJiQ2Z",
  "key31": "394agttLLRi16CT4QBFaWXKRReQrpiJMrhx873X7mae442KNjGZFmS4jgYbiN7diRvAMAqtcB3Dxygq32dBCc5wF",
  "key32": "3whEJzcqTUZiEAv6PC44mry2r3sGhaiXc9vuCGUQ8ZXu1iMTDLZ5fLiqEcUiZLFC1Syb7GY2S7GTT44xahGVDgta",
  "key33": "2CGGjZKV8zgsnBpEi941KbS2UivY33Pspvb9fqPc1SCHXti6SQfGqUDVyzhZzr2bCvcmVXiZoRe79cBEFip6yvjS",
  "key34": "4TiqjphrX1ngz5RXtcWLcSBwZ7uWbxfvQ1bKVy1dzaEwbTxDzVPgtD632XZBzWbpX3QHAX8CVptzvF4kwRiFKtdV",
  "key35": "5ohfX7uvotKej6irfvUThU5s3UnKrjC5gdqSusbrg7Nc7jo3sBrb6HGYzbHxkPeGSf79HZbvCETXW3nyTELExJCv",
  "key36": "hNFJkbDBgngNQXuxQZyR3ufHp7KBbMbkwdzqzAe7zDzh75QbmaVg56oNAhAbfFT2ZgwaLR6kiA8GXWYjuaV1vJH"
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
