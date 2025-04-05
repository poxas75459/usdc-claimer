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
    "4SoqCBQPKYC1hAvYQ89q1bk1mWEVnPxAS3RLeAMD5DoqoWTkzsahFRYkHffcvmcQVLQ3MH2DDb3psVbdXqteTeAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w5yYcPzjVALjGf3MBx1PCy9N3jJbapteSThJxx6tc8yEkTxaApRXiHYFpdeYKASM5ms8ybfhgaLj6YbBjyEFAn",
  "key1": "C4hFJD2TrYpJY4rf62XANiKhu4giNntfo1G2iQ5KHGDYboL5cFV3zWgV8d3cAsQRdih1WNGq8nsE6YKWPJJobGC",
  "key2": "2RkumyAh63wxsQ4zuviEzzHCuz7g6gSL1xpCDdvMwMuypcfHRkr72AxrNqYjHJMVQopzdb6pcafmv4UGLdb5aFns",
  "key3": "653cnTBvkTXYqW1fPS2uVZpv3zqcEDSi2ThUuu8Udn2Zyqpr2qHeGJQaQu8JSMEFirg82xLSPd7zbtb9viYU5RLT",
  "key4": "4vnhDxVXNsipFgt7fqV6jeAgwsQnoQwwebGXSNYSJ6o1fC7CuNP6khcWifJPLingxaeGkNfVTzaZDERLhfiJ2PJU",
  "key5": "5CdrjJLyTsruudSfwbQSCZywGitAciH9QaSG75yBaDKwommFkFDUcCDEdK5Y2qgfHvxnod8vCdJw41sio757W2EY",
  "key6": "4mk9mMaS6BHPrYDBLeUzi4jiMAkWqp5Ev5PgqWTycpyuBVrFTnKe4ekjPYyPZigQYsEtgyqFnYLcecygXXvGjnvf",
  "key7": "4CmZweX27WUkXWz5ym4XoiYmqRB3T2ihjk32P8hyQ3G6XCsGLb3YuSjibFjPAHVvoDJifDo9DDoxxqv43vf3K3mk",
  "key8": "23mjusXchTcDi9ZFrhYNmnFz5pvBDwreXVAosnHKV7rKKTRzgH7BuVj2th7FHLxVGSKXmt29bgv2tPjinkErz3EG",
  "key9": "6PMhEa7xDtCJ63xgb8LFswQEzM9qbhb8sCKvpKY1oMZ41kc1kG5r33FQdVtekAqZM2pb36GTsRcxbDGQqntw4GS",
  "key10": "5x1dZRZGxtyTeuTFznRCTqMMEnmahLFhasAdxG3DT9i7Xy2TYJZURVqDBDXBVRm12pHre76BjEgqH7Y51QRtDA7L",
  "key11": "3w14PgJHVYHXxSqPYEQdZbhS7JnViDUXEZiLvN9w6G83tswsLFuu5zdZ4rjUSkmPdy4oBGxN3TNdwtEY1iy4Eoa4",
  "key12": "2tiKGr5zP96Skca2FuJKB4QHabhXw5fz3WBoZskWrenZtL7Ja6NmhEsbLbKHwXPttTa1v8Auq7WKWtumeawqAmd2",
  "key13": "66rDKVLuTCSPSk5q7mwjqQ4x9cte6iPssKqYFq9G25Sfg5HoN41FY1MVSxS12x6Gj4v2DiXxiWk5Gb8VAATy2eQf",
  "key14": "2fodVawRq6aorQ1xq28Zn2TN61xAqGpmoVereQDEPgsPWJaQooxYeN414PN5Qhd7Yhb6uWstPh8koFo3KAzFsew5",
  "key15": "3CdzE5n1PuQbXxw9ws7qW5numfZTrQPeAJrV9p1qQa35gwF7xtvcr7mc7UvMSQXXELaboRRVpQ9WGxDARZ86dy6A",
  "key16": "cPmYmVhZyFe6P3TXTTEBLUbuZpD3VwSve8EDNZWn1xZJV242FddjFED7K347VHYbFEmScB9VzCgNdpLfvi6HR39",
  "key17": "25YruuV1QiQ4dD6cKzMEuz36Ls6MtvFbBgyfhy2AVpVGx9FcPRMF9D5zcbSQCF5XKcJEc51LiGDYLxnQV23G3ML3",
  "key18": "4F8unCXmPv6jhDsQrz7utVymGMXcqLYcyN9PBaUsq4w2SYvkiZUo3Xm7Wb3fmv1kABJYEY3jhKE4GwnSsfA3RbAE",
  "key19": "67QUF7n48AtKaY9FtEZLrmcZxzEU23TWr5iayt6WzCr8ShG7jMjdMaANqGX4JpURRgWqxi2Mv1sbfWVNtB56nLU1",
  "key20": "3zvdaN7LZ8MMJeHaohdhC5PXRbV5hn2XcdA4EFbp881guSfZ7PEutEQmi3eH2btbjzTApUgtv3sVpTFjaiR5pD6a",
  "key21": "43zeXs6khAh39TicL8wfceNTaemjh7uLHhaPXvLsEtToP34aEK6wjy5DYbRNjovQKsxiSRqQszTw1QJxtXePBVi4",
  "key22": "3cMv449AWcYsUyBGjnCbUf3q8z6MmxaqhB5q2G8yoJG1DXVnVLSbG7Yr7u7DsyLn3uMXgSpb78QLT49LvFgon9kv",
  "key23": "5ppBj2LqoWgCbpMbJsGq1aYp9fQuzmM3sw18ML6vP4ACe9YLou3sRoJg2Mp788vkGSiB2HTN3eU3QMLF9CivKkew",
  "key24": "3PoBNLMDzPphZm3JN8ffrttxrSqv2Ryz5iyEmyCGGTSVtisZr6EFb1jzEahhZihHhUFkbzvUjQ4mUWTmTbZqevDH",
  "key25": "5J7arCGe5rCER47qj5vVLBiS6sgj8t3t3LsFD1TGBM49kRQJNvL67dkGfVFPKbaqBanvhAXvYGPZ14oW4nj7A4oB",
  "key26": "3sx6EwSRMTT8HEmdLeei6kAkzxxLAXKRi7oHa8PL31L9td9kYcqAqBXfJMYbvZ9UwY5sv1L6RZh32X94LLZFwtwy",
  "key27": "5J73W8CKpVEavR8KaXMgwM7z3khcWpPuGhM3PAiqUaeAw83GWFqfEoiKHDHgoyfiDcNyHXtTQMM5PvH4Q7hYgX6w",
  "key28": "4t9kvegarzWJ1aukPSbNxwcmpCEKjJdXmyEwGzAsPuJFg9kChd8HpftMLzswnANL2AFgjiUXv46hxDdkJkNxnoNa",
  "key29": "5XZAyg4nDMtBiXEVvs4vYk6dg7CagygdDLeqkS9uZUGL7tbzbMsaYFpLZs9kCte58B66hw9uo3bHG59vDGXf72WF",
  "key30": "PUb39bG591aziXYJCZFomjVwXQhy7vusUTqsCPTTBK43Msn37sGgw7gF882L8cuk3Aozne2tPkfUbVVRFxPZYfx",
  "key31": "2vEwnyftzA8tv287hFwsd2f2aksgeqoGxz5N3se3J23hY3ed6BfRxYN4ngQATHfNBX4XffXZRRVUvbCHsBr6du7k",
  "key32": "2BgsvSPLQCw5VJGFRLanK8uRFMr9JMzSNkU9GEvgkr5kuXEGz5gYLEeiLRZyF9RtYfuNacwBUhPtyEedGqNLzoGZ",
  "key33": "2KJw2umq3NU7yFaTbhiDZ38RNhNuy8qm4AHMJPhPtexnDdvwDW2bJKCCGtt8VCcwvCiiYKciSoroYngGskDvPAoi",
  "key34": "3zzEmB1mdDw9DiNBmFzWWXRSvgnaeUCboNYrFUUovtmcewcLZ3Z631URftHDQinfQHxJNwaj7FLUYxBbD8V1VMiu",
  "key35": "54Z3pdp2PVNzTA2fX9RR3L7LifFS9kmoLCGYConc7NbemVBRAd2hHEkwoBXSTA8o8rbsFDH2tBqz1Txkbxq2LWte",
  "key36": "3afsgH2BThRESxpXMdG7TAs3UHstW9JZKnJ9dP6LzsEWsBVRkQYoBnUQatHsRfbgUwmvGorsrhddkA4gNpza5hnv"
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
