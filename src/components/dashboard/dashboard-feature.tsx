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
    "2dWLirARzvpY69J89Pa2BqXz1Hf5FrMkDRkTbUYNpVXNbjdpA9j2U9PD4GjnQwcRirtGRwEy6Qpp739kvSg1EKMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b6vSRkR23qWscmWHvqNB3u4FfLpwWrH6xzjRTra7jBGgxX36Nwtg4m19mW5dLsCwyG317m3hFMpoZXXyX6SDGXq",
  "key1": "2u6QdiQuBZzRe7jnC3jL58fpzLHMLZDCZfRtHGdxmAyPh5qwGhhwtFw3xQ5pWjy5Fime9h5MQ1B29jE8VZsBRhcJ",
  "key2": "2jY6WKxAyr9qDzjdX1vwesw63r9wKvZ63Eq8k8ThH4NgRh2zypyWe3Hcv5a7UTGmhqErPEFFL7eAsM9DSTfcLdec",
  "key3": "3wWVaL7o4QRjgs8Sgav36XzpytR4cW6WkGSUwq9885m2gKEtK6Fg6mbu3SjjD2DEZXtkbEf9Ubhh9NFditqBN8aZ",
  "key4": "5i5DRNnxDuysNt3fHcqYa1PCAP2DXmSSsuSV8xZnp6NLv2thaLvWpU899x6Uf4CsaNfjvFUpz1VoYauZHUmmtP7a",
  "key5": "24PnxTqeZ7ip4YgHVzFhj8N8XJ4mkuSXmZ2gUBXUbTbtaoUfVJSozKR3oCzGc4FBB6nFN2yWJXgfRsd5MWG5dhRK",
  "key6": "NuR3FwhGCJew47kwhjdc9MkXrioZcMbucskqpT2CUgPujJ5uEBjj4CafdJA9meKadHX9GHNeQtTkxVj49Gu7NJU",
  "key7": "MrBwgfmdyTJS6nEbnRpmiaN89tkVKX9KZor1RJV9myNEYB3k5YdhhSPu8YU4Zoq1LDzQaR1mZNayQkQWSBeBQ8r",
  "key8": "65mBg28G5T1JAPERapwFsoiQMGEmRcMbfTqooRfy4huD9Q9fo5seQpAQ5n88Ro3xmx2iTFtVdNjFGewvhs9zdL61",
  "key9": "1jQJaGZyaNrjMjr1ky7jiQEciY77FiQMcPdwNTALtK3aExuf63kV7uFsLag5GA1AjLXZZcUf9TWMGFPttqMNDrz",
  "key10": "5LdufF9J6rRTSjJp5ynzUAZdej8FGbPrNfuMVwVHegbuMiipZ7uStHQYJeowGeGbR3bpqeQESbUJpJHSA27Rh2jD",
  "key11": "VvdpNHYckWckyPku4oxp6v9hN4o16JHFgvDpcMQctYCCMxXzUatj3syZ7x6eLp3XmTaWu7tbwgoEP6vPtppz2Gy",
  "key12": "K4wgQDSvnKaj8BjwLhFsn1sKbQyqJowJNgFW1YpV5aNRBtAV6ZUJaUPoubC8CmgJ2g7k4JGeHoyVdEZu2xhDyhK",
  "key13": "2sEGvMp3um9uA6ZZqH1aG9E95Fxg6nVp4GRGAshj25ap2SwnfcKGvM7mxpUzecXCMTJcjP6fxyDDj1ZLi5bVt8UM",
  "key14": "3bzE9dNBgad6kv3DhHUEtiTxCoUcfM25gKbwd8QmGQ7v3y7ymzGvgNBXZE8oUAf8Dd68zrJrF98gMAUMFhsD21wV",
  "key15": "59oC8HZJ7eWgsLc9b7WTW7gJwgMnuthcWWNhjKbhmPiN6SEfhUk25v4uHHkLiDf3m365ij6AwbCx6eh4M81EkYzc",
  "key16": "4mLUCviZtdSyQQz4oGU256QPYzWegFstZgB7EjLoSSuhga5pAb88TjhW3guwocQfBEmDgY78hhWZfFefRhtBHwuZ",
  "key17": "4uNfeZjE8qWm4YcDg6EFTZ2bUq3re1x88HJ8Zg1qa89Q7t7su5xkoRDwUJZStfBicrZdx6puMuGLuVgmQgBeEfib",
  "key18": "5XiqZoQLJRtYRYjYnk86kwXPR6zRi6k9yBbcbygSLRC8ZMtLCtU3EDiCNkBeQor4fqNdrEcnS7yWSwbQnvSeoUiu",
  "key19": "4HcsVutTKXoFvsKkfZwZr5QM6tBNxJij7K95qqwN8uLAij5kzgs9YemMXeHhMRiHrZpfMW7oQ7dFNiLZ2jYTJYNu",
  "key20": "5Arq91zrwkik8N9fVBTZGJqTad58o28FtbidksdLX7RAp3xwj3BNp3xE5y7aVAz9DKNBMKWnkK6hYe1CDtRJ9mPf",
  "key21": "5oKecGU33VyLCfTKUypxq8XyTTQhfpbpkD123rPnccgGrZFhKpM5RNy5TT5G7EUxLVxnuKP1paRPZ7fNox7JVHu5",
  "key22": "3bP4rHahhRnTUcCNa4thM41cvNqxFeyAaXnHWhRFtbYRjYQz5JJ1PUjduJPnZhGC2BmdNJEruQWWeTkfyQM94hjh",
  "key23": "5cJWpwcjNr7pxSRkY1goQDrLiG5CJMgSeRE4WQm8tVKUmP389HB1AEoqtR2nALo4hmRgo5p6qoRHordMtszJ1CjN",
  "key24": "5JTztyDavJZTPqGZyXwr6ZyeXWRUyJWNgAFYw2ke8Nu7TrNB4SznQ8dgRxi33NRBbh1jVS4dZkSi2SFGfwwnZWpA",
  "key25": "5moMqzTtuYELnf17Lkz9cMUukBhLWwrkekyrohcwzDKKpcH4Um41mV9B2q8tkwKqXrhTQBnjU39vXWCUHSYqgrPP",
  "key26": "5zLuzAmTB2aGHwEnegMs4KtnJWMrqEvyBBCCct85892XFZth2j73YsqhkHsYdqVjM53zw9yaTV6Uz5n44t2DUL2F",
  "key27": "3UgtknXEZfFEWAwKKZq5VN6BKMYtberG6atTcCUZyJoFjpNT6xL3tKRcNpfmJeb9w2fb6QbNumCfuVMx2bAuPLti",
  "key28": "4BAuvAyWTpcGhX8kC6FJupHNsHcQRW8Lnk66g3C84giM8VHMzwD14C6QkohEmsBqMF2E2SqTWjuxJUi7BC7iVZef",
  "key29": "2xZoZT1eHFhKajmxzC81azDtxL55MFVuG2M19FTuvE2D7rtHViiWTArnLgLbQzxfJPFiooo4atm6zusvmnjJQ8KC",
  "key30": "5c4YgDbxzb3QCgGHW3few2tYLDjBm1vpfwmzNeqMN19uM4YA2DzcwKEytkuPyK4uLEGqc9A4PzZqX9PHatLETSSv",
  "key31": "3GYaQ1NN2K1GKvU7Mc4bz8qXXW68J6taKK3eZCvTVwNX2WajXNFU8HtEQXKrxTkYN6s3dDMncKnwhhVfK59cHAE9",
  "key32": "4vA11yTTY38iTgJ7GFQB1McZSBaCnMNYRresDjHpGzgmiMrpW8adedsApx4y8XPSamRmJgGg7DVmtUu8HGA2USae",
  "key33": "5XV4zjRA9zYEmpqRLnSFJKeXq8e51RazuAY1Wg8HwUJjdUyZwPJCu6sh9LEi5U2v6WJxU46rnCJZf2ZZ4UvuVBb1",
  "key34": "xpiTHgBtLHuhNRKZ6tg4qUWGBmCynbUyBjtdRJ6Bwfb4K8kEytEzcyWggPJSwLg4SmaWFRTcUwPtmkxQ55ykEzk",
  "key35": "2Np8wFWNybiAqQE3i16q9XxLEauL7S2avdibB5xCnm3GcCzotXXXvZf8EBML1dkfisuydetjFa23twWH2sGL3Lg8",
  "key36": "49wori73i88DGtRYUdsRQDQe4uHZy9iphDGon3oEis5aZsE2RabJt6vAUCQJiErdfJMk9dfAWDTrnPHHgqdrkQhn",
  "key37": "LMWk2c1qg4buntzFtaPNxKs7dEvZqSatPatKS9aWrmKkL2etJv7itURh62e9jHa7axEvZbnPoCobc9ProoPxAxa",
  "key38": "3qnCgYi4VgXAi9UmEER9fdRnpwDc8BLDpAjtzZFGSV92w1GvLjqpDngU1rR7GNbgBLnHMvZCPHaw9BsSvFkEoGBH"
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
