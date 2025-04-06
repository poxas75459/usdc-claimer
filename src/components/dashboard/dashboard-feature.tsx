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
    "4bmhrkRbCUZbGCJGdzVUZ7pLGAN8r5SwsQci9jwE4gpdwYLZKdb2ZRKkMhDBqPLrZdLqiu25XGuuS4nrCjmiiSXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a9CcgYqTMHSvs1BSnUpf2MwtFMTm7Ar7AHjoGnyqx9NDxBXj1L9eNkJ7zr9mumB1z9cGLoPUNLLZeWMuYsAE9cg",
  "key1": "3AUUhVQNQqK91H1JhrJkaq1reWMwrQn58bC8QXnqwPjncGroKVEFdbpMn8YR1AWvLJXigvyk6f6PsQZuiWh8NJdC",
  "key2": "42dvFW5tsmce2rbQCWZHFEoFuk7sXerYqGBke42rLd3ALNY2rTTxifS8weun6LU9i6j4JsHyfC49XEJFVyiNYxVC",
  "key3": "4u4czd1aEcWoQnkro5HKqusmt2JcAjndBR3f6u3hAhDMREReVKLNX72wKMECs61S6bTCrfMh4NFjsKeMrpHvD9G4",
  "key4": "Bko5AmH98Stx9z5LC7DL3mm4TFqHKosMdnvAyqhyJbNRtZBfcYQCAPFNrp9JPK6EDzexooRABasU2N5ZJxuxMaH",
  "key5": "86M24HEKB4wJLFH5ihSxsufVeTXuJJqVS33zNeW2APUVV6o8yeFiw1gQNnHLCTEutM2vgnT1Yf1d2N1Zf1NLjLS",
  "key6": "3mCPZnNPBWosx9xPzuEgLEEjoxG5ZEELYWcgeZYHN3C3BFwu75sn91mxeybRj6Mtea9MCGC2mQhRCPpa4QziwUcL",
  "key7": "2p6tGK775efNUppcDz8gj91x3DVP39rn9fXkURZcHaFK3aoiaJA56TYytzRNehb8VmkR5Cfqf89nnaeRyeN3VYXt",
  "key8": "3xNg81LT2iX94nwaSSDHuAkWoDqBMXDVV7YwrB4KMeLsLSeYZbMk1rnTpPHfXnYJawTDvegrdSa27JqeyXM9cb3Y",
  "key9": "3n1PsMWJF2fr2YB9bTMtMdUuqxTgzhAswmQ9mQpYuftheSLcmYzaueFfBLGinHxNX265YgmCRLCZ1xFbcDjEWQcy",
  "key10": "64yp97xX8xwVxcNncRYHxgVHEpN3RmyUhwAamEmaGTxC7ipBFEYNP3VhiZdNFHPjo4awxDXGhziRuzn1rQ4aHHQg",
  "key11": "58LtnYDEqoy8dGY9vmktcjb6CmLfiR1ZNZfnmej99RDrjGokkSgdavDx6NXrMohwQaSi5D7uPkrNVtnh72BpgkHg",
  "key12": "4xXYP2KHEZc7VmdrqKyNdJYmRmLq4xp7C2aXw9FU6WbdJRLxpkoDVobU6MxvfKiuBVVxzBcTEdqn4XHSFPwgwPq6",
  "key13": "2Ayx74QZFs5y6vko2p7RMxozTPDMgKBKCjpLW9H6bbTFEMqbnaY8xgACWfa1KHVdn5h8GyhywnB5oes78gT2ow2u",
  "key14": "3s6TX3TMq3cz5xJ5R65i2ae8xR9CPqsZm9gGC2NL45P5uzZK9uCd9hbWuncBoZ2pw9uxQbEPHJmDDJP2vzwtcuWF",
  "key15": "3TkUYWXMChBcapuvc8xEwUrHDUk92NNYXLw7CohbFE96wmyez5KKccHaqq35shymxZBqvzoZpAW9RHEo8w969YuB",
  "key16": "2YyhsxJ8AGgutKN1FMVYFLhq8xaXbLLxmLeozCvYZXGwnrYKJm8m48sMf2ggCtVbPAJVpHNhv2BZuS6hWvnMpngk",
  "key17": "62HJWsw46VetH38hL6daQnybHv5N3VTYkyYGaztg8RzuHiQXawaYwp2R6U3nB83zxK3kC4vV8VPeHNUhfgfGBrkn",
  "key18": "2Tqpn1gwexxVX5LKHUGZHyRbT5UYfZzzwHivaSpoL6ERRH3FNyJhbKYhtxZrnNvjYwc8baJ6ZKVzQSirfXMHapCP",
  "key19": "5eyEUvsG2NeeUZ5U84jFxrbpfuybYk4DGeUZEdc25AAiZGMrT9xw4PGqop8bSZXWa3HzpU8ssKqhgPoap6WpQRck",
  "key20": "2H2PNiCXnjaCJMfEqPQXiGke8adfTWmhBu2HxNC9vAQTnU86wBqGm2Dz8eECr8RQFWSxr6S7FGA3zxUNyWkn1raJ",
  "key21": "5RXy1LMxZbMPzQbXp9ZtztSGwLSmYrJEMDizjhe2SrpMwvMeMds1ynFa88iaURTuA6aELdCmQXcKwjqV5tSbvyjS",
  "key22": "4fhsSM1BcAf8EWJF5f25L6LmR7dJU2Uec4422GXaJk5sSgeoJsEmxnCBamo5hKYZnxZph4Dc3VTvUyC4VoYSmc65",
  "key23": "2yNEiNuKd9WuRt7XAZs6NCeFhgdcngzXqB1XqP13QgQyWZFvBbGvyZ72JQnUKH4nTGab8417jnWKbw3XivgmKmG9",
  "key24": "46zJRM8XxPJZ521BsodnMBSKuHQEoN8Sgto96YZHBcFtYDziCoS1TLCMxfkqT9NhswA5QkEPTaqPKa5AA6ysh1xX",
  "key25": "3LWjgR5QCobrbE7bCgxAnQ7iVMnge4ANP15Qqcs51N7d2UH9WkpznCiih1zJjmsVkUXxNE2AW8diMp8CoKsD7mES",
  "key26": "22RfWeuPJnXQcxnUVXFSLbUF9ykmpbHP3km9tcGsWN6vCxTJhDXQaZPiXZDiy684zYyfuXJwe5XSr9zpBfhqJxDL",
  "key27": "3M8bQNfz2rMCEogstEsPG8D48M8Tov94sqdBTiJeeZAcgV1tgFZ4HrdwP3gz3Vbfc1su6dR9fntqyoDk14SsZG3F",
  "key28": "3twRDJ92kfVZs5LNKSFu9yUFLGDfYfaxJLyNKYG6a8bW6uJq7ANvwez3N1WrgAjkb7ratY5ofNYbXvKEfbqoKdZh",
  "key29": "5oZ56NqD6soE1JBrSskSXiYFJEtQ65fRvZq6MRXmyDStiLxJDztc26jGcZc7hcKA7NQQvo4kqAoPq2mmBK8q8uU2",
  "key30": "FKsgZjbHsmKaF8Jw5CDxuLgYgX6iJir7qTKeStSmVnqZrV7r2qwE8sJREpdnESLCDQjPahRKCSUxiv3qHU3MtSd",
  "key31": "5t88EUB7pFNRCTLQvCDFL3QGGZDH21RNttrxb1NXs8syNZBSqkJskVz39GGTrs4d6Yigotq5do4tTfbJVHRYHaDS",
  "key32": "5o8148Wy3PRBNzLcP522GKWzbaKhzx5z9Yc7eUZdoCiZWRwrC3pvm3yo36a9Ay84LxpLnFKW1buZF87iCpgsnbXi",
  "key33": "MgB8aqTEfA5RUafF4u79isxmFQSUJPaABaHpRQUMaz3Y8HoLbuJdFN5kFTg5YAd7sTLQFNE4fo7q27r16GYH5fS",
  "key34": "2nW3ZWzBctMEia1ck65P1Pr5ds7oHzGxLisjbDi9BecU3Bg8n44iRZHQrHQK9oo3Hx7mUH4kAKi6kSSJ6SoQdDP3",
  "key35": "ffyjvHXH73eKsE4Jyx8BTH3YKJ1XuZUexuihsL83pG8HJyxSck3GwWWdpdy1PiKeZypF4zmAN9EkPFq8VvXbQ7v",
  "key36": "4bxKdua5W4TipP6QexWXEnCat2E9GjBK8DR4oSiskQe7nf1DXt4mGkmo816W2hLGUHaGMHB1wWy2RTTiUwLbeJ8e"
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
