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
    "GheX681x8zGdgGQsMQzT2Hif8DwhTNnz5pi2nUBSiAU3brXqt99TSDLoyC8ysNDvFY6jzseCAEHJj8EcMPqtb9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ay14wp3ae9juxXhUJoVxGTyuwjVjGEjqp96S1V769GGczC31fJv3XLfbb6RGUkXE5b4JpVB4TbjFigRnF8zaRar",
  "key1": "5nmasMFuVtqqKMnLFd57trxRqVjjmxxUti8V39Y6Ft554jGA2ei75VT1awpiBEw6T8vCqrmgqZBU7NRAisvLXcVk",
  "key2": "34PaYPmFXVYLRHooRPwiHw982Jxa5hLVC4tCbzxhQkEAzm6kZJKExFQHxhFLSskctrSHEZvcuydtjQT4ros5KMPZ",
  "key3": "4Ny5s5i371qvzmEKUKUACkXj9TGZtVAJ4v1yp8xBcdciB7iihy7Hev89Z1B9vnpxaJi7YVbjezaof6oL2FoJ4kmp",
  "key4": "2akXEhF3tGdbmir8ywQfnHEQnoB1hiqWYiFoNuUYZfvnvjrA9RsSu93JnZTGrnbsG2rpZmUoiFESZBhbtdckLsJ9",
  "key5": "3xPX1KoVRJkLJ56a2MaQCWsKqKC5LaDgRWXzFp8suqpqvthEU6tMbqJReAgyr8zZsgEktvDvmtfBkF448KWKCaxJ",
  "key6": "4oCGfRDL92S5rSAkaL8Yig7f5W9REaDZUgUDXy3miv78PWyCs3gb1M83DgBogGEEdnZxkuoLioWUVLXzihu3ZjWv",
  "key7": "4szt58CH6zXQkx4p1xuvjmuMaQo24cfLBU3mLbizuswr7RjEQgVqw2SpsVS9PQG4v5CJqoyPckjpSEbUM6hgYHN4",
  "key8": "3GvzFdF9oFKPMCNtsNsbmUGfAGs56WeANmfUMRmkoejyiaZzGa3QqC3CAiLLkPwqGDR12bCWvZc1FhyHoi8a2svT",
  "key9": "3mXmWqQZtu6vbnHWHnJtQL7DaZT64WdWW1KA7xeR51h1iai4JkZ6XzpkEKhjDfr2B2Q6iVYnCdwjKfN1z7NRDUUX",
  "key10": "mu7DKkvftnBEL6gvFytS33wbusBF2REA8fd7iGTRMdP76Wjiy2vB9ghCYX6k38TpZevQN5qRy2iL6z1sv7foJZU",
  "key11": "5PJQkWHtdC2JQpQC2WTqZmuYxQwvyUWCSXrNJ4CJsoddAwEgkAn5eGG1ZbSjQrQzVk17cmyb5x7E4K5Wz3Q19b8a",
  "key12": "3HkHLA16q1zEU3mck1dnhM7Mo4qGvHqQWVsy5wmXNNLZDDvHfm4SeKkiSVeBL5NW8uqyQdrBqTHgh6axD5oUxWAP",
  "key13": "2Y5Jkv3UNAmHLHkUQJqsvDtEs41rtwxqMdxRBkpg3mE7yctL6yGf4W7dZuABsULhWy9Ch1UQ9LH3NFzjrkGk4UFq",
  "key14": "3WpxSWNCep94CE3FaNV9mpP8mzF6XYussxm3GXvVYzNzK1Q26TcrYHj6rZaqQG84PgpW5NtW6tPhKUAZYBuN4JPu",
  "key15": "3YHeKV3mfwmbrYbatq2j81SNKa93h63arYmPf4BiWCzU73C4LSBK8itNNyYtqbPQNCWtddpq2LtbMhJa5xxRf6Pd",
  "key16": "3436HRZJZUwW5knEMFcWQWV6ByejLcZ17ZKjqWJuNSm6g6kJjYogxzAtgmHCzwbrVed9ugSQMwPpSjLaV5YpZv9d",
  "key17": "53wtqKtFBsZpBswMHMtWVvAtmKebXjBcZTwDj3Q7TQyQCoDRsuZ76fvAhd7kq1VPzB54qspYc3BW1dakUoF8Z2aT",
  "key18": "2Gyw9Tcq1QzM52fWR8aCXBX29mDkY4gtpnDgufxz52PG8KnyhqaWw6tu6gWCANKAjzqQbGE4ixaepQ5156Txq5gH",
  "key19": "5KbLFbodDPVCkZqyto1ZELFBfSozCBndk2x5D51qtdZCSSBubNVBGYnVQzyViwnUQBPfs13AZyaFXgSG5QjWBTi1",
  "key20": "4wzjCEEzKKU4HT4Dw25z3rFSEH22CaxnsubUKExgV1ksty2G57vrJZ7SKq6Sc6zu8MaYPHtmhEHn875uQGmuQn8p",
  "key21": "pwfjm4tSkajBxq2NHZQgqWBEXafSQ214ZGip2n7yajYhowhdd377oeHZ3dw1t8Ab1Fh7muT7eZJmT6GhUGsicqc",
  "key22": "GpmYg12VfoFvNbPdt9mjZHMboDV9qnXy5BGcfhZXiUvnWDVcUGUiyJG2nx49HY8kLbCtVvW6ok2z1STmFScAGZb",
  "key23": "4yoDdTXeLZx7fX3NQNri1nX1tDjunZorECqbY29dFGKb74DiufbxjDegBQ99hvahEUb39VVs4aG56ncKG4PpQ3KN",
  "key24": "LTfwWuGGiKbzy5iHXDRMxPxHnaqfYqsBEsqKcyJ43wLThrym9UxVEY2wqHLPEiFCH9xU223bHZK1xvQkrtBxwdK",
  "key25": "3GW7QDQc36Phq9NTzcgjwR6g7XghPArU46ha3DvXKmAPzbF9yMqRhiwirzW3D6ZqdCS77y6vTDLUgEtEKsV8apfW",
  "key26": "PPsjn89vTYap6b874AyLRsHPXE1gBNKXLWzZK4gzFB8zPMAcM7tMEgsQqbtiWLPHqMf9M4LLUfgZJHztJkFwWTH",
  "key27": "2APVsJCdbs3M7sX7HdtWhYy8wsDxDvgYFTG6ECaBHrVqrymxWtbBNf8X9YpjB3S4xMf9HtkZq7UVsZF2gus94zaN",
  "key28": "218fJ3zPQeRQv3XckNSiTqdMtU9vdpro7b7n1vRM2kUyRFUzjVyTKK3qmVLCRF4ynM8y8zF5fLNA73D9agWaAr46",
  "key29": "taydtmrv7CiZpqjDM1VGfXsZfqVUMdcFSzcHQXzSuNQnh1UsncJugmg77bGZM3RmrcSisa6NsX2HGAVebza8EKa",
  "key30": "3UpKQaXowjVJshyWgZuusuH2AuH5ojHcPerKkoftqEgytjHxniWwEQJQBczNr8qQqios6RnjL7hKPLSQ7EcK3EP",
  "key31": "5yUtfPww3SnDrTkB8mnQxfBwCV6tmQvy6hNTEBNBC31hkKxw8jNz1jiSuwZTQrCuvj4c8VhbvQ8msRK7e8tEnfPp",
  "key32": "5txFbJYoBQLXtvVX54iNyTnyg5UuW9Cy1JFscVXkUKauTTeuzt3GFrWwSUFrtiMpVdYMe2dg36qjWPgPCWsLKBuX",
  "key33": "2xwL4r7VZppBDtZxenKuQyAxomxz3ncPBp516hvHn4YbAeTe1pv24GsoZoPbc9iNpHWJdHqunCXM7bU5oy4VLZSK",
  "key34": "wVKqf2mRPW8DJKpXFBbPEvPg8uynmvWwFJQJtb4B2916Zn2RiHWPYBaVNw8xWWKWjjg2hqE3YrfCoiYUktWNXKD",
  "key35": "5qhxBccwzEZ9wBJfRCBkpZwAVXqyyVHCJ7hj2L88B3uymvjauj6PMSCQcdeWrNynhWai7pRx87SgAPBfHhzyqjJY",
  "key36": "TAN3wyuPyVJC7T29USaaK89CfLDR3d1QZeqEfNBPr25FFgXKjvvYgw75ZNbcxcoUpcxDaK9WHFbs7WV1rLZ4TfM",
  "key37": "4C3wJmd65aH9bNbS6HXCec2ifYXj1Tjgmw1oFCz6WKSwHrnDbZz4Wp74S3iyfybcq5AvbMSZyeJjpUA5ADmgnqTT",
  "key38": "4FwJYjrtMk56r6TfXYWNP1HpX9uiNTuub1JpwBJuEtf41BsijZP14MbsiFhhHzWPCKagHh6j8ZaRjFsFSdTfYtbt"
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
