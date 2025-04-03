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
    "5hNwmZrMvJSm73zDNZULz1P3Fnaj2TWCfsEo4ZEVQc4esVR7fQu3CPi5Y6XkbJe7qbFTS3GN9m1tbkmE4a8KyNjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cQza3paTvWqrrqxwJuy23VDfbF6EF9xa59g3BNzS8rnzet1iUpkGtu1jFGTLpzjwpjo7bagiUS1eLMYBFQfhUFn",
  "key1": "2g3ukkv1uKyXFFn2ZPpaiGBVv6d5sdfyA2W1yLY1fhS29v6aPV2ZotsaMJc9mcQzVieZbRYv7VQ6BRqL5cTTNNQF",
  "key2": "4FTQhQsKfGSXhBrBS9hqQyvBLvZYV7XkZo33CvcNJu9tcndrkrCLSvoa84DzT5v6T5hB7u3FMKWxy6GgrkVN5TTt",
  "key3": "rwkNJL12cKVzCkVeecaH9RD1Rrxw99CpQ3KaiyY54cpEWWLaeuQqfZcVEhg1CWaWAHYpBpfATH34LBzgbXfr8xG",
  "key4": "3Zq639jCjnULp1A1AnLdbaVv2WG93vuDakNRstKDqvHcyBNryWPb9akEEqFgVCsEGS9gVqBPkxhDkB6hzojM958G",
  "key5": "3AZSQrpPmX5Hc81jKCsJBBDRuquvKyKfrN1XG6AbmetJBLLTCBUSye5xTNh669jvd8DmGnnNtZo9HhVCb4BVHBVh",
  "key6": "5Z7RNLRPthVHVBp1YX38tc1DB5H8o4ihTdKmGDsJE1XiruTzN4QR2bjEgETUo7Jq21Lf325GkaKdD1in7MuFvHmH",
  "key7": "5cXwKBUDhFzj6nNUfaM2UJBnePq7SNkeATZ8t1osPFo75ebMsXN3T5wiAsud8WLwTVuEez7TsJRnpGXsRgyLa56F",
  "key8": "4TFhU7CpmZ3JKNX9exEswDmBbap3QAFvarCLG5kabqUVmVsf1h9jWFDALoPgpsTQNUTq7TLiN6os2jRWoa4GySNM",
  "key9": "5A73dPEEYrHBvCoHuwQ7zUJWgGawmCEigeVaqHLakNLnqySeiUzmzypLzFJqBRDB8N7TG6uFTXM4CH78nzCeQRYC",
  "key10": "7APft9nGCzDjZU5kjLZBxY5VL8KNdb7yijAjCHeTxGydKrcYxHnssbQ3pTxX1v9PZYzv7VqkgDz6X8g4jmP4GXU",
  "key11": "2Wr144FB1uqhkaXGDaVwqqYA8PcemzxbtBEBmfLSABeE4MQHpGNb2ksAEhsPGQuaot5FWA7BmkPTLMoL1Xdoyegb",
  "key12": "3bAuCmXGxGQ1xfbU21SY5fo5g7rXQUVN1K9uD9ZHJLDzg9ag6UsJU4RoDbmGaZjRzjUaCSgfyZXb2KLFWGZtiRmX",
  "key13": "5PPmknmLoUQp2mHnaXdTvRFAY5CThDm9a9egCT7uBzFVvXBaczrnytaMgKcrC3Mwfw9qEZqeuW2BourBD8FDst2J",
  "key14": "2wPU62YtnSDdfebcN2BZYEYjGmJMamFNY93BiR5Mh3QpjpaCxjiheRYXEK5pTgoNYyMU7makcyqPCrCwAxmJfTb4",
  "key15": "4uQZH2ryRJjxPQRJv1c3NSrU8n6LQBBszS6UEWU6a4CjbKDHKMwgR2cqbz1sKLoRnM8ddY8vX3CQMwonggxdg531",
  "key16": "2bfkegr27PcZx6DiUFyp31V3YtqV7B2Zx8RHFXwQAfnLE5vc9SuzRf5RqipK8gwGDF4mZbLBS44s8rN7nBPFtjVW",
  "key17": "3oQACYweR4kp2XxHR1srkxn94hUKL53JBPD3G49tUnJJRr7fDL3gQDDs9Wut6PQesfaCSfkKW882x7Mwja1Cw5MW",
  "key18": "3RMh9cF9WPAwaE2we6eih68AKRZBHtBLQdJTUiLwzJLmdAv3SSu3CpfDMZqGgD3eemQ8P3JGbT8ZiYKQq9oziwjf",
  "key19": "48BcRBNMqcgz1p4HRyK14SMWuEhrG5VXun1MDhUKDP2n3ZKB74MMSdciYXpMC39kq9tcpHLtJGWfs5V8ay8GU9h1",
  "key20": "HCpyNWGmvCxZ5nLzoPoJ23qUfKgogBwvkf2w7zW8tzQLSH9spzfs8t97a9MMGQf1T7sg4QxRMyD6YFsrZyYsnVt",
  "key21": "5fvAu6s1Ed111th8EqVa8GMpAKgspN7WupyoQ6XFtG1ojz16FYuRLSVuY7r8hafwgVcpCMqtfao28sgPiq31bCRw",
  "key22": "4BPTDiBNoo6Q6ojEwM5f9FpbHc3aaES7X3KZMTTU3KurABnGvY4U83CwsUgGcS2gpXmTTmakNowJGeecriiyG5qo",
  "key23": "2tSxS1WJTRBgAgQCHymD6CBS4UNezSjtm4bKAaKf1RFg2yDGwi9VUDQn2FuB2NdUdVMo6eRqaTmGh6ZwbH6A7Rht",
  "key24": "52zpZEKnVpsJ4JHSYwxWqH9ZFpF3omxWX4Y62gVWurHx8GkJL66Q4ge9ttw232SdAceRawwPWmCRL8ksovmRaiUs",
  "key25": "62xUoPBfH2p5nVQ9kr9LEKPnKtPtGXkUAh7oan8RPQU8AAyKqhGafvqyeQg7wUEsUeG8a6kt3sK9jjwCurh6afXj",
  "key26": "52qv46qDZ6ec22VZEvW91PthsrSaqZje1VRFcU62G28ZFrzBJZ5bkTJma8DsHLgYkMNHzZN51323Z37EHh6E765J",
  "key27": "4wphUse46QhduMHqy8V9KXwP41qMbCUrq5BdFM44xEPfHVWqvjTxhrJ8PrVMjT8jSawE79ERbiLRRRjQWjpPyVuy",
  "key28": "3DY9c7McbHrYEmTLpL6DF7LyMYMwSisidyeyrofSAmEodq4hFHQUj7CwxM5KFspj4Lye3Xq4TXGS4ZDrs2cy8UKj",
  "key29": "3hkyTqxvouL1kJ2YCenGMxpQbzaz4NFxXfj7aC3nWsDd5gjysF7jtxRrPuNSAdwgmThXej83idze1qVY8yC98ha9",
  "key30": "7fatfWeEvP4ZCRWKrCMazCE4MpfMECSbbQWCe68JBT9y8ow4CJRgVy9LEHY9f2o11QUTWrispANLnCAEXRikQ1f",
  "key31": "5Q2x3ThWjwoPN5M4A9Uvpq5n61xVUREKnGCv5V71cdtcFLetHpi6BaqczfqBsRD3cLWtb2AUQkEiR12BnN9YyH7",
  "key32": "4TQZaFY1CjDhTirmgzend1tjvDMUe8LFJabKfGU3cwNYoP4MV1fZoVCGUsm3eDSjrSBx7S17mrdjB46Uuvv7cvG7",
  "key33": "3u5Ki3SZtP9qP56RUxEKc58dxoBHjZ5S4mWToWpV8HXFG8ibpGA1GqW9qnLBhtPXHmnWCwxuc6x5bf4rty693E9F",
  "key34": "uty4LPoEhpSuYdbdBJqzBEuG9u2Ud2NkbGcH1AmTnQX33uat6MKKQbAKGh8nVBstK6VCXheV1TkPz6mSEjUZtSu",
  "key35": "27kWsuHX1AQShSf17K8VWT9jXNbewMdwVW524ZkQPzEYaB8cxYNhQhcs2RSBvDwEaJuigKYAb3cBVREkv6NEf7bJ",
  "key36": "5Mp9o8jdq1uGGmBbxce6S96s2C4w4T3RUvucA3VrVviRJ7gtwnEHfVTj2cpZz6Fur73uCHpDhgLo6WkJASyCvGiv",
  "key37": "tJ22WrDDS79L99FCMxLYyU1xKQKadNMCYF3kD3WQK98jPBYtARFuMNrSgoYnZ3ioL8DsGPJsrcvuWCiexsTsA7D",
  "key38": "e7Z18XbKZyGAcbMdgU2fZY8JtWZTiLSPojukQjcj1YWScGXPSVQjDbFspH3wmiwk6DGcovZLgiopSa25zt4rnVT",
  "key39": "67Y4DRVsm2YdNP6yKX4BVBhzymUgnZiWgPp1ZUn7q6FZWmaV7pasQjNhAnKzxdSY4wZJNmnywtpVfHw2yzZXV7jz",
  "key40": "4nhTjbYtrm7p1vy7pkw6dzoEEf5KYBhXSox3LA6p8DxDEqd7YbRnXZeZudGERn8P6xysmbn8FZ8SWPdoBWZwojJW",
  "key41": "3ca5yn9a9opwaf9nhvgaBbaxwZmv5UQvrUXtRbtFMzhDcpYP5zxS3nyuTFdZdGTsAsrmW6bm6LaBDbnqFfUiNudo"
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
