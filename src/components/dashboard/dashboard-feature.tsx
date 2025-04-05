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
    "4Kkz7xyANsEXPyUAqsC1n8ix2SCMS3oXfzxfL8Gr4Hto91ZBgdDQWT5uzLuebVa69p73xYetPKX5DGCU4ZjEhUJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XdsJhqezKC13TkbhG1H4ZWJFfyu5qAdAypp18fkvGMKoC7a9SjS5rB87xED236vPXFvYDxFphUpNapKfZFSfF9R",
  "key1": "2Dz7rAJSFbEJrHfBaHY3rRhidD2WLr7vnMi3FskRqWdQBudDprfGYRFJ7pftjT9deyfj3pmi2bgV6teGzVUDHYXk",
  "key2": "5Uewe1yJAcVV3tLGnWXuLnh4vhrvyBxyCEP5M9XECdKkZeGeNrVKFTg8jhi5RmXZJoFQf4EobgNoNtd2qnfYgnTW",
  "key3": "wfjMvokVZt8e6NG5q1dn5nAseqzbfAqbhS25sehHGr9Ac488123sK9Hh7cxFBiHVNfYYvpkLEG2PKEQnriqo72e",
  "key4": "4JtfT5GswPsx9ndPYLFm15676jpY3KMgqrkhfetR5fEZ9FnhRZDnkzSRB7izjFVnw6Y9WcCNRrFMqzsurcwn4Kz",
  "key5": "j2Njtyo2fARjd9G6d52gYyzrESz53mGekACA7yRAbLoCd48sdqEUyF1nKqzG3heegxnss1QgZGgp1fcyEUHbhVs",
  "key6": "4iV6EusWTuXsPCZMj7SEBRgNpPfGAuBn53RNencVrFvBfnhF5Vq3DZsieQUrxup7wKcXGnfunFuXhkV3CzeEKujM",
  "key7": "5ZPemvLk4yQcDgpvBHpaYgTvU99cAuzgj52zGVtdtX9xUdbyRBth1YFVXDbDS4pS6LZ77TNnBoRJLZS3h6WR2Cze",
  "key8": "2s1ebPJfgC11bvNSF7eYbSasRNF488MHW4cJim2vpNLKrtxXbje6fC5UieUEPgBB3T7zZXHdTmD68Gmn7d1uAka",
  "key9": "5eoFBtWxwM4EHKiubW5ZZgkygYamTf6MbUFJ8dnbb9fEhGmbxNyQJG6N687HYPx3ZVP1icT7TJYcra2UgSbTF4cp",
  "key10": "5mF5hfhz1isoBy3y1xkcav8qK8etzJ3DTQ4qUiHz9V3XSWcexKaQpd5KVs9kupuZBcxgmiKiTcdY9XaWijhtmwca",
  "key11": "3fr5vPcM7u9WrntJAJXVgFDVa6V4B3Su3vW64L9xQwu39iR3nW7qE1Ae8ib668M13iuxz3xYMLVP1GhJk8z9QGey",
  "key12": "ZZYhsw92BLAd7wNkrzuNXDPo2GoM7uFcdMbXTKugLCCQsRgErByTgresbxYD5haCPanbKWsrjsRre6tEvFU1JBG",
  "key13": "4AWFHFi6y9MjGXw2ijTbAGS3jcL6jq41V15De5c4MjRnATjL77GyijdLovB9ZLp7nQBXcGbswX42s3oYFu215A6z",
  "key14": "37jbsDHsTaa9MTaZ5NESjVcAivz7bxXduTLV12zY8C13nJu4ZcGewngBuNMVF2oqxPbXRDxW6sDbmwyZpjiSjkLM",
  "key15": "21528u1hJJLj9CbYaW55uPjMFZH3NWh3VJGfKGD9KuMz2VS3NBJhMCvTfYZN32Z5kab4oNy4y27uAch2kMcVNdJw",
  "key16": "5Ny8gvN2w6JAXjyBNxc5jsXeZp32KTVDcobHVte42jFyT5ZxTLhcjQrNo4yP5WPRNqYAqJznTirdzihyx3ZVyN7u",
  "key17": "2mMPqQ67HN6RQK4pfNFjmjcqCRsGjvdRebEUsskpCacgvZ9mRdkjDh8CpXEF8AE2qCLJDFSTXuRa1hyargfxeHcG",
  "key18": "2pnzDJ2MSrPatmVgP6MTEX8woNUdL2NUUc8DdzqHRfzyPSMFGdQwah8quqteTwhprLufzS5Wkyb7E8ydJseHG8NV",
  "key19": "5tJmGG9ATdTG5HKnKPkQ7NxahMjE9u3CquW4rjiYis9G6YjVNLefuY6UPBhehRDTZQe6ayE7X1n8vLrjyQMsA7j4",
  "key20": "2rYCSie5KaFcZA6gAz7hs62j8gY3ZZMAFkZhJqChxNXPsZ1GFyEQJtYtb7hv95DjU8biCJcatVvDp4vng16ukjdk",
  "key21": "56Pf2XHQqrRJYcgFE38WCZHzeF6R9cdPpzAkxqA8ENREtqdm6SThHbrbjbBjN3m7xUSGJvYqGm2r6MEon64FanDG",
  "key22": "pmEGFWcWusgAhE9fuNf6mTL75z5ut3T7ToCgZFzMHm6yWMe2j9EvbDkm8q6MqoZ8AkXvokaqcJ3Vwe3o8qKzKnb",
  "key23": "2qtZVfm2TH45voAUrwdkvesH7d5UMqd48fJaMgQNJeNmkSvtbNaizL2rNVPHnUsWuEky94gsumhJ2ZcKmywgpz1B",
  "key24": "3E4MMKvZzUn9AJXMTTYTAuRGMvvujXiF3Ws9uRyXmzvJKZHUzEyTV9LHj384S1PGQn252xoQhVmBsHCPxH4K8JH3",
  "key25": "3aFdQvTdK9XKDYKuh5Wk58DZf4XUM2sz27QXcqS6yAhj2ZLmFn2TtHmnt6xy8s3Zx3QXZmr9vTmcvtb4BzxaK582",
  "key26": "26MUorWEWyqVSmVWCtjayXnByfB9WU4wnoAYqeDWtmqksVgPygXpM7BhogJWFnqfymuUxE72Rmwhobo1rHfaMYCU",
  "key27": "3yV844AwGf3uWwBjxnBHbSu2QewHCtbEACAZzUYrDMZWcPFyh6MpDnN1MkriFJsPwNDLgQSuVdrSkVCotYmYZZ7K",
  "key28": "3yqKZDjnmhQyLGjtjJbLqnKseGX7Yq8FYg1LBoMJSnkRBgXJWdnU2BFNF4JNs5FYiJWmBTgpmhp7LzU5UgL4nT5j",
  "key29": "d3NKrLZqyf8frxv4PPVdrDYr3CYJsJdxZwD2NL8xx9e2berohnYdoaLCpYDMSUvcKPVNzpuXkBy8TDRvQdnAqWF",
  "key30": "65K46UqmnBpjfEr74mXcmtQRLnDs4g9bcW2cNCFqqqsy9Z1ctvxgEBxWkiEtRSZXojj4UKAMd5bZWLnZuXoKohy9",
  "key31": "5LuRdWXP5TnAsnQt3LcJrmE3fLb389YUUFdBPQvar911aucznPSCex9A1822CbP6C2RjcStiQGWr5SUTgsJKtz6z",
  "key32": "5aQhhBxjqybpNPeBPTfB9QhhAX4jGuQ67AijE8SLL9G4eoHLR4qu4zDzCESsYWBqZXsZ4TAVYpE2nwG7zHuxTZC6",
  "key33": "2V3Ezq5njN13T2mrXWyhCBk99zBe8CzieFyEdNoK7MLRA3R7uWaGUSDurAP2DYtQukdLTLqzgaMMfgEB6suYwMUT",
  "key34": "65b9XsPUB9S8fzCvxZZZRaw8RjtV9Y7UNcQ1mhBMVuSMERYM2vHM3aHn2xLDpt2fidtNWX24AqYsumwjXYDKvHnH",
  "key35": "JdfWgngs3ytHb2r52wEHinyKTS1LT3iMDaFkUhHLPXBTqbUU4EcCXKPDSDcq1Rt7jKjTDhh9Cx8Wu8uHTZCDN4p",
  "key36": "49esuxgayziE7gPdXsY8ZF2o4FPmZWDAWFJTosLV5P55EREGCY7vNsskekqySTrsv6bJTsd5HhFVq3X8jkHwyTvx",
  "key37": "4kbVkmqA8aE6rzGw6Cvzmxj7b1ugyQa7MZsTUtWtEwwdaJTPq3LMJvtnCHppuSeU64okF43CFC8R7HecY1BobspG",
  "key38": "3MwTKeyVBss3DcGs7ebtshxZPGfQMYyM8epD84GD4iM9pNJaGj7MzuczUBRXFrCJ89SMe1g1RbV9eByf7Ras1rbb",
  "key39": "51NCNLEAs1pAey5HaKfRJcm3vNf5o45pHYC5W1GA8an55Y5dY9X4UrgUHqdapRCWphQbwHyRGfL2aCU6A6GYEvXH",
  "key40": "3PnDdt7qt6putAjfdi7gnHptRP2ku58wpQjZj7NtsTZyt7zaNn9rfreVmurjjGk6KsKAHHGR1xxgqn9PrF4XugTa",
  "key41": "3jZ95fSvYuxQNRMmoa8gHaxu2xxEiihx6nUJAwXZv3DdicHykNmumGkWg2Hdn1VVu7tzyXUY8SQkAL2CfLHhtVRj",
  "key42": "35gkjSYJUXSs8Jv8kkzmHiCzBpGanD4ucd3Hnq3C2r9LGyT6xYKdGGfDLoaky22nDebBT5p9aSq4F26exqZ65Df3",
  "key43": "2ayJUUi5zfXcQYeKunqqF5gXJYyH6nHzb42Ks78BvoqqoVsMYmnM29bL37mbGn4oTU1nLhfHwcVWMr3DAvVDDQUJ"
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
