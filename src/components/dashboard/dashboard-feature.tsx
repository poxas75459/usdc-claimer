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
    "2EyjPoV5c4PixknyJMxRdu6YmPmHpMSMqBmHVvhLN1DKyjEyVs7hxQcJPzmUPqnNiWFVF4Zw1bEzTMuTeH5VeGFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EWZPfnoekLkQ3pFFYRXEiFKGRqjeQjxdFVbdp1uXbKDGRuQh7p6tmoHXwEeRaMQQ9PeabURXyURZRnhgSxidTQH",
  "key1": "41xKqty16gxBSLYN7d33raB2pS7GqrSaiLhxo49UhvTQrm1GFXTRP9uzxBB4kXKSnFdfuCJz1Lk6WmZ8RdjxLpTc",
  "key2": "x9LZQZBBhDRGPvvGPe2jfdWpDRUFbiAVawP2fR11RUYHwidXgfd2A9khoQih7cGzQrk8r3tcweouW35N4vNarjU",
  "key3": "2VJPbuoYdBhw3xh1RKBExrL553kNAambn2JPzMSHZze1W7qhj2Vv7MS3eMQHZeYyaeGUWHagWKifckGQNyiqYWbH",
  "key4": "63QRmcqUAY7Bgnx6MQzYS3KfEZTCg8avUEjCXKx8amQzGeKcDb2DT42pciHWR82ngya4m6YvR5xR8ihwiReiNRAh",
  "key5": "5SBbBGMwYECc9WnPR35GHGRX5fvzKjiUixQk5XTC8DXeHvatFqq1ocTJo3NgBdn2Sw1hj6ryd2NmEdcqujMpdDVM",
  "key6": "xP7g5reCBiZu6QFyTUW9zWHQ4Z1sULnh2cF26qDFGgfgt5qjBzgM7NL8f4uoKuiUvBuF9AGph5hn9wcHtTQUYVj",
  "key7": "2wmJdJV2nVZh4g6ZuEgCtAY37WevgJr4mzWGkYmv6f3Dg5snjzBLjNmRoTzrVxgLw5TvjGhMg4QuP7956Bn4Au1p",
  "key8": "35hoDHfAM1VA7AwbYqZgZtvPGAaex3WJLAtj9eAL6qDyeUT69D1QFawMixxE8DP7N9oVeqNs11SUdHNGND14yben",
  "key9": "2JEQBe7LqBy815xDjKds4o7Qr8V3sPBizERPJN8AgGPFnzxVD8Y3cuxhAFFC3x9BzxLcPbMxP5qsvC7Tn79Ardtu",
  "key10": "3ZtcFybN8h6eKS2JpoYFvaMC7wceGdTocnnYdpFDWtLCpZtZsuKSLGXZwEpaZZnF1id4BT1WDEvkaX2WanRT475r",
  "key11": "iuZBd5fadQe3w6BH36fCkotu8gBNZreThGiCHMJQohEBQFn9AswNHaro9TncoDqEGUg4nMfhm8GzyhmThvT3ePM",
  "key12": "23XEr3X9j3qJFqk8eSH5kSXvcHp3rS5C5esJA36H6KH4SYbimcUWzFsargp2zfJsB9eE3zYXsQEKShrybQYcUtAu",
  "key13": "4q15B2QkMFBG5Rgv1B3hdZS6gE36k4AXG1Rwi8iJgBwMKtdRcdK9upRiC2akGLn1Zi6Yu6ew5jrrYs89KqJhkht2",
  "key14": "5rHwmhft5GJF18SbjUQp22Q5jcG9qdpNcuB8ZCbQx6dihWKxifcZmCpbCsUttGUUwiJ8J7KDQ5zBygdhzBR7RdnL",
  "key15": "4aSqaq7of4MDbk6puXh9qDcyZKEPFzSHT4u6GS2dkPxBGEfFtSH7Gi1z1v3iRqQS1o8tc8UZpLz7zVkekMKZq1nS",
  "key16": "4VtC78rTYiP8gfXaJbPktBjAEVrwBK9pxFvvSuZEH8QbenerzXtr4Ldq81BaaLjXcqV8AxN8g5nYcECkft6ayF5",
  "key17": "4bs8sYzwV5vYvdrp3kn6FhDnLLXvwBRUqDSdfxqWzDqQLDSSa3Xqvojqnx2C2gVz9DL1SfmJoSiZSgFogqzLtrs9",
  "key18": "5hreSEsUxZDLgMhZ1aTVaioUWyuVcLkVwRcNtsDDX9QCUMwyw9yEWc79EyKbDsVjenoPvy9c7PPimVo69M6EZNpV",
  "key19": "yYCeoY4q7amn9oc9dQ5qPAkpcQd3VgVmQh6Fk6ge6zD6WMhAiuKntr7Ye1CVJVpi4iRZgFcLix3Ntf8KcvpPzK6",
  "key20": "4s4xD1i67zhrHbd32rL91yaYxMsPyygBBhi7Ae6XMMifGuxnGX3WeunX1xsETHKwaWxDh7VzXRqijryawSgi6m4a",
  "key21": "2z7qvucgyK6m2bw1PQuyAoTXNaMfL8ZG1hcbbCs9USsukSVuQEATsRSgHtqJYEehxEcnzeAFeZWEuUCFaRSRAYQP",
  "key22": "WTNQNHAR3TgrF7niPGJDtGWpPP7jmUhCqYSrJuVRR9fYQb8TxAVF4YF8rbrGSN1mnCY9qpwhxjHHSZNcMuE7pf4",
  "key23": "3YCpRYPgLCms1U41nZ1CbuLU15KS6rTmqQ4VeJ4YFKLZQgam7ErWJzpCjazpJ7G2DXSAwzDKYArosmU9d96N4t2A",
  "key24": "2z6cYR3bnMArWRcM3Y2r1tJ6CxkMmCa1vekzRyu2r5zChLzzCMVaHeivAmTa1GyXnyhZ5ZmDs4NMp7bwu2FYqKc9",
  "key25": "2cnNjDobQDJGAtGBFdk82dTms98AykdMfmDJgqQQEEk3QLnqZqBFWp7jjstS9bdeYQpHLYDsc9JD9DkRU9xkiv3q",
  "key26": "5ykMKLN35ExWRu5ZStD2nndq8i7CJUVtt55srJdXcPapXcSA85GCsDvGNzBz84siY4WanRWnVsyhRdbn3UNxj5cs",
  "key27": "28aRgJsXLdMcvhSocq8aDANqzfhq7ocZtXAH9ar4iws5VFT3EhcSY3Rjm9Esg8FwtsDmoeTg7YuAmKxbEYaso5p1",
  "key28": "343C3HC8f4svFahuFVPEeoMTKEFtQb64Vbhe9Ss1ANGyARV21Pi8EwF5KHGoUjRj2dtFZpqSvYxnEkigfXxjQtdt",
  "key29": "t8Qd9dH8N2L3HsBqa9cNmiEGbvpJZm8icfsSDy5pKzwmMcQgLRE2BDEWE6WUCsAj9ugoPuYUV5RLnB7SoXaKpQp",
  "key30": "2pLCBeZ8LRNggMZ9knVw3vXYM34kHpkXQtwmC5NopZLe16C2qbkGnFgcWFrdgd5wfRYaCfG8jzGHeKM6TrV659Hp",
  "key31": "3CVK2ERFpa1ZfAtbUuUNM4JX29q2H8nxe4Axx8TkG1KgizS8KwWYBKbq8ERBqeisw8ksmikWLG5b3BtbZ58rh3Yo",
  "key32": "3Ac3bgg8fJZsEnvNAgVrTSqn7j9FZAjyExirZkFJ6CJG9xhnFNo6NUEcSFM7AxeiUYc9UBZRR4N6cZVgBcj1cNL5",
  "key33": "21pLi8GMDP6UepkKGECrXfqKT9f4U5j2aA6rhJ4jiw3s2Cifpnz8ch2Efu1zdHH3nDbuU4WY5XArR23ev1A7WLRY",
  "key34": "2o31rbQrpjENUVvs5q42BGUHsU4KBPqzQqkqdyfs3w1eAZFXwnrtTQFHjrpb2Yr96T6gLhkaNQF5BBVrSAt47iVi"
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
