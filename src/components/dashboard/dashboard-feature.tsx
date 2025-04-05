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
    "5UeRSiUKkCuQDpG8wvKNoxtBpqxmJVub99SkAPJSTyLsRfq9YiAuNoby7nnRVXxkat8mRJRrBjLtYPtwhbVD49Bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BXmSVsSxirtUmZVESeUHKNsFMjt9KCH2n5npqPnbVbJfxCBL339HjCFC5LujGAoKayzZcnhU9BysXSJgFTZTScF",
  "key1": "4aSR1RBHRBmk4wD5rN8Wu7ahof2wP6XZ7c7sSVR88y96mjEtar5W6xrnsdC3yFQXWVBACw5KaQXvgeLeYB5kGXQU",
  "key2": "2HZtKhtUFhrsoDPEoAHhavvryPGDqU6L9Y6BfTZpgavizPUUtWzsVHkaSDmSUj82jBVQzjQs8S1aUfuUTvihpmmC",
  "key3": "38eauHwhhvYhSJoQL4jA9342JBoHxjEZc9L9FfS4roJrHUDfSUrdPfJQr1ZVuRmAgYNreTaFBezzy8WAgArH2Aq3",
  "key4": "32dyuQHjtjwZx4wonLJtKAeGXPFSd6fzTS2vKFSbdx1aJsH9scfDhNg78W86Z1HCgCN7TxLLXDUsFVHFE37BpnCS",
  "key5": "2zHw1t7YjmHaF6fn3M6FXJFsnsHcvGTqVfEn8tHYdC3NywB1W2d5CHnRmgWjBWqRSBCeSxFthQVhoT1ApWrJtHdz",
  "key6": "H3wBiTTtwED3zFB44tAzoPRrHLUPwTtSL1zSGvzBjPLUrMxc8arbP7bs9dQRxK2eXC4DZnFxPv4K7THPBCCGgwn",
  "key7": "Ei8Yxj3h1pbAKdtAsG6tqK3gqiVZCwG47AancwAdBenQthyF7MkUkhqthQ1fhho8tezYtEapGsVzZraYkTdzFiB",
  "key8": "2UyDkh9WrTcGH5UYvsH6oAkCPm4nUk9PKkJpzrgb28PE5tGCjZRBRZTZeJNo4bbkeGtDcZWGRv8R7m9HHYxk9zUP",
  "key9": "4QNKg82dbsYegtM4n7aFyxEonyUggVDPVP79UWJwTWn7iE61sQ3UF3sNr22kEmnmb5GNRcAVWk3rf99inrq517xN",
  "key10": "2aFHF92H3bRb4rdt4hXcF9RCT2TLFMttiLtNkWEtqSXwa6NxpchSY3k2MAAHcYM2bVzhUd5i45RQee2VgvRhCJk3",
  "key11": "4AWVWjnKrmQUUCT8EqZEKMWY6JR3jn1eM4cZYwxcu3PP3fxCPkwa5SsLMiaDJbg2jdviuK6biN3qz7RQrX5PSpSb",
  "key12": "3Z1xbyH9GZhqVMqsJ1KSeaRzBMgkSKCP43BR5htvffikZpN2QSPzsGG9fzAu1vrAgYVCvNHF7UDm6qkts4VR1D4A",
  "key13": "4D2CV9oWLmhpLHQpXsMPtYP1sYw2SUnHxGkWjfFw3kx1bWsFi5BTzbvb7bt4AWR45jNn9LXqHE8ajL3njtbfcuvX",
  "key14": "4cE5mUAxCPBRFJe8NASQfbFhvADecGxvxQe6fGqg9BoMcpNpQY96WjyaCEou9ZC1Aj9w2xj7vPiTeb92paiytcUV",
  "key15": "59Jd6XxE6skCexwSxzxF3zi7dQ5u8ZM6CMTVCZFyhRpdzsXPdRfW9JpBgvG8sEtzgnbG19y5FCYYAcY6Fd5mEzZL",
  "key16": "3uKXAJ8QPQnxmtCqtDej73U8FwfkXFZ5xfruQeTAEhNT3CdaTv2ctbqFqjknux5g5HbyWC7mfgGvwHq65bVjw7Me",
  "key17": "4BQc6potfGKH17NNY2dcVGZU3BZg2sFzEeNETNDWNA65VskswQxoRwnZwDGS8WE4JbgRpeNnsLdarqJsgVFpbZ9w",
  "key18": "584BjB24AN3ofN2Ykvzr44Nimx35WJuTRmEfQFaZbTmZo6wx3PNrpY2sCy1nMRG5Un9o5YgQVBv9ftAf8KqYusm9",
  "key19": "24LBjSv9MeQWXbggLMqU1fBgZJwbkTGQU3KiZBbfHMLrea1ijXgcYKVHheRgiC9zdoPDx9AM3sxC58UY9g8pEAy2",
  "key20": "3M8Uv2Z6tsSSwQUYWF8feMV9WVUbzspKgzzTDnXvA8ogb6Vi6uarEqZv4um13e83AG5Hf3eWQ4e82fPjbaVR5YVB",
  "key21": "2C1KAFB7Go8C38Mvtu6QQ2BNaQwFtq8jeFQXqKXxJE9QFaYNrHZKYKdT65UVV6ZMmCX6YdUerXbMDwujRzoEFpYQ",
  "key22": "4cAwNZFv6xrmKoFzETR3JhQkG8AKf2FGi7xN7JuNQyDoxg86nmdc6yYRBGZF9inz5tg29pW66SV8XgTURBwy35jy",
  "key23": "7mTeDd5FweaoVAiLbP4o6rzqyrnvyYGXB1wHiECYN8nHjgj92ER1NzoM5RgMaUZCmAjxkxUGKZQ7Mr9kRgm7QjG",
  "key24": "3YhNin7mNWiia7j3PkoFg7ZJ7M43CqWLLUXPRkPgbMtDX4jx4VLpvofg6cwwvKhyLdW7EZ2HC7w8NdYyxLH3ad9S",
  "key25": "5drxh54uzLFTTM85iSn5diXMxMe9AeU7DpW1fhE1rtSgkxrr7Vio8gb91GJQVUiMzJijcQGw6k3Wu7gQjkW1veKa",
  "key26": "2eT1CUA3xyJA3GSUA5EokGzKsQfcdLhfqHNcx68fuG6vGBEMaUegZNuYVDB2TH2MDCNLP6Vds9uspRUKRwBYbcuk",
  "key27": "5HQ7PYu7s7btcTeDKEKhMbb3DsLQgjKrcSn5Y4oCuu4HN8E4fadZdP8CFDWsKy8vRf7zNdKDgsHswvr4Lgch6AGu",
  "key28": "rXMTXgBxaFbML5jYEiUpVpRaSX9W5sZ18NCP5LPUUgwG1KH6s4YGbpba1Z2yyBEGRFZqf6jye48qSLULxHFV3LL",
  "key29": "599adKYqWTvu6DjyJe4tSaWu36xwatufW3ssTdSW3aGcX5oXPycCZx3m2DB1nJrUT7ZgkYGWkXaLNLyoEn9ss4Qg",
  "key30": "NL2quG8cZEAbSgznNnKuXF8645LPxLV2YD7VjZJ21ppi4LjHsMtc136dfVvCezCbEwLvqF5j8m4feoS4t7m6Jma",
  "key31": "3nVH8F4xaBpf3wqE54dyGgit85Xk44tCuW1UL8PdiT11oN35Y31mJRS49gurw3qaDG4PXi1GtV1jWGzVpFwizaNV",
  "key32": "53NDVgPxVQY3PRM8f9SSrPpaT7V3repsdRaDAU5C3PJrrShBQyFMnKH3J4r3kzWXrqbn5whZDQpu8UUU5YEwyyBH",
  "key33": "5XWKkGWydo5DQ3omrEG1e8UMEoA6uLrkt4VrDTv6Xh6hwRFWeiF9pgZrCzGWTc2Lz5rRsnU7XuagK7RAoGN1DW8K",
  "key34": "4ZYDhHNi8H1MsRL6k9T773zWMSAHw9EY75eXtf7gBsr6ZgckY9hKe3DTSeoBy5PJVsQmYXjiCmei5YHpJiAQf6CN",
  "key35": "s5PwrYYFwhoTax33omPikrZcRM3EiVM6yv6t7qdYjTPa1TtTaqWhiJ7PEJC9rb251TBBTXFtPYAzGncfqszFDGj"
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
