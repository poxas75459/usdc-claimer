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
    "nmoZP9dYxrdd2p8DdLpg9sKZ4FKgYmAZKhqtHG6VGWmStmimXnpfGUUQ8dzH3vDBvaTwYL8kkw2ghN5942iXp9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DW57vFeMvZypSJZ1HykPnrtPVdEqMAYndAB6gqESEL1m1SQxvm3N5hghAcVKrkxrSEkgMwv9UZZaES74h5DTXQM",
  "key1": "3yKWbFbZ8CXAAyJfD3Jw6Zoc3PRREYHtBZG4oQPqTgvSHSzW13v8kuLDkSFjb2q6hED5JW7iDGuu6QwbnmoKsHVt",
  "key2": "5ZLacSSFaM8amAFt4HSHGCTBcuR2ELS1W5ak3RVH1PmNFWNP3ohrpqNNq1tEtE9x9wYGfH5CTWZUVHYc9MJVRKjn",
  "key3": "4d74GCTuE8DtWgYKpSoRvVGm5NFaXREjEvgk9U6Hcc4Se8XVyfHKteVjzfv7He7jxobATv6vfeAJaV4ikVTCmW7P",
  "key4": "55nuAwdTQtgm792s5PsY3BgRdoqAaDAW5ueXWgS74d8jdNhiuXG452Sm3BnB2B4X7wkKwhMXu1qLemZ99NR88nr",
  "key5": "3tDW2BhcqdHX3jQyikkhKVgpBa6eBBM6vvjZHGVeqYLtrR8SXGfPpxQUYgshNHURUio3Yqg1MbK97iZkhZbKzvGC",
  "key6": "2neax7EXSewQkyRFVV5294yqWsBXgEgHdwH48tg1ZiJ14RKdMWAxTCFVm8ha2qMq3XmAYm4DXj38iZfUqXjNQrrB",
  "key7": "2pggN69oVqgRJ8mxtiXys1o2J6UTesW33MMcULGAmYGh8RUy1WGjho84G7cVxJ63QRnbx43BSDQY3d5zBQiCNk7v",
  "key8": "5xrBrESPAp2AtDd7fEuByiUUNvDdeKbqg4k9yzKJQDdw2fJRvGRcGLSQ4DNbFXYhEsgsprtUFBy6iBVEEJfaCGQv",
  "key9": "RsHi42ZmoGu1wKTzJTYLshNu1BnyfUncYmjaivBqeuovve4zQzVrux9XPcrgTS27URdcvetySSEgPKsvTCippzS",
  "key10": "3ecJURZUr94FQjf7yTMd6yUmrqYS8XJiH6vqcpsfKZY9ssyzeCWkySvHnFRYvVSfnTkPknh1f4EsC58j9fXpX2pm",
  "key11": "4yHdGQUj1fjwTwTkPuW9p9KaX8fbd6brheA9URMTTjJtAuK3thLo846zoTQ4BUnhfqmeSqYzPqfyjqAb8Ebc43gP",
  "key12": "2DBAy1TcnUsSRWnY8ejs1iPhCKxwQKvLkgkqzvwM6CNJoQ9y3DE8Ab6taLXNzER6qSRsyJFKBo9xBui73zFEKCZp",
  "key13": "4R8VfAGhyrhAR1dF6sUfA9LVGZeS9Cxjm4cgdt3kKhTZdCMHZyV6iPi2sk3ZpxhY2feukhRJnQWZFjvXVtJvfxcz",
  "key14": "4MLDoUTrvFpvyvuFaqRAoZdF56d6VcPRZGBapV6GWmZ6Q8TcCrMJkChepBvBykSHo859buLimCqqxpaTPs28v8Va",
  "key15": "4s5qZXvrwS4jQxtUaS1pBQPpCw7whnBKkhbj2jRPtVCPU1oDQWiwdNLmMvrHEme4JSEFZhPC1VVZgxgEMBSECKcL",
  "key16": "5kg7cUDXYhj9HMg1QgJc57aqAZtnnyEVJEU4UFtPyCjHDrm7PtgFA4wUzV85vGnSBkt9Z1KjKbd3dC2qpNqASCrT",
  "key17": "2e1pU6GQyHxMm1dN4s6E76Yzob3PPpyY4UdAiHZbmQZRv1SaeZ1ep4A5PXf69WrQFGu3vZ9viXg9XCM7Uy4AVcaP",
  "key18": "5ce5vEjHXAUDBL4ZxmxrMt9FxeCedtMYT4n4g5MpDh6pkVW4yz4TDRVhVCGyHE3hcYEqT1kydWSxrV7hTvHz7DBL",
  "key19": "5BYN9hVD4PyEA54t4G8yQHPQvvWRL3uieVx5iSycGqdiCDrS1FME6yC7DGQj3aB3m9Dez8mYpvXgF7t5CpFPixWy",
  "key20": "4DWEEFDYK8XihDYs12MJu2UpEVLeXui8BjDPekUdV7ebfqzszuaeMApzxLRAwg9RJGwVTAb3TwhVZ3MC1JHR4J8P",
  "key21": "3cNHoZa4EpvTBhciLDjFG67mPhZBpZUPp3aQijDi56NJvvBeAMP8P59z9jfGHdJQTSdcgGKvFy1q7Qvx8a1bskX3",
  "key22": "3ZCtg76ygakHNtqUGmtXnvf9LFnarWUzKHjHyad4hsCPhombMXqWjMNjHrw2kGeUnSDDfvTMT5qpjxEj6Lo1KSHr",
  "key23": "kzxL6nKWeDFGh56nzNtf7b7PbHJh9wEXNLQr3uyf8NQWuXyHHmuo8cK7U3rqDwJeyHrsBf8HZawwGrZV85TLk6J",
  "key24": "4Xn7w8vUquGJ2y2VKXLVJpSJA37uoYDG73WaLMVexyWCXKRaedPx4dobMoaxnE8NVKwyaV6jYoFWBBgYDJh64TpC",
  "key25": "4fqQEET9iCFaPuKGtWyLcehJHaacfqsv5vQqwZ6r1bUk3XzUkDG3iGFvUAQ7puVyqTyo4JhuhZfZAyEk8vf6y2eg",
  "key26": "2DJfMCfWR7TU4A1gCQ1zR7km291vF2V2CfL5nJo6fW3F7wkivS82TzoTiohFAz8woGZcJwjDkAhcX7WqgtnNMXZR",
  "key27": "2KxHxwfg57Q5PuhbnuKm4v3c4eagyCrrNW1ge7vXLtNMSxoPQ46X5CYN4kX8e6tNMpoy7cZu6uuSHSVW6KaowZUu",
  "key28": "5zkdxFNS8zeJUHPivDgKPM4pocoAahF1NWBN7iMp8tuTkFc8nYU8UyNnMtfc3xcQMXfz16qAokf9gt2eYMcBynFY",
  "key29": "PSgZqGBdL5hJeeFBqEyb5KtSMGJAWSSFBQKvCxwdfUhwd4sCAXhNB8NasNeacpkS97AHQHgDC1Qr8yPqV9SpW6t",
  "key30": "4r3QcipRN3cHoG521etLZbYDLqVHp7Q3e2FTnEgaUR3upVYgb4UJYAFivc5DdKeD8GcwRhUYhcH427QxQagFtt6c",
  "key31": "4mDQckzbnbuyhy1GxmcDSm1xkDGGa5KrgQvH11T2e3zNrDS5fiwuAV5HAs7hU7tN76RSE36HvfLcL8ScaUryAXoR",
  "key32": "4MsWzZADp4siggPE8gcyg9qTkUUoYvv69f5KqSF8e6EybbSVb52xextVRjGxjqJHrYEpgZuxLbrrqSBjHZNfxLvP",
  "key33": "DAQ1QR4dzoYofH5kqGUzoBPhdrBaXJWjGDbA62KYss3LTMCBWZRejNBxLYfLUMFaAKtDPuCMw61wg5ygovVJeUk",
  "key34": "57xnv5kv4LPJ1Md3tU2wnmnEbygZa5wUW4rSfLzGzobWhH6swQaN7qgybYxipHAwuuG7aUwUAhb6PTdvtk8LbPQc"
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
