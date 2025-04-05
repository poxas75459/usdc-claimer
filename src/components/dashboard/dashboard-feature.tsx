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
    "4SkTtXeFVxL9516FjQmuq2aT3fs4LEWecTYwjwUPAN5Sr2BrZU7N88piEANqgu2vNaDNUfUas8JnDXEmWFW66RUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25c6BSEe9KY3wdw6jk5RvHoNKriDsV47VzZ4mtWefSYEqfXgr6PVfknxX1pMLaPRV5UWPWD8zqZp8MzY9E3Yapzz",
  "key1": "2ZKVUudscLM3D6Ldj7Dq2mhNAb8ynmczJwk6UG2rXbD44F9GcPaEjmuThAE4QZ8QJHCLX2ppYdp7usqX7nN6eByg",
  "key2": "3y9RuMhXF9Brymosx13MTkbBV6S8N1ntyszTwe4qXYNM84tPUF2K8wGnEkkcJoR8Cr9zNYs95qRV7dfLntkbpPXo",
  "key3": "5rpwqhFvCBg6531e1Fyrxbk9xScxP9J4QjbWbwPFZfegSMSG2Zo5G7psMj9tCynr7T4abzKsjqPf4qwruchh4Y85",
  "key4": "QA1AZ9jW9SksgNvTWDnRzNTnroyEMo9f9WRWQB6TSQLGwA2cit9pzojTziE44qhNz6ju8WaBXk2KLtu5fYedLUB",
  "key5": "23tY7PHRkrkhp4FzNy2vYsz3F2Equ98rXU5zopHRWfS8nTYwjbTMmW5JKWwNhMpHd297HJ5Q1FVyRo9T4kVsQ6CN",
  "key6": "3r2g1rANmDS2pUGBG3AmFgS5mc1ucn4a6AhsmViXBwuS14h4ns3tuTTuwrun8w54BsoAq2V3vhkvgtTPW6hDYQtj",
  "key7": "3VYnv1Dk1BzVVbh7mHXB5739iRy5MZf9aoUVYPmVvz2wPaPhW52JucnfPrRwwpXioKy1TCpezL49sadQweFvM5gh",
  "key8": "ChWaUhCHYH1cmrhrQNAsKdFWLB5AceDHkREwbs5CEegSLJfjvxgjY6KqCY5gc6F6o31TLYt5enwXi7pYBLnVLRN",
  "key9": "3u9MTizxRZE2Ph972jSUMN9BX2vED4QuH6cL5hHX4u7Km35uTbZZZguBrfBoa6BwLb2Nvp6v6e1tgzTdVgXL4PHh",
  "key10": "31apZSu6VTALcM8zCKDUqqrWLbDpoenbqEAgwcVRJBktg4LUbzFM1UHMpqfzZHg8R52vn9p9HCpqNv23Vn8fS4ve",
  "key11": "23c8mqb66SMFHngN73UYEFbBH69AmLPBV9vM8T1SX4yLUkXocvvYCRWcu4UHkrk8SemGS7EmgvWZUoZQ9rL4vLZA",
  "key12": "2HaoNPWcLcPPCjZ5q6zXNBoQEtzpejLXXa3ib4LE5xiVGmUHnLazVkhjCZi4rK7nuvDQMm3Si6cjTnHQL53wWGTA",
  "key13": "2Kz1J2WCnkegu8mVLWC1CTa42YUqhZft3qXrcEzGFfZeSmszagBeuqzh3z6p3fbWeabiqN2hB6S8Tfg9CumRmbTK",
  "key14": "2G1DFeiHexKDQ4nh6jgN1B8rBNVS6Tiu7P4wsKT7ZSEfCjRXGTgcWSq6S3h5d3nj5YKzGpqJin2U3uhwbtZURJqB",
  "key15": "7e2gXxb6xnbhjZ5dEGR858CVNRkh5rQgzxSTAsbycUdZSZufM2fd3vUE1FEDHC3vSvLZMj6o3V8iMJXbB72UT66",
  "key16": "3C832P1tMScHMJodDF2oLbPcrDGLD8ctyE7yDXiDDEiLc2xtyPLDn3jkHBLmRmnTrjPuPqbV8riPRaNHPdZ7b9p9",
  "key17": "5C6hwNQgpKH4wkUYF4af29N6im4kSzqgsvzAKrkdiJhhEZkDb3ffcm5juN9mHJmDPXP4JfLttxq4gU9cCA1kuCo3",
  "key18": "3QHwbDBHR7gv1aFDYT6gVWGCsze9v78ffDSkqih1Zc4RvodnfpvtatFWWm7zXmdSKuZrbbtY32ReoztVfWMy6zDm",
  "key19": "3SQL4y8QHAvKMcnVdsietvX2m1PBymhRaFrAmiZb8oNJq2cas9cSoPUdHH7MaRZXNHHMsxsrkNz5KCPsSMwk7Y3a",
  "key20": "3bKEA9RYNTGB6NHcfkUxRxAgFgRizJs56gPCy5bXPFwHGnsepThHcQUjuFBMSETnLM7iBJbm4diYcH86adAmyani",
  "key21": "2MnUFkCJ7esBEvFcxV73N6mE3WwXL3fHvxMLudAqSZ5NP3HGMPyqUUVjcF4hmTkvLgT2RFQCme4YsYydQrvkmzqd",
  "key22": "5skJ2aiFnUcDyFmdzmVYUXDPHNpfDqQMsUnVvBsMNUEPgfY9byZw9kCvdUv1ni7Nanr8mCjhqE7rTqCVCgQY95i4",
  "key23": "3oU49xdFNuRGG8PLibKpdBAZZfT3iE25HyyWyniKmGFVxbkpxWSzYpaDufw6RqxG1eS2ebPpQuhFnF5QnJadSoXy",
  "key24": "2HxNax2WgFCZ9EfNP6yatK3Jm85KXe8M7S3awN9LSKfHK4hTSpxBJyQptq349vwFHFz81UxQPFpRg1i9Ex81qbJB",
  "key25": "2qqrmA3ZwrtGz8jNRJTBNc6k91adPg7iLBE1oJzKuSS775Gs2dr2fhtQqJqc5q7GmqaT1sdgQTUBGjxwZa7sWbBm",
  "key26": "3gMx63aKjwjcpGNtF72zkSTnaKzzRw33Th21iKV7Xds84wcfdjSCKBpwwNCnYNV1s7UY6aZYqcMovtrAVkFsfuww",
  "key27": "5D9aGJSpu7NKDgr5w5kN4sZtjbx5DztJYNQWpY6At9UDW4Xg6d15wNJTpxeLk9PLP7v1mZC8c6QU6emNK9VpQWEw",
  "key28": "58a9KntRhkky5F2BPzv6HcY4LLxToCgKfLMc1wcJeJRvYExFp8vBnZ5vzg5nvFHrpcWWjtJUWgySB4vNUZ1Rz2my",
  "key29": "4HDtSiEsW4LCAqhoXJ3Zurtd7XbZSCVdAqoM1wHBnQ5T3gPjEwENh8DdKQw9HRzPLmebT3Ran2giuSi1DHAidQgs",
  "key30": "4Sz8FpPRd8JaZpipAkzVRX2eLjHHQJgKBLH3697MWRxZwmPf9kLkpyZV9zpS2uZoL4ngPV5xvFH9QUeBcHUKKsQt",
  "key31": "3EJDzJetcUSckxmAnJXTxDLebWcyipMHQR9yUVmgZ4ctoVASPY4RNDZDStajdFvVEQWX8RcYttbdadp9mAj8EcqT",
  "key32": "5XsDfNN7LRx6xnZgNGg4vRohpaM6DvmnHk5NEkW77NA7qU6rnuvJveSWjAxHr5TE4u8cmvrMnUK1UtjJidZoMniJ",
  "key33": "2dYZ4SYJYMqDdtKodscErwmcMSSjvYE4SpUN3pEswbQxbY5EY2C8z2cqGyjXAHvz2TeEFN7LgNnLhUUQe6vVKXQr",
  "key34": "2DfuGpYay56nFpubek4Dg2YBZpBodikS4PaifoSd18MSnKcsaUqpzXjZ5c2jf9GB4pSk5pxMm4XCSMKFHgesFs1m",
  "key35": "5w2bjANDsuvk3DUtkXkoxVej3rDV7A8MFjQuoR792GhbtBFHoj9HY3uZ6nBpZ8q6tKSN53dn9AzZYZGJYaa56yJw",
  "key36": "3QrZ2iAsT2PT4NAVwzX6MTsnvWezar2o3jWZJH4gbC8762vFHyQjiQ1Spse27G8W5zEiNn5mAaCE5uNhTcGVZwE8"
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
